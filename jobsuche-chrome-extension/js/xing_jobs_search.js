console.log('xing_jobs_search.js')


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


function hideJobsByJobTitle() {
    setTimeout(() => {
        const xingPostingSaved = document.querySelectorAll('article')
    
        xingPostingSaved.forEach((item) => {
            const jobPostingTitle = item.querySelector('h3[data-cy="job-teaser-list-title"]').textContent
    
            for (const index in jobTitlePatterns) {
                if (jobPostingTitle.match(jobTitlePatterns[index])) {
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