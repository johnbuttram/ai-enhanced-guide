
function copyPrompt(id) {
  const text = document.getElementById(id).textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert('Prompt copied!');
  }).catch(() => {
    alert('Copy failed. Try manually selecting the text.');
  });
}
