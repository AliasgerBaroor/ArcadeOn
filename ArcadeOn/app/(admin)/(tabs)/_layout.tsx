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
                name="admin-dashboard"
                options={{
                    title: "Home",
                    tabBarLabel: "home"
                }}
            />
            <Tabs.Screen
                name="admin-games"
                options={{
                    title: "Games",
                    tabBarLabel: "games"
                }}
            />
            <Tabs.Screen
                name="admin-events"
                options={{
                    title: "Events",
                    tabBarLabel: "events"
                }}
            />
            <Tabs.Screen
                name="admin-me"
                options={{
                    title: "Me",
                    tabBarLabel: "me"
                }}
            />
        </Tabs>
    );
}