/** @format */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from './components/Header/Header';
import Console  from './components/Console/Console';
import { AboutConsole } from "./components/AboutConsole/AboutConsole";
import { BotConsole }  from './components/BotConsole/BotConsole'
import { io } from "socket.io-client";
import axios from "axios";
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
        <Route path="/comments" element={<BotConsole />} />
        <Route path="/about" element={< AboutConsole />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
