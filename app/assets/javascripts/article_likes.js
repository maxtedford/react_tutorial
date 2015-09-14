var Hello = React.createClass({
  render: function() {
    return React.createElement("div", null, "Hello World!")
  }
});

$(document).ready(function () {
  React.render(
    React.createElement(Hello),
    document.getElementById("articles")
  )
});
