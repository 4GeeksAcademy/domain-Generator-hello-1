/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adjective = ["Great", "big"];
  let noun = ["Jogger", "raccon"];
  let rul = [".com", ".net", ".dev"];

  console.log("Regular for loop:");

  for (let pronounIndex = 0; pronounIndex < pronoun.length; ++pronounIndex) {
    for (let adjIndex = 0; adjIndex < adjective.length; ++adjIndex) {
      for (let nounIndex = 0; nounIndex < noun.length; ++nounIndex) {
        for (let rulIndex = 0; rulIndex < rul.length; ++rulIndex) {
          console.log(
            `${pronoun[pronounIndex]}${adjective[adjIndex]}${noun[nounIndex]}${rul[rulIndex]}`
          );
        }
      }
    }
  }

  let domainGen = document.querySelector(".domain-gen");

  for (let pronounIndex = 0; pronounIndex < pronoun.length; ++pronounIndex) {
    for (let adjIndex = 0; adjIndex < adjective.length; ++adjIndex) {
      for (let nounIndex = 0; nounIndex < noun.length; ++nounIndex) {
        for (let rulIndex = 0; rulIndex < rul.length; ++rulIndex) {
          let domainName = `${pronoun[pronounIndex]}${adjective[adjIndex]}${noun[nounIndex]}${rul[rulIndex]}`;
          console.log(domainName);
        }
      }
    }
  }
};
