import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Graph } from "react-d3-graph";
import Search from './Search.js'
import DBBar from './DBBar.js'
import GraphData from './GraphData'

const welcome = { greeting: 'Hey', title: 'React',
};

const initialAddress = {
  host: "localhost",
  port: 8182
}

function getTitle(title) {
  return title;
}

const List = ({ list }) =>
list.map(item => <Item key={item.objectID} item={item} />);

const Item = ({ item }) => ( <div>
  <span>
  <a href={item.url}>{item.title}</a>
  </span> <span>{item.author}</span> <span>{item.num_comments}</span> <span>{item.points}</span>
  </div> );
  
function App() {
  const stories = [
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

const [searchTerm, setSearchTerm] = React.useState('React');
const [address, setAddress] = React.useState(initialAddress);
const [graphInfo, setGraphInfo] = React.useState();

const searchedStories = stories.filter(story => story.title.includes(searchTerm));

// A
const handleSearch = event => {
  // C
  console.log(event.target.value);
  setSearchTerm(event.target.value);

};

const handleAddressChange = event => {
  const v = event.target.value;
  setAddress({...address, [event.target.name]: v});
};

const handleGraphInfo = event => {
  setGraphInfo();
}

  return (
    <>
      <h1>{getTitle('Grafink')}</h1>
      <Search onSearch={handleSearch} searchTerm={searchTerm} />
      <List list={searchedStories} />
      <GraphData />
    <div className="footer">
    <div className="container">
      <DBBar onAddressChange={handleAddressChange} getGraphInfo={handleGraphInfo} address={address} />
    </div>
  </div>
    </>
    
  );
}

export default App;
