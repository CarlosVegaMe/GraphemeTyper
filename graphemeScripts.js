jQuery.extend({
  highlight: function(node, re, nodeName, className) {
    if (node.nodeType === 3) {
      var match = node.data.match(re);
      if (match) {
        var highlight = document.createElement(nodeName || 'span');
        highlight.className = className || 'highlight';
        var wordNode = node.splitText(match.index);
        wordNode.splitText(match[0].length);
        var wordClone = wordNode.cloneNode(true);
        highlight.appendChild(wordClone);
        wordNode.parentNode.replaceChild(highlight, wordNode);
        return 1; //skip added node in parent
      }
    } else if ((node.nodeType === 1 && node.childNodes) && // only element nodes that have children
      !/(script|style)/i.test(node.tagName) && // ignore script and style nodes
      !(node.tagName === nodeName.toUpperCase() && node.className === className)) { // skip if already highlighted
      for (var i = 0; i < node.childNodes.length; i++) {
        i += jQuery.highlight(node.childNodes[i], re, nodeName, className);
      }
    }
    return 0;
  }
});
jQuery.fn.unhighlight = function(options) {
  var settings = {
    className: 'highlight',
    element: 'span'
  };
  jQuery.extend(settings, options);

  return this.find(settings.element + "." + settings.className).each(function() {
    var parent = this.parentNode;
    parent.replaceChild(this.firstChild, this);
    parent.normalize();
  }).end();
};

jQuery.fn.highlight = function(words, options) {
  var settings = {
    className: 'highlight',
    element: 'span',
    caseSensitive: false,
    wordsOnly: false
  };
  jQuery.extend(settings, options);

  if (words.constructor === String) {
    words = [words];
  }
  words = jQuery.grep(words, function(word, i) {
    return word != '';
  });
  words = jQuery.map(words, function(word, i) {
    return word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  });
  if (words.length == 0) {
    return this;
  }
  var flag = settings.caseSensitive ? "" : "i";
  var pattern = "(" + words.join("|") + ")";
  if (settings.wordsOnly) {
    pattern = "\\b" + pattern + "\\b";
  }
  var re = new RegExp(pattern, flag);

  return this.each(function() {
    jQuery.highlight(this, re, settings.element, settings.className);
  });
};


runColors();

function runColors(){
$("color").highlight("a", {
  "element": "span",
  "className": "a",
  caseSensitive: true,
});
$("color").highlight("b", {
  "element": "span",
  "className": "b",
  caseSensitive: true,
});
$("color").highlight("c", {
  "element": "span",
  "className": "c",
  caseSensitive: true,
});
$("color").highlight("d", {
  "element": "span",
  "className": "d",
  caseSensitive: true,
});
$("color").highlight("e", {
  "element": "span",
  "className": "e",
  caseSensitive: true,
});
$("color").highlight("f", {
  "element": "span",
  "className": "f",
  caseSensitive: true,
});
$("color").highlight("g", {
  "element": "span",
  "className": "g",
  caseSensitive: true,
});
$("color").highlight("h", {
  "element": "span",
  "className": "h",
  caseSensitive: true,
});
$("color").highlight("i", {
  "element": "span",
  "className": "i",
  caseSensitive: true,
});
$("color").highlight("j", {
  "element": "span",
  "className": "j",
  caseSensitive: true,
});
$("color").highlight("k", {
  "element": "span",
  "className": "k",
  caseSensitive: true,
});
$("color").highlight("l", {
  "element": "span",
  "className": "l",
  caseSensitive: true,
});
$("color").highlight("m", {
  "element": "span",
  "className": "m",
  caseSensitive: true,
});
$("color").highlight("n", {
  "element": "span",
  "className": "n",
  caseSensitive: true,
});
$("color").highlight("o", {
  "element": "span",
  "className": "o",
  caseSensitive: true,
});
$("color").highlight("p", {
  "element": "span",
  "className": "p",
  caseSensitive: true,
});
$("color").highlight("q", {
  "element": "span",
  "className": "q",
  caseSensitive: true,
});
$("color").highlight("r", {
  "element": "span",
  "className": "r",
  caseSensitive: true,
});
$("color").highlight("s", {
  "element": "span",
  "className": "s",
  caseSensitive: true,
});
$("color").highlight("t", {
  "element": "span",
  "className": "t",
  caseSensitive: true,
});
$("color").highlight("u", {
  "element": "span",
  "className": "u",
  caseSensitive: true,
});
$("color").highlight("v", {
  "element": "span",
  "className": "v",
  caseSensitive: true,
});
$("color").highlight("w", {
  "element": "span",
  "className": "w",
  caseSensitive: true,
});
$("color").highlight("x", {
  "element": "span",
  "className": "x",
  caseSensitive: true,
});
$("color").highlight("y", {
  "element": "span",
  "className": "y",
  caseSensitive: true,
});
$("color").highlight("z", {
  "element": "span",
  "className": "z",
  caseSensitive: true,
});
$("color").highlight("A", {
  "element": "span",
  "className": "A",
  caseSensitive: true,
});
$("color").highlight("B", {
  "element": "span",
  "className": "B",
  caseSensitive: true,
});
$("color").highlight("C", {
  "element": "span",
  "className": "C",
  caseSensitive: true,
});
$("color").highlight("D", {
  "element": "span",
  "className": "D",
  caseSensitive: true,
});
$("color").highlight("E", {
  "element": "span",
  "className": "E",
  caseSensitive: true,
});
$("color").highlight("F", {
  "element": "span",
  "className": "F",
  caseSensitive: true,
});
$("color").highlight("G", {
  "element": "span",
  "className": "G",
  caseSensitive: true,
});
$("color").highlight("H", {
  "element": "span",
  "className": "H",
  caseSensitive: true,
});
$("color").highlight("I", {
  "element": "span",
  "className": "I",
  caseSensitive: true,
});
$("color").highlight("J", {
  "element": "span",
  "className": "J",
  caseSensitive: true,
});
$("color").highlight("K", {
  "element": "span",
  "className": "K",
  caseSensitive: true,
});
$("color").highlight("L", {
  "element": "span",
  "className": "L",
  caseSensitive: true,
});
$("color").highlight("M", {
  "element": "span",
  "className": "M",
  caseSensitive: true,
});
$("color").highlight("N", {
  "element": "span",
  "className": "N",
  caseSensitive: true,
});
$("color").highlight("O", {
  "element": "span",
  "className": "O",
  caseSensitive: true,
});
$("color").highlight("P", {
  "element": "span",
  "className": "P",
  caseSensitive: true,
});
$("color").highlight("Q", {
  "element": "span",
  "className": "Q",
  caseSensitive: true,
});
$("color").highlight("R", {
  "element": "span",
  "className": "R",
  caseSensitive: true,
});
$("color").highlight("S", {
  "element": "span",
  "className": "S",
  caseSensitive: true,
});
$("color").highlight("T", {
  "element": "span",
  "className": "T",
  caseSensitive: true,
});
$("color").highlight("U", {
  "element": "span",
  "className": "U",
  caseSensitive: true,
});
$("color").highlight("V", {
  "element": "span",
  "className": "V",
  caseSensitive: true,
});
$("color").highlight("W", {
  "element": "span",
  "className": "W",
  caseSensitive: true,
});
$("color").highlight("X", {
  "element": "span",
  "className": "X",
  caseSensitive: true,
});
$("color").highlight("Y", {
  "element": "span",
  "className": "Y",
  caseSensitive: true,
});
$("color").highlight("Z", {
  "element": "span",
  "className": "Z",
  caseSensitive: true,
});
$("color").highlight("1", {
  "element": "span",
  "className": "_1",
  caseSensitive: true,
});
$("color").highlight("2", {
  "element": "span",
  "className": "_2",
  caseSensitive: true,
});
$("color").highlight("3", {
  "element": "span",
  "className": "_3",
  caseSensitive: true,
});
$("color").highlight("4", {
  "element": "span",
  "className": "_4",
  caseSensitive: true,
});
$("color").highlight("5", {
  "element": "span",
  "className": "_5",
  caseSensitive: true,
});
$("color").highlight("6", {
  "element": "span",
  "className": "_6",
  caseSensitive: true,
});
$("color").highlight("7", {
  "element": "span",
  "className": "_7",
  caseSensitive: true,
});
$("color").highlight("8", {
  "element": "span",
  "className": "_8",
  caseSensitive: true,
});
$("color").highlight("9", {
  "element": "span",
  "className": "_9",
  caseSensitive: true,
});
$("color").highlight("0", {
  "element": "span",
  "className": "_0",
  caseSensitive: true,
});

}
