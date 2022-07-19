import { ButtonGroup, LoadingButton } from "@atlaskit/button";
import Form, {
  ErrorMessage,
  Field,
  FormFooter,
  FormSection,
} from "@atlaskit/form";
import Select from "@atlaskit/select";
import TextField from "@atlaskit/textfield";
import { ImageResize } from "quill-image-resize-module-ts";
import { Fragment, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IPost } from "../../@types";
import { getBase64 } from "../../helpers";
import { getCategories } from "../../store/categories";
import "./editor.css";

export interface IEditPostProps {
  post?: IPost;
  onSubmit: (post: IPost) => void;
}

export const EditPost = (props: IEditPostProps) => {
  Quill.register("modules/imageResize", ImageResize);
  const modules = {
    imageResize: {
      modules: ["Resize", "DisplaySize", "Toolbar"],
    },
    toolbar: [
      [
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "link",
        "image",
        "code-block",
      ],
      [{ align: [] }],

      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme

      ["clean"], // remove formatting button
    ],
  };
  const inputRef = useRef(null as any);

  return (
    <div className="edit-single-post" style={{ padding: "0 20px" }}>
      <Form<IPost> onSubmit={props.onSubmit}>
        {({ formProps, submitting }) => {
          return (
            <form {...formProps} style={{ marginBottom: "20px" }}>
              <FormSection>
                <Field
                  name="thumbnail"
                  label="Thumbnail"
                  defaultValue={props.post?.thumbnail || null}
                  isRequired
                  validate={(value) => {
                    if (!value) return "Thumbnail is required";
                  }}
                >
                  {({ fieldProps, error, valid }) => (
                    <Fragment>
                      <TextField
                        {...fieldProps}
                        value={fieldProps.value?.name}
                        onClick={() => inputRef?.current?.click()} //thẻ input trong dom
                        autoComplete="off"
                        isReadOnly
                        placeholder="Choose a thumbnail"
                      />
                      <input
                        ref={inputRef}
                        type="file"
                        accept="image/*"
                        onChange={async ({ target: { files } }) => {
                          //lấy file trong target
                          if (files?.length) {
                            fieldProps.onChange({
                              name: files[0].name,
                              url: await getBase64(files[0]),
                            });
                          }
                        }}
                        hidden
                      />
                      {error && !valid && <ErrorMessage>{error}</ErrorMessage>}
                    </Fragment>
                  )}
                </Field>
                <Field
                  name="title"
                  label="Title of your post"
                  isRequired
                  defaultValue={props.post?.title || ""}
                  validate={(value) => {
                    if (!value) return "Title is required";
                    if (!value.trim()) return "Title cannot be empty";
                  }}
                >
                  {({ fieldProps, error, valid }) => (
                    <Fragment>
                      <TextField
                        placeholder="Title..."
                        autoComplete="off"
                        {...fieldProps}
                      />
                      {error && !valid && <ErrorMessage>{error}</ErrorMessage>}
                    </Fragment>
                  )}
                </Field>
                <Field
                  name="category"
                  label="Category"
                  isRequired
                  validate={(value) => {
                    if (!value) return "Category is required";
                  }}
                  defaultValue={props.post?.category}
                >
                  {({ fieldProps, error, valid }) => (
                    <Fragment>
                      <Select
                        {...fieldProps}
                        options={getCategories().map((c) => ({
                          label: c.name,
                          value: c.slug,
                        }))}
                        onChange={(val) => {
                          fieldProps.onChange(val);
                        }}
                        value={fieldProps.value as any}
                        placeholder="Select category"
                      ></Select>
                      {error && !valid && <ErrorMessage>{error}</ErrorMessage>}
                    </Fragment>
                  )}
                </Field>
                <Field
                  name="content"
                  label="Content of your post"
                  isRequired
                  defaultValue={props.post?.content || ""}
                  validate={(value) => {
                    if (!value) return "Content is required";
                    if (!value.trim()) return "Content cannot be empty";
                  }}
                >
                  {({ fieldProps, error, valid }) => (
                    <Fragment>
                      <div className="wrapper__editor">
                        <ReactQuill
                          theme="snow"
                          modules={modules}
                          placeholder="Write something..."
                          {...fieldProps}
                        />
                      </div>
                      {error && !valid && <ErrorMessage>{error}</ErrorMessage>}
                    </Fragment>
                  )}
                </Field>
              </FormSection>
              <FormFooter>
                <ButtonGroup>
                  <LoadingButton
                    type="submit"
                    appearance="primary"
                    isLoading={submitting}
                  >
                    {props.post?.content ? "Update" : "Add new post"}
                  </LoadingButton>
                </ButtonGroup>
              </FormFooter>
            </form>
          );
        }}
      </Form>
    </div>
  );
};
