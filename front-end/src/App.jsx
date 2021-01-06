import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from "axios";
//---------------Own components-----------------------------
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/Home/HomePage';
import BasketPage from './components/Basket/BasketPage';
import ProductPage from './components/Products/ProductPage';
//---------------Own components-----------------------------



const App = () => {
  /* variables */
  const student = {
    naam: "Frederic Lammens",
    studNr: "863503fl"
  }
  const technologiën = [{ id: 1, name: "Node.js (EXPRESS server)" }, { id: 2, name: "MySQL Databank" }, { id: 3, name: "React" }, { id: 4, name: "React Router" }, { id: 5, name: "React Hooks" }, { id: 6, name: "Redux" }, { id: 7, name: "React Bootstrap" }, { id: 8, name: "React Formik" }];

  const [movies, setMovies] = useState(null);
  //bij inladen website fetchmovies starten
  useEffect(() => {
    fetchMovies();
  }, [])

  const fetchMovies = async () => {
    await axios.get("http://localhost:3000/movies")
      .then((response) => setMovies(response.data));
  }
  //---------------------------------------------------------------
  // && = check of niet null
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/basket">
            <BasketPage/>
          </Route>
          <Route path="/products">
            {movies && <ProductPage movies = {movies}/>}
          </Route>
          <Route path="/">
          <HomePage items={technologiën} />
          </Route>
        </Switch>
        <Footer naam={student.naam} studentNr={student.studNr} />
      </div>
    </Router>
  );
}

export default App;
