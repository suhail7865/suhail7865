import React from "react";
import { Text, View, StyleSheet, ImageBackground, Image, Button, Alert, SafeAreaView, TouchableOpacity, ToolbarAndroid} from 'react-native';

const App = () =>{
  
  return (
    <View style={{flex : 1, justifyContent : "center"}}>
      <ImageBackground
      source={{uri : "https://media.istockphoto.com/photos/orange-gradient-color-with-texture-from-real-foam-sponge-paper-for-picture-id1143434145?k=20&m=1143434145&s=612x612&w=0&h=ay-Y2pJ9n_x58ladqSBm7CMHxiwg6yCTsctl1MVfHeM="}}
      style={ styles.image}>
        <Text style={styles.textLogin}>LOGIN</Text>
        <Text style={styles.smalltext}>Enter your registered mobile number and verify OTP to access your account.</Text>
     
      </ImageBackground>
        <Text style={styles.background}></Text>
        <Text style={styles.backgroundTextMobile}>Enter Mobile Number
        </Text>
        <Text style={styles.backgroundTextNumber}>+91 9835459345</Text>
      <TouchableOpacity>
        <Text style={styles.textButtonOtp}>
          Get OTP
        </Text>
      </TouchableOpacity>  
        <Text style={styles.underText}>- OR -</Text>
      <TouchableOpacity>
        <Text style={styles.textButtonFacebook}>
          Continue with facebook
        </Text>
      </TouchableOpacity> 
      <TouchableOpacity>
        <Text style={styles.textButtonGoogle}>
          Continue with Google
        </Text>
      </TouchableOpacity>
     
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  image: {
    flex : 1,
    width : 'auto',
    height : 200,
    backgroundColor : 'orange'
    
  },
  textLogin : {
    padding : 17,
    top : 35,
    color : '#fff',
    fontSize : 35,
    fontWeight : 'bold',
  },
  smalltext : {
    top : 10,
    padding : 17,
    color : '#fff',
    opacity : .8,
    fontWeight : 'bold',
  },
  background : {
    backgroundColor : '#fff',
    height : 80,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },

  backgroundTextMobile : {
    left : 18,
    bottom : 25
  },
  backgroundTextNumber : {
    left : 27,
    bottom : 20,
    opacity : .6
  },
  textButtonOtp : {
    borderColor : 'orange',
    borderWidth : 3,
    padding : 11,
    margin : 15,
    bottom : 10,
    textAlign : "center",
    fontWeight : 'bold',
    fontSize : 20,
    borderRadius : 60,
    color : 'orange'
  },
  textButtonFacebook : {
    padding : 11,
    margin : 15,
    bottom : 10,
    textAlign : "center",
    backgroundColor : '#3b5998',
    fontSize : 20,
    borderRadius : 60,
    color : 'white'
  },
  underText : {
    textAlign : "center",
    bottom : 10,
    fontWeight : 'bold',
  },
  textButtonGoogle :{
    padding : 11,
    margin : 15,
    bottom : 20,
    textAlign : "center",
    backgroundColor : '#EA4335',
    fontSize : 20,
    borderRadius : 60,
    color : 'white'
  },
  
  
 
})


