import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight } from 'react-native';

const ListItem = ({ text, onPress, selected}) => (
  <TouchableHighlight onPress={onPress}>
    <View>
    { selected ? <Text>{text}</Text> : null }
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,

}

export default ListItem;