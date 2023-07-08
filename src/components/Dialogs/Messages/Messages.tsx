import s from "./Messages.module.css";
import { DialogType } from "../../../redux/dialogs/dialogsReducer";
import DialogItem from "./DialogItem/DialogItem";

type MessagesPropsType = {
  dialogs: Array<DialogType>;
};

export const Messages = (props: MessagesPropsType) => {
  return (
    <div className={s.messages}>
      {props.dialogs.map((dialog) => (
        <DialogItem key={dialog.id} dialog={dialog} />
      ))}
    </div>
  );
};
