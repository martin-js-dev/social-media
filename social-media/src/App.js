import Nav from './components/Nav.js';
import Stories from './components/Stories.js';
import Sidebar from './components/Sidebar.js';
import Timeline from './components/Timeline';
import Chat from './components/Chat.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Stories></Stories>
      <Sidebar></Sidebar>
      <Timeline></Timeline>
      <Chat></Chat>
    </div>
  );
}

export default App;
