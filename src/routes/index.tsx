import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { AboutMe } from "../components/about-me";
import { Navigation } from "../components/navigation";
import { SinglePost } from "../components/single-post";
import { AddNewPost } from "../pages/admin/add_post";
import { CategoriesManagement } from "../pages/admin/categories_management";
import { EditPostById } from "../pages/admin/edit-post";
import { PostManagement } from "../pages/admin/post_management";
import { Contact } from "../pages/contact";
import { Home } from "../pages/home";
import { NotFoundPage } from "../pages/not-found";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Outlet />
            </>
          }
        >
          <Route path="" element={<Home />} />
          <Route path="post/:id" element={<SinglePost />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="contact" element={<Contact />}></Route>
        </Route>
        <Route path="/admin">
          <Route path="" element={<PostManagement />} />
          <Route path="manage-categories" element={<CategoriesManagement />} />
          <Route path="add-post" element={<AddNewPost />}></Route>
          <Route path="edit-post/:id" element={<EditPostById />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
