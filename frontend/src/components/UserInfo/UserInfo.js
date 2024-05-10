/**
 * Componente funcional para exibir as informações do usuário.
 * Permite ao usuário editar suas informações.
 * Props:
 *   - setIsEditing: função para definir o estado de edição
 *   - user: objeto contendo os dados do usuário
 */
import React from 'react';

function UserInfo({ setIsEditing, user }) {
  return (
    <div>
      {/* Seção de informações do usuário */}
      <div className="col-12 d-flex justify-content-center">
        <div className="row">
          {/* Nome, idade e imagem de perfil */}
          <div className="col-md-12">
            <div className="row d-flex align-items-center">
              <div className="col-2">
                {/* Imagem de perfil do usuário */}
                <div className='profile-photo_container border-container'>
                  <img
                    src={user.avatar}
                    className="profile-photo"
                    alt="Foto de perfil do usuário"
                    hidden={!user.avatar} // Esconde a imagem se não houver avatar
                  />
                </div>
              </div>
              <div className="col-6 name_container">
                {/* Nome e idade do usuário */}
                <br/>
                <h2>{user.nome ? user.nome : "Adicione seu nome"}</h2>
                <hr className="my-1" />
                <h2>{user.idade ? user.idade + " anos" : "Entre sua data de nascimento"}</h2>
              </div>
            </div>
          </div>
          {/* Informações sobre o usuário */}
          <div className="col-md-12 my-4">
            <h4>Informações do usuário</h4>
            <div className="row my-4">
              <div className="col-12">
                {/* Biografia */}
                <h6> <i class="bi bi-pencil-square"></i> Biografia</h6>
                {/* Exibe a biografia do usuário ou uma mensagem se estiver vazia */}
                {user.biografia ? (
                  <div>
                    <div className="biography-container">
                      <p className="biography-text">{user.biografia}</p>
                    </div>
                    <hr className="my-4" />
                  </div>
                ) : (
                  <div>
                    <div className="biography-container">
                      <p className="biography-text">Escreva sua biografia</p>
                    </div>
                    <hr className="my-4" />
                  </div>
                )}
              </div>
              <div className="col-12">
                {/* Data de nascimento */}
                <p>{user.dataDeNascimento ? "Data de nascimento: " + user.dataDeNascimento : "Entre sua data de nascimento"}</p>
                <hr className="my-4" />
              </div>
              <div className="col-12">
                {/* Endereço */}
                <h6 className='mb-3'> <i className="bi bi-house-fill fs-5"/> Endereço</h6>
                {/* Exibe o endereço do usuário ou mensagens se estiver vazio */}
                <p>{user.rua ? user.rua : "Entre com o seu endereço"}  {user.numero ? ", nº " + user.numero  : ""} {", " + user.complemento ? user.complemento : ""}</p>
                <hr className="my-4" />
              </div>
              <div className="col-12">
                {/* Bairro */}
                {/* Exibe o bairro do usuário se estiver definido */}
                {user.bairro && (
                  <div>
                    <p>Bairro {user.bairro}</p>
                    <hr className="my-4" />
                  </div>
                )}
              </div>
              <div className="col-12">
                {/* Cidade e estado */}
                {/* Exibe a cidade e o estado do usuário se estiverem definidos */}
                <p>{user.cidade ? "Cidade " + user.cidade : "" }{user.estado ? ", " + user.estado : "" }</p>
                {/* Adiciona uma linha horizontal condicionalmente com base na presença de dados */}
                {user.cidade && !user.estado && <hr className="my-4" />}
                {!user.cidade && user.estado && <hr className="my-4" />}
                {user.cidade && user.estado && <hr className="my-4" />}
              </div>
            </div>
            {/* Botão de editar */}
            <div className="col-12 d-flex justify-content-center">
              <button
                className="btn btn-primary"
                id="editButton"
                style={{ width: '6em' }}
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
