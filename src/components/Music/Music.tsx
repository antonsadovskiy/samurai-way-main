import React, { ComponentType } from "react";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";

const Music = () => {
  return <div>Music</div>;
};

export default compose<ComponentType>(withAuthRedirect)(Music);
