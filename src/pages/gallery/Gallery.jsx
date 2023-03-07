import React from "react";
import "./gallery.scss";
import Banner from "../../components/Banner";
import GalleryImg from "../../images/gallery.jpg";
const Gallery = () => {
  const galleryLength = 15;
  const images = [];
  for (let i = 1; i <= galleryLength; i++) {
    images.push(`../public/gallery${i}.jpg`);
  }
  console.log(images);
  return (
    <>
      <Banner title="Our Gallery" image={GalleryImg}>
        The Gallery Gym for people who want more out of their gym experience and results... 190
        Montreal St, Christchurch, New Zealand 8011.
      </Banner>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Gallery;
