import { PrismaClient } from "@prisma/client";

//gloval is not affected by hot reloading
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// If you're not in production, set the global prisma object to the db object
// so that you can import and use it anywhere in your app
//due to hot reloading, we need to check if prisma is already defined
//if it is, we don't want to redefine it
//this is because we're using the globalThis object
if(process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}