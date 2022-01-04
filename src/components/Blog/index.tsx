import { Container, Content, Item, Title } from "./styles";
import Carousel from "react-elastic-carousel";
import blogImg1 from "../../assets/blog_image_1.svg";
import blogImg2 from "../../assets/blog_image_2.svg";
import blogImg3 from "../../assets/blog_image_3.svg";
import blogImg4 from "../../assets/blog_image_4.svg";
import userImg1 from "../../assets/userImg01.jpg";
import userImg2 from "../../assets/userImg02.jpg";
import userImg3 from "../../assets/userImg03.jpg";
import userImg4 from "../../assets/userImg04.jpg";
import { BlogCard } from "../BlogCard";

const cards = [
  {
    id: 1,
    img: blogImg1,
    alt: "texto alternativo 1",
    title: "Quick-start guide to nuts and seeds",
    avatar: userImg1,
    altAvatar: "texto alternativo avatar",
    avatarName: "Kevin Ibrahim",
  },
  {
    id: 2,
    img: blogImg2,
    alt: "texto alternativo 1",
    title: "Quick-start guide to nuts and seeds",
    avatar: userImg2,
    altAvatar: "texto alternativo avatar",
    avatarName: "Kevin Ibrahim",
  },
  {
    id: 3,
    img: blogImg3,
    alt: "texto alternativo 1",
    title: "Quick-start guide to nuts and seeds",
    avatar: userImg3,
    altAvatar: "texto alternativo avatar",
    avatarName: "Kevin Ibrahim",
  },
  {
    id: 4,
    img: blogImg4,
    alt: "texto alternativo 1",
    title: "Quick-start guide to nuts and seeds",
    avatar: userImg4,
    altAvatar: "texto alternativo avatar",
    avatarName: "Kevin Ibrahim",
  },
  // coloque mais objetos aqui como o de cima, por examplo
];

export const Blog = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];

  return (
    <Container id="blog">
      <Title>
        <h2>Read Our Blog</h2>
        <p>
          Far far away, behind the word mountains, far from the countries <br />
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </Title>
      <Content>
        <Carousel isRTL={false} breakPoints={breakPoints}>
          <BlogCard
            img={blogImg1}
            alt="texto alternativo 1"
            title="Quick-start guide
            to nuts and seeds"
            avatar={userImg1}
            avatarName="Kevin Ibrahim"
            altAvatar="texto alternativo avatar"
          ></BlogCard>

          <BlogCard
            img={blogImg2}
            alt="texto alternativo 1"
            title="Nutrition: Tips for
            Improving Your Health"
            avatar={userImg2}
            avatarName="Mike Jackson"
            altAvatar="texto alternativo avatar"
          ></BlogCard>
          <BlogCard
            img={blogImg3}
            alt="texto alternativo 1"
            title="The top 10 benefits
            of eating healthy"
            avatar={userImg3}
            avatarName="Bryan McGregor"
            altAvatar="texto alternativo avatar"
          ></BlogCard>
          <BlogCard
            img={blogImg4}
            alt="texto alternativo 1"
            title="What Makes a
            Healthy Diet?"
            avatar={userImg4}
            avatarName="Jashua"
            altAvatar="texto alternativo avatar"
          ></BlogCard>
          <BlogCard
            img={blogImg1}
            alt="texto alternativo 1"
            title="Quick-start guide
            to nuts and seeds"
            avatar={userImg1}
            avatarName="Kevin Ibrahim"
            altAvatar="texto alternativo avatar"
          ></BlogCard>

          <BlogCard
            img={blogImg2}
            alt="texto alternativo 1"
            title="Nutrition: Tips for
            Improving Your Health"
            avatar={userImg2}
            avatarName="Mike Jackson"
            altAvatar="texto alternativo avatar"
          ></BlogCard>
          <BlogCard
            img={blogImg3}
            alt="texto alternativo 1"
            title="The top 10 benefits
            of eating healthy"
            avatar={userImg3}
            avatarName="Bryan McGregor"
            altAvatar="texto alternativo avatar"
          ></BlogCard>
          <BlogCard
            img={blogImg4}
            alt="texto alternativo 1"
            title="What Makes a
            Healthy Diet?"
            avatar={userImg4}
            avatarName="Jashua"
            altAvatar="texto alternativo avatar"
          ></BlogCard>
        </Carousel>
      </Content>
    </Container>
  );
};
