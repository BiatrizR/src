import 'react-native-gesture-handler';
import { GestureHandlerRootView } from "react-native-gesture-handler"
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';


import Routes from './src/routes/index';

function App(){
    return(
      <NavigationContainer>

      <Routes />
      </NavigationContainer>
    )

}
export default App;