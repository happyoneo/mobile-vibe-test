// 예약 시스템 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    const successMessage = document.getElementById('successMessage');
    const submitButton = bookingForm ? bookingForm.querySelector('.submit-button') : null;
    
    
    if (bookingForm) {
        // 오늘 날짜를 최소 날짜로 설정
        const dateInput = bookingForm.querySelector('input[name="date"]');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }
        
        // 폼 제출 처리
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 폼 데이터 수집 및 sanitize
            const formData = new FormData(bookingForm);
            const bookingData = {};
            
            formData.forEach((value, key) => {
                // XSS 방지를 위한 기본 sanitization
                const sanitizedValue = String(value)
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#x27;')
                    .replace(/\//g, '&#x2F;');
                bookingData[key] = sanitizedValue;
            });
            
            // 실제 애플리케이션에서는 여기서 서버에 데이터를 전송
            console.log('예약 정보:', bookingData);
            
            // 로컬 스토리지에 저장 (데모용)
            const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
            bookingData.id = Date.now();
            bookingData.status = 'pending';
            bookings.push(bookingData);
            localStorage.setItem('bookings', JSON.stringify(bookings));
            
            // 폼 숨기기 및 성공 메시지 표시
            bookingForm.style.display = 'none';
            successMessage.classList.add('show');
            
            // 페이지 상단으로 스크롤
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // 3초 후 폼 초기화 (선택사항)
            setTimeout(() => {
                bookingForm.reset();
                // bookingForm.style.display = 'block';
                // successMessage.classList.remove('show');
            }, 3000);
        });
        
        // 전화번호 자동 포맷팅
        const phoneInput = bookingForm.querySelector('input[name="phone"]');
        if (phoneInput) {
            phoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 3 && value.length <= 7) {
                    value = value.replace(/(\d{3})(\d{1,4})/, '$1-$2');
                } else if (value.length > 7) {
                    value = value.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
                }
                e.target.value = value;
            });
        }
        
        // 입력 필드 유효성 검사 피드백
        const inputs = bookingForm.querySelectorAll('input[required], select[required], textarea[required]');
        inputs.forEach(input => {
            input.addEventListener('invalid', function(e) {
                e.preventDefault();
                input.style.borderColor = '#FF6B6B';
            });
            
            input.addEventListener('input', function() {
                if (input.checkValidity()) {
                    input.style.borderColor = '#90EE90';
                } else {
                    input.style.borderColor = '#E0E0E0';
                }
            });
        });
    }
});

// 예약 현황 확인 함수 (추가 기능)
function checkBookingStatus() {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    return bookings;
}

// 예약 취소 함수 (추가 기능)
function cancelBooking(bookingId) {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const updatedBookings = bookings.filter(booking => booking.id !== bookingId);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    return true;
}
