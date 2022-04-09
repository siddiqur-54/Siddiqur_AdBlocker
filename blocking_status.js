chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("Going to block = :", details.url)
        return {cancel: true}
    },
    {urls: blocked_sites},
    ["blocking..."]
)
