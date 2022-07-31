import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = ["https://robohash.org/asdasd", "https://robohash.org/asdasd"],
    address = "100 some Random strret",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <Card>
      <Card.Content>
        <Card.Cover source={{ uri: photos[0] }} />
        <Title>{name}</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
    </Card>
  );
};
