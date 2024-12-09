const button = document.getElementById('messageButton');
const messageDiv = document.getElementById('message');
const messageText = "Hello Ma'am Roan, first of all, I want to express my gratitude because you were our professor in the IT-WS subject during the first semester of our second year in the course I took. I really enjoyed all the lessons you taught us, and I’ve realized that I am capable of pursuing a major in web design because you expanded my perspective. Thank you so much, Ma’am, for the four months you spent teaching us. I appreciate everything you've shared with us. Take care always, Ma’am Roan.";

button.addEventListener('click', function() {
    messageDiv.textContent = '';
    let index = 0;
    messageDiv.style.display = 'block';
    function typeLetter() {
        if (index < messageText.length) {
            messageDiv.textContent += messageText[index];
            index++;
            setTimeout(typeLetter, 50);
        }
    }
    typeLetter();
});
