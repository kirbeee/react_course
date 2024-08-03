import ImageShow from "./ImageShow";

function ImageList({ images }) {
    const rederedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    });
    return (
        <div>
            {rederedImages}
        </div>
    );
}

export default ImageList;