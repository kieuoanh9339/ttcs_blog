import PageHeader from "@atlaskit/page-header";
import { Content, LeftSidebar, Main, PageLayout } from "@atlaskit/page-layout";
import React from "react";
import { SidebarNavigation } from "../../components/admin/sidebar-navigation";

export interface IAdminPageLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

export const AdminPageLayout = (props: IAdminPageLayoutProps) => {
  return (
    <PageLayout>
      <Content>
        <LeftSidebar width={300}>
          <SidebarNavigation />
        </LeftSidebar>
        <Main>
          <div className="page-title" style={{ padding: "0 20px" }}>
            <PageHeader>{props.pageTitle}</PageHeader>
          </div>
          {props.children}
        </Main>
      </Content>
    </PageLayout>
  );
};
