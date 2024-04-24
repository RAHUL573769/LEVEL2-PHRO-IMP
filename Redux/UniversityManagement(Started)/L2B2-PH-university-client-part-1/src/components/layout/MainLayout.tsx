import { Layout } from "antd";

import Layouts from "../Sidebar/Layouts";
import Sidebar from "../Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar></Sidebar>

      <Layouts></Layouts>
    </Layout>
  );
};

export default MainLayout;
