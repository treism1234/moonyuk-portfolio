"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    no: "01",
    type: "Education · Content",
    title: "여느날\n여느교실",
    summary: "선생님들이 함께 교육 자료를 제작하고 공유하며, 수업에 관한 고민을 나누는 콘텐츠 공간입니다.",
    result: "Since 2020",
    color: "coral",
    role: "Content planning · Production · Community",
    detail: "여러 선생님들과 함께 교육 자료를 만들고, 블로그와 유튜브를 통해 수업의 아이디어와 실제 활용 방법을 나눕니다. 혼자만의 좋은 수업보다 서로의 시행착오가 연결되는 더 넓은 교실을 지향합니다.",
    insight: "수업을 나누는 일은 한 사람의 경험을 모두의 가능성으로 바꾸는 일입니다.",
  },
  {
    no: "02",
    type: "Writing · Publication",
    title: "교사가 되기 전에는\n몰랐습니다만",
    summary: "교사로 생활하며 새롭게 알게 된 이야기를 솔직하게 기록한 교육 에세이입니다.",
    result: "Published 2020",
    color: "violet",
    role: "Author · Essay",
    detail: "교사가 되기 전에는 미처 알지 못했던 교실의 기쁨과 어려움, 아이들과 함께 성장하는 시간을 한 권의 에세이에 담았습니다. 2020년 한국출판문화산업진흥원 우수출판콘텐츠 제작 지원 당선작으로 선정되었습니다.",
    insight: "교사가 아이를 가르치는 동안, 아이들도 끊임없이 교사를 가르칩니다.",
  },
  {
    no: "03",
    type: "Curriculum · Local",
    title: "안녕?\n우리 춘천!",
    summary: "춘천의 초등학교 3학년 학생들을 위한 지역화 교과서와 학습 콘텐츠를 공동 집필했습니다.",
    result: "2020—2023",
    color: "mint",
    role: "Co-author · Learning content · Web cards",
    detail: "국정 교과서의 사례가 가진 지역성의 한계를 보완하기 위해 춘천의 장소와 이야기를 담은 워크북형 교과서를 연구·집필했습니다. 수업에서 쉽게 활용할 수 있는 교수·학습 사이트와 지명유래 놀이 웹카드 제작에도 참여했습니다.",
    insight: "아이들이 살아가는 지역 자체가 가장 가까이 있는 교과서가 될 수 있습니다.",
  },
];

const capabilities = [
  { no: "01", title: "Direction", text: "무엇을 왜 만들지 정의합니다.", detail: "좋은 결과는 올바른 출발점에서 시작합니다. 흩어진 요구와 관찰을 하나의 핵심 질문으로 정리하고, 브랜드와 제품이 향해야 할 방향을 명확한 원칙과 우선순위로 만듭니다.", points: ["문제와 기회의 재정의", "브랜드·제품 전략", "핵심 메시지와 로드맵"] },
  { no: "02", title: "Design", text: "생각을 선명한 경험으로 바꿉니다.", detail: "추상적인 아이디어가 사람들이 보고, 느끼고, 사용할 수 있는 경험이 되도록 설계합니다. 정보 구조부터 인터랙션과 시각 언어까지 모든 접점에 같은 관점이 흐르게 합니다.", points: ["UX와 정보 구조", "비주얼 아이덴티티", "인터랙션과 프로토타입"] },
  { no: "03", title: "Build", text: "아이디어가 실제로 작동하게 만듭니다.", detail: "멋진 제안서에서 멈추지 않고 실제 화면과 서비스로 구현합니다. 빠르게 만들어 검증하고, 배운 것을 다시 설계에 반영하는 작은 반복으로 완성도를 높입니다.", points: ["웹사이트와 디지털 제품", "노코드·AI 프로토타이핑", "출시와 개선 사이클"] },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [selectedCapability, setSelectedCapability] = useState<(typeof capabilities)[number] | null>(null);

  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("ko-KR", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Seoul" }).format(new Date()));
    update();
    const id = window.setInterval(update, 30000);
    const move = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move);
    return () => { window.clearInterval(id); window.removeEventListener("pointermove", move); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject || selectedCapability ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") { setSelectedProject(null); setSelectedCapability(null); } };
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", closeOnEscape); };
  }, [selectedProject, selectedCapability]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="cursor-glow" aria-hidden="true" />
      <nav className="nav" aria-label="주요 메뉴">
        <a href="#top" className="wordmark" onClick={closeMenu} aria-label="MOONYUK 홈">MOO<br />NYUK<span>®</span></a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#archive" onClick={closeMenu}>Archive</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="메뉴 열기">{menuOpen ? "Close" : "Menu"}</button>
        <div className="availability"><i /> Korea · {time || "--:--"}</div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow reveal">Teacher · Author · Maker<br />based in Korea</div>
        <div className="hero-person" aria-hidden="true">
          <img src="/profile-v2.png" alt="" />
        </div>
        <div className="identity-card">
          <span>Portfolio of</span>
          <strong>최문혁</strong>
          <small>Teacher · Author · Maker</small>
        </div>
        <h1 className="hero-title">
          <span className="line"><span>좋은 질문으로</span></span>
          <span className="line offset"><span>새로운 장면을</span></span>
          <span className="line"><span className="accent">만듭니다.</span></span>
        </h1>
        <p className="hero-copy">교육과 콘텐츠, 기술 사이를 오가며<br />배움이 즐거워지는 새로운 장면을 만듭니다.</p>
        <a className="scroll-cue" href="#work"><span>Selected work</span><b>↓</b></a>
      </section>

      <section className="work" id="work">
        <header className="section-head">
          <p>Selected work · 2023—2026</p>
          <h2>일은 결과보다<br /><em>관점</em>을 남겨야 합니다.</h2>
        </header>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project ${project.color}`} key={project.no} tabIndex={0}>
              <div className="project-meta"><span>{project.no}</span><span>{project.type}</span></div>
              <h3>{project.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
              <p>{project.summary}</p>
              <div className="project-result">{project.result}</div>
              <button className="project-arrow" data-project={Number(project.no) - 1} onClick={() => setSelectedProject(project)} aria-label={`${project.title.replace("\n", " ")} 자세히 보기`}>↗</button>
              <div className="project-shape" aria-hidden="true"><i /><b /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-kicker">What I believe</div>
        <div className="about-grid">
          <h2>저는 멋진 답보다<br />정확한 질문을<br />더 오래 믿습니다.</h2>
          <div className="about-copy">
            <p>복잡한 문제에서 본질을 찾고, 서로 다른 사람의 언어를 연결합니다. 생각을 보기 좋게 꾸미는 데 그치지 않고 실제로 움직이는 결과까지 만드는 것이 제 일입니다.</p>
            <p>교실에서 시작한 질문을 글과 콘텐츠, 디지털 도구로 확장하며 동료 교사들과 배움의 가능성을 나누고 있습니다.</p>
          </div>
        </div>
        <div className="capabilities" aria-label="전문 분야">
          {capabilities.map((capability, index) => (
            <div className="capability" key={capability.no}><span>{capability.no}</span><button className="capability-open" data-capability={index} onClick={() => setSelectedCapability(capability)} aria-label={`${capability.title} 자세히 보기`}>+</button><h3>{capability.title}</h3><p>{capability.text}</p></div>
          ))}
        </div>
      </section>

      <section className="journey" id="archive">
        <header className="journey-head">
          <p>Journey · Since 2014</p>
          <h2>교실에서 시작된<br /><em>도전의 궤적.</em></h2>
          <div className="archive-stamp">2023<br />Archive</div>
        </header>
        <div className="timeline">
          <div className="timeline-item"><span>2014.03—2015.01</span><h3>춘천 남부초등학교</h3><p>신규 발령으로 교사의 길을 시작했습니다.</p></div>
          <div className="timeline-item"><span>2015.01—2016.10</span><h3>의무경찰 · 112타격대</h3><p>군 복무를 마친 뒤 다시 교실로 돌아왔습니다.</p></div>
          <div className="timeline-item"><span>2016.10—2020.02</span><h3>춘천 남부초등학교</h3><p>복직 후 수업과 학교생활의 기반을 다졌습니다.</p></div>
          <div className="timeline-item"><span>2020—2021</span><h3>춘천 신남초등학교</h3><p>교육 콘텐츠와 지역화 교과서 집필 등 교실 밖으로 배움의 연결을 넓혔습니다.</p></div>
          <div className="timeline-item current"><span>2021—2023 기록</span><h3>춘천 퇴계초중학교</h3><p>초중 연계교육, 교육과정기획팀, 디지털 기반 수업을 통해 학교 안의 새로운 가능성을 실험했습니다.</p></div>
        </div>
      </section>

      <section className="apple-story">
        <div className="apple-story-head">
          <p>Education × Apple</p>
          <h2>Apple과의<br />교육적 만남.</h2>
          <a href="https://www.apple.com/kr/education/k12/apple-distinguished-educator/" target="_blank" rel="noreferrer">Official ADE profile <span>↗</span></a>
        </div>
        <div className="apple-story-body">
          <p className="apple-lead">기술을 잘 사용하는 데서 멈추지 않고, 기술이 교사와 학생의 가능성을 어떻게 넓힐 수 있는지 탐구합니다.</p>
          <div className="apple-path">
            <article><span>ADE</span><div><p>Apple Distinguished Educator</p><h3>글로벌 교육자<br />커뮤니티와 연결되다.</h3><p>Apple 기술로 가르침과 배움의 변화를 이끄는 교육자로 선정되었습니다. Apple 공식 페이지에 <strong>Moon-hyuk Choi</strong>, 대한민국 초등학교 교사로 소개되어 있습니다.</p></div></article>
            <article><span>APLS</span><div><p>Apple Professional Learning Specialist</p><h3>동료 교사의 변화에<br />함께하다.</h3><p>교육 현장에 맞춘 코칭과 멘토링을 통해 Apple 기술이 수업과 평가, 창작의 도구가 되도록 교육자들의 전문적 성장을 지원합니다.</p></div></article>
            <article><span>ADS</span><div><p>Apple Distinguished School</p><h3>한 교실을 넘어<br />학교의 문화를 설계하다.</h3><p>1인 1기기 학습 환경과 지속적인 교육 혁신 사례를 체계화하며, 학교가 Apple Distinguished School의 비전을 구현하는 과정에 참여했습니다.</p></div></article>
          </div>
        </div>
      </section>

      <section className="practice">
        <div className="practice-intro">
          <p>Practice archive</p>
          <h2>가르치고,<br />만들고,<br /><em>나눕니다.</em></h2>
          <p className="practice-note">2023년 포트폴리오에 기록된 대표 활동입니다. 지금의 이야기는 이후 업데이트될 예정입니다.</p>
        </div>
        <div className="practice-list">
          <a className="practice-item" href="https://ynys-classroom.tistory.com/" target="_blank" rel="noreferrer"><span>01 · 2020—</span><h3>여느날 여느교실</h3><p>교사들이 함께 교육 자료를 만들고 공유하며 연구하는 콘텐츠 커뮤니티를 운영합니다.</p><b>↗</b></a>
          <a className="practice-item" href="https://search.shopping.naver.com/book/catalog/32444936666" target="_blank" rel="noreferrer"><span>02 · Publication</span><h3>교사가 되기 전에는<br />몰랐습니다만</h3><p>교사로 살며 새롭게 알게 된 이야기를 기록한 에세이. 2020 우수출판콘텐츠 제작 지원 당선작입니다.</p><b>↗</b></a>
          <div className="practice-item"><span>03 · 2020—2023</span><h3>안녕? 우리 춘천!</h3><p>초등학교 3학년을 위한 지역화 교과서와 교수·학습 사이트를 공동 연구하고 집필했습니다.</p><b>＋</b></div>
          <a className="practice-item" href="https://www.youtube.com/watch?v=qPHQcXqozT4" target="_blank" rel="noreferrer"><span>04 · Open class</span><h3>수업 나눔 V-log</h3><p>아이패드와 클라우드를 활용한 수업의 설계, 평가, 피드백 과정을 동료 교사들과 공유했습니다.</p><b>↗</b></a>
          <a className="practice-item" href="https://youtu.be/kyITSX6KMJk?t=5515" target="_blank" rel="noreferrer"><span>05 · Forum · 2021</span><h3>강원미래교육포럼<br />주제 발제</h3><p>과학과 게이미피케이션 전략을 통한 보편적 학습설계를 주제로 강원교육의 가능성을 제안했습니다.</p><b>↗</b></a>
          <a className="practice-item" href="https://youtu.be/goJRNs5m7NY" target="_blank" rel="noreferrer"><span>06 · Video series</span><h3>정보교육<br />5분 레시피</h3><p>교사를 위해 구글문서, 그래플릿, 캔바, 로블록스, 게더타운, 워드월 활용법을 여섯 편의 영상으로 제작했습니다.</p><b>↗</b></a>
        </div>
      </section>

      <section className="school-lab">
        <header className="school-lab-head">
          <p>Challenges inside school · 2021—2023</p>
          <h2>학교 안에서<br /><em>바꿔 본 것들.</em></h2>
          <p className="school-lab-lead">새로운 도구를 쓰는 것보다 학교의 오래된 전제를 다시 묻는 일에 집중했습니다.</p>
        </header>
        <div className="challenge-grid">
          <article><span>01 · Connection</span><h3>초등교사가 진행한<br />중학교 자유학년제</h3><p>중학교 1학년 예술·체육 주제선택 수업을 2년간 맡으며 초중 연계교육의 실제 가능성을 실험했습니다.</p></article>
          <article><span>02 · Organization</span><h3>담임에게 행정업무를<br />주지 않는 팀</h3><p>교육과정기획팀에서 학교 업무를 함께 맡아 담임교사가 수업, 상담, 생활지도에 집중할 시간을 만들었습니다.</p></article>
          <article><span>03 · Curriculum</span><h3>국정 교과서 없이<br />설계한 과학 수업</h3><p>성취기준과 학생의 학습 양식을 출발점으로 차시와 활동을 직접 구성하며 교과서의 범위를 다시 정의했습니다.</p></article>
          <article><span>04 · 1:1 Learning</span><h3>아이패드에 쌓이는<br />배움의 기록</h3><p>사전 과제부터 탐구, 프로젝트, 평가와 피드백까지 1인 1기기와 클라우드로 연결했습니다.</p></article>
        </div>
      </section>

      <section className="archive-room">
        <header className="archive-room-head"><p>Talks · Press · Learning media</p><h2>기록으로 남은<br />도전들.</h2></header>
        <div className="archive-columns">
          <div className="press-list">
            <p className="archive-label">Book talks & interviews</p>
            <a href="http://www.kwnews.co.kr/nview.asp?s=201&aid=220060700117" target="_blank" rel="noreferrer"><span>2020.06</span><strong>강원일보 · 6년 동안 짧고 굵게 느낀 선생님이란?</strong><b>↗</b></a>
            <a href="http://www.kado.net/news/articleView.html?idxno=1027923" target="_blank" rel="noreferrer"><span>2020.06</span><strong>강원도민일보 · 좋은 스승 꿈꾸며 쓴 한 권의 일기</strong><b>↗</b></a>
            <a href="https://youtu.be/eWvZUKH8ISs" target="_blank" rel="noreferrer"><span>2020.07</span><strong>여느날 여느교실 · 북토크</strong><b>↗</b></a>
            <a href="https://youtu.be/mjjpxD-6Vdc" target="_blank" rel="noreferrer"><span>2020.11</span><strong>서울시 도서관 · 북콘서트</strong><b>↗</b></a>
            <a href="https://www.hankyung.com/life/article/2021010787451" target="_blank" rel="noreferrer"><span>2021.01</span><strong>한국경제 · 이상과는 너무 다른 공무원의 세계</strong><b>↗</b></a>
            <a href="https://www.tekville.com/files/magazine/pdf/magazine_pdf_1655338596.pdf" target="_blank" rel="noreferrer"><span>2022.06</span><strong>티처빌 매거진 · 어른 같지 않은 어른으로 키우겠습니다</strong><b>↗</b></a>
          </div>
          <div className="recipe-panel">
            <p className="archive-label">Information education · 5 minute recipe</p>
            <h3>교사를 위한 여섯 개의<br />짧고 실제적인 안내서.</h3>
            <div className="recipe-links">
              <a href="https://youtu.be/goJRNs5m7NY" target="_blank" rel="noreferrer">01 구글문서 ↗</a>
              <a href="https://youtu.be/CeKxM6gFy8g" target="_blank" rel="noreferrer">02 그래플릿 ↗</a>
              <a href="https://youtu.be/CcRaybZOVsA" target="_blank" rel="noreferrer">03 캔바 ↗</a>
              <a href="https://youtu.be/-vNDipT1bIY" target="_blank" rel="noreferrer">04 로블록스 ↗</a>
              <a href="https://youtu.be/kuBjwroO_Ig" target="_blank" rel="noreferrer">05 게더타운 ↗</a>
              <a href="https://youtu.be/DZPDfaOrbpo" target="_blank" rel="noreferrer">06 워드월 ↗</a>
            </div>
          </div>
        </div>
      </section>

      <section className="principles">
        <p className="principles-label">Four principles</p>
        <div className="principles-title"><span>제가 지키는</span><h2>교실의 원칙</h2></div>
        <ol>
          <li><span>01</span><p>아이들은 재미있는 <em>활동</em>에서 스며들듯 배웁니다.</p></li>
          <li><span>02</span><p>교사의 본업은 결국 <em>잘 가르치는 것</em>입니다.</p></li>
          <li><span>03</span><p>최대한 아이들 <em>곁에서 함께</em>합니다.</p></li>
          <li><span>04</span><p>배운 모든 것을 <em>공유하며 신뢰</em>를 만듭니다.</p></li>
        </ol>
      </section>

      <section className="next-questions">
        <div><p>Next questions · From the 2023 archive</p><h2>아직 해보지 않은 일이<br />더 많습니다.</h2></div>
        <ul>
          <li><span>01</span>기술로 학교의 반복 업무를 더 가볍게 만들 수 있을까?</li>
          <li><span>02</span>교육공학을 더 깊이 공부하면 교실은 어떻게 달라질까?</li>
          <li><span>03</span>다른 문화와 환경에서도 좋은 배움을 설계할 수 있을까?</li>
        </ul>
      </section>

      <section className="contact" id="contact">
        <p>Have a project in mind?</p>
        <h2>같이 재미있는 일을<br />만들어 봅시다.</h2>
        <a href="mailto:ansgur4420@gmail.com" className="contact-link">ansgur4420@gmail.com <span>↗</span></a>
        <footer>
          <span>© 2026 MOONYUK · 최문혁</span>
          <div><a href="https://www.instagram.com/ynys_trey/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.youtube.com/c/여느날여느교실" target="_blank" rel="noreferrer">YouTube</a><a href="#top">Back to top ↑</a></div>
        </footer>
      </section>

      <div className={`drawer-backdrop ${selectedProject ? "open" : ""}`} onClick={() => setSelectedProject(null)} aria-hidden="true" />
      <aside className={`project-drawer ${selectedProject?.color || "coral"} ${selectedProject ? "open" : ""}`} role="dialog" aria-modal="true" aria-hidden={!selectedProject} aria-labelledby="drawer-title">
        <button className="drawer-close" onClick={() => setSelectedProject(null)} aria-label="프로젝트 상세 닫기">Close <span>×</span></button>
        <div className="drawer-number">Project {selectedProject?.no || "01"} / 03</div>
        <div className="drawer-body">
          <p>{selectedProject?.type || "Brand · Product"}</p>
          <h2 id="drawer-title">{selectedProject?.title.split("\n").map((line) => <span key={line}>{line}</span>) || "프로젝트 상세"}</h2>
          <div className="drawer-facts"><span>My role</span><p>{selectedProject?.role || "Strategy · Design · Build"}</p><span>Outcome</span><p>{selectedProject?.result || "Project result"}</p></div>
          <p className="drawer-detail">{selectedProject?.detail || "프로젝트에 대한 상세 설명입니다."}</p>
          <blockquote>{selectedProject?.insight || "프로젝트를 통해 발견한 핵심 관점입니다."}</blockquote>
        </div>
      </aside>

      <div className={`capability-backdrop ${selectedCapability ? "open" : ""}`} onClick={() => setSelectedCapability(null)} aria-hidden="true" />
      <section className={`capability-modal ${selectedCapability ? "open" : ""}`} role="dialog" aria-modal="true" aria-hidden={!selectedCapability} aria-labelledby="capability-title">
        <button className="capability-close" onClick={() => setSelectedCapability(null)} aria-label="설명 팝업 닫기">×</button>
        <div className="capability-modal-no">Capability {selectedCapability?.no || "01"} / 03</div>
        <h2 id="capability-title">{selectedCapability?.title || "Direction"}</h2>
        <p>{selectedCapability?.detail || capabilities[0].detail}</p>
        <ul>{(selectedCapability?.points || capabilities[0].points).map((point) => <li key={point}>{point}</li>)}</ul>
      </section>
    </main>
  );
}
