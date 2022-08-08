import React, { useContext } from "react";
import { useTheme } from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantList } from "./restaurants.style";
import { Search } from "../components/search.component.js";

export const RestaurantsScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const theme = useTheme();
  return (
    <SafeArea>
      <Search />
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
