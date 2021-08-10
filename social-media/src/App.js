import Stories from './components/Stories.js';
import Sidebar from './components/Sidebar.js';
import Feed from './components/Feed.js';
import Chat from './components/Chat.js';
import './App.css';

function App() {
  return (
    <div className="flex">
     
      <Stories></Stories>
      <Sidebar></Sidebar>
      <Feed></Feed>
      <Chat></Chat>
    </div>
  );
}

export default App;
