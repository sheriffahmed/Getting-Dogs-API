const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.breeds = ['husky', 'pug'];
    this.state = {
      imgURL: '',
      breed: 'husky'
    }
  }
  handleChange = e => {
    this.setState({
      breed: e.target.value
    })
  }
  handleClick = e => {
    axios
      .get('https://dog.ceo/api/breed/'+this.state.breed+'/images/random')
      .then(response => {
        this.setState({
          imgURL: response.data.message
        })
      })
  }
  render() {
    return (
      <div>
      <h1>I am a Dog</h1>
      <img src={this.state.imgURL} />
      <select onChange={this.handleChange}>
        {this.breeds.map(b =>
          <option value={b}>{b}</option>
        )}
      </select>
      <button onClick={this.handleClick}>GET A DOG</button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));