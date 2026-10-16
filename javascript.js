
var chart1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v6.json",

    "data": {
        "url": "data/CAPAD_2024_Terrestrial.csv",
        "format": {"type": "csv"}
    },

    "mark": {
        "type": "bar",
        "color": "#47785B",
        "tooltip": true
    },

    "encoding": {
        "x": {
            "field": "STATE",
            "type": "nominal",
            "title": "State or territory",
            "sort": "-y",
            "axis": {"labelAngle": -30}
        },

        "y": {
            "aggregate": "count",
            "type": "quantitative",
            "title": "Number of CSV records"
        },

        "tooltip": [
            {
                "field": "STATE",
                "type": "nominal",
                "title": "State or territory"
            },
            {
                "aggregate": "count",
                "type": "quantitative",
                "title": "CSV records"
            }
        ]
    }
};

vegaEmbed("#chart1", chart1, {
    "actions": false
}).catch(console.error);
