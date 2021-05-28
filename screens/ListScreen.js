import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import MoneyScreen from './MoneyScreen'

export default class ListScreen extends Component{
  render(){
    return(
      <View style={{flex:1, backgroundColor:'#d35454',paddingLeft:700}}>
        <View style={{paddingTop:100}}>
        <TouchableOpacity
        style={{backgroundColor:'#14519b',width:200,height:100,borderColor:'black',borderWidth:4,borderRadius:10}}
        onPress={()=>{this.props.navigation.navigate('MoneyScreen')}}
        >
          <Text style={{fontSize:25,fontWeight:"bold",alignSelf:'center', paddingTop:30}}>Donate money</Text>
        </TouchableOpacity>
        </View>

        <View style={{paddingTop:100}}>
        <TouchableOpacity
        style={{backgroundColor:'#14519b',width:200,height:100,borderColor:'black',borderWidth:4,borderRadius:10}}
        onPress={()=>{this.props.navigation.navigate('FoodScreen')}}
        >
          <Text style={{fontSize:25,fontWeight:"bold",alignSelf:'center', paddingTop:30}}>Donate Food</Text>
        </TouchableOpacity>
        </View>

        <View style={{paddingTop:100}}>
        <TouchableOpacity
        style={{backgroundColor:'#14519b',width:200,height:100,borderColor:'black',borderWidth:4,borderRadius:10}}
        onPress={()=>{this.props.navigation.navigate('ClothesScreen')}}
        >
          <Text style={{fontSize:25,fontWeight:"bold",alignSelf:'center', paddingTop:30}}>Donate Clothes</Text>
        </TouchableOpacity>
        </View>
        <View style={{paddingTop:30}}> 
          <TouchableOpacity
          style={{backgroundColor:'#14519b',width:200,height:50,borderColor:'black',borderWidth:4,borderRadius:10}}
          onPress={()=>{this.props.navigation.navigate('WelcomeScreen')}}
          >
            <Text style={{fontSize:25,fontWeight:"bold",alignSelf:'center'}}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}