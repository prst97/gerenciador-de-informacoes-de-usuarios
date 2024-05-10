/**
 * Componente funcional para recortar imagens.
 * Permite ao usuário selecionar uma área específica de uma imagem para recortar.
 * Props:
 *   - avatar: imagem a ser recortada
 *   - onCropDone: função para lidar com o término do recorte
 *   - onCropCancel: função para lidar com o cancelamento do recorte
 */
import React, { useState } from 'react';
import Cropper from 'react-easy-crop';

const ImageCropper = ({ avatar, onCropDone, onCropCancel }) => {
    
    // Estados para controlar o recorte da imagem
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState(null);
    const aspectRatio = (5 / 4); // Proporção de aspecto desejada (5:4)

    // Função para lidar com o término do recorte
    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    }

    return (
        <div className="cropper container d-flex justify-content-center col-12">
            {/* Componente Cropper para recortar a imagem */}
            <div className="align-items-center">
                <Cropper
                    image={avatar}
                    aspect={aspectRatio}
                    crop={crop}
                    zoom={zoom}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                    style={{
                        containerStyle: {
                            width: "100%",
                            height: "70%",
                            backgroundColor: "#fff",
                        }
                    }}
                />
            </div>
    
            {/* Botões de ação para confirmar ou cancelar o recorte */}
            <div className='action-btns col-12'>
                <div className='btn-container'>
                    {/* Botão para cancelar o recorte */}
                    <button className='btn btn-outline' onClick={onCropCancel}>
                        Cancelar
                    </button>
                    {/* Botão para confirmar o recorte e aplicar */}
                    <button 
                        className='btn'
                        type="button"
                        onClick={() => {
                            onCropDone(croppedArea);
                        }}
                    >
                        Recortar & Aplicar
                    </button>
                </div>
            </div>
        </div>
    )    
}

export default ImageCropper;