import { uuidv4 } from "../sbc/utils/uuid/uuidv4.js";
import { prisma } from "./infra/prisma.js";

// ---- ONLY EDIT THIS ----
const rootId = uuidv4();
const adminId = uuidv4();
const freeId = uuidv4();
const premiumId = uuidv4();

export const SEED_DATA = {
  user: [
    // Superadmin
    {
      id: rootId,
      name: "Root Superadmin",
      email: "superadmin@arcadeon.com",
      password: "$2b$10$EeetXBwuOkZuy0/V.1g.r.25rIyt/zGCHaJOiU6COQjq/3uhbWmrm",
      role: "SUPERADMIN",
      profilePic: "http://localhost:3000/images/user/superadmin-image.png",
      address: "Malwa Mill, Indore",
      contact: "9000000000",
      createdBy: null
    },
    // Admin, created by superadmin
    {
      id: adminId,
      name: "Admin",
      email: "admin@arcadeon.com",
      password: "$2b$10$EeetXBwuOkZuy0/V.1g.r.25rIyt/zGCHaJOiU6COQjq/3uhbWmrm",
      role: "ADMIN",
      profilePic: "http://localhost:3000/images/user/admin-image.png",
      address: "Dhar Road, Indore",
      contact: "9011111111",
      createdBy: rootId
    },
    // User free, created by admin
    {
      id: freeId,
      name: "Free Player",
      email: "free@arcadeon.com",
      password: "$2b$10$EeetXBwuOkZuy0/V.1g.r.25rIyt/zGCHaJOiU6COQjq/3uhbWmrm",
      role: "USER_FREE",
      profilePic: "http://localhost:3000/images/user/free-image.png",
      address: "MG Road, Indore",
      contact: "9022222222",
      createdBy: adminId
    },
    // User premium, created by admin
    {
      id: premiumId,
      name: "Premium Player",
      email: "premium@arcadeon.com",
      password: "$2b$10$EeetXBwuOkZuy0/V.1g.r.25rIyt/zGCHaJOiU6COQjq/3uhbWmrm",
      role: "USER_PREMIUM",
      profilePic: "http://localhost:3000/images/user/premium-image.png",
      address: "Vijay Nagar, Indore",
      contact: "9033333333",
      createdBy: adminId
    },
  ]
};
// ---- DO NOT EDIT BELOW ----

export type DelegateType = typeof prisma[keyof typeof prisma];

Object.entries(SEED_DATA).forEach(([model, data]) => {
  if (typeof prisma[model as keyof typeof prisma] === 'object' && prisma[model as keyof typeof prisma] !== null) {
  Object.defineProperty(prisma[model as keyof typeof prisma], "seeds", {
    value: async () => {
      await prisma[model].createMany({
        data,
        skipDuplicates: true,
      });
    },
    enumerable: false,
    configurable: false,
    writable: false
  });
}
});

Object.defineProperty(prisma, "seeds", {
  value: async () => {
    for (const [model, data] of Object.entries(SEED_DATA)) {
      await prisma[model].createMany({
        data,
        skipDuplicates: true,
      });
    }
  },
  enumerable: false,
  configurable: false,
  writable: false
});

export { prisma }; 
