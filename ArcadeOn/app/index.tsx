import { useEffect } from "react";
import { useAuth } from "@/src/sbc/utils/auth";
import { useRouter } from "expo-router";
import Typography from "@/src/components/typography/Typography";

export default function IndexGate() {
    const { role, isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (loading) return;

        if (!isAuthenticated) {
            router.replace("/login");
        }
        else if (role === "SUPERADMIN") {
            router.replace("/superadmin-dashboard");
        } else if (role === "ADMIN") {
            router.replace("/admin-dashboard");
        }
        else if (role === "USER_FREE" || role === "USER_PREMIUM") {
            router.replace("/(user_free)/(tabs)/home");
        }
    }, [role, isAuthenticated, loading]);

    return <Typography variant="h1">Welcome</Typography>;
}
