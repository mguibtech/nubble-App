import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { SignUpScreen } from './src/screens/auth/SignUpScreen/SignUpScreen';
import { LoginScreen } from './src/screens/auth/LoginScreen/LoginScreen';


function App(): React.JSX.Element {


  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <LoginScreen />
          {/* <SignUpScreen /> */}
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}


export default App;
