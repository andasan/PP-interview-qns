const reverseStr = require('./index');

test('Reverse function exists', () => {
    expect(reverseStr).toBeDefined();
});

test('Reverse reverses a string abcd', () => {
    expect(reverseStr('abcd')).toEqual('dcba');
});

test('Reverse reverses a string hello', () => {
    expect(reverseStr('hello')).toEqual('olleh');
});

test('Reverse reverses a string <space>abcd', () => {
    expect(reverseStr('  abcd')).toEqual('dcba  ');
});

// test('Reverse reverses a string Hello', () => {
//     expect(reverseStr('Hello')).toEqual('olleh');
// });

