// app/tabs/play.tsx
import React from 'react';
import { router, useRouter } from 'expo-router';
import { View, Text, StyleSheet , Button } from 'react-native';

const PlayScreen: React.FC = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Play</Text>
      <Button title= "Play With Friends " onPress={() => router.push('/play_with_friend')} />
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
