import {getRandomInteger, getRandomInfiniteNumber, getRandomCoordinate, createAvatarNumbers} from './util.js';

// Входные данные
const SIMILAR_ANNOUNCEMENT_COUNT = 10;

const TITLES = [
  'Прекрасное предложение',
  'Великолепная цена',
  'Отличная локация',
  'Незабываемый вид',
  'Место мечты',
  'Райское наслаждение',
  'Если отдыхать, то только так',
  'Супер вариант',
  'Идеальный отдых',
  'Выберайте нас!',
];
const LAT = {
  min: 35.65000,
  max: 35.70000,
};
const LNG = {
  min: 139.70000,
  max: 139.80000,
};
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];
const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTIONS = [
  'У нас уйютно',
  'Есть кухонька',
  'Можно с хвостиками',
  'Два шикарных этажа',
  'Матрас ортопедический',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

//Создаем автора
const createAuthor = () => {
  const avatarNumbers = createAvatarNumbers(1, 10);
  const randomAvatarIndex = getRandomInteger(0, avatarNumbers.length - 1);

  return {
    avatar: `img/avatars/user${avatarNumbers[randomAvatarIndex]}.png`,
  };
};

//Создаем локацию
const createLocation = () => ({
  lat: getRandomCoordinate(LAT.min, LAT.max, 5),
  lng: getRandomCoordinate(LNG.min, LNG.max, 5),
});

const hotelLocaion = createLocation();

//Создаем предложение
//Создаем адрес
const createAdress = (loc) => {
  const address = `lat: ${loc.lat}, lng: ${loc.lng}.`;
  return address;
};

//Создаем набор удобств
const createActualFeatures = (features) => {
  const actualFeatures = [];
  const start = getRandomInteger(1, features.length - 1);
  const amount = getRandomInteger(1, features.length - 1);

  if (start < amount) {
    for (let i = start; i <= amount; i++) {
      actualFeatures.push(features[i]);
    }
    return actualFeatures;
  }
  return features;
};

//Создаем фото
const createPhotos = (photos) => {
  const actualPhotos = [];
  const start = getRandomInteger(1, photos.length - 1);
  const amount = getRandomInteger(1, photos.length - 1);

  if (start < amount) {
    for (let i = start; i <= amount; i++) {
      actualPhotos.push(photos[i]);
    }
    return actualPhotos;
  }
  return photos;
};

//Само предложение
const createOffer = () => {
  const randomTitleIndex = getRandomInteger(0, TITLES.length - 1);
  const randomTypeIndex = getRandomInteger(0, TYPES.length - 1);
  const randomCheckinIndex = getRandomInteger(0, CHECKINS.length - 1);
  const randomCheckoutIndex = getRandomInteger(0, CHECKOUTS.length - 1);
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);

  return {
    title: TITLES[randomTitleIndex],
    address: createAdress(hotelLocaion),
    type: TYPES[randomTypeIndex],
    price: getRandomInfiniteNumber(),
    rooms: getRandomInteger(1, 7),
    guests: getRandomInteger(1, 10),
    checkin: CHECKINS[randomCheckinIndex],
    checkout: CHECKOUTS[randomCheckoutIndex],
    features: createActualFeatures(FEATURES),
    description: DESCRIPTIONS[randomDescriptionIndex],
    photos: createPhotos(PHOTOS),
  };
};

//Создаем целое объявление
const createAnnouncement = () => (
  {
    author: createAuthor(),
    offer: createOffer(),
    location: hotelLocaion,
  }
);

//Создаем 10 объявлений
const createSimilarAnnouncements = () => Array.from({ length: SIMILAR_ANNOUNCEMENT_COUNT }, createAnnouncement);
export {createSimilarAnnouncements};

