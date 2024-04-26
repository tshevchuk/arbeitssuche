
console.log('stepstone_jobs_search.js')

let jobTitlePatterns = [
    /\bArchitect\b/g,
    /\bArchitekt\b/g,
    /\bSoftwarearchitekt\b/g,
    /\bSystemarchitekt\b/g,
    /^Senior\s/g,
    /^Sr\.\s/g,
    /\bAdministrator\b/g,
    /\bSystemadministrator\b/g
];


setInterval(() => {
    const xingPostingSaved = document.querySelectorAll('article[data-at=job-item]')

    xingPostingSaved.forEach((item) => {
        const jobPostingTitle = item.querySelector('a[data-testid="job-item-title"] > div > div > div').textContent

        for (const index in jobTitlePatterns) {
            if (jobPostingTitle.match(jobTitlePatterns[index])) {
                item.style.display = "none";
                break;
            }
        }

    });
}, 3000);
