import React from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Text, H1 } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import TodoListItem from '../todos/todo_list_item';
import { getTodos } from '../../actions/lists';

export class TodoListScreen extends React.Component {
  styles = StyleSheet.create({
    message: {
      alignItems: 'center',
      padding: 16,
    }
  })

  state = {
    loadedName: 'Linsey',
  }
  // PRIMITIVE EXAMPLE OF STORAGE
  // async componentDidMount() {
  //   const info = {
  //     name: 'Joseph',
  //     birthday: '01/01/2001',
  //   };
  //   await AsyncStorage.setItem("@todo_app_user_name", JSON.stringify(info));
  //   const loadedInfoJsonString = await AsyncStorage.getItem("@todo_app_user_name");
  //   const parsedInfo = JSON.parse(loadedInfoJsonString);
  //   this.setState({ loadedName: parsedInfo.name });
  //   console.log(parsedInfo);
  // }

  componentDidMount() {
    //await AsyncStorage.clear();
    this.props.getTodos();
  }
  componentDidUpdate() {
    //await AsyncStorage.clear();
    this.props.getTodos();
  }

  render() {
    if (this.props.todos.length === 0) {
      console.log(this.props.todos);
      return (
        <Container style={this.styles.message}>
          <H1>Welcome!</H1>
          <Text>You do not have any shopping lists yet, click the "+" button at the top to add a new list.</Text>
        </Container>
      )
    }

    //console.log(this.props.todos);
    return (
      <Container>
        <FlatList
          data={this.props.todos}
          renderItem={({item}) => (
            <TodoListItem 
              todo={item} 
              onRowPress={
                () => this.props.navigation.navigate("Items", {todoItemId: item.id})
              }
            />
          )}
          keyExtractor={item => `todo_${item.id}`}
        />
      </Container>
    );
  }
}

select = (storeState) => {
  return {
    todos: storeState.todos,
  }
};

// select = ({ todos }) => ({ todos });

export default connect(select, { getTodos })(TodoListScreen);
