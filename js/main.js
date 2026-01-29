// 메인 JavaScript

// 햄버거 메뉴 토글
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle) {
        // 터치와 클릭 모두 지원 (중복 호출 방지)
        let touchHandled = false;
        
        const toggleMenu = function(e) {
            if (e.type === 'touchstart') {
                touchHandled = true;
                e.preventDefault();
            } else if (e.type === 'click' && touchHandled) {
                // 터치 이벤트가 이미 처리되었으면 클릭 무시
                touchHandled = false;
                return;
            }
            
            navMenu.classList.toggle('active');
            
            // 햄버거 아이콘 애니메이션
            const spans = menuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
            
            // 클릭 이벤트는 정상 처리 후 플래그 리셋
            if (e.type === 'click') {
                touchHandled = false;
            }
        };
        
        menuToggle.addEventListener('touchstart', toggleMenu, { passive: false });
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    // 메뉴 항목 클릭 시 모바일 메뉴 닫기
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        let linkTouchHandled = false;
        
        const closeMenu = function(e) {
            if (e.type === 'touchend') {
                linkTouchHandled = true;
            } else if (e.type === 'click' && linkTouchHandled) {
                linkTouchHandled = false;
                return;
            }
            
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
            
            if (e.type === 'click') {
                linkTouchHandled = false;
            }
        };
        
        link.addEventListener('touchend', closeMenu);
        link.addEventListener('click', closeMenu);
    });
    
    // 긴급 연락처 터치 처리
    const emergencyPhones = document.querySelectorAll('.emergency-contact .phone');
    emergencyPhones.forEach(phone => {
        const phoneNumber = phone.textContent.replace(/[^0-9]/g, '');
        let phoneOriginalOpacity = '1';
        let phoneTouchHandled = false;
        
        const callEmergency = function(e) {
            if (e.type === 'touchend') {
                phoneTouchHandled = true;
                phone.style.opacity = phoneOriginalOpacity;
                window.location.href = 'tel:' + phoneNumber;
            } else if (e.type === 'click' && phoneTouchHandled) {
                phoneTouchHandled = false;
                return;
            } else if (e.type === 'click') {
                window.location.href = 'tel:' + phoneNumber;
            }
        };
        
        phone.style.cursor = 'pointer';
        phone.addEventListener('click', callEmergency);
        phone.addEventListener('touchstart', function(e) {
            phoneOriginalOpacity = phone.style.opacity || '1';
            phone.style.opacity = '0.8';
        }, { passive: true });
        phone.addEventListener('touchend', callEmergency);
        phone.addEventListener('touchcancel', function(e) {
            phone.style.opacity = phoneOriginalOpacity;
        });
    });
    
    // 스크롤 애니메이션
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 카드 애니메이션
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // 부드러운 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// 긴급 연락처 클릭 시 전화 걸기
function callEmergency(number) {
    window.location.href = 'tel:' + number;
}

// 스크롤 시 네비게이션 스타일 변경
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }
});
