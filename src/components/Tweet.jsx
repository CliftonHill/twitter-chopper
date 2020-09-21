import React, {useState} from "react";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Button from '@material-ui/core/Button';

export default function Tweet (props){
  function copy () {
    props.copyBtn(props.id);
  }

  return (
    <div className="tweet" id={"t" + props.id}>
      <span className="tweetText">{props.content}</span>
      <div className="char-count" ><span title="character count">{props.length}</span>
      <Button variant="outlined" id={"b" + props.id} onClick={copy} title="copy tweet"><FileCopyIcon fontSize="inherit" /></Button>
      </div>
    </div>
  );

}
