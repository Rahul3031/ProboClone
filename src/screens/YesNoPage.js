import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import Modal from 'react-native-modal';

const YesNoPage = ({ isVisible, onClose }) => {
  const [value, setValue] = useState(0); 
  const [selected, setSelected] = useState('yes'); 

  const handleSlide = (newValue) => {
    setValue(newValue);
  };

  const handleButtonPress = (choice) => {
    setSelected(choice);
  };


  return (
   <Modal isVisible={isVisible} onBackdropPress={onClose}> 
    <View style={styles.container}>
      {/* Top section with text and user icon */}
      <View style={styles.topSection}>
        <Text style={styles.topText}>Atlanta to win the match vs Boston</Text>
        <Image 
            source={require('../../assets/basketball.jpg')} // Replace with your image path
            style={styles.image}
          />
      </View>

       {/* Sliding Yes/No buttons */}
       <View style={styles.sliderContainer}>
        <TouchableOpacity
          style={[styles.button, selected === 'yes' && styles.selectedButton]}
          onPress={() => handleButtonPress('yes')}
        >
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selected === 'no' && styles.selectedButton]}
          onPress={() => handleButtonPress('no')}
        >
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>

      {/* Row of two text slabs above the range bar */}
      <View style={styles.bodyContainer}>
      <View style={styles.textSlabsContainer}>
        <View style={styles.textSlab}>
          <Text style={styles.textSlabText}>Price</Text>
        </View>
        <View style={styles.textSlab}>
          <Text style={styles.textSlabText1}>$5.3</Text>
          <Text style={styles.textSlabText2}>132105 qty available</Text>
        </View>
      </View>

      {/* Range bar */}
      <View style={styles.rangeContainer}>
        <Text style={styles.rangeLabel}>-</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          value={value}
          onValueChange={handleSlide}
          minimumTrackTintColor={selected === 'NO' ? 'red' : 'green'}
          maximumTrackTintColor="#000000"
        />
        <Text style={styles.rangeLabel}>+</Text>
      </View>

      {/* Row of two text bars below the range bar */}
      <View style={styles.textBarsContainer}>
        <View style={styles.barsContainer}>
        <Text style={styles.textBar1}>$5.3</Text>
        <Text style={styles.textBar2}>You put</Text>
        </View>
        <View style={styles.barsContainer}>
        <Text style={styles.textBar1}>$10</Text>
        <Text style={styles.textBar2}>You get</Text>
        </View>
      </View>
      </View>

      {/* Sliding button */}
      <View style={styles.sliderButtonContainer}>
        <TouchableOpacity
          style={[styles.sliderButton, selected === 'yes' ? styles.yesSlider : styles.noSlider]}
          onPress={onClose}
        >
          <Text style={styles.sliderButtonText}>{selected === 'yes' ? 'Order Success' : 'Order Reject'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.bottomText}>Available Balanace: 400.0</Text>
    </View>
  </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0ffff',
    marginTop: 100,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    height: '65%'
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  topText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedButton: {
    backgroundColor: '#009688',
  },
  bodyContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
  },
  rangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  rangeLabel: {
    fontSize: 18,
  },
  textSlabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textSlab: {
    alignItems: 'center',
  },
  textSlabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textSlabText1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 90,
  },
  textSlabText2: {
    fontSize: 12,
  },
  textBarsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  barsContainer: {
    alignItems: 'center',
    flex: 1,
  },
  textBar1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textBar2: {
    fontSize: 14,
    color: '#666',
  },
  sliderButtonContainer: {
    alignItems: 'center',
  },
  sliderButton: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  yesSlider: {
    backgroundColor: '#4caf50',
  },
  noSlider: {
    backgroundColor: '#f44336',
  },
  sliderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 40,
    height: 40,
  },
  barsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',

  },
  bottomText: {
    justifyContent: 'center',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    marginLeft: 55,
  }
});

export default YesNoPage;




