const existStorage = () => typeof(Storage) !== "undefined"

const saveInStorage = (data) => {
  console.log(data);
  Object.entries(data).forEach(([key, value]) => {
    localStorage.setItem(key, value);
  });
}

const getFromStorage = () => {

}

export const saveSession = (data) => {
  console.log(data);
  if( existStorage() ) saveInStorage(data);
}

