import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'; 
import Home from '../screens/home';
import Dashboard from '../screens/dashboard';
import ConnectDevice from '../screens/ConnectDevice';
import Test from  '../screens/test';
import Signup from '../screens/Signup';

const screens = {
  Home: {
    screen: Home
  },
  Dashboard:{
    screen:Dashboard
  },
  ConnectDevice:{
    screen:ConnectDevice
  },
  Signup:{
    screen:Signup
  },
  Test:{
    screen:Test
  }


}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);