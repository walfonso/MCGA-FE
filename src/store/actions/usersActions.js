import Swal from "sweetalert2";
import axiosClient from "../../config/axios";
import {
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  SET_USER,
} from "../../types/users";

const userUrl = "/user";

export function addNewUserAction(user) {
  return async (dispatch) => {
    dispatch(addNewUser());
    try {
      await axiosClient.post(`${userUrl}`, user);
      dispatch(addNewUserSuccess(user));
      Swal.fire("Correcto", "El usuario se agrego correctamente...", "success");
    } catch (error) {
      console.error(error);
      dispatch(addNewUserError(true));
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error.",
        text: "Ocurrio un error, intenta de nuevo.",
      });
    }
  };
}

const addNewUser = () => ({
  type: ADD_USER,
});

const addNewUserSuccess = (user) => ({
  type: ADD_USER_SUCCESS,
  payload: user,
});

const addNewUserError = (status) => ({
  type: ADD_USER_ERROR,
  payload: status,
});

export function getAllUsersAction() {
  return async (dispatch) => {
    dispatch(getAllUsers());
    try {
      const { data } = await axiosClient.get(`${userUrl}/all`);
      dispatch(getAllUsersSuccess(data));
    } catch (error) {
      console.error(error);
      dispatch(getAllUsersError(true));
    }
  };
}

const getAllUsers = () => ({
  type: GET_USERS,
});

const getAllUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

const getAllUsersError = (status) => ({
  type: GET_USERS_ERROR,
  payload: status,
});

export const deleteUserAction = (id) => {
  return async (dispatch) => {
    dispatch(deleteUser());
    try {
      await axiosClient.delete(`${userUrl}/${id}`);
      dispatch(deleteUserSuccess(id));
      Swal.fire(
        "Eliminado",
        "El usuario se elimino correctamente...",
        "success"
      );
    } catch (error) {
      console.error(error);
      dispatch(deleteUserError(true));
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error.",
        text: "Ocurrio un error al eliminar el usuario, intenta de nuevo.",
      });
    }
  };
};

const deleteUser = () => ({
  type: DELETE_USER,
});

const deleteUserSuccess = (id) => ({
  type: DELETE_USER_SUCCESS,
  payload: id,
});

const deleteUserError = (status) => ({
  type: DELETE_USER_ERROR,
  payload: status,
});

export const editUserAction = (user) => {
  return async (dispatch) => {
    try {
      await axiosClient.put(`${userUrl}/${user?._id}`, user);
      dispatch(editUserSuccess(user));
      dispatch(getAllUsersAction());
      Swal.fire("Correcto", "El usuario se edito correctamente...", "success");
    } catch (error) {
      dispatch(editUserError(true));
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error.",
        text: "Ocurrio un error, intenta de nuevo.",
      });
    }
  };
};

const editUserSuccess = (user) => ({
  type: EDIT_USER_SUCCESS,
  payload: user,
});

const editUserError = (status) => ({
  type: EDIT_USER_ERROR,
  payload: status,
});

export const setUserAction = (user) => {
  return async (dispatch) => {
    dispatch(setUser(user));
  };
};

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});
