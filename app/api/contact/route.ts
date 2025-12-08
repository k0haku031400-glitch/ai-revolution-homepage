/**
 * お問い合わせAPIエンドポイント
 * POST /api/contact
 * 
 * 受け取るJSON:
 * - name: string (必須)
 * - email: string (必須)
 * - message: string (必須)
 * - budget?: string (オプション)
 * - deadline?: string (オプション)
 * - company?: string (オプション)
 * - interest?: string (オプション)
 */

import { NextRequest, NextResponse } from "next/server";
import type { ContactFormValues, ContactApiResponse } from "@/types";
import {
  validateContactForm,
  normalizeContactFormValues,
} from "@/lib/contact";

/**
 * POSTリクエストハンドラー
 * お問い合わせフォームのデータを受け取り、バリデーション後に処理
 */
export async function POST(request: NextRequest): Promise<NextResponse<ContactApiResponse>> {
  try {
    // リクエストボディを取得
    const body = await request.json();

    // 型アサーション（実際の値はバリデーションでチェック）
    const rawValues = body as Partial<ContactFormValues>;

    // 値を正規化（前後の空白を削除など）
    const normalizedValues = normalizeContactFormValues(rawValues);

    // バリデーション実行
    const validationErrors = validateContactForm(normalizedValues);

    // バリデーションエラーがある場合は400を返す
    if (validationErrors.length > 0) {
      return NextResponse.json<ContactApiResponse>(
        {
          success: false,
          message: "バリデーションエラーがあります",
          errors: validationErrors.map((err) => err.message),
        },
        { status: 400 }
      );
    }

    // バリデーション通過後の値（型安全）
    const validatedValues = normalizedValues as ContactFormValues;

    // ここで実際の処理を行う
    // 将来的には以下のような処理に差し替え可能：
    // - メール送信（nodemailer, SendGrid等）
    // - データベースへの保存（Prisma, Drizzle等）
    // - 外部サービスへの連携（Slack通知等）
    console.log("=== お問い合わせ受信 ===");
    console.log("名前:", validatedValues.name);
    console.log("メールアドレス:", validatedValues.email);
    console.log("会社名:", validatedValues.company || "未入力");
    console.log("ご希望の対応:", validatedValues.interest || "未選択");
    console.log("予算:", validatedValues.budget || "未入力");
    console.log("期限:", validatedValues.deadline || "未入力");
    console.log("お問い合わせ内容:", validatedValues.message);
    console.log("========================");

    // 成功レスポンスを返す
    return NextResponse.json<ContactApiResponse>(
      {
        success: true,
        message: "お問い合わせ内容を受け取りました。担当より3営業日以内にご連絡いたします。",
        data: validatedValues,
      },
      { status: 200 }
    );
  } catch (error) {
    // JSONパースエラーなどの予期しないエラーをキャッチ
    console.error("お問い合わせAPI エラー:", error);

    return NextResponse.json<ContactApiResponse>(
      {
        success: false,
        message: "サーバーエラーが発生しました。しばらく時間をおいて再度お試しください。",
        errors: ["予期しないエラーが発生しました"],
      },
      { status: 500 }
    );
  }
}

/**
 * その他のHTTPメソッドは405を返す
 */
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { message: "Method not allowed" },
    { status: 405 }
  );
}
