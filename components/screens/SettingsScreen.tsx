import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const SettingsScreen: React.FC = () => {
  const handleOptionPress = (option: string) => {
    console.log(`${option} pressed`);
    // Add navigation or specific functionality for each option here
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress("Profile")}>
        <Text style={styles.optionText}>Profile</Text>
        <Text style={styles.optionDescription}>Manage your account details and preferences.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress("Notifications")}>
        <Text style={styles.optionText}>Notifications</Text>
        <Text style={styles.optionDescription}>Set your notification preferences and alerts.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress("Home")}>
        <Text style={styles.optionText}>Home</Text>
        <Text style={styles.optionDescription}>Customize what appears on the home page.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress("Theme")}>
        <Text style={styles.optionText}>Theme</Text>
        <Text style={styles.optionDescription}>Change chess board and piece design.</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  option: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: "#666666",
  },
});

export default SettingsScreen;
