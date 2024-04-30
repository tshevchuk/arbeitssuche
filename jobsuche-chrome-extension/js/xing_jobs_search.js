console.log('xing_jobs_search.js')


function hideJobsByJobTitle() {
    setTimeout(() => {
        const xingPostingSaved = document.querySelectorAll('article')
    
        xingPostingSaved.forEach((item) => {
            const jobPostingTitle = item.querySelector('h3[data-cy="job-teaser-list-title"]').textContent
    
            for (const index in jobsucheJobTitlePatterns) {
                if (jobPostingTitle.match(jobsucheJobTitlePatterns[index])) {
                    item.style.display = "none";
                    break;
                }
            }
    
        });
    }, 3000);
}

hideJobsByJobTitle();

navigation.addEventListener('navigate', (event) => {
    hideJobsByJobTitle();
});