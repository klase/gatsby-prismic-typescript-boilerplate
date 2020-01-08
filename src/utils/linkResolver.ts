type PrismicDocument = {
  type: string;
  uid: string;
};

export function linkResolver(doc: PrismicDocument) {
  if (doc.type === "homepage") {
    return "/";
  }
  // if (doc.type === "products") {
  //   return "/products";
  // }
  // if (doc.type === "product") {
  //   return "/products/" + doc.uid;
  // }
  // if (doc.type === "artists_home") {
  //   return "/artists";
  // }
  // if (doc.type === "artist") {
  //   return "/artists/" + doc.uid;
  // }
  return "/";
}
