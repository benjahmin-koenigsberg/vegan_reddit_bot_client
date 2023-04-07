/** @format */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import Console from "./components/Console/Console";
import { AboutConsole } from "./components/AboutConsole/AboutConsole";
import BotConsole from "./components/BotConsole/BotConsole";
// import { io } from "socket.io-client";
import axios from "axios";
import { subs } from './assets/subs.js'
// const socket = io(process.env.REACT_APP_SERVER);

function App() {

  const [ posts, setPosts] = useState([...subs]);

  console.log(posts)
  //  axios
  //    .get("https://vegan-reddit-troll-server.vercel.app/")
  //    .then( (res) => {
  //     console.log(res.data)
  //      setPosts( [...res.data] );
  //    }).catch(err => console.log(err))

  // useEffect(() => {
  //   socket.on("stream", (item) => {
  //     setPosts((prev) => {
  //       if (!prev.find((post) => post.id === item.id)) {
  //         console.log(item);
  //         return [item, ...prev];
  //       } else {
  //         return prev;
  //       }
  //     });
  //   });
  // }, []);

  return (
    <BrowserRouter>
      <Header  setPosts={setPosts} posts={posts} />
      <Routes>
        <Route path="/" element={<Console posts={posts} />} />
        <Route path="/comments" element={<BotConsole />} />
        <Route path="/about" element={<AboutConsole />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
