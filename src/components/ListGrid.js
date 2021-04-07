import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import Title from "../components/Title.js";
import PageMargin from "../components/PageMargin";

function ListGrid({title,item}) {
  const [itemData, setItemData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "${item}"] | order(_createdAt desc){
                title,
                description,
                slug,
                mainImage {
                    asset -> {
                        _id,
                        url
                    },
                    alt
                },
                date
            }`
      )
      .then((data) => setItemData(data))

      .catch(console.error);
  }, []);

  return (
    <PageMargin>
      <main className="blog">
        <Title title={title} />
        {itemData &&
          itemData.map((item , index) => (
            <article className="blog__items" key={index}>
              <Link
                className="blog__item"
                to={"/post/" + item.slug.current}
                key={item.slug.current}
              >
                <div className="blog__img">
                  <img
                    src={item.mainImage.asset.url}
                    alt={item.mainImage.alt}
                  />
                </div>
                <div className="blog__info">
                  <h3 className="blog__title">{item.title}</h3>
                  <p className="blog__desc">{item.description}</p>
                  <span className="blog__date">
                    {new Date(item.date).toLocaleDateString()}
                  </span>
                </div>
              </Link>
            </article>
          ))}
      </main>
    </PageMargin>
  );
}

export default ListGrid;
