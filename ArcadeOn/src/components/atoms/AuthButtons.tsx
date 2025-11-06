import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { ReactNode, useState, useEffect } from "react";
import * as Google from "expo-auth-session/providers/google";
import { AuthButtonProps, AuthButtonVariant } from "@/src/types/atoms";
import Typography from "../typography/Typography";
import GoogleIcon from "../icons/Google";
import { useThemeStore } from "@/src/stores/themeStore";
import AppleIcon from "../icons/Apple";
import GamesIcon from "../icons/Games";
import { useRouter } from "expo-router";
import { useAuth } from "@/src/sbc/utils/auth";
import Constants from "expo-constants";

const extra = Constants.expoConfig?.extra ?? {};

const {
  GOOGLE_ANDROID_CLIENT_ID,
  GOOGLE_IOS_CLIENT_ID,
  GOOGLE_EXPO_CLIENT_ID,
} = extra;

const AuthButton = ({ variant, style, ...props }: AuthButtonProps) => {
  const textHigh = useThemeStore((s) => s.colors.textHigh);
  const router = useRouter();
  const { login } = useAuth();
  const [showToast, setShowToast] = useState({
    state: false,
    message: "",
    type: "error",
  });

  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   androidClientId: GOOGLE_ANDROID_CLIENT_ID,
  //   iosClientId: GOOGLE_IOS_CLIENT_ID,
  //   clientId: GOOGLE_EXPO_CLIENT_ID,
  // });

  // useEffect(() => {
  //   if (response?.type === "success") {
  //     const { authentication } = response;
  //     async function doLogin() {
  //       await login("USER_FREE");
  //     }
  //     doLogin();
  //     router.push("/");
  //   } else if (response?.type === "error") {
  //     setShowToast({
  //       state: true,
  //       message: "Google Login failed",
  //       type: "error",
  //     });
  //   }
  // }, [response]);

  const loginWithGoogle = async () => {
    // try {
    //   await promptAsync();
    // } catch (error) {
    //   setShowToast({ state: true, message: "Auth failed", type: "error" });
    // }
    await login("USER_FREE");
    router.push("/");
  };

  const Button: Record<AuthButtonVariant, ReactNode> = {
    google: (
      <Pressable
        {...props}
        style={styles.google}
        onPress={loginWithGoogle}
        // disabled={!request}
      >
        <View style={styles.buttonRow}>
          <GoogleIcon size={20} />
          <Typography variant="h5">
            Continue with <Text style={{ fontWeight: "bold" }}>Google</Text>
          </Typography>
        </View>
      </Pressable>
    ),
    apple: (
      <Pressable
        {...props}
        style={[styles.apple, { backgroundColor: textHigh }]}
        onPress={() => {
          /* Apple login logic */
        }}
      >
        <View style={styles.buttonRow}>
          <AppleIcon size={20} color="#fff" />
          <Typography variant="h5" color="#fff" style={{ lineHeight: 24 }}>
            Continue with
          </Typography>
          <Typography
            variant="h4"
            color="#fff"
            style={{ fontSize: 20, lineHeight: 24 }}
          >
            Apple
          </Typography>
        </View>
      </Pressable>
    ),
    arcade_on: (
      <Pressable
        {...props}
        style={styles.arcadeOn}
        onPress={() => {
          /* Arcade login logic */
        }}
      >
        <View style={styles.buttonRow}>
          <GamesIcon size={20} />
          <Typography variant="h5" style={{ lineHeight: 24 }}>
            Continue with
          </Typography>
          <Typography variant="h4" style={{ fontSize: 20, lineHeight: 24 }}>
            Arcade
          </Typography>
        </View>
      </Pressable>
    ),
  };

  return Button[variant] || null;
};

export default AuthButton;

const styles = StyleSheet.create({
  google: { backgroundColor: "#fff", padding: 16, borderRadius: 100 },
  apple: { padding: 16, borderRadius: 100 },
  arcadeOn: { backgroundColor: "#fff", padding: 16, borderRadius: 100 },
  buttonRow: {
    paddingLeft: 32,
    flexDirection: "row",
    gap: 8,
    justifyContent: "flex-start",
  },
});
