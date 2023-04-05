/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { CommentCard } from "./components/CommentCard/CommentCard";
import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from './components/Header/Header';
import Console  from './components/Console/Console';
import { BotConsole }  from './components/BotConsole/BotConsole'
import { io } from "socket.io-client";
const socket = io("http://localhost:8001");

function App() {
  const [posts, setPosts ] = useState([])

  useEffect(() => {
    socket.on("stream", (item) => {
      setPosts((prev) => {
        if (!prev.find( (post) => post.id === item.id)) {
          console.log(item);
          return [item, ...prev];
        } else {
          return prev;
        }
      });
    });
  }, []);


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Console posts={posts} />} />
        <Route path="/com" element={<BotConsole />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
