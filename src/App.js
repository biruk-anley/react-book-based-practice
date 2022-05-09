import * as React from "react";

import "./App.css";

const App = () => {
  const stories = [
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
  const [searchTerm, setSearchTerm] = React.useState("redux");
 
  //  A
  const handleSearch = (event) => {
     setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) => {
    return (story.title.toLowerCase().includes(searchTerm.toLowerCase()))
  });

  return (
    <div className="holder">
      <h1>Practising on List using map function</h1>
      {/* //B  handle search emibal function alen.. on search ... handle searchin pass yadergal... */}
      <Search Search={searchTerm} onSearch={handleSearch} />

      <hr />
      <List listname={searchedStories} />
    </div>
  );
};

const Search = ({Search, onSearch}) => {
  

  return (
    <div className="search">
      <label htmlFor="search">Name</label>
      <input type="text" id="search" value={Search} onChange={onSearch} />
     
    </div>
  );
};

const List = ({listname}) => {
  return (
    <ul>
      {listname.map((item) => {
        return (
          <div className="body">
            <Item key={item.objectID} item={item} />
          </div>
        );
      })}
    </ul>
  );
};

const Item = ({item}) => {
  return (
    <li>
      <h4>{item.title}</h4>
      <p>
        author: {item.author} comments :<span>{item.points}</span>
      </p>
      <p>
        tutorial link : <a href={item.Url}>{item.Url}</a>
      </p>
      <hr />
    </li>
  );
};

export default App;
