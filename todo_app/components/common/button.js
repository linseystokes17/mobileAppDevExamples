import React from 'react';

import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default class Button extends React.Component {
  styles = StyleSheet.create({
    button: {
      backgroundColor: 'pink',
      margin: 16,
      borderRadius: 4,
      padding: 8
    },
    title: {
      fontSize: 32,
      alignSelf: 'center',
    }
  });

  render() {
   const { onPress, style, title, titleStyle } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[this.styles.button, style]}>
          <Text style={[this.styles.title, titleStyle]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
