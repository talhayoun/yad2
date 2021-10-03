import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const ImagePreview = (props) => {
    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState("");

    useEffect(() => {
        if (image.length > 0) {
            let [file] = image;
            file['id'] = nanoid();
            setImagePreview(URL.createObjectURL(file));
            if (props.setMainImg) {
                props.setMainImg(image);
            }
        }
    }, [image, props])

    const deleteImage = () => {
        let ImageID = image[0].id;
        setImage("")
        setImagePreview("");
        props.setAllImages([...props.allImages.filter((img) => img[0].id !== ImageID)])
    }

    const handleOnChangeImage = (event) => {
        if (event.target.files)
            setImage(event.target.files);

        if (props.setAllImages) {
            props.setAllImages([...props.allImages, event.target.files])
        }
    }


    return (
        <div className="stepfive-image">
            <div className="stepfive-image-container">
                <div>+</div>
                <p>העלאת תמונות</p>
            </div>
            <input type="file" onChange={(e) => handleOnChangeImage(e)} />
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