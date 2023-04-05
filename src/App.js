/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CommentCard } from "./components/CommentCard/CommentCard";
import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";
// import { Header } from './components/Header/Header';
// import Console from './components/Console/Console';
import { io } from "socket.io-client";
const socket = io("http://localhost:8001");

function App() {
  const [comments, setComments] = useState([]);

  // axios
  //   .get("http://localhost:8001")
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => console.log(err));

  useEffect(() => {
    socket.on("stream", (item) => {
      setComments((prev) => {
        if (!prev.find((comment) => comment.id === item.id)) {
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
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              {comments.map((comment) => {
                return <CommentCard comment={comment} />;
              })}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
