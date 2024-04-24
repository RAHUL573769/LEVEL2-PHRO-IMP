import { Toaster } from "react-hot-toast";
import { NavbarDefault } from "./Components/Navbar/Navbar";
import { TabsWithIcon } from "./Components/Tabs/Tabs";

function App() {
  return (
    <div className=" container  mx-auto">
      <NavbarDefault></NavbarDefault>
      <TabsWithIcon></TabsWithIcon>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
