import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import Title from "../components/Title.js";

function Blog() {
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(_createdAt desc){
                title,
                slug,
                mainImage {
                    asset -> {
                        _id,
                        url
                    },
                    alt
                },
                publishedAt
            }`
      )
      .then((data) => setPostData(data))
      
      .catch(console.error);
  }, []);
  console.log(postData)
  
  return (
    <main className="blog">
      <Title title="blog" />
      <div className="blog__items">
      {postData && postData.map((post, index) => (
        <article key={index}>
          <Link to={"/post/" + post.slug.current} key={post.slug.current}>
            <div className="blog__item">
              <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
              <h3>{post.title}</h3>
              <span>{post.publishedAt}</span>
            </div>
          </Link>
        </article>
      ))}
      </div>
    </main>
  );
}



export default Blog;


