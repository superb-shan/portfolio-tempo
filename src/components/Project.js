const Project = ({ technologies, title, color, description }) => {

  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="projectCard d-flex align-items-center justify-content-center p-5"
      >
        <div className="textWrap col-10 d-flex flex-column justify-content-center align-items-center m-5">
          <p className="tech">
            <em>{technologies}</em>
          </p>
          <h3 className="projectTitle">{title}</h3>
          {description}
        </div>
      </div>
    </>
  );
};

export default Project;
