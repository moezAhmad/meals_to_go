import React from "react";
import { StatusBar, View, SafeAreaView, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const Container = styled(View)`
  flex: 1;
  flex-direction: column;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const Search = styled(View)`
  padding: 20px;
`;
const List = styled(View)`
  flex: 1;
  padding: 20px;
`;
export const RestaurantsScreen = () => (
  <Container>
    <Search>
      <Searchbar placeholder="Search Field" />
    </Search>
    <List>
      <RestaurantInfoCard />
    </List>
  </Container>
);
