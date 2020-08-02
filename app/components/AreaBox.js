import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default ({ label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#2159db',
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 30,
        justifyContent: 'center',
      }}>
      <Text style={{ fontSize: 30, color: '#FFFFFF' }}>{label}</Text>
    </TouchableOpacity>
  );
};
