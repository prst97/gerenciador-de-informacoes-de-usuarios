import React, { useState } from 'react';
import Cropper from 'react-easy-crop';

const ImageCropper = ({ avatar, setIsEditing, onCropDone, onCropCancel }) => {
    
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState(null);
    const [aspectRatio, setAspectRatio] = useState(5 / 4);

    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    }

    const onAspectRatioChange = (e) => {
        const newAspectRatio = parseFloat(e.target.value);
        setAspectRatio(newAspectRatio);
    }

    return (
        <div className="cropper container d-flex justify-content-center vh-50 col-12">
            <div>
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

            <div className='action-btns'>

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
