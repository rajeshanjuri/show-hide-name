// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isfirst: false, islast: false}

  showHideFirstName = () => {
    this.setState(prevState => {
      console.log(`previous state status is ${prevState.isfirst}`)
      return {isfirst: !prevState.isfirst}
    })
  }

  showHideLastName = () => {
    this.setState(prevState => {
      console.log(`previous state status is ${prevState.islast}`)
      return {islast: !prevState.islast}
    })
  }

  render() {
    const {isfirst, islast} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">Show/Hide</h1>
        <div className="btn-container">
          <div className="name-container">
            <button
              type="button"
              className="button"
              onClick={this.showHideFirstName}
            >
              Show/Hide Firstname
            </button>
            {isfirst && <p className="hide-name">Joe</p>}
          </div>

          <div className="name-container">
            <button
              type="button"
              className="button"
              onClick={this.showHideLastName}
            >
              Show/Hide Lastname
            </button>
            {islast && <p className="hide-name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
