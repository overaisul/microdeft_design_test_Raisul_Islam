function Card({ description, title, paragraph, imageType }) {
  return (
    <>
      <div className="card">
        <img src={imageType} alt="" />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  );
}

export default Card;
