// app/_layout.tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="welcome/index" options={{ title: "Welcome" }} />
      <Stack.Screen name="login/index" options={{ title: "Login" }} />
      <Stack.Screen name="signup/index" options={{ title: "Sign Up" }} />
      <Stack.Screen name="tabs/index" options={{ title: "Main" }} />
    </Stack>
  );
}
