"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Users, Briefcase } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function Auth() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<"client" | "provider">(
    (searchParams.get("type") as "client" | "provider") || "client"
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulação de login - em produção, fazer autenticação real
    toast.success(isLogin ? "Login realizado com sucesso!" : "Conta criada com sucesso!");
    
    // Redirecionar baseado no tipo de usuário
    if (userType === "client") {
      router.push("/client-dashboard");
    } else {
      router.push("/provider-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Plim</span>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{isLogin ? "Entrar" : "Criar Conta"}</CardTitle>
            <CardDescription>
              {isLogin ? "Acesse sua conta" : "Comece a usar o Plim"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs value={userType} onValueChange={(v) => setUserType(v as "client" | "provider")}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="client" className="gap-2">
                  <Users className="h-4 w-4" />
                  Cliente
                </TabsTrigger>
                <TabsTrigger value="provider" className="gap-2">
                  <Briefcase className="h-4 w-4" />
                  Prestador
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="client" className="space-y-4 mt-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" type="password" placeholder="••••••••" required />
                  </div>
                  {!isLogin && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input id="name" placeholder="Seu nome" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input id="phone" placeholder="(00) 00000-0000" required />
                      </div>
                    </>
                  )}
                  <Button type="submit" className="w-full">
                    {isLogin ? "Entrar" : "Criar Conta"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="provider" className="space-y-4 mt-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="provider-email">E-mail</Label>
                    <Input id="provider-email" type="email" placeholder="seu@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="provider-password">Senha</Label>
                    <Input id="provider-password" type="password" placeholder="••••••••" required />
                  </div>
                  {!isLogin && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="provider-name">Nome Completo</Label>
                        <Input id="provider-name" placeholder="Seu nome" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="provider-phone">Telefone</Label>
                        <Input id="provider-phone" placeholder="(00) 00000-0000" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="provider-experience">Anos de Experiência</Label>
                        <Input id="provider-experience" type="number" placeholder="0" required />
                      </div>
                    </>
                  )}
                  <Button type="submit" className="w-full">
                    {isLogin ? "Entrar" : "Criar Conta"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="text-center text-sm">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:underline"
              >
                {isLogin ? "Não tem conta? Cadastre-se" : "Já tem conta? Entre"}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

