setInterval(() => {
    let xingPostingSaved = document.querySelectorAll('article:has(button[data-testid="bookmark-action-button-filled"])')

    xingPostingSaved.forEach((item) => {
        item.style.display = "none";
      });    
}, 3000);

