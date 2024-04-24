
setInterval(() => {
    let xingPostingSaved = document.querySelectorAll('article:has(button[data-testid="bookmark-action-button-filled"])')

    xingPostingSaved.forEach((item) => {
        item.style.display = "none";
      });    
}, 3000);


let jobTitlePatterns = [
  /Architect/g,
  /^Senior\s/g,
  /^Sr\.\s/g,
];


setInterval(() => {
  const xingPostingSaved = document.querySelectorAll('article')

  xingPostingSaved.forEach((item) => {
      const jobPostingTitle = item.querySelector('h3[data-cy="job-teaser-list-title"]').textContent

      jobTitlePatterns.forEach(
        (pattern) => {
          if (jobPostingTitle.match(pattern)) {
            item.style.display = "none";
          }
        }
      ); 
  });    
}, 3000);