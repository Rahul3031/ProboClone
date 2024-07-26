import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ThirdComponent = () => {
  // Create an array to render multiple rows
  const rows = Array.from({ length: 4 }, (_, index) => index);

  return (
    <View style={styles.container}>
      {/* Top Text Slabs */}
      <View style={styles.topTextSlabs}>
        <View style={styles.topTextSlabs1}>
            <Text style={styles.topText}>ACTIVITY</Text>
        </View>
        <View style={styles.topTextSlabs2}>
           <Text style={styles.topText}>ORDER BOOK</Text>
        </View>
      </View>

      {/* Rows with Icons and Text Slabs */}
      {rows.map((row) => (
        <View key={row} style={styles.row}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            <Ionicons name="person-circle" size={50} color="#0099cc" />
            <Text style={styles.text}>Hella</Text>
          </View>

          {/* Center Text Slabs */}
          <View style={styles.textSlabs}>
          <View style={styles.textSlab1}>
              <View style={[styles.textBox1, styles.leftText]}>
                <Text>${row * 10 + 5}</Text>
              </View>
              <View style={[styles.textBox2, { marginLeft: (row * 50) % 121 },styles.rightText]}>
                <Text>${row * 5 + 5}</Text>
              </View>
            </View>
            <View style={styles.textSlab2}>
              <Text style={styles.texttt}>a few seconds ago</Text>
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            <Ionicons name="person-circle" size={50} color="#0099cc" />
            <Text style={styles.text}>Robin</Text>
          </View>
        </View>
      ))}

      {/* Bottom Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Show all </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff5eb',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  topTextSlabs: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  topTextSlabs1: {
    backgroundColor: '#ffe0c2',
    borderRadius: 20,
    padding: 5,
    margin: 5,
  },
  topTextSlabs2: {
    borderRadius: 20,
    padding: 3,
    margin: 5,
  },
  topText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  leftColumn: {
    alignItems: 'center',
  },
  rightColumn: {
    alignItems: 'center',
  },
  textSlabs: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    marginHorizontal: 10,
  },
  textSlab1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e6c7f5',
    borderRadius: 10,
    // padding: 5,
    marginVertical: 5,
    alignItems: 'center',
    // marginLeft and marginRight will be dynamically set
  },
  textBox1: {
    flex: 1,
    padding: 5,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  textBox2: {
    flex: 1,
    padding: 5,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    // marginLeft: 15,
  },
  leftText: {
    backgroundColor: '#e6c7f5',
    borderRadius: 10,
  },
  rightText: {
    backgroundColor: '#ffadb2',
    borderRadius: 10,
  },
  textSlab2: {
    padding: 5,
    marginVertical: 1,
    alignItems: 'center',
  },
  texttt: {
    fontSize: 10,
  },
  text: {
    marginTop: 5,
  },
  button: {
    backgroundColor: '#bfe6e6',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ThirdComponent;

