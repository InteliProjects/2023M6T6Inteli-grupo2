import React from 'react';
import {View, Text} from 'react-native';
import { Button } from '../../components/Button';
import { styles } from '../styles/style';
import { UseAuth } from '../../contexts/Auth';

export function Settings() {
    const {signOut} = UseAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <Button
        style={{backgroundColor: 'red'}}
        title="Sair do App"
        onPress={signOut}
      />
    </View> 
  );
}