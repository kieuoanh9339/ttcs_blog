import { useNavigate } from "react-router-dom";
import "./entry_picture.css";

export interface IEntryPictureProps {
  postId: number | string;
  backgroundImage: string | any;
  title: string;
  category: string;
}

export const EntryPicture = (props: IEntryPictureProps) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => props.postId !== undefined && navigate(`/post/${props.postId}`)} className="entry-picture">
      <div className="entry-picture_pic">
        <img src={props.backgroundImage} alt="mot anh nao do" />
      </div>
      <div className="entry-picture_details">
        <div>
          <p className="title">{props.title}</p>
          <p className="subtitle">{props.category}</p>
        </div>
      </div>
    </div>
  );
};
