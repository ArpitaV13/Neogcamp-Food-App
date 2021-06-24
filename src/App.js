import React, { useLayoutEffect, useState } from "react";
import "./styles.css";

var image = "🍔";

var Indian = [
  "Paneer-do-Pyaza",
  "Pav Bhaji",
  "Dum-Aloo Lakhwani",
  "Choley-Bhature"
];

var Chinese = [
  "Dim Sums",
  "Sping Rolls",
  "Singaporian Noodles",
  "Szechwan Chilli Noodles"
];
var Italian = ["Pasta", "Gelato", "Lasgna", "Pizza"];

export default function App() {
  var [meaning, setMeaning] = useState(" ");

  function indianClickHandler() {
    var meaning = Indian.map((item) => {
      return (
        <ul>
          <li> {item}</li>
        </ul>
      );
    });
    setMeaning(meaning);
  }

  function chineseClickHandler() {
    var meaning = Chinese.map((item) => {
      return (
        <ul>
          <li> {item}</li>
        </ul>
      );
    });
    setMeaning(meaning);
  }
  function italianClickHandler() {
    var meaning = Italian.map((item) => {
      return (
        <ul>
          <li style={{ maxWidth: "70%" }}>{item}</li>
        </ul>
      );
    });
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> {image} Food Mania</h1>
      <p>
        Are you a foodie? Check out my recommendtaions on Food. Select your
        favourite cuisine and get started.{" "}
      </p>
      <button onClick={indianClickHandler}>Indian</button>
      <button onClick={chineseClickHandler}>Chinese</button>
      <button onClick={italianClickHandler}>Italian</button>
      <hr></hr>
      <div>{meaning}</div>
    </div>
  );
}
