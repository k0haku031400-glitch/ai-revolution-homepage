/**
 * お問い合わせフォーム関連のバリデーションとユーティリティ関数
 */

import type { ContactFormValues, ValidationError } from "@/types";

/**
 * メールアドレスの形式をチェック
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 文字列が空でないかチェック
 */
export function isNotEmpty(value: string | undefined): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

/**
 * お問い合わせフォームの値をバリデーション
 * @param values - バリデーション対象のフォーム値
 * @returns バリデーションエラーの配列（エラーがない場合は空配列）
 */
export function validateContactForm(
  values: Partial<ContactFormValues>
): ValidationError[] {
  const errors: ValidationError[] = [];

  // 名前のバリデーション
  if (!isNotEmpty(values.name)) {
    errors.push({
      field: "name",
      message: "お名前は必須です",
    });
  } else if (values.name && values.name.length > 100) {
    errors.push({
      field: "name",
      message: "お名前は100文字以内で入力してください",
    });
  }

  // メールアドレスのバリデーション
  if (!isNotEmpty(values.email)) {
    errors.push({
      field: "email",
      message: "メールアドレスは必須です",
    });
  } else if (values.email && !isValidEmail(values.email)) {
    errors.push({
      field: "email",
      message: "正しいメールアドレスを入力してください",
    });
  } else if (values.email && values.email.length > 255) {
    errors.push({
      field: "email",
      message: "メールアドレスは255文字以内で入力してください",
    });
  }

  // メッセージのバリデーション
  if (!isNotEmpty(values.message)) {
    errors.push({
      field: "message",
      message: "お問い合わせ内容は必須です",
    });
  } else if (values.message && values.message.length > 5000) {
    errors.push({
      field: "message",
      message: "お問い合わせ内容は5000文字以内で入力してください",
    });
  }

  // 予算のバリデーション（オプショナル）
  if (values.budget && values.budget.length > 200) {
    errors.push({
      field: "budget",
      message: "予算は200文字以内で入力してください",
    });
  }

  // 期限のバリデーション（オプショナル）
  if (values.deadline && values.deadline.length > 200) {
    errors.push({
      field: "deadline",
      message: "期限は200文字以内で入力してください",
    });
  }

  // 会社名のバリデーション（オプショナル）
  if (values.company && values.company.length > 200) {
    errors.push({
      field: "company",
      message: "会社名は200文字以内で入力してください",
    });
  }

  return errors;
}

/**
 * お問い合わせフォームの値を正規化（前後の空白を削除など）
 */
export function normalizeContactFormValues(
  values: Partial<ContactFormValues>
): Partial<ContactFormValues> {
  return {
    name: values.name?.trim(),
    email: values.email?.trim().toLowerCase(),
    message: values.message?.trim(),
    budget: values.budget?.trim(),
    deadline: values.deadline?.trim(),
    company: values.company?.trim(),
    interest: values.interest?.trim(),
  };
}

