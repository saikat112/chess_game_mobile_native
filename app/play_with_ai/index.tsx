// app/tabs/home.tsx
import { router, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const PlayWithAiScreen: React.FC = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Play with AI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
});

export default PlayWithAiScreen;
