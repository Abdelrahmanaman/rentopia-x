import { PrismaClient } from "@prisma/client";


//* This code is for when we are in development and make changes our servers restart and by default this would instantiate a newer Prisma client creating mutliple prisma clients 
//* The below code block makes sure that we reuse the same prisma Signleton 
const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
