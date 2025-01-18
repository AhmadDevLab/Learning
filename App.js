import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {React, useState} from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  // const countIncrement = () => {
  //   setCounter(counter + 1);
  // };
  // const countDecrement = () => {
  //   setCounter(counter - 1);
  // };

  const countIncreDecre = (value, action) => {
    if (action == 'plus') {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
      }}>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => countIncreDecre(counter, 'plus')}
              style={{
                backgroundColor: 'green',
                height: 50,
                width: 50,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 20,
              }}>
              <Text style={{color: 'white'}}>+</Text>
            </TouchableOpacity>
            <View style={{alignItems: 'center', marginVertical: 10}}>
              <Text style={{fontSize: 30}}>{counter}</Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => countIncreDecre(counter, 'minus')}
              style={{
                backgroundColor: 'green',
                height: 50,
                width: 50,
                borderRadius: 25,

                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 20,
              }}>
              <Text style={{color: 'white', fontSize: 25}}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setCounter(0)}
              style={{
                backgroundColor: 'green',
                height: 40,
                width: 100,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 20,
                marginTop: 20,
              }}>
              <Text style={{color: 'white', fontSize: 14}}>Reset</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
