    import React, { createContext, useEffect, useState, useContext } from "react";
    import * as SecureStore from "expo-secure-store";
    import { useRouter } from "expo-router";
    import { useDispatch } from "react-redux";
    import { progressionActions } from "@/src/redux/slices/progressionSlice";
    import { usePasses } from "@/src/hooks/passes";

    type UserRole = "SUPERADMIN" | "ADMIN" | "USER_FREE" | "USER_PREMIUM" | null;

    interface AuthContextType {
        role: UserRole;
        isAuthenticated: boolean;
        loading: boolean;
        login: (role: Exclude<UserRole, null>) => Promise<void>;
        logout: () => Promise<void>;
    }

    const AuthContext = createContext<AuthContextType | undefined>(undefined);

    export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        const [role, setRole] = useState<UserRole>(null);
        const [loading, setLoading] = useState(true);
        const dispatch = useDispatch();
        usePasses();

        const router = useRouter();
        useEffect(() => {
            const loadUser = async () => {
                setLoading(true);
                const data = await SecureStore.getItemAsync("userRole");
                if (data === "SUPERADMIN" || data === "ADMIN" || data === "USER_FREE" || data === "USER_PREMIUM") {
                    setRole(data as UserRole);
                    dispatch(progressionActions.setLevel(3));
                    dispatch(progressionActions.setPoints(5000));
                } else {
                    setRole(null);
                }
                setLoading(false);
            };
            loadUser();
        }, []);

        const login = async (userRole: Exclude<UserRole, null>) => {
            await SecureStore.setItemAsync("userRole", userRole);
            setRole(userRole);
        };

        const logout = async () => {
            await SecureStore.deleteItemAsync("userRole");
            setRole(null);
            router.replace("/login");
        };

        return (
            <AuthContext.Provider value={{ role, isAuthenticated: !!role, loading, login, logout }}>
                {children}
            </AuthContext.Provider>
        );
    };

    export const useAuth = () => {
        const context = useContext(AuthContext);
        if (context === undefined) throw new Error("useAuth must be used within an AuthProvider");
        return context;
    };