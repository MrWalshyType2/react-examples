const container = document.querySelector("#qa");

class Address extends React.Component {
    
    render() {
        let title = React.createElement("h1", { key: "1" }, "Details");
        let name = React.createElement("h3", { key: "2" }, `Name: ${this.props.name}`);
        let address = React.createElement("h3", { key: "3" }, `Address: ${this.props.address}`);

        let component = React.createElement("div", null, [title, name, address]);
        
        return component;
    }
}

class CustomLink extends React.Component {
    render() {
        let component = React.createElement("a",
            { 
                href: this.props.link 
            },
            this.props.text);

        return component;
    }
}

const address1 = React.createElement(
    Address,
    {
        key: "1",
        name: "Morgan",
        address: "Manchester"
    }
);

const address2 = React.createElement(
    Address,
    {
        key: "2",
        name: "Fred",
        address: "London"
    }
);

const link1 = React.createElement(
    CustomLink,
    {
        key: "3",
        link: "http://www.bbc.co.uk",
        text: "BBC"
    }
);

const link2 = React.createElement(
    CustomLink,
    {
        key: "4",
        link: "http://www.cnn.com",
        text: "CNN"
    }
);

const addresses = React.createElement("div", { key: "5" }, [address1, address2]);
const links = React.createElement("div", { key: "6" }, [link1, link2]);

const content = React.createElement(
    "div",
    { 
        style: {
            "backgroundColor": "lightblue",
            "padding": "16px"
        }
    },
    [addresses, links]
);

ReactDOM.render(content, container);