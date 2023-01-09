module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'\\.(jpg|jpeg|png)$': '<rootDir>/__mocks__/fileMock.js',
		'\\.(css)$': 'identity-obj-proxy',
	},
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  unmockedModulePathPatterns: ["node_modules/react/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "es6"],
};
