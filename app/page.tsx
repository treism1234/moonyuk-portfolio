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
  { no: "01", title: "Question", text: "교실의 문제를 배움의 질문으로 바꿉니다.", detail: "수업은 정답을 전달하는 일보다 지금 이 아이들에게 무엇이 필요한지 묻는 데서 시작한다고 믿습니다. 성취기준과 학생의 삶, 교실의 조건을 함께 살피며 풀어야 할 질문을 찾습니다. 국정 교과서 없이 과학 수업을 다시 설계하고, 지역의 이야기를 교과서로 만든 일도 이 질문에서 출발했습니다.", points: ["학생의 삶에서 출발하는 수업", "성취기준 중심 교육과정 재구성", "지역과 학교의 문제를 학습 주제로 전환"] },
  { no: "02", title: "Experience", text: "학생과 교사가 참여하는 경험을 설계합니다.", detail: "좋은 도구를 보여주는 데 그치지 않고, 학생이 탐구하고 만들고 피드백을 주고받는 배움의 흐름 전체를 설계합니다. 1인 1기기와 클라우드, Apple 기술을 수업과 평가에 연결하고 초중 연계교육과 자유학년제 수업으로 배움의 경계를 넓혀 왔습니다.", points: ["1인 1기기 기반 탐구·창작·평가", "초중 연계교육과 자유학년제", "ADE·APLS 활동을 통한 교사 학습 지원"] },
  { no: "03", title: "Share", text: "교실의 실천을 기록하고 널리 나눕니다.", detail: "한 교실의 좋은 시도가 그 안에서만 끝나지 않도록 글과 영상, 웹 콘텐츠와 연수로 기록합니다. 여느날 여느교실을 운영하고 책과 지역화 교과서, 정보교육 5분 레시피를 만들며 동료 교사가 바로 활용할 수 있는 언어와 형태로 경험을 나누고 있습니다.", points: ["교육 콘텐츠 기획·제작·운영", "책·교과서·영상으로 남기는 기록", "동료 교사와 함께 성장하는 공유 문화"] },
];

const stories = [
  {
    no: "01", group: "Practice · Since 2020", title: "여느날\n여느교실", summary: "교사들이 함께 만들고 연구한 자료를 더 넓은 교실로 연결합니다.",
    sections: [
      { label: "Context", title: "혼자만의 좋은 수업을 넘어", text: "수업을 준비하며 만든 자료와 시행착오가 한 교실 안에서만 사라지는 것이 늘 아쉬웠습니다. 여러 선생님이 각자의 경험을 연결하면 더 많은 학생에게 좋은 배움이 닿을 수 있다고 생각했습니다." },
      { label: "Practice", title: "만들고, 공유하고, 함께 연구하기", text: "2020년부터 교육 콘텐츠 공간 ‘여느날 여느교실’ 운영에 참여하고 있습니다. 블로그와 유튜브 채널을 통해 바로 활용할 수 있는 교육 자료와 수업 아이디어, 도구의 활용법을 꾸준히 나누고 있습니다." },
      { label: "Meaning", title: "공유가 만드는 신뢰", text: "완성된 정답만 보여주기보다 고민과 과정까지 솔직하게 공개하는 일이 동료 교사 사이의 신뢰를 만들고, 한 사람의 경험을 모두의 가능성으로 바꾼다고 믿습니다." },
    ], links: [{ label: "블로그 방문", href: "https://ynys-classroom.tistory.com/" }, { label: "YouTube 채널", href: "https://www.youtube.com/c/여느날여느교실" }],
  },
  {
    no: "02", group: "Publication · 2020", title: "교사가 되기 전에는\n몰랐습니다만", summary: "교사로 살아가며 새롭게 알게 된 교실의 이야기를 한 권의 에세이로 기록했습니다.",
    sections: [
      { label: "Context", title: "교사가 된 뒤에야 보인 것들", text: "아이를 가르치는 기쁨과 어려움, 교실에서 마주하는 작고 선명한 순간들은 교사가 되기 전에는 알 수 없던 세계였습니다. 그 장면들을 과장하지 않고 솔직한 언어로 남기고 싶었습니다." },
      { label: "Record", title: "교실의 시간을 책으로", text: "교사 생활에서 새롭게 알게 된 이야기를 교육 에세이 『교사가 되기 전에는 몰랐습니다만』에 담았습니다. 이 책은 2020년 한국출판문화산업진흥원 우수출판콘텐츠 제작 지원 당선작으로 선정되었습니다." },
      { label: "Meaning", title: "기록은 다시 대화가 됩니다", text: "개인의 경험으로 시작한 글은 북토크와 인터뷰를 통해 교사, 학부모, 독자와 교실을 다시 이야기하는 매개가 되었습니다. 기록은 지나간 일을 보존하는 동시에 다음 질문을 여는 일임을 배웠습니다." },
    ], links: [{ label: "도서 정보", href: "https://search.shopping.naver.com/book/catalog/32444936666" }],
  },
  {
    no: "03", group: "Curriculum · 2020—2023", title: "안녕?\n우리 춘천!", summary: "학생이 사는 지역 자체를 가장 가까운 교과서로 만들었습니다.",
    sections: [
      { label: "Problem", title: "국정 교과서와 아이들의 삶 사이", text: "초등학교 3학년 사회 교과서의 사례는 춘천의 학생들이 자신의 생활과 연결해 이해하기에 지역성이 부족했습니다. 멀리 있는 사례보다 매일 걷고 바라보는 장소에서 배움을 시작할 필요가 있었습니다." },
      { label: "Making", title: "지역을 담은 워크북과 웹 콘텐츠", text: "사회 교과서와 함께 활용하는 지역화 교과서 ‘안녕? 우리 춘천!’을 공동 연구·집필했습니다. 춘천의 장소와 이야기, 활동 자료를 워크북에 담고 교수·학습 사이트와 지명유래 놀이 웹카드 제작에도 참여했습니다." },
      { label: "Meaning", title: "지역은 살아 있는 교과서", text: "아이들이 이미 알고 있다고 생각했던 동네를 새로운 눈으로 탐구하면서, 배움은 삶과 가까울수록 더 구체적이고 오래 남는다는 사실을 확인했습니다. 콘텐츠는 매년 협의를 통해 보완했습니다." },
    ], links: [],
  },
  {
    no: "04", group: "Open class · 2022", title: "수업 나눔\nV-log", summary: "수업의 결과뿐 아니라 설계와 고민, 피드백의 과정까지 공개했습니다.",
    sections: [
      { label: "Question", title: "완성된 수업만 보여줘야 할까?", text: "수업 공개는 흔히 잘 정돈된 한 장면에 집중합니다. 하지만 동료 교사에게 정말 도움이 되는 것은 그 수업에 도달하기까지의 판단과 망설임, 실패를 조정한 과정이라고 생각했습니다." },
      { label: "Practice", title: "아이패드와 클라우드로 연결한 수업", text: "강원도교육청 수업 나눔 브이로그 ‘수나브로’에 참여했습니다. 아이패드의 Numbers와 Schoolwork 등 기본 앱을 활용하고, 클라우드에서 학생의 활동을 공유·평가하며 의미 있는 피드백을 전달하는 과정을 공개했습니다." },
      { label: "Meaning", title: "과정을 나누는 수업 공개", text: "새로운 도구의 기능보다 교사가 왜 그 도구를 선택했고 학생의 반응을 보며 어떻게 수업을 바꾸었는지 보여주려 했습니다. 솔직한 과정의 공유가 동료의 새로운 시도를 더 쉽게 시작하게 합니다." },
    ], links: [{ label: "수나브로 영상", href: "https://www.youtube.com/watch?v=qPHQcXqozT4" }],
  },
  {
    no: "05", group: "Forum · 2021.12.03", title: "강원미래교육포럼\n주제 발제", summary: "게이미피케이션을 통해 단 한 사람도 포기하지 않는 과학 수업을 제안했습니다.",
    sections: [
      { label: "Theme", title: "보편적 학습설계를 수업의 언어로", text: "‘단 한 사람도 포기하지 않는 강원교육 상상하기’를 주제로 열린 포럼에서 과학과 게이미피케이션 전략을 통한 보편적 학습설계를 발표했습니다." },
      { label: "Proposal", title: "참여의 문턱을 낮추는 설계", text: "학생마다 다른 흥미와 학습 양식, 성취 수준을 고려해 선택과 도전, 즉각적인 피드백을 수업 안에 배치하는 방법을 제안했습니다. 게임 자체가 목적이 아니라 모든 학생이 배움에 들어올 수 있는 경로를 다양하게 만드는 것이 핵심이었습니다." },
      { label: "Meaning", title: "교실의 실천을 공적인 제안으로", text: "한 교실에서 검증한 작은 전략을 교육 공동체의 언어로 정리해 나누는 경험이었습니다. 실천을 설명할 수 있을 때 경험은 다른 환경에서도 다시 시도될 수 있습니다." },
    ], links: [{ label: "발제 영상", href: "https://youtu.be/kyITSX6KMJk?t=5515" }],
  },
  {
    no: "06", group: "Video series · 2021", title: "정보교육\n5분 레시피", summary: "교사가 바로 시작할 수 있는 여섯 개의 짧고 실제적인 안내서를 만들었습니다.",
    sections: [
      { label: "Need", title: "도구를 아는 것과 수업에 쓰는 것 사이", text: "새로운 서비스는 계속 등장하지만 바쁜 교사가 긴 설명을 따라가며 수업 활용법까지 찾기는 쉽지 않습니다. 짧은 시간 안에 핵심 기능과 실제 사용 장면을 함께 보여주는 콘텐츠가 필요했습니다." },
      { label: "Making", title: "여섯 서비스, 여섯 편의 영상", text: "강원교육과학정보원의 ‘정보교육을 위한 스마트기기 간단 활용 5분 레시피’ 제작에 참여했습니다. 구글문서, 그래플릿, 캔바, 로블록스, 게더타운, 워드월을 교사가 바로 따라 할 수 있는 흐름으로 소개했습니다." },
      { label: "Meaning", title: "짧지만 실제적인 첫걸음", text: "기능을 많이 설명하기보다 수업에서 가장 먼저 필요한 한 가지 장면에 집중했습니다. 좋은 안내는 전문성을 과시하는 것이 아니라 사용자가 스스로 다음 단계로 갈 수 있게 만드는 것이라고 생각합니다." },
    ], links: [{ label: "영상 모음 보기", href: "https://youtu.be/goJRNs5m7NY" }],
  },
  {
    no: "07", group: "School challenge · Connection", title: "초등교사가 진행한\n중학교 자유학년제", summary: "초중 사이의 물리적·제도적 거리를 넘어 연계교육의 가능성을 실험했습니다.",
    sections: [
      { label: "Challenge", title: "초등교사가 중학생을 만난다는 것", text: "초중통합운영학교에서 자유학년제 강사 자격을 얻어 중학교 1학년 예술·체육 주제선택 수업을 2년간 단독으로 진행했습니다. 처음에는 초등학생과 다른 반응을 마주할까 걱정했습니다." },
      { label: "Learning", title: "가까워지자 경계가 흐려졌습니다", text: "한 학기에 걸쳐 학생들과 가까워지며 중학생 역시 호기심과 관계 속에서 배우는 학생이라는 당연한 사실을 새롭게 체감했습니다. 학교 차원에서도 초중 연계교육의 실제 모델을 확인할 수 있었습니다." },
      { label: "Meaning", title: "제도의 틈을 배움의 통로로", text: "학교급 사이의 경계는 고정된 벽이 아니라 새로운 배움을 설계할 수 있는 조건이 될 수 있습니다. 낯선 대상과 환경을 두려워하지 않고 먼저 만나 보는 경험이 저에게도 큰 배움이 되었습니다." },
    ], links: [],
  },
  {
    no: "08", group: "School challenge · Organization", title: "담임에게 행정업무를\n주지 않는 팀", summary: "담임교사가 수업·상담·생활지도에 집중할 시간을 조직적으로 만들었습니다.",
    sections: [
      { label: "Problem", title: "교사의 시간이 어디에 쓰이는가", text: "약 40학급 규모의 학교에서 담임교사가 수업 준비와 상담보다 행정 처리에 더 많은 시간을 쓰는 구조를 당연하게 받아들이고 싶지 않았습니다." },
      { label: "Action", title: "교육과정기획팀으로 업무를 모으다", text: "2021년 5명, 2022년 7명의 교육과정기획팀 교사가 학교 전체 업무를 함께 맡았습니다. 담임선생님에게 행정 업무는 물론 과제카드조차 주지 않는 것을 목표로 역할과 절차를 다시 설계했습니다." },
      { label: "Meaning", title: "업무 정상화는 수업을 위한 설계", text: "업무의 많고 적음보다 중요한 변화는 담임교사가 수업 준비, 상담, 생활지도라는 본연의 일에 더 깊은 시간과 노력을 쓸 수 있게 된 것입니다. 조직의 구조도 교육의 질을 바꾸는 설계 대상입니다." },
    ], links: [],
  },
  {
    no: "09", group: "School challenge · Curriculum", title: "국정 교과서 없이\n설계한 과학 수업", summary: "성취기준과 우리 학생의 학습 양식에서 차시를 다시 구성했습니다.",
    sections: [
      { label: "Question", title: "교과서는 하나뿐일까?", text: "교과서와 국정 교과서를 같은 것으로 보는 익숙한 인식에서 벗어나고 싶었습니다. 교사가 교육적 의도를 가지고 활용하는 모든 자료는 배움을 위한 교과서가 될 수 있습니다." },
      { label: "Design", title: "성취기준에서 시작하는 차시", text: "6학년 과학을 가르치며 국가교육과정의 성취기준과 학습 요소를 출발점으로 수업을 구성했습니다. 학교와 학생의 성취 수준, 학습 습관을 고려해 더 재미있는 활동과 더 깊은 탐구를 선택했습니다." },
      { label: "Meaning", title: "번거로움이 만든 ‘아하!’", text: "교사에게는 한 과정이 더 늘었지만 학생에게는 자신의 방식으로 이해할 가능성이 커졌습니다. 수업 중 표정과 입으로 ‘아하!’를 말하는 학생이 늘면서 교육과정 재구성의 힘을 확인했습니다." },
    ], links: [],
  },
  {
    no: "10", group: "School challenge · 1:1 Learning", title: "아이패드에 쌓이는\n배움의 기록", summary: "과제·탐구·프로젝트·평가·피드백을 한 흐름으로 연결했습니다.",
    sections: [
      { label: "Beginning", title: "기기를 나눠 주는 것 이후", text: "온라인 콘텐츠 활용 교과서 선도학교 선정으로 6학년 학생에게 1인 1아이패드 환경이 마련되었습니다. 목표는 종이를 화면으로 바꾸는 데 있지 않았습니다." },
      { label: "System", title: "배움의 전 과정을 연결하다", text: "사전 과제, 수업 활동과 탐구, 모둠 프로젝트, 개별 평가와 피드백을 아이패드와 클라우드에서 이어지게 했습니다. 기기는 교과서이자 학습 공책, 협업 공간, 평가의 장이 되었습니다." },
      { label: "Meaning", title: "보이는 기록, 실제적인 피드백", text: "학생의 활동과 과제가 시간에 따라 자동으로 쌓이면서 결과 한 번보다 변화의 과정을 볼 수 있게 되었습니다. 학생의 학습 의욕이 높아졌고 교사는 더 구체적이고 의미 있는 피드백을 제공할 수 있었습니다." },
    ], links: [{ label: "운영 사례 보기", href: "https://www.canva.com/design/DAE8jFEvMlA/et_S3sCqXV26NfPQdNwJdQ/view" }],
  },
];

const careerStops = [
  {
    dates: "2014.03.17. - 2015.01.14.", school: "춘천 남부초등학교", description: "신규 발령으로 교사의 길을 시작했습니다.",
    years: [
      { year: "2014", role: "교과전담", subjects: "과학 · 도덕 · 실과", duty: "육상부 · 다문화" },
      { year: "2015", role: "교과전담", subjects: "체육", duty: "육상부" },
    ],
  },
  {
    dates: "2016.10.15. - 2020.02.29.", school: "춘천 남부초등학교", description: "복직 후 담임으로 학생들과 생활하며 학교생활의 기반을 다졌습니다.",
    years: [
      { year: "2016", role: "5학년 담임", subjects: "", duty: "청소년단체" },
      { year: "2017", role: "5학년 담임", subjects: "", duty: "청소년단체" },
      { year: "2018", role: "5학년 담임", subjects: "", duty: "임시 업무" },
      { year: "2019", role: "3학년 담임", subjects: "", duty: "방송업무" },
    ],
  },
  {
    dates: "2020.03.01. - 2021.02.28.", school: "춘천 신남초등학교", description: "교육 콘텐츠와 지역화 교과서 집필 등 교실 밖으로 배움의 연결을 넓혔습니다.",
    years: [{ year: "2020", role: "2학년 담임", subjects: "", duty: "육상부" }],
  },
  {
    dates: "2021.03.01. - 2025.02.28.", school: "춘천 퇴계초중학교", description: "초중 연계교육과 교육과정 기획, 디지털 기반 수업의 가능성을 실험했습니다.",
    years: [
      { year: "2021", role: "교과전담", subjects: "과학", duty: "교육과정지원 · 학생자치 · 동아리" },
      { year: "2022", role: "교과전담", subjects: "과학", duty: "교육과정기획 · 연구" },
      { year: "2023", role: "교과전담", subjects: "과학", duty: "교무기획 · 교무" },
      { year: "2024", role: "5학년 담임", subjects: "", duty: "교육과정기획팀(업무전담팀) 운영으로 담임교사 업무 없음" },
    ],
  },
  {
    dates: "2025.03.01. - 2026.02.28.", school: "춘천 봉의초등학교", description: "새로운 학교의 학생·동료 교사들과 교육 실천을 확장했습니다.",
    years: [{ year: "2025", role: "4학년 담임", subjects: "", duty: "연구정보" }],
  },
  {
    dates: "2026.03.01. - 현재", school: "홍천 홍천초등학교", description: "학생의 삶에서 출발하는 수업과 디지털 기반 배움의 장면을 이어가고 있습니다.", current: true,
    years: [{ year: "2026", role: "5학년 담임", subjects: "", duty: "과학정보" }],
  },
];

function CareerSchool({ stop }: { stop: (typeof careerStops)[number] }) {
  return <details className={`timeline-school ${stop.current ? "current" : ""}`}>
    <summary className="timeline-item">
      <span>{stop.dates}</span><h3>{stop.school}</h3><p>{stop.description}</p><b aria-hidden="true">＋</b>
    </summary>
    <div className="career-years">
      {stop.years.map((item) => <article key={`${stop.school}-${item.year}`}>
        <span>{item.year}</span>
        <div><h4>{item.role}{item.subjects && <em> · {item.subjects}</em>}</h4><p><small>업무</small>{item.duty || "행정업무 없음"}</p></div>
      </article>)}
    </div>
  </details>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [selectedCapability, setSelectedCapability] = useState<(typeof capabilities)[number] | null>(null);
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

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
    const band = document.querySelector(".timeline-break");
    if (!band) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        band.classList.add("is-visible");
        observer.disconnect();
      }
    }, { threshold: 0.55 });
    observer.observe(band);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject || selectedCapability || selectedStory !== null ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setSelectedProject(null); setSelectedCapability(null); setSelectedStory(null); }
      if (selectedStory !== null && event.key === "ArrowLeft") setSelectedStory((selectedStory - 1 + stories.length) % stories.length);
      if (selectedStory !== null && event.key === "ArrowRight") setSelectedStory((selectedStory + 1) % stories.length);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", closeOnEscape); };
  }, [selectedProject, selectedCapability, selectedStory]);

  const closeMenu = () => setMenuOpen(false);
  const activeStory = selectedStory !== null ? stories[selectedStory] : stories[0];

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
        <div className="updated-stamp" aria-label="최종 수정일 2026년 7월 22일">
          <span>Last updated</span>
          <time dateTime="2026-07-22">2026.07.22</time>
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
          <h2>교실에서 발견하고,<br />경험으로 설계해,<br />함께 나눕니다.</h2>
          <div className="about-copy">
            <p>저는 학생의 삶과 교실의 장면에서 질문을 발견하는 초등교사입니다. 교과서와 학교의 익숙한 방식을 그대로 따르기보다, 지금 우리에게 필요한 배움이 무엇인지 다시 묻습니다.</p>
            <p>그 질문을 수업과 교육과정으로 설계하고, Apple 기술과 디지털 도구로 구현합니다. 교실에서 확인한 가능성은 글과 영상, 책과 연수로 기록해 동료 교사들과 나눕니다.</p>
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
          <CareerSchool stop={careerStops[0]} />
          <div className="timeline-break" aria-label="군 복무를 위한 휴직">
            <div className="timeline-break-focus" aria-hidden="true">
              <i /><span>군 복무를 위한 휴직</span><i />
            </div>
          </div>
          {careerStops.slice(1).map((stop) => <CareerSchool stop={stop} key={`${stop.school}-${stop.dates}`} />)}
        </div>
      </section>

      <section className="apple-story">
        <div className="apple-story-head">
          <p>Education × Apple</p>
          <h2>Apple과의<br />교육적 만남.</h2>
          <a href="https://www.apple.com/kr/education/k12/apple-distinguished-educator/#:~:text=Moon%2Dhyuk%20Choi" target="_blank" rel="noreferrer">Official ADE profile <span>↗</span></a>
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
          {stories.slice(0, 6).map((story, index) => <button className="practice-item" data-story={index} onClick={() => setSelectedStory(index)} key={story.no}><span>{story.no} · {story.group.split(" · ").slice(1).join(" · ")}</span><h3>{story.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3><p>{story.summary}</p><b>＋</b></button>)}
        </div>
      </section>

      <section className="school-lab">
        <header className="school-lab-head">
          <p>Challenges inside school · 2021—2023</p>
          <h2>학교 안에서<br /><em>바꿔 본 것들.</em></h2>
          <p className="school-lab-lead">새로운 도구를 쓰는 것보다 학교의 오래된 전제를 다시 묻는 일에 집중했습니다.</p>
        </header>
        <div className="challenge-grid">
          {stories.slice(6).map((story, offset) => <article key={story.no}><button className="challenge-open" data-story={offset + 6} onClick={() => setSelectedStory(offset + 6)} aria-label={`${story.title.replace("\n", " ")} 자세히 읽기`}><span className="challenge-meta">{String(offset + 1).padStart(2, "0")} · {story.group.split(" · ").at(-1)}</span><span className="challenge-index" aria-hidden="true">{String(offset + 1).padStart(2, "0")}</span><h3>{story.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3><p>{story.summary}</p><b className="challenge-cta">Read story <i aria-hidden="true">↗</i></b></button></article>)}
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
          <img className="drawer-book-cover" src="https://shopping-phinf.pstatic.net/main_3244493/32444936666.20260722083430.jpg?type=w300" alt="교사가 되기 전에는 몰랐습니다만 책 표지" hidden={selectedProject?.no !== "02"} />
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

      <div className="story-data" hidden>{stories.map((story) => <article data-story-record={story.no} key={story.no}><span data-field="group">{story.group}</span><span data-field="title">{story.title}</span><span data-field="summary">{story.summary}</span><div data-field="sections">{story.sections.map((section) => <section key={section.label}><span>{section.label}</span><h3>{section.title}</h3><p>{section.text}</p></section>)}</div><div data-field="links">{story.links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}</div></article>)}</div>
      <div className={`story-backdrop ${selectedStory !== null ? "open" : ""}`} onClick={() => setSelectedStory(null)} aria-hidden="true" />
      <aside className={`story-reader ${selectedStory !== null ? "open" : ""}`} role="dialog" aria-modal="true" aria-hidden={selectedStory === null} aria-labelledby="story-title">
        <header className="story-reader-bar">
          <div><span>Story reader</span><strong>{activeStory.no} / {String(stories.length).padStart(2, "0")}</strong></div>
          <button className="story-close" onClick={() => setSelectedStory(null)} aria-label="스토리 리더 닫기">Close <span>×</span></button>
        </header>
        <div className="story-reader-content">
          <p className="story-group">{activeStory.group}</p>
          <h2 id="story-title">{activeStory.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
          <p className="story-lede">{activeStory.summary}</p>
          <div className="story-sections">{activeStory.sections.map((section) => <section key={section.label}><span>{section.label}</span><h3>{section.title}</h3><p>{section.text}</p></section>)}</div>
          {activeStory.links.length > 0 && <div className="story-links">{activeStory.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label}<span>↗</span></a>)}</div>}
        </div>
        <nav className="story-nav" aria-label="스토리 이동">
          <button onClick={() => setSelectedStory(((selectedStory ?? 0) - 1 + stories.length) % stories.length)}>← Previous</button>
          <button onClick={() => setSelectedStory(((selectedStory ?? 0) + 1) % stories.length)}>Next →</button>
        </nav>
      </aside>
    </main>
  );
}
