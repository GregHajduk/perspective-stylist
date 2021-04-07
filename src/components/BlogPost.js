import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import PageMargin from "./PageMargin";
import Loading from "./Loading";

function BlogPost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            desc,
            _id,
            slug,
            author->{name},
            mainImage{
                asset-> {
                    _id,
                    url
                },
                alt
            },
            body,
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <Loading/>;

  return (
    <PageMargin>
    <article className="post">
      <header className="post__header">
        <h2 className="post__title">{singlePost.title}</h2>
        <span className="post__author">by {singlePost.author.name}</span>
        <p className="post__description">{singlePost.desc}</p>
        <div className="post__img"><img
          src={singlePost.mainImage.asset.url}
          alt={singlePost.mainImage.alt}
        />
        </div>
      </header>
      <main className="post__content">
        <BlockContent 
        blocks={singlePost.body} 
        projectId="jmi5wabw"
        dataset="production"/>
      </main>
    </article>
    </PageMargin>
  
  )

}
          
        

export default BlogPost;
