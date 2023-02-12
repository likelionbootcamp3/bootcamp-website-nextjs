import path from "path";

export const MDX_RELATIVE_PATH = "src/mdx";
export const MDX_ABSOLUTE_PATH = path.join(process.cwd(), MDX_RELATIVE_PATH);

export const BRAND_NAME = "LIKELION BOOTCAMP";
export const BACKUP_LESSON_BANNER =
  "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80";

export const OUR_TEAM = [
  {
    name: "Tien Tran",
    jobTitle: "Team Lead",
    image:
      "/assets/people/icons8-brown-curly-hair-lady-in-light-green-shirt.svg",
  },
  {
    name: "Te Hoang",
    jobTitle: "Teaching Assistant",
    image: "/assets/people/icons8-man-in-green-sweater.svg",
  },

  {
    name: "Trang Le",
    jobTitle: "Teaching Assistant",
    image: "/assets/people/icons8-brown-long-hair-lady-with-red-glasses.svg",
  },
  {
    name: "Phuc Nguyen",
    jobTitle: "Teaching Assistant",
    image: "/assets/people/icons8-man-in-white-shirt.svg",
  },
];

export const GALLERY_PHOTOS = [
  {
    src: "/assets/gallery/image_1.jpeg",
    width: 2048,
    height: 1330,
    title: "LikeLion Bootcamp 3",
  },
  {
    src: "/assets/gallery/image_2.jpeg",
    width: 1200,
    height: 628,
    title: "LikeLion Us",
  },
  {
    src: "/assets/gallery/image_3.jpeg",
    width: 2048,
    height: 1152,
    title: "LikeLion Bootcamp 2",
  },
  {
    src: "/assets/gallery/image_4.jpeg",
    width: 2048,
    height: 1195,
    title: "LikeLion X USSH",
  },
  {
    src: "/assets/gallery/image_5.jpeg",
    width: 2021,
    height: 993,
    title: "LikeLion X UIT",
  },
];
