import QueuesIcon from "@atlaskit/icon/glyph/queues";
import { ButtonItem, NestableNavigationContent, Section, SideNavigation } from "@atlaskit/side-navigation";
import { useNavigate } from "react-router-dom";
import logo from "../../../pictures/logo.png";

export const SidebarNavigation = () => {
  const navigate = useNavigate();

  return (
    <SideNavigation label="admin">
      <NestableNavigationContent>
        <Section>
          <img
            src={logo}
            width="50"
            alt="logo"
            style={{
              margin: "0 auto",
              padding: "20px 0",
            }}
          />
        </Section>
        <Section>
          <ButtonItem onClick={() => navigate("/admin")} iconBefore={<QueuesIcon label="Hello" />}>
            Manage Posts
          </ButtonItem>
          <ButtonItem onClick={() => navigate("/admin/manage-categories")} iconBefore={<QueuesIcon label="Hello" />}>
            Manage Categories
          </ButtonItem>
        </Section>
      </NestableNavigationContent>
    </SideNavigation>
  );
};
