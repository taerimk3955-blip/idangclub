document.addEventListener('DOMContentLoaded', () => {

    // 1. 햄버거 메뉴 토글 및 모바일 서브메뉴
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

    // 2. 컬렉션 시즌 탭 전환
    const tabs = document.querySelectorAll('.tab');
    const seasons = document.querySelectorAll('.season');

    function showSeason(key) {
        seasons.forEach(season => {
            if (season.dataset.season === key) {
                season.classList.add('active');
            } else {
                season.classList.remove('active');
            }
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            showSeason(tab.dataset.key);
        });
    });

    // 초기 상태(23 S/S) 적용
    showSeason('SS23');
});