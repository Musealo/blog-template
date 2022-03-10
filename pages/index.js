import Link from "next/link";
import { PostList } from "../components/PostList/PostList";
import {getSortedPostsData} from "../lib/posts";
import styled from "styled-components";
import Image from 'next/image';

export default function Home({posts}) {
  

  return (
    <Page>

      <h1>My Blog</h1>
      <p>Lorem Ipsum…</p>
      <h2>Posts</h2>
      <PostList posts={posts} />
    </Page>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return{
    props: {
      posts:posts,
    }
  }
}


const Page = styled.div `
  disyplay: flex;
  justify-content: center;
  text-align: center;
`;
