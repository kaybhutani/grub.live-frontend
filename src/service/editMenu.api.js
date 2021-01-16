import axiosInstance from "./axios";

export class MenuAPI {
  constructor(api) {
    this.api = api;
  }

  fetchMenuFromServer(menuId) {
    return new Promise((resolve, reject) => {
      this.api
        .get(`/view`, {
          params: {
            q: menuId,
          },
        })
        .then((req) => req.data)
        .then((data) => {
          if (!data.success) reject("Failed to fetch Error");
          resolve(data.data);
        });
    });
  }

  fetchMenuFromLocalStorage() {
    return new Promise((resolve, reject) => {
      try {
        let restaurantDetails = JSON.parse(localStorage.getItem("restaurantDetails"));
        if (restaurantDetails) {
          return resolve(restaurantDetails);
        }
        reject("Menu doesn't exist");
      } catch (err) {
        reject(err.message);
      }
    });
  }

  setMenu(payload) {
    return new Promise((resolve, reject) => {
      try {
        let { menu, isEdit, hash, menuId } = payload;
        let apiEndPoint;
        if (isEdit) {
          if (hash == undefined || menuId == undefined)
            throw new Error("MenuID and hash is required to update menu");
          apiEndPoint = `/edit/submit/${menuId}/${hash}`;
        } else {
          if (menu == undefined) throw new Error("Menu is required");
          apiEndPoint = `/submit`;
        }
        this.api.post(apiEndPoint, JSON.stringify(menu)).then((req) => {
          if (req.status !== 200) throw new Error("Failed to save menu");
          resolve(req.data);
        });
      } catch (err) {
        reject(err.message);
      }
    });
  }

  saveDraft(payload) {
    return new Promise((resolve, reject) => {
      localStorage.setItem("restaurantDetails", payload);
      resolve();
    });
  }
}

export default new MenuAPI(axiosInstance);
