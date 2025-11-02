import { PrismaClient } from '@/generated/prisma/client'

// add 'prisma' property to global so it doesnt keep reinstantiating new prisma clients all the time
const globalForPrisma = global as unknown as {
  prisma: PrismaClient
}

const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

export default prisma
