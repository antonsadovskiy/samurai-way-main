import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC, UsersPageType, UserType} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    users: Array<UserType>
}
type MapDispatchToProps = {
    setUsers: (users: Array<UserType>) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchToProps


const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}
const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        }
    }
}

const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)
export default UsersContainer