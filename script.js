const words = {
    easy: [
        {
            english: "apple",
            russian: "яблоко",
            audio: "audio/apple.mp3",
            image: "images/apple.png",
            case: "Именительный падеж (Nominative Case)",
            example: "Я ем яблоко. (I am eating an apple.)",
            conjugations: null,
        },
        {
            english: "dog",
            russian: "собака",
            audio: "audio/dog.mp3",
            image: "images/dog.png",
            case: "Именительный падеж (Nominative Case)",
            example: "Собака бежит. (The dog is running.)",
            conjugations: null,
        },
    ],
    medium: [
        {
            english: "library",
            russian: "библиотека",
            audio: "audio/library.mp3",
            image: "images/library.png",
            case: "Именительный падеж (Nominative Case)",
            example: "Я иду в библиотеку. (I am going to the library.)",
            conjugations: null,
        },
        {
            english: "teacher",
            russian: "учитель",
            audio: "audio/teacher.mp3",
            image: "images/teacher.png",
            case: "Именительный падеж (Nominative Case)",
            example: "Учитель объясняет. (The teacher is explaining.)",
            conjugations: null,
        },
    ],
    hard: [
        {
            english: "philosophy",
            russian: "философия",
            audio: "audio/philosophy.mp3",
            image: "images/philosophy.png",
            case: "Именительный падеж (Nominative Case)",
            example: "Философия сложна. (Philosophy is complex.)",
            conjugations: null,
        },
        {
            english: "democracy",
            russian: "демократия",
            audio: "audio/democracy.mp3",
            image: "images/democracy.png",
            case: "Именительный падеж (Nominative Case)",
            example: "Демократия важна. (Democracy is important.)",
            conjugations: null,
        },
    ],
};

function showHome() {
    const content = document.getElementById("content");
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
    const content = document.getElementById("content");
    content.innerHTML = "";
    const tierWords = words[tier];
    tierWords.forEach((word) => {
        const button = document.createElement("div");
        button.classList.add("word-button");
        button.innerHTML = `
            <div class="inner">
                <div class="front">
                    <span>${word.english}</span>
                </div>
                <div class="back">
                    <img src="${word.image}" alt="${word.english}">
                    <span>${word.russian} (${word.english})</span>
                    <p class="details">
                        <strong>Case:</strong> ${word.case}<br>
                        <strong>Example:</strong> ${word.example}
                    </p>
                </div>
            </div>
        `;

        button.addEventListener("click", () => {
            document.querySelectorAll(".word-button").forEach((b) => b.classList.remove("flipped"));
            button.classList.add("flipped");
            playAudio(word.audio);
        });

        content.appendChild(button);
    });
}

function playAudio(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.play();
}

// Show Home page by default
document.addEventListener("DOMContentLoaded", showHome);
