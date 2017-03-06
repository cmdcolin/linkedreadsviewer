define([
    'dojo/_base/declare',
    'JBrowse/Plugin'
],
function (
   declare,
   JBrowsePlugin
) {
    return declare(JBrowsePlugin, {
        constructor: function (args) {
            var browser = args.browser;
            console.log('LinkedReadsViewer plugin starting');
            browser.registerTrackType({
                label: 'LinkedReadsViewer',
                type: 'LinkedReadsViewer/View/Track/VariantPlotter'
            });
        }
    });
});
