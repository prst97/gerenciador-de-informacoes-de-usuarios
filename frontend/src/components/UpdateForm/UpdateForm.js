import { useState } from "react";
import FileInput from "../FileInput/FileInput.js";
import ImageCropper from "../ImageCropper/ImageCropper.js";

function UpdateForm({ avatar, setAvatar, isEditing, setIsEditing }) {
  const [currentPage, setCurrentPage] = useState("choose-img");

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

  }
  const onCropCancel = () => {
    setCurrentPage("choose-img");
  };

  return (
    <div>
      {isEditing === true ? (
        <div className="col-12 d-flex justify-content-center">
          {/* Conteúdo do formulário de atualização */}
          <form>
            <h4>Atualizar Informações</h4>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  {/* Foto de perfil */}
                  {currentPage === "choose-img" ? (
                    <FileInput onImageSelected={onImageSelected} />
                  ) : currentPage === "crop-img" ? (
                    <ImageCropper
                      avatar={avatar}
                      setIsEditing={setIsEditing}
                      onCropDone={onCropDone}
                      onCropCancel={onCropCancel}
                    />
                  ) : (
                    <div>
                      <img src={avatar} style={{height: '10em', width: '12em', marginLeft: "1em", borderRadius: '50%'}} alt="picture"></img>
                      <FileInput onImageSelected={onImageSelected} />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                {/* Nome */}
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input type="text" className="form-control" id="name" />
                </div>
              </div>
              <div className="col-md-6">
                {/* Data de nascimento */}
                <div className="form-group">
                  <label htmlFor="age">Data de Nascimento</label>
                  <input type="date" className="form-control" id="birthday" />
                </div>
              </div>
              <div className="col-12">
                {/* Endereço */}
                <div className="form-group">
                  <label htmlFor="address">Endereço</label>
                  <input type="text" className="form-control" id="address" />
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
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
              {/* Botão de atualizar */}
              <button
                className="btn btn-primary"
                id="updateButton"
                style={{ width: "8em" }}
                onClick={() => setIsEditing(false)}
              >
                Atualizar
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default UpdateForm;
