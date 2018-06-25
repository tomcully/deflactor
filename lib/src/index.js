import { Deflactor } from './deflactor';

exports.OnPageLoad = function () {
    return Deflactor.init(browser);
}

exports.Clear = function () {
    return Deflactor.clear();
}

exports.Deflactor = Deflactor ;
