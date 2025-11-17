import FlickeringGrid from "@/components/bg";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MainSectionGlass from "@/components/main-section-glass";

export default function Home() {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <FlickeringGrid />
      <Header />
      <MainSectionGlass />
      <Footer />
    </main>
  );
}
