import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native';
import { Ionicons , MaterialCommunityIcons } from '@expo/vector-icons';
import YesNoPage from '../screens/YesNoPage';
import { useState } from 'react';

const FullWidthCard = ({ title, description, navigation }) => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons name="basketball" size={30} color="#CC3300" />
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={styles.yes}
            onPress={toggleModal}
        >
            <Text style={styles.buttonTextYes}>Yes $ 5.3</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.no}
            onPress={toggleModal}
        >
            <Text style={styles.buttonTextNo}>NO $ 4.7</Text>
        </TouchableOpacity>
      </View>
      <YesNoPage isVisible={isModalVisible} onClose={toggleModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#f5ffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  description: {
    marginVertical: 10,
    fontSize: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  yes: {
    height: 45,
    width : 120,
    backgroundColor: '#66ccff',
    padding: 10,
    borderRadius: 5,
  },
  no: {
    height: 45,
    width : 120,
    backgroundColor: '#ffcccc',
    padding: 10,
    borderRadius: 5,
  },
  buttonTextYes: {
    color: '#6e00ff',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonTextNo: {
    color: '#ff855c',
    fontSize: 16,
    textAlign: 'center',
  },

});

export default FullWidthCard;
