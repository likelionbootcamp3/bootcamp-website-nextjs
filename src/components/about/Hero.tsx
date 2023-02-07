import Image from "next/image";
import Container from "../Container";

const Hero = () => {
  return (
    <section>
      <Container maxWidth="xl">
        <div className="grid items-center gap-4 py-4 md:grid-cols-2 md:py-10">
          {/* Text */}
          <div>
            <div>
              <p className="flex items-center gap-4 mb-4">
                <Image
                  src="/assets/animals/Artboard 41.svg"
                  alt="Animal Icon"
                  width={24}
                  height={24}
                />
                <span className="text-sm font-medium tracking-widest uppercase">
                  My name is Huy
                </span>
              </p>
              <h1 className="text-4xl font-bold md:text-5xl">
                I'm a Software Engineer
              </h1>
              <p className="mt-6 leading-loose text-body-light md:max-w-lg">
                I have a passion for a range of creative endeavors including
                music, sports, and most notably, coding. This blend of interests
                has culminated in my current role where I focus on building
                developer communities.
              </p>
            </div>
          </div>

          {/* Image */}
          <div>
            <Image
              src={"/assets/people/icons8-man-in-striped-shirt.svg"}
              alt="Avatar"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
