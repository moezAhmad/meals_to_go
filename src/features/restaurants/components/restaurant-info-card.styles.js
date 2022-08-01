import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  margin-bottom: ${({ theme }) => theme.space[3]};
`;
export const Ratings = styled.View`
  flex-direction: row;
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled.View`
  flex: 1;
  z-index: 100;
  flex-direction: row-reverse;
  align-items: center;
`;
export const Icon = styled.Image`
  height: 20px;
  width: 20px;
`;
