import React, {ChangeEvent, MouseEvent, FC} from 'react';
import s from './Status.module.css'

type StatusPropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

class Status extends React.Component<StatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={s.statusContainer}>
                {
                    this.state.editMode
                        ? <div>
                            <input value={this.state.status}
                                   onBlur={this.deactivateEditMode}
                                   onChange={this.onChangeHandler}
                                   autoFocus/>
                        </div>
                        : <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status || "no status"}</span>
                        </div>
                }
            </div>
        );
    }
}

// const Status:FC<StatusPropsType> = (props) => {
//
//     return (
//         <div className={s.statusContainer}>
//             <div>
//                 <span>{props.status}</span>
//             </div>
//             <div>
//                 <input value={props.status}/>
//             </div>
//         </div>
//     );
// };

export default Status;