import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  planetContainer: {
    marginTop: 15,
    padding: 10,
  },

  textContainer: {
    marginTop: 20,
  },

  textGroupContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },

  textGroupTerrain: {
    borderColor: '#666',
    borderWidth: 1,

    width: 330,

    marginLeft: 5,
    padding: 10,

    borderRightWidth: 5,
    borderTopWidth: 4,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
  },

  textGroupClimate: {
    borderColor: '#666',
    borderWidth: 1,

    marginLeft: 5,
    padding: 10,

    width: 135,

    borderRightWidth: 5,
    borderTopWidth: 4,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
  },

  textGroup: {
    borderColor: '#666',
    borderWidth: 1,

    marginLeft: 5,
    padding: 10,

    width: 190,

    borderRightWidth: 5,
    borderTopWidth: 4,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
  },

  title: {
    fontSize: 30,
    fontFamily: 'Starjedi',
    textAlign: 'center',
  },

  subTitle: {
    fontFamily: 'Starjedi',
    fontSize: 22,
  },

  textDetails: {
    fontFamily: 'Starjedi',
    fontSize: 13,
    color: '#444',
  },
});
