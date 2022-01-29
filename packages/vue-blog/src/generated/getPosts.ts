/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPosts
// ====================================================

export interface getPosts_postsConnection_edges_node_author_photo {
  __typename: "Asset";
  /**
   * Get the url for the asset with provided transformations applied.
   */
  url: string;
}

export interface getPosts_postsConnection_edges_node_author {
  __typename: "Author";
  bio: string | null;
  name: string;
  /**
   * The unique identifier
   */
  id: string;
  photo: getPosts_postsConnection_edges_node_author_photo | null;
}

export interface getPosts_postsConnection_edges_node_featuredImage {
  __typename: "Asset";
  /**
   * Get the url for the asset with provided transformations applied.
   */
  url: string;
}

export interface getPosts_postsConnection_edges_node_categories {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface getPosts_postsConnection_edges_node {
  __typename: "Post";
  author: getPosts_postsConnection_edges_node_author | null;
  /**
   * The time the document was created
   */
  createdAt: any;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: getPosts_postsConnection_edges_node_featuredImage[];
  categories: getPosts_postsConnection_edges_node_categories[];
}

export interface getPosts_postsConnection_edges {
  __typename: "PostEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  node: getPosts_postsConnection_edges_node;
}

export interface getPosts_postsConnection {
  __typename: "PostConnection";
  /**
   * A list of edges.
   */
  edges: getPosts_postsConnection_edges[];
}

export interface getPosts {
  /**
   * Retrieve multiple posts using the Relay connection interface
   */
  postsConnection: getPosts_postsConnection;
}
