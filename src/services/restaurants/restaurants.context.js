import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { restaurantsRequest, restaurantsTranform } from "./restaurants.service";

export const RestaurantsContext = createContext({
  restaurants: [],
  setRestaurants: () => {},
});
export const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRestaurants = (location = "37.7749295,-122.4194155") => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(location)
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
    fetchRestaurants("37.7749295,-122.4194155");
  }, []);
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
