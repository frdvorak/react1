import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Output from './components/Output';
import Select from './components/controls/Select';
import Text from './components/controls/Text';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      paras: 5,
      format: 'text',
      text: ''
    }

  }

  componentWillMount(){
    this.getSampleText();
  }

  getSampleText(){
    axios.get('https://baconipsum.com/api/?type=all-meat&paras='+this.state.paras+'&start-with-lorem=1&format='+this.state.format)
      .then((response)=>{
        this.setState({text: response.data}, function(){
          console.log(this.state);
        });
      })
        .catch((err)=> {
          console.log(err);
        })
  }

  textOrHtml(x){
    this.setState({format: x}, this.getSampleText)
  }

  changeParas(number){
    this.setState({paras: number}, this.getSampleText)
  }

  render() {
    return (
      <div className="App container" >
      <h3 className='text-center'>ReactJS Random Text Generator</h3>
      <p className='text-center'>React + https://baconipsum.com/api/ + Bootstrap</p>
      <hr />
      <form className='form-inline'>

        <div className="form-group">
            <Text value={this.state.paras} onChange={this.changeParas.bind(this)}/>
        </div>

        <div className="form-group">
          
          <Select value={this.state.format} onChange={this.textOrHtml.bind(this)}/>
        </div>
        <br/><br/>
      </form>
        <Output value={this.state.text}/>
      </div>
    );
  }
}

export default App;
