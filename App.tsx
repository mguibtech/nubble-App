import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';


function App(): React.JSX.Element {


  return (
    <SafeAreaView>
      <Text bold>Testando app</Text>
      <Text italic>Testando app</Text>
      <Text semibold>Testando app</Text>
      <Text bold italic>Testando app</Text>
      <Text bold semibold>Testando app</Text>
      <Text italic semibold>Testando app</Text>
      <Text italic semibold>Testando app</Text>

    </SafeAreaView>
  );
}


export default App;
