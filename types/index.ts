/**
 * 共通型定義ファイル
 * プロジェクト全体で使用する型をここに集約
 */

// ナビゲーションアイテムの型
export interface NavItem {
  href: string;
  label: string;
}

// サービス情報の型
export interface Service {
  id: string;
  title: string;
  summary: string;
  target: string;
  details: string[];
  note?: string;
}

// 会社情報の型
export interface CompanyInfo {
  label: string;
  value: string;
}

// 事業内容アイテムの型
export type BusinessItem = string;

// 理念ポイントの型
export type PhilosophyPoint = string;

// タイムラインアイテムの型（沿革など）
export interface TimelineItem {
  year: string;
  detail: string;
}

// 実績統計の型
export interface ResultStat {
  label: string;
  value: string;
}

// お問い合わせフォームの値の型
export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  budget?: string;
  deadline?: string;
  company?: string;
  interest?: string;
}

// APIレスポンスの型
export interface ContactApiResponse {
  success: boolean;
  message: string;
  data?: ContactFormValues;
  errors?: string[];
}

// バリデーションエラーの型
export interface ValidationError {
  field: string;
  message: string;
}

