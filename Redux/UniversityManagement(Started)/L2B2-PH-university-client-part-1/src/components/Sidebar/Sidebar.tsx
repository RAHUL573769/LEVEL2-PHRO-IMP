import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sideBarGenerator } from "../../utils/sideBarGenerator";
import { adminPaths } from "../../routes/admin.routes";
const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student"
};
const Sidebar = () => {
  const role = "admin";
  let sideBarItems;
  switch (role) {
    case userRole.ADMIN:
      sideBarItems = sideBarGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sideBarItems = sideBarGenerator(adminPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sideBarItems = sideBarGenerator(adminPaths, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
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
      <div
        style={{
          color: "white",

          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarItems}
      />
    </Sider>
  );
};

export default Sidebar;
