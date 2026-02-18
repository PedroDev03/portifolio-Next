import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  // No Prisma 7, se a URL estiver no config.ts, 
  // você pode instanciar vazio, mas para a Vercel, passamos a URL de pooling aqui:
  return new PrismaClient({
    datasourceUrl: process.env.POSTGRES_PRISMA_URL,
  } as any) // O 'as any' resolve o erro de tipagem temporário sem quebrar o código
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma