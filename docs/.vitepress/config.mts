import { defineConfig } from "vitepress";
import { navbar } from "./config/navbar";
import { sidebar } from "./config/sidebar";

export default defineConfig({
	title: "tools.wrikka",
	description: "แชร์สิ่งที่รียนรู้ในทุกๆวัน",
	lastUpdated: true,
	cleanUrls: true,
	srcDir: ".",
	base: "/",
	head: [
		[
			"link",
			{
				rel: "icon",
				href:
					"https://res.cloudinary.com/dc54nmhwq/image/upload/f_auto/v1704584370/wrikka-obsidian/bzqri7zwmycgzu16gd74.webp",
				type: "image/svg+xml",
			},
		],
		["meta", { name: "author", content: "ai.sharex" }],
		["meta", { property: "og:type", content: "website" }],
		["meta", { name: "og:title", content: "ai.sharex" }],
		["meta", { name: "og:description", content: "แชร์สิ่งที่รียนรู้ในทุกๆวัน" }],
		[
			"meta",
			{
				property: "og:image",
				content:
					"https://res.cloudinary.com/dc54nmhwq/image/upload/f_auto/v1704584370/wrikka-obsidian/bzqri7zwmycgzu16gd74.webp",
			},
		],
		["meta", { name: "twitter:title", content: "tools.sharex" }],
		["meta", { name: "twitter:card", content: "summary_large_image" }],
		[
			"meta",
			{
				name: "twitter:image",
				content:
					"https://res.cloudinary.com/dc54nmhwq/image/upload/f_auto/v1704584370/wrikka-obsidian/bzqri7zwmycgzu16gd74.webp",
			},
		],
		["meta", { name: "twitter:site", content: "@ai.sharex" }],
		["meta", { name: "twitter:url", content: "https://twitter.com/ai.sharex" }],
		[
			"link",
			{
				rel: "search",
				type: "application/opensearchdescription+xml",
				href: "/search.xml",
				title: "UnoCSS",
			},
		],
	],
	vite: {},
	vue: {},
	themeConfig: {
		logo:
			"https://res.cloudinary.com/dc54nmhwq/image/upload/f_auto/v1704584370/wrikka-obsidian/bzqri7zwmycgzu16gd74.webp",
		search: {
			provider: "local",
		},
		/*
		carbonAds: {
			code: "",
			placement: "sharx",
		},
		*/
		footer: {
			message: "แชร์ความรู้ x",
			copyright: "No Copyright © 2024-present แชร์ความรู้ x",
		},
		socialLinks: [
			{
				icon: "facebook",
				link: "https://facebook.com/webdev.sharex",
			},
			{
				icon: "github",
				link: "https://github.com/webdevsharex/tools.wrikka.com",
			},
		],
		nav: navbar,
		sidebar: sidebar,
	},
});
