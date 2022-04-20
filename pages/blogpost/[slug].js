import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import * as fs from "fs";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myblog);

  function createMarkup(c) {
    return {__html:c};
  }

  return (
    <div className={styles.p}>
      {/* <h1> {blog && blog.slug}</h1> */}
      {blog &&<div  dangerouslySetInnerHTML={createMarkup(blog.p1)} ></div> }
      
    
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "abc" } },
      { params: { slug: "css" } },
      { params: { slug: "html" } },
      { params: { slug: "java" } },
    ],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  // console.log(context);
  const { slug } = context.params;
  let myblog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: { myblog: JSON.parse(myblog) },
  };
}

export default Slug;
