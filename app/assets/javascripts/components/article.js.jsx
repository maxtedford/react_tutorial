var Article = React.createClass({
  url: function() {
    return "/articles/" + this.props.article.id;
  },
  editUrl: function() {
    return "articles/" + this.props.article.id + "/edit"
  },
  render: function() {
    return (
      <li>
        <a href={"/articles/" + this.url}>
          {this.props.article.title}
        </a>
        <span className='tag_list'>
          {this.props.tagList}
        </span>
        <span className='actions'>
          <a href={this.editUrl}>
            <img src="/assets/page_edit.png" alt="edit icon"/>
          </a>
        </span>
        <LikeArticle articleID={this.props.articleId}
                     initialIsLiked={this.props.article.liked}/>
        <span>
          {this.props.commentsCount}
        </span>
      </li>
    )
  }
});
