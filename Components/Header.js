import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props=>{
    return(
        <View styles= {style.Header}>
        <Text styles= {style.HeaderText}>List Detail</Text>
    </View>
    );
};

const style=StyleSheet.create({
    Header:{
        backgroundColor: '#660033' 
    },
    HeaderText:{
        fontSize: 20,
        fontWeight:'bold'
    }
});

 export default Header; 