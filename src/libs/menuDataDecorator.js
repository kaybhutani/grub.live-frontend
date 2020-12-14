const URL = "https://grub-live-backend.herokuapp.com/view?q=cYp20mQxkMCliOui";
const UPDATE_URL =
  "https://grub-live-backend.herokuapp.com/edit/submit/cYp20mQxkMCliOui/pbkdf2:sha256:150000$DzFlSx01$6c9509d4fb2056427e52f58b427d2b8dcd7d29a5db470154c904d64d35636358";

// const fetch = require("node-fetch");

const fetchData = (url) => {
  return fetch(URL)
    .then((resp) => resp.json())
    .then((data) => data.data)
    .catch((err) => new Error(err));
};

let decorateData = (payload) => {
  return new Promise((resolve, reject) => {
    let newPayload = JSON.parse(JSON.stringify(payload));

    if (newPayload.hasOwnProperty("menu")) {
      newPayload.menu.categories = newPayload.menu.categories.map(
        (category) => {
          if (category.items) {
            category.items = category.items.map((item) => {
              if (!item.hasOwnProperty("itemName")) return item;
              let newDescription;
              let newName = item.itemName.toLowerCase();

              if (
                item.hasOwnProperty("itemDescription") &&
                item.itemDescription.length >= 2
              ) {
                newDescription = item.itemDescription.toLowerCase();
                newDescription =
                  newDescription[0].toUpperCase() + newDescription.substring(1);
              } else {
                newDescription = "";
              }

              if (newName.length >= 2)
                newName = newName[0].toUpperCase() + newName.substring(1);

              return {
                itemPrice: item.itemPrice,
                itemName: newName,
                itemDescription: newDescription,
              };
            });
          }
          return category;
        }
      );
      resolve(newPayload);
    } else {
      reject("Error");
    }
  });
};

const pushDataToMenu = (payload, url) => {
  return fetch(UPDATE_URL, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    mode: "cors",
  });
};

// fetchData(URL)
//   .then(decorateData)
//   .then((payload) => pushDataToMenu(payload,UPDATE_URL))
//   .then(console.log)
//   .catch(console.log);
