// Importações de módulos e estilos
import { useState } from 'react';
import "dotenv/config";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// Importações de componentes personalizados
import UserInfo from './components/UserInfo/UserInfo';
import UpdateForm from './components/UpdateForm/UpdateForm';

// Importação do hook personalizado
import useUser from './hooks/useUser/useUser';

// Componente principal da aplicação
function App() {
  // Utiliza o hook useUser para obter os dados do usuário e a função fetchUser
  const { user, fetchUser } = useUser();

  // Estado para controlar se o usuário está editando suas informações
  const [isEditing, setIsEditing] = useState(false);

  // Renderiza o componente UserInfo se o usuário não estiver editando, caso contrário, renderiza UpdateForm
  return (
    <div className="container justify-content-center">
      {isEditing ? (
        <UpdateForm user={user} fetchUser={fetchUser} setIsEditing={setIsEditing} />
      ) : (
        <UserInfo user={user} setIsEditing={setIsEditing} />
      )}
    </div>
  );
}

// Exporta o componente App
export default App;
