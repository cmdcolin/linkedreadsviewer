define([
    'dojo/_base/declare',
    'dojo/_base/array',
    'JBrowse/View/FeatureGlyph/Alignment'
],
function (
    declare,
    array,
    AlignmentGlyph
) {
    function hashCode(str) { // java String#hashCode
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return hash;
    }

    function intToRGB(i) {
        var c = (i & 0x00FFFFFF).toString(16).toUpperCase();
        return '#00000'.substring(0, 7 - c.length) + c;
    }


    return declare(AlignmentGlyph, {

        constructor: function () {
            this._drawMismatches = function () {};
        },

        _defaultConfig: function () {
            return this._mergeConfigs(dojo.clone(this.inherited(arguments)), {
                style: {
                    color: function (feature) {
                        return intToRGB(hashCode(feature.get('BX') || 'undef'));
                    }
                }
            });
        }
    });
});
