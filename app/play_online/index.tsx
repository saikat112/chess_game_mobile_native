import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const OnlineMode: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [opponent, setOpponent] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (opponent) {
      // Redirect to Chess Arena with opponent and mode details
      router.push({
        pathname: "/arena",
        params: { mode: "Online", opponent },
      });
    }
  }, [opponent]);

  const startMatchmaking = () => {
    setIsSearching(true);

    // Simulate matchmaking (replace with real server logic)
    setTimeout(() => {
      setOpponent("OpponentPlayer123"); // Replace with real opponent data from the server
      setIsSearching(false);
    }, 3000); // Simulate a 3-second matchmaking delay
  };

  useEffect(() => {
    // Start matchmaking when the component is loaded
    startMatchmaking();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Online Mode</Text>
      {isSearching ? (
        <Text style={styles.status}>Searching for an opponent...</Text>
      ) : (
        <Text style={styles.status}>Opponent Found: {opponent}</Text>
      )}
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
  status: {
    fontSize: 18,
    marginBottom: 20,
    color: "#333",
  },
});

export default OnlineMode;
