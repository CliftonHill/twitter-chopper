import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Tweet from "./Tweet";

export default function App (){
  const [post, setPost] = useState({
    text: "",
    chars: ""
  });
  const [chops, setChops] = useState([]);
  const [rows, setRows] = useState("1");
  const [buttonStat, setButtonStat] = useState(true);

  function handleChange (event) {
    const postLength = event.target.value.length;
    setPost({
      text: event.target.value,
      chars: postLength
    });

    if (postLength > 280) {
      setButtonStat(false);
    } else {
      setButtonStat(true);
    }

    if (postLength > 5720) { // allows for about 20 tweets
      setButtonStat(true);
      // deliver message to user that Twitter just won't be able to appreciate their loquacious nature.
    }
  }

  function styleTweets (){ // can't figure out how to take chops hook and amend it

    function addEndEllipsis(index, totalLength) {
      //at end of first OR rest up to 2nd to last
      if (index === 0 || index + 1 < totalLength) {
        return "…";
      } else {
        return "";
      }
    }

    function addFrontEllipsis(index) {
      // at beginning
      if (index > 0) {
        return "…";
      } else {
        return "";
      }
    }

    //add ellipses
    setChops(prevValue => {
      return prevValue.map((chop, index) => {
        return {...chop, text: addFrontEllipsis(index) + chop.text + addEndEllipsis(index, prevValue.length)};

     });
    });

    //correct character count
    setChops(prevValue => {
      return prevValue.map(chop => {
        return {...chop, chars: chop.text.length}
      } );
    })


  }

  function handleClick () {
    // capture content of post, evaluate how many characters to split it into, then setChops for each segment wit ha fore loop 280, save 5 characters for tweet of tweet + 1 return + 2 elipsis for 9 characters.
      // if first brea kpoint is a " ", then set all characters prior to setChops value, and reflect char count of 271
        // else need to iterate backwards until a space is found, note the index value, cut to that kpoint
    //reset
    if (chops.length > 0) {
      setChops([]);
    }

    //set button visibility for a clear all button at top.
    document.querySelector(".visibility").style.visibility = "visible";
    //onto focus of handleClick
    let priorBreakPoint = 0;

    for (let i = 0; (post.text.length - i) > 271; i = priorBreakPoint) {
      let breakPoint = i + 271;
      //continues until last chunk of chars is < 271 char, which means it won't capture the last chunk, which we'll have to capture
      if (post.text[breakPoint] === " "){
        console.log("1st");
        let currSegment = post.text.slice(i, breakPoint).trim();
        setChops(prevValue => [...prevValue, {
        text: currSegment
      }]);

    } else { //loop backwards until a space is found and break the post there. Then updated breakpoint
        console.log("else");
          for (let j = breakPoint; post.text[j] !== " "; j--) {
            if (post.text[j-1] === " ") {
              breakPoint = j - 1;
              let currSegment = post.text.slice(priorBreakPoint, breakPoint).trim();
              setChops(prevValue => [...prevValue, {
                text: currSegment
              }]);


            }

          }

        }
        priorBreakPoint = breakPoint;
      }
      // should have captured all but last chunk of post, capture the last piece here, slice to end
      let isNextChopTheLast = priorBreakPoint + 271 > post.text.length;
      if (isNextChopTheLast) {
        console.log("made it");
          let currSegment = post.text.slice(priorBreakPoint).trim();
          setChops(prevValue => [...prevValue, {
          text: currSegment
        }]);
      }

      document.querySelector("#create-area textarea").style.color = "gray";

    styleTweets();
    } // end handleClick()

function expand () {
  setRows(5);
}

function handleClickClear () {
  console.log("clear all");
  setChops([]);
  setPost({
    text: "",
    chars: ""
  });
}


  return (<div>
    <Header />
    <main>
    <CreateArea expand={expand} rows={rows} clear={handleClickClear} event={handleChange} content={post.text} length={post.chars} action={handleClick} buttonStat={buttonStat} />
    {chops.map((chop, index) => <Tweet key={index} id={index}  content={chop.text} length={chop.chars} tweetNum={index + 1} totalTweets={chops.length} /> )}
    </main>
    <Footer />
  </div>);
}
