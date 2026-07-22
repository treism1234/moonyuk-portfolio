import { readFile, writeFile, mkdir } from "node:fs/promises";

const response = await fetch("http://localhost:3000/");
const rendered = await response.text();
const bodyMatch = rendered.match(/<body[^>]*>([\s\S]*?)<script[^>]*>/);
if (!bodyMatch) throw new Error("Could not extract rendered portfolio markup");

const body = bodyMatch[1].replace(/<script[\s\S]*?<\/script>/g, "").replace(/<!--\$-->|<!--\/\$-->/g, "");
const profileImage = await readFile(new URL("../public/profile-v2.png", import.meta.url));
const adeMark = await readFile(new URL("../public/apple-ade-mark.png", import.meta.url));
const aplsMark = await readFile(new URL("../public/apple-apls-mark.png", import.meta.url));
const embeddedBody = body
  .replaceAll('src="/profile-v2.png"', `src="data:image/png;base64,${profileImage.toString("base64")}"`)
  .replaceAll('src="/apple-ade-mark.png"', `src="data:image/png;base64,${adeMark.toString("base64")}"`)
  .replaceAll('src="/apple-apls-mark.png"', `src="data:image/png;base64,${aplsMark.toString("base64")}"`);
const sourceCss = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
const css = sourceCss.replace(/^@import[^\n]+\n+/, "").replaceAll("var(--font-geist-mono),", "");
const script = `
const root = document.documentElement;
const time = document.querySelector('.availability');
const tick = () => { const now = new Intl.DateTimeFormat('ko-KR',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Seoul'}).format(new Date()); time.innerHTML = '<i></i> Korea · ' + now; };
tick(); setInterval(tick,30000);
addEventListener('pointermove',e=>{root.style.setProperty('--x',e.clientX+'px');root.style.setProperty('--y',e.clientY+'px')});
const pauseBand=document.querySelector('.timeline-break');
if(pauseBand){const pauseObserver=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){pauseBand.classList.add('is-visible');pauseObserver.disconnect()}},{threshold:.55});pauseObserver.observe(pauseBand)}
document.querySelectorAll('[data-career-toggle]').forEach(toggle=>toggle.addEventListener('click',()=>{const school=toggle.closest('.timeline-school');const open=school.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));school.querySelector('.career-panel').setAttribute('aria-hidden',String(!open))}));
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
document.querySelectorAll('.project-arrow').forEach(trigger=>trigger.addEventListener('click',()=>{const p=projects[Number(trigger.dataset.project)];drawer.className='project-drawer '+p.color+' open';backdrop.classList.add('open');drawer.setAttribute('aria-hidden','false');drawer.querySelector('.drawer-number').textContent='Project '+p.no+' / 03';drawer.querySelector('.drawer-body>p').textContent=p.type;drawer.querySelector('h2').innerHTML=p.title.map(line=>'<span>'+line+'</span>').join('');const facts=drawer.querySelectorAll('.drawer-facts p');facts[0].textContent=p.role;facts[1].textContent=p.result;drawer.querySelector('.drawer-detail').textContent=p.detail;drawer.querySelector('blockquote').textContent=p.insight;drawer.querySelector('.drawer-book-cover').hidden=p.no!=='02';document.body.style.overflow='hidden';closeDrawer.focus()}));
closeDrawer.addEventListener('click',shut);backdrop.addEventListener('click',shut);
const capabilityData=[
  {no:'01',title:'Question',detail:'수업은 정답을 전달하는 일보다 지금 이 아이들에게 무엇이 필요한지 묻는 데서 시작한다고 믿습니다. 성취기준과 학생의 삶, 교실의 조건을 함께 살피며 풀어야 할 질문을 찾습니다. 국정 교과서 없이 과학 수업을 다시 설계하고, 지역의 이야기를 교과서로 만든 일도 이 질문에서 출발했습니다.',points:['학생의 삶에서 출발하는 수업','성취기준 중심 교육과정 재구성','지역과 학교의 문제를 학습 주제로 전환']},
  {no:'02',title:'Experience',detail:'좋은 도구를 보여주는 데 그치지 않고, 학생이 탐구하고 만들고 피드백을 주고받는 배움의 흐름 전체를 설계합니다. 1인 1기기와 클라우드, Apple 기술을 수업과 평가에 연결하고 초중 연계교육과 자유학년제 수업으로 배움의 경계를 넓혀 왔습니다.',points:['1인 1기기 기반 탐구·창작·평가','초중 연계교육과 자유학년제','ADE·APLS 활동을 통한 교사 학습 지원']},
  {no:'03',title:'Share',detail:'한 교실의 좋은 시도가 그 안에서만 끝나지 않도록 글과 영상, 웹 콘텐츠와 연수로 기록합니다. 여느날 여느교실을 운영하고 책과 지역화 교과서, 정보교육 5분 레시피를 만들며 동료 교사가 바로 활용할 수 있는 언어와 형태로 경험을 나누고 있습니다.',points:['교육 콘텐츠 기획·제작·운영','책·교과서·영상으로 남기는 기록','동료 교사와 함께 성장하는 공유 문화']}
];
const capabilityModal=document.querySelector('.capability-modal'),capabilityBackdrop=document.querySelector('.capability-backdrop'),capabilityClose=document.querySelector('.capability-close');
const shutCapability=()=>{capabilityModal.classList.remove('open');capabilityBackdrop.classList.remove('open');capabilityModal.setAttribute('aria-hidden','true');document.body.style.overflow=''};
document.querySelectorAll('.capability-open').forEach(trigger=>trigger.addEventListener('click',()=>{const c=capabilityData[Number(trigger.dataset.capability)];capabilityModal.querySelector('.capability-modal-no').textContent='Capability '+c.no+' / 03';capabilityModal.querySelector('h2').textContent=c.title;capabilityModal.querySelector('p').textContent=c.detail;capabilityModal.querySelector('ul').innerHTML=c.points.map(point=>'<li>'+point+'</li>').join('');capabilityModal.classList.add('open');capabilityBackdrop.classList.add('open');capabilityModal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';capabilityClose.focus()}));
capabilityClose.addEventListener('click',shutCapability);capabilityBackdrop.addEventListener('click',shutCapability);
const storyRecords=[...document.querySelectorAll('[data-story-record]')].map(record=>({group:record.querySelector('[data-field="group"]').textContent,title:record.querySelector('[data-field="title"]').textContent,summary:record.querySelector('[data-field="summary"]').textContent,sections:[...record.querySelectorAll('[data-field="sections"] section')].map(section=>({label:section.querySelector('span').textContent,title:section.querySelector('h3').textContent,text:section.querySelector('p').textContent})),links:[...record.querySelectorAll('[data-field="links"] a')].map(link=>({label:link.textContent,href:link.href}))}));
const storyReader=document.querySelector('.story-reader'),storyBackdrop=document.querySelector('.story-backdrop'),storyClose=document.querySelector('.story-close'),storyNav=[...document.querySelectorAll('.story-nav button')];let storyIndex=0;
const shutStory=()=>{storyReader.classList.remove('open');storyBackdrop.classList.remove('open');storyReader.setAttribute('aria-hidden','true');document.body.style.overflow=''};
const showStory=index=>{storyIndex=(index+storyRecords.length)%storyRecords.length;const story=storyRecords[storyIndex];storyReader.querySelector('.story-reader-bar strong').textContent=String(storyIndex+1).padStart(2,'0')+' / '+String(storyRecords.length).padStart(2,'0');storyReader.querySelector('.story-group').textContent=story.group;storyReader.querySelector('h2').innerHTML=story.title.split('\\n').map(line=>'<span>'+line+'</span>').join('');storyReader.querySelector('.story-lede').textContent=story.summary;storyReader.querySelector('.story-sections').innerHTML=story.sections.map(section=>'<section><span>'+section.label+'</span><h3>'+section.title+'</h3><p>'+section.text+'</p></section>').join('');storyReader.querySelector('.story-links').innerHTML=story.links.map(link=>'<a href="'+link.href+'" target="_blank" rel="noreferrer">'+link.label+'<span>↗</span></a>').join('');storyReader.querySelector('.story-reader-content').scrollTop=0;storyReader.classList.add('open');storyBackdrop.classList.add('open');storyReader.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';storyClose.focus()};
document.querySelectorAll('[data-story]').forEach(trigger=>trigger.addEventListener('click',()=>showStory(Number(trigger.dataset.story))));storyClose.addEventListener('click',shutStory);storyBackdrop.addEventListener('click',shutStory);storyNav[0].addEventListener('click',()=>showStory(storyIndex-1));storyNav[1].addEventListener('click',()=>showStory(storyIndex+1));
addEventListener('keydown',event=>{if(event.key==='Escape'){shut();shutCapability();shutStory()}if(storyReader.classList.contains('open')&&event.key==='ArrowLeft')showStory(storyIndex-1);if(storyReader.classList.contains('open')&&event.key==='ArrowRight')showStory(storyIndex+1)});`;

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
