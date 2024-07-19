const BASE_URL = 'https://28.javascript.htmlacademy.pro/keksobooking';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
};

//Общая функция

const load = (route, errorText, method = Method.GET, body = null) => {
  return fetch(`${BASE_URL}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });
};

// Получение данных

const getData = () => {
  return load(Route.GET_DATA, ErrorText.GET_DATA);
};

export { getData };
