import React from "react";
import ItemList from "../item-list";
import { withData } from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const withChildFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;

const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople
);
const StarshipList = withData(
  withChildFunction(ItemList, renderName),
  getAllStarships
);
const PlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets
);

export { PersonList, StarshipList, PlanetList };
