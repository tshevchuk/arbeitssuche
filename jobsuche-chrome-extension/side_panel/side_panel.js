console.log("side_panel.js")

document.querySelector("*").style.backgroundColor="green"

const contentDiv = document.getElementById('content')


chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {
        console.log(message)
        console.log(sender)

        contentDiv.innerHTML = JSON.stringify(message.message)

        sendResponse('my response from side panel')
    }
)


