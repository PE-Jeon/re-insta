import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Platform} from "react-native";
import { Icon } from 'native-base'
import { createBottomTabNavigator, createAppContainer} from "react-navigation"
import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

//import Icon from 'react-native-vector-icons/Ionicons';

class MainScreen extends Component{

    static navigationOptions = {

        headerLeft: <Icon name="md-camera"
            style={{ paddingLeft:10}}/>,
        title:"Instagram",
        headerRight: <Icon name="md-heart"
            style={{ paddingRight:10}}/>
    }

    render(){
        return (
            <AppTabContainer />
        );
    }
}


class MainScreen1 extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => {
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Details' })
                ],
              }))
            }}
          />
        </View>
      );
    }  
  }

export default MainScreen;

const AppTabNavigator = createBottomTabNavigator({

    HomeTab: {
        screen:HomeTab
    },
    SearchTab: {
        screen:SearchTab,      
    },
    AddMediaTab: {
            screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
},{
  animationEnabled:true,
  swipeEnabled:true,
  tabBarPosition:"bottom",
  tabBarOptions:{
    style:{
      ...Platform.select ({
        ios:{
          backgroundColor:'white',
        }
      })
    },
    iconStyle: {height:100},
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    upperCaseLabel:false,
    showLabel:false,
    showIcon:true
  }
})

const AppTabContainer = createAppContainer(AppTabNavigator);


const styles = StyleSheet.create({
    container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    }
});