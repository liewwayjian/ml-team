// === 队员资料（以后只改这里） ===
const team = [
  { name: 'William', role: '射手', heroes: 'miya，obsidia', note: '' },
  { name: 'alex',    role: '战士', heroes: 'minsitthar，akai', note: '' },
  { name: 'wei jie', role: '辅助', heroes: 'Thamuz', note: '' },
  { name: 'desmond', role: '打野', heroes: 'Alucard', note: '' },
  { name: 'Den',     role: '战士', heroes: 'chou', note: '' },
];

// （可选）按角色顺序排序：射手→战士→辅助→法师→打野
const order = ['射手','战士','辅助','法师','打野'];
team.sort((a,b) => order.indexOf(a.role) - order.indexOf(b.role));

// 渲染到“队伍与位置”表格
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
}
// 简单的 Tab 切换
const tabs = document.querySelectorAll('#tabs button');
const panes = document.querySelectorAll('.tab-pane');
tabs.forEach(btn=>btn.addEventListener('click',()=>{
  tabs.forEach(b=>b.classList.remove('active'));
  panes.forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(btn.dataset.tab).classList.add('active');
}));

// 示例战绩/时间轴/相册/感谢数据（你可以改成你们的真实内容）
const matchLog = [
  {date:'2025-10-28', result:'Win', note:'无打野阵容，双边推进；吃龟后直推中一塔'},
  {date:'2025-10-29', result:'Lose', note:'拿龟后犹豫，走散被抓；复盘：果断推进或控野'},
];
const timeline = [
  {date:'2025-10-20', text:'创建战队，确定位置分工'},
  {date:'2025-10-25', text:'第一次复盘会议，明确“拿资源就推进”原则'},
];
const photos = [
  // 把图片放进 assets/，在这里写文件名即可：例如 'team1.jpg'
];
const thanks = ['策划：A','记录：B','剪辑：C','解说：D'];

// 渲染函数
document.getElementById('matchLog').innerHTML = matchLog.map(m=>`
  <div class="card"><strong>${m.date}</strong> · <em>${m.result}</em> — ${m.note}</div>
`).join('');

document.getElementById('timelineList').innerHTML = timeline.map(t=>`
  <li><strong>${t.date}</strong> — ${t.text}</li>
`).join('');

document.getElementById('galleryGrid').innerHTML = photos.length
  ? photos.map(p=>`<img src="assets/${p}" alt="">`).join('')
  : '<p class="hint">把图片放到 assets/ 里，然后到 <code>js/app.js</code> 的 photos 数组添加文件名。</p>';

document.getElementById('thanksList').innerHTML = thanks.map(n=>`<li>${n}</li>`).join('');
