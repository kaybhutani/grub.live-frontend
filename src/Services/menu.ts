import { AxiosResponse } from "axios";
import { MenuType, MenuDataResponse } from "../Interfaces/Menu/menu";
import { MenuServiceType } from "../Interfaces/Menu/menuservice";
import apiInstance from "../Lib/axios";

class MenuService implements MenuServiceType {
  addMenu = (menu: MenuType): Promise<MenuType> => {
    return new Promise((resolve) => {
      resolve(menu);
    });
  };

  editMenu = (menu_id: string, menu: MenuType): Promise<MenuType> => {
    return new Promise((resolve) => {
      resolve(menu);
    });
  };
  getMenu = async (menu_id: string): Promise<MenuType> => {
    try {
      const resp: AxiosResponse<MenuDataResponse> = await apiInstance.get<MenuDataResponse>(
        `/view`,
        {
          params: {
            q: menu_id,
          },
        }
      );
      if (resp.status == 200) {
        return Promise.resolve(resp.data.data);
      }
      throw new Error("Failed to fetch menu");
    } catch (err) {
      return Promise.reject(err);
    }
  };
}

export default MenuService;
