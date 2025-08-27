import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import SuccessStories from "./components/SuccessStories";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BrowseProfiles from "./components/BrowseProfiles";
import ProfilePage from "./components/ProfilePage";

const queryClient = new QueryClient();

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProfileId, setSelectedProfileId] = useState<string | null>(null);

  const handleNavigateToProfiles = () => {
    setCurrentPage("profiles");
  };

  const handleNavigateToProfile = (profileId: string) => {
    setSelectedProfileId(profileId);
    setCurrentPage("profile");
  };

  const handleNavigateHome = () => {
    setCurrentPage("home");
    setSelectedProfileId(null);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "profiles":
        return <BrowseProfiles onViewProfile={handleNavigateToProfile} />;
      case "profile":
        return (
          <ProfilePage
            profileId={selectedProfileId}
            onBack={() => setCurrentPage("profiles")}
          />
        );
      case "home":
      default:
        return (
          <>
            <Hero />
            {/* <HowItWorks /> */}
            {/* <SuccessStories /> */}
            {/* <Contact /> */}
          </>
        );
        // // //   </>
        // // // );
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header
            onNavigateToProfiles={handleNavigateToProfiles}
            onNavigateHome={handleNavigateHome}
            currentPage={currentPage}
          />
          <Routes>
            <Route path="/" element={renderCurrentPage()} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
