import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Container} from 'native-base';
import { SwipeRow } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

export default class TodoListItem extends React.Component {
  styles = StyleSheet.create({
    base: {
      backgroundColor: 'white',
      height: 50,
      borderBottomWidth: 1,
    },
    deleteButton: {
      flex: 1,
      backgroundColor: 'red',
      height: 64,
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingLeft: 16,
    },
    editButton: {
      flex: 1,
      backgroundColor: 'green',
      height: 64,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: 16,
    },
    whiteText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
    hidden: {
      flexDirection: 'row',
    },
    visible: {
      
    },
    icon: {
      padding: 12,
      color: 'black',
    },
    listText:{
      fontSize: 20,
      paddingTop: 10,
    }
  });

  delete() {
    console.log("delete");
  }

  render() {
    //console.log(this.props);
    const { todo, onRowPress } = this.props;
    return (
      <SwipeRow
        rightOpenValue={-125}
        leftOpenValue={125}
        stopRightSwipe={-145}
        stopLeftSwipe={145}
        onRowPress={onRowPress}
      >
        <View style={[this.styles.base, this.styles.hidden]}>
          {/* HIDDEN: need to swipe to see this content */}
          <TouchableOpacity onPress={this.delete} style={this.styles.deleteButton}>
            <Text style={this.styles.whiteText}>DELETE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Create Todo')} style={this.styles.editButton}>
            <Text style={this.styles.whiteText}>MODIFY</Text>
          </TouchableOpacity>
        </View>
        <View flexDirection = 'row' style={[this.styles.base, this.styles.visible]}>
          {/* VISIBLE: visible by default */}
          <Icon size = {24} name = {todo.icon} style = {this.styles.icon}></Icon>
          <Text style = {this.styles.listText}>{todo.title}</Text>
        </View>
      </SwipeRow>
    );
  }
}
