import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'gray',
      }}>
      <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
        <View
          style={{
            flex: 0.5,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 200, width: 200, borderRadius: 100}}
            source={require('./src/assets/images/car.jpg')}
          />

          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>
            Code Builder
          </Text>
        </View>
        <View
          style={{
            flex: 0.5,
            backgroundColor: 'orange',
            alignItems: 'center',
          }}></View>
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
