import { b as createAstro, c as createComponent, d as addAttribute, e as renderHead, f as renderSlot, a as renderTemplate, m as maybeRenderHead } from './astro/server.BSy3iVTU.js';
/* empty css                        */

const $$Astro$2 = createAstro("https://jidaisya.pages.dev");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "\u6642\u4EE3\u793E", lang = "zh" } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title>${renderHead()}</head> <body class="min-h-screen"> ${renderSlot($$result, $$slots["header"])} <main class="container py-8"> ${renderSlot($$result, $$slots["default"])} </main> ${renderSlot($$result, $$slots["footer"])} </body></html>`;
}, "/Users/Suro/Documents/ak/\u72EC\u7ACB\u5F00\u53D1\u9879\u76EE/jidaisya/src/layouts/BaseLayout.astro", void 0);

const $$Astro$1 = createAstro("https://jidaisya.pages.dev");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { lang = "zh-tw" } = Astro2.props;
  const getPath = (path) => {
    if (lang === "zh-tw") return path;
    return `/${lang}${path}`;
  };
  const navItems = {
    "zh-tw": {
      books: "\u66F8\u7C4D",
      news: "\u8CC7\u8A0A",
      about: "\u95DC\u65BC\u6211\u5011",
      submit: "\u5B78\u8005\u6295\u7A3F"
    },
    "zh-cn": {
      books: "\u4E66\u7C4D",
      news: "\u8D44\u8BAF",
      about: "\u5173\u4E8E\u6211\u4EEC",
      submit: "\u5B66\u8005\u6295\u7A3F"
    },
    ja: {
      books: "\u66F8\u7C4D",
      news: "\u30CB\u30E5\u30FC\u30B9",
      about: "\u4F1A\u793E\u6982\u8981",
      submit: "\u6295\u7A3F\u6848\u5185"
    },
    en: {
      books: "Books",
      news: "News",
      about: "About",
      submit: "Submit"
    }
  };
  const currentNav = navItems[lang] || navItems["zh-tw"];
  return renderTemplate`${maybeRenderHead()}<header class="border-b"> <div class="container flex items-center justify-between h-20"> <a${addAttribute(getPath("/"), "href")} class="flex items-center gap-2"> <img src="/images/brand/logo.png" alt="時代社 JIDAISYA" class="h-16 w-auto"> <span class="font-semibold text-[18px] text-[color:var(--brand-primary)]">時代社 JIDAISYA</span> </a> <nav class="hidden md:flex gap-6 text-sm"> <a${addAttribute(getPath("/books"), "href")}>${currentNav.books}</a> <a${addAttribute(getPath("/news"), "href")}>${currentNav.news}</a> <a${addAttribute(getPath("/about"), "href")}>${currentNav.about}</a> <a${addAttribute(getPath("/submit"), "href")}>${currentNav.submit}</a> </nav> <div class="flex items-center gap-1"> <a${addAttribute(`text-sm px-3 py-1 rounded transition-colors min-w-[50px] text-center ${lang === "zh-tw" ? "bg-blue-600 text-white" : "border hover:bg-gray-50"}`, "class")} href="/">TW</a> <a${addAttribute(`text-sm px-3 py-1 rounded transition-colors min-w-[50px] text-center ${lang === "zh-cn" ? "bg-blue-600 text-white" : "border hover:bg-gray-50"}`, "class")} href="/zh-cn">CN</a> <a${addAttribute(`text-sm px-3 py-1 rounded transition-colors min-w-[50px] text-center ${lang === "ja" ? "bg-blue-600 text-white" : "border hover:bg-gray-50"}`, "class")} href="/ja">JP</a> <a${addAttribute(`text-sm px-3 py-1 rounded transition-colors min-w-[50px] text-center ${lang === "en" ? "bg-blue-600 text-white" : "border hover:bg-gray-50"}`, "class")} href="/en">EN</a> </div> </div> </header>`;
}, "/Users/Suro/Documents/ak/\u72EC\u7ACB\u5F00\u53D1\u9879\u76EE/jidaisya/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://jidaisya.pages.dev");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="mt-16 border-t"> <div class="container py-8 text-sm text-gray-500 flex flex-wrap gap-3 items-center justify-between"> <span>© ${(/* @__PURE__ */ new Date()).getFullYear()} 時代社</span> <span>Built with Astro · Deployed on Cloudflare Pages</span> </div> </footer>`;
}, "/Users/Suro/Documents/ak/\u72EC\u7ACB\u5F00\u53D1\u9879\u76EE/jidaisya/src/components/Footer.astro", void 0);

export { $$BaseLayout as $, $$Header as a, $$Footer as b };
