const container = document.querySelector("#qa");

class MyComponent extends React.Component {

    constructor() {
        super();
        this._name = "Morgan";
        this._address = "123 Street st"
        this._salary = 20000;
    }

    tax(salary) {
        return salary * 20 / 100;
    }

    render() {
        let element1 = React.createElement("h1", { key: "1" }, `Name: ${this._name}`);
        let element2 = React.createElement("h2", { key: "2" }, `Tax: ${this.tax(this._salary)}`);
        let element3 = React.createElement("h2", { key: "3" }, `Address: ${this._address}`);

        let div = React.createElement("div", null, [element1, element3, element2]);

        return div;
    }
}

let comp1 = React.createElement(MyComponent, null);

ReactDOM.render(
    comp1,
    container
);