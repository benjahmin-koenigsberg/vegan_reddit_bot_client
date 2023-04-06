/** @format */

import React from "react";
import "../Console/Console.scss";
import "../CommentCard/CommentCard.scss";
import { BotComments } from "../BotComments/BotComments";
import ScrollingTextComments from "../ScrollingText/ScrollingText";
import "../ScrollingText/ScrollingText.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const BotConsole = ( ) => {


const [comments, setComments] = useState([]);

 useEffect(() => {
   axios
     .get("http://localhost:8001/com")
     .then((res) => {
       setComments( res.data );
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

export {BotConsole};
