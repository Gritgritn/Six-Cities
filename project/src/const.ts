export const enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/1',
}

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const enum OfferType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel',
}

export const offerTypeToReadable = {
  [OfferType.Apartment]: 'Apartment',
  [OfferType.Room]: 'Private Room',
  [OfferType.House]: 'House',
  [OfferType.Hotel]: 'Hotel',
};

export const MIN_OFFER_IN_NEIGHBOURHOOD = 0;

export const MAX_OFFER_IN_NEIGHBOURHOOD = 3;

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
