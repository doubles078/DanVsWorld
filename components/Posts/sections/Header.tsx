import Head from 'next/head';
import React from 'react';
import { Date } from '../..';
import { IPost } from '../../../models';

type PostProps = {
  postData: IPost;
};

export const Header = ({ postData }: PostProps) => {
  return (
    <div className="Post__header">
      <Head>
        <title>{postData.title} - DanVsWorld</title>
      </Head>
      <h1>{postData.title}</h1>
      <h3>{postData.subtitle}</h3>
      <div className="Post__header__meta">
        <p>
          by{' '}
          <a
            href="https://www.linkedin.com/in/donohued/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dan
          </a>
        </p>
        <div>
          {postData.tag}
          | <Date dateString={postData.date} />
        </div>
      </div>
    </div>
  );
};
