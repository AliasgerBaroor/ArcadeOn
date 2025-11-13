import api from "../lib/axios";
import { UserClient } from "../types/responses";
import { toClientUser } from "../utils/responsesUtil";

export async function fetchUserData({
  id,
}: {
  id: string;
}): Promise<UserClient> {
  const res = await api.get<{ profile: UserClient }>(`/users/user/profile/${id}`);
  return toClientUser(res.data.profile);
}
