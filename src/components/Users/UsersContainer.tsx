import {connect} from "react-redux";
import {follow, getUsers, unfollow, UserType} from "../../redux/users/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import React, {ComponentType} from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPageSelector,
    getIsButtonDisabledSelector,
    getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../redux/users/usersSelectors";

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isButtonDisabled: Array<number>
}
type MapDispatchToProps = {
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
type UsersAPIPropsType = MapStatePropsType & MapDispatchToProps

class UsersContainer extends React.Component<UsersAPIPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onChangePageHandler = (currentPage: number) => {
        this.props.getUsers(currentPage, this.props.pageSize)
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
                         unfollow={this.props.unfollow}
                         isButtonDisabled={this.props.isButtonDisabled}/>
        )
    }
}

// const MapStateToProps = (state: AppStateType): MapStatePropsType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isButtonDisabled: state.usersPage.isButtonDisabled
//     }
// }

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        isButtonDisabled: getIsButtonDisabledSelector(state)
    }
}

export default compose<ComponentType>(
    connect(MapStateToProps, {
        getUsers, follow, unfollow
    }),
    withAuthRedirect,
)(UsersContainer)