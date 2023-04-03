import {setAuthUserData} from "../../redux/auth/authReducer";
import {connect} from "react-redux";
import Header from "./Header";
import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

type mapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
type mapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}
type PropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        authAPI.auth()
            .then(data => {
                    const {id, email, login} = data.data
                    if (data.resultCode === 0){
                        this.props.setAuthUserData(id, email, login)
                    }
                }
            )
    }

    render() {
        return (
            <Header login={this.props.login}
                    isAuth={this.props.isAuth}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)