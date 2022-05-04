import * as React from "react";
import "./App.css";


const lists = [
  {
    title: "React",
    Url: "https://reactjs.org",
    author: "Jordan Michel",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    Url: "https://reactreduxjs.org",
    author: "Dab Abramov",
    num_comments: 8,
    points: 5,
    objectID: 1,
  },
  {
    title: "Rollex",
    Url: "https://rollexjs.org",
    author: "David Michel",
    num_comments: 13,
    points: 40,
    objectID: 2,
  },
  {
    title: "Flutter",
    Url: "https://Flutterctjs.org",
    author: "Jordan domMichel",
    num_comments: 3,
    points: 4,
    objectID: 3,
  },
  {
    title: "Python",
    Url: "https://pythonjs.org",
    author: "Michel peterson",
    num_comments: 3,
    points: 7,
    objectID: 4,
  },
];

const List = () => {
  return (
    <ul>
      {lists.map((item) => {
        return (
          <div className="body">
            <li key={item.objectID}>
              <h4>{item.title}</h4>
              <p>
                author: {item.author} comments :<span>{item.points}</span>
              </p>
              <p>
                tutorial link : <a href={item.Url}>{item.Url}</a>
              </p>
              <hr />
            </li>
          </div>
        );
      })}
    </ul>
  );
};

const Search = () => {
  return (
    <div className="search">
      <label htmlFor="search">Name</label>
      <input type="text" id="search" />
    </div>
  );
}

const App = () => {
  
  return (
    <div className="holder">
      <h1>Practising on lists using map function</h1>
      <Search/>
      <hr />
      <List/>

      
    </div>
  );
};

export default App;
