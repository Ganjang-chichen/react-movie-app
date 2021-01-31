
import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructure');
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState( {isLoading : false} )
    }, 6000);

    console.log('component rendered');
  }

  shouldComponentUpdate() {
    console.log('component should');
    return true;
  }
  componentDidUpdate() {
    console.log('i just update');
  }

  state = {
    count : 0, 
    isLoading : true
  };

  add = () =>{
    console.log('add');
    //this.setState({count : this.state.count + 1});
    this.setState(current => ({count : current.count + 1}));
  }

  minus = () => {
    console.log('minus');
    this.setState({count : this.state.count - 1});
  }
  
  render() {
    console.log('render');

    const {isLoading} = this.state;
    return (
      <div>
        <h1>The Number is {this.state.count} </h1>

        <h1> {isLoading ? "Loading...." : "we are ready"} </h1>
        <button onClick={this.add} >Add</button>
        <button onClick={this.minus} >Minus</button>
      </div>
    )
  }
}

export default App;
