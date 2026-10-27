(function () {
  "use strict";

  var SITE = window.SITE, APPS = window.APPS;
  var root = document.getElementById("app");

  // ---- safe helpers: everything is built with textContent, never innerHTML ----
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function icon(app, cls) {
    var box = el("div", "icon " + (cls || ""));
    box.style.setProperty("--c1", app.color[0]);
    box.style.setProperty("--c2", app.color[1]);
    if (app.icon) {
      var img = el("img");
      img.src = app.icon; img.alt = ""; img.width = 96; img.height = 96;
      img.loading = "lazy"; img.decoding = "async";
      box.appendChild(img);
    } else {
      box.textContent = app.glyph || app.name.charAt(0);
    }
    return box;
  }

  // Downloads are served from this same site (downloads/), only for file names listed in apps.js.
  function downloadUrl(app) {
    if (!/^[A-Za-z0-9._-]+\.apk$/.test(app.file)) return null;
    return "downloads/" + app.file;
  }
  function find(id) {
    for (var i = 0; i < APPS.length; i++) if (APPS[i].id === id) return APPS[i];
    return null;
  }

  function downloadButton(app) {
    var url = downloadUrl(app);
    if (!url) {
      var b = el("span", "btn disabled", "Download unavailable");
      return b;
    }
    var a = el("a", "btn", "Download APK · " + app.size);
    a.href = url;
    a.rel = "noopener noreferrer";
    a.setAttribute("download", app.file);
    return a;
  }

  function home() {
    document.title = "Team Shathi Apps";
    root.textContent = "";
    var hero = el("section", "hero");
    hero.appendChild(el("span", "eyebrow", "Android · Free · Direct APK"));
    var h1 = el("h1", null, "Apps built to be ");
    h1.appendChild(el("em", null, "useful."));
    hero.appendChild(h1);
    hero.appendChild(el("p", null, "Tap an app to see every feature, then download the APK directly. No ads, no account, no tracking."));
    var stats = el("div", "stats");
    [[APPS.length, "apps"], ["0", "ads"], ["0", "trackers"]].forEach(function (s) {
      var d = el("div", "stat"); d.appendChild(el("b", null, String(s[0]))); d.appendChild(el("span", null, s[1])); stats.appendChild(d);
    });
    hero.appendChild(stats);
    root.appendChild(hero);

    var cats = ["All"];
    APPS.forEach(function (a) { if (cats.indexOf(a.category) < 0) cats.push(a.category); });
    var chips = el("div", "chips");
    var grid = el("section", "grid");
    cats.forEach(function (c, i) {
      var b = el("button", "chip" + (i === 0 ? " on" : ""), c);
      b.type = "button";
      b.addEventListener("click", function () {
        Array.prototype.forEach.call(chips.children, function (x) { x.classList.toggle("on", x === b); });
        Array.prototype.forEach.call(grid.children, function (card) {
          card.hidden = !(c === "All" || card.getAttribute("data-cat") === c);
        });
      });
      chips.appendChild(b);
    });
    root.appendChild(chips);

    APPS.forEach(function (app) {
      var card = el("a", "card");
      card.href = "#/" + app.id;
      card.setAttribute("data-cat", app.category);
      card.style.setProperty("--c1", app.color[0]);
      card.style.setProperty("--c2", app.color[1]);
      card.appendChild(icon(app));
      var body = el("div", "cardbody");
      body.appendChild(el("h2", null, app.name));
      body.appendChild(el("p", null, app.tagline));
      var meta = el("div", "meta");
      meta.appendChild(el("span", "tag", app.category));
      meta.appendChild(el("span", null, "v" + app.version.split(" ")[0] + " · " + app.size));
      body.appendChild(meta);
      card.appendChild(body);
      card.appendChild(el("span", "go", "→"));
      grid.appendChild(card);
    });
    root.appendChild(grid);
  }

  function detail(app) {
    document.title = app.name + " · Team Shathi Apps";
    root.textContent = "";
    root.appendChild(Object.assign(el("a", "back", "← All apps"), { href: "#/" }));

    var head = el("section", "dhead");
    head.style.setProperty("--c1", app.color[0]);
    head.style.setProperty("--c2", app.color[1]);
    head.appendChild(icon(app, "big"));
    var t = el("div", "dtext");
    t.appendChild(el("h1", null, app.name));
    t.appendChild(el("p", "lead", app.tagline));
    var row = el("div", "actions");
    row.appendChild(downloadButton(app));
    t.appendChild(row);
    t.appendChild(el("p", "small", "Version " + app.version + " · " + app.android));
    head.appendChild(t);
    root.appendChild(head);

    var figs = [];
    if (app.shots && app.shots.length) {
      var gal = el("section", "block");
      gal.appendChild(el("h2", null, "Inside the app"));
      var shots = el("div", "shots");
      app.shots.forEach(function (s, i) {
        var fig = el("figure", "shot");
        var im = el("img"); im.src = s.src; im.alt = app.name + ": " + s.title;
        im.loading = "lazy"; im.width = 225; im.height = 500;
        var cap = el("figcaption");
        cap.appendChild(el("b", null, s.title));
        cap.appendChild(el("span", null, s.text));
        fig.appendChild(im); fig.appendChild(cap);
        shots.appendChild(fig); figs.push(fig);
      });
      gal.appendChild(shots);
      gal.appendChild(el("p", "small", "Real screenshots from the app. Tap a feature below to see where it lives."));
      root.appendChild(gal);
    }

    var about = el("section", "block");
    about.appendChild(el("h2", null, "About"));
    about.appendChild(el("p", null, app.about));
    root.appendChild(about);

    var feat = el("section", "block");
    feat.appendChild(el("h2", null, "Features"));
    var list = el("div", "features");
    app.features.forEach(function (f) {
      var item = el("div", "feature");
      item.appendChild(el("h3", null, f[0]));
      item.appendChild(el("p", null, f[1]));
      if (typeof f[2] === "number" && figs[f[2]]) {
        var link = el("button", "see", "See it in the app →");
        link.type = "button";
        link.addEventListener("click", function () {
          var fig = figs[f[2]];
          figs.forEach(function (x) { x.classList.remove("hl"); });
          fig.classList.add("hl");
          fig.parentNode.scrollTo({ left: fig.offsetLeft - 16, behavior: "smooth" });
          fig.parentNode.parentNode.scrollIntoView({ behavior: "smooth", block: "center" });
        });
        item.classList.add("has-shot");
        item.appendChild(link);
      }
      list.appendChild(item);
    });
    feat.appendChild(list);
    root.appendChild(feat);

    if (app.notes) {
      var note = el("section", "block note");
      note.appendChild(el("h2", null, "Good to know"));
      note.appendChild(el("p", null, app.notes));
      root.appendChild(note);
    }

    var inst = el("section", "block");
    inst.appendChild(el("h2", null, "Install & verify"));
    var ol = el("ol");
    ["Download the APK above on your Android phone.",
     "Open it. If asked, allow “Install unknown apps” for your browser or file manager.",
     "Optional but recommended: check the SHA-256 below matches your downloaded file."
    ].forEach(function (s) { ol.appendChild(el("li", null, s)); });
    inst.appendChild(ol);
    var hash = el("div", "hash");
    hash.appendChild(el("code", null, app.sha256));
    var copy = el("button", "copy", "Copy");
    copy.type = "button";
    copy.addEventListener("click", function () {
      if (navigator.clipboard) navigator.clipboard.writeText(app.sha256).then(function () {
        copy.textContent = "Copied"; setTimeout(function () { copy.textContent = "Copy"; }, 1500);
      });
    });
    hash.appendChild(copy);
    inst.appendChild(hash);
    inst.appendChild(el("p", "small", "Windows: Get-FileHash file.apk · macOS/Linux: shasum -a 256 file.apk. If it does not match, do not install."));
    root.appendChild(inst);
  }

  function route() {
    var m = /^#\/([a-z0-9-]+)$/.exec(location.hash);
    var app = m && find(m[1]);
    if (app) detail(app); else home();
    window.scrollTo(0, 0);
    root.focus({ preventScroll: true });
  }

  if (SITE.contact && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(SITE.contact)) {
    document.getElementById("contact").textContent = "Contact: " + SITE.contact;
  }
  window.addEventListener("hashchange", route);
  route();
})();

