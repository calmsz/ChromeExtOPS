window.addEventListener('extension:set:server', (event) => {
    console.log(event.detail);
    if (!!window.Config) {
        window.Config.server = event.detail.server;
    } else {
        window.Config = event.detail;
    }
})