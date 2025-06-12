import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';


function App(): React.JSX.Element {


  return (
    <ThemeProvider theme={theme}>

      <SafeAreaView>
        <View style={{ padding: 24 }}>

          <Text bold>Testando app</Text>
          <Text italic>Testando app</Text>
          <Button title='Testando app' onPress={() => { }} />

        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}


export default App;
