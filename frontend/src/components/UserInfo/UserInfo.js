function UserInfo({ avatar, setAvatar }) {
    return (
      <div className="col-sm-12 col-md-6">
        coluna 1
        {/* Conteúdo da seção de informações do usuário */}
        <div className="row">
          {/* Nome, idade e imagem de perfil */}
          <div className="col-md-6">
            <h4>Perfil do usuário</h4>
            <div className="row">
              <div className="col-6">
                {/* Imagem de perfil do usuário */}
                <p>Imagem de perfil</p>
              </div>
              <div className="col-6">
                {/* Nome e idade do usuário */}
                <p>Nome <br/> Idade </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
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
          </div>
        </div>
      </div>
    );
  }
  
  export default UserInfo;
  