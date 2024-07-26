import React from 'react'
import { View, Text,StyleSheet, Image} from 'react-native'

const FourthContainer = () => {
  return (
    <View style={Styles.Container}>
        <Text style={Styles.headtext}>About the event</Text>
        <View style={Styles.headContainer}>
            <View style={Styles.col}>
                <View style={Styles.card}>
                    <Text style={Styles.text1} >Traders</Text>
                    <Text style={Styles.text2} >$47,12K</Text>
                </View>
                <View style={Styles.card}>
                <Text style={Styles.text1} >Started at</Text>
                <Text style={Styles.text2} >July 24,2020 3:40PM</Text>
                </View>
            </View>
            <View style={Styles.col}>
                <View style={Styles.card}>
                <Text style={Styles.text1} >Volume</Text>
                <Text style={Styles.text2} >9.9L</Text>
                </View>
                <View style={Styles.card}>
                <Text style={Styles.text1} >Ending at</Text>
                <Text style={Styles.text2} >July 24,2020 9PM</Text>
                </View>
            </View>
        </View>
        <View style={Styles.infoContainer}>
          <View style={Styles.dashedLine} />
          <View style={Styles.info} >
          <Text style={Styles.text2}>Overview</Text>
          <Text style={Styles.text1}>Infornation about event</Text>
          </View>
          <View style={Styles.dashedLine} />
          <View style={Styles.info}>
            <Text style={Styles.text2}>Source of truth</Text>
            <Text style={Styles.text1}>Information about source of truth</Text>
          </View>
          <View style={Styles.dashedLine} />
          <View style={Styles.info}>
          <Text style={Styles.text2}>Rules</Text>
          <Text style={Styles.text1}>Terms and Conditions</Text>
          </View>
          <View style={Styles.dashedLine} />
        </View>
        <Image
        source={require('../../assets/trading.jpg')} 
        style={Styles.image}
      />
    </View>
  )
}

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 10,
        marginTop: 20,
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    headtext: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    headContainer: {
        flexDirection: 'row',
        padding: 5,
    },
    col: {
        flexDirection: 'column',
        marginBottom: 20,
    },
    card:{
        flexDirection: 'column',
        padding: 5,
    },
    text1: {
        fontSize: 13,
    },
    text2: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },
    infoContainer: {
        flexDirection: 'column',

    },
    info: {
        flexDirection: 'column',
        padding: 20,
    },
    dashedLine: {
        width: '80%', 
        height: 1,    
        borderColor: '#000',
        borderWidth: 1,
        borderStyle: 'dashed',
      },
    image: {
        height: 280,
        width: 300,
        marginTop: 10,
    }
})

export default FourthContainer