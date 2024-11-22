// app/tabs/play.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlayScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Play Screen</Text>
      <Text style={styles.text}>Get ready to play some chess!</Text>
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

export default PlayScreen;
