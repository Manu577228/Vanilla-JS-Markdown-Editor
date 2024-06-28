const markdownInput = document.getElementById('markdown-input');
const markdownPreview = document.getElementById('markdown-preview');

markdownInput.addEventListener('input', () => {
    const markdownText = markdownInput.value;
    markdownPreview.innerHTML = marked(markdownText);
});

// Initial render
markdownPreview.innerHTML = marked(markdownInput.value);
