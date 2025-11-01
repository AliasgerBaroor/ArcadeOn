import CustomTabBar from "@/src/components/molecules/layouts/CustomTabBar";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
    return (
        <Tabs
            tabBar={props => <CustomTabBar {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="superadmin-dashboard"
                options={{
                    title: "Home",
                    tabBarLabel: "home"
                }}
            />
            <Tabs.Screen
                name="superadmin-games"
                options={{
                    title: "Games",
                    tabBarLabel: "games"
                }}
            />
            <Tabs.Screen
                name="superadmin-events"
                options={{
                    title: "Events",
                    tabBarLabel: "events"
                }}
            />
            <Tabs.Screen
                name="superadmin-me"
                options={{
                    title: "Me",
                    tabBarLabel: "me"
                }}
            />
        </Tabs>
    );
}