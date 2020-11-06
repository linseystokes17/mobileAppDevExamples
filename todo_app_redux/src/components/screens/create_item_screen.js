import React from 'react';
import { connect } from 'react-redux';
import { createItem } from '../../actions/items';
import { Container, Input, Form, Item, Label, Textarea, Button, Text } from 'native-base';
import { StyleSheet, Alert, View } from 'react-native';


export class CreateItemScreen extends React.Component {
  state = {
    title: '',
    titleMissing: false,
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
    this.props.createItem(
      this.state.title
    );

    this.props.navigation.goBack();
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
        </Form>
        <Container style={this.styles.saveButtonContainer}>
          <Button onPress={this.save} style={this.styles.button}><Text style={this.styles.buttonText}>Save</Text></Button>
        </Container>
      </Container>
    );
  }
}

const mapPropsToDispatch = {
  createItem,
};

export default connect(null, mapPropsToDispatch)(CreateItemScreen);
