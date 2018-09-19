import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './src/EventList';
import EventForm from './src/EventForm';
import { StackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

export default StackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your Upcoming Events 🔔'
    })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add New Event'
    })
  }
})
