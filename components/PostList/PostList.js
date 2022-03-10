import * as React from "react";
import styled from "styled-components";
import { Post } from "../Post/Post";

export function PostList({ posts }) {
  return (
    <List>
      {posts.map((post) => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </List>
  );
}

const List = styled.ul`
  padding: 2rem;
  margin: 2rem;
  list-style: none;
  align-items: center;
`;
