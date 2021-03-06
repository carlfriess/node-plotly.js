# node-plotly.js

A simple wrapper around the [plotly.js](https://plotly.com/javascript/) graphing library to visualise data locally using node.js.

## Documentation

The API should be functionally identical to the [plotly.js](https://plotly.com/javascript/) graphing library. Check out its [documentation](https://plotly.com/javascript/reference/index/).

## Example

```js
const { plot } = require("node-plotly.js");

const trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: "scatter",
};

const trace2 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: "scatter",
};

const data = [trace1, trace2];

const layout = {
  title: "Line and Scatter Plot",
};

plot(data, layout);
```
