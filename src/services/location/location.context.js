import React, { useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();
export const LocationProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    console.log(searchKeyword);
    if (!searchKeyword.length) {
      return;
    }
    setIsLoading(true);
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.log(err);
      });
  };
  useEffect(() => {
    onSearch(keyword);
  }, [keyword]);

  const value = {
    keyword,
    setKeyword,
    location,
    onSearch,
    isLoading,
    error,
  };
  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
