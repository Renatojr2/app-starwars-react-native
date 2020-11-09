import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  residentContainer: {
    borderLeftColor: '#F5B717',
    borderRadius: 10,

    borderWidth: 1,
    borderLeftWidth: 6,

    height: 120,
    width: 250,

    marginLeft: 15,
    padding: 10,
  },

  titleName: {
    fontSize: 18,
    fontFamily: 'Starjedi',
  },

  description: {
    fontFamily: 'Starjedi',
    fontSize: 16,
    marginRight: 8,
  },

  residentTextContainer: {
    flexDirection: 'row',
  },

  textDetails: {
    fontFamily: 'Starjedi',
    fontSize: 15,
    color: '#444',
  },
});
