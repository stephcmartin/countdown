import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import ActionButton from 'react-native-action-button';

import EventCard from './EventCard';
import styles from './EventListStyles';
import { getEvents } from './api';

export default class EventList extends Component{
  state = {
    events: []
  }

  componentDidMount(){
    // To countdown events and make the clock tick
    setInterval(() => {
    let events = this.state.events.filter(event => event.date > Date.now());

    this.setState({
      // We want to map over the events in state and override them
      // Each event will return a new object
      events: events.map(evt => ({
        ...evt,
        // We want this value to update every sceond for each event
        timer: Date.now(),
      })),
    });
  }, 1000);

  getEvents().then(events => this.setState({ events }));
  }

  // Button to trigger navigation change to display event form
  handleAddEvent = () => {
    this.props.navigation.navigate('form')
  }

  render(){
    return[
      <FlatList
      data={this.state.events}
      key="flatlist"
      style={styles.list}
      renderItem={({item}) => <EventCard event={item} /> }
      keyExtractor={item => item.title}
      />,
      <ActionButton
        key="fab"
        buttonColor="rgba(231,76,60,1)"
        onPress={this.handleAddEvent}
      />,
    ]
  }
}
