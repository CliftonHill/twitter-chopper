import React, {useState} from "react";

export default function Tweet (props){

  return (
    <div className="tweet" id={"unique" + props.id}>
      <span className="tweetText">{props.content}<br />{props.tweetNum}/{props.totalTweets}</span>
      <br/>
      <span className="char-count">{props.length}</span>
    </div>
  );

}
