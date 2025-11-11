import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import ModuleDetail from "@/pages/ModuleDetail";
import PDFViewPage from "@/pages/PDFViewPage";
import NotFound from "@/pages/not-found";
import { useLocationProperty } from "wouter";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/modulo/:id" component={ModuleDetail} />
      <Route path="/pdf" component={PDFViewPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router base="/TiltUp">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
