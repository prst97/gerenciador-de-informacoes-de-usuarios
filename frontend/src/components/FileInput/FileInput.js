import React from 'react';

const FileInput = ({onImageSelected}) => {

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imgSrc = e.target.result;
        onImageSelected(imgSrc);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
        <input
          type="file"
          accept="image/*"
          className="form-control-file"
          id="avatar"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <label htmlFor="avatar" className="btn btn-outline-secondary" style={{margin: "1em 0 2em 0"}}>
          Selecionar nova foto de perfil
        </label>
      </div>
  );
}

export default FileInput;