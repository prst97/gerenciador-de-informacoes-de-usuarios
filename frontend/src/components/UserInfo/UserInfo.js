function UserInfo({ avatar, setAvatar, isEditing, setIsEditing }) {
  return (
    <div>
      {isEditing === false ? (
        <div className="col-12 d-flex justify-content-center">
          {/* Conteúdo da seção de informações do usuário */}
          <div className="row">
            {/* Nome, idade e imagem de perfil */}
            <div className="col-md-12">
              <h4>Perfil do usuário</h4>
              <div className="row">
                <div className="col-6">
                  {/* Imagem de perfil do usuário */}
                  <img
                    src={avatar}
                    className="img-fluid border-container"
                    style={{
                      borderRadius: "50%",
                      height: '10em',
                      width: '12em'
                    }}
                    alt="Foto de perfil do usuário"
                  />
                </div>
                <div className="col-4">
                  {/* Nome e idade do usuário */}
                  <p>
                    Nome <br /> Idade{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              {/* Informações sobre o usuário */}
              <h4>Informações do usuário</h4>
              <div className="row">
                <div className="row">
                  {/* Biografia */}
                  <p>Biografia</p>
                </div>
                <div className="row">
                  {/* Data de nascimento */}
                  <p>Data de nascimento</p>
                </div>
                <div className="row">
                  {/* Rua e número */}
                  <p>Rua e número</p>
                </div>
                <div className="row">
                  {/* Bairro */}
                  <p>Bairro</p>
                </div>
                <div className="row">
                  {/* Cidade e estado */}
                  <p>Cidade, Estado</p>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center">
                {/* Botão de editar */}
                <button
                  className="btn btn-primary"
                  id="editButton"
                  style={{ width: "6em" }}
                  onClick={() => setIsEditing(true)} // Adicione o onClick aqui
                >
                  Editar
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Formulário de edição (implemente aqui) */}
        </div>
      )}
    </div>
  );
}

export default UserInfo;
