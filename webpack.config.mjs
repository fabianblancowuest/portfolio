import path from "path";

export default {
	entry: "./js/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve("dist"),
	},
	mode: "production",
};
