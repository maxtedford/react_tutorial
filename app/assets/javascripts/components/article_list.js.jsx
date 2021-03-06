var ArticleList = React.createClass({
  articleComponents: function() {
    return this.props.articles.map(function(a) {
      return (
        <Article 
          article={a} 
          tagList={a.tagList} 
          key={"article-" + a.id}
          commentsCount={a.commentsCount}/>
      )
    })
  },
  render: function() {
    return(
      <ul id="articles">
        {this.articleComponents()}  
      </ul>
    )
  }
});
