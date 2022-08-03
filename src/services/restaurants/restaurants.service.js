import camelize from "camelize";
import { mocks } from "./mocks/index";
export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not Found");
    }
    resolve(mock);
  });
};
const transformResult = ({ results = [] }) => {
  const newResult = camelize(results.length);
  return newResult;
};
restaurantsRequest("37.7749295,-122.4194155")
  .then(transformResult)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.log(err);
  });
