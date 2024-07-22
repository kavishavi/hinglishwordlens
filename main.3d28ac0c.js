this.wordle = this.wordle || {}, this.wordle.bundle =  function(e) {
    "use strict";

    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function s(e, a) {
        if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
    }

    function t(e, a) {
        for (var s = 0; s < a.length; s++) {
            var t = a[s];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
        }
    }

    function n(e, a, s) {
        return a && t(e.prototype, a), s && t(e, s), e
    }

    function o(e, a, s) {
        return a in e ? Object.defineProperty(e, a, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[a] = s, e
    }

    function r(e, a) {
        if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(a && a.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), a && l(e, a)
    }

    function i(e) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, a) {
        return (l = Object.setPrototypeOf || function(e, a) {
            return e.__proto__ = a, e
        })(e, a)
    }

    function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }

    function c(e, a, s) {
        return (c = d() ? Reflect.construct : function(e, a, s) {
            var t = [null];
            t.push.apply(t, a);
            var n = new(Function.bind.apply(e, t));
            return s && l(n, s.prototype), n
        }).apply(null, arguments)
    }

    function u(e) {
        var a = "function" == typeof Map ? new Map : void 0;
        return (u = function(e) {
            if (null === e || (s = e, -1 === Function.toString.call(s).indexOf("[native code]"))) return e;
            var s;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== a) {
                if (a.has(e)) return a.get(e);
                a.set(e, t)
            }

            function t() {
                return c(e, arguments, i(this).constructor)
            }
            return t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), l(t, e)
        })(e)
    }

    function m(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function p(e, a) {
        return !a || "object" != typeof a && "function" != typeof a ? m(e) : a
    }

    function h(e) {
        var a = d();
        return function() {
            var s, t = i(e);
            if (a) {
                var n = i(this).constructor;
                s = Reflect.construct(t, arguments, n)
            } else s = t.apply(this, arguments);
            return p(this, s)
        }
    }

    function y(e, a) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, a) {
            var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == s) return;
            var t, n, o = [],
                r = !0,
                i = !1;
            try {
                for (s = s.call(e); !(r = (t = s.next()).done) && (o.push(t.value), !a || o.length !== a); r = !0);
            } catch (e) {
                i = !0, n = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i) throw n
                }
            }
            return o
        }(e, a) || b(e, a) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function g(e) {
        return function(e) {
            if (Array.isArray(e)) return f(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || b(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function b(e, a) {
        if (e) {
            if ("string" == typeof e) return f(e, a);
            var s = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0
        }
    }

    function f(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
        return t
    }
    var k = document.createElement("template");
    k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
    var v = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), o(m(e = a.call(this)), "_letter", ""), o(m(e), "_state", "empty"), o(m(e), "_animation", "idle"), o(m(e), "_last", !1), o(m(e), "_reveal", !1), e.attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "last",
            set: function(e) {
                this._last = e
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(k.content.cloneNode(!0)), this.$tile = this.shadowRoot.querySelector(".tile"), this.$tile.addEventListener("animationend", (function(a) {
                    "PopIn" === a.animationName && (e._animation = "idle"), "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state, e._animation = "flip-out"), "FlipOut" === a.animationName && (e._animation = "idle", e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
                        bubbles: !0,
                        composed: !0
                    }))), e._render()
                })), this._render()
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, a, s) {
                switch (e) {
                    case "letter":
                        if (s === a) break;
                        var t = "null" === s ? "" : s;
                        this._letter = t, this._state = t ? "tbd" : "empty", this._animation = t ? "pop" : "idle";
                        break;
                    case "evaluation":
                        if (!s) break;
                        this._state = s;
                        break;
                    case "reveal":
                        this._animation = "flip-in", this._reveal = !0
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                this.$tile && (this.$tile.textContent = this._letter, ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state), (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["letter", "evaluation", "reveal"]
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-tile", v);
    var w = document.createElement("template");
    w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
    var x = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e._letters = "", e._evaluation = [], e._length, e
        }
        return n(t, [{
            key: "evaluation",
            get: function() {
                return this._evaluation
            },
            set: function(e) {
                var a = this;
                this._evaluation = e, this.$tiles && this.$tiles.forEach((function(e, s) {
                    e.setAttribute("evaluation", a._evaluation[s]), setTimeout((function() {
                        e.setAttribute("reveal", "")
                    }), 300 * s)
                }))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(w.content.cloneNode(!0)), this.$row = this.shadowRoot.querySelector(".row");
                for (var a = function(a) {
                        var s = document.createElement("game-tile"),
                            t = e._letters[a];
                        (t && s.setAttribute("letter", t), e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]), setTimeout((function() {
                            s.setAttribute("reveal", "")
                        }), 100 * a));
                        a === e._length - 1 && (s.last = !0), e.$row.appendChild(s)
                    }, s = 0; s < this._length; s++) a(s);
                this.$tiles = this.shadowRoot.querySelectorAll("game-tile"), this.addEventListener("animationend", (function(a) {
                    "Shake" === a.animationName && e.removeAttribute("invalid")
                }))
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, a, s) {
                switch (e) {
                    case "letters":
                        this._letters = s || "";
                        break;
                    case "length":
                        this._length = parseInt(s, 10);
                        break;
                    case "win":
                        if (null === s) {
                            this.$tiles.forEach((function(e) {
                                e.classList.remove("win")
                            }));
                            break
                        }
                        this.$tiles.forEach((function(e, a) {
                            e.classList.add("win"), e.style.animationDelay = "".concat(100 * a, "ms")
                        }))
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                var e = this;
                this.$row && this.$tiles.forEach((function(a, s) {
                    var t = e._letters[s];
                    t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
                }))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["letters", "length", "invalid", "win"]
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-row", x);
    var z = document.createElement("template");
    z.innerHTML = "\n  <slot></slot>\n";
    var j = "hinglish-wordle-ns-darkmode",
        S = "hinglish-wordle-ns-cbmode",
        C = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                s(this, t), o(m(e = a.call(this)), "isDarkTheme", !1), o(m(e), "isColorBlindTheme", !1), e.attachShadow({
                    mode: "open"
                });
                var n = JSON.parse(window.localStorage.getItem(j)),
                    r = window.matchMedia("(prefers-color-scheme: dark)").matches,
                    i = JSON.parse(window.localStorage.getItem(S));
                return !0 === n || !1 === n ? e.setDarkTheme(n) : r && e.setDarkTheme(!0), !0 !== i && !1 !== i || e.setColorBlindTheme(i), window.themeManager = m(e), e
            }
            return n(t, [{
                key: "setDarkTheme",
                value: function(e) {
                    var a = document.querySelector("body");
                    e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"), this.isDarkTheme = e, window.localStorage.setItem(j, JSON.stringify(e))
                }
            }, {
                key: "setColorBlindTheme",
                value: function(e) {
                    var a = document.querySelector("body");
                    e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"), this.isColorBlindTheme = e, window.localStorage.setItem(S, JSON.stringify(e))
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(z.content.cloneNode(!0)), this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                        var s = a.detail,
                            t = s.name,
                            n = s.checked;
                        switch (t) {
                            case "dark-theme":
                                return void e.setDarkTheme(n);
                            case "color-blind-theme":
                                return void e.setColorBlindTheme(n)
                        }
                    }))
                }
            }]), t
        }(u(HTMLElement));

    function _(e, a) {
        return e === a || e != e && a != a
    }

    function E(e, a) {
        for (var s = e.length; s--;)
            if (_(e[s][0], a)) return s;
        return -1
    }
    customElements.define("game-theme-manager", C);
    var q = Array.prototype.splice;

    function L(e) {
        var a = -1,
            s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s;) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    L.prototype.clear = function() {
        this.__data__ = [], this.size = 0
    }, L.prototype.delete = function(e) {
        var a = this.__data__,
            s = E(a, e);
        return !(s < 0) && (s == a.length - 1 ? a.pop() : q.call(a, s, 1), --this.size, !0)
    }, L.prototype.get = function(e) {
        var a = this.__data__,
            s = E(a, e);
        return s < 0 ? void 0 : a[s][1]
    }, L.prototype.has = function(e) {
        return E(this.__data__, e) > -1
    }, L.prototype.set = function(e, a) {
        var s = this.__data__,
            t = E(s, e);
        return t < 0 ? (++this.size, s.push([e, a])) : s[t][1] = a, this
    };
    var T = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global,
        A = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
        I = T || A || Function("return this")(),
        M = I.Symbol,
        O = Object.prototype,
        R = O.hasOwnProperty,
        H = O.toString,
        N = M ? M.toStringTag : void 0;
    var P = Object.prototype.toString;
    var D = M ? M.toStringTag : void 0;

    function $(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : D && D in Object(e) ? function(e) {
            var a = R.call(e, N),
                s = e[N];
            try {
                e[N] = void 0;
                var t = !0
            } catch (e) {}
            var n = H.call(e);
            return t && (a ? e[N] = s : delete e[N]), n
        }(e) : function(e) {
            return P.call(e)
        }(e)
    }

    function G(e) {
        var s = a(e);
        return null != e && ("object" == s || "function" == s)
    }

    function B(e) {
        if (!G(e)) return !1;
        var a = $(e);
        return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
    }
    var V, F = I["__core-js_shared__"],
        W = (V = /[^.]+$/.exec(F && F.keys && F.keys.IE_PROTO || "")) ? "Symbol(src)_1." + V : "";
    var Y = Function.prototype.toString;
    var U = /^\[object .+?Constructor\]$/,
        J = Function.prototype,
        X = Object.prototype,
        Z = J.toString,
        K = X.hasOwnProperty,
        Q = RegExp("^" + Z.call(K).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function ee(e) {
        return !(!G(e) || (a = e, W && W in a)) && (B(e) ? Q : U).test(function(e) {
            if (null != e) {
                try {
                    return Y.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }(e));
        var a
    }

    function ae(e, a) {
        var s = function(e, a) {
            return null == e ? void 0 : e[a]
        }(e, a);
        return ee(s) ? s : void 0
    }
    var se = ae(I, "Map"),
        te = ae(Object, "create");
    var ne = Object.prototype.hasOwnProperty;
    var oe = Object.prototype.hasOwnProperty;

    function re(e) {
        var a = -1,
            s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s;) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }

    function ie(e, s) {
        var t, n, o = e.__data__;
        return ("string" == (n = a(t = s)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== t : null === t) ? o["string" == typeof s ? "string" : "hash"] : o.map
    }

    function le(e) {
        var a = -1,
            s = null == e ? 0 : e.length;
        for (this.clear(); ++a < s;) {
            var t = e[a];
            this.set(t[0], t[1])
        }
    }
    re.prototype.clear = function() {
        this.__data__ = te ? te(null) : {}, this.size = 0
    }, re.prototype.delete = function(e) {
        var a = this.has(e) && delete this.__data__[e];
        return this.size -= a ? 1 : 0, a
    }, re.prototype.get = function(e) {
        var a = this.__data__;
        if (te) {
            var s = a[e];
            return "__lodash_hash_undefined__" === s ? void 0 : s
        }
        return ne.call(a, e) ? a[e] : void 0
    }, re.prototype.has = function(e) {
        var a = this.__data__;
        return te ? void 0 !== a[e] : oe.call(a, e)
    }, re.prototype.set = function(e, a) {
        var s = this.__data__;
        return this.size += this.has(e) ? 0 : 1, s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a, this
    }, le.prototype.clear = function() {
        this.size = 0, this.__data__ = {
            hash: new re,
            map: new(se || L),
            string: new re
        }
    }, le.prototype.delete = function(e) {
        var a = ie(this, e).delete(e);
        return this.size -= a ? 1 : 0, a
    }, le.prototype.get = function(e) {
        return ie(this, e).get(e)
    }, le.prototype.has = function(e) {
        return ie(this, e).has(e)
    }, le.prototype.set = function(e, a) {
        var s = ie(this, e),
            t = s.size;
        return s.set(e, a), this.size += s.size == t ? 0 : 1, this
    };

    function de(e) {
        var a = this.__data__ = new L(e);
        this.size = a.size
    }
    de.prototype.clear = function() {
        this.__data__ = new L, this.size = 0
    }, de.prototype.delete = function(e) {
        var a = this.__data__,
            s = a.delete(e);
        return this.size = a.size, s
    }, de.prototype.get = function(e) {
        return this.__data__.get(e)
    }, de.prototype.has = function(e) {
        return this.__data__.has(e)
    }, de.prototype.set = function(e, a) {
        var s = this.__data__;
        if (s instanceof L) {
            var t = s.__data__;
            if (!se || t.length < 199) return t.push([e, a]), this.size = ++s.size, this;
            s = this.__data__ = new le(t)
        }
        return s.set(e, a), this.size = s.size, this
    };
    var ce = function() {
        try {
            var e = ae(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {}
    }();

    function ue(e, a, s) {
        "__proto__" == a && ce ? ce(e, a, {
            configurable: !0,
            enumerable: !0,
            value: s,
            writable: !0
        }) : e[a] = s
    }

    function me(e, a, s) {
        (void 0 !== s && !_(e[a], s) || void 0 === s && !(a in e)) && ue(e, a, s)
    }
    var pe, he = function(e, a, s) {
            for (var t = -1, n = Object(e), o = s(e), r = o.length; r--;) {
                var i = o[pe ? r : ++t];
                if (!1 === a(n[i], i, n)) break
            }
            return e
        },
        ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        be = ge && ge.exports === ye ? I.Buffer : void 0,
        fe = be ? be.allocUnsafe : void 0;
    var ke = I.Uint8Array;

    function ve(e, a) {
        var s, t, n = a ? (s = e.buffer, t = new s.constructor(s.byteLength), new ke(t).set(new ke(s)), t) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length)
    }
    var we = Object.create,
        xe = function() {
            function e() {}
            return function(a) {
                if (!G(a)) return {};
                if (we) return we(a);
                e.prototype = a;
                var s = new e;
                return e.prototype = void 0, s
            }
        }();
    var ze, je, Se = (ze = Object.getPrototypeOf, je = Object, function(e) {
            return ze(je(e))
        }),
        Ce = Object.prototype;

    function _e(e) {
        var a = e && e.constructor;
        return e === ("function" == typeof a && a.prototype || Ce)
    }

    function Ee(e) {
        return null != e && "object" == a(e)
    }

    function qe(e) {
        return Ee(e) && "[object Arguments]" == $(e)
    }
    var Le = Object.prototype,
        Te = Le.hasOwnProperty,
        Ae = Le.propertyIsEnumerable,
        Ie = qe(function() {
            return arguments
        }()) ? qe : function(e) {
            return Ee(e) && Te.call(e, "callee") && !Ae.call(e, "callee")
        },
        Me = Array.isArray;

    function Oe(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
    }

    function Re(e) {
        return null != e && Oe(e.length) && !B(e)
    }
    var He = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        Ne = He && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        Pe = Ne && Ne.exports === He ? I.Buffer : void 0,
        De = (Pe ? Pe.isBuffer : void 0) || function() {
            return !1
        },
        $e = Function.prototype,
        Ge = Object.prototype,
        Be = $e.toString,
        Ve = Ge.hasOwnProperty,
        Fe = Be.call(Object);
    var We = {};
    We["[object Float32Array]"] = We["[object Float64Array]"] = We["[object Int8Array]"] = We["[object Int16Array]"] = We["[object Int32Array]"] = We["[object Uint8Array]"] = We["[object Uint8ClampedArray]"] = We["[object Uint16Array]"] = We["[object Uint32Array]"] = !0, We["[object Arguments]"] = We["[object Array]"] = We["[object ArrayBuffer]"] = We["[object Boolean]"] = We["[object DataView]"] = We["[object Date]"] = We["[object Error]"] = We["[object Function]"] = We["[object Map]"] = We["[object Number]"] = We["[object Object]"] = We["[object RegExp]"] = We["[object Set]"] = We["[object String]"] = We["[object WeakMap]"] = !1;
    var Ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
        Ue = Ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
        Je = Ue && Ue.exports === Ye && T.process,
        Xe = function() {
            try {
                var e = Ue && Ue.require && Ue.require("util").types;
                return e || Je && Je.binding && Je.binding("util")
            } catch (e) {}
        }(),
        Ze = Xe && Xe.isTypedArray,
        Ke = Ze ? function(e) {
            return function(a) {
                return e(a)
            }
        }(Ze) : function(e) {
            return Ee(e) && Oe(e.length) && !!We[$(e)]
        };

    function Qe(e, a) {
        if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a) return e[a]
    }
    var ea = Object.prototype.hasOwnProperty;

    function aa(e, a, s) {
        var t = e[a];
        ea.call(e, a) && _(t, s) && (void 0 !== s || a in e) || ue(e, a, s)
    }
    var sa = /^(?:0|[1-9]\d*)$/;

    function ta(e, s) {
        var t = a(e);
        return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s
    }
    var na = Object.prototype.hasOwnProperty;

    function oa(e, a) {
        var s = Me(e),
            t = !s && Ie(e),
            n = !s && !t && De(e),
            o = !s && !t && !n && Ke(e),
            r = s || t || n || o,
            i = r ? function(e, a) {
                for (var s = -1, t = Array(e); ++s < e;) t[s] = a(s);
                return t
            }(e.length, String) : [],
            l = i.length;
        for (var d in e) !a && !na.call(e, d) || r && ("length" == d || n && ("offset" == d || "parent" == d) || o && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
        return i
    }
    var ra = Object.prototype.hasOwnProperty;

    function ia(e) {
        if (!G(e)) return function(e) {
            var a = [];
            if (null != e)
                for (var s in Object(e)) a.push(s);
            return a
        }(e);
        var a = _e(e),
            s = [];
        for (var t in e)("constructor" != t || !a && ra.call(e, t)) && s.push(t);
        return s
    }

    function la(e) {
        return Re(e) ? oa(e, !0) : ia(e)
    }

    function da(e) {
        return function(e, a, s, t) {
            var n = !s;
            s || (s = {});
            for (var o = -1, r = a.length; ++o < r;) {
                var i = a[o],
                    l = t ? t(s[i], e[i], i, s, e) : void 0;
                void 0 === l && (l = e[i]), n ? ue(s, i, l) : aa(s, i, l)
            }
            return s
        }(e, la(e))
    }

    function ca(e, a, s, t, n, o, r) {
        var i = Qe(e, s),
            l = Qe(a, s),
            d = r.get(l);
        if (d) me(e, s, d);
        else {
            var c, u = o ? o(i, l, s + "", e, a, r) : void 0,
                m = void 0 === u;
            if (m) {
                var p = Me(l),
                    h = !p && De(l),
                    y = !p && !h && Ke(l);
                u = l, p || h || y ? Me(i) ? u = i : Ee(c = i) && Re(c) ? u = function(e, a) {
                    var s = -1,
                        t = e.length;
                    for (a || (a = Array(t)); ++s < t;) a[s] = e[s];
                    return a
                }(i) : h ? (m = !1, u = function(e, a) {
                    if (a) return e.slice();
                    var s = e.length,
                        t = fe ? fe(s) : new e.constructor(s);
                    return e.copy(t), t
                }(l, !0)) : y ? (m = !1, u = ve(l, !0)) : u = [] : function(e) {
                    if (!Ee(e) || "[object Object]" != $(e)) return !1;
                    var a = Se(e);
                    if (null === a) return !0;
                    var s = Ve.call(a, "constructor") && a.constructor;
                    return "function" == typeof s && s instanceof s && Be.call(s) == Fe
                }(l) || Ie(l) ? (u = i, Ie(i) ? u = da(i) : G(i) && !B(i) || (u = function(e) {
                    return "function" != typeof e.constructor || _e(e) ? {} : xe(Se(e))
                }(l))) : m = !1
            }
            m && (r.set(l, u), n(u, l, t, o, r), r.delete(l)), me(e, s, u)
        }
    }

    function ua(e, a, s, t, n) {
        e !== a && he(a, (function(o, r) {
            if (n || (n = new de), G(o)) ca(e, a, r, s, ua, t, n);
            else {
                var i = t ? t(Qe(e, r), o, r + "", e, a, n) : void 0;
                void 0 === i && (i = o), me(e, r, i)
            }
        }), la)
    }

    function ma(e) {
        return e
    }

    function pa(e, a, s) {
        switch (s.length) {
            case 0:
                return e.call(a);
            case 1:
                return e.call(a, s[0]);
            case 2:
                return e.call(a, s[0], s[1]);
            case 3:
                return e.call(a, s[0], s[1], s[2])
        }
        return e.apply(a, s)
    }
    var ha = Math.max;
    var ya = ce ? function(e, a) {
            return ce(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: (s = a, function() {
                    return s
                }),
                writable: !0
            });
            var s
        } : ma,
        ga = Date.now;
    var ba = function(e) {
        var a = 0,
            s = 0;
        return function() {
            var t = ga(),
                n = 16 - (t - s);
            if (s = t, n > 0) {
                if (++a >= 800) return arguments[0]
            } else a = 0;
            return e.apply(void 0, arguments)
        }
    }(ya);

    function fa(e, a) {
        return ba(function(e, a, s) {
            return a = ha(void 0 === a ? e.length - 1 : a, 0),
                function() {
                    for (var t = arguments, n = -1, o = ha(t.length - a, 0), r = Array(o); ++n < o;) r[n] = t[a + n];
                    n = -1;
                    for (var i = Array(a + 1); ++n < a;) i[n] = t[n];
                    return i[a] = s(r), pa(e, this, i)
                }
        }(e, a, ma), e + "")
    }
    var ka, va = (ka = function(e, a, s) {
            ua(e, a, s)
        }, fa((function(e, s) {
            var t = -1,
                n = s.length,
                o = n > 1 ? s[n - 1] : void 0,
                r = n > 2 ? s[2] : void 0;
            for (o = ka.length > 3 && "function" == typeof o ? (n--, o) : void 0, r && function(e, s, t) {
                    if (!G(t)) return !1;
                    var n = a(s);
                    return !!("number" == n ? Re(t) && ta(s, t.length) : "string" == n && s in t) && _(t[s], e)
                }(s[0], s[1], r) && (o = n < 3 ? void 0 : o, n = 1), e = Object(e); ++t < n;) {
                var i = s[t];
                i && ka(e, i, t, o)
            }
            return e
        }))),
        wa = "hinglish-wordle-ns-state",
        xa = {
            boardState: null,
            evaluations: null,
            rowIndex: null,
            solution: null,
            gameStatus: null,
            lastPlayedTs: null,
            lastCompletedTs: null,
            restoringFromLocalStorage: null,
            hardMode: !1
        };

    function za() {
        var e = window.localStorage.getItem(wa) || JSON.stringify(xa);

        var z = JSON.parse(e);

       


        return z;
    }

    function ja(e) {
        var a = za();
        ! function(e) {
            window.localStorage.setItem(wa, JSON.stringify(e))
        }(va(a, e))
    }

    function Sa() {
        var e = navigator.userAgent || navigator.vendor || window.opera;
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
    }

    function Ca() {
        var e = navigator.userAgent;
        return e.match(/chrome|chromium|crios/i) ? "chrome" : e.match(/firefox|fxios/i) ? "firefox" : e.match(/safari/i) ? "safari" : e.match(/opr\//i) ? "opera" : e.match(/edg/i) ? "edge" : "No browser detection"
    }
    var _a = "mailto:upadhyaya@yahoo.com";

    function Ea(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    var qa = function(e) {
            var a = [];
            return Object.keys(e).forEach((function(s) {
                a.push("".concat(encodeURIComponent(s), "=").concat(encodeURIComponent(e[s])))
            })), "?".concat(a.join("&"))
        },
        La = document.createElement("template");
    La.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Hard Mode</div>\n          <div class="description">Any revealed hints must be used in subsequent guesses</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Dark Theme</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">High Contrast Mode</div>\n          <div class="description">For improved color vision</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Feedback</div>\n        </div>\n        <div class="control">\n          <a href="'.concat(function() {
        var e, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "HInglish Wordle NonStop Feedback",
            s = (new Date).getTimezoneOffset(),
            t = "\r\n\r\n\n--\nDevice summary:\nPage: /games/wordle\nPlatform: ".concat(Sa() ? "Web (Mobile)" : "Web (Desktop)", " \nBrowser: ").concat(Ea(Ca()), "\nScreen Resolution: ").concat(window.screen.width, " x ").concat(window.screen.height, "\nViewport Size: ").concat(document.documentElement.clientWidth, " x ").concat(document.documentElement.clientHeight, "\nTimezone: ", "UTC".concat(s > 0 ? "" : "+").concat(s / -60), "\nBuild: ").concat(null === (e = window.wordle) || void 0 === e ? void 0 : e.hash, "\n  ");
        return _a + qa({
            subject: a,
            body: t
        })
     }(), '" title="upadhyaya@yahoo.com">Email</a>\n        </div>\n      </div>\n                    </section>\n  </div>\n       <div id="footnote">\n    <div id="copyright">&#169; ').concat((new Date).getFullYear(), ' Hinglish Wordle NonStop</div>\n    <div>\n      <div id="puzzle-number"></div>\n    </div>\n  </div>\n');        
    var Ta = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), o(m(e = a.call(this)), "gameApp", void 0), e.attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(La.content.cloneNode(!0)), this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset-283), this.shadowRoot.addEventListener("game-switch-change", (function(a) {
                    a.stopPropagation();
                    var s = a.detail,
                        t = s.name,
                        n = s.checked,
                        o = s.disabled;
                    e.dispatchEvent(new CustomEvent("game-setting-change", {
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: t,
                            checked: n,
                            disabled: o
                        }
                    })), e.render()
                })), this.render()
            }
        }, {
            key: "render",
            value: function() {
                var e = document.querySelector("body");
                e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""), e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
                var a = za();
                a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""), a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"), this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-settings", Ta);
    var Aa = document.createElement("template");
    Aa.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
    var Ia = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), o(m(e = a.call(this)), "_duration", void 0), e.attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Aa.content.cloneNode(!0));
                var a = this.shadowRoot.querySelector(".toast");
                a.textContent = this.getAttribute("text"), this._duration = this.getAttribute("duration") || 1e3, "Infinity" !== this._duration && setTimeout((function() {
                    a.classList.add("fade")
                }), this._duration), a.addEventListener("transitionend", (function(a) {
                    e.parentNode.removeChild(e)
                }))
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-toast", Ia);

    var gIdx = 0;
    var Ma = [
"chaat",
"sahit",
"dukhi",
"mahal",
"maata",
"antar",
"rajat",
"tujhe",
"kamar",
"fasal",
"bigad",
"garaj",
"taraf",
"manch",
"keval",
"thaal",
"kaanp",
"dharm",
"manan",
"feeka",
"buaji",
"khade",
"tanha",
"khand",
"chhoo",
"masal",
"akhil",
"lamba",
"bahas",
"adhik",
"gahan",
"tanga",
"jawan",
"pyaar",
"palta",
"sauvi",
"tarun",
"humne",
"shyam",
"kabhi",
"kaana",
"dosti",
"nikah",
"munda",
"shodh",
"satah",
"dhang",
"tooti",
"udaas",
"ghana",
"phale",
"ghodi",
"suman",
"kheej",
"beedi",
"matka",
"ruthi",
"solah",
"likho",
"shokh",
"milan",
"haank",
"dhool",
"humko",
"jholi",
"paate",
"badal",
"neend",
"peshe",
"achet",
"tolna",
"kulha",
"dulha",
"khwab",
"hajam",
"shree",
"kasba",
"pedha",
"chura",
"sarak",
"jugal",
"mandi",
"praan",
"chuhe",
"waris",
"lambe",
"kalam",
"halak",
"mohit",
"zamin",
"vadhu",
"shaiv",
"phoda",
"nakal",
"pakne",
"pista",
"sumit",
"badha",
"mudda",
"laali",
"rukha",
"cabin",
"pakda",
"patti",
"kurki",
"munna",
"jhund",
"rulaa",
"boond",
"nahak",
"billi",
"gasht",
"daaku",
"rumal",
"khaat",
"badan",
"choga",
"latke",
"chori",
"vinay",
"lagan",
"kutta",
"sahaj",
"sevan",
"nagar",
"cobra",
"yugma",
"vaidh",
"maine",
"mulya",
"ghoda",
"dagar",
"girta",
"riste",
"mohak",
"kitab",
"kissa",
"kapda",
"okhli",
"sahee",
"kroor",
"ganak",
"moong",
"chawl",
"paati",
"kahna",
"kahne",
"tanki",
"gabru",
"dahal",
"jugnu",
"kursi",
"kadai",
"shani",
"gubar",
"kamal",
"baaja",
"chhin",
"laakh",
"gyaan",
"murge",
"khubi",
"baaju",
"pedhi",
"bhala",
"yaari",
"bhula",
"dalan",
"shlok",
"bimar",
"shail",
"naali",
"maili",
"vivah",
"press",
"talaq",
"barsa",
"sikhi",
"shart",
"naman",
"taang",
"daali",
"rakam",
"dehik",
"chaah",
"kodaa",
"raana",
"sabhi",
"jaana",
"rajai",
"jeebh",
"putra",
"dhuri",
"naari",
"mahak",
"bakra",
"khaal",
"chana",
"dhaak",
"kuchh",
"havas",
"kayas",
"lapak",
"chhat",
"aarop",
"chuka",
"ganit",
"unche",
"patan",
"sikka",
"ghate",
"maina",
"taana",
"mohar",
"tumne",
"rooth",
"maati",
"kulla",
"fakir",
"jaaga",
"jagah",
"magan",
"aalap",
"mohra",
"salam",
"sujhe",
"jugad",
"sikke",
"disha",
"bheel",
"patle",
"khole",
"vatan",
"abhed",
"paana",
"havan",
"kusum",
"qahar",
"seene",
"khule",
"saras",
"jheli",
"chhed",
"panga",
"katte",
"chhak",
"gaana",
"likha",
"zinda",
"faila",
"khelo",
"sugam",
"udhad",
"jhuke",
"bakri",
"halal",
"judai",
"ukhda",
"laana",
"jumla",
"mujhe",
"khair",
"chand",
"bansi",
"karam",
"paisa",
"lamha",
"pochh",
"dauda",
"rummy",
"tabla",
"lakdi",
"aahat",
"chhut",
"hafta",
"neela",
"patla",
"devik",
"murti",
"garib",
"aaloo",
"malik",
"nisha",
"gaddi",
"maggu",
"madad",
"sujit",
"banda",
"aruna",
"sunil",
"sikho",
"khush",
"khata",
"kripa",
"hamle",
"vimal",
"jyoti",
"yatra",
"koyla",
"garam",
"teela",
"munim",
"daman",
"vajan",
"sikha",
"ghula",
"kurti",
"sauda",
"bhumi",
"jawab",
"mohan",
"pauna",
"raina",
"malte",
"tokne",
"suhag",
"sthul",
"putri",
"simti",
"ladte",
"premi",
"shuru",
"anand",
"matak",
"sunee",
"tahal",
"sanan",
"tapak",
"jhuki",
"shola",
"vajah",
"tadka",
"baasi",
"poora",
"daanv",
"chowk",
"chuni",
"baate",
"sidhi",
"shaam",
"dhone",
"doobe",
"utare",
"gaanv",
"swang",
"rahta",
"nupur",
"laabh",
"nazar",
"khoob",
"sheet",
"kaaki",
"dabba",
"veena",
"shaan",
"sangh",
"haami",
"khota",
"ambar",
"haari",
"saham",
"chhuk",
"sevak",
"sidha",
"sadak",
"socha",
"beeta",
"modak",
"dooja",
"khuli",
"milap",
"prani",
"ghata",
"makka",
"chhik",
"chita",
"loote",
"ropan",
"pilla",
"mohne",
"lambi",
"tukde",
"manik",
"laata",
"soond",
"vikar",
"koyal",
"tikha",
"hasti",
"kaisa",
"kasam",
"kolhu",
"pyada",
"revti",
"koodi",
"bheja",
"resha",
"jhelo",
"kohra",
"chola",
"sthit",
"aseem",
"purva",
"bahak",
"lihaf",
"khatm",
"panna",
"rajya",
"hansi",
"jhool",
"kisse",
"kurte",
"viman",
"kheer",
"thand",
"mamta",
"kheti",
"pahan",
"satat",
"purab",
"samet",
"jeena",
"swarg",
"jhola",
"khote",
"daadi",
"ghoor",
"panch",
"kadva",
"rakhi",
"locha",
"gobhi",
"vasul",
"rukte",
"kople",
"sabne",
"ratta",
"soone",
"khola",
"padhe",
"yuvak",
"bagal",
"rakha",
"varun",
"palak",
"khaar",
"onkar",
"uthta",
"dubla",
"bahan",
"hijab",
"sanak",
"kivad",
"dikha",
"sakhi",
"doshi",
"lihaj",
"saakh",
"jogan",
"phata",
"bhram",
"safar",
"kaala",
"gandh",
"ratan",
"munga",
"pakde",
"rupak",
"magar",
"munni",
"surat",
"vidit",
"rukna",
"rasam",
"phaad",
"safai",
"pakdi",
"ankur",
"dugne",
"sahan",
"akela",
"samar",
"sahil",
"guddu",
"maana",
"saude",
"kaand",
"samay",
"karun",
"vaada",
"nocha",
"tikhe",
"kumar",
"yugal",
"nitya",
"aankh",
"patta",
"adhed",
"ajeeb",
"rahat",
"gulal",
"tolte",
"yatim",
"gosht",
"kurta",
"surag",
"sahar",
"vinod",
"sutra",
"ginti",
"lungi",
"kamre",
"pahar",
"khara",
"rassi",
"preet",
"dahan",
"geela",
"haddi",
"jhadu",
"kondh",
"ganju",
"balam",
"phode",
"baaki",
"sukhe",
"sukha",
"sehra",
"damak",
"chhup",
"lassi",
"mirgi",
"aatma",
"vaade",
"sabzi",
"natak",
"kumbh",
"divan",
"falak",
"taral",
"chaap",
"barat",
"toran",
"gaban",
"basta",
"loota",
"dhara",
"punya",
"ubasi",
"vaisa",
"teeja",
"musal",
"jhela",
"parda",
"ranji",
"komal",
"padna",
"kunji",
"chaak",
"badbu",
"mitha",
"nanad",
"sasta",
"nidhi",
"mauka",
"dandi",
"thaga",
"vaham",
"dwaar",
"kadhi",
"chela",
"makdi",
"saand",
"palat",
"sagai",
"kabul",
"jeeja",
"dasha",
"gilli",
"udhar",
"shulk",
"peeda",
"wardi",
"gaman",
"jalsa",
"nagme",
"hissa",
"jamun",
"sabki",
"qasar",
"lamhe",
"latak",
"laale",
"sopan",
"saare",
"dhona",
"garmi",
"pahli",
"nakli",
"katta",
"zahar",
"vahan",
"pesha",
"murli",
"sardi",
"dhaal",
"ubhar",
"fanda",
"raham",
"doori",
"barfi",
"jeeta",
"matar",
"danka",
"peeta",
"taras",
"jeene",
"choos",
"kande",
"tamas",
"kajal",
"sulag",
"tapan",
"pukar",
"paise",
"aaina",
"mohni",
"jigar",
"mauji",
"kapde",
"pushp",
"rishi",
"saral",
"julab",
"danda",
"sadma",
"chitt",
"panda",
"vritt",
"chhua",
"sapna",
"khele",
"chain",
"mahaj",
"heena",
"rasta",
"adhar",
"jhula",
"kundi",
"jeera",
"kaddu",
"peene",
"swati",
"phera",
"chiku",
"puran",
"haani",
"patte",
"dhula",
"anmol",
"hisab",
"sigdi",
"dahak",
"hanan",
"vijay",
"sajag",
"sadhe",
"lekin",
"pavan",
"padta",
"gobar",
"kesar",
"bhari",
"naram",
"shoor",
"baksh",
"kheli",
"bahar",
"virat",
"raakh",
"rahte",
"hatke",
"malta",
"khaak",
"sthal",
"naach",
"rajni",
"barse",
"toota",
"gunda",
"ghaas",
"charm",
"saath",
"saada",
"yaman",
"moksh",
"beeti",
"sadar",
"manoj",
"kheel",
"digar",
"brahm",
"tapsi",
"pakki",
"tahat",
"seedi",
"peela",
"hekdi",
"chakh",
"shant",
"doodh",
"pahra",
"khada",
"nihit",
"silai",
"niwas",
"kadam",
"heera",
"gussa",
"daava",
"seena",
"jhule",
"sadan",
"bhedi",
"nayan",
"bheeg",
"fareb",
"khela",
"peele",
"sehat",
"kisan",
"tangi",
"masla",
"pahle",
"khoon",
"andar",
"devar",
"malin",
"seema",
"rutha",
"pahla",
"danke",
"stree",
"tadak",
"bajra",
"karne",
"katha",
"nanga",
"seekh",
"gamla",
"joote",
"surya",
"phere",
"bhola",
"maafi",
"maang",
"zamir",
"tarse",
"saunp",
"tagdi",
"sabko",
"kohni",
"ukhad",
"radio",
"navin",
"sitar",
"akhar",
"jaati",
"dhani",
"kapur",
"haare",
"daana",
"paina",
"heere",
"mirch",
"bujhe",
"bhakt",
"andaz",
"nutan",
"mauja",
"chhal",
"sharm",
"marti",
"pakke",
"chaal",
"rekha",
"sasti",
"choli",
"maila",
"halki",
"hasin",
"rohan",
"sabha",
"beete",
"ruthe",
"khuda",
"vihar",
"furti",
"umdaa",
"jaisa",
"bijli",
"parat",
"rokna",
"kriya",
"kriti",
"balki",
"varsh",
"patak",
"jheel",
"jalan",
"patke",
"sooli",
"baras",
"kanda",
"kumud",
"kaale",
"peshi",
"gunde",
"ladki",
"ladke",
"sunar",
"dohra",
"tokna",
"titli",
"idhar",
"sajan",
"sasur",
"ganga",
"dekhi",
"pahad",
"chhip",
"gadhi",
"poori",
"abhay",
"zyada",
"sunai",
"pahno",
"namak",
"rukta",
"saanp",
"kutti",
"tirth",
"kanti",
"toote",
"sarso",
"chhan",
"sagun",
"batti",
"malti",
"sutli",
"kholi",
"chuna",
"garud",
"mauje",
"dukka",
"chala",
"kulfi",
"mudit",
"mitti",
"jhoom",
"naval",
"leela",
"ruchi",
"sakal",
"rokne",
"harsh",
"peena",
"malay",
"murga",
"patli",
"chaar",
"padne",
"handi",
"jimma",
"chook",
"purti",
"bholi",
"gurda",
"phodi",
"bahne",
"vivek",
"shool",
"swami",
"khoti",
"padhi",
"tamga",
"kaare",
"sutar",
"phool",
"pahne",
"neech",
"chalo",
"jaise",
"choti",
"poore",
"theek",
"aadha",
"gadhe",
"malai",
"barsi",
"priti",
"haath",
"ispat",
"makar",
"vilay",
"nitin",
"bahut",
"dukan",
"katar",
"mausa",
"bhoot",
"nasha",
"socho",
"akaal",
"laghu",
"yatna",
"kasak",
"subah",
"dimag",
"chhap",
"sooni",
"murgi",
"padte",
"vyang",
"param",
"shubh",
"vidai",
"shahi",
"khaad",
"tumhe",
"khadi",
"johar",
"gulab",
"meera",
"theka",
"kutte",
"jahil",
"dhoop",
"safal",
"padho",
"pagdi",
"jhaad",
"paanv",
"kanak",
"mukka",
"kasbe",
"laate",
"nagma",
"botal",
"ghade",
"malal",
"kaise",
"sheel",
"haran",
"kapat",
"terah",
"prant",
"antim",
"lahar",
"samaj",
"sadhu",
"galat",
"aadmi",
"sohan",
"sabak",
"sooja",
"gopal",
"mohre",
"tekri",
"stuti",
"yakin",
"cheel",
"minar",
"kanji",
"lalit",
"pankh",
"katti",
"vivad",
"zahan",
"malba",
"vande",
"payal",
"kasht",
"patni",
"ganna",
"khari",
"neele",
"vakil",
"satya",
"haldi",
"zakhm",
"feeta",
"mitra",
"tukda",
"rista",
"phoot",
"teeka",
"bhaar",
"ghadi",
"dekha",
"chant",
"belan",
"bhang",
"nahar",
"tokri",
"mausi",
"duhai",
"wakif",
"raste",
"paala",
"genda",
"mundi",
"kulin",
"soona",
"masti",
"rasik",
"hamla",
"karva",
"umesh",
"rukhi",
"pooja",
"khula",
"patra",
"bhaag",
"vikas",
"bhaat",
"nasht",
"paini",
"raman",
"madhu",
"kooda",
"naina",
"tedhi",
"mooli",
"makke",
"suraj",
"swarn",
"kaisi",
"jhand",
"praja",
"ankit",
"gudda",
"ghera",
"sanam",
"mudde",
"dhund",
"rasoi",
"andhe",
"netra",
"maska",
"matke",
"basti",
"ladai",
"jhele",
"glani",
"gadha",
"zaban",
"rahit",
"jhuka",
"kitne",
"pakad",
"bandi",
"prati",
"nicha",
"sukhi",
"ziddi",
"pakhi",
"dhire",
"table",
"pahal",
                        ],
                        Oa = [
"aabad",
"aabha",
"aabru",
"aadaa",
"aadab",
"aadam",
"aadar",
"aadat",
"aadha",
"aadhe",
"aadhi",
"aadmi",
"aadoo",
"aadte",
"aaega",
"aafat",
"aagah",
"aagaj",
"aagaz",
"aagya",
"aahar",
"aahat",
"aahen",
"aahte",
"aaina",
"aaiye",
"aajaa",
"aakar",
"aalam",
"aalap",
"aalas",
"aalia",
"aalok",
"aaloo",
"aalsi",
"aalta",
"aamad",
"aamir",
"aamla",
"aamna",
"aamne",
"aamod",
"aamul",
"aanch",
"aankh",
"aansu",
"aante",
"aapas",
"aapka",
"aapke",
"aapki",
"aapko",
"aapne",
"aapse",
"aapsi",
"aaram",
"aaroh",
"aarop",
"aarti",
"aasan",
"aasar",
"aasha",
"aashu",
"aasin",
"aasra",
"aasre",
"aataa",
"aatma",
"aatur",
"aavaz",
"aavla",
"aawaz",
"aayaa",
"aayad",
"aayam",
"aayan",
"aayat",
"aayee",
"aayog",
"aazad",
"aazam",
"abaad",
"abbaa",
"abdul",
"abeer",
"abhar",
"abhas",
"abhav",
"abhay",
"abhed",
"abodh",
"accha",
"achal",
"achar",
"achet",
"achuk",
"actor",
"adala",
"adali",
"adami",
"adana",
"adbee",
"addaa",
"adhai",
"adhar",
"adhed",
"adhik",
"adhin",
"adial",
"adrak",
"afsar",
"agadh",
"agala",
"agale",
"agali",
"agami",
"agast",
"aglaa",
"aglee",
"agnee",
"agney",
"agnit",
"agosh",
"agrah",
"agraj",
"agrim",
"aguai",
"agyat",
"agyey",
"ahata",
"ahate",
"ahmak",
"ahsas",
"ailan",
"ainak",
"aisaa",
"ajaan",
"ajadi",
"ajeeb",
"ajeet",
"ajeya",
"ajgar",
"ajuba",
"ajube",
"akaal",
"akadh",
"akadi",
"akadu",
"akarm",
"akash",
"akaty",
"akbar",
"akela",
"akele",
"akeli",
"akhar",
"akhet",
"akhil",
"akhir",
"akhri",
"aksar",
"alakh",
"alava",
"album",
"alhad",
"alind",
"alipt",
"alona",
"alsai",
"alsee",
"amali",
"ambar",
"ameer",
"ameya",
"amita",
"amlaa",
"amrit",
"amrud",
"amrut",
"amtul",
"amurt",
"anaaj",
"anaar",
"anadi",
"anand",
"anant",
"anari",
"anash",
"anath",
"anban",
"andar",
"andaz",
"andha",
"andhe",
"andhi",
"andho",
"angad",
"angan",
"angar",
"angna",
"angne",
"angul",
"angur",
"anita",
"anjan",
"anjar",
"anjli",
"anjni",
"anjum",
"ankit",
"ankur",
"anman",
"anmol",
"annaa",
"anoop",
"anshu",
"antar",
"antim",
"anuja",
"anukt",
"anyay",
"apaar",
"apang",
"apani",
"apkar",
"apman",
"apnee",
"apnon",
"apoon",
"april",
"apurv",
"arhar",
"arjee",
"arjit",
"arjun",
"arman",
"arnab",
"aroop",
"arpan",
"arpit",
"arthi",
"aruna",
"arzee",
"asami",
"aseem",
"ashad",
"ashar",
"ashiq",
"ashok",
"ashta",
"ashwa",
"aslee",
"asmat",
"astar",
"astha",
"asthi",
"astra",
"asuri",
"ataka",
"atake",
"ataki",
"atank",
"atare",
"atari",
"ateet",
"athah",
"athak",
"athva",
"atkee",
"atmiy",
"attha",
"atthe",
"atthi",
"aukat",
"aulad",
"aunty",
"auqat",
"aurat",
"ausat",
"auzar",
"avaak",
"avaam",
"avadh",
"avdhi",
"avgat",
"avgun",
"avroh",
"avsad",
"avsan",
"avsar",
"avtar",
"avval",
"awaak",
"awaam",
"awara",
"ayush",
"azaad",
"azaan",
"azadi",
"azeem",
"azeez",
"baaba",
"baabu",
"baach",
"baadh",
"baadi",
"baagh",
"baagi",
"baago",
"baahe",
"baaho",
"baais",
"baaja",
"baaje",
"baaji",
"baaju",
"baaki",
"baali",
"baalu",
"baang",
"baanh",
"baans",
"baapu",
"baare",
"baari",
"baasi",
"baate",
"baati",
"baato",
"baatu",
"baaye",
"baazi",
"babli",
"bablu",
"babua",
"babul",
"bacha",
"bache",
"bachi",
"bacho",
"badaa",
"badae",
"badai",
"badal",
"badan",
"badar",
"badat",
"badbu",
"badee",
"badha",
"badhe",
"badhi",
"badho",
"badki",
"badla",
"badle",
"badli",
"badlo",
"badlu",
"badna",
"badne",
"badra",
"badte",
"badti",
"bafle",
"bagal",
"bagan",
"bagar",
"baggi",
"baghi",
"bagia",
"bagle",
"bahae",
"bahai",
"bahak",
"bahal",
"bahan",
"bahao",
"bahar",
"bahas",
"bahau",
"bahav",
"bahen",
"bahia",
"bahka",
"bahke",
"bahki",
"bahna",
"bahne",
"bahno",
"bahra",
"bahre",
"bahri",
"bahta",
"bahte",
"bahti",
"bahut",
"bailo",
"baira",
"baire",
"bairi",
"bairo",
"baith",
"bajaa",
"bajaj",
"bajay",
"bajne",
"bajoo",
"bajra",
"bajta",
"bajte",
"bajti",
"bajva",
"bajwa",
"bakar",
"bakka",
"bakke",
"bakki",
"bakna",
"bakne",
"bakra",
"bakre",
"bakri",
"baksa",
"bakse",
"baksh",
"bakta",
"bakte",
"bakti",
"balae",
"balak",
"balam",
"balat",
"balia",
"balig",
"balki",
"balla",
"balle",
"balli",
"ballo",
"balma",
"balti",
"bambu",
"banai",
"banav",
"banda",
"bande",
"bandh",
"bandi",
"bando",
"bania",
"banjh",
"banjo",
"banke",
"banki",
"banno",
"bansi",
"banta",
"bante",
"banti",
"banva",
"banve",
"barah",
"baras",
"barat",
"baree",
"barfi",
"barik",
"barpa",
"barpe",
"barsa",
"barse",
"barsi",
"barso",
"barsu",
"barud",
"basae",
"basar",
"basee",
"basna",
"basne",
"bassi",
"basta",
"baste",
"basti",
"batae",
"batai",
"batak",
"batan",
"batao",
"batar",
"batau",
"bater",
"batik",
"batla",
"batne",
"baton",
"batoo",
"bator",
"batta",
"batti",
"batua",
"batuk",
"bauna",
"baune",
"bauni",
"bavan",
"bavdi",
"bavli",
"bawal",
"bayan",
"bayar",
"bazar",
"bazid",
"bebak",
"bebas",
"bebsi",
"becha",
"beche",
"bechi",
"becho",
"bedag",
"bedia",
"bedil",
"beech",
"beeda",
"beedi",
"beeji",
"beeka",
"beema",
"beeme",
"beemo",
"beena",
"beeta",
"beete",
"beeti",
"begam",
"begar",
"begum",
"behad",
"behal",
"bejan",
"bejod",
"bekal",
"bekar",
"bekas",
"belan",
"belna",
"beman",
"benam",
"bench",
"besan",
"besar",
"besur",
"betaa",
"betal",
"betia",
"betuk",
"bevaa",
"bevai",
"bevda",
"bewaa",
"bewda",
"bezan",
"bezar",
"bhaad",
"bhaag",
"bhaai",
"bhaal",
"bhaan",
"bhaap",
"bhaar",
"bhaat",
"bhaav",
"bhaay",
"bhabi",
"bhada",
"bhade",
"bhado",
"bhaga",
"bhagi",
"bhago",
"bhakt",
"bhala",
"bhale",
"bhali",
"bhalu",
"bhand",
"bhang",
"bhanu",
"bhara",
"bhare",
"bhari",
"bharo",
"bhasm",
"bhata",
"bhati",
"bhaya",
"bheda",
"bhedh",
"bhedi",
"bhedu",
"bheed",
"bheeg",
"bheej",
"bheek",
"bheel",
"bheem",
"bheja",
"bheji",
"bhejo",
"bhens",
"bheru",
"bhida",
"bhide",
"bhidh",
"bhidi",
"bhido",
"bhidu",
"bhiga",
"bhige",
"bhigi",
"bhigo",
"bhije",
"bhikh",
"bhinn",
"bhiru",
"bhoga",
"bhoge",
"bhogi",
"bhogo",
"bhogu",
"bhoji",
"bhoka",
"bhoke",
"bhoki",
"bhola",
"bhole",
"bholi",
"bhonk",
"bhool",
"bhoon",
"bhoot",
"bhram",
"bhrun",
"bhuja",
"bhuka",
"bhuke",
"bhukh",
"bhula",
"bhule",
"bhuli",
"bhulo",
"bhulu",
"bhumi",
"bhuna",
"bhura",
"bhure",
"bhuri",
"bhuro",
"bhusa",
"bhuse",
"bichh",
"bidai",
"bidak",
"bidke",
"bidki",
"bigad",
"bigar",
"bigda",
"bigde",
"bigdi",
"bigdo",
"bigha",
"bihad",
"bihar",
"bijak",
"bijar",
"bijli",
"bikai",
"bikao",
"bikau",
"bikna",
"bikne",
"bikri",
"billa",
"billi",
"billu",
"bimar",
"binay",
"bindh",
"bindi",
"bindu",
"binna",
"binta",
"binte",
"binti",
"biraj",
"birva",
"birve",
"bisra",
"bisre",
"bisvi",
"bitao",
"bitar",
"bitha",
"bitia",
"bitta",
"bitte",
"bitti",
"bittu",
"bitwa",
"biwai",
"black",
"blade",
"board",
"bodhi",
"bohra",
"bohre",
"bolee",
"bolen",
"bolia",
"bolie",
"bolna",
"bolne",
"bolni",
"bolta",
"bolte",
"bolti",
"boojh",
"boond",
"boota",
"booti",
"botal",
"botee",
"botia",
"boyee",
"brahm",
"brake",
"bread",
"brush",
"buaji",
"buchi",
"buddh",
"budha",
"budhe",
"budhi",
"buggy",
"buhar",
"bujha",
"bujhe",
"bujhi",
"bujho",
"bulae",
"bulai",
"bulao",
"bulau",
"bulva",
"bulwa",
"bunai",
"bunde",
"bundh",
"bundi",
"bundo",
"bunee",
"bunna",
"bunte",
"buraa",
"burai",
"buree",
"burka",
"burqa",
"byaah",
"cabin",
"catch",
"chaah",
"chaak",
"chaal",
"chaap",
"chaar",
"chaat",
"chaav",
"chaay",
"chaba",
"chabi",
"chada",
"chadh",
"chadi",
"chaha",
"chahe",
"chahu",
"chain",
"chair",
"chait",
"chakh",
"chaku",
"chala",
"chale",
"chali",
"chalk",
"chalo",
"chalu",
"chana",
"chand",
"chane",
"chant",
"chara",
"chare",
"chari",
"charm",
"charo",
"charu",
"chasp",
"chata",
"chate",
"chati",
"chato",
"chatu",
"chawl",
"cheed",
"cheej",
"cheel",
"cheen",
"cheer",
"cheez",
"chela",
"chele",
"cheli",
"chelo",
"cheta",
"cheti",
"chhah",
"chhak",
"chhal",
"chham",
"chhan",
"chhap",
"chhat",
"chhed",
"chheh",
"chhid",
"chhik",
"chhil",
"chhin",
"chhip",
"chhod",
"chhok",
"chhoo",
"chhor",
"chhua",
"chhue",
"chhui",
"chhuk",
"chhun",
"chhuo",
"chhup",
"chhut",
"chidh",
"chidi",
"chikh",
"chiku",
"chila",
"chile",
"chill",
"chinh",
"chini",
"chita",
"chitt",
"choga",
"choge",
"chois",
"choka",
"choke",
"choki",
"chola",
"chole",
"choli",
"chonk",
"chook",
"chool",
"choom",
"choor",
"choos",
"chori",
"chosa",
"choti",
"chowk",
"chubh",
"chuga",
"chuge",
"chuha",
"chuhe",
"chuhi",
"chuje",
"chuka",
"chuke",
"chuki",
"chuma",
"chume",
"chumi",
"chuna",
"chune",
"chuni",
"chuno",
"chunt",
"chura",
"churi",
"chusa",
"chuse",
"chusi",
"chust",
"chuza",
"chuze",
"cigar",
"civil",
"class",
"clerk",
"cobra",
"comma",
"court",
"cover",
"covid",
"crane",
"cream",
"crore",
"cycle",
"daadi",
"daaga",
"daage",
"daagi",
"daaka",
"daaku",
"daala",
"daale",
"daali",
"daalo",
"daami",
"daana",
"daani",
"daant",
"daanv",
"daaru",
"daasi",
"daata",
"daava",
"daaye",
"dabai",
"dabao",
"dabav",
"dabba",
"dabbe",
"dabbu",
"dabna",
"dabne",
"dabra",
"dabre",
"dadba",
"dadbe",
"dadbo",
"daddu",
"daddy",
"dadur",
"dafan",
"dafna",
"dagar",
"dagna",
"dagne",
"dagni",
"dahad",
"dahai",
"dahak",
"dahal",
"dahan",
"dahee",
"dahej",
"dahka",
"dahla",
"dahli",
"dakia",
"dakin",
"daksh",
"dalal",
"dalan",
"dalia",
"dalil",
"dalit",
"dalna",
"dalne",
"dalni",
"dalte",
"damak",
"daman",
"damdi",
"damka",
"damni",
"damru",
"danav",
"dance",
"danda",
"dande",
"dandi",
"danga",
"dange",
"dango",
"danka",
"danke",
"dansh",
"daraj",
"darak",
"darar",
"daras",
"daraz",
"daree",
"daren",
"daria",
"darja",
"darje",
"darji",
"darna",
"darne",
"darte",
"darti",
"darun",
"darza",
"darze",
"darzi",
"dasee",
"dasha",
"dasht",
"dasna",
"dasne",
"dasta",
"daste",
"dasto",
"dasvi",
"dasyu",
"datna",
"datun",
"dauda",
"daude",
"daudi",
"daura",
"daure",
"davai",
"dawai",
"dawat",
"dayar",
"deedi",
"deena",
"deepa",
"deeya",
"degaa",
"degee",
"dehat",
"dehik",
"dehla",
"dehra",
"dehri",
"dejaa",
"dekar",
"dekha",
"dekhi",
"dekho",
"dekhu",
"denaa",
"denge",
"deree",
"deshi",
"desho",
"devan",
"devar",
"devee",
"devia",
"devik",
"devta",
"dewan",
"dewar",
"dhaad",
"dhaae",
"dhaai",
"dhaak",
"dhaal",
"dhaam",
"dhaan",
"dhaar",
"dhaga",
"dhage",
"dhaka",
"dhake",
"dhaki",
"dhako",
"dhaku",
"dhala",
"dhale",
"dhali",
"dhana",
"dhane",
"dhang",
"dhani",
"dhara",
"dhare",
"dhari",
"dharm",
"dharo",
"dhata",
"dhatu",
"dhava",
"dhaye",
"dheda",
"dheel",
"dheer",
"dhela",
"dhele",
"dhenu",
"dhila",
"dhile",
"dhili",
"dhima",
"dhime",
"dhimi",
"dhire",
"dhobi",
"dhoka",
"dhoke",
"dholi",
"dhona",
"dhone",
"dhong",
"dhoni",
"dhons",
"dhool",
"dhoom",
"dhoop",
"dhoot",
"dhota",
"dhote",
"dhoti",
"dhoya",
"dhrit",
"dhruv",
"dhuaa",
"dhuan",
"dhula",
"dhule",
"dhuli",
"dhuna",
"dhund",
"dhune",
"dhuni",
"dhura",
"dhuri",
"dhurt",
"dhwaj",
"dhyan",
"dhyey",
"dibba",
"dibbe",
"dibbi",
"digar",
"dikha",
"dikhi",
"dikho",
"dilae",
"dilai",
"dilao",
"dilau",
"diler",
"dilip",
"dimag",
"dimak",
"dipak",
"dipti",
"disha",
"divan",
"divar",
"divas",
"divik",
"divya",
"diwal",
"diwan",
"diwar",
"diwas",
"dixit",
"diyaa",
"dodna",
"dogle",
"dohan",
"dohna",
"dohra",
"dohre",
"dohri",
"dokri",
"dolee",
"dolia",
"dolna",
"dolte",
"dooba",
"doobe",
"doobi",
"doodh",
"dooja",
"dooje",
"dooji",
"dooni",
"doori",
"doree",
"doria",
"doshi",
"dosti",
"dosto",
"drama",
"dravy",
"dress",
"drink",
"drive",
"drohi",
"drona",
"drone",
"dubak",
"dubbe",
"dubka",
"dubke",
"dubki",
"dubla",
"duble",
"dubli",
"dubne",
"dugne",
"dugni",
"duhai",
"duhra",
"dujaa",
"dujee",
"dukan",
"dukhe",
"dukhi",
"dukho",
"dukka",
"dukke",
"dukki",
"dulao",
"dular",
"dulau",
"dulha",
"dulhe",
"dulte",
"dulti",
"dunde",
"dunga",
"dungi",
"dunia",
"duree",
"durga",
"duria",
"dusht",
"dusra",
"dusre",
"dusri",
"dusro",
"dusvi",
"dvaar",
"dvesh",
"dwaar",
"dwait",
"dwara",
"dware",
"dweep",
"dwesh",
"eesha",
"ekadh",
"ekaek",
"ekaki",
"ekant",
"elaan",
"etraj",
"etraz",
"faada",
"faade",
"faadi",
"faadu",
"faaka",
"faake",
"faaki",
"faako",
"faand",
"faank",
"fabta",
"fabte",
"fabti",
"fadak",
"fafak",
"fafda",
"fagun",
"fahra",
"fahre",
"faila",
"faili",
"fakir",
"falak",
"falan",
"falee",
"falna",
"falte",
"faltu",
"fanda",
"fande",
"fansa",
"fanse",
"fansi",
"fanta",
"fanus",
"farak",
"farar",
"fareb",
"farid",
"farig",
"farji",
"farsa",
"farsh",
"farsi",
"farzi",
"fasai",
"fasal",
"fatah",
"fateh",
"fatne",
"fattu",
"fatwa",
"fauji",
"favda",
"fayda",
"fayde",
"feeka",
"feeke",
"feeki",
"feeta",
"fefda",
"fefde",
"fekna",
"fekne",
"fekni",
"fekta",
"fekti",
"felna",
"fenka",
"fenke",
"fenki",
"fenko",
"fenku",
"fenta",
"fente",
"fenti",
"fever",
"fijul",
"fikar",
"fikra",
"fikre",
"fikta",
"fikte",
"fikti",
"final",
"firak",
"firaq",
"firki",
"firni",
"firta",
"firte",
"firti",
"fitur",
"fodna",
"fodte",
"fokat",
"foonk",
"footi",
"frock",
"fudak",
"fuhad",
"fuhar",
"fukna",
"fukne",
"fukre",
"fukta",
"fukte",
"fukti",
"fulka",
"fulke",
"fulki",
"fulla",
"fulle",
"fulna",
"fulne",
"furti",
"futaa",
"futee",
"futna",
"futne",
"gaadi",
"gaadu",
"gaaen",
"gaahe",
"gaaje",
"gaali",
"gaalo",
"gaana",
"gaane",
"gaanv",
"gaata",
"gaate",
"gaaya",
"gaaye",
"gaban",
"gabru",
"gadar",
"gadda",
"gadde",
"gaddi",
"gaddo",
"gadee",
"gadha",
"gadhe",
"gadhi",
"gadhu",
"gadit",
"gadna",
"gadne",
"gagan",
"gagar",
"gagri",
"gahal",
"gahan",
"gahma",
"gahmi",
"gahna",
"gahne",
"gahra",
"gahre",
"gahri",
"gajab",
"gajak",
"gajal",
"gajar",
"gajni",
"gajra",
"gajre",
"galaa",
"galae",
"galat",
"galee",
"galia",
"galij",
"galla",
"galle",
"galne",
"galoj",
"galta",
"galte",
"galti",
"gamak",
"gaman",
"gamla",
"gamle",
"ganak",
"ganda",
"gande",
"gandh",
"gandi",
"ganga",
"ganit",
"ganja",
"ganji",
"ganju",
"ganna",
"ganne",
"ganno",
"gappa",
"gappe",
"garaj",
"garam",
"garba",
"garbe",
"garbo",
"gardi",
"gargi",
"garia",
"garib",
"garje",
"garji",
"garju",
"garmi",
"garud",
"garun",
"garur",
"garva",
"gasht",
"gatak",
"gatka",
"gatke",
"gatki",
"gattu",
"gauri",
"gavah",
"gavai",
"gawah",
"gawar",
"gayaa",
"gayab",
"gayak",
"gayan",
"gayki",
"gazab",
"gazak",
"gazal",
"geela",
"geele",
"geeta",
"gehra",
"genda",
"gerua",
"ghaag",
"ghaas",
"ghaat",
"ghada",
"ghade",
"ghadi",
"ghagh",
"ghana",
"ghane",
"ghani",
"ghata",
"ghate",
"ghati",
"ghera",
"ghere",
"gheri",
"ghero",
"ghisa",
"ghise",
"ghisi",
"ghiso",
"ghisu",
"ghiya",
"ghiye",
"ghoda",
"ghode",
"ghodi",
"ghola",
"gholi",
"gholo",
"ghont",
"ghoom",
"ghoor",
"ghoos",
"ghota",
"ghote",
"ghoti",
"ghoto",
"ghrit",
"ghula",
"ghule",
"ghuli",
"ghulo",
"ghuma",
"ghume",
"ghumi",
"ghunt",
"ghura",
"ghure",
"ghuri",
"ghuro",
"ghusa",
"ghuse",
"ghuta",
"ghute",
"ghuti",
"ghuto",
"giani",
"giddh",
"gilee",
"gilki",
"gilli",
"gilly",
"ginna",
"ginne",
"ginni",
"ginti",
"girah",
"girai",
"girao",
"girau",
"girja",
"girna",
"girne",
"giroh",
"girta",
"girti",
"girvi",
"gitti",
"glani",
"glass",
"glove",
"gobar",
"gobhi",
"godam",
"godee",
"godna",
"gohar",
"gokul",
"golaa",
"golai",
"golee",
"golia",
"gondh",
"gooda",
"goonj",
"gopal",
"gopee",
"gopia",
"gopio",
"gopur",
"goree",
"goria",
"gosht",
"gotra",
"graam",
"graas",
"graha",
"green",
"griha",
"group",
"gubar",
"gudaa",
"gudda",
"gudde",
"guddi",
"guddu",
"gudia",
"gudup",
"guess",
"guhar",
"gujar",
"gulab",
"gulal",
"gulam",
"gulel",
"gulla",
"gulle",
"gulli",
"gully",
"guman",
"gunah",
"gunda",
"gunde",
"gundh",
"gunee",
"gunga",
"gunja",
"gunje",
"gunji",
"gunna",
"gupta",
"gurda",
"gurde",
"gurej",
"gusal",
"gussa",
"gutka",
"gutke",
"guzar",
"guzra",
"guzre",
"guzri",
"gwaar",
"gwala",
"gwale",
"gyaan",
"gyani",
"haala",
"haami",
"haanf",
"haani",
"haank",
"haara",
"haare",
"haari",
"haath",
"haavi",
"haaye",
"habib",
"haddi",
"haden",
"hadka",
"hadsa",
"hadse",
"hafiz",
"hafta",
"hafte",
"hafto",
"hajam",
"hajma",
"hakim",
"hakka",
"hakke",
"hakki",
"halak",
"halal",
"halat",
"haldi",
"halia",
"halka",
"halke",
"halki",
"halla",
"halle",
"halva",
"halwa",
"hamam",
"hamen",
"hamla",
"hamle",
"hamne",
"hamse",
"hanan",
"handi",
"hanka",
"hansa",
"hanse",
"hansi",
"hanso",
"hansu",
"hanta",
"haqim",
"haraa",
"harae",
"harai",
"haram",
"haran",
"harau",
"haree",
"harek",
"harem",
"harit",
"harsh",
"harta",
"harti",
"haruf",
"hasai",
"hasht",
"hasil",
"hasin",
"hasli",
"hasta",
"haste",
"hasti",
"hasya",
"hatai",
"hatak",
"hatao",
"hathi",
"hatho",
"hatim",
"hatke",
"hatne",
"hatta",
"hatte",
"hatti",
"hatva",
"hatya",
"haule",
"havai",
"havan",
"havas",
"havva",
"hawai",
"hayat",
"hazar",
"hazir",
"hazri",
"hazur",
"heena",
"heera",
"heere",
"heeri",
"hekdi",
"hello",
"hijab",
"hijja",
"hijje",
"hijra",
"hilae",
"hilai",
"hilao",
"hilau",
"hilee",
"hilna",
"hilne",
"hilni",
"hilta",
"hilte",
"hilti",
"hindi",
"hindu",
"hinsa",
"hirak",
"hiran",
"hirni",
"hisab",
"hissa",
"hisse",
"hogaa",
"hogee",
"honge",
"hongi",
"honth",
"hosla",
"hotaa",
"hotel",
"hriti",
"hudak",
"hukka",
"hukum",
"hulas",
"hulia",
"hulla",
"humen",
"humko",
"humne",
"hunar",
"idhar",
"iflas",
"ijafa",
"ikkis",
"ikrar",
"iktis",
"ilaaj",
"ilahi",
"ilaka",
"ilake",
"ilako",
"imaan",
"imlee",
"india",
"indra",
"ingit",
"inhen",
"inhin",
"inkar",
"insaa",
"insaf",
"insan",
"iqbal",
"irada",
"irade",
"irado",
"irani",
"iraqi",
"isaai",
"iskee",
"islam",
"islie",
"ispat",
"istri",
"itnaa",
"itwar",
"izzat",
"jaada",
"jaade",
"jaadi",
"jaado",
"jaadu",
"jaaen",
"jaaga",
"jaagi",
"jaago",
"jaale",
"jaali",
"jaalo",
"jaama",
"jaana",
"jaane",
"jaani",
"jaano",
"jaanu",
"jaapa",
"jaape",
"jaari",
"jaata",
"jaate",
"jaati",
"jaaya",
"jaaye",
"jabda",
"jabki",
"jabse",
"jadee",
"jadie",
"jadna",
"jadne",
"jadni",
"jadoo",
"jadta",
"jadti",
"jaega",
"jagah",
"jagai",
"jagan",
"jagao",
"jagat",
"jagee",
"jagir",
"jagna",
"jagte",
"jagti",
"jahaj",
"jahan",
"jahil",
"jahir",
"jaika",
"jaili",
"jailo",
"jaini",
"jaisa",
"jaise",
"jaisi",
"jaiso",
"jakad",
"jakdi",
"jalad",
"jalae",
"jalai",
"jalaj",
"jalal",
"jalan",
"jalao",
"jaldi",
"jalil",
"jalim",
"jalna",
"jalne",
"jalsa",
"jalse",
"jalta",
"jalte",
"jalti",
"jamae",
"jamai",
"jamal",
"jaman",
"jamat",
"jambu",
"jamna",
"jamne",
"jamta",
"jamte",
"jamti",
"jamun",
"janak",
"janam",
"janan",
"janch",
"janeu",
"janit",
"janki",
"janmi",
"janni",
"janoi",
"janta",
"jante",
"jantu",
"janum",
"janvi",
"japna",
"japne",
"japta",
"japte",
"jarda",
"jaree",
"jaria",
"jarie",
"jarur",
"jashn",
"jataa",
"jatae",
"jatak",
"jatan",
"jatao",
"jatil",
"jatin",
"jatni",
"javan",
"javed",
"jawab",
"jawan",
"jayka",
"jazba",
"jeebh",
"jeeja",
"jeena",
"jeene",
"jeera",
"jeern",
"jeeta",
"jeete",
"jeeti",
"jehad",
"jelar",
"jevar",
"jhaad",
"jhaag",
"jhaar",
"jhadi",
"jhadu",
"jhand",
"jhann",
"jhara",
"jheel",
"jhela",
"jhele",
"jheli",
"jhelo",
"jhelu",
"jhenp",
"jhola",
"jhole",
"jholi",
"jhool",
"jhoom",
"jhoot",
"jhuka",
"jhuke",
"jhuki",
"jhuko",
"jhula",
"jhule",
"jhuli",
"jhulo",
"jhuma",
"jhume",
"jhumi",
"jhund",
"jhute",
"jhuth",
"jibah",
"jiega",
"jiegi",
"jigar",
"jigra",
"jihad",
"jikra",
"jilao",
"jimma",
"jimna",
"jimne",
"jinda",
"jinhe",
"jinka",
"jinke",
"jinko",
"jiogo",
"jirah",
"jiska",
"jiske",
"jiski",
"jisne",
"jitau",
"jiten",
"jitna",
"jitne",
"jitni",
"jitno",
"jivan",
"jivat",
"jivha",
"jivit",
"jivni",
"jiyaa",
"jnaan",
"jnani",
"jnyan",
"jodee",
"jodia",
"jodna",
"jodne",
"jodon",
"jogan",
"jogee",
"johar",
"johne",
"johri",
"joker",
"jokha",
"jooda",
"joohi",
"joojh",
"joona",
"jooni",
"joota",
"joote",
"jooti",
"joroo",
"juari",
"judaa",
"judai",
"judee",
"juden",
"judge",
"judna",
"judne",
"judte",
"judva",
"judwa",
"judwe",
"jugad",
"jugal",
"jugat",
"jugnu",
"juhee",
"jujha",
"jujhe",
"jukam",
"julab",
"julai",
"julus",
"jumla",
"jumle",
"jumma",
"jumna",
"junta",
"jurab",
"jurmi",
"jutai",
"jutha",
"juthe",
"juthi",
"jutna",
"jwaar",
"jwala",
"jyada",
"jyoti",
"kaaba",
"kaabe",
"kaabu",
"kaada",
"kaafi",
"kaahe",
"kaaka",
"kaaki",
"kaala",
"kaale",
"kaali",
"kaana",
"kaand",
"kaanp",
"kaant",
"kaare",
"kaash",
"kaata",
"kaate",
"kaati",
"kaatu",
"kaaya",
"kabab",
"kabad",
"kabhi",
"kabil",
"kabir",
"kabka",
"kabki",
"kabra",
"kabre",
"kabro",
"kabse",
"kabul",
"kabza",
"kabzi",
"kacha",
"kadaa",
"kadai",
"kadak",
"kadam",
"kadar",
"kaddu",
"kadee",
"kadha",
"kadhe",
"kadhi",
"kadka",
"kadke",
"kadki",
"kadua",
"kadue",
"kadva",
"kadve",
"kadvi",
"kafan",
"kafia",
"kafir",
"kagaz",
"kahaa",
"kahar",
"kahee",
"kahie",
"kahin",
"kahna",
"kahne",
"kahni",
"kahta",
"kahte",
"kahti",
"kaifi",
"kaisa",
"kaise",
"kaisi",
"kajal",
"kajol",
"kakdi",
"kaksh",
"kalae",
"kalah",
"kalam",
"kalap",
"kalee",
"kalia",
"kalin",
"kallu",
"kalma",
"kalme",
"kamae",
"kamai",
"kamal",
"kaman",
"kamar",
"kamee",
"kamia",
"kamiz",
"kamla",
"kamna",
"kamra",
"kamre",
"kamuk",
"kanak",
"kanda",
"kande",
"kanha",
"kanij",
"kaniz",
"kanji",
"kanni",
"kanta",
"kante",
"kanti",
"kanun",
"kanya",
"kapal",
"kapas",
"kapat",
"kapda",
"kapde",
"kapdo",
"kapil",
"kapol",
"kapra",
"kapti",
"kapur",
"kaput",
"karae",
"karah",
"karai",
"karal",
"karam",
"karan",
"karao",
"karar",
"karee",
"karen",
"karib",
"karma",
"karmi",
"karna",
"karne",
"karni",
"karod",
"karta",
"karte",
"karti",
"karun",
"karva",
"karza",
"kasai",
"kasak",
"kasam",
"kasar",
"kasba",
"kasbe",
"kasee",
"kashi",
"kasht",
"kaske",
"kasme",
"kasti",
"kasur",
"katai",
"katal",
"katar",
"katha",
"kathi",
"katil",
"katli",
"katna",
"katne",
"katni",
"katra",
"katta",
"katte",
"katti",
"kaudi",
"kavya",
"kayal",
"kayam",
"kayas",
"kayda",
"kayde",
"kedar",
"keeda",
"keede",
"keele",
"keelo",
"keema",
"kesar",
"kesri",
"ketan",
"ketki",
"keval",
"kevat",
"kevda",
"khaad",
"khaai",
"khaaj",
"khaak",
"khaal",
"khaan",
"khaao",
"khaap",
"khaar",
"khaas",
"khaat",
"khada",
"khadd",
"khade",
"khadi",
"khafa",
"khair",
"khaja",
"khaka",
"khake",
"khali",
"khami",
"khana",
"khand",
"khane",
"khara",
"khare",
"khari",
"khasi",
"khata",
"khate",
"khati",
"khatm",
"khato",
"khatt",
"khatu",
"khauf",
"khaul",
"kheej",
"kheel",
"kheer",
"khela",
"khele",
"kheli",
"khelo",
"khelu",
"khema",
"khemo",
"khena",
"khene",
"kheni",
"kheta",
"khete",
"kheti",
"kheto",
"khila",
"khile",
"khili",
"khilu",
"khinn",
"khisa",
"khise",
"khist",
"khiza",
"khoda",
"khode",
"khodi",
"khodo",
"khodu",
"khoja",
"khoje",
"khoji",
"khojo",
"khoka",
"khoke",
"khola",
"khole",
"kholi",
"kholo",
"kholu",
"khona",
"khone",
"khoni",
"khoob",
"khoon",
"khota",
"khote",
"khoti",
"khoya",
"khoye",
"khubi",
"khuda",
"khude",
"khudi",
"khuja",
"khula",
"khule",
"khuli",
"khuni",
"khurd",
"khuro",
"khush",
"khuta",
"khute",
"khwab",
"khyal",
"khyat",
"kidhe",
"kimat",
"kimti",
"kinhi",
"kintu",
"kiran",
"kirne",
"kirno",
"kirti",
"kisan",
"kisee",
"kiska",
"kiske",
"kiski",
"kisme",
"kismo",
"kisna",
"kisne",
"kissa",
"kisse",
"kitab",
"kitna",
"kitne",
"kitni",
"kitno",
"kivad",
"kiyaa",
"klant",
"klesh",
"kodaa",
"kodee",
"kodha",
"kodhe",
"kodhi",
"kohni",
"kohra",
"kohre",
"kolhu",
"komal",
"konaa",
"kondh",
"kooch",
"kooda",
"koode",
"koodi",
"koodo",
"koodu",
"koota",
"koote",
"kooti",
"kopal",
"kopin",
"kople",
"kopra",
"kotha",
"kothe",
"kothi",
"kovid",
"koyal",
"koyla",
"koyle",
"krina",
"kripa",
"kriti",
"kriya",
"krodh",
"kroor",
"krund",
"kshan",
"kshat",
"kshay",
"kshep",
"kuaan",
"kubad",
"kuber",
"kuche",
"kuchh",
"kuchi",
"kudal",
"kudee",
"kudha",
"kudki",
"kudna",
"kudta",
"kudte",
"kudti",
"kulfi",
"kulha",
"kulhe",
"kulin",
"kulla",
"kulta",
"kumar",
"kumbh",
"kumud",
"kunal",
"kunba",
"kunda",
"kundi",
"kunji",
"kupit",
"kuppa",
"kuran",
"kured",
"kurki",
"kursi",
"kurta",
"kurte",
"kurti",
"kurup",
"kusum",
"kutai",
"kutar",
"kutch",
"kutia",
"kutil",
"kutir",
"kutra",
"kutta",
"kutte",
"kutti",
"kutto",
"kyari",
"kyoon",
"laabh",
"laadi",
"laage",
"laagi",
"laagu",
"laajo",
"laakh",
"laale",
"laali",
"laalu",
"laana",
"laane",
"laani",
"laata",
"laate",
"laato",
"laaya",
"laaye",
"laayi",
"labdh",
"ladai",
"ladak",
"ladau",
"laddu",
"ladee",
"ladha",
"ladie",
"ladka",
"ladke",
"ladki",
"ladla",
"ladle",
"ladli",
"ladna",
"ladne",
"ladta",
"ladte",
"ladti",
"ladva",
"ladwa",
"laega",
"lafde",
"lagai",
"lagan",
"lagat",
"lagee",
"laghu",
"lagke",
"lagna",
"lagne",
"lagni",
"lagoo",
"lagta",
"lagte",
"lagti",
"lagva",
"lagwa",
"lahak",
"lahar",
"lahja",
"lahje",
"lahoo",
"lahre",
"lahro",
"laila",
"lajja",
"lakdi",
"lakho",
"lakir",
"lalak",
"lalan",
"lalit",
"lalla",
"lalli",
"lallu",
"lalsa",
"lamba",
"lambe",
"lambi",
"lambu",
"lamha",
"lamhe",
"lanka",
"lapak",
"lapat",
"lapet",
"lapke",
"lapsi",
"lapta",
"lapte",
"larte",
"lassi",
"latak",
"lathi",
"latka",
"latke",
"latki",
"latku",
"latta",
"latth",
"lattu",
"lauki",
"laung",
"lauta",
"laute",
"lauti",
"lauto",
"lautu",
"lavan",
"laxmi",
"layak",
"leela",
"leena",
"leepa",
"legaa",
"legee",
"lehar",
"lejaa",
"lekar",
"lekha",
"lekin",
"lenaa",
"lenee",
"lenge",
"lepna",
"letaa",
"letna",
"lette",
"libas",
"lichi",
"light",
"lihaf",
"lihaj",
"lihas",
"likha",
"likhe",
"likhi",
"likho",
"linga",
"lipai",
"lipat",
"lipik",
"lipna",
"lipsa",
"lipta",
"lipte",
"lipti",
"litti",
"lobhi",
"locha",
"lofar",
"lofer",
"logon",
"lohri",
"lokee",
"lomdi",
"loota",
"loote",
"looti",
"looto",
"lotna",
"lotte",
"lubha",
"luchi",
"ludak",
"ludki",
"lugai",
"luhar",
"lukka",
"lullu",
"lunch",
"lunga",
"lungi",
"lutai",
"lutia",
"lutna",
"maada",
"maafi",
"maagh",
"maahi",
"maaji",
"maala",
"maale",
"maali",
"maama",
"maami",
"maana",
"maand",
"maane",
"maang",
"maani",
"maanj",
"maano",
"maanu",
"maara",
"maare",
"maarg",
"maari",
"maaro",
"maasi",
"maata",
"maati",
"maaya",
"macha",
"mache",
"machi",
"madad",
"madam",
"madan",
"madhu",
"madir",
"madna",
"madne",
"madti",
"magaj",
"magan",
"magar",
"magaz",
"magga",
"magge",
"maggi",
"maggu",
"magna",
"mahaj",
"mahak",
"mahal",
"mahan",
"mahek",
"mahim",
"mahin",
"mahir",
"mahka",
"mahke",
"mahki",
"mahol",
"maida",
"maide",
"maika",
"maila",
"maile",
"maili",
"maina",
"maine",
"majak",
"majee",
"majhi",
"majma",
"majnu",
"major",
"makam",
"makan",
"makar",
"makdi",
"makka",
"makke",
"makki",
"makri",
"makta",
"makul",
"malai",
"malal",
"malay",
"malba",
"malie",
"malik",
"malin",
"malna",
"malne",
"malni",
"malta",
"malte",
"malti",
"malum",
"malwa",
"malwi",
"mamla",
"mamle",
"mamta",
"manad",
"manai",
"manak",
"manan",
"manas",
"manav",
"manch",
"manda",
"mande",
"mandi",
"manga",
"mange",
"mangi",
"mango",
"mania",
"manik",
"manit",
"manja",
"manju",
"manka",
"manke",
"manko",
"manna",
"manoj",
"mansi",
"manuj",
"manya",
"maqta",
"marak",
"maran",
"march",
"maren",
"margi",
"mariz",
"marji",
"marke",
"marna",
"marne",
"marod",
"marta",
"marte",
"marti",
"marut",
"marzi",
"masal",
"masha",
"masik",
"maska",
"masla",
"masle",
"masli",
"maslo",
"masos",
"masti",
"masum",
"masur",
"matak",
"matal",
"matam",
"matar",
"matha",
"mathe",
"mathi",
"matho",
"matka",
"matke",
"matki",
"matla",
"matli",
"matra",
"matri",
"mauja",
"mauje",
"mauji",
"maujo",
"mauju",
"mauka",
"mauke",
"mauni",
"mausa",
"mausi",
"mawad",
"mayka",
"mazak",
"mazaq",
"mazar",
"medha",
"medhi",
"meech",
"meena",
"meenu",
"meera",
"meeta",
"megha",
"mehar",
"mehul",
"memna",
"memne",
"meraa",
"meree",
"methi",
"metro",
"mewad",
"mewar",
"michu",
"mihir",
"mijaj",
"mijaz",
"milae",
"milai",
"milan",
"milao",
"milap",
"milee",
"milie",
"milna",
"milne",
"milni",
"milta",
"milte",
"milti",
"mimia",
"minal",
"minar",
"minoo",
"mirch",
"mirgi",
"mirza",
"misal",
"misra",
"mitai",
"mitao",
"mitha",
"mitli",
"mitna",
"mitne",
"mitra",
"mitro",
"mitta",
"mitte",
"mitti",
"mitva",
"mitwa",
"miyad",
"mizaz",
"mochi",
"modak",
"modna",
"modte",
"mogar",
"mogra",
"mogre",
"mohak",
"mohan",
"mohar",
"mohit",
"mohna",
"mohne",
"mohni",
"mohra",
"mohre",
"mohro",
"mohte",
"moksh",
"molik",
"mooli",
"moong",
"moonj",
"morna",
"morni",
"motee",
"motoo",
"motor",
"movie",
"mridu",
"muchi",
"mudda",
"mudde",
"muden",
"mudit",
"mudna",
"mudne",
"mudra",
"mudte",
"mugal",
"mugga",
"mugge",
"muggu",
"muhim",
"mujhe",
"mujra",
"mukam",
"mukar",
"mukka",
"mukke",
"mukki",
"mukta",
"mukti",
"mukul",
"mukut",
"mulla",
"mulya",
"mummy",
"munch",
"munda",
"munde",
"mundi",
"munga",
"munge",
"munia",
"munim",
"munna",
"munne",
"munni",
"murad",
"murat",
"murda",
"murde",
"murga",
"murge",
"murgi",
"murid",
"murkh",
"murli",
"murti",
"musal",
"muska",
"musla",
"musle",
"musti",
"mutra",
"naach",
"naada",
"naadi",
"naaga",
"naala",
"naale",
"naali",
"naami",
"naana",
"naani",
"naanv",
"naapa",
"naape",
"naapi",
"naara",
"naare",
"naari",
"naaro",
"naata",
"naate",
"naati",
"naave",
"nabad",
"nabbe",
"nacha",
"nache",
"nachi",
"nacho",
"nachu",
"nadan",
"nadee",
"nadia",
"nadir",
"nagad",
"nagan",
"nagar",
"nagdi",
"nagin",
"nagma",
"nagme",
"nagna",
"nagri",
"nahae",
"nahai",
"nahak",
"nahao",
"nahar",
"nahas",
"nahau",
"nahee",
"nahin",
"nahla",
"nahle",
"naina",
"naiya",
"najla",
"nakab",
"nakad",
"nakal",
"nakam",
"nakar",
"nakdi",
"nakel",
"nakki",
"nakli",
"naksh",
"nakti",
"nakul",
"nalia",
"nalka",
"nalke",
"nalko",
"namak",
"naman",
"namaz",
"namna",
"namud",
"nanad",
"nanak",
"nanda",
"nandi",
"nandu",
"nanga",
"nange",
"nangi",
"nango",
"nanha",
"nanhe",
"nanhi",
"napna",
"naqab",
"naqsh",
"narad",
"naraj",
"narak",
"naram",
"naraz",
"naren",
"naria",
"narmi",
"narso",
"nasha",
"nashe",
"nasht",
"nasib",
"natak",
"natee",
"natin",
"nauka",
"naval",
"navam",
"navik",
"navin",
"navya",
"nawab",
"nawal",
"nawaz",
"nayab",
"nayak",
"nayan",
"nazar",
"nazia",
"nazir",
"nazla",
"nazma",
"nazre",
"nazuk",
"neech",
"neela",
"neele",
"neend",
"neeta",
"neeti",
"neetu",
"nehar",
"nekar",
"nekee",
"nemat",
"netao",
"netra",
"netri",
"netro",
"neved",
"nevla",
"nevle",
"nevli",
"nibah",
"nibat",
"nibha",
"nicha",
"niche",
"nichi",
"nidan",
"nidhi",
"nidra",
"nigah",
"nigam",
"nigar",
"nihal",
"nihar",
"nihit",
"nijat",
"nikah",
"nikal",
"nikas",
"nikla",
"nikle",
"nikli",
"niklo",
"nilaa",
"nilam",
"nilay",
"nimbu",
"nimna",
"ninda",
"nindo",
"ninua",
"nipat",
"nipun",
"nirad",
"niraj",
"niras",
"nirav",
"nirih",
"nirma",
"nirog",
"nisar",
"nisha",
"nisht",
"nitin",
"nitya",
"nivad",
"nivar",
"nivas",
"niwar",
"niwas",
"niyam",
"niyat",
"nizam",
"nocha",
"noche",
"nochi",
"nocho",
"nokri",
"nubbe",
"nupur",
"nutan",
"nyaay",
"nyasi",
"nyayi",
"nyota",
"nyote",
"ochha",
"odhte",
"ojasi",
"ojhal",
"okhli",
"omkar",
"ondha",
"ondhe",
"ondhi",
"onkar",
"oollu",
"oolta",
"oonch",
"oonee",
"oonki",
"oopar",
"oopri",
"oorja",
"paada",
"paadi",
"paala",
"paale",
"paali",
"paalo",
"paana",
"paane",
"paani",
"paanv",
"paapi",
"paara",
"paari",
"paasa",
"paash",
"paate",
"paati",
"paaya",
"pacha",
"pachi",
"padak",
"padap",
"padau",
"padav",
"padee",
"padhe",
"padhi",
"padho",
"padie",
"padla",
"padlo",
"padma",
"padna",
"padne",
"pados",
"padri",
"padta",
"padte",
"padti",
"padvi",
"paega",
"pagal",
"pagar",
"pagdi",
"pagla",
"pagle",
"pagli",
"paglo",
"paglu",
"pahad",
"pahal",
"pahan",
"pahar",
"pahla",
"pahle",
"pahli",
"pahlu",
"pahna",
"pahne",
"pahni",
"pahno",
"pahnu",
"pahra",
"pahre",
"pahri",
"paida",
"paina",
"paini",
"paint",
"pairo",
"paisa",
"paise",
"paiso",
"paith",
"pajeb",
"pakad",
"pakai",
"pakao",
"pakau",
"pakda",
"pakde",
"pakdi",
"pakdo",
"pakee",
"pakhi",
"pakka",
"pakke",
"pakki",
"pakna",
"pakne",
"pakni",
"paksh",
"palaa",
"palak",
"palan",
"palat",
"palda",
"palde",
"palia",
"palid",
"palke",
"palki",
"palko",
"palla",
"palle",
"pallo",
"pallu",
"palna",
"palne",
"palni",
"palno",
"palta",
"palte",
"palti",
"paltu",
"panah",
"panap",
"panch",
"panda",
"pande",
"pandu",
"panga",
"pange",
"panja",
"panje",
"pankh",
"panna",
"panne",
"panni",
"panno",
"panth",
"panti",
"papad",
"papdi",
"paper",
"pappi",
"pappu",
"parag",
"parai",
"param",
"paras",
"parat",
"parda",
"parde",
"paree",
"paria",
"parit",
"parle",
"parna",
"paros",
"parsa",
"parse",
"parsi",
"parso",
"parsu",
"parte",
"parth",
"party",
"parul",
"parva",
"pasar",
"pasha",
"pashu",
"pasli",
"patai",
"patak",
"patal",
"patan",
"patel",
"patit",
"patka",
"patke",
"patki",
"patla",
"patle",
"patli",
"patlu",
"patna",
"patne",
"patni",
"patra",
"patri",
"patta",
"patte",
"patti",
"paudh",
"paudi",
"pauhe",
"pauna",
"pavak",
"pavan",
"pavli",
"pavti",
"pawan",
"payal",
"pedal",
"pedha",
"pedhi",
"peeda",
"peehu",
"peela",
"peele",
"peena",
"peene",
"peesa",
"peese",
"peeso",
"peeta",
"peeth",
"peeto",
"pehla",
"pehra",
"penda",
"pende",
"pendi",
"pesha",
"peshe",
"peshi",
"petee",
"petha",
"phaad",
"phaak",
"phaka",
"phake",
"phaki",
"phala",
"phale",
"phali",
"phand",
"phata",
"phate",
"phati",
"pheka",
"pheku",
"phera",
"phere",
"pheri",
"pheta",
"phika",
"phike",
"phiki",
"phini",
"phira",
"phire",
"phiri",
"phiro",
"phoda",
"phode",
"phodi",
"phodo",
"phone",
"phook",
"phool",
"phoot",
"photo",
"phuke",
"phula",
"phule",
"phuli",
"phuta",
"phute",
"phuti",
"piano",
"piddi",
"piddu",
"pidha",
"pidhi",
"pidit",
"piece",
"pihar",
"pilaa",
"pilai",
"pilao",
"pilia",
"pilla",
"pilva",
"pinaa",
"pinni",
"pipal",
"pisab",
"pisna",
"pisne",
"pisni",
"pista",
"piste",
"pisti",
"pitai",
"pital",
"pitee",
"pitna",
"pitne",
"pitra",
"pitta",
"pitti",
"pitva",
"piyau",
"plane",
"plate",
"pochh",
"podha",
"podhe",
"podia",
"pokan",
"polka",
"pooda",
"poodi",
"pooja",
"pooje",
"pooji",
"poojo",
"poora",
"poore",
"poori",
"poorn",
"poorv",
"potee",
"potha",
"pothi",
"potli",
"potna",
"potne",
"potra",
"power",
"praan",
"prabu",
"praja",
"prana",
"prani",
"prant",
"prapt",
"prati",
"praud",
"praun",
"preet",
"premi",
"press",
"priti",
"priya",
"priye",
"pucca",
"puchh",
"pudia",
"pujan",
"pujna",
"pukar",
"pukka",
"pulak",
"pulao",
"pulav",
"pulis",
"pulon",
"pulti",
"punah",
"punam",
"punit",
"punja",
"punje",
"punji",
"punya",
"purab",
"purak",
"puran",
"purda",
"purde",
"puree",
"puria",
"purja",
"purna",
"purse",
"purti",
"purva",
"purvi",
"purwa",
"pushp",
"putai",
"putla",
"putle",
"putli",
"putra",
"putri",
"pyaaj",
"pyaar",
"pyaau",
"pyaaz",
"pyada",
"pyala",
"pyale",
"pyali",
"pyara",
"pyare",
"pyari",
"pyaro",
"pyasa",
"pyase",
"pyasi",
"pyaso",
"qabul",
"qadar",
"qafan",
"qahar",
"qaidi",
"qarar",
"qasar",
"qatar",
"qatil",
"qatla",
"quota",
"quran",
"qutub",
"raagi",
"raago",
"raahe",
"raahi",
"raaho",
"raaja",
"raajy",
"raakh",
"raama",
"raana",
"raani",
"raate",
"raato",
"raazi",
"rabdi",
"rabta",
"racha",
"rache",
"rachi",
"racho",
"radda",
"raddi",
"radha",
"radhe",
"radif",
"radio",
"rafiq",
"rafta",
"ragad",
"ragda",
"ragde",
"ragdi",
"ragdo",
"ragee",
"raghu",
"ragon",
"raham",
"rahan",
"rahat",
"rahee",
"rahen",
"rahim",
"rahit",
"rahna",
"rahne",
"rahta",
"rahte",
"rahti",
"rahul",
"raina",
"raita",
"rajai",
"rajan",
"rajas",
"rajat",
"rajiv",
"rajma",
"rajni",
"rajsi",
"rajta",
"rajya",
"rakab",
"rakam",
"rakha",
"rakhe",
"rakhi",
"rakho",
"rakhu",
"rakib",
"rakul",
"raman",
"ramji",
"ramna",
"ramni",
"ramta",
"ramte",
"ramti",
"ranga",
"range",
"rangi",
"rango",
"ranji",
"rapat",
"raqib",
"rasai",
"rasam",
"rashi",
"rasid",
"rasik",
"rasme",
"rasoi",
"rassi",
"rasta",
"raste",
"rasto",
"ratan",
"rathi",
"ratna",
"ratta",
"ratti",
"ravan",
"ravee",
"raxit",
"razia",
"razor",
"reena",
"reeta",
"reete",
"reeti",
"rehna",
"rekha",
"repat",
"resha",
"retee",
"retna",
"revad",
"revti",
"richa",
"richh",
"ridhi",
"rihai",
"rijha",
"rijhe",
"rijhi",
"rishi",
"rista",
"riste",
"rochu",
"rodan",
"rogee",
"rohan",
"rohit",
"roiye",
"rokad",
"rokda",
"rokde",
"rokie",
"rokna",
"rokne",
"rokta",
"rokte",
"rokti",
"rolee",
"romik",
"ronaa",
"ronak",
"roohi",
"roola",
"roopa",
"roosi",
"rooth",
"ropan",
"ropee",
"ropit",
"ropna",
"rotee",
"rotia",
"royen",
"rubai",
"ruchi",
"rudai",
"rudan",
"rudra",
"rugna",
"rukha",
"rukhe",
"rukhi",
"rukie",
"rukka",
"rukna",
"rukne",
"rukni",
"rukta",
"rukte",
"rukti",
"rulaa",
"rulae",
"rulai",
"rulao",
"ruler",
"rumal",
"rummy",
"rundh",
"rupak",
"rupee",
"rupia",
"rupya",
"rupye",
"rusva",
"ruswa",
"rutba",
"rutha",
"ruthe",
"ruthi",
"rutho",
"saada",
"saade",
"saadi",
"saadu",
"saafa",
"saakh",
"saaki",
"saale",
"saali",
"saalo",
"saand",
"saani",
"saanp",
"saans",
"saara",
"saare",
"saath",
"saato",
"saaye",
"sabak",
"sabal",
"sabar",
"saber",
"sabha",
"sabhi",
"sabit",
"sabke",
"sabki",
"sabko",
"sabne",
"sabse",
"sabun",
"sabut",
"sabzi",
"sachi",
"sadaa",
"sadak",
"sadan",
"sadar",
"sadee",
"sadev",
"sadha",
"sadhe",
"sadhi",
"sadhu",
"sadia",
"sadie",
"sadiq",
"sadke",
"sadko",
"sadma",
"sadme",
"sadmo",
"sadne",
"sadqe",
"sadte",
"safai",
"safal",
"safar",
"safed",
"sagai",
"sagar",
"sagun",
"sahab",
"sahaj",
"saham",
"sahan",
"sahar",
"sahas",
"sahbi",
"sahee",
"sahej",
"sahib",
"sahil",
"sahir",
"sahit",
"sahla",
"sahma",
"sahme",
"sahmi",
"sahna",
"sahne",
"sahni",
"sahsa",
"sahta",
"sahte",
"sahti",
"saiya",
"sajae",
"sajag",
"sajai",
"sajal",
"sajan",
"sajda",
"sajde",
"sajee",
"sajha",
"sajid",
"sajiv",
"sajja",
"sajna",
"sajne",
"sajni",
"sajte",
"sajva",
"sajwa",
"sakal",
"sakee",
"saket",
"sakha",
"sakhi",
"sakht",
"sakun",
"salad",
"salah",
"salam",
"salan",
"salib",
"salim",
"salma",
"salna",
"salne",
"salta",
"saluk",
"samaj",
"saman",
"samar",
"samay",
"samet",
"samna",
"samne",
"samta",
"samul",
"sanad",
"sanak",
"sanam",
"sanan",
"sangh",
"sangi",
"sanjh",
"sanju",
"sanki",
"sanna",
"santa",
"santo",
"sapan",
"sapat",
"sapna",
"sapne",
"sapno",
"saput",
"saraf",
"sarai",
"sarak",
"saral",
"saras",
"sarat",
"sardi",
"sarej",
"sarga",
"sargo",
"saria",
"sarie",
"sarka",
"sarke",
"sarki",
"sarko",
"sarku",
"sarod",
"saroj",
"sarso",
"sarva",
"sashi",
"sasta",
"saste",
"sasti",
"sasur",
"satae",
"satah",
"satai",
"satak",
"satao",
"satat",
"sathi",
"satik",
"satke",
"satne",
"satra",
"satro",
"satta",
"satte",
"satti",
"sattu",
"satya",
"sauda",
"saude",
"saunp",
"sauvi",
"savai",
"saval",
"savan",
"savar",
"saver",
"sawai",
"sawal",
"sawan",
"scale",
"score",
"seedi",
"seeka",
"seekh",
"seela",
"seema",
"seena",
"seene",
"seeng",
"seenk",
"seeno",
"seepi",
"seeta",
"seeti",
"sehat",
"sehra",
"sehre",
"senaa",
"senik",
"senka",
"sethi",
"setho",
"sethu",
"sevaa",
"sevai",
"sevak",
"sevan",
"sevya",
"sewaa",
"sewak",
"sewan",
"shaad",
"shaah",
"shaam",
"shaan",
"shaap",
"shabd",
"shadi",
"shahi",
"shail",
"shair",
"shaiv",
"shakh",
"shala",
"shama",
"shani",
"shant",
"shaql",
"share",
"shark",
"sharm",
"shart",
"shauk",
"shawl",
"shaya",
"sheel",
"sheet",
"sheik",
"shekh",
"shera",
"shero",
"sheru",
"shila",
"shira",
"shirt",
"shish",
"shiva",
"shlok",
"shodh",
"shokh",
"shola",
"shole",
"shoma",
"shool",
"shoor",
"shora",
"shrap",
"shree",
"shubh",
"shukr",
"shulk",
"shuru",
"shwas",
"shwet",
"shyam",
"siddh",
"sidha",
"sidhe",
"sidhi",
"sigdi",
"sihar",
"sikai",
"sikha",
"sikhe",
"sikhi",
"sikho",
"sikia",
"sikka",
"sikke",
"sikud",
"sikur",
"silaa",
"silai",
"silan",
"silna",
"silva",
"simar",
"simat",
"simba",
"simit",
"simta",
"simte",
"simti",
"sinch",
"singh",
"sinka",
"siraa",
"sirji",
"sirka",
"sirke",
"sisha",
"sishu",
"siska",
"siske",
"siski",
"sisko",
"sisku",
"sitam",
"sitar",
"sitee",
"sitti",
"sivay",
"slate",
"smita",
"smoke",
"snaan",
"snayu",
"sneha",
"snehi",
"socha",
"sochi",
"socho",
"sochu",
"soega",
"sohan",
"sohni",
"solah",
"sonam",
"sonia",
"sonth",
"sonti",
"sooja",
"sooje",
"sooji",
"sookh",
"sooli",
"soona",
"soond",
"soone",
"sooni",
"soota",
"sooti",
"sopan",
"sosha",
"soshe",
"sotan",
"sotee",
"soten",
"steel",
"sthal",
"sthan",
"sthir",
"sthit",
"sthul",
"stick",
"stool",
"stree",
"stuti",
"style",
"subah",
"suchi",
"sudak",
"sudha",
"sudhi",
"sudip",
"sudol",
"sugam",
"suhag",
"suhas",
"sujan",
"sujee",
"sujha",
"sujhe",
"sujhi",
"sujit",
"sujna",
"sujne",
"sukha",
"sukhe",
"sukhi",
"sulaa",
"sulag",
"sulah",
"sulai",
"sulao",
"sulat",
"sulee",
"sulga",
"sulta",
"suman",
"sumer",
"sumit",
"sunaa",
"sunai",
"sunao",
"sunar",
"sunee",
"sunie",
"sunil",
"sunna",
"sunne",
"sunni",
"sunta",
"sunte",
"sunti",
"supda",
"super",
"surag",
"suraj",
"suran",
"surat",
"surkh",
"surti",
"surya",
"susti",
"sutak",
"sutar",
"sutli",
"sutra",
"sutta",
"suyog",
"svaad",
"swaad",
"swaas",
"swami",
"swamy",
"swang",
"swarg",
"swarn",
"swati",
"syrup",
"taada",
"taade",
"taadi",
"taaja",
"taaka",
"taaki",
"taala",
"taale",
"taali",
"taalo",
"taana",
"taane",
"taang",
"taank",
"taapa",
"taape",
"taapo",
"taapu",
"taara",
"taare",
"taaro",
"taash",
"taaza",
"taaze",
"taazi",
"tabhi",
"tabka",
"tabla",
"table",
"tabut",
"tadad",
"tadak",
"tadap",
"tadka",
"tadke",
"tadpa",
"tadpe",
"tadpi",
"tadpo",
"tadpu",
"tagda",
"tagde",
"tagdi",
"tahal",
"tahas",
"tahat",
"tahir",
"tahla",
"tahle",
"tahli",
"tahlu",
"tahni",
"taiji",
"taira",
"taire",
"tairi",
"tairo",
"taish",
"tajgi",
"takat",
"takht",
"takia",
"takla",
"takle",
"takli",
"takna",
"takne",
"talab",
"talak",
"talaq",
"talee",
"talia",
"talkh",
"talla",
"talli",
"talna",
"talne",
"talti",
"talva",
"talve",
"tamam",
"tamas",
"tamba",
"tambe",
"tambu",
"tamga",
"tamge",
"tamgo",
"tamil",
"tamra",
"tanav",
"tanay",
"tanga",
"tange",
"tangi",
"tango",
"tanha",
"tanik",
"tanke",
"tanki",
"tanta",
"tanya",
"tapak",
"tapan",
"tapka",
"tapke",
"tapki",
"tapna",
"tappa",
"tappe",
"tapra",
"tapre",
"tapsi",
"tapta",
"tapte",
"tapti",
"taqat",
"taraf",
"tarah",
"tarai",
"tarak",
"taral",
"taran",
"taras",
"taree",
"tareh",
"tarer",
"tarif",
"tarka",
"tarko",
"tarsa",
"tarse",
"tarsi",
"tarso",
"tarun",
"tasir",
"tatha",
"tatol",
"tattu",
"tauji",
"taula",
"tavil",
"tazgi",
"tedha",
"tedhe",
"tedhi",
"teeja",
"teeka",
"teela",
"teeli",
"tehri",
"tejaa",
"tejas",
"tejee",
"tekri",
"telee",
"tendi",
"terah",
"teree",
"terhi",
"tervi",
"tevar",
"tewar",
"tezab",
"thaal",
"thaam",
"thaan",
"thaap",
"thaga",
"thage",
"thagi",
"thago",
"thagu",
"thaka",
"thake",
"thaki",
"thako",
"thali",
"thama",
"thame",
"thami",
"thana",
"thand",
"thani",
"thank",
"thapp",
"thati",
"thaur",
"theek",
"theka",
"thela",
"thele",
"theli",
"thelo",
"thelu",
"thiya",
"thoda",
"thode",
"thodi",
"thoka",
"thoke",
"thoki",
"thoko",
"thoku",
"thook",
"thopa",
"thope",
"thopi",
"thopo",
"thuja",
"tiddi",
"tigdi",
"tiger",
"tihai",
"tikat",
"tikha",
"tikhe",
"tikhi",
"tikka",
"tikke",
"tikki",
"tikna",
"tikne",
"tikta",
"tikte",
"tikti",
"tilak",
"timir",
"tinda",
"tinde",
"tingu",
"tinka",
"tinke",
"tinko",
"tippa",
"tirth",
"tisra",
"tisvi",
"titar",
"tithi",
"titli",
"tivra",
"todna",
"todne",
"todni",
"todte",
"tohfa",
"tohfe",
"tohfo",
"tohin",
"tokie",
"tokna",
"tokne",
"tokni",
"tokri",
"tokta",
"tokte",
"tokti",
"tolee",
"tolia",
"tolna",
"tolne",
"tolta",
"tolte",
"tondu",
"tonti",
"toota",
"toote",
"tooti",
"topee",
"topia",
"topli",
"torai",
"toran",
"totka",
"totke",
"totko",
"totla",
"totli",
"towel",
"traas",
"track",
"train",
"trast",
"trina",
"tript",
"trist",
"triya",
"truck",
"trunk",
"tufan",
"tujhe",
"tukda",
"tukde",
"tukdi",
"tukdo",
"tukka",
"tukke",
"tukko",
"tukur",
"tulaa",
"tulna",
"tulne",
"tulsi",
"tulya",
"tumhe",
"tumhi",
"tumko",
"tumne",
"tumse",
"tunak",
"turki",
"turra",
"turup",
"tutaa",
"tutla",
"tutna",
"tutne",
"tyaag",
"tyagi",
"tyakt",
"tyori",
"ubaal",
"ubaar",
"ubali",
"ubasi",
"ubhar",
"ubhra",
"ubhre",
"ubhri",
"ubhro",
"ubhru",
"ubkai",
"ubtan",
"uchak",
"uchat",
"uchch",
"uchit",
"uchki",
"uchta",
"udaan",
"udaar",
"udaas",
"udand",
"udasi",
"udati",
"udgam",
"udgar",
"udhad",
"udham",
"udhar",
"udhas",
"udhed",
"udhta",
"udyam",
"udyan",
"ufaan",
"ugadi",
"ugahi",
"ugana",
"ugane",
"ugani",
"ugaya",
"ugaye",
"ugayi",
"ujaad",
"ujada",
"ujala",
"ujale",
"ujali",
"ujlaa",
"ujwal",
"ukada",
"ukera",
"ukere",
"ukhad",
"ukhda",
"ukhde",
"ukhed",
"ulajh",
"ulfat",
"ulhas",
"ulich",
"uljha",
"uljhe",
"uljhi",
"uljho",
"uljhu",
"ulkaa",
"ullas",
"ultaa",
"ultee",
"ultia",
"umbar",
"umdaa",
"umesh",
"ummid",
"unaki",
"unasi",
"uncha",
"unche",
"unchi",
"uncle",
"ungli",
"unhen",
"unhin",
"unmad",
"unnat",
"unnis",
"untis",
"unvan",
"upaay",
"upaje",
"uphar",
"upjau",
"upjee",
"upkar",
"upvan",
"upvas",
"upwan",
"upyog",
"urvar",
"ushma",
"uskee",
"ustra",
"usvas",
"utaar",
"utara",
"utare",
"utari",
"utaro",
"uthai",
"uthal",
"uthao",
"uthau",
"uthla",
"uthli",
"uthna",
"uthne",
"uthta",
"uthte",
"uthti",
"uthva",
"utpad",
"utpal",
"utpat",
"utran",
"utsah",
"utsav",
"utsuk",
"uttar",
"vaada",
"vaade",
"vaadi",
"vaado",
"vaani",
"vaare",
"vaari",
"vaayu",
"vadaa",
"vadak",
"vadee",
"vadhu",
"vahak",
"vaham",
"vahan",
"vahee",
"vahin",
"vahmi",
"vaidh",
"vaisa",
"vaiso",
"vajah",
"vajan",
"vajib",
"vajni",
"vajoo",
"vajra",
"vajud",
"vakai",
"vakia",
"vakif",
"vakil",
"vakta",
"vakya",
"valid",
"vanar",
"vande",
"vanee",
"vanik",
"vansh",
"vapsi",
"varah",
"varak",
"varan",
"varis",
"varka",
"varke",
"varna",
"varsh",
"varta",
"varun",
"vasan",
"vasla",
"vasna",
"vasta",
"vaste",
"vastu",
"vasul",
"vatan",
"vatni",
"vatuk",
"vazan",
"vazir",
"vazoo",
"vedna",
"vedon",
"vedya",
"veena",
"vesya",
"vetan",
"vibha",
"vidai",
"video",
"vides",
"vidha",
"vidhi",
"vidhu",
"vidit",
"vidur",
"vidya",
"vifal",
"vighn",
"vihag",
"vihal",
"vihan",
"vihar",
"vihas",
"vihin",
"vihip",
"vijay",
"vikal",
"vikar",
"vikas",
"vikat",
"vilap",
"vilas",
"vilay",
"vilom",
"vimal",
"viman",
"vinay",
"vinit",
"vinod",
"vinti",
"vipin",
"vipul",
"virad",
"virah",
"viraj",
"viral",
"viram",
"viran",
"virat",
"virus",
"visha",
"vishv",
"vitta",
"vivad",
"vivah",
"vivan",
"vivek",
"viyog",
"voter",
"vrati",
"vrind",
"vritt",
"vyaas",
"vyagh",
"vyakt",
"vyang",
"vyapt",
"vyaya",
"waada",
"waade",
"waadi",
"waasi",
"wadaa",
"wadak",
"wahak",
"wahee",
"wahid",
"wahin",
"wajah",
"wajib",
"wajid",
"wajud",
"wakif",
"wakta",
"walid",
"wansh",
"wapsi",
"waqif",
"wardi",
"waris",
"warna",
"wasna",
"wasta",
"waste",
"wasul",
"wazan",
"wazir",
"wazni",
"wazoo",
"wyakt",
"yaade",
"yaado",
"yaara",
"yaari",
"yaaro",
"yadav",
"yagna",
"yagya",
"yahaa",
"yahee",
"yahin",
"yakin",
"yaman",
"yatha",
"yatim",
"yatna",
"yatra",
"yatri",
"yogee",
"yogya",
"yojak",
"yojan",
"yojna",
"yovan",
"yuddh",
"yugal",
"yugma",
"yugon",
"yukti",
"yuvaa",
"yuvak",
"yuvti",
"zaban",
"zafar",
"zahan",
"zahar",
"zahir",
"zaika",
"zakhm",
"zalim",
"zamin",
"zamir",
"zarda",
"zaria",
"zarie",
"zarur",
"zayka",
"zazba",
"zibah",
"ziddi",
"zinda",
"zinde",
"zindi",
"zuban",
"zulfe",
"zulfi",
"zulmi",
"zyada",
                      ],                  
        Ra = "present",
        Ha = "correct",
        Na = "absent";
    var Pa = {
        unknown: 0,
        absent: 1,
        present: 2,
        correct: 3
    };

    function Da(e, a) {
        var s = {};
        return e.forEach((function(e, t) {
            if (a[t])
                for (var n = 0; n < e.length; n++) {
                    var o = e[n],
                        r = a[t][n],
                        i = s[o] || "unknown";
                    Pa[r] > Pa[i] && (s[o] = r)
                }
        })), s
    }

    function $a(e) {
        var a = ["th", "st", "nd", "rd"],
            s = e % 100;
        return e + (a[(s - 20) % 10] || a[s] || a[0])
    }
    var Ga = new Date(2022, 7, 1, 0, 0, 0, 0);

    function Ba(e, a) {
        var s = new Date(e),
            t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
        return Math.round(t / 864e5)
    }

    function Va(e) {
        //var a, s = Fa(e);
        //return a = s % Ma.length, Ma[a]

        gIdx = Math.floor(Math.random() * Ma.length );
        return Ma[gIdx];
    }

    function Rst(e) {
        var n = za();

        n.today = new Date;
        n.refreshTimer = as();

        n.boardState = new Array(6).fill("");
        n.evaluations = new Array(6).fill(null);
        n.solution = Va(n.today);
        n.dayOffset = Fa(n.today);
        n.gameStatus = "IN_PROGRESS"
        n.lastCompletedTs = null;
        //z.hardMode = n.hardMode;
        n.restoringFromLocalStorage = false;
        n.rowIndex = 0;
    }

    function Fa(e) {
        return gIdx;
        //return Ba(Ga, e)
    }
    var Wa = "abcdefghijklmnopqrstuvwxyz@";
    var Ya = "hinglish-wordle-ns-statistics",
        Ua = "fail",
        Ja = {
            currentStreak: 0,
            maxStreak: 0,
            guesses: o({
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0
            }, Ua, 0),
            winPercentage: 0,
            gamesPlayed: 0,
            gamesWon: 0,
            averageGuesses: 0
        };

    function Xa() {
        var e = window.localStorage.getItem(Ya) || JSON.stringify(Ja);
        return JSON.parse(e)
    }

    function Za(e) {
        var a = e.isWin,
            s = e.isStreak,
            t = e.numGuesses,
            n = Xa();
        a ? (n.guesses[t] += 1, s ? n.currentStreak += 1 : n.currentStreak = 1) : (n.currentStreak = 0, n.guesses.fail += 1), n.maxStreak = Math.max(n.currentStreak, n.maxStreak), n.gamesPlayed += 1, n.gamesWon += a ? 1 : 0, n.winPercentage = Math.round(n.gamesWon / n.gamesPlayed * 100), n.averageGuesses = Math.round(Object.entries(n.guesses).reduce((function(e, a) {
                var s = y(a, 2),
                    t = s[0],
                    n = s[1];
                return t !== Ua ? e += t * n : e
            }), 0) / n.gamesWon),
            function(e) {
                window.localStorage.setItem(Ya, JSON.stringify(e))
            }(n)
    }
    var Ka, Qa = "hinglish-wordle-ns-refresh",
        es = window.localStorage;

    function as() {
        return Ka || (Ka = setInterval((function() {
            es.getItem(Qa) && (es.removeItem(Qa), window.location.href.match(/.*\.nytimes\.com/g) ? window.location.reload(!0) : window.location.replace("https://www.nytimes.com/games/wordle"))
        }), 432e5))
    }
    var ss = "hinglish-wordle-ns-statistics",
        ts = window.localStorage;

    function ns(e, a) {
        if (!e.gamesPlayed) return !1;
        var s = function() {
            var e = {
                gamesPlayed: 0
            };
            try {
                var a = JSON.parse(ts.getItem(ss));
                if (a && a.gamesPlayed) return a
            } catch (a) {
                return e
            }
            return e
        }();
        return !(s.gamesPlayed && !a) || e.gamesPlayed > s.gamesPlayed
    }

    function os() {
        if (ts) {
            try {
                var e = new Proxy(new URLSearchParams(window.location.search), {
                    get: function(e, a) {
                        return e.get(a)
                    }
                });
                if (e.data) ! function(e) {
                    if (!e.statistics) throw new Error("User local data does not contain statistics. Aborting transfer.");
                    if (ns(e.statistics, e.force)) {
                        ts.setItem(ss, JSON.stringify(e.statistics));
                        var a = e.darkTheme;
                        window.themeManager.setDarkTheme(a);
                        var s = !!e.colorBlindTheme;
                        window.themeManager.setColorBlindTheme(s)
                    }
                }(JSON.parse(e.data))
            } catch (e) {}
            window.history.replaceState({}, document.title, new URL(location.pathname, location.href).href)
        }
    }
    var rs = document.createElement("template");
    
    rs.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: calc(100% - var(--header-height));\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: nowrap;\n    padding: 0 16px;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-family: \'nyt-karnakcondensed\';\n    font-weight: 700;\n    font-size: 25px;\n    line-height: 100%;\n    letter-spacing: 0.01em;\n    text-align: center;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n  .menu-left {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    align-items: center;\n    width: 24px;\n    justify-content: flex-start;\n  }\n  .menu-right {\n    display: flex;\n    width: 70px;\n    justify-content: flex-end;\n  }\n  #nav-button {\n    padding-top: 2px;\n  }\n\n  @media (min-width: 415px) {\n    header {\n      padding: 0px 16px;\n    }\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n  <header>\n  <div class="menu-left">\n <button id="help-button" class="icon" aria-label="Help" tabindex="-1">\n      <game-icon icon="help"></game-icon>\n    </button>\n  </div>\n  <div class="title">\n    Hinglish Wordle NonStop\n  </div>\n  <div class="menu-right">\n    <button id="statistics-button" class="icon" aria-label="Statistics" tabindex="-1">\n      <game-icon icon="statistics"></game-icon>\n    </button>\n    <button id="settings-button" class="icon" aria-label="Settings" tabindex="-1">\n      <game-icon icon="settings"></game-icon>\n    </button>\n  </div>\n</header>\n    <div id="game">\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-nav-modal></game-nav-modal>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
    var is = document.createElement("template");
    is.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
    var ls = "IN_PROGRESS",
        ds = "WIN",
        cs = "FAIL",
        us = ["Waah Waah", "Bahut Badhiya", "Badhiya", "Sundar", "Zindabad", "Bach Gaye"],
        ms = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                s(this, t), o(m(e = a.call(this)), "tileIndex", 0), o(m(e), "rowIndex", 0), o(m(e), "solution", void 0), o(m(e), "boardState", void 0), o(m(e), "evaluations", void 0), o(m(e), "canInput", !0), o(m(e), "gameStatus", ls), o(m(e), "letterEvaluations", {}), o(m(e), "$board", void 0), o(m(e), "$keyboard", void 0), o(m(e), "$game", void 0), o(m(e), "today", void 0), o(m(e), "lastPlayedTs", void 0), o(m(e), "lastCompletedTs", void 0), o(m(e), "hardMode", void 0), o(m(e), "dayOffset", void 0), e.attachShadow({
                    mode: "open"
                }), e.today = new Date, e.refreshTimer = as();
        
                Rst();

                return e.lastPlayedTs = n.lastPlayedTs, e.lastCompletedTs = n.lastCompletedTs, !e.lastPlayedTs || Ba(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""), e.evaluations = new Array(6).fill(null), e.solution = Va(e.today), e.dayOffset = Fa(e.today), e.lastCompletedTs = n.lastCompletedTs, e.hardMode = n.hardMode, e.restoringFromLocalStorage = !1, ja({
                    rowIndex: e.rowIndex,
                    boardState: e.boardState,
                    evaluations: e.evaluations,
                    solution: e.solution,
                    gameStatus: e.gameStatus
                })) : (e.boardState = n.boardState, e.evaluations = n.evaluations, e.rowIndex = n.rowIndex, e.solution = n.solution, e.dayOffset = Fa(e.today), e.letterEvaluations = Da(e.boardState, e.evaluations), e.gameStatus = n.gameStatus, e.lastCompletedTs = n.lastCompletedTs, e.hardMode = n.hardMode, e.gameStatus !== ls && (e.canInput = !1), e.restoringFromLocalStorage = !0), e
            }
            return n(t, [{
                key: "evaluateRow",
                value: function() {
                    if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                        var e, a = this.$board.querySelectorAll("game-row")[this.rowIndex],
                            s = this.boardState[this.rowIndex];
                        if (e = s, !Oa.includes(e) && !Ma.includes(e)) return a.setAttribute("invalid", ""), void this.addToast("Not in word list");
                        if (this.hardMode) {
                            var t = function(e, a, s) {
                                    if (!e || !a || !s) return {
                                        validGuess: !0
                                    };
                                    for (var t = 0; t < s.length; t++)
                                        if (s[t] === Ha && e[t] !== a[t]) return {
                                            validGuess: !1,
                                            errorMessage: "".concat($a(t + 1), " letter must be ").concat(a[t].toUpperCase())
                                        };
                                    for (var n = {}, o = 0; o < s.length; o++)[Ha, Ra].includes(s[o]) && (n[a[o]] ? n[a[o]] += 1 : n[a[o]] = 1);
                                    var r = e.split("").reduce((function(e, a) {
                                        return e[a] ? e[a] += 1 : e[a] = 1, e
                                    }), {});
                                    for (var i in n)
                                        if ((r[i] || 0) < n[i]) return {
                                            validGuess: !1,
                                            errorMessage: "Guess must contain ".concat(i.toUpperCase())
                                        };
                                    return {
                                        validGuess: !0
                                    }
                                }(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
                                n = t.validGuess,
                                o = t.errorMessage;
                            if (!n) return a.setAttribute("invalid", ""), void this.addToast(o || "Not valid in hard mode")
                        }
                        var r = function(e, a) {
                            for (var s = Array(a.length).fill(Na), t = Array(a.length).fill(!0), n = Array(a.length).fill(!0), o = 0; o < e.length; o++) e[o] === a[o] && n[o] && (s[o] = Ha, t[o] = !1, n[o] = !1);
                            for (var r = 0; r < e.length; r++) {
                                var i = e[r];
                                if (t[r])
                                    for (var l = 0; l < a.length; l++) {
                                        var d = a[l];
                                        if (n[l] && i === d) {
                                            s[r] = Ra, n[l] = !1;
                                            break
                                        }
                                    }
                            }
                            return s
                        }(s, this.solution);
                        this.evaluations[this.rowIndex] = r, this.letterEvaluations = Da(this.boardState, this.evaluations), a.evaluation = this.evaluations[this.rowIndex], this.rowIndex += 1;
                        var i = this.rowIndex >= 6,
                            l = r.every((function(e) {
                                return "correct" === e
                            }));
                        if (i || l) Za({
                            isWin: l,
                            isStreak: !!this.lastCompletedTs && 1 === Ba(new Date(this.lastCompletedTs), new Date),
                            numGuesses: this.rowIndex
                        }), ja({
                            lastCompletedTs: Date.now()
                        }), this.gameStatus = l ? ds : cs, es.setItem(Qa, !0);
                        this.tileIndex = 0, this.canInput = !1, ja({
                            rowIndex: this.rowIndex,
                            boardState: this.boardState,
                            evaluations: this.evaluations,
                            solution: this.solution,
                            gameStatus: this.gameStatus,
                            lastPlayedTs: Date.now()
                        })
                    }
                }
            }, {
                key: "addLetter",
                value: function(e) {
                    this.gameStatus === ls && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e, this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]), this.tileIndex += 1)))
                }
            }, {
                key: "removeLetter",
                value: function() {
                    if (this.gameStatus === ls && this.canInput && !(this.tileIndex <= 0)) {
                        this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                        var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                        this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"), e.removeAttribute("invalid"), this.tileIndex -= 1
                    }
                }
            }, {
                key: "submitGuess",
                value: function() {
                    if (this.gameStatus === ls && this.canInput) {
                        if (5 !== this.tileIndex) return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Not enough letters");
                        this.evaluateRow()
                    }
                }
            }, {
                key: "resetGame",
                value: function() {
                    // var n = za();

                    this.today = new Date;
                    this.refreshTimer = as();

                    this.boardState = new Array(6).fill("");
                    this.evaluations = new Array(6).fill(null);
                    this.solution = Va(n.today);
                    this.dayOffset = Fa(n.today);
                    this.gameStatus = "IN_PROGRESS"
                    //this.lastCompletedTs = null;
                    //z.hardMode = n.hardMode;
                    this.restoringFromLocalStorage = false;
                    this.rowIndex = 0;

                    for (var idx = 0; idx < 6; idx++) {
                        var d = this.$board.querySelectorAll("game-row")[idx];
                        d.removeAttribute("letters");
                        d.removeAttribute("invalid");

                    }

                    var wL = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(',');

                    for ( var idx = 0; idx < 26; idx++) {
                        var a = this.$keyboard.shadowRoot.querySelector('[data-key="'.concat(wL[idx], '"]'));
                        
                        a.dataset.state = "", a.classList.remove("fade")
                    }

                }
            }, {
                key: "addToast",
                value: function(e, a) {
                    var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        t = document.createElement("game-toast");
                    t.setAttribute("text", e), a && t.setAttribute("duration", a), s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
                }
            }, {
                key: "sizeBoard",
                value: function() {
                    var e = this.shadowRoot.querySelector("#board-container"),
                        a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
                        s = 6 * Math.floor(a / 5);
                    this.$board.style.width = "".concat(a, "px"), this.$board.style.height = "".concat(s, "px")
                }
            }, {
                key: "showStatsModal",
                value: function() {
                    var e = this.$game.querySelector("game-modal"),
                        a = document.createElement("game-stats");
                    this.gameStatus === ds && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex), a.gameApp = this, e.appendChild(a), e.setAttribute("open", "")
                }
            }, {
                key: "showNavModal",
                value: function() {
                    var e = this.$game.querySelector("game-nav-modal"),
                        a = document.createElement("game-nav");
                    a.gameApp = this, e.appendChild(a), e.setAttribute("open", "")
                }
            }, {
                key: "showHelpModal",
                value: function() {
                    var e = this.$game.querySelector("game-modal");
                    e.appendChild(document.createElement("game-help")), e.setAttribute("open", "")
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e, a, s, t, n, o, r, i, l, d = this;
                    this.shadowRoot.appendChild(rs.content.cloneNode(!0)), this.$game = this.shadowRoot.querySelector("#game"), this.$board = this.shadowRoot.querySelector("#board"), this.$keyboard = this.shadowRoot.querySelector("game-keyboard"), this.sizeBoard(), this.lastPlayedTs || setTimeout((function() {
                        return d.showHelpModal()
                    }), 100);
                    for (var c = 0; c < 6; c++) {
                        var u = document.createElement("game-row");
                        u.setAttribute("letters", this.boardState[c]), u.setAttribute("length", 5), this.evaluations[c] && (u.evaluation = this.evaluations[c]), this.$board.appendChild(u)
                    }
                    this.$game.addEventListener("game-key-press", (function(e) {
                            var a = e.detail.key;
                            "←" === a || "Backspace" === a ? d.removeLetter() : "↵" === a || "Enter" === a ? d.submitGuess() : "@" === a || "Reset" === a ? d.resetGame() : Wa.includes(a.toLowerCase()) && d.addLetter(a.toLowerCase())
                        })), this.$game.addEventListener("game-last-tile-revealed-in-row", (function(e) {
                            d.$keyboard.letterEvaluations = d.letterEvaluations, d.rowIndex < 6 && (d.canInput = !0);
                            var a = d.$board.querySelectorAll("game-row")[d.rowIndex - 1];
                            (e.path || e.composedPath && e.composedPath()).includes(a) && ([ds, cs].includes(d.gameStatus) && (d.restoringFromLocalStorage ? d.showStatsModal() : (d.gameStatus === ds && (a.setAttribute("win", ""), d.addToast(us[d.rowIndex - 1], 2e3)), d.gameStatus === cs && d.addToast(d.solution.toUpperCase(), 1 / 0), setTimeout((function() {
                                d.showStatsModal()
                            }), 2500))), d.restoringFromLocalStorage = !1)
                        })), this.shadowRoot.addEventListener("game-setting-change", (function(e) {
                            var a = e.detail,
                                s = a.name,
                                t = a.checked,
                                n = a.disabled;
                            switch (s) {
                                case "hard-mode":
                                    return void(n ? d.addToast("Hard mode can only be enabled at the start of a round", 1500, !0) : (d.hardMode = t, ja({
                                        hardMode: t
                                    })))
                            }
                        })), this.shadowRoot.getElementById("settings-button").addEventListener("click", (function(e) {
                            var a = d.$game.querySelector("game-page"),
                                s = document.createTextNode("Settings");
                            a.appendChild(s);
                            var t = document.createElement("game-settings");
                            t.setAttribute("slot", "content"), t.gameApp = d, a.appendChild(t), a.setAttribute("open", "")
                        })), this.shadowRoot.getElementById("help-button").addEventListener("click", (function(e) {
                            var a = d.$game.querySelector("game-page"),
                                s = document.createTextNode("How to play");
                            a.appendChild(s);
                            var t = document.createElement("game-help");
                            t.setAttribute("page", ""), t.setAttribute("slot", "content"), a.appendChild(t), a.setAttribute("open", "")
                        })), this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function(e) {
                            d.showStatsModal()
                        })), this.shadowRoot.getElementById("nav-button").addEventListener("click", (function(e) {
                            d.showNavModal()
                        })), window.addEventListener("resize", this.sizeBoard.bind(this)), os(), i = {
                            container: "GTM-P528B3",
                            prdstring: "&gtm_auth=tfAzqo1rYDLgYhmTnSjPqw&gtm_preview=env-130",
                            devstring: "&gtm_auth=WiJyA7zv1sohHCWSZ3mF1Q&gtm_preview=env-8",
                            stgstring: "&gtm_auth=FOuAsPhG-4kWeLk6Kq5AzQ&gtm_preview=env-7",
                            dataLayer: "",
                            modifier: "",
                            env: document.location.host.indexOf(".dev.") > -1 ? "dev" : document.location.host.indexOf(".stg.") > -1 || document.location.host.indexOf(".stage.") > -1 ? "stg" : "prod"
                        }, l = {
                            event: "pageDataReady",
                            application: {
                                name: "games-crosswords",
                                environment: i.env
                            }
                        }, i.modifier = i.prdstring, "dev" === i.env ? i.modifier = i.devstring : "stg" === i.env && (i.modifier = i.stgstring),
                        function(e, a, s, t, n, o) {
                            e[t] = e[t] || [], e[t].push({
                                "gtm.start": (new Date).getTime(),
                                event: "gtm.js"
                            });
                            var r = a.getElementsByTagName(s)[0],
                                i = a.createElement(s);
                            i.async = !0, i.src = "https://www.googletagmanager.com/gtm.js?id=" + n + o + "&gtm_cookies_win=x", r.parentNode.insertBefore(i, r)
                        }(window, document, "script", "dataLayer", i.container, i.modifier), e = l, a = i.env, t = a && "prod" === a ? "a.nytimes.com" : "a.dev.nytimes.com", n = encodeURIComponent(document.referrer), o = encodeURIComponent((s = document.querySelector("link[rel=canonical]")) ? s.href : document.location.href), (r = new XMLHttpRequest).withCredentials = !0, r.open("GET", "https://" + t + "/svc/nyt/data-layer?sourceApp=" + e.application.name + "&referrer=" + n + "&assetUrl=" + o, !0), r.onload = function() {
                            var a = JSON.parse(r.responseText);
                            a.event = "userDataReady", window.dataLayer.push(a), window.dataLayer.push(e)
                        }, r.addEventListener("error", (function() {
                            window.dataLayer.push(e)
                        })), r.send()
                }
            }, {
                key: "disconnectedCallback",
                value: function() {
                    clearInterval(this.refreshTimer)
                }
            }, {
                key: "debugTools",
                value: function() {
                    var e = this;
                    this.shadowRoot.getElementById("debug-tools").appendChild(is.content.cloneNode(!0)), this.shadowRoot.getElementById("toast").addEventListener("click", (function(a) {
                        e.addToast("hello world")
                    })), this.shadowRoot.getElementById("modal").addEventListener("click", (function(a) {
                        var s = e.$game.querySelector("game-modal");
                        s.textContent = "hello plz", s.setAttribute("open", "")
                    })), this.shadowRoot.getElementById("reveal").addEventListener("click", (function() {
                        e.evaluateRow()
                    })), this.shadowRoot.getElementById("shake").addEventListener("click", (function() {
                        e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
                    })), this.shadowRoot.getElementById("bounce").addEventListener("click", (function() {
                        var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                        "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "")
                    }))
                }
            }]), t
        }(u(HTMLElement));
    customElements.define("game-app", ms);
    var ps = document.createElement("template");
    ps.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
    var hs = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(ps.content.cloneNode(!0)), this.addEventListener("click", (function(a) {
                    e.shadowRoot.querySelector(".content").classList.add("closing")
                })), this.shadowRoot.addEventListener("animationend", (function(a) {
                    "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"), e.removeChild(e.firstChild), e.removeAttribute("open"))
                }))
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-modal", hs);
    var ys = document.createElement("template");
    ys.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
    var gs = document.createElement("template");
    gs.innerHTML = "\n  <button>key</button>\n";
    var bs = document.createElement("template");
    bs.innerHTML = '\n  <div class="spacer"></div>\n';
    var fs = [
            ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
            ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"],
            ["↵", "z", "x", "c", "v", "b", "n", "m", "←"],
            ["@"]
        ],
        ks = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t), o(m(e = a.call(this)), "_letterEvaluations", {}), e.attachShadow({
                    mode: "open"
                }), e
            }
            return n(t, [{
                key: "letterEvaluations",
                set: function(e) {
                    this._letterEvaluations = e, this._render()
                }
            }, {
                key: "dispatchKeyPressEvent",
                value: function(e) {
                    this.dispatchEvent(new CustomEvent("game-key-press", {
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            key: e
                        }
                    }))
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(ys.content.cloneNode(!0)), this.$keyboard = this.shadowRoot.getElementById("keyboard"), this.$keyboard.addEventListener("click", (function(a) {
                        var s = a.target.closest("button");
                        s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
                    })), window.addEventListener("keydown", (function(a) {
                        if (!0 !== a.repeat) {
                            var s = a.key,
                                t = a.metaKey,
                                n = a.ctrlKey;
                            t || n || (Wa.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s || "Reset" === s) && e.dispatchKeyPressEvent(s)
                        }
                    })), this.$keyboard.addEventListener("transitionend", (function(a) {
                        var s = a.target.closest("button");
                        s && e.$keyboard.contains(s) && s.classList.remove("fade")
                    })), fs.forEach((function(a) {
                        var s = document.createElement("div");
                        s.classList.add("row"), a.forEach((function(e) {
                            var a;
                            if (e >= "a" && e <= "z" || "←" === e || "↵" === e || "@" === e) {
                                if ((a = gs.content.cloneNode(!0).firstElementChild).dataset.key = e, a.textContent = e, "←" === e) {
                                    var t = document.createElement("game-icon");
                                    t.setAttribute("icon", "backspace"), a.textContent = "", a.appendChild(t), a.classList.add("one-and-a-half")
                                }
                                "↵" == e && (a.textContent = "enter", a.classList.add("one-and-a-half"))
                                "@" == e && (a.textContent = "reset", a.classList.add("one-and-a-half"))
                            } else(a = bs.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                            s.appendChild(a)
                        })), e.$keyboard.appendChild(s)
                    })), this._render()
                }
            }, {
                key: "_render",
                value: function() {
                    for (var e in this._letterEvaluations) {
                        var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                        a.dataset.state = this._letterEvaluations[e], a.classList.add("fade")
                    }
                }
            }]), t
        }(u(HTMLElement));
    /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.

      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.

      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
    function vs(e, a, s, t) {
        return new(s || (s = Promise))((function(n, o) {
            function r(e) {
                try {
                    l(t.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function i(e) {
                try {
                    l(t.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                var a;
                e.done ? n(e.value) : (a = e.value, a instanceof s ? a : new s((function(e) {
                    e(a)
                }))).then(r, i)
            }
            l((t = t.apply(e, a || [])).next())
        }))
    }

    function ws(e, a) {
        var s, t, n, o, r = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function i(o) {
            return function(i) {
                return function(o) {
                    if (s) throw new TypeError("Generator is already executing.");
                    for (; r;) try {
                        if (s = 1, t && (n = 2 & o[0] ? t.return : o[0] ? t.throw || ((n = t.return) && n.call(t), 0) : t.next) && !(n = n.call(t, o[1])).done) return n;
                        switch (t = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return r.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                r.label++, t = o[1], o = [0];
                                continue;
                            case 7:
                                o = r.ops.pop(), r.trys.pop();
                                continue;
                            default:
                                if (!((n = (n = r.trys).length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    r = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    r.label = o[1];
                                    break
                                }
                                if (6 === o[0] && r.label < n[1]) {
                                    r.label = n[1], n = o;
                                    break
                                }
                                if (n && r.label < n[2]) {
                                    r.label = n[2], r.ops.push(o);
                                    break
                                }
                                n[2] && r.ops.pop(), r.trys.pop();
                                continue
                        }
                        o = a.call(e, r)
                    } catch (e) {
                        o = [6, e], t = 0
                    } finally {
                        s = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, i])
            }
        }
    }
    customElements.define("game-keyboard", ks),
        function() {
            (console.warn || console.log).apply(console, arguments)
        }.bind("[clipboard-polyfill]");
    var xs, zs, js, Ss, Cs = "undefined" == typeof navigator ? void 0 : navigator,
        _s = null == Cs ? void 0 : Cs.clipboard;
    null === (xs = null == _s ? void 0 : _s.read) || void 0 === xs || xs.bind(_s), null === (zs = null == _s ? void 0 : _s.readText) || void 0 === zs || zs.bind(_s);
    var Es = (null === (js = null == _s ? void 0 : _s.write) || void 0 === js || js.bind(_s), null === (Ss = null == _s ? void 0 : _s.writeText) || void 0 === Ss ? void 0 : Ss.bind(_s)),
        qs = "undefined" == typeof window ? void 0 : window,
        Ls = (null == qs || qs.ClipboardItem, qs);
    var Ts = function() {
        this.success = !1
    };

    function As(e, a, s) {
        for (var t in e.success = !0, a) {
            var n = a[t],
                o = s.clipboardData;
            o.setData(t, n), "text/plain" === t && o.getData(t) !== n && (e.success = !1)
        }
        s.preventDefault()
    }

    function Is(e) {
        var a = new Ts,
            s = As.bind(this, a, e);
        document.addEventListener("copy", s);
        try {
            document.execCommand("copy")
        } finally {
            document.removeEventListener("copy", s)
        }
        return a.success
    }

    function Ms(e, a) {
        Os(e);
        var s = Is(a);
        return Rs(), s
    }

    function Os(e) {
        var a = document.getSelection();
        if (a) {
            var s = document.createRange();
            s.selectNodeContents(e), a.removeAllRanges(), a.addRange(s)
        }
    }

    function Rs() {
        var e = document.getSelection();
        e && e.removeAllRanges()
    }

    function Hs(e) {
        return vs(this, void 0, void 0, (function() {
            var a;
            return ws(this, (function(s) {
                if (a = "text/plain" in e, "undefined" == typeof ClipboardEvent && void 0 !== Ls.clipboardData && void 0 !== Ls.clipboardData.setData) {
                    if (!a) throw new Error("No `text/plain` value was specified.");
                    if (t = e["text/plain"], Ls.clipboardData.setData("Text", t)) return [2, !0];
                    throw new Error("Copying failed, possibly because the user rejected it.")
                }
                var t;
                return Is(e) || navigator.userAgent.indexOf("Edge") > -1 || Ms(document.body, e) || function(e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important"), a.textContent = "temporary element", document.body.appendChild(a);
                    var s = Ms(a, e);
                    return document.body.removeChild(a), s
                }(e) || function(e) {
                    var a = document.createElement("div");
                    a.setAttribute("style", "-webkit-user-select: text !important");
                    var s = a;
                    a.attachShadow && (s = a.attachShadow({
                        mode: "open"
                    }));
                    var t = document.createElement("span");
                    t.innerText = e, s.appendChild(t), document.body.appendChild(a), Os(t);
                    var n = document.execCommand("copy");
                    return Rs(), document.body.removeChild(a), n
                }(e["text/plain"]) ? [2, !0] : [2, !1]
            }))
        }))
    }

    function Ns(e, a, s) {
        try {
            Sa() && !(navigator.userAgent.toLowerCase().indexOf("firefox") > -1) && void 0 !== navigator.share && navigator.canShare && navigator.canShare(e) ? navigator.share(e) : function(e) {
                return vs(this, void 0, void 0, (function() {
                    return ws(this, (function(a) {
                        if (Es) return [2, Es(e)];
                        if (!Hs(function(e) {
                                var a = {};
                                return a["text/plain"] = e, a
                            }(e))) throw new Error("writeText() failed");
                        return [2]
                    }))
                }))
            }(e.text).then(a, s)
        } catch (e) {
            s()
        }
    }
    var Ps = document.createElement("template");
    Ps.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistics</h1>\n    <div id="statistics"></div>\n    <h1>Guess Distribution</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
    var Ds = document.createElement("template");
    Ds.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
    var $s = document.createElement("template");
    $s.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
    var Gs = document.createElement("template");
    
    //Gs.innerHTML = '\n  <div class="countdown">\n    <h1>Next WORDLE</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Share <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';

    Gs.innerHTML = '\n  <div class="countdown">\n    <button data-key="@" class="one-and-a-half" onClick="this.dispatchEvent(new KeyboardEvent( \'keydown\' , {\'key\':\'@\'} ));" >NEXT WORDLE</button>\n     </div>\n  <div class="share">\n    <button id="share-button">\n      Share <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';

    var Bs = {
            currentStreak: "Current Streak",
            maxStreak: "Max Streak",
            winPercentage: "Win %",
            gamesPlayed: "Played",
            gamesWon: "Won",
            averageGuesses: "Av. Guesses"
        },
        Vs = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t), o(m(e = a.call(this)), "stats", {}), o(m(e), "gameApp", void 0), e.attachShadow({
                    mode: "open"
                }), e.stats = Xa(), e
            }
            return n(t, [{
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(Ps.content.cloneNode(!0));
                    var a = this.shadowRoot.getElementById("statistics"),
                        s = this.shadowRoot.getElementById("guess-distribution"),
                        t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
                    if (Object.values(this.stats.guesses).every((function(e) {
                            return 0 === e
                        }))) {
                        var n = document.createElement("div");
                        n.classList.add("no-data"), n.innerText = "No Data", s.appendChild(n)
                    } else
                        for (var o = 1; o < Object.keys(this.stats.guesses).length; o++) {
                            var r = o,
                                i = this.stats.guesses[o],
                                l = $s.content.cloneNode(!0),
                                d = Math.max(7, Math.round(i / t * 100));
                            l.querySelector(".guess").textContent = r;
                            var c = l.querySelector(".graph-bar");
                            if (c.style.width = "".concat(d, "%"), "number" == typeof i) {
                                l.querySelector(".num-guesses").textContent = i, i > 0 && c.classList.add("align-right");
                                var u = parseInt(this.getAttribute("highlight-guess"), 10);
                                u && o === u && c.classList.add("highlight")
                            }
                            s.appendChild(l)
                        }
                    if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function(s) {
                            var t = Bs[s],
                                n = e.stats[s],
                                o = Ds.content.cloneNode(!0);
                            o.querySelector(".label").textContent = t, o.querySelector(".statistic").textContent = n, a.appendChild(o)
                        })), this.gameApp.gameStatus !== ls) {
                        var m = this.shadowRoot.querySelector(".footer"),
                            p = Gs.content.cloneNode(!0);
                        m.appendChild(p), this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function(a) {
                            a.preventDefault(), a.stopPropagation();
                            Ns(function(e) {
                                var a = e.evaluations,
                                    s = e.dayOffset-283, 
                                    t = e.rowIndex,
                                    n = e.isHardMode,
                                    o = e.isWin,
                                    r = JSON.parse(window.localStorage.getItem(j)),
                                    i = JSON.parse(window.localStorage.getItem(S)),
                                    l = "Hinglish Wordle NonStop ".concat(s);
                                l += " ".concat(o ? t : "X", "/").concat(6), n && (l += "*");
                                var d = "";
                                return a.forEach((function(e) {
                                    e && (e.forEach((function(e) {
                                        if (e) {
                                            var a = "";
                                            switch (e) {
                                                case Ha:
                                                    a = function(e) {
                                                        return e ? "🟧" : "🟩"
                                                    }(i);
                                                    break;
                                                case Ra:
                                                    a = function(e) {
                                                        return e ? "🟦" : "🟨"
                                                    }(i);
                                                    break;
                                                case Na:
                                                    a = function(e) {
                                                        return e ? "⬛" : "⬜"
                                                    }(r)
                                            }
                                            d += a
                                        }
                                    })), d += "\n")
                                })), {
                                    text: "".concat(l, "\n \n").concat(d.trimEnd()).concat("\n\n bit.ly/hinglishwordlens \n")
                                }
                            }({
                                evaluations: e.gameApp.evaluations,
                                dayOffset: e.gameApp.dayOffset,
                                rowIndex: e.gameApp.rowIndex,
                                isHardMode: e.gameApp.hardMode,
                                isWin: e.gameApp.gameStatus === ds
                            }), (function() {
                                e.gameApp.addToast("Copied results to clipboard", 2e3, !0)
                            }), (function() {
                                e.gameApp.addToast("Share failed", 2e3, !0)
                            }))
                        }))
                    }
                }
            }]), t
        }(u(HTMLElement));
    customElements.define("game-stats", Vs);
    var Fs = document.createElement("template"),
        Ws = [
        ].map((function(e) {
            return "\n    <a href=".concat(e.url, " id=").concat(e.id, '>\n      <div class="nav-item" style="--hover-color: var(--color-nav-hover)">\n        <span style="background-image: ').concat(e.backgroundImage, '; background-size: 20px;"class="nav-icon"></span>\n          ').concat(e.name, " \n      </div>\n    </a>\n    ")
        })).join(""),
        Ys = [
        ].map((function(e) {
            return "\n    <a href=".concat(e.url, " id=").concat(e.id, '>\n      <div class="nav-item" style="--hover-color: var(--color-nav-hover)">\n        <span style="background-image: ').concat(e.backgroundImage, '; background-size: 20px;"class="nav-icon"></span>\n          ').concat(e.name, " \n      </div>\n    </a>\n    ")
        })).join("");
    Fs.innerHTML = "\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: left;\n      justify-content: center;\n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    .nav-container {\n      flex: 1;\n    }\n\n    .nav-container .nav {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .nav-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    .game-list, .nyt-list {\n        list-style: none;\n        color: var(--color-tone-1);\n        padding: unset;\n        margin: unset;\n    }\n\n    .nyt-list {\n      margin-top: 5px;\n      padding: 12px 0px;\n      border-top: 1px solid #DCDCDC;\n    }\n\n    .nav-item {\n        display: flex;\n        justify-content: left;\n        align-items: center;\n        height: 40px;\n        font-weight: 500;\n        font-family: 'nyt-franklin';\n        font-size: 16px;\n        line-height: 16px;\n        padding-left: 18px;\n    }\n\n    .nav-item:hover {\n        background-color: var(--hover-color);\n    }\n\n    .nav-icon {\n        padding-bottom: 2px;\n        content: '';\n        height: 20px;\n        width: 28px;\n        padding-right: 8px;\n        display: inline-block;\n        vertical-align: middle;\n        background-repeat: no-repeat;\n    }\n\n    #nav {\n      padding-bottom: 10px;\n    }\n\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n\n    .more-text {\n        font-family: 'nyt-franklin-700';\n        font-weight: 700;\n        text-transform: uppercase;\n        font-size: 12px;\n        line-height: 12px;\n        margin: 32px 0px 24px 0px;\n        padding-left: 18px;\n    }\n\n    .nav-header {\n        padding-top: 18px;\n        padding-left: 18px;\n    }\n\n    .privacy {\n      letter-spacing: .5px;\n      font-family: 'nyt-franklin';\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      margin: 0px 25px 0px 17px;\n      padding: 12px 0px;\n      border-top: 1px solid #DCDCDC;\n      color: var(--color-tone-1);\n      font-size: 15px;\n      text-align: right;\n      display: flex;\n      justify-content: space-between;\n      align-items: flex-end;\n    }\n  </style>\n\n  <div class=\"container\">\n    <span class=\"nav-header\">\n        <nyt-icon></nyt-icon>\n    </span>\n    <span class=\"more-text\">Hinglish Wordle NonStop</span>\n   ";
    var Us = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), o(m(e = a.call(this)), "gameApp", void 0), e.attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(Fs.content.cloneNode(!0))
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-nav", Us);
    var Js = document.createElement("template");
    Js.innerHTML = "\n  <style>\n    .overlay-nav {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      z-index: ".concat(3e3, ';\n      background-color: transparent;\n      justify-content: left;\n      align-items: unset;\n    }\n\n    :host([open]) .overlay-nav {\n      display: flex;\n    }\n\n    .content-nav {\n      position: relative;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      overflow-y: auto;\n      animation: SlideRight 200ms;\n      max-width: var(--game-max-width);\n      box-sizing: border-box;\n      width: 100%;\n      border-radius: 0px;\n      box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.15);\n      max-height: calc(100% - var(--header-height) - 1px);\n      margin-top: calc(var(--header-height) + 1px);\n      padding: 0px;\n    }\n\n    @media (min-width: 415px) {\n      .content-nav {\n        width: 375px;\n      }\n    }\n\n    .content-nav.closing-nav {\n      animation: SlideLeft 200ms;\n    }\n\n    .close-icon-nav {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideRight {\n      0% {\n        transform: translateX(-100px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateX(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideLeft {\n      0% {\n        transform: translateX(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateX(-200px);\n      }\n    }\n  </style>\n  <div class="overlay-nav">\n    <div class="content-nav">\n      <slot></slot>\n      <div class="close-icon-nav">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
    var Xs = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Js.content.cloneNode(!0)), this.addEventListener("click", (function(a) {
                    e.shadowRoot.querySelector(".content-nav").classList.add("closing-nav")
                })), this.shadowRoot.addEventListener("animationend", (function(a) {
                    "SlideLeft" === a.animationName && (e.shadowRoot.querySelector(".content-nav").classList.remove("closing-nav"), e.removeChild(e.firstChild), e.removeAttribute("open"))
                }))
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-nav-modal", Xs);
    var Zs = document.createElement("template");
    Zs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
    var Ks = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(Zs.content.cloneNode(!0)), this.shadowRoot.querySelector(".container").addEventListener("click", (function(a) {
                    a.stopPropagation(), e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""), e.dispatchEvent(new CustomEvent("game-switch-change", {
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: e.getAttribute("name"),
                            checked: e.hasAttribute("checked"),
                            disabled: e.hasAttribute("disabled")
                        }
                    }))
                }))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["checked"]
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-switch", Ks);
    var Qs = document.createElement("template");
    Qs.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Guess the <strong>WORDLE</strong> in six tries. <strong>शब्द</strong> पता करें - छ: प्रयासों में </p>\n      <p>Each guess must be a valid five-letter Hinglish (Hindi, plus common English words such as PHOTO, PHONE etc.) word written using alphabets A - Z. Hit the enter button to submit.</p>\n  <p> हर अनुमानित शब्द पाँच अक्षर का होना चाहिए। कीबोर्ड द्वारा पाँच अक्षर टाइप करें, फिर ENTER बटन दबाए।   </p>\n    <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>\n  <p> हर प्रयास के बाद डब्बों के रंग बदल जाएंगे ताकि आपको मदद मिल सकें कि आप आज के शब्द के कितने करीब हैं। </p>\n    <div class="examples">\n        <p><strong>Examples उदाहरण </strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="b" evaluation="correct" reveal></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="h"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="n"></game-tile>\n          </div>\n          <p>The letter <strong>B</strong> is in the word and in the correct spot.</p>\n  <p> <strong>B</strong> अक्षर शब्द में है और सही जगह पर है। </p>\n      </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="v"></game-tile>\n            <game-tile letter="i" evaluation="present" reveal></game-tile>\n            <game-tile letter="n"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="y"></game-tile>\n          </div>\n          <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>\n  <p> <strong>I</strong> अक्षर शब्द में है और सही जगह पर नहीं है। </p>\n      </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="d"></game-tile>\n            <game-tile letter="h"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="n" evaluation="absent" reveal></game-tile>\n            <game-tile letter="g"></game-tile>\n          </div>\n          <p>The letter <strong>N</strong> is not in the word in any spot.</p>\n  <p> <strong>N</strong> अक्षर शब्द में नहीं है। </p>\n      </div>\n      </div>\n      <p><strong>A new WORDLE will be available on each refresh!<strong></p>\n <p> रिलोड करने पर एक नया शब्द खोजना होगा </p>\n   </div>\n  </section>\n';
    var et = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(Qs.content.cloneNode(!0))
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-help", et);
    var at = document.createElement("template");
    at.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
    var st = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.shadowRoot.appendChild(at.content.cloneNode(!0)), this.shadowRoot.querySelector("game-icon").addEventListener("click", (function(a) {
                    e.shadowRoot.querySelector(".overlay").classList.add("closing")
                })), this.shadowRoot.addEventListener("animationend", (function(a) {
                    "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"), Array.from(e.childNodes).forEach((function(a) {
                        e.removeChild(a)
                    })), e.removeAttribute("open"))
                }))
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("game-page", st);
    var tt = document.createElement("template");
    tt.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-1) />\n  </svg>\n';
    var nt = {
            help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
            settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
            backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
            close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
            share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
            statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
        },
        ot = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                return s(this, t), (e = a.call(this)).attachShadow({
                    mode: "open"
                }), e
            }
            return n(t, [{
                key: "connectedCallback",
                value: function() {
                    this.shadowRoot.appendChild(tt.content.cloneNode(!0));
                    var e = this.getAttribute("icon");
                    this.shadowRoot.querySelector("path").setAttribute("d", nt[e]), "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"), "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
                }
            }]), t
        }(u(HTMLElement));
    customElements.define("game-icon", ot);
    var rt = document.createElement("template");
    rt.innerHTML = '\n  <a href="https://kavishavi.github.io/hinglishwordlens/">\n  Hinglish Worldle Non-Stop</a> \n <BR/> <a href="https://kavishavi.github.io/hinglishwordle/">\n  Hinglish Worldle (Daily)</a>\n';
    
    /*
    var it = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(rt.content.cloneNode(!0))
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("nyt-icon", it);
    */
    
    var lt = document.createElement("template");
    lt.innerHTML = '\n<svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <rect x="0.172974" width="20" height="3" rx="1.5" fill=var(--color-tone-1) />\n    <rect x="0.172974" y="7" width="20" height="3" rx="1.5" fill=var(--color-tone-1) />\n    <rect x="0.172974" y="14" width="20" height="3" rx="1.5" fill=var(--color-tone-1) />\n</svg>\n';
    var dt = function(e) {
        r(t, e);
        var a = h(t);

        function t() {
            var e;
            return s(this, t), (e = a.call(this)).attachShadow({
                mode: "open"
            }), e
        }
        return n(t, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(lt.content.cloneNode(!0))
            }
        }]), t
    }(u(HTMLElement));
    customElements.define("nav-icon", dt);
    var ct = document.createElement("template");
    ct.innerHTML = '\n  <div id="timer"></div>\n';
    var ut = 6e4,
        mt = 36e5,
        pt = function(e) {
            r(t, e);
            var a = h(t);

            function t() {
                var e;
                s(this, t), o(m(e = a.call(this)), "targetEpochMS", void 0), o(m(e), "intervalId", void 0), o(m(e), "$timer", void 0), e.attachShadow({
                    mode: "open"
                });
                var n = new Date;
                return n.setDate(n.getDate() + 1), n.setHours(0, 0, 0, 0), e.targetEpochMS = n.getTime(), e
            }
            return n(t, [{
                key: "padDigit",
                value: function(e) {
                    return e.toString().padStart(2, "0")
                }
            }, {
                key: "updateTimer",
                value: function() {
                    var e, a = (new Date).getTime(),
                        s = Math.floor(this.targetEpochMS - a);
                        s = 30;
                    if (s <= 0) e = "00:00:00";
                    else {
                        var t = Math.floor(s % 864e5 / mt),
                            n = Math.floor(s % mt / ut),
                            o = Math.floor(s % ut / 1e3);
                        e = "".concat(this.padDigit(t), ":").concat(this.padDigit(n), ":").concat(this.padDigit(o))
                    }
                    this.$timer.textContent = e
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var e = this;
                    this.shadowRoot.appendChild(ct.content.cloneNode(!0)), this.$timer = this.shadowRoot.querySelector("#timer"), this.intervalId = setInterval((function() {
                        e.updateTimer()
                    }), 200)
                }
            }, {
                key: "disconnectedCallback",
                value: function() {
                    clearInterval(this.intervalId)
                }
            }]), t
        }(u(HTMLElement));
    return customElements.define("countdown-timer", pt), e.CountdownTimer = pt, e.GameApp = ms, e.GameHelp = et, e.GameIcon = ot, e.GameKeyboard = ks, e.GameModal = hs, e.GameNav = Us, e.GamePage = st, e.GameRow = x, e.GameSettings = Ta, e.GameStats = Vs, e.GameSwitch = Ks, e.GameThemeManager = C, e.GameTile = v, e.GameToast = Ia, e.NYTIcon = it, e.NavIcon = dt, e.NavModal = Xs, Object.defineProperty(e, "__esModule", {
        value: !0
    }), e
}({});
