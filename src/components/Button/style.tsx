import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 2,
    height: Dimensions.get('screen').height / 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5B717',
  },

  pageController: {
    color: '#333',
    fontFamily: 'Starjedi',
  },
});
