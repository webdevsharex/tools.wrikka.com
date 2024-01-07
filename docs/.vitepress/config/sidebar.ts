import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
	"/tools/": [
		{
			items: [
				{
					text: "General Tools",
					items: [
						{
							text: "Clickup",
							link: "/tools/general/clickup",
						},
						{
							text: "Obsidian",
							link: "/tools/general/obsidian",
						},
						{
							text: "Raindrop",
							link: "/tools/general/raindrop",
						},
						{
							text: "Eagle Cool",
							link: "/tools/general/eagle",
						},
						{
							text: "Tldraw",
							link: "/tools/general/tldraw",
						},
						{
							text: "Inoreader",
							link: "/tools/general/inoreader",
						},
					],
				},
			],
		},
		{
			items: [
				{
					text: "Design Tools",
					items: [
						{
							text: "Framer",
							link: "/tools/design/framer",
						},
						{
							text: "Figma",
							link: "/tools/design/figma",
						},
					],
				},
			],
		},
		{
			items: [
				{
					text: "Dev Tools",
					items: [
						{
							text: "VSCode",
							link: "/tools/dev/vscode",
						},
					],
				},
			],
		},
		{
			items: [
				{
					text: "AI Tools",
					items: [
						{
							text: "ChatGPT",
							link: "/tools/ai/chatgpt",
						},
					],
				},
			],
		},
	],
	"/howto/": [
		{
			text: "วิธีการ how to",
			link: "/howto/intro",
		},
		{
			text: "การสร้าง docs",
			link: "/howto/create-docs",
		},
		{
			text: "การสร้าง chatbot",
			link: "/howto/create-chatbot",
		},
		{
			text: "การจัดการงาน",
			link: "/howto/task-management",
		},
		{
			text: "การจัดเก็บ digital assets",
			link: "/howto/digital-assets-management",
		},
		{
			text: "การออกแบบรูปภาพ",
			link: "/howto/image",
		},
		{
			text: "การ research ข้อมูล",
			link: "/howto/research",
		},
	],
};
