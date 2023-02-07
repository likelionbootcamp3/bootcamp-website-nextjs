import { OUR_TEAM } from "@/constants";
import Image from "next/image";
import Container from "../Container";
import HeadingBox from "./HeadingBox";

const OurTeam = () => {
  return (
    <section className="bg-slate-50">
      <Container maxWidth={"lg"}>
        <div className="py-20">
          {/* Heading */}
          <HeadingBox
            heading="Our Team"
            text="Our mission is to enrich the world with our unwavering commitment to
        excellence and values."
          />

          {/* Members */}
          <div className="grid gap-6 text-center sm:grid-cols-2 md:grid-cols-4">
            {OUR_TEAM.map((member) => (
              <div>
                <Image
                  src={member.image}
                  alt={member.name}
                  height={200}
                  width={200}
                  className="h-auto mx-auto"
                />
                <h4 className="mb-1 font-medium">{member.name}</h4>
                <p className="text-sm text-body-light">{member.jobTitle}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurTeam;
