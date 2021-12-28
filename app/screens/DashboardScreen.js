import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MovieListScreen from "./MovieListScreen";
import FavoriteListScreen from "./FavoriteListScreen";
import { LocalColors } from "../colors/Colors";
import {Image,} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import TopTenMovieScreen from "./TopTenMovieScreen";
import SearchCategoryScreen from "./SearchCategoryScreen";
const Tab = createMaterialBottomTabNavigator();

class DashboardScreen extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="MovieListStack"
        activeColor={LocalColors.storyBoardBlack}
        barStyle={{ backgroundColor: "white" }}
      >
        <Tab.Screen
          name="MovieListStack"
          component={MovieListScreen}
          options={{
            labeled: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Image
              style={{height:20,width:30, resizeMode: "contain"}}
                  source={require("../assets/clapboard_.png")}
                />
            ),
          }}
        />
        <Tab.Screen
          name="SearchCategoryStack"
          component={SearchCategoryScreen}
          options={{
            labeled: false,
            tabBarLabel: "Category",
            tabBarIcon: ({ color }) => (
              <Image
              style={{height:20,width:30, resizeMode: "contain"}}
                  source={require("../assets/genre.png")}
                />
            ),
          }}
        />
        <Tab.Screen
          name="TopTenMovieStack"
          component={TopTenMovieScreen}
          options={{
            labeled: false,
            tabBarLabel: "TopTen",
            tabBarIcon: ({ color }) => (
              <Image
              style={{height:25,width:30, resizeMode: "contain"}}
                  source={require("../assets/top_ten_.png")}
                />
            ),
          }}
        />
        <Tab.Screen
          name="FavoriteListStack"
          component={FavoriteListScreen}
          options={{
            labeled: false,
            tabBarLabel: "Favorite",
            tabBarIcon: ({ color }) => (
              <Image
              style={{height:20,width:30, resizeMode: "contain"}}
                  source={require("../assets/favorite.png")}
                />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default DashboardScreen;
