// 确认脚本是否加载
console.log("app.js loaded");

// 等 DOM 就绪再执行，避免选择器找不到
document.addEventListener("DOMContentLoaded", () => {
  // === Tab 切换（原有功能） ===
  const tabs = document.querySelectorAll('#tabs button');
  const panes = document.querySelectorAll('.tab-pane');
  tabs.forEach(btn => btn.addEventListener('click', () => {
    tabs.forEach(b => b.classList.remove('active'));
    panes.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const pane = document.getElementById(btn.dataset.tab);
    if (pane) pane.classList.add('active');
  }));

  // === 队员资料（以后只改这里） ===
  const team = [
    { name: 'William', role: '射手', heroes: 'miya，obsidia', note: '' },
    { name: 'alex',    role: '战士', heroes: 'minsitthar，akai', note: '' },
    { name: 'wei jie', role: '辅助', heroes: 'Thamuz', note: '' },
    { name: 'desmond', role: '打野', heroes: 'Alucard', note: '' },
    { name: 'Den',     role: '战士', heroes: 'chou', note: '' },
  ];

  // （可选）角色排序：射手→战士→辅助→法师→打野
  const order = ['射手','战士','辅助','法师','打野'];
  team.sort((a,b) => order.indexOf(a.role) - order.indexOf(b.role));

  // === 渲染队伍表格 ===
  const teamTableBody = document.querySelector('#team .table tbody');
  if (teamTableBody) {
    teamTableBody.innerHTML = team.map(p => `
      <tr>
        <td>${p.name}</td>
        <td>${p.role}</td>
        <td>${p.heroes}</td>
        <td>${p.note || ''}</td>
      </tr>
    `).join('');
  } else {
    console.warn("没找到 #team .table tbody —— 请确认 index.html 里有这个表格结构。");
  }

  // === 示例战绩（保留原功能） ===
  const matchLog = [
    {date:'2025-10-30', result:'Win', note:'磨塔推进；拿龟后直推中一塔'},
    {date:'2025-10-29', result:'Lose', note:'开完团走散；复盘：就近推进或控资源'},
  ];
  const logBox = document.getElementById('matchLog');
  if (logBox) {
    logBox.innerHTML = matchLog.map(m => `
      <div class="card"><strong>${m.date}</strong> · <em>${m.result}</em> — ${m.note}</div>
    `).join('');
  }

  // === 时间轴 ===
  const timeline = [
    {date:'2025-10-20', text:'创建战队，确定位置分工'},
    {date:'2025-10-30', text:'上线团队网站（ml-team）'},
  ];
  const timelineList = document.getElementById('timelineList');
  if (timelineList) {
    timelineList.innerHTML = timeline.map(t => `<li><strong>${t.date}</strong> — ${t.text}</li>`).join('');
  }

  // === 相册 ===
  const photos = []; // 例：['win-20251030.jpg', 'funny-1.png']
  const gallery = document.getElementById('galleryGrid');
  if (gallery) {
    gallery.innerHTML = photos.length
      ? photos.map(p => `<img src="assets/${p}" alt="">`).join('')
      : '<p class="hint">把图片放到 assets/，然后到 js/app.js 的 photos 数组添加文件名。</p>';
  }

  // === 致谢 ===
  const thanks = ['William','alex','wei jie','desmond','Den'];
  const thanksList = document.getElementById('thanksList');
  if (thanksList) {
    thanksList.innerHTML = thanks.map(n => `<li>${n}</li>`).join('');
  }
});
