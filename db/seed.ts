import { PrismaClient } from "@prisma/client";

import sampleData from "./sample-data";

const main = async () => {
  const prisma = new PrismaClient();

  await Promise.all([
    prisma.product.deleteMany(),
    prisma.account.deleteMany(),
    prisma.session.deleteMany(),
    prisma.verificationToken.deleteMany(),
    prisma.user.deleteMany(),
  ]);

  await prisma.product.createMany({ data: sampleData.products });
  await prisma.user.createMany({ data: sampleData.users });

  console.log("Database seeded successfully!");
};

main();
