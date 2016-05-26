var React = require('react');
var ReactDOM = require('react-dom');

const BG_COLOR = 'pink';

var Container = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <Wrapper>
            <Welcome name={'Qui'} />
            <Welcome name={'Quo'} />
            <Welcome name={'Qua'} />
          </Wrapper>
          <Hello />
        </div>
      </div>
    );
  }
});

var Wrapper = React.createClass({
  render:function () {
    return (
      <div style={{ backgroundColor: BG_COLOR }} >
        <h1>Header</h1>
        {this.props.children}
      </div>
    );
  }
});

var Welcome = React.createClass({
  render: function () {
    return (
      <div>Hello {this.props.name}!</div>
    );
  }
});

var Hello = React.createClass({
  render: function () {
    return <div>Hello component</div>;
  }
});

// Render
ReactDOM.render(
  <Container />,
    document.getElementById('app')
);
