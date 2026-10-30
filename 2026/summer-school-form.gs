/**
 * APPI Summer School on Process Intelligence — Registration form generator
 * ------------------------------------------------------------------------
 * 사용법:
 *  1) https://script.google.com  접속 → "새 프로젝트"
 *  2) 이 파일 내용을 전부 붙여넣기
 *  3) 상단에서 함수 createSummerSchoolForm 선택 후 ▶ 실행
 *  4) 권한 승인 (본인 Google 계정)
 *  5) 실행 로그(보기 → 로그)에 뜨는 편집/응답 URL 확인
 */
function createSummerSchoolForm() {
  var form = FormApp.create('프로세스 인텔리전스 서머스쿨_참가 신청 (APPI Summer School on Process Intelligence _Registration)');

  form.setDescription(
    '아시아·태평양 프로세스 인텔리전스(APPI) 서머스쿨은 프로세스 마이닝·데이터 사이언스·AI가 만나는 지점을 탐구하는 이 지역 최고의 학습의 장입니다. 프로세스 마이닝을 창시한 세계적 석학 Wil van der Aalst 교수를 비롯한 학계·산업 전문가들이 이틀간 집중 강의와 실습(hands-on)을 진행합니다.\n\n' +
    '(The Asia-Pacific Process Intelligence (APPI) Summer School is the region\'s premier forum for exploring the intersection of process mining, data science, and AI. Over two days, a world-class faculty — including Prof. Wil van der Aalst, the founder of process mining — delivers intensive lectures and hands-on sessions.)\n\n' +
    '📌 서머스쿨 | Summer School\n' +
    '날짜: 2026년 8월 27일(목) ~ 28일(금)\n' +
    '장소: 포스코국제관 대회의실 (1층), 포항 POSTECH\n' +
    'Date: Thursday–Friday, 27–28 August 2026\n' +
    'Venue: Large Meeting Room (1F), POSCO International Center, POSTECH, Pohang\n\n' +
    '📌 신청 기간 : 2026년 7월 24일(금) ~ 2026년 8월 23일(일)\n' +
    '      Registration period: Friday, 24 July 2026 – Sunday, 23 August 2026\n\n' +
    '📌 문의사항 (Inquiries)\n' +
    'ASPAI 2026 이지언(Jieon Lee) | Tel: 054-279-2863 | E-mail: eon7777@postech.ac.kr'
  );

  // 0. 참가자 구분
  form.addMultipleChoiceItem()
    .setTitle('0. 참가자 구분\n(Participant category)')
    .setChoiceValues([
      '학부생 / Undergraduate student',
      '대학원생 / Graduate student',
      '연구자 / Researcher',
      '산업 실무자 / Industry practitioner',
      '기타 / Other'
    ])
    .setRequired(true);

  // 1. 성명
  form.addTextItem()
    .setTitle('1. 성명\n(Full name)')
    .setRequired(true);

  // 2. 휴대전화
  form.addTextItem()
    .setTitle('2. 휴대전화 번호 (형식: 010-1234-5678)\nMobile phone number (format: 010-1234-5678)')
    .setRequired(true);

  // 3. 이메일
  form.addTextItem()
    .setTitle('3. 이메일 주소\n(E-mail address)')
    .setRequired(true);

  // 4. 소속
  form.addTextItem()
    .setTitle('4. 소속 (현재 소속된 대학·학과 또는 직장을 작성해 주세요.)\nAffiliation (please enter your university & department, or organization)')
    .setRequired(true);

  // 5. 직위/직책 또는 학년·전공
  form.addTextItem()
    .setTitle('5. 직위/직책 또는 학년·전공\n(Position / Job title, or year & major)')
    .setRequired(true);

  // 6. 관심사/질문
  form.addParagraphTextItem()
    .setTitle('6. 강의 내용 관련, 관심 있으시거나 궁금하신 내용을 미리 알려주세요.\n(Please share in advance any topics you are interested in or questions you have about the program.)')
    .setRequired(false);

  // 7. 개인정보 동의
  form.addCheckboxItem()
    .setTitle('7. 개인정보 활용 동의\n수집한 개인정보는 해당 행사 참여 인원 현황 파악에만 쓰이며, 다른 목적으로 사용하지 않습니다. 개인정보는 행사 후 즉시 파기합니다.\n(The personal information collected will be used solely to manage attendance for this event and will not be used for any other purpose. All personal information will be destroyed immediately after the event.)')
    .setChoiceValues(['동의합니다. / I agree.'])
    .setRequired(true);

  Logger.log('편집 URL (Edit):  ' + form.getEditUrl());
  Logger.log('응답 URL (Live):  ' + form.getPublishedUrl());
}
