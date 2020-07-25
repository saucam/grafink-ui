import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Graph } from "react-d3-graph";

const welcome = { greeting: 'Hey', title: 'React',
};

// graph payload (with minimalist structure)
const data = {
  nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
  links: [
      { source: "Harry", target: "Sally" },
      { source: "Harry", target: "Alice" },
  ],
};

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
      color: "lightgreen",
      size: 120,
      highlightStrokeColor: "blue",
  },
  link: {
      highlightColor: "lightblue",
  },
};

function getTitle(title) {
  return title;
}

const list = [
  {
title: 'React',
url: 'https://reactjs.org/', author: 'Jordan Walke', num_comments: 3,
points: 4,
objectID: 0,
}, {
title: 'Redux',
url: 'https://redux.js.org/', author: 'Dan Abramov, Andrew Clark', num_comments: 2,
points: 5,
objectID: 1,
}, ];

function List() {
  return list.map(function(item) {
  return (
  <div key={item.objectID}>
  <span>
  <a href={item.url}>{item.title}</a>
  </span> <span>{item.author}</span> <span>{item.num_comments}</span> <span>{item.points}</span>
  </div> );
  });
}

function App() {
  return (
    <div>
      <h1>Hello {getTitle('React')}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <List />
      <Graph
    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
    data={data}
    config={myConfig}
    />;
    </div>
  );
}

export default App;
