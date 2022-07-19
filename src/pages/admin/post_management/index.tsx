import Button, { ButtonGroup } from "@atlaskit/button";
import DynamicTable from "@atlaskit/dynamic-table";
import AddIcon from "@atlaskit/icon/glyph/add";
import { useNavigate } from "react-router-dom";
import { AdminPageLayout } from "..";
import { deletePost, getPosts } from "../../../store/posts";
import "./post_management.css";
import EditIcon from "@atlaskit/icon/glyph/edit";
import TrashIcon from "@atlaskit/icon/glyph/trash";

export const PostManagement = () => {
  const navigate = useNavigate();

  return (
    <AdminPageLayout pageTitle="Posts Management">
      <>
        <div className="section" style={{ padding: "20px" }}>
          <div
            className="table-filter"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <div className="left"></div>
            <div className="right">
              <ButtonGroup>
                <Button
                  onClick={() => navigate("./add-post")}
                  appearance="primary"
                  iconBefore={<AddIcon label="add" size="small" />}
                >
                  Add new post
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <DynamicTable
            head={{
              cells: [
                { content: "STT" },
                { content: "ID" },
                { content: "Title" },
                { content: "Category" },
                { content: "Created At" },
                { content: "Actions" },
              ],
            }}
            rows={getPosts().map((post, index) => ({
              cells: [
                { content: index + 1 },
                { content: post.id },
                { content: post.title },
                { content: post.category.label },
                { content: post.createdAt },
                {
                  content: (
                    <ButtonGroup>
                      <Button
                        onClick={() => navigate("./edit-post/" + index)}
                        iconBefore={<EditIcon label="edit" size="small" />}
                      >
                        Edit
                      </Button>
                      <Button
                        appearance="danger"
                        onClick={() => {
                          deletePost(index);
                          window.location.reload();
                        }}
                        iconBefore={<TrashIcon label="delete" size="small" />}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  ),
                },
              ],
            }))}
          ></DynamicTable>
        </div>
      </>
    </AdminPageLayout>
  );
};
