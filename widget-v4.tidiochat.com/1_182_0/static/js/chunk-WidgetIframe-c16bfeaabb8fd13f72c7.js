(self.webpackChunktidio_widget_v4 = self.webpackChunktidio_widget_v4 || []).push([
    [864], {
        3890: function(e, t, n) {
            "use strict";
            n.d(t, {
                PZ: function() {
                    return p
                },
                iq: function() {
                    return f
                }
            });
            n(4555);
            var i = n(1914),
                o = n(6934),
                a = n(8010),
                r = n(2391),
                s = n(9233),
                l = n(9809),
                d = n(2584),
                A = n(9243);
            const c = (0, i.createContext)({
                    state: null,
                    dispatch: () => {},
                    iceCandidatesQueueRef: null
                }),
                u = (e, t) => {
                    switch (t.type) {
                        case "SET_OPERATOR_VIDEO_CALL_OFFER":
                            return t.payload;
                        case "RESET_OPERATOR_VIDEO_CALL_OFFER":
                            return null;
                        default:
                            return e
                    }
                },
                p = () => {
                    const e = (0, i.useContext)(c);
                    if (void 0 === e) throw new Error("useVideoCallOffer must be used within a VideoCallProvider");
                    const t = (0, o.I0)(),
                        n = e.dispatch,
                        {
                            state: a
                        } = e,
                        r = a ? .operatorId,
                        l = Boolean(a ? .offer);
                    return {
                        state: a,
                        resetVideoCall: (0, i.useCallback)((() => {
                            r && l && t((0, s.RFv)({
                                operatorId: r,
                                offer: null
                            })), n({
                                type: "RESET_OPERATOR_VIDEO_CALL_OFFER"
                            })
                        }), [n, t, r, l])
                    }
                },
                f = e => {
                    const t = (0, i.useContext)(c);
                    if (void 0 === t) throw new Error("useVideoCallOffer must be used within a VideoCallProvider");
                    const {
                        iceCandidatesQueueRef: n
                    } = t;
                    (0, i.useEffect)((() => a.Z.subscribe("operatorVideoCallIceCandidatesOffered", (t => {
                        t.iceCandidates.forEach((t => {
                            t && e(t)
                        }))
                    }))), [e]);
                    return {
                        popInitialOperatorIceCandidatesPool: (0, i.useCallback)((() => {
                            if (!n) return [];
                            const e = (0, d.Xh)(n.current);
                            return n.current = [], e
                        }), [n])
                    }
                };
            t.ZP = e => {
                let {
                    children: t
                } = e;
                const [n, d] = (0, i.useReducer)(u, null), p = (0, i.useRef)([]), f = (0, o.v9)(r.Xe), h = (0, o.I0)();
                (0, i.useEffect)((() => a.Z.subscribe("operatorVideoCallOffered", (e => {
                    e ? .offer ? (f !== l.G7.CHAT && h((0, s.kEi)(l.G7.CHAT)), d({
                        type: "SET_OPERATOR_VIDEO_CALL_OFFER",
                        payload: e
                    })) : (d({
                        type: "RESET_OPERATOR_VIDEO_CALL_OFFER"
                    }), p.current = [])
                }))), [f, h]), (0, i.useEffect)((() => a.Z.subscribe("operatorVideoCallIceCandidatesOffered", (e => {
                    e.iceCandidates.forEach((e => {
                        e && p.current.push(e)
                    }))
                }))), []);
                const m = (0, i.useMemo)((() => ({
                    state: n,
                    dispatch: d,
                    iceCandidatesQueueRef: p
                })), [n]);
                return (0, A.tZ)(c.Provider, {
                    value: m,
                    children: t
                })
            }
        },
        1837: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addImportantToDefaultStyles: function() {
                    return Ur
                },
                default: function() {
                    return Pr
                }
            });
            var i = n(4572),
                o = n(1914),
                a = n(6934),
                r = n(7400),
                s = n(8076),
                l = n(2009),
                d = n(5717),
                A = n(5796),
                c = n(565),
                u = n(860),
                p = n.n(u);

            function f() {
                return f = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }, f.apply(this, arguments)
            }

            function h(e, t) {
                if (null == e) return {};
                var n, i, o = {},
                    a = Object.keys(e);
                for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }

            function m(e, t) {
                return m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, m(e, t)
            }

            function g(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, m(e, t)
            }

            function C(e, t) {
                return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
            }
            var b = n(579),
                x = !1,
                v = o.createContext(null),
                w = function(e) {
                    return e.scrollTop
                },
                y = "unmounted",
                B = "exited",
                I = "entering",
                k = "entered",
                E = "exiting",
                S = function(e) {
                    function t(t, n) {
                        var i;
                        i = e.call(this, t, n) || this;
                        var o, a = n && !n.isMounting ? t.enter : t.appear;
                        return i.appearStatus = null, t.in ? a ? (o = B, i.appearStatus = I) : o = k : o = t.unmountOnExit || t.mountOnEnter ? y : B, i.state = {
                            status: o
                        }, i.nextCallback = null, i
                    }
                    g(t, e), t.getDerivedStateFromProps = function(e, t) {
                        return e.in && t.status === y ? {
                            status: B
                        } : null
                    };
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, n.componentDidUpdate = function(e) {
                        var t = null;
                        if (e !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== I && n !== k && (t = I) : n !== I && n !== k || (t = E)
                        }
                        this.updateStatus(!1, t)
                    }, n.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, n.getTimeouts = function() {
                        var e, t, n, i = this.props.timeout;
                        return e = t = n = i, null != i && "number" != typeof i && (e = i.exit, t = i.enter, n = void 0 !== i.appear ? i.appear : t), {
                            exit: e,
                            enter: t,
                            appear: n
                        }
                    }, n.updateStatus = function(e, t) {
                        if (void 0 === e && (e = !1), null !== t)
                            if (this.cancelNextCallback(), t === I) {
                                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                                    var n = this.props.nodeRef ? this.props.nodeRef.current : b.findDOMNode(this);
                                    n && w(n)
                                }
                                this.performEnter(e)
                            } else this.performExit();
                        else this.props.unmountOnExit && this.state.status === B && this.setState({
                            status: y
                        })
                    }, n.performEnter = function(e) {
                        var t = this,
                            n = this.props.enter,
                            i = this.context ? this.context.isMounting : e,
                            o = this.props.nodeRef ? [i] : [b.findDOMNode(this), i],
                            a = o[0],
                            r = o[1],
                            s = this.getTimeouts(),
                            l = i ? s.appear : s.enter;
                        !e && !n || x ? this.safeSetState({
                            status: k
                        }, (function() {
                            t.props.onEntered(a)
                        })) : (this.props.onEnter(a, r), this.safeSetState({
                            status: I
                        }, (function() {
                            t.props.onEntering(a, r), t.onTransitionEnd(l, (function() {
                                t.safeSetState({
                                    status: k
                                }, (function() {
                                    t.props.onEntered(a, r)
                                }))
                            }))
                        })))
                    }, n.performExit = function() {
                        var e = this,
                            t = this.props.exit,
                            n = this.getTimeouts(),
                            i = this.props.nodeRef ? void 0 : b.findDOMNode(this);
                        t && !x ? (this.props.onExit(i), this.safeSetState({
                            status: E
                        }, (function() {
                            e.props.onExiting(i), e.onTransitionEnd(n.exit, (function() {
                                e.safeSetState({
                                    status: B
                                }, (function() {
                                    e.props.onExited(i)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: B
                        }, (function() {
                            e.props.onExited(i)
                        }))
                    }, n.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, n.safeSetState = function(e, t) {
                        t = this.setNextCallback(t), this.setState(e, t)
                    }, n.setNextCallback = function(e) {
                        var t = this,
                            n = !0;
                        return this.nextCallback = function(i) {
                            n && (n = !1, t.nextCallback = null, e(i))
                        }, this.nextCallback.cancel = function() {
                            n = !1
                        }, this.nextCallback
                    }, n.onTransitionEnd = function(e, t) {
                        this.setNextCallback(t);
                        var n = this.props.nodeRef ? this.props.nodeRef.current : b.findDOMNode(this),
                            i = null == e && !this.props.addEndListener;
                        if (n && !i) {
                            if (this.props.addEndListener) {
                                var o = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                    a = o[0],
                                    r = o[1];
                                this.props.addEndListener(a, r)
                            }
                            null != e && setTimeout(this.nextCallback, e)
                        } else setTimeout(this.nextCallback, 0)
                    }, n.render = function() {
                        var e = this.state.status;
                        if (e === y) return null;
                        var t = this.props,
                            n = t.children,
                            i = (t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef, h(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return o.createElement(v.Provider, {
                            value: null
                        }, "function" == typeof n ? n(e, i) : o.cloneElement(o.Children.only(n), i))
                    }, t
                }(o.Component);

            function M() {}
            S.contextType = v, S.propTypes = {}, S.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: M,
                onEntering: M,
                onEntered: M,
                onExit: M,
                onExiting: M,
                onExited: M
            }, S.UNMOUNTED = y, S.EXITED = B, S.ENTERING = I, S.ENTERED = k, S.EXITING = E;
            var Z = S,
                R = function(e, t) {
                    return e && t && t.split(" ").forEach((function(t) {
                        return i = t, void((n = e).classList ? n.classList.remove(i) : "string" == typeof n.className ? n.className = C(n.className, i) : n.setAttribute("class", C(n.className && n.className.baseVal || "", i)));
                        var n, i
                    }))
                },
                T = function(e) {
                    function t() {
                        for (var t, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                        return (t = e.call.apply(e, [this].concat(i)) || this).appliedClasses = {
                            appear: {},
                            enter: {},
                            exit: {}
                        }, t.onEnter = function(e, n) {
                            var i = t.resolveArguments(e, n),
                                o = i[0],
                                a = i[1];
                            t.removeClasses(o, "exit"), t.addClass(o, a ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(e, n)
                        }, t.onEntering = function(e, n) {
                            var i = t.resolveArguments(e, n),
                                o = i[0],
                                a = i[1] ? "appear" : "enter";
                            t.addClass(o, a, "active"), t.props.onEntering && t.props.onEntering(e, n)
                        }, t.onEntered = function(e, n) {
                            var i = t.resolveArguments(e, n),
                                o = i[0],
                                a = i[1] ? "appear" : "enter";
                            t.removeClasses(o, a), t.addClass(o, a, "done"), t.props.onEntered && t.props.onEntered(e, n)
                        }, t.onExit = function(e) {
                            var n = t.resolveArguments(e)[0];
                            t.removeClasses(n, "appear"), t.removeClasses(n, "enter"), t.addClass(n, "exit", "base"), t.props.onExit && t.props.onExit(e)
                        }, t.onExiting = function(e) {
                            var n = t.resolveArguments(e)[0];
                            t.addClass(n, "exit", "active"), t.props.onExiting && t.props.onExiting(e)
                        }, t.onExited = function(e) {
                            var n = t.resolveArguments(e)[0];
                            t.removeClasses(n, "exit"), t.addClass(n, "exit", "done"), t.props.onExited && t.props.onExited(e)
                        }, t.resolveArguments = function(e, n) {
                            return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n]
                        }, t.getClassNames = function(e) {
                            var n = t.props.classNames,
                                i = "string" == typeof n,
                                o = i ? "" + (i && n ? n + "-" : "") + e : n[e];
                            return {
                                baseClassName: o,
                                activeClassName: i ? o + "-active" : n[e + "Active"],
                                doneClassName: i ? o + "-done" : n[e + "Done"]
                            }
                        }, t
                    }
                    g(t, e);
                    var n = t.prototype;
                    return n.addClass = function(e, t, n) {
                        var i = this.getClassNames(t)[n + "ClassName"],
                            o = this.getClassNames("enter").doneClassName;
                        "appear" === t && "done" === n && o && (i += " " + o), "active" === n && e && w(e), i && (this.appliedClasses[t][n] = i, function(e, t) {
                            e && t && t.split(" ").forEach((function(t) {
                                return i = t, void((n = e).classList ? n.classList.add(i) : function(e, t) {
                                    return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
                                }(n, i) || ("string" == typeof n.className ? n.className = n.className + " " + i : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + i)));
                                var n, i
                            }))
                        }(e, i))
                    }, n.removeClasses = function(e, t) {
                        var n = this.appliedClasses[t],
                            i = n.base,
                            o = n.active,
                            a = n.done;
                        this.appliedClasses[t] = {}, i && R(e, i), o && R(e, o), a && R(e, a)
                    }, n.render = function() {
                        var e = this.props,
                            t = (e.classNames, h(e, ["classNames"]));
                        return o.createElement(Z, f({}, t, {
                            onEnter: this.onEnter,
                            onEntered: this.onEntered,
                            onEntering: this.onEntering,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }))
                    }, t
                }(o.Component);
            T.defaultProps = {
                classNames: ""
            }, T.propTypes = {};
            var D = T,
                N = n(9243);
            const U = e => (0, N.tZ)(D, { ...e,
                in: e.in,
                timeout: e.timeout,
                classNames: e.classNames,
                mountOnEnter: !0,
                unmountOnExit: !0,
                appear: !0,
                children: e.children
            });
            U.defaultProps = {
                timeout: 200
            };
            var _ = U,
                L = n(2972),
                j = n.n(L);

            function O(e, t, n, i) {
                return new(n || (n = Promise))((function(o, a) {
                    function r(e) {
                        try {
                            l(i.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            l(i.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(r, s)
                    }
                    l((i = i.apply(e, t || [])).next())
                }))
            }

            function F(e, t) {
                var n, i, o, a, r = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function s(s) {
                    return function(l) {
                        return function(s) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a && (a = 0, s[0] && (r = 0)), r;) try {
                                if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done) return o;
                                switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        o = s;
                                        break;
                                    case 4:
                                        return r.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        r.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = r.ops.pop(), r.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = r.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                            r = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                            r.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && r.label < o[1]) {
                                            r.label = o[1], o = s;
                                            break
                                        }
                                        if (o && r.label < o[2]) {
                                            r.label = o[2], r.ops.push(s);
                                            break
                                        }
                                        o[2] && r.ops.pop(), r.trys.pop();
                                        continue
                                }
                                s = t.call(e, r)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, l])
                    }
                }
            }
            Object.create;

            function W(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var i, o, a = n.call(e),
                    r = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = a.next()).done;) r.push(i.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (n = a.return) && n.call(a)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return r
            }

            function z(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var i, o = 0, a = t.length; o < a; o++) !i && o in t || (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
                return e.concat(i || Array.prototype.slice.call(t))
            }
            Object.create;
            var P = new Map([
                ["aac", "audio/aac"],
                ["abw", "application/x-abiword"],
                ["arc", "application/x-freearc"],
                ["avif", "image/avif"],
                ["avi", "video/x-msvideo"],
                ["azw", "application/vnd.amazon.ebook"],
                ["bin", "application/octet-stream"],
                ["bmp", "image/bmp"],
                ["bz", "application/x-bzip"],
                ["bz2", "application/x-bzip2"],
                ["cda", "application/x-cdf"],
                ["csh", "application/x-csh"],
                ["css", "text/css"],
                ["csv", "text/csv"],
                ["doc", "application/msword"],
                ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
                ["eot", "application/vnd.ms-fontobject"],
                ["epub", "application/epub+zip"],
                ["gz", "application/gzip"],
                ["gif", "image/gif"],
                ["heic", "image/heic"],
                ["heif", "image/heif"],
                ["htm", "text/html"],
                ["html", "text/html"],
                ["ico", "image/vnd.microsoft.icon"],
                ["ics", "text/calendar"],
                ["jar", "application/java-archive"],
                ["jpeg", "image/jpeg"],
                ["jpg", "image/jpeg"],
                ["js", "text/javascript"],
                ["json", "application/json"],
                ["jsonld", "application/ld+json"],
                ["mid", "audio/midi"],
                ["midi", "audio/midi"],
                ["mjs", "text/javascript"],
                ["mp3", "audio/mpeg"],
                ["mp4", "video/mp4"],
                ["mpeg", "video/mpeg"],
                ["mpkg", "application/vnd.apple.installer+xml"],
                ["odp", "application/vnd.oasis.opendocument.presentation"],
                ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
                ["odt", "application/vnd.oasis.opendocument.text"],
                ["oga", "audio/ogg"],
                ["ogv", "video/ogg"],
                ["ogx", "application/ogg"],
                ["opus", "audio/opus"],
                ["otf", "font/otf"],
                ["png", "image/png"],
                ["pdf", "application/pdf"],
                ["php", "application/x-httpd-php"],
                ["ppt", "application/vnd.ms-powerpoint"],
                ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
                ["rar", "application/vnd.rar"],
                ["rtf", "application/rtf"],
                ["sh", "application/x-sh"],
                ["svg", "image/svg+xml"],
                ["swf", "application/x-shockwave-flash"],
                ["tar", "application/x-tar"],
                ["tif", "image/tiff"],
                ["tiff", "image/tiff"],
                ["ts", "video/mp2t"],
                ["ttf", "font/ttf"],
                ["txt", "text/plain"],
                ["vsd", "application/vnd.visio"],
                ["wav", "audio/wav"],
                ["weba", "audio/webm"],
                ["webm", "video/webm"],
                ["webp", "image/webp"],
                ["woff", "font/woff"],
                ["woff2", "font/woff2"],
                ["xhtml", "application/xhtml+xml"],
                ["xls", "application/vnd.ms-excel"],
                ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
                ["xml", "application/xml"],
                ["xul", "application/vnd.mozilla.xul+xml"],
                ["zip", "application/zip"],
                ["7z", "application/x-7z-compressed"],
                ["mkv", "video/x-matroska"],
                ["mov", "video/quicktime"],
                ["msg", "application/vnd.ms-outlook"]
            ]);

            function H(e, t) {
                var n = function(e) {
                    var t = e.name;
                    if (t && -1 !== t.lastIndexOf(".") && !e.type) {
                        var n = t.split(".").pop().toLowerCase(),
                            i = P.get(n);
                        i && Object.defineProperty(e, "type", {
                            value: i,
                            writable: !1,
                            configurable: !1,
                            enumerable: !0
                        })
                    }
                    return e
                }(e);
                if ("string" != typeof n.path) {
                    var i = e.webkitRelativePath;
                    Object.defineProperty(n, "path", {
                        value: "string" == typeof t ? t : "string" == typeof i && i.length > 0 ? i : e.name,
                        writable: !1,
                        configurable: !1,
                        enumerable: !0
                    })
                }
                return n
            }
            var q = [".DS_Store", "Thumbs.db"];

            function $(e) {
                return "object" == typeof e && null !== e
            }

            function Y(e) {
                return X(e.target.files).map((function(e) {
                    return H(e)
                }))
            }

            function G(e) {
                return O(this, void 0, void 0, (function() {
                    return F(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Promise.all(e.map((function(e) {
                                    return e.getFile()
                                })))];
                            case 1:
                                return [2, t.sent().map((function(e) {
                                    return H(e)
                                }))]
                        }
                    }))
                }))
            }

            function V(e, t) {
                return O(this, void 0, void 0, (function() {
                    var n;
                    return F(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return e.items ? (n = X(e.items).filter((function(e) {
                                    return "file" === e.kind
                                })), "drop" !== t ? [2, n] : [4, Promise.all(n.map(Q))]) : [3, 2];
                            case 1:
                                return [2, J(K(i.sent()))];
                            case 2:
                                return [2, J(X(e.files).map((function(e) {
                                    return H(e)
                                })))]
                        }
                    }))
                }))
            }

            function J(e) {
                return e.filter((function(e) {
                    return -1 === q.indexOf(e.name)
                }))
            }

            function X(e) {
                if (null === e) return [];
                for (var t = [], n = 0; n < e.length; n++) {
                    var i = e[n];
                    t.push(i)
                }
                return t
            }

            function Q(e) {
                if ("function" != typeof e.webkitGetAsEntry) return ee(e);
                var t = e.webkitGetAsEntry();
                return t && t.isDirectory ? ne(t) : ee(e)
            }

            function K(e) {
                return e.reduce((function(e, t) {
                    return z(z([], W(e), !1), W(Array.isArray(t) ? K(t) : [t]), !1)
                }), [])
            }

            function ee(e) {
                var t = e.getAsFile();
                if (!t) return Promise.reject("".concat(e, " is not a File"));
                var n = H(t);
                return Promise.resolve(n)
            }

            function te(e) {
                return O(this, void 0, void 0, (function() {
                    return F(this, (function(t) {
                        return [2, e.isDirectory ? ne(e) : ie(e)]
                    }))
                }))
            }

            function ne(e) {
                var t = e.createReader();
                return new Promise((function(e, n) {
                    var i = [];
                    ! function o() {
                        var a = this;
                        t.readEntries((function(t) {
                            return O(a, void 0, void 0, (function() {
                                var a, r, s;
                                return F(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            if (t.length) return [3, 5];
                                            l.label = 1;
                                        case 1:
                                            return l.trys.push([1, 3, , 4]), [4, Promise.all(i)];
                                        case 2:
                                            return a = l.sent(), e(a), [3, 4];
                                        case 3:
                                            return r = l.sent(), n(r), [3, 4];
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            s = Promise.all(t.map(te)), i.push(s), o(), l.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }))
                        }), (function(e) {
                            n(e)
                        }))
                    }()
                }))
            }

            function ie(e) {
                return O(this, void 0, void 0, (function() {
                    return F(this, (function(t) {
                        return [2, new Promise((function(t, n) {
                            e.file((function(n) {
                                var i = H(n, e.fullPath);
                                t(i)
                            }), (function(e) {
                                n(e)
                            }))
                        }))]
                    }))
                }))
            }
            var oe = n(4101);

            function ae(e) {
                return function(e) {
                    if (Array.isArray(e)) return ce(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Ae(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function re(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function se(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? re(Object(n), !0).forEach((function(t) {
                        le(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : re(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function le(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function de(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var i, o, a = [],
                        r = !0,
                        s = !1;
                    try {
                        for (n = n.call(e); !(r = (i = n.next()).done) && (a.push(i.value), !t || a.length !== t); r = !0);
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            r || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return a
                }(e, t) || Ae(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ae(e, t) {
                if (e) {
                    if ("string" == typeof e) return ce(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ce(e, t) : void 0
                }
            }

            function ce(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i
            }
            var ue = "file-invalid-type",
                pe = "file-too-large",
                fe = "file-too-small",
                he = "too-many-files",
                me = function(e) {
                    e = Array.isArray(e) && 1 === e.length ? e[0] : e;
                    var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
                    return {
                        code: ue,
                        message: "File type must be ".concat(t)
                    }
                },
                ge = function(e) {
                    return {
                        code: pe,
                        message: "File is larger than ".concat(e, " ").concat(1 === e ? "byte" : "bytes")
                    }
                },
                Ce = function(e) {
                    return {
                        code: fe,
                        message: "File is smaller than ".concat(e, " ").concat(1 === e ? "byte" : "bytes")
                    }
                },
                be = {
                    code: he,
                    message: "Too many files"
                };

            function xe(e, t) {
                var n = "application/x-moz-file" === e.type || (0, oe.Z)(e, t);
                return [n, n ? null : me(t)]
            }

            function ve(e, t, n) {
                if (we(e.size))
                    if (we(t) && we(n)) {
                        if (e.size > n) return [!1, ge(n)];
                        if (e.size < t) return [!1, Ce(t)]
                    } else {
                        if (we(t) && e.size < t) return [!1, Ce(t)];
                        if (we(n) && e.size > n) return [!1, ge(n)]
                    }
                return [!0, null]
            }

            function we(e) {
                return null != e
            }

            function ye(e) {
                return "function" == typeof e.isPropagationStopped ? e.isPropagationStopped() : void 0 !== e.cancelBubble && e.cancelBubble
            }

            function Be(e) {
                return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, (function(e) {
                    return "Files" === e || "application/x-moz-file" === e
                })) : !!e.target && !!e.target.files
            }

            function Ie(e) {
                e.preventDefault()
            }

            function ke() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                    return t.some((function(t) {
                        return !ye(e) && t && t.apply(void 0, [e].concat(i)), ye(e)
                    }))
                }
            }

            function Ee(e) {
                return "audio/*" === e || "video/*" === e || "image/*" === e || "text/*" === e || /\w+\/[-+.\w]+/g.test(e)
            }

            function Se(e) {
                return /^.*\.[\w]+$/.test(e)
            }
            var Me = ["children"],
                Ze = ["open"],
                Re = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
                Te = ["refKey", "onChange", "onClick"];

            function De(e) {
                return function(e) {
                    if (Array.isArray(e)) return _e(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Ue(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ne(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var i, o, a = [],
                        r = !0,
                        s = !1;
                    try {
                        for (n = n.call(e); !(r = (i = n.next()).done) && (a.push(i.value), !t || a.length !== t); r = !0);
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            r || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return a
                }(e, t) || Ue(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ue(e, t) {
                if (e) {
                    if ("string" == typeof e) return _e(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _e(e, t) : void 0
                }
            }

            function _e(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i
            }

            function Le(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function je(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Le(Object(n), !0).forEach((function(t) {
                        Oe(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Le(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Oe(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Fe(e, t) {
                if (null == e) return {};
                var n, i, o = function(e, t) {
                    if (null == e) return {};
                    var n, i, o = {},
                        a = Object.keys(e);
                    for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            var We = (0, o.forwardRef)((function(e, t) {
                var n = e.children,
                    i = He(Fe(e, Me)),
                    a = i.open,
                    r = Fe(i, Ze);
                return (0, o.useImperativeHandle)(t, (function() {
                    return {
                        open: a
                    }
                }), [a]), o.createElement(o.Fragment, null, n(je(je({}, r), {}, {
                    open: a
                })))
            }));
            We.displayName = "Dropzone";
            var ze = {
                disabled: !1,
                getFilesFromEvent: function(e) {
                    return O(this, void 0, void 0, (function() {
                        return F(this, (function(t) {
                            return $(e) && $(e.dataTransfer) ? [2, V(e.dataTransfer, e.type)] : function(e) {
                                return $(e) && $(e.target)
                            }(e) ? [2, Y(e)] : Array.isArray(e) && e.every((function(e) {
                                return "getFile" in e && "function" == typeof e.getFile
                            })) ? [2, G(e)] : [2, []]
                        }))
                    }))
                },
                maxSize: 1 / 0,
                minSize: 0,
                multiple: !0,
                maxFiles: 0,
                preventDropOnDocument: !0,
                noClick: !1,
                noKeyboard: !1,
                noDrag: !1,
                noDragEventsBubbling: !1,
                validator: null,
                useFsAccessApi: !0,
                autoFocus: !1
            };
            We.defaultProps = ze, We.propTypes = {
                children: j().func,
                accept: j().objectOf(j().arrayOf(j().string)),
                multiple: j().bool,
                preventDropOnDocument: j().bool,
                noClick: j().bool,
                noKeyboard: j().bool,
                noDrag: j().bool,
                noDragEventsBubbling: j().bool,
                minSize: j().number,
                maxSize: j().number,
                maxFiles: j().number,
                disabled: j().bool,
                getFilesFromEvent: j().func,
                onFileDialogCancel: j().func,
                onFileDialogOpen: j().func,
                useFsAccessApi: j().bool,
                autoFocus: j().bool,
                onDragEnter: j().func,
                onDragLeave: j().func,
                onDragOver: j().func,
                onDrop: j().func,
                onDropAccepted: j().func,
                onDropRejected: j().func,
                onError: j().func,
                validator: j().func
            };
            var Pe = {
                isFocused: !1,
                isFileDialogActive: !1,
                isDragActive: !1,
                isDragAccept: !1,
                isDragReject: !1,
                acceptedFiles: [],
                fileRejections: []
            };

            function He() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = je(je({}, ze), e),
                    n = t.accept,
                    i = t.disabled,
                    a = t.getFilesFromEvent,
                    r = t.maxSize,
                    s = t.minSize,
                    l = t.multiple,
                    d = t.maxFiles,
                    A = t.onDragEnter,
                    c = t.onDragLeave,
                    u = t.onDragOver,
                    p = t.onDrop,
                    f = t.onDropAccepted,
                    h = t.onDropRejected,
                    m = t.onFileDialogCancel,
                    g = t.onFileDialogOpen,
                    C = t.useFsAccessApi,
                    b = t.autoFocus,
                    x = t.preventDropOnDocument,
                    v = t.noClick,
                    w = t.noKeyboard,
                    y = t.noDrag,
                    B = t.noDragEventsBubbling,
                    I = t.onError,
                    k = t.validator,
                    E = (0, o.useMemo)((function() {
                        return function(e) {
                            if (we(e)) return Object.entries(e).reduce((function(e, t) {
                                var n = de(t, 2),
                                    i = n[0],
                                    o = n[1];
                                return [].concat(ae(e), [i], ae(o))
                            }), []).filter((function(e) {
                                return Ee(e) || Se(e)
                            })).join(",")
                        }(n)
                    }), [n]),
                    S = (0, o.useMemo)((function() {
                        return function(e) {
                            if (we(e)) {
                                var t = Object.entries(e).filter((function(e) {
                                    var t = de(e, 2),
                                        n = t[0],
                                        i = t[1],
                                        o = !0;
                                    return Ee(n) || (console.warn('Skipped "'.concat(n, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), o = !1), Array.isArray(i) && i.every(Se) || (console.warn('Skipped "'.concat(n, '" because an invalid file extension was provided.')), o = !1), o
                                })).reduce((function(e, t) {
                                    var n = de(t, 2),
                                        i = n[0],
                                        o = n[1];
                                    return se(se({}, e), {}, le({}, i, o))
                                }), {});
                                return [{
                                    description: "Files",
                                    accept: t
                                }]
                            }
                            return e
                        }(n)
                    }), [n]),
                    M = (0, o.useMemo)((function() {
                        return "function" == typeof g ? g : $e
                    }), [g]),
                    Z = (0, o.useMemo)((function() {
                        return "function" == typeof m ? m : $e
                    }), [m]),
                    R = (0, o.useRef)(null),
                    T = (0, o.useRef)(null),
                    D = Ne((0, o.useReducer)(qe, Pe), 2),
                    N = D[0],
                    U = D[1],
                    _ = N.isFocused,
                    L = N.isFileDialogActive,
                    j = (0, o.useRef)("undefined" != typeof window && window.isSecureContext && C && "showOpenFilePicker" in window),
                    O = function() {
                        !j.current && L && setTimeout((function() {
                            T.current && (T.current.files.length || (U({
                                type: "closeDialog"
                            }), Z()))
                        }), 300)
                    };
                (0, o.useEffect)((function() {
                    return window.addEventListener("focus", O, !1),
                        function() {
                            window.removeEventListener("focus", O, !1)
                        }
                }), [T, L, Z, j]);
                var F = (0, o.useRef)([]),
                    W = function(e) {
                        R.current && R.current.contains(e.target) || (e.preventDefault(), F.current = [])
                    };
                (0, o.useEffect)((function() {
                    return x && (document.addEventListener("dragover", Ie, !1), document.addEventListener("drop", W, !1)),
                        function() {
                            x && (document.removeEventListener("dragover", Ie), document.removeEventListener("drop", W))
                        }
                }), [R, x]), (0, o.useEffect)((function() {
                    return !i && b && R.current && R.current.focus(),
                        function() {}
                }), [R, b, i]);
                var z = (0, o.useCallback)((function(e) {
                        I ? I(e) : console.error(e)
                    }), [I]),
                    P = (0, o.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), ne(e), F.current = [].concat(De(F.current), [e.target]), Be(e) && Promise.resolve(a(e)).then((function(t) {
                            if (!ye(e) || B) {
                                var n = t.length,
                                    i = n > 0 && function(e) {
                                        var t = e.files,
                                            n = e.accept,
                                            i = e.minSize,
                                            o = e.maxSize,
                                            a = e.multiple,
                                            r = e.maxFiles,
                                            s = e.validator;
                                        return !(!a && t.length > 1 || a && r >= 1 && t.length > r) && t.every((function(e) {
                                            var t = de(xe(e, n), 1)[0],
                                                a = de(ve(e, i, o), 1)[0],
                                                r = s ? s(e) : null;
                                            return t && a && !r
                                        }))
                                    }({
                                        files: t,
                                        accept: E,
                                        minSize: s,
                                        maxSize: r,
                                        multiple: l,
                                        maxFiles: d,
                                        validator: k
                                    });
                                U({
                                    isDragAccept: i,
                                    isDragReject: n > 0 && !i,
                                    isDragActive: !0,
                                    type: "setDraggedFiles"
                                }), A && A(e)
                            }
                        })).catch((function(e) {
                            return z(e)
                        }))
                    }), [a, A, z, B, E, s, r, l, d, k]),
                    H = (0, o.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), ne(e);
                        var t = Be(e);
                        if (t && e.dataTransfer) try {
                            e.dataTransfer.dropEffect = "copy"
                        } catch (e) {}
                        return t && u && u(e), !1
                    }), [u, B]),
                    q = (0, o.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), ne(e);
                        var t = F.current.filter((function(e) {
                                return R.current && R.current.contains(e)
                            })),
                            n = t.indexOf(e.target); - 1 !== n && t.splice(n, 1), F.current = t, t.length > 0 || (U({
                            type: "setDraggedFiles",
                            isDragActive: !1,
                            isDragAccept: !1,
                            isDragReject: !1
                        }), Be(e) && c && c(e))
                    }), [R, c, B]),
                    $ = (0, o.useCallback)((function(e, t) {
                        var n = [],
                            i = [];
                        e.forEach((function(e) {
                            var t = Ne(xe(e, E), 2),
                                o = t[0],
                                a = t[1],
                                l = Ne(ve(e, s, r), 2),
                                d = l[0],
                                A = l[1],
                                c = k ? k(e) : null;
                            if (o && d && !c) n.push(e);
                            else {
                                var u = [a, A];
                                c && (u = u.concat(c)), i.push({
                                    file: e,
                                    errors: u.filter((function(e) {
                                        return e
                                    }))
                                })
                            }
                        })), (!l && n.length > 1 || l && d >= 1 && n.length > d) && (n.forEach((function(e) {
                            i.push({
                                file: e,
                                errors: [be]
                            })
                        })), n.splice(0)), U({
                            acceptedFiles: n,
                            fileRejections: i,
                            type: "setFiles"
                        }), p && p(n, i, t), i.length > 0 && h && h(i, t), n.length > 0 && f && f(n, t)
                    }), [U, l, E, s, r, d, p, f, h, k]),
                    Y = (0, o.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), ne(e), F.current = [], Be(e) && Promise.resolve(a(e)).then((function(t) {
                            ye(e) && !B || $(t, e)
                        })).catch((function(e) {
                            return z(e)
                        })), U({
                            type: "reset"
                        })
                    }), [a, $, z, B]),
                    G = (0, o.useCallback)((function() {
                        if (j.current) {
                            U({
                                type: "openDialog"
                            }), M();
                            var e = {
                                multiple: l,
                                types: S
                            };
                            window.showOpenFilePicker(e).then((function(e) {
                                return a(e)
                            })).then((function(e) {
                                $(e, null), U({
                                    type: "closeDialog"
                                })
                            })).catch((function(e) {
                                var t;
                                (t = e) instanceof DOMException && ("AbortError" === t.name || t.code === t.ABORT_ERR) ? (Z(e), U({
                                    type: "closeDialog"
                                })) : ! function(e) {
                                    return e instanceof DOMException && ("SecurityError" === e.name || e.code === e.SECURITY_ERR)
                                }(e) ? z(e) : (j.current = !1, T.current ? (T.current.value = null, T.current.click()) : z(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
                            }))
                        } else T.current && (U({
                            type: "openDialog"
                        }), M(), T.current.value = null, T.current.click())
                    }), [U, M, Z, C, $, z, S, l]),
                    V = (0, o.useCallback)((function(e) {
                        R.current && R.current.isEqualNode(e.target) && (" " !== e.key && "Enter" !== e.key && 32 !== e.keyCode && 13 !== e.keyCode || (e.preventDefault(), G()))
                    }), [R, G]),
                    J = (0, o.useCallback)((function() {
                        U({
                            type: "focus"
                        })
                    }), []),
                    X = (0, o.useCallback)((function() {
                        U({
                            type: "blur"
                        })
                    }), []),
                    Q = (0, o.useCallback)((function() {
                        v || (! function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
                            return function(e) {
                                return -1 !== e.indexOf("MSIE") || -1 !== e.indexOf("Trident/")
                            }(e) || function(e) {
                                return -1 !== e.indexOf("Edge/")
                            }(e)
                        }() ? G() : setTimeout(G, 0))
                    }), [v, G]),
                    K = function(e) {
                        return i ? null : e
                    },
                    ee = function(e) {
                        return w ? null : K(e)
                    },
                    te = function(e) {
                        return y ? null : K(e)
                    },
                    ne = function(e) {
                        B && e.stopPropagation()
                    },
                    ie = (0, o.useMemo)((function() {
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.refKey,
                                n = void 0 === t ? "ref" : t,
                                o = e.role,
                                a = e.onKeyDown,
                                r = e.onFocus,
                                s = e.onBlur,
                                l = e.onClick,
                                d = e.onDragEnter,
                                A = e.onDragOver,
                                c = e.onDragLeave,
                                u = e.onDrop,
                                p = Fe(e, Re);
                            return je(je(Oe({
                                onKeyDown: ee(ke(a, V)),
                                onFocus: ee(ke(r, J)),
                                onBlur: ee(ke(s, X)),
                                onClick: K(ke(l, Q)),
                                onDragEnter: te(ke(d, P)),
                                onDragOver: te(ke(A, H)),
                                onDragLeave: te(ke(c, q)),
                                onDrop: te(ke(u, Y)),
                                role: "string" == typeof o && "" !== o ? o : "presentation"
                            }, n, R), i || w ? {} : {
                                tabIndex: 0
                            }), p)
                        }
                    }), [R, V, J, X, Q, P, H, q, Y, w, y, i]),
                    oe = (0, o.useCallback)((function(e) {
                        e.stopPropagation()
                    }), []),
                    re = (0, o.useMemo)((function() {
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.refKey,
                                n = void 0 === t ? "ref" : t,
                                i = e.onChange,
                                o = e.onClick,
                                a = Fe(e, Te);
                            return je(je({}, Oe({
                                accept: E,
                                multiple: l,
                                type: "file",
                                style: {
                                    display: "none"
                                },
                                onChange: K(ke(i, Y)),
                                onClick: K(ke(o, oe)),
                                tabIndex: -1
                            }, n, T)), a)
                        }
                    }), [T, n, l, Y, i]);
                return je(je({}, N), {}, {
                    isFocused: _ && !i,
                    getRootProps: ie,
                    getInputProps: re,
                    rootRef: R,
                    inputRef: T,
                    open: K(G)
                })
            }

            function qe(e, t) {
                switch (t.type) {
                    case "focus":
                        return je(je({}, e), {}, {
                            isFocused: !0
                        });
                    case "blur":
                        return je(je({}, e), {}, {
                            isFocused: !1
                        });
                    case "openDialog":
                        return je(je({}, Pe), {}, {
                            isFileDialogActive: !0
                        });
                    case "closeDialog":
                        return je(je({}, e), {}, {
                            isFileDialogActive: !1
                        });
                    case "setDraggedFiles":
                        return je(je({}, e), {}, {
                            isDragActive: t.isDragActive,
                            isDragAccept: t.isDragAccept,
                            isDragReject: t.isDragReject
                        });
                    case "setFiles":
                        return je(je({}, e), {}, {
                            acceptedFiles: t.acceptedFiles,
                            fileRejections: t.fileRejections
                        });
                    case "reset":
                        return je({}, Pe);
                    default:
                        return e
                }
            }

            function $e() {}
            var Ye = n(2124),
                Ge = function() {
                    var e = {
                            base: "https://twemoji.maxcdn.com/v/13.1.1/",
                            ext: ".png",
                            size: "72x72",
                            className: "emoji",
                            convert: {
                                fromCodePoint: function(e) {
                                    var t = "string" == typeof e ? parseInt(e, 16) : e;
                                    if (t < 65536) return s(t);
                                    return s(55296 + ((t -= 65536) >> 10), 56320 + (1023 & t))
                                },
                                toCodePoint: g
                            },
                            onerror: function() {
                                this.parentNode && this.parentNode.replaceChild(l(this.alt, !1), this)
                            },
                            parse: function(t, n) {
                                n && "function" != typeof n || (n = {
                                    callback: n
                                });
                                return ("string" == typeof t ? p : u)(t, {
                                    callback: n.callback || d,
                                    attributes: "function" == typeof n.attributes ? n.attributes : h,
                                    base: "string" == typeof n.base ? n.base : e.base,
                                    ext: n.ext || e.ext,
                                    size: n.folder || (i = n.size || e.size, "number" == typeof i ? i + "x" + i : i),
                                    className: n.className || e.className,
                                    onerror: n.onerror || e.onerror
                                });
                                var i
                            },
                            replace: m,
                            test: function(e) {
                                n.lastIndex = 0;
                                var t = n.test(e);
                                return n.lastIndex = 0, t
                            }
                        },
                        t = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            "'": "&#39;",
                            '"': "&quot;"
                        },
                        n = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[\xa9\xae\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
                        i = /\uFE0F/g,
                        o = String.fromCharCode(8205),
                        a = /[&<>'"]/g,
                        r = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
                        s = String.fromCharCode;
                    return e;

                    function l(e, t) {
                        return document.createTextNode(t ? e.replace(i, "") : e)
                    }

                    function d(e, t) {
                        return "".concat(t.base, t.size, "/", e, t.ext)
                    }

                    function A(e, t) {
                        for (var n, i, o = e.childNodes, a = o.length; a--;) 3 === (i = (n = o[a]).nodeType) ? t.push(n) : 1 !== i || "ownerSVGElement" in n || r.test(n.nodeName.toLowerCase()) || A(n, t);
                        return t
                    }

                    function c(e) {
                        return g(e.indexOf(o) < 0 ? e.replace(i, "") : e)
                    }

                    function u(e, t) {
                        for (var i, o, a, r, s, d, u, p, f, h, m, g, C, b = A(e, []), x = b.length; x--;) {
                            for (a = !1, r = document.createDocumentFragment(), d = (s = b[x]).nodeValue, p = 0; u = n.exec(d);) {
                                if ((f = u.index) !== p && r.appendChild(l(d.slice(p, f), !0)), g = c(m = u[0]), p = f + m.length, C = t.callback(g, t), g && C) {
                                    for (o in (h = new Image).onerror = t.onerror, h.setAttribute("draggable", "false"), i = t.attributes(m, g)) i.hasOwnProperty(o) && 0 !== o.indexOf("on") && !h.hasAttribute(o) && h.setAttribute(o, i[o]);
                                    h.className = t.className, h.alt = m, h.src = C, a = !0, r.appendChild(h)
                                }
                                h || r.appendChild(l(m, !1)), h = null
                            }
                            a && (p < d.length && r.appendChild(l(d.slice(p), !0)), s.parentNode.replaceChild(r, s))
                        }
                        return e
                    }

                    function p(e, t) {
                        return m(e, (function(e) {
                            var n, i, o = e,
                                r = c(e),
                                s = t.callback(r, t);
                            if (r && s) {
                                for (i in o = "<img ".concat('class="', t.className, '" ', 'draggable="false" ', 'alt="', e, '"', ' src="', s, '"'), n = t.attributes(e, r)) n.hasOwnProperty(i) && 0 !== i.indexOf("on") && -1 === o.indexOf(" " + i + "=") && (o = o.concat(" ", i, '="', n[i].replace(a, f), '"'));
                                o = o.concat("/>")
                            }
                            return o
                        }))
                    }

                    function f(e) {
                        return t[e]
                    }

                    function h() {
                        return null
                    }

                    function m(e, t) {
                        return String(e).replace(n, t)
                    }

                    function g(e, t) {
                        for (var n = [], i = 0, o = 0, a = 0; a < e.length;) i = e.charCodeAt(a++), o ? (n.push((65536 + (o - 55296 << 10) + (i - 56320)).toString(16)), o = 0) : 55296 <= i && i <= 56319 ? o = i : n.push(i.toString(16));
                        return n.join(t || "-")
                    }
                }(),
                Ve = Ge,
                Je = n(7857);
            const Xe = {
                "": ["<em>", "</em>"],
                _: ["<strong>", "</strong>"],
                "*": ["<strong>", "</strong>"],
                "~": ["<s>", "</s>"],
                "\n": ["<br />"],
                " ": ["<br />"],
                "-": ["<hr />"]
            };

            function Qe(e) {
                return e.replace(RegExp("^" + (e.match(/^(\t| )+/) || "")[0], "gm"), "")
            }

            function Ke(e) {
                return (e + "").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function et(e, t) {
                let n, i, o, a, r, s = /((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,
                    l = [],
                    d = "",
                    A = t || {},
                    c = 0;

                function u(e) {
                    let t = Xe[e[1] || ""],
                        n = l[l.length - 1] == e;
                    return t ? t[1] ? (n ? l.pop() : l.push(e), t[0 | n]) : t[0] : e
                }

                function p() {
                    let e = "";
                    for (; l.length;) e += u(l[l.length - 1]);
                    return e
                }
                for (e = (e = e.replace(/\\([*_[\]{}`<>()#+\-!|.])/g, (e => `&%${e.charCodeAt(1)}%;`))).replace(/^\[(.+?)\]:\s*(.+)$/gm, ((e, t, n) => (A[t.toLowerCase()] = n, ""))).replace(/^\n+|\n+$/g, ""); o = s.exec(e);) i = e.substring(c, o.index), c = s.lastIndex, n = o[0], i.match(/[^\\](\\\\)*\\$/) || ((r = o[3] || o[4]) ? n = '<pre class="code ' + (o[4] ? "poetry" : o[2].toLowerCase()) + '"><code' + (o[2] ? ` class="language-${o[2].toLowerCase()}"` : "") + ">" + Qe(Ke(r).replace(/^\n+|\n+$/g, "")) + "</code></pre>" : (r = o[6]) ? (r.match(/\./) && (o[5] = o[5].replace(/^\d+/gm, "")), a = et(Qe(o[5].replace(/^\s*[>*+.-]/gm, ""))), ">" == r ? r = "blockquote" : (r = r.match(/\./) ? "ol" : "ul", a = a.replace(/^(.*)(\n|$)/gm, "<li>$1</li>")), n = "<" + r + ">" + a + "</" + r + ">") : o[8] ? n = `<img src="${Ke(o[8])}" alt="${Ke(o[7])}">` : o[10] ? (d = d.replace("<a>", `<a href="${Ke(o[11]||A[i.toLowerCase()])}">`), n = p() + "</a>") : o[9] ? n = "<a>" : o[12] || o[14] ? (r = "h" + (o[14] ? o[14].length : o[13] > "=" ? 1 : 2), n = "<" + r + ">" + et(o[12] || o[15], A) + "</" + r + ">") : o[16] ? n = "<code>" + Ke(o[16]) + "</code>" : (o[17] || o[1]) && (n = u(o[17] || "--"))), d += i, d += n;
                return (d + e.substring(c).replace(/&%[0-9]+%;/g, (e => String.fromCharCode(+e.substring(2, e.length - 2)))) + p()).replace(/^\n+|\n+$/g, "")
            }
            const tt = {
                    ALLOWED_TAGS: ["img"],
                    ALLOWED_ATTR: ["class", "src", "alt"]
                },
                nt = {
                    ALLOWED_TAGS: ["img", "a", "strong", "br", "ol", "ul", "li"],
                    ALLOWED_ATTR: ["class", "href", "target", "src", "alt", "rel"]
                },
                it = {
                    ALLOWED_TAGS: ["img", "a"],
                    ALLOWED_ATTR: ["class", "href", "target", "src", "alt"]
                },
                ot = e => e.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                at = {
                    base: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.1/"
                },
                rt = e => {
                    let t;
                    return t = e.replace(/((?:href|src)=['"])?(\b(https?|ftp):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;()$'[\]*]*[-A-Z0-9+&@#/%=~_|])/gim, ((e, t) => void 0 !== t ? e : `<a href="${e}" target="_blank" rel="noopener noreferrer">${e}</a>`)), t = t.replace(/(^|\s|strong>|li>)(([a-zA-Z0-9-_.+])+@[a-zA-Z0-9_]+?(\.[a-zA-Z]{2,})+)/gim, '$1<a href="mailto:$2" target="_blank" rel="noopener noreferrer">$2</a>'), t = t.replace(/(^|\s|strong>|li>)(www\.[\w.,@?^=%&:/]+(\b|$))/gim, '$1<a href="http://$2" target="_blank" rel="noopener noreferrer">$2</a>'), t
                },
                st = e => {
                    if ("string" != typeof e) return "";
                    let t = ot(e);
                    return t = rt(t), t = Ve.parse(t, at), t = (e => (0, Je.sanitize)(e, it))(t), t
                },
                lt = e => {
                    if ("string" != typeof e) return "";
                    let t = ot(e);
                    return t = t.replace(/\n(?!\d.|-|\*)/g, "<br>"), t = t.replace(/_/g, "&#95;"), t = et(t), t = t.replace(/<br>/g, "\n"), t = t.replace(/(<a href="undefined">)([^<]*)(<\/a>)/g, "[$2]"), t = t.replace(/<a href/g, '<a target="_blank" rel="noopener nofollow" href'), t = Ve.parse(t, at), t = rt(t), t = (0, Je.sanitize)(t, nt), t
                },
                dt = e => {
                    if ("string" != typeof e) return "";
                    let t = ot(e);
                    return t = Ve.parse(t, at), t = (0, Je.sanitize)(t, tt), t
                },
                At = e => {
                    const t = e.values.reduce(((e, t) => ({ ...e,
                        [t]: (0, Ye.dW)(t)
                    })), {});
                    return e.render(t)
                };
            At.propTypes = {
                values: j().arrayOf(j().string).isRequired,
                render: j().func.isRequired
            };
            const ct = e => {
                const {
                    value: t,
                    children: n,
                    replacements: i,
                    fallback: a,
                    linkify: r,
                    emojify: s,
                    markdownify: l
                } = e, [, d] = (0, o.useState)(0), A = () => {
                    d((e => !e))
                };
                return (0, o.useEffect)((() => (Ye.Up.on("translationsChanged", A), () => {
                    Ye.Up.off("translationsChanged", A)
                })), []), n ? (0, N.tZ)(At, {
                    values: t,
                    render: n
                }) : i ? (0, N.tZ)(N.HY, {
                    children: (0, Ye.dW)(t, i, a)
                }) : l ? (0, N.tZ)("span", {
                    dangerouslySetInnerHTML: {
                        __html: lt((0, Ye.dW)(t, null, a))
                    }
                }) : r || s ? (0, N.tZ)("span", {
                    dangerouslySetInnerHTML: {
                        __html: st((0, Ye.dW)(t, null, a))
                    }
                }) : (0, N.tZ)(N.HY, {
                    children: (0, Ye.dW)(t, null, a)
                })
            };
            ct.defaultProps = {
                fallback: null,
                replacements: null,
                emojify: !1,
                linkify: !1,
                markdownify: !1,
                children: void 0
            };
            var ut = ct,
                pt = n(2584);
            const ft = e => (0, N.tZ)("div", {
                className: e.className ? e.className : void 0,
                style: e.avatarSrc ? {
                    backgroundImage: `url(${(0,pt.XH)(e.avatarSrc)})`
                } : void 0,
                children: e.name && (0, N.tZ)("span", {
                    children: e.name
                })
            });
            var ht = o.memo(ft);
            var mt = e => {
                    let {
                        operators: t
                    } = e;
                    const n = t.slice(0, 4);
                    return (0, N.BX)(N.HY, {
                        children: [(0, N.tZ)("div", {
                            className: `avatars-wrapper operators-avatar-${n.length>3?"4":n.length}`,
                            children: n.map((e => (0, N.tZ)(ht, {
                                className: "header-ava",
                                avatarSrc: e.avatarSrc
                            }, e.id)))
                        }), (0, N.tZ)("h2", {
                            className: "oneline",
                            children: (0, N.tZ)(ut, {
                                value: "newWidgetHeaderText",
                                fallback: "\xa0",
                                emojify: !0
                            })
                        })]
                    })
                },
                gt = (n(4555), n(9503));
            var Ct = e => {
                let {
                    operators: t,
                    assignedOperators: n
                } = e;
                const i = n.map((e => t.find((t => t.id === e)))).filter((e => void 0 !== e)).slice(0, 4),
                    o = (e => {
                        try {
                            let t = "";
                            if (e.length > 1) {
                                const n = e.map((e => e.name)),
                                    i = n.splice(-2).join(` ${(0,Ye.dW)("widgetHeaderAnd",null,"and")} `);
                                n.push(i), t = n.join(", ")
                            } else t = e[0].name;
                            return t.trim() ? t : "\xa0"
                        } catch (e) {
                            return (0, gt.G)(e), "\xa0"
                        }
                    })(i);
                return (0, N.BX)(N.HY, {
                    children: [(0, N.tZ)("div", {
                        className: `avatars-wrapper operators-avatar-${n.length>3?"4":n.length}`,
                        children: i.map((e => (0, N.tZ)(ht, {
                            className: "header-ava",
                            avatarSrc: e.avatarSrc
                        }, e.id)))
                    }), (0, N.BX)("h2", {
                        className: "twolines",
                        children: [(0, N.BX)("span", {
                            className: "top-heading",
                            children: [(0, N.tZ)(ut, {
                                value: "chatWith",
                                fallback: "Chat with"
                            }), " "]
                        }), o]
                    }), (0, N.BX)("span", {
                        className: "heading-hover",
                        children: [(0, N.tZ)(ut, {
                            value: "chatWith",
                            fallback: "Chat with"
                        }), " ", o]
                    })]
                })
            };
            var bt = e => {
                let {
                    customAvatar: t
                } = e;
                return (0, N.BX)(N.HY, {
                    children: [(0, N.tZ)("div", {
                        className: "avatars-wrapper operators-avatar-1",
                        children: (0, N.tZ)(ht, {
                            className: `header-ava ${t}`,
                            avatarSrc: t
                        }, 1)
                    }), (0, N.tZ)("h2", {
                        className: "oneline",
                        children: (0, N.tZ)(ut, {
                            value: "newWidgetHeaderText",
                            fallback: "\xa0",
                            emojify: !0
                        })
                    })]
                })
            };
            const xt = (0, o.forwardRef)(((e, t) => {
                let {
                    widgetColor: n,
                    isProjectOnline: i
                } = e;
                if (i && !(0, Ye.dW)("weAreOnline") || !i && !(0, Ye.dW)("alwaysOnlineTopBar")) return (0, N.tZ)("div", {
                    ref: t,
                    className: "offline-message",
                    style: {
                        height: 0,
                        padding: 0
                    }
                });
                const o = n[0] !== n[1] ? `linear-gradient(135deg, ${(0,pt.a7)(n[0],.72)} 0%, ${(0,pt.a7)(n[1],.72)} 100%)` : (0, pt.a7)((0, pt.g6)(n[0], -.1), .72);
                return (0, N.tZ)("div", {
                    ref: t,
                    className: "offline-message",
                    style: {
                        ["" + (o.includes("linear-gradient") ? "backgroundImage" : "backgroundColor")]: o
                    },
                    children: i ? (0, N.tZ)("span", {
                        className: "online",
                        children: (0, N.tZ)(ut, {
                            value: "weAreOnline",
                            emojify: !0
                        })
                    }) : (0, N.tZ)("span", {
                        children: (0, N.tZ)(ut, {
                            value: "alwaysOnlineTopBar",
                            emojify: !0
                        })
                    })
                })
            }));
            var vt = xt,
                wt = n(4841),
                yt = n(9233),
                Bt = n(2391),
                It = n(4818),
                kt = n(5110),
                Et = n(9809);
            var St = {
                name: "1s5t5ku",
                styles: "span{background:#fff;padding:6px 8px;border-radius:2px;box-shadow:0 2px 8px 0 rgba(0, 18, 46, 0.32);font-size:13px;position:absolute;opacity:0;pointer-events:none;white-space:nowrap;transition:all 0.16s ease-in-out;z-index:1;right:calc(100% + 10px);top:50%;transform:translate(5px,-50%);color:#06132b;}@media (hover: hover){&:hover{span{opacity:1;transform:translate(0,-50%);}}}"
            };
            var Mt = () => {
                    const e = (0, a.I0)(),
                        t = (0, a.v9)((e => e.showOptionsDropdown)),
                        n = (0, a.v9)((e => e.notificationSnoozed)),
                        i = (0, a.v9)(Bt.bP),
                        r = (0, a.v9)(Bt.aI),
                        s = (0, a.v9)(Bt.Us),
                        l = (0, a.v9)((e => e.isSoundEnabled)),
                        d = (0, a.v9)((e => e.chatOptions)),
                        A = (0, a.v9)(Bt.Xe),
                        c = (0, a.v9)(Bt.U1),
                        u = (0, a.v9)(Bt.Xf),
                        p = (0, a.v9)((e => e.isMobile)),
                        [f] = (0, o.useState)(n),
                        h = (0, o.useCallback)((() => {
                            e((0, yt.num)())
                        }), [e]),
                        m = (0, o.useCallback)((() => {
                            e((0, yt.sdi)(!1)), e((0, yt.b2X)(!n))
                        }), [n, e]),
                        g = (0, o.useCallback)((() => {
                            if (e((0, yt.SnQ)(kt.M.rateConversationClicked)), e((0, yt.sdi)(!1)), i || s) {
                                const t = r ? (0, Ye.dW)("disabledTextInputPlaceholder", null, "Choose one of the options above \u261d\ufe0f") : (0, Ye.dW)("newMessageDisabledAlert", null, "Please enter your email first.");
                                e((0, yt.wp$)(t))
                            } else h()
                        }), [e, i, s, r, h]),
                        C = (0, o.useCallback)((t => {
                            e((0, yt.sdi)(t))
                        }), [e]),
                        b = () => l,
                        x = () => A !== It.views.welcome && !1 !== d ? .rate;
                    return (0, N.BX)(N.HY, {
                        children: [(b() || x()) && (0, N.BX)("button", {
                            className: "material-icons options ripple",
                            onClick: n => {
                                !(0 === n.nativeEvent.pageX && 0 === n.nativeEvent.pageY) && t && n.currentTarget.blur(), e((0, yt.SnQ)(kt.M.optionsButtonClicked)), e((0, yt.sdi)(!t))
                            },
                            onBlur: () => {
                                e((0, yt.sdi)(!1))
                            },
                            style: {
                                color: c[2],
                                marginRight: u === Et.t4.WIX && p ? 10 : void 0
                            },
                            type: "button",
                            "aria-label": t ? (0, Ye.dW)("closeOptions", null, "Close options") : (0, Ye.dW)("openOptions", null, "Open options"),
                            css: St,
                            children: [(0, N.tZ)(wt.Ei, {}), (0, N.tZ)("span", {
                                children: t ? (0, Ye.dW)("closeOptions", null, "Close options") : (0, Ye.dW)("openOptions", null, "Open options")
                            })]
                        }), (0, N.tZ)(_, { in: t && (b() || x()),
                            classNames: "dropdownFade",
                            children: (0, N.tZ)("div", {
                                className: "options-dropdown",
                                children: (0, N.BX)("ul", {
                                    children: [b() && (f ? (0, N.tZ)("li", {
                                        children: (0, N.BX)("button", {
                                            type: "button",
                                            className: "material-icons",
                                            onClick: m,
                                            onFocus: () => {
                                                C(!0)
                                            },
                                            onBlur: () => {
                                                C(!1)
                                            },
                                            children: [(0, N.tZ)(wt.z8, {}), (0, N.tZ)("span", {
                                                children: (0, N.tZ)(ut, {
                                                    value: "turnOnNotifications"
                                                })
                                            })]
                                        })
                                    }) : (0, N.tZ)("li", {
                                        children: (0, N.BX)("button", {
                                            type: "button",
                                            className: "material-icons",
                                            onClick: m,
                                            onFocus: () => {
                                                C(!0)
                                            },
                                            onBlur: () => {
                                                C(!1)
                                            },
                                            children: [(0, N.tZ)(wt.nh, {}), (0, N.tZ)("span", {
                                                children: (0, N.tZ)(ut, {
                                                    value: "turnOffNotifications"
                                                })
                                            })]
                                        })
                                    })), x() && (0, N.tZ)("li", {
                                        children: (0, N.BX)("button", {
                                            type: "button",
                                            className: "material-icons",
                                            onClick: g,
                                            onFocus: () => {
                                                C(!0)
                                            },
                                            onBlur: () => {
                                                C(!1)
                                            },
                                            children: [(0, N.tZ)(wt.Ju, {}), (0, N.tZ)("span", {
                                                children: (0, N.tZ)(ut, {
                                                    value: "rateConversation"
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                },
                Zt = n(3890);
            var Rt = () => {
                const e = (0, a.I0)(),
                    t = (0, a.v9)(Bt.U1),
                    n = (0, o.useRef)(!1);
                return (0, o.useEffect)((() => () => {
                    n.current && window.tidioChatApi ? .trigger("headerCloseHover", {
                        type: "off"
                    })
                }), []), (0, N.BX)("button", {
                    className: "material-icons exit-chat ripple",
                    onClick: () => {
                        e((0, yt.SnQ)(kt.M.chatClosed)), e((0, yt.AKm)(!1)), e((0, yt.ejT)(!1))
                    },
                    onMouseEnter: () => {
                        n.current = !0, window.tidioChatApi ? .trigger("headerCloseHover", {
                            type: "on"
                        })
                    },
                    onMouseLeave: () => {
                        n.current = !1, window.tidioChatApi ? .trigger("headerCloseHover", {
                            type: "off"
                        })
                    },
                    style: {
                        color: t[2]
                    },
                    type: "button",
                    "aria-label": (0, Ye.dW)("minimize", null, "Minimize"),
                    css: St,
                    children: [(0, N.tZ)(wt.gR, {}), (0, N.tZ)("span", {
                        children: (0, Ye.dW)("minimize", null, "Minimize")
                    })]
                })
            };
            var Tt = () => {
                    const e = (0, a.v9)((e => e.assignedOperators)),
                        t = (0, a.v9)((e => e.operators)),
                        n = (0, a.v9)((e => e.isProjectOnline)),
                        i = (0, a.v9)(Bt.U1),
                        r = (0, a.v9)(Bt.cn),
                        s = (0, a.v9)((e => e.isMobile)),
                        l = (0, a.v9)(Bt.Xf),
                        d = (0, a.v9)(Bt.RX),
                        {
                            state: A
                        } = (0, Zt.PZ)(),
                        c = A ? .offer,
                        [u, p] = (0, o.useState)("");
                    (0, o.useEffect)((() => {
                        p(i[0] === i[1] ? i[0] : `linear-gradient(135deg, ${i[0]} 0%, ${i[1]} 100%)`)
                    }), [i]);
                    const f = !(!s && r || s && l === Et.t4.WIX || c),
                        h = e.length > 0;
                    return (0, N.BX)("div", {
                        className: "chat-header " + (n ? "project-online" : ""),
                        style: {
                            background: u,
                            color: i[2]
                        },
                        children: [h && (0, N.tZ)(Ct, {
                            operators: t,
                            assignedOperators: e
                        }), !h && (d ? (0, N.tZ)(bt, {
                            customAvatar: d
                        }) : (0, N.tZ)(mt, {
                            operators: t
                        })), f && (0, N.tZ)(Rt, {}), (0, N.tZ)(Mt, {}), (0, N.tZ)(vt, {
                            widgetColor: i,
                            isProjectOnline: n
                        })]
                    })
                },
                Dt = n(1501),
                Nt = n(2018);
            var Ut = n(1936);

            function _t() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 820;
                const [t, n] = o.useState(""), i = o.useRef();
                return {
                    triggerShake: function() {
                        n("shake"), clearTimeout(i.current), i.current = null, i.current = setTimeout((() => {
                            n("")
                        }), e)
                    },
                    shakeClassName: t,
                    shouldShake: "shake" === t
                }
            }
            var Lt = n(7139);
            const jt = Dt.zk,
                Ot = (e, t) => function(e, t) {
                    const n = (0, Nt._I)();
                    if (!n) return 0;
                    const i = ("OffscreenCanvas" in window ? new OffscreenCanvas(500, 100) : n.createElement("canvas")).getContext("2d");
                    return i.font = t, Math.ceil(i.measureText(e).width)
                }(e, '17px "Mulish", sans-serif') > t;
            class Ft extends o.Component {
                constructor() {
                    var e;
                    super(...arguments), e = this, (0, i.Z)(this, "state", {
                        input: "",
                        inputRows: 1,
                        isPlaceholderToLong: !1
                    }), (0, i.Z)(this, "inputRef", null), (0, i.Z)(this, "initialInputScrollHeight", 0), (0, i.Z)(this, "oldInputRows", 1), (0, i.Z)(this, "oldPlaceholder", ""), (0, i.Z)(this, "windowRef", (0, Nt.a9)()), (0, i.Z)(this, "osName", (0, pt.kA)().name.toLowerCase()), (0, i.Z)(this, "setInputRef", (e => {
                        this.inputRef = e
                    })), (0, i.Z)(this, "onInputChange", (e => {
                        const t = this.state.input.length,
                            n = e.target.value;
                        this.setState({
                            input: n
                        }, (() => {
                            this.adjustInputRows(t)
                        })), this.dispatchVisitorIsTyping(n, this.state.input)
                    })), (0, i.Z)(this, "adjustInputRows", (function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        if (e.oldInputRows = e.state.inputRows, "" === e.state.input && !e.state.isPlaceholderToLong) return e.setState({
                            inputRows: 1
                        }), 1 === e.oldInputRows || e.props.isMobile || e.props.dispatch((0, yt.kqK)("chatSize1")), !0;
                        if (3 === e.state.inputRows && null !== t && e.state.input.length > t) return !0;
                        const n = e.getCalculatedInputRows();
                        return n === e.oldInputRows || e.props.isMobile || e.props.dispatch((0, yt.kqK)(`chatSize${n}`)), e.setState({
                            inputRows: n
                        }), !0
                    })), (0, i.Z)(this, "getCalculatedInputRows", (() => {
                        let e = Math.ceil((this.inputRef.scrollHeight - this.initialInputScrollHeight) / jt) + 1;
                        return this.props.isMobile && e > 2 ? 2 : (e > 3 ? e = 3 : this.state.isPlaceholderToLong && e < 2 ? e = 2 : e < 1 && (e = 1), e)
                    })), (0, i.Z)(this, "restoreMessage", (() => {
                        const {
                            blockedMessage: e
                        } = this.props;
                        setTimeout((() => {
                            this.setState({
                                input: e
                            }, (() => {
                                this.adjustInputRows()
                            }))
                        }), 0), this.props.dispatch((0, yt.H$_)())
                    })), (0, i.Z)(this, "onKeyDown", (e => {
                        const t = 13 === e.keyCode;
                        return !(!t || t && e.shiftKey || this.props.newMessageDisabled) && (e.preventDefault(), this.props.dispatch((0, yt.jaP)(!0)), !0)
                    })), (0, i.Z)(this, "onClick", (() => {
                        this.props.newMessageDisabled && (0, Nt.$k)()
                    })), (0, i.Z)(this, "dispatchVisitorIsTyping", ((e, t) => {
                        const n = e.trim(),
                            i = t.trim();
                        return ("" !== n || n !== i) && (this.props.dispatch((0, yt.tBh)(n)), !0)
                    })), (0, i.Z)(this, "sendMessage", (() => {
                        const {
                            dispatch: e,
                            view: t,
                            isEmojiPanelVisible: n,
                            triggerShake: i
                        } = this.props;
                        let o = this.state.input;
                        return o = o.trim(), "" === o && t === It.views.welcome && e((0, yt.OFJ)()), "" === o ? (i(), !1) : (e((0, yt.liy)(o)), this.setState({
                            input: ""
                        }), n && e((0, yt.AKm)(!1)), this.setState({
                            inputRows: 1
                        }), !0)
                    })), (0, i.Z)(this, "fixWebviewTouchAreas", (() => {
                        try {
                            this.props.isMobile && "ios" === this.osName && (this.windowRef.parent.scrollTo(this.windowRef.parent.scrollX, this.windowRef.parent.scrollY - 1), this.windowRef.parent.scrollTo(this.windowRef.parent.scrollX, this.windowRef.parent.scrollY + 1))
                        } catch (e) {}
                    })), (0, i.Z)(this, "onPaste", (e => {
                        if (!this.props.fileUploadEnabled) return;
                        if (0 === e.clipboardData ? .files ? .length) return;
                        e.preventDefault();
                        const t = Array.from(e.clipboardData.files)[0];
                        this.props.newMessageDisabled && this.props.dispatch((0, yt.wp$)((0, Ye.dW)("newMessageDisabledAlert", null, "Please enter your email first."))), this.props.dispatch((0, yt.cTq)(t))
                    }))
                }
                componentDidMount() {
                    setTimeout((() => {
                        this.inputRef && (this.initialInputScrollHeight = this.inputRef.scrollHeight)
                    }), 0), setTimeout((() => {
                        !this.props.newMessageDisabled && null !== this.props.blockedMessage && this.restoreMessage()
                    }), 0);
                    const {
                        placeholder: e,
                        offsetWidth: t
                    } = this.inputRef;
                    this.oldPlaceholder = e, Ot(e, t) && this.setState({
                        inputRows: 2,
                        isPlaceholderToLong: !0
                    })
                }
                static getDerivedStateFromProps(e, t) {
                    return e.newMessageEmoji ? (e.dispatch((0, yt.G$G)()), {
                        input: t.input + e.newMessageEmoji
                    }) : e.blockedMessage && e.newMessageDisabled ? {
                        input: e.blockedMessage
                    } : null
                }
                componentDidUpdate(e) {
                    this.props.sendVisitorMessageFlag && !e.sendVisitorMessageFlag && this.sendMessage();
                    const {
                        placeholder: t,
                        offsetWidth: n
                    } = this.inputRef;
                    this.oldPlaceholder !== t && (this.oldPlaceholder = t, Ot(t, n) ? this.setState({
                        inputRows: 2,
                        isPlaceholderToLong: !0
                    }) : this.setState({
                        isPlaceholderToLong: !1
                    })), null === this.props.blockedMessage && null !== e.blockedMessage && this.setState({
                        input: ""
                    })
                }
                componentWillUnmount() {
                    const {
                        input: e
                    } = this.state;
                    "" !== e && this.props.dispatch((0, yt.H$_)(e))
                }
                render() {
                    const {
                        lastMessage: e,
                        newMessageDisabled: t,
                        hasConnectionIssues: n,
                        showUserDataModal: i
                    } = this.props;
                    return (0, N.tZ)(ut, {
                        value: ["clickToProvideEmail", "onlineMessagePlaceholder", "hitTheButtons", "fillOutTheForm"],
                        children: o => {
                            let {
                                clickToProvideEmail: a,
                                onlineMessagePlaceholder: r,
                                hitTheButtons: s,
                                fillOutTheForm: l
                            } = o, d = r;
                            return t ? n ? d = r : i && (d = a) : (e => {
                                if (!e) return !1;
                                const t = e.type === Ut.Nw.cards && "number" != typeof e.operator_id,
                                    n = e.quickReplies && e.quickReplies.length > 0,
                                    i = e.buttons && e.buttons.length > 0;
                                return !!(t || n || i)
                            })(e) && !this.props.isLastMessage24h && (d = s), e && e.type === Et.Cs.FORM && (d = l), (0, N.tZ)("textarea", {
                                id: "new-message-textarea",
                                value: this.state.input,
                                onChange: this.onInputChange,
                                onKeyDown: this.onKeyDown,
                                onClick: this.onClick,
                                ref: this.setInputRef,
                                rows: this.state.inputRows,
                                placeholder: d,
                                onFocus: () => {
                                    !t && this.props.isMobile && this.props.dispatch((0, yt.xKy)(!0))
                                },
                                onBlur: () => {
                                    !t && this.props.isMobile && setTimeout((() => {
                                        this.props.dispatch((0, yt.xKy)(!1)), this.fixWebviewTouchAreas()
                                    }), 100)
                                },
                                readOnly: t,
                                className: `${t?"disabled":""} ${this.props.shakeClassName}`,
                                "aria-label": (0, Ye.dW)("newMessage", null, "New message"),
                                "data-testid": "newMessageTextarea",
                                onPaste: this.onPaste
                            })
                        }
                    })
                }
            }
            Ft.defaultProps = {
                newMessageEmoji: null,
                blockedMessage: null,
                triggerShake: () => {},
                shakeClassName: "",
                lastMessage: void 0
            };
            var Wt, zt = (0, a.$j)((e => ({
                newMessageEmoji: e.newMessageEmoji,
                isMobile: e.isMobile,
                sendVisitorMessageFlag: e.sendVisitorMessageFlag,
                isEmojiPanelVisible: e.isEmojiPanelVisible,
                newMessageDisabled: (0, Bt.bP)(e),
                blockedMessage: e.blockedMessage,
                view: (0, Bt.Xe)(e),
                lastMessage: (0, Bt.Ey)(e),
                isLastMessage24h: (0, Lt.J)(e),
                hasConnectionIssues: (0, Bt.UE)(e),
                showUserDataModal: e.showUserDataModal
            })))((Wt = Ft, class extends o.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "state", {
                        shakeClassName: ""
                    }), (0, i.Z)(this, "clearId", null), (0, i.Z)(this, "isMounted", !1), (0, i.Z)(this, "triggerShake", (() => {
                        this.setState({
                            shakeClassName: "shake"
                        }), clearTimeout(this.clearId), this.clearId = null, this.clearId = setTimeout((() => {
                            this.isMounted && this.setState({
                                shakeClassName: ""
                            })
                        }), 820)
                    }))
                }
                componentDidMount() {
                    this.isMounted = !0
                }
                componentWillUnmount() {
                    this.isMounted = !1
                }
                render() {
                    const e = {
                        triggerShake: this.triggerShake,
                        shakeClassName: this.state.shakeClassName
                    };
                    return (0, N.tZ)(Wt, { ...this.props,
                        ...e
                    })
                }
            }));
            var Pt = e => (0, N.BX)("div", {
                className: "bots-dropdown",
                children: [e.isBotActive && (0, N.tZ)("ul", {
                    className: "bots-cancel",
                    children: (0, N.tZ)("li", {
                        children: (0, N.BX)("span", {
                            tabIndex: "0",
                            onClick: e.onCancelBotClick,
                            onKeyUp: t => {
                                13 === t.keyCode && e.onCancelBotClick()
                            },
                            onFocus: e.onBotFocus,
                            onBlur: e.onBotBlur,
                            role: "button",
                            children: [(0, N.tZ)(wt.x8, {}), " ", (0, Ye.dW)("startOver", null, "Start over")]
                        })
                    })
                }), !e.isBotActive && (0, N.tZ)("ul", {
                    children: (0, N.tZ)("li", {
                        children: (0, N.BX)("span", {
                            onClick: () => {
                                e.onBotClick()
                            },
                            onKeyUp: t => {
                                13 === t.keyCode && e.onBotClick()
                            },
                            onFocus: e.onBotFocus,
                            onBlur: e.onBotBlur,
                            role: "button",
                            tabIndex: e.isBotActive ? "-1" : "0",
                            children: [(0, N.tZ)(wt.sO, {}), " ", (0, Ye.dW)("startTheBot", null, "Start the Bot")]
                        })
                    })
                })]
            });
            var Ht = e => (0, N.BX)(N.HY, {
                children: [(0, N.tZ)("span", {
                    className: "pulse"
                }), (0, N.tZ)("span", {
                    className: "pulse-white"
                }), (0, N.tZ)("span", {
                    className: "pulse animation-delay",
                    onAnimationEnd: () => {
                        e.dispatch((0, yt.MP)())
                    }
                }), (0, N.tZ)("span", {
                    className: "pulse-white animation-delay"
                })]
            });
            var qt = (0, a.$j)((e => ({
                isBotActive: e.isBotActive,
                assignedOperators: e.assignedOperators
            })))((e => (0, N.BX)("button", {
                type: "button",
                className: "bots-button material-icons ripple " + (e.isBotActive || 0 !== e.assignedOperators.length || e.disableButtonAnimation ? "" : "bots-animation"),
                onClick: e.onClick,
                onBlur: e.onBlur,
                children: [(0, N.tZ)(wt.a9, {}), !e.isBotActive && 0 === e.assignedOperators.length && !e.disableButtonAnimation && (0, N.tZ)(Ht, {
                    dispatch: e.dispatch
                })]
            })));
            var $t = () => {
                const [e, t] = (0, o.useState)(!1), n = (0, a.v9)((e => e.bots)), i = (0, a.v9)((e => e.isBotActive)), r = (0, a.v9)((e => e.disableBotsButtonAnimation)), s = (0, a.I0)();
                return n && 0 !== n.length ? (0, N.BX)(N.HY, {
                    children: [(0, N.tZ)(qt, {
                        onBlur: () => {
                            t(!1)
                        },
                        onClick: () => {
                            s((0, yt.AKm)(!1)), t((e => !e)), s((0, yt.SnQ)(kt.M.botsButtonClicked))
                        },
                        disableButtonAnimation: r
                    }), (0, N.tZ)(_, { in: e,
                        classNames: "botsListFade",
                        children: (0, N.tZ)(Pt, {
                            onBotClick: () => !i && (s((0, yt.vit)()), t(!1), !0),
                            onBotFocus: () => {
                                t(!0)
                            },
                            onBotBlur: () => {
                                t(!1)
                            },
                            onCancelBotClick: () => {
                                s((0, yt.SnQ)(kt.M.botCanceled)), s((0, yt.oml)()), t(!1)
                            },
                            isBotActive: i
                        })
                    })]
                }) : null
            };
            class Yt extends o.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "state", {
                        hasError: !1
                    })
                }
                static getDerivedStateFromError() {
                    return {
                        hasError: !0
                    }
                }
                componentDidCatch(e) {
                    (0, gt.A)("Error while loading async chunk", {
                        message: e.message
                    }), this.props.onDidCatch()
                }
                render() {
                    return this.state.hasError ? null : this.props.children
                }
            }
            var Gt = Yt;
            const Vt = () => (0, N.tZ)("div", {
                    className: "emoji-wrapper",
                    children: (0, N.tZ)("div", {
                        className: "emoji-mart"
                    })
                }),
                Jt = o.lazy((() => n.e(325).then(n.bind(n, 8642))));
            var Xt = e => (0, N.tZ)(Gt, {
                onDidCatch: e.handleEmojiPanel,
                children: (0, N.tZ)(o.Suspense, {
                    fallback: (0, N.tZ)(Vt, {}),
                    children: (0, N.tZ)(Jt, {
                        onEmojiClick: e.onEmojiClick,
                        isMobile: e.isMobile
                    })
                })
            });
            var Qt = e => (0, N.tZ)(_, { ...e,
                in: e.in,
                classNames: "fade",
                children: e.children
            });
            const Kt = {
                    name: "5hhiig",
                    styles: "margin-right:40px;float:right;display:flex;text-decoration:none;color:#8894ab;font-weight:400;font-size:10px;/* @noflip */direction:ltr;span{align-self:center;/* @noflip */margin-right:8px;}svg{width:50px;}.mobile &{margin-right:70px;}"
                },
                en = {
                    name: "17jmbz5",
                    styles: "margin-right:40px;float:right;/* @noflip */direction:ltr;img{object-fit:contain;max-width:125px;max-height:30px;}"
                };
            var tn = () => {
                const e = (0, a.I0)(),
                    t = (0, a.v9)((e => e.publicKey)),
                    n = (0, a.v9)((e => e.platform === Et.t4.WIX ? Et.t4.OTHERS : e.platform)),
                    i = (0, a.v9)((e => e.isMobile)),
                    o = (0, a.v9)(Bt.cn),
                    r = (0, a.v9)(Bt.Fu),
                    s = (0, pt.mR)(),
                    l = !(0, pt.Q_)(t);
                return r ? (0, N.tZ)("div", {
                    children: (0, N.tZ)("span", {
                        css: en,
                        children: (0, N.tZ)("img", {
                            src: r,
                            alt: "Company logo",
                            onError: () => {
                                e((0, yt.sfQ)({
                                    customBranding: ""
                                }))
                            }
                        })
                    })
                }) : o ? (0, N.tZ)("div", {
                    children: (0, N.BX)("span", {
                        css: Kt,
                        children: [(0, N.tZ)("span", {
                            children: "POWERED BY"
                        }), " ", (0, N.tZ)(wt.CU, {})]
                    })
                }) : (0, N.tZ)("div", {
                    children: (0, N.BX)("a", {
                        css: Kt,
                        href: `https://www.tidio.com/powered-by-tidio/?platform=${n}&project=${t}&device=${i?"mobile":"desktop"}${l?`&utm_source=plugin_ref&utm_medium=widget_v4&utm_campaign=plugin_ref&utm_referrer=${s}`:""}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": (0, Ye.dW)("poweredBy", null, "Powered by Tidio."),
                        children: [(0, N.tZ)("span", {
                            children: "POWERED BY"
                        }), " ", (0, N.tZ)(wt.CU, {})]
                    })
                })
            };
            const nn = e => {
                const t = (0, o.useRef)(null),
                    n = (0, a.I0)(),
                    i = (0, a.v9)((e => e.isEmojiPanelVisible)),
                    r = (0, a.v9)((e => e.isMobile)),
                    s = (0, a.v9)(Bt.bP),
                    l = (0, a.v9)((e => e.showBranding)),
                    d = (0, a.v9)((e => e.messages)),
                    A = (0, a.v9)(Bt.o9),
                    c = (0, a.v9)(Lt.Xu),
                    u = (0, a.v9)((e => e.allowAttachments)),
                    p = (0, a.v9)(Bt.Fu),
                    f = Boolean(Boolean(d.find((e => "visitor" === e.sender))) && !c && u),
                    h = e => {
                        if (e) {
                            !(0 === e.nativeEvent.pageX && 0 === e.nativeEvent.pageY) && i && e.currentTarget.blur()
                        }
                        n(s ? (0, yt.wp$)((0, Ye.dW)("newMessageDisabledAlert", null, "Please enter your email first.")) : (0, yt.AKm)(!i))
                    };
                return (0, N.BX)("div", {
                    className: "input-group " + (A ? "drag-active" : ""),
                    children: [(0, N.tZ)(D, { in: i,
                        classNames: "emojiFade",
                        timeout: 200,
                        mountOnEnter: !0,
                        unmountOnExit: !0,
                        appear: !0,
                        children: (0, N.tZ)(Xt, {
                            isMobile: r,
                            onEmojiClick: e => {
                                n((0, yt.SnQ)(kt.M.emojiAdded)), n((0, yt.G$G)(e.native))
                            },
                            handleEmojiPanel: h
                        })
                    }), (0, N.BX)("div", {
                        className: "drag-active-wrapper footer-input-wrapper " + (s ? "hidden" : ""),
                        children: [e.hasSeparator && (0, N.tZ)("hr", {}), (0, N.tZ)(zt, {
                            dispatch: n,
                            fileUploadEnabled: f
                        })]
                    }), (0, N.BX)("div", {
                        className: "footer-bottom",
                        children: [(0, N.BX)("div", {
                            className: "footer-icons-wrapper " + (s ? "hidden" : ""),
                            children: [(0, N.tZ)($t, {}), (0, N.tZ)(Qt, { in: f,
                                children: (0, N.tZ)("button", {
                                    type: "button",
                                    className: "material-icons ripple " + (s ? "disabled" : ""),
                                    onClick: e => {
                                        if ((0, pt.$U)() || !f) return !1;
                                        if (e) {
                                            0 === e.nativeEvent.pageX && 0 === e.nativeEvent.pageY || e.currentTarget.blur()
                                        }
                                        return s ? n((0, yt.wp$)((0, Ye.dW)("newMessageDisabledAlert", null, "Please enter your email first."))) : (n((0, yt.SnQ)(kt.M.uploadButtonClicked)), t.current.click()), !0
                                    },
                                    style: {
                                        color: "#007dfc"
                                    },
                                    "aria-label": (0, Ye.dW)("attachFile", null, "Attach file button"),
                                    children: (0, N.tZ)(wt.kf, {})
                                })
                            }), (0, N.tZ)("form", {
                                children: (0, N.tZ)("input", {
                                    type: "file",
                                    style: {
                                        display: "none"
                                    },
                                    ref: t,
                                    name: "attachment",
                                    onChange: e => {
                                        if (!f) return;
                                        const i = e.target.files[0];
                                        n((0, yt.cTq)(i)), t.current.value = ""
                                    },
                                    "aria-label": (0, Ye.dW)("attachFile", null, "Attach file input")
                                })
                            }), !r && (0, N.tZ)("button", {
                                type: "button",
                                className: `material-icons emoji-switch ripple ${i?"active":""} ${s?"disabled":""}`,
                                onClick: h,
                                style: {
                                    color: "#007dfc"
                                },
                                "aria-label": i ? (0, Ye.dW)("closeEmojiPanel", null, "Close Emoji picker") : (0, Ye.dW)("openEmojiPanel", null, "Open Emoji picker"),
                                children: (0, N.tZ)(wt.kE, {})
                            })]
                        }), (l || Boolean(p)) && (0, N.tZ)(tn, {})]
                    })]
                })
            };
            nn.defaultProps = {
                hasSeparator: !1
            };
            var on = nn;

            function an(e) {
                return an = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, an(e)
            }

            function rn(e, t) {
                if (t.length < e) throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
            }

            function sn(e) {
                rn(1, arguments);
                var t = Object.prototype.toString.call(e);
                return e instanceof Date || "object" === an(e) && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : ("string" != typeof e && "[object String]" !== t || "undefined" == typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn((new Error).stack)), new Date(NaN))
            }

            function ln(e) {
                rn(1, arguments);
                var t = sn(e);
                return t.setHours(0, 0, 0, 0), t
            }

            function dn(e, t) {
                rn(2, arguments);
                var n = ln(e),
                    i = ln(t);
                return n.getTime() === i.getTime()
            }

            function An(e) {
                if (null === e || !0 === e || !1 === e) return NaN;
                var t = Number(e);
                return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
            }

            function cn(e, t) {
                return rn(2, arguments),
                    function(e, t) {
                        rn(2, arguments);
                        var n = sn(e),
                            i = An(t);
                        return isNaN(i) ? new Date(NaN) : i ? (n.setDate(n.getDate() + i), n) : n
                    }(e, -An(t))
            }

            function un(e) {
                if (rn(1, arguments), ! function(e) {
                        return rn(1, arguments), e instanceof Date || "object" === an(e) && "[object Date]" === Object.prototype.toString.call(e)
                    }(e) && "number" != typeof e) return !1;
                var t = sn(e);
                return !isNaN(Number(t))
            }

            function pn(e, t) {
                return rn(2, arguments),
                    function(e, t) {
                        rn(2, arguments);
                        var n = sn(e).getTime(),
                            i = An(t);
                        return new Date(n + i)
                    }(e, -An(t))
            }

            function fn(e) {
                rn(1, arguments);
                var t = sn(e),
                    n = t.getUTCDay(),
                    i = (n < 1 ? 7 : 0) + n - 1;
                return t.setUTCDate(t.getUTCDate() - i), t.setUTCHours(0, 0, 0, 0), t
            }

            function hn(e) {
                rn(1, arguments);
                var t = sn(e),
                    n = t.getUTCFullYear(),
                    i = new Date(0);
                i.setUTCFullYear(n + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
                var o = fn(i),
                    a = new Date(0);
                a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
                var r = fn(a);
                return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= r.getTime() ? n : n - 1
            }

            function mn(e) {
                rn(1, arguments);
                var t = sn(e),
                    n = fn(t).getTime() - function(e) {
                        rn(1, arguments);
                        var t = hn(e),
                            n = new Date(0);
                        return n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0), fn(n)
                    }(t).getTime();
                return Math.round(n / 6048e5) + 1
            }
            var gn = {};

            function Cn() {
                return gn
            }

            function bn(e, t) {
                var n, i, o, a, r, s, l, d;
                rn(1, arguments);
                var A = Cn(),
                    c = An(null !== (n = null !== (i = null !== (o = null !== (a = null == t ? void 0 : t.weekStartsOn) && void 0 !== a ? a : null == t || null === (r = t.locale) || void 0 === r || null === (s = r.options) || void 0 === s ? void 0 : s.weekStartsOn) && void 0 !== o ? o : A.weekStartsOn) && void 0 !== i ? i : null === (l = A.locale) || void 0 === l || null === (d = l.options) || void 0 === d ? void 0 : d.weekStartsOn) && void 0 !== n ? n : 0);
                if (!(c >= 0 && c <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
                var u = sn(e),
                    p = u.getUTCDay(),
                    f = (p < c ? 7 : 0) + p - c;
                return u.setUTCDate(u.getUTCDate() - f), u.setUTCHours(0, 0, 0, 0), u
            }

            function xn(e, t) {
                var n, i, o, a, r, s, l, d;
                rn(1, arguments);
                var A = sn(e),
                    c = A.getUTCFullYear(),
                    u = Cn(),
                    p = An(null !== (n = null !== (i = null !== (o = null !== (a = null == t ? void 0 : t.firstWeekContainsDate) && void 0 !== a ? a : null == t || null === (r = t.locale) || void 0 === r || null === (s = r.options) || void 0 === s ? void 0 : s.firstWeekContainsDate) && void 0 !== o ? o : u.firstWeekContainsDate) && void 0 !== i ? i : null === (l = u.locale) || void 0 === l || null === (d = l.options) || void 0 === d ? void 0 : d.firstWeekContainsDate) && void 0 !== n ? n : 1);
                if (!(p >= 1 && p <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
                var f = new Date(0);
                f.setUTCFullYear(c + 1, 0, p), f.setUTCHours(0, 0, 0, 0);
                var h = bn(f, t),
                    m = new Date(0);
                m.setUTCFullYear(c, 0, p), m.setUTCHours(0, 0, 0, 0);
                var g = bn(m, t);
                return A.getTime() >= h.getTime() ? c + 1 : A.getTime() >= g.getTime() ? c : c - 1
            }

            function vn(e, t) {
                rn(1, arguments);
                var n = sn(e),
                    i = bn(n, t).getTime() - function(e, t) {
                        var n, i, o, a, r, s, l, d;
                        rn(1, arguments);
                        var A = Cn(),
                            c = An(null !== (n = null !== (i = null !== (o = null !== (a = null == t ? void 0 : t.firstWeekContainsDate) && void 0 !== a ? a : null == t || null === (r = t.locale) || void 0 === r || null === (s = r.options) || void 0 === s ? void 0 : s.firstWeekContainsDate) && void 0 !== o ? o : A.firstWeekContainsDate) && void 0 !== i ? i : null === (l = A.locale) || void 0 === l || null === (d = l.options) || void 0 === d ? void 0 : d.firstWeekContainsDate) && void 0 !== n ? n : 1),
                            u = xn(e, t),
                            p = new Date(0);
                        return p.setUTCFullYear(u, 0, c), p.setUTCHours(0, 0, 0, 0), bn(p, t)
                    }(n, t).getTime();
                return Math.round(i / 6048e5) + 1
            }

            function wn(e, t) {
                for (var n = e < 0 ? "-" : "", i = Math.abs(e).toString(); i.length < t;) i = "0" + i;
                return n + i
            }
            var yn = {
                    y: function(e, t) {
                        var n = e.getUTCFullYear(),
                            i = n > 0 ? n : 1 - n;
                        return wn("yy" === t ? i % 100 : i, t.length)
                    },
                    M: function(e, t) {
                        var n = e.getUTCMonth();
                        return "M" === t ? String(n + 1) : wn(n + 1, 2)
                    },
                    d: function(e, t) {
                        return wn(e.getUTCDate(), t.length)
                    },
                    a: function(e, t) {
                        var n = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
                        switch (t) {
                            case "a":
                            case "aa":
                                return n.toUpperCase();
                            case "aaa":
                                return n;
                            case "aaaaa":
                                return n[0];
                            default:
                                return "am" === n ? "a.m." : "p.m."
                        }
                    },
                    h: function(e, t) {
                        return wn(e.getUTCHours() % 12 || 12, t.length)
                    },
                    H: function(e, t) {
                        return wn(e.getUTCHours(), t.length)
                    },
                    m: function(e, t) {
                        return wn(e.getUTCMinutes(), t.length)
                    },
                    s: function(e, t) {
                        return wn(e.getUTCSeconds(), t.length)
                    },
                    S: function(e, t) {
                        var n = t.length,
                            i = e.getUTCMilliseconds();
                        return wn(Math.floor(i * Math.pow(10, n - 3)), t.length)
                    }
                },
                Bn = "midnight",
                In = "noon",
                kn = "morning",
                En = "afternoon",
                Sn = "evening",
                Mn = "night",
                Zn = {
                    G: function(e, t, n) {
                        var i = e.getUTCFullYear() > 0 ? 1 : 0;
                        switch (t) {
                            case "G":
                            case "GG":
                            case "GGG":
                                return n.era(i, {
                                    width: "abbreviated"
                                });
                            case "GGGGG":
                                return n.era(i, {
                                    width: "narrow"
                                });
                            default:
                                return n.era(i, {
                                    width: "wide"
                                })
                        }
                    },
                    y: function(e, t, n) {
                        if ("yo" === t) {
                            var i = e.getUTCFullYear(),
                                o = i > 0 ? i : 1 - i;
                            return n.ordinalNumber(o, {
                                unit: "year"
                            })
                        }
                        return yn.y(e, t)
                    },
                    Y: function(e, t, n, i) {
                        var o = xn(e, i),
                            a = o > 0 ? o : 1 - o;
                        return "YY" === t ? wn(a % 100, 2) : "Yo" === t ? n.ordinalNumber(a, {
                            unit: "year"
                        }) : wn(a, t.length)
                    },
                    R: function(e, t) {
                        return wn(hn(e), t.length)
                    },
                    u: function(e, t) {
                        return wn(e.getUTCFullYear(), t.length)
                    },
                    Q: function(e, t, n) {
                        var i = Math.ceil((e.getUTCMonth() + 1) / 3);
                        switch (t) {
                            case "Q":
                                return String(i);
                            case "QQ":
                                return wn(i, 2);
                            case "Qo":
                                return n.ordinalNumber(i, {
                                    unit: "quarter"
                                });
                            case "QQQ":
                                return n.quarter(i, {
                                    width: "abbreviated",
                                    context: "formatting"
                                });
                            case "QQQQQ":
                                return n.quarter(i, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            default:
                                return n.quarter(i, {
                                    width: "wide",
                                    context: "formatting"
                                })
                        }
                    },
                    q: function(e, t, n) {
                        var i = Math.ceil((e.getUTCMonth() + 1) / 3);
                        switch (t) {
                            case "q":
                                return String(i);
                            case "qq":
                                return wn(i, 2);
                            case "qo":
                                return n.ordinalNumber(i, {
                                    unit: "quarter"
                                });
                            case "qqq":
                                return n.quarter(i, {
                                    width: "abbreviated",
                                    context: "standalone"
                                });
                            case "qqqqq":
                                return n.quarter(i, {
                                    width: "narrow",
                                    context: "standalone"
                                });
                            default:
                                return n.quarter(i, {
                                    width: "wide",
                                    context: "standalone"
                                })
                        }
                    },
                    M: function(e, t, n) {
                        var i = e.getUTCMonth();
                        switch (t) {
                            case "M":
                            case "MM":
                                return yn.M(e, t);
                            case "Mo":
                                return n.ordinalNumber(i + 1, {
                                    unit: "month"
                                });
                            case "MMM":
                                return n.month(i, {
                                    width: "abbreviated",
                                    context: "formatting"
                                });
                            case "MMMMM":
                                return n.month(i, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            default:
                                return n.month(i, {
                                    width: "wide",
                                    context: "formatting"
                                })
                        }
                    },
                    L: function(e, t, n) {
                        var i = e.getUTCMonth();
                        switch (t) {
                            case "L":
                                return String(i + 1);
                            case "LL":
                                return wn(i + 1, 2);
                            case "Lo":
                                return n.ordinalNumber(i + 1, {
                                    unit: "month"
                                });
                            case "LLL":
                                return n.month(i, {
                                    width: "abbreviated",
                                    context: "standalone"
                                });
                            case "LLLLL":
                                return n.month(i, {
                                    width: "narrow",
                                    context: "standalone"
                                });
                            default:
                                return n.month(i, {
                                    width: "wide",
                                    context: "standalone"
                                })
                        }
                    },
                    w: function(e, t, n, i) {
                        var o = vn(e, i);
                        return "wo" === t ? n.ordinalNumber(o, {
                            unit: "week"
                        }) : wn(o, t.length)
                    },
                    I: function(e, t, n) {
                        var i = mn(e);
                        return "Io" === t ? n.ordinalNumber(i, {
                            unit: "week"
                        }) : wn(i, t.length)
                    },
                    d: function(e, t, n) {
                        return "do" === t ? n.ordinalNumber(e.getUTCDate(), {
                            unit: "date"
                        }) : yn.d(e, t)
                    },
                    D: function(e, t, n) {
                        var i = function(e) {
                            rn(1, arguments);
                            var t = sn(e),
                                n = t.getTime();
                            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
                            var i = n - t.getTime();
                            return Math.floor(i / 864e5) + 1
                        }(e);
                        return "Do" === t ? n.ordinalNumber(i, {
                            unit: "dayOfYear"
                        }) : wn(i, t.length)
                    },
                    E: function(e, t, n) {
                        var i = e.getUTCDay();
                        switch (t) {
                            case "E":
                            case "EE":
                            case "EEE":
                                return n.day(i, {
                                    width: "abbreviated",
                                    context: "formatting"
                                });
                            case "EEEEE":
                                return n.day(i, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "EEEEEE":
                                return n.day(i, {
                                    width: "short",
                                    context: "formatting"
                                });
                            default:
                                return n.day(i, {
                                    width: "wide",
                                    context: "formatting"
                                })
                        }
                    },
                    e: function(e, t, n, i) {
                        var o = e.getUTCDay(),
                            a = (o - i.weekStartsOn + 8) % 7 || 7;
                        switch (t) {
                            case "e":
                                return String(a);
                            case "ee":
                                return wn(a, 2);
                            case "eo":
                                return n.ordinalNumber(a, {
                                    unit: "day"
                                });
                            case "eee":
                                return n.day(o, {
                                    width: "abbreviated",
                                    context: "formatting"
                                });
                            case "eeeee":
                                return n.day(o, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "eeeeee":
                                return n.day(o, {
                                    width: "short",
                                    context: "formatting"
                                });
                            default:
                                return n.day(o, {
                                    width: "wide",
                                    context: "formatting"
                                })
                        }
                    },
                    c: function(e, t, n, i) {
                        var o = e.getUTCDay(),
                            a = (o - i.weekStartsOn + 8) % 7 || 7;
                        switch (t) {
                            case "c":
                                return String(a);
                            case "cc":
                                return wn(a, t.length);
                            case "co":
                                return n.ordinalNumber(a, {
                                    unit: "day"
                                });
                            case "ccc":
                                return n.day(o, {
                                    width: "abbreviated",
                                    context: "standalone"
                                });
                            case "ccccc":
                                return n.day(o, {
                                    width: "narrow",
                                    context: "standalone"
                                });
                            case "cccccc":
                                return n.day(o, {
                                    width: "short",
                                    context: "standalone"
                                });
                            default:
                                return n.day(o, {
                                    width: "wide",
                                    context: "standalone"
                                })
                        }
                    },
                    i: function(e, t, n) {
                        var i = e.getUTCDay(),
                            o = 0 === i ? 7 : i;
                        switch (t) {
                            case "i":
                                return String(o);
                            case "ii":
                                return wn(o, t.length);
                            case "io":
                                return n.ordinalNumber(o, {
                                    unit: "day"
                                });
                            case "iii":
                                return n.day(i, {
                                    width: "abbreviated",
                                    context: "formatting"
                                });
                            case "iiiii":
                                return n.day(i, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            case "iiiiii":
                                return n.day(i, {
                                    width: "short",
                                    context: "formatting"
                                });
                            default:
                                return n.day(i, {
                                    width: "wide",
                                    context: "formatting"
                                })
                        }
                    },
                    a: function(e, t, n) {
                        var i = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
                        switch (t) {
                            case "a":
                            case "aa":
                                return n.dayPeriod(i, {
                                    width: "abbreviated",
                                    context: "formatting"
                                });
                            case "aaa":
                                return n.dayPeriod(i, {
                                    width: "abbreviated",
                                    context: "formatting"
                                }).toLowerCase();
                            case "aaaaa":
                                return n.dayPeriod(i, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            default:
                                return n.dayPeriod(i, {
                                    width: "wide",
                                    context: "formatting"
                                })
                        }
                    },
                    b: function(e, t, n) {
                        var i, o = e.getUTCHours();
                        switch (i = 12 === o ? In : 0 === o ? Bn : o / 12 >= 1 ? "pm" : "am", t) {
                            case "b":
                            case "bb":
                                return n.dayPeriod(i, {
                                    width: "abbreviated",
                                    context: "formatting"
                                });
                            case "bbb":
                                return n.dayPeriod(i, {
                                    width: "abbreviated",
                                    context: "formatting"
                                }).toLowerCase();
                            case "bbbbb":
                                return n.dayPeriod(i, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            default:
                                return n.dayPeriod(i, {
                                    width: "wide",
                                    context: "formatting"
                                })
                        }
                    },
                    B: function(e, t, n) {
                        var i, o = e.getUTCHours();
                        switch (i = o >= 17 ? Sn : o >= 12 ? En : o >= 4 ? kn : Mn, t) {
                            case "B":
                            case "BB":
                            case "BBB":
                                return n.dayPeriod(i, {
                                    width: "abbreviated",
                                    context: "formatting"
                                });
                            case "BBBBB":
                                return n.dayPeriod(i, {
                                    width: "narrow",
                                    context: "formatting"
                                });
                            default:
                                return n.dayPeriod(i, {
                                    width: "wide",
                                    context: "formatting"
                                })
                        }
                    },
                    h: function(e, t, n) {
                        if ("ho" === t) {
                            var i = e.getUTCHours() % 12;
                            return 0 === i && (i = 12), n.ordinalNumber(i, {
                                unit: "hour"
                            })
                        }
                        return yn.h(e, t)
                    },
                    H: function(e, t, n) {
                        return "Ho" === t ? n.ordinalNumber(e.getUTCHours(), {
                            unit: "hour"
                        }) : yn.H(e, t)
                    },
                    K: function(e, t, n) {
                        var i = e.getUTCHours() % 12;
                        return "Ko" === t ? n.ordinalNumber(i, {
                            unit: "hour"
                        }) : wn(i, t.length)
                    },
                    k: function(e, t, n) {
                        var i = e.getUTCHours();
                        return 0 === i && (i = 24), "ko" === t ? n.ordinalNumber(i, {
                            unit: "hour"
                        }) : wn(i, t.length)
                    },
                    m: function(e, t, n) {
                        return "mo" === t ? n.ordinalNumber(e.getUTCMinutes(), {
                            unit: "minute"
                        }) : yn.m(e, t)
                    },
                    s: function(e, t, n) {
                        return "so" === t ? n.ordinalNumber(e.getUTCSeconds(), {
                            unit: "second"
                        }) : yn.s(e, t)
                    },
                    S: function(e, t) {
                        return yn.S(e, t)
                    },
                    X: function(e, t, n, i) {
                        var o = (i._originalDate || e).getTimezoneOffset();
                        if (0 === o) return "Z";
                        switch (t) {
                            case "X":
                                return Tn(o);
                            case "XXXX":
                            case "XX":
                                return Dn(o);
                            default:
                                return Dn(o, ":")
                        }
                    },
                    x: function(e, t, n, i) {
                        var o = (i._originalDate || e).getTimezoneOffset();
                        switch (t) {
                            case "x":
                                return Tn(o);
                            case "xxxx":
                            case "xx":
                                return Dn(o);
                            default:
                                return Dn(o, ":")
                        }
                    },
                    O: function(e, t, n, i) {
                        var o = (i._originalDate || e).getTimezoneOffset();
                        switch (t) {
                            case "O":
                            case "OO":
                            case "OOO":
                                return "GMT" + Rn(o, ":");
                            default:
                                return "GMT" + Dn(o, ":")
                        }
                    },
                    z: function(e, t, n, i) {
                        var o = (i._originalDate || e).getTimezoneOffset();
                        switch (t) {
                            case "z":
                            case "zz":
                            case "zzz":
                                return "GMT" + Rn(o, ":");
                            default:
                                return "GMT" + Dn(o, ":")
                        }
                    },
                    t: function(e, t, n, i) {
                        var o = i._originalDate || e;
                        return wn(Math.floor(o.getTime() / 1e3), t.length)
                    },
                    T: function(e, t, n, i) {
                        return wn((i._originalDate || e).getTime(), t.length)
                    }
                };

            function Rn(e, t) {
                var n = e > 0 ? "-" : "+",
                    i = Math.abs(e),
                    o = Math.floor(i / 60),
                    a = i % 60;
                if (0 === a) return n + String(o);
                var r = t || "";
                return n + String(o) + r + wn(a, 2)
            }

            function Tn(e, t) {
                return e % 60 == 0 ? (e > 0 ? "-" : "+") + wn(Math.abs(e) / 60, 2) : Dn(e, t)
            }

            function Dn(e, t) {
                var n = t || "",
                    i = e > 0 ? "-" : "+",
                    o = Math.abs(e);
                return i + wn(Math.floor(o / 60), 2) + n + wn(o % 60, 2)
            }
            var Nn = Zn,
                Un = function(e, t) {
                    switch (e) {
                        case "P":
                            return t.date({
                                width: "short"
                            });
                        case "PP":
                            return t.date({
                                width: "medium"
                            });
                        case "PPP":
                            return t.date({
                                width: "long"
                            });
                        default:
                            return t.date({
                                width: "full"
                            })
                    }
                },
                _n = function(e, t) {
                    switch (e) {
                        case "p":
                            return t.time({
                                width: "short"
                            });
                        case "pp":
                            return t.time({
                                width: "medium"
                            });
                        case "ppp":
                            return t.time({
                                width: "long"
                            });
                        default:
                            return t.time({
                                width: "full"
                            })
                    }
                },
                Ln = {
                    p: _n,
                    P: function(e, t) {
                        var n, i = e.match(/(P+)(p+)?/) || [],
                            o = i[1],
                            a = i[2];
                        if (!a) return Un(e, t);
                        switch (o) {
                            case "P":
                                n = t.dateTime({
                                    width: "short"
                                });
                                break;
                            case "PP":
                                n = t.dateTime({
                                    width: "medium"
                                });
                                break;
                            case "PPP":
                                n = t.dateTime({
                                    width: "long"
                                });
                                break;
                            default:
                                n = t.dateTime({
                                    width: "full"
                                })
                        }
                        return n.replace("{{date}}", Un(o, t)).replace("{{time}}", _n(a, t))
                    }
                },
                jn = Ln;
            var On = ["D", "DD"],
                Fn = ["YY", "YYYY"];

            function Wn(e, t, n) {
                if ("YYYY" === e) throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
                if ("YY" === e) throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
                if ("D" === e) throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
                if ("DD" === e) throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))
            }
            var zn = {
                    lessThanXSeconds: {
                        one: "less than a second",
                        other: "less than {{count}} seconds"
                    },
                    xSeconds: {
                        one: "1 second",
                        other: "{{count}} seconds"
                    },
                    halfAMinute: "half a minute",
                    lessThanXMinutes: {
                        one: "less than a minute",
                        other: "less than {{count}} minutes"
                    },
                    xMinutes: {
                        one: "1 minute",
                        other: "{{count}} minutes"
                    },
                    aboutXHours: {
                        one: "about 1 hour",
                        other: "about {{count}} hours"
                    },
                    xHours: {
                        one: "1 hour",
                        other: "{{count}} hours"
                    },
                    xDays: {
                        one: "1 day",
                        other: "{{count}} days"
                    },
                    aboutXWeeks: {
                        one: "about 1 week",
                        other: "about {{count}} weeks"
                    },
                    xWeeks: {
                        one: "1 week",
                        other: "{{count}} weeks"
                    },
                    aboutXMonths: {
                        one: "about 1 month",
                        other: "about {{count}} months"
                    },
                    xMonths: {
                        one: "1 month",
                        other: "{{count}} months"
                    },
                    aboutXYears: {
                        one: "about 1 year",
                        other: "about {{count}} years"
                    },
                    xYears: {
                        one: "1 year",
                        other: "{{count}} years"
                    },
                    overXYears: {
                        one: "over 1 year",
                        other: "over {{count}} years"
                    },
                    almostXYears: {
                        one: "almost 1 year",
                        other: "almost {{count}} years"
                    }
                },
                Pn = function(e, t, n) {
                    var i, o = zn[e];
                    return i = "string" == typeof o ? o : 1 === t ? o.one : o.other.replace("{{count}}", t.toString()), null != n && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + i : i + " ago" : i
                };

            function Hn(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.width ? String(t.width) : e.defaultWidth;
                    return e.formats[n] || e.formats[e.defaultWidth]
                }
            }
            var qn = {
                    date: Hn({
                        formats: {
                            full: "EEEE, MMMM do, y",
                            long: "MMMM do, y",
                            medium: "MMM d, y",
                            short: "MM/dd/yyyy"
                        },
                        defaultWidth: "full"
                    }),
                    time: Hn({
                        formats: {
                            full: "h:mm:ss a zzzz",
                            long: "h:mm:ss a z",
                            medium: "h:mm:ss a",
                            short: "h:mm a"
                        },
                        defaultWidth: "full"
                    }),
                    dateTime: Hn({
                        formats: {
                            full: "{{date}} 'at' {{time}}",
                            long: "{{date}} 'at' {{time}}",
                            medium: "{{date}}, {{time}}",
                            short: "{{date}}, {{time}}"
                        },
                        defaultWidth: "full"
                    })
                },
                $n = {
                    lastWeek: "'last' eeee 'at' p",
                    yesterday: "'yesterday at' p",
                    today: "'today at' p",
                    tomorrow: "'tomorrow at' p",
                    nextWeek: "eeee 'at' p",
                    other: "P"
                },
                Yn = function(e, t, n, i) {
                    return $n[e]
                };

            function Gn(e) {
                return function(t, n) {
                    var i;
                    if ("formatting" === (null != n && n.context ? String(n.context) : "standalone") && e.formattingValues) {
                        var o = e.defaultFormattingWidth || e.defaultWidth,
                            a = null != n && n.width ? String(n.width) : o;
                        i = e.formattingValues[a] || e.formattingValues[o]
                    } else {
                        var r = e.defaultWidth,
                            s = null != n && n.width ? String(n.width) : e.defaultWidth;
                        i = e.values[s] || e.values[r]
                    }
                    return i[e.argumentCallback ? e.argumentCallback(t) : t]
                }
            }
            var Vn = {
                ordinalNumber: function(e, t) {
                    var n = Number(e),
                        i = n % 100;
                    if (i > 20 || i < 10) switch (i % 10) {
                        case 1:
                            return n + "st";
                        case 2:
                            return n + "nd";
                        case 3:
                            return n + "rd"
                    }
                    return n + "th"
                },
                era: Gn({
                    values: {
                        narrow: ["B", "A"],
                        abbreviated: ["BC", "AD"],
                        wide: ["Before Christ", "Anno Domini"]
                    },
                    defaultWidth: "wide"
                }),
                quarter: Gn({
                    values: {
                        narrow: ["1", "2", "3", "4"],
                        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
                    },
                    defaultWidth: "wide",
                    argumentCallback: function(e) {
                        return e - 1
                    }
                }),
                month: Gn({
                    values: {
                        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    },
                    defaultWidth: "wide"
                }),
                day: Gn({
                    values: {
                        narrow: ["S", "M", "T", "W", "T", "F", "S"],
                        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    },
                    defaultWidth: "wide"
                }),
                dayPeriod: Gn({
                    values: {
                        narrow: {
                            am: "a",
                            pm: "p",
                            midnight: "mi",
                            noon: "n",
                            morning: "morning",
                            afternoon: "afternoon",
                            evening: "evening",
                            night: "night"
                        },
                        abbreviated: {
                            am: "AM",
                            pm: "PM",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "morning",
                            afternoon: "afternoon",
                            evening: "evening",
                            night: "night"
                        },
                        wide: {
                            am: "a.m.",
                            pm: "p.m.",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "morning",
                            afternoon: "afternoon",
                            evening: "evening",
                            night: "night"
                        }
                    },
                    defaultWidth: "wide",
                    formattingValues: {
                        narrow: {
                            am: "a",
                            pm: "p",
                            midnight: "mi",
                            noon: "n",
                            morning: "in the morning",
                            afternoon: "in the afternoon",
                            evening: "in the evening",
                            night: "at night"
                        },
                        abbreviated: {
                            am: "AM",
                            pm: "PM",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "in the morning",
                            afternoon: "in the afternoon",
                            evening: "in the evening",
                            night: "at night"
                        },
                        wide: {
                            am: "a.m.",
                            pm: "p.m.",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "in the morning",
                            afternoon: "in the afternoon",
                            evening: "in the evening",
                            night: "at night"
                        }
                    },
                    defaultFormattingWidth: "wide"
                })
            };

            function Jn(e) {
                return function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = n.width,
                        o = i && e.matchPatterns[i] || e.matchPatterns[e.defaultMatchWidth],
                        a = t.match(o);
                    if (!a) return null;
                    var r, s = a[0],
                        l = i && e.parsePatterns[i] || e.parsePatterns[e.defaultParseWidth],
                        d = Array.isArray(l) ? function(e, t) {
                            for (var n = 0; n < e.length; n++)
                                if (t(e[n])) return n;
                            return
                        }(l, (function(e) {
                            return e.test(s)
                        })) : function(e, t) {
                            for (var n in e)
                                if (e.hasOwnProperty(n) && t(e[n])) return n;
                            return
                        }(l, (function(e) {
                            return e.test(s)
                        }));
                    return r = e.valueCallback ? e.valueCallback(d) : d, {
                        value: r = n.valueCallback ? n.valueCallback(r) : r,
                        rest: t.slice(s.length)
                    }
                }
            }
            var Xn, Qn = {
                    ordinalNumber: (Xn = {
                        matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                        parsePattern: /\d+/i,
                        valueCallback: function(e) {
                            return parseInt(e, 10)
                        }
                    }, function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.match(Xn.matchPattern);
                        if (!n) return null;
                        var i = n[0],
                            o = e.match(Xn.parsePattern);
                        if (!o) return null;
                        var a = Xn.valueCallback ? Xn.valueCallback(o[0]) : o[0];
                        return {
                            value: a = t.valueCallback ? t.valueCallback(a) : a,
                            rest: e.slice(i.length)
                        }
                    }),
                    era: Jn({
                        matchPatterns: {
                            narrow: /^(b|a)/i,
                            abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                            wide: /^(before christ|before common era|anno domini|common era)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/^b/i, /^(a|c)/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    quarter: Jn({
                        matchPatterns: {
                            narrow: /^[1234]/i,
                            abbreviated: /^q[1234]/i,
                            wide: /^[1234](th|st|nd|rd)? quarter/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            any: [/1/i, /2/i, /3/i, /4/i]
                        },
                        defaultParseWidth: "any",
                        valueCallback: function(e) {
                            return e + 1
                        }
                    }),
                    month: Jn({
                        matchPatterns: {
                            narrow: /^[jfmasond]/i,
                            abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                            wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                            any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    day: Jn({
                        matchPatterns: {
                            narrow: /^[smtwf]/i,
                            short: /^(su|mo|tu|we|th|fr|sa)/i,
                            abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                            wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
                        },
                        defaultMatchWidth: "wide",
                        parsePatterns: {
                            narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                            any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
                        },
                        defaultParseWidth: "any"
                    }),
                    dayPeriod: Jn({
                        matchPatterns: {
                            narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                            any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
                        },
                        defaultMatchWidth: "any",
                        parsePatterns: {
                            any: {
                                am: /^a/i,
                                pm: /^p/i,
                                midnight: /^mi/i,
                                noon: /^no/i,
                                morning: /morning/i,
                                afternoon: /afternoon/i,
                                evening: /evening/i,
                                night: /night/i
                            }
                        },
                        defaultParseWidth: "any"
                    })
                },
                Kn = {
                    code: "en-US",
                    formatDistance: Pn,
                    formatLong: qn,
                    formatRelative: Yn,
                    localize: Vn,
                    match: Qn,
                    options: {
                        weekStartsOn: 0,
                        firstWeekContainsDate: 1
                    }
                },
                ei = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
                ti = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
                ni = /^'([^]*?)'?$/,
                ii = /''/g,
                oi = /[a-zA-Z]/;

            function ai(e, t, n) {
                var i, o, a, r, s, l, d, A, c, u, p, f, h, m, g, C, b, x;
                rn(2, arguments);
                var v = String(t),
                    w = Cn(),
                    y = null !== (i = null !== (o = null == n ? void 0 : n.locale) && void 0 !== o ? o : w.locale) && void 0 !== i ? i : Kn,
                    B = An(null !== (a = null !== (r = null !== (s = null !== (l = null == n ? void 0 : n.firstWeekContainsDate) && void 0 !== l ? l : null == n || null === (d = n.locale) || void 0 === d || null === (A = d.options) || void 0 === A ? void 0 : A.firstWeekContainsDate) && void 0 !== s ? s : w.firstWeekContainsDate) && void 0 !== r ? r : null === (c = w.locale) || void 0 === c || null === (u = c.options) || void 0 === u ? void 0 : u.firstWeekContainsDate) && void 0 !== a ? a : 1);
                if (!(B >= 1 && B <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
                var I = An(null !== (p = null !== (f = null !== (h = null !== (m = null == n ? void 0 : n.weekStartsOn) && void 0 !== m ? m : null == n || null === (g = n.locale) || void 0 === g || null === (C = g.options) || void 0 === C ? void 0 : C.weekStartsOn) && void 0 !== h ? h : w.weekStartsOn) && void 0 !== f ? f : null === (b = w.locale) || void 0 === b || null === (x = b.options) || void 0 === x ? void 0 : x.weekStartsOn) && void 0 !== p ? p : 0);
                if (!(I >= 0 && I <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
                if (!y.localize) throw new RangeError("locale must contain localize property");
                if (!y.formatLong) throw new RangeError("locale must contain formatLong property");
                var k = sn(e);
                if (!un(k)) throw new RangeError("Invalid time value");
                var E = function(e) {
                        var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
                        return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime()
                    }(k),
                    S = pn(k, E),
                    M = {
                        firstWeekContainsDate: B,
                        weekStartsOn: I,
                        locale: y,
                        _originalDate: k
                    };
                return v.match(ti).map((function(e) {
                    var t = e[0];
                    return "p" === t || "P" === t ? (0, jn[t])(e, y.formatLong) : e
                })).join("").match(ei).map((function(i) {
                    if ("''" === i) return "'";
                    var o = i[0];
                    if ("'" === o) return function(e) {
                        var t = e.match(ni);
                        if (!t) return e;
                        return t[1].replace(ii, "'")
                    }(i);
                    var a, r = Nn[o];
                    if (r) return null != n && n.useAdditionalWeekYearTokens || (a = i, -1 === Fn.indexOf(a)) || Wn(i, t, String(e)), null != n && n.useAdditionalDayOfYearTokens || ! function(e) {
                        return -1 !== On.indexOf(e)
                    }(i) || Wn(i, t, String(e)), r(S, i, y.localize, M);
                    if (o.match(oi)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + o + "`");
                    return i
                })).join("")
            }
            const ri = e => {
                    const t = new Date(1e3 * e);
                    return function(e) {
                        return rn(1, arguments), dn(e, Date.now())
                    }(t) ? (0, Ye.dW)("timeToday", null, "Today") : function(e) {
                        return rn(1, arguments), dn(e, cn(Date.now(), 1))
                    }(t) ? (0, Ye.dW)("timeYesterday", null, "Yesterday") : ai(t, "d/M/yyyy")
                },
                si = e => (0, N.tZ)("span", {
                    className: "timestamp-operator",
                    children: `${e} - `
                }),
                li = e => {
                    const t = e.operator.avatarSrc ? {
                        backgroundImage: `url('${e.operator.avatarSrc}')`
                    } : null;
                    return (0, N.BX)(N.HY, {
                        children: [t && (0, N.tZ)("span", {
                            className: "timestamp-avatar",
                            style: t
                        }), si(e.operator.name)]
                    })
                },
                di = e => (0, N.BX)("div", {
                    className: "messageTimestamp",
                    children: [e.operator && (0, N.tZ)(li, {
                        operator: e.operator
                    }), e.isAIAssistant && si("Lyro AI bot"), `${ri(e.time)}, ${ai(new Date(1e3*e.time),"H:mm")}`]
                });
            di.defaultProps = {
                operator: null,
                isAIAssistant: !1
            };
            var Ai = (0, a.$j)(((e, t) => ({
                operator: t.operator_id ? (0, Lt.jQ)(e, t.operator_id) : null
            })))(di);
            class ci extends o.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "state", {
                        isTimestampVisible: !1
                    }), (0, i.Z)(this, "messageRef", o.createRef()), (0, i.Z)(this, "wrapperRef", o.createRef()), (0, i.Z)(this, "onMessageClick", (() => {
                        this.setState((e => ({
                            isTimestampVisible: !e.isTimestampVisible
                        })))
                    }))
                }
                componentDidMount() {
                    this.props.adjustMessageWidth(this.messageRef.current, this.wrapperRef.current)
                }
                render() {
                    return (0, N.BX)("div", {
                        className: "message message-operator " + (this.state.isTimestampVisible ? "timestamp-visible" : ""),
                        onClick: this.onMessageClick,
                        ref: this.wrapperRef,
                        children: [(0, N.tZ)("span", {
                            className: "message-content",
                            dangerouslySetInnerHTML: {
                                __html: this.props.content
                            },
                            ref: this.messageRef
                        }), (0, N.tZ)(Qt, { in: this.state.isTimestampVisible,
                            children: (0, N.tZ)(Ai, {
                                time: this.props.time_sent,
                                operator_id: this.props.operator_id
                            })
                        })]
                    })
                }
            }
            var ui = ci;
            var pi = e => {
                const {
                    adjustMessageWidth: t
                } = e, [n, i] = (0, o.useState)(!1), a = (0, o.useRef)(null), r = (0, o.useRef)(null);
                (0, o.useEffect)((() => {
                    t(a.current, r.current)
                }), [t]);
                const s = (0, o.useCallback)((() => {
                    i((e => !e))
                }), []);
                return (0, N.BX)("div", {
                    className: `message message-visitor ${n&&e.isDelivered?"timestamp-visible":""} ${e.isDelivered?"":"not-delivered"}`,
                    onClick: s,
                    style: e.isDelivered ? {
                        background: `linear-gradient(135deg, ${e.widgetColor[0]}, ${e.widgetColor[1]})`,
                        color: e.widgetColor[2]
                    } : {},
                    ref: r,
                    children: [(0, N.tZ)("span", {
                        className: "message-content",
                        dangerouslySetInnerHTML: {
                            __html: e.content
                        },
                        ref: a
                    }), (0, N.tZ)(Qt, { in: n && e.isDelivered,
                        children: (0, N.tZ)(Ai, {
                            time: e.time_sent
                        })
                    }), !e.isDelivered && (0, N.tZ)("span", {
                        className: "resend-message",
                        style: {
                            color: "red"
                        },
                        children: (0, Ye.dW)("messageNotDelivered", null, "Not delivered.")
                    })]
                })
            };

            function fi(e, t, n) {
                return n ? n(e) : "email" === t ? (0, pt.vV)(e) : "tel" === t ? (0, pt.EY)(e) : "" !== e.trim()
            }
            class hi extends o.Component {
                constructor(e) {
                    super(e), (0, i.Z)(this, "onChange", (e => {
                        const {
                            value: t,
                            checked: n,
                            type: i
                        } = e.target, o = "checkbox" !== i ? t : n, a = fi(o, this.props.type, this.props.validator);
                        this.setState({
                            value: o,
                            isValid: a
                        }), this.props.onChange && this.props.onChange(o, a), this.props.isValidCallback && this.props.isValidCallback(a)
                    })), (0, i.Z)(this, "onKeyDown", (e => {
                        const {
                            keyCode: t
                        } = e, n = 13 === t;
                        return n && !this.state.isValid && (this.setState({
                            showErrorIcon: !0
                        }), this.props.onKeyDown && this.props.onKeyDown(!1), clearTimeout(this.errorIconHideTimer), this.errorIconHideTimer = null, this.errorIconHideTimer = setTimeout((() => {
                            this.setState({
                                showErrorIcon: !1
                            })
                        }), 820)), !(!n || !this.state.isValid) && (e.preventDefault(), this.props.onKeyDown && this.props.onKeyDown(t), !0)
                    })), (0, i.Z)(this, "onFocus", (() => {
                        this.props.onFocus && this.props.onFocus(), this.props.shouldToggleHeader && !this.props.disabled && this.isMobile && this.props.dispatch((0, yt.xKy)(!0))
                    })), (0, i.Z)(this, "onBlur", (() => {
                        this.props.onBlur && this.props.onBlur(), this.props.shouldToggleHeader && !this.props.disabled && this.isMobile && setTimeout((() => {
                            this.props.dispatch((0, yt.xKy)(!1))
                        }), 100)
                    })), (0, i.Z)(this, "getError", (() => void 0 === this.props.forceErrorIcon ? this.state.showErrorIcon : this.props.forceErrorIcon));
                    const t = null === e.value ? "" : e.value;
                    this.state = {
                        value: t,
                        isValid: fi(t, e.type, e.validator),
                        showErrorIcon: !1
                    }, this.isMobile = (0, pt.tq)(), this.errorIconHideTimer = null
                }
                componentDidMount() {
                    const {
                        isValid: e
                    } = this.state;
                    this.state.isValid && (this.props.onChange && this.props.onChange(this.state.value, e), this.props.isValidCallback && this.props.isValidCallback(e))
                }
                render() {
                    let e = null,
                        t = null;
                    return "checkbox" !== this.props.type ? (e = (0, N.tZ)(ut, {
                        value: [this.props.placeholder],
                        children: e => (0, N.tZ)("input", {
                            type: this.props.type,
                            placeholder: e[this.props.placeholder],
                            onChange: this.onChange,
                            onKeyDown: this.onKeyDown,
                            value: this.state.value,
                            readOnly: this.props.disabled,
                            className: this.props.disabled ? "disabled" : "",
                            ref: this.props.bindInputRef,
                            onFocus: this.onFocus,
                            onBlur: this.onBlur
                        })
                    }), t = (0, N.tZ)(wt.Eh, {}), this.state.isValid ? t = (0, N.tZ)(wt.qB, {}) : !this.state.isValid && this.getError() && (t = (0, N.tZ)(wt.x8, {}))) : e = (0, N.BX)("label", {
                        htmlFor: this.props.id,
                        children: [(0, N.tZ)("input", {
                            id: this.props.id,
                            type: this.props.type,
                            onChange: this.onChange,
                            checked: this.state.value,
                            disabled: this.props.disabled,
                            className: this.props.disabled ? "disabled" : "",
                            ref: this.props.bindInputRef
                        }), (0, N.tZ)(ut, {
                            value: this.props.placeholder,
                            linkify: !0
                        })]
                    }), (0, N.BX)("div", {
                        className: `field-wrapper ${this.props.shakeClassName} ${this.getError()?"field-wrapper-with-error":""}`,
                        children: [t, e]
                    })
                }
            }
            hi.defaultProps = {
                placeholder: "",
                bindInputRef: void 0,
                onChange: void 0,
                onKeyDown: null,
                disabled: !1,
                isValidCallback: null,
                value: null,
                forceErrorIcon: !1,
                id: void 0,
                validator: void 0,
                shouldToggleHeader: !0,
                onFocus: void 0,
                onBlur: void 0,
                shakeClassName: ""
            };
            var mi = e => {
                    const t = (0, a.I0)();
                    return (0, N.tZ)(hi, { ...e,
                        dispatch: t
                    })
                },
                gi = n(9245);
            const Ci = o.forwardRef(((e, t) => {
                let n = "";
                const i = {};
                if ("email" === e.type) n = "email";
                else if ("name" === e.type) n = "text";
                else if ("phone" === e.type) n = "tel";
                else if (e.type === gi.Vb) n = "checkbox";
                else if (e.type === gi.WQ) {
                    if (i.validator = () => !0, i.placeholder = "signUpNewsletter", e.value && "object" == typeof e.value) {
                        const t = e.value;
                        i.value = "subscribed" === t.value
                    }
                    n = "checkbox"
                } else {
                    if ("signUpNewsletter" !== e.type) return null;
                    i.validator = () => !0, i.placeholder = "signUpNewsletter", n = "checkbox"
                }
                return e.type === gi.Vb ? (0, N.tZ)("div", {
                    className: `field-wrapper ${e.shakeClassName} ${e.forceErrorIcon?"field-wrapper-with-error":""}`,
                    children: (0, N.BX)("label", {
                        htmlFor: e.type,
                        children: [(0, N.tZ)("input", {
                            id: e.type,
                            type: n,
                            checked: e.value,
                            onChange: t => {
                                e.onInputChange(t.target.checked, t.target.checked, e.type)
                            },
                            disabled: e.disabled,
                            className: e.disabled ? "disabled" : "",
                            ref: t
                        }), (0, N.tZ)(ut, {
                            value: e.placeholder,
                            linkify: !0,
                            markdownify: !0
                        })]
                    })
                }) : (0, N.tZ)(mi, {
                    id: e.type,
                    type: n,
                    onChange: (t, n) => {
                        e.onInputChange(t, n, e.type)
                    },
                    value: e.value,
                    disabled: e.disabled,
                    placeholder: e.placeholder,
                    bindInputRef: t,
                    onKeyDown: e.onKeyDown,
                    forceErrorIcon: e.forceErrorIcon,
                    shakeClassName: e.shakeClassName,
                    ...i
                })
            }));
            Ci.defaultProps = {
                value: null,
                forceErrorIcon: !1,
                onKeyDown: void 0,
                onInputChange: () => {},
                shakeClassName: ""
            };
            var bi = Ci;
            var xi = (0, a.$j)((e => ({
                visitor: e.visitor
            })))((e => (0, N.BX)("div", {
                className: "message message-operator pre-chat",
                children: [(0, N.tZ)(ut, {
                    value: "preformMessage",
                    emojify: !0,
                    linkify: !0
                }), e.preChatFields.map((t => (0, N.tZ)(bi, {
                    type: t.type,
                    placeholder: t.placeholder,
                    value: e.visitor[t.type],
                    disabled: !0
                }, t.type)))]
            })));
            var vi = () => {
                const e = (0, a.v9)(Bt.MP);
                return (0, N.BX)("div", {
                    className: "message message-operator always-online",
                    children: [(0, N.tZ)(ut, {
                        value: "alwaysOnlineEngageMessage",
                        emojify: !0,
                        linkify: !0
                    }), (0, N.tZ)(mi, {
                        type: "email",
                        placeholder: "preformInput_email",
                        value: e,
                        disabled: !0
                    })]
                })
            };
            var wi = () => (0, N.tZ)("div", {
                className: "message message-operator",
                children: (0, N.tZ)(ut, {
                    value: "ticketSubmittedMessage",
                    emojify: !0,
                    linkify: !0
                })
            });
            var yi = e => {
                const t = (0, a.v9)(Bt.aI),
                    n = n => {
                        const {
                            dispatch: i
                        } = e;
                        if (t) i((0, yt.wp$)((0, Ye.dW)("disabledTextInputPlaceholder", null, "Choose one of the options above \u261d\ufe0f")));
                        else {
                            const t = n ? (0, Ye.dW)("rateSatisfied", null, "Yes, I did!") : (0, Ye.dW)("rateDissatisfied", null, "No. I\u2019m not satisfied.");
                            i((0, yt.liy)(t, !1)), i((0, yt.j3E)(n)), e.dispatch((0, yt.es$)(e.id))
                        }
                    };
                return (0, N.BX)("div", {
                    className: "message message-operator message-with-buttons " + (e.disabled ? "buttons-hidden" : ""),
                    children: [(0, N.tZ)("span", {
                        children: (0, N.tZ)(ut, {
                            value: "rateConversationMessage"
                        })
                    }), !e.disabled && (0, N.BX)("div", {
                        className: "button-wrapper",
                        children: [(0, N.tZ)("button", {
                            type: "button",
                            onClick: () => n(!0),
                            children: (0, N.tZ)("span", {
                                children: (0, N.tZ)(ut, {
                                    value: "rateSatisfied"
                                })
                            })
                        }), (0, N.tZ)("button", {
                            type: "button",
                            onClick: () => n(!1),
                            children: (0, N.tZ)("span", {
                                children: (0, N.tZ)(ut, {
                                    value: "rateDissatisfied"
                                })
                            })
                        })]
                    })]
                })
            };
            var Bi = e => {
                let {
                    disabled: t,
                    id: n,
                    content: i,
                    isRateGood: r
                } = e;
                const s = (0, a.I0)(),
                    l = (0, a.v9)((e => e.sendVisitorMessageFlag)),
                    [d, A] = (0, o.useState)(!1),
                    [c, u] = (0, o.useState)("");
                (0, o.useEffect)((() => {
                    !t && l && d && s((0, yt.ncp)(n, c))
                }), [c, t, s, n, d, l]);
                return (0, N.BX)("div", {
                    className: "message message-operator rate-comment",
                    children: [(0, N.tZ)("span", {
                        dangerouslySetInnerHTML: {
                            __html: st((0, Ye.dW)(r ? "commentForGoodRating" : "commentForBadRating", null, r ? "Thank you for your rate \ud83d\ude0d Would you like to leave a comment?" : "Thank you for your rate \ud83d\ude25 Would you like to leave a comment?"))
                        }
                    }), (0, N.tZ)(mi, {
                        type: "text",
                        placeholder: "typeOptional",
                        onChange: u,
                        onKeyDown: e => !(13 !== e || !d) && (s((0, yt.jaP)(!0)), (0, Nt.Rn)(), !0),
                        isValidCallback: A,
                        value: t ? i : null,
                        disabled: t
                    })]
                })
            };
            class Ii extends o.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "state", {
                        percentLoaded: 0
                    }), (0, i.Z)(this, "removeMessageAndShowAlert", (e => {
                        this.props.dispatch((0, yt.Gdg)(this.props.id)), this.props.dispatch((0, yt.wp$)(e))
                    })), (0, i.Z)(this, "isFileValid", (e => {
                        try {
                            if (e.size / 1024 / 1024 > 10) return this.removeMessageAndShowAlert((0, Ye.dW)("fileToBigAlert", null, "File exceed 10MB limit.")), !1;
                            const t = e.name.split(".").pop().toLowerCase();
                            return -1 !== Ut.EA.indexOf(t) || (this.removeMessageAndShowAlert((0, Ye.dW)("extensionNotSupportedAlert", null, "File extension not supported.")), !1)
                        } catch (e) {
                            return (0, gt.G)(e), !1
                        }
                    })), (0, i.Z)(this, "handleXhrError", (e => {
                        switch (e) {
                            case "ERR_INVALID_EXTENSION":
                                return this.removeMessageAndShowAlert((0, Ye.dW)("extensionNotSupportedAlert", null, "File extension not supported.")), !1;
                            case "ERR_FILE_SIZE":
                                return this.removeMessageAndShowAlert((0, Ye.dW)("fileToBigAlert", null, "File exceed 10MB limit.")), !1;
                            default:
                                return this.removeMessageAndShowAlert((0, Ye.dW)("unknownErrorAlert", null, "Unknown error occurred.")), !1
                        }
                    })), (0, i.Z)(this, "uploadFile", (e => {
                        if (!this.isFileValid(e)) return !1;
                        if ((0, pt.$U)()) try {
                            const t = e.name.split(".").pop().toLowerCase(),
                                n = (0, Ut.SA)(t),
                                i = new FileReader;
                            i.onload = i => {
                                this.props.dispatch((0, yt.Y57)(this.props.id, n, i.target.result, e.name, t, i.target.result))
                            }, i.readAsDataURL(e)
                        } catch (e) {
                            (0, gt.G)(e)
                        } else try {
                            const t = `https://api-v2.tidio.co/upload/file/external?project_public_key=${this.props.publicKey}&visitor_id=${this.props.visitorID}`,
                                n = new XMLHttpRequest,
                                i = new FormData;
                            n.open("POST", t, !0), n.onreadystatechange = () => {
                                if (4 === n.readyState && 200 === n.status) {
                                    const t = JSON.parse(n.responseText);
                                    if (!1 === t.status) return this.handleXhrError(t.value), !1;
                                    this.props.dispatch((0, yt.Y57)(this.props.id, t.value.type, t.value.url, e.name, t.value.meta.extension, t.value.thumb.medium))
                                }
                                return !0
                            }, i.append("upload", e), n.upload.addEventListener("progress", (e => {
                                if (e.lengthComputable) {
                                    const t = Math.round(100 * e.loaded / e.total);
                                    this.setState({
                                        percentLoaded: t
                                    })
                                }
                            }), !1), n.upload.addEventListener("load", (() => {
                                this.setState({
                                    percentLoaded: 100
                                })
                            }), !1), n.onerror = () => {
                                (0, gt.G)("File upload error"), this.removeMessageAndShowAlert((0, Ye.dW)("genericFileUploadAlert", null, "Something went wrong when trying to upload your file."))
                            }, n.send(i)
                        } catch (e) {
                            (0, gt.G)(e)
                        }
                        return !0
                    }))
                }
                componentDidMount() {
                    this.uploadFile(this.props.file)
                }
                render() {
                    return (0, N.tZ)("div", {
                        className: `message message-upload message-${this.props.sender}`,
                        role: "progressbar",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100",
                        "aria-valuenow": this.state.percentLoaded,
                        style: {
                            background: `linear-gradient(135deg, ${this.props.widgetColor[0]}, ${this.props.widgetColor[1]})`,
                            color: this.props.widgetColor[2]
                        },
                        children: (0, N.BX)("span", {
                            children: [(0, N.tZ)(wt.aN, {}), `${(0,Ye.dW)("uploaded",null,"Uploaded")} ${this.state.percentLoaded}%`]
                        })
                    })
                }
            }
            var ki = (0, a.$j)((e => ({
                publicKey: e.publicKey,
                visitorID: e.visitor.id
            })))(Ii);
            class Ei extends o.Component {
                render() {
                    switch (this.props.extension) {
                        case "doc":
                        case "docx":
                            return (0, N.tZ)(wt.QW, {});
                        case "flv":
                            return (0, N.tZ)(wt.xS, {});
                        case "mpg":
                        case "mp4":
                        case "avi":
                            return (0, N.tZ)(wt.cP, {});
                        case "pdf":
                            return (0, N.tZ)(wt.Q3, {});
                        case "txt":
                        case "rtf":
                            return (0, N.tZ)(wt.H_, {});
                        case "wma":
                        case "mp3":
                            return (0, N.tZ)(wt.Wf, {});
                        case "xls":
                        case "xlsx":
                        case "csv":
                            return (0, N.tZ)(wt._E, {});
                        default:
                            return null
                    }
                }
            }
            var Si = Ei;
            const Mi = "https://assets.tidiochat.com/img/not_found.jpg";
            var Zi = e => {
                const {
                    content: t,
                    extension: n,
                    thumb: i,
                    name: r,
                    id: s
                } = e, l = (0, a.I0)(), d = (0, a.v9)((e => e.publicKey)), A = (0, a.v9)((e => e.visitor.id)), c = (0, a.v9)(Bt.Xf), [u, p] = (0, o.useState)(t), [f, h] = (0, o.useState)(i || ""), [m, g] = (0, o.useState)(!0), C = "gif" !== n ? f : u, b = (0, o.useCallback)((async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (e === Mi) return g(!1), "";
                    if (-1 === e.indexOf("/conversation/")) {
                        const n = (0, pt.en)(e),
                            i = `/${d}/conversation/${A}`,
                            o = n ? `${n.protocol}//${n.host}${i}${n.pathname}${n.search}${n.hash}` : e,
                            a = await async function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mi;
                                return new Promise(((t, n) => {
                                    const i = new Image;
                                    i.src = e, i.onload = () => t(e), i.onerror = e => {
                                        n(e)
                                    }
                                })).catch((() => t))
                            }(o);
                        t ? h(a) : p(a)
                    } else h(Mi), p(Mi);
                    return ""
                }), [d, A]);
                return m ? (0, N.tZ)("span", {
                    children: (0, N.BX)("a", {
                        href: t,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: t => {
                            c !== Et.t4.WIX && (t.preventDefault(), l((0, yt.Z1k)(u))), e.onClick()
                        },
                        children: [(0, N.tZ)(wt.UW, {}), (0, N.tZ)("img", {
                            className: "attachment-img",
                            src: C,
                            onLoad: e => {
                                e.currentTarget.setAttribute("alt", `${r}`), l((0, yt.GNj)(s, !0))
                            },
                            onError: () => {
                                b(u), b(f, !0)
                            },
                            alt: ""
                        })]
                    })
                }) : null
            };
            const Ri = (0, d.iv)({
                    position: "absolute",
                    bottom: (0, pt.tq)() ? -37 : -31,
                    left: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: 260
                }, "", ""),
                Ti = (0, d.iv)({
                    fontSize: 12,
                    marginTop: (0, pt.tq)() ? 6 : 11,
                    marginRight: 8
                }, "", "");
            var Di = {
                    name: "11tx334",
                    styles: "position:relative;display:flex;align-items:center;justify-content:space-between;padding:0px 7px;width:77px;height:40px;background-color:#F0F2F7;border:3px solid white;border-radius:20px;box-shadow:0px 3px 8px rgba(0, 18, 46, 0.12);::before{content:'';position:absolute;left:35px;width:1px;height:20px;background-color:#C9D1DD;}"
                },
                Ni = {
                    name: "7etox3",
                    styles: "position:relative;display:flex;align-items:center;justify-content:space-between;width:100px;height:48px"
                };
            const Ui = (e, t) => (0, pt.tq)() ? (0, d.iv)({
                outline: "none",
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "#F0F2F7",
                boxShadow: "0px 3px 8px 0px rgba(0, 27, 71, 0.08)",
                border: "3px solid white",
                svg: {
                    fill: e ? "#ACB8CB" : "#007DFC",
                    height: 22,
                    width: 22
                }
            }, "", "") : (0, d.iv)({
                position: "relative",
                cursor: t ? "initial" : "pointer",
                outline: "none",
                "::before": {
                    content: "''",
                    position: "absolute",
                    backgroundColor: "rgba(0,125,252,0.12)",
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    transition: "all 0.16s ease-in-out",
                    transform: "scale(0)",
                    top: "calc(50% - 17px)",
                    left: "calc(50% - 17px)"
                },
                "&:hover::before": {
                    transform: t ? "scale(0)" : "scale(1)"
                },
                svg: {
                    fill: e ? "#ACB8CB" : "#007DFC",
                    height: 20,
                    width: 20
                }
            }, "", "");
            var _i = e => {
                const t = (0, a.I0)(),
                    n = n => {
                        !e.rating && e.ratingId && t((0, yt.Hvn)(e.messageId, e.ratingId, n))
                    };
                return (0, N.BX)("div", {
                    css: Ri,
                    children: [(0, N.tZ)("span", {
                        css: Ti,
                        children: (0, N.tZ)(ut, {
                            value: "ratingLabel",
                            fallback: "Was this helpful?"
                        })
                    }), (0, N.BX)("div", {
                        css: (0, pt.tq)() ? Ni : Di,
                        children: [(0, N.tZ)("button", {
                            type: "button",
                            "aria-label": "yes",
                            onClick: () => n("yes"),
                            css: Ui("no" === e.rating, Boolean(e.rating)),
                            children: "yes" === e.rating ? (0, N.tZ)(wt.$T, {}) : (0, N.tZ)(wt.sS, {})
                        }), (0, N.tZ)("button", {
                            type: "button",
                            "aria-label": "no",
                            onClick: () => n("no"),
                            css: Ui("yes" === e.rating, Boolean(e.rating)),
                            children: "no" === e.rating ? (0, N.tZ)(wt.SJ, {}) : (0, N.tZ)(wt.iL, {})
                        })]
                    })]
                })
            };
            var Li = e => {
                const [t, n] = (0, o.useState)(!1), i = Boolean(e.ratingId) && !t, a = () => {
                    n((e => !e))
                };
                return (0, N.tZ)("div", {
                    className: `message message-upload ${"image"===e.attachmentType?"message-image":"message-file"} message-${"bot"===e.sender?"operator":e.sender} ${t?"timestamp-visible":""} ${e.ratingId?"rating-visible":""}`,
                    style: "visitor" === e.sender ? {
                        background: `linear-gradient(135deg, ${e.widgetColor[0]}, ${e.widgetColor[1]})`,
                        color: e.widgetColor[2]
                    } : {},
                    children: "image" === e.attachmentType ? (0, N.BX)(N.HY, {
                        children: [(0, N.tZ)(Zi, {
                            content: e.content,
                            extension: e.extension,
                            thumb: e.thumb,
                            name: e.name,
                            id: e.id,
                            onClick: a
                        }), (0, N.tZ)(Qt, { in: t,
                            children: (0, N.tZ)(Ai, {
                                time: e.time_sent
                            })
                        }), (0, N.tZ)(Qt, { in: i,
                            children: (0, N.tZ)(_i, {
                                messageId: e.id,
                                ratingId: e.ratingId,
                                rating: e.rating
                            })
                        })]
                    }) : (0, N.BX)(N.HY, {
                        children: [(0, N.BX)("a", {
                            href: e.content,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: a,
                            children: [(0, N.tZ)(wt.UW, {}), (0, N.BX)("span", {
                                children: [(0, N.tZ)(Si, {
                                    extension: e.extension
                                }), `${e.name}`]
                            })]
                        }), (0, N.tZ)(Qt, { in: t,
                            children: (0, N.tZ)(Ai, {
                                time: e.time_sent
                            })
                        })]
                    })
                })
            };
            var ji = e => (0, N.tZ)("div", {
                className: "message message-operator",
                children: (0, N.tZ)("span", {
                    className: "message-content",
                    dangerouslySetInnerHTML: {
                        __html: e.content
                    }
                })
            });
            var Oi = e => {
                const [t, n] = (0, o.useState)(!1), i = Boolean(e.ratingId) && !t, a = {
                    border: "1px solid transparent",
                    background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, ${pt.UC[0]}, ${pt.UC[1]}) border-box`
                };
                return (0, N.BX)("div", {
                    className: `message message-operator ${t?"timestamp-visible":""} ${e.ratingId?"rating-visible":""}`,
                    style: e.isAIAssistant ? a : void 0,
                    children: [(0, N.tZ)("span", {
                        className: "message-content",
                        dangerouslySetInnerHTML: {
                            __html: e.content
                        },
                        onClick: () => {
                            n((e => !e))
                        }
                    }), (0, N.tZ)(Qt, { in: t,
                        children: (0, N.tZ)(Ai, {
                            isAIAssistant: e.isAIAssistant,
                            time: e.time_sent
                        })
                    }), (0, N.tZ)(Qt, { in: i,
                        children: (0, N.tZ)(_i, {
                            messageId: e.id,
                            ratingId: e.ratingId,
                            rating: e.rating
                        })
                    })]
                })
            };
            var Fi = e => {
                let {
                    quickReply: t,
                    onButtonClick: n
                } = e;
                const i = (0, o.useRef)(null),
                    a = (0, o.useRef)(null),
                    r = (0, Nt.a9)(),
                    s = () => {
                        if (i.current && a.current) {
                            const e = 31;
                            i.current.style.width = `${a.current.offsetWidth+e}px`, a.current.classList.add("line-clamp")
                        }
                    };
                return (0, o.useEffect)((() => {
                    r && r.requestAnimationFrame(s)
                }), [r]), (0, N.tZ)("button", {
                    ref: i,
                    type: "button",
                    title: t.title,
                    onClick: () => {
                        n(t)
                    },
                    children: (0, N.tZ)("span", {
                        ref: a,
                        dangerouslySetInnerHTML: {
                            __html: dt(t.title)
                        }
                    })
                })
            };
            class Wi extends o.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "onButtonClick", (e => {
                        let {
                            payload: t,
                            title: n,
                            type: i
                        } = e;
                        return this.props.dispatch((0, yt.eBK)(n, t)), this.props.dispatch((0, yt.SnQ)("bot" !== i ? kt.M.quickReplyClicked : kt.M.botStartedFromBotsMenu)), !0
                    }))
                }
                componentDidMount() {
                    this.props.isLastMessage || this.props.disabled || this.props.dispatch((0, yt.es$)(this.props.messageId))
                }
                shouldComponentUpdate() {
                    return !this.props.disabled
                }
                componentDidUpdate(e) {
                    this.props.isLastMessage !== e.isLastMessage && this.props.dispatch((0, yt.es$)(this.props.messageId))
                }
                render() {
                    return this.props.disabled || !this.props.isLastMessage ? null : (0, N.tZ)("div", {
                        className: "button-wrapper",
                        children: this.props.quickReplies.map((e => (0, N.tZ)(Fi, {
                            quickReply: e,
                            onButtonClick: this.onButtonClick
                        }, `${e.title}${e.payload}`)))
                    })
                }
            }
            Wi.defaultProps = {
                disabled: !1
            };
            var zi = (0, a.$j)(((e, t) => ({
                    isLastMessage: (0, Lt.Iq)(e, t.messageId)
                })))(Wi),
                Pi = n(8538),
                Hi = n.n(Pi);
            const qi = e => e.link ? (0, N.tZ)("a", {
                href: e.link,
                onClick: e.openLink,
                "data-testid": "cardImageLink",
                children: (0, N.tZ)("div", {
                    className: "card-image",
                    style: {
                        backgroundImage: `url(${e.imageUrl})`
                    }
                })
            }) : (0, N.tZ)("div", {
                className: "card-image",
                style: {
                    backgroundImage: `url(${e.imageUrl})`
                }
            });
            qi.defaultProps = {
                link: void 0,
                openLink: () => {}
            };
            var $i = qi;
            var Yi = e => {
                const {
                    title: t,
                    payload: n,
                    onClick: i,
                    cardClicked: o
                } = e, a = dt(t), r = e.url || n, s = (0, pt.jr)(r);
                return (0, N.tZ)("div", {
                    className: "button-url",
                    children: (0, N.tZ)("a", {
                        className: "button-url__anchor",
                        href: (0, pt.jr)(r),
                        type: "button",
                        onClick: a => {
                            a.preventDefault();
                            let r = e.title;
                            o && (r = `${o} &rarr; ${t}`), i(n, r), (0, pt.nG)(s)
                        },
                        "data-testid": "buttonUrl",
                        dangerouslySetInnerHTML: {
                            __html: a
                        }
                    })
                })
            };
            var Gi = e => (0, N.tZ)("button", {
                type: "button",
                title: e.title,
                onClick: () => {
                    let t = e.title;
                    e.cardClicked && (t = `${e.cardClicked} &rarr; ${e.title}`), e.onClick(e.payload, t)
                },
                children: (0, N.tZ)("span", {
                    dangerouslySetInnerHTML: {
                        __html: dt(e.title)
                    }
                })
            });
            var Vi = e => (0, N.tZ)("div", {
                className: "button-wrapper",
                children: e.buttons.map((t => (0, N.BX)(o.Fragment, {
                    children: ["url" === t.type && (0, N.tZ)(Yi, {
                        title: t.title,
                        payload: t.payload,
                        url: t.url,
                        cardClicked: t.cardClicked,
                        onClick: e.onButtonClick
                    }), "action" === t.type && (0, N.tZ)(Gi, {
                        title: t.title,
                        payload: t.payload,
                        cardClicked: t.cardClicked,
                        onClick: e.onButtonClick
                    })]
                }, `${t.title}${t.payload}`)))
            });
            var Ji = (0, a.$j)()((e => {
                let {
                    dispatch: t,
                    buttons: n
                } = e;
                return (0, N.tZ)(Vi, {
                    buttons: n,
                    onButtonClick: (e, n) => (t((0, yt.eBK)(n, e)), t((0, yt.SnQ)(kt.M.buttonClicked)), !0)
                })
            }));
            var Xi = e => {
                let {
                    buttons: t
                } = e;
                const n = (0, a.I0)(),
                    i = t[0],
                    o = (0, pt.jr)(i.url || i.payload);
                return (0, N.tZ)("div", {
                    className: "button-wrapper",
                    children: (0, N.tZ)("a", {
                        href: o,
                        className: "button-icon",
                        onClick: e => {
                            e.preventDefault(), n((0, yt.SnQ)(kt.M.buttonClicked)), (0, pt.nG)(o)
                        },
                        children: (0, N.tZ)(wt.UW, {})
                    })
                })
            };
            class Qi extends o.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "extendedButtons", this.props.buttons.map((e => ({ ...e,
                        cardClicked: this.props.title
                    })))), (0, i.Z)(this, "parsedUrl", (0, pt.en)(this.props.url)), (0, i.Z)(this, "parsedTitle", st(this.props.title)), (0, i.Z)(this, "parsedSubtitle", st(this.props.subtitle)), (0, i.Z)(this, "isSameHost", (0, pt.EE)((0, pt.bq)(), this.props.url)), (0, i.Z)(this, "openLink", (e => {
                        e.preventDefault();
                        const t = this.props.proxyUrl || this.getFullParsedUrl();
                        try {
                            this.isSameHost ? window.top.location = t : window.open(t)
                        } catch (e) {
                            window.open(t)
                        }
                    })), (0, i.Z)(this, "getFullParsedUrl", (() => this.parsedUrl ? `${this.parsedUrl.protocol}//${this.parsedUrl.host}${this.parsedUrl.pathname}${this.parsedUrl.search}${this.parsedUrl.hash}` : null)), (0, i.Z)(this, "getUrlWithoutProtocol", (() => this.parsedUrl ? this.parsedUrl.host + this.parsedUrl.pathname + this.parsedUrl.search + this.parsedUrl.hash : null))
                }
                render() {
                    return (0, N.BX)("div", {
                        className: "card message-with-buttons",
                        children: [this.props.imageUrl && (0, N.tZ)($i, {
                            imageUrl: this.props.imageUrl,
                            link: this.getFullParsedUrl(),
                            openLink: this.openLink
                        }), (0, N.BX)("div", {
                            className: "card-content-wrapper",
                            children: [(0, N.tZ)("div", {
                                className: "card-title",
                                dangerouslySetInnerHTML: {
                                    __html: this.parsedTitle
                                }
                            }), this.props.subtitle && (0, N.tZ)("div", {
                                className: "card-subtitle",
                                dangerouslySetInnerHTML: {
                                    __html: this.parsedSubtitle
                                }
                            }), this.props.url && (0, N.tZ)("div", {
                                className: "card-url",
                                children: (0, N.tZ)("a", {
                                    href: this.getFullParsedUrl(),
                                    type: "button",
                                    onClick: this.openLink,
                                    "data-testid": "cardLink",
                                    children: this.isSameHost ? this.getUrlWithoutProtocol() : this.parsedUrl.host
                                })
                            })]
                        }), (0, N.tZ)("div", {
                            className: "card-buttons",
                            children: this.props.isShopifyCard ? (0, N.tZ)(Xi, {
                                buttons: this.extendedButtons
                            }) : (0, N.tZ)(Ji, {
                                buttons: this.extendedButtons
                            })
                        })]
                    })
                }
            }
            Qi.defaultProps = {
                imageUrl: void 0,
                subtitle: void 0,
                url: void 0,
                proxyUrl: void 0
            };
            var Ki = Qi;
            const eo = 240;
            class to extends o.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "state", {
                        galleryScrollLeft: 0,
                        galleryScrollWidth: 0,
                        scrollInRtlType: "reverse"
                    }), (0, i.Z)(this, "cardGalleryRef", o.createRef()), (0, i.Z)(this, "isLanguageRTL", (0, Ye.dZ)()), (0, i.Z)(this, "hasImages", "string" == typeof this.props.cards[0].imageUrl), (0, i.Z)(this, "isProductGallery", "number" == typeof this.props.operator_id), (0, i.Z)(this, "scrollHandler", Hi()((() => {
                        this.cardGalleryRef.current && this.setState({
                            galleryScrollLeft: this.cardGalleryRef.current.scrollLeft
                        })
                    }), 80))
                }
                componentDidMount() {
                    return !!this.cardGalleryRef.current && (this.cardGalleryRef.current.scrollLeft > 0 ? this.setState({
                        scrollInRtlType: "default"
                    }) : (this.cardGalleryRef.current.scrollLeft = 1, 0 === this.cardGalleryRef.current.scrollLeft && this.setState({
                        scrollInRtlType: "negative"
                    })), this.setState((e => ({
                        galleryScrollWidth: this.cardGalleryRef.current.scrollWidth,
                        galleryWidth: this.cardGalleryRef.current.offsetWidth,
                        galleryScrollLeft: this.isLanguageRTL && "default" === e.scrollInRtlType ? this.cardGalleryRef.current.scrollWidth - this.cardGalleryRef.current.offsetWidth : 0
                    }))), this.cardGalleryRef.current.addEventListener("scroll", this.scrollHandler), !0)
                }
                componentWillUnmount() {
                    return !!this.cardGalleryRef.current && (this.cardGalleryRef.current.removeEventListener("scroll", this.scrollHandler), !0)
                }
                trackGalleryScrollClick() {
                    this.props.dispatch((0, yt.SnQ)(kt.M.cardsScrolled))
                }
                render() {
                    return (0, N.BX)(N.HY, {
                        children: [(0, N.tZ)("div", {
                            className: "bots-card-gallery-button-wrapper " + (this.hasImages ? "" : "bots-card-gallery-without-images"),
                            children: this.isLanguageRTL ? (0, N.BX)(N.HY, {
                                children: ["default" === this.state.scrollInRtlType && (0, N.BX)(N.HY, {
                                    children: [(0, N.tZ)(_, {
                                        classNames: "fade200",
                                        in: this.state.galleryScrollWidth - this.state.galleryWidth > this.state.galleryScrollLeft,
                                        children: (0, N.tZ)("button", {
                                            type: "button",
                                            className: "bots-card-gallery-scroll-button scroll-button-left",
                                            onClick: () => {
                                                this.cardGalleryRef.current.scrollLeft += eo, this.trackGalleryScrollClick()
                                            },
                                            children: (0, N.tZ)(wt.Fj, {})
                                        })
                                    }), (0, N.tZ)(_, {
                                        classNames: "fade200",
                                        in: this.state.galleryScrollLeft > 10,
                                        children: (0, N.tZ)("button", {
                                            type: "button",
                                            className: "bots-card-gallery-scroll-button scroll-button-right",
                                            onClick: () => {
                                                this.cardGalleryRef.current.scrollLeft -= eo, this.trackGalleryScrollClick()
                                            },
                                            children: (0, N.tZ)(wt.Fj, {})
                                        })
                                    })]
                                }), "negative" === this.state.scrollInRtlType && (0, N.BX)(N.HY, {
                                    children: [(0, N.tZ)(_, {
                                        classNames: "fade200",
                                        in: this.state.galleryScrollLeft < -10,
                                        children: (0, N.tZ)("button", {
                                            type: "button",
                                            className: "bots-card-gallery-scroll-button scroll-button-left",
                                            onClick: () => {
                                                this.cardGalleryRef.current.scrollLeft += eo, this.trackGalleryScrollClick()
                                            },
                                            children: (0, N.tZ)(wt.Fj, {})
                                        })
                                    }), (0, N.tZ)(_, {
                                        classNames: "fade200",
                                        in: this.state.galleryScrollWidth - this.state.galleryWidth > -1 * this.state.galleryScrollLeft,
                                        children: (0, N.tZ)("button", {
                                            type: "button",
                                            className: "bots-card-gallery-scroll-button scroll-button-right",
                                            onClick: () => {
                                                this.cardGalleryRef.current.scrollLeft -= eo, this.trackGalleryScrollClick()
                                            },
                                            children: (0, N.tZ)(wt.Fj, {})
                                        })
                                    })]
                                }), "reverse" === this.state.scrollInRtlType && (0, N.BX)(N.HY, {
                                    children: [(0, N.tZ)(_, {
                                        classNames: "fade200",
                                        in: this.state.galleryScrollLeft > 10,
                                        children: (0, N.tZ)("button", {
                                            type: "button",
                                            className: "bots-card-gallery-scroll-button scroll-button-left",
                                            onClick: () => {
                                                this.cardGalleryRef.current.scrollLeft -= eo, this.trackGalleryScrollClick()
                                            },
                                            children: (0, N.tZ)(wt.Fj, {})
                                        })
                                    }), (0, N.tZ)(_, {
                                        classNames: "fade200",
                                        in: this.state.galleryScrollWidth - this.state.galleryWidth > this.state.galleryScrollLeft,
                                        children: (0, N.tZ)("button", {
                                            type: "button",
                                            className: "bots-card-gallery-scroll-button scroll-button-right",
                                            onClick: () => {
                                                this.cardGalleryRef.current.scrollLeft += eo, this.trackGalleryScrollClick()
                                            },
                                            children: (0, N.tZ)(wt.Fj, {})
                                        })
                                    })]
                                })]
                            }) : (0, N.BX)(N.HY, {
                                children: [(0, N.tZ)(_, {
                                    classNames: "fade200",
                                    in: this.state.galleryScrollLeft > 10,
                                    children: (0, N.tZ)("button", {
                                        type: "button",
                                        className: "bots-card-gallery-scroll-button scroll-button-left",
                                        onClick: () => {
                                            this.cardGalleryRef.current.scrollLeft -= eo, this.trackGalleryScrollClick()
                                        },
                                        children: (0, N.tZ)(wt.Fj, {})
                                    })
                                }), (0, N.tZ)(_, {
                                    classNames: "fade200",
                                    in: this.state.galleryScrollWidth - this.state.galleryWidth > this.state.galleryScrollLeft,
                                    children: (0, N.tZ)("button", {
                                        type: "button",
                                        className: "bots-card-gallery-scroll-button scroll-button-right",
                                        onClick: () => {
                                            this.cardGalleryRef.current.scrollLeft += eo, this.trackGalleryScrollClick()
                                        },
                                        children: (0, N.tZ)(wt.Fj, {})
                                    })
                                })]
                            })
                        }), (0, N.tZ)("div", {
                            className: `message message-operator bots-card-gallery ${this.hasImages?"":"bots-card-gallery-without-images"} ${1===this.props.cards.length?"bots-card-gallery-single-card":"bots-card-gallery-multiple-cards"}`,
                            ref: this.cardGalleryRef,
                            children: this.props.cards.map((e => (0, d.az)(Ki, { ...e,
                                key: e.id,
                                isShopifyCard: this.isProductGallery
                            })))
                        })]
                    })
                }
            }
            to.defaultProps = {
                operator_id: void 0
            };
            var no = to;
            var io = e => (0, N.tZ)("div", {
                className: "message message-operator buttons-message",
                children: (0, N.BX)("div", {
                    className: "message-with-buttons",
                    children: [(0, N.tZ)("div", {
                        className: "message-with-buttons-text",
                        dangerouslySetInnerHTML: {
                            __html: e.content
                        },
                        "data-testid": "buttonsText"
                    }), (0, N.tZ)(Ji, {
                        buttons: e.buttons
                    })]
                })
            });
            const oo = {
                name: "el2nz9",
                styles: "display:flex;flex-direction:column;align-items:center;color:#647491;margin:auto;text-align:center;padding-top:24px;p{margin:6px 0;}"
            };
            var ao = e => {
                let {
                    operator_id: t
                } = e;
                const n = (0, a.v9)((e => e.operators)).find((e => e.id === t));
                return (0, N.BX)("div", {
                    className: "message",
                    css: oo,
                    children: [(0, N.tZ)(wt.Y, {}), (0, N.tZ)("p", {
                        children: n ? (0, N.tZ)(ut, {
                            value: "operatorMarkedConversationAsSolved",
                            replacements: {
                                "{operatorName}": n.name
                            },
                            fallback: "{operatorName} marked the conversation as solved"
                        }) : (0, N.tZ)(ut, {
                            value: "conversationWasMarkedAsSolved",
                            fallback: "The conversation was marked as solved"
                        })
                    })]
                })
            };
            const ro = [{
                value: "\ud83d\ude21",
                rating: 1
            }, {
                value: "\ud83d\ude41",
                rating: 2
            }, {
                value: "\ud83d\ude10",
                rating: 3
            }, {
                value: "\ud83d\ude00",
                rating: 4
            }, {
                value: "\ud83d\ude0d",
                rating: 5
            }];
            const so = {
                name: "1v1tij8",
                styles: "display:flex;justify-content:space-between;padding:0 0 18px;color:#647491;font-size:14px;max-width:100%"
            };
            var lo = () => (0, N.BX)("div", {
                className: "message",
                css: so,
                children: [(0, N.tZ)("span", {
                    children: (0, Ye.dW)("satisfactionSurveyVeryBad", null, "Very bad")
                }), (0, N.tZ)("span", {
                    children: (0, Ye.dW)("satisfactionSurveyVeryGood", null, "Very good")
                })]
            });
            const Ao = {
                    name: "1s72ogv",
                    styles: "display:flex;align-items:center;clear:both;position:relative;padding:14px 0 8px;transition:margin 0.28s ease-in-out"
                },
                co = {
                    name: "3cnsub",
                    styles: "border:1px solid #d3dbe5;cursor:default;letter-spacing:-0.01em"
                },
                uo = {
                    name: "1bt3zem",
                    styles: "color:#06132b;background:white;border:1px solid #0566ff;outline:none;padding:8px 16px;border-radius:20px;margin:2px 0;display:inline-block;clear:both;position:relative;font-size:15px;&:not(:first-of-type){margin-left:8px;}img{width:18px;height:18px;}"
                };
            var po = e => {
                let {
                    threadId: t,
                    messageId: n,
                    scale: i,
                    selectedRating: r
                } = e;
                const s = (0, a.I0)(),
                    l = (0, a.v9)(Bt.U1),
                    A = (0, o.useMemo)((() => (0, d.iv)({
                        background: `linear-gradient(135deg, ${l[0]} 0%, ${l[1]} 100%)`
                    }, "", "")), [l]);
                return (0, N.BX)("div", {
                    children: [(0, N.tZ)("div", {
                        className: "message",
                        css: Ao,
                        children: i.map((e => {
                            let {
                                value: i,
                                rating: o
                            } = e;
                            return (0, N.tZ)("button", {
                                type: "button",
                                css: [uo, r && co, r === o && A, "", ""],
                                onClick: () => {
                                    var e;
                                    r || (e = o, s((0, yt.Gv8)(e, t, n)), s((0, yt.HzX)((0, Ut.Sg)(t, n, Et.Cs.AUTOMATIC_SURVEY_RATED))))
                                },
                                children: (0, N.tZ)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: dt(i)
                                    }
                                })
                            }, o)
                        }))
                    }), (0, N.tZ)(lo, {})]
                })
            };
            var fo = e => {
                let {
                    threadId: t,
                    messageId: n,
                    comment: i
                } = e;
                const r = (0, a.I0)(),
                    [s, l] = (0, o.useState)(!1),
                    [d, A] = (0, o.useState)("");
                return (0, N.tZ)(mi, {
                    type: "text",
                    placeholder: "typeOptional",
                    onChange: A,
                    onKeyDown: e => !(13 !== e || !s) && (s && (r((0, yt.Mak)(d, t, n)), r((0, yt.HzX)((0, Ut.Sg)(t, n, Et.Cs.AUTOMATIC_SURVEY_COMMENTED)))), (0, Nt.Rn)(), !0),
                    isValidCallback: l,
                    value: i || null,
                    disabled: Boolean(i)
                })
            };
            var ho = e => {
                let {
                    threadId: t,
                    messageId: n,
                    commentQuestion: i,
                    comment: o
                } = e;
                return (0, N.BX)("div", {
                    className: "message message-operator rate-comment",
                    children: [(0, N.tZ)("span", {
                        children: i
                    }), (0, N.tZ)(fo, {
                        threadId: t,
                        messageId: n,
                        comment: o
                    })]
                })
            };
            var mo = e => {
                let {
                    threadId: t,
                    messageId: n,
                    type: i,
                    satisfactionSurvey: o
                } = e;
                const r = (0, a.I0)(),
                    s = (0, a.v9)((e => (0, Bt.$d)(e, t)));
                if (!s) return o && r((0, yt.W$L)(o, t, n)), null;
                const l = (e => {
                        if ("emotes" === e) return ro;
                        throw new Error("Unreachable case error")
                    })(s.scaleType),
                    d = l.find((e => e.rating === s ? .response.rating));
                return (() => {
                    switch (i) {
                        case Et.Cs.AUTOMATIC_SURVEY:
                            return (0, N.BX)(N.HY, {
                                children: [(0, N.tZ)("div", {
                                    className: "message message-operator",
                                    children: s.rateQuestion || (0, Ye.dW)("satisfactionSurveyHeader")
                                }), (0, N.tZ)(po, {
                                    threadId: t,
                                    messageId: n,
                                    scale: l,
                                    selectedRating: d ? .rating
                                })]
                            });
                        case Et.Cs.AUTOMATIC_SURVEY_RATED:
                            return (0, N.tZ)(ho, {
                                threadId: t,
                                messageId: n,
                                comment: s.response.comment,
                                commentQuestion: s.commentQuestion || (0, Ye.dW)("satisfactionSurveyComment")
                            });
                        case Et.Cs.AUTOMATIC_SURVEY_COMMENTED:
                            return (0, N.tZ)("div", {
                                className: "message message-operator",
                                children: s.endMessage || (0, Ye.dW)("satisfactionSurveyEnd")
                            });
                        default:
                            throw (0, gt.G)("Automatic satisfaction survey: unreachable case"), new Error("Automatic satisfaction survey: unreachable case")
                    }
                })()
            };
            const go = {
                    name: "pr10xp",
                    styles: "margin-bottom:10px"
                },
                Co = {
                    name: "ih3rb",
                    styles: "width:100%;display:flex;justify-content:center;align-items:center;padding:12px 40px;background:#fff;border:1px dashed #D3DBE5;border-radius:8px;outline:none;position:relative;font-weight:600;&:hover{border:1px solid #ACB8CB;color:#647491;font-weight:400;}svg{width:16px;height:16px;}"
                },
                bo = {
                    name: "1gzh234",
                    styles: "line-height:20px;font-size:16px"
                },
                xo = {
                    name: "1ewutym",
                    styles: "color:#647491;font-weight:400"
                },
                vo = {
                    name: "17pdzl8",
                    styles: "position:absolute;right:18px;top:14px"
                },
                wo = {
                    name: "1lrdqcn",
                    styles: "margin-right:4px;svg{fill:#647491;}"
                };
            var yo = e => {
                let {
                    content: t,
                    couponCode: n
                } = e;
                const [i, r] = (0, o.useState)(n), [s, l] = (0, o.useState)(!1), d = (0, o.useRef)(), A = (0, a.I0)();
                return (0, N.BX)("div", {
                    className: "message message-operator coupon-code-message",
                    children: [(0, N.tZ)("div", {
                        css: go,
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }), (0, N.BX)("button", {
                        css: [Co, s && xo, "", ""],
                        onClick: async () => {
                            try {
                                n && (await window.parent.navigator.clipboard.writeText(n), A((0, yt.SnQ)(kt.M.couponCodeCopyClicked)), l(!0), d.current && clearTimeout(d.current), d.current = setTimeout((() => {
                                    l(!1)
                                }), 1500))
                            } catch (e) {
                                (0, gt.G)(e)
                            }
                        },
                        type: "button",
                        onMouseEnter: () => {
                            r((0, Ye.dW)("clickToCopy", null, "Click to copy"))
                        },
                        onMouseLeave: () => {
                            r(n)
                        },
                        children: [s && (0, N.tZ)("span", {
                            css: wo,
                            children: (0, N.tZ)(wt.qB, {})
                        }), (0, N.tZ)("span", {
                            css: bo,
                            children: s ? (0, Ye.dW)("copied", null, "Copied") : i
                        }), !s && (0, N.tZ)("span", {
                            css: vo,
                            children: (0, N.tZ)(wt.TI, {})
                        })]
                    })]
                })
            };
            let Bo = function(e) {
                return e.VALID = "valid", e.INVALID = "invalid", e.EMPTY = "empty", e
            }({});
            const Io = /(?:\+?\d+[\s-]?)?(?:\(\d+\))?(?:\s?\/\s?)?(?:[-.\s]?\d{1,5}){5,}.*\d/,
                ko = /[^?!@#$%^&*()_+-=;':"|,./<>`~\d]+/,
                Eo = /((?:https?:\/\/)?(?:www\.)?[a-z-.\d]+\.[a-z]{2,13}(?:(?:\?|\/)(?:\S+)?)?)(?:[.!?,].*)?$/i;
            var So = e => {
                let {
                    form: t,
                    messageId: n
                } = e;
                const i = (0, a.I0)(),
                    r = (0, a.v9)((e => (0, Bt.f)(e, n))),
                    s = (0, a.v9)(Bt.Ey),
                    l = r ? .type,
                    d = s ? .id === n,
                    [A, c] = (0, o.useState)(t.reduce(((e, t) => ({ ...e,
                        [t.id]: t.type !== Et.EI.CHECKBOX && ""
                    })), {})),
                    [u, p] = (0, o.useState)(!1),
                    [f, h] = (0, o.useState)(t.reduce(((e, t) => ({ ...e,
                        [t.id]: Bo.VALID
                    })), {})),
                    m = (0, o.useMemo)((() => Object.values(f).some((e => e !== Bo.VALID))), [f]),
                    g = (0, o.useRef)(null),
                    C = (0, o.useRef)(null),
                    b = (0, o.useRef)(),
                    x = (0, o.useRef)(!1),
                    v = (0, o.useCallback)((e => {
                        h((t => ({ ...t,
                            [e]: Bo.VALID
                        })))
                    }), []),
                    w = (0, o.useCallback)(((e, t) => {
                        c((n => ({ ...n,
                            [e]: t
                        }))), v(e)
                    }), [v]),
                    y = (0, o.useCallback)((e => {
                        e.preventDefault();
                        const n = { ...f
                        };
                        let o = !1;
                        t.forEach((e => {
                            const t = A[e.id],
                                i = ((e, t) => {
                                    switch (e) {
                                        case Et.EI.PHONE:
                                            return e => Io.test(String(e));
                                        case Et.EI.NAME:
                                            return e => ko.test(String(e));
                                        case Et.EI.URL:
                                            return e => Eo.test(String(e));
                                        case Et.EI.EMAIL:
                                            return e => (0, pt.vV)(String(e));
                                        case Et.EI.CHECKBOX:
                                            return e => !t || Boolean(e);
                                        case Et.EI.NUMBER:
                                        case Et.EI.TEXT:
                                        default:
                                            return () => !0
                                    }
                                })(e.type, e.required);
                            e.required && "" === t ? (o = !0, n[e.id] = Bo.EMPTY) : "" === t || i(t) || (o = !0, n[e.id] = Bo.INVALID)
                        })), o ? h(n) : (p(!0), i((0, yt.R2_)({
                            formResponse: t.map((e => ({
                                name: e.name,
                                id: e.id,
                                value: A[e.id]
                            })))
                        })))
                    }), [i, t, f, A]),
                    B = (0, o.useCallback)((e => {
                        c(t.reduce(((t, n) => {
                            const i = e.find((e => e.id === n.id)) ? .value;
                            return { ...t,
                                [n.id]: n.type === Et.EI.CHECKBOX ? Boolean(i) : i ? ? ""
                            }
                        }), {}))
                    }), [t]);
                return (0, o.useEffect)((() => ("function" == typeof C.current ? .scrollIntoView && d && (b.current = setTimeout((() => {
                    try {
                        C.current ? .scrollIntoView({
                            behavior: "smooth",
                            block: "nearest"
                        })
                    } catch (e) {
                        C.current ? .scrollIntoView()
                    }
                }), 150)), () => {
                    b.current && clearTimeout(b.current)
                })), [d]), (0, o.useEffect)((() => {
                    d || l !== Et.Cs.FORM_RESPONSE || !r ? .formResponse || x.current || (B(r.formResponse), x.current = !0)
                }), [d, r ? .formResponse, l, B]), {
                    formSubmitting: u,
                    formState: f,
                    formValues: A,
                    handleChange: w,
                    handleSubmit: y,
                    formRef: g,
                    titleRef: C,
                    hasErrors: m,
                    disabled: l !== Et.Cs.FORM_RESPONSE && !d,
                    sent: l === Et.Cs.FORM_RESPONSE && !d
                }
            };
            const Mo = (0, d.iv)("\n    margin-bottom: 12px;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n", "", ""),
                Zo = (0, d.iv)("\n    position: absolute;\n    right: 10px;\n    top: 4px;\n    svg {\n      fill: #25833E;\n      width: 20px;\n    }\n", "", ""),
                Ro = (0, d.iv)("\n    color: #E81332;\n    font-size: 12px;\n    padding-left: 12px;\n    line-height: 16px;\n    display: inline-block;\n    padding-top: 4px;\n", "", ""),
                To = (e, t) => {
                    switch (t) {
                        case Bo.EMPTY:
                            return (0, N.tZ)("span", {
                                css: Ro,
                                children: (0, N.tZ)(ut, {
                                    value: "fieldCannotBeEmpty",
                                    fallback: "Field cannot be empty"
                                })
                            });
                        case Bo.INVALID:
                            return (e => {
                                let t = null;
                                switch (e) {
                                    case Et.EI.CHECKBOX:
                                        t = {
                                            value: "fieldRequired",
                                            fallback: "This field is required"
                                        };
                                        break;
                                    case Et.EI.EMAIL:
                                        t = {
                                            value: "wrongEmailFormat",
                                            fallback: "That email doesn't look quite right"
                                        };
                                        break;
                                    case Et.EI.NAME:
                                        t = {
                                            value: "wrongNameFormat",
                                            fallback: "That name doesn't look quite right"
                                        };
                                        break;
                                    case Et.EI.NUMBER:
                                        t = {
                                            value: "wrongNumberFormat",
                                            fallback: "That number doesn't look quite right"
                                        };
                                        break;
                                    case Et.EI.URL:
                                        t = {
                                            value: "wrongUrlFormat",
                                            fallback: "That URL doesn't look quite right"
                                        };
                                        break;
                                    case Et.EI.PHONE:
                                        t = {
                                            value: "wrongPhoneFormat",
                                            fallback: "That phone number doesn't look quite right"
                                        };
                                        break;
                                    case Et.EI.SELECT:
                                        t = {
                                            value: "chooseOneOfTheOptions",
                                            fallback: "Choose one of the options"
                                        };
                                        break;
                                    case Et.EI.TEXT:
                                    case Et.EI.LONG_TEXT:
                                    case Et.EI.MULTISELECT:
                                    default:
                                        return null
                                }
                                return (0, N.tZ)("span", {
                                    css: Ro,
                                    children: (0, N.tZ)(ut, { ...t
                                    })
                                })
                            })(e);
                        case Bo.VALID:
                        default:
                            return null
                    }
                };
            var Do = e => {
                let {
                    shouldDisplaySuccessIcon: t,
                    validity: n,
                    type: i,
                    children: o
                } = e;
                return (0, N.BX)("div", {
                    css: Mo,
                    children: [o, t && (0, N.tZ)("div", {
                        css: Zo,
                        children: (0, N.tZ)(wt.qB, {})
                    }), To(i, n)]
                })
            };
            const No = (0, d.iv)("\n    position: relative;\n", "", ""),
                Uo = (e, t) => (0, d.iv)(`\n    width: 100%;\n    appearance: none;\n    font-size: 15px;\n    line-height: 19px;\n    padding: 9px 35px 9px 12px;\n    border: none;\n    border-radius: 6px;\n    background-color: white;\n    text-overflow: ellipsis;\n    color: #080F1A;\n\n    :disabled {\n        opacity: 1;\n    }\n\n    ${e?"\n            color #647491;\n            ":""}\n    ${t?"\n            outline: 1px solid #E81332;\n            :focus {\n                outline: 1px solid #E81332;\n            }\n            ":""}\n`, "", ""),
                _o = (0, d.iv)("\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    right: 8px;\n    pointer-events: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    svg {\n        fill: #080F1A;\n    },\n", "", "");
            var Lo = e => {
                let {
                    placeholder: t,
                    onChange: n,
                    value: i,
                    options: o,
                    hasError: a = !1,
                    disabled: r
                } = e;
                return (0, N.BX)("div", {
                    css: [No, "", ""],
                    children: [(0, N.BX)("select", {
                        css: Uo(!i, a),
                        value: i,
                        onChange: e => n(e.target.value),
                        disabled: r,
                        children: [(0, N.tZ)("option", {
                            value: "",
                            selected: !0,
                            disabled: !0,
                            hidden: !0,
                            children: t
                        }), o.map((e => (0, N.tZ)("option", {
                            value: e.value,
                            children: e.value
                        }, e.value)))]
                    }), !r && (0, N.tZ)("div", {
                        css: _o,
                        children: (0, N.tZ)(wt.K5, {})
                    })]
                })
            };
            const jo = e => (0, d.iv)(`\n    padding: 8px 12px;\n    border-radius: 6px;\n    font-size: 15px;\n    border: none;\n    color: #080F1A;\n    &::placeholder {\n        color: #647491;\n    }\n    &:disabled {\n        background: #fff;\n    }\n    ${e?"\n            outline: 1px solid #E81332;\n            :focus {\n                outline: 1px solid #E81332;\n            }":""}\n`, "", ""),
                Oo = (0, d.iv)("\n    color: #E81332;\n    font-size: 12px;\n    line-height: 16px;\n    display: inline-block;\n", "", ""),
                Fo = (0, d.iv)("\n    margin-bottom: 12px;\n    display: block;\n    \n    margin-top: -30px;\n    padding-top: 30px;\n", "", ""),
                Wo = (0, d.iv)("\n    margin-bottom: 0;\n", "", ""),
                zo = e => (0, d.iv)(`\n    border: 1px solid #D3DBE5;\n    padding: 2px 14px;\n    height: 34px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 14px;\n    border-radius: 24px;\n    flex-shrink: 0;\n    &:disabled {\n        color: #ACB8CB;\n    }\n    svg {\n        margin-right: 7px;\n        fill: #ACB8CB;\n        height: 19px;\n        width: auto;\n        margin-left: -2px;\n    }\n    .loader-icon.circular {\n        position: static;\n        circle {\n            stroke: ${e}\n        }\n    }\n`, "", ""),
                Po = (0, d.iv)("\n    display: flex;\n    justify-content: space-between;\n    gap: 30px;\n    align-items: center;\n", "", ""),
                Ho = (0, d.iv)("\n    display: flex;\n    align-items: center;\n    font-size: 14px;\n    color: #080F1A;\n    position: relative;\n    svg {\n        display: none;\n    }\n    input:checked + svg {\n        display: block;\n        position: absolute;\n        width: 14px;\n        left: 2px;\n    }\n", "", ""),
                qo = (e, t) => (0, d.iv)(`\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 4px;\n    border: 2px solid #647491;\n    margin: 0 12px 0 0;\n    flex-shrink: 0;\n    &:focus, &:active {\n        border: 2px solid #647491;\n        box-shadow: 0 0 2px 0 ${e};\n    }\n    &:checked {\n        border-color: ${e};\n        background-color: ${e};\n    }\n    ${t?"\n            border-color: #E81332;\n            ":""}\n`, "", "");
            var $o = e => {
                let {
                    form: t,
                    text: n,
                    messageId: i
                } = e;
                const {
                    formValues: r,
                    formSubmitting: s,
                    formState: l,
                    formRef: d,
                    titleRef: A,
                    handleSubmit: c,
                    handleChange: u,
                    hasErrors: p,
                    sent: f,
                    disabled: h
                } = So({
                    form: t,
                    messageId: i
                }), m = (0, a.v9)(Bt.U1), g = (0, o.useCallback)((e => {
                    const t = l[e.id] !== Bo.VALID,
                        n = {
                            placeholder: e.name,
                            css: jo(t),
                            disabled: f || h,
                            value: String(r[e.id]),
                            onChange: t => u(e.id, t.target.value)
                        };
                    let i = null;
                    switch (e.type) {
                        case Et.EI.CHECKBOX:
                            i = (0, N.BX)("label", {
                                css: Ho,
                                children: [(0, N.tZ)("input", {
                                    css: qo(m[3], t),
                                    disabled: f || h,
                                    checked: Boolean(r[e.id]),
                                    type: "checkbox",
                                    onChange: t => u(e.id, t.target.checked)
                                }), (0, N.tZ)(wt.qB, {}), e.name]
                            });
                            break;
                        case Et.EI.EMAIL:
                            i = (0, N.tZ)("input", { ...n,
                                type: "email"
                            });
                            break;
                        case Et.EI.NAME:
                            i = (0, N.tZ)("input", { ...n,
                                type: "text"
                            });
                            break;
                        case Et.EI.LONG_TEXT:
                            i = (0, N.tZ)("textarea", { ...n,
                                onChange: t => u(e.id, t.target.value)
                            });
                            break;
                        case Et.EI.TEXT:
                            i = (0, N.tZ)("input", { ...n,
                                type: "text"
                            });
                            break;
                        case Et.EI.NUMBER:
                            i = (0, N.tZ)("input", { ...n,
                                type: "number"
                            });
                            break;
                        case Et.EI.URL:
                            i = (0, N.tZ)("input", { ...n,
                                type: "text"
                            });
                            break;
                        case Et.EI.PHONE:
                            i = (0, N.tZ)("input", { ...n,
                                type: "tel"
                            });
                            break;
                        case Et.EI.SELECT:
                            i = (0, N.tZ)(Lo, {
                                placeholder: e.name,
                                disabled: f || h,
                                value: String(r[e.id]),
                                onChange: t => u(e.id, t),
                                hasError: t,
                                options: e.choices ? .map((e => ({
                                    value: e.name
                                }))) || []
                            });
                            break;
                        case Et.EI.MULTISELECT:
                        default:
                            return null
                    }
                    return (0, N.tZ)(Do, {
                        type: e.type,
                        validity: l[e.id],
                        shouldDisplaySuccessIcon: e.type !== Et.EI.CHECKBOX && f,
                        children: i
                    }, e.id)
                }), [m, f, h, r, l, u]);
                return (0, N.BX)("div", {
                    className: "message message-operator message-form",
                    children: [(0, N.tZ)("span", {
                        css: Fo,
                        ref: A,
                        children: n
                    }), (0, N.BX)("form", {
                        onSubmit: c,
                        ref: d,
                        noValidate: !0,
                        css: Wo,
                        children: [t.map(g), (0, N.BX)("div", {
                            css: Po,
                            children: [(0, N.tZ)("span", {
                                css: Oo,
                                children: p && (0, N.tZ)(ut, {
                                    value: "fieldsNotFilledCorrectly",
                                    fallback: "Some fields are not filled out correctly. Please check."
                                })
                            }), f ? (0, N.BX)("button", {
                                css: zo(m[3]),
                                disabled: !0,
                                type: "submit",
                                children: [(0, N.tZ)(wt.qB, {}), (0, N.tZ)(ut, {
                                    value: "sent",
                                    fallback: "Sent"
                                })]
                            }) : (0, N.tZ)("button", {
                                css: zo(m[3]),
                                disabled: p || s || h,
                                type: "submit",
                                children: s ? (0, N.tZ)(wt.aN, {}) : (0, N.tZ)(ut, {
                                    value: "submit",
                                    fallback: "Submit"
                                })
                            })]
                        })]
                    })]
                })
            };
            class Yo extends o.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "windowRef", (0, Nt.a9)()), (0, i.Z)(this, "adjustMessageWidth", ((e, t) => {
                        const n = t;
                        e && this.windowRef && this.windowRef.requestAnimationFrame((() => {
                            n.style.width = `${e.offsetWidth+35}px`
                        }))
                    }))
                }
                render() {
                    const e = st(this.props.content);
                    if ("text" !== this.props.type) switch (this.props.type) {
                        case "preChat":
                            return (0, N.tZ)(xi, { ...this.props,
                                content: e
                            });
                        case "rateConversation":
                            return (0, N.tZ)(yi, { ...this.props
                            });
                        case "rateConversationCommentRateWasGood":
                            return (0, N.tZ)(Bi, {
                                isRateGood: !0,
                                ...this.props
                            });
                        case "rateConversationCommentRateWasBad":
                            return (0, N.tZ)(Bi, {
                                isRateGood: !1,
                                ...this.props
                            });
                        case "alwaysOnline":
                            return (0, N.tZ)(vi, { ...this.props
                            });
                        case "uploadingFile":
                            return (0, N.tZ)(ki, { ...this.props,
                                widgetColor: (0, pt.w8)(this.props.widgetColor)
                            });
                        case "uploadedFile":
                            return (0, N.BX)(N.HY, {
                                children: [(0, N.tZ)(Li, { ...this.props,
                                    widgetColor: (0, pt.w8)(this.props.widgetColor)
                                }), this.props.quickReplies && this.props.quickReplies.length > 0 && !this.props.disabled && (0, N.tZ)("div", {
                                    className: "message message-operator bots-quick-replies",
                                    children: (0, N.tZ)(zi, {
                                        quickReplies: this.props.quickReplies,
                                        messageId: this.props.id,
                                        disabled: this.props.disabled
                                    })
                                })]
                            });
                        case "system":
                            return (0, N.tZ)(ji, { ...this.props,
                                content: e
                            });
                        case "cardGallery":
                            return (0, N.tZ)(no, { ...this.props,
                                dispatch: this.props.dispatch
                            });
                        case "buttons":
                            return (0, N.tZ)(io, { ...this.props,
                                content: e
                            });
                        case Et.Cs.COUPON_CODE:
                            return (0, N.tZ)(yo, { ...this.props,
                                content: e
                            });
                        case Et.Cs.CONVERSATION_MARKED_AS_SOLVED:
                            return (0, N.tZ)(ao, { ...this.props
                            });
                        case Et.Cs.AUTOMATIC_SURVEY:
                        case Et.Cs.AUTOMATIC_SURVEY_RATED:
                        case Et.Cs.AUTOMATIC_SURVEY_COMMENTED:
                            return (0, N.tZ)(mo, { ...this.props
                            });
                        case Et.Cs.CREATE_TICKET_SUCCESS:
                            return (0, N.tZ)(wi, { ...this.props
                            });
                        case Et.Cs.FORM:
                            return (0, N.tZ)($o, {
                                form: this.props.form,
                                text: this.props.content,
                                messageId: this.props.id
                            });
                        case Et.Cs.FORM_RESPONSE:
                        default:
                            return !1
                    } else {
                        if (this.props.sender === Ut.Qe.operator) return (0, N.tZ)(ui, { ...this.props,
                            content: e,
                            adjustMessageWidth: this.adjustMessageWidth
                        });
                        if (this.props.sender === Ut.Qe.bot) return (0, N.BX)(N.HY, {
                            children: [(0, N.tZ)(Oi, { ...this.props,
                                content: lt(this.props.content)
                            }), this.props.quickReplies && this.props.quickReplies.length > 0 && !this.props.disabled && (0, N.tZ)("div", {
                                className: "message message-operator bots-quick-replies",
                                children: (0, N.tZ)(zi, {
                                    quickReplies: this.props.quickReplies,
                                    messageId: this.props.id,
                                    disabled: this.props.disabled
                                })
                            })]
                        });
                        if (this.props.sender === Ut.Qe.visitor) return (0, N.tZ)(pi, { ...this.props,
                            content: e,
                            widgetColor: (0, pt.w8)(this.props.widgetColor),
                            adjustMessageWidth: this.adjustMessageWidth
                        })
                    }
                    return null
                }
            }
            Yo.defaultProps = {
                quickReplies: [],
                disabled: void 0,
                form: [],
                formResponse: []
            };
            var Go = (0, a.$j)((e => ({
                widgetColor: e.widgetColor
            })))(Yo);
            class Vo extends o.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "state", {
                        scrollStartPosition: 0
                    }), (0, i.Z)(this, "messageWasAdded", !1), (0, i.Z)(this, "conversationPadding", 0), (0, i.Z)(this, "calculateScrollDivHeight", (() => {
                        const {
                            scrollHeight: e,
                            clientHeight: t
                        } = this.props.conversationRef, n = t - this.conversationPadding;
                        this.scrollDiv.style.height = e === t ? "0px" : n * n / +e + "px"
                    })), (0, i.Z)(this, "bindScroll", (e => {
                        if (!e) return !1;
                        this.scrollDiv = e;
                        const {
                            scrollHeight: t,
                            clientHeight: n
                        } = this.props.conversationRef;
                        return this.scrollDiv.style.top = (n + this.conversationPadding) * this.props.conversationRef.scrollTop / t + "px", !0
                    })), (0, i.Z)(this, "moveScrollFromMessages", (() => {
                        this.props.conversationRef.onscroll = () => {
                            let e = 0;
                            if (this.messageWasAdded) {
                                const t = Array.from(this.props.iframeDocument.querySelectorAll(".message")).slice(-1)[0];
                                e = t ? t.offsetHeight : 0, this.messageWasAdded = !1
                            }
                            this.scrollDiv.style.top = (this.props.conversationRef.clientHeight - this.conversationPadding) * this.props.conversationRef.scrollTop / (this.props.conversationRef.scrollHeight - e) + "px"
                        }
                    })), (0, i.Z)(this, "moveMessagesFromScroll", (e => {
                        const {
                            scrollHeight: t,
                            clientHeight: n
                        } = this.props.conversationRef;
                        this.props.conversationRef.scrollTop = t * e / (n - this.conversationPadding)
                    })), (0, i.Z)(this, "handleScrollMove", (e => {
                        this.props.conversationRef.onscroll = null, this.setState({
                            scrollStartPosition: e.clientY
                        }), this.scrollDiv.style.width = "8px", this.scrollDiv.style.margin = "0px", this.scrollDiv.style.opacity = .32, this.props.iframeDocument.onmousemove = this.scrollMove, this.props.iframeDocument.onmouseup = this.scrollStop
                    })), (0, i.Z)(this, "scrollMove", (e => {
                        window.requestAnimationFrame((() => {
                            let {
                                clientHeight: t
                            } = this.props.conversationRef;
                            t -= this.conversationPadding;
                            const n = e.clientY - this.state.scrollStartPosition,
                                i = parseInt(this.scrollDiv.style.top, 10) + n;
                            i >= 0 && i <= t - parseInt(this.scrollDiv.style.height, 10) ? (this.scrollDiv.style.top = `${i}px`, this.moveMessagesFromScroll(i)) : i < 0 ? (this.scrollDiv.style.top = "0px", this.moveMessagesFromScroll(0)) : (this.scrollDiv.style.top = t - parseInt(this.scrollDiv.style.height, 10) + "px", this.moveMessagesFromScroll(t - parseInt(this.scrollDiv.style.height, 10))), this.props.iframeDocument.onmouseup = this.scrollStop, this.setState({
                                scrollStartPosition: e.clientY
                            })
                        }))
                    })), (0, i.Z)(this, "scrollStop", (() => {
                        this.props.iframeDocument.onmouseup = null, this.props.iframeDocument.onmousemove = null, this.moveScrollFromMessages(), this.scrollDiv.style.width = null, this.scrollDiv.style.margin = null, this.scrollDiv.style.opacity = null
                    }))
                }
                componentDidMount() {
                    this.moveScrollFromMessages(), this.calculateScrollDivHeight()
                }
                componentDidUpdate(e) {
                    const t = e.messagesLength !== this.props.messagesLength,
                        n = e.showOldMessages !== this.props.showOldMessages;
                    t && (this.messageWasAdded = !0), (t || n) && this.calculateScrollDivHeight()
                }
                render() {
                    return (0, N.tZ)("div", {
                        id: "conversation-scroll",
                        children: (0, N.tZ)("div", {
                            onMouseDown: this.handleScrollMove,
                            ref: this.bindScroll
                        })
                    })
                }
            }
            var Jo = Vo;
            var Xo = e => (0, N.tZ)(_, { in: !1 !== e.operatorIsTyping,
                classNames: "operatorTyping",
                children: (0, N.BX)("div", {
                    className: "message message-operator typing-indicator",
                    children: [(0, N.tZ)("span", {}), (0, N.tZ)("span", {}), (0, N.tZ)("span", {})]
                })
            });
            const Qo = (0, d.iv)({
                    border: "1px solid transparent",
                    background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, ${pt.UC[0]}, ${pt.UC[1]}) border-box`,
                    color: pt.UC[0]
                }, "", ""),
                Ko = (0, d.iv)({
                    display: "inline-block",
                    marginLeft: 8,
                    span: {
                        display: "inline-block",
                        height: 5,
                        width: 5,
                        margin: "11px 1px 0 2px",
                        backgroundColor: pt.UC[0],
                        borderRadius: "50%",
                        animation: "blink 1.3s linear infinite",
                        "&:nth-child(2)": {
                            animationDelay: "-1.1s"
                        },
                        "&:nth-child(3)": {
                            animationDelay: "-0.9s"
                        }
                    }
                }, "", "");
            var ea = () => (0, N.BX)("div", {
                className: "message message-operator",
                css: Qo,
                children: [(0, N.tZ)("span", {
                    children: "Lyro is thinking"
                }), (0, N.tZ)(_, { in: !0,
                    classNames: "operatorTyping",
                    children: (0, N.BX)("div", {
                        css: Ko,
                        children: [(0, N.tZ)("span", {}), (0, N.tZ)("span", {}), (0, N.tZ)("span", {})]
                    })
                })]
            });
            var ta = () => {
                const e = (0, a.I0)(),
                    t = (0, a.v9)(Bt.Zj);
                return (0, o.useEffect)((() => {
                    const t = setTimeout((() => {
                        e((0, yt.JOo)())
                    }), 6e3);
                    return () => {
                        null !== t && clearTimeout(t)
                    }
                }), [e]), (0, N.BX)("div", {
                    className: "message message-operator message-alert",
                    role: "alert",
                    "aria-live": "assertive",
                    "aria-atomic": "true",
                    children: [(0, N.tZ)(wt.bZ, {}), t]
                })
            };
            var na = () => {
                const e = (0, a.I0)(),
                    t = (0, a.v9)((e => e.messages)),
                    n = (0, a.v9)((e => e.operatorIsTyping)),
                    i = (0, a.v9)((e => e.alert.isVisible)),
                    r = (0, a.v9)((e => e.isMobile)),
                    s = (0, a.v9)((e => e.showOldMessages)),
                    l = (0, a.v9)(Bt.o9),
                    d = (0, a.v9)(Bt.Q0),
                    A = (0, o.useRef)((0, Nt._I)()),
                    c = (0, o.useRef)(),
                    u = (0, o.useRef)(),
                    p = (0, o.useRef)(0),
                    [f, h] = (0, o.useState)(!1);
                (0, o.useEffect)((() => {
                    u.current && h(!0)
                }), []);
                const m = () => {
                    u.current && (u.current.scrollTop = u.current.scrollHeight - u.current.clientHeight)
                };
                (0, o.useEffect)((() => (e((0, yt.kqK)(r ? Dt.oG.mobile : Dt.oG.chatSize1)), m(), p.current = setTimeout((() => {
                    u.current && u.current.scrollTop - u.current.scrollHeight !== u.current.clientHeight && m()
                }), 100), () => clearTimeout(p.current))), [e, r]);
                const [g, C] = (0, o.useState)(s);
                (0, o.useEffect)((() => {
                    g !== s && c.current && (c.current.scrollIntoView(), C(s))
                }), [s, g]);
                const b = (0, o.useRef)(t),
                    x = u.current && u.current.scrollHeight > u.current.clientHeight + 40,
                    v = t.length,
                    w = Boolean(t.length > 0 && "uploadedFile" === t[v - 1].type && t[v - 1].imageLoaded),
                    y = b.current.length < v;
                (0, o.useEffect)((() => {
                    b.current.length !== t.length && m(), x && y && (() => {
                        try {
                            const e = Array.from(A.current.querySelectorAll(".message")).slice(-9),
                                t = e[e.length - 1].offsetHeight;
                            for (let n = 0; n < e.length; n += 1) e[n].style.transition = "none", e[n].style.transform = `translateY(${t}px)`;
                            setTimeout((() => {
                                for (let t = 0; t < e.length; t += 1) e[t].style.transition = "transform 0.2s, margin 0.2s", e[t].style.transform = ""
                            }), 0)
                        } catch (e) {
                            (0, gt.G)(e)
                        }
                    })(), b.current = t
                }), [x, A, t, b, y]), (0, o.useEffect)((() => {
                    (i || n || d || w) && m()
                }), [i, n, d, w]);
                const B = (0, pt.qs)(),
                    I = (0, pt._1)(),
                    k = t.filter((e => Math.floor(Date.now() / 1e3) - e.time_sent > 86400)),
                    E = t.filter((e => Math.floor(Date.now() / 1e3) - e.time_sent <= 86400)),
                    S = yt.e2e ? t : E,
                    [M] = (0, o.useState)(S.length);
                return (0, o.useEffect)((() => {
                    if (M === S.length) {
                        S.filter((e => "uploadedFile" === e.type && "image" === e.attachmentType)).find((e => !e.imageLoaded)) || m()
                    }
                }), [M, S]), (0, N.BX)("div", {
                    id: "conversation-group",
                    ref: u,
                    className: `${"Firefox"===B.name?"native-scroll":""} ${l?"drag-active":""} ${I?"ios-ipad":""}`,
                    role: "log",
                    children: [l && (0, N.tZ)("div", {
                        className: "uploadIconWrapper",
                        children: (0, N.BX)("div", {
                            className: "upload-circle",
                            children: [(0, N.tZ)(wt.rG, {}), (0, N.tZ)("span", {
                                children: (0, Ye.dW)("dragAndDropInfo", null, "Drop here to attach")
                            })]
                        })
                    }), (0, N.BX)("div", {
                        id: "messages",
                        "aria-live": "polite",
                        "aria-atomic": "false",
                        "data-testid": "messagesLog",
                        children: [s && k.map((e => (0, N.tZ)(Go, { ...e,
                            sender: e.sender
                        }, e.id))), !s && k.length > 0 && (0, N.tZ)("div", {
                            className: "history-button-wrapper",
                            "data-testid": "historyButtonWrapper",
                            children: (0, N.BX)("button", {
                                className: "history-button",
                                type: "button",
                                onClick: () => {
                                    e((0, yt.SnQ)(kt.M.showPreviousMessagesClicked)), e((0, yt.e2e)(!0))
                                },
                                "data-testid": "historyButton",
                                children: [(0, N.tZ)(wt.F_, {}), (0, Ye.dW)("previousMessages", null, "Previous messages")]
                            })
                        }), k.length > 0 && (0, N.tZ)("div", {
                            ref: c,
                            style: {
                                float: "left",
                                clear: "both",
                                width: "100%"
                            }
                        }), E.map((e => (0, N.tZ)(Go, { ...e,
                            sender: e.sender
                        }, e.id))), (0, N.tZ)(Qt, { in: i,
                            children: (0, N.tZ)(ta, {})
                        }), (0, N.tZ)(Xo, {
                            operatorIsTyping: n
                        }), d && (0, N.tZ)(ea, {})]
                    }), f && "Firefox" !== B.name && !r && (0, N.tZ)(Jo, {
                        messagesLength: t.length,
                        conversationRef: u.current,
                        iframeDocument: A.current,
                        showOldMessages: s
                    })]
                })
            };
            var ia = e => (0, N.tZ)("div", {
                className: "get-started",
                children: (0, N.tZ)("button", {
                    type: "button",
                    onClick: e.onClick,
                    children: (0, N.tZ)(ut, {
                        value: "getStarted",
                        fallback: "Get started"
                    })
                })
            });
            const oa = 66,
                aa = 104,
                ra = 142;
            var sa = e => {
                let {
                    statusBarRef: t
                } = e;
                const n = (0, a.v9)((e => e.operators)),
                    i = (0, a.v9)(Bt.RX),
                    r = (0, o.useMemo)((() => {
                        if (i) return [{
                            avatarSrc: i,
                            name: "",
                            id: 1
                        }];
                        const e = n.filter((e => e.isOnline));
                        return n.find((e => e.isOnline)) ? e : n
                    }), [n, i]),
                    [l, d] = (0, o.useState)(r),
                    A = (0, o.useRef)(null);
                (0, o.useEffect)((() => {
                    if (t ? .current && A ? .current) {
                        const e = t.current.clientHeight > 0 ? t.current.clientHeight - 0 : 40,
                            n = (e => {
                                let t = 3;
                                return e < oa ? t = 0 : e < aa ? t = 1 : e < ra && (t = 2), t
                            })(A.current.clientHeight - e);
                        d(r.slice(0, n))
                    }
                }), [r, t]);
                const {
                    avatarTransition: c
                } = (0, s.q_)({
                    from: {
                        avatarTransition: 0
                    },
                    avatarTransition: 1
                });
                return (0, N.tZ)("div", {
                    className: "operators",
                    ref: A,
                    children: l.map(((e, t) => (0, N.tZ)(s.q.div, {
                        style: {
                            zIndex: l.length - t + 1,
                            transform: c.interpolate((e => {
                                const n = l.length - t - 1,
                                    i = 3 - l.length + 1;
                                return `translate3d(0,${-7*i+7*i*e+26*n+e*n*12}px,0)`
                            }))
                        },
                        children: (0, N.tZ)(ht, {
                            name: e.name,
                            avatarSrc: e.avatarSrc,
                            className: "ava48"
                        })
                    }, e.id)))
                })
            };
            const la = () => (0, Ye.dW)("welcomeMessage", null, "") ? (0, N.tZ)("p", {
                className: "start-message",
                children: (0, N.tZ)(ut, {
                    value: "welcomeMessage",
                    emojify: !0
                })
            }) : null;
            var da = () => {
                const e = (0, o.useRef)(null),
                    t = (0, a.I0)(),
                    n = (0, a.v9)((e => e.showOptionsDropdown)),
                    i = (0, a.v9)((e => e.bannerImage)),
                    r = (0, a.v9)((e => e.isProjectOnline)),
                    s = (0, a.v9)((e => e.widgetColor)),
                    l = (0, a.v9)(Bt.cn),
                    d = (0, a.v9)((e => e.isMobile)),
                    A = (0, a.v9)((e => e.isSoundEnabled)),
                    [c, u] = (0, o.useState)("");
                return (0, o.useEffect)((() => {
                    u(s[0] === s[1] ? s[0] : `linear-gradient(135deg, ${s[0]} 0%, ${s[1]} 100%)`)
                }), [s]), (0, N.BX)("div", {
                    className: "chat-header",
                    style: {
                        background: c,
                        color: s[2]
                    },
                    children: ["" !== i && (0, N.tZ)("div", {
                        className: "banner",
                        style: {
                            backgroundImage: `url(${i})`
                        }
                    }), (0, N.tZ)("h2", {
                        className: "h2-banner",
                        style: {
                            color: s[2]
                        },
                        children: (0, N.tZ)(ut, {
                            value: "newWidgetHeaderText",
                            fallback: "Chat with us",
                            emojify: !0
                        })
                    }), (!l || l && d) && (0, N.tZ)(Rt, {}), A && (0, N.BX)(N.HY, {
                        children: [(0, N.BX)("button", {
                            className: "material-icons options i-banner",
                            onClick: e => {
                                !(0 === e.nativeEvent.pageX && 0 === e.nativeEvent.pageY) && n && e.currentTarget.blur(), t((0, yt.SnQ)(kt.M.optionsButtonClicked)), t((0, yt.sdi)(!n))
                            },
                            onBlur: () => {
                                t((0, yt.sdi)(!1))
                            },
                            style: {
                                color: s[2]
                            },
                            type: "button",
                            "aria-label": n ? (0, Ye.dW)("closeOptions", null, "Close options") : (0, Ye.dW)("openOptions", null, "Open options"),
                            css: St,
                            children: [(0, N.tZ)(wt.Ei, {}), (0, N.tZ)("span", {
                                children: n ? (0, Ye.dW)("closeOptions", null, "Close options") : (0, Ye.dW)("openOptions", null, "Open options")
                            })]
                        }), (0, N.tZ)(_, { in: n,
                            classNames: "dropdownFade",
                            children: (0, N.tZ)(Mt, {})
                        })]
                    }), (0, N.tZ)(la, {}), (0, N.tZ)(sa, {
                        statusBarRef: e
                    }), (0, N.tZ)(vt, {
                        widgetColor: s,
                        isProjectOnline: r,
                        ref: e
                    })]
                })
            };
            var Aa = e => (0, N.tZ)(Z, { in: e.in,
                timeout: e.timeout,
                appear: !0,
                addEndListener: t => {
                    t.addEventListener("transitionend", e.onAnimationEnded, !1)
                },
                children: t => (0, N.tZ)("div", {
                    className: "transition-container",
                    style: { ...e.defaultStyle,
                        ...e.transitionStyles[t]
                    },
                    children: e.children
                })
            });
            var ca = e => {
                let {
                    trackingEvent: t
                } = e;
                const n = (0, a.I0)(),
                    i = (0, a.v9)((e => e.isMobile)),
                    o = (0, a.v9)(Bt.cn),
                    r = (0, a.v9)(Bt.Xf);
                return i && r === Et.t4.WIX || !i && o ? null : (0, N.tZ)("button", {
                    type: "button",
                    className: "material-icons exit-chat mobile-close",
                    onClick: () => {
                        n((0, yt.SnQ)(t)), n((0, yt.AKm)(!1)), n((0, yt.ejT)(!1))
                    },
                    "aria-label": (0, Ye.dW)("closeWidget", null, "Close chat widget"),
                    children: (0, N.tZ)(wt.x8, {})
                })
            };
            const ua = o.lazy((() => n.e(236).then(n.bind(n, 3253))));
            var pa = () => {
                const e = (0, Zt.PZ)().state,
                    [t, n] = (0, o.useState)(Boolean(e));
                return (0, o.useEffect)((() => {
                    e && n(!0)
                }), [e]), (0, N.tZ)(Gt, {
                    onDidCatch: () => {},
                    children: (0, N.tZ)(o.Suspense, {
                        fallback: null,
                        children: t && (0, N.tZ)(ua, {
                            resetVideoCallConnectionRequest: () => {
                                n(!1)
                            }
                        })
                    })
                })
            };
            var fa = () => {
                const e = (0, a.v9)(Bt.U1);
                return (0, N.tZ)("button", {
                    className: "user-data-modal-submit",
                    type: "submit",
                    style: {
                        background: `linear-gradient(99deg, ${e[0]}, ${e[1]})`,
                        color: e[2] || "#fff",
                        boxShadow: `${(0,pt.a7)(e[3]??"",.24)} 0px 8px 32px 0px`
                    },
                    children: (0, N.tZ)(ut, {
                        value: "offlineSendButton"
                    })
                })
            };
            var ha = () => {
                const e = (0, a.v9)(Bt.RX),
                    t = (0, a.v9)(Bt.vU);
                if (e) return (0, N.tZ)("div", {
                    className: "user-data-modal-operators",
                    children: (0, N.tZ)(ht, {
                        avatarSrc: e,
                        className: "user-data-modal-operator"
                    }, 1)
                });
                const n = t.find((e => e.isOnline)) ? t.filter((e => e.isOnline)) : t;
                return (0, N.tZ)("div", {
                    className: "user-data-modal-operators",
                    children: n.slice(0, 4).map((e => (0, N.tZ)(ht, {
                        avatarSrc: e.avatarSrc,
                        className: "user-data-modal-operator"
                    }, e.id)))
                })
            };
            var ma = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                const [i, a] = o.useState(!1), r = (0, Nt.a9)();
                return o.useEffect((() => {
                    function n() {
                        e.current && t.current && (e.current.clientHeight - t.current.clientHeight > 270 ? a(!0) : a(!1))
                    }
                    return r && r.addEventListener("resize", n), () => {
                        r && r.removeEventListener("resize", n)
                    }
                }), [t, e, r, n]), o.useEffect((() => {
                    if (e.current && t.current) {
                        const n = e.current.clientHeight - t.current.clientHeight > 270;
                        a(n)
                    }
                }), [i, e, t, n]), i
            };
            const ga = {
                    name: "13if91l",
                    styles: "position:relative;z-index:1;margin-bottom:8px;border:1px solid rgba(108, 125, 159, 0.24);border-radius:5px"
                },
                Ca = {
                    name: "1oo9jfo",
                    styles: "border-color:#f6303a;select{&:not(:focus):invalid{color:#f6303a;}}svg{fill:#f6303a;}"
                },
                ba = {
                    name: "1fqx5q",
                    styles: "border-color:#007DFC;svg{fill:#647491;}"
                },
                xa = {
                    name: "zaj675",
                    styles: 'overflow:hidden;display:block;width:100%;padding:9px 40px 10px 12px;border:none;border-radius:0;outline:none;background:transparent;color:#080F1A;font-size:15px;appearance:none;white-space:nowrap;text-overflow:ellipsis;&:not(:focus):invalid{color:#8894ab;}option[value=""][disabled]{display:none;}'
                },
                va = {
                    name: "znmab8",
                    styles: "position:absolute;top:0;bottom:0;right:8px;width:24px;height:24px;margin:auto;pointer-events:none;svg{top:auto;left:auto;fill:#647491;}"
                },
                wa = (0, pt.$U)();
            var ya = e => {
                    let {
                        onChange: t,
                        hasError: n,
                        shakeClassName: i
                    } = e;
                    const r = (0, a.v9)(Bt.p7),
                        [s, l] = (0, o.useState)(!1),
                        [d, A] = (0, o.useState)("");
                    if (!r.length) return null;
                    const c = (0, Ye.dW)("routingRules_selector", null, "Select Department...");
                    return (0, N.BX)("div", {
                        css: [ga, n && Ca, s && ba, "", ""],
                        className: i,
                        children: [(0, N.BX)("select", {
                            css: xa,
                            value: d,
                            required: !0,
                            form: "novalidatedform",
                            onFocus: () => {
                                l(!0)
                            },
                            onBlur: () => {
                                l(!1)
                            },
                            onChange: e => {
                                const n = e.target.value,
                                    i = r.find((e => e.position === Number(n))) ? .departmentId;
                                wa || A(n), t && i && t(i)
                            },
                            title: c,
                            children: [(0, N.tZ)("option", {
                                value: "",
                                disabled: !0,
                                children: c
                            }), r.map((e => {
                                let {
                                    alias: t,
                                    position: n
                                } = e;
                                return (0, N.tZ)("option", {
                                    value: n,
                                    children: t
                                }, n)
                            }))]
                        }), (0, N.tZ)("div", {
                            css: va,
                            children: (0, N.tZ)(wt.K5, {})
                        })]
                    })
                },
                Ba = n(2561);

            function Ia(e) {
                const t = e;
                return [gi.WQ, "signUpNewsletter"].forEach((e => {
                    void 0 !== t[e] && (t[e] = Boolean(t[e]))
                })), "boolean" == typeof t[gi.WQ] && (t[gi.WQ] = {
                    value: t[gi.WQ] ? "subscribed" : "unsubscribed",
                    date: Math.round(Date.now() / 1e3),
                    setBy: "user"
                }), t
            }
            const ka = "SET_INPUT",
                Ea = "SHOW_ERROR_ON_INVALID_FIELDS";

            function Sa(e, t) {
                switch (t.type) {
                    case ka:
                        {
                            const {
                                fieldType: n,
                                isValid: i,
                                value: o
                            } = t;
                            return { ...e,
                                inputValues: { ...e.inputValues,
                                    [n]: {
                                        isValid: i,
                                        value: o
                                    }
                                },
                                fieldsWithErrors: { ...e.fieldsWithErrors,
                                    [n]: !1
                                }
                            }
                        }
                    case Ea:
                        {
                            const t = Object.entries(e.inputValues).filter((e => {
                                let [, t] = e;
                                return !t.isValid
                            })).reduce(((e, t) => {
                                let [n] = t;
                                return { ...e,
                                    [n]: !0
                                }
                            }), {});
                            return { ...e,
                                fieldsWithErrors: t
                            }
                        }
                    default:
                        throw new Error
                }
            }
            const Ma = e => {
                const t = e.areDepartmentsEnabled && !e.isDepartmentSelected ? [...e.preChatFields, {
                        type: gi.V5
                    }] : e.preChatFields,
                    [n, i] = o.useReducer(Sa, t, (function(t) {
                        const n = {};
                        return t.forEach((e => {
                            n[e.type] = {
                                isValid: !1,
                                value: e.value ? e.value : ""
                            }
                        })), e.prechatSubscriptionCheckboxDefaultValue && n.emailConsent && !n.emailConsent.value && (n.emailConsent = { ...n.emailConsent,
                            value: !0
                        }), {
                            inputValues: n,
                            fieldsWithErrors: {}
                        }
                    })),
                    {
                        triggerShake: a,
                        shakeClassName: r
                    } = _t();
                const l = (e, t, n) => {
                        i({
                            type: ka,
                            fieldType: n,
                            value: e,
                            isValid: t
                        })
                    },
                    d = e => {
                        i({
                            type: ka,
                            fieldType: gi.V5,
                            value: e,
                            isValid: !0
                        })
                    },
                    A = o.useRef();
                o.useEffect((() => {
                    A.current && A.current.focus()
                }), []), o.useEffect((() => {
                    e.isDepartmentSelected && d(e.selectedDepartmentId)
                }), [e.isDepartmentSelected, e.selectedDepartmentId]);
                const c = o.useRef(!1);
                o.useEffect((() => {
                    if (!c.current) {
                        const t = e.preChatFields.map((e => e.type));
                        (0, Ba.f)() ? .trackEvent({
                            eventName: "tidio_prechat_started",
                            legacyEventName: "Pre-Chat Survey started",
                            params: {
                                email: t.includes("email"),
                                phone: t.includes("phone"),
                                name: t.includes("name"),
                                consent_given: t.includes("emailConsent")
                            }
                        }), c.current = !0
                    }
                }), [e.preChatFields]);
                const u = o.useRef(),
                    p = ma(e.parentContainerRef, u, e.preChatFields);

                function f(t) {
                    t && t.preventDefault();
                    return Object.values(n.inputValues).every((e => !0 === e.isValid)) ? (e.dispatch((0, yt.GzK)(function(e) {
                        const t = {};
                        return Object.keys(e).forEach((n => {
                            t[n] = e[n].value
                        })), !0 === t.signUpNewsletter && (t.emailConsent = !0), Ia(t)
                    }(n.inputValues))), !0) : (a(), i({
                        type: Ea
                    }), !1)
                }
                const h = e => {
                        13 === e && f()
                    },
                    m = (e, t) => (0, N.tZ)(bi, {
                        type: e.type,
                        placeholder: e.placeholder,
                        onInputChange: l,
                        disabled: !1,
                        onKeyDown: h,
                        forceErrorIcon: n.fieldsWithErrors[e.type],
                        shakeClassName: n.fieldsWithErrors[e.type] && r ? r : "",
                        ref: 0 === t ? A : void 0,
                        value: e.value
                    }, e.type),
                    g = e.preChatFields.map((e => {
                        const t = n.inputValues[e.type] ? .value;
                        return { ...e,
                            value: t
                        }
                    })),
                    C = g.filter((e => {
                        let {
                            type: t
                        } = e;
                        return t !== gi.WQ
                    })),
                    b = g.find((e => {
                        let {
                            type: t
                        } = e;
                        return t === gi.WQ
                    })),
                    x = n.fieldsWithErrors[gi.V5];
                return (0, N.BX)(s.q.div, {
                    className: "pre-chat",
                    style: e.style,
                    children: [p && (0, N.tZ)(ha, {}), (0, N.BX)("form", {
                        onSubmit: f,
                        ref: u,
                        children: [(0, N.tZ)("div", {
                            className: "user-data-modal-text",
                            children: (0, N.tZ)(ut, {
                                value: "preformMessage",
                                emojify: !0
                            })
                        }), (0, N.BX)("div", {
                            className: "user-data-modal-fields",
                            children: [C.map(m), e.areDepartmentsEnabled && !e.isDepartmentSelected && (0, N.tZ)(ya, {
                                onChange: d,
                                shakeClassName: x && r ? r : "",
                                hasError: x
                            }), b && m(b, C.length)]
                        }), (0, N.tZ)(fa, {})]
                    })]
                })
            };
            Ma.defaultProps = {
                selectedDepartmentId: null
            };
            var Za = (0, a.$j)((e => ({
                preChatFields: (0, Ut.c)(e.preChat.data, e.visitor),
                areDepartmentsEnabled: (0, Bt.dr)(e),
                isDepartmentSelected: (0, Bt.Gs)(e),
                selectedDepartmentId: (0, Bt.tc)(e),
                prechatSubscriptionCheckboxDefaultValue: (0, Bt.N2)(e)
            })))(Ma);
            var Ra = (0, a.$j)()((e => {
                const [t, n] = o.useState(""), [i, a] = o.useState(!1), [r, l] = o.useState(!1), {
                    triggerShake: d,
                    shakeClassName: A
                } = _t(), c = o.useRef();
                o.useEffect((() => {
                    c.current && c.current.focus()
                }), []);
                const u = o.useRef(),
                    p = ma(e.parentContainerRef, u);

                function f(n) {
                    return n && n.preventDefault(), i ? (e.dispatch((0, yt.PCB)(t)), !0) : (l(!0), d(), !1)
                }
                return (0, N.BX)(s.q.div, {
                    className: "always-online",
                    style: e.style,
                    children: [p && (0, N.tZ)(ha, {}), (0, N.BX)("form", {
                        onSubmit: f,
                        ref: u,
                        children: [(0, N.tZ)("div", {
                            className: "user-data-modal-text",
                            children: (0, N.tZ)(ut, {
                                value: "alwaysOnlineEngageMessage",
                                emojify: !0
                            })
                        }), (0, N.tZ)("div", {
                            className: "user-data-modal-fields",
                            children: (0, N.tZ)(mi, {
                                type: "email",
                                placeholder: "preformInput_email",
                                onChange: (e, t) => {
                                    n(e), a(t), l(!1)
                                },
                                onKeyDown: e => {
                                    13 === e && f()
                                },
                                disabled: !1,
                                bindInputRef: c,
                                forceErrorIcon: r,
                                shakeClassName: A
                            })
                        }), (0, N.tZ)(fa, {})]
                    })]
                })
            }));
            const Ta = (e, t) => e.trim().length >= t;
            var Da = e => {
                let {
                    value: t = "",
                    placeholder: n = "",
                    onChange: i,
                    onKeyDown: a,
                    disabled: r = !1,
                    isValidCallback: s,
                    forceErrorIcon: l = !1,
                    onFocus: d,
                    onBlur: A,
                    shakeClassName: c = "",
                    minLength: u = 1
                } = e;
                const [p, f] = (0, o.useState)(t), [h, m] = (0, o.useState)(Ta(p, u)), [g, C] = (0, o.useState)(!1), b = (0, o.useRef)(), x = e => {
                    const t = e.target.value,
                        n = Ta(t, u);
                    f(t), m(n), i && i(t, n), s && s(h)
                }, v = e => {
                    const {
                        keyCode: t
                    } = e, n = 13 === t;
                    return n && !h && (C(!0), b.current && clearTimeout(b.current), b.current = setTimeout((() => {
                        C(!1)
                    }), 820)), !(!n || !h) && (e.preventDefault(), a && a(t), !0)
                }, w = () => {
                    d && d()
                }, y = () => {
                    A && A()
                }, B = () => void 0 === l ? g : l, I = (0, N.tZ)(ut, {
                    value: [n],
                    children: e => (0, N.tZ)("textarea", {
                        placeholder: e[n],
                        onChange: x,
                        onKeyDown: v,
                        value: p,
                        readOnly: r,
                        className: r ? "disabled" : "",
                        onFocus: w,
                        onBlur: y,
                        rows: 4
                    })
                }), k = h ? (0, N.tZ)(wt.qB, {}) : !h && B() ? (0, N.tZ)(wt.x8, {}) : (0, N.tZ)(wt.Eh, {});
                return (0, N.BX)("div", {
                    className: `field-wrapper ${c} ${B()?"field-wrapper-with-error":""}`,
                    children: [k, I]
                })
            };
            var Na = e => {
                let {
                    parentContainerRef: t
                } = e;
                const n = (0, a.I0)(),
                    i = (0, a.v9)(Bt.MP),
                    [r] = (0, o.useState)(!i),
                    [l, d] = (0, o.useState)(""),
                    [A, c] = (0, o.useState)(!1),
                    u = (0, a.v9)(Bt.a7),
                    [p, f] = (0, o.useState)(u ? ? ""),
                    [h, m] = (0, o.useState)(p.length >= 3),
                    [g, C] = (0, o.useState)(!1),
                    [b, x] = (0, o.useState)(!1),
                    {
                        triggerShake: v,
                        shakeClassName: w
                    } = _t(),
                    y = o.useRef();
                o.useEffect((() => {
                    y.current && y.current.focus()
                }), []);
                const B = o.useRef(null),
                    I = ma(t, B);

                function k(e) {
                    return e && e.preventDefault(), (i || A) && h ? (n((0, yt.xvt)(i || l, p)), x(!0), !0) : (C(!0), v(), !1)
                }
                return (0, s.Yz)(b, {
                    config: s.vc.stiff,
                    from: {
                        transform: "translateY(-10px)"
                    },
                    enter: {
                        transform: "translateY(0)",
                        willChange: "filter"
                    },
                    leave: {
                        transform: "translateY(10px)"
                    },
                    exitBeforeEnter: !0
                })(((e, t) => t ? (0, N.tZ)(s.q.div, {
                    style: e,
                    children: (0, N.BX)("div", {
                        className: "create-ticket-success-wrapper",
                        children: [(0, N.tZ)(wt.dU, {}), (0, N.tZ)("div", {
                            className: "user-data-modal-text",
                            children: (0, N.tZ)(ut, {
                                value: "ticketSubmittedConfirmation",
                                emojify: !0
                            })
                        })]
                    })
                }) : (0, N.BX)(s.q.div, {
                    className: "always-online",
                    style: e,
                    "data-testid": "createTicketModal",
                    children: [I && (0, N.tZ)(ha, {}), (0, N.BX)("form", {
                        onSubmit: k,
                        ref: B,
                        noValidate: !0,
                        children: [(0, N.tZ)("div", {
                            className: "user-data-modal-text",
                            children: (0, N.tZ)(ut, {
                                value: "alwaysOnlineEngageMessage",
                                emojify: !0
                            })
                        }), r && (0, N.tZ)("div", {
                            className: "user-data-modal-fields",
                            children: (0, N.tZ)(mi, {
                                type: "email",
                                placeholder: "preformInput_email",
                                onChange: (e, t) => {
                                    d(e), c(t), C(!1)
                                },
                                disabled: !1,
                                bindInputRef: y,
                                forceErrorIcon: !A && g,
                                shakeClassName: A ? "" : w
                            })
                        }), (0, N.tZ)("div", {
                            className: "user-data-modal-fields",
                            children: (0, N.tZ)(Da, {
                                value: p,
                                placeholder: "preformInput_firstmsg",
                                minLength: 3,
                                onChange: (e, t) => {
                                    f(e), m(t), C(!1)
                                },
                                disabled: !1,
                                forceErrorIcon: !h && g,
                                shakeClassName: h ? "" : w
                            })
                        }), (0, N.tZ)(fa, {})]
                    })]
                })))
            };
            const Ua = e => {
                const t = (0, a.I0)(),
                    n = (0, a.v9)((e => e.showUserDataModal)),
                    i = (0, a.v9)((e => e.widgetColor)),
                    r = o.useRef(null);
                o.useEffect((() => () => {
                    (0, Nt.Rn)()
                }), []);
                const l = (0, s.Yz)(n, {
                        config: s.vc.stiff,
                        from: {
                            transform: "translateY(-10px)"
                        },
                        enter: {
                            transform: "translateY(0)"
                        },
                        leave: {
                            transform: "translateY(10px)"
                        },
                        exitBeforeEnter: !0
                    }),
                    {
                        fillerHeight: d,
                        ...A
                    } = e.style,
                    c = o.useMemo((() => ({
                        backgroundImage: `linear-gradient(#fff, #fff), linear-gradient(118deg, ${i[0]}, ${i[1]})`,
                        ...A
                    })), [i, A]);
                return (0, N.BX)(s.q.div, {
                    className: "user-data-modal",
                    style: c,
                    ref: r,
                    "data-testid": "userDataModal",
                    children: [(0, N.tZ)("button", {
                        className: "user-data-modal-close",
                        onClick: function() {
                            t((0, yt.SnQ)(kt.M.closeModalClicked)), t((0, yt.XSP)(!1))
                        },
                        type: "button",
                        "aria-label": (0, Ye.dW)("closeUserDataModal", null, "Close modal"),
                        children: (0, N.tZ)(wt.x8, {})
                    }), l(((e, t) => "prechat" === t ? (0, N.tZ)(Za, {
                        parentContainerRef: r,
                        style: e
                    }) : "alwaysOnline" === t ? (0, N.tZ)(Ra, {
                        parentContainerRef: r,
                        style: e
                    }) : "createTicket" === t ? (0, N.tZ)(Na, {
                        parentContainerRef: r
                    }) : null)), (0, N.tZ)(s.q.div, {
                        className: "user-data-modal-filler",
                        style: {
                            height: d
                        }
                    })]
                })
            };
            var _a = () => {
                const e = (0, a.v9)((e => e.showUserDataModal));
                return (0, s.Yz)(!1 !== e, {
                    config: {
                        tension: 150,
                        friction: 20
                    },
                    from: {
                        opacity: 0,
                        fillerHeight: "93%",
                        moveContent: "translateY(-20px)"
                    },
                    enter: {
                        opacity: 1,
                        fillerHeight: "96%",
                        moveContent: "translateY(0)"
                    },
                    leave: {
                        opacity: 0,
                        fillerHeight: "105%",
                        moveContent: "translateY(20px)"
                    }
                })(((e, t) => t && (0, N.tZ)(Ua, {
                    style: e
                })))
            };
            const La = {
                    transition: "max-height 200ms"
                },
                ja = Boolean((0, Ye.dW)("welcomeMessage", null, "")),
                Oa = (0, pt.qs)().name.toLowerCase(),
                Fa = (0, pt.kA)().name.toLowerCase(),
                Wa = (0, pt.$U)(),
                {
                    width: za
                } = Dt.o6[Dt.oG.chatSize1];
            var Pa = () => {
                const e = (0, a.v9)(Bt.Xe),
                    t = (0, a.v9)((e => e.showOptionsDropdown)),
                    n = (0, a.v9)((e => e.isMobile)),
                    i = (0, a.v9)((e => e.messages)),
                    r = (0, a.v9)((e => e.getStartedActive)),
                    s = (0, a.v9)((e => e.hideHeader)),
                    l = (0, a.v9)(Lt.J),
                    d = (0, a.v9)(Bt.o9),
                    A = (0, a.v9)((e => e.allowAttachments)),
                    c = (0, a.v9)(Bt.bP),
                    u = (0, a.v9)((e => e.isProjectOnline)),
                    p = (0, a.v9)(Lt.Xu),
                    [f] = (0, o.useState)(i.length),
                    [h, m] = (0, o.useState)(l && !n),
                    g = (0, pt.QI)(),
                    C = (0, o.useRef)(0),
                    b = (0, o.useRef)(""),
                    x = (0, o.useRef)(""),
                    [v, w] = (0, o.useState)(e),
                    y = (0, a.I0)(),
                    B = (0, o.useRef)(null),
                    I = (0, Nt.a9)(),
                    k = (0, o.useRef)(100),
                    E = (0, o.useRef)(n && "ios" === Fa),
                    S = (0, o.useRef)({
                        entering: {
                            maxHeight: `${k.current}px`
                        },
                        entered: {
                            maxHeight: "399px"
                        }
                    }),
                    [M, Z] = (0, o.useState)(144);
                (0, o.useEffect)((() => {
                    const e = u && !(0, Ye.dW)("weAreOnline") || !u && !(0, Ye.dW)("alwaysOnlineTopBar");
                    Z(e ? 94 : 144)
                }), [u, Z]);
                const R = (0, o.useCallback)((() => {
                        if (E.current) try {
                            I && I.parent.scrollTo(0, C.current)
                        } catch (e) {
                            (0, gt.G)(e)
                        }
                    }), [I]),
                    T = (0, o.useCallback)((() => {
                        if (n && I) try {
                            I.parent.document.body.style.cssText = b.current, I.parent.document.documentElement.style.cssText = x.current
                        } catch (e) {}
                    }), [n, I]);
                (0, o.useEffect)((() => () => {
                    T(), R()
                }), [T, R]), (0, o.useEffect)((() => {
                    E.current && 0 === C.current && I && (C.current = I.parent.scrollY)
                }), [I]), (0, o.useEffect)((() => {
                    if (e === It.views.chat && n && I) try {
                        x.current = I.parent.document.documentElement.style.cssText, b.current = I.parent.document.body.style.cssText;
                        let e = "overflow: hidden; height: 100%; width: 100%; visibility: visible; opacity: 1 !important; display: block; left: 0; top:0; right: auto; bottom: auto; margin: 0;";
                        "ios" === Fa && "chrome" !== Oa && (e += "position:fixed;"), I.parent.document.body.style.cssText = e, I.parent.document.documentElement.style.cssText = "overflow: hidden; margin: 0 !important;"
                    } catch (e) {}
                }), [n, e, I]), (0, o.useEffect)((() => {
                    v === It.views.welcome && setTimeout((() => {
                        if (B.current && v === It.views.welcome) {
                            const {
                                clientHeight: e
                            } = B.current;
                            y((0, yt.kqK)(Dt.oG.dynamic, {
                                width: za,
                                height: e + 51
                            })), k.current = e - 110 - M, S.current = {
                                entering: {
                                    maxHeight: `${k.current}px`
                                },
                                entered: {
                                    maxHeight: "399px"
                                }
                            }
                        }
                    }), 100)
                }), [y, M, v]), (0, o.useEffect)((() => {
                    i.length > f && w(It.views.chat), 0 === i.length && e === It.views.welcome && w(It.views.welcome), v === It.views.welcome && e === It.views.chat && w(It.views.chat)
                }), [i.length, f, v, e]);
                const D = () => {
                        t && n && "ios" === Fa && y((0, yt.sdi)(!1))
                    },
                    U = (0, o.useCallback)((e => {
                        if (A) {
                            const t = e[0];
                            y((0, yt.cTq)(t)), y((0, yt.RDO)(!1))
                        }
                    }), [y, A]),
                    {
                        getRootProps: _
                    } = He({
                        onDrop: U,
                        onDragEnter: () => {
                            d || y((0, yt.RDO)(!0))
                        },
                        onDragLeave: () => {
                            y((0, yt.RDO)(!1))
                        },
                        noClick: !0,
                        noKeyboard: !0,
                        disabled: !i.find((e => "visitor" === e.sender)) || Wa || c || p
                    });
                return v === It.views.welcome ? (0, N.BX)("div", {
                    className: `start-group ${Oa} no-clip-path ${ja?"":"no-start-message"}`,
                    "data-testid": "welcomeView",
                    onClick: D,
                    ref: B,
                    children: [(0, N.tZ)(da, {}), !g && r ? (0, N.tZ)(ia, {
                        onClick: () => {
                            y((0, yt.vit)())
                        }
                    }) : (0, N.tZ)(on, {})]
                }) : (0, N.BX)("div", {
                    className: `chat no-clip-path ${Oa}`,
                    onClick: D,
                    ..._({
                        onClick: e => e.stopPropagation()
                    }),
                    children: [!h && (0, N.tZ)(_a, {}), (0, N.tZ)(pa, {}), !(s && n) && (0, N.tZ)(Tt, {}), s && n && (0, N.tZ)(ca, {
                        trackingEvent: kt.M.chatClosed
                    }), h ? (0, N.tZ)(Aa, { in: !0,
                        timeout: 1,
                        defaultStyle: La,
                        transitionStyles: S.current,
                        onAnimationEnded: () => {
                            m(!1)
                        },
                        children: (0, N.tZ)(na, {})
                    }) : (0, N.tZ)(na, {}), (0, N.tZ)(on, {
                        hasSeparator: !0
                    })]
                })
            };
            var Ha = (0, a.$j)((e => ({
                unreadMessages: e.unreadMessages
            })))((e => (0, N.tZ)(_, {
                classNames: "ie" === e.browserName ? "fade" : "scale",
                in: e.unreadMessages > 0,
                children: (0, N.tZ)("div", {
                    id: "new-message",
                    className: "active",
                    children: e.unreadMessages
                })
            })));
            const qa = {
                    active: "0px 4px 24px",
                    hover: "0px 8px 32px"
                },
                $a = {
                    active: "0px 2px 16px",
                    hover: "0px 2px 12px"
                };

            function Ya(e, t) {
                return e ? $a[t] : qa[t]
            }
            class Ga extends o.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "state", {
                        elementHovered: !1,
                        buttonShadow: "#020610" === this.props.widgetColor[3] ? `${Ya(this.props.isAwesomeIframe,"active")} ${(0,pt.a7)(this.props.widgetColor[3],".20")}` : `${Ya(this.props.isAwesomeIframe,"active")} ${(0,pt.a7)(this.props.widgetColor[3],".50")}`,
                        isGradientActive: "#020610" !== this.props.widgetColor[3]
                    }), (0, i.Z)(this, "browserName", (0, pt.qs)().name.toLowerCase()), (0, i.Z)(this, "wrapperRef", o.createRef()), (0, i.Z)(this, "buttonWave", (() => {
                        this.wrapperRef.current && (this.wrapperRef.current.classList.contains("clicked") && this.wrapperRef.current.classList.remove("clicked"), setTimeout((() => {
                            this.wrapperRef.current && this.wrapperRef.current.classList.add("clicked")
                        }), 10))
                    })), (0, i.Z)(this, "onBubbleClick", (e => {
                        const {
                            dispatch: t,
                            hasMessages: n,
                            newMessageDisabled: i,
                            view: o
                        } = this.props, {
                            chat: a,
                            closed: r,
                            fly: s,
                            welcome: l
                        } = It.views;
                        0 === e.nativeEvent.pageX && 0 === e.nativeEvent.pageY || e.currentTarget.blur(), o !== r ? (i ? (0, Nt.$k)() : t((0, yt.jaP)(!0)), (o === s || o === l && n) && t((0, yt.kEi)(a))) : (t((0, yt.SnQ)(kt.M.widgetIconClicked)), t((0, yt.OFJ)()), t((0, yt.ejT)(!0)))
                    })), (0, i.Z)(this, "setHoverShadow", (() => {
                        this.setState({
                            elementHovered: !0
                        })
                    })), (0, i.Z)(this, "setDefaultShadow", (() => {
                        this.setState({
                            elementHovered: !1
                        })
                    }))
                }
                static getDerivedStateFromProps(e, t) {
                    return e.newMessageDisabled && e.view !== It.views.closed && !t.elementHovered ? {
                        buttonShadow: `${Ya(e.isAwesomeIframe,"active")} ${(0,pt.a7)("#020610",".20")}`
                    } : e.newMessageDisabled && e.view !== It.views.closed && t.elementHovered ? {
                        buttonShadow: `${Ya(e.isAwesomeIframe,"hover")} ${(0,pt.a7)("#020610",".20")}`
                    } : t.elementHovered ? t.elementHovered ? {
                        buttonShadow: `${Ya(e.isAwesomeIframe,"hover")} ${(0,pt.a7)(e.widgetColor[3],t.isGradientActive?".24":".20")}`
                    } : null : {
                        buttonShadow: `${Ya(e.isAwesomeIframe,"active")} ${(0,pt.a7)(e.widgetColor[3],t.isGradientActive?".50":".20")}`
                    }
                }
                render() {
                    const {
                        view: e,
                        widgetColor: t,
                        newMessageDisabled: n
                    } = this.props, i = e !== It.views.closed, o = e === It.views.closed || e === It.views.fly, a = t[0] === t[1] ? t[0] : `linear-gradient(135deg, ${this.props.widgetColor[0]}, ${this.props.widgetColor[1]})`, r = t[2] || "#fff", s = this.props.sidebar.fontColor || "#fff", l = n && e === It.views.chat;
                    return (0, N.BX)("div", {
                        id: "button",
                        "data-testid": "widgetButton",
                        className: `${this.props.isSidebarComponent?"sidebar":""} ${i?"chat-open":"chat-closed"} mobile-size__${this.props.mobileButtonSize}`,
                        ref: this.wrapperRef,
                        children: [this.props.isSidebarComponent && (0, N.tZ)("div", {
                            className: "sidebar-content",
                            style: {
                                background: this.props.sidebar.color,
                                color: s
                            },
                            onClick: this.onBubbleClick,
                            children: (0, N.tZ)("span", {
                                children: (0, N.tZ)(ut, {
                                    value: "sidebarLabel"
                                })
                            })
                        }), (0, N.tZ)("div", {
                            className: "buttonWave"
                        }), (0, N.BX)("button", {
                            type: "button",
                            id: "button-body",
                            "data-testid": "widgetButtonBody",
                            onClick: this.onBubbleClick,
                            onMouseDown: () => {
                                l || this.buttonWave()
                            },
                            style: {
                                background: a,
                                boxShadow: this.state.buttonShadow
                            },
                            onMouseEnter: l ? this.setHoverShadow : this.setDefaultShadow,
                            onMouseLeave: this.setDefaultShadow,
                            className: `${l?"disabled":""} ${this.browserName}`,
                            tabIndex: "0",
                            "aria-label": i ? (0, Ye.dW)("closeWidget", null, "Close chat widget") : (0, Ye.dW)("openWidget", null, "Open chat widget"),
                            children: [(0, N.tZ)("i", {
                                className: "material-icons type1 for-closed " + (o ? "active" : ""),
                                style: {
                                    color: r
                                },
                                children: (0, N.tZ)(wt.xj, {})
                            }), (0, N.tZ)("i", {
                                className: "material-icons type2 for-closed " + (o ? "active" : ""),
                                children: (0, N.tZ)(wt.Qj, {})
                            }), (0, N.tZ)("i", {
                                className: "material-icons type1 for-opened " + (o ? "" : "active"),
                                style: {
                                    color: r
                                },
                                children: (0, N.tZ)(wt.vw, {})
                            }), (0, N.tZ)("i", {
                                className: "material-icons type2 for-opened " + (o ? "" : "active"),
                                children: (0, N.tZ)(wt.vw, {})
                            })]
                        }), !this.props.isSidebarComponent && (0, N.BX)(N.HY, {
                            children: [(0, N.tZ)(Ha, {
                                browserName: this.browserName
                            }), (0, N.tZ)(_, {
                                classNames: "ie" === this.browserName ? "fade" : "scale",
                                in: this.props.isSoundEnabled && this.props.areNotificationSnoozed,
                                children: (0, N.tZ)("div", {
                                    id: "dnd-indicator",
                                    children: (0, N.tZ)(wt.nh, {})
                                })
                            })]
                        })]
                    })
                }
            }
            Ga.defaultProps = {
                isSidebarComponent: !1
            };
            var Va = (0, a.$j)((e => ({
                view: (0, Bt.Xe)(e),
                widgetColor: (0, pt.w8)(e.widgetColor),
                areNotificationSnoozed: e.notificationSnoozed,
                newMessageDisabled: (0, Bt.bP)(e),
                sidebar: e.sidebarIframeStyles,
                hasMessages: Boolean(e.messages.length),
                mobileButtonSize: (0, Bt.Jq)(e),
                isSoundEnabled: e.isSoundEnabled,
                isAwesomeIframe: (0, Lt.Jx)(e)
            })))(Ga);
            const Ja = e => {
                const t = (0, a.v9)(Bt.Xe),
                    [n, i] = (0, o.useState)(t !== It.views.closed);
                return e.children({
                    hasAnimationEnded: n,
                    onAnimationEnded: () => {
                        i((e => !e))
                    }
                })
            };
            Ja.propTypes = {
                children: j().func.isRequired
            };
            var Xa = Ja;
            var Qa = (0, a.$j)()((e => {
                const t = e.message.type === Ut.Nw.uploadedFile,
                    n = "220px",
                    i = () => {
                        e.dispatch((0, yt.SnQ)(kt.M.flyMessageClicked)), e.dispatch((0, yt.kEi)(It.views.chat))
                    };
                return (0, N.tZ)(ut, {
                    value: ["onlineMessagePlaceholder", "fillOutTheForm"],
                    children: o => {
                        let {
                            onlineMessagePlaceholder: a,
                            fillOutTheForm: r
                        } = o;
                        return (0, N.tZ)("button", {
                            type: "button",
                            style: {
                                width: t ? n : `${e.minFlyWidth}px`,
                                minWidth: t ? n : `${e.minFlyWidth}px`
                            },
                            id: "new-message-button-fly",
                            className: "fly-new-message-button",
                            onClick: i,
                            "data-testid": "flyNewMessageButton",
                            children: e.message.type === Et.Cs.FORM ? r : a
                        })
                    }
                })
            }));
            const Ka = e => {
                const t = e.showMoreRepliesButton || e.quickReplies.length > e.maxButtons,
                    n = t ? e.quickReplies.slice(0, e.maxButtons - 1) : e.quickReplies;
                return (0, N.BX)("div", {
                    className: "button-wrapper",
                    children: [n.map((t => (0, N.BX)(o.Fragment, {
                        children: ["url" === t.type && (0, N.tZ)(Yi, {
                            title: t.title,
                            payload: t.payload,
                            url: t.url,
                            onClick: e.onButtonClick
                        }), ("action" === t.type || "bot" === t.type || "text" === t.type) && (0, N.tZ)(Gi, {
                            title: t.title,
                            payload: t.payload,
                            onClick: e.onButtonClick
                        })]
                    }, `${t.title}${t.payload}`))), t && (0, N.tZ)("button", {
                        type: "button",
                        className: "more-replies",
                        onClick: e.onMoreButtonClick,
                        children: (0, N.tZ)(wt.Ei, {})
                    })]
                })
            };
            Ka.defaultProps = {
                showMoreRepliesButton: !1
            };
            var er = Ka;
            var tr = (0, a.$j)((e => ({
                isMobile: e.isMobile
            })))((e => {
                let t = [];
                e.message.type === Ut.Nw.cards ? t = e.message.cards ? .[0] ? .buttons || [] : e.message.quickReplies ? t = e.message.quickReplies : e.message.buttons && ({
                    buttons: t
                } = e.message);
                return (0, N.tZ)(er, {
                    quickReplies: t,
                    onButtonClick: (t, n) => (e.dispatch((0, yt.SnQ)(kt.M.flyMessageButtonsClicked)), e.dispatch((0, yt.eBK)(n, t)), !0),
                    onMoreButtonClick: () => {
                        e.dispatch((0, yt.kEi)(It.views.chat))
                    },
                    maxButtons: e.isMobile ? 3 : 4,
                    showMoreRepliesButton: e.message.type === Ut.Nw.cards && e.message.cards.length > 1
                })
            }));
            var nr = (0, a.$j)((e => ({
                isEmojiPanelVisible: e.isEmojiPanelVisible,
                widgetColor: e.widgetColor,
                isMobile: e.isMobile
            })))((e => (0, N.tZ)("div", {
                className: "input-group",
                children: e.hasButtons ? (0, N.tZ)(tr, {
                    message: e.message
                }) : (0, N.tZ)(Qa, {
                    message: e.message,
                    minFlyWidth: e.minFlyWidth
                })
            })));
            var ir = e => "image" === e.attachmentType ? (0, N.tZ)("button", {
                type: "button",
                onClick: e.onClick,
                children: (0, N.tZ)("div", {
                    className: "image-preview",
                    style: {
                        backgroundImage: `url(${e.content})`
                    },
                    "data-testid": "imagePreview"
                })
            }) : (0, N.tZ)("button", {
                className: "link",
                type: "button",
                onClick: e.onClick,
                style: {
                    borderBottom: "1px solid #3f88f3",
                    color: "#3f88f3"
                },
                children: (0, N.tZ)(ut, {
                    value: "mediaFile",
                    fallback: "Media file"
                })
            });
            class or extends o.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "state", {
                        width: 130
                    }), (0, i.Z)(this, "documentRef", (0, Nt._I)())
                }
                componentDidMount() {
                    const e = or.checkWidth(this.props, this.documentRef);
                    e && this.setState({
                        width: e
                    })
                }
                componentDidUpdate(e) {
                    if (this.props.lastMessage.content === e.lastMessage.content) return !1;
                    const t = or.checkWidth(this.props, this.documentRef);
                    return t && this.setState({
                        width: t
                    }), !0
                }
                render() {
                    return this.props.children(this.state)
                }
            }(0, i.Z)(or, "checkWidth", ((e, t) => {
                if ((0, pt.$U)()) return 230;
                try {
                    const n = e.messageContentRef,
                        i = ("OffscreenCanvas" in window ? new OffscreenCanvas(500, 100) : t.createElement("canvas")).getContext("2d");
                    i.font = '17px "Mulish", sans-serif';
                    const o = Math.ceil(i.measureText(e.placeholderMessage).width);
                    n.current.style.cssText = "width: auto; align-self: flex-start;";
                    const a = n.current.clientWidth;
                    n.current.style.cssText = "";
                    const r = (0, pt.tq)() && window.screen.width < 340,
                        s = (0, pt.tq)() && window.screen.width < 410;
                    return r ? 160 : s ? 210 : Math.max(o, a - 15, 130)
                } catch (e) {
                    return 250
                }
            })), or.defaultProps = {
                messageContentRef: null
            };
            var ar = or;
            const rr = {
                    name: "v8qd0m",
                    styles: "display:inline-block;margin-top:20px"
                },
                sr = o.forwardRef(((e, t) => {
                    const {
                        content: n,
                        type: i,
                        attachmentType: o,
                        sender: a
                    } = e.message;
                    if (i === Ut.Nw.uploadedFile) return (0, N.tZ)("div", {
                        className: `message-container ${o}-content`,
                        ref: t,
                        children: (0, N.tZ)(ir, {
                            content: n,
                            onClick: () => {
                                e.dispatch((0, yt.SnQ)(kt.M.flyMessageClicked)), e.dispatch((0, yt.kEi)(It.views.chat))
                            },
                            attachmentType: o
                        })
                    });
                    let r = null;
                    if (i === Ut.Nw.cards) {
                        const {
                            cards: n = []
                        } = e.message, i = n[0] ? .title || "";
                        r = st(i);
                        const o = n[0] ? .imageUrl || "";
                        if (o) return (0, N.BX)("div", {
                            className: "message-container image-content",
                            ref: t,
                            children: [(0, N.tZ)(ir, {
                                content: o,
                                onClick: () => {
                                    e.dispatch((0, yt.kEi)(It.views.chat))
                                },
                                attachmentType: "image"
                            }), (0, N.tZ)("span", {
                                className: "fly-message--card-title",
                                dangerouslySetInnerHTML: {
                                    __html: r
                                }
                            })]
                        })
                    } else {
                        if (i === Ut.Nw.couponCode) {
                            const {
                                couponCode: i = ""
                            } = e.message;
                            return r = st(n), (0, N.BX)("div", {
                                className: "message-container",
                                ref: t,
                                children: [(0, N.tZ)("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: r
                                    }
                                }), (0, N.tZ)("span", {
                                    css: rr,
                                    children: i
                                })]
                            })
                        }
                        r = a === Ut.Qe.bot ? lt(n) : st(n)
                    }
                    return (0, N.tZ)("div", {
                        className: "message-container",
                        ref: t,
                        dangerouslySetInnerHTML: {
                            __html: r
                        }
                    })
                }));
            class lr extends o.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "browserName", (0, pt.qs)().name.toLowerCase()), (0, i.Z)(this, "flyMessageRef", o.createRef()), (0, i.Z)(this, "contentRef", o.createRef()), (0, i.Z)(this, "windowRef", (0, Nt.a9)()), (0, i.Z)(this, "iframeWidth", null), (0, i.Z)(this, "iframeHeight", null), (0, i.Z)(this, "rafId", null), (0, i.Z)(this, "handleAnimationEnd", (e => {
                        "new-message-button-fly" === e.target.getAttribute("id") && this.props.view === It.views.fly && this.updateIframe()
                    })), (0, i.Z)(this, "hasButtons", (() => void 0 !== this.props.message.quickReplies || void 0 !== this.props.message.cards || void 0 !== this.props.message.buttons)), (0, i.Z)(this, "expandIframeToMax", (() => {
                        let e = this.hasButtons() ? 495 : 362;
                        const t = "100%";
                        this.props.isMobile && (e = "100%"), this.flyMessageRef.current.style.maxHeight = "none", this.props.dispatch((0, yt.kqK)(`dynamic${e}_${t}`, {
                            width: e,
                            height: t
                        })), this.iframeWidth = e, this.iframeHeight = t
                    })), (0, i.Z)(this, "updateIframe", (e => !!this.windowRef && (this.expandIframeToMax(), this.rafId = this.windowRef.requestAnimationFrame((() => {
                        let {
                            clientWidth: t,
                            clientHeight: n
                        } = this.flyMessageRef.current;
                        if (this.props.isMobile) {
                            if (t += 95, n += 80, this.iframeWidth === t && this.iframeHeight === n) return this.flyMessageRef.current.style.cssText = "", !1
                        } else if (t += 90, n += 90, this.iframeWidth === t && this.iframeHeight === n) return this.flyMessageRef.current.style.cssText = "", !1;
                        return e && (e.height && (n = Math.max(n, e.height)), e.width && (t = Math.max(t, e.width))), this.props.dispatch((0, yt.kqK)(`dynamic${t}_${n}`, {
                            width: t,
                            height: n
                        })), this.iframeWidth = t, this.iframeHeight = n, this.flyMessageRef.current.style.cssText = "", !0
                    })), !0)))
                }
                componentDidMount() {
                    this.flyMessageRef.current && this.flyMessageRef.current.addEventListener("transitionend", this.handleAnimationEnd), this.updateIframe()
                }
                componentDidUpdate() {
                    return this.props.view !== It.views.fly ? (this.rafId && (this.windowRef.cancelAnimationFrame(this.rafId), this.rafId = null), !1) : (this.updateIframe(), !0)
                }
                componentWillUnmount() {
                    this.flyMessageRef.current.removeEventListener("transitionend", this.handleAnimationEnd)
                }
                render() {
                    const e = this.hasButtons();
                    return (0, N.BX)("div", {
                        ref: this.flyMessageRef,
                        "data-testid": "flyMessage",
                        className: `flyMessage ${e?"with-buttons":""} ${this.browserName}`,
                        children: [(0, N.tZ)("div", {
                            className: "close-button-wrapper",
                            children: (0, N.tZ)(ca, {
                                trackingEvent: kt.M.flyMessageClosed
                            })
                        }), (0, N.tZ)(sr, {
                            ref: this.contentRef,
                            message: this.props.message,
                            dispatch: this.props.dispatch
                        }), (0, N.tZ)(ar, {
                            messageContentRef: this.contentRef,
                            placeholderMessage: (0, Ye.dW)("onlineMessagePlaceholder", null, "New message"),
                            lastMessage: this.props.message,
                            children: t => {
                                let {
                                    width: n
                                } = t;
                                return (0, N.tZ)(nr, {
                                    message: this.props.message,
                                    hasButtons: e,
                                    minFlyWidth: n
                                })
                            }
                        })]
                    })
                }
            }
            const dr = (0, a.$j)((e => ({
                isMobile: e.isMobile,
                view: (0, Bt.Xe)(e)
            })))(lr);
            class Ar extends o.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "state", {
                        message: this.props.lastMessage
                    }), (0, i.Z)(this, "isPreview", (0, pt.$U)())
                }
                render() {
                    const e = this.isPreview ? this.props.lastMessage : this.state.message;
                    return (0, N.tZ)(dr, {
                        message: e
                    })
                }
            }
            var cr = (0, a.$j)((e => ({
                lastMessage: (0, Lt.hc)(e)
            })))(Ar);
            const ur = () => {
                const e = (0, a.v9)(Bt.Xe),
                    t = (0, a.v9)(Bt.wq),
                    n = Boolean((0, Zt.PZ)().state),
                    i = e !== It.views.closed;
                return (0, N.tZ)(Xa, {
                    children: o => {
                        let {
                            hasAnimationEnded: a,
                            onAnimationEnded: r
                        } = o;
                        return (0, N.BX)(N.HY, {
                            children: [(0, N.tZ)(_, { in: e === It.views.fly && a,
                                classNames: "moveFromRight",
                                timeout: 300,
                                onExited: e === It.views.closed || e === It.views.fly ? r : void 0,
                                children: (0, N.tZ)(cr, {})
                            }), (0, N.tZ)(_, { in: i && e !== It.views.fly && a,
                                classNames: "moveFromRight",
                                timeout: 300,
                                onExited: r,
                                children: (0, N.tZ)(Pa, {})
                            }), (0, N.tZ)(_, { in: !i && !a,
                                classNames: "" + (t && "left" === t ? "bubbleAnimationLeft" : "bubbleAnimation"),
                                timeout: 300,
                                onExited: r,
                                children: (0, N.tZ)(Va, {
                                    isSidebarComponent: !0
                                })
                            }), (0, N.tZ)(_, { in: i && a && !(e === It.views.chat && n),
                                timeout: 300,
                                classNames: "bubbleAnimation",
                                children: (0, N.tZ)(Va, {})
                            })]
                        })
                    }
                })
            };
            ur.defaultProps = {
                sidebarPosition: "right"
            };
            var pr = ur;
            const fr = (0, pt.$U)(),
                hr = e => e ? 94 : 140;
            var mr = () => {
                const e = (0, a.I0)(),
                    t = (0, a.v9)(Bt.Xe),
                    n = (0, a.v9)(Lt.Jx),
                    i = (0, o.useRef)(null),
                    r = (0, o.useRef)(null),
                    s = (0, o.useRef)(null),
                    l = (0, o.useRef)(null),
                    d = (0, o.useRef)(null),
                    A = (0, o.useRef)(null),
                    c = (0, o.useCallback)((() => {
                        const t = hr(n);
                        e((0, yt.kqK)(Et.Ms.DYNAMIC, {
                            width: 450,
                            height: t
                        })), l.current = 450, d.current = t
                    }), [e, n]),
                    u = (0, o.useCallback)((() => {
                        if (!r.current) return !1;
                        if (fr) return c(), !0;
                        let t = (e => e ? 94 : 112)(n);
                        const o = hr(n);
                        return t += (() => {
                            try {
                                if (i.current) {
                                    i.current.style.cssText = "width: auto; align-self: flex-start; white-space: nowrap";
                                    const e = i.current.clientWidth;
                                    return i.current.style.cssText = "", e + 15
                                }
                                return 250
                            } catch (e) {
                                return 250
                            }
                        })(), l.current === t && d.current === o || (A.current = r.current.requestAnimationFrame((() => {
                            e((0, yt.kqK)(Et.Ms.DYNAMIC, {
                                width: t,
                                height: o
                            })), l.current = t
                        }))), !0
                    }), [e, c, n]),
                    p = () => {
                        A.current && r ? .current && (r.current.cancelAnimationFrame(A.current), A.current = null)
                    };
                (0, o.useEffect)((() => {
                    r.current = (0, Nt.a9)(), s.current = (0, Nt.yP)(), l.current = s.current ? .clientWidth || null, d.current = s.current ? .clientHeight || null
                }), []), (0, o.useEffect)((() => (t !== It.views.closed ? p() : u(), () => () => {
                    p(), t === It.views.closed && e((0, yt.kqK)(Et.Ms.ONLY_BUBBLE))
                })), [e, u, t]);
                const f = () => {
                        e((0, yt.SnQ)(kt.M.widgetLabelClicked)), e((0, yt.OFJ)()), e((0, yt.ejT)(!0))
                    },
                    h = (e, t) => {
                        let n = e;
                        const i = [...n],
                            o = n.length > t;
                        for (; n.length > t;) i.pop(), n = i.join("");
                        return o ? `${n}&hellip;` : n
                    };
                return (0, N.tZ)(ut, {
                    value: ["chatWithUsLabel"],
                    children: e => {
                        let {
                            chatWithUsLabel: t
                        } = e;
                        return 0 === t.length ? null : (0, N.tZ)("button", {
                            className: "widgetLabel",
                            ref: i,
                            onClick: f,
                            type: "button",
                            children: (0, N.tZ)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: st(h(t, 25))
                                }
                            })
                        })
                    }
                })
            };
            var gr = () => {
                const e = (0, a.v9)(Bt.Xe),
                    t = (0, a.v9)(Lt.rW),
                    n = Boolean((0, Zt.PZ)().state),
                    i = e !== It.views.closed;
                return (0, N.tZ)(Xa, {
                    children: o => {
                        let {
                            hasAnimationEnded: a,
                            onAnimationEnded: r
                        } = o;
                        return (0, N.BX)(N.HY, {
                            children: [(0, N.tZ)(_, { in: e === It.views.fly,
                                classNames: "moveFromRight",
                                onExited: e === It.views.closed ? r : void 0,
                                timeout: 300,
                                children: (0, N.tZ)(cr, {})
                            }), (0, N.tZ)(_, { in: i && e !== It.views.fly && a,
                                classNames: "moveFromRight",
                                onExited: r,
                                timeout: 400,
                                children: (0, N.tZ)(Pa, {})
                            }), t && (0, N.tZ)(_, { in: !i && e !== It.views.fly && !a,
                                classNames: "moveFromLeftLabel",
                                timeout: 300,
                                children: (0, N.tZ)(mr, {})
                            }), (0, N.tZ)(_, { in: !i && !a,
                                classNames: "bubbleAnimationReturn",
                                timeout: 300,
                                onExited: r,
                                children: (0, N.tZ)(Va, {})
                            }), (0, N.tZ)(_, { in: i && a && !(e === It.views.chat && n),
                                classNames: "bubbleAnimation",
                                timeout: 300,
                                onExited: e === It.views.fly ? r : void 0,
                                children: (0, N.tZ)(Va, {})
                            })]
                        })
                    }
                })
            };
            const Cr = () => {};
            var br = () => {
                const e = (0, a.v9)(Bt.Xe),
                    t = (0, a.v9)((e => e.isMobile)),
                    n = (0, a.v9)(Bt.rW),
                    i = Boolean((0, Zt.PZ)().state),
                    o = e !== It.views.closed;
                return t ? (0, N.BX)(N.HY, {
                    children: [(0, N.tZ)(_, { in: e === It.views.fly,
                        classNames: "moveFromRight",
                        timeout: 300,
                        children: (0, N.tZ)(cr, {})
                    }), (0, N.tZ)(_, { in: o && e !== It.views.fly,
                        classNames: "moveFromRight",
                        timeout: 300,
                        children: (0, N.tZ)(Pa, {})
                    }), (0, N.tZ)(_, { in: !(e === It.views.chat && i),
                        classNames: "bubbleAnimation",
                        children: (0, N.tZ)(Va, {})
                    })]
                }) : (0, N.tZ)(Xa, {
                    children: t => {
                        let {
                            hasAnimationEnded: a,
                            onAnimationEnded: r
                        } = t;
                        return (0, N.BX)(N.HY, {
                            children: [(0, N.tZ)(_, { in: e === It.views.fly,
                                classNames: "moveFromRight",
                                timeout: 300,
                                onExited: e === It.views.closed ? r : Cr,
                                children: (0, N.tZ)(cr, {})
                            }), (0, N.tZ)(_, { in: o && e !== It.views.fly,
                                classNames: "moveFromRight",
                                timeout: 300,
                                onExited: r,
                                children: (0, N.tZ)(Pa, {})
                            }), n && (0, N.tZ)(_, { in: !o && e !== It.views.fly && a,
                                classNames: "moveFromRightLabel",
                                onExited: r,
                                timeout: 300,
                                children: (0, N.tZ)(mr, {})
                            }), (0, N.tZ)(_, { in: !(e === It.views.chat && i),
                                classNames: "bubbleAnimation",
                                onEntered: r,
                                children: (0, N.tZ)(Va, {})
                            })]
                        })
                    }
                })
            };
            var xr = (0, a.$j)((e => ({
                view: (0, Bt.Xe)(e),
                isMobile: e.isMobile
            })))((e => {
                if ("left" === e.widgetPosition && e.isMobile) {
                    const t = e.view !== It.views.closed;
                    return (0, N.tZ)(Xa, {
                        children: n => {
                            let {
                                hasAnimationEnded: i,
                                onAnimationEnded: o
                            } = n;
                            return (0, N.BX)(N.HY, {
                                children: [(0, N.tZ)(_, { in: e.view === It.views.fly,
                                    classNames: "moveFromRight",
                                    onExited: e.view === It.views.closed ? o : void 0,
                                    timeout: 300,
                                    children: (0, N.tZ)(cr, {})
                                }), (0, N.tZ)(_, { in: t && e.view !== It.views.fly && i,
                                    classNames: "moveFromRight",
                                    onExited: o,
                                    timeout: 400,
                                    children: (0, N.tZ)(Pa, {})
                                }), (0, N.tZ)(_, { in: !t && !i,
                                    classNames: "bubbleAnimationReturn",
                                    timeout: 300,
                                    onExited: o,
                                    children: (0, N.tZ)(Va, {})
                                }), (0, N.tZ)(_, { in: t && i,
                                    classNames: "bubbleAnimation",
                                    timeout: 300,
                                    onExited: e.view === It.views.fly ? o : void 0,
                                    children: (0, N.tZ)(Va, {})
                                })]
                            })
                        }
                    })
                }
                return (0, N.BX)(N.HY, {
                    children: [(0, N.tZ)(_, { in: e.view === It.views.fly,
                        classNames: "moveFromRight",
                        timeout: 300,
                        children: (0, N.tZ)(cr, {})
                    }), (0, N.tZ)(_, { in: e.view !== It.views.closed && e.view !== It.views.fly,
                        classNames: "moveFromRight",
                        timeout: 300,
                        children: (0, N.tZ)(Pa, {})
                    }), (0, N.tZ)(_, { in: !0,
                        classNames: "bubbleAnimation",
                        children: (0, N.tZ)(Va, {})
                    })]
                })
            }));
            var vr = () => {
                const e = (0, o.useRef)(""),
                    t = (0, a.v9)((e => e.unreadMessages)),
                    n = (0, a.v9)((e => e.isPageVisible)),
                    i = (0, o.useRef)(null),
                    r = (0, o.useRef)(!1),
                    s = RegExp(`\\([0-9]+\\) ${(0,Ye.dW)("newMessageTitle",null,"New message")}$`);
                return (0, o.useEffect)((() => {
                    try {
                        e.current = window.parent.document.title
                    } catch (e) {
                        r.current = !0
                    }
                }), []), (0, o.useEffect)((() => {
                    if (r.current) return !1;
                    i.current && (clearInterval(i.current), i.current = null);
                    try {
                        !n && t ? i.current = setInterval((() => {
                            e.current === window.parent.document.title || s.test(window.parent.document.title) || (e.current = window.parent.document.title), window.parent.document.title === e.current ? window.parent.document.title = `(${t}) ${(0,Ye.dW)("newMessageTitle",null,"New message")}` : window.parent.document.title = e.current
                        }), 1e3) : s.test(window.parent.document.title) && (window.parent.document.title = e.current)
                    } catch (e) {}
                    return () => {
                        if (r.current) return !1;
                        clearInterval(i.current);
                        try {
                            s.test(window.parent.document.title) && (window.parent.document.title = e.current)
                        } catch (e) {}
                        return !0
                    }
                }), [n, t, s]), null
            };
            class wr extends o.Component {
                constructor() {
                    super(...arguments), (0, i.Z)(this, "state", {
                        isFontLoaded: !1
                    }), (0, i.Z)(this, "onWindowVisibilityChange", (() => {
                        this.setVisibilityState() && this.props.dispatch((0, yt.kpP)())
                    })), (0, i.Z)(this, "appAvariant", (() => this.props.isChatOnSite ? (0, N.tZ)(xr, {
                        widgetPosition: this.props.widgetPosition
                    }) : this.props.isSidebarEnabled ? (0, N.tZ)(pr, {}) : "left" === this.props.widgetPosition ? (0, N.tZ)(gr, {}) : (0, N.tZ)(br, {})))
                }
                componentDidMount() {
                    try {
                        window.document.addEventListener("visibilitychange", this.onWindowVisibilityChange), this.setVisibilityState()
                    } catch (e) {
                        (0, gt.G)(e)
                    }
                    try {
                        const e = new(p())("Mulish", {
                            weight: 400,
                            document: (0, Nt._I)()
                        });
                        this.state.isFontLoaded || e.load(null, 3e3).catch((() => {})).then((() => {
                            this.setState({
                                isFontLoaded: !0
                            }), window.tidioChatApi ? .trigger("ready"), window.tidioChatApi ? .trigger("setStatus", this.props.isProjectOnline ? "online" : "offline")
                        }))
                    } catch (e) {
                        (0, gt.G)(e), this.setState({
                            isFontLoaded: !0
                        }), window.tidioChatApi ? .trigger("ready"), window.tidioChatApi ? .trigger("setStatus", this.props.isProjectOnline ? "online" : "offline")
                    }
                }
                componentDidUpdate(e) {
                    e.widgetPosition !== this.props.widgetPosition && this.props.setWidgetPosition(this.props.widgetPosition)
                }
                componentWillUnmount() {
                    window.document.removeEventListener("visibilitychange", this.onWindowVisibilityChange)
                }
                setVisibilityState() {
                    const {
                        visibilityState: e
                    } = document;
                    return "visible" !== e ? (this.props.dispatch((0, yt.h7r)(!1)), !1) : (this.props.dispatch((0, yt.h7r)(!0)), !0)
                }
                render() {
                    return this.state.isFontLoaded ? (0, N.BX)(N.HY, {
                        children: [!this.props.isSoundEnabled && (0, N.tZ)(vr, {}), (0, N.tZ)(Zt.ZP, {
                            children: this.appAvariant()
                        })]
                    }) : null
                }
            }
            var yr = (0, a.$j)((e => ({
                widgetPosition: e.chatIframeStyles.widgetPosition,
                isSidebarEnabled: e.sidebarIframeStyles,
                isChatOnSite: (0, Bt.cn)(e),
                isProjectOnline: e.isProjectOnline,
                isSoundEnabled: e.isSoundEnabled
            })))(wr);
            const Br = "firefox" === (0, pt.qs)().name.toLowerCase() ? {
                    srcDoc: ""
                } : {},
                Ir = o.lazy((() => n.e(686).then(n.bind(n, 9805)))),
                kr = () => (0, N.tZ)("div", {});
            var Er = () => {
                    const e = (0, a.I0)(),
                        t = (0, a.v9)((e => e.popupImageSrc));
                    return "string" == typeof t && "" !== t ? (0, N.tZ)(r.ZP, {
                        title: "Tidio Chat - Image Popup",
                        style: {
                            width: "100%",
                            height: "100%",
                            position: "fixed",
                            top: "0",
                            left: "0",
                            zIndex: 2147483003,
                            border: 0
                        },
                        id: "tidio-chat-image-popup",
                        ...Br,
                        children: (0, N.tZ)(Gt, {
                            onDidCatch: () => {
                                e((0, yt.Bv7)())
                            },
                            children: (0, N.tZ)(o.Suspense, {
                                fallback: (0, N.tZ)(kr, {}),
                                children: (0, N.tZ)(Ir, {
                                    imageSrc: t
                                })
                            })
                        })
                    }) : null
                },
                Sr = n(5534),
                Mr = n(5048),
                Zr = n(2597),
                Rr = n(7052),
                Tr = n(9884),
                Dr = n(8833);
            const Nr = {
                zIndex: "z-index",
                transition: "transition",
                background: "background"
            };
            (0, Dr.f)().markDuration("widget_total_load_in_ms", "end");
            const Ur = e => {
                try {
                    e && Object.keys(Nr).forEach((t => {
                        e.style.setProperty(Nr[t], e.style[t], "important")
                    }))
                } catch (e) {}
            };

            function _r(e, t, n) {
                "mobile" === t ? setTimeout((() => {
                    e.style.setProperty("bottom", n, "important")
                }), 0) : "onlySidebar" === t ? setTimeout((() => {
                    e.style.setProperty("bottom", n, "important"), e.style.setProperty("transform", "translateY(50%)", "important")
                }), 0) : e.style.setProperty("bottom", n)
            }
            const Lr = (0, pt.qs)().name.toLowerCase(),
                jr = "firefox" === Lr ? {
                    srcDoc: ""
                } : {},
                Or = (0, pt.t7)();
            class Fr extends o.Component {
                constructor(e) {
                    super(e), (0, i.Z)(this, "styleCache", (0, A.Z)({
                        key: "tidio",
                        stylisPlugins: (0, Ye.dZ)() ? [c.ZP] : [],
                        container: this.props.iframeDocument.head
                    })), (0, i.Z)(this, "state", {
                        isRendered: !1
                    }), (0, i.Z)(this, "setImportantPositioningForMobileAndSidebar", (() => {
                        "mobile" === this.props.iframeView ? setTimeout((() => {
                            this.props.iframeWindow.frameElement && this.props.iframeWindow.frameElement.style.setProperty("bottom", this.getBottomOffset(), "important")
                        }), 0) : "onlySidebar" === this.props.iframeView ? setTimeout((() => !!this.props.iframeWindow.frameElement && (this.props.iframeWindow.frameElement.style.setProperty("bottom", "50%", "important"), this.props.iframeWindow.frameElement.style.setProperty("transform", "translateY(50%)", "important"), !0)), 0) : this.props.iframeWindow.frameElement.style.setProperty("bottom", this.getBottomOffset())
                    })), (0, i.Z)(this, "registerClickForAutoPlayPermissions", (() => {
                        try {
                            const e = () => {
                                (0, Mr.oE)(Lr), window.parent.document.removeEventListener("click", e, !0), window.parent.document.removeEventListener("touchend", e, !0), this.props.iframeDocument.removeEventListener("click", e, !0), this.props.iframeDocument.removeEventListener("touchend", e, !0)
                            };
                            ((0, pt.tq)() || "Safari" === Lr || "Mobile Safari" === Lr) && (window.parent.document.addEventListener("click", e, !0), window.parent.document.addEventListener("touchend", e, !0), this.props.iframeDocument.addEventListener("click", e, !0), this.props.iframeDocument.addEventListener("touchend", e, !0))
                        } catch (e) {
                            (0, gt.G)(e)
                        }
                    })), (0, Nt.xB)(this.props.iframeDocument, this.props.iframeWindow)
                }
                componentDidMount() {
                    Ur(this.props.iframeWindow.frameElement), _r(this.props.iframeWindow.frameElement, this.props.iframeView, this.getBottomOffset()), this.props.isSoundEnabled && this.registerClickForAutoPlayPermissions(), this.setImportantPositioningForMobileAndSidebar(), s.OH.assign({
                        requestAnimationFrame: this.props.iframeWindow.requestAnimationFrame,
                        cancelAnimationFrame: this.props.iframeWindow.cancelAnimationFrame
                    });
                    try {
                        this.props.iframeDocument.addEventListener("error", (e => {
                            if (e ? .target ? .matches("img.emoji") && e.target.parentNode) {
                                const t = e.target.closest(".message"),
                                    n = t ? .querySelector(".message-content");
                                if (e.target.parentNode.replaceChild(this.props.iframeDocument.createTextNode(e.target.alt), e.target), t && n && this.props.iframeWindow) {
                                    const e = 35;
                                    this.props.iframeWindow.requestAnimationFrame((() => {
                                        t.style.width = `${n.offsetWidth+e}px`
                                    }))
                                }
                            }
                        }), !0)
                    } catch (e) {
                        (0, gt.G)(e)
                    }
                    setTimeout((() => {
                        this.setState({
                            isRendered: !0
                        })
                    }), 0)
                }
                componentDidUpdate(e) {
                    e.iframeView !== this.props.iframeView && (Ur(this.props.iframeWindow.frameElement), this.setImportantPositioningForMobileAndSidebar(), _r(this.props.iframeWindow.frameElement, this.props.iframeView, this.getBottomOffset()))
                }
                getBottomOffset() {
                    const {
                        isAwesomeIframe: e,
                        iframeMode: t,
                        iframeView: n
                    } = this.props;
                    return "onlySidebar" === n ? "50%" : e && Dt.yl ? .[t] && Dt.yl[t].bottom || 0
                }
                render() {
                    return (0, N.BX)(l.C, {
                        value: this.styleCache,
                        children: [(0, N.tZ)(d.xB, {
                            styles: (0, d.iv)(Sr.Z.toString(), ";", "")
                        }), (0, N.tZ)(Rr.Z, {}), this.state.isRendered && (0, N.tZ)(yr, {
                            setWidgetPosition: this.props.setWidgetPosition
                        })]
                    })
                }
            }
            const Wr = (0, Zr.Z)(Fr);
            class zr extends o.Component {
                constructor() {
                    var e;
                    super(...arguments), e = this, (0, i.Z)(this, "getIframeSize", (() => ({ ...(0, Dt.P0)(this.props.iframeView),
                        ..."onlySidebar" === this.props.iframeView ? {
                            left: "left" === this.props.sidebarPosition ? "0" : void 0,
                            right: "right" === this.props.sidebarPosition ? "0" : void 0
                        } : {}
                    }))), (0, i.Z)(this, "state", {
                        style: {
                            display: "block",
                            border: "none",
                            position: !this.props.isChatOnSite || (0, pt.tq)() || (0, pt.$U)() ? "fixed" : "inherit",
                            top: "auto",
                            bottom: 0,
                            left: "auto",
                            right: "auto",
                            ...this.getIframeSize(),
                            opacity: 0,
                            [this.props.widgetPosition]: 0,
                            colorScheme: "none",
                            background: "none transparent",
                            margin: 0,
                            maxHeight: "100vh",
                            maxWidth: "100vw",
                            transform: "translateY(0)",
                            transition: "none",
                            visibility: "visible",
                            zIndex: 999999999
                        }
                    }), (0, i.Z)(this, "ref", null), (0, i.Z)(this, "getAwesomeIframeOffset", ((e, t) => {
                        let n = 0;
                        return Dt.yl ? .[e] ? .[t] && (n = Dt.yl[e][t]), n
                    })), (0, i.Z)(this, "setIframeStyle", (function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
                        e.setState({
                            style: t
                        }, n)
                    })), (0, i.Z)(this, "getCurrentIframeStyle", (() => ({ ...this.state.style
                    }))), (0, i.Z)(this, "mergeWithCurrentStyles", (function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
                        e.setIframeStyle({ ...e.getCurrentIframeStyle(),
                            ...t
                        }), n()
                    })), (0, i.Z)(this, "setWidgetPosition", ((e, t) => {
                        const n = this.getCurrentIframeStyle(),
                            i = this.getIframeMode();
                        let o = 0;
                        this.props.isAwesomeIframe && (o = this.getAwesomeIframeOffset(i, e)), this.setIframeStyle({ ...n,
                            right: "auto",
                            left: "auto",
                            [e]: o
                        }, t)
                    })), (0, i.Z)(this, "getIframeAwesomeStyle", (() => {
                        const {
                            widgetPosition: e,
                            isAwesomeIframe: t
                        } = this.props, n = {};
                        if (t) {
                            const t = this.getIframeMode(),
                                {
                                    width: i,
                                    height: o
                                } = Dt.yl ? .[t] || {};
                            if (i && (n.width = i), o && (n.height = o), n[e] = this.getAwesomeIframeOffset(t, e), n.borderRadius = (0, pt.tq)() ? 0 : Dt.sz, Or) {
                                const {
                                    bottom: e,
                                    right: i
                                } = Dt.yl ? .[t] || {};
                                n.bottom = e, n.right = i
                            }
                        }
                        return n
                    })), (0, i.Z)(this, "onIframeMount", (() => {
                        this.setWidgetPosition(this.props.widgetPosition, this.animateOpacity)
                    })), (0, i.Z)(this, "animateOpacity", (() => {
                        this.mergeWithCurrentStyles({
                            display: "block"
                        }, (() => {
                            setTimeout((() => {
                                this.mergeWithCurrentStyles({
                                    opacity: 1
                                })
                            }), 0)
                        }))
                    })), (0, i.Z)(this, "onIframeRef", (e => {
                        this.ref = e;
                        const {
                            widgetPosition: t,
                            isAwesomeIframe: n,
                            dispatch: i
                        } = this.props, o = (0, Tr.Hr)("widget_position");
                        try {
                            if (e ? .node) {
                                const {
                                    left: a,
                                    right: r,
                                    bottom: s
                                } = e.node.getBoundingClientRect(), {
                                    innerWidth: l,
                                    innerHeight: d
                                } = window.parent, A = "left" === t ? a : l - r, c = d - s;
                                0 === A && 0 === c || o || n || (i((0, yt.VCz)({
                                    initialX: A,
                                    initialY: c
                                })), (0, Tr.Mm)("widget_position", !0))
                            }
                        } catch (e) {
                            (0, gt.G)("Error onIframeRef", {
                                message: e ? .message
                            })
                        }
                        n && this.mergeWithCurrentStyles({ ...Dt.yl[this.getIframeMode()]
                        })
                    })), (0, i.Z)(this, "getIframeMode", (() => {
                        const {
                            iframeView: e,
                            isWidgetLabelEnabled: t,
                            view: n,
                            dimensions: i
                        } = this.props;
                        if (e.includes(Dt.oG.dynamic) && i ? .height) {
                            const e = 94;
                            return Number(i.height) === e && t && n !== It.views.fly ? Dt.oG.bubbleWithLabel : Dt.oG.dynamic
                        }
                        return e === Dt.oG.onlyBubble && this.props.isMobile ? Dt.oG.onlyBubbleLarge : e
                    }))
                }
                componentDidUpdate(e) {
                    try {
                        Or && this.props.isAwesomeIframe && e.isAwesomeIframe !== this.props.isAwesomeIframe && this.ref ? .node && this.ref.node.contentWindow ? .document ? .querySelector("body") ? .classList ? .add("awesome-iframe")
                    } catch (e) {}
                }
                render() {
                    const e = this.props.hideWhenOffline && !this.props.isProjectOnline && !this.props.isChatOnSite,
                        t = (0, Ye.dZ)();
                    if (!this.props.isMounted || e) return null;
                    const n = `${this.props.isMobile?"mobile":""} ${this.props.isChatOnSite?"chat-on-site":""} ${t?"lang-rtl":""} ${(0,pt.$U)()?"chat-in-preview":""} ${(0,pt.xX)()?"chat-in-preview--tour":""} ${this.props.isAwesomeIframe?"awesome-iframe":""} ${"ie"===Lr?"legacy":""}`,
                        i = this.getIframeMode();
                    return (0, N.BX)(N.HY, {
                        children: [(0, N.tZ)(r.ZP, {
                            ref: this.onIframeRef,
                            title: "Tidio Chat",
                            head: (0, N.tZ)("style", {
                                children: "\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk0gotYKNnBcif.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk2wotYKNnBcif.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk0AotYKNnBcif.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk0QotYKNnBcif.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk3wotYKNnBQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk0gotYKNnBcif.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk2wotYKNnBcif.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk0AotYKNnBcif.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk0QotYKNnBcif.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Mulish';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://widget-v4.tidiochat.com/fonts/mulish_SGhgqk3wotYKNnBQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"
                            }),
                            style: { ...this.state.style,
                                ...this.getIframeSize(),
                                ...this.getIframeAwesomeStyle()
                            },
                            initialContent: `\n                  <html lang="en">\n                  <head>\n                  <meta name="viewport" content="width=device-width, user-scalable=no">\n                    </head>\n                  <body ${t?'dir="rtl"':""} class="${n.trim()}">\n                    <div></div>\n                  </body>\n                  `,
                            id: "tidio-chat-iframe",
                            contentDidMount: this.onIframeMount,
                            ...jr,
                            children: (0, N.tZ)("div", {
                                className: `${"left"===this.props.widgetPosition?"widget-position-left":"widget-position-right"} ${"left"===this.props.sidebarPosition?"sidebar-position-left":"sidebar-position-right"} ${i}`,
                                children: (0, N.tZ)(Wr, {
                                    setWidgetPosition: this.setWidgetPosition,
                                    iframeView: this.props.iframeView,
                                    iframeMode: i,
                                    isSoundEnabled: this.props.isSoundEnabled,
                                    isAwesomeIframe: this.props.isAwesomeIframe
                                })
                            })
                        }), (0, N.tZ)(Er, {})]
                    })
                }
            }
            zr.defaultProps = {
                sidebarPosition: "right",
                dimensions: null
            };
            var Pr = (0, a.$j)((e => ({
                isMounted: e.isMounted,
                iframeView: e.chatIframeStyles.iframeView,
                dimensions: (0, Bt.B1)(e),
                isMobile: e.isMobile,
                widgetPosition: e.chatIframeStyles.widgetPosition,
                hideWhenOffline: e.hideWhenOffline,
                isProjectOnline: e.isProjectOnline,
                isSidebarEnabled: e.sidebarIframeStyles,
                isAwesomeIframe: (0, Lt.Jx)(e),
                sidebarPosition: e.sidebarIframeStyles.position,
                isChatOnSite: (0, Bt.cn)(e),
                isSoundEnabled: e.isSoundEnabled,
                isWidgetLabelEnabled: (0, Lt.rW)(e),
                view: (0, Bt.Xe)(e)
            })))(zr)
        },
        4841: function(e, t, n) {
            "use strict";
            n.d(t, {
                $T: function() {
                    return v
                },
                CU: function() {
                    return I
                },
                Eh: function() {
                    return h
                },
                Ei: function() {
                    return d
                },
                F_: function() {
                    return L
                },
                Fj: function() {
                    return g
                },
                H_: function() {
                    return S
                },
                Ju: function() {
                    return f
                },
                K5: function() {
                    return j
                },
                Q3: function() {
                    return M
                },
                QW: function() {
                    return T
                },
                Qj: function() {
                    return a
                },
                SJ: function() {
                    return b
                },
                TI: function() {
                    return F
                },
                UW: function() {
                    return y
                },
                Wf: function() {
                    return E
                },
                Y: function() {
                    return O
                },
                _E: function() {
                    return k
                },
                a9: function() {
                    return U
                },
                aN: function() {
                    return D
                },
                bZ: function() {
                    return N
                },
                cP: function() {
                    return Z
                },
                dU: function() {
                    return W
                },
                gR: function() {
                    return l
                },
                iL: function() {
                    return x
                },
                kE: function() {
                    return c
                },
                kf: function() {
                    return u
                },
                nh: function() {
                    return A
                },
                qB: function() {
                    return C
                },
                rG: function() {
                    return B
                },
                sO: function() {
                    return _
                },
                sS: function() {
                    return w
                },
                vw: function() {
                    return r
                },
                x8: function() {
                    return s
                },
                xS: function() {
                    return R
                },
                xj: function() {
                    return o
                },
                z8: function() {
                    return p
                }
            });
            n(1914);
            var i = n(9243);
            const o = () => (0, i.BX)("svg", {
                    id: "ic_bubble",
                    fill: "#FFFFFF",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
                    }), (0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    })]
                }),
                a = () => (0, i.BX)("svg", {
                    id: "ic_create",
                    fill: "blue",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                    }), (0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    })]
                }),
                r = () => (0, i.BX)("svg", {
                    id: "ic_send",
                    fill: "#FFFFFF",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                    }), (0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    })]
                }),
                s = () => (0, i.BX)("svg", {
                    id: "ic_close",
                    fill: "#000000",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                    }), (0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    })]
                }),
                l = () => (0, i.BX)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    id: "ic-minimize",
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"
                    })]
                }),
                d = () => (0, i.BX)("svg", {
                    id: "ic_options",
                    className: "options-icon",
                    fill: "#000000",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                    })]
                }),
                A = () => (0, i.BX)("svg", {
                    id: "ic_notificationsOff",
                    fill: "#000000",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z"
                    })]
                }),
                c = () => (0, i.BX)("svg", {
                    id: "ic_emojiSwitch",
                    fill: "#000000",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                    })]
                }),
                u = () => (0, i.BX)("svg", {
                    id: "ic_attachFile",
                    fill: "#000000",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        fill: "none",
                        d: "M0,0h24v24H0V0z"
                    }), (0, i.tZ)("path", {
                        d: "M13,21.8c-2.3,0-4.1-1.7-4.1-3.8V9.6c0-1.4,1.3-2.6,2.8-2.6c1.5,0,2.8,1.2,2.8,2.6v4.8c0,0.4-0.4,0.8-0.8,0.8s-0.8-0.4-0.8-0.8V9.6c0-0.6-0.5-1-1.2-1s-1.2,0.4-1.2,1V18c0,1.2,1.1,2.2,2.5,2.2c0.7,0,1.3-0.2,1.8-0.7c0.5-0.4,0.7-1,0.7-1.5V7.2c0-1.9-1.7-3.4-3.9-3.4c-2.1,0-3.9,1.5-3.9,3.4v7.2c0,0.4-0.4,0.8-0.8,0.8s-0.8-0.4-0.8-0.8V7.2c0-2.8,2.5-5,5.5-5s5.5,2.2,5.5,5V18c0,1-0.5,2-1.2,2.7C15.1,21.4,14.1,21.8,13,21.8z"
                    })]
                }),
                p = () => (0, i.BX)("svg", {
                    id: "ic_notificationsOn",
                    fill: "#000000",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"
                    })]
                }),
                f = () => (0, i.BX)("svg", {
                    id: "ic_rateStar",
                    fill: "#000000",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    }), (0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    })]
                }),
                h = () => (0, i.BX)("svg", {
                    id: "ic_arrow",
                    fill: "#000000",
                    height: 24,
                    viewBox: "0 0 24 24",
                    width: 24,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                    })]
                }),
                m = {
                    transform: "scale(0.8) translate(3px, 4px)"
                },
                g = () => (0, i.BX)("svg", {
                    id: "caret",
                    fill: "#000000",
                    height: "48",
                    viewBox: "0 0 24 24",
                    width: "48",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.tZ)("path", {
                        style: m,
                        d: "M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z",
                        fill: "#007dfc"
                    }), (0, i.tZ)("path", {
                        d: "M0-.75h24v24H0z",
                        fill: "none"
                    })]
                }),
                C = () => (0, i.BX)("svg", {
                    id: "ic_successChek",
                    fill: "#000000",
                    height: "18",
                    viewBox: "0 0 24 24",
                    width: "18",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                    })]
                }),
                b = () => (0, i.BX)("svg", {
                    id: "ic_thumbDown",
                    fill: "#000000",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"
                    })]
                }),
                x = () => (0, i.BX)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: 24,
                    viewBox: "0 0 24 24",
                    width: 24,
                    fill: "#000000",
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0V0zm0 0h24v24H0V0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L12 14H3v-2l3-7h9v10zm4-12h4v12h-4z"
                    })]
                }),
                v = () => (0, i.BX)("svg", {
                    id: "ic_thumbUp",
                    fill: "#000000",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"
                    })]
                }),
                w = () => (0, i.BX)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: 24,
                    viewBox: "0 0 24 24",
                    width: 24,
                    fill: "#000000",
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0V0zm0 0h24v24H0V0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"
                    })]
                }),
                y = () => (0, i.BX)("svg", {
                    id: "ic_download",
                    fill: "#000000",
                    height: 24,
                    viewBox: "0 0 24 24",
                    width: 24,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
                    })]
                }),
                B = () => (0, i.BX)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    className: "ic_upload",
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"
                    })]
                }),
                I = () => (0, i.BX)("svg", {
                    version: "1.1",
                    id: "ic_logo",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 52 16",
                    style: {
                        enableBackground: "new 0 0 52 16"
                    },
                    xmlSpace: "preserve",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("style", {
                        type: "text/css",
                        dangerouslySetInnerHTML: {
                            __html: "\n\t.st0{fill:#135EEB;}\n\t.st1{fill:#080F1A;}\n\t.st2{fill:#4FC3F7;}\n\t.st3{fill:#3F88F6;}\n"
                        }
                    }), (0, i.tZ)("polygon", {
                        className: "st0",
                        points: "4.8,4.7 5.1,4.3 8.9,4.7 11.2,6.3 11.7,9.1 11.8,11 11.5,11.4 11.3,11.7 8.4,11.7 5.8,10.4 4.3,8.8  4.3,6.5 4.4,5.4 "
                    }), (0, i.BX)("g", {
                        children: [(0, i.BX)("g", {
                            children: [(0, i.tZ)("polygon", {
                                className: "st1",
                                points: "23,12.4 23,5.3 20.5,5.3 20.5,4 27.1,4 27.1,5.3 24.5,5.3 24.5,12.4 \t\t"
                            }), (0, i.tZ)("path", {
                                className: "st1",
                                d: "M31.3,12.4V4h3c1.5,0,2.7,0.4,3.6,1.1S39,6.9,39,8.2s-0.4,2.3-1.2,3.1c-0.8,0.7-2,1.1-3.7,1.1H31.3z M32.8,11.2h1.5c1,0,1.8-0.3,2.3-0.7c0.5-0.5,0.8-1.2,0.8-2.2S37.2,6.6,36.7,6c-0.5-0.5-1.4-0.8-2.5-0.8h-1.4V11.2L32.8,11.2z"
                            }), (0, i.tZ)("path", {
                                className: "st1",
                                d: "M47.5,12.5c-1.3,0-2.4-0.4-3.2-1.2C43.4,10.5,43,9.4,43,8.2s0.4-2.3,1.3-3.1c0.9-0.8,1.9-1.2,3.2-1.2 s2.3,0.4,3.2,1.2C51.6,5.9,52,7,52,8.2s-0.4,2.3-1.3,3.1C49.8,12.1,48.8,12.5,47.5,12.5z M47.5,5.1c-0.8,0-1.5,0.3-2.1,0.9 s-0.8,1.3-0.8,2.2s0.3,1.6,0.8,2.2c0.6,0.6,1.3,0.9,2.1,0.9s1.5-0.3,2.1-0.9c0.6-0.6,0.8-1.3,0.8-2.2S50.2,6.6,49.6,6 C49,5.4,48.3,5.1,47.5,5.1z"
                            }), (0, i.tZ)("path", {
                                className: "st1",
                                d: "M28.1,5.8c0-0.9,0.6-1.6,1.5-1.7l0,0v6.7c0,0.9-0.6,1.6-1.5,1.7l0,0V5.8z"
                            }), (0, i.tZ)("path", {
                                className: "st1",
                                d: "M40.3,5.8c0-0.9,0.6-1.6,1.5-1.7l0,0v6.7c0,0.9-0.6,1.6-1.5,1.7l0,0V5.8z"
                            })]
                        }), (0, i.tZ)("g", {
                            children: (0, i.BX)("g", {
                                children: [(0, i.tZ)("path", {
                                    className: "st0",
                                    d: "M5.8,4.6c-0.3,0-0.7,0-1,0.1C4.7,5,4.7,5.4,4.7,5.7c0,3.1,2.6,5.7,5.8,5.7h1c0.1-0.3,0.1-0.7,0.1-1.1 C11.6,7.2,9,4.6,5.8,4.6z"
                                }), (0, i.tZ)("path", {
                                    className: "st2",
                                    d: "M10.5,11.4c-3.2,0-5.8-2.6-5.8-5.7c0-0.3,0-0.7,0.1-1C2.1,5.2,0,7.5,0,10.3V16h5.8c2.8,0,5.2-2,5.7-4.6H10.5 z"
                                }), (0, i.tZ)("path", {
                                    className: "st3",
                                    d: "M10.5,0C7.6,0,5.3,2,4.8,4.7c0.3-0.1,0.7-0.1,1-0.1c3.2,0,5.8,2.6,5.8,5.7c0,0.4,0,0.7-0.1,1.1h4.8V5.7 C16.3,2.6,13.7,0,10.5,0z"
                                })]
                            })
                        })]
                    })]
                }),
                k = () => (0, i.BX)("svg", {
                    id: "xls-xlsx-csv-icon",
                    "data-name": "Warstwa 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("defs", {
                        children: (0, i.tZ)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "#xls-xlsx-csv-icon .cls-1{fill:#208549;}#xls-xlsx-csv-icon .cls-2{fill:#21a558;}#xls-xlsx-csv-icon .cls-3{fill:#2abc65;}#xls-xlsx-csv-icon .cls-4{fill:#fff;}"
                            }
                        })
                    }), (0, i.tZ)("path", {
                        className: "cls-1",
                        d: "M4.7,1A2.09,2.09,0,0,0,2.61,3.13V21.91A2.09,2.09,0,0,0,4.7,24H19.3a2.09,2.09,0,0,0,2.09-2.09V7.3L15.13,1Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-2",
                        d: "M4.7,0A2.09,2.09,0,0,0,2.61,2.09V20.87A2.09,2.09,0,0,0,4.7,23H19.3a2.09,2.09,0,0,0,2.09-2.09V6.26L15.13,0Z"
                    }), (0, i.tZ)("polygon", {
                        className: "cls-1",
                        points: "21.39 11.3 21.39 10.44 21.39 6.26 18.29 3.16 15.77 5.68 21.39 11.3"
                    }), (0, i.tZ)("path", {
                        className: "cls-3",
                        d: "M21.39,6.26,15.13,0V4.17a2.09,2.09,0,0,0,2.09,2.09Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-4",
                        d: "M10.54,11.79l-3-4.36h2.53L12,10.63l1.87-3.2h2.44l-2.95,4.32,3.3,4.82H14.13L11.9,12.89,9.73,16.57H7.34Z"
                    })]
                }),
                E = () => (0, i.BX)("svg", {
                    id: "wma-mp3-icon",
                    "data-name": "Warstwa 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("defs", {
                        children: (0, i.tZ)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "#wma-mp3-icon .cls-1{fill:#542c74;}#wma-mp3-icon .cls-2{fill:#683695;}#wma-mp3-icon .cls-3{fill:#7649a2;}#wma-mp3-icon .cls-4{fill:#fff;}"
                            }
                        })
                    }), (0, i.tZ)("path", {
                        className: "cls-1",
                        d: "M4.7,1A2.09,2.09,0,0,0,2.61,3.13V21.91A2.09,2.09,0,0,0,4.7,24H19.3a2.09,2.09,0,0,0,2.09-2.09V7.3L15.13,1Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-2",
                        d: "M4.7,0A2.09,2.09,0,0,0,2.61,2.09V20.87A2.09,2.09,0,0,0,4.7,23H19.3a2.09,2.09,0,0,0,2.09-2.09V6.26L15.13,0Z"
                    }), (0, i.tZ)("polygon", {
                        className: "cls-1",
                        points: "21.39 11.3 21.39 10.44 21.39 6.26 18.29 3.16 15.77 5.68 21.39 11.3"
                    }), (0, i.tZ)("path", {
                        className: "cls-3",
                        d: "M21.39,6.26,15.13,0V4.17a2.09,2.09,0,0,0,2.09,2.09Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-4",
                        d: "M12,6.83v6.06a2.26,2.26,0,0,0-1.15-.32,2.3,2.3,0,1,0,2.3,2.3V9.13h2.3V6.83Z"
                    })]
                }),
                S = () => (0, i.BX)("svg", {
                    id: "txt-rtf-icon",
                    "data-name": "Warstwa 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("defs", {
                        children: (0, i.tZ)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "#txt-rtf-icon .cls-1{fill:#dadada;}#txt-rtf-icon .cls-2{fill:#fff;}#txt-rtf-icon .cls-3{fill:#445b70;}"
                            }
                        })
                    }), (0, i.tZ)("path", {
                        className: "cls-1",
                        d: "M4.7,1A2.09,2.09,0,0,0,2.61,3.13V21.91A2.09,2.09,0,0,0,4.7,24H19.3a2.09,2.09,0,0,0,2.09-2.09V7.3L15.13,1Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-2",
                        d: "M4.7,0A2.09,2.09,0,0,0,2.61,2.09V20.87A2.09,2.09,0,0,0,4.7,23H19.3a2.09,2.09,0,0,0,2.09-2.09V6.26L15.13,0Z"
                    }), (0, i.tZ)("polygon", {
                        className: "cls-1",
                        points: "21.39 11.3 21.39 10.44 21.39 6.26 18.29 3.16 15.77 5.68 21.39 11.3"
                    }), (0, i.tZ)("path", {
                        className: "cls-2",
                        d: "M21.39,6.26,15.13,0V4.17a2.09,2.09,0,0,0,2.09,2.09Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-3",
                        d: "M13.54,14H10.31l-.51.8-.58.89a2.12,2.12,0,0,0-.22.51.88.88,0,0,0,0,.36.61.61,0,0,0,.26.34,1.42,1.42,0,0,0,.68.18l.05.28H6.86l0-.28a1.66,1.66,0,0,0,.69-.29,6.59,6.59,0,0,0,1-1.27l5.83-8.82h.35l1.16,8.53c.06.45.1.72.11.81a1.38,1.38,0,0,0,.35.76,1.22,1.22,0,0,0,.75.28l0,.28H12.6l0-.28a4,4,0,0,0,.75-.11.76.76,0,0,0,.31-.45,2.85,2.85,0,0,0,0-1.19Zm-.11-.63L13,9.94l-2.3,3.4Z"
                    })]
                }),
                M = () => (0, i.BX)("svg", {
                    id: "pdf-icon",
                    "data-name": "Warstwa 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("defs", {
                        children: (0, i.tZ)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "#pdf-icon .cls-1{fill:#b6241e;}#pdf-icon .cls-2{fill:#ee2a24;}#pdf-icon .cls-3{fill:#ff4343;}#pdf-icon .cls-4{fill:#fff;}"
                            }
                        })
                    }), (0, i.tZ)("path", {
                        className: "cls-1",
                        d: "M4.7,1A2.09,2.09,0,0,0,2.61,3.13V21.91A2.09,2.09,0,0,0,4.7,24H19.3a2.09,2.09,0,0,0,2.09-2.09V7.3L15.13,1Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-2",
                        d: "M4.7,0A2.09,2.09,0,0,0,2.61,2.09V20.87A2.09,2.09,0,0,0,4.7,23H19.3a2.09,2.09,0,0,0,2.09-2.09V6.26L15.13,0Z"
                    }), (0, i.tZ)("polygon", {
                        className: "cls-1",
                        points: "21.39 11.3 21.39 10.44 21.39 6.26 18.29 3.16 15.77 5.68 21.39 11.3"
                    }), (0, i.tZ)("path", {
                        className: "cls-3",
                        d: "M21.39,6.26,15.13,0V4.17a2.09,2.09,0,0,0,2.09,2.09Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-4",
                        d: "M18.37,14.46c-.31-.56-1.39-.73-1.89-.81a7.84,7.84,0,0,0-1.19-.08c-.31,0-.61,0-.92,0l-.33,0c-.11-.12-.22-.24-.32-.37a11.45,11.45,0,0,1-1.66-2.63,10.5,10.5,0,0,0,.27-1.42,5.89,5.89,0,0,0-.2-2.77c-.12-.3-.43-.66-.78-.48a1.44,1.44,0,0,0-.56,1.2,3.71,3.71,0,0,0,.05,1,6.15,6.15,0,0,0,.25,1c.09.29.19.57.3.85-.07.23-.14.44-.22.66-.19.48-.39.94-.58,1.39l-.3.64c-.31.68-.64,1.34-1,2A11,11,0,0,0,7,15.73a4.89,4.89,0,0,0-.92.74,1.6,1.6,0,0,0-.51.94.6.6,0,0,0,.24.53,1,1,0,0,0,.81.11,4.46,4.46,0,0,0,2.13-1.58A16.23,16.23,0,0,0,10,14.79h0a19.15,19.15,0,0,1,2.63-.62c.42-.07.86-.13,1.31-.17a7.21,7.21,0,0,0,1,.79,4.87,4.87,0,0,0,.92.44,8,8,0,0,0,1,.25,3,3,0,0,0,.52,0c.4,0,1-.16,1-.65A.66.66,0,0,0,18.37,14.46Zm-9.53.89c-.19.29-.37.55-.53.78a3.88,3.88,0,0,1-1.58,1.48,1.17,1.17,0,0,1-.48.09c-.16,0-.32-.08-.32-.27a.93.93,0,0,1,.13-.33,1.72,1.72,0,0,1,.28-.37,5.06,5.06,0,0,1,.84-.68A10.18,10.18,0,0,1,9,15.17ZM11.18,8.1a3.4,3.4,0,0,1,0-.9,2.59,2.59,0,0,1,.09-.42c0-.12.12-.4.25-.43s.27.39.29.51a5.65,5.65,0,0,1-.14,2.24l-.09.33c-.05-.14-.09-.28-.14-.42A7.13,7.13,0,0,1,11.18,8.1Zm1.44,5.7a22.51,22.51,0,0,0-2.24.49,5.43,5.43,0,0,0,.56-.9,11.61,11.61,0,0,0,1-2.26,10.73,10.73,0,0,0,1.56,2.34,1.54,1.54,0,0,0,.17.19Zm5.3,1c0,.15-.36.24-.51.27A2.94,2.94,0,0,1,16,14.94a4,4,0,0,1-.86-.4A4.79,4.79,0,0,1,14.4,14c.29,0,.59,0,.89,0s.6,0,.9.06a3.2,3.2,0,0,1,1.63.62C17.91,14.69,17.93,14.75,17.92,14.81Z"
                    })]
                }),
                Z = () => (0, i.BX)("svg", {
                    id: "mpg-mp4-icon",
                    "data-name": "Warstwa 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("defs", {
                        children: (0, i.tZ)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "#mpg-mp4-icon .cls-1{fill:#132b40;}#mpg-mp4-icon .cls-2{fill:#1c3c57;}#mpg-mp4-icon .cls-3{fill:#335268;}#mpg-mp4-icon .cls-4{fill:#fff;}"
                            }
                        })
                    }), (0, i.tZ)("path", {
                        className: "cls-1",
                        d: "M4.7,1A2.09,2.09,0,0,0,2.61,3.13V21.91A2.09,2.09,0,0,0,4.7,24H19.3a2.09,2.09,0,0,0,2.09-2.09V7.3L15.13,1Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-2",
                        d: "M4.7,0A2.09,2.09,0,0,0,2.61,2.09V20.87A2.09,2.09,0,0,0,4.7,23H19.3a2.09,2.09,0,0,0,2.09-2.09V6.26L15.13,0Z"
                    }), (0, i.tZ)("polygon", {
                        className: "cls-1",
                        points: "21.39 11.3 21.39 10.44 21.39 6.26 18.29 3.16 15.77 5.68 21.39 11.3"
                    }), (0, i.tZ)("path", {
                        className: "cls-3",
                        d: "M21.39,6.26,15.13,0V4.17a2.09,2.09,0,0,0,2.09,2.09Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-4",
                        d: "M14.69,11.19V9.31a.54.54,0,0,0-.54-.54H7.69a.54.54,0,0,0-.53.54v5.38a.54.54,0,0,0,.53.54h6.46a.54.54,0,0,0,.54-.54V12.81L16.84,15V9Z"
                    })]
                }),
                R = () => (0, i.BX)("svg", {
                    id: "flv-icon",
                    "data-name": "Warstwa 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("defs", {
                        children: (0, i.tZ)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "#flv-icon .cls-1{fill:#9b1c24;}#flv-icon .cls-2{fill:#cf1f26;}#flv-icon .cls-3{fill:#f23341;}#flv-icon .cls-4{fill:#fff;}"
                            }
                        })
                    }), (0, i.tZ)("path", {
                        className: "cls-1",
                        d: "M4.7,1A2.09,2.09,0,0,0,2.61,3.13V21.91A2.09,2.09,0,0,0,4.7,24H19.3a2.09,2.09,0,0,0,2.09-2.09V7.3L15.13,1Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-2",
                        d: "M4.7,0A2.09,2.09,0,0,0,2.61,2.09V20.87A2.09,2.09,0,0,0,4.7,23H19.3a2.09,2.09,0,0,0,2.09-2.09V6.26L15.13,0Z"
                    }), (0, i.tZ)("polygon", {
                        className: "cls-1",
                        points: "21.39 11.3 21.39 10.44 21.39 6.26 18.29 3.16 15.77 5.68 21.39 11.3"
                    }), (0, i.tZ)("path", {
                        className: "cls-3",
                        d: "M21.39,6.26,15.13,0V4.17a2.09,2.09,0,0,0,2.09,2.09Z"
                    }), (0, i.tZ)("path", {
                        id: "path3820",
                        className: "cls-4",
                        d: "M7.48,16.4v-1h.17a2.47,2.47,0,0,0,1.78-.81,8.5,8.5,0,0,0,1.75-3.27,10.92,10.92,0,0,1,1.44-2.8A4.54,4.54,0,0,1,14.9,6.85a5.53,5.53,0,0,1,1.47-.27h.15V8.63h-.17A2.82,2.82,0,0,0,15.14,9a4.27,4.27,0,0,0-1.4,1.72c-.12.25-.18.23.76.23h.83V13H12.79l-.14.31a13.45,13.45,0,0,1-1.19,2.12,4.48,4.48,0,0,1-3.31,1.9l-.48,0H7.48v-1Z"
                    })]
                }),
                T = () => (0, i.BX)("svg", {
                    id: "doc-docx-icon",
                    "data-name": "Warstwa 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("defs", {
                        children: (0, i.tZ)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "#doc-docx-icon .cls-1{fill:#163d75;}#doc-docx-icon .cls-2{fill:#2d4b8e;}#doc-docx-icon .cls-3{fill:#3666ad;}#doc-docx-icon .cls-4{fill:#fff;}#doc-docx-icon .cls-5{fill:#a0bde0;}"
                            }
                        })
                    }), (0, i.tZ)("path", {
                        className: "cls-1",
                        d: "M4.7,1A2.09,2.09,0,0,0,2.61,3.13V21.91A2.09,2.09,0,0,0,4.7,24H19.3a2.09,2.09,0,0,0,2.09-2.09V7.3L15.13,1Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-2",
                        d: "M4.7,0A2.09,2.09,0,0,0,2.61,2.09V20.87A2.09,2.09,0,0,0,4.7,23H19.3a2.09,2.09,0,0,0,2.09-2.09V6.26L15.13,0Z"
                    }), (0, i.tZ)("polygon", {
                        className: "cls-1",
                        points: "21.39 11.3 21.39 10.44 21.39 6.26 18.29 3.16 15.77 5.68 21.39 11.3"
                    }), (0, i.tZ)("path", {
                        className: "cls-3",
                        d: "M21.39,6.26,15.13,0V4.17a2.09,2.09,0,0,0,2.09,2.09Z"
                    }), (0, i.tZ)("path", {
                        className: "cls-4",
                        d: "M5.51,7.43h2.2l1.46,5.86h0l1.91-5.86H13l1.9,6h0l1.53-6h2l-2.68,9.14H14l-2-6.33h0l-2,6.33H8.23Z"
                    }), (0, i.tZ)("polygon", {
                        className: "cls-5",
                        points: "18.27 8.17 18.48 7.43 17.52 7.43 18.27 8.17"
                    })]
                }),
                D = () => (0, i.tZ)("svg", {
                    className: "circular loader-icon",
                    viewBox: "25 25 50 50",
                    "aria-hidden": !0,
                    children: (0, i.tZ)("circle", {
                        className: "path",
                        cx: 50,
                        cy: 50,
                        r: 20,
                        fill: "none",
                        stroke: "#fff",
                        strokeWidth: 2,
                        strokeMiterlimit: 10
                    })
                }),
                N = () => (0, i.BX)("svg", {
                    className: "alert-icon",
                    fill: "#000000",
                    height: 24,
                    viewBox: "0 0 24 24",
                    width: 24,
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                    })]
                }),
                U = () => (0, i.BX)("svg", {
                    className: "bots-icon",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    "aria-hidden": !0,
                    children: [(0, i.tZ)("path", {
                        fill: "none",
                        d: "M0,0h24v24H0V0z"
                    }), (0, i.tZ)("path", {
                        d: "M21.6,10.2l-0.1-1.4c0-2.1-1.6-3.7-3.7-3.8c0,0,0,0,0,0H6.3C4.3,5.1,2.6,6.7,2.6,8.8v1.4H2.4c-1.3,0-2.4,1.1-2.4,2.5v1.7c0,1.3,1.1,2.4,2.4,2.5h1.8v-8c0-1.1,0.9-2,2-2h11.5c1.1,0,2,0.9,2,2V19c0,1.1-0.9,2-2,2h-3.8c-0.3-0.8-1.1-1.2-1.9-1.2c-1.2,0-2.1,0.9-2.1,2.1C9.9,23,10.8,24,12,24c0.8,0,1.6-0.5,1.9-1.2h3.8c2.1,0,3.7-1.6,3.8-3.7c0,0,0,0,0,0v-2.4h0.1c1.3,0,2.4-1.1,2.4-2.4v-1.7C23.9,11.3,22.9,10.2,21.6,10.2z"
                    }), (0, i.tZ)("circle", {
                        cx: "18.2",
                        cy: "2",
                        r: "1.7"
                    }), (0, i.tZ)("circle", {
                        cx: "5.8",
                        cy: "2",
                        r: "1.7"
                    }), (0, i.tZ)("path", {
                        d: "M12.2,16.5l2,1.5l2-1.5l0.4-0.2c0.3-0.2,0.4-0.7,0.1-1c-0.2-0.3-0.7-0.4-1-0.1l0,0l-1.5,1.1l-2-1.5l-2,1.5l-1.5-1.1c-0.3-0.2-0.7-0.2-1,0.1c-0.2,0.3-0.2,0.7,0.1,1l2.3,1.7L12.2,16.5z"
                    }), (0, i.tZ)("circle", {
                        cx: "8.9",
                        cy: "11.4",
                        r: "1.7"
                    }), (0, i.tZ)("circle", {
                        cx: "15.1",
                        cy: "11.4",
                        r: "1.7"
                    })]
                }),
                _ = () => (0, i.BX)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        fill: "#3f88f6",
                        d: "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    })]
                }),
                L = () => (0, i.BX)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    children: [(0, i.tZ)("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }), (0, i.tZ)("path", {
                        d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
                    })]
                }),
                j = () => (0, i.tZ)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: (0, i.tZ)("path", {
                        d: "M7 10L12 15L17 10L7 10Z"
                    })
                }),
                O = () => (0, i.BX)("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.tZ)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "#53CF74"
                    }), (0, i.tZ)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "m16.45 9.01-1.19-.96a.2.2 0 0 0-.13-.05.2.2 0 0 0-.14.06l-4.32 5.67-1.75-1.72c-.05-.04-.1-.13-.2-.13s-.14.07-.2.12l-.93 1.02a.95.95 0 0 1-.05.04.22.22 0 0 0-.04.13c0 .05.02.09.04.13l.06.05 3.07 3.01c.05.06.1.12.2.12.08 0 .16-.1.2-.14l5.39-7.08a.22.22 0 0 0 .04-.13c0-.05-.02-.1-.05-.14Z",
                        fill: "#fff"
                    })]
                }),
                F = () => (0, i.tZ)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    children: (0, i.tZ)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12.5833 15.9166L1.74992 15.9166C0.833252 15.9166 0.083252 15.1666 0.083252 14.2499L0.083252 3.41659L1.74992 3.41659L1.74992 14.2499L12.5833 14.2499V15.9166ZM14.2499 12.5833L5.08325 12.5833C4.16659 12.5833 3.41659 11.8333 3.41659 10.9166L3.41659 1.74992C3.41659 0.833252 4.16659 0.083252 5.08325 0.083252L14.2499 0.083252C15.1666 0.083252 15.9166 0.833252 15.9166 1.74992L15.9166 10.9166C15.9166 11.8333 15.1666 12.5833 14.2499 12.5833ZM14.2499 1.74992L5.08325 1.74992L5.08325 10.9166L14.2499 10.9166L14.2499 1.74992Z",
                        fill: "#8796AF"
                    })
                }),
                W = () => (0, i.tZ)("svg", {
                    width: "54",
                    height: "54",
                    viewBox: "0 0 54 54",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.tZ)("path", {
                        d: "M26.9999 0.333341C12.2799 0.333342 0.333253 12.28 0.333254 27C0.333256 41.72 12.2799 53.6667 26.9999 53.6667C41.7199 53.6667 53.6666 41.72 53.6666 27C53.6666 12.28 41.7199 0.33334 26.9999 0.333341ZM26.9999 48.3333C15.2399 48.3333 5.66659 38.76 5.66659 27C5.66659 15.24 15.2399 5.66668 26.9999 5.66667C38.7599 5.66667 48.3333 15.24 48.3333 27C48.3333 38.76 38.7599 48.3333 26.9999 48.3333ZM39.2399 15.2133L21.6666 32.7867L14.7599 25.9067L10.9999 29.6667L21.6666 40.3333L42.9999 19L39.2399 15.2133Z",
                        fill: "#34B857"
                    })
                })
        },
        2597: function(e, t, n) {
            "use strict";
            n(1914);
            var i = n(7400),
                o = n(9243);
            t.Z = function(e) {
                return function(t) {
                    return (0, o.tZ)(i.Kr, {
                        children: n => {
                            let {
                                document: i,
                                window: a
                            } = n;
                            return (0, o.tZ)(e, { ...t,
                                iframeDocument: i,
                                iframeWindow: a
                            })
                        }
                    })
                }
            }
        },
        5717: function(e, t, n) {
            "use strict";
            n.d(t, {
                az: function() {
                    return l
                },
                iv: function() {
                    return A
                },
                xB: function() {
                    return d
                }
            });
            var i = n(2009),
                o = n(1914),
                a = n(5414),
                r = n(5308),
                s = n(679),
                l = (n(5796), n(7531), function(e, t) {
                    var n = arguments;
                    if (null == t || !i.h.call(t, "css")) return o.createElement.apply(void 0, n);
                    var a = n.length,
                        r = new Array(a);
                    r[0] = i.E, r[1] = (0, i.c)(e, t);
                    for (var s = 2; s < a; s++) r[s] = n[s];
                    return o.createElement.apply(null, r)
                }),
                d = (0, i.w)((function(e, t) {
                    var n = e.styles,
                        l = (0, s.O)([n], void 0, o.useContext(i.T));
                    if (!i.i) {
                        for (var d, A = l.name, c = l.styles, u = l.next; void 0 !== u;) A += " " + u.name, c += u.styles, u = u.next;
                        var p = !0 === t.compat,
                            f = t.insert("", {
                                name: A,
                                styles: c
                            }, t.sheet, p);
                        return p ? null : o.createElement("style", ((d = {})["data-emotion"] = t.key + "-global " + A, d.dangerouslySetInnerHTML = {
                            __html: f
                        }, d.nonce = t.sheet.nonce, d))
                    }
                    var h = o.useRef();
                    return (0, r.j)((function() {
                        var e = t.key + "-global",
                            n = new t.sheet.constructor({
                                key: e,
                                nonce: t.sheet.nonce,
                                container: t.sheet.container,
                                speedy: t.sheet.isSpeedy
                            }),
                            i = !1,
                            o = document.querySelector('style[data-emotion="' + e + " " + l.name + '"]');
                        return t.sheet.tags.length && (n.before = t.sheet.tags[0]), null !== o && (i = !0, o.setAttribute("data-emotion", e), n.hydrate([o])), h.current = [n, i],
                            function() {
                                n.flush()
                            }
                    }), [t]), (0, r.j)((function() {
                        var e = h.current,
                            n = e[0];
                        if (e[1]) e[1] = !1;
                        else {
                            if (void 0 !== l.next && (0, a.My)(t, l.next, !0), n.tags.length) {
                                var i = n.tags[n.tags.length - 1].nextElementSibling;
                                n.before = i, n.flush()
                            }
                            t.insert("", l, n, !1)
                        }
                    }), [t, l.name]), null
                }));

            function A() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, s.O)(t)
            }
        },
        4101: function(e, t) {
            "use strict";
            t.Z = function(e, t) {
                if (e && t) {
                    var n = Array.isArray(t) ? t : t.split(","),
                        i = e.name || "",
                        o = (e.type || "").toLowerCase(),
                        a = o.replace(/\/.*$/, "");
                    return n.some((function(e) {
                        var t = e.trim().toLowerCase();
                        return "." === t.charAt(0) ? i.toLowerCase().endsWith(t) : t.endsWith("/*") ? a === t.replace(/\/.*$/, "") : o === t
                    }))
                }
                return !0
            }
        },
        2856: function(e) {
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var n = "",
                            i = void 0 !== t[5];
                        return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), i && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), i && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
                    })).join("")
                }, t.i = function(e, n, i, o, a) {
                    "string" == typeof e && (e = [
                        [null, e, void 0]
                    ]);
                    var r = {};
                    if (i)
                        for (var s = 0; s < this.length; s++) {
                            var l = this[s][0];
                            null != l && (r[l] = !0)
                        }
                    for (var d = 0; d < e.length; d++) {
                        var A = [].concat(e[d]);
                        i && r[A[0]] || (void 0 !== a && (void 0 === A[5] || (A[1] = "@layer".concat(A[5].length > 0 ? " ".concat(A[5]) : "", " {").concat(A[1], "}")), A[5] = a), n && (A[2] ? (A[1] = "@media ".concat(A[2], " {").concat(A[1], "}"), A[2] = n) : A[2] = n), o && (A[4] ? (A[1] = "@supports (".concat(A[4], ") {").concat(A[1], "}"), A[4] = o) : A[4] = "".concat(o)), t.push(A))
                    }
                }, t
            }
        },
        6656: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e
            }
        },
        6105: function(e) {
            "use strict";
            e.exports = function(e) {
                var t = e[1],
                    n = e[3];
                if (!n) return t;
                if ("function" == typeof btoa) {
                    var i = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
                        o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),
                        a = "/*# ".concat(o, " */");
                    return [t].concat([a]).join("\n")
                }
                return [t].join("\n")
            }
        },
        9639: function(e, t) {
            var n;

            function i(e, t) {
                var n = [],
                    i = 0;

                function o(e) {
                    return n.push(e), t
                }

                function a() {
                    return n[i++]
                }
                return {
                    tokenize: function(t) {
                        return t.replace(e, o)
                    },
                    detokenize: function(e) {
                        return e.replace(new RegExp("(" + t + ")", "g"), a)
                    }
                }
            }
            n = new function() {
                var e = "`TMP`",
                    t = "[^\\u0020-\\u007e]",
                    n = "(?:[0-9]*\\.[0-9]+|[0-9]+)",
                    o = "direction\\s*:\\s*",
                    a = "['\"]?\\s*",
                    r = "(^|[^a-zA-Z])",
                    s = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/",
                    l = "(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",
                    d = "(?:[_a-z0-9-]|" + t + "|" + l + ")",
                    A = n + "(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|" + ("-?" + ("(?:[_a-z]|" + t + "|" + l + ")") + d + "*") + ")?",
                    c = "((?:-?" + A + ")|(?:inherit|auto))",
                    u = "(#?" + d + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",
                    p = "(?:[!#$%&*-~]|" + t + "|" + l + ")*?",
                    f = "(?![a-zA-Z])",
                    h = "(?!(" + d + "|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'])*?{)",
                    m = "(?!" + p + a + "\\))",
                    g = "(?=" + p + a + "\\))",
                    C = "(\\s*(?:!important\\s*)?[;}])",
                    b = new RegExp("`TMP`", "g"),
                    x = new RegExp("\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", "gi"),
                    v = new RegExp("(" + s + h + "[^;}]+;?)", "gi"),
                    w = new RegExp("(" + s + "[^\\}]*?})", "gi"),
                    y = new RegExp("(" + o + ")ltr", "gi"),
                    B = new RegExp("(" + o + ")rtl", "gi"),
                    I = new RegExp(r + "(left)" + f + m + h, "gi"),
                    k = new RegExp(r + "(right)" + f + m + h, "gi"),
                    E = new RegExp(r + "(left)" + g, "gi"),
                    S = new RegExp(r + "(right)" + g, "gi"),
                    M = new RegExp(r + "(ltr)" + g, "gi"),
                    Z = new RegExp(r + "(rtl)" + g, "gi"),
                    R = new RegExp(r + "([ns]?)e-resize", "gi"),
                    T = new RegExp(r + "([ns]?)w-resize", "gi"),
                    D = new RegExp("((?:margin|padding|border-width)\\s*:\\s*)" + c + "(\\s+)" + c + "(\\s+)" + c + "(\\s+)" + c + C, "gi"),
                    N = new RegExp("((?:-color|border-style)\\s*:\\s*)" + u + "(\\s+)" + u + "(\\s+)" + u + "(\\s+)" + u + C, "gi"),
                    U = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + A + ")", "gi"),
                    _ = new RegExp("(background-position-x\\s*:\\s*)(-?" + n + "%)", "gi"),
                    L = new RegExp("(border-radius\\s*:\\s*)" + c + "(?:(?:\\s+" + c + ")(?:\\s+" + c + ")?(?:\\s+" + c + ")?)?(?:(?:(?:\\s*\\/\\s*)" + c + ")(?:\\s+" + c + ")?(?:\\s+" + c + ")?(?:\\s+" + c + ")?)?" + C, "gi"),
                    j = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + c, "gi"),
                    O = new RegExp("(text-shadow\\s*:\\s*)" + c + "(\\s*)" + u, "gi"),
                    F = new RegExp("(text-shadow\\s*:\\s*)" + u + "(\\s*)" + c, "gi"),
                    W = new RegExp("(text-shadow\\s*:\\s*)" + c, "gi"),
                    z = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + c + "(\\s*\\))", "gi"),
                    P = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + c + "((?:\\s*,\\s*" + c + "){0,2}\\s*\\))", "gi");

                function H(e, t, n) {
                    var i, o;
                    return "%" === n.slice(-1) && (-1 !== (i = n.indexOf(".")) ? (o = n.length - i - 2, n = (n = 100 - parseFloat(n)).toFixed(o) + "%") : n = 100 - parseFloat(n) + "%"), t + n
                }

                function q(e) {
                    switch (e.length) {
                        case 4:
                            e = [e[1], e[0], e[3], e[2]];
                            break;
                        case 3:
                            e = [e[1], e[0], e[1], e[2]];
                            break;
                        case 2:
                            e = [e[1], e[0]];
                            break;
                        case 1:
                            e = [e[0]]
                    }
                    return e.join(" ")
                }

                function $(e, t) {
                    var n = [].slice.call(arguments),
                        i = n.slice(2, 6).filter((function(e) {
                            return e
                        })),
                        o = n.slice(6, 10).filter((function(e) {
                            return e
                        })),
                        a = n[10] || "";
                    return t + (o.length ? q(i) + " / " + q(o) : q(i)) + a
                }

                function Y(e) {
                    return 0 === parseFloat(e) ? e : "-" === e[0] ? e.slice(1) : "-" + e
                }

                function G(e, t, n) {
                    return t + Y(n)
                }

                function V(e, t, n, i, o) {
                    return t + n + Y(i) + o
                }

                function J(e, t, n, i, o) {
                    return t + n + i + Y(o)
                }
                return {
                    transform: function(t, n) {
                        var o = new i(v, "`NOFLIP_SINGLE`"),
                            a = new i(w, "`NOFLIP_CLASS`"),
                            r = new i(x, "`COMMENT`");
                        return t = r.tokenize(a.tokenize(o.tokenize(t.replace("`", "%60")))), n.transformDirInUrl && (t = t.replace(M, "$1" + e).replace(Z, "$1ltr").replace(b, "rtl")), n.transformEdgeInUrl && (t = t.replace(E, "$1" + e).replace(S, "$1left").replace(b, "right")), t = t.replace(y, "$1" + e).replace(B, "$1ltr").replace(b, "rtl").replace(I, "$1" + e).replace(k, "$1left").replace(b, "right").replace(R, "$1$2" + e).replace(T, "$1$2e-resize").replace(b, "w-resize").replace(L, $).replace(j, G).replace(O, J).replace(F, J).replace(W, G).replace(z, V).replace(P, V).replace(D, "$1$2$3$8$5$6$7$4$9").replace(N, "$1$2$3$8$5$6$7$4$9").replace(U, H).replace(_, H), t = o.detokenize(a.detokenize(r.detokenize(t)))
                    }
                }
            }, e.exports ? t.transform = function(e, t, i) {
                var o;
                return "object" == typeof t ? o = t : (o = {}, "boolean" == typeof t && (o.transformDirInUrl = t), "boolean" == typeof i && (o.transformEdgeInUrl = i)), n.transform(e, o)
            } : "undefined" != typeof window && (window.cssjanus = n)
        },
        7857: function(e) {
            e.exports = function() {
                "use strict";
                const {
                    entries: e,
                    setPrototypeOf: t,
                    isFrozen: n,
                    getPrototypeOf: i,
                    getOwnPropertyDescriptor: o
                } = Object;
                let {
                    freeze: a,
                    seal: r,
                    create: s
                } = Object, {
                    apply: l,
                    construct: d
                } = "undefined" != typeof Reflect && Reflect;
                l || (l = function(e, t, n) {
                    return e.apply(t, n)
                }), a || (a = function(e) {
                    return e
                }), r || (r = function(e) {
                    return e
                }), d || (d = function(e, t) {
                    return new e(...t)
                });
                const A = v(Array.prototype.forEach),
                    c = v(Array.prototype.pop),
                    u = v(Array.prototype.push),
                    p = v(String.prototype.toLowerCase),
                    f = v(String.prototype.toString),
                    h = v(String.prototype.match),
                    m = v(String.prototype.replace),
                    g = v(String.prototype.indexOf),
                    C = v(String.prototype.trim),
                    b = v(RegExp.prototype.test),
                    x = w(TypeError);

                function v(e) {
                    return function(t) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                        return l(e, t, i)
                    }
                }

                function w(e) {
                    return function() {
                        for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        return d(e, n)
                    }
                }

                function y(e, i, o) {
                    var a;
                    o = null !== (a = o) && void 0 !== a ? a : p, t && t(e, null);
                    let r = i.length;
                    for (; r--;) {
                        let t = i[r];
                        if ("string" == typeof t) {
                            const e = o(t);
                            e !== t && (n(i) || (i[r] = e), t = e)
                        }
                        e[t] = !0
                    }
                    return e
                }

                function B(t) {
                    const n = s(null);
                    for (const [i, o] of e(t)) n[i] = o;
                    return n
                }

                function I(e, t) {
                    for (; null !== e;) {
                        const n = o(e, t);
                        if (n) {
                            if (n.get) return v(n.get);
                            if ("function" == typeof n.value) return v(n.value)
                        }
                        e = i(e)
                    }

                    function n(e) {
                        return console.warn("fallback value for", e), null
                    }
                    return n
                }
                const k = a(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                    E = a(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                    S = a(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                    M = a(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                    Z = a(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
                    R = a(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                    T = a(["#text"]),
                    D = a(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
                    N = a(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                    U = a(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                    _ = a(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                    L = r(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
                    j = r(/<%[\w\W]*|[\w\W]*%>/gm),
                    O = r(/\${[\w\W]*}/gm),
                    F = r(/^data-[\-\w.\u00B7-\uFFFF]/),
                    W = r(/^aria-[\-\w]+$/),
                    z = r(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                    P = r(/^(?:\w+script|data):/i),
                    H = r(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                    q = r(/^html$/i);
                var $ = Object.freeze({
                    __proto__: null,
                    MUSTACHE_EXPR: L,
                    ERB_EXPR: j,
                    TMPLIT_EXPR: O,
                    DATA_ATTR: F,
                    ARIA_ATTR: W,
                    IS_ALLOWED_URI: z,
                    IS_SCRIPT_OR_DATA: P,
                    ATTR_WHITESPACE: H,
                    DOCTYPE_NAME: q
                });
                const Y = () => "undefined" == typeof window ? null : window,
                    G = function(e, t) {
                        if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
                        let n = null;
                        const i = "data-tt-policy-suffix";
                        t && t.hasAttribute(i) && (n = t.getAttribute(i));
                        const o = "dompurify" + (n ? "#" + n : "");
                        try {
                            return e.createPolicy(o, {
                                createHTML(e) {
                                    return e
                                },
                                createScriptURL(e) {
                                    return e
                                }
                            })
                        } catch (e) {
                            return console.warn("TrustedTypes policy " + o + " could not be created."), null
                        }
                    };

                function V() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y();
                    const n = e => V(e);
                    if (n.version = "3.0.5", n.removed = [], !t || !t.document || 9 !== t.document.nodeType) return n.isSupported = !1, n;
                    const i = t.document,
                        o = i.currentScript;
                    let {
                        document: r
                    } = t;
                    const {
                        DocumentFragment: s,
                        HTMLTemplateElement: l,
                        Node: d,
                        Element: v,
                        NodeFilter: w,
                        NamedNodeMap: L = t.NamedNodeMap || t.MozNamedAttrMap,
                        HTMLFormElement: j,
                        DOMParser: O,
                        trustedTypes: F
                    } = t, W = v.prototype, P = I(W, "cloneNode"), H = I(W, "nextSibling"), J = I(W, "childNodes"), X = I(W, "parentNode");
                    if ("function" == typeof l) {
                        const e = r.createElement("template");
                        e.content && e.content.ownerDocument && (r = e.content.ownerDocument)
                    }
                    let Q, K = "";
                    const {
                        implementation: ee,
                        createNodeIterator: te,
                        createDocumentFragment: ne,
                        getElementsByTagName: ie
                    } = r, {
                        importNode: oe
                    } = i;
                    let ae = {};
                    n.isSupported = "function" == typeof e && "function" == typeof X && ee && void 0 !== ee.createHTMLDocument;
                    const {
                        MUSTACHE_EXPR: re,
                        ERB_EXPR: se,
                        TMPLIT_EXPR: le,
                        DATA_ATTR: de,
                        ARIA_ATTR: Ae,
                        IS_SCRIPT_OR_DATA: ce,
                        ATTR_WHITESPACE: ue
                    } = $;
                    let {
                        IS_ALLOWED_URI: pe
                    } = $, fe = null;
                    const he = y({}, [...k, ...E, ...S, ...Z, ...T]);
                    let me = null;
                    const ge = y({}, [...D, ...N, ...U, ..._]);
                    let Ce = Object.seal(Object.create(null, {
                            tagNameCheck: {
                                writable: !0,
                                configurable: !1,
                                enumerable: !0,
                                value: null
                            },
                            attributeNameCheck: {
                                writable: !0,
                                configurable: !1,
                                enumerable: !0,
                                value: null
                            },
                            allowCustomizedBuiltInElements: {
                                writable: !0,
                                configurable: !1,
                                enumerable: !0,
                                value: !1
                            }
                        })),
                        be = null,
                        xe = null,
                        ve = !0,
                        we = !0,
                        ye = !1,
                        Be = !0,
                        Ie = !1,
                        ke = !1,
                        Ee = !1,
                        Se = !1,
                        Me = !1,
                        Ze = !1,
                        Re = !1,
                        Te = !0,
                        De = !1;
                    const Ne = "user-content-";
                    let Ue = !0,
                        _e = !1,
                        Le = {},
                        je = null;
                    const Oe = y({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
                    let Fe = null;
                    const We = y({}, ["audio", "video", "img", "source", "image", "track"]);
                    let ze = null;
                    const Pe = y({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                        He = "http://www.w3.org/1998/Math/MathML",
                        qe = "http://www.w3.org/2000/svg",
                        $e = "http://www.w3.org/1999/xhtml";
                    let Ye = $e,
                        Ge = !1,
                        Ve = null;
                    const Je = y({}, [He, qe, $e], f);
                    let Xe;
                    const Qe = ["application/xhtml+xml", "text/html"],
                        Ke = "text/html";
                    let et, tt = null;
                    const nt = r.createElement("form"),
                        it = function(e) {
                            return e instanceof RegExp || e instanceof Function
                        },
                        ot = function(e) {
                            if (!tt || tt !== e) {
                                if (e && "object" == typeof e || (e = {}), e = B(e), Xe = Xe = -1 === Qe.indexOf(e.PARSER_MEDIA_TYPE) ? Ke : e.PARSER_MEDIA_TYPE, et = "application/xhtml+xml" === Xe ? f : p, fe = "ALLOWED_TAGS" in e ? y({}, e.ALLOWED_TAGS, et) : he, me = "ALLOWED_ATTR" in e ? y({}, e.ALLOWED_ATTR, et) : ge, Ve = "ALLOWED_NAMESPACES" in e ? y({}, e.ALLOWED_NAMESPACES, f) : Je, ze = "ADD_URI_SAFE_ATTR" in e ? y(B(Pe), e.ADD_URI_SAFE_ATTR, et) : Pe, Fe = "ADD_DATA_URI_TAGS" in e ? y(B(We), e.ADD_DATA_URI_TAGS, et) : We, je = "FORBID_CONTENTS" in e ? y({}, e.FORBID_CONTENTS, et) : Oe, be = "FORBID_TAGS" in e ? y({}, e.FORBID_TAGS, et) : {}, xe = "FORBID_ATTR" in e ? y({}, e.FORBID_ATTR, et) : {}, Le = "USE_PROFILES" in e && e.USE_PROFILES, ve = !1 !== e.ALLOW_ARIA_ATTR, we = !1 !== e.ALLOW_DATA_ATTR, ye = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Be = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, Ie = e.SAFE_FOR_TEMPLATES || !1, ke = e.WHOLE_DOCUMENT || !1, Me = e.RETURN_DOM || !1, Ze = e.RETURN_DOM_FRAGMENT || !1, Re = e.RETURN_TRUSTED_TYPE || !1, Se = e.FORCE_BODY || !1, Te = !1 !== e.SANITIZE_DOM, De = e.SANITIZE_NAMED_PROPS || !1, Ue = !1 !== e.KEEP_CONTENT, _e = e.IN_PLACE || !1, pe = e.ALLOWED_URI_REGEXP || z, Ye = e.NAMESPACE || $e, Ce = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && it(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ce.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && it(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ce.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Ce.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ie && (we = !1), Ze && (Me = !0), Le && (fe = y({}, [...T]), me = [], !0 === Le.html && (y(fe, k), y(me, D)), !0 === Le.svg && (y(fe, E), y(me, N), y(me, _)), !0 === Le.svgFilters && (y(fe, S), y(me, N), y(me, _)), !0 === Le.mathMl && (y(fe, Z), y(me, U), y(me, _))), e.ADD_TAGS && (fe === he && (fe = B(fe)), y(fe, e.ADD_TAGS, et)), e.ADD_ATTR && (me === ge && (me = B(me)), y(me, e.ADD_ATTR, et)), e.ADD_URI_SAFE_ATTR && y(ze, e.ADD_URI_SAFE_ATTR, et), e.FORBID_CONTENTS && (je === Oe && (je = B(je)), y(je, e.FORBID_CONTENTS, et)), Ue && (fe["#text"] = !0), ke && y(fe, ["html", "head", "body"]), fe.table && (y(fe, ["tbody"]), delete be.tbody), e.TRUSTED_TYPES_POLICY) {
                                    if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML) throw x('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                                    if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL) throw x('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                                    Q = e.TRUSTED_TYPES_POLICY, K = Q.createHTML("")
                                } else void 0 === Q && (Q = G(F, o)), null !== Q && "string" == typeof K && (K = Q.createHTML(""));
                                a && a(e), tt = e
                            }
                        },
                        at = y({}, ["mi", "mo", "mn", "ms", "mtext"]),
                        rt = y({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                        st = y({}, ["title", "style", "font", "a", "script"]),
                        lt = y({}, E);
                    y(lt, S), y(lt, M);
                    const dt = y({}, Z);
                    y(dt, R);
                    const At = function(e) {
                            let t = X(e);
                            t && t.tagName || (t = {
                                namespaceURI: Ye,
                                tagName: "template"
                            });
                            const n = p(e.tagName),
                                i = p(t.tagName);
                            return !!Ve[e.namespaceURI] && (e.namespaceURI === qe ? t.namespaceURI === $e ? "svg" === n : t.namespaceURI === He ? "svg" === n && ("annotation-xml" === i || at[i]) : Boolean(lt[n]) : e.namespaceURI === He ? t.namespaceURI === $e ? "math" === n : t.namespaceURI === qe ? "math" === n && rt[i] : Boolean(dt[n]) : e.namespaceURI === $e ? !(t.namespaceURI === qe && !rt[i]) && !(t.namespaceURI === He && !at[i]) && !dt[n] && (st[n] || !lt[n]) : !("application/xhtml+xml" !== Xe || !Ve[e.namespaceURI]))
                        },
                        ct = function(e) {
                            u(n.removed, {
                                element: e
                            });
                            try {
                                e.parentNode.removeChild(e)
                            } catch (t) {
                                e.remove()
                            }
                        },
                        ut = function(e, t) {
                            try {
                                u(n.removed, {
                                    attribute: t.getAttributeNode(e),
                                    from: t
                                })
                            } catch (e) {
                                u(n.removed, {
                                    attribute: null,
                                    from: t
                                })
                            }
                            if (t.removeAttribute(e), "is" === e && !me[e])
                                if (Me || Ze) try {
                                    ct(t)
                                } catch (e) {} else try {
                                    t.setAttribute(e, "")
                                } catch (e) {}
                        },
                        pt = function(e) {
                            let t, n;
                            if (Se) e = "<remove></remove>" + e;
                            else {
                                const t = h(e, /^[\r\n\t ]+/);
                                n = t && t[0]
                            }
                            "application/xhtml+xml" === Xe && Ye === $e && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                            const i = Q ? Q.createHTML(e) : e;
                            if (Ye === $e) try {
                                t = (new O).parseFromString(i, Xe)
                            } catch (e) {}
                            if (!t || !t.documentElement) {
                                t = ee.createDocument(Ye, "template", null);
                                try {
                                    t.documentElement.innerHTML = Ge ? K : i
                                } catch (e) {}
                            }
                            const o = t.body || t.documentElement;
                            return e && n && o.insertBefore(r.createTextNode(n), o.childNodes[0] || null), Ye === $e ? ie.call(t, ke ? "html" : "body")[0] : ke ? t.documentElement : o
                        },
                        ft = function(e) {
                            return te.call(e.ownerDocument || e, e, w.SHOW_ELEMENT | w.SHOW_COMMENT | w.SHOW_TEXT, null, !1)
                        },
                        ht = function(e) {
                            return e instanceof j && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof L) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
                        },
                        mt = function(e) {
                            return "object" == typeof d ? e instanceof d : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
                        },
                        gt = function(e, t, i) {
                            ae[e] && A(ae[e], (e => {
                                e.call(n, t, i, tt)
                            }))
                        },
                        Ct = function(e) {
                            let t;
                            if (gt("beforeSanitizeElements", e, null), ht(e)) return ct(e), !0;
                            const i = et(e.nodeName);
                            if (gt("uponSanitizeElement", e, {
                                    tagName: i,
                                    allowedTags: fe
                                }), e.hasChildNodes() && !mt(e.firstElementChild) && (!mt(e.content) || !mt(e.content.firstElementChild)) && b(/<[/\w]/g, e.innerHTML) && b(/<[/\w]/g, e.textContent)) return ct(e), !0;
                            if (!fe[i] || be[i]) {
                                if (!be[i] && xt(i)) {
                                    if (Ce.tagNameCheck instanceof RegExp && b(Ce.tagNameCheck, i)) return !1;
                                    if (Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(i)) return !1
                                }
                                if (Ue && !je[i]) {
                                    const t = X(e) || e.parentNode,
                                        n = J(e) || e.childNodes;
                                    if (n && t)
                                        for (let i = n.length - 1; i >= 0; --i) t.insertBefore(P(n[i], !0), H(e))
                                }
                                return ct(e), !0
                            }
                            return e instanceof v && !At(e) ? (ct(e), !0) : "noscript" !== i && "noembed" !== i && "noframes" !== i || !b(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Ie && 3 === e.nodeType && (t = e.textContent, t = m(t, re, " "), t = m(t, se, " "), t = m(t, le, " "), e.textContent !== t && (u(n.removed, {
                                element: e.cloneNode()
                            }), e.textContent = t)), gt("afterSanitizeElements", e, null), !1) : (ct(e), !0)
                        },
                        bt = function(e, t, n) {
                            if (Te && ("id" === t || "name" === t) && (n in r || n in nt)) return !1;
                            if (we && !xe[t] && b(de, t));
                            else if (ve && b(Ae, t));
                            else if (!me[t] || xe[t]) {
                                if (!(xt(e) && (Ce.tagNameCheck instanceof RegExp && b(Ce.tagNameCheck, e) || Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(e)) && (Ce.attributeNameCheck instanceof RegExp && b(Ce.attributeNameCheck, t) || Ce.attributeNameCheck instanceof Function && Ce.attributeNameCheck(t)) || "is" === t && Ce.allowCustomizedBuiltInElements && (Ce.tagNameCheck instanceof RegExp && b(Ce.tagNameCheck, n) || Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(n)))) return !1
                            } else if (ze[t]);
                            else if (b(pe, m(n, ue, "")));
                            else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== g(n, "data:") || !Fe[e])
                                if (ye && !b(ce, m(n, ue, "")));
                                else if (n) return !1;
                            return !0
                        },
                        xt = function(e) {
                            return e.indexOf("-") > 0
                        },
                        vt = function(e) {
                            let t, i, o, a;
                            gt("beforeSanitizeAttributes", e, null);
                            const {
                                attributes: r
                            } = e;
                            if (!r) return;
                            const s = {
                                attrName: "",
                                attrValue: "",
                                keepAttr: !0,
                                allowedAttributes: me
                            };
                            for (a = r.length; a--;) {
                                t = r[a];
                                const {
                                    name: l,
                                    namespaceURI: d
                                } = t;
                                if (i = "value" === l ? t.value : C(t.value), o = et(l), s.attrName = o, s.attrValue = i, s.keepAttr = !0, s.forceKeepAttr = void 0, gt("uponSanitizeAttribute", e, s), i = s.attrValue, s.forceKeepAttr) continue;
                                if (ut(l, e), !s.keepAttr) continue;
                                if (!Be && b(/\/>/i, i)) {
                                    ut(l, e);
                                    continue
                                }
                                Ie && (i = m(i, re, " "), i = m(i, se, " "), i = m(i, le, " "));
                                const A = et(e.nodeName);
                                if (bt(A, o, i)) {
                                    if (!De || "id" !== o && "name" !== o || (ut(l, e), i = Ne + i), Q && "object" == typeof F && "function" == typeof F.getAttributeType)
                                        if (d);
                                        else switch (F.getAttributeType(A, o)) {
                                            case "TrustedHTML":
                                                i = Q.createHTML(i);
                                                break;
                                            case "TrustedScriptURL":
                                                i = Q.createScriptURL(i)
                                        }
                                    try {
                                        d ? e.setAttributeNS(d, l, i) : e.setAttribute(l, i), c(n.removed)
                                    } catch (e) {}
                                }
                            }
                            gt("afterSanitizeAttributes", e, null)
                        },
                        wt = function e(t) {
                            let n;
                            const i = ft(t);
                            for (gt("beforeSanitizeShadowDOM", t, null); n = i.nextNode();) gt("uponSanitizeShadowNode", n, null), Ct(n) || (n.content instanceof s && e(n.content), vt(n));
                            gt("afterSanitizeShadowDOM", t, null)
                        };
                    return n.sanitize = function(e) {
                        let t, o, a, r, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (Ge = !e, Ge && (e = "\x3c!--\x3e"), "string" != typeof e && !mt(e)) {
                            if ("function" != typeof e.toString) throw x("toString is not a function");
                            if ("string" != typeof(e = e.toString())) throw x("dirty is not a string, aborting")
                        }
                        if (!n.isSupported) return e;
                        if (Ee || ot(l), n.removed = [], "string" == typeof e && (_e = !1), _e) {
                            if (e.nodeName) {
                                const t = et(e.nodeName);
                                if (!fe[t] || be[t]) throw x("root node is forbidden and cannot be sanitized in-place")
                            }
                        } else if (e instanceof d) t = pt("\x3c!----\x3e"), o = t.ownerDocument.importNode(e, !0), 1 === o.nodeType && "BODY" === o.nodeName || "HTML" === o.nodeName ? t = o : t.appendChild(o);
                        else {
                            if (!Me && !Ie && !ke && -1 === e.indexOf("<")) return Q && Re ? Q.createHTML(e) : e;
                            if (t = pt(e), !t) return Me ? null : Re ? K : ""
                        }
                        t && Se && ct(t.firstChild);
                        const A = ft(_e ? e : t);
                        for (; a = A.nextNode();) Ct(a) || (a.content instanceof s && wt(a.content), vt(a));
                        if (_e) return e;
                        if (Me) {
                            if (Ze)
                                for (r = ne.call(t.ownerDocument); t.firstChild;) r.appendChild(t.firstChild);
                            else r = t;
                            return (me.shadowroot || me.shadowrootmode) && (r = oe.call(i, r, !0)), r
                        }
                        let c = ke ? t.outerHTML : t.innerHTML;
                        return ke && fe["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && b(q, t.ownerDocument.doctype.name) && (c = "<!DOCTYPE " + t.ownerDocument.doctype.name + ">\n" + c), Ie && (c = m(c, re, " "), c = m(c, se, " "), c = m(c, le, " ")), Q && Re ? Q.createHTML(c) : c
                    }, n.setConfig = function(e) {
                        ot(e), Ee = !0
                    }, n.clearConfig = function() {
                        tt = null, Ee = !1
                    }, n.isValidAttribute = function(e, t, n) {
                        tt || ot({});
                        const i = et(e),
                            o = et(t);
                        return bt(i, o, n)
                    }, n.addHook = function(e, t) {
                        "function" == typeof t && (ae[e] = ae[e] || [], u(ae[e], t))
                    }, n.removeHook = function(e) {
                        if (ae[e]) return c(ae[e])
                    }, n.removeHooks = function(e) {
                        ae[e] && (ae[e] = [])
                    }, n.removeAllHooks = function() {
                        ae = {}
                    }, n
                }
                return V()
            }()
        },
        860: function(e) {
            ! function() {
                function t(e) {
                    this.document = e || window.document
                }

                function n(e, t) {
                    this.a = t, this.b = this.a.createElement("div"), this.b.setAttribute("aria-hidden", "true"), this.a.append(this.b, this.a.document.createTextNode(e)), this.c = this.a.createElement("span"), this.f = this.a.createElement("span"), this.i = this.a.createElement("span"), this.g = this.a.createElement("span"), this.h = -1, this.a.style(this.c, "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"), this.a.style(this.f, "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"), this.a.style(this.g, "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"), this.a.style(this.i, "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"), this.a.append(this.c, this.i), this.a.append(this.f, this.g), this.a.append(this.b, this.c), this.a.append(this.b, this.f)
                }

                function i(e, t) {
                    e.a.style(e.b, "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + t + ";")
                }

                function o(e) {
                    var t = e.b.offsetWidth,
                        n = t + 100;
                    return e.g.style.width = n + "px", e.f.scrollLeft = n, e.c.scrollLeft = e.c.scrollWidth + 100, e.h !== t && (e.h = t, !0)
                }

                function a(e, t) {
                    function n() {
                        var e = i;
                        o(e) && null !== e.b.parentNode && t(e.h)
                    }
                    var i = e;
                    e.a.addListener(e.c, "scroll", n), e.a.addListener(e.f, "scroll", n), o(e)
                }

                function r(e, n) {
                    var i = n || {};
                    this.document = i.document || window.document, this.a = new t(this.document), this.family = e, this.style = i.style || "normal", this.weight = i.weight || "normal", this.stretch = i.stretch || "normal"
                }
                t.prototype.createElement = function(e) {
                    return this.document.createElement(e)
                }, t.prototype.style = function(e, t) {
                    e.style.cssText = t
                }, t.prototype.append = function(e, t) {
                    e.appendChild(t)
                }, t.prototype.addListener = function(e, t, n) {
                    this.document.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent(t, n)
                };
                var s = null,
                    l = null,
                    d = null,
                    A = null;

                function c() {
                    return null === A && (A = !!document.fonts), A
                }

                function u(e) {
                    if (null === d) {
                        e = e.a.createElement("div");
                        try {
                            e.style.font = "condensed 100px sans-serif"
                        } catch (e) {}
                        d = "" !== e.style.font
                    }
                    return d
                }

                function p(e, t) {
                    return [e.style, e.weight, u(e) ? e.stretch : "", "100px", t].join(" ")
                }
                r.prototype.load = function(e, t) {
                    var o = this,
                        r = e || "BESbswy",
                        d = 0,
                        A = t || 3e3,
                        u = (new Date).getTime();
                    return new Promise((function(e, t) {
                        if (c() && ! function() {
                                if (null === l)
                                    if (c() && /Apple/.test(window.navigator.vendor)) {
                                        var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                                        l = !!e && 603 > parseInt(e[1], 10)
                                    } else l = !1;
                                return l
                            }()) {
                            var f = new Promise((function(e, t) {
                                    ! function n() {
                                        (new Date).getTime() - u >= A ? t() : o.document.fonts.load(p(o, '"' + o.family + '"'), r).then((function(t) {
                                            1 <= t.length ? e() : setTimeout(n, 25)
                                        }), (function() {
                                            t()
                                        }))
                                    }()
                                })),
                                h = new Promise((function(e, t) {
                                    d = setTimeout(t, A)
                                }));
                            Promise.race([h, f]).then((function() {
                                clearTimeout(d), e(o)
                            }), (function() {
                                t(o)
                            }))
                        } else ! function(e, t) {
                            e.document.body ? t() : e.document.addEventListener ? e.document.addEventListener("DOMContentLoaded", (function e() {
                                this.document.removeEventListener("DOMContentLoaded", e), t()
                            })) : e.document.attachEvent("onreadystatechange", (function e() {
                                "interactive" != this.document.readyState && "complete" != this.document.readyState || (this.document.detachEvent("onreadystatechange", e), t())
                            }))
                        }(o.a, (function() {
                            function l() {
                                var t;
                                (t = -1 != m && -1 != g || -1 != m && -1 != C || -1 != g && -1 != C) && ((t = m != g && m != C && g != C) || (null === s && (t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), s = !!t && (536 > parseInt(t[1], 10) || 536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10))), t = s && (m == b && g == b && C == b || m == x && g == x && C == x || m == v && g == v && C == v)), t = !t), t && (w.parentNode && w.parentNode.removeChild(w), clearTimeout(d), e(o))
                            }
                            var c = new n(r, o.a),
                                f = new n(r, o.a),
                                h = new n(r, o.a),
                                m = -1,
                                g = -1,
                                C = -1,
                                b = -1,
                                x = -1,
                                v = -1,
                                w = o.a.createElement("div");
                            w.dir = "ltr", i(c, p(o, "sans-serif")), i(f, p(o, "serif")), i(h, p(o, "monospace")), o.a.append(w, c.b), o.a.append(w, f.b), o.a.append(w, h.b), o.a.append(o.document.body, w), b = c.b.offsetWidth, x = f.b.offsetWidth, v = h.b.offsetWidth,
                                function e() {
                                    if ((new Date).getTime() - u >= A) w.parentNode && w.parentNode.removeChild(w), t(o);
                                    else {
                                        var n = o.document.hidden;
                                        !0 !== n && void 0 !== n || (m = c.b.offsetWidth, g = f.b.offsetWidth, C = h.b.offsetWidth, l()), d = setTimeout(e, 50)
                                    }
                                }(), a(c, (function(e) {
                                    m = e, l()
                                })), i(c, p(o, '"' + o.family + '",sans-serif')), a(f, (function(e) {
                                    g = e, l()
                                })), i(f, p(o, '"' + o.family + '",serif')), a(h, (function(e) {
                                    C = e, l()
                                })), i(h, p(o, '"' + o.family + '",monospace'))
                        }))
                    }))
                }, e.exports = r
            }()
        },
        1147: function(e, t, n) {
            "use strict";
            var i = n(9738);

            function o() {}

            function a() {}
            a.resetWarningCache = o, e.exports = function() {
                function e(e, t, n, o, a, r) {
                    if (r !== i) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: a,
                    resetWarningCache: o
                };
                return n.PropTypes = n, n
            }
        },
        2972: function(e, t, n) {
            e.exports = n(1147)()
        },
        9738: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        9207: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                o = n(1914),
                a = (r(o), r(n(2972)));

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                function t() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), i(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.contentDidMount()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.props.contentDidUpdate()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return o.Children.only(this.props.children)
                    }
                }]), t
            }(o.Component);
            s.propTypes = {
                children: a.default.element.isRequired,
                contentDidMount: a.default.func.isRequired,
                contentDidUpdate: a.default.func.isRequired
            }, t.default = s
        },
        9943: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FrameContextConsumer = t.FrameContextProvider = t.FrameContext = void 0;
            var i, o = n(1914),
                a = (i = o) && i.__esModule ? i : {
                    default: i
                };
            var r = void 0,
                s = void 0;
            "undefined" != typeof document && (r = document), "undefined" != typeof window && (s = window);
            var l = t.FrameContext = a.default.createContext({
                    document: r,
                    window: s
                }),
                d = l.Provider,
                A = l.Consumer;
            t.FrameContextProvider = d, t.FrameContextConsumer = A
        },
        3927: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                a = n(1914),
                r = c(a),
                s = c(n(579)),
                l = c(n(2972)),
                d = n(9943),
                A = c(n(9207));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = function(e) {
                function t(e, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var i = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                    return i.handleLoad = function() {
                        i.forceUpdate()
                    }, i._isMounted = !1, i
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), o(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this._isMounted = !0;
                        var e = this.getDoc();
                        e && "complete" === e.readyState ? this.forceUpdate() : this.node.addEventListener("load", this.handleLoad)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._isMounted = !1, this.node.removeEventListener("load", this.handleLoad)
                    }
                }, {
                    key: "getDoc",
                    value: function() {
                        return this.node ? this.node.contentDocument : null
                    }
                }, {
                    key: "getMountTarget",
                    value: function() {
                        var e = this.getDoc();
                        return this.props.mountTarget ? e.querySelector(this.props.mountTarget) : e.body.children[0]
                    }
                }, {
                    key: "renderFrameContents",
                    value: function() {
                        if (!this._isMounted) return null;
                        var e = this.getDoc();
                        if (!e || !e.body) return null;
                        var t = this.props.contentDidMount,
                            n = this.props.contentDidUpdate,
                            i = e.defaultView || e.parentView,
                            o = r.default.createElement(A.default, {
                                contentDidMount: t,
                                contentDidUpdate: n
                            }, r.default.createElement(d.FrameContextProvider, {
                                value: {
                                    document: e,
                                    window: i
                                }
                            }, r.default.createElement("div", {
                                className: "frame-content"
                            }, this.props.children)));
                        e && e.body && e.body.children && e.body.children.length < 1 && (e.getElementsByTagName("html")[0].innerHTML = this.props.initialContent);
                        var a = this.getMountTarget();
                        return [s.default.createPortal(this.props.head, this.getDoc().head), s.default.createPortal(o, a)]
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = i({}, this.props, {
                                children: void 0
                            });
                        return delete t.head, delete t.initialContent, delete t.mountTarget, delete t.contentDidMount, delete t.contentDidUpdate, r.default.createElement("iframe", i({}, t, {
                            ref: function(t) {
                                e.node = t
                            }
                        }), this.renderFrameContents())
                    }
                }]), t
            }(a.Component);
            u.propTypes = {
                style: l.default.object,
                head: l.default.node,
                initialContent: l.default.string,
                mountTarget: l.default.string,
                contentDidMount: l.default.func,
                contentDidUpdate: l.default.func,
                children: l.default.oneOfType([l.default.element, l.default.arrayOf(l.default.element)])
            }, u.defaultProps = {
                style: {},
                head: null,
                children: void 0,
                mountTarget: void 0,
                contentDidMount: function() {},
                contentDidUpdate: function() {},
                initialContent: '<html><head></head><body><div class="frame-root"></div></body>'
            }, t.default = u
        },
        7400: function(e, t, n) {
            "use strict";
            t.Kr = void 0;
            var i = n(9943);
            Object.defineProperty(t, "Kr", {
                enumerable: !0,
                get: function() {
                    return i.FrameContextConsumer
                }
            });
            var o, a = n(3927),
                r = (o = a) && o.__esModule ? o : {
                    default: o
                };
            t.ZP = r.default
        },
        565: function(e, t, n) {
            "use strict";
            var i, o = n(9639),
                a = (i = o) && i.__esModule ? i : {
                    default: i
                };
            var r = -1;

            function s(e, t) {
                if (e === r) return a.default.transform(t)
            }
            Object.defineProperty(s, "name", {
                value: "stylisRTLPlugin"
            }), t.ZP = s
        },
        5534: function(e, t, n) {
            "use strict";
            var i = n(6105),
                o = n.n(i),
                a = n(2856),
                r = n.n(a),
                s = n(5760),
                l = n(6656),
                d = n.n(l),
                A = new URL(n(5480), n.b),
                c = new URL(n(1076), n.b),
                u = r()(o());
            u.i(s.Z);
            var p = d()(A),
                f = d()(c);
            u.push([e.id, '.chat,.start-group{width:372px;position:absolute;bottom:26px;border-radius:16px;pointer-events:auto;box-shadow:0 8px 22px 0 rgba(0,18,46,.16);overflow:hidden;z-index:1;right:48px;left:auto}.chat.chrome,.start-group.chrome{box-shadow:0 8px 36px 0 rgba(0,18,46,.16)}.chat.safari,.start-group.safari{box-shadow:0 8px 30px 0 rgba(0,18,46,.16)}.chat-on-site .chat,.chat-on-site .start-group{box-shadow:0 8px 26px 0 rgba(0,18,46,.16)}.chat-in-preview .chat,.chat-in-preview .start-group{box-shadow:0 8px 18px 0 rgba(0,18,46,.16)}textarea{border:0;width:100%;font-size:17px;padding:20px 0 14px 0;resize:none;line-height:24px;overflow-x:hidden;-ms-overflow-style:none}@keyframes shake{10%,90%{transform:translateX(1px)}20%,80%{transform:translateX(-1px)}30%,50%,70%{transform:translateX(2px)}40%,60%{transform:translateX(-2px)}}button,button.material-icons{background:none;border:0;color:inherit;font:inherit;line-height:normal;overflow:visible;padding:0;user-select:none;outline:none;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0)}button.material-icons::-moz-focus-inner{border:0;padding:0}button.link{border-bottom:1px solid #444}body{overflow:hidden;margin:0}svg{fill:#fff;transition:all .2s ease-in-out}#button{position:absolute;width:112px;height:140px;bottom:12px;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:1;/*! @noflip */right:0}#button:not(.sidebar) .buttonWave{position:absolute;z-index:-1;width:60px;height:60px}#button:not(.sidebar) .buttonWave:after{content:"";position:absolute;width:60px;height:60px;border-radius:50%;background-color:#147fff;opacity:.5}#button:not(.sidebar).clicked .buttonWave:after{animation:buttonWave .5s ease-out}#button.chat-open:not(.sidebar){right:0;left:auto}#button button.disabled i.type1 svg{fill:#fff}#button button i{height:26px;width:26px;position:absolute;opacity:0;transition:all .2s ease-in-out;display:flex;align-items:center;justify-content:center}#button button i.active{opacity:1}#button button i.type1 svg{fill:currentColor}#button button i.type1::after{content:"";position:absolute;width:68px;height:68px;border-radius:32px;background:#fff;transition:all .2s ease-in-out;transform:scale(0)}#button button i.type1.for-opened{width:31px;height:28px}#button button i.type1.for-opened svg{width:28px;height:28px;/*! @noflip */margin-left:3px}#button button i.type2{width:32px;height:32px}#button button i.type2 svg{width:32px;height:32px;fill:currentColor;transform:scale(0)}#button button i.for-closed{/*! @noflip */transform:translateX(-10px)}#button button i.for-closed.active{/*! @noflip */transform:translateX(0)}#button button i.for-opened{/*! @noflip */transform:translateX(10px)}#button button i.for-opened.active{/*! @noflip */transform:translateX(0)}body:not(.mobile) #button button:not(.disabled):hover i.type1 svg,body:not(.mobile) #button button:not(.disabled):focus i.type1 svg{transform:scale(1.4)}body:not(.mobile) #button button:not(.disabled):hover i.type1::after,body:not(.mobile) #button button:not(.disabled):focus i.type1::after{transform:scale(1)}body:not(.mobile) #button button:not(.disabled):hover i.type2 svg,body:not(.mobile) #button button:not(.disabled):focus i.type2 svg{transform:scale(1)}body:not(.mobile) #button .sidebar-content:hover~#button-body{transform:scale(1.15)}body:not(.mobile) #button .sidebar-content:hover~button i.type1 svg{transform:scale(1.4)}body:not(.mobile) #button .sidebar-content:hover~button i.type1::after{transform:scale(1)}body:not(.mobile) #button .sidebar-content:hover~button i.type2 svg{transform:scale(1)}#button.sidebar{width:50px;pointer-events:auto}#button.sidebar svg{width:15px;height:15px}.sidebar-position-left #button.sidebar{/*! @noflip */left:0;/*! @noflip */right:auto}.sidebar-position-left #button.sidebar .sidebar-content{/*! @noflip */transform-origin:left top;/*! @noflip */transform:rotate(270deg);/*! @noflip */left:0;/*! @noflip */right:auto;/*! @noflip */border-bottom-right-radius:4px;/*! @noflip */border-bottom-left-radius:28px;/*! @noflip */padding:0 20px 0 30px}.sidebar-position-left #button.sidebar #button-body{/*! @noflip */left:7px}#button.sidebar .sidebar-content{background:#313fa0;color:#fff;/*! @noflip */padding:0 30px 0 20px;font-size:14px;line-height:30px;height:30px;font-weight:700;position:relative;overflow:hidden;/*! @noflip */border-bottom-right-radius:28px;/*! @noflip */border-bottom-left-radius:4px;/*! @noflip */transform:rotate(90deg);/*! @noflip */transform-origin:right top;position:absolute;bottom:0;/*! @noflip */right:0;white-space:nowrap;max-width:400px}#button.sidebar .sidebar-content span{display:inline-block;transform:rotate(180deg);max-width:265px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}#button.sidebar .sidebar-content:hover{cursor:pointer}#button.sidebar #button-body{position:absolute;/*! @noflip */right:7px;bottom:20px;width:32px;height:32px;box-shadow:0 6px 20px 0 rgba(0,18,46,.24)}#button.sidebar button i{width:15px;height:15px}#button.sidebar button i.type1::after{width:30px;height:30px;border-radius:28px}#button.sidebar button i.type2 svg{width:15px;height:15px}#button-body{width:60px;height:60px;border-radius:28px;display:inherit;align-items:center;justify-content:center;pointer-events:initial;background-size:130% 130%;transition:all .2s ease-in-out;position:relative;color:#007dfc}#button-body::before{content:"";transition:opacity .5s ease-in-out;position:absolute;top:-1px;right:-1px;bottom:-1px;left:-1px;opacity:0;border-radius:50%;background-color:#c6ccdc}#button-body.disabled{cursor:not-allowed;color:#c6ccdc}#button-body.disabled::before{opacity:1}#button-body:not(.disabled) #button-body:hover,#button-body:not(.disabled) #button-body:focus{outline:none}body:not(.mobile) #button-body:not(.disabled) #button-body:hover,body:not(.mobile) #button-body:not(.disabled) #button-body:focus{transform:scale(1.1)}#new-message,#dnd-indicator{position:absolute;top:37px;font-weight:700;color:#fff;right:23px;pointer-events:none;border-radius:10px;display:flex;justify-content:center;align-items:center;width:20px;height:20px}#new-message{font-size:12px;background:#f72e38;z-index:2;line-height:1}#new-message+#dnd-indicator{right:12px}#new-message.active{animation:shake .82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both}#dnd-indicator{background:#374ca6;z-index:1}#dnd-indicator svg{width:12px;height:12px}@keyframes buttonWave{99%{transform:scale(2);opacity:0}100%{transform:scale(1);opacity:0}}*:focus{outline:thin dotted}.chat{max-height:calc(100% - 47px);display:flex;flex-direction:column}svg{width:24px;height:24px}.chat-header{padding:24px 28px 0;background:linear-gradient(-61deg, #00e0d8, #201d8e);position:relative;z-index:4;flex:0 0 auto}.chat-header #ic-minimize{padding:3px 0;transform:rotate(270deg) translate(3px, 0)}.chat-header a{color:currentColor}.chat-header a:hover{text-decoration:none}.chat ::-webkit-scrollbar{display:none}.avatars-wrapper{width:52px;height:52px;margin:0px 18px 0 0;float:left}.operators-avatar-2{padding-top:11px}.operators-avatar-0{display:none}.header-ava{width:52px;height:52px;border-radius:24px;background-size:cover;background-position:center;background-image:url(' + p + ');float:left}.mobile .header-ava{width:42px;height:42px;border-radius:19px}.operators-avatar-2 .header-ava{width:30px;height:30px;margin-left:-6px}.operators-avatar-3 .header-ava{width:28px;height:28px}.operators-avatar-3 .header-ava:last-child{margin-left:-5px}.operators-avatar-3 .header-ava:first-child{clear:both;float:none;margin:0 auto}.operators-avatar-3 .header-ava:not(:first-child){margin-top:-4px}.operators-avatar-4 .header-ava{width:28px;height:28px}.operators-avatar-4 .header-ava:nth-child(2n){margin-left:-5px}.operators-avatar-4 .header-ava:nth-child(n+3){margin-top:-4px}.mobile .operators-avatar-2 .header-ava{width:26px;height:26px}.mobile .operators-avatar-3 .header-ava{width:23px;height:23px}.mobile .operators-avatar-3 .header-ava:first-child{margin-top:2px}.mobile .operators-avatar-4 .header-ava{width:23px;height:23px}.mobile .operators-avatar-4 .header-ava:nth-child(-n+2){margin-top:2px}.chat h2{font-size:22px;font-weight:600;color:currentColor;margin:4px 0 0 0;padding:0;display:inline-block;position:relative;max-width:calc(100% - 145px);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:bottom}.chat h2 .emoji{width:31px;height:31px}.chat h2.oneline{margin-top:0;line-height:52px;min-height:52px}.chat h2.twolines{margin-bottom:5px}.chat h2 .top-heading{font-size:16px;display:block;line-height:15px;margin-top:4px}.heading-hover{position:absolute;color:#fff;background:rgba(0,0,0,.88);top:70px;font-size:13px;padding:10px 15px;z-index:3;width:auto;border-radius:8px;max-width:100%;opacity:0;transition:opacity .3s ease-in-out;left:50px}.chat h2:hover+.heading-hover{opacity:1}#conversation-group{padding:0 28px;width:100%;height:357px;overflow-y:auto;overflow-x:hidden;-ms-overflow-style:none;background:#fff;transition:all .3s;max-height:357px;min-height:160px;flex:0 1 auto}#conversation-group.ios-ipad{-webkit-overflow-scrolling:touch;width:calc(100% + 6px);/*! @noflip */margin-right:0}.lang-rtl #conversation-group.ios-ipad{/*! @noflip */margin-right:-6px}#conversation-group .uploadIconWrapper{position:absolute;display:flex;height:100%;width:100%;align-items:center;justify-content:center;top:0;left:0;right:0;z-index:3}#conversation-group .uploadIconWrapper span{font-size:19px;max-width:120px;text-align:center;color:#080f1a;line-height:1.3}#conversation-group .uploadIconWrapper .ic_upload{fill:#287efc;width:73px;height:73px;margin-bottom:10px;margin-top:-5px}#conversation-group .upload-circle{width:230px;height:230px;border-radius:50%;background:rgba(182,198,229,.24);display:flex;flex-direction:column;align-items:center;justify-content:center;animation:scale-up .3s ease;position:relative;z-index:1}#conversation-group.drag-active::after{content:"";position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background:rgba(255,255,255,.92);z-index:2;animation:fade-in .3s ease}.transition-container #conversation-group{flex:1}.transition-container{height:399px;background:#fff;flex:0 1 auto;min-height:160px;position:relative;display:flex;flex-direction:column}.transition-container #conversation-group{overflow-y:hidden}#messages{position:relative;-ms-overflow-style:none;margin-top:10px;width:100%;padding-bottom:24px;float:left}#conversation-group #conversation-scroll{width:24px;height:313px;position:absolute;right:2px;padding:0 12px 0 4px}#conversation-group #conversation-scroll div{width:6px;margin:0 1px;background:#00173b;opacity:0;top:0;position:absolute;border-radius:4px;cursor:pointer;transition:opacity .1s ease-in-out,width .1s ease-in-out,margin .1s ease-in-out;z-index:2;user-select:none}body:not(.mobile) #conversation-group:hover #conversation-scroll div{opacity:.16}body:not(.mobile) #conversation-group #conversation-scroll div:hover{opacity:.32;width:8px;margin:0}hr{margin:0;border:0;border-bottom:1px solid #dbdfe6}input.disabled,textarea.disabled{cursor:not-allowed;color:#8894ab}button.material-icons,label.material-icons{position:relative;z-index:1;margin:15px 0 8px 11px;float:right}button.material-icons svg,label.material-icons svg{fill:#8894ab}button.material-icons svg#ic-minimize,button.material-icons svg.options-icon,label.material-icons svg#ic-minimize,label.material-icons svg.options-icon{fill:currentColor}button.material-icons::before,label.material-icons::before{content:"";position:absolute;background:#eff2f6;width:40px;height:40px;border-radius:50%;z-index:-1;transition:all .16s ease-in-out;transform:scale(0);top:calc(50% - 20px);left:calc(50% - 20px)}body:not(.mobile) button.material-icons:hover::before,body:not(.mobile) label.material-icons:hover::before{transform:scale(1)}button.material-icons:focus svg,label.material-icons:focus svg{fill:currentColor}button.material-icons:focus svg.bots-icon,label.material-icons:focus svg.bots-icon{fill:#007dfc}button.material-icons.disabled svg,button.material-icons.disabled:focus svg,label.material-icons.disabled svg,label.material-icons.disabled:focus svg{fill:#c9cbd8}button.material-icons.options,button.material-icons.exit-chat,label.material-icons.options,label.material-icons.exit-chat{z-index:unset}.mobile button.material-icons.options,.mobile button.material-icons.exit-chat,.mobile label.material-icons.options,.mobile label.material-icons.exit-chat{margin:5px -10px -2px 1px;padding:10px}button.material-icons.options svg,button.material-icons.exit-chat svg,label.material-icons.options svg,label.material-icons.exit-chat svg{fill:currentColor;width:26px;height:26px}button.material-icons.options::before,button.material-icons.exit-chat::before,label.material-icons.options::before,label.material-icons.exit-chat::before{background:rgba(0,36,92,.16)}body:not(.mobile) button.material-icons.options:focus::before,body:not(.mobile) button.material-icons.options:hover::before,body:not(.mobile) button.material-icons.exit-chat:focus::before,body:not(.mobile) button.material-icons.exit-chat:hover::before,body:not(.mobile) label.material-icons.options:focus::before,body:not(.mobile) label.material-icons.options:hover::before,body:not(.mobile) label.material-icons.exit-chat:focus::before,body:not(.mobile) label.material-icons.exit-chat:hover::before{transform:scale(1)}button.material-icons.exit-chat,label.material-icons.exit-chat{margin-right:-3px}.mobile button.material-icons.exit-chat,.mobile label.material-icons.exit-chat{margin-right:-13px}body:not(.mobile) .footer-bottom .bots-button{margin-right:22px}body:not(.mobile) .footer-bottom .bots-button::after{content:"";display:block;position:absolute;top:2px;right:-12px;height:24px;width:1px;background:#dfe3e9}.input-group{padding:0 28px 6px;width:100%;position:relative;background:#fff;z-index:3;flex:0 0 auto}.input-group.drag-active .drag-active-wrapper::after{content:"";position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background:rgba(255,255,255,.7);z-index:1;animation:fade-in .3s ease}.input-group .footer-input-wrapper,.input-group .footer-icons-wrapper{transition:all .5s ease-in-out;opacity:1;transform:translateY(0)}.input-group .footer-input-wrapper.hidden,.input-group .footer-icons-wrapper.hidden{transform:translateY(10px);pointer-events:none;opacity:0}.input-group .material-icons svg{width:26px;height:26px}.input-group .material-icons:hover svg{fill:#007dfc}.input-group .material-icons:hover::before{background-color:rgba(0,125,252,.12)}.input-group .footer-bottom{height:42px;position:relative}.input-group .footer-bottom button{float:left;margin:0 16px 14px 0}.emoji-wrapper{height:215px;position:absolute;overflow:hidden;width:340px;bottom:100%;z-index:10;left:18px}.emoji-mart{border:0;position:absolute;width:100% !important;height:100%;right:0}.emoji-mart input:focus{border:1px solid #d9d9d9}.emoji-mart-scroll{height:140px}.emoji-mart .emoji-mart-emoji{cursor:pointer}.emoji-mart .emoji-mart-emoji span{cursor:pointer}.emoji-mart-anchor{-ms-flex:1 1 auto}.no-start-message .emoji-wrapper{height:175px}.no-start-message .emoji-mart-scroll{height:100px}.options-dropdown,.bots-dropdown{position:absolute;top:72px;background:#fff;border-radius:8px;box-shadow:0 6px 32px 0 rgba(0,18,46,.16);padding:12px 6px;z-index:6;transition:all .2s ease-in-out;right:24px}.options-dropdown ul,.bots-dropdown ul{margin:0;padding:0}.options-dropdown ul li,.bots-dropdown ul li{border-radius:6px;display:flex}.options-dropdown ul li:nth-of-type(2) button svg,.bots-dropdown ul li:nth-of-type(2) button svg{fill:#ffb926}.options-dropdown li button,.bots-dropdown li button{padding:8px 16px;display:flex;margin:0;position:initial;float:initial;width:100%;border-radius:6px}body:not(.mobile) .options-dropdown li button:hover,body:not(.mobile) .bots-dropdown li button:hover,body:not(.mobile) .options-dropdown li button:focus,body:not(.mobile) .bots-dropdown li button:focus{background:#eff2f6}.options-dropdown li button svg,.bots-dropdown li button svg,.options-dropdown li button:focus svg{fill:#8894ab;height:22px;width:22px}.options-dropdown li button span,.bots-dropdown li button span{margin-left:10px;color:#06132b}.options-dropdown li button::before,.bots-dropdown li button::before{content:none}.bots-dropdown{top:auto;bottom:0;transform:translateY(-60px);max-height:275px;overflow-y:auto;z-index:11;right:auto;left:0px}.bots-dropdown button.material-icons{margin:0}.bots-dropdown ul li{padding:0}.bots-dropdown ul li span{cursor:pointer;padding:8px 16px;display:flex;align-items:center;width:100%}.bots-dropdown ul li span svg{margin-right:10px}.bots-dropdown ul li span.bot-disabled{cursor:not-allowed;color:#8894ab}.bots-dropdown ul.bots-cancel span{color:#0ab6ff;display:flex;align-items:center}.bots-dropdown ul.bots-cancel svg{fill:red;margin-right:10px}.offline-message{margin:18px -28px 0px;color:currentColor;width:calc(100% + 56px);padding:14px 28px 7px;position:relative;background-size:100% calc(100% + 12px);z-index:1}.no-clip-path .offline-message{padding:14px 28px 20px}.no-clip-path .offline-message:after{content:"";position:absolute;width:calc(100% + 10px);bottom:-8px;left:-5px;border-image-source:url(' + f + ');border-image-slice:0 0 100%;border-image-width:0 0 15px;border-image-repeat:stretch stretch;border-bottom:solid 15px;border-top:0;border-left:0;border-right:0}.offline-message span{z-index:2;position:relative;display:inline-block;font-size:16px}.offline-message span.online{padding-left:20px}.offline-message span.online:before{content:"";display:block;width:8px;height:8px;position:absolute;top:calc(50% - 4px);background:#58b743;border-radius:50%;left:0}.emoji-switch.active svg{fill:currentColor}.bots-animation svg{will-change:transform;animation:botsAnimation 3s;animation-iteration-count:1}.bots-animation .pulse,.bots-animation .pulse-white{will-change:transform;display:block;width:26px;height:26px;position:absolute;top:0;left:0;border-radius:50%;animation-iteration-count:1}.bots-animation .pulse{background:#c9cbd8;z-index:-4;animation:waterPulse 3s}.bots-animation .pulse.animation-delay{z-index:-2}.bots-animation .pulse-white{background:#fff;z-index:-3;animation:waterPulseWhite 3s}.bots-animation .pulse-white.animation-delay{z-index:-1}.bots-animation .animation-delay{animation-delay:.8s}@keyframes waterPulseWhite{from{transform:scale(0.7)}29%{transform:scale(0.7)}60%{transform:scale(2.8)}}@keyframes waterPulse{from{opacity:0;transform:scale(0.8)}19%{opacity:.3}23%{transform:scale(0.8)}24%{opacity:.5;transform:scale(0.8)}31%{opacity:.4}55%{opacity:.1;transform:scale(2.8)}100%{opacity:0}}@keyframes botsAnimation{12%{transform:scale(1)}20%{transform:scale(1.2)}25%{transform:scale(0.9)}29%{transform:scale(1.05)}31%{transform:scale(1)}}@keyframes scale-up{0%{transform:scale(0.8)}100%{transform:scale(1)}}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}.chat-in-preview--tour .exit-chat,.chat-in-preview--tour .options-icon{opacity:.3}.chat-in-preview--tour .input-group{opacity:.4}.start-group{display:flex;flex-direction:column}.start-group .h2-banner{font-weight:400;font-size:42px;margin:6px 0 16px 0;padding-top:4px;display:inline-block;position:relative;max-width:calc(100% - 90px);line-height:50px;word-wrap:break-word;white-space:pre-line;-webkit-text-stroke:.4px;padding-left:14px}.start-group .h2-banner .emoji{width:31px;height:31px}.start-group .operators{display:flex;position:absolute;top:84px;flex-direction:column;height:calc(100% - 84px);width:66px;right:42px}.start-group .operators>div:hover span{opacity:1}.start-group .operators>div:hover:not(:first-child) .ava48:hover{transform:translate3d(0, -20px, 0)}.start-group .ava48{width:66px;height:66px;border-radius:31px;background-size:cover;background-position:center;background-image:url(' + p + ');position:absolute;top:0;left:0;transition:transform .2s ease-in-out;will-change:transform;transform:translate3d(0, 0px, 0)}.start-group .ava48 span{background:#fff;padding:6px 8px;border-radius:2px;box-shadow:0 2px 8px 0 rgba(0,18,46,.32);font-size:13px;position:absolute;opacity:0;white-space:nowrap;transition:all .16s ease-in-out;right:calc(100% + 10px);top:50%;transform:translateY(-50%);color:#06132b}.start-group button.i-banner svg{fill:currentColor}.start-group button.i-banner::before{background:rgba(0,36,92,.16);width:38px;height:38px;top:calc(50% - 19px);left:calc(50% - 19px)}.start-group .get-started{width:100%;overflow:hidden;z-index:3;position:relative}.start-group .get-started button{color:#3f88f3;display:block;width:100%;padding:1em 0;background:#fff;border-radius:0;font-size:19px;transition:color .2s ease-in-out;margin:0}.start-group .input-group{z-index:4}.banner{width:100%;height:100%;position:absolute;top:0;left:0;border-radius:8px 8px 0 0;overflow:hidden;opacity:.16;background-size:cover}.start-message{color:currentColor;font-size:16px;margin:0 0 32px 0;line-height:22px;position:relative;padding-left:14px;padding-right:100px;z-index:2}.user-data-modal{background:#fff;height:100%;width:100%;display:flex;justify-content:center;align-items:center;position:absolute;z-index:10;padding:50px 55px;background-image:linear-gradient(#fff, #fff),linear-gradient(#fff, #fff);background-size:100% 40px,100% calc(100% - 40px);background-repeat:no-repeat;background-position:top,bottom}.user-data-modal .user-data-modal-filler{width:280%;background-color:#fff;display:block;position:absolute;left:-90%;top:0;height:100%;z-index:-1;border-radius:0 0 53% 53%;background-clip:padding-box}.user-data-modal .user-data-modal-close{position:absolute;right:16px;top:16px}.user-data-modal .user-data-modal-close svg#ic_close{width:17px;height:17px;fill:#6d7e9e;position:static;top:10px;left:12px}.user-data-modal .create-ticket-success-wrapper{display:flex;flex-direction:column;row-gap:18px;align-items:center}.user-data-modal .create-ticket-success-wrapper svg{width:54px;height:54px}.user-data-modal .pre-chat,.user-data-modal .always-online{max-width:100%}.user-data-modal .user-data-modal-text{font-size:20px;font-weight:600;text-align:center;color:#00122e;margin-bottom:32px}.user-data-modal .user-data-modal-fields #ic_arrow{fill:#007dfc}.user-data-modal .user-data-modal-fields svg{width:24px;height:24px}.user-data-modal .user-data-modal-fields input,.user-data-modal .user-data-modal-fields textarea{border:solid 1px rgba(108,125,159,.24);font-size:15px;padding:9px 12px 10px 40px;margin:0 0 8px 0;line-height:normal}.user-data-modal .user-data-modal-fields label{padding-top:12px;padding-right:0;margin:0 0 8px 10px}.user-data-modal .user-data-modal-fields label input{margin-left:5px;margin-top:4px}.user-data-modal .user-data-modal-fields label span{font-size:11px;text-align:justify;color:#00122e;max-height:120px;display:block;overflow-y:auto}.user-data-modal .user-data-modal-fields label span a{color:#00122e}.user-data-modal .user-data-modal-submit{width:100%;height:40px;font-size:16px;font-weight:600;color:#fff;border-radius:6px;background:linear-gradient(99deg, #2a27da, #00ccff);margin:16px 0;position:relative}.user-data-modal .user-data-modal-submit::after{transition:background .2s;content:"";border-radius:6px;background:rgba(0,0,0,0);left:0;top:0;position:absolute;width:100%;height:100%}.user-data-modal .user-data-modal-submit:hover::after{background:rgba(0,0,0,.08)}.user-data-modal .user-data-modal-operators{text-align:center;white-space:nowrap;margin-bottom:32px}.user-data-modal .user-data-modal-operators .user-data-modal-operator{width:66px;height:66px;border-radius:31px;background-size:cover;background-position:center;display:inline-block;background-image:url(' + p + ');margin-right:-4%}.user-data-modal .emoji{margin:0}.flyMessage{background-color:#fff;padding:0 24px;max-width:340px;position:absolute;bottom:26px;border-radius:12px;box-shadow:0 8px 26px 0 rgba(0,18,46,.16);display:flex;flex-direction:column;z-index:1;max-height:calc(100% - 76px);right:48px;margin-left:20px}.chat-in-preview .flyMessage{box-shadow:0 8px 13px 0 rgba(0,18,46,.16)}.flyMessage:hover .close-button-wrapper{opacity:1;transform:translateY(0px)}.mobile .flyMessage{max-width:calc(100% - 48px - 55px)}.mobile .flyMessage.with-buttons{width:calc(100% - 48px - 55px);max-width:250px}.flyMessage .close-button-wrapper{position:absolute;bottom:100%;opacity:0;width:100%;height:45px;transition:all .3s;transform:translateY(10px);left:0}.mobile .flyMessage .close-button-wrapper{opacity:1;height:100%;width:45px;bottom:auto;top:0;transform:translateY(0);right:100%;left:auto;transform:translateX(-10px)}.flyMessage .close-button-wrapper button.material-icons.exit-chat.mobile-close{position:absolute;top:0;border-radius:50%;margin:0;padding:3px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);height:24px;width:24px;display:flex;background:#fff;right:5px}.flyMessage .close-button-wrapper button.material-icons.exit-chat.mobile-close svg#ic_close{width:20px;height:20px;fill:#8894ab}.flyMessage .close-button-wrapper button.material-icons.exit-chat.mobile-close:before{content:none}.flyMessage .input-group{padding:9px 22px 9px 0}.flyMessage .material-icons.emoji-switch{position:absolute;top:0;right:36px}.flyMessage .material-icons.emoji-switch svg{width:20px;height:20px}.flyMessage .material-icons.emoji-switch:hover:before{width:32px;height:32px;margin:-6px 0 0 -6px}.flyMessage .emoji-wrapper{width:300px;left:auto;right:26px;border-radius:6px;box-shadow:0 1px 4px 0 rgba(0,0,0,.14);left:auto;right:26px}.flyMessage .input-group .fly-new-message-button{transition:min-width .3s;min-width:180px;padding:4px 0 8px;line-height:21px;text-align:left;cursor:pointer;font-size:17px;color:#8894ab;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.flyMessage .input-group .fly-new-message-button::-webkit-input-placeholder{white-space:nowrap}.flyMessage .input-group .fly-new-message-button::-moz-placeholder{white-space:nowrap}.flyMessage .input-group .fly-new-message-button:-ms-input-placeholder{white-space:nowrap}.flyMessage .input-group .fly-new-message-button:-moz-placeholder{white-space:nowrap}.flyMessage.ie .message-container{max-height:300px}.flyMessage .message-container{padding:19px 0;max-width:290px;font-size:17px;background:#fff;position:relative;word-wrap:break-word;overflow:hidden;overflow-y:auto;white-space:pre-line;padding-right:38px}.flyMessage .message-container ul{list-style-type:disc}.flyMessage .message-container ol{list-style-type:decimal}.flyMessage .message-container ul,.flyMessage .message-container ol{margin:12px 0;padding-left:16px}.flyMessage .message-container li{padding-left:4px;margin-bottom:8px}.flyMessage .message-container.image-content{overflow-y:hidden;padding-left:0;padding-right:0}.flyMessage .message-container.image-content button{float:left;height:200px;width:100%;min-width:200px;background-color:#fff}.flyMessage .message-container.image-content button .image-preview{background-size:cover;background-repeat:no-repeat;background-position:center;border-radius:8px;height:100%}.flyMessage .message-container.image-content span{display:inline-block;margin-top:10px}.mobile .flyMessage .message-container{width:100%;font-size:15px;padding-right:22px}.mobile .flyMessage .message-container.image-content{padding-left:0;padding-right:0}.mobile .flyMessage .message-container.image-content button{height:132px;min-width:auto}.flyMessage .message-container:after{content:"";border-bottom:1px solid #dedede;display:block;position:absolute;bottom:0;width:calc(100% - 38px)}.mobile .flyMessage .message-container:after{width:calc(100% - 22px)}.flyMessage .button-wrapper{width:100%;display:flex;flex-wrap:wrap}.mobile .flyMessage .button-wrapper{flex-direction:column;align-items:flex-start}.flyMessage .button-wrapper button,.flyMessage .button-wrapper .button-url{font-size:17px;color:#007dfc;background:#fff;line-height:21px;margin-top:6px;margin-bottom:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-bottom:1px solid rgba(0,0,0,0);transition:border-color .2s;margin-right:16px;text-align:left}.flyMessage .button-wrapper button:hover,.flyMessage .button-wrapper .button-url:hover{border-color:#007dfc}.mobile .flyMessage .button-wrapper button,.mobile .flyMessage .button-wrapper .button-url{max-width:100%;display:block;padding:4px 0}.flyMessage .button-wrapper button .emoji,.flyMessage .button-wrapper .button-url .emoji{vertical-align:top}.flyMessage .button-wrapper .button-url__anchor{color:#007dfc;text-decoration:none}.flyMessage .button-wrapper .more-replies{border:1px solid #007dfc;border-radius:20px;padding:3px 10px;line-height:7px;align-self:center}.mobile .flyMessage .button-wrapper .more-replies{align-self:flex-start;padding:3px 10px;margin:6px 0}.flyMessage .button-wrapper .more-replies svg{transform:rotate(90deg);width:13px;height:13px;fill:#007dfc}.widgetLabel{position:absolute;height:42px;bottom:61px;z-index:1;white-space:nowrap;font-size:17px;line-height:17px;border-radius:16px;padding:10px 15px;box-shadow:0 6px 32px 0 rgba(0,18,46,.24);background:#fff}.widget-position-left .widgetLabel{/*! @noflip */left:100px}.widget-position-right .widgetLabel{/*! @noflip */right:100px}.dropdownFade-enter{opacity:.01;top:62px}.dropdownFade-enter.dropdownFade-enter-active{opacity:1;top:72px}.dropdownFade-exit{opacity:1;top:72px}.dropdownFade-exit.dropdownFade-exit-active{opacity:.01;top:62px}.botsListFade-enter{opacity:0;transform:translateY(-52px)}.botsListFade-enter.botsListFade-enter-active{opacity:1;transform:translateY(-60px)}.botsListFade-appear{opacity:0;transform:translateY(-52px)}.botsListFade-appear.botsListFade-appear-active{opacity:1;transform:translateY(-60px)}.botsListFade-exit{opacity:1;transform:translateY(-60px)}.botsListFade-exit.botsListFade-exit-active{opacity:0;transform:translateY(-52px)}.fade-enter{opacity:.01}.fade-enter.fade-enter-active{transition:all .3s;opacity:1}.fade-exit{opacity:1;transition:all .3s}.fade-exit.fade-exit-active{opacity:.01}.fade200-enter{opacity:.01}.fade200-enter.fade200-enter-active{transition:opacity .2s;opacity:1}.fade200-exit{opacity:1;transition:opacity .2s}.fade200-exit.fade200-exit-active{opacity:.01}.emojiFade-enter{opacity:.01;bottom:calc(100% - 10px)}.emojiFade-enter.emojiFade-enter-active{opacity:1;bottom:100%;transition:all .3s}.emojiFade-exit{opacity:1;bottom:100%;transition:all .3s}.emojiFade-exit.emojiFade-exit-active{opacity:.01;bottom:calc(100% - 10px)}.scale-enter{transform:scale(0.01);opacity:0}.scale-enter.scale-enter-active{transform:scale(1);opacity:1}.scale-exit{transform:scale(1);opacity:1}.scale-exit.scale-exit-active{transform:scale(0.01);opacity:0}#button.sidebar{transition:all .3s}#button.sidebar.bubbleAnimation-appear{/*! @noflip */right:-8px;opacity:.01}#button.sidebar.bubbleAnimation-appear-active{opacity:1;/*! @noflip */right:0}#button.sidebar.bubbleAnimation-enter{/*! @noflip */right:-8px;opacity:.01}#button.sidebar.bubbleAnimation-enter-active{opacity:1;/*! @noflip */right:0}#button.sidebar.bubbleAnimation-exit{opacity:1;/*! @noflip */right:0}#button.sidebar.bubbleAnimation-exit-active{/*! @noflip */right:-8px;opacity:.01}#button:not(.sidebar).bubbleAnimation-appear{right:-8px;opacity:.01}#button:not(.sidebar).bubbleAnimation-appear.bubbleAnimation-appear-active{opacity:1;right:0;transition:all .3s}#button:not(.sidebar).bubbleAnimation-enter{right:-8px;opacity:.01}#button:not(.sidebar).bubbleAnimation-enter.bubbleAnimation-enter-active{opacity:1;right:0;transition:all .3s}#button:not(.sidebar).bubbleAnimation-exit{opacity:1;right:0;transition:all .3s}.lang-rtl #button:not(.sidebar).bubbleAnimation-exit{display:none}#button:not(.sidebar).bubbleAnimation-exit.bubbleAnimation-exit-active{right:-8px;opacity:.01}.widget-position-left #button:not(.sidebar).bubbleAnimation-appear{right:8px;opacity:.01}.widget-position-left #button:not(.sidebar).bubbleAnimation-appear.bubbleAnimation-appear-active{opacity:1;right:0px;transition:all .3s}.widget-position-left #button:not(.sidebar).bubbleAnimation-enter{right:8px;opacity:.01}.widget-position-left #button:not(.sidebar).bubbleAnimation-enter.bubbleAnimation-enter-active{opacity:1;right:0px;transition:all .3s}.widget-position-left #button:not(.sidebar).bubbleAnimation-exit{opacity:1;right:0px;transition:all .3s}.widget-position-left #button:not(.sidebar).bubbleAnimation-exit.bubbleAnimation-exit-active{right:8px;opacity:.01}.mobile .widget-position-left #button:not(.sidebar).bubbleAnimation-appear{right:8px;opacity:.01}.mobile .widget-position-left #button:not(.sidebar).bubbleAnimation-appear.bubbleAnimation-appear-active{opacity:1;right:0px;transition:all .3s}.mobile .widget-position-left #button:not(.sidebar).bubbleAnimation-enter{right:8px;opacity:.01}.mobile .widget-position-left #button:not(.sidebar).bubbleAnimation-enter.bubbleAnimation-enter-active{opacity:1;right:0px;transition:all .3s}.mobile .widget-position-left #button:not(.sidebar).bubbleAnimation-exit{display:none}.mobile .widget-position-left #button:not(.sidebar).bubbleAnimationReturn-exit-active{display:none}.widget-position-left #button:not(.sidebar).bubbleAnimationReturn-appear{/*! @noflip */left:8px;opacity:.01}.widget-position-left #button:not(.sidebar).bubbleAnimationReturn-appear.bubbleAnimationReturn-appear-active{opacity:1;/*! @noflip */left:0px;transition:all .2s}.widget-position-left #button:not(.sidebar).bubbleAnimationReturn-enter{/*! @noflip */left:8px;opacity:.01}.widget-position-left #button:not(.sidebar).bubbleAnimationReturn-enter.bubbleAnimationReturn-enter-active{/*! @noflip */left:0px;opacity:1;transition:all .2s}.widget-position-left #button:not(.sidebar).bubbleAnimationReturn-exit{opacity:1;/*! @noflip */left:0px;transition:all .2s}.widget-position-left #button:not(.sidebar).bubbleAnimationReturn-exit.bubbleAnimationReturn-exit-active{/*! @noflip */left:8px;opacity:.01}.mobile .widget-position-left #button:not(.sidebar).bubbleAnimationReturn-exit{display:none}.sidebar-position-left #button.sidebar{transition:all .3s}.sidebar-position-left #button.sidebar.bubbleAnimationLeft-exit{opacity:1;/*! @noflip */left:0px}.sidebar-position-left #button.sidebar.bubbleAnimationLeft-exit-active{/*! @noflip */left:-8px;opacity:.01}.sidebar-position-left #button.sidebar.bubbleAnimationLeft-appear{/*! @noflip */left:-8px;opacity:.01}.sidebar-position-left #button.sidebar.bubbleAnimationLeft-appear-active{opacity:1;/*! @noflip */left:0px}.sidebar-position-left #button.sidebar.bubbleAnimationLeft-enter{/*! @noflip */left:-8px;opacity:.01}.sidebar-position-left #button.sidebar.bubbleAnimationLeft-enter-active{opacity:1;/*! @noflip */left:0px}.moveFromRight-appear{right:40px;opacity:.01}.moveFromRight-appear.moveFromRight-appear-active{opacity:1;right:48px;transition:all .3s}.moveFromRight-enter{right:40px;opacity:.01}.moveFromRight-enter.moveFromRight-enter-active{opacity:1;right:48px;transition:all .3s}.moveFromRight-exit{opacity:1;right:48px;transition:all .3s}.moveFromRight-exit.moveFromRight-exit-active{right:40px;opacity:.01}.moveFromRightLabel-appear{/*! @noflip */right:92px;opacity:.01}.moveFromRightLabel-appear.moveFromRightLabel-appear-active{opacity:1;/*! @noflip */right:100px;transition:all .3s}.moveFromRightLabel-enter{/*! @noflip */right:92px;opacity:.01}.moveFromRightLabel-enter.moveFromRightLabel-enter-active{opacity:1;/*! @noflip */right:100px;transition:all .3s}.moveFromRightLabel-exit{opacity:1;/*! @noflip */right:100px;transition:all .3s}.moveFromRightLabel-exit.moveFromRightLabel-exit-active{/*! @noflip */right:92px;opacity:.01}.moveFromLeftLabel-appear{/*! @noflip */left:92px;opacity:.01}.moveFromLeftLabel-appear.moveFromLeftLabel-appear-active{opacity:1;/*! @noflip */left:100px;transition:all .3s}.moveFromLeftLabel-enter{/*! @noflip */left:92px;opacity:.01}.moveFromLeftLabel-enter.moveFromLeftLabel-enter-active{opacity:1;/*! @noflip */left:100px;transition:all .3s}.moveFromLeftLabel-exit{opacity:1;/*! @noflip */left:100px;transition:all .3s}.moveFromLeftLabel-exit.moveFromLeftLabel-exit-active{/*! @noflip */left:92px;opacity:.01}body:not(.mobile) .widget-position-left .chat.moveFromRight-appear{right:40px;left:auto;opacity:.01}body:not(.mobile) .widget-position-left .chat.moveFromRight-appear.moveFromRight-appear-active{opacity:1;right:48px;left:auto;transition:all .3s}body:not(.mobile) .widget-position-left .chat.moveFromRight-enter{right:40px;left:auto;opacity:.01}body:not(.mobile) .widget-position-left .chat.moveFromRight-enter.moveFromRight-enter-active{opacity:1;right:48px;left:auto;transition:all .3s}body:not(.mobile) .widget-position-left .chat.moveFromRight-exit{opacity:1;right:48px;left:auto;transition:all .3s}body:not(.mobile) .widget-position-left .chat.moveFromRight-exit.moveFromRight-exit-active{right:40px;left:auto;opacity:.01}.sidebarAnimation-appear{right:40px;opacity:.01}.sidebarAnimation-appear.sidebarAnimation-appear-active{opacity:1;right:48px;transition:all .3s}.sidebarAnimation-enter{right:40px;opacity:.01}.sidebarAnimation-enter.sidebarAnimation-enter-active{opacity:1;right:48px;transition:all .3s}.sidebarAnimation-exit{opacity:1;right:48px;transition:all .3s}.sidebarAnimation-exit.sidebarAnimation-exit-active{right:40px;opacity:.01}.operatorTyping-enter{opacity:.01;transform:translateY(10px)}.operatorTyping-enter.operatorTyping-enter-active{transform:translateY(0px);transition:all .3s;opacity:1}.operatorTyping-exit{display:none}.message{padding:10px 16px;border-radius:20px;margin:2px 0;font-size:15px;line-height:20px;word-wrap:break-word;display:inline-block;max-width:85%;clear:both;position:relative;transition:margin .28s ease-in-out}.message.timestamp-visible{margin-bottom:28px}.message.rating-visible{margin-bottom:35px}.message span.message-content{white-space:pre-line}.message .message-content ul{list-style-type:disc}.message .message-content ol{list-style-type:decimal}.message .message-content ul,.message .message-content ol{margin:12px 0;padding-left:16px}.message .message-content li{padding-left:4px;margin-bottom:8px}.rating-visible+.message,.rating-visible+.bots-card-gallery-button-wrapper{margin-top:10px}.message-visitor{color:#fff;background:linear-gradient(332deg, #21dbdb, #2979ff);float:right}.message-visitor+.message-operator{margin-top:9px}.message-visitor span a{color:currentColor}.message-visitor.not-delivered{border:1px solid #f0f2f7;background:#fff;color:#8894ab;margin-bottom:22px;white-space:nowrap;padding:10px 15px}.message-visitor.not-delivered .resend-message{position:absolute;bottom:-22px;font-size:12px;right:0}.message-operator{color:#06132b;background:#f0f2f7;float:left}.message-operator.message-form{width:100%;max-width:none;padding:16px}.message-operator span a{color:#06132b}.message-operator+.message-visitor{margin-top:9px}.message-operator.message-with-buttons,.message-operator .message-with-buttons,.message-operator.bots-quick-replies{padding-left:0;padding-right:0;padding-bottom:0;max-width:95%}.message-operator.message-with-buttons.buttons-hidden,.message-operator .message-with-buttons.buttons-hidden,.message-operator.bots-quick-replies.buttons-hidden{padding-bottom:10px}.message-operator.message-with-buttons>span,.message-operator .message-with-buttons>span,.message-operator.bots-quick-replies>span{padding:0 16px;display:inline-block;word-break:break-word}.message-operator.message-with-buttons .button-wrapper,.message-operator .message-with-buttons .button-wrapper,.message-operator.bots-quick-replies .button-wrapper{background:#fff;width:100%;margin-top:10px;border:1px solid #ebeef0;border-bottom-left-radius:20px;border-bottom-right-radius:20px;border-top:0;position:relative}.message-operator.message-with-buttons .button-icon,.message-operator .message-with-buttons .button-icon,.message-operator.bots-quick-replies .button-icon{display:flex;justify-content:center;transition:background-color .2s ease-in-out;padding:8px 16px;border-bottom-left-radius:20px;border-bottom-right-radius:20px;cursor:pointer;outline:none}.message-operator.message-with-buttons .button-icon svg,.message-operator .message-with-buttons .button-icon svg,.message-operator.bots-quick-replies .button-icon svg{fill:#3f88f6;width:20px;height:20px}.message-operator.message-with-buttons .button-icon:hover,.message-operator .message-with-buttons .button-icon:hover,.message-operator.bots-quick-replies .button-icon:hover{background-color:#f6f8fb}.message-operator.message-with-buttons button,.message-operator.message-with-buttons .button-url,.message-operator .message-with-buttons button,.message-operator .message-with-buttons .button-url,.message-operator.bots-quick-replies button,.message-operator.bots-quick-replies .button-url{margin:0 auto;min-width:100%;display:block;font-size:16px;line-height:19px;padding:8px 16px;border-bottom:1px solid #ebeef0;color:#007dfc;background:rgba(0,0,0,0);position:relative;z-index:2;outline:none;word-break:break-word}.message-operator.message-with-buttons button:hover,.message-operator.message-with-buttons .button-url:hover,.message-operator .message-with-buttons button:hover,.message-operator .message-with-buttons .button-url:hover,.message-operator.bots-quick-replies button:hover,.message-operator.bots-quick-replies .button-url:hover{text-decoration:underline}.message-operator .message-with-buttons button:last-child,.message-operator .message-with-buttons .button-url:last-child,.message-operator.message-with-buttons button:last-child,.message-operator.message-with-buttons .button-url:last-child{border-bottom:0}.message-operator.bots-quick-replies{width:85%;background-color:#fff;margin-top:0;float:right}.message-operator.bots-quick-replies .button-wrapper{margin-top:0;display:flex;flex-wrap:wrap;justify-content:flex-end;width:100%;border:none}.message-operator.bots-quick-replies button{font-size:15px;padding:10px 14px;border:1px solid;border-radius:20px;margin:3px;min-width:inherit}.message-operator.bots-quick-replies span{text-align:left;overflow:hidden}.message-operator.bots-quick-replies span.line-clamp{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.message-operator.bots-card-gallery{padding:0 28px;max-width:calc(100% + 56px);background:rgba(0,0,0,0);overflow:auto;border-radius:0;display:flex;scroll-snap-type:x mandatory;scroll-padding:28px;scroll-behavior:smooth;margin-bottom:5px;scrollbar-width:none;margin-left:-28px}.message-operator.bots-card-gallery .ios-ipad{-webkit-overflow-scrolling:touch}.safari .message-operator.bots-card-gallery{scroll-snap-type:x mandatory}.lang-rtl .safari .message-operator.bots-card-gallery{scroll-snap-type:none}.message-operator.bots-card-gallery.bots-card-gallery-single-card{display:block;margin-left:auto;margin-right:auto;width:100%}.message-operator.bots-card-gallery.bots-card-gallery-single-card .card{max-width:240px;margin:auto}.message-operator.bots-card-gallery.bots-card-gallery-multiple-cards .card:last-child{min-width:268px;padding-right:28px}.message-operator.bots-card-gallery .card{max-width:100%;min-width:240px;scroll-snap-align:center;margin:0 10px 0 0}.message-operator.bots-card-gallery .card .card-content-wrapper{padding:9px 12px 8px;border:1px solid #ebeef0;border-top:none}.message-operator.bots-card-gallery .card .card-content-wrapper a{text-decoration:none;color:#00122e}.message-operator.bots-card-gallery .card .card-content-wrapper a:hover,.message-operator.bots-card-gallery .card .card-content-wrapper a:focus,.message-operator.bots-card-gallery .card .card-content-wrapper a:active,.message-operator.bots-card-gallery .card .card-content-wrapper a:visited{color:#00122e;outline:none}.message-operator.bots-card-gallery .card .card-content-wrapper a:hover{text-decoration:underline}.message-operator.bots-card-gallery .card .card-image{border-radius:14px 14px 0 0;height:122px;background:#fff no-repeat center center;background-size:cover;border:1px solid #ebeef0;border-bottom:0}.message-operator.bots-card-gallery .card .card-title{font-size:15px;line-height:19px;font-weight:bold;color:#00122e}.message-operator.bots-card-gallery .card .card-subtitle{margin:4px 0 0;line-height:16.5px;font-size:14px;color:#4c596b;white-space:pre-line}.message-operator.bots-card-gallery .card .card-subtitle .emoji{width:15px;margin:0 0 -2px 2px}.message-operator.bots-card-gallery .card .card-url{font-size:14px;line-height:17px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#00122e}.message-operator.bots-card-gallery .card .card-url a{opacity:.5}.message-operator.bots-card-gallery .card .card-buttons .button-wrapper{margin:0}.message-operator.bots-card-gallery .card .card-buttons .button-wrapper:before{content:none}.message-operator.bots-card-gallery .card .card-buttons .button-wrapper button{width:100%}.message-operator.bots-card-gallery.bots-card-gallery-without-images .card-content-wrapper{border-radius:14px 14px 0 0;border-top:1px solid #ebeef0}.message-operator.buttons-message{padding:0;max-width:90%}.message-operator.buttons-message .message-with-buttons{max-width:100%}.message-operator.buttons-message .message-with-buttons-text{padding:9px 16px 1px;line-height:19px;white-space:pre-line}.message-operator.coupon-code-message{padding:10px 14px 14px;width:100%}.message-operator.message-alert{border:2px solid #dee3e8;background:#fff !important;margin-bottom:22px;position:relative}.message-operator.message-alert svg.alert-icon{height:20px;width:20px;fill:red;position:absolute;top:-5px;background:#fff;right:-5px}.message-operator.typing-indicator{text-align:left}.message-operator.typing-indicator span{height:4px;width:4px;margin:11px 1px 0 1px;background-color:#000;display:inline-block;border-radius:50%;opacity:.4;animation:blink 1.3s linear infinite}.message-operator.typing-indicator span:first-child{margin-left:4px}.message-operator.typing-indicator span:nth-child(2){animation-delay:-1.1s}.message-operator.typing-indicator span:nth-child(3){animation-delay:-0.9s}.message-operator .button-url{font-size:16px;line-height:19px;padding:8px 16px;text-align:center}.message-operator .button-url__anchor{text-decoration:none;color:#007dfc}.message-operator .button-url__anchor:hover{text-decoration:underline}@keyframes blink{0%,60%,100%{transform:initial}30%{transform:translateY(-5px)}}.bots-card-gallery-button-wrapper{position:relative;clear:both;width:100%;float:left}.bots-card-gallery-button-wrapper.bots-card-gallery-without-images .bots-card-gallery-scroll-button{top:22px}.bots-card-gallery-scroll-button{position:absolute;background:#fff;border-radius:50%;width:42px;height:42px;box-shadow:0 4px 12px 0 rgba(0,0,0,.24);z-index:3;top:140px;transition:box-shadow .2s,opacity .2s}.bots-card-gallery-scroll-button:hover{box-shadow:0 8px 12px 0 rgba(0,0,0,.24)}.bots-card-gallery-scroll-button.scroll-button-right{right:-18px}.bots-card-gallery-scroll-button.scroll-button-right svg{transform:rotate(-90deg)}.lang-rtl .bots-card-gallery-scroll-button.scroll-button-right svg{transform:rotate(90deg)}.bots-card-gallery-scroll-button.scroll-button-left{left:-18px}.bots-card-gallery-scroll-button.scroll-button-left svg{transform:rotate(90deg)}.lang-rtl .bots-card-gallery-scroll-button.scroll-button-left svg{transform:rotate(-90deg)}.bots-card-gallery-scroll-button svg{width:42px;height:42px}.message .emoji{margin:0 1px 0 2px;vertical-align:-5px}.messageTimestamp{bottom:-24px;font-size:12px;color:#8894ab;position:absolute;transition:all .2s;white-space:nowrap}.message-operator .messageTimestamp{height:23px;display:flex;align-items:center;top:calc(100% + 4px);left:12px}.message-visitor .messageTimestamp{right:12px}.shake{animation:shake .82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both}.pre-chat,.rate-comment,.always-online{max-width:95%}.pre-chat .field-wrapper,.rate-comment .field-wrapper,.always-online .field-wrapper{position:relative;left:0}.pre-chat .field-wrapper.field-wrapper-with-error input,.pre-chat .field-wrapper.field-wrapper-with-error textarea,.rate-comment .field-wrapper.field-wrapper-with-error input,.rate-comment .field-wrapper.field-wrapper-with-error textarea,.always-online .field-wrapper.field-wrapper-with-error input,.always-online .field-wrapper.field-wrapper-with-error textarea{border-color:#f6303a}.pre-chat svg,.rate-comment svg,.always-online svg{width:19px;height:19px;position:absolute;top:8px;fill:green;left:9px}.pre-chat svg#ic_arrow,.rate-comment svg#ic_arrow,.always-online svg#ic_arrow{fill:#349ef3;transform:rotate(45deg)}.pre-chat svg#ic_close,.rate-comment svg#ic_close,.always-online svg#ic_close{fill:red}.pre-chat input,.pre-chat textarea,.rate-comment input,.rate-comment textarea,.always-online input,.always-online textarea{display:block;width:100%;border:0;font-size:16px;padding:6px 7px 7px 35px;border-radius:5px;margin:10px 0 5px}.pre-chat input[type=checkbox],.pre-chat textarea[type=checkbox],.rate-comment input[type=checkbox],.rate-comment textarea[type=checkbox],.always-online input[type=checkbox],.always-online textarea[type=checkbox]{position:absolute;width:auto;display:inline-block;margin:0;top:9px;left:11px;padding:0}.mobile .firefox .pre-chat input[type=checkbox],.mobile .firefox .pre-chat textarea[type=checkbox],.mobile .firefox .rate-comment input[type=checkbox],.mobile .firefox .rate-comment textarea[type=checkbox],.mobile .firefox .always-online input[type=checkbox],.mobile .firefox .always-online textarea[type=checkbox]{outline:solid 1px rgba(108,125,159,.24)}.pre-chat label,.rate-comment label,.always-online label{font-size:12px;line-height:14px;text-align:justify;display:inline-block;min-height:24px;margin-left:5px;padding:10px 5px 0 31px}.pre-chat label a,.rate-comment label a,.always-online label a{word-break:break-all}.timestamp-avatar{width:23px;height:23px;position:absolute;top:0;background-position:center;background-size:cover;border-radius:25px;background-image:url(' + p + ');padding-left:23px;left:0}.timestamp-avatar+span{margin-left:30px}.timestamp-operator{margin-right:2px}.loader-icon.circular{animation:rotate 2s linear infinite;height:100%;transform-origin:center center;position:absolute;top:0;bottom:0;margin:0;left:10px;right:0}.loader-icon .path{stroke-dasharray:1,200;stroke-dashoffset:0;animation:dash 1.5s ease-in-out infinite;stroke-linecap:round}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}.message-upload{max-width:75%}.message-upload span{padding-left:25px}.message-upload #ic_download{position:absolute;top:50%;transform:translateY(-50%)}.message-upload.message-operator #ic_download{right:-35px}.message-upload.message-visitor #ic_download{left:-35px}.message-upload a{display:flex;justify-content:space-between;align-items:center}.message-upload a:hover>svg{opacity:1}.message-upload a>svg{opacity:0;fill:#bfc5d7}.message-upload.message-image{background:none;padding:0}.message-upload.message-image span{padding-left:0}.message-upload.message-image img{width:100%;border-radius:20px}.message-upload.message-file span{display:inline-block;word-break:break-all;padding-left:0}.message-upload.message-file a{color:inherit;text-decoration:none;display:inline-block;padding-left:35px}.message-upload.message-file a svg{position:absolute;top:50%;transform:translateY(-50%);left:17px}.attachment-img{background:#fff;color:#fff;border:none;outline:none}.history-button-wrapper{clear:both;width:100%;float:left}.history-button{margin:0 auto;display:flex;align-items:center;background:#fff;margin-bottom:20px;letter-spacing:-0.1px;text-align:center;font-size:12px;font-weight:600;color:#8894ab;border-radius:14px;border:solid 1px rgba(136,148,171,.24);padding-right:12px}.history-button svg{fill:#8894ab;width:19px;margin-right:5px}.history-button:hover{color:#2a7dfb}.history-button:hover svg{fill:#2a7dfb}@keyframes ripple{from{background:rgba(239,242,246,0);transform:scale(0.5)}50%{background:rgba(239,242,246,.6);transform:scale(1)}to{background:rgba(239,242,246,0);transform:scale(2)}}.mobile{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mobile button.material-icons.exit-chat.mobile-close{border-radius:50%;position:absolute;top:10px;right:20px;margin:0;padding:3px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);height:30px;width:30px;background:#fff;z-index:1}.mobile button.material-icons.exit-chat.mobile-close svg{fill:#000}.mobile .chat{width:100%;height:100%;bottom:0;background:#fff;display:flex;flex-direction:column;border-radius:0;right:0;left:auto;max-height:none}.mobile .input-group{align-self:flex-end}.mobile .input-group textarea{padding-right:50px}.mobile .input-group button,.mobile .input-group .button-url{margin-bottom:0}.mobile #conversation-group{max-height:none;flex:1 1 auto;overflow-y:scroll;-webkit-overflow-scrolling:touch}.mobile #button{width:80px;height:100px;bottom:0;transition:transform .2s;transform:translateY(-12px);/*! @noflip */right:0px;/*! @noflip */left:auto}.mobile #button.chat-open{right:0px;left:auto}.mobile #button.sidebar{width:50px}.mobile #button.chat-closed:not(.sidebar).mobile-size__small{transform:scale(0.6)}.mobile #button.chat-closed:not(.sidebar).mobile-size__medium{transform:scale(0.8)}.mobile #new-message{top:17px;right:13px}.mobile #new-message+#dnd-indicator{right:2px}.mobile #new-message.active{animation:shake .82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both}.mobile #dnd-indicator{top:17px;right:13px}.mobile button.ripple{touch-action:manipulation}.mobile button.ripple::after{content:"";position:absolute;height:50px;width:0px;top:calc(50% - 25px);background:rgba(239,242,246,0);border-radius:50%;z-index:-1;will-change:transform,opacity;left:calc(50% - 25px)}.mobile button.ripple:not(:active)::after{animation:ripple .3s ease-in-out;transition:width .3s step-end}.mobile button.ripple:active::after{width:50px;transition:width 0s step-start}.mobile .widget-position-left #button.chat-open{right:0;left:auto}.mobile .chat-header{padding:8px 22px 0px}.mobile .offline-message{margin-top:3px;padding:10px 28px 12px}.mobile .offline-message span{font-size:13px}.mobile .avatars-wrapper{width:42px;height:42px;margin:0px 14px 0 0}.mobile .chat h2 .top-heading{font-size:13px;margin-top:-1px}.mobile .chat h2.oneline{line-height:49px;height:54px}.awesome-iframe .onlyBubble #button,.awesome-iframe .bubbleWithLabel #button{height:94px;width:94px;bottom:0}.awesome-iframe .widget-position-left .widgetLabel{/*! @noflip */left:100px}.awesome-iframe .widget-position-left.bubbleWithLabel .widgetLabel{/*! @noflip */left:91px}.awesome-iframe .widget-position-right .widgetLabel{/*! @noflip */right:100px}.awesome-iframe .widget-position-right.bubbleWithLabel .widgetLabel{/*! @noflip */right:91px}.awesome-iframe .bubbleWithLabel .widgetLabel{bottom:26px}.awesome-iframe .widgetLabel{bottom:61px;transition-property:opacity;box-shadow:0 2px 20px 0 rgba(0,18,46,.18)}.awesome-iframe.mobile .chat+.chat-closed{bottom:0 !important}.awesome-iframe.mobile .flyMessage+.chat-closed{bottom:0 !important}.awesome-iframe [class*=chatSize] .chat-closed #dnd-indicator{transition:none}.awesome-iframe .onlyBubble #new-message,.awesome-iframe .onlyBubble #dnd-indicator,.awesome-iframe .bubbleWithLabel #new-message,.awesome-iframe .bubbleWithLabel #dnd-indicator{top:14px;right:14px;transition:none}.awesome-iframe .onlyBubble #new-message+#dnd-indicator,.awesome-iframe .bubbleWithLabel #new-message+#dnd-indicator{right:3px}.awesome-iframe .onlyBubbleLarge #new-message,.awesome-iframe .onlyBubbleLarge #dnd-indicator{top:14px;right:20px;transition:none}.awesome-iframe .onlyBubbleLarge #new-message+#dnd-indicator{right:10px}.awesome-iframe .onlyBubbleMedium #new-message,.awesome-iframe .onlyBubbleMedium #dnd-indicator{top:7px;transition:none}.awesome-iframe .onlyBubbleSmall #new-message,.awesome-iframe .onlyBubbleSmall #dnd-indicator{top:-3px;transition:none;right:3px}.awesome-iframe .onlyBubbleSmall #new-message+#dnd-indicator{right:-7px}.awesome-iframe .onlyBubbleSmall #button,.awesome-iframe .onlyBubbleMedium #button,.awesome-iframe .onlyBubbleLarge #button{transition:none;transform:translateY(0)}.awesome-iframe .onlyBubbleSmall #button{width:60px;height:60px}.awesome-iframe .onlyBubbleMedium #button{width:80px;height:80px}.awesome-iframe .onlyBubbleLarge #button{width:94px;height:94px}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}body,input,textarea,select,button{font-family:"Mulish",sans-serif;letter-spacing:-0.24px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#06132b}input::placeholder,textarea::placeholder{color:#8894ab;opacity:1}input:focus,input:active,textarea:focus,textarea:active,select:focus,select:active{border:0;outline:0}table{border-spacing:0}i{user-select:none}ul{list-style-type:none}.emoji{width:20px;margin:0 2px -5px 2px;user-select:none}.lang-rtl{/*! @noflip */direction:rtl;unicode-bidi:embed}.widget-position-left .chat,.widget-position-left .start-group{right:48px;left:auto}.mobile .widget-position-left .chat,.mobile .widget-position-left .start-group{/*! @noflip */right:0}.widget-position-left #button:not(.sidebar){/*! @noflip */left:0px;/*! @noflip */right:auto}.widget-position-left #button.bubbleAnimation-exit{right:0px;left:auto}.widget-position-left #button.chat-open{right:0px;left:auto}.mobile .widget-position-left #button.chat-open{right:0px;left:auto}@media print{.frame-content{display:none !important}}', "", {
                version: 3,
                sources: ["webpack://./src/styles/tempDuplicates.scss", "webpack://./src/components/WidgetBubble/WidgetBubble.scss", "webpack://./src/components/Chat/Chat.scss", "webpack://./src/components/WelcomeMessage/WelcomeMessage.scss", "webpack://./src/components/Modals/UserDataModal.scss", "webpack://./src/components/FlyMessage/FlyMessage.scss", "webpack://./src/components/WidgetLabel/WidgetLabel.scss", "webpack://./src/components/Animations/Animations.scss", "webpack://./src/components/Message/Message.scss", "webpack://./src/styles/mobile.scss", "webpack://./src/styles/awesomeIframe.scss", "webpack://./src/styles/global.scss"],
                names: [],
                mappings: "AAAA,mBAEI,WAAA,CACA,iBAAA,CACA,WAAA,CACA,kBAAA,CACA,mBAAA,CACA,yCAAA,CACA,eAAA,CACA,SAAA,CACA,UAAA,CACA,SAAA,CAEA,iCACI,yCAAA,CAEJ,iCACI,yCAAA,CAEJ,+CACI,yCAAA,CAEJ,qDACI,yCAAA,CAIR,SACI,QAAA,CACA,UAAA,CACA,cAAA,CACA,qBAAA,CACA,WAAA,CACA,gBAAA,CACA,iBAAA,CACA,uBAAA,CAGJ,iBACI,QAEI,yBAAA,CAGJ,QAEI,0BAAA,CAGJ,YAGI,yBAAA,CAGJ,QAEI,0BAAA,CAAA,CAIR,6BAEI,eAAA,CACA,QAAA,CACA,aAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,SAAA,CACA,gBAAA,CACA,YAAA,CACA,cAAA,CACA,yCAAA,CAEJ,wCACI,QAAA,CACA,SAAA,CAEJ,YACI,4BAAA,CChFJ,KACI,eAAA,CACA,QAAA,CAGJ,IACI,SAAA,CACA,8BAAA,CAGJ,QACI,iBAAA,CACA,WAAA,CACA,YAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,mBAAA,CACA,SAAA,CACA,aAAA,CACA,OAAA,CAGI,kCACI,iBAAA,CACA,UAAA,CACA,UAAA,CACA,WAAA,CAEJ,wCACI,UAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,wBAAA,CACA,UAAA,CAEJ,gDACI,iCAAA,CAIR,gCACI,OAAA,CACA,SAAA,CAKI,oCACI,SAAA,CAGR,iBACI,WAAA,CACA,UAAA,CACA,iBAAA,CACA,SAAA,CACA,8BAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,wBACI,SAAA,CAIA,2BACI,iBAAA,CAEJ,8BACI,UAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,kBAAA,CACA,eAAA,CACA,8BAAA,CACA,kBAAA,CAEJ,kCACI,UAAA,CACA,WAAA,CACA,sCACI,UAAA,CACA,WAAA,CACA,aAAA,CACA,eAAA,CAKZ,uBACI,UAAA,CACA,WAAA,CACA,2BACI,UAAA,CACA,WAAA,CACA,iBAAA,CACA,kBAAA,CAIR,4BACI,aAAA,CACA,2BAAA,CACA,mCACI,aAAA,CACA,uBAAA,CAIR,4BACI,aAAA,CACA,0BAAA,CACA,mCACI,aAAA,CACA,uBAAA,CASI,oIACI,oBAAA,CAKJ,0IACI,kBAAA,CAOJ,oIACI,kBAAA,CAUhB,8DACI,qBAAA,CAMI,oEACI,oBAAA,CAKJ,uEACI,kBAAA,CAOJ,oEACI,kBAAA,CAOpB,gBACI,UAAA,CACA,mBAAA,CACA,oBACI,UAAA,CACA,WAAA,CAGJ,uCACI,aAAA,CACA,MAAA,CACA,aAAA,CACA,UAAA,CAEA,wDACI,aAAA,CACA,yBAAA,CACA,aAAA,CACA,wBAAA,CACA,aAAA,CACA,MAAA,CACA,aAAA,CACA,UAAA,CACA,aAAA,CACA,8BAAA,CACA,aAAA,CACA,8BAAA,CACA,aAAA,CACA,qBAAA,CAGJ,oDACI,aAAA,CACA,QAAA,CAIR,iCAKI,kBAAA,CACA,UAAA,CACA,aAAA,CACA,qBAAA,CACA,cAAA,CACA,gBAAA,CACA,WAAA,CACA,eAAA,CACA,iBAAA,CACA,eAAA,CACA,aAAA,CACA,+BAAA,CACA,aAAA,CACA,6BAAA,CACA,aAAA,CACA,uBAAA,CACA,aAAA,CACA,0BAAA,CACA,iBAAA,CACA,QAAA,CACA,aAAA,CACA,OAAA,CACA,kBAAA,CACA,eAAA,CAEA,sCACI,oBAAA,CACA,wBAAA,CACA,eAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CAEJ,uCACI,cAAA,CAGR,6BACI,iBAAA,CACA,aAAA,CACA,SAAA,CACA,WAAA,CACA,UAAA,CACA,WAAA,CACA,yCAAA,CAGA,yBACI,UAAA,CACA,WAAA,CAGI,sCACI,UAAA,CACA,WAAA,CACA,kBAAA,CAKJ,mCACI,UAAA,CACA,WAAA,CAQxB,aACI,UAAA,CACA,WAAA,CACA,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CACA,sBAAA,CACA,yBAAA,CACA,8BAAA,CACA,iBAAA,CACA,aAAA,CAEA,qBACI,UAAA,CACA,kCAAA,CACA,iBAAA,CACA,QAAA,CACA,UAAA,CACA,WAAA,CACA,SAAA,CACA,SAAA,CACA,iBAAA,CACA,wBAAA,CAGJ,sBACI,kBAAA,CACA,aAAA,CACA,8BACI,SAAA,CAKJ,8FAEI,YAAA,CACA,kIACI,oBAAA,CAMhB,4BAEI,iBAAA,CACA,QAAA,CACA,eAAA,CACA,UAAA,CACA,UAAA,CACA,mBAAA,CACA,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CAGJ,aACI,cAAA,CACA,kBAAA,CACA,SAAA,CACA,aAAA,CAEA,4BACI,UAAA,CAGJ,oBACI,8DAAA,CAIR,eACI,kBAAA,CACA,SAAA,CAEA,mBACI,UAAA,CACA,WAAA,CAIR,sBACI,IACI,kBAAA,CACA,SAAA,CAEJ,KACI,kBAAA,CACA,SAAA,CAAA,CCnYR,QACI,mBAAA,CAEJ,MACI,4BAAA,CACA,YAAA,CACA,qBAAA,CAEJ,IACI,UAAA,CACA,WAAA,CAEJ,aACI,mBAAA,CACA,oDAAA,CACA,iBAAA,CACA,SAAA,CACA,aAAA,CAEA,0BACI,aAAA,CAEA,0CAAA,CAGJ,eACI,kBAAA,CACA,qBACI,oBAAA,CAKZ,0BACI,YAAA,CAGJ,iBACI,UAAA,CACA,WAAA,CACA,mBAAA,CACA,UAAA,CAGJ,oBACI,gBAAA,CAEJ,oBACI,YAAA,CAGJ,YACI,UAAA,CACA,WAAA,CACA,kBAAA,CACA,qBAAA,CACA,0BAAA,CACA,wDAAA,CACA,UAAA,CACA,oBACI,UAAA,CACA,WAAA,CACA,kBAAA,CAEJ,gCACI,UAAA,CACA,WAAA,CACA,gBAAA,CAGJ,gCACI,UAAA,CACA,WAAA,CACA,2CACI,gBAAA,CAGJ,4CACI,UAAA,CACA,UAAA,CACA,aAAA,CAEJ,kDACI,eAAA,CAIR,gCACI,UAAA,CACA,WAAA,CACA,8CACI,gBAAA,CAGJ,+CACI,eAAA,CAGR,wCACI,UAAA,CACA,WAAA,CAEJ,wCACI,UAAA,CACA,WAAA,CACA,oDACI,cAAA,CAGR,wCACI,UAAA,CACA,WAAA,CAEA,wDACI,cAAA,CAKZ,SACI,cAAA,CACA,eAAA,CACA,kBAAA,CACA,gBAAA,CACA,SAAA,CACA,oBAAA,CACA,iBAAA,CACA,4BAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CACA,qBAAA,CACA,gBACI,UAAA,CACA,WAAA,CAEJ,iBACI,YAAA,CACA,gBAAA,CACA,eAAA,CAEJ,kBACI,iBAAA,CAEJ,sBACI,cAAA,CACA,aAAA,CACA,gBAAA,CACA,cAAA,CAIR,eACI,iBAAA,CACA,UAAA,CACA,0BAAA,CACA,QAAA,CACA,cAAA,CACA,iBAAA,CACA,SAAA,CACA,UAAA,CACA,iBAAA,CACA,cAAA,CACA,SAAA,CACA,kCAAA,CACA,SAAA,CACA,8BACI,SAAA,CAIR,oBACI,cAAA,CACA,UAAA,CACA,YAAA,CACA,eAAA,CACA,iBAAA,CACA,uBAAA,CACA,eAAA,CACA,kBAAA,CACA,gBAAA,CACA,gBAAA,CAwEA,aAAA,CAtEA,6BACI,gCAAA,CACA,sBAAA,CAIA,aAAA,CACA,cAAA,CACA,uCACI,aAAA,CACA,iBAAA,CAIR,uCACI,iBAAA,CACA,YAAA,CACA,WAAA,CACA,UAAA,CACA,kBAAA,CACA,sBAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,SAAA,CAEA,4CACI,cAAA,CACA,eAAA,CACA,iBAAA,CACA,aAAA,CACA,eAAA,CAGJ,kDACI,YAAA,CACA,UAAA,CACA,WAAA,CACA,kBAAA,CACA,eAAA,CAIR,mCACI,WAAA,CACA,YAAA,CACA,iBAAA,CACA,gCAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA,CACA,2BAAA,CACA,iBAAA,CACA,SAAA,CAGJ,uCACI,UAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,gCAAA,CACA,SAAA,CACA,0BAAA,CAGJ,0CACI,MAAA,CAGR,sBACI,YAAA,CACA,eAAA,CACA,aAAA,CACA,gBAAA,CACA,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,0CACI,iBAAA,CAIR,UACI,iBAAA,CACA,uBAAA,CACA,eAAA,CACA,UAAA,CACA,mBAAA,CACA,UAAA,CAGJ,yCACI,UAAA,CACA,YAAA,CACA,iBAAA,CACA,SAAA,CACA,oBAAA,CAGJ,6CACI,SAAA,CACA,YAAA,CACA,kBAAA,CACA,SAAA,CACA,KAAA,CACA,iBAAA,CACA,iBAAA,CACA,cAAA,CACA,+EAAA,CACA,SAAA,CACA,gBAAA,CAIA,qEACI,WAAA,CAKJ,qEACI,WAAA,CACA,SAAA,CACA,QAAA,CAIR,GACI,QAAA,CACA,QAAA,CACA,+BAAA,CAKA,iCACI,kBAAA,CACA,aAAA,CAMJ,2CACI,iBAAA,CACA,SAAA,CACA,sBAAA,CACA,WAAA,CACA,mDACI,YAAA,CACA,wJAEI,iBAAA,CAIR,2DACI,UAAA,CACA,iBAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,UAAA,CACA,+BAAA,CACA,kBAAA,CACA,oBAAA,CACA,qBAAA,CAGA,2GACI,kBAAA,CAIJ,+DACI,iBAAA,CAEJ,mFACI,YAAA,CAIR,sJAEI,YAAA,CAGJ,0HAEI,aAAA,CACA,0JACI,yBAAA,CACA,YAAA,CAGJ,0IACI,iBAAA,CACA,UAAA,CACA,WAAA,CAGJ,0JACI,4BAAA,CAKA,ofACI,kBAAA,CAIZ,+DACI,iBAAA,CACA,+EACI,kBAAA,CAMhB,8CACI,iBAAA,CAEA,qDACI,UAAA,CACA,aAAA,CACA,iBAAA,CACA,OAAA,CACA,WAAA,CACA,WAAA,CACA,SAAA,CACA,kBAAA,CAIR,aACI,kBAAA,CACA,UAAA,CACA,iBAAA,CACA,eAAA,CACA,SAAA,CACA,aAAA,CAEA,qDACI,UAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CACA,SAAA,CACA,0BAAA,CAGJ,sEAEI,8BAAA,CACA,SAAA,CACA,uBAAA,CACA,oFACI,0BAAA,CACA,mBAAA,CACA,SAAA,CAKJ,iCACI,UAAA,CACA,WAAA,CAGA,uCACI,YAAA,CAEJ,2CACI,oCAAA,CAKZ,4BACI,WAAA,CACA,iBAAA,CACA,mCACI,UAAA,CACA,oBAAA,CAKZ,eACI,YAAA,CACA,iBAAA,CACA,eAAA,CACA,WAAA,CACA,WAAA,CACA,UAAA,CACA,SAAA,CAGJ,YACI,QAAA,CACA,iBAAA,CACA,qBAAA,CACA,WAAA,CACA,OAAA,CACA,wBACI,wBAAA,CAEJ,mBACI,YAAA,CAEJ,8BACI,cAAA,CACA,mCACI,cAAA,CAIZ,mBACI,iBAAA,CAIA,iCACI,YAAA,CAGA,qCACI,YAAA,CAKZ,iCACI,iBAAA,CACA,QAAA,CACA,eAAA,CACA,iBAAA,CACA,yCAAA,CACA,gBAAA,CACA,SAAA,CACA,8BAAA,CACA,UAAA,CAEA,uCACI,QAAA,CACA,SAAA,CAEA,6CACI,iBAAA,CACA,YAAA,CAEI,iGACI,YAAA,CAMhB,qDACI,gBAAA,CACA,YAAA,CACA,QAAA,CACA,gBAAA,CACA,aAAA,CACA,UAAA,CACA,iBAAA,CAII,0MACI,kBAAA,CAIR,mGAEI,YAAA,CACA,WAAA,CACA,UAAA,CAGJ,+DACI,gBAAA,CACA,aAAA,CAGJ,qEACI,YAAA,CAKZ,eAEI,QAAA,CACA,QAAA,CACA,2BAAA,CACA,gBAAA,CACA,eAAA,CACA,UAAA,CACA,UAAA,CACA,QAAA,CAEA,qCACI,QAAA,CAIA,qBACI,SAAA,CACA,0BACI,cAAA,CACA,gBAAA,CACA,YAAA,CACA,kBAAA,CACA,UAAA,CACA,8BACI,iBAAA,CAEJ,uCACI,kBAAA,CACA,aAAA,CAMZ,mCACI,aAAA,CACA,YAAA,CACA,kBAAA,CAEJ,kCACI,QAAA,CACA,iBAAA,CAKZ,iBACI,qBAAA,CACA,kBAAA,CACA,uBAAA,CACA,qBAAA,CACA,iBAAA,CACA,sCAAA,CACA,SAAA,CACA,+BACI,sBAAA,CACA,qCACI,UAAA,CACA,iBAAA,CACA,uBAAA,CACA,WAAA,CACA,SAAA,CACA,2DAAA,CACA,2BAAA,CACA,2BAAA,CACA,mCAAA,CACA,wBAAA,CACA,YAAA,CACA,aAAA,CACA,cAAA,CAIR,sBACI,SAAA,CACA,iBAAA,CACA,oBAAA,CACA,cAAA,CACA,6BACI,iBAAA,CACA,oCACI,UAAA,CACA,aAAA,CACA,SAAA,CACA,UAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,iBAAA,CACA,MAAA,CAMhB,yBACI,iBAAA,CAIA,oBACI,qBAAA,CACA,0BAAA,CACA,2BAAA,CAEJ,oDAEI,qBAAA,CACA,aAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,iBAAA,CACA,2BAAA,CAEJ,uBACI,kBAAA,CACA,UAAA,CACA,uBAAA,CACA,uCACI,UAAA,CAGR,6BACI,eAAA,CACA,UAAA,CACA,4BAAA,CACA,6CACI,UAAA,CAGR,iCACI,mBAAA,CAIR,2BACI,KACI,oBAAA,CAEJ,IACI,oBAAA,CAEJ,IACI,oBAAA,CAAA,CAIR,sBACI,KACI,SAAA,CACA,oBAAA,CAEJ,IACI,UAAA,CAEJ,IACI,oBAAA,CAEJ,IACI,UAAA,CACA,oBAAA,CAEJ,IACI,UAAA,CAEJ,IACI,UAAA,CACA,oBAAA,CAEJ,KACI,SAAA,CAAA,CAGR,yBACI,IACI,kBAAA,CAEJ,IACI,oBAAA,CAEJ,IACI,oBAAA,CAEJ,IACI,qBAAA,CAEJ,IACI,kBAAA,CAAA,CAIR,oBACI,GACI,oBAAA,CAEJ,KACI,kBAAA,CAAA,CAIR,mBACI,GACI,SAAA,CAEJ,KACI,SAAA,CAAA,CAKJ,uEAEI,UAAA,CAEJ,oCACI,UAAA,CCxyBR,aACI,YAAA,CACA,qBAAA,CAEA,wBACI,eAAA,CACA,cAAA,CACA,mBAAA,CACA,eAAA,CACA,oBAAA,CACA,iBAAA,CACA,2BAAA,CACA,gBAAA,CACA,oBAAA,CACA,oBAAA,CACA,wBAAA,CACA,iBAAA,CAEA,+BACI,UAAA,CACA,WAAA,CAIR,wBACI,YAAA,CACA,iBAAA,CACA,QAAA,CACA,qBAAA,CACA,wBAAA,CACA,UAAA,CACA,UAAA,CAEI,uCACI,SAAA,CAGA,iEACI,kCAAA,CAMhB,oBACI,UAAA,CACA,WAAA,CACA,kBAAA,CACA,qBAAA,CACA,0BAAA,CACA,wDAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,oCAAA,CACA,qBAAA,CACA,gCAAA,CAEA,yBACI,eAAA,CACA,eAAA,CACA,iBAAA,CACA,wCAAA,CACA,cAAA,CACA,iBAAA,CACA,SAAA,CACA,kBAAA,CACA,+BAAA,CACA,uBAAA,CACA,OAAA,CACA,0BAAA,CACA,aAAA,CAKJ,iCACI,iBAAA,CAGJ,qCACI,4BAAA,CACA,UAAA,CACA,WAAA,CACA,oBAAA,CACA,qBAAA,CAIR,0BACI,UAAA,CACA,eAAA,CACA,SAAA,CACA,iBAAA,CAEA,iCACI,aAAA,CACA,aAAA,CACA,UAAA,CACA,aAAA,CACA,eAAA,CACA,eAAA,CACA,cAAA,CACA,gCAAA,CACA,QAAA,CAIR,0BACI,SAAA,CAIR,QACI,UAAA,CACA,WAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,yBAAA,CACA,eAAA,CACA,WAAA,CACA,qBAAA,CAGJ,eACI,kBAAA,CACA,cAAA,CACA,iBAAA,CACA,gBAAA,CACA,iBAAA,CACA,iBAAA,CACA,mBAAA,CACA,SAAA,CCrIJ,iBACI,eAAA,CACA,WAAA,CACA,UAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,iBAAA,CACA,UAAA,CACA,iBAAA,CACA,wEAAA,CACA,gDAAA,CACA,2BAAA,CACA,8BAAA,CAEA,yCACI,UAAA,CACA,qBAAA,CACA,aAAA,CACA,iBAAA,CACA,SAAA,CACA,KAAA,CACA,WAAA,CACA,UAAA,CACA,yBAAA,CACA,2BAAA,CAGJ,wCACI,iBAAA,CACA,UAAA,CACA,QAAA,CAEA,qDACI,UAAA,CACA,WAAA,CACA,YAAA,CACA,eAAA,CACA,QAAA,CACA,SAAA,CAIR,gDACI,YAAA,CACA,qBAAA,CACA,YAAA,CACA,kBAAA,CAEA,oDACI,UAAA,CACA,WAAA,CAIR,2DAEI,cAAA,CAGJ,uCACI,cAAA,CACA,eAAA,CACA,iBAAA,CACA,aAAA,CACA,kBAAA,CAIA,mDACI,YAAA,CAEJ,6CACI,UAAA,CACA,WAAA,CAEJ,iGACI,sCAAA,CACA,cAAA,CACA,0BAAA,CACA,gBAAA,CACA,kBAAA,CAGJ,+CACI,gBAAA,CACA,eAAA,CACA,mBAAA,CACA,qDACI,eAAA,CACA,cAAA,CAEJ,oDACI,cAAA,CACA,kBAAA,CACA,aAAA,CACA,gBAAA,CACA,aAAA,CACA,eAAA,CACA,sDACI,aAAA,CAMhB,yCACI,UAAA,CACA,WAAA,CACA,cAAA,CACA,eAAA,CACA,UAAA,CACA,iBAAA,CACA,mDAAA,CACA,aAAA,CACA,iBAAA,CAEA,gDACI,yBAAA,CACA,UAAA,CACA,iBAAA,CACA,wBAAA,CACA,MAAA,CACA,KAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CAGA,sDACI,0BAAA,CAKZ,4CACI,iBAAA,CACA,kBAAA,CACA,kBAAA,CACA,sEACI,UAAA,CACA,WAAA,CACA,kBAAA,CACA,qBAAA,CACA,0BAAA,CACA,oBAAA,CACA,wDAAA,CACA,gBAAA,CAIR,wBACI,QAAA,CCxJR,YACI,qBAAA,CACA,cAAA,CACA,eAAA,CACA,iBAAA,CACA,WAAA,CACA,kBAAA,CACA,yCAAA,CACA,YAAA,CACA,qBAAA,CACA,SAAA,CACA,4BAAA,CAKA,UAAA,CACA,gBAAA,CAJA,6BACI,yCAAA,CAIJ,wCACI,SAAA,CACA,yBAAA,CAEJ,oBACI,kCAAA,CACA,iCACI,8BAAA,CACA,eAAA,CAGR,kCACI,iBAAA,CACA,WAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CACA,kBAAA,CACA,0BAAA,CACA,MAAA,CACA,0CACI,SAAA,CACA,WAAA,CACA,UAAA,CACA,WAAA,CACA,KAAA,CACA,uBAAA,CACA,UAAA,CACA,SAAA,CACA,2BAAA,CAEJ,+EACI,iBAAA,CACA,KAAA,CACA,iBAAA,CACA,QAAA,CACA,WAAA,CACA,8DAAA,CACA,WAAA,CACA,UAAA,CACA,YAAA,CACA,eAAA,CACA,SAAA,CACA,4FACI,UAAA,CACA,WAAA,CACA,YAAA,CAEJ,sFACI,YAAA,CAIZ,yBACI,sBAAA,CAEJ,yCACI,iBAAA,CACA,KAAA,CACA,UAAA,CACA,6CACI,UAAA,CACA,WAAA,CAEJ,sDACI,UAAA,CACA,WAAA,CACA,oBAAA,CAGR,2BACI,WAAA,CACA,SAAA,CACA,UAAA,CACA,iBAAA,CACA,sCAAA,CACA,SAAA,CACA,UAAA,CAEJ,iDACI,wBAAA,CACA,eAAA,CACA,iBAAA,CACA,gBAAA,CACA,eAAA,CACA,cAAA,CACA,cAAA,CACA,aAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CACA,4EAEI,kBAAA,CAEJ,mEAEI,kBAAA,CAEJ,uEAEI,kBAAA,CAEJ,kEAEI,kBAAA,CAGR,kCACI,gBAAA,CAEJ,+BACI,cAAA,CACA,eAAA,CACA,cAAA,CACA,eAAA,CACA,iBAAA,CACA,oBAAA,CACA,eAAA,CACA,eAAA,CACA,oBAAA,CACA,kBAAA,CACA,kCACI,oBAAA,CAEJ,kCACI,uBAAA,CAEJ,oEAEI,aAAA,CACA,iBAAA,CAEJ,kCACI,gBAAA,CACA,iBAAA,CAEJ,6CACI,iBAAA,CACA,cAAA,CACA,eAAA,CACA,oDACI,UAAA,CACA,YAAA,CACA,UAAA,CACA,eAAA,CACA,qBAAA,CACA,mEACI,qBAAA,CACA,2BAAA,CACA,0BAAA,CACA,iBAAA,CACA,WAAA,CAGR,kDACI,oBAAA,CACA,eAAA,CAGR,uCACI,UAAA,CACA,cAAA,CACA,kBAAA,CACA,qDACI,cAAA,CACA,eAAA,CACA,4DACI,YAAA,CACA,cAAA,CAIZ,qCACI,UAAA,CACA,+BAAA,CACA,aAAA,CACA,iBAAA,CACA,QAAA,CACA,uBAAA,CACA,6CACI,uBAAA,CAKZ,4BACI,UAAA,CACA,YAAA,CACA,cAAA,CACA,oCACI,qBAAA,CACA,sBAAA,CAEJ,2EAEI,cAAA,CACA,aAAA,CACA,eAAA,CACA,gBAAA,CACA,cAAA,CACA,iBAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CACA,qCAAA,CACA,2BAAA,CAIA,iBAAA,CACA,eAAA,CAJA,uFACI,oBAAA,CAIJ,2FACI,cAAA,CACA,aAAA,CACA,aAAA,CAEJ,yFACI,kBAAA,CAGR,gDACI,aAAA,CACA,oBAAA,CAEJ,0CACI,wBAAA,CACA,kBAAA,CACA,gBAAA,CACA,eAAA,CACA,iBAAA,CACA,kDACI,qBAAA,CACA,gBAAA,CACA,YAAA,CAGJ,8CACI,uBAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CCnQhB,aACI,iBAAA,CACA,WAAA,CACA,WAAA,CACA,SAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CAWA,kBAAA,CACA,iBAAA,CACA,yCAAA,CACA,eAAA,CAZA,mCACI,aAAA,CACA,UAAA,CAEJ,oCACI,aAAA,CACA,WAAA,CCfR,oBACI,WAAA,CACA,QAAA,CACA,8CACI,SAAA,CACA,QAAA,CAIR,mBACI,SAAA,CACA,QAAA,CACA,4CACI,WAAA,CACA,QAAA,CAIR,oBACI,SAAA,CACA,2BAAA,CACA,8CACI,SAAA,CACA,2BAAA,CAGR,qBACI,SAAA,CACA,2BAAA,CACA,gDACI,SAAA,CACA,2BAAA,CAGR,mBACI,SAAA,CACA,2BAAA,CACA,4CACI,SAAA,CACA,2BAAA,CAIR,YACI,WAAA,CACA,8BACI,kBAAA,CACA,SAAA,CAIR,WACI,SAAA,CACA,kBAAA,CACA,4BACI,WAAA,CAIR,eACI,WAAA,CACA,oCACI,sBAAA,CACA,SAAA,CAIR,cACI,SAAA,CACA,sBAAA,CACA,kCACI,WAAA,CAIR,iBACI,WAAA,CACA,wBAAA,CACA,wCACI,SAAA,CACA,WAAA,CACA,kBAAA,CAIR,gBACI,SAAA,CACA,WAAA,CACA,kBAAA,CACA,sCACI,WAAA,CACA,wBAAA,CAIR,aACI,qBAAA,CACA,SAAA,CACA,gCACI,kBAAA,CACA,SAAA,CAIR,YACI,kBAAA,CACA,SAAA,CACA,8BACI,qBAAA,CACA,SAAA,CAIR,gBACI,kBAAA,CACA,uCACI,aAAA,CACA,UAAA,CACA,WAAA,CAEJ,8CACI,SAAA,CACA,aAAA,CACA,OAAA,CAGJ,sCACI,aAAA,CACA,UAAA,CACA,WAAA,CAEJ,6CACI,SAAA,CACA,aAAA,CACA,OAAA,CAGJ,qCACI,SAAA,CACA,aAAA,CACA,OAAA,CAEJ,4CACI,aAAA,CACA,UAAA,CACA,WAAA,CAIJ,6CACI,UAAA,CACA,WAAA,CAEA,2EACI,SAAA,CACA,OAAA,CACA,kBAAA,CAIR,4CACI,UAAA,CACA,WAAA,CACA,yEACI,SAAA,CACA,OAAA,CACA,kBAAA,CAIR,2CACI,SAAA,CACA,OAAA,CAIA,kBAAA,CAHA,qDACI,YAAA,CAGJ,uEACI,UAAA,CACA,WAAA,CAKR,mEACI,SAAA,CACA,WAAA,CAEA,iGACI,SAAA,CACA,SAAA,CACA,kBAAA,CAIR,kEACI,SAAA,CACA,WAAA,CACA,+FACI,SAAA,CACA,SAAA,CACA,kBAAA,CAIR,iEACI,SAAA,CACA,SAAA,CACA,kBAAA,CACA,6FACI,SAAA,CACA,WAAA,CAIJ,2EACI,SAAA,CACA,WAAA,CAEA,yGACI,SAAA,CACA,SAAA,CACA,kBAAA,CAIR,0EACI,SAAA,CACA,WAAA,CACA,uGACI,SAAA,CACA,SAAA,CACA,kBAAA,CAIR,yEACI,YAAA,CAEJ,sFACI,YAAA,CAMR,yEACI,aAAA,CACA,QAAA,CACA,WAAA,CAEA,6GACI,SAAA,CACA,aAAA,CACA,QAAA,CACA,kBAAA,CAIR,wEACI,aAAA,CACA,QAAA,CACA,WAAA,CACA,2GACI,aAAA,CACA,QAAA,CACA,SAAA,CACA,kBAAA,CAIR,uEACI,SAAA,CACA,aAAA,CACA,QAAA,CACA,kBAAA,CACA,yGACI,aAAA,CACA,QAAA,CACA,WAAA,CAMJ,+EACI,YAAA,CAKZ,uCACI,kBAAA,CACA,gEACI,SAAA,CACA,aAAA,CACA,QAAA,CAEJ,uEACI,aAAA,CACA,SAAA,CACA,WAAA,CAEJ,kEACI,aAAA,CACA,SAAA,CACA,WAAA,CAEJ,yEACI,SAAA,CACA,aAAA,CACA,QAAA,CAGJ,iEACI,aAAA,CACA,SAAA,CACA,WAAA,CAEJ,wEACI,SAAA,CACA,aAAA,CACA,QAAA,CAIR,sBACI,UAAA,CACA,WAAA,CAEA,kDACI,SAAA,CACA,UAAA,CACA,kBAAA,CAIR,qBACI,UAAA,CACA,WAAA,CACA,gDACI,SAAA,CACA,UAAA,CACA,kBAAA,CAIR,oBACI,SAAA,CACA,UAAA,CACA,kBAAA,CACA,8CACI,UAAA,CACA,WAAA,CAIR,2BACI,aAAA,CACA,UAAA,CACA,WAAA,CACA,4DACI,SAAA,CACA,aAAA,CACA,WAAA,CACA,kBAAA,CAIR,0BACI,aAAA,CACA,UAAA,CACA,WAAA,CACA,0DACI,SAAA,CACA,aAAA,CACA,WAAA,CACA,kBAAA,CAIR,yBACI,SAAA,CACA,aAAA,CACA,WAAA,CACA,kBAAA,CACA,wDACI,aAAA,CACA,UAAA,CACA,WAAA,CAIR,0BACI,aAAA,CACA,SAAA,CACA,WAAA,CACA,0DACI,SAAA,CACA,aAAA,CACA,UAAA,CACA,kBAAA,CAIR,yBACI,aAAA,CACA,SAAA,CACA,WAAA,CACA,wDACI,SAAA,CACA,aAAA,CACA,UAAA,CACA,kBAAA,CAIR,wBACI,SAAA,CACA,aAAA,CACA,UAAA,CACA,kBAAA,CACA,sDACI,aAAA,CACA,SAAA,CACA,WAAA,CAKJ,mEACI,UAAA,CACA,SAAA,CACA,WAAA,CAEA,+FACI,SAAA,CACA,UAAA,CACA,SAAA,CACA,kBAAA,CAIR,kEACI,UAAA,CACA,SAAA,CACA,WAAA,CACA,6FACI,SAAA,CACA,UAAA,CACA,SAAA,CACA,kBAAA,CAIR,iEACI,SAAA,CACA,UAAA,CACA,SAAA,CACA,kBAAA,CACA,2FACI,UAAA,CACA,SAAA,CACA,WAAA,CAKZ,yBACI,UAAA,CACA,WAAA,CAEA,wDACI,SAAA,CACA,UAAA,CACA,kBAAA,CAIR,wBACI,UAAA,CACA,WAAA,CACA,sDACI,SAAA,CACA,UAAA,CACA,kBAAA,CAIR,uBACI,SAAA,CACA,UAAA,CACA,kBAAA,CACA,oDACI,UAAA,CACA,WAAA,CAIR,sBACI,WAAA,CACA,0BAAA,CACA,kDACI,yBAAA,CACA,kBAAA,CACA,SAAA,CAIR,qBACI,YAAA,CC9fJ,SACI,iBAAA,CACA,kBAAA,CACA,YAAA,CACA,cAAA,CACA,gBAAA,CACA,oBAAA,CACA,oBAAA,CACA,aAAA,CACA,UAAA,CACA,iBAAA,CACA,kCAAA,CACA,2BACI,kBAAA,CAEJ,wBACI,kBAAA,CAEJ,8BACI,oBAAA,CAGA,6BACI,oBAAA,CAEJ,6BACI,uBAAA,CAEJ,0DAEI,aAAA,CACA,iBAAA,CAEJ,6BACI,gBAAA,CACA,iBAAA,CAKZ,2EAEI,eAAA,CAGJ,iBACI,UAAA,CACA,oDAAA,CACA,WAAA,CAEA,mCACI,cAAA,CAEJ,wBACI,kBAAA,CAEJ,+BACI,wBAAA,CACA,eAAA,CACA,aAAA,CACA,kBAAA,CACA,kBAAA,CACA,iBAAA,CACA,+CACI,iBAAA,CACA,YAAA,CACA,cAAA,CACA,OAAA,CAIZ,kBACI,aAAA,CACA,kBAAA,CACA,UAAA,CAEA,+BACI,UAAA,CACA,cAAA,CACA,YAAA,CAGJ,yBACI,aAAA,CAEJ,mCACI,cAAA,CAEJ,oHAGI,cAAA,CACA,eAAA,CACA,gBAAA,CACA,aAAA,CAEA,iKACI,mBAAA,CAEJ,mIACI,cAAA,CACA,oBAAA,CACA,qBAAA,CAEJ,oKACI,eAAA,CACA,UAAA,CACA,eAAA,CACA,wBAAA,CACA,8BAAA,CACA,+BAAA,CACA,YAAA,CACA,iBAAA,CAGJ,2JACI,YAAA,CACA,sBAAA,CACA,2CAAA,CACA,gBAAA,CACA,8BAAA,CACA,+BAAA,CACA,cAAA,CACA,YAAA,CAEA,uKACI,YAAA,CACA,UAAA,CACA,WAAA,CAGJ,6KACI,wBAAA,CAIR,iSAEI,aAAA,CACA,cAAA,CACA,aAAA,CACA,cAAA,CACA,gBAAA,CACA,gBAAA,CACA,+BAAA,CACA,aAAA,CACA,wBAAA,CACA,iBAAA,CACA,SAAA,CACA,YAAA,CACA,qBAAA,CACA,qUACI,yBAAA,CAMR,gPAEI,eAAA,CAGR,qCACI,SAAA,CACA,qBAAA,CACA,YAAA,CACA,WAAA,CAEA,qDACI,YAAA,CACA,YAAA,CACA,cAAA,CACA,wBAAA,CACA,UAAA,CACA,WAAA,CAEJ,4CACI,cAAA,CACA,iBAAA,CACA,gBAAA,CACA,kBAAA,CACA,UAAA,CACA,iBAAA,CAEJ,0CACI,eAAA,CACA,eAAA,CAEA,qDACI,mBAAA,CACA,2BAAA,CACA,oBAAA,CAIZ,oCAEI,cAAA,CACA,2BAAA,CACA,wBAAA,CACA,aAAA,CACA,eAAA,CACA,YAAA,CACA,4BAAA,CACA,mBAR2B,CAS3B,sBAAA,CACA,iBAAA,CACA,oBAAA,CACA,iBAAA,CACA,8CACI,gCAAA,CAEJ,4CACI,4BAAA,CACA,sDAEI,qBAAA,CAIR,kEACI,aAAA,CACA,gBAAA,CACA,iBAAA,CACA,UAAA,CAEA,wEACI,eAAA,CACA,WAAA,CAMA,sFACI,eAAA,CACA,kBAxCe,CA6C3B,0CACI,cAAA,CACA,eAAA,CACA,wBAAA,CACA,iBAAA,CAEA,gEACI,oBAAA,CACA,wBAAA,CACA,eAAA,CAEA,kEACI,oBAAA,CACA,aAAA,CACA,mSAII,aAAA,CACA,YAAA,CAEJ,wEACI,yBAAA,CAIZ,sDACI,2BAAA,CACA,YAAA,CACA,uCAAA,CACA,qBAAA,CACA,wBAAA,CACA,eAAA,CAEJ,sDACI,cAAA,CACA,gBAAA,CACA,gBAAA,CACA,aAAA,CAEJ,yDACI,cAAA,CACA,kBAAA,CACA,cAAA,CACA,aAAA,CACA,oBAAA,CAEA,gEACI,UAAA,CACA,mBAAA,CAGR,oDACI,cAAA,CACA,gBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CACA,aAAA,CACA,sDACI,UAAA,CAKJ,wEACI,QAAA,CAEA,+EACI,YAAA,CAEJ,+EACI,UAAA,CAOZ,2FACI,2BAAA,CACA,4BAAA,CAIZ,kCACI,SAAA,CACA,aAAA,CACA,wDACI,cAAA,CACA,6DACI,oBAAA,CACA,gBAAA,CACA,oBAAA,CAIZ,sCACI,sBAAA,CACA,UAAA,CAEJ,gCACI,wBAAA,CACA,0BAAA,CACA,kBAAA,CACA,iBAAA,CACA,+CACI,WAAA,CACA,UAAA,CACA,QAAA,CACA,iBAAA,CACA,QAAA,CACA,eAAA,CACA,UAAA,CAGR,mCACI,eAAA,CACA,wCACI,UAAA,CACA,SAAA,CACA,qBAAA,CACA,qBAAA,CACA,oBAAA,CACA,iBAAA,CACA,UAAA,CACA,oCAAA,CACA,oDACI,eAAA,CAEJ,qDACI,qBAAA,CAEJ,qDACI,qBAAA,CAKZ,8BACI,cAAA,CACA,gBAAA,CACA,gBAAA,CACA,iBAAA,CAEJ,sCACI,oBAAA,CACA,aAAA,CAEA,4CACI,yBAAA,CAIR,iBACI,YAGI,iBAAA,CAGJ,IACI,0BAAA,CAAA,CAKZ,kCACI,iBAAA,CACA,UAAA,CACA,UAAA,CACA,UAAA,CAGI,oGACI,QAAA,CAKZ,iCACI,iBAAA,CACA,eAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,uCAAA,CACA,SAAA,CACA,SAAA,CACA,qCAAA,CACA,uCACI,uCAAA,CAGJ,qDACI,WAAA,CACA,yDACI,wBAAA,CACA,mEACI,uBAAA,CAKZ,oDACI,UAAA,CACA,wDACI,uBAAA,CACA,kEACI,wBAAA,CAKZ,qCACI,UAAA,CACA,WAAA,CAGR,gBACI,kBAAA,CACA,mBAAA,CAGJ,kBACI,YAAA,CACA,cAAA,CACA,aAAA,CACA,iBAAA,CACA,kBAAA,CACA,kBAAA,CAEA,oCACI,WAAA,CACA,YAAA,CACA,kBAAA,CACA,oBAAA,CACA,SAAA,CAEJ,mCACI,UAAA,CAIR,OACI,8DAAA,CAGJ,uCAGI,aAAA,CACA,oFACI,iBAAA,CACA,MAAA,CAEI,2WAEI,oBAAA,CAIZ,mDACI,UAAA,CACA,WAAA,CACA,iBAAA,CACA,OAAA,CACA,UAAA,CACA,QAAA,CAEA,8EACI,YAAA,CACA,uBAAA,CAEJ,8EACI,QAAA,CAIR,2HAEI,aAAA,CACA,UAAA,CACA,QAAA,CACA,cAAA,CACA,wBAAA,CACA,iBAAA,CACA,iBAAA,CAEA,qNACI,iBAAA,CACA,UAAA,CACA,oBAAA,CACA,QAAA,CACA,OAAA,CACA,SAAA,CACA,SAAA,CACA,2TACI,uCAAA,CAIZ,yDACI,cAAA,CACA,gBAAA,CACA,kBAAA,CACA,oBAAA,CACA,eAAA,CACA,eAAA,CACA,uBAAA,CACA,+DACI,oBAAA,CAKZ,kBACI,UAAA,CACA,WAAA,CACA,iBAAA,CACA,KAAA,CACA,0BAAA,CACA,qBAAA,CACA,kBAAA,CACA,wDAAA,CACA,iBAAA,CACA,MAAA,CAEA,uBACI,gBAAA,CAGR,oBACI,gBAAA,CAIA,sBACI,mCAAA,CACA,WAAA,CACA,8BAAA,CACA,iBAAA,CACA,KAAA,CACA,QAAA,CACA,QAAA,CACA,SAAA,CACA,OAAA,CAGJ,mBACI,sBAAA,CACA,mBAAA,CACA,wCAAA,CACA,oBAAA,CAGJ,kBACI,KACI,wBAAA,CAAA,CAIR,gBACI,GACI,sBAAA,CACA,mBAAA,CAEJ,IACI,uBAAA,CACA,uBAAA,CAEJ,KACI,uBAAA,CACA,wBAAA,CAAA,CAKZ,gBACI,aAAA,CACA,qBACI,iBAAA,CAEJ,6BACI,iBAAA,CACA,OAAA,CACA,0BAAA,CAIA,8CACI,WAAA,CAIJ,6CACI,UAAA,CAGR,kBACI,YAAA,CACA,6BAAA,CACA,kBAAA,CAEA,4BACI,SAAA,CAEJ,sBACI,SAAA,CACA,YAAA,CAGR,8BAII,eAAA,CACA,SAAA,CAJA,mCACI,cAAA,CAKJ,kCACI,UAAA,CACA,kBAAA,CAIJ,kCACI,oBAAA,CACA,oBAAA,CACA,cAAA,CAEJ,+BACI,aAAA,CACA,oBAAA,CACA,oBAAA,CACA,iBAAA,CACA,mCACI,iBAAA,CACA,OAAA,CACA,0BAAA,CACA,SAAA,CAKhB,gBACI,eAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CAGJ,wBACI,UAAA,CACA,UAAA,CACA,UAAA,CAGJ,gBACI,aAAA,CACA,YAAA,CACA,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,qBAAA,CACA,iBAAA,CACA,cAAA,CACA,eAAA,CACA,aAAA,CACA,kBAAA,CACA,sCAAA,CACA,kBAAA,CAEA,oBACI,YAAA,CACA,UAAA,CACA,gBAAA,CAGJ,sBACI,aAAA,CACA,0BACI,YAAA,CCntBZ,kBACI,KACI,8BAAA,CACA,oBAAA,CAEJ,IACI,+BAAA,CACA,kBAAA,CAEJ,GACI,8BAAA,CACA,kBAAA,CAAA,CAIR,QACI,yCAAA,CACA,qDACI,iBAAA,CACA,iBAAA,CACA,QAAA,CACA,UAAA,CACA,QAAA,CACA,WAAA,CACA,8DAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,SAAA,CACA,yDACI,SAAA,CAGR,cACI,UAAA,CACA,WAAA,CACA,QAAA,CACA,eAAA,CACA,YAAA,CACA,qBAAA,CACA,eAAA,CACA,OAAA,CACA,SAAA,CACA,eAAA,CAEJ,qBACI,mBAAA,CACA,8BACI,kBAAA,CAEJ,6DAEI,eAAA,CAGR,4BACI,eAAA,CACA,aAAA,CACA,iBAAA,CACA,gCAAA,CAEJ,gBACI,UAAA,CACA,YAAA,CACA,QAAA,CACA,wBAAA,CACA,2BAAA,CAKA,aAAA,CACA,SAAA,CACA,aAAA,CACA,SAAA,CAPA,0BACI,SAAA,CACA,SAAA,CAMJ,wBACI,UAAA,CAII,6DACI,oBAAA,CAEJ,8DACI,oBAAA,CAMhB,qBACI,QAAA,CACA,UAAA,CACA,oCACI,SAAA,CAEJ,4BACI,8DAAA,CAIR,uBACI,QAAA,CACA,UAAA,CAGJ,sBACI,yBAAA,CACA,6BACI,UAAA,CACA,iBAAA,CACA,WAAA,CACA,SAAA,CACA,oBAAA,CACA,8BAAA,CACA,iBAAA,CACA,UAAA,CACA,6BAAA,CACA,qBAAA,CAGJ,0CACI,gCAAA,CACA,6BAAA,CAGJ,oCACI,UAAA,CACA,8BAAA,CAGR,gDACI,OAAA,CACA,SAAA,CAGJ,qBACI,oBAAA,CAEJ,yBACI,cAAA,CACA,sBAAA,CACA,8BACI,cAAA,CAGR,yBACI,UAAA,CACA,WAAA,CACA,mBAAA,CAIA,8BACI,cAAA,CACA,eAAA,CAEJ,yBACI,gBAAA,CACA,WAAA,CC5JJ,6EACI,WAAA,CACA,UAAA,CACA,QAAA,CAKJ,mDACI,aAAA,CACA,UAAA,CAGJ,mEACI,aAAA,CACA,SAAA,CAKJ,oDACI,aAAA,CACA,WAAA,CAGJ,oEACI,aAAA,CACA,UAAA,CAIR,8CACI,WAAA,CAGJ,6BACI,WAAA,CACA,2BAAA,CACA,yCAAA,CAIA,0CACI,mBAAA,CAGJ,gDACI,mBAAA,CAIR,8DACI,eAAA,CAKA,kLAEI,QAAA,CACA,UAAA,CACA,eAAA,CAGJ,qHACI,SAAA,CAKJ,8FAEI,QAAA,CACA,UAAA,CACA,eAAA,CAGJ,6DACI,UAAA,CAKJ,gGAEI,OAAA,CACA,eAAA,CAKJ,8FAEI,QAAA,CACA,eAAA,CACA,SAAA,CAGJ,6DACI,UAAA,CAOJ,4HACI,eAAA,CACA,uBAAA,CAIR,yCACI,UAAA,CACA,WAAA,CAGJ,0CACI,UAAA,CACA,WAAA,CAGJ,yCACI,UAAA,CACA,WAAA,CC/HR,KACI,qBAAA,CAEJ,mBAGI,kBAAA,CAGJ,kCAKI,+BAAA,CACA,sBAAA,CACA,kCAAA,CACA,iCAAA,CACA,aAAA,CAGJ,yCAEI,aAAA,CACA,SAAA,CAGJ,mFAMI,QAAA,CACA,SAAA,CAGJ,MACI,gBAAA,CAGJ,EACI,gBAAA,CAGJ,GACI,oBAAA,CAGJ,OACI,UAAA,CACA,qBAAA,CACA,gBAAA,CAGJ,UACI,aAAA,CACA,aAAA,CACA,kBAAA,CAIA,+DAEI,UAAA,CACA,SAAA,CACA,+EACI,aAAA,CACA,OAAA,CAIJ,4CACI,aAAA,CACA,QAAA,CACA,aAAA,CACA,UAAA,CAEJ,mDACI,SAAA,CACA,SAAA,CAEJ,wCACI,SAAA,CACA,SAAA,CACA,gDACI,SAAA,CACA,SAAA,CAMhB,aACI,eACI,uBAAA,CAAA",
                sourcesContent: [".chat,\n.start-group {\n    width: 372px;\n    position: absolute;\n    bottom: 26px;\n    border-radius: 16px;\n    pointer-events: auto;\n    box-shadow: 0 8px 22px 0 rgba(0, 18, 46, 0.16);\n    overflow: hidden;\n    z-index: 1;\n    right: 48px;\n    left: auto;\n\n    &.chrome {\n        box-shadow: 0 8px 36px 0 rgba(0, 18, 46, 0.16);\n    }\n    &.safari {\n        box-shadow: 0 8px 30px 0 rgba(0, 18, 46, 0.16);\n    }\n    .chat-on-site & {\n        box-shadow: 0 8px 26px 0 rgba(0, 18, 46, 0.16);\n    }\n    .chat-in-preview & {\n        box-shadow: 0 8px 18px 0 rgba(0, 18, 46, 0.16);\n    }\n}\n\ntextarea {\n    border: 0;\n    width: 100%;\n    font-size: 17px;\n    padding: 20px 0 14px 0;\n    resize: none;\n    line-height: 24px;\n    overflow-x: hidden;\n    -ms-overflow-style: none;\n}\n\n@keyframes shake {\n    10%,\n    90% {\n        transform: translateX(1px);\n    }\n\n    20%,\n    80% {\n        transform: translateX(-1px);\n    }\n\n    30%,\n    50%,\n    70% {\n        transform: translateX(2px);\n    }\n\n    40%,\n    60% {\n        transform: translateX(-2px);\n    }\n}\n\nbutton,\nbutton.material-icons {\n    background: none;\n    border: 0;\n    color: inherit;\n    font: inherit;\n    line-height: normal;\n    overflow: visible;\n    padding: 0;\n    user-select: none;\n    outline: none;\n    cursor: pointer;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbutton.material-icons::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\nbutton.link {\n    border-bottom: 1px solid #444;\n}\n", "body {\n    overflow: hidden;\n    margin: 0;\n}\n\nsvg {\n    fill: #fff;\n    transition: all 0.2s ease-in-out;\n}\n\n#button {\n    position: absolute;\n    width: 112px;\n    height: 140px;\n    bottom: 12px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    pointer-events: none;\n    z-index: 1;\n    /*! @noflip */\n    right: 0;\n\n    &:not(.sidebar) {\n        .buttonWave {\n            position: absolute;\n            z-index: -1;\n            width: 60px;\n            height: 60px;\n        }\n        .buttonWave:after {\n            content: '';\n            position: absolute;\n            width: 60px;\n            height: 60px;\n            border-radius: 50%;\n            background-color: #147fff;\n            opacity: 0.5;\n        }\n        &.clicked .buttonWave:after {\n            animation: buttonWave 0.5s ease-out;\n        }\n    }\n\n    &.chat-open:not(.sidebar) {\n        right: 0;\n        left: auto;\n    }\n\n    button {\n        &.disabled {\n            i.type1 svg {\n                fill: #fff;\n            }\n        }\n        i {\n            height: 26px;\n            width: 26px;\n            position: absolute;\n            opacity: 0;\n            transition: all 0.2s ease-in-out;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            &.active {\n                opacity: 1;\n            }\n\n            &.type1 {\n                svg {\n                    fill: currentColor;\n                }\n                &::after {\n                    content: '';\n                    position: absolute;\n                    width: 68px;\n                    height: 68px;\n                    border-radius: 32px;\n                    background: #fff;\n                    transition: all 0.2s ease-in-out;\n                    transform: scale(0);\n                }\n                &.for-opened {\n                    width: 31px;\n                    height: 28px;\n                    svg {\n                        width: 28px;\n                        height: 28px;\n                        /*! @noflip */\n                        margin-left: 3px;\n                    }\n                }\n            }\n\n            &.type2 {\n                width: 32px;\n                height: 32px;\n                svg {\n                    width: 32px;\n                    height: 32px;\n                    fill: currentColor;\n                    transform: scale(0);\n                }\n            }\n\n            &.for-closed {\n                /*! @noflip */\n                transform: translateX(-10px);\n                &.active {\n                    /*! @noflip */\n                    transform: translateX(0);\n                }\n            }\n\n            &.for-opened {\n                /*! @noflip */\n                transform: translateX(10px);\n                &.active {\n                    /*! @noflip */\n                    transform: translateX(0);\n                }\n            }\n        }\n        &:not(.disabled) {\n            &:hover,\n            &:focus {\n                i.type1 {\n                    body:not(.mobile) & {\n                        svg {\n                            transform: scale(1.4);\n                        }\n                    }\n\n                    &::after {\n                        body:not(.mobile) & {\n                            transform: scale(1);\n                        }\n                    }\n                }\n\n                i.type2 {\n                    body:not(.mobile) & {\n                        svg {\n                            transform: scale(1);\n                        }\n                    }\n                }\n            }\n        }\n    }\n\n    .sidebar-content:hover {\n        ~ #button-body {\n            body:not(.mobile) & {\n                transform: scale(1.15);\n            }\n        }\n        ~ button {\n            i.type1 {\n                body:not(.mobile) & {\n                    svg {\n                        transform: scale(1.4);\n                    }\n                }\n\n                &::after {\n                    body:not(.mobile) & {\n                        transform: scale(1);\n                    }\n                }\n            }\n\n            i.type2 {\n                body:not(.mobile) & {\n                    svg {\n                        transform: scale(1);\n                    }\n                }\n            }\n        }\n    }\n\n    &.sidebar {\n        width: 50px;\n        pointer-events: auto;\n        svg {\n            width: 15px;\n            height: 15px;\n        }\n\n        .sidebar-position-left & {\n            /*! @noflip */\n            left: 0;\n            /*! @noflip */\n            right: auto;\n\n            .sidebar-content {\n                /*! @noflip */\n                transform-origin: left top;\n                /*! @noflip */\n                transform: rotate(270deg);\n                /*! @noflip */\n                left: 0;\n                /*! @noflip */\n                right: auto;\n                /*! @noflip */\n                border-bottom-right-radius: 4px;\n                /*! @noflip */\n                border-bottom-left-radius: 28px;\n                /*! @noflip */\n                padding: 0 20px 0 30px;\n            }\n\n            #button-body {\n                /*! @noflip */\n                left: 7px;\n            }\n        }\n\n        .sidebar-content {\n            //INFO: Sidebar is rotated by 90deg with handle on top right corner to make it stick to the side of a browser\n            // and still be able to somehow control it with css bottom value instead of top;\n            // Sidebar content is then rotated by 180 deg so it will appear as rotated by 270deg as per design.\n\n            background: #313fa0;\n            color: #fff;\n            /*! @noflip */\n            padding: 0 30px 0 20px;\n            font-size: 14px;\n            line-height: 30px;\n            height: 30px;\n            font-weight: 700;\n            position: relative;\n            overflow: hidden;\n            /*! @noflip */\n            border-bottom-right-radius: 28px;\n            /*! @noflip */\n            border-bottom-left-radius: 4px;\n            /*! @noflip */\n            transform: rotate(90deg);\n            /*! @noflip */\n            transform-origin: right top;\n            position: absolute;\n            bottom: 0;\n            /*! @noflip */\n            right: 0;\n            white-space: nowrap;\n            max-width: 400px;\n\n            span {\n                display: inline-block;\n                transform: rotate(180deg);\n                max-width: 265px;\n                text-overflow: ellipsis;\n                white-space: nowrap;\n                overflow: hidden;\n            }\n            &:hover {\n                cursor: pointer;\n            }\n        }\n        #button-body {\n            position: absolute;\n            /*! @noflip */\n            right: 7px;\n            bottom: 20px;\n            width: 32px;\n            height: 32px;\n            box-shadow: 0 6px 20px 0 rgba(0, 18, 46, 0.24);\n        }\n        button {\n            i {\n                width: 15px;\n                height: 15px;\n\n                &.type1 {\n                    &::after {\n                        width: 30px;\n                        height: 30px;\n                        border-radius: 28px;\n                    }\n                }\n\n                &.type2 {\n                    svg {\n                        width: 15px;\n                        height: 15px;\n                    }\n                }\n            }\n        }\n    }\n}\n\n#button-body {\n    width: 60px;\n    height: 60px;\n    border-radius: 28px;\n    display: inherit;\n    align-items: center;\n    justify-content: center;\n    pointer-events: initial;\n    background-size: 130% 130%;\n    transition: all 0.2s ease-in-out;\n    position: relative;\n    color: #007dfc;\n\n    &::before {\n        content: '';\n        transition: opacity 0.5s ease-in-out;\n        position: absolute;\n        top: -1px;\n        right: -1px;\n        bottom: -1px;\n        left: -1px;\n        opacity: 0;\n        border-radius: 50%;\n        background-color: #c6ccdc;\n    }\n\n    &.disabled {\n        cursor: not-allowed;\n        color: #c6ccdc;\n        &::before {\n            opacity: 1;\n        }\n    }\n\n    &:not(.disabled) & {\n        &:hover,\n        &:focus {\n            outline: none;\n            body:not(.mobile) & {\n                transform: scale(1.1);\n            }\n        }\n    }\n}\n\n#new-message,\n#dnd-indicator {\n    position: absolute;\n    top: 37px;\n    font-weight: 700;\n    color: #fff;\n    right: 23px;\n    pointer-events: none;\n    border-radius: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 20px;\n    height: 20px;\n}\n\n#new-message {\n    font-size: 12px;\n    background: #f72e38;\n    z-index: 2;\n    line-height: 1;\n\n    & + #dnd-indicator {\n        right: 12px;\n    }\n\n    &.active {\n        animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n    }\n}\n\n#dnd-indicator {\n    background: #374ca6;\n    z-index: 1;\n\n    svg {\n        width: 12px;\n        height: 12px;\n    }\n}\n\n@keyframes buttonWave {\n    99% {\n        transform: scale(2);\n        opacity: 0;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 0;\n    }\n}\n", "*:focus {\n    outline: thin dotted;\n}\n.chat {\n    max-height: calc(100% - 47px);\n    display: flex;\n    flex-direction: column;\n}\nsvg {\n    width: 24px;\n    height: 24px;\n}\n.chat-header {\n    padding: 24px 28px 0;\n    background: linear-gradient(-61deg, #00e0d8, #201d8e);\n    position: relative;\n    z-index: 4;\n    flex: 0 0 auto;\n\n    #ic-minimize {\n        padding: 3px 0;\n        /* @noflip */\n        transform: rotate(270deg) translate(3px, 0);\n    }\n\n    a {\n        color: currentColor;\n        &:hover {\n            text-decoration: none;\n        }\n    }\n}\n\n.chat ::-webkit-scrollbar {\n    display: none;\n}\n\n.avatars-wrapper {\n    width: 52px;\n    height: 52px;\n    margin: 0px 18px 0 0;\n    float: left;\n}\n\n.operators-avatar-2 {\n    padding-top: 11px;\n}\n.operators-avatar-0 {\n    display: none;\n}\n\n.header-ava {\n    width: 52px;\n    height: 52px;\n    border-radius: 24px;\n    background-size: cover;\n    background-position: center;\n    background-image: url('../styles/img/default.jpg');\n    float: left;\n    .mobile & {\n        width: 42px;\n        height: 42px;\n        border-radius: 19px;\n    }\n    .operators-avatar-2 & {\n        width: 30px;\n        height: 30px;\n        margin-left: -6px;\n    }\n\n    .operators-avatar-3 & {\n        width: 28px;\n        height: 28px;\n        &:last-child {\n            margin-left: -5px;\n        }\n\n        &:first-child {\n            clear: both;\n            float: none;\n            margin: 0 auto;\n        }\n        &:not(:first-child) {\n            margin-top: -4px;\n        }\n    }\n\n    .operators-avatar-4 & {\n        width: 28px;\n        height: 28px;\n        &:nth-child(2n) {\n            margin-left: -5px;\n        }\n\n        &:nth-child(n + 3) {\n            margin-top: -4px;\n        }\n    }\n    .mobile .operators-avatar-2 & {\n        width: 26px;\n        height: 26px;\n    }\n    .mobile .operators-avatar-3 & {\n        width: 23px;\n        height: 23px;\n        &:first-child {\n            margin-top: 2px;\n        }\n    }\n    .mobile .operators-avatar-4 & {\n        width: 23px;\n        height: 23px;\n\n        &:nth-child(-n + 2) {\n            margin-top: 2px;\n        }\n    }\n}\n\n.chat h2 {\n    font-size: 22px;\n    font-weight: 600;\n    color: currentColor;\n    margin: 4px 0 0 0;\n    padding: 0;\n    display: inline-block;\n    position: relative;\n    max-width: calc(100% - 145px);\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    vertical-align: bottom;\n    .emoji {\n        width: 31px;\n        height: 31px;\n    }\n    &.oneline {\n        margin-top: 0;\n        line-height: 52px;\n        min-height: 52px;\n    }\n    &.twolines {\n        margin-bottom: 5px;\n    }\n    .top-heading {\n        font-size: 16px;\n        display: block;\n        line-height: 15px;\n        margin-top: 4px;\n    }\n}\n\n.heading-hover {\n    position: absolute;\n    color: #fff;\n    background: rgba(0, 0, 0, 0.88);\n    top: 70px;\n    font-size: 13px;\n    padding: 10px 15px;\n    z-index: 3;\n    width: auto;\n    border-radius: 8px;\n    max-width: 100%;\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n    left: 50px;\n    .chat h2:hover + & {\n        opacity: 1;\n    }\n}\n\n#conversation-group {\n    padding: 0 28px;\n    width: 100%;\n    height: 357px;\n    overflow-y: auto;\n    overflow-x: hidden;\n    -ms-overflow-style: none;\n    background: #fff;\n    transition: all 0.3s;\n    max-height: 357px;\n    min-height: 160px;\n\n    &.ios-ipad {\n        -webkit-overflow-scrolling: touch;\n        width: calc(100% + 6px);\n        // webkit overflow scrolling adds second scrollbar which is not affected by browser RTL setting,\n        // so no mirroring for styles below\n\n        /*! @noflip */\n        margin-right: 0;\n        .lang-rtl & {\n            /*! @noflip */\n            margin-right: -6px;\n        }\n    }\n\n    .uploadIconWrapper {\n        position: absolute;\n        display: flex;\n        height: 100%;\n        width: 100%;\n        align-items: center;\n        justify-content: center;\n        top: 0;\n        left: 0;\n        right: 0;\n        z-index: 3;\n\n        span {\n            font-size: 19px;\n            max-width: 120px;\n            text-align: center;\n            color: #080f1a;\n            line-height: 1.3;\n        }\n\n        .ic_upload {\n            fill: #287efc;\n            width: 73px;\n            height: 73px;\n            margin-bottom: 10px;\n            margin-top: -5px;\n        }\n    }\n\n    .upload-circle {\n        width: 230px;\n        height: 230px;\n        border-radius: 50%;\n        background: rgba(#b6c6e5, 0.24);\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        animation: scale-up 0.3s ease;\n        position: relative;\n        z-index: 1;\n    }\n\n    &.drag-active::after {\n        content: '';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: rgba($color: #fff, $alpha: 0.92);\n        z-index: 2;\n        animation: fade-in 0.3s ease;\n    }\n    flex: 0 1 auto;\n    .transition-container & {\n        flex: 1;\n    }\n}\n.transition-container {\n    height: 399px;\n    background: #fff;\n    flex: 0 1 auto;\n    min-height: 160px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    #conversation-group {\n        overflow-y: hidden;\n    }\n}\n\n#messages {\n    position: relative;\n    -ms-overflow-style: none;\n    margin-top: 10px;\n    width: 100%;\n    padding-bottom: 24px;\n    float: left;\n}\n\n#conversation-group #conversation-scroll {\n    width: 24px;\n    height: calc(339px - 26px);\n    position: absolute;\n    right: 2px;\n    padding: 0 12px 0 4px;\n}\n\n#conversation-group #conversation-scroll div {\n    width: 6px;\n    margin: 0 1px;\n    background: #00173b;\n    opacity: 0;\n    top: 0;\n    position: absolute;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: opacity 0.1s ease-in-out, width 0.1s ease-in-out, margin 0.1s ease-in-out;\n    z-index: 2;\n    user-select: none;\n}\n\n#conversation-group:hover #conversation-scroll div {\n    body:not(.mobile) & {\n        opacity: 0.16;\n    }\n}\n\n#conversation-group #conversation-scroll div:hover {\n    body:not(.mobile) & {\n        opacity: 0.32;\n        width: 8px;\n        margin: 0;\n    }\n}\n\nhr {\n    margin: 0;\n    border: 0;\n    border-bottom: 1px solid #dbdfe6;\n}\n\ninput,\ntextarea {\n    &.disabled {\n        cursor: not-allowed;\n        color: #8894ab;\n    }\n}\n\nbutton,\nlabel {\n    &.material-icons {\n        position: relative;\n        z-index: 1;\n        margin: 15px 0 8px 11px;\n        float: right;\n        svg {\n            fill: #8894ab;\n            &#ic-minimize,\n            &.options-icon {\n                fill: currentColor;\n            }\n        }\n\n        &::before {\n            content: '';\n            position: absolute;\n            background: #eff2f6;\n            width: 40px;\n            height: 40px;\n            border-radius: 50%;\n            z-index: -1;\n            transition: all 0.16s ease-in-out;\n            transform: scale(0);\n            top: calc(50% - 20px);\n            left: calc(50% - 20px);\n        }\n        &:hover::before {\n            body:not(.mobile) & {\n                transform: scale(1);\n            }\n        }\n        &:focus {\n            svg {\n                fill: currentColor;\n            }\n            svg.bots-icon {\n                fill: #007dfc;\n            }\n        }\n\n        &.disabled svg,\n        &.disabled:focus svg {\n            fill: #c9cbd8;\n        }\n\n        &.options,\n        &.exit-chat {\n            z-index: unset;\n            .mobile & {\n                margin: 5px -10px -2px 1px;\n                padding: 10px;\n            }\n\n            svg {\n                fill: currentColor;\n                width: 26px;\n                height: 26px;\n            }\n\n            &::before {\n                background: rgba(0, 36, 92, 0.16);\n            }\n\n            &:focus::before,\n            &:hover::before {\n                body:not(.mobile) & {\n                    transform: scale(1);\n                }\n            }\n        }\n        &.exit-chat {\n            margin-right: -3px;\n            .mobile & {\n                margin-right: -13px;\n            }\n        }\n    }\n}\n\nbody:not(.mobile) .footer-bottom .bots-button {\n    margin-right: 22px;\n\n    &::after {\n        content: '';\n        display: block;\n        position: absolute;\n        top: 2px;\n        right: -12px;\n        height: 24px;\n        width: 1px;\n        background: #dfe3e9;\n    }\n}\n\n.input-group {\n    padding: 0 28px 6px;\n    width: 100%;\n    position: relative;\n    background: #fff;\n    z-index: 3;\n    flex: 0 0 auto;\n\n    &.drag-active .drag-active-wrapper::after {\n        content: '';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: rgba($color: #fff, $alpha: 0.7);\n        z-index: 1;\n        animation: fade-in 0.3s ease;\n    }\n\n    .footer-input-wrapper,\n    .footer-icons-wrapper {\n        transition: all 0.5s ease-in-out;\n        opacity: 1;\n        transform: translateY(0);\n        &.hidden {\n            transform: translateY(10px);\n            pointer-events: none;\n            opacity: 0;\n        }\n    }\n\n    .material-icons {\n        svg {\n            width: 26px;\n            height: 26px;\n        }\n        &:hover {\n            svg {\n                fill: #007dfc;\n            }\n            &::before {\n                background-color: rgba(0, 125, 252, 0.12);\n            }\n        }\n    }\n\n    .footer-bottom {\n        height: 42px;\n        position: relative;\n        button {\n            float: left;\n            margin: 0 16px 14px 0;\n        }\n    }\n}\n\n.emoji-wrapper {\n    height: 215px;\n    position: absolute;\n    overflow: hidden;\n    width: 340px;\n    bottom: 100%;\n    z-index: 10;\n    left: 18px;\n}\n\n.emoji-mart {\n    border: 0;\n    position: absolute;\n    width: 100% !important;\n    height: 100%;\n    right: 0;\n    input:focus {\n        border: 1px solid #d9d9d9;\n    }\n    &-scroll {\n        height: 140px;\n    }\n    .emoji-mart-emoji {\n        cursor: pointer;\n        span {\n            cursor: pointer;\n        }\n    }\n}\n.emoji-mart-anchor {\n    -ms-flex: 1 1 auto;\n}\n\n.no-start-message {\n    .emoji-wrapper {\n        height: 175px;\n    }\n    .emoji-mart {\n        &-scroll {\n            height: 100px;\n        }\n    }\n}\n\n.options-dropdown {\n    position: absolute;\n    top: 72px;\n    background: #fff;\n    border-radius: 8px;\n    box-shadow: 0 6px 32px 0 rgba(0, 18, 46, 0.16);\n    padding: 12px 6px;\n    z-index: 6;\n    transition: all 0.2s ease-in-out;\n    right: 24px;\n\n    ul {\n        margin: 0;\n        padding: 0;\n\n        li {\n            border-radius: 6px;\n            display: flex;\n            &:nth-of-type(2) button {\n                svg {\n                    fill: #ffb926;\n                }\n            }\n        }\n    }\n\n    li button {\n        padding: 8px 16px;\n        display: flex;\n        margin: 0;\n        position: initial;\n        float: initial;\n        width: 100%;\n        border-radius: 6px;\n\n        &:hover,\n        &:focus {\n            body:not(.mobile) & {\n                background: #eff2f6;\n            }\n        }\n\n        svg,\n        &:focus svg {\n            fill: #8894ab;\n            height: 22px;\n            width: 22px;\n        }\n\n        span {\n            margin-left: 10px;\n            color: #06132b;\n        }\n\n        &::before {\n            content: none;\n        }\n    }\n}\n\n.bots-dropdown {\n    @extend .options-dropdown;\n    top: auto;\n    bottom: 0;\n    transform: translateY(-60px);\n    max-height: 275px;\n    overflow-y: auto;\n    z-index: 11;\n    right: auto;\n    left: 0px;\n\n    button.material-icons {\n        margin: 0;\n    }\n\n    ul {\n        li {\n            padding: 0;\n            span {\n                cursor: pointer;\n                padding: 8px 16px;\n                display: flex;\n                align-items: center;\n                width: 100%;\n                svg {\n                    margin-right: 10px;\n                }\n                &.bot-disabled {\n                    cursor: not-allowed;\n                    color: #8894ab;\n                }\n            }\n        }\n    }\n    ul.bots-cancel {\n        span {\n            color: #0ab6ff;\n            display: flex;\n            align-items: center;\n        }\n        svg {\n            fill: red;\n            margin-right: 10px;\n        }\n    }\n}\n\n.offline-message {\n    margin: 18px -28px 0px;\n    color: currentColor;\n    width: calc(100% + 56px);\n    padding: 14px 28px 7px;\n    position: relative;\n    background-size: 100% calc(100% + 12px);\n    z-index: 1;\n    .no-clip-path & {\n        padding: 14px 28px 20px;\n        &:after {\n            content: '';\n            position: absolute;\n            width: calc(100% + 10px);\n            bottom: -8px;\n            left: -5px;\n            border-image-source: url('../styles/img/wave.svg');\n            border-image-slice: 0 0 100%;\n            border-image-width: 0 0 15px;\n            border-image-repeat: stretch stretch;\n            border-bottom: solid 15px;\n            border-top: 0;\n            border-left: 0;\n            border-right: 0;\n        }\n    }\n\n    span {\n        z-index: 2;\n        position: relative;\n        display: inline-block;\n        font-size: 16px;\n        &.online {\n            padding-left: 20px;\n            &:before {\n                content: '';\n                display: block;\n                width: 8px;\n                height: 8px;\n                position: absolute;\n                top: calc(50% - 4px);\n                background: #58b743;\n                border-radius: 50%;\n                left: 0;\n            }\n        }\n    }\n}\n\n.emoji-switch.active svg {\n    fill: currentColor;\n}\n\n.bots-animation {\n    svg {\n        will-change: transform;\n        animation: botsAnimation 3s;\n        animation-iteration-count: 1;\n    }\n    .pulse,\n    .pulse-white {\n        will-change: transform;\n        display: block;\n        width: 26px;\n        height: 26px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        border-radius: 50%;\n        animation-iteration-count: 1;\n    }\n    .pulse {\n        background: #c9cbd8;\n        z-index: -4;\n        animation: waterPulse 3s;\n        &.animation-delay {\n            z-index: -2;\n        }\n    }\n    .pulse-white {\n        background: #fff;\n        z-index: -3;\n        animation: waterPulseWhite 3s;\n        &.animation-delay {\n            z-index: -1;\n        }\n    }\n    .animation-delay {\n        animation-delay: 0.8s;\n    }\n}\n\n@keyframes waterPulseWhite {\n    from {\n        transform: scale(0.7);\n    }\n    29% {\n        transform: scale(0.7);\n    }\n    60% {\n        transform: scale(2.8);\n    }\n}\n\n@keyframes waterPulse {\n    from {\n        opacity: 0;\n        transform: scale(0.8);\n    }\n    19% {\n        opacity: 0.3;\n    }\n    23% {\n        transform: scale(0.8);\n    }\n    24% {\n        opacity: 0.5;\n        transform: scale(0.8);\n    }\n    31% {\n        opacity: 0.4;\n    }\n    55% {\n        opacity: 0.1;\n        transform: scale(2.8);\n    }\n    100% {\n        opacity: 0;\n    }\n}\n@keyframes botsAnimation {\n    12% {\n        transform: scale(1);\n    }\n    20% {\n        transform: scale(1.2);\n    }\n    25% {\n        transform: scale(0.9);\n    }\n    29% {\n        transform: scale(1.05);\n    }\n    31% {\n        transform: scale(1);\n    }\n}\n\n@keyframes scale-up {\n    0% {\n        transform: scale(0.8);\n    }\n    100% {\n        transform: scale(1);\n    }\n}\n\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n.chat-in-preview--tour {\n    .exit-chat,\n    .options-icon {\n        opacity: 0.3;\n    }\n    .input-group {\n        opacity: 0.4;\n    }\n}\n", ".start-group {\n    display: flex;\n    flex-direction: column;\n\n    .h2-banner {\n        font-weight: 400;\n        font-size: 42px;\n        margin: 6px 0 16px 0;\n        padding-top: 4px;\n        display: inline-block;\n        position: relative;\n        max-width: calc(100% - 90px);\n        line-height: 50px;\n        word-wrap: break-word;\n        white-space: pre-line;\n        -webkit-text-stroke: 0.4px;\n        padding-left: 14px;\n\n        .emoji {\n            width: 31px;\n            height: 31px;\n        }\n    }\n\n    .operators {\n        display: flex;\n        position: absolute;\n        top: 84px;\n        flex-direction: column;\n        height: calc(100% - 84px);\n        width: 66px;\n        right: 42px;\n        > div:hover {\n            span {\n                opacity: 1;\n            }\n            &:not(:first-child) {\n                .ava48:hover {\n                    transform: translate3d(0, -20px, 0);\n                }\n            }\n        }\n    }\n\n    .ava48 {\n        width: 66px;\n        height: 66px;\n        border-radius: 31px;\n        background-size: cover;\n        background-position: center;\n        background-image: url('../styles/img/default.jpg');\n        position: absolute;\n        top: 0;\n        left: 0;\n        transition: transform 0.2s ease-in-out;\n        will-change: transform;\n        transform: translate3d(0, 0px, 0);\n\n        span {\n            background: #fff;\n            padding: 6px 8px;\n            border-radius: 2px;\n            box-shadow: 0 2px 8px 0 rgba(0, 18, 46, 0.32);\n            font-size: 13px;\n            position: absolute;\n            opacity: 0;\n            white-space: nowrap;\n            transition: all 0.16s ease-in-out;\n            right: calc(100% + 10px);\n            top: 50%;\n            transform: translateY(-50%);\n            color: #06132b;\n        }\n    }\n\n    button.i-banner {\n        svg {\n            fill: currentColor;\n        }\n\n        &::before {\n            background: rgba(0, 36, 92, 0.16);\n            width: 38px;\n            height: 38px;\n            top: calc(50% - 19px);\n            left: calc(50% - 19px);\n        }\n    }\n\n    .get-started {\n        width: 100%;\n        overflow: hidden;\n        z-index: 3;\n        position: relative;\n\n        button {\n            color: #3f88f3;\n            display: block;\n            width: 100%;\n            padding: 1em 0;\n            background: #fff;\n            border-radius: 0;\n            font-size: 19px;\n            transition: color 0.2s ease-in-out;\n            margin: 0;\n        }\n    }\n\n    .input-group {\n        z-index: 4;\n    }\n}\n\n.banner {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-radius: 8px 8px 0 0;\n    overflow: hidden;\n    opacity: 0.16;\n    background-size: cover;\n}\n\n.start-message {\n    color: currentColor;\n    font-size: 16px;\n    margin: 0 0 32px 0;\n    line-height: 22px;\n    position: relative;\n    padding-left: 14px;\n    padding-right: 100px;\n    z-index: 2;\n}\n", ".user-data-modal {\n    background: #fff;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    z-index: 10;\n    padding: 50px 55px;\n    background-image: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);\n    background-size: 100% 40px, 100% calc(100% - 40px);\n    background-repeat: no-repeat;\n    background-position: top, bottom;\n\n    .user-data-modal-filler {\n        width: 280%;\n        background-color: #fff;\n        display: block;\n        position: absolute;\n        left: -90%;\n        top: 0;\n        height: 100%;\n        z-index: -1;\n        border-radius: 0 0 53% 53%;\n        background-clip: padding-box;\n    }\n\n    .user-data-modal-close {\n        position: absolute;\n        right: 16px;\n        top: 16px;\n\n        svg#ic_close {\n            width: 17px;\n            height: 17px;\n            fill: #6d7e9e;\n            position: static;\n            top: 10px;\n            left: 12px;\n        }\n    }\n\n    .create-ticket-success-wrapper {\n        display: flex;\n        flex-direction: column;\n        row-gap: 18px;\n        align-items: center;\n\n        svg {\n            width: 54px;\n            height: 54px;\n        }\n    }\n\n    .pre-chat,\n    .always-online {\n        max-width: 100%;\n    }\n\n    .user-data-modal-text {\n        font-size: 20px;\n        font-weight: 600;\n        text-align: center;\n        color: #00122e;\n        margin-bottom: 32px;\n    }\n\n    .user-data-modal-fields {\n        #ic_arrow {\n            fill: #007dfc;\n        }\n        svg {\n            width: 24px;\n            height: 24px;\n        }\n        input, textarea {\n            border: solid 1px rgba(108, 125, 159, 0.24);\n            font-size: 15px;\n            padding: 9px 12px 10px 40px;\n            margin: 0 0 8px 0;\n            line-height: normal;\n        }\n\n        label {\n            padding-top: 12px;\n            padding-right: 0;\n            margin: 0 0 8px 10px;\n            input {\n                margin-left: 5px;\n                margin-top: 4px;\n            }\n            span {\n                font-size: 11px;\n                text-align: justify;\n                color: #00122e;\n                max-height: 120px;\n                display: block;\n                overflow-y: auto;\n                a {\n                    color: #00122e;\n                }\n            }\n        }\n    }\n\n    .user-data-modal-submit {\n        width: 100%;\n        height: 40px;\n        font-size: 16px;\n        font-weight: 600;\n        color: #ffffff;\n        border-radius: 6px;\n        background: linear-gradient(99deg, #2a27da, #00ccff);\n        margin: 16px 0;\n        position: relative;\n\n        &::after {\n            transition: background 0.2s;\n            content: '';\n            border-radius: 6px;\n            background: rgba(0, 0, 0, 0);\n            left: 0;\n            top: 0;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n        }\n        &:hover {\n            &::after {\n                background: rgba(0, 0, 0, 0.08);\n            }\n        }\n    }\n\n    .user-data-modal-operators {\n        text-align: center;\n        white-space: nowrap;\n        margin-bottom: 32px;\n        .user-data-modal-operator {\n            width: 66px;\n            height: 66px;\n            border-radius: 31px;\n            background-size: cover;\n            background-position: center;\n            display: inline-block;\n            background-image: url('../styles/img/default.jpg');\n            margin-right: -4%;\n        }\n    }\n\n    .emoji {\n        margin: 0;\n    }\n}\n", ".flyMessage {\n    background-color: #fff;\n    padding: 0 24px;\n    max-width: 340px;\n    position: absolute;\n    bottom: 26px;\n    border-radius: 12px;\n    box-shadow: 0 8px 26px 0 rgba(0, 18, 46, 0.16);\n    display: flex;\n    flex-direction: column;\n    z-index: 1;\n    max-height: calc(100% - 76px);\n\n    .chat-in-preview & {\n        box-shadow: 0 8px 13px 0 rgba(0, 18, 46, 0.16);\n    }\n    right: 48px;\n    margin-left: 20px;\n    &:hover .close-button-wrapper {\n        opacity: 1;\n        transform: translateY(0px);\n    }\n    .mobile & {\n        max-width: calc(100% - 48px - 55px);\n        &.with-buttons {\n            width: calc(100% - 48px - 55px);\n            max-width: 250px;\n        }\n    }\n    .close-button-wrapper {\n        position: absolute;\n        bottom: 100%;\n        opacity: 0;\n        width: 100%;\n        height: 45px;\n        transition: all 0.3s;\n        transform: translateY(10px);\n        left: 0;\n        .mobile & {\n            opacity: 1;\n            height: 100%;\n            width: 45px;\n            bottom: auto;\n            top: 0;\n            transform: translateY(0);\n            right: 100%;\n            left: auto;\n            transform: translateX(-10px);\n        }\n        button.material-icons.exit-chat.mobile-close {\n            position: absolute;\n            top: 0;\n            border-radius: 50%;\n            margin: 0;\n            padding: 3px;\n            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n            height: 24px;\n            width: 24px;\n            display: flex;\n            background: #fff;\n            right: 5px;\n            svg#ic_close {\n                width: 20px;\n                height: 20px;\n                fill: #8894ab;\n            }\n            &:before {\n                content: none;\n            }\n        }\n    }\n    .input-group {\n        padding: 9px 22px 9px 0;\n    }\n    .material-icons.emoji-switch {\n        position: absolute;\n        top: 0;\n        right: 36px;\n        svg {\n            width: 20px;\n            height: 20px;\n        }\n        &:hover:before {\n            width: 32px;\n            height: 32px;\n            margin: -6px 0 0 -6px;\n        }\n    }\n    .emoji-wrapper {\n        width: 300px;\n        left: auto;\n        right: 26px;\n        border-radius: 6px;\n        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n        left: auto;\n        right: 26px;\n    }\n    .input-group .fly-new-message-button {\n        transition: min-width 0.3s;\n        min-width: 180px;\n        padding: 4px 0 8px;\n        line-height: 21px;\n        text-align: left;\n        cursor: pointer;\n        font-size: 17px;\n        color: #8894ab;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        &::-webkit-input-placeholder {\n            /* Chrome/Opera/Safari */\n            white-space: nowrap;\n        }\n        &::-moz-placeholder {\n            /* Firefox 19+ */\n            white-space: nowrap;\n        }\n        &:-ms-input-placeholder {\n            /* IE 10+ */\n            white-space: nowrap;\n        }\n        &:-moz-placeholder {\n            /* Firefox 18- */\n            white-space: nowrap;\n        }\n    }\n    &.ie .message-container {\n        max-height: 300px;\n    }\n    .message-container {\n        padding: 19px 0;\n        max-width: 290px;\n        font-size: 17px;\n        background: #fff;\n        position: relative;\n        word-wrap: break-word;\n        overflow: hidden;\n        overflow-y: auto;\n        white-space: pre-line;\n        padding-right: 38px;\n        ul {\n            list-style-type: disc;\n        }\n        ol {\n            list-style-type: decimal;\n        }\n        ul,\n        ol {\n            margin: 12px 0;\n            padding-left: 16px;\n        }\n        li {\n            padding-left: 4px;\n            margin-bottom: 8px;\n        }\n        &.image-content {\n            overflow-y: hidden;\n            padding-left: 0;\n            padding-right: 0;\n            button {\n                float: left;\n                height: 200px;\n                width: 100%;\n                min-width: 200px;\n                background-color: #fff;\n                .image-preview {\n                    background-size: cover;\n                    background-repeat: no-repeat;\n                    background-position: center;\n                    border-radius: 8px;\n                    height: 100%;\n                }\n            }\n            span {\n                display: inline-block;\n                margin-top: 10px;\n            }\n        }\n        .mobile & {\n            width: 100%;\n            font-size: 15px;\n            padding-right: 22px;\n            &.image-content {\n                padding-left: 0;\n                padding-right: 0;\n                button {\n                    height: 132px;\n                    min-width: auto;\n                }\n            }\n        }\n        &:after {\n            content: '';\n            border-bottom: 1px solid #dedede;\n            display: block;\n            position: absolute;\n            bottom: 0;\n            width: calc(100% - 38px);\n            .mobile & {\n                width: calc(100% - 22px);\n            }\n        }\n    }\n\n    .button-wrapper {\n        width: 100%;\n        display: flex;\n        flex-wrap: wrap;\n        .mobile & {\n            flex-direction: column;\n            align-items: flex-start;\n        }\n        button,\n        .button-url {\n            font-size: 17px;\n            color: #007dfc;\n            background: #fff;\n            line-height: 21px;\n            margin-top: 6px;\n            margin-bottom: 6px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            border-bottom: 1px solid transparent;\n            transition: border-color 0.2s;\n            &:hover {\n                border-color: #007dfc;\n            }\n            margin-right: 16px;\n            text-align: left;\n            .mobile & {\n                max-width: 100%;\n                display: block;\n                padding: 4px 0;\n            }\n            .emoji {\n                vertical-align: top;\n            }\n        }\n        .button-url__anchor {\n            color: #007dfc;\n            text-decoration: none;\n        }\n        .more-replies {\n            border: 1px solid #007dfc;\n            border-radius: 20px;\n            padding: 3px 10px;\n            line-height: 7px;\n            align-self: center;\n            .mobile & {\n                align-self: flex-start;\n                padding: 3px 10px;\n                margin: 6px 0;\n            }\n\n            svg {\n                transform: rotate(90deg);\n                width: 13px;\n                height: 13px;\n                fill: #007dfc;\n            }\n        }\n    }\n}\n", ".widgetLabel {\n    position: absolute;\n    height: 42px;\n    bottom: 61px;\n    z-index: 1;\n    white-space: nowrap;\n    font-size: 17px;\n    line-height: 17px;\n    //Don't use RTL here\n    .widget-position-left & {\n        /*! @noflip */\n        left: 100px;\n    }\n    .widget-position-right & {\n        /*! @noflip */\n        right: 100px;\n    }\n\n    border-radius: 16px;\n    padding: 10px 15px;\n    box-shadow: 0 6px 32px 0 rgba(0, 18, 46, 0.24);\n    background: #fff;\n}\n", ".dropdownFade-enter {\n    opacity: 0.01;\n    top: 62px;\n    &.dropdownFade-enter-active {\n        opacity: 1;\n        top: 72px;\n    }\n}\n\n.dropdownFade-exit {\n    opacity: 1;\n    top: 72px;\n    &.dropdownFade-exit-active {\n        opacity: 0.01;\n        top: 62px;\n    }\n}\n\n.botsListFade-enter {\n    opacity: 0;\n    transform: translateY(-52px);\n    &.botsListFade-enter-active {\n        opacity: 1;\n        transform: translateY(-60px);\n    }\n}\n.botsListFade-appear {\n    opacity: 0;\n    transform: translateY(-52px);\n    &.botsListFade-appear-active {\n        opacity: 1;\n        transform: translateY(-60px);\n    }\n}\n.botsListFade-exit {\n    opacity: 1;\n    transform: translateY(-60px);\n    &.botsListFade-exit-active {\n        opacity: 0;\n        transform: translateY(-52px);\n    }\n}\n\n.fade-enter {\n    opacity: 0.01;\n    &.fade-enter-active {\n        transition: all 0.3s;\n        opacity: 1;\n    }\n}\n\n.fade-exit {\n    opacity: 1;\n    transition: all 0.3s;\n    &.fade-exit-active {\n        opacity: 0.01;\n    }\n}\n\n.fade200-enter {\n    opacity: 0.01;\n    &.fade200-enter-active {\n        transition: opacity 0.2s;\n        opacity: 1;\n    }\n}\n\n.fade200-exit {\n    opacity: 1;\n    transition: opacity 0.2s;\n    &.fade200-exit-active {\n        opacity: 0.01;\n    }\n}\n\n.emojiFade-enter {\n    opacity: 0.01;\n    bottom: calc(100% - 10px);\n    &.emojiFade-enter-active {\n        opacity: 1;\n        bottom: 100%;\n        transition: all 0.3s;\n    }\n}\n\n.emojiFade-exit {\n    opacity: 1;\n    bottom: 100%;\n    transition: all 0.3s;\n    &.emojiFade-exit-active {\n        opacity: 0.01;\n        bottom: calc(100% - 10px);\n    }\n}\n\n.scale-enter {\n    transform: scale(0.01);\n    opacity: 0;\n    &.scale-enter-active {\n        transform: scale(1);\n        opacity: 1;\n    }\n}\n\n.scale-exit {\n    transform: scale(1);\n    opacity: 1;\n    &.scale-exit-active {\n        transform: scale(0.01);\n        opacity: 0;\n    }\n}\n\n#button.sidebar {\n    transition: all 0.3s;\n    &.bubbleAnimation-appear {\n        /*! @noflip */\n        right: -8px;\n        opacity: 0.01;\n    }\n    &.bubbleAnimation-appear-active {\n        opacity: 1;\n        /*! @noflip */\n        right: 0;\n    }\n\n    &.bubbleAnimation-enter {\n        /*! @noflip */\n        right: -8px;\n        opacity: 0.01;\n    }\n    &.bubbleAnimation-enter-active {\n        opacity: 1;\n        /*! @noflip */\n        right: 0;\n    }\n\n    &.bubbleAnimation-exit {\n        opacity: 1;\n        /*! @noflip */\n        right: 0;\n    }\n    &.bubbleAnimation-exit-active {\n        /*! @noflip */\n        right: -8px;\n        opacity: 0.01;\n    }\n}\n#button:not(.sidebar) {\n    &.bubbleAnimation-appear {\n        right: -8px;\n        opacity: 0.01;\n\n        &.bubbleAnimation-appear-active {\n            opacity: 1;\n            right: 0;\n            transition: all 0.3s;\n        }\n    }\n\n    &.bubbleAnimation-enter {\n        right: -8px;\n        opacity: 0.01;\n        &.bubbleAnimation-enter-active {\n            opacity: 1;\n            right: 0;\n            transition: all 0.3s;\n        }\n    }\n\n    &.bubbleAnimation-exit {\n        opacity: 1;\n        right: 0;\n        .lang-rtl & {\n            display: none;\n        }\n        transition: all 0.3s;\n        &.bubbleAnimation-exit-active {\n            right: -8px;\n            opacity: 0.01;\n        }\n    }\n}\n.widget-position-left #button:not(.sidebar) {\n    &.bubbleAnimation-appear {\n        right: 8px;\n        opacity: 0.01;\n\n        &.bubbleAnimation-appear-active {\n            opacity: 1;\n            right: 0px;\n            transition: all 0.3s;\n        }\n    }\n\n    &.bubbleAnimation-enter {\n        right: 8px;\n        opacity: 0.01;\n        &.bubbleAnimation-enter-active {\n            opacity: 1;\n            right: 0px;\n            transition: all 0.3s;\n        }\n    }\n\n    &.bubbleAnimation-exit {\n        opacity: 1;\n        right: 0px;\n        transition: all 0.3s;\n        &.bubbleAnimation-exit-active {\n            right: 8px;\n            opacity: 0.01;\n        }\n    }\n    .mobile & {\n        &.bubbleAnimation-appear {\n            right: 8px;\n            opacity: 0.01;\n\n            &.bubbleAnimation-appear-active {\n                opacity: 1;\n                right: 0px;\n                transition: all 0.3s;\n            }\n        }\n\n        &.bubbleAnimation-enter {\n            right: 8px;\n            opacity: 0.01;\n            &.bubbleAnimation-enter-active {\n                opacity: 1;\n                right: 0px;\n                transition: all 0.3s;\n            }\n        }\n\n        &.bubbleAnimation-exit {\n            display: none;\n        }\n        &.bubbleAnimationReturn-exit-active {\n            display: none;\n        }\n    }\n}\n\n.widget-position-left #button:not(.sidebar) {\n    &.bubbleAnimationReturn-appear {\n        /*! @noflip */\n        left: 8px;\n        opacity: 0.01;\n\n        &.bubbleAnimationReturn-appear-active {\n            opacity: 1;\n            /*! @noflip */\n            left: 0px;\n            transition: all 0.2s;\n        }\n    }\n\n    &.bubbleAnimationReturn-enter {\n        /*! @noflip */\n        left: 8px;\n        opacity: 0.01;\n        &.bubbleAnimationReturn-enter-active {\n            /*! @noflip */\n            left: 0px;\n            opacity: 1;\n            transition: all 0.2s;\n        }\n    }\n\n    &.bubbleAnimationReturn-exit {\n        opacity: 1;\n        /*! @noflip */\n        left: 0px;\n        transition: all 0.2s;\n        &.bubbleAnimationReturn-exit-active {\n            /*! @noflip */\n            left: 8px;\n            opacity: 0.01;\n        }\n    }\n}\n.mobile {\n    .widget-position-left #button:not(.sidebar) {\n        &.bubbleAnimationReturn-exit {\n            display: none;\n        }\n    }\n}\n\n.sidebar-position-left #button.sidebar {\n    transition: all 0.3s;\n    &.bubbleAnimationLeft-exit {\n        opacity: 1;\n        /*! @noflip */\n        left: 0px;\n    }\n    &.bubbleAnimationLeft-exit-active {\n        /*! @noflip */\n        left: -8px;\n        opacity: 0.01;\n    }\n    &.bubbleAnimationLeft-appear {\n        /*! @noflip */\n        left: -8px;\n        opacity: 0.01;\n    }\n    &.bubbleAnimationLeft-appear-active {\n        opacity: 1;\n        /*! @noflip */\n        left: 0px;\n    }\n\n    &.bubbleAnimationLeft-enter {\n        /*! @noflip */\n        left: -8px;\n        opacity: 0.01;\n    }\n    &.bubbleAnimationLeft-enter-active {\n        opacity: 1;\n        /*! @noflip */\n        left: 0px;\n    }\n}\n\n.moveFromRight-appear {\n    right: 40px;\n    opacity: 0.01;\n\n    &.moveFromRight-appear-active {\n        opacity: 1;\n        right: 48px;\n        transition: all 0.3s;\n    }\n}\n\n.moveFromRight-enter {\n    right: 40px;\n    opacity: 0.01;\n    &.moveFromRight-enter-active {\n        opacity: 1;\n        right: 48px;\n        transition: all 0.3s;\n    }\n}\n\n.moveFromRight-exit {\n    opacity: 1;\n    right: 48px;\n    transition: all 0.3s;\n    &.moveFromRight-exit-active {\n        right: 40px;\n        opacity: 0.01;\n    }\n}\n\n.moveFromRightLabel-appear {\n    /*! @noflip */\n    right: 92px;\n    opacity: 0.01;\n    &.moveFromRightLabel-appear-active {\n        opacity: 1;\n        /*! @noflip */\n        right: 100px;\n        transition: all 0.3s;\n    }\n}\n\n.moveFromRightLabel-enter {\n    /*! @noflip */\n    right: 92px;\n    opacity: 0.01;\n    &.moveFromRightLabel-enter-active {\n        opacity: 1;\n        /*! @noflip */\n        right: 100px;\n        transition: all 0.3s;\n    }\n}\n\n.moveFromRightLabel-exit {\n    opacity: 1;\n    /*! @noflip */\n    right: 100px;\n    transition: all 0.3s;\n    &.moveFromRightLabel-exit-active {\n        /*! @noflip */\n        right: 92px;\n        opacity: 0.01;\n    }\n}\n\n.moveFromLeftLabel-appear {\n    /*! @noflip */\n    left: 92px;\n    opacity: 0.01;\n    &.moveFromLeftLabel-appear-active {\n        opacity: 1;\n        /*! @noflip */\n        left: 100px;\n        transition: all 0.3s;\n    }\n}\n\n.moveFromLeftLabel-enter {\n    /*! @noflip */\n    left: 92px;\n    opacity: 0.01;\n    &.moveFromLeftLabel-enter-active {\n        opacity: 1;\n        /*! @noflip */\n        left: 100px;\n        transition: all 0.3s;\n    }\n}\n\n.moveFromLeftLabel-exit {\n    opacity: 1;\n    /*! @noflip */\n    left: 100px;\n    transition: all 0.3s;\n    &.moveFromLeftLabel-exit-active {\n        /*! @noflip */\n        left: 92px;\n        opacity: 0.01;\n    }\n}\n\nbody:not(.mobile) .widget-position-left .chat {\n    &.moveFromRight-appear {\n        right: 40px;\n        left: auto;\n        opacity: 0.01;\n\n        &.moveFromRight-appear-active {\n            opacity: 1;\n            right: 48px;\n            left: auto;\n            transition: all 0.3s;\n        }\n    }\n\n    &.moveFromRight-enter {\n        right: 40px;\n        left: auto;\n        opacity: 0.01;\n        &.moveFromRight-enter-active {\n            opacity: 1;\n            right: 48px;\n            left: auto;\n            transition: all 0.3s;\n        }\n    }\n\n    &.moveFromRight-exit {\n        opacity: 1;\n        right: 48px;\n        left: auto;\n        transition: all 0.3s;\n        &.moveFromRight-exit-active {\n            right: 40px;\n            left: auto;\n            opacity: 0.01;\n        }\n    }\n}\n\n.sidebarAnimation-appear {\n    right: 40px;\n    opacity: 0.01;\n\n    &.sidebarAnimation-appear-active {\n        opacity: 1;\n        right: 48px;\n        transition: all 0.3s;\n    }\n}\n\n.sidebarAnimation-enter {\n    right: 40px;\n    opacity: 0.01;\n    &.sidebarAnimation-enter-active {\n        opacity: 1;\n        right: 48px;\n        transition: all 0.3s;\n    }\n}\n\n.sidebarAnimation-exit {\n    opacity: 1;\n    right: 48px;\n    transition: all 0.3s;\n    &.sidebarAnimation-exit-active {\n        right: 40px;\n        opacity: 0.01;\n    }\n}\n\n.operatorTyping-enter {\n    opacity: 0.01;\n    transform: translateY(10px);\n    &.operatorTyping-enter-active {\n        transform: translateY(0px);\n        transition: all 0.3s;\n        opacity: 1;\n    }\n}\n\n.operatorTyping-exit {\n    display: none;\n}\n", ".message {\n    padding: 10px 16px;\n    border-radius: 20px;\n    margin: 2px 0;\n    font-size: 15px;\n    line-height: 20px;\n    word-wrap: break-word;\n    display: inline-block;\n    max-width: 85%;\n    clear: both;\n    position: relative;\n    transition: margin 0.28s ease-in-out;\n    &.timestamp-visible {\n        margin-bottom: 28px;\n    }\n    &.rating-visible {\n        margin-bottom: 35px;\n    }\n    span.message-content {\n        white-space: pre-line;\n    }\n    .message-content {\n        ul {\n            list-style-type: disc;\n        }\n        ol {\n            list-style-type: decimal;\n        }\n        ul,\n        ol {\n            margin: 12px 0;\n            padding-left: 16px;\n        }\n        li {\n            padding-left: 4px;\n            margin-bottom: 8px;\n        }\n    }\n}\n\n.rating-visible + .message,\n.rating-visible + .bots-card-gallery-button-wrapper {\n    margin-top: 10px;\n}\n\n.message-visitor {\n    color: #fff;\n    background: linear-gradient(332deg, #21dbdb, #2979ff);\n    float: right;\n\n    & + .message-operator {\n        margin-top: 9px;\n    }\n    span a {\n        color: currentColor;\n    }\n    &.not-delivered {\n        border: 1px solid #f0f2f7;\n        background: #fff;\n        color: #8894ab;\n        margin-bottom: 22px;\n        white-space: nowrap;\n        padding: 10px 15px;\n        .resend-message {\n            position: absolute;\n            bottom: -22px;\n            font-size: 12px;\n            right: 0;\n        }\n    }\n}\n.message-operator {\n    color: #06132b;\n    background: #f0f2f7;\n    float: left;\n\n    &.message-form {\n        width: 100%;\n        max-width: none;\n        padding: 16px;\n    }\n\n    span a {\n        color: #06132b;\n    }\n    & + .message-visitor {\n        margin-top: 9px;\n    }\n    &.message-with-buttons,\n    .message-with-buttons,\n    &.bots-quick-replies {\n        padding-left: 0;\n        padding-right: 0;\n        padding-bottom: 0;\n        max-width: 95%;\n\n        &.buttons-hidden {\n            padding-bottom: 10px;\n        }\n        > span {\n            padding: 0 16px;\n            display: inline-block;\n            word-break: break-word;\n        }\n        .button-wrapper {\n            background: #fff;\n            width: 100%;\n            margin-top: 10px;\n            border: 1px solid #ebeef0;\n            border-bottom-left-radius: 20px;\n            border-bottom-right-radius: 20px;\n            border-top: 0;\n            position: relative;\n        }\n\n        .button-icon {\n            display: flex;\n            justify-content: center;\n            transition: background-color 0.2s ease-in-out;\n            padding: 8px 16px;\n            border-bottom-left-radius: 20px;\n            border-bottom-right-radius: 20px;\n            cursor: pointer;\n            outline: none;\n\n            & svg {\n                fill: #3f88f6;\n                width: 20px;\n                height: 20px;\n            }\n\n            &:hover {\n                background-color: #f6f8fb;\n            }\n        }\n\n        button,\n        .button-url {\n            margin: 0 auto;\n            min-width: 100%;\n            display: block;\n            font-size: 16px;\n            line-height: 19px;\n            padding: 8px 16px;\n            border-bottom: 1px solid #ebeef0;\n            color: #007dfc;\n            background: transparent;\n            position: relative;\n            z-index: 2;\n            outline: none;\n            word-break: break-word;\n            &:hover {\n                text-decoration: underline;\n            }\n        }\n    }\n    .message-with-buttons,\n    &.message-with-buttons {\n        button:last-child,\n        .button-url:last-child {\n            border-bottom: 0;\n        }\n    }\n    &.bots-quick-replies {\n        width: 85%;\n        background-color: #fff;\n        margin-top: 0;\n        float: right;\n\n        .button-wrapper {\n            margin-top: 0;\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: flex-end;\n            width: 100%;\n            border: none;\n        }\n        button {\n            font-size: 15px;\n            padding: 10px 14px;\n            border: 1px solid;\n            border-radius: 20px;\n            margin: 3px;\n            min-width: inherit;\n        }\n        span {\n            text-align: left;\n            overflow: hidden;\n\n            &.line-clamp {\n                display: -webkit-box;\n                -webkit-box-orient: vertical;\n                -webkit-line-clamp: 2;\n            }\n        }\n    }\n    &.bots-card-gallery {\n        $conversationGroupPadding: 28px;\n        padding: 0 $conversationGroupPadding;\n        max-width: calc(100% + #{$conversationGroupPadding * 2});\n        background: transparent;\n        overflow: auto;\n        border-radius: 0;\n        display: flex;\n        scroll-snap-type: x mandatory;\n        scroll-padding: $conversationGroupPadding;\n        scroll-behavior: smooth;\n        margin-bottom: 5px;\n        scrollbar-width: none;\n        margin-left: -#{$conversationGroupPadding};\n        .ios-ipad {\n            -webkit-overflow-scrolling: touch;\n        }\n        .safari & {\n            scroll-snap-type: x mandatory;\n            .lang-rtl & {\n                // Scroll snap is broken on RTL - cant find middle steps if more than 2 cards;\n                scroll-snap-type: none;\n            }\n        }\n\n        &.bots-card-gallery-single-card {\n            display: block;\n            margin-left: auto;\n            margin-right: auto;\n            width: 100%;\n\n            .card {\n                max-width: 240px;\n                margin: auto;\n            }\n        }\n\n        &.bots-card-gallery-multiple-cards {\n            .card {\n                &:last-child {\n                    min-width: 240px + $conversationGroupPadding;\n                    padding-right: $conversationGroupPadding;\n                }\n            }\n        }\n\n        .card {\n            max-width: 100%;\n            min-width: 240px;\n            scroll-snap-align: center;\n            margin: 0 10px 0 0;\n\n            .card-content-wrapper {\n                padding: 9px 12px 8px;\n                border: 1px solid #ebeef0;\n                border-top: none;\n\n                a {\n                    text-decoration: none;\n                    color: #00122e;\n                    &:hover,\n                    &:focus,\n                    &:active,\n                    &:visited {\n                        color: #00122e;\n                        outline: none;\n                    }\n                    &:hover {\n                        text-decoration: underline;\n                    }\n                }\n            }\n            .card-image {\n                border-radius: 14px 14px 0 0;\n                height: 122px;\n                background: #fff no-repeat center center;\n                background-size: cover;\n                border: 1px solid #ebeef0;\n                border-bottom: 0;\n            }\n            .card-title {\n                font-size: 15px;\n                line-height: 19px;\n                font-weight: bold;\n                color: #00122e;\n            }\n            .card-subtitle {\n                margin: 4px 0 0;\n                line-height: 16.5px;\n                font-size: 14px;\n                color: #4c596b;\n                white-space: pre-line;\n\n                .emoji {\n                    width: 15px;\n                    margin: 0 0 -2px 2px;\n                }\n            }\n            .card-url {\n                font-size: 14px;\n                line-height: 17px;\n                overflow: hidden;\n                white-space: nowrap;\n                text-overflow: ellipsis;\n                color: #00122e;\n                a {\n                    opacity: 0.5;\n                }\n            }\n\n            .card-buttons {\n                .button-wrapper {\n                    margin: 0;\n\n                    &:before {\n                        content: none;\n                    }\n                    button {\n                        width: 100%;\n                    }\n                }\n            }\n        }\n\n        &.bots-card-gallery-without-images {\n            .card-content-wrapper {\n                border-radius: 14px 14px 0 0;\n                border-top: 1px solid #ebeef0;\n            }\n        }\n    }\n    &.buttons-message {\n        padding: 0;\n        max-width: 90%;\n        .message-with-buttons {\n            max-width: 100%;\n            &-text {\n                padding: 9px 16px 1px;\n                line-height: 19px;\n                white-space: pre-line;\n            }\n        }\n    }\n    &.coupon-code-message {\n        padding: 10px 14px 14px;\n        width: 100%;\n    }\n    &.message-alert {\n        border: 2px solid #dee3e8;\n        background: #fff !important;\n        margin-bottom: 22px;\n        position: relative;\n        svg.alert-icon {\n            height: 20px;\n            width: 20px;\n            fill: red;\n            position: absolute;\n            top: -5px;\n            background: #fff;\n            right: -5px;\n        }\n    }\n    &.typing-indicator {\n        text-align: left;\n        span {\n            height: 4px;\n            width: 4px;\n            margin: 11px 1px 0 1px;\n            background-color: #000;\n            display: inline-block;\n            border-radius: 50%;\n            opacity: 0.4;\n            animation: blink 1.3s linear infinite;\n            &:first-child {\n                margin-left: 4px;\n            }\n            &:nth-child(2) {\n                animation-delay: -1.1s;\n            }\n            &:nth-child(3) {\n                animation-delay: -0.9s;\n            }\n        }\n    }\n\n    .button-url {\n        font-size: 16px;\n        line-height: 19px;\n        padding: 8px 16px;\n        text-align: center;\n    }\n    .button-url__anchor {\n        text-decoration: none;\n        color: #007dfc;\n\n        &:hover {\n            text-decoration: underline;\n        }\n    }\n\n    @keyframes blink {\n        0%,\n        60%,\n        100% {\n            transform: initial;\n        }\n\n        30% {\n            transform: translateY(-5px);\n        }\n    }\n}\n\n.bots-card-gallery-button-wrapper {\n    position: relative;\n    clear: both;\n    width: 100%;\n    float: left;\n\n    &.bots-card-gallery-without-images {\n        .bots-card-gallery-scroll-button {\n            top: 22px;\n        }\n    }\n}\n\n.bots-card-gallery-scroll-button {\n    position: absolute;\n    background: #fff;\n    border-radius: 50%;\n    width: 42px;\n    height: 42px;\n    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.24);\n    z-index: 3;\n    top: 140px;\n    transition: box-shadow 0.2s, opacity 0.2s;\n    &:hover {\n        box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.24);\n    }\n\n    &.scroll-button-right {\n        right: -18px;\n        svg {\n            transform: rotate(-90deg);\n            .lang-rtl & {\n                transform: rotate(90deg);\n            }\n        }\n    }\n\n    &.scroll-button-left {\n        left: -18px;\n        svg {\n            transform: rotate(90deg);\n            .lang-rtl & {\n                transform: rotate(-90deg);\n            }\n        }\n    }\n\n    svg {\n        width: 42px;\n        height: 42px;\n    }\n}\n.message .emoji {\n    margin: 0 1px 0 2px;\n    vertical-align: -5px;\n}\n\n.messageTimestamp {\n    bottom: -24px;\n    font-size: 12px;\n    color: #8894ab;\n    position: absolute;\n    transition: all 0.2s;\n    white-space: nowrap;\n\n    .message-operator & {\n        height: 23px;\n        display: flex;\n        align-items: center;\n        top: calc(100% + 4px);\n        left: 12px;\n    }\n    .message-visitor & {\n        right: 12px;\n    }\n}\n\n.shake {\n    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n}\n\n.pre-chat,\n.rate-comment,\n.always-online {\n    max-width: 95%;\n    .field-wrapper {\n        position: relative;\n        left: 0;\n        &.field-wrapper-with-error {\n            input,\n            textarea {\n                border-color: #f6303a;\n            }\n        }\n    }\n    svg {\n        width: 19px;\n        height: 19px;\n        position: absolute;\n        top: 8px;\n        fill: green;\n        left: 9px;\n\n        &#ic_arrow {\n            fill: #349ef3;\n            transform: rotate(45deg);\n        }\n        &#ic_close {\n            fill: red;\n        }\n    }\n\n    input,\n    textarea {\n        display: block;\n        width: 100%;\n        border: 0;\n        font-size: 16px;\n        padding: 6px 7px 7px 35px;\n        border-radius: 5px;\n        margin: 10px 0 5px;\n\n        &[type='checkbox'] {\n            position: absolute;\n            width: auto;\n            display: inline-block;\n            margin: 0;\n            top: 9px;\n            left: 11px;\n            padding: 0;\n            .mobile .firefox & {\n                outline: solid 1px rgba(108, 125, 159, 0.24);\n            }\n        }\n    }\n    label {\n        font-size: 12px;\n        line-height: 14px;\n        text-align: justify;\n        display: inline-block;\n        min-height: 24px;\n        margin-left: 5px;\n        padding: 10px 5px 0 31px;\n        a {\n            word-break: break-all;\n        }\n    }\n}\n\n.timestamp-avatar {\n    width: 23px;\n    height: 23px;\n    position: absolute;\n    top: 0;\n    background-position: center;\n    background-size: cover;\n    border-radius: 25px;\n    background-image: url('../styles/img/default.jpg');\n    padding-left: 23px;\n    left: 0;\n\n    & + span {\n        margin-left: 30px;\n    }\n}\n.timestamp-operator {\n    margin-right: 2px;\n}\n\n.loader-icon {\n    &.circular {\n        animation: rotate 2s linear infinite;\n        height: 100%;\n        transform-origin: center center;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        margin: 0;\n        left: 10px;\n        right: 0;\n    }\n\n    .path {\n        stroke-dasharray: 1, 200;\n        stroke-dashoffset: 0;\n        animation: dash 1.5s ease-in-out infinite;\n        stroke-linecap: round;\n    }\n\n    @keyframes rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes dash {\n        0% {\n            stroke-dasharray: 1, 200;\n            stroke-dashoffset: 0;\n        }\n        50% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -35px;\n        }\n        100% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -124px;\n        }\n    }\n}\n\n.message-upload {\n    max-width: 75%;\n    span {\n        padding-left: 25px;\n    }\n    #ic_download {\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n    }\n\n    &.message-operator {\n        #ic_download {\n            right: -35px;\n        }\n    }\n    &.message-visitor {\n        #ic_download {\n            left: -35px;\n        }\n    }\n    a {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        &:hover > svg {\n            opacity: 1;\n        }\n        > svg {\n            opacity: 0;\n            fill: #bfc5d7;\n        }\n    }\n    &.message-image {\n        span {\n            padding-left: 0;\n        }\n        background: none;\n        padding: 0;\n\n        img {\n            width: 100%;\n            border-radius: 20px;\n        }\n    }\n    &.message-file {\n        span {\n            display: inline-block;\n            word-break: break-all;\n            padding-left: 0;\n        }\n        a {\n            color: inherit;\n            text-decoration: none;\n            display: inline-block;\n            padding-left: 35px;\n            svg {\n                position: absolute;\n                top: 50%;\n                transform: translateY(-50%);\n                left: 17px;\n            }\n        }\n    }\n}\n.attachment-img {\n    background: white;\n    color: white;\n    border: none;\n    outline: none;\n}\n\n.history-button-wrapper {\n    clear: both;\n    width: 100%;\n    float: left;\n}\n\n.history-button {\n    margin: 0 auto;\n    display: flex;\n    align-items: center;\n    background: #fff;\n    margin-bottom: 20px;\n    letter-spacing: -0.1px;\n    text-align: center;\n    font-size: 12px;\n    font-weight: 600;\n    color: #8894ab;\n    border-radius: 14px;\n    border: solid 1px rgba(136, 148, 171, 0.24);\n    padding-right: 12px;\n\n    svg {\n        fill: #8894ab;\n        width: 19px;\n        margin-right: 5px;\n    }\n\n    &:hover {\n        color: #2a7dfb;\n        svg {\n            fill: #2a7dfb;\n        }\n    }\n}\n", "@keyframes ripple {\n    from {\n        background: rgba(239, 242, 246, 0);\n        transform: scale(0.5);\n    }\n    50% {\n        background: rgba(239, 242, 246, 0.6);\n        transform: scale(1);\n    }\n    to {\n        background: rgba(239, 242, 246, 0);\n        transform: scale(2);\n    }\n}\n\n.mobile {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    button.material-icons.exit-chat.mobile-close {\n        border-radius: 50%;\n        position: absolute;\n        top: 10px;\n        right: 20px;\n        margin: 0;\n        padding: 3px;\n        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n        height: 30px;\n        width: 30px;\n        background: #fff;\n        z-index: 1;\n        svg {\n            fill: #000;\n        }\n    }\n    .chat {\n        width: 100%;\n        height: 100%;\n        bottom: 0;\n        background: #fff;\n        display: flex;\n        flex-direction: column;\n        border-radius: 0;\n        right: 0;\n        left: auto;\n        max-height: none;\n    }\n    .input-group {\n        align-self: flex-end;\n        textarea {\n            padding-right: 50px;\n        }\n        button,\n        .button-url {\n            margin-bottom: 0;\n        }\n    }\n    #conversation-group {\n        max-height: none;\n        flex: 1 1 auto;\n        overflow-y: scroll;\n        -webkit-overflow-scrolling: touch;\n    }\n    #button {\n        width: 80px;\n        height: 100px;\n        bottom: 0;\n        transition: transform 0.2s;\n        transform: translateY(-12px);\n        &.chat-open {\n            right: 0px;\n            left: auto;\n        }\n        /*! @noflip */\n        right: 0px;\n        /*! @noflip */\n        left: auto;\n        &.sidebar {\n            width: 50px;\n        }\n        &.chat-closed:not(.sidebar) {\n            &.mobile-size {\n                &__small {\n                    transform: scale(0.6);\n                }\n                &__medium {\n                    transform: scale(0.8);\n                }\n            }\n        }\n    }\n\n    #new-message {\n        top: 17px;\n        right: 13px;\n        & + #dnd-indicator {\n            right: 2px;\n        }\n        &.active {\n            animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n        }\n    }\n\n    #dnd-indicator {\n        top: 17px;\n        right: 13px;\n    }\n    // How briliant it is, just look at it!\n    button.ripple {\n        touch-action: manipulation;\n        &::after {\n            content: '';\n            position: absolute;\n            height: 50px;\n            width: 0px;\n            top: calc(50% - 25px);\n            background: rgba(239, 242, 246, 0);\n            border-radius: 50%;\n            z-index: -1;\n            will-change: transform, opacity;\n            left: calc(50% - 25px);\n        }\n\n        &:not(:active)::after {\n            animation: ripple 0.3s ease-in-out;\n            transition: width 0.3s step-end;\n        }\n\n        &:active::after {\n            width: 50px;\n            transition: width 0s step-start;\n        }\n    }\n    .widget-position-left #button.chat-open {\n        right: 0;\n        left: auto;\n    }\n\n    .chat-header {\n        padding: 8px 22px 0px;\n    }\n    .offline-message {\n        margin-top: 3px;\n        padding: 10px 28px 12px;\n        span {\n            font-size: 13px;\n        }\n    }\n    .avatars-wrapper {\n        width: 42px;\n        height: 42px;\n        margin: 0px 14px 0 0;\n    }\n\n    .chat h2 {\n        .top-heading {\n            font-size: 13px;\n            margin-top: -1px;\n        }\n        &.oneline {\n            line-height: 49px;\n            height: 54px;\n        }\n    }\n}\n", ".awesome-iframe {\n    .onlyBubble,\n    .bubbleWithLabel {\n        #button {\n            height: 94px;\n            width: 94px;\n            bottom: 0;\n        }\n    }\n\n    .widget-position-left {\n        .widgetLabel {\n            /*! @noflip */\n            left: 100px;\n        }\n\n        &.bubbleWithLabel .widgetLabel {\n            /*! @noflip */\n            left: 91px;\n        }\n    }\n\n    .widget-position-right {\n        .widgetLabel {\n            /*! @noflip */\n            right: 100px;\n        }\n\n        &.bubbleWithLabel .widgetLabel {\n            /*! @noflip */\n            right: 91px;\n        }\n    }\n\n    .bubbleWithLabel .widgetLabel {\n        bottom: 26px;\n    }\n\n    .widgetLabel {\n        bottom: 61px;\n        transition-property: opacity;\n        box-shadow: 0 2px 20px 0 rgba(0, 18, 46, 0.18);\n    }\n\n    &.mobile {\n        .chat + .chat-closed {\n            bottom: 0 !important;\n        }\n\n        .flyMessage + .chat-closed {\n            bottom: 0 !important;\n        }\n    }\n\n    [class*='chatSize'] .chat-closed #dnd-indicator {\n        transition: none;\n    }\n\n    .onlyBubble,\n    .bubbleWithLabel {\n        #new-message,\n        #dnd-indicator {\n            top: 14px;\n            right: 14px;\n            transition: none;\n        }\n\n        #new-message + #dnd-indicator {\n            right: 3px;\n        }\n    }\n\n    .onlyBubbleLarge {\n        #new-message,\n        #dnd-indicator {\n            top: 14px;\n            right: 20px;\n            transition: none;\n        }\n\n        #new-message + #dnd-indicator {\n            right: 10px;\n        }\n    }\n\n    .onlyBubbleMedium {\n        #new-message,\n        #dnd-indicator {\n            top: 7px;\n            transition: none;\n        }\n    }\n\n    .onlyBubbleSmall {\n        #new-message,\n        #dnd-indicator {\n            top: -3px;\n            transition: none;\n            right: 3px;\n        }\n\n        #new-message + #dnd-indicator {\n            right: -7px;\n        }\n    }\n\n    .onlyBubbleSmall,\n    .onlyBubbleMedium,\n    .onlyBubbleLarge {\n        #button {\n            transition: none;\n            transform: translateY(0);\n        }\n    }\n\n    .onlyBubbleSmall #button {\n        width: 60px;\n        height: 60px;\n    }\n\n    .onlyBubbleMedium #button {\n        width: 80px;\n        height: 80px;\n    }\n\n    .onlyBubbleLarge #button {\n        width: 94px;\n        height: 94px;\n    }\n}\n", "html {\n    box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n    box-sizing: inherit;\n}\n\nbody,\ninput,\ntextarea,\nselect,\nbutton {\n    font-family: 'Mulish', sans-serif;\n    letter-spacing: -0.24px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    color: #06132b;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n    color: #8894ab;\n    opacity: 1;\n}\n\ninput:focus,\ninput:active,\ntextarea:focus,\ntextarea:active,\nselect:focus,\nselect:active {\n    border: 0;\n    outline: 0;\n}\n\ntable {\n    border-spacing: 0;\n}\n\ni {\n    user-select: none;\n}\n\nul {\n    list-style-type: none;\n}\n\n.emoji {\n    width: 20px;\n    margin: 0 2px -5px 2px;\n    user-select: none;\n}\n\n.lang-rtl {\n    /*! @noflip */\n    direction: rtl;\n    unicode-bidi: embed;\n}\n\n.widget-position-left {\n    .chat,\n    .start-group {\n        right: 48px;\n        left: auto;\n        .mobile & {\n            /*! @noflip */\n            right: 0;\n        }\n    }\n    #button {\n        &:not(.sidebar) {\n            /*! @noflip */\n            left: 0px;\n            /*! @noflip */\n            right: auto;\n        }\n        &.bubbleAnimation-exit {\n            right: 0px;\n            left: auto;\n        }\n        &.chat-open {\n            right: 0px;\n            left: auto;\n            .mobile & {\n                right: 0px;\n                left: auto;\n            }\n        }\n    }\n}\n\n@media print {\n    .frame-content {\n        display: none !important;\n    }\n}\n"],
                sourceRoot: ""
            }]), t.Z = u
        },
        5760: function(e, t, n) {
            "use strict";
            var i = n(6105),
                o = n.n(i),
                a = n(2856),
                r = n.n(a)()(o());
            r.push([e.id, ".emoji-mart,\n.emoji-mart * {\n    box-sizing: border-box;\n    line-height: 1.15;\n}\n\n.emoji-mart {\n    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;\n    font-size: 16px;\n    display: inline-block;\n    color: #222427;\n    border: 1px solid #d9d9d9;\n    border-radius: 5px;\n    background: #fff;\n}\n\n.emoji-mart .emoji-mart-emoji {\n    padding: 6px;\n}\n\n.emoji-mart-bar {\n    border: 0 solid #d9d9d9;\n}\n.emoji-mart-bar:first-child {\n    border-bottom-width: 1px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n.emoji-mart-bar:last-child {\n    border-top-width: 1px;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.emoji-mart-anchors {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 0 6px;\n    color: #858585;\n    line-height: 0;\n}\n\n.emoji-mart-anchor {\n    position: relative;\n    display: block;\n    flex: 1 1 auto;\n    color: #858585;\n    text-align: center;\n    padding: 12px 4px;\n    overflow: hidden;\n    transition: color 0.1s ease-out;\n    margin: 0;\n    box-shadow: none;\n    background: none;\n    border: none;\n}\n.emoji-mart-anchor:focus {\n    outline: 0;\n}\n.emoji-mart-anchor:hover,\n.emoji-mart-anchor:focus,\n.emoji-mart-anchor-selected {\n    color: #464646;\n}\n\n.emoji-mart-anchor-selected .emoji-mart-anchor-bar {\n    bottom: 0;\n}\n\n.emoji-mart-anchor-bar {\n    position: absolute;\n    bottom: -3px;\n    left: 0;\n    width: 100%;\n    height: 3px;\n    background-color: #464646;\n}\n\n.emoji-mart-anchors i {\n    display: inline-block;\n    width: 100%;\n    max-width: 22px;\n}\n\n.emoji-mart-anchors svg,\n.emoji-mart-anchors img {\n    fill: currentColor;\n    max-height: 18px;\n}\n\n.emoji-mart-scroll {\n    overflow-y: scroll;\n    overflow-x: hidden;\n    height: 270px;\n    padding: 0 6px 6px 6px;\n    will-change: transform; /* avoids \"repaints on scroll\" in mobile Chrome */\n}\n\n.emoji-mart-search {\n    margin-top: 6px;\n    padding: 0 6px;\n    position: relative;\n}\n\n.emoji-mart-search input {\n    font-size: 16px;\n    display: block;\n    width: 100%;\n    padding: 0.2em 0.6em;\n    border-radius: 25px;\n    border: 1px solid #d9d9d9;\n    outline: 0;\n}\n\n.emoji-mart-search input,\n.emoji-mart-search input::-webkit-search-decoration,\n.emoji-mart-search input::-webkit-search-cancel-button,\n.emoji-mart-search input::-webkit-search-results-button,\n.emoji-mart-search input::-webkit-search-results-decoration {\n    /* remove webkit/blink styles for <input type=\"search\">\n     * via https://stackoverflow.com/a/9422689 */\n    -webkit-appearance: none;\n}\n\n.emoji-mart-search-icon {\n    position: absolute;\n    top: 7px;\n    right: 11px;\n    z-index: 2;\n    padding: 2px 5px 1px;\n    border: none;\n    background: none;\n}\n\n.emoji-mart-category .emoji-mart-emoji span {\n    z-index: 1;\n    position: relative;\n    text-align: center;\n    cursor: default;\n}\n\n.emoji-mart-category .emoji-mart-emoji:hover:before {\n    z-index: 0;\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #f4f4f4;\n    border-radius: 100%;\n}\n\n.emoji-mart-category-label {\n    z-index: 2;\n    position: relative;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n}\n\n.emoji-mart-category-label span {\n    display: block;\n    width: 100%;\n    font-weight: 500;\n    padding: 5px 6px;\n    background-color: #fff;\n    background-color: rgba(255, 255, 255, 0.95);\n}\n\n.emoji-mart-category-list {\n    margin: 0;\n    padding: 0;\n}\n\n.emoji-mart-category-list li {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block;\n}\n\n.emoji-mart-emoji {\n    position: relative;\n    display: inline-block;\n    font-size: 0;\n    margin: 0;\n    padding: 0;\n    border: none;\n    background: none;\n    box-shadow: none;\n}\n\n.emoji-mart-emoji-native {\n    font-family: 'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI', 'Apple Color Emoji',\n        'Twemoji Mozilla', 'Noto Color Emoji', 'Android Emoji';\n}\n\n.emoji-mart-no-results {\n    font-size: 14px;\n    text-align: center;\n    padding-top: 70px;\n    color: #858585;\n}\n.emoji-mart-no-results-img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}\n.emoji-mart-no-results .emoji-mart-category-label {\n    display: none;\n}\n.emoji-mart-no-results .emoji-mart-no-results-label {\n    margin-top: 0.2em;\n}\n.emoji-mart-no-results .emoji-mart-emoji:hover:before {\n    content: none;\n}\n\n/* For screenreaders only, via https://stackoverflow.com/a/19758620 */\n.emoji-mart-sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    border: 0;\n}\n", "", {
                version: 3,
                sources: ["webpack://./src/styles/vendor/emoji-mart.css"],
                names: [],
                mappings: "AAAA;;IAEI,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,4EAA4E;IAC5E,eAAe;IACf,qBAAqB;IACrB,cAAc;IACd,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;AACA;IACI,wBAAwB;IACxB,2BAA2B;IAC3B,4BAA4B;AAChC;AACA;IACI,qBAAqB;IACrB,8BAA8B;IAC9B,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,cAAc;IACd,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,+BAA+B;IAC/B,SAAS;IACT,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,UAAU;AACd;AACA;;;IAGI,cAAc;AAClB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,OAAO;IACP,WAAW;IACX,WAAW;IACX,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;IACrB,WAAW;IACX,eAAe;AACnB;;AAEA;;IAEI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,sBAAsB,EAAE,iDAAiD;AAC7E;;AAEA;IACI,eAAe;IACf,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,WAAW;IACX,oBAAoB;IACpB,mBAAmB;IACnB,yBAAyB;IACzB,UAAU;AACd;;AAEA;;;;;IAKI;gDAC4C;IAC5C,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,UAAU;IACV,oBAAoB;IACpB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,wBAAwB;IACxB,gBAAgB;IAChB,MAAM;AACV;;AAEA;IACI,cAAc;IACd,WAAW;IACX,gBAAgB;IAChB,gBAAgB;IAChB,sBAAsB;IACtB,2CAA2C;AAC/C;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,SAAS;IACT,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,SAAS;IACT,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI;8DAC0D;AAC9D;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;AAClB;AACA;IACI,cAAc;IACd,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;AACd;AACA;IACI,aAAa;AACjB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;AACjB;;AAEA,qEAAqE;AACrE;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,sBAAsB;IACtB,SAAS;AACb",
                sourcesContent: [".emoji-mart,\n.emoji-mart * {\n    box-sizing: border-box;\n    line-height: 1.15;\n}\n\n.emoji-mart {\n    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;\n    font-size: 16px;\n    display: inline-block;\n    color: #222427;\n    border: 1px solid #d9d9d9;\n    border-radius: 5px;\n    background: #fff;\n}\n\n.emoji-mart .emoji-mart-emoji {\n    padding: 6px;\n}\n\n.emoji-mart-bar {\n    border: 0 solid #d9d9d9;\n}\n.emoji-mart-bar:first-child {\n    border-bottom-width: 1px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n.emoji-mart-bar:last-child {\n    border-top-width: 1px;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.emoji-mart-anchors {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 0 6px;\n    color: #858585;\n    line-height: 0;\n}\n\n.emoji-mart-anchor {\n    position: relative;\n    display: block;\n    flex: 1 1 auto;\n    color: #858585;\n    text-align: center;\n    padding: 12px 4px;\n    overflow: hidden;\n    transition: color 0.1s ease-out;\n    margin: 0;\n    box-shadow: none;\n    background: none;\n    border: none;\n}\n.emoji-mart-anchor:focus {\n    outline: 0;\n}\n.emoji-mart-anchor:hover,\n.emoji-mart-anchor:focus,\n.emoji-mart-anchor-selected {\n    color: #464646;\n}\n\n.emoji-mart-anchor-selected .emoji-mart-anchor-bar {\n    bottom: 0;\n}\n\n.emoji-mart-anchor-bar {\n    position: absolute;\n    bottom: -3px;\n    left: 0;\n    width: 100%;\n    height: 3px;\n    background-color: #464646;\n}\n\n.emoji-mart-anchors i {\n    display: inline-block;\n    width: 100%;\n    max-width: 22px;\n}\n\n.emoji-mart-anchors svg,\n.emoji-mart-anchors img {\n    fill: currentColor;\n    max-height: 18px;\n}\n\n.emoji-mart-scroll {\n    overflow-y: scroll;\n    overflow-x: hidden;\n    height: 270px;\n    padding: 0 6px 6px 6px;\n    will-change: transform; /* avoids \"repaints on scroll\" in mobile Chrome */\n}\n\n.emoji-mart-search {\n    margin-top: 6px;\n    padding: 0 6px;\n    position: relative;\n}\n\n.emoji-mart-search input {\n    font-size: 16px;\n    display: block;\n    width: 100%;\n    padding: 0.2em 0.6em;\n    border-radius: 25px;\n    border: 1px solid #d9d9d9;\n    outline: 0;\n}\n\n.emoji-mart-search input,\n.emoji-mart-search input::-webkit-search-decoration,\n.emoji-mart-search input::-webkit-search-cancel-button,\n.emoji-mart-search input::-webkit-search-results-button,\n.emoji-mart-search input::-webkit-search-results-decoration {\n    /* remove webkit/blink styles for <input type=\"search\">\n     * via https://stackoverflow.com/a/9422689 */\n    -webkit-appearance: none;\n}\n\n.emoji-mart-search-icon {\n    position: absolute;\n    top: 7px;\n    right: 11px;\n    z-index: 2;\n    padding: 2px 5px 1px;\n    border: none;\n    background: none;\n}\n\n.emoji-mart-category .emoji-mart-emoji span {\n    z-index: 1;\n    position: relative;\n    text-align: center;\n    cursor: default;\n}\n\n.emoji-mart-category .emoji-mart-emoji:hover:before {\n    z-index: 0;\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #f4f4f4;\n    border-radius: 100%;\n}\n\n.emoji-mart-category-label {\n    z-index: 2;\n    position: relative;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n}\n\n.emoji-mart-category-label span {\n    display: block;\n    width: 100%;\n    font-weight: 500;\n    padding: 5px 6px;\n    background-color: #fff;\n    background-color: rgba(255, 255, 255, 0.95);\n}\n\n.emoji-mart-category-list {\n    margin: 0;\n    padding: 0;\n}\n\n.emoji-mart-category-list li {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block;\n}\n\n.emoji-mart-emoji {\n    position: relative;\n    display: inline-block;\n    font-size: 0;\n    margin: 0;\n    padding: 0;\n    border: none;\n    background: none;\n    box-shadow: none;\n}\n\n.emoji-mart-emoji-native {\n    font-family: 'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI', 'Apple Color Emoji',\n        'Twemoji Mozilla', 'Noto Color Emoji', 'Android Emoji';\n}\n\n.emoji-mart-no-results {\n    font-size: 14px;\n    text-align: center;\n    padding-top: 70px;\n    color: #858585;\n}\n.emoji-mart-no-results-img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}\n.emoji-mart-no-results .emoji-mart-category-label {\n    display: none;\n}\n.emoji-mart-no-results .emoji-mart-no-results-label {\n    margin-top: 0.2em;\n}\n.emoji-mart-no-results .emoji-mart-emoji:hover:before {\n    content: none;\n}\n\n/* For screenreaders only, via https://stackoverflow.com/a/19758620 */\n.emoji-mart-sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    border: 0;\n}\n"],
                sourceRoot: ""
            }]), t.Z = r
        },
        5480: function(e) {
            "use strict";
            e.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIADwAPAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgn/2gAIAQEAAAAA+lYAj8cy5ndHO8VNN0IFrk62gjEYudH9iLQPN6lec+0VmtG038L9UpWh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAhAAAAAAAP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMQAAAAAAD/xAAuEAABAwMACAUEAwAAAAAAAAABAgMEAAURBhASEyAhQVEiMmKRwSNxcoExQqH/2gAIAQEAAT8A14PHdbuuMvcMY2wPGs88Z6ClT5qzlUh0n8qjXmawoFay8jqlfwaZebkNIdbOUrGRwCpxJmySf53qtdgJNu+zq+G7N7u4yPUoK9xrsyC3bWfUVL9zw6QxiS1IA5Y2F/Gpplb7qGkeZasCkNpabQhPlQkJH64CMDJ5DvWkk+Gu3uRm3wp5ak42Dkp2TnJNC4S2hhyPvT0Wg4z9xVqmuN3SNJl/TabUcITzxkY2j3piRHkjLLrbg9Ks1gjVL0nnvLVuAllHTllf7Jp+VKknLz7jn5K+KAAGNY8JykkHuDg0xe7rG5JkqUB/VY2x/tR9LkBvEmMsud2/KfeumrtXSu9dKFZNf//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8AB//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AB//Z"
        },
        1076: function(e) {
            "use strict";
            e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzIgMTUiPgogIDxwYXRoIGQ9Ik0zNDkuOCAxLjRDMzM0LjUuNCAzMTguNSAwIDMwMiAwaC0yLjVjLTkuMSAwLTE4LjQuMS0yNy44LjQtMzQuNSAxLTY4LjMgMy0xMDIuMyA0LjctMTQgLjUtMjggMS4yLTQxLjUgMS42Qzg0IDcuNyA0MS42IDUuMyAwIDIuMnY4LjRjNDEuNiAzIDg0IDUuMyAxMjguMiA0LjEgMTMuNS0uNCAyNy41LTEuMSA0MS41LTEuNiAzMy45LTEuNyA2Ny44LTMuNiAxMDIuMy00LjcgOS40LS4zIDE4LjctLjQgMjcuOC0uNGgyLjVjMTYuNSAwIDMyLjQuNCA0Ny44IDEuNCA4LjQuMyAxNS42LjcgMjIgMS4yVjIuMmMtNi41LS41LTEzLjgtLjUtMjIuMy0uOHoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg=="
        },
        8076: function(e, t, n) {
            "use strict";
            n.d(t, {
                OH: function() {
                    return a
                },
                q: function() {
                    return Yn
                },
                vc: function() {
                    return Mt
                },
                to: function() {
                    return Tn
                },
                Ab: function() {
                    return St
                },
                q_: function() {
                    return yn
                },
                ZI: function() {
                    return In
                },
                Yz: function() {
                    return kn
                }
            });
            var i = n(1914),
                o = Object.defineProperty,
                a = {};
            ((e, t) => {
                for (var n in t) o(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            })(a, {
                assign: () => j,
                colors: () => U,
                createStringInterpolator: () => R,
                skipAnimation: () => _,
                to: () => T,
                willAdvance: () => L
            });
            var r = w(),
                s = e => C(e, r),
                l = w();
            s.write = e => C(e, l);
            var d = w();
            s.onStart = e => C(e, d);
            var A = w();
            s.onFrame = e => C(e, A);
            var c = w();
            s.onFinish = e => C(e, c);
            var u = [];
            s.setTimeout = (e, t) => {
                const n = s.now() + t,
                    i = () => {
                        const e = u.findIndex((e => e.cancel == i));
                        ~e && u.splice(e, 1), m -= ~e ? 1 : 0
                    },
                    o = {
                        time: n,
                        handler: e,
                        cancel: i
                    };
                return u.splice(p(n), 0, o), m += 1, b(), o
            };
            var p = e => ~(~u.findIndex((t => t.time > e)) || ~u.length);
            s.cancel = e => {
                d.delete(e), A.delete(e), c.delete(e), r.delete(e), l.delete(e)
            }, s.sync = e => {
                g = !0, s.batchedUpdates(e), g = !1
            }, s.throttle = e => {
                let t;

                function n() {
                    try {
                        e(...t)
                    } finally {
                        t = null
                    }
                }

                function i() {
                    for (var e = arguments.length, i = new Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                    t = i, s.onStart(n)
                }
                return i.handler = e, i.cancel = () => {
                    d.delete(n), t = null
                }, i
            };
            var f = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
            s.use = e => f = e, s.now = "undefined" != typeof performance ? () => performance.now() : Date.now, s.batchedUpdates = e => e(), s.catch = console.error, s.frameLoop = "always", s.advance = () => {
                "demand" !== s.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : v()
            };
            var h = -1,
                m = 0,
                g = !1;

            function C(e, t) {
                g ? (t.delete(e), e(0)) : (t.add(e), b())
            }

            function b() {
                h < 0 && (h = 0, "demand" !== s.frameLoop && f(x))
            }

            function x() {
                ~h && (f(x), s.batchedUpdates(v))
            }

            function v() {
                const e = h;
                h = s.now();
                const t = p(h);
                t && (y(u.splice(0, t), (e => e.handler())), m -= t), m ? (d.flush(), r.flush(e ? Math.min(64, h - e) : 16.667), A.flush(), l.flush(), c.flush()) : h = -1
            }

            function w() {
                let e = new Set,
                    t = e;
                return {
                    add(n) {
                        m += t != e || e.has(n) ? 0 : 1, e.add(n)
                    },
                    delete(n) {
                        return m -= t == e && e.has(n) ? 1 : 0, e.delete(n)
                    },
                    flush(n) {
                        t.size && (e = new Set, m -= t.size, y(t, (t => t(n) && e.add(t))), m += e.size, t = e)
                    }
                }
            }

            function y(e, t) {
                e.forEach((e => {
                    try {
                        t(e)
                    } catch (e) {
                        s.catch(e)
                    }
                }))
            }

            function B() {}
            var I = {
                arr: Array.isArray,
                obj: e => !!e && "Object" === e.constructor.name,
                fun: e => "function" == typeof e,
                str: e => "string" == typeof e,
                num: e => "number" == typeof e,
                und: e => void 0 === e
            };

            function k(e, t) {
                if (I.arr(e)) {
                    if (!I.arr(t) || e.length !== t.length) return !1;
                    for (let n = 0; n < e.length; n++)
                        if (e[n] !== t[n]) return !1;
                    return !0
                }
                return e === t
            }
            var E = (e, t) => e.forEach(t);

            function S(e, t, n) {
                if (I.arr(e))
                    for (let i = 0; i < e.length; i++) t.call(n, e[i], `${i}`);
                else
                    for (const i in e) e.hasOwnProperty(i) && t.call(n, e[i], i)
            }
            var M = e => I.und(e) ? [] : I.arr(e) ? e : [e];

            function Z(e, t) {
                if (e.size) {
                    const n = Array.from(e);
                    e.clear(), E(n, t)
                }
            }
            var R, T, D = function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                    return Z(e, (e => e(...n)))
                },
                N = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
                U = null,
                _ = !1,
                L = B,
                j = e => {
                    e.to && (T = e.to), e.now && (s.now = e.now), void 0 !== e.colors && (U = e.colors), null != e.skipAnimation && (_ = e.skipAnimation), e.createStringInterpolator && (R = e.createStringInterpolator), e.requestAnimationFrame && s.use(e.requestAnimationFrame), e.batchedUpdates && (s.batchedUpdates = e.batchedUpdates), e.willAdvance && (L = e.willAdvance), e.frameLoop && (s.frameLoop = e.frameLoop)
                },
                O = new Set,
                F = [],
                W = [],
                z = 0,
                P = {
                    get idle() {
                        return !O.size && !F.length
                    },
                    start(e) {
                        z > e.priority ? (O.add(e), s.onStart(H)) : (q(e), s(Y))
                    },
                    advance: Y,
                    sort(e) {
                        if (z) s.onFrame((() => P.sort(e)));
                        else {
                            const t = F.indexOf(e);
                            ~t && (F.splice(t, 1), $(e))
                        }
                    },
                    clear() {
                        F = [], O.clear()
                    }
                };

            function H() {
                O.forEach(q), O.clear(), s(Y)
            }

            function q(e) {
                F.includes(e) || $(e)
            }

            function $(e) {
                F.splice(function(e, t) {
                    const n = e.findIndex(t);
                    return n < 0 ? e.length : n
                }(F, (t => t.priority > e.priority)), 0, e)
            }

            function Y(e) {
                const t = W;
                for (let n = 0; n < F.length; n++) {
                    const i = F[n];
                    z = i.priority, i.idle || (L(i), i.advance(e), i.idle || t.push(i))
                }
                return z = 0, (W = F).length = 0, (F = t).length > 0
            }
            var G = "[-+]?\\d*\\.?\\d+",
                V = G + "%";

            function J() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)"
            }
            var X = new RegExp("rgb" + J(G, G, G)),
                Q = new RegExp("rgba" + J(G, G, G, G)),
                K = new RegExp("hsl" + J(G, V, V)),
                ee = new RegExp("hsla" + J(G, V, V, G)),
                te = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                ne = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                ie = /^#([0-9a-fA-F]{6})$/,
                oe = /^#([0-9a-fA-F]{8})$/;

            function ae(e, t, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
            }

            function re(e, t, n) {
                const i = n < .5 ? n * (1 + t) : n + t - n * t,
                    o = 2 * n - i,
                    a = ae(o, i, e + 1 / 3),
                    r = ae(o, i, e),
                    s = ae(o, i, e - 1 / 3);
                return Math.round(255 * a) << 24 | Math.round(255 * r) << 16 | Math.round(255 * s) << 8
            }

            function se(e) {
                const t = parseInt(e, 10);
                return t < 0 ? 0 : t > 255 ? 255 : t
            }

            function le(e) {
                return (parseFloat(e) % 360 + 360) % 360 / 360
            }

            function de(e) {
                const t = parseFloat(e);
                return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
            }

            function Ae(e) {
                const t = parseFloat(e);
                return t < 0 ? 0 : t > 100 ? 1 : t / 100
            }

            function ce(e) {
                let t = function(e) {
                    let t;
                    return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = ie.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : U && void 0 !== U[e] ? U[e] : (t = X.exec(e)) ? (se(t[1]) << 24 | se(t[2]) << 16 | se(t[3]) << 8 | 255) >>> 0 : (t = Q.exec(e)) ? (se(t[1]) << 24 | se(t[2]) << 16 | se(t[3]) << 8 | de(t[4])) >>> 0 : (t = te.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = oe.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ne.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = K.exec(e)) ? (255 | re(le(t[1]), Ae(t[2]), Ae(t[3]))) >>> 0 : (t = ee.exec(e)) ? (re(le(t[1]), Ae(t[2]), Ae(t[3])) | de(t[4])) >>> 0 : null
                }(e);
                if (null === t) return e;
                t = t || 0;
                return `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`
            }
            var ue = (e, t, n) => {
                if (I.fun(e)) return e;
                if (I.arr(e)) return ue({
                    range: e,
                    output: t,
                    extrapolate: n
                });
                if (I.str(e.output[0])) return R(e);
                const i = e,
                    o = i.output,
                    a = i.range || [0, 1],
                    r = i.extrapolateLeft || i.extrapolate || "extend",
                    s = i.extrapolateRight || i.extrapolate || "extend",
                    l = i.easing || (e => e);
                return e => {
                    const t = function(e, t) {
                        for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
                        return n - 1
                    }(e, a);
                    return function(e, t, n, i, o, a, r, s, l) {
                        let d = l ? l(e) : e;
                        if (d < t) {
                            if ("identity" === r) return d;
                            "clamp" === r && (d = t)
                        }
                        if (d > n) {
                            if ("identity" === s) return d;
                            "clamp" === s && (d = n)
                        }
                        if (i === o) return i;
                        if (t === n) return e <= t ? i : o;
                        t === -1 / 0 ? d = -d : n === 1 / 0 ? d -= t : d = (d - t) / (n - t);
                        d = a(d), i === -1 / 0 ? d = -d : o === 1 / 0 ? d += i : d = d * (o - i) + i;
                        return d
                    }(e, a[t], a[t + 1], o[t], o[t + 1], l, r, s, i.map)
                }
            };
            var pe = 1.70158,
                fe = 1.525 * pe,
                he = pe + 1,
                me = 2 * Math.PI / 3,
                ge = 2 * Math.PI / 4.5,
                Ce = e => {
                    const t = 7.5625,
                        n = 2.75;
                    return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
                },
                be = {
                    linear: e => e,
                    easeInQuad: e => e * e,
                    easeOutQuad: e => 1 - (1 - e) * (1 - e),
                    easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
                    easeInCubic: e => e * e * e,
                    easeOutCubic: e => 1 - Math.pow(1 - e, 3),
                    easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
                    easeInQuart: e => e * e * e * e,
                    easeOutQuart: e => 1 - Math.pow(1 - e, 4),
                    easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
                    easeInQuint: e => e * e * e * e * e,
                    easeOutQuint: e => 1 - Math.pow(1 - e, 5),
                    easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
                    easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
                    easeOutSine: e => Math.sin(e * Math.PI / 2),
                    easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
                    easeInExpo: e => 0 === e ? 0 : Math.pow(2, 10 * e - 10),
                    easeOutExpo: e => 1 === e ? 1 : 1 - Math.pow(2, -10 * e),
                    easeInOutExpo: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
                    easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                    easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
                    easeInBack: e => he * e * e * e - pe * e * e,
                    easeOutBack: e => 1 + he * Math.pow(e - 1, 3) + pe * Math.pow(e - 1, 2),
                    easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - fe) / 2 : (Math.pow(2 * e - 2, 2) * ((fe + 1) * (2 * e - 2) + fe) + 2) / 2,
                    easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * me),
                    easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * me) + 1,
                    easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * ge) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * ge) / 2 + 1,
                    easeInBounce: e => 1 - Ce(1 - e),
                    easeOutBounce: Ce,
                    easeInOutBounce: e => e < .5 ? (1 - Ce(1 - 2 * e)) / 2 : (1 + Ce(2 * e - 1)) / 2,
                    steps: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "end";
                        return n => {
                            const i = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e,
                                o = "end" === t ? Math.floor(i) : Math.ceil(i);
                            return a = 0, r = 1, s = o / e, Math.min(Math.max(s, a), r);
                            var a, r, s
                        }
                    }
                },
                xe = Symbol.for("FluidValue.get"),
                ve = Symbol.for("FluidValue.observers"),
                we = e => Boolean(e && e[xe]),
                ye = e => e && e[xe] ? e[xe]() : e,
                Be = e => e[ve] || null;

            function Ie(e, t) {
                const n = e[ve];
                n && n.forEach((e => {
                    ! function(e, t) {
                        e.eventObserved ? e.eventObserved(t) : e(t)
                    }(e, t)
                }))
            }
            var ke = class {
                    constructor(e) {
                        if (!e && !(e = this.get)) throw Error("Unknown getter");
                        Ee(this, e)
                    }
                },
                Ee = (e, t) => Re(e, xe, t);

            function Se(e, t) {
                if (e[xe]) {
                    let n = e[ve];
                    n || Re(e, ve, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
                }
                return t
            }

            function Me(e, t) {
                const n = e[ve];
                if (n && n.has(t)) {
                    const i = n.size - 1;
                    i ? n.delete(t) : e[ve] = null, e.observerRemoved && e.observerRemoved(i, t)
                }
            }
            var Ze, Re = (e, t, n) => Object.defineProperty(e, t, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }),
                Te = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                De = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
                Ne = new RegExp(`(${Te.source})(%|[a-z]+)`, "i"),
                Ue = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
                _e = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
                Le = e => {
                    const [t, n] = je(e);
                    if (!t || N()) return e;
                    const i = window.getComputedStyle(document.documentElement).getPropertyValue(t);
                    if (i) return i.trim();
                    if (n && n.startsWith("--")) {
                        const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
                        return t || e
                    }
                    return n && _e.test(n) ? Le(n) : n || e
                },
                je = e => {
                    const t = _e.exec(e);
                    if (!t) return [, ];
                    const [, n, i] = t;
                    return [n, i]
                },
                Oe = (e, t, n, i, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(i)}, ${o})`,
                Fe = e => {
                    Ze || (Ze = U ? new RegExp(`(${Object.keys(U).join("|")})(?!\\w)`, "g") : /^\b$/);
                    const t = e.output.map((e => ye(e).replace(_e, Le).replace(De, ce).replace(Ze, ce))),
                        n = t.map((e => e.match(Te).map(Number))),
                        i = n[0].map(((e, t) => n.map((e => {
                            if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                            return e[t]
                        })))).map((t => ue({ ...e,
                            output: t
                        })));
                    return e => {
                        const n = !Ne.test(t[0]) && t.find((e => Ne.test(e))) ? .replace(Te, "");
                        let o = 0;
                        return t[0].replace(Te, (() => `${i[o++](e)}${n||""}`)).replace(Ue, Oe)
                    }
                },
                We = "react-spring: ",
                ze = e => {
                    const t = e;
                    let n = !1;
                    if ("function" != typeof t) throw new TypeError(`${We}once requires a function parameter`);
                    return function() {
                        n || (t(...arguments), n = !0)
                    }
                },
                Pe = ze(console.warn);
            var He = ze(console.warn);

            function qe(e) {
                return I.str(e) && ("#" == e[0] || /\d/.test(e) || !N() && _e.test(e) || e in (U || {}))
            }
            var $e = N() ? i.useEffect : i.useLayoutEffect,
                Ye = () => {
                    const e = (0, i.useRef)(!1);
                    return $e((() => (e.current = !0, () => {
                        e.current = !1
                    })), []), e
                };

            function Ge() {
                const e = (0, i.useState)()[1],
                    t = Ye();
                return () => {
                    t.current && e(Math.random())
                }
            }
            var Ve = e => (0, i.useEffect)(e, Je),
                Je = [];

            function Xe(e) {
                const t = (0, i.useRef)();
                return (0, i.useEffect)((() => {
                    t.current = e
                })), t.current
            }
            var Qe = Symbol.for("Animated:node"),
                Ke = e => e && e[Qe],
                et = (e, t) => {
                    return n = e, i = Qe, o = t, Object.defineProperty(n, i, {
                        value: o,
                        writable: !0,
                        configurable: !0
                    });
                    var n, i, o
                },
                tt = e => e && e[Qe] && e[Qe].getPayload(),
                nt = class {
                    constructor() {
                        et(this, this)
                    }
                    getPayload() {
                        return this.payload || []
                    }
                },
                it = class extends nt {
                    constructor(e) {
                        super(), this._value = e, this.done = !0, this.durationProgress = 0, I.num(this._value) && (this.lastPosition = this._value)
                    }
                    static create(e) {
                        return new it(e)
                    }
                    getPayload() {
                        return [this]
                    }
                    getValue() {
                        return this._value
                    }
                    setValue(e, t) {
                        return I.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
                    }
                    reset() {
                        const {
                            done: e
                        } = this;
                        this.done = !1, I.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
                    }
                },
                ot = class extends it {
                    constructor(e) {
                        super(0), this._string = null, this._toString = ue({
                            output: [e, e]
                        })
                    }
                    static create(e) {
                        return new ot(e)
                    }
                    getValue() {
                        const e = this._string;
                        return null == e ? this._string = this._toString(this._value) : e
                    }
                    setValue(e) {
                        if (I.str(e)) {
                            if (e == this._string) return !1;
                            this._string = e, this._value = 1
                        } else {
                            if (!super.setValue(e)) return !1;
                            this._string = null
                        }
                        return !0
                    }
                    reset(e) {
                        e && (this._toString = ue({
                            output: [this.getValue(), e]
                        })), this._value = 0, super.reset()
                    }
                },
                at = {
                    dependencies: null
                },
                rt = class extends nt {
                    constructor(e) {
                        super(), this.source = e, this.setValue(e)
                    }
                    getValue(e) {
                        const t = {};
                        return S(this.source, ((n, i) => {
                            var o;
                            (o = n) && o[Qe] === o ? t[i] = n.getValue(e) : we(n) ? t[i] = ye(n) : e || (t[i] = n)
                        })), t
                    }
                    setValue(e) {
                        this.source = e, this.payload = this._makePayload(e)
                    }
                    reset() {
                        this.payload && E(this.payload, (e => e.reset()))
                    }
                    _makePayload(e) {
                        if (e) {
                            const t = new Set;
                            return S(e, this._addToPayload, t), Array.from(t)
                        }
                    }
                    _addToPayload(e) {
                        at.dependencies && we(e) && at.dependencies.add(e);
                        const t = tt(e);
                        t && E(t, (e => this.add(e)))
                    }
                },
                st = class extends rt {
                    constructor(e) {
                        super(e)
                    }
                    static create(e) {
                        return new st(e)
                    }
                    getValue() {
                        return this.source.map((e => e.getValue()))
                    }
                    setValue(e) {
                        const t = this.getPayload();
                        return e.length == t.length ? t.map(((t, n) => t.setValue(e[n]))).some(Boolean) : (super.setValue(e.map(lt)), !0)
                    }
                };

            function lt(e) {
                return (qe(e) ? ot : it).create(e)
            }

            function dt(e) {
                const t = Ke(e);
                return t ? t.constructor : I.arr(e) ? st : qe(e) ? ot : it
            }
            var At = (e, t) => {
                    const n = !I.fun(e) || e.prototype && e.prototype.isReactComponent;
                    return (0, i.forwardRef)(((o, a) => {
                        const r = (0, i.useRef)(null),
                            l = n && (0, i.useCallback)((e => {
                                r.current = function(e, t) {
                                    e && (I.fun(e) ? e(t) : e.current = t);
                                    return t
                                }(a, e)
                            }), [a]),
                            [d, A] = function(e, t) {
                                const n = new Set;
                                at.dependencies = n, e.style && (e = { ...e,
                                    style: t.createAnimatedStyle(e.style)
                                });
                                return e = new rt(e), at.dependencies = null, [e, n]
                            }(o, t),
                            c = Ge(),
                            u = () => {
                                const e = r.current;
                                if (n && !e) return;
                                !1 === (!!e && t.applyAnimatedValues(e, d.getValue(!0))) && c()
                            },
                            p = new ct(u, A),
                            f = (0, i.useRef)();
                        $e((() => (f.current = p, E(A, (e => Se(e, p))), () => {
                            f.current && (E(f.current.deps, (e => Me(e, f.current))), s.cancel(f.current.update))
                        }))), (0, i.useEffect)(u, []), Ve((() => () => {
                            const e = f.current;
                            E(e.deps, (t => Me(t, e)))
                        }));
                        const h = t.getComponentProps(d.getValue());
                        return i.createElement(e, { ...h,
                            ref: l
                        })
                    }))
                },
                ct = class {
                    constructor(e, t) {
                        this.update = e, this.deps = t
                    }
                    eventObserved(e) {
                        "change" == e.type && s.write(this.update)
                    }
                };
            var ut = Symbol.for("AnimatedComponent"),
                pt = e => I.str(e) ? e : e && I.str(e.displayName) ? e.displayName : I.fun(e) && e.name || null;

            function ft(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                return I.fun(e) ? e(...n) : e
            }
            var ht = (e, t) => !0 === e || !!(t && e && (I.fun(e) ? e(t) : M(e).includes(t))),
                mt = (e, t) => I.obj(e) ? t && e[t] : e,
                gt = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
                Ct = e => e,
                bt = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ct,
                        n = xt;
                    e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
                    const i = {};
                    for (const o of n) {
                        const n = t(e[o], o);
                        I.und(n) || (i[o] = n)
                    }
                    return i
                },
                xt = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
                vt = {
                    config: 1,
                    from: 1,
                    to: 1,
                    ref: 1,
                    loop: 1,
                    reset: 1,
                    pause: 1,
                    cancel: 1,
                    reverse: 1,
                    immediate: 1,
                    default: 1,
                    delay: 1,
                    onProps: 1,
                    onStart: 1,
                    onChange: 1,
                    onPause: 1,
                    onResume: 1,
                    onRest: 1,
                    onResolve: 1,
                    items: 1,
                    trail: 1,
                    sort: 1,
                    expires: 1,
                    initial: 1,
                    enter: 1,
                    update: 1,
                    leave: 1,
                    children: 1,
                    onDestroyed: 1,
                    keys: 1,
                    callId: 1,
                    parentId: 1
                };

            function wt(e) {
                const t = function(e) {
                    const t = {};
                    let n = 0;
                    if (S(e, ((e, i) => {
                            vt[i] || (t[i] = e, n++)
                        })), n) return t
                }(e);
                if (t) {
                    const n = {
                        to: t
                    };
                    return S(e, ((e, i) => i in t || (n[i] = e))), n
                }
                return { ...e
                }
            }

            function yt(e) {
                return e = ye(e), I.arr(e) ? e.map(yt) : qe(e) ? a.createStringInterpolator({
                    range: [0, 1],
                    output: [e, e]
                })(1) : e
            }

            function Bt(e) {
                for (const t in e) return !0;
                return !1
            }

            function It(e) {
                return I.fun(e) || I.arr(e) && I.obj(e[0])
            }

            function kt(e, t) {
                e.ref ? .delete(e), t ? .delete(e)
            }

            function Et(e, t) {
                t && e.ref !== t && (e.ref ? .delete(e), t.add(e), e.ref = t)
            }

            function St(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3;
                $e((() => {
                    if (t) {
                        let i = 0;
                        E(e, ((e, o) => {
                            const a = e.current;
                            if (a.length) {
                                let r = n * t[o];
                                isNaN(r) ? r = i : i = r, E(a, (e => {
                                    E(e.queue, (e => {
                                        const t = e.delay;
                                        e.delay = e => r + ft(t || 0, e)
                                    }))
                                })), e.start()
                            }
                        }))
                    } else {
                        let t = Promise.resolve();
                        E(e, (e => {
                            const n = e.current;
                            if (n.length) {
                                const i = n.map((e => {
                                    const t = e.queue;
                                    return e.queue = [], t
                                }));
                                t = t.then((() => (E(n, ((e, t) => E(i[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
                            }
                        }))
                    }
                }))
            }
            var Mt = {
                    default: {
                        tension: 170,
                        friction: 26
                    },
                    gentle: {
                        tension: 120,
                        friction: 14
                    },
                    wobbly: {
                        tension: 180,
                        friction: 12
                    },
                    stiff: {
                        tension: 210,
                        friction: 20
                    },
                    slow: {
                        tension: 280,
                        friction: 60
                    },
                    molasses: {
                        tension: 280,
                        friction: 120
                    }
                },
                Zt = { ...Mt.default,
                    mass: 1,
                    damping: 1,
                    easing: be.linear,
                    clamp: !1
                };

            function Rt(e, t) {
                if (I.und(t.decay)) {
                    const n = !I.und(t.tension) || !I.und(t.friction);
                    !n && I.und(t.frequency) && I.und(t.damping) && I.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
                } else e.duration = void 0
            }
            var Tt = [];

            function Dt(e, t) {
                let {
                    key: n,
                    props: i,
                    defaultProps: o,
                    state: r,
                    actions: l
                } = t;
                return new Promise(((t, d) => {
                    let A, c, u = ht(i.cancel ? ? o ? .cancel, n);
                    if (u) h();
                    else {
                        I.und(i.pause) || (r.paused = ht(i.pause, n));
                        let e = o ? .pause;
                        !0 !== e && (e = r.paused || ht(e, n)), A = ft(i.delay || 0, n), e ? (r.resumeQueue.add(f), l.pause()) : (l.resume(), f())
                    }

                    function p() {
                        r.resumeQueue.add(f), r.timeouts.delete(c), c.cancel(), A = c.time - s.now()
                    }

                    function f() {
                        A > 0 && !a.skipAnimation ? (r.delayed = !0, c = s.setTimeout(h, A), r.pauseQueue.add(p), r.timeouts.add(c)) : h()
                    }

                    function h() {
                        r.delayed && (r.delayed = !1), r.pauseQueue.delete(p), r.timeouts.delete(c), e <= (r.cancelId || 0) && (u = !0);
                        try {
                            l.start({ ...i,
                                callId: e,
                                cancel: u
                            }, t)
                        } catch (e) {
                            d(e)
                        }
                    }
                }))
            }
            var Nt = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? Lt(e.get()) : t.every((e => e.noop)) ? Ut(e.get()) : _t(e.get(), t.every((e => e.finished))),
                Ut = e => ({
                    value: e,
                    noop: !0,
                    finished: !0,
                    cancelled: !1
                }),
                _t = function(e, t) {
                    return {
                        value: e,
                        finished: t,
                        cancelled: arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                    }
                },
                Lt = e => ({
                    value: e,
                    cancelled: !0,
                    finished: !1
                });

            function jt(e, t, n, i) {
                const {
                    callId: o,
                    parentId: r,
                    onRest: l
                } = t, {
                    asyncTo: d,
                    promise: A
                } = n;
                return r || e !== d || t.reset ? n.promise = (async () => {
                    n.asyncId = o, n.asyncTo = e;
                    const c = bt(t, ((e, t) => "onRest" === t ? void 0 : e));
                    let u, p;
                    const f = new Promise(((e, t) => (u = e, p = t))),
                        h = e => {
                            const t = o <= (n.cancelId || 0) && Lt(i) || o !== n.asyncId && _t(i, !1);
                            if (t) throw e.result = t, p(e), e
                        },
                        m = (e, t) => {
                            const r = new Ft,
                                s = new Wt;
                            return (async () => {
                                if (a.skipAnimation) throw Ot(n), s.result = _t(i, !1), p(s), s;
                                h(r);
                                const l = I.obj(e) ? { ...e
                                } : { ...t,
                                    to: e
                                };
                                l.parentId = o, S(c, ((e, t) => {
                                    I.und(l[t]) && (l[t] = e)
                                }));
                                const d = await i.start(l);
                                return h(r), n.paused && await new Promise((e => {
                                    n.resumeQueue.add(e)
                                })), d
                            })()
                        };
                    let g;
                    if (a.skipAnimation) return Ot(n), _t(i, !1);
                    try {
                        let t;
                        t = I.arr(e) ? (async e => {
                            for (const t of e) await m(t)
                        })(e) : Promise.resolve(e(m, i.stop.bind(i))), await Promise.all([t.then(u), f]), g = _t(i.get(), !0, !1)
                    } catch (e) {
                        if (e instanceof Ft) g = e.result;
                        else {
                            if (!(e instanceof Wt)) throw e;
                            g = e.result
                        }
                    } finally {
                        o == n.asyncId && (n.asyncId = r, n.asyncTo = r ? d : void 0, n.promise = r ? A : void 0)
                    }
                    return I.fun(l) && s.batchedUpdates((() => {
                        l(g, i, i.item)
                    })), g
                })() : A
            }

            function Ot(e, t) {
                Z(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
            }
            var Ft = class extends Error {
                    constructor() {
                        super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
                    }
                },
                Wt = class extends Error {
                    constructor() {
                        super("SkipAnimationSignal")
                    }
                },
                zt = e => e instanceof Ht,
                Pt = 1,
                Ht = class extends ke {
                    constructor() {
                        super(...arguments), this.id = Pt++, this._priority = 0
                    }
                    get priority() {
                        return this._priority
                    }
                    set priority(e) {
                        this._priority != e && (this._priority = e, this._onPriorityChange(e))
                    }
                    get() {
                        const e = Ke(this);
                        return e && e.getValue()
                    }
                    to() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return a.to(this, t)
                    }
                    interpolate() {
                        Pe(`${We}The "interpolate" function is deprecated in v9 (use "to" instead)`);
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return a.to(this, t)
                    }
                    toJSON() {
                        return this.get()
                    }
                    observerAdded(e) {
                        1 == e && this._attach()
                    }
                    observerRemoved(e) {
                        0 == e && this._detach()
                    }
                    _attach() {}
                    _detach() {}
                    _onChange(e) {
                        Ie(this, {
                            type: "change",
                            parent: this,
                            value: e,
                            idle: arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                        })
                    }
                    _onPriorityChange(e) {
                        this.idle || P.sort(this), Ie(this, {
                            type: "priority",
                            parent: this,
                            priority: e
                        })
                    }
                },
                qt = Symbol.for("SpringPhase"),
                $t = e => (1 & e[qt]) > 0,
                Yt = e => (2 & e[qt]) > 0,
                Gt = e => (4 & e[qt]) > 0,
                Vt = (e, t) => t ? e[qt] |= 3 : e[qt] &= -3,
                Jt = (e, t) => t ? e[qt] |= 4 : e[qt] &= -5,
                Xt = class extends Ht {
                    constructor(e, t) {
                        if (super(), this.animation = new class {
                                constructor() {
                                    this.changed = !1, this.values = Tt, this.toValues = null, this.fromValues = Tt, this.config = new class {
                                        constructor() {
                                            this.velocity = 0, Object.assign(this, Zt)
                                        }
                                    }, this.immediate = !1
                                }
                            }, this.defaultProps = {}, this._state = {
                                paused: !1,
                                delayed: !1,
                                pauseQueue: new Set,
                                resumeQueue: new Set,
                                timeouts: new Set
                            }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !I.und(e) || !I.und(t)) {
                            const n = I.obj(e) ? { ...e
                            } : { ...t,
                                from: e
                            };
                            I.und(n.default) && (n.default = !0), this.start(n)
                        }
                    }
                    get idle() {
                        return !(Yt(this) || this._state.asyncTo) || Gt(this)
                    }
                    get goal() {
                        return ye(this.animation.to)
                    }
                    get velocity() {
                        const e = Ke(this);
                        return e instanceof it ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
                    }
                    get hasAnimated() {
                        return $t(this)
                    }
                    get isAnimating() {
                        return Yt(this)
                    }
                    get isPaused() {
                        return Gt(this)
                    }
                    get isDelayed() {
                        return this._state.delayed
                    }
                    advance(e) {
                        let t = !0,
                            n = !1;
                        const i = this.animation;
                        let {
                            toValues: o
                        } = i;
                        const {
                            config: a
                        } = i, r = tt(i.to);
                        !r && we(i.to) && (o = M(ye(i.to))), i.values.forEach(((s, l) => {
                            if (s.done) return;
                            const d = s.constructor == ot ? 1 : r ? r[l].lastPosition : o[l];
                            let A = i.immediate,
                                c = d;
                            if (!A) {
                                if (c = s.lastPosition, a.tension <= 0) return void(s.done = !0);
                                let t = s.elapsedTime += e;
                                const n = i.fromValues[l],
                                    o = null != s.v0 ? s.v0 : s.v0 = I.arr(a.velocity) ? a.velocity[l] : a.velocity;
                                let r;
                                const u = a.precision || (n == d ? .005 : Math.min(1, .001 * Math.abs(d - n)));
                                if (I.und(a.duration))
                                    if (a.decay) {
                                        const e = !0 === a.decay ? .998 : a.decay,
                                            i = Math.exp(-(1 - e) * t);
                                        c = n + o / (1 - e) * (1 - i), A = Math.abs(s.lastPosition - c) <= u, r = o * i
                                    } else {
                                        r = null == s.lastVelocity ? o : s.lastVelocity;
                                        const t = a.restVelocity || u / 10,
                                            i = a.clamp ? 0 : a.bounce,
                                            l = !I.und(i),
                                            p = n == d ? s.v0 > 0 : n < d;
                                        let f, h = !1;
                                        const m = 1,
                                            g = Math.ceil(e / m);
                                        for (let e = 0; e < g && (f = Math.abs(r) > t, f || (A = Math.abs(d - c) <= u, !A)); ++e) {
                                            l && (h = c == d || c > d == p, h && (r = -r * i, c = d));
                                            r += (1e-6 * -a.tension * (c - d) + .001 * -a.friction * r) / a.mass * m, c += r * m
                                        }
                                    }
                                else {
                                    let i = 1;
                                    a.duration > 0 && (this._memoizedDuration !== a.duration && (this._memoizedDuration = a.duration, s.durationProgress > 0 && (s.elapsedTime = a.duration * s.durationProgress, t = s.elapsedTime += e)), i = (a.progress || 0) + t / this._memoizedDuration, i = i > 1 ? 1 : i < 0 ? 0 : i, s.durationProgress = i), c = n + a.easing(i) * (d - n), r = (c - s.lastPosition) / e, A = 1 == i
                                }
                                s.lastVelocity = r, Number.isNaN(c) && (console.warn("Got NaN while animating:", this), A = !0)
                            }
                            r && !r[l].done && (A = !1), A ? s.done = !0 : t = !1, s.setValue(c, a.round) && (n = !0)
                        }));
                        const s = Ke(this),
                            l = s.getValue();
                        if (t) {
                            const e = ye(i.to);
                            l === e && !n || a.decay ? n && a.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
                        } else n && this._onChange(l)
                    }
                    set(e) {
                        return s.batchedUpdates((() => {
                            this._stop(), this._focus(e), this._set(e)
                        })), this
                    }
                    pause() {
                        this._update({
                            pause: !0
                        })
                    }
                    resume() {
                        this._update({
                            pause: !1
                        })
                    }
                    finish() {
                        if (Yt(this)) {
                            const {
                                to: e,
                                config: t
                            } = this.animation;
                            s.batchedUpdates((() => {
                                this._onStart(), t.decay || this._set(e, !1), this._stop()
                            }))
                        }
                        return this
                    }
                    update(e) {
                        return (this.queue || (this.queue = [])).push(e), this
                    }
                    start(e, t) {
                        let n;
                        return I.und(e) ? (n = this.queue || [], this.queue = []) : n = [I.obj(e) ? e : { ...t,
                            to: e
                        }], Promise.all(n.map((e => this._update(e)))).then((e => Nt(this, e)))
                    }
                    stop(e) {
                        const {
                            to: t
                        } = this.animation;
                        return this._focus(this.get()), Ot(this._state, e && this._lastCallId), s.batchedUpdates((() => this._stop(t, e))), this
                    }
                    reset() {
                        this._update({
                            reset: !0
                        })
                    }
                    eventObserved(e) {
                        "change" == e.type ? this._start() : "priority" == e.type && (this.priority = e.priority + 1)
                    }
                    _prepareNode(e) {
                        const t = this.key || "";
                        let {
                            to: n,
                            from: i
                        } = e;
                        n = I.obj(n) ? n[t] : n, (null == n || It(n)) && (n = void 0), i = I.obj(i) ? i[t] : i, null == i && (i = void 0);
                        const o = {
                            to: n,
                            from: i
                        };
                        return $t(this) || (e.reverse && ([n, i] = [i, n]), i = ye(i), I.und(i) ? Ke(this) || this._set(n) : this._set(i)), o
                    }
                    _update(e, t) {
                        let { ...n
                        } = e;
                        const {
                            key: i,
                            defaultProps: o
                        } = this;
                        n.default && Object.assign(o, bt(n, ((e, t) => /^on/.test(t) ? mt(e, i) : e))), an(this, n, "onProps"), rn(this, "onProps", n, this);
                        const a = this._prepareNode(n);
                        if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
                        const r = this._state;
                        return Dt(++this._lastCallId, {
                            key: i,
                            props: n,
                            defaultProps: o,
                            state: r,
                            actions: {
                                pause: () => {
                                    Gt(this) || (Jt(this, !0), D(r.pauseQueue), rn(this, "onPause", _t(this, Qt(this, this.animation.to)), this))
                                },
                                resume: () => {
                                    Gt(this) && (Jt(this, !1), Yt(this) && this._resume(), D(r.resumeQueue), rn(this, "onResume", _t(this, Qt(this, this.animation.to)), this))
                                },
                                start: this._merge.bind(this, a)
                            }
                        }).then((e => {
                            if (n.loop && e.finished && (!t || !e.noop)) {
                                const e = Kt(n);
                                if (e) return this._update(e, !0)
                            }
                            return e
                        }))
                    }
                    _merge(e, t, n) {
                        if (t.cancel) return this.stop(!0), n(Lt(this));
                        const i = !I.und(e.to),
                            o = !I.und(e.from);
                        if (i || o) {
                            if (!(t.callId > this._lastToId)) return n(Lt(this));
                            this._lastToId = t.callId
                        }
                        const {
                            key: a,
                            defaultProps: r,
                            animation: l
                        } = this, {
                            to: d,
                            from: A
                        } = l;
                        let {
                            to: c = d,
                            from: u = A
                        } = e;
                        !o || i || t.default && !I.und(c) || (c = u), t.reverse && ([c, u] = [u, c]);
                        const p = !k(u, A);
                        p && (l.from = u), u = ye(u);
                        const f = !k(c, d);
                        f && this._focus(c);
                        const h = It(t.to),
                            {
                                config: m
                            } = l,
                            {
                                decay: g,
                                velocity: C
                            } = m;
                        (i || o) && (m.velocity = 0), t.config && !h && function(e, t, n) {
                            n && (Rt(n = { ...n
                            }, t), t = { ...n,
                                ...t
                            }), Rt(e, t), Object.assign(e, t);
                            for (const t in Zt) null == e[t] && (e[t] = Zt[t]);
                            let {
                                frequency: i,
                                damping: o
                            } = e;
                            const {
                                mass: a
                            } = e;
                            I.und(i) || (i < .01 && (i = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / i, 2) * a, e.friction = 4 * Math.PI * o * a / i)
                        }(m, ft(t.config, a), t.config !== r.config ? ft(r.config, a) : void 0);
                        let b = Ke(this);
                        if (!b || I.und(c)) return n(_t(this, !0));
                        const x = I.und(t.reset) ? o && !t.default : !I.und(u) && ht(t.reset, a),
                            v = x ? u : this.get(),
                            w = yt(c),
                            y = I.num(w) || I.arr(w) || qe(w),
                            B = !h && (!y || ht(r.immediate || t.immediate, a));
                        if (f) {
                            const e = dt(c);
                            if (e !== b.constructor) {
                                if (!B) throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);
                                b = this._set(w)
                            }
                        }
                        const S = b.constructor;
                        let Z = we(c),
                            R = !1;
                        if (!Z) {
                            const e = x || !$t(this) && p;
                            (f || e) && (R = k(yt(v), w), Z = !R), (k(l.immediate, B) || B) && k(m.decay, g) && k(m.velocity, C) || (Z = !0)
                        }
                        if (R && Yt(this) && (l.changed && !x ? Z = !0 : Z || this._stop(d)), !h && ((Z || we(d)) && (l.values = b.getPayload(), l.toValues = we(c) ? null : S == ot ? [1] : M(w)), l.immediate != B && (l.immediate = B, B || x || this._set(d)), Z)) {
                            const {
                                onRest: e
                            } = l;
                            E(on, (e => an(this, t, e)));
                            const i = _t(this, Qt(this, d));
                            D(this._pendingCalls, i), this._pendingCalls.add(n), l.changed && s.batchedUpdates((() => {
                                l.changed = !x, e ? .(i, this), x ? ft(r.onRest, i) : l.onStart ? .(i, this)
                            }))
                        }
                        x && this._set(v), h ? n(jt(t.to, t, this._state, this)) : Z ? this._start() : Yt(this) && !f ? this._pendingCalls.add(n) : n(Ut(v))
                    }
                    _focus(e) {
                        const t = this.animation;
                        e !== t.to && (Be(this) && this._detach(), t.to = e, Be(this) && this._attach())
                    }
                    _attach() {
                        let e = 0;
                        const {
                            to: t
                        } = this.animation;
                        we(t) && (Se(t, this), zt(t) && (e = t.priority + 1)), this.priority = e
                    }
                    _detach() {
                        const {
                            to: e
                        } = this.animation;
                        we(e) && Me(e, this)
                    }
                    _set(e) {
                        let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        const n = ye(e);
                        if (!I.und(n)) {
                            const e = Ke(this);
                            if (!e || !k(n, e.getValue())) {
                                const i = dt(n);
                                e && e.constructor == i ? e.setValue(n) : et(this, i.create(n)), e && s.batchedUpdates((() => {
                                    this._onChange(n, t)
                                }))
                            }
                        }
                        return Ke(this)
                    }
                    _onStart() {
                        const e = this.animation;
                        e.changed || (e.changed = !0, rn(this, "onStart", _t(this, Qt(this, e.to)), this))
                    }
                    _onChange(e, t) {
                        t || (this._onStart(), ft(this.animation.onChange, e, this)), ft(this.defaultProps.onChange, e, this), super._onChange(e, t)
                    }
                    _start() {
                        const e = this.animation;
                        Ke(this).reset(ye(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), Yt(this) || (Vt(this, !0), Gt(this) || this._resume())
                    }
                    _resume() {
                        a.skipAnimation ? this.finish() : P.start(this)
                    }
                    _stop(e, t) {
                        if (Yt(this)) {
                            Vt(this, !1);
                            const n = this.animation;
                            E(n.values, (e => {
                                e.done = !0
                            })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Ie(this, {
                                type: "idle",
                                parent: this
                            });
                            const i = t ? Lt(this.get()) : _t(this.get(), Qt(this, e ? ? n.to));
                            D(this._pendingCalls, i), n.changed && (n.changed = !1, rn(this, "onRest", i, this))
                        }
                    }
                };

            function Qt(e, t) {
                const n = yt(t);
                return k(yt(e.get()), n)
            }

            function Kt(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.loop,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.to;
                const i = ft(t);
                if (i) {
                    const o = !0 !== i && wt(i),
                        a = (o || e).reverse,
                        r = !o || o.reset;
                    return en({ ...e,
                        loop: t,
                        default: !1,
                        pause: void 0,
                        to: !a || It(n) ? n : void 0,
                        from: r ? e.from : void 0,
                        reset: r,
                        ...o
                    })
                }
            }

            function en(e) {
                const {
                    to: t,
                    from: n
                } = e = wt(e), i = new Set;
                return I.obj(t) && nn(t, i), I.obj(n) && nn(n, i), e.keys = i.size ? Array.from(i) : null, e
            }

            function tn(e) {
                const t = en(e);
                return I.und(t.default) && (t.default = bt(t)), t
            }

            function nn(e, t) {
                S(e, ((e, n) => null != e && t.add(n)))
            }
            var on = ["onStart", "onRest", "onChange", "onPause", "onResume"];

            function an(e, t, n) {
                e.animation[n] = t[n] !== gt(t, n) ? mt(t[n], e.key) : void 0
            }

            function rn(e, t) {
                for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) i[o - 2] = arguments[o];
                e.animation[t] ? .(...i), e.defaultProps[t] ? .(...i)
            }
            var sn = ["onStart", "onChange", "onRest"],
                ln = 1,
                dn = class {
                    constructor(e, t) {
                        this.id = ln++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
                            paused: !1,
                            pauseQueue: new Set,
                            resumeQueue: new Set,
                            timeouts: new Set
                        }, this._events = {
                            onStart: new Map,
                            onChange: new Map,
                            onRest: new Map
                        }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
                            default: !0,
                            ...e
                        })
                    }
                    get idle() {
                        return !this._state.asyncTo && Object.values(this.springs).every((e => e.idle && !e.isDelayed && !e.isPaused))
                    }
                    get item() {
                        return this._item
                    }
                    set item(e) {
                        this._item = e
                    }
                    get() {
                        const e = {};
                        return this.each(((t, n) => e[n] = t.get())), e
                    }
                    set(e) {
                        for (const t in e) {
                            const n = e[t];
                            I.und(n) || this.springs[t].set(n)
                        }
                    }
                    update(e) {
                        return e && this.queue.push(en(e)), this
                    }
                    start(e) {
                        let {
                            queue: t
                        } = this;
                        return e ? t = M(e).map(en) : this.queue = [], this._flush ? this._flush(this, t) : (mn(this, t), An(this, t))
                    }
                    stop(e, t) {
                        if (e !== !!e && (t = e), t) {
                            const n = this.springs;
                            E(M(t), (t => n[t].stop(!!e)))
                        } else Ot(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
                        return this
                    }
                    pause(e) {
                        if (I.und(e)) this.start({
                            pause: !0
                        });
                        else {
                            const t = this.springs;
                            E(M(e), (e => t[e].pause()))
                        }
                        return this
                    }
                    resume(e) {
                        if (I.und(e)) this.start({
                            pause: !1
                        });
                        else {
                            const t = this.springs;
                            E(M(e), (e => t[e].resume()))
                        }
                        return this
                    }
                    each(e) {
                        S(this.springs, e)
                    }
                    _onFrame() {
                        const {
                            onStart: e,
                            onChange: t,
                            onRest: n
                        } = this._events, i = this._active.size > 0, o = this._changed.size > 0;
                        (i && !this._started || o && !this._started) && (this._started = !0, Z(e, (e => {
                            let [t, n] = e;
                            n.value = this.get(), t(n, this, this._item)
                        })));
                        const a = !i && this._started,
                            r = o || a && n.size ? this.get() : null;
                        o && t.size && Z(t, (e => {
                            let [t, n] = e;
                            n.value = r, t(n, this, this._item)
                        })), a && (this._started = !1, Z(n, (e => {
                            let [t, n] = e;
                            n.value = r, t(n, this, this._item)
                        })))
                    }
                    eventObserved(e) {
                        if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
                        else {
                            if ("idle" != e.type) return;
                            this._active.delete(e.parent)
                        }
                        s.onFrame(this._onFrame)
                    }
                };

            function An(e, t) {
                return Promise.all(t.map((t => cn(e, t)))).then((t => Nt(e, t)))
            }
            async function cn(e, t, n) {
                const {
                    keys: i,
                    to: o,
                    from: a,
                    loop: r,
                    onRest: l,
                    onResolve: d
                } = t, A = I.obj(t.default) && t.default;
                r && (t.loop = !1), !1 === o && (t.to = null), !1 === a && (t.from = null);
                const c = I.arr(o) || I.fun(o) ? o : void 0;
                c ? (t.to = void 0, t.onRest = void 0, A && (A.onRest = void 0)) : E(sn, (n => {
                    const i = t[n];
                    if (I.fun(i)) {
                        const o = e._events[n];
                        t[n] = e => {
                            let {
                                finished: t,
                                cancelled: n
                            } = e;
                            const a = o.get(i);
                            a ? (t || (a.finished = !1), n && (a.cancelled = !0)) : o.set(i, {
                                value: null,
                                finished: t || !1,
                                cancelled: n || !1
                            })
                        }, A && (A[n] = t[n])
                    }
                }));
                const u = e._state;
                t.pause === !u.paused ? (u.paused = t.pause, D(t.pause ? u.pauseQueue : u.resumeQueue)) : u.paused && (t.pause = !0);
                const p = (i || Object.keys(e.springs)).map((n => e.springs[n].start(t))),
                    f = !0 === t.cancel || !0 === gt(t, "cancel");
                (c || f && u.asyncId) && p.push(Dt(++e._lastAsyncId, {
                    props: t,
                    state: u,
                    actions: {
                        pause: B,
                        resume: B,
                        start(t, n) {
                            f ? (Ot(u, e._lastAsyncId), n(Lt(e))) : (t.onRest = l, n(jt(c, t, u, e)))
                        }
                    }
                })), u.paused && await new Promise((e => {
                    u.resumeQueue.add(e)
                }));
                const h = Nt(e, await Promise.all(p));
                if (r && h.finished && (!n || !h.noop)) {
                    const n = Kt(t, r, o);
                    if (n) return mn(e, [n]), cn(e, n, !0)
                }
                return d && s.batchedUpdates((() => d(h, e, e.item))), h
            }

            function un(e, t) {
                const n = { ...e.springs
                };
                return t && E(M(t), (e => {
                    I.und(e.keys) && (e = en(e)), I.obj(e.to) || (e = { ...e,
                        to: void 0
                    }), hn(n, e, (e => fn(e)))
                })), pn(e, n), n
            }

            function pn(e, t) {
                S(t, ((t, n) => {
                    e.springs[n] || (e.springs[n] = t, Se(t, e))
                }))
            }

            function fn(e, t) {
                const n = new Xt;
                return n.key = e, t && Se(n, t), n
            }

            function hn(e, t, n) {
                t.keys && E(t.keys, (i => {
                    (e[i] || (e[i] = n(i)))._prepareNode(t)
                }))
            }

            function mn(e, t) {
                E(t, (t => {
                    hn(e.springs, t, (t => fn(t, e)))
                }))
            }
            var gn, Cn, bn = e => {
                    let {
                        children: t,
                        ...n
                    } = e;
                    const o = (0, i.useContext)(xn),
                        a = n.pause || !!o.pause,
                        r = n.immediate || !!o.immediate;
                    n = function(e, t) {
                        const [n] = (0, i.useState)((() => ({
                            inputs: t,
                            result: e()
                        }))), o = (0, i.useRef)(), a = o.current;
                        let r = a;
                        r ? Boolean(t && r.inputs && function(e, t) {
                            if (e.length !== t.length) return !1;
                            for (let n = 0; n < e.length; n++)
                                if (e[n] !== t[n]) return !1;
                            return !0
                        }(t, r.inputs)) || (r = {
                            inputs: t,
                            result: e()
                        }) : r = n;
                        return (0, i.useEffect)((() => {
                            o.current = r, a == n && (n.inputs = n.result = void 0)
                        }), [r]), r.result
                    }((() => ({
                        pause: a,
                        immediate: r
                    })), [a, r]);
                    const {
                        Provider: s
                    } = xn;
                    return i.createElement(s, {
                        value: n
                    }, t)
                },
                xn = (gn = bn, Cn = {}, Object.assign(gn, i.createContext(Cn)), gn.Provider._context = gn, gn.Consumer._context = gn, gn);
            bn.Provider = xn.Provider, bn.Consumer = xn.Consumer;
            var vn = () => {
                const e = [],
                    t = function(t) {
                        He(`${We}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
                        const i = [];
                        return E(e, ((e, o) => {
                            if (I.und(t)) i.push(e.start());
                            else {
                                const a = n(t, e, o);
                                a && i.push(e.start(a))
                            }
                        })), i
                    };
                t.current = e, t.add = function(t) {
                    e.includes(t) || e.push(t)
                }, t.delete = function(t) {
                    const n = e.indexOf(t);
                    ~n && e.splice(n, 1)
                }, t.pause = function() {
                    return E(e, (e => e.pause(...arguments))), this
                }, t.resume = function() {
                    return E(e, (e => e.resume(...arguments))), this
                }, t.set = function(t) {
                    E(e, ((e, n) => {
                        const i = I.fun(t) ? t(n, e) : t;
                        i && e.set(i)
                    }))
                }, t.start = function(t) {
                    const n = [];
                    return E(e, ((e, i) => {
                        if (I.und(t)) n.push(e.start());
                        else {
                            const o = this._getProps(t, e, i);
                            o && n.push(e.start(o))
                        }
                    })), n
                }, t.stop = function() {
                    return E(e, (e => e.stop(...arguments))), this
                }, t.update = function(t) {
                    return E(e, ((e, n) => e.update(this._getProps(t, e, n)))), this
                };
                const n = function(e, t, n) {
                    return I.fun(e) ? e(n, t) : e
                };
                return t._getProps = n, t
            };

            function wn(e, t, n) {
                const o = I.fun(t) && t;
                o && !n && (n = []);
                const a = (0, i.useMemo)((() => o || 3 == arguments.length ? vn() : void 0), []),
                    r = (0, i.useRef)(0),
                    s = Ge(),
                    l = (0, i.useMemo)((() => ({
                        ctrls: [],
                        queue: [],
                        flush(e, t) {
                            const n = un(e, t);
                            return r.current > 0 && !l.queue.length && !Object.keys(n).some((t => !e.springs[t])) ? An(e, t) : new Promise((i => {
                                pn(e, n), l.queue.push((() => {
                                    i(An(e, t))
                                })), s()
                            }))
                        }
                    })), []),
                    d = (0, i.useRef)([...l.ctrls]),
                    A = [],
                    c = Xe(e) || 0;

                function u(e, n) {
                    for (let i = e; i < n; i++) {
                        const e = d.current[i] || (d.current[i] = new dn(null, l.flush)),
                            n = o ? o(i, e) : t[i];
                        n && (A[i] = tn(n))
                    }
                }(0, i.useMemo)((() => {
                    E(d.current.slice(e, c), (e => {
                        kt(e, a), e.stop(!0)
                    })), d.current.length = e, u(c, e)
                }), [e]), (0, i.useMemo)((() => {
                    u(0, Math.min(c, e))
                }), n);
                const p = d.current.map(((e, t) => un(e, A[t]))),
                    f = (0, i.useContext)(bn),
                    h = Xe(f),
                    m = f !== h && Bt(f);
                $e((() => {
                    r.current++, l.ctrls = d.current;
                    const {
                        queue: e
                    } = l;
                    e.length && (l.queue = [], E(e, (e => e()))), E(d.current, ((e, t) => {
                        a ? .add(e), m && e.start({
                            default: f
                        });
                        const n = A[t];
                        n && (Et(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
                    }))
                })), Ve((() => () => {
                    E(l.ctrls, (e => e.stop(!0)))
                }));
                const g = p.map((e => ({ ...e
                })));
                return a ? [g, a] : g
            }

            function yn(e, t) {
                const n = I.fun(e),
                    [
                        [i], o
                    ] = wn(1, n ? e : [e], n ? t || [] : t);
                return n || 2 == arguments.length ? [i, o] : i
            }
            var Bn = () => vn(),
                In = () => (0, i.useState)(Bn)[0];

            function kn(e, t, n) {
                const o = I.fun(t) && t,
                    {
                        reset: a,
                        sort: r,
                        trail: s = 0,
                        expires: l = !0,
                        exitBeforeEnter: d = !1,
                        onDestroyed: A,
                        ref: c,
                        config: u
                    } = o ? o() : t,
                    p = (0, i.useMemo)((() => o || 3 == arguments.length ? vn() : void 0), []),
                    f = M(e),
                    h = [],
                    m = (0, i.useRef)(null),
                    g = a ? null : m.current;
                $e((() => {
                    m.current = h
                })), Ve((() => (E(h, (e => {
                    p ? .add(e.ctrl), e.ctrl.ref = p
                })), () => {
                    E(m.current, (e => {
                        e.expired && clearTimeout(e.expirationId), kt(e.ctrl, p), e.ctrl.stop(!0)
                    }))
                })));
                const C = function(e, t, n) {
                        let {
                            key: i,
                            keys: o = i
                        } = t;
                        if (null === o) {
                            const t = new Set;
                            return e.map((e => {
                                const i = n && n.find((n => n.item === e && "leave" !== n.phase && !t.has(n)));
                                return i ? (t.add(i), i.key) : En++
                            }))
                        }
                        return I.und(o) ? e : I.fun(o) ? e.map(o) : M(o)
                    }(f, o ? o() : t, g),
                    b = a && m.current || [];
                $e((() => E(b, (e => {
                    let {
                        ctrl: t,
                        item: n,
                        key: i
                    } = e;
                    kt(t, p), ft(A, n, i)
                }))));
                const x = [];
                if (g && E(g, ((e, t) => {
                        e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = x[t] = C.indexOf(e.key)) && (h[t] = e)
                    })), E(f, ((e, t) => {
                        h[t] || (h[t] = {
                            key: C[t],
                            item: e,
                            phase: "mount",
                            ctrl: new dn
                        }, h[t].ctrl.item = e)
                    })), x.length) {
                    let e = -1;
                    const {
                        leave: n
                    } = o ? o() : t;
                    E(x, ((t, i) => {
                        const o = g[i];
                        ~t ? (e = h.indexOf(o), h[e] = { ...o,
                            item: f[t]
                        }) : n && h.splice(++e, 0, o)
                    }))
                }
                I.fun(r) && h.sort(((e, t) => r(e.item, t.item)));
                let v = -s;
                const w = Ge(),
                    y = bt(t),
                    B = new Map,
                    k = (0, i.useRef)(new Map),
                    S = (0, i.useRef)(!1);
                E(h, ((e, n) => {
                    const i = e.key,
                        a = e.phase,
                        r = o ? o() : t;
                    let A, p;
                    const f = ft(r.delay || 0, i);
                    if ("mount" == a) A = r.enter, p = "enter";
                    else {
                        const e = C.indexOf(i) < 0;
                        if ("leave" != a)
                            if (e) A = r.leave, p = "leave";
                            else {
                                if (!(A = r.update)) return;
                                p = "update"
                            }
                        else {
                            if (e) return;
                            A = r.enter, p = "enter"
                        }
                    }
                    if (A = ft(A, e.item, n), A = I.obj(A) ? wt(A) : {
                            to: A
                        }, !A.config) {
                        const t = u || y.config;
                        A.config = ft(t, e.item, n, p)
                    }
                    v += s;
                    const h = { ...y,
                        delay: f + v,
                        ref: c,
                        immediate: r.immediate,
                        reset: !1,
                        ...A
                    };
                    if ("enter" == p && I.und(h.from)) {
                        const i = o ? o() : t,
                            a = I.und(i.initial) || g ? i.from : i.initial;
                        h.from = ft(a, e.item, n)
                    }
                    const {
                        onResolve: b
                    } = h;
                    h.onResolve = e => {
                        ft(b, e);
                        const t = m.current,
                            n = t.find((e => e.key === i));
                        if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
                            const e = t.every((e => e.ctrl.idle));
                            if ("leave" == n.phase) {
                                const t = ft(l, n.item);
                                if (!1 !== t) {
                                    const i = !0 === t ? 0 : t;
                                    if (n.expired = !0, !e && i > 0) return void(i <= 2147483647 && (n.expirationId = setTimeout(w, i)))
                                }
                            }
                            e && t.some((e => e.expired)) && (k.current.delete(n), d && (S.current = !0), w())
                        }
                    };
                    const x = un(e.ctrl, h);
                    "leave" === p && d ? k.current.set(e, {
                        phase: p,
                        springs: x,
                        payload: h
                    }) : B.set(e, {
                        phase: p,
                        springs: x,
                        payload: h
                    })
                }));
                const Z = (0, i.useContext)(bn),
                    R = Xe(Z),
                    T = Z !== R && Bt(Z);
                $e((() => {
                    T && E(h, (e => {
                        e.ctrl.start({
                            default: Z
                        })
                    }))
                }), [Z]), E(B, ((e, t) => {
                    if (k.current.size) {
                        const e = h.findIndex((e => e.key === t.key));
                        h.splice(e, 1)
                    }
                })), $e((() => {
                    E(k.current.size ? k.current : B, ((e, t) => {
                        let {
                            phase: n,
                            payload: i
                        } = e;
                        const {
                            ctrl: o
                        } = t;
                        t.phase = n, p ? .add(o), T && "enter" == n && o.start({
                            default: Z
                        }), i && (Et(o, i.ref), !o.ref && !p || S.current ? (o.start(i), S.current && (S.current = !1)) : o.update(i))
                    }))
                }), a ? void 0 : n);
                const D = e => i.createElement(i.Fragment, null, h.map(((t, n) => {
                    const {
                        springs: o
                    } = B.get(t) || t.ctrl, a = e({ ...o
                    }, t.item, t, n);
                    return a && a.type ? i.createElement(a.type, { ...a.props,
                        key: I.str(t.key) || I.num(t.key) ? t.key : t.ctrl.id,
                        ref: a.ref
                    }) : a
                })));
                return p ? [D, p] : D
            }
            var En = 1;
            var Sn = class extends Ht {
                constructor(e, t) {
                    super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = ue(...t);
                    const n = this._get(),
                        i = dt(n);
                    et(this, i.create(n))
                }
                advance(e) {
                    const t = this._get();
                    k(t, this.get()) || (Ke(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Zn(this._active) && Rn(this)
                }
                _get() {
                    const e = I.arr(this.source) ? this.source.map(ye) : M(ye(this.source));
                    return this.calc(...e)
                }
                _start() {
                    this.idle && !Zn(this._active) && (this.idle = !1, E(tt(this), (e => {
                        e.done = !1
                    })), a.skipAnimation ? (s.batchedUpdates((() => this.advance())), Rn(this)) : P.start(this))
                }
                _attach() {
                    let e = 1;
                    E(M(this.source), (t => {
                        we(t) && Se(t, this), zt(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
                    })), this.priority = e, this._start()
                }
                _detach() {
                    E(M(this.source), (e => {
                        we(e) && Me(e, this)
                    })), this._active.clear(), Rn(this)
                }
                eventObserved(e) {
                    "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = M(this.source).reduce(((e, t) => Math.max(e, (zt(t) ? t.priority : 0) + 1)), 0))
                }
            };

            function Mn(e) {
                return !1 !== e.idle
            }

            function Zn(e) {
                return !e.size || Array.from(e).every(Mn)
            }

            function Rn(e) {
                e.idle || (e.idle = !0, E(tt(e), (e => {
                    e.done = !0
                })), Ie(e, {
                    type: "idle",
                    parent: e
                }))
            }
            var Tn = function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                return new Sn(e, n)
            };
            a.assign({
                createStringInterpolator: Fe,
                to: (e, t) => new Sn(e, t)
            });
            P.advance;
            var Dn = n(579),
                Nn = /^--/;

            function Un(e, t) {
                return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Nn.test(e) || Ln.hasOwnProperty(e) && Ln[e] ? ("" + t).trim() : t + "px"
            }
            var _n = {};
            var Ln = {
                    animationIterationCount: !0,
                    borderImageOutset: !0,
                    borderImageSlice: !0,
                    borderImageWidth: !0,
                    boxFlex: !0,
                    boxFlexGroup: !0,
                    boxOrdinalGroup: !0,
                    columnCount: !0,
                    columns: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexPositive: !0,
                    flexShrink: !0,
                    flexNegative: !0,
                    flexOrder: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowSpan: !0,
                    gridRowStart: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnSpan: !0,
                    gridColumnStart: !0,
                    fontWeight: !0,
                    lineClamp: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    tabSize: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                    fillOpacity: !0,
                    floodOpacity: !0,
                    stopOpacity: !0,
                    strokeDasharray: !0,
                    strokeDashoffset: !0,
                    strokeMiterlimit: !0,
                    strokeOpacity: !0,
                    strokeWidth: !0
                },
                jn = ["Webkit", "Ms", "Moz", "O"];
            Ln = Object.keys(Ln).reduce(((e, t) => (jn.forEach((n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e)), Ln);
            var On = /^(matrix|translate|scale|rotate|skew)/,
                Fn = /^(translate)/,
                Wn = /^(rotate|skew)/,
                zn = (e, t) => I.num(e) && 0 !== e ? e + t : e,
                Pn = (e, t) => I.arr(e) ? e.every((e => Pn(e, t))) : I.num(e) ? e === t : parseFloat(e) === t,
                Hn = class extends rt {
                    constructor(e) {
                        let {
                            x: t,
                            y: n,
                            z: i,
                            ...o
                        } = e;
                        const a = [],
                            r = [];
                        (t || n || i) && (a.push([t || 0, n || 0, i || 0]), r.push((e => [`translate3d(${e.map((e=>zn(e,"px"))).join(",")})`, Pn(e, 0)]))), S(o, ((e, t) => {
                            if ("transform" === t) a.push([e || ""]), r.push((e => [e, "" === e]));
                            else if (On.test(t)) {
                                if (delete o[t], I.und(e)) return;
                                const n = Fn.test(t) ? "px" : Wn.test(t) ? "deg" : "";
                                a.push(M(e)), r.push("rotate3d" === t ? e => {
                                    let [t, i, o, a] = e;
                                    return [`rotate3d(${t},${i},${o},${zn(a,n)})`, Pn(a, 0)]
                                } : e => [`${t}(${e.map((e=>zn(e,n))).join(",")})`, Pn(e, t.startsWith("scale") ? 1 : 0)])
                            }
                        })), a.length && (o.transform = new qn(a, r)), super(o)
                    }
                },
                qn = class extends ke {
                    constructor(e, t) {
                        super(), this.inputs = e, this.transforms = t, this._value = null
                    }
                    get() {
                        return this._value || (this._value = this._get())
                    }
                    _get() {
                        let e = "",
                            t = !0;
                        return E(this.inputs, ((n, i) => {
                            const o = ye(n[0]),
                                [a, r] = this.transforms[i](I.arr(o) ? o : n.map(ye));
                            e += " " + a, t = t && r
                        })), t ? "none" : e
                    }
                    observerAdded(e) {
                        1 == e && E(this.inputs, (e => E(e, (e => we(e) && Se(e, this)))))
                    }
                    observerRemoved(e) {
                        0 == e && E(this.inputs, (e => E(e, (e => we(e) && Me(e, this)))))
                    }
                    eventObserved(e) {
                        "change" == e.type && (this._value = null), Ie(this, e)
                    }
                };
            a.assign({
                batchedUpdates: Dn.unstable_batchedUpdates,
                createStringInterpolator: Fe,
                colors: {
                    transparent: 0,
                    aliceblue: 4042850303,
                    antiquewhite: 4209760255,
                    aqua: 16777215,
                    aquamarine: 2147472639,
                    azure: 4043309055,
                    beige: 4126530815,
                    bisque: 4293182719,
                    black: 255,
                    blanchedalmond: 4293643775,
                    blue: 65535,
                    blueviolet: 2318131967,
                    brown: 2771004159,
                    burlywood: 3736635391,
                    burntsienna: 3934150143,
                    cadetblue: 1604231423,
                    chartreuse: 2147418367,
                    chocolate: 3530104575,
                    coral: 4286533887,
                    cornflowerblue: 1687547391,
                    cornsilk: 4294499583,
                    crimson: 3692313855,
                    cyan: 16777215,
                    darkblue: 35839,
                    darkcyan: 9145343,
                    darkgoldenrod: 3095792639,
                    darkgray: 2846468607,
                    darkgreen: 6553855,
                    darkgrey: 2846468607,
                    darkkhaki: 3182914559,
                    darkmagenta: 2332068863,
                    darkolivegreen: 1433087999,
                    darkorange: 4287365375,
                    darkorchid: 2570243327,
                    darkred: 2332033279,
                    darksalmon: 3918953215,
                    darkseagreen: 2411499519,
                    darkslateblue: 1211993087,
                    darkslategray: 793726975,
                    darkslategrey: 793726975,
                    darkturquoise: 13554175,
                    darkviolet: 2483082239,
                    deeppink: 4279538687,
                    deepskyblue: 12582911,
                    dimgray: 1768516095,
                    dimgrey: 1768516095,
                    dodgerblue: 512819199,
                    firebrick: 2988581631,
                    floralwhite: 4294635775,
                    forestgreen: 579543807,
                    fuchsia: 4278255615,
                    gainsboro: 3705462015,
                    ghostwhite: 4177068031,
                    gold: 4292280575,
                    goldenrod: 3668254975,
                    gray: 2155905279,
                    green: 8388863,
                    greenyellow: 2919182335,
                    grey: 2155905279,
                    honeydew: 4043305215,
                    hotpink: 4285117695,
                    indianred: 3445382399,
                    indigo: 1258324735,
                    ivory: 4294963455,
                    khaki: 4041641215,
                    lavender: 3873897215,
                    lavenderblush: 4293981695,
                    lawngreen: 2096890111,
                    lemonchiffon: 4294626815,
                    lightblue: 2916673279,
                    lightcoral: 4034953471,
                    lightcyan: 3774873599,
                    lightgoldenrodyellow: 4210742015,
                    lightgray: 3553874943,
                    lightgreen: 2431553791,
                    lightgrey: 3553874943,
                    lightpink: 4290167295,
                    lightsalmon: 4288707327,
                    lightseagreen: 548580095,
                    lightskyblue: 2278488831,
                    lightslategray: 2005441023,
                    lightslategrey: 2005441023,
                    lightsteelblue: 2965692159,
                    lightyellow: 4294959359,
                    lime: 16711935,
                    limegreen: 852308735,
                    linen: 4210091775,
                    magenta: 4278255615,
                    maroon: 2147483903,
                    mediumaquamarine: 1724754687,
                    mediumblue: 52735,
                    mediumorchid: 3126187007,
                    mediumpurple: 2473647103,
                    mediumseagreen: 1018393087,
                    mediumslateblue: 2070474495,
                    mediumspringgreen: 16423679,
                    mediumturquoise: 1221709055,
                    mediumvioletred: 3340076543,
                    midnightblue: 421097727,
                    mintcream: 4127193855,
                    mistyrose: 4293190143,
                    moccasin: 4293178879,
                    navajowhite: 4292783615,
                    navy: 33023,
                    oldlace: 4260751103,
                    olive: 2155872511,
                    olivedrab: 1804477439,
                    orange: 4289003775,
                    orangered: 4282712319,
                    orchid: 3664828159,
                    palegoldenrod: 4008225535,
                    palegreen: 2566625535,
                    paleturquoise: 2951671551,
                    palevioletred: 3681588223,
                    papayawhip: 4293907967,
                    peachpuff: 4292524543,
                    peru: 3448061951,
                    pink: 4290825215,
                    plum: 3718307327,
                    powderblue: 2967529215,
                    purple: 2147516671,
                    rebeccapurple: 1714657791,
                    red: 4278190335,
                    rosybrown: 3163525119,
                    royalblue: 1097458175,
                    saddlebrown: 2336560127,
                    salmon: 4202722047,
                    sandybrown: 4104413439,
                    seagreen: 780883967,
                    seashell: 4294307583,
                    sienna: 2689740287,
                    silver: 3233857791,
                    skyblue: 2278484991,
                    slateblue: 1784335871,
                    slategray: 1887473919,
                    slategrey: 1887473919,
                    snow: 4294638335,
                    springgreen: 16744447,
                    steelblue: 1182971135,
                    tan: 3535047935,
                    teal: 8421631,
                    thistle: 3636451583,
                    tomato: 4284696575,
                    turquoise: 1088475391,
                    violet: 4001558271,
                    wheat: 4125012991,
                    white: 4294967295,
                    whitesmoke: 4126537215,
                    yellow: 4294902015,
                    yellowgreen: 2597139199
                }
            });
            var $n = function(e) {
                    let {
                        applyAnimatedValues: t = (() => !1),
                        createAnimatedStyle: n = (e => new rt(e)),
                        getComponentProps: i = (e => e)
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const o = {
                            applyAnimatedValues: t,
                            createAnimatedStyle: n,
                            getComponentProps: i
                        },
                        a = e => {
                            const t = pt(e) || "Anonymous";
                            return (e = I.str(e) ? a[e] || (a[e] = At(e, o)) : e[ut] || (e[ut] = At(e, o))).displayName = `Animated(${t})`, e
                        };
                    return S(e, ((t, n) => {
                        I.arr(e) && (n = pt(t)), a[n] = a(t)
                    })), {
                        animated: a
                    }
                }(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
                    applyAnimatedValues: function(e, t) {
                        if (!e.nodeType || !e.setAttribute) return !1;
                        const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
                            {
                                style: i,
                                children: o,
                                scrollTop: a,
                                scrollLeft: r,
                                viewBox: s,
                                ...l
                            } = t,
                            d = Object.values(l),
                            A = Object.keys(l).map((t => n || e.hasAttribute(t) ? t : _n[t] || (_n[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
                        void 0 !== o && (e.textContent = o);
                        for (const t in i)
                            if (i.hasOwnProperty(t)) {
                                const n = Un(t, i[t]);
                                Nn.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
                            }
                        A.forEach(((t, n) => {
                            e.setAttribute(t, d[n])
                        })), void 0 !== a && (e.scrollTop = a), void 0 !== r && (e.scrollLeft = r), void 0 !== s && e.setAttribute("viewBox", s)
                    },
                    createAnimatedStyle: e => new Hn(e),
                    getComponentProps: e => {
                        let {
                            scrollTop: t,
                            scrollLeft: n,
                            ...i
                        } = e;
                        return i
                    }
                }),
                Yn = $n.animated
        }
    }
]);