/*
Future improvements:
-capture spaces and new paragraphs, current textarea input only captures the text and ignores more than 1 space.
-When I can do the above, then change char count to include the tweetNum/totalTweets (i.e. 1/3, 2/3)
-Breakpoint: identify if we have a natural stop (period with a space following) that can also serve as a break point and doesn't need an ellipsis

Bugs:
-empty spaces more than 1 long are captured in chops.text, but because html doesn't reflect more than 1 space without special escape characters, the charCount is not reflecting correctly. For instance: a content length of 55 characters that includes 10 spaces in a row, should actually be 9 less characters. This is what it displays, so there is a discrepancy in display, compared to length.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

ReactDOM.render(
<App />,
  document.getElementById('root')
);
