import React from "react";

import { Layout, MenuProps, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
// import { adminPaths2 } from "../../routes/admin.routes";
// import { sideBarItemsGenerator } from "../../utils/sideBarItemsGenerator";
import SideBar from "./SideBar";

const { Header, Content, Footer} = Layout;

// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   UserOutlined
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`
// }));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <NavLink to="/admin/dashboard">Dashboard</NavLink>
  },
  {
    key: "Profile",
    label: "Profile"
  },
  {
    key: "User Management",
    label: "User Management",
    children: [
      {
        key: "1",
        label: <NavLink to="/admin/create-admin">create admin</NavLink>
      },
      {
        key: "2",
        label: <NavLink to="/admin/create-student">create student</NavLink>
      }
    ]
  }
];

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <SideBar></SideBar>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
