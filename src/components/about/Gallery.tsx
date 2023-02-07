"use client";

import PhotoAlbum from "react-photo-album";
import Container from "../Container";
import HeadingBox from "./HeadingBox";
import GalleryImage from "./GalleryImage";
import { GALLERY_PHOTOS } from "@/constants";

const Gallery = () => {
  return (
    <section className="bg-slate-50">
      <Container maxWidth="xl">
        <div className="py-20">
          {/* Heading */}
          <HeadingBox
            heading="Gallery Photos"
            text="The moment when my students achieved their goals after months of hard work and perseverance."
          />

          {/* Members */}
          <div>
            <PhotoAlbum
              layout="rows"
              photos={GALLERY_PHOTOS}
              renderPhoto={GalleryImage}
              spacing={8}
              targetRowHeight={300}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
