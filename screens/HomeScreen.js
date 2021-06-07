import React , {Component} from 'react';
import { StyleSheet, Text, View , SafeAreaView , Platform , StatusBar,TouchableOpacity,ImageBackground,Image} from 'react-native';

export default class HomeScreen extends Component
{
    render()
    {
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.anroid_Safe_Area}/>
                <ImageBackground
                style={styles.backgroundImage}
                source={require("../assets/bg_image.png")}
                >
                    <View style={styles.title_bar}>
                <Text style={styles.title_text}>
                ISS TRACKER APP
                </Text>
                </View>

                <TouchableOpacity style={styles.button_style} onPress={()=>{
                    this.props.navigation.navigate("ISSLocation")
                }}>
                    <Text style={styles.button_text}>
                        ISS LOCATION
                    </Text>
                    <Text style={styles.knowMore}>
                        {"know more-->"}
                    </Text>
                    <Text style={styles.bgDigit}>
                        1
                    </Text>
                    <Image
                    style={styles.iconImage}
                    source={require("../assets/iss_icon.png")}
                    />
                </TouchableOpacity>

                <TouchableOpacity  style={styles.button_style} onPress={()=>{
                    this.props.navigation.navigate("Metrioride")
                }}>
                    <Text style={styles.button_text}>
                        METEORS
                    </Text>
                    <Text style={styles.knowMore}>
                        {"know more-->"}
                    </Text>
                    <Text style={styles.bgDigit}>
                        2
                    </Text>
                    <Image
                    style={styles.iconImage}
                    source={require("../assets/meteor_icon.png")}
                    />
                </TouchableOpacity>

                <TouchableOpacity  style={styles.button_style}  onPress={()=>{
                    this.props.navigation.navigate("Update")
                }}>
                    <Text style={styles.button_text}>
                        UPDATES
                    </Text>
                </TouchableOpacity>
                <Text style={styles.knowMore}>
                        {"know more-->"}
                    </Text>
                    <Text style={styles.bgDigit}>
                        3
                    </Text>
                    <Image
                    style={styles.iconImage}
                    source={require("../assets/rocket_icon.png")}
                    />
                </ImageBackground>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    anroid_Safe_Area :{
        marginTop : Platform.OS === "android"?StatusBar.currentHeight:0
    },
    title_bar:{
        flex : 0.15,
        justifyContent:"center",
        alignItems:"center"
    },
    title_text:{
       fontSize:30,
       fontWeight:"bold",
       
       
    },
   button_text:{
       fontSize:20,
       fontWeight:"bold",
       color:"yellow",
       marginTop:75,
       paddingLeft:30
   },
   button_style:{
       flex:0.25,
       marginTop:50,
       marginRight:50,
       marginLeft:50,
       borderRadius:30,
       backgroundColor:"green"
   },
   knowMore: {
    paddingLeft: 30,
    color: "red",
    fontSize: 15
},
bgDigit: {
    position: "absolute",
    color: "rgba(183, 183, 183, 0.5)",
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1
},
iconImage: {
    position: "absolute",
    height: 200,
    width: 200,
    resizeMode: "contain",
    right: 20,
    top: -80
},
backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
},
})