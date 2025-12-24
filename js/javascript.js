//---------ローディング画面-----------------------------------------------
window.addEventListener("load", () => {
    const loader = document.querySelector('#loading');
    
    setTimeout(() => {
        loader.classList.add('loaded')
    }, 800);
});

// --------スクロールフェードイン---------------------------------------------
const options = {
    root: null,
    rootMargin: "0px 0px -20% 0px",
    threshold: 0
}

const animateFade = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(animateFade, options);

const fadeElements = document.querySelectorAll('.fade-up');

fadeElements.forEach((el) => {
    observer.observe(el);
});


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

// ハンバーガーメニューとボタンを取得
const slideMenu = document.getElementById('slide-menu');
const menuBtn = document.getElementById('menu-btn');

// イベントリスナー(クリックされた時、クラスを付けたり、消したりする)

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');

    slideMenu.classList.toggle('active');
});

// テーマ切り替え機能
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeBtn.querySelector('i');

themeBtn.addEventListener('click', () => {
    // bodyに .light-theme クラスをトグル（あれば消す、なければ付ける）
    body.classList.toggle('light-theme');

    // アイコンの切り替え（太陽 ⇔ 月）
    if (body.classList.contains('light-theme')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon'); // ライトモードなら「月」アイコンを表示
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun'); // ダークモードなら「太陽」アイコンを表示
    }
});