import { StatusBar } from 'expo-status-bar';
import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import ListScreen from './screens/ListScreen'
import MoneyScreen from './screens/MoneyScreen'
import ClothesScreen from './screens/ClothesScreen'
import FoodScreen from './screens/FoodScreen'
import {useState,useEffect } from 'react';

export default function App() {
  const [blogs,setblog] = useState([])
  const getName = async() =>{
    const namee = db.collection('list')
    const data = await namee.get()
    data.docs.forEach(item=>{
      setblog([...blogs,item.data()])
    })
    useEffect(()=>{
      getName()
    },[])
    console.log(blogs)
  }

  return (
    console.log(blogs&&blogs.map(blog=>{
        console.log(blog.name)
    })))
    
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  ListScreen:{screen: ListScreen},
  ClothesScreen:{screen:ClothesScreen},
  MoneyScreen:{screen:MoneyScreen},
  FoodScreen:{screen:FoodScreen}

})

const AppContainer =  createAppContainer(switchNavigator);