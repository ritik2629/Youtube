import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Watch from "./pages/Watch";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children:[
      {
        path:'/',
        element:<MainContainer/>
      },
      {
        path: "/watch",
        element: <Watch />,
      },
    ]
  }
]);

const App = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
