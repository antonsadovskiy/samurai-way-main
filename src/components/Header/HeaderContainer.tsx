import {AuthStateType, setAuthUserData} from "../../redux/auth/authReducer";
import {connect} from "react-redux";
import Header from "./Header";
import React from "react";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";

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
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true
            })
            .then(response => {
                    const {id, email, login} = response.data.data
                    if (response.data.resultCode === 0){
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