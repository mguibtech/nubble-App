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

          <Text bold preset='headingLarge' italic>mGuibTech</Text>

          <Button
            title="Primary Button"
            preset="primary"
            onPress={() => console.log('Primary Button Pressed')}
          />

          <Button
            title="Outline Button"
            preset="outline"
            onPress={() => console.log('Outline Button Pressed')}
          />

          <Button
            title="Loading Button"
            loading={true}
            onPress={() => console.log('Loading Button Pressed')}
          />

          <Button
            title="Disabled Button"
            disabled={true}
            onPress={() => console.log('Disabled Button Pressed')}
          />

          <Button
            title="Disabled Loading Button"
            loading={true}
            disabled={true}
            onPress={() => console.log('Disabled Loading Button Pressed')}
          />

          <Button
            title="Custom Style Button"
            preset="outline"
            loading
            onPress={() => console.log('Custom Style Button Pressed')}
          />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}


export default App;
