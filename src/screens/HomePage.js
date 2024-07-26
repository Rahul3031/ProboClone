import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Header';
import MainBody from '../components/MainBody'; 
import BottomNav from '../components/Bottom';

const HomePage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <MainBody navigation={navigation} />
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default HomePage;






