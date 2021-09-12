const axios = require('axios');
const fs = require('fs');
// .env
const dotenv = require('dotenv');

dotenv.config();

// Token
const jwtToken = process.env.PHRASE_APP_TOKEN;
const projectId = process.env.PHRASE_PROJECT_ID;
const baseURL = process.env.PHRASE_BASE_URL;

const pathPhrase = './phrase-data/default.json';
const translationsPath = './phrase-data/translations';

const writeLocales = (data, path) => {
  fs.writeFile(path, data, 'utf8', (error) => {
    if (error) throw error;
    console.log('File created!');
  });
};

const headers = {
  responseType: 'stream',
  Authorization: `Bearer ${jwtToken}`,
};

// Default translation is saved into a default.json file
const getPhraseData = () => {
  const urlPhrase = `${baseURL}/${projectId}/keys`;
  axios.get(urlPhrase, { headers })
    .then((response) => JSON.stringify(response.data, null, 4))
    .then((data) => writeLocales(data, pathPhrase))
    .catch((error) => console.error(error));
};

const createTranslations = (data) => {
  const locale = JSON.parse(data);
  const countries = [];
  // Loop to get unique country codes
  for (const country of locale) {
    if (countries.indexOf(country.locale.code) === -1) {
      countries.push(country.locale.code);
    }
  }
  // With the unique country code value, we create a file and insert the data for that code
  for (const country of countries) {
    const result = locale.filter((element) => element.locale.code === country);
    writeLocales(JSON.stringify(result, null, 4), `${translationsPath}/${country}.json`);
  }
};
// All translations are saved into a translations.json file
const getTranslations = () => {
  axios.get(`${baseURL}/${projectId}/translations`, { headers })
    .then((response) => JSON.stringify(response.data, null, 4))
    .then((data) => createTranslations(data))
    .catch((error) => console.error(error));
};

getPhraseData();
getTranslations();
