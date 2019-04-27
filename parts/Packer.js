/**
 * Rect
 * low-level utility class for basic geometry
 */

// -------------------------- Rect -------------------------- //

function Rect(props) {
  // extend properties from defaults
  for (var prop in Rect.defaults) {
    this[prop] = Rect.defaults[prop];
  }

  for (prop in props) {
    this[prop] = props[prop];
  }
}

Rect.defaults = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};

var proto = Rect.prototype;

/**
 * Determines whether or not this rectangle wholly encloses another rectangle or point.
 * @param {Rect} rect
 * @returns {Boolean}
 **/
proto.contains = function(rect) {
  // points don't have width or height
  var otherWidth = rect.width || 0;
  var otherHeight = rect.height || 0;
  return (
    this.x <= rect.x &&
    this.y <= rect.y &&
    this.x + this.width >= rect.x + otherWidth &&
    this.y + this.height >= rect.y + otherHeight
  );
};

/**
 * Determines whether or not the rectangle intersects with another.
 * @param {Rect} rect
 * @returns {Boolean}
 **/
proto.overlaps = function(rect) {
  var thisRight = this.x + this.width;
  var thisBottom = this.y + this.height;
  var rectRight = rect.x + rect.width;
  var rectBottom = rect.y + rect.height;

  // http://stackoverflow.com/a/306332
  return (
    this.x < rectRight &&
    thisRight > rect.x &&
    this.y < rectBottom &&
    thisBottom > rect.y
  );
};

/**
 * @param {Rect} rect - the overlapping rect
 * @returns {Array} freeRects - rects representing the area around the rect
 **/

proto.getMaximalFreeRects = function(rect) {
  // if no intersection, return false
  if (!this.overlaps(rect)) {
    return false;
  }

  var freeRects = [];
  var freeRect;

  var thisRight = this.x + this.width;
  var thisBottom = this.y + this.height;
  var rectRight = rect.x + rect.width;
  var rectBottom = rect.y + rect.height;

  // top
  if (this.y < rect.y) {
    freeRect = new Rect({
      x: this.x,
      y: this.y,
      width: this.width,
      height: rect.y - this.y
    });
    freeRects.push(freeRect);
  }

  // right
  if (thisRight > rectRight) {
    freeRect = new Rect({
      x: rectRight,
      y: this.y,
      width: thisRight - rectRight,
      height: this.height
    });
    freeRects.push(freeRect);
  }

  // bottom
  if (thisBottom > rectBottom) {
    freeRect = new Rect({
      x: this.x,
      y: rectBottom,
      width: this.width,
      height: thisBottom - rectBottom
    });
    freeRects.push(freeRect);
  }

  // left
  if (this.x < rect.x) {
    freeRect = new Rect({
      x: this.x,
      y: this.y,
      width: rect.x - this.x,
      height: this.height
    });
    freeRects.push(freeRect);
  }

  return freeRects;
};

proto.canFit = function(rect) {
  return this.width >= rect.width && this.height >= rect.height;
};

/**
 * Packer
 * bin-packing algorithm
 */

// -------------------------- Packer -------------------------- //

/**
 * @param {Number} width
 * @param {Number} height
 * @param {String} sortDirection
 *   topLeft for vertical, leftTop for horizontal
 */
function Packer(width, height, sortDirection) {
  this.width = width || 0;
  this.height = height || 0;
  this.sortDirection = sortDirection || "downwardLeftToRight";

  this.reset();
}

var proto = Packer.prototype;

proto.reset = function() {
  this.spaces = [];

  var initialSpace = new Rect({
    x: 0,
    y: 0,
    width: this.width,
    height: this.height
  });

  this.spaces.push(initialSpace);
  // set sorter
  this.sorter = sorters[this.sortDirection] || sorters.downwardLeftToRight;
};

// change x and y of rect to fit with in Packer's available spaces
proto.pack = function(rect) {
  for (var i = 0; i < this.spaces.length; i++) {
    var space = this.spaces[i];
    if (space.canFit(rect)) {
      this.placeInSpace(rect, space);
      break;
    }
  }
};

proto.columnPack = function(rect) {
  for (var i = 0; i < this.spaces.length; i++) {
    var space = this.spaces[i];
    var canFitInSpaceColumn =
      space.x <= rect.x &&
      space.x + space.width >= rect.x + rect.width &&
      space.height >= rect.height - 0.01; // fudge number for rounding error
    if (canFitInSpaceColumn) {
      rect.y = space.y;
      this.placed(rect);
      break;
    }
  }
};

proto.rowPack = function(rect) {
  for (var i = 0; i < this.spaces.length; i++) {
    var space = this.spaces[i];
    var canFitInSpaceRow =
      space.y <= rect.y &&
      space.y + space.height >= rect.y + rect.height &&
      space.width >= rect.width - 0.01; // fudge number for rounding error
    if (canFitInSpaceRow) {
      rect.x = space.x;
      this.placed(rect);
      break;
    }
  }
};

proto.placeInSpace = function(rect, space) {
  // place rect in space
  rect.x = space.x;
  rect.y = space.y;

  this.placed(rect);
};

// update spaces with placed rect
proto.placed = function(rect) {
  // update spaces
  var revisedSpaces = [];
  for (var i = 0; i < this.spaces.length; i++) {
    var space = this.spaces[i];
    var newSpaces = space.getMaximalFreeRects(rect);
    // add either the original space or the new spaces to the revised spaces
    if (newSpaces) {
      revisedSpaces.push.apply(revisedSpaces, newSpaces);
    } else {
      revisedSpaces.push(space);
    }
  }

  this.spaces = revisedSpaces;

  this.mergeSortSpaces();
};

proto.mergeSortSpaces = function() {
  // remove redundant spaces
  Packer.mergeRects(this.spaces);
  this.spaces.sort(this.sorter);
};

// add a space back
proto.addSpace = function(rect) {
  this.spaces.push(rect);
  this.mergeSortSpaces();
};

// -------------------------- utility functions -------------------------- //

/**
 * Remove redundant rectangle from array of rectangles
 * @param {Array} rects: an array of Rects
 * @returns {Array} rects: an array of Rects
 **/
Packer.mergeRects = function(rects) {
  var i = 0;
  var rect = rects[i];

  rectLoop: while (rect) {
    var j = 0;
    var compareRect = rects[i + j];

    while (compareRect) {
      if (compareRect == rect) {
        j++; // next
      } else if (compareRect.contains(rect)) {
        // remove rect
        rects.splice(i, 1);
        rect = rects[i]; // set next rect
        continue rectLoop; // bail on compareLoop
      } else if (rect.contains(compareRect)) {
        // remove compareRect
        rects.splice(i + j, 1);
      } else {
        j++;
      }
      compareRect = rects[i + j]; // set next compareRect
    }
    i++;
    rect = rects[i];
  }

  return rects;
};

// -------------------------- sorters -------------------------- //

// functions for sorting rects in order
var sorters = {
  // top down, then left to right
  downwardLeftToRight: function(a, b) {
    return a.y - b.y || a.x - b.x;
  },
  // left to right, then top down
  rightwardTopToBottom: function(a, b) {
    return a.x - b.x || a.y - b.y;
  }
};

// --------------------------  -------------------------- //

export let Pack = Packer;
