console.log('linkedin_jobs_search.js')

function hideJobsByJobTitle() {
    (() => {
        const xingPostingSaved = document.querySelectorAll('li.jobs-search-results__list-item')
    
        xingPostingSaved.forEach((item) => {
            const jobPostingTitle = item.querySelector('a.job-card-list__title strong')?.textContent

            if (!jobPostingTitle) {
                return
            }

            console.log(jobPostingTitle)
    
            for (const index in jobsucheJobTitlePatterns) {
                if (jobPostingTitle.match(jobsucheJobTitlePatterns[index])) {
                    item.style.display = "blank";
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