import useState from "react";

const ImageBody = ({imgData}) => {
  const alt_des = imgData.alt_description;
  return (
    <div className="img-container">
        <img className="img-res" src={imgData.urls.raw} alt={`img-${imgData.id}`}/>
        <div className="img-des">
            <h3>{imgData.description?.substring(0,30)}
            {
              imgData.description?.length > 30 ? <span>...</span> : <></>
            }
            </h3>
            <p>{alt_des?.charAt(0).toUpperCase() + alt_des?.slice(1)}</p>
        </div>
        <div className="btn-container">
          <span className="card-btn"><a href={imgData.urls.raw} target="_blank" rel="noreferrer"><img src="fs-icon.png" alt="fs-btn"/></a></span>
          <span className="card-btn"><a href={imgData.urls.raw} download><img src="dload-icon.png" alt="dload-btn"/></a></span>
        </div>
    </div>
  );
};

export default ImageBody;
