console.log('xing_jobs_item.js')

// select deutsch words

function processContent() {
    const headerSection = document.querySelector('div[data-testid="job-details-header"]')
    const contentSection = headerSection.parentElement.children[1]

    console.log(contentSection)

    console.log(contentSection.innerHTML)


    
}

setTimeout(processContent, 3000)
