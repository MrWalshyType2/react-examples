const container = document.querySelector("#qa");

class Hello extends React.Component {
    render() {
        let component = React.createElement("h1", null, "Hello");
        return component;
    }
}

class RedSquare extends React.Component {
    render() {
        let component = React.createElement(
            "div",
            {
                style: { 
                    "background-color": "red",
                    "width": "64px",
                    "height": "64px"
                }
            },
            React.createElement("p", null, "Red")
            );
        return component;
    }
}

class MultiComponent extends React.Component{
    render() {
        let component1 = React.createElement("h1", null, "Hello");
        let component2 = React.createElement("h2", null, "World");

        let div = React.createElement("div", null, [component1, component2])
        return div;
    }
}

let firstComponent = React.createElement(Hello, null);
let secondComponent = React.createElement(RedSquare, null);
let thirdComponent = React.createElement(MultiComponent, null);

let div = React.createElement(
    "div",
    null,
    [firstComponent, secondComponent, thirdComponent]
);

ReactDOM.render(div, container);