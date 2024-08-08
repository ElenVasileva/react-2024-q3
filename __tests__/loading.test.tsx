import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageSearchIdLoading from '../src/app/[page]/search/[search]/[id]/loading';
import PageSearchLoading from '../src/app/[page]/search/[search]/loading';
import PageIdLoading from '../src/app/[page]/[id]/loading';
import PageLoading from '../src/app/[page]/search/loading';
import Loading from '../src/app/[page]/loading';

test('Loading is rendered', async () => {
  render(<Loading/>);
  const el = screen.getByText('Loading...');
  expect(el).toBeInTheDocument();
});

test('PageLoading is rendered', async () => {
  render(<PageLoading/>);
  const el = screen.getByText('Loading...');
  expect(el).toBeInTheDocument();
});

test('PageIdLoading is rendered', async () => {
  render(<PageIdLoading/>);
  const el = screen.getByText('Loading...');
  expect(el).toBeInTheDocument();
});

test('PageSearchLoading is rendered', async () => {
  render(<PageSearchLoading/>);
  const el = screen.getByText('Loading...');
  expect(el).toBeInTheDocument();
});

test('PageSearchIdLoading is rendered', async () => {
  render(<PageSearchIdLoading/>);
  const el = screen.getByText('Loading...');
  expect(el).toBeInTheDocument();
});