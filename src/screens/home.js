import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  Button,
  Alert,
  AsyncStorage,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export default function Home({navigation}) {
  const [text, onChangeText] = React.useState('Contact number');

  const [number, onChangeNumber] = React.useState(null);

  const [value, setValue] = useState({
    username: '9510736166',
    password: 'p@ssw0rd',
  });

  const getDataUsingGet = (username, password) => {
    let data = `http://jk-techno.com/login?contact=${username}&password=${password}`;
    console.log(data);
    fetch(data, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.success == 'true') {
          alert('Login success');
          saveData(responseJson.id);
          navigation.navigate('Dashboard');
        } else {
          alert(responseJson.message);
        }
      })
      .catch(error => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  };

  const onPress = () => {
    getDataUsingGet(value.username, value.password);
  };

  const onpress1 = () => {
    navigation.navigate('Signup');
  };

  const onpress2 = () => {
    navigation.navigate('Test');
  };

  const saveData = token => {
    let usrtoken = token;
    AsyncStorage.setItem('usrtoken', usrtoken);
  };

  const displayData = async () => {
    try {
      let usrtoken = await AsyncStorage.getItem('usrtoken');
      alert(usrtoken);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/JKTechno.png')} />
      <TextInput
        style={styles.input}
        onChangeText={text => setValue({...value, username: text})}
        placeholder="Contact Number"
        keyboardType="numeric"
        placeholderTextColor="#FFD700"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setValue({...value, password: text})}
        value={number}
        placeholder="Password"
        placeholderTextColor="#FFD700"
      />
      <Button
        style={styles.button}
        color="#FFD700"
        title="Login"
        onPress={onPress}
      />
      <Button
        style={styles.button}
        color="#FFD700"
        title="Sign Up"
        onPress={onpress1}
      />
      <Button
        style={styles.button}
        color="#FFD700"
        title="test page"
        onPress={onpress2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'top',
    padding: 24,
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    alignItems: 'stretch',
    borderWidth: 0,
    textShadowColor: 1,
    color: '#000000',
  },
  logo: {
    alignItems: 'top',
    height: 128,
    width: 128,
  },
  button: {
    padding: 15,
    backgroundColor: 'black',
  },
});
