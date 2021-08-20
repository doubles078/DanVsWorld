import React from 'react';
import Link from 'next/link';
import { Date } from '../../components';
import { IPost } from '../../models';

type PostList = {
  posts: IPost[];
};

export const PostList = ({ posts }: PostList) => {
  return (
    <ul className={'PostList'}>
      {posts.map(({ id, date, title }) => (
        <li className="PostList__post" key={id}>
          <Link href={`/posts/${id}`}>
            <a className="PostList__title">{title}</a>
          </Link>
          <br />
          <small>
            <Date dateString={date} />
          </small>
        </li>
      ))}
    </ul>
  );
};
