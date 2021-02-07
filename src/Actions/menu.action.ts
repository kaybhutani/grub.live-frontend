import { MenuType } from "../Interfaces/Menu/menu";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import MenuService from "../Services/menu.service";
import { GlobalState } from "../Reducers";
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
  type: MenuActionType.GET_MENU_SUCCESS;
  readonly menu: MenuType;
  readonly menu_id: string;
}

export interface GetMenuActionFailedType {
  type: MenuActionType.GET_MENU_FAILED;
  readonly error: string;
}

export interface UpdateMenuActionRequestType {
  type: MenuActionType.UPDATE_MENU_REQUESTED;
}

export interface UpdateMenuActionSuccessType {
  type: MenuActionType.UPDATE_MENU_SUCCESSFUL;
  readonly menu: MenuType;
}

export interface UpdateMenuActionFailedType {
  type: MenuActionType.UPDATE_MENU_FAILED;
  readonly error: string;
}

export type MenuAction =
  | GetMenuActionRequestType
  | GetMenuActionSuccessType
  | GetMenuActionFailedType
  | UpdateMenuActionRequestType
  | UpdateMenuActionSuccessType
  | UpdateMenuActionFailedType;

export const MenuActionCreator = {
  getMenu: (
    menu_id: string
  ): ThunkAction<Promise<MenuType>, () => GlobalState, any, AnyAction> => {
    return async (
      dispatch: ThunkDispatch<GlobalState, any, AnyAction>
    ): Promise<MenuType> => {
      dispatch({ type: MenuActionType.UPDATE_MENU_REQUESTED });
      try {
        const menu: MenuType = await MenuService.getMenu(menu_id);
        dispatch({ type: MenuActionType.GET_MENU_SUCCESS, menu, menu_id });
        return menu;
      } catch (err) {
        dispatch({ type: MenuActionType.GET_MENU_FAILED, error: err });
        return Promise.reject(err);
      }
    };
  },

  updateMenu: (
    menu_id: string,
    menu: MenuType,
    hash: string
  ): ThunkAction<Promise<MenuType>, () => GlobalState, any, AnyAction> => {
    return async (dispatch: ThunkDispatch<GlobalState, any, AnyAction>) => {
      dispatch({ type: MenuActionType.UPDATE_MENU_REQUESTED });
      try {
        const updatedMenu: MenuType = await MenuService.editMenu(
          menu_id,
          menu,
          hash
        );
        dispatch({ type: MenuActionType.UPDATE_MENU_SUCCESSFUL, menu: updatedMenu });
        return updatedMenu;
      } catch (err) {
        dispatch({ type: MenuActionType.UPDATE_MENU_FAILED, error: err });
        return Promise.reject(err);
      }
    };
  },
};
