"use client";

import Image from "next/image";
import Container from "../Container";
import HeadingBox from "./HeadingBox";
import PlayButton from "../PlayButton";
import ModalVideo from "react-modal-video";
import { useState } from "react";

const Reviews = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section>
      <Container maxWidth="lg">
        <div className="py-20">
          {/* Heading */}
          <HeadingBox
            heading="Student feedback"
            text="Your mission is to bring to life a breathtaking world that captivate and inspire the imagination"
          />

          {/* Members */}
          <div>
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/assets/thumbnail.png"
                alt="Thumbnail"
                width={1000}
                height={500}
                className="w-full mx-auto brightness-75"
              />
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <PlayButton onClick={() => setOpen(true)} />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="qObpRdKt6Q8"
        onClose={() => setOpen(false)}
        youtube={{ autoplay: 1, mute: 1 }}
      />
    </section>
  );
};

export default Reviews;
