import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import { useState } from "react";

import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";

export default function Home({ allPostsData }) {
  const [toggle, setToggle] = useState(false);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        {/* <Link href="/login">Log In</Link> */}
        <p>
          Go to my first post: <Link href="/posts/first-post">Click here</Link>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}