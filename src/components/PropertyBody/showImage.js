import React, { useEffect, useState } from 'react';

const ShowImage = ({ props, count, setCount, setShowImage }) => {

    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState("")

    const onClickForward = () => {
        if (count === images.length - 1) {
            setCount(0)
            setCurrentImage(images[0])
        } else {
            setCount(count + 1)
            setCurrentImage(images[count + 1]);
        }
    }

    const onClickBackward = () => {
        if (count === 0) {
            setCount(images.length - 1);
            setCurrentImage(images[images.length - 1]);
        } else {
            setCount(count - 1);
            setCurrentImage(images[count - 1]);
        }
    }

    useEffect(() => {
        const imagesList = [];
        for (let i = 0; i < props.length; i++) {
            imagesList.push(props[i]);
        }
        setImages([...imagesList]);
        setCurrentImage(imagesList[0]);
    }, [props])

    return (
        <>
            <div className="showImage-blackscreen"></div>
            <div className="showImage">
                <img src={currentImage.image}></img>
                <div className="showImage-div">{`מציג ${count + 1} מתוך ${images.length} מודעות`}</div>
                <div className="arrow-right-another" onClick={onClickForward}></div>
                <div className="arrow-left-another" onClick={onClickBackward}></div>
                <div className="showImage-close" onClick={() => setShowImage(false)}>X לחזרה למודעה</div>
            </div>
        </>
    );
};

export default ShowImage;