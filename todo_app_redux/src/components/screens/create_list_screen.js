import React from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../../actions/lists';
import { Container, Input, Form, Item, Label, Textarea, Button, Text } from 'native-base';
import { StyleSheet, Alert, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export class CreateTodoScreen extends React.Component {
  state = {
    title: '',
    icon: '',
    titleMissing: false,
    iconMissing: false,
  }

  styles = StyleSheet.create({
    saveButtonContainer: {
      padding: 14,
      backgroundColor: 'gainsboro'
    },

    icons: {
      padding: 10,
      backgroundColor: 'gainsboro',
      color: 'black',
    },
    button: {
      backgroundColor: 'navy',
      alignSelf: 'center',
      width: 300
    },
    buttonText: {
      backgroundColor: 'navy',
      fontWeight: 'bold',
      position: 'relative',
      paddingLeft: 125
    }
  })

  update = (key, value) => this.setState({ [key]: value })

  save = () => {
    if (this.state.title === '') {
      Alert.alert(
        'Missing Info',
        'You have to provide a title dummy!!',
      );

      this.setState({ titleMissing: true })

      return;
    }
    if (this.state.icon === '') {
      Alert.alert(
        'Missing Info',
        'You have to provide an icon dummy!!',
      );

      this.setState({ iconMissing: true })

      return;
    }
    console.log(this.state.icon);
    this.props.createTodo(
      this.state.title,
      this.state.icon
    );

    this.props.navigation.goBack();
  }

  iconPress(name){
    this.update('icon', name);
    
  }

  render() {

    return (
      <Container style={this.styles.saveButtonContainer}>
        <Form>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input
              value={this.state.title}
              onChangeText={text => this.update('title', text)}
            />
          </Item>

          <View style ={{flexDirection: 'row', padding: 25}}>
            <Icon.Button name='music' color = {'black'} style={this.styles.icons} onPress={() => this.iconPress('music')}/>
            <Icon.Button name='download' color = {'black'} style={this.styles.icons} onPress={() => this.update('icon', 'download')}/>
            <Icon.Button name='home' color = {'black'} style={this.styles.icons} onPress={() => this.update('icon', 'home')}/>
            <Icon.Button name='shopping-cart' color = {'black'} style={this.styles.icons} onPress={() => this.update('icon', 'shopping-cart')}/>
            <Icon.Button name='book' color = {'black'} style={this.styles.icons} onPress={() => this.update('icon', 'book')}/>
            <Icon.Button name='gift' color = {'black'} style={this.styles.icons} onPress={() => this.update('icon', 'gift')}/>
          </View>

        </Form>
        <Container style={this.styles.saveButtonContainer}>
          <Button onPress={this.save} style={this.styles.button}><Text style={this.styles.buttonText}>Save</Text></Button>
        </Container>
      </Container>
    );
  }
}

const mapPropsToDispatch = {
  createTodo,
};

export default connect(null, mapPropsToDispatch)(CreateTodoScreen);
