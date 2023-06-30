import { authAPI, AuthUserDataType } from "../../api/authAPI";
import { FormDataType } from "../../components/Login/LoginForm/LoginForm";
import { AppThunk } from "../redux-store";
import { stopSubmit } from "redux-form";

type SetUserDataActionType = ReturnType<typeof setAuthUserData>;
type LogOutActionType = ReturnType<typeof logOutUser>;
export type AuthActionsType = SetUserDataActionType | LogOutActionType;

export type AuthStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

const initialState: AuthStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (
  state: AuthStateType = initialState,
  action: AuthActionsType
): AuthStateType => {
  switch (action.type) {
    case "AUTH/SET-USER-DATA":
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export const setAuthUserData = (data: AuthUserDataType) => {
  return { type: "AUTH/SET-USER-DATA", data } as const;
};
export const logOutUser = () => {
  return { type: "AUTH/LOG-OUT" } as const;
};

export const getAuthUserDate = (): AppThunk => async (dispatch) => {
  try {
    const res = await authAPI.auth();
    const { id, email, login } = res.data.data;
    if (res.data.resultCode === 0) {
      dispatch(setAuthUserData({ id, email, login, isAuth: true }));
    }
  } catch (e) {
    console.error(e);
  }
};
export const loginUser =
  (data: FormDataType): AppThunk =>
  async (dispatch) => {
    try {
      const res = await authAPI.login(data);
      if (res.data.resultCode === 0) {
        dispatch(getAuthUserDate());
      } else {
        const message =
          res.data.messages.length > 0 ? res.data.messages[0] : "some error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    } catch (e) {
      console.error(e);
    }
  };
export const logoutUser = (): AppThunk => async (dispatch) => {
  try {
    const res = await authAPI.logout();
    if (res.data.resultCode === 0) {
      dispatch(
        setAuthUserData({ id: null, login: null, email: null, isAuth: false })
      );
    }
  } catch (e) {
    console.error(e);
  }
};
