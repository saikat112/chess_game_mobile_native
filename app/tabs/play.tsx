// app/tabs/play.tsx
import React from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const playModes = [
  { title: "Play Online", route: "/play_online" },
  { title: "Play With AI", route: "/play_with_ai" },
  { title: "Pass and Play", route: "/pass_and_play" },
  { title: "Play With Friends", route: "/play_with_friend" },
];

const PlayScreen: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Play</Text>
      {playModes.map((mode, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => router.push(mode.route)}
        >
          <Text style={styles.buttonText}>{mode.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    width: "80%",
    padding: 15,
    backgroundColor: "#4CAF50",
    marginBottom: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PlayScreen;
