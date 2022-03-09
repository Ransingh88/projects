import './App.css';
import Comment from './Comment';
import comments from './Comments.json'


function App() {
  return (
    <div className="App">
      <h1 className="app__Heading">Comment Section</h1>
      <Comment comments={comments}/>
    </div>
  );
}

export default App;
