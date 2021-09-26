import React, { useEffect, useState } from 'react';

const ImagePreview = () => {
    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState("");

    useEffect(() => {
        if (image.length > 0) {
            let [file] = image;
            setImagePreview(URL.createObjectURL(file));
        }
    }, [image])

    const deleteImage = () => {
        setImage("")
        setImagePreview("");
    }


    return (
        <div className="stepfive-image">
            <div className="stepfive-image-container">
                <div>+</div>
                <p>העלאת תמונות</p>
            </div>
            <input type="file" onChange={(e) => setImage(e.target.files)} />
            {image &&
                <div className="stepfive-image-img-container">
                    <div>
                        <img src={imagePreview} alt="" />
                    </div>
                    <div className="stepfive-image-deleteContainer">
                        <div className="stepfive-image-deleteContainer-first">
                            <div onClick={deleteImage}></div>
                        </div>
                        <div className="stepfive-image-deleteContainer-second">
                            <div></div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ImagePreview;