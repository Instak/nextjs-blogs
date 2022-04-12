import React from "react";
import styles from "../styles/blog.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

const blog = (props) => {
  console.log(props)
  const [blogs, setblogs] = useState(props.allBlogs);
  // useEffect(() => {

  // }, []);
  return (
    <div className={styles.return}>
      {blogs.map((blogitem)=>{
        return       <div className={styles.b}><div key={blogitem.slug} className={styles.blogs}><Link href={`/blogpost/${blogitem.slug}`}><h2 className={styles.heding}>{blogitem.Title}</h2></Link>
        <p>{blogitem.content.substr(0,140)}...</p></div></div>
      })}
      <main className={styles.main}>
 
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs")
  let allBlogs = await data.json()
  // .then((a) => {
  //   return a.json();
  // })
  // .then((parsed) => {
  //   setblogs(parsed);
  // });
  return {
    props:{allBlogs}, // will be passed to the page component as props
  }
}

export default blog;