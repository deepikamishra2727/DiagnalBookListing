import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const LandingScreen = (props) => {

  return (
    <View style={{
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: "center"
    }} >
      <TouchableOpacity onPress={() => { props.navigation.navigate("BookListing") }}>
        <Text style={{ color: 'black', textAlign: "center", fontFamily: 'TitilliumWeb-Regular' }}>Welcome to the app. Click here to goto listing screen.</Text>
      </TouchableOpacity>

    </View>

  );
}