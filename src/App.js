import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = { num: [], display: "", disableEqualButton: false };
  }
  //passing the value to num on button press
  setValue(field, event) {
    event.preventDefault();
    let num = this.state.num.push(field);
    this.setState({ disableEqualButton: false });
    console.log(this.state.num);
    let str = "";
    for (let i = 0; i < this.state.num.length; i++) {
      str = str + this.state.num[i];
      this.setState({ display: str });
    }
  }
  calculate(event) {
    event.preventDefault();
    this.setState({ disableEqualButton: true });
    let num = this.state.num;

    for (var i = 0; i < num.length; i++) {
      if (
        num[i] == "+" ||
        num[i] == "-" ||
        num[i] == "*" ||
        num[i] == "/" ||
        num[i] == "%"
      ) {
        var firstNumber = num.slice(0, i);
        var secondNumber = num.slice(i + 1);
        var type = num[i];
      }
    }
    // Display results
    let result = this.numberGenerator(firstNumber, secondNumber, type);
    console.log(result);
    this.setState({ display: result });
    this.state.num = [];
    this.state.num[0] = result;
  }
  //Defining numbers and type of operation
  numberGenerator(arr1, arr2, type) {
    var str1 = "";
    var str2 = "";
    // Getting first number
    for (let i = 0; i < arr1.length; i++) {
      str1 = str1.concat(arr1[i]);
    }
    let firstFloatNumber = parseFloat(str1);
    // Getting second number
    for (let i = 0; i < arr2.length; i++) {
      str2 = str2.concat(arr2[i]);
    }
    let secondFloatNumber = parseFloat(str2);
    // Type of operation selection
    switch (type) {
      case "+": {
        let result = firstFloatNumber + secondFloatNumber;
        return result;
        break;
      }
      case "-": {
        let result = firstFloatNumber - secondFloatNumber;
        return result;
        break;
      }
      case "*": {
        let result = firstFloatNumber * secondFloatNumber;
        return result;
        break;
      }
      case "/": {
        let result = firstFloatNumber / secondFloatNumber;
        return result;
        break;
      }
      case "%": {
        let result = (firstFloatNumber * secondFloatNumber) / 100;
        return result;
        break;
      }
    }
  }
  // All clear functionality
  clear(event) {
    this.state.num = [];
    this.setState({ display: 0 });
    this.setState({ disableEqualButton: false });
  }
  // Back space functionality
  backSpace(event) {
    event.preventDefault();
    this.state.num.pop();
    this.setState({ display: this.state.num });
    this.setState({ disableEqualButton: false });
  }
  render() {
    return (
      <div className="container">
        {/* Header */}
        <header className="header">
          <h1>Calculator</h1>
        </header>
        <div className="body">
          {/* Calculator Display */}
          <div className="display">
            <div className="displayValues">{this.state.display}</div>
          </div>
          {/* Calculator Buttons */}
          <div className="pannel">
            <tr>
              <td className="num-buttons" onClick={this.clear.bind(this)}>
                AC
              </td>
              <td className="num-buttons" onClick={this.backSpace.bind(this)}>
                &#171;
              </td>
              <td
                className="num-buttons"
                onClick={this.setValue.bind(this, "%")}
              >
                %
              </td>
              <td
                className="num-buttons"
                onClick={this.setValue.bind(this, "/")}
              >
                &#247;
              </td>
            </tr>
            <tr>
              <td
                disabled="true"
                className="num-buttons"
                onClick={this.setValue.bind(this, "7")}
              >
                7
              </td>
              <td
                className="num-buttons"
                onClick={this.setValue.bind(this, "8")}
              >
                8
              </td>
              <td
                className="num-buttons"
                onClick={this.setValue.bind(this, "9")}
              >
                9
              </td>
              <td
                className="num-buttons"
                onClick={this.setValue.bind(this, "*")}
              >
                &#215;
              </td>
            </tr>
            <tr>
              <td
                className="num-buttons"
                onClick={this.setValue.bind(this, "4")}
              >
                4
              </td>
              <td
                className="num-buttons"
                onClick={this.setValue.bind(this, "5")}
              >
                5
              </td>
              <td
                className="num-buttons"
                onClick={this.setValue.bind(this, "6")}
              >
                6
              </td>
              <td
                className="num-buttons"
                onClick={this.setValue.bind(this, "-")}
              >
                -
              </td>
            </tr>
            <tr>
              <td
                className="num-buttons"
                onClick={this.setValue.bind(this, "1")}
              >
                1
              </td>
              <td
                className="num-buttons"
                onClick={this.setValue.bind(this, "2")}
              >
                2
              </td>
              <td
                className="num-buttons"
                onClick={this.setValue.bind(this, "3")}
              >
                3
              </td>
              <td
                className="num-buttons"
                onClick={this.setValue.bind(this, "+")}
              >
                &#43;
              </td>
            </tr>
            <tr>
              <td
                className="num-buttons"
                onClick={this.setValue.bind(this, "00")}
              >
                00
              </td>
              <td
                className="num-buttons"
                onClick={this.setValue.bind(this, "0")}
              >
                0
              </td>
              <td
                className="num-buttons"
                onClick={this.setValue.bind(this, ".")}
              >
                .
              </td>
              <button
                className="num-buttons"
                onClick={this.calculate.bind(this)}
                disabled={this.state.disableEqualButton}
              >
                <td>&#61;</td>
              </button>
            </tr>
          </div>
        </div>
        {/* Footer */}
        <footer className="footer">Copyright@2020</footer>
      </div>
    );
  }
}

export default App;
