import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons , FontAwesome } from '@expo/vector-icons';

const BottomNav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="home" size={24} color="#1254a6" />
        <Text style={styles.iconText}>Home</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name="search" size={24} color="#669999" />
        <Text style={styles.iconText}>Search</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name="trophy" size={24} color="gold" />
        <Text style={styles.iconText}>Sports</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name="briefcase" size={24} color="#75a8a8" />
        <Text style={styles.iconText}>Portfolio</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name="wallet" size={24} color="brown" />
        <Text style={styles.iconText}>Wallet</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
    color: 'black',
    marginTop: 4,
  },
});

export default BottomNav;

