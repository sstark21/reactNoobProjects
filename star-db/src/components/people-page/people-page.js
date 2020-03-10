import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import Row from "../row";

import "./people-page.css";
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItems={item => item.name}
      />
    );

    const personDetails = <ItemDetails itemId={this.state.selectedPerson} />;

    return <Row left={itemList} rigth={personDetails} />;
  }
}
