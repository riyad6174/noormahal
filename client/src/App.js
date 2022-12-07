
import "swiper/css/bundle";
import HomePage from './Pages/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
 
 
} from "react-router-dom";
import WeedingAndEvents from './Pages/WeedingAndEvents';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "wedding",
    element: <WeedingAndEvents />,
  }
]);
function App() {
  return (
    <div>
     
     <RouterProvider router={router}/>
   
    </div>
  );
}

export default App;
