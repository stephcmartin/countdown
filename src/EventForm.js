import React, { Component } from 'react';
import { Text, View, TouchableHighlight, TextInput } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { saveEvent, formatDateTime } from './api';
import styles from './EventFormStyles.js';

export default class EventForm extends Component{
  state = {
     title: null,
     date: '',
   };

   handleChangeTitle = (text) => {
     this.setState({
       title: text,
     });
   }

   handleDatePicked = (date) => {
     this.setState({
       date,
     });

     this.handleDatePickerHide();
   }


   handleDatePickerHide = () => {
     this.setState({
       showDatePicker: false,
     });
   }

   handleDatePress = () => {
     this.setState({
       showDatePicker: true,
     });
   }

   handleAddPress = () => {
     console.log('this.state', this.state)
     saveEvent(this.state)
     .then(() => {
       this.props.navigation.goBack();
     })
   }

  render(){
    return(
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.text}
            onChangeText={this.handleChangeTitle}
            placeholder="Event title"
            spellCheck={false}
            value={this.state.title}
          />
          <TextInput
            style={[styles.text, styles.borderTop]}
            placeholder="Event date"
            spellCheck={false}
            value={formatDateTime(this.state.date.toString())}
            editable={!this.state.showDatePicker}
            onFocus={this.handleDatePress}
          />
          <DateTimePicker
            isVisible={this.state.showDatePicker}
            mode="datetime"
            onConfirm={this.handleDatePicked}
            onCancel={this.handleDatePickerHide}
          />
        </View>
        <TouchableHighlight
          onPress={this.handleAddPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
