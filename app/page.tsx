import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Sparkles, Clock, Shield } from "lucide-react";
import Link from "next/link";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <span className="text-xl sm:text-2xl font-bold text-foreground">Plim</span>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <Link href="/auth">
                <Button variant="ghost" size="sm" className="h-9 px-3 sm:h-10 sm:px-4">
                  Entrar
                </Button>
              </Link>
              <Link href="/auth">
                <Button size="sm" className="h-9 px-3 sm:h-10 sm:px-4">
                  Começar
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
            Sua casa limpa com{" "}
            <span className="text-primary">um toque</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 px-4">
            Conecte-se com profissionais qualificados de limpeza. Rápido, seguro e confiável.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href="/auth?type=client" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto min-h-[44px] text-base">
                Contratar Profissional
              </Button>
            </Link>
            <Link href="/auth?type=provider" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto min-h-[44px] text-base">
                Oferecer Serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <Card className="touch-manipulation">
            <CardHeader className="space-y-3 sm:space-y-4">
              <Home className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
              <CardTitle className="text-lg sm:text-xl">Profissionais Verificados</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Todos os prestadores são verificados e avaliados por clientes reais
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="touch-manipulation">
            <CardHeader className="space-y-3 sm:space-y-4">
              <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
              <CardTitle className="text-lg sm:text-xl">Agendamento Fácil</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Agende seu serviço em minutos, quando for melhor para você
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="touch-manipulation sm:col-span-2 md:col-span-1">
            <CardHeader className="space-y-3 sm:space-y-4">
              <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
              <CardTitle className="text-lg sm:text-xl">Pagamento Seguro</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Transações protegidas e garantia de satisfação
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="bg-primary text-primary-foreground touch-manipulation">
          <CardContent className="p-6 sm:p-8 md:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Pronto para começar?
            </h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90">
              Junte-se a milhares de pessoas que já confiam na Plim
            </p>
            <Link href="/auth">
              <Button size="lg" variant="secondary" className="min-h-[44px] text-base">
                Criar Conta Grátis
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 sm:py-8 mt-12 sm:mt-16 border-t">
        <div className="text-center text-muted-foreground text-sm">
          <p>&copy; 2025 Plim. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
