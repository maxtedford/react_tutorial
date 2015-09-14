var Hello = React.createClass({
  render: function() {
    console.log(this.props);
    return React.createElement("div", null, "Hello " + this.props.name + "!")
  }
});

$(document).ready(function () {
  React.render(
    React.createElement(Hello, {name: "Max"}),
    document.getElementById("articles")
  )
});
