import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/sections/Hero";
import { Business } from "@/app/components/sections/Business";
import { Services } from "@/app/components/sections/Services";
import { Philosophy } from "@/app/components/sections/Philosophy";
import { Company } from "@/app/components/sections/Company";
import { History } from "@/app/components/sections/History";
import { Results } from "@/app/components/sections/Results";
import { Contact } from "@/app/components/sections/Contact";
import { Footer } from "@/app/components/sections/Footer";
import { ScrollToTop } from "@/app/components/molecules/ScrollToTop";

/**
 * メインページコンポーネント
 * すべてのセクションを統合
 */
const Page: React.FC = () => {
  return (
    <div className="bg-white text-slate-900">
      <Header />

      <main className="space-y-0">
        <Hero />
        <Business />
        <Services />
        <Philosophy />
        <Company />
        <History />
        <Results />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Page;
