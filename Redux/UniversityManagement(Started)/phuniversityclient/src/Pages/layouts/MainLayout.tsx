import { Layout, Menu, MenuProps, theme } from "antd";
// import { items } from "./SidebarLists/SidebarLists";
import { NavLink, Outlet } from "react-router-dom";
// import { adminSideBarItems } from "../Admin/Admin.routes";
// import { items } from "./SidebarLists/SidebarLists";
// import { items } from "./SidebarLists/SidebarLists";
// import { adminSideBarItems } from "../Admin/Admin.routes";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout: React.FC = () => {
  const items: MenuProps["items"] = [
    {
      key: "Dashboard",
      label: <NavLink to="/admin/dashboard">Dashboard</NavLink>
    },
    {
      key: "Profile",
      label: "profile"
    },
    {
      key: "UserManagement",
      label: "User-Management",
      children: [
        {
          key: "create-admin",
          label: <NavLink to="/admin/create-admin">Create Admin</NavLink>
        },
        {
          key: "create-student",
          label: <NavLink to="/admin/create-student">Create Student</NavLink>
        }
      ]
    }
  ];

  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
          // items={adminSideBarItems}
        />
      </Sider>
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
