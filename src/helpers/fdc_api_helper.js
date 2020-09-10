import axios from 'axios';

const FDC_API_KEY = 'ZMUsCFeMsK1mpj4yQzBwbJDunmbeIfjac7wXzZ1p';

export const allFoods = () => new Promise(async (resolve, reject) => {
  const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${FDC_API_KEY}`;
  try {
    const response = await axios.get(url);
    resolve(response.data);
  } catch (e) {
    reject({ error: e });
  }
});

export const searchFoods = food => new Promise(async (resolve, reject) => {
  const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${FDC_API_KEY}`;
  try {
    const response = await axios.post(url, { query: food });
    resolve(response.data);
  } catch (e) {
    reject({ error: e });
  }
});
