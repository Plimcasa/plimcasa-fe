"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RequestService() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    propertyType: "",
    rooms: "",
    bathrooms: "",
    serviceType: "",
    date: "",
    time: "",
    address: "",
    complement: "",
    notes: "",
    providerGender: "",
    specificProvider: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission
    console.log("Form submitted:", formData);
    router.push("/client-dashboard");
  };

  return (
    <div className="min-h-screen bg-background pb-safe">
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
      <main className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-2xl">
        <div className="mb-4 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Solicitar Limpeza</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Preencha os detalhes para agendar seu serviço</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Property Details */}
          <Card className="touch-manipulation">
            <CardHeader className="space-y-1 sm:space-y-1.5">
              <CardTitle className="text-lg sm:text-xl">Detalhes do Imóvel</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Informações sobre o local a ser limpo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="space-y-2 sm:space-y-2.5">
                <Label className="text-sm">Tipo de Imóvel</Label>
                <RadioGroup
                  value={formData.propertyType}
                  onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2 min-h-[44px]">
                    <RadioGroupItem value="apartment" id="apartment" className="touch-manipulation" />
                    <Label htmlFor="apartment" className="font-normal cursor-pointer text-sm sm:text-base touch-manipulation flex-1">
                      Apartamento
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 min-h-[44px]">
                    <RadioGroupItem value="house" id="house" className="touch-manipulation" />
                    <Label htmlFor="house" className="font-normal cursor-pointer text-sm sm:text-base touch-manipulation flex-1">
                      Casa
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 min-h-[44px]">
                    <RadioGroupItem value="commercial" id="commercial" className="touch-manipulation" />
                    <Label htmlFor="commercial" className="font-normal cursor-pointer text-sm sm:text-base touch-manipulation flex-1">
                      Comercial
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="rooms" className="text-sm">Quartos</Label>
                  <Input
                    id="rooms"
                    type="number"
                    min="0"
                    placeholder="0"
                    value={formData.rooms}
                    onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                    className="h-11 sm:h-10 text-base"
                    inputMode="numeric"
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="bathrooms" className="text-sm">Banheiros</Label>
                  <Input
                    id="bathrooms"
                    type="number"
                    min="0"
                    placeholder="0"
                    value={formData.bathrooms}
                    onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                    className="h-11 sm:h-10 text-base"
                    inputMode="numeric"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceType">Tipo de Serviço</Label>
                <Select
                  value={formData.serviceType}
                  onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de limpeza" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Limpeza Básica</SelectItem>
                    <SelectItem value="complete">Limpeza Completa</SelectItem>
                    <SelectItem value="deep">Limpeza Profunda</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Schedule */}
          <Card>
            <CardHeader>
              <CardTitle>Agendamento</CardTitle>
              <CardDescription>Quando você precisa do serviço?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Data</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Horário</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Address */}
          <Card>
            <CardHeader>
              <CardTitle>Endereço</CardTitle>
              <CardDescription>Onde será realizado o serviço?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Endereço Completo</Label>
                <Input
                  id="address"
                  placeholder="Rua, número, bairro, cidade"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="complement">Complemento (opcional)</Label>
                <Input
                  id="complement"
                  placeholder="Apto, bloco, etc."
                  value={formData.complement}
                  onChange={(e) => setFormData({ ...formData, complement: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Provider Preference */}
          <Card>
            <CardHeader>
              <CardTitle>Preferências</CardTitle>
              <CardDescription>Escolha o profissional (opcional)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Preferência de Gênero</Label>
                <RadioGroup
                  value={formData.providerGender}
                  onValueChange={(value) => setFormData({ ...formData, providerGender: value })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="any" id="any" />
                    <Label htmlFor="any" className="font-normal cursor-pointer">
                      Sem preferência
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female" className="font-normal cursor-pointer">
                      Feminino
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male" className="font-normal cursor-pointer">
                      Masculino
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Observações Adicionais (opcional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Alguma instrução especial ou observação?"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex gap-3 sm:gap-4 pt-2">
            <Link href="/client-dashboard" className="flex-1">
              <Button type="button" variant="outline" className="w-full min-h-[44px] touch-manipulation text-sm sm:text-base">
                Cancelar
              </Button>
            </Link>
            <Button type="submit" className="flex-1 min-h-[44px] touch-manipulation text-sm sm:text-base">
              Confirmar Solicitação
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}

