import React, { Component } from "react";
import Header from "./header/header";
import BooksFiltered from "./scenes/booksFiltered/index";
import AllBooks from "./scenes/allbooks/index";
import { Route, Routes } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <main className="main">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<BooksFiltered />} />
              <Route path="search" exact element={<AllBooks />} />
            </Routes>
          </div>
        </main>
      </>
    );
  }
}
