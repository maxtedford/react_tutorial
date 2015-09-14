var likeArticle = React.createClass({
  render: function() {
    if(this.state.isLiked){
      return React.createElement("div", {}, "Unlike me!");
    } else {
      return React.createElement("div", {}, "Like me!");
    }
  },
  getInitialState: function() {
    return {isLiked: false}
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
