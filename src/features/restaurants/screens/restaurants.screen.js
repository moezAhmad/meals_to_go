import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled, { useTheme } from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { ActivityIndicator } from "react-native-paper";
const Search = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs(({ theme }) => ({
  contentContainerStyle: {
    padding: parseInt(theme.sizes[1], 10), //10 is Base 10
  },
}))``;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const theme = useTheme();

  return (
    <SafeArea>
      <Search>
        <Searchbar placeholder="Search" />
      </Search>
      {isLoading && (
        <ActivityIndicator
          animating={true}
          color={theme.colors.brand.primary}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
