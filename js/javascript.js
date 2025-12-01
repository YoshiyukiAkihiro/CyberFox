//---------スライド-------------------------------------

// スライドの画像一覧
const sliderData = [
    { src: 'images/slide1.jpg', alt:'' }
]

const sliderContent = document.querySelector('.slider-content');

// スライドを１つ戻す関数
function showPrevSlide() {
    if (currentIndex === 0) {
        currentIndex = totalSlide - 1 
    } else {
        currentIndex--;
    }
    updateSliderPosition();
}

// スランドを１つ進める関数
function showNextSlide() {
    if (currentIndex === totalSlide - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSliderPosition();
}

// スライドのDOMを生成して、HTMLに挿入
funciton createSlides() {
    const fragment = document.createDocumentFragment();

    sliderData.forEach(data => {
        const listItem = document.createElement('li');

        
    })

    }
}