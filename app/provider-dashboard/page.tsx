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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Plim</span>
            </Link>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Perfil</span>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Painel do Prestador</h1>
          <p className="text-muted-foreground">Gerencie suas solicitações de serviço</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col">
                <p className="text-xs text-muted-foreground mb-1">Pendentes</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold">{pendingRequests.length}</p>
                  <Clock className="h-6 w-6 text-warning" />
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
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pending" className="text-xs sm:text-sm">
              Pendentes ({pendingRequests.length})
            </TabsTrigger>
            <TabsTrigger value="accepted" className="text-xs sm:text-sm">
              Confirmados ({acceptedRequests.length})
            </TabsTrigger>
            <TabsTrigger value="completed" className="text-xs sm:text-sm">
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
                <Card key={request.id}>
                  <CardContent className="p-4 md:p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-lg">{request.type}</h3>
                            <Badge variant="outline">Novo</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Cliente: {request.clientName}
                          </p>
                        </div>
                        <p className="text-xl md:text-2xl font-bold text-primary">{request.price}</p>
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

                      <div className="flex gap-3 pt-2">
                        <Button
                          variant="default"
                          className="flex-1 bg-success hover:bg-success/90"
                          onClick={() => handleAccept(request.id)}
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Aceitar
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => handleReject(request.id)}
                        >
                          <XCircle className="h-4 w-4 mr-2" />
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

