import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { styles } from './style';

interface Props {
  onPressPreviousPage: Function;
  onPressNextPage: Function;
}

const Buttons: React.FC<Props> = ({ onPressPreviousPage, onPressNextPage }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPressPreviousPage()}>
        <Text style={styles.pageController}>Anterior</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPressNextPage()}>
        <Text style={styles.pageController}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
