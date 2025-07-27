// Sayfa yüklendiğinde çalışacak kod
document.addEventListener('DOMContentLoaded', function() {

    // HTML'deki memoji id'li resmi seç
    const memoji = document.getElementById('memoji');

    // Resimlerin yollarını değişkenlere ata
    const defaultMemojiSrc = 'assets/memoji-default.png';
    const hoverMemojiSrc = 'assets/memoji-hover.png';

    // Fare resmin üzerine geldiğinde...
    memoji.addEventListener('mouseover', function() {
        // Resmin kaynağını (src) gülen memoji ile değiştir
        memoji.src = hoverMemojiSrc;
    });

    // Fare resmin üzerinden çekildiğinde...
    memoji.addEventListener('mouseout', function() {
        // Resmin kaynağını (src) normal memoji ile değiştir
        memoji.src = defaultMemojiSrc;
    });

});