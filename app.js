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

  // ---- live numbers (download count, ratings, reviews) from the small API; the site works without it ----
  var API = /^https:\/\/[a-z0-9.-]+$/.test(SITE.api || "") ? SITE.api : "";
  var statsP = null;
  function getStats() {
    if (!API) return Promise.resolve(null);
    if (!statsP) statsP = fetch(API + "/api/stats").then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
    return statsP;
  }
  function stars(n) { return "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n); }
  function statText(s) {
    if (!s) return "";
    var t = s.downloads + (s.downloads === 1 ? " download" : " downloads");
    return s.count ? "★ " + s.rating.toFixed(1) + " (" + s.count + ") · " + t : t;
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
    a.addEventListener("click", function () {
      if (!API) return;
      try {
        fetch(API + "/api/dl/" + app.id, { method: "POST", keepalive: true })
          .then(function () { statsP = null; }).catch(function () {});
      } catch (e) { /* counting is best effort */ }
    });
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

    var box = el("div", "search");
    var input = el("input");
    input.type = "search"; input.placeholder = "Search apps or features";
    input.setAttribute("aria-label", "Search apps"); input.autocomplete = "off"; input.spellcheck = false;
    box.appendChild(input);
    root.appendChild(box);

    var chips = el("div", "chips");
    var grid = el("section", "grid");
    var empty = el("p", "empty", "No app matches your search.");
    empty.hidden = true;
    var cat = "All";

    function apply() {
      var q = input.value.trim().toLowerCase(), shown = 0;
      Array.prototype.forEach.call(grid.children, function (card) {
        var ok = (cat === "All" || card.getAttribute("data-cat") === cat) &&
                 (!q || card.getAttribute("data-text").indexOf(q) >= 0);
        card.hidden = !ok; if (ok) shown++;
      });
      empty.hidden = shown > 0;
    }
    input.addEventListener("input", apply);

    cats.forEach(function (c, i) {
      var b = el("button", "chip" + (i === 0 ? " on" : ""), c);
      b.type = "button";
      b.addEventListener("click", function () {
        Array.prototype.forEach.call(chips.children, function (x) { x.classList.toggle("on", x === b); });
        cat = c; apply();
      });
      chips.appendChild(b);
    });
    root.appendChild(chips);

    APPS.forEach(function (app) {
      var card = el("a", "card");
      card.href = "#/" + app.id;
      card.setAttribute("data-cat", app.category);
      card.setAttribute("data-text", [app.name, app.tagline, app.category, app.about]
        .concat(app.features.map(function (f) { return f[0] + " " + f[1]; })).join(" ").toLowerCase());
      card.style.setProperty("--c1", app.color[0]);
      card.style.setProperty("--c2", app.color[1]);
      card.appendChild(icon(app));
      var body = el("div", "cardbody");
      body.appendChild(el("h2", null, app.name));
      body.appendChild(el("p", null, app.tagline));
      var meta = el("div", "meta");
      meta.appendChild(el("span", "tag", app.category));
      meta.appendChild(el("span", null, "v" + app.version.split(" ")[0] + " · " + app.size));
      var live = el("span", "live");
      meta.appendChild(live);
      getStats().then(function (all) { if (all && all[app.id]) live.textContent = statText(all[app.id]); });
      body.appendChild(meta);
      card.appendChild(body);
      card.appendChild(el("span", "go", "→"));
      grid.appendChild(card);
    });
    root.appendChild(grid);
    root.appendChild(empty);
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
    var liveStat = el("p", "small livestat");
    t.appendChild(liveStat);
    getStats().then(function (all) { if (all && all[app.id]) liveStat.textContent = statText(all[app.id]); });
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
    inst.appendChild(el("h2", null, "How to install"));
    var ol = el("ol");
    ["Tap Download APK on your Android phone.",
     "Open the file. If asked, allow “Install unknown apps” for your browser."
    ].forEach(function (s) { ol.appendChild(el("li", null, s)); });
    inst.appendChild(ol);

    var adv = el("details", "adv");
    adv.appendChild(el("summary", null, "Advanced: verify the file (SHA-256)"));
    adv.appendChild(el("p", "small", "Compare this fingerprint with your downloaded file. If it does not match, do not install."));
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
    adv.appendChild(hash);
    adv.appendChild(el("p", "small", "Windows: Get-FileHash file.apk · macOS/Linux: shasum -a 256 file.apk"));
    inst.appendChild(adv);
    root.appendChild(inst);

    if (API) root.appendChild(reviewsBlock(app));
  }

  function reviewsBlock(app) {
    var sec = el("section", "block reviews");
    sec.appendChild(el("h2", null, "Ratings & reviews"));
    var summary = el("p", "small");
    getStats().then(function (all) {
      var s = all && all[app.id];
      summary.textContent = s && s.count ? "★ " + s.rating.toFixed(1) + " average from " + s.count + (s.count === 1 ? " review" : " reviews") : "No reviews yet. Be the first.";
    });
    sec.appendChild(summary);

    var list = el("div", "rlist");
    sec.appendChild(list);
    fetch(API + "/api/reviews/" + app.id).then(function (r) { return r.ok ? r.json() : []; }).then(function (items) {
      items.forEach(function (r) {
        var card = el("div", "review");
        var top = el("div", "rtop");
        top.appendChild(el("b", "rstars", stars(r.rating)));
        top.appendChild(el("span", null, (r.name || "Anonymous") + " · " + new Date(r.ts).toLocaleDateString()));
        card.appendChild(top);
        if (r.comment) card.appendChild(el("p", null, r.comment));
        list.appendChild(card);
      });
    }).catch(function () {});

    // write a review
    var box = el("div", "rform");
    box.appendChild(el("h3", null, "Rate this app"));
    var rating = 0, starRow = el("div", "starpick"), starBtns = [];
    starRow.setAttribute("role", "group"); starRow.setAttribute("aria-label", "Your rating");
    for (var i = 1; i <= 5; i++) (function (n) {
      var b = el("button", "star", "☆");
      b.type = "button"; b.setAttribute("aria-label", n + (n === 1 ? " star" : " stars"));
      b.addEventListener("click", function () {
        rating = n;
        starBtns.forEach(function (x, j) { x.textContent = j < n ? "★" : "☆"; x.classList.toggle("on", j < n); });
      });
      starBtns.push(b); starRow.appendChild(b);
    })(i);
    box.appendChild(starRow);

    var name = el("input");
    name.type = "text"; name.maxLength = 40; name.placeholder = "Your name (optional)"; name.autocomplete = "off";
    name.setAttribute("aria-label", "Your name (optional)");
    var comment = el("textarea");
    comment.maxLength = 500; comment.rows = 4; comment.placeholder = "Write a comment (optional)";
    comment.setAttribute("aria-label", "Comment (optional)");
    var hp = el("input", "hp");
    hp.type = "text"; hp.tabIndex = -1; hp.autocomplete = "off"; hp.setAttribute("aria-hidden", "true");
    var send = el("button", "btn send", "Send review");
    send.type = "button";
    var msg = el("p", "small rmsg");
    msg.setAttribute("role", "status");
    send.addEventListener("click", function () {
      if (!rating) { msg.textContent = "Choose 1 to 5 stars first."; return; }
      send.disabled = true; msg.textContent = "Sending…";
      fetch(API + "/api/reviews/" + app.id, {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ rating: rating, name: name.value, comment: comment.value, hp: hp.value })
      }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) {
          if (res.ok) { msg.textContent = "Thank you! Your review will appear after it is approved."; name.value = ""; comment.value = ""; return; }
          msg.textContent = res.j.error || "Could not send. Try again later."; send.disabled = false;
        }).catch(function () { msg.textContent = "Could not send. Check your connection."; send.disabled = false; });
    });
    [name, comment, hp, send, msg].forEach(function (n) { box.appendChild(n); });
    box.appendChild(el("p", "small", "Reviews are checked before they show. Please do not write your phone number, email or other personal details, and no links."));
    sec.appendChild(box);
    return sec;
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

