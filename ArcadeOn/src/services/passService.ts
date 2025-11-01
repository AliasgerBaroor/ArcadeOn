import api from "../lib/axios";
import { Pass } from "../redux/slices/passSlice";

export async function fetchPasses(): Promise<Pass[]> {
    const res = await api.get<{passes: Pass[]}>("/pass");
    return res.data.passes;
}
