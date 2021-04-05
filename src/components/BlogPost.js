import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../client.js'
// import BlockContent from "@sanity/block-content-to-react";

function BlogPost() {
    const [singlePost, setSinglePost] = useState(null)
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset-> {
                    _id,
                    url
                },
                alt
            },
            body,
        }`)
        .then((data) => setSinglePost(data[0]))
        .catch(console.error)
    }, [slug])

    if (!singlePost) return <div>Loading...</div>;

    return (
        <article className="post">
            <header className="post__header">
                <img className="post__img" src={singlePost.mainImage.asset.url} alt={singlePost.mainImage.alt}/>
                <h2 className="post__title">{singlePost.title}</h2>
            </header>
            <main>
                {/* <BlockContent /> */}
            </main>
        </article>
    )
}

export default BlogPost
