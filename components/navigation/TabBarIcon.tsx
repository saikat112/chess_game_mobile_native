import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface TabBarIconProps {
  route: { name: string };
  color: string;
  size: number;
}

export default function TabBarIcon({ route, color, size }: TabBarIconProps) {
  let iconName;
  if (route.name === 'Home') iconName = 'home';
  else if (route.name === 'Learn') iconName = 'school';
  else if (route.name === 'Settings') iconName = 'settings';

  return <MaterialIcons classname={iconName} size={size} color={color} />;
}
