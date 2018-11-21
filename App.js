import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';


import Time from './component/test/Time.js'
import ToastExample from './component/test/Ant_react.js'
import FeedBack from './component/test/FeedBack.js'
import List from './component/test/List.js'
import TakePhoto from './component/test/TakePhoto.js'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      {/* <Time></Time>
      <ToastExample></ToastExample> 
      <FeedBack></FeedBack>
      <List></List>*/}
      <TakePhoto></TakePhoto>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
