import { useThemeStore } from "@/src/stores/themeStore";
import { IconProps } from "@/src/types/icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { ComponentType } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Games from "../../icons/Games";
import Home from "../../icons/Home";
import MyAccount from "../../icons/MyAccount";
import Streak from "../../icons/Streak";

const getTabIcon = (name: string) => {
    const IconMap: Record<string, ComponentType<IconProps>> = {
        "home": Home,
        "games": Games,
        "reward": Streak,
        "me": MyAccount,
    }
    return IconMap[name]
}

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const iconInActive = useThemeStore(s => s.colors.primary);
    const iconActive = useThemeStore(s => s.colors.textMuted);
    const bgCard = useThemeStore(s => s.colors.bgCard);

    return (
        <View style={[styles.row, { backgroundColor: bgCard }]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                let label = options.tabBarLabel ?? options.title ?? route.name;

                if (typeof label === "function") {
                    const renderedLabel = label({
                        focused: isFocused,
                        color: isFocused ? iconInActive : iconActive,
                        position: "below-icon",
                        children: route.name,
                    });
                    label = typeof renderedLabel === "string" ? renderedLabel : route.name;
                }

                if (typeof label !== "string") {
                    label = route.name;
                }

                const IconComponent = getTabIcon(label);

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        onPress={() => {
                            const event = navigation.emit({
                                type: "tabPress",
                                target: route.key,
                                canPreventDefault: true,
                            });
                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        }}
                        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                    >
                        <IconComponent color={isFocused ? iconInActive : iconActive} />
                        <Text style={{ color: isFocused ? iconInActive : iconActive }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}


const styles = StyleSheet.create({
    row: {
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
