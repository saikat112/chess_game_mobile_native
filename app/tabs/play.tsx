import React from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Define a more specific type for the route
type PlayMode = {
  title: string;
  route: "/play_online" | "/play_with_ai" | "/pass_and_play" | "/play_with_friend"; // List all valid routes here
  description: string;
};

const playModes: PlayMode[] = [
  { title: "Play Online", route: "/play_online", description: "Challenge players worldwide." },
  { title: "Play With AI", route: "/play_with_ai", description: "Practice against AI opponents." },
  { title: "Pass and Play", route: "/pass_and_play", description: "Play locally with a friend." },
  { title: "Play With Friends", route: "/play_with_friend", description: "Invite friends to play online." },
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
          onPress={() => router.push({ pathname: mode.route })}
        >
          <Text style={styles.buttonText}>{mode.title}</Text>
          <Text style={styles.description}>{mode.description}</Text>
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
  description: {
    marginTop: 5,
    color: "#d0e8d0",
    fontSize: 14,
    textAlign: "center",
  },
});

export default PlayScreen;
