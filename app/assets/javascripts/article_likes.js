var likeArticle = React.createClass({
  render: function() {
    return React.createElement("div", {}, "Like me!")
  }
});

$(document).ready(function () {
  React.render(
    React.createElement(likeArticle, {}),
    document.getElementById("articles")
  );
});
