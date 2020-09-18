import React from "react";

export default function CreateArea (props){
  return (
    <div id="create-area">
      <span className="visibility" onClick={props.clear}>Clear All</span>
      <form >
      <textarea onClick={props.expand} onChange={props.event} name="input" value={props.content} type="text" rows={props.rows} placeholder="Type your 280+ character post here..." /><br/>
      <span className="char-count">{props.length}</span> <button type="button" onClick={props.action} disabled={props.buttonStat}>Chop</button>
      </form>

    </div>
  );

}
