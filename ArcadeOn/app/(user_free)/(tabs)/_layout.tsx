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
                name="home"
                options={{
                    title: "Home",
                    tabBarLabel: "home"
                }}
            />
            <Tabs.Screen
                name="games"
                options={{
                    title: "Games",
                    tabBarLabel: "games"
                }}
            />
            <Tabs.Screen
                name="reward"
                options={{
                    title: "Reward",
                    tabBarLabel: "reward"
                }}
            />
            <Tabs.Screen
                name="me"
                options={{
                    title: "Me",
                    tabBarLabel: "me"
                }}
            />
        </Tabs>
    );
}