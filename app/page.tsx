import { Header } from "./components/Header";

type Service = {
  id: string;
  title: string;
  summary: string;
  target: string;
  details: string[];
  note?: string;
};

const businessItems = [
  "AIの研究、開発、設計、販売、保守及びコンサル",
  "ソフトの企画、開発、設計、販売、保守、及び運用支援",
  "データの収集、解析の情報提供とコンサル",
  "ビッグデータ処理に関する技術開発",
  "サーバ機器、ネットワーク周辺機器の設計",
  "デジタルコンテンツの企画、設計、販売及びコンサル",
  "教育プログラムの企画、設計、販売及びコンサル",
  "携帯端末と付随するアプリの設計及び構築",
  "イベント、研修、コミュニティビジネスの企画及び運営",
  "電気工事業、建築工事業"
];

const services: Service[] = [
  {
    id: "geometry",
    title: "AI 設計",
    summary: "あなたのAI×〇〇のアイデアを実現します",
    target: "中小企業〜大企業までの幅広いニーズにお応えします",
    details: [
      "AIのアイデアから実現までのロードマップ",
      "開発費やスケジュールの見積もり",
      "その後の保守や運用のサポート"
    ],
  },
  {
    id: "education",
    title: "AI教育・導入支援と講演",
    summary: "AIが誰でも使える簡単なツールに",
    target: "企業・自治体の人材育成・学校法人",
    details: [
      "AIの基本知識から実践までの研修",
      "AIの活用方法やツールの使い方のサポート",
      "社内におけるAIの活用を支援"
    ]
  },
  {
    id: "experience",
    title: "ホームページ制作",
    summary: "AIを活用したホームページ制作",
    target: "起業してすぐの方やホームページの改正を検討している方",
    details: [
      "デザインや機能のヒアリング及び提案",
      "費用やスケジュールの見積もり",
      "その後の保守や運用のサポート"
    ]
  }
];

const philosophyPoints = [
  "「AIは特別な人だけのもの」ではなく、誰の生活にも馴染むサポートであるべきと考えています。",
  "人とAIの対話を大切にし、信頼性と透明性を最優先に設計します。",
  "地域や社会との共創を通して、持続可能な未来の実現をめざします。"
];

const resultStats = [
  { label: "AI開発", value: "１件" },
  { label: "AI教育・導入支援", value: "１件" },
  { label: "ホームページ制作", value: "０" }
];

const history = [
  { year: "2025年４月22日", detail: "AI Revolution創業。小規模案件からスタート。" },
  { year: "2025年５月", detail: "AI活用インフラの実証実験。" },
];

const companyInfo = [
  { label: "会社名", value: "株式会社AI Revolution" },
  { label: "所在地", value: "大阪府大阪市北区田１丁目2番2号大阪駅前第2ビル12-12" },
  { label: "設立", value: "2025年4月22日" },
  { label: "資本金", value: "200万円" },
  { label: "代表", value: "代表取締役  中谷　琥珀" }
];

const Page = () => {
  return (
    <div className="bg-white text-slate-900">
      <Header />

      <main className="space-y-16">
        <section id="hero" className="bg-ai-red py-24 px-6 text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 text-center">
            <span className="text-sm font-semibold tracking-[0.5em] uppercase text-white/80">
              AI × 人に寄り添うサービス
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              AI Always With You
            </h1>
            <p className="max-w-3xl text-lg text-white/90">
              AIを誰でも使える簡単なツールに。AIをより身近なものにするために個人や企業に沿った事業で一人でも多くの人が豊かな暮らしをできる社会を目指します。
            </p>
            <a
              href="#contact"
              className="rounded-full bg-white px-8 py-3 text-base font-semibold text-ai-red transition hover:shadow-lg"
            >
              お問い合わせ
            </a>
          </div>
        </section>

        <section id="business" className="py-16 px-6">
          <div className="mx-auto max-w-[1200px] space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-ai-red">Business</p>
              <h2 className="text-3xl font-bold text-slate-900">事業内容</h2>
              <p className="text-lg text-slate-600">
                AI・ソフトウェア・教育・インフラなど、幅広い分野で事業を展開しています。
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {businessItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 px-5 py-4 text-sm text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-16 px-6">
          <div className="mx-auto max-w-[1200px] space-y-10">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-ai-red">Services</p>
              <h2 className="text-3xl font-bold text-slate-900">サービス</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.id}
                  className="flex flex-col rounded-3xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-sm font-semibold text-ai-red">{service.target}</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
                  <dl className="mt-4 flex-1 space-y-3 text-sm text-slate-600">
                    {service.details.map((detail) => (
                      <div key={detail} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </dl>
                  {service.note && (
                    <p className="mt-4 text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
                      {service.note}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="philosophy" className="py-16 px-6">
          <div className="mx-auto max-w-[1200px] space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-ai-red">Philosophy</p>
              <h2 className="text-3xl font-bold text-slate-900">理念</h2>
              <p className="text-lg text-slate-600">
                テクノロジーの進化を、生活を支える確かな安心とするために。
              </p>
            </div>
            <ul className="space-y-4 text-slate-600">
              {philosophyPoints.map((point) => (
                <li key={point} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-base">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="results" className="py-16 px-6">
          <div className="mx-auto max-w-[1200px] space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-ai-red">Results</p>
              <h2 className="text-3xl font-bold text-slate-900">実績</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {resultStats.map((result) => (
                <div
                  key={result.label}
                  className="rounded-3xl border border-slate-200 px-6 py-8 text-center"
                >
                  <p className="text-4xl font-bold text-slate-900">{result.value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-500">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="history" className="py-16 px-6">
          <div className="mx-auto max-w-[1200px] space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-ai-red">History</p>
              <h2 className="text-3xl font-bold text-slate-900">沿革</h2>
            </div>
            <div className="space-y-4">
              {history.map((item) => (
                <article
                  key={item.year}
                  className="flex flex-col gap-2 rounded-2xl border border-slate-200 px-6 py-4 md:flex-row md:items-center md:justify-between"
                >
                  <p className="text-xl font-semibold text-slate-900">{item.year}</p>
                  <p className="text-sm text-slate-600 md:text-base">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="company" className="py-16 px-6">
          <div className="mx-auto max-w-[1200px] space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-ai-red">Company</p>
              <h2 className="text-3xl font-bold text-slate-900">会社概要</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {companyInfo.map((info) => (
                <div
                  key={info.label}
                  className="rounded-2xl border border-slate-200 px-5 py-4 text-sm text-slate-600"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">{info.label}</p>
                  <p className="mt-2 text-base text-slate-900">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 px-6">
          <div className="mx-auto max-w-[1200px] space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-ai-red">Contact</p>
              <h2 className="text-3xl font-bold text-slate-900">お問い合わせ</h2>
              <p className="text-lg text-slate-600">
                ご相談内容をお送りいただければ、担当より3営業日以内にご連絡いたします。
              </p>
            </div>
            <form
              action="/api/contact"
              method="post"
              className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50/60 p-6"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-1 text-sm text-slate-600">
                  <span>お名前</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-ai-red focus:ring-2 focus:ring-ai-red/30"
                  />
                </label>
                <label className="space-y-1 text-sm text-slate-600">
                  <span>メールアドレス</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-ai-red focus:ring-2 focus:ring-ai-red/30"
                  />
                </label>
              </div>
              <label className="space-y-1 text-sm text-slate-600">
                <span>会社名 / 所属</span>
                <input
                  type="text"
                  name="company"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-ai-red focus:ring-2 focus:ring-ai-red/30"
                />
              </label>
              <label className="space-y-1 text-sm text-slate-600">
                <span>お問い合わせ内容</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-ai-red focus:ring-2 focus:ring-ai-red/30"
                />
              </label>
              <label className="space-y-1 text-sm text-slate-600">
                <span>ご希望の対応</span>
                <select
                  name="interest"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-ai-red focus:ring-2 focus:ring-ai-red/30"
                >
                  <option>導入支援</option>
                  <option>教育・研修</option>
                  <option>プロダクト開発</option>
                  <option>その他</option>
                </select>
              </label>
              <button
                type="submit"
                className="self-start rounded-full bg-ai-red px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#c00010]"
              >
                送信する
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-[1200px] px-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} AI Revolution 株式会社. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;

