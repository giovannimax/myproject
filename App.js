/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import Icon from 'react-native-vector-icons/FontAwesome';
import { exListView } from './components/Listview';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,ListView,
  Text,
  View,
  Button,
  TextInput,
  AlertIOS,
  TouchableHighlight
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  constructor() {
    super();
    var todo;
    var dataa= new Array(2,2);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
     dataSource: ds.cloneWithRows(dataa),todo: ""
    };
  }

  submitdata(){  
    //this.state.dataa.push(this.state.todo);
    if(this.state.todo!=""&&this.state.todo!=null){
    let newArray = this.state.dataSource._dataBlob.s1.slice();
    newArray.push(this.state.todo);
     
     this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newArray),
      todo: ""
     });


   }else{
   AlertIOS.alert(
 'TextBox is empty',
 'Please input some data on the TextBox'
);
 }

  }
  

  deletedata(index){
    let newArray = this.state.dataSource._dataBlob.s1.slice();
    newArray.splice(index,1);
     
     this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newArray),
      todo: ""
     });
  }

  render() {
    return (
    <View style={styles.bgcolor}>
        <Text style={styles.header}>
          TODOs
        </Text>
        <View style={styles.hr}></View>
      <exListView>{this.state.dataSource}</exListView>
      <View style={styles.inputarea}>
      <TextInput style={styles.textbox} multiline = {true}
         numberOfLines = {4} ref= "username" 
        returnKeyLabel = {"next"} 
        onChangeText={(text) => this.setState({todo: text})}
        value= {this.state.todo}
         >
      </TextInput>
      <TouchableHighlight onPress={() =>this.submitdata()}>
      <View>
      <Icon name="plus" style={styles.icon}/>
      <Text style={styles.grey}>add</Text>
      </View>
      </TouchableHighlight>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lv: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  datatext: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 25,
  },
  bgcolor:{
    backgroundColor: '#eccfcf',
    padding: 30,
    flex: 1
  },
  header:{
    paddingTop: 5,
    paddingBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#9b9a9b',
    fontSize: 25
  },
  textbox: {
    position: 'relative',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius:8,
    backgroundColor: 'white',
    height: 80,
    width:260,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 25
  },
  inputarea:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addbutton:{
    position: 'absolute',
    bottom: 0
  },
  item: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 10,
    flexDirection: 'row'
  },
  hr:{
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  right:{
   position: 'absolute',
   right: 0
  },
  buttonfnt:{
    fontSize: 105
  },
  icon:{
    fontSize: 30,
    marginTop: 10,
    color: 'grey'
  },
  grey: {
    color: 'grey',
    fontSize: 20
  }
  /*welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,dqwd
  },dqwdqw
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },*/
});
