import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AppRoute, AuthorizationStatus, City, SortType } from '../../const';
import { render, screen } from '@testing-library/react';
import App from './app';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { Action } from 'redux';
import { makeFakeOffers, makeFakeReviews } from '../../utils/moks';

describe("Ура! Наш первый автотест", function() {
  it("Тест 1.1", function() {
    expect(1 + 1).toBe(2)
  })
})
