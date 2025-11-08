import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Don't show prompt immediately, wait for user to explore the app
      setTimeout(() => setShowPrompt(true), 10000); // Show after 10 seconds
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  if (!showPrompt || !deferredPrompt) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:bottom-4 sm:left-auto sm:right-4 sm:w-96 animate-in slide-in-from-bottom duration-300">
      <Card className="shadow-xl border-2 touch-manipulation">
        <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-6">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <Download className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <CardTitle className="text-sm sm:text-base truncate">Instalar Plim</CardTitle>
                <CardDescription className="text-xs mt-0.5 sm:mt-1">
                  Acesse mais rápido e funcione offline
                </CardDescription>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-6 sm:w-6 -mr-1 -mt-1 flex-shrink-0 touch-manipulation"
              onClick={() => setShowPrompt(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-0 p-3 sm:p-6 sm:pt-0">
          <div className="flex gap-2">
            <Button 
              onClick={handleInstall} 
              className="flex-1 min-h-[44px] touch-manipulation text-sm sm:text-base" 
              size="sm"
            >
              Instalar
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowPrompt(false)}
              className="flex-1 min-h-[44px] touch-manipulation text-sm sm:text-base"
              size="sm"
            >
              Agora não
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PWAInstallPrompt;
