let qaContainer = document.querySelector("#qa");
const qa2 = document.querySelector("#qa2");

let anchor = React.createElement(
    "a", // parent node
    { 
        href: "http://www.bbc.co.uk",
        target: "_blank",
        title: "BBC News",
        className: "red no-decs f2"
    }, // props
     "News" // child node
);

//ReactDOM.render(anchor, qaContainer);

///////////////////////////////////////
const br = React.createElement(
    "br",
    null,
    null
);

const a1 = React.createElement(
    "a",
    { 
        href: "https://www.bbc.co.uk",
        target: "_blank",
        title: "BBC News",
        className: "blue no-decs f2"
    },
     "BBC"
);

const a2 = React.createElement(
    "a",
    { 
        href: "https://www.cnn.com",
        target: "_blank",
        title: "CNN News",
        className: "blue no-decs f2"
    },
     "CNN"
);

const a3 = React.createElement(
    "a",
    { 
        href: "https://www.metro.co.uk",
        target: "_blank",
        title: "Metro News",
        className: "blue bg-lsteelblue no-decs f2"
    },
     "Metro"
);

// A list of elements can be passed as child nodes
const div = React.createElement(
    "div",
    {
        style: { "background-color": "red" }
    },
    [a1, br, a2]
);

const div2 = React.createElement(
    "div",
    {
        style: { "background-color": "orange" }
    },
    a3
);

const containerDiv = React.createElement(
    "div",
    {
        style: {
            "background-color": "gray",
            "padding": "8px"
        },
        id: "main-cont"
    },
    [div, div2]
);

ReactDOM.render(containerDiv, qa2);