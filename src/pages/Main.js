import React from "react";
import Table from "../components/Table.js";

const Main = () => {
  return (
    <>
      <p>메인페이지</p>
      <Table data={data} header={header} />
    </>
  );
};

export default Main;

const header = [
  { name: "인덱스", sort: "id" },
  { name: "타입", sort: "type" },
  { name: "이름", sort: "name" },
  { name: "내용", sort: "content" },
];

const data = [
  {
    type: "Sandwitch",
    id: 34324153,
    name: "김지은",
    flavor: {
      color: "spicy",
      price: 64,
    },
    paper: {
      color: "pink",
      price: 58,
    },
  },
  {
    type: "Cherry",
    id: 34324154,
    name: "나민우",
    fruit: {
      color: "pupple",
      price: 65,
    },
    leaf: {
      color: "pupple",
      price: 4,
    },
  },
  {
    type: "Apple",
    id: 34324155,
    name: "조동현",
    fruit: {
      color: "yellow",
      price: 47,
    },
    leaf: {
      color: "green",
      price: 96,
    },
  },
  {
    type: "Orange",
    id: 34324156,
    name: "선아리",
    fruit: {
      color: "blue",
      price: 38,
    },
    leaf: {
      color: "grey",
      price: 75,
    },
  },
  {
    type: "Cacao",
    id: 34324157,
    name: "최우현",
    fruit: {
      color: "green",
      price: 32,
    },
    leaf: {
      color: "white",
      price: 65,
    },
  },
  {
    type: "Gyul",
    id: 34324158,
    name: "김솔이",
    fruit: {
      color: "white",
      price: 9,
    },
  },
  {
    type: "Melon",
    id: 34324159,
    name: "박시은",
    fruit: {
      color: "pupple",
      price: 54,
    },
    leaf: {
      color: "yellow",
      price: 20,
    },
  },
  {
    type: "Bluberry",
    id: 34324160,
    name: "박나예",
    fruit: {
      color: "white",
      price: 9,
    },
    branch: {
      color: "white",
      price: 9,
    },
  },
  {
    type: "Banana",
    id: 34324161,
    name: "서예림",
    fruit: {
      color: "pupple",
      price: 54,
    },
    branch: {
      color: "yellow",
      price: 20,
    },
  },
];
