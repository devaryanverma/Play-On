import React, {Component, component} from 'react';
import { View,StyleSheet} from 'react-native';

import LottieView from "lottie-react-native";

const LoginScreen = props=>{
        return(
        <View style={{ flex: 1 }}>
        <LottieView
            source= {require('../assets/Splash.json')}
            autoPlay
            loop = {false}
            speed = {1} 
            onAnimationFinish={()=>{ 
                props.navigation.replace('sec');
            }}
        />
        </View>
        );
    }

export default LoginScreen;