import React from 'react';
import { Layout } from '../../components';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { IPost } from '../../models';
import { Header } from '../../components/Posts/sections';
import ReactMarkdown from 'react-markdown';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from 'rehype-raw';

type PostProps = {
  postData: IPost;
};

export default function Post({ postData }: PostProps) {
  return (
    <Layout className={'Post'}>
      <Header postData={postData} />

      <ReactMarkdown
        className="Post__body"
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ className, children }) {
            const language = className?.replace('language-', '');

            return (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={language}
              >
                {children as string}
              </SyntaxHighlighter>
            );
          },
        }}
      >
        {postData.content}
      </ReactMarkdown>
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
