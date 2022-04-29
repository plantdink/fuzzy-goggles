// number values that have a decimal place are stored as a whole number n the DB for ease of use & need to be converted to a human readable format before being displayed to the user.
import {
  displayPercentage,
  hsDisplay,
  humanReadableNumber,
  millisecondsToSeconds,
} from '../lib/displayNumbers';

describe('displayNumbers function', () => {
  it('converts a percentage correctly', () => {
    expect(displayPercentage(100)).toEqual(10);
  });
  it('converts a percentage correctly', () => {
    expect(displayPercentage(987)).toEqual(98.7);
  });
  it('converts a percentage correctly', () => {
    expect(displayPercentage(1205)).toEqual(120.5);
  });
  it('converts a percentage correctly', () => {
    expect(displayPercentage(10)).toEqual(1);
  });
});

// Head shot multiplier is stored in the DB as a whole number and needs to be converted to a human readable value before being displayed to the user
describe('hsDisplay function', () => {
  it('converts a Head shot multiplier value correctly', () => {
    expect(hsDisplay(125)).toEqual(1.25);
  });
  it('converts a Head shot multiplier value correctly', () => {
    expect(hsDisplay(1250)).toEqual(12.5);
  });
  it('converts a Head shot multiplier value correctly', () => {
    expect(hsDisplay(78907963164)).toEqual(789079631.64);
  });
});

// reload speed values are stored in the DB as a millisecond value but should be displayed to the user as a seconds value with 2 decimal places
describe('millisecondsToSeconds function', () => {
  it('converts a millisecond value correctly', () => {
    expect(millisecondsToSeconds(2013)).toEqual('2.01');
  });
  it('converts a millisecond value correctly', () => {
    expect(millisecondsToSeconds(3365)).toEqual('3.37');
  });
  it('converts a millisecond value correctly', () => {
    expect(millisecondsToSeconds(8616913)).toEqual('36.91');
  });
  it('converts a millisecond value correctly', () => {
    expect(millisecondsToSeconds(0)).toEqual('0.00');
  });
});

// large numeric values with decimal places should be formatted & displayed according to the users browser preferences
describe('humanReadableNumber function', () => {
  it('displays a number according to the users locale preferences', () => {
    const lang = 'en-AU';
    expect(humanReadableNumber(123456.789, lang)).toEqual('123,456.789');
  });
  it('displays a number according to the users locale preferences', () => {
    const lang = 'en-DE';
    expect(humanReadableNumber(123456.789, lang)).toEqual('123.456,789');
  });
  it('displays a number according to the users locale preferences', () => {
    const lang = 'en-IN';
    expect(humanReadableNumber(123456.789, lang)).toEqual('1,23,456.789');
  });
});
