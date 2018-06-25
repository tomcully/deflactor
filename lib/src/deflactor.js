var fs = require('fs'),
    path = require('path');

var Deflactor = {
    injectScriptsForBrowser: function (browser) {
        let scripts = fs.readFileSync(path.join(
            __dirname, './injected-scripts/DeflactedXMLHttpRequest.js'), 'utf-8');
        scripts += fs.readFileSync(path.join(
            __dirname, './browser-scripts/DeflactsService.js'), 'utf-8');
        scripts += 'DeflactsService.init();';
    },

    setForBrowser(browser, url, response) {
        const script = "window.DeflactsService.set(\"" + url + "\", \"" + 
            JSON.stringify(response).replace(/\\/gi, "\\\\").replace(/"/gi, "\\\"") + 
            "\");";
        return browser.executeScript(script);
    }
}

exports.Deflactor = Deflactor;