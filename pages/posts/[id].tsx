import React from 'react';
import { Layout } from '../../components';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { IPost } from '../../models';
import { Header } from '../../components/Posts/sections';

type PostProps = {
  postData: IPost;
};

export default function Post({ postData }: PostProps) {
  return (
    <Layout className={'Post'}>
      <Header postData={postData} />

      <div
        className="Post__body"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </Layout>
  );
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
