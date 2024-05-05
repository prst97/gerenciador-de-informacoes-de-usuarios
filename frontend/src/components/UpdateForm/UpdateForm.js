function UpdateForm({ setAvatar }) {
    return (
      <div className="col-sm-12 col-md-6">
        {/* Conteúdo do formulário de atualização */}
        <form>
          <h4>Atualizar Informações</h4>
          <div className="row">
            <div className="col-12">
              {/* Seção 1 */}
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" className="form-control" id="name" />
              </div>
            </div>
            <div className="col-12">
              {/* Seção 2 */}
              <div className="form-group">
                <label htmlFor="age">Data de Nascimento</label>
                <input type="date" className="form-control" id="age" />
              </div>
            </div>
            <div className="col-12">
              {/* Seção 3 */}
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" />
              </div>
            </div>
            <div className="col-12">
              {/* Seção 4 */}
              <div className="form-group">
                <label htmlFor="bio">Biografia</label>
                <textarea className="form-control" id="bio" rows="3"></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default UpdateForm;
  