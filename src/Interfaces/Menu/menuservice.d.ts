import { MenuType } from "./menu";

export interface MenuServiceType {
  getMenu: (id: string) => Promise<MenuType>;
  editMenu: (menu_id: string, menu: MenuType, hash: string) => Promise<MenuType>;
  addMenu: (menu: MenuType) => Promise<MenuType>;
}
