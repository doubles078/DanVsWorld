import React from 'react';
import Image from 'next/image';
import { GoodReads, LinkedIn, Twitter } from '../Icons';
import { Github } from '../Icons/Github';

const WELCOME_MESSAGE = 'Welcome to my blog';
const DESCRIPTION_MESSAGE =
  'My name is Dan - I like to write about software development.';

export const AuthorCard = () => {
  return (
    <div className="AuthorCard">
      <Image
        className="AuthorCard__avatar"
        priority
        src="/images/avatar.jpg"
        height={144}
        width={144}
        alt={DESCRIPTION_MESSAGE}
      />
      <h1>{WELCOME_MESSAGE}</h1>
      <p>{DESCRIPTION_MESSAGE}</p>
      <ul className="AuthorCard__social">
        <li>
          <a
            href="https://www.linkedin.com/in/donohued/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/doubles078"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/doubles078"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.goodreads.com/user/show/37996530-daniel-donohue"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoodReads />
          </a>
        </li>
      </ul>
    </div>
  );
};
