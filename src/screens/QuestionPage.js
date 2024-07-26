import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView,Image, TouchableOpacity} from 'react-native';
import ThirdComponent from '../components/ThirdContainer';
import FourthContainer from '../components/FourthContainer';
import YesNoPage from './YesNoPage';

const QuestionPage = () => {

    const [imageUrl, setImageUrl] = useState(require('../../assets/time.png'));
    const [selectedButton, setSelectedButton] = useState(1);

    const changeImage = (imagePath,buttonId) => {
      setImageUrl(imagePath);
      setSelectedButton(buttonId);
    };

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        {/* First Container */}
        <View style={styles.firstContainer}>
          <Image 
            source={require('../../assets/basketball.jpg')} 
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.title}>Atlanta to win the match vs Boston?</Text>
          <View style={styles.smallTextContainer}>
            <Text style={styles.smallText}>NBA</Text>
            <Text style={styles.smallText}>League</Text>
            <Text style={styles.smallText}>BasketBall</Text>
          </View>
          <View style={styles.finalTextContainer}>
           <Text style={styles.finalText}>H2H last 5 matches: Atlanta 4, Boston 1</Text>
          </View>
        </View>

        {/* Second Container */}
        <View style={styles.secondContainer}>
      <Image 
        source={imageUrl} 
        style={styles.image2}
      />
      {/* Buttons to change the image */}
      <View style={styles.buttonContainer2}>
        <TouchableOpacity
          style={[styles.button2, selectedButton === 1 && styles.buttonPressed]}
          onPress={() => changeImage(require('../../assets/time.png'),1)}
        >
          <Text>Time</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2, selectedButton === 2 && styles.buttonPressed]}
          onPress={() => changeImage(require('../../assets/month.png'),2)}
        >
          <Text>Day</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2, selectedButton === 3 && styles.buttonPressed]}
          onPress={() => changeImage(require('../../assets/day.png'),3)}
        >
          <Text>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2, selectedButton === 4 && styles.buttonPressed]}
          onPress={() => changeImage(require('../../assets/all.png'),4)}
        >
          <Text>Data</Text>
        </TouchableOpacity>
      </View>
    </View>
        <ThirdComponent/>
        <FourthContainer/>
        <View style={styles.bottom}>
        <TouchableOpacity style={styles.yesButton} onPress={toggleModal}>
          <Text style={styles.buttonText}>Yes $5.3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.noButton} onPress={toggleModal}>
          <Text style={styles.buttonText}>No $4.7</Text>
        </TouchableOpacity>
      </View>
      </View>
      <YesNoPage isVisible={isModalVisible} onClose={toggleModal} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  firstContainer: {
    alignItems: 'center',
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
  secondContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e8eaf6',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
  },
  icon: {
    marginBottom: 10,
  },
  image: {
    marginBottom: 10,
    height: 50,
    width: 50,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  smallTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 30,
  },
  smallText: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 50,
    paddingVertical: 4, 
    paddingHorizontal: 10, 
    marginHorizontal: 2, 
    fontSize: 11, 
    backgroundColor: '#d9d4f7', 
  },
  finalTextContainer: {
    borderRadius: 10,
    backgroundColor: '#80e6e6',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  finalText: {
    fontSize: 12,
    color: '#333',
  },
  image2: {
    width: '100%',
    height: 250, 
    marginBottom: 10,
  },
  buttonContainer2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    borderRadius: 30,
  },
  button2:{
    flexShrink: 1,
    // height: 40,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10,
    margin: 5,
  },
  buttonPressed: {
    backgroundColor: '#8ad1fa', 
  },
  flatListContainer: {
    paddingBottom: 20, 
    margin: 0,
  },
  bottom :{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
    marginTop: 20,
  },
  yesButton: {
    backgroundColor: '#6e00ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    width: '48%',
  },
  noButton: {
    backgroundColor: '#ff855c',
    padding: 12,
    borderRadius: 10,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  }
});

export default QuestionPage;
