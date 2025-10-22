import { prisma } from "../config/seeds.js";

const modelToSeed = process.argv[2]; 

async function main() {
  if (modelToSeed && typeof prisma[modelToSeed]?.seeds === "function") {
    await prisma[modelToSeed].seeds();
    console.log(`Seeded only: ${modelToSeed}`);
  } else {
    await prisma.seeds();
    console.log(`Seeded all models`);
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
