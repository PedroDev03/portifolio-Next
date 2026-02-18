import "dotenv/config";
import { defineConfig } from "prisma/config";
import * as dotenv from "dotenv";

// Força o carregamento do arquivo da Vercel
dotenv.config({ path: ".env" });
dotenv.config();

// Log de depuração (opcional: remova após funcionar)
if (!process.env.POSTGRES_URL_NON_POOLING) {
  console.warn("⚠️ Atenção: POSTGRES_URL_NON_POOLING não encontrada no ambiente!");
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.POSTGRES_URL_NON_POOLING,
  },
}); // sempre rodar npx dotenv -e .env -- npx prisma db push  