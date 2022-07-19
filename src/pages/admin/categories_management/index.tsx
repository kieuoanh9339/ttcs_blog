import Button, { ButtonGroup, LoadingButton } from "@atlaskit/button";
import DynamicTable from "@atlaskit/dynamic-table";
import Form, { ErrorMessage, Field, FormFooter } from "@atlaskit/form";
import AddIcon from "@atlaskit/icon/glyph/add";
import Modal, { ModalBody, ModalHeader, ModalTitle, ModalTransition } from "@atlaskit/modal-dialog";
import TextField from "@atlaskit/textfield";
import { Fragment, useState } from "react";
import { AdminPageLayout } from "..";
import { ICategory } from "../../../@types";
import { addCategory, findCategoryBySlug, getCategories } from "../../../store/categories";

export const CategoriesManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState(getCategories());

  const onAddNewCategory = (): void => {
    setCategories(getCategories());
  };

  return (
    <AdminPageLayout pageTitle="Categories Management">
      <>
        <div className="section" style={{ padding: "20px" }}>
          <div
            className="table-filter"
            style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}
          >
            <div className="left" style={{ minWidth: "200px" }}></div>
            <div className="right">
              <ButtonGroup>
                <Button
                  onClick={() => setIsOpen(true)}
                  appearance="primary"
                  iconBefore={<AddIcon label="add" size="small" />}
                >
                  Add new category
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <DynamicTable
            head={{
              cells: [{ content: "STT" }, { content: "Slug" }, { content: "Name" }, { content: "Created At" }],
            }}
            rows={categories.map((c, i) => ({
              key: c.slug,
              cells: [
                { content: i + 1 },
                { content: c.slug },
                { content: c.name },
                { content: new Date(c.createdAt).toUTCString() },
              ],
            }))}
          ></DynamicTable>
        </div>
        <div className="modal">
          {isOpen && <>Hello</> && (
            <ModalCreateCategory onAddNew={onAddNewCategory} handleClose={() => setIsOpen(false)} />
          )}
        </div>
      </>
    </AdminPageLayout>
  );
};

interface IModalCreateCateforyProps {
  handleClose: () => void;
  onAddNew?: () => void;
}
const ModalCreateCategory = (props: IModalCreateCateforyProps) => {
  const handleSubmit = (data: ICategory) => {
    data.createdAt = new Date().toISOString();
    data.name = data.name.trim();
    const exist = findCategoryBySlug(data.slug);
    if (!exist) {
      addCategory(data);
      props.onAddNew && props.onAddNew();
      props.handleClose();
    }
  };

  return (
    <ModalTransition>
      <Modal onClose={props.handleClose}>
        <ModalHeader>
          <ModalTitle>Add new category</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form<ICategory> onSubmit={handleSubmit}>
            {({ formProps, submitting }) => {
              return (
                <form {...formProps} style={{ marginBottom: "20px" }}>
                  <div>
                    <Field
                      name="slug"
                      label="Slug"
                      isRequired
                      defaultValue={""}
                      validate={(value) => {
                        if (!value) {
                          return "Slug is required";
                        }
                        if (!/^[a-z0-9-]+$/.test(value)) {
                          return "Slug can only contain lowercase letters, numbers and '-'";
                        }
                        if (findCategoryBySlug(value)) {
                          return "Slug is already exist";
                        }
                      }}
                    >
                      {({ fieldProps, error, valid }) => {
                        return (
                          <Fragment>
                            <TextField placeholder="Slug..." autoComplete="off" {...fieldProps}></TextField>
                            {error && !valid && <ErrorMessage>{error}</ErrorMessage>}
                          </Fragment>
                        );
                      }}
                    </Field>
                    <Field
                      name="name"
                      label="Category name"
                      isRequired
                      defaultValue={""}
                      validate={(value) => {
                        if (!value) {
                          return "Name is required";
                        }
                      }}
                    >
                      {({ fieldProps, error, valid }) => {
                        return (
                          <Fragment>
                            <TextField placeholder="Category name..." autoComplete="off" {...fieldProps}></TextField>
                            {error && !valid && <ErrorMessage>{error}</ErrorMessage>}
                          </Fragment>
                        );
                      }}
                    </Field>
                  </div>
                  <FormFooter>
                    <ButtonGroup>
                      <Button onClick={props.handleClose}>Cancel</Button>
                      <LoadingButton type="submit" appearance="primary" isLoading={submitting}>
                        Add
                      </LoadingButton>
                    </ButtonGroup>
                  </FormFooter>
                </form>
              );
            }}
          </Form>
        </ModalBody>
      </Modal>
    </ModalTransition>
  );
};
