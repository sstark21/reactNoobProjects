import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import Row from "../row";

import "./app.css";
import ItemList from "../item-list/item-list";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const {
      getPerson,
      getStarship,
      getPersonImg,
      getStarshipsImg
    } = this.swapiService;

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const personalDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImg}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
        <Record field="birthYear" label="Birth Year" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={9}
        getData={getStarship}
        getImageUrl={getStarshipsImg}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );
    return (
      <div className="stardb-app">
        <Header />
        <Row left={personalDetails} right={starshipDetails} />
      </div>
    );
  }
}

/*
//buttons
        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>
 */
