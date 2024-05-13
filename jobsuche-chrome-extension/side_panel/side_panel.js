console.log("side_panel.js")

const contentDiv = document.getElementById('content')
const jobDescriptionDiv = document.getElementById('job-description')


//https://stackoverflow.com/a/50822488/1645319
function htmlToText(html){
    //remove code brakes and tabs
    html = html.replace(/\n/g, "");
    html = html.replace(/\t/g, "");

    //keep html brakes and tabs
    html = html.replace(/<\/td>/g, "\t");
    html = html.replace(/<\/table>/g, "\n");
    html = html.replace(/<\/tr>/g, "\n");
    html = html.replace(/<\/p>/g, "\n");
    html = html.replace(/<\/div>/g, "\n");
    html = html.replace(/<\/li>/g, "\n");
    html = html.replace(/<\/h>/g, "\n");
    html = html.replace(/<br>/g, "\n"); html = html.replace(/<br( )*\/>/g, "\n");

    //parse html into text
    var dom = (new DOMParser()).parseFromString('<!doctype html><body>' + html, 'text/html');
    return dom.body.textContent;
}


chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {
        console.log(message)
        console.log(sender)

        jobDescriptionDiv.innerHTML = '<ul><li>' +
            htmlToText(message.message.jobDescriptionHtml)
                .split(/\.|\n/)
                .filter(el => el.toLowerCase().includes('deutsch'))
                .join('</li><li>')
                .replaceAll('deutsch', '<b>deutsch</b>')
                .replaceAll('Deutsch', '<b>Deutsch</b>')
            + '</li></ul>'

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