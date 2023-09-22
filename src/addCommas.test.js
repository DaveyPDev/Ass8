function testAddCommas() {
  // Test cases for positive integers
  let testCases = [
      { input: 123, expected: "123" },
      { input: 1234, expected: "1,234" },
      { input: 12345, expected: "12,345" },
      { input: 123456, expected: "123,456" },
      { input: 1234567, expected: "1,234,567" },
      { input: 12345678, expected: "12,345,678" },
      { input: 123456789, expected: "123,456,789" },
  ];

  for (let testCase of testCases) {
      const result = addCommas(testCase.input);
      if (result === testCase.expected) {
          console.log(`Pass: ${testCase.input} => ${result}`);
      } else {
          console.error(`Fail: ${testCase.input} => ${result}, Expected: ${testCase.expected}`);
      }
  }

  // Test cases for negative integers
  testCases = [
      { input: -123, expected: "-123" },
      { input: -1234, expected: "-1,234" },
      { input: -12345, expected: "-12,345" },
  ];

  for (let testCase of testCases) {
      const result = addCommas(testCase.input);
      if (result === testCase.expected) {
          console.log(`Pass: ${testCase.input} => ${result}`);
      } else {
          console.error(`Fail: ${testCase.input} => ${result}, Expected: ${testCase.expected}`);
      }
  }

  // Test case for zero
  const zeroResult = addCommas(0);
  if (zeroResult === "0") {
      console.log("Pass: 0 => 0");
  } else {
      console.error(`Fail: 0 => ${zeroResult}, Expected: 0`);
  }
}

testAddCommas();
