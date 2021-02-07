import { MenuType } from "../Interfaces/Menu/menu";
import { MenuAction, MenuActionType } from "../Actions/menu.action";
export interface MenuStateType {
  menu_id: string;
  menu: MenuType;
  isLoading: boolean;
  error: string | null;
  hash: string;
}

const inititalMenu: MenuType = {
  restaurantName: "",
  menu: {
    categories: [],
    theme: {
      color: "",
      backgroundColor: "",
      backgroundImage: "",
    },
  },
  bio: "",
  emailId: "",
  offers: [],
  logo: "",
  social: {
    facebook: "",
    website: "",
    instagram: "",
  },
};

const MenuInitialState: MenuStateType = {
  menu: inititalMenu,
  menu_id: "",
  isLoading: false,
  error: null,
  hash: "",
};

export const MenuReducer = (
  state: MenuStateType = { ...MenuInitialState },
  action: MenuAction
): MenuStateType => {
  switch (action.type) {
    case MenuActionType.GET_MENU_SUCCESS:
      return {
        ...state,
        isLoading: false,
        menu: action.menu,
        menu_id: action.menu_id,
        error: null,
      };
    case MenuActionType.GET_MENU_FAILED:
      return { ...state, isLoading: false, error: action.error };
    case MenuActionType.GET_MENU_REQUESTED:
      return { ...state, isLoading: true, error: null };
    case MenuActionType.UPDATE_MENU_REQUESTED:
      return { ...state, isLoading: true, error: null };
    case MenuActionType.UPDATE_MENU_SUCCESSFUL:
      return { ...state, isLoading: false, menu: action.menu, error: null };
    case MenuActionType.UPDATE_MENU_FAILED:
      return { ...state, isLoading: false, error: action.error };
    default:
      return { ...state };
  }
};
