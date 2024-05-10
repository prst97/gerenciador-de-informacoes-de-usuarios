/**
 * Componente funcional para exibir e editar as informações do usuário.
 * Permite ao usuário atualizar seus dados pessoais.
 * Props:
 *   - user: objeto contendo os dados do usuário
 *   - setUser: função para definir o estado do usuário
 *   - setIsEditing: função para definir o estado de edição
 *   - fetchUser: função para buscar os dados do usuário
 */
import React, { useState } from "react";
import FileInput from "../FileInput/FileInput.js";
import ImageCropper from "../ImageCropper/ImageCropper.js";
import AddressInput from "../AddressInput/AddressInput.js";
import AgeCalculator from "../../utils/AgeCalculator/AgeCalculator.js";
import DateFormat from "../../utils/DateFormat/DateFormat.js";
import UpdateUser from "../../utils/UpdateUser/UpdateUser.js";
import DateConvert from "../../utils/DateConvert/DateConvert.js";

function UpdateForm({ user, setUser, setIsEditing, fetchUser }) {
  // Estados para controlar o fluxo do formulário e os dados do usuário
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [nome, setNome] = useState(user.nome);
  const [dataDeNascimento, setDataDeNascimento] = useState(
    DateConvert(user.dataDeNascimento)
  );
  const [rua, setRua] = useState(user.rua);
  const [numero, setNumero] = useState(user.numero === 0 ? '' : user.numero);
  const [bairro, setBairro] = useState(user.bairro);
  const [complemento, setComplemento] = useState(user.complemento);
  const [cidade, setCidade] = useState(user.cidade);
  const [estado, setEstado] = useState(user.estado);
  const [biografia, setBiografia] = useState(user.biografia);
  const [avatar, setAvatar] = useState(user.avatar);

  // Função para lidar com a seleção de imagem
  function onImageSelected(selectedImg) {
    setAvatar(selectedImg);
    setCurrentPage("crop-img");
  }

  // Função para lidar com o término do recorte de imagem
  const onCropDone = (imgCroppedArea) => {
    // Cria um elemento de canvas para recortar a imagem
    const canvasElement = document.createElement("canvas");
    canvasElement.width = imgCroppedArea.width;
    canvasElement.height = imgCroppedArea.height;

    const context = canvasElement.getContext("2d");

    // Carrega a imagem original e a recorta com base na área selecionada
    let imageObj1 = new Image();
    imageObj1.src = avatar;
    imageObj1.onload = function () {
      context.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );

      // Converte a imagem recortada em URL base64
      const dataURL = canvasElement.toDataURL("image/jpeg");

      // Atualiza o estado do avatar com a imagem recortada
      setAvatar(dataURL);
      setCurrentPage("img-cropped");
    };
  };

  // Função para cancelar o recorte de imagem
  const onCropCancel = () => {
    setCurrentPage("choose-img");
  };

  // Função para lidar com a mudança no nome
  function nomeOnChange(e) {
    setNome(e.target.value);
  }

  // Função para lidar com a mudança na data de nascimento
  function dataDeNascimentoOnChange(e) {
    setDataDeNascimento(e.target.value);
  }

  // Função para lidar com a mudança na biografia
  function biografiaOnChange(e) {
    setBiografia(e.target.value);
  }

  // Função para lidar com a mudança no complemento do endereço
  function complementoOnChange(e) {
    setComplemento(e.target.value);
  }

  // Função para lidar com o envio do formulário
  async function onSubmit(e) {
    e.preventDefault();
    // Validação dos campos obrigatórios
    if (!rua || !numero) {
      alert("Por favor, preencha os campos de endereço.");
      return;
    }
    if (!nome || !dataDeNascimento) {
      alert("Por favor, preencha seus dados.");
      return;
    }

    // Formata a data de nascimento 
    const formattedDate = DateFormat(dataDeNascimento);

    // Cria um objeto para atualizar as informações do usuário
    const updateData = {
      nome: nome,
      idade: AgeCalculator(dataDeNascimento), // Calcula a idade
      dataDeNascimento: formattedDate,
      rua: rua,
      numero: numero,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      biografia: biografia,
      avatar: avatar,
    };

    // Atualiza os dados do usuário
    await UpdateUser(user._id, updateData, setUser);
    // Busca os novos dados do usuário
    fetchUser();
    // Sai do modo de edição
    await setIsEditing(false);
  }

  // Função para cancelar a edição
  function onCancel() {
    setIsEditing(false);
  }

  return (
    <div>
      <div className="col-12">
        {/* Formulário de atualização */}
        <form onSubmit={onSubmit} onKeyPress={(e) => e.key === 'Enter' && onSubmit(e)}>
          <div className="row">
            <div className="col-12">
              <h4>Atualizar Informações</h4>
              <div className="form-group my-4">
                {/* Seleção de foto de perfil */}
                {currentPage === "choose-img" ? (
                  <FileInput onImageSelected={onImageSelected} />
                ) : currentPage === "crop-img" ? (
                  <ImageCropper
                    avatar={avatar}
                    onCropDone={onCropDone}
                    onCropCancel={onCropCancel}
                  />
                ) : (
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="profile-photo_container">
                      <img
                        className="img-fluid profile-photo"
                        src={avatar}
                        alt="Foto de perfil selecionada"
                      />
                    </div>
                    <FileInput onImageSelected={onImageSelected} />
                  </div>
                )}
              </div>
            </div>
            {/* Campos de entrada */}
            <div className="col-md-6">
              {/* Nome */}
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={nome}
                  onChange={nomeOnChange}
                />
                <hr className="my-4" />
              </div>
            </div>
            <div className="col-md-6">
              {/* Data de nascimento */}
              <div className="form-group">
              <span>Data de Nascimento</span>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span className="input-group-text" id="birthday_icon">
                      <i className="bi bi-cake2 fs-6" />
                    </span>
                  </div>
                  <input
                  type="date"
                  className="form-control"
                  id="birthday"
                  value={dataDeNascimento}
                  onChange={dataDeNascimentoOnChange}
                />
                </div>
                <hr className="my-4" />
              </div>
            </div>
            <div className="col-12">
              {/* Endereço */}
              <div className="form-group">
                <p>Endereço</p>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span className="input-group-text" id="address_add_icon">
                      <i className="bi bi-house-add fs-5" />
                    </span>
                  </div>
                  <AddressInput
                    setRua={setRua}
                    setNumero={setNumero}
                    setBairro={setBairro}
                    setCidade={setCidade}
                    setEstado={setEstado}
                  />
                </div>
                <hr className="my-4" />
              </div>
            </div>
            {/* Campos de endereço */}
            <div className="col-12">
              {/* Rua */}
              <div className="form-group">
                <label htmlFor="rua">Rua</label>
                <input
                  type="text"
                  className="form-control"
                  id="rua"
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                />
                <hr className="my-4" />
              </div>
            </div>
            <div className="col-6">
              {/* Número */}
              <div className="form-group">
                <label htmlFor="numero">Número</label>
                <input
                  type="text"
                  className="form-control"
                  id="numero"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                />
                <hr className="my-4" />
              </div>
            </div>
            <div className="col-6">
              {/* Complemento */}
              <div className="form-group">
                <label htmlFor="complemento">Complemento</label>
                <input
                  type="text"
                  className="form-control"
                  id="complemento"
                  value={complemento}
                  onChange={complementoOnChange}
                />
                <hr className="my-4" />
              </div>
            </div>
            <div className="col-md-4">
              {/* Bairro */}
              <div className="form-group">
                <label htmlFor="bairro">Bairro</label>
                <input
                  type="text"
                  className="form-control"
                  id="bairro"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                />
                <hr className="my-4" />
              </div>
            </div>
            <div className="col-md-4">
              {/* Cidade */}
              <div className="form-group">
                <label htmlFor="cidade">Cidade</label>
                <input
                  type="text"
                  className="form-control"
                  id="cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
                <hr className="my-4" />
              </div>
            </div>
            <div className="col-md-4">
              {/* Estado */}
              <div className="form-group">
                <label htmlFor="estado">Estado</label>
                <input
                  type="text"
                  className="form-control"
                  id="estado"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                />
                <hr className="my-4" />
              </div>
            </div>
            <div className="col-12">
              {/* Biografia */}
              <div className="form-group">
                <label htmlFor="bio">Biografia</label>
                <textarea
                  className="form-control"
                  id="bio"
                  rows="3"
                  value={biografia}
                  onChange={biografiaOnChange}
                />
                <hr className="my-4" />
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            {/* Botões de ação */}
            <button
              className="btn btn-secondary mr-2"
              id="cancelButton"
              style={{ width: "8em" }}
              onClick={onCancel}
            >
              Cancelar
            </button>
            <button
              className="btn btn-primary"
              id="updateButton"
              style={{ width: "8em" }}
              type="submit"
              onSubmit={onSubmit}
            >
              Atualizar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateForm;
