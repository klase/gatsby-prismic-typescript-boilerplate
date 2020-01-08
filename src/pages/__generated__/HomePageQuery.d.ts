/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePageQuery
// ====================================================

export interface HomePageQuery_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
}

export interface HomePageQuery_site {
  __typename: "Site";
  siteMetadata: HomePageQuery_site_siteMetadata | null;
}

export interface HomePageQuery {
  site: HomePageQuery_site | null;
}
