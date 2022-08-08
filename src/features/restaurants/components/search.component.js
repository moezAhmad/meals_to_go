import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import styledComponentsNative from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

export const SearchContainer = styledComponentsNative.View`
  padding: ${({ theme }) => theme.space[3]};
`;
export const Search = () => {
  const { keyword, setKeyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search"
        value={searchKeyword}
        onChangeText={(text) => setSearchKeyword(text)}
        onSubmitEditing={() => {
          setKeyword(searchKeyword);
        }}
      />
    </SearchContainer>
  );
};
