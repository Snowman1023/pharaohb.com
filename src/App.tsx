import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Canon from "./pages/Canon";
import CanonDetail from "./pages/CanonDetail";
import ArtDetail from "./pages/ArtDetail";
import Transmissions from "./pages/Transmissions";
import WritingDetail from "./pages/WritingDetail";
import Echoverse from "./pages/Echoverse";
import Shop from "./pages/Shop";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/canon" element={<Canon />} />
          <Route path="/canon/:slug" element={<CanonDetail />} />
          <Route path="/transmissions" element={<Transmissions />} />
          <Route path="/art/:slug" element={<ArtDetail />} />
          <Route path="/writings/:slug" element={<WritingDetail />} />
          <Route path="/echoverse" element={<Echoverse />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* Redirects: old pages → consolidated pillars */}
          <Route path="/writings" element={<Navigate to="/canon" replace />} />
          <Route path="/music" element={<Navigate to="/transmissions" replace />} />
          <Route path="/art" element={<Navigate to="/shop" replace />} />
          <Route path="/books" element={<Navigate to="/canon" replace />} />
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
