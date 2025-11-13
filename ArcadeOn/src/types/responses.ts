export enum UserRole {
  SUPERADMIN = "SUPERADMIN",
  ADMIN = "ADMIN",
  USER_FREE = "USER_FREE",
  USER_PREMIUM = "USER_PREMIUM",
}

export type TierRef = {
  id: string;
  name?: string;
};

export type DeviceRef = {
  id: string;
  deviceId?: string;
  type?: string;
  os?: string;
  isActive?: boolean;
};

export interface UserClient {
  id: string;
  name: string;
  email: string;
  profilePic?: string | null;
  address?: string | null;
  contact?: string | null;
  role: UserRole;
  age?: number | null;
  gender?: string | null;
  coins: number;
  points: number;
  level: number;
  isActive: boolean;
  lastLogin?: string | null;
  settings?: Record<string, any> | null;
  tierId?: string | null;
  createdBy?: string | null;
  createdAt: string;
  updatedAt: string;

  creator?: { id: string; name?: string } | null;
  tier?: TierRef | null;
  devices?: DeviceRef[] | null;
}

export type ServerUserRaw = Partial<Record<string, any>>;
