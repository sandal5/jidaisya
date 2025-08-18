import { b as createAstro, c as createComponent, a as renderTemplate, d as renderSlot, e as renderHead, f as addAttribute, m as maybeRenderHead } from './astro/server.EkyQgL7s.js';
/* empty css                        */

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1, _b, _c;
const $$Astro$2 = createAstro("https://jidaisya.pages.dev");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "\u6642\u4EE3\u793E",
    description = "\u5C08\u6CE8\u4E2D\u570B\u8FD1\u73FE\u7576\u4EE3\u7814\u7A76\u7684\u6B0A\u5A01\u5B78\u8853\u8457\u4F5C\u51FA\u7248\u8207\u50B3\u64AD",
    lang = "zh-tw",
    image,
    author,
    publishedDate,
    type = "website"
  } = Astro2.props;
  const currentUrl = Astro2.url.href;
  const currentPath = Astro2.url.pathname;
  function getLocalizedUrl(targetLang) {
    const baseUrl = Astro2.site || "https://jidaisya.pages.dev";
    let path = currentPath;
    if (lang !== "zh-tw") {
      path = path.replace(new RegExp(`^/${lang}`), "") || "/";
    }
    if (targetLang === "zh-tw") {
      return `${baseUrl}${path === "/" ? "" : path}`;
    }
    return `${baseUrl}/${targetLang}${path === "/" ? "" : path}`;
  }
  const languages = [
    { code: "zh-tw", name: "\u7E41\u9AD4\u4E2D\u6587" },
    { code: "zh-cn", name: "\u7B80\u4F53\u4E2D\u6587" },
    { code: "ja", name: "\u65E5\u672C\u8A9E" },
    { code: "en", name: "English" }
  ];
  return renderTemplate(_c || (_c = __template$1(["<html", '> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><!-- Primary Meta Tags --><title>', '</title><meta name="title"', '><meta name="description"', ">", '<!-- Canonical URL --><link rel="canonical"', "><!-- Hreflang Links -->", '<link rel="alternate" hreflang="x-default"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:site_name" content="\u6642\u4EE3\u793E"><meta property="og:locale"', ">", "", "", "", '<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', ">", '<!-- Favicon --><link rel="icon" href="/favicon.ico" sizes="any"><!-- Structured Data --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Organization",\n        "name": "\u6642\u4EE3\u793E",\n        "description": "\u5C08\u6CE8\u4E2D\u570B\u8FD1\u73FE\u7576\u4EE3\u7814\u7A76\u7684\u6B0A\u5A01\u5B78\u8853\u8457\u4F5C\u51FA\u7248\u8207\u50B3\u64AD",\n        "url": "https://jidaisya.pages.dev",\n        "logo": "https://jidaisya.pages.dev/images/brand/logo.png",\n        "sameAs": [],\n        "address": {\n          "@type": "PostalAddress",\n          "streetAddress": "\u795E\u6236\u5E02\u7058\u5340\u7BE0\u539F\u53F011-12",\n          "postalCode": "657-0016",\n          "addressCountry": "JP"\n        },\n        "contactPoint": {\n          "@type": "ContactPoint",\n          "email": "oukawk@yahoo.co.jp",\n          "contactType": "customer service"\n        }\n      }\n    <\/script>', "<!-- Breadcrumb Structured Data -->", "", '</head> <body class="min-h-screen"> ', ' <main class="container pt-24 pb-8"> ', " </main> ", " </body></html>"])), addAttribute(lang, "lang"), title, addAttribute(title, "content"), addAttribute(description, "content"), author && renderTemplate`<meta name="author"${addAttribute(author, "content")}>`, addAttribute(currentUrl, "href"), languages.map(({ code }) => renderTemplate`<link rel="alternate"${addAttribute(code, "hreflang")}${addAttribute(getLocalizedUrl(code), "href")}>`), addAttribute(getLocalizedUrl("zh-tw"), "href"), addAttribute(type, "content"), addAttribute(currentUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(lang === "zh-tw" ? "zh_TW" : lang === "zh-cn" ? "zh_CN" : lang === "ja" ? "ja_JP" : "en_US", "content"), image && renderTemplate`<meta property="og:image"${addAttribute(image, "content")}>`, image && renderTemplate`<meta property="og:image:alt"${addAttribute(title, "content")}>`, publishedDate && renderTemplate`<meta property="article:published_time"${addAttribute(publishedDate, "content")}>`, author && renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`, addAttribute(currentUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), image && renderTemplate`<meta property="twitter:image"${addAttribute(image, "content")}>`, type === "article" && renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">\n        {\n          "@context": "https://schema.org",\n          "@type": "Article",\n          "headline": "{title}",\n          "description": "{description}",\n          "url": "{currentUrl}",\n          "author": {\n            "@type": "Person",\n            "name": "{author}"\n          },\n          "publisher": {\n            "@type": "Organization",\n            "name": "\u6642\u4EE3\u793E",\n            "logo": {\n              "@type": "ImageObject",\n              "url": "https://jidaisya.pages.dev/images/brand/logo.png"\n            }\n          },\n          "datePublished": "{publishedDate}",\n          "mainEntityOfPage": {\n            "@type": "WebPage",\n            "@id": "{currentUrl}"\n          }\n        }\n      <\/script>']))), currentPath !== "/" && renderTemplate(_b || (_b = __template$1(['<script type="application/ld+json">\n        {\n          "@context": "https://schema.org",\n          "@type": "BreadcrumbList",\n          "itemListElement": [\n            {\n              "@type": "ListItem",\n              "position": 1,\n              "name": "\u9996\u9801",\n              "item": "{getLocalizedUrl(lang)}"\n            }\n          ]\n        }\n      <\/script>']))), renderHead(), renderSlot($$result, $$slots["header"]), renderSlot($$result, $$slots["default"]), renderSlot($$result, $$slots["footer"]));
}, "/Users/Suro/my_code/jidaisya/src/layouts/BaseLayout.astro", void 0);

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
  const currentPath = Astro2.url.pathname;
  const getLocalizedPath = (targetLang) => {
    let path = currentPath;
    if (lang !== "zh-tw") {
      path = path.replace(new RegExp(`^/${lang}`), "") || "/";
    }
    if (targetLang === "zh-tw") {
      return path === "/" ? "/" : path;
    }
    return `/${targetLang}${path === "/" ? "" : path}`;
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
  return renderTemplate(_a || (_a = __template(["", '<header class="fixed top-0 left-0 right-0 z-50 border-b bg-white/95 backdrop-blur-sm transition-all duration-300" id="main-header"> <div class="container flex items-center justify-between h-20"> <!-- Logo --> <a', ' class="flex items-center gap-2 z-50 relative"> <img src="/images/brand/logo.png" alt="\u6642\u4EE3\u793E JIDAISYA" class="h-16 w-auto"> <span class="font-semibold text-[18px] text-[color:var(--brand-primary)] block sm:inline"> <span class="block sm:inline">\u6642\u4EE3\u793E</span> <span class="hidden sm:inline"> JIDAISYA</span> </span> </a> <!-- Desktop Navigation --> <nav class="hidden md:flex gap-6 text-sm"> <a', ' class="hover:text-blue-600 transition-colors">', "</a> <a", ' class="hover:text-blue-600 transition-colors">', "</a> <a", ' class="hover:text-blue-600 transition-colors">', "</a> <a", ' class="hover:text-blue-600 transition-colors">', '</a> </nav> <!-- Language Switcher & Mobile Menu Button --> <div class="flex items-center gap-2"> <!-- \u7D27\u51D1\u8BED\u8A00\u9009\u62E9\u5668\uFF08\u66FF\u6362\u684C\u9762\u7AEF\u7684\u56DB\u4E2A\u94FE\u63A5\uFF09 --> <div class="hidden sm:flex items-center relative" id="lang-switcher"> <button class="text-sm px-3 py-1 rounded border hover:bg-gray-50 flex items-center gap-1" aria-haspopup="listbox" aria-expanded="false"> <!-- \u5730\u7403\u56FE\u6807 --> <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true"> <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" stroke-width="1.5"></path> <path d="M3 12h18M12 3c2.5 2.8 2.5 14.2 0 18M8 5.5c2 .8 6 .8 8 0M8 18.5c2-.8 6-.8 8 0" stroke="currentColor" stroke-width="1.2"></path> </svg> <span class="hidden md:inline"> ', ' </span> </button> <ul class="absolute right-0 top-full mt-2 w-36 border bg-white rounded-md shadow-lg p-1 hidden" role="listbox"> <li><a class="block px-3 py-2 rounded hover:bg-gray-50"', ' hreflang="zh-tw" lang="zh-Hant">\u7E41\u9AD4\u4E2D\u6587</a></li> <li><a class="block px-3 py-2 rounded hover:bg-gray-50"', ' hreflang="zh-cn" lang="zh-Hans">\u7B80\u4F53\u4E2D\u6587</a></li> <li><a class="block px-3 py-2 rounded hover:bg-gray-50"', ' hreflang="ja" lang="ja">\u65E5\u672C\u8A9E</a></li> <li><a class="block px-3 py-2 rounded hover:bg-gray-50"', ' hreflang="en" lang="en">English</a></li> </ul> </div> <!-- Mobile Menu Button --> <button id="mobile-menu-button" class="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors z-50 relative" aria-label="Toggle mobile menu" aria-expanded="false"> <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> <!-- Mobile Navigation Menu --> <nav id="mobile-menu" class="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg opacity-0 invisible z-40" style="transition: opacity 0.3s ease, visibility 0.3s ease;" aria-hidden="true"> <div class="container py-4 space-y-4"> <!-- Mobile Navigation Links --> <div class="space-y-3"> <a', ' class="block py-2 px-4 text-lg hover:bg-gray-50 rounded-md transition-colors">', "</a> <a", ' class="block py-2 px-4 text-lg hover:bg-gray-50 rounded-md transition-colors">', "</a> <a", ' class="block py-2 px-4 text-lg hover:bg-gray-50 rounded-md transition-colors">', "</a> <a", ' class="block py-2 px-4 text-lg hover:bg-gray-50 rounded-md transition-colors">', '</a> </div> <!-- Mobile Language Switcher --> <div class="border-t pt-4"> <p class="px-4 text-sm text-gray-600 mb-3">Language / \u8A9E\u8A00</p> <div class="grid grid-cols-2 gap-2 px-4"> <a', "", ">\u7E41\u9AD4\u4E2D\u6587</a> <a", "", ">\u7B80\u4F53\u4E2D\u6587</a> <a", "", ">\u65E5\u672C\u8A9E</a> <a", "", '>English</a> </div> </div> </div> </nav> </header> <script src="/js/mobile-menu.js"><\/script> <script src="/js/sticky-header.js"><\/script> <script src="/js/language-switcher.js"><\/script>'])), maybeRenderHead(), addAttribute(getPath("/"), "href"), addAttribute(getPath("/books"), "href"), currentNav.books, addAttribute(getPath("/news"), "href"), currentNav.news, addAttribute(getPath("/about"), "href"), currentNav.about, addAttribute(getPath("/submit"), "href"), currentNav.submit, lang === "zh-tw" ? "\u7E41\u9AD4\u4E2D\u6587" : lang === "zh-cn" ? "\u7B80\u4F53\u4E2D\u6587" : lang === "ja" ? "\u65E5\u672C\u8A9E" : "English", addAttribute(getLocalizedPath("zh-tw"), "href"), addAttribute(getLocalizedPath("zh-cn"), "href"), addAttribute(getLocalizedPath("ja"), "href"), addAttribute(getLocalizedPath("en"), "href"), addAttribute(getPath("/books"), "href"), currentNav.books, addAttribute(getPath("/news"), "href"), currentNav.news, addAttribute(getPath("/about"), "href"), currentNav.about, addAttribute(getPath("/submit"), "href"), currentNav.submit, addAttribute(`text-sm px-3 py-2 rounded text-center transition-colors ${lang === "zh-tw" ? "bg-blue-600 text-white" : "border hover:bg-gray-50"}`, "class"), addAttribute(getLocalizedPath("zh-tw"), "href"), addAttribute(`text-sm px-3 py-2 rounded text-center transition-colors ${lang === "zh-cn" ? "bg-blue-600 text-white" : "border hover:bg-gray-50"}`, "class"), addAttribute(getLocalizedPath("zh-cn"), "href"), addAttribute(`text-sm px-3 py-2 rounded text-center transition-colors ${lang === "ja" ? "bg-blue-600 text-white" : "border hover:bg-gray-50"}`, "class"), addAttribute(getLocalizedPath("ja"), "href"), addAttribute(`text-sm px-3 py-2 rounded text-center transition-colors ${lang === "en" ? "bg-blue-600 text-white" : "border hover:bg-gray-50"}`, "class"), addAttribute(getLocalizedPath("en"), "href"));
}, "/Users/Suro/my_code/jidaisya/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://jidaisya.pages.dev");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="mt-16 border-t"> <div class="container py-8 text-sm text-gray-500 flex flex-wrap gap-3 items-center justify-between"> <span>© ${(/* @__PURE__ */ new Date()).getFullYear()} 時代社</span> <span>Built with Astro · Deployed on Cloudflare Pages</span> </div> </footer>`;
}, "/Users/Suro/my_code/jidaisya/src/components/Footer.astro", void 0);

export { $$BaseLayout as $, $$Header as a, $$Footer as b };
