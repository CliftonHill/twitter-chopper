/*
Features:
-retains line-breaks and extra spaces
-thread of thread# is automatically generated
-copy function copies entire tweet for repaste in Twitter


Future improvements:
-Breakpoint: identify if we have a natural stop (period with a space following) that can also serve as a break point and doesn't need an ellipsis
-allow tweet chops to be individually edited

Bugs:


Bugs fixed:
-char count is now accurate. Spaces more than 1 long are captured in chops.text, but because html doesn't reflect more than 1 space without special escape characters, the charCount is not reflecting correctly. For instance: a content length of 55 characters that includes 10 spaces in a row, should actually be 9 less characters.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

ReactDOM.render(
<App />,
  document.getElementById('root')
);
