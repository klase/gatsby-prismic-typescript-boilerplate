import React from "react";
import { Link, graphql } from "gatsby";

import { HomePageQuery } from "./__generated__/HomePageQuery";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { IPageProps } from "types/page-props";

const IndexPage = (props: IPageProps & IPageQuery) => {
  const { data } = props;
  console.log(data);
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;

interface IPageQuery {
  data: HomePageQuery;
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
