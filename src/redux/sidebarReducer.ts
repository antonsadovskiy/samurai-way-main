import {ActionsTypes, SideBarType} from "./store";
import avatar from "../asssets/images/avatar.png";

const initialState: SideBarType = {
    friends: [
        {id: 1, name: "Anton", avatar: avatar},
        {id: 2, name: "Zhenya", avatar: avatar},
        {id: 3, name: "Natasha", avatar: avatar},
    ]
}

export const sidebarReducer = (state: SideBarType = initialState, action: ActionsTypes): SideBarType => {

    return state
}

export default sidebarReducer