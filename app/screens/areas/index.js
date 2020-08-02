import React from 'react';
import { View, Text } from 'react-native';
import AreaBox from '../../components/AreaBox';

export default () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
      }}>
      <AreaBox label="Ikoyi" onPress={() => console.log('Hello')} />
      <AreaBox label="Lekki" onPress={() => console.log('Hello')} />
      <AreaBox label="Ota" onPress={() => console.log('Hello')} />
      <AreaBox label="Ajah" onPress={() => console.log('Hello')} />
    </View>
  );
};
