import { Introduce } from "../../components/introduce";
import { PictureArchived } from "../../components/pictures_archived";
import { getPosts } from "../../store/posts";

export const Home = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Introduce />
        <PictureArchived posts={getPosts()} />
      </div>
    </div>
  );
};
