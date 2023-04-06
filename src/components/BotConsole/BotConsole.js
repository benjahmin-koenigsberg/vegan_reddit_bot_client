/** @format */

import React from "react";
import "../Console/Console.scss";
import "../CommentCard/CommentCard.scss";
import { BotComments } from "../BotComments/BotComments";
import { ScrollingTextComments } from "../ScrollingTextComments/ScrollingTextComments";
import "../ScrollingText/ScrollingText.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const BotConsole = ( ) => {

const [comments, setComments] = useState([]);

 useEffect(() => {
   axios
     .get("https://vegan-reddit-troll-client.vercel.app/com")
     .then((res) => {
       setComments(res.data);
       console.log(res.data);
     })
     .catch((err) => console.log(err));
 }, []);

  return (
    <>
    <ScrollingTextComments />
      <div className="console">
        {comments.map((comment) => {
          return <BotComments comment={comment} />;
        })}
      </div>
    </>
  );
};

export default BotConsole;
