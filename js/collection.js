document.addEventListener('DOMContentLoaded', () => {

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
