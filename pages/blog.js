// import React from "react";
import styles from "../styles/blog.module.css";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import * as fs from 'fs';


// const blog = (props) => {
//   console.log(props)
//   const [blogs, setblogs] = useState(props.allBlogs);
//   // useEffect(() => {

//   // }, []);
//   return (
//     <div className={styles.return}>
//       {blogs.map((blogitem)=>{
//         return       <div className={styles.b}><div key={blogitem.slug} className={styles.blogs}><Link href={`/blogpost/${blogitem.slug}`}><h2 className={styles.heding}>{blogitem.Title}</h2></Link>
//         <p>{blogitem.content.substr(0,140)}...</p></div></div>
//       })}
//       <main className={styles.main}>
 
//       </main>
//     </div>
//   );
// };



// export async function getStaticProps(context) {
//   let data = await fs.promises.readdir("blogdata")
//   let myfile;
//       let allblogs = [];
//         for (let index = 0; index < data.length; index++) {
//           const item = data[index];
//             console.log(item)
//             myfile = await fs.promises.readFile(('blogdata/'+ item),'utf-8')
//             console.log(myfile)
//                     allblogs.push(JSON.parse(myfile))
//         } 
//   return {
//     props:{ allBlogs }, // will be passed to the page component as props
//   }
// }

// export default blog;
import React, { useEffect, useState } from 'react';
// import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import * as fs from 'fs';

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them

const Blog = (props) => {
 // console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {
    
  

  // }, [])
  return <div className={styles.container}>
    <main className={styles.main}>
      {blogs.map((blogitem) => {
        return <div key={blogitem.slug} className={styles.blogs}><div className={styles.b}><Link href={`/blogpost/${blogitem.slug}`}><h2 className={styles.heding}>{blogitem.Title}</h2></Link>
               <p>{blogitem.p1.substr(0,140)}...</p></div></div>
      })}
    </main>
  </div>
};


export async function getStaticProps(context) { 
  let data = await fs.promises.readdir("blogdata");
  let myfile; 
  let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
       // console.log(item)
        myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8') 
        allBlogs.push(JSON.parse(myfile))
    }
     
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default Blog;