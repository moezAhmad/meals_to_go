import React from "react";
import { Image, View, Text } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star.js";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component.js";
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
  const RestaurantTitle = styled(Title)`
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  `;
  const Ratings = styled.View`
    flex-direction: row;
    padding-top: ${({ theme }) => theme.space[2]};
    padding-bottom: ${({ theme }) => theme.space[2]};
  `;
  const Section = styled.View`
    flex-direction: row;
    align-items: center;
  `;
  const SectionEnd = styled.View`
    flex: 1;
    z-index: 100;
    flex-direction: row-reverse;
  `;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <Card>
      <Card.Content>
        <Card.Cover source={{ uri: photos[0] }} />
        <RestaurantTitle>{name}</RestaurantTitle>
        <Section>
          <Ratings>
            {ratingArray.map((item, id) => (
              <SvgXml key={id} xml={star} width={20} height={20} />
            ))}
          </Ratings>
          <SectionEnd>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="right" size="large">
              <Image style={{ width: 20, height: 20 }} source={{ uri: icon }} />
            </Spacer>
            <Spacer position="right" size="large">
              {isClosedTemporarily && (
                <Text style={{ color: "red" }}>Closed Temporarily</Text>
              )}
            </Spacer>
          </SectionEnd>
        </Section>

        <Paragraph>{address}</Paragraph>
      </Card.Content>
    </Card>
  );
};
