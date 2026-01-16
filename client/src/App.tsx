import React from "react";
import { Switch, Route, Router, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import ModuleDetail from "@/pages/ModuleDetail";
import PDFViewPage from "@/pages/PDFViewPage";
import ExamPage from "@/pages/ExamPage";
import LoginPage from "@/pages/LoginPage";
import NotFound from "@/pages/not-found";

import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Loader2 } from "lucide-react";

function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  const { user, loading } = useAuth();
  const [, setLocation] = useLocation();

  React.useEffect(() => {
    if (!loading && !user) {
      setLocation("/login");
    }
  }, [user, loading, setLocation]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <Component />;
}

function AppRouter() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={() => <ProtectedRoute component={Home} />} />
      <Route path="/modulo/:id" component={() => <ProtectedRoute component={ModuleDetail} />} />
      <Route path="/pdf" component={() => <ProtectedRoute component={PDFViewPage} />} />
      <Route path="/examen/:sectionId" component={() => <ProtectedRoute component={ExamPage} />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router base="/TiltUp">
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <AppRouter />
          </TooltipProvider>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
