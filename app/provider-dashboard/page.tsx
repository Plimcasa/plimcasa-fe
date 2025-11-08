"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, MapPin, Clock, User, DollarSign, CheckCircle, XCircle, Calendar } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function ProviderDashboard() {
  const [activeTab, setActiveTab] = useState("pending");
  const [pendingRequests, setPendingRequests] = useState([
    {
      id: 1,
      clientName: "João Silva",
      date: "15 Nov 2025",
      time: "14:00",
      location: "Av. Paulista, 1000 - São Paulo",
      type: "Limpeza Completa",
      rooms: 3,
      bathrooms: 2,
      propertyType: "Apartamento",
      price: "R$ 120,00",
      status: "pending",
    },
    {
      id: 2,
      clientName: "Maria Santos",
      date: "16 Nov 2025",
      time: "09:00",
      location: "Rua Augusta, 500 - São Paulo",
      type: "Limpeza Básica",
      rooms: 2,
      bathrooms: 1,
      propertyType: "Apartamento",
      price: "R$ 80,00",
      status: "pending",
    },
  ]);

  const [acceptedRequests, setAcceptedRequests] = useState([
    {
      id: 3,
      clientName: "Ana Costa",
      clientPhone: "(11) 98765-4321",
      date: "18 Nov 2025",
      time: "10:00",
      location: "Rua Consolação, 200 - São Paulo",
      type: "Limpeza Profunda",
      rooms: 4,
      bathrooms: 3,
      propertyType: "Casa",
      price: "R$ 180,00",
      status: "accepted",
    },
  ]);

  const [completedRequests] = useState([
    {
      id: 4,
      clientName: "Pedro Lima",
      date: "05 Nov 2025",
      time: "15:00",
      location: "Av. Faria Lima, 800 - São Paulo",
      type: "Limpeza Completa",
      price: "R$ 120,00",
      rating: 5,
      status: "completed",
    },
    {
      id: 5,
      clientName: "Carla Mendes",
      date: "02 Nov 2025",
      time: "11:00",
      location: "Rua dos Três Irmãos, 150 - São Paulo",
      type: "Limpeza Básica",
      price: "R$ 80,00",
      rating: 4.5,
      status: "completed",
    },
  ]);

  const handleAccept = (id: number) => {
    const request = pendingRequests.find(req => req.id === id);
    if (request) {
      setAcceptedRequests([...acceptedRequests, { ...request, status: "accepted", clientPhone: "(11) 99999-9999" }]);
      setPendingRequests(pendingRequests.filter(req => req.id !== id));
      toast.success("Serviço aceito! Cliente será notificado.");
      setActiveTab("accepted");
    }
  };

  const handleReject = (id: number) => {
    setPendingRequests(pendingRequests.filter(req => req.id !== id));
    toast.info("Serviço recusado.");
  };

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
            <Button variant="ghost" size="sm" className="h-9 px-2 sm:px-3 touch-manipulation">
              <User className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Perfil</span>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8 max-w-4xl">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Painel do Prestador</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Gerencie suas solicitações de serviço</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
          <Card className="touch-manipulation">
            <CardContent className="p-3 sm:p-4">
              <div className="flex flex-col">
                <p className="text-[10px] sm:text-xs text-muted-foreground mb-0.5 sm:mb-1">Pendentes</p>
                <div className="flex items-center justify-between">
                  <p className="text-xl sm:text-2xl font-bold">{pendingRequests.length}</p>
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col">
                <p className="text-xs text-muted-foreground mb-1">Confirmados</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold">{acceptedRequests.length}</p>
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col">
                <p className="text-xs text-muted-foreground mb-1">Este Mês</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold">18</p>
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col">
                <p className="text-xs text-muted-foreground mb-1">Ganhos</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold">2.2k</p>
                  <DollarSign className="h-6 w-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service Requests Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 sm:space-y-6">
          <TabsList className="grid w-full grid-cols-3 h-auto p-1">
            <TabsTrigger value="pending" className="text-xs sm:text-sm min-h-[40px] data-[state=active]:bg-background">
              Pendentes ({pendingRequests.length})
            </TabsTrigger>
            <TabsTrigger value="accepted" className="text-xs sm:text-sm min-h-[40px] data-[state=active]:bg-background">
              Confirmados ({acceptedRequests.length})
            </TabsTrigger>
            <TabsTrigger value="completed" className="text-xs sm:text-sm min-h-[40px] data-[state=active]:bg-background">
              Concluídos ({completedRequests.length})
            </TabsTrigger>
          </TabsList>

          {/* Pending Requests */}
          <TabsContent value="pending" className="space-y-4">
            {pendingRequests.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Clock className="h-16 w-16 mx-auto mb-4 opacity-50 text-muted-foreground" />
                  <p className="text-lg text-muted-foreground">Nenhuma solicitação pendente</p>
                  <p className="text-sm text-muted-foreground mt-2">Novas solicitações aparecerão aqui</p>
                </CardContent>
              </Card>
            ) : (
              pendingRequests.map((request) => (
                <Card key={request.id} className="touch-manipulation">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-0.5 sm:space-y-1 flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                            <h3 className="font-semibold text-base sm:text-lg truncate">{request.type}</h3>
                            <Badge variant="outline" className="text-xs flex-shrink-0">Novo</Badge>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground truncate">
                            Cliente: {request.clientName}
                          </p>
                        </div>
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary flex-shrink-0">{request.price}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <span>{request.date} às {request.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <span className="truncate">{request.location}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span>📦 {request.propertyType}</span>
                        <span>🚪 {request.rooms} quartos</span>
                        <span>🚿 {request.bathrooms} banheiros</span>
                      </div>

                      <div className="flex gap-2 sm:gap-3 pt-2">
                        <Button
                          variant="default"
                          className="flex-1 bg-success hover:bg-success/90 min-h-[44px] touch-manipulation text-sm sm:text-base"
                          onClick={() => handleAccept(request.id)}
                        >
                          <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                          Aceitar
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 min-h-[44px] touch-manipulation text-sm sm:text-base"
                          onClick={() => handleReject(request.id)}
                        >
                          <XCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                          Recusar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Accepted Requests */}
          <TabsContent value="accepted" className="space-y-4">
            {acceptedRequests.map((request) => (
              <Card key={request.id}>
                <CardContent className="p-4 md:p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-lg">{request.type}</h3>
                          <Badge className="bg-success text-success-foreground">Confirmado</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Cliente: {request.clientName}
                        </p>
                        <p className="text-sm text-primary font-medium">
                          📱 {request.clientPhone}
                        </p>
                      </div>
                      <p className="text-xl md:text-2xl font-bold text-primary">{request.price}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <span>{request.date} às {request.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <span className="truncate">{request.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span>📦 {request.propertyType}</span>
                      <span>🚪 {request.rooms} quartos</span>
                      <span>🚿 {request.bathrooms} banheiros</span>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" className="flex-1">
                        Ver no Mapa
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Contatar Cliente
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Completed Requests */}
          <TabsContent value="completed" className="space-y-4">
            {completedRequests.map((request) => (
              <Card key={request.id}>
                <CardContent className="p-4 md:p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-lg">{request.type}</h3>
                          <Badge variant="secondary">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Concluído
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Cliente: {request.clientName}
                        </p>
                        <p className="text-sm">
                          ⭐ Avaliação: {request.rating}/5.0
                        </p>
                      </div>
                      <p className="text-xl font-bold">{request.price}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <span>{request.date} às {request.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <span className="truncate">{request.location}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

