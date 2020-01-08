/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SiteTitleQuery
// ====================================================

export interface SiteTitleQuery_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
}

export interface SiteTitleQuery_site {
  __typename: "Site";
  siteMetadata: SiteTitleQuery_site_siteMetadata | null;
}

export interface SiteTitleQuery {
  site: SiteTitleQuery_site | null;
}
