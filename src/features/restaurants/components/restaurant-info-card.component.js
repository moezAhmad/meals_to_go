import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star.js";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component.js";
import { Text } from "../../../components/typography/text.component.js";
import {
  Icon,
  Ratings,
  RestaurantCard,
  Section,
  SectionEnd,
} from "./restaurant-info-card.styles.js";
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://robohash.org/asdasd", "https://robohash.org/asdasd"],
    address = "100 some Random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  console.log(restaurant);
  return (
    <RestaurantCard elevation={5}>
      <Card.Content>
        <Card.Cover source={{ uri: photos[0] }} />
        <Spacer position="top" size="large">
          <Text variant="label">{name}</Text>
        </Spacer>
        <Section>
          <Ratings>
            {ratingArray.map((item, id) => (
              <SvgXml key={id} xml={star} width={20} height={20} />
            ))}
          </Ratings>
          <SectionEnd>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="right" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
            <Spacer position="right" size="large">
              {isClosedTemporarily && (
                <Text variant="error">Closed Temporarily</Text>
              )}
            </Spacer>
          </SectionEnd>
        </Section>
        <Text>{address}</Text>
      </Card.Content>
    </RestaurantCard>
  );
};
