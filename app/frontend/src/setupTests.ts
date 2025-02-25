import '@testing-library/jest-dom';

// Mock the global fetch
const mockFetch = jest.fn();
global.fetch = mockFetch;

// Reset all mocks after each test
afterEach(() => {
  jest.clearAllMocks();
});
