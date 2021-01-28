import React, { Component } from 'react'
import Numbers from './Numbers'
import EvenNumbers from './EvenNumbers'
import OddNumbers from './OddNumbers'

class App extends Component {
  state ={
    number: 0,
  }

  componentDidMount(){
    this.setItervalId = setInterval(()=>{
      this.setState({
        number: this.state.number + 1,
      })
    },1000)
  }

  componentWillUnmount(){
    clearInterval(this.setItervalId)
  }

  render(){
    return(
      <div className="app">
        <Numbers title="All numbers" number={this.state.number}/>
        <Numbers title="Just " number={17}/>
        <EvenNumbers title="Even number" number={this.state.number}/>
        <OddNumbers title="Odd number" number={this.state.number}/>
      </div>
    )
  }
}

export default App