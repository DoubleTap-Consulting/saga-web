import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getArticle } from "actions/article";

import ArticleImage from "images/article2.jpg";

import "./article.scss";

function Article({
  dispatch,
  match: {
    params: { articleId }
  },
  article = {}
}) {
  useEffect(() => {
    console.log("hey");
    dispatch(getArticle(articleId));
  });

  return (
    <div className="article">
      <div className="article-header">
        <h1>{article.title}</h1>
      </div>
      <div className="article-container">
        <img
          src={ArticleImage}
          className="article-container-banner"
          alt="Article Header"
        />
        <div className="article-container-articleView">
          <p className="article-container-articleView-date">{article.date}</p>
          {article.body.map(paragraph => (
            <p className="article-container-text">{paragraph.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ auth, article: { data: article } }) {
  console.log("article", article);
  return { auth, article };
}

export default connect(mapStateToProps)(Article);
