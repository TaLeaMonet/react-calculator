import React from 'react'
import Button from './Button'

export default

class Display extends React.Component {
  constructor (props) {
    super(props);
    this.state = { value: ""
    };
    this.update = this.update.bind(this)
  }
  // updates functions
  //  grabs new value
  update (e) {
    if (e.target.value === "on") {
      this.setState({
        value: "0"
      })
    }
    else if (e.target.value === "off") {
      this.setState({
        value: ""
        })
    } else {


    this.setState({
    value : this.state.value.concat(e.target.value)
  });
 }
}

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
          <Button
   onClick = {this.update} />
   </div>
    )
  }
}
