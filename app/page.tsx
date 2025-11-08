import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Sparkles, Clock, Shield } from "lucide-react";
import Link from "next/link";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Plim</span>
          </div>
          <div className="flex gap-3">
            <Link href="/auth">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Link href="/auth">
              <Button>Começar</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Sua casa limpa com{" "}
            <span className="text-primary">um toque</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Conecte-se com profissionais qualificados de limpeza. Rápido, seguro e confiável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth?type=client">
              <Button size="lg" className="w-full sm:w-auto">
                Contratar Profissional
              </Button>
            </Link>
            <Link href="/auth?type=provider">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Oferecer Serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Home className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Profissionais Verificados</CardTitle>
              <CardDescription>
                Todos os prestadores são verificados e avaliados por clientes reais
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <Clock className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Agendamento Fácil</CardTitle>
              <CardDescription>
                Agende seu serviço em minutos, quando for melhor para você
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Pagamento Seguro</CardTitle>
              <CardDescription>
                Transações protegidas e garantia de satisfação
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para começar?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Junte-se a milhares de pessoas que já confiam na Plim
            </p>
            <Link href="/auth">
              <Button size="lg" variant="secondary">
                Criar Conta Grátis
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2025 Plim. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
