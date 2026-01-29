# 행복한 동물병원 홈페이지 🐾

모바일에서 코파일럿으로 바이브코딩

## 프로젝트 소개

반려동물과 보호자를 위한 따뜻하고 친근한 동물병원 홈페이지입니다.
아픈 반려동물을 돌보는 보호자에게 위안과 희망을 전달하는 것을 목표로 합니다.

## 주요 특징

- 🎨 따뜻하고 부드러운 파스텔 톤 색상 팔레트
- 📱 모바일 퍼스트 반응형 디자인
- ♿ 접근성과 사용자 경험 중심 설계
- 💚 보호자를 위한 정서적 지원 섹션
- ⚡ 빠른 로딩과 부드러운 애니메이션

## 페이지 구성

1. **홈 (index.html)** - 병원 소개 및 주요 서비스
2. **진료 안내 (services.html)** - 진료 과목 및 건강검진 프로그램
3. **의료진 소개 (team.html)** - 전문 수의사 프로필
4. **예약 시스템 (booking.html)** - 온라인 진료 예약
5. **건강 정보 (health-info.html)** - 반려동물 돌봄 가이드
6. **갤러리 (gallery.html)** - 병원 시설 및 후기
7. **오시는 길 (contact.html)** - 위치 및 교통 정보

## 기술 스택

- HTML5
- CSS3 (반응형 디자인, 그라데이션, 애니메이션)
- JavaScript (ES6+)
- Google Fonts (Noto Sans KR)

## 파일 구조

```
/
├── index.html              # 메인 페이지
├── css/
│   └── style.css          # 전역 스타일시트
├── js/
│   ├── main.js            # 메인 JavaScript
│   └── booking.js         # 예약 시스템
├── pages/
│   ├── services.html      # 진료 안내
│   ├── team.html          # 의료진 소개
│   ├── booking.html       # 예약하기
│   ├── health-info.html   # 건강 정보
│   ├── gallery.html       # 갤러리
│   └── contact.html       # 오시는 길
├── images/                # 이미지 파일 (아이콘, 사진 등)
└── README.md             # 프로젝트 문서
```

## 설치 및 실행

1. 저장소 클론:
```bash
git clone https://github.com/happyoneo/mobile-vibe-test.git
cd mobile-vibe-test
```

2. 웹 브라우저로 index.html 파일 열기

또는 로컬 서버 실행:
```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server
```

3. 브라우저에서 `http://localhost:8000` 접속

## 주요 기능

### 1. 반응형 네비게이션
- 데스크톱: 가로 메뉴
- 모바일: 햄버거 메뉴

### 2. 온라인 예약 시스템
- 폼 유효성 검사
- 자동 전화번호 포맷팅
- 로컬 스토리지 저장
- 예약 확인 메시지

### 3. 건강 정보 섹션
- 계절별 주의사항
- 응급처치 가이드
- FAQ (아코디언 UI)

### 4. 감성적 디자인 요소
- 부드러운 그라데이션
- 둥근 모서리와 그림자
- 귀여운 이모지 아이콘
- 페이드 인 애니메이션

## 색상 팔레트

- Primary (하늘색): #87CEEB
- Secondary (연한 녹색): #98D8C8
- Accent (크림색): #F7DC6F
- Warm Pink: #FFB6C1
- Background: #FFF9F0

## 브라우저 호환성

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)
- 모바일 브라우저 지원

## 향후 개발 계획

- [ ] 실제 지도 API 통합 (Google Maps / Kakao Map)
- [ ] 백엔드 연동 (예약 시스템)
- [ ] 실제 이미지 추가
- [ ] 다국어 지원
- [ ] SEO 최적화
- [ ] PWA 지원

## 라이선스

© 2026 행복한 동물병원. All rights reserved.

## 문의

- 📧 Email: info@happyvet.com
- 📞 Phone: 02-1234-5678
- 📍 Address: 서울특별시 강남구 행복로 123
