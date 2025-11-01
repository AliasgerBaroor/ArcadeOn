import { Provider } from "react-redux";
import { store } from "@/src/stores/reduxStore";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as Font from "expo-font";
import { Platform, StatusBar as RNStatusBar, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Typography from "@/src/components/typography/Typography";
import { AuthProvider } from "@/src/sbc/utils/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/src/components/molecules/layouts/Header";
import { Host } from 'react-native-portalize';
import { useThemeStore } from "@/src/stores/themeStore";
import { Slot } from "expo-router";
import { GEIST_FONTS } from "@/src/constants/fonts";
import { useSegments } from "expo-router";
import * as NavigationBar from 'expo-navigation-bar';

export default function RootLayout() {
    const segments = useSegments();
    const queryClient = new QueryClient();
    const [isAppReady, setIsAppReady] = useState(false);
    // const bgCanvas = useThemeStore(s => s.colors.bgCanvas);
    const bgStatus = useThemeStore(s => s.colors.bgCard);
    const theme = useThemeStore(s => s.theme);

    useEffect(() => {
        async function loadResources() {
            try {
                await Font.loadAsync(GEIST_FONTS);
                setIsAppReady(true);
            } catch (e) {
                console.error("App load error", e);
            }
        }
        loadResources();
    }, []);

    useEffect(() => {
        NavigationBar.setBackgroundColorAsync("red");
        NavigationBar.setButtonStyleAsync("dark");
    }, ["red"]);

    useEffect(() => {
        if (Platform.OS === 'android') {
            import('expo-navigation-bar').then(({ setBackgroundColorAsync }) => {
                setBackgroundColorAsync(bgStatus);
            });
        }
    }, [bgStatus, theme]);

    const showHeader = segments[0] !== "login";

    if (!isAppReady) {
        return <Typography variant="h1">Loading…</Typography>;
    }

    const statusBarHeight = Platform.OS === 'android' ? RNStatusBar.currentHeight : 44;

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                        <Host>
                            <SafeAreaView style={[styles.pageContainer]} edges={['top', 'left', 'right']}>
                                {/* {!isLogin && <View style={{ height: statusBarHeight, backgroundColor: bgStatus }} />} */}
                                <StatusBar style={theme === "dark" ? "light" : "dark"} translucent />
                                {showHeader && <Header />}
                                <Slot />
                            </SafeAreaView>
                        </Host>
                    </AuthProvider>
                </QueryClientProvider>
            </Provider>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        flexDirection: "column",
        gap: 8,
    },
});
