module.exports = {
  "title": "JT",
  "description": " ",
  "serviceWorker": true,
  "ga": "UA-146443449-1",
  "themeConfig": {
    "repo": "pterobyte",
    "nav": [
      {
        "text": "Home",
        "link": "/"
      },
      {
        "text": "Projects",
        "link": "/projects/"
      },
      {
        "text": "Blog",
        "link": "/blog/"
      },
      {
        "text": "About",
        "link": "/about/"
      },
      {
        "text": "Contact",
        "link": "mailto:jt.houk@outlook.com?subject=Hello&body="
      }
    ],
    "sidebar": {
      "/blog/": [
        "a-weekly-commute-in-podcasts",
        "how-to-configure-ssl-on-aliyun-dns-for-an-aws-application-load-balancer-for-0"
      ],
      "/projects/": [
        "akkadu",
        "doomsday-clock",
        "dropbox-paper-cms",
        "furun-adventures",
        "proxy-worker",
        "site-shot",
        "vue-beijing"
      ]
    }
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ]
  ],
  "evergreen": true
}