import React, { useState,useEffect } from 'react'
import { Text, View, StyleSheet, Image, Button,Alert,AsyncStorage,Switch } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

export default function Dashboard({ navigation }) {
  const [d1,setd1] = useState(false);
  const [d2,setd2] = useState(false);
  const [d3,setd3] = useState(false);
  const [d4,setd4] = useState(false);
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const [isdevicepresent,setisdevicepresent] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch1 = () => {
    //setIsEnabled(previousState => !previousState);
    //console.log(d1)
    //setd1(!d1);
    //console.log(d1)
    updatedevicestated1(deviceid,serialno,d1,d2,d3,d4)
    };
  const toggleSwitch2 = () => {
    updatedevicestated2(deviceid,serialno,d1,d2,d3,d4)
  }
  const toggleSwitch3 = () => {
    updatedevicestated3(deviceid,serialno,d1,d2,d3,d4)
  }
  const toggleSwitch4 = () => {
    updatedevicestated4(deviceid,serialno,d1,d2,d3,d4)
  }
  const [deviceid,setdeviceid] = useState('');
  const [serialno,setserialno] = useState('');
  const [userid,setuserid] = useState('');
  const updatedevicestated1 = (deviceid,serialno,d1,d2,d3,d4) =>{
    d1 = !d1
    console.log("inside function",d1)
    let data=`http://jk-techno.com/deviceupdate?id=${deviceid}&serialno=${serialno}&d1=${d1 == true ? 1:0}&d2=${d2 == true ? 1:0}&d3=${d3 == true ? 1:0}&d4=${d4 == true ? 1:0}`
    console.log(data)
    fetch(data, {
    method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
      if (responseJson.success == 'true')
        {
          //alert(d1)
          getdeviceapi(deviceid,serialno)
          //getdeviceapi(deviceid,serialno)
        }
        else{
          alert("error")
        }
        })
        .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
      
  }

  const updatedevicestated2 = (deviceid,serialno,d1,d2,d3,d4) =>{
    d2 = !d2
    console.log("inside function",d1)
    let data=`http://jk-techno.com/deviceupdate?id=${deviceid}&serialno=${serialno}&d1=${d1 == true ? 1:0}&d2=${d2 == true ? 1:0}&d3=${d3 == true ? 1:0}&d4=${d4 == true ? 1:0}`
    console.log(data)
    fetch(data, {
    method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
      if (responseJson.success == 'true')
        {
          //alert(d1)
          getdeviceapi(deviceid,serialno)
          //getdeviceapi(deviceid,serialno)
        }
        else{
          alert("error")
        }
        })
        .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
      
  }
  const updatedevicestated3 = (deviceid,serialno,d1,d2,d3,d4) =>{
    d3 = !d3
    console.log("inside function",d1)
    let data=`http://jk-techno.com/deviceupdate?id=${deviceid}&serialno=${serialno}&d1=${d1 == true ? 1:0}&d2=${d2 == true ? 1:0}&d3=${d3 == true ? 1:0}&d4=${d4 == true ? 1:0}`
    console.log(data)
    fetch(data, {
    method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
      if (responseJson.success == 'true')
        {
          //alert(d1)
          getdeviceapi(deviceid,serialno)
          //getdeviceapi(deviceid,serialno)
        }
        else{
          alert("error")
        }
        })
        .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }
  const updatedevicestated4 = (deviceid,serialno,d1,d2,d3,d4) =>{
    d4 = !d4
    console.log("inside function",d1)
    let data=`http://jk-techno.com/deviceupdate?id=${deviceid}&serialno=${serialno}&d1=${d1 == true ? 1:0}&d2=${d2 == true ? 1:0}&d3=${d3 == true ? 1:0}&d4=${d4 == true ? 1:0}`
    console.log(data)
    fetch(data, {
    method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
      if (responseJson.success == 'true')
        {
          //alert(d1)
          getdeviceapi(deviceid,serialno)
          //getdeviceapi(deviceid,serialno)
        }
        else{
          alert("error")
        }
        })
        .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }
  const networkstatus = () =>{
    NetInfo.addEventListener(networkState => {
    console.log("Connection type - ", networkState.type);
    console.log("Is connected? - ", networkState.isConnected);
    alert(networkState.isInternetReachable)
    if (networkState.type == 'wifi') {
      if(networkState.isConnected == true){
        if(networkState.isInternetReachable == true){
          navigation.navigate('ConnectDevice')
          }
        }
      }
    });
  }

  const adddeviceapi = (id,serialno) => {
    var data=`http://jk-techno.com/adddevice?id=${id}&serialno=${serialno}`;
    console.log(data)
    fetch(data, {
    method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
      if (responseJson.success == 'true')
        {
          saveData(responseJson.deviceid)
          console.log("responseJson",responseJson.id)
          navigation.navigate('Dashboard')
          displayData()
        }
        else
        {
          alert(JSON.stringify(responseJson.message))
        }
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  };
  
  const getdeviceapi = (deviceid,serialno) => {
    let data=`http://jk-techno.com/device?id=${deviceid}&serialno=${serialno}`;
    console.log(data)
    //alert(data)
    fetch(data, {
    method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //alert("test4")     
        //alert(JSON.stringify(responseJson))
       setd1(responseJson.d1 == 1 ? true:false)
       setd2(responseJson.d2 == 1 ? true:false)
       setd3(responseJson.d3 == 1 ? true:false)
       setd4(responseJson.d4 == 1 ? true:false)
       setisdevicepresent(true)

      })
      .catch((error) => {
        alert('test123',error);
        console.error(error);
      });
  }

  const saveData = (devicetoken) => {
    let user = devicetoken
    AsyncStorage.setItem('devicetoken',devicetoken);
  }

  const displayData = async () => {
    try {
      let usrtoken = await AsyncStorage.getItem('usrtoken')
      //alert(usrtoken)
      //setuserid(usrtoken)
      //alert(userid)
      let serialno = await AsyncStorage.getItem('serialno');
      //alert(serialno);
      setserialno(serialno)
      let devtoken = await AsyncStorage.getItem('devtoken')
      //alert(devtoken)
      setdeviceid(devtoken)
      //alert(deviceid)
      if (devtoken == null){
        //alert("calling adddeviceapi")
        adddeviceapi(userid,serialno)
      }
      else{
        //alert("calling getdeviceapi")
       getdeviceapi(devtoken,serialno)
      }
    }
    catch(error){
      alert(error);
    }
  }

  const device = () => {
    displayData()
  }
  
  const adddevice = () => {
    alert("Disable you Cellular network and connect to JK-Techno wifi")
    networkstatus()
  }
   device()

  if(!isdevicepresent) {
    return(
        <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/JKTechno.png')} />
      <Button 
        style={styles.button}
        color='#FFD700'
        title="Add Device"
        onPress={adddevice}
      />
    </View>
  );
  }
  else{ 
    return(
        <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/JKTechno.png')} />
        <Button 
        style={styles.button}
        color='#FFD700'
        title="Add Device"
        onPress={adddevice}
        />
        <Text> Switch 1 </Text>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={d1 ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch1}
        value={d1}
        //onValueChange={setd1(previousState => !previousState),updatedevicestate(d1,d2,d3,d4) }
        />
        <Text> Switch 2 </Text>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={d2 ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch2 }
        value={d2}
        />
        <Text> Switch 3 </Text>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={d3 ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch3 }
        value={d3}
        />
        <Text> Switch 4 </Text>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={d4 ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch4 }
        value={d4}
        />
        </View>
      );
  }
  

}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'top',
    padding: 24,
    backgroundColor:'white',
    flex:1
    },
      logo: {
    alignItems: 'top',
    justifyContent:'',
    height: 60,
    width: 60,
  },
  button:{
    padding:15,
    backgroundColor:'black'
  }
});
