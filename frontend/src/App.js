import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserInfo from './components/UserInfo/UserInfo';
import UpdateForm from './components/UpdateForm/UpdateForm';

function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0)
  const [dataDeNascimento, setDataDeNascimento] = useState("");
  const [dataDeNascimentoUserInfo, setDataDeNascimentoUserInfo] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [biografia, setBiografia] = useState("");
  const [avatar, setAvatar] = useState(""); // Estado para armazenar a foto de perfil
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="container justify-content-center">
      {isEditing === false ? (
        <UserInfo 
          avatar={avatar} 
          setIsEditing={setIsEditing}
          nome={nome}
          idade={idade}
          dataDeNascimento={dataDeNascimento}
          dataDeNascimentoUserInfo={dataDeNascimentoUserInfo}
          rua={rua}
          numero={numero}
          complemento={complemento}
          bairro={bairro}
          cidade={cidade}
          estado={estado}
          biografia={biografia}
        />
        ) : (
        <UpdateForm 
          avatar={avatar} 
          setAvatar={setAvatar} 
          setIsEditing={setIsEditing}
          nome={nome}
          setNome={setNome}
          idade={idade}
          setIdade={setIdade}
          dataDeNascimento={dataDeNascimento}
          setDataDeNascimento={setDataDeNascimento}
          setDataDeNascimentoUserInfo={setDataDeNascimentoUserInfo}
          biografia={biografia}
          setBiografia={setBiografia}
          rua={rua}
          setRua={setRua}
          numero={numero}
          setNumero={setNumero}
          complemento={complemento}
          setComplemento={setComplemento}
          bairro={bairro}
          setBairro={setBairro}
          cidade={cidade}
          setCidade={setCidade}
          estado={estado}
          setEstado={setEstado}
        />
      )}
    </div>
  );
}

export default App;
