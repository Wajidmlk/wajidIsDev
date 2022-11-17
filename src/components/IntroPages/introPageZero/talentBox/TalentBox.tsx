import React from 'react';

const TalentBox = () => {
  return (
    <div className="flex bullet-wrap ">
      <div className="hex-wrap waypoint animated flip-in-x" data-animation="flip-in-x">
        <div className="hexagon">
          <i className="mdi mdi-speedometer"></i>
        </div>
      </div>
      <div className="waypoint animated fade-in" data-animation="fade-in">
        <div className="label bold">Fast</div>
        <div>
          Fast load times and lag free interaction, my highest
          priority.
        </div>
      </div>
    </div>
  );
};

export default TalentBox;
