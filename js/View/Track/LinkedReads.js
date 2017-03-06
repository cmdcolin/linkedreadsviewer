define([
    'dojo/_base/declare',
    'dojo/_base/array',
    'dojo/_base/lang',
    'dojo/request',
    'dijit/Dialog',
    'JBrowse/View/Track/Alignments2',
    'JBrowse/Util'
],
function (
    declare,
    array,
    lang,
    request,
    Dialog,
    Alignments2,
    Util
) {
    return declare(Alignments2, {
        constructor: function () {
            this.barcodeMap = {};
            this.barcodeMax = 0;
        },
        _getLayout: function () {
            var thisB = this;
            var layout = this.inherited(arguments);
            return declare.safeMixin(layout, {
                addRect: function (id, left, right, height, data) {
                    var bc = data.get('BX');
                    if (!thisB.barcodeMap[bc]) {
                        thisB.barcodeMax += 10;
                        thisB.barcodeMap[bc] = thisB.barcodeMax;
                    }
                    var y = thisB.barcodeMap[bc];
                    var pLeft   = Math.floor(left   / this.pitchX);
                    var pRight  = Math.floor(right  / this.pitchX);
                    var pHeight = Math.ceil(height / this.pitchY);

                    var midX = Math.floor((pLeft + pRight) / 2);
                    this.pTotalHeight = thisB.config.maxHeight;

                    var rectangle = {
                        id: id,
                        l: pLeft,
                        r: pRight,
                        mX: midX,
                        h: pHeight,
                        top: Math.floor(y / this.pitchY)
                    };
                    if (data) {
                        rectangle.data = data;
                    }

                    this._addRectToBitmap(rectangle, data);
                    this.rectangles[id] = rectangle;
                    return y;
                }
            });
        }
    });
});
