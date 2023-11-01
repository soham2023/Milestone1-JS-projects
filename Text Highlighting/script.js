const target = document.getElementById("target");

const words = target.textContent.split(" ");
const newWords = [];

words.forEach(word => {
    if (word.length > 8) {
        const span = document.createElement("span");
        span.textContent = word;
        span.style.backgroundColor = "yellow";
        newWords.push(span.outerHTML);
    } else {
        newWords.push(word);
    }
});

target.innerHTML = newWords.join(" ");

