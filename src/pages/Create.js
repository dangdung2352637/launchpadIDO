import "./Create.scss";

export const Create = () => {
  return (
    <div className="Create">
      <div>
        <h1 className="project-details">Project Details</h1>
        <div>Project name</div>
        <input />
        <div>Tagline</div>
        <input></input>
        <div>Add a brief one-sentence summary of your project</div>
      </div>
      <div className="Project">
        <div>Project links (Optional)</div>
        <hr color="white"></hr>
        <div>Project owner (Optional)</div>
        <hr color="white"></hr>
        <div>Project tags (Optional)</div>
        <hr color="white"></hr>
        <div>Project page customizations (Optional)</div>
        <hr color="white"></hr>
      </div>

      <button>NEXT</button>
    </div>
  );
};
