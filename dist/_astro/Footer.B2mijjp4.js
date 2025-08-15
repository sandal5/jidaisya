import { b as createAstro, c as createComponent, d as addAttribute, e as renderHead, f as renderSlot, a as renderTemplate, m as maybeRenderHead } from './astro/server.BSy3iVTU.js';
/* empty css                        */

const $$Astro$2 = createAstro("https://jidaisya.pages.dev");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "\u6642\u4EE3\u793E", lang = "zh" } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title>${renderHead()}</head> <body class="min-h-screen"> ${renderSlot($$result, $$slots["header"])} <main class="container py-8"> ${renderSlot($$result, $$slots["default"])} </main> ${renderSlot($$result, $$slots["footer"])} </body></html>`;
}, "/Users/Suro/Documents/ak/\u72EC\u7ACB\u5F00\u53D1\u9879\u76EE/jidaisya/src/layouts/BaseLayout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
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
  return renderTemplate(_a || (_a = __template(["", '<header class="border-b bg-white relative"> <div class="container flex items-center justify-between h-20"> <!-- Logo --> <a', ' class="flex items-center gap-2 z-50 relative"> <img src="/images/brand/logo.png" alt="\u6642\u4EE3\u793E JIDAISYA" class="h-16 w-auto"> <span class="font-semibold text-[18px] text-[color:var(--brand-primary)] block sm:inline"> <span class="block sm:inline">\u6642\u4EE3\u793E</span> <span class="hidden sm:inline"> JIDAISYA</span> </span> </a> <!-- Desktop Navigation --> <nav class="hidden md:flex gap-6 text-sm"> <a', ' class="hover:text-blue-600 transition-colors">', "</a> <a", ' class="hover:text-blue-600 transition-colors">', "</a> <a", ' class="hover:text-blue-600 transition-colors">', "</a> <a", ' class="hover:text-blue-600 transition-colors">', '</a> </nav> <!-- Language Switcher & Mobile Menu Button --> <div class="flex items-center gap-2"> <!-- Language Switcher --> <div class="hidden sm:flex items-center gap-1"> <a', ' href="/">TW</a> <a', ' href="/zh-cn">CN</a> <a', ' href="/ja">JP</a> <a', ' href="/en">EN</a> </div> <!-- Mobile Menu Button --> <button id="mobile-menu-button" class="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors z-50 relative" aria-label="Toggle mobile menu" aria-expanded="false"> <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> <!-- Mobile Navigation Menu --> <nav id="mobile-menu" class="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg opacity-0 invisible z-40" style="transition: opacity 0.3s ease, visibility 0.3s ease;" aria-hidden="true"> <div class="container py-4 space-y-4"> <!-- Mobile Navigation Links --> <div class="space-y-3"> <a', ' class="block py-2 px-4 text-lg hover:bg-gray-50 rounded-md transition-colors">', "</a> <a", ' class="block py-2 px-4 text-lg hover:bg-gray-50 rounded-md transition-colors">', "</a> <a", ' class="block py-2 px-4 text-lg hover:bg-gray-50 rounded-md transition-colors">', "</a> <a", ' class="block py-2 px-4 text-lg hover:bg-gray-50 rounded-md transition-colors">', '</a> </div> <!-- Mobile Language Switcher --> <div class="border-t pt-4"> <p class="px-4 text-sm text-gray-600 mb-3">Language / \u8A9E\u8A00</p> <div class="grid grid-cols-2 gap-2 px-4"> <a', ' href="/">\u7E41\u9AD4\u4E2D\u6587</a> <a', ' href="/zh-cn">\u7B80\u4F53\u4E2D\u6587</a> <a', ' href="/ja">\u65E5\u672C\u8A9E</a> <a', ' href="/en">English</a> </div> </div> </div> </nav> </header> <script src="/js/mobile-menu.js"><\/script>'])), maybeRenderHead(), addAttribute(getPath("/"), "href"), addAttribute(getPath("/books"), "href"), currentNav.books, addAttribute(getPath("/news"), "href"), currentNav.news, addAttribute(getPath("/about"), "href"), currentNav.about, addAttribute(getPath("/submit"), "href"), currentNav.submit, addAttribute(`text-sm px-3 py-1 rounded transition-colors min-w-[50px] text-center ${lang === "zh-tw" ? "bg-blue-600 text-white" : "border hover:bg-gray-50"}`, "class"), addAttribute(`text-sm px-3 py-1 rounded transition-colors min-w-[50px] text-center ${lang === "zh-cn" ? "bg-blue-600 text-white" : "border hover:bg-gray-50"}`, "class"), addAttribute(`text-sm px-3 py-1 rounded transition-colors min-w-[50px] text-center ${lang === "ja" ? "bg-blue-600 text-white" : "border hover:bg-gray-50"}`, "class"), addAttribute(`text-sm px-3 py-1 rounded transition-colors min-w-[50px] text-center ${lang === "en" ? "bg-blue-600 text-white" : "border hover:bg-gray-50"}`, "class"), addAttribute(getPath("/books"), "href"), currentNav.books, addAttribute(getPath("/news"), "href"), currentNav.news, addAttribute(getPath("/about"), "href"), currentNav.about, addAttribute(getPath("/submit"), "href"), currentNav.submit, addAttribute(`text-sm px-3 py-2 rounded text-center transition-colors ${lang === "zh-tw" ? "bg-blue-600 text-white" : "border hover:bg-gray-50"}`, "class"), addAttribute(`text-sm px-3 py-2 rounded text-center transition-colors ${lang === "zh-cn" ? "bg-blue-600 text-white" : "border hover:bg-gray-50"}`, "class"), addAttribute(`text-sm px-3 py-2 rounded text-center transition-colors ${lang === "ja" ? "bg-blue-600 text-white" : "border hover:bg-gray-50"}`, "class"), addAttribute(`text-sm px-3 py-2 rounded text-center transition-colors ${lang === "en" ? "bg-blue-600 text-white" : "border hover:bg-gray-50"}`, "class"));
}, "/Users/Suro/Documents/ak/\u72EC\u7ACB\u5F00\u53D1\u9879\u76EE/jidaisya/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://jidaisya.pages.dev");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="mt-16 border-t"> <div class="container py-8 text-sm text-gray-500 flex flex-wrap gap-3 items-center justify-between"> <span>© ${(/* @__PURE__ */ new Date()).getFullYear()} 時代社</span> <span>Built with Astro · Deployed on Cloudflare Pages</span> </div> </footer>`;
}, "/Users/Suro/Documents/ak/\u72EC\u7ACB\u5F00\u53D1\u9879\u76EE/jidaisya/src/components/Footer.astro", void 0);

export { $$BaseLayout as $, $$Header as a, $$Footer as b };
