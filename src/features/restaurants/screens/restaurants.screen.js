import React from "react";
import { StatusBar, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const Container = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const Search = styled(View)`
  padding: ${({ theme }) => theme.space[3]};
`;
const List = styled(View)`
  flex: 1;
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.secondary};
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
