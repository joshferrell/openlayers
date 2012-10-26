goog.provide('ol.Color');

goog.require('goog.color');



/**
 * @constructor
 * @param {number} r Red, 0 to 255.
 * @param {number} g Green, 0 to 255.
 * @param {number} b Blue, 0 to 255.
 * @param {number} a Alpha, 0 (fully transparent) to 255 (fully opaque).
 */
ol.Color = function(r, g, b, a) {

  /**
   * @type {number}
   */
  this.r = r;

  /**
   * @type {number}
   */
  this.g = g;

  /**
   * @type {number}
   */
  this.b = b;

  /**
   * @type {number}
   */
  this.a = a;

};


/**
 * @param {string} str String.
 * @param {number=} opt_a Alpha.
 * @return {ol.Color} Color.
 */
ol.Color.createFromString = function(str, opt_a) {
  var rgb = goog.color.hexToRgb(goog.color.parse(str).hex);
  var a = opt_a || 255;
  return new ol.Color(rgb[0], rgb[1], rgb[2], a);
};


/**
 * @param {ol.Color} color1 Color 1.
 * @param {ol.Color} color2 Color 2.
 * @return {boolean} Equals.
 */
ol.Color.equals = function(color1, color2) {
  return (color1.r == color2.r &&
          color1.g == color2.g &&
          color1.b == color2.b &&
          color1.a == color2.a);
};
