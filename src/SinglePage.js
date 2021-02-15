import React from "react";
import ArticleContent from "./ArticleContent";
import { Helmet } from "react-helmet";
const SinglePage = ({ match }) => {
  const name = match.params.name;
  const article = ArticleContent.find(article => article.name === name);
  return (
    <>
      <Helmet>
        <title>{article.title}</title>
        <meta content="{article.desc}" name=" description" />
        <meta content="title in here" property="og:title" />
        <meta content="insert desc" property="og:description" />
        <meta content="insert image" property="og:image" />
        <meta content="https://axcora.com/getaxcoracms" property="og:author" />
        <meta content="insert title" name="facebook:title" />
        <meta content="website" property="og:type" />
        <meta
          content="https://www.facebook.com/mesinkasircomplete"
          property="facebook:author"
        />
        <meta content="insert your image url" name="facebook:image" />
        <meta content="title in here" property="og:site_name" />
        <meta content="insert desc in here" property="facebook:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          content="https://twitter.com/hockeycomp"
          property="twitter:author"
        />
        <meta content="@hockeycomp" name="twitter:site" />
        <meta content="input url image" name="twitter:image" />
        <meta content="insert description here" name="twitter:description" />
        <meta content="input title here" name="twitter:title" />
        <meta content="index, follow" name="robots" />
      </Helmet>
      <div className="row">
        <div className="col-12 col-md-12 p-3 p-md-5">
          <div className="shadow rounded p-3 p-md-5 uk-animation-slide-right">
            <img className="img-fluid" src={article.img} />
            <h1>
              <strong>
                <a href="/" className="text-danger">
                  {article.title}
                </a>
              </strong>
            </h1>
            <h3>{article.desc}</h3>
            {article.content.map((paragraph, key) => (
              <p className="lead" key={key}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default SinglePage;
