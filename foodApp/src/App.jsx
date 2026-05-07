import { useState } from "react";
import Search from "../components/Search";
import FoodList from "../components/FoodList";
import Nav from "../components/Nav";
import "./App.css";
import Container from "../components/Container";
import InnerContainer from "../components/InnerContainer";
import FoodDetails from "../components/FoodDetails";
import FoodItem from "../components/FoodItem";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("647124");
  return (
    <div className="App">
      <Nav></Nav>
      <Search
        foodData={foodData}
        setFoodData={setFoodData}
        key={foodData}
      ></Search>
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId}></FoodList>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}></FoodDetails>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
