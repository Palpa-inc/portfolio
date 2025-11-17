import FlickeringGrid from "@/components/bg";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <FlickeringGrid />
      <Header />
      <Footer />
      {/* <div className="relative z-10 flex min-h-screen max-w-full overflow-x-hidden mx-auto flex-col items-center justify-center gap-4 pt-20"> */}
        {/* <PortfolioCard /> */}
        {/* <ContactSection /> */}
      {/* </div> */}
    </main>
  );
}
