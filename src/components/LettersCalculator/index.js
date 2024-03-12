import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputVal: '', count: 0}

  onChangeInput = event => {
    this.setState({
      inputVal: event.target.value,
      count: event.target.value.length,
    })
  }

  render() {
    const {inputVal, count} = this.state
    return (
      <div className="container">
        <div className="text-box">
          <h1 className="heading">Calculate the Letters you enter</h1>

          <label htmlFor="in" className="para">
            Enter the phrase
          </label>
          <input
            id="in"
            type="text"
            value={inputVal}
            onChange={this.onChangeInput}
            placeholder="Enter the phrase"
            className="input-element"
          />
          <p className="count-box">No.of letters: {count}</p>
        </div>
        <div className="img-box">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="Letters calculator"
            className="calculator-img"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
