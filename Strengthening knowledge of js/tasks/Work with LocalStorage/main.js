// Используя Local Storage, создайте простую записную книгу, где пользователь может добавлять и удалять записи.
localStorage.setItem('test','some info in localStorage')
let h1 = document.querySelector('h1')
h1.textContent = localStorage.getItem('test')