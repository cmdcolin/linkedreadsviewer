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
                    },
                    color_fwd_strand_not_proper: '#ECC8C8',
                    color_rev_strand_not_proper: '#BEBED8',
                    color_fwd_strand: '#EC8B8B',
                    color_rev_strand: '#8F8FD8',
                    color_fwd_missing_mate: '#D11919',
                    color_rev_missing_mate: '#1919D1',
                    color_fwd_diff_chr: '#000000',
                    color_rev_diff_chr: '#969696',
                    color_nostrand: '#999999',
                    border_color: null,

                    strandArrow: false,

                    height: 7,
                    marginBottom: 1,
                    showMismatches: true,
                    mismatchFont: 'bold 10px Courier New,monospace'
                }
            });
        }
    });
});
