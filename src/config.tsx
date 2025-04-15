import { MenuItem } from "interfaces/menuitem";
import { SiteConfig } from "interfaces/siteconfig";
import { FooterBadge } from "interfaces/footerbadge";
import { Icon } from "@iconify/react";

export const siteConfigs: SiteConfig = {
    author: "克喵爱吃卤面",
    title: "喵落阁",
    siteUrl: "https://myblog.kemiao.online",
    avatar: "https://weavatar.com/avatar/7614B285E795F21E780247019C4E15C4",
    twikooEnv: "https://twikoo-aria.314926.xyz",
    createYear: 2025,
    createMonth: 4,
    createDay: 15,
    pageMaxPosts: 15,
    falldownAvatar: "https://bu.dusays.com/2024/09/06/66dabf7f748c8.jpg",
    falldownImg: "https://bu.dusays.com/2024/08/31/66d30329375a5.webp",
    // backEndUrl: process.env.NODE_ENV=="production"?"https://blognext-end.yaria.top":"http://localhost:2333",
    backEndUrl: "https://blognext-end.yaria.top",
    fcircleUrl: "https://friends.kemeow.top",
    socials: [
        {
            name: "Github",
            url: "https://github.com/Kemeow815",
            icon: <Icon icon="fa6-brands:github" />
        },
        {
            name: "Email",
            url: "mailto:kemiaofx@163.com",
            icon: <Icon icon="fa6-solid:envelope" />
        },
        {
            name: "QQ",
            url: "tencent://message/?uin=3149261770&Site=&Menu=yes",
            icon: <Icon icon="fa6-brands:qq" />
        },
        {
            name: "Bilibili",
            url: "https://space.bilibili.com/3546643173477234",
            icon: <Icon icon="fa6-brands:bilibili" />
        },
        {
            name: "Telegram",
            url: "https://t.me/KemiaoJun",
            icon: <Icon icon="fa6-brands:telegram" />
        },
        {
            name: "RSS",
            url: "/feed.xml",
            icon: <Icon icon="fa6-solid:rss" />
        }
    ]
};

export const MenuItems: MenuItem[] = [
    {
        name: "首页",
        link: "/",
        icon: <Icon icon="fa6-solid:house" />,
        childs: []
    },
    {
        name: "文章",
        link: "",
        icon: <Icon icon="fa6-solid:newspaper" />,
        childs: [
            {
                name: "随便逛逛",
                icon: <Icon icon="fa6-solid:paper-plane" />,
                func: () => {
                    (window as any).toRandomPost();
                }
            },
            {
                name: "归档",
                link: "/archives",
                icon: <Icon icon="fa6-solid:box-archive" />,
            },
            {
                name: "标签",
                link: "/tags",
                icon: <Icon icon="fa6-solid:tags" />,
            },
            {
                name: "分类",
                link: "/categories",
                icon: <Icon icon="fa6-solid:folder-open" />,
            },
            // {
            //     name: "哔哔",
            //     link: "/speaks",
            //     icon: <Icon icon="fa6-solid:comment" />,
            // },
            {
                name: "声明",
                link: "/license",
                icon: <Icon icon="fa6-solid:bell" />,
            },
        ]
    },
    {
        name: "本站",
        link: "",
        icon: <Icon icon="fa6-solid:sitemap" />,
        childs: [
            {
                name: "音乐",
                link: "https://music.kemiao.online",
                icon: <Icon icon="fa6-solid:music" />,
            },
            {
                name: "友链",
                link: "/links",
                icon: <Icon icon="fa6-solid:link" />,
            },
            // {
            //     name: "朋友圈",
            //     link: "/fcircle",
            //     icon: <Icon icon="fa6-solid:circle-nodes" />,
            // },
            {
                name: "关于我",
                link: "/about",
                icon: <Icon icon="fa6-solid:circle-info" />,
            },
            // {
            //     name: "日志",
            //     link: "https://github.com/LYXOfficial/AriaBlogNext-frontend/commits/main/",
            //     icon: <Icon icon="fa6-solid:calendar" />,
            // },
            {
                name: "留言板",
                link: "/messageboard",
                icon: <Icon icon="fa6-solid:chalkboard" />,
            },
        ]
    },
];

export const FooterBadges: FooterBadge[] = [
    {
        badgeUrl: "https://img.shields.io/badge/Framework-Next.js-black?style=flat",
        link: "https://nextjs.org"
    },
    {
        badgeUrl: "https://img.shields.io/badge/Hosted-Vercel-success?style=flat",
        link: "https://vercel.app"
    },
    // {
    //     badgeUrl: "https://img.shields.io/badge/CDN-ChuqiCDN-006CFF?style=flat",
    //     link: "https://www.chuqiyun.com"
    // },
    {
        badgeUrl: "https://img.shields.io/badge/CC-BY--NC--SA4.0-red?style=flat",
        link: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
    },
    // {
    //     badgeUrl: "https://img.shields.io/badge/%E8%90%8CICP%E5%A4%87-20250810-ff69b4?style=flat",
    //     link: "https://icp.gov.moe/?keyword=20250810"
    // },
    {
        badgeUrl: "https://img.shields.io/badge/%E5%8D%81%E5%B9%B4%E4%B9%8B%E7%BA%A6-63D3C9",
        link: "https://foreverblog.cn"
    },
    {
        badgeUrl: "https://img.shields.io/badge/%E5%BC%80%E5%BE%80-lightgray",
        link: "https://www.travellings.cn/"
    },
]
