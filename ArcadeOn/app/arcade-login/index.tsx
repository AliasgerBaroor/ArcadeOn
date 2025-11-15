import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { loginSchema, LoginData } from "@/src/schema/loginSchema";
import { useDebounce } from "@/src/hooks/useDebounce";

export default function ArcadeLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");

  const debouncedEmail = useDebounce(email, 1000)
  const debouncedPassword = useDebounce(password, 1000)

  useEffect(() => {
  if (!debouncedEmail) {
    setErrorEmail("");
    return;
  }

  const check = loginSchema.shape.email.safeParse(debouncedEmail);
  setErrorEmail(check.success ? "" : check.error.issues[0].message);
}, [debouncedEmail]);

useEffect(() => {
  if (!debouncedPassword) {
    setErrorPass("");
    return;
  }

  const check = loginSchema.shape.password.safeParse(debouncedPassword);
  setErrorPass(check.success ? "" : check.error.issues[0].message);
}, [debouncedPassword]);



  const handleLogin = () => {
    const result = loginSchema.safeParse({ email, password });

    if (!result.success) {
      const issues = result.error.issues;

      issues.forEach((issue) => {
        if (issue.path[0] === "email") {
          setErrorEmail(issue.message);
        }
        if (issue.path[0] === "password") {
          setErrorPass(issue.message);
        }
      });
      return;
    }
    router.push("/");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} // tweak if needed
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          {/* {error ? <Text style={{ color: "red" }}>{error}</Text> : <Text>&nbsp;</Text>} */}
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            style={errorEmail.length > 0 ? styles.errInput : styles.input}
            autoCapitalize="none"
          />
          {errorEmail? <Text style={{color: "red"}}>{errorEmail}</Text>:null}
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
          {errorPass? <Text style={{color: "red"}}>{errorPass}</Text>:null}

          <Pressable onPress={handleLogin} style={styles.loginBtn}>
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    padding: 14,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
  },
  errInput: {
    padding: 14,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f12a2aff",
  },
  loginBtn: {
    backgroundColor: "#007bff",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
