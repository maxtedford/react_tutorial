var likeArticle = React.createClass({
  render: function() {
    console.log(this.state.isLiked);
    if(this.state.isLiked){
      return React.createElement("div", { onClick: this.clickHandler }, "Unlike me!");
    } else {
      return React.createElement("div", { onClick: this.clickHandler }, "Like me!");
    }
  },
  getInitialState: function() {
    return {isLiked: false}
  },
  clickHandler: function() {
    this.setState({ isLiked: !this.state.isLiked })
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
