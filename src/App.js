import {BrowserRouter, Route , Switch} from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Post from "./Components/Post";
import Project from "./Components/Project";
import SinglePost from "./Components/SinglePost";


function App() {
  return (
    
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route component={Home} path='/' exact/>
      <Route component={About} path='/about'/>
      /* why we put single post above this will try to find full url with slug if not then just render the post page  */
      <Route component={SinglePost} path='/post/:slug'/>
      <Route component={Post} path='/post'/>
      <Route component={Project} path='/project'/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
