import {connect} from "react-redux";
import {
    setIsFetching,
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unFollow,
    UserType
} from "../../redux/users/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchToProps = {
    setIsFetching: (newIsFetching: boolean) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}
type UsersAPIPropsType = MapStatePropsType & MapDispatchToProps

class UsersContainer extends React.Component<UsersAPIPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onChangePageHandler = (currentPage: number) => {
        this.props.setIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setCurrentPage(currentPage)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            this.props.isFetching
                ? <Preloader/>
                : <Users users={this.props.users}
                         pageSize={this.props.pageSize}
                         totalUsersCount={this.props.totalUsersCount}
                         currentPage={this.props.currentPage}
                         onChangePageHandler={this.onChangePageHandler}
                         follow={this.props.follow}
                         unFollow={this.props.unFollow}/>
        )
    }
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         setIsFetching: (newIsFetching: boolean) => {
//             dispatch(setIsFetchingAC(newIsFetching))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId: number) => {
//             dispatch(unFollowAC(userId))
//         }
//     }
// }

export default connect(MapStateToProps, {
    setIsFetching, setUsers, setCurrentPage, setTotalUsersCount, follow, unFollow
})(UsersContainer)