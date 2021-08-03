import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
  TextInput,
} from 'react-native';
import {PermissionsAndroid} from 'react-native';

export default function Signup({navigation}) {
  const [value, setValue] = useState({
    firstname: 'jatan',
    lastname: 'hello',
    contact: '989898232312',
    emailid: 'jatan@gmail.com',
    password: '12345678',
  });

  const getDataUsingGet = (firstname, lastname, contact, emailid, password) => {
    //GET request
    var data = `http://jk-techno.com/signup?firstname=${firstname}&lastname=${lastname}&contact=${contact}&email_id=${emailid}&password=${password}`;
    // alert(data);
    console.log(data);
    fetch(data, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        // alert(JSON.stringify(responseJson));
        // alert(responseJson.message);
        if (responseJson.signup == 'success') {
          // alert('Signup Sucess');
          navigation.navigate('Home');
        } else {
          // alert(responseJson.message);
        }
      })
      //If response is not in json then in error
      .catch(error => {
        //Error
        // alert(error);
        // alert(JSON.stringify(error));
        console.error(error);
      });
  };

  const onPress = () => {
    getDataUsingGet(
      value.firstname,
      value.lastname,
      value.contact,
      value.emailid,
      value.password,
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setValue({...value, firstname: text})}
        placeholder="First Name"
        placeholderTextColor="#FFD700"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setValue({...value, lastname: text})}
        placeholder="Last Name"
        placeholderTextColor="#FFD700"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setValue({...value, contact: text})}
        placeholder="Contact Number"
        placeholderTextColor="#FFD700"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setValue({...value, emailid: text})}
        placeholder="Email ID"
        placeholderTextColor="#FFD700"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setValue({...value, password: text})}
        placeholder="Password"
        placeholderTextColor="#FFD700"
      />
      <Button
        style={styles.button}
        color="#FFD700"
        title="Sign Up"
        onPress={onPress}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    alignItems: 'center',
    borderWidth: 0,
    textShadowColor: 1,
    color: '#000000',
  },

  button: {
    padding: 15,
    backgroundColor: 'black',
  },
});
