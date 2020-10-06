# Twitter Chopper
Chop your long posts into tweet-size pieces.
* **by Clifton Hill**
* cliftonhhill [@] gmail [dot] com / [GitHub Profile](https://github.com/CliftonHill) / [LinkedIn](https://www.linkedin.com/in/crusadingthought)
* App live at: <https://cliftonhill.github.io/twitter-chopper/>

## Introduction
I wanted to experiment with React development on my own project, so, knowing that some people are prolifically long writers on Twitter, this app will automatically chop those LONG tweets down to tweet-size pieces, retaining formatting, appending and prepending "..." as well as numbering the threads as 1/3, 2/3, 3/3 (for example.) This was to be a quick test project. Future plans would include integrating with Twitter API to automatically post the result.

* Made with React, material-UI, Node, HTML, CSS.
* Code is © 2020 by Clifton Hill

## Features:
* retains line-breaks and extra spaces
* thread of thread# is automatically generated
* copy function copies entire tweet to paste in Twitter
* Responsive website: ready for desktop or mobile use

## Future improvements:
* Breakpoint: identify if we have a natural stop (period with a space following) that can also serve as a break point and doesn't need an ellipsis
* allow tweet chops to be individually edited, and as one tweet expands the text automatically flows to the next and so on for realtime editing of them all for maximum visual impact!
* if editing post, then change back to a blue color, and pop up a refresh note to click the check button again, or maybe line through the tweets below to indicate that it needs to be redone?

## Bugs fixed:
* char count is now accurate. Spaces more than 1 long are captured in chops.text, but because html doesn't reflect more than 1 space without special escape characters, the charCount is not reflecting correctly. For instance: a content length of 55 characters that includes 10 spaces in a row, should actually be 9 less characters.

---
## REACT BOILERPLATE
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
