[
    {
        "name": "Rich text editor",
        "alias": "rte",
        "view": "rte",
        "icon": "icon-article"
    },
    {
        "name": "Image",
        "alias": "media",
        "view": "media",
        "icon": "icon-picture"
    },
    {
        "name": "Macro",
        "alias": "macro",
        "view": "macro",
        "icon": "icon-settings-alt"
    },
    {
        "name": "Embed",
        "alias": "embed",
        "view": "embed",
        "icon": "icon-movie-alt"
    },
    {
        "name": "Headline",
        "alias": "headline",
        "view": "textstring",
        "icon": "icon-coin",
        "config": {
            "style": "font-size: 36px; line-height: 45px; font-weight: bold",
            "markup": "<h1>#value#</h1>"
        }
    },

    {
        "name": "Page Header",
        "alias": "page_header",
        "view": "textstring",
        "icon": "icon-coin",
        "config": {
            "style": "font-size: 36px; line-height: 45px; font-weight: bold;",
            "markup": "<div class='page-header'><h1>#value#</h1></div>"
        }
    },

    {
        "name": "Tagline",
        "alias": "tagline",
        "view": "textstring",
        "icon": "icon-coin",
        "config": {
            "style": "font-size: 25px; line-height: 35px; font-weight: normal;",
            "markup": "<h2 class='tagline'>#value#</h2>"
        }
    },

    {
        "name": "Headline centered",
        "alias": "headline_centered",
        "view": "textstring",
        "icon": "icon-coin",
        "config": {
            "style": "font-size: 30px; line-height: 45px; font-weight: bold; text-align:center;",
            "markup": "<h1 style='text-align:center;'>#value#</h1>"
        }
    },

    {
        "name": "Abstract",
        "alias": "abstract",
        "view": "textstring",
        "icon": "icon-coin",
        "config": {
            "style": "font-size: 16px; line-height: 20px; font-weight: bold;",
            "markup": "<div class='abstract'>#value#</div>"
        }
    },

    {
        "name": "Paragraph",
        "alias": "paragraph",
        "view": "textstring",
        "icon": "icon-font",
        "config": {
            "style": "font-size: 16px; line-height: 20px; font-weight: light;",
            "markup": "<p>#value#</p>"
        }
    },

    {
        "name": "Leadtext",
        "alias": "lead_text",
        "view": "textstring",
        "icon": "icon-font",
        "config": {
            "style": "font-size: 16px; line-height: 20px; font-weight: light;",
            "markup": "<p class='lead'>#value#</p>"
        }
    },

    {
        "name": "Quote",
        "alias": "quote",
        "view": "textstring",
        "icon": "icon-quote",
        "config": {
            "style": "border-left: 3px solid #ccc; padding: 10px; color: #ccc; font-family: serif; font-style: italic; font-size: 18px",
            "markup": "<blockquote>#value#</blockquote>"
        }
    },

    {
        "name": "Banner",
        "alias": "Banner",
        "view": "/App_Plugins/Grid/Editors/Views/banner.html",
        "render": "/App_Plugins/Grid/Editors/Render/banner.cshtml",
        "icon": "icon-movie-alt"
    },

    {
        "name": "Simple Article",
        "alias": "SimpleArticle",
        "view": "/App_Plugins/Grid/Editors/Views/article.html",
        "render": "/App_Plugins/Grid/Editors/Render/article.cshtml",
        "icon": "icon-movie-alt"
    },

    {
        "name": "Eye Catcher",
        "alias": "EyeCatcher",
        "view": "/App_Plugins/Grid/Editors/Views/eyecatcher.html",
        "render": "/App_Plugins/Grid/Editors/Render/eyecatcher.cshtml",
        "icon": "icon-movie-alt"
    },

    {
        "name": "Quote with description",
        "alias": "quote_D",
        "view": "/App_Plugins/Grid/Editors/Views/quote_with_description.html",
        "render": "/App_Plugins/Grid/Editors/Render/quote_with_description.cshtml",
        "icon": "icon-quote",
        "config": {
            "style": "border-left: 3px solid #ccc; padding: 10px; color: #ccc; font-family: serif; font-variant: italic; font-size: 18px"
        }
    },

    {
        "name": "Panel",
        "alias": "panel",
        "view": "/App_Plugins/Grid/Editors/Views/panel.html",
        "render": "/App_Plugins/Grid/Editors/Render/panel.cshtml",
        "icon": "icon-font",
        "config": {
            "style": "font-size: 16px; line-height: 20px; font-weight: light;"
        }
    },

    {
        "name": "Spotlight",
        "alias": "spotlight",
        "view": "/App_Plugins/Grid/Editors/Views/spotlight.html",
        "render": "/App_Plugins/Grid/Editors/Render/spotlight.cshtml",
        "icon": "icon-movie-alt"
    },

    {
        "name": "Jumbotron",
        "alias": "Jumbotron",
        "view": "/App_Plugins/Grid/Editors/Views/jumbotron.html",
        "render": "/App_Plugins/Grid/Editors/Render/jumbotron.cshtml",
        "icon": "icon-font",
        "config": {
            "style": "font-size: 16px; line-height: 20px; font-weight: light;"
        }
    },

    {
        "name": "Call to Action",
        "alias": "CtA",
        "view": "/App_Plugins/Grid/Editors/Views/cta.html",
        "render": "/App_Plugins/Grid/Editors/Render/cta.cshtml",
        "icon": "icon-movie-alt"
    },

    {
        "name": "Code",
        "alias": "code",
        "view": "textstring",
        "icon": "icon-code",
        "config": {
            "style": "overflow: auto;padding: 6px 10px;border: 1px solid #ddd;border-radius: 3px;background-color: #f8f8f8;font-size: .9rem;font-family: 'Courier 10 Pitch', Courier, monospace;line-height: 19px;",
            "markup": "<pre>#value#</pre>"
        }
    }

]