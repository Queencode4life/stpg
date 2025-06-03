// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = mocha;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Alicante",
    scale: "C",
  },
  clock: {
    format: "a d/b/Y, h:i:s",
    icon_color: palette.peach,
  },
  search: {
    engines: {
      y: ["https://www.youtube.com/results?search_query=", "YouTube"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  fastlink: "https://duckduckgo.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "studies",
      background_url: "src/img/banners/banner_02.gif",
      categories: [
        {
          name: "academy",
          links: [
            {
              name: "común",
              url: "https://www.oposicionesbiologia.com/protected/?comeFrom=%2Fzona-com%C3%BAn%2F",
              icon: "device-mobile",
              icon_color: palette.green,
            },
            {
              name: "completo",
              url: "https://www.oposicionesbiologia.com/protected/?comeFrom=%2Fzona-v%C3%ADa-3%2F",
              icon: "book",
              icon_color: palette.sapphire,
            },
            {
              name: "paralelo",
              url: "https://www.oposicionesbiologia.com/protected/?comeFrom=%2Favance-marzo%2F",
              icon: "notebook",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "outlook",
              url: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=9199bf20-a13f-4107-85dc-02114787ef48&scope=https%3A%2F%2Foutlook.office.com%2F.default%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Foutlook.live.com%2Fmail%2F&client-request-id=5f9be950-a957-a348-6b89-2bb852868343&response_mode=fragment&client_info=1&prompt=select_account&nonce=019736bc-f9ae-7921-b275-5d6f2a0f7d99&state=eyJpZCI6IjAxOTczNmJjLWY5YWItN2ZiZi05OTgyLWU4YzgwYjZlNjU5OCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&x-client-SKU=msal.js.browser&x-client-VER=4.12.0&response_type=code&code_challenge=csXmelSj7v6KU3wzieUkOdJ7TlPl9GDDLyfp62rlRpY&code_challenge_method=S256&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c&fl=dob,flname,wld",
              icon: "brand-windows",
              icon_color: palette.sapphire,
            },
            {
              name: "onedrive",
              url: "https://onedrive.live.com/login",
              icon: "brand-onedrive",
              icon_color: palette.mauve,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "gva 2025",
              url: "https://ceice.gva.es/es/web/rrhh-educacion/2025-cos-de-professors-d-ensenyament-secundari-ingres-i-noves-especialitats",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "adj dif cob",
              url: "https://ceice.gva.es/es/web/rrhh-educacion/convocatoria-y-peticion-telematica6",
              icon: "badge-filled",
              icon_color: palette.sapphire,
            },
            {
              name: "calameo",
              url: "https://calameodownload.com/",
              icon: "border-radius",
              icon_color: palette.mauve,
            },
            {
              name: "site kike",
              url: "https://sites.google.com/view/elsitedekike/inicio",
              icon: "network",
              icon_color: palette.red,
            },
            {
              name: "méritos",
              url: "https://www.campuseducacion.com/cursos-homologados/oposiciones-profesores-secundaria",
              icon: "eye-bolt",
              icon_color: palette.peach,
            },
            {
              name: "currículo",
              url: "https://ceice.gva.es/es/web/ordenacion-academica/secundaria/curriculo",
              icon: "home-2",
              icon_color: palette.yellow,
            },
          ],
        },
      ],
    },
    {
      name: "chill",
      background_url: "src/img/banners/banner_08.gif",
      categories: [
        {
          name: "media",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "netflix",
              url: "https://www.netflix.com/es/login",
              icon: "brand-netflix",
              icon_color: palette.text,
            },
            {
              name: "pages proxies list",
              url: "https://fmhy.pages.dev/videopiracyguide",
              icon: "list",
              icon_color: palette.pink,
            },
          ],
        },
        {
          name: "anime",
          links: [
            {
              name: "animotvslash",
              url: "https://www.animotvslash.org/",
              icon: "brand-funimation",
              icon_color: palette.peach,
            },
            {
              name: "animeheaven",
              url: "https://animeheaven.im/",
              icon: "alien",
              icon_color: palette.red,
            },
            {
              name: "animeflv",
              url: "https://www3.animeflv.net/",
              icon: "brand-fortnite",
              icon_color: palette.teal,
            },
            {
              name: "jkanime",
              url: "https://jkanime.net/",
              icon: "brand-steam",
              icon_color: palette.yellow,
            },
          ],
        },
        {
          name: "dramas",
          links: [
            {
              name: "kisskh",
              url: "https://kisskh.id/",
              icon: "heart-star",
              icon_color: palette.peach,
            },
            {
              name: "dramacool",
              url: "https://dramacool.com.tr/",
              icon: "mood-smile-beam",
              icon_color: palette.sky,
            },
            {
              name: "kiss123",
              url: "https://kshow123.tv/",
              icon: "number-123",
              icon_color: palette.green,
            },
            {
              name: "myasiantv",
              url: "https://myasiantv.com.cv/",
              icon: "device-tv",
              icon_color: palette.sapphire,
            },
            {
              name: "doramasmp4",
              url: "https://doramasmp4.io/",
              icon: "player-play",
              icon_color: palette.maroon,
            },
            {
              name: "doramasflix",
              url: "https://doramasflix.in/",
              icon: "player-track-next",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chilling",
      background_url: "src/img/banners/banner_08.gif",
      categories: [
        {
          name: "movies&tvshows",
          links: [
            {
              name: "kipstream",
              url: "https://kipstream.lol/",
              icon: "brand-kick",
              icon_color: palette.red,
            },
            {
              name: "fmovies proxies",
              url: "https://www.thetechbasket.com/fmovies-proxy-list/",
              icon: "list",
              icon_color: palette.blue,
            },
            {
              name: "paraonline",
              url: "https://paraonline.cc/",
              icon: "hand-love-you",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "telenov",
          links: [
            {
              name: "olivia",
              url: "https://www.clubvideostv.com/lista-el-jardin-de-olivia",
              icon: "brand-android",
              icon_color: palette.green,
            },
            {
              name: "novelas360",
              url: "https://novelas360.com/",
              icon: "view-360-number",
              icon_color: palette.pink,
            },
            {
              name: "ennovelas",
              url: "https://ts.ennovelas.net/mainp.php?p=inicio",
              icon: "movie",
              icon_color: palette.peach,
            },
            {
              name: "srnovelas",
              url: "https://srnovelas.com/",
              icon: "video",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "download",
          links: [
            {
              name: "yt-dlp",
              url: "https://ytdlp.online/",
              icon: "cloud-download",
              icon_color: palette.green,
            },
            {
              name: "yt subsdown",
              url: "https://subsdown.com/en/",
              icon: "square-rounded-letter-s",
              icon_color: palette.blue,
            },
            {
              name: "archive",
              url: "https://archive.org/",
              icon: "building-bank",
              icon_color: palette.text,
            },
            {
              name: "anna's archive",
              url: "https://annas-archive.cc/",
              icon: "square-rounded-letter-a",
              icon_color: palette.pink,
            },
            {
              name: "zdescargas",
              url: "https://www.zdescargas.org/",
              icon: "square-rounded-letter-z",
              icon_color: palette.yellow,
            },
            {
              name: "zoboko",
              url: "https://zoboko.com/",
              icon: "books",
              icon_color: palette.teal,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.pink);
