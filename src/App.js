import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      totalTokens: 0,
      totalReputation: 0,
      totalDollars: 0,
      userTokens: 0,
      userReputation: 0
    }
    this.storeInput = this.storeInput.bind(this)
    this.buyTokens = this.buyTokens.bind(this)
    this.sellTokens = this.sellTokens.bind(this)
  }

  storeInput (e, variable) {
    this.setState({[variable]: e.target.value})
  }

  buyTokens (_tokens) {
  }

  sellTokens (_tokens) {
  }

  render () {
    return (
      <div >
        <h3 style={{marginLeft: 10}}>System Details</h3>
        <div style={{display: 'flex'}}>
          <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', marginLeft: 10}}>
            <h4>Total Tokens</h4>
            <input onChange={(e) => this.storeInput(e, 'totalTokens')} />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', marginLeft: 10}}>
            <h4>Total Reputation</h4>
            <input onChange={(e) => this.storeInput(e, 'totalReputation')} />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', marginLeft: 10}}>
            <h4>Total Dollars</h4>
            <p style={{marginTop: -1}}>$<input onChange={(e) => this.storeInput(e, 'totalReputation')} /></p>
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{display: 'flex', textAlign: 'center', marginLeft: 10}}>
            <input style={{height: 15, marginTop: 20}} onChange={(e) => this.storeInput(e, 'totalTokens')} />
            <h4>tokens will cost you {this.buyTokens(this.state.buyTokens)}.</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default App
