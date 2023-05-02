import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Watch from "./pages/Watch";
import MainContainer from "./components/MainContainer";
import Result from "./components/Result";
import Filter from "./pages/Filter";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:
    <>
    <Header/>
    <Body />
    </>,
    children:[
      {
        path:'/',
        element:<MainContainer/>
      },
      {
        path: "/watch",
        element: <Watch />,
      },
      {
        path: "/result",
        element: <Result />,
      },
      {
        path: "/filter",
        element: <Filter />,
      },
    ]
  }
]);

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
