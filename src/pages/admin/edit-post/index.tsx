import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminPageLayout } from "..";
import { IPost } from "../../../@types";
import { EditPost } from "../../../components/editor";

import { getPostByIndex, updatePostByIndex } from "../../../store/posts";

export const EditPostById = () => {
  const navigate = useNavigate();
  const { id } = useParams(); //id tu link
  const [post, setPost] = useState(null as IPost | null);

  useEffect(() => {
    if (id) {
      const p = getPostByIndex(parseInt(id, 10));
      if (p) setPost(p);
      else navigate("/admin");
    } else {
      navigate("/admin");
    }
  }, []);

  const onSubmit = (post: IPost) => {
    if (id) {
      updatePostByIndex(parseInt(id, 10), post);
      navigate("/admin");
    }
  };

  return (
    (post && (
      <AdminPageLayout pageTitle={"Update post " + post.id}>
        <EditPost onSubmit={onSubmit} post={post} />
      </AdminPageLayout>
    )) || <></>
  );
};
