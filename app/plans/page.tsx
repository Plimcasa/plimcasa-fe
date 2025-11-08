import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Plans() {
  const plans = [
    {
      name: "Básico",
      price: "R$ 99",
      period: "/mês",
      description: "Ideal para quem precisa de limpezas eventuais",
      features: [
        "2 limpezas por mês",
        "Suporte por chat",
        "Cancelamento grátis até 24h antes",
        "Escolha de profissional",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "R$ 179",
      period: "/mês",
      description: "O mais escolhido pelos nossos clientes",
      features: [
        "4 limpezas por mês",
        "Suporte prioritário",
        "Cancelamento grátis até 12h antes",
        "Escolha de profissional",
        "Desconto de 10% em serviços extras",
        "Agendamento prioritário",
      ],
      popular: true,
    },
    {
      name: "Executivo",
      price: "R$ 299",
      period: "/mês",
      description: "Para quem busca máximo conforto e praticidade",
      features: [
        "8 limpezas por mês",
        "Suporte 24/7",
        "Cancelamento grátis a qualquer momento",
        "Profissionais VIP exclusivos",
        "Desconto de 20% em serviços extras",
        "Agendamento prioritário",
        "Produtos de limpeza inclusos",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary pb-safe">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <nav className="flex items-center justify-between">
            <Link href="/client-dashboard" className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground touch-manipulation">
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">Voltar</span>
            </Link>
            <Link href="/" className="flex items-center gap-2 touch-manipulation">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <span className="text-lg sm:text-xl font-bold">Plim</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
            Escolha o Plano Ideal
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Todos os planos incluem acesso a profissionais verificados e pagamento seguro
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative touch-manipulation ${
                plan.popular
                  ? "border-primary shadow-lg md:scale-105"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary px-3 sm:px-4 py-1 text-xs sm:text-sm">
                    Mais Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-6 sm:pb-8 space-y-2 sm:space-y-3">
                <CardTitle className="text-xl sm:text-2xl mb-1 sm:mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{plan.description}</CardDescription>
                <div className="mt-3 sm:mt-4">
                  <span className="text-3xl sm:text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm sm:text-base text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <ul className="space-y-2.5 sm:space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 sm:gap-3">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full min-h-[44px] text-sm sm:text-base touch-manipulation"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Escolher {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ/Info Section */}
        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto">
          <Card className="touch-manipulation">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Perguntas Frequentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div>
                <h3 className="font-semibold text-sm sm:text-base mb-1.5 sm:mb-2">Posso cancelar a qualquer momento?</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Sim! Todos os planos podem ser cancelados sem multa. Você manterá acesso até o fim do período pago.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base mb-1.5 sm:mb-2">O que acontece se eu não usar todas as limpezas?</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  As limpezas não utilizadas não acumulam para o próximo mês, mas você pode transferir ou presentear para amigos.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base mb-1.5 sm:mb-2">Posso trocar de plano depois?</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

