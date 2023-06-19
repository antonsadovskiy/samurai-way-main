import React, {ComponentType} from 'react';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

const Settings = () => {
  return (
    <div>
      Settings
    </div>
  );
};

export default compose<ComponentType>(withAuthRedirect)(Settings);
