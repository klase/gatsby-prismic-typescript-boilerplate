/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Image
// ====================================================

export interface Image_placeholderImage_childImageSharp_fluid {
  __typename: "ImageSharpFluid";
  base64: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

export interface Image_placeholderImage_childImageSharp {
  __typename: "ImageSharp";
  fluid: Image_placeholderImage_childImageSharp_fluid | null;
}

export interface Image_placeholderImage {
  __typename: "File";
  childImageSharp: Image_placeholderImage_childImageSharp | null;
}

export interface Image {
  placeholderImage: Image_placeholderImage | null;
}
