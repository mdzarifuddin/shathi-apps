// One entry per app. `file` must match the file name uploaded to the GitHub release.
// `sha256` lets visitors verify the APK was not swapped or tampered with.
// `shots` are real screenshots; a feature's 3rd item is the index of the shot that shows it.
window.APPS = [
  {
    "id": "rapid-office-pro",
    "name": "Rapid Office Pro",
    "tagline": "A fast reader for every document on your phone.",
    "category": "Productivity",
    "icon": "img/rapid-office-pro.png",
    "color": [
      "#2563eb",
      "#1e40af"
    ],
    "glyph": "R",
    "version": "1.1 (build 13)",
    "size": "15.8 MB",
    "android": "Android 7.0+",
    "file": "rapid-office-pro-1.1.apk",
    "sha256": "37b08d4291462f2fb6dbc6aeffd2eaade73acdfaecd3c395c4966acb746faeba",
    "about": "Open PDF, Word, Excel, PowerPoint, OpenDocument, CSV, e-books and plain text in one light app. Files are recognised by their content, not their name, and large spreadsheets open in seconds.",
    "features": [
      [
        "Reads everything",
        "PDF, DOCX/DOC/RTF, XLSX/XLS, PPTX/PPT, ODT/ODS/ODP, CSV/TSV, HTML, EPUB/MOBI and source code.",
        0
      ],
      [
        "Opens by content",
        "A Word file saved as .bin or a PDF with no extension still opens in the right viewer.",
        0
      ],
      [
        "Big sheets, fast",
        "A 250,000-row CSV opens in about 4 seconds; only visible cells are drawn so scrolling stays smooth.",
        1
      ],
      [
        "Slide show mode",
        "Full-screen presentations, swipe or tap to move, rotates with the phone."
      ],
      [
        "Whole-phone search",
        "Find documents across internal storage and the memory card, not just recent files.",
        0
      ],
      [
        "Smart reading tools",
        "Pinch zoom, double-tap zoom, text select/copy/translate, page jump, bookmarks and fast scroll handle.",
        1
      ],
      [
        "Keeps your history",
        "Installs over Rapid PDF and earlier Rapid Office Pro builds without losing reading history.",
        0
      ]
    ],
    "notes": "Reader only (no editing). Grant 'All files access' for whole-phone search.",
    "shots": [
      {
        "src": "img/shots/rapid-1.jpg",
        "title": "Recent & search",
        "text": "Search across every document, with Recent, Favorite and Phone tabs."
      },
      {
        "src": "img/shots/rapid-2.jpg",
        "title": "Spreadsheet viewer",
        "text": "A CSV opens as a real grid with column letters, row numbers and a reading toolbar."
      }
    ]
  },
  {
    "id": "pothshathi",
    "name": "PothShathi",
    "tagline": "Dhaka bus, intercity bus and metro fares in one place.",
    "category": "Travel",
    "icon": "img/pothshathi.png",
    "color": [
      "#0d9488",
      "#115e59"
    ],
    "version": "1.0.1",
    "size": "56.2 MB",
    "android": "Android 7.0+",
    "file": "pothshathi-1.0.1.apk",
    "sha256": "2e1f0591a8b39468c137720b4daaf92e721e95005b8f2aaa0bef53d7b500704a",
    "about": "A Bangla-first commuting companion that shows fares and routes for Dhaka city buses, long-distance buses and the metro rail. Independent app, not affiliated with BRTA or DMTCL.",
    "features": [
      [
        "Dhaka bus routes",
        "Pick your boarding and destination stops and see matching routes with stop-by-stop details.",
        1
      ],
      [
        "Fare calculation",
        "Instant estimated fares for city bus journeys.",
        0
      ],
      [
        "Intercity buses",
        "Long-distance route and fare information between districts.",
        4
      ],
      [
        "Metro rail",
        "Station-to-station metro fares and route information.",
        3
      ],
      [
        "Route detail & charts",
        "Full route view, bus info and fare chart images you can open anytime.",
        2
      ],
      [
        "Bangla interface",
        "Built with a Bengali font and clear Bangla text throughout."
      ]
    ],
    "notes": "Fares are estimates; always confirm with the conductor or counter.",
    "shots": [
      {
        "src": "img/shots/poth-1.jpg",
        "title": "Instant fare",
        "text": "Pick From and To: distance, per-km rate, fare, student fare and the buses that run it."
      },
      {
        "src": "img/shots/poth-2.jpg",
        "title": "All buses",
        "text": "178 city buses with route number, stops and distance."
      },
      {
        "src": "img/shots/poth-3.jpg",
        "title": "Route fare charts",
        "text": "Official fare charts for every route, with favourites."
      },
      {
        "src": "img/shots/poth-4.jpg",
        "title": "Metro rail",
        "text": "Search, fare chart and timetable for MRT Line-6."
      },
      {
        "src": "img/shots/poth-5.jpg",
        "title": "Intercity",
        "text": "District-to-district buses with AC and non-AC fares."
      }
    ]
  },
  {
    "id": "life-tracker-pro",
    "name": "Life Tracker Pro",
    "tagline": "Tuition, money, study and family lists, all in one offline app.",
    "category": "Productivity",
    "icon": "img/life-tracker-pro.png",
    "color": [
      "#7c3aed",
      "#4c1d95"
    ],
    "version": "1.1.3",
    "size": "57.8 MB",
    "android": "Android 7.0+",
    "file": "life-tracker-pro-1.1.3.apk",
    "sha256": "10de5e391294a67b91bda1ca9bf6b8d3103af89ec01f06fb26c6619683bdbbe4",
    "about": "An offline-first personal life-management app for private tutors, university students, thesis researchers and government-job aspirants in Bangladesh. Dark mode by default, built for one-hand use.",
    "features": [
      [
        "Dashboard",
        "Today's classes, month income, pending fees and study progress at a glance.",
        0
      ],
      [
        "Students & class log",
        "Student profiles plus a 30-second post-class entry with voice-to-text and a 'last class' summary.",
        1
      ],
      [
        "Schedule & exams",
        "Day/week/month calendar with conflict detection, class reminders and exam countdowns.",
        2
      ],
      [
        "Fee tracker",
        "Paid / pending / partial per student; paid fees post to income automatically.",
        1
      ],
      [
        "Private finance vault",
        "PIN- or biometric-locked income, expense, savings, assets and goals.",
        3
      ],
      [
        "Govt job & thesis tracker",
        "Daily MCQ targets and stage-based thesis progress with deadline reminders.",
        4
      ],
      [
        "Reports",
        "Monthly income/expense and progress reports, exportable as PDF, Excel or CSV."
      ],
      [
        "Bazar & family lists",
        "Shared grocery and future-needs lists; finished trips log the expense to Finance.",
        4
      ]
    ],
    "notes": "Works offline. Some modules in the long-term plan (AI assistant) may not be in this build.",
    "shots": [
      {
        "src": "img/shots/life-1.jpg",
        "title": "Dashboard",
        "text": "Today's classes, tasks, progress and upcoming exams at a glance."
      },
      {
        "src": "img/shots/life-2.jpg",
        "title": "Students & fees",
        "text": "Student profiles and a Pay shortcut for fee tracking."
      },
      {
        "src": "img/shots/life-3.jpg",
        "title": "Schedule",
        "text": "Your weekly timetable with class reminders."
      },
      {
        "src": "img/shots/life-4.jpg",
        "title": "Finance vault",
        "text": "Category-based income and expense tracking with balance."
      },
      {
        "src": "img/shots/life-5.jpg",
        "title": "More modules",
        "text": "Tasks, Govt Job Prep, MSc Thesis and Family Lists."
      }
    ]
  },
  {
    "id": "sumo-battle",
    "name": "Sumo Battle",
    "tagline": "Push, stack and slap! Five-lane sumo battles.",
    "category": "Game",
    "icon": "img/sumo-battle.png",
    "color": [
      "#dc2626",
      "#7f1d1d"
    ],
    "version": "1.2.4",
    "size": "3.2 MB",
    "android": "Android 7.0+",
    "file": "sumo-battle-1.2.4.apk",
    "sha256": "32a17a23c2f62991a09df5d71072f52c0079facd85b2221a9795d93142dc1a01",
    "about": "A fast, funny 5-lane strategy game. Send sumo fighters down the lanes, stack them to out-weigh your opponent and smash through to their HP bar. No ads.",
    "features": [
      [
        "Online 1v1",
        "Quick match with players at your level, or a private room with a friend's code.",
        4
      ],
      [
        "Nearby 1v1",
        "Play a friend over WiFi or Bluetooth with no internet.",
        4
      ],
      [
        "Vs Bot",
        "Easy, Medium and Hard difficulty.",
        4
      ],
      [
        "Two players, one phone",
        "Put the phone on the table and battle face to face.",
        3
      ],
      [
        "Two teams",
        "Clown Bears and the Hippo Clan, with a crowned Yokozuna and an Oni King.",
        0
      ],
      [
        "Smart strategy",
        "Heavier side wins the shove; stacking sumos in one lane adds their weight.",
        1
      ],
      [
        "Ranks & history",
        "Bronze to Diamond levels and a match history against every opponent.",
        0
      ],
      [
        "Emoji & quick chat",
        "3D emoji reactions and quick chat. Chat is deleted after 8 hours.",
        2
      ]
    ],
    "notes": "Online play uses Google sign-in or guest mode. Offline modes need no internet.",
    "shots": [
      {
        "src": "img/shots/sumo-1.jpg",
        "title": "Home",
        "text": "Pick Online, Nearby, Bot or Two-player."
      },
      {
        "src": "img/shots/sumo-2.jpg",
        "title": "The battle",
        "text": "Five lanes: heavier side wins the shove."
      },
      {
        "src": "img/shots/sumo-3.jpg",
        "title": "Emoji & quick chat",
        "text": "3D reactions and quick chat during a match."
      },
      {
        "src": "img/shots/sumo-4.jpg",
        "title": "Two players, one phone",
        "text": "Face-to-face on one screen."
      },
      {
        "src": "img/shots/sumo-5.jpg",
        "title": "Start screen",
        "text": "Choose your team and mode."
      }
    ]
  },
  {
    "id": "unilens",
    "name": "UniLens",
    "tagline": "Your university routine, with class reminders.",
    "category": "Education",
    "icon": "img/unilens.png",
    "color": [
      "#ea580c",
      "#9a3412"
    ],
    "version": "1.0",
    "size": "6.4 MB",
    "android": "Android 7.0+",
    "file": "unilens.apk",
    "sha256": "2253f4515530c566fda77deab2b2d6961e4411dfd0abf461b3e9f23f628cfc66",
    "about": "A student companion for university life: your class routine and reminders, honest faculty ratings, a semester planner, cover-page maker, notice board and course explorer in one app.",
    "features": [
      [
        "My Routine",
        "Your timetable with a live 'next class in 26 min' card.",
        0
      ],
      [
        "Class reminders",
        "A notification before each class plus an evening summary of tomorrow's classes, restored after reboot.",
        0
      ],
      [
        "Semester Planner",
        "Suggests the best-rated teacher for each course you take.",
        0
      ],
      [
        "Faculty Ratings",
        "Honest student feedback, scored and ranked.",
        1
      ],
      [
        "Student Portal",
        "Your student card, profile and class routine.",
        1
      ],
      [
        "Cover Page Maker",
        "Assignment and lab-report covers as clean PDFs.",
        1
      ],
      [
        "Notice Board",
        "Jump to the latest official university notices.",
        1
      ],
      [
        "Course Explorer",
        "See every course and what it actually teaches.",
        1
      ]
    ],
    "notes": "Needs notification permission for reminders.",
    "shots": [
      {
        "src": "img/shots/unilens-1.jpg",
        "title": "Home & routine",
        "text": "Next class countdown, semester planner and quick tools. (Names in this screenshot are placeholders.)"
      },
      {
        "src": "img/shots/unilens-2.jpg",
        "title": "All tools",
        "text": "Faculty ratings, student portal, cover page maker, notice board and course explorer."
      }
    ]
  },
  {
    "id": "call-recorder",
    "name": "Call Recorder",
    "tagline": "Record calls on your device, protected by an app lock.",
    "category": "Utility",
    "icon": "img/call-recorder.png",
    "color": [
      "#0891b2",
      "#164e63"
    ],
    "glyph": "C",
    "version": "2.1 (personal)",
    "size": "6.5 MB",
    "android": "Android 8.0+",
    "file": "call-recorder-2.1.apk",
    "sha256": "7e46326ab593352324c34fe01a22562424b0b05de18aaffcca3e88ba9f0a695f",
    "about": "Records phone and app calls to MP3 on your own device, tags them with the contact name and keeps them behind an app lock. Recordings never leave your phone.",
    "features": [
      [
        "Automatic & silent",
        "Arms once and waits for the next call, recording in the background.",
        0
      ],
      [
        "MP3 output",
        "Compact files that play anywhere.",
        0
      ],
      [
        "Phone, WhatsApp, Messenger",
        "Recordings are sorted by app, with Incoming, Outgoing and Missed filters.",
        0
      ],
      [
        "Contact names",
        "Recordings are tagged with the number and contact name.",
        0
      ],
      [
        "Record video calls",
        "Screen-records video calls with a tap and stops on demand.",
        1
      ],
      [
        "Force speaker",
        "Optional acoustic capture of both sides when the phone blocks call audio.",
        1
      ],
      [
        "PIN lock",
        "Protect the app and your recordings with a PIN.",
        1
      ],
      [
        "Hidden from screenshots",
        "The app blocks screenshots and screen sharing of its own window."
      ],
      [
        "Starts on boot",
        "Keeps working after the phone restarts."
      ]
    ],
    "notes": "Recording laws differ by country; many require everyone on the call to consent. You are responsible for lawful use. Android may restrict call audio on some phones.",
    "shots": [
      {
        "src": "img/shots/call-1.jpg",
        "title": "Recorder dashboard",
        "text": "One switch to arm the recorder, recording count and storage used, filter by Phone, WhatsApp, Messenger and more."
      },
      {
        "src": "img/shots/call-2.jpg",
        "title": "Settings",
        "text": "Video-call screen recording, force speaker capture and PIN lock."
      }
    ]
  },
  {
    "id": "porar-shathi",
    "name": "Porar Shathi (পড়ার সাথী)",
    "tagline": "HSC MCQ & CQ practice, mock and live exams, for students and teachers.",
    "category": "Education",
    "icon": "img/porar-shathi.png",
    "color": [
      "#7c3aed",
      "#1e3a8a"
    ],
    "version": "1.0.0 (build 30 here · build 35 latest via update)",
    "size": "99.3 MB",
    "android": "Android 7.0+ (64-bit ARM phones)",
    "file": "porar-shathi-build30.apk",
    "sha256": "7cd1a6696bb1ef5bdeed9ef6a36ed91e60c313871ee5f0913e99c2e34e385fc5",
    "about": "A Bangla exam-prep app for HSC students and teachers in Bangladesh, with a large offline question bank, mock and live exams, friend duels and an AI study coach. All screenshots are from the installed app (build 30).",
    "features": [
      [
        "Home dashboard",
        "Readiness score, daily mission and shortcuts to everything.",
        0
      ],
      [
        "Question bank",
        "Subject-wise and institution-wise MCQ and CQ practice with progress per subject.",
        1
      ],
      [
        "Timed exams",
        "Mock MCQ exams with your chosen subjects, count and time, and optional negative marking.",
        2
      ],
      [
        "Live exams",
        "Join an upcoming live exam, or enter a teacher's exam code or link.",
        3
      ],
      [
        "Duels",
        "Challenge a friend or a random opponent in head-to-head question duels.",
        4
      ],
      [
        "AI coach",
        "Finds weak topics from your mistakes, predicts a grade and plans your day.",
        5
      ],
      [
        "Statistics & leaderboard",
        "Track practice and accuracy over time and see national and college rankings.",
        6
      ],
      [
        "Detailed results",
        "Accuracy, speed, topic-wise breakdown and answer review after each exam."
      ],
      [
        "Notes & formulas",
        "Study notes and formulas for offline revision."
      ],
      [
        "Teacher tools",
        "Teachers can create exams, share them by code or link, and see live results."
      ],
      [
        "English & Bangla 2nd practice",
        "English 1st and 2nd paper and Bangla 2nd paper arranged by the board question slots (Q1-Q16), with Model Questions, demo answers and an eye button for model answers."
      ],
      [
        "Updates inside the app",
        "The newest build (35) is delivered by the in-app update, so this download stays small enough for GitHub; open the app and accept the update popup."
      ]
    ],
    "notes": "Large download (98.6 MB). Works on 64-bit ARM phones, which is nearly all modern Android devices.",
    "shots": [
      {
        "src": "img/shots/porar-1.jpg",
        "title": "Home dashboard",
        "text": "Readiness score, today's mission, notes and quick actions."
      },
      {
        "src": "img/shots/porar-2.jpg",
        "title": "Question bank",
        "text": "Subject-wise questions with chapter counts and progress."
      },
      {
        "src": "img/shots/porar-3.jpg",
        "title": "MCQ exam setup",
        "text": "Pick subjects, question count, time and negative marking."
      },
      {
        "src": "img/shots/porar-4.jpg",
        "title": "Live exams",
        "text": "Join with a teacher's code, or register for the next live exam."
      },
      {
        "src": "img/shots/porar-5.jpg",
        "title": "Daily duel",
        "text": "Pick subjects and difficulty, then face an opponent."
      },
      {
        "src": "img/shots/porar-6.jpg",
        "title": "AI coach",
        "text": "Predicted grade, weak topics and a plan for today."
      },
      {
        "src": "img/shots/porar-7.jpg",
        "title": "Statistics",
        "text": "Daily practice, accuracy trend and leaderboard."
      }
    ]
  }
];
