function postComment() {
    const nameInput = document.getElementById('name-input');
    const commentInput = document.getElementById('comment-input');
    const comments = document.getElementById('comments');

    if (nameInput.value.trim() !== "" && commentInput.value.trim() !== "") {
        const comment = {
            author: nameInput.value,
            text: commentInput.value,
            time: new Date().toLocaleString()
        };

        // Добавляем новый комментарий в localStorage
        let commentsArray = JSON.parse(localStorage.getItem('comments')) || [];
        commentsArray.push(comment);
        localStorage.setItem('comments', JSON.stringify(commentsArray));

        // Создаем и добавляем комментарий на страницу
        addCommentToPage(comment);

        // Очищаем поля ввода
        nameInput.value = '';
        commentInput.value = '';
    } else {
        alert('Please enter both your name and a comment');
    }
}

function addCommentToPage(comment) {
    const comments = document.getElementById('comments');
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';

    const author = document.createElement('strong');
    author.textContent = comment.author;
    commentDiv.appendChild(author);

    const text = document.createElement('p');
    text.textContent = comment.text;
    commentDiv.appendChild(text);

    const time = document.createElement('time');
    time.textContent = comment.time;
    commentDiv.appendChild(time);

    comments.appendChild(commentDiv);
}

function loadComments() {
    const commentsArray = JSON.parse(localStorage.getItem('comments')) || [];
    commentsArray.forEach(comment => addCommentToPage(comment));
}

// Загрузка комментариев при загрузке страницы
document.addEventListener('DOMContentLoaded', loadComments);
