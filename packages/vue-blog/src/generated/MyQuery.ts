/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MyQuery
// ====================================================

export interface MyQuery_postsConnection_edges_node_author_photo {
  __typename: "Asset";
  /**
   * Get the url for the asset with provided transformations applied.
   */
  url: string;
}

export interface MyQuery_postsConnection_edges_node_author {
  __typename: "Author";
  bio: string | null;
  name: string;
  /**
   * The unique identifier
   */
  id: string;
  photo: MyQuery_postsConnection_edges_node_author_photo | null;
}

export interface MyQuery_postsConnection_edges_node_featuredImage {
  __typename: "Asset";
  /**
   * Get the url for the asset with provided transformations applied.
   */
  url: string;
}

export interface MyQuery_postsConnection_edges_node_categories {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface MyQuery_postsConnection_edges_node {
  __typename: "Post";
  author: MyQuery_postsConnection_edges_node_author | null;
  /**
   * The time the document was created
   */
  createdAt: any;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: MyQuery_postsConnection_edges_node_featuredImage[];
  categories: MyQuery_postsConnection_edges_node_categories[];
}

export interface MyQuery_postsConnection_edges {
  __typename: "PostEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  node: MyQuery_postsConnection_edges_node;
}

export interface MyQuery_postsConnection {
  __typename: "PostConnection";
  /**
   * A list of edges.
   */
  edges: MyQuery_postsConnection_edges[];
}

export interface MyQuery {
  /**
   * Retrieve multiple posts using the Relay connection interface
   */
  postsConnection: MyQuery_postsConnection;
}
