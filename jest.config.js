module.exports =  {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.m?[tj]s?$': ['ts-jest'],
	},
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.(m)?js$': '$1',
	},
	testRegex: '/__tests__/.*(test|spec)\\.(m)?ts$',
	coverageDirectory: 'coverage',
	collectCoverageFrom: [
		'src/**/*.ts',
		'src/**/*.mts',
		'!src/**/*.d.ts',
		'!src/**/*.d.mts',
	],
};