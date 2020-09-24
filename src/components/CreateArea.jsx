import React from "react";
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import Zoom from '@material-ui/core/Zoom';

export default function CreateArea (props){

  return (
    <div>
      <div className="visibility"><Zoom in={props.reveal} ><Button onClick={props.clear}>Clear All</Button></Zoom></div>
      <form id="create-area">
      <textarea onClick={props.expand} onChange={props.event} name="input" value={props.content} type="text" rows={props.rows} placeholder="Type your 280+ character post here..." /><br/>
      <span className="char-count">{props.length} {props.estimate}</span> <Zoom in={props.length > 280 && "true"}><Fab onClick={props.action} disabled={props.buttonStat} title="Chop!"><CheckIcon style={{fontSize: "2rem"}}/></Fab></Zoom>
      </form>

    </div>
  );

}
