import React from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Text, H1 } from 'native-base';
import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import TodoItem from '../todos/todo_item';
import _ from 'lodash';
import { getItems } from '../../actions/items';

export class TodoItemScreen extends React.Component {
    componentDidMount() {
        //await AsyncStorage.clear();
        this.props.getItems();
    }
    componentDidUpdate() {
        //await AsyncStorage.clear();
        this.props.getItems();
    }


    render() {
        //console.log(this.props);
        return (
            <Container>
            <FlatList
              data={this.props.items}
              renderItem={({item}) => (
                <TodoItem 
                  item={item} 
                  onRowPress={
                    console.log("pressed")
                  }
                />
              )}
              keyExtractor={item => `item_${item.id}`}
            />
          </Container>
        );
    }
}


select = (storeState) => {
    return {
      items: storeState.items,
    }
  };

export default connect(select, { getItems }) (TodoItemScreen);
