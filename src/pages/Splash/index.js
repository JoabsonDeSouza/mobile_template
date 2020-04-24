import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Container, Text } from './styles';

export default function Splash() {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate('Home');
  }, 3000);
  return (
    <Container>
      <Text>Splash</Text>
    </Container>
  );
}
