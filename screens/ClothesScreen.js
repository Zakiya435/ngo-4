import React, { Component,useState,useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import db from "../config.js";

export default class ClothesScreen extends Component{
  constructor(){
    super()
    this.state={
      name:""
    }
    this.requestRef = null;
  }

  separate = () => {  
    return (  
        <View style={{height: 1, width: "100%", backgroundColor: "#000"}}/>  
    );  
  };

  getName = async() =>{
    const [blogs,setblog] = useState([])
    const namee = db.collection('list')
    const data = await namee.get()
    data.docs.forEach(item=>{
      setblog([...blogs,item.data()])
    })
    useEffect(()=>{
      this.getName()
    })
    console.log(blogs)
     /*db.collection('list').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        this.setState({
          name:doc.data().name,
        });
    })
   })*/
  }

  render(){
    return(
      <View style={{flex:1, backgroundColor:'#d35454'}}>   
      <View>
        <TouchableOpacity 
        style={{backgroundColor:'#14519b',width:100,height:50,borderColor:'black',borderWidth:4,borderRadius:10}}
        onPress={()=>{this.getName()}} />
        </View>   

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