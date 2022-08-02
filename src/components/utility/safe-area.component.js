import { StatusBar } from "react-native";
import styledComponentsNative from "styled-components/native";

export const SafeArea = styledComponentsNative.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
