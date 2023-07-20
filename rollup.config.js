import terser from "@rollup/plugin-terser";

import pkg from "./package.json" assert { type: "json" };

// rollup.config.js
export default {
	input: "stats/chi2test",
	plugins: [terser()],
	output: [
		{
			name: "chi2test",
			file: pkg.browser,
			format: "umd",
		},
		{
			file: pkg.module,
			format: "es",
		},
		,
	],
};
