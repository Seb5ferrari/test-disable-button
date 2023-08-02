import "./styles.css";
import Home from "./pages/Home";
import Devices from "./pages/Devices";
import Discover from "./pages/Discover";
import NavBar from "./components/NavBar";
import Box from "@mui/material/Box";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Box className={{ Box }}>
        <Outlet />
      </Box>
    </>
  );
};
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/devices",
        element: <Devices />
      },
      {
        path: "/discover",
        element: <Discover />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
    </>
  );
}

export default App;
