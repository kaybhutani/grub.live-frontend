import { AxiosResponse } from "axios";
import { MenuType, MenuDataResponse } from "../Interfaces/Menu/menu";
import { MenuServiceType } from "../Interfaces/Menu/menuservice";
import apiInstance from "../Lib/axios";

class MenuService implements MenuServiceType {
  addMenu = async (menu: MenuType): Promise<MenuType> => {
    try {
      const resp: AxiosResponse<MenuDataResponse> = await apiInstance.post<MenuDataResponse>(
        "/submit",
        JSON.stringify(menu)
      );
      if (resp.status == 200) return Promise.resolve(resp.data.data);
      throw new Error("Failed to add menu");
    } catch (err) {
      return Promise.reject(err);
    }
  };

  editMenu = async (
    menu_id: string,
    menu: MenuType,
    hash: string
  ): Promise<MenuType> => {
    try {
      const resp: AxiosResponse<MenuDataResponse> = await apiInstance.post<MenuDataResponse>(
        `/edit/submit/${menu_id}/${hash}`,
        JSON.stringify(menu)
      );
      if (resp.status == 200) return Promise.resolve(resp.data.data);
      throw new Error("Failed to update menu");
    } catch (err) {
      return Promise.reject(err);
    }
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

export default new MenuService();
