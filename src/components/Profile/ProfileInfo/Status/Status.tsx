import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";
import s from "./Status.module.css";
import { EditOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

type StatusPropsType = {
  isOwner: boolean;
  status: string;
  updateStatus: (newStatus: string) => void;
};

const Status: FC<StatusPropsType> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => setEditMode(true);
  const deactivateEditMode = (e: FocusEvent<HTMLInputElement>) => {
    props.updateStatus(e.currentTarget.value);
    setEditMode(false);
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.updateStatus(e.currentTarget.value);
      setEditMode(false);
    }
  };

  return (
    <div className={s.statusContainer}>
      {editMode ? (
        <Input
          width={"100%"}
          value={status}
          onBlur={deactivateEditMode}
          onChange={onChangeHandler}
          onKeyPress={onKeyPressHandler}
          autoFocus
        />
      ) : (
        <div className={s.status}>
          <span>{props.status || "no status"}</span>
          {props.isOwner && (
            <Button onClick={activateEditMode} icon={<EditOutlined />} />
          )}
        </div>
      )}
    </div>
  );
};

export default Status;
