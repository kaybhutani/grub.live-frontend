/* eslint-disable @typescript-eslint/ban-types */
import { Menu, MenuType } from "../Interfaces/Menu/menu";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

export enum MenuActionType {
  GET_MENU_REQUESTED = "GET_MENU_REQUESTED",
  GET_MENU_SUCCESS = "GET_MENU_SUCCESS",
  GET_MENU_FAILED = "GET_MENU_FAILED",
  UPDATE_MENU_REQUESTED = "UPDATE_MENU_REQUESTED",
  UPDATE_MENU_FAILED = "UPDATE_MENU_FAILED",
  UPDATE_MENU_SUCCESSFUL = "UPDATE_MENU_SUCCESSFUL",
}

export interface GetMenuActionRequestType {
  type: MenuActionType.GET_MENU_REQUESTED;
  readonly menu_id: string;
}

export interface GetMenuActionSuccessType {
  type: MenuActionType.GET_MENU_REQUESTED;
  readonly menu: MenuType;
}

export interface GetMenuActionFailedType {
  type: MenuActionType.GET_MENU_FAILED;
  readonly error: string;
}

export interface UpdateMenuActionRequestType {
  type: MenuActionType.UPDATE_MENU_REQUESTED;
  readonly updateMenuPayload: MenuType;
  readonly updateMenuId: string;
}

export interface UpdateMenuActionSuccessType {
  type: MenuActionType.UPDATE_MENU_SUCCESSFUL;
}

export interface UpdateMenuActionFailedType {
  type: MenuActionType.UPDATE_MENU_FAILED;
}

export type MenuAction =
  | GetMenuActionRequestType
  | GetMenuActionSuccessType
  | GetMenuActionFailedType
  | UpdateMenuActionRequestType
  | UpdateMenuActionSuccessType
  | UpdateMenuActionFailedType;

export const MenuActionCreator = {
  getMenu: (menu_id: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
      console.log(menu_id);
      return new Promise<void>((resolve) => {
        dispatch({ type: MenuActionType.GET_MENU_REQUESTED });
        resolve();
      });
      // make some calls and return
    };
  },

  updateMenu: (
    menu_id: string,
    menu: Menu
  ): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
      return new Promise<void>((resolve) => {
        dispatch({
          type: MenuActionType.UPDATE_MENU_REQUESTED,
          updateMenuPayload: menu,
        });
        resolve();
      });
    };
  },
};
