var React = require('react');
var ReactDOM = require('react-dom');


class Greeter extends React.Component {
  render () {
    return(
      <h1>Greeter! {this.props.message}</h1>
    )
  }
}

ReactDOM.render(
  <Greeter message="Usse"/>,
  document.body
)
