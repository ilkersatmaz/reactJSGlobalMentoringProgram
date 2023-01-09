import React, { FC } from 'react';
import '@testing-library/jest-dom';
import { createMemoryRouter, Navigate, Route, RouterProvider, Routes } from 'react-router-dom';
import { Provider, ProviderProps } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';

import { addNewMovie, deleteSelectedMovie, fetchSelectedMovie, initialState, movieOperationSlice } from '../src/store/movies/movieOperationSlice';
import { fetchMovies } from '../src/store/movies/moviesSlice';
import { movieResponse } from '../__mocks__/response-mock';
import { store } from '../src/store/index';

import NotFoundPage from '../src/components/pages/NotFoundPage';
import MainContent from '../src/components/MainContent';
import Footer from '../src/components/footerComponent/Footer';

const ReduxProvider: FC<ProviderProps> = ({ children, store }) => <Provider store={store}>{children}</Provider>;

function renderWithContext() {
	render(
		<ReduxProvider store={store}>
				 <Routes>
                        <Route path="*" element={<NotFoundPage />} />
                        <Route path="/" element={<Navigate to="/search" replace />} />
                        <Route path="/search" element={
                        <>
                            <MainContent />
                            <Footer/>
                        </>} />
                    </Routes>			
		</ReduxProvider>,
	);
}

describe('Redux store tests', () => {
	it('Should return initial state', () => {
		const mockReducer = movieOperationSlice.reducer;
		expect(
			mockReducer(undefined, {
				type: undefined,
			}),
		).toEqual(initialState);
	});

	it('Fetch all movies action', async () => {
		const expectedState = {
			...initialState,
			movies: movieResponse.data,
			moviesCount: movieResponse.totalAmount,
			moviesLoadingStatus: 'succeeded',
		};

		expect(store.getState().movies).toEqual(expectedState);
	});

	it('Delete movie action', async () => {
		const expectedState = {
			...initialState,
			movies: movieResponse.data,
			moviesCount: movieResponse.totalAmount,
			moviesLoadingStatus: 'succeeded',
			movieFormLoading: 'pending',
		};

		expect(store.getState().movies).toEqual(expectedState);
	});

	it('Add movie action', async () => {
		const expectedState = {
			...initialState,
			movies: movieResponse.data,
			moviesCount: movieResponse.totalAmount,
			moviesLoadingStatus: 'succeeded',
			movieFormLoading: 'pending',
		};

		expect(store.getState().movies).toEqual(expectedState);
	});
});

describe('Component tests', () => {
	it('Search bar snapshot', async () => {
		renderWithContext();
		const element = screen.getByTestId('search-panel');
		expect(element).toMatchSnapshot();
	});	
});
