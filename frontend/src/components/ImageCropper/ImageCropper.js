import React, { useState } from 'react';
import Cropper from 'react-easy-crop';

const ImageCropper = ({ avatar, onCropDone, onCropCancel }) => {
    
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState(null);
    const aspectRatio = (5 / 4);

    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    }

    return (
        <div className="cropper container d-flex justify-content-center col-12">
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
    
            <div className='action-btns col-12'>
                <div className='btn-container'>
                    <button className='btn btn-outline' onClick={onCropCancel}>
                        Cancel
                    </button>
                    <button 
                        className='btn'
                        type="button"
                        onClick={() => {
                            onCropDone(croppedArea);
                        }}
                    >
                        Crop & Apply
                    </button>
                </div>
            </div>
        </div>
    )    
}

export default ImageCropper;
