import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { VoiceAgents } from "./pages/services/VoiceAgents";
import { ChatAutomation } from "./pages/services/ChatAutomation";
import { WorkflowAutomation } from "./pages/services/WorkflowAutomation";
import { AIWebsiteBuilder } from "./pages/services/AIWebsiteBuilder";
import { PersonalChatbots } from "./pages/services/PersonalChatbots";
import { AutomatedCalling } from "./pages/services/AutomatedCalling";
import ClickSpark from './components/ClickSpark';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="relative w-full min-h-screen">
          <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/voice-agents" element={<VoiceAgents />} />
          <Route path="/services/chat-automation" element={<ChatAutomation />} />
          <Route path="/services/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/services/ai-website-builder" element={<AIWebsiteBuilder />} />
          <Route path="/services/personal-chatbots" element={<PersonalChatbots />} />
          <Route path="/services/automated-calling" element={<AutomatedCalling />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
