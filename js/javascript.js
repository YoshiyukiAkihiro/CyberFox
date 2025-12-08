//---------スライド------------------------------------------------------------

// DOM要素の取得
const slides = document.querySelectorAll('.slide'); // HTMLの.slideを全部取得
const indicatorContainer = document.querySelector('.slider-indicators'); // スライドのインジケーター
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
// console.log(slides);

let currentIndex = 0; // 現在表示しているスライドの番号

// インジケーターを作成する関数
function createIndicator() {
    slides.forEach((_, index) => {
        const button = document.createElement('button');
        button.dataset.index = index;

        button.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
        indicatorContainer.appendChild(button); // 'button'という文字列ではなく要素を追加
    });
}

// スライドの表示を更新する関数（クラスの付け替え）
function updateSlider() {
    // すべてのスライドから active を外す
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // 現在の slide に active をつける
    slides[currentIndex].classList.add('active');
}

// 次へボタン
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    updateSlider();
});

// 前へボタン
prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateSlider();
});

// 初期化実行
createIndicator();

//---------ハンバーガーメニュー------------------------------------------------------------

