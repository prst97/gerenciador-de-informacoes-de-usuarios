import React from 'react';

function UserInfo({ avatar, setIsEditing, nome, idade, dataDeNascimento, dataDeNascimentoUserInfo, rua, numero, complemento, bairro, cidade, estado, biografia }) {
  return (
    <div>
        <div className="col-12 d-flex justify-content-center">
          {/* Conteúdo da seção de informações do usuário */}
          <div className="row">
            {/* Nome, idade e imagem de perfil */}
            <div className="col-md-12">
              <div className="row d-flex align-items-center">
                <div className="col-2">
                  {/* Imagem de perfil do usuário */}
                  <div className='profile-photo_container border-container'>
                    <img
                      src={avatar}
                      className="profile-photo"
                      alt="Foto de perfil do usuário"
                      hidden={!avatar}
                    />
                  </div>
                </div>
                <div className="col-6 name_container">
                  {/* Nome e idade do usuário */}
                  <br/>
                  <h2>{nome ? nome : "Adicione seu nome"}</h2>
                  <h2>{idade ? idade + " anos" : "Entre sua data de nascimento"}</h2>
                </div>
              </div>
            </div>
            <div className="col-md-12 my-4">
              {/* Informações sobre o usuário */}
              <h4>Informações do usuário</h4>
              <div className="row my-4">
                <div className="col-12">
                  {/* Biografia */}
                  {biografia ? (
                    <div>
                      <h6>Biografia</h6>
                      <div className="biography-container">
                        <p className="biography-text">{biografia}</p>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ) : (
                    <div>
                      <h6>Biografia</h6>
                      <div className="biography-container">
                        <p className="biography-text">Escreva sua biografia</p>
                      </div>
                      <hr className="my-4" />
                    </div>
                  )}
                </div>
                <div className="col-12">
                  {/* Data de nascimento */}
                  <p> {dataDeNascimentoUserInfo ? "Data de nascimento: " + dataDeNascimentoUserInfo : "Entre sua data de nascimento"}</p>
                  <hr className="my-4" />
                </div>
                <div className="col-12">
                  {/* Rua e número */}
                  <p>{rua ? rua : "Entre com o seu endereço"}  {numero ? ", nº " + numero  : ""} {", " + complemento ? complemento : ""}</p>
                  <hr className="my-4" />
                </div>
                <div className="col-12">
                  {/* Bairro */}
                  {bairro && (
                    <div>
                      <p>Bairro {bairro}</p>
                      <hr className="my-4" />
                    </div>
                  )}
                </div>
                <div className="col-12">
                  {/* Cidade e estado */}
                  {cidade && estado && (
                    <div>
                      <p>Cidade {cidade}, {estado}</p>
                      <hr className="my-4" />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center">
                {/* Botão de editar */}
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
