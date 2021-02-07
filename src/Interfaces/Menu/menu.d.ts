export interface Item {
  itemDescription?: string;
  itemName: string;
  itemPrice: string;
}

export interface Category {
  items: Item[];
  title: string;
  type: string;
}

export interface Theme {
  backgroundImage?: string;
  color?: string;
  fontFamily?: string;
  backgroundColor?: string;
}

export interface Menu {
  categories: Category[];
  theme: Theme;
}

export interface Social {
  facebook?: string;
  instagram?: string;
  website?: string;
}

export interface MenuType {
  bio: string;
  emailId: string;
  logo: string;
  menu: Menu;
  offers: string[];
  restaurantName: string;
  social: Social;
}

export interface MenuDataResponse {
  data: MenuData;
  id?: string;
}
