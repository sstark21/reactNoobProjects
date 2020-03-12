import React from "react";
import BookList from "../book-list";

const HomePage = () => {
  const testBooks = [
    {
      id: 1,
      title: "Production-Ready Microservices",
      author: "Random Randomich"
    },
    {
      id: 2,
      title: "Relese It!",
      author: "Random Randomich"
    }
  ];
  return <BookList books={testBooks} />;
};

export default HomePage;
