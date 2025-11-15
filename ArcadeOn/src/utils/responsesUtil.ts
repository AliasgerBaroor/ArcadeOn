import { ServerUserRaw, UserClient, UserRole } from "../types/responses";

export function toClientUser(raw: ServerUserRaw): UserClient {
  if (!raw) {
    throw new Error("Invalid user object");
  }

  const safe: UserClient = {
    id: String(raw.id),
    name: raw.name ?? "",
    email: raw.email ?? "",
    profilePic: raw.profilePic ?? null,
    address: raw.address ?? null,
    contact: raw.contact ?? null,
    role: (raw.role as UserRole) ?? UserRole.USER_FREE,
    age: raw.age == null ? null : Number(raw.age),
    gender: raw.gender ?? null,
    coins: Number(raw.coins ?? 0),
    points: Number(raw.points ?? 0),
    level: Number(raw.level ?? 1),
    isActive: Boolean(raw.isActive ?? true),
    lastLogin: raw.lastLogin ? iso(raw.lastLogin) : null,
    settings: raw.settings ?? null,
    tierId: raw.tierId ?? null,
    createdBy: raw.createdBy ?? null,
    createdAt: iso(raw.createdAt ?? new Date().toISOString()),
    updatedAt: iso(raw.updatedAt ?? new Date().toISOString()),
    creator: raw.creator
      ? { id: String(raw.creator.id), name: raw.creator.name }
      : null,
    tier: raw.tier ? { id: String(raw.tier.id), name: raw.tier.name } : null,
    devices: Array.isArray(raw.devices)
      ? raw.devices.map((d: any) => ({
          id: String(d.id),
          deviceId: d.deviceId,
          type: d.type,
          os: d.os,
          isActive: d.isActive,
        }))
      : null,
  };

  return safe;
}

function iso(d: any): string {
  if (!d) return "";
  if (typeof d === "string") return d;
  if (d instanceof Date) return d.toISOString();
  const dt = new Date(d);
  return isNaN(dt.valueOf()) ? String(d) : dt.toISOString();
}
