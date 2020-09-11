import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Tweet from "./Tweet";

export default function App (){
  return (<div>
    <Header />
    <CreateArea />
    <Tweet />
    <Footer />
  </div>);
}
