import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import helper from "./helper/helper";

const options = ["rock", "paper", "scissors"];

//when user input is rock

test("Verify that when user input is 'rock' & computer input is 'paper' then result should be 'computer'", () => {
  expect(helper.runGame("rock", "paper")).toBe("computer");
});

test("Verify that when user input is 'rock' & computer input is 'scissors' then result should be 'user'", () => {
  expect(helper.runGame("rock", "scissors")).toBe("user");
});

test("Verify that when user input is 'rock' & computer input is 'rock' then result should be 'tie'", () => {
  expect(helper.runGame("rock", "rock")).toBe("tie");
});

//when user input is paper
test("Verify that when user input is 'paper' & computer input is 'paper' then result should be 'tie'", () => {
  expect(helper.runGame("paper", "paper")).toBe("tie");
});

test("Verify that when user input is 'paper' & computer input is 'scissors' then result should be 'computer'", () => {
  expect(helper.runGame("paper", "scissors")).toBe("computer");
});

test("Verify that when user input is 'paper' & computer input is 'rock' then result should be 'user'", () => {
  expect(helper.runGame("paper", "rock")).toBe("user");
});

//when user input is scissors
test("Verify that when user input is 'scissors' & computer input is 'paper' then result should be 'user'", () => {
  expect(helper.runGame("scissors", "paper")).toBe("user");
});

test("Verify that when user input is 'scissors' & computer input is 'scissors' then result should be 'tie'", () => {
  expect(helper.runGame("scissors", "scissors")).toBe("tie");
});

test("Verify that when user input is 'scissors' & computer input is 'rock' then result should be 'computer'", () => {
  expect(helper.runGame("scissors", "rock")).toBe("computer");
});
