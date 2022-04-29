import '@testing-library/jest-dom';

// running in headless mode
window.alert = console.log;

jest.mock('react-chartjs-2', () => ({
  Radar: () => null,
}));
