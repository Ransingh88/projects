import { useState } from "react";
import "./App.css";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import { auth, provider } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  const handleSignin = () => {
    auth.signInWithPopup(provider)
      .then(({ user }) => {
      setUser(user)
      })
    .catch(error=>alert(error.message))
  }


  return (
    <div className="App">
      {user ? (<>
        <Header avatar={ user.photoURL}/>
          <Content />
        </>
      ) : (
          <div className="auth">
            <div className="auth__googleDrive">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" alt="drive" height="40%"/>
            <button onClick={handleSignin}>Login to Google Drive</button>
            </div>
        </div>
      )}
    </div>
  );
}

export default App;
