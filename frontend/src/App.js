// App.js
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserInfo from './components/UserInfo/UserInfo';
import UpdateForm from './components/UpdateForm/UpdateForm';

function App() {
  const [avatar, setAvatar] = useState(""); // Estado para armazenar a foto de perfil
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="container d-flex justify-content-center vh-100">
      <div className="row">
        <UserInfo avatar={avatar} setAvatar={setAvatar} isEditing={isEditing} setIsEditing={setIsEditing}/>
        <UpdateForm avatar={avatar} setAvatar={setAvatar} isEditing={isEditing} setIsEditing={setIsEditing}/>
      </div>
    </div>
  );
}

export default App;
