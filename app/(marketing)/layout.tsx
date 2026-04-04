import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ScrollProgress } from "@/components/landing/scroll-progress";
import { AnnouncementBar } from "@/components/landing/announcement-bar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      {children}
      <Footer />
    </>
  );
}
