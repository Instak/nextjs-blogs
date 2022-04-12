import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const slug = (props) => {
  const [blog, setBlog] = useState(props.myblog);

  return (
    <div className={styles.p}>
      <h1> {blog && blog.slug}</h1>
      <div>
        {blog && blog.content}
        <br />
        <br />
        -by{blog && blog.Author}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  // console.log(context.query)
  // const router = useRouter();
  const { slug } = context.query;

  let data = await  fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
  let myblog = await data.json()

  return {
    props: { myblog },
  };
}

export default slug;
