import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import {StyleSheet} from 'react-native';
import { Button, Text, Container } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import TodoListScreen from './src/components/screens/todo_list_screen';
import TodoItemScreen from './src/components/screens/todo_item_screen';
import CreateTodoScreen from './src/components/screens/create_list_screen';
import CreateItemScreen from './src/components/screens/create_item_screen';
import store from './src/store/store';

const Stack = createStackNavigator();

export default class App extends React.Component {
  styles = StyleSheet.create({
    plus:{
      paddingRight: 20,
      paddingTop: 15,
    }
  })
  
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Shopping Lists"
              component={TodoListScreen}
              options={({ navigation }) => ({
                headerRight: () => (
                  <Container>
                    <Button transparent onPress={() => navigation.navigate('Create List')}>
                      <Icon name="plus" style = {this.styles.plus} size={24} color="navy" />
                    </Button>
                  </Container>
                )
              })}
            />
            <Stack.Screen name="Create List" component={CreateTodoScreen} />
            <Stack.Screen 
              name="Items" 
              component={TodoItemScreen} 
              options={({ navigation }) => ({
                headerRight: () => (
                  <Container>
                    <Button transparent onPress={() => navigation.navigate('Create Item')}>
                      <Icon name="plus" style = {this.styles.plus} size={24} color="navy" />
                    </Button>
                  </Container>
                )
              })}
            />
            <Stack.Screen name="Create Item" component={CreateItemScreen} />

          
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
