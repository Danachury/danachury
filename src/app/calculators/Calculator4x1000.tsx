import { ChangeEvent, ClipboardEvent, Component } from "react";

import './Calculator4x1000.css'

export default class extends Component {

  state = { tax: 0, minValue: 0 }

  calculate4x1000 = (amount: number) =>
    amount * 4 / 1000

  handleChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    const amount = Math.abs(Number(event.target.value))
    this.setState({ tax: this.calculate4x1000(amount) })
  }

  handlePasteEvent = (event: ClipboardEvent) => {
    const clipboardData = event.clipboardData
    const pastedData = clipboardData ? parseFloat(clipboardData.getData('text')) : this.state.minValue

    if (pastedData <= this.state.minValue)
      event.preventDefault()
  }

  render() {
    return <>
      <input type="number"
             placeholder="Amount"
             min={this.state.minValue}
             onChange={this.handleChangeEvent}
             onPaste={this.handlePasteEvent}/>
      <div>Tax to pay: {this.state.tax}</div>
    </>
  }
}
