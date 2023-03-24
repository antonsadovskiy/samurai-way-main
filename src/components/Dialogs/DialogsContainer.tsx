import React, {FC} from 'react';
import {AppStateType} from "../../redux/redux-store";
import {addMessageActionCreator, DialogPageType, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogsPage: DialogPageType
}
type MapDispatchPropsType = {
    sendMessage: () => void
    updateNewMessageText: (text: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;