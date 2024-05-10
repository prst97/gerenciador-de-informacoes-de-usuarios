/**
 * Componente funcional para selecionar uma imagem do usuário.
 * Props:
 *   - onImageSelected: função para lidar com a imagem selecionada
 */
import React from 'react';

const FileInput = ({onImageSelected}) => {

  // Função para lidar com a mudança de arquivo selecionado
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imgSrc = e.target.result;
        onImageSelected(imgSrc); // Chama a função para lidar com a imagem selecionada
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
        {/* Input de arquivo oculto para selecionar uma imagem */}
        <input
          type="file"
          accept="image/*"
          className="form-control-file"
          id="avatar"
          onChange={handleFileChange} // Aciona a função handleFileChange quando um arquivo é selecionado
          style={{ display: "none" }}
        />
        {/* Botão para abrir o seletor de arquivo */}
        <label htmlFor="avatar" className="btn btn-outline-secondary" style={{margin: "1em 0 2em 0"}}>
          Selecionar nova foto de perfil
        </label>
      </div>
  );
}

export default FileInput;
