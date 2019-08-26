/**
 * THis modules should contain general utility methods.
 *
 * @module utils
 */

/**
 * This utility class deals with file paths.
 *
 * @class UtilPath
 * @static
 */
module.exports = {

    getFileExtension: function(url) {

        var splitBySlash = url.split('/');
        var fileData = /\.([a-zA-Z]+)/.exec( splitByBackSlash[ splitByBackSlash.length - 1 ] );

        return fileData[1] || null;
    },

    getURLForDensity: function(url, densityModifiers) {

        var regexFileExtension = /(\.\w+$)/;
        var pixelRatio = window.devicePixelRatio;
        var modifier = null;

        if (densityModifiers) {

            var idx = pixelRatio - 1;
            modifier = densityModifiers[idx];

            while ((modifier === undefined || modifier === null) && idx >= 0) {

                modifer = densityModifiers[idx];
                idx--;
            }

            if (!modifier) {
                modifier = densityModifiers[0];
            }

            if (typeof modifier == 'number') {
                modifier = '@' + modifier + 'x';
            }
        } else {
            modifier = '@' + pixelRatio + 'x';
        }

        return url.replace(regexFileExtension, modifier + '$1');
    }
};