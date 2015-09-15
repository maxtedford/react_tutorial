var LikeArticle = React.createClass({
  render: function() {
    if (this.state.isLiked) {
      return React.createElement("div", {onClick: this.handleClick}, "Un-Like Me!");
    } else {
      return React.createElement("div", {onClick: this.handleClick}, "Like Me!");
    }
  },
  handleClick: function() {
    var method = this.state.isLiked ? "DELETE" : "POST";
    $.ajax({
      url: '/articles/' + this.props.articleID + "/likes",
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
      initialIsLiked: $(article).data("initial-is-liked")
    };
    React.render(
      React.createElement(likeArticle, props),
      article
    )
  })
});
