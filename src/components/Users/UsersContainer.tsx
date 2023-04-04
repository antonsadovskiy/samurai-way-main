import {connect} from "react-redux";
import {
    setIsFetching,
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unFollow,
    UserType, setIsButtonDisabled
} from "../../redux/users/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isButtonDisabled: Array<number>
}
type MapDispatchToProps = {
    setIsButtonDisabled: (userId: number, newIsButtonDisabled: boolean) => void
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

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onChangePageHandler = (currentPage: number) => {
        this.props.setIsFetching(true)

        usersAPI.getUsers(currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setCurrentPage(currentPage)
                this.props.setUsers(data.items)
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
                         unFollow={this.props.unFollow}
                         isButtonDisabled={this.props.isButtonDisabled}
                         setIsButtonDisabled={this.props.setIsButtonDisabled}/>
        )
    }
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isButtonDisabled: state.usersPage.isButtonDisabled
    }
}


export default connect(MapStateToProps, {
    setIsButtonDisabled, setIsFetching, setUsers, setCurrentPage, setTotalUsersCount, follow, unFollow
})(UsersContainer)