import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import { getFakePageData } from '../types/PageData';
import PersonPage from '../pages/[id]';
import ErrorPage from '../pages/404';
import MyApp from '../pages/_app';
import { Router } from 'next/router';


global.URL.createObjectURL = jest.fn();
 
const data = getFakePageData();
const pageParams = {
  page: 1,
  search: '',
};

test('Home is rendered', () => {
  render(<Home data={data} pageParams={pageParams}></Home>)
  const heading = screen.getByText(data.results[0].name)
  expect(heading).toBeInTheDocument()
})

test('PersonPage is rendered', () => {
  render(<PersonPage data={data} pageParams={pageParams} person={data.results[0]}></PersonPage>)
  const heading = screen.getByText('Search')
  expect(heading).toBeInTheDocument()
})

test('404 is rendered', () => {
  render(<ErrorPage />)
  const heading = screen.getByText('Oops!')
  expect(heading).toBeInTheDocument()
})
