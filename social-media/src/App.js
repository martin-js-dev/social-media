
import Sidebar from './components/Sidebar.js';
import Feed from './components/Feed.js';
import Chat from './components/Chat.js';
import PostContainer from './components/PostContainer';
import CreatePost from './components/CreatePost.js';
import './App.css';

function App() {
  return (
    <div className="flex justify-around">
     
      
      <div>
      <Sidebar></Sidebar>
      <Feed></Feed>
      </div>
      <div className="block">
      
      <CreatePost></CreatePost>
      <PostContainer></PostContainer>
      </div>
      <div>
      <Chat></Chat>
      </div>
    </div>
  );
}

export default App;
