import React, { useState, useEffect } from "react";
import FileInput from "../FileInput/FileInput.js";
import ImageCropper from "../ImageCropper/ImageCropper.js";
import AddressInput from "../AddressInput/AddressInput.js";
import AgeCalculator from "../AgeCalculator/AgeCalculator.js";
import DateFormat from "../DateFormat/DateFormat.js";

function UpdateForm({ 
  avatar, 
  setAvatar,
  setIsEditing,
  nome, 
  setNome,
  idade,
  setIdade,
  dataDeNascimento,
  setDataDeNascimento, 
  setDataDeNascimentoUserInfo,
  biografia,
  setBiografia,
  rua, 
  setRua, 
  numero, 
  setNumero, 
  complemento,
  setComplemento,
  bairro, 
  setBairro, 
  cidade, 
  setCidade, 
  estado, 
  setEstado,
}) {
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [antigoNome, setAntigoNome] = useState("");
  const [antigaDataDeNascimento, setAntigaDataDeNascimento] = useState("");
  const [antigaBiografia, setAntigaBiografia] = useState("");
  const [antigaRua, setAntigaRua] = useState("");
  const [antigoNumero, setAntigoNumero] = useState("");
  const [antigoComplemento, setAntigoComplemento] = useState("");
  const [antigoBairro, setAntigoBairro] = useState("");
  const [antigaCidade, setAntigaCidade] = useState("");
  const [antigoEstado, setAntigoEstado] = useState("");

  // Define os valores antigos quando o componente for montado
  useEffect(() => {
    setAntigoNome(nome);
    setAntigaDataDeNascimento(dataDeNascimento);
    setAntigaBiografia(biografia);
    setAntigaRua(rua);
    setAntigoNumero(numero);
    setAntigoComplemento(complemento);
    setAntigoBairro(bairro);
    setAntigaCidade(cidade);
    setAntigoEstado(estado);
  }, []);

  function onImageSelected(selectedImg) {
    setAvatar(selectedImg);
    setCurrentPage("crop-img");
  }

  const onCropDone = (imgCroppedArea) => {
    const canvasElement = document.createElement("canvas");
    canvasElement.width = imgCroppedArea.width;
    canvasElement.height = imgCroppedArea.height;

    const context = canvasElement.getContext("2d");

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

      const dataURL = canvasElement.toDataURL("image/jpeg");

      setAvatar(dataURL);
      setCurrentPage("img-cropped");
    };

  };
  
  const onCropCancel = () => {
    setCurrentPage("choose-img");
  };

  function nomeOnChange(e){
    setNome(e.target.value);
  }

  function dataDeNascimentoOnChange(e){
    setDataDeNascimento(e.target.value);
  }

  function biografiaOnChange(e){
    setBiografia(e.target.value);
  }

  function complementoOnChange(e){
    setComplemento(e.target.value);
  }

  function onSubmit(e){
    e.preventDefault();
    if (!rua || !numero) {
      alert("Por favor, preencha os campos de endereço.");
      return;
    }
    if (!nome || !dataDeNascimento) {
      alert("Por favor, preencha seus dados.");
      return;
    }
    setIdade(AgeCalculator(dataDeNascimento));
    setDataDeNascimento(dataDeNascimento);
    setDataDeNascimentoUserInfo(DateFormat(dataDeNascimento));
    setComplemento(complemento);
    setBiografia(biografia);
    setIsEditing(false);
  }

  function onCancel() {
    // Restaura os valores antigos quando o botão Cancelar é clicado
    setNome(antigoNome);
    setDataDeNascimento(antigaDataDeNascimento);
    setBiografia(antigaBiografia);
    setRua(antigaRua);
    setNumero(antigoNumero);
    setComplemento(antigoComplemento);
    setBairro(antigoBairro);
    setCidade(antigaCidade);
    setEstado(antigoEstado);
    setIsEditing(false);
  }

  return (
    <div>
        <div className="col-12">
          {/* Conteúdo do formulário de atualização */}
          <form onSubmit={onSubmit}>
            <div className="row">
              <div className="col-12">
              <h4>Atualizar Informações</h4>
                <div className="form-group my-4">
                  {/* Foto de perfil */}
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
                        <img className="img-fluid profile-photo" src={avatar} alt="Foto de perfil selecionada" />
                      </div>
                      <FileInput onImageSelected={onImageSelected} />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                {/* Nome */}
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input type="text" className="form-control" id="name" value={nome} onChange={nomeOnChange} />
                  <hr className="my-4" />
                </div>
              </div>
              <div className="col-md-6">
                {/* Data de nascimento */}
                <div className="form-group">
                  <label htmlFor="age">Data de Nascimento</label>
                  <input type="date" className="form-control" id="birthday" value={dataDeNascimento} onChange={dataDeNascimentoOnChange} />
                  <hr className="my-4" />
                </div>
              </div>
              <div className="col-12">
                {/* Rua */}
                <div className="form-group">
                  <label htmlFor="rua">Endereço</label>
                  <AddressInput setRua={setRua} setNumero={setNumero} setBairro={setBairro} setCidade={setCidade} setEstado={setEstado} />
                  <hr className="my-4" />
                </div>
              </div>
              <div className="col-6">
                {/* Número */}
                <div className="form-group">
                  <label htmlFor="numero">Número</label>
                  <input type="text" className="form-control" id="numero" value={numero} onChange={(e) => setNumero(e.target.value)} />
                  <hr className="my-4" />
                </div>
              </div>
              <div className="col-6">
                {/* Complemento */}
                <div className="form-group">
                  <label htmlFor="complemento">Complemento</label>
                  <input type="text" className="form-control" id="complemento" value={complemento} onChange={complementoOnChange} />
                  <hr className="my-4" />
                </div>
              </div>
              <div className="col-md-4">
                {/* Bairro */}
                <div className="form-group">
                  <label htmlFor="bairro">Bairro</label>
                  <input type="text" className="form-control" id="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                  <hr className="my-4" />
                </div>
              </div>
              <div className="col-md-4">
                {/* Cidade */}
                <div className="form-group">
                  <label htmlFor="cidade">Cidade</label>
                  <input type="text" className="form-control" id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                  <hr className="my-4" />
                </div>
              </div>
              <div className="col-md-4">
                {/* Estado */}
                <div className="form-group">
                  <label htmlFor="estado">Estado</label>
                  <input type="text" className="form-control" id="estado" value={estado} onChange={(e) => setEstado(e.target.value)} />
                  <hr className="my-4" />
                </div>
              </div>
              <div className="col-12">
                {/* Biografia */}
                <div className="form-group">
                  <label htmlFor="bio">Biografia</label>
                  <textarea className="form-control" id="bio" rows="3" value={biografia} onChange={biografiaOnChange}/>
                  <hr className="my-4" />
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
              {/* Botão de cancelar */}
              <button
                  className="btn btn-secondary mr-2"
                  id="cancelButton"
                  style={{ width: "8em" }}
                  onClick={onCancel}
                >
                Cancelar
              </button>
              {/* Botão de atualizar */}
              <button
                  className="btn btn-primary"
                  id="updateButton"
                  style={{ width: "8em" }}
                  type="submit"
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