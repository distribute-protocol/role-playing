import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      totalTokens: 0,
      totalReputation: 0,
      totalDollars: 0,
      buyTokens: 0,
      sellTokens: 0,
      proposedCost: 0,
      actualCost: 0
    }
    this.storeInput = this.storeInput.bind(this)
    this.buyTokens = this.buyTokens.bind(this)
    this.sellTokens = this.sellTokens.bind(this)
    this.proposeProject = this.proposeProject.bind(this)
  }

  storeInput (e, variable) {
    if (!isNaN(parseInt(e.target.value))) {
      this.setState({[variable]: parseInt(e.target.value)})
    }
  }

  buyTokens () {
    let buyPrice
    this.state.totalTokens === 0 || this.state.totalDollars === 0
      ? buyPrice = 0.01 * this.state.buyTokens // based on baseCost in DistributeToken.sol where ether is ~$200
      : buyPrice = (this.state.totalDollars / this.state.totalTokens) * this.state.buyTokens / (this.state.buyTokens + this.state.totalTokens)
    return !isNaN(buyPrice)
      ? buyPrice
      : 0
  }

  sellTokens () {
    let sellPrice
    this.state.totalTokens === 0
      ? sellPrice = 0
      : sellPrice = (this.state.sellTokens * this.state.totalDollars) / (this.state.totalTokens)
    return !isNaN(sellPrice) && !(this.state.sellTokens > this.state.totalTokens)
      ? sellPrice
      : 0
  }

  proposeProject (type) {
    let actualCost = this.state.proposedCost * 1.11
    if (!isNaN(actualCost) && this.state.totalDollars > 0) {
      return type === 'tokens'
        ? (actualCost * this.state.totalTokens) / (20 * this.state.totalDollars)
        : (actualCost * this.state.totalReputation) / (20 * this.state.totalDollars)
    } else {
      return 0
    }
  }

  render () {
    return (
      <div >
        <div style={{border: '1px solid black', marginBottom: -1}}>
          <h3 style={{marginLeft: 10}}>System Details</h3>
          <div style={{display: 'flex'}}>
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', marginLeft: 10}}>
              <p>Total Tokens</p>
              <input onChange={(e) => this.storeInput(e, 'totalTokens')} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', marginLeft: 10}}>
              <p>Total Reputation</p>
              <input onChange={(e) => this.storeInput(e, 'totalReputation')} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', marginLeft: 10}}>
              <p>Total Dollars</p>
              <p style={{marginTop: -1}}>$<input onChange={(e) => this.storeInput(e, 'totalDollars')} /></p>
            </div>
          </div>
        </div>
        <div style={{border: '1px solid black', marginBottom: -1}}>
          <h3 style={{marginLeft: 10}}>Buying & Selling Tokens</h3>
          <div style={{display: 'flex'}}>
            <div style={{display: 'flex', textAlign: 'center', marginLeft: 10}}>
              <p>It will cost ${this.buyTokens().toFixed(2)} to buy</p>
              <input style={{height: 15, marginTop: 15, marginLeft: 5, marginRight: 5}} onChange={(e) => this.storeInput(e, 'buyTokens')} />
              <p>tokens.</p>
            </div>
          </div>
          <div style={{display: 'flex'}}>
            <div style={{display: 'flex', textAlign: 'center', marginLeft: 10}}>
              <p>You will get ${this.sellTokens().toFixed(2)} for selling </p>
              <input style={{height: 15, marginTop: 15, marginLeft: 5, marginRight: 5}} onChange={(e) => this.storeInput(e, 'sellTokens')} />
              <p>tokens.</p>
            </div>
          </div>
        </div>
        <div style={{border: '1px solid black', marginBottom: -1}}>
          <h3 style={{marginLeft: 10}}>Proposing Projects</h3>
          <div style={{display: 'flex', textAlign: 'center', marginLeft: 10}}>
            <p>To propose a project costing $<input style={{height: 15, marginTop: 15, marginRight: 5}} onChange={(e) => this.storeInput(e, 'proposedCost')} />
              you will need to put down {this.proposeProject('tokens').toFixed(0)} tokens or {this.proposeProject('reputation').toFixed(0)} reputation.
            </p>
          </div>
          <p style={{marginLeft: 10}}>To account for rewards, the actual project cost will be ${this.state.actualCost.toFixed(2)}.</p>
        </div>
      </div>
    )
  }
}

export default App
