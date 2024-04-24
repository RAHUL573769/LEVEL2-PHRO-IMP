/* eslint-disable @typescript-eslint/no-unused-vars */

import { sideBarItemsGenerator } from "../../utils/sideBarItemsGenerator";
import { adminPaths2 } from "../../routes/admin.routes";
import { Menu } from "antd";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/studentRoutes";
import Sider from "antd/es/layout/Sider";

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student"
};

const SideBar = () => {
  const role = "student";
  let sidebarItems;
  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sideBarItemsGenerator(adminPaths2, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sideBarItemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = sideBarItemsGenerator(studentPaths, userRole.STUDENT);
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
      <div />

      <div
        style={{
          color: "white",
          textAlign: "center",
          height: "4rem"
        }}
      >
        <h1>P-hero University Management</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        // items={adminSideBarItems}
        items={sideBarItemsGenerator(adminPaths2, "admin")}
      />
    </Sider>
  );
};

export default SideBar;
