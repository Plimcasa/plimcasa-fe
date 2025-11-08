import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">Página não encontrada</h2>
        <p className="mb-8 text-muted-foreground">
          Desculpe, a página que você está procurando não existe.
        </p>
        <Link href="/">
          <Button size="lg">
            Voltar para o início
          </Button>
        </Link>
      </div>
    </div>
  );
}

