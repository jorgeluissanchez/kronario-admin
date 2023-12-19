import { PrismaClient } from "@prisma/client";
import seed from "./seed.json";
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.role.deleteMany();
    console.log("All roles deleted");

    await prisma.role.createMany({
      data: seed.Role.map((role) => ({
        name: role.name,
        description: role.description,
      })),
    });
    console.log("Roles created");
    
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
