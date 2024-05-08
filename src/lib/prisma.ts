//* This code is for when we are in development and make changes our servers restart and by default this would instantiate a newer Prisma client creating mutliple prisma clients
//* The below code block makes sure that we reuse the same prisma Signleton
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
