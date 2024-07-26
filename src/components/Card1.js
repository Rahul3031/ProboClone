import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const getIconComponent = (icon) => {
  switch (icon) {
    case 'football':
    case 'youtube':
      return Ionicons;
    case 'news':
      return MaterialCommunityIcons;
    case 'world':
      return FontAwesome;
    default:
      return Ionicons;
  }
};

const Card1 = ({ icon, title }) => {
  const IconComponent = getIconComponent(icon);

  return (
    <View style={styles.cardContainer}>
      <IconComponent name={icon} size={24} color="#CC0000" />
      <Text style={styles.cardText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 80,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cardText: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default Card1;

