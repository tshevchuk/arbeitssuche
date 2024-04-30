console.log('stepstone_jobs_search.js')


function hideJobsByJobTitle() {
    setTimeout(() => {
        const xingPostingSaved = document.querySelectorAll('article[data-at=job-item]')

        xingPostingSaved.forEach((item) => {
            const jobPostingTitle = item.querySelector('a[data-testid="job-item-title"] > div > div > div').textContent
    
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
