import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Canon from "./pages/Canon";
import CanonDetail from "./pages/CanonDetail";
import Art from "./pages/Art";
import ArtDetail from "./pages/ArtDetail";
import Music from "./pages/Music";
import Transmissions from "./pages/Transmissions";
import Writings from "./pages/Writings";
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
          <Route path="/books" element={<Books />} />
          <Route path="/canon" element={<Canon />} />
          <Route path="/canon/:slug" element={<CanonDetail />} />
          <Route path="/art" element={<Art />} />
          <Route path="/art/:slug" element={<ArtDetail />} />
          <Route path="/music" element={<Music />} />
          <Route path="/transmissions" element={<Transmissions />} />
          <Route path="/writings" element={<Writings />} />
          <Route path="/writings/:slug" element={<WritingDetail />} />
          <Route path="/echoverse" element={<Echoverse />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
