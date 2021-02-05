import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  Dimensions,
  TouchableNativeFeedback
} from 'react-native';

const Grid= props => {
    
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  const a=props.image;
  return (
    
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }}>
        <View style={styles.container}>
            <Image source={{uri: a}} style= {{height: 100, width: 100}}/>
            <View style={styles.design}>
                <Text style={styles.title}>ID </Text>
                <Text style={styles.title2}>{props.id}</Text>
            </View>
            <View style={styles.design}>
                <Text style={styles.title}>Sports ID </Text>
                <Text style={styles.title2} >{props.sportID}</Text>
            </View> 
            <View style={styles.design}>
                <Text style={styles.title}>Sports Name </Text>
                <Text style={styles.title2} >{props.sportName}</Text>
            </View>
            <View style={styles.design}>
                <Text style={styles.title}>Name</Text>
                <Text style={styles.title2} >{props.name}</Text>
            </View>
            <View style={styles.design}>
                <Text style={styles.title}>Opening Time</Text>
                <Text style={styles.title2} >{props.openTime}</Text>
            </View>
            <View style={styles.design}>
                <Text style={styles.title}>Closing Time </Text>
                <Text style={styles.title2} >{props.closeTime}</Text>
            </View>
            <View style={styles.design}>
                <Text style={styles.title}>Days Open </Text>
                <Text style={styles.title2} >{props.daysOpen}</Text>
            </View>
            <View style={styles.design}>
                <Text style={styles.title}>Cost per Slot </Text>
                <Text style={styles.title2} >{props.slotCost}</Text>
            </View>
            <View style={styles.design}>
                <Text style={styles.title}>Slot Time Size </Text>
                <Text style={styles.title2} >{props.slotTime}</Text>
            </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 420,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5
  },
  title2:{
      fontSize: 18
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    backgroundColor: '#FAFAD2',
    
  },
  design:{
      flexDirection: 'row',
      paddingTop: 3,
      paddingBottom: 3,
      justifyContent: 'space-between'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default Grid;
