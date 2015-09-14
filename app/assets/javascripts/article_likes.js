var likeArticle = React.createClass({
  render: function() {
    return React.createElement("div", {}, "Like me!")
  }
});

$(document).ready(function () {
  $(".like-article").each(function(_index, article) {
    React.render(
      React.createElement(likeArticle),
      article
    )
  })
});
