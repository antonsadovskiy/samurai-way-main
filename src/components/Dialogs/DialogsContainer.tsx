import React, {ComponentType, FC} from 'react';
import {AppStateType} from "../../redux/redux-store";
import {addMessageActionCreator, DialogPageType} from "../../redux/dialogs/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type MapStatePropsType = {
    dialogsPage: DialogPageType
}
type MapDispatchPropsType = {
    sendMessage: (newMessage: string) => void
    // updateNewMessageText: (text: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: (newMessage: string) => {
            dispatch(addMessageActionCreator(newMessage))
        },
        // updateNewMessageText: (text: string) => {
        //     dispatch(updateNewMessageTextActionCreator(text))
        // }
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);