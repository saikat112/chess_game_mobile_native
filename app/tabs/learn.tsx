// app/tabs/learn.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LearnScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learn Screen</Text>
      <Text style={styles.text}>Learn how to play chess and improve your skills!</Text>
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
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default LearnScreen;
