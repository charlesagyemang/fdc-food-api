import cheerio from 'cheerio';
import axios from 'axios';

export const scrapeSiteByUrl = url => new Promise(async (resolve, reject) => {
  try {
    const response = await axios.get(url);
    resolve(cheerio.load(response.data));
  } catch (e) {
    reject({ error: e });
  }
});
