
console.log('stepstone_jobs_search.js')

let jobTitlePatterns = [
    /\bAdministrator\b/g,
    /\bAllrounder\b/g,
    /\bApplikationsbetreuer\b/g,
    /\bArchitect\b/g,
    /\bArchitekt\b/g,
    /\bBerater\b/g,
    /\bCoordinator\b/g,
    /\bDevOps\b/g,
    /\bLead\b/g,
    /\bProjektmanager\b/g,
    /\bProzessberater\b/g,
    /\bSoftwarearchitekt\b/g,
    /\bSoftwaretester\b/g,
    /\bSystemadministrator\b/g,
    /\bSystemarchitekt\b/g,
    /\bTestautomatisierer\b/g,
    /\bTestautomatisierung\b/g,
    /\bTester\b/g,
    /\bTestmanager\b/g,
    /\bWerkstudent\b/g,
    /\Consultant\b/g,
    /^Senior\s/g,
    /^Sr\.\s/g
];


function hideJobsByJobTitle() {
    setTimeout(() => {
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
}

hideJobsByJobTitle();

navigation.addEventListener('navigate', (event) => {
    hideJobsByJobTitle();
});
