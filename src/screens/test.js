/* eslint-disable react-native/no-inline-styles */
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
  Switch,
} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

export default function Test({navigation}) {
  const saveDataserialno = serialno => {
    //AsyncStorage.clear('serialno');
    AsyncStorage.setItem('serialno', serialno);
  };
  const saveDatadeviceid = devtoken => {
    //AsyncStorage.clear('serialno');
    AsyncStorage.setItem('devtoken', devtoken);
  };

  const adddeviceapi = (id, serialno) => {
    var data = `http://jk-techno.com/adddevice?id=${id}&serialno=${serialno}`;
    //alert(data)
    fetch(data, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.success == 'true') {
          // alert(responseJson.deviceid);
          saveDatadeviceid(responseJson.deviceid);
          console.log('responseJson', responseJson.id);
          navigation.navigate('Dashboard');
          displayData1();
        } else {
          // alert(responseJson.message);
        }
      })
      .catch(error => {
        // alert(JSON.stringify(error));
        console.error(error);
      });
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const displayData1 = async () => {
    try {
      let usrtoken = await AsyncStorage.getItem('usrtoken');
      //alert(usrtoken)
      let serialno = await AsyncStorage.getItem('serialno');
      //alert(serialno)
      let devtoken = await AsyncStorage.getItem('devtoken');
      //alert(devtoken)
      if (devtoken == null) {
        //alert("calling adddeviceapi")
        adddeviceapi(usrtoken, serialno);
      }
    } catch (error) {
      // alert(error);
    }
  };
  const d1 = true;
  saveDataserialno('jktechno202129050265');
  displayData1();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
      }}>
      <Text
        style={{
          fontSize: 16,
          margin: 10,
        }}>
        {`Switch to ${isEnabled ? 'unregister' : 'register'}`}
      </Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
