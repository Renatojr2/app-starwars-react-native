import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { styles } from './style';

interface Props {
  text: string;
  onPressPage: Function;
}

const Buttons: React.FC<Props> = ({ text, onPressPage }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPressPage()}>
        <Text style={styles.pageController}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
