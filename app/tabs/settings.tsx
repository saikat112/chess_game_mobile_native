// app/tabs/settings.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen: React.FC = () => {
  const handleOptionPress = (option: string) => {
    alert(`${option} selected!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>

      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Profile')}>
        <Text style={styles.optionText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Notifications')}>
        <Text style={styles.optionText}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Home Content')}>
        <Text style={styles.optionText}>Home Content</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Theme')}>
        <Text style={styles.optionText}>Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  option: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
});

export default SettingsScreen;
