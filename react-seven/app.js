const container = document.querySelector("#qa");

class SalarySlip extends React.Component {
    
    render() {
        let tax = 0; // %

        if (this.props.salary >= 12500) {
            tax = 20;
        } else if (this.props.salary >= 45000) {
            tax = 40;
        }

        tax = this.props.salary * tax / 100; // £

        let name = React.createElement("h1", { key: 1 }, `name: ${ this.props.name }`);
        let salary = React.createElement("h2", { key: 6 }, `Salary: £${ this.props.salary }`);
        let taxed = React.createElement("h2", { key: 2 }, `Tax: £${ tax }`);
        let net = React.createElement("h2", { key: 3 }, `Net: £${ this.props.salary - tax }`);
        
        let div = React.createElement("div", null, [name, salary, taxed, net]);
        return div;
    }
}

let salSlip1 = React.createElement(SalarySlip, { key: 4, name: "Fred", salary: 20000 });
let salSlip2 = React.createElement(SalarySlip, { key: 5, name: "Grognak", salary: 43000 });

let salarySlips = React.createElement("div", null, [salSlip1, salSlip2]);

ReactDOM.render(salarySlips, container);