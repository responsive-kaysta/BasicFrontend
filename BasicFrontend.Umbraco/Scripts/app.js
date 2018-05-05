/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
"use strict";

!(function (e, t) {
  "use strict";"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
})("undefined" != typeof window ? window : undefined, function (e, t) {
  "use strict";var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      y = function e(t) {
    return null != t && t === t.window;
  },
      v = { type: !0, src: !0, noModule: !0 };function m(e, t, n) {
    var i,
        o = (t = t || r).createElement("script");if ((o.text = e, n)) for (i in v) n[i] && (o[i] = n[i]);t.head.appendChild(o).parentNode.removeChild(o);
  }function x(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
  }var b = "3.3.1",
      w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function toArray() {
      return o.call(this);
    }, get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return w.each(this, e);
    }, map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: s, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));return a;
  }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) return !1;return !0;
    }, globalEval: function globalEval(e) {
      m(e);
    }, each: function each(e, t) {
      var n,
          r = 0;if (C(e)) {
        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(T, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : u.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];return e.length = i, e;
    }, grep: function grep(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)) !== s && i.push(e[o]);return i;
    }, map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          s = [];if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);return a.apply([], s);
    }, guid: 1, support: h }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });function C(e) {
    var t = !!e && "length" in e && e.length,
        n = x(e);return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }var E = (function (e) {
    var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y,
        v,
        m,
        x,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        T = 0,
        C = 0,
        E = ae(),
        k = ae(),
        S = ae(),
        D = function D(e, t) {
      return e === t && (f = !0), 0;
    },
        N = ({}).hasOwnProperty,
        A = [],
        j = A.pop,
        q = A.push,
        L = A.push,
        H = A.slice,
        O = function O(e, t) {
      for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        F = new RegExp("^" + M + "*," + M + "*"),
        _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        X = new RegExp(W),
        U = new RegExp("^" + R + "$"),
        V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
        G = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var r = "0x" + t - 65536;return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        re = function re() {
      p();
    },
        ie = me(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (e) {
      L = { apply: A.length ? function (e, t) {
          q.apply(e, H.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;while (e[n++] = t[r++]);e.length = n - 1;
        } };
    }function oe(e, t, r, i) {
      var o,
          s,
          l,
          c,
          f,
          h,
          v,
          m = t && t.ownerDocument,
          T = t ? t.nodeType : 9;if ((r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T)) return r;if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
        if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
          if (9 === T) {
            if (!(l = t.getElementById(o))) return r;if (l.id === o) return r.push(l), r;
          } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
        }if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;while (s--) h[s] = "#" + c + " " + ve(h[s]);v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
          }if (v) try {
            return L.apply(r, m.querySelectorAll(v)), r;
          } catch (e) {} finally {
            c === b && t.removeAttribute("id");
          }
        }
      }return u(e.replace(B, "$1"), t, r, i);
    }function ae() {
      var e = [];function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      }return t;
    }function se(e) {
      return e[b] = !0, e;
    }function ue(e) {
      var t = d.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function le(e, t) {
      var n = e.split("|"),
          i = n.length;while (i--) r.attrHandle[n[i]] = t;
    }function ce(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) while (n = n.nextSibling) if (n === t) return -1;return e ? 1 : -1;
    }function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function de(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function he(e) {
      return se(function (t) {
        return t = +t, se(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
        });
      });
    }function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, p = oe.setDocument = function (e) {
      var t,
          i,
          a = e ? e.ownerDocument || e : w;return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ue(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n,
              r,
              i,
              o = t.getElementById(e);if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];i = t.getElementsByName(e), r = 0;while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
          }return [];
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);if ("*" === e) {
          while (n = o[i++]) 1 === n.nodeType && r.push(n);return r;
        }return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
      }), ue(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = d.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
      })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
      }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) if (t === e) return !0;return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;if (i === o) return ce(e, t);n = e;while (n = n.parentNode) a.unshift(n);n = t;while (n = n.parentNode) s.unshift(n);while (a[r] === s[r]) r++;return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
      }, d) : d;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if (((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t)))) try {
        var r = m.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}return oe(t, d, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;if ((f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f)) {
        while (t = e[o++]) t === e[o] && (i = r.push(o));while (i--) e.splice(r[i], 1);
      }return c = null, e;
    }, i = oe.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while (t = e[r++]) n += i(t);return n;
    }, (r = oe.selectors = { cacheLength: 50, createPseudo: se, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = E[e + " "];return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = oe.attr(r, e);return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                f,
                p,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                y = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                m = !u && !s,
                x = !1;if (y) {
              if (o) {
                while (g) {
                  p = t;while (p = p[g]) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;h = g = "only" === e && !h && "nextSibling";
                }return !0;
              }if ((h = [a ? y.firstChild : y.lastChild], a && m)) {
                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if (1 === p.nodeType && ++x && p === t) {
                  c[e] = [T, d, x];break;
                }
              } else if ((m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;return (x -= i) === r || x % r == 0 && x / r >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            var r,
                o = i(e, t),
                a = o.length;while (a--) e[r = O(e, o[a])] = !(n[r] = o[a]);
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        } }, pseudos: { not: se(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(B, "$1"));return r[b] ? se(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }), has: se(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }), contains: se(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }), lang: se(function (e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === h;
        }, focus: function focus(e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: de(!1), disabled: de(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;return !0;
        }, parent: function parent(e) {
          return !r.pseudos.empty(e);
        }, header: function header(e) {
          return Y.test(e.nodeName);
        }, input: function input(e) {
          return G.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: he(function () {
          return [0];
        }), last: he(function (e, t) {
          return [t - 1];
        }), eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);return e;
        }), odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);return e;
        }), lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);return e;
        }), gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);return e;
        }) } }).pseudos.nth = r.pseudos.eq;for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = fe(t);for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);function ye() {}ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
      var n,
          i,
          o,
          a,
          s,
          u,
          l,
          c = k[e + " "];if (c) return t ? 0 : c.slice(0);s = e, u = [], l = r.preFilter;while (s) {
        n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(B, " ") }), s = s.slice(n.length));for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length));if (!n) break;
      }return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
    };function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;return r;
    }function me(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = C++;return t.first ? function (t, n, i) {
        while (t = t[r]) if (1 === t.nodeType || a) return e(t, n, i);return !1;
      } : function (t, n, u) {
        var l,
            c,
            f,
            p = [T, s];if (u) {
          while (t = t[r]) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
        } else while (t = t[r]) if (1 === t.nodeType || a) if ((f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase())) t = t[r] || t;else {
          if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];if ((c[o] = p, p[2] = e(t, n, u))) return !0;
        }return !1;
      };
    }function xe(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;while (i--) if (!e[i](t, n, r)) return !1;return !0;
      } : e[0];
    }function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);return n;
    }function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));return a;
    }function Te(e, t, n, r, i, o) {
      return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
        var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || !o && t ? g : we(g, p, e, s, u),
            v = n ? i || (o ? e : h || r) ? [] : a : y;if ((n && n(y, v, s, u), r)) {
          l = we(v, d), r(l, [], s, u), c = l.length;while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
        }if (o) {
          if (i || e) {
            if (i) {
              l = [], c = v.length;while (c--) (f = v[c]) && l.push(y[c] = f);i(null, v = [], l, u);
            }c = v.length;while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
          }
        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
      });
    }function Ce(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
        return e === t;
      }, s, !0), f = me(function (e) {
        return O(t, e) > -1;
      }, s, !0), p = [function (e, n, r) {
        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));return t = null, i;
      }]; u < o; u++) if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
        if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
          for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
        }p.push(n);
      }return xe(p);
    }function Ee(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function o(_o, a, s, u, c) {
        var f,
            h,
            y,
            v = 0,
            m = "0",
            x = _o && [],
            b = [],
            w = l,
            C = _o || i && r.find.TAG("*", c),
            E = T += null == w ? 1 : Math.random() || .1,
            k = C.length;for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
          if (i && f) {
            h = 0, a || f.ownerDocument === d || (p(f), s = !g);while (y = e[h++]) if (y(f, a || d, s)) {
              u.push(f);break;
            }c && (T = E);
          }n && ((f = !y && f) && v--, _o && x.push(f));
        }if ((v += m, n && m !== v)) {
          h = 0;while (y = t[h++]) y(x, b, a, s);if (_o) {
            if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));b = we(b);
          }L.apply(u, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
        }return c && (T = E, l = w), x;
      };return n ? se(o) : o;
    }return s = oe.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = S[e + " "];if (!o) {
        t || (t = a(e)), n = t.length;while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);(o = S(e, Ee(i, r))).selector = e;
      }return o;
    }, u = oe.select = function (e, t, n, i) {
      var o,
          u,
          l,
          c,
          f,
          p = "function" == typeof e && e,
          d = !i && a(e = p.selector || e);if ((n = n || [], 1 === d.length)) {
        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;p && (t = t.parentNode), e = e.slice(u.shift().value.length);
        }o = V.needsContext.test(e) ? 0 : u.length;while (o--) {
          if ((l = u[o], r.relative[c = l.type])) break;if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
            if ((u.splice(o, 1), !(e = i.length && ve(u)))) return L.apply(n, i), n;break;
          }
        }
      }return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
    }), ue(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ue(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ue(function (e) {
      return null == e.getAttribute("disabled");
    }) || le(P, function (e, t, n) {
      var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), oe;
  })(e);w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;var k = function k(e, t, n) {
    var r = [],
        i = void 0 !== n;while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
      if (i && w(e).is(n)) break;r.push(e);
    }return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);return n;
  },
      D = w.expr.match.needsContext;function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e, t, n) {
    return g(t) ? w.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return u.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }w.filter = function (e, t, n) {
    var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({ find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
      }));for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);return r > 1 ? w.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    }, is: function is(e) {
      return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
    } });var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init = function (e, t, n) {
    var i, o;if (!e) return this;if ((n = n || q, "string" == typeof e)) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (i[1]) {
        if ((t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);return this;
      }return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, q = w(r);var H = /^(?:parents|prev(?:Until|All))/,
      O = { children: !0, contents: !0, next: !0, prev: !0 };w.fn.extend({ has: function has(e) {
      var t = w(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    }, closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && w(e);if (!D.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
        o.push(n);break;
      }return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    }, index: function index(e) {
      return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } });function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);return e;
  }w.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return k(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return k(e, "parentNode", n);
    }, next: function next(e) {
      return P(e, "nextSibling");
    }, prev: function prev(e) {
      return P(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return k(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return k(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return k(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return k(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return S(e.firstChild);
    }, contents: function contents(e) {
      return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    } }, function (e, t) {
    w.fn[e] = function (n, r) {
      var i = w.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
    };
  });var M = /[^\x20\t\r\n\f]+/g;function R(e) {
    var t = {};return w.each(e.match(M) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);var t,
        n,
        r,
        i,
        o = [],
        a = [],
        s = -1,
        u = function u() {
      for (i = i || e.once, r = t = !0; a.length; s = -1) {
        n = a.shift();while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
      }e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
    },
        l = { add: function add() {
        return o && (n && !t && (s = o.length - 1, a.push(n)), (function t(n) {
          w.each(n, function (n, r) {
            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
          });
        })(arguments), n && !t && u()), this;
      }, remove: function remove() {
        return w.each(arguments, function (e, t) {
          var n;while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--;
        }), this;
      }, has: function has(e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      }, empty: function empty() {
        return o && (o = []), this;
      }, disable: function disable() {
        return i = a = [], o = n = "", this;
      }, disabled: function disabled() {
        return !o;
      }, lock: function lock() {
        return i = a = [], n || t || (o = n = ""), this;
      }, locked: function locked() {
        return !!i;
      }, fireWith: function fireWith(e, n) {
        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
      }, fire: function fire() {
        return l.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!r;
      } };return l;
  };function I(e) {
    return e;
  }function W(e) {
    throw e;
  }function $(e, t, n, r) {
    var i;try {
      e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }w.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          r = "pending",
          i = { state: function state() {
          return r;
        }, always: function always() {
          return o.done(arguments).fail(arguments), this;
        }, "catch": function _catch(e) {
          return i.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return w.Deferred(function (t) {
            w.each(n, function (n, r) {
              var i = g(e[r[4]]) && e[r[4]];o[r[1]](function () {
                var e = i && i.apply(this, arguments);e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, r, i) {
          var o = 0;function a(t, n, r, i) {
            return function () {
              var s = this,
                  u = arguments,
                  l = function l() {
                var e, l;if (!(t < o)) {
                  if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                }
              },
                  c = i ? l : function () {
                try {
                  l();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                }
              };t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
            };
          }return w.Deferred(function (e) {
            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? w.extend(e, i) : i;
        } },
          o = {};return w.each(n, function (e, t) {
        var a = t[2],
            s = t[5];i[t[1]] = a.add, s && a.add(function () {
          r = s;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = a.fireWith;
      }), i.promise(o), t && t.call(o, o), o;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = w.Deferred(),
          s = function s(e) {
        return function (n) {
          r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
        };
      };if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();while (n--) $(i[n], s(n), a.reject);return a.promise();
    } });var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var F = w.Deferred();w.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
    } }), w.ready.then = F.then;function _() {
    r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
  }"complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));var z = function z(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;if ("object" === x(n)) {
      i = !0;for (s in n) z(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
      return l.call(w(e), n);
    })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      X = /^-ms-/,
      U = /-([a-z])/g;function V(e, t) {
    return t.toUpperCase();
  }function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }var Y = function Y(e) {
    return 1 === e.nodeType || 9 === e.nodeType || ! +e.nodeType;
  };function Q() {
    this.expando = w.expando + Q.uid++;
  }Q.uid = 1, Q.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var r,
          i = this.cache(e);if ("string" == typeof t) i[G(t)] = n;else for (r in t) i[G(r)] = t[r];return i;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          r = e[this.expando];if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;while (n--) delete r[t[n]];
        }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !w.isEmptyObject(t);
    } };var J = new Q(),
      K = new Q(),
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;function te(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
  }function ne(e, t, n) {
    var r;if (void 0 === n && 1 === e.nodeType) if ((r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r)))) {
      try {
        n = te(n);
      } catch (e) {}K.set(e, t, n);
    } else n = void 0;return n;
  }w.extend({ hasData: function hasData(e) {
      return K.hasData(e) || J.hasData(e);
    }, data: function data(e, t, n) {
      return K.access(e, t, n);
    }, removeData: function removeData(e, t) {
      K.remove(e, t);
    }, _data: function _data(e, t, n) {
      return J.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      J.remove(e, t);
    } }), w.fn.extend({ data: function data(e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;if (void 0 === e) {
        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
          n = a.length;while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));J.set(o, "hasDataAttrs", !0);
        }return i;
      }return "object" == typeof e ? this.each(function () {
        K.set(this, e);
      }) : z(this, function (t) {
        var n;if (o && void 0 === t) {
          if (void 0 !== (n = K.get(o, e))) return n;if (void 0 !== (n = ne(o, e))) return n;
        } else this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        K.remove(this, e);
      });
    } }), w.extend({ queue: function queue(e, t, n) {
      var r;if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function a() {
        w.dequeue(e, t);
      };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return J.get(e, n) || J.access(e, n, { empty: w.Callbacks("once memory").add(function () {
          J.remove(e, [t + "queue", n]);
        }) });
    } }), w.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };"string" != typeof e && (t = e, e = void 0), e = e || "fx";while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));return s(), i.promise(t);
    } });var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      se = function se(e, t, n, r) {
    var i,
        o,
        a = {};for (o in t) a[o] = e.style[o], e.style[o] = t[o];i = n.apply(e, r || []);for (o in t) e.style[o] = a[o];return i;
  };function ue(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return w.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;c *= 2, w.style(e, t, c + l), n = n || [];
    }return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }var le = {};function ce(e) {
    var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = le[r];return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
  }function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);return e;
  }w.fn.extend({ show: function show() {
      return fe(this, !0);
    }, hide: function hide() {
      return fe(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? w(this).show() : w(this).hide();
      });
    } });var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;function ye(e, t) {
    var n;return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
  }function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
  }var me = /<|&#?\w+;/;function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];while (c--) a = a.lastChild;w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
    } else p.push(t.createTextNode(o));f.textContent = "", d = 0;while (o = p[d++]) if (r && w.inArray(o, r) > -1) i && i.push(o);else if ((l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n)) {
      c = 0;while (o = a[c++]) he.test(o.type || "") && n.push(o);
    }return f;
  }!(function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
        t = r.createElement("input");t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  })();var be = r.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;function Ee() {
    return !0;
  }function ke() {
    return !1;
  }function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }function De(e, t, n, r, i, o) {
    var a, s;if ("object" == typeof t) {
      "string" != typeof n && (r = r || n, n = void 0);for (s in t) De(e, s, n, r, t[s], o);return e;
    }if ((null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i)) i = ke;else if (!i) return e;return 1 === o && (a = i, (i = function (e) {
      return w().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, i, r, n);
    });
  }w.event = { global: {}, add: function add(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.get(e);if (y) {
        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match(M) || [""]).length;while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
      }
    }, remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.hasData(e) && J.get(e);if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;while (l--) if ((s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d)) {
          f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
        } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t = w.event.fix(e),
          n,
          r,
          i,
          o,
          a,
          s,
          u = new Array(arguments.length),
          l = (J.get(this, "events") || {})[t.type] || [],
          c = w.event.special[t.type] || {};for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];if ((t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t))) {
        s = w.event.handlers.call(this, t, l), n = 0;while ((o = s[n++]) && !t.isPropagationStopped()) {
          t.currentTarget = o.elem, r = 0;while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
        }return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);o.length && s.push({ elem: l, handlers: o });
      }return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[w.expando] ? e : new w.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== Se() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === Se() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return N(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    w.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      } };
  }), w.fn.extend({ on: function on(e, t, n, r) {
      return De(this, e, t, n, r);
    }, one: function one(e, t, n, r) {
      return De(this, e, t, n, r, 1);
    }, off: function off(e, t, n) {
      var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    } });var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
  }function He(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }function Pe(e, t) {
    var n, r, i, o, a, s, u, l;if (1 === t.nodeType) {
      if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};for (i in l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
      }K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
    }
  }function Me(e, t) {
    var n = t.nodeName.toLowerCase();"input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }function Re(e, t, n, r) {
    t = a.apply([], t);var i,
        o,
        s,
        u,
        l,
        c,
        f = 0,
        p = e.length,
        d = p - 1,
        y = t[0],
        v = g(y);if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
      var o = e.eq(i);v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
    });if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
    }return e;
  }function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));return e;
  }w.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Ne, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.cloneNode(!0),
          u = w.contains(e.ownerDocument, e);if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);else Pe(e, s);return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
    }, cleanData: function cleanData(e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Y(n)) {
        if (t = n[J.expando]) {
          if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);n[J.expando] = void 0;
        }n[K.expando] && (n[K.expando] = void 0);
      }
    } }), w.fn.extend({ detach: function detach(e) {
      return Ie(this, e, !0);
    }, remove: function remove(e) {
      return Ie(this, e);
    }, text: function text(e) {
      return z(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return Re(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return Re(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Le(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    }, html: function html(e) {
      return z(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return Re(this, arguments, function (t) {
        var n = this.parentNode;w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
      }, e);
    } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());return this.pushStack(r);
    };
  });var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      $e = function $e(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Be = new RegExp(oe.join("|"), "i");!(function () {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);var t = e.getComputedStyle(c);i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
      }
    }function n(e) {
      return Math.round(parseFloat(e));
    }var i,
        o,
        a,
        s,
        u,
        l = r.createElement("div"),
        c = r.createElement("div");c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      }, pixelBoxStyles: function pixelBoxStyles() {
        return t(), s;
      }, pixelPosition: function pixelPosition() {
        return t(), i;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), u;
      }, scrollboxSize: function scrollboxSize() {
        return t(), a;
      } }));
  })();function Fe(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }function _e(e, t) {
    return { get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
      } };
  }var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ue = { position: "absolute", visibility: "hidden", display: "block" },
      Ve = { letterSpacing: "0", fontWeight: "400" },
      Ge = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;function Qe(e) {
    if (e in Ye) return e;var t = e[0].toUpperCase() + e.slice(1),
        n = Ge.length;while (n--) if ((e = Ge[n] + t) in Ye) return e;
  }function Je(e) {
    var t = w.cssProps[e];return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }function Ke(e, t, n) {
    var r = ie.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;if (n === (r ? "border" : "content")) return 0;for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
  }function et(e, t, n) {
    var r = $e(e),
        i = Fe(e, t, r),
        o = "border-box" === w.css(e, "boxSizing", !1, r),
        a = o;if (We.test(i)) {
      if (!n) return i;i = "auto";
    }return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
  }w.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = Fe(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = G(t),
            u = Xe.test(t),
            l = e.style;if ((u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];"string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    }, css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = G(t);return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    } }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = { get: function get(e, n, r) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
          return et(e, t, r);
        });
      }, set: function set(e, n, r) {
        var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
      } };
  }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    w.cssHooks[e + t] = { expand: function expand(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];return i;
      } }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
  }), w.fn.extend({ css: function css(e, t) {
      return z(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;if (Array.isArray(t)) {
          for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);return o;
        }return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    } });function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }w.Tween = tt, tt.prototype = { constructor: tt, init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = tt.propHooks[this.prop];return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = tt.propHooks[this.prop];return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
    } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      }, set: function set(e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, w.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, w.fx = tt.prototype.init, w.fx.step = {};var nt,
      rt,
      it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;function at() {
    rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }function st() {
    return e.setTimeout(function () {
      nt = void 0;
    }), nt = Date.now();
  }function ut(e, t) {
    var n,
        r = 0,
        i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;return t && (i.opacity = i.width = e), i;
  }function lt(e, t, n) {
    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
  }function ct(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        y = J.get(e, "fxshow");n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s();
    }), a.unqueued++, p.always(function () {
      p.always(function () {
        a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
      });
    }));for (r in t) if ((i = t[r], it.test(i))) {
      if ((delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show"))) {
        if ("show" !== i || !y || void 0 === y[r]) continue;g = !0;
      }d[r] = y && y[r] || w.style(e, r);
    }if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1;for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
        g || fe([e]), J.remove(e, "fxshow");for (r in d) w.style(e, r, d[r]);
      })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
    }
  }function ft(e, t) {
    var n, r, i, o, a;for (n in e) if ((r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a)) {
      o = a.expand(o), delete e[r];for (n in o) n in e || (e[n] = o[n], t[n] = i);
    } else t[r] = i;
  }function pt(e, t, n) {
    var r,
        i,
        o = 0,
        a = pt.prefilters.length,
        s = w.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (i) return !1;for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
    },
        l = s.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: nt || st(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(r), r;
      }, stop: function stop(t) {
        var n = 0,
            r = t ? l.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) l.tweens[n].run(1);return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
      } }),
        c = l.props;for (ft(c, l.opts.specialEasing); o < a; o++) if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l;
  }w.Animation = w.extend(pt, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return ue(n.elem, e, ie.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      g(e) ? (t = e, e = ["*"]) : e = e.match(M);for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
    }, prefilters: [ct], prefilter: function prefilter(e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    } }), w.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? w.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t };return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
    }, r;
  }, w.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
    }, animate: function animate(e, t, n, r) {
      var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function a() {
        var t = pt(this, w.extend({}, e), o);(i || J.get(this, "finish")) && t.stop(!0);
      };return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    }, stop: function stop(e, t, n) {
      var r = function r(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = w.timers,
            a = J.get(this);if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));!t && n || w.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = J.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = w.timers,
            a = r ? r.length : 0;for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);delete n.finish;
      });
    } }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];w.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
    };
  }), w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    w.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);n.length || w.fx.stop(), nt = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    rt || (rt = !0, at());
  }, w.fx.stop = function () {
    rt = null;
  }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) {
    return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, (function () {
    var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
  })();var dt,
      ht = w.expr.attrHandle;w.fn.extend({ attr: function attr(e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    } }), w.extend({ attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!h.radioValue && "radio" === t && N(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(M);if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
    } }), dt = { set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ht[t] || w.find.attr;ht[t] = function (e, t, r) {
      var i,
          o,
          a = t.toLowerCase();return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
    };
  });var gt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;w.fn.extend({ prop: function prop(e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    } }), w.extend({ prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = w.find.attr(e, "tabindex");return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), h.optSelected || (w.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  });function vt(e) {
    return (e.match(M) || []).join(" ");
  }function mt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }w.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;if (g(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, mt(this)));
      });if ((t = xt(e)).length) while (n = this[u++]) if ((i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ")) {
        a = 0;while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");i !== (s = vt(r)) && n.setAttribute("class", s);
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;if (g(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, mt(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = xt(e)).length) while (n = this[u++]) if ((i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ")) {
        a = 0;while (o = t[a++]) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");i !== (s = vt(r)) && n.setAttribute("class", s);
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e,
          r = "string" === n || Array.isArray(e);return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, mt(this), t), t);
      }) : this.each(function () {
        var t, i, o, a;if (r) {
          i = 0, o = w(this), a = xt(e);while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
        } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;t = " " + e + " ";while (n = this[r++]) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;return !1;
    } });var bt = /\r/g;w.fn.extend({ val: function val(e) {
      var t,
          n,
          r,
          i = this[0];{
        if (arguments.length) return r = g(e), this.each(function (n) {
          var i;1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        });if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
      }
    } }), w.extend({ valHooks: { option: { get: function get(e) {
          var t = w.find.attr(e, "value");return null != t ? t : vt(w.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
            if ((t = w(n).val(), a)) return t;s.push(t);
          }return s;
        }, set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);return n || (e.selectedIndex = -1), o;
        } } } }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      } }, h.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), h.focusin = "onfocusin" in e;var wt = /^(?:focusinfocus|focusoutblur)$/,
      Tt = function Tt(e) {
    e.stopPropagation();
  };w.extend(w.event, { trigger: function trigger(t, n, i, o) {
      var a,
          s,
          u,
          l,
          c,
          p,
          d,
          h,
          v = [i || r],
          m = f.call(t, "type") ? t.type : t,
          x = f.call(t, "namespace") ? t.namespace.split(".") : [];if ((s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n)))) {
        if (!o && !d.noBubble && !y(i)) {
          for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
        }a = 0;while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });w.event.trigger(r, null, t);
    } }), w.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return w.event.trigger(e, t, n, !0);
    } }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };w.event.special[t] = { setup: function setup() {
        var r = this.ownerDocument || this,
            i = J.access(r, t);i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
      }, teardown: function teardown() {
        var r = this.ownerDocument || this,
            i = J.access(r, t) - 1;i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
      } };
  });var Ct = e.location,
      Et = Date.now(),
      kt = /\?/;w.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };var St = /\[\]$/,
      Dt = /\r?\n/g,
      Nt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;function jt(e, t, n, r) {
    var i;if (Array.isArray(t)) w.each(t, function (t, i) {
      n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x(t)) r(e, t);else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
  }w.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = g(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) jt(n, e[n], t, i);return r.join("&");
  }, w.fn.extend({ serialize: function serialize() {
      return w.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = w(this).val();return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return { name: t.name, value: e.replace(Dt, "\r\n") };
        }) : { name: t.name, value: n.replace(Dt, "\r\n") };
      }).get();
    } });var qt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Bt = r.createElement("a");Bt.href = Ct.href;function Ft(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var r,
          i = 0,
          o = t.toLowerCase().match(M) || [];if (g(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
    };
  }function _t(e, t, n, r) {
    var i = {},
        o = e === Wt;function a(s) {
      var u;return i[s] = !0, w.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
      }), u;
    }return a(t.dataTypes[0]) || !i["*"] && a("*");
  }function zt(e, t) {
    var n,
        r,
        i = w.ajaxSettings.flatOptions || {};for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);return r && w.extend(!0, e, r), e;
  }function Xt(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.contents,
        u = e.dataTypes;while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));if (r) for (i in s) if (s[i] && s[i].test(r)) {
      u.unshift(i);break;
    }if (u[0] in n) o = u[0];else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;break;
        }a || (a = i);
      }o = o || a;
    }if (o) return o !== u[0] && u.unshift(o), n[o];
  }function Ut(e, t, n, r) {
    var i,
        o,
        a,
        s,
        u,
        l = {},
        c = e.dataTypes.slice();if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];o = c.shift();while (o) if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
      if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));break;
      }if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
        t = a(t);
      } catch (e) {
        return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
      }
    }return { state: "success", data: t };
  }w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: Pt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    }, ajaxPrefilter: Ft(It), ajaxTransport: Ft(Wt), ajax: function ajax(t, n) {
      "object" == typeof t && (n = t, t = void 0), n = n || {};var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = w.ajaxSetup({}, n),
          g = h.context || h,
          y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          m = w.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          T = {},
          C = "canceled",
          E = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (c) {
            if (!s) {
              s = {};while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2];
            }t = s[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? a : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == c && (h.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (c) E.always(e[E.status]);else for (t in e) x[t] = [x[t], e[t]];return this;
        }, abort: function abort(e) {
          var t = e || C;return i && i.abort(t), k(0, t), this;
        } };if ((v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain)) {
        l = r.createElement("a");try {
          l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }if ((h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c)) return E;(f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);for (p in h.headers) E.setRequestHeader(p, h.headers[p]);if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();if ((C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E))) {
        if ((E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c)) return E;h.async && h.timeout > 0 && (u = e.setTimeout(function () {
          E.abort("timeout");
        }, h.timeout));try {
          c = !1, i.send(b, k);
        } catch (e) {
          if (c) throw e;k(-1, e);
        }
      } else k(-1, "No Transport");function k(t, n, r, s) {
        var l,
            p,
            d,
            b,
            T,
            C = n;c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
      }return E;
    }, getJSON: function getJSON(e, t, n) {
      return w.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    } }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, r, i) {
      return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
    };
  }), w._evalUrl = function (e) {
    return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, w.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;while (e.firstElementChild) e = e.firstElementChild;return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return g(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = g(e);return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    } }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var Vt = { 0: 200, 1223: 204 },
      Gt = w.ajaxSettings.xhr();h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
    var n, r;if (h.cors || Gt && !t.crossDomain) return { send: function send(i, o) {
        var a,
            s = t.xhr();if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (a in t.xhrFields) s[a] = t.xhrFields[a];t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");for (a in i) s.setRequestHeader(a, i[a]);n = function (e) {
          return function () {
            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
          };
        }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            n && r();
          });
        }, n = n("abort");try {
          s.send(t.hasContent && t.data || null);
        } catch (e) {
          if (n) throw e;
        }
      }, abort: function abort() {
        n && n();
      } };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return w.globalEval(e), e;
      } } }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, n;return { send: function send(i, o) {
          t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function (e) {
            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), r.head.appendChild(t[0]);
        }, abort: function abort() {
          n && n();
        } };
    }
  });var Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;w.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Yt.pop() || w.expando + "_" + Et++;return this[e] = !0, e;
    } }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        a,
        s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return a || w.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      a = arguments;
    }, r.always(function () {
      void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
    }), "script";
  }), h.createHTMLDocument = (function () {
    var e = r.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  })(), w.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];"boolean" == typeof t && (n = t, t = !1);var i, o, a;return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
  }, w.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
      o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = { setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};"static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
    } }, w.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });var t,
          n,
          r = this[0];if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
        }return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;while (e && "static" === w.css(e, "position")) e = e.offsetParent;return e || be;
      });
    } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;w.fn[e] = function (r) {
      return z(this, function (e, r, i) {
        var o;if ((y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
      }, e, r, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
      if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({ Height: "height", Width: "width" }, function (e, t) {
    w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
      w.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");return z(this, function (t, n, i) {
          var o;return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), w.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), w.proxy = function (e, t) {
    var n, r, i;if (("string" == typeof t && (n = e[t], t = e, e = n), g(e))) return r = o.call(arguments, 2), i = function () {
      return e.apply(t || this, r.concat(o.call(arguments)));
    }, i.guid = e.guid = e.guid || w.guid++, i;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return w;
  });var Jt = e.jQuery,
      Kt = e.$;return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
  }, t || (e.jQuery = e.$ = w), w;
});


'use strict';intellisense.annotate(jQuery,{'ajax':function ajax(){ /// <signature>
///   <summary>Perform an asynchronous HTTP (Ajax) request.</summary>
///   <param name="url" type="String">A string containing the URL to which the request is sent.</param>
///   <param name="settings" type="PlainObject">A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with $.ajaxSetup(). See jQuery.ajax( settings ) below for a complete list of all settings.</param>
///   <returns type="jqXHR" />
/// </signature>
/// <signature>
///   <summary>Perform an asynchronous HTTP (Ajax) request.</summary>
///   <param name="settings" type="PlainObject">A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with $.ajaxSetup().</param>
///   <returns type="jqXHR" />
/// </signature>
},'ajaxPrefilter':function ajaxPrefilter(){ /// <signature>
///   <summary>Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax().</summary>
///   <param name="dataTypes" type="String">An optional string containing one or more space-separated dataTypes</param>
///   <param name="handler(options, originalOptions, jqXHR)" type="Function">A handler to set default values for future Ajax requests.</param>
/// </signature>
},'ajaxSetup':function ajaxSetup(){ /// <signature>
///   <summary>Set default values for future Ajax requests. Its use is not recommended.</summary>
///   <param name="options" type="PlainObject">A set of key/value pairs that configure the default Ajax request. All options are optional.</param>
/// </signature>
},'ajaxTransport':function ajaxTransport(){ /// <signature>
///   <summary>Creates an object that handles the actual transmission of Ajax data.</summary>
///   <param name="dataType" type="String">A string identifying the data type to use</param>
///   <param name="handler(options, originalOptions, jqXHR)" type="Function">A handler to return the new transport object to use with the data type provided in the first argument.</param>
/// </signature>
},'boxModel':function boxModel(){ /// <summary>Deprecated in jQuery 1.3 (see jQuery.support). States if the current page, in the user's browser, is being rendered using the W3C CSS Box Model.</summary>
/// <returns type="Boolean" />
},'browser':function browser(){ /// <summary>Contains flags for the useragent, read from navigator.userAgent. This property was removed in jQuery 1.9 and is available only through the jQuery.migrate plugin. Please try to use feature detection instead.</summary>
/// <returns type="PlainObject" />
},'browser.version':function browserVersion(){ /// <summary>The version number of the rendering engine for the user's browser. This property was removed in jQuery 1.9 and is available only through the jQuery.migrate plugin.</summary>
/// <returns type="String" />
},'Callbacks':function Callbacks(){ /// <signature>
///   <summary>A multi-purpose callbacks list object that provides a powerful way to manage callback lists.</summary>
///   <param name="flags" type="String">An optional list of space-separated flags that change how the callback list behaves.</param>
///   <returns type="Callbacks" />
/// </signature>
},'contains':function contains(){ /// <signature>
///   <summary>Check to see if a DOM element is a descendant of another DOM element.</summary>
///   <param name="container" type="Element">The DOM element that may contain the other element.</param>
///   <param name="contained" type="Element">The DOM element that may be contained by (a descendant of) the other element.</param>
///   <returns type="Boolean" />
/// </signature>
},'cssHooks':function cssHooks(){ /// <summary>Hook directly into jQuery to override how particular CSS properties are retrieved or set, normalize CSS property naming, or create custom properties.</summary>
/// <returns type="Object" />
},'data':function data(){ /// <signature>
///   <summary>Returns value at named data store for the element, as set by jQuery.data(element, name, value), or the full data store for the element.</summary>
///   <param name="element" type="Element">The DOM element to query for the data.</param>
///   <param name="key" type="String">Name of the data stored.</param>
///   <returns type="Object" />
/// </signature>
/// <signature>
///   <summary>Returns value at named data store for the element, as set by jQuery.data(element, name, value), or the full data store for the element.</summary>
///   <param name="element" type="Element">The DOM element to query for the data.</param>
///   <returns type="Object" />
/// </signature>
},'Deferred':function Deferred(){ /// <signature>
///   <summary>A constructor function that returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state of any synchronous or asynchronous function.</summary>
///   <param name="beforeStart" type="Function">A function that is called just before the constructor returns.</param>
///   <returns type="Deferred" />
/// </signature>
},'dequeue':function dequeue(){ /// <signature>
///   <summary>Execute the next function on the queue for the matched element.</summary>
///   <param name="element" type="Element">A DOM element from which to remove and execute a queued function.</param>
///   <param name="queueName" type="String">A string containing the name of the queue. Defaults to fx, the standard effects queue.</param>
/// </signature>
},'each':function each(){ /// <signature>
///   <summary>A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.</summary>
///   <param name="collection" type="Object">The object or array to iterate over.</param>
///   <param name="callback(indexInArray, valueOfElement)" type="Function">The function that will be executed on every object.</param>
///   <returns type="Object" />
/// </signature>
},'error':function error(){ /// <signature>
///   <summary>Takes a string and throws an exception containing it.</summary>
///   <param name="message" type="String">The message to send out.</param>
/// </signature>
},'extend':function extend(){ /// <signature>
///   <summary>Merge the contents of two or more objects together into the first object.</summary>
///   <param name="target" type="Object">An object that will receive the new properties if additional objects are passed in or that will extend the jQuery namespace if it is the sole argument.</param>
///   <param name="object1" type="Object">An object containing additional properties to merge in.</param>
///   <param name="objectN" type="Object">Additional objects containing properties to merge in.</param>
///   <returns type="Object" />
/// </signature>
/// <signature>
///   <summary>Merge the contents of two or more objects together into the first object.</summary>
///   <param name="deep" type="Boolean">If true, the merge becomes recursive (aka. deep copy).</param>
///   <param name="target" type="Object">The object to extend. It will receive the new properties.</param>
///   <param name="object1" type="Object">An object containing additional properties to merge in.</param>
///   <param name="objectN" type="Object">Additional objects containing properties to merge in.</param>
///   <returns type="Object" />
/// </signature>
},'fn.extend':function fnExtend(){ /// <signature>
///   <summary>Merge the contents of an object onto the jQuery prototype to provide new jQuery instance methods.</summary>
///   <param name="object" type="Object">An object to merge onto the jQuery prototype.</param>
///   <returns type="Object" />
/// </signature>
},'get':function get(){ /// <signature>
///   <summary>Load data from the server using a HTTP GET request.</summary>
///   <param name="url" type="String">A string containing the URL to which the request is sent.</param>
///   <param name="data" type="">A plain object or string that is sent to the server with the request.</param>
///   <param name="success(data, textStatus, jqXHR)" type="Function">A callback function that is executed if the request succeeds.</param>
///   <param name="dataType" type="String">The type of data expected from the server. Default: Intelligent Guess (xml, json, script, or html).</param>
///   <returns type="jqXHR" />
/// </signature>
},'getJSON':function getJSON(){ /// <signature>
///   <summary>Load JSON-encoded data from the server using a GET HTTP request.</summary>
///   <param name="url" type="String">A string containing the URL to which the request is sent.</param>
///   <param name="data" type="PlainObject">A plain object or string that is sent to the server with the request.</param>
///   <param name="success(data, textStatus, jqXHR)" type="Function">A callback function that is executed if the request succeeds.</param>
///   <returns type="jqXHR" />
/// </signature>
},'getScript':function getScript(){ /// <signature>
///   <summary>Load a JavaScript file from the server using a GET HTTP request, then execute it.</summary>
///   <param name="url" type="String">A string containing the URL to which the request is sent.</param>
///   <param name="success(script, textStatus, jqXHR)" type="Function">A callback function that is executed if the request succeeds.</param>
///   <returns type="jqXHR" />
/// </signature>
},'globalEval':function globalEval(){ /// <signature>
///   <summary>Execute some JavaScript code globally.</summary>
///   <param name="code" type="String">The JavaScript code to execute.</param>
/// </signature>
},'grep':function grep(){ /// <signature>
///   <summary>Finds the elements of an array which satisfy a filter function. The original array is not affected.</summary>
///   <param name="array" type="Array">The array to search through.</param>
///   <param name="function(elementOfArray, indexInArray)" type="Function">The function to process each item against.  The first argument to the function is the item, and the second argument is the index.  The function should return a Boolean value.  this will be the global window object.</param>
///   <param name="invert" type="Boolean">If "invert" is false, or not provided, then the function returns an array consisting of all elements for which "callback" returns true.  If "invert" is true, then the function returns an array consisting of all elements for which "callback" returns false.</param>
///   <returns type="Array" />
/// </signature>
},'hasData':function hasData(){ /// <signature>
///   <summary>Determine whether an element has any jQuery data associated with it.</summary>
///   <param name="element" type="Element">A DOM element to be checked for data.</param>
///   <returns type="Boolean" />
/// </signature>
},'holdReady':function holdReady(){ /// <signature>
///   <summary>Holds or releases the execution of jQuery's ready event.</summary>
///   <param name="hold" type="Boolean">Indicates whether the ready hold is being requested or released</param>
/// </signature>
},'inArray':function inArray(){ /// <signature>
///   <summary>Search for a specified value within an array and return its index (or -1 if not found).</summary>
///   <param name="value" type="Anything">The value to search for.</param>
///   <param name="array" type="Array">An array through which to search.</param>
///   <param name="fromIndex" type="Number">The index of the array at which to begin the search. The default is 0, which will search the whole array.</param>
///   <returns type="Number" />
/// </signature>
},'isArray':function isArray(){ /// <signature>
///   <summary>Determine whether the argument is an array.</summary>
///   <param name="obj" type="Object">Object to test whether or not it is an array.</param>
///   <returns type="Boolean" />
/// </signature>
},'isEmptyObject':function isEmptyObject(){ /// <signature>
///   <summary>Check to see if an object is empty (contains no enumerable properties).</summary>
///   <param name="object" type="Object">The object that will be checked to see if it's empty.</param>
///   <returns type="Boolean" />
/// </signature>
},'isFunction':function isFunction(){ /// <signature>
///   <summary>Determine if the argument passed is a Javascript function object.</summary>
///   <param name="obj" type="PlainObject">Object to test whether or not it is a function.</param>
///   <returns type="Boolean" />
/// </signature>
},'isNumeric':function isNumeric(){ /// <signature>
///   <summary>Determines whether its argument is a number.</summary>
///   <param name="value" type="PlainObject">The value to be tested.</param>
///   <returns type="Boolean" />
/// </signature>
},'isPlainObject':function isPlainObject(){ /// <signature>
///   <summary>Check to see if an object is a plain object (created using "{}" or "new Object").</summary>
///   <param name="object" type="PlainObject">The object that will be checked to see if it's a plain object.</param>
///   <returns type="Boolean" />
/// </signature>
},'isWindow':function isWindow(){ /// <signature>
///   <summary>Determine whether the argument is a window.</summary>
///   <param name="obj" type="PlainObject">Object to test whether or not it is a window.</param>
///   <returns type="Boolean" />
/// </signature>
},'isXMLDoc':function isXMLDoc(){ /// <signature>
///   <summary>Check to see if a DOM node is within an XML document (or is an XML document).</summary>
///   <param name="node" type="Element">The DOM node that will be checked to see if it's in an XML document.</param>
///   <returns type="Boolean" />
/// </signature>
},'makeArray':function makeArray(){ /// <signature>
///   <summary>Convert an array-like object into a true JavaScript array.</summary>
///   <param name="obj" type="PlainObject">Any object to turn into a native Array.</param>
///   <returns type="Array" />
/// </signature>
},'map':function map(){ /// <signature>
///   <summary>Translate all items in an array or object to new array of items.</summary>
///   <param name="array" type="Array">The Array to translate.</param>
///   <param name="callback(elementOfArray, indexInArray)" type="Function">The function to process each item against.  The first argument to the function is the array item, the second argument is the index in array The function can return any value. Within the function, this refers to the global (window) object.</param>
///   <returns type="Array" />
/// </signature>
/// <signature>
///   <summary>Translate all items in an array or object to new array of items.</summary>
///   <param name="arrayOrObject" type="">The Array or Object to translate.</param>
///   <param name="callback( value, indexOrKey )" type="Function">The function to process each item against.  The first argument to the function is the value; the second argument is the index or key of the array or object property. The function can return any value to add to the array. A returned array will be flattened into the resulting array. Within the function, this refers to the global (window) object.</param>
///   <returns type="Array" />
/// </signature>
},'merge':function merge(){ /// <signature>
///   <summary>Merge the contents of two arrays together into the first array.</summary>
///   <param name="first" type="Array">The first array to merge, the elements of second added.</param>
///   <param name="second" type="Array">The second array to merge into the first, unaltered.</param>
///   <returns type="Array" />
/// </signature>
},'noConflict':function noConflict(){ /// <signature>
///   <summary>Relinquish jQuery's control of the $ variable.</summary>
///   <param name="removeAll" type="Boolean">A Boolean indicating whether to remove all jQuery variables from the global scope (including jQuery itself).</param>
///   <returns type="Object" />
/// </signature>
},'noop':function noop(){ /// <summary>An empty function.</summary>
},'now':function now(){ /// <summary>Return a number representing the current time.</summary>
/// <returns type="Number" />
},'param':function param(){ /// <signature>
///   <summary>Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request.</summary>
///   <param name="obj" type="">An array or object to serialize.</param>
///   <returns type="String" />
/// </signature>
/// <signature>
///   <summary>Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request.</summary>
///   <param name="obj" type="">An array or object to serialize.</param>
///   <param name="traditional" type="Boolean">A Boolean indicating whether to perform a traditional "shallow" serialization.</param>
///   <returns type="String" />
/// </signature>
},'parseHTML':function parseHTML(){ /// <signature>
///   <summary>Parses a string into an array of DOM nodes.</summary>
///   <param name="data" type="String">HTML string to be parsed</param>
///   <param name="context" type="Element">Document element to serve as the context in which the HTML fragment will be created</param>
///   <param name="keepScripts" type="Boolean">A Boolean indicating whether to include scripts passed in the HTML string</param>
///   <returns type="Array" />
/// </signature>
},'parseJSON':function parseJSON(){ /// <signature>
///   <summary>Takes a well-formed JSON string and returns the resulting JavaScript object.</summary>
///   <param name="json" type="String">The JSON string to parse.</param>
///   <returns type="Object" />
/// </signature>
},'parseXML':function parseXML(){ /// <signature>
///   <summary>Parses a string into an XML document.</summary>
///   <param name="data" type="String">a well-formed XML string to be parsed</param>
///   <returns type="XMLDocument" />
/// </signature>
},'post':function post(){ /// <signature>
///   <summary>Load data from the server using a HTTP POST request.</summary>
///   <param name="url" type="String">A string containing the URL to which the request is sent.</param>
///   <param name="data" type="">A plain object or string that is sent to the server with the request.</param>
///   <param name="success(data, textStatus, jqXHR)" type="Function">A callback function that is executed if the request succeeds. Required if dataType is provided, but can be null in that case.</param>
///   <param name="dataType" type="String">The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).</param>
///   <returns type="jqXHR" />
/// </signature>
},'proxy':function proxy(){ /// <signature>
///   <summary>Takes a function and returns a new one that will always have a particular context.</summary>
///   <param name="function" type="Function">The function whose context will be changed.</param>
///   <param name="context" type="PlainObject">The object to which the context (this) of the function should be set.</param>
///   <returns type="Function" />
/// </signature>
/// <signature>
///   <summary>Takes a function and returns a new one that will always have a particular context.</summary>
///   <param name="context" type="PlainObject">The object to which the context of the function should be set.</param>
///   <param name="name" type="String">The name of the function whose context will be changed (should be a property of the context object).</param>
///   <returns type="Function" />
/// </signature>
/// <signature>
///   <summary>Takes a function and returns a new one that will always have a particular context.</summary>
///   <param name="function" type="Function">The function whose context will be changed.</param>
///   <param name="context" type="PlainObject">The object to which the context (this) of the function should be set.</param>
///   <param name="additionalArguments" type="Anything">Any number of arguments to be passed to the function referenced in the function argument.</param>
///   <returns type="Function" />
/// </signature>
/// <signature>
///   <summary>Takes a function and returns a new one that will always have a particular context.</summary>
///   <param name="context" type="PlainObject">The object to which the context of the function should be set.</param>
///   <param name="name" type="String">The name of the function whose context will be changed (should be a property of the context object).</param>
///   <param name="additionalArguments" type="Anything">Any number of arguments to be passed to the function named in the name argument.</param>
///   <returns type="Function" />
/// </signature>
},'queue':function queue(){ /// <signature>
///   <summary>Manipulate the queue of functions to be executed on the matched element.</summary>
///   <param name="element" type="Element">A DOM element where the array of queued functions is attached.</param>
///   <param name="queueName" type="String">A string containing the name of the queue. Defaults to fx, the standard effects queue.</param>
///   <param name="newQueue" type="Array">An array of functions to replace the current queue contents.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Manipulate the queue of functions to be executed on the matched element.</summary>
///   <param name="element" type="Element">A DOM element on which to add a queued function.</param>
///   <param name="queueName" type="String">A string containing the name of the queue. Defaults to fx, the standard effects queue.</param>
///   <param name="callback()" type="Function">The new function to add to the queue.</param>
///   <returns type="jQuery" />
/// </signature>
},'removeData':function removeData(){ /// <signature>
///   <summary>Remove a previously-stored piece of data.</summary>
///   <param name="element" type="Element">A DOM element from which to remove data.</param>
///   <param name="name" type="String">A string naming the piece of data to remove.</param>
///   <returns type="jQuery" />
/// </signature>
},'sub':function sub(){ /// <summary>Creates a new copy of jQuery whose properties and methods can be modified without affecting the original jQuery object.</summary>
/// <returns type="jQuery" />
},'support':function support(){ /// <summary>A collection of properties that represent the presence of different browser features or bugs. Primarily intended for jQuery's internal use; specific properties may be removed when they are no longer needed internally to improve page startup performance.</summary>
/// <returns type="Object" />
},'trim':function trim(){ /// <signature>
///   <summary>Remove the whitespace from the beginning and end of a string.</summary>
///   <param name="str" type="String">The string to trim.</param>
///   <returns type="String" />
/// </signature>
},'type':function type(){ /// <signature>
///   <summary>Determine the internal JavaScript [[Class]] of an object.</summary>
///   <param name="obj" type="PlainObject">Object to get the internal JavaScript [[Class]] of.</param>
///   <returns type="String" />
/// </signature>
},'unique':function unique(){ /// <signature>
///   <summary>Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers.</summary>
///   <param name="array" type="Array">The Array of DOM elements.</param>
///   <returns type="Array" />
/// </signature>
},'when':function when(){ /// <signature>
///   <summary>Provides a way to execute callback functions based on one or more objects, usually Deferred objects that represent asynchronous events.</summary>
///   <param name="deferreds" type="Deferred">One or more Deferred objects, or plain JavaScript objects.</param>
///   <returns type="Promise" />
/// </signature>
}});var _1228819969=jQuery.Callbacks;jQuery.Callbacks = function(flags){var _object=_1228819969(flags);intellisense.annotate(_object,{'add':function add(){ /// <signature>
///   <summary>Add a callback or a collection of callbacks to a callback list.</summary>
///   <param name="callbacks" type="">A function, or array of functions, that are to be added to the callback list.</param>
///   <returns type="Callbacks" />
/// </signature>
},'disable':function disable(){ /// <summary>Disable a callback list from doing anything more.</summary>
/// <returns type="Callbacks" />
},'disabled':function disabled(){ /// <summary>Determine if the callbacks list has been disabled.</summary>
/// <returns type="Boolean" />
},'empty':function empty(){ /// <summary>Remove all of the callbacks from a list.</summary>
/// <returns type="Callbacks" />
},'fire':function fire(){ /// <signature>
///   <summary>Call all of the callbacks with the given arguments</summary>
///   <param name="arguments" type="Anything">The argument or list of arguments to pass back to the callback list.</param>
///   <returns type="Callbacks" />
/// </signature>
},'fired':function fired(){ /// <summary>Determine if the callbacks have already been called at least once.</summary>
/// <returns type="Boolean" />
},'fireWith':function fireWith(){ /// <signature>
///   <summary>Call all callbacks in a list with the given context and arguments.</summary>
///   <param name="context" type="">A reference to the context in which the callbacks in the list should be fired.</param>
///   <param name="args" type="">An argument, or array of arguments, to pass to the callbacks in the list.</param>
///   <returns type="Callbacks" />
/// </signature>
},'has':function has(){ /// <signature>
///   <summary>Determine whether a supplied callback is in a list</summary>
///   <param name="callback" type="Function">The callback to search for.</param>
///   <returns type="Boolean" />
/// </signature>
},'lock':function lock(){ /// <summary>Lock a callback list in its current state.</summary>
/// <returns type="Callbacks" />
},'locked':function locked(){ /// <summary>Determine if the callbacks list has been locked.</summary>
/// <returns type="Boolean" />
},'remove':function remove(){ /// <signature>
///   <summary>Remove a callback or a collection of callbacks from a callback list.</summary>
///   <param name="callbacks" type="">A function, or array of functions, that are to be removed from the callback list.</param>
///   <returns type="Callbacks" />
/// </signature>
}});return _object;};intellisense.redirectDefinition(jQuery.Callbacks,_1228819969);var _731531622=jQuery.Deferred;jQuery.Deferred = function(func){var _object=_731531622(func);intellisense.annotate(_object,{'always':function always(){ /// <signature>
///   <summary>Add handlers to be called when the Deferred object is either resolved or rejected.</summary>
///   <param name="alwaysCallbacks" type="Function">A function, or array of functions, that is called when the Deferred is resolved or rejected.</param>
///   <param name="alwaysCallbacks" type="Function">Optional additional functions, or arrays of functions, that are called when the Deferred is resolved or rejected.</param>
///   <returns type="Deferred" />
/// </signature>
},'done':function done(){ /// <signature>
///   <summary>Add handlers to be called when the Deferred object is resolved.</summary>
///   <param name="doneCallbacks" type="Function">A function, or array of functions, that are called when the Deferred is resolved.</param>
///   <param name="doneCallbacks" type="Function">Optional additional functions, or arrays of functions, that are called when the Deferred is resolved.</param>
///   <returns type="Deferred" />
/// </signature>
},'fail':function fail(){ /// <signature>
///   <summary>Add handlers to be called when the Deferred object is rejected.</summary>
///   <param name="failCallbacks" type="Function">A function, or array of functions, that are called when the Deferred is rejected.</param>
///   <param name="failCallbacks" type="Function">Optional additional functions, or arrays of functions, that are called when the Deferred is rejected.</param>
///   <returns type="Deferred" />
/// </signature>
},'isRejected':function isRejected(){ /// <summary>Determine whether a Deferred object has been rejected.</summary>
/// <returns type="Boolean" />
},'isResolved':function isResolved(){ /// <summary>Determine whether a Deferred object has been resolved.</summary>
/// <returns type="Boolean" />
},'notify':function notify(){ /// <signature>
///   <summary>Call the progressCallbacks on a Deferred object with the given args.</summary>
///   <param name="args" type="Object">Optional arguments that are passed to the progressCallbacks.</param>
///   <returns type="Deferred" />
/// </signature>
},'notifyWith':function notifyWith(){ /// <signature>
///   <summary>Call the progressCallbacks on a Deferred object with the given context and args.</summary>
///   <param name="context" type="Object">Context passed to the progressCallbacks as the this object.</param>
///   <param name="args" type="Object">Optional arguments that are passed to the progressCallbacks.</param>
///   <returns type="Deferred" />
/// </signature>
},'pipe':function pipe(){ /// <signature>
///   <summary>Utility method to filter and/or chain Deferreds.</summary>
///   <param name="doneFilter" type="Function">An optional function that is called when the Deferred is resolved.</param>
///   <param name="failFilter" type="Function">An optional function that is called when the Deferred is rejected.</param>
///   <returns type="Promise" />
/// </signature>
/// <signature>
///   <summary>Utility method to filter and/or chain Deferreds.</summary>
///   <param name="doneFilter" type="Function">An optional function that is called when the Deferred is resolved.</param>
///   <param name="failFilter" type="Function">An optional function that is called when the Deferred is rejected.</param>
///   <param name="progressFilter" type="Function">An optional function that is called when progress notifications are sent to the Deferred.</param>
///   <returns type="Promise" />
/// </signature>
},'progress':function progress(){ /// <signature>
///   <summary>Add handlers to be called when the Deferred object generates progress notifications.</summary>
///   <param name="progressCallbacks" type="">A function, or array of functions, to be called when the Deferred generates progress notifications.</param>
///   <returns type="Deferred" />
/// </signature>
},'promise':function promise(){ /// <signature>
///   <summary>Return a Deferred's Promise object.</summary>
///   <param name="target" type="Object">Object onto which the promise methods have to be attached</param>
///   <returns type="Promise" />
/// </signature>
},'reject':function reject(){ /// <signature>
///   <summary>Reject a Deferred object and call any failCallbacks with the given args.</summary>
///   <param name="args" type="Anything">Optional arguments that are passed to the failCallbacks.</param>
///   <returns type="Deferred" />
/// </signature>
},'rejectWith':function rejectWith(){ /// <signature>
///   <summary>Reject a Deferred object and call any failCallbacks with the given context and args.</summary>
///   <param name="context" type="Object">Context passed to the failCallbacks as the this object.</param>
///   <param name="args" type="Array">An optional array of arguments that are passed to the failCallbacks.</param>
///   <returns type="Deferred" />
/// </signature>
},'resolve':function resolve(){ /// <signature>
///   <summary>Resolve a Deferred object and call any doneCallbacks with the given args.</summary>
///   <param name="args" type="Anything">Optional arguments that are passed to the doneCallbacks.</param>
///   <returns type="Deferred" />
/// </signature>
},'resolveWith':function resolveWith(){ /// <signature>
///   <summary>Resolve a Deferred object and call any doneCallbacks with the given context and args.</summary>
///   <param name="context" type="Object">Context passed to the doneCallbacks as the this object.</param>
///   <param name="args" type="Array">An optional array of arguments that are passed to the doneCallbacks.</param>
///   <returns type="Deferred" />
/// </signature>
},'state':function state(){ /// <summary>Determine the current state of a Deferred object.</summary>
/// <returns type="String" />
},'then':function then(){ /// <signature>
///   <summary>Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.</summary>
///   <param name="doneFilter" type="Function">A function that is called when the Deferred is resolved.</param>
///   <param name="failFilter" type="Function">An optional function that is called when the Deferred is rejected.</param>
///   <param name="progressFilter" type="Function">An optional function that is called when progress notifications are sent to the Deferred.</param>
///   <returns type="Promise" />
/// </signature>
/// <signature>
///   <summary>Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.</summary>
///   <param name="doneCallbacks" type="Function">A function, or array of functions, called when the Deferred is resolved.</param>
///   <param name="failCallbacks" type="Function">A function, or array of functions, called when the Deferred is rejected.</param>
///   <returns type="Promise" />
/// </signature>
/// <signature>
///   <summary>Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.</summary>
///   <param name="doneCallbacks" type="Function">A function, or array of functions, called when the Deferred is resolved.</param>
///   <param name="failCallbacks" type="Function">A function, or array of functions, called when the Deferred is rejected.</param>
///   <param name="progressCallbacks" type="Function">A function, or array of functions, called when the Deferred notifies progress.</param>
///   <returns type="Promise" />
/// </signature>
}});return _object;};intellisense.redirectDefinition(jQuery.Callbacks,_731531622);intellisense.annotate(jQuery.Event.prototype,{'currentTarget':function currentTarget(){ /// <summary>The current DOM element within the event bubbling phase.</summary>
/// <returns type="Element" />
},'data':function data(){ /// <summary>An optional object of data passed to an event method when the current executing handler is bound.</summary>
/// <returns type="Object" />
},'delegateTarget':function delegateTarget(){ /// <summary>The element where the currently-called jQuery event handler was attached.</summary>
/// <returns type="Element" />
},'isDefaultPrevented':function isDefaultPrevented(){ /// <summary>Returns whether event.preventDefault() was ever called on this event object.</summary>
/// <returns type="Boolean" />
},'isImmediatePropagationStopped':function isImmediatePropagationStopped(){ /// <summary>Returns whether event.stopImmediatePropagation() was ever called on this event object.</summary>
/// <returns type="Boolean" />
},'isPropagationStopped':function isPropagationStopped(){ /// <summary>Returns whether event.stopPropagation() was ever called on this event object.</summary>
/// <returns type="Boolean" />
},'metaKey':function metaKey(){ /// <summary>Indicates whether the META key was pressed when the event fired.</summary>
/// <returns type="Boolean" />
},'namespace':function namespace(){ /// <summary>The namespace specified when the event was triggered.</summary>
/// <returns type="String" />
},'pageX':function pageX(){ /// <summary>The mouse position relative to the left edge of the document.</summary>
/// <returns type="Number" />
},'pageY':function pageY(){ /// <summary>The mouse position relative to the top edge of the document.</summary>
/// <returns type="Number" />
},'preventDefault':function preventDefault(){ /// <summary>If this method is called, the default action of the event will not be triggered.</summary>
},'relatedTarget':function relatedTarget(){ /// <summary>The other DOM element involved in the event, if any.</summary>
/// <returns type="Element" />
},'result':function result(){ /// <summary>The last value returned by an event handler that was triggered by this event, unless the value was undefined.</summary>
/// <returns type="Object" />
},'stopImmediatePropagation':function stopImmediatePropagation(){ /// <summary>Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree.</summary>
},'stopPropagation':function stopPropagation(){ /// <summary>Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.</summary>
},'target':function target(){ /// <summary>The DOM element that initiated the event.</summary>
/// <returns type="Element" />
},'timeStamp':function timeStamp(){ /// <summary>The difference in milliseconds between the time the browser created the event and January 1, 1970.</summary>
/// <returns type="Number" />
},'type':function type(){ /// <summary>Describes the nature of the event.</summary>
/// <returns type="String" />
},'which':function which(){ /// <summary>For key or mouse events, this property indicates the specific key or button that was pressed.</summary>
/// <returns type="Number" />
}});intellisense.annotate(jQuery.fn,{'add':function add(){ /// <signature>
///   <summary>Add elements to the set of matched elements.</summary>
///   <param name="selector" type="String">A string representing a selector expression to find additional elements to add to the set of matched elements.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Add elements to the set of matched elements.</summary>
///   <param name="elements" type="Array">One or more elements to add to the set of matched elements.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Add elements to the set of matched elements.</summary>
///   <param name="html" type="htmlString">An HTML fragment to add to the set of matched elements.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Add elements to the set of matched elements.</summary>
///   <param name="jQuery object" type="jQuery object ">An existing jQuery object to add to the set of matched elements.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Add elements to the set of matched elements.</summary>
///   <param name="selector" type="String">A string representing a selector expression to find additional elements to add to the set of matched elements.</param>
///   <param name="context" type="Element">The point in the document at which the selector should begin matching; similar to the context argument of the $(selector, context) method.</param>
///   <returns type="jQuery" />
/// </signature>
},'addBack':function addBack(){ /// <signature>
///   <summary>Add the previous set of elements on the stack to the current set, optionally filtered by a selector.</summary>
///   <param name="selector" type="String">A string containing a selector expression to match the current set of elements against.</param>
///   <returns type="jQuery" />
/// </signature>
},'addClass':function addClass(){ /// <signature>
///   <summary>Adds the specified class(es) to each of the set of matched elements.</summary>
///   <param name="className" type="String">One or more space-separated classes to be added to the class attribute of each matched element.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Adds the specified class(es) to each of the set of matched elements.</summary>
///   <param name="function(index, currentClass)" type="Function">A function returning one or more space-separated class names to be added to the existing class name(s). Receives the index position of the element in the set and the existing class name(s) as arguments. Within the function, this refers to the current element in the set.</param>
///   <returns type="jQuery" />
/// </signature>
},'after':function after(){ /// <signature>
///   <summary>Insert content, specified by the parameter, after each element in the set of matched elements.</summary>
///   <param name="content" type="">HTML string, DOM element, or jQuery object to insert after each element in the set of matched elements.</param>
///   <param name="content" type="">One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert after each element in the set of matched elements.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Insert content, specified by the parameter, after each element in the set of matched elements.</summary>
///   <param name="function(index)" type="Function">A function that returns an HTML string, DOM element(s), or jQuery object to insert after each element in the set of matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.</param>
///   <returns type="jQuery" />
/// </signature>
},'ajaxComplete':function ajaxComplete(){ /// <signature>
///   <summary>Register a handler to be called when Ajax requests complete. This is an AjaxEvent.</summary>
///   <param name="handler(event, XMLHttpRequest, ajaxOptions)" type="Function">The function to be invoked.</param>
///   <returns type="jQuery" />
/// </signature>
},'ajaxError':function ajaxError(){ /// <signature>
///   <summary>Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event.</summary>
///   <param name="handler(event, jqXHR, ajaxSettings, thrownError)" type="Function">The function to be invoked.</param>
///   <returns type="jQuery" />
/// </signature>
},'ajaxSend':function ajaxSend(){ /// <signature>
///   <summary>Attach a function to be executed before an Ajax request is sent. This is an Ajax Event.</summary>
///   <param name="handler(event, jqXHR, ajaxOptions)" type="Function">The function to be invoked.</param>
///   <returns type="jQuery" />
/// </signature>
},'ajaxStart':function ajaxStart(){ /// <signature>
///   <summary>Register a handler to be called when the first Ajax request begins. This is an Ajax Event.</summary>
///   <param name="handler()" type="Function">The function to be invoked.</param>
///   <returns type="jQuery" />
/// </signature>
},'ajaxStop':function ajaxStop(){ /// <signature>
///   <summary>Register a handler to be called when all Ajax requests have completed. This is an Ajax Event.</summary>
///   <param name="handler()" type="Function">The function to be invoked.</param>
///   <returns type="jQuery" />
/// </signature>
},'ajaxSuccess':function ajaxSuccess(){ /// <signature>
///   <summary>Attach a function to be executed whenever an Ajax request completes successfully. This is an Ajax Event.</summary>
///   <param name="handler(event, XMLHttpRequest, ajaxOptions)" type="Function">The function to be invoked.</param>
///   <returns type="jQuery" />
/// </signature>
},'all':function all(){ /// <summary>Selects all elements.</summary>
},'andSelf':function andSelf(){ /// <summary>Add the previous set of elements on the stack to the current set.</summary>
/// <returns type="jQuery" />
},'animate':function animate(){ /// <signature>
///   <summary>Perform a custom animation of a set of CSS properties.</summary>
///   <param name="properties" type="PlainObject">An object of CSS properties and values that the animation will move toward.</param>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="easing" type="String">A string indicating which easing function to use for the transition.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Perform a custom animation of a set of CSS properties.</summary>
///   <param name="properties" type="PlainObject">An object of CSS properties and values that the animation will move toward.</param>
///   <param name="options" type="PlainObject">A map of additional options to pass to the method.</param>
///   <returns type="jQuery" />
/// </signature>
},'animated':function animated(){ /// <summary>Select all elements that are in the progress of an animation at the time the selector is run.</summary>
},'append':function append(){ /// <signature>
///   <summary>Insert content, specified by the parameter, to the end of each element in the set of matched elements.</summary>
///   <param name="content" type="">DOM element, HTML string, or jQuery object to insert at the end of each element in the set of matched elements.</param>
///   <param name="content" type="">One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the end of each element in the set of matched elements.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Insert content, specified by the parameter, to the end of each element in the set of matched elements.</summary>
///   <param name="function(index, html)" type="Function">A function that returns an HTML string, DOM element(s), or jQuery object to insert at the end of each element in the set of matched elements. Receives the index position of the element in the set and the old HTML value of the element as arguments. Within the function, this refers to the current element in the set.</param>
///   <returns type="jQuery" />
/// </signature>
},'appendTo':function appendTo(){ /// <signature>
///   <summary>Insert every element in the set of matched elements to the end of the target.</summary>
///   <param name="target" type="">A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted at the end of the element(s) specified by this parameter.</param>
///   <returns type="jQuery" />
/// </signature>
},'attr':function attr(){ /// <signature>
///   <summary>Set one or more attributes for the set of matched elements.</summary>
///   <param name="attributeName" type="String">The name of the attribute to set.</param>
///   <param name="value" type="">A value to set for the attribute.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Set one or more attributes for the set of matched elements.</summary>
///   <param name="attributes" type="PlainObject">An object of attribute-value pairs to set.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Set one or more attributes for the set of matched elements.</summary>
///   <param name="attributeName" type="String">The name of the attribute to set.</param>
///   <param name="function(index, attr)" type="Function">A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old attribute value as arguments.</param>
///   <returns type="jQuery" />
/// </signature>
},'attributeContains':function attributeContains(){ /// <signature>
///   <summary>Selects elements that have the specified attribute with a value containing the a given substring.</summary>
///   <param name="attribute" type="String">An attribute name.</param>
///   <param name="value" type="String">An attribute value. Can be either an unquoted single word or a quoted string.</param>
/// </signature>
},'attributeContainsPrefix':function attributeContainsPrefix(){ /// <signature>
///   <summary>Selects elements that have the specified attribute with a value either equal to a given string or starting with that string followed by a hyphen (-).</summary>
///   <param name="attribute" type="String">An attribute name.</param>
///   <param name="value" type="String">An attribute value. Can be either an unquoted single word or a quoted string.</param>
/// </signature>
},'attributeContainsWord':function attributeContainsWord(){ /// <signature>
///   <summary>Selects elements that have the specified attribute with a value containing a given word, delimited by spaces.</summary>
///   <param name="attribute" type="String">An attribute name.</param>
///   <param name="value" type="String">An attribute value. Can be either an unquoted single word or a quoted string.</param>
/// </signature>
},'attributeEndsWith':function attributeEndsWith(){ /// <signature>
///   <summary>Selects elements that have the specified attribute with a value ending exactly with a given string. The comparison is case sensitive.</summary>
///   <param name="attribute" type="String">An attribute name.</param>
///   <param name="value" type="String">An attribute value. Can be either an unquoted single word or a quoted string.</param>
/// </signature>
},'attributeEquals':function attributeEquals(){ /// <signature>
///   <summary>Selects elements that have the specified attribute with a value exactly equal to a certain value.</summary>
///   <param name="attribute" type="String">An attribute name.</param>
///   <param name="value" type="String">An attribute value. Can be either an unquoted single word or a quoted string.</param>
/// </signature>
},'attributeHas':function attributeHas(){ /// <signature>
///   <summary>Selects elements that have the specified attribute, with any value.</summary>
///   <param name="attribute" type="String">An attribute name.</param>
/// </signature>
},'attributeMultiple':function attributeMultiple(){ /// <signature>
///   <summary>Matches elements that match all of the specified attribute filters.</summary>
///   <param name="attributeFilter1" type="String">An attribute filter.</param>
///   <param name="attributeFilter2" type="String">Another attribute filter, reducing the selection even more</param>
///   <param name="attributeFilterN" type="String">As many more attribute filters as necessary</param>
/// </signature>
},'attributeNotEqual':function attributeNotEqual(){ /// <signature>
///   <summary>Select elements that either don't have the specified attribute, or do have the specified attribute but not with a certain value.</summary>
///   <param name="attribute" type="String">An attribute name.</param>
///   <param name="value" type="String">An attribute value. Can be either an unquoted single word or a quoted string.</param>
/// </signature>
},'attributeStartsWith':function attributeStartsWith(){ /// <signature>
///   <summary>Selects elements that have the specified attribute with a value beginning exactly with a given string.</summary>
///   <param name="attribute" type="String">An attribute name.</param>
///   <param name="value" type="String">An attribute value. Can be either an unquoted single word or a quoted string.</param>
/// </signature>
},'before':function before(){ /// <signature>
///   <summary>Insert content, specified by the parameter, before each element in the set of matched elements.</summary>
///   <param name="content" type="">HTML string, DOM element, or jQuery object to insert before each element in the set of matched elements.</param>
///   <param name="content" type="">One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert before each element in the set of matched elements.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Insert content, specified by the parameter, before each element in the set of matched elements.</summary>
///   <param name="function" type="Function">A function that returns an HTML string, DOM element(s), or jQuery object to insert before each element in the set of matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.</param>
///   <returns type="jQuery" />
/// </signature>
},'bind':function bind(){ /// <signature>
///   <summary>Attach a handler to an event for the elements.</summary>
///   <param name="eventType" type="String">A string containing one or more DOM event types, such as "click" or "submit," or custom event names.</param>
///   <param name="eventData" type="Object">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Attach a handler to an event for the elements.</summary>
///   <param name="eventType" type="String">A string containing one or more DOM event types, such as "click" or "submit," or custom event names.</param>
///   <param name="eventData" type="Object">An object containing data that will be passed to the event handler.</param>
///   <param name="preventBubble" type="Boolean">Setting the third argument to false will attach a function that prevents the default action from occurring and stops the event from bubbling. The default is true.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Attach a handler to an event for the elements.</summary>
///   <param name="events" type="Object">An object containing one or more DOM event types and functions to execute for them.</param>
///   <returns type="jQuery" />
/// </signature>
},'blur':function blur(){ /// <signature>
///   <summary>Bind an event handler to the "blur" JavaScript event, or trigger that event on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "blur" JavaScript event, or trigger that event on an element.</summary>
///   <param name="eventData" type="Object">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'button':function button(){ /// <summary>Selects all button elements and elements of type button.</summary>
},'change':function change(){ /// <signature>
///   <summary>Bind an event handler to the "change" JavaScript event, or trigger that event on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "change" JavaScript event, or trigger that event on an element.</summary>
///   <param name="eventData" type="Object">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'checkbox':function checkbox(){ /// <summary>Selects all elements of type checkbox.</summary>
},'checked':function checked(){ /// <summary>Matches all elements that are checked or selected.</summary>
},'child':function child(){ /// <signature>
///   <summary>Selects all direct child elements specified by "child" of elements specified by "parent".</summary>
///   <param name="parent" type="String">Any valid selector.</param>
///   <param name="child" type="String">A selector to filter the child elements.</param>
/// </signature>
},'children':function children(){ /// <signature>
///   <summary>Get the children of each element in the set of matched elements, optionally filtered by a selector.</summary>
///   <param name="selector" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
},'class':function _class(){ /// <signature>
///   <summary>Selects all elements with the given class.</summary>
///   <param name="class" type="String">A class to search for. An element can have multiple classes; only one of them must match.</param>
/// </signature>
},'clearQueue':function clearQueue(){ /// <signature>
///   <summary>Remove from the queue all items that have not yet been run.</summary>
///   <param name="queueName" type="String">A string containing the name of the queue. Defaults to fx, the standard effects queue.</param>
///   <returns type="jQuery" />
/// </signature>
},'click':function click(){ /// <signature>
///   <summary>Bind an event handler to the "click" JavaScript event, or trigger that event on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "click" JavaScript event, or trigger that event on an element.</summary>
///   <param name="eventData" type="Object">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'clone':function clone(){ /// <signature>
///   <summary>Create a deep copy of the set of matched elements.</summary>
///   <param name="withDataAndEvents" type="Boolean">A Boolean indicating whether event handlers should be copied along with the elements. As of jQuery 1.4, element data will be copied as well.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Create a deep copy of the set of matched elements.</summary>
///   <param name="withDataAndEvents" type="Boolean">A Boolean indicating whether event handlers and data should be copied along with the elements. The default value is false. *In jQuery 1.5.0 the default value was incorrectly true; it was changed back to false in 1.5.1 and up.</param>
///   <param name="deepWithDataAndEvents" type="Boolean">A Boolean indicating whether event handlers and data for all children of the cloned element should be copied. By default its value matches the first argument's value (which defaults to false).</param>
///   <returns type="jQuery" />
/// </signature>
},'closest':function closest(){ /// <signature>
///   <summary>For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.</summary>
///   <param name="selector" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.</summary>
///   <param name="selector" type="String">A string containing a selector expression to match elements against.</param>
///   <param name="context" type="Element">A DOM element within which a matching element may be found. If no context is passed in then the context of the jQuery set will be used instead.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.</summary>
///   <param name="jQuery object" type="jQuery">A jQuery object to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.</summary>
///   <param name="element" type="Element">An element to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
},'contains':function contains(){ /// <signature>
///   <summary>Select all elements that contain the specified text.</summary>
///   <param name="text" type="String">A string of text to look for. It's case sensitive.</param>
/// </signature>
},'contents':function contents(){ /// <summary>Get the children of each element in the set of matched elements, including text and comment nodes.</summary>
/// <returns type="jQuery" />
},'context':function context(){ /// <summary>The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document.</summary>
/// <returns type="Element" />
},'css':function css(){ /// <signature>
///   <summary>Set one or more CSS properties for the set of matched elements.</summary>
///   <param name="propertyName" type="String">A CSS property name.</param>
///   <param name="value" type="">A value to set for the property.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Set one or more CSS properties for the set of matched elements.</summary>
///   <param name="propertyName" type="String">A CSS property name.</param>
///   <param name="function(index, value)" type="Function">A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Set one or more CSS properties for the set of matched elements.</summary>
///   <param name="properties" type="PlainObject">An object of property-value pairs to set.</param>
///   <returns type="jQuery" />
/// </signature>
},'data':function data(){ /// <signature>
///   <summary>Store arbitrary data associated with the matched elements.</summary>
///   <param name="key" type="String">A string naming the piece of data to set.</param>
///   <param name="value" type="Object">The new data value; it can be any Javascript type including Array or Object.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Store arbitrary data associated with the matched elements.</summary>
///   <param name="obj" type="Object">An object of key-value pairs of data to update.</param>
///   <returns type="jQuery" />
/// </signature>
},'dblclick':function dblclick(){ /// <signature>
///   <summary>Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.</summary>
///   <param name="eventData" type="Object">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'delay':function delay(){ /// <signature>
///   <summary>Set a timer to delay execution of subsequent items in the queue.</summary>
///   <param name="duration" type="Number">An integer indicating the number of milliseconds to delay execution of the next item in the queue.</param>
///   <param name="queueName" type="String">A string containing the name of the queue. Defaults to fx, the standard effects queue.</param>
///   <returns type="jQuery" />
/// </signature>
},'delegate':function delegate(){ /// <signature>
///   <summary>Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements.</summary>
///   <param name="selector" type="String">A selector to filter the elements that trigger the event.</param>
///   <param name="eventType" type="String">A string containing one or more space-separated JavaScript event types, such as "click" or "keydown," or custom event names.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute at the time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements.</summary>
///   <param name="selector" type="String">A selector to filter the elements that trigger the event.</param>
///   <param name="eventType" type="String">A string containing one or more space-separated JavaScript event types, such as "click" or "keydown," or custom event names.</param>
///   <param name="eventData" type="Object">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute at the time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements.</summary>
///   <param name="selector" type="String">A selector to filter the elements that trigger the event.</param>
///   <param name="events" type="PlainObject">A plain object of one or more event types and functions to execute for them.</param>
///   <returns type="jQuery" />
/// </signature>
},'dequeue':function dequeue(){ /// <signature>
///   <summary>Execute the next function on the queue for the matched elements.</summary>
///   <param name="queueName" type="String">A string containing the name of the queue. Defaults to fx, the standard effects queue.</param>
///   <returns type="jQuery" />
/// </signature>
},'descendant':function descendant(){ /// <signature>
///   <summary>Selects all elements that are descendants of a given ancestor.</summary>
///   <param name="ancestor" type="String">Any valid selector.</param>
///   <param name="descendant" type="String">A selector to filter the descendant elements.</param>
/// </signature>
},'detach':function detach(){ /// <signature>
///   <summary>Remove the set of matched elements from the DOM.</summary>
///   <param name="selector" type="String">A selector expression that filters the set of matched elements to be removed.</param>
///   <returns type="jQuery" />
/// </signature>
},'die':function die(){ /// <signature>
///   <summary>Remove event handlers previously attached using .live() from the elements.</summary>
///   <param name="eventType" type="String">A string containing a JavaScript event type, such as click or keydown.</param>
///   <param name="handler" type="String">The function that is no longer to be executed.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Remove event handlers previously attached using .live() from the elements.</summary>
///   <param name="events" type="PlainObject">A plain object of one or more event types, such as click or keydown and their corresponding functions that are no longer to be executed.</param>
///   <returns type="jQuery" />
/// </signature>
},'disabled':function disabled(){ /// <summary>Selects all elements that are disabled.</summary>
},'each':function each(){ /// <signature>
///   <summary>Iterate over a jQuery object, executing a function for each matched element.</summary>
///   <param name="function(index, Element)" type="Function">A function to execute for each matched element.</param>
///   <returns type="jQuery" />
/// </signature>
},'element':function element(){ /// <signature>
///   <summary>Selects all elements with the given tag name.</summary>
///   <param name="element" type="String">An element to search for. Refers to the tagName of DOM nodes.</param>
/// </signature>
},'empty':function empty(){ /// <summary>Select all elements that have no children (including text nodes).</summary>
},'enabled':function enabled(){ /// <summary>Selects all elements that are enabled.</summary>
},'end':function end(){ /// <summary>End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.</summary>
/// <returns type="jQuery" />
},'eq':function eq(){ /// <signature>
///   <summary>Select the element at index n within the matched set.</summary>
///   <param name="index" type="Number">Zero-based index of the element to match.</param>
/// </signature>
/// <signature>
///   <summary>Select the element at index n within the matched set.</summary>
///   <param name="-index" type="Number">Zero-based index of the element to match, counting backwards from the last element.</param>
/// </signature>
},'error':function error(){ /// <signature>
///   <summary>Bind an event handler to the "error" JavaScript event.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute when the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "error" JavaScript event.</summary>
///   <param name="eventData" type="Object">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'even':function even(){ /// <summary>Selects even elements, zero-indexed.  See also odd.</summary>
},'fadeIn':function fadeIn(){ /// <signature>
///   <summary>Display the matched elements by fading them to opaque.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Display the matched elements by fading them to opaque.</summary>
///   <param name="options" type="PlainObject">A map of additional options to pass to the method.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Display the matched elements by fading them to opaque.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="easing" type="String">A string indicating which easing function to use for the transition.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
},'fadeOut':function fadeOut(){ /// <signature>
///   <summary>Hide the matched elements by fading them to transparent.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Hide the matched elements by fading them to transparent.</summary>
///   <param name="options" type="PlainObject">A map of additional options to pass to the method.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Hide the matched elements by fading them to transparent.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="easing" type="String">A string indicating which easing function to use for the transition.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
},'fadeTo':function fadeTo(){ /// <signature>
///   <summary>Adjust the opacity of the matched elements.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="opacity" type="Number">A number between 0 and 1 denoting the target opacity.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Adjust the opacity of the matched elements.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="opacity" type="Number">A number between 0 and 1 denoting the target opacity.</param>
///   <param name="easing" type="String">A string indicating which easing function to use for the transition.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
},'fadeToggle':function fadeToggle(){ /// <signature>
///   <summary>Display or hide the matched elements by animating their opacity.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="easing" type="String">A string indicating which easing function to use for the transition.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Display or hide the matched elements by animating their opacity.</summary>
///   <param name="options" type="PlainObject">A map of additional options to pass to the method.</param>
///   <returns type="jQuery" />
/// </signature>
},'file':function file(){ /// <summary>Selects all elements of type file.</summary>
},'filter':function filter(){ /// <signature>
///   <summary>Reduce the set of matched elements to those that match the selector or pass the function's test.</summary>
///   <param name="selector" type="String">A string containing a selector expression to match the current set of elements against.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Reduce the set of matched elements to those that match the selector or pass the function's test.</summary>
///   <param name="function(index)" type="Function">A function used as a test for each element in the set. this is the current DOM element.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Reduce the set of matched elements to those that match the selector or pass the function's test.</summary>
///   <param name="element" type="Element">An element to match the current set of elements against.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Reduce the set of matched elements to those that match the selector or pass the function's test.</summary>
///   <param name="jQuery object" type="Object">An existing jQuery object to match the current set of elements against.</param>
///   <returns type="jQuery" />
/// </signature>
},'find':function find(){ /// <signature>
///   <summary>Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.</summary>
///   <param name="selector" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.</summary>
///   <param name="jQuery object" type="Object">A jQuery object to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.</summary>
///   <param name="element" type="Element">An element to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
},'finish':function finish(){ /// <signature>
///   <summary>Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements.</summary>
///   <param name="queue" type="String">The name of the queue in which to stop animations.</param>
///   <returns type="jQuery" />
/// </signature>
},'first':function first(){ /// <summary>Selects the first matched element.</summary>
},'first-child':function firstChild(){ /// <summary>Selects all elements that are the first child of their parent.</summary>
},'first-of-type':function firstOfType(){ /// <summary>Selects all elements that are the first among siblings of the same element name.</summary>
},'focus':function focus(){ /// <signature>
///   <summary>Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.</summary>
///   <param name="eventData" type="Object">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'focusin':function focusin(){ /// <signature>
///   <summary>Bind an event handler to the "focusin" event.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "focusin" event.</summary>
///   <param name="eventData" type="Object">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'focusout':function focusout(){ /// <signature>
///   <summary>Bind an event handler to the "focusout" JavaScript event.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "focusout" JavaScript event.</summary>
///   <param name="eventData" type="Object">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'get':function get(){ /// <signature>
///   <summary>Retrieve one of the DOM elements matched by the jQuery object.</summary>
///   <param name="index" type="Number">A zero-based integer indicating which element to retrieve.</param>
///   <returns type="Element" />
/// </signature>
},'gt':function gt(){ /// <signature>
///   <summary>Select all elements at an index greater than index within the matched set.</summary>
///   <param name="index" type="Number">Zero-based index.</param>
/// </signature>
/// <signature>
///   <summary>Select all elements at an index greater than index within the matched set.</summary>
///   <param name="-index" type="Number">Zero-based index, counting backwards from the last element.</param>
/// </signature>
},'has':function has(){ /// <signature>
///   <summary>Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.</summary>
///   <param name="selector" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.</summary>
///   <param name="contained" type="Element">A DOM element to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
},'hasClass':function hasClass(){ /// <signature>
///   <summary>Determine whether any of the matched elements are assigned the given class.</summary>
///   <param name="className" type="String">The class name to search for.</param>
///   <returns type="Boolean" />
/// </signature>
},'header':function header(){ /// <summary>Selects all elements that are headers, like h1, h2, h3 and so on.</summary>
},'height':function height(){ /// <signature>
///   <summary>Set the CSS height of every matched element.</summary>
///   <param name="value" type="">An integer representing the number of pixels, or an integer with an optional unit of measure appended (as a string).</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Set the CSS height of every matched element.</summary>
///   <param name="function(index, height)" type="Function">A function returning the height to set. Receives the index position of the element in the set and the old height as arguments. Within the function, this refers to the current element in the set.</param>
///   <returns type="jQuery" />
/// </signature>
},'hidden':function hidden(){ /// <summary>Selects all elements that are hidden.</summary>
},'hide':function hide(){ /// <signature>
///   <summary>Hide the matched elements.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Hide the matched elements.</summary>
///   <param name="options" type="PlainObject">A map of additional options to pass to the method.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Hide the matched elements.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="easing" type="String">A string indicating which easing function to use for the transition.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
},'hover':function hover(){ /// <signature>
///   <summary>Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.</summary>
///   <param name="handlerIn(eventObject)" type="Function">A function to execute when the mouse pointer enters the element.</param>
///   <param name="handlerOut(eventObject)" type="Function">A function to execute when the mouse pointer leaves the element.</param>
///   <returns type="jQuery" />
/// </signature>
},'html':function html(){ /// <signature>
///   <summary>Set the HTML contents of each element in the set of matched elements.</summary>
///   <param name="htmlString" type="htmlString">A string of HTML to set as the content of each matched element.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Set the HTML contents of each element in the set of matched elements.</summary>
///   <param name="function(index, oldhtml)" type="Function">A function returning the HTML content to set. Receives the           index position of the element in the set and the old HTML value as arguments.           jQuery empties the element before calling the function;           use the oldhtml argument to reference the previous content.           Within the function, this refers to the current element in the set.</param>
///   <returns type="jQuery" />
/// </signature>
},'id':function id(){ /// <signature>
///   <summary>Selects a single element with the given id attribute.</summary>
///   <param name="id" type="String">An ID to search for, specified via the id attribute of an element.</param>
/// </signature>
},'image':function image(){ /// <summary>Selects all elements of type image.</summary>
},'index':function index(){ /// <signature>
///   <summary>Search for a given element from among the matched elements.</summary>
///   <param name="selector" type="String">A selector representing a jQuery collection in which to look for an element.</param>
///   <returns type="Number" />
/// </signature>
/// <signature>
///   <summary>Search for a given element from among the matched elements.</summary>
///   <param name="element" type="">The DOM element or first element within the jQuery object to look for.</param>
///   <returns type="Number" />
/// </signature>
},'init':function init(){ /// <signature>
///   <summary>Accepts a string containing a CSS selector which is then used to match a set of elements.</summary>
///   <param name="selector" type="String">A string containing a selector expression</param>
///   <param name="context" type="">A DOM Element, Document, or jQuery to use as context</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Accepts a string containing a CSS selector which is then used to match a set of elements.</summary>
///   <param name="element" type="Element">A DOM element to wrap in a jQuery object.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Accepts a string containing a CSS selector which is then used to match a set of elements.</summary>
///   <param name="elementArray" type="Array">An array containing a set of DOM elements to wrap in a jQuery object.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Accepts a string containing a CSS selector which is then used to match a set of elements.</summary>
///   <param name="object" type="PlainObject">A plain object to wrap in a jQuery object.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Accepts a string containing a CSS selector which is then used to match a set of elements.</summary>
///   <param name="jQuery object" type="PlainObject">An existing jQuery object to clone.</param>
///   <returns type="jQuery" />
/// </signature>
},'innerHeight':function innerHeight(){ /// <summary>Get the current computed height for the first element in the set of matched elements, including padding but not border.</summary>
/// <returns type="Number" />
},'innerWidth':function innerWidth(){ /// <summary>Get the current computed width for the first element in the set of matched elements, including padding but not border.</summary>
/// <returns type="Number" />
},'input':function input(){ /// <summary>Selects all input, textarea, select and button elements.</summary>
},'insertAfter':function insertAfter(){ /// <signature>
///   <summary>Insert every element in the set of matched elements after the target.</summary>
///   <param name="target" type="">A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted after the element(s) specified by this parameter.</param>
///   <returns type="jQuery" />
/// </signature>
},'insertBefore':function insertBefore(){ /// <signature>
///   <summary>Insert every element in the set of matched elements before the target.</summary>
///   <param name="target" type="">A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted before the element(s) specified by this parameter.</param>
///   <returns type="jQuery" />
/// </signature>
},'is':function is(){ /// <signature>
///   <summary>Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.</summary>
///   <param name="selector" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="Boolean" />
/// </signature>
/// <signature>
///   <summary>Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.</summary>
///   <param name="function(index)" type="Function">A function used as a test for the set of elements. It accepts one argument, index, which is the element's index in the jQuery collection.Within the function, this refers to the current DOM element.</param>
///   <returns type="Boolean" />
/// </signature>
/// <signature>
///   <summary>Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.</summary>
///   <param name="jQuery object" type="Object">An existing jQuery object to match the current set of elements against.</param>
///   <returns type="Boolean" />
/// </signature>
/// <signature>
///   <summary>Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.</summary>
///   <param name="element" type="Element">An element to match the current set of elements against.</param>
///   <returns type="Boolean" />
/// </signature>
},'jquery':function jquery(){ /// <summary>A string containing the jQuery version number.</summary>
/// <returns type="String" />
},'keydown':function keydown(){ /// <signature>
///   <summary>Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.</summary>
///   <param name="eventData" type="PlainObject">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'keypress':function keypress(){ /// <signature>
///   <summary>Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.</summary>
///   <param name="eventData" type="PlainObject">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'keyup':function keyup(){ /// <signature>
///   <summary>Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.</summary>
///   <param name="eventData" type="PlainObject">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'lang':function lang(){ /// <signature>
///   <summary>Selects all elements of the specified language.</summary>
///   <param name="language" type="String">A language code.</param>
/// </signature>
},'last':function last(){ /// <summary>Selects the last matched element.</summary>
},'last-child':function lastChild(){ /// <summary>Selects all elements that are the last child of their parent.</summary>
},'last-of-type':function lastOfType(){ /// <summary>Selects all elements that are the last among siblings of the same element name.</summary>
},'length':function length(){ /// <summary>The number of elements in the jQuery object.</summary>
/// <returns type="Number" />
},'live':function live(){ /// <signature>
///   <summary>Attach an event handler for all elements which match the current selector, now and in the future.</summary>
///   <param name="events" type="String">A string containing a JavaScript event type, such as "click" or "keydown." As of jQuery 1.4 the string can contain multiple, space-separated event types or custom event names.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute at the time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Attach an event handler for all elements which match the current selector, now and in the future.</summary>
///   <param name="events" type="String">A string containing a JavaScript event type, such as "click" or "keydown." As of jQuery 1.4 the string can contain multiple, space-separated event types or custom event names.</param>
///   <param name="data" type="PlainObject">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute at the time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Attach an event handler for all elements which match the current selector, now and in the future.</summary>
///   <param name="events" type="PlainObject">A plain object of one or more JavaScript event types and functions to execute for them.</param>
///   <returns type="jQuery" />
/// </signature>
},'load':function load(){ /// <signature>
///   <summary>Bind an event handler to the "load" JavaScript event.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute when the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "load" JavaScript event.</summary>
///   <param name="eventData" type="PlainObject">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'lt':function lt(){ /// <signature>
///   <summary>Select all elements at an index less than index within the matched set.</summary>
///   <param name="index" type="Number">Zero-based index.</param>
/// </signature>
/// <signature>
///   <summary>Select all elements at an index less than index within the matched set.</summary>
///   <param name="-index" type="Number">Zero-based index, counting backwards from the last element.</param>
/// </signature>
},'map':function map(){ /// <signature>
///   <summary>Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.</summary>
///   <param name="callback(index, domElement)" type="Function">A function object that will be invoked for each element in the current set.</param>
///   <returns type="jQuery" />
/// </signature>
},'mousedown':function mousedown(){ /// <signature>
///   <summary>Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.</summary>
///   <param name="eventData" type="PlainObject">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'mouseenter':function mouseenter(){ /// <signature>
///   <summary>Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.</summary>
///   <param name="eventData" type="PlainObject">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'mouseleave':function mouseleave(){ /// <signature>
///   <summary>Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.</summary>
///   <param name="eventData" type="PlainObject">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'mousemove':function mousemove(){ /// <signature>
///   <summary>Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.</summary>
///   <param name="eventData" type="PlainObject">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'mouseout':function mouseout(){ /// <signature>
///   <summary>Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.</summary>
///   <param name="eventData" type="PlainObject">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'mouseover':function mouseover(){ /// <signature>
///   <summary>Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.</summary>
///   <param name="eventData" type="PlainObject">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'mouseup':function mouseup(){ /// <signature>
///   <summary>Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.</summary>
///   <param name="eventData" type="PlainObject">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'multiple':function multiple(){ /// <signature>
///   <summary>Selects the combined results of all the specified selectors.</summary>
///   <param name="selector1" type="String">Any valid selector.</param>
///   <param name="selector2" type="String">Another valid selector.</param>
///   <param name="selectorN" type="String">As many more valid selectors as you like.</param>
/// </signature>
},'next':function next(){ /// <signature>
///   <summary>Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.</summary>
///   <param name="selector" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
},'next adjacent':function nextAdjacent(){ /// <signature>
///   <summary>Selects all next elements matching "next" that are immediately preceded by a sibling "prev".</summary>
///   <param name="prev" type="String">Any valid selector.</param>
///   <param name="next" type="String">A selector to match the element that is next to the first selector.</param>
/// </signature>
},'next siblings':function nextSiblings(){ /// <signature>
///   <summary>Selects all sibling elements that follow after the "prev" element, have the same parent, and match the filtering "siblings" selector.</summary>
///   <param name="prev" type="String">Any valid selector.</param>
///   <param name="siblings" type="String">A selector to filter elements that are the following siblings of the first selector.</param>
/// </signature>
},'nextAll':function nextAll(){ /// <signature>
///   <summary>Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.</summary>
///   <param name="selector" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
},'nextUntil':function nextUntil(){ /// <signature>
///   <summary>Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.</summary>
///   <param name="selector" type="String">A string containing a selector expression to indicate where to stop matching following sibling elements.</param>
///   <param name="filter" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.</summary>
///   <param name="element" type="Element">A DOM node or jQuery object indicating where to stop matching following sibling elements.</param>
///   <param name="filter" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
},'not':function not(){ /// <signature>
///   <summary>Remove elements from the set of matched elements.</summary>
///   <param name="selector" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Remove elements from the set of matched elements.</summary>
///   <param name="elements" type="Array">One or more DOM elements to remove from the matched set.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Remove elements from the set of matched elements.</summary>
///   <param name="function(index)" type="Function">A function used as a test for each element in the set. this is the current DOM element.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Remove elements from the set of matched elements.</summary>
///   <param name="jQuery object" type="PlainObject">An existing jQuery object to match the current set of elements against.</param>
///   <returns type="jQuery" />
/// </signature>
},'nth-child':function nthChild(){ /// <signature>
///   <summary>Selects all elements that are the nth-child of their parent.</summary>
///   <param name="index" type="String">The index of each child to match, starting with 1, the string even or odd, or an equation ( eg. :nth-child(even), :nth-child(4n) )</param>
/// </signature>
},'nth-last-child':function nthLastChild(){ /// <signature>
///   <summary>Selects all elements that are the nth-child of their parent, counting from the last element to the first.</summary>
///   <param name="index" type="String">The index of each child to match, starting with the last one (1), the string even or odd, or an equation ( eg. :nth-last-child(even), :nth-last-child(4n) )</param>
/// </signature>
},'nth-last-of-type':function nthLastOfType(){ /// <signature>
///   <summary>Selects all elements that are the nth-child of their parent, counting from the last element to the first.</summary>
///   <param name="index" type="String">The index of each child to match, starting with the last one (1), the string even or odd, or an equation ( eg. :nth-last-of-type(even), :nth-last-of-type(4n) )</param>
/// </signature>
},'nth-of-type':function nthOfType(){ /// <signature>
///   <summary>Selects all elements that are the nth child of their parent in relation to siblings with the same element name.</summary>
///   <param name="index" type="String">The index of each child to match, starting with 1, the string even or odd, or an equation ( eg. :nth-of-type(even), :nth-of-type(4n) )</param>
/// </signature>
},'odd':function odd(){ /// <summary>Selects odd elements, zero-indexed.  See also even.</summary>
},'off':function off(){ /// <signature>
///   <summary>Remove an event handler.</summary>
///   <param name="events" type="String">One or more space-separated event types and optional namespaces, or just namespaces, such as "click", "keydown.myPlugin", or ".myPlugin".</param>
///   <param name="selector" type="String">A selector which should match the one originally passed to .on() when attaching event handlers.</param>
///   <param name="handler(eventObject)" type="Function">A handler function previously attached for the event(s), or the special value false.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Remove an event handler.</summary>
///   <param name="events" type="PlainObject">An object where the string keys represent one or more space-separated event types and optional namespaces, and the values represent handler functions previously attached for the event(s).</param>
///   <param name="selector" type="String">A selector which should match the one originally passed to .on() when attaching event handlers.</param>
///   <returns type="jQuery" />
/// </signature>
},'offset':function offset(){ /// <signature>
///   <summary>Set the current coordinates of every element in the set of matched elements, relative to the document.</summary>
///   <param name="coordinates" type="PlainObject">An object containing the properties top and left, which are integers indicating the new top and left coordinates for the elements.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Set the current coordinates of every element in the set of matched elements, relative to the document.</summary>
///   <param name="function(index, coords)" type="Function">A function to return the coordinates to set. Receives the index of the element in the collection as the first argument and the current coordinates as the second argument. The function should return an object with the new top and left properties.</param>
///   <returns type="jQuery" />
/// </signature>
},'offsetParent':function offsetParent(){ /// <summary>Get the closest ancestor element that is positioned.</summary>
/// <returns type="jQuery" />
},'on':function on(){ /// <signature>
///   <summary>Attach an event handler function for one or more events to the selected elements.</summary>
///   <param name="events" type="String">One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".</param>
///   <param name="selector" type="String">A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.</param>
///   <param name="data" type="Anything">Data to be passed to the handler in event.data when an event is triggered.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Attach an event handler function for one or more events to the selected elements.</summary>
///   <param name="events" type="PlainObject">An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).</param>
///   <param name="selector" type="String">A selector string to filter the descendants of the selected elements that will call the handler. If the selector is null or omitted, the handler is always called when it reaches the selected element.</param>
///   <param name="data" type="Anything">Data to be passed to the handler in event.data when an event occurs.</param>
///   <returns type="jQuery" />
/// </signature>
},'one':function one(){ /// <signature>
///   <summary>Attach a handler to an event for the elements. The handler is executed at most once per element.</summary>
///   <param name="events" type="String">A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.</param>
///   <param name="data" type="PlainObject">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute at the time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Attach a handler to an event for the elements. The handler is executed at most once per element.</summary>
///   <param name="events" type="String">One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".</param>
///   <param name="selector" type="String">A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.</param>
///   <param name="data" type="Anything">Data to be passed to the handler in event.data when an event is triggered.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Attach a handler to an event for the elements. The handler is executed at most once per element.</summary>
///   <param name="events" type="PlainObject">An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).</param>
///   <param name="selector" type="String">A selector string to filter the descendants of the selected elements that will call the handler. If the selector is null or omitted, the handler is always called when it reaches the selected element.</param>
///   <param name="data" type="Anything">Data to be passed to the handler in event.data when an event occurs.</param>
///   <returns type="jQuery" />
/// </signature>
},'only-child':function onlyChild(){ /// <summary>Selects all elements that are the only child of their parent.</summary>
},'only-of-type':function onlyOfType(){ /// <summary>Selects all elements that have no siblings with the same element name.</summary>
},'outerHeight':function outerHeight(){ /// <signature>
///   <summary>Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin. Returns an integer (without "px") representation of the value or null if called on an empty set of elements.</summary>
///   <param name="includeMargin" type="Boolean">A Boolean indicating whether to include the element's margin in the calculation.</param>
///   <returns type="Number" />
/// </signature>
},'outerWidth':function outerWidth(){ /// <signature>
///   <summary>Get the current computed width for the first element in the set of matched elements, including padding and border.</summary>
///   <param name="includeMargin" type="Boolean">A Boolean indicating whether to include the element's margin in the calculation.</param>
///   <returns type="Number" />
/// </signature>
},'parent':function parent(){ /// <signature>
///   <summary>Get the parent of each element in the current set of matched elements, optionally filtered by a selector.</summary>
///   <param name="selector" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
},'parents':function parents(){ /// <signature>
///   <summary>Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.</summary>
///   <param name="selector" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
},'parentsUntil':function parentsUntil(){ /// <signature>
///   <summary>Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.</summary>
///   <param name="selector" type="String">A string containing a selector expression to indicate where to stop matching ancestor elements.</param>
///   <param name="filter" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.</summary>
///   <param name="element" type="Element">A DOM node or jQuery object indicating where to stop matching ancestor elements.</param>
///   <param name="filter" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
},'password':function password(){ /// <summary>Selects all elements of type password.</summary>
},'position':function position(){ /// <summary>Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.</summary>
/// <returns type="Object" />
},'prepend':function prepend(){ /// <signature>
///   <summary>Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.</summary>
///   <param name="content" type="">DOM element, array of elements, HTML string, or jQuery object to insert at the beginning of each element in the set of matched elements.</param>
///   <param name="content" type="">One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the beginning of each element in the set of matched elements.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.</summary>
///   <param name="function(index, html)" type="Function">A function that returns an HTML string, DOM element(s), or jQuery object to insert at the beginning of each element in the set of matched elements. Receives the index position of the element in the set and the old HTML value of the element as arguments. Within the function, this refers to the current element in the set.</param>
///   <returns type="jQuery" />
/// </signature>
},'prependTo':function prependTo(){ /// <signature>
///   <summary>Insert every element in the set of matched elements to the beginning of the target.</summary>
///   <param name="target" type="">A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted at the beginning of the element(s) specified by this parameter.</param>
///   <returns type="jQuery" />
/// </signature>
},'prev':function prev(){ /// <signature>
///   <summary>Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector.</summary>
///   <param name="selector" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
},'prevAll':function prevAll(){ /// <signature>
///   <summary>Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.</summary>
///   <param name="selector" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
},'prevUntil':function prevUntil(){ /// <signature>
///   <summary>Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.</summary>
///   <param name="selector" type="String">A string containing a selector expression to indicate where to stop matching preceding sibling elements.</param>
///   <param name="filter" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.</summary>
///   <param name="element" type="Element">A DOM node or jQuery object indicating where to stop matching preceding sibling elements.</param>
///   <param name="filter" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
},'promise':function promise(){ /// <signature>
///   <summary>Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished.</summary>
///   <param name="type" type="String">The type of queue that needs to be observed.</param>
///   <param name="target" type="PlainObject">Object onto which the promise methods have to be attached</param>
///   <returns type="Promise" />
/// </signature>
},'prop':function prop(){ /// <signature>
///   <summary>Set one or more properties for the set of matched elements.</summary>
///   <param name="propertyName" type="String">The name of the property to set.</param>
///   <param name="value" type="">A value to set for the property.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Set one or more properties for the set of matched elements.</summary>
///   <param name="properties" type="PlainObject">An object of property-value pairs to set.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Set one or more properties for the set of matched elements.</summary>
///   <param name="propertyName" type="String">The name of the property to set.</param>
///   <param name="function(index, oldPropertyValue)" type="Function">A function returning the value to set. Receives the index position of the element in the set and the old property value as arguments. Within the function, the keyword this refers to the current element.</param>
///   <returns type="jQuery" />
/// </signature>
},'pushStack':function pushStack(){ /// <signature>
///   <summary>Add a collection of DOM elements onto the jQuery stack.</summary>
///   <param name="elements" type="Array">An array of elements to push onto the stack and make into a new jQuery object.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Add a collection of DOM elements onto the jQuery stack.</summary>
///   <param name="elements" type="Array">An array of elements to push onto the stack and make into a new jQuery object.</param>
///   <param name="name" type="String">The name of a jQuery method that generated the array of elements.</param>
///   <param name="arguments" type="Array">The arguments that were passed in to the jQuery method (for serialization).</param>
///   <returns type="jQuery" />
/// </signature>
},'queue':function queue(){ /// <signature>
///   <summary>Manipulate the queue of functions to be executed, once for each matched element.</summary>
///   <param name="queueName" type="String">A string containing the name of the queue. Defaults to fx, the standard effects queue.</param>
///   <param name="newQueue" type="Array">An array of functions to replace the current queue contents.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Manipulate the queue of functions to be executed, once for each matched element.</summary>
///   <param name="queueName" type="String">A string containing the name of the queue. Defaults to fx, the standard effects queue.</param>
///   <param name="callback( next )" type="Function">The new function to add to the queue, with a function to call that will dequeue the next item.</param>
///   <returns type="jQuery" />
/// </signature>
},'radio':function radio(){ /// <summary>Selects all  elements of type radio.</summary>
},'ready':function ready(){ /// <signature>
///   <summary>Specify a function to execute when the DOM is fully loaded.</summary>
///   <param name="handler" type="Function">A function to execute after the DOM is ready.</param>
///   <returns type="jQuery" />
/// </signature>
},'remove':function remove(){ /// <signature>
///   <summary>Remove the set of matched elements from the DOM.</summary>
///   <param name="selector" type="String">A selector expression that filters the set of matched elements to be removed.</param>
///   <returns type="jQuery" />
/// </signature>
},'removeAttr':function removeAttr(){ /// <signature>
///   <summary>Remove an attribute from each element in the set of matched elements.</summary>
///   <param name="attributeName" type="String">An attribute to remove; as of version 1.7, it can be a space-separated list of attributes.</param>
///   <returns type="jQuery" />
/// </signature>
},'removeClass':function removeClass(){ /// <signature>
///   <summary>Remove a single class, multiple classes, or all classes from each element in the set of matched elements.</summary>
///   <param name="className" type="String">One or more space-separated classes to be removed from the class attribute of each matched element.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Remove a single class, multiple classes, or all classes from each element in the set of matched elements.</summary>
///   <param name="function(index, class)" type="Function">A function returning one or more space-separated class names to be removed. Receives the index position of the element in the set and the old class value as arguments.</param>
///   <returns type="jQuery" />
/// </signature>
},'removeData':function removeData(){ /// <signature>
///   <summary>Remove a previously-stored piece of data.</summary>
///   <param name="name" type="String">A string naming the piece of data to delete.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Remove a previously-stored piece of data.</summary>
///   <param name="list" type="">An array or space-separated string naming the pieces of data to delete.</param>
///   <returns type="jQuery" />
/// </signature>
},'removeProp':function removeProp(){ /// <signature>
///   <summary>Remove a property for the set of matched elements.</summary>
///   <param name="propertyName" type="String">The name of the property to remove.</param>
///   <returns type="jQuery" />
/// </signature>
},'replaceAll':function replaceAll(){ /// <signature>
///   <summary>Replace each target element with the set of matched elements.</summary>
///   <param name="target" type="">A selector string, jQuery object, or DOM element reference indicating which element(s) to replace.</param>
///   <returns type="jQuery" />
/// </signature>
},'replaceWith':function replaceWith(){ /// <signature>
///   <summary>Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.</summary>
///   <param name="newContent" type="">The content to insert. May be an HTML string, DOM element, or jQuery object.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.</summary>
///   <param name="function" type="Function">A function that returns content with which to replace the set of matched elements.</param>
///   <returns type="jQuery" />
/// </signature>
},'reset':function reset(){ /// <summary>Selects all elements of type reset.</summary>
},'resize':function resize(){ /// <signature>
///   <summary>Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.</summary>
///   <param name="eventData" type="PlainObject">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'root':function root(){ /// <summary>Selects the element that is the root of the document.</summary>
},'scroll':function scroll(){ /// <signature>
///   <summary>Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.</summary>
///   <param name="eventData" type="PlainObject">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'scrollLeft':function scrollLeft(){ /// <signature>
///   <summary>Set the current horizontal position of the scroll bar for each of the set of matched elements.</summary>
///   <param name="value" type="Number">An integer indicating the new position to set the scroll bar to.</param>
///   <returns type="jQuery" />
/// </signature>
},'scrollTop':function scrollTop(){ /// <signature>
///   <summary>Set the current vertical position of the scroll bar for each of the set of matched elements.</summary>
///   <param name="value" type="Number">An integer indicating the new position to set the scroll bar to.</param>
///   <returns type="jQuery" />
/// </signature>
},'select':function select(){ /// <signature>
///   <summary>Bind an event handler to the "select" JavaScript event, or trigger that event on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "select" JavaScript event, or trigger that event on an element.</summary>
///   <param name="eventData" type="PlainObject">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'selected':function selected(){ /// <summary>Selects all elements that are selected.</summary>
},'selector':function selector(){ /// <summary>A selector representing selector passed to jQuery(), if any, when creating the original set.</summary>
/// <returns type="String" />
},'serialize':function serialize(){ /// <summary>Encode a set of form elements as a string for submission.</summary>
/// <returns type="String" />
},'serializeArray':function serializeArray(){ /// <summary>Encode a set of form elements as an array of names and values.</summary>
/// <returns type="Array" />
},'show':function show(){ /// <signature>
///   <summary>Display the matched elements.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Display the matched elements.</summary>
///   <param name="options" type="PlainObject">A map of additional options to pass to the method.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Display the matched elements.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="easing" type="String">A string indicating which easing function to use for the transition.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
},'siblings':function siblings(){ /// <signature>
///   <summary>Get the siblings of each element in the set of matched elements, optionally filtered by a selector.</summary>
///   <param name="selector" type="String">A string containing a selector expression to match elements against.</param>
///   <returns type="jQuery" />
/// </signature>
},'size':function size(){ /// <summary>Return the number of elements in the jQuery object.</summary>
/// <returns type="Number" />
},'slice':function slice(){ /// <signature>
///   <summary>Reduce the set of matched elements to a subset specified by a range of indices.</summary>
///   <param name="start" type="Number">An integer indicating the 0-based position at which the elements begin to be selected. If negative, it indicates an offset from the end of the set.</param>
///   <param name="end" type="Number">An integer indicating the 0-based position at which the elements stop being selected. If negative, it indicates an offset from the end of the set. If omitted, the range continues until the end of the set.</param>
///   <returns type="jQuery" />
/// </signature>
},'slideDown':function slideDown(){ /// <signature>
///   <summary>Display the matched elements with a sliding motion.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Display the matched elements with a sliding motion.</summary>
///   <param name="options" type="PlainObject">A map of additional options to pass to the method.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Display the matched elements with a sliding motion.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="easing" type="String">A string indicating which easing function to use for the transition.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
},'slideToggle':function slideToggle(){ /// <signature>
///   <summary>Display or hide the matched elements with a sliding motion.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Display or hide the matched elements with a sliding motion.</summary>
///   <param name="options" type="PlainObject">A map of additional options to pass to the method.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Display or hide the matched elements with a sliding motion.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="easing" type="String">A string indicating which easing function to use for the transition.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
},'slideUp':function slideUp(){ /// <signature>
///   <summary>Hide the matched elements with a sliding motion.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Hide the matched elements with a sliding motion.</summary>
///   <param name="options" type="PlainObject">A map of additional options to pass to the method.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Hide the matched elements with a sliding motion.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="easing" type="String">A string indicating which easing function to use for the transition.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
},'stop':function stop(){ /// <signature>
///   <summary>Stop the currently-running animation on the matched elements.</summary>
///   <param name="clearQueue" type="Boolean">A Boolean indicating whether to remove queued animation as well. Defaults to false.</param>
///   <param name="jumpToEnd" type="Boolean">A Boolean indicating whether to complete the current animation immediately. Defaults to false.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Stop the currently-running animation on the matched elements.</summary>
///   <param name="queue" type="String">The name of the queue in which to stop animations.</param>
///   <param name="clearQueue" type="Boolean">A Boolean indicating whether to remove queued animation as well. Defaults to false.</param>
///   <param name="jumpToEnd" type="Boolean">A Boolean indicating whether to complete the current animation immediately. Defaults to false.</param>
///   <returns type="jQuery" />
/// </signature>
},'submit':function submit(){ /// <signature>
///   <summary>Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.</summary>
///   <param name="eventData" type="PlainObject">An object containing data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'target':function target(){ /// <summary>Selects the target element indicated by the fragment identifier of the document's URI.</summary>
},'text':function text(){ /// <signature>
///   <summary>Set the content of each element in the set of matched elements to the specified text.</summary>
///   <param name="textString" type="String">A string of text to set as the content of each matched element.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Set the content of each element in the set of matched elements to the specified text.</summary>
///   <param name="function(index, text)" type="Function">A function returning the text content to set. Receives the index position of the element in the set and the old text value as arguments.</param>
///   <returns type="jQuery" />
/// </signature>
},'toArray':function toArray(){ /// <summary>Retrieve all the DOM elements contained in the jQuery set, as an array.</summary>
/// <returns type="Array" />
},'toggle':function toggle(){ /// <signature>
///   <summary>Display or hide the matched elements.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Display or hide the matched elements.</summary>
///   <param name="options" type="PlainObject">A map of additional options to pass to the method.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Display or hide the matched elements.</summary>
///   <param name="duration" type="">A string or number determining how long the animation will run.</param>
///   <param name="easing" type="String">A string indicating which easing function to use for the transition.</param>
///   <param name="complete" type="Function">A function to call once the animation is complete.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Display or hide the matched elements.</summary>
///   <param name="showOrHide" type="Boolean">A Boolean indicating whether to show or hide the elements.</param>
///   <returns type="jQuery" />
/// </signature>
},'toggleClass':function toggleClass(){ /// <signature>
///   <summary>Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.</summary>
///   <param name="className" type="String">One or more class names (separated by spaces) to be toggled for each element in the matched set.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.</summary>
///   <param name="className" type="String">One or more class names (separated by spaces) to be toggled for each element in the matched set.</param>
///   <param name="switch" type="Boolean">A Boolean (not just truthy/falsy) value to determine whether the class should be added or removed.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.</summary>
///   <param name="switch" type="Boolean">A boolean value to determine whether the class should be added or removed.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.</summary>
///   <param name="function(index, class, switch)" type="Function">A function that returns class names to be toggled in the class attribute of each element in the matched set. Receives the index position of the element in the set, the old class value, and the switch as arguments.</param>
///   <param name="switch" type="Boolean">A boolean value to determine whether the class should be added or removed.</param>
///   <returns type="jQuery" />
/// </signature>
},'trigger':function trigger(){ /// <signature>
///   <summary>Execute all handlers and behaviors attached to the matched elements for the given event type.</summary>
///   <param name="eventType" type="String">A string containing a JavaScript event type, such as click or submit.</param>
///   <param name="extraParameters" type="">Additional parameters to pass along to the event handler.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Execute all handlers and behaviors attached to the matched elements for the given event type.</summary>
///   <param name="event" type="Event">A jQuery.Event object.</param>
///   <param name="extraParameters" type="">Additional parameters to pass along to the event handler.</param>
///   <returns type="jQuery" />
/// </signature>
},'triggerHandler':function triggerHandler(){ /// <signature>
///   <summary>Execute all handlers attached to an element for an event.</summary>
///   <param name="eventType" type="String">A string containing a JavaScript event type, such as click or submit.</param>
///   <param name="extraParameters" type="Array">An array of additional parameters to pass along to the event handler.</param>
///   <returns type="Object" />
/// </signature>
},'unbind':function unbind(){ /// <signature>
///   <summary>Remove a previously-attached event handler from the elements.</summary>
///   <param name="eventType" type="String">A string containing a JavaScript event type, such as click or submit.</param>
///   <param name="handler(eventObject)" type="Function">The function that is to be no longer executed.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Remove a previously-attached event handler from the elements.</summary>
///   <param name="eventType" type="String">A string containing a JavaScript event type, such as click or submit.</param>
///   <param name="false" type="Boolean">Unbinds the corresponding 'return false' function that was bound using .bind( eventType, false ).</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Remove a previously-attached event handler from the elements.</summary>
///   <param name="event" type="Object">A JavaScript event object as passed to an event handler.</param>
///   <returns type="jQuery" />
/// </signature>
},'undelegate':function undelegate(){ /// <signature>
///   <summary>Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.</summary>
///   <param name="selector" type="String">A selector which will be used to filter the event results.</param>
///   <param name="eventType" type="String">A string containing a JavaScript event type, such as "click" or "keydown"</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.</summary>
///   <param name="selector" type="String">A selector which will be used to filter the event results.</param>
///   <param name="eventType" type="String">A string containing a JavaScript event type, such as "click" or "keydown"</param>
///   <param name="handler(eventObject)" type="Function">A function to execute at the time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.</summary>
///   <param name="selector" type="String">A selector which will be used to filter the event results.</param>
///   <param name="events" type="PlainObject">An object of one or more event types and previously bound functions to unbind from them.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.</summary>
///   <param name="namespace" type="String">A string containing a namespace to unbind all events from.</param>
///   <returns type="jQuery" />
/// </signature>
},'unload':function unload(){ /// <signature>
///   <summary>Bind an event handler to the "unload" JavaScript event.</summary>
///   <param name="handler(eventObject)" type="Function">A function to execute when the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Bind an event handler to the "unload" JavaScript event.</summary>
///   <param name="eventData" type="Object">A plain object of data that will be passed to the event handler.</param>
///   <param name="handler(eventObject)" type="Function">A function to execute each time the event is triggered.</param>
///   <returns type="jQuery" />
/// </signature>
},'unwrap':function unwrap(){ /// <summary>Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.</summary>
/// <returns type="jQuery" />
},'val':function val(){ /// <signature>
///   <summary>Set the value of each element in the set of matched elements.</summary>
///   <param name="value" type="">A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Set the value of each element in the set of matched elements.</summary>
///   <param name="function(index, value)" type="Function">A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.</param>
///   <returns type="jQuery" />
/// </signature>
},'visible':function visible(){ /// <summary>Selects all elements that are visible.</summary>
},'width':function width(){ /// <signature>
///   <summary>Set the CSS width of each element in the set of matched elements.</summary>
///   <param name="value" type="">An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Set the CSS width of each element in the set of matched elements.</summary>
///   <param name="function(index, width)" type="Function">A function returning the width to set. Receives the index position of the element in the set and the old width as arguments. Within the function, this refers to the current element in the set.</param>
///   <returns type="jQuery" />
/// </signature>
},'wrap':function wrap(){ /// <signature>
///   <summary>Wrap an HTML structure around each element in the set of matched elements.</summary>
///   <param name="wrappingElement" type="">A selector, element, HTML string, or jQuery object specifying the structure to wrap around the matched elements.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Wrap an HTML structure around each element in the set of matched elements.</summary>
///   <param name="function(index)" type="Function">A callback function returning the HTML content or jQuery object to wrap around the matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.</param>
///   <returns type="jQuery" />
/// </signature>
},'wrapAll':function wrapAll(){ /// <signature>
///   <summary>Wrap an HTML structure around all elements in the set of matched elements.</summary>
///   <param name="wrappingElement" type="">A selector, element, HTML string, or jQuery object specifying the structure to wrap around the matched elements.</param>
///   <returns type="jQuery" />
/// </signature>
},'wrapInner':function wrapInner(){ /// <signature>
///   <summary>Wrap an HTML structure around the content of each element in the set of matched elements.</summary>
///   <param name="wrappingElement" type="String">An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the content of the matched elements.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Wrap an HTML structure around the content of each element in the set of matched elements.</summary>
///   <param name="function(index)" type="Function">A callback function which generates a structure to wrap around the content of the matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.</param>
///   <returns type="jQuery" />
/// </signature>
}});intellisense.annotate(window,{'$':function $(){ /// <signature>
///   <summary>Accepts a string containing a CSS selector which is then used to match a set of elements.</summary>
///   <param name="selector" type="String">A string containing a selector expression</param>
///   <param name="context" type="">A DOM Element, Document, or jQuery to use as context</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Accepts a string containing a CSS selector which is then used to match a set of elements.</summary>
///   <param name="element" type="Element">A DOM element to wrap in a jQuery object.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Accepts a string containing a CSS selector which is then used to match a set of elements.</summary>
///   <param name="elementArray" type="Array">An array containing a set of DOM elements to wrap in a jQuery object.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Accepts a string containing a CSS selector which is then used to match a set of elements.</summary>
///   <param name="object" type="PlainObject">A plain object to wrap in a jQuery object.</param>
///   <returns type="jQuery" />
/// </signature>
/// <signature>
///   <summary>Accepts a string containing a CSS selector which is then used to match a set of elements.</summary>
///   <param name="jQuery object" type="PlainObject">An existing jQuery object to clone.</param>
///   <returns type="jQuery" />
/// </signature>
}});


/*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
"use strict";

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e(t.bootstrap = {}, t.jQuery);
})(undefined, function (t, e) {
  "use strict";function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }function c(r) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? arguments[t] : {},
          e = Object.keys(o);"function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter(function (t) {
        return Object.getOwnPropertyDescriptor(o, t).enumerable;
      }))), e.forEach(function (t) {
        var e, n, i;e = r, i = o[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i;
      });
    }return r;
  }for (var r, n, o, a, l, f, h, u, d, p, g, m, _, v, E, y, b, T, C, w, I, D, A, S, O, N, k, L, P, x, j, M, R, H, W, F, U, B, K, V, Q, Y, G, q, z, X, J, Z, $, tt, et, nt, it, rt, ot, st, at, lt, ct, ft, ht, ut, dt, pt, gt = (function (i) {
    var e = "transitionend";function t(t) {
      var e = this,
          n = !1;return i(this).one(l.TRANSITION_END, function () {
        n = !0;
      }), setTimeout(function () {
        n || l.triggerTransitionEnd(e);
      }, t), this;
    }var l = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(t) {
        for (; t += ~ ~(1e6 * Math.random()), document.getElementById(t););return t;
      }, getSelectorFromElement: function getSelectorFromElement(t) {
        var e = t.getAttribute("data-target");e && "#" !== e || (e = t.getAttribute("href") || "");try {
          return 0 < i(document).find(e).length ? e : null;
        } catch (t) {
          return null;
        }
      }, getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
        if (!t) return 0;var e = i(t).css("transition-duration");return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0;
      }, reflow: function reflow(t) {
        return t.offsetHeight;
      }, triggerTransitionEnd: function triggerTransitionEnd(t) {
        i(t).trigger(e);
      }, supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(e);
      }, isElement: function isElement(t) {
        return (t[0] || t).nodeType;
      }, typeCheckConfig: function typeCheckConfig(t, e, n) {
        for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
          var r = n[i],
              o = e[i],
              s = o && l.isElement(o) ? "element" : (a = o, ({}).toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if (!new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".');
        }var a;
      } };return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = { bindType: e, delegateType: e, handle: function handle(t) {
        if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      } }, l;
  })(e = e && e.hasOwnProperty("default") ? e["default"] : e), mt = (n = "alert", a = "." + (o = "bs.alert"), l = (r = e).fn[n], f = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, h = "alert", u = "fade", d = "show", p = (function () {
    function i(t) {
      this._element = t;
    }var t = i.prototype;return t.close = function (t) {
      var e = this._element;t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, t.dispose = function () {
      r.removeData(this._element, o), this._element = null;
    }, t._getRootElement = function (t) {
      var e = gt.getSelectorFromElement(t),
          n = !1;return e && (n = r(e)[0]), n || (n = r(t).closest("." + h)[0]), n;
    }, t._triggerCloseEvent = function (t) {
      var e = r.Event(f.CLOSE);return r(t).trigger(e), e;
    }, t._removeElement = function (e) {
      var n = this;if ((r(e).removeClass(d), r(e).hasClass(u))) {
        var t = gt.getTransitionDurationFromElement(e);r(e).one(gt.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(t);
      } else this._destroyElement(e);
    }, t._destroyElement = function (t) {
      r(t).detach().trigger(f.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = r(this),
            e = t.data(o);e || (e = new i(this), t.data(o, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, s(i, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }]), i;
  })(), r(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())), r.fn[n] = p._jQueryInterface, r.fn[n].Constructor = p, r.fn[n].noConflict = function () {
    return r.fn[n] = l, p._jQueryInterface;
  }, p), _t = (m = "button", v = "." + (_ = "bs.button"), E = ".data-api", y = (g = e).fn[m], b = "active", T = "btn", w = '[data-toggle^="button"]', I = '[data-toggle="buttons"]', D = "input", A = ".active", S = ".btn", O = { CLICK_DATA_API: "click" + v + E, FOCUS_BLUR_DATA_API: (C = "focus") + v + E + " blur" + v + E }, N = (function () {
    function n(t) {
      this._element = t;
    }var t = n.prototype;return t.toggle = function () {
      var t = !0,
          e = !0,
          n = g(this._element).closest(I)[0];if (n) {
        var i = g(this._element).find(D)[0];if (i) {
          if ("radio" === i.type) if (i.checked && g(this._element).hasClass(b)) t = !1;else {
            var r = g(n).find(A)[0];r && g(r).removeClass(b);
          }if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;i.checked = !g(this._element).hasClass(b), g(i).trigger("change");
          }i.focus(), e = !1;
        }
      }e && this._element.setAttribute("aria-pressed", !g(this._element).hasClass(b)), t && g(this._element).toggleClass(b);
    }, t.dispose = function () {
      g.removeData(this._element, _), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = g(this).data(_);t || (t = new n(this), g(this).data(_, t)), "toggle" === e && t[e]();
      });
    }, s(n, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }]), n;
  })(), g(document).on(O.CLICK_DATA_API, w, function (t) {
    t.preventDefault();var e = t.target;g(e).hasClass(T) || (e = g(e).closest(S)), N._jQueryInterface.call(g(e), "toggle");
  }).on(O.FOCUS_BLUR_DATA_API, w, function (t) {
    var e = g(t.target).closest(S)[0];g(e).toggleClass(C, /^focus(in)?$/.test(t.type));
  }), g.fn[m] = N._jQueryInterface, g.fn[m].Constructor = N, g.fn[m].noConflict = function () {
    return g.fn[m] = y, N._jQueryInterface;
  }, N), vt = (L = "carousel", x = "." + (P = "bs.carousel"), j = ".data-api", M = (k = e).fn[L], R = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }, H = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, W = "next", F = "prev", U = "left", B = "right", K = { SLIDE: "slide" + x, SLID: "slid" + x, KEYDOWN: "keydown" + x, MOUSEENTER: "mouseenter" + x, MOUSELEAVE: "mouseleave" + x, TOUCHEND: "touchend" + x, LOAD_DATA_API: "load" + x + j, CLICK_DATA_API: "click" + x + j }, V = "carousel", Q = "active", Y = "slide", G = "carousel-item-right", q = "carousel-item-left", z = "carousel-item-next", X = "carousel-item-prev", J = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' }, Z = (function () {
    function o(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = k(t)[0], this._indicatorsElement = k(this._element).find(J.INDICATORS)[0], this._addEventListeners();
    }var t = o.prototype;return t.next = function () {
      this._isSliding || this._slide(W);
    }, t.nextWhenVisible = function () {
      !document.hidden && k(this._element).is(":visible") && "hidden" !== k(this._element).css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(F);
    }, t.pause = function (t) {
      t || (this._isPaused = !0), k(this._element).find(J.NEXT_PREV)[0] && (gt.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (t) {
      var e = this;this._activeElement = k(this._element).find(J.ACTIVE_ITEM)[0];var n = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) k(this._element).one(K.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();var i = n < t ? W : F;this._slide(i, this._items[t]);
      }
    }, t.dispose = function () {
      k(this._element).off(x), k.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (t) {
      return t = c({}, R, t), gt.typeCheckConfig(L, t, H), t;
    }, t._addEventListeners = function () {
      var e = this;this._config.keyboard && k(this._element).on(K.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && (k(this._element).on(K.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(K.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), "ontouchstart" in document.documentElement && k(this._element).on(K.TOUCHEND, function () {
        e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
          return e.cycle(t);
        }, 500 + e._config.interval);
      }));
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
          t.preventDefault(), this.prev();break;case 39:
          t.preventDefault(), this.next();}
    }, t._getItemIndex = function (t) {
      return this._items = k.makeArray(k(t).parent().find(J.ITEM)), this._items.indexOf(t);
    }, t._getItemByDirection = function (t, e) {
      var n = t === W,
          i = t === F,
          r = this._getItemIndex(e),
          o = this._items.length - 1;if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;var s = (r + (t === F ? -1 : 1)) % this._items.length;return -1 === s ? this._items[this._items.length - 1] : this._items[s];
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(k(this._element).find(J.ACTIVE_ITEM)[0]),
          r = k.Event(K.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });return k(this._element).trigger(r), r;
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        k(this._indicatorsElement).find(J.ACTIVE).removeClass(Q);var e = this._indicatorsElement.children[this._getItemIndex(t)];e && k(e).addClass(Q);
      }
    }, t._slide = function (t, e) {
      var n,
          i,
          r,
          o = this,
          s = k(this._element).find(J.ACTIVE_ITEM)[0],
          a = this._getItemIndex(s),
          l = e || s && this._getItemByDirection(t, s),
          c = this._getItemIndex(l),
          f = Boolean(this._interval);if ((t === W ? (n = q, i = z, r = U) : (n = G, i = X, r = B), l && k(l).hasClass(Q))) this._isSliding = !1;else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
        this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(l);var h = k.Event(K.SLID, { relatedTarget: l, direction: r, from: a, to: c });if (k(this._element).hasClass(Y)) {
          k(l).addClass(i), gt.reflow(l), k(s).addClass(n), k(l).addClass(n);var u = gt.getTransitionDurationFromElement(s);k(s).one(gt.TRANSITION_END, function () {
            k(l).removeClass(n + " " + i).addClass(Q), k(s).removeClass(Q + " " + i + " " + n), o._isSliding = !1, setTimeout(function () {
              return k(o._element).trigger(h);
            }, 0);
          }).emulateTransitionEnd(u);
        } else k(s).removeClass(Q), k(l).addClass(Q), this._isSliding = !1, k(this._element).trigger(h);f && this.cycle();
      }
    }, o._jQueryInterface = function (i) {
      return this.each(function () {
        var t = k(this).data(P),
            e = c({}, R, k(this).data());"object" == typeof i && (e = c({}, e, i));var n = "string" == typeof i ? i : e.slide;if ((t || (t = new o(this, e), k(this).data(P, t)), "number" == typeof i)) t.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        } else e.interval && (t.pause(), t.cycle());
      });
    }, o._dataApiClickHandler = function (t) {
      var e = gt.getSelectorFromElement(this);if (e) {
        var n = k(e)[0];if (n && k(n).hasClass(V)) {
          var i = c({}, k(n).data(), k(this).data()),
              r = this.getAttribute("data-slide-to");r && (i.interval = !1), o._jQueryInterface.call(k(n), i), r && k(n).data(P).to(r), t.preventDefault();
        }
      }
    }, s(o, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return R;
      } }]), o;
  })(), k(document).on(K.CLICK_DATA_API, J.DATA_SLIDE, Z._dataApiClickHandler), k(window).on(K.LOAD_DATA_API, function () {
    k(J.DATA_RIDE).each(function () {
      var t = k(this);Z._jQueryInterface.call(t, t.data());
    });
  }), k.fn[L] = Z._jQueryInterface, k.fn[L].Constructor = Z, k.fn[L].noConflict = function () {
    return k.fn[L] = M, Z._jQueryInterface;
  }, Z), Et = (tt = "collapse", nt = "." + (et = "bs.collapse"), it = ($ = e).fn[tt], rt = { toggle: !0, parent: "" }, ot = { toggle: "boolean", parent: "(string|element)" }, st = { SHOW: "show" + nt, SHOWN: "shown" + nt, HIDE: "hide" + nt, HIDDEN: "hidden" + nt, CLICK_DATA_API: "click" + nt + ".data-api" }, at = "show", lt = "collapse", ct = "collapsing", ft = "collapsed", ht = "width", ut = "height", dt = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' }, pt = (function () {
    function a(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));for (var n = $(dt.DATA_TOGGLE), i = 0; i < n.length; i++) {
        var r = n[i],
            o = gt.getSelectorFromElement(r);null !== o && 0 < $(o).filter(t).length && (this._selector = o, this._triggerArray.push(r));
      }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }var t = a.prototype;return t.toggle = function () {
      $(this._element).hasClass(at) ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          e,
          n = this;if (!this._isTransitioning && !$(this._element).hasClass(at) && (this._parent && 0 === (t = $.makeArray($(this._parent).find(dt.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = $(t).not(this._selector).data(et)) && e._isTransitioning))) {
        var i = $.Event(st.SHOW);if (($(this._element).trigger(i), !i.isDefaultPrevented())) {
          t && (a._jQueryInterface.call($(t).not(this._selector), "hide"), e || $(t).data(et, null));var r = this._getDimension();$(this._element).removeClass(lt).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && $(this._triggerArray).removeClass(ft).attr("aria-expanded", !0), this.setTransitioning(!0);var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
              s = gt.getTransitionDurationFromElement(this._element);$(this._element).one(gt.TRANSITION_END, function () {
            $(n._element).removeClass(ct).addClass(lt).addClass(at), n._element.style[r] = "", n.setTransitioning(!1), $(n._element).trigger(st.SHOWN);
          }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px";
        }
      }
    }, t.hide = function () {
      var t = this;if (!this._isTransitioning && $(this._element).hasClass(at)) {
        var e = $.Event(st.HIDE);if (($(this._element).trigger(e), !e.isDefaultPrevented())) {
          var n = this._getDimension();if ((this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", gt.reflow(this._element), $(this._element).addClass(ct).removeClass(lt).removeClass(at), 0 < this._triggerArray.length)) for (var i = 0; i < this._triggerArray.length; i++) {
            var r = this._triggerArray[i],
                o = gt.getSelectorFromElement(r);if (null !== o) $(o).hasClass(at) || $(r).addClass(ft).attr("aria-expanded", !1);
          }this.setTransitioning(!0);this._element.style[n] = "";var s = gt.getTransitionDurationFromElement(this._element);$(this._element).one(gt.TRANSITION_END, function () {
            t.setTransitioning(!1), $(t._element).removeClass(ct).addClass(lt).trigger(st.HIDDEN);
          }).emulateTransitionEnd(s);
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, t.dispose = function () {
      $.removeData(this._element, et), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (t) {
      return (t = c({}, rt, t)).toggle = Boolean(t.toggle), gt.typeCheckConfig(tt, t, ot), t;
    }, t._getDimension = function () {
      return $(this._element).hasClass(ht) ? ht : ut;
    }, t._getParent = function () {
      var n = this,
          t = null;gt.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = $(this._config.parent)[0];var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return $(t).find(e).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (t, e) {
      if (t) {
        var n = $(t).hasClass(at);0 < e.length && $(e).toggleClass(ft, !n).attr("aria-expanded", n);
      }
    }, a._getTargetFromElement = function (t) {
      var e = gt.getSelectorFromElement(t);return e ? $(e)[0] : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = $(this),
            e = t.data(et),
            n = c({}, rt, t.data(), "object" == typeof i && i ? i : {});if ((!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(et, e)), "string" == typeof i)) {
          if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');e[i]();
        }
      });
    }, s(a, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return rt;
      } }]), a;
  })(), $(document).on(st.CLICK_DATA_API, dt.DATA_TOGGLE, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();var n = $(this),
        e = gt.getSelectorFromElement(this);$(e).each(function () {
      var t = $(this),
          e = t.data(et) ? "toggle" : n.data();pt._jQueryInterface.call(t, e);
    });
  }), $.fn[tt] = pt._jQueryInterface, $.fn[tt].Constructor = pt, $.fn[tt].noConflict = function () {
    return $.fn[tt] = it, pt._jQueryInterface;
  }, pt), yt = "undefined" != typeof window && "undefined" != typeof document, bt = ["Edge", "Trident", "Firefox"], Tt = 0, Ct = 0; Ct < bt.length; Ct += 1) if (yt && 0 <= navigator.userAgent.indexOf(bt[Ct])) {
    Tt = 1;break;
  }var wt = yt && window.Promise ? function (t) {
    var e = !1;return function () {
      e || (e = !0, window.Promise.resolve().then(function () {
        e = !1, t();
      }));
    };
  } : function (t) {
    var e = !1;return function () {
      e || (e = !0, setTimeout(function () {
        e = !1, t();
      }, Tt));
    };
  };function It(t) {
    return t && "[object Function]" === ({}).toString.call(t);
  }function Dt(t, e) {
    if (1 !== t.nodeType) return [];var n = getComputedStyle(t, null);return e ? n[e] : n;
  }function At(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }function St(_x) {
    var _again = true;

    _function: while (_again) {
      var t = _x;
      _again = false;
      if (!t) return document.body;switch (t.nodeName) {case "HTML":case "BODY":
          return t.ownerDocument.body;case "#document":
          return t.body;}var e = Dt(t),
          n = e.overflow,
          i = e.overflowX,
          r = e.overflowY;if (/(auto|scroll|overlay)/.test(n + r + i)) {
        return t;
      } else {
        _x = At(t);
        _again = true;
        e = n = i = r = undefined;
        continue _function;
      }
    }
  }var Ot = yt && !(!window.MSInputMethodContext || !document.documentMode),
      Nt = yt && /MSIE 10/.test(navigator.userAgent);function kt(t) {
    return 11 === t ? Ot : 10 === t ? Nt : Ot || Nt;
  }function Lt(_x2) {
    var _again2 = true;

    _function2: while (_again2) {
      var t = _x2;
      _again2 = false;
      if (!t) return document.documentElement;for (var e = kt(10) ? document.body : null, n = t.offsetParent; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;var i = n && n.nodeName;if (i && "BODY" !== i && "HTML" !== i) {
        if (-1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === Dt(n, "position")) {
          _x2 = n;
          _again2 = true;
          e = n = i = undefined;
          continue _function2;
        } else {
          return n;
        }
      } else {
        return t ? t.ownerDocument.documentElement : document.documentElement;
      }
    }
  }function Pt(_x3) {
    var _again3 = true;

    _function3: while (_again3) {
      var t = _x3;
      _again3 = false;
      if (null !== t.parentNode) {
        _x3 = t.parentNode;
        _again3 = true;
        continue _function3;
      } else {
        return t;
      }
    }
  }function xt(_x4, _x5) {
    var _again4 = true;

    _function4: while (_again4) {
      var t = _x4,
          e = _x5;
      _again4 = false;
      if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
          i = n ? t : e,
          r = n ? e : t,
          o = document.createRange();o.setStart(i, 0), o.setEnd(r, 0);var s,
          a,
          l = o.commonAncestorContainer;if (t !== l && e !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && Lt(s.firstElementChild) !== s ? Lt(l) : l;var c = Pt(t);if (c.host) {
        _x4 = c.host;
        _x5 = e;
        _again4 = true;
        n = i = r = o = s = a = l = c = undefined;
        continue _function4;
      } else {
        _x4 = t;
        _x5 = Pt(e).host;
        _again4 = true;
        n = i = r = o = s = a = l = c = undefined;
        continue _function4;
      }
    }
  }function jt(t) {
    var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        n = t.nodeName;if ("BODY" === n || "HTML" === n) {
      var i = t.ownerDocument.documentElement;return (t.ownerDocument.scrollingElement || i)[e];
    }return t[e];
  }function Mt(t, e) {
    var n = "x" === e ? "Left" : "Top",
        i = "Left" === n ? "Right" : "Bottom";return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10);
  }function Rt(t, e, n, i) {
    return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], kt(10) ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0);
  }function Ht() {
    var t = document.body,
        e = document.documentElement,
        n = kt(10) && getComputedStyle(e);return { height: Rt("Height", t, e, n), width: Rt("Width", t, e, n) };
  }var Wt = function Wt(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  },
      Ft = (function () {
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }return function (t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
    };
  })(),
      Ut = function Ut(t, e, n) {
    return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
  },
      Bt = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }return t;
  };function Kt(t) {
    return Bt({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }function Vt(t) {
    var e = {};try {
      if (kt(10)) {
        e = t.getBoundingClientRect();var n = jt(t, "top"),
            i = jt(t, "left");e.top += n, e.left += i, e.bottom += n, e.right += i;
      } else e = t.getBoundingClientRect();
    } catch (t) {}var r = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
        o = "HTML" === t.nodeName ? Ht() : {},
        s = o.width || t.clientWidth || r.right - r.left,
        a = o.height || t.clientHeight || r.bottom - r.top,
        l = t.offsetWidth - s,
        c = t.offsetHeight - a;if (l || c) {
      var f = Dt(t);l -= Mt(f, "x"), c -= Mt(f, "y"), r.width -= l, r.height -= c;
    }return Kt(r);
  }function Qt(t, e) {
    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = kt(10),
        r = "HTML" === e.nodeName,
        o = Vt(t),
        s = Vt(e),
        a = St(t),
        l = Dt(e),
        c = parseFloat(l.borderTopWidth, 10),
        f = parseFloat(l.borderLeftWidth, 10);n && "HTML" === e.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));var h = Kt({ top: o.top - s.top - c, left: o.left - s.left - f, width: o.width, height: o.height });if ((h.marginTop = 0, h.marginLeft = 0, !i && r)) {
      var u = parseFloat(l.marginTop, 10),
          d = parseFloat(l.marginLeft, 10);h.top -= c - u, h.bottom -= c - u, h.left -= f - d, h.right -= f - d, h.marginTop = u, h.marginLeft = d;
    }return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (h = (function (t, e) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
          i = jt(e, "top"),
          r = jt(e, "left"),
          o = n ? -1 : 1;return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t;
    })(h, e)), h;
  }function Yt(t) {
    if (!t || !t.parentElement || kt()) return document.documentElement;for (var e = t.parentElement; e && "none" === Dt(e, "transform");) e = e.parentElement;return e || document.documentElement;
  }function Gt(t, e, n, i) {
    var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        o = { top: 0, left: 0 },
        s = r ? Yt(t) : xt(t, e);if ("viewport" === i) o = (function (t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          n = t.ownerDocument.documentElement,
          i = Qt(t, n),
          r = Math.max(n.clientWidth, window.innerWidth || 0),
          o = Math.max(n.clientHeight, window.innerHeight || 0),
          s = e ? 0 : jt(n),
          a = e ? 0 : jt(n, "left");return Kt({ top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o });
    })(s, r);else {
      var a = void 0;"scrollParent" === i ? "BODY" === (a = St(At(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;var l = Qt(a, s, r);if ("HTML" !== a.nodeName || (function t(_x6) {
        var _left;

        var _again5 = true;

        _function5: while (_again5) {
          var e = _x6;
          _again5 = false;
          var n = e.nodeName;
          if (!(_left = "BODY" !== n && "HTML" !== n)) {
            return _left;
          }

          if (_left = "fixed" === Dt(e, "position")) {
            return _left;
          }

          _x6 = At(e);
          _again5 = true;
          n = undefined;
          continue _function5;
        }
      })(s)) o = l;else {
        var c = Ht(),
            f = c.height,
            h = c.width;o.top += l.top - l.marginTop, o.bottom = f + l.top, o.left += l.left - l.marginLeft, o.right = h + l.left;
      }
    }return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o;
  }function qt(t, e, i, n, r) {
    var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === t.indexOf("auto")) return t;var s = Gt(i, n, o, r),
        a = { top: { width: s.width, height: e.top - s.top }, right: { width: s.right - e.right, height: s.height }, bottom: { width: s.width, height: s.bottom - e.bottom }, left: { width: e.left - s.left, height: s.height } },
        l = Object.keys(a).map(function (t) {
      return Bt({ key: t }, a[t], { area: (e = a[t], e.width * e.height) });var e;
    }).sort(function (t, e) {
      return e.area - t.area;
    }),
        c = l.filter(function (t) {
      var e = t.width,
          n = t.height;return e >= i.clientWidth && n >= i.clientHeight;
    }),
        f = 0 < c.length ? c[0].key : l[0].key,
        h = t.split("-")[1];return f + (h ? "-" + h : "");
  }function zt(t, e, n) {
    var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;return Qt(n, i ? Yt(e) : xt(e, n), i);
  }function Xt(t) {
    var e = getComputedStyle(t),
        n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
        i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }function Jt(t) {
    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }function Zt(t, e, n) {
    n = n.split("-")[0];var i = Xt(t),
        r = { width: i.width, height: i.height },
        o = -1 !== ["right", "left"].indexOf(n),
        s = o ? "top" : "left",
        a = o ? "left" : "top",
        l = o ? "height" : "width",
        c = o ? "width" : "height";return r[s] = e[s] + e[l] / 2 - i[l] / 2, r[a] = n === a ? e[a] - i[c] : e[Jt(a)], r;
  }function $t(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }function te(t, n, e) {
    return (void 0 === e ? t : t.slice(0, (function (t, e, n) {
      if (Array.prototype.findIndex) return t.findIndex(function (t) {
        return t[e] === n;
      });var i = $t(t, function (t) {
        return t[e] === n;
      });return t.indexOf(i);
    })(t, "name", e))).forEach(function (t) {
      t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var e = t["function"] || t.fn;t.enabled && It(e) && (n.offsets.popper = Kt(n.offsets.popper), n.offsets.reference = Kt(n.offsets.reference), n = e(n, t));
    }), n;
  }function ee(t, n) {
    return t.some(function (t) {
      var e = t.name;return t.enabled && e === n;
    });
  }function ne(t) {
    for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
      var r = e[i],
          o = r ? "" + r + n : t;if ("undefined" != typeof document.body.style[o]) return o;
    }return null;
  }function ie(t) {
    var e = t.ownerDocument;return e ? e.defaultView : window;
  }function re(t, e, n, i) {
    n.updateBound = i, ie(t).addEventListener("resize", n.updateBound, { passive: !0 });var r = St(t);return (function t(e, n, i, r) {
      var o = "BODY" === e.nodeName,
          s = o ? e.ownerDocument.defaultView : e;s.addEventListener(n, i, { passive: !0 }), o || t(St(s.parentNode), n, i, r), r.push(s);
    })(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n;
  }function oe() {
    var t, e;this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, ie(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
      t.removeEventListener("scroll", e.updateBound);
    }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e));
  }function se(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }function ae(n, i) {
    Object.keys(i).forEach(function (t) {
      var e = "";-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && se(i[t]) && (e = "px"), n.style[t] = i[t] + e;
    });
  }function le(t, e, n) {
    var i = $t(t, function (t) {
      return t.name === e;
    }),
        r = !!i && t.some(function (t) {
      return t.name === n && t.enabled && t.order < i.order;
    });if (!r) {
      var o = "`" + e + "`",
          s = "`" + n + "`";console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
    }return r;
  }var ce = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      fe = ce.slice(3);function he(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = fe.indexOf(t),
        i = fe.slice(n + 1).concat(fe.slice(0, n));return e ? i.reverse() : i;
  }var ue = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };function de(t, r, o, e) {
    var s = [0, 0],
        a = -1 !== ["right", "left"].indexOf(e),
        n = t.split(/(\+|\-)/).map(function (t) {
      return t.trim();
    }),
        i = n.indexOf($t(n, function (t) {
      return -1 !== t.search(/,|\s/);
    }));n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l = /\s*,\s*|\s+/,
        c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];return (c = c.map(function (t, e) {
      var n = (1 === e ? !a : a) ? "height" : "width",
          i = !1;return t.reduce(function (t, e) {
        return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, i = !0, t) : i ? (t[t.length - 1] += e, i = !1, t) : t.concat(e);
      }, []).map(function (t) {
        return (function (t, e, n, i) {
          var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              o = +r[1],
              s = r[2];if (!o) return t;if (0 === s.indexOf("%")) {
            var a = void 0;switch (s) {case "%p":
                a = n;break;case "%":case "%r":default:
                a = i;}return Kt(a)[e] / 100 * o;
          }if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;return o;
        })(t, n, r, o);
      });
    })).forEach(function (n, i) {
      n.forEach(function (t, e) {
        se(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1));
      });
    }), s;
  }var pe = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(t) {
          var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];if (i) {
            var r = t.offsets,
                o = r.reference,
                s = r.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                f = { start: Ut({}, l, o[l]), end: Ut({}, l, o[l] + o[c] - s[c]) };t.offsets.popper = Bt({}, s, f[i]);
          }return t;
        } }, offset: { order: 200, enabled: !0, fn: function fn(t, e) {
          var n = e.offset,
              i = t.placement,
              r = t.offsets,
              o = r.popper,
              s = r.reference,
              a = i.split("-")[0],
              l = void 0;return l = se(+n) ? [+n, 0] : de(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t;
        }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(t, i) {
          var e = i.boundariesElement || Lt(t.instance.popper);t.instance.reference === e && (e = Lt(e));var n = ne("transform"),
              r = t.instance.popper.style,
              o = r.top,
              s = r.left,
              a = r[n];r.top = "", r.left = "", r[n] = "";var l = Gt(t.instance.popper, t.instance.reference, i.padding, e, t.positionFixed);r.top = o, r.left = s, r[n] = a, i.boundaries = l;var c = i.priority,
              f = t.offsets.popper,
              h = { primary: function primary(t) {
              var e = f[t];return f[t] < l[t] && !i.escapeWithReference && (e = Math.max(f[t], l[t])), Ut({}, t, e);
            }, secondary: function secondary(t) {
              var e = "right" === t ? "left" : "top",
                  n = f[e];return f[t] > l[t] && !i.escapeWithReference && (n = Math.min(f[e], l[t] - ("right" === t ? f.width : f.height))), Ut({}, e, n);
            } };return c.forEach(function (t) {
            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";f = Bt({}, f, h[e](t));
          }), t.offsets.popper = f, t;
        }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function fn(t) {
          var e = t.offsets,
              n = e.popper,
              i = e.reference,
              r = t.placement.split("-")[0],
              o = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(r),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t;
        } }, arrow: { order: 500, enabled: !0, fn: function fn(t, e) {
          var n;if (!le(t.instance.modifiers, "arrow", "keepTogether")) return t;var i = e.element;if ("string" == typeof i) {
            if (!(i = t.instance.popper.querySelector(i))) return t;
          } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;var r = t.placement.split("-")[0],
              o = t.offsets,
              s = o.popper,
              a = o.reference,
              l = -1 !== ["left", "right"].indexOf(r),
              c = l ? "height" : "width",
              f = l ? "Top" : "Left",
              h = f.toLowerCase(),
              u = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = Xt(i)[c];a[d] - p < s[h] && (t.offsets.popper[h] -= s[h] - (a[d] - p)), a[h] + p > s[d] && (t.offsets.popper[h] += a[h] + p - s[d]), t.offsets.popper = Kt(t.offsets.popper);var g = a[h] + a[c] / 2 - p / 2,
              m = Dt(t.instance.popper),
              _ = parseFloat(m["margin" + f], 10),
              v = parseFloat(m["border" + f + "Width"], 10),
              E = g - t.offsets.popper[h] - _ - v;return E = Math.max(Math.min(s[c] - p, E), 0), t.arrowElement = i, t.offsets.arrow = (Ut(n = {}, h, Math.round(E)), Ut(n, u, ""), n), t;
        }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function fn(p, g) {
          if (ee(p.instance.modifiers, "inner")) return p;if (p.flipped && p.placement === p.originalPlacement) return p;var m = Gt(p.instance.popper, p.instance.reference, g.padding, g.boundariesElement, p.positionFixed),
              _ = p.placement.split("-")[0],
              v = Jt(_),
              E = p.placement.split("-")[1] || "",
              y = [];switch (g.behavior) {case ue.FLIP:
              y = [_, v];break;case ue.CLOCKWISE:
              y = he(_);break;case ue.COUNTERCLOCKWISE:
              y = he(_, !0);break;default:
              y = g.behavior;}return y.forEach(function (t, e) {
            if (_ !== t || y.length === e + 1) return p;_ = p.placement.split("-")[0], v = Jt(_);var n,
                i = p.offsets.popper,
                r = p.offsets.reference,
                o = Math.floor,
                s = "left" === _ && o(i.right) > o(r.left) || "right" === _ && o(i.left) < o(r.right) || "top" === _ && o(i.bottom) > o(r.top) || "bottom" === _ && o(i.top) < o(r.bottom),
                a = o(i.left) < o(m.left),
                l = o(i.right) > o(m.right),
                c = o(i.top) < o(m.top),
                f = o(i.bottom) > o(m.bottom),
                h = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && f,
                u = -1 !== ["top", "bottom"].indexOf(_),
                d = !!g.flipVariations && (u && "start" === E && a || u && "end" === E && l || !u && "start" === E && c || !u && "end" === E && f);(s || h || d) && (p.flipped = !0, (s || h) && (_ = y[e + 1]), d && (E = "end" === (n = E) ? "start" : "start" === n ? "end" : n), p.placement = _ + (E ? "-" + E : ""), p.offsets.popper = Bt({}, p.offsets.popper, Zt(p.instance.popper, p.offsets.reference, p.placement)), p = te(p.instance.modifiers, p, "flip"));
          }), p;
        }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: !1, fn: function fn(t) {
          var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              r = i.popper,
              o = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = Jt(e), t.offsets.popper = Kt(r), t;
        } }, hide: { order: 800, enabled: !0, fn: function fn(t) {
          if (!le(t.instance.modifiers, "hide", "preventOverflow")) return t;var e = t.offsets.reference,
              n = $t(t.instance.modifiers, function (t) {
            return "preventOverflow" === t.name;
          }).boundaries;if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
            if (!0 === t.hide) return t;t.hide = !0, t.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === t.hide) return t;t.hide = !1, t.attributes["x-out-of-boundaries"] = !1;
          }return t;
        } }, computeStyle: { order: 850, enabled: !0, fn: function fn(t, e) {
          var n = e.x,
              i = e.y,
              r = t.offsets.popper,
              o = $t(t.instance.modifiers, function (t) {
            return "applyStyle" === t.name;
          }).gpuAcceleration;void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s = void 0 !== o ? o : e.gpuAcceleration,
              a = Vt(Lt(t.instance.popper)),
              l = { position: r.position },
              c = { left: Math.floor(r.left), top: Math.round(r.top), bottom: Math.round(r.bottom), right: Math.floor(r.right) },
              f = "bottom" === n ? "top" : "bottom",
              h = "right" === i ? "left" : "right",
              u = ne("transform"),
              d = void 0,
              p = void 0;if ((p = "bottom" === f ? -a.height + c.bottom : c.top, d = "right" === h ? -a.width + c.right : c.left, s && u)) l[u] = "translate3d(" + d + "px, " + p + "px, 0)", l[f] = 0, l[h] = 0, l.willChange = "transform";else {
            var g = "bottom" === f ? -1 : 1,
                m = "right" === h ? -1 : 1;l[f] = p * g, l[h] = d * m, l.willChange = f + ", " + h;
          }var _ = { "x-placement": t.placement };return t.attributes = Bt({}, _, t.attributes), t.styles = Bt({}, l, t.styles), t.arrowStyles = Bt({}, t.offsets.arrow, t.arrowStyles), t;
        }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function fn(t) {
          var e, n;return ae(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) {
            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
          }), t.arrowElement && Object.keys(t.arrowStyles).length && ae(t.arrowElement, t.arrowStyles), t;
        }, onLoad: function onLoad(t, e, n, i, r) {
          var o = zt(r, e, t, n.positionFixed),
              s = qt(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);return e.setAttribute("x-placement", s), ae(e, { position: n.positionFixed ? "fixed" : "absolute" }), n;
        }, gpuAcceleration: void 0 } } },
      ge = (function () {
    function o(t, e) {
      var n = this,
          i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};Wt(this, o), this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update);
      }, this.update = wt(this.update.bind(this)), this.options = Bt({}, o.Defaults, i), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = t && t.jquery ? t[0] : t, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys(Bt({}, o.Defaults.modifiers, i.modifiers)).forEach(function (t) {
        n.options.modifiers[t] = Bt({}, o.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
        return Bt({ name: t }, n.options.modifiers[t]);
      }).sort(function (t, e) {
        return t.order - e.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && It(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state);
      }), this.update();var r = this.options.eventsEnabled;r && this.enableEventListeners(), this.state.eventsEnabled = r;
    }return Ft(o, [{ key: "update", value: function value() {
        return (function () {
          if (!this.state.isDestroyed) {
            var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };t.offsets.reference = zt(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = qt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = Zt(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = te(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
          }
        }).call(this);
      } }, { key: "destroy", value: function value() {
        return (function () {
          return this.state.isDestroyed = !0, ee(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[ne("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }).call(this);
      } }, { key: "enableEventListeners", value: function value() {
        return (function () {
          this.state.eventsEnabled || (this.state = re(this.reference, this.options, this.state, this.scheduleUpdate));
        }).call(this);
      } }, { key: "disableEventListeners", value: function value() {
        return oe.call(this);
      } }]), o;
  })();ge.Utils = ("undefined" != typeof window ? window : global).PopperUtils, ge.placements = ce, ge.Defaults = pe;var me,
      _e,
      ve,
      Ee,
      ye,
      be,
      Te,
      Ce,
      we,
      Ie,
      De,
      Ae,
      Se,
      Oe,
      Ne,
      ke,
      Le,
      Pe,
      xe,
      je,
      Me,
      Re,
      He,
      We,
      Fe,
      Ue,
      Be,
      Ke,
      Ve,
      Qe,
      Ye,
      Ge,
      qe,
      ze,
      Xe,
      Je,
      Ze,
      $e,
      tn,
      en,
      nn,
      rn,
      on,
      sn,
      an,
      ln,
      cn,
      fn,
      hn,
      un,
      dn,
      pn,
      gn,
      mn,
      _n,
      vn,
      En,
      yn,
      bn,
      Tn,
      Cn,
      wn,
      In,
      Dn,
      An,
      Sn,
      On,
      Nn,
      kn,
      Ln,
      Pn,
      xn,
      jn,
      Mn,
      Rn,
      Hn,
      Wn,
      Fn,
      Un,
      Bn,
      Kn,
      Vn,
      Qn,
      Yn,
      Gn,
      qn,
      zn,
      Xn,
      Jn,
      Zn,
      $n,
      ti,
      ei,
      ni,
      ii,
      ri,
      oi,
      si,
      ai,
      li,
      ci,
      fi,
      hi,
      ui,
      di,
      pi,
      gi,
      mi,
      _i,
      vi,
      Ei,
      yi,
      bi,
      Ti = (_e = "dropdown", Ee = "." + (ve = "bs.dropdown"), ye = ".data-api", be = (me = e).fn[_e], Te = new RegExp("38|40|27"), Ce = { HIDE: "hide" + Ee, HIDDEN: "hidden" + Ee, SHOW: "show" + Ee, SHOWN: "shown" + Ee, CLICK: "click" + Ee, CLICK_DATA_API: "click" + Ee + ye, KEYDOWN_DATA_API: "keydown" + Ee + ye, KEYUP_DATA_API: "keyup" + Ee + ye }, we = "disabled", Ie = "show", De = "dropup", Ae = "dropright", Se = "dropleft", Oe = "dropdown-menu-right", Ne = "position-static", ke = '[data-toggle="dropdown"]', Le = ".dropdown form", Pe = ".dropdown-menu", xe = ".navbar-nav", je = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Me = "top-start", Re = "top-end", He = "bottom-start", We = "bottom-end", Fe = "right-start", Ue = "left-start", Be = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Ke = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Ve = (function () {
    function l(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }var t = l.prototype;return t.toggle = function () {
      if (!this._element.disabled && !me(this._element).hasClass(we)) {
        var t = l._getParentFromElement(this._element),
            e = me(this._menu).hasClass(Ie);if ((l._clearMenus(), !e)) {
          var n = { relatedTarget: this._element },
              i = me.Event(Ce.SHOW, n);if ((me(t).trigger(i), !i.isDefaultPrevented())) {
            if (!this._inNavbar) {
              if ("undefined" == typeof ge) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r = this._element;"parent" === this._config.reference ? r = t : gt.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && me(t).addClass(Ne), this._popper = new ge(r, this._menu, this._getPopperConfig());
            }"ontouchstart" in document.documentElement && 0 === me(t).closest(xe).length && me(document.body).children().on("mouseover", null, me.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), me(this._menu).toggleClass(Ie), me(t).toggleClass(Ie).trigger(me.Event(Ce.SHOWN, n));
          }
        }
      }
    }, t.dispose = function () {
      me.removeData(this._element, ve), me(this._element).off(Ee), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;me(this._element).on(Ce.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (t) {
      return t = c({}, this.constructor.Default, me(this._element).data(), t), gt.typeCheckConfig(_e, t, this.constructor.DefaultType), t;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = l._getParentFromElement(this._element);this._menu = me(t).find(Pe)[0];
      }return this._menu;
    }, t._getPlacement = function () {
      var t = me(this._element).parent(),
          e = He;return t.hasClass(De) ? (e = Me, me(this._menu).hasClass(Oe) && (e = Re)) : t.hasClass(Ae) ? e = Fe : t.hasClass(Se) ? e = Ue : me(this._menu).hasClass(Oe) && (e = We), e;
    }, t._detectNavbar = function () {
      return 0 < me(this._element).closest(".navbar").length;
    }, t._getPopperConfig = function () {
      var e = this,
          t = {};"function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = c({}, t.offsets, e._config.offset(t.offsets) || {}), t;
      } : t.offset = this._config.offset;var n = { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n;
    }, l._jQueryInterface = function (e) {
      return this.each(function () {
        var t = me(this).data(ve);if ((t || (t = new l(this, "object" == typeof e ? e : null), me(this).data(ve, t)), "string" == typeof e)) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');t[e]();
        }
      });
    }, l._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = me.makeArray(me(ke)), n = 0; n < e.length; n++) {
        var i = l._getParentFromElement(e[n]),
            r = me(e[n]).data(ve),
            o = { relatedTarget: e[n] };if (r) {
          var s = r._menu;if (me(i).hasClass(Ie) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && me.contains(i, t.target))) {
            var a = me.Event(Ce.HIDE, o);me(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && me(document.body).children().off("mouseover", null, me.noop), e[n].setAttribute("aria-expanded", "false"), me(s).removeClass(Ie), me(i).removeClass(Ie).trigger(me.Event(Ce.HIDDEN, o)));
          }
        }
      }
    }, l._getParentFromElement = function (t) {
      var e,
          n = gt.getSelectorFromElement(t);return n && (e = me(n)[0]), e || t.parentNode;
    }, l._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || me(t.target).closest(Pe).length)) : Te.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !me(this).hasClass(we))) {
        var e = l._getParentFromElement(this),
            n = me(e).hasClass(Ie);if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
          var i = me(e).find(je).get();if (0 !== i.length) {
            var r = i.indexOf(t.target);38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus();
          }
        } else {
          if (27 === t.which) {
            var o = me(e).find(ke)[0];me(o).trigger("focus");
          }me(this).trigger("click");
        }
      }
    }, s(l, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return Be;
      } }, { key: "DefaultType", get: function get() {
        return Ke;
      } }]), l;
  })(), me(document).on(Ce.KEYDOWN_DATA_API, ke, Ve._dataApiKeydownHandler).on(Ce.KEYDOWN_DATA_API, Pe, Ve._dataApiKeydownHandler).on(Ce.CLICK_DATA_API + " " + Ce.KEYUP_DATA_API, Ve._clearMenus).on(Ce.CLICK_DATA_API, ke, function (t) {
    t.preventDefault(), t.stopPropagation(), Ve._jQueryInterface.call(me(this), "toggle");
  }).on(Ce.CLICK_DATA_API, Le, function (t) {
    t.stopPropagation();
  }), me.fn[_e] = Ve._jQueryInterface, me.fn[_e].Constructor = Ve, me.fn[_e].noConflict = function () {
    return me.fn[_e] = be, Ve._jQueryInterface;
  }, Ve),
      Ci = (Ye = "modal", qe = "." + (Ge = "bs.modal"), ze = (Qe = e).fn[Ye], Xe = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, Je = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, Ze = { HIDE: "hide" + qe, HIDDEN: "hidden" + qe, SHOW: "show" + qe, SHOWN: "shown" + qe, FOCUSIN: "focusin" + qe, RESIZE: "resize" + qe, CLICK_DISMISS: "click.dismiss" + qe, KEYDOWN_DISMISS: "keydown.dismiss" + qe, MOUSEUP_DISMISS: "mouseup.dismiss" + qe, MOUSEDOWN_DISMISS: "mousedown.dismiss" + qe, CLICK_DATA_API: "click" + qe + ".data-api" }, $e = "modal-scrollbar-measure", tn = "modal-backdrop", en = "modal-open", nn = "fade", rn = "show", on = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" }, sn = (function () {
    function r(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = Qe(t).find(on.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
    }var t = r.prototype;return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, t.show = function (t) {
      var e = this;if (!this._isTransitioning && !this._isShown) {
        Qe(this._element).hasClass(nn) && (this._isTransitioning = !0);var n = Qe.Event(Ze.SHOW, { relatedTarget: t });Qe(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Qe(document.body).addClass(en), this._setEscapeEvent(), this._setResizeEvent(), Qe(this._element).on(Ze.CLICK_DISMISS, on.DATA_DISMISS, function (t) {
          return e.hide(t);
        }), Qe(this._dialog).on(Ze.MOUSEDOWN_DISMISS, function () {
          Qe(e._element).one(Ze.MOUSEUP_DISMISS, function (t) {
            Qe(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, t.hide = function (t) {
      var e = this;if ((t && t.preventDefault(), !this._isTransitioning && this._isShown)) {
        var n = Qe.Event(Ze.HIDE);if ((Qe(this._element).trigger(n), this._isShown && !n.isDefaultPrevented())) {
          this._isShown = !1;var i = Qe(this._element).hasClass(nn);if ((i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Qe(document).off(Ze.FOCUSIN), Qe(this._element).removeClass(rn), Qe(this._element).off(Ze.CLICK_DISMISS), Qe(this._dialog).off(Ze.MOUSEDOWN_DISMISS), i)) {
            var r = gt.getTransitionDurationFromElement(this._element);Qe(this._element).one(gt.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(r);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      Qe.removeData(this._element, Ge), Qe(window, document, this._element, this._backdrop).off(qe), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (t) {
      return t = c({}, Xe, t), gt.typeCheckConfig(Ye, t, Je), t;
    }, t._showElement = function (t) {
      var e = this,
          n = Qe(this._element).hasClass(nn);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && gt.reflow(this._element), Qe(this._element).addClass(rn), this._config.focus && this._enforceFocus();var i = Qe.Event(Ze.SHOWN, { relatedTarget: t }),
          r = function r() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, Qe(e._element).trigger(i);
      };if (n) {
        var o = gt.getTransitionDurationFromElement(this._element);Qe(this._dialog).one(gt.TRANSITION_END, r).emulateTransitionEnd(o);
      } else r();
    }, t._enforceFocus = function () {
      var e = this;Qe(document).off(Ze.FOCUSIN).on(Ze.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && 0 === Qe(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;this._isShown && this._config.keyboard ? Qe(this._element).on(Ze.KEYDOWN_DISMISS, function (t) {
        27 === t.which && (t.preventDefault(), e.hide());
      }) : this._isShown || Qe(this._element).off(Ze.KEYDOWN_DISMISS);
    }, t._setResizeEvent = function () {
      var e = this;this._isShown ? Qe(window).on(Ze.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : Qe(window).off(Ze.RESIZE);
    }, t._hideModal = function () {
      var t = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
        Qe(document.body).removeClass(en), t._resetAdjustments(), t._resetScrollbar(), Qe(t._element).trigger(Ze.HIDDEN);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (Qe(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (t) {
      var e = this,
          n = Qe(this._element).hasClass(nn) ? nn : "";if (this._isShown && this._config.backdrop) {
        if ((this._backdrop = document.createElement("div"), this._backdrop.className = tn, n && Qe(this._backdrop).addClass(n), Qe(this._backdrop).appendTo(document.body), Qe(this._element).on(Ze.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
        }), n && gt.reflow(this._backdrop), Qe(this._backdrop).addClass(rn), !t)) return;if (!n) return void t();var i = gt.getTransitionDurationFromElement(this._backdrop);Qe(this._backdrop).one(gt.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        Qe(this._backdrop).removeClass(rn);var r = function r() {
          e._removeBackdrop(), t && t();
        };if (Qe(this._element).hasClass(nn)) {
          var o = gt.getTransitionDurationFromElement(this._backdrop);Qe(this._backdrop).one(gt.TRANSITION_END, r).emulateTransitionEnd(o);
        } else r();
      } else t && t();
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var r = this;if (this._isBodyOverflowing) {
        Qe(on.FIXED_CONTENT).each(function (t, e) {
          var n = Qe(e)[0].style.paddingRight,
              i = Qe(e).css("padding-right");Qe(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px");
        }), Qe(on.STICKY_CONTENT).each(function (t, e) {
          var n = Qe(e)[0].style.marginRight,
              i = Qe(e).css("margin-right");Qe(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px");
        }), Qe(on.NAVBAR_TOGGLER).each(function (t, e) {
          var n = Qe(e)[0].style.marginRight,
              i = Qe(e).css("margin-right");Qe(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px");
        });var t = document.body.style.paddingRight,
            e = Qe(document.body).css("padding-right");Qe(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px");
      }
    }, t._resetScrollbar = function () {
      Qe(on.FIXED_CONTENT).each(function (t, e) {
        var n = Qe(e).data("padding-right");"undefined" != typeof n && Qe(e).css("padding-right", n).removeData("padding-right");
      }), Qe(on.STICKY_CONTENT + ", " + on.NAVBAR_TOGGLER).each(function (t, e) {
        var n = Qe(e).data("margin-right");"undefined" != typeof n && Qe(e).css("margin-right", n).removeData("margin-right");
      });var t = Qe(document.body).data("padding-right");"undefined" != typeof t && Qe(document.body).css("padding-right", t).removeData("padding-right");
    }, t._getScrollbarWidth = function () {
      var t = document.createElement("div");t.className = $e, document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
    }, r._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = Qe(this).data(Ge),
            e = c({}, Xe, Qe(this).data(), "object" == typeof n && n ? n : {});if ((t || (t = new r(this, e), Qe(this).data(Ge, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n](i);
        } else e.show && t.show(i);
      });
    }, s(r, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return Xe;
      } }]), r;
  })(), Qe(document).on(Ze.CLICK_DATA_API, on.DATA_TOGGLE, function (t) {
    var e,
        n = this,
        i = gt.getSelectorFromElement(this);i && (e = Qe(i)[0]);var r = Qe(e).data(Ge) ? "toggle" : c({}, Qe(e).data(), Qe(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var o = Qe(e).one(Ze.SHOW, function (t) {
      t.isDefaultPrevented() || o.one(Ze.HIDDEN, function () {
        Qe(n).is(":visible") && n.focus();
      });
    });sn._jQueryInterface.call(Qe(e), r, this);
  }), Qe.fn[Ye] = sn._jQueryInterface, Qe.fn[Ye].Constructor = sn, Qe.fn[Ye].noConflict = function () {
    return Qe.fn[Ye] = ze, sn._jQueryInterface;
  }, sn),
      wi = (ln = "tooltip", fn = "." + (cn = "bs.tooltip"), hn = (an = e).fn[ln], un = "bs-tooltip", dn = new RegExp("(^|\\s)" + un + "\\S+", "g"), mn = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !(gn = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }), selector: !(pn = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" }), placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" }, vn = "out", En = { HIDE: "hide" + fn, HIDDEN: "hidden" + fn, SHOW: (_n = "show") + fn, SHOWN: "shown" + fn, INSERTED: "inserted" + fn, CLICK: "click" + fn, FOCUSIN: "focusin" + fn, FOCUSOUT: "focusout" + fn, MOUSEENTER: "mouseenter" + fn, MOUSELEAVE: "mouseleave" + fn }, yn = "fade", bn = "show", Tn = ".tooltip-inner", Cn = ".arrow", wn = "hover", In = "focus", Dn = "click", An = "manual", Sn = (function () {
    function i(t, e) {
      if ("undefined" == typeof ge) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }var t = i.prototype;return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = an(t.currentTarget).data(e);n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), an(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (an(this.getTipElement()).hasClass(bn)) return void this._leave(null, this);this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), an.removeData(this.element, this.constructor.DATA_KEY), an(this.element).off(this.constructor.EVENT_KEY), an(this.element).closest(".modal").off("hide.bs.modal"), this.tip && an(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;if ("none" === an(this.element).css("display")) throw new Error("Please use show on visible elements");var t = an.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
        an(this.element).trigger(t);var n = an.contains(this.element.ownerDocument.documentElement, this.element);if (t.isDefaultPrevented() || !n) return;var i = this.getTipElement(),
            r = gt.getUID(this.constructor.NAME);i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && an(i).addClass(yn);var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
            s = this._getAttachment(o);this.addAttachmentClass(s);var a = !1 === this.config.container ? document.body : an(this.config.container);an(i).data(this.constructor.DATA_KEY, this), an.contains(this.element.ownerDocument.documentElement, this.tip) || an(i).appendTo(a), an(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new ge(this.element, i, { placement: s, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: Cn }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          }, onUpdate: function onUpdate(t) {
            e._handlePopperPlacementChange(t);
          } }), an(i).addClass(bn), "ontouchstart" in document.documentElement && an(document.body).children().on("mouseover", null, an.noop);var l = function l() {
          e.config.animation && e._fixTransition();var t = e._hoverState;e._hoverState = null, an(e.element).trigger(e.constructor.Event.SHOWN), t === vn && e._leave(null, e);
        };if (an(this.tip).hasClass(yn)) {
          var c = gt.getTransitionDurationFromElement(this.tip);an(this.tip).one(gt.TRANSITION_END, l).emulateTransitionEnd(c);
        } else l();
      }
    }, t.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          i = an.Event(this.constructor.Event.HIDE),
          r = function r() {
        e._hoverState !== _n && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), an(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
      };if ((an(this.element).trigger(i), !i.isDefaultPrevented())) {
        if ((an(n).removeClass(bn), "ontouchstart" in document.documentElement && an(document.body).children().off("mouseover", null, an.noop), this._activeTrigger[Dn] = !1, this._activeTrigger[In] = !1, this._activeTrigger[wn] = !1, an(this.tip).hasClass(yn))) {
          var o = gt.getTransitionDurationFromElement(n);an(n).one(gt.TRANSITION_END, r).emulateTransitionEnd(o);
        } else r();this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (t) {
      an(this.getTipElement()).addClass(un + "-" + t);
    }, t.getTipElement = function () {
      return this.tip = this.tip || an(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var t = an(this.getTipElement());this.setElementContent(t.find(Tn), this.getTitle()), t.removeClass(yn + " " + bn);
    }, t.setElementContent = function (t, e) {
      var n = this.config.html;"object" == typeof e && (e.nodeType || e.jquery) ? n ? an(e).parent().is(t) || t.empty().append(e) : t.text(an(e).text()) : t[n ? "html" : "text"](e);
    }, t.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, t._getAttachment = function (t) {
      return gn[t.toUpperCase()];
    }, t._setListeners = function () {
      var i = this;this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) an(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== An) {
          var e = t === wn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === wn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;an(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }an(i.element).closest(".modal").on("hide.bs.modal", function () {
          return i.hide();
        });
      }), this.config.selector ? this.config = c({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
    }, t._fixTitle = function () {
      var t = typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;(e = e || an(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), an(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? In : wn] = !0), an(e.getTipElement()).hasClass(bn) || e._hoverState === _n ? e._hoverState = _n : (clearTimeout(e._timeout), e._hoverState = _n, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === _n && e.show();
      }, e.config.delay.show) : e.show());
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;(e = e || an(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), an(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? In : wn] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = vn, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === vn && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;return !1;
    }, t._getConfig = function (t) {
      return "number" == typeof (t = c({}, this.constructor.Default, an(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), gt.typeCheckConfig(ln, t, this.constructor.DefaultType), t;
    }, t._getDelegateConfig = function () {
      var t = {};if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);return t;
    }, t._cleanTipClass = function () {
      var t = an(this.getTipElement()),
          e = t.attr("class").match(dn);null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, t._handlePopperPlacementChange = function (t) {
      this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, t._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;null === t.getAttribute("x-placement") && (an(t).removeClass(yn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = an(this).data(cn),
            e = "object" == typeof n && n;if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), an(this).data(cn, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        }
      });
    }, s(i, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return mn;
      } }, { key: "NAME", get: function get() {
        return ln;
      } }, { key: "DATA_KEY", get: function get() {
        return cn;
      } }, { key: "Event", get: function get() {
        return En;
      } }, { key: "EVENT_KEY", get: function get() {
        return fn;
      } }, { key: "DefaultType", get: function get() {
        return pn;
      } }]), i;
  })(), an.fn[ln] = Sn._jQueryInterface, an.fn[ln].Constructor = Sn, an.fn[ln].noConflict = function () {
    return an.fn[ln] = hn, Sn._jQueryInterface;
  }, Sn),
      Ii = (Nn = "popover", Ln = "." + (kn = "bs.popover"), Pn = (On = e).fn[Nn], xn = "bs-popover", jn = new RegExp("(^|\\s)" + xn + "\\S+", "g"), Mn = c({}, wi.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), Rn = c({}, wi.DefaultType, { content: "(string|element|function)" }), Hn = "fade", Fn = ".popover-header", Un = ".popover-body", Bn = { HIDE: "hide" + Ln, HIDDEN: "hidden" + Ln, SHOW: (Wn = "show") + Ln, SHOWN: "shown" + Ln, INSERTED: "inserted" + Ln, CLICK: "click" + Ln, FOCUSIN: "focusin" + Ln, FOCUSOUT: "focusout" + Ln, MOUSEENTER: "mouseenter" + Ln, MOUSELEAVE: "mouseleave" + Ln }, Kn = (function (t) {
    var e, n;function i() {
      return t.apply(this, arguments) || this;
    }n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;var r = i.prototype;return r.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, r.addAttachmentClass = function (t) {
      On(this.getTipElement()).addClass(xn + "-" + t);
    }, r.getTipElement = function () {
      return this.tip = this.tip || On(this.config.template)[0], this.tip;
    }, r.setContent = function () {
      var t = On(this.getTipElement());this.setElementContent(t.find(Fn), this.getTitle());var e = this._getContent();"function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Un), e), t.removeClass(Hn + " " + Wn);
    }, r._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, r._cleanTipClass = function () {
      var t = On(this.getTipElement()),
          e = t.attr("class").match(jn);null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = On(this).data(kn),
            e = "object" == typeof n ? n : null;if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), On(this).data(kn, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        }
      });
    }, s(i, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return Mn;
      } }, { key: "NAME", get: function get() {
        return Nn;
      } }, { key: "DATA_KEY", get: function get() {
        return kn;
      } }, { key: "Event", get: function get() {
        return Bn;
      } }, { key: "EVENT_KEY", get: function get() {
        return Ln;
      } }, { key: "DefaultType", get: function get() {
        return Rn;
      } }]), i;
  })(wi), On.fn[Nn] = Kn._jQueryInterface, On.fn[Nn].Constructor = Kn, On.fn[Nn].noConflict = function () {
    return On.fn[Nn] = Pn, Kn._jQueryInterface;
  }, Kn),
      Di = (Qn = "scrollspy", Gn = "." + (Yn = "bs.scrollspy"), qn = (Vn = e).fn[Qn], zn = { offset: 10, method: "auto", target: "" }, Xn = { offset: "number", method: "string", target: "(string|element)" }, Jn = { ACTIVATE: "activate" + Gn, SCROLL: "scroll" + Gn, LOAD_DATA_API: "load" + Gn + ".data-api" }, Zn = "dropdown-item", $n = "active", ti = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" }, ei = "offset", ni = "position", ii = (function () {
    function n(t, e) {
      var n = this;this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + ti.NAV_LINKS + "," + this._config.target + " " + ti.LIST_ITEMS + "," + this._config.target + " " + ti.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Vn(this._scrollElement).on(Jn.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }var t = n.prototype;return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? ei : ni,
          r = "auto" === this._config.method ? t : this._config.method,
          o = r === ni ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Vn.makeArray(Vn(this._selector)).map(function (t) {
        var e,
            n = gt.getSelectorFromElement(t);if ((n && (e = Vn(n)[0]), e)) {
          var i = e.getBoundingClientRect();if (i.width || i.height) return [Vn(e)[r]().top + o, n];
        }return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      Vn.removeData(this._element, Yn), Vn(this._scrollElement).off(Gn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (t) {
      if ("string" != typeof (t = c({}, zn, "object" == typeof t && t ? t : {})).target) {
        var e = Vn(t.target).attr("id");e || (e = gt.getUID(Qn), Vn(t.target).attr("id", e)), t.target = "#" + e;
      }return gt.typeCheckConfig(Qn, t, Xn), t;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
        var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();for (var r = this._offsets.length; r--;) {
          this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();var t = this._selector.split(",");t = t.map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      });var n = Vn(t.join(","));n.hasClass(Zn) ? (n.closest(ti.DROPDOWN).find(ti.DROPDOWN_TOGGLE).addClass($n), n.addClass($n)) : (n.addClass($n), n.parents(ti.NAV_LIST_GROUP).prev(ti.NAV_LINKS + ", " + ti.LIST_ITEMS).addClass($n), n.parents(ti.NAV_LIST_GROUP).prev(ti.NAV_ITEMS).children(ti.NAV_LINKS).addClass($n)), Vn(this._scrollElement).trigger(Jn.ACTIVATE, { relatedTarget: e });
    }, t._clear = function () {
      Vn(this._selector).filter(ti.ACTIVE).removeClass($n);
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = Vn(this).data(Yn);if ((t || (t = new n(this, "object" == typeof e && e), Vn(this).data(Yn, t)), "string" == typeof e)) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');t[e]();
        }
      });
    }, s(n, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return zn;
      } }]), n;
  })(), Vn(window).on(Jn.LOAD_DATA_API, function () {
    for (var t = Vn.makeArray(Vn(ti.DATA_SPY)), e = t.length; e--;) {
      var n = Vn(t[e]);ii._jQueryInterface.call(n, n.data());
    }
  }), Vn.fn[Qn] = ii._jQueryInterface, Vn.fn[Qn].Constructor = ii, Vn.fn[Qn].noConflict = function () {
    return Vn.fn[Qn] = qn, ii._jQueryInterface;
  }, ii),
      Ai = (si = "." + (oi = "bs.tab"), ai = (ri = e).fn.tab, li = { HIDE: "hide" + si, HIDDEN: "hidden" + si, SHOW: "show" + si, SHOWN: "shown" + si, CLICK_DATA_API: "click" + si + ".data-api" }, ci = "dropdown-menu", fi = "active", hi = "disabled", ui = "fade", di = "show", pi = ".dropdown", gi = ".nav, .list-group", mi = ".active", _i = "> li > .active", vi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Ei = ".dropdown-toggle", yi = "> .dropdown-menu .active", bi = (function () {
    function i(t) {
      this._element = t;
    }var t = i.prototype;return t.show = function () {
      var n = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && ri(this._element).hasClass(fi) || ri(this._element).hasClass(hi))) {
        var t,
            i,
            e = ri(this._element).closest(gi)[0],
            r = gt.getSelectorFromElement(this._element);if (e) {
          var o = "UL" === e.nodeName ? _i : mi;i = (i = ri.makeArray(ri(e).find(o)))[i.length - 1];
        }var s = ri.Event(li.HIDE, { relatedTarget: this._element }),
            a = ri.Event(li.SHOW, { relatedTarget: i });if ((i && ri(i).trigger(s), ri(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented())) {
          r && (t = ri(r)[0]), this._activate(this._element, e);var l = function l() {
            var t = ri.Event(li.HIDDEN, { relatedTarget: n._element }),
                e = ri.Event(li.SHOWN, { relatedTarget: i });ri(i).trigger(t), ri(n._element).trigger(e);
          };t ? this._activate(t, t.parentNode, l) : l();
        }
      }
    }, t.dispose = function () {
      ri.removeData(this._element, oi), this._element = null;
    }, t._activate = function (t, e, n) {
      var i = this,
          r = ("UL" === e.nodeName ? ri(e).find(_i) : ri(e).children(mi))[0],
          o = n && r && ri(r).hasClass(ui),
          s = function s() {
        return i._transitionComplete(t, r, n);
      };if (r && o) {
        var a = gt.getTransitionDurationFromElement(r);ri(r).one(gt.TRANSITION_END, s).emulateTransitionEnd(a);
      } else s();
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        ri(e).removeClass(di + " " + fi);var i = ri(e.parentNode).find(yi)[0];i && ri(i).removeClass(fi), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }if ((ri(t).addClass(fi), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), gt.reflow(t), ri(t).addClass(di), t.parentNode && ri(t.parentNode).hasClass(ci))) {
        var r = ri(t).closest(pi)[0];r && ri(r).find(Ei).addClass(fi), t.setAttribute("aria-expanded", !0);
      }n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = ri(this),
            e = t.data(oi);if ((e || (e = new i(this), t.data(oi, e)), "string" == typeof n)) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');e[n]();
        }
      });
    }, s(i, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }]), i;
  })(), ri(document).on(li.CLICK_DATA_API, vi, function (t) {
    t.preventDefault(), bi._jQueryInterface.call(ri(this), "show");
  }), ri.fn.tab = bi._jQueryInterface, ri.fn.tab.Constructor = bi, ri.fn.tab.noConflict = function () {
    return ri.fn.tab = ai, bi._jQueryInterface;
  }, bi);!(function (t) {
    if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e = t.fn.jquery.split(" ")[0].split(".");if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  })(e), t.Util = gt, t.Alert = mt, t.Button = _t, t.Carousel = vt, t.Collapse = Et, t.Dropdown = Ti, t.Modal = Ci, t.Popover = Ii, t.Scrollspy = Di, t.Tab = Ai, t.Tooltip = wi, Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.bundle.min.js.map


/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(_x10) {
  var _again = true;

  _function: while (_again) {
    var element = _x10;
    _again = false;

    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;
      case '#document':
        return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProperty = getStyleComputedProperty(element);

    var overflow = _getStyleComputedProperty.overflow;
    var overflowX = _getStyleComputedProperty.overflowX;
    var overflowY = _getStyleComputedProperty.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    _x10 = getParentNode(element);
    _again = true;
    _getStyleComputedProperty = overflow = overflowX = overflowY = undefined;
    continue _function;
  }
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(_x11) {
  var _again2 = true;

  _function2: while (_again2) {
    var element = _x11;
    _again2 = false;

    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    // .offsetParent will return the closest TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      _x11 = offsetParent;
      _again2 = true;
      noOffsetParent = offsetParent = nodeName = undefined;
      continue _function2;
    }

    return offsetParent;
  }
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(_x12) {
  var _again3 = true;

  _function3: while (_again3) {
    var node = _x12;
    _again3 = false;

    if (node.parentNode !== null) {
      _x12 = node.parentNode;
      _again3 = true;
      continue _function3;
    }

    return node;
  }
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(_x13, _x14) {
  var _again4 = true;

  _function4: while (_again4) {
    var element1 = _x13,
        element2 = _x14;
    _again4 = false;

    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document
    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
      _x13 = element1root.host;
      _x14 = element2;
      _again4 = true;
      order = start = end = range = commonAncestorContainer = element1root = undefined;
      continue _function4;
    } else {
      _x13 = element1;
      _x14 = getRoot(element2).host;
      _again4 = true;
      order = start = end = range = commonAncestorContainer = element1root = undefined;
      continue _function4;
    }
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length <= 1 || arguments[1] === undefined ? 'top' : arguments[1];

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && parent.nodeName === 'HTML') {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(_x15) {
  var _again5 = true;

  _function5: while (_again5) {
    var element = _x15;
    _again5 = false;

    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }
    _x15 = getParentNode(element);
    _again5 = true;
    nodeName = undefined;
    continue _function5;
  }
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = undefined;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes();

      var height = _getWindowSizes.height;
      var width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref3) {
  var width = _ref3.width;
  var height = _ref3.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref4) {
    var width = _ref4.width;
    var height = _ref4.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function _update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref5) {
    var name = _ref5.name;
    var enabled = _ref5.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function _destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function _enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function _disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x;
  var y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2
  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // Avoid blurry text by using full pixel integers.
  // For pixel-perfect positioning, top/bottom prefers rounded
  // values, while left/right prefers floored values.
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.round(popper.top),
    bottom: Math.round(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = undefined,
      top = undefined;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref6) {
    var name = _ref6.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets;
  var popper = _data$offsets.popper;
  var reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, _defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), _defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  // make sure to unset any eventual altSide value from the DOM node
  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets2 = data.offsets;
  var popper = _data$offsets2.popper;
  var reference = _data$offsets2.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = undefined;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = undefined;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref7) {
  var offset = _ref7.offset;
  var placement = data.placement;
  var _data$offsets3 = data.offsets;
  var popper = _data$offsets3.popper;
  var reference = _data$offsets3.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = undefined;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top;
  var left = popperStyles.left;
  var transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return _defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return _defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets4 = data.offsets;
    var reference = _data$offsets4.reference;
    var popper = _data$offsets4.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: _defineProperty({}, side, reference[side]),
      end: _defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets5 = data.offsets;
  var popper = _data$offsets5.popper;
  var reference = _data$offsets5.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods

var Popper = (function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */

  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    _classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs

  _createClass(Popper, [{
    key: 'update',
    value: function update() {
      return _update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      return _destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners() {
      return _enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners() {
      return _disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */
  }]);

  return Popper;
})();

Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

exports['default'] = Popper;

//# sourceMappingURL=popper.js.map
module.exports = exports['default'];


/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(_x8) {
  var _again = true;

  _function: while (_again) {
    var element = _x8;
    _again = false;

    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;
      case '#document':
        return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProperty = getStyleComputedProperty(element);

    var overflow = _getStyleComputedProperty.overflow;
    var overflowX = _getStyleComputedProperty.overflowX;
    var overflowY = _getStyleComputedProperty.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    _x8 = getParentNode(element);
    _again = true;
    _getStyleComputedProperty = overflow = overflowX = overflowY = undefined;
    continue _function;
  }
}

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(_x9) {
  var _again2 = true;

  _function2: while (_again2) {
    var element = _x9;
    _again2 = false;

    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return element ? element.ownerDocument.documentElement : document.documentElement;
    }

    // .offsetParent will return the closest TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      _x9 = offsetParent;
      _again2 = true;
      noOffsetParent = offsetParent = nodeName = undefined;
      continue _function2;
    }

    return offsetParent;
  }
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(_x10) {
  var _again3 = true;

  _function3: while (_again3) {
    var node = _x10;
    _again3 = false;

    if (node.parentNode !== null) {
      _x10 = node.parentNode;
      _again3 = true;
      continue _function3;
    }

    return node;
  }
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(_x11, _x12) {
  var _again4 = true;

  _function4: while (_again4) {
    var element1 = _x11,
        element2 = _x12;
    _again4 = false;

    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document
    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
      _x11 = element1root.host;
      _x12 = element2;
      _again4 = true;
      order = start = end = range = commonAncestorContainer = element1root = undefined;
      continue _function4;
    } else {
      _x11 = element1;
      _x12 = getRoot(element2).host;
      _again4 = true;
      order = start = end = range = commonAncestorContainer = element1root = undefined;
      continue _function4;
    }
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length <= 1 || arguments[1] === undefined ? 'top' : arguments[1];

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && parent.nodeName === 'HTML') {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(_x13) {
  var _again5 = true;

  _function5: while (_again5) {
    var element = _x13;
    _again5 = false;

    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }
    _x13 = getParentNode(element);
    _again5 = true;
    nodeName = undefined;
    continue _function5;
  }
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = undefined;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes();

      var height = _getWindowSizes.height;
      var width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width;
  var height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width;
    var height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Get the position of the given element, relative to its offset parent
 * @method
 * @memberof Popper.Utils
 * @param {Element} element
 * @return {Object} position - Coordinates of the element and its `scrollTop`
 */
function getOffsetRect(element) {
  var elementRect = undefined;
  if (element.nodeName === 'HTML') {
    var _getWindowSizes2 = getWindowSizes();

    var width = _getWindowSizes2.width;
    var height = _getWindowSizes2.height;

    elementRect = {
      width: width,
      height: height,
      left: 0,
      top: 0
    };
  } else {
    elementRect = {
      width: element.offsetWidth,
      height: element.offsetHeight,
      left: element.offsetLeft,
      top: element.offsetTop
    };
  }

  // position
  return getClientRect(elementRect);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref3) {
    var name = _ref3.name;
    var enabled = _ref3.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref4) {
    var name = _ref4.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

// This is here just for backward compatibility with versions lower than v1.10.3
// you should import the utilities using named exports, if you want them all use:
// ```
// import * as PopperUtils from 'popper-utils';
// ```
// The default export will be removed in the next major version.
var index = {
  computeAutoPlacement: computeAutoPlacement,
  debounce: debounce,
  findIndex: findIndex,
  getBordersSize: getBordersSize,
  getBoundaries: getBoundaries,
  getBoundingClientRect: getBoundingClientRect,
  getClientRect: getClientRect,
  getOffsetParent: getOffsetParent,
  getOffsetRect: getOffsetRect,
  getOffsetRectRelativeToArbitraryNode: getOffsetRectRelativeToArbitraryNode,
  getOuterSizes: getOuterSizes,
  getParentNode: getParentNode,
  getPopperOffsets: getPopperOffsets,
  getReferenceOffsets: getReferenceOffsets,
  getScroll: getScroll,
  getScrollParent: getScrollParent,
  getStyleComputedProperty: getStyleComputedProperty,
  getSupportedPropertyName: getSupportedPropertyName,
  getWindowSizes: getWindowSizes,
  isFixed: isFixed,
  isFunction: isFunction,
  isModifierEnabled: isModifierEnabled,
  isModifierRequired: isModifierRequired,
  isNumeric: isNumeric,
  removeEventListeners: removeEventListeners,
  runModifiers: runModifiers,
  setAttributes: setAttributes,
  setStyles: setStyles,
  setupEventListeners: setupEventListeners
};

exports.computeAutoPlacement = computeAutoPlacement;
exports.debounce = debounce;
exports.findIndex = findIndex;
exports.getBordersSize = getBordersSize;
exports.getBoundaries = getBoundaries;
exports.getBoundingClientRect = getBoundingClientRect;
exports.getClientRect = getClientRect;
exports.getOffsetParent = getOffsetParent;
exports.getOffsetRect = getOffsetRect;
exports.getOffsetRectRelativeToArbitraryNode = getOffsetRectRelativeToArbitraryNode;
exports.getOuterSizes = getOuterSizes;
exports.getParentNode = getParentNode;
exports.getPopperOffsets = getPopperOffsets;
exports.getReferenceOffsets = getReferenceOffsets;
exports.getScroll = getScroll;
exports.getScrollParent = getScrollParent;
exports.getStyleComputedProperty = getStyleComputedProperty;
exports.getSupportedPropertyName = getSupportedPropertyName;
exports.getWindowSizes = getWindowSizes;
exports.isFixed = isFixed;
exports.isFunction = isFunction;
exports.isModifierEnabled = isModifierEnabled;
exports.isModifierRequired = isModifierRequired;
exports.isNumeric = isNumeric;
exports.removeEventListeners = removeEventListeners;
exports.runModifiers = runModifiers;
exports.setAttributes = setAttributes;
exports.setStyles = setStyles;
exports.setupEventListeners = setupEventListeners;
exports['default'] = index;

//# sourceMappingURL=popper-utils.js.map


/**
 * tooltipster http://iamceege.github.io/tooltipster/
 * A rockin' custom tooltip jQuery plugin
 * Developed by Caleb Jacob and Louis Ameline
 * MIT license
 */'use strict';(function(root,factory){if(typeof define === 'function' && define.amd){ // AMD. Register as an anonymous module unless amdModuleId is set
define(["jquery"],function(a0){return factory(a0);});}else if(typeof exports === 'object'){ // Node. Does not work with strict CommonJS, but
// only CommonJS-like environments that support module.exports,
// like Node.
module.exports = factory(require("jquery"));}else {factory(jQuery);}})(undefined,function($){ // This file will be UMDified by a build task.
var defaults={animation:'fade',animationDuration:350,content:null,contentAsHTML:false,contentCloning:false,debug:true,delay:300,delayTouch:[300,500],functionInit:null,functionBefore:null,functionReady:null,functionAfter:null,functionFormat:null,IEmin:6,interactive:false,multiple:false, // will default to document.body, or must be an element positioned at (0, 0)
// in the document, typically like the very top views of an app.
parent:null,plugins:['sideTip'],repositionOnScroll:false,restoration:'none',selfDestruction:true,theme:[],timer:0,trackerInterval:500,trackOrigin:false,trackTooltip:false,trigger:'hover',triggerClose:{click:false,mouseleave:false,originClick:false,scroll:false,tap:false,touchleave:false},triggerOpen:{click:false,mouseenter:false,tap:false,touchstart:false},updateAnimation:'rotate',zIndex:9999999}, // we'll avoid using the 'window' global as a good practice but npm's
// jquery@<2.1.0 package actually requires a 'window' global, so not sure
// it's useful at all
win=typeof window != 'undefined'?window:null, // env will be proxied by the core for plugins to have access its properties
env={ // detect if this device can trigger touch events. Better have a false
// positive (unused listeners, that's ok) than a false negative.
// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
// http://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
hasTouchCapability:!!(win && ('ontouchstart' in win || win.DocumentTouch && win.document instanceof win.DocumentTouch || win.navigator.maxTouchPoints)),hasTransitions:transitionSupport(),IE:false, // don't set manually, it will be updated by a build task after the manifest
semVer:'4.2.5',window:win},core=function core(){ // core variables
// the core emitters
this.__$emitterPrivate = $({});this.__$emitterPublic = $({});this.__instancesLatestArr = []; // collects plugin constructors
this.__plugins = {}; // proxy env variables for plugins who might use them
this._env = env;}; // core methods
core.prototype = { /**
	 * A function to proxy the public methods of an object onto another
	 *
	 * @param {object} constructor The constructor to bridge
	 * @param {object} obj The object that will get new methods (an instance or the core)
	 * @param {string} pluginName A plugin name for the console log message
	 * @return {core}
	 * @private
	 */__bridge:function __bridge(constructor,obj,pluginName){ // if it's not already bridged
if(!obj[pluginName]){var fn=function fn(){};fn.prototype = constructor;var pluginInstance=new fn(); // the _init method has to exist in instance constructors but might be missing
// in core constructors
if(pluginInstance.__init){pluginInstance.__init(obj);}$.each(constructor,function(methodName,fn){ // don't proxy "private" methods, only "protected" and public ones
if(methodName.indexOf('__') != 0){ // if the method does not exist yet
if(!obj[methodName]){obj[methodName] = function(){return pluginInstance[methodName].apply(pluginInstance,Array.prototype.slice.apply(arguments));}; // remember to which plugin this method corresponds (several plugins may
// have methods of the same name, we need to be sure)
obj[methodName].bridged = pluginInstance;}else if(defaults.debug){console.log('The ' + methodName + ' method of the ' + pluginName + ' plugin conflicts with another plugin or native methods');}}});obj[pluginName] = pluginInstance;}return this;}, /**
	 * For mockup in Node env if need be, for testing purposes
	 *
	 * @return {core}
	 * @private
	 */__setWindow:function __setWindow(window){env.window = window;return this;}, /**
	 * Returns a ruler, a tool to help measure the size of a tooltip under
	 * various settings. Meant for plugins
	 * 
	 * @see Ruler
	 * @return {object} A Ruler instance
	 * @protected
	 */_getRuler:function _getRuler($tooltip){return new Ruler($tooltip);}, /**
	 * For internal use by plugins, if needed
	 *
	 * @return {core}
	 * @protected
	 */_off:function _off(){this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments));return this;}, /**
	 * For internal use by plugins, if needed
	 *
	 * @return {core}
	 * @protected
	 */_on:function _on(){this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments));return this;}, /**
	 * For internal use by plugins, if needed
	 *
	 * @return {core}
	 * @protected
	 */_one:function _one(){this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments));return this;}, /**
	 * Returns (getter) or adds (setter) a plugin
	 *
	 * @param {string|object} plugin Provide a string (in the full form
	 * "namespace.name") to use as as getter, an object to use as a setter
	 * @return {object|core}
	 * @protected
	 */_plugin:function _plugin(plugin){var self=this; // getter
if(typeof plugin == 'string'){var pluginName=plugin,p=null; // if the namespace is provided, it's easy to search
if(pluginName.indexOf('.') > 0){p = self.__plugins[pluginName];} // otherwise, return the first name that matches
else {$.each(self.__plugins,function(i,plugin){if(plugin.name.substring(plugin.name.length - pluginName.length - 1) == '.' + pluginName){p = plugin;return false;}});}return p;} // setter
else { // force namespaces
if(plugin.name.indexOf('.') < 0){throw new Error('Plugins must be namespaced');}self.__plugins[plugin.name] = plugin; // if the plugin has core features
if(plugin.core){ // bridge non-private methods onto the core to allow new core methods
self.__bridge(plugin.core,self,plugin.name);}return this;}}, /**
	 * Trigger events on the core emitters
	 * 
	 * @returns {core}
	 * @protected
	 */_trigger:function _trigger(){var args=Array.prototype.slice.apply(arguments);if(typeof args[0] == 'string'){args[0] = {type:args[0]};} // note: the order of emitters matters
this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,args);this.__$emitterPublic.trigger.apply(this.__$emitterPublic,args);return this;}, /**
	 * Returns instances of all tooltips in the page or an a given element
	 *
	 * @param {string|HTML object collection} selector optional Use this
	 * parameter to restrict the set of objects that will be inspected
	 * for the retrieval of instances. By default, all instances in the
	 * page are returned.
	 * @return {array} An array of instance objects
	 * @public
	 */instances:function instances(selector){var instances=[],sel=selector || '.tooltipstered';$(sel).each(function(){var $this=$(this),ns=$this.data('tooltipster-ns');if(ns){$.each(ns,function(i,namespace){instances.push($this.data(namespace));});}});return instances;}, /**
	 * Returns the Tooltipster objects generated by the last initializing call
	 *
	 * @return {array} An array of instance objects
	 * @public
	 */instancesLatest:function instancesLatest(){return this.__instancesLatestArr;}, /**
	 * For public use only, not to be used by plugins (use ::_off() instead)
	 *
	 * @return {core}
	 * @public
	 */off:function off(){this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments));return this;}, /**
	 * For public use only, not to be used by plugins (use ::_on() instead)
	 *
	 * @return {core}
	 * @public
	 */on:function on(){this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments));return this;}, /**
	 * For public use only, not to be used by plugins (use ::_one() instead)
	 * 
	 * @return {core}
	 * @public
	 */one:function one(){this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments));return this;}, /**
	 * Returns all HTML elements which have one or more tooltips
	 *
	 * @param {string} selector optional Use this to restrict the results
	 * to the descendants of an element
	 * @return {array} An array of HTML elements
	 * @public
	 */origins:function origins(selector){var sel=selector?selector + ' ':'';return $(sel + '.tooltipstered').toArray();}, /**
	 * Change default options for all future instances
	 *
	 * @param {object} d The options that should be made defaults
	 * @return {core}
	 * @public
	 */setDefaults:function setDefaults(d){$.extend(defaults,d);return this;}, /**
	 * For users to trigger their handlers on the public emitter
	 * 
	 * @returns {core}
	 * @public
	 */triggerHandler:function triggerHandler(){this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments));return this;}}; // $.tooltipster will be used to call core methods
$.tooltipster = new core(); // the Tooltipster instance class (mind the capital T)
$.Tooltipster = function(element,options){ // list of instance variables
// stack of custom callbacks provided as parameters to API methods
this.__callbacks = {close:[],open:[]}; // the schedule time of DOM removal
this.__closingTime; // this will be the user content shown in the tooltip. A capital "C" is used
// because there is also a method called content()
this.__Content; // for the size tracker
this.__contentBcr; // to disable the tooltip after destruction
this.__destroyed = false; // we can't emit directly on the instance because if a method with the same
// name as the event exists, it will be called by jQuery. Se we use a plain
// object as emitter. This emitter is for internal use by plugins,
// if needed.
this.__$emitterPrivate = $({}); // this emitter is for the user to listen to events without risking to mess
// with our internal listeners
this.__$emitterPublic = $({});this.__enabled = true; // the reference to the gc interval
this.__garbageCollector; // various position and size data recomputed before each repositioning
this.__Geometry; // the tooltip position, saved after each repositioning by a plugin
this.__lastPosition; // a unique namespace per instance
this.__namespace = 'tooltipster-' + Math.round(Math.random() * 1000000);this.__options; // will be used to support origins in scrollable areas
this.__$originParents;this.__pointerIsOverOrigin = false; // to remove themes if needed
this.__previousThemes = []; // the state can be either: appearing, stable, disappearing, closed
this.__state = 'closed'; // timeout references
this.__timeouts = {close:[],open:null}; // store touch events to be able to detect emulated mouse events
this.__touchEvents = []; // the reference to the tracker interval
this.__tracker = null; // the element to which this tooltip is associated
this._$origin; // this will be the tooltip element (jQuery wrapped HTML element).
// It's the job of a plugin to create it and append it to the DOM
this._$tooltip; // launch
this.__init(element,options);};$.Tooltipster.prototype = { /**
	 * @param origin
	 * @param options
	 * @private
	 */__init:function __init(origin,options){var self=this;self._$origin = $(origin);self.__options = $.extend(true,{},defaults,options); // some options may need to be reformatted
self.__optionsFormat(); // don't run on old IE if asked no to
if(!env.IE || env.IE >= self.__options.IEmin){ // note: the content is null (empty) by default and can stay that
// way if the plugin remains initialized but not fed any content. The
// tooltip will just not appear.
// let's save the initial value of the title attribute for later
// restoration if need be.
var initialTitle=null; // it will already have been saved in case of multiple tooltips
if(self._$origin.data('tooltipster-initialTitle') === undefined){initialTitle = self._$origin.attr('title'); // we do not want initialTitle to be "undefined" because
// of how jQuery's .data() method works
if(initialTitle === undefined)initialTitle = null;self._$origin.data('tooltipster-initialTitle',initialTitle);} // If content is provided in the options, it has precedence over the
// title attribute.
// Note: an empty string is considered content, only 'null' represents
// the absence of content.
// Also, an existing title="" attribute will result in an empty string
// content
if(self.__options.content !== null){self.__contentSet(self.__options.content);}else {var selector=self._$origin.attr('data-tooltip-content'),$el;if(selector){$el = $(selector);}if($el && $el[0]){self.__contentSet($el.first());}else {self.__contentSet(initialTitle);}}self._$origin // strip the title off of the element to prevent the default tooltips
// from popping up
.removeAttr('title') // to be able to find all instances on the page later (upon window
// events in particular)
.addClass('tooltipstered'); // set listeners on the origin
self.__prepareOrigin(); // set the garbage collector
self.__prepareGC(); // init plugins
$.each(self.__options.plugins,function(i,pluginName){self._plug(pluginName);}); // to detect swiping
if(env.hasTouchCapability){$(env.window.document.body).on('touchmove.' + self.__namespace + '-triggerOpen',function(event){self._touchRecordEvent(event);});}self // prepare the tooltip when it gets created. This event must
// be fired by a plugin
._on('created',function(){self.__prepareTooltip();}) // save position information when it's sent by a plugin
._on('repositioned',function(e){self.__lastPosition = e.position;});}else {self.__options.disabled = true;}}, /**
	 * Insert the content into the appropriate HTML element of the tooltip
	 * 
	 * @returns {self}
	 * @private
	 */__contentInsert:function __contentInsert(){var self=this,$el=self._$tooltip.find('.tooltipster-content'),formattedContent=self.__Content,format=function format(content){formattedContent = content;};self._trigger({type:'format',content:self.__Content,format:format});if(self.__options.functionFormat){formattedContent = self.__options.functionFormat.call(self,self,{origin:self._$origin[0]},self.__Content);}if(typeof formattedContent === 'string' && !self.__options.contentAsHTML){$el.text(formattedContent);}else {$el.empty().append(formattedContent);}return self;}, /**
	 * Save the content, cloning it beforehand if need be
	 * 
	 * @param content
	 * @returns {self}
	 * @private
	 */__contentSet:function __contentSet(content){ // clone if asked. Cloning the object makes sure that each instance has its
// own version of the content (in case a same object were provided for several
// instances)
// reminder: typeof null === object
if(content instanceof $ && this.__options.contentCloning){content = content.clone(true);}this.__Content = content;this._trigger({type:'updated',content:content});return this;}, /**
	 * Error message about a method call made after destruction
	 * 
	 * @private
	 */__destroyError:function __destroyError(){throw new Error('This tooltip has been destroyed and cannot execute your method call.');}, /**
	 * Gather all information about dimensions and available space,
	 * called before every repositioning
	 * 
	 * @private
	 * @returns {object}
	 */__geometry:function __geometry(){var self=this,$target=self._$origin,originIsArea=self._$origin.is('area'); // if this._$origin is a map area, the target we'll need
// the dimensions of is actually the image using the map,
// not the area itself
if(originIsArea){var mapName=self._$origin.parent().attr('name');$target = $('img[usemap="#' + mapName + '"]');}var bcr=$target[0].getBoundingClientRect(),$document=$(env.window.document),$window=$(env.window),$parent=$target, // some useful properties of important elements
geo={ // available space for the tooltip, see down below
available:{document:null,window:null},document:{size:{height:$document.height(),width:$document.width()}},window:{scroll:{ // the second ones are for IE compatibility
left:env.window.scrollX || env.window.document.documentElement.scrollLeft,top:env.window.scrollY || env.window.document.documentElement.scrollTop},size:{height:$window.height(),width:$window.width()}},origin:{ // the origin has a fixed lineage if itself or one of its
// ancestors has a fixed position
fixedLineage:false, // relative to the document
offset:{},size:{height:bcr.bottom - bcr.top,width:bcr.right - bcr.left},usemapImage:originIsArea?$target[0]:null, // relative to the window
windowOffset:{bottom:bcr.bottom,left:bcr.left,right:bcr.right,top:bcr.top}}},geoFixed=false; // if the element is a map area, some properties may need
// to be recalculated
if(originIsArea){var shape=self._$origin.attr('shape'),coords=self._$origin.attr('coords');if(coords){coords = coords.split(',');$.map(coords,function(val,i){coords[i] = parseInt(val);});} // if the image itself is the area, nothing more to do
if(shape != 'default'){switch(shape){case 'circle':var circleCenterLeft=coords[0],circleCenterTop=coords[1],circleRadius=coords[2],areaTopOffset=circleCenterTop - circleRadius,areaLeftOffset=circleCenterLeft - circleRadius;geo.origin.size.height = circleRadius * 2;geo.origin.size.width = geo.origin.size.height;geo.origin.windowOffset.left += areaLeftOffset;geo.origin.windowOffset.top += areaTopOffset;break;case 'rect':var areaLeft=coords[0],areaTop=coords[1],areaRight=coords[2],areaBottom=coords[3];geo.origin.size.height = areaBottom - areaTop;geo.origin.size.width = areaRight - areaLeft;geo.origin.windowOffset.left += areaLeft;geo.origin.windowOffset.top += areaTop;break;case 'poly':var areaSmallestX=0,areaSmallestY=0,areaGreatestX=0,areaGreatestY=0,arrayAlternate='even';for(var i=0;i < coords.length;i++) {var areaNumber=coords[i];if(arrayAlternate == 'even'){if(areaNumber > areaGreatestX){areaGreatestX = areaNumber;if(i === 0){areaSmallestX = areaGreatestX;}}if(areaNumber < areaSmallestX){areaSmallestX = areaNumber;}arrayAlternate = 'odd';}else {if(areaNumber > areaGreatestY){areaGreatestY = areaNumber;if(i == 1){areaSmallestY = areaGreatestY;}}if(areaNumber < areaSmallestY){areaSmallestY = areaNumber;}arrayAlternate = 'even';}}geo.origin.size.height = areaGreatestY - areaSmallestY;geo.origin.size.width = areaGreatestX - areaSmallestX;geo.origin.windowOffset.left += areaSmallestX;geo.origin.windowOffset.top += areaSmallestY;break;}}} // user callback through an event
var edit=function edit(r){geo.origin.size.height = r.height,geo.origin.windowOffset.left = r.left,geo.origin.windowOffset.top = r.top,geo.origin.size.width = r.width;};self._trigger({type:'geometry',edit:edit,geometry:{height:geo.origin.size.height,left:geo.origin.windowOffset.left,top:geo.origin.windowOffset.top,width:geo.origin.size.width}}); // calculate the remaining properties with what we got
geo.origin.windowOffset.right = geo.origin.windowOffset.left + geo.origin.size.width;geo.origin.windowOffset.bottom = geo.origin.windowOffset.top + geo.origin.size.height;geo.origin.offset.left = geo.origin.windowOffset.left + geo.window.scroll.left;geo.origin.offset.top = geo.origin.windowOffset.top + geo.window.scroll.top;geo.origin.offset.bottom = geo.origin.offset.top + geo.origin.size.height;geo.origin.offset.right = geo.origin.offset.left + geo.origin.size.width; // the space that is available to display the tooltip relatively to the document
geo.available.document = {bottom:{height:geo.document.size.height - geo.origin.offset.bottom,width:geo.document.size.width},left:{height:geo.document.size.height,width:geo.origin.offset.left},right:{height:geo.document.size.height,width:geo.document.size.width - geo.origin.offset.right},top:{height:geo.origin.offset.top,width:geo.document.size.width}}; // the space that is available to display the tooltip relatively to the viewport
// (the resulting values may be negative if the origin overflows the viewport)
geo.available.window = {bottom:{ // the inner max is here to make sure the available height is no bigger
// than the viewport height (when the origin is off screen at the top).
// The outer max just makes sure that the height is not negative (when
// the origin overflows at the bottom).
height:Math.max(geo.window.size.height - Math.max(geo.origin.windowOffset.bottom,0),0),width:geo.window.size.width},left:{height:geo.window.size.height,width:Math.max(geo.origin.windowOffset.left,0)},right:{height:geo.window.size.height,width:Math.max(geo.window.size.width - Math.max(geo.origin.windowOffset.right,0),0)},top:{height:Math.max(geo.origin.windowOffset.top,0),width:geo.window.size.width}};while($parent[0].tagName.toLowerCase() != 'html') {if($parent.css('position') == 'fixed'){geo.origin.fixedLineage = true;break;}$parent = $parent.parent();}return geo;}, /**
	 * Some options may need to be formated before being used
	 * 
	 * @returns {self}
	 * @private
	 */__optionsFormat:function __optionsFormat(){if(typeof this.__options.animationDuration == 'number'){this.__options.animationDuration = [this.__options.animationDuration,this.__options.animationDuration];}if(typeof this.__options.delay == 'number'){this.__options.delay = [this.__options.delay,this.__options.delay];}if(typeof this.__options.delayTouch == 'number'){this.__options.delayTouch = [this.__options.delayTouch,this.__options.delayTouch];}if(typeof this.__options.theme == 'string'){this.__options.theme = [this.__options.theme];} // determine the future parent
if(this.__options.parent === null){this.__options.parent = $(env.window.document.body);}else if(typeof this.__options.parent == 'string'){this.__options.parent = $(this.__options.parent);}if(this.__options.trigger == 'hover'){this.__options.triggerOpen = {mouseenter:true,touchstart:true};this.__options.triggerClose = {mouseleave:true,originClick:true,touchleave:true};}else if(this.__options.trigger == 'click'){this.__options.triggerOpen = {click:true,tap:true};this.__options.triggerClose = {click:true,tap:true};} // for the plugins
this._trigger('options');return this;}, /**
	 * Schedules or cancels the garbage collector task
	 *
	 * @returns {self}
	 * @private
	 */__prepareGC:function __prepareGC(){var self=this; // in case the selfDestruction option has been changed by a method call
if(self.__options.selfDestruction){ // the GC task
self.__garbageCollector = setInterval(function(){var now=new Date().getTime(); // forget the old events
self.__touchEvents = $.grep(self.__touchEvents,function(event,i){ // 1 minute
return now - event.time > 60000;}); // auto-destruct if the origin is gone
if(!bodyContains(self._$origin)){self.close(function(){self.destroy();});}},20000);}else {clearInterval(self.__garbageCollector);}return self;}, /**
	 * Sets listeners on the origin if the open triggers require them.
	 * Unlike the listeners set at opening time, these ones
	 * remain even when the tooltip is closed. It has been made a
	 * separate method so it can be called when the triggers are
	 * changed in the options. Closing is handled in _open()
	 * because of the bindings that may be needed on the tooltip
	 * itself
	 *
	 * @returns {self}
	 * @private
	 */__prepareOrigin:function __prepareOrigin(){var self=this; // in case we're resetting the triggers
self._$origin.off('.' + self.__namespace + '-triggerOpen'); // if the device is touch capable, even if only mouse triggers
// are asked, we need to listen to touch events to know if the mouse
// events are actually emulated (so we can ignore them)
if(env.hasTouchCapability){self._$origin.on('touchstart.' + self.__namespace + '-triggerOpen ' + 'touchend.' + self.__namespace + '-triggerOpen ' + 'touchcancel.' + self.__namespace + '-triggerOpen',function(event){self._touchRecordEvent(event);});} // mouse click and touch tap work the same way
if(self.__options.triggerOpen.click || self.__options.triggerOpen.tap && env.hasTouchCapability){var eventNames='';if(self.__options.triggerOpen.click){eventNames += 'click.' + self.__namespace + '-triggerOpen ';}if(self.__options.triggerOpen.tap && env.hasTouchCapability){eventNames += 'touchend.' + self.__namespace + '-triggerOpen';}self._$origin.on(eventNames,function(event){if(self._touchIsMeaningfulEvent(event)){self._open(event);}});} // mouseenter and touch start work the same way
if(self.__options.triggerOpen.mouseenter || self.__options.triggerOpen.touchstart && env.hasTouchCapability){var eventNames='';if(self.__options.triggerOpen.mouseenter){eventNames += 'mouseenter.' + self.__namespace + '-triggerOpen ';}if(self.__options.triggerOpen.touchstart && env.hasTouchCapability){eventNames += 'touchstart.' + self.__namespace + '-triggerOpen';}self._$origin.on(eventNames,function(event){if(self._touchIsTouchEvent(event) || !self._touchIsEmulatedEvent(event)){self.__pointerIsOverOrigin = true;self._openShortly(event);}});} // info for the mouseleave/touchleave close triggers when they use a delay
if(self.__options.triggerClose.mouseleave || self.__options.triggerClose.touchleave && env.hasTouchCapability){var eventNames='';if(self.__options.triggerClose.mouseleave){eventNames += 'mouseleave.' + self.__namespace + '-triggerOpen ';}if(self.__options.triggerClose.touchleave && env.hasTouchCapability){eventNames += 'touchend.' + self.__namespace + '-triggerOpen touchcancel.' + self.__namespace + '-triggerOpen';}self._$origin.on(eventNames,function(event){if(self._touchIsMeaningfulEvent(event)){self.__pointerIsOverOrigin = false;}});}return self;}, /**
	 * Do the things that need to be done only once after the tooltip
	 * HTML element it has been created. It has been made a separate
	 * method so it can be called when options are changed. Remember
	 * that the tooltip may actually exist in the DOM before it is
	 * opened, and present after it has been closed: it's the display
	 * plugin that takes care of handling it.
	 * 
	 * @returns {self}
	 * @private
	 */__prepareTooltip:function __prepareTooltip(){var self=this,p=self.__options.interactive?'auto':''; // this will be useful to know quickly if the tooltip is in
// the DOM or not 
self._$tooltip.attr('id',self.__namespace).css({ // pointer events
'pointer-events':p,zIndex:self.__options.zIndex}); // themes
// remove the old ones and add the new ones
$.each(self.__previousThemes,function(i,theme){self._$tooltip.removeClass(theme);});$.each(self.__options.theme,function(i,theme){self._$tooltip.addClass(theme);});self.__previousThemes = $.merge([],self.__options.theme);return self;}, /**
	 * Handles the scroll on any of the parents of the origin (when the
	 * tooltip is open)
	 *
	 * @param {object} event
	 * @returns {self}
	 * @private
	 */__scrollHandler:function __scrollHandler(event){var self=this;if(self.__options.triggerClose.scroll){self._close(event);}else { // if the origin or tooltip have been removed: do nothing, the tracker will
// take care of it later
if(bodyContains(self._$origin) && bodyContains(self._$tooltip)){var geo=null; // if the scroll happened on the window
if(event.target === env.window.document){ // if the origin has a fixed lineage, window scroll will have no
// effect on its position nor on the position of the tooltip
if(!self.__Geometry.origin.fixedLineage){ // we don't need to do anything unless repositionOnScroll is true
// because the tooltip will already have moved with the window
// (and of course with the origin)
if(self.__options.repositionOnScroll){self.reposition(event);}}} // if the scroll happened on another parent of the tooltip, it means
// that it's in a scrollable area and now needs to have its position
// adjusted or recomputed, depending ont the repositionOnScroll
// option. Also, if the origin is partly hidden due to a parent that
// hides its overflow, we'll just hide (not close) the tooltip.
else {geo = self.__geometry();var overflows=false; // a fixed position origin is not affected by the overflow hiding
// of a parent
if(self._$origin.css('position') != 'fixed'){self.__$originParents.each(function(i,el){var $el=$(el),overflowX=$el.css('overflow-x'),overflowY=$el.css('overflow-y');if(overflowX != 'visible' || overflowY != 'visible'){var bcr=el.getBoundingClientRect();if(overflowX != 'visible'){if(geo.origin.windowOffset.left < bcr.left || geo.origin.windowOffset.right > bcr.right){overflows = true;return false;}}if(overflowY != 'visible'){if(geo.origin.windowOffset.top < bcr.top || geo.origin.windowOffset.bottom > bcr.bottom){overflows = true;return false;}}} // no need to go further if fixed, for the same reason as above
if($el.css('position') == 'fixed'){return false;}});}if(overflows){self._$tooltip.css('visibility','hidden');}else {self._$tooltip.css('visibility','visible'); // reposition
if(self.__options.repositionOnScroll){self.reposition(event);} // or just adjust offset
else { // we have to use offset and not windowOffset because this way,
// only the scroll distance of the scrollable areas are taken into
// account (the scrolltop value of the main window must be
// ignored since the tooltip already moves with it)
var offsetLeft=geo.origin.offset.left - self.__Geometry.origin.offset.left,offsetTop=geo.origin.offset.top - self.__Geometry.origin.offset.top; // add the offset to the position initially computed by the display plugin
self._$tooltip.css({left:self.__lastPosition.coord.left + offsetLeft,top:self.__lastPosition.coord.top + offsetTop});}}}self._trigger({type:'scroll',event:event,geo:geo});}}return self;}, /**
	 * Changes the state of the tooltip
	 *
	 * @param {string} state
	 * @returns {self}
	 * @private
	 */__stateSet:function __stateSet(state){this.__state = state;this._trigger({type:'state',state:state});return this;}, /**
	 * Clear appearance timeouts
	 *
	 * @returns {self}
	 * @private
	 */__timeoutsClear:function __timeoutsClear(){ // there is only one possible open timeout: the delayed opening
// when the mouseenter/touchstart open triggers are used
clearTimeout(this.__timeouts.open);this.__timeouts.open = null; // ... but several close timeouts: the delayed closing when the
// mouseleave close trigger is used and the timer option
$.each(this.__timeouts.close,function(i,timeout){clearTimeout(timeout);});this.__timeouts.close = [];return this;}, /**
	 * Start the tracker that will make checks at regular intervals
	 * 
	 * @returns {self}
	 * @private
	 */__trackerStart:function __trackerStart(){var self=this,$content=self._$tooltip.find('.tooltipster-content'); // get the initial content size
if(self.__options.trackTooltip){self.__contentBcr = $content[0].getBoundingClientRect();}self.__tracker = setInterval(function(){ // if the origin or tooltip elements have been removed.
// Note: we could destroy the instance now if the origin has
// been removed but we'll leave that task to our garbage collector
if(!bodyContains(self._$origin) || !bodyContains(self._$tooltip)){self._close();} // if everything is alright
else { // compare the former and current positions of the origin to reposition
// the tooltip if need be
if(self.__options.trackOrigin){var g=self.__geometry(),identical=false; // compare size first (a change requires repositioning too)
if(areEqual(g.origin.size,self.__Geometry.origin.size)){ // for elements that have a fixed lineage (see __geometry()), we track the
// top and left properties (relative to window)
if(self.__Geometry.origin.fixedLineage){if(areEqual(g.origin.windowOffset,self.__Geometry.origin.windowOffset)){identical = true;}} // otherwise, track total offset (relative to document)
else {if(areEqual(g.origin.offset,self.__Geometry.origin.offset)){identical = true;}}}if(!identical){ // close the tooltip when using the mouseleave close trigger
// (see https://github.com/iamceege/tooltipster/pull/253)
if(self.__options.triggerClose.mouseleave){self._close();}else {self.reposition();}}}if(self.__options.trackTooltip){var currentBcr=$content[0].getBoundingClientRect();if(currentBcr.height !== self.__contentBcr.height || currentBcr.width !== self.__contentBcr.width){self.reposition();self.__contentBcr = currentBcr;}}}},self.__options.trackerInterval);return self;}, /**
	 * Closes the tooltip (after the closing delay)
	 * 
	 * @param event
	 * @param callback
	 * @param force Set to true to override a potential refusal of the user's function
	 * @returns {self}
	 * @protected
	 */_close:function _close(event,callback,force){var self=this,ok=true;self._trigger({type:'close',event:event,stop:function stop(){ok = false;}}); // a destroying tooltip (force == true) may not refuse to close
if(ok || force){ // save the method custom callback and cancel any open method custom callbacks
if(callback)self.__callbacks.close.push(callback);self.__callbacks.open = []; // clear open/close timeouts
self.__timeoutsClear();var finishCallbacks=function finishCallbacks(){ // trigger any close method custom callbacks and reset them
$.each(self.__callbacks.close,function(i,c){c.call(self,self,{event:event,origin:self._$origin[0]});});self.__callbacks.close = [];};if(self.__state != 'closed'){var necessary=true,d=new Date(),now=d.getTime(),newClosingTime=now + self.__options.animationDuration[1]; // the tooltip may already already be disappearing, but if a new
// call to close() is made after the animationDuration was changed
// to 0 (for example), we ought to actually close it sooner than
// previously scheduled. In that case it should be noted that the
// browser will not adapt the animation duration to the new
// animationDuration that was set after the start of the closing
// animation.
// Note: the same thing could be considered at opening, but is not
// really useful since the tooltip is actually opened immediately
// upon a call to _open(). Since it would not make the opening
// animation finish sooner, its sole impact would be to trigger the
// state event and the open callbacks sooner than the actual end of
// the opening animation, which is not great.
if(self.__state == 'disappearing'){if(newClosingTime > self.__closingTime // in case closing is actually overdue because the script
// execution was suspended. See #679
 && self.__options.animationDuration[1] > 0){necessary = false;}}if(necessary){self.__closingTime = newClosingTime;if(self.__state != 'disappearing'){self.__stateSet('disappearing');}var finish=function finish(){ // stop the tracker
clearInterval(self.__tracker); // a "beforeClose" option has been asked several times but would
// probably useless since the content element is still accessible
// via ::content(), and because people can always use listeners
// inside their content to track what's going on. For the sake of
// simplicity, this has been denied. Bur for the rare people who
// really need the option (for old browsers or for the case where
// detaching the content is actually destructive, for file or
// password inputs for example), this event will do the work.
self._trigger({type:'closing',event:event}); // unbind listeners which are no longer needed
self._$tooltip.off('.' + self.__namespace + '-triggerClose').removeClass('tooltipster-dying'); // orientationchange, scroll and resize listeners
$(env.window).off('.' + self.__namespace + '-triggerClose'); // scroll listeners
self.__$originParents.each(function(i,el){$(el).off('scroll.' + self.__namespace + '-triggerClose');}); // clear the array to prevent memory leaks
self.__$originParents = null;$(env.window.document.body).off('.' + self.__namespace + '-triggerClose');self._$origin.off('.' + self.__namespace + '-triggerClose');self._off('dismissable'); // a plugin that would like to remove the tooltip from the
// DOM when closed should bind on this
self.__stateSet('closed'); // trigger event
self._trigger({type:'after',event:event}); // call our constructor custom callback function
if(self.__options.functionAfter){self.__options.functionAfter.call(self,self,{event:event,origin:self._$origin[0]});} // call our method custom callbacks functions
finishCallbacks();};if(env.hasTransitions){self._$tooltip.css({'-moz-animation-duration':self.__options.animationDuration[1] + 'ms','-ms-animation-duration':self.__options.animationDuration[1] + 'ms','-o-animation-duration':self.__options.animationDuration[1] + 'ms','-webkit-animation-duration':self.__options.animationDuration[1] + 'ms','animation-duration':self.__options.animationDuration[1] + 'ms','transition-duration':self.__options.animationDuration[1] + 'ms'});self._$tooltip // clear both potential open and close tasks
.clearQueue().removeClass('tooltipster-show') // for transitions only
.addClass('tooltipster-dying');if(self.__options.animationDuration[1] > 0){self._$tooltip.delay(self.__options.animationDuration[1]);}self._$tooltip.queue(finish);}else {self._$tooltip.stop().fadeOut(self.__options.animationDuration[1],finish);}}} // if the tooltip is already closed, we still need to trigger
// the method custom callbacks
else {finishCallbacks();}}return self;}, /**
	 * For internal use by plugins, if needed
	 * 
	 * @returns {self}
	 * @protected
	 */_off:function _off(){this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments));return this;}, /**
	 * For internal use by plugins, if needed
	 *
	 * @returns {self}
	 * @protected
	 */_on:function _on(){this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments));return this;}, /**
	 * For internal use by plugins, if needed
	 *
	 * @returns {self}
	 * @protected
	 */_one:function _one(){this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments));return this;}, /**
	 * Opens the tooltip right away.
	 *
	 * @param event
	 * @param callback Will be called when the opening animation is over
	 * @returns {self}
	 * @protected
	 */_open:function _open(event,callback){var self=this; // if the destruction process has not begun and if this was not
// triggered by an unwanted emulated click event
if(!self.__destroying){ // check that the origin is still in the DOM
if(bodyContains(self._$origin) // if the tooltip is enabled
 && self.__enabled){var ok=true; // if the tooltip is not open yet, we need to call functionBefore.
// otherwise we can jst go on
if(self.__state == 'closed'){ // trigger an event. The event.stop function allows the callback
// to prevent the opening of the tooltip
self._trigger({type:'before',event:event,stop:function stop(){ok = false;}});if(ok && self.__options.functionBefore){ // call our custom function before continuing
ok = self.__options.functionBefore.call(self,self,{event:event,origin:self._$origin[0]});}}if(ok !== false){ // if there is some content
if(self.__Content !== null){ // save the method callback and cancel close method callbacks
if(callback){self.__callbacks.open.push(callback);}self.__callbacks.close = []; // get rid of any appearance timeouts
self.__timeoutsClear();var extraTime,finish=function finish(){if(self.__state != 'stable'){self.__stateSet('stable');} // trigger any open method custom callbacks and reset them
$.each(self.__callbacks.open,function(i,c){c.call(self,self,{origin:self._$origin[0],tooltip:self._$tooltip[0]});});self.__callbacks.open = [];}; // if the tooltip is already open
if(self.__state !== 'closed'){ // the timer (if any) will start (or restart) right now
extraTime = 0; // if it was disappearing, cancel that
if(self.__state === 'disappearing'){self.__stateSet('appearing');if(env.hasTransitions){self._$tooltip.clearQueue().removeClass('tooltipster-dying').addClass('tooltipster-show');if(self.__options.animationDuration[0] > 0){self._$tooltip.delay(self.__options.animationDuration[0]);}self._$tooltip.queue(finish);}else { // in case the tooltip was currently fading out, bring it back
// to life
self._$tooltip.stop().fadeIn(finish);}} // if the tooltip is already open, we still need to trigger the method
// custom callback
else if(self.__state == 'stable'){finish();}} // if the tooltip isn't already open, open it
else { // a plugin must bind on this and store the tooltip in this._$tooltip
self.__stateSet('appearing'); // the timer (if any) will start when the tooltip has fully appeared
// after its transition
extraTime = self.__options.animationDuration[0]; // insert the content inside the tooltip
self.__contentInsert(); // reposition the tooltip and attach to the DOM
self.reposition(event,true); // animate in the tooltip. If the display plugin wants no css
// animations, it may override the animation option with a
// dummy value that will produce no effect
if(env.hasTransitions){ // note: there seems to be an issue with start animations which
// are randomly not played on fast devices in both Chrome and FF,
// couldn't find a way to solve it yet. It seems that applying
// the classes before appending to the DOM helps a little, but
// it messes up some CSS transitions. The issue almost never
// happens when delay[0]==0 though
self._$tooltip.addClass('tooltipster-' + self.__options.animation).addClass('tooltipster-initial').css({'-moz-animation-duration':self.__options.animationDuration[0] + 'ms','-ms-animation-duration':self.__options.animationDuration[0] + 'ms','-o-animation-duration':self.__options.animationDuration[0] + 'ms','-webkit-animation-duration':self.__options.animationDuration[0] + 'ms','animation-duration':self.__options.animationDuration[0] + 'ms','transition-duration':self.__options.animationDuration[0] + 'ms'});setTimeout(function(){ // a quick hover may have already triggered a mouseleave
if(self.__state != 'closed'){self._$tooltip.addClass('tooltipster-show').removeClass('tooltipster-initial');if(self.__options.animationDuration[0] > 0){self._$tooltip.delay(self.__options.animationDuration[0]);}self._$tooltip.queue(finish);}},0);}else { // old browsers will have to live with this
self._$tooltip.css('display','none').fadeIn(self.__options.animationDuration[0],finish);} // checks if the origin is removed while the tooltip is open
self.__trackerStart(); // NOTE: the listeners below have a '-triggerClose' namespace
// because we'll remove them when the tooltip closes (unlike
// the '-triggerOpen' listeners). So some of them are actually
// not about close triggers, rather about positioning.
$(env.window) // reposition on resize
.on('resize.' + self.__namespace + '-triggerClose',function(e){var $ae=$(document.activeElement); // reposition only if the resize event was not triggered upon the opening
// of a virtual keyboard due to an input field being focused within the tooltip
// (otherwise the repositioning would lose the focus)
if(!$ae.is('input') && !$ae.is('textarea') || !$.contains(self._$tooltip[0],$ae[0])){self.reposition(e);}}) // same as below for parents
.on('scroll.' + self.__namespace + '-triggerClose',function(e){self.__scrollHandler(e);});self.__$originParents = self._$origin.parents(); // scrolling may require the tooltip to be moved or even
// repositioned in some cases
self.__$originParents.each(function(i,parent){$(parent).on('scroll.' + self.__namespace + '-triggerClose',function(e){self.__scrollHandler(e);});});if(self.__options.triggerClose.mouseleave || self.__options.triggerClose.touchleave && env.hasTouchCapability){ // we use an event to allow users/plugins to control when the mouseleave/touchleave
// close triggers will come to action. It allows to have more triggering elements
// than just the origin and the tooltip for example, or to cancel/delay the closing,
// or to make the tooltip interactive even if it wasn't when it was open, etc.
self._on('dismissable',function(event){if(event.dismissable){if(event.delay){timeout = setTimeout(function(){ // event.event may be undefined
self._close(event.event);},event.delay);self.__timeouts.close.push(timeout);}else {self._close(event);}}else {clearTimeout(timeout);}}); // now set the listeners that will trigger 'dismissable' events
var $elements=self._$origin,eventNamesIn='',eventNamesOut='',timeout=null; // if we have to allow interaction, bind on the tooltip too
if(self.__options.interactive){$elements = $elements.add(self._$tooltip);}if(self.__options.triggerClose.mouseleave){eventNamesIn += 'mouseenter.' + self.__namespace + '-triggerClose ';eventNamesOut += 'mouseleave.' + self.__namespace + '-triggerClose ';}if(self.__options.triggerClose.touchleave && env.hasTouchCapability){eventNamesIn += 'touchstart.' + self.__namespace + '-triggerClose';eventNamesOut += 'touchend.' + self.__namespace + '-triggerClose touchcancel.' + self.__namespace + '-triggerClose';}$elements // close after some time spent outside of the elements
.on(eventNamesOut,function(event){ // it's ok if the touch gesture ended up to be a swipe,
// it's still a "touch leave" situation
if(self._touchIsTouchEvent(event) || !self._touchIsEmulatedEvent(event)){var delay=event.type == 'mouseleave'?self.__options.delay:self.__options.delayTouch;self._trigger({delay:delay[1],dismissable:true,event:event,type:'dismissable'});}}) // suspend the mouseleave timeout when the pointer comes back
// over the elements
.on(eventNamesIn,function(event){ // it's also ok if the touch event is a swipe gesture
if(self._touchIsTouchEvent(event) || !self._touchIsEmulatedEvent(event)){self._trigger({dismissable:false,event:event,type:'dismissable'});}});} // close the tooltip when the origin gets a mouse click (common behavior of
// native tooltips)
if(self.__options.triggerClose.originClick){self._$origin.on('click.' + self.__namespace + '-triggerClose',function(event){ // we could actually let a tap trigger this but this feature just
// does not make sense on touch devices
if(!self._touchIsTouchEvent(event) && !self._touchIsEmulatedEvent(event)){self._close(event);}});} // set the same bindings for click and touch on the body to close the tooltip
if(self.__options.triggerClose.click || self.__options.triggerClose.tap && env.hasTouchCapability){ // don't set right away since the click/tap event which triggered this method
// (if it was a click/tap) is going to bubble up to the body, we don't want it
// to close the tooltip immediately after it opened
setTimeout(function(){if(self.__state != 'closed'){var eventNames='',$body=$(env.window.document.body);if(self.__options.triggerClose.click){eventNames += 'click.' + self.__namespace + '-triggerClose ';}if(self.__options.triggerClose.tap && env.hasTouchCapability){eventNames += 'touchend.' + self.__namespace + '-triggerClose';}$body.on(eventNames,function(event){if(self._touchIsMeaningfulEvent(event)){self._touchRecordEvent(event);if(!self.__options.interactive || !$.contains(self._$tooltip[0],event.target)){self._close(event);}}}); // needed to detect and ignore swiping
if(self.__options.triggerClose.tap && env.hasTouchCapability){$body.on('touchstart.' + self.__namespace + '-triggerClose',function(event){self._touchRecordEvent(event);});}}},0);}self._trigger('ready'); // call our custom callback
if(self.__options.functionReady){self.__options.functionReady.call(self,self,{origin:self._$origin[0],tooltip:self._$tooltip[0]});}} // if we have a timer set, let the countdown begin
if(self.__options.timer > 0){var timeout=setTimeout(function(){self._close();},self.__options.timer + extraTime);self.__timeouts.close.push(timeout);}}}}}return self;}, /**
	 * When using the mouseenter/touchstart open triggers, this function will
	 * schedule the opening of the tooltip after the delay, if there is one
	 *
	 * @param event
	 * @returns {self}
	 * @protected
 	 */_openShortly:function _openShortly(event){var self=this,ok=true;if(self.__state != 'stable' && self.__state != 'appearing'){ // if a timeout is not already running
if(!self.__timeouts.open){self._trigger({type:'start',event:event,stop:function stop(){ok = false;}});if(ok){var delay=event.type.indexOf('touch') == 0?self.__options.delayTouch:self.__options.delay;if(delay[0]){self.__timeouts.open = setTimeout(function(){self.__timeouts.open = null; // open only if the pointer (mouse or touch) is still over the origin.
// The check on the "meaningful event" can only be made here, after some
// time has passed (to know if the touch was a swipe or not)
if(self.__pointerIsOverOrigin && self._touchIsMeaningfulEvent(event)){ // signal that we go on
self._trigger('startend');self._open(event);}else { // signal that we cancel
self._trigger('startcancel');}},delay[0]);}else { // signal that we go on
self._trigger('startend');self._open(event);}}}}return self;}, /**
	 * Meant for plugins to get their options
	 * 
	 * @param {string} pluginName The name of the plugin that asks for its options
	 * @param {object} defaultOptions The default options of the plugin
	 * @returns {object} The options
	 * @protected
	 */_optionsExtract:function _optionsExtract(pluginName,defaultOptions){var self=this,options=$.extend(true,{},defaultOptions); // if the plugin options were isolated in a property named after the
// plugin, use them (prevents conflicts with other plugins)
var pluginOptions=self.__options[pluginName]; // if not, try to get them as regular options
if(!pluginOptions){pluginOptions = {};$.each(defaultOptions,function(optionName,value){var o=self.__options[optionName];if(o !== undefined){pluginOptions[optionName] = o;}});} // let's merge the default options and the ones that were provided. We'd want
// to do a deep copy but not let jQuery merge arrays, so we'll do a shallow
// extend on two levels, that will be enough if options are not more than 1
// level deep
$.each(options,function(optionName,value){if(pluginOptions[optionName] !== undefined){if(typeof value == 'object' && !(value instanceof Array) && value != null && typeof pluginOptions[optionName] == 'object' && !(pluginOptions[optionName] instanceof Array) && pluginOptions[optionName] != null){$.extend(options[optionName],pluginOptions[optionName]);}else {options[optionName] = pluginOptions[optionName];}}});return options;}, /**
	 * Used at instantiation of the plugin, or afterwards by plugins that activate themselves
	 * on existing instances
	 * 
	 * @param {object} pluginName
	 * @returns {self}
	 * @protected
	 */_plug:function _plug(pluginName){var plugin=$.tooltipster._plugin(pluginName);if(plugin){ // if there is a constructor for instances
if(plugin.instance){ // proxy non-private methods on the instance to allow new instance methods
$.tooltipster.__bridge(plugin.instance,this,plugin.name);}}else {throw new Error('The "' + pluginName + '" plugin is not defined');}return this;}, /**
	 * This will return true if the event is a mouse event which was
	 * emulated by the browser after a touch event. This allows us to
	 * really dissociate mouse and touch triggers.
	 * 
	 * There is a margin of error if a real mouse event is fired right
	 * after (within the delay shown below) a touch event on the same
	 * element, but hopefully it should not happen often.
	 * 
	 * @returns {boolean}
	 * @protected
	 */_touchIsEmulatedEvent:function _touchIsEmulatedEvent(event){var isEmulated=false,now=new Date().getTime();for(var i=this.__touchEvents.length - 1;i >= 0;i--) {var e=this.__touchEvents[i]; // delay, in milliseconds. It's supposed to be 300ms in
// most browsers (350ms on iOS) to allow a double tap but
// can be less (check out FastClick for more info)
if(now - e.time < 500){if(e.target === event.target){isEmulated = true;}}else {break;}}return isEmulated;}, /**
	 * Returns false if the event was an emulated mouse event or
	 * a touch event involved in a swipe gesture.
	 * 
	 * @param {object} event
	 * @returns {boolean}
	 * @protected
	 */_touchIsMeaningfulEvent:function _touchIsMeaningfulEvent(event){return this._touchIsTouchEvent(event) && !this._touchSwiped(event.target) || !this._touchIsTouchEvent(event) && !this._touchIsEmulatedEvent(event);}, /**
	 * Checks if an event is a touch event
	 * 
	 * @param {object} event
	 * @returns {boolean}
	 * @protected
	 */_touchIsTouchEvent:function _touchIsTouchEvent(event){return event.type.indexOf('touch') == 0;}, /**
	 * Store touch events for a while to detect swiping and emulated mouse events
	 * 
	 * @param {object} event
	 * @returns {self}
	 * @protected
	 */_touchRecordEvent:function _touchRecordEvent(event){if(this._touchIsTouchEvent(event)){event.time = new Date().getTime();this.__touchEvents.push(event);}return this;}, /**
	 * Returns true if a swipe happened after the last touchstart event fired on
	 * event.target.
	 * 
	 * We need to differentiate a swipe from a tap before we let the event open
	 * or close the tooltip. A swipe is when a touchmove (scroll) event happens
	 * on the body between the touchstart and the touchend events of an element.
	 * 
	 * @param {object} target The HTML element that may have triggered the swipe
	 * @returns {boolean}
	 * @protected
	 */_touchSwiped:function _touchSwiped(target){var swiped=false;for(var i=this.__touchEvents.length - 1;i >= 0;i--) {var e=this.__touchEvents[i];if(e.type == 'touchmove'){swiped = true;break;}else if(e.type == 'touchstart' && target === e.target){break;}}return swiped;}, /**
	 * Triggers an event on the instance emitters
	 * 
	 * @returns {self}
	 * @protected
	 */_trigger:function _trigger(){var args=Array.prototype.slice.apply(arguments);if(typeof args[0] == 'string'){args[0] = {type:args[0]};} // add properties to the event
args[0].instance = this;args[0].origin = this._$origin?this._$origin[0]:null;args[0].tooltip = this._$tooltip?this._$tooltip[0]:null; // note: the order of emitters matters
this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,args);$.tooltipster._trigger.apply($.tooltipster,args);this.__$emitterPublic.trigger.apply(this.__$emitterPublic,args);return this;}, /**
	 * Deactivate a plugin on this instance
	 * 
	 * @returns {self}
	 * @protected
	 */_unplug:function _unplug(pluginName){var self=this; // if the plugin has been activated on this instance
if(self[pluginName]){var plugin=$.tooltipster._plugin(pluginName); // if there is a constructor for instances
if(plugin.instance){ // unbridge
$.each(plugin.instance,function(methodName,fn){ // if the method exists (privates methods do not) and comes indeed from
// this plugin (may be missing or come from a conflicting plugin).
if(self[methodName] && self[methodName].bridged === self[pluginName]){delete self[methodName];}});} // destroy the plugin
if(self[pluginName].__destroy){self[pluginName].__destroy();} // remove the reference to the plugin instance
delete self[pluginName];}return self;}, /**
	 * @see self::_close
	 * @returns {self}
	 * @public
	 */close:function close(callback){if(!this.__destroyed){this._close(null,callback);}else {this.__destroyError();}return this;}, /**
	 * Sets or gets the content of the tooltip
	 * 
	 * @returns {mixed|self}
	 * @public
	 */content:function content(_content){var self=this; // getter method
if(_content === undefined){return self.__Content;} // setter method
else {if(!self.__destroyed){ // change the content
self.__contentSet(_content);if(self.__Content !== null){ // update the tooltip if it is open
if(self.__state !== 'closed'){ // reset the content in the tooltip
self.__contentInsert(); // reposition and resize the tooltip
self.reposition(); // if we want to play a little animation showing the content changed
if(self.__options.updateAnimation){if(env.hasTransitions){ // keep the reference in the local scope
var animation=self.__options.updateAnimation;self._$tooltip.addClass('tooltipster-update-' + animation); // remove the class after a while. The actual duration of the
// update animation may be shorter, it's set in the CSS rules
setTimeout(function(){if(self.__state != 'closed'){self._$tooltip.removeClass('tooltipster-update-' + animation);}},1000);}else {self._$tooltip.fadeTo(200,0.5,function(){if(self.__state != 'closed'){self._$tooltip.fadeTo(200,1);}});}}}}else {self._close();}}else {self.__destroyError();}return self;}}, /**
	 * Destroys the tooltip
	 * 
	 * @returns {self}
	 * @public
	 */destroy:function destroy(){var self=this;if(!self.__destroyed){if(self.__state != 'closed'){ // no closing delay
self.option('animationDuration',0) // force closing
._close(null,null,true);}else { // there might be an open timeout still running
self.__timeoutsClear();} // send event
self._trigger('destroy');self.__destroyed = true;self._$origin.removeData(self.__namespace) // remove the open trigger listeners
.off('.' + self.__namespace + '-triggerOpen'); // remove the touch listener
$(env.window.document.body).off('.' + self.__namespace + '-triggerOpen');var ns=self._$origin.data('tooltipster-ns'); // if the origin has been removed from DOM, its data may
// well have been destroyed in the process and there would
// be nothing to clean up or restore
if(ns){ // if there are no more tooltips on this element
if(ns.length === 1){ // optional restoration of a title attribute
var title=null;if(self.__options.restoration == 'previous'){title = self._$origin.data('tooltipster-initialTitle');}else if(self.__options.restoration == 'current'){ // old school technique to stringify when outerHTML is not supported
title = typeof self.__Content == 'string'?self.__Content:$('<div></div>').append(self.__Content).html();}if(title){self._$origin.attr('title',title);} // final cleaning
self._$origin.removeClass('tooltipstered');self._$origin.removeData('tooltipster-ns').removeData('tooltipster-initialTitle');}else { // remove the instance namespace from the list of namespaces of
// tooltips present on the element
ns = $.grep(ns,function(el,i){return el !== self.__namespace;});self._$origin.data('tooltipster-ns',ns);}} // last event
self._trigger('destroyed'); // unbind private and public event listeners
self._off();self.off(); // remove external references, just in case
self.__Content = null;self.__$emitterPrivate = null;self.__$emitterPublic = null;self.__options.parent = null;self._$origin = null;self._$tooltip = null; // make sure the object is no longer referenced in there to prevent
// memory leaks
$.tooltipster.__instancesLatestArr = $.grep($.tooltipster.__instancesLatestArr,function(el,i){return self !== el;});clearInterval(self.__garbageCollector);}else {self.__destroyError();} // we return the scope rather than true so that the call to
// .tooltipster('destroy') actually returns the matched elements
// and applies to all of them
return self;}, /**
	 * Disables the tooltip
	 * 
	 * @returns {self}
	 * @public
	 */disable:function disable(){if(!this.__destroyed){ // close first, in case the tooltip would not disappear on
// its own (no close trigger)
this._close();this.__enabled = false;return this;}else {this.__destroyError();}return this;}, /**
	 * Returns the HTML element of the origin
	 *
	 * @returns {self}
	 * @public
	 */elementOrigin:function elementOrigin(){if(!this.__destroyed){return this._$origin[0];}else {this.__destroyError();}}, /**
	 * Returns the HTML element of the tooltip
	 *
	 * @returns {self}
	 * @public
	 */elementTooltip:function elementTooltip(){return this._$tooltip?this._$tooltip[0]:null;}, /**
	 * Enables the tooltip
	 * 
	 * @returns {self}
	 * @public
	 */enable:function enable(){this.__enabled = true;return this;}, /**
	 * Alias, deprecated in 4.0.0
	 * 
	 * @param {function} callback
	 * @returns {self}
	 * @public
	 */hide:function hide(callback){return this.close(callback);}, /**
	 * Returns the instance
	 * 
	 * @returns {self}
	 * @public
	 */instance:function instance(){return this;}, /**
	 * For public use only, not to be used by plugins (use ::_off() instead)
	 * 
	 * @returns {self}
	 * @public
	 */off:function off(){if(!this.__destroyed){this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments));}return this;}, /**
	 * For public use only, not to be used by plugins (use ::_on() instead)
	 *
	 * @returns {self}
	 * @public
	 */on:function on(){if(!this.__destroyed){this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments));}else {this.__destroyError();}return this;}, /**
	 * For public use only, not to be used by plugins
	 *
	 * @returns {self}
	 * @public
	 */one:function one(){if(!this.__destroyed){this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments));}else {this.__destroyError();}return this;}, /**
	 * @see self::_open
	 * @returns {self}
	 * @public
	 */open:function open(callback){if(!this.__destroyed){this._open(null,callback);}else {this.__destroyError();}return this;}, /**
	 * Get or set options. For internal use and advanced users only.
	 * 
	 * @param {string} o Option name
	 * @param {mixed} val optional A new value for the option
	 * @return {mixed|self} If val is omitted, the value of the option
	 * is returned, otherwise the instance itself is returned
	 * @public
	 */option:function option(o,val){ // getter
if(val === undefined){return this.__options[o];} // setter
else {if(!this.__destroyed){ // change value
this.__options[o] = val; // format
this.__optionsFormat(); // re-prepare the triggers if needed
if($.inArray(o,['trigger','triggerClose','triggerOpen']) >= 0){this.__prepareOrigin();}if(o === 'selfDestruction'){this.__prepareGC();}}else {this.__destroyError();}return this;}}, /**
	 * This method is in charge of setting the position and size properties of the tooltip.
	 * All the hard work is delegated to the display plugin.
	 * Note: The tooltip may be detached from the DOM at the moment the method is called 
	 * but must be attached by the end of the method call.
	 * 
	 * @param {object} event For internal use only. Defined if an event such as
	 * window resizing triggered the repositioning
	 * @param {boolean} tooltipIsDetached For internal use only. Set this to true if you
	 * know that the tooltip not being in the DOM is not an issue (typically when the
	 * tooltip element has just been created but has not been added to the DOM yet).
	 * @returns {self}
	 * @public
	 */reposition:function reposition(event,tooltipIsDetached){var self=this;if(!self.__destroyed){ // if the tooltip is still open and the origin is still in the DOM
if(self.__state != 'closed' && bodyContains(self._$origin)){ // if the tooltip has not been removed from DOM manually (or if it
// has been detached on purpose)
if(tooltipIsDetached || bodyContains(self._$tooltip)){if(!tooltipIsDetached){ // detach in case the tooltip overflows the window and adds
// scrollbars to it, so __geometry can be accurate
self._$tooltip.detach();} // refresh the geometry object before passing it as a helper
self.__Geometry = self.__geometry(); // let a plugin fo the rest
self._trigger({type:'reposition',event:event,helper:{geo:self.__Geometry}});}}}else {self.__destroyError();}return self;}, /**
	 * Alias, deprecated in 4.0.0
	 *
	 * @param callback
	 * @returns {self}
	 * @public
	 */show:function show(callback){return this.open(callback);}, /**
	 * Returns some properties about the instance
	 * 
	 * @returns {object}
	 * @public
	 */status:function status(){return {destroyed:this.__destroyed,enabled:this.__enabled,open:this.__state !== 'closed',state:this.__state};}, /**
	 * For public use only, not to be used by plugins
	 *
	 * @returns {self}
	 * @public
	 */triggerHandler:function triggerHandler(){if(!this.__destroyed){this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments));}else {this.__destroyError();}return this;}};$.fn.tooltipster = function(){ // for using in closures
var args=Array.prototype.slice.apply(arguments), // common mistake: an HTML element can't be in several tooltips at the same time
contentCloningWarning='You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.'; // this happens with $(sel).tooltipster(...) when $(sel) does not match anything
if(this.length === 0){ // still chainable
return this;} // this happens when calling $(sel).tooltipster('methodName or options')
// where $(sel) matches one or more elements
else { // method calls
if(typeof args[0] === 'string'){var v='#*$~&';this.each(function(){ // retrieve the namepaces of the tooltip(s) that exist on that element.
// We will interact with the first tooltip only.
var ns=$(this).data('tooltipster-ns'), // self represents the instance of the first tooltipster plugin
// associated to the current HTML object of the loop
self=ns?$(this).data(ns[0]):null; // if the current element holds a tooltipster instance
if(self){if(typeof self[args[0]] === 'function'){if(this.length > 1 && args[0] == 'content' && (args[1] instanceof $ || typeof args[1] == 'object' && args[1] != null && args[1].tagName) && !self.__options.contentCloning && self.__options.debug){console.log(contentCloningWarning);} // note : args[1] and args[2] may not be defined
var resp=self[args[0]](args[1],args[2]);}else {throw new Error('Unknown method "' + args[0] + '"');} // if the function returned anything other than the instance
// itself (which implies chaining, except for the `instance` method)
if(resp !== self || args[0] === 'instance'){v = resp; // return false to stop .each iteration on the first element
// matched by the selector
return false;}}else {throw new Error('You called Tooltipster\'s "' + args[0] + '" method on an uninitialized element');}});return v !== '#*$~&'?v:this;} // first argument is undefined or an object: the tooltip is initializing
else { // reset the array of last initialized objects
$.tooltipster.__instancesLatestArr = []; // is there a defined value for the multiple option in the options object ?
var multipleIsSet=args[0] && args[0].multiple !== undefined, // if the multiple option is set to true, or if it's not defined but
// set to true in the defaults
multiple=multipleIsSet && args[0].multiple || !multipleIsSet && defaults.multiple, // same for content
contentIsSet=args[0] && args[0].content !== undefined,content=contentIsSet && args[0].content || !contentIsSet && defaults.content, // same for contentCloning
contentCloningIsSet=args[0] && args[0].contentCloning !== undefined,contentCloning=contentCloningIsSet && args[0].contentCloning || !contentCloningIsSet && defaults.contentCloning, // same for debug
debugIsSet=args[0] && args[0].debug !== undefined,debug=debugIsSet && args[0].debug || !debugIsSet && defaults.debug;if(this.length > 1 && (content instanceof $ || typeof content == 'object' && content != null && content.tagName) && !contentCloning && debug){console.log(contentCloningWarning);} // create a tooltipster instance for each element if it doesn't
// already have one or if the multiple option is set, and attach the
// object to it
this.each(function(){var go=false,$this=$(this),ns=$this.data('tooltipster-ns'),obj=null;if(!ns){go = true;}else if(multiple){go = true;}else if(debug){console.log('Tooltipster: one or more tooltips are already attached to the element below. Ignoring.');console.log(this);}if(go){obj = new $.Tooltipster(this,args[0]); // save the reference of the new instance
if(!ns)ns = [];ns.push(obj.__namespace);$this.data('tooltipster-ns',ns); // save the instance itself
$this.data(obj.__namespace,obj); // call our constructor custom function.
// we do this here and not in ::init() because we wanted
// the object to be saved in $this.data before triggering
// it
if(obj.__options.functionInit){obj.__options.functionInit.call(obj,obj,{origin:this});} // and now the event, for the plugins and core emitter
obj._trigger('init');}$.tooltipster.__instancesLatestArr.push(obj);});return this;}}}; // Utilities
/**
 * A class to check if a tooltip can fit in given dimensions
 * 
 * @param {object} $tooltip The jQuery wrapped tooltip element, or a clone of it
 */function Ruler($tooltip){ // list of instance variables
this.$container;this.constraints = null;this.__$tooltip;this.__init($tooltip);}Ruler.prototype = { /**
	 * Move the tooltip into an invisible div that does not allow overflow to make
	 * size tests. Note: the tooltip may or may not be attached to the DOM at the
	 * moment this method is called, it does not matter.
	 * 
	 * @param {object} $tooltip The object to test. May be just a clone of the
	 * actual tooltip.
	 * @private
	 */__init:function __init($tooltip){this.__$tooltip = $tooltip;this.__$tooltip.css({ // for some reason we have to specify top and left 0
left:0, // any overflow will be ignored while measuring
overflow:'hidden', // positions at (0,0) without the div using 100% of the available width
position:'absolute',top:0}) // overflow must be auto during the test. We re-set this in case
// it were modified by the user
.find('.tooltipster-content').css('overflow','auto');this.$container = $('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(env.window.document.body);}, /**
	 * Force the browser to redraw (re-render) the tooltip immediately. This is required
	 * when you changed some CSS properties and need to make something with it
	 * immediately, without waiting for the browser to redraw at the end of instructions.
	 *
	 * @see http://stackoverflow.com/questions/3485365/how-can-i-force-webkit-to-redraw-repaint-to-propagate-style-changes
	 * @private
	 */__forceRedraw:function __forceRedraw(){ // note: this would work but for Webkit only
//this.__$tooltip.close();
//this.__$tooltip[0].offsetHeight;
//this.__$tooltip.open();
// works in FF too
var $p=this.__$tooltip.parent();this.__$tooltip.detach();this.__$tooltip.appendTo($p);}, /**
	 * Set maximum dimensions for the tooltip. A call to ::measure afterwards
	 * will tell us if the content overflows or if it's ok
	 *
	 * @param {int} width
	 * @param {int} height
	 * @return {Ruler}
	 * @public
	 */constrain:function constrain(width,height){this.constraints = {width:width,height:height};this.__$tooltip.css({ // we disable display:flex, otherwise the content would overflow without
// creating horizontal scrolling (which we need to detect).
display:'block', // reset any previous height
height:'', // we'll check if horizontal scrolling occurs
overflow:'auto', // we'll set the width and see what height is generated and if there
// is horizontal overflow
width:width});return this;}, /**
	 * Reset the tooltip content overflow and remove the test container
	 * 
	 * @returns {Ruler}
	 * @public
	 */destroy:function destroy(){ // in case the element was not a clone
this.__$tooltip.detach().find('.tooltipster-content').css({ // reset to CSS value
display:'',overflow:''});this.$container.remove();}, /**
	 * Removes any constraints
	 * 
	 * @returns {Ruler}
	 * @public
	 */free:function free(){this.constraints = null; // reset to natural size
this.__$tooltip.css({display:'',height:'',overflow:'visible',width:''});return this;}, /**
	 * Returns the size of the tooltip. When constraints are applied, also returns
	 * whether the tooltip fits in the provided dimensions.
	 * The idea is to see if the new height is small enough and if the content does
	 * not overflow horizontally.
	 *
	 * @param {int} width
	 * @param {int} height
	 * @returns {object} An object with a bool `fits` property and a `size` property
	 * @public
	 */measure:function measure(){this.__forceRedraw();var tooltipBcr=this.__$tooltip[0].getBoundingClientRect(),result={size:{ // bcr.width/height are not defined in IE8- but in this
// case, bcr.right/bottom will have the same value
// except in iOS 8+ where tooltipBcr.bottom/right are wrong
// after scrolling for reasons yet to be determined.
// tooltipBcr.top/left might not be 0, see issue #514
height:tooltipBcr.height || tooltipBcr.bottom - tooltipBcr.top,width:tooltipBcr.width || tooltipBcr.right - tooltipBcr.left}};if(this.constraints){ // note: we used to use offsetWidth instead of boundingRectClient but
// it returned rounded values, causing issues with sub-pixel layouts.
// note2: noticed that the bcrWidth of text content of a div was once
// greater than the bcrWidth of its container by 1px, causing the final
// tooltip box to be too small for its content. However, evaluating
// their widths one against the other (below) surprisingly returned
// equality. Happened only once in Chrome 48, was not able to reproduce
// => just having fun with float position values...
var $content=this.__$tooltip.find('.tooltipster-content'),height=this.__$tooltip.outerHeight(),contentBcr=$content[0].getBoundingClientRect(),fits={height:height <= this.constraints.height,width: // this condition accounts for min-width property that
// may apply
tooltipBcr.width <= this.constraints.width // the -1 is here because scrollWidth actually returns
// a rounded value, and may be greater than bcr.width if
// it was rounded up. This may cause an issue for contents
// which actually really overflow  by 1px or so, but that
// should be rare. Not sure how to solve this efficiently.
// See http://blogs.msdn.com/b/ie/archive/2012/02/17/sub-pixel-rendering-and-the-css-object-model.aspx
 && contentBcr.width >= $content[0].scrollWidth - 1};result.fits = fits.height && fits.width;} // old versions of IE get the width wrong for some reason and it causes
// the text to be broken to a new line, so we round it up. If the width
// is the width of the screen though, we can assume it is accurate.
if(env.IE && env.IE <= 11 && result.size.width !== env.window.document.documentElement.clientWidth){result.size.width = Math.ceil(result.size.width) + 1;}return result;}}; // quick & dirty compare function, not bijective nor multidimensional
function areEqual(a,b){var same=true;$.each(a,function(i,_){if(b[i] === undefined || a[i] !== b[i]){same = false;return false;}});return same;} /**
 * A fast function to check if an element is still in the DOM. It
 * tries to use an id as ids are indexed by the browser, or falls
 * back to jQuery's `contains` method. May fail if two elements
 * have the same id, but so be it
 *
 * @param {object} $obj A jQuery-wrapped HTML element
 * @return {boolean}
 */function bodyContains($obj){var id=$obj.attr('id'),el=id?env.window.document.getElementById(id):null; // must also check that the element with the id is the one we want
return el?el === $obj[0]:$.contains(env.window.document.body,$obj[0]);} // detect IE versions for dirty fixes
var uA=navigator.userAgent.toLowerCase();if(uA.indexOf('msie') != -1)env.IE = parseInt(uA.split('msie')[1]);else if(uA.toLowerCase().indexOf('trident') !== -1 && uA.indexOf(' rv:11') !== -1)env.IE = 11;else if(uA.toLowerCase().indexOf('edge/') != -1)env.IE = parseInt(uA.toLowerCase().split('edge/')[1]); // detecting support for CSS transitions
function transitionSupport(){ // env.window is not defined yet when this is called
if(!win)return false;var b=win.document.body || win.document.documentElement,s=b.style,p='transition',v=['Moz','Webkit','Khtml','O','ms'];if(typeof s[p] == 'string'){return true;}p = p.charAt(0).toUpperCase() + p.substr(1);for(var i=0;i < v.length;i++) {if(typeof s[v[i] + p] == 'string'){return true;}}return false;} // we'll return jQuery for plugins not to have to declare it as a dependency,
// but it's done by a build task since it should be included only once at the
// end when we concatenate the main file with a plugin
// sideTip is Tooltipster's default plugin.
// This file will be UMDified by a build task.
var pluginName='tooltipster.sideTip';$.tooltipster._plugin({name:pluginName,instance:{ /**
		 * Defaults are provided as a function for an easy override by inheritance
		 *
		 * @return {object} An object with the defaults options
		 * @private
		 */__defaults:function __defaults(){return { // if the tooltip should display an arrow that points to the origin
arrow:true, // the distance in pixels between the tooltip and the origin
distance:6, // allows to easily change the position of the tooltip
functionPosition:null,maxWidth:null, // used to accomodate the arrow of tooltip if there is one.
// First to make sure that the arrow target is not too close
// to the edge of the tooltip, so the arrow does not overflow
// the tooltip. Secondly when we reposition the tooltip to
// make sure that it's positioned in such a way that the arrow is
// still pointing at the target (and not a few pixels beyond it).
// It should be equal to or greater than half the width of
// the arrow (by width we mean the size of the side which touches
// the side of the tooltip).
minIntersection:16,minWidth:0, // deprecated in 4.0.0. Listed for _optionsExtract to pick it up
position:null,side:'top', // set to false to position the tooltip relatively to the document rather
// than the window when we open it
viewportAware:true};}, /**
		 * Run once: at instantiation of the plugin
		 *
		 * @param {object} instance The tooltipster object that instantiated this plugin
		 * @private
		 */__init:function __init(instance){var self=this; // list of instance variables
self.__instance = instance;self.__namespace = 'tooltipster-sideTip-' + Math.round(Math.random() * 1000000);self.__previousState = 'closed';self.__options; // initial formatting
self.__optionsFormat();self.__instance._on('state.' + self.__namespace,function(event){if(event.state == 'closed'){self.__close();}else if(event.state == 'appearing' && self.__previousState == 'closed'){self.__create();}self.__previousState = event.state;}); // reformat every time the options are changed
self.__instance._on('options.' + self.__namespace,function(){self.__optionsFormat();});self.__instance._on('reposition.' + self.__namespace,function(e){self.__reposition(e.event,e.helper);});}, /**
		 * Called when the tooltip has closed
		 * 
		 * @private
		 */__close:function __close(){ // detach our content object first, so the next jQuery's remove()
// call does not unbind its event handlers
if(this.__instance.content() instanceof $){this.__instance.content().detach();} // remove the tooltip from the DOM
this.__instance._$tooltip.remove();this.__instance._$tooltip = null;}, /**
		 * Creates the HTML element of the tooltip.
		 * 
		 * @private
		 */__create:function __create(){ // note: we wrap with a .tooltipster-box div to be able to set a margin on it
// (.tooltipster-base must not have one)
var $html=$('<div class="tooltipster-base tooltipster-sidetip">' + '<div class="tooltipster-box">' + '<div class="tooltipster-content"></div>' + '</div>' + '<div class="tooltipster-arrow">' + '<div class="tooltipster-arrow-uncropped">' + '<div class="tooltipster-arrow-border"></div>' + '<div class="tooltipster-arrow-background"></div>' + '</div>' + '</div>' + '</div>'); // hide arrow if asked
if(!this.__options.arrow){$html.find('.tooltipster-box').css('margin',0).end().find('.tooltipster-arrow').hide();} // apply min/max width if asked
if(this.__options.minWidth){$html.css('min-width',this.__options.minWidth + 'px');}if(this.__options.maxWidth){$html.css('max-width',this.__options.maxWidth + 'px');}this.__instance._$tooltip = $html; // tell the instance that the tooltip element has been created
this.__instance._trigger('created');}, /**
		 * Used when the plugin is to be unplugged
		 *
		 * @private
		 */__destroy:function __destroy(){this.__instance._off('.' + self.__namespace);}, /**
		 * (Re)compute this.__options from the options declared to the instance
		 *
		 * @private
		 */__optionsFormat:function __optionsFormat(){var self=this; // get the options
self.__options = self.__instance._optionsExtract(pluginName,self.__defaults()); // for backward compatibility, deprecated in v4.0.0
if(self.__options.position){self.__options.side = self.__options.position;} // options formatting
// format distance as a four-cell array if it ain't one yet and then make
// it an object with top/bottom/left/right properties
if(typeof self.__options.distance != 'object'){self.__options.distance = [self.__options.distance];}if(self.__options.distance.length < 4){if(self.__options.distance[1] === undefined)self.__options.distance[1] = self.__options.distance[0];if(self.__options.distance[2] === undefined)self.__options.distance[2] = self.__options.distance[0];if(self.__options.distance[3] === undefined)self.__options.distance[3] = self.__options.distance[1];self.__options.distance = {top:self.__options.distance[0],right:self.__options.distance[1],bottom:self.__options.distance[2],left:self.__options.distance[3]};} // let's transform:
// 'top' into ['top', 'bottom', 'right', 'left']
// 'right' into ['right', 'left', 'top', 'bottom']
// 'bottom' into ['bottom', 'top', 'right', 'left']
// 'left' into ['left', 'right', 'top', 'bottom']
if(typeof self.__options.side == 'string'){var opposites={'top':'bottom','right':'left','bottom':'top','left':'right'};self.__options.side = [self.__options.side,opposites[self.__options.side]];if(self.__options.side[0] == 'left' || self.__options.side[0] == 'right'){self.__options.side.push('top','bottom');}else {self.__options.side.push('right','left');}} // misc
// disable the arrow in IE6 unless the arrow option was explicitly set to true
if($.tooltipster._env.IE === 6 && self.__options.arrow !== true){self.__options.arrow = false;}}, /**
		 * This method must compute and set the positioning properties of the
		 * tooltip (left, top, width, height, etc.). It must also make sure the
		 * tooltip is eventually appended to its parent (since the element may be
		 * detached from the DOM at the moment the method is called).
		 *
		 * We'll evaluate positioning scenarios to find which side can contain the
		 * tooltip in the best way. We'll consider things relatively to the window
		 * (unless the user asks not to), then to the document (if need be, or if the
		 * user explicitly requires the tests to run on the document). For each
		 * scenario, measures are taken, allowing us to know how well the tooltip
		 * is going to fit. After that, a sorting function will let us know what
		 * the best scenario is (we also allow the user to choose his favorite
		 * scenario by using an event).
		 * 
		 * @param {object} helper An object that contains variables that plugin
		 * creators may find useful (see below)
		 * @param {object} helper.geo An object with many layout properties
		 * about objects of interest (window, document, origin). This should help
		 * plugin users compute the optimal position of the tooltip
		 * @private
		 */__reposition:function __reposition(event,helper){var self=this,finalResult, // to know where to put the tooltip, we need to know on which point
// of the x or y axis we should center it. That coordinate is the target
targets=self.__targetFind(helper),testResults=[]; // make sure the tooltip is detached while we make tests on a clone
self.__instance._$tooltip.detach(); // we could actually provide the original element to the Ruler and
// not a clone, but it just feels right to keep it out of the
// machinery.
var $clone=self.__instance._$tooltip.clone(), // start position tests session
ruler=$.tooltipster._getRuler($clone),satisfied=false,animation=self.__instance.option('animation'); // an animation class could contain properties that distort the size
if(animation){$clone.removeClass('tooltipster-' + animation);} // start evaluating scenarios
$.each(['window','document'],function(i,container){var _takeTest=null; // let the user decide to keep on testing or not
self.__instance._trigger({container:container,helper:helper,satisfied:satisfied,takeTest:function takeTest(bool){_takeTest = bool;},results:testResults,type:'positionTest'});if(_takeTest == true || _takeTest != false && satisfied == false // skip the window scenarios if asked. If they are reintegrated by
// the callback of the positionTest event, they will have to be
// excluded using the callback of positionTested
 && (container != 'window' || self.__options.viewportAware)){ // for each allowed side
for(var i=0;i < self.__options.side.length;i++) {var distance={horizontal:0,vertical:0},side=self.__options.side[i];if(side == 'top' || side == 'bottom'){distance.vertical = self.__options.distance[side];}else {distance.horizontal = self.__options.distance[side];} // this may have an effect on the size of the tooltip if there are css
// rules for the arrow or something else
self.__sideChange($clone,side);$.each(['natural','constrained'],function(i,mode){_takeTest = null; // emit an event on the instance
self.__instance._trigger({container:container,event:event,helper:helper,mode:mode,results:testResults,satisfied:satisfied,side:side,takeTest:function takeTest(bool){_takeTest = bool;},type:'positionTest'});if(_takeTest == true || _takeTest != false && satisfied == false){var testResult={container:container, // we let the distance as an object here, it can make things a little easier
// during the user's calculations at positionTest/positionTested
distance:distance, // whether the tooltip can fit in the size of the viewport (does not mean
// that we'll be able to make it initially entirely visible, see 'whole')
fits:null,mode:mode,outerSize:null,side:side,size:null,target:targets[side], // check if the origin has enough surface on screen for the tooltip to
// aim at it without overflowing the viewport (this is due to the thickness
// of the arrow represented by the minIntersection length).
// If not, the tooltip will have to be partly or entirely off screen in
// order to stay docked to the origin. This value will stay null when the
// container is the document, as it is not relevant
whole:null}; // get the size of the tooltip with or without size constraints
var rulerConfigured=mode == 'natural'?ruler.free():ruler.constrain(helper.geo.available[container][side].width - distance.horizontal,helper.geo.available[container][side].height - distance.vertical),rulerResults=rulerConfigured.measure();testResult.size = rulerResults.size;testResult.outerSize = {height:rulerResults.size.height + distance.vertical,width:rulerResults.size.width + distance.horizontal};if(mode == 'natural'){if(helper.geo.available[container][side].width >= testResult.outerSize.width && helper.geo.available[container][side].height >= testResult.outerSize.height){testResult.fits = true;}else {testResult.fits = false;}}else {testResult.fits = rulerResults.fits;}if(container == 'window'){if(!testResult.fits){testResult.whole = false;}else {if(side == 'top' || side == 'bottom'){testResult.whole = helper.geo.origin.windowOffset.right >= self.__options.minIntersection && helper.geo.window.size.width - helper.geo.origin.windowOffset.left >= self.__options.minIntersection;}else {testResult.whole = helper.geo.origin.windowOffset.bottom >= self.__options.minIntersection && helper.geo.window.size.height - helper.geo.origin.windowOffset.top >= self.__options.minIntersection;}}}testResults.push(testResult); // we don't need to compute more positions if we have one fully on screen
if(testResult.whole){satisfied = true;}else { // don't run the constrained test unless the natural width was greater
// than the available width, otherwise it's pointless as we know it
// wouldn't fit either
if(testResult.mode == 'natural' && (testResult.fits || testResult.size.width <= helper.geo.available[container][side].width)){return false;}}}});}}}); // the user may eliminate the unwanted scenarios from testResults, but he's
// not supposed to alter them at this point. functionPosition and the
// position event serve that purpose.
self.__instance._trigger({edit:function edit(r){testResults = r;},event:event,helper:helper,results:testResults,type:'positionTested'}); /**
			 * Sort the scenarios to find the favorite one.
			 * 
			 * The favorite scenario is when we can fully display the tooltip on screen,
			 * even if it means that the middle of the tooltip is no longer centered on
			 * the middle of the origin (when the origin is near the edge of the screen
			 * or even partly off screen). We want the tooltip on the preferred side,
			 * even if it means that we have to use a constrained size rather than a
			 * natural one (as long as it fits). When the origin is off screen at the top
			 * the tooltip will be positioned at the bottom (if allowed), if the origin
			 * is off screen on the right, it will be positioned on the left, etc.
			 * If there are no scenarios where the tooltip can fit on screen, or if the
			 * user does not want the tooltip to fit on screen (viewportAware == false),
			 * we fall back to the scenarios relative to the document.
			 * 
			 * When the tooltip is bigger than the viewport in either dimension, we stop
			 * looking at the window scenarios and consider the document scenarios only,
			 * with the same logic to find on which side it would fit best.
			 * 
			 * If the tooltip cannot fit the document on any side, we force it at the
			 * bottom, so at least the user can scroll to see it.
 			 */testResults.sort(function(a,b){ // best if it's whole (the tooltip fits and adapts to the viewport)
if(a.whole && !b.whole){return -1;}else if(!a.whole && b.whole){return 1;}else if(a.whole && b.whole){var ai=self.__options.side.indexOf(a.side),bi=self.__options.side.indexOf(b.side); // use the user's sides fallback array
if(ai < bi){return -1;}else if(ai > bi){return 1;}else { // will be used if the user forced the tests to continue
return a.mode == 'natural'?-1:1;}}else { // better if it fits
if(a.fits && !b.fits){return -1;}else if(!a.fits && b.fits){return 1;}else if(a.fits && b.fits){var ai=self.__options.side.indexOf(a.side),bi=self.__options.side.indexOf(b.side); // use the user's sides fallback array
if(ai < bi){return -1;}else if(ai > bi){return 1;}else { // will be used if the user forced the tests to continue
return a.mode == 'natural'?-1:1;}}else { // if everything failed, this will give a preference to the case where
// the tooltip overflows the document at the bottom
if(a.container == 'document' && a.side == 'bottom' && a.mode == 'natural'){return -1;}else {return 1;}}}});finalResult = testResults[0]; // now let's find the coordinates of the tooltip relatively to the window
finalResult.coord = {};switch(finalResult.side){case 'left':case 'right':finalResult.coord.top = Math.floor(finalResult.target - finalResult.size.height / 2);break;case 'bottom':case 'top':finalResult.coord.left = Math.floor(finalResult.target - finalResult.size.width / 2);break;}switch(finalResult.side){case 'left':finalResult.coord.left = helper.geo.origin.windowOffset.left - finalResult.outerSize.width;break;case 'right':finalResult.coord.left = helper.geo.origin.windowOffset.right + finalResult.distance.horizontal;break;case 'top':finalResult.coord.top = helper.geo.origin.windowOffset.top - finalResult.outerSize.height;break;case 'bottom':finalResult.coord.top = helper.geo.origin.windowOffset.bottom + finalResult.distance.vertical;break;} // if the tooltip can potentially be contained within the viewport dimensions
// and that we are asked to make it fit on screen
if(finalResult.container == 'window'){ // if the tooltip overflows the viewport, we'll move it accordingly (then it will
// not be centered on the middle of the origin anymore). We only move horizontally
// for top and bottom tooltips and vice versa.
if(finalResult.side == 'top' || finalResult.side == 'bottom'){ // if there is an overflow on the left
if(finalResult.coord.left < 0){ // prevent the overflow unless the origin itself gets off screen (minus the
// margin needed to keep the arrow pointing at the target)
if(helper.geo.origin.windowOffset.right - this.__options.minIntersection >= 0){finalResult.coord.left = 0;}else {finalResult.coord.left = helper.geo.origin.windowOffset.right - this.__options.minIntersection - 1;}} // or an overflow on the right
else if(finalResult.coord.left > helper.geo.window.size.width - finalResult.size.width){if(helper.geo.origin.windowOffset.left + this.__options.minIntersection <= helper.geo.window.size.width){finalResult.coord.left = helper.geo.window.size.width - finalResult.size.width;}else {finalResult.coord.left = helper.geo.origin.windowOffset.left + this.__options.minIntersection + 1 - finalResult.size.width;}}}else { // overflow at the top
if(finalResult.coord.top < 0){if(helper.geo.origin.windowOffset.bottom - this.__options.minIntersection >= 0){finalResult.coord.top = 0;}else {finalResult.coord.top = helper.geo.origin.windowOffset.bottom - this.__options.minIntersection - 1;}} // or at the bottom
else if(finalResult.coord.top > helper.geo.window.size.height - finalResult.size.height){if(helper.geo.origin.windowOffset.top + this.__options.minIntersection <= helper.geo.window.size.height){finalResult.coord.top = helper.geo.window.size.height - finalResult.size.height;}else {finalResult.coord.top = helper.geo.origin.windowOffset.top + this.__options.minIntersection + 1 - finalResult.size.height;}}}}else { // there might be overflow here too but it's easier to handle. If there has
// to be an overflow, we'll make sure it's on the right side of the screen
// (because the browser will extend the document size if there is an overflow
// on the right, but not on the left). The sort function above has already
// made sure that a bottom document overflow is preferred to a top overflow,
// so we don't have to care about it.
// if there is an overflow on the right
if(finalResult.coord.left > helper.geo.window.size.width - finalResult.size.width){ // this may actually create on overflow on the left but we'll fix it in a sec
finalResult.coord.left = helper.geo.window.size.width - finalResult.size.width;} // if there is an overflow on the left
if(finalResult.coord.left < 0){ // don't care if it overflows the right after that, we made our best
finalResult.coord.left = 0;}} // submit the positioning proposal to the user function which may choose to change
// the side, size and/or the coordinates
// first, set the rules that corresponds to the proposed side: it may change
// the size of the tooltip, and the custom functionPosition may want to detect the
// size of something before making a decision. So let's make things easier for the
// implementor
self.__sideChange($clone,finalResult.side); // add some variables to the helper
helper.tooltipClone = $clone[0];helper.tooltipParent = self.__instance.option('parent').parent[0]; // move informative values to the helper
helper.mode = finalResult.mode;helper.whole = finalResult.whole; // add some variables to the helper for the functionPosition callback (these
// will also be added to the event fired by self.__instance._trigger but that's
// ok, we're just being consistent)
helper.origin = self.__instance._$origin[0];helper.tooltip = self.__instance._$tooltip[0]; // leave only the actionable values in there for functionPosition
delete finalResult.container;delete finalResult.fits;delete finalResult.mode;delete finalResult.outerSize;delete finalResult.whole; // keep only the distance on the relevant side, for clarity
finalResult.distance = finalResult.distance.horizontal || finalResult.distance.vertical; // beginners may not be comfortable with the concept of editing the object
//  passed by reference, so we provide an edit function and pass a clone
var finalResultClone=$.extend(true,{},finalResult); // emit an event on the instance
self.__instance._trigger({edit:function edit(result){finalResult = result;},event:event,helper:helper,position:finalResultClone,type:'position'});if(self.__options.functionPosition){var result=self.__options.functionPosition.call(self,self.__instance,helper,finalResultClone);if(result)finalResult = result;} // end the positioning tests session (the user might have had a
// use for it during the position event, now it's over)
ruler.destroy(); // compute the position of the target relatively to the tooltip root
// element so we can place the arrow and make the needed adjustments
var arrowCoord,maxVal;if(finalResult.side == 'top' || finalResult.side == 'bottom'){arrowCoord = {prop:'left',val:finalResult.target - finalResult.coord.left};maxVal = finalResult.size.width - this.__options.minIntersection;}else {arrowCoord = {prop:'top',val:finalResult.target - finalResult.coord.top};maxVal = finalResult.size.height - this.__options.minIntersection;} // cannot lie beyond the boundaries of the tooltip, minus the
// arrow margin
if(arrowCoord.val < this.__options.minIntersection){arrowCoord.val = this.__options.minIntersection;}else if(arrowCoord.val > maxVal){arrowCoord.val = maxVal;}var originParentOffset; // let's convert the window-relative coordinates into coordinates relative to the
// future positioned parent that the tooltip will be appended to
if(helper.geo.origin.fixedLineage){ // same as windowOffset when the position is fixed
originParentOffset = helper.geo.origin.windowOffset;}else { // this assumes that the parent of the tooltip is located at
// (0, 0) in the document, typically like when the parent is
// <body>.
// If we ever allow other types of parent, .tooltipster-ruler
// will have to be appended to the parent to inherit css style
// values that affect the display of the text and such.
originParentOffset = {left:helper.geo.origin.windowOffset.left + helper.geo.window.scroll.left,top:helper.geo.origin.windowOffset.top + helper.geo.window.scroll.top};}finalResult.coord = {left:originParentOffset.left + (finalResult.coord.left - helper.geo.origin.windowOffset.left),top:originParentOffset.top + (finalResult.coord.top - helper.geo.origin.windowOffset.top)}; // set position values on the original tooltip element
self.__sideChange(self.__instance._$tooltip,finalResult.side);if(helper.geo.origin.fixedLineage){self.__instance._$tooltip.css('position','fixed');}else { // CSS default
self.__instance._$tooltip.css('position','');}self.__instance._$tooltip.css({left:finalResult.coord.left,top:finalResult.coord.top, // we need to set a size even if the tooltip is in its natural size
// because when the tooltip is positioned beyond the width of the body
// (which is by default the width of the window; it will happen when
// you scroll the window horizontally to get to the origin), its text
// content will otherwise break lines at each word to keep up with the
// body overflow strategy.
height:finalResult.size.height,width:finalResult.size.width}).find('.tooltipster-arrow').css({'left':'','top':''}).css(arrowCoord.prop,arrowCoord.val); // append the tooltip HTML element to its parent
self.__instance._$tooltip.appendTo(self.__instance.option('parent'));self.__instance._trigger({type:'repositioned',event:event,position:finalResult});}, /**
		 * Make whatever modifications are needed when the side is changed. This has
		 * been made an independant method for easy inheritance in custom plugins based
		 * on this default plugin.
		 *
		 * @param {object} $obj
		 * @param {string} side
		 * @private
		 */__sideChange:function __sideChange($obj,side){$obj.removeClass('tooltipster-bottom').removeClass('tooltipster-left').removeClass('tooltipster-right').removeClass('tooltipster-top').addClass('tooltipster-' + side);}, /**
		 * Returns the target that the tooltip should aim at for a given side.
		 * The calculated value is a distance from the edge of the window
		 * (left edge for top/bottom sides, top edge for left/right side). The
		 * tooltip will be centered on that position and the arrow will be
		 * positioned there (as much as possible).
		 *
		 * @param {object} helper
		 * @return {integer}
		 * @private
		 */__targetFind:function __targetFind(helper){var target={},rects=this.__instance._$origin[0].getClientRects(); // these lines fix a Chrome bug (issue #491)
if(rects.length > 1){var opacity=this.__instance._$origin.css('opacity');if(opacity == 1){this.__instance._$origin.css('opacity',0.99);rects = this.__instance._$origin[0].getClientRects();this.__instance._$origin.css('opacity',1);}} // by default, the target will be the middle of the origin
if(rects.length < 2){target.top = Math.floor(helper.geo.origin.windowOffset.left + helper.geo.origin.size.width / 2);target.bottom = target.top;target.left = Math.floor(helper.geo.origin.windowOffset.top + helper.geo.origin.size.height / 2);target.right = target.left;} // if multiple client rects exist, the element may be text split
// up into multiple lines and the middle of the origin may not be
// best option anymore. We need to choose the best target client rect
else { // top: the first
var targetRect=rects[0];target.top = Math.floor(targetRect.left + (targetRect.right - targetRect.left) / 2); // right: the middle line, rounded down in case there is an even
// number of lines (looks more centered => check out the
// demo with 4 split lines)
if(rects.length > 2){targetRect = rects[Math.ceil(rects.length / 2) - 1];}else {targetRect = rects[0];}target.right = Math.floor(targetRect.top + (targetRect.bottom - targetRect.top) / 2); // bottom: the last
targetRect = rects[rects.length - 1];target.bottom = Math.floor(targetRect.left + (targetRect.right - targetRect.left) / 2); // left: the middle line, rounded up
if(rects.length > 2){targetRect = rects[Math.ceil((rects.length + 1) / 2) - 1];}else {targetRect = rects[rects.length - 1];}target.left = Math.floor(targetRect.top + (targetRect.bottom - targetRect.top) / 2);}return target;}}}); /* a build task will add "return $;" here */return $;});


/* skel.js v3.0.1 | (c) skel.io | MIT licensed */

'use strict';

var skel = (function () {
	"use strict";var _ = {

		/******************************/
		/* Properties                 */
		/******************************/

		/**
   * IDs of breakpoints that are currently active.
   * @type {array}
   */
		breakpointIds: null,

		/**
   * Events.
   * @type {object}
   */
		events: {},

		/**
   * Are we initialized?
   * @type {bool}
   */
		isInit: false,

		/**
   * Objects.
   * @type {object}
   */
		obj: {

			// Attachments.
			attachments: {},

			// Breakpoints.
			breakpoints: {},

			// Head.
			head: null,

			// States.
			states: {}

		},

		/**
   * State ID delimiter (don't change this).
   * @type {string}
   */
		sd: '/',

		/**
   * Current state.
   * @type {object}
   */
		state: null,

		/**
   * State handlers.
   * @type {object}
   */
		stateHandlers: {},

		/**
   * Current state ID.
   * @type {string}
   */
		stateId: '',

		/**
   * Internal vars.
   * @type {object}
   */
		vars: {},

		/******************************/
		/* Methods: Utility           */
		/******************************/

		/**
   * Does stuff when the DOM is ready.
   * @param {function} f Function.
   */
		DOMReady: null,

		/**
   * Wrapper/polyfill for (Array.prototype|String).indexOf.
   * @param {Array|string} search Object or string to search.
   * @param {integer} from Starting index.
   * @return {integer} Matching index (or -1 if there's no match).
   */
		indexOf: null,

		/**
   * Wrapper/polyfill for Array.isArray.
   * @param {array} x Variable to check.
   * @return {bool} If true, x is an array. If false, x is not an array.
   */
		isArray: null,

		/**
   * Safe replacement for "for..in". Avoids stuff that doesn't belong to the array itself (eg. properties added to Array.prototype).
   * @param {Array} a Array to iterate.
   * @param {function} f(index) Function to call on each element.
   */
		iterate: null,

		/**
   * Determines if a media query matches the current browser state.
   * @param {string} query Media query.
   * @return {bool} True if it matches, false if not.
   */
		matchesMedia: null,

		/**
   * Extends x by y.
   * @param {object} x Target object.
   * @param {object} y Source object.
   */
		extend: function extend(x, y) {

			_.iterate(y, function (k) {

				if (_.isArray(y[k])) {

					if (!_.isArray(x[k])) x[k] = [];

					_.extend(x[k], y[k]);
				} else if (typeof y[k] == 'object') {

					if (typeof x[k] != 'object') x[k] = {};

					_.extend(x[k], y[k]);
				} else x[k] = y[k];
			});
		},

		/**
   * Creates a new style element.
   * @param {string} content Content.
   * @return {DOMHTMLElement} Style element.
   */
		newStyle: function newStyle(content) {

			var e = document.createElement('style');
			e.type = 'text/css';
			e.innerHTML = content;

			return e;
		},

		/******************************/
		/* Methods: API               */
		/******************************/

		/**
   * Temporary element for canUse()
   * @type {DOMElement}
   */
		_canUse: null,

		/**
   * Determines if the browser supports a given property.
   * @param {string} p Property.
   * @return {bool} True if property is supported, false if not.
   */
		canUse: function canUse(p) {

			// Create temporary element if it doesn't already exist.
			if (!_._canUse) _._canUse = document.createElement('div');

			// Check for property.
			var e = _._canUse.style,
			    up = p.charAt(0).toUpperCase() + p.slice(1);

			return p in e || 'Moz' + up in e || 'Webkit' + up in e || 'O' + up in e || 'ms' + up in e;
		},

		/******************************/
		/* Methods: Events            */
		/******************************/

		/**
   * Registers one or more events.
   * @param {string} names Space-delimited list of event names.
   * @param {function} f Function.
   */
		on: function on(names, f) {

			var a = names.split(/[\s]+/);

			_.iterate(a, function (i) {

				var name = a[i];

				// Manually trigger event if applicable.
				if (_.isInit) {

					// Init.
					if (name == 'init') {

						// Trigger event.
						f();

						// This only gets called once, so there's no need to actually
						// register it.
						return;
					}

					// Change.
					else if (name == 'change') {

							// Trigger event.
							f();
						}

						// Activate / Not.
						else {

								var x = name.charAt(0);

								if (x == '+' || x == '!') {

									var y = name.substring(1);

									if (y in _.obj.breakpoints) {

										// Activate.
										if (x == '+' && _.obj.breakpoints[y].active) {

											// Trigger event.
											f();
										}

										// Not.
										else if (x == '!' && !_.obj.breakpoints[y].active) {

												// Trigger event.
												f();

												// This only gets called once, so there's no need to actually
												// register it.
												return;
											}
									}
								}
							}
				}

				// No previous events of this type registered? Set up its array.
				if (!_.events[name]) _.events[name] = [];

				// Register event.
				_.events[name].push(f);
			});

			return _;
		},

		/**
   * Triggers an event.
   * @param {string} name Name.
   */
		trigger: function trigger(name) {

			// No events registered? Bail.
			if (!_.events[name] || _.events[name].length == 0) return;

			// Step through and call events.
			_.iterate(_.events[name], function (k) {
				_.events[name][k]();
			});

			return _;
		},

		/******************************/
		/* Methods: Breakpoints       */
		/******************************/

		/**
   * Gets a breakpoint.
   * @param {string} id Breakpoint ID.
   * @return {Breakpoint} Breakpoint.
   */
		breakpoint: function breakpoint(id) {
			return _.obj.breakpoints[id];
		},

		/**
   * Sets breakpoints.
   * @param {object} breakpoints Breakpoints.
   */
		breakpoints: function breakpoints(_breakpoints) {

			// Breakpoint class.
			function Breakpoint(id, media) {

				this.name = this.id = id;
				this.media = media;
				this.active = false;
				this.wasActive = false;
			};

			Breakpoint.prototype.matches = function () {
				return _.matchesMedia(this.media);
			};

			Breakpoint.prototype.sync = function () {

				this.wasActive = this.active;
				this.active = this.matches();
			};

			// Create breakpoints.
			_.iterate(_breakpoints, function (id) {
				_.obj.breakpoints[id] = new Breakpoint(id, _breakpoints[id]);
			});

			// Initial poll.
			window.setTimeout(function () {
				_.poll();
			}, 0);

			return _;
		},

		/******************************/
		/* Methods: States            */
		/******************************/

		/**
   * Adds a state handler.
   * @param {string} id ID.
   * @param {function} f Handler function.
   */
		addStateHandler: function addStateHandler(id, f) {

			// Add handler.
			_.stateHandlers[id] = f;

			// Call it.
			//_.callStateHandler(id);
		},

		/**
   * Calls a state handler.
   * @param {string} id ID.
   */
		callStateHandler: function callStateHandler(id) {

			// Call handler.
			var attachments = _.stateHandlers[id]();

			// Add attachments to state (if any).
			_.iterate(attachments, function (i) {
				_.state.attachments.push(attachments[i]);
			});
		},

		/**
   * Switches to a different state.
   * @param {string} newStateId New state ID.
   */
		changeState: function changeState(newStateId) {

			// Sync all breakpoints.
			_.iterate(_.obj.breakpoints, function (id) {
				_.obj.breakpoints[id].sync();
			});

			// Set last state var.
			_.vars.lastStateId = _.stateId;

			// Change state ID.
			_.stateId = newStateId;
			_.breakpointIds = _.stateId === _.sd ? [] : _.stateId.substring(1).split(_.sd);

			console.log('[skel] changing states (id: "' + _.stateId + '")');

			// Get state.
			if (!_.obj.states[_.stateId]) {

				console.log('[skel] - not found. building ...');

				// Build state.
				_.obj.states[_.stateId] = {
					attachments: []
				};

				_.state = _.obj.states[_.stateId];

				// Call all state handlers.
				_.iterate(_.stateHandlers, _.callStateHandler);
			} else {

				console.log('[skel] - found');

				// Get state.
				_.state = _.obj.states[_.stateId];
			}

			// Detach all attachments *EXCEPT* state's.
			_.detachAll(_.state.attachments);

			// Attach state's attachments.
			_.attachAll(_.state.attachments);

			// Expose state and stateId as vars.
			_.vars.stateId = _.stateId;
			_.vars.state = _.state;

			// Trigger change event.
			_.trigger('change');

			// Trigger activate/deactivate events.
			_.iterate(_.obj.breakpoints, function (id) {

				// Breakpoint is now active ...
				if (_.obj.breakpoints[id].active) {

					// ... and it wasn't active before? Trigger activate event.
					if (!_.obj.breakpoints[id].wasActive) _.trigger('+' + id);
				}

				// Breakpoint is not active ...
				else {

						// ... but it was active before? Trigger deactivate event.
						if (_.obj.breakpoints[id].wasActive) _.trigger('-' + id);
					}
			});
		},

		/**
   * Generates a state-specific config.
   * @param {object} baseConfig Base config.
   * @param {object} breakpointConfigs Breakpoint-specific configs.
   * @return {object} State-specific config.
   */
		generateStateConfig: function generateStateConfig(baseConfig, breakpointConfigs) {

			var x = {};

			// Extend with base config.
			_.extend(x, baseConfig);

			// Extend with configs for each active breakpoint.
			_.iterate(_.breakpointIds, function (k) {
				_.extend(x, breakpointConfigs[_.breakpointIds[k]]);
			});

			return x;
		},

		/**
   * Gets the current state ID.
   * @return {string} State ID.
   */
		getStateId: function getStateId() {

			var stateId = '';

			_.iterate(_.obj.breakpoints, function (id) {

				var b = _.obj.breakpoints[id];

				// Active? Append breakpoint ID to state ID.
				if (b.matches()) stateId += _.sd + b.id;
			});

			return stateId;
		},

		/**
   * Polls for state changes.
   */
		poll: function poll() {

			var newStateId = '';

			// Determine new state.
			newStateId = _.getStateId();

			if (newStateId === '') newStateId = _.sd;

			// State changed?
			if (newStateId !== _.stateId) _.changeState(newStateId);
		},

		/******************************/
		/* Methods: Attachments       */
		/******************************/

		/**
   * Attach point for attach()
   * @type {DOMElement}
   */
		_attach: null,

		/**
   * Attaches a single attachment.
   * @param {object} attachment Attachment.
   * @return bool True on success, false on failure.
   */
		attach: function attach(attachment) {

			var h = _.obj.head,
			    e = attachment.element;

			// Already attached? Bail.
			if (e.parentNode && e.parentNode.tagName) return false;

			// Add to <head>

			// No attach point yet? Use <head>'s first child.
			if (!_._attach) _._attach = h.firstChild;

			// Insert element.
			h.insertBefore(e, _._attach.nextSibling);

			// Permanent attachment? Make its element the new attach point.
			if (attachment.permanent) _._attach = e;

			console.log('[skel] ' + attachment.id + ': attached (' + attachment.priority + ')');

			return true;
		},

		/**
   * Attaches a list of attachments.
   * @param {array} attachments Attachments.
   */
		attachAll: function attachAll(attachments) {

			var a = [];

			// Organize attachments by priority.
			_.iterate(attachments, function (k) {

				if (!a[attachments[k].priority]) a[attachments[k].priority] = [];

				a[attachments[k].priority].push(attachments[k]);
			});

			// Reverse array order.
			a.reverse();

			// Step through each priority.
			_.iterate(a, function (k) {
				_.iterate(a[k], function (x) {
					_.attach(a[k][x]);
				});
			});
		},

		/**
   * Detaches a single attachment.
   * @param {object} attachment Attachment.
   * @return bool True on success, false on failure.
   */
		detach: function detach(attachment) {

			var e = attachment.element;

			// Permanent or already detached? Bail.
			if (attachment.permanent || !e.parentNode || e.parentNode && !e.parentNode.tagName) return false;

			// Detach.
			e.parentNode.removeChild(e);

			return true;
		},

		/**
   * Detaches all attachments.
   * @param {object} exclude A list of attachments to exclude.
   */
		detachAll: function detachAll(exclude) {

			var l = {};

			// Build exclusion list (for faster lookups).
			_.iterate(exclude, function (k) {
				l[exclude[k].id] = true;
			});

			_.iterate(_.obj.attachments, function (id) {

				// In our exclusion list? Bail.
				if (id in l) return;

				// Attempt to detach.
				_.detach(_.obj.attachments[id]);
			});
		},

		attachment: function attachment(id) {
			return id in _.obj.attachments ? _.obj.attachments[id] : null;
		},

		/**
   * Creates a new attachment.
   * @param {string} id ID.
   * @param {DOMElement} element DOM element.
   */
		newAttachment: function newAttachment(id, element, priority, permanent) {

			return _.obj.attachments[id] = {
				id: id,
				element: element,
				priority: priority,
				permanent: permanent
			};
		},

		/******************************/
		/* Methods: Init              */
		/******************************/

		/**
   * Initializes skel.
   * This has to be explicitly called by the user.
   */
		init: function init() {

			// Initialize stuff.
			_.initMethods();
			_.initVars();
			_.initEvents();

			// Tmp.
			_.obj.head = document.getElementsByTagName('head')[0];

			// Mark as initialized.
			_.isInit = true;

			// Trigger init event.
			_.trigger('init');

			console.log('[skel] initialized.');
		},

		/**
   * Initializes browser events.
   */
		initEvents: function initEvents() {

			// On resize.
			_.on('resize', function () {
				_.poll();
			});

			// On orientation change.
			_.on('orientationChange', function () {
				_.poll();
			});

			// Wrap "ready" event.
			_.DOMReady(function () {
				_.trigger('ready');
			});

			// Non-destructively register skel events to window.

			// Load.
			if (window.onload) _.on('load', window.onload);

			window.onload = function () {
				_.trigger('load');
			};

			// Resize.
			if (window.onresize) _.on('resize', window.onresize);

			window.onresize = function () {
				_.trigger('resize');
			};

			// Orientation change.
			if (window.onorientationchange) _.on('orientationChange', window.onorientationchange);

			window.onorientationchange = function () {
				_.trigger('orientationChange');
			};
		},

		/**
   * Initializes methods.
   */
		initMethods: function initMethods() {

			// _.DOMReady (based on github.com/ded/domready by @ded; domready (c) Dustin Diaz 2014 - License MIT)

			// Hack: Use older version for browsers that don't support addEventListener (*cough* IE8).
			if (!document.addEventListener) !(function (e, t) {
				_.DOMReady = t();
			})("domready", function (e) {
				function p(e) {
					h = 1;while (e = t.shift()) e();
				}var t = [],
				    n,
				    r = !1,
				    i = document,
				    s = i.documentElement,
				    o = s.doScroll,
				    u = "DOMContentLoaded",
				    a = "addEventListener",
				    f = "onreadystatechange",
				    l = "readyState",
				    c = o ? /^loaded|^c/ : /^loaded|c/,
				    h = c.test(i[l]);return i[a] && i[a](u, n = function () {
					i.removeEventListener(u, n, r), p();
				}, r), o && i.attachEvent(f, n = function () {
					/^c/.test(i[l]) && (i.detachEvent(f, n), p());
				}), e = o ? function (n) {
					self != top ? h ? n() : t.push(n) : (function () {
						try {
							s.doScroll("left");
						} catch (t) {
							return setTimeout(function () {
								e(n);
							}, 50);
						}n();
					})();
				} : function (e) {
					h ? e() : t.push(e);
				};
			});
			// And everyone else.
			else !(function (e, t) {
					_.DOMReady = t();
				})("domready", function () {
					function s(t) {
						i = 1;while (t = e.shift()) t();
					}var e = [],
					    t,
					    n = document,
					    r = "DOMContentLoaded",
					    i = /^loaded|^c/.test(n.readyState);return n.addEventListener(r, t = function () {
						n.removeEventListener(r, t), s();
					}), function (t) {
						i ? t() : e.push(t);
					};
				});

			// _.indexOf

			// Wrap existing method if it exists.
			if (Array.prototype.indexOf) _.indexOf = function (x, b) {
				return x.indexOf(b);
			};

			// Otherwise, polyfill.
			else _.indexOf = function (x, b) {
					if (typeof x == 'string') return x.indexOf(b);var c,
					    a = b ? b : 0,
					    e;if (!this) {
						throw new TypeError();
					}e = this.length;if (e === 0 || a >= e) {
						return -1;
					}if (a < 0) {
						a = e - Math.abs(a);
					}for (c = a; c < e; c++) {
						if (this[c] === x) {
							return c;
						}
					}return -1;
				};

			// _.isArray

			// Wrap existing method if it exists.
			if (Array.isArray) _.isArray = function (x) {
				return Array.isArray(x);
			};

			// Otherwise, polyfill.
			else _.isArray = function (x) {
					return Object.prototype.toString.call(x) === '[object Array]';
				};

			// _.iterate

			// Use Object.keys if it exists (= better performance).
			if (Object.keys) _.iterate = function (a, f) {

				if (!a) return [];

				var i,
				    k = Object.keys(a);

				for (i = 0; k[i]; i++) {

					if (f(k[i], a[k[i]]) === false) break;
				}
			};

			// Otherwise, fall back on hasOwnProperty (= slower, but works on older browsers).
			else _.iterate = function (a, f) {

					if (!a) return [];

					var i;

					for (i in a) if (Object.prototype.hasOwnProperty.call(a, i)) {

						if (f(i, a[i]) === false) break;
					}
				};

			// _.matchesMedia

			// Default: Use matchMedia (all modern browsers)
			if (window.matchMedia) _.matchesMedia = function (query) {

				if (query == '') return true;

				return window.matchMedia(query).matches;
			};

			// Polyfill 1: Use styleMedia/media (IE9, older Webkit) (derived from github.com/paulirish/matchMedia.js)
			else if (window.styleMedia || window.media) _.matchesMedia = function (query) {

					if (query == '') return true;

					var styleMedia = window.styleMedia || window.media;

					return styleMedia.matchMedium(query || 'all');
				};

				// Polyfill 2: Use getComputed Style (???) (derived from github.com/paulirish/matchMedia.js)
				else if (window.getComputedStyle) _.matchesMedia = function (query) {

						if (query == '') return true;

						var style = document.createElement('style'),
						    script = document.getElementsByTagName('script')[0],
						    info = null;

						style.type = 'text/css';
						style.id = 'matchmediajs-test';
						script.parentNode.insertBefore(style, script);
						info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;

						var text = '@media ' + query + '{ #matchmediajs-test { width: 1px; } }';

						if (style.styleSheet) style.styleSheet.cssText = text;else style.textContent = text;

						return info.width === '1px';
					};

					// Polyfill 3: Manually parse (IE<9)
					else _.matchesMedia = function (query) {

							// Empty query? Always succeed.
							if (query == '') return true;

							// Parse query.
							var k,
							    s,
							    a,
							    b,
							    values = { 'min-width': null, 'max-width': null },
							    found = false;

							a = query.split(/\s+and\s+/);

							for (k = 0; k < a.length; k++) {

								s = a[k];

								// Operator (key: value)
								if (s.charAt(0) == '(') {

									s = s.substring(1, s.length - 1);
									b = s.split(/:\s+/);

									if (b.length == 2) {

										values[b[0].replace(/^\s+|\s+$/g, '')] = parseInt(b[1]);
										found = true;
									}
								}
							}

							// No matches? Query likely contained something unsupported so we automatically fail.
							if (!found) return false;

							// Check against viewport.
							var w = document.documentElement.clientWidth,
							    h = document.documentElement.clientHeight;

							if (values['min-width'] !== null && w < values['min-width'] || values['max-width'] !== null && w > values['max-width'] || values['min-height'] !== null && h < values['min-height'] || values['max-height'] !== null && h > values['max-height']) return false;

							return true;
						};

			// _.newStyle

			// IE<9 fix.
			if (navigator.userAgent.match(/MSIE ([0-9]+)/) && RegExp.$1 < 9) _.newStyle = function (content) {

				var e = document.createElement('span');
				e.innerHTML = '&nbsp;<style type="text/css">' + content + '</style>';

				return e;
			};
		},

		/**
   * Initializes the vars.
   */
		initVars: function initVars() {

			var x,
			    y,
			    a,
			    ua = navigator.userAgent;

			// browser, browserVersion.
			x = 'other';
			y = 0;
			a = [['firefox', /Firefox\/([0-9\.]+)/], ['bb', /BlackBerry.+Version\/([0-9\.]+)/], ['bb', /BB[0-9]+.+Version\/([0-9\.]+)/], ['opera', /OPR\/([0-9\.]+)/], ['opera', /Opera\/([0-9\.]+)/], ['edge', /Edge\/([0-9\.]+)/], ['safari', /Version\/([0-9\.]+).+Safari/], ['chrome', /Chrome\/([0-9\.]+)/], ['ie', /MSIE ([0-9]+)/], ['ie', /Trident\/.+rv:([0-9]+)/]];

			_.iterate(a, function (k, v) {

				if (ua.match(v[1])) {

					x = v[0];
					y = parseFloat(RegExp.$1);

					return false;
				}
			});

			_.vars.browser = x;
			_.vars.browserVersion = y;

			// os, osVersion.
			x = 'other';
			y = 0;
			a = [['ios', /([0-9_]+) like Mac OS X/, function (v) {
				return v.replace('_', '.').replace('_', '');
			}], ['ios', /CPU like Mac OS X/, function (v) {
				return 0;
			}], ['wp', /Windows Phone ([0-9\.]+)/, null], ['android', /Android ([0-9\.]+)/, null], ['mac', /Macintosh.+Mac OS X ([0-9_]+)/, function (v) {
				return v.replace('_', '.').replace('_', '');
			}], ['windows', /Windows NT ([0-9\.]+)/, null], ['bb', /BlackBerry.+Version\/([0-9\.]+)/, null], ['bb', /BB[0-9]+.+Version\/([0-9\.]+)/, null]];

			_.iterate(a, function (k, v) {

				if (ua.match(v[1])) {

					x = v[0];
					y = parseFloat(v[2] ? v[2](RegExp.$1) : RegExp.$1);

					return false;
				}
			});

			_.vars.os = x;
			_.vars.osVersion = y;

			// IEVersion.
			_.vars.IEVersion = _.vars.browser == 'ie' ? _.vars.browserVersion : 99;

			// touch.
			_.vars.touch = _.vars.os == 'wp' ? navigator.msMaxTouchPoints > 0 : !!('ontouchstart' in window);

			// mobile.
			_.vars.mobile = _.vars.os == 'wp' || _.vars.os == 'android' || _.vars.os == 'ios' || _.vars.os == 'bb';
		}

	};_.init();return _;
})();

// UMD Wrapper (github.com/umdjs/umd/blob/master/returnExports.js | @umdjs + @nason)
(function (root, factory) {

	// AMD.
	if (typeof define === 'function' && define.amd) define([], factory);

	// Node.
	else if (typeof exports === 'object') module.exports = factory();

		// Browser global.
		else root.skel = factory();
})(undefined, function () {
	return skel;
});


/* skel-viewport.js v3.0.1 | (c) skel.io | MIT licensed */

'use strict';

(function (_) {
            "use strict";var __ = {

                        /******************************/
                        /* Properties                 */
                        /******************************/

                        /**
                         * Default config.
                         * @type {object}
                         */
                        config: {

                                    // Width.
                                    width: 'device-width',

                                    // Height.
                                    height: '',

                                    // Scalable?
                                    scalable: true,

                                    // Breakpoints.
                                    breakpoints: {}

                        },

                        /******************************/
                        /* Methods                    */
                        /******************************/

                        /**
                         * Initializes Viewport module.
                         * @param {object} config Config.
                         */
                        init: function init(config) {

                                    // Extend with user config.
                                    _.extend(__.config, config);

                                    // Add state handler.
                                    _.addStateHandler('viewport', __.stateHandler);

                                    // Add initial <meta> element.
                                    _.attach(_.newAttachment('mv', __.newViewportMeta('initial-scale=1'), 1, true));

                                    // Hack: IE viewport fix.
                                    if (_.vars.browser == 'ie' && _.vars.IEVersion >= 10) {

                                                // Add <style> element for -ms-viewport.
                                                _.attach(_.newAttachment('mVie', _.newStyle('@-ms-viewport{width:device-width}'), 1, true));

                                                // Force browser to accept new viewport.
                                                window.setTimeout(function () {

                                                            var body = document.getElementsByTagName('body')[0],
                                                                h = body.style.height;

                                                            body.style.height = '10000px';

                                                            window.setTimeout(function () {
                                                                        body.style.height = h;
                                                            }, 250);
                                                }, 250);
                                    }

                                    return _;
                        },

                        /**
                         * Creates a new viewport <meta> element.
                         * @param {string} content Content.
                         * @return {DOMElement} Viewport <meta> element.
                         */
                        newViewportMeta: function newViewportMeta(content) {

                                    var e = document.createElement('meta');
                                    e.name = 'viewport';
                                    e.content = content;

                                    return e;
                        },

                        /**
                         * State handler.
                         * @return {array} Attachments.
                         */
                        stateHandler: function stateHandler() {

                                    var attachment, config, a;

                                    // Generate state config.
                                    config = _.generateStateConfig({
                                                width: __.config.width,
                                                height: __.config.height,
                                                scalable: __.config.scalable
                                    }, __.config.breakpoints);

                                    // Create <meta> element attachment.

                                    // Content.
                                    a = [];

                                    // Scalable.
                                    a.push('user-scalable=' + (config.scalable ? 'yes' : 'no'));

                                    // Width.
                                    if (config.width) a.push('width=' + config.width);

                                    // Height.
                                    if (config.height) a.push('height=' + config.height);

                                    // Set initial scale if we're using device-width.
                                    if (config.width == 'device-width') a.push('initial-scale=1');

                                    // Attachment.
                                    attachment = _.newAttachment('mv-' + _.stateId, __.newViewportMeta(a.join(',')), 1);

                                    return [attachment];
                        }

            };_.viewport = __.init;
})(skel);


/* skel-layout.js v3.0.1 | (c) skel.io | MIT licensed */

'use strict';

(function (_) {
            "use strict";var __ = {

                        /******************************/
                        /* Properties                 */
                        /******************************/

                        /**
                         * Default config.
                         * @type {object}
                         */
                        config: {

                                    // Breakpoints.
                                    breakpoints: {},

                                    // Box model (false = don't apply a box model).
                                    boxModel: false,

                                    // Conditionals.
                                    conditionals: false,

                                    // Width of container elements (N, 'Npx', 'Nem', etc).
                                    containers: false,

                                    // Grid.
                                    grid: false,

                                    // Stylesheet.
                                    href: false,

                                    // Reset mode (false = don't reset, 'normalize' = normalize.css, 'full' = Eric Meyer's resets).
                                    reset: false

                        },

                        /**
                         * CSS code (normalize, reset).
                         * @type {object}
                         */
                        css: {

                                    // Box model.
                                    bm: '*,*:before,*:after{-moz-box-sizing:&-box;-webkit-box-sizing:&-box;box-sizing:&-box}',

                                    // Normalize.
                                    // normalize.css v3.0.2 | MIT License | git.io/normalize
                                    n: 'html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}',

                                    // Reset.
                                    // http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126 | License: none (public domain)
                                    r: 'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:\'\';content:none}table{border-collapse:collapse;border-spacing:0}body{-webkit-text-size-adjust:none}',

                                    // Grid cells.
                                    gc: function gc(x) {
                                                return '.\\31 2u' + x + ',.\\31 2u\\24' + x + '{width:100%;clear:none;margin-left:0}' + '.\\31 1u' + x + ',.\\31 1u\\24' + x + '{width:91.6666666667%;clear:none;margin-left:0}' + '.\\31 0u' + x + ',.\\31 0u\\24' + x + '{width:83.3333333333%;clear:none;margin-left:0}' + '.\\39 u' + x + ',.\\39 u\\24' + x + '{width:75%;clear:none;margin-left:0}' + '.\\38 u' + x + ',.\\38 u\\24' + x + '{width:66.6666666667%;clear:none;margin-left:0}' + '.\\37 u' + x + ',.\\37 u\\24' + x + '{width:58.3333333333%;clear:none;margin-left:0}' + '.\\36 u' + x + ',.\\36 u\\24' + x + '{width:50%;clear:none;margin-left:0}' + '.\\35 u' + x + ',.\\35 u\\24' + x + '{width:41.6666666667%;clear:none;margin-left:0}' + '.\\34 u' + x + ',.\\34 u\\24' + x + '{width:33.3333333333%;clear:none;margin-left:0}' + '.\\33 u' + x + ',.\\33 u\\24' + x + '{width:25%;clear:none;margin-left:0}' + '.\\32 u' + x + ',.\\32 u\\24' + x + '{width:16.6666666667%;clear:none;margin-left:0}' + '.\\31 u' + x + ',.\\31 u\\24' + x + '{width:8.3333333333%;clear:none;margin-left:0}' + '.\\31 2u\\24' + x + '+*,' + '.\\31 1u\\24' + x + '+*,' + '.\\31 0u\\24' + x + '+*,' + '.\\39 u\\24' + x + '+*,' + '.\\38 u\\24' + x + '+*,' + '.\\37 u\\24' + x + '+*,' + '.\\36 u\\24' + x + '+*,' + '.\\35 u\\24' + x + '+*,' + '.\\34 u\\24' + x + '+*,' + '.\\33 u\\24' + x + '+*,' + '.\\32 u\\24' + x + '+*,' + '.\\31 u\\24' + x + '+*{' + 'clear:left;' + '}' + '.\\-11u' + x + '{margin-left:91.6666666667%}' + '.\\-10u' + x + '{margin-left:83.3333333333%}' + '.\\-9u' + x + '{margin-left:75%}' + '.\\-8u' + x + '{margin-left:66.6666666667%}' + '.\\-7u' + x + '{margin-left:58.3333333333%}' + '.\\-6u' + x + '{margin-left:50%}' + '.\\-5u' + x + '{margin-left:41.6666666667%}' + '.\\-4u' + x + '{margin-left:33.3333333333%}' + '.\\-3u' + x + '{margin-left:25%}' + '.\\-2u' + x + '{margin-left:16.6666666667%}' + '.\\-1u' + x + '{margin-left:8.3333333333%}';
                                    }

                        },

                        /**
                         * Grid responsive level map.
                         * @type object
                         */
                        gridLevelMap: { k: {}, v: {} },

                        /**
                         * Maximum grid responsive level.
                         * @type integer
                         */
                        gridLevelMax: 1,

                        /**
                         * State config cache.
                         * @type object
                         */
                        stateConfigs: {},

                        /******************************/
                        /* Methods                    */
                        /******************************/

                        /**
                         * Applies grid transforms.
                         */
                        applyGridTransforms: function applyGridTransforms() {

                                    var config = __.stateConfigs[_.stateId];

                                    // Shifts cells marked as "important" to the front of their respective rows.
                                    var key = '_skel_important',
                                        cells = [],
                                        i,
                                        a;

                                    // Get "important" cells.

                                    // Via responsive level.
                                    for (i = 1; i <= __.gridLevelMax; i++) {

                                                a = document.querySelectorAll('.important\\28 ' + __.gridLevelMap.k[i] + '\\29');

                                                _.iterate(a, function (k) {
                                                            cells.push(a[k]);
                                                });
                                    }

                                    // Step through cells.
                                    _.iterate(cells, function (i) {

                                                // Just in case.
                                                if (i === 'length') return;

                                                var cell = cells[i],
                                                    parent = cell.parentNode,
                                                    placeholder,
                                                    mode = false,
                                                    k,
                                                    l;

                                                // No parent? Bail.
                                                if (!parent) return;

                                                // Not moved? Move it.
                                                if (!Object.prototype.hasOwnProperty.call(cell, key) || cell[key] === false) {

                                                            // Determine mode.

                                                            // Responsive level?
                                                            if (cell.className.match(/important\((.+)\)/) && (l = parseInt(__.gridLevelMap.v[RegExp.$1])) <= config.grid.level) mode = 'l';

                                                            // No valid mode? Bail.
                                                            if (!mode) return;

                                                            // Get placeholder node (which will serve as our point of reference for when this cell needs to move back).
                                                            k = 'previousSibling';

                                                            placeholder = cell[k];

                                                            while (placeholder && placeholder.nodeName == '#text') placeholder = placeholder[k];

                                                            // Couldn't find anything? Means this cell's already at the front, so bail.
                                                            if (!placeholder) return;

                                                            // Move cell to front.
                                                            console.log('[skel-layout] important: moving to front of row (' + i + ')');

                                                            parent.insertBefore(cell, parent.firstChild);

                                                            // Mark cell as moved.
                                                            cell[key] = {
                                                                        placeholder: placeholder,
                                                                        mode: mode,
                                                                        level: l
                                                            };
                                                }

                                                // Moved already?
                                                else {

                                                                        placeholder = cell[key].placeholder;
                                                                        mode = cell[key].mode;

                                                                        // Cell doesn't need to move? Bail.
                                                                        if (mode == 'l' && cell[key].level <= config.grid.level) return;

                                                                        // Move cell back to its original location (using our placeholder).
                                                                        console.log('[skel-layout] important: moving back (' + i + ')');

                                                                        parent.insertBefore(cell, placeholder.nextSibling);

                                                                        // Unmark cell as moved.
                                                                        cell[key] = false;
                                                            }
                                    });
                        },

                        /**
                         * Initializes layout module.
                         * @param {object} config Config.
                         */
                        init: function init(config) {

                                    // Extend with user config.
                                    _.extend(__.config, config);

                                    // Add state handler.
                                    _.addStateHandler('layout', __.stateHandler);

                                    // Reorder (and, if necessary, fill out) breakpoints.
                                    var c = {};

                                    _.iterate(_.obj.breakpoints, function (id) {

                                                c[id] = {};

                                                if (id in __.config.breakpoints) _.extend(c[id], __.config.breakpoints[id]);
                                    });

                                    __.config.breakpoints = c;

                                    // Containers.
                                    if (__.config.containers) {

                                                // Apply defaults if value is just 'true'.
                                                if (__.config.containers === true) __.config.containers = 960;
                                    }

                                    // Grid.
                                    if (__.config.grid) {

                                                // Apply defaults if value is just 'true'.
                                                if (__.config.grid === true) __.config.grid = {

                                                            // Responsive level.
                                                            level: 1,

                                                            // Size of column gutters (N, 'Npx', 'Nem', etc).
                                                            // Use [column, row] to set both column and row gutters.
                                                            gutters: 40

                                                };

                                                // Assign responsive levels.
                                                _.iterate(__.config.breakpoints, function (id) {

                                                            var c = __.config.breakpoints[id];

                                                            __.gridLevelMax++;

                                                            if (!('grid' in c)) c.grid = {};

                                                            // Set responsive level.
                                                            c.grid.level = __.gridLevelMax;

                                                            // Update map (breakpoint ID => responsive level)
                                                            __.gridLevelMap.k[__.gridLevelMax] = id;
                                                            __.gridLevelMap.v[id] = __.gridLevelMax;
                                                });

                                                // Set up change event.
                                                _.on('change', function () {
                                                            __.applyGridTransforms();
                                                });
                                    }

                                    // STYLE: Base CSS.
                                    var s = '';

                                    // Reset.
                                    switch (__.config.reset) {

                                                case 'full':
                                                            s += __.css.r;
                                                            break;

                                                case 'normalize':
                                                            s += __.css.n;
                                                            break;

                                    }

                                    // Box model.
                                    if (__.config.boxModel) s += __.css.bm.split('&').join(__.config.boxModel);

                                    // Grid.
                                    if (__.config.grid) s += '.row{border-bottom:solid 1px transparent;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}' + '.row>*{float:left;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}' + '.row:after,.row:before{content:"";display:block;clear:both;height:0}' + '.row.uniform>*>:first-child{margin-top:0}' + '.row.uniform>*>:last-child{margin-bottom:0}' + __.css.gc('');

                                    // Create and attach a <style> element if we actually have stuff to put in it.
                                    if (s != '') _.attach(_.newAttachment('sB', _.newStyle(s), 2, true));

                                    // STYLESHEET: Base.
                                    if (__.config.href) _.attach(_.newAttachment('ss', __.newStyleSheet(__.config.href), 3, true));

                                    return _;
                        },

                        /**
                         * Creates a new stylesheet <link> element.
                         * @param {string} href Href.
                         * @return {DOMElement} Viewport <meta> element.
                         */
                        newStyleSheet: function newStyleSheet(href) {

                                    var e = document.createElement('link');
                                    e.rel = 'stylesheet';
                                    e.type = 'text/css';
                                    e.href = href;

                                    return e;
                        },

                        /**
                         * Parses a CSS measurement string (eg. 960, '960px', '313.37em') and splits it into its numeric and unit parts.
                         * @param {string} x CSS measurement.
                         * @return {Array} Results, where element 0 = (float) numeric part, and 1 = (string) unit part.
                         */
                        parseMeasurement: function parseMeasurement(x) {

                                    var a, tmp;

                                    // Not a string? Just assume it's in px.
                                    if (typeof x !== 'string') a = [x, 'px'];

                                    // Fluid shortcut?
                                    else if (x == 'fluid') a = [100, '%'];

                                                // Okay, hard way it is ...
                                                else {

                                                                        var tmp;

                                                                        tmp = x.match(/([0-9\.]+)([^\s]*)/);

                                                                        // Missing units? Assume it's in px.
                                                                        if (tmp.length < 3 || !tmp[2]) a = [parseFloat(x), 'px'];

                                                                        // Otherwise, we have a winrar.
                                                                        else a = [parseFloat(tmp[1]), tmp[2]];
                                                            }

                                    return a;
                        },

                        /**
                         * State handler.
                         * @return {array} Attachments.
                         */
                        stateHandler: function stateHandler() {

                                    var config,
                                        attachments = [],
                                        a,
                                        i,
                                        x,
                                        id,
                                        s,
                                        s1,
                                        s2,
                                        C,
                                        Cu,
                                        R,
                                        Ru;

                                    // Generate state config.
                                    config = _.generateStateConfig({
                                                containers: __.config.containers,
                                                grid: __.config.grid
                                    }, __.config.breakpoints);

                                    // Expand gutters if it's not already an array.
                                    if (__.config.grid && 'gutters' in config.grid && !_.isArray(config.grid.gutters)) config.grid.gutters = [config.grid.gutters, 0];

                                    // STYLE: Containers.
                                    if (__.config.containers) {

                                                var CLocked = false;

                                                // Split "containers" into width and units.
                                                a = __.parseMeasurement(config.containers);
                                                C = a[0];
                                                Cu = a[1];

                                                // Set id.
                                                id = 'sC-' + C + Cu;

                                                // Locked?
                                                if (Cu.substr(-1) == '!') {

                                                            CLocked = true;
                                                            Cu = Cu.substr(0, Cu.length - 1);
                                                }

                                                if (!(x = _.attachment(id))) {

                                                            x = _.newAttachment(id, _.newStyle('.container{margin-left:auto;margin-right:auto;width:' + C * 1 + Cu + (CLocked ? '!important;' + 'max-width:none!important;' + 'min-width:0!important' + '}' : '}' + '.container.\\31 25\\25{width:100%;max-width:' + C * 1.25 + Cu + ';min-width:' + C + Cu + '}' + '.container.\\37 5\\25{width:' + C * 0.75 + Cu + '}' + '.container.\\35 0\\25{width:' + C * 0.5 + Cu + '}' + '.container.\\32 5\\25{width:' + C * 0.25 + Cu + '}')), 2);
                                                }

                                                attachments.push(x);
                                    }

                                    // STYLE: Grid.
                                    if (__.config.grid) {

                                                // Gutters.
                                                id = 'sG-' + config.grid.gutters[0] + '-' + config.grid.gutters[1];

                                                if (!(x = _.attachment(id))) {

                                                            // Column gutters.

                                                            // Split into size and units.
                                                            a = __.parseMeasurement(config.grid.gutters[0]);
                                                            C = a[0];
                                                            Cu = a[1];

                                                            // Row gutters.

                                                            // Split into size and units.
                                                            a = __.parseMeasurement(config.grid.gutters[1]);
                                                            R = a[0];
                                                            Ru = a[1];

                                                            // Build attachment.
                                                            x = _.newAttachment(id, _.newStyle(

                                                            // Normal.
                                                            '.row>*{padding:' + R * 1 + Ru + ' 0 0 ' + C * 1 + Cu + '}' + '.row{margin:' + R * -1 + Ru + ' 0 -1px ' + C * -1 + Cu + '}' + '.row.uniform>*{padding:' + C * 1 + Cu + ' 0 0 ' + C * 1 + Cu + '}' + '.row.uniform{margin:' + C * -1 + Cu + ' 0 -1px ' + C * -1 + Cu + '}' +

                                                            // 200%
                                                            '.row.\\32 00\\25>*{padding:' + R * 2 + Ru + ' 0 0 ' + C * 2 + Cu + '}' + '.row.\\32 00\\25{margin:' + R * -2 + Ru + ' 0 -1px ' + C * -2 + Cu + '}' + '.row.uniform.\\32 00\\25>*{padding:' + C * 2 + Cu + ' 0 0 ' + C * 2 + Cu + '}' + '.row.uniform.\\32 00\\25{margin:' + C * -2 + Cu + ' 0 -1px ' + C * -2 + Cu + '}' +

                                                            // 150%
                                                            '.row.\\31 50\\25>*{padding:' + R * 1.5 + Ru + ' 0 0 ' + C * 1.5 + Cu + '}' + '.row.\\31 50\\25{margin:' + R * -1.5 + Ru + ' 0 -1px ' + C * -1.5 + Cu + '}' + '.row.uniform.\\31 50\\25>*{padding:' + C * 1.5 + Cu + ' 0 0 ' + C * 1.5 + Cu + '}' + '.row.uniform.\\31 50\\25{margin:' + C * -1.5 + Cu + ' 0 -1px ' + C * -1.5 + Cu + '}' +

                                                            // 50%
                                                            '.row.\\35 0\\25>*{padding:' + R * 0.5 + Ru + ' 0 0 ' + C * 0.5 + Cu + '}' + '.row.\\35 0\\25{margin:' + R * -0.5 + Ru + ' 0 -1px ' + C * -0.5 + Cu + '}' + '.row.uniform.\\35 0\\25>*{padding:' + C * 0.5 + Cu + ' 0 0 ' + C * 0.5 + Cu + '}' + '.row.uniform.\\35 0\\25{margin:' + C * -0.5 + Cu + ' 0 -1px ' + C * -0.5 + Cu + '}' +

                                                            // 25%
                                                            '.row.\\32 5\\25>*{padding:' + R * 0.25 + Ru + ' 0 0 ' + C * 0.25 + Cu + '}' + '.row.\\32 5\\25{margin:' + R * -0.25 + Ru + ' 0 -1px ' + C * -0.25 + Cu + '}' + '.row.uniform.\\32 5\\25>*{padding:' + C * 0.25 + Cu + ' 0 0 ' + C * 0.25 + Cu + '}' + '.row.uniform.\\32 5\\25{margin:' + C * -0.25 + Cu + ' 0 -1px ' + C * -0.25 + Cu + '}' +

                                                            // 0%
                                                            '.row.\\30 \\25>*{padding:0}' + '.row.\\30 \\25{margin:0 0 -1px 0}'), 3);
                                                }

                                                attachments.push(x);

                                                // Responsive.
                                                if (config.grid.level > 1) {

                                                            id = 'sgR-' + config.grid.level;

                                                            if (!(x = _.attachment(id))) {

                                                                        // Generate CSS.
                                                                        s1 = '';

                                                                        for (i = 2; i <= config.grid.level; i++) s1 += __.css.gc('\\28 ' + __.gridLevelMap.k[i] + '\\29');

                                                                        // Build attachment.
                                                                        x = _.newAttachment(id, _.newStyle(s1), 4);
                                                            }

                                                            attachments.push(x);
                                                }
                                    }

                                    // STYLE: Conditionals.
                                    if (__.config.conditionals) {

                                                id = 'sCd-' + _.stateId;

                                                if (!(x = _.attachment(id))) {

                                                            s1 = [];
                                                            s2 = [];

                                                            _.iterate(_.obj.breakpoints, function (k) {

                                                                        if (_.indexOf(_.breakpointIds, k) !== -1) s1.push('.not-' + k);else s2.push('.only-' + k);
                                                            });

                                                            s = (s1.length > 0 ? s1.join(',') + '{display:none!important}' : '') + (s2.length > 0 ? s2.join(',') + '{display:none!important}' : '');

                                                            x = _.newAttachment(id, _.newStyle(s.replace(/\.([0-9])/, '.\\3$1 ')), 5);
                                                }

                                                attachments.push(x);
                                    }

                                    // STYLESHEETS: Per-breakpoint stylesheets.
                                    i = 6;
                                    a = _.breakpointIds;

                                    _.iterate(a, function (k) {

                                                if (a[k] in __.config.breakpoints && __.config.breakpoints[a[k]].href) {

                                                            id = 'ss-' + a[k] + '-' + _.stateId;

                                                            if (!(x = _.attachment(id))) x = _.newAttachment(id, __.newStyleSheet(__.config.breakpoints[a[k]].href), i++);

                                                            attachments.push(x);
                                                }
                                    });

                                    // Cache state config.
                                    __.stateConfigs[_.stateId] = config;

                                    return attachments;
                        }

            };_.layout = __.init;
})(skel);


/*
Spectral by HTML5 UP
html5up.net | @n33co
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

'use strict';

(function ($) {

    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function () {

        var $window = $(window),
            $body = $('body'),
            $wrapper = $('#page-wrapper'),
            $banner = $('#banner'),
            $header = $('#header');

        /*
        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');
          $window.on('load', function () {
            window.setTimeout(function () {
                $body.removeClass('is-loading');
            }, 250);
        });
        */

        // Mobile?
        if (skel.vars.isMobile) $body.addClass('is-mobile');else skel.on('-medium !medium', function () {
            $body.removeClass('is-mobile');
        }).on('+medium', function () {
            $body.addClass('is-mobile');
        });

        // Scrolly.
        $('.scrolly').scrolly({
            speed: 1500,
            offset: $header.outerHeight()
        });

        // Menu.
        var $menu = $('#menu'),
            $menuClose = $('<a class="close">').appendTo($menu),
            $menuToggle = $('.menuToggle');

        // Move to end of body.
        $menu.appendTo($body);

        // Close.
        $menuClose.on('click touchend', function (event) {

            event.preventDefault();
            event.stopPropagation();

            $body.removeClass('is-menu-visible');
        });

        // Toggle.
        $menuToggle.on('click touchend', function (event) {

            event.preventDefault();
            event.stopPropagation();

            $body.toggleClass('is-menu-visible');
        });

        // Wrapper.
        $wrapper.on('click touchend', function (event) {

            if ($body.hasClass('is-menu-visible')) {

                event.preventDefault();
                event.stopPropagation();

                $body.removeClass('is-menu-visible');
            }
        });

        // Header.
        if (skel.vars.IEVersion < 9) $header.removeClass('alt');

        if ($banner.length > 0 && $header.hasClass('alt')) {
            $window.on('resize', function () {
                $window.trigger('scroll');
            });

            $banner.scrollex({
                bottom: $header.outerHeight() + 1,
                terminate: function terminate() {
                    $header.removeClass('alt');
                },
                enter: function enter() {
                    $header.addClass('alt');
                },
                leave: function leave() {
                    $header.removeClass('alt');
                }
            });
        }
    });
})(jQuery);


/* global.js */

"use strict";

(function ($) {

    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            var expires = "; expires=" + date.toGMTString();
        } else var expires = "";

        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name, "", -1);
    }

    // read value from querystring
    var vars = [],
        hash;

    var q = document.URL.split('?')[1];
    if (q != undefined) {
        q = q.split('&');
        for (var i = 0; i < q.length; i++) {
            hash = q[i].split('=');
            vars.push(hash[1]);
            vars[hash[0]] = hash[1];
        }
    }

    $('.tooltipster').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-punk',
        contentAsHTML: true,
        maxWidth: 560,
        trigger: 'click',
        interactive: true
    });

    $('ul.tooltip_ul li:even').addClass('even');

    $('ul.tooltip_ul li:odd').addClass('odd');
})(jQuery);