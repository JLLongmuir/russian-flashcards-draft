const words = {
    easy: [
        { english: "apple", russian: "яблоко", audio: "audio/apple.mp3", image: "images/apple.png" },
        { english: "dog", russian: "собака", audio: "audio/dog.mp3", image: "images/dog.png" },
    ],
    medium: [
        { english: "library", russian: "библиотека", audio: "audio/library.mp3", image: "images/library.png" },
        { english: "teacher", russian: "учитель", audio: "audio/teacher.mp3", image: "images/teacher.png" },
    ],
    hard: [
        { english: "philosophy", russian: "философия", audio: "audio/philosophy.mp3", image: "images/philosophy.png" },
        { english: "democracy", russian: "демократия", audio: "audio/democracy.mp3", image: "images/democracy.png" },
    ],
};

function showHome() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <section class="home">
            <div class="intro-box">
                <h2>Добро пожаловать</h2>
                <p>Hello, my name is Jonathan Longmuir. I am coding a website to help me learn Russian better and also practice programming. If you are reading this, Nadyusha, I love you with all my heart.</p>
                <p class="russian-text">
                    Привет, меня зовут Джон Лонгмьюир. Я пишу сайт, чтобы лучше выучить русский язык и попрактиковаться в программировании. Если ты это читаешь, Надюша, я люблю тебя всем сердцем.
                </p>
            </div>
        </section>
    `;
}

function showTier(tier) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const tierWords = words[tier];
    tierWords.forEach(word => {
        const button = document.createElement('div');
        button.classList.add('word-button');
        button.innerHTML = `
            <div class="inner">
                <div class="front">
                    <span>${word.english}</span>
                </div>
                <div class="back">
                    <img src="${word.image}" alt="${word.english}">
                    <span>${word.russian} (${word.english})</span>
                </div>
            </div>
        `;

        button.addEventListener('click', () => {
            const audio = new Audio(word.audio);
            audio.play();
            button.classList.toggle('flipped');
        });

        content.appendChild(button);
    });
}

// Show Home page by default
document.addEventListener('DOMContentLoaded', showHome);
