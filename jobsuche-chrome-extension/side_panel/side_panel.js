console.log("side_panel.js")

const contentDiv = document.getElementById('content')
const jobDescriptionDiv = document.getElementById('job-description')


chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {
        console.log(message)
        console.log(sender)

        jobDescriptionDiv.innerText =
            message.message.jobDescription.split(/\./).filter(el => el.toLowerCase().includes('deutsch')).join('\n***********\n').replaceAll('deutsch', '{{{{deutsch}}}}').replaceAll('Deutsch', '{{{{Deutsch}}}}')

       // contentDiv.innerText = JSON.stringify(message.message)

        sendResponse('my response from side panel')
    }
)




/*
const readWriteStorageBtn = document.getElementById('read-write-storage-button')
readWriteStorageBtn.onclick = function() {
    chrome.storage.local.set({ 'my_key': { tag : 0, gesamt : 0 } }).then(() => {
        console.log("Value is set");
      });


    chrome.storage.local.get(["my_key"]).then((result) => {
        console.log("Value is " + result.key);



      });
}

*/