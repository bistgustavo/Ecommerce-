import prisma from "./client.js";

async function connectDB() {
  try {
    await prisma.$connect();
    console.log("Connected to postgres Sql");
    return prisma;
  } catch (error) {
    console.log("Error connecting to postgres Sql", error);
    process.exit(1);
  }
}

async function disconnectDB() {
  await prisma.$disconnect();
  console.log("Postgres disconnected successfully");
}

export { connectDB, disconnectDB, prisma };
