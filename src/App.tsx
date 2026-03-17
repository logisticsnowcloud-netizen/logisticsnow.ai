import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import ScrollToTop from "./components/ScrollToTop";
import ScheduleDemoDialog from "./components/ScheduleDemoDialog";
import { ScheduleDemoProvider, useScheduleDemo } from "./hooks/useScheduleDemo";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { open, setOpen } = useScheduleDemo();
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ChatWidget />
      <ScheduleDemoDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScheduleDemoProvider>
          <AppContent />
        </ScheduleDemoProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
