import { FlatList } from "react-native";
import styled from "styled-components/native";

export const RestaurantList = styled(FlatList).attrs(({ theme }) => ({
  contentContainerStyle: {
    padding: parseInt(theme.sizes[1], 10), //10 is Base 10
  },
}))``;
