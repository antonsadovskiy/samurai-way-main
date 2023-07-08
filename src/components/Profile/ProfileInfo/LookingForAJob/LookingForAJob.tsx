import React, { FC } from "react";

type LookingForAJobPropsType = {
  lookingForAJob: boolean;
  description: string;
};

const LookingForAJob: FC<LookingForAJobPropsType> = (props) => {
  return (
    <div>
      <div>
        <b>Looking for a job: </b>{" "}
        <span>{props.lookingForAJob ? "Yes" : "No"}</span>
      </div>
      {props.lookingForAJob && <div>{props.description}</div>}
    </div>
  );
};

export default LookingForAJob;
