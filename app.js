const tasks = [
  {
    title: "Поездка к воде",
    text: "Выберите ближайший водоем, возьмите напиток в термосе и проведите там хотя бы 40 минут без телефонов.",
    tag: "На улице",
    mood: "outdoor",
    time: "1-3 часа",
    cost: "0-20 €",
    energy: "средне",
  },
  {
    title: "Новый маршрут",
    text: "Откройте карту, выберите район, где редко бываете, и прогуляйтесь там до первой красивой витрины или двора.",
    tag: "Прогулка",
    mood: "outdoor",
    time: "60-90 мин",
    cost: "0 €",
    energy: "легко",
  },
  {
    title: "Свидание на остановке",
    text: "Сядьте на первый удобный автобус или трамвай и выйдите через 5 остановок. Там найдите место для мини-свидания.",
    tag: "Спонтанно",
    mood: "adventure",
    time: "1 час",
    cost: "билеты",
    energy: "средне",
  },
  {
    title: "Кино наоборот",
    text: "Пусть один выбирает фильм, а второй готовит к нему напиток или закуску. После фильма каждый называет одну любимую сцену.",
    tag: "Дома",
    mood: "home",
    time: "2 часа",
    cost: "0-15 €",
    energy: "спокойно",
  },
  {
    title: "Фотоохота",
    text: "За 45 минут найдите и сфотографируйте 5 вещей: что-то красное, смешную вывеску, красивую дверь, отражение и место для возвращения.",
    tag: "Игра",
    mood: "playful",
    time: "45 мин",
    cost: "0 €",
    energy: "легко",
  },
  {
    title: "Завтрак не по правилам",
    text: "Приготовьте завтрак вечером или ужин утром. Главное правило: каждый добавляет один неожиданный ингредиент.",
    tag: "Дома",
    mood: "home",
    time: "40 мин",
    cost: "0-10 €",
    energy: "легко",
  },
  {
    title: "Письмо в будущее",
    text: "Напишите одно короткое письмо себе через год: что хотите запомнить о вашей паре именно сейчас.",
    tag: "Близость",
    mood: "quiet",
    time: "25 мин",
    cost: "0 €",
    energy: "спокойно",
  },
  {
    title: "Случайная кухня",
    text: "Выберите страну с закрытыми глазами на карте и найдите блюдо оттуда, которое можно попробовать или приготовить сегодня.",
    tag: "Еда",
    mood: "playful",
    time: "1-2 часа",
    cost: "10-35 €",
    energy: "средне",
  },
  {
    title: "Мини-поход",
    text: "Соберите рюкзак на двоих: вода, плед, что-то сладкое. Идите до места, где можно сесть и посмотреть вдаль.",
    tag: "На улице",
    mood: "outdoor",
    time: "1-2 часа",
    cost: "0-10 €",
    energy: "средне",
  },
  {
    title: "Тур по воспоминаниям",
    text: "Посетите место, связанное с вашим началом, или выберите новое место и договоритесь сделать его будущим воспоминанием.",
    tag: "Романтика",
    mood: "quiet",
    time: "1 час",
    cost: "0 €",
    energy: "спокойно",
  },
  {
    title: "Слепой плейлист",
    text: "Каждый добавляет по 5 песен в общий плейлист, не показывая второму. Затем слушаете вперемешку и угадываете автора выбора.",
    tag: "Музыка",
    mood: "home",
    time: "35 мин",
    cost: "0 €",
    energy: "спокойно",
  },
  {
    title: "Маленькая доброта",
    text: "Сделайте вместе один добрый жест: оставить приятную записку, угостить кого-то кофе или помочь соседу с мелочью.",
    tag: "Вместе",
    mood: "quiet",
    time: "30 мин",
    cost: "0-10 €",
    energy: "легко",
  },
  {
    title: "Секретный кофе",
    text: "Каждый выбирает другому напиток без подсказок. Пейте его на прогулке и расскажите, почему выбрали именно этот вкус.",
    tag: "Прогулка",
    mood: "playful",
    time: "40 мин",
    cost: "5-15 €",
    energy: "легко",
  },
  {
    title: "Парк без маршрута",
    text: "Идите в парк и на каждой развилке по очереди выбирайте направление. Остановитесь там, где впервые захочется присесть.",
    tag: "На улице",
    mood: "outdoor",
    time: "1 час",
    cost: "0 €",
    energy: "легко",
  },
  {
    title: "Вечер вопросов",
    text: "Задайте друг другу по 7 вопросов, которые обычно откладываете. Ответы не обсуждайте спором, только уточняйте и слушайте.",
    tag: "Близость",
    mood: "quiet",
    time: "45 мин",
    cost: "0 €",
    energy: "спокойно",
  },
  {
    title: "Охота за десертом",
    text: "Найдите место с десертом, который никто из вас раньше не пробовал. Возьмите один на двоих и оцените по десятибалльной шкале.",
    tag: "Еда",
    mood: "adventure",
    time: "1 час",
    cost: "8-20 €",
    energy: "легко",
  },
  {
    title: "Домашний спа-час",
    text: "Выключите яркий свет, включите спокойную музыку и сделайте друг другу массаж рук или плеч по 10 минут.",
    tag: "Дома",
    mood: "quiet",
    time: "30 мин",
    cost: "0-10 €",
    energy: "спокойно",
  },
  {
    title: "Книжная разведка",
    text: "Зайдите в книжный или библиотеку. Каждый выбирает книгу, которая, по его мнению, подошла бы другому.",
    tag: "Прогулка",
    mood: "quiet",
    time: "45 мин",
    cost: "0-20 €",
    energy: "легко",
  },
  {
    title: "Городская открытка",
    text: "Найдите красивый вид в городе и сделайте фото так, будто это открытка. Придумайте к ней короткую подпись.",
    tag: "Фото",
    mood: "outdoor",
    time: "50 мин",
    cost: "0 €",
    energy: "легко",
  },
  {
    title: "Рецепт наугад",
    text: "Откройте список рецептов и выберите третий подходящий. Готовьте вместе, не улучшая рецепт до первой дегустации.",
    tag: "Дома",
    mood: "playful",
    time: "1-2 часа",
    cost: "10-25 €",
    energy: "средне",
  },
  {
    title: "Плейлист дороги",
    text: "Соберите плейлист из 10 песен для вашей будущей поездки. Каждая песня должна отвечать за один момент пути.",
    tag: "Музыка",
    mood: "home",
    time: "35 мин",
    cost: "0 €",
    energy: "спокойно",
  },
  {
    title: "Рассвет или закат",
    text: "Выберите рассвет или закат и посмотрите его вместе. Возьмите что-то теплое и не планируйте ничего на эти 20 минут.",
    tag: "На улице",
    mood: "quiet",
    time: "30 мин",
    cost: "0 €",
    energy: "спокойно",
  },
  {
    title: "Монетка решает",
    text: "Подбросьте монетку три раза: куда идти, что пить, где остановиться. Следуйте результату без споров.",
    tag: "Спонтанно",
    mood: "adventure",
    time: "1 час",
    cost: "0-20 €",
    energy: "средне",
  },
  {
    title: "Пять комплиментов",
    text: "Каждый пишет пять конкретных комплиментов второму. Не общих, а про поступки, привычки или моменты последних дней.",
    tag: "Близость",
    mood: "quiet",
    time: "20 мин",
    cost: "0 €",
    energy: "спокойно",
  },
  {
    title: "Музейный час",
    text: "Зайдите в небольшой музей, галерею или выставку. Каждый выбирает один объект, который хотел бы забрать в память.",
    tag: "Культура",
    mood: "adventure",
    time: "1-2 часа",
    cost: "0-30 €",
    energy: "средне",
  },
  {
    title: "Беззвучный ужин",
    text: "Первые 10 минут ужина общайтесь только жестами и записками. Потом обсудите, что оказалось смешным или неожиданным.",
    tag: "Дома",
    mood: "playful",
    time: "40 мин",
    cost: "0-20 €",
    energy: "легко",
  },
  {
    title: "Дворы и арки",
    text: "Выберите старую улицу и ищите красивые дворы, арки или детали домов. Побеждает тот, кто заметит самую маленькую деталь.",
    tag: "Прогулка",
    mood: "outdoor",
    time: "1 час",
    cost: "0 €",
    energy: "легко",
  },
  {
    title: "Капсула вечера",
    text: "Соберите три маленьких предмета сегодняшнего дня и положите их в конверт или коробку. Откройте через месяц.",
    tag: "Ритуал",
    mood: "quiet",
    time: "25 мин",
    cost: "0 €",
    energy: "спокойно",
  },
  {
    title: "Смена ролей",
    text: "На один вечер поменяйтесь обычными ролями: кто выбирает еду, маршрут, музыку или план. Делайте это бережно и с юмором.",
    tag: "Игра",
    mood: "playful",
    time: "1-2 часа",
    cost: "0 €",
    energy: "легко",
  },
  {
    title: "Мини-путеводитель",
    text: "Представьте, что к вам приезжает друг. За час составьте маршрут из трех мест, которые лучше всего показывают ваш район.",
    tag: "На улице",
    mood: "outdoor",
    time: "1 час",
    cost: "0 €",
    energy: "средне",
  },
];

const moodLabels = {
  outdoor: "На воздух",
  home: "Дома",
  playful: "Игра",
  quiet: "Спокойно",
  adventure: "Спонтанно",
};

const moodArt = {
  outdoor: "https://images.unsplash.com/photo-1755127761449-47f246511c9a?auto=format&fit=crop&w=1200&q=75",
  home: "https://images.unsplash.com/photo-1761319914911-71b059a655d8?auto=format&fit=crop&w=1200&q=75",
  playful: "https://images.unsplash.com/photo-1573875113509-6708ca2c3609?auto=format&fit=crop&w=1200&q=75",
  quiet: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=75",
  adventure: "https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&w=1200&q=75",
};

const taskArt = {
  lakePicnic: "https://images.unsplash.com/photo-1755127761449-47f246511c9a?auto=format&fit=crop&w=1200&q=75",
  cityWalk: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=75",
  transitDate: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=75",
  movieNight: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=75",
  photoWalk: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=1200&q=75",
  breakfast: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=1200&q=75",
  letter: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=75",
  cooking: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=75",
  hiking: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=75",
  memories: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=75",
  music: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=75",
  kindness: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=75",
  coffee: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=75",
  park: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=75",
  questions: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=75",
  dessert: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=75",
  spa: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=75",
  books: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=75",
  cityView: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=75",
  sunset: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=75",
  coin: "https://images.unsplash.com/photo-1646303297330-17073f7823c3?auto=format&fit=crop&w=1200&q=75",
  museum: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=1200&q=75",
  dinner: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=75",
  courtyard: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=75",
  capsule: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1200&q=75",
  roles: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=75",
  guide: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=75",
  boardGame: "https://images.unsplash.com/photo-1573875113509-6708ca2c3609?auto=format&fit=crop&w=1200&q=75",
};

const taskArtByTitle = {
  "Поездка к воде": "lakePicnic",
  "Новый маршрут": "cityWalk",
  "Свидание на остановке": "transitDate",
  "Кино наоборот": "movieNight",
  "Фотоохота": "photoWalk",
  "Завтрак не по правилам": "breakfast",
  "Письмо в будущее": "letter",
  "Случайная кухня": "cooking",
  "Мини-поход": "hiking",
  "Тур по воспоминаниям": "memories",
  "Слепой плейлист": "music",
  "Маленькая доброта": "kindness",
  "Секретный кофе": "coffee",
  "Парк без маршрута": "park",
  "Вечер вопросов": "questions",
  "Охота за десертом": "dessert",
  "Домашний спа-час": "spa",
  "Книжная разведка": "books",
  "Городская открытка": "cityView",
  "Рецепт наугад": "cooking",
  "Плейлист дороги": "music",
  "Рассвет или закат": "sunset",
  "Монетка решает": "coin",
  "Пять комплиментов": "letter",
  "Музейный час": "museum",
  "Беззвучный ужин": "dinner",
  "Дворы и арки": "courtyard",
  "Капсула вечера": "capsule",
  "Смена ролей": "roles",
  "Мини-путеводитель": "guide",
};

const els = {
  hero: document.querySelector(".hero"),
  pageBackground: document.querySelector("#pageBackground"),
  taskTag: document.querySelector("#taskTag"),
  todayLabel: document.querySelector("#todayLabel"),
  taskTitle: document.querySelector("#taskTitle"),
  taskText: document.querySelector("#taskText"),
  timeMeta: document.querySelector("#timeMeta"),
  costMeta: document.querySelector("#costMeta"),
  energyMeta: document.querySelector("#energyMeta"),
  doneButton: document.querySelector("#doneButton"),
  favoriteButton: document.querySelector("#favoriteButton"),
  shuffleButton: document.querySelector("#shuffleButton"),
  moodChips: document.querySelector("#moodChips"),
  resetFilters: document.querySelector("#resetFilters"),
  historyList: document.querySelector("#historyList"),
  streakValue: document.querySelector("#streakValue"),
  completedValue: document.querySelector("#completedValue"),
  favoriteCount: document.querySelector("#favoriteCount"),
  favoriteList: document.querySelector("#favoriteList"),
  customCount: document.querySelector("#customCount"),
  customTaskForm: document.querySelector("#customTaskForm"),
  customTitle: document.querySelector("#customTitle"),
  customText: document.querySelector("#customText"),
  customMood: document.querySelector("#customMood"),
  customList: document.querySelector("#customList"),
  customView: document.querySelector("#customView"),
  openCustomView: document.querySelector("#openCustomView"),
  closeCustomView: document.querySelector("#closeCustomView"),
  clearHistory: document.querySelector("#clearHistory"),
  settingsButton: document.querySelector("#settingsButton"),
  settingsDialog: document.querySelector("#settingsDialog"),
  yourName: document.querySelector("#yourName"),
  partnerName: document.querySelector("#partnerName"),
  placeHint: document.querySelector("#placeHint"),
  relationshipStart: document.querySelector("#relationshipStart"),
  quietMode: document.querySelector("#quietMode"),
  saveSettings: document.querySelector("#saveSettings"),
  noteDialog: document.querySelector("#noteDialog"),
  noteTaskTitle: document.querySelector("#noteTaskTitle"),
  completionNote: document.querySelector("#completionNote"),
  saveNoteButton: document.querySelector("#saveNoteButton"),
};

const state = {
  activeMood: localStorage.getItem("dd_activeMood") || "all",
  offset: Number(localStorage.getItem("dd_offset") || "0"),
  history: JSON.parse(localStorage.getItem("dd_history") || "[]"),
  settings: JSON.parse(localStorage.getItem("dd_settings") || "{}"),
  favorites: JSON.parse(localStorage.getItem("dd_favorites") || "[]"),
  customTasks: JSON.parse(localStorage.getItem("dd_customTasks") || "[]"),
  pendingNoteId: null,
};

function dayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function seededIndex(seed, length) {
  let hash = 2166136261;
  for (const char of seed) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash) % length;
}

function taskPool() {
  let pool = allTasks();
  if (state.activeMood !== "all") {
    pool = pool.filter((task) => task.mood === state.activeMood);
  }
  if (state.settings.quietMode) {
    pool = pool.filter((task) => task.energy !== "средне" || task.mood === "quiet");
  }
  return pool.length ? pool : tasks;
}

function allTasks() {
  return [...tasks, ...state.customTasks.map(normalizeCustomTask)];
}

function normalizeCustomTask(task) {
  return {
    id: task.id,
    title: task.title,
    text: task.text,
    tag: task.tag || "Свое",
    mood: task.mood || "quiet",
    time: task.time || "на выбор",
    cost: task.cost || "на выбор",
    energy: task.energy || "на выбор",
    custom: true,
  };
}

function availableTaskPool() {
  const completedToday = new Set(
    state.history.filter((item) => item.date === dayKey()).map((item) => item.title)
  );
  const pool = taskPool();
  const available = pool.filter((task) => !completedToday.has(task.title));
  return available.length ? available : pool;
}

function currentTask() {
  const pool = availableTaskPool();
  const index = (seededIndex(`${dayKey()}-${state.activeMood}`, pool.length) + state.offset) % pool.length;
  return pool[index];
}

function taskId(task) {
  return task.id || `base:${task.title}`;
}

function personalized(text) {
  const partner = state.settings.partnerName?.trim();
  const place = state.settings.placeHint?.trim();
  return text
    .replace("Выберите ближайший", place ? `Выберите ближайший к ${place}` : "Выберите ближайший")
    .replace(
      "Пусть один выбирает фильм, а второй готовит к нему напиток или закуску.",
      partner
        ? `${movieChoiceLabel()} фильм, а второй готовит к нему напиток или закуску.`
        : "Пусть один выбирает фильм, а второй готовит к нему напиток или закуску."
    );
}

function movieChoiceLabel() {
  const you = state.settings.yourName?.trim();
  const partner = state.settings.partnerName?.trim();
  if (you && partner) {
    return `${you} и ${partner} по очереди выбирают`;
  }
  if (partner) {
    return `Вы с ${partner} по очереди выбираете`;
  }
  if (you) {
    return `${you}, вы по очереди выбираете`;
  }
  return "Вы по очереди выбираете";
}

function renderTask() {
  const task = currentTask();
  const artMood = task.mood;
  const artKey = taskArtByTitle[task.title];
  const art = taskArt[artKey] || moodArt[artMood] || moodArt.outdoor;
  els.hero.dataset.mood = task.mood;
  document.body.dataset.mood = task.mood;
  els.pageBackground.src = art;
  els.taskTag.textContent = task.tag;
  els.todayLabel.textContent = new Intl.DateTimeFormat("ru", { day: "numeric", month: "long" }).format(new Date());
  els.taskTitle.textContent = task.title;
  els.taskText.textContent = personalized(task.text);
  els.timeMeta.textContent = `⏱ ${task.time}`;
  els.costMeta.textContent = `€ ${task.cost}`;
  els.energyMeta.textContent = `⌁ ${task.energy}`;
  renderFavoriteButton(task);
}

function renderFavoriteButton(task = currentTask()) {
  const isFavorite = state.favorites.includes(taskId(task));
  els.favoriteButton.classList.toggle("active", isFavorite);
  els.favoriteButton.setAttribute("aria-label", isFavorite ? "Убрать из избранного" : "Добавить в избранное");
  els.favoriteButton.querySelector("span").textContent = isFavorite ? "♥" : "♡";
}

function renderChips() {
  const moods = [["all", "Любое"], ...Object.entries(moodLabels)];
  els.moodChips.innerHTML = moods
    .map(([value, label]) => `<button class="chip ${state.activeMood === value ? "active" : ""}" data-mood="${value}" type="button">${label}</button>`)
    .join("");
}

function renderHistory() {
  els.completedValue.textContent = state.history.length;
  els.streakValue.textContent = displayTogetherDays();

  if (!state.history.length) {
    els.historyList.innerHTML = `<li class="history-empty">Здесь появятся выполненные задания.</li>`;
    return;
  }

  els.historyList.innerHTML = state.history
    .slice(0, 5)
    .map(
      (item) => `<li>
        <details class="history-item">
          <summary>
            <span>${escapeHtml(item.title)}</span>
            <time>${formatShortDate(item.date)}</time>
          </summary>
          <p>${escapeHtml(item.text || "Описание для этого задания не сохранено.")}</p>
          ${item.note ? `<p class="history-note">${escapeHtml(item.note)}</p>` : ""}
          <div class="history-meta">
            <span>${escapeHtml(item.time || "")}</span>
            <span>${escapeHtml(item.cost || "")}</span>
            <span>${escapeHtml(item.energy || "")}</span>
          </div>
        </details>
      </li>`
    )
    .join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });
}

function streakDays() {
  const dates = [...new Set(state.history.map((item) => item.date))].sort().reverse();
  let streak = 0;
  const cursor = new Date();
  for (const date of dates) {
    if (date === dayKey(cursor)) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
  }
  return streak;
}

function displayTogetherDays() {
  const start = parseLocalDate(state.settings.relationshipStart);
  if (!start) {
    return streakDays();
  }

  const today = parseLocalDate(dayKey());
  const diff = Math.floor((today - start) / 86400000) + 1;
  return Math.max(diff, 1);
}

function parseLocalDate(value) {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null;
  }

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? date : null;
}

function formatShortDate(value) {
  return new Intl.DateTimeFormat("ru", { day: "2-digit", month: "2-digit" }).format(new Date(value));
}

function save() {
  localStorage.setItem("dd_activeMood", state.activeMood);
  localStorage.setItem("dd_offset", String(state.offset));
  localStorage.setItem("dd_history", JSON.stringify(state.history));
  localStorage.setItem("dd_settings", JSON.stringify(state.settings));
  localStorage.setItem("dd_favorites", JSON.stringify(state.favorites));
  localStorage.setItem("dd_customTasks", JSON.stringify(state.customTasks));
}

function completeTask() {
  const task = currentTask();
  const today = dayKey();
  const existing = state.history.find((item) => item.date === today && item.title === task.title);
  let completedItem = existing;
  if (!completedItem) {
    completedItem = {
      id: `${today}-${taskId(task)}-${Date.now()}`,
      taskId: taskId(task),
      title: task.title,
      text: personalized(task.text),
      time: task.time,
      cost: task.cost,
      energy: task.energy,
      date: today,
    };
    state.history.unshift(completedItem);
  } else if (!completedItem.id) {
    completedItem.id = `${today}-${taskId(task)}-${Date.now()}`;
  }
  state.pendingNoteId = completedItem.id;
  state.offset = 0;
  save();
  renderHistory();
  els.doneButton.disabled = true;
  els.shuffleButton.disabled = true;
  els.doneButton.textContent = "Отмечено";
  setTimeout(() => {
    renderTask();
    els.doneButton.textContent = "Готово";
    els.doneButton.disabled = false;
    els.shuffleButton.disabled = false;
    openNoteDialog(completedItem);
  }, 1000);
}

function renderAll() {
  renderChips();
  renderTask();
  renderHistory();
  renderFavorites();
  renderCustomTasks();
}

els.doneButton.addEventListener("click", completeTask);

els.favoriteButton.addEventListener("click", () => {
  const id = taskId(currentTask());
  state.favorites = state.favorites.includes(id)
    ? state.favorites.filter((favoriteId) => favoriteId !== id)
    : [...state.favorites, id];
  save();
  renderFavoriteButton();
  renderFavorites();
});

els.shuffleButton.addEventListener("click", () => {
  state.offset += 1;
  save();
  renderTask();
});

els.moodChips.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mood]");
  if (!button) return;
  state.activeMood = button.dataset.mood;
  state.offset = 0;
  save();
  renderAll();
});

els.resetFilters.addEventListener("click", () => {
  state.activeMood = "all";
  state.offset = 0;
  save();
  renderAll();
});

els.clearHistory.addEventListener("click", () => {
  state.history = [];
  save();
  renderTask();
  renderHistory();
});

function setCustomView(open) {
  els.customView.classList.toggle("open", open);
  els.customView.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("custom-view-open", open);
  if (open) {
    els.customView.scrollTop = 0;
    setTimeout(() => els.customTitle.focus(), 180);
  } else {
    els.openCustomView.focus();
  }
}

els.openCustomView.addEventListener("click", () => setCustomView(true));
els.closeCustomView.addEventListener("click", () => setCustomView(false));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && els.customView.classList.contains("open")) {
    setCustomView(false);
  }
});

els.customTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = els.customTitle.value.trim();
  const text = els.customText.value.trim();
  if (!title || !text) {
    return;
  }

  state.customTasks.unshift({
    id: `custom:${Date.now()}`,
    title,
    text,
    mood: els.customMood.value,
    tag: "Свое",
    time: "на выбор",
    cost: "на выбор",
    energy: "на выбор",
  });
  els.customTaskForm.reset();
  save();
  renderAll();
  els.customTitle.focus();
});

els.customList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-custom]");
  if (!button) {
    return;
  }

  const id = button.dataset.deleteCustom;
  state.customTasks = state.customTasks.filter((task) => task.id !== id);
  state.favorites = state.favorites.filter((favoriteId) => favoriteId !== id);
  save();
  renderAll();
});

els.favoriteList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-favorite]");
  if (!button) {
    return;
  }

  state.favorites = state.favorites.filter((id) => id !== button.dataset.removeFavorite);
  save();
  renderFavoriteButton();
  renderFavorites();
});

els.settingsButton.addEventListener("click", () => {
  els.yourName.value = state.settings.yourName || "";
  els.partnerName.value = state.settings.partnerName || "";
  els.placeHint.value = state.settings.placeHint || "";
  els.relationshipStart.value = state.settings.relationshipStart || "";
  els.relationshipStart.max = dayKey();
  els.quietMode.checked = Boolean(state.settings.quietMode);
  els.settingsDialog.showModal();
});

els.saveSettings.addEventListener("click", () => {
  state.settings = {
    yourName: els.yourName.value,
    partnerName: els.partnerName.value,
    placeHint: els.placeHint.value,
    relationshipStart: els.relationshipStart.value,
    quietMode: els.quietMode.checked,
  };
  save();
  renderAll();
});

els.saveNoteButton.addEventListener("click", () => {
  const note = els.completionNote.value.trim();
  if (state.pendingNoteId && note) {
    state.history = state.history.map((item) => (item.id === state.pendingNoteId ? { ...item, note } : item));
    save();
    renderHistory();
  }
  state.pendingNoteId = null;
});

function openNoteDialog(item) {
  state.pendingNoteId = item.id;
  els.noteTaskTitle.textContent = item.title;
  els.completionNote.value = item.note || "";
  els.noteDialog.showModal();
}

function renderCustomTasks() {
  els.customCount.textContent = state.customTasks.length;
  if (!state.customTasks.length) {
    els.customList.innerHTML = `<li class="history-empty">Добавьте идею, которую приложение будет подмешивать в случайные задания.</li>`;
    return;
  }

  els.customList.innerHTML = state.customTasks
    .slice(0, 4)
    .map(
      (task) => `<li>
        <span>${escapeHtml(task.title)}</span>
        <button class="text-button danger" type="button" data-delete-custom="${escapeHtml(task.id)}">Удалить</button>
      </li>`
    )
    .join("");
}

function renderFavorites() {
  const favoriteTasks = allTasks().filter((task) => state.favorites.includes(taskId(task)));
  els.favoriteCount.textContent = favoriteTasks.length;

  if (!favoriteTasks.length) {
    els.favoriteList.innerHTML = `<li class="history-empty">Нажмите сердечко на карточке, чтобы сохранить задание.</li>`;
    return;
  }

  els.favoriteList.innerHTML = favoriteTasks
    .slice(0, 5)
    .map(
      (task) => `<li>
        <span>${escapeHtml(task.title)}</span>
        <button class="text-button danger" type="button" data-remove-favorite="${escapeHtml(taskId(task))}">Убрать</button>
      </li>`
    )
    .join("");
}

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("sw.js");
}

renderAll();
