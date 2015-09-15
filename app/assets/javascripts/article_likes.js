var likeArticle = React.createClass({
  render: function() {
    if (this.state.isLiked) {
      return React.createElement("div", {onClick: this.handleClick}, "Un-Like Me!");
    } else {
      return React.createElement("div", {onClick: this.handleClick}, "Like Me!");
    }
  },
  handleClick: function() {
    var method = this.state.isLiked ? "DELETE" : "POST";
    debugger;
    $.ajax({
      url: '/articles/' + this.props.articleId + "/likes",
      type: method,
      success: function(response) {
        this.setState({isLiked: response.liked});
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {isLiked: this.props.initialIsLiked};
  }
});

$(document).ready(function () {
  $(".like-article").each(function(_index, article) {
    var props = {
      initialIsLiked: $(article).data("initial-is-liked"),
      articleId: $(article).data("article-id")
    };
    React.render(
      React.createElement(likeArticle, props),
      article
    )
  })
});
