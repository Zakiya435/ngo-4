import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';

export default class FoodScreen extends Component{

  separate = () => {  
    return (  
        <View style={{height: 1, width: "100%", backgroundColor: "#000"}}/>  
    );  
  };

  render(){
    return(
      <View style={{flex:1, backgroundColor:'#d35454'}}>
        <FlatList  
              data={[  
                  {key: 'NGO#1'},{key: 'NGO#2'}
              ]}  
              renderItem={({item}) =>  
                  <Text style={{padding: 10,fontSize: 18, height: 44}}>{item.key}</Text>}
              ItemSeparatorComponent={this.separate}  
          /> 
        <View style={{paddingTop:30}}> 
      <TouchableOpacity
      style={{backgroundColor:'#14519b',width:100,height:50,borderColor:'black',borderWidth:4,borderRadius:10}}
      onPress={()=>{this.props.navigation.navigate('ListScreen')}}
      >
        <Text style={{fontSize:25,fontWeight:"bold",alignSelf:'center'}}>Back</Text>
      </TouchableOpacity>
    </View>
      </View>
    )
  }
}