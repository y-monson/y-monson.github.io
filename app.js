function toggleText(section) {
    let panel = document.getElementById(section);
    let partialText = panel.querySelector('.first-line');
    let fullText = panel.querySelector('.hidden');
    let readMoreBtn = panel.querySelector('.read-more');

    if (fullText.style.display === 'none' || fullText.style.display === '') {
      fullText.style.display = 'block';
      readMoreBtn.innerHTML = 'Read less';
      readMoreBtn.style.color = 'white'; 
    } else {
      partialText.style.display = 'block';
      fullText.style.display = 'none';
      readMoreBtn.innerHTML = 'Read more';
      readMoreBtn.style.color = '';
    }
  }