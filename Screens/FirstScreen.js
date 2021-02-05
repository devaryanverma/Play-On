import React ,{ useState} from 'react';
import { FlatList, StyleSheet} from 'react-native';

import {DATA} from '../Screens/abcd';
import Grid from '../Components/Grid';


const FirstScreen = props =>{
      const Display = itemData=>{
        return(
              <Grid    
                image={itemData.item.sports.iconBlackUrl}
                sportName={itemData.item.sports.name}
                sportID={itemData.item.sports.id}
                id={itemData.item.id}    
                slotCost={itemData.item.costPerSlot}
                estb={itemData.item.establishment}
                name={itemData.item.name}
                daysOpen={itemData.item.dayOfWeeksOpen}
                openTime={itemData.item.openTime}
                closeTime={itemData.item.closeTime}
                createdOn={itemData.item.createOn}
                updatedOn={itemData.item.updatedOn}
                slotTime={itemData.item.slotTimeSize}
              />
        );
};

    const [index, setIndex]=useState(0);     
    
    return(
        <FlatList data= {DATA} renderItem = {Display}  keyExtractor = {item=>item.id}/> 
    ); 
};

FirstScreen.navigationOptions =()=>  {
    return{
      headerStyle: {
        backgroundColor: '#660033'
      },
      headerTintColor: 'white',
      headerTitle: 'List Detail'
    }};
    

const style= StyleSheet.create({
    text:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    design :{
        flexDirection: 'row'
    }
});

export default FirstScreen;