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
    <div className="min-h-screen bg-background pb-safe">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 touch-manipulation">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <span className="text-lg sm:text-xl font-bold">Plim</span>
            </Link>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link href="/plans">
                <Button variant="ghost" size="sm" className="h-9 px-2 sm:px-3 touch-manipulation">
                  <CreditCard className="h-4 w-4" />
                  <span className="hidden xs:inline ml-1.5 sm:ml-2">Planos</span>
                </Button>
              </Link>
              <Button variant="ghost" size="sm" className="h-9 px-2 sm:px-3 touch-manipulation">
                <User className="h-4 w-4" />
                <span className="hidden xs:inline ml-1.5 sm:ml-2">Perfil</span>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8 max-w-4xl">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Bem-vindo de volta!</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Gerencie seus serviços de limpeza</p>
        </div>

        {/* Quick Action */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <Link href="/request-service" className="block">
            <Button size="lg" className="w-full sm:w-auto min-h-[44px] text-base touch-manipulation">
              <Plus className="h-5 w-5 mr-2" />
              Solicitar Nova Limpeza
            </Button>
          </Link>
        </div>

        {/* Agendamentos Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 sm:space-y-6">
          <TabsList className="grid w-full grid-cols-3 h-auto p-1">
            <TabsTrigger value="upcoming" className="text-xs sm:text-sm min-h-[40px] data-[state=active]:bg-background">
              Próximos ({upcomingServices.length})
            </TabsTrigger>
            <TabsTrigger value="pending" className="text-xs sm:text-sm min-h-[40px] data-[state=active]:bg-background">
              Pendentes ({pendingServices.length})
            </TabsTrigger>
            <TabsTrigger value="completed" className="text-xs sm:text-sm min-h-[40px] data-[state=active]:bg-background">
              Concluídos ({completedServices.length})
            </TabsTrigger>
          </TabsList>

          {/* Upcoming Services */}
          <TabsContent value="upcoming" className="space-y-3 sm:space-y-4 mt-4">
            {upcomingServices.map((service) => (
              <Card key={service.id} className="touch-manipulation">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base sm:text-lg truncate">{service.type}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground truncate">
                          Com {service.provider} ⭐ {service.providerRating}
                        </p>
                      </div>
                      <Badge className="bg-success text-success-foreground flex-shrink-0 text-xs">
                        {service.status}
                      </Badge>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                        <span className="truncate">{service.date} às {service.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                        <span className="truncate">{service.address}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-2">
                      <p className="text-lg sm:text-xl font-bold text-primary">{service.price}</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="h-9 px-3 text-xs sm:text-sm touch-manipulation">
                          Detalhes
                        </Button>
                        <Button variant="outline" size="sm" className="h-9 px-3 text-xs sm:text-sm touch-manipulation">
                          Cancelar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Pending Services */}
          <TabsContent value="pending" className="space-y-3 sm:space-y-4 mt-4">
            {pendingServices.map((service) => (
              <Card key={service.id} className="touch-manipulation">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-base sm:text-lg flex-1 min-w-0 truncate">{service.type}</h3>
                      <Badge variant="outline" className="flex-shrink-0 text-xs">
                        {service.status}
                      </Badge>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                        <span className="truncate">Solicitado para {service.date} às {service.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                        <span className="truncate">{service.address}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-2">
                      <p className="text-lg sm:text-xl font-bold text-primary">{service.price}</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="h-9 px-3 text-xs sm:text-sm touch-manipulation">
                          Editar
                        </Button>
                        <Button variant="outline" size="sm" className="h-9 px-3 text-xs sm:text-sm touch-manipulation">
                          Cancelar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Completed Services */}
          <TabsContent value="completed" className="space-y-3 sm:space-y-4 mt-4">
            {completedServices.map((service) => (
              <Card key={service.id} className="touch-manipulation">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base sm:text-lg truncate">{service.type}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground truncate">
                          Com {service.provider} ⭐ {service.providerRating}
                        </p>
                      </div>
                      <Badge variant="secondary" className="flex-shrink-0 text-xs">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {service.status}
                      </Badge>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                        <span className="truncate">{service.date} às {service.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                        <span className="truncate">{service.address}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-2">
                      <p className="text-lg sm:text-xl font-bold">{service.price}</p>
                      <div className="flex gap-2">
                        <Button size="sm" className="h-9 px-3 text-xs sm:text-sm touch-manipulation">
                          Avaliar
                        </Button>
                        <Button variant="outline" size="sm" className="h-9 px-3 text-xs sm:text-sm touch-manipulation">
                          Reagendar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8">
          <Card className="touch-manipulation">
            <CardContent className="p-3 sm:p-4 text-center">
              <p className="text-xl sm:text-2xl font-bold text-primary">{upcomingServices.length}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">Agendados</p>
            </CardContent>
          </Card>
          <Card className="touch-manipulation">
            <CardContent className="p-3 sm:p-4 text-center">
              <p className="text-xl sm:text-2xl font-bold">{completedServices.length}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">Concluídos</p>
            </CardContent>
          </Card>
          <Card className="touch-manipulation">
            <CardContent className="p-3 sm:p-4 text-center">
              <p className="text-xl sm:text-2xl font-bold">Básico</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">Seu Plano</p>
            </CardContent>
          </Card>
          <Card className="touch-manipulation">
            <CardContent className="p-3 sm:p-4 text-center">
              <p className="text-xl sm:text-2xl font-bold">2</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">Restantes</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
