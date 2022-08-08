import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { LocationContext } from "../location/location.context";
import { restaurantsRequest, restaurantsTranform } from "./restaurants.service";

export const RestaurantsContext = createContext();
export const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const fetchRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTranform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      fetchRestaurants(`${location.lat},${location.lng}`);
    }
  }, [location]);
  const value = {
    restaurants,
    setRestaurants,
    isLoading,
    setIsLoading,
    error,
    setError,
  };
  return (
    <RestaurantsContext.Provider value={value}>
      {children}
    </RestaurantsContext.Provider>
  );
};
