var LikeArticle = React.createClass({
  render: function() {
    if (this.state.isLiked) {
      return (
        <div onClick={this.handleClick}>
          Un-like Me!
        </div>
      );
    } else {
      return (
        <div onClick={this.handleClick}>
          Like Me!
        </div>
      )
    }
  },
  handleClick: function() {
    var method = this.state.isLiked ? "DELETE" : "POST";
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
      <LikeArticle initialIsLiked={props.initialIsLiked} articleId={props.articleId}/>,
      article
    )
  })
});
