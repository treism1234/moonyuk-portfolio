import { readFile, writeFile, mkdir } from "node:fs/promises";

const response = await fetch("http://localhost:3000/");
const rendered = await response.text();
const bodyMatch = rendered.match(/<body[^>]*>([\s\S]*?)<script[^>]*>/);
if (!bodyMatch) throw new Error("Could not extract rendered portfolio markup");

const body = bodyMatch[1].replace(/<script[\s\S]*?<\/script>/g, "").replace(/<!--\$-->|<!--\/\$-->/g, "");
const profileImage = await readFile(new URL("../public/profile-v2.png", import.meta.url));
const embeddedBody = body.replace('src="/profile-v2.png"', `src="data:image/png;base64,${profileImage.toString("base64")}"`);
const sourceCss = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
const css = sourceCss.replace(/^@import[^\n]+\n+/, "").replaceAll("var(--font-geist-mono),", "");
const script = `
const root = document.documentElement;
const time = document.querySelector('.availability');
const tick = () => { const now = new Intl.DateTimeFormat('ko-KR',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Seoul'}).format(new Date()); time.innerHTML = '<i></i> Korea · ' + now; };
tick(); setInterval(tick,30000);
addEventListener('pointermove',e=>{root.style.setProperty('--x',e.clientX+'px');root.style.setProperty('--y',e.clientY+'px')});
const button = document.querySelector('.menu-button'); const links = document.querySelector('.nav-links');
button.addEventListener('click',()=>{const open=links.classList.toggle('open');button.textContent=open?'Close':'Menu';button.setAttribute('aria-expanded',open)});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');button.textContent='Menu';button.setAttribute('aria-expanded','false')}));
const projects = [
  {no:'01',type:'Education · Content',title:['여느날','여느교실'],role:'Content planning · Production · Community',result:'Since 2020',detail:'여러 선생님들과 함께 교육 자료를 만들고, 블로그와 유튜브를 통해 수업의 아이디어와 실제 활용 방법을 나눕니다. 혼자만의 좋은 수업보다 서로의 시행착오가 연결되는 더 넓은 교실을 지향합니다.',insight:'수업을 나누는 일은 한 사람의 경험을 모두의 가능성으로 바꾸는 일입니다.',color:'coral'},
  {no:'02',type:'Writing · Publication',title:['교사가 되기 전에는','몰랐습니다만'],role:'Author · Essay',result:'Published 2020',detail:'교사가 되기 전에는 미처 알지 못했던 교실의 기쁨과 어려움, 아이들과 함께 성장하는 시간을 한 권의 에세이에 담았습니다. 2020년 한국출판문화산업진흥원 우수출판콘텐츠 제작 지원 당선작으로 선정되었습니다.',insight:'교사가 아이를 가르치는 동안, 아이들도 끊임없이 교사를 가르칩니다.',color:'violet'},
  {no:'03',type:'Curriculum · Local',title:['안녕?','우리 춘천!'],role:'Co-author · Learning content · Web cards',result:'2020—2023',detail:'국정 교과서의 사례가 가진 지역성의 한계를 보완하기 위해 춘천의 장소와 이야기를 담은 워크북형 교과서를 연구·집필했습니다. 수업에서 쉽게 활용할 수 있는 교수·학습 사이트와 지명유래 놀이 웹카드 제작에도 참여했습니다.',insight:'아이들이 살아가는 지역 자체가 가장 가까이 있는 교과서가 될 수 있습니다.',color:'mint'}
];
const drawer=document.querySelector('.project-drawer'),backdrop=document.querySelector('.drawer-backdrop'),closeDrawer=document.querySelector('.drawer-close');
const shut=()=>{drawer.classList.remove('open');backdrop.classList.remove('open');drawer.setAttribute('aria-hidden','true');document.body.style.overflow=''};
document.querySelectorAll('.project-arrow').forEach(trigger=>trigger.addEventListener('click',()=>{const p=projects[Number(trigger.dataset.project)];drawer.className='project-drawer '+p.color+' open';backdrop.classList.add('open');drawer.setAttribute('aria-hidden','false');drawer.querySelector('.drawer-number').textContent='Project '+p.no+' / 03';drawer.querySelector('.drawer-body>p').textContent=p.type;drawer.querySelector('h2').innerHTML=p.title.map(line=>'<span>'+line+'</span>').join('');const facts=drawer.querySelectorAll('.drawer-facts p');facts[0].textContent=p.role;facts[1].textContent=p.result;drawer.querySelector('.drawer-detail').textContent=p.detail;drawer.querySelector('blockquote').textContent=p.insight;document.body.style.overflow='hidden';closeDrawer.focus()}));
closeDrawer.addEventListener('click',shut);backdrop.addEventListener('click',shut);
const capabilityData=[
  {no:'01',title:'Direction',detail:'좋은 결과는 올바른 출발점에서 시작합니다. 흩어진 요구와 관찰을 하나의 핵심 질문으로 정리하고, 브랜드와 제품이 향해야 할 방향을 명확한 원칙과 우선순위로 만듭니다.',points:['문제와 기회의 재정의','브랜드·제품 전략','핵심 메시지와 로드맵']},
  {no:'02',title:'Design',detail:'추상적인 아이디어가 사람들이 보고, 느끼고, 사용할 수 있는 경험이 되도록 설계합니다. 정보 구조부터 인터랙션과 시각 언어까지 모든 접점에 같은 관점이 흐르게 합니다.',points:['UX와 정보 구조','비주얼 아이덴티티','인터랙션과 프로토타입']},
  {no:'03',title:'Build',detail:'멋진 제안서에서 멈추지 않고 실제 화면과 서비스로 구현합니다. 빠르게 만들어 검증하고, 배운 것을 다시 설계에 반영하는 작은 반복으로 완성도를 높입니다.',points:['웹사이트와 디지털 제품','노코드·AI 프로토타이핑','출시와 개선 사이클']}
];
const capabilityModal=document.querySelector('.capability-modal'),capabilityBackdrop=document.querySelector('.capability-backdrop'),capabilityClose=document.querySelector('.capability-close');
const shutCapability=()=>{capabilityModal.classList.remove('open');capabilityBackdrop.classList.remove('open');capabilityModal.setAttribute('aria-hidden','true');document.body.style.overflow=''};
document.querySelectorAll('.capability-open').forEach(trigger=>trigger.addEventListener('click',()=>{const c=capabilityData[Number(trigger.dataset.capability)];capabilityModal.querySelector('.capability-modal-no').textContent='Capability '+c.no+' / 03';capabilityModal.querySelector('h2').textContent=c.title;capabilityModal.querySelector('p').textContent=c.detail;capabilityModal.querySelector('ul').innerHTML=c.points.map(point=>'<li>'+point+'</li>').join('');capabilityModal.classList.add('open');capabilityBackdrop.classList.add('open');capabilityModal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';capabilityClose.focus()}));
capabilityClose.addEventListener('click',shutCapability);capabilityBackdrop.addEventListener('click',shutCapability);addEventListener('keydown',event=>{if(event.key==='Escape'){shut();shutCapability()}});`;

const html = `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="전략과 디자인, 기술 사이에서 새로운 경험을 만드는 독립 메이커의 포트폴리오.">
  <meta name="theme-color" content="#181716">
  <title>MOONYUK — 최문혁</title>
  <style>${css}</style>
</head>
<body>${embeddedBody}<script>${script}</script></body>
</html>`;

await mkdir(new URL("../outputs", import.meta.url), { recursive: true });
await writeFile(new URL("../outputs/index.html", import.meta.url), html);
console.log("Created outputs/index.html");
