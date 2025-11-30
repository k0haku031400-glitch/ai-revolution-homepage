import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="#hero">
          <Image
            src="/logo-ai-revolution.jpg"
            alt="AI Revolution ロゴ"
            width={180}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="flex items-center gap-6">
          <a href="#hero" className="text-sm text-gray-700 hover:text-gray-900">
            メイン
          </a>
          <a href="#business" className="text-sm text-gray-700 hover:text-gray-900">
            事業内容
          </a>
          <a href="#services" className="text-sm text-gray-700 hover:text-gray-900">
            サービス
          </a>
          <a href="#philosophy" className="text-sm text-gray-700 hover:text-gray-900">
            理念
          </a>
          <a href="#company" className="text-sm text-gray-700 hover:text-gray-900">
            会社概要
          </a>
          <a
            href="#contact"
            className="rounded-full bg-red-600 px-4 py-2 text-sm text-white transition hover:bg-red-700"
          >
            お問い合わせ
          </a>
        </nav>
      </div>
    </header>
  );
}

