import React from "react";
import { Platform } from "react-native";

import {
  createBottomTabNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import DeckListDefaultView from "./DeckListDefaultView";
import NewDeckView from "./NewDeckView";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Octicons
} from "@expo/vector-icons";

export const AppNavigator =
  Platform.OS === "ios"
    ? createBottomTabNavigator(
        {
          Decks: DeckListDefaultView,
          "New Deck": NewDeckView
        },
        {
          defaultNavigationOptions: ({ navigation }) => ({
            initialRouteName: "Decks",
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              switch (routeName) {
                case "Decks":
                  return (
                    <MaterialCommunityIcons
                      name="cards"
                      size={30}
                      color={tintColor}
                    />
                  );
                case "New Deck":
                  return <Octicons name="plus" size={30} color={tintColor} />;
                default:
                  <FontAwesome name="ios-home" size={30} color={tintColor} />;
              }
            },
            tabBarOptions: {
              style: {},
              activeTintColor: "tomato",
              inactiveTintColor: "black"
            }
          })
        }
      )
    : createMaterialTopTabNavigator(
        {
          Decks: DeckListDefaultView,
          "New Deck": NewDeckView
        },
        {
          defaultNavigationOptions: ({ navigation }) => ({
            initialRouteName: "Decks",
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              switch (routeName) {
                case "Decks":
                  return (
                    <MaterialCommunityIcons
                      name="cards"
                      size={30}
                      color={tintColor}
                    />
                  );
                case "New Deck":
                  return <Octicons name="plus" size={30} color={tintColor} />;
                default:
                  <FontAwesome name="ios-home" size={30} color={tintColor} />;
              }
            },
            tabBarOptions: {
              style: { paddingTop: 20 },
              activeTintColor: "tomato",
              inactiveTintColor: "white"
            }
          })
        }
      );

export default createAppContainer(AppNavigator);
