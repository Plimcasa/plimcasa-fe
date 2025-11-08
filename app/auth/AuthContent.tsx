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

export default function AuthContent() {
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
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-6 sm:mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4 sm:mb-6 touch-manipulation">
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="text-xl sm:text-2xl font-bold text-foreground">Plim</span>
          </Link>
        </div>

        <Card className="touch-manipulation">
          <CardHeader className="space-y-1 sm:space-y-1.5">
            <CardTitle className="text-xl sm:text-2xl">{isLogin ? "Entrar" : "Criar Conta"}</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              {isLogin ? "Acesse sua conta" : "Comece a usar o Plim"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <Tabs value={userType} onValueChange={(v) => setUserType(v as "client" | "provider")}>
              <TabsList className="grid w-full grid-cols-2 h-auto">
                <TabsTrigger value="client" className="gap-1 sm:gap-2 min-h-[44px] text-sm sm:text-base">
                  <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Cliente
                </TabsTrigger>
                <TabsTrigger value="provider" className="gap-1 sm:gap-2 min-h-[44px] text-sm sm:text-base">
                  <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Prestador
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="client" className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="email" className="text-sm">E-mail</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="seu@email.com" 
                      required 
                      className="h-11 sm:h-10 text-base"
                      autoComplete="email"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="password" className="text-sm">Senha</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••" 
                      required 
                      className="h-11 sm:h-10 text-base"
                      autoComplete={isLogin ? "current-password" : "new-password"}
                    />
                  </div>
                  {!isLogin && (
                    <>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="name" className="text-sm">Nome Completo</Label>
                        <Input 
                          id="name" 
                          placeholder="Seu nome" 
                          required 
                          className="h-11 sm:h-10 text-base"
                          autoComplete="name"
                        />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="phone" className="text-sm">Telefone</Label>
                        <Input 
                          id="phone" 
                          type="tel"
                          placeholder="(00) 00000-0000" 
                          required 
                          className="h-11 sm:h-10 text-base"
                          autoComplete="tel"
                        />
                      </div>
                    </>
                  )}
                  <Button type="submit" className="w-full min-h-[44px] text-base touch-manipulation">
                    {isLogin ? "Entrar" : "Criar Conta"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="provider" className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="provider-email" className="text-sm">E-mail</Label>
                    <Input 
                      id="provider-email" 
                      type="email" 
                      placeholder="seu@email.com" 
                      required 
                      className="h-11 sm:h-10 text-base"
                      autoComplete="email"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="provider-password" className="text-sm">Senha</Label>
                    <Input 
                      id="provider-password" 
                      type="password" 
                      placeholder="••••••••" 
                      required 
                      className="h-11 sm:h-10 text-base"
                      autoComplete={isLogin ? "current-password" : "new-password"}
                    />
                  </div>
                  {!isLogin && (
                    <>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="provider-name" className="text-sm">Nome Completo</Label>
                        <Input 
                          id="provider-name" 
                          placeholder="Seu nome" 
                          required 
                          className="h-11 sm:h-10 text-base"
                          autoComplete="name"
                        />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="provider-phone" className="text-sm">Telefone</Label>
                        <Input 
                          id="provider-phone" 
                          type="tel"
                          placeholder="(00) 00000-0000" 
                          required 
                          className="h-11 sm:h-10 text-base"
                          autoComplete="tel"
                        />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="provider-experience" className="text-sm">Anos de Experiência</Label>
                        <Input 
                          id="provider-experience" 
                          type="number" 
                          placeholder="0" 
                          required 
                          className="h-11 sm:h-10 text-base"
                          inputMode="numeric"
                        />
                      </div>
                    </>
                  )}
                  <Button type="submit" className="w-full min-h-[44px] text-base touch-manipulation">
                    {isLogin ? "Entrar" : "Criar Conta"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="text-center text-sm pt-2">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:underline min-h-[44px] inline-flex items-center touch-manipulation"
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