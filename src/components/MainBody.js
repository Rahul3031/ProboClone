import React from 'react';
import { View, StyleSheet, FlatList, SectionList, Text , TouchableOpacity} from 'react-native';
import Card1 from './Card1'; 
import Card2 from './Card2'; 
import FullWidthCard from './FullWidthCard'; 

const data1 = [
  { id: '1', icon: 'football', title: 'Football' },
  { id: '2', icon: 'globe', title: 'World' },
  { id: '3', icon: 'logo-youtube', title: 'YouTube' },
  { id: '4', icon: 'trending-up', title: 'Stocks' },
  { id: '5', icon: 'newspaper', title: 'News' },
  { id: '6', icon: 'football', title: 'Cricket' },
];

const data2a = [
  { id: '1', icon: 'basketball', title: 'Atlanta v/s Boston' },
  { id: '2', icon: 'bicycle', title: 'Kristin v/s  Lance' },
  { id: '3', icon: 'game-controller', title: 'Pubg Live Gaming' },
  { id: '4', icon: 'trending-up', title: 'Growth' },
];

const data2b = [
  { id: '5', icon: 'bicycle', title: 'Kristin v/s  Lance' },
  { id: '6', icon: 'game-controller', title: 'Pubg Live Gaming' },
  { id: '7', icon: 'trending-up', title: 'Growth' },
  { id: '8', icon: 'basketball', title: 'Atlanta v/s Boston' },
];

const data3 = [
  { id: '1', title: 'Atlanta to win the match vs Boston?', description: 'H2H last 5 matches: Atlanta 4, Boston 1, DRAW 0' },
  { id: '2', title: 'Atlanta to win the match vs Boston?', description: 'H2H last 5 matches: Atlanta 4, Boston 1, DRAW 0' },
  { id: '3', title: 'Atlanta to win the match vs Boston?', description: 'H2H last 5 matches: Atlanta 4, Boston 1, DRAW 0' },
  { id: '4', title: 'Atlanta to win the match vs Boston?', description: 'H2H last 5 matches: Atlanta 4, Boston 1, DRAW 0' },
  { id: '5', title: 'Atlanta to win the match vs Boston?', description: 'H2H last 5 matches: Atlanta 4, Boston 1, DRAW 0' },
  { id: '6', title: 'Atlanta to win the match vs Boston?', description: 'H2H last 5 matches: Atlanta 4, Boston 1, DRAW 0' },
];

const MainBody = ({navigation}) => {


  const renderHorizontalList = (CardComponent, numColumns) => ({ item }) => (
    <View>
        <FlatList
        data={item}
        renderItem={({ item }) => <CardComponent icon={item.icon} title={item.title} />}
        keyExtractor={item => item.id}
        horizontal={numColumns === 1}
        showsHorizontalScrollIndicator={false}
        numColumns={numColumns}
        columnWrapperStyle={numColumns > 1 && styles.columnWrapper}
        />
    </View>
  );

  const renderDoubleHorizontalList = ({ item }) => (
    <View style={styles.doubleListContainer}>
      <Text style={styles.headline}>Trending Now</Text>
      <FlatList
        data={item.slice(0, 4)} // First half of the data
        renderItem={({ item }) => <Card2 icon={item.icon} title={item.title} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardList}
      />
      <FlatList
        data={item.slice(3)} // Second half of the data
        renderItem={({ item }) => <Card2 icon={item.icon} title={item.title} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardList}
      />
    </View>
  );



  const renderFullWidthCards = ({ item }) => (
    <View style={styles.section}>
      {item.map(data => (
        <TouchableOpacity
          key={data.id}
          onPress={() => navigation.navigate('QuestionPage')} // Navigate to QuestionPage on press
        >
          <FullWidthCard
            title={data.title}
            description={data.description}
            navigation={navigation}
          />
        </TouchableOpacity>
      ))}
    </View>
  );

  const sections = [
    { title: 'Section1', data: [data1], renderItem: renderHorizontalList(Card1, 1) },
    { title: 'Section3', data: [data2a.concat(data2b)], renderItem: renderDoubleHorizontalList },
    { title: 'Section4', data: [data3], renderItem: renderFullWidthCards },
  ];

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item + index}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  section: {
    marginVertical: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  doubleListContainer: {
    flexDirection: 'column',
    marginVertical: 0,
  },
  cardList: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headline: {
    fontSize: 17,
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingHorizontal: 12,
    paddingTop: 10,
  }
});

export default MainBody;



