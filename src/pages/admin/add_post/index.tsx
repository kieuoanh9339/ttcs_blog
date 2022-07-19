import { useNavigate } from "react-router-dom";
import { AdminPageLayout } from "..";
import { IPost } from "../../../@types";
import { EditPost } from "../../../components/editor";

import { addPost } from "../../../store/posts";

export const AddNewPost = () => {
  const navigate = useNavigate();

  const onSubmit = (post: IPost) => {
    post.createdAt = new Date().toISOString();
    post.id = new Date().getTime();
    addPost(post);
    navigate("/admin");
  };

  return (
    <AdminPageLayout pageTitle="Add new post">
      <EditPost onSubmit={onSubmit} />
    </AdminPageLayout>
  );
};
