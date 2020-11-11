import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.9,
  },

  description: {
    position: 'absolute',
    fontFamily: 'Starjedi',
    fontSize: 16,

    top: 65,
  },
});
