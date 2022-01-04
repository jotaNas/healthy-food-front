import { Content } from "./styles";

interface BlogCardProps {
  img: string;
  alt: string;
  title: string;
  avatar: string;
  altAvatar: string;
  avatarName: string;
}

export const BlogCard = (props: BlogCardProps) => {
  return (
    <Content>
      <img src={props.img} alt={props.alt} />
      <div className="info-card">
        <h3>{props.title}</h3>
        <div className="user">
          <img className="user" src={props.avatar} alt={props.altAvatar} />
          <span>{props.avatarName}</span>
        </div>
      </div>
    </Content>
  );
};
