/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(C, e) { "use strict"; var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) { return t.flat.call(e) } : function(e) { return t.concat.apply([], e) },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
        x = function(e) { return null != e && e === e.window },
        E = C.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function b(e, t, n) { var r, i, o = (n = n || E).createElement("script"); if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o) }

    function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e } var f = "3.5.1",
        S = function(e, t) { return new S.fn.init(e, t) };

    function p(e) { var t = !!e && "length" in e && e.length,
            n = w(e); return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e) }
    S.fn = S.prototype = { jquery: f, constructor: S, length: 0, toArray: function() { return s.call(this) }, get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function(e) { var t = S.merge(this.constructor(), e); return t.prevObject = this, t }, each: function(e) { return S.each(this, e) }, map: function(n) { return this.pushStack(S.map(this, function(e, t) { return n.call(e, t, e) })) }, slice: function() { return this.pushStack(s.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, even: function() { return this.pushStack(S.grep(this, function(e, t) { return (t + 1) % 2 })) }, odd: function() { return this.pushStack(S.grep(this, function(e, t) { return t % 2 })) }, eq: function(e) { var t = this.length,
                n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: u, sort: t.sort, splice: t.splice }, S.extend = S.fn.extend = function() { var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a }, S.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) { throw new Error(e) }, noop: function() {}, isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l) }, isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 }, globalEval: function(e, t, n) { b(e, { nonce: t && t.nonce }, n) }, each: function(e, t) { var n, r = 0; if (p(e)) { for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e }, makeArray: function(e, t) { var n = t || []; return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n }, inArray: function(e, t, n) { return null == t ? -1 : i.call(t, e, n) }, merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e }, grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r }, map: function(e, t, n) { var r, i, o = 0,
                a = []; if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i); return g(a) }, guid: 1, support: y }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() }); var d = function(n) { var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = function(e, t) { return e === t && (l = !0), 0 },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) { for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1 },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            oe = function() { T() },
            ae = be(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" }); try { H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType } catch (e) { H = { apply: t.length ? function(e, t) { L.apply(e, O.call(t)) } : function(e, t) { var n = e.length,
                        r = 0; while (e[n++] = t[r++]);
                    e.length = n - 1 } } }

        function se(t, e, n, r) { var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9; if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n; if (!r && (T(e), e = e || C, E)) { if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) { if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length; while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",") } try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { N(t, !0) } finally { s === S && e.removeAttribute("id") } } } return g(t.replace($, "$1"), e, n, r) }

        function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } }

        function le(e) { return e[S] = !0, e }

        function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function fe(e, t) { var n = e.split("|"),
                r = n.length; while (r--) b.attrHandle[n[r]] = t }

        function pe(e, t) { var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) return r; if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1 }

        function de(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function he(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

        function ge(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function ve(a) { return le(function(o) { return o = +o, le(function(e, t) { var n, r = a([], e.length, o),
                        i = r.length; while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n])) }) }) }

        function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e } for (e in d = se.support = {}, i = se.isXML = function(e) { var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement; return !Y.test(t || n && n.nodeName || "HTML") }, T = se.setDocument = function(e) { var t, n, r = e ? e.ownerDocument || e : p; return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) { return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length }), d.attributes = ce(function(e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function(e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) { return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length }), d.getById ? (b.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { return e.getAttribute("id") === t } }, b.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function(e) { var n = e.replace(te, ne); return function(e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && E) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0; while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), b.find.TAG = d.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) { var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, b.find.CLASS = d.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) { var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]") }), ce(function(e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:") })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) { var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function(e, t) { if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1 }, D = t ? function(e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) { if (e === t) return l = !0, 0; var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t]; if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0; if (i === o) return pe(e, t);
                    n = e; while (n = n.parentNode) a.unshift(n);
                    n = t; while (n = n.parentNode) s.unshift(n); while (a[r] === s[r]) r++; return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0 }), C }, se.matches = function(e, t) { return se(e, null, null, t) }, se.matchesSelector = function(e, t) { if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { N(t, !0) }
                return 0 < se(t, C, null, [e]).length }, se.contains = function(e, t) { return (e.ownerDocument || e) != C && T(e), y(e, t) }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e); var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0; return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, se.escape = function(e) { return (e + "").replace(re, ie) }, se.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function(e) { var t, n = [],
                    r = 0,
                    i = 0; if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) } return u = null, e }, o = se.getText = function(e) { var t, n = "",
                    r = 0,
                    i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    while (t = e[r++]) n += o(t); return n }, (b = se.selectors = { cacheLength: 50, createPseudo: le, match: G, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) { var t = m[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(n, r, i) { return function(e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } }, CHILD: function(h, e, t, g, v) { var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e; return 1 === g && 0 === v ? function(e) { return !!e.parentNode } : function(e, t, n) { var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1; if (c) { if (y) { while (l) { a = e; while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling" } return !0 } if (u = [m ? c.firstChild : c.lastChild], m && p) { d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s]; while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) { i[h] = [k, s, d]; break } } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g } } }, PSEUDO: function(e, o) { var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e); return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) { var n, r = a(e, o),
                                i = r.length; while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]) }) : function(e) { return a(e, 0, t) }) : a } }, pseudos: { not: le(function(e) { var r = [],
                            i = [],
                            s = f(e.replace($, "$1")); return s[S] ? le(function(e, t, n, r) { var i, o = s(e, null, r, []),
                                a = e.length; while (a--)(i = o[a]) && (e[a] = !(t[a] = i)) }) : function(e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() } }), has: le(function(t) { return function(e) { return 0 < se(t, e).length } }), contains: le(function(t) { return t = t.replace(te, ne),
                            function(e) { return -1 < (e.textContent || o(e)).indexOf(t) } }), lang: le(function(n) { return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) { var t;
                                do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id }, root: function(e) { return e === a }, focus: function(e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: ge(!1), disabled: ge(!0), checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0 }, parent: function(e) { return !b.pseudos.empty(e) }, header: function(e) { return J.test(e.nodeName) }, input: function(e) { return Q.test(e.nodeName) }, button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: ve(function() { return [0] }), last: ve(function(e, t) { return [t - 1] }), eq: ve(function(e, t, n) { return [n < 0 ? n + t : n] }), even: ve(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }), odd: ve(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }), lt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r); return e }), gt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e); for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function be(s, e, t) { var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++; return e.first ? function(e, t, n) { while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1 } : function(e, t, n) { var r, i, o, a = [k, p]; if (n) { while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0 } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else { if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1 } }

        function we(i) { return 1 < i.length ? function(e, t, n) { var r = i.length; while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0 } : i[0] }

        function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function Ce(d, h, g, v, y, e) { return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) { var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f; if (g && g(f, p, n, r), v) { i = Te(p, u), v(i, [], n, r), o = i.length; while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) } if (e) { if (y || d) { if (y) { i = [], o = p.length; while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r) }
                        o = p.length; while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a)) } } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p) }) }

        function Ee(e) { for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) { return e === i }, a, !0), l = be(function(e) { return -1 < P(i, e) }, a, !0), c = [function(e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else { if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) { for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e)) }
                    c.push(t) }
            return we(c) } return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) { var n, r, i, o, a, s, u, l = x[e + " "]; if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter; while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace($, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? se.error(e) : x(e, s).slice(0) }, f = se.compile = function(e, t) { var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "]; if (!a) { t || (t = h(e)), n = t.length; while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) { var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length; for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) { if (x && o) { a = 0, t || o.ownerDocument == C || (T(o), n = !E); while (s = v[a++])
                                if (s(o, t || C, n)) { r.push(o); break }
                            i && (k = h) }
                        m && ((o = !s && o) && u--, e && c.push(o)) } if (u += l, m && l !== u) { a = 0; while (s = y[a++]) s(c, f, t, n); if (e) { if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f) }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r) } return i && (k = h, w = p), c }, m ? le(r) : r))).selector = e } return a }, g = se.select = function(e, t, n, r) { var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e); if (n = n || [], 1 === c.length) { if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) { if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length) }
                i = G.needsContext.test(e) ? 0 : o.length; while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } } } return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function(e) { return null == e.getAttribute("disabled") }) || fe(R, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape; var h = function(e, t, n) { var r = [],
                i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) { if (i && S(e).is(n)) break;
                    r.push(e) }
            return r },
        T = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        k = S.expr.match.needsContext;

    function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, r) { return m(n) ? S.grep(e, function(e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? S.grep(e, function(e) { return e === n !== r }) : "string" != typeof n ? S.grep(e, function(e) { return -1 < i.call(n, e) !== r }) : S.filter(n, e, r) }
    S.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) { return 1 === e.nodeType })) }, S.fn.extend({ find: function(e) { var t, n, r = this.length,
                i = this; if ("string" != typeof e) return this.pushStack(S(e).filter(function() { for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n); return 1 < r ? S.uniqueSort(n) : n }, filter: function(e) { return this.pushStack(D(this, e || [], !1)) }, not: function(e) { return this.pushStack(D(this, e || [], !0)) }, is: function(e) { return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length } }); var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) { var r, i; if (!e) return this; if (n = n || j, "string" == typeof e) { if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this) }).prototype = S.fn, j = S(E); var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };

    function O(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e }
    S.fn.extend({ has: function(e) { var t = S(e, this),
                n = t.length; return this.filter(function() { for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0 }) }, closest: function(e, t) { var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e); if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o) }, index: function(e) { return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) { return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t)))) }, addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), S.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return h(e, "parentNode") }, parentsUntil: function(e, t, n) { return h(e, "parentNode", n) }, next: function(e) { return O(e, "nextSibling") }, prev: function(e) { return O(e, "previousSibling") }, nextAll: function(e) { return h(e, "nextSibling") }, prevAll: function(e) { return h(e, "previousSibling") }, nextUntil: function(e, t, n) { return h(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return h(e, "previousSibling", n) }, siblings: function(e) { return T((e.parentNode || {}).firstChild, e) }, children: function(e) { return T(e.firstChild) }, contents: function(e) { return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes)) } }, function(r, i) { S.fn[r] = function(e, t) { var n = S.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n) } }); var P = /[^\x20\t\r\n\f]+/g;

    function R(e) { return e }

    function M(e) { throw e }

    function I(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }
    S.Callbacks = function(r) { var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) { n[t] = !0 }), n) : S.extend({}, r); var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() { for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "") },
            f = { add: function() { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { S.each(e, function(e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function() { return S.each(arguments, function(e, t) { var n; while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function(e) { return e ? -1 < S.inArray(e, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return a = u = [], s = t = "", this }, disabled: function() { return !s }, lock: function() { return a = u = [], t || i || (s = t = ""), this }, locked: function() { return !!a }, fireWith: function(e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!o } }; return f }, S.extend({ Deferred: function(e) { var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = { state: function() { return i }, always: function() { return s.done(arguments).fail(arguments), this }, "catch": function(e) { return a.then(null, e) }, pipe: function() { var i = arguments; return S.Deferred(function(r) { S.each(o, function(e, t) { var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() { var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments) }) }), i = null }).promise() }, then: function(t, n, r) { var u = 0;

                        function l(i, o, a, s) { return function() { var n = this,
                                    r = arguments,
                                    e = function() { var e, t; if (!(i < u)) { if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r)) } },
                                    t = s ? e : function() { try { e() } catch (e) { S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r)) } };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t)) } } return S.Deferred(function(e) { o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M)) }).promise() }, promise: function(e) { return null != e ? S.extend(e, a) : a } },
                s = {}; return S.each(o, function(e, t) { var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith }), a.promise(s), e && e.call(s, s), s }, when: function(e) { var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) { return function(e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } }; if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then(); while (t--) I(i[t], a(t), o.reject); return o.promise() } }); var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) { C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, S.readyException = function(e) { C.setTimeout(function() { throw e }) }; var F = S.Deferred();

    function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready() }
    S.fn.ready = function(e) { return F.then(e)["catch"](function(e) { S.readyException(e) }), this }, S.extend({ isReady: !1, readyWait: 1, ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]) } }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B)); var $ = function(e, t, n, r, i, o, a) { var s = 0,
                u = e.length,
                l = null == n; if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(S(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) { return t.toUpperCase() }

    function X(e) { return e.replace(_, "ms-").replace(z, U) } var V = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function G() { this.expando = S.expando + G.uid++ }
    G.uid = 1, G.prototype = { cache: function(e) { var t = e[this.expando]; return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function(e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r]; return i }, get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)] }, access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length; while (n--) delete r[t[n]] }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !S.isEmptyObject(t) } }; var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) { var r, i; if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) { try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i) } catch (e) {}
                Q.set(e, t, n) } else n = void 0;
        return n }
    S.extend({ hasData: function(e) { return Q.hasData(e) || Y.hasData(e) }, data: function(e, t, n) { return Q.access(e, t, n) }, removeData: function(e, t) { Q.remove(e, t) }, _data: function(e, t, n) { return Y.access(e, t, n) }, _removeData: function(e, t) { Y.remove(e, t) } }), S.fn.extend({ data: function(n, e) { var t, r, i, o = this[0],
                a = o && o.attributes; if (void 0 === n) { if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) { t = a.length; while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof n ? this.each(function() { Q.set(this, n) }) : $(this, function(e) { var t; if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() { Q.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0) }, removeData: function(e) { return this.each(function() { Q.remove(this, e) }) } }), S.extend({ queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [] }, dequeue: function(e, t) { t = t || "fx"; var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { S.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function(e, t) { var n = t + "queueHooks"; return Y.get(e, n) || Y.access(e, n, { empty: S.Callbacks("once memory").add(function() { Y.remove(e, [t + "queue", n]) }) }) } }), S.fn.extend({ queue: function(t, n) { var e = 2; return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() { var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t) }) }, dequeue: function(e) { return this.each(function() { S.dequeue(this, e) }) }, clearQueue: function(e) { return this.queue(e || "fx", []) }, promise: function(e, t) { var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }); var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) { return S.contains(e.ownerDocument, e) },
        oe = { composed: !0 };
    re.getRootNode && (ie = function(e) { return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument }); var ae = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display") };

    function se(e, t, n, r) { var i, o, a = 20,
            s = r ? function() { return r.cur() } : function() { return S.css(e, t, "") },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var ue = {};

    function le(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n))); for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]); return e }
    S.fn.extend({ show: function() { return le(this, !0) }, hide: function() { return le(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { ae(this) ? S(this).show() : S(this).hide() }) } }); var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild; var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function ve(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n }

    function ye(e, t) { for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval")) }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]); var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0]; while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0; while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) } return f } var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() { return !0 }

    function Ee() { return !1 }

    function Se(e, t) { return e === function() { try { return E.activeElement } catch (e) {} }() == ("focus" === t) }

    function ke(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
        else if (!i) return e; return 1 === o && (a = i, (i = function(e) { return S().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = S.guid++)), e.each(function() { S.event.add(this, t, i, r, n) }) }

    function Ae(e, i, o) { o ? (Y.set(e, i, !1), S.event.add(e, i, { namespace: !1, handler: function(e) { var t, n, r = Y.get(this, i); if (1 & e.isTrigger && this[i]) { if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation()) } })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce) }
    S.event = { global: {}, add: function(t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t); if (V(t)) { n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) { return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(P) || [""]).length; while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0) } }, remove: function(e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e); if (v && (u = v.events)) { l = (t = (t || "").match(P) || [""]).length; while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) { f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]) } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events") } }, dispatch: function(e) { var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {}; for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t]; if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) { a = S.event.handlers.call(this, u, l), t = 0; while ((i = a[t++]) && !u.isPropagationStopped()) { u.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, u), u.result } }, handlers: function(e, t) { var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target; if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o }) }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function(t, e) { Object.defineProperty(S.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function(e) { return e[S.expando] ? e : new S.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1 }, trigger: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0 }, _default: function(e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, S.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, S.Event = function(e, t) { if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0 }, S.Event.prototype = { constructor: S.Event, isDefaultPrevented: Ee, isPropagationStopped: Ee, isImmediatePropagationStopped: Ee, isSimulated: !1, preventDefault: function() { var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function() { var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function() { var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, S.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function(e, t) { S.event.special[e] = { setup: function() { return Ae(this, e, Se), !1 }, trigger: function() { return Ae(this, e), !0 }, delegateType: t } }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, i) { S.event.special[e] = { delegateType: i, bindType: i, handle: function(e) { var t, n = e.relatedTarget,
                    r = e.handleObj; return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t } } }), S.fn.extend({ on: function(e, t, n, r) { return ke(this, e, t, n, r) }, one: function(e, t, n, r) { return ke(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() { S.event.remove(this, e, n, t) }) } }); var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e }

    function Le(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function He(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Oe(e, t) { var n, r, i, o, a, s; if (1 === t.nodeType) { if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a)) } }

    function Pe(n, r, i, o) { r = g(r); var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d); if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function(e) { var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o) }); if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) { for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c); if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(je, ""), u, l)) } return n }

    function Re(e, t, n) { for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r)); return e }
    S.extend({ htmlPrefilter: function(e) { return e }, clone: function(e, t, n) { var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e); if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue); if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
                else Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c }, cleanData: function(e) { for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) { if (t = n[Y.expando]) { if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0 }
                    n[Q.expando] && (n[Q.expando] = void 0) } } }), S.fn.extend({ detach: function(e) { return Re(this, e, !0) }, remove: function(e) { return Re(this, e) }, text: function(e) { return $(this, function(e) { return void 0 === e ? S.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function() { return Pe(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e) }) }, prepend: function() { return Pe(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = qe(this, e);
                    t.insertBefore(e, t.firstChild) } }) }, before: function() { return Pe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() { return Pe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = ""); return this }, clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return S.clone(this, e, t) }) }, html: function(e) { return $(this, function(e) { var t = this[0] || {},
                    n = 0,
                    r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) { e = S.htmlPrefilter(e); try { for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0 } catch (e) {} }
                t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() { var n = []; return Pe(this, arguments, function(e) { var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this)) }, n) } }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { S.fn[e] = function(e) { for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } }); var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) },
        We = function(e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in r = n.call(e), t) e.style[i] = o[i]; return r },
        Fe = new RegExp(ne.join("|"), "i");

    function Be(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function $e(e, t) { return { get: function() { if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get } } }! function() {
        function e() { if (l) { u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l); var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null } }

        function t(e) { return Math.round(parseFloat(e)) } var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, { boxSizingReliable: function() { return e(), r }, pixelBoxStyles: function() { return e(), o }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), s }, scrollboxSize: function() { return e(), i }, reliableTrDimensions: function() { var e, t, n, r; return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a } })) }(); var _e = ["Webkit", "Moz", "ms"],
        ze = E.createElement("div").style,
        Ue = {};

    function Xe(e) { var t = S.cssProps[e] || Ue[e]; return t || (e in ze ? e : Ue[e] = function(e) { var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length; while (n--)
                if ((e = _e[n] + t) in ze) return e }(e) || e) } var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = { position: "absolute", visibility: "hidden", display: "block" },
        Qe = { letterSpacing: "0", fontWeight: "400" };

    function Je(e, t, n) { var r = te.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function Ke(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i)); return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u }

    function Ze(e, t, n) { var r = Ie(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1); if (Me.test(a)) { if (!n) return a;
            a = "auto" } return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px" }

    function et(e, t, n, r, i) { return new et.prototype.init(e, t, n, r, i) }
    S.extend({ cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Be(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function(e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = X(t),
                    u = Ge.test(t),
                    l = e.style; if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function(e, t, n, r) { var i, o, a, s = X(t); return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), S.each(["height", "width"], function(e, u) { S.cssHooks[u] = { get: function(e, t, n) { if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() { return Ze(e, u, n) }) }, set: function(e, t, n) { var r, i = Ie(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0; return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s) } } }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), S.each({ margin: "", padding: "", border: "Width" }, function(i, o) { S.cssHooks[i + o] = { expand: function(e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (S.cssHooks[i + o].set = Je) }), S.fn.extend({ css: function(e, t) { return $(this, function(e, t, n) { var r, i, o = {},
                    a = 0; if (Array.isArray(t)) { for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r); return o } return void 0 !== n ? S.style(e, t, n) : S.css(e, t) }, e, t, 1 < arguments.length) } }), ((S.Tween = et).prototype = { constructor: et, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px") }, cur: function() { var e = et.propHooks[this.prop]; return e && e.get ? e.get(this) : et.propHooks._default.get(this) }, run: function(e) { var t, n = et.propHooks[this.prop]; return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this } }).init.prototype = et.prototype, (et.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = et.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, S.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, S.fx = et.prototype.init, S.fx.step = {}; var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() { nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick()) }

    function ut() { return C.setTimeout(function() { tt = void 0 }), tt = Date.now() }

    function lt(e, t) { var n, r = 0,
            i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i }

    function ct(e, t, n) { for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r }

    function ft(o, e, t) { var n, a, r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function() { delete u.elem }),
            u = function() { if (a) return !1; for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) },
            l = s.promise({ elem: o, props: S.extend({}, e), opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t), originalProperties: e, originalOptions: t, startTime: tt || ut(), duration: t.duration, tweens: [], createTween: function(e, t) { var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n }, stop: function(e) { var t = 0,
                        n = e ? l.tweens.length : 0; if (a) return this; for (a = !0; t < n; t++) l.tweens[t].run(1); return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this } }),
            c = l.props; for (! function(e, t) { var n, r, i, o, a; for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l }
    S.Animation = S.extend(ft, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return se(n.elem, e, te.exec(t), n), n }] }, tweener: function(e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(P); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t) }, prefilters: [function(e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow"); for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, S.queue(e, "fx").length || a.empty.fire() }) })), t)
                if (i = t[r], ot.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0 }
                    d[r] = v && v[r] || S.style(e, r) }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && le([e], !0), p.done(function() { for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]) })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0)) }], prefilter: function(e, t) { t ? ft.prefilters.unshift(e) : ft.prefilters.push(e) } }), S.speed = function(e, t, n) { var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue) }, r }, S.fn.extend({ fadeTo: function(e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function(t, e, n, r) { var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() { var e = ft(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function(i, e, o) { var a = function(e) { var t = e.stop;
                delete e.stop, t(o) }; return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() { var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this); if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]); for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));!e && o || S.dequeue(this, i) }) }, finish: function(a) { return !1 !== a && (a = a || "fx"), this.each(function() { var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0; for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1)); for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish }) } }), S.each(["toggle", "show", "hide"], function(e, r) { var i = S.fn[r];
        S.fn[r] = function(e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n) } }), S.each({ slideDown: lt("show"), slideUp: lt("hide"), slideToggle: lt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, r) { S.fn[e] = function(e, t, n) { return this.animate(r, e, t, n) } }), S.timers = [], S.fx.tick = function() { var e, t = 0,
            n = S.timers; for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0 }, S.fx.timer = function(e) { S.timers.push(e), S.fx.start() }, S.fx.interval = 13, S.fx.start = function() { nt || (nt = !0, st()) }, S.fx.stop = function() { nt = null }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function(r, e) { return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) { var n = C.setTimeout(e, r);
            t.stop = function() { C.clearTimeout(n) } }) }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value; var pt, dt = S.expr.attrHandle;
    S.fn.extend({ attr: function(e, t) { return $(this, S.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { S.removeAttr(this, e) }) } }), S.extend({ attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function(e, t) { if (!y.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function(e, t) { var n, r = 0,
                i = t && t.match(P); if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n) } }), pt = { set: function(e, t, n) { return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n } }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) { var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r } }); var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function vt(e) { return (e.match(P) || []).join(" ") }

    function yt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function mt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [] }
    S.fn.extend({ prop: function(e, t) { return $(this, S.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[S.propFix[e] || e] }) } }), S.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = S.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function(e) { var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { S.propFix[this.toLowerCase()] = this }), S.fn.extend({ addClass: function(t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function(e) { S(this).addClass(t.call(this, e, yt(this))) }); if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") { a = 0; while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s) }
            return this }, removeClass: function(t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function(e) { S(this).removeClass(t.call(this, e, yt(this))) }); if (!arguments.length) return this.attr("class", ""); if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") { a = 0; while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s) }
            return this }, toggleClass: function(i, t) { var o = typeof i,
                a = "string" === o || Array.isArray(i); return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) { S(this).toggleClass(i.call(this, e, yt(this), t), t) }) : this.each(function() { var e, t, n, r; if (a) { t = 0, n = S(this), r = mt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || "")) }) }, hasClass: function(e) { var t, n, r = 0;
            t = " " + e + " "; while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
            return !1 } }); var xt = /\r/g;
    S.fn.extend({ val: function(n) { var r, e, i, t = this[0]; return arguments.length ? (i = m(n), this.each(function(e) { var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) { return null == e ? "" : e + "" })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t)) })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0 } }), S.extend({ valHooks: { option: { get: function(e) { var t = S.find.attr(e, "value"); return null != t ? t : vt(S.text(e)) } }, select: { get: function(e) { var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) { if (t = S(n).val(), a) return t;
                            s.push(t) }
                    return s }, set: function(e, t) { var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length; while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), S.each(["radio", "checkbox"], function() { S.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t) } }, y.checkOn || (S.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C; var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) { e.stopPropagation() };
    S.extend(S.event, { trigger: function(e, t, n, r) { var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : []; if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) { if (!r && !c.noBubble && !x(n)) { for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C) }
                i = 0; while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault()); return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result } }, simulate: function(e, t, n) { var r = S.extend(new S.Event, n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t) } }), S.fn.extend({ trigger: function(e, t) { return this.each(function() { S.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return S.event.trigger(e, t, n, !0) } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function(n, r) { var i = function(e) { S.event.simulate(r, e.target, S.event.fix(e)) };
        S.event.special[r] = { setup: function() { var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1) }, teardown: function() { var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r)) } } }); var Tt = C.location,
        Ct = { guid: Date.now() },
        Et = /\?/;
    S.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t }; var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) { var t; if (Array.isArray(e)) S.each(e, function(e, t) { r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) Dt(n + "[" + t + "]", e[t], r, i) }
    S.param = function(e, t) { var n, r = [],
            i = function(e, t) { var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) Dt(n, e[n], t, i); return r.join("&") }, S.fn.extend({ serialize: function() { return S.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = S.prop(this, "elements"); return e ? S.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e)) }).map(function(e, t) { var n = S(this).val(); return null == n ? null : Array.isArray(n) ? S.map(n, function(e) { return { name: t.name, value: e.replace(kt, "\r\n") } }) : { name: t.name, value: n.replace(kt, "\r\n") } }).get() } }); var jt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");

    function Ft(o) { return function(e, t) { "string" != typeof e && (t = e, e = "*"); var n, r = 0,
                i = e.toLowerCase().match(P) || []; if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t) } }

    function Bt(t, i, o, a) { var s = {},
            u = t === Mt;

        function l(e) { var r; return s[e] = !0, S.each(t[e] || [], function(e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r } return l(i.dataTypes[0]) || !s["*"] && l("*") }

    function $t(e, t) { var n, r, i = S.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && S.extend(!0, e, r), e }
    Wt.href = Tt.href, S.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Tt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) { return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e) }, ajaxPrefilter: Ft(Rt), ajaxTransport: Ft(Mt), ajax: function(e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = { readyState: 0, getResponseHeader: function(e) { var t; if (h) { if (!n) { n = {}; while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) }
                            t = n[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function() { return h ? p : null }, setRequestHeader: function(e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this }, overrideMimeType: function(e) { return null == h && (v.mimeType = e), this }, statusCode: function(e) { var t; if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this }, abort: function(e) { var t = e || u; return c && c.abort(t), l(0, t), this } }; if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } } if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T; for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]); if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort(); if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) { if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() { T.abort("timeout") }, v.timeout)); try { h = !1, c.send(a, l) } catch (e) { if (h) throw e;
                    l(-1, e) } } else l(-1, "No Transport");

            function l(e, t, n, r) { var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) { var r, i, o, a, s = e.contents,
                        u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) { u.unshift(i); break }
                    if (u[0] in n) o = u[0];
                    else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                            a || (a = i) }
                        o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}), s = function(e, t, n, r) { var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice(); if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift(); while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop"))) } return T }, getJSON: function(e, t, n) { return S.get(e, t, n, "json") }, getScript: function(e, t) { return S.get(e, void 0, t, "script") } }), S.each(["get", "post"], function(e, i) { S[i] = function(e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e)) } }), S.ajaxPrefilter(function(e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), S._evalUrl = function(e, t, n) { return S.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { S.globalEval(e, t, n) } }) }, S.fn.extend({ wrapAll: function(e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function(n) { return m(n) ? this.each(function(e) { S(this).wrapInner(n.call(this, e)) }) : this.each(function() { var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n) }) }, wrap: function(t) { var n = m(t); return this.each(function(e) { S(this).wrapAll(n ? t.call(this, e) : t) }) }, unwrap: function(e) { return this.parent(e).not("body").each(function() { S(this).replaceWith(this.childNodes) }), this } }), S.expr.pseudos.hidden = function(e) { return !S.expr.pseudos.visible(e) }, S.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, S.ajaxSettings.xhr = function() { try { return new C.XMLHttpRequest } catch (e) {} }; var _t = { 0: 200, 1223: 204 },
        zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function(i) { var o, a; if (y.cors || zt && !i.crossDomain) return { send: function(e, t) { var n, r = i.xhr(); if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n]; for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) { return function() { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() { 4 === r.readyState && C.setTimeout(function() { o && a() }) }, o = o("abort"); try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e } }, abort: function() { o && o() } } }), S.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return S.globalEval(e), e } } }), S.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), S.ajaxTransport("script", function(n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function(e, t) { r = S("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function(e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function() { i && i() } } }); var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Xt.pop() || S.expando + "_" + Ct.guid++; return this[e] = !0, e } }), S.ajaxPrefilter("json jsonp", function(e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return o || S.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function() { o = arguments }, n.always(function() { void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes))); var r, i, o }, S.fn.load = function(e, t, n) { var r, i, o, a = this,
            s = e.indexOf(" "); return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this }, S.expr.pseudos.animated = function(t) { return S.grep(S.timers, function(e) { return t === e.elem }).length }, S.offset = { setOffset: function(e, t, n) { var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f)) } }, S.fn.extend({ offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { S.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function() { if (this[0]) { var e, t, n, r = this[0],
                    i = { top: 0, left: 0 }; if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === S.css(e, "position")) e = e.offsetParent; return e || re }) } }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) { var o = "pageYOffset" === i;
        S.fn[t] = function(e) { return $(this, function(e, t, n) { var r; if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n }, t, e, arguments.length) } }), S.each(["top", "left"], function(e, n) { S.cssHooks[n] = $e(y.pixelPosition, function(e, t) { if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t }) }), S.each({ Height: "height", Width: "width" }, function(a, s) { S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(r, o) { S.fn[o] = function(e, t) { var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border"); return $(this, function(e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i) }, s, n ? e : void 0, n) } }) }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { S.fn[t] = function(e) { return this.on(t, e) } }), S.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { S.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }); var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || S.guid++, i }, S.holdReady = function(e) { e ? S.readyWait++ : S.ready(!0) }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) { var t = S.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, S.trim = function(e) { return null == e ? "" : (e + "").replace(Gt, "") }, "function" == typeof define && define.amd && define("jquery", [], function() { return S }); var Yt = C.jQuery,
        Qt = C.$; return S.noConflict = function(e) { return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S }, "undefined" == typeof e && (C.jQuery = C.$ = S), S });

;
/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e((t = t || self).bootstrap = {}, t.jQuery) }(this, function(t, p) { "use strict";

    function i(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } }

    function s(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t }

    function l(o) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(r); "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) { return Object.getOwnPropertyDescriptor(r, t).enumerable }))), e.forEach(function(t) { var e, n, i;
                e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i }) } return o }
    p = p && p.hasOwnProperty("default") ? p.default : p; var e = "transitionend";

    function n(t) { var e = this,
            n = !1; return p(this).one(m.TRANSITION_END, function() { n = !0 }), setTimeout(function() { n || m.triggerTransitionEnd(e) }, t), this } var m = { TRANSITION_END: "bsTransitionEnd", getUID: function(t) { for (; t += ~~(1e6 * Math.random()), document.getElementById(t);); return t }, getSelectorFromElement: function(t) { var e = t.getAttribute("data-target"); if (!e || "#" === e) { var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : "" } try { return document.querySelector(e) ? e : null } catch (t) { return null } }, getTransitionDurationFromElement: function(t) { if (!t) return 0; var e = p(t).css("transition-duration"),
                n = p(t).css("transition-delay"),
                i = parseFloat(e),
                o = parseFloat(n); return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0 }, reflow: function(t) { return t.offsetHeight }, triggerTransitionEnd: function(t) { p(t).trigger(e) }, supportsTransitionEnd: function() { return Boolean(e) }, isElement: function(t) { return (t[0] || t).nodeType }, typeCheckConfig: function(t, e, n) { for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) { var o = n[i],
                        r = e[i],
                        s = r && m.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()); if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".') }
            var a }, findShadowRoot: function(t) { if (!document.documentElement.attachShadow) return null; if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? m.findShadowRoot(t.parentNode) : null; var e = t.getRootNode(); return e instanceof ShadowRoot ? e : null } };
    p.fn.emulateTransitionEnd = n, p.event.special[m.TRANSITION_END] = { bindType: e, delegateType: e, handle: function(t) { if (p(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } }; var o = "alert",
        r = "bs.alert",
        a = "." + r,
        c = p.fn[o],
        h = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" },
        u = "alert",
        f = "fade",
        d = "show",
        g = function() {
            function i(t) { this._element = t } var t = i.prototype; return t.close = function(t) { var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e) }, t.dispose = function() { p.removeData(this._element, r), this._element = null }, t._getRootElement = function(t) { var e = m.getSelectorFromElement(t),
                    n = !1; return e && (n = document.querySelector(e)), n || (n = p(t).closest("." + u)[0]), n }, t._triggerCloseEvent = function(t) { var e = p.Event(h.CLOSE); return p(t).trigger(e), e }, t._removeElement = function(e) { var n = this; if (p(e).removeClass(d), p(e).hasClass(f)) { var t = m.getTransitionDurationFromElement(e);
                    p(e).one(m.TRANSITION_END, function(t) { return n._destroyElement(e, t) }).emulateTransitionEnd(t) } else this._destroyElement(e) }, t._destroyElement = function(t) { p(t).detach().trigger(h.CLOSED).remove() }, i._jQueryInterface = function(n) { return this.each(function() { var t = p(this),
                        e = t.data(r);
                    e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this) }) }, i._handleDismiss = function(e) { return function(t) { t && t.preventDefault(), e.close(this) } }, s(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), i }();
    p(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), p.fn[o] = g._jQueryInterface, p.fn[o].Constructor = g, p.fn[o].noConflict = function() { return p.fn[o] = c, g._jQueryInterface }; var _ = "button",
        v = "bs.button",
        y = "." + v,
        E = ".data-api",
        b = p.fn[_],
        w = "active",
        C = "btn",
        T = "focus",
        S = '[data-toggle^="button"]',
        D = '[data-toggle="buttons"]',
        I = 'input:not([type="hidden"])',
        A = ".active",
        O = ".btn",
        N = { CLICK_DATA_API: "click" + y + E, FOCUS_BLUR_DATA_API: "focus" + y + E + " blur" + y + E },
        k = function() {
            function n(t) { this._element = t } var t = n.prototype; return t.toggle = function() { var t = !0,
                    e = !0,
                    n = p(this._element).closest(D)[0]; if (n) { var i = this._element.querySelector(I); if (i) { if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(w)) t = !1;
                            else { var o = n.querySelector(A);
                                o && p(o).removeClass(w) }
                        if (t) { if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !this._element.classList.contains(w), p(i).trigger("change") }
                        i.focus(), e = !1 } }
                e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(w)), t && p(this._element).toggleClass(w) }, t.dispose = function() { p.removeData(this._element, v), this._element = null }, n._jQueryInterface = function(e) { return this.each(function() { var t = p(this).data(v);
                    t || (t = new n(this), p(this).data(v, t)), "toggle" === e && t[e]() }) }, s(n, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), n }();
    p(document).on(N.CLICK_DATA_API, S, function(t) { t.preventDefault(); var e = t.target;
        p(e).hasClass(C) || (e = p(e).closest(O)), k._jQueryInterface.call(p(e), "toggle") }).on(N.FOCUS_BLUR_DATA_API, S, function(t) { var e = p(t.target).closest(O)[0];
        p(e).toggleClass(T, /^focus(in)?$/.test(t.type)) }), p.fn[_] = k._jQueryInterface, p.fn[_].Constructor = k, p.fn[_].noConflict = function() { return p.fn[_] = b, k._jQueryInterface }; var L = "carousel",
        x = "bs.carousel",
        P = "." + x,
        H = ".data-api",
        j = p.fn[L],
        R = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        F = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        M = "next",
        W = "prev",
        U = "left",
        B = "right",
        q = { SLIDE: "slide" + P, SLID: "slid" + P, KEYDOWN: "keydown" + P, MOUSEENTER: "mouseenter" + P, MOUSELEAVE: "mouseleave" + P, TOUCHSTART: "touchstart" + P, TOUCHMOVE: "touchmove" + P, TOUCHEND: "touchend" + P, POINTERDOWN: "pointerdown" + P, POINTERUP: "pointerup" + P, DRAG_START: "dragstart" + P, LOAD_DATA_API: "load" + P + H, CLICK_DATA_API: "click" + P + H },
        K = "carousel",
        Q = "active",
        V = "slide",
        Y = "carousel-item-right",
        z = "carousel-item-left",
        X = "carousel-item-next",
        G = "carousel-item-prev",
        $ = "pointer-event",
        J = ".active",
        Z = ".active.carousel-item",
        tt = ".carousel-item",
        et = ".carousel-item img",
        nt = ".carousel-item-next, .carousel-item-prev",
        it = ".carousel-indicators",
        ot = "[data-slide], [data-slide-to]",
        rt = '[data-ride="carousel"]',
        st = { TOUCH: "touch", PEN: "pen" },
        at = function() {
            function r(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(it), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() } var t = r.prototype; return t.next = function() { this._isSliding || this._slide(M) }, t.nextWhenVisible = function() {!document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next() }, t.prev = function() { this._isSliding || this._slide(W) }, t.pause = function(t) { t || (this._isPaused = !0), this._element.querySelector(nt) && (m.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, t.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, t.to = function(t) { var e = this;
                this._activeElement = this._element.querySelector(Z); var n = this._getItemIndex(this._activeElement); if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) p(this._element).one(q.SLID, function() { return e.to(t) });
                    else { if (n === t) return this.pause(), void this.cycle(); var i = n < t ? M : W;
                        this._slide(i, this._items[t]) } }, t.dispose = function() { p(this._element).off(P), p.removeData(this._element, x), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, t._getConfig = function(t) { return t = l({}, R, t), m.typeCheckConfig(L, t, F), t }, t._handleSwipe = function() { var t = Math.abs(this.touchDeltaX); if (!(t <= 40)) { var e = t / this.touchDeltaX;
                    0 < e && this.prev(), e < 0 && this.next() } }, t._addEventListeners = function() { var e = this;
                this._config.keyboard && p(this._element).on(q.KEYDOWN, function(t) { return e._keydown(t) }), "hover" === this._config.pause && p(this._element).on(q.MOUSEENTER, function(t) { return e.pause(t) }).on(q.MOUSELEAVE, function(t) { return e.cycle(t) }), this._config.touch && this._addTouchEventListeners() }, t._addTouchEventListeners = function() { var n = this; if (this._touchSupported) { var e = function(t) { n._pointerEvent && st[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX) },
                        i = function(t) { n._pointerEvent && st[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(t) { return n.cycle(t) }, 500 + n._config.interval)) };
                    p(this._element.querySelectorAll(et)).on(q.DRAG_START, function(t) { return t.preventDefault() }), this._pointerEvent ? (p(this._element).on(q.POINTERDOWN, function(t) { return e(t) }), p(this._element).on(q.POINTERUP, function(t) { return i(t) }), this._element.classList.add($)) : (p(this._element).on(q.TOUCHSTART, function(t) { return e(t) }), p(this._element).on(q.TOUCHMOVE, function(t) { var e;
                        (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX }), p(this._element).on(q.TOUCHEND, function(t) { return i(t) })) } }, t._keydown = function(t) { if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev(); break;
                    case 39:
                        t.preventDefault(), this.next() } }, t._getItemIndex = function(t) { return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(tt)) : [], this._items.indexOf(t) }, t._getItemByDirection = function(t, e) { var n = t === M,
                    i = t === W,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1; if ((i && 0 === o || n && o === r) && !this._config.wrap) return e; var s = (o + (t === W ? -1 : 1)) % this._items.length; return -1 === s ? this._items[this._items.length - 1] : this._items[s] }, t._triggerSlideEvent = function(t, e) { var n = this._getItemIndex(t),
                    i = this._getItemIndex(this._element.querySelector(Z)),
                    o = p.Event(q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n }); return p(this._element).trigger(o), o }, t._setActiveIndicatorElement = function(t) { if (this._indicatorsElement) { var e = [].slice.call(this._indicatorsElement.querySelectorAll(J));
                    p(e).removeClass(Q); var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && p(n).addClass(Q) } }, t._slide = function(t, e) { var n, i, o, r = this,
                    s = this._element.querySelector(Z),
                    a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s),
                    c = this._getItemIndex(l),
                    h = Boolean(this._interval); if (o = t === M ? (n = z, i = X, U) : (n = Y, i = G, B), l && p(l).hasClass(Q)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) { this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l); var u = p.Event(q.SLID, { relatedTarget: l, direction: o, from: a, to: c }); if (p(this._element).hasClass(V)) { p(l).addClass(i), m.reflow(l), p(s).addClass(n), p(l).addClass(n); var f = parseInt(l.getAttribute("data-interval"), 10);
                        this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f) : this._config.defaultInterval || this._config.interval; var d = m.getTransitionDurationFromElement(s);
                        p(s).one(m.TRANSITION_END, function() { p(l).removeClass(n + " " + i).addClass(Q), p(s).removeClass(Q + " " + i + " " + n), r._isSliding = !1, setTimeout(function() { return p(r._element).trigger(u) }, 0) }).emulateTransitionEnd(d) } else p(s).removeClass(Q), p(l).addClass(Q), this._isSliding = !1, p(this._element).trigger(u);
                    h && this.cycle() } }, r._jQueryInterface = function(i) { return this.each(function() { var t = p(this).data(x),
                        e = l({}, R, p(this).data()); "object" == typeof i && (e = l({}, e, i)); var n = "string" == typeof i ? i : e.slide; if (t || (t = new r(this, e), p(this).data(x, t)), "number" == typeof i) t.to(i);
                    else if ("string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]() } else e.interval && e.ride && (t.pause(), t.cycle()) }) }, r._dataApiClickHandler = function(t) { var e = m.getSelectorFromElement(this); if (e) { var n = p(e)[0]; if (n && p(n).hasClass(K)) { var i = l({}, p(n).data(), p(this).data()),
                            o = this.getAttribute("data-slide-to");
                        o && (i.interval = !1), r._jQueryInterface.call(p(n), i), o && p(n).data(x).to(o), t.preventDefault() } } }, s(r, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return R } }]), r }();
    p(document).on(q.CLICK_DATA_API, ot, at._dataApiClickHandler), p(window).on(q.LOAD_DATA_API, function() { for (var t = [].slice.call(document.querySelectorAll(rt)), e = 0, n = t.length; e < n; e++) { var i = p(t[e]);
            at._jQueryInterface.call(i, i.data()) } }), p.fn[L] = at._jQueryInterface, p.fn[L].Constructor = at, p.fn[L].noConflict = function() { return p.fn[L] = j, at._jQueryInterface }; var lt = "collapse",
        ct = "bs.collapse",
        ht = "." + ct,
        ut = p.fn[lt],
        ft = { toggle: !0, parent: "" },
        dt = { toggle: "boolean", parent: "(string|element)" },
        pt = { SHOW: "show" + ht, SHOWN: "shown" + ht, HIDE: "hide" + ht, HIDDEN: "hidden" + ht, CLICK_DATA_API: "click" + ht + ".data-api" },
        mt = "show",
        gt = "collapse",
        _t = "collapsing",
        vt = "collapsed",
        yt = "width",
        Et = "height",
        bt = ".show, .collapsing",
        wt = '[data-toggle="collapse"]',
        Ct = function() {
            function a(e, t) { this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')); for (var n = [].slice.call(document.querySelectorAll(wt)), i = 0, o = n.length; i < o; i++) { var r = n[i],
                        s = m.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(t) { return t === e });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r)) }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } var t = a.prototype; return t.toggle = function() { p(this._element).hasClass(mt) ? this.hide() : this.show() }, t.show = function() { var t, e, n = this; if (!this._isTransitioning && !p(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(bt)).filter(function(t) { return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(gt) })).length && (t = null), !(t && (e = p(t).not(this._selector).data(ct)) && e._isTransitioning))) { var i = p.Event(pt.SHOW); if (p(this._element).trigger(i), !i.isDefaultPrevented()) { t && (a._jQueryInterface.call(p(t).not(this._selector), "hide"), e || p(t).data(ct, null)); var o = this._getDimension();
                        p(this._element).removeClass(gt).addClass(_t), this._element.style[o] = 0, this._triggerArray.length && p(this._triggerArray).removeClass(vt).attr("aria-expanded", !0), this.setTransitioning(!0); var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                            s = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, function() { p(n._element).removeClass(_t).addClass(gt).addClass(mt), n._element.style[o] = "", n.setTransitioning(!1), p(n._element).trigger(pt.SHOWN) }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px" } } }, t.hide = function() { var t = this; if (!this._isTransitioning && p(this._element).hasClass(mt)) { var e = p.Event(pt.HIDE); if (p(this._element).trigger(e), !e.isDefaultPrevented()) { var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", m.reflow(this._element), p(this._element).addClass(_t).removeClass(gt).removeClass(mt); var i = this._triggerArray.length; if (0 < i)
                            for (var o = 0; o < i; o++) { var r = this._triggerArray[o],
                                    s = m.getSelectorFromElement(r); if (null !== s) p([].slice.call(document.querySelectorAll(s))).hasClass(mt) || p(r).addClass(vt).attr("aria-expanded", !1) }
                        this.setTransitioning(!0);
                        this._element.style[n] = ""; var a = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, function() { t.setTransitioning(!1), p(t._element).removeClass(_t).addClass(gt).trigger(pt.HIDDEN) }).emulateTransitionEnd(a) } } }, t.setTransitioning = function(t) { this._isTransitioning = t }, t.dispose = function() { p.removeData(this._element, ct), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, t._getConfig = function(t) { return (t = l({}, ft, t)).toggle = Boolean(t.toggle), m.typeCheckConfig(lt, t, dt), t }, t._getDimension = function() { return p(this._element).hasClass(yt) ? yt : Et }, t._getParent = function() { var t, n = this;
                m.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent); var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(t.querySelectorAll(e)); return p(i).each(function(t, e) { n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]) }), t }, t._addAriaAndCollapsedClass = function(t, e) { var n = p(t).hasClass(mt);
                e.length && p(e).toggleClass(vt, !n).attr("aria-expanded", n) }, a._getTargetFromElement = function(t) { var e = m.getSelectorFromElement(t); return e ? document.querySelector(e) : null }, a._jQueryInterface = function(i) { return this.each(function() { var t = p(this),
                        e = t.data(ct),
                        n = l({}, ft, t.data(), "object" == typeof i && i ? i : {}); if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(ct, e)), "string" == typeof i) { if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]() } }) }, s(a, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return ft } }]), a }();
    p(document).on(pt.CLICK_DATA_API, wt, function(t) { "A" === t.currentTarget.tagName && t.preventDefault(); var n = p(this),
            e = m.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(e));
        p(i).each(function() { var t = p(this),
                e = t.data(ct) ? "toggle" : n.data();
            Ct._jQueryInterface.call(t, e) }) }), p.fn[lt] = Ct._jQueryInterface, p.fn[lt].Constructor = Ct, p.fn[lt].noConflict = function() { return p.fn[lt] = ut, Ct._jQueryInterface }; for (var Tt = "undefined" != typeof window && "undefined" != typeof document, St = ["Edge", "Trident", "Firefox"], Dt = 0, It = 0; It < St.length; It += 1)
        if (Tt && 0 <= navigator.userAgent.indexOf(St[It])) { Dt = 1; break }
    var At = Tt && window.Promise ? function(t) { var e = !1; return function() { e || (e = !0, window.Promise.resolve().then(function() { e = !1, t() })) } } : function(t) { var e = !1; return function() { e || (e = !0, setTimeout(function() { e = !1, t() }, Dt)) } };

    function Ot(t) { return t && "[object Function]" === {}.toString.call(t) }

    function Nt(t, e) { if (1 !== t.nodeType) return []; var n = t.ownerDocument.defaultView.getComputedStyle(t, null); return e ? n[e] : n }

    function kt(t) { return "HTML" === t.nodeName ? t : t.parentNode || t.host }

    function Lt(t) { if (!t) return document.body; switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body } var e = Nt(t),
            n = e.overflow,
            i = e.overflowX,
            o = e.overflowY; return /(auto|scroll|overlay)/.test(n + o + i) ? t : Lt(kt(t)) } var xt = Tt && !(!window.MSInputMethodContext || !document.documentMode),
        Pt = Tt && /MSIE 10/.test(navigator.userAgent);

    function Ht(t) { return 11 === t ? xt : 10 === t ? Pt : xt || Pt }

    function jt(t) { if (!t) return document.documentElement; for (var e = Ht(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === Nt(n, "position") ? jt(n) : n : t ? t.ownerDocument.documentElement : document.documentElement }

    function Rt(t) { return null !== t.parentNode ? Rt(t.parentNode) : t }

    function Ft(t, e) { if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement; var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            o = n ? e : t,
            r = document.createRange();
        r.setStart(i, 0), r.setEnd(o, 0); var s, a, l = r.commonAncestorContainer; if (t !== l && e !== l || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && jt(s.firstElementChild) !== s ? jt(l) : l; var c = Rt(t); return c.host ? Ft(c.host, e) : Ft(t, Rt(e).host) }

    function Mt(t) { var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = t.nodeName; if ("BODY" !== n && "HTML" !== n) return t[e]; var i = t.ownerDocument.documentElement; return (t.ownerDocument.scrollingElement || i)[e] }

    function Wt(t, e) { var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom"; return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10) }

    function Ut(t, e, n, i) { return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], Ht(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0) }

    function Bt(t) { var e = t.body,
            n = t.documentElement,
            i = Ht(10) && getComputedStyle(n); return { height: Ut("Height", e, n, i), width: Ut("Width", e, n, i) } } var qt = function() {
            function i(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } return function(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t } }(),
        Kt = function(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t },
        Qt = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t };

    function Vt(t) { return Qt({}, t, { right: t.left + t.width, bottom: t.top + t.height }) }

    function Yt(t) { var e = {}; try { if (Ht(10)) { e = t.getBoundingClientRect(); var n = Mt(t, "top"),
                    i = Mt(t, "left");
                e.top += n, e.left += i, e.bottom += n, e.right += i } else e = t.getBoundingClientRect() } catch (t) {} var o = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
            r = "HTML" === t.nodeName ? Bt(t.ownerDocument) : {},
            s = r.width || t.clientWidth || o.right - o.left,
            a = r.height || t.clientHeight || o.bottom - o.top,
            l = t.offsetWidth - s,
            c = t.offsetHeight - a; if (l || c) { var h = Nt(t);
            l -= Wt(h, "x"), c -= Wt(h, "y"), o.width -= l, o.height -= c } return Vt(o) }

    function zt(t, e) { var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = Ht(10),
            o = "HTML" === e.nodeName,
            r = Yt(t),
            s = Yt(e),
            a = Lt(t),
            l = Nt(e),
            c = parseFloat(l.borderTopWidth, 10),
            h = parseFloat(l.borderLeftWidth, 10);
        n && o && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0)); var u = Vt({ top: r.top - s.top - c, left: r.left - s.left - h, width: r.width, height: r.height }); if (u.marginTop = 0, u.marginLeft = 0, !i && o) { var f = parseFloat(l.marginTop, 10),
                d = parseFloat(l.marginLeft, 10);
            u.top -= c - f, u.bottom -= c - f, u.left -= h - d, u.right -= h - d, u.marginTop = f, u.marginLeft = d } return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (u = function(t, e) { var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = Mt(e, "top"),
                o = Mt(e, "left"),
                r = n ? -1 : 1; return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t }(u, e)), u }

    function Xt(t) { if (!t || !t.parentElement || Ht()) return document.documentElement; for (var e = t.parentElement; e && "none" === Nt(e, "transform");) e = e.parentElement; return e || document.documentElement }

    function Gt(t, e, n, i) { var o = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            r = { top: 0, left: 0 },
            s = o ? Xt(t) : Ft(t, e); if ("viewport" === i) r = function(t) { var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = t.ownerDocument.documentElement,
                i = zt(t, n),
                o = Math.max(n.clientWidth, window.innerWidth || 0),
                r = Math.max(n.clientHeight, window.innerHeight || 0),
                s = e ? 0 : Mt(n),
                a = e ? 0 : Mt(n, "left"); return Vt({ top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: o, height: r }) }(s, o);
        else { var a = void 0; "scrollParent" === i ? "BODY" === (a = Lt(kt(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i; var l = zt(a, s, o); if ("HTML" !== a.nodeName || function t(e) { var n = e.nodeName; if ("BODY" === n || "HTML" === n) return !1; if ("fixed" === Nt(e, "position")) return !0; var i = kt(e); return !!i && t(i) }(s)) r = l;
            else { var c = Bt(t.ownerDocument),
                    h = c.height,
                    u = c.width;
                r.top += l.top - l.marginTop, r.bottom = h + l.top, r.left += l.left - l.marginLeft, r.right = u + l.left } } var f = "number" == typeof(n = n || 0); return r.left += f ? n : n.left || 0, r.top += f ? n : n.top || 0, r.right -= f ? n : n.right || 0, r.bottom -= f ? n : n.bottom || 0, r }

    function $t(t, e, i, n, o) { var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === t.indexOf("auto")) return t; var s = Gt(i, n, r, o),
            a = { top: { width: s.width, height: e.top - s.top }, right: { width: s.right - e.right, height: s.height }, bottom: { width: s.width, height: s.bottom - e.bottom }, left: { width: e.left - s.left, height: s.height } },
            l = Object.keys(a).map(function(t) { return Qt({ key: t }, a[t], { area: (e = a[t], e.width * e.height) }); var e }).sort(function(t, e) { return e.area - t.area }),
            c = l.filter(function(t) { var e = t.width,
                    n = t.height; return e >= i.clientWidth && n >= i.clientHeight }),
            h = 0 < c.length ? c[0].key : l[0].key,
            u = t.split("-")[1]; return h + (u ? "-" + u : "") }

    function Jt(t, e, n) { var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return zt(n, i ? Xt(e) : Ft(e, n), i) }

    function Zt(t) { var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0); return { width: t.offsetWidth + i, height: t.offsetHeight + n } }

    function te(t) { var e = { left: "right", right: "left", bottom: "top", top: "bottom" }; return t.replace(/left|right|bottom|top/g, function(t) { return e[t] }) }

    function ee(t, e, n) { n = n.split("-")[0]; var i = Zt(t),
            o = { width: i.width, height: i.height },
            r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height"; return o[s] = e[s] + e[l] / 2 - i[l] / 2, o[a] = n === a ? e[a] - i[c] : e[te(a)], o }

    function ne(t, e) { return Array.prototype.find ? t.find(e) : t.filter(e)[0] }

    function ie(t, n, e) { return (void 0 === e ? t : t.slice(0, function(t, e, n) { if (Array.prototype.findIndex) return t.findIndex(function(t) { return t[e] === n }); var i = ne(t, function(t) { return t[e] === n }); return t.indexOf(i) }(t, "name", e))).forEach(function(t) { t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!"); var e = t.function || t.fn;
            t.enabled && Ot(e) && (n.offsets.popper = Vt(n.offsets.popper), n.offsets.reference = Vt(n.offsets.reference), n = e(n, t)) }), n }

    function oe(t, n) { return t.some(function(t) { var e = t.name; return t.enabled && e === n }) }

    function re(t) { for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) { var o = e[i],
                r = o ? "" + o + n : t; if ("undefined" != typeof document.body.style[r]) return r } return null }

    function se(t) { var e = t.ownerDocument; return e ? e.defaultView : window }

    function ae(t, e, n, i) { n.updateBound = i, se(t).addEventListener("resize", n.updateBound, { passive: !0 }); var o = Lt(t); return function t(e, n, i, o) { var r = "BODY" === e.nodeName,
                s = r ? e.ownerDocument.defaultView : e;
            s.addEventListener(n, i, { passive: !0 }), r || t(Lt(s.parentNode), n, i, o), o.push(s) }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n }

    function le() { var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, se(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) { t.removeEventListener("scroll", e.updateBound) }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e)) }

    function ce(t) { return "" !== t && !isNaN(parseFloat(t)) && isFinite(t) }

    function he(n, i) { Object.keys(i).forEach(function(t) { var e = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && ce(i[t]) && (e = "px"), n.style[t] = i[t] + e }) } var ue = Tt && /Firefox/i.test(navigator.userAgent);

    function fe(t, e, n) { var i = ne(t, function(t) { return t.name === e }),
            o = !!i && t.some(function(t) { return t.name === n && t.enabled && t.order < i.order }); if (!o) { var r = "`" + e + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!") } return o } var de = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        pe = de.slice(3);

    function me(t) { var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = pe.indexOf(t),
            i = pe.slice(n + 1).concat(pe.slice(0, n)); return e ? i.reverse() : i } var ge = "flip",
        _e = "clockwise",
        ve = "counterclockwise";

    function ye(t, o, r, e) { var s = [0, 0],
            a = -1 !== ["right", "left"].indexOf(e),
            n = t.split(/(\+|\-)/).map(function(t) { return t.trim() }),
            i = n.indexOf(ne(n, function(t) { return -1 !== t.search(/,|\s/) }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."); var l = /\s*,\s*|\s+/,
            c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n]; return (c = c.map(function(t, e) { var n = (1 === e ? !a : a) ? "height" : "width",
                i = !1; return t.reduce(function(t, e) { return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, i = !0, t) : i ? (t[t.length - 1] += e, i = !1, t) : t.concat(e) }, []).map(function(t) { return function(t, e, n, i) { var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        r = +o[1],
                        s = o[2]; if (!r) return t; if (0 !== s.indexOf("%")) return "vh" !== s && "vw" !== s ? r : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r; var a = void 0; switch (s) {
                        case "%p":
                            a = n; break;
                        case "%":
                        case "%r":
                        default:
                            a = i } return Vt(a)[e] / 100 * r }(t, n, o, r) }) })).forEach(function(n, i) { n.forEach(function(t, e) { ce(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1)) }) }), s } var Ee = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function() {}, onUpdate: function() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function(t) { var e = t.placement,
                            n = e.split("-")[0],
                            i = e.split("-")[1]; if (i) { var o = t.offsets,
                                r = o.reference,
                                s = o.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                h = { start: Kt({}, l, r[l]), end: Kt({}, l, r[l] + r[c] - s[c]) };
                            t.offsets.popper = Qt({}, s, h[i]) } return t } }, offset: { order: 200, enabled: !0, fn: function(t, e) { var n = e.offset,
                            i = t.placement,
                            o = t.offsets,
                            r = o.popper,
                            s = o.reference,
                            a = i.split("-")[0],
                            l = void 0; return l = ce(+n) ? [+n, 0] : ye(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), t.popper = r, t }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function(t, i) { var e = i.boundariesElement || jt(t.instance.popper);
                        t.instance.reference === e && (e = jt(e)); var n = re("transform"),
                            o = t.instance.popper.style,
                            r = o.top,
                            s = o.left,
                            a = o[n];
                        o.top = "", o.left = "", o[n] = ""; var l = Gt(t.instance.popper, t.instance.reference, i.padding, e, t.positionFixed);
                        o.top = r, o.left = s, o[n] = a, i.boundaries = l; var c = i.priority,
                            h = t.offsets.popper,
                            u = { primary: function(t) { var e = h[t]; return h[t] < l[t] && !i.escapeWithReference && (e = Math.max(h[t], l[t])), Kt({}, t, e) }, secondary: function(t) { var e = "right" === t ? "left" : "top",
                                        n = h[e]; return h[t] > l[t] && !i.escapeWithReference && (n = Math.min(h[e], l[t] - ("right" === t ? h.width : h.height))), Kt({}, e, n) } }; return c.forEach(function(t) { var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            h = Qt({}, h, u[e](t)) }), t.offsets.popper = h, t }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function(t) { var e = t.offsets,
                            n = e.popper,
                            i = e.reference,
                            o = t.placement.split("-")[0],
                            r = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(o),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height"; return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])), t } }, arrow: { order: 500, enabled: !0, fn: function(t, e) { var n; if (!fe(t.instance.modifiers, "arrow", "keepTogether")) return t; var i = e.element; if ("string" == typeof i) { if (!(i = t.instance.popper.querySelector(i))) return t } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t; var o = t.placement.split("-")[0],
                            r = t.offsets,
                            s = r.popper,
                            a = r.reference,
                            l = -1 !== ["left", "right"].indexOf(o),
                            c = l ? "height" : "width",
                            h = l ? "Top" : "Left",
                            u = h.toLowerCase(),
                            f = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = Zt(i)[c];
                        a[d] - p < s[u] && (t.offsets.popper[u] -= s[u] - (a[d] - p)), a[u] + p > s[d] && (t.offsets.popper[u] += a[u] + p - s[d]), t.offsets.popper = Vt(t.offsets.popper); var m = a[u] + a[c] / 2 - p / 2,
                            g = Nt(t.instance.popper),
                            _ = parseFloat(g["margin" + h], 10),
                            v = parseFloat(g["border" + h + "Width"], 10),
                            y = m - t.offsets.popper[u] - _ - v; return y = Math.max(Math.min(s[c] - p, y), 0), t.arrowElement = i, t.offsets.arrow = (Kt(n = {}, u, Math.round(y)), Kt(n, f, ""), n), t }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function(p, m) { if (oe(p.instance.modifiers, "inner")) return p; if (p.flipped && p.placement === p.originalPlacement) return p; var g = Gt(p.instance.popper, p.instance.reference, m.padding, m.boundariesElement, p.positionFixed),
                            _ = p.placement.split("-")[0],
                            v = te(_),
                            y = p.placement.split("-")[1] || "",
                            E = []; switch (m.behavior) {
                            case ge:
                                E = [_, v]; break;
                            case _e:
                                E = me(_); break;
                            case ve:
                                E = me(_, !0); break;
                            default:
                                E = m.behavior } return E.forEach(function(t, e) { if (_ !== t || E.length === e + 1) return p;
                            _ = p.placement.split("-")[0], v = te(_); var n, i = p.offsets.popper,
                                o = p.offsets.reference,
                                r = Math.floor,
                                s = "left" === _ && r(i.right) > r(o.left) || "right" === _ && r(i.left) < r(o.right) || "top" === _ && r(i.bottom) > r(o.top) || "bottom" === _ && r(i.top) < r(o.bottom),
                                a = r(i.left) < r(g.left),
                                l = r(i.right) > r(g.right),
                                c = r(i.top) < r(g.top),
                                h = r(i.bottom) > r(g.bottom),
                                u = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && h,
                                f = -1 !== ["top", "bottom"].indexOf(_),
                                d = !!m.flipVariations && (f && "start" === y && a || f && "end" === y && l || !f && "start" === y && c || !f && "end" === y && h);
                            (s || u || d) && (p.flipped = !0, (s || u) && (_ = E[e + 1]), d && (y = "end" === (n = y) ? "start" : "start" === n ? "end" : n), p.placement = _ + (y ? "-" + y : ""), p.offsets.popper = Qt({}, p.offsets.popper, ee(p.instance.popper, p.offsets.reference, p.placement)), p = ie(p.instance.modifiers, p, "flip")) }), p }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: !1, fn: function(t) { var e = t.placement,
                            n = e.split("-")[0],
                            i = t.offsets,
                            o = i.popper,
                            r = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n); return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), t.placement = te(e), t.offsets.popper = Vt(o), t } }, hide: { order: 800, enabled: !0, fn: function(t) { if (!fe(t.instance.modifiers, "hide", "preventOverflow")) return t; var e = t.offsets.reference,
                            n = ne(t.instance.modifiers, function(t) { return "preventOverflow" === t.name }).boundaries; if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) { if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = "" } else { if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1 } return t } }, computeStyle: { order: 850, enabled: !0, fn: function(t, e) { var n = e.x,
                            i = e.y,
                            o = t.offsets.popper,
                            r = ne(t.instance.modifiers, function(t) { return "applyStyle" === t.name }).gpuAcceleration;
                        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"); var s, a, l, c, h, u, f, d, p, m, g, _, v, y, E = void 0 !== r ? r : e.gpuAcceleration,
                            b = jt(t.instance.popper),
                            w = Yt(b),
                            C = { position: o.position },
                            T = (s = t, a = window.devicePixelRatio < 2 || !ue, l = s.offsets, c = l.popper, h = l.reference, u = Math.round, f = Math.floor, d = function(t) { return t }, p = u(h.width), m = u(c.width), g = -1 !== ["left", "right"].indexOf(s.placement), _ = -1 !== s.placement.indexOf("-"), y = a ? u : d, { left: (v = a ? g || _ || p % 2 == m % 2 ? u : f : d)(p % 2 == 1 && m % 2 == 1 && !_ && a ? c.left - 1 : c.left), top: y(c.top), bottom: y(c.bottom), right: v(c.right) }),
                            S = "bottom" === n ? "top" : "bottom",
                            D = "right" === i ? "left" : "right",
                            I = re("transform"),
                            A = void 0,
                            O = void 0; if (O = "bottom" === S ? "HTML" === b.nodeName ? -b.clientHeight + T.bottom : -w.height + T.bottom : T.top, A = "right" === D ? "HTML" === b.nodeName ? -b.clientWidth + T.right : -w.width + T.right : T.left, E && I) C[I] = "translate3d(" + A + "px, " + O + "px, 0)", C[S] = 0, C[D] = 0, C.willChange = "transform";
                        else { var N = "bottom" === S ? -1 : 1,
                                k = "right" === D ? -1 : 1;
                            C[S] = O * N, C[D] = A * k, C.willChange = S + ", " + D } var L = { "x-placement": t.placement }; return t.attributes = Qt({}, L, t.attributes), t.styles = Qt({}, C, t.styles), t.arrowStyles = Qt({}, t.offsets.arrow, t.arrowStyles), t }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function(t) { var e, n; return he(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function(t) {!1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t) }), t.arrowElement && Object.keys(t.arrowStyles).length && he(t.arrowElement, t.arrowStyles), t }, onLoad: function(t, e, n, i, o) { var r = Jt(o, e, t, n.positionFixed),
                            s = $t(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding); return e.setAttribute("x-placement", s), he(e, { position: n.positionFixed ? "fixed" : "absolute" }), n }, gpuAcceleration: void 0 } } },
        be = function() {
            function r(t, e) { var n = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, r), this.scheduleUpdate = function() { return requestAnimationFrame(n.update) }, this.update = At(this.update.bind(this)), this.options = Qt({}, r.Defaults, i), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = t && t.jquery ? t[0] : t, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys(Qt({}, r.Defaults.modifiers, i.modifiers)).forEach(function(t) { n.options.modifiers[t] = Qt({}, r.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) { return Qt({ name: t }, n.options.modifiers[t]) }).sort(function(t, e) { return t.order - e.order }), this.modifiers.forEach(function(t) { t.enabled && Ot(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state) }), this.update(); var o = this.options.eventsEnabled;
                o && this.enableEventListeners(), this.state.eventsEnabled = o } return qt(r, [{ key: "update", value: function() { return function() { if (!this.state.isDestroyed) { var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                            t.offsets.reference = Jt(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = $t(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = ee(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = ie(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t)) } }.call(this) } }, { key: "destroy", value: function() { return function() { return this.state.isDestroyed = !0, oe(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[re("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }.call(this) } }, { key: "enableEventListeners", value: function() { return function() { this.state.eventsEnabled || (this.state = ae(this.reference, this.options, this.state, this.scheduleUpdate)) }.call(this) } }, { key: "disableEventListeners", value: function() { return le.call(this) } }]), r }();
    be.Utils = ("undefined" != typeof window ? window : global).PopperUtils, be.placements = de, be.Defaults = Ee; var we = "dropdown",
        Ce = "bs.dropdown",
        Te = "." + Ce,
        Se = ".data-api",
        De = p.fn[we],
        Ie = new RegExp("38|40|27"),
        Ae = { HIDE: "hide" + Te, HIDDEN: "hidden" + Te, SHOW: "show" + Te, SHOWN: "shown" + Te, CLICK: "click" + Te, CLICK_DATA_API: "click" + Te + Se, KEYDOWN_DATA_API: "keydown" + Te + Se, KEYUP_DATA_API: "keyup" + Te + Se },
        Oe = "disabled",
        Ne = "show",
        ke = "dropup",
        Le = "dropright",
        xe = "dropleft",
        Pe = "dropdown-menu-right",
        He = "position-static",
        je = '[data-toggle="dropdown"]',
        Re = ".dropdown form",
        Fe = ".dropdown-menu",
        Me = ".navbar-nav",
        We = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Ue = "top-start",
        Be = "top-end",
        qe = "bottom-start",
        Ke = "bottom-end",
        Qe = "right-start",
        Ve = "left-start",
        Ye = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
        ze = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
        Xe = function() {
            function c(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } var t = c.prototype; return t.toggle = function() { if (!this._element.disabled && !p(this._element).hasClass(Oe)) { var t = c._getParentFromElement(this._element),
                        e = p(this._menu).hasClass(Ne); if (c._clearMenus(), !e) { var n = { relatedTarget: this._element },
                            i = p.Event(Ae.SHOW, n); if (p(t).trigger(i), !i.isDefaultPrevented()) { if (!this._inNavbar) { if ("undefined" == typeof be) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"); var o = this._element; "parent" === this._config.reference ? o = t : m.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && p(t).addClass(He), this._popper = new be(o, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === p(t).closest(Me).length && p(document.body).children().on("mouseover", null, p.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), p(this._menu).toggleClass(Ne), p(t).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, n)) } } } }, t.show = function() { if (!(this._element.disabled || p(this._element).hasClass(Oe) || p(this._menu).hasClass(Ne))) { var t = { relatedTarget: this._element },
                        e = p.Event(Ae.SHOW, t),
                        n = c._getParentFromElement(this._element);
                    p(n).trigger(e), e.isDefaultPrevented() || (p(this._menu).toggleClass(Ne), p(n).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, t))) } }, t.hide = function() { if (!this._element.disabled && !p(this._element).hasClass(Oe) && p(this._menu).hasClass(Ne)) { var t = { relatedTarget: this._element },
                        e = p.Event(Ae.HIDE, t),
                        n = c._getParentFromElement(this._element);
                    p(n).trigger(e), e.isDefaultPrevented() || (p(this._menu).toggleClass(Ne), p(n).toggleClass(Ne).trigger(p.Event(Ae.HIDDEN, t))) } }, t.dispose = function() { p.removeData(this._element, Ce), p(this._element).off(Te), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, t.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, t._addEventListeners = function() { var e = this;
                p(this._element).on(Ae.CLICK, function(t) { t.preventDefault(), t.stopPropagation(), e.toggle() }) }, t._getConfig = function(t) { return t = l({}, this.constructor.Default, p(this._element).data(), t), m.typeCheckConfig(we, t, this.constructor.DefaultType), t }, t._getMenuElement = function() { if (!this._menu) { var t = c._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(Fe)) } return this._menu }, t._getPlacement = function() { var t = p(this._element.parentNode),
                    e = qe; return t.hasClass(ke) ? (e = Ue, p(this._menu).hasClass(Pe) && (e = Be)) : t.hasClass(Le) ? e = Qe : t.hasClass(xe) ? e = Ve : p(this._menu).hasClass(Pe) && (e = Ke), e }, t._detectNavbar = function() { return 0 < p(this._element).closest(".navbar").length }, t._getOffset = function() { var e = this,
                    t = {}; return "function" == typeof this._config.offset ? t.fn = function(t) { return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t } : t.offset = this._config.offset, t }, t._getPopperConfig = function() { var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), t }, c._jQueryInterface = function(e) { return this.each(function() { var t = p(this).data(Ce); if (t || (t = new c(this, "object" == typeof e ? e : null), p(this).data(Ce, t)), "string" == typeof e) { if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]() } }) }, c._clearMenus = function(t) { if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var e = [].slice.call(document.querySelectorAll(je)), n = 0, i = e.length; n < i; n++) { var o = c._getParentFromElement(e[n]),
                            r = p(e[n]).data(Ce),
                            s = { relatedTarget: e[n] }; if (t && "click" === t.type && (s.clickEvent = t), r) { var a = r._menu; if (p(o).hasClass(Ne) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && p.contains(o, t.target))) { var l = p.Event(Ae.HIDE, s);
                                p(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), e[n].setAttribute("aria-expanded", "false"), p(a).removeClass(Ne), p(o).removeClass(Ne).trigger(p.Event(Ae.HIDDEN, s))) } } } }, c._getParentFromElement = function(t) { var e, n = m.getSelectorFromElement(t); return n && (e = document.querySelector(n)), e || t.parentNode }, c._dataApiKeydownHandler = function(t) { if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || p(t.target).closest(Fe).length)) : Ie.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !p(this).hasClass(Oe))) { var e = c._getParentFromElement(this),
                        n = p(e).hasClass(Ne); if (n && (!n || 27 !== t.which && 32 !== t.which)) { var i = [].slice.call(e.querySelectorAll(We)); if (0 !== i.length) { var o = i.indexOf(t.target);
                            38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus() } } else { if (27 === t.which) { var r = e.querySelector(je);
                            p(r).trigger("focus") }
                        p(this).trigger("click") } } }, s(c, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return Ye } }, { key: "DefaultType", get: function() { return ze } }]), c }();
    p(document).on(Ae.KEYDOWN_DATA_API, je, Xe._dataApiKeydownHandler).on(Ae.KEYDOWN_DATA_API, Fe, Xe._dataApiKeydownHandler).on(Ae.CLICK_DATA_API + " " + Ae.KEYUP_DATA_API, Xe._clearMenus).on(Ae.CLICK_DATA_API, je, function(t) { t.preventDefault(), t.stopPropagation(), Xe._jQueryInterface.call(p(this), "toggle") }).on(Ae.CLICK_DATA_API, Re, function(t) { t.stopPropagation() }), p.fn[we] = Xe._jQueryInterface, p.fn[we].Constructor = Xe, p.fn[we].noConflict = function() { return p.fn[we] = De, Xe._jQueryInterface }; var Ge = "modal",
        $e = "bs.modal",
        Je = "." + $e,
        Ze = p.fn[Ge],
        tn = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        en = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        nn = { HIDE: "hide" + Je, HIDDEN: "hidden" + Je, SHOW: "show" + Je, SHOWN: "shown" + Je, FOCUSIN: "focusin" + Je, RESIZE: "resize" + Je, CLICK_DISMISS: "click.dismiss" + Je, KEYDOWN_DISMISS: "keydown.dismiss" + Je, MOUSEUP_DISMISS: "mouseup.dismiss" + Je, MOUSEDOWN_DISMISS: "mousedown.dismiss" + Je, CLICK_DATA_API: "click" + Je + ".data-api" },
        on = "modal-dialog-scrollable",
        rn = "modal-scrollbar-measure",
        sn = "modal-backdrop",
        an = "modal-open",
        ln = "fade",
        cn = "show",
        hn = ".modal-dialog",
        un = ".modal-body",
        fn = '[data-toggle="modal"]',
        dn = '[data-dismiss="modal"]',
        pn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        mn = ".sticky-top",
        gn = function() {
            function o(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(hn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0 } var t = o.prototype; return t.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, t.show = function(t) { var e = this; if (!this._isShown && !this._isTransitioning) { p(this._element).hasClass(ln) && (this._isTransitioning = !0); var n = p.Event(nn.SHOW, { relatedTarget: t });
                    p(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), p(this._element).on(nn.CLICK_DISMISS, dn, function(t) { return e.hide(t) }), p(this._dialog).on(nn.MOUSEDOWN_DISMISS, function() { p(e._element).one(nn.MOUSEUP_DISMISS, function(t) { p(t.target).is(e._element) && (e._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return e._showElement(t) })) } }, t.hide = function(t) { var e = this; if (t && t.preventDefault(), this._isShown && !this._isTransitioning) { var n = p.Event(nn.HIDE); if (p(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) { this._isShown = !1; var i = p(this._element).hasClass(ln); if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), p(document).off(nn.FOCUSIN), p(this._element).removeClass(cn), p(this._element).off(nn.CLICK_DISMISS), p(this._dialog).off(nn.MOUSEDOWN_DISMISS), i) { var o = m.getTransitionDurationFromElement(this._element);
                            p(this._element).one(m.TRANSITION_END, function(t) { return e._hideModal(t) }).emulateTransitionEnd(o) } else this._hideModal() } } }, t.dispose = function() {
                [window, this._element, this._dialog].forEach(function(t) { return p(t).off(Je) }), p(document).off(nn.FOCUSIN), p.removeData(this._element, $e), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null }, t.handleUpdate = function() { this._adjustDialog() }, t._getConfig = function(t) { return t = l({}, tn, t), m.typeCheckConfig(Ge, t, en), t }, t._showElement = function(t) { var e = this,
                    n = p(this._element).hasClass(ln);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), p(this._dialog).hasClass(on) ? this._dialog.querySelector(un).scrollTop = 0 : this._element.scrollTop = 0, n && m.reflow(this._element), p(this._element).addClass(cn), this._config.focus && this._enforceFocus(); var i = p.Event(nn.SHOWN, { relatedTarget: t }),
                    o = function() { e._config.focus && e._element.focus(), e._isTransitioning = !1, p(e._element).trigger(i) }; if (n) { var r = m.getTransitionDurationFromElement(this._dialog);
                    p(this._dialog).one(m.TRANSITION_END, o).emulateTransitionEnd(r) } else o() }, t._enforceFocus = function() { var e = this;
                p(document).off(nn.FOCUSIN).on(nn.FOCUSIN, function(t) { document !== t.target && e._element !== t.target && 0 === p(e._element).has(t.target).length && e._element.focus() }) }, t._setEscapeEvent = function() { var e = this;
                this._isShown && this._config.keyboard ? p(this._element).on(nn.KEYDOWN_DISMISS, function(t) { 27 === t.which && (t.preventDefault(), e.hide()) }) : this._isShown || p(this._element).off(nn.KEYDOWN_DISMISS) }, t._setResizeEvent = function() { var e = this;
                this._isShown ? p(window).on(nn.RESIZE, function(t) { return e.handleUpdate(t) }) : p(window).off(nn.RESIZE) }, t._hideModal = function() { var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() { p(document.body).removeClass(an), t._resetAdjustments(), t._resetScrollbar(), p(t._element).trigger(nn.HIDDEN) }) }, t._removeBackdrop = function() { this._backdrop && (p(this._backdrop).remove(), this._backdrop = null) }, t._showBackdrop = function(t) { var e = this,
                    n = p(this._element).hasClass(ln) ? ln : ""; if (this._isShown && this._config.backdrop) { if (this._backdrop = document.createElement("div"), this._backdrop.className = sn, n && this._backdrop.classList.add(n), p(this._backdrop).appendTo(document.body), p(this._element).on(nn.CLICK_DISMISS, function(t) { e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide()) }), n && m.reflow(this._backdrop), p(this._backdrop).addClass(cn), !t) return; if (!n) return void t(); var i = m.getTransitionDurationFromElement(this._backdrop);
                    p(this._backdrop).one(m.TRANSITION_END, t).emulateTransitionEnd(i) } else if (!this._isShown && this._backdrop) { p(this._backdrop).removeClass(cn); var o = function() { e._removeBackdrop(), t && t() }; if (p(this._element).hasClass(ln)) { var r = m.getTransitionDurationFromElement(this._backdrop);
                        p(this._backdrop).one(m.TRANSITION_END, o).emulateTransitionEnd(r) } else o() } else t && t() }, t._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, t._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, t._checkScrollbar = function() { var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, t._setScrollbar = function() { var o = this; if (this._isBodyOverflowing) { var t = [].slice.call(document.querySelectorAll(pn)),
                        e = [].slice.call(document.querySelectorAll(mn));
                    p(t).each(function(t, e) { var n = e.style.paddingRight,
                            i = p(e).css("padding-right");
                        p(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px") }), p(e).each(function(t, e) { var n = e.style.marginRight,
                            i = p(e).css("margin-right");
                        p(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px") }); var n = document.body.style.paddingRight,
                        i = p(document.body).css("padding-right");
                    p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px") }
                p(document.body).addClass(an) }, t._resetScrollbar = function() { var t = [].slice.call(document.querySelectorAll(pn));
                p(t).each(function(t, e) { var n = p(e).data("padding-right");
                    p(e).removeData("padding-right"), e.style.paddingRight = n || "" }); var e = [].slice.call(document.querySelectorAll("" + mn));
                p(e).each(function(t, e) { var n = p(e).data("margin-right"); "undefined" != typeof n && p(e).css("margin-right", n).removeData("margin-right") }); var n = p(document.body).data("padding-right");
                p(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "" }, t._getScrollbarWidth = function() { var t = document.createElement("div");
                t.className = rn, document.body.appendChild(t); var e = t.getBoundingClientRect().width - t.clientWidth; return document.body.removeChild(t), e }, o._jQueryInterface = function(n, i) { return this.each(function() { var t = p(this).data($e),
                        e = l({}, tn, p(this).data(), "object" == typeof n && n ? n : {}); if (t || (t = new o(this, e), p(this).data($e, t)), "string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](i) } else e.show && t.show(i) }) }, s(o, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return tn } }]), o }();
    p(document).on(nn.CLICK_DATA_API, fn, function(t) { var e, n = this,
            i = m.getSelectorFromElement(this);
        i && (e = document.querySelector(i)); var o = p(e).data($e) ? "toggle" : l({}, p(e).data(), p(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(); var r = p(e).one(nn.SHOW, function(t) { t.isDefaultPrevented() || r.one(nn.HIDDEN, function() { p(n).is(":visible") && n.focus() }) });
        gn._jQueryInterface.call(p(e), o, this) }), p.fn[Ge] = gn._jQueryInterface, p.fn[Ge].Constructor = gn, p.fn[Ge].noConflict = function() { return p.fn[Ge] = Ze, gn._jQueryInterface }; var _n = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        vn = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
        yn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        En = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function bn(t, s, e) { if (0 === t.length) return t; if (e && "function" == typeof e) return e(t); for (var n = (new window.DOMParser).parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function(t, e) { var n = l[t],
                    i = n.nodeName.toLowerCase(); if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue"; var o = [].slice.call(n.attributes),
                    r = [].concat(s["*"] || [], s[i] || []);
                o.forEach(function(t) {
                    (function(t, e) { var n = t.nodeName.toLowerCase(); if (-1 !== e.indexOf(n)) return -1 === _n.indexOf(n) || Boolean(t.nodeValue.match(yn) || t.nodeValue.match(En)); for (var i = e.filter(function(t) { return t instanceof RegExp }), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1 })(t, r) || n.removeAttribute(t.nodeName) }) }, o = 0, r = l.length; o < r; o++) i(o); return n.body.innerHTML } var wn = "tooltip",
        Cn = "bs.tooltip",
        Tn = "." + Cn,
        Sn = p.fn[wn],
        Dn = "bs-tooltip",
        In = new RegExp("(^|\\s)" + Dn + "\\S+", "g"),
        An = ["sanitize", "whiteList", "sanitizeFn"],
        On = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object" },
        Nn = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        kn = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: vn },
        Ln = "show",
        xn = "out",
        Pn = { HIDE: "hide" + Tn, HIDDEN: "hidden" + Tn, SHOW: "show" + Tn, SHOWN: "shown" + Tn, INSERTED: "inserted" + Tn, CLICK: "click" + Tn, FOCUSIN: "focusin" + Tn, FOCUSOUT: "focusout" + Tn, MOUSEENTER: "mouseenter" + Tn, MOUSELEAVE: "mouseleave" + Tn },
        Hn = "fade",
        jn = "show",
        Rn = ".tooltip-inner",
        Fn = ".arrow",
        Mn = "hover",
        Wn = "focus",
        Un = "click",
        Bn = "manual",
        qn = function() {
            function i(t, e) { if ("undefined" == typeof be) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners() } var t = i.prototype; return t.enable = function() { this._isEnabled = !0 }, t.disable = function() { this._isEnabled = !1 }, t.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, t.toggle = function(t) { if (this._isEnabled)
                    if (t) { var e = this.constructor.DATA_KEY,
                            n = p(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), p(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n) } else { if (p(this.getTipElement()).hasClass(jn)) return void this._leave(null, this);
                        this._enter(null, this) } }, t.dispose = function() { clearTimeout(this._timeout), p.removeData(this.element, this.constructor.DATA_KEY), p(this.element).off(this.constructor.EVENT_KEY), p(this.element).closest(".modal").off("hide.bs.modal"), this.tip && p(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, t.show = function() { var e = this; if ("none" === p(this.element).css("display")) throw new Error("Please use show on visible elements"); var t = p.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { p(this.element).trigger(t); var n = m.findShadowRoot(this.element),
                        i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element); if (t.isDefaultPrevented() || !i) return; var o = this.getTipElement(),
                        r = m.getUID(this.constructor.NAME);
                    o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && p(o).addClass(Hn); var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                        a = this._getAttachment(s);
                    this.addAttachmentClass(a); var l = this._getContainer();
                    p(o).data(this.constructor.DATA_KEY, this), p.contains(this.element.ownerDocument.documentElement, this.tip) || p(o).appendTo(l), p(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new be(this.element, o, { placement: a, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: Fn }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function(t) { return e._handlePopperPlacementChange(t) } }), p(o).addClass(jn), "ontouchstart" in document.documentElement && p(document.body).children().on("mouseover", null, p.noop); var c = function() { e.config.animation && e._fixTransition(); var t = e._hoverState;
                        e._hoverState = null, p(e.element).trigger(e.constructor.Event.SHOWN), t === xn && e._leave(null, e) }; if (p(this.tip).hasClass(Hn)) { var h = m.getTransitionDurationFromElement(this.tip);
                        p(this.tip).one(m.TRANSITION_END, c).emulateTransitionEnd(h) } else c() } }, t.hide = function(t) { var e = this,
                    n = this.getTipElement(),
                    i = p.Event(this.constructor.Event.HIDE),
                    o = function() { e._hoverState !== Ln && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), p(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t() }; if (p(this.element).trigger(i), !i.isDefaultPrevented()) { if (p(n).removeClass(jn), "ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), this._activeTrigger[Un] = !1, this._activeTrigger[Wn] = !1, this._activeTrigger[Mn] = !1, p(this.tip).hasClass(Hn)) { var r = m.getTransitionDurationFromElement(n);
                        p(n).one(m.TRANSITION_END, o).emulateTransitionEnd(r) } else o();
                    this._hoverState = "" } }, t.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, t.isWithContent = function() { return Boolean(this.getTitle()) }, t.addAttachmentClass = function(t) { p(this.getTipElement()).addClass(Dn + "-" + t) }, t.getTipElement = function() { return this.tip = this.tip || p(this.config.template)[0], this.tip }, t.setContent = function() { var t = this.getTipElement();
                this.setElementContent(p(t.querySelectorAll(Rn)), this.getTitle()), p(t).removeClass(Hn + " " + jn) }, t.setElementContent = function(t, e) { "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = bn(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? p(e).parent().is(t) || t.empty().append(e) : t.text(p(e).text()) }, t.getTitle = function() { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, t._getOffset = function() { var e = this,
                    t = {}; return "function" == typeof this.config.offset ? t.fn = function(t) { return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t } : t.offset = this.config.offset, t }, t._getContainer = function() { return !1 === this.config.container ? document.body : m.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container) }, t._getAttachment = function(t) { return Nn[t.toUpperCase()] }, t._setListeners = function() { var i = this;
                this.config.trigger.split(" ").forEach(function(t) { if ("click" === t) p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) { return i.toggle(t) });
                    else if (t !== Bn) { var e = t === Mn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = t === Mn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        p(i.element).on(e, i.config.selector, function(t) { return i._enter(t) }).on(n, i.config.selector, function(t) { return i._leave(t) }) } }), p(this.element).closest(".modal").on("hide.bs.modal", function() { i.element && i.hide() }), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, t._fixTitle = function() { var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, t._enter = function(t, e) { var n = this.constructor.DATA_KEY;
                (e = e || p(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), p(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Wn : Mn] = !0), p(e.getTipElement()).hasClass(jn) || e._hoverState === Ln ? e._hoverState = Ln : (clearTimeout(e._timeout), e._hoverState = Ln, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() { e._hoverState === Ln && e.show() }, e.config.delay.show) : e.show()) }, t._leave = function(t, e) { var n = this.constructor.DATA_KEY;
                (e = e || p(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), p(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Wn : Mn] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = xn, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() { e._hoverState === xn && e.hide() }, e.config.delay.hide) : e.hide()) }, t._isWithActiveTrigger = function() { for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1 }, t._getConfig = function(t) { var e = p(this.element).data(); return Object.keys(e).forEach(function(t) {-1 !== An.indexOf(t) && delete e[t] }), "number" == typeof(t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), m.typeCheckConfig(wn, t, this.constructor.DefaultType), t.sanitize && (t.template = bn(t.template, t.whiteList, t.sanitizeFn)), t }, t._getDelegateConfig = function() { var t = {}; if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]); return t }, t._cleanTipClass = function() { var t = p(this.getTipElement()),
                    e = t.attr("class").match(In);
                null !== e && e.length && t.removeClass(e.join("")) }, t._handlePopperPlacementChange = function(t) { var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, t._fixTransition = function() { var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (p(t).removeClass(Hn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e) }, i._jQueryInterface = function(n) { return this.each(function() { var t = p(this).data(Cn),
                        e = "object" == typeof n && n; if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), p(this).data(Cn, t)), "string" == typeof n)) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]() } }) }, s(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return kn } }, { key: "NAME", get: function() { return wn } }, { key: "DATA_KEY", get: function() { return Cn } }, { key: "Event", get: function() { return Pn } }, { key: "EVENT_KEY", get: function() { return Tn } }, { key: "DefaultType", get: function() { return On } }]), i }();
    p.fn[wn] = qn._jQueryInterface, p.fn[wn].Constructor = qn, p.fn[wn].noConflict = function() { return p.fn[wn] = Sn, qn._jQueryInterface }; var Kn = "popover",
        Qn = "bs.popover",
        Vn = "." + Qn,
        Yn = p.fn[Kn],
        zn = "bs-popover",
        Xn = new RegExp("(^|\\s)" + zn + "\\S+", "g"),
        Gn = l({}, qn.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        $n = l({}, qn.DefaultType, { content: "(string|element|function)" }),
        Jn = "fade",
        Zn = "show",
        ti = ".popover-header",
        ei = ".popover-body",
        ni = { HIDE: "hide" + Vn, HIDDEN: "hidden" + Vn, SHOW: "show" + Vn, SHOWN: "shown" + Vn, INSERTED: "inserted" + Vn, CLICK: "click" + Vn, FOCUSIN: "focusin" + Vn, FOCUSOUT: "focusout" + Vn, MOUSEENTER: "mouseenter" + Vn, MOUSELEAVE: "mouseleave" + Vn },
        ii = function(t) { var e, n;

            function i() { return t.apply(this, arguments) || this }
            n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n; var o = i.prototype; return o.isWithContent = function() { return this.getTitle() || this._getContent() }, o.addAttachmentClass = function(t) { p(this.getTipElement()).addClass(zn + "-" + t) }, o.getTipElement = function() { return this.tip = this.tip || p(this.config.template)[0], this.tip }, o.setContent = function() { var t = p(this.getTipElement());
                this.setElementContent(t.find(ti), this.getTitle()); var e = this._getContent(); "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(ei), e), t.removeClass(Jn + " " + Zn) }, o._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, o._cleanTipClass = function() { var t = p(this.getTipElement()),
                    e = t.attr("class").match(Xn);
                null !== e && 0 < e.length && t.removeClass(e.join("")) }, i._jQueryInterface = function(n) { return this.each(function() { var t = p(this).data(Qn),
                        e = "object" == typeof n ? n : null; if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), p(this).data(Qn, t)), "string" == typeof n)) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]() } }) }, s(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return Gn } }, { key: "NAME", get: function() { return Kn } }, { key: "DATA_KEY", get: function() { return Qn } }, { key: "Event", get: function() { return ni } }, { key: "EVENT_KEY", get: function() { return Vn } }, { key: "DefaultType", get: function() { return $n } }]), i }(qn);
    p.fn[Kn] = ii._jQueryInterface, p.fn[Kn].Constructor = ii, p.fn[Kn].noConflict = function() { return p.fn[Kn] = Yn, ii._jQueryInterface }; var oi = "scrollspy",
        ri = "bs.scrollspy",
        si = "." + ri,
        ai = p.fn[oi],
        li = { offset: 10, method: "auto", target: "" },
        ci = { offset: "number", method: "string", target: "(string|element)" },
        hi = { ACTIVATE: "activate" + si, SCROLL: "scroll" + si, LOAD_DATA_API: "load" + si + ".data-api" },
        ui = "dropdown-item",
        fi = "active",
        di = '[data-spy="scroll"]',
        pi = ".nav, .list-group",
        mi = ".nav-link",
        gi = ".nav-item",
        _i = ".list-group-item",
        vi = ".dropdown",
        yi = ".dropdown-item",
        Ei = ".dropdown-toggle",
        bi = "offset",
        wi = "position",
        Ci = function() {
            function n(t, e) { var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + mi + "," + this._config.target + " " + _i + "," + this._config.target + " " + yi, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, p(this._scrollElement).on(hi.SCROLL, function(t) { return n._process(t) }), this.refresh(), this._process() } var t = n.prototype; return t.refresh = function() { var e = this,
                    t = this._scrollElement === this._scrollElement.window ? bi : wi,
                    o = "auto" === this._config.method ? t : this._config.method,
                    r = o === wi ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) { var e, n = m.getSelectorFromElement(t); if (n && (e = document.querySelector(n)), e) { var i = e.getBoundingClientRect(); if (i.width || i.height) return [p(e)[o]().top + r, n] } return null }).filter(function(t) { return t }).sort(function(t, e) { return t[0] - e[0] }).forEach(function(t) { e._offsets.push(t[0]), e._targets.push(t[1]) }) }, t.dispose = function() { p.removeData(this._element, ri), p(this._scrollElement).off(si), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, t._getConfig = function(t) { if ("string" != typeof(t = l({}, li, "object" == typeof t && t ? t : {})).target) { var e = p(t.target).attr("id");
                    e || (e = m.getUID(oi), p(t.target).attr("id", e)), t.target = "#" + e } return m.typeCheckConfig(oi, t, ci), t }, t._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, t._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, t._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, t._process = function() { var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), n <= t) { var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i) } else { if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var o = this._offsets.length; o--;) { this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]) } } }, t._activate = function(e) { this._activeTarget = e, this._clear(); var t = this._selector.split(",").map(function(t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' }),
                    n = p([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass(ui) ? (n.closest(vi).find(Ei).addClass(fi), n.addClass(fi)) : (n.addClass(fi), n.parents(pi).prev(mi + ", " + _i).addClass(fi), n.parents(pi).prev(gi).children(mi).addClass(fi)), p(this._scrollElement).trigger(hi.ACTIVATE, { relatedTarget: e }) }, t._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) { return t.classList.contains(fi) }).forEach(function(t) { return t.classList.remove(fi) }) }, n._jQueryInterface = function(e) { return this.each(function() { var t = p(this).data(ri); if (t || (t = new n(this, "object" == typeof e && e), p(this).data(ri, t)), "string" == typeof e) { if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]() } }) }, s(n, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return li } }]), n }();
    p(window).on(hi.LOAD_DATA_API, function() { for (var t = [].slice.call(document.querySelectorAll(di)), e = t.length; e--;) { var n = p(t[e]);
            Ci._jQueryInterface.call(n, n.data()) } }), p.fn[oi] = Ci._jQueryInterface, p.fn[oi].Constructor = Ci, p.fn[oi].noConflict = function() { return p.fn[oi] = ai, Ci._jQueryInterface }; var Ti = "bs.tab",
        Si = "." + Ti,
        Di = p.fn.tab,
        Ii = { HIDE: "hide" + Si, HIDDEN: "hidden" + Si, SHOW: "show" + Si, SHOWN: "shown" + Si, CLICK_DATA_API: "click" + Si + ".data-api" },
        Ai = "dropdown-menu",
        Oi = "active",
        Ni = "disabled",
        ki = "fade",
        Li = "show",
        xi = ".dropdown",
        Pi = ".nav, .list-group",
        Hi = ".active",
        ji = "> li > .active",
        Ri = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        Fi = ".dropdown-toggle",
        Mi = "> .dropdown-menu .active",
        Wi = function() {
            function i(t) { this._element = t } var t = i.prototype; return t.show = function() { var n = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(Oi) || p(this._element).hasClass(Ni))) { var t, i, e = p(this._element).closest(Pi)[0],
                        o = m.getSelectorFromElement(this._element); if (e) { var r = "UL" === e.nodeName || "OL" === e.nodeName ? ji : Hi;
                        i = (i = p.makeArray(p(e).find(r)))[i.length - 1] } var s = p.Event(Ii.HIDE, { relatedTarget: this._element }),
                        a = p.Event(Ii.SHOW, { relatedTarget: i }); if (i && p(i).trigger(s), p(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) { o && (t = document.querySelector(o)), this._activate(this._element, e); var l = function() { var t = p.Event(Ii.HIDDEN, { relatedTarget: n._element }),
                                e = p.Event(Ii.SHOWN, { relatedTarget: i });
                            p(i).trigger(t), p(n._element).trigger(e) };
                        t ? this._activate(t, t.parentNode, l) : l() } } }, t.dispose = function() { p.removeData(this._element, Ti), this._element = null }, t._activate = function(t, e, n) { var i = this,
                    o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? p(e).children(Hi) : p(e).find(ji))[0],
                    r = n && o && p(o).hasClass(ki),
                    s = function() { return i._transitionComplete(t, o, n) }; if (o && r) { var a = m.getTransitionDurationFromElement(o);
                    p(o).removeClass(Li).one(m.TRANSITION_END, s).emulateTransitionEnd(a) } else s() }, t._transitionComplete = function(t, e, n) { if (e) { p(e).removeClass(Oi); var i = p(e.parentNode).find(Mi)[0];
                    i && p(i).removeClass(Oi), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1) } if (p(t).addClass(Oi), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), m.reflow(t), t.classList.contains(ki) && t.classList.add(Li), t.parentNode && p(t.parentNode).hasClass(Ai)) { var o = p(t).closest(xi)[0]; if (o) { var r = [].slice.call(o.querySelectorAll(Fi));
                        p(r).addClass(Oi) }
                    t.setAttribute("aria-expanded", !0) }
                n && n() }, i._jQueryInterface = function(n) { return this.each(function() { var t = p(this),
                        e = t.data(Ti); if (e || (e = new i(this), t.data(Ti, e)), "string" == typeof n) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]() } }) }, s(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), i }();
    p(document).on(Ii.CLICK_DATA_API, Ri, function(t) { t.preventDefault(), Wi._jQueryInterface.call(p(this), "show") }), p.fn.tab = Wi._jQueryInterface, p.fn.tab.Constructor = Wi, p.fn.tab.noConflict = function() { return p.fn.tab = Di, Wi._jQueryInterface }; var Ui = "toast",
        Bi = "bs.toast",
        qi = "." + Bi,
        Ki = p.fn[Ui],
        Qi = { CLICK_DISMISS: "click.dismiss" + qi, HIDE: "hide" + qi, HIDDEN: "hidden" + qi, SHOW: "show" + qi, SHOWN: "shown" + qi },
        Vi = "fade",
        Yi = "hide",
        zi = "show",
        Xi = "showing",
        Gi = { animation: "boolean", autohide: "boolean", delay: "number" },
        $i = { animation: !0, autohide: !0, delay: 500 },
        Ji = '[data-dismiss="toast"]',
        Zi = function() {
            function i(t, e) { this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners() } var t = i.prototype; return t.show = function() { var t = this;
                p(this._element).trigger(Qi.SHOW), this._config.animation && this._element.classList.add(Vi); var e = function() { t._element.classList.remove(Xi), t._element.classList.add(zi), p(t._element).trigger(Qi.SHOWN), t._config.autohide && t.hide() }; if (this._element.classList.remove(Yi), this._element.classList.add(Xi), this._config.animation) { var n = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n) } else e() }, t.hide = function(t) { var e = this;
                this._element.classList.contains(zi) && (p(this._element).trigger(Qi.HIDE), t ? this._close() : this._timeout = setTimeout(function() { e._close() }, this._config.delay)) }, t.dispose = function() { clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(zi) && this._element.classList.remove(zi), p(this._element).off(Qi.CLICK_DISMISS), p.removeData(this._element, Bi), this._element = null, this._config = null }, t._getConfig = function(t) { return t = l({}, $i, p(this._element).data(), "object" == typeof t && t ? t : {}), m.typeCheckConfig(Ui, t, this.constructor.DefaultType), t }, t._setListeners = function() { var t = this;
                p(this._element).on(Qi.CLICK_DISMISS, Ji, function() { return t.hide(!0) }) }, t._close = function() { var t = this,
                    e = function() { t._element.classList.add(Yi), p(t._element).trigger(Qi.HIDDEN) }; if (this._element.classList.remove(zi), this._config.animation) { var n = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n) } else e() }, i._jQueryInterface = function(n) { return this.each(function() { var t = p(this),
                        e = t.data(Bi); if (e || (e = new i(this, "object" == typeof n && n), t.data(Bi, e)), "string" == typeof n) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](this) } }) }, s(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "DefaultType", get: function() { return Gi } }, { key: "Default", get: function() { return $i } }]), i }();
    p.fn[Ui] = Zi._jQueryInterface, p.fn[Ui].Constructor = Zi, p.fn[Ui].noConflict = function() { return p.fn[Ui] = Ki, Zi._jQueryInterface },
        function() { if ("undefined" == typeof p) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var t = p.fn.jquery.split(" ")[0].split("."); if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(), t.Util = m, t.Alert = g, t.Button = k, t.Carousel = at, t.Collapse = Ct, t.Dropdown = Xe, t.Modal = gn, t.Popover = ii, t.Scrollspy = Ci, t.Tab = Wi, t.Toast = Zi, t.Tooltip = qn, Object.defineProperty(t, "__esModule", { value: !0 }) });;
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(factory) { if (typeof define === 'function' && define.amd) { define(['jquery'], factory); } else if (typeof exports === 'object') { factory(require('jquery')); } else { factory(jQuery); } }(function($) {
    var pluses = /\+/g;

    function encode(s) { return config.raw ? s : encodeURIComponent(s); }

    function decode(s) { return config.raw ? s : decodeURIComponent(s); }

    function stringifyCookieValue(value) { return encode(config.json ? JSON.stringify(value) : String(value)); }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) { s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\'); }
        try { s = decodeURIComponent(s.replace(pluses, ' ')); return config.json ? JSON.parse(s) : s; } catch (e) {}
    }

    function read(s, converter) { var value = config.raw ? s : parseCookieValue(s); return $.isFunction(converter) ? converter(value) : value; }
    var config = $.cookie = function(key, value, options) {
        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === 'number') { var days = options.expires,
                    t = options.expires = new Date();
                t.setTime(+t + days * 864e+5); }
            return (document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
        }
        var result = key ? undefined : {};
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');
            if (key && key === name) { result = read(cookie, value); break; }
            if (!key && (cookie = read(cookie)) !== undefined) { result[name] = cookie; }
        }
        return result;
    };
    config.defaults = {};
    $.removeCookie = function(key, options) {
        if ($.cookie(key) === undefined) { return false; }
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };
}));;
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t() }(this, function() { "use strict"; var e, i;

    function c() { return e.apply(null, arguments) }

    function o(e) { return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e) }

    function u(e) { return null != e && "[object Object]" === Object.prototype.toString.call(e) }

    function l(e) { return void 0 === e }

    function h(e) { return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e) }

    function d(e) { return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e) }

    function f(e, t) { var n, s = []; for (n = 0; n < e.length; ++n) s.push(t(e[n], n)); return s }

    function m(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }

    function _(e, t) { for (var n in t) m(t, n) && (e[n] = t[n]); return m(t, "toString") && (e.toString = t.toString), m(t, "valueOf") && (e.valueOf = t.valueOf), e }

    function y(e, t, n, s) { return Tt(e, t, n, s, !0).utc() }

    function g(e) { return null == e._pf && (e._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), e._pf }

    function v(e) { if (null == e._isValid) { var t = g(e),
                n = i.call(t.parsedDateParts, function(e) { return null != e }),
                s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n); if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s;
            e._isValid = s } return e._isValid }

    function p(e) { var t = y(NaN); return null != e ? _(g(t), e) : g(t).userInvalidated = !0, t }
    i = Array.prototype.some ? Array.prototype.some : function(e) { for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)
            if (s in t && e.call(this, t[s], s, t)) return !0;
        return !1 }; var r = c.momentProperties = [];

    function w(e, t) { var n, s, i; if (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), l(t._i) || (e._i = t._i), l(t._f) || (e._f = t._f), l(t._l) || (e._l = t._l), l(t._strict) || (e._strict = t._strict), l(t._tzm) || (e._tzm = t._tzm), l(t._isUTC) || (e._isUTC = t._isUTC), l(t._offset) || (e._offset = t._offset), l(t._pf) || (e._pf = g(t)), l(t._locale) || (e._locale = t._locale), 0 < r.length)
            for (n = 0; n < r.length; n++) l(i = t[s = r[n]]) || (e[s] = i); return e } var t = !1;

    function M(e) { w(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === t && (t = !0, c.updateOffset(this), t = !1) }

    function k(e) { return e instanceof M || null != e && null != e._isAMomentObject }

    function S(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) }

    function D(e) { var t = +e,
            n = 0; return 0 !== t && isFinite(t) && (n = S(t)), n }

    function a(e, t, n) { var s, i = Math.min(e.length, t.length),
            r = Math.abs(e.length - t.length),
            a = 0; for (s = 0; s < i; s++)(n && e[s] !== t[s] || !n && D(e[s]) !== D(t[s])) && a++; return a + r }

    function Y(e) {!1 === c.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e) }

    function n(i, r) { var a = !0; return _(function() { if (null != c.deprecationHandler && c.deprecationHandler(null, i), a) { for (var e, t = [], n = 0; n < arguments.length; n++) { if (e = "", "object" == typeof arguments[n]) { for (var s in e += "\n[" + n + "] ", arguments[0]) e += s + ": " + arguments[0][s] + ", ";
                        e = e.slice(0, -2) } else e = arguments[n];
                    t.push(e) }
                Y(i + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + (new Error).stack), a = !1 } return r.apply(this, arguments) }, r) } var s, O = {};

    function T(e, t) { null != c.deprecationHandler && c.deprecationHandler(e, t), O[e] || (Y(t), O[e] = !0) }

    function b(e) { return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e) }

    function x(e, t) { var n, s = _({}, e); for (n in t) m(t, n) && (u(e[n]) && u(t[n]) ? (s[n] = {}, _(s[n], e[n]), _(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]); for (n in e) m(e, n) && !m(t, n) && u(e[n]) && (s[n] = _({}, s[n])); return s }

    function P(e) { null != e && this.set(e) }
    c.suppressDeprecationWarnings = !1, c.deprecationHandler = null, s = Object.keys ? Object.keys : function(e) { var t, n = []; for (t in e) m(e, t) && n.push(t); return n }; var W = {};

    function C(e, t) { var n = e.toLowerCase();
        W[n] = W[n + "s"] = W[t] = e }

    function H(e) { return "string" == typeof e ? W[e] || W[e.toLowerCase()] : void 0 }

    function R(e) { var t, n, s = {}; for (n in e) m(e, n) && (t = H(n)) && (s[t] = e[n]); return s } var U = {};

    function F(e, t) { U[e] = t }

    function L(e, t, n) { var s = "" + Math.abs(e),
            i = t - s.length; return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s } var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        G = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        V = {},
        E = {};

    function I(e, t, n, s) { var i = s; "string" == typeof s && (i = function() { return this[s]() }), e && (E[e] = i), t && (E[t[0]] = function() { return L(i.apply(this, arguments), t[1], t[2]) }), n && (E[n] = function() { return this.localeData().ordinal(i.apply(this, arguments), e) }) }

    function A(e, t) { return e.isValid() ? (t = j(t, e.localeData()), V[t] = V[t] || function(s) { var e, i, t, r = s.match(N); for (e = 0, i = r.length; e < i; e++) E[r[e]] ? r[e] = E[r[e]] : r[e] = (t = r[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, ""); return function(e) { var t, n = ""; for (t = 0; t < i; t++) n += b(r[t]) ? r[t].call(e, s) : r[t]; return n } }(t), V[t](e)) : e.localeData().invalidDate() }

    function j(e, t) { var n = 5;

        function s(e) { return t.longDateFormat(e) || e } for (G.lastIndex = 0; 0 <= n && G.test(e);) e = e.replace(G, s), G.lastIndex = 0, n -= 1; return e } var Z = /\d/,
        z = /\d\d/,
        $ = /\d{3}/,
        q = /\d{4}/,
        J = /[+-]?\d{6}/,
        B = /\d\d?/,
        Q = /\d\d\d\d?/,
        X = /\d\d\d\d\d\d?/,
        K = /\d{1,3}/,
        ee = /\d{1,4}/,
        te = /[+-]?\d{1,6}/,
        ne = /\d+/,
        se = /[+-]?\d+/,
        ie = /Z|[+-]\d\d:?\d\d/gi,
        re = /Z|[+-]\d\d(?::?\d\d)?/gi,
        ae = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        oe = {};

    function ue(e, n, s) { oe[e] = b(n) ? n : function(e, t) { return e && s ? s : n } }

    function le(e, t) { return m(oe, e) ? oe[e](t._strict, t._locale) : new RegExp(he(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, s, i) { return t || n || s || i }))) }

    function he(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } var de = {};

    function ce(e, n) { var t, s = n; for ("string" == typeof e && (e = [e]), h(n) && (s = function(e, t) { t[n] = D(e) }), t = 0; t < e.length; t++) de[e[t]] = s }

    function fe(e, i) { ce(e, function(e, t, n, s) { n._w = n._w || {}, i(e, n._w, n, s) }) } var me = 0,
        _e = 1,
        ye = 2,
        ge = 3,
        ve = 4,
        pe = 5,
        we = 6,
        Me = 7,
        ke = 8;

    function Se(e) { return De(e) ? 366 : 365 }

    function De(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 }
    I("Y", 0, 0, function() { var e = this.year(); return e <= 9999 ? "" + e : "+" + e }), I(0, ["YY", 2], 0, function() { return this.year() % 100 }), I(0, ["YYYY", 4], 0, "year"), I(0, ["YYYYY", 5], 0, "year"), I(0, ["YYYYYY", 6, !0], 0, "year"), C("year", "y"), F("year", 1), ue("Y", se), ue("YY", B, z), ue("YYYY", ee, q), ue("YYYYY", te, J), ue("YYYYYY", te, J), ce(["YYYYY", "YYYYYY"], me), ce("YYYY", function(e, t) { t[me] = 2 === e.length ? c.parseTwoDigitYear(e) : D(e) }), ce("YY", function(e, t) { t[me] = c.parseTwoDigitYear(e) }), ce("Y", function(e, t) { t[me] = parseInt(e, 10) }), c.parseTwoDigitYear = function(e) { return D(e) + (68 < D(e) ? 1900 : 2e3) }; var Ye, Oe = Te("FullYear", !0);

    function Te(t, n) { return function(e) { return null != e ? (xe(this, t, e), c.updateOffset(this, n), this) : be(this, t) } }

    function be(e, t) { return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN }

    function xe(e, t, n) { e.isValid() && !isNaN(n) && ("FullYear" === t && De(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Pe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)) }

    function Pe(e, t) { if (isNaN(e) || isNaN(t)) return NaN; var n, s = (t % (n = 12) + n) % n; return e += (t - s) / 12, 1 === s ? De(e) ? 29 : 28 : 31 - s % 7 % 2 }
    Ye = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) { var t; for (t = 0; t < this.length; ++t)
            if (this[t] === e) return t;
        return -1 }, I("M", ["MM", 2], "Mo", function() { return this.month() + 1 }), I("MMM", 0, 0, function(e) { return this.localeData().monthsShort(this, e) }), I("MMMM", 0, 0, function(e) { return this.localeData().months(this, e) }), C("month", "M"), F("month", 8), ue("M", B), ue("MM", B, z), ue("MMM", function(e, t) { return t.monthsShortRegex(e) }), ue("MMMM", function(e, t) { return t.monthsRegex(e) }), ce(["M", "MM"], function(e, t) { t[_e] = D(e) - 1 }), ce(["MMM", "MMMM"], function(e, t, n, s) { var i = n._locale.monthsParse(e, s, n._strict);
        null != i ? t[_e] = i : g(n).invalidMonth = e }); var We = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Ce = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"); var He = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

    function Re(e, t) { var n; if (!e.isValid()) return e; if ("string" == typeof t)
            if (/^\d+$/.test(t)) t = D(t);
            else if (!h(t = e.localeData().monthsParse(t))) return e; return n = Math.min(e.date(), Pe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e }

    function Ue(e) { return null != e ? (Re(this, e), c.updateOffset(this, !0), this) : be(this, "Month") } var Fe = ae; var Le = ae;

    function Ne() {
        function e(e, t) { return t.length - e.length } var t, n, s = [],
            i = [],
            r = []; for (t = 0; t < 12; t++) n = y([2e3, t]), s.push(this.monthsShort(n, "")), i.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, "")); for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++) s[t] = he(s[t]), i[t] = he(i[t]); for (t = 0; t < 24; t++) r[t] = he(r[t]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i") }

    function Ge(e) { var t; if (e < 100 && 0 <= e) { var n = Array.prototype.slice.call(arguments);
            n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e) } else t = new Date(Date.UTC.apply(null, arguments)); return t }

    function Ve(e, t, n) { var s = 7 + t - n; return -((7 + Ge(e, 0, s).getUTCDay() - t) % 7) + s - 1 }

    function Ee(e, t, n, s, i) { var r, a, o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + Ve(e, s, i); return a = o <= 0 ? Se(r = e - 1) + o : o > Se(e) ? (r = e + 1, o - Se(e)) : (r = e, o), { year: r, dayOfYear: a } }

    function Ie(e, t, n) { var s, i, r = Ve(e.year(), t, n),
            a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1; return a < 1 ? s = a + Ae(i = e.year() - 1, t, n) : a > Ae(e.year(), t, n) ? (s = a - Ae(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = a), { week: s, year: i } }

    function Ae(e, t, n) { var s = Ve(e, t, n),
            i = Ve(e + 1, t, n); return (Se(e) - s + i) / 7 }
    I("w", ["ww", 2], "wo", "week"), I("W", ["WW", 2], "Wo", "isoWeek"), C("week", "w"), C("isoWeek", "W"), F("week", 5), F("isoWeek", 5), ue("w", B), ue("ww", B, z), ue("W", B), ue("WW", B, z), fe(["w", "ww", "W", "WW"], function(e, t, n, s) { t[s.substr(0, 1)] = D(e) });

    function je(e, t) { return e.slice(t, 7).concat(e.slice(0, t)) }
    I("d", 0, "do", "day"), I("dd", 0, 0, function(e) { return this.localeData().weekdaysMin(this, e) }), I("ddd", 0, 0, function(e) { return this.localeData().weekdaysShort(this, e) }), I("dddd", 0, 0, function(e) { return this.localeData().weekdays(this, e) }), I("e", 0, 0, "weekday"), I("E", 0, 0, "isoWeekday"), C("day", "d"), C("weekday", "e"), C("isoWeekday", "E"), F("day", 11), F("weekday", 11), F("isoWeekday", 11), ue("d", B), ue("e", B), ue("E", B), ue("dd", function(e, t) { return t.weekdaysMinRegex(e) }), ue("ddd", function(e, t) { return t.weekdaysShortRegex(e) }), ue("dddd", function(e, t) { return t.weekdaysRegex(e) }), fe(["dd", "ddd", "dddd"], function(e, t, n, s) { var i = n._locale.weekdaysParse(e, s, n._strict);
        null != i ? t.d = i : g(n).invalidWeekday = e }), fe(["d", "e", "E"], function(e, t, n, s) { t[s] = D(e) }); var Ze = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"); var ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"); var $e = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"); var qe = ae; var Je = ae; var Be = ae;

    function Qe() {
        function e(e, t) { return t.length - e.length } var t, n, s, i, r, a = [],
            o = [],
            u = [],
            l = []; for (t = 0; t < 7; t++) n = y([2e3, 1]).day(t), s = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), a.push(s), o.push(i), u.push(r), l.push(s), l.push(i), l.push(r); for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++) o[t] = he(o[t]), u[t] = he(u[t]), l[t] = he(l[t]);
        this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i") }

    function Xe() { return this.hours() % 12 || 12 }

    function Ke(e, t) { I(e, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), t) }) }

    function et(e, t) { return t._meridiemParse }
    I("H", ["HH", 2], 0, "hour"), I("h", ["hh", 2], 0, Xe), I("k", ["kk", 2], 0, function() { return this.hours() || 24 }), I("hmm", 0, 0, function() { return "" + Xe.apply(this) + L(this.minutes(), 2) }), I("hmmss", 0, 0, function() { return "" + Xe.apply(this) + L(this.minutes(), 2) + L(this.seconds(), 2) }), I("Hmm", 0, 0, function() { return "" + this.hours() + L(this.minutes(), 2) }), I("Hmmss", 0, 0, function() { return "" + this.hours() + L(this.minutes(), 2) + L(this.seconds(), 2) }), Ke("a", !0), Ke("A", !1), C("hour", "h"), F("hour", 13), ue("a", et), ue("A", et), ue("H", B), ue("h", B), ue("k", B), ue("HH", B, z), ue("hh", B, z), ue("kk", B, z), ue("hmm", Q), ue("hmmss", X), ue("Hmm", Q), ue("Hmmss", X), ce(["H", "HH"], ge), ce(["k", "kk"], function(e, t, n) { var s = D(e);
        t[ge] = 24 === s ? 0 : s }), ce(["a", "A"], function(e, t, n) { n._isPm = n._locale.isPM(e), n._meridiem = e }), ce(["h", "hh"], function(e, t, n) { t[ge] = D(e), g(n).bigHour = !0 }), ce("hmm", function(e, t, n) { var s = e.length - 2;
        t[ge] = D(e.substr(0, s)), t[ve] = D(e.substr(s)), g(n).bigHour = !0 }), ce("hmmss", function(e, t, n) { var s = e.length - 4,
            i = e.length - 2;
        t[ge] = D(e.substr(0, s)), t[ve] = D(e.substr(s, 2)), t[pe] = D(e.substr(i)), g(n).bigHour = !0 }), ce("Hmm", function(e, t, n) { var s = e.length - 2;
        t[ge] = D(e.substr(0, s)), t[ve] = D(e.substr(s)) }), ce("Hmmss", function(e, t, n) { var s = e.length - 4,
            i = e.length - 2;
        t[ge] = D(e.substr(0, s)), t[ve] = D(e.substr(s, 2)), t[pe] = D(e.substr(i)) }); var tt, nt = Te("Hours", !0),
        st = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Ce, monthsShort: He, week: { dow: 0, doy: 6 }, weekdays: Ze, weekdaysMin: $e, weekdaysShort: ze, meridiemParse: /[ap]\.?m?\.?/i },
        it = {},
        rt = {};

    function at(e) { return e ? e.toLowerCase().replace("_", "-") : e }

    function ot(e) { var t = null; if (!it[e] && "undefined" != typeof module && module && module.exports) try { t = tt._abbr, require("./locale/" + e), ut(t) } catch (e) {}
        return it[e] }

    function ut(e, t) { var n; return e && ((n = l(t) ? ht(e) : lt(e, t)) ? tt = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), tt._abbr }

    function lt(e, t) { if (null === t) return delete it[e], null; var n, s = st; if (t.abbr = e, null != it[e]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = it[e]._config;
        else if (null != t.parentLocale)
            if (null != it[t.parentLocale]) s = it[t.parentLocale]._config;
            else { if (null == (n = ot(t.parentLocale))) return rt[t.parentLocale] || (rt[t.parentLocale] = []), rt[t.parentLocale].push({ name: e, config: t }), null;
                s = n._config }
        return it[e] = new P(x(s, t)), rt[e] && rt[e].forEach(function(e) { lt(e.name, e.config) }), ut(e), it[e] }

    function ht(e) { var t; if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return tt; if (!o(e)) { if (t = ot(e)) return t;
            e = [e] } return function(e) { for (var t, n, s, i, r = 0; r < e.length;) { for (t = (i = at(e[r]).split("-")).length, n = (n = at(e[r + 1])) ? n.split("-") : null; 0 < t;) { if (s = ot(i.slice(0, t).join("-"))) return s; if (n && n.length >= t && a(i, n, !0) >= t - 1) break;
                    t-- }
                r++ } return tt }(e) }

    function dt(e) { var t, n = e._a; return n && -2 === g(e).overflow && (t = n[_e] < 0 || 11 < n[_e] ? _e : n[ye] < 1 || n[ye] > Pe(n[me], n[_e]) ? ye : n[ge] < 0 || 24 < n[ge] || 24 === n[ge] && (0 !== n[ve] || 0 !== n[pe] || 0 !== n[we]) ? ge : n[ve] < 0 || 59 < n[ve] ? ve : n[pe] < 0 || 59 < n[pe] ? pe : n[we] < 0 || 999 < n[we] ? we : -1, g(e)._overflowDayOfYear && (t < me || ye < t) && (t = ye), g(e)._overflowWeeks && -1 === t && (t = Me), g(e)._overflowWeekday && -1 === t && (t = ke), g(e).overflow = t), e }

    function ct(e, t, n) { return null != e ? e : null != t ? t : n }

    function ft(e) { var t, n, s, i, r, a = []; if (!e._d) { var o, u; for (o = e, u = new Date(c.now()), s = o._useUTC ? [u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()] : [u.getFullYear(), u.getMonth(), u.getDate()], e._w && null == e._a[ye] && null == e._a[_e] && function(e) { var t, n, s, i, r, a, o, u; if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, a = 4, n = ct(t.GG, e._a[me], Ie(bt(), 1, 4).year), s = ct(t.W, 1), ((i = ct(t.E, 1)) < 1 || 7 < i) && (u = !0);
                    else { r = e._locale._week.dow, a = e._locale._week.doy; var l = Ie(bt(), r, a);
                        n = ct(t.gg, e._a[me], l.year), s = ct(t.w, l.week), null != t.d ? ((i = t.d) < 0 || 6 < i) && (u = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || 6 < t.e) && (u = !0)) : i = r }
                    s < 1 || s > Ae(n, r, a) ? g(e)._overflowWeeks = !0 : null != u ? g(e)._overflowWeekday = !0 : (o = Ee(n, s, i, r, a), e._a[me] = o.year, e._dayOfYear = o.dayOfYear) }(e), null != e._dayOfYear && (r = ct(e._a[me], s[me]), (e._dayOfYear > Se(r) || 0 === e._dayOfYear) && (g(e)._overflowDayOfYear = !0), n = Ge(r, 0, e._dayOfYear), e._a[_e] = n.getUTCMonth(), e._a[ye] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = a[t] = s[t]; for (; t < 7; t++) e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[ge] && 0 === e._a[ve] && 0 === e._a[pe] && 0 === e._a[we] && (e._nextDay = !0, e._a[ge] = 0), e._d = (e._useUTC ? Ge : function(e, t, n, s, i, r, a) { var o; return e < 100 && 0 <= e ? (o = new Date(e + 400, t, n, s, i, r, a), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, s, i, r, a), o }).apply(null, a), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ge] = 24), e._w && void 0 !== e._w.d && e._w.d !== i && (g(e).weekdayMismatch = !0) } } var mt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        _t = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        yt = /Z|[+-]\d\d(?::?\d\d)?/,
        gt = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        vt = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        pt = /^\/?Date\((\-?\d+)/i;

    function wt(e) { var t, n, s, i, r, a, o = e._i,
            u = mt.exec(o) || _t.exec(o); if (u) { for (g(e).iso = !0, t = 0, n = gt.length; t < n; t++)
                if (gt[t][1].exec(u[1])) { i = gt[t][0], s = !1 !== gt[t][2]; break }
            if (null == i) return void(e._isValid = !1); if (u[3]) { for (t = 0, n = vt.length; t < n; t++)
                    if (vt[t][1].exec(u[3])) { r = (u[2] || " ") + vt[t][0]; break }
                if (null == r) return void(e._isValid = !1) } if (!s && null != r) return void(e._isValid = !1); if (u[4]) { if (!yt.exec(u[4])) return void(e._isValid = !1);
                a = "Z" }
            e._f = i + (r || "") + (a || ""), Yt(e) } else e._isValid = !1 } var Mt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function kt(e, t, n, s, i, r) { var a = [function(e) { var t = parseInt(e, 10); { if (t <= 49) return 2e3 + t; if (t <= 999) return 1900 + t } return t }(e), He.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10)]; return r && a.push(parseInt(r, 10)), a } var St = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };

    function Dt(e) { var t, n, s, i = Mt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")); if (i) { var r = kt(i[4], i[3], i[2], i[5], i[6], i[7]); if (t = i[1], n = r, s = e, t && ze.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() && (g(s).weekdayMismatch = !0, !(s._isValid = !1))) return;
            e._a = r, e._tzm = function(e, t, n) { if (e) return St[e]; if (t) return 0; var s = parseInt(n, 10),
                    i = s % 100; return (s - i) / 100 * 60 + i }(i[8], i[9], i[10]), e._d = Ge.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), g(e).rfc2822 = !0 } else e._isValid = !1 }

    function Yt(e) { if (e._f !== c.ISO_8601)
            if (e._f !== c.RFC_2822) { e._a = [], g(e).empty = !0; var t, n, s, i, r, a, o, u, l = "" + e._i,
                    h = l.length,
                    d = 0; for (s = j(e._f, e._locale).match(N) || [], t = 0; t < s.length; t++) i = s[t], (n = (l.match(le(i, e)) || [])[0]) && (0 < (r = l.substr(0, l.indexOf(n))).length && g(e).unusedInput.push(r), l = l.slice(l.indexOf(n) + n.length), d += n.length), E[i] ? (n ? g(e).empty = !1 : g(e).unusedTokens.push(i), a = i, u = e, null != (o = n) && m(de, a) && de[a](o, u._a, u, a)) : e._strict && !n && g(e).unusedTokens.push(i);
                g(e).charsLeftOver = h - d, 0 < l.length && g(e).unusedInput.push(l), e._a[ge] <= 12 && !0 === g(e).bigHour && 0 < e._a[ge] && (g(e).bigHour = void 0), g(e).parsedDateParts = e._a.slice(0), g(e).meridiem = e._meridiem, e._a[ge] = function(e, t, n) { var s; if (null == n) return t; return null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((s = e.isPM(n)) && t < 12 && (t += 12), s || 12 !== t || (t = 0)), t) }(e._locale, e._a[ge], e._meridiem), ft(e), dt(e) } else Dt(e);
        else wt(e) }

    function Ot(e) { var t, n, s, i, r = e._i,
            a = e._f; return e._locale = e._locale || ht(e._l), null === r || void 0 === a && "" === r ? p({ nullInput: !0 }) : ("string" == typeof r && (e._i = r = e._locale.preparse(r)), k(r) ? new M(dt(r)) : (d(r) ? e._d = r : o(a) ? function(e) { var t, n, s, i, r; if (0 === e._f.length) return g(e).invalidFormat = !0, e._d = new Date(NaN); for (i = 0; i < e._f.length; i++) r = 0, t = w({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], Yt(t), v(t) && (r += g(t).charsLeftOver, r += 10 * g(t).unusedTokens.length, g(t).score = r, (null == s || r < s) && (s = r, n = t));
            _(e, n || t) }(e) : a ? Yt(e) : l(n = (t = e)._i) ? t._d = new Date(c.now()) : d(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? (s = t, null === (i = pt.exec(s._i)) ? (wt(s), !1 === s._isValid && (delete s._isValid, Dt(s), !1 === s._isValid && (delete s._isValid, c.createFromInputFallback(s)))) : s._d = new Date(+i[1])) : o(n) ? (t._a = f(n.slice(0), function(e) { return parseInt(e, 10) }), ft(t)) : u(n) ? function(e) { if (!e._d) { var t = R(e._i);
                e._a = f([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) { return e && parseInt(e, 10) }), ft(e) } }(t) : h(n) ? t._d = new Date(n) : c.createFromInputFallback(t), v(e) || (e._d = null), e)) }

    function Tt(e, t, n, s, i) { var r, a = {}; return !0 !== n && !1 !== n || (s = n, n = void 0), (u(e) && function(e) { if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length; var t; for (t in e)
                if (e.hasOwnProperty(t)) return !1;
            return !0 }(e) || o(e) && 0 === e.length) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = i, a._l = n, a._i = e, a._f = t, a._strict = s, (r = new M(dt(Ot(a))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r }

    function bt(e, t, n, s) { return Tt(e, t, n, s, !1) }
    c.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) }), c.ISO_8601 = function() {}, c.RFC_2822 = function() {}; var xt = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = bt.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : p() }),
        Pt = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = bt.apply(null, arguments); return this.isValid() && e.isValid() ? this < e ? this : e : p() });

    function Wt(e, t) { var n, s; if (1 === t.length && o(t[0]) && (t = t[0]), !t.length) return bt(); for (n = t[0], s = 1; s < t.length; ++s) t[s].isValid() && !t[s][e](n) || (n = t[s]); return n } var Ct = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function Ht(e) { var t = R(e),
            n = t.year || 0,
            s = t.quarter || 0,
            i = t.month || 0,
            r = t.week || t.isoWeek || 0,
            a = t.day || 0,
            o = t.hour || 0,
            u = t.minute || 0,
            l = t.second || 0,
            h = t.millisecond || 0;
        this._isValid = function(e) { for (var t in e)
                if (-1 === Ye.call(Ct, t) || null != e[t] && isNaN(e[t])) return !1;
            for (var n = !1, s = 0; s < Ct.length; ++s)
                if (e[Ct[s]]) { if (n) return !1;
                    parseFloat(e[Ct[s]]) !== D(e[Ct[s]]) && (n = !0) }
            return !0 }(t), this._milliseconds = +h + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60, this._days = +a + 7 * r, this._months = +i + 3 * s + 12 * n, this._data = {}, this._locale = ht(), this._bubble() }

    function Rt(e) { return e instanceof Ht }

    function Ut(e) { return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e) }

    function Ft(e, n) { I(e, 0, 0, function() { var e = this.utcOffset(),
                t = "+"; return e < 0 && (e = -e, t = "-"), t + L(~~(e / 60), 2) + n + L(~~e % 60, 2) }) }
    Ft("Z", ":"), Ft("ZZ", ""), ue("Z", re), ue("ZZ", re), ce(["Z", "ZZ"], function(e, t, n) { n._useUTC = !0, n._tzm = Nt(re, e) }); var Lt = /([\+\-]|\d\d)/gi;

    function Nt(e, t) { var n = (t || "").match(e); if (null === n) return null; var s = ((n[n.length - 1] || []) + "").match(Lt) || ["-", 0, 0],
            i = 60 * s[1] + D(s[2]); return 0 === i ? 0 : "+" === s[0] ? i : -i }

    function Gt(e, t) { var n, s; return t._isUTC ? (n = t.clone(), s = (k(e) || d(e) ? e.valueOf() : bt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), c.updateOffset(n, !1), n) : bt(e).local() }

    function Vt(e) { return 15 * -Math.round(e._d.getTimezoneOffset() / 15) }

    function Et() { return !!this.isValid() && (this._isUTC && 0 === this._offset) }
    c.updateOffset = function() {}; var It = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        At = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function jt(e, t) { var n, s, i, r = e,
            a = null; return Rt(e) ? r = { ms: e._milliseconds, d: e._days, M: e._months } : h(e) ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (a = It.exec(e)) ? (n = "-" === a[1] ? -1 : 1, r = { y: 0, d: D(a[ye]) * n, h: D(a[ge]) * n, m: D(a[ve]) * n, s: D(a[pe]) * n, ms: D(Ut(1e3 * a[we])) * n }) : (a = At.exec(e)) ? (n = "-" === a[1] ? -1 : 1, r = { y: Zt(a[2], n), M: Zt(a[3], n), w: Zt(a[4], n), d: Zt(a[5], n), h: Zt(a[6], n), m: Zt(a[7], n), s: Zt(a[8], n) }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (i = function(e, t) { var n; if (!e.isValid() || !t.isValid()) return { milliseconds: 0, months: 0 };
            t = Gt(t, e), e.isBefore(t) ? n = zt(e, t) : ((n = zt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months); return n }(bt(r.from), bt(r.to)), (r = {}).ms = i.milliseconds, r.M = i.months), s = new Ht(r), Rt(e) && m(e, "_locale") && (s._locale = e._locale), s }

    function Zt(e, t) { var n = e && parseFloat(e.replace(",", ".")); return (isNaN(n) ? 0 : n) * t }

    function zt(e, t) { var n = {}; return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n }

    function $t(s, i) { return function(e, t) { var n; return null === t || isNaN(+t) || (T(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = e, e = t, t = n), qt(this, jt(e = "string" == typeof e ? +e : e, t), s), this } }

    function qt(e, t, n, s) { var i = t._milliseconds,
            r = Ut(t._days),
            a = Ut(t._months);
        e.isValid() && (s = null == s || s, a && Re(e, be(e, "Month") + a * n), r && xe(e, "Date", be(e, "Date") + r * n), i && e._d.setTime(e._d.valueOf() + i * n), s && c.updateOffset(e, r || a)) }
    jt.fn = Ht.prototype, jt.invalid = function() { return jt(NaN) }; var Jt = $t(1, "add"),
        Bt = $t(-1, "subtract");

    function Qt(e, t) { var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            s = e.clone().add(n, "months"); return -(n + (t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(n + 1, "months") - s))) || 0 }

    function Xt(e) { var t; return void 0 === e ? this._locale._abbr : (null != (t = ht(e)) && (this._locale = t), this) }
    c.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", c.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]"; var Kt = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) { return void 0 === e ? this.localeData() : this.locale(e) });

    function en() { return this._locale } var tn = 126227808e5;

    function nn(e, t) { return (e % t + t) % t }

    function sn(e, t, n) { return e < 100 && 0 <= e ? new Date(e + 400, t, n) - tn : new Date(e, t, n).valueOf() }

    function rn(e, t, n) { return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - tn : Date.UTC(e, t, n) }

    function an(e, t) { I(0, [e, e.length], 0, t) }

    function on(e, t, n, s, i) { var r; return null == e ? Ie(this, s, i).year : ((r = Ae(e, s, i)) < t && (t = r), function(e, t, n, s, i) { var r = Ee(e, t, n, s, i),
                a = Ge(r.year, 0, r.dayOfYear); return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this }.call(this, e, t, n, s, i)) }
    I(0, ["gg", 2], 0, function() { return this.weekYear() % 100 }), I(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 }), an("gggg", "weekYear"), an("ggggg", "weekYear"), an("GGGG", "isoWeekYear"), an("GGGGG", "isoWeekYear"), C("weekYear", "gg"), C("isoWeekYear", "GG"), F("weekYear", 1), F("isoWeekYear", 1), ue("G", se), ue("g", se), ue("GG", B, z), ue("gg", B, z), ue("GGGG", ee, q), ue("gggg", ee, q), ue("GGGGG", te, J), ue("ggggg", te, J), fe(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, s) { t[s.substr(0, 2)] = D(e) }), fe(["gg", "GG"], function(e, t, n, s) { t[s] = c.parseTwoDigitYear(e) }), I("Q", 0, "Qo", "quarter"), C("quarter", "Q"), F("quarter", 7), ue("Q", Z), ce("Q", function(e, t) { t[_e] = 3 * (D(e) - 1) }), I("D", ["DD", 2], "Do", "date"), C("date", "D"), F("date", 9), ue("D", B), ue("DD", B, z), ue("Do", function(e, t) { return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient }), ce(["D", "DD"], ye), ce("Do", function(e, t) { t[ye] = D(e.match(B)[0]) }); var un = Te("Date", !0);
    I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), C("dayOfYear", "DDD"), F("dayOfYear", 4), ue("DDD", K), ue("DDDD", $), ce(["DDD", "DDDD"], function(e, t, n) { n._dayOfYear = D(e) }), I("m", ["mm", 2], 0, "minute"), C("minute", "m"), F("minute", 14), ue("m", B), ue("mm", B, z), ce(["m", "mm"], ve); var ln = Te("Minutes", !1);
    I("s", ["ss", 2], 0, "second"), C("second", "s"), F("second", 15), ue("s", B), ue("ss", B, z), ce(["s", "ss"], pe); var hn, dn = Te("Seconds", !1); for (I("S", 0, 0, function() { return ~~(this.millisecond() / 100) }), I(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) }), I(0, ["SSS", 3], 0, "millisecond"), I(0, ["SSSS", 4], 0, function() { return 10 * this.millisecond() }), I(0, ["SSSSS", 5], 0, function() { return 100 * this.millisecond() }), I(0, ["SSSSSS", 6], 0, function() { return 1e3 * this.millisecond() }), I(0, ["SSSSSSS", 7], 0, function() { return 1e4 * this.millisecond() }), I(0, ["SSSSSSSS", 8], 0, function() { return 1e5 * this.millisecond() }), I(0, ["SSSSSSSSS", 9], 0, function() { return 1e6 * this.millisecond() }), C("millisecond", "ms"), F("millisecond", 16), ue("S", K, Z), ue("SS", K, z), ue("SSS", K, $), hn = "SSSS"; hn.length <= 9; hn += "S") ue(hn, ne);

    function cn(e, t) { t[we] = D(1e3 * ("0." + e)) } for (hn = "S"; hn.length <= 9; hn += "S") ce(hn, cn); var fn = Te("Milliseconds", !1);
    I("z", 0, 0, "zoneAbbr"), I("zz", 0, 0, "zoneName"); var mn = M.prototype;

    function _n(e) { return e }
    mn.add = Jt, mn.calendar = function(e, t) { var n = e || bt(),
            s = Gt(n, this).startOf("day"),
            i = c.calendarFormat(this, s) || "sameElse",
            r = t && (b(t[i]) ? t[i].call(this, n) : t[i]); return this.format(r || this.localeData().calendar(i, this, bt(n))) }, mn.clone = function() { return new M(this) }, mn.diff = function(e, t, n) { var s, i, r; if (!this.isValid()) return NaN; if (!(s = Gt(e, this)).isValid()) return NaN; switch (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = H(t)) {
            case "year":
                r = Qt(this, s) / 12; break;
            case "month":
                r = Qt(this, s); break;
            case "quarter":
                r = Qt(this, s) / 3; break;
            case "second":
                r = (this - s) / 1e3; break;
            case "minute":
                r = (this - s) / 6e4; break;
            case "hour":
                r = (this - s) / 36e5; break;
            case "day":
                r = (this - s - i) / 864e5; break;
            case "week":
                r = (this - s - i) / 6048e5; break;
            default:
                r = this - s } return n ? r : S(r) }, mn.endOf = function(e) { var t; if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid()) return this; var n = this._isUTC ? rn : sn; switch (e) {
            case "year":
                t = n(this.year() + 1, 0, 1) - 1; break;
            case "quarter":
                t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1; break;
            case "month":
                t = n(this.year(), this.month() + 1, 1) - 1; break;
            case "week":
                t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1; break;
            case "isoWeek":
                t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1; break;
            case "day":
            case "date":
                t = n(this.year(), this.month(), this.date() + 1) - 1; break;
            case "hour":
                t = this._d.valueOf(), t += 36e5 - nn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1; break;
            case "minute":
                t = this._d.valueOf(), t += 6e4 - nn(t, 6e4) - 1; break;
            case "second":
                t = this._d.valueOf(), t += 1e3 - nn(t, 1e3) - 1; break } return this._d.setTime(t), c.updateOffset(this, !0), this }, mn.format = function(e) { e || (e = this.isUtc() ? c.defaultFormatUtc : c.defaultFormat); var t = A(this, e); return this.localeData().postformat(t) }, mn.from = function(e, t) { return this.isValid() && (k(e) && e.isValid() || bt(e).isValid()) ? jt({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, mn.fromNow = function(e) { return this.from(bt(), e) }, mn.to = function(e, t) { return this.isValid() && (k(e) && e.isValid() || bt(e).isValid()) ? jt({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, mn.toNow = function(e) { return this.to(bt(), e) }, mn.get = function(e) { return b(this[e = H(e)]) ? this[e]() : this }, mn.invalidAt = function() { return g(this).overflow }, mn.isAfter = function(e, t) { var n = k(e) ? e : bt(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) }, mn.isBefore = function(e, t) { var n = k(e) ? e : bt(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) }, mn.isBetween = function(e, t, n, s) { var i = k(e) ? e : bt(e),
            r = k(t) ? t : bt(t); return !!(this.isValid() && i.isValid() && r.isValid()) && ("(" === (s = s || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === s[1] ? this.isBefore(r, n) : !this.isAfter(r, n)) }, mn.isSame = function(e, t) { var n, s = k(e) ? e : bt(e); return !(!this.isValid() || !s.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) }, mn.isSameOrAfter = function(e, t) { return this.isSame(e, t) || this.isAfter(e, t) }, mn.isSameOrBefore = function(e, t) { return this.isSame(e, t) || this.isBefore(e, t) }, mn.isValid = function() { return v(this) }, mn.lang = Kt, mn.locale = Xt, mn.localeData = en, mn.max = Pt, mn.min = xt, mn.parsingFlags = function() { return _({}, g(this)) }, mn.set = function(e, t) { if ("object" == typeof e)
            for (var n = function(e) { var t = []; for (var n in e) t.push({ unit: n, priority: U[n] }); return t.sort(function(e, t) { return e.priority - t.priority }), t }(e = R(e)), s = 0; s < n.length; s++) this[n[s].unit](e[n[s].unit]);
        else if (b(this[e = H(e)])) return this[e](t); return this }, mn.startOf = function(e) { var t; if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid()) return this; var n = this._isUTC ? rn : sn; switch (e) {
            case "year":
                t = n(this.year(), 0, 1); break;
            case "quarter":
                t = n(this.year(), this.month() - this.month() % 3, 1); break;
            case "month":
                t = n(this.year(), this.month(), 1); break;
            case "week":
                t = n(this.year(), this.month(), this.date() - this.weekday()); break;
            case "isoWeek":
                t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1)); break;
            case "day":
            case "date":
                t = n(this.year(), this.month(), this.date()); break;
            case "hour":
                t = this._d.valueOf(), t -= nn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5); break;
            case "minute":
                t = this._d.valueOf(), t -= nn(t, 6e4); break;
            case "second":
                t = this._d.valueOf(), t -= nn(t, 1e3); break } return this._d.setTime(t), c.updateOffset(this, !0), this }, mn.subtract = Bt, mn.toArray = function() { var e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()] }, mn.toObject = function() { var e = this; return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() } }, mn.toDate = function() { return new Date(this.valueOf()) }, mn.toISOString = function(e) { if (!this.isValid()) return null; var t = !0 !== e,
            n = t ? this.clone().utc() : this; return n.year() < 0 || 9999 < n.year() ? A(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : b(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", A(n, "Z")) : A(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ") }, mn.inspect = function() { if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)"; var e = "moment",
            t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z"); var n = "[" + e + '("]',
            s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            i = t + '[")]'; return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i) }, mn.toJSON = function() { return this.isValid() ? this.toISOString() : null }, mn.toString = function() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, mn.unix = function() { return Math.floor(this.valueOf() / 1e3) }, mn.valueOf = function() { return this._d.valueOf() - 6e4 * (this._offset || 0) }, mn.creationData = function() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, mn.year = Oe, mn.isLeapYear = function() { return De(this.year()) }, mn.weekYear = function(e) { return on.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, mn.isoWeekYear = function(e) { return on.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4) }, mn.quarter = mn.quarters = function(e) { return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3) }, mn.month = Ue, mn.daysInMonth = function() { return Pe(this.year(), this.month()) }, mn.week = mn.weeks = function(e) { var t = this.localeData().week(this); return null == e ? t : this.add(7 * (e - t), "d") }, mn.isoWeek = mn.isoWeeks = function(e) { var t = Ie(this, 1, 4).week; return null == e ? t : this.add(7 * (e - t), "d") }, mn.weeksInYear = function() { var e = this.localeData()._week; return Ae(this.year(), e.dow, e.doy) }, mn.isoWeeksInYear = function() { return Ae(this.year(), 1, 4) }, mn.date = un, mn.day = mn.days = function(e) { if (!this.isValid()) return null != e ? this : NaN; var t, n, s = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - s, "d")) : s }, mn.weekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; var t = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == e ? t : this.add(e - t, "d") }, mn.isoWeekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; if (null == e) return this.day() || 7; var t, n, s = (t = e, n = this.localeData(), "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t); return this.day(this.day() % 7 ? s : s - 7) }, mn.dayOfYear = function(e) { var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == e ? t : this.add(e - t, "d") }, mn.hour = mn.hours = nt, mn.minute = mn.minutes = ln, mn.second = mn.seconds = dn, mn.millisecond = mn.milliseconds = fn, mn.utcOffset = function(e, t, n) { var s, i = this._offset || 0; if (!this.isValid()) return null != e ? this : NaN; if (null == e) return this._isUTC ? i : Vt(this); if ("string" == typeof e) { if (null === (e = Nt(re, e))) return this } else Math.abs(e) < 16 && !n && (e *= 60); return !this._isUTC && t && (s = Vt(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), i !== e && (!t || this._changeInProgress ? qt(this, jt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, c.updateOffset(this, !0), this._changeInProgress = null)), this }, mn.utc = function(e) { return this.utcOffset(0, e) }, mn.local = function(e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Vt(this), "m")), this }, mn.parseZone = function() { if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) { var e = Nt(ie, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0) } return this }, mn.hasAlignedHourOffset = function(e) { return !!this.isValid() && (e = e ? bt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0) }, mn.isDST = function() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, mn.isLocal = function() { return !!this.isValid() && !this._isUTC }, mn.isUtcOffset = function() { return !!this.isValid() && this._isUTC }, mn.isUtc = Et, mn.isUTC = Et, mn.zoneAbbr = function() { return this._isUTC ? "UTC" : "" }, mn.zoneName = function() { return this._isUTC ? "Coordinated Universal Time" : "" }, mn.dates = n("dates accessor is deprecated. Use date instead.", un), mn.months = n("months accessor is deprecated. Use month instead", Ue), mn.years = n("years accessor is deprecated. Use year instead", Oe), mn.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) { return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset() }), mn.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() { if (!l(this._isDSTShifted)) return this._isDSTShifted; var e = {}; if (w(e, this), (e = Ot(e))._a) { var t = e._isUTC ? y(e._a) : bt(e._a);
            this._isDSTShifted = this.isValid() && 0 < a(e._a, t.toArray()) } else this._isDSTShifted = !1; return this._isDSTShifted }); var yn = P.prototype;

    function gn(e, t, n, s) { var i = ht(),
            r = y().set(s, t); return i[n](r, e) }

    function vn(e, t, n) { if (h(e) && (t = e, e = void 0), e = e || "", null != t) return gn(e, t, n, "month"); var s, i = []; for (s = 0; s < 12; s++) i[s] = gn(e, s, n, "month"); return i }

    function pn(e, t, n, s) { t = ("boolean" == typeof e ? h(t) && (n = t, t = void 0) : (t = e, e = !1, h(n = t) && (n = t, t = void 0)), t || ""); var i, r = ht(),
            a = e ? r._week.dow : 0; if (null != n) return gn(t, (n + a) % 7, s, "day"); var o = []; for (i = 0; i < 7; i++) o[i] = gn(t, (i + a) % 7, s, "day"); return o }
    yn.calendar = function(e, t, n) { var s = this._calendar[e] || this._calendar.sameElse; return b(s) ? s.call(t, n) : s }, yn.longDateFormat = function(e) { var t = this._longDateFormat[e],
            n = this._longDateFormat[e.toUpperCase()]; return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) { return e.slice(1) }), this._longDateFormat[e]) }, yn.invalidDate = function() { return this._invalidDate }, yn.ordinal = function(e) { return this._ordinal.replace("%d", e) }, yn.preparse = _n, yn.postformat = _n, yn.relativeTime = function(e, t, n, s) { var i = this._relativeTime[n]; return b(i) ? i(e, t, n, s) : i.replace(/%d/i, e) }, yn.pastFuture = function(e, t) { var n = this._relativeTime[0 < e ? "future" : "past"]; return b(n) ? n(t) : n.replace(/%s/i, t) }, yn.set = function(e) { var t, n; for (n in e) b(t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source) }, yn.months = function(e, t) { return e ? o(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || We).test(t) ? "format" : "standalone"][e.month()] : o(this._months) ? this._months : this._months.standalone }, yn.monthsShort = function(e, t) { return e ? o(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[We.test(t) ? "format" : "standalone"][e.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, yn.monthsParse = function(e, t, n) { var s, i, r; if (this._monthsParseExact) return function(e, t, n) { var s, i, r, a = e.toLocaleLowerCase(); if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) r = y([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase(); return n ? "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : null : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : null : "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : null : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : null }.call(this, e, t, n); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) { if (i = y([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s; if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s; if (!n && this._monthsParse[s].test(e)) return s } }, yn.monthsRegex = function(e) { return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (m(this, "_monthsRegex") || (this._monthsRegex = Le), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex) }, yn.monthsShortRegex = function(e) { return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = Fe), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex) }, yn.week = function(e) { return Ie(e, this._week.dow, this._week.doy).week }, yn.firstDayOfYear = function() { return this._week.doy }, yn.firstDayOfWeek = function() { return this._week.dow }, yn.weekdays = function(e, t) { var n = o(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"]; return !0 === e ? je(n, this._week.dow) : e ? n[e.day()] : n }, yn.weekdaysMin = function(e) { return !0 === e ? je(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin }, yn.weekdaysShort = function(e) { return !0 === e ? je(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort }, yn.weekdaysParse = function(e, t, n) { var s, i, r; if (this._weekdaysParseExact) return function(e, t, n) { var s, i, r, a = e.toLocaleLowerCase(); if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) r = y([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase(); return n ? "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : null : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : null }.call(this, e, t, n); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) { if (i = y([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s; if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s; if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s; if (!n && this._weekdaysParse[s].test(e)) return s } }, yn.weekdaysRegex = function(e) { return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = qe), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex) }, yn.weekdaysShortRegex = function(e) { return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (m(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Je), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, yn.weekdaysMinRegex = function(e) { return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Be), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, yn.isPM = function(e) { return "p" === (e + "").toLowerCase().charAt(0) }, yn.meridiem = function(e, t, n) { return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM" }, ut("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) { var t = e % 10; return e + (1 === D(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th") } }), c.lang = n("moment.lang is deprecated. Use moment.locale instead.", ut), c.langData = n("moment.langData is deprecated. Use moment.localeData instead.", ht); var wn = Math.abs;

    function Mn(e, t, n, s) { var i = jt(t, n); return e._milliseconds += s * i._milliseconds, e._days += s * i._days, e._months += s * i._months, e._bubble() }

    function kn(e) { return e < 0 ? Math.floor(e) : Math.ceil(e) }

    function Sn(e) { return 4800 * e / 146097 }

    function Dn(e) { return 146097 * e / 4800 }

    function Yn(e) { return function() { return this.as(e) } } var On = Yn("ms"),
        Tn = Yn("s"),
        bn = Yn("m"),
        xn = Yn("h"),
        Pn = Yn("d"),
        Wn = Yn("w"),
        Cn = Yn("M"),
        Hn = Yn("Q"),
        Rn = Yn("y");

    function Un(e) { return function() { return this.isValid() ? this._data[e] : NaN } } var Fn = Un("milliseconds"),
        Ln = Un("seconds"),
        Nn = Un("minutes"),
        Gn = Un("hours"),
        Vn = Un("days"),
        En = Un("months"),
        In = Un("years"); var An = Math.round,
        jn = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 }; var Zn = Math.abs;

    function zn(e) { return (0 < e) - (e < 0) || +e }

    function $n() { if (!this.isValid()) return this.localeData().invalidDate(); var e, t, n = Zn(this._milliseconds) / 1e3,
            s = Zn(this._days),
            i = Zn(this._months);
        t = S((e = S(n / 60)) / 60), n %= 60, e %= 60; var r = S(i / 12),
            a = i %= 12,
            o = s,
            u = t,
            l = e,
            h = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
            d = this.asSeconds(); if (!d) return "P0D"; var c = d < 0 ? "-" : "",
            f = zn(this._months) !== zn(d) ? "-" : "",
            m = zn(this._days) !== zn(d) ? "-" : "",
            _ = zn(this._milliseconds) !== zn(d) ? "-" : ""; return c + "P" + (r ? f + r + "Y" : "") + (a ? f + a + "M" : "") + (o ? m + o + "D" : "") + (u || l || h ? "T" : "") + (u ? _ + u + "H" : "") + (l ? _ + l + "M" : "") + (h ? _ + h + "S" : "") } var qn = Ht.prototype; return qn.isValid = function() { return this._isValid }, qn.abs = function() { var e = this._data; return this._milliseconds = wn(this._milliseconds), this._days = wn(this._days), this._months = wn(this._months), e.milliseconds = wn(e.milliseconds), e.seconds = wn(e.seconds), e.minutes = wn(e.minutes), e.hours = wn(e.hours), e.months = wn(e.months), e.years = wn(e.years), this }, qn.add = function(e, t) { return Mn(this, e, t, 1) }, qn.subtract = function(e, t) { return Mn(this, e, t, -1) }, qn.as = function(e) { if (!this.isValid()) return NaN; var t, n, s = this._milliseconds; if ("month" === (e = H(e)) || "quarter" === e || "year" === e) switch (t = this._days + s / 864e5, n = this._months + Sn(t), e) {
            case "month":
                return n;
            case "quarter":
                return n / 3;
            case "year":
                return n / 12 } else switch (t = this._days + Math.round(Dn(this._months)), e) {
            case "week":
                return t / 7 + s / 6048e5;
            case "day":
                return t + s / 864e5;
            case "hour":
                return 24 * t + s / 36e5;
            case "minute":
                return 1440 * t + s / 6e4;
            case "second":
                return 86400 * t + s / 1e3;
            case "millisecond":
                return Math.floor(864e5 * t) + s;
            default:
                throw new Error("Unknown unit " + e) } }, qn.asMilliseconds = On, qn.asSeconds = Tn, qn.asMinutes = bn, qn.asHours = xn, qn.asDays = Pn, qn.asWeeks = Wn, qn.asMonths = Cn, qn.asQuarters = Hn, qn.asYears = Rn, qn.valueOf = function() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * D(this._months / 12) : NaN }, qn._bubble = function() { var e, t, n, s, i, r = this._milliseconds,
            a = this._days,
            o = this._months,
            u = this._data; return 0 <= r && 0 <= a && 0 <= o || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * kn(Dn(o) + a), o = a = 0), u.milliseconds = r % 1e3, e = S(r / 1e3), u.seconds = e % 60, t = S(e / 60), u.minutes = t % 60, n = S(t / 60), u.hours = n % 24, o += i = S(Sn(a += S(n / 24))), a -= kn(Dn(i)), s = S(o / 12), o %= 12, u.days = a, u.months = o, u.years = s, this }, qn.clone = function() { return jt(this) }, qn.get = function(e) { return e = H(e), this.isValid() ? this[e + "s"]() : NaN }, qn.milliseconds = Fn, qn.seconds = Ln, qn.minutes = Nn, qn.hours = Gn, qn.days = Vn, qn.weeks = function() { return S(this.days() / 7) }, qn.months = En, qn.years = In, qn.humanize = function(e) { if (!this.isValid()) return this.localeData().invalidDate(); var t, n, s, i, r, a, o, u, l, h, d, c = this.localeData(),
            f = (n = !e, s = c, i = jt(t = this).abs(), r = An(i.as("s")), a = An(i.as("m")), o = An(i.as("h")), u = An(i.as("d")), l = An(i.as("M")), h = An(i.as("y")), (d = r <= jn.ss && ["s", r] || r < jn.s && ["ss", r] || a <= 1 && ["m"] || a < jn.m && ["mm", a] || o <= 1 && ["h"] || o < jn.h && ["hh", o] || u <= 1 && ["d"] || u < jn.d && ["dd", u] || l <= 1 && ["M"] || l < jn.M && ["MM", l] || h <= 1 && ["y"] || ["yy", h])[2] = n, d[3] = 0 < +t, d[4] = s, function(e, t, n, s, i) { return i.relativeTime(t || 1, !!n, e, s) }.apply(null, d)); return e && (f = c.pastFuture(+this, f)), c.postformat(f) }, qn.toISOString = $n, qn.toString = $n, qn.toJSON = $n, qn.locale = Xt, qn.localeData = en, qn.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", $n), qn.lang = Kt, I("X", 0, 0, "unix"), I("x", 0, 0, "valueOf"), ue("x", se), ue("X", /[+-]?\d+(\.\d{1,3})?/), ce("X", function(e, t, n) { n._d = new Date(1e3 * parseFloat(e, 10)) }), ce("x", function(e, t, n) { n._d = new Date(D(e)) }), c.version = "2.24.0", e = bt, c.fn = mn, c.min = function() { return Wt("isBefore", [].slice.call(arguments, 0)) }, c.max = function() { return Wt("isAfter", [].slice.call(arguments, 0)) }, c.now = function() { return Date.now ? Date.now() : +new Date }, c.utc = y, c.unix = function(e) { return bt(1e3 * e) }, c.months = function(e, t) { return vn(e, t, "months") }, c.isDate = d, c.locale = ut, c.invalid = p, c.duration = jt, c.isMoment = k, c.weekdays = function(e, t, n) { return pn(e, t, n, "weekdays") }, c.parseZone = function() { return bt.apply(null, arguments).parseZone() }, c.localeData = ht, c.isDuration = Rt, c.monthsShort = function(e, t) { return vn(e, t, "monthsShort") }, c.weekdaysMin = function(e, t, n) { return pn(e, t, n, "weekdaysMin") }, c.defineLocale = lt, c.updateLocale = function(e, t) { if (null != t) { var n, s, i = st;
            null != (s = ot(e)) && (i = s._config), (n = new P(t = x(i, t))).parentLocale = it[e], it[e] = n, ut(e) } else null != it[e] && (null != it[e].parentLocale ? it[e] = it[e].parentLocale : null != it[e] && delete it[e]); return it[e] }, c.locales = function() { return s(it) }, c.weekdaysShort = function(e, t, n) { return pn(e, t, n, "weekdaysShort") }, c.normalizeUnits = H, c.relativeTimeRounding = function(e) { return void 0 === e ? An : "function" == typeof e && (An = e, !0) }, c.relativeTimeThreshold = function(e, t) { return void 0 !== jn[e] && (void 0 === t ? jn[e] : (jn[e] = t, "s" === e && (jn.ss = t - 1), !0)) }, c.calendarFormat = function(e, t) { var n = e.diff(t, "days", !0); return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse" }, c.prototype = mn, c.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, c });;
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment', 'jquery'], function(moment, jquery) {
            if (!jquery.fn) jquery.fn = {};
            if (typeof moment !== 'function' && moment.hasOwnProperty('default')) moment = moment['default']
            return factory(moment, jquery);
        });
    } else if (typeof module === 'object' && module.exports) {
        var jQuery = (typeof window != 'undefined') ? window.jQuery : undefined;
        if (!jQuery) { jQuery = require('jquery'); if (!jQuery.fn) jQuery.fn = {}; }
        var moment = (typeof window != 'undefined' && typeof window.moment != 'undefined') ? window.moment : require('moment');
        module.exports = factory(moment, jQuery);
    } else { root.daterangepicker = factory(root.moment, root.jQuery); }
}(this, function(moment, $) {
    var DateRangePicker = function(element, options, cb) {
        this.parentEl = 'body';
        this.element = $(element);
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        this.minDate = false;
        this.maxDate = false;
        this.maxSpan = false;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.minYear = moment().subtract(100, 'year').format('YYYY');
        this.maxYear = moment().add(100, 'year').format('YYYY');
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.showCustomRangeLabel = true;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.linkedCalendars = true;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.ranges = {};
        this.opens = 'right';
        if (this.element.hasClass('pull-right'))
            this.opens = 'left';
        this.drops = 'down';
        if (this.element.hasClass('dropup'))
            this.drops = 'up';
        this.buttonClasses = 'btn btn-sm';
        this.applyButtonClasses = 'btn-primary';
        this.cancelButtonClasses = 'btn-default';
        this.locale = { direction: 'ltr', format: moment.localeData().longDateFormat('L'), separator: ' - ', applyLabel: 'Apply', cancelLabel: 'Cancel', weekLabel: 'W', customRangeLabel: 'Custom Range', daysOfWeek: moment.weekdaysMin(), monthNames: moment.monthsShort(), firstDay: moment.localeData().firstDayOfWeek() };
        this.callback = function() {};
        this.isShowing = false;
        this.leftCalendar = {};
        this.rightCalendar = {};
        if (typeof options !== 'object' || options === null)
            options = {};
        options = $.extend(this.element.data(), options);
        if (typeof options.template !== 'string' && !(options.template instanceof $))
            options.template = '<div class="daterangepicker">' + '<div class="ranges"></div>' + '<div class="drp-calendar left">' + '<div class="calendar-table"></div>' + '<div class="calendar-time"></div>' + '</div>' + '<div class="drp-calendar right">' + '<div class="calendar-table"></div>' + '<div class="calendar-time"></div>' + '</div>' + '<div class="drp-buttons">' + '<span class="drp-selected"></span>' + '<button class="cancelBtn" type="button"></button>' + '<button class="applyBtn" disabled="disabled" type="button"></button> ' + '</div>' + '</div>';
        this.parentEl = (options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
        this.container = $(options.template).appendTo(this.parentEl);
        if (typeof options.locale === 'object') {
            if (typeof options.locale.direction === 'string')
                this.locale.direction = options.locale.direction;
            if (typeof options.locale.format === 'string')
                this.locale.format = options.locale.format;
            if (typeof options.locale.separator === 'string')
                this.locale.separator = options.locale.separator;
            if (typeof options.locale.daysOfWeek === 'object')
                this.locale.daysOfWeek = options.locale.daysOfWeek.slice();
            if (typeof options.locale.monthNames === 'object')
                this.locale.monthNames = options.locale.monthNames.slice();
            if (typeof options.locale.firstDay === 'number')
                this.locale.firstDay = options.locale.firstDay;
            if (typeof options.locale.applyLabel === 'string')
                this.locale.applyLabel = options.locale.applyLabel;
            if (typeof options.locale.cancelLabel === 'string')
                this.locale.cancelLabel = options.locale.cancelLabel;
            if (typeof options.locale.weekLabel === 'string')
                this.locale.weekLabel = options.locale.weekLabel;
            if (typeof options.locale.customRangeLabel === 'string') { var elem = document.createElement('textarea');
                elem.innerHTML = options.locale.customRangeLabel; var rangeHtml = elem.value;
                this.locale.customRangeLabel = rangeHtml; }
        }
        this.container.addClass(this.locale.direction);
        if (typeof options.startDate === 'string')
            this.startDate = moment(options.startDate, this.locale.format);
        if (typeof options.endDate === 'string')
            this.endDate = moment(options.endDate, this.locale.format);
        if (typeof options.minDate === 'string')
            this.minDate = moment(options.minDate, this.locale.format);
        if (typeof options.maxDate === 'string')
            this.maxDate = moment(options.maxDate, this.locale.format);
        if (typeof options.startDate === 'object')
            this.startDate = moment(options.startDate);
        if (typeof options.endDate === 'object')
            this.endDate = moment(options.endDate);
        if (typeof options.minDate === 'object')
            this.minDate = moment(options.minDate);
        if (typeof options.maxDate === 'object')
            this.maxDate = moment(options.maxDate);
        if (this.minDate && this.startDate.isBefore(this.minDate))
            this.startDate = this.minDate.clone();
        if (this.maxDate && this.endDate.isAfter(this.maxDate))
            this.endDate = this.maxDate.clone();
        if (typeof options.applyButtonClasses === 'string')
            this.applyButtonClasses = options.applyButtonClasses;
        if (typeof options.applyClass === 'string')
            this.applyButtonClasses = options.applyClass;
        if (typeof options.cancelButtonClasses === 'string')
            this.cancelButtonClasses = options.cancelButtonClasses;
        if (typeof options.cancelClass === 'string')
            this.cancelButtonClasses = options.cancelClass;
        if (typeof options.maxSpan === 'object')
            this.maxSpan = options.maxSpan;
        if (typeof options.dateLimit === 'object')
            this.maxSpan = options.dateLimit;
        if (typeof options.opens === 'string')
            this.opens = options.opens;
        if (typeof options.drops === 'string')
            this.drops = options.drops;
        if (typeof options.showWeekNumbers === 'boolean')
            this.showWeekNumbers = options.showWeekNumbers;
        if (typeof options.showISOWeekNumbers === 'boolean')
            this.showISOWeekNumbers = options.showISOWeekNumbers;
        if (typeof options.buttonClasses === 'string')
            this.buttonClasses = options.buttonClasses;
        if (typeof options.buttonClasses === 'object')
            this.buttonClasses = options.buttonClasses.join(' ');
        if (typeof options.showDropdowns === 'boolean')
            this.showDropdowns = options.showDropdowns;
        if (typeof options.minYear === 'number')
            this.minYear = options.minYear;
        if (typeof options.maxYear === 'number')
            this.maxYear = options.maxYear;
        if (typeof options.showCustomRangeLabel === 'boolean')
            this.showCustomRangeLabel = options.showCustomRangeLabel;
        if (typeof options.singleDatePicker === 'boolean') {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker)
                this.endDate = this.startDate.clone();
        }
        if (typeof options.timePicker === 'boolean')
            this.timePicker = options.timePicker;
        if (typeof options.timePickerSeconds === 'boolean')
            this.timePickerSeconds = options.timePickerSeconds;
        if (typeof options.timePickerIncrement === 'number')
            this.timePickerIncrement = options.timePickerIncrement;
        if (typeof options.timePicker24Hour === 'boolean')
            this.timePicker24Hour = options.timePicker24Hour;
        if (typeof options.autoApply === 'boolean')
            this.autoApply = options.autoApply;
        if (typeof options.autoUpdateInput === 'boolean')
            this.autoUpdateInput = options.autoUpdateInput;
        if (typeof options.linkedCalendars === 'boolean')
            this.linkedCalendars = options.linkedCalendars;
        if (typeof options.isInvalidDate === 'function')
            this.isInvalidDate = options.isInvalidDate;
        if (typeof options.isCustomDate === 'function')
            this.isCustomDate = options.isCustomDate;
        if (typeof options.alwaysShowCalendars === 'boolean')
            this.alwaysShowCalendars = options.alwaysShowCalendars;
        if (this.locale.firstDay != 0) { var iterator = this.locale.firstDay; while (iterator > 0) { this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--; } }
        var start, end, range;
        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
            if ($(this.element).is(':text')) {
                var val = $(this.element).val(),
                    split = val.split(this.locale.separator);
                start = end = null;
                if (split.length == 2) { start = moment(split[0], this.locale.format);
                    end = moment(split[1], this.locale.format); } else if (this.singleDatePicker && val !== "") { start = moment(val, this.locale.format);
                    end = moment(val, this.locale.format); }
                if (start !== null && end !== null) { this.setStartDate(start);
                    this.setEndDate(end); }
            }
        }
        if (typeof options.ranges === 'object') {
            for (range in options.ranges) {
                if (typeof options.ranges[range][0] === 'string')
                    start = moment(options.ranges[range][0], this.locale.format);
                else
                    start = moment(options.ranges[range][0]);
                if (typeof options.ranges[range][1] === 'string')
                    end = moment(options.ranges[range][1], this.locale.format);
                else
                    end = moment(options.ranges[range][1]);
                if (this.minDate && start.isBefore(this.minDate))
                    start = this.minDate.clone();
                var maxDate = this.maxDate;
                if (this.maxSpan && maxDate && start.clone().add(this.maxSpan).isAfter(maxDate))
                    maxDate = start.clone().add(this.maxSpan);
                if (maxDate && end.isAfter(maxDate))
                    end = maxDate.clone();
                if ((this.minDate && end.isBefore(this.minDate, this.timepicker ? 'minute' : 'day')) || (maxDate && start.isAfter(maxDate, this.timepicker ? 'minute' : 'day')))
                    continue;
                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;
                this.ranges[rangeHtml] = [start, end];
            }
            var list = '<ul>';
            for (range in this.ranges) { list += '<li data-range-key="' + range + '">' + range + '</li>'; }
            if (this.showCustomRangeLabel) { list += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + '</li>'; }
            list += '</ul>';
            this.container.find('.ranges').prepend(list);
        }
        if (typeof cb === 'function') { this.callback = cb; }
        if (!this.timePicker) { this.startDate = this.startDate.startOf('day');
            this.endDate = this.endDate.endOf('day');
            this.container.find('.calendar-time').hide(); }
        if (this.timePicker && this.autoApply)
            this.autoApply = false;
        if (this.autoApply) { this.container.addClass('auto-apply'); }
        if (typeof options.ranges === 'object')
            this.container.addClass('show-ranges');
        if (this.singleDatePicker) { this.container.addClass('single');
            this.container.find('.drp-calendar.left').addClass('single');
            this.container.find('.drp-calendar.left').show();
            this.container.find('.drp-calendar.right').hide(); if (!this.timePicker && this.autoApply) { this.container.addClass('auto-apply'); } }
        if ((typeof options.ranges === 'undefined' && !this.singleDatePicker) || this.alwaysShowCalendars) { this.container.addClass('show-calendar'); }
        this.container.addClass('opens' + this.opens);
        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
        if (this.applyButtonClasses.length)
            this.container.find('.applyBtn').addClass(this.applyButtonClasses);
        if (this.cancelButtonClasses.length)
            this.container.find('.cancelBtn').addClass(this.cancelButtonClasses);
        this.container.find('.applyBtn').html(this.locale.applyLabel);
        this.container.find('.cancelBtn').html(this.locale.cancelLabel);
        this.container.find('.drp-calendar').on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this)).on('click.daterangepicker', '.next', $.proxy(this.clickNext, this)).on('mousedown.daterangepicker', 'td.available', $.proxy(this.clickDate, this)).on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this)).on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this)).on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this)).on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this));
        this.container.find('.ranges').on('click.daterangepicker', 'li', $.proxy(this.clickRange, this));
        this.container.find('.drp-buttons').on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this)).on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this));
        if (this.element.is('input') || this.element.is('button')) { this.element.on({ 'click.daterangepicker': $.proxy(this.show, this), 'focus.daterangepicker': $.proxy(this.show, this), 'keyup.daterangepicker': $.proxy(this.elementChanged, this), 'keydown.daterangepicker': $.proxy(this.keydown, this) }); } else { this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
            this.element.on('keydown.daterangepicker', $.proxy(this.toggle, this)); }
        this.updateElement();
    };
    DateRangePicker.prototype = {
        constructor: DateRangePicker,
        setStartDate: function(startDate) {
            if (typeof startDate === 'string')
                this.startDate = moment(startDate, this.locale.format);
            if (typeof startDate === 'object')
                this.startDate = moment(startDate);
            if (!this.timePicker)
                this.startDate = this.startDate.startOf('day');
            if (this.timePicker && this.timePickerIncrement)
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            if (this.minDate && this.startDate.isBefore(this.minDate)) {
                this.startDate = this.minDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }
            if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
                this.startDate = this.maxDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }
            if (!this.isShowing)
                this.updateElement();
            this.updateMonthsInView();
        },
        setEndDate: function(endDate) {
            if (typeof endDate === 'string')
                this.endDate = moment(endDate, this.locale.format);
            if (typeof endDate === 'object')
                this.endDate = moment(endDate);
            if (!this.timePicker)
                this.endDate = this.endDate.endOf('day');
            if (this.timePicker && this.timePickerIncrement)
                this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            if (this.endDate.isBefore(this.startDate))
                this.endDate = this.startDate.clone();
            if (this.maxDate && this.endDate.isAfter(this.maxDate))
                this.endDate = this.maxDate.clone();
            if (this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate))
                this.endDate = this.startDate.clone().add(this.maxSpan);
            this.previousRightTime = this.endDate.clone();
            this.container.find('.drp-selected').html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            if (!this.isShowing)
                this.updateElement();
            this.updateMonthsInView();
        },
        isInvalidDate: function() { return false; },
        isCustomDate: function() { return false; },
        updateView: function() {
            if (this.timePicker) { this.renderTimePicker('left');
                this.renderTimePicker('right'); if (!this.endDate) { this.container.find('.right .calendar-time select').prop('disabled', true).addClass('disabled'); } else { this.container.find('.right .calendar-time select').prop('disabled', false).removeClass('disabled'); } }
            if (this.endDate)
                this.container.find('.drp-selected').html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            this.updateMonthsInView();
            this.updateCalendars();
            this.updateFormInputs();
        },
        updateMonthsInView: function() {
            if (this.endDate) {
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM')) && (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))) { return; }
                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) { this.rightCalendar.month = this.endDate.clone().date(2); } else { this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month'); }
            } else { if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) { this.leftCalendar.month = this.startDate.clone().date(2);
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month'); } }
            if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) { this.rightCalendar.month = this.maxDate.clone().date(2);
                this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month'); }
        },
        updateCalendars: function() {
            if (this.timePicker) {
                var hour, minute, second;
                if (this.endDate) {
                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    if (isNaN(minute)) { minute = parseInt(this.container.find('.left .minuteselect option:last').val(), 10); }
                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                } else {
                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    if (isNaN(minute)) { minute = parseInt(this.container.find('.right .minuteselect option:last').val(), 10); }
                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                }
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }
            this.renderCalendar('left');
            this.renderCalendar('right');
            this.container.find('.ranges li').removeClass('active');
            if (this.endDate == null) return;
            this.calculateChosenLabel();
        },
        renderCalendar: function(side) {
            var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
            var month = calendar.month.month();
            var year = calendar.month.year();
            var hour = calendar.month.hour();
            var minute = calendar.month.minute();
            var second = calendar.month.second();
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, 'month').month();
            var lastYear = moment(firstDay).subtract(1, 'month').year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;
            for (var i = 0; i < 6; i++) { calendar[i] = []; }
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth)
                startDay -= 7;
            if (dayOfWeek == this.locale.firstDay)
                startDay = daysInLastMonth - 6;
            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);
            var col, row;
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                if (i > 0 && col % 7 === 0) { col = 0;
                    row++; }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);
                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') { calendar[row][col] = this.minDate.clone(); }
                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') { calendar[row][col] = this.maxDate.clone(); }
            }
            if (side == 'left') { this.leftCalendar.calendar = calendar; } else { this.rightCalendar.calendar = calendar; }
            var minDate = side == 'left' ? this.minDate : this.startDate;
            var maxDate = this.maxDate;
            var selected = side == 'left' ? this.startDate : this.endDate;
            var arrow = this.locale.direction == 'ltr' ? { left: 'chevron-left', right: 'chevron-right' } : { left: 'chevron-right', right: 'chevron-left' };
            var html = '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th></th>';
            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) { html += '<th class="prev available"><span></span></th>'; } else { html += '<th></th>'; }
            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");
            if (this.showDropdowns) {
                var currentMonth = calendar[1][1].month();
                var currentYear = calendar[1][1].year();
                var maxYear = (maxDate && maxDate.year()) || (this.maxYear);
                var minYear = (minDate && minDate.year()) || (this.minYear);
                var inMinYear = currentYear == minYear;
                var inMaxYear = currentYear == maxYear;
                var monthHtml = '<select class="monthselect">';
                for (var m = 0; m < 12; m++) {
                    if ((!inMinYear || (minDate && m >= minDate.month())) && (!inMaxYear || (maxDate && m <= maxDate.month()))) {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") + ">" + this.locale.monthNames[m] + "</option>";
                    } else {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                    }
                }
                monthHtml += "</select>";
                var yearHtml = '<select class="yearselect">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' + y + '"' +
                        (y === currentYear ? ' selected="selected"' : '') + '>' + y + '</option>';
                }
                yearHtml += '</select>';
                dateHtml = monthHtml + yearHtml;
            }
            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) { html += '<th class="next available"><span></span></th>'; } else { html += '<th></th>'; }
            html += '</tr>';
            html += '<tr>';
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th class="week">' + this.locale.weekLabel + '</th>';
            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) { html += '<th>' + dayOfWeek + '</th>'; });
            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';
            if (this.endDate == null && this.maxSpan) { var maxLimit = this.startDate.clone().add(this.maxSpan).endOf('day'); if (!maxDate || maxLimit.isBefore(maxDate)) { maxDate = maxLimit; } }
            for (var row = 0; row < 6; row++) {
                html += '<tr>';
                if (this.showWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].week() + '</td>';
                else if (this.showISOWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';
                for (var col = 0; col < 7; col++) {
                    var classes = [];
                    if (calendar[row][col].isSame(new Date(), "day"))
                        classes.push('today');
                    if (calendar[row][col].isoWeekday() > 5)
                        classes.push('weekend');
                    if (calendar[row][col].month() != calendar[1][1].month())
                        classes.push('off', 'ends');
                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day'))
                        classes.push('off', 'disabled');
                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))
                        classes.push('off', 'disabled');
                    if (this.isInvalidDate(calendar[row][col]))
                        classes.push('off', 'disabled');
                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD'))
                        classes.push('active', 'start-date');
                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD'))
                        classes.push('active', 'end-date');
                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate)
                        classes.push('in-range');
                    var isCustom = this.isCustomDate(calendar[row][col]);
                    if (isCustom !== false) {
                        if (typeof isCustom === 'string')
                            classes.push(isCustom);
                        else
                            Array.prototype.push.apply(classes, isCustom);
                    }
                    var cname = '',
                        disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + ' ';
                        if (classes[i] == 'disabled')
                            disabled = true;
                    }
                    if (!disabled)
                        cname += 'available';
                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';
                }
                html += '</tr>';
            }
            html += '</tbody>';
            html += '</table>';
            this.container.find('.drp-calendar.' + side + ' .calendar-table').html(html);
        },
        renderTimePicker: function(side) {
            if (side == 'right' && !this.endDate) return;
            var html, selected, minDate, maxDate = this.maxDate;
            if (this.maxSpan && (!this.maxDate || this.startDate.clone().add(this.maxSpan).isBefore(this.maxDate)))
                maxDate = this.startDate.clone().add(this.maxSpan);
            if (side == 'left') { selected = this.startDate.clone();
                minDate = this.minDate; } else if (side == 'right') {
                selected = this.endDate.clone();
                minDate = this.startDate;
                var timeSelector = this.container.find('.drp-calendar.right .calendar-time');
                if (timeSelector.html() != '') {
                    selected.hour(!isNaN(selected.hour()) ? selected.hour() : timeSelector.find('.hourselect option:selected').val());
                    selected.minute(!isNaN(selected.minute()) ? selected.minute() : timeSelector.find('.minuteselect option:selected').val());
                    selected.second(!isNaN(selected.second()) ? selected.second() : timeSelector.find('.secondselect option:selected').val());
                    if (!this.timePicker24Hour) {
                        var ampm = timeSelector.find('.ampmselect option:selected').val();
                        if (ampm === 'PM' && selected.hour() < 12)
                            selected.hour(selected.hour() + 12);
                        if (ampm === 'AM' && selected.hour() === 12)
                            selected.hour(0);
                    }
                }
                if (selected.isBefore(this.startDate))
                    selected = this.startDate.clone();
                if (maxDate && selected.isAfter(maxDate))
                    selected = maxDate.clone();
            }
            html = '<select class="hourselect">';
            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;
            for (var i = start; i <= end; i++) {
                var i_in_24 = i;
                if (!this.timePicker24Hour)
                    i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);
                var time = selected.clone().hour(i_in_24);
                var disabled = false;
                if (minDate && time.minute(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.minute(0).isAfter(maxDate))
                    disabled = true;
                if (i_in_24 == selected.hour() && !disabled) { html += '<option value="' + i + '" selected="selected">' + i + '</option>'; } else if (disabled) { html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>'; } else { html += '<option value="' + i + '">' + i + '</option>'; }
            }
            html += '</select> ';
            html += ': <select class="minuteselect">';
            for (var i = 0; i < 60; i += this.timePickerIncrement) {
                var padded = i < 10 ? '0' + i : i;
                var time = selected.clone().minute(i);
                var disabled = false;
                if (minDate && time.second(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.second(0).isAfter(maxDate))
                    disabled = true;
                if (selected.minute() == i && !disabled) { html += '<option value="' + i + '" selected="selected">' + padded + '</option>'; } else if (disabled) { html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>'; } else { html += '<option value="' + i + '">' + padded + '</option>'; }
            }
            html += '</select> ';
            if (this.timePickerSeconds) {
                html += ': <select class="secondselect">';
                for (var i = 0; i < 60; i++) {
                    var padded = i < 10 ? '0' + i : i;
                    var time = selected.clone().second(i);
                    var disabled = false;
                    if (minDate && time.isBefore(minDate))
                        disabled = true;
                    if (maxDate && time.isAfter(maxDate))
                        disabled = true;
                    if (selected.second() == i && !disabled) { html += '<option value="' + i + '" selected="selected">' + padded + '</option>'; } else if (disabled) { html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>'; } else { html += '<option value="' + i + '">' + padded + '</option>'; }
                }
                html += '</select> ';
            }
            if (!this.timePicker24Hour) {
                html += '<select class="ampmselect">';
                var am_html = '';
                var pm_html = '';
                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate))
                    am_html = ' disabled="disabled" class="disabled"';
                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate))
                    pm_html = ' disabled="disabled" class="disabled"';
                if (selected.hour() >= 12) { html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>'; } else { html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>'; }
                html += '</select>';
            }
            this.container.find('.drp-calendar.' + side + ' .calendar-time').html(html);
        },
        updateFormInputs: function() { if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) { this.container.find('button.applyBtn').prop('disabled', false); } else { this.container.find('button.applyBtn').prop('disabled', true); } },
        move: function() {
            var parentOffset = { top: 0, left: 0 },
                containerTop, drops = this.drops;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is('body')) { parentOffset = { top: this.parentEl.offset().top - this.parentEl.scrollTop(), left: this.parentEl.offset().left - this.parentEl.scrollLeft() };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left; }
            switch (drops) {
                case 'auto':
                    containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
                    if (containerTop + this.container.outerHeight() >= this.parentEl[0].scrollHeight) { containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
                        drops = 'up'; }
                    break;
                case 'up':
                    containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
                    break;
                default:
                    containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
                    break;
            }
            this.container.css({ top: 0, left: 0, right: 'auto' });
            var containerWidth = this.container.outerWidth();
            this.container.toggleClass('drop-up', drops == 'up');
            if (this.opens == 'left') { var containerRight = parentRightEdge - this.element.offset().left - this.element.outerWidth(); if (containerWidth + containerRight > $(window).width()) { this.container.css({ top: containerTop, right: 'auto', left: 9 }); } else { this.container.css({ top: containerTop, right: containerRight, left: 'auto' }); } } else if (this.opens == 'center') {
                var containerLeft = this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2 -
                    containerWidth / 2;
                if (containerLeft < 0) { this.container.css({ top: containerTop, right: 'auto', left: 9 }); } else if (containerLeft + containerWidth > $(window).width()) { this.container.css({ top: containerTop, left: 'auto', right: 0 }); } else { this.container.css({ top: containerTop, left: containerLeft, right: 'auto' }); }
            } else { var containerLeft = this.element.offset().left - parentOffset.left; if (containerLeft + containerWidth > $(window).width()) { this.container.css({ top: containerTop, left: 'auto', right: 0 }); } else { this.container.css({ top: containerTop, left: containerLeft, right: 'auto' }); } }
        },
        show: function(e) { if (this.isShowing) return;
            this._outsideClickProxy = $.proxy(function(e) { this.outsideClick(e); }, this);
            $(document).on('mousedown.daterangepicker', this._outsideClickProxy).on('touchend.daterangepicker', this._outsideClickProxy).on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy).on('focusin.daterangepicker', this._outsideClickProxy);
            $(window).on('resize.daterangepicker', $.proxy(function(e) { this.move(e); }, this));
            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.previousRightTime = this.endDate.clone();
            this.updateView();
            this.container.show();
            this.move();
            this.element.trigger('show.daterangepicker', this);
            this.isShowing = true; },
        hide: function(e) {
            if (!this.isShowing) return;
            if (!this.endDate) { this.startDate = this.oldStartDate.clone();
                this.endDate = this.oldEndDate.clone(); }
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
                this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel);
            this.updateElement();
            $(document).off('.daterangepicker');
            $(window).off('.daterangepicker');
            this.container.hide();
            this.element.trigger('hide.daterangepicker', this);
            this.isShowing = false;
        },
        toggle: function(e) { if (this.isShowing) { this.hide(); } else { this.show(); } },
        outsideClick: function(e) { var target = $(e.target); if (e.type == "focusin" || target.closest(this.element).length || target.closest(this.container).length || target.closest('.calendar-table').length) return;
            this.hide();
            this.element.trigger('outsideClick.daterangepicker', this); },
        showCalendars: function() { this.container.addClass('show-calendar');
            this.move();
            this.element.trigger('showCalendar.daterangepicker', this); },
        hideCalendars: function() { this.container.removeClass('show-calendar');
            this.element.trigger('hideCalendar.daterangepicker', this); },
        clickRange: function(e) {
            var label = e.target.getAttribute('data-range-key');
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) { this.showCalendars(); } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];
                if (!this.timePicker) { this.startDate.startOf('day');
                    this.endDate.endOf('day'); }
                if (!this.alwaysShowCalendars)
                    this.hideCalendars();
                this.clickApply();
            }
        },
        clickPrev: function(e) {
            var cal = $(e.target).parents('.drp-calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.subtract(1, 'month');
                if (this.linkedCalendars)
                    this.rightCalendar.month.subtract(1, 'month');
            } else { this.rightCalendar.month.subtract(1, 'month'); }
            this.updateCalendars();
        },
        clickNext: function(e) {
            var cal = $(e.target).parents('.drp-calendar');
            if (cal.hasClass('left')) { this.leftCalendar.month.add(1, 'month'); } else {
                this.rightCalendar.month.add(1, 'month');
                if (this.linkedCalendars)
                    this.leftCalendar.month.add(1, 'month');
            }
            this.updateCalendars();
        },
        hoverDate: function(e) { if (!$(e.target).hasClass('available')) return; var title = $(e.target).attr('data-title'); var row = title.substr(1, 1); var col = title.substr(3, 1); var cal = $(e.target).parents('.drp-calendar'); var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col]; var leftCalendar = this.leftCalendar; var rightCalendar = this.rightCalendar; var startDate = this.startDate; if (!this.endDate) { this.container.find('.drp-calendar tbody td').each(function(index, el) { if ($(el).hasClass('week')) return; var title = $(el).attr('data-title'); var row = title.substr(1, 1); var col = title.substr(3, 1); var cal = $(el).parents('.drp-calendar'); var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col]; if ((dt.isAfter(startDate) && dt.isBefore(date)) || dt.isSame(date, 'day')) { $(el).addClass('in-range'); } else { $(el).removeClass('in-range'); } }); } },
        clickDate: function(e) {
            if (!$(e.target).hasClass('available')) return;
            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.drp-calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];
            if (this.endDate || date.isBefore(this.startDate, 'day')) {
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    if (isNaN(minute)) { minute = parseInt(this.container.find('.left .minuteselect option:last').val(), 10); }
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.endDate = null;
                this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate)) { this.setEndDate(this.startDate.clone()); } else {
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    if (isNaN(minute)) { minute = parseInt(this.container.find('.right .minuteselect option:last').val(), 10); }
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.setEndDate(date.clone());
                if (this.autoApply) { this.calculateChosenLabel();
                    this.clickApply(); }
            }
            if (this.singleDatePicker) {
                this.setEndDate(this.startDate);
                if (!this.timePicker && this.autoApply)
                    this.clickApply();
            }
            this.updateView();
            e.stopPropagation();
        },
        calculateChosenLabel: function() {
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
                if (this.timePicker) { var format = this.timePickerSeconds ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm"; if (this.startDate.format(format) == this.ranges[range][0].format(format) && this.endDate.format(format) == this.ranges[range][1].format(format)) { customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').attr('data-range-key'); break; } } else { if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) { customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').attr('data-range-key'); break; } }
                i++;
            }
            if (customRange) {
                if (this.showCustomRangeLabel) { this.chosenLabel = this.container.find('.ranges li:last').addClass('active').attr('data-range-key'); } else { this.chosenLabel = null; }
                this.showCalendars();
            }
        },
        clickApply: function(e) { this.hide();
            this.element.trigger('apply.daterangepicker', this); },
        clickCancel: function(e) { this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.hide();
            this.element.trigger('cancel.daterangepicker', this); },
        monthOrYearChanged: function(e) {
            var isLeft = $(e.target).closest('.drp-calendar').hasClass('left'),
                leftOrRight = isLeft ? 'left' : 'right',
                cal = this.container.find('.drp-calendar.' + leftOrRight);
            var month = parseInt(cal.find('.monthselect').val(), 10);
            var year = cal.find('.yearselect').val();
            if (!isLeft) { if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) { month = this.startDate.month();
                    year = this.startDate.year(); } }
            if (this.minDate) { if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) { month = this.minDate.month();
                    year = this.minDate.year(); } }
            if (this.maxDate) { if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) { month = this.maxDate.month();
                    year = this.maxDate.year(); } }
            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            } else {
                this.rightCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
            this.updateCalendars();
        },
        timeChanged: function(e) {
            var cal = $(e.target).closest('.drp-calendar'),
                isLeft = cal.hasClass('left');
            var hour = parseInt(cal.find('.hourselect').val(), 10);
            var minute = parseInt(cal.find('.minuteselect').val(), 10);
            if (isNaN(minute)) { minute = parseInt(cal.find('.minuteselect option:last').val(), 10); }
            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;
            if (!this.timePicker24Hour) {
                var ampm = cal.find('.ampmselect').val();
                if (ampm === 'PM' && hour < 12)
                    hour += 12;
                if (ampm === 'AM' && hour === 12)
                    hour = 0;
            }
            if (isLeft) { var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.setStartDate(start); if (this.singleDatePicker) { this.endDate = this.startDate.clone(); } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) { this.setEndDate(start.clone()); } } else if (this.endDate) { var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.setEndDate(end); }
            this.updateCalendars();
            this.updateFormInputs();
            this.renderTimePicker('left');
            this.renderTimePicker('right');
        },
        elementChanged: function() {
            if (!this.element.is('input')) return;
            if (!this.element.val().length) return;
            var dateString = this.element.val().split(this.locale.separator),
                start = null,
                end = null;
            if (dateString.length === 2) { start = moment(dateString[0], this.locale.format);
                end = moment(dateString[1], this.locale.format); }
            if (this.singleDatePicker || start === null || end === null) { start = moment(this.element.val(), this.locale.format);
                end = start; }
            if (!start.isValid() || !end.isValid()) return;
            this.setStartDate(start);
            this.setEndDate(end);
            this.updateView();
        },
        keydown: function(e) {
            if ((e.keyCode === 9) || (e.keyCode === 13)) { this.hide(); }
            if (e.keyCode === 27) { e.preventDefault();
                e.stopPropagation();
                this.hide(); }
        },
        updateElement: function() {
            if (this.element.is('input') && this.autoUpdateInput) {
                var newValue = this.startDate.format(this.locale.format);
                if (!this.singleDatePicker) { newValue += this.locale.separator + this.endDate.format(this.locale.format); }
                if (newValue !== this.element.val()) { this.element.val(newValue).trigger('change'); }
            }
        },
        remove: function() { this.container.remove();
            this.element.off('.daterangepicker');
            this.element.removeData(); }
    };
    $.fn.daterangepicker = function(options, callback) {
        var implementOptions = $.extend(true, {}, $.fn.daterangepicker.defaultOptions, options);
        this.each(function() {
            var el = $(this);
            if (el.data('daterangepicker'))
                el.data('daterangepicker').remove();
            el.data('daterangepicker', new DateRangePicker(el, implementOptions, callback));
        });
        return this;
    };
    return DateRangePicker;
}));; /*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
! function(n) { "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = function(e, t) { return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), n(t), t } : n(jQuery) }(function(d) { var e = function() { if (d && d.fn && d.fn.select2 && d.fn.select2.amd) var e = d.fn.select2.amd; var t, n, i, h, o, s, f, g, m, v, y, _, r, a, w, l;

            function b(e, t) { return r.call(e, t) }

            function c(e, t) { var n, i, r, o, s, a, l, c, u, d, p, h = t && t.split("/"),
                    f = y.map,
                    g = f && f["*"] || {}; if (e) { for (s = (e = e.split("/")).length - 1, y.nodeIdCompat && w.test(e[s]) && (e[s] = e[s].replace(w, "")), "." === e[0].charAt(0) && h && (e = h.slice(0, h.length - 1).concat(e)), u = 0; u < e.length; u++)
                        if ("." === (p = e[u])) e.splice(u, 1), u -= 1;
                        else if (".." === p) { if (0 === u || 1 === u && ".." === e[2] || ".." === e[u - 1]) continue;
                        0 < u && (e.splice(u - 1, 2), u -= 2) }
                    e = e.join("/") } if ((h || g) && f) { for (u = (n = e.split("/")).length; 0 < u; u -= 1) { if (i = n.slice(0, u).join("/"), h)
                            for (d = h.length; 0 < d; d -= 1)
                                if (r = (r = f[h.slice(0, d).join("/")]) && r[i]) { o = r, a = u; break }
                        if (o) break;!l && g && g[i] && (l = g[i], c = u) }!o && l && (o = l, a = c), o && (n.splice(0, a, o), e = n.join("/")) } return e }

            function A(t, n) { return function() { var e = a.call(arguments, 0); return "string" != typeof e[0] && 1 === e.length && e.push(null), s.apply(h, e.concat([t, n])) } }

            function x(t) { return function(e) { m[t] = e } }

            function D(e) { if (b(v, e)) { var t = v[e];
                    delete v[e], _[e] = !0, o.apply(h, t) } if (!b(m, e) && !b(_, e)) throw new Error("No " + e); return m[e] }

            function u(e) { var t, n = e ? e.indexOf("!") : -1; return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e] }

            function S(e) { return e ? u(e) : [] } return e && e.requirejs || (e ? n = e : e = {}, m = {}, v = {}, y = {}, _ = {}, r = Object.prototype.hasOwnProperty, a = [].slice, w = /\.js$/, f = function(e, t) { var n, i = u(e),
                    r = i[0],
                    o = t[1]; return e = i[1], r && (n = D(r = c(r, o))), r ? e = n && n.normalize ? n.normalize(e, function(t) { return function(e) { return c(e, t) } }(o)) : c(e, o) : (r = (i = u(e = c(e, o)))[0], e = i[1], r && (n = D(r))), { f: r ? r + "!" + e : e, n: e, pr: r, p: n } }, g = { require: function(e) { return A(e) }, exports: function(e) { var t = m[e]; return void 0 !== t ? t : m[e] = {} }, module: function(e) { return { id: e, uri: "", exports: m[e], config: function(e) { return function() { return y && y.config && y.config[e] || {} } }(e) } } }, o = function(e, t, n, i) { var r, o, s, a, l, c, u, d = [],
                    p = typeof n; if (c = S(i = i || e), "undefined" == p || "function" == p) { for (t = !t.length && n.length ? ["require", "exports", "module"] : t, l = 0; l < t.length; l += 1)
                        if ("require" === (o = (a = f(t[l], c)).f)) d[l] = g.require(e);
                        else if ("exports" === o) d[l] = g.exports(e), u = !0;
                    else if ("module" === o) r = d[l] = g.module(e);
                    else if (b(m, o) || b(v, o) || b(_, o)) d[l] = D(o);
                    else { if (!a.p) throw new Error(e + " missing " + o);
                        a.p.load(a.n, A(i, !0), x(o), {}), d[l] = m[o] }
                    s = n ? n.apply(m[e], d) : void 0, e && (r && r.exports !== h && r.exports !== m[e] ? m[e] = r.exports : s === h && u || (m[e] = s)) } else e && (m[e] = n) }, t = n = s = function(e, t, n, i, r) { if ("string" == typeof e) return g[e] ? g[e](t) : D(f(e, S(t)).f); if (!e.splice) { if ((y = e).deps && s(y.deps, y.callback), !t) return;
                    t.splice ? (e = t, t = n, n = null) : e = h } return t = t || function() {}, "function" == typeof n && (n = i, i = r), i ? o(h, e, t, n) : setTimeout(function() { o(h, e, t, n) }, 4), s }, s.config = function(e) { return s(e) }, t._defined = m, (i = function(e, t, n) { if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                t.splice || (n = t, t = []), b(m, e) || b(v, e) || (v[e] = [e, t, n]) }).amd = { jQuery: !0 }, e.requirejs = t, e.require = n, e.define = i), e.define("almond", function() {}), e.define("jquery", [], function() { var e = d || $; return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e }), e.define("select2/utils", ["jquery"], function(o) { var r = {};

                function u(e) { var t = e.prototype,
                        n = []; for (var i in t) { "function" == typeof t[i] && "constructor" !== i && n.push(i) } return n }
                r.Extend = function(e, t) { var n = {}.hasOwnProperty;

                    function i() { this.constructor = e } for (var r in t) n.call(t, r) && (e[r] = t[r]); return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e }, r.Decorate = function(i, r) { var e = u(r),
                        t = u(i);

                    function o() { var e = Array.prototype.unshift,
                            t = r.prototype.constructor.length,
                            n = i.prototype.constructor;
                        0 < t && (e.call(arguments, i.prototype.constructor), n = r.prototype.constructor), n.apply(this, arguments) }
                    r.displayName = i.displayName, o.prototype = new function() { this.constructor = o }; for (var n = 0; n < t.length; n++) { var s = t[n];
                        o.prototype[s] = i.prototype[s] }

                    function a(e) { var t = function() {};
                        e in o.prototype && (t = o.prototype[e]); var n = r.prototype[e]; return function() { return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments) } } for (var l = 0; l < e.length; l++) { var c = e[l];
                        o.prototype[c] = a(c) } return o };

                function e() { this.listeners = {} }
                e.prototype.on = function(e, t) { this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t] }, e.prototype.trigger = function(e) { var t = Array.prototype.slice,
                        n = t.call(arguments, 1);
                    this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments) }, e.prototype.invoke = function(e, t) { for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t) }, r.Observable = e, r.generateChars = function(e) { for (var t = "", n = 0; n < e; n++) { t += Math.floor(36 * Math.random()).toString(36) } return t }, r.bind = function(e, t) { return function() { e.apply(t, arguments) } }, r._convertData = function(e) { for (var t in e) { var n = t.split("-"),
                            i = e; if (1 !== n.length) { for (var r = 0; r < n.length; r++) { var o = n[r];
                                (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in i || (i[o] = {}), r == n.length - 1 && (i[o] = e[t]), i = i[o] }
                            delete e[t] } } return e }, r.hasScroll = function(e, t) { var n = o(t),
                        i = t.style.overflowX,
                        r = t.style.overflowY; return (i !== r || "hidden" !== r && "visible" !== r) && ("scroll" === i || "scroll" === r || (n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth)) }, r.escapeMarkup = function(e) { var t = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" }; return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) { return t[e] }) }, r.appendMany = function(e, t) { if ("1.7" === o.fn.jquery.substr(0, 3)) { var n = o();
                        o.map(t, function(e) { n = n.add(e) }), t = n }
                    e.append(t) }, r.__cache = {}; var n = 0; return r.GetUniqueElementId = function(e) { var t = e.getAttribute("data-select2-id"); return null == t && (e.id ? (t = e.id, e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++n), t = n.toString())), t }, r.StoreData = function(e, t, n) { var i = r.GetUniqueElementId(e);
                    r.__cache[i] || (r.__cache[i] = {}), r.__cache[i][t] = n }, r.GetData = function(e, t) { var n = r.GetUniqueElementId(e); return t ? r.__cache[n] && null != r.__cache[n][t] ? r.__cache[n][t] : o(e).data(t) : r.__cache[n] }, r.RemoveData = function(e) { var t = r.GetUniqueElementId(e);
                    null != r.__cache[t] && delete r.__cache[t], e.removeAttribute("data-select2-id") }, r }), e.define("select2/results", ["jquery", "./utils"], function(h, f) {
                function i(e, t, n) { this.$element = e, this.data = n, this.options = t, i.__super__.constructor.call(this) } return f.Extend(i, f.Observable), i.prototype.render = function() { var e = h('<ul class="select2-results__options" role="listbox"></ul>'); return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e }, i.prototype.clear = function() { this.$results.empty() }, i.prototype.displayMessage = function(e) { var t = this.options.get("escapeMarkup");
                    this.clear(), this.hideLoading(); var n = h('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
                        i = this.options.get("translations").get(e.message);
                    n.append(t(i(e.args))), n[0].className += " select2-results__message", this.$results.append(n) }, i.prototype.hideMessages = function() { this.$results.find(".select2-results__message").remove() }, i.prototype.append = function(e) { this.hideLoading(); var t = []; if (null != e.results && 0 !== e.results.length) { e.results = this.sort(e.results); for (var n = 0; n < e.results.length; n++) { var i = e.results[n],
                                r = this.option(i);
                            t.push(r) }
                        this.$results.append(t) } else 0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" }) }, i.prototype.position = function(e, t) { t.find(".select2-results").append(e) }, i.prototype.sort = function(e) { return this.options.get("sorter")(e) }, i.prototype.highlightFirstItem = function() { var e = this.$results.find(".select2-results__option[aria-selected]"),
                        t = e.filter("[aria-selected=true]");
                    0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible() }, i.prototype.setClasses = function() { var t = this;
                    this.data.current(function(e) { var i = h.map(e, function(e) { return e.id.toString() });
                        t.$results.find(".select2-results__option[aria-selected]").each(function() { var e = h(this),
                                t = f.GetData(this, "data"),
                                n = "" + t.id;
                            null != t.element && t.element.selected || null == t.element && -1 < h.inArray(n, i) ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false") }) }) }, i.prototype.showLoading = function(e) { this.hideLoading(); var t = { disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(e) },
                        n = this.option(t);
                    n.className += " loading-results", this.$results.prepend(n) }, i.prototype.hideLoading = function() { this.$results.find(".loading-results").remove() }, i.prototype.option = function(e) { var t = document.createElement("li");
                    t.className = "select2-results__option"; var n = { role: "option", "aria-selected": "false" },
                        i = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector; for (var r in (null != e.element && i.call(e.element, ":disabled") || null == e.element && e.disabled) && (delete n["aria-selected"], n["aria-disabled"] = "true"), null == e.id && delete n["aria-selected"], null != e._resultId && (t.id = e._resultId), e.title && (t.title = e.title), e.children && (n.role = "group", n["aria-label"] = e.text, delete n["aria-selected"]), n) { var o = n[r];
                        t.setAttribute(r, o) } if (e.children) { var s = h(t),
                            a = document.createElement("strong");
                        a.className = "select2-results__group";
                        h(a);
                        this.template(e, a); for (var l = [], c = 0; c < e.children.length; c++) { var u = e.children[c],
                                d = this.option(u);
                            l.push(d) } var p = h("<ul></ul>", { class: "select2-results__options select2-results__options--nested" });
                        p.append(l), s.append(a), s.append(p) } else this.template(e, t); return f.StoreData(t, "data", e), t }, i.prototype.bind = function(t, e) { var l = this,
                        n = t.id + "-results";
                    this.$results.attr("id", n), t.on("results:all", function(e) { l.clear(), l.append(e.data), t.isOpen() && (l.setClasses(), l.highlightFirstItem()) }), t.on("results:append", function(e) { l.append(e.data), t.isOpen() && l.setClasses() }), t.on("query", function(e) { l.hideMessages(), l.showLoading(e) }), t.on("select", function() { t.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem()) }), t.on("unselect", function() { t.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem()) }), t.on("open", function() { l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible() }), t.on("close", function() { l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant") }), t.on("results:toggle", function() { var e = l.getHighlightedResults();
                        0 !== e.length && e.trigger("mouseup") }), t.on("results:select", function() { var e = l.getHighlightedResults(); if (0 !== e.length) { var t = f.GetData(e[0], "data"); "true" == e.attr("aria-selected") ? l.trigger("close", {}) : l.trigger("select", { data: t }) } }), t.on("results:previous", function() { var e = l.getHighlightedResults(),
                            t = l.$results.find("[aria-selected]"),
                            n = t.index(e); if (!(n <= 0)) { var i = n - 1;
                            0 === e.length && (i = 0); var r = t.eq(i);
                            r.trigger("mouseenter"); var o = l.$results.offset().top,
                                s = r.offset().top,
                                a = l.$results.scrollTop() + (s - o);
                            0 === i ? l.$results.scrollTop(0) : s - o < 0 && l.$results.scrollTop(a) } }), t.on("results:next", function() { var e = l.getHighlightedResults(),
                            t = l.$results.find("[aria-selected]"),
                            n = t.index(e) + 1; if (!(n >= t.length)) { var i = t.eq(n);
                            i.trigger("mouseenter"); var r = l.$results.offset().top + l.$results.outerHeight(!1),
                                o = i.offset().top + i.outerHeight(!1),
                                s = l.$results.scrollTop() + o - r;
                            0 === n ? l.$results.scrollTop(0) : r < o && l.$results.scrollTop(s) } }), t.on("results:focus", function(e) { e.element.addClass("select2-results__option--highlighted") }), t.on("results:message", function(e) { l.displayMessage(e) }), h.fn.mousewheel && this.$results.on("mousewheel", function(e) { var t = l.$results.scrollTop(),
                            n = l.$results.get(0).scrollHeight - t + e.deltaY,
                            i = 0 < e.deltaY && t - e.deltaY <= 0,
                            r = e.deltaY < 0 && n <= l.$results.height();
                        i ? (l.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : r && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), e.preventDefault(), e.stopPropagation()) }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(e) { var t = h(this),
                            n = f.GetData(this, "data"); "true" !== t.attr("aria-selected") ? l.trigger("select", { originalEvent: e, data: n }) : l.options.get("multiple") ? l.trigger("unselect", { originalEvent: e, data: n }) : l.trigger("close", {}) }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(e) { var t = f.GetData(this, "data");
                        l.getHighlightedResults().removeClass("select2-results__option--highlighted"), l.trigger("results:focus", { data: t, element: h(this) }) }) }, i.prototype.getHighlightedResults = function() { return this.$results.find(".select2-results__option--highlighted") }, i.prototype.destroy = function() { this.$results.remove() }, i.prototype.ensureHighlightVisible = function() { var e = this.getHighlightedResults(); if (0 !== e.length) { var t = this.$results.find("[aria-selected]").index(e),
                            n = this.$results.offset().top,
                            i = e.offset().top,
                            r = this.$results.scrollTop() + (i - n),
                            o = i - n;
                        r -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(r) } }, i.prototype.template = function(e, t) { var n = this.options.get("templateResult"),
                        i = this.options.get("escapeMarkup"),
                        r = n(e, t);
                    null == r ? t.style.display = "none" : "string" == typeof r ? t.innerHTML = i(r) : h(t).append(r) }, i }), e.define("select2/keys", [], function() { return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 } }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(n, i, r) {
                function o(e, t) { this.$element = e, this.options = t, o.__super__.constructor.call(this) } return i.Extend(o, i.Observable), o.prototype.render = function() { var e = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'); return this._tabindex = 0, null != i.GetData(this.$element[0], "old-tabindex") ? this._tabindex = i.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), e.attr("aria-disabled", "false"), this.$selection = e }, o.prototype.bind = function(e, t) { var n = this,
                        i = e.id + "-results";
                    this.container = e, this.$selection.on("focus", function(e) { n.trigger("focus", e) }), this.$selection.on("blur", function(e) { n._handleBlur(e) }), this.$selection.on("keydown", function(e) { n.trigger("keypress", e), e.which === r.SPACE && e.preventDefault() }), e.on("results:focus", function(e) { n.$selection.attr("aria-activedescendant", e.data._resultId) }), e.on("selection:update", function(e) { n.update(e.data) }), e.on("open", function() { n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", i), n._attachCloseHandler(e) }), e.on("close", function() { n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.trigger("focus"), n._detachCloseHandler(e) }), e.on("enable", function() { n.$selection.attr("tabindex", n._tabindex), n.$selection.attr("aria-disabled", "false") }), e.on("disable", function() { n.$selection.attr("tabindex", "-1"), n.$selection.attr("aria-disabled", "true") }) }, o.prototype._handleBlur = function(e) { var t = this;
                    window.setTimeout(function() { document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e) }, 1) }, o.prototype._attachCloseHandler = function(e) { n(document.body).on("mousedown.select2." + e.id, function(e) { var t = n(e.target).closest(".select2");
                        n(".select2.select2-container--open").each(function() { this != t[0] && i.GetData(this, "element").select2("close") }) }) }, o.prototype._detachCloseHandler = function(e) { n(document.body).off("mousedown.select2." + e.id) }, o.prototype.position = function(e, t) { t.find(".selection").append(e) }, o.prototype.destroy = function() { this._detachCloseHandler(this.container) }, o.prototype.update = function(e) { throw new Error("The `update` method must be defined in child classes.") }, o.prototype.isEnabled = function() { return !this.isDisabled() }, o.prototype.isDisabled = function() { return this.options.get("disabled") }, o }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, n, i) {
                function r() { r.__super__.constructor.apply(this, arguments) } return n.Extend(r, t), r.prototype.render = function() { var e = r.__super__.render.call(this); return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e }, r.prototype.bind = function(t, e) { var n = this;
                    r.__super__.bind.apply(this, arguments); var i = t.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function(e) { 1 === e.which && n.trigger("toggle", { originalEvent: e }) }), this.$selection.on("focus", function(e) {}), this.$selection.on("blur", function(e) {}), t.on("focus", function(e) { t.isOpen() || n.$selection.trigger("focus") }) }, r.prototype.clear = function() { var e = this.$selection.find(".select2-selection__rendered");
                    e.empty(), e.removeAttr("title") }, r.prototype.display = function(e, t) { var n = this.options.get("templateSelection"); return this.options.get("escapeMarkup")(n(e, t)) }, r.prototype.selectionContainer = function() { return e("<span></span>") }, r.prototype.update = function(e) { if (0 !== e.length) { var t = e[0],
                            n = this.$selection.find(".select2-selection__rendered"),
                            i = this.display(t, n);
                        n.empty().append(i); var r = t.title || t.text;
                        r ? n.attr("title", r) : n.removeAttr("title") } else this.clear() }, r }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(r, e, l) {
                function n(e, t) { n.__super__.constructor.apply(this, arguments) } return l.Extend(n, e), n.prototype.render = function() { var e = n.__super__.render.call(this); return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e }, n.prototype.bind = function(e, t) { var i = this;
                    n.__super__.bind.apply(this, arguments), this.$selection.on("click", function(e) { i.trigger("toggle", { originalEvent: e }) }), this.$selection.on("click", ".select2-selection__choice__remove", function(e) { if (!i.isDisabled()) { var t = r(this).parent(),
                                n = l.GetData(t[0], "data");
                            i.trigger("unselect", { originalEvent: e, data: n }) } }) }, n.prototype.clear = function() { var e = this.$selection.find(".select2-selection__rendered");
                    e.empty(), e.removeAttr("title") }, n.prototype.display = function(e, t) { var n = this.options.get("templateSelection"); return this.options.get("escapeMarkup")(n(e, t)) }, n.prototype.selectionContainer = function() { return r('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>') }, n.prototype.update = function(e) { if (this.clear(), 0 !== e.length) { for (var t = [], n = 0; n < e.length; n++) { var i = e[n],
                                r = this.selectionContainer(),
                                o = this.display(i, r);
                            r.append(o); var s = i.title || i.text;
                            s && r.attr("title", s), l.StoreData(r[0], "data", i), t.push(r) } var a = this.$selection.find(".select2-selection__rendered");
                        l.appendMany(a, t) } }, n }), e.define("select2/selection/placeholder", ["../utils"], function(e) {
                function t(e, t, n) { this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n) } return t.prototype.normalizePlaceholder = function(e, t) { return "string" == typeof t && (t = { id: "", text: t }), t }, t.prototype.createPlaceholder = function(e, t) { var n = this.selectionContainer(); return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n }, t.prototype.update = function(e, t) { var n = 1 == t.length && t[0].id != this.placeholder.id; if (1 < t.length || n) return e.call(this, t);
                    this.clear(); var i = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append(i) }, t }), e.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function(r, i, a) {
                function e() {} return e.prototype.bind = function(e, t, n) { var i = this;
                    e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(e) { i._handleClear(e) }), t.on("keypress", function(e) { i._handleKeyboardClear(e, t) }) }, e.prototype._handleClear = function(e, t) { if (!this.isDisabled()) { var n = this.$selection.find(".select2-selection__clear"); if (0 !== n.length) { t.stopPropagation(); var i = a.GetData(n[0], "data"),
                                r = this.$element.val();
                            this.$element.val(this.placeholder.id); var o = { data: i }; if (this.trigger("clear", o), o.prevented) this.$element.val(r);
                            else { for (var s = 0; s < i.length; s++)
                                    if (o = { data: i[s] }, this.trigger("unselect", o), o.prevented) return void this.$element.val(r);
                                this.$element.trigger("input").trigger("change"), this.trigger("toggle", {}) } } } }, e.prototype._handleKeyboardClear = function(e, t, n) { n.isOpen() || t.which != i.DELETE && t.which != i.BACKSPACE || this._handleClear(t) }, e.prototype.update = function(e, t) { if (e.call(this, t), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length)) { var n = this.options.get("translations").get("removeAllItems"),
                            i = r('<span class="select2-selection__clear" title="' + n() + '">&times;</span>');
                        a.StoreData(i[0], "data", t), this.$selection.find(".select2-selection__rendered").prepend(i) } }, e }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(i, a, l) {
                function e(e, t, n) { e.call(this, t, n) } return e.prototype.render = function(e) { var t = i('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');
                    this.$searchContainer = t, this.$search = t.find("input"); var n = e.call(this); return this._transferTabIndex(), n }, e.prototype.bind = function(e, t, n) { var i = this,
                        r = t.id + "-results";
                    e.call(this, t, n), t.on("open", function() { i.$search.attr("aria-controls", r), i.$search.trigger("focus") }), t.on("close", function() { i.$search.val(""), i.$search.removeAttr("aria-controls"), i.$search.removeAttr("aria-activedescendant"), i.$search.trigger("focus") }), t.on("enable", function() { i.$search.prop("disabled", !1), i._transferTabIndex() }), t.on("disable", function() { i.$search.prop("disabled", !0) }), t.on("focus", function(e) { i.$search.trigger("focus") }), t.on("results:focus", function(e) { e.data._resultId ? i.$search.attr("aria-activedescendant", e.data._resultId) : i.$search.removeAttr("aria-activedescendant") }), this.$selection.on("focusin", ".select2-search--inline", function(e) { i.trigger("focus", e) }), this.$selection.on("focusout", ".select2-search--inline", function(e) { i._handleBlur(e) }), this.$selection.on("keydown", ".select2-search--inline", function(e) { if (e.stopPropagation(), i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented(), e.which === l.BACKSPACE && "" === i.$search.val()) { var t = i.$searchContainer.prev(".select2-selection__choice"); if (0 < t.length) { var n = a.GetData(t[0], "data");
                                i.searchRemoveChoice(n), e.preventDefault() } } }), this.$selection.on("click", ".select2-search--inline", function(e) { i.$search.val() && e.stopPropagation() }); var o = document.documentMode,
                        s = o && o <= 11;
                    this.$selection.on("input.searchcheck", ".select2-search--inline", function(e) { s ? i.$selection.off("input.search input.searchcheck") : i.$selection.off("keyup.search") }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) { if (s && "input" === e.type) i.$selection.off("input.search input.searchcheck");
                        else { var t = e.which;
                            t != l.SHIFT && t != l.CTRL && t != l.ALT && t != l.TAB && i.handleSearch(e) } }) }, e.prototype._transferTabIndex = function(e) { this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1") }, e.prototype.createPlaceholder = function(e, t) { this.$search.attr("placeholder", t.text) }, e.prototype.update = function(e, t) { var n = this.$search[0] == document.activeElement;
                    this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.trigger("focus") }, e.prototype.handleSearch = function() { if (this.resizeSearch(), !this._keyUpPrevented) { var e = this.$search.val();
                        this.trigger("query", { term: e }) }
                    this._keyUpPrevented = !1 }, e.prototype.searchRemoveChoice = function(e, t) { this.trigger("unselect", { data: t }), this.$search.val(t.text), this.handleSearch() }, e.prototype.resizeSearch = function() { this.$search.css("width", "25px"); var e = ""; "" !== this.$search.attr("placeholder") ? e = this.$selection.find(".select2-selection__rendered").width() : e = .75 * (this.$search.val().length + 1) + "em";
                    this.$search.css("width", e) }, e }), e.define("select2/selection/eventRelay", ["jquery"], function(s) {
                function e() {} return e.prototype.bind = function(e, t, n) { var i = this,
                        r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                        o = ["opening", "closing", "selecting", "unselecting", "clearing"];
                    e.call(this, t, n), t.on("*", function(e, t) { if (-1 !== s.inArray(e, r)) { t = t || {}; var n = s.Event("select2:" + e, { params: t });
                            i.$element.trigger(n), -1 !== s.inArray(e, o) && (t.prevented = n.isDefaultPrevented()) } }) }, e }), e.define("select2/translation", ["jquery", "require"], function(t, n) {
                function i(e) { this.dict = e || {} } return i.prototype.all = function() { return this.dict }, i.prototype.get = function(e) { return this.dict[e] }, i.prototype.extend = function(e) { this.dict = t.extend({}, e.all(), this.dict) }, i._cache = {}, i.loadPath = function(e) { if (!(e in i._cache)) { var t = n(e);
                        i._cache[e] = t } return new i(i._cache[e]) }, i }), e.define("select2/diacritics", [], function() { return { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Œ": "OE", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "œ": "oe", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ώ": "ω", "ς": "σ", "’": "'" } }), e.define("select2/data/base", ["../utils"], function(i) {
                function n(e, t) { n.__super__.constructor.call(this) } return i.Extend(n, i.Observable), n.prototype.current = function(e) { throw new Error("The `current` method must be defined in child classes.") }, n.prototype.query = function(e, t) { throw new Error("The `query` method must be defined in child classes.") }, n.prototype.bind = function(e, t) {}, n.prototype.destroy = function() {}, n.prototype.generateResultId = function(e, t) { var n = e.id + "-result-"; return n += i.generateChars(4), null != t.id ? n += "-" + t.id.toString() : n += "-" + i.generateChars(4), n }, n }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, a, l) {
                function n(e, t) { this.$element = e, this.options = t, n.__super__.constructor.call(this) } return a.Extend(n, e), n.prototype.current = function(e) { var n = [],
                        i = this;
                    this.$element.find(":selected").each(function() { var e = l(this),
                            t = i.item(e);
                        n.push(t) }), e(n) }, n.prototype.select = function(r) { var o = this; if (r.selected = !0, l(r.element).is("option")) return r.element.selected = !0, void this.$element.trigger("input").trigger("change"); if (this.$element.prop("multiple")) this.current(function(e) { var t = [];
                        (r = [r]).push.apply(r, e); for (var n = 0; n < r.length; n++) { var i = r[n].id; - 1 === l.inArray(i, t) && t.push(i) }
                        o.$element.val(t), o.$element.trigger("input").trigger("change") });
                    else { var e = r.id;
                        this.$element.val(e), this.$element.trigger("input").trigger("change") } }, n.prototype.unselect = function(r) { var o = this; if (this.$element.prop("multiple")) { if (r.selected = !1, l(r.element).is("option")) return r.element.selected = !1, void this.$element.trigger("input").trigger("change");
                        this.current(function(e) { for (var t = [], n = 0; n < e.length; n++) { var i = e[n].id;
                                i !== r.id && -1 === l.inArray(i, t) && t.push(i) }
                            o.$element.val(t), o.$element.trigger("input").trigger("change") }) } }, n.prototype.bind = function(e, t) { var n = this;
                    (this.container = e).on("select", function(e) { n.select(e.data) }), e.on("unselect", function(e) { n.unselect(e.data) }) }, n.prototype.destroy = function() { this.$element.find("*").each(function() { a.RemoveData(this) }) }, n.prototype.query = function(i, e) { var r = [],
                        o = this;
                    this.$element.children().each(function() { var e = l(this); if (e.is("option") || e.is("optgroup")) { var t = o.item(e),
                                n = o.matches(i, t);
                            null !== n && r.push(n) } }), e({ results: r }) }, n.prototype.addOptions = function(e) { a.appendMany(this.$element, e) }, n.prototype.option = function(e) { var t;
                    e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, void 0 !== e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title); var n = l(t),
                        i = this._normalizeItem(e); return i.element = t, a.StoreData(t, "data", i), n }, n.prototype.item = function(e) { var t = {}; if (null != (t = a.GetData(e[0], "data"))) return t; if (e.is("option")) t = { id: e.val(), text: e.text(), disabled: e.prop("disabled"), selected: e.prop("selected"), title: e.prop("title") };
                    else if (e.is("optgroup")) { t = { text: e.prop("label"), children: [], title: e.prop("title") }; for (var n = e.children("option"), i = [], r = 0; r < n.length; r++) { var o = l(n[r]),
                                s = this.item(o);
                            i.push(s) }
                        t.children = i } return (t = this._normalizeItem(t)).element = e[0], a.StoreData(e[0], "data", t), t }, n.prototype._normalizeItem = function(e) { e !== Object(e) && (e = { id: e, text: e }); return null != (e = l.extend({}, { text: "" }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), l.extend({}, { selected: !1, disabled: !1 }, e) }, n.prototype.matches = function(e, t) { return this.options.get("matcher")(e, t) }, n }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, f, g) {
                function i(e, t) { this._dataToConvert = t.get("data") || [], i.__super__.constructor.call(this, e, t) } return f.Extend(i, e), i.prototype.bind = function(e, t) { i.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert)) }, i.prototype.select = function(n) { var e = this.$element.find("option").filter(function(e, t) { return t.value == n.id.toString() });
                    0 === e.length && (e = this.option(n), this.addOptions(e)), i.__super__.select.call(this, n) }, i.prototype.convertToOptions = function(e) { var t = this,
                        n = this.$element.find("option"),
                        i = n.map(function() { return t.item(g(this)).id }).get(),
                        r = [];

                    function o(e) { return function() { return g(this).val() == e.id } } for (var s = 0; s < e.length; s++) { var a = this._normalizeItem(e[s]); if (0 <= g.inArray(a.id, i)) { var l = n.filter(o(a)),
                                c = this.item(l),
                                u = g.extend(!0, {}, a, c),
                                d = this.option(u);
                            l.replaceWith(d) } else { var p = this.option(a); if (a.children) { var h = this.convertToOptions(a.children);
                                f.appendMany(p, h) }
                            r.push(p) } } return r }, i }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, o) {
                function n(e, t) { this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, e, t) } return t.Extend(n, e), n.prototype._applyDefaults = function(e) { var t = { data: function(e) { return o.extend({}, e, { q: e.term }) }, transport: function(e, t, n) { var i = o.ajax(e); return i.then(t), i.fail(n), i } }; return o.extend({}, t, e, !0) }, n.prototype.processResults = function(e) { return e }, n.prototype.query = function(n, i) { var r = this;
                    null != this._request && (o.isFunction(this._request.abort) && this._request.abort(), this._request = null); var t = o.extend({ type: "GET" }, this.ajaxOptions);

                    function e() { var e = t.transport(t, function(e) { var t = r.processResults(e, n);
                            r.options.get("debug") && window.console && console.error && (t && t.results && o.isArray(t.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), i(t) }, function() { "status" in e && (0 === e.status || "0" === e.status) || r.trigger("results:message", { message: "errorLoading" }) });
                        r._request = e } "function" == typeof t.url && (t.url = t.url.call(this.$element, n)), "function" == typeof t.data && (t.data = t.data.call(this.$element, n)), this.ajaxOptions.delay && null != n.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e() }, n }), e.define("select2/data/tags", ["jquery"], function(u) {
                function e(e, t, n) { var i = n.get("tags"),
                        r = n.get("createTag");
                    void 0 !== r && (this.createTag = r); var o = n.get("insertTag"); if (void 0 !== o && (this.insertTag = o), e.call(this, t, n), u.isArray(i))
                        for (var s = 0; s < i.length; s++) { var a = i[s],
                                l = this._normalizeItem(a),
                                c = this.option(l);
                            this.$element.append(c) } } return e.prototype.query = function(e, c, u) { var d = this;
                    this._removeOldTags(), null != c.term && null == c.page ? e.call(this, c, function e(t, n) { for (var i = t.results, r = 0; r < i.length; r++) { var o = i[r],
                                s = null != o.children && !e({ results: o.children }, !0); if ((o.text || "").toUpperCase() === (c.term || "").toUpperCase() || s) return !n && (t.data = i, void u(t)) } if (n) return !0; var a = d.createTag(c); if (null != a) { var l = d.option(a);
                            l.attr("data-select2-tag", !0), d.addOptions([l]), d.insertTag(i, a) }
                        t.results = i, u(t) }) : e.call(this, c, u) }, e.prototype.createTag = function(e, t) { var n = u.trim(t.term); return "" === n ? null : { id: n, text: n } }, e.prototype.insertTag = function(e, t, n) { t.unshift(n) }, e.prototype._removeOldTags = function(e) { this.$element.find("option[data-select2-tag]").each(function() { this.selected || u(this).remove() }) }, e }), e.define("select2/data/tokenizer", ["jquery"], function(d) {
                function e(e, t, n) { var i = n.get("tokenizer");
                    void 0 !== i && (this.tokenizer = i), e.call(this, t, n) } return e.prototype.bind = function(e, t, n) { e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field") }, e.prototype.query = function(e, t, n) { var i = this;
                    t.term = t.term || ""; var r = this.tokenizer(t, this.options, function(e) { var t = i._normalizeItem(e); if (!i.$element.find("option").filter(function() { return d(this).val() === t.id }).length) { var n = i.option(t);
                            n.attr("data-select2-tag", !0), i._removeOldTags(), i.addOptions([n]) }! function(e) { i.trigger("select", { data: e }) }(t) });
                    r.term !== t.term && (this.$search.length && (this.$search.val(r.term), this.$search.trigger("focus")), t.term = r.term), e.call(this, t, n) }, e.prototype.tokenizer = function(e, t, n, i) { for (var r = n.get("tokenSeparators") || [], o = t.term, s = 0, a = this.createTag || function(e) { return { id: e.term, text: e.term } }; s < o.length;) { var l = o[s]; if (-1 !== d.inArray(l, r)) { var c = o.substr(0, s),
                                u = a(d.extend({}, t, { term: c }));
                            null != u ? (i(u), o = o.substr(s + 1) || "", s = 0) : s++ } else s++ } return { term: o } }, e }), e.define("select2/data/minimumInputLength", [], function() {
                function e(e, t, n) { this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n) } return e.prototype.query = function(e, t, n) { t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: t.term, params: t } }) : e.call(this, t, n) }, e }), e.define("select2/data/maximumInputLength", [], function() {
                function e(e, t, n) { this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n) } return e.prototype.query = function(e, t, n) { t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: t.term, params: t } }) : e.call(this, t, n) }, e }), e.define("select2/data/maximumSelectionLength", [], function() {
                function e(e, t, n) { this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n) } return e.prototype.bind = function(e, t, n) { var i = this;
                    e.call(this, t, n), t.on("select", function() { i._checkIfMaximumSelected() }) }, e.prototype.query = function(e, t, n) { var i = this;
                    this._checkIfMaximumSelected(function() { e.call(i, t, n) }) }, e.prototype._checkIfMaximumSelected = function(e, n) { var i = this;
                    this.current(function(e) { var t = null != e ? e.length : 0;
                        0 < i.maximumSelectionLength && t >= i.maximumSelectionLength ? i.trigger("results:message", { message: "maximumSelected", args: { maximum: i.maximumSelectionLength } }) : n && n() }) }, e }), e.define("select2/dropdown", ["jquery", "./utils"], function(t, e) {
                function n(e, t) { this.$element = e, this.options = t, n.__super__.constructor.call(this) } return e.Extend(n, e.Observable), n.prototype.render = function() { var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>'); return e.attr("dir", this.options.get("dir")), this.$dropdown = e }, n.prototype.bind = function() {}, n.prototype.position = function(e, t) {}, n.prototype.destroy = function() { this.$dropdown.remove() }, n }), e.define("select2/dropdown/search", ["jquery", "../utils"], function(o, e) {
                function t() {} return t.prototype.render = function(e) { var t = e.call(this),
                        n = o('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'); return this.$searchContainer = n, this.$search = n.find("input"), t.prepend(n), t }, t.prototype.bind = function(e, t, n) { var i = this,
                        r = t.id + "-results";
                    e.call(this, t, n), this.$search.on("keydown", function(e) { i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented() }), this.$search.on("input", function(e) { o(this).off("keyup") }), this.$search.on("keyup input", function(e) { i.handleSearch(e) }), t.on("open", function() { i.$search.attr("tabindex", 0), i.$search.attr("aria-controls", r), i.$search.trigger("focus"), window.setTimeout(function() { i.$search.trigger("focus") }, 0) }), t.on("close", function() { i.$search.attr("tabindex", -1), i.$search.removeAttr("aria-controls"), i.$search.removeAttr("aria-activedescendant"), i.$search.val(""), i.$search.trigger("blur") }), t.on("focus", function() { t.isOpen() || i.$search.trigger("focus") }), t.on("results:all", function(e) { null != e.query.term && "" !== e.query.term || (i.showSearch(e) ? i.$searchContainer.removeClass("select2-search--hide") : i.$searchContainer.addClass("select2-search--hide")) }), t.on("results:focus", function(e) { e.data._resultId ? i.$search.attr("aria-activedescendant", e.data._resultId) : i.$search.removeAttr("aria-activedescendant") }) }, t.prototype.handleSearch = function(e) { if (!this._keyUpPrevented) { var t = this.$search.val();
                        this.trigger("query", { term: t }) }
                    this._keyUpPrevented = !1 }, t.prototype.showSearch = function(e, t) { return !0 }, t }), e.define("select2/dropdown/hidePlaceholder", [], function() {
                function e(e, t, n, i) { this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i) } return e.prototype.append = function(e, t) { t.results = this.removePlaceholder(t.results), e.call(this, t) }, e.prototype.normalizePlaceholder = function(e, t) { return "string" == typeof t && (t = { id: "", text: t }), t }, e.prototype.removePlaceholder = function(e, t) { for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) { var r = t[i];
                        this.placeholder.id === r.id && n.splice(i, 1) } return n }, e }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function(n) {
                function e(e, t, n, i) { this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1 } return e.prototype.append = function(e, t) { this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded()) }, e.prototype.bind = function(e, t, n) { var i = this;
                    e.call(this, t, n), t.on("query", function(e) { i.lastParams = e, i.loading = !0 }), t.on("query:append", function(e) { i.lastParams = e, i.loading = !0 }), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this)) }, e.prototype.loadMoreIfNeeded = function() { var e = n.contains(document.documentElement, this.$loadingMore[0]); if (!this.loading && e) { var t = this.$results.offset().top + this.$results.outerHeight(!1);
                        this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= t + 50 && this.loadMore() } }, e.prototype.loadMore = function() { this.loading = !0; var e = n.extend({}, { page: 1 }, this.lastParams);
                    e.page++, this.trigger("query:append", e) }, e.prototype.showLoadingMore = function(e, t) { return t.pagination && t.pagination.more }, e.prototype.createLoadingMore = function() { var e = n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
                        t = this.options.get("translations").get("loadingMore"); return e.html(t(this.lastParams)), e }, e }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(f, a) {
                function e(e, t, n) { this.$dropdownParent = f(n.get("dropdownParent") || document.body), e.call(this, t, n) } return e.prototype.bind = function(e, t, n) { var i = this;
                    e.call(this, t, n), t.on("open", function() { i._showDropdown(), i._attachPositioningHandler(t), i._bindContainerResultHandlers(t) }), t.on("close", function() { i._hideDropdown(), i._detachPositioningHandler(t) }), this.$dropdownContainer.on("mousedown", function(e) { e.stopPropagation() }) }, e.prototype.destroy = function(e) { e.call(this), this.$dropdownContainer.remove() }, e.prototype.position = function(e, t, n) { t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({ position: "absolute", top: -999999 }), this.$container = n }, e.prototype.render = function(e) { var t = f("<span></span>"),
                        n = e.call(this); return t.append(n), this.$dropdownContainer = t }, e.prototype._hideDropdown = function(e) { this.$dropdownContainer.detach() }, e.prototype._bindContainerResultHandlers = function(e, t) { if (!this._containerResultsHandlersBound) { var n = this;
                        t.on("results:all", function() { n._positionDropdown(), n._resizeDropdown() }), t.on("results:append", function() { n._positionDropdown(), n._resizeDropdown() }), t.on("results:message", function() { n._positionDropdown(), n._resizeDropdown() }), t.on("select", function() { n._positionDropdown(), n._resizeDropdown() }), t.on("unselect", function() { n._positionDropdown(), n._resizeDropdown() }), this._containerResultsHandlersBound = !0 } }, e.prototype._attachPositioningHandler = function(e, t) { var n = this,
                        i = "scroll.select2." + t.id,
                        r = "resize.select2." + t.id,
                        o = "orientationchange.select2." + t.id,
                        s = this.$container.parents().filter(a.hasScroll);
                    s.each(function() { a.StoreData(this, "select2-scroll-position", { x: f(this).scrollLeft(), y: f(this).scrollTop() }) }), s.on(i, function(e) { var t = a.GetData(this, "select2-scroll-position");
                        f(this).scrollTop(t.y) }), f(window).on(i + " " + r + " " + o, function(e) { n._positionDropdown(), n._resizeDropdown() }) }, e.prototype._detachPositioningHandler = function(e, t) { var n = "scroll.select2." + t.id,
                        i = "resize.select2." + t.id,
                        r = "orientationchange.select2." + t.id;
                    this.$container.parents().filter(a.hasScroll).off(n), f(window).off(n + " " + i + " " + r) }, e.prototype._positionDropdown = function() { var e = f(window),
                        t = this.$dropdown.hasClass("select2-dropdown--above"),
                        n = this.$dropdown.hasClass("select2-dropdown--below"),
                        i = null,
                        r = this.$container.offset();
                    r.bottom = r.top + this.$container.outerHeight(!1); var o = { height: this.$container.outerHeight(!1) };
                    o.top = r.top, o.bottom = r.top + o.height; var s = this.$dropdown.outerHeight(!1),
                        a = e.scrollTop(),
                        l = e.scrollTop() + e.height(),
                        c = a < r.top - s,
                        u = l > r.bottom + s,
                        d = { left: r.left, top: o.bottom },
                        p = this.$dropdownParent; "static" === p.css("position") && (p = p.offsetParent()); var h = { top: 0, left: 0 };
                    (f.contains(document.body, p[0]) || p[0].isConnected) && (h = p.offset()), d.top -= h.top, d.left -= h.left, t || n || (i = "below"), u || !c || t ? !c && u && t && (i = "below") : i = "above", ("above" == i || t && "below" !== i) && (d.top = o.top - h.top - s), null != i && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + i), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + i)), this.$dropdownContainer.css(d) }, e.prototype._resizeDropdown = function() { var e = { width: this.$container.outerWidth(!1) + "px" };
                    this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e) }, e.prototype._showDropdown = function(e) { this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown() }, e }), e.define("select2/dropdown/minimumResultsForSearch", [], function() {
                function e(e, t, n, i) { this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i) } return e.prototype.showSearch = function(e, t) { return !(function e(t) { for (var n = 0, i = 0; i < t.length; i++) { var r = t[i];
                            r.children ? n += e(r.children) : n++ } return n }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t) }, e }), e.define("select2/dropdown/selectOnClose", ["../utils"], function(o) {
                function e() {} return e.prototype.bind = function(e, t, n) { var i = this;
                    e.call(this, t, n), t.on("close", function(e) { i._handleSelectOnClose(e) }) }, e.prototype._handleSelectOnClose = function(e, t) { if (t && null != t.originalSelect2Event) { var n = t.originalSelect2Event; if ("select" === n._type || "unselect" === n._type) return } var i = this.getHighlightedResults(); if (!(i.length < 1)) { var r = o.GetData(i[0], "data");
                        null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", { data: r }) } }, e }), e.define("select2/dropdown/closeOnSelect", [], function() {
                function e() {} return e.prototype.bind = function(e, t, n) { var i = this;
                    e.call(this, t, n), t.on("select", function(e) { i._selectTriggered(e) }), t.on("unselect", function(e) { i._selectTriggered(e) }) }, e.prototype._selectTriggered = function(e, t) { var n = t.originalEvent;
                    n && (n.ctrlKey || n.metaKey) || this.trigger("close", { originalEvent: n, originalSelect2Event: t }) }, e }), e.define("select2/i18n/en", [], function() { return { errorLoading: function() { return "The results could not be loaded." }, inputTooLong: function(e) { var t = e.input.length - e.maximum,
                            n = "Please delete " + t + " character"; return 1 != t && (n += "s"), n }, inputTooShort: function(e) { return "Please enter " + (e.minimum - e.input.length) + " or more characters" }, loadingMore: function() { return "Loading more results…" }, maximumSelected: function(e) { var t = "You can only select " + e.maximum + " item"; return 1 != e.maximum && (t += "s"), t }, noResults: function() { return "No results found" }, searching: function() { return "Searching…" }, removeAllItems: function() { return "Remove all items" } } }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(c, u, d, p, h, f, g, m, v, y, s, t, _, w, $, b, A, x, D, S, C, E, O, T, q, j, L, I, e) {
                function n() { this.reset() } return n.prototype.apply = function(e) { if (null == (e = c.extend(!0, {}, this.defaults, e)).dataAdapter) { if (null != e.ajax ? e.dataAdapter = $ : null != e.data ? e.dataAdapter = w : e.dataAdapter = _, 0 < e.minimumInputLength && (e.dataAdapter = y.Decorate(e.dataAdapter, x)), 0 < e.maximumInputLength && (e.dataAdapter = y.Decorate(e.dataAdapter, D)), 0 < e.maximumSelectionLength && (e.dataAdapter = y.Decorate(e.dataAdapter, S)), e.tags && (e.dataAdapter = y.Decorate(e.dataAdapter, b)), null == e.tokenSeparators && null == e.tokenizer || (e.dataAdapter = y.Decorate(e.dataAdapter, A)), null != e.query) { var t = u(e.amdBase + "compat/query");
                            e.dataAdapter = y.Decorate(e.dataAdapter, t) } if (null != e.initSelection) { var n = u(e.amdBase + "compat/initSelection");
                            e.dataAdapter = y.Decorate(e.dataAdapter, n) } } if (null == e.resultsAdapter && (e.resultsAdapter = d, null != e.ajax && (e.resultsAdapter = y.Decorate(e.resultsAdapter, T)), null != e.placeholder && (e.resultsAdapter = y.Decorate(e.resultsAdapter, O)), e.selectOnClose && (e.resultsAdapter = y.Decorate(e.resultsAdapter, L))), null == e.dropdownAdapter) { if (e.multiple) e.dropdownAdapter = C;
                        else { var i = y.Decorate(C, E);
                            e.dropdownAdapter = i } if (0 !== e.minimumResultsForSearch && (e.dropdownAdapter = y.Decorate(e.dropdownAdapter, j)), e.closeOnSelect && (e.dropdownAdapter = y.Decorate(e.dropdownAdapter, I)), null != e.dropdownCssClass || null != e.dropdownCss || null != e.adaptDropdownCssClass) { var r = u(e.amdBase + "compat/dropdownCss");
                            e.dropdownAdapter = y.Decorate(e.dropdownAdapter, r) }
                        e.dropdownAdapter = y.Decorate(e.dropdownAdapter, q) } if (null == e.selectionAdapter) { if (e.multiple ? e.selectionAdapter = h : e.selectionAdapter = p, null != e.placeholder && (e.selectionAdapter = y.Decorate(e.selectionAdapter, f)), e.allowClear && (e.selectionAdapter = y.Decorate(e.selectionAdapter, g)), e.multiple && (e.selectionAdapter = y.Decorate(e.selectionAdapter, m)), null != e.containerCssClass || null != e.containerCss || null != e.adaptContainerCssClass) { var o = u(e.amdBase + "compat/containerCss");
                            e.selectionAdapter = y.Decorate(e.selectionAdapter, o) }
                        e.selectionAdapter = y.Decorate(e.selectionAdapter, v) }
                    e.language = this._resolveLanguage(e.language), e.language.push("en"); for (var s = [], a = 0; a < e.language.length; a++) { var l = e.language[a]; - 1 === s.indexOf(l) && s.push(l) } return e.language = s, e.translations = this._processTranslations(e.language, e.debug), e }, n.prototype.reset = function() {
                    function a(e) { return e.replace(/[^\u0000-\u007E]/g, function(e) { return t[e] || e }) }
                    this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: y.escapeMarkup, language: {}, matcher: function e(t, n) { if ("" === c.trim(t.term)) return n; if (n.children && 0 < n.children.length) { for (var i = c.extend(!0, {}, n), r = n.children.length - 1; 0 <= r; r--) null == e(t, n.children[r]) && i.children.splice(r, 1); return 0 < i.children.length ? i : e(t, i) } var o = a(n.text).toUpperCase(),
                                s = a(t.term).toUpperCase(); return -1 < o.indexOf(s) ? n : null }, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, scrollAfterSelect: !1, sorter: function(e) { return e }, templateResult: function(e) { return e.text }, templateSelection: function(e) { return e.text }, theme: "default", width: "resolve" } }, n.prototype.applyFromElement = function(e, t) { var n = e.language,
                        i = this.defaults.language,
                        r = t.prop("lang"),
                        o = t.closest("[lang]").prop("lang"),
                        s = Array.prototype.concat.call(this._resolveLanguage(r), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(o)); return e.language = s, e }, n.prototype._resolveLanguage = function(e) { if (!e) return []; if (c.isEmptyObject(e)) return []; if (c.isPlainObject(e)) return [e]; var t;
                    t = c.isArray(e) ? e : [e]; for (var n = [], i = 0; i < t.length; i++)
                        if (n.push(t[i]), "string" == typeof t[i] && 0 < t[i].indexOf("-")) { var r = t[i].split("-")[0];
                            n.push(r) }
                    return n }, n.prototype._processTranslations = function(e, t) { for (var n = new s, i = 0; i < e.length; i++) { var r = new s,
                            o = e[i]; if ("string" == typeof o) try { r = s.loadPath(o) } catch (e) { try { o = this.defaults.amdLanguageBase + o, r = s.loadPath(o) } catch (e) { t && window.console && console.warn && console.warn('Select2: The language file for "' + o + '" could not be automatically loaded. A fallback will be used instead.') } } else r = c.isPlainObject(o) ? new s(o) : o;
                        n.extend(r) } return n }, n.prototype.set = function(e, t) { var n = {};
                    n[c.camelCase(e)] = t; var i = y._convertData(n);
                    c.extend(!0, this.defaults, i) }, new n }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(i, d, r, p) {
                function e(e, t) { if (this.options = e, null != t && this.fromElement(t), null != t && (this.options = r.applyFromElement(this.options, t)), this.options = r.apply(this.options), t && t.is("input")) { var n = i(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = p.Decorate(this.options.dataAdapter, n) } } return e.prototype.fromElement = function(e) { var t = ["select2"];
                    null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), p.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), p.StoreData(e[0], "data", p.GetData(e[0], "select2Tags")), p.StoreData(e[0], "tags", !0)), p.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", p.GetData(e[0], "ajaxUrl")), p.StoreData(e[0], "ajax-Url", p.GetData(e[0], "ajaxUrl"))); var n = {};

                    function i(e, t) { return t.toUpperCase() } for (var r = 0; r < e[0].attributes.length; r++) { var o = e[0].attributes[r].name,
                            s = "data-"; if (o.substr(0, s.length) == s) { var a = o.substring(s.length),
                                l = p.GetData(e[0], a);
                            n[a.replace(/-([a-z])/g, i)] = l } }
                    d.fn.jquery && "1." == d.fn.jquery.substr(0, 2) && e[0].dataset && (n = d.extend(!0, {}, e[0].dataset, n)); var c = d.extend(!0, {}, p.GetData(e[0]), n); for (var u in c = p._convertData(c)) - 1 < d.inArray(u, t) || (d.isPlainObject(this.options[u]) ? d.extend(this.options[u], c[u]) : this.options[u] = c[u]); return this }, e.prototype.get = function(e) { return this.options[e] }, e.prototype.set = function(e, t) { this.options[e] = t }, e }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(o, c, u, i) { var d = function(e, t) { null != u.GetData(e[0], "select2") && u.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), t = t || {}, this.options = new c(t, e), d.__super__.constructor.call(this); var n = e.attr("tabindex") || 0;
                    u.StoreData(e[0], "old-tabindex", n), e.attr("tabindex", "-1"); var i = this.options.get("dataAdapter");
                    this.dataAdapter = new i(e, this.options); var r = this.render();
                    this._placeContainer(r); var o = this.options.get("selectionAdapter");
                    this.selection = new o(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, r); var s = this.options.get("dropdownAdapter");
                    this.dropdown = new s(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, r); var a = this.options.get("resultsAdapter");
                    this.results = new a(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown); var l = this;
                    this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(e) { l.trigger("selection:update", { data: e }) }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), u.StoreData(e[0], "select2", this), e.data("select2", this) }; return u.Extend(d, u.Observable), d.prototype._generateId = function(e) { return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + u.generateChars(2) : u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "") }, d.prototype._placeContainer = function(e) { e.insertAfter(this.$element); var t = this._resolveWidth(this.$element, this.options.get("width"));
                    null != t && e.css("width", t) }, d.prototype._resolveWidth = function(e, t) { var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i; if ("resolve" == t) { var i = this._resolveWidth(e, "style"); return null != i ? i : this._resolveWidth(e, "element") } if ("element" == t) { var r = e.outerWidth(!1); return r <= 0 ? "auto" : r + "px" } if ("style" != t) return "computedstyle" != t ? t : window.getComputedStyle(e[0]).width; var o = e.attr("style"); if ("string" != typeof o) return null; for (var s = o.split(";"), a = 0, l = s.length; a < l; a += 1) { var c = s[a].replace(/\s/g, "").match(n); if (null !== c && 1 <= c.length) return c[1] } return null }, d.prototype._bindAdapters = function() { this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container) }, d.prototype._registerDomEvents = function() { var t = this;
                    this.$element.on("change.select2", function() { t.dataAdapter.current(function(e) { t.trigger("selection:update", { data: e }) }) }), this.$element.on("focus.select2", function(e) { t.trigger("focus", e) }), this._syncA = u.bind(this._syncAttributes, this), this._syncS = u.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA); var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    null != e ? (this._observer = new e(function(e) { t._syncA(), t._syncS(null, e) }), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1)) }, d.prototype._registerDataEvents = function() { var n = this;
                    this.dataAdapter.on("*", function(e, t) { n.trigger(e, t) }) }, d.prototype._registerSelectionEvents = function() { var n = this,
                        i = ["toggle", "focus"];
                    this.selection.on("toggle", function() { n.toggleDropdown() }), this.selection.on("focus", function(e) { n.focus(e) }), this.selection.on("*", function(e, t) {-1 === o.inArray(e, i) && n.trigger(e, t) }) }, d.prototype._registerDropdownEvents = function() { var n = this;
                    this.dropdown.on("*", function(e, t) { n.trigger(e, t) }) }, d.prototype._registerResultsEvents = function() { var n = this;
                    this.results.on("*", function(e, t) { n.trigger(e, t) }) }, d.prototype._registerEvents = function() { var n = this;
                    this.on("open", function() { n.$container.addClass("select2-container--open") }), this.on("close", function() { n.$container.removeClass("select2-container--open") }), this.on("enable", function() { n.$container.removeClass("select2-container--disabled") }), this.on("disable", function() { n.$container.addClass("select2-container--disabled") }), this.on("blur", function() { n.$container.removeClass("select2-container--focus") }), this.on("query", function(t) { n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(t, function(e) { n.trigger("results:all", { data: e, query: t }) }) }), this.on("query:append", function(t) { this.dataAdapter.query(t, function(e) { n.trigger("results:append", { data: e, query: t }) }) }), this.on("keypress", function(e) { var t = e.which;
                        n.isOpen() ? t === i.ESC || t === i.TAB || t === i.UP && e.altKey ? (n.close(e), e.preventDefault()) : t === i.ENTER ? (n.trigger("results:select", {}), e.preventDefault()) : t === i.SPACE && e.ctrlKey ? (n.trigger("results:toggle", {}), e.preventDefault()) : t === i.UP ? (n.trigger("results:previous", {}), e.preventDefault()) : t === i.DOWN && (n.trigger("results:next", {}), e.preventDefault()) : (t === i.ENTER || t === i.SPACE || t === i.DOWN && e.altKey) && (n.open(), e.preventDefault()) }) }, d.prototype._syncAttributes = function() { this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {}) }, d.prototype._isChangeMutation = function(e, t) { var n = !1,
                        i = this; if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) { if (t)
                            if (t.addedNodes && 0 < t.addedNodes.length)
                                for (var r = 0; r < t.addedNodes.length; r++) { t.addedNodes[r].selected && (n = !0) } else t.removedNodes && 0 < t.removedNodes.length ? n = !0 : o.isArray(t) && o.each(t, function(e, t) { if (i._isChangeMutation(e, t)) return !(n = !0) });
                            else n = !0;
                        return n } }, d.prototype._syncSubtree = function(e, t) { var n = this._isChangeMutation(e, t),
                        i = this;
                    n && this.dataAdapter.current(function(e) { i.trigger("selection:update", { data: e }) }) }, d.prototype.trigger = function(e, t) { var n = d.__super__.trigger,
                        i = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting", clear: "clearing" }; if (void 0 === t && (t = {}), e in i) { var r = i[e],
                            o = { prevented: !1, name: e, args: t }; if (n.call(this, r, o), o.prevented) return void(t.prevented = !0) }
                    n.call(this, e, t) }, d.prototype.toggleDropdown = function() { this.isDisabled() || (this.isOpen() ? this.close() : this.open()) }, d.prototype.open = function() { this.isOpen() || this.isDisabled() || this.trigger("query", {}) }, d.prototype.close = function(e) { this.isOpen() && this.trigger("close", { originalEvent: e }) }, d.prototype.isEnabled = function() { return !this.isDisabled() }, d.prototype.isDisabled = function() { return this.options.get("disabled") }, d.prototype.isOpen = function() { return this.$container.hasClass("select2-container--open") }, d.prototype.hasFocus = function() { return this.$container.hasClass("select2-container--focus") }, d.prototype.focus = function(e) { this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {})) }, d.prototype.enable = function(e) { this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]); var t = !e[0];
                    this.$element.prop("disabled", t) }, d.prototype.data = function() { this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'); var t = []; return this.dataAdapter.current(function(e) { t = e }), t }, d.prototype.val = function(e) { if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val(); var t = e[0];
                    o.isArray(t) && (t = o.map(t, function(e) { return e.toString() })), this.$element.val(t).trigger("input").trigger("change") }, d.prototype.destroy = function() { this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", u.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), u.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null }, d.prototype.render = function() { var e = o('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'); return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), u.StoreData(e[0], "element", this.$element), e }, d }), e.define("select2/compat/utils", ["jquery"], function(s) { return { syncCssClasses: function(e, t, n) { var i, r, o = [];
                        (i = s.trim(e.attr("class"))) && s((i = "" + i).split(/\s+/)).each(function() { 0 === this.indexOf("select2-") && o.push(this) }), (i = s.trim(t.attr("class"))) && s((i = "" + i).split(/\s+/)).each(function() { 0 !== this.indexOf("select2-") && null != (r = n(this)) && o.push(r) }), e.attr("class", o.join(" ")) } } }), e.define("select2/compat/containerCss", ["jquery", "./utils"], function(s, a) {
                function l(e) { return null }

                function e() {} return e.prototype.render = function(e) { var t = e.call(this),
                        n = this.options.get("containerCssClass") || "";
                    s.isFunction(n) && (n = n(this.$element)); var i = this.options.get("adaptContainerCssClass"); if (i = i || l, -1 !== n.indexOf(":all:")) { n = n.replace(":all:", ""); var r = i;
                        i = function(e) { var t = r(e); return null != t ? t + " " + e : e } } var o = this.options.get("containerCss") || {}; return s.isFunction(o) && (o = o(this.$element)), a.syncCssClasses(t, this.$element, i), t.css(o), t.addClass(n), t }, e }), e.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(s, a) {
                function l(e) { return null }

                function e() {} return e.prototype.render = function(e) { var t = e.call(this),
                        n = this.options.get("dropdownCssClass") || "";
                    s.isFunction(n) && (n = n(this.$element)); var i = this.options.get("adaptDropdownCssClass"); if (i = i || l, -1 !== n.indexOf(":all:")) { n = n.replace(":all:", ""); var r = i;
                        i = function(e) { var t = r(e); return null != t ? t + " " + e : e } } var o = this.options.get("dropdownCss") || {}; return s.isFunction(o) && (o = o(this.$element)), a.syncCssClasses(t, this.$element, i), t.css(o), t.addClass(n), t }, e }), e.define("select2/compat/initSelection", ["jquery"], function(i) {
                function e(e, t, n) { n.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = n.get("initSelection"), this._isInitialized = !1, e.call(this, t, n) } return e.prototype.current = function(e, t) { var n = this;
                    this._isInitialized ? e.call(this, t) : this.initSelection.call(null, this.$element, function(e) { n._isInitialized = !0, i.isArray(e) || (e = [e]), t(e) }) }, e }), e.define("select2/compat/inputData", ["jquery", "../utils"], function(s, i) {
                function e(e, t, n) { this._currentData = [], this._valueSeparator = n.get("valueSeparator") || ",", "hidden" === t.prop("type") && n.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), e.call(this, t, n) } return e.prototype.current = function(e, t) {
                    function i(e, t) { var n = []; return e.selected || -1 !== s.inArray(e.id, t) ? (e.selected = !0, n.push(e)) : e.selected = !1, e.children && n.push.apply(n, i(e.children, t)), n } for (var n = [], r = 0; r < this._currentData.length; r++) { var o = this._currentData[r];
                        n.push.apply(n, i(o, this.$element.val().split(this._valueSeparator))) }
                    t(n) }, e.prototype.select = function(e, t) { if (this.options.get("multiple")) { var n = this.$element.val();
                        n += this._valueSeparator + t.id, this.$element.val(n), this.$element.trigger("input").trigger("change") } else this.current(function(e) { s.map(e, function(e) { e.selected = !1 }) }), this.$element.val(t.id), this.$element.trigger("input").trigger("change") }, e.prototype.unselect = function(e, r) { var o = this;
                    r.selected = !1, this.current(function(e) { for (var t = [], n = 0; n < e.length; n++) { var i = e[n];
                            r.id != i.id && t.push(i.id) }
                        o.$element.val(t.join(o._valueSeparator)), o.$element.trigger("input").trigger("change") }) }, e.prototype.query = function(e, t, n) { for (var i = [], r = 0; r < this._currentData.length; r++) { var o = this._currentData[r],
                            s = this.matches(t, o);
                        null !== s && i.push(s) }
                    n({ results: i }) }, e.prototype.addOptions = function(e, t) { var n = s.map(t, function(e) { return i.GetData(e[0], "data") });
                    this._currentData.push.apply(this._currentData, n) }, e }), e.define("select2/compat/matcher", ["jquery"], function(s) { return function(o) { return function(e, t) { var n = s.extend(!0, {}, t); if (null == e.term || "" === s.trim(e.term)) return n; if (t.children) { for (var i = t.children.length - 1; 0 <= i; i--) { var r = t.children[i];
                                o(e.term, r.text, r) || n.children.splice(i, 1) } if (0 < n.children.length) return n } return o(e.term, t.text, t) ? n : null } } }), e.define("select2/compat/query", [], function() {
                function e(e, t, n) { n.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), e.call(this, t, n) } return e.prototype.query = function(e, t, n) { t.callback = n, this.options.get("query").call(null, t) }, e }), e.define("select2/dropdown/attachContainer", [], function() {
                function e(e, t, n) { e.call(this, t, n) } return e.prototype.position = function(e, t, n) { n.find(".dropdown-wrapper").append(t), t.addClass("select2-dropdown--below"), n.addClass("select2-container--below") }, e }), e.define("select2/dropdown/stopPropagation", [], function() {
                function e() {} return e.prototype.bind = function(e, t, n) { e.call(this, t, n);
                    this.$dropdown.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), function(e) { e.stopPropagation() }) }, e }), e.define("select2/selection/stopPropagation", [], function() {
                function e() {} return e.prototype.bind = function(e, t, n) { e.call(this, t, n);
                    this.$selection.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), function(e) { e.stopPropagation() }) }, e }), l = function(p) { var h, f, e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                    t = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                    g = Array.prototype.slice; if (p.event.fixHooks)
                    for (var n = e.length; n;) p.event.fixHooks[e[--n]] = p.event.mouseHooks; var m = p.event.special.mousewheel = { version: "3.1.12", setup: function() { if (this.addEventListener)
                            for (var e = t.length; e;) this.addEventListener(t[--e], i, !1);
                        else this.onmousewheel = i;
                        p.data(this, "mousewheel-line-height", m.getLineHeight(this)), p.data(this, "mousewheel-page-height", m.getPageHeight(this)) }, teardown: function() { if (this.removeEventListener)
                            for (var e = t.length; e;) this.removeEventListener(t[--e], i, !1);
                        else this.onmousewheel = null;
                        p.removeData(this, "mousewheel-line-height"), p.removeData(this, "mousewheel-page-height") }, getLineHeight: function(e) { var t = p(e),
                            n = t["offsetParent" in p.fn ? "offsetParent" : "parent"](); return n.length || (n = p("body")), parseInt(n.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16 }, getPageHeight: function(e) { return p(e).height() }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } };

                function i(e) { var t, n = e || window.event,
                        i = g.call(arguments, 1),
                        r = 0,
                        o = 0,
                        s = 0,
                        a = 0,
                        l = 0; if ((e = p.event.fix(n)).type = "mousewheel", "detail" in n && (s = -1 * n.detail), "wheelDelta" in n && (s = n.wheelDelta), "wheelDeltaY" in n && (s = n.wheelDeltaY), "wheelDeltaX" in n && (o = -1 * n.wheelDeltaX), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (o = -1 * s, s = 0), r = 0 === s ? o : s, "deltaY" in n && (r = s = -1 * n.deltaY), "deltaX" in n && (o = n.deltaX, 0 === s && (r = -1 * o)), 0 !== s || 0 !== o) { if (1 === n.deltaMode) { var c = p.data(this, "mousewheel-line-height");
                            r *= c, s *= c, o *= c } else if (2 === n.deltaMode) { var u = p.data(this, "mousewheel-page-height");
                            r *= u, s *= u, o *= u } if (t = Math.max(Math.abs(s), Math.abs(o)), (!f || t < f) && y(n, f = t) && (f /= 40), y(n, t) && (r /= 40, o /= 40, s /= 40), r = Math[1 <= r ? "floor" : "ceil"](r / f), o = Math[1 <= o ? "floor" : "ceil"](o / f), s = Math[1 <= s ? "floor" : "ceil"](s / f), m.settings.normalizeOffset && this.getBoundingClientRect) { var d = this.getBoundingClientRect();
                            a = e.clientX - d.left, l = e.clientY - d.top } return e.deltaX = o, e.deltaY = s, e.deltaFactor = f, e.offsetX = a, e.offsetY = l, e.deltaMode = 0, i.unshift(e, r, o, s), h && clearTimeout(h), h = setTimeout(v, 200), (p.event.dispatch || p.event.handle).apply(this, i) } }

                function v() { f = null }

                function y(e, t) { return m.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0 }
                p.fn.extend({ mousewheel: function(e) { return e ? this.bind("mousewheel", e) : this.trigger("mousewheel") }, unmousewheel: function(e) { return this.unbind("mousewheel", e) } }) }, "function" == typeof e.define && e.define.amd ? e.define("jquery-mousewheel", ["jquery"], l) : "object" == typeof exports ? module.exports = l : l(d), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function(r, e, o, t, s) { if (null == r.fn.select2) { var a = ["open", "close", "destroy"];
                    r.fn.select2 = function(t) { if ("object" == typeof(t = t || {})) return this.each(function() { var e = r.extend(!0, {}, t);
                            new o(r(this), e) }), this; if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t); var n, i = Array.prototype.slice.call(arguments, 1); return this.each(function() { var e = s.GetData(this, "select2");
                            null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), n = e[t].apply(e, i) }), -1 < r.inArray(t, a) ? this : n } } return null == r.fn.select2.defaults && (r.fn.select2.defaults = t), o }), { define: e.define, require: e.require } }(),
        t = e.require("jquery.select2"); return d.fn.select2.amd = e, t });;
(function($) {
    var S2MultiCheckboxes = function(options, element) {
        var self = this;
        self.options = options;
        self.$element = $(element);
        var values = self.$element.val();
        self.$element.removeAttr('multiple');
        self.select2 = self.$element.select2({
            allowClear: true,
            minimumResultsForSearch: options.minimumResultsForSearch,
            placeholder: options.placeholder,
            closeOnSelect: false,
            templateSelection: function() { return self.options.templateSelection(self.$element.val() || [], $('option', self.$element).length); },
            templateResult: function(result) {
                if (result.loading !== undefined)
                    return result.text;
                return $('<div>').text(result.text).addClass(self.options.wrapClass);
            },
            matcher: function(params, data) {
                var original_matcher = $.fn.select2.defaults.defaults.matcher;
                var result = original_matcher(params, data);
                if (result && self.options.searchMatchOptGroups && data.children && result.children && data.children.length != result.children.length) { result.children = data.children; }
                return result;
            },
            dropdownAdapter: options.selectAll ? $.fn.select2.amd.require('select2/selectAllAdapter') : null,
        }).data('select2');
        self.select2.$results.off("mouseup").on("mouseup", ".select2-results__option[aria-selected]", (function(self) {
            return function(evt) {
                var $this = $(this);
                const Utils = $.fn.select2.amd.require('select2/utils')
                var data = Utils.GetData(this, 'data');
                if ($this.attr('aria-selected') === 'true') { self.trigger('unselect', { originalEvent: evt, data: data }); return; }
                self.trigger('select', { originalEvent: evt, data: data });
            }
        })(self.select2));
        self.$element.attr('multiple', 'multiple').val(values).trigger('change.select2');
    }
    $.fn.extend({ select2MultiCheckboxes: function() { var options = $.extend({ placeholder: 'Choose elements', templateSelection: function(selected, total) { return selected.length + ' > ' + total + ' total'; }, wrapClass: 'wrap', minimumResultsForSearch: -1, searchMatchOptGroups: true, selectAll: true, }, arguments[0]);
            this.each(function() { new S2MultiCheckboxes(options, this); }); } });
    $.fn.select2.amd.define('select2/selectAllAdapter', ['select2/utils', 'select2/dropdown', 'select2/dropdown/attachBody', 'select2/dropdown/attachContainer', 'select2/dropdown/search', ], function(Utils, Dropdown, AttachBody, AttachContainer, Search) {
        function SelectAll() {}
        SelectAll.prototype.render = function(decorated) {
            var $rendered = decorated.call(this);
            var self = this;
            var $selectAll = $('<input type="checkbox" class="btn btn-light" data-toggle="tooltip" title="Chọn tất cả" style="margin-right: .65rem;margin-left: .1rem"/>');
            var checkOptionsCount = function() { var count = $('.select2-results__option').length;
                $selectAll.text('Chọn tất cả (' + count + ')'); }
            var $container = $('.select2-container');
            $container.bind('keyup click', checkOptionsCount);
            var $dropdown = $rendered.find('.select2-search--dropdown')
            $dropdown.prepend($selectAll);
            $selectAll.on('click', function(e) { var $results = $rendered.find('.select2-results__option'); const Utils = $.fn.select2.amd.require('select2/utils');
                $results.each(function() { if ($selectAll.is(':checked')) { self.trigger('select', { data: Utils.GetData(this, 'data') }); } else { self.trigger('unselect', { data: Utils.GetData(this, 'data') }); } }); });
            if ($rendered.find('.select2-search__field')) { $rendered.find('.select2-search__field').addClass('inputCheckAll'); }
            return $rendered;
        };
        let adapter = Utils.Decorate(Utils.Decorate(Dropdown, Search), AttachBody, AttachContainer);
        adapter = Utils.Decorate(adapter, SelectAll);
        return adapter
    });
})(jQuery);;
! function(s) {
    var i = {};

    function o(t) { if (i[t]) return i[t].exports; var e = i[t] = { i: t, l: !1, exports: {} }; return s[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports }
    o.m = s, o.c = i, o.d = function(t, e, s) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(e, t) { if (1 & t && (e = o(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var s = Object.create(null); if (o.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var i in e) o.d(s, i, function(t) { return e[t] }.bind(null, i)); return s }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 0)
}([function(t, e, s) {
    "use strict";
    s.r(e), s.d(e, "AutoComplete", function() { return d });
    var i, o, n, r = (i = function(t, e) { return (i = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]) })(t, e) }, function(t, e) {
            function s() { this.constructor = t }
            i(t, e), t.prototype = null === e ? Object.create(e) : (s.prototype = e.prototype, new s)
        }),
        l = (_.prototype.getDefaults = function() { return {} }, _.prototype.getResults = function(t, e, s) { return this.results }, _.prototype.search = function(t, e) { e(this.getResults()) }, r(p, o = _), p.prototype.getDefaults = function() { return { url: "", method: "get", queryKey: "q", extraData: {}, timeout: void 0, requestThrottling: 500 } }, p.prototype.search = function(t, e) { var s = this;
            null != this.jqXHR && this.jqXHR.abort(); var i = {};
            i[this._settings.queryKey] = t, $.extend(i, this._settings.extraData), this.requestTID && window.clearTimeout(this.requestTID), this.requestTID = window.setTimeout(function() { s.jqXHR = $.ajax(s._settings.url, { method: s._settings.method, data: i, timeout: s._settings.timeout }), s.jqXHR.done(function(t) { e(t) }), s.jqXHR.fail(function(t) { var e;
                    null === (e = s._settings) || void 0 === e || e.fail(t) }), s.jqXHR.always(function() { s.jqXHR = null }) }, this._settings.requestThrottling) }, p),
        a = (f.prototype.init = function() {
            var s = this,
                t = $.extend({}, this._$el.position(), { height: this._$el[0].offsetHeight });
            this._dd = $("<ul />"), this._dd.addClass("bootstrap-autocomplete dropdown-menu"), this._dd.insertAfter(this._$el), this._dd.css({ top: t.top + this._$el.outerHeight(), left: t.left, width: this._$el.outerWidth() }), this._dd.on("click", "li", function(t) { var e = $(t.currentTarget).data("item");
                s.itemSelectedLaunchEvent(e) }), this._dd.on("keyup", function(t) {
                if (s.shown) {
                    switch (t.which) {
                        case 27:
                            s.hide(), s._$el.focus() }
                    return !1
                }
            }), this._dd.on("mouseenter", function(t) { s.ddMouseover = !0 }), this._dd.on("mouseleave", function(t) { s.ddMouseover = !1 }), this._dd.on("mouseenter", "li", function(t) { s.haveResults && ($(t.currentTarget).closest("ul").find("li.active").removeClass("active"), $(t.currentTarget).addClass("active"), s.mouseover = !0) }), this._dd.on("mouseleave", "li", function(t) { s.mouseover = !1 }), this.initialized = !0
        }, f.prototype.checkInitialized = function() { this.initialized || this.init() }, Object.defineProperty(f.prototype, "isMouseOver", { get: function() { return this.mouseover }, enumerable: !1, configurable: !0 }), Object.defineProperty(f.prototype, "isDdMouseOver", { get: function() { return this.ddMouseover }, enumerable: !1, configurable: !0 }), Object.defineProperty(f.prototype, "haveResults", { get: function() { return 0 < this.items.length }, enumerable: !1, configurable: !0 }), f.prototype.focusNextItem = function(t) { var e, s;
            this.haveResults && (e = this._dd.find("li.active"), 0 === (s = t ? e.prev() : e.next()).length && (s = t ? this._dd.find("li").last() : this._dd.find("li").first()), e.removeClass("active"), s.addClass("active")) }, f.prototype.focusPreviousItem = function() { this.focusNextItem(!0) }, f.prototype.selectFocusItem = function() { this._dd.find("li.active").trigger("click") }, Object.defineProperty(f.prototype, "isItemFocused", { get: function() { return !!(this.isShown() && 0 < this._dd.find("li.active").length) }, enumerable: !1, configurable: !0 }), f.prototype.show = function() { this.shown || (this._dd.dropdown().show(), this.shown = !0) }, f.prototype.isShown = function() { return this.shown }, f.prototype.hide = function() { this.shown && (this._dd.dropdown().hide(), this.shown = !1) }, f.prototype.updateItems = function(t, e) { this.items = t, this.searchText = e, this.refreshItemList() }, f.prototype.showMatchedText = function(t, e) {
            var s = t.toLowerCase().indexOf(e.toLowerCase());
            if (-1 < s) { var i = s + e.length; return t.slice(0, s) + "<b>" + t.slice(s, i) + "</b>" + t.slice(i) }
            return t
        }, f.prototype.refreshItemList = function() { var r = this;
            this.checkInitialized(), this._dd.empty(); var t, l = [];
            0 < this.items.length ? this.items.forEach(function(t) { var e, s, i = r.formatItem(t); "string" == typeof i && (i = { text: i }), e = r.showMatchedText(i.text, r.searchText), s = void 0 !== i.html ? i.html : e; var o = i.disabled,
                    n = $("<li >");
                n.append($("<a>").attr("href", "#!").html(s)).data("item", t), o && n.addClass("disabled"), l.push(n) }) : ((t = $("<li >")).append($("<a>").attr("href", "#!").html(this.noResultsText)).addClass("disabled"), l.push(t)), this._dd.append(l) }, f.prototype.itemSelectedLaunchEvent = function(t) { this._$el.trigger("autocomplete.select", t) }, f),
        h = (c.prototype.getElPos = function() { return $.extend({}, this._$el.position(), { height: this._$el[0].offsetHeight }) }, c.prototype.init = function() {
            var s = this,
                t = this.getElPos();
            this._dd = $("<div />"), this._dd.addClass("bootstrap-autocomplete dropdown-menu"), this._dd.insertAfter(this._$el), this._dd.css({ top: t.top + this._$el.outerHeight(), left: t.left, width: this._$el.outerWidth() }), this._dd.on("click", ".dropdown-item", function(t) { var e = $(t.currentTarget).data("item");
                s.itemSelectedLaunchEvent(e), t.preventDefault() }), this._dd.on("keyup", function(t) {
                if (s.shown) {
                    switch (t.which) {
                        case 27:
                            s.hide(), s._$el.focus() }
                    return !1
                }
            }), this._dd.on("mouseenter", function(t) { s.ddMouseover = !0 }), this._dd.on("mouseleave", function(t) { s.ddMouseover = !1 }), this._dd.on("mouseenter", ".dropdown-item", function(t) { s.haveResults && ($(t.currentTarget).closest("div").find(".dropdown-item.active").removeClass("active"), $(t.currentTarget).addClass("active"), s.mouseover = !0) }), this._dd.on("mouseleave", ".dropdown-item", function(t) { s.mouseover = !1 }), this.initialized = !0
        }, c.prototype.checkInitialized = function() { this.initialized || this.init() }, Object.defineProperty(c.prototype, "isMouseOver", { get: function() { return this.mouseover }, enumerable: !1, configurable: !0 }), Object.defineProperty(c.prototype, "isDdMouseOver", { get: function() { return this.ddMouseover }, enumerable: !1, configurable: !0 }), Object.defineProperty(c.prototype, "haveResults", { get: function() { return 0 < this.items.length }, enumerable: !1, configurable: !0 }), c.prototype.focusNextItem = function(t) { var e, s;
            this.haveResults && (e = this._dd.find(".dropdown-item.active"), 0 === (s = t ? e.prev() : e.next()).length && (s = t ? this._dd.find(".dropdown-item").last() : this._dd.find(".dropdown-item").first()), e.removeClass("active"), s.addClass("active")) }, c.prototype.focusPreviousItem = function() { this.focusNextItem(!0) }, c.prototype.selectFocusItem = function() { this._dd.find(".dropdown-item.active").trigger("click") }, Object.defineProperty(c.prototype, "isItemFocused", { get: function() { return !!(this._dd && this.isShown() && 0 < this._dd.find(".dropdown-item.active").length) }, enumerable: !1, configurable: !0 }), c.prototype.show = function() { this.shown || (this.getElPos(), this._dd.addClass("show"), this.shown = !0, this._$el.trigger("autocomplete.dd.shown")) }, c.prototype.isShown = function() { return this.shown }, c.prototype.hide = function() { this.shown && (this._dd.removeClass("show"), this.shown = !1, this._$el.trigger("autocomplete.dd.hidden")) }, c.prototype.updateItems = function(t, e) { this.items = t, this.searchText = e, this.refreshItemList() }, c.prototype.showMatchedText = function(t, e) {
            var s = t.toLowerCase().indexOf(e.toLowerCase());
            if (-1 < s) { var i = s + e.length; var textFirst = t.slice(0, s),
                    textLast = t.slice(i); return (textFirst ? textFirst.replace(/ ([^ ]*)$/, '&nbsp;') : '') + "<b>" + t.slice(s, i) + "</b>" + (textLast ? textLast.replace(' ', '&nbsp;') : ''); }
            return t;
        }, c.prototype.refreshItemList = function() { var r = this;
            this.checkInitialized(), this._dd.empty(); var t, l = [];
            0 < this.items.length ? (this.items.forEach(function(t) { var e, s, i = r.formatItem(t); "string" == typeof i && (i = { text: i }), e = r.showMatchedText(i.text, r.searchText), s = void 0 !== i.html ? i.html : e; var o = i.disabled,
                    n = $("<a >");
                n.addClass("dropdown-item").css({ overflow: "hidden", "text-overflow": "ellipsis" }).html(s).data("item", t), o && n.addClass("disabled"), l.push(n) }), this._dd.append(l), this.show()) : "" === this.noResultsText ? this.hide() : ((t = $("<a >")).addClass("dropdown-item disabled").html(this.noResultsText), l.push(t), this._dd.append(l), this.show()) }, c.prototype.itemSelectedLaunchEvent = function(t) { this._$el.trigger("autocomplete.select", t) }, c),
        d = (u.prototype.manageInlineDataAttributes = function() { var t = this.getSettings();
            this._$el.data("url") && (t.resolverSettings.url = this._$el.data("url")), this._$el.data("default-value") && (this._defaultValue = this._$el.data("default-value")), this._$el.data("default-text") && (this._defaultText = this._$el.data("default-text")), void 0 !== this._$el.data("noresults-text") && (t.noResultsText = this._$el.data("noresults-text")) }, u.prototype.getSettings = function() { return this._settings }, u.prototype.getBootstrapVersion = function() { var t = "auto" === this._settings.bootstrapVersion ? $.fn.button.Constructor.VERSION.split(".").map(parseInt) : "4" === this._settings.bootstrapVersion ? [4] : "3" === this._settings.bootstrapVersion ? [3] : (console.error("INVALID value for 'bootstrapVersion' settings property: " + this._settings.bootstrapVersion + " defaulting to 4"), [4]); return t }, u.prototype.convertSelectToText = function() { var t = $("<input>");
            t.attr("type", "hidden"), t.attr("name", this._$el.attr("name")), this._defaultValue && t.val(this._defaultValue), (this._selectHiddenField = t).insertAfter(this._$el); var e = $("<input>");
            e.attr("type", "search"), e.attr("name", this._$el.attr("name") + "_text"), e.attr("id", this._$el.attr("id")), e.attr("disabled", this._$el.attr("disabled")), e.attr("placeholder", this._$el.attr("placeholder")), e.attr("autocomplete", "off"), e.addClass(this._$el.attr("class")), this._defaultText && e.val(this._defaultText); var s = this._$el.attr("required");
            s && e.attr("required", s), e.data(u.NAME, this), this._$el.replaceWith(e), this._$el = e, this._el = e.get(0) }, u.prototype.init = function() { this.bindDefaultEventListeners(), "ajax" === this._settings.resolver && (this.resolver = new l(this._settings.resolverSettings)), 4 === this.getBootstrapVersion()[0] ? this._dd = new h(this._$el, this._settings.formatResult, this._settings.autoSelect, this._settings.noResultsText) : this._dd = new a(this._$el, this._settings.formatResult, this._settings.autoSelect, this._settings.noResultsText) }, u.prototype.bindDefaultEventListeners = function() { var s = this; var timer;
            this._$el.on("keydown", function(t) { switch (t.which) {
                    case 9:
                        s._dd.isItemFocused ? s._dd.selectFocusItem() : s._selectedItem || "" !== s._$el.val() && s._$el.trigger("autocomplete.freevalue", s._$el.val()), s._dd.hide(); break;
                    case 13:
                        s._dd.isItemFocused ? s._dd.selectFocusItem() : s._selectedItem || "" !== s._$el.val() && s._$el.trigger("autocomplete.freevalue", s._$el.val()), s._dd.hide(), s._settings.preventEnter && t.preventDefault(); break;
                    case 40:
                        s._dd.focusNextItem(); break;
                    case 38:
                        s._dd.focusPreviousItem() } }), this._$el.on("keyup", function(t) { switch (t.which) {
                    case 16:
                    case 17:
                    case 18:
                    case 39:
                    case 37:
                    case 36:
                    case 35:
                        break;
                    case 13:
                    case 27:
                        s._dd.hide(); break;
                    case 40:
                    case 38:
                        break;
                    default:
                        clearTimeout(timer);
                        timer = setTimeout(function() { s._selectedItem = null; var e = s._$el.val();
                            s.handlerTyped(e) }, 400) } }), this._$el.on("blur", function(t) {!s._dd.isMouseOver && s._dd.isDdMouseOver && s._dd.isShown() ? (setTimeout(function() { s._$el.focus() }), s._$el.focus()) : s._dd.isMouseOver || (s._isSelectElement ? s._dd.isItemFocused ? s._dd.selectFocusItem() : (null !== s._selectedItem && "" !== s._$el.val() || ("" !== s._$el.val() && null !== s._defaultValue ? (s._$el.val(s._defaultText), s._selectHiddenField.val(s._defaultValue)) : (s._$el.val(""), s._selectHiddenField.val("")), s._selectedItem = null), s._$el.trigger("autocomplete.select", s._selectedItem)) : null === s._selectedItem && s._$el.trigger("autocomplete.freevalue", s._$el.val()), s._dd.hide()) }), this._$el.on("autocomplete.select", function(t, e) { s._selectedItem = e, s.itemSelectedDefaultHandler(e) }), this._$el.on("paste", function(t) { setTimeout(function() { s._$el.trigger("keyup", t) }, 0) }) }, u.prototype.handlerTyped = function(t) { null !== this._settings.events.typed && !(t = this._settings.events.typed(t, this._$el)) || (t.length >= this._settings.minLength ? (this._searchText = t, this.handlerPreSearch()) : this._dd.hide()) }, u.prototype.handlerPreSearch = function() {
            if (null !== this._settings.events.searchPre) { var t = this._settings.events.searchPre(this._searchText, this._$el); if (!t) return;
                this._searchText = t }
            this.handlerDoSearch()
        }, u.prototype.handlerDoSearch = function() { var e = this;
            null !== this._settings.events.search ? this._settings.events.search(this._searchText, function(t) { e.postSearchCallback(t) }, this._$el) : this.resolver && this.resolver.search(this._searchText, function(t) { e.postSearchCallback(t) }) }, u.prototype.postSearchCallback = function(t) {
            if (!this._$el.is(":focus")) { return; }
            this._settings.events.searchPost && "boolean" == typeof(t = this._settings.events.searchPost(t, this._$el)) && !t || this.handlerStartShow(t)
        }, u.prototype.handlerStartShow = function(t) { this._dd.updateItems(t, this._searchText) }, u.prototype.itemSelectedDefaultHandler = function(t) { var e;
            null != t ? ("string" == typeof(e = this._settings.formatResult(t)) && (e = { text: e }), this._$el.val(e.text), this._isSelectElement && this._selectHiddenField.val(e.value)) : (this._$el.val(""), this._isSelectElement && this._selectHiddenField.val("")), this._selectedItem = t, this._dd.hide() }, u.prototype.defaultFormatResult = function(t) { return "string" == typeof t ? { text: t } : t.text ? t : { text: t.toString() } }, u.prototype.manageAPI = function(t, e) { "set" === t ? this.itemSelectedDefaultHandler(e) : "clear" === t ? this.itemSelectedDefaultHandler(null) : "show" === t ? this._$el.trigger("keyup") : "updateResolver" === t && (this.resolver = new l(e)) }, u.NAME = "autoComplete", u);

    function u(t, e) { this._selectedItem = null, this._defaultValue = null, this._defaultText = null, this._isSelectElement = !1, this._settings = { resolver: "ajax", resolverSettings: {}, minLength: 3, valueKey: "value", formatResult: this.defaultFormatResult, autoSelect: !0, noResultsText: "No results", bootstrapVersion: "auto", preventEnter: !1, events: { typed: null, searchPre: null, search: null, searchPost: null, select: null, focus: null } }, this._el = t, this._$el = $(this._el), this._$el.is("select") && (this._isSelectElement = !0), this.manageInlineDataAttributes(), "object" == typeof e && (this._settings = $.extend(!0, {}, this.getSettings(), e)), this._isSelectElement && this.convertSelectToText(), this.init() }

    function c(t, e, s, i) { this.initialized = !1, this.shown = !1, this.items = [], this.ddMouseover = !1, this._$el = t, this.formatItem = e, this.autoSelect = s, this.noResultsText = i }

    function f(t, e, s, i) { this.initialized = !1, this.shown = !1, this.items = [], this.ddMouseover = !1, this._$el = t, this.formatItem = e, this.autoSelect = s, this.noResultsText = i }

    function p(t) { return o.call(this, t) || this }

    function _(t) { this._settings = $.extend(!0, {}, this.getDefaults(), t) }
    n = jQuery, window, document, n.fn[d.NAME] = function(e, s) { return this.each(function() { var t;
            (t = n(this).data(d.NAME)) || (t = new d(this, e), n(this).data(d.NAME, t)), t.manageAPI(e, s) }) }
}]);;
! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AutoNumeric = t() : e.AutoNumeric = t() }(window, function() { return function(i) { var n = {};

        function a(e) { if (n[e]) return n[e].exports; var t = n[e] = { i: e, l: !1, exports: {} }; return i[e].call(t.exports, t, t.exports, a), t.l = !0, t.exports } return a.m = i, a.c = n, a.d = function(e, t, i) { a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i }) }, a.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, a.t = function(t, e) { if (1 & e && (t = a(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var i = Object.create(null); if (a.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                for (var n in t) a.d(i, n, function(e) { return t[e] }.bind(null, n)); return i }, a.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return a.d(t, "a", t), t }, a.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, a.p = "", a(a.s = 4) }([function(e, t, i) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var S = function(e, t) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return function(e, t) { var i = [],
                        n = !0,
                        a = !1,
                        r = void 0; try { for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), !t || i.length !== t); n = !0); } catch (e) { a = !0, r = e } finally { try {!n && o.return && o.return() } finally { if (a) throw r } } return i }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance") },
            y = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var i = arguments[t]; for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]) } return e },
            b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
            n = function() {
                function n(e, t) { for (var i = 0; i < t.length; i++) { var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function(e, t, i) { return t && n(e.prototype, t), i && n(e, i), e } }(),
            D = s(i(1)),
            v = s(i(2)),
            a = s(i(5)),
            r = s(i(6));

        function s(e) { return e && e.__esModule ? e : { default: e } }

        function g(e) { if (Array.isArray(e)) { for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t]; return i } return Array.from(e) } var p = function() {
            function I() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                    r = this,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;! function(e, t) { if (!(e instanceof I)) throw new TypeError("Cannot call a class as a function") }(this); var n = I._setArgumentsValues(e, t, i),
                    a = n.domElement,
                    s = n.initialValue,
                    o = n.userOptions; if (this.domElement = a, this.defaultRawValue = "", this._setSettings(o, !1), this._checkElement(), this.savedCancellableValue = null, this.historyTable = [], this.historyTableIndex = -1, this.onGoingRedo = !1, this.parentForm = this._getParentForm(), !this.runOnce && this.settings.formatOnPageLoad) this._formatDefaultValueOnPageLoad(s);
                else { var l = void 0; if (D.default.isNull(s)) switch (this.settings.emptyInputBehavior) {
                        case I.options.emptyInputBehavior.min:
                            l = this.settings.minimumValue; break;
                        case I.options.emptyInputBehavior.max:
                            l = this.settings.maximumValue; break;
                        case I.options.emptyInputBehavior.zero:
                            l = "0"; break;
                        case I.options.emptyInputBehavior.focus:
                        case I.options.emptyInputBehavior.press:
                        case I.options.emptyInputBehavior.always:
                        case I.options.emptyInputBehavior.null:
                            l = ""; break;
                        default:
                            l = this.settings.emptyInputBehavior } else l = s;
                    this._setElementAndRawValue(l) }
                this.runOnce = !0, this.hasEventListeners = !1, (this.isInputElement || this.isContentEditable) && (this.settings.noEventListeners || this._createEventListeners(), this._setWritePermissions(!0)), this._saveInitialValues(s), this.sessionStorageAvailable = this.constructor._storageTest(), this.storageNamePrefix = "AUTO_", this._setPersistentStorageName(), this.isFocused = !1, this.isWheelEvent = !1, this.isDropEvent = !1, this.isEditing = !1, this.rawValueOnFocus = void 0, this.internalModification = !1, this.attributeToWatch = this._getAttributeToWatch(), this.getterSetter = Object.getOwnPropertyDescriptor(this.domElement.__proto__, this.attributeToWatch), this._addWatcher(), this.settings.createLocalList && this._createLocalList(), this.constructor._addToGlobalList(this), this.global = { set: function(t) { var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                        r.autoNumericLocalList.forEach(function(e) { e.set(t, i) }) }, setUnformatted: function(t) { var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                        r.autoNumericLocalList.forEach(function(e) { e.setUnformatted(t, i) }) }, get: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                            t = []; return r.autoNumericLocalList.forEach(function(e) { t.push(e.get()) }), r._executeCallback(t, e), t }, getNumericString: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                            t = []; return r.autoNumericLocalList.forEach(function(e) { t.push(e.getNumericString()) }), r._executeCallback(t, e), t }, getFormatted: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                            t = []; return r.autoNumericLocalList.forEach(function(e) { t.push(e.getFormatted()) }), r._executeCallback(t, e), t }, getNumber: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                            t = []; return r.autoNumericLocalList.forEach(function(e) { t.push(e.getNumber()) }), r._executeCallback(t, e), t }, getLocalized: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                            t = []; return r.autoNumericLocalList.forEach(function(e) { t.push(e.getLocalized()) }), r._executeCallback(t, e), t }, reformat: function() { r.autoNumericLocalList.forEach(function(e) { e.reformat() }) }, unformat: function() { r.autoNumericLocalList.forEach(function(e) { e.unformat() }) }, unformatLocalized: function() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                        r.autoNumericLocalList.forEach(function(e) { e.unformatLocalized(t) }) }, update: function() { for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        r.autoNumericLocalList.forEach(function(e) { e.update.apply(e, t) }) }, isPristine: function() { var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                            i = !0; return r.autoNumericLocalList.forEach(function(e) { i && !e.isPristine(t) && (i = !1) }), i }, clear: function() { var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                        r.autoNumericLocalList.forEach(function(e) { e.clear(t) }) }, remove: function() { r.autoNumericLocalList.forEach(function(e) { e.remove() }) }, wipe: function() { r.autoNumericLocalList.forEach(function(e) { e.wipe() }) }, nuke: function() { r.autoNumericLocalList.forEach(function(e) { e.nuke() }) }, has: function(e) { return e instanceof I ? r.autoNumericLocalList.has(e.node()) : r.autoNumericLocalList.has(e) }, addObject: function(e) { var t = void 0,
                            i = void 0;
                        i = e instanceof I ? (t = e.node(), e) : I.getAutoNumericElement(t = e), r._hasLocalList() || r._createLocalList(); var n = i._getLocalList();
                        0 === n.size && (i._createLocalList(), n = i._getLocalList()); var a = void 0;
                        (a = n instanceof Map ? D.default.mergeMaps(r._getLocalList(), n) : (r._addToLocalList(t, i), r._getLocalList())).forEach(function(e) { e._setLocalList(a) }) }, removeObject: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                            i = void 0,
                            n = void 0;
                        n = e instanceof I ? (i = e.node(), e) : I.getAutoNumericElement(i = e); var a = r.autoNumericLocalList;
                        r.autoNumericLocalList.delete(i), a.forEach(function(e) { e._setLocalList(r.autoNumericLocalList) }), t || i !== r.node() ? n._createLocalList() : n._setLocalList(new Map) }, empty: function() { var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                        r.autoNumericLocalList.forEach(function(e) { t ? e._createLocalList() : e._setLocalList(new Map) }) }, elements: function() { var t = []; return r.autoNumericLocalList.forEach(function(e) { t.push(e.node()) }), t }, getList: function() { return r.autoNumericLocalList }, size: function() { return r.autoNumericLocalList.size } }, this.options = { reset: function() { return r.settings = { rawValue: r.defaultRawValue }, r.update(I.defaultSettings), r }, allowDecimalPadding: function(e) { return r.update({ allowDecimalPadding: e }), r }, alwaysAllowDecimalCharacter: function(e) { return r.update({ alwaysAllowDecimalCharacter: e }), r }, caretPositionOnFocus: function(e) { return r.settings.caretPositionOnFocus = e, r }, createLocalList: function(e) { return r.settings.createLocalList = e, r.settings.createLocalList ? r._hasLocalList() || r._createLocalList() : r._deleteLocalList(), r }, currencySymbol: function(e) { return r.update({ currencySymbol: e }), r }, currencySymbolPlacement: function(e) { return r.update({ currencySymbolPlacement: e }), r }, decimalCharacter: function(e) { return r.update({ decimalCharacter: e }), r }, decimalCharacterAlternative: function(e) { return r.settings.decimalCharacterAlternative = e, r }, decimalPlaces: function(e) { return D.default.warning("Using `options.decimalPlaces()` instead of calling the specific `options.decimalPlacesRawValue()`, `options.decimalPlacesShownOnFocus()` and `options.decimalPlacesShownOnBlur()` methods will reset those options.\nPlease call the specific methods if you do not want to reset those.", r.settings.showWarnings), r.update({ decimalPlaces: e }), r }, decimalPlacesRawValue: function(e) { return r.update({ decimalPlacesRawValue: e }), r }, decimalPlacesShownOnBlur: function(e) { return r.update({ decimalPlacesShownOnBlur: e }), r }, decimalPlacesShownOnFocus: function(e) { return r.update({ decimalPlacesShownOnFocus: e }), r }, defaultValueOverride: function(e) { return r.update({ defaultValueOverride: e }), r }, digitalGroupSpacing: function(e) { return r.update({ digitalGroupSpacing: e }), r }, digitGroupSeparator: function(e) { return r.update({ digitGroupSeparator: e }), r }, divisorWhenUnfocused: function(e) { return r.update({ divisorWhenUnfocused: e }), r }, emptyInputBehavior: function(e) { return null === r.rawValue && e !== I.options.emptyInputBehavior.null && (D.default.warning("You are trying to modify the `emptyInputBehavior` option to something different than `'null'` (" + e + "), but the element raw value is currently set to `null`. This would result in an invalid `rawValue`. In order to fix that, the element value has been changed to the empty string `''`.", r.settings.showWarnings), r.rawValue = ""), r.update({ emptyInputBehavior: e }), r }, eventBubbles: function(e) { return r.settings.eventBubbles = e, r }, eventIsCancelable: function(e) { return r.settings.eventIsCancelable = e, r }, failOnUnknownOption: function(e) { return r.settings.failOnUnknownOption = e, r }, formatOnPageLoad: function(e) { return r.settings.formatOnPageLoad = e, r }, formulaMode: function(e) { return r.settings.formulaMode = e, r }, historySize: function(e) { return r.settings.historySize = e, r }, isCancellable: function(e) { return r.settings.isCancellable = e, r }, leadingZero: function(e) { return r.update({ leadingZero: e }), r }, maximumValue: function(e) { return r.update({ maximumValue: e }), r }, minimumValue: function(e) { return r.update({ minimumValue: e }), r }, modifyValueOnWheel: function(e) { return r.settings.modifyValueOnWheel = e, r }, negativeBracketsTypeOnBlur: function(e) { return r.update({ negativeBracketsTypeOnBlur: e }), r }, negativePositiveSignPlacement: function(e) { return r.update({ negativePositiveSignPlacement: e }), r }, negativeSignCharacter: function(e) { return r.update({ negativeSignCharacter: e }), r }, noEventListeners: function(e) { return e === I.options.noEventListeners.noEvents && r.settings.noEventListeners === I.options.noEventListeners.addEvents && r._removeEventListeners(), r.update({ noEventListeners: e }), r }, onInvalidPaste: function(e) { return r.settings.onInvalidPaste = e, r }, outputFormat: function(e) { return r.settings.outputFormat = e, r }, overrideMinMaxLimits: function(e) { return r.update({ overrideMinMaxLimits: e }), r }, positiveSignCharacter: function(e) { return r.update({ positiveSignCharacter: e }), r }, rawValueDivisor: function(e) { return r.update({ rawValueDivisor: e }), r }, readOnly: function(e) { return r.settings.readOnly = e, r._setWritePermissions(), r }, roundingMethod: function(e) { return r.update({ roundingMethod: e }), r }, saveValueToSessionStorage: function(e) { return r.update({ saveValueToSessionStorage: e }), r }, symbolWhenUnfocused: function(e) { return r.update({ symbolWhenUnfocused: e }), r }, selectNumberOnly: function(e) { return r.settings.selectNumberOnly = e, r }, selectOnFocus: function(e) { return r.settings.selectOnFocus = e, r }, serializeSpaces: function(e) { return r.settings.serializeSpaces = e, r }, showOnlyNumbersOnFocus: function(e) { return r.update({ showOnlyNumbersOnFocus: e }), r }, showPositiveSign: function(e) { return r.update({ showPositiveSign: e }), r }, showWarnings: function(e) { return r.settings.showWarnings = e, r }, styleRules: function(e) { return r.update({ styleRules: e }), r }, suffixText: function(e) { return r.update({ suffixText: e }), r }, unformatOnHover: function(e) { return r.settings.unformatOnHover = e, r }, unformatOnSubmit: function(e) { return r.settings.unformatOnSubmit = e, r }, valuesToStrings: function(e) { return r.update({ valuesToStrings: e }), r }, watchExternalChanges: function(e) { return r.update({ watchExternalChanges: e }), r }, wheelOn: function(e) { return r.settings.wheelOn = e, r }, wheelStep: function(e) { return r.settings.wheelStep = e, r } }, this._triggerEvent(I.events.initialized, this.domElement, { newValue: D.default.getElementValue(this.domElement), newRawValue: this.rawValue, error: null, aNElement: this }) } return n(I, [{ key: "_saveInitialValues", value: function(e) { this.initialValueHtmlAttribute = D.default.scientificToDecimal(this.domElement.getAttribute("value")), D.default.isNull(this.initialValueHtmlAttribute) && (this.initialValueHtmlAttribute = ""), this.initialValue = e, D.default.isNull(this.initialValue) && (this.initialValue = "") } }, { key: "_createEventListeners", value: function() { var t = this;
                    this.formulaMode = !1, this._onFocusInFunc = function(e) { t._onFocusIn(e) }, this._onFocusInAndMouseEnterFunc = function(e) { t._onFocusInAndMouseEnter(e) }, this._onFocusFunc = function() { t._onFocus() }, this._onKeydownFunc = function(e) { t._onKeydown(e) }, this._onKeypressFunc = function(e) { t._onKeypress(e) }, this._onKeyupFunc = function(e) { t._onKeyup(e) }, this._onFocusOutAndMouseLeaveFunc = function(e) { t._onFocusOutAndMouseLeave(e) }, this._onPasteFunc = function(e) { t._onPaste(e) }, this._onWheelFunc = function(e) { t._onWheel(e) }, this._onDropFunc = function(e) { t._onDrop(e) }, this._onKeydownGlobalFunc = function(e) { t._onKeydownGlobal(e) }, this._onKeyupGlobalFunc = function(e) { t._onKeyupGlobal(e) }, this.domElement.addEventListener("focusin", this._onFocusInFunc, !1), this.domElement.addEventListener("focus", this._onFocusInAndMouseEnterFunc, !1), this.domElement.addEventListener("focus", this._onFocusFunc, !1), this.domElement.addEventListener("mouseenter", this._onFocusInAndMouseEnterFunc, !1), this.domElement.addEventListener("keydown", this._onKeydownFunc, !1), this.domElement.addEventListener("keypress", this._onKeypressFunc, !1), this.domElement.addEventListener("keyup", this._onKeyupFunc, !1), this.domElement.addEventListener("blur", this._onFocusOutAndMouseLeaveFunc, !1), this.domElement.addEventListener("mouseleave", this._onFocusOutAndMouseLeaveFunc, !1), this.domElement.addEventListener("paste", this._onPasteFunc, !1), this.domElement.addEventListener("wheel", this._onWheelFunc, !1), this.domElement.addEventListener("drop", this._onDropFunc, !1), this._setupFormListener(), this.hasEventListeners = !0, I._doesGlobalListExists() || (document.addEventListener("keydown", this._onKeydownGlobalFunc, !1), document.addEventListener("keyup", this._onKeyupGlobalFunc, !1)) } }, { key: "_removeEventListeners", value: function() { this.domElement.removeEventListener("focusin", this._onFocusInFunc, !1), this.domElement.removeEventListener("focus", this._onFocusInAndMouseEnterFunc, !1), this.domElement.removeEventListener("focus", this._onFocusFunc, !1), this.domElement.removeEventListener("mouseenter", this._onFocusInAndMouseEnterFunc, !1), this.domElement.removeEventListener("blur", this._onFocusOutAndMouseLeaveFunc, !1), this.domElement.removeEventListener("mouseleave", this._onFocusOutAndMouseLeaveFunc, !1), this.domElement.removeEventListener("keydown", this._onKeydownFunc, !1), this.domElement.removeEventListener("keypress", this._onKeypressFunc, !1), this.domElement.removeEventListener("keyup", this._onKeyupFunc, !1), this.domElement.removeEventListener("paste", this._onPasteFunc, !1), this.domElement.removeEventListener("wheel", this._onWheelFunc, !1), this.domElement.removeEventListener("drop", this._onDropFunc, !1), this._removeFormListener(), this.hasEventListeners = !1, document.removeEventListener("keydown", this._onKeydownGlobalFunc, !1), document.removeEventListener("keyup", this._onKeyupGlobalFunc, !1) } }, { key: "_updateEventListeners", value: function() { this.settings.noEventListeners || this.hasEventListeners || this._createEventListeners(), this.settings.noEventListeners && this.hasEventListeners && this._removeEventListeners() } }, { key: "_setupFormListener", value: function() { var e = this;
                    D.default.isNull(this.parentForm) || (this._onFormSubmitFunc = function() { e._onFormSubmit() }, this._onFormResetFunc = function() { e._onFormReset() }, this._hasParentFormCounter() ? this._incrementParentFormCounter() : (this._initializeFormCounterToOne(), this.parentForm.addEventListener("submit", this._onFormSubmitFunc, !1), this.parentForm.addEventListener("reset", this._onFormResetFunc, !1), this._storeFormHandlerFunction())) } }, { key: "_removeFormListener", value: function() { if (!D.default.isNull(this.parentForm)) { var e = this._getParentFormCounter();
                        1 === e ? (this.parentForm.removeEventListener("submit", this._getFormHandlerFunction().submitFn, !1), this.parentForm.removeEventListener("reset", this._getFormHandlerFunction().resetFn, !1), this._removeFormDataSetInfo()) : 1 < e ? this._decrementParentFormCounter() : D.default.throwError("The AutoNumeric object count on the form is incoherent.") } } }, { key: "_hasParentFormCounter", value: function() { return "anCount" in this.parentForm.dataset } }, { key: "_getParentFormCounter", value: function() { return Number(this.parentForm.dataset.anCount) } }, { key: "_initializeFormCounterToOne", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                    this._getFormElement(e).dataset.anCount = 1 } }, { key: "_incrementParentFormCounter", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                    this._getFormElement(e).dataset.anCount++ } }, { key: "_decrementParentFormCounter", value: function() { this.parentForm.dataset.anCount-- } }, { key: "_hasFormHandlerFunction", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return "anFormHandler" in this._getFormElement(e).dataset } }, { key: "_getFormElement", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return D.default.isNull(e) ? this.parentForm : e } }, { key: "_storeFormHandlerFunction", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                    this.constructor._doesFormHandlerListExists() || this.constructor._createFormHandlerList(); var t = D.default.randomString();
                    this._getFormElement(e).dataset.anFormHandler = t, window.aNFormHandlerMap.set(t, { submitFn: this._onFormSubmitFunc, resetFn: this._onFormResetFunc }) } }, { key: "_getFormHandlerKey", value: function() { this._hasFormHandlerFunction() || D.default.throwError("Unable to retrieve the form handler name"); var e = this.parentForm.dataset.anFormHandler; return "" === e && D.default.throwError("The form handler name is invalid"), e } }, { key: "_getFormHandlerFunction", value: function() { var e = this._getFormHandlerKey(); return window.aNFormHandlerMap.get(e) } }, { key: "_removeFormDataSetInfo", value: function() { this._decrementParentFormCounter(), window.aNFormHandlerMap.delete(this._getFormHandlerKey()), this.parentForm.removeAttribute("data-an-count"), this.parentForm.removeAttribute("data-an-form-handler") } }, { key: "_setWritePermissions", value: function() { 0 < arguments.length && void 0 !== arguments[0] && arguments[0] && this.domElement.readOnly || this.settings.readOnly ? this._setReadOnly() : this._setReadWrite() } }, { key: "_setReadOnly", value: function() { this.isInputElement ? this.domElement.readOnly = !0 : this.domElement.setAttribute("contenteditable", !1) } }, { key: "_setReadWrite", value: function() { this.isInputElement ? this.domElement.readOnly = !1 : this.domElement.setAttribute("contenteditable", !0) } }, { key: "_addWatcher", value: function() { var t = this; if (!D.default.isUndefined(this.getterSetter)) { var e = this.getterSetter,
                            i = e.set,
                            n = e.get;
                        Object.defineProperty(this.domElement, this.attributeToWatch, { configurable: !0, get: function() { return n.call(t.domElement) }, set: function(e) { i.call(t.domElement, e), t.settings.watchExternalChanges && !t.internalModification && t.set(e) } }) } } }, { key: "_removeWatcher", value: function() { var t = this; if (!D.default.isUndefined(this.getterSetter)) { var e = this.getterSetter,
                            i = e.set,
                            n = e.get;
                        Object.defineProperty(this.domElement, this.attributeToWatch, { configurable: !0, get: function() { return n.call(t.domElement) }, set: function(e) { i.call(t.domElement, e) } }) } } }, { key: "_getAttributeToWatch", value: function() { var e = void 0; if (this.isInputElement) e = "value";
                    else { var t = this.domElement.nodeType;
                        t === Node.ELEMENT_NODE || t === Node.DOCUMENT_NODE || t === Node.DOCUMENT_FRAGMENT_NODE ? e = "textContent" : t === Node.TEXT_NODE && (e = "nodeValue") } return e } }, { key: "_historyTableAdd", value: function() { var e = 0 === this.historyTable.length; if (e || this.rawValue !== this._historyTableCurrentValueUsed()) { var t = !0; if (!e) { var i = this.historyTableIndex + 1;
                            i < this.historyTable.length && this.rawValue === this.historyTable[i].value ? t = !1 : D.default.arrayTrim(this.historyTable, this.historyTableIndex + 1) } if (this.historyTableIndex++, t) { var n = D.default.getElementSelection(this.domElement);
                            this.selectionStart = n.start, this.selectionEnd = n.end, this.historyTable.push({ value: this.rawValue, start: this.selectionStart + 1, end: this.selectionEnd + 1 }), 1 < this.historyTable.length && (this.historyTable[this.historyTableIndex - 1].start = this.selectionStart, this.historyTable[this.historyTableIndex - 1].end = this.selectionEnd) }
                        this.historyTable.length > this.settings.historySize && this._historyTableForget() } } }, { key: "_historyTableUndoOrRedo", value: function() { var e = void 0; if (0 < arguments.length && void 0 !== arguments[0] && !arguments[0] ? (e = this.historyTableIndex + 1 < this.historyTable.length) && this.historyTableIndex++ : (e = 0 < this.historyTableIndex) && this.historyTableIndex--, e) { var t = this.historyTable[this.historyTableIndex];
                        this.set(t.value, null, !1), D.default.setElementSelection(this.domElement, t.start, t.end) } } }, { key: "_historyTableUndo", value: function() { this._historyTableUndoOrRedo(!0) } }, { key: "_historyTableRedo", value: function() { this._historyTableUndoOrRedo(!1) } }, { key: "_historyTableForget", value: function() { for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1, t = [], i = 0; i < e; i++) t.push(this.historyTable.shift()), this.historyTableIndex--, this.historyTableIndex < 0 && (this.historyTableIndex = 0); return 1 === t.length ? t[0] : t } }, { key: "_historyTableCurrentValueUsed", value: function() { var e = this.historyTableIndex; return e < 0 && (e = 0), D.default.isUndefinedOrNullOrEmpty(this.historyTable[e]) ? "" : this.historyTable[e].value } }, { key: "_parseStyleRules", value: function() { var n = this;
                    D.default.isUndefinedOrNullOrEmpty(this.settings.styleRules) || "" === this.rawValue || (D.default.isUndefinedOrNullOrEmpty(this.settings.styleRules.positive) || (0 <= this.rawValue ? this._addCSSClass(this.settings.styleRules.positive) : this._removeCSSClass(this.settings.styleRules.positive)), D.default.isUndefinedOrNullOrEmpty(this.settings.styleRules.negative) || (this.rawValue < 0 ? this._addCSSClass(this.settings.styleRules.negative) : this._removeCSSClass(this.settings.styleRules.negative)), D.default.isUndefinedOrNullOrEmpty(this.settings.styleRules.ranges) || 0 === this.settings.styleRules.ranges.length || this.settings.styleRules.ranges.forEach(function(e) { n.rawValue >= e.min && n.rawValue < e.max ? n._addCSSClass(e.class) : n._removeCSSClass(e.class) }), D.default.isUndefinedOrNullOrEmpty(this.settings.styleRules.userDefined) || 0 === this.settings.styleRules.userDefined.length || this.settings.styleRules.userDefined.forEach(function(e) { if (D.default.isFunction(e.callback))
                            if (D.default.isString(e.classes)) e.callback(n.rawValue) ? n._addCSSClass(e.classes) : n._removeCSSClass(e.classes);
                            else if (D.default.isArray(e.classes))
                            if (2 === e.classes.length) e.callback(n.rawValue) ? (n._addCSSClass(e.classes[0]), n._removeCSSClass(e.classes[1])) : (n._removeCSSClass(e.classes[0]), n._addCSSClass(e.classes[1]));
                            else if (2 < e.classes.length) { var i = e.callback(n.rawValue);
                            D.default.isArray(i) ? e.classes.forEach(function(e, t) { D.default.isInArray(t, i) ? n._addCSSClass(e) : n._removeCSSClass(e) }) : D.default.isInt(i) ? e.classes.forEach(function(e, t) { t === i ? n._addCSSClass(e) : n._removeCSSClass(e) }) : D.default.isNull(i) ? e.classes.forEach(function(e) { n._removeCSSClass(e) }) : D.default.throwError("The callback result is not an array nor a valid array index, " + (void 0 === i ? "undefined" : b(i)) + " given.") } else D.default.throwError("The classes attribute is not valid for the `styleRules` option.");
                        else D.default.isUndefinedOrNullOrEmpty(e.classes) ? e.callback(n) : D.default.throwError("The callback/classes structure is not valid for the `styleRules` option.");
                        else D.default.warning("The given `styleRules` callback is not a function, " + ("undefined" == typeof callback ? "undefined" : b(callback)) + " given.", n.settings.showWarnings) })) } }, { key: "_addCSSClass", value: function(e) { this.domElement.classList.add(e) } }, { key: "_removeCSSClass", value: function(e) { this.domElement.classList.remove(e) } }, { key: "update", value: function() { for (var t = this, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                    Array.isArray(i) && Array.isArray(i[0]) && (i = i[0]); var a = D.default.cloneObject(this.settings),
                        r = this.rawValue,
                        s = {};
                    D.default.isUndefinedOrNullOrEmpty(i) || 0 === i.length ? s = null : 1 <= i.length && i.forEach(function(e) { t.constructor._isPreDefinedOptionValid(e) && (e = t.constructor._getOptionObject(e)), y(s, e) }); try { this._setSettings(s, !0), this._setWritePermissions(), this._updateEventListeners(), this.set(r) } catch (e) { return this._setSettings(a, !0), D.default.throwError("Unable to update the settings, those are invalid: [" + e + "]"), this } return this } }, { key: "getSettings", value: function() { return this.settings } }, { key: "set", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2]; if (D.default.isUndefined(e)) return D.default.warning("You are trying to set an 'undefined' value ; an error could have occurred.", this.settings.showWarnings), this; if (D.default.isNull(t) || this._setSettings(t, !0), null === e && this.settings.emptyInputBehavior !== I.options.emptyInputBehavior.null) return D.default.warning("You are trying to set the `null` value while the `emptyInputBehavior` option is set to " + this.settings.emptyInputBehavior + ". If you want to be able to set the `null` value, you need to change the 'emptyInputBehavior' option to `'null'`.", this.settings.showWarnings), this; var n, a = void 0; if (null === e) return this._setElementAndRawValue(null, null, i), this._saveValueToPersistentStorage(), this; if (a = this.constructor._toNumericValue(e, this.settings), isNaN(Number(a))) return D.default.warning("The value you are trying to set results in `NaN`. The element value is set to the empty string instead.", this.settings.showWarnings), this.setValue("", i), this; if ("" === a) switch (this.settings.emptyInputBehavior) {
                        case I.options.emptyInputBehavior.zero:
                            a = 0; break;
                        case I.options.emptyInputBehavior.min:
                            a = this.settings.minimumValue; break;
                        case I.options.emptyInputBehavior.max:
                            a = this.settings.maximumValue; break;
                        default:
                            D.default.isNumber(this.settings.emptyInputBehavior) && (a = Number(this.settings.emptyInputBehavior)) }
                    if ("" === a) return n = this.settings.emptyInputBehavior === I.options.emptyInputBehavior.always ? this.settings.currencySymbol : "", this._setElementAndRawValue(n, "", i), this; var r = this.constructor._checkIfInRangeWithOverrideOption(a, this.settings),
                        s = S(r, 2),
                        o = s[0],
                        l = s[1]; if (o && l && this.settings.valuesToStrings && this._checkValuesToStrings(a)) return this._setElementAndRawValue(this.settings.valuesToStrings[a], a, i), this._saveValueToPersistentStorage(), this; if (D.default.isZeroOrHasNoValue(a) && (a = "0"), o && l) { var u = this.constructor._roundRawValue(a, this.settings); return u = this._trimLeadingAndTrailingZeros(u.replace(this.settings.decimalCharacter, ".")), a = this._getRawValueToFormat(a), a = this.isFocused ? this.constructor._roundFormattedValueShownOnFocus(a, this.settings) : (this.settings.divisorWhenUnfocused && (a = (a /= this.settings.divisorWhenUnfocused).toString()), this.constructor._roundFormattedValueShownOnBlur(a, this.settings)), a = this.constructor._modifyNegativeSignAndDecimalCharacterForFormattedValue(a, this.settings), a = this.constructor._addGroupSeparators(a, this.settings, this.isFocused, this.rawValue, u), !this.isFocused && this.settings.symbolWhenUnfocused && (a = "" + a + this.settings.symbolWhenUnfocused), (this.settings.decimalPlacesShownOnFocus || this.settings.divisorWhenUnfocused) && this._saveValueToPersistentStorage(), this._setElementAndRawValue(a, u, i), this } return o || this._triggerEvent(I.events.minRangeExceeded, this.domElement), l || this._triggerEvent(I.events.maxRangeExceeded, this.domElement), D.default.throwError("The value [" + a + "] being set falls outside of the minimumValue [" + this.settings.minimumValue + "] and maximumValue [" + this.settings.maximumValue + "] range set for this element"), this._removeValueFromPersistentStorage(), this.setValue("", i), this } }, { key: "setUnformatted", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null; if (null === e || D.default.isUndefined(e)) return this;
                    D.default.isNull(t) || this._setSettings(t, !0); var i = this.constructor._removeBrackets(e, this.settings),
                        n = this.constructor._stripAllNonNumberCharacters(i, this.settings, !0, this.isFocused);
                    D.default.isNumber(n) || D.default.throwError("The value is not a valid one, it's not a numeric string nor a recognized currency."); var a = this.constructor._checkIfInRangeWithOverrideOption(n, this.settings),
                        r = S(a, 2),
                        s = r[0],
                        o = r[1]; return s && o ? this.setValue(e) : D.default.throwError("The value is out of the range limits [" + this.settings.minimumValue + ", " + this.settings.maximumValue + "]."), this } }, { key: "setValue", value: function(e) { var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]; return this._setElementAndRawValue(e, t), this } }, { key: "_setRawValue", value: function(e) { var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]; if (this.rawValue !== e) { var i = this.rawValue;
                        this.rawValue = e, !D.default.isNull(this.settings.rawValueDivisor) && 0 !== this.settings.rawValueDivisor && "" !== e && null !== e && this._isUserManuallyEditingTheValue() && (this.rawValue /= this.settings.rawValueDivisor), this._triggerEvent(I.events.rawValueModified, this.domElement, { oldRawValue: i, newRawValue: this.rawValue, isPristine: this.isPristine(!0), error: null, aNElement: this }), this._parseStyleRules(), t && this._historyTableAdd() } } }, { key: "_setElementValue", value: function(e) { var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        i = D.default.getElementValue(this.domElement); return e !== i && (this.internalModification = !0, D.default.setElementValue(this.domElement, e), this.internalModification = !1, t && this._triggerEvent(I.events.formatted, this.domElement, { oldValue: i, newValue: e, oldRawValue: this.rawValue, newRawValue: this.rawValue, isPristine: this.isPristine(!1), error: null, aNElement: this })), this } }, { key: "_setElementAndRawValue", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2]; return D.default.isNull(t) ? t = e : D.default.isBoolean(t) && (i = t, t = e), this._setElementValue(e), this._setRawValue(t, i), this } }, { key: "_getRawValueToFormat", value: function(e) { return D.default.isNull(this.settings.rawValueDivisor) || 0 === this.settings.rawValueDivisor || "" === e || null === e ? e : e * this.settings.rawValueDivisor } }, { key: "_checkValuesToStrings", value: function(e) { return this.constructor._checkValuesToStringsArray(e, this.valuesToStringsKeys) } }, { key: "_isUserManuallyEditingTheValue", value: function() { return this.isFocused && this.isEditing || this.isDropEvent } }, { key: "_executeCallback", value: function(e, t) {!D.default.isNull(t) && D.default.isFunction(t) && t(e, this) } }, { key: "_triggerEvent", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document,
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    D.default.triggerEvent(e, t, i, this.settings.eventBubbles, this.settings.eventIsCancelable) } }, { key: "get", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return this.getNumericString(e) } }, { key: "getNumericString", value: function() { var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return e = D.default.isNull(this.rawValue) ? null : D.default.trimPaddedZerosFromDecimalPlaces(this.rawValue), this._executeCallback(e, t), e } }, { key: "getFormatted", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; "value" in this.domElement || "textContent" in this.domElement || D.default.throwError("Unable to get the formatted string from the element."); var t = D.default.getElementValue(this.domElement); return this._executeCallback(t, e), t } }, { key: "getNumber", value: function() { var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return e = null === this.rawValue ? null : this.constructor._toLocale(this.getNumericString(), "number", this.settings), this._executeCallback(e, t), e } }, { key: "getLocalized", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                    D.default.isFunction(e) && D.default.isNull(t) && (t = e, e = null); var i, n = void 0; "" != (n = D.default.isEmptyString(this.rawValue) ? "" : "" + Number(this.rawValue)) && 0 === Number(n) && this.settings.leadingZero !== I.options.leadingZero.keep && (n = "0"), i = D.default.isNull(e) ? this.settings.outputFormat : e; var a = this.constructor._toLocale(n, i, this.settings); return this._executeCallback(a, t), a } }, { key: "reformat", value: function() { return this.set(this.rawValue), this } }, { key: "unformat", value: function() { return this._setElementValue(this.getNumericString()), this } }, { key: "unformatLocalized", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return this._setElementValue(this.getLocalized(e)), this } }, { key: "isPristine", value: function() { return 0 < arguments.length && void 0 !== arguments[0] && !arguments[0] ? this.initialValueHtmlAttribute === this.getFormatted() : this.initialValue === this.getNumericString() } }, { key: "select", value: function() { return this.settings.selectNumberOnly ? this.selectNumber() : this._defaultSelectAll(), this } }, { key: "_defaultSelectAll", value: function() { D.default.setElementSelection(this.domElement, 0, D.default.getElementValue(this.domElement).length) } }, { key: "selectNumber", value: function() { var e, t = D.default.getElementValue(this.domElement),
                        i = t.length,
                        n = this.settings.currencySymbol.length,
                        a = this.settings.currencySymbolPlacement,
                        r = D.default.isNegative(t, this.settings.negativeSignCharacter) ? 1 : 0,
                        s = this.settings.suffixText.length;
                    e = a === I.options.currencySymbolPlacement.suffix ? 0 : this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.left && 1 === r && 0 < n ? n + 1 : n; var o = void 0; if (a === I.options.currencySymbolPlacement.prefix) o = i - s;
                    else switch (this.settings.negativePositiveSignPlacement) {
                        case I.options.negativePositiveSignPlacement.left:
                            o = i - (s + n); break;
                        case I.options.negativePositiveSignPlacement.right:
                            o = 0 < n ? i - (n + r + s) : i - (n + s); break;
                        default:
                            o = i - (n + s) }
                    return D.default.setElementSelection(this.domElement, e, o), this } }, { key: "selectInteger", value: function() { var e = 0,
                        t = 0 <= this.rawValue;
                    this.settings.currencySymbolPlacement !== I.options.currencySymbolPlacement.prefix && (this.settings.currencySymbolPlacement !== I.options.currencySymbolPlacement.suffix || this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.prefix && this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none) || (this.settings.showPositiveSign && t || !t && this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.left) && (e += 1), this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.prefix && (e += this.settings.currencySymbol.length); var i = D.default.getElementValue(this.domElement),
                        n = i.indexOf(this.settings.decimalCharacter); return -1 === n && (n = this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix ? i.length - this.settings.currencySymbol.length : i.length, t || this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.suffix && this.settings.currencySymbolPlacement !== I.options.currencySymbolPlacement.suffix || (n -= 1), n -= this.settings.suffixText.length), D.default.setElementSelection(this.domElement, e, n), this } }, { key: "selectDecimal", value: function() { var e, t = D.default.getElementValue(this.domElement).indexOf(this.settings.decimalCharacter),
                        i = void 0; return i = -1 === t ? t = 0 : (t += 1, e = this.isFocused ? this.settings.decimalPlacesShownOnFocus : this.settings.decimalPlacesShownOnBlur, t + Number(e)), D.default.setElementSelection(this.domElement, t, i), this } }, { key: "node", value: function() { return this.domElement } }, { key: "parent", value: function() { return this.domElement.parentNode } }, { key: "detach", value: function() { var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return e = D.default.isNull(t) ? this.domElement : t.node(), this._removeFromLocalList(e), this } }, { key: "attach", value: function(e) { var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]; return this._addToLocalList(e.node()), t && e.update(this.settings), this } }, { key: "formatOther", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null; return this._formatOrUnformatOther(!0, e, t) } }, { key: "unformatOther", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null; return this._formatOrUnformatOther(!1, e, t) } }, { key: "_formatOrUnformatOther", value: function(e, t) { var i, n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    i = D.default.isNull(n) ? this.settings : this._cloneAndMergeSettings(n); var a = void 0; if (D.default.isElement(t)) { var r = D.default.getElementValue(t); return a = e ? I.format(r, i) : I.unformat(r, i), D.default.setElementValue(t, a), null } return e ? I.format(t, i) : I.unformat(t, i) } }, { key: "init", value: function(e) { var n = this,
                        a = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        t = !1,
                        i = []; if (D.default.isString(e) ? i = [].concat(g(document.querySelectorAll(e))) : D.default.isElement(e) ? (i.push(e), t = !0) : D.default.isArray(e) ? i = e : D.default.throwError("The given parameters to the 'init' function are invalid."), 0 === i.length) return D.default.warning("No valid DOM elements were given hence no AutoNumeric object were instantiated.", !0), []; var r = this._getLocalList(),
                        s = []; return i.forEach(function(e) { var t = n.settings.createLocalList;
                        a && (n.settings.createLocalList = !1); var i = new I(e, D.default.getElementValue(e), n.settings);
                        a && (i._setLocalList(r), n._addToLocalList(e, i), n.settings.createLocalList = t), s.push(i) }), t ? s[0] : s } }, { key: "clear", value: function() { if (0 < arguments.length && void 0 !== arguments[0] && arguments[0]) { var e = { emptyInputBehavior: I.options.emptyInputBehavior.focus };
                        this.set("", e) } else this.set(""); return this } }, { key: "remove", value: function() { this._removeValueFromPersistentStorage(), this._removeEventListeners(), this._removeWatcher(), this._removeFromLocalList(this.domElement), this.constructor._removeFromGlobalList(this) } }, { key: "wipe", value: function() { this._setElementValue("", !1), this.remove() } }, { key: "nuke", value: function() { this.remove(), this.domElement.parentNode.removeChild(this.domElement) } }, { key: "form", value: function() { if (0 < arguments.length && void 0 !== arguments[0] && arguments[0] || D.default.isUndefinedOrNullOrEmpty(this.parentForm)) { var e = this._getParentForm(); if (!D.default.isNull(e) && e !== this.parentForm) { var t = this._getFormAutoNumericChildren(this.parentForm);
                            this.parentForm.dataset.anCount = t.length, this._hasFormHandlerFunction(e) ? this._incrementParentFormCounter(e) : (this._storeFormHandlerFunction(e), this._initializeFormCounterToOne(e)) }
                        this.parentForm = e } return this.parentForm } }, { key: "_getFormAutoNumericChildren", value: function(e) { var t = this; return [].concat(g(e.querySelectorAll("input"))).filter(function(e) { return t.constructor.isManagedByAutoNumeric(e) }) } }, { key: "_getParentForm", value: function() { if ("body" === this.domElement.tagName.toLowerCase()) return null; var e = this.domElement,
                        t = void 0;
                    do { if (e = e.parentNode, D.default.isNull(e)) return null; if ("body" === (t = e.tagName ? e.tagName.toLowerCase() : "")) break } while ("form" !== t); return "form" === t ? e : null } }, { key: "formNumericString", value: function() { return this.constructor._serializeNumericString(this.form(), this.settings.serializeSpaces) } }, { key: "formFormatted", value: function() { return this.constructor._serializeFormatted(this.form(), this.settings.serializeSpaces) } }, { key: "formLocalized", value: function() { var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return e = D.default.isNull(t) ? this.settings.outputFormat : t, this.constructor._serializeLocalized(this.form(), this.settings.serializeSpaces, e) } }, { key: "formArrayNumericString", value: function() { return this.constructor._serializeNumericStringArray(this.form(), this.settings.serializeSpaces) } }, { key: "formArrayFormatted", value: function() { return this.constructor._serializeFormattedArray(this.form(), this.settings.serializeSpaces) } }, { key: "formArrayLocalized", value: function() { var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return e = D.default.isNull(t) ? this.settings.outputFormat : t, this.constructor._serializeLocalizedArray(this.form(), this.settings.serializeSpaces, e) } }, { key: "formJsonNumericString", value: function() { return JSON.stringify(this.formArrayNumericString()) } }, { key: "formJsonFormatted", value: function() { return JSON.stringify(this.formArrayFormatted()) } }, { key: "formJsonLocalized", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return JSON.stringify(this.formArrayLocalized(e)) } }, { key: "formUnformat", value: function() { return this.constructor._getChildANInputElement(this.form()).forEach(function(e) { I.getAutoNumericElement(e).unformat() }), this } }, { key: "formUnformatLocalized", value: function() { return this.constructor._getChildANInputElement(this.form()).forEach(function(e) { I.getAutoNumericElement(e).unformatLocalized() }), this } }, { key: "formReformat", value: function() { return this.constructor._getChildANInputElement(this.form()).forEach(function(e) { I.getAutoNumericElement(e).reformat() }), this } }, { key: "formSubmitNumericString", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return D.default.isNull(e) ? (this.formUnformat(), this.form().submit(), this.formReformat()) : D.default.isFunction(e) ? e(this.formNumericString()) : D.default.throwError("The given callback is not a function."), this } }, { key: "formSubmitFormatted", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return D.default.isNull(e) ? this.form().submit() : D.default.isFunction(e) ? e(this.formFormatted()) : D.default.throwError("The given callback is not a function."), this } }, { key: "formSubmitLocalized", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null; return D.default.isNull(t) ? (this.formUnformatLocalized(), this.form().submit(), this.formReformat()) : D.default.isFunction(t) ? t(this.formLocalized(e)) : D.default.throwError("The given callback is not a function."), this } }, { key: "formSubmitArrayNumericString", value: function(e) { return D.default.isFunction(e) ? e(this.formArrayNumericString()) : D.default.throwError("The given callback is not a function."), this } }, { key: "formSubmitArrayFormatted", value: function(e) { return D.default.isFunction(e) ? e(this.formArrayFormatted()) : D.default.throwError("The given callback is not a function."), this } }, { key: "formSubmitArrayLocalized", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null; return D.default.isFunction(e) ? e(this.formArrayLocalized(t)) : D.default.throwError("The given callback is not a function."), this } }, { key: "formSubmitJsonNumericString", value: function(e) { return D.default.isFunction(e) ? e(this.formJsonNumericString()) : D.default.throwError("The given callback is not a function."), this } }, { key: "formSubmitJsonFormatted", value: function(e) { return D.default.isFunction(e) ? e(this.formJsonFormatted()) : D.default.throwError("The given callback is not a function."), this } }, { key: "formSubmitJsonLocalized", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null; return D.default.isFunction(e) ? e(this.formJsonLocalized(t)) : D.default.throwError("The given callback is not a function."), this } }, { key: "_createLocalList", value: function() { this.autoNumericLocalList = new Map, this._addToLocalList(this.domElement) } }, { key: "_deleteLocalList", value: function() { delete this.autoNumericLocalList } }, { key: "_setLocalList", value: function(e) { this.autoNumericLocalList = e } }, { key: "_getLocalList", value: function() { return this.autoNumericLocalList } }, { key: "_hasLocalList", value: function() { return this.autoNumericLocalList instanceof Map && 0 !== this.autoNumericLocalList.size } }, { key: "_addToLocalList", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                    D.default.isNull(t) && (t = this), D.default.isUndefined(this.autoNumericLocalList) ? D.default.throwError("The local list provided does not exists when trying to add an element. [" + this.autoNumericLocalList + "] given.") : this.autoNumericLocalList.set(e, t) } }, { key: "_removeFromLocalList", value: function(e) { D.default.isUndefined(this.autoNumericLocalList) ? this.settings.createLocalList && D.default.throwError("The local list provided does not exists when trying to remove an element. [" + this.autoNumericLocalList + "] given.") : this.autoNumericLocalList.delete(e) } }, { key: "_mergeSettings", value: function() { for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    y.apply(void 0, [this.settings].concat(t)) } }, { key: "_cloneAndMergeSettings", value: function() { for (var e = {}, t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n]; return y.apply(void 0, [e, this.settings].concat(i)), e } }, { key: "_updatePredefinedOptions", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null; return D.default.isNull(t) ? this.update(e) : (this._mergeSettings(e, t), this.update(this.settings)), this } }, { key: "french", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return this._updatePredefinedOptions(I.getPredefinedOptions().French, e), this } }, { key: "northAmerican", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return this._updatePredefinedOptions(I.getPredefinedOptions().NorthAmerican, e), this } }, { key: "british", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return this._updatePredefinedOptions(I.getPredefinedOptions().British, e), this } }, { key: "swiss", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return this._updatePredefinedOptions(I.getPredefinedOptions().Swiss, e), this } }, { key: "japanese", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return this._updatePredefinedOptions(I.getPredefinedOptions().Japanese, e), this } }, { key: "spanish", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return this._updatePredefinedOptions(I.getPredefinedOptions().Spanish, e), this } }, { key: "chinese", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return this._updatePredefinedOptions(I.getPredefinedOptions().Chinese, e), this } }, { key: "brazilian", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null; return this._updatePredefinedOptions(I.getPredefinedOptions().Brazilian, e), this } }, { key: "_runCallbacksFoundInTheSettingsObject", value: function() { for (var e in this.settings)
                        if (this.settings.hasOwnProperty(e)) { var t = this.settings[e]; if ("function" == typeof t) this.settings[e] = t(this, e);
                            else { var i = this.domElement.getAttribute(e);
                                i = D.default.camelize(i), "function" == typeof this.settings[i] && (this.settings[e] = i(this, e)) } } } }, { key: "_setTrailingNegativeSignInfo", value: function() { this.isTrailingNegative = this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.suffix || this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix && (this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.left || this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.right) } }, { key: "_modifyNegativeSignAndDecimalCharacterForRawValue", value: function(e) { return "." !== this.settings.decimalCharacter && (e = e.replace(this.settings.decimalCharacter, ".")), "-" !== this.settings.negativeSignCharacter && this.settings.isNegativeSignAllowed && (e = e.replace(this.settings.negativeSignCharacter, "-")), e.match(/\d/) || (e += "0"), e } }, { key: "_initialCaretPosition", value: function(e) { D.default.isNull(this.settings.caretPositionOnFocus) && this.settings.selectOnFocus === I.options.selectOnFocus.doNotSelect && D.default.throwError("`_initialCaretPosition()` should never be called when the `caretPositionOnFocus` option is `null`."); var t = this.rawValue < 0,
                        i = D.default.isZeroOrHasNoValue(e),
                        n = e.length,
                        a = 0,
                        r = 0,
                        s = !1,
                        o = 0;
                    this.settings.caretPositionOnFocus !== I.options.caretPositionOnFocus.start && (a = (e = (e = (e = e.replace(this.settings.negativeSignCharacter, "")).replace(this.settings.positiveSignCharacter, "")).replace(this.settings.currencySymbol, "")).length, s = D.default.contains(e, this.settings.decimalCharacter), this.settings.caretPositionOnFocus !== I.options.caretPositionOnFocus.decimalLeft && this.settings.caretPositionOnFocus !== I.options.caretPositionOnFocus.decimalRight || (o = s ? (r = e.indexOf(this.settings.decimalCharacter), this.settings.decimalCharacter.length) : (r = a, 0))); var l = "";
                    t ? l = this.settings.negativeSignCharacter : this.settings.showPositiveSign && !i && (l = this.settings.positiveSignCharacter); var u = l.length,
                        c = this.settings.currencySymbol.length,
                        h = void 0; if (this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.prefix) { if (this.settings.caretPositionOnFocus === I.options.caretPositionOnFocus.start)
                            if (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !i)) switch (this.settings.negativePositiveSignPlacement) {
                                case I.options.negativePositiveSignPlacement.prefix:
                                case I.options.negativePositiveSignPlacement.left:
                                case I.options.negativePositiveSignPlacement.right:
                                    h = u + c; break;
                                case I.options.negativePositiveSignPlacement.suffix:
                                    h = c } else h = c;
                            else if (this.settings.caretPositionOnFocus === I.options.caretPositionOnFocus.end)
                            if (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !i)) switch (this.settings.negativePositiveSignPlacement) {
                                case I.options.negativePositiveSignPlacement.prefix:
                                case I.options.negativePositiveSignPlacement.left:
                                case I.options.negativePositiveSignPlacement.right:
                                    h = n; break;
                                case I.options.negativePositiveSignPlacement.suffix:
                                    h = c + a } else h = n;
                            else if (this.settings.caretPositionOnFocus === I.options.caretPositionOnFocus.decimalLeft)
                            if (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !i)) switch (this.settings.negativePositiveSignPlacement) {
                                case I.options.negativePositiveSignPlacement.prefix:
                                case I.options.negativePositiveSignPlacement.left:
                                case I.options.negativePositiveSignPlacement.right:
                                    h = u + c + r; break;
                                case I.options.negativePositiveSignPlacement.suffix:
                                    h = c + r } else h = c + r;
                            else if (this.settings.caretPositionOnFocus === I.options.caretPositionOnFocus.decimalRight)
                            if (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !i)) switch (this.settings.negativePositiveSignPlacement) {
                                case I.options.negativePositiveSignPlacement.prefix:
                                case I.options.negativePositiveSignPlacement.left:
                                case I.options.negativePositiveSignPlacement.right:
                                    h = u + c + r + o; break;
                                case I.options.negativePositiveSignPlacement.suffix:
                                    h = c + r + o } else h = c + r + o } else if (this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix)
                        if (this.settings.caretPositionOnFocus === I.options.caretPositionOnFocus.start)
                            if (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !i)) switch (this.settings.negativePositiveSignPlacement) {
                                case I.options.negativePositiveSignPlacement.suffix:
                                case I.options.negativePositiveSignPlacement.right:
                                case I.options.negativePositiveSignPlacement.left:
                                    h = 0; break;
                                case I.options.negativePositiveSignPlacement.prefix:
                                    h = u } else h = 0;
                            else if (this.settings.caretPositionOnFocus === I.options.caretPositionOnFocus.end)
                        if (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !i)) switch (this.settings.negativePositiveSignPlacement) {
                            case I.options.negativePositiveSignPlacement.suffix:
                            case I.options.negativePositiveSignPlacement.right:
                            case I.options.negativePositiveSignPlacement.left:
                                h = a; break;
                            case I.options.negativePositiveSignPlacement.prefix:
                                h = u + a } else h = a;
                        else if (this.settings.caretPositionOnFocus === I.options.caretPositionOnFocus.decimalLeft)
                        if (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !i)) switch (this.settings.negativePositiveSignPlacement) {
                            case I.options.negativePositiveSignPlacement.suffix:
                            case I.options.negativePositiveSignPlacement.right:
                            case I.options.negativePositiveSignPlacement.left:
                                h = r; break;
                            case I.options.negativePositiveSignPlacement.prefix:
                                h = u + r } else h = r;
                        else if (this.settings.caretPositionOnFocus === I.options.caretPositionOnFocus.decimalRight)
                        if (this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !i)) switch (this.settings.negativePositiveSignPlacement) {
                            case I.options.negativePositiveSignPlacement.suffix:
                            case I.options.negativePositiveSignPlacement.right:
                            case I.options.negativePositiveSignPlacement.left:
                                h = r + o; break;
                            case I.options.negativePositiveSignPlacement.prefix:
                                h = u + r + o } else h = r + o;
                    return h } }, { key: "_keepAnOriginalSettingsCopy", value: function() { this.originalDigitGroupSeparator = this.settings.digitGroupSeparator, this.originalCurrencySymbol = this.settings.currencySymbol, this.originalSuffixText = this.settings.suffixText } }, { key: "_trimLeadingAndTrailingZeros", value: function(e) { if ("" === e || null === e) return e; if (this.settings.leadingZero !== I.options.leadingZero.keep) { if (0 === Number(e)) return "0";
                        e = e.replace(/^(-)?0+(?=\d)/g, "$1") } return D.default.contains(e, ".") && (e = e.replace(/(\.[0-9]*?)0+$/, "$1")), e.replace(/\.$/, "") } }, { key: "_setPersistentStorageName", value: function() { this.settings.saveValueToSessionStorage && ("" === this.domElement.name || D.default.isUndefined(this.domElement.name) ? this.rawValueStorageName = "" + this.storageNamePrefix + this.domElement.id : this.rawValueStorageName = "" + this.storageNamePrefix + decodeURIComponent(this.domElement.name)) } }, { key: "_saveValueToPersistentStorage", value: function() { this.settings.saveValueToSessionStorage && (this.sessionStorageAvailable ? sessionStorage.setItem(this.rawValueStorageName, this.rawValue) : document.cookie = this.rawValueStorageName + "=" + this.rawValue + "; expires= ; path=/") } }, { key: "_getValueFromPersistentStorage", value: function() { return this.settings.saveValueToSessionStorage ? this.sessionStorageAvailable ? sessionStorage.getItem(this.rawValueStorageName) : this.constructor._readCookie(this.rawValueStorageName) : (D.default.warning("`_getValueFromPersistentStorage()` is called but `settings.saveValueToSessionStorage` is false. There must be an error that needs fixing.", this.settings.showWarnings), null) } }, { key: "_removeValueFromPersistentStorage", value: function() { if (this.settings.saveValueToSessionStorage)
                        if (this.sessionStorageAvailable) sessionStorage.removeItem(this.rawValueStorageName);
                        else { var e = new Date;
                            e.setTime(e.getTime() - 864e5); var t = "; expires=" + e.toUTCString();
                            document.cookie = this.rawValueStorageName + "='' ;" + t + "; path=/" } } }, { key: "_getDefaultValue", value: function(e) { var t = e.getAttribute("value"); return D.default.isNull(t) ? "" : t } }, { key: "_onFocusInAndMouseEnter", value: function(e) { if (this.isEditing = !1, !this.formulaMode && this.settings.unformatOnHover && "mouseenter" === e.type && e.altKey) this.constructor._unformatAltHovered(this);
                    else if ("focus" === e.type && (this.isFocused = !0, this.rawValueOnFocus = this.rawValue), "focus" === e.type && this.settings.unformatOnHover && this.hoveredWithAlt && this.constructor._reformatAltHovered(this), "focus" === e.type || "mouseenter" === e.type && !this.isFocused) { var t = null;
                        this.settings.emptyInputBehavior === I.options.emptyInputBehavior.focus && this.rawValue < 0 && null !== this.settings.negativeBracketsTypeOnBlur && this.settings.isNegativeSignAllowed && (t = this.constructor._removeBrackets(D.default.getElementValue(this.domElement), this.settings)); var i = this._getRawValueToFormat(this.rawValue); if ("" !== i) { var n = this.constructor._roundFormattedValueShownOnFocusOrBlur(i, this.settings, this.isFocused);
                            t = this.settings.showOnlyNumbersOnFocus === I.options.showOnlyNumbersOnFocus.onlyNumbers ? (this.settings.digitGroupSeparator = "", this.settings.currencySymbol = "", this.settings.suffixText = "", n.replace(".", this.settings.decimalCharacter)) : D.default.isNull(n) ? "" : this.constructor._addGroupSeparators(n.replace(".", this.settings.decimalCharacter), this.settings, this.isFocused, i) }
                        D.default.isNull(t) ? this.valueOnFocus = "" : this.valueOnFocus = t, this.lastVal = this.valueOnFocus; var a = this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(this.valueOnFocus, this.settings),
                            r = this.constructor._orderValueCurrencySymbolAndSuffixText(this.valueOnFocus, this.settings, !0),
                            s = a && "" !== r && this.settings.emptyInputBehavior === I.options.emptyInputBehavior.focus;
                        s && (t = r), D.default.isNull(t) || this._setElementValue(t), s && r === this.settings.currencySymbol && this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix && D.default.setElementSelection(e.target, 0) } } }, { key: "_onFocus", value: function() { this.settings.isCancellable && this._saveCancellableValue() } }, { key: "_onFocusIn", value: function(e) { this.settings.selectOnFocus ? this.select() : D.default.isNull(this.settings.caretPositionOnFocus) || D.default.setElementSelection(e.target, this._initialCaretPosition(D.default.getElementValue(this.domElement))) } }, { key: "_enterFormulaMode", value: function() { this.settings.formulaMode && (this.formulaMode = !0, D.default.setElementValue(this.domElement, "="), D.default.setElementSelection(this.domElement, 1)) } }, { key: "_exitFormulaMode", value: function() { var t = D.default.getElementValue(this.domElement);
                    t = t.replace(/^\s*=/, ""); var e = void 0; try { var i = new r.default(t, this.settings.decimalCharacter);
                        e = (new a.default).evaluate(i) } catch (e) { return this._triggerEvent(I.events.invalidFormula, this.domElement, { formula: t, aNElement: this }), this.reformat(), void(this.formulaMode = !1) }
                    this._triggerEvent(I.events.validFormula, this.domElement, { formula: t, result: e, aNElement: this }), this.set(e), this.formulaMode = !1 } }, { key: "_acceptNonPrintableKeysInFormulaMode", value: function() { return this.eventKey === v.default.keyName.Backspace || this.eventKey === v.default.keyName.Delete || this.eventKey === v.default.keyName.LeftArrow || this.eventKey === v.default.keyName.RightArrow || this.eventKey === v.default.keyName.Home || this.eventKey === v.default.keyName.End } }, { key: "_onKeydown", value: function(e) { if (this.formatted = !1, this.isEditing = !0, this.formulaMode || this.isFocused || !this.settings.unformatOnHover || !e.altKey || this.domElement !== D.default.getHoveredElement()) { if (this._updateEventKeyInfo(e), this.initialValueOnKeydown = D.default.getElementValue(e.target), this.initialRawValueOnKeydown = this.rawValue, this.keydownEventCounter += 1, 1 === this.keydownEventCounter && (this.initialRawValueOnFirstKeydown = this.rawValue), this.formulaMode) { if (this.eventKey === v.default.keyName.Esc) return this.formulaMode = !1, void this.reformat(); if (this.eventKey === v.default.keyName.Enter) return void this._exitFormulaMode(); if (this._acceptNonPrintableKeysInFormulaMode()) return } else if (this.eventKey === v.default.keyName.Equal) return void this._enterFormulaMode(); if (this.domElement.readOnly || this.settings.readOnly || this.domElement.disabled) this.processed = !0;
                        else { this.eventKey === v.default.keyName.Esc && (e.preventDefault(), this.settings.isCancellable && this.rawValue !== this.savedCancellableValue && (this.set(this.savedCancellableValue), this._triggerEvent(I.events.native.input, e.target)), this.select()); var t = D.default.getElementValue(e.target);
                            this.eventKey === v.default.keyName.Enter && this.rawValue !== this.rawValueOnFocus && (this._triggerEvent(I.events.native.change, e.target), this.valueOnFocus = t, this.rawValueOnFocus = this.rawValue, this.settings.isCancellable && this._saveCancellableValue()), this._updateInternalProperties(e), this._processNonPrintableKeysAndShortcuts(e) ? this.processed = !0 : this.eventKey !== v.default.keyName.Backspace && this.eventKey !== v.default.keyName.Delete || (this._processCharacterDeletion(), this.processed = !0, this._formatValue(e), (t = D.default.getElementValue(e.target)) !== this.lastVal && this.throwInput && (this._triggerEvent(I.events.native.input, e.target), e.preventDefault()), this.lastVal = t, this.throwInput = !0) } } else this.constructor._unformatAltHovered(this) } }, { key: "_onKeypress", value: function(e) { if (this.formulaMode) { if (this._acceptNonPrintableKeysInFormulaMode()) return; if (this.settings.formulaChars.test(this.eventKey)) return;
                        e.preventDefault() } else if (this.eventKey !== v.default.keyName.Insert) { var t = this.processed; if (this._updateInternalProperties(e), !this._processNonPrintableKeysAndShortcuts(e))
                            if (t) e.preventDefault();
                            else { if (this._processCharacterInsertion()) { this._formatValue(e); var i = D.default.getElementValue(e.target); if (i !== this.lastVal && this.throwInput) this._triggerEvent(I.events.native.input, e.target), e.preventDefault();
                                    else { if ((this.eventKey === this.settings.decimalCharacter || this.eventKey === this.settings.decimalCharacterAlternative) && D.default.getElementSelection(e.target).start === D.default.getElementSelection(e.target).end && D.default.getElementSelection(e.target).start === i.indexOf(this.settings.decimalCharacter)) { var n = D.default.getElementSelection(e.target).start + 1;
                                            D.default.setElementSelection(e.target, n) }
                                        e.preventDefault() } return this.lastVal = D.default.getElementValue(e.target), void(this.throwInput = !0) }
                                e.preventDefault() } } } }, { key: "_onKeyup", value: function(e) { this.isEditing = !1; var t = 1 < this.keydownEventCounter; if (this.keydownEventCounter = 0, !this.formulaMode)
                        if (this.settings.isCancellable && this.eventKey === v.default.keyName.Esc) e.preventDefault();
                        else { if (this.eventKey === v.default.keyName.Z || this.eventKey === v.default.keyName.z) { if (e.ctrlKey && e.shiftKey) return e.preventDefault(), this._historyTableRedo(), void(this.onGoingRedo = !0); if (e.ctrlKey && !e.shiftKey) { if (!this.onGoingRedo) return e.preventDefault(), void this._historyTableUndo();
                                    this.onGoingRedo = !1 } } if (this.onGoingRedo && (e.ctrlKey || e.shiftKey) && (this.onGoingRedo = !1), (e.ctrlKey || e.metaKey) && this.eventKey === v.default.keyName.x) { var i = D.default.getElementSelection(this.domElement).start,
                                    n = this.constructor._toNumericValue(D.default.getElementValue(e.target), this.settings);
                                this.set(n), this._setCaretPosition(i) } if (this.eventKey === v.default.keyName.Alt && this.settings.unformatOnHover && this.hoveredWithAlt) this.constructor._reformatAltHovered(this);
                            else { this._updateInternalProperties(e); var a = this._processNonPrintableKeysAndShortcuts(e);
                                delete this.valuePartsBeforePaste; var r = D.default.getElementValue(e.target); if (!a && (t || "" !== r) && (r === this.settings.currencySymbol ? this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix ? D.default.setElementSelection(e.target, 0) : D.default.setElementSelection(e.target, this.settings.currencySymbol.length) : this.eventKey === v.default.keyName.Tab && D.default.setElementSelection(e.target, 0, r.length), (r === this.settings.suffixText || "" === this.rawValue && "" !== this.settings.currencySymbol && "" !== this.settings.suffixText) && D.default.setElementSelection(e.target, 0), null !== this.settings.decimalPlacesShownOnFocus && this._saveValueToPersistentStorage(), this.formatted || this._formatValue(e), this._saveRawValueForAndroid(), (t && r !== this.initialRawValueOnFirstKeydown || r !== this.initialValueOnKeydown) && this._triggerEvent(I.events.formatted, e.target, { oldValue: this.initialValueOnKeydown, newValue: r, oldRawValue: this.initialRawValueOnKeydown, newRawValue: this.rawValue, isPristine: this.isPristine(!1), error: null, aNElement: this }), 1 < this.historyTable.length)) { var s = D.default.getElementSelection(this.domElement);
                                    this.selectionStart = s.start, this.selectionEnd = s.end, this.historyTable[this.historyTableIndex].start = this.selectionStart, this.historyTable[this.historyTableIndex].end = this.selectionEnd } } } } }, { key: "_saveRawValueForAndroid", value: function() { if (this.eventKey === v.default.keyName.AndroidDefault) { var e = this.constructor._stripAllNonNumberCharactersExceptCustomDecimalChar(this.getFormatted(), this.settings, !0, this.isFocused);
                        e = this.constructor._convertToNumericString(e, this.settings), this._setRawValue(e) } } }, { key: "_onFocusOutAndMouseLeave", value: function(e) { if (this.isEditing = !1, "mouseleave" !== e.type || !this.formulaMode)
                        if (this.settings.unformatOnHover && "mouseleave" === e.type && this.hoveredWithAlt) this.constructor._reformatAltHovered(this);
                        else if ("mouseleave" === e.type && !this.isFocused || "blur" === e.type) { "blur" === e.type && this.formulaMode && this._exitFormulaMode(), this._saveValueToPersistentStorage(), this.settings.showOnlyNumbersOnFocus === I.options.showOnlyNumbersOnFocus.onlyNumbers && (this.settings.digitGroupSeparator = this.originalDigitGroupSeparator, this.settings.currencySymbol = this.originalCurrencySymbol, this.settings.suffixText = this.originalSuffixText); var t = this._getRawValueToFormat(this.rawValue),
                            i = D.default.isNull(t),
                            n = this.constructor._checkIfInRangeWithOverrideOption(t, this.settings),
                            a = S(n, 2),
                            r = a[0],
                            s = a[1],
                            o = !1; if ("" === t || i || (r || this._triggerEvent(I.events.minRangeExceeded, this.domElement), s || this._triggerEvent(I.events.maxRangeExceeded, this.domElement), this.settings.valuesToStrings && this._checkValuesToStrings(t) && (this._setElementValue(this.settings.valuesToStrings[t]), o = !0)), !o) { var l = void 0; if (l = i || "" === t ? t : String(t), "" === t || i) { if ("" === t) switch (this.settings.emptyInputBehavior) {
                                    case I.options.emptyInputBehavior.zero:
                                        this._setRawValue("0"), l = this.constructor._roundValue("0", this.settings, 0); break;
                                    case I.options.emptyInputBehavior.min:
                                        this._setRawValue(this.settings.minimumValue), l = this.constructor._roundFormattedValueShownOnFocusOrBlur(this.settings.minimumValue, this.settings, this.isFocused); break;
                                    case I.options.emptyInputBehavior.max:
                                        this._setRawValue(this.settings.maximumValue), l = this.constructor._roundFormattedValueShownOnFocusOrBlur(this.settings.maximumValue, this.settings, this.isFocused); break;
                                    default:
                                        D.default.isNumber(this.settings.emptyInputBehavior) && (this._setRawValue(this.settings.emptyInputBehavior), l = this.constructor._roundFormattedValueShownOnFocusOrBlur(this.settings.emptyInputBehavior, this.settings, this.isFocused)) } } else r && s && !this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(t, this.settings) ? (l = this._modifyNegativeSignAndDecimalCharacterForRawValue(l), this.settings.divisorWhenUnfocused && !D.default.isNull(l) && (l = (l /= this.settings.divisorWhenUnfocused).toString()), l = this.constructor._roundFormattedValueShownOnBlur(l, this.settings), l = this.constructor._modifyNegativeSignAndDecimalCharacterForFormattedValue(l, this.settings)) : (r || this._triggerEvent(I.events.minRangeExceeded, this.domElement), s || this._triggerEvent(I.events.maxRangeExceeded, this.domElement)); var u = this.constructor._orderValueCurrencySymbolAndSuffixText(l, this.settings, !1);
                            this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(l, this.settings) || i && this.settings.emptyInputBehavior === I.options.emptyInputBehavior.null || (u = this.constructor._addGroupSeparators(l, this.settings, !1, t)), u === t && "" !== t && this.settings.allowDecimalPadding !== I.options.allowDecimalPadding.never && this.settings.allowDecimalPadding !== I.options.allowDecimalPadding.floats || (this.settings.symbolWhenUnfocused && "" !== t && null !== t && (u = "" + u + this.settings.symbolWhenUnfocused), this._setElementValue(u)) } "blur" === e.type && this._onBlur(e) } } }, { key: "_onPaste", value: function(e) { if (e.preventDefault(), !(this.settings.readOnly || this.domElement.readOnly || this.domElement.disabled)) { var t, i = void 0;
                        window.clipboardData && window.clipboardData.getData ? i = window.clipboardData.getData("Text") : e.clipboardData && e.clipboardData.getData ? i = e.clipboardData.getData("text/plain") : D.default.throwError("Unable to retrieve the pasted value. Please use a modern browser (ie. Firefox or Chromium)."), t = e.target.tagName ? e.target : e.explicitOriginalTarget; var n = D.default.getElementValue(t),
                            a = t.selectionStart || 0,
                            r = t.selectionEnd || 0,
                            s = r - a; if (s === n.length) { var o = this._preparePastedText(i),
                                l = D.default.arabicToLatinNumbers(o, !1, !1, !1); return "." === l || "" === l || "." !== l && !D.default.isNumber(l) ? (this.formatted = !0, void(this.settings.onInvalidPaste === I.options.onInvalidPaste.error && D.default.throwError("The pasted value '" + i + "' is not a valid paste content."))) : (this.set(l), this.formatted = !0, void this._triggerEvent(I.events.native.input, t)) } var u = D.default.isNegativeStrict(i, this.settings.negativeSignCharacter);
                        u && (i = i.slice(1, i.length)); var c, h = this._preparePastedText(i); if ("." !== (c = "." === h ? "." : D.default.arabicToLatinNumbers(h, !1, !1, !1)) && (!D.default.isNumber(c) || "" === c)) return this.formatted = !0, void(this.settings.onInvalidPaste === I.options.onInvalidPaste.error && D.default.throwError("The pasted value '" + i + "' is not a valid paste content.")); var d, m = void 0,
                            f = D.default.isNegativeStrict(this.getNumericString(), this.settings.negativeSignCharacter),
                            g = void 0;
                        d = !(!u || f) && (f = !0); var v = n.slice(0, a),
                            p = n.slice(r, n.length);
                        g = a !== r ? this._preparePastedText(v + p) : this._preparePastedText(n), f && (g = D.default.setRawNegativeSign(g)), m = D.default.convertCharacterCountToIndexPosition(D.default.countNumberCharactersOnTheCaretLeftSide(n, a, this.settings.decimalCharacter)), d && m++; var y = g.slice(0, m),
                            S = g.slice(m, g.length),
                            b = !1; "." === c && (D.default.contains(y, ".") && (b = !0, y = y.replace(".", "")), S = S.replace(".", "")); var w = !1; switch ("" === y && "-" === S && (y = "-", w = !(S = "")), this.settings.onInvalidPaste) {
                            case I.options.onInvalidPaste.truncate:
                            case I.options.onInvalidPaste.replace:
                                for (var P = D.default.parseStr(this.settings.minimumValue), O = D.default.parseStr(this.settings.maximumValue), k = g, N = 0, E = y; N < c.length && (g = (E += c[N]) + S, this.constructor._checkIfInRange(g, P, O));) k = g, N++; if (m += N, w && m++, this.settings.onInvalidPaste === I.options.onInvalidPaste.truncate) { g = k, b && m--; break } for (var _ = m, C = k.length; N < c.length && _ < C;)
                                    if ("." !== k[_]) { if (g = D.default.replaceCharAt(k, _, c[N]), !this.constructor._checkIfInRange(g, P, O)) break;
                                        k = g, N++, _++ } else _++;
                                m = _, b && m--, g = k; break;
                            case I.options.onInvalidPaste.error:
                            case I.options.onInvalidPaste.ignore:
                            case I.options.onInvalidPaste.clamp:
                            default:
                                if (g = "" + y + c + S, a === r) m = D.default.convertCharacterCountToIndexPosition(D.default.countNumberCharactersOnTheCaretLeftSide(n, a, this.settings.decimalCharacter)) + c.length;
                                else if ("" === S) m = D.default.convertCharacterCountToIndexPosition(D.default.countNumberCharactersOnTheCaretLeftSide(n, a, this.settings.decimalCharacter)) + c.length, w && m++;
                                else { var F = D.default.convertCharacterCountToIndexPosition(D.default.countNumberCharactersOnTheCaretLeftSide(n, r, this.settings.decimalCharacter)),
                                        x = D.default.getElementValue(t).slice(a, r);
                                    m = F - s + D.default.countCharInText(this.settings.digitGroupSeparator, x) + c.length }
                                d && m++, b && m-- } if (D.default.isNumber(g) && "" !== g) { var V = !1,
                                T = !1; try { this.set(g), V = !0 } catch (e) { var A = void 0; switch (this.settings.onInvalidPaste) {
                                    case I.options.onInvalidPaste.clamp:
                                        A = D.default.clampToRangeLimits(g, this.settings); try { this.set(A) } catch (e) { D.default.throwError("Fatal error: Unable to set the clamped value '" + A + "'.") }
                                        V = T = !0, g = A; break;
                                    case I.options.onInvalidPaste.error:
                                    case I.options.onInvalidPaste.truncate:
                                    case I.options.onInvalidPaste.replace:
                                        D.default.throwError("The pasted value '" + i + "' results in a value '" + g + "' that is outside of the minimum [" + this.settings.minimumValue + "] and maximum [" + this.settings.maximumValue + "] value range.");
                                    case I.options.onInvalidPaste.ignore:
                                    default:
                                        return } } var L = D.default.getElementValue(t),
                                B = void 0; if (V) switch (this.settings.onInvalidPaste) {
                                case I.options.onInvalidPaste.clamp:
                                    if (T) { this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix ? D.default.setElementSelection(t, L.length - this.settings.currencySymbol.length) : D.default.setElementSelection(t, L.length); break }
                                case I.options.onInvalidPaste.error:
                                case I.options.onInvalidPaste.ignore:
                                case I.options.onInvalidPaste.truncate:
                                case I.options.onInvalidPaste.replace:
                                default:
                                    B = D.default.findCaretPositionInFormattedNumber(g, m, L, this.settings.decimalCharacter), D.default.setElementSelection(t, B) }
                            V && n !== L && this._triggerEvent(I.events.native.input, t) } else this.settings.onInvalidPaste === I.options.onInvalidPaste.error && D.default.throwError("The pasted value '" + i + "' would result into an invalid content '" + g + "'.") } } }, { key: "_onBlur", value: function(e) { this.isFocused = !1, this.isEditing = !1, this.rawValue !== this.rawValueOnFocus && this._triggerEvent(I.events.native.change, e.target), this.rawValueOnFocus = void 0 } }, { key: "_onWheel", value: function(e) { this.formulaMode || this.settings.readOnly || this.domElement.readOnly || this.domElement.disabled || this.settings.modifyValueOnWheel && (this.settings.wheelOn === I.options.wheelOn.focus ? this.isFocused ? e.shiftKey || this.wheelAction(e) : e.shiftKey && this.wheelAction(e) : this.settings.wheelOn === I.options.wheelOn.hover ? e.shiftKey ? (e.preventDefault(), window.scrollBy(0, D.default.isNegativeStrict(String(e.deltaY)) ? -50 : 50)) : this.wheelAction(e) : D.default.throwError("Unknown `wheelOn` option.")) } }, { key: "wheelAction", value: function(e) { this.isWheelEvent = !0; var t = e.target.selectionStart || 0,
                        i = e.target.selectionEnd || 0,
                        n = this.rawValue,
                        a = void 0; if (D.default.isUndefinedOrNullOrEmpty(n) ? 0 < this.settings.minimumValue || this.settings.maximumValue < 0 ? D.default.isWheelUpEvent(e) ? a = this.settings.minimumValue : D.default.isWheelDownEvent(e) ? a = this.settings.maximumValue : D.default.throwError("The event is not a 'wheel' event.") : a = 0 : a = n, a = +a, D.default.isNumber(this.settings.wheelStep)) { var r = +this.settings.wheelStep;
                        D.default.isWheelUpEvent(e) ? a += r : D.default.isWheelDownEvent(e) && (a -= r) } else D.default.isWheelUpEvent(e) ? a = D.default.addAndRoundToNearestAuto(a, this.settings.decimalPlacesRawValue) : D.default.isWheelDownEvent(e) && (a = D.default.subtractAndRoundToNearestAuto(a, this.settings.decimalPlacesRawValue));
                    (a = D.default.clampToRangeLimits(a, this.settings)) !== +n && (this.set(a), this._triggerEvent(I.events.native.input, e.target)), e.preventDefault(), this._setSelection(t, i), this.isWheelEvent = !1 } }, { key: "_onDrop", value: function(e) { if (!this.formulaMode) { var t;
                        this.isDropEvent = !0, e.preventDefault(), t = D.default.isIE11() ? "text" : "text/plain"; var i = e.dataTransfer.getData(t),
                            n = this.unformatOther(i);
                        this.set(n), this.isDropEvent = !1 } } }, { key: "_onFormSubmit", value: function() { var t = this; return this._getFormAutoNumericChildren(this.parentForm).map(function(e) { return t.constructor.getAutoNumericElement(e) }).forEach(function(e) { return e._unformatOnSubmit() }), !0 } }, { key: "_onFormReset", value: function() { var i = this;
                    this._getFormAutoNumericChildren(this.parentForm).map(function(e) { return i.constructor.getAutoNumericElement(e) }).forEach(function(e) { var t = i._getDefaultValue(e.node());
                        setTimeout(function() { return e.set(t) }, 0) }) } }, { key: "_unformatOnSubmit", value: function() { this.settings.unformatOnSubmit && this._setElementValue(this.rawValue) } }, { key: "_onKeydownGlobal", value: function(e) { if (D.default.character(e) === v.default.keyName.Alt) { var t = D.default.getHoveredElement(); if (I.isManagedByAutoNumeric(t)) { var i = I.getAutoNumericElement(t);!i.formulaMode && i.settings.unformatOnHover && this.constructor._unformatAltHovered(i) } } } }, { key: "_onKeyupGlobal", value: function(e) { if (D.default.character(e) === v.default.keyName.Alt) { var t = D.default.getHoveredElement(); if (I.isManagedByAutoNumeric(t)) { var i = I.getAutoNumericElement(t); if (i.formulaMode || !i.settings.unformatOnHover) return;
                            this.constructor._reformatAltHovered(i) } } } }, { key: "_isElementTagSupported", value: function() { return D.default.isElement(this.domElement) || D.default.throwError("The DOM element is not valid, " + this.domElement + " given."), D.default.isInArray(this.domElement.tagName.toLowerCase(), this.allowedTagList) } }, { key: "_isInputElement", value: function() { return "input" === this.domElement.tagName.toLowerCase() } }, { key: "_isInputTypeSupported", value: function() { return "text" === this.domElement.type || "hidden" === this.domElement.type || "tel" === this.domElement.type || D.default.isUndefinedOrNullOrEmpty(this.domElement.type) } }, { key: "_checkElement", value: function() { var e = this.domElement.tagName.toLowerCase();
                    this._isElementTagSupported() || D.default.throwError("The <" + e + "> tag is not supported by autoNumeric"), this._isInputElement() ? (this._isInputTypeSupported() || D.default.throwError('The input type "' + this.domElement.type + '" is not supported by autoNumeric'), this.isInputElement = !0) : (this.isInputElement = !1, this.isContentEditable = this.domElement.hasAttribute("contenteditable") && "true" === this.domElement.getAttribute("contenteditable")) } }, { key: "_formatDefaultValueOnPageLoad", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                        t = !0,
                        i = void 0; if (D.default.isNull(e) ? (i = D.default.getElementValue(this.domElement).trim(), this.domElement.setAttribute("value", i)) : i = e, this.isInputElement || this.isContentEditable) { var n = this.constructor._toNumericValue(i, this.settings); if (this.domElement.hasAttribute("value") && "" !== this.domElement.getAttribute("value")) { if (null !== this.settings.defaultValueOverride && this.settings.defaultValueOverride.toString() !== i || null === this.settings.defaultValueOverride && "" !== i && i !== this.domElement.getAttribute("value") || "" !== i && "hidden" === this.domElement.getAttribute("type") && !D.default.isNumber(n)) { if (this.settings.saveValueToSessionStorage && (null !== this.settings.decimalPlacesShownOnFocus || this.settings.divisorWhenUnfocused) && this._setRawValue(this._getValueFromPersistentStorage()), !this.settings.saveValueToSessionStorage) { var a = this.constructor._removeBrackets(i, this.settings);
                                    (this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.suffix || this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.prefix && this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix) && "" !== this.settings.negativeSignCharacter && D.default.isNegative(i, this.settings.negativeSignCharacter) ? this._setRawValue("-" + this.constructor._stripAllNonNumberCharacters(a, this.settings, !0, this.isFocused)) : this._setRawValue(this.constructor._stripAllNonNumberCharacters(a, this.settings, !0, this.isFocused)) }
                                t = !1 } } else isNaN(Number(n)) || 1 / 0 === n ? D.default.throwError("The value [" + i + "] used in the input is not a valid value autoNumeric can work with.") : (this.set(n), t = !1); if ("" === i) switch (this.settings.emptyInputBehavior) {
                            case I.options.emptyInputBehavior.focus:
                            case I.options.emptyInputBehavior.null:
                            case I.options.emptyInputBehavior.press:
                                break;
                            case I.options.emptyInputBehavior.always:
                                this._setElementValue(this.settings.currencySymbol); break;
                            case I.options.emptyInputBehavior.min:
                                this.set(this.settings.minimumValue); break;
                            case I.options.emptyInputBehavior.max:
                                this.set(this.settings.maximumValue); break;
                            case I.options.emptyInputBehavior.zero:
                                this.set("0"); break;
                            default:
                                this.set(this.settings.emptyInputBehavior) } else t && i === this.domElement.getAttribute("value") && this.set(i) } else null !== this.settings.defaultValueOverride && this.settings.defaultValueOverride !== i || this.set(i) } }, { key: "_calculateVMinAndVMaxIntegerSizes", value: function() { var e = this.settings.maximumValue.toString().split("."),
                        t = S(e, 1)[0],
                        i = this.settings.minimumValue || 0 === this.settings.minimumValue ? this.settings.minimumValue.toString().split(".") : [],
                        n = S(i, 1)[0];
                    t = t.replace(this.settings.negativeSignCharacter, ""), n = n.replace(this.settings.negativeSignCharacter, ""), this.settings.mIntPos = Math.max(t.length, 1), this.settings.mIntNeg = Math.max(n.length, 1) } }, { key: "_calculateValuesToStringsKeys", value: function() { this.settings.valuesToStrings ? this.valuesToStringsKeys = Object.keys(this.settings.valuesToStrings) : this.valuesToStringsKeys = [] } }, { key: "_transformOptionsValuesToDefaultTypes", value: function() { for (var e in this.settings)
                        if (this.settings.hasOwnProperty(e)) { var t = this.settings[e]; "true" !== t && "false" !== t || (this.settings[e] = "true" === t), "number" == typeof t && (this.settings[e] = t.toString()) } } }, { key: "_setSettings", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];!t && D.default.isNull(e) || this.constructor._convertOldOptionsToNewOnes(e), t ? ("decimalPlacesRawValue" in e && (this.settings.originalDecimalPlacesRawValue = e.decimalPlacesRawValue), "decimalPlaces" in e && (this.settings.originalDecimalPlaces = e.decimalPlaces), this.constructor._calculateDecimalPlacesOnUpdate(e, this.settings), this._mergeSettings(e)) : (this.settings = {}, this._mergeSettings(this.constructor.getDefaultConfig(), this.domElement.dataset, e, { rawValue: this.defaultRawValue }), this.caretFix = !1, this.throwInput = !0, this.allowedTagList = v.default.allowedTagList, this.runOnce = !1, this.hoveredWithAlt = !1), this._transformOptionsValuesToDefaultTypes(), this._runCallbacksFoundInTheSettingsObject(), this.constructor._correctNegativePositiveSignPlacementOption(this.settings), this.constructor._correctCaretPositionOnFocusAndSelectOnFocusOptions(this.settings), this.constructor._setNegativePositiveSignPermissions(this.settings), t || (D.default.isNull(e) || !e.decimalPlaces ? this.settings.originalDecimalPlaces = null : this.settings.originalDecimalPlaces = e.decimalPlaces, this.settings.originalDecimalPlacesRawValue = this.settings.decimalPlacesRawValue, this.constructor._calculateDecimalPlacesOnInit(this.settings)), this._calculateVMinAndVMaxIntegerSizes(), this._setTrailingNegativeSignInfo(), this.regex = {}, this.constructor._cachesUsualRegularExpressions(this.settings, this.regex), this.constructor._setBrackets(this.settings), this._calculateValuesToStringsKeys(), D.default.isEmptyObj(this.settings) && D.default.throwError("Unable to set the settings, those are invalid ; an empty object was given."), this.constructor.validate(this.settings, !1, e), this._keepAnOriginalSettingsCopy() } }, { key: "_preparePastedText", value: function(e) { return this.constructor._stripAllNonNumberCharacters(e, this.settings, !0, this.isFocused) } }, { key: "_updateInternalProperties", value: function() { this.selection = D.default.getElementSelection(this.domElement), this.processed = !1 } }, { key: "_updateEventKeyInfo", value: function(e) { this.eventKey = D.default.character(e) } }, { key: "_saveCancellableValue", value: function() { this.savedCancellableValue = this.rawValue } }, { key: "_setSelection", value: function(e, t) { e = Math.max(e, 0), t = Math.min(t, D.default.getElementValue(this.domElement).length), this.selection = { start: e, end: t, length: t - e }, D.default.setElementSelection(this.domElement, e, t) } }, { key: "_setCaretPosition", value: function(e) { this._setSelection(e, e) } }, { key: "_getLeftAndRightPartAroundTheSelection", value: function() { var e = D.default.getElementValue(this.domElement); return [e.substring(0, this.selection.start), e.substring(this.selection.end, e.length)] } }, { key: "_getUnformattedLeftAndRightPartAroundTheSelection", value: function() { var e = this._getLeftAndRightPartAroundTheSelection(),
                        t = S(e, 2),
                        i = t[0],
                        n = t[1]; if ("" === i && "" === n) return ["", ""]; var a = !0; return this.eventKey !== v.default.keyName.Hyphen && this.eventKey !== v.default.keyName.Minus || 0 !== Number(i) || (a = !1), this.isTrailingNegative && (D.default.isNegative(n, this.settings.negativeSignCharacter) && !D.default.isNegative(i, this.settings.negativeSignCharacter) || "" === n && D.default.isNegative(i, this.settings.negativeSignCharacter, !0)) && (i = i.replace(this.settings.negativeSignCharacter, ""), n = n.replace(this.settings.negativeSignCharacter, ""), i = i.replace("-", ""), n = n.replace("-", ""), i = "-" + i), [i = I._stripAllNonNumberCharactersExceptCustomDecimalChar(i, this.settings, a, this.isFocused), n = I._stripAllNonNumberCharactersExceptCustomDecimalChar(n, this.settings, !1, this.isFocused)] } }, { key: "_normalizeParts", value: function(e, t) { var i = !0;
                    this.eventKey !== v.default.keyName.Hyphen && this.eventKey !== v.default.keyName.Minus || 0 !== Number(e) || (i = !1), this.isTrailingNegative && D.default.isNegative(t, this.settings.negativeSignCharacter) && !D.default.isNegative(e, this.settings.negativeSignCharacter) && (e = "-" + e, t = t.replace(this.settings.negativeSignCharacter, "")), e = I._stripAllNonNumberCharactersExceptCustomDecimalChar(e, this.settings, i, this.isFocused), t = I._stripAllNonNumberCharactersExceptCustomDecimalChar(t, this.settings, !1, this.isFocused), this.settings.leadingZero !== I.options.leadingZero.deny || this.eventKey !== v.default.keyName.num0 && this.eventKey !== v.default.keyName.numpad0 || 0 !== Number(e) || D.default.contains(e, this.settings.decimalCharacter) || "" === t || (e = e.substring(0, e.length - 1)); var n = e + t; if (this.settings.decimalCharacter) { var a = n.match(new RegExp("^" + this.regex.aNegRegAutoStrip + "\\" + this.settings.decimalCharacter));
                        a && (n = (e = e.replace(a[1], a[1] + "0")) + t) } return [e, t, n] } }, { key: "_setValueParts", value: function(e, t) { var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                        n = this._normalizeParts(e, t),
                        a = S(n, 3),
                        r = a[0],
                        s = a[1],
                        o = a[2],
                        l = I._checkIfInRangeWithOverrideOption(o, this.settings),
                        u = S(l, 2),
                        c = u[0],
                        h = u[1]; if (c && h) { var d = I._truncateDecimalPlaces(o, this.settings, i, this.settings.decimalPlacesRawValue).replace(this.settings.decimalCharacter, "."); if ("" === d || d === this.settings.negativeSignCharacter) { var m = void 0; switch (this.settings.emptyInputBehavior) {
                                case I.options.emptyInputBehavior.focus:
                                case I.options.emptyInputBehavior.press:
                                case I.options.emptyInputBehavior.always:
                                    m = ""; break;
                                case I.options.emptyInputBehavior.min:
                                    m = this.settings.minimumValue; break;
                                case I.options.emptyInputBehavior.max:
                                    m = this.settings.maximumValue; break;
                                case I.options.emptyInputBehavior.zero:
                                    m = "0"; break;
                                case I.options.emptyInputBehavior.null:
                                    m = null; break;
                                default:
                                    m = this.settings.emptyInputBehavior }
                            this._setRawValue(m) } else this._setRawValue(this._trimLeadingAndTrailingZeros(d)); var f = I._truncateDecimalPlaces(o, this.settings, i, this.settings.decimalPlacesShownOnFocus),
                            g = r.length; return g > f.length && (g = f.length), 1 === g && "0" === r && this.settings.leadingZero === I.options.leadingZero.deny && (g = "" === s || "0" === r && "" !== s ? 1 : 0), this._setElementValue(f, !1), this._setCaretPosition(g), !0 } return c ? h || this._triggerEvent(I.events.maxRangeExceeded, this.domElement) : this._triggerEvent(I.events.minRangeExceeded, this.domElement), !1 } }, { key: "_getSignPosition", value: function() { var e = void 0; if (this.settings.currencySymbol) { var t = this.settings.currencySymbol.length,
                            i = D.default.getElementValue(this.domElement); if (this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.prefix) e = this.settings.negativeSignCharacter && i && i.charAt(0) === this.settings.negativeSignCharacter ? [1, t + 1] : [0, t];
                        else { var n = i.length;
                            e = [n - t, n] } } else e = [1e3, -1]; return e } }, { key: "_expandSelectionOnSign", value: function() { var e = this._getSignPosition(),
                        t = S(e, 2),
                        i = t[0],
                        n = t[1],
                        a = this.selection;
                    a.start < n && a.end > i && ((a.start < i || a.end > n) && D.default.getElementValue(this.domElement).substring(Math.max(a.start, i), Math.min(a.end, n)).match(/^\s*$/) ? a.start < i ? this._setSelection(a.start, i) : this._setSelection(n, a.end) : this._setSelection(Math.min(a.start, i), Math.max(a.end, n))) } }, { key: "_checkPaste", value: function() { if (!this.formatted && !D.default.isUndefined(this.valuePartsBeforePaste)) { var e = this.valuePartsBeforePaste,
                            t = this._getLeftAndRightPartAroundTheSelection(),
                            i = S(t, 2),
                            n = i[0],
                            a = i[1];
                        delete this.valuePartsBeforePaste; var r = n.substr(0, e[0].length) + I._stripAllNonNumberCharactersExceptCustomDecimalChar(n.substr(e[0].length), this.settings, !0, this.isFocused);
                        this._setValueParts(r, a, !0) || (this._setElementValue(e.join(""), !1), this._setCaretPosition(e[0].length)) } } }, { key: "_processNonPrintableKeysAndShortcuts", value: function(e) { if ((e.ctrlKey || e.metaKey) && "keyup" === e.type && !D.default.isUndefined(this.valuePartsBeforePaste) || e.shiftKey && this.eventKey === v.default.keyName.Insert) return this._checkPaste(), !1; if (this.constructor._shouldSkipEventKey(this.eventKey)) return !0; if ((e.ctrlKey || e.metaKey) && this.eventKey === v.default.keyName.a) return this.settings.selectNumberOnly && (e.preventDefault(), this.selectNumber()), !0; if ((e.ctrlKey || e.metaKey) && (this.eventKey === v.default.keyName.c || this.eventKey === v.default.keyName.v || this.eventKey === v.default.keyName.x)) return "keydown" === e.type && this._expandSelectionOnSign(), this.eventKey !== v.default.keyName.v && this.eventKey !== v.default.keyName.Insert || ("keydown" === e.type || "keypress" === e.type ? D.default.isUndefined(this.valuePartsBeforePaste) && (this.valuePartsBeforePaste = this._getLeftAndRightPartAroundTheSelection()) : this._checkPaste()), "keydown" === e.type || "keypress" === e.type || this.eventKey === v.default.keyName.c; if (e.ctrlKey || e.metaKey) return !(this.eventKey === v.default.keyName.Z || this.eventKey === v.default.keyName.z); if (this.eventKey !== v.default.keyName.LeftArrow && this.eventKey !== v.default.keyName.RightArrow) return D.default.isInArray(this.eventKey, v.default.keyName._directionKeys); if ("keydown" === e.type && !e.shiftKey) { var t = D.default.getElementValue(this.domElement);
                        this.eventKey !== v.default.keyName.LeftArrow || t.charAt(this.selection.start - 2) !== this.settings.digitGroupSeparator && t.charAt(this.selection.start - 2) !== this.settings.decimalCharacter ? this.eventKey !== v.default.keyName.RightArrow || t.charAt(this.selection.start + 1) !== this.settings.digitGroupSeparator && t.charAt(this.selection.start + 1) !== this.settings.decimalCharacter || this._setCaretPosition(this.selection.start + 1) : this._setCaretPosition(this.selection.start - 1) } return !0 } }, { key: "_processCharacterDeletionIfTrailingNegativeSign", value: function(e) { var t = S(e, 2),
                        i = t[0],
                        n = t[1],
                        a = D.default.getElementValue(this.domElement),
                        r = D.default.isNegative(a, this.settings.negativeSignCharacter); if (this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.suffix && (this.eventKey === v.default.keyName.Backspace ? (this.caretFix = this.selection.start >= a.indexOf(this.settings.suffixText) && "" !== this.settings.suffixText, "-" === a.charAt(this.selection.start - 1) ? i = i.substring(1) : this.selection.start <= a.length - this.settings.suffixText.length && (i = i.substring(0, i.length - 1))) : (this.caretFix = this.selection.start >= a.indexOf(this.settings.suffixText) && "" !== this.settings.suffixText, this.selection.start >= a.indexOf(this.settings.currencySymbol) + this.settings.currencySymbol.length && (n = n.substring(1, n.length)), D.default.isNegative(i, this.settings.negativeSignCharacter) && "-" === a.charAt(this.selection.start) && (i = i.substring(1)))), this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix) switch (this.settings.negativePositiveSignPlacement) {
                        case I.options.negativePositiveSignPlacement.left:
                            this.caretFix = this.selection.start >= a.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length, this.eventKey === v.default.keyName.Backspace ? this.selection.start === a.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length && r ? i = i.substring(1) : "-" !== i && (this.selection.start <= a.indexOf(this.settings.negativeSignCharacter) || !r) && (i = i.substring(0, i.length - 1)) : ("-" === i[0] && (n = n.substring(1)), this.selection.start === a.indexOf(this.settings.negativeSignCharacter) && r && (i = i.substring(1))); break;
                        case I.options.negativePositiveSignPlacement.right:
                            this.caretFix = this.selection.start >= a.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length, this.eventKey === v.default.keyName.Backspace ? this.selection.start === a.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length ? i = i.substring(1) : "-" !== i && this.selection.start <= a.indexOf(this.settings.negativeSignCharacter) - this.settings.currencySymbol.length ? i = i.substring(0, i.length - 1) : "" === i || r || (i = i.substring(0, i.length - 1)) : (this.caretFix = this.selection.start >= a.indexOf(this.settings.currencySymbol) && "" !== this.settings.currencySymbol, this.selection.start === a.indexOf(this.settings.negativeSignCharacter) && (i = i.substring(1)), n = n.substring(1)) }
                    return [i, n] } }, { key: "_processCharacterDeletion", value: function() { var e = void 0,
                        t = void 0; if (this.selection.length) { this._expandSelectionOnSign(); var i = this._getUnformattedLeftAndRightPartAroundTheSelection(),
                            n = S(i, 2);
                        e = n[0], t = n[1] } else { var a = this._getUnformattedLeftAndRightPartAroundTheSelection(),
                            r = S(a, 2); if (e = r[0], t = r[1], "" === e && "" === t && (this.throwInput = !1), this.isTrailingNegative && D.default.isNegative(D.default.getElementValue(this.domElement), this.settings.negativeSignCharacter)) { var s = this._processCharacterDeletionIfTrailingNegativeSign([e, t]),
                                o = S(s, 2);
                            e = o[0], t = o[1] } else this.eventKey === v.default.keyName.Backspace ? e = e.substring(0, e.length - 1) : t = t.substring(1, t.length) }
                    this._setValueParts(e, t) } }, { key: "_isDecimalCharacterInsertionAllowed", value: function() { return String(this.settings.decimalPlacesShownOnFocus) !== String(I.options.decimalPlacesShownOnFocus.none) && String(this.settings.decimalPlaces) !== String(I.options.decimalPlaces.none) } }, { key: "_processCharacterInsertion", value: function() { var e = this._getUnformattedLeftAndRightPartAroundTheSelection(),
                        t = S(e, 2),
                        i = t[0],
                        n = t[1]; if (this.eventKey !== v.default.keyName.AndroidDefault && (this.throwInput = !0), this.eventKey === this.settings.decimalCharacter || this.settings.decimalCharacterAlternative && this.eventKey === this.settings.decimalCharacterAlternative) { if (!this._isDecimalCharacterInsertionAllowed() || !this.settings.decimalCharacter) return !1; if (this.settings.alwaysAllowDecimalCharacter) i = i.replace(this.settings.decimalCharacter, ""), n = n.replace(this.settings.decimalCharacter, "");
                        else { if (D.default.contains(i, this.settings.decimalCharacter)) return !0; if (0 < n.indexOf(this.settings.decimalCharacter)) return !0;
                            0 === n.indexOf(this.settings.decimalCharacter) && (n = n.substr(1)) } return this.settings.negativeSignCharacter && D.default.contains(n, this.settings.negativeSignCharacter) && (i = "" + this.settings.negativeSignCharacter + i, n = n.replace(this.settings.negativeSignCharacter, "")), this._setValueParts(i + this.settings.decimalCharacter, n), !0 } if (("-" === this.eventKey || "+" === this.eventKey) && this.settings.isNegativeSignAllowed) return "" === i && D.default.contains(n, "-") ? n = n.replace("-", "") : i = D.default.isNegativeStrict(i, "-") ? i.replace("-", "") : "" + this.settings.negativeSignCharacter + i, this._setValueParts(i, n), !0; var a = Number(this.eventKey); return 0 <= a && a <= 9 ? (this.settings.isNegativeSignAllowed && "" === i && D.default.contains(n, "-") && (i = "-", n = n.substring(1, n.length)), this.settings.maximumValue <= 0 && this.settings.minimumValue < this.settings.maximumValue && !D.default.contains(D.default.getElementValue(this.domElement), this.settings.negativeSignCharacter) && "0" !== this.eventKey && (i = "-" + i), this._setValueParts("" + i + this.eventKey, n), !0) : this.throwInput = !1 } }, { key: "_formatValue", value: function(e) { var t = D.default.getElementValue(this.domElement),
                        i = this._getUnformattedLeftAndRightPartAroundTheSelection(),
                        n = S(i, 1)[0]; if (("" === this.settings.digitGroupSeparator || "" !== this.settings.digitGroupSeparator && !D.default.contains(t, this.settings.digitGroupSeparator)) && ("" === this.settings.currencySymbol || "" !== this.settings.currencySymbol && !D.default.contains(t, this.settings.currencySymbol))) { var a = t.split(this.settings.decimalCharacter),
                            r = S(a, 1)[0],
                            s = "";
                        D.default.isNegative(r, this.settings.negativeSignCharacter) && (s = this.settings.negativeSignCharacter, r = r.replace(this.settings.negativeSignCharacter, ""), n = n.replace("-", "")), "" === s && r.length > this.settings.mIntPos && "0" === n.charAt(0) && (n = n.slice(1)), s === this.settings.negativeSignCharacter && r.length > this.settings.mIntNeg && "0" === n.charAt(0) && (n = n.slice(1)), this.isTrailingNegative || (n = "" + s + n) } var o = this.constructor._addGroupSeparators(t, this.settings, this.isFocused, this.rawValue),
                        l = o.length; if (o) { var u = n.split(""); if ((this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.suffix || this.settings.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.prefix && this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix) && u[0] === this.settings.negativeSignCharacter && !this.settings.isNegativeSignAllowed && (u.shift(), (this.eventKey === v.default.keyName.Backspace || this.eventKey === v.default.keyName.Delete) && this.caretFix && ((this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix && this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.left || this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.suffix) && (u.push(this.settings.negativeSignCharacter), this.caretFix = "keydown" === e.type), this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix && this.settings.negativePositiveSignPlacement === I.options.negativePositiveSignPlacement.right))) { var c = this.settings.currencySymbol.split(""),
                                h = ["\\", "^", "$", ".", "|", "?", "*", "+", "(", ")", "["],
                                d = [];
                            c.forEach(function(e, t) { t = c[e], D.default.isInArray(t, h) ? d.push("\\" + t) : d.push(t) }), this.eventKey === v.default.keyName.Backspace && "-" === this.settings.negativeSignCharacter && d.push("-"), u.push(d.join("")), this.caretFix = "keydown" === e.type } for (var m = 0; m < u.length; m++) u[m].match("\\d") || (u[m] = "\\" + u[m]); var f = new RegExp("^.*?" + u.join(".*?")),
                            g = o.match(f);
                        g ? (l = g[0].length, this.settings.showPositiveSign && (0 === l && g.input.charAt(0) === this.settings.positiveSignCharacter && (l = 1 === g.input.indexOf(this.settings.currencySymbol) ? this.settings.currencySymbol.length + 1 : 1), 0 === l && g.input.charAt(this.settings.currencySymbol.length) === this.settings.positiveSignCharacter && (l = this.settings.currencySymbol.length + 1)), (0 === l && o.charAt(0) !== this.settings.negativeSignCharacter || 1 === l && o.charAt(0) === this.settings.negativeSignCharacter) && this.settings.currencySymbol && this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.prefix && (l = this.settings.currencySymbol.length + (D.default.isNegativeStrict(o, this.settings.negativeSignCharacter) ? 1 : 0))) : (this.settings.currencySymbol && this.settings.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix && (l -= this.settings.currencySymbol.length), this.settings.suffixText && (l -= this.settings.suffixText.length)) }
                    o !== t && (this._setElementValue(o, !1), this._setCaretPosition(l)), this.formatted = !0 } }], [{ key: "version", value: function() { return "4.5.4" } }, { key: "_setArgumentsValues", value: function(e, t, i) { D.default.isNull(e) && D.default.throwError("At least one valid parameter is needed in order to initialize an AutoNumeric object"); var n = D.default.isElement(e),
                        a = D.default.isString(e),
                        r = D.default.isObject(t),
                        s = Array.isArray(t) && 0 < t.length,
                        o = D.default.isNumberOrArabic(t) || "" === t,
                        l = this._isPreDefinedOptionValid(t),
                        u = D.default.isNull(t),
                        c = D.default.isEmptyString(t),
                        h = D.default.isObject(i),
                        d = Array.isArray(i) && 0 < i.length,
                        m = D.default.isNull(i),
                        f = this._isPreDefinedOptionValid(i),
                        g = void 0,
                        v = void 0,
                        p = void 0; return n && u && m ? (g = e, v = p = null) : n && o && m ? (g = e, p = t, v = null) : n && r && m ? (g = e, p = null, v = t) : n && l && m ? (g = e, p = null, v = this._getOptionObject(t)) : n && s && m ? (g = e, p = null, v = this.mergeOptions(t)) : n && (u || c) && h ? (g = e, p = null, v = i) : n && (u || c) && d ? (g = e, p = null, v = this.mergeOptions(i)) : a && u && m ? (g = document.querySelector(e), v = p = null) : a && r && m ? (g = document.querySelector(e), p = null, v = t) : a && l && m ? (g = document.querySelector(e), p = null, v = this._getOptionObject(t)) : a && s && m ? (g = document.querySelector(e), p = null, v = this.mergeOptions(t)) : a && (u || c) && h ? (g = document.querySelector(e), p = null, v = i) : a && (u || c) && d ? (g = document.querySelector(e), p = null, v = this.mergeOptions(i)) : a && o && m ? (g = document.querySelector(e), p = t, v = null) : a && o && h ? (g = document.querySelector(e), p = t, v = i) : a && o && f ? (g = document.querySelector(e), p = t, v = this._getOptionObject(i)) : a && o && d ? (g = document.querySelector(e), p = t, v = this.mergeOptions(i)) : n && o && h ? (g = e, p = t, v = i) : n && o && f ? (g = e, p = t, v = this._getOptionObject(i)) : n && o && d ? (g = e, p = t, v = this.mergeOptions(i)) : D.default.throwError("The parameters given to the AutoNumeric object are not valid, '" + e + "', '" + t + "' and '" + i + "' given."), D.default.isNull(g) && D.default.throwError("The selector '" + e + "' did not select any valid DOM element. Please check on which element you called AutoNumeric."), { domElement: g, initialValue: p, userOptions: v } } }, { key: "mergeOptions", value: function(e) { var t = this,
                        i = {}; return e.forEach(function(e) { y(i, t._getOptionObject(e)) }), i } }, { key: "_isPreDefinedOptionValid", value: function(e) { return I.predefinedOptions.hasOwnProperty(e) } }, { key: "_getOptionObject", value: function(e) { var t = void 0; return D.default.isString(e) ? null == (t = I.getPredefinedOptions()[e]) && D.default.warning("The given pre-defined option [" + e + "] is not recognized by autoNumeric. Please check that pre-defined option name.", !0) : t = e, t } }, { key: "_doesFormHandlerListExists", value: function() { var e = b(window.aNFormHandlerMap); return "undefined" !== e && "object" === e } }, { key: "_createFormHandlerList", value: function() { window.aNFormHandlerMap = new Map } }, { key: "_checkValuesToStringsArray", value: function(e, t) { return D.default.isInArray(String(e), t) } }, { key: "_checkValuesToStringsSettings", value: function(e, t) { return this._checkValuesToStringsArray(e, Object.keys(t.valuesToStrings)) } }, { key: "_checkStringsToValuesSettings", value: function(e, t) { return this._checkValuesToStringsArray(e, Object.values(t.valuesToStrings)) } }, { key: "_unformatAltHovered", value: function(e) { e.hoveredWithAlt = !0, e.unformat() } }, { key: "_reformatAltHovered", value: function(e) { e.hoveredWithAlt = !1, e.reformat() } }, { key: "_getChildANInputElement", value: function(e) { var t = this,
                        i = e.getElementsByTagName("input"),
                        n = []; return Array.prototype.slice.call(i, 0).forEach(function(e) { t.test(e) && n.push(e) }), n } }, { key: "test", value: function(e) { return this._isInGlobalList(D.default.domElement(e)) } }, { key: "_createWeakMap", value: function(e) { window[e] = new WeakMap } }, { key: "_createGlobalList", value: function() { this.autoNumericGlobalListName = "autoNumericGlobalList", this._createWeakMap(this.autoNumericGlobalListName) } }, { key: "_doesGlobalListExists", value: function() { var e = b(window[this.autoNumericGlobalListName]); return "undefined" !== e && "object" === e } }, { key: "_addToGlobalList", value: function(e) { this._doesGlobalListExists() || this._createGlobalList(); var t = e.node(); if (this._isInGlobalList(t)) { if (this._getFromGlobalList(t) === this) return;
                        D.default.warning("A reference to the DOM element you just initialized already exists in the global AutoNumeric element list. Please make sure to not initialize the same DOM element multiple times.", e.getSettings().showWarnings) }
                    window[this.autoNumericGlobalListName].set(t, e) } }, { key: "_removeFromGlobalList", value: function(e) { this._doesGlobalListExists() && window[this.autoNumericGlobalListName].delete(e.node()) } }, { key: "_getFromGlobalList", value: function(e) { return this._doesGlobalListExists() ? window[this.autoNumericGlobalListName].get(e) : null } }, { key: "_isInGlobalList", value: function(e) { return !!this._doesGlobalListExists() && window[this.autoNumericGlobalListName].has(e) } }, { key: "validate", value: function(e) { var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;!D.default.isUndefinedOrNullOrEmpty(e) && D.default.isObject(e) || D.default.throwError("The userOptions are invalid ; it should be a valid object, [" + e + "] given."); var n = D.default.isObject(i);
                    n || D.default.isNull(i) || D.default.throwError("The 'originalOptions' parameter is invalid ; it should either be a valid option object or `null`, [" + e + "] given."), D.default.isNull(e) || this._convertOldOptionsToNewOnes(e); var a = void 0;
                    a = t ? y({}, this.getDefaultConfig(), e) : e, D.default.isTrueOrFalseString(a.showWarnings) || D.default.isBoolean(a.showWarnings) || D.default.throwError("The debug option 'showWarnings' is invalid ; it should be either 'true' or 'false', [" + a.showWarnings + "] given."); var r, s = /^[0-9]+$/,
                        o = /[0-9]+/,
                        l = /^-?[0-9]+(\.?[0-9]+)?$/,
                        u = /^[0-9]+(\.?[0-9]+)?$/;
                    D.default.isTrueOrFalseString(a.allowDecimalPadding) || D.default.isBoolean(a.allowDecimalPadding) || a.allowDecimalPadding === I.options.allowDecimalPadding.floats || D.default.throwError("The decimal padding option 'allowDecimalPadding' is invalid ; it should either be `false`, `true` or `'floats'`, [" + a.allowDecimalPadding + "] given."), a.allowDecimalPadding !== I.options.allowDecimalPadding.never && "false" !== a.allowDecimalPadding || a.decimalPlaces === I.options.decimalPlaces.none && a.decimalPlacesShownOnBlur === I.options.decimalPlacesShownOnBlur.none && a.decimalPlacesShownOnFocus === I.options.decimalPlacesShownOnFocus.none || D.default.warning("Setting 'allowDecimalPadding' to [" + a.allowDecimalPadding + "] will override the current 'decimalPlaces*' settings [" + a.decimalPlaces + ", " + a.decimalPlacesShownOnBlur + " and " + a.decimalPlacesShownOnFocus + "].", a.showWarnings), D.default.isTrueOrFalseString(a.alwaysAllowDecimalCharacter) || D.default.isBoolean(a.alwaysAllowDecimalCharacter) || D.default.throwError("The option 'alwaysAllowDecimalCharacter' is invalid ; it should either be `true` or `false`, [" + a.alwaysAllowDecimalCharacter + "] given."), D.default.isNull(a.caretPositionOnFocus) || D.default.isInArray(a.caretPositionOnFocus, [I.options.caretPositionOnFocus.start, I.options.caretPositionOnFocus.end, I.options.caretPositionOnFocus.decimalLeft, I.options.caretPositionOnFocus.decimalRight]) || D.default.throwError("The display on empty string option 'caretPositionOnFocus' is invalid ; it should either be `null`, 'focus', 'press', 'always' or 'zero', [" + a.caretPositionOnFocus + "] given."), r = n ? i : this._correctCaretPositionOnFocusAndSelectOnFocusOptions(e), D.default.isNull(r) || r.caretPositionOnFocus === I.options.caretPositionOnFocus.doNoForceCaretPosition || r.selectOnFocus !== I.options.selectOnFocus.select || D.default.warning("The 'selectOnFocus' option is set to 'select', which is in conflict with the 'caretPositionOnFocus' which is set to '" + r.caretPositionOnFocus + "'. As a result, if this has been called when instantiating an AutoNumeric object, the 'selectOnFocus' option is forced to 'doNotSelect'.", a.showWarnings), D.default.isInArray(a.digitGroupSeparator, [I.options.digitGroupSeparator.comma, I.options.digitGroupSeparator.dot, I.options.digitGroupSeparator.normalSpace, I.options.digitGroupSeparator.thinSpace, I.options.digitGroupSeparator.narrowNoBreakSpace, I.options.digitGroupSeparator.noBreakSpace, I.options.digitGroupSeparator.noSeparator, I.options.digitGroupSeparator.apostrophe, I.options.digitGroupSeparator.arabicThousandsSeparator, I.options.digitGroupSeparator.dotAbove, I.options.digitGroupSeparator.privateUseTwo]) || D.default.throwError("The thousand separator character option 'digitGroupSeparator' is invalid ; it should be ',', '.', '٬', '˙', \"'\", '', ' ', ' ', ' ', ' ' or empty (''), [" + a.digitGroupSeparator + "] given."), D.default.isTrueOrFalseString(a.showOnlyNumbersOnFocus) || D.default.isBoolean(a.showOnlyNumbersOnFocus) || D.default.throwError("The 'showOnlyNumbersOnFocus' option is invalid ; it should be either 'true' or 'false', [" + a.showOnlyNumbersOnFocus + "] given."), D.default.isInArray(a.digitalGroupSpacing, [I.options.digitalGroupSpacing.two, I.options.digitalGroupSpacing.twoScaled, I.options.digitalGroupSpacing.three, I.options.digitalGroupSpacing.four]) || 2 <= a.digitalGroupSpacing && a.digitalGroupSpacing <= 4 || D.default.throwError("The grouping separator option for thousands 'digitalGroupSpacing' is invalid ; it should be '2', '2s', '3', or '4', [" + a.digitalGroupSpacing + "] given."), D.default.isInArray(a.decimalCharacter, [I.options.decimalCharacter.comma, I.options.decimalCharacter.dot, I.options.decimalCharacter.middleDot, I.options.decimalCharacter.arabicDecimalSeparator, I.options.decimalCharacter.decimalSeparatorKeySymbol]) || D.default.throwError("The decimal separator character option 'decimalCharacter' is invalid ; it should be '.', ',', '·', '⎖' or '٫', [" + a.decimalCharacter + "] given."), a.decimalCharacter === a.digitGroupSeparator && D.default.throwError("autoNumeric will not function properly when the decimal character 'decimalCharacter' [" + a.decimalCharacter + "] and the thousand separator 'digitGroupSeparator' [" + a.digitGroupSeparator + "] are the same character."), D.default.isNull(a.decimalCharacterAlternative) || D.default.isString(a.decimalCharacterAlternative) || D.default.throwError("The alternate decimal separator character option 'decimalCharacterAlternative' is invalid ; it should be a string, [" + a.decimalCharacterAlternative + "] given."), "" === a.currencySymbol || D.default.isString(a.currencySymbol) || D.default.throwError("The currency symbol option 'currencySymbol' is invalid ; it should be a string, [" + a.currencySymbol + "] given."), D.default.isInArray(a.currencySymbolPlacement, [I.options.currencySymbolPlacement.prefix, I.options.currencySymbolPlacement.suffix]) || D.default.throwError("The placement of the currency sign option 'currencySymbolPlacement' is invalid ; it should either be 'p' (prefix) or 's' (suffix), [" + a.currencySymbolPlacement + "] given."), D.default.isInArray(a.negativePositiveSignPlacement, [I.options.negativePositiveSignPlacement.prefix, I.options.negativePositiveSignPlacement.suffix, I.options.negativePositiveSignPlacement.left, I.options.negativePositiveSignPlacement.right, I.options.negativePositiveSignPlacement.none]) || D.default.throwError("The placement of the negative sign option 'negativePositiveSignPlacement' is invalid ; it should either be 'p' (prefix), 's' (suffix), 'l' (left), 'r' (right) or 'null', [" + a.negativePositiveSignPlacement + "] given."), D.default.isTrueOrFalseString(a.showPositiveSign) || D.default.isBoolean(a.showPositiveSign) || D.default.throwError("The show positive sign option 'showPositiveSign' is invalid ; it should be either 'true' or 'false', [" + a.showPositiveSign + "] given."), (!D.default.isString(a.suffixText) || "" !== a.suffixText && (D.default.isNegative(a.suffixText, a.negativeSignCharacter) || o.test(a.suffixText))) && D.default.throwError("The additional suffix option 'suffixText' is invalid ; it should not contains the negative sign '" + a.negativeSignCharacter + "' nor any numerical characters, [" + a.suffixText + "] given."), (!D.default.isString(a.negativeSignCharacter) || 1 !== a.negativeSignCharacter.length || D.default.isUndefinedOrNullOrEmpty(a.negativeSignCharacter) || o.test(a.negativeSignCharacter)) && D.default.throwError("The negative sign character option 'negativeSignCharacter' is invalid ; it should be a single character, and cannot be any numerical characters, [" + a.negativeSignCharacter + "] given."), (!D.default.isString(a.positiveSignCharacter) || 1 !== a.positiveSignCharacter.length || D.default.isUndefinedOrNullOrEmpty(a.positiveSignCharacter) || o.test(a.positiveSignCharacter)) && D.default.throwError("The positive sign character option 'positiveSignCharacter' is invalid ; it should be a single character, and cannot be any numerical characters, [" + a.positiveSignCharacter + "] given.\nIf you want to hide the positive sign character, you need to set the `showPositiveSign` option to `true`."), a.negativeSignCharacter === a.positiveSignCharacter && D.default.throwError("The positive 'positiveSignCharacter' and negative 'negativeSignCharacter' sign characters cannot be identical ; [" + a.negativeSignCharacter + "] given."); var c = D.default.isNull(a.negativeBracketsTypeOnBlur) ? ["", ""] : a.negativeBracketsTypeOnBlur.split(","),
                        h = S(c, 2),
                        d = h[0],
                        m = h[1]; if ((D.default.contains(a.digitGroupSeparator, a.negativeSignCharacter) || D.default.contains(a.decimalCharacter, a.negativeSignCharacter) || D.default.contains(a.decimalCharacterAlternative, a.negativeSignCharacter) || D.default.contains(d, a.negativeSignCharacter) || D.default.contains(m, a.negativeSignCharacter) || D.default.contains(a.suffixText, a.negativeSignCharacter)) && D.default.throwError("The negative sign character option 'negativeSignCharacter' is invalid ; it should not be equal or a part of the digit separator, the decimal character, the decimal character alternative, the negative brackets or the suffix text, [" + a.negativeSignCharacter + "] given."), (D.default.contains(a.digitGroupSeparator, a.positiveSignCharacter) || D.default.contains(a.decimalCharacter, a.positiveSignCharacter) || D.default.contains(a.decimalCharacterAlternative, a.positiveSignCharacter) || D.default.contains(d, a.positiveSignCharacter) || D.default.contains(m, a.positiveSignCharacter) || D.default.contains(a.suffixText, a.positiveSignCharacter)) && D.default.throwError("The positive sign character option 'positiveSignCharacter' is invalid ; it should not be equal or a part of the digit separator, the decimal character, the decimal character alternative, the negative brackets or the suffix text, [" + a.positiveSignCharacter + "] given."), D.default.isNull(a.overrideMinMaxLimits) || D.default.isInArray(a.overrideMinMaxLimits, [I.options.overrideMinMaxLimits.ceiling, I.options.overrideMinMaxLimits.floor, I.options.overrideMinMaxLimits.ignore]) || D.default.throwError("The override min & max limits option 'overrideMinMaxLimits' is invalid ; it should either be 'ceiling', 'floor' or 'ignore', [" + a.overrideMinMaxLimits + "] given."), D.default.isString(a.maximumValue) && l.test(a.maximumValue) || D.default.throwError("The maximum possible value option 'maximumValue' is invalid ; it should be a string that represents a positive or negative number, [" + a.maximumValue + "] given."), D.default.isString(a.minimumValue) && l.test(a.minimumValue) || D.default.throwError("The minimum possible value option 'minimumValue' is invalid ; it should be a string that represents a positive or negative number, [" + a.minimumValue + "] given."), parseFloat(a.minimumValue) > parseFloat(a.maximumValue) && D.default.throwError("The minimum possible value option is greater than the maximum possible value option ; 'minimumValue' [" + a.minimumValue + "] should be smaller than 'maximumValue' [" + a.maximumValue + "]."), D.default.isInt(a.decimalPlaces) && 0 <= a.decimalPlaces || D.default.isString(a.decimalPlaces) && s.test(a.decimalPlaces) || D.default.throwError("The number of decimal places option 'decimalPlaces' is invalid ; it should be a positive integer, [" + a.decimalPlaces + "] given."), D.default.isNull(a.decimalPlacesRawValue) || D.default.isInt(a.decimalPlacesRawValue) && 0 <= a.decimalPlacesRawValue || D.default.isString(a.decimalPlacesRawValue) && s.test(a.decimalPlacesRawValue) || D.default.throwError("The number of decimal places for the raw value option 'decimalPlacesRawValue' is invalid ; it should be a positive integer or `null`, [" + a.decimalPlacesRawValue + "] given."), this._validateDecimalPlacesRawValue(a), D.default.isNull(a.decimalPlacesShownOnFocus) || s.test(String(a.decimalPlacesShownOnFocus)) || D.default.throwError("The number of expanded decimal places option 'decimalPlacesShownOnFocus' is invalid ; it should be a positive integer or `null`, [" + a.decimalPlacesShownOnFocus + "] given."), !D.default.isNull(a.decimalPlacesShownOnFocus) && Number(a.decimalPlaces) > Number(a.decimalPlacesShownOnFocus) && D.default.warning("The extended decimal places 'decimalPlacesShownOnFocus' [" + a.decimalPlacesShownOnFocus + "] should be greater than the 'decimalPlaces' [" + a.decimalPlaces + "] value. Currently, this will limit the ability of your user to manually change some of the decimal places. Do you really want to do that?", a.showWarnings), (D.default.isNull(a.divisorWhenUnfocused) || u.test(a.divisorWhenUnfocused)) && 0 !== a.divisorWhenUnfocused && "0" !== a.divisorWhenUnfocused && 1 !== a.divisorWhenUnfocused && "1" !== a.divisorWhenUnfocused || D.default.throwError("The divisor option 'divisorWhenUnfocused' is invalid ; it should be a positive number higher than one, preferably an integer, [" + a.divisorWhenUnfocused + "] given."), D.default.isNull(a.decimalPlacesShownOnBlur) || s.test(a.decimalPlacesShownOnBlur) || D.default.throwError("The number of decimals shown when unfocused option 'decimalPlacesShownOnBlur' is invalid ; it should be a positive integer or `null`, [" + a.decimalPlacesShownOnBlur + "] given."), D.default.isNull(a.symbolWhenUnfocused) || D.default.isString(a.symbolWhenUnfocused) || D.default.throwError("The symbol to show when unfocused option 'symbolWhenUnfocused' is invalid ; it should be a string, [" + a.symbolWhenUnfocused + "] given."), D.default.isTrueOrFalseString(a.saveValueToSessionStorage) || D.default.isBoolean(a.saveValueToSessionStorage) || D.default.throwError("The save to session storage option 'saveValueToSessionStorage' is invalid ; it should be either 'true' or 'false', [" + a.saveValueToSessionStorage + "] given."), D.default.isInArray(a.onInvalidPaste, [I.options.onInvalidPaste.error, I.options.onInvalidPaste.ignore, I.options.onInvalidPaste.clamp, I.options.onInvalidPaste.truncate, I.options.onInvalidPaste.replace]) || D.default.throwError("The paste behavior option 'onInvalidPaste' is invalid ; it should either be 'error', 'ignore', 'clamp', 'truncate' or 'replace' (cf. documentation), [" + a.onInvalidPaste + "] given."), D.default.isInArray(a.roundingMethod, [I.options.roundingMethod.halfUpSymmetric, I.options.roundingMethod.halfUpAsymmetric, I.options.roundingMethod.halfDownSymmetric, I.options.roundingMethod.halfDownAsymmetric, I.options.roundingMethod.halfEvenBankersRounding, I.options.roundingMethod.upRoundAwayFromZero, I.options.roundingMethod.downRoundTowardZero, I.options.roundingMethod.toCeilingTowardPositiveInfinity, I.options.roundingMethod.toFloorTowardNegativeInfinity, I.options.roundingMethod.toNearest05, I.options.roundingMethod.toNearest05Alt, I.options.roundingMethod.upToNext05, I.options.roundingMethod.downToNext05]) || D.default.throwError("The rounding method option 'roundingMethod' is invalid ; it should either be 'S', 'A', 's', 'a', 'B', 'U', 'D', 'C', 'F', 'N05', 'CHF', 'U05' or 'D05' (cf. documentation), [" + a.roundingMethod + "] given."), D.default.isNull(a.negativeBracketsTypeOnBlur) || D.default.isInArray(a.negativeBracketsTypeOnBlur, [I.options.negativeBracketsTypeOnBlur.parentheses, I.options.negativeBracketsTypeOnBlur.brackets, I.options.negativeBracketsTypeOnBlur.chevrons, I.options.negativeBracketsTypeOnBlur.curlyBraces, I.options.negativeBracketsTypeOnBlur.angleBrackets, I.options.negativeBracketsTypeOnBlur.japaneseQuotationMarks, I.options.negativeBracketsTypeOnBlur.halfBrackets, I.options.negativeBracketsTypeOnBlur.whiteSquareBrackets, I.options.negativeBracketsTypeOnBlur.quotationMarks, I.options.negativeBracketsTypeOnBlur.guillemets]) || D.default.throwError("The brackets for negative values option 'negativeBracketsTypeOnBlur' is invalid ; it should either be '(,)', '[,]', '<,>', '{,}', '〈,〉', '｢,｣', '⸤,⸥', '⟦,⟧', '‹,›' or '«,»', [" + a.negativeBracketsTypeOnBlur + "] given."), (D.default.isString(a.emptyInputBehavior) || D.default.isNumber(a.emptyInputBehavior)) && (D.default.isInArray(a.emptyInputBehavior, [I.options.emptyInputBehavior.focus, I.options.emptyInputBehavior.press, I.options.emptyInputBehavior.always, I.options.emptyInputBehavior.min, I.options.emptyInputBehavior.max, I.options.emptyInputBehavior.zero, I.options.emptyInputBehavior.null]) || l.test(a.emptyInputBehavior)) || D.default.throwError("The display on empty string option 'emptyInputBehavior' is invalid ; it should either be 'focus', 'press', 'always', 'min', 'max', 'zero', 'null', a number, or a string that represents a number, [" + a.emptyInputBehavior + "] given."), a.emptyInputBehavior === I.options.emptyInputBehavior.zero && (0 < a.minimumValue || a.maximumValue < 0) && D.default.throwError("The 'emptyInputBehavior' option is set to 'zero', but this value is outside of the range defined by 'minimumValue' and 'maximumValue' [" + a.minimumValue + ", " + a.maximumValue + "]."), l.test(String(a.emptyInputBehavior))) { var f = this._checkIfInRangeWithOverrideOption(a.emptyInputBehavior, a),
                            g = S(f, 2),
                            v = g[0],
                            p = g[1];
                        v && p || D.default.throwError("The 'emptyInputBehavior' option is set to a number or a string that represents a number, but its value [" + a.emptyInputBehavior + "] is outside of the range defined by the 'minimumValue' and 'maximumValue' options [" + a.minimumValue + ", " + a.maximumValue + "].") }
                    D.default.isTrueOrFalseString(a.eventBubbles) || D.default.isBoolean(a.eventBubbles) || D.default.throwError("The event bubbles option 'eventBubbles' is invalid ; it should be either 'true' or 'false', [" + a.eventBubbles + "] given."), D.default.isTrueOrFalseString(a.eventIsCancelable) || D.default.isBoolean(a.eventIsCancelable) || D.default.throwError("The event is cancelable option 'eventIsCancelable' is invalid ; it should be either 'true' or 'false', [" + a.eventIsCancelable + "] given."), D.default.isInArray(a.leadingZero, [I.options.leadingZero.allow, I.options.leadingZero.deny, I.options.leadingZero.keep]) || D.default.throwError("The leading zero behavior option 'leadingZero' is invalid ; it should either be 'allow', 'deny' or 'keep', [" + a.leadingZero + "] given."), D.default.isTrueOrFalseString(a.formatOnPageLoad) || D.default.isBoolean(a.formatOnPageLoad) || D.default.throwError("The format on initialization option 'formatOnPageLoad' is invalid ; it should be either 'true' or 'false', [" + a.formatOnPageLoad + "] given."), D.default.isTrueOrFalseString(a.formulaMode) || D.default.isBoolean(a.formulaMode) || D.default.throwError("The formula mode option 'formulaMode' is invalid ; it should be either 'true' or 'false', [" + a.formulaMode + "] given."), s.test(a.historySize) && 0 !== a.historySize || D.default.throwError("The history size option 'historySize' is invalid ; it should be a positive integer, [" + a.historySize + "] given."), D.default.isTrueOrFalseString(a.selectNumberOnly) || D.default.isBoolean(a.selectNumberOnly) || D.default.throwError("The select number only option 'selectNumberOnly' is invalid ; it should be either 'true' or 'false', [" + a.selectNumberOnly + "] given."), D.default.isTrueOrFalseString(a.selectOnFocus) || D.default.isBoolean(a.selectOnFocus) || D.default.throwError("The select on focus option 'selectOnFocus' is invalid ; it should be either 'true' or 'false', [" + a.selectOnFocus + "] given."), D.default.isNull(a.defaultValueOverride) || "" === a.defaultValueOverride || l.test(a.defaultValueOverride) || D.default.throwError("The unformatted default value option 'defaultValueOverride' is invalid ; it should be a string that represents a positive or negative number, [" + a.defaultValueOverride + "] given."), D.default.isTrueOrFalseString(a.unformatOnSubmit) || D.default.isBoolean(a.unformatOnSubmit) || D.default.throwError("The remove formatting on submit option 'unformatOnSubmit' is invalid ; it should be either 'true' or 'false', [" + a.unformatOnSubmit + "] given."), D.default.isNull(a.valuesToStrings) || D.default.isObject(a.valuesToStrings) || D.default.throwError("The option 'valuesToStrings' is invalid ; it should be an object, ideally with 'key -> value' entries, [" + a.valuesToStrings + "] given."), D.default.isNull(a.outputFormat) || D.default.isInArray(a.outputFormat, [I.options.outputFormat.string, I.options.outputFormat.number, I.options.outputFormat.dot, I.options.outputFormat.negativeDot, I.options.outputFormat.comma, I.options.outputFormat.negativeComma, I.options.outputFormat.dotNegative, I.options.outputFormat.commaNegative]) || D.default.throwError("The custom locale format option 'outputFormat' is invalid ; it should either be null, 'string', 'number', '.', '-.', ',', '-,', '.-' or ',-', [" + a.outputFormat + "] given."), D.default.isTrueOrFalseString(a.isCancellable) || D.default.isBoolean(a.isCancellable) || D.default.throwError("The cancellable behavior option 'isCancellable' is invalid ; it should be either 'true' or 'false', [" + a.isCancellable + "] given."), D.default.isTrueOrFalseString(a.modifyValueOnWheel) || D.default.isBoolean(a.modifyValueOnWheel) || D.default.throwError("The increment/decrement on mouse wheel option 'modifyValueOnWheel' is invalid ; it should be either 'true' or 'false', [" + a.modifyValueOnWheel + "] given."), D.default.isTrueOrFalseString(a.watchExternalChanges) || D.default.isBoolean(a.watchExternalChanges) || D.default.throwError("The option 'watchExternalChanges' is invalid ; it should be either 'true' or 'false', [" + a.watchExternalChanges + "] given."), D.default.isInArray(a.wheelOn, [I.options.wheelOn.focus, I.options.wheelOn.hover]) || D.default.throwError("The wheel behavior option 'wheelOn' is invalid ; it should either be 'focus' or 'hover', [" + a.wheelOn + "] given."), (!D.default.isString(a.wheelStep) && !D.default.isNumber(a.wheelStep) || "progressive" !== a.wheelStep && !u.test(a.wheelStep) || 0 === Number(a.wheelStep)) && D.default.throwError("The wheel step value option 'wheelStep' is invalid ; it should either be the string 'progressive', or a number or a string that represents a positive number (excluding zero), [" + a.wheelStep + "] given."), D.default.isInArray(a.serializeSpaces, [I.options.serializeSpaces.plus, I.options.serializeSpaces.percent]) || D.default.throwError("The space replacement character option 'serializeSpaces' is invalid ; it should either be '+' or '%20', [" + a.serializeSpaces + "] given."), D.default.isTrueOrFalseString(a.noEventListeners) || D.default.isBoolean(a.noEventListeners) || D.default.throwError("The option 'noEventListeners' that prevent the creation of event listeners is invalid ; it should be either 'true' or 'false', [" + a.noEventListeners + "] given."), D.default.isNull(a.styleRules) || D.default.isObject(a.styleRules) && (a.styleRules.hasOwnProperty("positive") || a.styleRules.hasOwnProperty("negative") || a.styleRules.hasOwnProperty("ranges") || a.styleRules.hasOwnProperty("userDefined")) || D.default.throwError("The option 'styleRules' is invalid ; it should be a correctly structured object, with one or more 'positive', 'negative', 'ranges' or 'userDefined' attributes, [" + a.styleRules + "] given."), D.default.isNull(a.styleRules) || !a.styleRules.hasOwnProperty("userDefined") || D.default.isNull(a.styleRules.userDefined) || a.styleRules.userDefined.forEach(function(e) { e.hasOwnProperty("callback") && !D.default.isFunction(e.callback) && D.default.throwError("The callback defined in the `userDefined` attribute is not a function, " + b(e.callback) + " given.") }), (D.default.isNull(a.rawValueDivisor) || u.test(a.rawValueDivisor)) && 0 !== a.rawValueDivisor && "0" !== a.rawValueDivisor && 1 !== a.rawValueDivisor && "1" !== a.rawValueDivisor || D.default.throwError("The raw value divisor option 'rawValueDivisor' is invalid ; it should be a positive number higher than one, preferably an integer, [" + a.rawValueDivisor + "] given."), D.default.isTrueOrFalseString(a.readOnly) || D.default.isBoolean(a.readOnly) || D.default.throwError("The option 'readOnly' is invalid ; it should be either 'true' or 'false', [" + a.readOnly + "] given."), D.default.isTrueOrFalseString(a.unformatOnHover) || D.default.isBoolean(a.unformatOnHover) || D.default.throwError("The option 'unformatOnHover' is invalid ; it should be either 'true' or 'false', [" + a.unformatOnHover + "] given."), D.default.isTrueOrFalseString(a.failOnUnknownOption) || D.default.isBoolean(a.failOnUnknownOption) || D.default.throwError("The debug option 'failOnUnknownOption' is invalid ; it should be either 'true' or 'false', [" + a.failOnUnknownOption + "] given."), D.default.isTrueOrFalseString(a.createLocalList) || D.default.isBoolean(a.createLocalList) || D.default.throwError("The debug option 'createLocalList' is invalid ; it should be either 'true' or 'false', [" + a.createLocalList + "] given.") } }, { key: "_validateDecimalPlacesRawValue", value: function(e) { D.default.isNull(e.decimalPlacesRawValue) || (e.decimalPlacesRawValue < e.decimalPlaces && D.default.warning("The number of decimal places to store in the raw value [" + e.decimalPlacesRawValue + "] is lower than the ones to display [" + e.decimalPlaces + "]. This will likely confuse your users.\nTo solve that, you'd need to either set `decimalPlacesRawValue` to `null`, or set a number of decimal places for the raw value equal of bigger than `decimalPlaces`.", e.showWarnings), e.decimalPlacesRawValue < e.decimalPlacesShownOnFocus && D.default.warning("The number of decimal places to store in the raw value [" + e.decimalPlacesRawValue + "] is lower than the ones shown on focus [" + e.decimalPlacesShownOnFocus + "]. This will likely confuse your users.\nTo solve that, you'd need to either set `decimalPlacesRawValue` to `null`, or set a number of decimal places for the raw value equal of bigger than `decimalPlacesShownOnFocus`.", e.showWarnings), e.decimalPlacesRawValue < e.decimalPlacesShownOnBlur && D.default.warning("The number of decimal places to store in the raw value [" + e.decimalPlacesRawValue + "] is lower than the ones shown when unfocused [" + e.decimalPlacesShownOnBlur + "]. This will likely confuse your users.\nTo solve that, you'd need to either set `decimalPlacesRawValue` to `null`, or set a number of decimal places for the raw value equal of bigger than `decimalPlacesShownOnBlur`.", e.showWarnings)) } }, { key: "areSettingsValid", value: function(e) { var t = !0; try { this.validate(e, !0) } catch (e) { t = !1 } return t } }, { key: "getDefaultConfig", value: function() { return I.defaultSettings } }, { key: "getPredefinedOptions", value: function() { return I.predefinedOptions } }, { key: "_generateOptionsObjectFromOptionsArray", value: function(e) { var t = this,
                        i = void 0; return D.default.isUndefinedOrNullOrEmpty(e) || 0 === e.length ? i = null : (i = {}, 1 === e.length && Array.isArray(e[0]) ? e[0].forEach(function(e) { y(i, t._getOptionObject(e)) }) : 1 <= e.length && e.forEach(function(e) { y(i, t._getOptionObject(e)) })), i } }, { key: "format", value: function(e) { if (D.default.isUndefined(e) || null === e) return null; var t;
                    t = D.default.isElement(e) ? D.default.getElementValue(e) : e, D.default.isString(t) || D.default.isNumber(t) || D.default.throwError('The value "' + t + '" being "set" is not numeric and therefore cannot be used appropriately.'); for (var i = arguments.length, n = Array(1 < i ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a]; var r = this._generateOptionsObjectFromOptionsArray(n),
                        s = y({}, this.getDefaultConfig(), r);
                    s.isNegativeSignAllowed = t < 0, s.isPositiveSignAllowed = 0 <= t, this._setBrackets(s), this._cachesUsualRegularExpressions(s, {}); var o = this._toNumericValue(t, s);
                    isNaN(Number(o)) && D.default.throwError("The value [" + o + "] that you are trying to format is not a recognized number."); var l = this._checkIfInRangeWithOverrideOption(o, s),
                        u = S(l, 2),
                        c = u[0],
                        h = u[1]; return c && h || (D.default.triggerEvent(I.events.formatted, document, { oldValue: null, newValue: null, oldRawValue: null, newRawValue: null, isPristine: null, error: "Range test failed", aNElement: null }, !0, !0), D.default.throwError("The value [" + o + "] being set falls outside of the minimumValue [" + s.minimumValue + "] and maximumValue [" + s.maximumValue + "] range set for this element")), s.valuesToStrings && this._checkValuesToStringsSettings(t, s) ? s.valuesToStrings[t] : (this._correctNegativePositiveSignPlacementOption(s), this._calculateDecimalPlacesOnInit(s), D.default.isUndefinedOrNullOrEmpty(s.rawValueDivisor) || 0 === s.rawValueDivisor || "" === o || null === o || (o *= s.rawValueDivisor), o = this._roundFormattedValueShownOnFocus(o, s), o = this._modifyNegativeSignAndDecimalCharacterForFormattedValue(o, s), o = this._addGroupSeparators(o, s, !1, o)) } }, { key: "formatAndSet", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        i = this.format(e, t); return D.default.setElementValue(e, i), i } }, { key: "unformat", value: function(e) { if (D.default.isNumberStrict(e)) return e; var t = void 0; if ("" === (t = D.default.isElement(e) ? D.default.getElementValue(e) : e)) return ""; if (D.default.isUndefined(t) || null === t) return null;
                    (D.default.isArray(t) || D.default.isObject(t)) && D.default.throwError("A number or a string representing a number is needed to be able to unformat it, [" + t + "] given."); for (var i = arguments.length, n = Array(1 < i ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a]; var r = this._generateOptionsObjectFromOptionsArray(n),
                        s = y({}, this.getDefaultConfig(), r); if (s.isNegativeSignAllowed = !1, s.isPositiveSignAllowed = !0, t = t.toString(), s.valuesToStrings && this._checkStringsToValuesSettings(t, s)) return D.default.objectKeyLookup(s.valuesToStrings, t); if (D.default.isNegative(t, s.negativeSignCharacter)) s.isNegativeSignAllowed = !0, s.isPositiveSignAllowed = !1;
                    else if (!D.default.isNull(s.negativeBracketsTypeOnBlur)) { var o = s.negativeBracketsTypeOnBlur.split(","),
                            l = S(o, 2);
                        s.firstBracket = l[0], s.lastBracket = l[1], t.charAt(0) === s.firstBracket && t.charAt(t.length - 1) === s.lastBracket && (s.isNegativeSignAllowed = !0, s.isPositiveSignAllowed = !1, t = this._removeBrackets(t, s, !1)) } return t = this._convertToNumericString(t, s), new RegExp("[^+-0123456789.]", "gi").test(t) ? NaN : (this._correctNegativePositiveSignPlacementOption(s), s.decimalPlacesRawValue ? s.originalDecimalPlacesRawValue = s.decimalPlacesRawValue : s.originalDecimalPlacesRawValue = s.decimalPlaces, this._calculateDecimalPlacesOnInit(s), D.default.isUndefinedOrNullOrEmpty(s.rawValueDivisor) || 0 === s.rawValueDivisor || "" === t || null === t || (t /= s.rawValueDivisor), t = (t = this._roundRawValue(t, s)).replace(s.decimalCharacter, "."), t = this._toLocale(t, s.outputFormat, s)) } }, { key: "unformatAndSet", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        i = this.unformat(e, t); return D.default.setElementValue(e, i), i } }, { key: "localize", value: function(e) { var t, i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        n = void 0; return "" === (n = D.default.isElement(e) ? D.default.getElementValue(e) : e) ? "" : (D.default.isNull(i) && (i = I.defaultSettings), n = this.unformat(n, i), 0 === Number(n) && i.leadingZero !== I.options.leadingZero.keep && (n = "0"), t = D.default.isNull(i) ? i.outputFormat : I.defaultSettings.outputFormat, this._toLocale(n, t, i)) } }, { key: "localizeAndSet", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        i = this.localize(e, t); return D.default.setElementValue(e, i), i } }, { key: "isManagedByAutoNumeric", value: function(e) { return this._isInGlobalList(D.default.domElement(e)) } }, { key: "getAutoNumericElement", value: function(e) { var t = D.default.domElement(e); return this.isManagedByAutoNumeric(t) ? this._getFromGlobalList(t) : null } }, { key: "set", value: function(e, t) { var i, n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                        a = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
                        r = D.default.domElement(e); return this.isManagedByAutoNumeric(r) ? this.getAutoNumericElement(r).set(t, n, a) : (i = !(!D.default.isNull(n) && n.hasOwnProperty("showWarnings")) || n.showWarnings, D.default.warning("Impossible to find an AutoNumeric object for the given DOM element or selector.", i), null) } }, { key: "getNumericString", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null; return this._get(e, "getNumericString", t) } }, { key: "getFormatted", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null; return this._get(e, "getFormatted", t) } }, { key: "getNumber", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null; return this._get(e, "getNumber", t) } }, { key: "_get", value: function(e, t) { var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                        n = D.default.domElement(e); return this.isManagedByAutoNumeric(n) || D.default.throwError("Impossible to find an AutoNumeric object for the given DOM element or selector."), this.getAutoNumericElement(n)[t](i) } }, { key: "getLocalized", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                        n = D.default.domElement(e); return this.isManagedByAutoNumeric(n) || D.default.throwError("Impossible to find an AutoNumeric object for the given DOM element or selector."), this.getAutoNumericElement(n).getLocalized(t, i) } }, { key: "_stripAllNonNumberCharacters", value: function(e, t, i, n) { return this._stripAllNonNumberCharactersExceptCustomDecimalChar(e, t, i, n).replace(t.decimalCharacter, ".") } }, { key: "_stripAllNonNumberCharactersExceptCustomDecimalChar", value: function(e, t, i, n) { var a = (e = (e = this._normalizeCurrencySuffixAndNegativeSignCharacters(e, t)).replace(t.allowedAutoStrip, "")).match(t.numRegAutoStrip); if (e = a ? [a[1], a[2], a[3]].join("") : "", t.leadingZero === I.options.leadingZero.allow || t.leadingZero === I.options.leadingZero.keep) { var r = "",
                            s = e.split(t.decimalCharacter),
                            o = S(s, 2),
                            l = o[0],
                            u = o[1],
                            c = l;
                        D.default.contains(c, t.negativeSignCharacter) && (r = t.negativeSignCharacter, c = c.replace(t.negativeSignCharacter, "")), "" === r && c.length > t.mIntPos && "0" === c.charAt(0) && (c = c.slice(1)), "" !== r && c.length > t.mIntNeg && "0" === c.charAt(0) && (c = c.slice(1)), e = "" + r + c + (D.default.isUndefined(u) ? "" : t.decimalCharacter + u) } return (i && t.leadingZero === I.options.leadingZero.deny || !n && t.leadingZero === I.options.leadingZero.allow) && (e = e.replace(t.stripReg, "$1$2")), e } }, { key: "_toggleNegativeBracket", value: function(e, t, i) { return i ? this._removeBrackets(e, t) : this._addBrackets(e, t) } }, { key: "_addBrackets", value: function(e, t) { return D.default.isNull(t.negativeBracketsTypeOnBlur) ? e : "" + t.firstBracket + e.replace(t.negativeSignCharacter, "") + t.lastBracket } }, { key: "_removeBrackets", value: function(e, t) { var i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                        n = void 0; return D.default.isNull(t.negativeBracketsTypeOnBlur) || e.charAt(0) !== t.firstBracket ? e : (n = (n = e.replace(t.firstBracket, "")).replace(t.lastBracket, ""), i ? (n = n.replace(t.currencySymbol, ""), this._mergeCurrencySignNegativePositiveSignAndValue(n, t, !0, !1)) : "" + t.negativeSignCharacter + n) } }, { key: "_setBrackets", value: function(e) { if (D.default.isNull(e.negativeBracketsTypeOnBlur)) e.firstBracket = "", e.lastBracket = "";
                    else { var t = e.negativeBracketsTypeOnBlur.split(","),
                            i = S(t, 2),
                            n = i[0],
                            a = i[1];
                        e.firstBracket = n, e.lastBracket = a } } }, { key: "_convertToNumericString", value: function(e, t) { e = this._removeBrackets(e, t, !1), e = (e = this._normalizeCurrencySuffixAndNegativeSignCharacters(e, t)).replace(new RegExp("[" + t.digitGroupSeparator + "]", "g"), ""), "." !== t.decimalCharacter && (e = e.replace(t.decimalCharacter, ".")), D.default.isNegative(e) && e.lastIndexOf("-") === e.length - 1 && (e = "-" + (e = e.replace("-", ""))), t.showPositiveSign && (e = e.replace(t.positiveSignCharacter, "")); var i = t.leadingZero !== I.options.leadingZero.keep,
                        n = D.default.arabicToLatinNumbers(e, i, !1, !1); return isNaN(n) || (e = n.toString()), e } }, { key: "_normalizeCurrencySuffixAndNegativeSignCharacters", value: function(e, t) { return e = String(e), t.currencySymbol !== I.options.currencySymbol.none && (e = e.replace(t.currencySymbol, "")), t.suffixText !== I.options.suffixText.none && (e = e.replace(t.suffixText, "")), t.negativeSignCharacter !== I.options.negativeSignCharacter.hyphen && (e = e.replace(t.negativeSignCharacter, "-")), e } }, { key: "_toLocale", value: function(e, t, i) { if (D.default.isNull(t) || t === I.options.outputFormat.string) return e; var n = void 0; switch (t) {
                        case I.options.outputFormat.number:
                            n = Number(e); break;
                        case I.options.outputFormat.dotNegative:
                            n = D.default.isNegative(e) ? e.replace("-", "") + "-" : e; break;
                        case I.options.outputFormat.comma:
                        case I.options.outputFormat.negativeComma:
                            n = e.replace(".", ","); break;
                        case I.options.outputFormat.commaNegative:
                            n = e.replace(".", ","), n = D.default.isNegative(n) ? n.replace("-", "") + "-" : n; break;
                        case I.options.outputFormat.dot:
                        case I.options.outputFormat.negativeDot:
                            n = e; break;
                        default:
                            D.default.throwError("The given outputFormat [" + t + "] option is not recognized.") } return t !== I.options.outputFormat.number && "-" !== i.negativeSignCharacter && (n = n.replace("-", i.negativeSignCharacter)), n } }, { key: "_modifyNegativeSignAndDecimalCharacterForFormattedValue", value: function(e, t) { return "-" !== t.negativeSignCharacter && (e = e.replace("-", t.negativeSignCharacter)), "." !== t.decimalCharacter && (e = e.replace(".", t.decimalCharacter)), e } }, { key: "_isElementValueEmptyOrOnlyTheNegativeSign", value: function(e, t) { return "" === e || e === t.negativeSignCharacter } }, { key: "_orderValueCurrencySymbolAndSuffixText", value: function(e, t, i) { var n = void 0; if (t.emptyInputBehavior === I.options.emptyInputBehavior.always || i) switch (t.negativePositiveSignPlacement) {
                        case I.options.negativePositiveSignPlacement.left:
                        case I.options.negativePositiveSignPlacement.prefix:
                        case I.options.negativePositiveSignPlacement.none:
                            n = e + t.currencySymbol + t.suffixText; break;
                        default:
                            n = t.currencySymbol + e + t.suffixText } else n = e; return n } }, { key: "_addGroupSeparators", value: function(e, t, i, n) { var a, r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null; if (a = D.default.isNull(r) ? D.default.isNegative(e, t.negativeSignCharacter) || D.default.isNegativeWithBrackets(e, t.firstBracket, t.lastBracket) : r < 0, e = this._stripAllNonNumberCharactersExceptCustomDecimalChar(e, t, !1, i), this._isElementValueEmptyOrOnlyTheNegativeSign(e, t)) return this._orderValueCurrencySymbolAndSuffixText(e, t, !0); var s = D.default.isZeroOrHasNoValue(e);
                    a && (e = e.replace("-", "")), t.digitalGroupSpacing = t.digitalGroupSpacing.toString(); var o = void 0; switch (t.digitalGroupSpacing) {
                        case I.options.digitalGroupSpacing.two:
                            o = /(\d)((\d)(\d{2}?)+)$/; break;
                        case I.options.digitalGroupSpacing.twoScaled:
                            o = /(\d)((?:\d{2}){0,2}\d{3}(?:(?:\d{2}){2}\d{3})*?)$/; break;
                        case I.options.digitalGroupSpacing.four:
                            o = /(\d)((\d{4}?)+)$/; break;
                        case I.options.digitalGroupSpacing.three:
                        default:
                            o = /(\d)((\d{3}?)+)$/ } var l, u = e.split(t.decimalCharacter),
                        c = S(u, 2),
                        h = c[0],
                        d = c[1]; if (t.decimalCharacterAlternative && D.default.isUndefined(d)) { var m = e.split(t.decimalCharacterAlternative),
                            f = S(m, 2);
                        h = f[0], d = f[1] } if ("" !== t.digitGroupSeparator)
                        for (; o.test(h);) h = h.replace(o, "$1" + t.digitGroupSeparator + "$2"); return e = 0 === (l = i ? t.decimalPlacesShownOnFocus : t.decimalPlacesShownOnBlur) || D.default.isUndefined(d) ? h : (d.length > l && (d = d.substring(0, l)), "" + h + t.decimalCharacter + d), e = I._mergeCurrencySignNegativePositiveSignAndValue(e, t, a, s), D.default.isNull(r) && (r = n), null !== t.negativeBracketsTypeOnBlur && (r < 0 || D.default.isNegativeStrict(e, t.negativeSignCharacter)) && (e = this._toggleNegativeBracket(e, t, i)), t.suffixText ? "" + e + t.suffixText : e } }, { key: "_mergeCurrencySignNegativePositiveSignAndValue", value: function(e, t, i, n) { var a = "";
                    i ? a = t.negativeSignCharacter : t.showPositiveSign && !n && (a = t.positiveSignCharacter); var r = void 0; if (t.currencySymbolPlacement === I.options.currencySymbolPlacement.prefix)
                        if (t.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (i || !i && t.showPositiveSign && !n)) switch (t.negativePositiveSignPlacement) {
                            case I.options.negativePositiveSignPlacement.prefix:
                            case I.options.negativePositiveSignPlacement.left:
                                r = "" + a + t.currencySymbol + e; break;
                            case I.options.negativePositiveSignPlacement.right:
                                r = "" + t.currencySymbol + a + e; break;
                            case I.options.negativePositiveSignPlacement.suffix:
                                r = "" + t.currencySymbol + e + a } else r = t.currencySymbol + e;
                        else if (t.currencySymbolPlacement === I.options.currencySymbolPlacement.suffix)
                        if (t.negativePositiveSignPlacement !== I.options.negativePositiveSignPlacement.none && (i || !i && t.showPositiveSign && !n)) switch (t.negativePositiveSignPlacement) {
                            case I.options.negativePositiveSignPlacement.suffix:
                            case I.options.negativePositiveSignPlacement.right:
                                r = "" + e + t.currencySymbol + a; break;
                            case I.options.negativePositiveSignPlacement.left:
                                r = "" + e + a + t.currencySymbol; break;
                            case I.options.negativePositiveSignPlacement.prefix:
                                r = "" + a + e + t.currencySymbol } else r = e + t.currencySymbol;
                    return r } }, { key: "_truncateZeros", value: function(e, t) { var i = void 0; switch (t) {
                        case 0:
                            i = /(\.(?:\d*[1-9])?)0*$/; break;
                        case 1:
                            i = /(\.\d(?:\d*[1-9])?)0*$/; break;
                        default:
                            i = new RegExp("(\\.\\d{" + t + "}(?:\\d*[1-9])?)0*") } return e = e.replace(i, "$1"), 0 === t && (e = e.replace(/\.$/, "")), e } }, { key: "_roundRawValue", value: function(e, t) { return this._roundValue(e, t, t.decimalPlacesRawValue) } }, { key: "_roundFormattedValueShownOnFocus", value: function(e, t) { return this._roundValue(e, t, Number(t.decimalPlacesShownOnFocus)) } }, { key: "_roundFormattedValueShownOnBlur", value: function(e, t) { return this._roundValue(e, t, Number(t.decimalPlacesShownOnBlur)) } }, { key: "_roundFormattedValueShownOnFocusOrBlur", value: function(e, t, i) { return i ? this._roundFormattedValueShownOnFocus(e, t) : this._roundFormattedValueShownOnBlur(e, t) } }, { key: "_roundValue", value: function(e, t, i) { if (D.default.isNull(e)) return e; if (e = "" === e ? "0" : e.toString(), t.roundingMethod === I.options.roundingMethod.toNearest05 || t.roundingMethod === I.options.roundingMethod.toNearest05Alt || t.roundingMethod === I.options.roundingMethod.upToNext05 || t.roundingMethod === I.options.roundingMethod.downToNext05) return this._roundCloseTo05(e, t); var n, a = I._prepareValueForRounding(e, t),
                        r = S(a, 2),
                        s = r[0],
                        o = (e = r[1]).lastIndexOf("."),
                        l = -1 === o,
                        u = e.split("."); if (!(0 < S(u, 2)[1] || t.allowDecimalPadding !== I.options.allowDecimalPadding.never && t.allowDecimalPadding !== I.options.allowDecimalPadding.floats)) return 0 === Number(e) ? e : "" + s + e;
                    n = t.allowDecimalPadding === I.options.allowDecimalPadding.always || t.allowDecimalPadding === I.options.allowDecimalPadding.floats ? i : 0; var c, h = l ? e.length - 1 : o,
                        d = e.length - 1 - h,
                        m = ""; if (d <= i) { if (m = e, d < n) { l && (m = "" + m + t.decimalCharacter); for (var f = "000000"; d < n;) m += f = f.substring(0, n - d), d += f.length } else n < d ? m = this._truncateZeros(m, n) : 0 === d && 0 === n && (m = m.replace(/\.$/, "")); return 0 === Number(m) ? m : "" + s + m }
                    c = l ? i - 1 : Number(i) + Number(o); var g, v = Number(e.charAt(c + 1)),
                        p = e.substring(0, c + 1).split(""); if (g = "." === e.charAt(c) ? e.charAt(c - 1) % 2 : e.charAt(c) % 2, this._shouldRoundUp(v, t, s, g))
                        for (var y = p.length - 1; 0 <= y; y -= 1)
                            if ("." !== p[y]) { if (p[y] = +p[y] + 1, p[y] < 10) break;
                                0 < y && (p[y] = "0") }
                    return p = p.slice(0, c + 1), m = this._truncateZeros(p.join(""), n), 0 === Number(m) ? m : "" + s + m } }, { key: "_roundCloseTo05", value: function(e, t) { switch (t.roundingMethod) {
                        case I.options.roundingMethod.toNearest05:
                        case I.options.roundingMethod.toNearest05Alt:
                            e = (Math.round(20 * e) / 20).toString(); break;
                        case I.options.roundingMethod.upToNext05:
                            e = (Math.ceil(20 * e) / 20).toString(); break;
                        default:
                            e = (Math.floor(20 * e) / 20).toString() } return D.default.contains(e, ".") ? e.length - e.indexOf(".") < 3 ? e + "0" : e : e + ".00" } }, { key: "_prepareValueForRounding", value: function(e, t) { var i = ""; return D.default.isNegativeStrict(e, "-") && (i = "-", e = e.replace("-", "")), e.match(/^\d/) || (e = "0" + e), 0 === Number(e) && (i = ""), (0 < Number(e) && t.leadingZero !== I.options.leadingZero.keep || 0 < e.length && t.leadingZero === I.options.leadingZero.allow) && (e = e.replace(/^0*(\d)/, "$1")), [i, e] } }, { key: "_shouldRoundUp", value: function(e, t, i, n) { return 4 < e && t.roundingMethod === I.options.roundingMethod.halfUpSymmetric || 4 < e && t.roundingMethod === I.options.roundingMethod.halfUpAsymmetric && "" === i || 5 < e && t.roundingMethod === I.options.roundingMethod.halfUpAsymmetric && "-" === i || 5 < e && t.roundingMethod === I.options.roundingMethod.halfDownSymmetric || 5 < e && t.roundingMethod === I.options.roundingMethod.halfDownAsymmetric && "" === i || 4 < e && t.roundingMethod === I.options.roundingMethod.halfDownAsymmetric && "-" === i || 5 < e && t.roundingMethod === I.options.roundingMethod.halfEvenBankersRounding || 5 === e && t.roundingMethod === I.options.roundingMethod.halfEvenBankersRounding && 1 === n || 0 < e && t.roundingMethod === I.options.roundingMethod.toCeilingTowardPositiveInfinity && "" === i || 0 < e && t.roundingMethod === I.options.roundingMethod.toFloorTowardNegativeInfinity && "-" === i || 0 < e && t.roundingMethod === I.options.roundingMethod.upRoundAwayFromZero } }, { key: "_truncateDecimalPlaces", value: function(e, t, i, n) { i && (e = this._roundFormattedValueShownOnFocus(e, t)); var a = e.split(t.decimalCharacter),
                        r = S(a, 2),
                        s = r[0],
                        o = r[1]; if (o && o.length > n)
                        if (0 < n) { var l = o.substring(0, n);
                            e = "" + s + t.decimalCharacter + l } else e = s;
                    return e } }, { key: "_checkIfInRangeWithOverrideOption", value: function(e, t) { if (D.default.isNull(e) && t.emptyInputBehavior === I.options.emptyInputBehavior.null) return [!0, !0];
                    e = (e = e.toString()).replace(",", "."); var i = D.default.parseStr(t.minimumValue),
                        n = D.default.parseStr(t.maximumValue),
                        a = D.default.parseStr(e),
                        r = void 0; switch (t.overrideMinMaxLimits) {
                        case I.options.overrideMinMaxLimits.floor:
                            r = [-1 < D.default.testMinMax(i, a), !0]; break;
                        case I.options.overrideMinMaxLimits.ceiling:
                            r = [!0, D.default.testMinMax(n, a) < 1]; break;
                        case I.options.overrideMinMaxLimits.ignore:
                            r = [!0, !0]; break;
                        default:
                            r = [-1 < D.default.testMinMax(i, a), D.default.testMinMax(n, a) < 1] } return r } }, { key: "_readCookie", value: function(e) { for (var t = e + "=", i = document.cookie.split(";"), n = "", a = 0; a < i.length; a += 1) { for (n = i[a];
                            " " === n.charAt(0);) n = n.substring(1, n.length); if (0 === n.indexOf(t)) return n.substring(t.length, n.length) } return null } }, { key: "_storageTest", value: function() { var e = "modernizr"; try { return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0 } catch (e) { return !1 } } }, { key: "_correctNegativePositiveSignPlacementOption", value: function(e) { if (D.default.isNull(e.negativePositiveSignPlacement))
                        if (D.default.isUndefined(e) || !D.default.isUndefinedOrNullOrEmpty(e.negativePositiveSignPlacement) || D.default.isUndefinedOrNullOrEmpty(e.currencySymbol)) e.negativePositiveSignPlacement = I.options.negativePositiveSignPlacement.left;
                        else switch (e.currencySymbolPlacement) {
                            case I.options.currencySymbolPlacement.suffix:
                                e.negativePositiveSignPlacement = I.options.negativePositiveSignPlacement.prefix; break;
                            case I.options.currencySymbolPlacement.prefix:
                                e.negativePositiveSignPlacement = I.options.negativePositiveSignPlacement.left } } }, { key: "_correctCaretPositionOnFocusAndSelectOnFocusOptions", value: function(e) { return D.default.isNull(e) ? null : (!D.default.isUndefinedOrNullOrEmpty(e.caretPositionOnFocus) && D.default.isUndefinedOrNullOrEmpty(e.selectOnFocus) && (e.selectOnFocus = I.options.selectOnFocus.doNotSelect), D.default.isUndefinedOrNullOrEmpty(e.caretPositionOnFocus) && !D.default.isUndefinedOrNullOrEmpty(e.selectOnFocus) && e.selectOnFocus === I.options.selectOnFocus.select && (e.caretPositionOnFocus = I.options.caretPositionOnFocus.doNoForceCaretPosition), e) } }, { key: "_calculateDecimalPlacesOnInit", value: function(e) { this._validateDecimalPlacesRawValue(e), e.decimalPlacesShownOnFocus === I.options.decimalPlacesShownOnFocus.useDefault && (e.decimalPlacesShownOnFocus = e.decimalPlaces), e.decimalPlacesShownOnBlur === I.options.decimalPlacesShownOnBlur.useDefault && (e.decimalPlacesShownOnBlur = e.decimalPlaces), e.decimalPlacesRawValue === I.options.decimalPlacesRawValue.useDefault && (e.decimalPlacesRawValue = e.decimalPlaces); var t = 0;
                    e.rawValueDivisor && e.rawValueDivisor !== I.options.rawValueDivisor.none && (t = String(e.rawValueDivisor).length - 1) < 0 && (t = 0), e.decimalPlacesRawValue = Math.max(Math.max(e.decimalPlacesShownOnBlur, e.decimalPlacesShownOnFocus) + t, Number(e.originalDecimalPlacesRawValue) + t) } }, { key: "_calculateDecimalPlacesOnUpdate", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                    this._validateDecimalPlacesRawValue(e), D.default.isNull(t) && D.default.throwError("When updating the settings, the previous ones should be passed as an argument."); var i = "decimalPlaces" in e; if (i || "decimalPlacesRawValue" in e || "decimalPlacesShownOnFocus" in e || "decimalPlacesShownOnBlur" in e || "rawValueDivisor" in e) { i ? ("decimalPlacesShownOnFocus" in e && e.decimalPlacesShownOnFocus !== I.options.decimalPlacesShownOnFocus.useDefault || (e.decimalPlacesShownOnFocus = e.decimalPlaces), "decimalPlacesShownOnBlur" in e && e.decimalPlacesShownOnBlur !== I.options.decimalPlacesShownOnBlur.useDefault || (e.decimalPlacesShownOnBlur = e.decimalPlaces), "decimalPlacesRawValue" in e && e.decimalPlacesRawValue !== I.options.decimalPlacesRawValue.useDefault || (e.decimalPlacesRawValue = e.decimalPlaces)) : (D.default.isUndefined(e.decimalPlacesShownOnFocus) && (e.decimalPlacesShownOnFocus = t.decimalPlacesShownOnFocus), D.default.isUndefined(e.decimalPlacesShownOnBlur) && (e.decimalPlacesShownOnBlur = t.decimalPlacesShownOnBlur)); var n = 0;
                        e.rawValueDivisor && e.rawValueDivisor !== I.options.rawValueDivisor.none && (n = String(e.rawValueDivisor).length - 1) < 0 && (n = 0), e.decimalPlaces || e.decimalPlacesRawValue ? e.decimalPlacesRawValue = Math.max(Math.max(e.decimalPlacesShownOnBlur, e.decimalPlacesShownOnFocus) + n, Number(e.decimalPlacesRawValue) + n) : e.decimalPlacesRawValue = Math.max(Math.max(e.decimalPlacesShownOnBlur, e.decimalPlacesShownOnFocus) + n, Number(t.originalDecimalPlacesRawValue) + n) } } }, { key: "_cachesUsualRegularExpressions", value: function(e, t) { var i;
                    i = e.negativeSignCharacter !== I.options.negativeSignCharacter.hyphen ? "([-\\" + e.negativeSignCharacter + "]?)" : "(-?)", t.aNegRegAutoStrip = i, e.allowedAutoStrip = new RegExp("[^-0123456789\\" + e.decimalCharacter + "]", "g"), e.numRegAutoStrip = new RegExp(i + "(?:\\" + e.decimalCharacter + "?([0-9]+\\" + e.decimalCharacter + "[0-9]+)|([0-9]*(?:\\" + e.decimalCharacter + "[0-9]*)?))"), e.stripReg = new RegExp("^" + t.aNegRegAutoStrip + "0*([0-9])"), e.formulaChars = new RegExp("[0-9" + e.decimalCharacter + "+\\-*/() ]") } }, { key: "_convertOldOptionsToNewOnes", value: function(e) { var t = { aSep: "digitGroupSeparator", nSep: "showOnlyNumbersOnFocus", dGroup: "digitalGroupSpacing", aDec: "decimalCharacter", altDec: "decimalCharacterAlternative", aSign: "currencySymbol", pSign: "currencySymbolPlacement", pNeg: "negativePositiveSignPlacement", aSuffix: "suffixText", oLimits: "overrideMinMaxLimits", vMax: "maximumValue", vMin: "minimumValue", mDec: "decimalPlacesOverride", eDec: "decimalPlacesShownOnFocus", scaleDecimal: "decimalPlacesShownOnBlur", aStor: "saveValueToSessionStorage", mRound: "roundingMethod", aPad: "allowDecimalPadding", nBracket: "negativeBracketsTypeOnBlur", wEmpty: "emptyInputBehavior", lZero: "leadingZero", aForm: "formatOnPageLoad", sNumber: "selectNumberOnly", anDefault: "defaultValueOverride", unSetOnSubmit: "unformatOnSubmit", outputType: "outputFormat", debug: "showWarnings", allowDecimalPadding: !0, alwaysAllowDecimalCharacter: !0, caretPositionOnFocus: !0, createLocalList: !0, currencySymbol: !0, currencySymbolPlacement: !0, decimalCharacter: !0, decimalCharacterAlternative: !0, decimalPlaces: !0, decimalPlacesRawValue: !0, decimalPlacesShownOnBlur: !0, decimalPlacesShownOnFocus: !0, defaultValueOverride: !0, digitalGroupSpacing: !0, digitGroupSeparator: !0, divisorWhenUnfocused: !0, emptyInputBehavior: !0, eventBubbles: !0, eventIsCancelable: !0, failOnUnknownOption: !0, formatOnPageLoad: !0, formulaMode: !0, historySize: !0, isCancellable: !0, leadingZero: !0, maximumValue: !0, minimumValue: !0, modifyValueOnWheel: !0, negativeBracketsTypeOnBlur: !0, negativePositiveSignPlacement: !0, negativeSignCharacter: !0, noEventListeners: !0, onInvalidPaste: !0, outputFormat: !0, overrideMinMaxLimits: !0, positiveSignCharacter: !0, rawValueDivisor: !0, readOnly: !0, roundingMethod: !0, saveValueToSessionStorage: !0, selectNumberOnly: !0, selectOnFocus: !0, serializeSpaces: !0, showOnlyNumbersOnFocus: !0, showPositiveSign: !0, showWarnings: !0, styleRules: !0, suffixText: !0, symbolWhenUnfocused: !0, unformatOnHover: !0, unformatOnSubmit: !0, valuesToStrings: !0, watchExternalChanges: !0, wheelOn: !0, wheelStep: !0, allowedAutoStrip: !0, formulaChars: !0, isNegativeSignAllowed: !0, isPositiveSignAllowed: !0, mIntNeg: !0, mIntPos: !0, numRegAutoStrip: !0, originalDecimalPlaces: !0, originalDecimalPlacesRawValue: !0, stripReg: !0 }; for (var i in e)
                        if (e.hasOwnProperty(i)) { if (!0 === t[i]) continue;
                            t.hasOwnProperty(i) ? (D.default.warning("You are using the deprecated option name '" + i + "'. Please use '" + t[i] + "' instead from now on. The old option name will be dropped very soon™.", !0), e[t[i]] = e[i], delete e[i]) : e.failOnUnknownOption && D.default.throwError("Option name '" + i + "' is unknown. Please fix the options passed to autoNumeric") }
                        "mDec" in e && D.default.warning("The old `mDec` option has been deprecated in favor of more accurate options ; `decimalPlaces`, `decimalPlacesRawValue`, `decimalPlacesShownOnFocus` and `decimalPlacesShownOnBlur`.", !0) } }, { key: "_setNegativePositiveSignPermissions", value: function(e) { e.isNegativeSignAllowed = e.minimumValue < 0, e.isPositiveSignAllowed = 0 <= e.maximumValue } }, { key: "_toNumericValue", value: function(e, t) { var i = void 0; return D.default.isNumber(Number(e)) ? i = D.default.scientificToDecimal(e) : (i = this._convertToNumericString(e.toString(), t), D.default.isNumber(Number(i)) || (D.default.warning('The given value "' + e + '" cannot be converted to a numeric one and therefore cannot be used appropriately.', t.showWarnings), i = NaN)), i } }, { key: "_checkIfInRange", value: function(e, t, i) { var n = D.default.parseStr(e); return -1 < D.default.testMinMax(t, n) && D.default.testMinMax(i, n) < 1 } }, { key: "_shouldSkipEventKey", value: function(e) { var t = D.default.isInArray(e, v.default.keyName._allFnKeys),
                        i = e === v.default.keyName.OSLeft || e === v.default.keyName.OSRight,
                        n = e === v.default.keyName.ContextMenu,
                        a = D.default.isInArray(e, v.default.keyName._someNonPrintableKeys),
                        r = e === v.default.keyName.NumLock || e === v.default.keyName.ScrollLock || e === v.default.keyName.Insert || e === v.default.keyName.Command,
                        s = e === v.default.keyName.Unidentified; return t || i || n || a || s || r } }, { key: "_serialize", value: function(e) { var a = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "unformatted",
                        s = this,
                        t = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "+",
                        o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null,
                        l = []; "object" === (void 0 === e ? "undefined" : b(e)) && "form" === e.nodeName.toLowerCase() && Array.prototype.slice.call(e.elements).forEach(function(t) { if (t.name && !t.disabled && -1 === ["file", "reset", "submit", "button"].indexOf(t.type))
                            if ("select-multiple" === t.type) Array.prototype.slice.call(t.options).forEach(function(e) { e.selected && (a ? l.push({ name: t.name, value: e.value }) : l.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(e.value))) });
                            else if (-1 === ["checkbox", "radio"].indexOf(t.type) || t.checked) { var e = void 0; if (s.isManagedByAutoNumeric(t)) { var i = void 0; switch (r) {
                                    case "unformatted":
                                        i = s.getAutoNumericElement(t), D.default.isNull(i) || (e = s.unformat(t, i.getSettings())); break;
                                    case "localized":
                                        if (i = s.getAutoNumericElement(t), !D.default.isNull(i)) { var n = D.default.cloneObject(i.getSettings());
                                            D.default.isNull(o) || (n.outputFormat = o), e = s.localize(t, n) } break;
                                    case "formatted":
                                    default:
                                        e = t.value } } else e = t.value;
                            D.default.isUndefined(e) && D.default.throwError("This error should never be hit. If it has, something really wrong happened!"), a ? l.push({ name: t.name, value: e }) : l.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(e)) } }); var i = void 0; return a ? i = l : (i = l.join("&"), "+" === t && (i = i.replace(/%20/g, "+"))), i } }, { key: "_serializeNumericString", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "+"; return this._serialize(e, !1, "unformatted", t) } }, { key: "_serializeFormatted", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "+"; return this._serialize(e, !1, "formatted", t) } }, { key: "_serializeLocalized", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "+",
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; return this._serialize(e, !1, "localized", t, i) } }, { key: "_serializeNumericStringArray", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "+"; return this._serialize(e, !0, "unformatted", t) } }, { key: "_serializeFormattedArray", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "+"; return this._serialize(e, !0, "formatted", t) } }, { key: "_serializeLocalizedArray", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "+",
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; return this._serialize(e, !0, "localized", t, i) } }]), I }();
        (t.default = p).multiple = function(e) { var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                    t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                    n = []; if (D.default.isObject(i) && (t = i, i = null), D.default.isString(e)) e = [].concat(g(document.querySelectorAll(e)));
                else if (D.default.isObject(e)) { e.hasOwnProperty("rootElement") || D.default.throwError("The object passed to the 'multiple' function is invalid ; no 'rootElement' attribute found."); var a = [].concat(g(e.rootElement.querySelectorAll("input")));
                    e = e.hasOwnProperty("exclude") ? (Array.isArray(e.exclude) || D.default.throwError("The 'exclude' array passed to the 'multiple' function is invalid."), D.default.filterOut(a, e.exclude)) : a } else D.default.isArray(e) || D.default.throwError("The given parameters to the 'multiple' function are invalid."); if (0 === e.length) { var r = !0; return !D.default.isNull(t) && D.default.isBoolean(t.showWarnings) && (r = t.showWarnings), D.default.warning("No valid DOM elements were given hence no AutoNumeric object were instantiated.", r), [] } var s = D.default.isArray(i) && 1 <= i.length,
                    o = !1,
                    l = !1; if (s) { var u = b(Number(i[0]));
                    (o = "number" === u && !isNaN(Number(i[0]))) || ("string" === u || isNaN(u) || "object" === u) && (l = !0) } var c, h = !1; if (D.default.isArray(t) && 1 <= t.length) { var d = b(t[0]); "string" !== d && "object" !== d || (h = !0) }
                c = l ? p.mergeOptions(i) : h ? p.mergeOptions(t) : t; var m = D.default.isNumber(i),
                    f = void 0; return o && (f = i.length), e.forEach(function(e, t) { m ? n.push(new p(e, i, c)) : o && t <= f ? n.push(new p(e, i[t], c)) : n.push(new p(e, null, c)) }), n },
            function() {
                function e(e, t) { t = t || { bubbles: !1, cancelable: !1, detail: void 0 }; var i = document.createEvent("CustomEvent"); return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i }
                Array.from || (Array.from = function(e) { return [].slice.call(e) }), "undefined" != typeof window && "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e) }(), e.exports = t.default }, function(e, t, i) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var n, a = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var i = arguments[t]; for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]) } return e },
            m = function(e, t) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return function(e, t) { var i = [],
                        n = !0,
                        a = !1,
                        r = void 0; try { for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), !t || i.length !== t); n = !0); } catch (e) { a = !0, r = e } finally { try {!n && o.return && o.return() } finally { if (a) throw r } } return i }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance") },
            s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
            o = function() {
                function n(e, t) { for (var i = 0; i < t.length; i++) { var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function(e, t, i) { return t && n(e.prototype, t), i && n(e, i), e } }(),
            l = (n = i(2)) && n.__esModule ? n : { default: n };

        function u(e) { if (Array.isArray(e)) { for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t]; return i } return Array.from(e) } var r = function() {
            function r() {! function(e, t) { if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function") }(this) } return o(r, null, [{ key: "isNull", value: function(e) { return null === e } }, { key: "isUndefined", value: function(e) { return void 0 === e } }, { key: "isUndefinedOrNullOrEmpty", value: function(e) { return null == e || "" === e } }, { key: "isString", value: function(e) { return "string" == typeof e || e instanceof String } }, { key: "isEmptyString", value: function(e) { return "" === e } }, { key: "isBoolean", value: function(e) { return "boolean" == typeof e } }, { key: "isTrueOrFalseString", value: function(e) { var t = String(e).toLowerCase(); return "true" === t || "false" === t } }, { key: "isObject", value: function(e) { return "object" === (void 0 === e ? "undefined" : s(e)) && null !== e && !Array.isArray(e) } }, { key: "isEmptyObj", value: function(e) { for (var t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0 } }, { key: "isNumberStrict", value: function(e) { return "number" == typeof e } }, { key: "isNumber", value: function(e) { return !this.isArray(e) && !isNaN(parseFloat(e)) && isFinite(e) } }, { key: "isDigit", value: function(e) { return /\d/.test(e) } }, { key: "isNumberOrArabic", value: function(e) { var t = this.arabicToLatinNumbers(e, !1, !0, !0); return this.isNumber(t) } }, { key: "isInt", value: function(e) { return "number" == typeof e && parseFloat(e) === parseInt(e, 10) && !isNaN(e) } }, { key: "isFunction", value: function(e) { return "function" == typeof e } }, { key: "isIE11", value: function() { return !!window.MSInputMethodContext && !!document.documentMode } }, { key: "contains", value: function(e, t) { return !(!this.isString(e) || !this.isString(t) || "" === e || "" === t) && -1 !== e.indexOf(t) } }, { key: "isInArray", value: function(e, t) { return !(!this.isArray(t) || t === [] || this.isUndefined(e)) && -1 !== t.indexOf(e) } }, { key: "isArray", value: function(e) { if ("[object Array]" === Object.prototype.toString.call([])) return Array.isArray(e) || "object" === (void 0 === e ? "undefined" : s(e)) && "[object Array]" === Object.prototype.toString.call(e); throw new Error("toString message changed for Object Array") } }, { key: "isElement", value: function(e) { return "undefined" != typeof Element && e instanceof Element } }, { key: "isInputElement", value: function(e) { return this.isElement(e) && "input" === e.tagName.toLowerCase() } }, { key: "decimalPlaces", value: function(e) { var t = e.split("."),
                        i = m(t, 2)[1]; return this.isUndefined(i) ? 0 : i.length } }, { key: "indexFirstNonZeroDecimalPlace", value: function(e) { var t = String(Math.abs(e)).split("."),
                        i = m(t, 2)[1]; if (this.isUndefined(i)) return 0; var n = i.lastIndexOf("0"); return -1 === n ? n = 0 : n += 2, n } }, { key: "keyCodeNumber", value: function(e) { return void 0 === e.which ? e.keyCode : e.which } }, { key: "character", value: function(e) { var t = void 0; if ("Unidentified" === e.key || void 0 === e.key || this.isSeleniumBot()) { var i = this.keyCodeNumber(e); if (i === l.default.keyCode.AndroidDefault) return l.default.keyName.AndroidDefault; var n = l.default.fromCharCodeKeyCode[i];
                        t = r.isUndefinedOrNullOrEmpty(n) ? String.fromCharCode(i) : n } else { var a = void 0; switch (e.key) {
                            case "Add":
                                t = l.default.keyName.NumpadPlus; break;
                            case "Apps":
                                t = l.default.keyName.ContextMenu; break;
                            case "Crsel":
                                t = l.default.keyName.CrSel; break;
                            case "Decimal":
                                t = l.default.keyName.NumpadDot; break;
                            case "Del":
                                t = "firefox" === (a = this.browser()).name && a.version <= 36 || "ie" === a.name && a.version <= 9 ? l.default.keyName.Dot : l.default.keyName.Delete; break;
                            case "Divide":
                                t = l.default.keyName.NumpadSlash; break;
                            case "Down":
                                t = l.default.keyName.DownArrow; break;
                            case "Esc":
                                t = l.default.keyName.Esc; break;
                            case "Exsel":
                                t = l.default.keyName.ExSel; break;
                            case "Left":
                                t = l.default.keyName.LeftArrow; break;
                            case "Meta":
                            case "Super":
                                t = l.default.keyName.OSLeft; break;
                            case "Multiply":
                                t = l.default.keyName.NumpadMultiply; break;
                            case "Right":
                                t = l.default.keyName.RightArrow; break;
                            case "Spacebar":
                                t = l.default.keyName.Space; break;
                            case "Subtract":
                                t = l.default.keyName.NumpadMinus; break;
                            case "Up":
                                t = l.default.keyName.UpArrow; break;
                            default:
                                t = e.key } } return t } }, { key: "browser", value: function() { var e = navigator.userAgent,
                        t = void 0,
                        i = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; return /trident/i.test(i[1]) ? { name: "ie", version: (t = /\brv[ :]+(\d+)/g.exec(e) || [])[1] || "" } : "Chrome" === i[1] && null !== (t = e.match(/\b(OPR|Edge)\/(\d+)/)) ? { name: t[1].replace("OPR", "opera"), version: t[2] } : (i = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"], null !== (t = e.match(/version\/(\d+)/i)) && i.splice(1, 1, t[1]), { name: i[0].toLowerCase(), version: i[1] }) } }, { key: "isSeleniumBot", value: function() { return !0 === window.navigator.webdriver } }, { key: "isNegative", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "-",
                        i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2]; return e === t || "" !== e && (r.isNumber(e) ? e < 0 : i ? this.contains(e, t) : this.isNegativeStrict(e, t)) } }, { key: "isNegativeStrict", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "-"; return e.charAt(0) === t } }, { key: "isNegativeWithBrackets", value: function(e, t, i) { return e.charAt(0) === t && this.contains(e, i) } }, { key: "isZeroOrHasNoValue", value: function(e) { return !/[1-9]/g.test(e) } }, { key: "setRawNegativeSign", value: function(e) { return this.isNegativeStrict(e, "-") ? e : "-" + e } }, { key: "replaceCharAt", value: function(e, t, i) { return "" + e.substr(0, t) + i + e.substr(t + i.length) } }, { key: "clampToRangeLimits", value: function(e, t) { return Math.max(t.minimumValue, Math.min(t.maximumValue, e)) } }, { key: "countNumberCharactersOnTheCaretLeftSide", value: function(e, t, i) { for (var n = new RegExp("[0-9" + i + "-]"), a = 0, r = 0; r < t; r++) n.test(e[r]) && a++; return a } }, { key: "findCaretPositionInFormattedNumber", value: function(e, t, i, n) { var a = i.length,
                        r = e.length,
                        s = void 0,
                        o = 0; for (s = 0; s < a && o < r && o < t; s++)(e[o] === i[s] || "." === e[o] && i[s] === n) && o++; return s } }, { key: "countCharInText", value: function(e, t) { for (var i = 0, n = 0; n < t.length; n++) t[n] === e && i++; return i } }, { key: "convertCharacterCountToIndexPosition", value: function(e) { return Math.max(e, e - 1) } }, { key: "getElementSelection", value: function(e) { var t = {},
                        i = void 0; try { i = this.isUndefined(e.selectionStart) } catch (e) { i = !1 } try { if (i) { var n = window.getSelection().getRangeAt(0);
                            t.start = n.startOffset, t.end = n.endOffset, t.length = t.end - t.start } else t.start = e.selectionStart, t.end = e.selectionEnd, t.length = t.end - t.start } catch (e) { t.start = 0, t.end = 0, t.length = 0 } return t } }, { key: "setElementSelection", value: function(e, t) { var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; if (this.isUndefinedOrNullOrEmpty(i) && (i = t), this.isInputElement(e)) e.setSelectionRange(t, i);
                    else if (!r.isNull(e.firstChild)) { var n = document.createRange();
                        n.setStart(e.firstChild, t), n.setEnd(e.firstChild, i); var a = window.getSelection();
                        a.removeAllRanges(), a.addRange(n) } } }, { key: "throwError", value: function(e) { throw new Error(e) } }, { key: "warning", value: function(e) {
                    (!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && console.warn("Warning: " + e) } }, { key: "isWheelUpEvent", value: function(e) { return e.deltaY || this.throwError("The event passed as a parameter is not a valid wheel event, '" + e.type + "' given."), e.deltaY < 0 } }, { key: "isWheelDownEvent", value: function(e) { return e.deltaY || this.throwError("The event passed as a parameter is not a valid wheel event, '" + e.type + "' given."), 0 < e.deltaY } }, { key: "forceDecimalPlaces", value: function(e, t) { var i = String(e).split("."),
                        n = m(i, 2),
                        a = n[0],
                        r = n[1]; return r ? a + "." + r.substr(0, t) : e } }, { key: "roundToNearest", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1e3; return 0 === e ? 0 : (0 === t && this.throwError("The `stepPlace` used to round is equal to `0`. This value must not be equal to zero."), Math.round(e / t) * t) } }, { key: "modifyAndRoundToNearestAuto", value: function(e, t, i) { e = Number(this.forceDecimalPlaces(e, i)); var n = Math.abs(e); if (0 <= n && n < 1) { var a = Math.pow(10, -i); if (0 === e) return t ? a : -a; var r, s, o = i,
                            l = this.indexFirstNonZeroDecimalPlace(e); return r = o - 1 <= l ? a : Math.pow(10, -(l + 1)), s = t ? e + r : e - r, this.roundToNearest(s, r) }
                    e = parseInt(e, 10); var u = Math.abs(e).toString().length,
                        c = void 0; switch (u) {
                        case 1:
                            c = 0; break;
                        case 2:
                        case 3:
                            c = 1; break;
                        case 4:
                        case 5:
                            c = 2; break;
                        default:
                            c = u - 3 } var h, d = Math.pow(10, c); return (h = t ? e + d : e - d) <= 10 && -10 <= h ? h : this.roundToNearest(h, d) } }, { key: "addAndRoundToNearestAuto", value: function(e, t) { return this.modifyAndRoundToNearestAuto(e, !0, t) } }, { key: "subtractAndRoundToNearestAuto", value: function(e, t) { return this.modifyAndRoundToNearestAuto(e, !1, t) } }, { key: "arabicToLatinNumbers", value: function(e) { var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                        n = 3 < arguments.length && void 0 !== arguments[3] && arguments[3]; if (this.isNull(e)) return e; var a = e.toString(); if ("" === a) return e; if (null === a.match(/[٠١٢٣٤٥٦٧٨٩۴۵۶]/g)) return t && (a = Number(a)), a;
                    i && (a = a.replace(/٫/, ".")), n && (a = a.replace(/٬/g, "")), a = a.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function(e) { return e.charCodeAt(0) - 1632 }).replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function(e) { return e.charCodeAt(0) - 1776 }); var r = Number(a); return isNaN(r) ? r : (t && (a = r), a) } }, { key: "triggerEvent", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document,
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                        n = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
                        a = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4],
                        r = void 0;
                    window.CustomEvent ? r = new CustomEvent(e, { detail: i, bubbles: n, cancelable: a }) : (r = document.createEvent("CustomEvent")).initCustomEvent(e, n, a, { detail: i }), t.dispatchEvent(r) } }, { key: "parseStr", value: function(e) { var t = {},
                        i = void 0,
                        n = void 0,
                        a = void 0,
                        r = void 0; if (0 === e && 1 / e < 0 && (e = "-0"), e = e.toString(), this.isNegativeStrict(e, "-") ? (e = e.slice(1), t.s = -1) : t.s = 1, -1 < (i = e.indexOf(".")) && (e = e.replace(".", "")), i < 0 && (i = e.length), (n = -1 === e.search(/[1-9]/i) ? e.length : e.search(/[1-9]/i)) === (a = e.length)) t.e = 0, t.c = [0];
                    else { for (r = a - 1;
                            "0" === e.charAt(r); r -= 1) a -= 1; for (a -= 1, t.e = i - n - 1, t.c = [], i = 0; n <= a; n += 1) t.c[i] = +e.charAt(n), i += 1 } return t } }, { key: "testMinMax", value: function(e, t) { var i = t.c,
                        n = e.c,
                        a = t.s,
                        r = e.s,
                        s = t.e,
                        o = e.e; if (!i[0] || !n[0]) return i[0] ? a : n[0] ? -r : 0; if (a !== r) return a; var l = a < 0; if (s !== o) return o < s ^ l ? 1 : -1; for (a = -1, r = (s = i.length) < (o = n.length) ? s : o, a += 1; a < r; a += 1)
                        if (i[a] !== n[a]) return i[a] > n[a] ^ l ? 1 : -1;
                    return s === o ? 0 : o < s ^ l ? 1 : -1 } }, { key: "randomString", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 5; return Math.random().toString(36).substr(2, e) } }, { key: "domElement", value: function(e) { return r.isString(e) ? document.querySelector(e) : e } }, { key: "getElementValue", value: function(e) { return "input" === e.tagName.toLowerCase() ? e.value : this.text(e) } }, { key: "setElementValue", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null; "input" === e.tagName.toLowerCase() ? e.value = t : e.textContent = t } }, { key: "cloneObject", value: function(e) { return a({}, e) } }, { key: "camelize", value: function(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "-",
                        i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                        n = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3]; if (this.isNull(e)) return null;
                    i && (e = e.replace(/^data-/, "")); var a = e.split(t).map(function(e) { return "" + e.charAt(0).toUpperCase() + e.slice(1) }); return a = a.join(""), n && (a = "" + a.charAt(0).toLowerCase() + a.slice(1)), a } }, { key: "text", value: function(e) { var t = e.nodeType; return t === Node.ELEMENT_NODE || t === Node.DOCUMENT_NODE || t === Node.DOCUMENT_FRAGMENT_NODE ? e.textContent : t === Node.TEXT_NODE ? e.nodeValue : "" } }, { key: "setText", value: function(e, t) { var i = e.nodeType;
                    i !== Node.ELEMENT_NODE && i !== Node.DOCUMENT_NODE && i !== Node.DOCUMENT_FRAGMENT_NODE || (e.textContent = t) } }, { key: "filterOut", value: function(e, t) { var i = this; return e.filter(function(e) { return !i.isInArray(e, t) }) } }, { key: "trimPaddedZerosFromDecimalPlaces", value: function(e) { if ("" === (e = String(e))) return ""; var t = e.split("."),
                        i = m(t, 2),
                        n = i[0],
                        a = i[1]; if (this.isUndefinedOrNullOrEmpty(a)) return n; var r = a.replace(/0+$/g, ""); return "" === r ? n : n + "." + r } }, { key: "getHoveredElement", value: function() { var e = [].concat(u(document.querySelectorAll(":hover"))); return e[e.length - 1] } }, { key: "arrayTrim", value: function(e, t) { var i = e.length; return 0 === i || i < t ? e : t < 0 ? [] : (e.length = parseInt(t, 10), e) } }, { key: "arrayUnique", value: function() { var e; return [].concat(u(new Set((e = []).concat.apply(e, arguments)))) } }, { key: "mergeMaps", value: function() { for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i]; return new Map(t.reduce(function(e, t) { return e.concat([].concat(u(t))) }, [])) } }, { key: "objectKeyLookup", value: function(e, t) { var i = Object.entries(e).find(function(e) { return e[1] === t }),
                        n = null; return void 0 !== i && (n = i[0]), n } }, { key: "insertAt", value: function(e, t, i) { if (i > (e = String(e)).length) throw new Error("The given index is out of the string range."); if (1 !== t.length) throw new Error("The given string `char` should be only one character long."); return "" === e && 0 === i ? t : "" + e.slice(0, i) + t + e.slice(i) } }, { key: "scientificToDecimal", value: function(e) { var t = Number(e); if (isNaN(t)) return NaN; if (e = String(e), !this.contains(e, "e") && !this.contains(e, "E")) return e; var i = e.split(/e/i),
                        n = m(i, 2),
                        a = n[0],
                        r = n[1],
                        s = a < 0;
                    s && (a = a.replace("-", "")); var o = +r < 0;
                    o && (r = r.replace("-", "")); var l = a.split(/\./),
                        u = m(l, 2),
                        c = u[0],
                        h = u[1],
                        d = void 0; return d = o ? "" + (d = c.length > r ? this.insertAt(c, ".", c.length - r) : "0." + "0".repeat(r - c.length) + c) + (h || "") : h ? (a = "" + c + h, r < h.length ? this.insertAt(a, ".", +r + c.length) : "" + a + "0".repeat(r - h.length)) : "" + (a = a.replace(".", "")) + "0".repeat(Number(r)), s && (d = "-" + d), d } }]), r }();
        t.default = r, e.exports = t.default }, function(e, t, i) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var n = { allowedTagList: ["b", "caption", "cite", "code", "const", "dd", "del", "div", "dfn", "dt", "em", "h1", "h2", "h3", "h4", "h5", "h6", "input", "ins", "kdb", "label", "li", "option", "output", "p", "q", "s", "sample", "span", "strong", "td", "th", "u"] };
        Object.freeze(n.allowedTagList), Object.defineProperty(n, "allowedTagList", { configurable: !1, writable: !1 }), n.keyCode = { Backspace: 8, Tab: 9, Enter: 13, Shift: 16, Ctrl: 17, Alt: 18, Pause: 19, CapsLock: 20, Esc: 27, Space: 32, PageUp: 33, PageDown: 34, End: 35, Home: 36, LeftArrow: 37, UpArrow: 38, RightArrow: 39, DownArrow: 40, Insert: 45, Delete: 46, num0: 48, num1: 49, num2: 50, num3: 51, num4: 52, num5: 53, num6: 54, num7: 55, num8: 56, num9: 57, a: 65, b: 66, c: 67, d: 68, e: 69, f: 70, g: 71, h: 72, i: 73, j: 74, k: 75, l: 76, m: 77, n: 78, o: 79, p: 80, q: 81, r: 82, s: 83, t: 84, u: 85, v: 86, w: 87, x: 88, y: 89, z: 90, OSLeft: 91, OSRight: 92, ContextMenu: 93, numpad0: 96, numpad1: 97, numpad2: 98, numpad3: 99, numpad4: 100, numpad5: 101, numpad6: 102, numpad7: 103, numpad8: 104, numpad9: 105, MultiplyNumpad: 106, PlusNumpad: 107, MinusNumpad: 109, DotNumpad: 110, SlashNumpad: 111, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, NumLock: 144, ScrollLock: 145, HyphenFirefox: 173, MyComputer: 182, MyCalculator: 183, Semicolon: 186, Equal: 187, Comma: 188, Hyphen: 189, Dot: 190, Slash: 191, Backquote: 192, LeftBracket: 219, Backslash: 220, RightBracket: 221, Quote: 222, Command: 224, AltGraph: 225, AndroidDefault: 229 }, Object.freeze(n.keyCode), Object.defineProperty(n, "keyCode", { configurable: !1, writable: !1 }), n.fromCharCodeKeyCode = { 0: "LaunchCalculator", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 91: "OS", 92: "OSRight", 93: "ContextMenu", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 173: "-", 182: "MyComputer", 183: "MyCalculator", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'", 224: "Meta", 225: "AltGraph" }, Object.freeze(n.fromCharCodeKeyCode), Object.defineProperty(n, "fromCharCodeKeyCode", { configurable: !1, writable: !1 }), n.keyName = { Unidentified: "Unidentified", AndroidDefault: "AndroidDefault", Alt: "Alt", AltGr: "AltGraph", CapsLock: "CapsLock", Ctrl: "Control", Fn: "Fn", FnLock: "FnLock", Hyper: "Hyper", Meta: "Meta", OSLeft: "OS", OSRight: "OS", Command: "OS", NumLock: "NumLock", ScrollLock: "ScrollLock", Shift: "Shift", Super: "Super", Symbol: "Symbol", SymbolLock: "SymbolLock", Enter: "Enter", Tab: "Tab", Space: " ", LeftArrow: "ArrowLeft", UpArrow: "ArrowUp", RightArrow: "ArrowRight", DownArrow: "ArrowDown", End: "End", Home: "Home", PageUp: "PageUp", PageDown: "PageDown", Backspace: "Backspace", Clear: "Clear", Copy: "Copy", CrSel: "CrSel", Cut: "Cut", Delete: "Delete", EraseEof: "EraseEof", ExSel: "ExSel", Insert: "Insert", Paste: "Paste", Redo: "Redo", Undo: "Undo", Accept: "Accept", Again: "Again", Attn: "Attn", Cancel: "Cancel", ContextMenu: "ContextMenu", Esc: "Escape", Execute: "Execute", Find: "Find", Finish: "Finish", Help: "Help", Pause: "Pause", Play: "Play", Props: "Props", Select: "Select", ZoomIn: "ZoomIn", ZoomOut: "ZoomOut", BrightnessDown: "BrightnessDown", BrightnessUp: "BrightnessUp", Eject: "Eject", LogOff: "LogOff", Power: "Power", PowerOff: "PowerOff", PrintScreen: "PrintScreen", Hibernate: "Hibernate", Standby: "Standby", WakeUp: "WakeUp", Compose: "Compose", Dead: "Dead", F1: "F1", F2: "F2", F3: "F3", F4: "F4", F5: "F5", F6: "F6", F7: "F7", F8: "F8", F9: "F9", F10: "F10", F11: "F11", F12: "F12", Print: "Print", num0: "0", num1: "1", num2: "2", num3: "3", num4: "4", num5: "5", num6: "6", num7: "7", num8: "8", num9: "9", a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "i", j: "j", k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t", u: "u", v: "v", w: "w", x: "x", y: "y", z: "z", A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J", K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T", U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z", Semicolon: ";", Equal: "=", Comma: ",", Hyphen: "-", Minus: "-", Plus: "+", Dot: ".", Slash: "/", Backquote: "`", LeftParenthesis: "(", RightParenthesis: ")", LeftBracket: "[", RightBracket: "]", Backslash: "\\", Quote: "'", numpad0: "0", numpad1: "1", numpad2: "2", numpad3: "3", numpad4: "4", numpad5: "5", numpad6: "6", numpad7: "7", numpad8: "8", numpad9: "9", NumpadDot: ".", NumpadDotAlt: ",", NumpadMultiply: "*", NumpadPlus: "+", NumpadMinus: "-", NumpadSubtract: "-", NumpadSlash: "/", NumpadDotObsoleteBrowsers: "Decimal", NumpadMultiplyObsoleteBrowsers: "Multiply", NumpadPlusObsoleteBrowsers: "Add", NumpadMinusObsoleteBrowsers: "Subtract", NumpadSlashObsoleteBrowsers: "Divide", _allFnKeys: ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"], _someNonPrintableKeys: ["Tab", "Enter", "Shift", "ShiftLeft", "ShiftRight", "Control", "ControlLeft", "ControlRight", "Alt", "AltLeft", "AltRight", "Pause", "CapsLock", "Escape"], _directionKeys: ["PageUp", "PageDown", "End", "Home", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp"] }, Object.freeze(n.keyName._allFnKeys), Object.freeze(n.keyName._someNonPrintableKeys), Object.freeze(n.keyName._directionKeys), Object.freeze(n.keyName), Object.defineProperty(n, "keyName", { configurable: !1, writable: !1 }), Object.freeze(n), t.default = n, e.exports = t.default }, function(e, t, i) { "use strict"; var n, a = s(i(0)),
            r = s(i(1));

        function s(e) { return e && e.__esModule ? e : { default: e } }
        a.default.options = { allowDecimalPadding: { always: !0, never: !1, floats: "floats" }, alwaysAllowDecimalCharacter: { alwaysAllow: !0, doNotAllow: !1 }, caretPositionOnFocus: { start: "start", end: "end", decimalLeft: "decimalLeft", decimalRight: "decimalRight", doNoForceCaretPosition: null }, createLocalList: { createList: !0, doNotCreateList: !1 }, currencySymbol: { none: "", currencySign: "¤", austral: "₳", australCentavo: "¢", baht: "฿", cedi: "₵", cent: "¢", colon: "₡", cruzeiro: "₢", dollar: "$", dong: "₫", drachma: "₯", dram: "​֏", european: "₠", euro: "€", florin: "ƒ", franc: "₣", guarani: "₲", hryvnia: "₴", kip: "₭", att: "ອັດ", lepton: "Λ.", lira: "₺", liraOld: "₤", lari: "₾", mark: "ℳ", mill: "₥", naira: "₦", peseta: "₧", peso: "₱", pfennig: "₰", pound: "£", real: "R$", riel: "៛", ruble: "₽", rupee: "₹", rupeeOld: "₨", shekel: "₪", shekelAlt: "ש״ח‎‎", taka: "৳", tenge: "₸", togrog: "₮", won: "₩", yen: "¥" }, currencySymbolPlacement: { prefix: "p", suffix: "s" }, decimalCharacter: { comma: ",", dot: ".", middleDot: "·", arabicDecimalSeparator: "٫", decimalSeparatorKeySymbol: "⎖" }, decimalCharacterAlternative: { none: null, comma: ",", dot: "." }, decimalPlaces: { none: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 }, decimalPlacesRawValue: { useDefault: null, none: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 }, decimalPlacesShownOnBlur: { useDefault: null, none: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 }, decimalPlacesShownOnFocus: { useDefault: null, none: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 }, defaultValueOverride: { doNotOverride: null }, digitalGroupSpacing: { two: "2", twoScaled: "2s", three: "3", four: "4" }, digitGroupSeparator: { comma: ",", dot: ".", normalSpace: " ", thinSpace: " ", narrowNoBreakSpace: " ", noBreakSpace: " ", noSeparator: "", apostrophe: "'", arabicThousandsSeparator: "٬", dotAbove: "˙", privateUseTwo: "’" }, divisorWhenUnfocused: { none: null, percentage: 100, permille: 1e3, basisPoint: 1e4 }, emptyInputBehavior: { focus: "focus", press: "press", always: "always", zero: "zero", min: "min", max: "max", null: "null" }, eventBubbles: { bubbles: !0, doesNotBubble: !1 }, eventIsCancelable: { isCancelable: !0, isNotCancelable: !1 }, failOnUnknownOption: { fail: !0, ignore: !1 }, formatOnPageLoad: { format: !0, doNotFormat: !1 }, formulaMode: { enabled: !0, disabled: !1 }, historySize: { verySmall: 5, small: 10, medium: 20, large: 50, veryLarge: 100, insane: Number.MAX_SAFE_INTEGER }, isCancellable: { cancellable: !0, notCancellable: !1 }, leadingZero: { allow: "allow", deny: "deny", keep: "keep" }, maximumValue: { tenTrillions: "10000000000000", oneBillion: "1000000000", zero: "0" }, minimumValue: { tenTrillions: "-10000000000000", oneBillion: "-1000000000", zero: "0" }, modifyValueOnWheel: { modifyValue: !0, doNothing: !1 }, negativeBracketsTypeOnBlur: { parentheses: "(,)", brackets: "[,]", chevrons: "<,>", curlyBraces: "{,}", angleBrackets: "〈,〉", japaneseQuotationMarks: "｢,｣", halfBrackets: "⸤,⸥", whiteSquareBrackets: "⟦,⟧", quotationMarks: "‹,›", guillemets: "«,»", none: null }, negativePositiveSignPlacement: { prefix: "p", suffix: "s", left: "l", right: "r", none: null }, negativeSignCharacter: { hyphen: "-", minus: "−", heavyMinus: "➖", fullWidthHyphen: "－", circledMinus: "⊖", squaredMinus: "⊟", triangleMinus: "⨺", plusMinus: "±", minusPlus: "∓", dotMinus: "∸", minusTilde: "≂", not: "¬" }, noEventListeners: { noEvents: !0, addEvents: !1 }, onInvalidPaste: { error: "error", ignore: "ignore", clamp: "clamp", truncate: "truncate", replace: "replace" }, outputFormat: { string: "string", number: "number", dot: ".", negativeDot: "-.", comma: ",", negativeComma: "-,", dotNegative: ".-", commaNegative: ",-", none: null }, overrideMinMaxLimits: { ceiling: "ceiling", floor: "floor", ignore: "ignore", doNotOverride: null }, positiveSignCharacter: { plus: "+", fullWidthPlus: "＋", heavyPlus: "➕", doublePlus: "⧺", triplePlus: "⧻", circledPlus: "⊕", squaredPlus: "⊞", trianglePlus: "⨹", plusMinus: "±", minusPlus: "∓", dotPlus: "∔", altHebrewPlus: "﬩", normalSpace: " ", thinSpace: " ", narrowNoBreakSpace: " ", noBreakSpace: " " }, rawValueDivisor: { none: null, percentage: 100, permille: 1e3, basisPoint: 1e4 }, readOnly: { readOnly: !0, readWrite: !1 }, roundingMethod: { halfUpSymmetric: "S", halfUpAsymmetric: "A", halfDownSymmetric: "s", halfDownAsymmetric: "a", halfEvenBankersRounding: "B", upRoundAwayFromZero: "U", downRoundTowardZero: "D", toCeilingTowardPositiveInfinity: "C", toFloorTowardNegativeInfinity: "F", toNearest05: "N05", toNearest05Alt: "CHF", upToNext05: "U05", downToNext05: "D05" }, saveValueToSessionStorage: { save: !0, doNotSave: !1 }, selectNumberOnly: { selectNumbersOnly: !0, selectAll: !1 }, selectOnFocus: { select: !0, doNotSelect: !1 }, serializeSpaces: { plus: "+", percent: "%20" }, showOnlyNumbersOnFocus: { onlyNumbers: !0, showAll: !1 }, showPositiveSign: { show: !0, hide: !1 }, showWarnings: { show: !0, hide: !1 }, styleRules: { none: null, positiveNegative: { positive: "autoNumeric-positive", negative: "autoNumeric-negative" }, range0To100With4Steps: { ranges: [{ min: 0, max: 25, class: "autoNumeric-red" }, { min: 25, max: 50, class: "autoNumeric-orange" }, { min: 50, max: 75, class: "autoNumeric-yellow" }, { min: 75, max: 100, class: "autoNumeric-green" }] }, evenOdd: { userDefined: [{ callback: function(e) { return e % 2 == 0 }, classes: ["autoNumeric-even", "autoNumeric-odd"] }] }, rangeSmallAndZero: { userDefined: [{ callback: function(e) { return -1 <= e && e < 0 ? 0 : 0 === Number(e) ? 1 : 0 < e && e <= 1 ? 2 : null }, classes: ["autoNumeric-small-negative", "autoNumeric-zero", "autoNumeric-small-positive"] }] } }, suffixText: { none: "", percentage: "%", permille: "‰", basisPoint: "‱" }, symbolWhenUnfocused: { none: null, percentage: "%", permille: "‰", basisPoint: "‱" }, unformatOnHover: { unformat: !0, doNotUnformat: !1 }, unformatOnSubmit: { unformat: !0, keepCurrentValue: !1 }, valuesToStrings: { none: null, zeroDash: { 0: "-" }, oneAroundZero: { "-1": "Min", 1: "Max" } }, watchExternalChanges: { watch: !0, doNotWatch: !1 }, wheelOn: { focus: "focus", hover: "hover" }, wheelStep: { progressive: "progressive" } }, n = a.default.options, Object.getOwnPropertyNames(n).forEach(function(e) { "valuesToStrings" === e ? Object.getOwnPropertyNames(n.valuesToStrings).forEach(function(e) { r.default.isIE11() || null === n.valuesToStrings[e] || Object.freeze(n.valuesToStrings[e]) }) : "styleRules" !== e && (r.default.isIE11() || null === n[e] || Object.freeze(n[e])) }), Object.freeze(n), Object.defineProperty(a.default, "options", { configurable: !1, writable: !1 }) }, function(e, t, i) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var n = a(i(0));

        function a(e) { return e && e.__esModule ? e : { default: e } }
        a(i(10)), a(i(3)), a(i(11)), a(i(12)), t.default = n.default, e.exports = t.default }, function(e, t, i) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var n = function() {
                function n(e, t) { for (var i = 0; i < t.length; i++) { var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function(e, t, i) { return t && n(e.prototype, t), i && n(e, i), e } }(),
            a = function() {
                function i(e) { if (function(e, t) { if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function") }(this), null === e) throw new Error("Invalid AST") } return n(i, [{ key: "evaluate", value: function(e) { if (null == e) throw new Error("Invalid AST sub-tree"); if ("number" === e.type) return e.value; if ("unaryMinus" === e.type) return -this.evaluate(e.left); var t = this.evaluate(e.left),
                            i = this.evaluate(e.right); switch (e.type) {
                            case "op_+":
                                return Number(t) + Number(i);
                            case "op_-":
                                return t - i;
                            case "op_*":
                                return t * i;
                            case "op_/":
                                return t / i;
                            default:
                                throw new Error("Invalid operator '" + e.type + "'") } } }]), i }();
        t.default = a, e.exports = t.default }, function(e, t, i) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var n = function() {
                function n(e, t) { for (var i = 0; i < t.length; i++) { var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function(e, t, i) { return t && n(e.prototype, t), i && n(e, i), e } }(),
            a = s(i(7)),
            r = s(i(8));

        function s(e) { return e && e.__esModule ? e : { default: e } } var o = function() {
            function i(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "."; return function(e, t) { if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function") }(this), this.text = e, this.decimalCharacter = t, this.lexer = new r.default(e), this.token = this.lexer.getNextToken(this.decimalCharacter), this._exp() } return n(i, [{ key: "_exp", value: function() { var e = this._term(),
                        t = this._moreExp(); return a.default.createNode("op_+", e, t) } }, { key: "_moreExp", value: function() { var e = void 0,
                        t = void 0; switch (this.token.type) {
                        case "+":
                            return this.token = this.lexer.getNextToken(this.decimalCharacter), e = this._term(), t = this._moreExp(), a.default.createNode("op_+", t, e);
                        case "-":
                            return this.token = this.lexer.getNextToken(this.decimalCharacter), e = this._term(), t = this._moreExp(), a.default.createNode("op_-", t, e) } return a.default.createLeaf(0) } }, { key: "_term", value: function() { var e = this._factor(),
                        t = this._moreTerms(); return a.default.createNode("op_*", e, t) } }, { key: "_moreTerms", value: function() { var e = void 0,
                        t = void 0; switch (this.token.type) {
                        case "*":
                            return this.token = this.lexer.getNextToken(this.decimalCharacter), e = this._factor(), t = this._moreTerms(), a.default.createNode("op_*", t, e);
                        case "/":
                            return this.token = this.lexer.getNextToken(this.decimalCharacter), e = this._factor(), t = this._moreTerms(), a.default.createNode("op_/", t, e) } return a.default.createLeaf(1) } }, { key: "_factor", value: function() { var e = void 0,
                        t = void 0,
                        i = void 0; switch (this.token.type) {
                        case "num":
                            return i = this.token.value, this.token = this.lexer.getNextToken(this.decimalCharacter), a.default.createLeaf(i);
                        case "-":
                            return this.token = this.lexer.getNextToken(this.decimalCharacter), t = this._factor(), a.default.createUnaryNode(t);
                        case "(":
                            return this.token = this.lexer.getNextToken(this.decimalCharacter), e = this._exp(), this._match(")"), e;
                        default:
                            throw new Error("Unexpected token '" + this.token.symbol + "' with type '" + this.token.type + "' at position '" + this.token.index + "' in the factor function") } } }, { key: "_match", value: function(e) { var t = this.lexer.getIndex() - 1; if (this.text[t] !== e) throw new Error("Unexpected token '" + this.token.symbol + "' at position '" + t + "' in the match function");
                    this.token = this.lexer.getNextToken(this.decimalCharacter) } }]), i }();
        t.default = o, e.exports = t.default }, function(e, t, i) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var n = function() {
                function n(e, t) { for (var i = 0; i < t.length; i++) { var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function(e, t, i) { return t && n(e.prototype, t), i && n(e, i), e } }(),
            a = function() {
                function a() {! function(e, t) { if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function") }(this) } return n(a, null, [{ key: "createNode", value: function(e, t, i) { var n = new a; return n.type = e, n.left = t, n.right = i, n } }, { key: "createUnaryNode", value: function(e) { var t = new a; return t.type = "unaryMinus", t.left = e, t.right = null, t } }, { key: "createLeaf", value: function(e) { var t = new a; return t.type = "number", t.value = e, t } }]), a }();
        t.default = a, e.exports = t.default }, function(e, t, i) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var n = function() {
                function n(e, t) { for (var i = 0; i < t.length; i++) { var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function(e, t, i) { return t && n(e.prototype, t), i && n(e, i), e } }(),
            a = s(i(1)),
            r = s(i(9));

        function s(e) { return e && e.__esModule ? e : { default: e } } var o = function() {
            function i(e) {! function(e, t) { if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function") }(this), this.text = e, this.textLength = e.length, this.index = 0, this.token = new r.default("Error", 0, 0) } return n(i, [{ key: "_skipSpaces", value: function() { for (;
                        " " === this.text[this.index] && this.index <= this.textLength;) this.index++ } }, { key: "getIndex", value: function() { return this.index } }, { key: "getNextToken", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "."; if (this._skipSpaces(), this.textLength === this.index) return this.token.type = "EOT", this.token; if (a.default.isDigit(this.text[this.index])) return this.token.type = "num", this.token.value = this._getNumber(e), this.token; switch (this.token.type = "Error", this.text[this.index]) {
                        case "+":
                            this.token.type = "+"; break;
                        case "-":
                            this.token.type = "-"; break;
                        case "*":
                            this.token.type = "*"; break;
                        case "/":
                            this.token.type = "/"; break;
                        case "(":
                            this.token.type = "("; break;
                        case ")":
                            this.token.type = ")" } if ("Error" === this.token.type) throw new Error("Unexpected token '" + this.token.symbol + "' at position '" + this.token.index + "' in the token function"); return this.token.symbol = this.text[this.index], this.index++, this.token } }, { key: "_getNumber", value: function(e) { this._skipSpaces(); for (var t = this.index; this.index <= this.textLength && a.default.isDigit(this.text[this.index]);) this.index++; for (this.text[this.index] === e && this.index++; this.index <= this.textLength && a.default.isDigit(this.text[this.index]);) this.index++; if (this.index === t) throw new Error("No number has been found while it was expected"); return this.text.substring(t, this.index).replace(e, ".") } }]), i }();
        t.default = o, e.exports = t.default }, function(e, t, i) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function i(e, t, n) {! function(e, t) { if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function") }(this), this.type = e, this.value = t, this.symbol = n }, e.exports = t.default }, function(e, t, i) { "use strict"; var n, a = (n = i(0)) && n.__esModule ? n : { default: n };
        a.default.events = { initialized: "autoNumeric:initialized", invalidFormula: "autoNumeric:invalidFormula", formatted: "autoNumeric:formatted", rawValueModified: "autoNumeric:rawValueModified", minRangeExceeded: "autoNumeric:minExceeded", maxRangeExceeded: "autoNumeric:maxExceeded", native: { input: "input", change: "change" }, validFormula: "autoNumeric:validFormula" }, Object.freeze(a.default.events.native), Object.freeze(a.default.events), Object.defineProperty(a.default, "events", { configurable: !1, writable: !1 }) }, function(e, t, i) { "use strict"; var n = a(i(0));

        function a(e) { return e && e.__esModule ? e : { default: e } }
        a(i(3)), n.default.defaultSettings = { allowDecimalPadding: n.default.options.allowDecimalPadding.always, alwaysAllowDecimalCharacter: n.default.options.alwaysAllowDecimalCharacter.doNotAllow, caretPositionOnFocus: n.default.options.caretPositionOnFocus.doNoForceCaretPosition, createLocalList: n.default.options.createLocalList.createList, currencySymbol: n.default.options.currencySymbol.none, currencySymbolPlacement: n.default.options.currencySymbolPlacement.prefix, decimalCharacter: n.default.options.decimalCharacter.dot, decimalCharacterAlternative: n.default.options.decimalCharacterAlternative.none, decimalPlaces: n.default.options.decimalPlaces.two, decimalPlacesRawValue: n.default.options.decimalPlacesRawValue.useDefault, decimalPlacesShownOnBlur: n.default.options.decimalPlacesShownOnBlur.useDefault, decimalPlacesShownOnFocus: n.default.options.decimalPlacesShownOnFocus.useDefault, defaultValueOverride: n.default.options.defaultValueOverride.doNotOverride, digitalGroupSpacing: n.default.options.digitalGroupSpacing.three, digitGroupSeparator: n.default.options.digitGroupSeparator.comma, divisorWhenUnfocused: n.default.options.divisorWhenUnfocused.none, emptyInputBehavior: n.default.options.emptyInputBehavior.focus, eventBubbles: n.default.options.eventBubbles.bubbles, eventIsCancelable: n.default.options.eventIsCancelable.isCancelable, failOnUnknownOption: n.default.options.failOnUnknownOption.ignore, formatOnPageLoad: n.default.options.formatOnPageLoad.format, formulaMode: n.default.options.formulaMode.disabled, historySize: n.default.options.historySize.medium, isCancellable: n.default.options.isCancellable.cancellable, leadingZero: n.default.options.leadingZero.deny, maximumValue: n.default.options.maximumValue.tenTrillions, minimumValue: n.default.options.minimumValue.tenTrillions, modifyValueOnWheel: n.default.options.modifyValueOnWheel.modifyValue, negativeBracketsTypeOnBlur: n.default.options.negativeBracketsTypeOnBlur.none, negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.none, negativeSignCharacter: n.default.options.negativeSignCharacter.hyphen, noEventListeners: n.default.options.noEventListeners.addEvents, onInvalidPaste: n.default.options.onInvalidPaste.error, outputFormat: n.default.options.outputFormat.none, overrideMinMaxLimits: n.default.options.overrideMinMaxLimits.doNotOverride, positiveSignCharacter: n.default.options.positiveSignCharacter.plus, rawValueDivisor: n.default.options.rawValueDivisor.none, readOnly: n.default.options.readOnly.readWrite, roundingMethod: n.default.options.roundingMethod.halfUpSymmetric, saveValueToSessionStorage: n.default.options.saveValueToSessionStorage.doNotSave, selectNumberOnly: n.default.options.selectNumberOnly.selectNumbersOnly, selectOnFocus: n.default.options.selectOnFocus.select, serializeSpaces: n.default.options.serializeSpaces.plus, showOnlyNumbersOnFocus: n.default.options.showOnlyNumbersOnFocus.showAll, showPositiveSign: n.default.options.showPositiveSign.hide, showWarnings: n.default.options.showWarnings.show, styleRules: n.default.options.styleRules.none, suffixText: n.default.options.suffixText.none, symbolWhenUnfocused: n.default.options.symbolWhenUnfocused.none, unformatOnHover: n.default.options.unformatOnHover.unformat, unformatOnSubmit: n.default.options.unformatOnSubmit.keepCurrentValue, valuesToStrings: n.default.options.valuesToStrings.none, watchExternalChanges: n.default.options.watchExternalChanges.doNotWatch, wheelOn: n.default.options.wheelOn.focus, wheelStep: n.default.options.wheelStep.progressive }, Object.freeze(n.default.defaultSettings), Object.defineProperty(n.default, "defaultSettings", { configurable: !1, writable: !1 }) }, function(e, t, i) { "use strict"; var n = r(i(0)),
            a = r(i(1));

        function r(e) { return e && e.__esModule ? e : { default: e } } var s = { digitGroupSeparator: n.default.options.digitGroupSeparator.dot, decimalCharacter: n.default.options.decimalCharacter.comma, decimalCharacterAlternative: n.default.options.decimalCharacterAlternative.dot, currencySymbol: " €", currencySymbolPlacement: n.default.options.currencySymbolPlacement.suffix, negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.prefix },
            o = { digitGroupSeparator: n.default.options.digitGroupSeparator.comma, decimalCharacter: n.default.options.decimalCharacter.dot, currencySymbol: n.default.options.currencySymbol.dollar, currencySymbolPlacement: n.default.options.currencySymbolPlacement.prefix, negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.right },
            l = { digitGroupSeparator: n.default.options.digitGroupSeparator.comma, decimalCharacter: n.default.options.decimalCharacter.dot, currencySymbol: n.default.options.currencySymbol.yen, currencySymbolPlacement: n.default.options.currencySymbolPlacement.prefix, negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.right };
        a.default.cloneObject(s).formulaMode = n.default.options.formulaMode.enabled; var u = a.default.cloneObject(s);
        u.minimumValue = 0; var c = a.default.cloneObject(s);
        c.maximumValue = 0, c.negativePositiveSignPlacement = n.default.options.negativePositiveSignPlacement.prefix; var h = a.default.cloneObject(s);
        h.digitGroupSeparator = n.default.options.digitGroupSeparator.normalSpace; var d = a.default.cloneObject(h);
        d.minimumValue = 0; var m = a.default.cloneObject(h);
        m.maximumValue = 0, m.negativePositiveSignPlacement = n.default.options.negativePositiveSignPlacement.prefix; var f = a.default.cloneObject(s);
        f.currencySymbol = n.default.options.currencySymbol.none, f.suffixText = " " + n.default.options.suffixText.percentage, f.wheelStep = 1e-4, f.rawValueDivisor = n.default.options.rawValueDivisor.percentage; var g = a.default.cloneObject(f);
        g.minimumValue = 0; var v = a.default.cloneObject(f);
        v.maximumValue = 0, v.negativePositiveSignPlacement = n.default.options.negativePositiveSignPlacement.prefix; var p = a.default.cloneObject(f);
        p.decimalPlaces = 3; var y = a.default.cloneObject(g);
        y.decimalPlaces = 3; var S = a.default.cloneObject(v);
        S.decimalPlaces = 3, a.default.cloneObject(o).formulaMode = n.default.options.formulaMode.enabled; var b = a.default.cloneObject(o);
        b.minimumValue = 0; var w = a.default.cloneObject(o);
        w.maximumValue = 0, w.negativePositiveSignPlacement = n.default.options.negativePositiveSignPlacement.prefix; var P = a.default.cloneObject(w);
        P.negativeBracketsTypeOnBlur = n.default.options.negativeBracketsTypeOnBlur.parentheses; var O = a.default.cloneObject(o);
        O.currencySymbol = n.default.options.currencySymbol.none, O.suffixText = n.default.options.suffixText.percentage, O.wheelStep = 1e-4, O.rawValueDivisor = n.default.options.rawValueDivisor.percentage; var k = a.default.cloneObject(O);
        k.minimumValue = 0; var N = a.default.cloneObject(O);
        N.maximumValue = 0, N.negativePositiveSignPlacement = n.default.options.negativePositiveSignPlacement.prefix; var E = a.default.cloneObject(O);
        E.decimalPlaces = 3; var _ = a.default.cloneObject(k);
        _.decimalPlaces = 3; var C = a.default.cloneObject(N);
        C.decimalPlaces = 3; var F = a.default.cloneObject(s);
        F.currencySymbol = n.default.options.currencySymbol.lira, n.default.predefinedOptions = { euro: s, euroPos: u, euroNeg: c, euroSpace: h, euroSpacePos: d, euroSpaceNeg: m, percentageEU2dec: f, percentageEU2decPos: g, percentageEU2decNeg: v, percentageEU3dec: p, percentageEU3decPos: y, percentageEU3decNeg: S, dollar: o, dollarPos: b, dollarNeg: w, dollarNegBrackets: P, percentageUS2dec: O, percentageUS2decPos: k, percentageUS2decNeg: N, percentageUS3dec: E, percentageUS3decPos: _, percentageUS3decNeg: C, French: s, Spanish: s, NorthAmerican: o, British: { digitGroupSeparator: n.default.options.digitGroupSeparator.comma, decimalCharacter: n.default.options.decimalCharacter.dot, currencySymbol: n.default.options.currencySymbol.pound, currencySymbolPlacement: n.default.options.currencySymbolPlacement.prefix, negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.right }, Swiss: { digitGroupSeparator: n.default.options.digitGroupSeparator.apostrophe, decimalCharacter: n.default.options.decimalCharacter.dot, currencySymbol: " CHF", currencySymbolPlacement: n.default.options.currencySymbolPlacement.suffix, negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.prefix }, Japanese: l, Chinese: l, Brazilian: { digitGroupSeparator: n.default.options.digitGroupSeparator.dot, decimalCharacter: n.default.options.decimalCharacter.comma, currencySymbol: n.default.options.currencySymbol.real, currencySymbolPlacement: n.default.options.currencySymbolPlacement.prefix, negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.right }, Turkish: F, dotDecimalCharCommaSeparator: { digitGroupSeparator: n.default.options.digitGroupSeparator.comma, decimalCharacter: n.default.options.decimalCharacter.dot }, commaDecimalCharDotSeparator: { digitGroupSeparator: n.default.options.digitGroupSeparator.dot, decimalCharacter: n.default.options.decimalCharacter.comma, decimalCharacterAlternative: n.default.options.decimalCharacterAlternative.dot }, integer: { decimalPlaces: 0 }, integerPos: { minimumValue: n.default.options.minimumValue.zero, decimalPlaces: 0 }, integerNeg: { maximumValue: n.default.options.maximumValue.zero, decimalPlaces: 0 }, float: { allowDecimalPadding: n.default.options.allowDecimalPadding.never }, floatPos: { allowDecimalPadding: n.default.options.allowDecimalPadding.never, minimumValue: n.default.options.minimumValue.zero, maximumValue: n.default.options.maximumValue.tenTrillions }, floatNeg: { allowDecimalPadding: n.default.options.allowDecimalPadding.never, minimumValue: n.default.options.minimumValue.tenTrillions, maximumValue: n.default.options.maximumValue.zero }, numeric: { digitGroupSeparator: n.default.options.digitGroupSeparator.noSeparator, decimalCharacter: n.default.options.decimalCharacter.dot, currencySymbol: n.default.options.currencySymbol.none }, numericPos: { digitGroupSeparator: n.default.options.digitGroupSeparator.noSeparator, decimalCharacter: n.default.options.decimalCharacter.dot, currencySymbol: n.default.options.currencySymbol.none, minimumValue: n.default.options.minimumValue.zero, maximumValue: n.default.options.maximumValue.tenTrillions }, numericNeg: { digitGroupSeparator: n.default.options.digitGroupSeparator.noSeparator, decimalCharacter: n.default.options.decimalCharacter.dot, currencySymbol: n.default.options.currencySymbol.none, minimumValue: n.default.options.minimumValue.tenTrillions, maximumValue: n.default.options.maximumValue.zero } }, Object.getOwnPropertyNames(n.default.predefinedOptions).forEach(function(e) { Object.freeze(n.default.predefinedOptions[e]) }), Object.freeze(n.default.predefinedOptions), Object.defineProperty(n.default, "predefinedOptions", { configurable: !1, writable: !1 }) }]) });;
/*! lazysizes - v5.2.0
 * @link: https://github.com/aFarkas/lazysizes
 * */
! function(a, b) { var c = b(a, a.document, Date);
    a.lazySizes = c, "object" == typeof module && module.exports && (module.exports = c) }("undefined" != typeof window ? window : {}, function(a, b, c) { "use strict"; var d, e; if (function() { var b, c = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: !0, ricTimeout: 0, throttleDelay: 125 };
            e = a.lazySizesConfig || a.lazysizesConfig || {}; for (b in c) b in e || (e[b] = c[b]) }(), !b || !b.getElementsByClassName) return { init: function() {}, cfg: e, noSupport: !0 }; var f = b.documentElement,
        g = a.HTMLPictureElement,
        h = "addEventListener",
        i = "getAttribute",
        j = a[h].bind(a),
        k = a.setTimeout,
        l = a.requestAnimationFrame || k,
        m = a.requestIdleCallback,
        n = /^picture$/i,
        o = ["load", "error", "lazyincluded", "_lazyloaded"],
        p = {},
        q = Array.prototype.forEach,
        r = function(a, b) { return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b] },
        s = function(a, b) { r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b) },
        t = function(a, b) { var c;
            (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " ")) },
        u = function(a, b, c) { var d = c ? h : "removeEventListener";
            c && u(a, b), o.forEach(function(c) { a[d](c, b) }) },
        v = function(a, c, e, f, g) { var h = b.createEvent("Event"); return e || (e = {}), e.instance = d, h.initEvent(c, !f, !g), h.detail = e, a.dispatchEvent(h), h },
        w = function(b, c) { var d;!g && (d = a.picturefill || e.pf) ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src), d({ reevaluate: !0, elements: [b] })) : c && c.src && (b.src = c.src) },
        x = function(a, b) { return (getComputedStyle(a, null) || {})[b] },
        y = function(a, b, c) { for (c = c || a.offsetWidth; c < e.minSize && b && !a._lazysizesWidth;) c = b.offsetWidth, b = b.parentNode; return c },
        z = function() { var a, c, d = [],
                e = [],
                f = d,
                g = function() { var b = f; for (f = d.length ? e : d, a = !0, c = !1; b.length;) b.shift()();
                    a = !1 },
                h = function(d, e) { a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g))) }; return h._lsFlush = g, h }(),
        A = function(a, b) { return b ? function() { z(a) } : function() { var b = this,
                    c = arguments;
                z(function() { a.apply(b, c) }) } },
        B = function(a) { var b, d = 0,
                f = e.throttleDelay,
                g = e.ricTimeout,
                h = function() { b = !1, d = c.now(), a() },
                i = m && g > 49 ? function() { m(h, { timeout: g }), g !== e.ricTimeout && (g = e.ricTimeout) } : A(function() { k(h) }, !0); return function(a) { var e;
                (a = !0 === a) && (g = 33), b || (b = !0, e = f - (c.now() - d), e < 0 && (e = 0), a || e < 9 ? i() : k(i, e)) } },
        C = function(a) { var b, d, e = 99,
                f = function() { b = null, a() },
                g = function() { var a = c.now() - d;
                    a < e ? k(g, e - a) : (m || f)(f) }; return function() { d = c.now(), b || (b = k(g, e)) } },
        D = function() { var g, m, o, p, y, D, F, G, H, I, J, K, L = /^img$/i,
                M = /^iframe$/i,
                N = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent),
                O = 0,
                P = 0,
                Q = 0,
                R = -1,
                S = function(a) { Q--, (!a || Q < 0 || !a.target) && (Q = 0) },
                T = function(a) { return null == K && (K = "hidden" == x(b.body, "visibility")), K || !("hidden" == x(a.parentNode, "visibility") && "hidden" == x(a, "visibility")) },
                U = function(a, c) { var d, e = a,
                        g = T(a); for (G -= c, J += c, H -= c, I += c; g && (e = e.offsetParent) && e != b.body && e != f;)(g = (x(e, "opacity") || 1) > 0) && "visible" != x(e, "overflow") && (d = e.getBoundingClientRect(), g = I > d.left && H < d.right && J > d.top - 1 && G < d.bottom + 1); return g },
                V = function() { var a, c, h, j, k, l, n, o, q, r, s, t, u = d.elements; if ((p = e.loadMode) && Q < 8 && (a = u.length)) { for (c = 0, R++; c < a; c++)
                            if (u[c] && !u[c]._lazyRace)
                                if (!N || d.prematureUnveil && d.prematureUnveil(u[c])) ba(u[c]);
                                else if ((o = u[c][i]("data-expand")) && (l = 1 * o) || (l = P), r || (r = !e.expand || e.expand < 1 ? f.clientHeight > 500 && f.clientWidth > 500 ? 500 : 370 : e.expand, d._defEx = r, s = r * e.expFactor, t = e.hFac, K = null, P < s && Q < 1 && R > 2 && p > 2 && !b.hidden ? (P = s, R = 0) : P = p > 1 && R > 1 && Q < 6 ? r : O), q !== l && (D = innerWidth + l * t, F = innerHeight + l, n = -1 * l, q = l), h = u[c].getBoundingClientRect(), (J = h.bottom) >= n && (G = h.top) <= F && (I = h.right) >= n * t && (H = h.left) <= D && (J || I || H || G) && (e.loadHidden || T(u[c])) && (m && Q < 3 && !o && (p < 3 || R < 4) || U(u[c], l))) { if (ba(u[c]), k = !0, Q > 9) break } else !k && m && !j && Q < 4 && R < 4 && p > 2 && (g[0] || e.preloadAfterLoad) && (g[0] || !o && (J || I || H || G || "auto" != u[c][i](e.sizesAttr))) && (j = g[0] || u[c]);
                        j && !k && ba(j) } },
                W = B(V),
                X = function(a) { var b = a.target; if (b._lazyCache) return void delete b._lazyCache;
                    S(a), s(b, e.loadedClass), t(b, e.loadingClass), u(b, Z), v(b, "lazyloaded") },
                Y = A(X),
                Z = function(a) { Y({ target: a.target }) },
                $ = function(a, b) { try { a.contentWindow.location.replace(b) } catch (c) { a.src = b } },
                _ = function(a) { var b, c = a[i](e.srcsetAttr);
                    (b = e.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c) },
                aa = A(function(a, b, c, d, f) { var g, h, j, l, m, p;
                    (m = v(a, "lazybeforeunveil", b)).defaultPrevented || (d && (c ? s(a, e.autosizesClass) : a.setAttribute("sizes", d)), h = a[i](e.srcsetAttr), g = a[i](e.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), m = { target: a }, s(a, e.loadingClass), p && (clearTimeout(o), o = k(S, 2500), u(a, Z, !0)), l && q.call(j.getElementsByTagName("source"), _), h ? a.setAttribute("srcset", h) : g && !l && (M.test(a.nodeName) ? $(a, g) : a.src = g), f && (h || l) && w(a, { src: g })), a._lazyRace && delete a._lazyRace, t(a, e.lazyClass), z(function() { var b = a.complete && a.naturalWidth > 1;
                        p && !b || (b && s(a, "ls-is-cached"), X(m), a._lazyCache = !0, k(function() { "_lazyCache" in a && delete a._lazyCache }, 9)), "lazy" == a.loading && Q-- }, !0) }),
                ba = function(a) { if (!a._lazyRace) { var b, c = L.test(a.nodeName),
                            d = c && (a[i](e.sizesAttr) || a[i]("sizes")),
                            f = "auto" == d;
                        (!f && m || !c || !a[i]("src") && !a.srcset || a.complete || r(a, e.errorClass) || !r(a, e.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, Q++, aa(a, b, f, d, c)) } },
                ca = C(function() { e.loadMode = 3, W() }),
                da = function() { 3 == e.loadMode && (e.loadMode = 2), ca() },
                ea = function() { if (!m) { if (c.now() - y < 999) return void k(ea, 999);
                        m = !0, e.loadMode = 3, W(), j("scroll", da, !0) } }; return { _: function() { y = c.now(), d.elements = b.getElementsByClassName(e.lazyClass), g = b.getElementsByClassName(e.lazyClass + " " + e.preloadClass), j("scroll", W, !0), j("resize", W, !0), j("pageshow", function(a) { if (a.persisted) { var c = b.querySelectorAll("." + e.loadingClass);
                            c.length && c.forEach && l(function() { c.forEach(function(a) { a.complete && ba(a) }) }) } }), a.MutationObserver ? new MutationObserver(W).observe(f, { childList: !0, subtree: !0, attributes: !0 }) : (f[h]("DOMNodeInserted", W, !0), f[h]("DOMAttrModified", W, !0), setInterval(W, 999)), j("hashchange", W, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(a) { b[h](a, W, !0) }), /d$|^c/.test(b.readyState) ? ea() : (j("load", ea), b[h]("DOMContentLoaded", W), k(ea, 2e4)), d.elements.length ? (V(), z._lsFlush()) : W() }, checkElems: W, unveil: ba, _aLSL: da } }(),
        E = function() { var a, c = A(function(a, b, c, d) { var e, f, g; if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || ""))
                        for (e = b.getElementsByTagName("source"), f = 0, g = e.length; f < g; f++) e[f].setAttribute("sizes", d);
                    c.detail.dataAttr || w(a, c.detail) }),
                d = function(a, b, d) { var e, f = a.parentNode;
                    f && (d = y(a, f, d), e = v(a, "lazybeforesizes", { width: d, dataAttr: !!b }), e.defaultPrevented || (d = e.detail.width) && d !== a._lazysizesWidth && c(a, f, e, d)) },
                f = function() { var b, c = a.length; if (c)
                        for (b = 0; b < c; b++) d(a[b]) },
                g = C(f); return { _: function() { a = b.getElementsByClassName(e.autosizesClass), j("resize", g) }, checkElems: g, updateElem: d } }(),
        F = function() {!F.i && b.getElementsByClassName && (F.i = !0, E._(), D._()) }; return k(function() { e.init && F() }), d = { cfg: e, autoSizer: E, loader: D, init: F, uP: w, aC: s, rC: t, hC: r, fire: v, gW: y, rAF: z } });;
var AppData = {
    init: function(options) {
        var storeId = options && options.storeId ? options.storeId : '#storeId';
        var depotId = options && options.depotId ? options.depotId : '#depotId';
        var typeDepot = options && options.typeDepot ? options.typeDepot : 'manage';
        var moreValueDepots = options && options.moreValueDepots ? options.moreValueDepots : [];
        var defaultDepotId = options && options.defaultDepotId ? options.defaultDepotId : false;
        var multiselectDepot = options && options.multiselectDepot ? options.multiselectDepot : false;
        var defaultAssignDepotId = options && options.defaultAssignDepotId ? options.defaultAssignDepotId : false;
        var relatedDepotId = options && options.relatedDepotId ? options.relatedDepotId : '#relatedDepotId';
        var defaultRelatedDepotId = options && options.defaultRelatedDepotId && $(options.defaultRelatedDepotId).val() ? $(options.defaultRelatedDepotId).val().split(',') : '';
        var typeRelatedDepot = options && options.typeRelatedDepot ? options.typeRelatedDepot : 'manage';
        var morerValueRelatedDepots = options && options.moreValueRelatedDepots ? options.moreValueRelatedDepots : [];
        var multiselectRelatedDepot = options && options.multiselectRelatedDepot ? options.multiselectRelatedDepot : false;
        var defaultAssignRelatedDepotId = options && options.defaultAssignRelatedDepotId ? options.defaultAssignRelatedDepotId : false;
        var categoryId = options && options.categoryId ? options.categoryId : '#categoryId';
        var multiselectCategory = options && options.multiselectCategory ? options.multiselectCategory : false;
        $(storeId).change(function() {
            var storeId = $(this).val();
            AppData.loadDepots({ storeId: storeId, type: typeDepot, element: depotId, moreValueDepots: moreValueDepots, defaultDepotId: defaultDepotId, multiselect: multiselectRelatedDepot, defaultAssignDepotId: defaultAssignDepotId });
            if ($(relatedDepotId).length) { AppData.loadDepots({ storeId: storeId, type: typeRelatedDepot, element: relatedDepotId, moreValueDepots: morerValueRelatedDepots, defaultDepotId: defaultRelatedDepotId, multiselect: multiselect, defaultAssignDepotId: defaultAssignRelatedDepotId }); }
            if ($(categoryId).length) { AppData.loadCategories({ storeId: storeId, element: categoryId, multiselect: multiselectCategory, }); }
        });
    },
    loadDepots: function(options) {
        if (!options.storeId) { return; }
        var element = options.element;
        var dataPost = {};
        dataPost.storeId = options.storeId;
        if (options.type) { dataPost.type = options.type; }
        var selectedDepotIds = [];
        if ($(element).val()) { if ($.isArray($(element).val())) { selectedDepotIds = $(element).val(); } else { selectedDepotIds.push($(element).val()); } }
        $.post('/store/manage/load?tab=depot', dataPost, function(rs) {
            $(options.element).find('option:gt(0)').remove();
            if (options.element) {
                var htmlOptions = "";
                if (options.moreValueDepots && $.isArray(options.moreValueDepots)) {
                    $.each(options.moreValueDepots, function(index, value) {
                        var selected = '';
                        if (options.defaultDepotId && $.isArray(options.defaultDepotId) && $.inArray(value.id, options.defaultDepotId) != -1) { selected = 'selected="selected"'; } else if (options.defaultDepotId && options.defaultDepotId == value.id) { selected = 'selected="selected"'; } else if (selectedDepotIds && $.isArray(selectedDepotIds) && $.inArray(value.id, selectedDepotIds) != -1) { selected = 'selected="selected"'; }
                        htmlOptions += '<option value="' + value.id + '" ' + selected + '>' + value.name + '</options>';
                    });
                }
                $.each(rs.data, function(index, value) {
                    var selected = '';
                    if (options.defaultDepotId && $.isArray(options.defaultDepotId) && $.inArray(value.id, options.defaultDepotId) != -1) { selected = 'selected="selected"'; } else if (options.defaultDepotId && options.defaultDepotId == value.id) { selected = 'selected="selected"'; } else if (selectedDepotIds && $.isArray(selectedDepotIds) && $.inArray(value.id, selectedDepotIds) != -1) { selected = 'selected="selected"'; }
                    htmlOptions += '<option value="' + value.id + '" ' + selected + '>' + value.name + '</options>';
                });
                $(element).append(htmlOptions);
                if ($(element).hasClass('select-multipleCheckbox')) { $(element).trigger('change.select2'); } else { if (options.multiselect) { $(element).trigger('change.select2'); } }
                if (options.defaultAssignDepotId && $(element + ' option').length == 2) { $(element).val($(element + ' option:eq(1)').val());
                    $(element).change(); }
                if (options.defaultDepotId) { $(element).change(); }
                AppForm.initSelectSearchBox(element);
            }
        });
    },
    loadCategories: function(options) {
        if (!options.storeId) { return; }
        var element = options.element;
        var dataPost = {};
        dataPost.storeId = options.storeId;
        $.post('/store/category/load', dataPost, function(rs) {
            $(element).find('option:gt(0)').remove();
            if (element) {
                var htmlOptions = "";
                $.each(rs.data, function(index, value) { htmlOptions += '<option value="' + value.id + '" >' + value.name + '</options>'; });
                $(element).append(htmlOptions);
                if ($(element).hasClass('select-multipleCheckbox')) { $(element).trigger('change.select2'); } else { if (options.multiselect) { $(element).trigger('change.select2'); } }
                AppForm.initSelectSearchBox(element);
            }
        });
    }
};
var storeSuggestHandler = {
    storeSettings: { pos: {}, accounting: {} },
    load: function(options) {
        var storeName = options.tbSuggest;
        if (options.emptyDataHandler) { $(options.tbSuggest).keyup(function() { if (!$(this).val()) { options.emptyDataHandler(); } }); }
        $(storeName).autoComplete({ noResultsText: '', resolver: 'custom', formatResult: function(item) { return { value: item.id, text: item.label }; }, events: { search: function(query, callback) { $.ajax({ url: '/store/manage/load', type: 'POST', dataType: 'JSON', data: { tab: 'suggest', q: query } }).done(function(res) { callback(res.data); }); } } });
        $(storeName).on('autocomplete.select', function(evt, item) { return options.selectHandler(item); });
    },
    loadDepots: function(options) {
        if (!options.storeId && !options.storeIds) { return; }
        var dataPost = {};
        if (options.storeId) { dataPost.storeId = options.storeId; }
        if (options.typeRetail) { dataPost.typeRetail = 1; }
        if (options.typeShipping) { dataPost.typeShipping = 1; }
        if (options.type) { dataPost.type = options.type; }
        var selectedDepotIds = [];
        if ($(options.autoPopulateSelectBoxDepot).val()) { if ($.isArray($(options.autoPopulateSelectBoxDepot).val())) { selectedDepotIds = $(options.autoPopulateSelectBoxDepot).val(); } else { selectedDepotIds.push($(options.autoPopulateSelectBoxDepot).val()); } }
        var url = '/store/manage/load?tab=depot';
        if (options.storeIds) { url = '/store/manage/load?tab=loadManyStore';
            dataPost.storeIds = options.storeIds; }
        $.post(url, dataPost, function(rs) {
            if (options.autoPopulateSelectBoxDepot) { $(options.autoPopulateSelectBoxDepot).find('option:gt(0)').remove(); }
            if (options.autoPopulateSelectBoxDepot) {
                var htmlOptions = "";
                if (options.addOptionsDepotId && $.isArray(options.addOptionsDepotId)) {
                    $.each(options.addOptionsDepotId, function(index, value) {
                        var selected = '';
                        if (options.defaultDepotId && $.isArray(options.defaultDepotId) && $.inArray(value.id, options.defaultDepotId) != -1) { selected = 'selected="selected"'; } else if (options.defaultDepotId && options.defaultDepotId == value.id) { selected = 'selected="selected"'; } else if (selectedDepotIds && $.isArray(selectedDepotIds) && $.inArray(value.id, selectedDepotIds) != -1) { selected = 'selected="selected"'; }
                        htmlOptions += '<option value="' + value.id + '" ' + selected + '>' + value.name + '</options>';
                    });
                }
                $.each(rs.data, function(index, value) {
                    var selected = '';
                    if (options.defaultDepotId && $.isArray(options.defaultDepotId) && $.inArray(value.id, options.defaultDepotId) != -1) { selected = 'selected="selected"'; } else if (options.defaultDepotId && options.defaultDepotId == value.id) { selected = 'selected="selected"'; } else if (selectedDepotIds && $.isArray(selectedDepotIds) && $.inArray(value.id, selectedDepotIds) != -1) { selected = 'selected="selected"'; }
                    htmlOptions += '<option value="' + value.id + '" ' + selected + '>' + value.name + '</options>';
                });
                $(options.autoPopulateSelectBoxDepot).append(htmlOptions);
                if ($(options.autoPopulateSelectBoxDepot).hasClass('select-multipleCheckbox')) { $(options.autoPopulateSelectBoxDepot).trigger('change.select2'); } else { if (options.multiselect) { $(options.autoPopulateSelectBoxDepot).trigger('change.select2'); } }
                if (options.noDefaultAssignDepotId && options.noDefaultAssignDepotId == true) {} else { if ($(options.autoPopulateSelectBoxDepot + ' option').length == 2) { $(options.autoPopulateSelectBoxDepot).val($(options.autoPopulateSelectBoxDepot + ' option:eq(1)').val());
                        $(options.autoPopulateSelectBoxDepot).change(); } }
                if (options.defaultDepotId) { $(options.autoPopulateSelectBoxDepot).change(); }
                if (options.select2 && rs.data.length > 10) { $(options.autoPopulateSelectBoxDepot).select2(); }
            }
            if (options.responseHandler) { options.responseHandler(rs.data); }
        });
    },
    loadSettings: function(options) {
        $.post('/store/setting/load?tab=commonSettings', { storeId: options.storeId }, function(rs) {
            storeSuggestHandler.storeSettings = rs.data;
            if (options.hasOwnProperty('responseHandler')) { options.responseHandler(rs.data); }
            return rs.data;
        });
    },
    loadAccountingAccounts: function(options) { $.post('/accounting/account/load', { storeId: options.storeId, itemId: options.itemId ? options.itemId : '', type: options.type ? options.type : '', types: options.hasOwnProperty('types') ? options.types : [] }, function(rs) { if (options.hasOwnProperty('responseHandler')) { options.responseHandler(rs.data); } }); },
    suggestAccountingAccount: function(options) { $(options.tbSuggest).autoComplete({ noResultsText: '', resolver: 'custom', formatResult: function(item) { return { value: item.id, text: item.label }; }, events: { search: function(query, callback) { $.ajax({ url: '/accounting/account/load?tab=suggest', type: 'POST', dataType: 'JSON', data: { storeId: $(options.storeId).val(), q: query } }).done(function(res) { callback(res); }); } } });
        $(options.tbSuggest).on('autocomplete.select', function(evt, item) { return options.selectHandler(item); }); },
    assignAccountingAccounts: function(data, options) {
        if (!data || data == "null" || data == "undefined") {
            if (options.hasOwnProperty('errorHandler')) { options.errorHandler(); }
            return false;
        }
        var depotId = options.depotId ? options.depotId : '';
        var assignElements = options.assignElements ? options.assignElements : [];
        if (!assignElements.length) {
            if (options.hasOwnProperty('errorHandler')) { options.errorHandler(); }
            return false;
        }
        $.each(assignElements, function(index, value) {
            var options = '<option value="">- ' + value.label + ' -</option>';
            var depotAccounts = [];
            $.each(data, function(i, vl) { if (vl.type == value.typeAccount) { depotAccounts.push(vl.id); } });
            $.each(data, function(i, vl) {
                var selected = '';
                if (vl.type == value.typeAccount) {
                    if (depotAccounts.length == 1 || vl.id == value.defaultAccountId) { selected = 'selected="selected"'; }
                    options += '<option value="' + vl.id + '" ' + selected + '>' + vl.label + '</option>';
                }
            });
            $(value.elementId).html(options);
        });
        if (options.hasOwnProperty('responseHandler')) { options.responseHandler(); }
    },
    loadAccountingContacts: function(options) { $.post('/accounting/contact/loaditems', { storeId: options.storeId, types: options.hasOwnProperty('types') ? options.types : [] }, function(rs) { if (options.hasOwnProperty('responseHandler')) { options.responseHandler(rs.data); } }); },
    loadBrands: function(opts) {
        if (!opts.element) { return; }
        var e = $(opts.element),
            s = $('#storeId'),
            data = '',
            defaultOpts = '<option value="">- Thương hiệu -</option>',
            reload = false,
            selected = -5,
            loadNoBrand = 0;
        if (opts.reload && opts.reload == true) { reload = true; }
        if (opts.loadNoBrand) { loadNoBrand = 1; }
        var selectedBrandIds = [];
        if (e.val()) { if ($.isArray(e.val())) { selectedBrandIds = e.val(); } else { selectedBrandIds.push(e.val()); } }
        if (opts.addOptionsBrandId && $.isArray(opts.addOptionsBrandId)) {
            $.each(opts.addOptionsBrandId, function(index, value) {
                selected = '';
                var id = value.id;
                if (selectedBrandIds && $.isArray(selectedBrandIds) && $.inArray(id.toString(), selectedBrandIds) != -1) { selected = 'selected="selected"'; } else if (selected && selected == value.id) { selected = 'selected="selected"'; }
                defaultOpts += '<option value="' + value.id + '" ' + selected + '>' + value.name + '</options>';
            });
        }
        if (!reload) { e.select2({ minimumResultsForSearch: 10 }); }
        if (opts.storeId) {
            $.post('/product/brand/load', { storeId: opts.storeId, json: 1, loadNoBrand: loadNoBrand }, function(response) {
                if (response.data) {
                    data = $.map(response.data, function(obj) {
                        selected = '';
                        var id = obj.id;
                        if (selectedBrandIds && $.isArray(selectedBrandIds) && $.inArray(id.toString(), selectedBrandIds) != -1) { selected = 'selected="selected"'; } else if (selected && selected == obj.id) { selected = 'selected="selected"'; }
                        return '<option value="' + obj.id + '" ' + selected + '>' + obj.name + '</option>';
                    });
                    e.html(defaultOpts + data);
                    if (e.hasClass('select-multipleCheckbox')) { $(e).trigger('change.select2'); } else { if (opts.multiselect) { $(e).trigger('change.select2'); } }
                }
            }, 'json');
        } else { s.change(function() { if ($(this).val()) { $.post('/product/brand/load', { storeId: $(this).val(), json: 1, loadNoBrand: loadNoBrand }, function(response) { if (response.data) { data = $.map(response.data, function(obj) { return '<option value="' + obj.id + '">' + obj.name + '</option>'; });
                            e.html(defaultOpts + data); if (e.hasClass('select-multipleCheckbox')) { $(e).trigger('change.select2'); } else { if (opts.multiselect) { $(e).trigger('change.select2'); } } } }, 'json'); } }); }
    },
    storeLoadRelatedData: function(options) { this.loadDataStore(options); var tbSuggest = options && options.tbSuggest ? options.tbSuggest : '#storeIdName';
        this.load({ tbSuggest: tbSuggest, emptyDataHandler: function() { $('#storeId').val('');
                $(tbSuggest).val(''); }, selectHandler: function(s) { $('#storeId').val(s.id);
                $(tbSuggest).val(s.label); } });
        $('#storeId').change(function() { storeSuggestHandler.loadDataStore(options); }); },
    loadDataStore: function(options) {
        var storeId = $('#storeId').val();
        if (!storeId) { return false; }
        var depotId = options && options.depotId ? options.depotId : '#depotId';
        var defaultDepotId = options && options.defaultDepotId && $(options.defaultDepotId).val() ? $(options.defaultDepotId).val().split(',') : '';
        var typeDepot = options && options.typeDepot ? options.typeDepot : 'manage';
        var multiSelectDepotId = options && options.multiSelectDepotId ? options.multiSelectDepotId : false;
        var addOptionsDepotId = options && options.addOptionsDepotId ? options.addOptionsDepotId : false;
        var noDefaultAssignDepotId = options && options.noDefaultAssignDepotId ? options.noDefaultAssignDepotId : false;
        var select2DepotId = options && options.select2DepotId ? options.select2DepotId : false;
        var relatedDepotId = options && options.relatedDepotId ? options.relatedDepotId : '#relatedDepotId';
        var defaultRelatedDepotId = options && options.defaultRelatedDepotId && $(options.defaultRelatedDepotId).val() ? $(options.defaultRelatedDepotId).val().split(',') : '';
        var typeRelatedDepot = options && options.typeRelatedDepot ? options.typeRelatedDepot : 'manage';
        var multiSelectRelatedDepotId = options && options.multiSelectRelatedDepotId ? options.multiSelectRelatedDepotId : false;
        var addOptionsRelatedDepotId = options && options.addOptionsRelatedDepotId ? options.addOptionsRelatedDepotId : false;
        var noDefaultAssignRelatedDepotId = options && options.noDefaultAssignRelatedDepotId ? options.noDefaultAssignRelatedDepotId : false;
        var select2RelatedDepotId = options && options.select2RelatedDepotId ? options.select2RelatedDepotId : false;
        var categoryId = options && options.categoryId ? options.categoryId : '#categoryId';
        var multiSelectCategoryId = options && options.multiSelectCategoryId ? options.multiSelectCategoryId : false;
        var addOptionsCategoryId = options && options.addOptionsCategoryId ? options.addOptionsCategoryId : false;
        var internalCategoryId = options && options.internalCategoryId ? options.internalCategoryId : '#internalCategoryId';
        var multiSelectInternalCategoryId = options && options.multiSelectInternalCategoryId ? options.multiSelectInternalCategoryId : false;
        var addOptionsInternalCategoryId = options && options.addOptionsInternalCategoryId ? options.addOptionsInternalCategoryId : false;
        var brandId = options && options.brandId ? options.brandId : '#brandId';
        var loadNoBrand = options && options.loadNoBrand ? 1 : 0;
        var addOptionsBrandId = options && options.addOptionsBrandId ? options.addOptionsBrandId : false;
        var multiSelectBrandId = options && options.multiSelectBrandId ? options.multiSelectBrandId : false;
        var noDefaultValueSelect = options && options.noDefaultValueSelect ? options.noDefaultValueSelect : false;
        if ($(depotId).length) { this.loadDepots({ type: typeDepot, storeId: storeId, defaultDepotId: defaultDepotId, multiselect: multiSelectDepotId, autoPopulateSelectBoxDepot: depotId, addOptionsDepotId: addOptionsDepotId, select2: select2DepotId, noDefaultAssignDepotId: noDefaultAssignDepotId }); }
        if ($(relatedDepotId).length) { this.loadDepots({ type: typeRelatedDepot, storeId: storeId, defaultDepotId: defaultRelatedDepotId, multiselect: multiSelectRelatedDepotId, autoPopulateSelectBoxDepot: relatedDepotId, addOptionsDepotId: addOptionsRelatedDepotId, select2: select2RelatedDepotId, noDefaultAssignDepotId: noDefaultAssignRelatedDepotId }); }
        if ($(brandId).length) { this.loadBrands({ element: brandId, reload: true, multiselect: multiSelectBrandId, loadNoBrand: loadNoBrand, addOptionsBrandId: addOptionsBrandId, storeId: storeId }); }
        if ($(categoryId).length) { categorySuggestHandler.load({ element: categoryId, reload: true, multiselect: multiSelectCategoryId, addOptionsCategoryId: addOptionsCategoryId, storeId: storeId, noDefaultValueSelect: noDefaultValueSelect, }); }
        if ($(internalCategoryId).length) { categorySuggestHandler.loadInternal({ element: internalCategoryId, reload: true, multiselect: multiSelectInternalCategoryId, addOptionsInternalCategoryId: addOptionsInternalCategoryId, storeId: storeId, noDefaultValueSelect: noDefaultValueSelect, }); }
        if (options && options.hasOwnProperty('executeOtherHandler')) { options.executeOtherHandler(); }
    }
};
var categorySuggestHandler = {
    load: function(opts) {
        if (!opts.element) { return; }
        var e = $(opts.element),
            s = $('#storeId'),
            data = '',
            defaultOpts = '<option value="">' + (opts.noDefaultValueSelect ? '' : '- Danh mục -') + '</option>',
            reload = false,
            selected = -5;
        if (opts.reload && opts.reload == true) { reload = true; }
        var selectedCategoryIds = [];
        if (e.val()) { if ($.isArray(e.val())) { selectedCategoryIds = e.val(); } else { selectedCategoryIds.push(e.val()); } }
        if (opts.addOptionsCategoryId && $.isArray(opts.addOptionsCategoryId)) {
            $.each(opts.addOptionsCategoryId, function(index, value) {
                selected = '';
                var id = value.id;
                if (selectedCategoryIds && $.isArray(selectedCategoryIds) && $.inArray(id.toString(), selectedCategoryIds) != -1) { selected = 'selected="selected"'; } else if (selected && selected == value.id) { selected = 'selected="selected"'; }
                defaultOpts += '<option value="' + value.id + '" ' + selected + '>' + value.name + '</options>';
            });
        }
        if (!reload) { e.select2({ minimumResultsForSearch: 10 }); }
        if (opts.storeId) {
            $.post('/store/category/load', { storeId: opts.storeId }, function(response) {
                data = $.map(response, function(obj) {
                    selected = '';
                    var id = obj.id;
                    if (selectedCategoryIds && $.isArray(selectedCategoryIds) && $.inArray(id.toString(), selectedCategoryIds) != -1) { selected = 'selected="selected"'; } else if (selected && selected == obj.id) { selected = 'selected="selected"'; }
                    return '<option value="' + obj.id + '" ' + selected + '>' + obj.name + '</option>';
                });
                e.html(defaultOpts + data);
                if (e.hasClass('select-multipleCheckbox')) { $(e).trigger('change.select2'); } else { if (opts.multiselect) { $(e).trigger('change.select2'); } }
            }, 'json');
        } else { s.change(function() { if ($(this).val()) { $.post('/store/category/load', { storeId: $(this).val() }, function(response) { data = $.map(response, function(obj) { return '<option value="' + obj.id + '">' + obj.name + '</option>'; });
                        e.html(defaultOpts + data); if (e.hasClass('select-multipleCheckbox')) { $(e).trigger('change.select2'); } else { if (opts.multiselect) { $(e).trigger('change.select2'); } } }, 'json'); } }); }
    },
    loadInternal: function(opts) {
        if (!opts.element) { return; }
        var e = $(opts.element),
            s = $('#storeId'),
            data = '',
            reload = false,
            defaultOpts = '<option value="">' + (opts.noDefaultValueSelect ? '' : '- Danh mục nội bộ -') + '</option>',
            selected = -5;
        if (e.val()) { selected = e.val(); }
        if (opts.addOptionsInternalCategoryId && $.isArray(opts.addOptionsInternalCategoryId)) {
            $.each(opts.addOptionsInternalCategoryId, function(index, value) {
                if (selected && $.isArray(selected) && $.inArray(value.id, selected) != -1) { selected = 'selected="selected"'; } else if (selected && selected == value.id) { selected = 'selected="selected"'; }
                defaultOpts += '<option value="' + value.id + '" ' + selected + '>' + value.name + '</options>';
            });
        }
        if (opts.reload && opts.reload == true) { reload = true; }
        if (!reload) { e.select2({ placeholder: '- Danh mục nội bộ -', minimumResultsForSearch: 10 }); }
        if (opts.storeId) {
            $.post('/store/category/load?tab=internal', { storeId: opts.storeId, 'page': 'store.internall.loadNew' }, function(response) {
                data = $.map(response, function(obj, i) {
                    if (selected == obj.id) { return '<option selected="selected" value="' + obj.id + '">' + obj.value + '</option>'; }
                    return '<option value="' + obj.id + '">' + obj.value + '</option>';
                });
                e.html(defaultOpts + data);
                if (e.hasClass('select-multipleCheckbox')) { $(e).trigger('change.select2'); } else { if (opts.multiselect) { $(e).trigger('change.select2'); } }
            }, 'json');
        } else {
            s.change(function() {
                if ($(this).val()) {
                    $.post('/store/category/internalload/', { storeId: $(this).val(), 'page': 'store.internall.loadNew' }, function(response) {
                        data = $.map(response, function(obj, i) {
                            if (selected == obj.id) { return '<option selected="selected" value="' + obj.id + '">' + obj.value + '</option>'; }
                            return '<option value="' + obj.id + '">' + obj.value + '</option>';
                        });
                        e.html(defaultOpts + data);
                        if (e.hasClass('select-multipleCheckbox')) { $(e).trigger('change.select2'); } else { if (opts.multiselect) { $(e).trigger('change.select2'); } }
                    }, 'json');
                }
            });
        }
    }
};
var productSuggestHandler = {
    rsCache: [],
    keyEnter: false,
    load: function(options) {
        var tbProduct = options.tbSuggest,
            noResultsText = options.noResultsText ? options.noResultsText : 'Không tìm thấy sản phẩm';
        var autocompleteResultHasImage = false;
        $(tbProduct).keyup(function(e) {
            if (e.keyCode === 13 || productSuggestHandler.keyEnter) { productSuggestHandler.keyEnter = true; if (options.cacheHandler && productSuggestHandler.rsCache[$(tbProduct).val()]) { options.cacheHandler($(tbProduct).val());
                    productSuggestHandler.keyEnter = false; if (!options.notEmptyTbSuggest) { $(tbProduct).val(''); } } } else { productSuggestHandler.keyEnter = false; }
            if (options && options.emptyDataHandler) { if (!$(this).val()) { options.emptyDataHandler(); } }
        });
        $(tbProduct).autoComplete({
            resolver: 'custom',
            formatResult: function(item) {
                var textLabel = options.suggestBy == appConsts.product.suggests.SUGGEST_IMEI ? item.label : item.text;
                var textDisplay = '';
                if (autocompleteResultHasImage) { textDisplay += '<div class="d-inline-flex boxImage mr-2"><img src="' + item.imgPath + '" /></div>'; }
                textDisplay += '<div class="d-flex align-items-center flex-wrap w-100">';
                textDisplay += '<div class="text-nowrap w-100">' + textLabel + '</div>';
                textDisplay += '<div><span>(' + (item.price ? AppFuntions.formatDecimal(item.price) : 0) + ')</span>';
                if (item.showAvailable == true) { textDisplay += '<span class="ml-1 ' + (item.available > 0 ? 'text-success' : 'text-danger') + '">(Tồn CTB: ' + (item.available ? AppFuntions.formatDecimal(item.available) : 0) + ')</span>'; }
                if (item.code) { textDisplay += '<span class="ml-1">(' + item.code + ')</span>'; }
                textDisplay += '</div></div>';
                return { value: item.id, text: "[" + item.code + "] " + item.text, html: textDisplay };
            },
            minLength: 3,
            noResultsText: noResultsText,
            events: {
                search: function(query, callback) {
                    $(tbProduct).parent('.input-group').find('.fa-spinner').addClass('fa-spin');
                    $.ajax({ url: '/product/item/suggest', type: 'POST', dataType: 'JSON', data: { q: query, storeId: $(options.storeId).val(), relatedStoreId: options.relatedStoreId ? $(options.relatedStoreId).val() : '', allowSuggestOtherStore: options.allowSuggestOtherStore ? 1 : '', depotId: $(options.depotId).val(), id: options.fGetProductStoreId ? options.fGetProductStoreId() : null, onlyChild: options.onlyChild ? options.onlyChild : '', onlyParent: options.onlyParent ? options.onlyParent : '', isOriginal: options.isOriginal ? options.isOriginal : '', loadParent: options.loadParent ? options.loadParent : '', isClone: options.isClone ? options.isClone : '', status: options.status, type: options.type, supplierId: options.supplierId ? $(options.supplierId).val() : '', imeiStt: options.imeiStt, suggestBy: options.suggestBy } }).done(function(rs) {
                        autocompleteResultHasImage = false;
                        if (rs.length > 0) { $.each(rs, function(key, val) { if (val.imgPath != '') { autocompleteResultHasImage = true; return false; } }); }
                        $(tbProduct).parent('.input-group').find('.fa-spinner').removeClass('fa-spin');
                        if (rs.length == 1 && productSuggestHandler.keyEnter) { options.selectHandler(rs[0]); if (options.cacheHandler) { productSuggestHandler.rsCache[$(tbProduct).val()] = rs[0]; } } else { callback(rs); }
                        productSuggestHandler.keyEnter = false;
                    });
                }
            }
        }).addClass('suggestProductBox');
        $(tbProduct).on('autocomplete.select', function(evt, item) { productSuggestHandler.keyEnter = false; return options.selectHandler(item); });
    },
    onlyParent: '',
    onlyChild: '',
    loadSuggest: function(options) {
        let tbProduct = options.tbSuggest;
        let autocompleteResultHasImage = false;
        $(tbProduct).keyup(function(e) {
            if (e.keyCode === 13 || productSuggestHandler.keyEnter) { productSuggestHandler.keyEnter = true; if (options.cacheHandler && productSuggestHandler.rsCache[$(tbProduct).val()]) { options.cacheHandler($(tbProduct).val());
                    productSuggestHandler.keyEnter = false; if (!options.notEmptyTbSuggest) { $(tbProduct).val(''); } } } else { productSuggestHandler.keyEnter = false; }
            if (options && options.emptyDataHandler) { if (!$(this).val()) { options.emptyDataHandler(); } }
        });
        $(tbProduct).autoComplete({
            resolver: 'custom',
            formatResult: function(item) {
                var textDisplay = '';
                var textRemain = 'Tồn CTB';
                var valueRemain = item.available;
                if (options.hasOwnProperty('checkNegativeSale') && options.checkNegativeSale) { if (storeSuggestHandler.storeSettings.pos.hasOwnProperty('restrictOutOfStock') && storeSuggestHandler.storeSettings.pos.restrictOutOfStock == appConsts.settings.values.VALUE_NEGATIVE_SALE_REMAIN) { textRemain = 'Tồn trong kho';
                        valueRemain = item.remainInDepot; } }
                if (autocompleteResultHasImage) { textDisplay += '<div class="d-inline-flex boxImage mr-2"><img src="' + item.imgPath + '" /></div>'; }
                textDisplay += '<div class="d-flex align-items-center flex-wrap w-100">';
                textDisplay += '<div class="text-nowrap w-100 font-weight-semibold">' + item.label + '</div>';
                textDisplay += '<div><span>(' + (item.price ? AppFuntions.formatDecimal(item.price) : 0) + ')</span>';
                if (item.showAvailable == true) { textDisplay += '<span class="ml-1 ' + (valueRemain > 0 ? 'text-success' : 'text-danger') + '">(' + textRemain + ': ' + (valueRemain ? AppFuntions.formatDecimal(valueRemain) : 0) + ')</span>'; }
                if (item.code) { textDisplay += '<span class="ml-2 font-size-sm">' + item.code + '</span>'; }
                textDisplay += '</div></div>';
                return { value: item.id, text: "[" + item.code + "] " + item.text, html: textDisplay };
            },
            minLength: 3,
            noResultsText: 'Không tìm thấy sản phẩm',
            events: {
                search: function(query, callback) {
                    let suggestType = options.hasOwnProperty('suggestType') ? $(options.suggestType).val() : null;
                    if (options.hasOwnProperty('getAttributeValueSuggestType') && options.getAttributeValueSuggestType) { suggestType = $(options.getAttributeValueSuggestType).attr('data-value'); }
                    let suggestProductBy = '';
                    let storeId = $(options.storeId).val();
                    let depotId = $(options.depotId).val();
                    let status = options.status ? options.status : appConsts.product.statuses.STATUS_NEW + ', ' + appConsts.product.statuses.STATUS_ACTIVE;
                    let relatedStoreId = options.relatedStoreId ? $(options.relatedStoreId).val() : '';
                    let allowSuggestOtherStore = options.allowSuggestOtherStore ? 1 : '';
                    let fGetProductStoreId = options.fGetProductStoreId ? options.fGetProductStoreId() : null;
                    let imeiStatus = '';
                    let onlyChild = 1;
                    let onlyParent = '';
                    if (suggestType == 'imei') { if (typeof options.imeiStt !== 'undefined' && options.imeiStt) { imeiStatus = options.imeiStt; } else { imeiStatus = appConsts.imei.statuses.STATUS_NEW + ', ' + appConsts.imei.statuses.STATUS_DEMO; } } else if (suggestType == 'soldLots') { onlyChild = '';
                        onlyParent = 1; }
                    productSuggestHandler.onlyChild = onlyChild;
                    productSuggestHandler.onlyParent = onlyParent;
                    if (suggestType == 'weight') { suggestProductBy = appConsts.product.suggests.SUGGEST_WEIGHT; } else if (suggestType == 'imei') { suggestProductBy = appConsts.product.suggests.SUGGEST_IMEI; } else if (suggestType == 'product') { suggestProductBy = ''; } else if (suggestType == 'soldLots') { suggestProductBy = appConsts.product.suggests.SUGGEST_SOLDLOTS; }
                    $(tbProduct).parent('.input-group').find('.fa-spinner').addClass('fa-spin');
                    $.ajax({ url: '/product/item/suggest', type: 'POST', dataType: 'JSON', data: { q: query, storeId: storeId, relatedStoreId: relatedStoreId, allowSuggestOtherStore: allowSuggestOtherStore, depotId: depotId, id: fGetProductStoreId, onlyChild: onlyChild, onlyParent: onlyParent, status: status, imeiStt: imeiStatus, suggestBy: suggestProductBy } }).done(function(rs) {
                        autocompleteResultHasImage = false;
                        if (rs.length > 0) { $.each(rs, function(key, val) { if (val.imgPath != '') { autocompleteResultHasImage = true; return false; } }); }
                        $(tbProduct).parent('.input-group').find('.fa-spinner').removeClass('fa-spin');
                        if (rs.length == 1 && productSuggestHandler.keyEnter) { options.selectHandler(rs[0]); if (options.cacheHandler) { productSuggestHandler.rsCache[$(tbProduct).val()] = rs[0]; } } else { callback(rs); }
                        productSuggestHandler.keyEnter = false;
                    });
                }
            }
        }).addClass('suggestProductBox');
        $(tbProduct).on('autocomplete.select', function(evt, item) { productSuggestHandler.keyEnter = false;
            $(tbProduct).val(''); return options.selectHandler(item); });
    }
};
var userSuggestHandler = {
    load: function(options) {
        if (options.emptyDataHandler) { $(options.tbSuggest).keyup(function() { if (!$(this).val()) { options.emptyDataHandler(); } }); }
        var loadNoUser = 0;
        if (options.loadNoUser) { loadNoUser = 1; }
        $(options.tbSuggest).autoComplete({ noResultsText: '', resolver: 'custom', formatResult: function(item) { return { value: item.id, text: item.label }; }, events: { search: function(query, callback) { $.ajax({ url: '/system/user/suggest', type: 'POST', dataType: 'JSON', data: { loadNoUser: loadNoUser, storeId: $(options.storeId).val(), depotId: $(options.depotId).val(), page: options.page ? options.page : '', role: options.role ? options.role : '', optionNoCustomerCare: options.optionNoCustomerCare ? options.optionNoCustomerCare : 0, q: query } }).done(function(res) { callback(res); }); } } });
        $(options.tbSuggest).on('autocomplete.select', function(evt, item) { return options.selectHandler(item); });
    }
};
var customerSuggestHandler = {
    rsCache: [],
    keyEnter: false,
    load: function(options) {
        if (options.emptyDataHandler) { $(options.tbSuggest).keyup(function() { if (!$(this).val()) { options.emptyDataHandler(); } }); }
        $(options.tbSuggest).keyup(function(e) { if (e.keyCode === 13 || customerSuggestHandler.keyEnter) { customerSuggestHandler.keyEnter = true; if (options.cacheHandler && customerSuggestHandler.rsCache[$(options.tbSuggest).val()]) { options.cacheHandler($(options.tbSuggest).val());
                    customerSuggestHandler.keyEnter = false;
                    $(options.tbSuggest).val(''); } } else { customerSuggestHandler.keyEnter = false; } });
        $(options.tbSuggest).autoComplete({
            noResultsText: '',
            resolver: 'custom',
            formatResult: function(item) { return { value: item.id, text: item.label }; },
            minLength: options.minLength ? options.minLength : 3,
            events: {
                search: function(query, callback) {
                    $.ajax({ url: '/customer/manage/suggest', type: 'POST', dataType: 'JSON', data: { storeId: $(options.storeId).val(), depotId: $(options.depotId).val(), q: query, suggestField: options.suggestField, serialId: options.serialId } }).done(function(res) {
                        if (res.data && res.data.length == 1 && customerSuggestHandler.keyEnter) { options.selectHandler(res.data[0]); if (options.cacheHandler) { customerSuggestHandler.rsCache[query] = res.data[0]; } } else { callback(res); }
                        customerSuggestHandler.keyEnter = false;
                    });
                }
            }
        });
        $(options.tbSuggest).on('autocomplete.select', function(evt, item) { return options.selectHandler(item); });
    }
};
var supplierSuggestHandler = {
    rsCache: [],
    keyEnter: false,
    load: function(options) {
        if (options.emptyDataHandler) { $(options.tbSuggest).keyup(function() { if (!$(this).val()) { options.emptyDataHandler(); } }); }
        $(options.tbSuggest).keyup(function(e) { if (e.keyCode == 13) { supplierSuggestHandler.keyEnter = true; if (options.cacheHandler && supplierSuggestHandler.rsCache[$(options.tbSuggest).val()]) { options.cacheHandler($(options.tbSuggest).val());
                    supplierSuggestHandler.keyEnter = false;
                    $(options.tbSuggest).val(''); } } else { supplierSuggestHandler.keyEnter = false; } });
        $(options.tbSuggest).autoComplete({
            noResultsText: '',
            resolver: 'custom',
            formatResult: function(item) { return { value: item.id, text: item.label }; },
            events: {
                search: function(query, callback) {
                    $.ajax({ url: '/store/supplier/suggest', type: 'POST', dataType: 'JSON', data: { storeId: $(options.storeId).val(), q: query, noSupplier: options.noSupplier, status: options.status } }).done(function(res) {
                        if (res.data && res.data.length == 1 && supplierSuggestHandler.keyEnter) { options.selectHandler(res.data[0]); if (options.cacheHandler) { supplierSuggestHandler.rsCache[query] = res.data[0]; } } else { callback(res.data); }
                        supplierSuggestHandler.keyEnter = false;
                    });
                },
            }
        });
        $(options.tbSuggest).on('autocomplete.select', function(evt, item) { return options.selectHandler(item); });
    }
};;
var allCkEditors = [];
var AppCommon = {
    init: function() { this.settingLayoutUI();
        this.changeUserUI();
        this.initTooltip();
        this.initMenu();
        this.initDropdownContent();
        this.initCarousel();
        this.initChangeStatus();
        this.textareaAutoHeight();
        this.submitFilter();
        this.trTableActive();
        this.copyText(); },
    renderIframeHtml: function(src, id) {
        if (!src || !id) { return; }
        return '<div class="scroll-wrapper d-flex position-relative" style="height: 80vh"><iframe id="' + id + '" class="w-100 h-100 border-0" src="' + src + '"></iframe></div>';
    },
    changeUserUI: function() {
        $('.changeUserUI').on('click', function() {
            var t = $(this),
                inputName = t.attr('name'),
                reload = false;
            if (t.parent().hasClass('checked')) { return; }
            if (inputName == 'settingColor') {
                var color = t.val() == appConsts.userUi.UI_LAYOUT_COLOR_BLACK ? 'black' : 'red';
                $('meta[name="apple-mobile-web-app-status-bar-style"]').attr('content', color);
                $('body').removeClass('theme-black');
                var logo = 'nhanh_white.png';
                if (color == 'black') { logo = 'nhanh_white_red_icon.png';
                    $('body').removeClass('theme-red'); }
                $('body').addClass('theme-' + color);
                $('#logoMain img').attr('src', '/img/logo/' + logo);
            } else if (inputName == 'settingMenu') { reload = true; } else if (inputName == 'settingOpenMenu') { if ($(this).val() == appConsts.userUi.UI_LAYOUT_MENU_HOVER) { $('[data-toggle="dropdown"]').attr('data-hover', 'dropdown'); if ($('[data-hover="dropdown"]').length) { $('[data-hover="dropdown"]').dropdownHover(); } } else { if ($('[data-hover="dropdown"]').length) { $('[data-hover="dropdown"]').parent().unbind('mouseenter');
                        $('#menuHorizontal li, .dropdown-submenu').unbind('mouseenter');
                        $('[data-hover="dropdown"]').removeAttr('data-hover'); } } } else if (inputName == 'settingOpenPageDetail') { if ($(this).val() == appConsts.userUi.UI_LAYOUT_OPEN_PAGE_NEW) { $('.open-detail-in-iframe').removeClass('open-detail-in-iframe'); } else { reload = true; } }
            UserUI.saveUserSetting(false);
            if (reload) { setTimeout(function() { location.reload(); }, 500); }
        });
    },
    settingLayoutUI: function() {
        var layoutUI = window.localStorage.getItem('user_UI_setting');
        if (!layoutUI || layoutUI == 'undefined') { $.post('/profile/ui', { tab: 'loadSettingUI' }, function(rs) { layoutUI = JSON.stringify(rs.extraContent);
                window.localStorage.setItem('user_UI_setting', layoutUI); }); }
        if (!layoutUI) { return; }
        layoutUI = JSON.parse(layoutUI);
        if (layoutUI.openMenu) { if (layoutUI.openMenu == appConsts.userUi.UI_LAYOUT_MENU_HOVER) { $('[data-toggle="dropdown"]').attr('data-hover', 'dropdown'); if ($('[data-hover="dropdown"]').length) { $('[data-hover="dropdown"]').dropdownHover(); } } else { if ($('[data-hover="dropdown"]').length) { $('[data-hover="dropdown"]').parent().unbind('mouseenter');
                    $('#menuHorizontal li, .dropdown-submenu').unbind('mouseenter');
                    $('[data-hover="dropdown"]').removeAttr('data-hover'); } } }
        if (layoutUI.openPageDetail && layoutUI.openPageDetail == appConsts.userUi.UI_LAYOUT_OPEN_PAGE_NEW) { $('.open-detail-in-iframe').removeClass('open-detail-in-iframe'); }
    },
    checkExpiredDate: function() {
        $('.btnSignout').on('click', function() { window.localStorage.removeItem('expired_date'); });
        var expiredDate = window.localStorage.getItem('expired_date');
        if (expiredDate) {
            expiredDate = JSON.parse(expiredDate);
            if (Date.now() < expiredDate.next_check_expired) {
                if (expiredDate.message) { $('#expired-messages').html(expiredDate.message);
                    $('#expiredWarning').show().attr('href', expiredDate.link); }
                return;
            }
        }
        $.post('/store/manage/load', { 'tab': 'checkExpiredDate' }, function(rs) {
            if (rs.message) { var link = rs.link ? rs.link : 'javascript:;';
                $('#expired-messages').html(rs.message);
                $('#expiredWarning').show().attr('href', link); }
            var date = new Date();
            var next_check_expired = date.setHours(date.getHours() + 1);
            var expired_date = { next_check_expired: next_check_expired, message: rs.message ? rs.message : '', link: link };
            window.localStorage.setItem('expired_date', JSON.stringify(expired_date));
        });
    },
    trTableStriped: function(table) {
        var i = 0;
        var cols = $(table).find("tr:first").children().length;
        if ($("tr:first").find("[colspan]").attr("colspan") != null) { cols += (parseInt($("tr:first").find("[colspan]").attr("colspan")) - 1); }
        $("tr").each(function(index) {
            var child = $(this).children().length;
            if ($(this).find("[colspan]").attr("colspan") != null) { child += (parseInt($(this).find("[colspan]").attr("colspan")) - 1); }
            if (child > (cols - 1)) { if (i % 2 == 0) $(this).addClass("table-rowDark");
                i++; } else { $(this).addClass($(this).prev().attr("class")); }
        });
    },
    trTableActive: function() {
        $('tbody>tr td').on('mouseover mouseout', function(e) { if (e.type == 'mouseover') { $el = $(this);
                $.each($el.parent().data('blockrows'), function() { $(this).find('td').addClass('hover'); }); } else { $el = $(this);
                $.each($el.parent().data('blockrows'), function() { $(this).find('td').removeClass('hover'); }); } });
        $("tbody>tr>td.select-checkbox").on('click', function() {
            var tr = $(this).parent(),
                rowspan = $(this).parent().find('td[rowspan]').attr('rowspan');
            if (rowspan) {
                if ($('#cbCheckAll').hasClass('checked')) { if (tr.hasClass('selected')) { tr.removeClass('sub-item-row-selected'); } }
                for (i = 0; i <= (rowspan - 2); i++) { $(this).parent().nextAll().eq(i).toggleClass('sub-item-row-selected'); }
            }
        });
        $(document).on('click', '#cbCheckAll', function() {
            if ($(this).hasClass('checked')) { $(this).parent().parent().parent().find('tr').removeClass('sub-item-row-selected'); }
            $(this).parent().parent().parent().find('tr').toggleClass('sub-item-row-selected');
        });
        AppCommon.findBlocks($('table'));
    },
    findBlocks: function(theTable) {
        if ($(theTable).attr('data-hasblockrows') == null) {
            var rows = $(theTable).find('tr');
            for (var i = 0; i < rows.length;) { var firstRow = rows[i]; var maxRowspan = 1;
                $(firstRow).find('td').each(function() { var attr = parseInt($(this).attr('rowspan') || '1', 10); if (attr > maxRowspan) maxRowspan = attr; });
                maxRowspan += i; var blockRows = []; for (; i < maxRowspan; i++) { $(rows[i]).data('blockrows', blockRows);
                    blockRows.push(rows[i]); } }
            $(theTable).attr('data-hasblockrows', 1);
        }
    },
    textareaAutoHeight: function() { $('textarea.ta-auto-height').on('keyup input', function() { $(this).css('height', $(this).prop("scrollHeight") + 2); }); },
    initTooltip: function() { if ($('[data-toggle="tooltip"]')) { $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" }); } },
    initMenu: function() { $('.menuSelect>a').on('click', function() { $(this).parent().find('.openDropdown').toggleClass('active'); });
        $('.changeLayoutDropdown>li>a').on('click', function() { var t = $(this); if (!$.cookie('uiLayoutMenu') || $.cookie('uiLayoutMenu') != t.attr('data-value')) { $.cookie('uiLayoutMenu', t.attr('data-value'), { expires: 365, path: '/' });
                location.reload(); } });
        $('.changeSkinDropdown>li>a>i').on('click', function() { var t = $(this); if (!$.cookie('uiSkin') || $.cookie('uiSkin') != t.attr('data-value')) { $.cookie('uiSkin', t.attr('data-value'), { expires: 365, path: '/' });
                location.reload(); } });
        $('#showHideMainMenu').on('click', function() { var t = $(this); if (!$.cookie('showHideMainMenu')) { $.cookie('showHideMainMenu', 'mainMenu', { expires: 365, path: '/' }); } else { $.removeCookie('showHideMainMenu', { path: '/' }); } });
        $(window).on('scroll', function() { if ($(window).width() < 768 && $(window).scrollTop() > 0) { $('.fixTopDefault').addClass('fixed-top');
                $('body').addClass('navbar-top'); } else { $('.fixTopDefault').removeClass('fixed-top');
                $('body').removeClass('navbar-top'); } });
        $(window).add('.table-responsive').on('scroll', function() { if ($(this).scrollLeft() > 0) { $('.stickyFirstCol>tbody>tr>td:nth-child(1)').addClass('fixedLeft'); } else { $('.stickyFirstCol>tbody>tr>td:nth-child(1)').removeClass('fixedLeft'); } }); if ($(window).width() < 768) { $(document).on('click', function(event) { var element = $(event.target); if (!element.hasClass('fa-bars') && element.parents('.sidebar-content').length == 0) { $('body').removeClass('sidebar-mobile-main'); } }); } else { $('.nav-sidebar>.nav-item>.nav-link').hover(function() { $('.nav-sidebar>.nav-item>.nav-group-sub').hide(); }, function() { $('.nav-sidebar>.nav-item.nav-item-open>.nav-group-sub').show(); }); } },
    initDropdownContent: function() { $('.dropdown-menu.notClose').on('click', function(event) { event.stopPropagation(); }); },
    initCkeditor: function() {
        var allHtmlElements = document.querySelectorAll('.editor');
        if (allHtmlElements.length) { for (var i = 0; i < allHtmlElements.length; ++i) { ClassicEditor.create(allHtmlElements[i], appCkeditorToolbarsCommon).then(editor => { allCkEditors.push(editor); }).catch(error => { console.error(error); }); } }
        if (typeof CKEDITOR != 'undefined') {
            CKEDITOR.on('dialogDefinition', function(ev) {
                var dialogName = ev.data.name;
                var dialogDefinition = ev.data.definition;
                if (dialogName == 'link' || dialogName == 'image') { dialogDefinition.removeContents('Upload'); }
            });
        }
    },
    getDataCkEditor: function(name) {
        if (name) {
            for (var i = 0; i < allCkEditors.length; i++) { if (allCkEditors[i].sourceElement.id === name) return allCkEditors[i]; }
            return null;
        }
    },
    overLoading: function(option) {
        var block = option && option.block ? option.block : $('body');
        var bg = option && option.background ? option.background : '#000';
        var color = option && option.color ? 'style="color:' + option.color + '"' : '';
        var zIndex = option && option.zIndex ? option.zIndex : 50;
        var opacity = option && option.opacity ? option.opacity : 0.1;
        var sizeSpin = option && option.sizeSpin ? option.sizeSpin : '';
        if (option && option.display == 'hide') { block.find('.overLoading').remove(); return; }
        var html = '<div class="overLoading" style="background: ' + bg + '; opacity: ' + opacity + '; position: absolute; z-index: ' + zIndex + '; top:0; width: 100%; height: 100%;' + ' justify-content: center; align-items: center; transition:all 300ms; visibility: hidden; font-size: 22px">';
        html += '<i class="fas fa-circle-notch fa-spin fa-lg' + sizeSpin + '" ' + color + '></i>';
        html += '</div>';
        if (block) { block.css({ position: 'relative' });
            block.append(html);
            block.find('.overLoading').css({ display: 'flex', visibility: 'visible', opacity: opacity }); }
    },
    progressload: function(data) { var modalId = data.modalId ? data.modalId : '#defaultModal',
            $modal = $('body ' + modalId),
            current = data.current ? data.current : 0,
            rate = data.totalItem ? parseFloat(100 / data.totalItem) : 0;
        $modal.find('.modal-body').prepend('<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" data-current="' + current + '" data-rate="' + rate + '" style="width:' + current + '%">' + current + '%</div></div>'); },
    progressChange: function(data) { var modalId = data.modalId ? data.modalId : '#defaultModal',
            pb = $('body ' + modalId).find('.progress-bar'),
            rate = parseFloat(pb.attr('data-rate')),
            current = parseFloat(pb.attr('data-current')),
            now = parseFloat(current + rate);
        pb.css({ width: now + '%' });
        pb.text(now > 100 ? 100 : Math.ceil(now) + '%');
        pb.attr('data-current', now); },
    advanceCompactSearch: function() {
        $('.compactSearch').hide();
        $('.fFilter li').each(function() {
            if (!$(this).find('.default').length) { $(this).css({ display: 'none' }); }
            if ($(this).find('select').length && $(this).find('select').val()) { $(this).css({ display: 'inline-block' }); }
            if ($(this).find('input[type!=hidden]').length) { if ($(this).find('input[type!=hidden]').prop('type') == 'checkbox' && $(this).find('input[type!=hidden]').is(':checked')) { $(this).css({ display: 'inline-block' }); } else if ($(this).find('input[type!=hidden]').prop('type') != 'checkbox' && $(this).find('input[type!=hidden]').val()) { $(this).css({ display: 'inline-block' }); } }
        });
        $('.advanceSearch').click(function() { $('.fFilter li').each(function() { if (!$(this).find('.default').length) { $(this).css({ display: 'inline-block' }); } });
            $('.compactSearch').show();
            $('.advanceSearch').hide(); return false; });
        $('.compactSearch').click(function() {
            $('.fFilter li').each(function() {
                if (!$(this).find('.default').length) { $(this).css({ display: 'none' }); }
                if ($(this).find('select').length && $(this).find('select').val()) { $(this).css({ display: 'inline-block' }); }
                if ($(this).find('input[type!=hidden]').length) { if ($(this).find('input[type!=hidden]').prop('type') == 'checkbox' && $(this).find('input[type!=hidden]').is(':checked')) { $(this).css({ display: 'inline-block' }); } else if ($(this).find('input[type!=hidden]').prop('type') != 'checkbox' && $(this).find('input[type!=hidden]').val()) { $(this).css({ display: 'inline-block' }); } }
            });
            $('.compactSearch').hide();
            $('.advanceSearch').show();
            return false;
        });
    },
    initCarousel: function() { var t = $('div[data-id="slideCarousel"]');
        t.carousel(); },
    initChangeStatus: function() { $('.changestatus').click(function() { var id = $(this).attr('data-id');
            $.post($(this).attr('data-link'), { 'id': id, 'storeId': $('#storeId').val() }, function(rs) { if (rs.code) { window.location.reload(); } else { AppModal.show({ title: 'Lỗi', color: 'bg-danger pt-2 pb-2', content: rs.messages }); } }, 'json'); }); },
    initExportExel: function(selector, options) {
        if (!$('#excelSettingModal').length) { var exportSelectorElement = selector ? selector : '#excelAll';
            $(exportSelectorElement).jsExcelExport(options); } else {
            var exportSelectorElement = selector ? selector : '#excelAll';
            $(exportSelectorElement).on('click', function() { $('#excelSettingModal').modal('show'); });
            if ($('input[name="columnExcelOption"]:checked').val() == 'column') { if ($('#columnOptionArea').hasClass('d-none')) { $('#columnOptionArea').removeClass('d-none'); } } else { if (!$('#columnOptionArea').hasClass('d-none')) { $('#columnOptionArea').addClass('d-none'); } }
            $('#excelSettingModal .columnExcelOption').on('change', function() { let value = $(this).val();
                $('#excelSettingModal .columnExcelOption').each(function() { $(this).prop('checked', false); if ($(this).val() == value) { $(this).prop('checked', true); if (value == 'column') { if ($('#columnOptionArea').hasClass('d-none')) { $('#columnOptionArea').removeClass('d-none'); } } else { if (!$('#columnOptionArea').hasClass('d-none')) { $('#columnOptionArea').addClass('d-none'); } } } }); });
            $('#excelSettingModal .excelListPage').on('change', function() { let value = $(this).val();
                $('#excelSettingModal .excelListPage').each(function() { $(this).prop('checked', false); if ($(this).val() == value) { $(this).prop('checked', true); } }); });
            $('.columnOptionValueAll').on('change', function() { if ($(this).is(":checked")) { $('.columnOptionValue').each(function() { $(this).prop('checked', true); }); } else { $('.columnOptionValue').each(function() { $(this).prop('checked', false); }); } });
            $('#btnExcelExportSetting').on('click', function() {
                var optionSettings = {};
                optionSettings.forceDownload = false;
                optionSettings.exportGroupToPsParent = 0;
                var params = options.param ? options.param : { 'format': 'jsExcel' };
                if ($('input[name="excelListPage"]:checked').val() == 'recordPage') { optionSettings.forceDownload = true; }
                if ($('input[name="excelListPage"]:checked').val() == 'recordAllFullPage') { params.typeExcel = 'full'; } else { params.typeExcel = ''; }
                if ($('input[name="excelListPage"]:checked').val() == 'recordGroupPsParent') { params.exportGroupToPsParent = 1; }
                if ($('input[name="excelListPage"]:checked').val() == 'recordSelected') {
                    var ids = [];
                    var elements = $('div.content .selected').find('.select-checkbox');
                    if (elements) { elements.each(function() { ids.push($(this).attr('data-id')); }); }
                    if (!ids.length) { $('#excelSettingModal').modal('hide');
                        AppModal.show({ title: 'Lỗi', content: 'Bạn chưa chọn bản ghi để xuất excel' }); return false; }
                    params.ids = ids.join(',');
                } else { params.ids = ''; }
                optionSettings.url = (typeof options.url != 'undefined' && options.url) ? options.url : '';
                optionSettings.fileName = (typeof options.fileName != 'undefined' && options.fileName) ? options.fileName : '';
                optionSettings.param = params;
                if ($('input[name="excelListPage"]:checked').val() == 'recordAll') {
                    if ($(exportSelectorElement).attr('data-sourcetotalrecords')) { optionSettings.totalItemCount = parseInt($(exportSelectorElement).attr('data-sourcetotalrecords')); }
                    if ($(exportSelectorElement).attr('data-pageexcellimitnumber')) { optionSettings.countNumberLimit = parseInt($(exportSelectorElement).attr('data-pageexcellimitnumber')); }
                }
                let allowColumns = [];
                let contents = {};
                contents.excelListPage = $('input[name="excelListPage"]:checked').val();
                if ($('input[name="columnExcelOption"]:checked').val() == 'column') { $('.columnOptionValue').each(function() { if ($(this).is(":checked")) { allowColumns.push($(this).val()); } }); if (allowColumns) { optionSettings.allowColumns = allowColumns; if (allowColumns && $('input[name="columnExcelOption"]:checked').val() == 'column') { contents.column = allowColumns; } else { contents.column = 'all'; } } }
                let typeExport = $('#exportSetting').attr('data-type');
                if (typeExport && $('input[name="rembExcelSetting"]:checked').val() && allowColumns) { $.post('/setting/store/exportexcel', { content: JSON.stringify(contents), type: $('#exportSetting').attr('data-type'), storeId: $('#storeId').val(), }, function(rs) {}); }
                exportExcelSettingHandler.init(optionSettings);
            });
            $('#btnCloseExportExcel').on('click', function() { exportExcelSettingHandler.stop(); });
        }
    },
    submitFilter: function() { $('.form-filter .submitFilterBtn').on('click', function() { var form = $(this).parents('.form-filter');
            $(form).submit(); });
        $('.form-filter').each(function() { $(this).submit(function() { var fArr = this.elements; for (var i = 0; i < fArr.length; i++) { if (fArr[i].value === '') { fArr[i].disabled = true; } } }); }); },
    copyText: function() { $('body').on('click', '.click-copy-data', function(e) { let copyText = $(this).attr('data-copy-value') ? $(this).attr('data-copy-value') : $(this).text();
            navigator.clipboard.writeText(copyText).then(function() { new PNotify({ title: '<i class="far fa-check"></i>  Thông báo', text: 'Đã copy: ' + copyText, type: 'success' }); }); }); }
};
var AppModal = {
    show: function(data) {
        var colorHeader = data.hasOwnProperty('color') && data.color ? data.color : '';
        var titleHeader = data.hasOwnProperty('title') && data.title ? data.title : '';
        var classTitleHeader = data.hasOwnProperty('classTitle') && data.classTitle ? data.classTitle : '';
        var header = '<div class="modal-header bg-light py-2 ' + colorHeader + '">' + '   <h5 class="modal-title ' + classTitleHeader + '" id="exampleModalLongTitle">' + titleHeader + '</h5>' + '   <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="far fa-times font-size-xl"></i></button>' + '</div>';
        var bodyClass = data.hasOwnProperty('bodyClass') && data.bodyClass ? data.bodyClass : '';
        var contentModal = data.hasOwnProperty('content') && data.content ? data.content : '';
        var body = '<div class="modal-body ' + bodyClass + '">' + contentModal + '</div>';
        var buttons = '';
        var footer = '';
        if (data.buttons) {
            $.each(data.buttons, function(key, rs) {
                var btnColor = rs.hasOwnProperty('color') && rs.color ? rs.color : 'btn-success';
                var btnTitle = rs.hasOwnProperty('title') && rs.title ? rs.title : '';
                var btnOnclick = rs.hasOwnProperty('onclick') && rs.onclick ? rs.onclick : '';
                var textAttributes = '';
                if (rs.hasOwnProperty('attributes') && rs.attributes) { $.each(rs.attributes, function(key, vl) { textAttributes += key + '="' + vl + '" '; }); }
                if (btnOnclick) { textAttributes += ' onclick="' + btnOnclick + '"'; }
                if (typeof rs === 'string') { buttons += rs; } else { buttons += '<button type="button" class="btn ' + btnColor + '" ' + textAttributes + '>' + btnTitle + '</button>'; }
            });
            footer = '<div class="modal-footer bg-light py-2">' + buttons + '</div>';
        }
        if (data.showOnlycontent) { header = '';
            footer = ''; }
        var modalId = data.hasOwnProperty('modalId') && data.modalId ? data.modalId : 'defaultModal';
        var backgroundContent = data.hasOwnProperty('background') && data.background ? data.background : '';
        var sizeModal = data.hasOwnProperty('size') && data.size ? data.size : '';
        var modal = '<div class="modal fade" id="' + modalId + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">' + '  <div class="modal-dialog modal-dialog-centered ' + sizeModal + '" role="document">' + '    <div class="modal-content ' + backgroundContent + '">' + header + body + footer + '</div>' + '  </div>' + '</div>';
        $('body').append(modal);
        $('body #' + modalId).modal('show');
        AppModal.removeModal(data);
    },
    hide: function(id, options) { var id = id ? id : '#defaultModal';
        $('body ' + id).modal('hide').remove();
        $('body .modal-backdrop').remove();
        $('body').removeClass('modal-open');
        AppModal.removeModal(options); },
    removeModal: function(options) { var modalId = options && options.hasOwnProperty('modalId') ? options.modalId : 'defaultModal';
        $('body #' + modalId).on('hidden.bs.modal', function(e) { $('body #' + modalId).remove();
            $('body .modal-backdrop').remove(); if (options && options.hasOwnProperty('closeHandler')) { options.closeHandler(); } }); }
};
var AppDataGrid = {
    init: function() { this.initButtonEventCommon();
        this.initColumnDisplaySetting();
        this.initCheckboxCheckAll();
        this.initCheckboxRadio();
        this.initPreviewImage();
        this.initDisplayMessageValid();
        this.initDeleteItems();
        this.initDeleteCache();
        this.initEffect(); },
    initButtonEventCommon: () => { const btnExcelAll = $('.excelModalAll'); if (btnExcelAll.length) { const formatExcel = btnExcelAll.attr('data-format') ? btnExcelAll.attr('data-format') : 'jsExcel'; const urlExcel = btnExcelAll.attr('data-url') ? btnExcelAll.attr('data-url') : window.location.pathname; if (urlExcel) { AppCommon.initExportExel('.excelModalAll', { 'param': { 'format': formatExcel }, 'url': urlExcel, }); } } },
    initColumnDisplaySetting: function() {
        $('.userDgConfig .dgColumn').on('click', function() {
            var t = $(this),
                extraContent = [];
            var type = t.parents('.userDgConfig').attr('data-columnDisplaySetting');
            var colspanColumn = t.attr('data-colspan');
            var colspanTotal = '';
            var colspan = '';
            var hasClass = false;
            if (colspanColumn != '') { colspanTotal = parseInt($('#' + colspanColumn).attr('colspan')); if (!colspanTotal) { hasClass = true; } }
            if (t.is(':checked')) { $('.' + t.attr('data-class')).css('display', 'table-cell').parents('.table-responsive').trigger('change');
                $("input[name=" + t.val() + "]").attr('checked', 'checked'); if (hasClass) { $('.' + colspanColumn).each(function() { colspanTotal = parseInt($(this).attr('colspan'));
                        $(this).attr('colspan', colspanTotal + 1); }); } else { $('#' + colspanColumn).attr('colspan', colspanTotal + 1); } } else { $('.' + t.attr('data-class')).css('display', 'none').parents('.table-responsive').trigger('change');
                $("input[name=" + t.val() + "]").removeAttr('checked'); if (hasClass) { $('.' + colspanColumn).each(function() { colspanTotal = parseInt($(this).attr('colspan'));
                        $(this).attr('colspan', colspanTotal - 1); }); } else { $('#' + colspanColumn).attr('colspan', colspanTotal - 1); } }
            $(".userDgConfig input.dgColumn").not(':checked').map(function() { extraContent.push($(this).val()); });
            $.post('/user/setting/save', { extraContent: extraContent.join(), type: type }, function(rs) {});
        });
        $('.userDgConfig .resetColumnDisplaySetting').on('click', function() { var type = $(this).attr('data-columnDisplaySetting'); if (type) { $.post('/user/setting/delete', { type: type }, function(rs) { location.reload(); }); } });
    },
    initCheckboxCheckAll: function() { $('tbody .select-checkbox').on('click', function() { var t = $(this); if (!t.parent().hasClass('selected')) { t.parent().addClass('selected');
                t.prop('checked', true); } else { t.parent().removeClass('selected');
                t.prop('checked', false); } });
        $(document).on('click', '.dgCheckboxCheckAll', function() { if ($(this).hasClass('checked')) { $(this).removeClass('checked');
                $('.select-checkbox').parent().removeClass('selected');
                $('.select-checkbox').prop('checked', false); } else { $(this).addClass('checked');
                $('.select-checkbox').parent().addClass('selected');
                $('.select-checkbox').prop('checked', true); } }); },
    initPreviewImage: function() { $('body').on('click', 'a[rel="prp"]', function(e) { e.preventDefault(); var src = $(this).attr('data-src'); if (src) { AppModal.show({ size: 'modal-md mh-80', bodyClass: 'mb-0 p-0 text-center', content: '<img class="mw-100" src="' + src + '" alt="' + $(this).attr('data-title') + '" style="object-fit: contain"/>', showOnlycontent: true, }); } }); },
    initCheckboxRadio: function() { $(document).on('click', '.form-group .uniform-choice', function() { var t = $(this),
                group = t.parents('.form-group'),
                input = group.find('.uniform-choice').find('input[type="radio"]'),
                span = input.parent('span');
            span.removeAttr('checked');
            input.prop('selected', false);
            input.parent('span').removeClass('checked');
            t.find('input').attr('selected', 'selected');
            t.find('input').prop('selected', true);
            t.find('input').parent('span').addClass('checked'); }); },
    initDisplayMessageValid: function() { $(document).on('change', 'input.border-danger, select.border-danger, textarea.border-danger', function() { var t = $(this); if (t.val()) { t.removeClass('border-danger');
                t.siblings('.form-text').remove();
                t.siblings('.error').empty(); } });
        $(document).on('keyup', 'body .ck-editor .ck-content', function() { var t = $(this),
                p = t.parents('.ck-editor'),
                ele = p.siblings('textarea'); if (ele.hasClass('required')) { if (t.text()) { ele.removeClass('border-danger');
                    p.siblings('.form-text').remove();
                    p.siblings('.error').empty(); } else { ele.addClass('border-danger');
                    p.siblings('.error').html('<span class="validation-invalid-label">Bạn chưa nhập dữ liệu</span>'); } } }); },
    initDeleteItems: function() {
        $(document).on('click', '.js-del-item', function() { $(this).parents('tr').addClass('js-deleting-row-' + $(this).attr('data-id'));
            AppModal.show({ size: 'modal-md', color: '', title: 'Xác nhận xóa?', content: '<div class="alert alert-warning"><p class="mb-0">Bạn có chắc chắn muốn xóa: <span class="font-weight-semibold">' + $(this).attr('data-label') + '</span></p></div>', buttons: [{ title: '<i class="fal fa-check mr-1"></i> ' + appTranslator.translate(appTranslator.labels.Yes), color: 'btn-danger', attributes: { 'id': 'modal-btn-delete-yes', 'data-id': $(this).attr('data-id'), 'data-link': $(this).attr('data-link'), 'data-redirect': $(this).attr('data-redirect') ? $(this).attr('data-redirect') : '', 'data-no-redirect': $(this).attr('data-no-redirect') ? $(this).attr('data-no-redirect') : 0, 'data-label': $(this).attr('data-label'), } }, { title: '<i class="fal fa-times mr-1"></i> ' + appTranslator.translate(appTranslator.labels.No), color: 'btn-light', attributes: { 'data-dismiss': 'modal' } }] }); });
        $(document).on('click', '#modal-btn-delete-yes', function() {
            var item = $(this);
            item.prop('disabled', true);
            item.find('i').removeClass('fa-check').addClass('fa-spinner fa-spin');
            $('body').removeClass('modal-open').removeAttr('style');
            $.post($(this).attr('data-link'), { id: $(this).attr('data-id') }, function(rs) {
                if (rs.code) {
                    $('tr.js-deleting-row-' + $('#modal-btn-delete-yes').attr('data-id')).remove();
                    new PNotify({ title: '<i class="far fa-check mr-1"></i> Đã xóa: ', text: $('#modal-btn-delete-yes').attr('data-label'), type: 'success' });
                    item.prop('disabled', false);
                    if (item.attr('data-no-redirect')) {} else if (item.attr('data-redirect')) { window.location.href = item.attr('data-redirect'); } else { setTimeout(function() { window.location.reload(); }, 1500); }
                } else { new PNotify({ title: '<i class="far fa-check"></i> Lỗi xóa: ' + $('#modal-btn-delete-yes').attr('data-label'), text: rs.messages, type: 'danger' });
                    item.prop('disabled', false); }
                item.find('i').removeClass('fa-spinner fa-spin').addClass('fa-check');
                AppModal.hide();
            }, 'json');
        });
        $(document).on('click', '#js-del-multiple', function() {
            var URL = $(this).attr('data-url'),
                option = { size: 'modal-md', color: 'bg-warning pt-2 pb-2', title: 'Xóa những dòng đã chọn!', modalId: 'modalProgress', },
                content = '',
                itemIds = [];
            if ($('body table .row-item.selected').length) { $('table .row-item.selected').each(function() { var t = $(this),
                        id = t.attr('data-id'); if (id) { itemIds.push(id); } });
                content += '<input type="hidden" id="itemIds" value="' + itemIds + '"/>';
                content += '<div class="alert alert-warning mt-3">Bạn có chắc muốn xoá tất cả đòng đã chọn này?</div>';
                option.content = content;
                option.buttons = { 0: '<button type="button" id="js-delete-multiple-item" data-url="' + URL + '" class="btn btn-primary">Ok</button>', }; } else { option.content = '<div class="alert alert-warning alert-styled-left alert-dismissible">Bạn chưa chọn dòng nào!</div>'; }
            AppModal.hide('#modalProgress');
            AppModal.show(option);
            if (itemIds.length) { AppCommon.progressload({ modalId: '#modalProgress', totalItem: itemIds.length, });
                $('body #modalProgress').find('.progress').hide(); }
        });
        $(document).on('click', 'body #js-delete-multiple-item', function() {
            var $modal = $('body #modalProgress'),
                itemIds = $('#itemIds').val().split(','),
                storeId = $('#storeId').val(),
                URL = $(this).attr('data-url');
            $modal.find('.modal-body').find('.alert').remove();
            if (itemIds.length) {
                $modal.find('.progress').show();
                $modal.find('.modal-body').append('<div class="alert alert-info mt-3 bg-transparent"></div>');
                var isError = false,
                    mss = $modal.find('.modal-body').find('.alert-info');
                itemIds.forEach(function(itemId) {
                    var rowItem = $('.row-item[data-id="' + itemId + '"]');
                    $.ajax({
                        url: URL,
                        type: 'POST',
                        data: { id: itemId, storeId: storeId, },
                        success: function(rs) {
                            if (rs.code) {
                                if (rowItem) { rowItem.fadeOut(100).remove(); }
                                mss.append('<p class="text-success-600 mb-0">' + rs.messages + '</div>');
                            } else { mss.append('<p class="font-weight-bold text-danger mb-0">' + rs.messages + '</div>');
                                isError = true; }
                            AppCommon.progressChange({ modalId: '#modalProgress', });
                            setTimeout(function() { $modal.fadeOut(100).modal('hide'); }, 5000);
                        },
                    });
                    if (!isError) { $modal.find('#js-delete-multiple-item').remove(); }
                });
            }
        });
    },
    initDeleteCache: function() { $('.storeClearCache').click(function() { var storeId = $('#storeId').val(); var type = $(this).attr('data-type'); if (!type || !storeId) { AppModal.show({ color: 'bg-warning pt-2 pb-2', title: 'Thông báo', size: 'modal-sm', content: '<h6>Bạn chưa chọn doanh nghiệp!</h6>', }); } else { $.post('/website/content/clearcache', { type: type, storeId: storeId }, function(rs) { new PNotify({ title: '<i class="far fa-check"></i>  Thông báo', text: rs.messages, type: 'success' }); }); } }); },
    initEffect: function() { $('.dg').each(function() { $(this).find('tr').each(function(i, tr) { $(tr).find('td').each(function(j, td) { var rowspan = $(td).attr('rowspan'); if (rowspan) { var next = $(tr); for (var k = 1; k <= rowspan; k++) { next.attr('trid', i);
                            next.addClass('trid-' + i);
                            next = next.next(); } } }); });
            $(this).find('tr:odd').removeClass('even');
            $(this).find('tr:even').addClass('even');
            $(this).find('tr').hover(function() { var trid = $(this).attr('trid'); if (trid) { $('tr.trid-' + trid).addClass('h'); } else { $(this).addClass('h'); } }, function() { var trid = $(this).attr('trid'); if (trid) { $('tr.trid-' + trid).removeClass('h'); } else { $(this).removeClass('h'); } }); if ($(this).find('tr:first th:first').find('input.cb').length > 0) { if ($(this).attr('id')) { AppDataGrid.checkAll($(this).attr('id'), 0); } } }); },
    checkAll: function(tableId, colIndex) { var cbId = $('#' + tableId + ' tr:first th:eq(' + colIndex + ')').find('input.cb').attr('id'); var tableRows = $('#' + tableId + ' tr:gt(0)');
        tableRows.each(function(rowIndex) { AppDataGrid.selectRow(tableId, rowIndex + 1, colIndex); });
        $('#' + cbId).click(function() { var isCheck = $(this).is(':checked'); if (isCheck) { tableRows.each(function(rowIndex) { if ($(this).find('td:eq(' + colIndex + ')').find('input.cb').length) { document.getElementById($(this).find('td:eq(' + colIndex + ')').find('input.cb').attr('id')).checked = true; if ($(this).find('td:eq(' + colIndex + ')').find('input.cb').length > 0) { $(this).addClass('s'); } } }); } else { tableRows.each(function() { $(this).find('td:eq(' + colIndex + ')').find('input.cb').removeAttr('checked');
                    $(this).removeClass('s'); }); } }); },
    selectRow: function(tableId, rowIndex, colIndex) { $('#' + tableId + ' tr:eq(' + rowIndex + ') td:eq(' + colIndex + ')').find('input.cb').click(function() { if ($(this).is(':checked')) { $('#' + tableId + ' tr:eq(' + rowIndex + ')').addClass('s'); } else { $('#' + tableId + ' tr:eq(' + rowIndex + ')').removeClass('s'); } }); }
};
var AppDateTime = {
    init: function() {
        var drops = 'down';
        if ($(window).width() < 768) { drops = 'up'; }
        this.initDatePicker(drops);
        this.initDateTimePicker(drops);
    },
    initDatePicker: function(drops) {
        if ($('.tbDatePicker').length) {
            let drop = drops;
            if ($('.tbDatePicker').parents('#fReportFilter').length) { drop = "down"; }
            $('.tbDatePicker').daterangepicker({ drops: drop, singleDatePicker: true, autoUpdateInput: false, autoApply: true, showDropdowns: true, locale: { format: "DD/MM/YYYY", daysOfWeek: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"], monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"], firstDay: 1 } }).on('apply.daterangepicker', function(ev, picker) { picker.element.val(picker.startDate.format('DD/MM/YYYY'));
                picker.element.parents('.form-group').addClass('active'); });
        }
        if ($('.tb-show-daterangepicker').length) {
            let opens = 'center';
            if ($(window).width() < 768) { opens = 'left'; }
            $('.tb-show-daterangepicker').daterangepicker({ linkedCalendars: false, autoUpdateInput: false, autoApply: true, showDropdowns: true, alwaysShowCalendars: false, showCustomRangeLabel: false, opens: opens, locale: { format: "DD/MM/YYYY", daysOfWeek: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"], monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"], firstDay: 1, applyLabel: 'Áp dụng', cancelLabel: 'Hủy', customRangeLabel: 'Chọn ngày' }, ranges: { 'Hôm nay': [moment().utcOffset('+07:00').startOf('day'), moment().utcOffset('+07:00').endOf('day')], 'Hôm qua': [moment().utcOffset('+07:00').subtract(1, 'days').startOf('day'), moment().utcOffset('+07:00').subtract(1, 'days').endOf('day')], 'Tuần này': [moment().utcOffset('+07:00').startOf('week'), moment().utcOffset('+07:00').endOf('day')], 'Tuần trước': [moment().utcOffset('+07:00').startOf('week').subtract(7, 'days'), moment().utcOffset('+07:00').endOf('week').subtract(7, 'days')], 'Tháng này': [moment().utcOffset('+07:00').startOf('month'), moment().utcOffset('+07:00').endOf('day')], 'Tháng trước': [moment().utcOffset('+07:00').subtract(1, 'month').startOf('month'), moment().utcOffset('+07:00').subtract(1, 'month').endOf('month')], } }).on('apply.daterangepicker', function(ev, picker) {
                if ($(this).parent().find('#fromDate')) { $(this).parent().find('#fromDate').val(picker.startDate.format('DD/MM/YYYY')); }
                if ($(this).parent().find('#toDate')) { $(this).parent().find('#toDate').val(picker.endDate.format('DD/MM/YYYY')); }
            });
        }
    },
    initDateTimePicker: function(drops) { if ($('.tbDateTimePicker').length) { $('.tbDateTimePicker').daterangepicker({ drops: drops, showDropdowns: true, timePicker: true, timePickerIncrement: 15, autoUpdateInput: false, opens: 'left', singleDatePicker: true, autoApply: true, locale: { format: "DD/MM/YYYY HH:mm:ss", daysOfWeek: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"], monthNames: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"], firstDay: 1, applyLabel: 'Áp dụng', cancelLabel: 'Hủy', } }).on('apply.daterangepicker', function(ev, picker) { picker.element.val(picker.startDate.format('DD/MM/YYYY HH:mm:ss'));
                picker.element.parents('.form-group').addClass('active'); }); } }
};
var AppTheme = { getThemeBtnClass: function(btnClass) { if (appTheme.button[btnClass]) { return appTheme.button[btnClass]; } } };
var AppForm = {
    init: function() { this.changeElement();
        this.initForm();
        this.initSelectSearchBox();
        this.initNewSelectMultiple(); },
    initForm: function() { var id = $('.collapseAutoFocus').attr('data-target');
        $(id).on('shown.bs.collapse', function(e) { $('input[autofocus]').focus(); }); },
    changeElement: function() { $('.form-filter .tbDatePicker').each(function() { if ($(this).val()) { $(this).parent('.form-group').addClass('active'); } });
        $('.form-filter').on('change', 'input, textarea, select', function() { if ($(this).val()) { $(this).parent('.form-group').addClass('active'); } else { $(this).parent('.form-group').removeClass('active'); } }); var fElements = ['input', 'select', 'textarea'];
        $.each(fElements, function(index, value) { $('.form-filter ' + value).each(function() { if ($(this).val()) { $(this).parent('.form-group').addClass('active'); } }); }); },
    initSelectSearchBox: function(selector = '.select-has-search-box', length = 11) {
        if ($(selector).data('select2')) { $('#' + this.id).select2('destroy'); }
        $(selector).select2({ 'minimumResultsForSearch': length, });
    },
    initNewSelectMultiple: function(selector = '.select-multipleCheckbox') { $(selector).each(function(index) { $(this).addClass('classMutiple' + index);
            $(this).select2MultiCheckboxes({ templateSelection: function(selected) { if (selected.length > 0) { if (selected.length == 1) { return $('.classMutiple' + index).find('option:selected').text(); } else { return "Đã chọn " + selected.length; } } else { return $('.classMutiple' + index).attr('data-title'); } }, wrapClass: 'wrapSelect', minimumResultsForSearch: 1, searchMatchOptGroups: true, selectAll: $(this).hasClass('notCheckAll') ? false : true }); }); },
};
var appCkeditorToolbarsCommon = { toolbar: ["heading", "undo", "redo", "bold", "italic", "blockQuote", "indent", "outdent", "link", "numberedList", "bulletedList", "mediaEmbed", "insertTable", "tableColumn", "tableRow", "mergeTableCells", "ckfinder", "imageTextAlternative", "imageUpload", "imageStyle:full", "imageStyle:side", ], heading: { options: [{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' }, { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' }, { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }, { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' }, { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' }, { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' }, { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }, ] }, image: { toolbar: ['imageStyle:full', 'imageStyle:side', '|', 'imageTextAlternative'] }, language: 'vi' };
var AppDataIframe = {
    init: function() {
        $(document).on('click', '.open-detail-in-iframe', function(e) {
            if (e.ctrlKey) { return; }
            e.preventDefault();
            let openDetailLink = $(this).attr('href');
            let openDetailText = $(this).text();
            AppModal.show({ size: 'modal-xl', color: 'bg-white px-3 py-2', title: '<a title="Mở sang tab mới" href="' + openDetailLink + '"><i class="fal fa-external-link mr-1"></i> ' + openDetailText + '</a>', bodyClass: 'mb-0 p-0 text-center', footer: '', content: AppCommon.renderIframeHtml(openDetailLink + '&showDataIframe=1', 'openDetailInIframe') });
            return false;
        });
    },
    addProduct: function(selector) { $(document).on('click', selector, function() { $(this).tooltip('hide');
            AppModal.show({ size: 'modal-xl', color: 'bg-success border-success px-3 py-2', title: '<i class="fal fa-cube mr-2"></i> Thêm sản phẩm', bodyClass: 'mb-0 p-0 text-center', footer: '', content: AppCommon.renderIframeHtml('/product/item/add?showDataIframe=1', 'addProductFrame') }); }); },
    addSupplier: function(selector, options = {}) { $(document).on('click', selector, function() { $(this).tooltip('hide');
            AppModal.show({ size: 'modal-lg', color: 'bg-success border-success px-3 py-2', title: '<i class="fal fa-plus mr-2"></i> Thêm nhà cung cấp', bodyClass: 'mb-0 p-0 text-center', footer: '', content: AppCommon.renderIframeHtml('/supplier/manage/index?tab=add&showDataIframe=1', 'addSupplierFrame'), closeHandler: function() { if (options && options.hasOwnProperty('closeHandler')) { options.closeHandler(); } } }); }); },
    addStoreProductCategory: function(selector, options = {}) { $(document).on('click', selector, function() { $(this).tooltip('hide');
            AppModal.show({ modalId: 'addFastCategory', size: 'modal-lg', color: 'bg-success border-success px-3 py-2', title: '<i class="fal fa-th-list mr-2"></i> Thêm danh mục sản phẩm', bodyClass: 'mb-0 p-0 text-center', footer: '', content: AppCommon.renderIframeHtml('/store/category/index?tab=add&showDataIframe=1', 'addStoreProductCategoryFrame'), closeHandler: function() { var element = options.elements ? options.elements : '#categoryId';
                    categorySuggestHandler.load({ element: element, reload: true, storeId: $('#storeId').val() }); } }); }); },
    addStoreProductBrand: function(selector, options = {}) { $(document).on('click', selector, function() { $(this).tooltip('hide');
            AppModal.show({ modalId: 'addFastBrand', size: 'modal-lg', color: 'bg-success border-success px-3 py-2', title: '<i class="fal fa-th-list mr-2"></i> Thêm thương hiệu', bodyClass: 'mb-0 p-0 text-center', footer: '', content: AppCommon.renderIframeHtml('/product/brand/index?tab=add&showDataIframe=1', 'addStoreProductBrandFrame'), closeHandler: function() { var element = options.elements ? options.elements : '#brandId';
                    storeSuggestHandler.loadBrands({ element: element, reload: true, storeId: $('#storeId').val() }); } }); }); },
    addSource: function(selector) { $(document).on('click', selector, function() { $(this).tooltip('hide');
            AppModal.show({ size: 'modal-lg', color: 'bg-success border-success px-3 py-2', title: '<i class="fal fa-plus mr-2"></i> Thêm nguồn đơn hàng', bodyClass: 'mb-0 p-0 text-center', footer: '', content: AppCommon.renderIframeHtml('/store/traffic/source?tab=add&showDataIframe=1', 'addTrafficSourceFrame') }); }); },
    addCustomerCode: function(id, storeId) { AppModal.show({ size: 'modal-lg', color: 'bg-success border-success px-3 py-2', title: '<i class="fal fa-plus mr-2"></i> Thêm thẻ khách hàng', bodyClass: 'mb-0 p-0 text-center', footer: '', content: AppCommon.renderIframeHtml('/customer/code/addcustomer?showDataIframe=1&id=' + id + '&storeId=' + storeId, 'addCustomerCodeFrame') }); },
    addReasonWarranty: function(storeId) { AppModal.show({ size: 'modal-lg', color: 'bg-success border-success px-3 py-2', title: '<i class="fal fa-plus mr-2"></i> Thêm lý do bảo hành', bodyClass: 'mb-0 p-0 text-center', footer: '', content: AppCommon.renderIframeHtml('/warranty/setting/reason?tab=add&storeId=' + storeId + '&showDataIframe=1', 'addTrafficSourceFrame') }); }
};
AppDataIframe.init();
var appCkEditor = {
    initBasicEditor: function(selector) { $(selector).ckeditor({ language: usrCnf.lang, uiColor: '#EEEEEE', height: '150px', toolbar: [
                ['Styles', 'Format', 'FontSize', 'Bold', 'Italic', 'Underline', 'TextColor', 'Link', 'Unlink']
            ], removePlugins: 'elementspath' }); },
    initAdvancedEditor: function(selector, options) {
        let defaultOptions = { language: usrCnf.lang, height: '350px', toolbar: [{ name: 'line1', items: ['Source'] }, { name: 'line2', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', 'Undo', 'Redo', 'Find'] }, { name: 'line3', items: ['Link', 'Unlink', 'Anchor', 'Image', 'Table', 'HorizontalRule', 'PageBreak', 'Iframe', 'Youtube'] }, { name: 'line4', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', 'CopyFormatting'] }, { name: 'line5', items: ['TextColor', 'BGColor'] }, { name: 'line6', items: ['NumberedList', 'BulletedList', 'Outdent', 'Indent', 'Blockquote', 'CreateDiv', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', 'BidiLtr', 'BidiRtl'] }, { name: 'line7', items: ['Styles', 'Format', 'Font', 'FontSize', 'RemoveFormat', 'Maximize'] }], removePlugins: 'elementspath' };
        if (typeof options === 'object' && options !== null) { defaultOptions = Object.assign(defaultOptions, options); }
        $(selector).ckeditor(defaultOptions);
    }
};;
var AppFuntions = {
    formatDecimal: function(n) {
        n += '';
        if (!$.trim(n)) { return ''; }
        var x = n.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? ',' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) { x1 = x1.replace(rgx, '$1' + '.' + '$2'); }
        return x1 + x2;
    },
    roundBigNumber: function(value, decimal) {
        decimal = decimal ? decimal : 2;
        const myInt = parseInt(value);
        var num = AppFuntions.formatDecimal(myInt);
        var unit = '';
        if (myInt >= 900000) { num = AppFuntions.decimalAdjust('round', myInt / 1000000, -1 * decimal).toString();
            unit = ' triệu'; }
        if (myInt >= 900000000) { num = AppFuntions.decimalAdjust('round', myInt / 1000000000, -1 * decimal).toString();
            unit = ' tỷ'; }
        return num + '' + unit;
    },
    decimalAdjust: function(type, value, exp) {
        if (typeof exp === 'undefined' || +exp === 0) { return Math[type](value); }
        value = +value;
        exp = +exp;
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) { return NaN; }
        if (value < 0) { return -decimalAdjust(type, -value, exp); }
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    },
    initAutoNumeric: function(selector, options = {}) {
        let index = 0;
        $(selector).each(function() {
            if (!AutoNumeric.isManagedByAutoNumeric($(selector + ':eq(' + index + ')').get(0))) { new AutoNumeric($(selector + ':eq(' + index + ')').get(0), { decimalPlaces: options.hasOwnProperty('mDec') ? options.mDec : 0, minimumValue: options.hasOwnProperty('minimumValue') ? options.minimumValue : '0', modifyValueOnWheel: false }); }
            index += 1;
        });
    },
    isValidForm: function(form, options) {
        var isValid = true,
            key = 0,
            pos = 0;
        if (options == undefined || !options || options == '') { options = {}; }
        $.each(form.find('.required'), function() {
            if (!$(this).val()) {
                if (key == 0) { pos = $(this).offset().top }
                key++;
                if (options.class) { $(this).addClass(options.class); }
                $(this).closest('.form-group').find('.error').empty().append('<span class="validation-invalid-label">Bạn chưa nhập dữ liệu</span>');
                isValid = false;
            } else {
                if (options.class) { $(this).removeClass(options.class); }
                $(this).closest('.form-group').find('.error').empty();
            }
        });
        $.each(form.find('textarea.editor'), function() { var val = AppCommon.getDataCkEditor($(this).attr('id')).getData(); if (!val) { if ($(this).hasClass('required-editor')) { $(this).closest('.form-group').find('.error').empty().append('<span class="validation-invalid-label">Bạn chưa nhập dữ liệu</span>');
                    isValid = false; } } else { $(this).val(val);
                $(this).closest('.form-group').find('.error').empty(); } });
        if (!isValid) { jQuery('html, body').animate({ scrollTop: parseInt(pos) - 100 }, 'slow'); }
        return isValid;
    },
    showCommonErrors: function(errors) {
        var scrollError = false;
        $.each(errors, function(key, messages) {
            var e = $('#' + key);
            if (!scrollError && e.length) { scrollError = true;
                jQuery('html, body').animate({ scrollTop: parseInt(e.offset().top) - 100 }, 'slow'); }
            e.addClass('border-danger');
            let messageInvalid = '';
            if (typeof messages == "object") { $.each(messages, function(key, mes) { if (typeof mes == "object") { $.each(mes, function(k, v) { messageInvalid += mes[k] + '\n'; }); } else messageInvalid += mes + '\n'; }); } else messageInvalid = messages;
            e.closest('.form-group').find('.error').empty().append('<span class="validation-invalid-label">' + messageInvalid + '</span>');
        });
    },
    validateEmail: function(email) {
        var regexPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regexPattern.test(email)) { return false; }
        return true;
    },
    html_entity_decode: function(str) { var txt = document.createElement("textarea");
        txt.innerHTML = str; return txt.value; },
    validateMobile: function(mobile) {
        mobile = AppFuntions.html_entity_decode(mobile);
        mobile = mobile.replace(/\s/g, '');
        mobile = mobile.replace(/\./g, '');
        mobile = mobile.replace(/,/g, '');
        mobile = mobile.replace(/^(\+84|84|\(84\))/, '0');
        if (/^0/.exec(mobile) == null) { mobile = '0' + mobile; }
        if (isNaN(mobile) || mobile.length < 10 || mobile.length > 11) { return false; }
        return true;
    },
    validateDate: function(date) {
        var matches = /^(\d{2})[\/](\d{2})[\/](\d{4})$/.exec(date);
        if (matches == null) { return false; }
        return true;
    },
    roundFloatNumber: function(number) { return Math.round(number * 1000) / 1000; },
    roundToDecimal: function(nb, decimal) {
        if (!decimal || decimal == 0) { return nb; }
        return Math.round(nb / decimal) * decimal;
    }
};;
var AppLocation = {
    init: function(options) {
        let elementCountry = options && options.countryId ? options.countryId : '#countryId';
        let elementCity = options && options.cityLocationId ? options.cityLocationId : '#cityLocationId';
        let elementDistrict = options && options.districtLocationId ? options.districtLocationId : '#districtLocationId';
        let elementWard = options && options.wardId ? options.wardId : '#wardLocationId';
        let districtLocationDefault = options && options.districtLocationDefault ? options.districtLocationDefault : '#districtLocationDefault';
        let wardLocationDefault = options && options.wardLocationDefault ? options.wardLocationDefault : '#wardLocationDefault';
        $(elementCountry).change(function() { if ($(this).val() && $(elementCity).length) { $.post('/system/location/load', { countryId: $(this).val(), type: 'city' }, function(data) { AppLocation.updateLocationCity(elementCity, data, elementDistrict); }, 'json'); } else { AppLocation.updateLocationCity(elementCity, null, elementDistrict); } });
        $(elementCity).change(function() { if ($(this).val() && $(elementDistrict).length) { AppLocation.getLocationDistricts($(this).val(), elementDistrict, $(districtLocationDefault).val(), options);
                $(elementWard).val(''); } });
        if ($(elementCity).val() && $(elementDistrict).length) { AppLocation.getLocationDistricts($(elementCity).val(), elementDistrict, $(districtLocationDefault).val(), options); }
        $(elementDistrict).change(function() { if ($(this).val() && $(elementWard).length) { AppLocation.getLocationWards($(this).val(), elementWard); } });
        if ($(elementDistrict).val() && $(elementWard).length) { AppLocation.getLocationWards($(elementDistrict).val(), elementWard, $(wardLocationDefault).val()); }
    },
    updateLocationCity: function(id, data, districtLocationId) {
        if ($(id).length) {
            var options = "";
            for (var i in data) { options += "<option value='" + i + "'>" + data[i] + "</option>"; }
            if (!$(id).find('option:first').val()) { options = "<option value=''>" + $(id).find('option:first').text() + "</option>" + options; }
            $(id).html(options);
            AppLocation.getLocationDistricts($(id).val(), districtLocationId);
        }
    },
    getLocationDistricts: function(cityLocationId, districtLocationId, districtLocationDefault, options) { if (!cityLocationId) { AppLocation.updateLocationDistrict(districtLocationId, '', districtLocationDefault); if (options && options.responseHandler) { options.responseHandler(); } } else { if (typeof cacheDistricts != 'undefined') { $.each(cacheDistricts, function(cId, values) { if (cityLocationId == cId) { AppLocation.updateLocationDistrict(districtLocationId, values, districtLocationDefault); if (options && options.responseHandler) { options.responseHandler(values); } } }); } else { $.post('/system/location/load', { cityId: cityLocationId, type: 'district' }, function(data) { AppLocation.updateLocationDistrict(districtLocationId, data, districtLocationDefault); if (options && options.responseHandler) { options.responseHandler(data); } }, 'json'); } } },
    updateLocationDistrict: function(id, data, districtLocationDefault) {
        var districtLocationId = districtLocationDefault ? districtLocationDefault : $(id).val();
        if ($(id).length) {
            var options = "";
            if (data) { for (var i in data) { var selected = districtLocationId == i ? "selected='selected'" : "";
                    options += "<option value='" + i + "' " + selected + ">" + data[i] + "</option>"; } }
            if (!$(id).find('option:first').val()) { options = "<option value=''>" + $(id).find('option:first').text() + "</option>" + options; }
            $(id).html(options);
        }
    },
    getLocationWards: function(districtLocationId, wardId, wardIdDefault) { if (!districtLocationId) { AppLocation.updateLocationWard(wardId, '', wardIdDefault); } else { if (typeof cacheWards != 'undefined') { $.each(cacheWards, function(dId, values) { if (districtLocationId == dId) { AppLocation.updateLocationWard(wardId, values, wardIdDefault); } }); } else { $.post('/system/location/load', { districtId: districtLocationId, type: 'ward' }, function(data) { AppLocation.updateLocationWard(wardId, data, wardIdDefault); }, 'json'); } } },
    updateLocationWard: function(id, data, wardIdDefault) {
        var wardId = wardIdDefault ? wardIdDefault : $(id).val();
        if ($(id).length) {
            var options = "";
            if (data) { for (var i in data) { var selected = wardId == i ? "selected='selected'" : "";
                    options += "<option value='" + i + "' " + selected + ">" + data[i] + "</option>"; } }
            if (!$(id).find('option:first').val()) { options = "<option value=''>" + $(id).find('option:first').text() + "</option>" + options; }
            $(id).html(options);
        }
    }
};;
var appConsts = { userUi: { UI_LAYOUT_MENU_HORIZONTAL: 1, UI_LAYOUT_MENU_VERTICAL: 2, UI_LAYOUT_COLOR_RED: 1, UI_LAYOUT_COLOR_BLACK: 2, UI_LAYOUT_MENU_HOVER: 1, UI_LAYOUT_MENU_CLICK: 2, UI_LAYOUT_OPEN_PAGE_POPUP: 1, UI_LAYOUT_OPEN_PAGE_NEW: 2 }, storeIdNhanh: 26, accounting: { account: { statuses: { STATUS_ACTIVE: 1, STATUS_INACTIVE: 2 }, types: { TYPE_BANK: 1, TYPE_PAYMENT_GATEWAY: 2, TYPE_CASH: 3, TYPE_INSTALLMENT: 5, TYPE_DEFAULT: 6, TYPE_CREDIT: 7 } }, contact: { statuses: { STATUS_ACTIVE: 1, STATUS_INACTIVE: 2 }, itemTypes: { ITEM_TYPE_CUSTOMER: 1, ITEM_TYPE_SUPPLIER: 2, ITEM_TYPE_INSTALLMENT: 3, ITEM_TYPE_STAFF: 4, ITEM_TYPE_OTHER: 20, ITEM_TYPE_MERCHANT: 21 } }, transaction: { statuses: { STATUS_WAITING: 1, STATUS_VERIFIED: 2 }, types: { TYPE_DEBIT: 1, TYPE_CREDIT: 2, TYPE_RECEIPT: 3, TYPE_PAY: 4, TYPE_SALE_IMPORT: 5, TYPE_SALE_EXPORT: 6, TYPE_IMPORT: 8, TYPE_EXPORT: 9, TYPE_OTHER: 7, TYPE_ACCOUNTING_FORWARD: 12 }, itemTypes: { ITEM_TYPE_BIL: 1, ITEM_TYPE_ORDER: 2 }, modes: { MODE_SUPPLIER_IMPORT: 1, MODE_SUPPLIER_EXPORT: 2, MODE_POS_BILL: 3, MODE_POS_RETURN: 4, MODE_POS_WHOLESALE: 5, MODE_POS_WHOLESALE_RETURN: 6, MODE_POS_RESALE: 7, MODE_WARRANTY: 8, MODE_WARRANTY_ACCESSORIES: 9, MODE_TRANSFER: 15, MODE_INSTALLMENT: 20, MODE_FIRST_DEBTS: 21, MODE_ORDER: 22, MODE_ORDER_RETURN: 23, MODE_SUPPLIER_IMPORT_VAT: 24, MODE_SUPPLIER_EXPORT_VAT: 25, MODE_OTHER: 26, MODE_COD_INSTALLMENT: 27, MODE_POS_IMPORT_VAT: 28, MODE_POS_EXPORT_VAT: 29, MODE_CONFIRM_PAYMENT_ORDER: 30, MODE_CONFIRM_PAYMENT_ORDER_FEE: 31, MODE_IMPORT_GIFT: 32, MODE_EXPORT_GIFT: 33 }, paymentMethod: { PAYMENT_METHOD_CASH: 1, PAYMENT_METHOD_TRANSFER: 2, PAYMENT_METHOD_CREDIT: 3, PAYMENT_METHOD_INSTALLMENT: 4, PAYMENT_METHOD_ORDER_COD: 5, PAYMENT_METHOD_CASH_AUTO: 6 } }, transactionItem: { statuses: { STATUS_WAITING: 1, STATUS_VERIFIED: 2 } } }, customer: { code: { COUPON_CODE: '_COUPON_CODE_', }, }, imex: { types: { TYPE_IMPORT: 1, TYPE_EXPORT: 2 }, modes: { MODE_SHIPPING: 1, MODE_RETAIL: 2, MODE_BONUS: 4, MODE_TRANSFER: 3, MODE_SUPPLIER: 5, MODE_WHOLESALE: 6, MODE_INVENTORY_CHECK: 8, MODE_OTHER: 10, MODE_WARRANTY: 13, MODE_WARRANTY_CENTER: 14, MODE_REPAIR: 15, MODE_WARRANTY_ACCESSORIES: 16, MODE_BONUS_WHOLESALE: 17, MODE_BONUS_SHIPPING: 18, MODE_COMBO: 19 } }, order: { PREFIX_BARCODE_NHANH: 'NVN', PREFIX_SELF_CONNECT_CARRIER: 'NVS', PARTNER_MOMO: 1, types: { TYPE_SHIPPING: 1, TYPE_SHOPPING: 2, TYPE_PREORDER: 3, TYPE_TRIAL: 4, TYPE_GIFT_EXCHANGE: 5, TYPE_TEMPORARY: 9, TYPE_QUOTATION: 10 }, shippingTypes: { SHIPPING_TYPE_COD: 1, SHIPPING_TYPE_CHANGE_PRODUCT: 2, SHIPPING_TYPE_CUSTOMER_RETURN: 4, SHIPPING_TYPE_TRANSFER_DEPOT: 5 }, modes: { MODE_RETAIL: 1, MODE_WHOLESALE: 2 }, statuses: { STATUS_PACKED: 40, STATUS_PACKING: 42, STATUS_PICKUP: 43, STATUS_NEW: 54, STATUS_CONFIRMING: 55, STATUS_CONFIRMED: 56, STATUS_CUSTOMER_CONFIRMING: 57, STATUS_CARRIER_CANCELED: 58, STATUS_SHIPPING: 59, STATUS_SUCCESS: 60, STATUS_FAILED: 61, STATUS_CANCELED: 63, STATUS_ABORTED: 64, STATUS_SOLDOUT: 68, STATUS_RETURNING: 71, STATUS_RETURNED: 72, STATUS_CHANGE_DEPOT: 73 }, carriers: { DEFAULT_CARRIER_ID: 1, CARRIER_VIETTEL: 2, CARRIER_GHN: 5, CARRIER_GHTK: 8, CARRIER_VNPOST_HN: 9, CARRIER_TRANSFORMER: 12, CARRIER_5SHIP: 15, CARRIER_247_EXPRESS: 17, CARRIER_AHAMOVE: 18, CARRIER_VNPOST_HCM: 19, CARRIER_PROSHIP: 20, CARRIER_DHL: 21, CARRIER_VNPOST: 22, CARRIER_ECOTRANS: 23, CARRIER_JT_EXPRESS: 24, CARRIER_EMS: 25, CARRIER_BEST_EXPRESS: 26, CARRIER_NINJAVAN: 27, CARRIER_SUPER_SHIP: 28 }, saleChannels: { SALE_CHANNEL_ADMIN: 1, SALE_CHANNEL_WEBSITE: 2, SALE_CHANNEL_API: 10, SALE_CHANNEL_FACEBOOK: 20, SALE_CHANNEL_INSTAGRAM: 21, SALE_CHANNEL_VATGIA: 40, SALE_CHANNEL_LAZADA: 41, SALE_CHANNEL_SHOPEE: 42, SALE_CHANNEL_SENDO: 43, SALE_CHANNEL_TIKI: 45, SALE_CHANNEL_ZALOSHOP: 46 }, storePaymentStatuses: { STORE_PAYMENT_STATUS_CONFIRMING: 1, STORE_PAYMENT_STATUS_CONFIRMED: 2, STORE_PAYMENT_STATUS_PAID: 3, STORE_PAYMENT_STATUS_NOT_TRANSFER: 4, STORE_PAYMENT_STATUS_CHECKED_FAIL: 5, STORE_PAYMENT_STATUS_BAD_DEBT: 6 }, carrierPaymentStatuses: { CARRIER_PAYMENT_STATUS_CHECKING: 1, CARRIER_PAYMENT_STATUS_CHECKED: 2 }, carrierNoTablePrices: { CARRIER_AHAMOVE: 18, CARRIER_GHTK: 8 }, carriersNoApiCalculateFee: { CARRIER_DHL: 21, CARRIER_NINJAVAN: 27 }, cityIdsHNHCM: { CITY_LOCATION_ID_HN: 254, CITY_LOCATION_ID_HCM: 255 }, tabs: { ORDER_TAB_EDIT: 'edit', ORDER_TAB_CONFIRM: 'confirm', TAB_CONFIRM: 1, TAB_PACKING: 2, TAB_SENT_CARRIER: 12, TAB_PROCESS: 3, TAB_PAYMENT: 5, TAB_COMPLAIN: 6, TAB_PROCESSING: 7, TAB_READY_TO_SHIP: 8, TAB_SHIPPING: 9, TAB_WAIT_PAYMENT_COD: 10, TAB_SHIP_FAIL: 11, TAB_SUCCESS: 21, TAB_RETURN: 22, TAB_TROUBLE: 23 }, arrReasonCanceled: { REASON_OTHER: 18, REASON_WRONG_PRODUCT: 1, REASON_CANCEL_HIGH_SHIPFEE: 2, REASON_CANCEL_NOT_TRANSFER: 3, REASON_DUPLICATED: 4, REASON_CANCEL_CANNOT_CALL: 5, REASON_CUSTOMER_NOT_BUY: 16, REASON_CUSTOMER_BUYED_PRODUCT: 12 }, arrReasonAborted: { REASON_OTHER: 18, REASON_DUPLICATED: 4, REASON_CANCEL_CANNOT_CALL: 5, REASON_CANCEL_SOLD_OUT: 6, REASON_CANNOT_CALL_SENDER: 19, REASON_SELLER_NOT_SELL_ONLINE: 20, REASON_SELLER_DONT_HANDOVER_CARRIER: 22, REASON_CARRIER_PICKUP_LATE: 23, REASON_WRONG_PICKUP_ADDRESS: 24, REASON_SELF_SHIPPING: 26 }, arrReasonSoldOut: { REASON_CANCEL_SOLD_OUT: 6, REASON_OTHER: 18 }, arrReasonReturned: { REASON_OTHER: 18, REASON_CUSTOMER_NOT_LIKE_PRODUCT: 9, REASON_CUSTOMER_NOT_PLEASURE_NVVC: 10, REASON_SLOW_SHIPPING: 11, REASON_CUSTOMER_BUYED_PRODUCT: 12, REASON_PACK_FAILED: 34, REASON_WRONG_ADDRESS: 14, REASON_CANCEL_CANNOT_CALL: 5, REASON_WRONG_PRODUCT: 1, REASON_CARRIER_LOST_PRODUCT: 25 }, arrReasonConfirming: { REASON_WAITING_TRANSFER: 8, REASON_CANCEL_CANNOT_CALL: 5, REASON_CUSTOMER_THINK: 31 }, stepsInTab: { TAB_PROCESS: { STEP_TAB_PROCESS_SOLDOUT: 1, STEP_TAB_PROCESS_CARRIER_CANCEL: 2, STEP_TAB_PROCESS_OVER_WEIGHT: 3, STEP_TAB_PROCESS_NEW_FAIL: 4, STEP_TAB_PROCESS_COMPLAIN: 5, STEP_TAB_PROCESS_RETURNING: 6, STEP_TAB_PROCESS_SLOW_SHIPPING: 7, STEP_TAB_PROCESS_SLOW_PAYMENT: 8, STEP_TAB_PROCESS_PRE_ORDER: 15 }, TAB_PAYMENT: { STEP_TAB_PAYMENT_SUCCESS: 13, STEP_TAB_PAYMENT_SUCCESS_PAYMENTED: 14 }, TAB_COMPLAIN: { STEP_TAB_COMPLAIN_ALL: 9, STEP_TAB_COMPLAIN_NEW: 10, STEP_TAB_COMPLAIN_PROCESSING: 11, STEP_TAB_COMPLAIN_PROCESSED: 12, STEP_TAB_COMPLAIN_PROCESS_FAILED: 18 } }, sendCarrierTypes: { SEND_CARRIER_TYPE_NHANH: 1, SEND_CARRIER_TYPE_SHOP: 2 } }, shippingHandover: { orderTypes: { ORDER_TYPE_ORDER_ID: 'orderId', ORDER_TYPE_MERCHANT_ID: 'merchantId', ORDER_TYPE_CODE_PRINT_ID: 'codePrintId', ORDER_TYPE_CODE_CARRIER: 'codeCarrier' }, modes: { MODE_NORMAL: 1, MODE_TOUR: 2, MODE_LAZADA: 11, MODE_SHOPEE: 12, MODE_SENDO: 13, MODE_ZALO: 14, MODE_TIKI: 15 }, types: { TYPE_CARRIER_IMPORT: 1, TYPE_CARRIER_EXPORT: 2, TYPE_DEPOT_PICKUP: 3 }, typeProducts: { TYPE_PRODUCT_GET: 1, TYPE_PRODUCT_RETURN: 2 } }, product: { types: { TYPE_PRODUCT: 1, TYPE_VOUCHER: 2, TYPE_WEIGHT_MEASURE: 3, TYPE_IMEI: 4, TYPE_PACKAGE: 5, TYPE_SERVICE: 6, TYPE_TOOL: 7, TYPE_BATCH: 8, TYPE_COMBO: 9, TYPE_MULTI_UNITS: 10 }, importTypes: { IMPORT_TYPE_CONSIGNMENT: 1, IMPORT_TYPE_BUYOUT: 2, IMPORT_TYPE_PAWN: 3, IMPORT_TYPE_UNDEFINED: -1 }, statuses: { STATUS_NEW: 1, STATUS_ACTIVE: 2, STATUS_INACTIVE: 3, STATUS_OUTOFSTOCK: 4 }, suggests: { SUGGEST_IMEI: 1, SUGGEST_NAME: 2, SUGGEST_WEIGHT: 3, SUGGEST_SOLDLOTS: 4 } }, imei: { statuses: { STATUS_NEW: 1, STATUS_SOLD: 2, STATUS_SHIPPING: 3, STATUS_ERROR: 5, STATUS_SUPPLIER_RETURN: 6, STATUS_REMAIN: 7, STATUS_TRANSFER: 8, STATUS_WARRANTY: 9, STATUS_WARRANTY_RETURNED: 10, STATUS_DEMO: 11 } }, promotion: { applies: { APPLY_FOR_ALL: 1, APPLY_FOR_RETAIL: 2, APPLY_FOR_WHOLESALE: 3, APPLY_FOR_ONLINE_ORDER: 4 }, types: { TYPE_PROMOTION: 1, TYPE_GIFT: 2, TYPE_POINTS: 3, TYPE_GIFT_EXCHANGE: 4, TYPE_SALE_COMMISSION: 5 }, statuses: { STATUS_ACTIVE: 1, STATUS_INACTIVE: 2 } }, warranty: { history: { types: { TYPE_WARRANTY: 1, TYPE_REPAIR: 2, TYPE_CONSIGNMENT: 3, TYPE_WARRANTY_CENTER: 4 }, statuses: { STATUS_NEW: 1, STATUS_ASSIGNED: 2, STATUS_REPARING: 3, STATUS_REPAIRED: 4, STATUS_IN_WARRANTY_CENTER: 5, STATUS_CANNOT_REPAIR: 6, STATUS_WAITING_ACCESSORIES: 7, STATUS_CUSTOMER_NOT_REPAIR: 8 }, returnStatuses: { STATUS_RETURNED_YES: 5, STATUS_RETURNED_NO: 6, STATUS_SENT_DEPOT: 7, STATUS_RECEIVED_DEPOT: 8, STATUS_PENDING_SHIP: 9, STATUS_SENT_SHIP: 10 } }, productStatus: { types: { TYPE_PRODUCT_STATUS: 1, TYPE_WARRANTY_BILL_STATUS: 2 }, statuses: { STATUS_ACTIVE: 1, STATUS_INACTIVE: 2 } }, reason: { statuses: { STATUS_ACTIVE: 1, STATUS_INACTIVE: 2 } } }, media: { types: { TYPE_FILE_TEMPORARY: 404, TYPE_IMAGE_PRODUCT_STORE: 1, TYPE_IMAGE_PRODUCT_STORE_IMAGES: 2, TYPE_IMAGE_ALBUM_PHOTO: 3, TYPE_IMAGE_CAMPAIGN: 6, TYPE_IMAGE_MANUAFACTURE: 7, TYPE_IMAGE_STORE_PRODUCT_CATEGORY: 8, TYPE_IMAGE_ALBUM: 9, TYPE_IMAGE_PRODUCT_WITHOUT_SAVE_DB: 10, TYPE_IMAGE_PRODUCT_BRAND: 20, TYPE_IMAGE_EDIT_THUMB_PHOTO: 12, TYPE_IMAGE_EDIT_THUMB_ALBUM: 13, TYPE_IMAGE_SELFIE: 22, TYPE_IMAGE_CAMPAIGN_PRODUCT: 24, TYPE_FILE_IMEX_BILL: 25, TYPE_FILE_IMEX_REQ_BILL: 26, TYPE_IMAGE_TEMPLATE: 27, TYPE_IMAGE_PRODUCT_STORE_CONTENT: 28, TYPE_IMAGE_ARTICLE_CONTENT: 29, TYPE_IMAGE_PRODUCT_CATEGORY: 31, TYPE_IMAGE_MANUAL: 32, TYPE_ANNOUNCEMENT: 34, TYPE_ICON_STORE_PRODUCT_CATEGORY: 35, TYPE_IMAGE_ALBUM_CONTENT: 36, TYPE_IMAGE_STORE_SETTING: 37, TYPE_IMAGE_STATICPAGE_CONTENT: 38, TYPE_ANNOUNCEMENT_ATTACHMENT: 40, TYPE_IMAGE_TRANSLATE_CONTENT_CONTENT: 41, TYPE_IMAGE_WEBSITE_MENU: 42, TYPE_ICON_WEBSITE_MENU: 43, TYPE_IMAGE_WEBSITE_CONTENT_KEY: 44, TYPE_IMAGE_WARRANTY_HISTORY: 45, TYPE_IMAGE_SEASON_CONTENT: 46, TYPE_IMAGE_CAMPAIGN_CONTENT: 47, TYPE_IMAGE_ARTICLE_CATEGORY: 48, } }, article: { STATUS_PUBLISHED: 1, STATUS_UNPUBLISHED: 2 }, store: { setting: { order: { VALUE_DECLARED_FEE_NO_BUY: -1, VALUE_DECLARED_FEE_SELECT_BUY: 1, VALUE_DECLARED_FEE_ALL_BUY: 2, VALUE_NO_PART_DELIVERY: -1, VALUE_YES_PART_DELIVERY_BY_ORDER: 1, VALUE_YES_PART_DELIVERY_ALL_ORDER: 2, VALUE_ALLOW_TEST_SELECT_BY_ORDER: 5 }, shipping: { OPTION_DISPLAY_NHANH_AND_SELF_CONNECT: 1, OPTION_DISPLAY_NHANH: 2, OPTION_DISPLAY_SELF_CONNECT: 3 } } }, carrier: { services: {} }, website: { content: { arrTypeTextarea: [12], typeArticle: 13 }, menu: { TYPE_IMAGE_WEBSITE_MENU: 42, TYPE_ICON_WEBSITE_MENU: 43 }, article: { TYPE_IMAGE_ARTICLE_CATEGORY: 48 }, album: { TYPE_IMAGE_ALBUM_PHOTO: 3, TYPE_IMAGE_EDIT_THUMB_PHOTO: 12 } }, supplier: { STATUS_PUBLISHED: 1, STATUS_UNPUBLISHED: 2 }, user: { roles: { ROLE_SUPERADMIN: 1, ROLE_ADMIN: 2, ROLE_DEPOT_MANAGER: 14, ROLE_DEPOT_STAFF: 15, ROLE_STORE_MANAGER: 18, ROLE_STORE_VIEWER: 19, ROLE_STORE_EDITOR: 21, ROLE_STORE_ACCOUNTANT: 22, ROLE_STORE_CASHIER: 23, ROLE_STORE_CUSTOMER_CARE: 25, ROLE_STORE_PROCUREMENT: 26, ROLE_STORE_RETAIL_MANAGER: 27, ROLE_STORE_CUSTOMER_CARE_MANAGER: 28, ROLE_DELIVERER: 30, ROLE_SUPPLIER: 45, ROLE_DATA_INPUT: 46, ROLE_MEMBER: 50, ROLE_STORE_SALE: 51, ROLE_GUEST: 90 }, settings: { TYPE_ORDER_ADD: 602, TYPE_POS_BILL_ADD: 700, TYPE_POS_ADDWHOLESALE: 701, TYPE_USER_UI: 810 } }, merchant: { LAZADA_ID: 8142, SHOPEE_ID: 8195, SENDO_ID: 8237, TIKI_ID: 8238, ZALO_ID: 8253, LANDING_ID: 1000, slave: { PRODUCT_SYNC_NHANH: 1, PRODUCT_SYNC_BOTH: 2, PRODUCT_SYNC_CLIENT_AUTO: 3, PRODUCT_SYNC_CLIENT_MANUALLY: 4, PRODUCT_SYNC_NHANH_MANUALLY: 5, ORDER_SYNC_YES: 1, ORDER_SYNC_NO: 2, ORDER_SYNC_SAVE_NHANH: 3, INVENTORY_ACTIVE: 1, INVENTORY_INACTIVE: 2, INVENTORY_FAKE: 3 } }, settings: { types: { SYSTEM_POINT_DEFAULT_RATE: 1000, TYPE_ALL_COMMON_SETTINGS: 9999, TYPE_PRODUCT_CATEGORY_IMAGE: 2, TYPE_ALBUM: 3, TYPE_ALBUM_IMAGE: 4, TYPE_DEPOT_IMAGE: 5, TYPE_ALBUM_CATEGORY_IMAGE: 6, TYPE_MARKETING_CAMPAIGN_IMAGE: 8, TYPE_BRAND_IMAGE: 10, TYPE_OPTIMIZE_WEBSITE_BANNER: 20, TYPE_OPTIMIZE_PROMOTION_BANNER: 21, TYPE_OPTIMIZE_PRODUCT_IMAGE: 22, TYPE_OPTIMIZE_IMAGE: 23, TYPE_WATER_MARK_IMAGE: 2004, TYPE_IMPORT_CONDITION: 11, TYPE_ONLINE_ORDER_ONLY_REMAIN_PS: 24, TYPE_STATUS_ORDER_ACTION: 1313, TYPE_DAY_HOLDING_ORDER: 734, TYPE_BUY_DECLARED_FEE: 735, TYPE_DAY_SHIPPING_ORDER: 736, TYPE_NOTE_SHIPPING: 737, TYPE_PART_DELIVERY_ORDER: 738, TYPE_NEGATIVE_EXPORT_TRANSFER: 121, TYPE_NOTI_DEBT: 15, TYPE_NOTI_CUSTOMER_CARE: 16, TYPE_NOTI_REMAIN: 17, TYPE_NOTI_ORDER: 18 }, values: { VALUE_NO_PART_DELIVERY: -1, VALUE_YES_PART_DELIVERY_BY_ORDER: 1, VALUE_YES_PART_DELIVERY_ALL_ORDER: 2, VALUE_DECLARED_FEE_NO_BUY: -1, VALUE_DECLARED_FEE_SELECT_BUY: 1, VALUE_DECLARED_FEE_ALL_BUY: 2, VALUE_NEGATIVE_SALE_REMAIN: 1, VALUE_NEGATIVE_SALE_AVAILABLE: 2 }, zalo: { TYPE_SEND_TEXT: 1, TYPE_SEND_MEDIA: 2, TYPE_SEND_FILE: 3, TYPE_SEND_LIST: 4 } } };;
$(function() {
    AppForm.init();
    AppDateTime.init();
    AppLocation.init();
    AppFuntions.initAutoNumeric('.autoNumeric');
    $('.menuBar').on('click', function() { $('#menuTopMobile').toggleClass('menuDisplay'); });
    $('.btn-show-pass').on('click', function() {
        $(this).find('i').toggleClass('fa-eye-slash');
        if ($(this).find('i').hasClass('fa-eye-slash')) { $(this).next('input').attr('type', 'text'); } else { $(this).next('input').attr('type', 'password'); }
        $(this).next('input').focus();
    });
    $('.extra-header .menu-active').on('click', function() { var menu = $('.extra-header'); if (menu.hasClass('show-menu')) { menu.removeClass('show-menu');
            $('.extra-header .menu').slideUp();
            $(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down'); } else { menu.addClass('show-menu');
            $('.extra-header .menu').slideDown();
            $(this).find('i').addClass('fa-angle-up').removeClass('fa-angle-down'); } });
    if (document.getElementById("mobile")) { autoNumber(document.getElementById("mobile"), function(value) { return /^-?\d*$/.test(value); }); }
    $('.showHideArticleSectionMenu').click(function(e) { e.preventDefault(); var ct = $('.boxContentGuide');
        $('.showHideArticleSectionMenu').toggleClass('active');
        ct.slideToggle('fast'); if ($('.showHideArticleSectionMenu').hasClass('active')) { $('.showHideArticleSectionMenu').html('show'); } else { $('.showHideArticleSectionMenu').html('hide'); } });
    $(document).on('click', '#phonering-alo-phoneIcon', function() { if (typeof MobileAppNative !== 'undefined') { MobileAppNative.callPhoneNumber("19002812"); } })
});

function autoNumber(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) { textbox.addEventListener(event, function() { if (inputFilter(this.value)) { this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd; } else if (this.hasOwnProperty("oldValue")) { this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd); } else { this.value = ""; } }); }); };
var cacheCities = { "254": "H\u00e0 N\u1ed9i", "255": "H\u1ed3 Ch\u00ed Minh", "256": "An Giang", "257": "B\u00e0 R\u1ecba - V\u0169ng T\u00e0u", "258": "B\u1eafc Ninh", "259": "B\u1eafc Giang", "260": "B\u00ecnh D\u01b0\u01a1ng", "261": "B\u00ecnh \u0110\u1ecbnh", "262": "B\u00ecnh Ph\u01b0\u1edbc", "263": "B\u00ecnh Thu\u1eadn", "264": "B\u1ebfn Tre", "265": "B\u1eafc C\u1ea1n", "266": "C\u1ea7n Th\u01a1", "267": "Kh\u00e1nh H\u00f2a", "268": "Th\u1eeba Thi\u00ean Hu\u1ebf", "269": "L\u00e0o Cai", "270": "Qu\u1ea3ng Ninh", "271": "\u0110\u1ed3ng Nai", "272": "Nam \u0110\u1ecbnh", "273": "C\u00e0 Mau", "274": "Cao B\u1eb1ng", "275": "Gia Lai", "276": "H\u00e0 Giang", "277": "H\u00e0 Nam", "278": "H\u00e0 T\u0129nh", "279": "H\u1ea3i D\u01b0\u01a1ng", "280": "H\u1ea3i Ph\u00f2ng", "281": "H\u00f2a B\u00ecnh", "282": "H\u01b0ng Y\u00ean", "283": "Ki\u00ean Giang", "284": "Kon Tum", "285": "Lai Ch\u00e2u", "286": "L\u00e2m \u0110\u1ed3ng", "287": "L\u1ea1ng S\u01a1n", "288": "Long An", "289": "Ngh\u1ec7 An", "290": "Ninh B\u00ecnh", "291": "Ninh Thu\u1eadn", "292": "Ph\u00fa Th\u1ecd", "293": "Ph\u00fa Y\u00ean", "294": "Qu\u1ea3ng B\u00ecnh", "295": "Qu\u1ea3ng Nam", "296": "Qu\u1ea3ng Ng\u00e3i", "297": "Qu\u1ea3ng Tr\u1ecb", "298": "S\u00f3c Tr\u0103ng", "299": "S\u01a1n La", "300": "T\u00e2y Ninh", "301": "Th\u00e1i B\u00ecnh", "302": "Th\u00e1i Nguy\u00ean", "303": "Thanh H\u00f3a", "304": "Ti\u1ec1n Giang", "305": "Tr\u00e0 Vinh", "306": "Tuy\u00ean Quang", "307": "V\u0129nh Long", "308": "V\u0129nh Ph\u00fac", "309": "Y\u00ean B\u00e1i", "310": "\u0110\u1eafc L\u1eafc", "311": "\u0110\u1ed3ng Th\u00e1p", "312": "\u0110\u00e0 N\u1eb5ng", "313": "\u0110\u1eafc N\u00f4ng", "314": "H\u1eadu Giang", "315": "B\u1ea1c Li\u00eau", "316": "\u0110i\u1ec7n Bi\u00ean" };
var cacheDistricts = { "254": { "317": "Qu\u1eadn Ho\u00e0ng Mai", "318": "Qu\u1eadn Ba \u0110\u00ecnh", "319": "Qu\u1eadn Long Bi\u00ean", "320": "Qu\u1eadn C\u1ea7u Gi\u1ea5y", "321": "Qu\u1eadn \u0110\u1ed1ng \u0110a", "322": "Qu\u1eadn Hai B\u00e0 Tr\u01b0ng", "323": "Qu\u1eadn Ho\u00e0n Ki\u1ebfm", "324": "Qu\u1eadn T\u00e2y H\u1ed3", "325": "Qu\u1eadn Thanh Xu\u00e2n", "326": "Huy\u1ec7n Ba V\u00ec", "327": "Huy\u1ec7n Ch\u01b0\u01a1ng M\u1ef9", "328": "Huy\u1ec7n \u0110an Ph\u01b0\u1ee3ng", "331": "Huy\u1ec7n Gia L\u00e2m", "332": "Huy\u1ec7n Ho\u00e0i \u0110\u1ee9c", "333": "Huy\u1ec7n M\u00ea Linh", "334": "Huy\u1ec7n M\u1ef9 \u0110\u1ee9c", "335": "Huy\u1ec7n Ph\u00fa Xuy\u00ean", "336": "Huy\u1ec7n Ph\u00fac Th\u1ecd", "337": "Huy\u1ec7n Qu\u1ed1c Oai", "338": "Huy\u1ec7n S\u00f3c S\u01a1n", "339": "Huy\u1ec7n Th\u1ea1ch Th\u1ea5t", "340": "Huy\u1ec7n Thanh Oai", "341": "Huy\u1ec7n Thanh Tr\u00ec", "342": "Huy\u1ec7n Th\u01b0\u1eddng T\u00edn", "344": "Huy\u1ec7n \u1ee8ng H\u00f2a", "379": "Qu\u1eadn H\u00e0 \u0110\u00f4ng", "871": "Huy\u1ec7n \u0110\u00f4ng Anh", "1011": "Th\u1ecb x\u00e3 S\u01a1n T\u00e2y", "1032": "Qu\u1eadn B\u1eafc T\u1eeb Li\u00eam", "1033": "Qu\u1eadn Nam T\u1eeb Li\u00eam" }, "255": { "329": "Qu\u1eadn 1", "330": "Qu\u1eadn 2", "345": "Qu\u1eadn 3", "346": "Qu\u1eadn 4", "347": "Qu\u1eadn 5", "348": "Qu\u1eadn 6", "349": "Qu\u1eadn 7", "350": "Qu\u1eadn 8", "351": "Qu\u1eadn 9", "352": "Qu\u1eadn 10", "353": "Qu\u1eadn 11", "354": "Qu\u1eadn 12", "355": "Qu\u1eadn T\u00e2n B\u00ecnh", "356": "Qu\u1eadn T\u00e2n Ph\u00fa", "357": "Qu\u1eadn B\u00ecnh T\u00e2n", "358": "Qu\u1eadn Ph\u00fa Nhu\u1eadn", "359": "Qu\u1eadn G\u00f2 V\u1ea5p", "360": "Qu\u1eadn B\u00ecnh Th\u1ea1nh", "361": "Th\u00e0nh Ph\u1ed1 Th\u1ee7 \u0110\u1ee9c", "873": "Huy\u1ec7n C\u1ea7n Gi\u1edd", "874": "huy\u1ec7n C\u1ee7 Chi", "1001": "Huy\u1ec7n B\u00ecnh Ch\u00e1nh", "1002": "Huy\u1ec7n H\u00f3c M\u00f4n", "1003": "Huy\u1ec7n Nh\u00e0 B\u00e8" }, "280": { "362": "Qu\u1eadn H\u1ed3ng B\u00e0ng", "363": "Qu\u1eadn Ng\u00f4 Quy\u1ec1n", "364": "Qu\u1eadn L\u00ea Ch\u00e2n", "365": "Qu\u1eadn Ki\u1ebfn An", "366": "Qu\u1eadn H\u1ea3i An", "367": "Qu\u1eadn D\u01b0\u01a1ng Kinh", "368": "Qu\u1eadn \u0110\u1ed3 S\u01a1n", "577": "Huy\u1ec7n An D\u01b0\u01a1ng", "578": "Huy\u1ec7n \u0111\u1ea3o C\u00e1t H\u1ea3i", "579": "Huy\u1ec7n Ki\u1ebfn Th\u1ee5y", "580": "Huy\u1ec7n Ti\u00ean L\u00e3ng", "581": "Huy\u1ec7n V\u0129nh B\u1ea3o", "917": "Huy\u1ec7n An L\u00e3o", "918": "Huy\u1ec7n \u0111\u1ea3o B\u1ea1ch Long V\u0129", "919": "Huy\u1ec7n Thu\u1ef7 Nguy\u00ean" }, "312": { "370": "Qu\u1eadn H\u1ea3i Ch\u00e2u", "371": "Qu\u1eadn Thanh Kh\u00ea", "372": "Qu\u1eadn Ng\u0169 H\u00e0nh S\u01a1n", "373": "Qu\u1eadn Li\u00ean Chi\u1ec3u", "374": "Qu\u1eadn C\u1ea9m L\u1ec7", "487": "Huy\u1ec7n \u0111\u1ea3o Ho\u00e0ng Sa", "902": "Huy\u1ec7n H\u00f2a Vang", "1012": "Qu\u1eadn S\u01a1n Tr\u00e0" }, "266": { "375": "Qu\u1eadn Ninh Ki\u1ec1u", "376": "Qu\u1eadn B\u00ecnh Th\u1ee7y", "377": "Qu\u1eadn C\u00e1i R\u0103ng", "378": "Qu\u1eadn Th\u1ed1t N\u1ed1t", "380": "Qu\u1eadn \u00d4 m\u00f4n", "483": "Huy\u1ec7n C\u1edd \u0110\u1ecf", "484": "Huy\u1ec7n Phong \u0110i\u1ec1n", "485": "Huy\u1ec7n V\u0129nh Th\u1ea1nh", "896": "Huy\u1ec7n Th\u1edbi Lai" }, "268": { "381": "Huy\u1ec7n A L\u01b0\u1edbi", "383": "Huy\u1ec7n Nam \u0110\u00f4ng", "384": "Huy\u1ec7n Phong \u0110i\u1ec1n", "385": "Huy\u1ec7n Ph\u00fa L\u1ed9c", "386": "Huy\u1ec7n Ph\u00fa Vang", "387": "Huy\u1ec7n Qu\u1ea3ng \u0110i\u1ec1n", "388": "Th\u1ecb x\u00e3 H\u01b0\u01a1ng Th\u1ee7y", "872": "Th\u00e0nh ph\u1ed1 Hu\u1ebf", "1017": "Th\u1ecb x\u00e3 H\u01b0\u01a1ng Tr\u00e0" }, "315": { "382": "Huy\u1ec7n \u0110\u00f4ng H\u1ea3i", "407": "Th\u00e0nh ph\u1ed1 B\u1ea1c Li\u00eau", "408": "Th\u1ecb X\u00e3 Gi\u00e1 Rai", "409": "Huy\u1ec7n Ho\u00e0 B\u00ecnh", "410": "Huy\u1ec7n H\u1ed3ng D\u00e2n", "411": "Huy\u1ec7n Ph\u01b0\u1edbc Long", "412": "Huy\u1ec7n V\u0129nh L\u1ee3i" }, "257": { "389": "Huy\u1ec7n Ch\u00e2u \u0110\u1ee9c", "390": "Huy\u1ec7n C\u00f4n \u0110\u1ea3o", "391": "Huy\u1ec7n \u0110\u1ea5t \u0110\u1ecf", "392": "Huy\u1ec7n Long \u0110i\u1ec1n", "393": "Th\u1ecb x\u00e3 Ph\u00fa M\u1ef9", "394": "Th\u00e0nh ph\u1ed1 B\u00e0 R\u1ecba", "395": "Th\u00e0nh ph\u1ed1 V\u0169ng T\u00e0u", "396": "Huy\u1ec7n Xuy\u00ean M\u1ed9c" }, "256": { "397": "Huy\u1ec7n An Ph\u00fa", "398": "Huy\u1ec7n Ch\u00e2u Ph\u00fa", "399": "Th\u00e0nh ph\u1ed1 Ch\u00e2u \u0110\u1ed1c", "400": "Huy\u1ec7n Ch\u00e2u Th\u00e0nh", "401": "Huy\u1ec7n Ch\u1ee3 M\u1edbi", "402": "Th\u00e0nh ph\u1ed1 Long Xuy\u00ean", "403": "Th\u1ecb x\u00e3 T\u00e2n Ch\u00e2u", "404": "Huy\u1ec7n Tho\u1ea1i S\u01a1n", "405": "Huy\u1ec7n T\u1ecbnh Bi\u00ean", "406": "Huy\u1ec7n Tri T\u00f4n", "1013": "Huy\u00ea\u0323n Ph\u00fa T\u00e2n" }, "259": { "413": "Th\u00e0nh ph\u1ed1 B\u1eafc Giang", "414": "Huy\u1ec7n L\u1ee5c Nam", "415": "Huy\u1ec7n L\u1ee5c Ng\u1ea1n", "416": "Huy\u1ec7n S\u01a1n \u0110\u1ed9ng", "417": "Huy\u1ec7n T\u00e2n Y\u00ean", "418": "Huy\u1ec7n Y\u00ean D\u0169ng", "419": "Huy\u1ec7n Y\u00ean Th\u1ebf", "876": "Huy\u1ec7n Hi\u1ec7p H\u00f2a", "877": "Huy\u1ec7n L\u1ea1ng Giang", "878": "Huy\u1ec7n Vi\u1ec7t Y\u00ean" }, "265": { "420": "Th\u00e0nh ph\u1ed1 B\u1eafc K\u1ea1n", "421": "Huy\u1ec7n Ch\u1ee3 M\u1edbi", "422": "Huy\u1ec7n Na R\u00ec", "423": "Huy\u1ec7n Ng\u00e2n S\u01a1n", "879": "Huy\u1ec7n Ba B\u1ec3", "880": "Huy\u1ec7n B\u1ea1ch Th\u00f4ng", "881": "Huy\u1ec7n Ch\u1ee3 \u0110\u1ed3n", "882": "Huy\u1ec7n P\u00e1c N\u1eb7m" }, "258": { "424": "Th\u00e0nh ph\u1ed1 B\u1eafc Ninh", "425": "Huy\u1ec7n Gia B\u00ecnh", "426": "Huy\u1ec7n Qu\u1ebf V\u00f5", "427": "Huy\u1ec7n Thu\u1eadn Th\u00e0nh", "428": "Huy\u1ec7n Ti\u00ean Du", "429": "Th\u1ecb x\u00e3 T\u1eeb S\u01a1n", "430": "Huy\u1ec7n Y\u00ean Phong", "883": "Huy\u1ec7n L\u01b0\u01a1ng T\u00e0i" }, "264": { "431": "Huy\u1ec7n Ba Tri", "432": "Th\u00e0nh ph\u1ed1 B\u1ebfn Tre", "433": "Huy\u1ec7n B\u00ecnh \u0110\u1ea1i", "434": "Huy\u1ec7n Ch\u00e2u Th\u00e0nh", "435": "Huy\u1ec7n Ch\u1ee3 L\u00e1ch", "436": "Huy\u1ec7n Gi\u1ed3ng Tr\u00f4m", "437": "Huy\u1ec7n M\u1ecf C\u00e0y Nam", "438": "Huy\u1ec7n Th\u1ea1nh Ph\u00fa", "884": "Huy\u1ec7n M\u1ecf C\u00e0y B\u1eafc" }, "260": { "439": "Th\u1ecb x\u00e3 B\u1ebfn C\u00e1t", "440": "Huy\u1ec7n D\u1ea7u Ti\u1ebfng", "441": "Th\u00e0nh Ph\u1ed1 D\u0129 An", "442": "Huy\u1ec7n Ph\u00fa Gi\u00e1o", "443": "Th\u1ecb x\u00e3 T\u00e2n Uy\u00ean", "444": "Th\u00e0nh ph\u1ed1 Th\u1ee7 D\u1ea7u M\u1ed9t", "445": "Th\u00e0nh Ph\u1ed1 Thu\u1eadn An", "1027": "Huy\u1ec7n B\u00e0u B\u00e0ng", "1028": "Huy\u1ec7n B\u1eafc T\u00e2n Uy\u00ean" }, "261": { "446": "Huy\u1ec7n An L\u00e3o", "447": "Th\u1ecb X\u00e3 An Nh\u01a1n", "448": "Th\u1ecb X\u00e3 Ho\u00e0i Nh\u01a1n", "449": "Huy\u1ec7n Ph\u00f9 C\u00e1t", "450": "Huy\u1ec7n Ph\u00f9 M\u1ef9", "451": "Th\u00e0nh ph\u1ed1 Qui Nh\u01a1n", "452": "Huy\u1ec7n T\u00e2y S\u01a1n", "453": "Huy\u1ec7n Tuy Ph\u01b0\u1edbc", "454": "Huy\u1ec7n V\u00e2n Canh", "455": "Huy\u1ec7n V\u0129nh Th\u1ea1nh", "885": "Huy\u1ec7n Ho\u00e0i \u00c2n" }, "262": { "456": "Th\u1ecb x\u00e3 B\u00ecnh Long", "457": "Huy\u1ec7n B\u00f9 \u0110\u0103ng", "458": "Th\u00e0nh Ph\u1ed1 \u0110\u1ed3ng Xo\u00e0i", "459": "Huy\u1ec7n L\u1ed9c Ninh", "460": "Th\u1ecb x\u00e3 Ph\u01b0\u1edbc Long", "461": "Huy\u1ec7n B\u00f9 Gia M\u1eadp", "886": "Huy\u1ec7n B\u00f9 \u0110\u1ed1p", "887": "Huy\u1ec7n Ch\u01a1n Th\u00e0nh", "888": "Huy\u1ec7n \u0110\u1ed3ng Ph\u00fa", "889": "Huy\u1ec7n H\u1edbn Qu\u1ea3n", "1018": "Huy\u1ec7n Ph\u00fa Ri\u1ec1ng" }, "263": { "462": "Huy\u1ec7n H\u00e0m T\u00e2n", "463": "Th\u1ecb x\u00e3 La Gi", "464": "Th\u00e0nh ph\u1ed1 Phan Thi\u1ebft", "465": "Huy\u1ec7n Tuy Phong", "890": "Huy\u1ec7n B\u1eafc B\u00ecnh", "891": "Huy\u1ec7n \u0110\u1ee9c Linh", "892": "Huy\u1ec7n H\u00e0m Thu\u1eadn B\u1eafc", "893": "Huy\u1ec7n H\u00e0m Thu\u1eadn Nam", "894": "Huy\u1ec7n \u0111\u1ea3o Ph\u00fa Qu\u00fd", "895": "Huy\u1ec7n T\u00e1nh Linh" }, "273": { "466": "Th\u00e0nh ph\u1ed1 C\u00e0 Mau", "467": "Huy\u1ec7n C\u00e1i N\u01b0\u1edbc", "468": "Huy\u1ec7n \u0110\u1ea7m D\u01a1i", "469": "Huy\u1ec7n N\u0103m C\u0103n", "470": "Huy\u1ec7n Ng\u1ecdc Hi\u1ec3n", "471": "Huy\u1ec7n Ph\u00fa T\u00e2n", "472": "Huy\u1ec7n Th\u1edbi B\u00ecnh", "473": "Huy\u1ec7n Tr\u1ea7n V\u0103n Th\u1eddi", "474": "Huy\u1ec7n U Minh" }, "274": { "475": "Huy\u1ec7n B\u1ea3o L\u1ea1c", "476": "Huy\u1ec7n B\u1ea3o L\u00e2m", "477": "Th\u00e0nh ph\u1ed1 Cao B\u1eb1ng", "478": "Huy\u1ec7n Nguy\u00ean B\u00ecnh", "479": "Huy\u1ec7n Qu\u1ea3ng Uy\u00ean", "480": "Huy\u1ec7n Th\u00f4ng N\u00f4ng", "481": "Huy\u1ec7n Tr\u00e0 L\u0129nh", "482": "Huy\u1ec7n Tr\u00f9ng Kh\u00e1nh", "897": "Huy\u1ec7n H\u00e0 Qu\u1ea3ng", "898": "Huy\u1ec7n H\u1ea1 Lang", "899": "Huy\u1ec7n H\u00f2a An", "900": "Huy\u1ec7n Ph\u1ee5c H\u00f2a", "901": "Huy\u1ec7n Th\u1ea1ch An", "12232": "Huy\u1ec7n Qu\u1ea3ng H\u00f2a" }, "310": { "486": "Huy\u1ec7n Bu\u00f4n \u0110\u00f4n", "488": "Th\u00e0nh ph\u1ed1 Bu\u00f4n Ma Thu\u1ed9t", "489": "Huy\u1ec7n C\u01b0 Kuin", "490": "Huy\u1ec7n Ea H'leo", "491": "Huy\u1ec7n Ea Kar", "492": "Huy\u1ec7n Ea S\u00fap", "493": "Huy\u1ec7n Kr\u00f4ng Ana", "494": "Huy\u1ec7n Kr\u00f4ng B\u00f4ng", "495": "Huy\u1ec7n Kr\u00f4ng B\u00fak", "496": "Huy\u1ec7n Kr\u00f4ng N\u0103ng", "497": "Huy\u1ec7n Kr\u00f4ng P\u1eafk", "498": "Huy\u1ec7n M'\u0110r\u0103k", "499": "Th\u1ecb x\u00e3 Bu\u00f4n H\u1ed3", "903": "Huy\u1ec7n C\u01b0 Mgar", "904": "Huy\u1ec7n L\u0103k" }, "313": { "500": "Huy\u1ec7n \u0110\u0103k Glong", "501": "Huy\u1ec7n \u0110\u0103k Mil", "502": "Huy\u1ec7n \u0110\u0103k R'L\u1ea5p", "503": "Huy\u1ec7n \u0110\u0103k Song", "504": "Th\u00e0nh Ph\u1ed1 Gia Ngh\u0129a", "505": "Huy\u1ec7n Tuy \u0110\u1ee9c", "905": "Huy\u1ec7n C\u01b0 J\u00fat", "906": "Huy\u1ec7n Kr\u00f4ng N\u00f4" }, "271": { "506": "Th\u00e0nh ph\u1ed1 Bi\u00ean H\u00f2a", "507": "Huy\u1ec7n C\u1ea9m M\u1ef9", "508": "Huy\u1ec7n \u0110\u1ecbnh Qu\u00e1n", "509": "Th\u00e0nh Ph\u1ed1 Long Kh\u00e1nh", "510": "Huy\u1ec7n Long Th\u00e0nh", "511": "Huy\u1ec7n Nh\u01a1n Tr\u1ea1ch", "512": "Huy\u1ec7n Th\u1ed1ng Nh\u1ea5t", "513": "Huy\u1ec7n Tr\u1ea3ng Bom", "514": "Huy\u1ec7n V\u0129nh C\u1eedu", "515": "Huy\u1ec7n Xu\u00e2n L\u1ed9c", "516": "Huy\u1ec7n T\u00e2n Ph\u00fa" }, "311": { "517": "Th\u00e0nh ph\u1ed1 Cao L\u00e3nh", "518": "Huy\u1ec7n Cao L\u00e3nh", "519": "Huy\u1ec7n Ch\u00e2u Th\u00e0nh", "520": "Th\u1ecb x\u00e3 H\u1ed3ng Ng\u1ef1", "521": "Huy\u1ec7n Lai Vung", "522": "Huy\u1ec7n H\u1ed3ng Ng\u1ef1", "523": "Huy\u1ec7n L\u1ea5p V\u00f2", "524": "Th\u00e0nh Ph\u1ed1 Sa \u0110\u00e9c", "525": "Huy\u1ec7n Tam N\u00f4ng", "526": "Huy\u1ec7n T\u00e2n H\u1ed3ng", "527": "Huy\u1ec7n Thanh B\u00ecnh", "528": "Huy\u1ec7n Th\u00e1p M\u01b0\u1eddi" }, "275": { "529": "Th\u1ecb x\u00e3 An Kh\u00ea", "530": "Th\u1ecb x\u00e3 Ayun Pa", "531": "Huy\u1ec7n Ch\u01b0 Pr\u00f4ng", "532": "Huy\u1ec7n Ch\u01b0 S\u00ea", "533": "Huy\u1ec7n \u0110\u0103k \u0110oa", "534": "Huy\u1ec7n \u0110\u1ee9c C\u01a1", "535": "Huy\u1ec7n KBang", "536": "Huy\u1ec7n K\u00f4ng Chro", "537": "Huy\u1ec7n Kr\u00f4ng Pa", "538": "Huy\u1ec7n Mang Yang", "539": "Huy\u1ec7n Ph\u00fa Thi\u1ec7n", "540": "Th\u00e0nh ph\u1ed1 Pleiku", "541": "Huy\u1ec7n Ch\u01b0 P\u01b0h", "907": "Huy\u1ec7n Ch\u01b0 P\u0103h", "908": "Huy\u1ec7n \u0110\u1eafk P\u01a1", "909": "Huy\u1ec7n Ia Grai", "910": "Huy\u1ec7n Ia Pa" }, "276": { "542": "Huy\u1ec7n \u0110\u1ed3ng V\u0103n", "543": "Th\u00e0nh ph\u1ed1 H\u00e0 Giang", "544": "Huy\u1ec7n M\u00e8o V\u1ea1c", "545": "Huy\u1ec7n Qu\u1ea3n B\u1ea1", "546": "Huy\u1ec7n V\u1ecb Xuy\u00ean", "547": "Huy\u1ec7n X\u00edn M\u1ea7n", "548": "Huy\u1ec7n Y\u00ean Minh", "911": "Huy\u1ec7n B\u1eafc M\u00ea", "912": "Huy\u1ec7n B\u1eafc Quang", "913": "Huy\u1ec7n Ho\u00e0ng Su Ph\u00ec", "914": "Huy\u1ec7n Quang B\u00ecnh" }, "277": { "549": "Huy\u1ec7n B\u00ecnh L\u1ee5c", "550": "Th\u1ecb X\u00e3 Duy Ti\u00ean", "551": "Huy\u1ec7n Kim B\u1ea3ng", "552": "Huy\u1ec7n L\u00fd Nh\u00e2n", "553": "Th\u00e0nh ph\u1ed1 Ph\u1ee7 L\u00fd", "915": "Huy\u1ec7n Thanh Li\u00eam" }, "278": { "554": "Huy\u1ec7n Can L\u1ed9c", "555": "Huy\u1ec7n C\u1ea9m Xuy\u00ean", "556": "Huy\u1ec7n \u0110\u1ee9c Th\u1ecd", "557": "Th\u00e0nh ph\u1ed1 H\u00e0 T\u0129nh", "558": "Th\u1ecb x\u00e3 H\u1ed3ng L\u0129nh", "559": "Huy\u1ec7n H\u01b0\u01a1ng Kh\u00ea", "560": "Huy\u1ec7n H\u01b0\u01a1ng S\u01a1n", "561": "Th\u1ecb x\u00e3 K\u1ef3 Anh", "562": "Huy\u1ec7n V\u0169 Quang", "563": "Huy\u1ec7n Th\u1ea1ch H\u00e0", "564": "Huy\u1ec7n Nghi Xu\u00e2n", "916": "Huy\u1ec7n L\u1ed9c H\u00e0", "1025": "Huy\u1ec7n K\u1ef3 Anh" }, "279": { "565": "Huy\u1ec7n B\u00ecnh Giang", "566": "Huy\u1ec7n C\u1ea9m Gi\u00e0ng", "567": "Th\u00e0nh Ph\u1ed1 Ch\u00ed Linh", "568": "Huy\u1ec7n Gia L\u1ed9c", "569": "Th\u00e0nh ph\u1ed1 H\u1ea3i D\u01b0\u01a1ng", "570": "Huy\u1ec7n Kim Th\u00e0nh", "571": "Th\u1ecb X\u00e3 Kinh M\u00f4n", "572": "Huy\u1ec7n Nam S\u00e1ch", "573": "Huy\u1ec7n Ninh Giang", "574": "Huy\u1ec7n Thanh H\u00e0", "575": "Huy\u1ec7n Thanh Mi\u1ec7n", "576": "Huy\u1ec7n T\u1ee9 K\u1ef3" }, "314": { "582": "Huy\u1ec7n Ch\u00e2u Th\u00e0nh", "583": "Huy\u1ec7n Ch\u00e2u Th\u00e0nh A", "584": "Huy\u1ec7n Long M\u1ef9", "585": "Huy\u1ec7n Ph\u1ee5ng Hi\u1ec7p", "586": "Th\u00e0nh Ph\u1ed1 Ng\u00e3 B\u1ea3y", "587": "Th\u00e0nh ph\u1ed1 V\u1ecb Thanh", "588": "Huy\u1ec7n V\u1ecb Th\u1ee7y", "1023": "Th\u1ecb x\u00e3 Long M\u1ef9" }, "281": { "589": "Huy\u1ec7n Cao Phong", "590": "Huy\u1ec7n \u0110\u00e0 B\u1eafc", "591": "Th\u00e0nh ph\u1ed1 Ho\u00e0 B\u00ecnh", "592": "Huy\u1ec7n Kim B\u00f4i", "593": "Huy\u1ec7n L\u1ea1c S\u01a1n", "594": "Huy\u1ec7n L\u1ea1c Th\u1ee7y", "595": "Huy\u1ec7n L\u01b0\u01a1ng S\u01a1n", "596": "Huy\u1ec7n Mai Ch\u00e2u", "597": "Huy\u1ec7n Y\u00ean Th\u1ee7y", "920": "Huy\u1ec7n K\u1ef3 S\u01a1n", "1016": "Huy\u1ec7n T\u00e2n L\u1ea1c" }, "282": { "598": "Huy\u1ec7n \u00c2n Thi", "599": "Th\u00e0nh ph\u1ed1 H\u01b0ng Y\u00ean", "600": "Huy\u1ec7n Kho\u00e1i Ch\u00e2u", "601": "Th\u1ecb X\u00e3 M\u1ef9 H\u00e0o", "602": "Huy\u1ec7n V\u0103n Giang", "603": "Huy\u1ec7n V\u0103n L\u00e2m", "604": "Huy\u1ec7n Y\u00ean M\u1ef9", "921": "Huy\u1ec7n Kim \u0110\u1ed9ng", "922": "Huy\u1ec7n Ph\u00f9 C\u1eeb", "923": "Huy\u1ec7n Ti\u00ean L\u1eef" }, "283": { "605": "Huy\u1ec7n An Bi\u00ean", "606": "Huy\u1ec7n An Minh", "607": "Huy\u1ec7n Ch\u00e2u Th\u00e0nh", "608": "Huy\u1ec7n Gi\u1ed3ng Ri\u1ec1ng", "609": "Huy\u1ec7n G\u00f2 Quao", "610": "Th\u00e0nh Ph\u1ed1 H\u00e0 Ti\u00ean", "611": "Huy\u1ec7n H\u00f2n \u0110\u1ea5t", "612": "Huy\u1ec7n Ki\u00ean L\u01b0\u01a1ng", "613": "Huy\u1ec7n \u0111\u1ea3o Ph\u00fa Qu\u1ed1c", "614": "Th\u00e0nh ph\u1ed1 R\u1ea1ch Gi\u00e1", "615": "Huy\u1ec7n T\u00e2n Hi\u1ec7p", "616": "Huy\u1ec7n U Minh Th\u01b0\u1ee3ng", "617": "Huy\u1ec7n V\u0129nh Thu\u1eadn", "926": "Huy\u1ec7n \u0111\u1ea3o Ki\u00ean H\u1ea3i", "927": "Huy\u1ec7n Giang Th\u00e0nh" }, "284": { "618": "Huy\u1ec7n \u0110\u1eafk Glei", "619": "Huy\u1ec7n \u0110\u1eafk H\u00e0", "620": "Huy\u1ec7n \u0110\u0103k T\u00f4", "621": "Huy\u1ec7n Kon Pl\u00f4ng", "622": "Huy\u1ec7n Kon R\u1eaby", "623": "Huy\u1ec7n Sa Th\u1ea7y", "624": "Huy\u1ec7n Tu M\u01a1 R\u00f4ng", "928": "Th\u00e0nh ph\u1ed1 Kon Tum", "929": "Huy\u1ec7n Ng\u1ecdc H\u1ed3i", "1024": "Huy\u1ec7n Ia H'Drai" }, "267": { "625": "Th\u00e0nh ph\u1ed1 Cam Ranh", "626": "Huy\u1ec7n Di\u00ean Kh\u00e1nh", "627": "Huy\u1ec7n Kh\u00e1nh S\u01a1n", "628": "Huy\u1ec7n Kh\u00e1nh V\u0129nh", "629": "Th\u00e0nh ph\u1ed1 Nha Trang", "630": "Th\u1ecb x\u00e3 Ninh H\u00f2a", "631": "Huy\u1ec7n V\u1ea1n Ninh", "924": "Huy\u1ec7n \u0111\u1ea3o Tr\u01b0\u1eddng Sa", "925": "Huy\u1ec7n Cam L\u00e2m" }, "285": { "632": "Th\u00e0nh Ph\u1ed1 Lai Ch\u00e2u", "633": "Huy\u1ec7n Phong Th\u1ed5", "634": "Huy\u1ec7n S\u00ecn H\u1ed3", "635": "Huy\u1ec7n Tam \u0110\u01b0\u1eddng", "636": "Huy\u1ec7n Than Uy\u00ean", "637": "Huy\u1ec7n M\u01b0\u1eddng T\u00e8", "930": "Huy\u1ec7n T\u00e2n Uy\u00ean", "1015": "Huy\u1ec7n N\u1eadm Nh\u00f9n" }, "287": { "638": "Huy\u1ec7n B\u1eafc S\u01a1n", "639": "Huy\u1ec7n B\u00ecnh Gia", "640": "Huy\u1ec7n Chi L\u0103ng", "641": "Huy\u1ec7n \u0110\u00ecnh L\u1eadp", "642": "Huy\u1ec7n H\u1eefu L\u0169ng", "643": "Th\u00e0nh ph\u1ed1 L\u1ea1ng S\u01a1n", "644": "Huy\u1ec7n L\u1ed9c B\u00ecnh", "645": "Huy\u1ec7n V\u0103n Quan", "936": "Huy\u1ec7n Cao L\u1ed9c", "937": "huy\u1ec7n Tr\u00e0ng \u0110\u1ecbnh", "938": "Huy\u1ec7n V\u0103n L\u00e3ng" }, "269": { "646": "Huy\u1ec7n B\u00e1t X\u00e1t", "647": "Huy\u1ec7n B\u1eafc H\u00e0", "648": "Th\u00e0nh ph\u1ed1 L\u00e0o Cai", "649": "Huy\u1ec7n M\u01b0\u1eddng Kh\u01b0\u01a1ng", "650": "Th\u1ecb X\u00e3 Sa Pa", "651": "Huy\u1ec7n Si Ma Cai", "652": "Huy\u1ec7n V\u0103n B\u00e0n", "939": "Huy\u1ec7n B\u1ea3o Th\u1eafng", "940": "Huy\u1ec7n B\u1ea3o Y\u00ean" }, "286": { "653": "Huy\u1ec7n B\u1ea3o L\u00e2m", "654": "Th\u00e0nh ph\u1ed1 B\u1ea3o L\u1ed9c", "655": "Huy\u1ec7n Di Linh", "656": "Th\u00e0nh ph\u1ed1 \u0110\u00e0 L\u1ea1t", "657": "Huy\u1ec7n \u0110\u1ea1 T\u1ebbh", "658": "Huy\u1ec7n L\u1ea1c D\u01b0\u01a1ng", "659": "Huy\u1ec7n L\u00e2m H\u00e0", "931": "Huy\u1ec7n C\u00e1t Ti\u00ean", "932": "Huy\u1ec7n \u0110\u1ea1 Huoai", "933": "Huy\u1ec7n \u0110am R\u00f4ng", "934": "huy\u1ec7n \u0110\u01a1n D\u01b0\u01a1ng", "935": "Huy\u1ec7n \u0110\u1ee9c Tr\u1ecdng" }, "288": { "660": "Huy\u1ec7n B\u1ebfn L\u1ee9c", "661": "Huy\u1ec7n C\u1ea7n \u0110\u01b0\u1edbc", "662": "Huy\u1ec7n C\u1ea7n Giu\u1ed9c", "663": "Huy\u1ec7n Ch\u00e2u Th\u00e0nh", "664": "Huy\u1ec7n \u0110\u1ee9c H\u00f2a", "665": "Huy\u1ec7n \u0110\u1ee9c Hu\u1ec7", "666": "Huy\u1ec7n M\u1ed9c H\u00f3a", "667": "Th\u00e0nh ph\u1ed1 T\u00e2n An", "668": "Huy\u1ec7n T\u00e2n H\u01b0ng", "669": "Huy\u1ec7n T\u00e2n Th\u1ea1nh", "670": "Huy\u1ec7n T\u00e2n Tr\u1ee5", "671": "Huy\u1ec7n Th\u1ea1nh H\u00f3a", "672": "Huy\u1ec7n Th\u1ee7 Th\u1eeba", "673": "Huy\u1ec7n V\u0129nh H\u01b0ng", "1022": "Th\u1ecb x\u00e3 Ki\u1ebfn T\u01b0\u1eddng" }, "272": { "674": "Huy\u1ec7n Giao Th\u1ee7y", "675": "Huy\u1ec7n H\u1ea3i H\u1eadu", "676": "Huy\u1ec7n M\u1ef9 L\u1ed9c", "677": "Th\u00e0nh ph\u1ed1 Nam \u0110\u1ecbnh", "678": "Huy\u1ec7n Nam Tr\u1ef1c", "679": "Huy\u1ec7n Ngh\u0129a H\u01b0ng", "680": "Huy\u1ec7n Tr\u1ef1c Ninh", "681": "Huy\u1ec7n V\u1ee5 B\u1ea3n", "682": "Huy\u1ec7n Xu\u00e2n Tr\u01b0\u1eddng", "683": "Huy\u1ec7n \u00dd Y\u00ean" }, "290": { "684": "Huy\u1ec7n Gia Vi\u1ec5n", "685": "Huy\u1ec7n Kim S\u01a1n", "686": "Huy\u1ec7n Nho Quan", "687": "Th\u00e0nh ph\u1ed1 Ninh B\u00ecnh", "688": "Th\u00e0nh ph\u1ed1 Tam \u0110i\u1ec7p", "945": "Huy\u1ec7n Hoa L\u01b0", "946": "Huy\u1ec7n Y\u00ean Kh\u00e1nh", "947": "Huy\u1ec7n Y\u00ean M\u00f4" }, "291": { "689": "Huy\u1ec7n Ninh S\u01a1n", "690": "Th\u00e0nh ph\u1ed1 Phan Rang-Th\u00e1p Ch\u00e0m", "948": "Huy\u1ec7n B\u00e1c \u00c1i", "949": "Huy\u1ec7n Ninh H\u1ea3i", "950": "Huy\u1ec7n Ninh Ph\u01b0\u1edbc", "951": "Huy\u1ec7n Thu\u1eadn B\u1eafc", "952": "Huy\u1ec7n Thu\u1eadn Nam" }, "289": { "691": "Huy\u1ec7n Anh S\u01a1n", "692": "Huy\u1ec7n Con Cu\u00f4ng", "693": "Th\u1ecb x\u00e3 C\u1eeda L\u00f2", "694": "Huy\u1ec7n Di\u1ec5n Ch\u00e2u", "695": "Huy\u1ec7n \u0110\u00f4 L\u01b0\u01a1ng", "696": "Huy\u1ec7n H\u01b0ng Nguy\u00ean", "697": "Huy\u1ec7n K\u1ef3 S\u01a1n", "698": "Huy\u1ec7n Nam \u0110\u00e0n", "699": "Huy\u1ec7n Nghi L\u1ed9c", "700": "Huy\u1ec7n Qu\u1ef3 H\u1ee3p", "701": "Huy\u1ec7n Qu\u1ef3nh L\u01b0u", "702": "Huy\u1ec7n T\u00e2n K\u1ef3", "703": "Th\u1ecb x\u00e3 Th\u00e1i H\u00f2a", "704": "Huy\u1ec7n Thanh Ch\u01b0\u01a1ng", "705": "Th\u00e0nh ph\u1ed1 Vinh", "706": "Huy\u1ec7n Y\u00ean Th\u00e0nh", "941": "Huy\u1ec7n Ngh\u0129a \u0110\u00e0n", "942": "Huy\u1ec7n Qu\u1ebf Phong", "943": "Huy\u1ec7n Qu\u1ef3 Ch\u00e2u", "944": "Huy\u1ec7n T\u01b0\u01a1ng D\u01b0\u01a1ng", "1021": "Th\u1ecb x\u00e3 Ho\u00e0ng Mai" }, "292": { "707": "Huy\u1ec7n \u0110oan H\u00f9ng", "708": "Huy\u1ec7n H\u1ea1 H\u00f2a", "709": "Huy\u1ec7n L\u00e2m Thao", "710": "Th\u1ecb x\u00e3 Ph\u00fa Th\u1ecd", "711": "Huy\u1ec7n Thanh Ba", "712": "Huy\u1ec7n Thanh S\u01a1n", "713": "Huy\u1ec7n Thanh Th\u1ee7y", "714": "Th\u00e0nh ph\u1ed1 Vi\u1ec7t Tr\u00ec", "715": "Huy\u1ec7n Y\u00ean L\u1eadp", "953": "Huy\u1ec7n Ph\u00f9 Ninh", "954": "Huy\u1ec7n Tam N\u00f4ng", "955": "Huy\u1ec7n T\u00e2n S\u01a1n", "956": "Huy\u1ec7n C\u1ea9m Kh\u00ea" }, "293": { "716": "Th\u1ecb x\u00e3 S\u00f4ng C\u1ea7u", "717": "Huy\u1ec7n Tuy An", "718": "Th\u00e0nh ph\u1ed1 Tuy H\u00f2a", "957": "Th\u1ecb x\u00e3 \u0110\u00f4ng H\u00f2a", "958": "Huy\u1ec7n \u0110\u1ed3ng Xu\u00e2n", "959": "Huy\u1ec7n Ph\u00fa H\u00f2a", "960": "Huy\u1ec7n S\u00f4ng Hinh", "961": "Huy\u1ec7n S\u01a1n H\u00f2a", "962": "Huy\u1ec7n T\u00e2y H\u00f2a" }, "294": { "719": "Huy\u1ec7n B\u1ed1 Tr\u1ea1ch", "720": "Th\u00e0nh ph\u1ed1 \u0110\u1ed3ng H\u1edbi", "721": "Huy\u1ec7n L\u1ec7 Th\u1ee7y", "963": "Huy\u1ec7n Minh H\u00f3a", "964": "Huy\u1ec7n Qu\u1ea3ng Ninh", "965": "Huy\u1ec7n Qu\u1ea3ng Tr\u1ea1ch", "966": "Huy\u1ec7n Tuy\u00ean H\u00f3a", "1019": "Th\u1ecb x\u00e3 Ba \u0110\u1ed3n" }, "295": { "722": "Th\u1ecb x\u00e3 \u0110i\u1ec7n B\u00e0n", "723": "Th\u00e0nh ph\u1ed1 H\u1ed9i An", "724": "Huy\u1ec7n N\u00fai Th\u00e0nh", "725": "Huy\u1ec7n Ph\u00fa Ninh", "726": "Th\u00e0nh ph\u1ed1 Tam K\u1ef3", "727": "Huy\u1ec7n Th\u0103ng B\u00ecnh", "728": "Huy\u1ec7n Ti\u00ean Ph\u01b0\u1edbc", "967": "Huy\u1ec7n Nam Tr\u00e0 My", "968": "Huy\u1ec7n B\u1eafc Tr\u00e0 My", "969": "Huy\u1ec7n Duy Xuy\u00ean", "970": "Huy\u1ec7n \u0110\u1ea1i L\u1ed9c", "971": "Huy\u1ec7n \u0110\u00f4ng Giang", "972": "Huy\u1ec7n Hi\u1ec7p \u0110\u1ee9c", "973": "Huy\u1ec7n Nam Giang", "974": "Huy\u1ec7n Ph\u01b0\u1edbc S\u01a1n", "975": "Huy\u1ec7n Qu\u1ebf S\u01a1n", "976": "Huy\u1ec7n T\u00e2y Giang", "977": "Huy\u1ec7n N\u00f4ng S\u01a1n" }, "270": { "729": "Huy\u1ec7n Ba Ch\u1ebd", "730": "Huy\u1ec7n B\u00ecnh Li\u00eau", "731": "Th\u00e0nh ph\u1ed1 C\u1ea9m Ph\u1ea3", "732": "Huy\u1ec7n \u0111\u1ea3o C\u00f4 T\u00f4", "733": "Huy\u1ec7n \u0110\u1ea7m H\u00e0", "734": "Th\u1ecb x\u00e3 \u0110\u00f4ng Tri\u1ec1u", "735": "Th\u00e0nh ph\u1ed1 H\u1ea1 Long", "736": "Huy\u1ec7n Ho\u00e0nh B\u1ed3", "737": "Th\u00e0nh ph\u1ed1 M\u00f3ng C\u00e1i", "738": "Huy\u1ec7n Ti\u00ean Y\u00ean", "739": "Th\u00e0nh ph\u1ed1 U\u00f4ng B\u00ed", "875": "Huy\u1ec7n V\u00e2n \u0110\u1ed3n", "983": "Huy\u1ec7n H\u1ea3i H\u00e0", "1029": "Th\u1ecb x\u00e3 Qu\u1ea3ng Y\u00ean" }, "296": { "741": "Huy\u1ec7n Ba T\u01a1", "742": "Th\u1ecb x\u00e3 \u0110\u1ee9c Ph\u1ed5", "743": "Huy\u1ec7n \u0111\u1ea3o L\u00fd S\u01a1n", "744": "Huy\u1ec7n Minh Long", "745": "Huy\u1ec7n M\u1ed9 \u0110\u1ee9c", "746": "Th\u00e0nh ph\u1ed1 Qu\u1ea3ng Ng\u00e3i", "747": "Huy\u1ec7n S\u01a1n H\u00e0", "748": "Huy\u1ec7n S\u01a1n T\u1ecbnh", "749": "Huy\u1ec7n Tr\u00e0 B\u1ed3ng", "978": "Huy\u1ec7n B\u00ecnh S\u01a1n", "979": "Huy\u1ec7n Ngh\u0129a H\u00e0nh", "980": "Huy\u1ec7n S\u01a1n T\u00e2y", "981": "Huy\u1ec7n T\u00e2y Tr\u00e0", "1014": "Huy\u1ec7n T\u01b0 Ngh\u0129a" }, "297": { "750": "Huy\u1ec7n Cam L\u1ed9", "751": "Huy\u1ec7n \u0111\u1ea3o C\u1ed3n C\u1ecf", "752": "Huy\u1ec7n \u0110a Kr\u00f4ng", "753": "Th\u00e0nh ph\u1ed1 \u0110\u00f4ng H\u00e0", "754": "Huy\u1ec7n Gio Linh", "755": "Huy\u1ec7n H\u1ea3i L\u0103ng", "756": "Th\u1ecb x\u00e3 Qu\u1ea3ng Tr\u1ecb", "757": "Huy\u1ec7n V\u0129nh Linh", "984": "Huy\u1ec7n H\u01b0\u1edbng H\u00f3a", "985": "Huy\u1ec7n Tri\u1ec7u Phong" }, "298": { "758": "Huy\u1ec7n C\u00f9 Lao Dung", "759": "Huy\u1ec7n K\u1ebf S\u00e1ch", "760": "Huy\u1ec7n Long Ph\u00fa", "761": "Huy\u1ec7n M\u1ef9 T\u00fa", "762": "Huy\u1ec7n M\u1ef9 Xuy\u00ean", "763": "Th\u1ecb x\u00e3 Ng\u00e3 N\u0103m", "764": "Th\u00e0nh ph\u1ed1 S\u00f3c Tr\u0103ng", "765": "Huy\u1ec7n Th\u1ea1nh Tr\u1ecb", "766": "Th\u1ecb X\u00e3 V\u0129nh Ch\u00e2u", "767": "Huy\u1ec7n Ch\u00e2u Th\u00e0nh", "986": "Huy\u1ec7n Tr\u1ea7n \u0110\u1ec1" }, "299": { "768": "Huy\u1ec7n B\u1eafc Y\u00ean", "769": "Huy\u1ec7n M\u1ed9c Ch\u00e2u", "770": "Huy\u1ec7n Ph\u00f9 Y\u00ean", "771": "Huy\u1ec7n Qu\u1ef3nh Nhai", "772": "Huy\u1ec7n S\u00f4ng M\u00e3", "773": "Huy\u1ec7n S\u1ed1p C\u1ed9p", "774": "Th\u00e0nh ph\u1ed1 S\u01a1n La", "775": "Huy\u1ec7n Thu\u1eadn Ch\u00e2u", "776": "Huy\u1ec7n Y\u00ean Ch\u00e2u", "987": "Huy\u1ec7n Mai S\u01a1n", "988": "Huy\u1ec7n M\u01b0\u1eddng La", "1020": "Huy\u1ec7n V\u00e2n H\u1ed3" }, "300": { "777": "Huy\u1ec7n B\u1ebfn C\u1ea7u", "778": "Huy\u1ec7n Ch\u00e2u Th\u00e0nh", "779": "Huy\u1ec7n D\u01b0\u01a1ng Minh Ch\u00e2u", "780": "Huy\u1ec7n G\u00f2 D\u1ea7u", "781": "Th\u1ecb X\u00e3 H\u00f2a Th\u00e0nh", "782": "Huy\u1ec7n T\u00e2n Bi\u00ean", "783": "Huy\u1ec7n T\u00e2n Ch\u00e2u", "784": "Th\u00e0nh Ph\u1ed1 T\u00e2y Ninh", "785": "Th\u1ecb X\u00e3 Tr\u1ea3ng B\u00e0ng" }, "304": { "786": "Th\u1ecb x\u00e3 Cai L\u1eady", "787": "Huy\u1ec7n C\u00e1i B\u00e8", "788": "Huy\u1ec7n Ch\u1ee3 G\u1ea1o", "789": "Th\u1ecb x\u00e3 G\u00f2 C\u00f4ng", "790": "Th\u00e0nh ph\u1ed1 M\u1ef9 Tho", "791": "Huy\u1ec7n T\u00e2n Ph\u01b0\u1edbc", "997": "Huy\u1ec7n Ch\u00e2u Th\u00e0nh", "998": "Huy\u1ec7n G\u00f2 C\u00f4ng \u0110\u00f4ng", "999": "Huy\u1ec7n G\u00f2 C\u00f4ng T\u00e2y", "1000": "Huy\u1ec7n T\u00e2n Ph\u00fa \u0110\u00f4ng", "1031": "Huy\u1ec7n Cai L\u1eady" }, "306": { "792": "Huy\u1ec7n Chi\u00eam H\u00f3a", "793": "Huy\u1ec7n H\u00e0m Y\u00ean", "794": "Huy\u1ec7n Na Hang", "795": "Huy\u1ec7n S\u01a1n D\u01b0\u01a1ng", "796": "Th\u00e0nh ph\u1ed1 Tuy\u00ean Quang", "797": "Huy\u1ec7n Y\u00ean S\u01a1n", "1004": "Huy\u1ec7n L\u00e2m B\u00ecnh" }, "301": { "798": "Huy\u1ec7n \u0110\u00f4ng H\u01b0ng", "799": "Huy\u1ec7n H\u01b0ng H\u00e0", "800": "Huy\u1ec7n Ki\u1ebfn X\u01b0\u01a1ng", "801": "Huy\u1ec7n Qu\u1ef3nh Ph\u1ee5", "802": "Th\u00e0nh ph\u1ed1 Th\u00e1i B\u00ecnh", "803": "Huy\u1ec7n Th\u00e1i Th\u1ee5y", "804": "Huy\u1ec7n Ti\u1ec1n H\u1ea3i", "805": "Huy\u1ec7n V\u0169 Th\u01b0" }, "302": { "806": "Huy\u1ec7n \u0110\u1ea1i T\u1eeb", "807": "Huy\u1ec7n \u0110\u1ed3ng H\u1ef7", "808": "Th\u00e0nh ph\u1ed1 S\u00f4ng C\u00f4ng", "809": "Th\u00e0nh ph\u1ed1 Th\u00e1i Nguy\u00ean", "989": "Huy\u1ec7n \u0110\u1ecbnh H\u00f3a", "990": "Th\u1ecb x\u00e3 Ph\u1ed5 Y\u00ean", "991": "Huy\u1ec7n Ph\u00fa B\u00ecnh", "992": "Huy\u1ec7n Ph\u00fa L\u01b0\u01a1ng", "993": "Huy\u1ec7n V\u00f5 Nhai" }, "303": { "810": "Huy\u1ec7n B\u00e1 Th\u01b0\u1edbc", "811": "Th\u1ecb x\u00e3 B\u1ec9m S\u01a1n", "812": "Huy\u1ec7n C\u1ea9m Th\u1ee7y", "813": "Huy\u1ec7n H\u00e0 Trung", "814": "Huy\u1ec7n H\u1eadu L\u1ed9c", "815": "Huy\u1ec7n Ho\u1eb1ng H\u00f3a", "816": "Huy\u1ec7n Lang Ch\u00e1nh", "817": "Huy\u1ec7n M\u01b0\u1eddng L\u00e1t", "818": "Huy\u1ec7n Nga S\u01a1n", "819": "Huy\u1ec7n Ng\u1ecdc L\u1eb7c", "820": "Huy\u1ec7n N\u00f4ng C\u1ed1ng", "821": "Huy\u1ec7n Quan H\u00f3a", "822": "Huy\u1ec7n Quan S\u01a1n", "823": "Huy\u1ec7n Qu\u1ea3ng X\u01b0\u01a1ng", "824": "Th\u1ecb x\u00e3 S\u1ea7m S\u01a1n", "825": "Huy\u1ec7n Th\u1ea1ch Th\u00e0nh", "826": "Th\u00e0nh ph\u1ed1 Thanh H\u00f3a", "827": "Huy\u1ec7n Thi\u1ec7u H\u00f3a", "828": "Huy\u1ec7n Th\u1ecd Xu\u00e2n", "829": "Huy\u1ec7n Th\u01b0\u1eddng Xu\u00e2n", "830": "Th\u1ecb x\u00e3 Nghi S\u01a1n", "831": "Huy\u1ec7n Tri\u1ec7u S\u01a1n", "832": "Huy\u1ec7n V\u0129nh L\u1ed9c", "833": "Huy\u1ec7n Y\u00ean \u0110\u1ecbnh", "994": "Huy\u1ec7n \u0110\u00f4ng S\u01a1n", "995": "Huy\u1ec7n Nh\u01b0 Thanh", "996": "Huy\u1ec7n Nh\u01b0 Xu\u00e2n" }, "305": { "834": "Huy\u1ec7n C\u00e0ng Long", "835": "Huy\u1ec7n C\u1ea7u K\u00e8", "836": "Huy\u1ec7n C\u1ea7u Ngang", "837": "Huy\u1ec7n Ch\u00e2u Th\u00e0nh", "838": "Th\u1ecb x\u00e3 Duy\u00ean H\u1ea3i", "839": "Huy\u1ec7n Ti\u1ec3u C\u1ea7n", "840": "Huy\u1ec7n Tr\u00e0 C\u00fa", "841": "Th\u00e0nh ph\u1ed1 Tr\u00e0 Vinh", "1030": "Huy\u1ec7n Duy\u00ean H\u1ea3i" }, "307": { "842": "Th\u1ecb x\u00e3 B\u00ecnh Minh", "843": "Huy\u1ec7n B\u00ecnh T\u00e2n", "844": "Huy\u1ec7n Long H\u1ed3", "845": "Huy\u1ec7n Mang Th\u00edt", "846": "Huy\u1ec7n Tam B\u00ecnh", "847": "Huy\u1ec7n Tr\u00e0 \u00d4n", "848": "Th\u00e0nh ph\u1ed1 V\u0129nh Long", "849": "Huy\u1ec7n V\u0169ng Li\u00eam" }, "308": { "850": "Huy\u1ec7n B\u00ecnh Xuy\u00ean", "851": "Huy\u1ec7n L\u1eadp Th\u1ea1ch", "852": "Th\u00e0nh ph\u1ed1 Ph\u00fac Y\u00ean", "853": "Huy\u1ec7n V\u0129nh T\u01b0\u1eddng", "854": "Th\u00e0nh ph\u1ed1 V\u0129nh Y\u00ean", "855": "Huy\u1ec7n Y\u00ean L\u1ea1c", "856": "Huy\u1ec7n Tam \u0110\u1ea3o", "1005": "Huy\u1ec7n S\u00f4ng L\u00f4", "1006": "Huy\u1ec7n Tam D\u01b0\u01a1ng" }, "309": { "857": "Huy\u1ec7n M\u00f9 C\u0103ng Ch\u1ea3i", "858": "Th\u1ecb x\u00e3 Ngh\u0129a L\u1ed9", "859": "Huy\u1ec7n Tr\u1ea1m T\u1ea5u", "860": "Th\u00e0nh ph\u1ed1 Y\u00ean B\u00e1i", "861": "Huy\u1ec7n Y\u00ean B\u00ecnh", "1007": "Huy\u1ec7n L\u1ee5c Y\u00ean", "1008": "Huy\u1ec7n Tr\u1ea5n Y\u00ean", "1009": "Huy\u1ec7n V\u0103n Ch\u1ea5n", "1010": "Huy\u1ec7n V\u0103n Y\u00ean" }, "316": { "862": "Huy\u1ec7n \u0110i\u1ec7n Bi\u00ean", "863": "Huy\u1ec7n \u0110i\u1ec7n Bi\u00ean \u0110\u00f4ng", "864": "Th\u00e0nh ph\u1ed1 \u0110i\u1ec7n Bi\u00ean Ph\u1ee7", "865": "Huy\u1ec7n M\u01b0\u1eddng \u1ea2ng", "866": "Huy\u1ec7n M\u01b0\u1eddng Ch\u00e0", "867": "Th\u1ecb x\u00e3 M\u01b0\u1eddng Lay", "868": "Huy\u1ec7n M\u01b0\u1eddng Nh\u00e9", "869": "Huy\u1ec7n T\u1ee7a Ch\u00f9a", "870": "Huy\u1ec7n Tu\u1ea7n Gi\u00e1o", "1026": "Huy\u1ec7n N\u1eadm P\u1ed3" } };