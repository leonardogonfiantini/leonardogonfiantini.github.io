import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/home";
import Posts from "./pages/posts/posts";
import Works from "./pages/works/works";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="posts" element={<Posts />} />
            <Route path="works" element={<Works />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
