document.addEventListener('DOMContentLoaded', () => {

    // 1. 햄버거 메뉴 토글 및 모바일 서브메뉴 아코디언
    const btnMenu = document.getElementById('btnMenu');
    const gnb = document.getElementById('gnb');
    const menuLinks = document.querySelectorAll('.menu_link');

    if (btnMenu && gnb) {
        btnMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            btnMenu.classList.toggle('active');
            gnb.classList.toggle('active');
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault(); 
                
                const parentLi = this.parentElement;
                const isActive = parentLi.classList.contains('active');

                document.querySelectorAll('.main_menu > li').forEach(li => {
                    li.classList.remove('active');
                });

                if (!isActive) {
                    parentLi.classList.add('active');
                }
            }
        });
    });

    // 2. Best Item 꺽쇠(<, >) Transform 기반 강제 슬라이더
    const bestWrap = document.getElementById('bestWrap');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (bestWrap && prevBtn && nextBtn) {
        let currentIndex = 0; // 현재 슬라이드 위치 index

        // 카드 및 트랙 초기 스타일 설정
        const items = bestWrap.querySelectorAll('.best_item');
        bestWrap.style.transition = 'transform 0.4s ease-in-out';

        // 이동할 카운트 계산
        const getMoveDistance = () => {
            const firstItem = items[0];
            if (!firstItem) return 300;

            const style = window.getComputedStyle(bestWrap);
            const gap = parseFloat(style.gap) || 30;
            return firstItem.offsetWidth + gap;
        };

        // 슬라이더 이동 실행 함수
        const updateSlide = () => {
            const distance = getMoveDistance();
            bestWrap.style.transform = `translateX(-${currentIndex * distance}px)`;
        };

        // 다음(>) 버튼
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const maxIndex = items.length - 1;

            if (currentIndex < maxIndex) {
                currentIndex++;
            } else {
                currentIndex = 0; // 끝에 도달하면 처음으로 돌아감
            }
            updateSlide();
        });

        // 이전(<) 버튼
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const maxIndex = items.length - 1;

            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = maxIndex; // 처음에 누르면 맨 끝으로 이동
            }
            updateSlide();
        });

        // 창 크기 변경 시 슬라이더 위치 재계산
        window.addEventListener('resize', () => {
            updateSlide();
        });
    }

    // 3. 배경 하트 & 스파클 애니메이션 (모바일 제외)
    const mainVisual = document.querySelector('.main_visual');

    if (mainVisual) {
        setInterval(() => {
            if (window.innerWidth <= 768) return;

            const heart = document.createElement('div');
            heart.innerHTML = '♡';
            heart.classList.add('heart_effect');
            heart.style.left = Math.random() * (window.innerWidth - 40) + 'px';
            heart.style.top = '800px';
            heart.style.fontSize = Math.random() * 25 + 15 + 'px';

            mainVisual.appendChild(heart);
            setTimeout(() => heart.remove(), 4000);
        }, 400);

        setInterval(() => {
            if (window.innerWidth <= 768) return;

            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✧';
            sparkle.classList.add('sparkle_effect');
            sparkle.style.left = Math.random() * (window.innerWidth - 40) + 'px';
            sparkle.style.top = Math.random() * 700 + 'px';
            sparkle.style.fontSize = Math.random() * 20 + 10 + 'px';

            mainVisual.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 2000);
        }, 600);
    }
});