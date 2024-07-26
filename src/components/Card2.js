import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Card2 = ({ icon, title }) => {
  return (
    <View style={styles.card}>
      <Ionicons name={icon} size={30} color="#FF9966" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexShrink: 1,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  title: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card2;
