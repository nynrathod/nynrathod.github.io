import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: "https://nynrathod.github.io", // Your GitHub Pages URL
	// base: "/nynrathod.github.io/", // Repository name as base path for GitHub Pages
	integrations: [
		icon({
			include: {
				fa: ["*"], // Include all icons from Font Awesome
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
