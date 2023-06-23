import React, { ComponentType } from "react";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";

const News = () => {
  return <div>News</div>;
};

export default compose<ComponentType>(withAuthRedirect)(News);
