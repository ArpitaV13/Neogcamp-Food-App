import React, { useLayoutEffect, useState } from "react";
import "./styles.css";

var image = "🍔";

var Indian = [
  "Paneer-do-Pyaza:Paneer do pyaza is a restaurant style paneer recipe with delicious, aromatic gravy that has mild hints of sweet and slightly tangy taste. Rating: ⭐⭐⭐⭐",
  "Pav Bhaji: Pav bhaji is an Indian fast food consisting of a spicy vegetable gravy served with soft bread. Rating: ⭐⭐⭐",
  "Dum-Aloo Lakhwani: About Dum Aloo Lakhnavi Recipe: Fried potatoes stuffed with paneer, dizzled in a rich, spiced and tangy onion and tomato gravy. Rating: ⭐⭐⭐⭐",
  "Choley-Bhature: Chole bhature is a combination of chana masala (spicy white chickpeas) and bhatura/puri, a fried bread made from maida. Rating: ⭐⭐⭐⭐⭐"
];

var Chinese = [
  "Dim Sums :Dim sums are a large range of small Chinese dishes that are traditionally enjoyed in restaurants for breakfast and lunch. Rating:⭐⭐⭐ ",
  "Sping Rolls: A blend of fresh cabbage, carrots, and onions with a hint of seasoning, wrapped in a deliciously flaky and crispy spring wrap. Rating: ⭐⭐⭐⭐⭐",
  "Singaporian Noodles: The Singapore Noodles are bursting with sweet-savory curry powder, aromatic garlic, ginger and onions along with a tantalizing sauce of chicken broth, soy sauce, oyster sauce, fish sauce, sesame oil, etc. Rating: ⭐⭐⭐⭐",
  "Szechwan Chilli Noodles:  Schezwan noodles is an immensely popular Indo chinese dish served in Indian Chinese restaurants. These are the most flavorful, spicy & hot. Rating: ⭐⭐⭐"
];
var Italian = [
  "Pasta:Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes. Rating: ⭐⭐⭐⭐⭐",
  "Gelato: Gelato is a frozen dessert of Italian origin. It is made with a base of 3.25% butterfat whole milk and sugar. It is generally lower in fat than other styles. Rating: ⭐⭐⭐",
  "Lasagna: Lasagne, or the singular lasagna, is an Italian dish made of stacked layers of thin flat pasta alternating with fillings such as ragù. Rating: ⭐⭐⭐⭐",
  "Pizza: Pizza is a large circle of flat bread baked with cheese, tomatoes, and sometimes meat and vegetables. Rating: ⭐⭐⭐⭐⭐"
];

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
        Are you a foodie? Check out my recommendations on food. Select your
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
