module.exports = {
    width: 800,
    height: 500,
    title: { 
        text: "Title<br />[unit]",
        x: 0.05,
        y: "auto",
        xanchor: "left",
    },
    xaxis: {
        title: {
            text: "unit",
            standoff: 0,
        },
        showgrid: false,
        zeroline: false,
        linecolor: "#444444",
        ticks: "outside",
    },
    yaxis: {
        gridcolor: "white",
    },
    showlegend: false,
    plot_bgcolor: "#E6E6E6",
    css: `
    #plot .gtitle .line:nth-child(2) {
        font-size: 85%;
    }`,
};