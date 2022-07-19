import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IPost } from "../../@types";
import { getCategories } from "../../store/categories";
import { EntryPicture } from "../entry_picture/entry_picture";
import "./pictures_archived.css";

export interface IPictureArchivedProps {
  posts: IPost[];
}

export const PictureArchived = (props: IPictureArchivedProps) => {
  const [menuShow, setMenuShow] = useState(false);
  const [posts, setPosts] = useState(props.posts);

  return (
    <div className="picture_archived">
      <div className={menuShow ? "category show" : "category"}>
        <div className="all">
          <a
            href={"#all"}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setPosts(props.posts);
            }}
          >
            ALL
          </a>
        </div>
        {getCategories().map((c, i) => (
          <div className={c.slug} key={i}>
            <a
              href={"#" + c.slug}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setPosts(props.posts.filter((p) => p.category.value === c.slug));
              }}
            >
              {c.name.toUpperCase()}
            </a>
          </div>
        ))}
      </div>
      <div className="menu-category">
        <IoMenu fontSize={27} onClick={() => setMenuShow(!menuShow)} />
      </div>
      <div className="list__entry-picture">
        {posts.map((p, i) => (
          <EntryPicture
            key={i}
            backgroundImage={p.thumbnail.url}
            title={p.title}
            category={p.category.label}
            postId={p.id}
          />
        ))}
      </div>
    </div>
  );
};
