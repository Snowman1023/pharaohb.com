import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Canon from "./pages/Canon";
import CanonEntry from "./pages/CanonEntry";
import Art from "./pages/Art";
import ArtEntry from "./pages/ArtEntry";
import Music from "./pages/Music";
import Shop from "./pages/Shop";
import Writings from "./pages/Writings";
import WritingsEntry from "./pages/WritingsEntry";
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
          <Route path="/canon/:slug" element={<CanonEntry />} />
          <Route path="/art" element={<Art />} />
          <Route path="/art/:slug" element={<ArtEntry />} />
          <Route path="/music" element={<Music />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/writings" element={<Writings />} />
          <Route path="/writings/:slug" element={<WritingsEntry />} />
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
