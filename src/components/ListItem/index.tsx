import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface Props {
  name: string;
  population: string;
  onPress: Function;
}

const ListItem: React.FC<Props> = ({ name, population, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => onPress()}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>
            População: {population === 'unknown' ? 0 : population}
          </Text>
        </View>
        <AntDesign name="right" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#333',
    padding: 10,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default ListItem;
