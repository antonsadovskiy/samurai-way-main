import Navbar from "./Navbar";
import {AppStateType} from "../../redux/redux-store";
import {SideBarFriendType} from "../../redux/sidebar/sidebarReducer";
import {connect} from "react-redux";

type MapStatePropsType = {
    friends: Array<SideBarFriendType>
}

export type NavbarPropsType = MapStatePropsType

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        friends: state.sideBar.friends
    }
}

const NavbarContainer = connect(MapStateToProps)(Navbar)
export default NavbarContainer