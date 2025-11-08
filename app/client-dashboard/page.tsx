"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Calendar, User, CreditCard, Plus, Clock, CheckCircle, MapPin } from "lucide-react";
import Link from "next/link";

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingServices = [
    {
      id: 1,
      date: "15 Nov 2025",
      time: "14:00",
      provider: "Maria Silva",
      providerRating: 4.9,
      type: "Limpeza Completa",
      address: "Av. Paulista, 1000 - São Paulo",
      status: "Confirmado",
      price: "R$ 120,00",
    },
    {
      id: 2,
      date: "18 Nov 2025",
      time: "09:00",
      provider: "Ana Costa",
      providerRating: 5.0,
      type: "Limpeza Básica",
      address: "Rua Augusta, 500 - São Paulo",
      status: "Confirmado",
      price: "R$ 80,00",
    },
  ];

  const completedServices = [
    {
      id: 3,
      date: "05 Nov 2025",
      time: "10:00",
      provider: "João Santos",
      providerRating: 4.8,
      type: "Limpeza Profunda",
      address: "Rua Consolação, 200 - São Paulo",
      status: "Concluído",
      price: "R$ 150,00",
    },
    {
      id: 4,
      date: "01 Nov 2025",
      time: "15:00",
      provider: "Maria Silva",
      providerRating: 4.9,
      type: "Limpeza Completa",
      address: "Av. Paulista, 1000 - São Paulo",
      status: "Concluído",
      price: "R$ 120,00",
    },
  ];

  const pendingServices = [
    {
      id: 5,
      date: "20 Nov 2025",
      time: "16:00",
      type: "Limpeza Completa",
      address: "Rua da Liberdade, 300 - São Paulo",
      status: "Aguardando confirmação",
      price: "R$ 120,00",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Plim</span>
            </Link>
            <div className="flex items-center gap-2 sm:gap-4">
              <Link href="/plans">
                <Button variant="ghost" size="sm">
                  <CreditCard className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Planos</span>
                </Button>
              </Link>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Perfil</span>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Bem-vindo de volta!</h1>
          <p className="text-muted-foreground">Gerencie seus serviços de limpeza</p>
        </div>

        {/* Quick Action */}
        <div className="mb-6 md:mb-8">
          <Link href="/request-service">
            <Button size="lg" className="w-full sm:w-auto">
              <Plus className="h-5 w-5 mr-2" />
              Solicitar Nova Limpeza
            </Button>
          </Link>
        </div>

        {/* Agendamentos Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming" className="text-xs sm:text-sm">
              Próximos ({upcomingServices.length})
            </TabsTrigger>
            <TabsTrigger value="pending" className="text-xs sm:text-sm">
              Pendentes ({pendingServices.length})
            </TabsTrigger>
            <TabsTrigger value="completed" className="text-xs sm:text-sm">
              Concluídos ({completedServices.length})
            </TabsTrigger>
          </TabsList>

          {/* Upcoming Services */}
          <TabsContent value="upcoming" className="space-y-4">
            {upcomingServices.map((service) => (
              <Card key={service.id}>
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{service.type}</h3>
                          <p className="text-sm text-muted-foreground">
                            Com {service.provider} ⭐ {service.providerRating}
                          </p>
                        </div>
                        <Badge className="bg-success text-success-foreground ml-2">
                          {service.status}
                        </Badge>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{service.date} às {service.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{service.address}</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <p className="text-xl font-bold text-primary">{service.price}</p>
                      </div>
                    </div>

                    <div className="flex sm:flex-col gap-2">
                      <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                        Detalhes
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                        Cancelar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Pending Services */}
          <TabsContent value="pending" className="space-y-4">
            {pendingServices.map((service) => (
              <Card key={service.id}>
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-lg">{service.type}</h3>
                        <Badge variant="outline" className="ml-2">
                          {service.status}
                        </Badge>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>Solicitado para {service.date} às {service.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{service.address}</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <p className="text-xl font-bold text-primary">{service.price}</p>
                      </div>
                    </div>

                    <div className="flex sm:flex-col gap-2">
                      <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                        Editar
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                        Cancelar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Completed Services */}
          <TabsContent value="completed" className="space-y-4">
            {completedServices.map((service) => (
              <Card key={service.id}>
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{service.type}</h3>
                          <p className="text-sm text-muted-foreground">
                            Com {service.provider} ⭐ {service.providerRating}
                          </p>
                        </div>
                        <Badge variant="secondary" className="ml-2">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {service.status}
                        </Badge>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{service.date} às {service.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{service.address}</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <p className="text-xl font-bold">{service.price}</p>
                      </div>
                    </div>

                    <div className="flex sm:flex-col gap-2">
                      <Button size="sm" className="flex-1 sm:flex-none">
                        Avaliar
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                        Reagendar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">{upcomingServices.length}</p>
              <p className="text-xs text-muted-foreground">Agendados</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold">{completedServices.length}</p>
              <p className="text-xs text-muted-foreground">Concluídos</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold">Básico</p>
              <p className="text-xs text-muted-foreground">Seu Plano</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold">2</p>
              <p className="text-xs text-muted-foreground">Restantes</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

