class DeflactsService {
    static init() {
        window.XMLHttpRequestOriginal = window.XMLHttpRequest;
        window.XMLHttpRequest = DeflactedXMLHttpRequest;
        window.DeflactsService = DeflactsService;
        this.deflacts = new Map();
    }

    static clear() {
        this.deflacts = new Map();
    }

    static set(url, response) {
        this.deflacts.set(url, response);
    }

    static get(url) {
        return this.deflacts.get(url);
    }
}