import React from 'react';
import Head from 'next/head';
import { Layout, PostList } from '../components';
import { getSortedPostsData } from '../lib/posts';
import { IPost } from '../models';

type Home = {
  posts: IPost[];
};

export default function Home({ posts }: Home) {
  return (
    <Layout home>
      <Head>
        <title>DanVsWorld</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <hr />

      <section className="Home__posts">
        <PostList posts={posts} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}
