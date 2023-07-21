// jquery-2.2.3.min.js

/*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */
! function (a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = a.document,
    e = c.slice,
    f = c.concat,
    g = c.push,
    h = c.indexOf,
    i = {},
    j = i.toString,
    k = i.hasOwnProperty,
    l = {},
    m = "2.2.3",
    n = function (a, b) {
      return new n.fn.init(a, b)
    },
    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (a, b) {
      return b.toUpperCase()
    };
  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function () {
      return e.call(this)
    },
    get: function (a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
    },
    pushStack: function (a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    },
    each: function (a) {
      return n.each(this, a)
    },
    map: function (a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b)
      }))
    },
    slice: function () {
      return this.pushStack(e.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    eq: function (a) {
      var b = this.length,
        c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    },
    end: function () {
      return this.prevObject || this.constructor()
    },
    push: g,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function () {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (a = arguments[h]))
        for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
    return g
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (a) {
      throw new Error(a)
    },
    noop: function () {},
    isFunction: function (a) {
      return "function" === n.type(a)
    },
    isArray: Array.isArray,
    isWindow: function (a) {
      return null != a && a === a.window
    },
    isNumeric: function (a) {
      var b = a && a.toString();
      return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
    },
    isPlainObject: function (a) {
      var b;
      if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
      if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
      for (b in a);
      return void 0 === b || k.call(a, b)
    },
    isEmptyObject: function (a) {
      var b;
      for (b in a) return !1;
      return !0
    },
    type: function (a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
    },
    globalEval: function (a) {
      var b, c = eval;
      a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
    },
    camelCase: function (a) {
      return a.replace(p, "ms-").replace(q, r)
    },
    nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },
    each: function (a, b) {
      var c, d = 0;
      if (s(a)) {
        for (c = a.length; c > d; d++)
          if (b.call(a[d], d, a[d]) === !1) break
      } else
        for (d in a)
          if (b.call(a[d], d, a[d]) === !1) break;
      return a
    },
    trim: function (a) {
      return null == a ? "" : (a + "").replace(o, "")
    },
    makeArray: function (a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
    },
    inArray: function (a, b, c) {
      return null == b ? -1 : h.call(b, a, c)
    },
    merge: function (a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
      return a.length = e, a
    },
    grep: function (a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    },
    map: function (a, b, c) {
      var d, e, g = 0,
        h = [];
      if (s(a))
        for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
      else
        for (g in a) e = b(a[g], g, c), null != e && h.push(e);
      return f.apply([], h)
    },
    guid: 1,
    proxy: function (a, b) {
      var c, d, f;
      return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function () {
        return a.apply(b || this, d.concat(e.call(arguments)))
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
    },
    now: Date.now,
    support: l
  }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase()
  });

  function s(a) {
    var b = !!a && "length" in a && a.length,
      c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }
  var t = function (a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
      v = a.document,
      w = 0,
      x = 0,
      y = ga(),
      z = ga(),
      A = ga(),
      B = function (a, b) {
        return a === b && (l = !0), 0
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++)
          if (a[c] === b) return c;
        return -1
      },
      K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
      O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
      P = new RegExp(L + "+", "g"),
      Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      R = new RegExp("^" + L + "*," + L + "*"),
      S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      U = new RegExp(O),
      V = new RegExp("^" + M + "$"),
      W = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + N),
        PSEUDO: new RegExp("^" + O),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
      },
      X = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Z = /^[^{]+\{\s*\[native \w/,
      $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      _ = /[+~]/,
      aa = /'|\\/g,
      ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      ca = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
      },
      da = function () {
        m()
      };
    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
    } catch (ea) {
      H = {
        apply: E.length ? function (a, b) {
          G.apply(a, I.call(b))
        } : function (a, b) {
          var c = a.length,
            d = 0;
          while (a[c++] = b[d++]);
          a.length = c - 1
        }
      }
    }

    function fa(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
        x = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a)))
          if (f = o[1]) {
            if (9 === x) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d
            } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
          } else {
            if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
          } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
            while (h--) r[h] = l + " " + qa(r[h]);
            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
          }
          if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d
          } catch (y) {} finally {
            k === u && b.removeAttribute("id")
          }
        }
      }
      return i(a.replace(Q, "$1"), b, d, e)
    }

    function ga() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
      }
      return b
    }

    function ha(a) {
      return a[u] = !0, a
    }

    function ia(a) {
      var b = n.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function ja(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b
    }

    function ka(a, b) {
      var c = b && a,
        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c)
        while (c = c.nextSibling)
          if (c === b) return -1;
      return a ? 1 : -1
    }

    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }

    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }

    function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e, f = a([], c.length, b),
            g = f.length;
          while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a
    }
    c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, m = fa.setDocument = function (a) {
      var b, e, g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c ? [c] : []
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          return a.getAttribute("id") === b
        }
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
      } : function (a, b) {
        var c, d = [],
          e = 0,
          f = b.getElementsByTagName(a);
        if ("*" === a) {
          while (c = f[e++]) 1 === c.nodeType && d.push(c);
          return d
        }
        return f
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
      }), ia(function (a) {
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function (a, b) {
        if (b)
          while (b = b.parentNode)
            if (b === a) return !0;
        return !1
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
      } : function (a, b) {
        if (a === b) return l = !0, 0;
        var c, d = 0,
          e = a.parentNode,
          f = b.parentNode,
          g = [a],
          h = [b];
        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return ka(a, b);
        c = a;
        while (c = c.parentNode) g.unshift(c);
        c = b;
        while (c = c.parentNode) h.unshift(c);
        while (g[d] === h[d]) d++;
        return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
      }, n) : n
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b)
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
      } catch (e) {}
      return fa(b, n, null, [a]).length > 0
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b)
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
        f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, fa.uniqueSort = function (a) {
      var b, d = [],
        e = 0,
        f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) b === a[f] && (e = d.push(f));
        while (e--) a.splice(d[e], 1)
      }
      return k = null, a
    }, e = fa.getText = function (a) {
      var b, c = "",
        d = 0,
        f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
        } else if (3 === f || 4 === f) return a.nodeValue
      } else
        while (b = a[d++]) c += e(b);
      return c
    }, d = fa.selectors = {
      cacheLength: 50,
      createPseudo: ha,
      match: W,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        },
        CHILD: function (a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
        },
        PSEUDO: function (a) {
          var b, c = !a[6] && a[2];
          return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function (a) {
          var b = a.replace(ba, ca).toLowerCase();
          return "*" === a ? function () {
            return !0
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        },
        CLASS: function (a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
          })
        },
        ATTR: function (a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
          }
        },
        CHILD: function (a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
            g = "last" !== a.slice(-4),
            h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode
          } : function (b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
              q = b.parentNode,
              r = h && b.nodeName.toLowerCase(),
              s = !i && !h,
              t = !1;
            if (q) {
              if (f) {
                while (p) {
                  m = b;
                  while (m = m[p])
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];
                    break
                  }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                  if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              return t -= e, t === d || t % d === 0 && t / d >= 0
            }
          }
        },
        PSEUDO: function (a, b) {
          var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d, f = e(a, b),
              g = f.length;
            while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
          }) : function (a) {
            return e(a, 0, c)
          }) : e
        }
      },
      pseudos: {
        not: ha(function (a) {
          var b = [],
            c = [],
            d = h(a.replace(Q, "$1"));
          return d[u] ? ha(function (a, b, c, e) {
            var f, g = d(a, null, e, []),
              h = a.length;
            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
          }
        }),
        has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0
          }
        }),
        contains: ha(function (a) {
          return a = a.replace(ba, ca),
            function (b) {
              return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
            }
        }),
        lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
            function (b) {
              var c;
              do
                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
              return !1
            }
        }),
        target: function (b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        },
        root: function (a) {
          return a === o
        },
        focus: function (a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        },
        enabled: function (a) {
          return a.disabled === !1
        },
        disabled: function (a) {
          return a.disabled === !0
        },
        checked: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        },
        selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        },
        empty: function (a) {
          for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType < 6) return !1;
          return !0
        },
        parent: function (a) {
          return !d.pseudos.empty(a)
        },
        header: function (a) {
          return Y.test(a.nodeName)
        },
        input: function (a) {
          return X.test(a.nodeName)
        },
        button: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        },
        text: function (a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        },
        first: na(function () {
          return [0]
        }),
        last: na(function (a, b) {
          return [b - 1]
        }),
        eq: na(function (a, b, c) {
          return [0 > c ? c + b : c]
        }),
        even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);
          return a
        }),
        odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);
          return a
        }),
        lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
          return a
        }),
        gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
          return a
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) d.pseudos[b] = la(b);
    for (b in {
        submit: !0,
        reset: !0
      }) d.pseudos[b] = ma(b);

    function pa() {}
    pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function (a, b) {
      var c, e, f, g, h, i, j, k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(Q, " ")
        }), h = h.slice(c.length));
        for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
          value: c,
          type: g,
          matches: e
        }), h = h.slice(c.length));
        if (!c) break
      }
      return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
    };

    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d
    }

    function ra(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d])
          if (1 === b.nodeType || e) return a(b, c, f)
      } : function (b, c, g) {
        var h, i, j, k = [w, f];
        if (g) {
          while (b = b[d])
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
        } else
          while (b = b[d])
            if (1 === b.nodeType || e) {
              if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
              if (i[d] = k, k[2] = a(b, c, g)) return !0
            }
      }
    }

    function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;
        while (e--)
          if (!a[e](b, c, d)) return !1;
        return !0
      } : a[0]
    }

    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
      return c
    }

    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      return g
    }

    function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j, k, l, m = [],
          n = [],
          o = g.length,
          p = f || ta(b || "*", h.nodeType ? [h] : h, []),
          q = !a || !f && b ? p : ua(p, m, a, h, i),
          r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;
          while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--)(l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i)
            }
            k = r.length;
            while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
      })
    }

    function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
          return a === b
        }, h, !0), l = ra(function (a) {
          return J(b, a) > -1
        }, h, !0), m = [function (a, c, d) {
          var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
          return b = null, e
        }]; f > i; i++)
        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
        else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++)
              if (d.relative[a[e].type]) break;
            return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
          }
          m.push(c)
        } return sa(m)
    }

    function xa(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l, o, q, r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;
          for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
            if (e && l) {
              o = 0, g || l.ownerDocument === n || (m(l), h = !p);
              while (q = a[o++])
                if (q(l, g || n, h)) {
                  i.push(l);
                  break
                } k && (w = y)
            }
            c && ((l = !q && l) && r--, f && t.push(l))
          }
          if (r += s, c && s !== r) {
            o = 0;
            while (q = b[o++]) q(t, u, g, h);
            if (f) {
              if (r > 0)
                while (s--) t[s] || u[s] || (u[s] = F.call(i));
              u = ua(u)
            }
            H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
          }
          return k && (w = y, j = v), t
        };
      return c ? ha(f) : f
    }
    return h = fa.compile = function (a, b) {
      var c, d = [],
        e = [],
        f = A[a + " "];
      if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, xa(e, d)), f.selector = a
      }
      return f
    }, i = fa.select = function (a, b, e, f) {
      var i, j, k, l, m, n = "function" == typeof a && a,
        o = !f && g(a = n.selector || a);
      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length)
        }
        i = W.needsContext.test(a) ? 0 : j.length;
        while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;
          if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
            break
          }
        }
      }
      return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"))
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), ia(function (a) {
      return null == a.getAttribute("disabled")
    }) || ja(K, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), fa
  }(a);
  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a)
        } return d
    },
    v = function (a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c
    },
    w = n.expr.match.needsContext,
    x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    y = /^.[^:#\[\.,]*$/;

  function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c
    });
    if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c
    });
    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a)
    }
    return n.grep(a, function (a) {
      return h.call(b, a) > -1 !== c
    })
  }
  n.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType
    }))
  }, n.fn.extend({
    find: function (a) {
      var b, c = this.length,
        d = [],
        e = this;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++)
          if (n.contains(e[b], this)) return !0
      }));
      for (b = 0; c > b; b++) n.find(a, e[b], d);
      return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
    },
    filter: function (a) {
      return this.pushStack(z(this, a || [], !1))
    },
    not: function (a) {
      return this.pushStack(z(this, a || [], !0))
    },
    is: function (a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
    }
  });
  var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    C = n.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (c = c || A, "string" == typeof a) {
        if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
        if (e[1]) {
          if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
            for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this
        }
        return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
      }
      return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
  C.prototype = n.fn, A = n(d);
  var D = /^(?:parents|prev(?:Until|All))/,
    E = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  n.fn.extend({
    has: function (a) {
      var b = n(a, this),
        c = b.length;
      return this.filter(function () {
        for (var a = 0; c > a; a++)
          if (n.contains(this, b[a])) return !0
      })
    },
    closest: function (a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break
          } return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
    },
    index: function (a) {
      return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function (a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  });

  function F(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a
  }
  n.each({
    parent: function (a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    },
    parents: function (a) {
      return u(a, "parentNode")
    },
    parentsUntil: function (a, b, c) {
      return u(a, "parentNode", c)
    },
    next: function (a) {
      return F(a, "nextSibling")
    },
    prev: function (a) {
      return F(a, "previousSibling")
    },
    nextAll: function (a) {
      return u(a, "nextSibling")
    },
    prevAll: function (a) {
      return u(a, "previousSibling")
    },
    nextUntil: function (a, b, c) {
      return u(a, "nextSibling", c)
    },
    prevUntil: function (a, b, c) {
      return u(a, "previousSibling", c)
    },
    siblings: function (a) {
      return v((a.parentNode || {}).firstChild, a)
    },
    children: function (a) {
      return v(a.firstChild)
    },
    contents: function (a) {
      return a.contentDocument || n.merge([], a.childNodes)
    }
  }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e)
    }
  });
  var G = /\S+/g;

  function H(a) {
    var b = {};
    return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0
    }), b
  }
  n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);
    var b, c, d, e, f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
        }
        a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
      },
      j = {
        add: function () {
          return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
            n.each(b, function (b, c) {
              n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
            })
          }(arguments), c && !b && i()), this
        },
        remove: function () {
          return n.each(arguments, function (a, b) {
            var c;
            while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
          }), this
        },
        has: function (a) {
          return a ? n.inArray(a, f) > -1 : f.length > 0
        },
        empty: function () {
          return f && (f = []), this
        },
        disable: function () {
          return e = g = [], f = c = "", this
        },
        disabled: function () {
          return !f
        },
        lock: function () {
          return e = g = [], c || (f = c = ""), this
        },
        locked: function () {
          return !!e
        },
        fireWith: function (a, c) {
          return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
        },
        fire: function () {
          return j.fireWith(this, arguments), this
        },
        fired: function () {
          return !!d
        }
      };
    return j
  }, n.extend({
    Deferred: function (a) {
      var b = [
          ["resolve", "done", n.Callbacks("once memory"), "resolved"],
          ["reject", "fail", n.Callbacks("once memory"), "rejected"],
          ["notify", "progress", n.Callbacks("memory")]
        ],
        c = "pending",
        d = {
          state: function () {
            return c
          },
          always: function () {
            return e.done(arguments).fail(arguments), this
          },
          then: function () {
            var a = arguments;
            return n.Deferred(function (c) {
              n.each(b, function (b, f) {
                var g = n.isFunction(a[b]) && a[b];
                e[f[1]](function () {
                  var a = g && g.apply(this, arguments);
                  a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                })
              }), a = null
            }).promise()
          },
          promise: function (a) {
            return null != a ? n.extend(a, d) : d
          }
        },
        e = {};
      return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
          h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this
        }, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    },
    when: function (a) {
      var b = 0,
        c = e.call(arguments),
        d = c.length,
        f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
        g = 1 === f ? a : n.Deferred(),
        h = function (a, b, c) {
          return function (d) {
            b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
          }
        },
        i, j, k;
      if (d > 1)
        for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      return f || g.resolveWith(k, c), g.promise()
    }
  });
  var I;
  n.fn.ready = function (a) {
    return n.ready.promise().done(a), this
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (a) {
      a ? n.readyWait++ : n.ready(!0)
    },
    ready: function (a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
    }
  });

  function J() {
    d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
  }
  n.ready.promise = function (b) {
    return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
  }, n.ready.promise();
  var K = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === n.type(c)) {
        e = !0;
        for (h in c) K(a, b, h, c[h], !0, f, g)
      } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
          return j.call(n(a), c)
        })), b))
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    },
    L = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

  function M() {
    this.expando = n.expando + M.uid++
  }
  M.uid = 1, M.prototype = {
    register: function (a, b) {
      var c = b || {};
      return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
        value: c,
        writable: !0,
        configurable: !0
      }), a[this.expando]
    },
    cache: function (a) {
      if (!L(a)) return {};
      var b = a[this.expando];
      return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
        value: b,
        configurable: !0
      }))), b
    },
    set: function (a, b, c) {
      var d, e = this.cache(a);
      if ("string" == typeof b) e[b] = c;
      else
        for (d in b) e[d] = b[d];
      return e
    },
    get: function (a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
    },
    access: function (a, b, c) {
      var d;
      return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
    },
    remove: function (a, b) {
      var c, d, e, f = a[this.expando];
      if (void 0 !== f) {
        if (void 0 === b) this.register(a);
        else {
          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;
          while (c--) delete f[d[c]]
        }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
      }
    },
    hasData: function (a) {
      var b = a[this.expando];
      return void 0 !== b && !n.isEmptyObject(b)
    }
  };
  var N = new M,
    O = new M,
    P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Q = /[A-Z]/g;

  function R(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
        } catch (e) {}
        O.set(a, b, c)
      } else c = void 0;
    return c
  }
  n.extend({
    hasData: function (a) {
      return O.hasData(a) || N.hasData(a)
    },
    data: function (a, b, c) {
      return O.access(a, b, c)
    },
    removeData: function (a, b) {
      O.remove(a, b)
    },
    _data: function (a, b, c) {
      return N.access(a, b, c)
    },
    _removeData: function (a, b) {
      N.remove(a, b)
    }
  }), n.fn.extend({
    data: function (a, b) {
      var c, d, e, f = this[0],
        g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
          c = g.length;
          while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
          N.set(f, "hasDataAttrs", !0)
        }
        return e
      }
      return "object" == typeof a ? this.each(function () {
        O.set(this, a)
      }) : K(this, function (b) {
        var c, d;
        if (f && void 0 === b) {
          if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
          if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
          if (c = R(f, d, void 0), void 0 !== c) return c
        } else d = n.camelCase(a), this.each(function () {
          var c = O.get(this, d);
          O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
        })
      }, null, b, arguments.length > 1, null, !0)
    },
    removeData: function (a) {
      return this.each(function () {
        O.remove(this, a)
      })
    }
  }), n.extend({
    queue: function (a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
    },
    dequeue: function (a, b) {
      b = b || "fx";
      var c = n.queue(a, b),
        d = c.length,
        e = c.shift(),
        f = n._queueHooks(a, b),
        g = function () {
          n.dequeue(a, b)
        };
      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    },
    _queueHooks: function (a, b) {
      var c = b + "queueHooks";
      return N.get(a, c) || N.access(a, c, {
        empty: n.Callbacks("once memory").add(function () {
          N.remove(a, [b + "queue", c])
        })
      })
    }
  }), n.fn.extend({
    queue: function (a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
      })
    },
    dequeue: function (a) {
      return this.each(function () {
        n.dequeue(this, a)
      })
    },
    clearQueue: function (a) {
      return this.queue(a || "fx", [])
    },
    promise: function (a, b) {
      var c, d = 1,
        e = n.Deferred(),
        f = this,
        g = this.length,
        h = function () {
          --d || e.resolveWith(f, [f])
        };
      "string" != typeof a && (b = a, a = void 0), a = a || "fx";
      while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b)
    }
  });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
    U = ["Top", "Right", "Bottom", "Left"],
    V = function (a, b) {
      return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    };

  function W(a, b, c, d) {
    var e, f = 1,
      g = 20,
      h = d ? function () {
        return d.cur()
      } : function () {
        return n.css(a, b, "")
      },
      i = h(),
      j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
      k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
    if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;
      do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
    }
    return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
  }
  var X = /^(?:checkbox|radio)$/i,
    Y = /<([\w:-]+)/,
    Z = /^$|\/(?:java|ecma)script/i,
    $ = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

  function _(a, b) {
    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
  }

  function aa(a, b) {
    for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
  }
  var ba = /<|&#?\w+;/;

  function ca(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
      if (f = a[o], f || 0 === f)
        if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
        else if (ba.test(f)) {
      g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
      while (k--) g = g.lastChild;
      n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
    } else m.push(b.createTextNode(f));
    l.textContent = "", o = 0;
    while (f = m[o++])
      if (d && n.inArray(f, d) > -1) e && e.push(f);
      else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
      k = 0;
      while (f = g[k++]) Z.test(f.type || "") && c.push(f)
    }
    return l
  }
  ! function () {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement("div")),
      c = d.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
  }();
  var da = /^key/,
    ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    fa = /^([^.]*)(?:\.(.+)|)/;

  function ga() {
    return !0
  }

  function ha() {
    return !1
  }

  function ia() {
    try {
      return d.activeElement
    } catch (a) {}
  }

  function ja(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);
      for (h in b) ja(a, h, c, d, b[h], f);
      return a
    }
    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
    else if (!e) return a;
    return 1 === f && (g = e, e = function (a) {
      return n().off(a), g.apply(this, arguments)
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c)
    })
  }
  n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
      if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
        }), b = (b || "").match(G) || [""], j = b.length;
        while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
          type: o,
          origType: q,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && n.expr.match.needsContext.test(e),
          namespace: p.join(".")
        }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
      }
    },
    remove: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
      if (r && (i = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;
        while (j--)
          if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
            while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
          } else
            for (o in i) n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && N.remove(a, "handle events")
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b, c, d, f, g, h = [],
        i = e.call(arguments),
        j = (N.get(this, "events") || {})[a.type] || [],
        k = n.event.special[a.type] || {};
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result
      }
    },
    handlers: function (a, b) {
      var c, d, e, f, g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
        for (; i !== this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
            d.length && g.push({
              elem: i,
              handlers: d
            })
          } return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (a, b) {
        var c, e, f, g = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
      }
    },
    fix: function (a) {
      if (a[n.expando]) return a;
      var b, c, e, f = a.type,
        g = a,
        h = this.fixHooks[f];
      h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
      while (b--) c = e[b], a[c] = g[c];
      return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function () {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
        },
        _default: function (a) {
          return n.nodeName(a.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    }
  }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c)
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
  }, n.Event.prototype = {
    constructor: n.Event,
    isDefaultPrevented: ha,
    isPropagationStopped: ha,
    isImmediatePropagationStopped: ha,
    preventDefault: function () {
      var a = this.originalEvent;
      this.isDefaultPrevented = ga, a && a.preventDefault()
    },
    stopPropagation: function () {
      var a = this.originalEvent;
      this.isPropagationStopped = ga, a && a.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = ga, a && a.stopImmediatePropagation(), this.stopPropagation()
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function (a) {
        var c, d = this,
          e = a.relatedTarget,
          f = a.handleObj;
        return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), n.fn.extend({
    on: function (a, b, c, d) {
      return ja(this, a, b, c, d)
    },
    one: function (a, b, c, d) {
      return ja(this, a, b, c, d, 1)
    },
    off: function (a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function () {
        n.event.remove(this, a, c, b)
      })
    }
  });
  var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    la = /<script|<style|<link/i,
    ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
    na = /^true\/(.*)/,
    oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function pa(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }

  function qa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
  }

  function ra(a) {
    var b = na.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function sa(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
      }
      O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
    }
  }

  function ta(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
  }

  function ua(a, b, c, d) {
    b = f.apply([], b);
    var e, g, h, i, j, k, m = 0,
      o = a.length,
      p = o - 1,
      q = b[0],
      r = n.isFunction(q);
    if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function (e) {
      var f = a.eq(e);
      r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
    });
    if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
      if (i)
        for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
    }
    return a
  }

  function va(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
    return a
  }
  n.extend({
    htmlPrefilter: function (a) {
      return a.replace(ka, "<$1></$2>")
    },
    clone: function (a, b, c) {
      var d, e, f, g, h = a.cloneNode(!0),
        i = n.contains(a.ownerDocument, a);
      if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
        for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);
        else sa(a, h);
      return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
    },
    cleanData: function (a) {
      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (L(c)) {
          if (b = c[N.expando]) {
            if (b.events)
              for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            c[N.expando] = void 0
          }
          c[O.expando] && (c[O.expando] = void 0)
        }
    }
  }), n.fn.extend({
    domManip: ua,
    detach: function (a) {
      return va(this, a, !0)
    },
    remove: function (a) {
      return va(this, a)
    },
    text: function (a) {
      return K(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
        })
      }, null, a, arguments.length)
    },
    append: function () {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);
          b.appendChild(a)
        }
      })
    },
    prepend: function () {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    },
    before: function () {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    },
    after: function () {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    },
    empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
      return this
    },
    clone: function (a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b)
      })
    },
    html: function (a) {
      return K(this, function (a) {
        var b = this[0] || {},
          c = 0,
          d = this.length;
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
        if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);
          try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {}
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function () {
      var a = [];
      return ua(this, arguments, function (b) {
        var c = this.parentNode;
        n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
      }, a)
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
      return this.pushStack(d)
    }
  });
  var wa, xa = {
    HTML: "block",
    BODY: "block"
  };

  function ya(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
      d = n.css(c[0], "display");
    return c.detach(), d
  }

  function za(a) {
    var b = d,
      c = xa[a];
    return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
  }
  var Aa = /^margin/,
    Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
    Ca = function (b) {
      var c = b.ownerDocument.defaultView;
      return c && c.opener || (c = a), c.getComputedStyle(b)
    },
    Da = function (a, b, c, d) {
      var e, f, g = {};
      for (f in b) g[f] = a.style[f], a.style[f] = b[f];
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e
    },
    Ea = d.documentElement;
  ! function () {
    var b, c, e, f, g = d.createElement("div"),
      h = d.createElement("div");
    if (h.style) {
      h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

      function i() {
        h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
        var d = a.getComputedStyle(h);
        b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g)
      }
      n.extend(l, {
        pixelPosition: function () {
          return i(), b
        },
        boxSizingReliable: function () {
          return null == c && i(), c
        },
        pixelMarginRight: function () {
          return null == c && i(), e
        },
        reliableMarginLeft: function () {
          return null == c && i(), f
        },
        reliableMarginRight: function () {
          var b, c = h.appendChild(d.createElement("div"));
          return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b
        }
      })
    }
  }();

  function Fa(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g
  }

  function Ga(a, b) {
    return {
      get: function () {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }
  var Ha = /^(none|table(?!-c[ea]).+)/,
    Ia = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ja = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    Ka = ["Webkit", "O", "Moz", "ms"],
    La = d.createElement("div").style;

  function Ma(a) {
    if (a in La) return a;
    var b = a[0].toUpperCase() + a.slice(1),
      c = Ka.length;
    while (c--)
      if (a = Ka[c] + b, a in La) return a
  }

  function Na(a, b, c) {
    var d = T.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
  }

  function Oa(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
    return g
  }

  function Pa(b, c, e) {
    var f = !0,
      g = "width" === c ? b.offsetWidth : b.offsetHeight,
      h = Ca(b),
      i = "border-box" === n.css(b, "boxSizing", !1, h);
    if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
      if (g = Fa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Ba.test(g)) return g;
      f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0
    }
    return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px"
  }

  function Qa(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    return a
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Fa(a, "opacity");
            return "" === c ? "1" : c
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = n.camelCase(b),
          i = a.style;
        return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
      }
    },
    css: function (a, b, c, d) {
      var e, f, g, h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
    }
  }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = {
      get: function (a, c, d) {
        return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () {
          return Pa(a, b, d)
        }) : Pa(a, b, d) : void 0
      },
      set: function (a, c, d) {
        var e, f = d && Ca(a),
          g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
        return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
      }
    }
  }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
      marginLeft: 0
    }, function () {
      return a.getBoundingClientRect().left
    })) + "px" : void 0
  }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
    return b ? Da(a, {
      display: "inline-block"
    }, Fa, [a, "marginRight"]) : void 0
  }), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (a, b) {
    n.cssHooks[a + b] = {
      expand: function (c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
  }), n.fn.extend({
    css: function (a, b) {
      return K(this, function (a, b, c) {
        var d, e, f = {},
          g = 0;
        if (n.isArray(b)) {
          for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
      }, a, b, arguments.length > 1)
    },
    show: function () {
      return Qa(this, !0)
    },
    hide: function () {
      return Qa(this)
    },
    toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        V(this) ? n(this).show() : n(this).hide()
      })
    }
  });

  function Ra(a, b, c, d, e) {
    return new Ra.prototype.init(a, b, c, d, e)
  }
  n.Tween = Ra, Ra.prototype = {
    constructor: Ra,
    init: function (a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
    },
    cur: function () {
      var a = Ra.propHooks[this.prop];
      return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
    },
    run: function (a) {
      var b, c = Ra.propHooks[this.prop];
      return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this
    }
  }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
    _default: {
      get: function (a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
      },
      set: function (a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
      }
    }
  }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, n.easing = {
    linear: function (a) {
      return a
    },
    swing: function (a) {
      return .5 - Math.cos(a * Math.PI) / 2
    },
    _default: "swing"
  }, n.fx = Ra.prototype.init, n.fx.step = {};
  var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
    Va = /queueHooks$/;

  function Wa() {
    return a.setTimeout(function () {
      Sa = void 0
    }), Sa = n.now()
  }

  function Xa(a, b) {
    var c, d = 0,
      e = {
        height: a
      };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
    return b && (e.opacity = e.width = a), e
  }

  function Ya(a, b, c) {
    for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
      if (d = e[f].call(c, b, a)) return d
  }

  function Za(a, b, c) {
    var d, e, f, g, h, i, j, k, l = this,
      m = {},
      o = a.style,
      p = a.nodeType && V(a),
      q = N.get(a, "fxshow");
    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i()
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
      })
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
    }));
    for (d in b)
      if (e = b[d], Ua.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0
        }
        m[d] = q && q[d] || n.style(a, d)
      } else j = void 0;
    if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
    else {
      q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide()
      }), l.done(function () {
        var b;
        N.remove(a, "fxshow");
        for (b in m) n.style(a, b, m[b])
      });
      for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
    }
  }

  function $a(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];
        for (c in f) c in a || (a[c] = f[c], b[c] = e)
      } else b[d] = e
  }

  function _a(a, b, c) {
    var d, e, f = 0,
      g = _a.prefilters.length,
      h = n.Deferred().always(function () {
        delete i.elem
      }),
      i = function () {
        if (e) return !1;
        for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
      },
      j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, {
          specialEasing: {},
          easing: n.easing._default
        }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Sa || Wa(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
          return j.tweens.push(d), d
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
        }
      }),
      k = j.props;
    for ($a(k, j.opts.specialEasing); g > f; f++)
      if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
    return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }
  n.Animation = n.extend(_a, {
      tweeners: {
        "*": [function (a, b) {
          var c = this.createTween(a, b);
          return W(c.elem, a, T.exec(b), c), c
        }]
      },
      tweener: function (a, b) {
        n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
        for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b)
      },
      prefilters: [Za],
      prefilter: function (a, b) {
        b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
      }
    }), n.speed = function (a, b, c) {
      var d = a && "object" == typeof a ? n.extend({}, a) : {
        complete: c || !c && b || n.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !n.isFunction(b) && b
      };
      return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
        n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
      }, d
    }, n.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(V).css("opacity", 0).show().end().animate({
          opacity: b
        }, a, c, d)
      },
      animate: function (a, b, c, d) {
        var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function () {
            var b = _a(this, n.extend({}, a), f);
            (e || N.get(this, "finish")) && b.stop(!0)
          };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c)
        };
        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
          var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = N.get(this);
          if (e) g[e] && g[e].stop && d(g[e]);
          else
            for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
          for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
          !b && c || n.dequeue(this, a)
        })
      },
      finish: function (a) {
        return a !== !1 && (a = a || "fx"), this.each(function () {
          var b, c = N.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;
          for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
          for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
          delete c.finish
        })
      }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
      var c = n.fn[b];
      n.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
      }
    }), n.each({
      slideDown: Xa("show"),
      slideUp: Xa("hide"),
      slideToggle: Xa("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (a, b) {
      n.fn[a] = function (a, c, d) {
        return this.animate(b, a, c, d)
      }
    }), n.timers = [], n.fx.tick = function () {
      var a, b = 0,
        c = n.timers;
      for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
      c.length || n.fx.stop(), Sa = void 0
    }, n.fx.timer = function (a) {
      n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
      Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
      a.clearInterval(Ta), Ta = null
    }, n.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, n.fn.delay = function (b, c) {
      return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
        var e = a.setTimeout(c, b);
        d.stop = function () {
          a.clearTimeout(e)
        }
      })
    },
    function () {
      var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
      a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
    }();
  var ab, bb = n.expr.attrHandle;
  n.fn.extend({
    attr: function (a, b) {
      return K(this, n.attr, a, b, arguments.length > 1)
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a)
      })
    }
  }), n.extend({
    attr: function (a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
    },
    attrHooks: {
      type: {
        set: function (a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    },
    removeAttr: function (a, b) {
      var c, d, e = 0,
        f = b && b.match(G);
      if (f && 1 === a.nodeType)
        while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
    }
  }), ab = {
    set: function (a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = bb[b] || n.find.attr;
    bb[b] = function (a, b, d) {
      var e, f;
      return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
    }
  });
  var cb = /^(?:input|select|textarea|button)$/i,
    db = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return K(this, n.prop, a, b, arguments.length > 1)
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a]
      })
    }
  }), n.extend({
    prop: function (a, b, c) {
      var d, e, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b,
        e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
    },
    propHooks: {
      tabIndex: {
        get: function (a) {
          var b = n.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), l.optSelected || (n.propHooks.selected = {
    get: function (a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null
    },
    set: function (a) {
      var b = a.parentNode;
      b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this
  });
  var eb = /[\t\r\n\f]/g;

  function fb(a) {
    return a.getAttribute && a.getAttribute("class") || ""
  }
  n.fn.extend({
    addClass: function (a) {
      var b, c, d, e, f, g, h, i = 0;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, fb(this)))
      });
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while (c = this[i++])
          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
            g = 0;
            while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            h = n.trim(d), e !== h && c.setAttribute("class", h)
          }
      }
      return this
    },
    removeClass: function (a) {
      var b, c, d, e, f, g, h, i = 0;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, fb(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(G) || [];
        while (c = this[i++])
          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
            g = 0;
            while (f = b[g++])
              while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
            h = n.trim(d), e !== h && c.setAttribute("class", h)
          }
      }
      return this
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, fb(this), b), b)
      }) : this.each(function () {
        var b, d, e, f;
        if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];
          while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
        } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
      })
    },
    hasClass: function (a) {
      var b, c, d = 0;
      b = " " + a + " ";
      while (c = this[d++])
        if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
      return !1
    }
  });
  var gb = /\r/g,
    hb = /[\x20\t\r\n\f]+/g;
  
    // n.fn.extend({
    //   val: function (a) {
    //     var b, c, d, e = this[0];
    //     if (arguments.length) {
    //       d = n.isFunction(a);
    //       return this.each(function (c) {
    //         var e;
    //         if (1 === this.nodeType) {
    //           e = d ? a.call(this, c, n(this).val()) : a;
    //           if (null == e) {
    //             e = "";
    //           } else if ("number" === typeof e) {
    //             e += "";
    //           } else if (n.isArray(e)) {
    //             e = n.map(e, function (a) {
    //               return null == a ? "" : a + "";
    //             });
    //           }
    //           b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()];
    //           if (b && "set" in b && void 0 !== b.set(this, e, "value")) {
    //             return;
    //           }
    //           this.value = e;
    //         }
    //       });
    //     }
    
    //     if (e) {
    //       b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()];
    //       if (b && "get" in b && void 0 !== (c = b.get(e, "value"))) {
    //         return c;
    //       }
    //       c = e.value;
    //       return "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c;
    //     }
    //   }
    // })


    n.fn.extend({
    val: function (a) {
      var b, c, d, e = this[0]; {
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + ""
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
        });
        if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
      }
    }
  })


  , n.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
        }
      },
      select: {
        get: function (a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;
              g.push(b)
            } return g
        },
        set: function (a, b) {
          var c, d, e = a.options,
            f = n.makeArray(b),
            g = e.length;
          while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
          return c || (a.selectedIndex = -1), f
        }
      }
    }
  }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = {
      set: function (a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
      }
    }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  });
  var ib = /^(?:focusinfocus|focusoutblur)$/;
  n.extend(n.event, {
    trigger: function (b, c, e, f) {
      var g, h, i, j, l, m, o, p = [e || d],
        q = k.call(b, "type") ? b.type : b,
        r = k.call(b, "namespace") ? b.namespace.split(".") : [];
      if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
          i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
        }
        g = 0;
        while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
      }
    },
    simulate: function (a, b, c) {
      var d = n.extend(new n.Event, c, {
        type: a,
        isSimulated: !0
      });
      n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
    }
  }), n.fn.extend({
    trigger: function (a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this)
      })
    },
    triggerHandler: function (a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0
    }
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), n.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    }
  }), l.focusin = "onfocusin" in a, l.focusin || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function (a, b) {
    var c = function (a) {
      n.event.simulate(b, a.target, n.event.fix(a))
    };
    n.event.special[b] = {
      setup: function () {
        var d = this.ownerDocument || this,
          e = N.access(d, b);
        e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
      },
      teardown: function () {
        var d = this.ownerDocument || this,
          e = N.access(d, b) - 1;
        e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
      }
    }
  });
  var jb = a.location,
    kb = n.now(),
    lb = /\?/;
  n.parseJSON = function (a) {
    return JSON.parse(a + "")
  }, n.parseXML = function (b) {
    var c;
    if (!b || "string" != typeof b) return null;
    try {
      c = (new a.DOMParser).parseFromString(b, "text/xml")
    } catch (d) {
      c = void 0
    }
    return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
  };
  var mb = /#.*$/,
    nb = /([?&])_=[^&]*/,
    ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    qb = /^(?:GET|HEAD)$/,
    rb = /^\/\//,
    sb = {},
    tb = {},
    ub = "*/".concat("*"),
    vb = d.createElement("a");
  vb.href = jb.href;

  function wb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c))
        while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function xb(a, b, c, d) {
    var e = {},
      f = a === tb;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
      }), i
    }
    return g(b.dataTypes[0]) || !e["*"] && g("*")
  }

  function yb(a, b) {
    var c, d, e = n.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a
  }

  function zb(a, b, c) {
    var d, e, f, g, h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break
        } if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break
        }
        g || (g = e)
      }
      f = f || g
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }

  function Ab(a, b, c, d) {
    var e, f, g, h, i, j = {},
      k = a.dataTypes.slice();
    if (k[1])
      for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)
        for (e in j)
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break
          } if (g !== !0)
        if (g && a["throws"]) b = g(b);
        else try {
          b = g(b)
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          }
        }
    }
    return {
      state: "success",
      data: b
    }
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: jb.href,
      type: "GET",
      isLocal: pb.test(jb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": ub,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (a, b) {
      return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
    },
    ajaxPrefilter: wb(sb),
    ajaxTransport: wb(tb),
    ajax: function (b, c) {
      "object" == typeof b && (c = b, b = void 0), c = c || {};
      var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
        o = m.context || m,
        p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
        q = n.Deferred(),
        r = n.Callbacks("once memory"),
        s = m.statusCode || {},
        t = {},
        u = {},
        v = 0,
        w = "canceled",
        x = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === v) {
              if (!h) {
                h = {};
                while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2]
              }
              b = h[a.toLowerCase()]
            }
            return null == b ? null : b
          },
          getAllResponseHeaders: function () {
            return 2 === v ? g : null
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return v || (a = u[c] = u[c] || a, t[a] = b), this
          },
          overrideMimeType: function (a) {
            return v || (m.mimeType = a), this
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > v)
                for (b in a) s[b] = [s[b], a[b]];
              else x.always(a[x.status]);
            return this
          },
          abort: function (a) {
            var b = a || w;
            return e && e.abort(b), z(0, b), this
          }
        };
      if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
        j = d.createElement("a");
        try {
          j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
        } catch (y) {
          m.crossDomain = !0
        }
      }
      if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;
      k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
      for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
      if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
      w = "abort";
      for (l in {
          success: 1,
          error: 1,
          complete: 1
        }) x[l](m[l]);
      if (e = xb(tb, m, c, x)) {
        if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
        m.async && m.timeout > 0 && (i = a.setTimeout(function () {
          x.abort("timeout")
        }, m.timeout));
        try {
          v = 1, e.send(t, z)
        } catch (y) {
          if (!(2 > v)) throw y;
          z(-1, y)
        }
      } else z(-1, "No Transport");

      function z(b, c, d, h) {
        var j, l, t, u, w, y = c;
        2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
      }
      return x
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json")
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script")
    }
  }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      }, n.isPlainObject(a) && a))
    }
  }), n._evalUrl = function (a) {
    return n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    })
  }, n.fn.extend({
    wrapAll: function (a) {
      var b;
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b))
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;
        while (a.firstElementChild) a = a.firstElementChild;
        return a
      }).append(this)), this)
    },
    wrapInner: function (a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b))
      }) : this.each(function () {
        var b = n(this),
          c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    },
    wrap: function (a) {
      var b = n.isFunction(a);
      return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a)
      })
    },
    unwrap: function () {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
      }).end()
    }
  }), n.expr.filters.hidden = function (a) {
    return !n.expr.filters.visible(a)
  }, n.expr.filters.visible = function (a) {
    return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
  };
  var Bb = /%20/g,
    Cb = /\[\]$/,
    Db = /\r?\n/g,
    Eb = /^(?:submit|button|image|reset|file)$/i,
    Fb = /^(?:input|select|textarea|keygen)/i;

  function Gb(a, b, c, d) {
    var e;
    if (n.isArray(b)) n.each(b, function (b, e) {
      c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
    });
    else if (c || "object" !== n.type(b)) d(a, b);
    else
      for (e in b) Gb(a + "[" + e + "]", b[e], c, d)
  }
  n.param = function (a, b) {
    var c, d = [],
      e = function (a, b) {
        b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
      };
    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value)
    });
    else
      for (c in a) Gb(c, a[c], b, e);
    return d.join("&").replace(Bb, "+")
  }, n.fn.extend({
    serialize: function () {
      return n.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this
      }).filter(function () {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
      }).map(function (a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(Db, "\r\n")
          }
        }) : {
          name: b.name,
          value: c.replace(Db, "\r\n")
        }
      }).get()
    }
  }), n.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest
    } catch (b) {}
  };
  var Hb = {
      0: 200,
      1223: 204
    },
    Ib = n.ajaxSettings.xhr();
  l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function (b) {
    var c, d;
    return l.cors || Ib && !b.crossDomain ? {
      send: function (e, f) {
        var g, h = b.xhr();
        if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
          for (g in b.xhrFields) h[g] = b.xhrFields[g];
        b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
        for (g in e) h.setRequestHeader(g, e[g]);
        c = function (a) {
          return function () {
            c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
              binary: h.response
            } : {
              text: h.responseText
            }, h.getAllResponseHeaders()))
          }
        }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            c && d()
          })
        }, c = c("abort");
        try {
          h.send(b.hasContent && b.data || null)
        } catch (i) {
          if (c) throw i
        }
      },
      abort: function () {
        c && c()
      }
    } : void 0
  }), n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (a) {
        return n.globalEval(a), a
      }
    }
  }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c;
      return {
        send: function (e, f) {
          b = n("<script>").prop({
            charset: a.scriptCharset,
            src: a.url
          }).on("load error", c = function (a) {
            b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
          }), d.head.appendChild(b[0])
        },
        abort: function () {
          c && c()
        }
      }
    }
  });
  var Jb = [],
    Kb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Jb.pop() || n.expando + "_" + kb++;
      return this[a] = !0, a
    }
  }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0]
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
    }), "script") : void 0
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || d;
    var e = x.exec(a),
      f = !c && [];
    return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
  };
  var Lb = n.fn.load;
  n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
    var d, e, f, g = this,
      h = a.indexOf(" ");
    return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: e || "GET",
      dataType: "html",
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a])
      })
    }), this
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a)
    }
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem
    }).length
  };

  function Mb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
  }
  n.offset = {
    setOffset: function (a, b, c) {
      var d, e, f, g, h, i, j, k = n.css(a, "position"),
        l = n(a),
        m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
    }
  }, n.fn.extend({
    offset: function (a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b)
      });
      var b, c, d = this[0],
        e = {
          top: 0,
          left: 0
        },
        f = d && d.ownerDocument;
      if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), {
        top: e.top + c.pageYOffset - b.clientTop,
        left: e.left + c.pageXOffset - b.clientLeft
      }) : e
    },
    position: function () {
      if (this[0]) {
        var a, b, c = this[0],
          d = {
            top: 0,
            left: 0
          };
        return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - d.top - n.css(c, "marginTop", !0),
          left: b.left - d.left - n.css(c, "marginLeft", !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent;
        while (a && "static" === n.css(a, "position")) a = a.offsetParent;
        return a || Ea
      })
    }
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (a, b) {
    var c = "pageYOffset" === b;
    n.fn[a] = function (d) {
      return K(this, function (a, d, e) {
        var f = Mb(a);
        return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
      }, a, d, arguments.length)
    }
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
      return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
    })
  }), n.each({
    Height: "height",
    Width: "width"
  }, function (a, b) {
    n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
          g = c || (d === !0 || e === !0 ? "margin" : "border");
        return K(this, function (b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }), n.fn.extend({
    bind: function (a, b, c) {
      return this.on(a, null, b, c)
    },
    unbind: function (a, b) {
      return this.off(a, null, b)
    },
    delegate: function (a, b, c, d) {
      return this.on(b, a, c, d)
    },
    undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    },
    size: function () {
      return this.length
    }
  }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n
  });
  var Nb = a.jQuery,
    Ob = a.$;
  return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n
  }, b || (a.jQuery = a.$ = n), n
});


// gl-matrix-min.js

/*!
@fileoverview gl-matrix - High performance matrix and vector operations
@author Brandon Jones
@author Colin MacKenzie IV
@version 3.3.0

Copyright (c) 2015-2020, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
! function (t, n) {
  "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((t = "undefined" != typeof globalThis ? globalThis : t || self).glMatrix = {})
}(this, (function (t) {
  "use strict";
  var n = 1e-6,
    a = "undefined" != typeof Float32Array ? Float32Array : Array,
    r = Math.random;
  var u = Math.PI / 180;
  Math.hypot || (Math.hypot = function () {
    for (var t = 0, n = arguments.length; n--;) t += arguments[n] * arguments[n];
    return Math.sqrt(t)
  });
  var e = Object.freeze({
    __proto__: null,
    EPSILON: n,
    get ARRAY_TYPE() {
      return a
    },
    RANDOM: r,
    setMatrixArrayType: function (t) {
      a = t
    },
    toRadian: function (t) {
      return t * u
    },
    equals: function (t, a) {
      return Math.abs(t - a) <= n * Math.max(1, Math.abs(t), Math.abs(a))
    }
  });

  function o(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = a[0],
      h = a[1],
      c = a[2],
      s = a[3];
    return t[0] = r * i + e * h, t[1] = u * i + o * h, t[2] = r * c + e * s, t[3] = u * c + o * s, t
  }

  function i(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t
  }
  var h = o,
    c = i,
    s = Object.freeze({
      __proto__: null,
      create: function () {
        var t = new a(4);
        return a != Float32Array && (t[1] = 0, t[2] = 0), t[0] = 1, t[3] = 1, t
      },
      clone: function (t) {
        var n = new a(4);
        return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n
      },
      copy: function (t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t
      },
      identity: function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
      },
      fromValues: function (t, n, r, u) {
        var e = new a(4);
        return e[0] = t, e[1] = n, e[2] = r, e[3] = u, e
      },
      set: function (t, n, a, r, u) {
        return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t
      },
      transpose: function (t, n) {
        if (t === n) {
          var a = n[1];
          t[1] = n[2], t[2] = a
        } else t[0] = n[0], t[1] = n[2], t[2] = n[1], t[3] = n[3];
        return t
      },
      invert: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = a * e - u * r;
        return o ? (o = 1 / o, t[0] = e * o, t[1] = -r * o, t[2] = -u * o, t[3] = a * o, t) : null
      },
      adjoint: function (t, n) {
        var a = n[0];
        return t[0] = n[3], t[1] = -n[1], t[2] = -n[2], t[3] = a, t
      },
      determinant: function (t) {
        return t[0] * t[3] - t[2] * t[1]
      },
      multiply: o,
      rotate: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = Math.sin(a),
          h = Math.cos(a);
        return t[0] = r * h + e * i, t[1] = u * h + o * i, t[2] = r * -i + e * h, t[3] = u * -i + o * h, t
      },
      scale: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = a[0],
          h = a[1];
        return t[0] = r * i, t[1] = u * i, t[2] = e * h, t[3] = o * h, t
      },
      fromRotation: function (t, n) {
        var a = Math.sin(n),
          r = Math.cos(n);
        return t[0] = r, t[1] = a, t[2] = -a, t[3] = r, t
      },
      fromScaling: function (t, n) {
        return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t
      },
      str: function (t) {
        return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
      },
      frob: function (t) {
        return Math.hypot(t[0], t[1], t[2], t[3])
      },
      LDU: function (t, n, a, r) {
        return t[2] = r[2] / r[0], a[0] = r[0], a[1] = r[1], a[3] = r[3] - t[2] * a[1], [t, n, a]
      },
      add: function (t, n, a) {
        return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t
      },
      subtract: i,
      exactEquals: function (t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
      },
      equals: function (t, a) {
        var r = t[0],
          u = t[1],
          e = t[2],
          o = t[3],
          i = a[0],
          h = a[1],
          c = a[2],
          s = a[3];
        return Math.abs(r - i) <= n * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(u - h) <= n * Math.max(1, Math.abs(u), Math.abs(h)) && Math.abs(e - c) <= n * Math.max(1, Math.abs(e), Math.abs(c)) && Math.abs(o - s) <= n * Math.max(1, Math.abs(o), Math.abs(s))
      },
      multiplyScalar: function (t, n, a) {
        return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t
      },
      multiplyScalarAndAdd: function (t, n, a, r) {
        return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t
      },
      mul: h,
      sub: c
    });

  function M(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = n[4],
      h = n[5],
      c = a[0],
      s = a[1],
      M = a[2],
      f = a[3],
      l = a[4],
      v = a[5];
    return t[0] = r * c + e * s, t[1] = u * c + o * s, t[2] = r * M + e * f, t[3] = u * M + o * f, t[4] = r * l + e * v + i, t[5] = u * l + o * v + h, t
  }

  function f(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t[4] = n[4] - a[4], t[5] = n[5] - a[5], t
  }
  var l = M,
    v = f,
    b = Object.freeze({
      __proto__: null,
      create: function () {
        var t = new a(6);
        return a != Float32Array && (t[1] = 0, t[2] = 0, t[4] = 0, t[5] = 0), t[0] = 1, t[3] = 1, t
      },
      clone: function (t) {
        var n = new a(6);
        return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n
      },
      copy: function (t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t
      },
      identity: function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
      },
      fromValues: function (t, n, r, u, e, o) {
        var i = new a(6);
        return i[0] = t, i[1] = n, i[2] = r, i[3] = u, i[4] = e, i[5] = o, i
      },
      set: function (t, n, a, r, u, e, o) {
        return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t
      },
      invert: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          h = a * e - r * u;
        return h ? (h = 1 / h, t[0] = e * h, t[1] = -r * h, t[2] = -u * h, t[3] = a * h, t[4] = (u * i - e * o) * h, t[5] = (r * o - a * i) * h, t) : null
      },
      determinant: function (t) {
        return t[0] * t[3] - t[1] * t[2]
      },
      multiply: M,
      rotate: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          h = n[5],
          c = Math.sin(a),
          s = Math.cos(a);
        return t[0] = r * s + e * c, t[1] = u * s + o * c, t[2] = r * -c + e * s, t[3] = u * -c + o * s, t[4] = i, t[5] = h, t
      },
      scale: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          h = n[5],
          c = a[0],
          s = a[1];
        return t[0] = r * c, t[1] = u * c, t[2] = e * s, t[3] = o * s, t[4] = i, t[5] = h, t
      },
      translate: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          h = n[5],
          c = a[0],
          s = a[1];
        return t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = r * c + e * s + i, t[5] = u * c + o * s + h, t
      },
      fromRotation: function (t, n) {
        var a = Math.sin(n),
          r = Math.cos(n);
        return t[0] = r, t[1] = a, t[2] = -a, t[3] = r, t[4] = 0, t[5] = 0, t
      },
      fromScaling: function (t, n) {
        return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t[4] = 0, t[5] = 0, t
      },
      fromTranslation: function (t, n) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = n[0], t[5] = n[1], t
      },
      str: function (t) {
        return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
      },
      frob: function (t) {
        return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], 1)
      },
      add: function (t, n, a) {
        return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t
      },
      subtract: f,
      multiplyScalar: function (t, n, a) {
        return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t
      },
      multiplyScalarAndAdd: function (t, n, a, r) {
        return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t[4] = n[4] + a[4] * r, t[5] = n[5] + a[5] * r, t
      },
      exactEquals: function (t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5]
      },
      equals: function (t, a) {
        var r = t[0],
          u = t[1],
          e = t[2],
          o = t[3],
          i = t[4],
          h = t[5],
          c = a[0],
          s = a[1],
          M = a[2],
          f = a[3],
          l = a[4],
          v = a[5];
        return Math.abs(r - c) <= n * Math.max(1, Math.abs(r), Math.abs(c)) && Math.abs(u - s) <= n * Math.max(1, Math.abs(u), Math.abs(s)) && Math.abs(e - M) <= n * Math.max(1, Math.abs(e), Math.abs(M)) && Math.abs(o - f) <= n * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(i - l) <= n * Math.max(1, Math.abs(i), Math.abs(l)) && Math.abs(h - v) <= n * Math.max(1, Math.abs(h), Math.abs(v))
      },
      mul: l,
      sub: v
    });

  function m() {
    var t = new a(9);
    return a != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[5] = 0, t[6] = 0, t[7] = 0), t[0] = 1, t[4] = 1, t[8] = 1, t
  }

  function d(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = n[4],
      h = n[5],
      c = n[6],
      s = n[7],
      M = n[8],
      f = a[0],
      l = a[1],
      v = a[2],
      b = a[3],
      m = a[4],
      d = a[5],
      x = a[6],
      p = a[7],
      y = a[8];
    return t[0] = f * r + l * o + v * c, t[1] = f * u + l * i + v * s, t[2] = f * e + l * h + v * M, t[3] = b * r + m * o + d * c, t[4] = b * u + m * i + d * s, t[5] = b * e + m * h + d * M, t[6] = x * r + p * o + y * c, t[7] = x * u + p * i + y * s, t[8] = x * e + p * h + y * M, t
  }

  function x(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t[4] = n[4] - a[4], t[5] = n[5] - a[5], t[6] = n[6] - a[6], t[7] = n[7] - a[7], t[8] = n[8] - a[8], t
  }
  var p = d,
    y = x,
    q = Object.freeze({
      __proto__: null,
      create: m,
      fromMat4: function (t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[4], t[4] = n[5], t[5] = n[6], t[6] = n[8], t[7] = n[9], t[8] = n[10], t
      },
      clone: function (t) {
        var n = new a(9);
        return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n
      },
      copy: function (t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t
      },
      fromValues: function (t, n, r, u, e, o, i, h, c) {
        var s = new a(9);
        return s[0] = t, s[1] = n, s[2] = r, s[3] = u, s[4] = e, s[5] = o, s[6] = i, s[7] = h, s[8] = c, s
      },
      set: function (t, n, a, r, u, e, o, i, h, c) {
        return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t[6] = i, t[7] = h, t[8] = c, t
      },
      identity: function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
      },
      transpose: function (t, n) {
        if (t === n) {
          var a = n[1],
            r = n[2],
            u = n[5];
          t[1] = n[3], t[2] = n[6], t[3] = a, t[5] = n[7], t[6] = r, t[7] = u
        } else t[0] = n[0], t[1] = n[3], t[2] = n[6], t[3] = n[1], t[4] = n[4], t[5] = n[7], t[6] = n[2], t[7] = n[5], t[8] = n[8];
        return t
      },
      invert: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          h = n[6],
          c = n[7],
          s = n[8],
          M = s * o - i * c,
          f = -s * e + i * h,
          l = c * e - o * h,
          v = a * M + r * f + u * l;
        return v ? (v = 1 / v, t[0] = M * v, t[1] = (-s * r + u * c) * v, t[2] = (i * r - u * o) * v, t[3] = f * v, t[4] = (s * a - u * h) * v, t[5] = (-i * a + u * e) * v, t[6] = l * v, t[7] = (-c * a + r * h) * v, t[8] = (o * a - r * e) * v, t) : null
      },
      adjoint: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          h = n[6],
          c = n[7],
          s = n[8];
        return t[0] = o * s - i * c, t[1] = u * c - r * s, t[2] = r * i - u * o, t[3] = i * h - e * s, t[4] = a * s - u * h, t[5] = u * e - a * i, t[6] = e * c - o * h, t[7] = r * h - a * c, t[8] = a * o - r * e, t
      },
      determinant: function (t) {
        var n = t[0],
          a = t[1],
          r = t[2],
          u = t[3],
          e = t[4],
          o = t[5],
          i = t[6],
          h = t[7],
          c = t[8];
        return n * (c * e - o * h) + a * (-c * u + o * i) + r * (h * u - e * i)
      },
      multiply: d,
      translate: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          h = n[5],
          c = n[6],
          s = n[7],
          M = n[8],
          f = a[0],
          l = a[1];
        return t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = i, t[5] = h, t[6] = f * r + l * o + c, t[7] = f * u + l * i + s, t[8] = f * e + l * h + M, t
      },
      rotate: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          h = n[5],
          c = n[6],
          s = n[7],
          M = n[8],
          f = Math.sin(a),
          l = Math.cos(a);
        return t[0] = l * r + f * o, t[1] = l * u + f * i, t[2] = l * e + f * h, t[3] = l * o - f * r, t[4] = l * i - f * u, t[5] = l * h - f * e, t[6] = c, t[7] = s, t[8] = M, t
      },
      scale: function (t, n, a) {
        var r = a[0],
          u = a[1];
        return t[0] = r * n[0], t[1] = r * n[1], t[2] = r * n[2], t[3] = u * n[3], t[4] = u * n[4], t[5] = u * n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t
      },
      fromTranslation: function (t, n) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = n[0], t[7] = n[1], t[8] = 1, t
      },
      fromRotation: function (t, n) {
        var a = Math.sin(n),
          r = Math.cos(n);
        return t[0] = r, t[1] = a, t[2] = 0, t[3] = -a, t[4] = r, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
      },
      fromScaling: function (t, n) {
        return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = n[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
      },
      fromMat2d: function (t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = 0, t[3] = n[2], t[4] = n[3], t[5] = 0, t[6] = n[4], t[7] = n[5], t[8] = 1, t
      },
      fromQuat: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = a + a,
          i = r + r,
          h = u + u,
          c = a * o,
          s = r * o,
          M = r * i,
          f = u * o,
          l = u * i,
          v = u * h,
          b = e * o,
          m = e * i,
          d = e * h;
        return t[0] = 1 - M - v, t[3] = s - d, t[6] = f + m, t[1] = s + d, t[4] = 1 - c - v, t[7] = l - b, t[2] = f - m, t[5] = l + b, t[8] = 1 - c - M, t
      },
      normalFromMat4: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          h = n[6],
          c = n[7],
          s = n[8],
          M = n[9],
          f = n[10],
          l = n[11],
          v = n[12],
          b = n[13],
          m = n[14],
          d = n[15],
          x = a * i - r * o,
          p = a * h - u * o,
          y = a * c - e * o,
          q = r * h - u * i,
          g = r * c - e * i,
          _ = u * c - e * h,
          A = s * b - M * v,
          w = s * m - f * v,
          z = s * d - l * v,
          R = M * m - f * b,
          j = M * d - l * b,
          P = f * d - l * m,
          T = x * P - p * j + y * R + q * z - g * w + _ * A;
        return T ? (T = 1 / T, t[0] = (i * P - h * j + c * R) * T, t[1] = (h * z - o * P - c * w) * T, t[2] = (o * j - i * z + c * A) * T, t[3] = (u * j - r * P - e * R) * T, t[4] = (a * P - u * z + e * w) * T, t[5] = (r * z - a * j - e * A) * T, t[6] = (b * _ - m * g + d * q) * T, t[7] = (m * y - v * _ - d * p) * T, t[8] = (v * g - b * y + d * x) * T, t) : null
      },
      projection: function (t, n, a) {
        return t[0] = 2 / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / a, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t
      },
      str: function (t) {
        return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
      },
      frob: function (t) {
        return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8])
      },
      add: function (t, n, a) {
        return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t[6] = n[6] + a[6], t[7] = n[7] + a[7], t[8] = n[8] + a[8], t
      },
      subtract: x,
      multiplyScalar: function (t, n, a) {
        return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t[8] = n[8] * a, t
      },
      multiplyScalarAndAdd: function (t, n, a, r) {
        return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t[4] = n[4] + a[4] * r, t[5] = n[5] + a[5] * r, t[6] = n[6] + a[6] * r, t[7] = n[7] + a[7] * r, t[8] = n[8] + a[8] * r, t
      },
      exactEquals: function (t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8]
      },
      equals: function (t, a) {
        var r = t[0],
          u = t[1],
          e = t[2],
          o = t[3],
          i = t[4],
          h = t[5],
          c = t[6],
          s = t[7],
          M = t[8],
          f = a[0],
          l = a[1],
          v = a[2],
          b = a[3],
          m = a[4],
          d = a[5],
          x = a[6],
          p = a[7],
          y = a[8];
        return Math.abs(r - f) <= n * Math.max(1, Math.abs(r), Math.abs(f)) && Math.abs(u - l) <= n * Math.max(1, Math.abs(u), Math.abs(l)) && Math.abs(e - v) <= n * Math.max(1, Math.abs(e), Math.abs(v)) && Math.abs(o - b) <= n * Math.max(1, Math.abs(o), Math.abs(b)) && Math.abs(i - m) <= n * Math.max(1, Math.abs(i), Math.abs(m)) && Math.abs(h - d) <= n * Math.max(1, Math.abs(h), Math.abs(d)) && Math.abs(c - x) <= n * Math.max(1, Math.abs(c), Math.abs(x)) && Math.abs(s - p) <= n * Math.max(1, Math.abs(s), Math.abs(p)) && Math.abs(M - y) <= n * Math.max(1, Math.abs(M), Math.abs(y))
      },
      mul: p,
      sub: y
    });

  function g(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
  }

  function _(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = n[4],
      h = n[5],
      c = n[6],
      s = n[7],
      M = n[8],
      f = n[9],
      l = n[10],
      v = n[11],
      b = n[12],
      m = n[13],
      d = n[14],
      x = n[15],
      p = a[0],
      y = a[1],
      q = a[2],
      g = a[3];
    return t[0] = p * r + y * i + q * M + g * b, t[1] = p * u + y * h + q * f + g * m, t[2] = p * e + y * c + q * l + g * d, t[3] = p * o + y * s + q * v + g * x, p = a[4], y = a[5], q = a[6], g = a[7], t[4] = p * r + y * i + q * M + g * b, t[5] = p * u + y * h + q * f + g * m, t[6] = p * e + y * c + q * l + g * d, t[7] = p * o + y * s + q * v + g * x, p = a[8], y = a[9], q = a[10], g = a[11], t[8] = p * r + y * i + q * M + g * b, t[9] = p * u + y * h + q * f + g * m, t[10] = p * e + y * c + q * l + g * d, t[11] = p * o + y * s + q * v + g * x, p = a[12], y = a[13], q = a[14], g = a[15], t[12] = p * r + y * i + q * M + g * b, t[13] = p * u + y * h + q * f + g * m, t[14] = p * e + y * c + q * l + g * d, t[15] = p * o + y * s + q * v + g * x, t
  }

  function A(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = r + r,
      h = u + u,
      c = e + e,
      s = r * i,
      M = r * h,
      f = r * c,
      l = u * h,
      v = u * c,
      b = e * c,
      m = o * i,
      d = o * h,
      x = o * c;
    return t[0] = 1 - (l + b), t[1] = M + x, t[2] = f - d, t[3] = 0, t[4] = M - x, t[5] = 1 - (s + b), t[6] = v + m, t[7] = 0, t[8] = f + d, t[9] = v - m, t[10] = 1 - (s + l), t[11] = 0, t[12] = a[0], t[13] = a[1], t[14] = a[2], t[15] = 1, t
  }

  function w(t, n) {
    return t[0] = n[12], t[1] = n[13], t[2] = n[14], t
  }

  function z(t, n) {
    var a = n[0],
      r = n[1],
      u = n[2],
      e = n[4],
      o = n[5],
      i = n[6],
      h = n[8],
      c = n[9],
      s = n[10];
    return t[0] = Math.hypot(a, r, u), t[1] = Math.hypot(e, o, i), t[2] = Math.hypot(h, c, s), t
  }

  function R(t, n) {
    var r = new a(3);
    z(r, n);
    var u = 1 / r[0],
      e = 1 / r[1],
      o = 1 / r[2],
      i = n[0] * u,
      h = n[1] * e,
      c = n[2] * o,
      s = n[4] * u,
      M = n[5] * e,
      f = n[6] * o,
      l = n[8] * u,
      v = n[9] * e,
      b = n[10] * o,
      m = i + M + b,
      d = 0;
    return m > 0 ? (d = 2 * Math.sqrt(m + 1), t[3] = .25 * d, t[0] = (f - v) / d, t[1] = (l - c) / d, t[2] = (h - s) / d) : i > M && i > b ? (d = 2 * Math.sqrt(1 + i - M - b), t[3] = (f - v) / d, t[0] = .25 * d, t[1] = (h + s) / d, t[2] = (l + c) / d) : M > b ? (d = 2 * Math.sqrt(1 + M - i - b), t[3] = (l - c) / d, t[0] = (h + s) / d, t[1] = .25 * d, t[2] = (f + v) / d) : (d = 2 * Math.sqrt(1 + b - i - M), t[3] = (h - s) / d, t[0] = (l + c) / d, t[1] = (f + v) / d, t[2] = .25 * d), t
  }

  function j(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t[4] = n[4] - a[4], t[5] = n[5] - a[5], t[6] = n[6] - a[6], t[7] = n[7] - a[7], t[8] = n[8] - a[8], t[9] = n[9] - a[9], t[10] = n[10] - a[10], t[11] = n[11] - a[11], t[12] = n[12] - a[12], t[13] = n[13] - a[13], t[14] = n[14] - a[14], t[15] = n[15] - a[15], t
  }
  var P = _,
    T = j,
    S = Object.freeze({
      __proto__: null,
      create: function () {
        var t = new a(16);
        return a != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0), t[0] = 1, t[5] = 1, t[10] = 1, t[15] = 1, t
      },
      clone: function (t) {
        var n = new a(16);
        return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n[9] = t[9], n[10] = t[10], n[11] = t[11], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15], n
      },
      copy: function (t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t
      },
      fromValues: function (t, n, r, u, e, o, i, h, c, s, M, f, l, v, b, m) {
        var d = new a(16);
        return d[0] = t, d[1] = n, d[2] = r, d[3] = u, d[4] = e, d[5] = o, d[6] = i, d[7] = h, d[8] = c, d[9] = s, d[10] = M, d[11] = f, d[12] = l, d[13] = v, d[14] = b, d[15] = m, d
      },
      set: function (t, n, a, r, u, e, o, i, h, c, s, M, f, l, v, b, m) {
        return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t[6] = i, t[7] = h, t[8] = c, t[9] = s, t[10] = M, t[11] = f, t[12] = l, t[13] = v, t[14] = b, t[15] = m, t
      },
      identity: g,
      transpose: function (t, n) {
        if (t === n) {
          var a = n[1],
            r = n[2],
            u = n[3],
            e = n[6],
            o = n[7],
            i = n[11];
          t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = a, t[6] = n[9], t[7] = n[13], t[8] = r, t[9] = e, t[11] = n[14], t[12] = u, t[13] = o, t[14] = i
        } else t[0] = n[0], t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = n[1], t[5] = n[5], t[6] = n[9], t[7] = n[13], t[8] = n[2], t[9] = n[6], t[10] = n[10], t[11] = n[14], t[12] = n[3], t[13] = n[7], t[14] = n[11], t[15] = n[15];
        return t
      },
      invert: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          h = n[6],
          c = n[7],
          s = n[8],
          M = n[9],
          f = n[10],
          l = n[11],
          v = n[12],
          b = n[13],
          m = n[14],
          d = n[15],
          x = a * i - r * o,
          p = a * h - u * o,
          y = a * c - e * o,
          q = r * h - u * i,
          g = r * c - e * i,
          _ = u * c - e * h,
          A = s * b - M * v,
          w = s * m - f * v,
          z = s * d - l * v,
          R = M * m - f * b,
          j = M * d - l * b,
          P = f * d - l * m,
          T = x * P - p * j + y * R + q * z - g * w + _ * A;
        return T ? (T = 1 / T, t[0] = (i * P - h * j + c * R) * T, t[1] = (u * j - r * P - e * R) * T, t[2] = (b * _ - m * g + d * q) * T, t[3] = (f * g - M * _ - l * q) * T, t[4] = (h * z - o * P - c * w) * T, t[5] = (a * P - u * z + e * w) * T, t[6] = (m * y - v * _ - d * p) * T, t[7] = (s * _ - f * y + l * p) * T, t[8] = (o * j - i * z + c * A) * T, t[9] = (r * z - a * j - e * A) * T, t[10] = (v * g - b * y + d * x) * T, t[11] = (M * y - s * g - l * x) * T, t[12] = (i * w - o * R - h * A) * T, t[13] = (a * R - r * w + u * A) * T, t[14] = (b * p - v * q - m * x) * T, t[15] = (s * q - M * p + f * x) * T, t) : null
      },
      adjoint: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          h = n[6],
          c = n[7],
          s = n[8],
          M = n[9],
          f = n[10],
          l = n[11],
          v = n[12],
          b = n[13],
          m = n[14],
          d = n[15],
          x = a * i - r * o,
          p = a * h - u * o,
          y = a * c - e * o,
          q = r * h - u * i,
          g = r * c - e * i,
          _ = u * c - e * h,
          A = s * b - M * v,
          w = s * m - f * v,
          z = s * d - l * v,
          R = M * m - f * b,
          j = M * d - l * b,
          P = f * d - l * m;
        return t[0] = i * P - h * j + c * R, t[1] = u * j - r * P - e * R, t[2] = b * _ - m * g + d * q, t[3] = f * g - M * _ - l * q, t[4] = h * z - o * P - c * w, t[5] = a * P - u * z + e * w, t[6] = m * y - v * _ - d * p, t[7] = s * _ - f * y + l * p, t[8] = o * j - i * z + c * A, t[9] = r * z - a * j - e * A, t[10] = v * g - b * y + d * x, t[11] = M * y - s * g - l * x, t[12] = i * w - o * R - h * A, t[13] = a * R - r * w + u * A, t[14] = b * p - v * q - m * x, t[15] = s * q - M * p + f * x, t
      },
      determinant: function (t) {
        var n = t[0],
          a = t[1],
          r = t[2],
          u = t[3],
          e = t[4],
          o = t[5],
          i = t[6],
          h = t[7],
          c = t[8],
          s = t[9],
          M = t[10],
          f = t[11],
          l = t[12],
          v = t[13],
          b = t[14],
          m = n * o - a * e,
          d = n * i - r * e,
          x = a * i - r * o,
          p = c * v - s * l,
          y = c * b - M * l,
          q = s * b - M * v;
        return h * (n * q - a * y + r * p) - u * (e * q - o * y + i * p) + t[15] * (c * x - s * d + M * m) - f * (l * x - v * d + b * m)
      },
      multiply: _,
      translate: function (t, n, a) {
        var r, u, e, o, i, h, c, s, M, f, l, v, b = a[0],
          m = a[1],
          d = a[2];
        return n === t ? (t[12] = n[0] * b + n[4] * m + n[8] * d + n[12], t[13] = n[1] * b + n[5] * m + n[9] * d + n[13], t[14] = n[2] * b + n[6] * m + n[10] * d + n[14], t[15] = n[3] * b + n[7] * m + n[11] * d + n[15]) : (r = n[0], u = n[1], e = n[2], o = n[3], i = n[4], h = n[5], c = n[6], s = n[7], M = n[8], f = n[9], l = n[10], v = n[11], t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = i, t[5] = h, t[6] = c, t[7] = s, t[8] = M, t[9] = f, t[10] = l, t[11] = v, t[12] = r * b + i * m + M * d + n[12], t[13] = u * b + h * m + f * d + n[13], t[14] = e * b + c * m + l * d + n[14], t[15] = o * b + s * m + v * d + n[15]), t
      },
      scale: function (t, n, a) {
        var r = a[0],
          u = a[1],
          e = a[2];
        return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * u, t[5] = n[5] * u, t[6] = n[6] * u, t[7] = n[7] * u, t[8] = n[8] * e, t[9] = n[9] * e, t[10] = n[10] * e, t[11] = n[11] * e, t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t
      },
      rotate: function (t, a, r, u) {
        var e, o, i, h, c, s, M, f, l, v, b, m, d, x, p, y, q, g, _, A, w, z, R, j, P = u[0],
          T = u[1],
          S = u[2],
          E = Math.hypot(P, T, S);
        return E < n ? null : (P *= E = 1 / E, T *= E, S *= E, e = Math.sin(r), i = 1 - (o = Math.cos(r)), h = a[0], c = a[1], s = a[2], M = a[3], f = a[4], l = a[5], v = a[6], b = a[7], m = a[8], d = a[9], x = a[10], p = a[11], y = P * P * i + o, q = T * P * i + S * e, g = S * P * i - T * e, _ = P * T * i - S * e, A = T * T * i + o, w = S * T * i + P * e, z = P * S * i + T * e, R = T * S * i - P * e, j = S * S * i + o, t[0] = h * y + f * q + m * g, t[1] = c * y + l * q + d * g, t[2] = s * y + v * q + x * g, t[3] = M * y + b * q + p * g, t[4] = h * _ + f * A + m * w, t[5] = c * _ + l * A + d * w, t[6] = s * _ + v * A + x * w, t[7] = M * _ + b * A + p * w, t[8] = h * z + f * R + m * j, t[9] = c * z + l * R + d * j, t[10] = s * z + v * R + x * j, t[11] = M * z + b * R + p * j, a !== t && (t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t)
      },
      rotateX: function (t, n, a) {
        var r = Math.sin(a),
          u = Math.cos(a),
          e = n[4],
          o = n[5],
          i = n[6],
          h = n[7],
          c = n[8],
          s = n[9],
          M = n[10],
          f = n[11];
        return n !== t && (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[4] = e * u + c * r, t[5] = o * u + s * r, t[6] = i * u + M * r, t[7] = h * u + f * r, t[8] = c * u - e * r, t[9] = s * u - o * r, t[10] = M * u - i * r, t[11] = f * u - h * r, t
      },
      rotateY: function (t, n, a) {
        var r = Math.sin(a),
          u = Math.cos(a),
          e = n[0],
          o = n[1],
          i = n[2],
          h = n[3],
          c = n[8],
          s = n[9],
          M = n[10],
          f = n[11];
        return n !== t && (t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = e * u - c * r, t[1] = o * u - s * r, t[2] = i * u - M * r, t[3] = h * u - f * r, t[8] = e * r + c * u, t[9] = o * r + s * u, t[10] = i * r + M * u, t[11] = h * r + f * u, t
      },
      rotateZ: function (t, n, a) {
        var r = Math.sin(a),
          u = Math.cos(a),
          e = n[0],
          o = n[1],
          i = n[2],
          h = n[3],
          c = n[4],
          s = n[5],
          M = n[6],
          f = n[7];
        return n !== t && (t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = e * u + c * r, t[1] = o * u + s * r, t[2] = i * u + M * r, t[3] = h * u + f * r, t[4] = c * u - e * r, t[5] = s * u - o * r, t[6] = M * u - i * r, t[7] = f * u - h * r, t
      },
      fromTranslation: function (t, n) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t
      },
      fromScaling: function (t, n) {
        return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = n[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
      },
      fromRotation: function (t, a, r) {
        var u, e, o, i = r[0],
          h = r[1],
          c = r[2],
          s = Math.hypot(i, h, c);
        return s < n ? null : (i *= s = 1 / s, h *= s, c *= s, u = Math.sin(a), o = 1 - (e = Math.cos(a)), t[0] = i * i * o + e, t[1] = h * i * o + c * u, t[2] = c * i * o - h * u, t[3] = 0, t[4] = i * h * o - c * u, t[5] = h * h * o + e, t[6] = c * h * o + i * u, t[7] = 0, t[8] = i * c * o + h * u, t[9] = h * c * o - i * u, t[10] = c * c * o + e, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t)
      },
      fromXRotation: function (t, n) {
        var a = Math.sin(n),
          r = Math.cos(n);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = r, t[6] = a, t[7] = 0, t[8] = 0, t[9] = -a, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
      },
      fromYRotation: function (t, n) {
        var a = Math.sin(n),
          r = Math.cos(n);
        return t[0] = r, t[1] = 0, t[2] = -a, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = a, t[9] = 0, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
      },
      fromZRotation: function (t, n) {
        var a = Math.sin(n),
          r = Math.cos(n);
        return t[0] = r, t[1] = a, t[2] = 0, t[3] = 0, t[4] = -a, t[5] = r, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
      },
      fromRotationTranslation: A,
      fromQuat2: function (t, n) {
        var r = new a(3),
          u = -n[0],
          e = -n[1],
          o = -n[2],
          i = n[3],
          h = n[4],
          c = n[5],
          s = n[6],
          M = n[7],
          f = u * u + e * e + o * o + i * i;
        return f > 0 ? (r[0] = 2 * (h * i + M * u + c * o - s * e) / f, r[1] = 2 * (c * i + M * e + s * u - h * o) / f, r[2] = 2 * (s * i + M * o + h * e - c * u) / f) : (r[0] = 2 * (h * i + M * u + c * o - s * e), r[1] = 2 * (c * i + M * e + s * u - h * o), r[2] = 2 * (s * i + M * o + h * e - c * u)), A(t, n, r), t
      },
      getTranslation: w,
      getScaling: z,
      getRotation: R,
      decompose: function (t, n, a, r) {
        n[0] = r[12], n[1] = r[13], n[2] = r[14];
        var u = r[0],
          e = r[1],
          o = r[2],
          i = r[4],
          h = r[5],
          c = r[6],
          s = r[8],
          M = r[9],
          f = r[10];
        a[0] = Math.hypot(u, e, o), a[1] = Math.hypot(i, h, c), a[2] = Math.hypot(s, M, f);
        var l = 1 / a[0],
          v = 1 / a[1],
          b = 1 / a[2],
          m = u * l,
          d = e * v,
          x = o * b,
          p = i * l,
          y = h * v,
          q = c * b,
          g = s * l,
          _ = M * v,
          A = f * b,
          w = m + y + A,
          z = 0;
        return w > 0 ? (z = 2 * Math.sqrt(w + 1), t[3] = .25 * z, t[0] = (q - _) / z, t[1] = (g - x) / z, t[2] = (d - p) / z) : m > y && m > A ? (z = 2 * Math.sqrt(1 + m - y - A), t[3] = (q - _) / z, t[0] = .25 * z, t[1] = (d + p) / z, t[2] = (g + x) / z) : y > A ? (z = 2 * Math.sqrt(1 + y - m - A), t[3] = (g - x) / z, t[0] = (d + p) / z, t[1] = .25 * z, t[2] = (q + _) / z) : (z = 2 * Math.sqrt(1 + A - m - y), t[3] = (d - p) / z, t[0] = (g + x) / z, t[1] = (q + _) / z, t[2] = .25 * z), t
      },
      fromRotationTranslationScale: function (t, n, a, r) {
        var u = n[0],
          e = n[1],
          o = n[2],
          i = n[3],
          h = u + u,
          c = e + e,
          s = o + o,
          M = u * h,
          f = u * c,
          l = u * s,
          v = e * c,
          b = e * s,
          m = o * s,
          d = i * h,
          x = i * c,
          p = i * s,
          y = r[0],
          q = r[1],
          g = r[2];
        return t[0] = (1 - (v + m)) * y, t[1] = (f + p) * y, t[2] = (l - x) * y, t[3] = 0, t[4] = (f - p) * q, t[5] = (1 - (M + m)) * q, t[6] = (b + d) * q, t[7] = 0, t[8] = (l + x) * g, t[9] = (b - d) * g, t[10] = (1 - (M + v)) * g, t[11] = 0, t[12] = a[0], t[13] = a[1], t[14] = a[2], t[15] = 1, t
      },
      fromRotationTranslationScaleOrigin: function (t, n, a, r, u) {
        var e = n[0],
          o = n[1],
          i = n[2],
          h = n[3],
          c = e + e,
          s = o + o,
          M = i + i,
          f = e * c,
          l = e * s,
          v = e * M,
          b = o * s,
          m = o * M,
          d = i * M,
          x = h * c,
          p = h * s,
          y = h * M,
          q = r[0],
          g = r[1],
          _ = r[2],
          A = u[0],
          w = u[1],
          z = u[2],
          R = (1 - (b + d)) * q,
          j = (l + y) * q,
          P = (v - p) * q,
          T = (l - y) * g,
          S = (1 - (f + d)) * g,
          E = (m + x) * g,
          O = (v + p) * _,
          D = (m - x) * _,
          F = (1 - (f + b)) * _;
        return t[0] = R, t[1] = j, t[2] = P, t[3] = 0, t[4] = T, t[5] = S, t[6] = E, t[7] = 0, t[8] = O, t[9] = D, t[10] = F, t[11] = 0, t[12] = a[0] + A - (R * A + T * w + O * z), t[13] = a[1] + w - (j * A + S * w + D * z), t[14] = a[2] + z - (P * A + E * w + F * z), t[15] = 1, t
      },
      fromQuat: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = a + a,
          i = r + r,
          h = u + u,
          c = a * o,
          s = r * o,
          M = r * i,
          f = u * o,
          l = u * i,
          v = u * h,
          b = e * o,
          m = e * i,
          d = e * h;
        return t[0] = 1 - M - v, t[1] = s + d, t[2] = f - m, t[3] = 0, t[4] = s - d, t[5] = 1 - c - v, t[6] = l + b, t[7] = 0, t[8] = f + m, t[9] = l - b, t[10] = 1 - c - M, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
      },
      frustum: function (t, n, a, r, u, e, o) {
        var i = 1 / (a - n),
          h = 1 / (u - r),
          c = 1 / (e - o);
        return t[0] = 2 * e * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * e * h, t[6] = 0, t[7] = 0, t[8] = (a + n) * i, t[9] = (u + r) * h, t[10] = (o + e) * c, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = o * e * 2 * c, t[15] = 0, t
      },
      perspective: function (t, n, a, r, u) {
        var e, o = 1 / Math.tan(n / 2);
        return t[0] = o / a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, null != u && u !== 1 / 0 ? (e = 1 / (r - u), t[10] = (u + r) * e, t[14] = 2 * u * r * e) : (t[10] = -1, t[14] = -2 * r), t
      },
      perspectiveFromFieldOfView: function (t, n, a, r) {
        var u = Math.tan(n.upDegrees * Math.PI / 180),
          e = Math.tan(n.downDegrees * Math.PI / 180),
          o = Math.tan(n.leftDegrees * Math.PI / 180),
          i = Math.tan(n.rightDegrees * Math.PI / 180),
          h = 2 / (o + i),
          c = 2 / (u + e);
        return t[0] = h, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = c, t[6] = 0, t[7] = 0, t[8] = -(o - i) * h * .5, t[9] = (u - e) * c * .5, t[10] = r / (a - r), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = r * a / (a - r), t[15] = 0, t
      },
      ortho: function (t, n, a, r, u, e, o) {
        var i = 1 / (n - a),
          h = 1 / (r - u),
          c = 1 / (e - o);
        return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * h, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * c, t[11] = 0, t[12] = (n + a) * i, t[13] = (u + r) * h, t[14] = (o + e) * c, t[15] = 1, t
      },
      lookAt: function (t, a, r, u) {
        var e, o, i, h, c, s, M, f, l, v, b = a[0],
          m = a[1],
          d = a[2],
          x = u[0],
          p = u[1],
          y = u[2],
          q = r[0],
          _ = r[1],
          A = r[2];
        return Math.abs(b - q) < n && Math.abs(m - _) < n && Math.abs(d - A) < n ? g(t) : (M = b - q, f = m - _, l = d - A, e = p * (l *= v = 1 / Math.hypot(M, f, l)) - y * (f *= v), o = y * (M *= v) - x * l, i = x * f - p * M, (v = Math.hypot(e, o, i)) ? (e *= v = 1 / v, o *= v, i *= v) : (e = 0, o = 0, i = 0), h = f * i - l * o, c = l * e - M * i, s = M * o - f * e, (v = Math.hypot(h, c, s)) ? (h *= v = 1 / v, c *= v, s *= v) : (h = 0, c = 0, s = 0), t[0] = e, t[1] = h, t[2] = M, t[3] = 0, t[4] = o, t[5] = c, t[6] = f, t[7] = 0, t[8] = i, t[9] = s, t[10] = l, t[11] = 0, t[12] = -(e * b + o * m + i * d), t[13] = -(h * b + c * m + s * d), t[14] = -(M * b + f * m + l * d), t[15] = 1, t)
      },
      targetTo: function (t, n, a, r) {
        var u = n[0],
          e = n[1],
          o = n[2],
          i = r[0],
          h = r[1],
          c = r[2],
          s = u - a[0],
          M = e - a[1],
          f = o - a[2],
          l = s * s + M * M + f * f;
        l > 0 && (s *= l = 1 / Math.sqrt(l), M *= l, f *= l);
        var v = h * f - c * M,
          b = c * s - i * f,
          m = i * M - h * s;
        return (l = v * v + b * b + m * m) > 0 && (v *= l = 1 / Math.sqrt(l), b *= l, m *= l), t[0] = v, t[1] = b, t[2] = m, t[3] = 0, t[4] = M * m - f * b, t[5] = f * v - s * m, t[6] = s * b - M * v, t[7] = 0, t[8] = s, t[9] = M, t[10] = f, t[11] = 0, t[12] = u, t[13] = e, t[14] = o, t[15] = 1, t
      },
      str: function (t) {
        return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
      },
      frob: function (t) {
        return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
      },
      add: function (t, n, a) {
        return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t[6] = n[6] + a[6], t[7] = n[7] + a[7], t[8] = n[8] + a[8], t[9] = n[9] + a[9], t[10] = n[10] + a[10], t[11] = n[11] + a[11], t[12] = n[12] + a[12], t[13] = n[13] + a[13], t[14] = n[14] + a[14], t[15] = n[15] + a[15], t
      },
      subtract: j,
      multiplyScalar: function (t, n, a) {
        return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = n[11] * a, t[12] = n[12] * a, t[13] = n[13] * a, t[14] = n[14] * a, t[15] = n[15] * a, t
      },
      multiplyScalarAndAdd: function (t, n, a, r) {
        return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t[4] = n[4] + a[4] * r, t[5] = n[5] + a[5] * r, t[6] = n[6] + a[6] * r, t[7] = n[7] + a[7] * r, t[8] = n[8] + a[8] * r, t[9] = n[9] + a[9] * r, t[10] = n[10] + a[10] * r, t[11] = n[11] + a[11] * r, t[12] = n[12] + a[12] * r, t[13] = n[13] + a[13] * r, t[14] = n[14] + a[14] * r, t[15] = n[15] + a[15] * r, t
      },
      exactEquals: function (t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8] && t[9] === n[9] && t[10] === n[10] && t[11] === n[11] && t[12] === n[12] && t[13] === n[13] && t[14] === n[14] && t[15] === n[15]
      },
      equals: function (t, a) {
        var r = t[0],
          u = t[1],
          e = t[2],
          o = t[3],
          i = t[4],
          h = t[5],
          c = t[6],
          s = t[7],
          M = t[8],
          f = t[9],
          l = t[10],
          v = t[11],
          b = t[12],
          m = t[13],
          d = t[14],
          x = t[15],
          p = a[0],
          y = a[1],
          q = a[2],
          g = a[3],
          _ = a[4],
          A = a[5],
          w = a[6],
          z = a[7],
          R = a[8],
          j = a[9],
          P = a[10],
          T = a[11],
          S = a[12],
          E = a[13],
          O = a[14],
          D = a[15];
        return Math.abs(r - p) <= n * Math.max(1, Math.abs(r), Math.abs(p)) && Math.abs(u - y) <= n * Math.max(1, Math.abs(u), Math.abs(y)) && Math.abs(e - q) <= n * Math.max(1, Math.abs(e), Math.abs(q)) && Math.abs(o - g) <= n * Math.max(1, Math.abs(o), Math.abs(g)) && Math.abs(i - _) <= n * Math.max(1, Math.abs(i), Math.abs(_)) && Math.abs(h - A) <= n * Math.max(1, Math.abs(h), Math.abs(A)) && Math.abs(c - w) <= n * Math.max(1, Math.abs(c), Math.abs(w)) && Math.abs(s - z) <= n * Math.max(1, Math.abs(s), Math.abs(z)) && Math.abs(M - R) <= n * Math.max(1, Math.abs(M), Math.abs(R)) && Math.abs(f - j) <= n * Math.max(1, Math.abs(f), Math.abs(j)) && Math.abs(l - P) <= n * Math.max(1, Math.abs(l), Math.abs(P)) && Math.abs(v - T) <= n * Math.max(1, Math.abs(v), Math.abs(T)) && Math.abs(b - S) <= n * Math.max(1, Math.abs(b), Math.abs(S)) && Math.abs(m - E) <= n * Math.max(1, Math.abs(m), Math.abs(E)) && Math.abs(d - O) <= n * Math.max(1, Math.abs(d), Math.abs(O)) && Math.abs(x - D) <= n * Math.max(1, Math.abs(x), Math.abs(D))
      },
      mul: P,
      sub: T
    });

  function E() {
    var t = new a(3);
    return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t
  }

  function O(t) {
    var n = t[0],
      a = t[1],
      r = t[2];
    return Math.hypot(n, a, r)
  }

  function D(t, n, r) {
    var u = new a(3);
    return u[0] = t, u[1] = n, u[2] = r, u
  }

  function F(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t
  }

  function I(t, n, a) {
    return t[0] = n[0] * a[0], t[1] = n[1] * a[1], t[2] = n[2] * a[2], t
  }

  function L(t, n, a) {
    return t[0] = n[0] / a[0], t[1] = n[1] / a[1], t[2] = n[2] / a[2], t
  }

  function V(t, n) {
    var a = n[0] - t[0],
      r = n[1] - t[1],
      u = n[2] - t[2];
    return Math.hypot(a, r, u)
  }

  function Q(t, n) {
    var a = n[0] - t[0],
      r = n[1] - t[1],
      u = n[2] - t[2];
    return a * a + r * r + u * u
  }

  function Y(t) {
    var n = t[0],
      a = t[1],
      r = t[2];
    return n * n + a * a + r * r
  }

  function k(t, n) {
    var a = n[0],
      r = n[1],
      u = n[2],
      e = a * a + r * r + u * u;
    return e > 0 && (e = 1 / Math.sqrt(e)), t[0] = n[0] * e, t[1] = n[1] * e, t[2] = n[2] * e, t
  }

  function X(t, n) {
    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
  }

  function Z(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = a[0],
      i = a[1],
      h = a[2];
    return t[0] = u * h - e * i, t[1] = e * o - r * h, t[2] = r * i - u * o, t
  }
  var B, N = F,
    C = I,
    U = L,
    W = V,
    G = Q,
    H = O,
    J = Y,
    K = (B = E(), function (t, n, a, r, u, e) {
      var o, i;
      for (n || (n = 3), a || (a = 0), i = r ? Math.min(r * n + a, t.length) : t.length, o = a; o < i; o += n) B[0] = t[o], B[1] = t[o + 1], B[2] = t[o + 2], u(B, B, e), t[o] = B[0], t[o + 1] = B[1], t[o + 2] = B[2];
      return t
    }),
    $ = Object.freeze({
      __proto__: null,
      create: E,
      clone: function (t) {
        var n = new a(3);
        return n[0] = t[0], n[1] = t[1], n[2] = t[2], n
      },
      length: O,
      fromValues: D,
      copy: function (t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t
      },
      set: function (t, n, a, r) {
        return t[0] = n, t[1] = a, t[2] = r, t
      },
      add: function (t, n, a) {
        return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t
      },
      subtract: F,
      multiply: I,
      divide: L,
      ceil: function (t, n) {
        return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t
      },
      floor: function (t, n) {
        return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t
      },
      min: function (t, n, a) {
        return t[0] = Math.min(n[0], a[0]), t[1] = Math.min(n[1], a[1]), t[2] = Math.min(n[2], a[2]), t
      },
      max: function (t, n, a) {
        return t[0] = Math.max(n[0], a[0]), t[1] = Math.max(n[1], a[1]), t[2] = Math.max(n[2], a[2]), t
      },
      round: function (t, n) {
        return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t
      },
      scale: function (t, n, a) {
        return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t
      },
      scaleAndAdd: function (t, n, a, r) {
        return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t
      },
      distance: V,
      squaredDistance: Q,
      squaredLength: Y,
      negate: function (t, n) {
        return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t
      },
      inverse: function (t, n) {
        return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t
      },
      normalize: k,
      dot: X,
      cross: Z,
      lerp: function (t, n, a, r) {
        var u = n[0],
          e = n[1],
          o = n[2];
        return t[0] = u + r * (a[0] - u), t[1] = e + r * (a[1] - e), t[2] = o + r * (a[2] - o), t
      },
      slerp: function (t, n, a, r) {
        var u = Math.acos(Math.min(Math.max(X(n, a), -1), 1)),
          e = Math.sin(u),
          o = Math.sin((1 - r) * u) / e,
          i = Math.sin(r * u) / e;
        return t[0] = o * n[0] + i * a[0], t[1] = o * n[1] + i * a[1], t[2] = o * n[2] + i * a[2], t
      },
      hermite: function (t, n, a, r, u, e) {
        var o = e * e,
          i = o * (2 * e - 3) + 1,
          h = o * (e - 2) + e,
          c = o * (e - 1),
          s = o * (3 - 2 * e);
        return t[0] = n[0] * i + a[0] * h + r[0] * c + u[0] * s, t[1] = n[1] * i + a[1] * h + r[1] * c + u[1] * s, t[2] = n[2] * i + a[2] * h + r[2] * c + u[2] * s, t
      },
      bezier: function (t, n, a, r, u, e) {
        var o = 1 - e,
          i = o * o,
          h = e * e,
          c = i * o,
          s = 3 * e * i,
          M = 3 * h * o,
          f = h * e;
        return t[0] = n[0] * c + a[0] * s + r[0] * M + u[0] * f, t[1] = n[1] * c + a[1] * s + r[1] * M + u[1] * f, t[2] = n[2] * c + a[2] * s + r[2] * M + u[2] * f, t
      },
      random: function (t, n) {
        n = n || 1;
        var a = 2 * r() * Math.PI,
          u = 2 * r() - 1,
          e = Math.sqrt(1 - u * u) * n;
        return t[0] = Math.cos(a) * e, t[1] = Math.sin(a) * e, t[2] = u * n, t
      },
      transformMat4: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = a[3] * r + a[7] * u + a[11] * e + a[15];
        return o = o || 1, t[0] = (a[0] * r + a[4] * u + a[8] * e + a[12]) / o, t[1] = (a[1] * r + a[5] * u + a[9] * e + a[13]) / o, t[2] = (a[2] * r + a[6] * u + a[10] * e + a[14]) / o, t
      },
      transformMat3: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2];
        return t[0] = r * a[0] + u * a[3] + e * a[6], t[1] = r * a[1] + u * a[4] + e * a[7], t[2] = r * a[2] + u * a[5] + e * a[8], t
      },
      transformQuat: function (t, n, a) {
        var r = a[0],
          u = a[1],
          e = a[2],
          o = a[3],
          i = n[0],
          h = n[1],
          c = n[2],
          s = u * c - e * h,
          M = e * i - r * c,
          f = r * h - u * i,
          l = u * f - e * M,
          v = e * s - r * f,
          b = r * M - u * s,
          m = 2 * o;
        return s *= m, M *= m, f *= m, l *= 2, v *= 2, b *= 2, t[0] = i + s + l, t[1] = h + M + v, t[2] = c + f + b, t
      },
      rotateX: function (t, n, a, r) {
        var u = [],
          e = [];
        return u[0] = n[0] - a[0], u[1] = n[1] - a[1], u[2] = n[2] - a[2], e[0] = u[0], e[1] = u[1] * Math.cos(r) - u[2] * Math.sin(r), e[2] = u[1] * Math.sin(r) + u[2] * Math.cos(r), t[0] = e[0] + a[0], t[1] = e[1] + a[1], t[2] = e[2] + a[2], t
      },
      rotateY: function (t, n, a, r) {
        var u = [],
          e = [];
        return u[0] = n[0] - a[0], u[1] = n[1] - a[1], u[2] = n[2] - a[2], e[0] = u[2] * Math.sin(r) + u[0] * Math.cos(r), e[1] = u[1], e[2] = u[2] * Math.cos(r) - u[0] * Math.sin(r), t[0] = e[0] + a[0], t[1] = e[1] + a[1], t[2] = e[2] + a[2], t
      },
      rotateZ: function (t, n, a, r) {
        var u = [],
          e = [];
        return u[0] = n[0] - a[0], u[1] = n[1] - a[1], u[2] = n[2] - a[2], e[0] = u[0] * Math.cos(r) - u[1] * Math.sin(r), e[1] = u[0] * Math.sin(r) + u[1] * Math.cos(r), e[2] = u[2], t[0] = e[0] + a[0], t[1] = e[1] + a[1], t[2] = e[2] + a[2], t
      },
      angle: function (t, n) {
        var a = t[0],
          r = t[1],
          u = t[2],
          e = n[0],
          o = n[1],
          i = n[2],
          h = Math.sqrt(a * a + r * r + u * u) * Math.sqrt(e * e + o * o + i * i),
          c = h && X(t, n) / h;
        return Math.acos(Math.min(Math.max(c, -1), 1))
      },
      zero: function (t) {
        return t[0] = 0, t[1] = 0, t[2] = 0, t
      },
      str: function (t) {
        return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
      },
      exactEquals: function (t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2]
      },
      equals: function (t, a) {
        var r = t[0],
          u = t[1],
          e = t[2],
          o = a[0],
          i = a[1],
          h = a[2];
        return Math.abs(r - o) <= n * Math.max(1, Math.abs(r), Math.abs(o)) && Math.abs(u - i) <= n * Math.max(1, Math.abs(u), Math.abs(i)) && Math.abs(e - h) <= n * Math.max(1, Math.abs(e), Math.abs(h))
      },
      sub: N,
      mul: C,
      div: U,
      dist: W,
      sqrDist: G,
      len: H,
      sqrLen: J,
      forEach: K
    });

  function tt() {
    var t = new a(4);
    return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0), t
  }

  function nt(t) {
    var n = new a(4);
    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n
  }

  function at(t, n, r, u) {
    var e = new a(4);
    return e[0] = t, e[1] = n, e[2] = r, e[3] = u, e
  }

  function rt(t, n) {
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t
  }

  function ut(t, n, a, r, u) {
    return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t
  }

  function et(t, n, a) {
    return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t
  }

  function ot(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t
  }

  function it(t, n, a) {
    return t[0] = n[0] * a[0], t[1] = n[1] * a[1], t[2] = n[2] * a[2], t[3] = n[3] * a[3], t
  }

  function ht(t, n, a) {
    return t[0] = n[0] / a[0], t[1] = n[1] / a[1], t[2] = n[2] / a[2], t[3] = n[3] / a[3], t
  }

  function ct(t, n, a) {
    return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t
  }

  function st(t, n) {
    var a = n[0] - t[0],
      r = n[1] - t[1],
      u = n[2] - t[2],
      e = n[3] - t[3];
    return Math.hypot(a, r, u, e)
  }

  function Mt(t, n) {
    var a = n[0] - t[0],
      r = n[1] - t[1],
      u = n[2] - t[2],
      e = n[3] - t[3];
    return a * a + r * r + u * u + e * e
  }

  function ft(t) {
    var n = t[0],
      a = t[1],
      r = t[2],
      u = t[3];
    return Math.hypot(n, a, r, u)
  }

  function lt(t) {
    var n = t[0],
      a = t[1],
      r = t[2],
      u = t[3];
    return n * n + a * a + r * r + u * u
  }

  function vt(t, n) {
    var a = n[0],
      r = n[1],
      u = n[2],
      e = n[3],
      o = a * a + r * r + u * u + e * e;
    return o > 0 && (o = 1 / Math.sqrt(o)), t[0] = a * o, t[1] = r * o, t[2] = u * o, t[3] = e * o, t
  }

  function bt(t, n) {
    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3]
  }

  function mt(t, n, a, r) {
    var u = n[0],
      e = n[1],
      o = n[2],
      i = n[3];
    return t[0] = u + r * (a[0] - u), t[1] = e + r * (a[1] - e), t[2] = o + r * (a[2] - o), t[3] = i + r * (a[3] - i), t
  }

  function dt(t, n) {
    return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
  }

  function xt(t, a) {
    var r = t[0],
      u = t[1],
      e = t[2],
      o = t[3],
      i = a[0],
      h = a[1],
      c = a[2],
      s = a[3];
    return Math.abs(r - i) <= n * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(u - h) <= n * Math.max(1, Math.abs(u), Math.abs(h)) && Math.abs(e - c) <= n * Math.max(1, Math.abs(e), Math.abs(c)) && Math.abs(o - s) <= n * Math.max(1, Math.abs(o), Math.abs(s))
  }
  var pt = ot,
    yt = it,
    qt = ht,
    gt = st,
    _t = Mt,
    At = ft,
    wt = lt,
    zt = function () {
      var t = tt();
      return function (n, a, r, u, e, o) {
        var i, h;
        for (a || (a = 4), r || (r = 0), h = u ? Math.min(u * a + r, n.length) : n.length, i = r; i < h; i += a) t[0] = n[i], t[1] = n[i + 1], t[2] = n[i + 2], t[3] = n[i + 3], e(t, t, o), n[i] = t[0], n[i + 1] = t[1], n[i + 2] = t[2], n[i + 3] = t[3];
        return n
      }
    }(),
    Rt = Object.freeze({
      __proto__: null,
      create: tt,
      clone: nt,
      fromValues: at,
      copy: rt,
      set: ut,
      add: et,
      subtract: ot,
      multiply: it,
      divide: ht,
      ceil: function (t, n) {
        return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t[3] = Math.ceil(n[3]), t
      },
      floor: function (t, n) {
        return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t[3] = Math.floor(n[3]), t
      },
      min: function (t, n, a) {
        return t[0] = Math.min(n[0], a[0]), t[1] = Math.min(n[1], a[1]), t[2] = Math.min(n[2], a[2]), t[3] = Math.min(n[3], a[3]), t
      },
      max: function (t, n, a) {
        return t[0] = Math.max(n[0], a[0]), t[1] = Math.max(n[1], a[1]), t[2] = Math.max(n[2], a[2]), t[3] = Math.max(n[3], a[3]), t
      },
      round: function (t, n) {
        return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t[3] = Math.round(n[3]), t
      },
      scale: ct,
      scaleAndAdd: function (t, n, a, r) {
        return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t
      },
      distance: st,
      squaredDistance: Mt,
      length: ft,
      squaredLength: lt,
      negate: function (t, n) {
        return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = -n[3], t
      },
      inverse: function (t, n) {
        return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t[3] = 1 / n[3], t
      },
      normalize: vt,
      dot: bt,
      cross: function (t, n, a, r) {
        var u = a[0] * r[1] - a[1] * r[0],
          e = a[0] * r[2] - a[2] * r[0],
          o = a[0] * r[3] - a[3] * r[0],
          i = a[1] * r[2] - a[2] * r[1],
          h = a[1] * r[3] - a[3] * r[1],
          c = a[2] * r[3] - a[3] * r[2],
          s = n[0],
          M = n[1],
          f = n[2],
          l = n[3];
        return t[0] = M * c - f * h + l * i, t[1] = -s * c + f * o - l * e, t[2] = s * h - M * o + l * u, t[3] = -s * i + M * e - f * u, t
      },
      lerp: mt,
      random: function (t, n) {
        var a, u, e, o, i, h;
        n = n || 1;
        do {
          i = (a = 2 * r() - 1) * a + (u = 2 * r() - 1) * u
        } while (i >= 1);
        do {
          h = (e = 2 * r() - 1) * e + (o = 2 * r() - 1) * o
        } while (h >= 1);
        var c = Math.sqrt((1 - i) / h);
        return t[0] = n * a, t[1] = n * u, t[2] = n * e * c, t[3] = n * o * c, t
      },
      transformMat4: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3];
        return t[0] = a[0] * r + a[4] * u + a[8] * e + a[12] * o, t[1] = a[1] * r + a[5] * u + a[9] * e + a[13] * o, t[2] = a[2] * r + a[6] * u + a[10] * e + a[14] * o, t[3] = a[3] * r + a[7] * u + a[11] * e + a[15] * o, t
      },
      transformQuat: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = a[0],
          i = a[1],
          h = a[2],
          c = a[3],
          s = c * r + i * e - h * u,
          M = c * u + h * r - o * e,
          f = c * e + o * u - i * r,
          l = -o * r - i * u - h * e;
        return t[0] = s * c + l * -o + M * -h - f * -i, t[1] = M * c + l * -i + f * -o - s * -h, t[2] = f * c + l * -h + s * -i - M * -o, t[3] = n[3], t
      },
      zero: function (t) {
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
      },
      str: function (t) {
        return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
      },
      exactEquals: dt,
      equals: xt,
      sub: pt,
      mul: yt,
      div: qt,
      dist: gt,
      sqrDist: _t,
      len: At,
      sqrLen: wt,
      forEach: zt
    });

  function jt() {
    var t = new a(4);
    return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t[3] = 1, t
  }

  function Pt(t, n, a) {
    a *= .5;
    var r = Math.sin(a);
    return t[0] = r * n[0], t[1] = r * n[1], t[2] = r * n[2], t[3] = Math.cos(a), t
  }

  function Tt(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = a[0],
      h = a[1],
      c = a[2],
      s = a[3];
    return t[0] = r * s + o * i + u * c - e * h, t[1] = u * s + o * h + e * i - r * c, t[2] = e * s + o * c + r * h - u * i, t[3] = o * s - r * i - u * h - e * c, t
  }

  function St(t, n, a) {
    a *= .5;
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = Math.sin(a),
      h = Math.cos(a);
    return t[0] = r * h + o * i, t[1] = u * h + e * i, t[2] = e * h - u * i, t[3] = o * h - r * i, t
  }

  function Et(t, n, a) {
    a *= .5;
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = Math.sin(a),
      h = Math.cos(a);
    return t[0] = r * h - e * i, t[1] = u * h + o * i, t[2] = e * h + r * i, t[3] = o * h - u * i, t
  }

  function Ot(t, n, a) {
    a *= .5;
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = Math.sin(a),
      h = Math.cos(a);
    return t[0] = r * h + u * i, t[1] = u * h - r * i, t[2] = e * h + o * i, t[3] = o * h - e * i, t
  }

  function Dt(t, n) {
    var a = n[0],
      r = n[1],
      u = n[2],
      e = n[3],
      o = Math.sqrt(a * a + r * r + u * u),
      i = Math.exp(e),
      h = o > 0 ? i * Math.sin(o) / o : 0;
    return t[0] = a * h, t[1] = r * h, t[2] = u * h, t[3] = i * Math.cos(o), t
  }

  function Ft(t, n) {
    var a = n[0],
      r = n[1],
      u = n[2],
      e = n[3],
      o = Math.sqrt(a * a + r * r + u * u),
      i = o > 0 ? Math.atan2(o, e) / o : 0;
    return t[0] = a * i, t[1] = r * i, t[2] = u * i, t[3] = .5 * Math.log(a * a + r * r + u * u + e * e), t
  }

  function It(t, a, r, u) {
    var e, o, i, h, c, s = a[0],
      M = a[1],
      f = a[2],
      l = a[3],
      v = r[0],
      b = r[1],
      m = r[2],
      d = r[3];
    return (o = s * v + M * b + f * m + l * d) < 0 && (o = -o, v = -v, b = -b, m = -m, d = -d), 1 - o > n ? (e = Math.acos(o), i = Math.sin(e), h = Math.sin((1 - u) * e) / i, c = Math.sin(u * e) / i) : (h = 1 - u, c = u), t[0] = h * s + c * v, t[1] = h * M + c * b, t[2] = h * f + c * m, t[3] = h * l + c * d, t
  }

  function Lt(t, n) {
    var a, r = n[0] + n[4] + n[8];
    if (r > 0) a = Math.sqrt(r + 1), t[3] = .5 * a, a = .5 / a, t[0] = (n[5] - n[7]) * a, t[1] = (n[6] - n[2]) * a, t[2] = (n[1] - n[3]) * a;
    else {
      var u = 0;
      n[4] > n[0] && (u = 1), n[8] > n[3 * u + u] && (u = 2);
      var e = (u + 1) % 3,
        o = (u + 2) % 3;
      a = Math.sqrt(n[3 * u + u] - n[3 * e + e] - n[3 * o + o] + 1), t[u] = .5 * a, a = .5 / a, t[3] = (n[3 * e + o] - n[3 * o + e]) * a, t[e] = (n[3 * e + u] + n[3 * u + e]) * a, t[o] = (n[3 * o + u] + n[3 * u + o]) * a
    }
    return t
  }
  var Vt, Qt, Yt, kt, Xt, Zt, Bt = nt,
    Nt = at,
    Ct = rt,
    Ut = ut,
    Wt = et,
    Gt = Tt,
    Ht = ct,
    Jt = bt,
    Kt = mt,
    $t = ft,
    tn = $t,
    nn = lt,
    an = nn,
    rn = vt,
    un = dt,
    en = xt,
    on = (Vt = E(), Qt = D(1, 0, 0), Yt = D(0, 1, 0), function (t, n, a) {
      var r = X(n, a);
      return r < -.999999 ? (Z(Vt, Qt, n), H(Vt) < 1e-6 && Z(Vt, Yt, n), k(Vt, Vt), Pt(t, Vt, Math.PI), t) : r > .999999 ? (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t) : (Z(Vt, n, a), t[0] = Vt[0], t[1] = Vt[1], t[2] = Vt[2], t[3] = 1 + r, rn(t, t))
    }),
    hn = (kt = jt(), Xt = jt(), function (t, n, a, r, u, e) {
      return It(kt, n, u, e), It(Xt, a, r, e), It(t, kt, Xt, 2 * e * (1 - e)), t
    }),
    cn = (Zt = m(), function (t, n, a, r) {
      return Zt[0] = a[0], Zt[3] = a[1], Zt[6] = a[2], Zt[1] = r[0], Zt[4] = r[1], Zt[7] = r[2], Zt[2] = -n[0], Zt[5] = -n[1], Zt[8] = -n[2], rn(t, Lt(t, Zt))
    }),
    sn = Object.freeze({
      __proto__: null,
      create: jt,
      identity: function (t) {
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
      },
      setAxisAngle: Pt,
      getAxisAngle: function (t, a) {
        var r = 2 * Math.acos(a[3]),
          u = Math.sin(r / 2);
        return u > n ? (t[0] = a[0] / u, t[1] = a[1] / u, t[2] = a[2] / u) : (t[0] = 1, t[1] = 0, t[2] = 0), r
      },
      getAngle: function (t, n) {
        var a = Jt(t, n);
        return Math.acos(2 * a * a - 1)
      },
      multiply: Tt,
      rotateX: St,
      rotateY: Et,
      rotateZ: Ot,
      calculateW: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2];
        return t[0] = a, t[1] = r, t[2] = u, t[3] = Math.sqrt(Math.abs(1 - a * a - r * r - u * u)), t
      },
      exp: Dt,
      ln: Ft,
      pow: function (t, n, a) {
        return Ft(t, n), Ht(t, t, a), Dt(t, t), t
      },
      slerp: It,
      random: function (t) {
        var n = r(),
          a = r(),
          u = r(),
          e = Math.sqrt(1 - n),
          o = Math.sqrt(n);
        return t[0] = e * Math.sin(2 * Math.PI * a), t[1] = e * Math.cos(2 * Math.PI * a), t[2] = o * Math.sin(2 * Math.PI * u), t[3] = o * Math.cos(2 * Math.PI * u), t
      },
      invert: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = a * a + r * r + u * u + e * e,
          i = o ? 1 / o : 0;
        return t[0] = -a * i, t[1] = -r * i, t[2] = -u * i, t[3] = e * i, t
      },
      conjugate: function (t, n) {
        return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t
      },
      fromMat3: Lt,
      fromEuler: function (t, n, a, r) {
        var u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "zyx",
          e = .5 * Math.PI / 180;
        n *= e, r *= e, a *= e;
        var o = Math.sin(n),
          i = Math.cos(n),
          h = Math.sin(a),
          c = Math.cos(a),
          s = Math.sin(r),
          M = Math.cos(r);
        switch ("string" != typeof u && (u = "zyx"), u.toLowerCase()) {
          case "xyz":
            t[0] = o * c * M + i * h * s, t[1] = i * h * M - o * c * s, t[2] = i * c * s + o * h * M, t[3] = i * c * M - o * h * s;
            break;
          case "xzy":
            t[0] = o * c * M - i * h * s, t[1] = i * h * M - o * c * s, t[2] = i * c * s + o * h * M, t[3] = i * c * M + o * h * s;
            break;
          case "yxz":
            t[0] = o * c * M + i * h * s, t[1] = i * h * M - o * c * s, t[2] = i * c * s - o * h * M, t[3] = i * c * M + o * h * s;
            break;
          case "yzx":
            t[0] = o * c * M + i * h * s, t[1] = i * h * M + o * c * s, t[2] = i * c * s - o * h * M, t[3] = i * c * M - o * h * s;
            break;
          case "zxy":
            t[0] = o * c * M - i * h * s, t[1] = i * h * M + o * c * s, t[2] = i * c * s + o * h * M, t[3] = i * c * M - o * h * s;
            break;
          case "zyx":
          default:
            t[0] = o * c * M - i * h * s, t[1] = i * h * M + o * c * s, t[2] = i * c * s - o * h * M, t[3] = i * c * M + o * h * s
        }
        return t
      },
      str: function (t) {
        return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
      },
      clone: Bt,
      fromValues: Nt,
      copy: Ct,
      set: Ut,
      add: Wt,
      mul: Gt,
      scale: Ht,
      dot: Jt,
      lerp: Kt,
      length: $t,
      len: tn,
      squaredLength: nn,
      sqrLen: an,
      normalize: rn,
      exactEquals: un,
      equals: en,
      rotationTo: on,
      sqlerp: hn,
      setAxes: cn
    });

  function Mn(t, n, a) {
    var r = .5 * a[0],
      u = .5 * a[1],
      e = .5 * a[2],
      o = n[0],
      i = n[1],
      h = n[2],
      c = n[3];
    return t[0] = o, t[1] = i, t[2] = h, t[3] = c, t[4] = r * c + u * h - e * i, t[5] = u * c + e * o - r * h, t[6] = e * c + r * i - u * o, t[7] = -r * o - u * i - e * h, t
  }

  function fn(t, n) {
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t
  }
  var ln = Ct;
  var vn = Ct;

  function bn(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = a[4],
      h = a[5],
      c = a[6],
      s = a[7],
      M = n[4],
      f = n[5],
      l = n[6],
      v = n[7],
      b = a[0],
      m = a[1],
      d = a[2],
      x = a[3];
    return t[0] = r * x + o * b + u * d - e * m, t[1] = u * x + o * m + e * b - r * d, t[2] = e * x + o * d + r * m - u * b, t[3] = o * x - r * b - u * m - e * d, t[4] = r * s + o * i + u * c - e * h + M * x + v * b + f * d - l * m, t[5] = u * s + o * h + e * i - r * c + f * x + v * m + l * b - M * d, t[6] = e * s + o * c + r * h - u * i + l * x + v * d + M * m - f * b, t[7] = o * s - r * i - u * h - e * c + v * x - M * b - f * m - l * d, t
  }
  var mn = bn;
  var dn = Jt;
  var xn = $t,
    pn = xn,
    yn = nn,
    qn = yn;
  var gn = Object.freeze({
    __proto__: null,
    create: function () {
      var t = new a(8);
      return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0), t[3] = 1, t
    },
    clone: function (t) {
      var n = new a(8);
      return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n
    },
    fromValues: function (t, n, r, u, e, o, i, h) {
      var c = new a(8);
      return c[0] = t, c[1] = n, c[2] = r, c[3] = u, c[4] = e, c[5] = o, c[6] = i, c[7] = h, c
    },
    fromRotationTranslationValues: function (t, n, r, u, e, o, i) {
      var h = new a(8);
      h[0] = t, h[1] = n, h[2] = r, h[3] = u;
      var c = .5 * e,
        s = .5 * o,
        M = .5 * i;
      return h[4] = c * u + s * r - M * n, h[5] = s * u + M * t - c * r, h[6] = M * u + c * n - s * t, h[7] = -c * t - s * n - M * r, h
    },
    fromRotationTranslation: Mn,
    fromTranslation: function (t, n) {
      return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = .5 * n[0], t[5] = .5 * n[1], t[6] = .5 * n[2], t[7] = 0, t
    },
    fromRotation: function (t, n) {
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t
    },
    fromMat4: function (t, n) {
      var r = jt();
      R(r, n);
      var u = new a(3);
      return w(u, n), Mn(t, r, u), t
    },
    copy: fn,
    identity: function (t) {
      return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t
    },
    set: function (t, n, a, r, u, e, o, i, h) {
      return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t[6] = i, t[7] = h, t
    },
    getReal: ln,
    getDual: function (t, n) {
      return t[0] = n[4], t[1] = n[5], t[2] = n[6], t[3] = n[7], t
    },
    setReal: vn,
    setDual: function (t, n) {
      return t[4] = n[0], t[5] = n[1], t[6] = n[2], t[7] = n[3], t
    },
    getTranslation: function (t, n) {
      var a = n[4],
        r = n[5],
        u = n[6],
        e = n[7],
        o = -n[0],
        i = -n[1],
        h = -n[2],
        c = n[3];
      return t[0] = 2 * (a * c + e * o + r * h - u * i), t[1] = 2 * (r * c + e * i + u * o - a * h), t[2] = 2 * (u * c + e * h + a * i - r * o), t
    },
    translate: function (t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = .5 * a[0],
        h = .5 * a[1],
        c = .5 * a[2],
        s = n[4],
        M = n[5],
        f = n[6],
        l = n[7];
      return t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = o * i + u * c - e * h + s, t[5] = o * h + e * i - r * c + M, t[6] = o * c + r * h - u * i + f, t[7] = -r * i - u * h - e * c + l, t
    },
    rotateX: function (t, n, a) {
      var r = -n[0],
        u = -n[1],
        e = -n[2],
        o = n[3],
        i = n[4],
        h = n[5],
        c = n[6],
        s = n[7],
        M = i * o + s * r + h * e - c * u,
        f = h * o + s * u + c * r - i * e,
        l = c * o + s * e + i * u - h * r,
        v = s * o - i * r - h * u - c * e;
      return St(t, n, a), r = t[0], u = t[1], e = t[2], o = t[3], t[4] = M * o + v * r + f * e - l * u, t[5] = f * o + v * u + l * r - M * e, t[6] = l * o + v * e + M * u - f * r, t[7] = v * o - M * r - f * u - l * e, t
    },
    rotateY: function (t, n, a) {
      var r = -n[0],
        u = -n[1],
        e = -n[2],
        o = n[3],
        i = n[4],
        h = n[5],
        c = n[6],
        s = n[7],
        M = i * o + s * r + h * e - c * u,
        f = h * o + s * u + c * r - i * e,
        l = c * o + s * e + i * u - h * r,
        v = s * o - i * r - h * u - c * e;
      return Et(t, n, a), r = t[0], u = t[1], e = t[2], o = t[3], t[4] = M * o + v * r + f * e - l * u, t[5] = f * o + v * u + l * r - M * e, t[6] = l * o + v * e + M * u - f * r, t[7] = v * o - M * r - f * u - l * e, t
    },
    rotateZ: function (t, n, a) {
      var r = -n[0],
        u = -n[1],
        e = -n[2],
        o = n[3],
        i = n[4],
        h = n[5],
        c = n[6],
        s = n[7],
        M = i * o + s * r + h * e - c * u,
        f = h * o + s * u + c * r - i * e,
        l = c * o + s * e + i * u - h * r,
        v = s * o - i * r - h * u - c * e;
      return Ot(t, n, a), r = t[0], u = t[1], e = t[2], o = t[3], t[4] = M * o + v * r + f * e - l * u, t[5] = f * o + v * u + l * r - M * e, t[6] = l * o + v * e + M * u - f * r, t[7] = v * o - M * r - f * u - l * e, t
    },
    rotateByQuatAppend: function (t, n, a) {
      var r = a[0],
        u = a[1],
        e = a[2],
        o = a[3],
        i = n[0],
        h = n[1],
        c = n[2],
        s = n[3];
      return t[0] = i * o + s * r + h * e - c * u, t[1] = h * o + s * u + c * r - i * e, t[2] = c * o + s * e + i * u - h * r, t[3] = s * o - i * r - h * u - c * e, i = n[4], h = n[5], c = n[6], s = n[7], t[4] = i * o + s * r + h * e - c * u, t[5] = h * o + s * u + c * r - i * e, t[6] = c * o + s * e + i * u - h * r, t[7] = s * o - i * r - h * u - c * e, t
    },
    rotateByQuatPrepend: function (t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = a[0],
        h = a[1],
        c = a[2],
        s = a[3];
      return t[0] = r * s + o * i + u * c - e * h, t[1] = u * s + o * h + e * i - r * c, t[2] = e * s + o * c + r * h - u * i, t[3] = o * s - r * i - u * h - e * c, i = a[4], h = a[5], c = a[6], s = a[7], t[4] = r * s + o * i + u * c - e * h, t[5] = u * s + o * h + e * i - r * c, t[6] = e * s + o * c + r * h - u * i, t[7] = o * s - r * i - u * h - e * c, t
    },
    rotateAroundAxis: function (t, a, r, u) {
      if (Math.abs(u) < n) return fn(t, a);
      var e = Math.hypot(r[0], r[1], r[2]);
      u *= .5;
      var o = Math.sin(u),
        i = o * r[0] / e,
        h = o * r[1] / e,
        c = o * r[2] / e,
        s = Math.cos(u),
        M = a[0],
        f = a[1],
        l = a[2],
        v = a[3];
      t[0] = M * s + v * i + f * c - l * h, t[1] = f * s + v * h + l * i - M * c, t[2] = l * s + v * c + M * h - f * i, t[3] = v * s - M * i - f * h - l * c;
      var b = a[4],
        m = a[5],
        d = a[6],
        x = a[7];
      return t[4] = b * s + x * i + m * c - d * h, t[5] = m * s + x * h + d * i - b * c, t[6] = d * s + x * c + b * h - m * i, t[7] = x * s - b * i - m * h - d * c, t
    },
    add: function (t, n, a) {
      return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t[6] = n[6] + a[6], t[7] = n[7] + a[7], t
    },
    multiply: bn,
    mul: mn,
    scale: function (t, n, a) {
      return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t
    },
    dot: dn,
    lerp: function (t, n, a, r) {
      var u = 1 - r;
      return dn(n, a) < 0 && (r = -r), t[0] = n[0] * u + a[0] * r, t[1] = n[1] * u + a[1] * r, t[2] = n[2] * u + a[2] * r, t[3] = n[3] * u + a[3] * r, t[4] = n[4] * u + a[4] * r, t[5] = n[5] * u + a[5] * r, t[6] = n[6] * u + a[6] * r, t[7] = n[7] * u + a[7] * r, t
    },
    invert: function (t, n) {
      var a = yn(n);
      return t[0] = -n[0] / a, t[1] = -n[1] / a, t[2] = -n[2] / a, t[3] = n[3] / a, t[4] = -n[4] / a, t[5] = -n[5] / a, t[6] = -n[6] / a, t[7] = n[7] / a, t
    },
    conjugate: function (t, n) {
      return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t[4] = -n[4], t[5] = -n[5], t[6] = -n[6], t[7] = n[7], t
    },
    length: xn,
    len: pn,
    squaredLength: yn,
    sqrLen: qn,
    normalize: function (t, n) {
      var a = yn(n);
      if (a > 0) {
        a = Math.sqrt(a);
        var r = n[0] / a,
          u = n[1] / a,
          e = n[2] / a,
          o = n[3] / a,
          i = n[4],
          h = n[5],
          c = n[6],
          s = n[7],
          M = r * i + u * h + e * c + o * s;
        t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = (i - r * M) / a, t[5] = (h - u * M) / a, t[6] = (c - e * M) / a, t[7] = (s - o * M) / a
      }
      return t
    },
    str: function (t) {
      return "quat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ")"
    },
    exactEquals: function (t, n) {
      return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7]
    },
    equals: function (t, a) {
      var r = t[0],
        u = t[1],
        e = t[2],
        o = t[3],
        i = t[4],
        h = t[5],
        c = t[6],
        s = t[7],
        M = a[0],
        f = a[1],
        l = a[2],
        v = a[3],
        b = a[4],
        m = a[5],
        d = a[6],
        x = a[7];
      return Math.abs(r - M) <= n * Math.max(1, Math.abs(r), Math.abs(M)) && Math.abs(u - f) <= n * Math.max(1, Math.abs(u), Math.abs(f)) && Math.abs(e - l) <= n * Math.max(1, Math.abs(e), Math.abs(l)) && Math.abs(o - v) <= n * Math.max(1, Math.abs(o), Math.abs(v)) && Math.abs(i - b) <= n * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(h - m) <= n * Math.max(1, Math.abs(h), Math.abs(m)) && Math.abs(c - d) <= n * Math.max(1, Math.abs(c), Math.abs(d)) && Math.abs(s - x) <= n * Math.max(1, Math.abs(s), Math.abs(x))
    }
  });

  function _n() {
    var t = new a(2);
    return a != Float32Array && (t[0] = 0, t[1] = 0), t
  }

  function An(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t
  }

  function wn(t, n, a) {
    return t[0] = n[0] * a[0], t[1] = n[1] * a[1], t
  }

  function zn(t, n, a) {
    return t[0] = n[0] / a[0], t[1] = n[1] / a[1], t
  }

  function Rn(t, n) {
    var a = n[0] - t[0],
      r = n[1] - t[1];
    return Math.hypot(a, r)
  }

  function jn(t, n) {
    var a = n[0] - t[0],
      r = n[1] - t[1];
    return a * a + r * r
  }

  function Pn(t) {
    var n = t[0],
      a = t[1];
    return Math.hypot(n, a)
  }

  function Tn(t) {
    var n = t[0],
      a = t[1];
    return n * n + a * a
  }
  var Sn = Pn,
    En = An,
    On = wn,
    Dn = zn,
    Fn = Rn,
    In = jn,
    Ln = Tn,
    Vn = function () {
      var t = _n();
      return function (n, a, r, u, e, o) {
        var i, h;
        for (a || (a = 2), r || (r = 0), h = u ? Math.min(u * a + r, n.length) : n.length, i = r; i < h; i += a) t[0] = n[i], t[1] = n[i + 1], e(t, t, o), n[i] = t[0], n[i + 1] = t[1];
        return n
      }
    }(),
    Qn = Object.freeze({
      __proto__: null,
      create: _n,
      clone: function (t) {
        var n = new a(2);
        return n[0] = t[0], n[1] = t[1], n
      },
      fromValues: function (t, n) {
        var r = new a(2);
        return r[0] = t, r[1] = n, r
      },
      copy: function (t, n) {
        return t[0] = n[0], t[1] = n[1], t
      },
      set: function (t, n, a) {
        return t[0] = n, t[1] = a, t
      },
      add: function (t, n, a) {
        return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t
      },
      subtract: An,
      multiply: wn,
      divide: zn,
      ceil: function (t, n) {
        return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t
      },
      floor: function (t, n) {
        return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t
      },
      min: function (t, n, a) {
        return t[0] = Math.min(n[0], a[0]), t[1] = Math.min(n[1], a[1]), t
      },
      max: function (t, n, a) {
        return t[0] = Math.max(n[0], a[0]), t[1] = Math.max(n[1], a[1]), t
      },
      round: function (t, n) {
        return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t
      },
      scale: function (t, n, a) {
        return t[0] = n[0] * a, t[1] = n[1] * a, t
      },
      scaleAndAdd: function (t, n, a, r) {
        return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t
      },
      distance: Rn,
      squaredDistance: jn,
      length: Pn,
      squaredLength: Tn,
      negate: function (t, n) {
        return t[0] = -n[0], t[1] = -n[1], t
      },
      inverse: function (t, n) {
        return t[0] = 1 / n[0], t[1] = 1 / n[1], t
      },
      normalize: function (t, n) {
        var a = n[0],
          r = n[1],
          u = a * a + r * r;
        return u > 0 && (u = 1 / Math.sqrt(u)), t[0] = n[0] * u, t[1] = n[1] * u, t
      },
      dot: function (t, n) {
        return t[0] * n[0] + t[1] * n[1]
      },
      cross: function (t, n, a) {
        var r = n[0] * a[1] - n[1] * a[0];
        return t[0] = t[1] = 0, t[2] = r, t
      },
      lerp: function (t, n, a, r) {
        var u = n[0],
          e = n[1];
        return t[0] = u + r * (a[0] - u), t[1] = e + r * (a[1] - e), t
      },
      random: function (t, n) {
        n = n || 1;
        var a = 2 * r() * Math.PI;
        return t[0] = Math.cos(a) * n, t[1] = Math.sin(a) * n, t
      },
      transformMat2: function (t, n, a) {
        var r = n[0],
          u = n[1];
        return t[0] = a[0] * r + a[2] * u, t[1] = a[1] * r + a[3] * u, t
      },
      transformMat2d: function (t, n, a) {
        var r = n[0],
          u = n[1];
        return t[0] = a[0] * r + a[2] * u + a[4], t[1] = a[1] * r + a[3] * u + a[5], t
      },
      transformMat3: function (t, n, a) {
        var r = n[0],
          u = n[1];
        return t[0] = a[0] * r + a[3] * u + a[6], t[1] = a[1] * r + a[4] * u + a[7], t
      },
      transformMat4: function (t, n, a) {
        var r = n[0],
          u = n[1];
        return t[0] = a[0] * r + a[4] * u + a[12], t[1] = a[1] * r + a[5] * u + a[13], t
      },
      rotate: function (t, n, a, r) {
        var u = n[0] - a[0],
          e = n[1] - a[1],
          o = Math.sin(r),
          i = Math.cos(r);
        return t[0] = u * i - e * o + a[0], t[1] = u * o + e * i + a[1], t
      },
      angle: function (t, n) {
        var a = t[0],
          r = t[1],
          u = n[0],
          e = n[1],
          o = Math.sqrt(a * a + r * r) * Math.sqrt(u * u + e * e),
          i = o && (a * u + r * e) / o;
        return Math.acos(Math.min(Math.max(i, -1), 1))
      },
      zero: function (t) {
        return t[0] = 0, t[1] = 0, t
      },
      str: function (t) {
        return "vec2(" + t[0] + ", " + t[1] + ")"
      },
      exactEquals: function (t, n) {
        return t[0] === n[0] && t[1] === n[1]
      },
      equals: function (t, a) {
        var r = t[0],
          u = t[1],
          e = a[0],
          o = a[1];
        return Math.abs(r - e) <= n * Math.max(1, Math.abs(r), Math.abs(e)) && Math.abs(u - o) <= n * Math.max(1, Math.abs(u), Math.abs(o))
      },
      len: Sn,
      sub: En,
      mul: On,
      div: Dn,
      dist: Fn,
      sqrDist: In,
      sqrLen: Ln,
      forEach: Vn
    });
  t.glMatrix = e, t.mat2 = s, t.mat2d = b, t.mat3 = q, t.mat4 = S, t.quat = sn, t.quat2 = gn, t.vec2 = Qn, t.vec3 = $, t.vec4 = Rt, Object.defineProperty(t, "__esModule", {
    value: !0
  })
}));


// spectrum.min.js

// Spectrum Colorpicker v1.2.0
// https://github.com/bgrins/spectrum
// Author: Brian Grinstead
// License: MIT
! function (e, t, r) {
  function a(e, t, r) {
    for (var a = [], n = 0; n < e.length; n++) {
      var o = e[n]
      if (o) {
        var s = tinycolor(o),
          i = s.toHsl().l < .5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light"
        i += tinycolor.equals(t, o) ? " sp-thumb-active" : ""
        var l = v ? "background-color:" + s.toRgbString() : "filter:" + s.toFilter()
        a.push('<span title="' + s.toRgbString() + '" data-color="' + s.toRgbString() + '" class="' + i + '"><span class="sp-thumb-inner" style="' + l + ';" /></span>')
      } else {
        var c = "sp-clear-display"
        a.push('<span title="No Color Selected" data-color="" style="background-color:transparent;" class="' + c + '"></span>')
      }
    }
    return "<div class='sp-cf " + r + "'>" + a.join("") + "</div>"
  }

  function n() {
    for (var e = 0; e < p.length; e++) p[e] && p[e].hide()
  }

  function o(e, r) {
    var a = t.extend({}, h, e)
    return a.callbacks = {
      move: f(a.move, r),
      change: f(a.change, r),
      show: f(a.show, r),
      hide: f(a.hide, r),
      beforeShow: f(a.beforeShow, r)
    }, a
  }

  function s(s, l) {
    function f() {
      X.showPaletteOnly && (X.showPalette = !0), mt.toggleClass("sp-flat", $), mt.toggleClass("sp-input-disabled", !X.showInput), mt.toggleClass("sp-alpha-enabled", X.showAlpha), mt.toggleClass("sp-clear-enabled", $t), mt.toggleClass("sp-buttons-disabled", !X.showButtons), mt.toggleClass("sp-palette-disabled", !X.showPalette), mt.toggleClass("sp-palette-only", X.showPaletteOnly), mt.toggleClass("sp-initial-disabled", !X.showInitial), mt.addClass(X.className), N()
    }

    function h() {
      function r(e) {
        return e.data && e.data.ignore ? (O(t(this).data("color")), E()) : (O(t(this).data("color")), I(!0), E(), A()), !1
      }
      if (g && mt.find("*:not(input)").attr("unselectable", "on"), f(), Et && vt.after(Dt).hide(), $t || Ft.hide(), $) vt.after(mt).hide()
      else {
        var a = "parent" === X.appendTo ? vt.parent() : t(X.appendTo)
        1 !== a.length && (a = t("body")), a.append(mt)
      }
      if (W && e.localStorage) {
        try {
          var n = e.localStorage[W].split(",#")
          n.length > 1 && (delete e.localStorage[W], t.each(n, function (e, t) {
            w(t)
          }))
        } catch (o) {}
        try {
          ut = e.localStorage[W].split(";")
        } catch (o) {}
      }
      jt.bind("click.spectrum touchstart.spectrum", function (e) {
        bt || H(), e.stopPropagation(), t(e.target).is("input") || e.preventDefault()
      }), (vt.is(":disabled") || X.disabled === !0) && B(), mt.click(c), Rt.change(R), Rt.bind("paste", function () {
        setTimeout(R, 1)
      }), Rt.keydown(function (e) {
        13 == e.keyCode && R()
      }), At.text(X.cancelText), At.bind("click.spectrum", function (e) {
        e.stopPropagation(), e.preventDefault(), A("cancel")
      }), Ft.bind("click.spectrum", function (e) {
        e.stopPropagation(), e.preventDefault(), Xt = !0, E(), $ && I(!0)
      }), Ot.text(X.chooseText), Ot.bind("click.spectrum", function (e) {
        e.stopPropagation(), e.preventDefault(), q() && (I(!0), A())
      }), u(Ct, function (e, t, r) {
        lt = e / rt, Xt = !1, r.shiftKey && (lt = Math.round(10 * lt) / 10), E()
      }), u(kt, function (e, t) {
        ot = parseFloat(t / et), Xt = !1, E()
      }, C, P), u(yt, function (e, t, r) {
        if (r.shiftKey) {
          if (!pt) {
            var a = st * J,
              n = U - it * U,
              o = Math.abs(e - a) > Math.abs(t - n)
            pt = o ? "x" : "y"
          }
        } else pt = null
        var s = !pt || "x" === pt,
          i = !pt || "y" === pt
        s && (st = parseFloat(e / J)), i && (it = parseFloat((U - t) / U)), Xt = !1, E()
      }, C, P), Nt ? (O(Nt), D(), _t = Kt || tinycolor(Nt).format, w(Nt)) : D(), $ && M()
      var s = g ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum"
      Ht.delegate(".sp-thumb-el", s, r), Mt.delegate(".sp-thumb-el:nth-child(1)", s, {
        ignore: !0
      }, r)
    }

    function w(r) {
      if (L) {
        var a = tinycolor(r).toRgbString()
        if (-1 === t.inArray(a, ut))
          for (ut.push(a); ut.length > dt;) ut.shift()
        if (W && e.localStorage) try {
          e.localStorage[W] = ut.join(";")
        } catch (n) {}
      }
    }

    function k() {
      var e, t = [],
        r = ut,
        a = {}
      if (X.showPalette) {
        for (var n = 0; n < ft.length; n++)
          for (var o = 0; o < ft[n].length; o++) e = tinycolor(ft[n][o]).toRgbString(), a[e] = !0
        for (n = 0; n < r.length; n++) e = tinycolor(r[n]).toRgbString(), a.hasOwnProperty(e) || (t.push(r[n]), a[e] = !0)
      }
      return t.reverse().slice(0, X.maxSelectionSize)
    }

    function x() {
      var e = T(),
        r = t.map(ft, function (t, r) {
          return a(t, e, "sp-palette-row sp-palette-row-" + r)
        })
      ut && r.push(a(k(), e, "sp-palette-row sp-palette-row-selection")), Ht.html(r.join(""))
    }

    function S() {
      if (X.showInitial) {
        var e = zt,
          t = T()
        Mt.html(a([e, t], t, "sp-palette-row-initial"))
      }
    }

    function C() {
      (0 >= U || 0 >= J || 0 >= et) && N(), mt.addClass(ht), pt = null
    }

    function P() {
      mt.removeClass(ht)
    }

    function R() {
      var e = Rt.val()
      if (null !== e && "" !== e || !$t) {
        var t = tinycolor(e)
        t.ok ? O(t) : Rt.addClass("sp-validation-error")
      } else O(null)
    }

    function H() {
      V ? A() : M()
    }

    function M() {
      var r = t.Event("beforeShow.spectrum")
      return V ? (N(), void 0) : (vt.trigger(r, [T()]), G.beforeShow(T()) === !1 || r.isDefaultPrevented() || (n(), V = !0, t(gt).bind("click.spectrum", A), t(e).bind("resize.spectrum", Q), Dt.addClass("sp-active"), mt.removeClass("sp-hidden"), X.showPalette && x(), N(), D(), zt = T(), S(), G.show(zt), vt.trigger("show.spectrum", [zt])), void 0)
    }

    function A(r) {
      if ((!r || "click" != r.type || 2 != r.button) && V && !$) {
        V = !1, t(gt).unbind("click.spectrum", A), t(e).unbind("resize.spectrum", Q), Dt.removeClass("sp-active"), mt.addClass("sp-hidden")
        var a = !tinycolor.equals(T(), zt)
        a && (Bt && "cancel" !== r ? I(!0) : F()), G.hide(T()), vt.trigger("hide.spectrum", [T()])
      }
    }

    function F() {
      O(zt, !0)
    }

    function O(e, t) {
      if (!tinycolor.equals(e, T())) {
        var r
        if (!e && $t) Xt = !0
        else {
          Xt = !1, r = tinycolor(e)
          var a = r.toHsv()
          ot = a.h % 360 / 360, st = a.s, it = a.v, lt = a.a
        }
        D(), r && r.ok && !t && (_t = Kt || r.format)
      }
    }

    function T(e) {
      return e = e || {}, $t && Xt ? null : tinycolor.fromRatio({
        h: ot,
        s: st,
        v: it,
        a: Math.round(100 * lt) / 100
      }, {
        format: e.format || _t
      })
    }

    function q() {
      return !Rt.hasClass("sp-validation-error")
    }

    function E() {
      D(), G.move(T()), vt.trigger("move.spectrum", [T()])
    }

    function D() {
      Rt.removeClass("sp-validation-error"), j()
      var e = tinycolor.fromRatio({
        h: ot,
        s: 1,
        v: 1
      })
      yt.css("background-color", e.toHexString())
      var t = _t
      1 > lt && ("hex" === t || "hex3" === t || "hex6" === t || "name" === t) && (t = "rgb")
      var r = T({
          format: t
        }),
        a = ""
      if (It.removeClass("sp-clear-display"), It.css("background-color", "transparent"), !r && $t) It.addClass("sp-clear-display")
      else {
        var n = r.toHexString(),
          o = r.toRgbString()
        if (v || 1 === r.alpha ? It.css("background-color", o) : (It.css("background-color", "transparent"), It.css("filter", r.toFilter())), X.showAlpha) {
          var s = r.toRgb()
          s.a = 0
          var i = tinycolor(s).toRgbString(),
            l = "linear-gradient(left, " + i + ", " + n + ")"
          g ? St.css("filter", tinycolor(i).toFilter({
            gradientType: 1
          }, n)) : (St.css("background", "-webkit-" + l), St.css("background", "-moz-" + l), St.css("background", "-ms-" + l), St.css("background", l))
        }
        a = r.toString(t)
      }
      X.showInput && Rt.val(a), X.showPalette && x(), S()
    }

    function j() {
      var e = st,
        t = it
      if ($t && Xt) Pt.hide(), xt.hide(), wt.hide()
      else {
        Pt.show(), xt.show(), wt.show()
        var r = e * J,
          a = U - t * U
        r = Math.max(-Z, Math.min(J - Z, r - Z)), a = Math.max(-Z, Math.min(U - Z, a - Z)), wt.css({
          top: a,
          left: r
        })
        var n = lt * rt
        Pt.css({
          left: n - at / 2
        })
        var o = ot * et
        xt.css({
          top: o - nt
        })
      }
    }

    function I(e) {
      var t = T(),
        r = "",
        a = !tinycolor.equals(t, zt)
      t && (r = t.toString(_t), w(t)), Tt && vt.val(r), zt = t, e && a && (G.change(t), vt.trigger("change", [t]))
    }

    function N() {
      J = yt.width(), U = yt.height(), Z = wt.height(), tt = kt.width(), et = kt.height(), nt = xt.height(), rt = Ct.width(), at = Pt.width(), $ || (mt.css("position", "absolute"), mt.offset(i(mt, jt))), j()
    }

    function z() {
      vt.show(), jt.unbind("click.spectrum touchstart.spectrum"), mt.remove(), Dt.remove(), p[Lt.id] = null
    }

    function K(e, a) {
      return e === r ? t.extend({}, X) : a === r ? X[e] : (X[e] = a, f(), void 0)
    }

    function _() {
      bt = !1, vt.attr("disabled", !1), jt.removeClass("sp-disabled")
    }

    function B() {
      A(), bt = !0, vt.attr("disabled", !0), jt.addClass("sp-disabled")
    }
    var X = o(l, s),
      $ = X.flat,
      L = X.showSelectionPalette,
      W = X.localStorageKey,
      Y = X.theme,
      G = X.callbacks,
      Q = d(N, 10),
      V = !1,
      J = 0,
      U = 0,
      Z = 0,
      et = 0,
      tt = 0,
      rt = 0,
      at = 0,
      nt = 0,
      ot = 0,
      st = 0,
      it = 0,
      lt = 1,
      ct = X.palette.slice(0),
      ft = t.isArray(ct[0]) ? ct : [ct],
      ut = X.selectionPalette.slice(0),
      dt = X.maxSelectionSize,
      ht = "sp-dragging",
      pt = null,
      gt = s.ownerDocument,
      vt = (gt.body, t(s)),
      bt = !1,
      mt = t(y, gt).addClass(Y),
      yt = mt.find(".sp-color"),
      wt = mt.find(".sp-dragger"),
      kt = mt.find(".sp-hue"),
      xt = mt.find(".sp-slider"),
      St = mt.find(".sp-alpha-inner"),
      Ct = mt.find(".sp-alpha"),
      Pt = mt.find(".sp-alpha-handle"),
      Rt = mt.find(".sp-input"),
      Ht = mt.find(".sp-palette"),
      Mt = mt.find(".sp-initial"),
      At = mt.find(".sp-cancel"),
      Ft = mt.find(".sp-clear"),
      Ot = mt.find(".sp-choose"),
      Tt = vt.is("input"),
      qt = Tt && b && "color" === vt.attr("type"),
      Et = Tt && !$,
      Dt = Et ? t(m).addClass(Y).addClass(X.className) : t([]),
      jt = Et ? Dt : vt,
      It = Dt.find(".sp-preview-inner"),
      Nt = X.color || Tt && vt.val(),
      zt = !1,
      Kt = X.preferredFormat,
      _t = Kt,
      Bt = !X.showButtons || X.clickoutFiresChange,
      Xt = !Nt,
      $t = X.allowEmpty && !qt
    h()
    var Lt = {
      show: M,
      hide: A,
      toggle: H,
      reflow: N,
      option: K,
      enable: _,
      disable: B,
      set: function (e) {
        O(e), I()
      },
      get: T,
      destroy: z,
      container: mt
    }
    return Lt.id = p.push(Lt) - 1, Lt
  }

  function i(e, r) {
    var a = 0,
      n = e.outerWidth(),
      o = e.outerHeight(),
      s = r.outerHeight(),
      i = e[0].ownerDocument,
      l = i.documentElement,
      c = l.clientWidth + t(i).scrollLeft(),
      f = l.clientHeight + t(i).scrollTop(),
      u = r.offset()
    return u.top += s, u.left -= Math.min(u.left, u.left + n > c && c > n ? Math.abs(u.left + n - c) : 0), u.top -= Math.min(u.top, u.top + o > f && f > o ? Math.abs(o + s - a) : a), u
  }

  function l() {}

  function c(e) {
    e.stopPropagation()
  }

  function f(e, t) {
    var r = Array.prototype.slice,
      a = r.call(arguments, 2)
    return function () {
      return e.apply(t, a.concat(r.call(arguments)))
    }
  }

  function u(r, a, n, o) {
    function s(e) {
      e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(), e.returnValue = !1
    }

    function i(e) {
      if (u) {
        if (g && document.documentMode < 9 && !e.button) return c()
        var t = e.originalEvent.touches,
          n = t ? t[0].pageX : e.pageX,
          o = t ? t[0].pageY : e.pageY,
          i = Math.max(0, Math.min(n - d.left, p)),
          l = Math.max(0, Math.min(o - d.top, h))
        v && s(e), a.apply(r, [i, l, e])
      }
    }

    function l(e) {
      {
        var a = e.which ? 3 == e.which : 2 == e.button
        e.originalEvent.touches
      }
      a || u || n.apply(r, arguments) !== !1 && (u = !0, h = t(r).height(), p = t(r).width(), d = t(r).offset(), t(f).bind(b), t(f.body).addClass("sp-dragging"), v || i(e), s(e))
    }

    function c() {
      u && (t(f).unbind(b), t(f.body).removeClass("sp-dragging"), o.apply(r, arguments)), u = !1
    }
    a = a || function () {}, n = n || function () {}, o = o || function () {}
    var f = r.ownerDocument || document,
      u = !1,
      d = {},
      h = 0,
      p = 0,
      v = "ontouchstart" in e,
      b = {}
    b.selectstart = s, b.dragstart = s, b["touchmove mousemove"] = i, b["touchend mouseup"] = c, t(r).bind("touchstart mousedown", l)
  }

  function d(e, t, r) {
    var a
    return function () {
      var n = this,
        o = arguments,
        s = function () {
          a = null, e.apply(n, o)
        }
      r && clearTimeout(a), (r || !a) && (a = setTimeout(s, t))
    }
  }
  var h = {
      beforeShow: l,
      move: l,
      change: l,
      show: l,
      hide: l,
      color: !1,
      flat: !1,
      showInput: !1,
      allowEmpty: !1,
      showButtons: !0,
      clickoutFiresChange: !1,
      showInitial: !1,
      showPalette: !1,
      showPaletteOnly: !1,
      showSelectionPalette: !0,
      localStorageKey: !1,
      appendTo: "body",
      maxSelectionSize: 7,
      cancelText: "cancel",
      chooseText: "choose",
      preferredFormat: !1,
      className: "",
      showAlpha: !1,
      theme: "sp-light",
      palette: ["fff", "000"],
      selectionPalette: [],
      disabled: !1
    },
    p = [],
    g = !!/msie/i.exec(e.navigator.userAgent),
    v = function () {
      function e(e, t) {
        return !!~("" + e).indexOf(t)
      }
      var t = document.createElement("div"),
        r = t.style
      return r.cssText = "background-color:rgba(0,0,0,.5)", e(r.backgroundColor, "rgba") || e(r.backgroundColor, "hsla")
    }(),
    b = function () {
      var e = t("<input type='color' value='!' />")[0]
      return "color" === e.type && "!" !== e.value
    }(),
    m = ["<div class='sp-replacer'>", "<div class='sp-preview'><div class='sp-preview-inner'></div></div>", "<div class='sp-dd'>&#9660;</div>", "</div>"].join(""),
    y = function () {
      var e = ""
      if (g)
        for (var t = 1; 6 >= t; t++) e += "<div class='sp-" + t + "'></div>"
      return ["<div class='sp-container sp-hidden'>", "<div class='sp-palette-container'>", "<div class='sp-palette sp-thumb sp-cf'></div>", "</div>", "<div class='sp-picker-container'>", "<div class='sp-top sp-cf'>", "<div class='sp-fill'></div>", "<div class='sp-top-inner'>", "<div class='sp-color'>", "<div class='sp-sat'>", "<div class='sp-val'>", "<div class='sp-dragger'></div>", "</div>", "</div>", "</div>", "<div class='sp-clear sp-clear-display' title='Clear Color Selection'>", "</div>", "<div class='sp-hue'>", "<div class='sp-slider'></div>", e, "</div>", "</div>", "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>", "</div>", "<div class='sp-input-container sp-cf'>", "<input class='sp-input' type='text' spellcheck='false'  />", "</div>", "<div class='sp-initial sp-thumb sp-cf'></div>", "<div class='sp-button-container sp-cf'>", "<a class='sp-cancel' href='#'></a>", "<button class='sp-choose'></button>", "</div>", "</div>", "</div>"].join("")
    }(),
    w = "spectrum.id"
  t.fn.spectrum = function (e) {
      if ("string" == typeof e) {
        var r = this,
          a = Array.prototype.slice.call(arguments, 1)
        return this.each(function () {
          var n = p[t(this).data(w)]
          if (n) {
            var o = n[e]
            if (!o) throw new Error("Spectrum: no such method: '" + e + "'")
            "get" == e ? r = n.get() : "container" == e ? r = n.container : "option" == e ? r = n.option.apply(n, a) : "destroy" == e ? (n.destroy(), t(this).removeData(w)) : o.apply(n, a)
          }
        }), r
      }
      return this.spectrum("destroy").each(function () {
        var r = s(this, e)
        t(this).data(w, r.id)
      })
    }, t.fn.spectrum.load = !0, t.fn.spectrum.loadOpts = {}, t.fn.spectrum.draggable = u, t.fn.spectrum.defaults = h, t.spectrum = {}, t.spectrum.localization = {}, t.spectrum.palettes = {}, t.fn.spectrum.processNativeColorInputs = function () {
      b || t("input[type=color]").spectrum({
        preferredFormat: "hex6"
      })
    },
    function () {
      function t(e, a) {
        if (e = e ? e : "", a = a || {}, "object" == typeof e && e.hasOwnProperty("_tc_id")) return e
        var o = r(e),
          i = o.r,
          c = o.g,
          d = o.b,
          h = o.a,
          p = S(100 * h) / 100,
          g = a.format || o.format
        return 1 > i && (i = S(i)), 1 > c && (c = S(c)), 1 > d && (d = S(d)), {
          ok: o.ok,
          format: g,
          _tc_id: k++,
          alpha: h,
          getAlpha: function () {
            return h
          },
          setAlpha: function (e) {
            h = f(e), p = S(100 * h) / 100
          },
          toHsv: function () {
            var e = s(i, c, d)
            return {
              h: 360 * e.h,
              s: e.s,
              v: e.v,
              a: h
            }
          },
          toHsvString: function () {
            var e = s(i, c, d),
              t = S(360 * e.h),
              r = S(100 * e.s),
              a = S(100 * e.v)
            return 1 == h ? "hsv(" + t + ", " + r + "%, " + a + "%)" : "hsva(" + t + ", " + r + "%, " + a + "%, " + p + ")"
          },
          toHsl: function () {
            var e = n(i, c, d)
            return {
              h: 360 * e.h,
              s: e.s,
              l: e.l,
              a: h
            }
          },
          toHslString: function () {
            var e = n(i, c, d),
              t = S(360 * e.h),
              r = S(100 * e.s),
              a = S(100 * e.l)
            return 1 == h ? "hsl(" + t + ", " + r + "%, " + a + "%)" : "hsla(" + t + ", " + r + "%, " + a + "%, " + p + ")"
          },
          toHex: function (e) {
            return l(i, c, d, e)
          },
          toHexString: function (e) {
            return "#" + l(i, c, d, e)
          },
          toRgb: function () {
            return {
              r: S(i),
              g: S(c),
              b: S(d),
              a: h
            }
          },
          toRgbString: function () {
            return 1 == h ? "rgb(" + S(i) + ", " + S(c) + ", " + S(d) + ")" : "rgba(" + S(i) + ", " + S(c) + ", " + S(d) + ", " + p + ")"
          },
          toPercentageRgb: function () {
            return {
              r: S(100 * u(i, 255)) + "%",
              g: S(100 * u(c, 255)) + "%",
              b: S(100 * u(d, 255)) + "%",
              a: h
            }
          },
          toPercentageRgbString: function () {
            return 1 == h ? "rgb(" + S(100 * u(i, 255)) + "%, " + S(100 * u(c, 255)) + "%, " + S(100 * u(d, 255)) + "%)" : "rgba(" + S(100 * u(i, 255)) + "%, " + S(100 * u(c, 255)) + "%, " + S(100 * u(d, 255)) + "%, " + p + ")"
          },
          toName: function () {
            return 0 === h ? "transparent" : M[l(i, c, d, !0)] || !1
          },
          toFilter: function (e) {
            var r = l(i, c, d),
              n = r,
              o = Math.round(255 * parseFloat(h)).toString(16),
              s = o,
              f = a && a.gradientType ? "GradientType = 1, " : ""
            if (e) {
              var u = t(e)
              n = u.toHex(), s = Math.round(255 * parseFloat(u.alpha)).toString(16)
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + f + "startColorstr=#" + v(o) + r + ",endColorstr=#" + v(s) + n + ")"
          },
          toString: function (e) {
            var t = !!e
            e = e || this.format
            var r = !1,
              a = !t && 1 > h && h > 0,
              n = a && ("hex" === e || "hex6" === e || "hex3" === e || "name" === e)
            return "rgb" === e && (r = this.toRgbString()), "prgb" === e && (r = this.toPercentageRgbString()), ("hex" === e || "hex6" === e) && (r = this.toHexString()), "hex3" === e && (r = this.toHexString(!0)), "name" === e && (r = this.toName()), "hsl" === e && (r = this.toHslString()), "hsv" === e && (r = this.toHsvString()), n ? this.toRgbString() : r || this.toHexString()
          }
        }
      }

      function r(e) {
        var t = {
            r: 0,
            g: 0,
            b: 0
          },
          r = 1,
          n = !1,
          s = !1
        return "string" == typeof e && (e = m(e)), "object" == typeof e && (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b") ? (t = a(e.r, e.g, e.b), n = !0, s = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : e.hasOwnProperty("h") && e.hasOwnProperty("s") && e.hasOwnProperty("v") ? (e.s = b(e.s), e.v = b(e.v), t = i(e.h, e.s, e.v), n = !0, s = "hsv") : e.hasOwnProperty("h") && e.hasOwnProperty("s") && e.hasOwnProperty("l") && (e.s = b(e.s), e.l = b(e.l), t = o(e.h, e.s, e.l), n = !0, s = "hsl"), e.hasOwnProperty("a") && (r = e.a)), r = f(r), {
          ok: n,
          format: e.format || s,
          r: C(255, P(t.r, 0)),
          g: C(255, P(t.g, 0)),
          b: C(255, P(t.b, 0)),
          a: r
        }
      }

      function a(e, t, r) {
        return {
          r: 255 * u(e, 255),
          g: 255 * u(t, 255),
          b: 255 * u(r, 255)
        }
      }

      function n(e, t, r) {
        e = u(e, 255), t = u(t, 255), r = u(r, 255)
        var a, n, o = P(e, t, r),
          s = C(e, t, r),
          i = (o + s) / 2
        if (o == s) a = n = 0
        else {
          var l = o - s
          switch (n = i > .5 ? l / (2 - o - s) : l / (o + s), o) {
            case e:
              a = (t - r) / l + (r > t ? 6 : 0)
              break
            case t:
              a = (r - e) / l + 2
              break
            case r:
              a = (e - t) / l + 4
          }
          a /= 6
        }
        return {
          h: a,
          s: n,
          l: i
        }
      }

      function o(e, t, r) {
        function a(e, t, r) {
          return 0 > r && (r += 1), r > 1 && (r -= 1), 1 / 6 > r ? e + 6 * (t - e) * r : .5 > r ? t : 2 / 3 > r ? e + (t - e) * (2 / 3 - r) * 6 : e
        }
        var n, o, s
        if (e = u(e, 360), t = u(t, 100), r = u(r, 100), 0 === t) n = o = s = r
        else {
          var i = .5 > r ? r * (1 + t) : r + t - r * t,
            l = 2 * r - i
          n = a(l, i, e + 1 / 3), o = a(l, i, e), s = a(l, i, e - 1 / 3)
        }
        return {
          r: 255 * n,
          g: 255 * o,
          b: 255 * s
        }
      }

      function s(e, t, r) {
        e = u(e, 255), t = u(t, 255), r = u(r, 255)
        var a, n, o = P(e, t, r),
          s = C(e, t, r),
          i = o,
          l = o - s
        if (n = 0 === o ? 0 : l / o, o == s) a = 0
        else {
          switch (o) {
            case e:
              a = (t - r) / l + (r > t ? 6 : 0)
              break
            case t:
              a = (r - e) / l + 2
              break
            case r:
              a = (e - t) / l + 4
          }
          a /= 6
        }
        return {
          h: a,
          s: n,
          v: i
        }
      }

      function i(e, t, r) {
        e = 6 * u(e, 360), t = u(t, 100), r = u(r, 100)
        var a = x.floor(e),
          n = e - a,
          o = r * (1 - t),
          s = r * (1 - n * t),
          i = r * (1 - (1 - n) * t),
          l = a % 6,
          c = [r, s, o, o, i, r][l],
          f = [i, r, r, s, o, o][l],
          d = [o, o, i, r, r, s][l]
        return {
          r: 255 * c,
          g: 255 * f,
          b: 255 * d
        }
      }

      function l(e, t, r, a) {
        var n = [v(S(e).toString(16)), v(S(t).toString(16)), v(S(r).toString(16))]
        return a && n[0].charAt(0) == n[0].charAt(1) && n[1].charAt(0) == n[1].charAt(1) && n[2].charAt(0) == n[2].charAt(1) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) : n.join("")
      }

      function c(e) {
        var t = {}
        for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r)
        return t
      }

      function f(e) {
        return e = parseFloat(e), (isNaN(e) || 0 > e || e > 1) && (e = 1), e
      }

      function u(e, t) {
        p(e) && (e = "100%")
        var r = g(e)
        return e = C(t, P(0, parseFloat(e))), r && (e = parseInt(e * t, 10) / 100), x.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t)
      }

      function d(e) {
        return C(1, P(0, e))
      }

      function h(e) {
        return parseInt(e, 16)
      }

      function p(e) {
        return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
      }

      function g(e) {
        return "string" == typeof e && -1 != e.indexOf("%")
      }

      function v(e) {
        return 1 == e.length ? "0" + e : "" + e
      }

      function b(e) {
        return 1 >= e && (e = 100 * e + "%"), e
      }

      function m(e) {
        e = e.replace(y, "").replace(w, "").toLowerCase()
        var t = !1
        if (H[e]) e = H[e], t = !0
        else if ("transparent" == e) return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        }
        var r
        return (r = A.rgb.exec(e)) ? {
          r: r[1],
          g: r[2],
          b: r[3]
        } : (r = A.rgba.exec(e)) ? {
          r: r[1],
          g: r[2],
          b: r[3],
          a: r[4]
        } : (r = A.hsl.exec(e)) ? {
          h: r[1],
          s: r[2],
          l: r[3]
        } : (r = A.hsla.exec(e)) ? {
          h: r[1],
          s: r[2],
          l: r[3],
          a: r[4]
        } : (r = A.hsv.exec(e)) ? {
          h: r[1],
          s: r[2],
          v: r[3]
        } : (r = A.hex6.exec(e)) ? {
          r: h(r[1]),
          g: h(r[2]),
          b: h(r[3]),
          format: t ? "name" : "hex"
        } : (r = A.hex3.exec(e)) ? {
          r: h(r[1] + "" + r[1]),
          g: h(r[2] + "" + r[2]),
          b: h(r[3] + "" + r[3]),
          format: t ? "name" : "hex"
        } : !1
      }
      var y = /^[\s,#]+/,
        w = /\s+$/,
        k = 0,
        x = Math,
        S = x.round,
        C = x.min,
        P = x.max,
        R = x.random
      t.fromRatio = function (e, r) {
        if ("object" == typeof e) {
          var a = {}
          for (var n in e) e.hasOwnProperty(n) && (a[n] = "a" === n ? e[n] : b(e[n]))
          e = a
        }
        return t(e, r)
      }, t.equals = function (e, r) {
        return e && r ? t(e).toRgbString() == t(r).toRgbString() : !1
      }, t.random = function () {
        return t.fromRatio({
          r: R(),
          g: R(),
          b: R()
        })
      }, t.desaturate = function (e, r) {
        r = 0 === r ? 0 : r || 10
        var a = t(e).toHsl()
        return a.s -= r / 100, a.s = d(a.s), t(a)
      }, t.saturate = function (e, r) {
        r = 0 === r ? 0 : r || 10
        var a = t(e).toHsl()
        return a.s += r / 100, a.s = d(a.s), t(a)
      }, t.greyscale = function (e) {
        return t.desaturate(e, 100)
      }, t.lighten = function (e, r) {
        r = 0 === r ? 0 : r || 10
        var a = t(e).toHsl()
        return a.l += r / 100, a.l = d(a.l), t(a)
      }, t.darken = function (e, r) {
        r = 0 === r ? 0 : r || 10
        var a = t(e).toHsl()
        return a.l -= r / 100, a.l = d(a.l), t(a)
      }, t.complement = function (e) {
        var r = t(e).toHsl()
        return r.h = (r.h + 180) % 360, t(r)
      }, t.triad = function (e) {
        var r = t(e).toHsl(),
          a = r.h
        return [t(e), t({
          h: (a + 120) % 360,
          s: r.s,
          l: r.l
        }), t({
          h: (a + 240) % 360,
          s: r.s,
          l: r.l
        })]
      }, t.tetrad = function (e) {
        var r = t(e).toHsl(),
          a = r.h
        return [t(e), t({
          h: (a + 90) % 360,
          s: r.s,
          l: r.l
        }), t({
          h: (a + 180) % 360,
          s: r.s,
          l: r.l
        }), t({
          h: (a + 270) % 360,
          s: r.s,
          l: r.l
        })]
      }, t.splitcomplement = function (e) {
        var r = t(e).toHsl(),
          a = r.h
        return [t(e), t({
          h: (a + 72) % 360,
          s: r.s,
          l: r.l
        }), t({
          h: (a + 216) % 360,
          s: r.s,
          l: r.l
        })]
      }, t.analogous = function (e, r, a) {
        r = r || 6, a = a || 30
        var n = t(e).toHsl(),
          o = 360 / a,
          s = [t(e)]
        for (n.h = (n.h - (o * r >> 1) + 720) % 360; --r;) n.h = (n.h + o) % 360, s.push(t(n))
        return s
      }, t.monochromatic = function (e, r) {
        r = r || 6
        for (var a = t(e).toHsv(), n = a.h, o = a.s, s = a.v, i = [], l = 1 / r; r--;) i.push(t({
          h: n,
          s: o,
          v: s
        })), s = (s + l) % 1
        return i
      }, t.readability = function (e, r) {
        var a = t(e).toRgb(),
          n = t(r).toRgb(),
          o = (299 * a.r + 587 * a.g + 114 * a.b) / 1e3,
          s = (299 * n.r + 587 * n.g + 114 * n.b) / 1e3,
          i = Math.max(a.r, n.r) - Math.min(a.r, n.r) + Math.max(a.g, n.g) - Math.min(a.g, n.g) + Math.max(a.b, n.b) - Math.min(a.b, n.b)
        return {
          brightness: Math.abs(o - s),
          color: i
        }
      }, t.readable = function (e, r) {
        var a = t.readability(e, r)
        return a.brightness > 125 && a.color > 500
      }, t.mostReadable = function (e, r) {
        for (var a = null, n = 0, o = !1, s = 0; s < r.length; s++) {
          var i = t.readability(e, r[s]),
            l = i.brightness > 125 && i.color > 500,
            c = 3 * (i.brightness / 125) + i.color / 500;
          (l && !o || l && o && c > n || !l && !o && c > n) && (o = l, n = c, a = t(r[s]))
        }
        return a
      }
      var H = t.names = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "0ff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000",
          blanchedalmond: "ffebcd",
          blue: "00f",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          burntsienna: "ea7e5d",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "0ff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkgrey: "a9a9a9",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkslategrey: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dimgrey: "696969",
          dodgerblue: "1e90ff",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "f0f",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          grey: "808080",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgray: "d3d3d3",
          lightgreen: "90ee90",
          lightgrey: "d3d3d3",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslategray: "789",
          lightslategrey: "789",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "0f0",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "f0f",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370db",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "db7093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          red: "f00",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          slategrey: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          wheat: "f5deb3",
          white: "fff",
          whitesmoke: "f5f5f5",
          yellow: "ff0",
          yellowgreen: "9acd32"
        },
        M = t.hexNames = c(H),
        A = function () {
          var e = "[-\\+]?\\d+%?",
            t = "[-\\+]?\\d*\\.\\d+%?",
            r = "(?:" + t + ")|(?:" + e + ")",
            a = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?",
            n = "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?"
          return {
            rgb: new RegExp("rgb" + a),
            rgba: new RegExp("rgba" + n),
            hsl: new RegExp("hsl" + a),
            hsla: new RegExp("hsla" + n),
            hsv: new RegExp("hsv" + a),
            hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
          }
        }()
      e.tinycolor = t
    }(), t(function () {
      t.fn.spectrum.load && t.fn.spectrum.processNativeColorInputs()
    })
}(window, jQuery)


// lzma.ja

/*
Copyright (c) 2011 Juan Mellado

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
References:
- "LZMA SDK" by Igor Pavlov
  http://www.7-zip.org/sdk.html
*/

var LZMA = LZMA || {};

LZMA.OutWindow = function () {
  this._windowSize = 0;
};

LZMA.OutWindow.prototype.create = function (windowSize) {
  if ((!this._buffer) || (this._windowSize !== windowSize)) {
    this._buffer = [];
  }
  this._windowSize = windowSize;
  this._pos = 0;
  this._streamPos = 0;
};

LZMA.OutWindow.prototype.flush = function () {
  var size = this._pos - this._streamPos;
  if (size !== 0) {
    while (size--) {
      this._stream.writeByte(this._buffer[this._streamPos++]);
    }
    if (this._pos >= this._windowSize) {
      this._pos = 0;
    }
    this._streamPos = this._pos;
  }
};

LZMA.OutWindow.prototype.releaseStream = function () {
  this.flush();
  this._stream = null;
};

LZMA.OutWindow.prototype.setStream = function (stream) {
  this.releaseStream();
  this._stream = stream;
};

LZMA.OutWindow.prototype.init = function (solid) {
  if (!solid) {
    this._streamPos = 0;
    this._pos = 0;
  }
};

LZMA.OutWindow.prototype.copyBlock = function (distance, len) {
  var pos = this._pos - distance - 1;
  if (pos < 0) {
    pos += this._windowSize;
  }
  while (len--) {
    if (pos >= this._windowSize) {
      pos = 0;
    }
    this._buffer[this._pos++] = this._buffer[pos++];
    if (this._pos >= this._windowSize) {
      this.flush();
    }
  }
};

LZMA.OutWindow.prototype.putByte = function (b) {
  this._buffer[this._pos++] = b;
  if (this._pos >= this._windowSize) {
    this.flush();
  }
};

LZMA.OutWindow.prototype.getByte = function (distance) {
  var pos = this._pos - distance - 1;
  if (pos < 0) {
    pos += this._windowSize;
  }
  return this._buffer[pos];
};

LZMA.RangeDecoder = function () {};

LZMA.RangeDecoder.prototype.setStream = function (stream) {
  this._stream = stream;
};

LZMA.RangeDecoder.prototype.releaseStream = function () {
  this._stream = null;
};

LZMA.RangeDecoder.prototype.init = function () {
  var i = 5;

  this._code = 0;
  this._range = -1;

  while (i--) {
    this._code = (this._code << 8) | this._stream.readByte();
  }
};

LZMA.RangeDecoder.prototype.decodeDirectBits = function (numTotalBits) {
  var result = 0,
    i = numTotalBits,
    t;

  while (i--) {
    this._range >>>= 1;
    t = (this._code - this._range) >>> 31;
    this._code -= this._range & (t - 1);
    result = (result << 1) | (1 - t);

    if ((this._range & 0xff000000) === 0) {
      this._code = (this._code << 8) | this._stream.readByte();
      this._range <<= 8;
    }
  }

  return result;
};

LZMA.RangeDecoder.prototype.decodeBit = function (probs, index) {
  var prob = probs[index],
    newBound = (this._range >>> 11) * prob;

  if ((this._code ^ 0x80000000) < (newBound ^ 0x80000000)) {
    this._range = newBound;
    probs[index] += (2048 - prob) >>> 5;
    if ((this._range & 0xff000000) === 0) {
      this._code = (this._code << 8) | this._stream.readByte();
      this._range <<= 8;
    }
    return 0;
  }

  this._range -= newBound;
  this._code -= newBound;
  probs[index] -= prob >>> 5;
  if ((this._range & 0xff000000) === 0) {
    this._code = (this._code << 8) | this._stream.readByte();
    this._range <<= 8;
  }
  return 1;
};

LZMA.initBitModels = function (probs, len) {
  while (len--) {
    probs[len] = 1024;
  }
};

LZMA.BitTreeDecoder = function (numBitLevels) {
  this._models = [];
  this._numBitLevels = numBitLevels;
};

LZMA.BitTreeDecoder.prototype.init = function () {
  LZMA.initBitModels(this._models, 1 << this._numBitLevels);
};

LZMA.BitTreeDecoder.prototype.decode = function (rangeDecoder) {
  var m = 1,
    i = this._numBitLevels;

  while (i--) {
    m = (m << 1) | rangeDecoder.decodeBit(this._models, m);
  }
  return m - (1 << this._numBitLevels);
};

LZMA.BitTreeDecoder.prototype.reverseDecode = function (rangeDecoder) {
  var m = 1,
    symbol = 0,
    i = 0,
    bit;

  for (; i < this._numBitLevels; ++i) {
    bit = rangeDecoder.decodeBit(this._models, m);
    m = (m << 1) | bit;
    symbol |= bit << i;
  }
  return symbol;
};

LZMA.reverseDecode2 = function (models, startIndex, rangeDecoder, numBitLevels) {
  var m = 1,
    symbol = 0,
    i = 0,
    bit;

  for (; i < numBitLevels; ++i) {
    bit = rangeDecoder.decodeBit(models, startIndex + m);
    m = (m << 1) | bit;
    symbol |= bit << i;
  }
  return symbol;
};

LZMA.LenDecoder = function () {
  this._choice = [];
  this._lowCoder = [];
  this._midCoder = [];
  this._highCoder = new LZMA.BitTreeDecoder(8);
  this._numPosStates = 0;
};

LZMA.LenDecoder.prototype.create = function (numPosStates) {
  for (; this._numPosStates < numPosStates; ++this._numPosStates) {
    this._lowCoder[this._numPosStates] = new LZMA.BitTreeDecoder(3);
    this._midCoder[this._numPosStates] = new LZMA.BitTreeDecoder(3);
  }
};

LZMA.LenDecoder.prototype.init = function () {
  var i = this._numPosStates;
  LZMA.initBitModels(this._choice, 2);
  while (i--) {
    this._lowCoder[i].init();
    this._midCoder[i].init();
  }
  this._highCoder.init();
};

LZMA.LenDecoder.prototype.decode = function (rangeDecoder, posState) {
  if (rangeDecoder.decodeBit(this._choice, 0) === 0) {
    return this._lowCoder[posState].decode(rangeDecoder);
  }
  if (rangeDecoder.decodeBit(this._choice, 1) === 0) {
    return 8 + this._midCoder[posState].decode(rangeDecoder);
  }
  return 16 + this._highCoder.decode(rangeDecoder);
};

LZMA.Decoder2 = function () {
  this._decoders = [];
};

LZMA.Decoder2.prototype.init = function () {
  LZMA.initBitModels(this._decoders, 0x300);
};

LZMA.Decoder2.prototype.decodeNormal = function (rangeDecoder) {
  var symbol = 1;

  do {
    symbol = (symbol << 1) | rangeDecoder.decodeBit(this._decoders, symbol);
  } while (symbol < 0x100);

  return symbol & 0xff;
};

LZMA.Decoder2.prototype.decodeWithMatchByte = function (rangeDecoder, matchByte) {
  var symbol = 1,
    matchBit, bit;

  do {
    matchBit = (matchByte >> 7) & 1;
    matchByte <<= 1;
    bit = rangeDecoder.decodeBit(this._decoders, ((1 + matchBit) << 8) + symbol);
    symbol = (symbol << 1) | bit;
    if (matchBit !== bit) {
      while (symbol < 0x100) {
        symbol = (symbol << 1) | rangeDecoder.decodeBit(this._decoders, symbol);
      }
      break;
    }
  } while (symbol < 0x100);

  return symbol & 0xff;
};

LZMA.LiteralDecoder = function () {};

LZMA.LiteralDecoder.prototype.create = function (numPosBits, numPrevBits) {
  var i;

  if (this._coders &&
    (this._numPrevBits === numPrevBits) &&
    (this._numPosBits === numPosBits)) {
    return;
  }
  this._numPosBits = numPosBits;
  this._posMask = (1 << numPosBits) - 1;
  this._numPrevBits = numPrevBits;

  this._coders = [];

  i = 1 << (this._numPrevBits + this._numPosBits);
  while (i--) {
    this._coders[i] = new LZMA.Decoder2();
  }
};

LZMA.LiteralDecoder.prototype.init = function () {
  var i = 1 << (this._numPrevBits + this._numPosBits);
  while (i--) {
    this._coders[i].init();
  }
};

LZMA.LiteralDecoder.prototype.getDecoder = function (pos, prevByte) {
  return this._coders[((pos & this._posMask) << this._numPrevBits) +
    ((prevByte & 0xff) >>> (8 - this._numPrevBits))];
};

LZMA.Decoder = function () {
  this._outWindow = new LZMA.OutWindow();
  this._rangeDecoder = new LZMA.RangeDecoder();
  this._isMatchDecoders = [];
  this._isRepDecoders = [];
  this._isRepG0Decoders = [];
  this._isRepG1Decoders = [];
  this._isRepG2Decoders = [];
  this._isRep0LongDecoders = [];
  this._posSlotDecoder = [];
  this._posDecoders = [];
  this._posAlignDecoder = new LZMA.BitTreeDecoder(4);
  this._lenDecoder = new LZMA.LenDecoder();
  this._repLenDecoder = new LZMA.LenDecoder();
  this._literalDecoder = new LZMA.LiteralDecoder();
  this._dictionarySize = -1;
  this._dictionarySizeCheck = -1;

  this._posSlotDecoder[0] = new LZMA.BitTreeDecoder(6);
  this._posSlotDecoder[1] = new LZMA.BitTreeDecoder(6);
  this._posSlotDecoder[2] = new LZMA.BitTreeDecoder(6);
  this._posSlotDecoder[3] = new LZMA.BitTreeDecoder(6);
};

LZMA.Decoder.prototype.setDictionarySize = function (dictionarySize) {
  if (dictionarySize < 0) {
    return false;
  }
  if (this._dictionarySize !== dictionarySize) {
    this._dictionarySize = dictionarySize;
    this._dictionarySizeCheck = Math.max(this._dictionarySize, 1);
    this._outWindow.create(Math.max(this._dictionarySizeCheck, 4096));
  }
  return true;
};

LZMA.Decoder.prototype.setLcLpPb = function (lc, lp, pb) {
  var numPosStates = 1 << pb;

  if (lc > 8 || lp > 4 || pb > 4) {
    return false;
  }

  this._literalDecoder.create(lp, lc);

  this._lenDecoder.create(numPosStates);
  this._repLenDecoder.create(numPosStates);
  this._posStateMask = numPosStates - 1;

  return true;
};

LZMA.Decoder.prototype.init = function () {
  var i = 4;

  this._outWindow.init(false);

  LZMA.initBitModels(this._isMatchDecoders, 192);
  LZMA.initBitModels(this._isRep0LongDecoders, 192);
  LZMA.initBitModels(this._isRepDecoders, 12);
  LZMA.initBitModels(this._isRepG0Decoders, 12);
  LZMA.initBitModels(this._isRepG1Decoders, 12);
  LZMA.initBitModels(this._isRepG2Decoders, 12);
  LZMA.initBitModels(this._posDecoders, 114);

  this._literalDecoder.init();

  while (i--) {
    this._posSlotDecoder[i].init();
  }

  this._lenDecoder.init();
  this._repLenDecoder.init();
  this._posAlignDecoder.init();
  this._rangeDecoder.init();
};

LZMA.Decoder.prototype.decode = function (inStream, outStream, outSize) {
  var state = 0,
    rep0 = 0,
    rep1 = 0,
    rep2 = 0,
    rep3 = 0,
    nowPos64 = 0,
    prevByte = 0,
    posState, decoder2, len, distance, posSlot, numDirectBits;

  this._rangeDecoder.setStream(inStream);
  this._outWindow.setStream(outStream);

  this.init();

  while (outSize < 0 || nowPos64 < outSize) {
    posState = nowPos64 & this._posStateMask;

    if (this._rangeDecoder.decodeBit(this._isMatchDecoders, (state << 4) + posState) === 0) {
      decoder2 = this._literalDecoder.getDecoder(nowPos64++, prevByte);

      if (state >= 7) {
        prevByte = decoder2.decodeWithMatchByte(this._rangeDecoder, this._outWindow.getByte(rep0));
      } else {
        prevByte = decoder2.decodeNormal(this._rangeDecoder);
      }
      this._outWindow.putByte(prevByte);

      state = state < 4 ? 0 : state - (state < 10 ? 3 : 6);

    } else {

      if (this._rangeDecoder.decodeBit(this._isRepDecoders, state) === 1) {
        len = 0;
        if (this._rangeDecoder.decodeBit(this._isRepG0Decoders, state) === 0) {
          if (this._rangeDecoder.decodeBit(this._isRep0LongDecoders, (state << 4) + posState) === 0) {
            state = state < 7 ? 9 : 11;
            len = 1;
          }
        } else {
          if (this._rangeDecoder.decodeBit(this._isRepG1Decoders, state) === 0) {
            distance = rep1;
          } else {
            if (this._rangeDecoder.decodeBit(this._isRepG2Decoders, state) === 0) {
              distance = rep2;
            } else {
              distance = rep3;
              rep3 = rep2;
            }
            rep2 = rep1;
          }
          rep1 = rep0;
          rep0 = distance;
        }
        if (len === 0) {
          len = 2 + this._repLenDecoder.decode(this._rangeDecoder, posState);
          state = state < 7 ? 8 : 11;
        }
      } else {
        rep3 = rep2;
        rep2 = rep1;
        rep1 = rep0;

        len = 2 + this._lenDecoder.decode(this._rangeDecoder, posState);
        state = state < 7 ? 7 : 10;

        posSlot = this._posSlotDecoder[len <= 5 ? len - 2 : 3].decode(this._rangeDecoder);
        if (posSlot >= 4) {

          numDirectBits = (posSlot >> 1) - 1;
          rep0 = (2 | (posSlot & 1)) << numDirectBits;

          if (posSlot < 14) {
            rep0 += LZMA.reverseDecode2(this._posDecoders,
              rep0 - posSlot - 1, this._rangeDecoder, numDirectBits);
          } else {
            rep0 += this._rangeDecoder.decodeDirectBits(numDirectBits - 4) << 4;
            rep0 += this._posAlignDecoder.reverseDecode(this._rangeDecoder);
            if (rep0 < 0) {
              if (rep0 === -1) {
                break;
              }
              return false;
            }
          }
        } else {
          rep0 = posSlot;
        }
      }

      if (rep0 >= nowPos64 || rep0 >= this._dictionarySizeCheck) {
        return false;
      }

      this._outWindow.copyBlock(rep0, len);
      nowPos64 += len;
      prevByte = this._outWindow.getByte(0);
    }
  }

  this._outWindow.flush();
  this._outWindow.releaseStream();
  this._rangeDecoder.releaseStream();

  return true;
};

LZMA.Decoder.prototype.setDecoderProperties = function (properties) {
  var value, lc, lp, pb, dictionarySize;

  if (properties.size < 5) {
    return false;
  }

  value = properties.readByte();
  lc = value % 9;
  value = ~~(value / 9);
  lp = value % 5;
  pb = ~~(value / 5);

  if (!this.setLcLpPb(lc, lp, pb)) {
    return false;
  }

  dictionarySize = properties.readByte();
  dictionarySize |= properties.readByte() << 8;
  dictionarySize |= properties.readByte() << 16;
  dictionarySize += properties.readByte() * 16777216;

  return this.setDictionarySize(dictionarySize);
};

LZMA.decompress = function (properties, inStream, outStream, outSize) {
  var decoder = new LZMA.Decoder();

  if (!decoder.setDecoderProperties(properties)) {
    throw "Incorrect stream properties";
  }

  if (!decoder.decode(inStream, outStream, outSize)) {
    throw "Error in data stream";
  }

  return true;
};

LZMA.decompressFile = function (inStream, outStream) {
  var decoder = new LZMA.Decoder(),
    outSize;

  if (!decoder.setDecoderProperties(inStream)) {
    throw "Incorrect stream properties";
  }

  outSize = inStream.readByte();
  outSize |= inStream.readByte() << 8;
  outSize |= inStream.readByte() << 16;
  outSize += inStream.readByte() * 16777216;

  inStream.readByte();
  inStream.readByte();
  inStream.readByte();
  inStream.readByte();

  if (!decoder.decode(inStream, outStream, outSize)) {
    throw "Error in data stream";
  }

  return true;
};


// ctm.js

/*
OpenCTM
Copyright (c) 2009-2010 Marcus Geelnard

This software is provided 'as-is', without any express or implied
warranty. In no event will the authors be held liable for any damages
arising from the use of this software.

Permission is granted to anyone to use this software for any purpose,
including commercial applications, and to alter it and redistribute it
freely, subject to the following restrictions:

    1. The origin of this software must not be misrepresented; you must not
    claim that you wrote the original software. If you use this software
    in a product, an acknowledgment in the product documentation would be
    appreciated but is not required.

    2. Altered source versions must be plainly marked as such, and must not
    be misrepresented as being the original software.

    3. This notice may not be removed or altered from any source
    distribution.

js-openctm
Copyright (c) 2011 Juan Mellado

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/


var CTM = CTM || {};

CTM.CompressionMethod = {
  RAW: 0x00574152,
  MG1: 0x0031474d,
  MG2: 0x0032474d
};

CTM.Flags = {
  NORMALS: 0x00000001
};

CTM.File = function (stream) {
  this.load(stream);
};

CTM.File.prototype.load = function (stream) {
  this.header = new CTM.FileHeader(stream);

  this.body = new CTM.FileBody(this.header);

  this.getReader().read(stream, this.body);
};

CTM.File.prototype.getReader = function () {
  var reader;

  switch (this.header.compressionMethod) {
    case CTM.CompressionMethod.RAW:
      reader = new CTM.ReaderRAW();
      break;
    case CTM.CompressionMethod.MG1:
      reader = new CTM.ReaderMG1();
      break;
    case CTM.CompressionMethod.MG2:
      reader = new CTM.ReaderMG2();
      break;
  }

  return reader;
};

CTM.FileHeader = function (stream) {
  stream.readInt32(); //magic "OCTM"
  this.fileFormat = stream.readInt32();
  this.compressionMethod = stream.readInt32();
  this.vertexCount = stream.readInt32();
  this.triangleCount = stream.readInt32();
  this.uvMapCount = stream.readInt32();
  this.attrMapCount = stream.readInt32();
  this.flags = stream.readInt32();
  this.comment = stream.readString();
};

CTM.FileHeader.prototype.hasNormals = function () {
  return this.flags & CTM.Flags.NORMALS;
};

CTM.FileBody = function (header) {
  var i = header.triangleCount * 3,
    v = header.vertexCount * 3,
    n = header.hasNormals() ? header.vertexCount * 3 : 0,
    u = header.vertexCount * 2,
    a = header.vertexCount * 4,
    j = 0;

  var data = new ArrayBuffer(
    (i + v + n + (u * header.uvMapCount) + (a * header.attrMapCount)) * 4);

  this.indices = new Uint32Array(data, 0, i);

  this.vertices = new Float32Array(data, i * 4, v);

  if (header.hasNormals()) {
    this.normals = new Float32Array(data, (i + v) * 4, n);
  }

  if (header.uvMapCount) {
    this.uvMaps = [];
    for (j = 0; j < header.uvMapCount; ++j) {
      this.uvMaps[j] = {
        uv: new Float32Array(data,
          (i + v + n + (j * u)) * 4, u)
      };
    }
  }

  if (header.attrMapCount) {
    this.attrMaps = [];
    for (j = 0; j < header.attrMapCount; ++j) {
      this.attrMaps[j] = {
        attr: new Float32Array(data,
          (i + v + n + (u * header.uvMapCount) + (j * a)) * 4, a)
      };
    }
  }
};

CTM.FileMG2Header = function (stream) {
  stream.readInt32(); //magic "MG2H"
  this.vertexPrecision = stream.readFloat32();
  this.normalPrecision = stream.readFloat32();
  this.lowerBoundx = stream.readFloat32();
  this.lowerBoundy = stream.readFloat32();
  this.lowerBoundz = stream.readFloat32();
  this.higherBoundx = stream.readFloat32();
  this.higherBoundy = stream.readFloat32();
  this.higherBoundz = stream.readFloat32();
  this.divx = stream.readInt32();
  this.divy = stream.readInt32();
  this.divz = stream.readInt32();

  this.sizex = (this.higherBoundx - this.lowerBoundx) / this.divx;
  this.sizey = (this.higherBoundy - this.lowerBoundy) / this.divy;
  this.sizez = (this.higherBoundz - this.lowerBoundz) / this.divz;
};

CTM.ReaderRAW = function () {};

CTM.ReaderRAW.prototype.read = function (stream, body) {
  this.readIndices(stream, body.indices);
  this.readVertices(stream, body.vertices);

  if (body.normals) {
    this.readNormals(stream, body.normals);
  }
  if (body.uvMaps) {
    this.readUVMaps(stream, body.uvMaps);
  }
  if (body.attrMaps) {
    this.readAttrMaps(stream, body.attrMaps);
  }
};

CTM.ReaderRAW.prototype.readIndices = function (stream, indices) {
  stream.readInt32(); //magic "INDX"
  stream.readArrayInt32(indices);
};

CTM.ReaderRAW.prototype.readVertices = function (stream, vertices) {
  stream.readInt32(); //magic "VERT"
  stream.readArrayFloat32(vertices);
};

CTM.ReaderRAW.prototype.readNormals = function (stream, normals) {
  stream.readInt32(); //magic "NORM"
  stream.readArrayFloat32(normals);
};

CTM.ReaderRAW.prototype.readUVMaps = function (stream, uvMaps) {
  for (var i = 0; i < uvMaps.length; ++i) {
    stream.readInt32(); //magic "TEXC"

    uvMaps[i].name = stream.readString();
    uvMaps[i].filename = stream.readString();
    stream.readArrayFloat32(uvMaps[i].uv);
  }
};

CTM.ReaderRAW.prototype.readAttrMaps = function (stream, attrMaps) {
  for (var i = 0; i < attrMaps.length; ++i) {
    stream.readInt32(); //magic "ATTR"

    attrMaps[i].name = stream.readString();
    stream.readArrayFloat32(attrMaps[i].attr);
  }
};

CTM.ReaderMG1 = function () {};

CTM.ReaderMG1.prototype.read = function (stream, body) {
  this.readIndices(stream, body.indices);
  this.readVertices(stream, body.vertices);

  if (body.normals) {
    this.readNormals(stream, body.normals);
  }
  if (body.uvMaps) {
    this.readUVMaps(stream, body.uvMaps);
  }
  if (body.attrMaps) {
    this.readAttrMaps(stream, body.attrMaps);
  }
};

CTM.ReaderMG1.prototype.readIndices = function (stream, indices) {
  stream.readInt32(); //magic "INDX"
  stream.readInt32(); //packed size

  var interleaved = new CTM.InterleavedStream(indices, 3);
  LZMA.decompress(stream, stream, interleaved, interleaved.data.length);

  CTM.restoreIndices(indices, indices.length);
};

CTM.ReaderMG1.prototype.readVertices = function (stream, vertices) {
  stream.readInt32(); //magic "VERT"
  stream.readInt32(); //packed size

  var interleaved = new CTM.InterleavedStream(vertices, 1);
  LZMA.decompress(stream, stream, interleaved, interleaved.data.length);
};

CTM.ReaderMG1.prototype.readNormals = function (stream, normals) {
  stream.readInt32(); //magic "NORM"
  stream.readInt32(); //packed size

  var interleaved = new CTM.InterleavedStream(normals, 3);
  LZMA.decompress(stream, stream, interleaved, interleaved.data.length);
};

CTM.ReaderMG1.prototype.readUVMaps = function (stream, uvMaps) {
  for (var i = 0; i < uvMaps.length; ++i) {
    stream.readInt32(); //magic "TEXC"

    uvMaps[i].name = stream.readString();
    uvMaps[i].filename = stream.readString();

    stream.readInt32(); //packed size

    var interleaved = new CTM.InterleavedStream(uvMaps[i].uv, 2);
    LZMA.decompress(stream, stream, interleaved, interleaved.data.length);
  }
};

CTM.ReaderMG1.prototype.readAttrMaps = function (stream, attrMaps) {
  for (var i = 0; i < attrMaps.length; ++i) {
    stream.readInt32(); //magic "ATTR"

    attrMaps[i].name = stream.readString();

    stream.readInt32(); //packed size

    var interleaved = new CTM.InterleavedStream(attrMaps[i].attr, 4);
    LZMA.decompress(stream, stream, interleaved, interleaved.data.length);
  }
};

CTM.ReaderMG2 = function () {};

CTM.ReaderMG2.prototype.read = function (stream, body) {
  this.MG2Header = new CTM.FileMG2Header(stream);

  this.readVertices(stream, body.vertices);
  this.readIndices(stream, body.indices);

  if (body.normals) {
    this.readNormals(stream, body);
  }
  if (body.uvMaps) {
    this.readUVMaps(stream, body.uvMaps);
  }
  if (body.attrMaps) {
    this.readAttrMaps(stream, body.attrMaps);
  }
};

CTM.ReaderMG2.prototype.readVertices = function (stream, vertices) {
  stream.readInt32(); //magic "VERT"
  stream.readInt32(); //packed size

  var interleaved = new CTM.InterleavedStream(vertices, 3);
  LZMA.decompress(stream, stream, interleaved, interleaved.data.length);

  var gridIndices = this.readGridIndices(stream, vertices);

  CTM.restoreVertices(vertices, this.MG2Header, gridIndices, this.MG2Header.vertexPrecision);
};

CTM.ReaderMG2.prototype.readGridIndices = function (stream, vertices) {
  stream.readInt32(); //magic "GIDX"
  stream.readInt32(); //packed size

  var gridIndices = new Uint32Array(vertices.length / 3);

  var interleaved = new CTM.InterleavedStream(gridIndices, 1);
  LZMA.decompress(stream, stream, interleaved, interleaved.data.length);

  CTM.restoreGridIndices(gridIndices, gridIndices.length);

  return gridIndices;
};

CTM.ReaderMG2.prototype.readIndices = function (stream, indices) {
  stream.readInt32(); //magic "INDX"
  stream.readInt32(); //packed size

  var interleaved = new CTM.InterleavedStream(indices, 3);
  LZMA.decompress(stream, stream, interleaved, interleaved.data.length);

  CTM.restoreIndices(indices, indices.length);
};

CTM.ReaderMG2.prototype.readNormals = function (stream, body) {
  stream.readInt32(); //magic "NORM"
  stream.readInt32(); //packed size

  var interleaved = new CTM.InterleavedStream(body.normals, 3);
  LZMA.decompress(stream, stream, interleaved, interleaved.data.length);

  var smoothNormals = CTM.calcSmoothNormals(body.indices, body.vertices);

  CTM.restoreNormals(body.normals, smoothNormals, this.MG2Header.normalPrecision);
};

CTM.ReaderMG2.prototype.readUVMaps = function (stream, uvMaps) {
  for (var i = 0; i < uvMaps.length; ++i) {
    stream.readInt32(); //magic "TEXC"

    uvMaps[i].name = stream.readString();
    uvMaps[i].filename = stream.readString();

    var precision = stream.readFloat32();

    stream.readInt32(); //packed size

    var interleaved = new CTM.InterleavedStream(uvMaps[i].uv, 2);
    LZMA.decompress(stream, stream, interleaved, interleaved.data.length);

    CTM.restoreMap(uvMaps[i].uv, 2, precision);
  }
};

CTM.ReaderMG2.prototype.readAttrMaps = function (stream, attrMaps) {
  for (var i = 0; i < attrMaps.length; ++i) {
    stream.readInt32(); //magic "ATTR"

    attrMaps[i].name = stream.readString();

    var precision = stream.readFloat32();

    stream.readInt32(); //packed size

    var interleaved = new CTM.InterleavedStream(attrMaps[i].attr, 4);
    LZMA.decompress(stream, stream, interleaved, interleaved.data.length);

    CTM.restoreMap(attrMaps[i].attr, 4, precision);
  }
};

CTM.restoreIndices = function (indices, len) {
  if (len > 0) {
    indices[2] += indices[0];
  }
  for (var i = 3; i < len; i += 3) {
    indices[i] += indices[i - 3];

    if (indices[i] === indices[i - 3]) {
      indices[i + 1] += indices[i - 2];
    } else {
      indices[i + 1] += indices[i];
    }

    indices[i + 2] += indices[i];
  }
};

CTM.restoreGridIndices = function (gridIndices, len) {
  for (var i = 1; i < len; ++i) {
    gridIndices[i] += gridIndices[i - 1];
  }
};

CTM.restoreVertices = function (vertices, grid, gridIndices, precision) {
  var verticesIndices = new Uint32Array(vertices.buffer, vertices.byteOffset),
    gridOrigin = [],
    gridIdx, delta, prevGridIndex = 0x7fffffff,
    prevDelta = 0;

  for (var i = 0, j = 0; i < gridIndices.length; ++i, j += 3) {
    gridIdx = gridIndices[i];

    CTM.gridIdxToPoint(grid, gridIdx, gridOrigin);

    delta = verticesIndices[j];
    if (gridIdx === prevGridIndex) {
      delta += prevDelta;
    }

    vertices[j] = gridOrigin[0] + precision * delta;
    vertices[j + 1] = gridOrigin[1] + precision * verticesIndices[j + 1];
    vertices[j + 2] = gridOrigin[2] + precision * verticesIndices[j + 2];

    prevGridIndex = gridIdx;
    prevDelta = delta;
  }
};

CTM.restoreNormals = function (normals, smoothNormals, precision) {
  var intNormals = new Uint32Array(normals.buffer, normals.byteOffset),
    n = [],
    basis = [],
    magn, intPhi, phi, thetaScale, theta, sinPhi;

  for (var i = 0; i < normals.length; i += 3) {
    magn = intNormals[i] * precision;

    intPhi = intNormals[i + 1];

    if (intPhi === 0) {
      theta = -Math.PI;
    } else {
      if (intPhi <= 4) {
        thetaScale = 0.5;
      } else {
        thetaScale = 2.0 / intPhi;
      }
      theta = (intNormals[i + 2] * thetaScale - 1) * Math.PI;
    }

    phi = intPhi * 0.5 * Math.PI * precision;

    sinPhi = Math.sin(phi);

    n[0] = sinPhi * Math.cos(theta) * magn;
    n[1] = sinPhi * Math.sin(theta) * magn;
    n[2] = Math.cos(phi) * magn;

    CTM.makeNormalCoordSys(smoothNormals, i, basis);

    normals[i] = basis[0] * n[0] + basis[3] * n[1] + basis[6] * n[2];
    normals[i + 1] = basis[1] * n[0] + basis[4] * n[1] + basis[7] * n[2];
    normals[i + 2] = basis[2] * n[0] + basis[5] * n[1] + basis[8] * n[2];
  }
};

CTM.restoreMap = function (map, count, precision) {
  var mapIndices = new Uint32Array(map.buffer, map.byteOffset),
    delta, value;

  for (var i = 0; i < count; ++i) {
    delta = 0;

    for (var j = i; j < map.length; j += count) {
      value = mapIndices[j];

      delta += value & 1 ? -((value + 1) >> 1) : value >> 1;

      map[j] = delta * precision;
    }
  }
};

CTM.gridIdxToPoint = function (grid, gridIdx, gridOrigin) {
  var zdiv = grid.divx * grid.divy,
    ydiv = grid.divx,
    point = [];

  point[2] = ~~(gridIdx / zdiv);

  gridIdx -= ~~(point[2] * zdiv);
  point[1] = ~~(gridIdx / ydiv);

  gridIdx -= ~~(point[1] * ydiv);
  point[0] = gridIdx;

  gridOrigin[0] = grid.lowerBoundx + point[0] * grid.sizex;
  gridOrigin[1] = grid.lowerBoundy + point[1] * grid.sizey;
  gridOrigin[2] = grid.lowerBoundz + point[2] * grid.sizez;
};

CTM.calcSmoothNormals = function (indices, vertices) {
  var smoothNormals = new Float32Array(vertices.length),
    tri = [],
    v1 = [],
    v2 = [],
    n = [],
    len, i, j;

  for (i = 0; i < indices.length; i += 3) {
    tri[0] = indices[i] * 3;
    tri[1] = indices[i + 1] * 3;
    tri[2] = indices[i + 2] * 3;

    for (j = 0; j < 3; ++j) {
      v1[j] = vertices[tri[1] + j] - vertices[tri[0] + j];
      v2[j] = vertices[tri[2] + j] - vertices[tri[0] + j];
    }

    n[0] = v1[1] * v2[2] - v1[2] * v2[1];
    n[1] = v1[2] * v2[0] - v1[0] * v2[2];
    n[2] = v1[0] * v2[1] - v1[1] * v2[0];

    len = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
    if (len > 1e-10) {
      len = 1.0 / len;

      n[0] *= len;
      n[1] *= len;
      n[2] *= len;
    }

    for (j = 0; j < 3; ++j) {
      smoothNormals[tri[j]] += n[0];
      smoothNormals[tri[j] + 1] += n[1];
      smoothNormals[tri[j] + 2] += n[2];
    }
  }

  for (i = 0; i < smoothNormals.length; i += 3) {
    len = Math.sqrt(smoothNormals[i] * smoothNormals[i] +
      smoothNormals[i + 1] * smoothNormals[i + 1] +
      smoothNormals[i + 2] * smoothNormals[i + 2]);

    if (len > 1e-10) {
      len = 1.0 / len;

      smoothNormals[i] *= len;
      smoothNormals[i + 1] *= len;
      smoothNormals[i + 2] *= len;
    }
  }

  return smoothNormals;
};

CTM.makeNormalCoordSys = function (normals, index, basis) {
  basis[0] = -normals[index + 1];
  basis[1] = normals[index] - normals[index + 2];
  basis[2] = normals[index + 1];

  var len = Math.sqrt(2.0 * basis[0] * basis[0] + basis[1] * basis[1]);
  if (len > 1e-10) {
    len = 1.0 / len;

    basis[0] *= len;
    basis[1] *= len;
    basis[2] *= len;
  }

  basis[6] = normals[index];
  basis[7] = normals[index + 1];
  basis[8] = normals[index + 2];

  basis[3] = basis[7] * basis[2] - basis[8] * basis[1];
  basis[4] = basis[8] * basis[0] - basis[6] * basis[2];
  basis[5] = basis[6] * basis[1] - basis[7] * basis[0];
};

CTM.isLittleEndian = (function () {
  var buffer = new ArrayBuffer(2),
    bytes = new Uint8Array(buffer),
    ints = new Uint16Array(buffer);

  bytes[0] = 1;

  return ints[0] === 1;
}());

CTM.InterleavedStream = function (data, count) {
  this.data = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  this.offset = CTM.isLittleEndian ? 3 : 0;
  this.count = count * 4;
};

CTM.InterleavedStream.prototype.writeByte = function (value) {
  this.data[this.offset] = value;

  this.offset += this.count;
  if (this.offset >= this.data.length) {

    this.offset -= this.data.length - 4;
    if (this.offset >= this.count) {

      this.offset -= this.count + (CTM.isLittleEndian ? 1 : -1);
    }
  }
};

CTM.Stream = function (data) {
  this.data = data;
  this.offset = 0;
};

CTM.Stream.prototype.TWO_POW_MINUS23 = (function () {
  return Math.pow(2, -23);
}());

CTM.Stream.prototype.TWO_POW_MINUS126 = (function () {
  return Math.pow(2, -126);
}());

CTM.Stream.prototype.readByte = function () { // MODIFIED BY NICO KEMNITZ - 05.09.2013
  // return this.data.charCodeAt(this.offset ++) & 0xff;
  return this.data[this.offset++];
};

CTM.Stream.prototype.readInt32 = function () {
  var i = this.readByte();
  i |= this.readByte() << 8;
  i |= this.readByte() << 16;
  return i | (this.readByte() << 24);
};

CTM.Stream.prototype.readFloat32 = function () {
  var m = this.readByte();
  m += this.readByte() << 8;

  var b1 = this.readByte();
  var b2 = this.readByte();

  m += (b1 & 0x7f) << 16;
  var e = ((b2 & 0x7f) << 1) | ((b1 & 0x80) >>> 7);
  var s = b2 & 0x80 ? -1 : 1;

  if (e === 255) {
    return m !== 0 ? NaN : s * Infinity;
  }
  if (e > 0) {
    return s * (1 + (m * this.TWO_POW_MINUS23)) * Math.pow(2, e - 127);
  }
  if (m !== 0) {
    return s * m * this.TWO_POW_MINUS126;
  }
  return s * 0;
};

CTM.Stream.prototype.readString = function () { // MODIFIED BY NICO KEMNITZ - 05.09.2013
  var len = this.readInt32();

  this.offset += len;

  //return this.data.substr(this.offset - len, len);
  return this.data.subarray(this.offset - len, this.offset);
};

CTM.Stream.prototype.readArrayInt32 = function (array) {
  var len = array.length;

  for (var i = 0; i < len; ++i) {
    array[i] = this.readInt32();
  }

  return array;
};

CTM.Stream.prototype.readArrayFloat32 = function (array) {
  var len = array.length;

  for (var i = 0; i < len; ++i) {
    array[i] = this.readFloat32();
  }

  return array;
};