import { PrismaClient } from "prisma_output/client";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

// @ts-ignore
if (!global.prisma) {
  if (!process.env.DATABASE_URL) {
    throw new Error("No Database URL set");
  }

  // @ts-ignore
  global.prisma = new PrismaClient();
}

// @ts-ignore
export const prisma: PrismaClient = global.prisma;
