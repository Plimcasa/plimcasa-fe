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
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/client-dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Plim</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Escolha o Plano Ideal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todos os planos incluem acesso a profissionais verificados e pagamento seguro
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary px-4 py-1">
                    Mais Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Escolher {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ/Info Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Perguntas Frequentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Posso cancelar a qualquer momento?</h3>
                <p className="text-sm text-muted-foreground">
                  Sim! Todos os planos podem ser cancelados sem multa. Você manterá acesso até o fim do período pago.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">O que acontece se eu não usar todas as limpezas?</h3>
                <p className="text-sm text-muted-foreground">
                  As limpezas não utilizadas não acumulam para o próximo mês, mas você pode transferir ou presentear para amigos.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Posso trocar de plano depois?</h3>
                <p className="text-sm text-muted-foreground">
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

