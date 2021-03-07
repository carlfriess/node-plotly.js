const http = require("http");
const open = require("open");
const presets = require("./presets");

function html(data, layout) {
    return `<html>
<head>
    <title>Plot</title>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/downloadjs@^1.4.7/download.min.js"></script>
    <style type="text/css">
    ${ layout.css ? layout.css : "" }
    </style>
</head>
<body>
    <div id="plot"></div>
    <script>
Plotly.plot("plot", ${ JSON.stringify(data) }, ${ JSON.stringify(layout) }, {
    modeBarButtonsToAdd: [{
        name: 'Download plot as a svg',
        icon: Plotly.Icons.disk,
        click: (gd) => {
            Plotly.toImage(gd, {format:"svg"}).then((img) => download(img, "plot.svg"));
        }
    }]
});

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

module.exports = { plot, html, presets };
