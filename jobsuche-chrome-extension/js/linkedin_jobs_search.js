console.log('linkedin_jobs_search.js')

setInterval(() => {
    const xingPostingSaved = document.querySelectorAll('li.jobs-search-results__list-item')

    xingPostingSaved.forEach((item) => {
        const jobPostingTitle = item.querySelector('a.job-card-list__title strong')?.textContent

        if (!jobPostingTitle) {
            return
        }

        console.log(jobPostingTitle)

        for (const index in jobsucheJobTitlePatterns) {
            if (jobPostingTitle.match(jobsucheJobTitlePatterns[index])) {
                item.style.display = "none";
                break;
            }
        }

    });
}, 500);
