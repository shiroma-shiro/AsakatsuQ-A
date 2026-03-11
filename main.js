const data = {
    q1_ai_usage: [
      { name: "つばき", text: "文章構成、議事録作成にGem機能を使用。エージェントは未活用。" },
      { name: "エムアミ", text: "調べものや文章作成。エージェントは未活用。" },
      { name: "ネアン", text: "ChatGPTで文章生成とスクリプト作成、Geminiで壁打ちなど。エージェントは未活用。" },
      { name: "しろま", text: "「壁打ち→コンテンツ作り」に活用。Antigravity(AIエージェント)で修正を自動化し凄さを実感。" },
      { name: "えんぴつ", text: "Gemini秘書ルーム、NotebookLMでリサーチ業務。" },
      { name: "ふじまる", text: "動画編集(SUNO/ChatGPT)、日記・朝活報告(NotebookLM/Gemini)。" },
      { name: "yasu", text: "ライティング、日記＆メモ(Gemini/NotebookLM)。" },
      { name: "くまくま", text: "Notion AIエージェントでブリーフィング自動化、Gemini・NotebookLMで工数削減。" },
      { name: "さとしん", text: "PC操作を録画しGeminiで効率化評価。エージェントでアプリ開発。" },
      { name: "ベルロッド", text: "マンガ作成(stable diffusion等)、エージェントでCAD効率化・AWSアプリ作成。" }
    ],
    q2_ribetter_usage: {
      labels: ["①優先順位低め", "①~②の間", "②優先順位そこそこ", "③優先順位高め", "④その他"],
      data: [5, 2, 5, 2, 1]
    },
    q3_usj: [
      { name: "ネアン", text: "絶叫系ならフライングダイナソーとハリポタのフォービドゥンジャーニー / スペースファンタジーも面白い" },
      { name: "つばき", text: "4Dショーは休憩しながら楽しめる / 子供向けにおさるのジョージ" },
      { name: "なごいか", text: "ミニオンのクッキーサンドアイスがおすすめ / ミニオンのハチャメチャライド" },
      { name: "とらすけ", text: "貸切時間はあっという間なので事前計画が必須 / 絶叫苦手でも夜は快適" },
      { name: "さとしん", text: "杖で魔法を使える体験も楽しい！" }
    ],
    q4_prompts: [
      "水彩画風", "文字少なめ", "かわいいテイスト", "中学生でもわかるように", 
      "こどもでもわかるようにイラスト風で", "端的にわかりやすく", 
      "シンプルで、背景白、余白多めで", "クレームが少なく、購入したいと思わせる",
      "比較が分かりやすく箇条書きで", "左側に改良前右側に改良後",
      "最大限、思考を繰り返してください", "ステップ・バイ・ステップで",
      "マーメイド記法で出力してください", "ゆるふわ", "画像の生成は不要"
    ],
    q5_travel: [
      { place: "八ヶ岳清里 / あずみ野", name: "しほみ", coords: [[35.918, 138.435], [36.3, 137.9]] },
      { place: "草津温泉 / 伊香保", name: "つばき", coords: [[36.621, 138.596], [36.497, 138.916]] },
      { place: "和歌山 (串本 / 南紀白浜)", name: "AYA, つばき, とらすけ", coords: [[33.473, 135.772], [33.673, 135.345]] },
      { place: "NZ氷河 / マチュピチュ", name: "なごいか", coords: [[-43.466, 170.183], [-13.163, -72.545]] },
      { place: "沖縄の海", name: "ふじまる", coords: [[26.212, 127.681]] },
      { place: "鹿児島 (指宿)", name: "とらすけ", coords: [[31.237, 130.640]] },
      { place: "那須どうぶつ王国 / 青森", name: "くまくま", coords: [[37.114, 139.986], [40.824, 140.740]] },
      { place: "モロッコ / ウィーン", name: "くまくま", coords: [[31.629, -8.008], [48.208, 16.373]] },
      { place: "星野リゾート「界」シリーズ", name: "みーな", coords: [] }, 
      { place: "青森(八戸) / ベルギー / 台湾", name: "しろま", coords: [[40.512, 141.488], [50.850, 4.351], [23.697, 120.960]] },
      { place: "鎌倉 / 島根(出雲大社)", name: "えんぴつ", coords: [[35.319, 139.550], [35.401, 132.685]] },
      { place: "瀬戸内海の島々 / 仙台", name: "さとしん", coords: [[34.459, 133.987], [38.268, 140.871]] }
    ],
    q6_morning: [
      {
        name: "しほみ",
        timeline: [
          { time: "3:55", task: "起床 / トイレ・洗顔" },
          { time: "4:10", task: "雑談参加 / 白湯・コーヒー" },
          { time: "4:35", task: "未来時間① (ブログネタ等)" },
          { time: "5:10", task: "未来時間② (メイン作業/家事)" }
        ]
      },
      {
        name: "AYA",
        timeline: [
          { time: "2:30", task: "起床 / 星空観察 / 白湯" },
          { time: "3:00", task: "ovice入室 / つぶやき" },
          { time: "3:15", task: "ライティング・オン秘書業務" },
          { time: "5:00", task: "雑談参加 / ライティング" }
        ]
      },
      {
        name: "しろま",
        timeline: [
          { time: "3:55", task: "起床 / 常温水 / ovice出勤" },
          { time: "朝活中", task: "雑談図解作成 / 朝活報告投稿" },
          { time: "その後", task: "お掃除ロボ起動 / 洗濯物たたみ" },
          { time: "8:00", task: "出発" }
        ]
      },
      {
        name: "えんぴつ",
        timeline: [
          { time: "5:00", task: "起床 / 雑談参加 / 白湯" },
          { time: "5:15", task: "食洗機片付け / オン秘書作業" },
          { time: "〜6:00", task: "リベ活" }
        ]
      }
    ],
    q7_meals: [
      { title: "【朝】定番和食", type: "Morning", text: "ご飯、納豆、味噌汁の和食率が高め。白湯やプロテイン、オートミール等健康志向も！お子様はパン＆フルーツが多いようです。", img: "./images/breakfast.png", answers: [{name: "えんぴつ", detail: "定番和食"}, {name: "しほみ", detail: "パン＆フルーツ"}, {name: "AYA", detail: "白湯やプロテイン"}] },
      { title: "【昼】手軽＆完全栄養", type: "Lunch", text: "手作りのお弁当や、Huelなどの完全栄養食、残り物など、手軽さを重視したラインナップです。", img: "./images/lunch.png", answers: [{name: "つばき", detail: "手作り弁当"}, {name: "さとしん", detail: "残り物を活用"}, {name: "しろま", detail: "完全栄養食Huel"}] },
      { title: "【夜】洗い物削減", type: "Dinner", text: "一汁二菜や、ワンプレートに盛り付けるなど、夜はなるべく洗い物を削減する工夫が見られました。", img: "./images/dinner.png", answers: [{name: "とらすけ", detail: "一汁二菜"}, {name: "くまくま", detail: "ワンプレート"}, {name: "ふじまる", detail: "洗い物を削減する"}] }
    ],
    q8_sleepiness: [
      { name: "ふじまる", text: "激辛わさび柿ピーを食べる 🔥" },
      { name: "しろま", text: "眠そうな人を探す 👀" },
      { name: "さとしん", text: "濃いめのコーヒーを飲む ☕ / マスクにハッカ油を塗る 🍃" },
      { name: "yasu", text: "人目を盗んでちょっと寝る 🤫" }
    ]
  };
  
document.addEventListener("DOMContentLoaded", () => {
    const responderBadge = `<span class="responder-tag">回答者</span>`;

    // Render Q1: AI Usage
    const aiList = document.getElementById("ai-usage-list");
    data.q1_ai_usage.forEach(item => {
        const div = document.createElement("div");
        div.className = "ai-item";
        div.innerHTML = `<div class="ai-name">👤 ${item.name} ${responderBadge}</div><div class="ai-text">${item.text}</div>`;
        aiList.appendChild(div);
    });

    // Render Q2 Chart (Chart.js)
    const ctx = document.getElementById('ribetterChart').getContext('2d');
    Chart.defaults.color = '#94a3b8';
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: data.q2_ribetter_usage.labels,
            datasets: [{
                data: data.q2_ribetter_usage.data,
                backgroundColor: [
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(139, 92, 246, 0.7)',
                    'rgba(236, 72, 153, 0.7)',
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(245, 158, 11, 0.7)'
                ],
                borderColor: 'rgba(30, 41, 59, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'right' }
            }
        }
    });

    // Render Q4: Prompt Tags
    const tagsContainer = document.getElementById("prompt-tags");
    data.q4_prompts.forEach(tag => {
        const span = document.createElement("span");
        span.className = "tag";
        span.innerText = tag;
        tagsContainer.appendChild(span);
    });

    // Render Q3: USJ
    const usjList = document.getElementById("usj-tips");
    data.q3_usj.forEach(tip => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${tip.name} ${responderBadge}</strong>: ${tip.text}`;
        usjList.appendChild(li);
    });

    // Render Q8: Sleepiness
    const sleepList = document.getElementById("sleepiness-list");
    data.q8_sleepiness.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<span>⚡</span> <strong>${item.name} ${responderBadge}</strong>: ${item.text}`;
        sleepList.appendChild(li);
    });

    // Render Q6: Morning Routine (Timeline)
    const morningList = document.getElementById("morning-routine");
    data.q6_morning.forEach(person => {
        const div = document.createElement("div");
        div.className = "timeline-person";
        
        // Add name explicitly identifying as responder
        const titleHTML = `<div class="timeline-name">👤 ${person.name} ${responderBadge}</div>`;
        
        let eventsHTML = `<ul class="timeline-events">`;
        person.timeline.forEach(event => {
            eventsHTML += `
                <li class="timeline-event">
                    <span class="time-label">${event.time}</span>
                    <span class="time-task">${event.task}</span>
                </li>`;
        });
        eventsHTML += `</ul>`;

        div.innerHTML = titleHTML + eventsHTML;
        morningList.appendChild(div);
    });

    // Render Q7: Meals (Nanobanana style)
    const mealsList = document.getElementById("meals-list");
    data.q7_meals.forEach(meal => {
        let respondersHTML = '<div class="meal-responders" style="margin-top: 1rem; border-top: 1px solid var(--glass-border); padding-top: 0.8rem;">';
        if (meal.answers) {
            meal.answers.forEach(ans => {
                respondersHTML += `<div style="font-size: 0.85rem; margin-bottom: 0.5rem; color: #e2e8f0;">👤 <strong>${ans.name}</strong> ${responderBadge} : <span style="color: #94a3b8;">${ans.detail}</span></div>`;
            });
        }
        respondersHTML += '</div>';

        const div = document.createElement("div");
        div.className = "meal-card";
        div.innerHTML = `
            <div class="meal-image-container">
                <span class="meal-badges">${meal.type}</span>
                <img src="${meal.img}" alt="${meal.title}">
            </div>
            <div class="meal-info">
                <h3 style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">${meal.title}</h3>
                <div class="meal-desc">${meal.text}</div>
                ${respondersHTML}
            </div>
        `;
        mealsList.appendChild(div);
    });

    // Initialize Leaflet Maps
    const mapJapanEl = document.getElementById('map-japan');
    const mapWorldEl = document.getElementById('map-world');
    
    let mapJapan, mapWorld;
    const markers = []; // Track markers for animation

    // Custom Leaflet Marker Icons
    const pinkIcon = L.divIcon({
        className: 'custom-pin',
        html: '<div style="background-color: var(--accent-tertiary); width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 10px var(--accent-tertiary);"></div>',
        iconAnchor: [6, 6]
    });

    const activeIcon = L.divIcon({
        className: 'custom-pin pulse-pin',
        html: '<div style="background-color: var(--accent-tertiary); width: 100%; height: 100%; border-radius: 50%;"></div>',
        iconAnchor: [8, 8]
    });

    if (mapJapanEl && mapWorldEl) {
        // Setup Map Japan
        mapJapan = L.map('map-japan', { zoomControl: true, maxZoom: 18, minZoom: 2, attributionControl: false }).setView([37.5, 137.0], 4);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { attribution: '&copy; CARTO' }).addTo(mapJapan);

        // Setup Map World
        mapWorld = L.map('map-world', { zoomControl: true, maxZoom: 18, minZoom: 1, attributionControl: false }).setView([20, 0], 1);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { attribution: '&copy; CARTO' }).addTo(mapWorld);

        // Add Markers and Bind Popups
        data.q5_travel.forEach(placeInfo => {
            if (placeInfo.coords && placeInfo.coords.length > 0) {
                placeInfo.coords.forEach(coord => {
                    const isJapan = (coord[0] >= 20 && coord[0] <= 46 && coord[1] >= 122 && coord[1] <= 154);
                    const targetMap = isJapan ? mapJapan : mapWorld;
                    
                    const marker = L.marker(coord, { icon: pinkIcon }).addTo(targetMap)
                        .bindPopup(`<strong>${placeInfo.place}</strong><br>👤 ${placeInfo.name}`);
                    
                    markers.push({
                        placeName: placeInfo.place,
                        marker: marker,
                        mapInstance: targetMap,
                        coord: coord
                    });
                });
            }
        });
    }

    // Render Q5: Travel Places (Cards)
    const placesGrid = document.getElementById("travel-places");
    data.q5_travel.forEach(place => {
        const div = document.createElement("div");
        div.className = "place-card";
        div.innerHTML = `
            <div class="place-name">📍 ${place.place}</div>
            <div class="place-user">👤 ${place.name} ${responderBadge}</div>
        `;
        
        div.addEventListener('click', () => {
            // Reset all cards and markers
            document.querySelectorAll('.place-card').forEach(el => el.classList.remove('active'));
            markers.forEach(m => m.marker.setIcon(pinkIcon));
            
            div.classList.add('active');
            
            // Highlight matching markers
            const relatedMarkers = markers.filter(m => m.placeName === place.place);
            relatedMarkers.forEach(m => {
                m.marker.setIcon(activeIcon);
                // Adjust zoom level dynamically
                const zoomLevel = m.mapInstance === mapJapan ? 6 : 4;
                m.mapInstance.flyTo(m.coord, zoomLevel, { animate: true, duration: 1.5 });
                m.marker.openPopup();
            });
        });
        
        placesGrid.appendChild(div);
    });
});
