import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/Text/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { EyeOffIcon } from './src/assets/icons/EyeOffIcon';
import { EyeOnIcon } from './src/assets/icons/EyeOnIcon';
import { Icon } from './src/components/Icon/Icon';


function App(): React.JSX.Element {


  return (
    <ThemeProvider theme={theme}>

      <SafeAreaView>
        <View style={{ padding: 24 }}>

          <Text bold preset='headingLarge' italic>mGuibTech</Text>
          <EyeOffIcon size={24} color="black" />
          <Icon name="eyeOn" />
          <Icon name="eyeOff" />
          <EyeOnIcon size={24} color="black" />

        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}


export default App;
