import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
  TextInput,
  // AsyncStorage,
} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ConnectDevice({navigation}) {
  const [text, onChangeText] = React.useState('Contact number');
  const [number, onChangeNumber] = React.useState(null);
  const [value, setValue] = useState({
    SSID: '9510736166',
    password: 'p@ssw0rd',
  });

  const getdevicedata = (SSID, password) => {
    var data = `http://192.168.4.1/setting?ssid=${SSID}&pass=${password}`;
    // alert(data);
    fetch(data, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.success == 'true') {
          console.log('responseJson', responseJson.id);
          navigation.navigate('Dashboard');
        } else {
          // alert(responseJson.message);
          console.log('response -> connect device =====>', responseJson.mesage);
        }
      })
      .catch(error => {
        // alert(JSON.stringify(error));
        console.error(error);
      });
  };

  const onPress = () => {
    console.log('value.SSID ====>>> ', value.SSID);
    getdevicedata(value.SSID, value.password);
  };

  const saveData = serailno => {
    let user = serailno;
    AsyncStorage.setItem('serailno', serailno);
  };

  const displayData = async () => {
    try {
      let user = await AsyncStorage.getItem('serialno');
      // alert(user);
      console.log('user -> connect device =====>', user);

    } catch (error) {
      // alert(error);
      console.log('error -> connect device =====>', error);

    }
  };

  const getdeviceserial = () => {
    var data = `http://192.168.4.1/serailno`;
    // alert(data);
    fetch(data, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.success == 'true') {
          console.log('responseJson', responseJson.id);
          saveData(responseJson.serailno);
          displayData();
        } else {
          // alert(responseJson.message);
          console.log('response -> connect device =====>', responseJson.mesage);

        }
      })
      .catch(error => {
        // alert(JSON.stringify(error));
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setValue({...value, SSID: text})}
        placeholder="Wifi Name"
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
        title="Submit"
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
    alignItems: 'stretch',
    borderWidth: 0,
    textShadowColor: 1,
    color: '#000000',
  },

  button: {
    padding: 15,
    backgroundColor: 'black',
  },
});
