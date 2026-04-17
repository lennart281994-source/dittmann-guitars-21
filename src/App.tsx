import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Instruments from "./pages/Instruments";
import Commission from "./pages/Commission";
import Construction from "./pages/Construction";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/de" replace />} />

          {/* German */}
          <Route path="/de" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="instrumente" element={<Instruments />} />
            <Route path="auftragsbau" element={<Commission />} />
            <Route path="bauweise" element={<Construction />} />
            <Route path="kontakt" element={<Contact />} />
          </Route>

          {/* English */}
          <Route path="/en" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="instruments" element={<Instruments />} />
            <Route path="commission" element={<Commission />} />
            <Route path="construction" element={<Construction />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
