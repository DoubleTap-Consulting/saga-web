import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getContent } from "actions/content";

import NewsCard from "components/news-card/newsCard";

import "./content.scss";

function Content({ dispatch, auth, content = [] }) {
  useEffect(() => {
    dispatch(getContent());
  }, []);

  return (
    <div className="content">
      <div className="content-header brand-background-header">
        <h1>Curated Content</h1>
      </div>
      <div className="content-container">
        {content.map(news => (
          <NewsCard
            news={news}
            user={auth.user}
            key={`featuredNews${news.id}`}
          />
        ))}
      </div>
    </div>
  );
}

function mapStateToProps({ auth, content: { data: content } }) {
  return { auth, content };
}

export default connect(mapStateToProps)(Content);
