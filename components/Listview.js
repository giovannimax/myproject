import React from 'react';
import {Text,TouchableHighlight,View,StyleSheet,ListView} from 'react-native';

const exListView = (props)=>{
    
    return(
        <ListView style={styles.lv}
        dataSource={props.children}
        renderRow={(rowData,sectionID,rowID) => <View style={styles.item}><Text style={styles.datatext}>{rowData}</Text>
        <View style={styles.right}>
        <TouchableHighlight onPress={()=>this.deletedata(rowID)}>
        <Icon name="minus" style={styles.icon}/>
      </TouchableHighlight>
        </View></View>}
        enableEmptySections
      />
    )
}

const styles = StyleSheet.create({

    lv: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
      }

});

export { exListView };