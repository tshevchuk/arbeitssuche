console.log('xing_jobs_item.js')

// select deutsch words

function processContent() {
    const headerSection = document.querySelector('div[data-testid="job-details-header"]')
    const contentSection = headerSection.parentElement.children[1]
    const jobDescriptionDiv = document.querySelector('div.html-description-template')

    console.log(contentSection)

    console.log(contentSection.innerHTML)


    const jobTitle = document.querySelector('h1[data-testid=job-title]').textContent
    const companyName = document.querySelector('a[data-testid=company-logo-link] p').textContent
    const companyUrl = document.querySelector('a[data-testid=company-logo-link]').getAttribute('href')
    const cityName = document.querySelector('li[data-testid=location-info-icon').textContent
    console.log(jobTitle)
    console.log(companyName)
    console.log(companyUrl)
    console.log(cityName)

    const isHybrid = 
        [... document.querySelectorAll('div[data-testid=static-job-details-header] span[data-xds=Marker]')]
            .filter(it => it.textContent == 'Hybrid')
            .length > 0

    console.log('isHybrid: ' + isHybrid)

    const jobDetails = {
        jobTitle,
        companyName,
        companyUrl,
        cityName,
        isHybrid,
        jobDescription: jobDescriptionDiv.textContent
    };


    chrome.runtime.sendMessage(
        null,
        {'message': jobDetails},
        null,
        response => console.log('response: ' + response)
    )
}

setTimeout(processContent, 3000)
