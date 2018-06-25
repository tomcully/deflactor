class DeflactedXMLHttpRequest extends XMLHttpRequest {
    constructor() {
        super();
        this.hash = Math.random() * 15000;
        this.deflactedResponse = null;
    }

    open(method, url, async, user, password) {
        if (async === undefined) {
            async = true;
        }

        super.open(method, url, async, user, password);

        this.deflactedResponse = window.DeflactsService.get(method, url);
    }

    send(data) {
        if (!this.deflactedResponse) {
            super.send(data);
            return;
        }

        this.readyState = this.LOADING;
        if (this.onreadystatechange) {
            this.onreadystatechange();
        }

        this.responseText = this.deflactedResponse.data;
        this.response = this.deflactedResponse.data;
        this.status = this.deflactedResponse.status;

        this.readyState = this.DONE;
        if (this.onreadystatechange) {
            this.onreadystatechange();
        }

        if (this.onload) {
            this.onload();
        }

        if (this.onloadend) {
            this.onloadend();
        }

        this.dispatchEvent(new Event('load'));
    }

    getStatus() {
        return typeof this._status === 'number' ? this._status : super.status;
    }

    getResponse() {
        return this._response || super.response;
    }

    getResponseText() {
        return this._responseText || super.responseText;
    }

    getReadyState() {
        return this._readyState|| super.readyState;
    }
}

Object.defineProperty(DeflactedXMLHttpRequest.prototype, 'status', {
    set:function(value){
        this._status = value;
    }, 
    get: function(){
        return this.getStatus()
    }
});

Object.defineProperty(DeflactedXMLHttpRequest.prototype, 'response', {
    set:function(value){
        this._response = value;
    }, 
    get: function(){
        return this.getResponse()
    }
});

Object.defineProperty(DeflactedXMLHttpRequest.prototype, 'responseText', {
    set:function(value){
        this._responseText = value;
    }, 
    get: function(){
        return this.getResponseText()
    }
});

Object.defineProperty(DeflactedXMLHttpRequest.prototype, 'readyState', {
    set:function(value){
        this._readyState = value;
    }, 
    get: function(){
        return this.getReadyState()
    }
});