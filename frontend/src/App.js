// App.js
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserInfo from './components/UserInfo/UserInfo';
import UpdateForm from './components/UpdateForm/UpdateForm';

function App() {
  const [avatar, setAvatar] = useState(null); // Estado para armazenar a foto de perfil

  return (
    <div className="container d-flex justify-content-center vh-100">
      <div className="row">
        <UserInfo avatar={avatar} setAvatar={setAvatar} />
        <UpdateForm setAvatar={setAvatar} />
      </div>
    </div>
  );
}

export default App;
