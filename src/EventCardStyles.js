const React = require('react-native');
const { StyleSheet } = React;

export default{
card: {
  backgroundColor: '#fff',
  flex: 1,
  padding: 10,
  paddingTop: 10,
  paddingBottom: 20,
  margin: 10,
  marginTop: 5,
  marginBottom: 5,
},
cardHeader: {
  flex: 1,
  flexDirection: 'row',
},
date: {
  fontWeight: '200',
  fontSize: 15,
  color: '#bdbdbd',
  width: '30%',
  textAlign: 'right',
},
title: {
  fontSize: 15,
  fontWeight: '300',
  marginLeft: 7,
  textAlign: 'left',
},
counterContainer: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingLeft: '5%',
  paddingRight: '5%',
},
counter: {
  width: '25%',
  flex: 1,
},
counterText: {
  fontSize: 40,
  textAlign: 'center',
},
counterLabel: {
  fontSize: 13,
  fontWeight: '100',
  color: '#a3a3a3',
  textAlign: 'center',
  paddingTop: 0,
},
}
