import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.topRow}>
        <Ionicons name="person-circle" size={35} color="#0099cc" style={styles.leftIcon} />
        <Ionicons name="notifications" size={35} color="#e89400" style={styles.rightIcon} />
      </View>
      <Image 
        source={require('../../assets/swim.jpg')} // Replace with your image path
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  leftIcon: {
    flex: 1,
  },
  rightIcon: {
    flex: 1,
    textAlign: 'right',
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
  },
});

export default Header;






