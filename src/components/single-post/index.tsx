import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IPost } from "../../@types";
import { getPosts } from "../../store/posts";
import "./single-post.css";

export const SinglePost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(null as IPost | null);

  useEffect(() => {
    if (!id || !/^[0-9]+$/.test(id))
      return navigate("/not-found", { replace: true });
    const p = getPosts().find((p) => p.id === parseInt(id, 10));
    if (!p) return navigate("/not-found", { replace: true });
    setPost(p);
  }, [id, navigate]);

  return (
    (post && (
      <div className="single-post">
        <div className="post-entry__header">
          <h1 className="title">{post.title}</h1>
          <small className="subtitle">
            Created at{" "}
            <strong>
              {new Date(post.createdAt as string).toLocaleString()}
            </strong>{" "}
            in <strong>{post.category.label}</strong>
          </small>
        </div>
        <div
          className="main-content ql-editor"
          dangerouslySetInnerHTML={{ __html: post.content }} // React-quill trả về nội dung là html -> muốn hiển thị bài viết đúng định dạng thì ở đây phải gán inner html cho thẻ này bằng nội dung react-quill trả về
        ></div>
      </div>
    )) || <></>
  );
};
