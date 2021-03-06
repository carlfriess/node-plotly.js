const http = require("http");
const open = require("open");

function html(data, layout) {
    const json = {
        data: data,
        layout: layout,
    };
    return `<html>
<head>
    <title>Plot</title>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    <style type="text/css">
    ${ layout.css ? layout.css : "" }
    </style>
</head>
<body>
    <div id="plot"></div>
    <script>
Plotly.plot("plot", ${ JSON.stringify(json) });
    </script>
</body>
</html>`;
}

function plot(data, layout = {}) {
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(html(data, layout));
        server.close();
    });
    server.listen(0, "127.0.0.1", () => {
        open(`http://127.0.0.1:${ server.address().port }`);
    });
}

module.exports = { plot, html };
