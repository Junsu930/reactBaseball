const React = require('react');
const ReactDom = require('react-dom/client');

const Baseball = require('./Baseball');

ReactDom.createRoot(document.getElementById("root")).render(<Baseball/>);