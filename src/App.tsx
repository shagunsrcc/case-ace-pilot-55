import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import MockCaseInterviews from "./pages/MockCaseInterviews";
import CaseAcePilot from "./pages/CaseAcePilot";
import ResourceBank from "./pages/ResourceBank";
import CompetitionCalendar from "./pages/CompetitionCalendar";
import TrendingCompetitions from "./pages/TrendingCompetitions";
import CommunityForum from "./pages/CommunityForum";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/mock-case-interviews" element={
              <ProtectedRoute>
                <MockCaseInterviews />
              </ProtectedRoute>
            } />
            <Route path="/case-ace-pilot-04" element={
              <ProtectedRoute>
                <CaseAcePilot />
              </ProtectedRoute>
            } />
            <Route path="/resource-bank" element={
              <ProtectedRoute>
                <ResourceBank />
              </ProtectedRoute>
            } />
            <Route path="/competition-calendar" element={
              <ProtectedRoute>
                <CompetitionCalendar />
              </ProtectedRoute>
            } />
            <Route path="/trending-competitions" element={
              <ProtectedRoute>
                <TrendingCompetitions />
              </ProtectedRoute>
            } />
            <Route path="/community-forum" element={
              <ProtectedRoute>
                <CommunityForum />
              </ProtectedRoute>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
