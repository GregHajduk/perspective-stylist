// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import sanityClient from "../client.js";
// import Title from "../components/Title.js";
// import PageMargin from "../components/PageMargin";

// function Blog() {
//   const [postData, setPostData] = useState(null);
//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `*[_type == "post"] | order(_createdAt desc){
//                 title,
//                 desc,
//                 slug,
//                 mainImage {
//                     asset -> {
//                         _id,
//                         url
//                     },
//                     alt
//                 },
//                 publishedAt
//             }`
//       )
//       .then((data) => setPostData(data))

//       .catch(console.error);
//   }, []);
//   console.log(postData);

//   return (
//     <PageMargin >
//     <main className="blog">
//       <Title title="blog" />
//       {postData &&
//         postData.map((post, index) => (
//           <article className="blog__items" key={index}>
//             <Link
//               className="blog__item"
//               to={"/post/" + post.slug.current}
//               key={post.slug.current}
//             ><div className="blog__img">
//               <img
//                 src={post.mainImage.asset.url}
//                 alt={post.mainImage.alt}
//               /></div>
//               <div className="blog__info">
//                 <h3 className="blog__title">{post.title}</h3>
//                 <p className="blog__desc">{post.desc}</p>
//                 <span className="blog__date">{new Date(post.publishedAt).toLocaleDateString()}</span>
//               </div>
//             </Link>
//           </article>
//         ))}
//     </main>
//   </PageMargin>
//   )
// }

// export default Blog;

import ListGrid from '../components/ListGrid';


function Blog() {

  return (
    <>
    <ListGrid 
    title="blog"
    item="post"/>
    </>
  );
}

export default Blog;              
