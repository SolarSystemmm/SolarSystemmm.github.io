! function (e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var n = t();
        for (var o in n)("object" == typeof exports ? exports : e)[o] = n[o]
    }
}(window, (function () {
    return function (e) {
        var t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var i = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        return n.m = e, n.c = t, n.d = function (e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var i in e) n.d(o, i, function (t) {
                    return e[t]
                }.bind(null, i));
            return o
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 0)
    }([function (e, t, n) {
        "use strict";
        n.r(t);
        var o = function () {
            var e = this.$createElement,
                t = this._self._c || e;
            return this.isOpen ? t("div", {
                ref: "container",
                staticClass: "fslightbox-container fslightbox-full-dimension fslightbox-fade-in-strong"
            }, [t("Naver", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex
                }
            }), this._v(" "), t("SourcesOutersWrapper", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex
                }
            }), this._v(" "), t("SlideButtons", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex
                }
            }), this._v(" "), t("SlideSwipingHoverer", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex
                }
            })], 1) : this._e()
        };
        o._withStripped = !0;
        var i = ".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .25s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .25s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Helvetica,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);z-index:9999999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-previous-container{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-previous-container{padding-left:3px}}.fslightbox-slide-btn-next-container{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-next-container{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-next-container{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-next-container{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;margin:auto;opacity:0;z-index:2;backface-visibility:hidden;transform:translateZ(0);transition:opacity .3s;will-change:opacity}.fslightbox-source-outer{will-change:transform}",
            s = "fslightbox-",
            r = "".concat(s, "styles"),
            c = "".concat(s, "cursor-grabbing"),
            a = ("".concat(s, "full-dimension"), "".concat(s, "flex-centered"), "".concat(s, "open")),
            l = "".concat(s, "transform-transition"),
            u = ("".concat(s, "absoluted"), "".concat(s, "fade-in")),
            d = "".concat(s, "fade-out"),
            h = u + "-strong",
            f = d + "-strong",
            p = "".concat(s, "opacity-"),
            g = ("".concat(p, "0"), "".concat(p, "1")),
            x = "".concat(s, "source"),
            v = "".concat(x, "-outer");
        "".concat(v, "s-outers-wrapper");

        function m() {
            var e = document.createElement("style");
            e.className = r, e.appendChild(document.createTextNode(i)), document.head.appendChild(e)
        }

        function b(e) {
            return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        "object" === ("undefined" == typeof document ? "undefined" : b(document)) && m();
        var S = [];

        function w(e, t) {
            var n = e.classList;
            n.contains(t) && n.remove(t)
        }
        var y = 250;

        function L(e) {
            var t = this,
                n = e.componentsServices,
                o = n.isFullscreenOpenManager,
                i = n.isLightboxOpenManager,
                s = e.core,
                r = s.eventsDispatcher,
                c = s.fullscreenToggler,
                l = s.globalEventsController,
                u = s.scrollbarRecompensor,
                d = e.elements,
                h = e.slideSwipingProps;
            this.isLightboxFadingOut = !1, this.runActions = function () {
                t.isLightboxFadingOut = !0, d.container.classList.add(f), l.removeListeners(), o.get() && c.exitFullscreen(), setTimeout((function () {
                    t.isLightboxFadingOut = !1, h.isSwiping = !1, d.container.classList.remove(f), document.documentElement.classList.remove(a), u.removeRecompense(), i.set(!1), r.dispatch("onClose")
                }), y - 30)
            }
        }

        function _(e) {
            return e.touches ? e.touches[0].clientX : e.clientX
        }
        var I = "sourcesOuters",
            C = "sourcesInners";

        function F(e) {
            var t, n, o, i = e.collections.sourcesOutersTransformers,
                s = e.componentsServices,
                r = e.core,
                c = r.classFacade,
                a = r.slideIndexChanger,
                f = r.sourceDisplayFacade,
                p = r.stageManager,
                g = e.elements.sourcesInners,
                x = e.stageIndexes,
                v = (t = function () {
                    c.removeFromEachElementClassIfContains(C, d)
                }, n = y, o = [], function () {
                    o.push(!0), setTimeout((function () {
                        o.pop(), o.length || t()
                    }), n)
                });
            a.changeTo = function (e) {
                x.current = e, p.updateStageIndexes(), s.setSlideNumber(e + 1), f.displayStageSourcesIfNotYet()
            }, a.jumpTo = function (e) {
                var t = x.current;
                a.changeTo(e), c.removeFromEachElementClassIfContains(I, l), w(g[t], h), w(g[t], u), g[t].classList.add(d), w(g[e], h), w(g[e], d), g[e].classList.add(u), v(), i[e].zero(), setTimeout((function () {
                    t !== x.current && i[t].negative()
                }), y - 30)
            }
        }

        function O(e) {
            var t = e.core,
                n = t.lightboxCloser,
                o = t.fullscreenToggler,
                i = t.slideChangeFacade;
            this.listener = function (e) {
                switch (e.keyCode) {
                    case 27:
                        n.close();
                        break;
                    case 37:
                        i.changeToPrevious();
                        break;
                    case 39:
                        i.changeToNext();
                        break;
                    case 122:
                        e.preventDefault(), o.enterFullscreen()
                }
            }
        }

        function T(e) {
            var t = e.collections.sourcesOutersTransformers,
                n = e.componentsServices,
                o = e.elements,
                i = e.slideSwipingProps,
                s = e.stageIndexes;
            this.runActionsForEvent = function (e) {
                n.showSlideSwipingHoverer(), o.container.classList.add(c), i.swipedX = _(e) - i.downClientX, r(s.current, "zero"), void 0 !== s.previous && i.swipedX > 0 ? r(s.previous, "negative") : void 0 !== s.next && i.swipedX < 0 && r(s.next, "positive")
            };
            var r = function (e, n) {
                t[e].byValue(i.swipedX)[n]()
            }
        }

        function E(e) {
            var t, n = e.data.sources,
                o = e.resolve,
                i = e.slideSwipingProps,
                s = o(T),
                r = (t = !1, function () {
                    return !t && (t = !0, requestAnimationFrame((function () {
                        t = !1
                    })), !0)
                });
            1 === n.length ? this.listener = function () {
                i.swipedX = 1
            } : this.listener = function (e) {
                i.isSwiping && r() && s.runActionsForEvent(e)
            }
        }

        function z(e) {
            var t = e.collections.sourcesOutersTransformers,
                n = e.core.slideIndexChanger,
                o = e.elements.sourcesOuters,
                i = e.stageIndexes;
            this.runPositiveSwipedXActions = function () {
                void 0 === i.previous ? s("zero") : (s("positive"), n.changeTo(i.previous), s("zero"))
            }, this.runNegativeSwipedXActions = function () {
                void 0 === i.next ? s("zero") : (s("negative"), n.changeTo(i.next), s("zero"))
            };
            var s = function (e) {
                o[i.current].classList.add(l), t[i.current][e]()
            }
        }

        function N(e) {
            var t = e.componentsServices,
                n = e.core.lightboxCloser,
                o = e.elements,
                i = e.resolve,
                s = e.slideSwipingProps,
                r = i(z);
            this.runNoSwipeActions = function () {
                t.hideSlideSwipingHoverer(), s.isSourceDownEventTarget || n.close(), s.isSwiping = !1
            }, this.runActions = function () {
                s.swipedX > 0 ? r.runPositiveSwipedXActions() : r.runNegativeSwipedXActions(), t.hideSlideSwipingHoverer(), o.container.classList.remove(c), s.isSwiping = !1
            }
        }

        function A(e) {
            var t = e.resolve,
                n = e.slideSwipingProps,
                o = t(N);
            this.listener = function () {
                n.isSwiping && (n.swipedX ? o.runActions() : o.runNoSwipeActions())
            }
        }
        var k = "fslightbox-types",
            H = "fslightbox-scrollbar-width";

        function B(e) {
            var t, n = e.props.disableLocalStorage,
                o = 0,
                i = {};
            this.getSourceTypeFromLocalStorageByUrl = function (e) {
                return t[e] ? t[e] : s(e)
            }, this.handleReceivedSourceTypeForUrl = function (e, t) {
                void 0 !== i[t] && (o--, i[t] = e, r())
            };
            var s = function (e) {
                    o++, i[e] = !1
                },
                r = function () {
                    0 === o && (! function (e, t) {
                        for (var n in t) e[n] = t[n]
                    }(t, i), localStorage.setItem(k, JSON.stringify(t)))
                };
            n ? (this.getSourceTypeFromLocalStorageByUrl = function () {}, this.handleReceivedSourceTypeForUrl = function () {}) : (t = JSON.parse(localStorage.getItem(k))) || (t = {}, this.getSourceTypeFromLocalStorageByUrl = s)
        }
        var $ = "image",
            M = "video",
            R = "youtube",
            D = "custom",
            P = "invalid";

        function j(e, t, n, o) {
            var i = e.data,
                s = e.elements.sources,
                r = n / o,
                c = 0;
            this.styleSize = function () {
                if ((c = i.maxSourceWidth / r) < i.maxSourceHeight) return n < i.maxSourceWidth && (c = o), a();
                c = o > i.maxSourceHeight ? i.maxSourceHeight : o, a()
            };
            var a = function () {
                var e = s[t].style;
                e.width = c * r + "px", e.height = c + "px"
            }
        }

        function U(e, t, n, o) {
            var i = this,
                s = e.componentsServices.hideLoaderCollection,
                r = e.collections.sourcesStylers,
                c = e.elements,
                a = c.sourcesInners,
                l = c.sources,
                u = e.resolve;
            this.runNormalLoadActions = function () {
                l[t].classList.add(g), a[t].classList.add(h), s[t](), r[t].styleSize()
            }, this.runInitialLoadActions = function () {
                r[t] = u(j, [t, n, o]), i.runNormalLoadActions()
            }
        }

        function W(e, t) {
            var n = this,
                o = e.elements.sources,
                i = e.props.maxYoutubeVideoDimensions,
                s = e.resolve;
            this.handleImageLoad = function (e) {
                var t = e.target,
                    o = t.width,
                    i = t.height;
                n.handleImageLoad = r(o, i)
            }, this.handleVideoLoad = function (e) {
                var t = e.target,
                    o = t.videoWidth,
                    i = t.videoHeight;
                n.handleVideoLoad = r(o, i)
            }, this.handleYoutubeLoad = function () {
                var e = 1920,
                    t = 1080;
                i && (e = i.width, t = i.height), n.handleYoutubeLoad = r(e, t)
            }, this.handleCustomLoad = function () {
                var e = o[t];
                n.handleCustomLoad = r(e.offsetWidth, e.offsetHeight)
            };
            var r = function (e, n) {
                var o = s(U, [t, e, n]);
                return o.runInitialLoadActions(), o.runNormalLoadActions
            }
        }

        function X(e) {
            var t = e.collections.sourcesLoadsHandlers,
                n = e.componentsServices,
                o = n.isLightboxOpenManager,
                i = n.updateSourceInnerCollection,
                s = e.elements.sourcesComponents,
                r = e.resolve;
            this.runActionsForSourceTypeAndIndex = function (e, n) {
                var c;
                switch (e !== P && (t[n] = r(W, [n])), e) {
                    case $:
                        c = "Imager";
                        break;
                    case M:
                        c = "Videor";
                        break;
                    case R:
                        c = "Youtuber";
                        break;
                    case D:
                        c = "Customer";
                        break;
                    default:
                        c = "Invalider"
                }
                s[n] = c, o.get() && i[n]()
            }
        }

        function V(e) {
            var t, n, o, i, s, r = e.collections.xhrs,
                c = {
                    isUrlYoutubeOne: function (e) {
                        var t = document.createElement("a");
                        return t.href = e, "www.youtube.com" === t.hostname
                    },
                    getTypeFromResponseContentType: function (e) {
                        return e.slice(0, e.indexOf("/"))
                    }
                };
            this.setUrlToCheck = function (e) {
                t = e
            }, this.getSourceType = function (e) {
                if (c.isUrlYoutubeOne(t)) return e(R);
                o = e, i = new XMLHttpRequest, r.push(i), i.open("GET", t, !0), i.onreadystatechange = a, i.send()
            };
            var a = function () {
                    if (4 === i.readyState && 0 === i.status && !s) return l();
                    if (2 === i.readyState) {
                        if (200 !== i.status && 206 !== i.status) return s = !0, l();
                        s = !0, d(c.getTypeFromResponseContentType(i.getResponseHeader("content-type"))), u()
                    }
                },
                l = function () {
                    n = P, u()
                },
                u = function () {
                    i.abort(), o(n)
                },
                d = function (e) {
                    switch (e) {
                        case "image":
                            n = $;
                            break;
                        case "video":
                            n = M;
                            break;
                        default:
                            n = P
                    }
                }
        }

        function Y(e, t, n) {
            var o = e.props,
                i = o.types,
                s = o.type,
                r = o.sources,
                c = e.resolve;
            this.getTypeSetByClientForIndex = function (e) {
                var t;
                return i && i[e] ? t = i[e] : s && (t = s), t
            }, this.retrieveTypeWithXhrForIndex = function (e) {
                var o = c(V);
                o.setUrlToCheck(r[e]), o.getSourceType((function (o) {
                    t.handleReceivedSourceTypeForUrl(o, r[e]), n.runActionsForSourceTypeAndIndex(o, e)
                }))
            }
        }

        function q(e) {
            var t = e.core.eventsDispatcher;
            e.data.isInitialized = !0,
                function (e) {
                    for (var t = e.data.sources, n = e.resolve, o = n(B), i = n(X), s = n(Y, [o, i]), r = 0; r < t.length; r++)
                        if ("string" == typeof t[r]) {
                            var c = s.getTypeSetByClientForIndex(r);
                            if (c) i.runActionsForSourceTypeAndIndex(c, r);
                            else {
                                var a = o.getSourceTypeFromLocalStorageByUrl(t[r]);
                                a ? i.runActionsForSourceTypeAndIndex(a, r) : s.retrieveTypeWithXhrForIndex(r)
                            }
                        } else i.runActionsForSourceTypeAndIndex(D, r)
                }(e), t.dispatch("onInit")
        }

        function J(e) {
            var t, n, o;
            n = (t = e).core.classFacade, o = t.elements, n.removeFromEachElementClassIfContains = function (e, t) {
                    for (var n = 0; n < o[e].length; n++) w(o[e][n], t)
                },
                function (e) {
                    var t = e.core.eventsDispatcher,
                        n = e.props;
                    t.dispatch = function (e) {
                        n[e] && n[e]()
                    }
                }(e),
                function (e) {
                    var t = e.componentsServices.isFullscreenOpenManager,
                        n = e.core.fullscreenToggler;
                    n.enterFullscreen = function () {
                        t.set(!0);
                        var e = document.documentElement;
                        e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
                    }, n.exitFullscreen = function () {
                        t.set(!1), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
                    }
                }(e),
                function (e) {
                    var t = e.core,
                        n = t.globalEventsController,
                        o = t.windowResizeActioner,
                        i = e.resolve,
                        s = i(O),
                        r = i(E),
                        c = i(A);
                    n.attachListeners = function () {
                        document.addEventListener("mousemove", r.listener), document.addEventListener("touchmove", r.listener, {
                            passive: !0
                        }), document.addEventListener("mouseup", c.listener), document.addEventListener("touchend", c.listener, {
                            passive: !0
                        }), addEventListener("resize", o.runActions), document.addEventListener("keydown", s.listener)
                    }, n.removeListeners = function () {
                        document.removeEventListener("mousemove", r.listener), document.removeEventListener("touchmove", r.listener), document.removeEventListener("mouseup", c.listener), document.removeEventListener("touchend", c.listener), removeEventListener("resize", o.runActions), document.removeEventListener("keydown", s.listener)
                    }
                }(e),
                function (e) {
                    var t = e.core.lightboxCloser,
                        n = (0, e.resolve)(L);
                    t.close = function () {
                        n.isLightboxFadingOut || n.runActions()
                    }
                }(e),
                function (e) {
                    var t = e.componentsServices.isLightboxOpenManager,
                        n = e.core,
                        o = n.lightboxOpener,
                        i = n.lightboxOpenActioner;
                    o.open = function () {
                        t.set(!0, i.runActions)
                    }
                }(e),
                function (e) {
                    var t = e.collections.sourcesOutersTransformers,
                        n = e.core,
                        o = n.eventsDispatcher,
                        i = n.lightboxOpenActioner,
                        s = n.globalEventsController,
                        r = n.scrollbarRecompensor,
                        c = n.sourceDisplayFacade,
                        l = n.stageManager,
                        u = n.windowResizeActioner,
                        d = e.data,
                        h = e.stageIndexes;
                    i.runActions = function () {
                        l.updateStageIndexes(), document.documentElement.classList.add(a), u.runActions(), r.addRecompense(), s.attachListeners(), t[h.current].zero(), o.dispatch("onOpen"), d.isInitialized ? (o.dispatch("onShow"), c.displayStageSourcesIfNotYet()) : q(e)
                    }
                }(e),
                function (e) {
                    var t = e.componentsServices.isLightboxOpenManager,
                        n = e.core,
                        o = n.lightboxUpdater,
                        i = n.lightboxCloser,
                        s = n.lightboxOpener,
                        r = n.slideIndexChanger,
                        c = e.stageIndexes;
                    o.handleTogglerUpdate = function () {
                        t.get() ? i.close() : s.open()
                    }, o.runCurrentStageIndexUpdateActionsFor = function (e) {
                        e !== c.current && (t.get() ? r.jumpTo(e) : c.current = e)
                    }
                }(e),
                function (e) {
                    var t = e.data,
                        n = e.core.scrollbarRecompensor;
                    n.addRecompense = function () {
                        "complete" === document.readyState ? o() : window.addEventListener("load", (function () {
                            o(), n.addRecompense = o
                        }))
                    };
                    var o = function () {
                        document.body.offsetHeight > window.innerHeight && (document.body.style.marginRight = t.scrollbarWidth + "px")
                    };
                    n.removeRecompense = function () {
                        document.body.style.removeProperty("margin-right")
                    }
                }(e),
                function (e) {
                    var t = e.core,
                        n = t.slideChangeFacade,
                        o = t.slideIndexChanger,
                        i = t.stageManager;
                    e.data.sources.length > 1 ? (n.changeToPrevious = function () {
                        o.jumpTo(i.getPreviousSlideIndex())
                    }, n.changeToNext = function () {
                        o.jumpTo(i.getNextSlideIndex())
                    }) : (n.changeToPrevious = function () {}, n.changeToNext = function () {})
                }(e), F(e),
                function (e) {
                    var t = e.core,
                        n = t.classFacade,
                        o = t.slideSwipingDown,
                        i = e.elements.sources,
                        s = e.slideSwipingProps,
                        r = e.stageIndexes;
                    o.listener = function (e) {
                        s.isSwiping = !0, s.downClientX = _(e), s.swipedX = 0, "VIDEO" === e.target.tagName || e.touches || e.preventDefault();
                        var t = i[r.current];
                        t && t.contains(e.target) ? s.isSourceDownEventTarget = !0 : s.isSourceDownEventTarget = !1, n.removeFromEachElementClassIfContains(I, l)
                    }
                }(e),
                function (e) {
                    var t = e.core.sourceDisplayFacade,
                        n = e.componentsServices.updateSourceInnerCollection,
                        o = e.stageIndexes,
                        i = e.props.loadOnlyCurrentSource;
                    t.displayStageSourcesIfNotYet = function () {
                        if (i) n[o.current]();
                        else
                            for (var e in o) void 0 !== o[e] && n[o[e]]()
                    }
                }(e),
                function (e) {
                    var t = e.stageIndexes,
                        n = e.core.stageManager,
                        o = e.data.sources.length - 1;
                    n.getPreviousSlideIndex = function () {
                        return 0 === t.current ? o : t.current - 1
                    }, n.getNextSlideIndex = function () {
                        return t.current === o ? 0 : t.current + 1
                    }, n.updateStageIndexes = 0 === o ? function () {} : 1 === o ? function () {
                        0 === t.current ? (t.next = 1, delete t.previous) : (t.previous = 0, delete t.next)
                    } : function () {
                        t.previous = n.getPreviousSlideIndex(), t.next = n.getNextSlideIndex()
                    }, n.isSourceInStage = o <= 2 ? function () {
                        return !0
                    } : function (e) {
                        var n = t.current;
                        if (0 === n && e === o || n === o && 0 === e) return !0;
                        var i = n - e;
                        return -1 === i || 0 === i || 1 === i
                    }
                }(e),
                function (e) {
                    var t = e.collections,
                        n = t.sourcesOutersTransformers,
                        o = t.sourcesStylers,
                        i = e.core.windowResizeActioner,
                        s = e.componentsServices.isFullscreenOpenManager,
                        r = e.data,
                        c = e.elements.sourcesOuters,
                        a = e.stageIndexes;
                    i.runActions = function () {
                        innerWidth < 992 ? r.maxSourceWidth = innerWidth : r.maxSourceWidth = .9 * innerWidth, r.maxSourceHeight = .9 * innerHeight, screen.height !== innerHeight && s.set && s.set(!1);
                        for (var e = 0; e < r.sources.length; e++) w(c[e], l), e !== a.current && n[e].negative(), o[e] && o[e].styleSize()
                    }
                }(e)
        }

        function G(e, t) {
            var n = this,
                o = e.elements.sourcesOuters,
                i = e.props.slideDistance + 1,
                s = 0;
            this.byValue = function (e) {
                return s = e, n
            }, this.negative = function () {
                r(-c())
            }, this.zero = function () {
                r(0)
            }, this.positive = function () {
                r(c())
            };
            var r = function (e) {
                    o[t].style.transform = "translateX(".concat(e + s, "px)"), s = 0
                },
                c = function () {
                    return i * innerWidth
                }
        }

        function Z(e) {
            for (var t = e.data.sources.length, n = e.resolve, o = [], i = 0; i < t; i++) o.push(n(G, [i]));
            return o
        }

        function K(e) {
            var t = e.props,
                n = t.sources,
                o = t.customSources,
                i = n ? n.slice() : o.slice();
            if (o && n !== o)
                for (var s = 0; s < o.length; s++) o[s] && (i[s] = o[s]);
            return i
        }

        function Q(e, t, n) {
            return (Q = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                } catch (e) {
                    return !1
                }
            }() ? Reflect.construct : function (e, t, n) {
                var o = [null];
                o.push.apply(o, t);
                var i = new(Function.bind.apply(e, o));
                return n && ee(i, n.prototype), i
            }).apply(null, arguments)
        }

        function ee(e, t) {
            return (ee = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function te(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function ne(e) {
            var t, n, o, i, s, r, c, a = this;
            this.props = e, this.data = {
                sources: K(this),
                isInitialized: !1,
                maxSourceWidth: 0,
                maxSourceHeight: 0,
                scrollbarWidth: 0
            }, this.slideSwipingProps = {
                isSwiping: !1,
                downClientX: null,
                isSourceDownEventTarget: !1,
                swipedX: 0
            }, this.stageIndexes = {
                previous: void 0,
                current: (t = this, n = t.data.sources, o = t.props, i = o.slide, s = o.sourceIndex, r = o.source, c = 0, r ? c = n.indexOf(r) : s ? c = s : i && (c = i - 1), c),
                next: void 0
            }, this.componentsServices = {
                isLightboxOpenManager: {},
                setSlideNumber: null,
                isFullscreenOpenManager: {},
                hideLoaderCollection: [],
                updateSourceInnerCollection: [],
                showSlideSwipingHoverer: null,
                hideSlideSwipingHoverer: null
            }, this.elements = {
                container: null,
                sourcesOutersWrapper: null,
                sources: [],
                sourcesOuters: [],
                sourcesInners: [],
                sourcesComponents: []
            }, this.resolve = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return t.unshift(a), Q(e, te(t))
            }, this.collections = {
                sourcesOutersTransformers: Z(this),
                sourcesLoadsHandlers: [],
                sourcesStylers: [],
                xhrs: []
            }, this.core = {
                classFacade: {},
                eventsDispatcher: {},
                fullscreenToggler: {},
                globalEventsController: {},
                lightboxCloser: {},
                lightboxOpener: {},
                lightboxOpenActioner: {},
                lightboxUpdater: {},
                scrollbarRecompensor: {},
                slideChangeFacade: {},
                slideIndexChanger: {},
                slideSwipingDown: {},
                sourceDisplayFacade: {},
                stageManager: {},
                windowResizeActioner: {}
            }, J(this)
        }
        var oe = function () {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                ref: "nav",
                staticClass: "fslightbox-nav"
            }, [t("Toolbar", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex
                }
            }), this._v(" "), this.hasMoreThanSource ? t("SlideNumber", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex
                }
            }) : this._e()], 1)
        };
        oe._withStripped = !0;
        var ie = function () {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "fslightbox-toolbar"
            }, [t("FullscreenButton", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex
                }
            }), this._v(" "), t("CloseButton", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex
                }
            })], 1)
        };
        ie._withStripped = !0;
        var se = function () {
            var e = this.$createElement;
            return (this._self._c || e)("ToolbarButton", {
                attrs: {
                    "on-click": this.onClick,
                    "view-box": "0 0 24 24",
                    size: "20px",
                    d: "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z",
                    title: "Close"
                }
            })
        };
        se._withStripped = !0;
        var re = function () {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "fslightbox-toolbar-button fslightbox-flex-centered",
                attrs: {
                    title: this.title
                },
                on: {
                    click: this.onClick
                }
            }, [t("Svger", {
                attrs: {
                    size: this.size,
                    "view-box": this.viewBox,
                    d: this.d
                }
            })], 1)
        };
        re._withStripped = !0;
        var ce = function () {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("svg", {
                attrs: {
                    width: this.size,
                    height: this.size,
                    viewBox: this.viewBox,
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [t("path", {
                staticClass: "fslightbox-svg-path",
                attrs: {
                    d: this.d
                }
            })])
        };

        function ae(e, t, n, o, i, s, r, c) {
            var a, l = "function" == typeof e ? e.options : e;
            if (t && (l.render = t, l.staticRenderFns = n, l._compiled = !0), o && (l.functional = !0), s && (l._scopeId = "data-v-" + s), r ? (a = function (e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r)
                }, l._ssrRegister = a) : i && (a = c ? function () {
                    i.call(this, this.$root.$options.shadowRoot)
                } : i), a)
                if (l.functional) {
                    l._injectStyles = a;
                    var u = l.render;
                    l.render = function (e, t) {
                        return a.call(t), u(e, t)
                    }
                } else {
                    var d = l.beforeCreate;
                    l.beforeCreate = d ? [].concat(d, a) : [a]
                } return {
                exports: e,
                options: l
            }
        }
        ce._withStripped = !0;
        var le = ae({
            props: {
                size: String,
                viewBox: String,
                d: String
            }
        }, ce, [], !1, null, null, null);
        le.options.__file = "src/components/helpers/Svger.vue";
        var ue = le.exports,
            de = ae({
                components: {
                    Svger: ue
                },
                props: {
                    onClick: Function,
                    size: String,
                    viewBox: String,
                    d: String,
                    title: String
                }
            }, re, [], !1, null, null, null);
        de.options.__file = "src/components/nav/toolbar/ToolbarButton.vue";
        var he = de.exports,
            fe = ae({
                components: {
                    ToolbarButton: he
                },
                props: {
                    fsLightboxIndex: Number
                },
                data: function () {
                    return {
                        onClick: S[this.fsLightboxIndex].core.lightboxCloser.close
                    }
                }
            }, se, [], !1, null, null, null);
        fe.options.__file = "src/components/nav/toolbar/toolbar-buttons/CloseButton.vue";
        var pe = fe.exports,
            ge = function () {
                var e = this.$createElement;
                return (this._self._c || e)("ToolbarButton", {
                    attrs: {
                        "on-click": this.getButtonData("onClick"),
                        "view-box": this.getButtonData("viewBox"),
                        size: this.getButtonData("size"),
                        d: this.getButtonData("d"),
                        title: this.getButtonData("title")
                    }
                })
            };
        ge._withStripped = !0;
        var xe = ae({
            components: {
                ToolbarButton: he
            },
            props: {
                fsLightboxIndex: Number
            },
            data: function () {
                return {
                    isFullscreenOpen: !1
                }
            },
            methods: {
                getButtonData: function (e) {
                    var t = S[this.fsLightboxIndex].core.fullscreenToggler,
                        n = t.exitFullscreen,
                        o = t.enterFullscreen;
                    return (this.isFullscreenOpen ? {
                        onClick: n,
                        viewBox: "0 0 950 1024",
                        size: "24px",
                        d: "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z",
                        title: "Exit fullscreen"
                    } : {
                        onClick: o,
                        viewBox: "0 0 18 18",
                        size: "20px",
                        d: "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
                        title: "Enter fullscreen"
                    })[e]
                }
            },
            created: function () {
                var e = this,
                    t = S[this.fsLightboxIndex].componentsServices.isFullscreenOpenManager;
                t.get = function () {
                    return e.isFullscreenOpen
                }, t.set = function (t) {
                    return e.isFullscreenOpen = t
                }
            }
        }, ge, [], !1, null, null, null);
        xe.options.__file = "src/components/nav/toolbar/toolbar-buttons/FullscreenButton.vue";
        var ve = ae({
            components: {
                FullscreenButton: xe.exports,
                CloseButton: pe
            },
            props: {
                fsLightboxIndex: Number
            }
        }, ie, [], !1, null, null, null);
        ve.options.__file = "src/components/nav/toolbar/Toolbar.vue";
        var me = ve.exports,
            be = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    ref: "source-outer",
                    staticClass: "fslightbox-slide-number-container"
                }, [n("div", {
                    ref: "source-inner",
                    staticClass: "fslightbox-flex-centered"
                }, [n("span", [e._v(e._s(e.slide))]), e._v(" "), n("span", {
                    staticClass: "fslightbox-slash"
                }), e._v(" "), n("span", [e._v(e._s(e.sourcesCount))])])])
            };
        be._withStripped = !0;
        var Se = ae({
            props: {
                fsLightboxIndex: Number
            },
            data: function () {
                return {
                    slide: S[this.fsLightboxIndex].stageIndexes.current + 1,
                    sourcesCount: S[this.fsLightboxIndex].data.sources.length
                }
            },
            created: function () {
                var e = this;
                S[this.fsLightboxIndex].componentsServices.setSlideNumber = function (t) {
                    return e.slide = t
                }
            },
            mounted: function () {
                this.$refs["source-inner"].offsetWidth > 55 && (this.$refs["source-outer"].style.justifyContent = "flex-start")
            }
        }, be, [], !1, null, null, null);
        Se.options.__file = "src/components/nav/SlideNumber.vue";
        var we = ae({
            components: {
                SlideNumber: Se.exports,
                Toolbar: me
            },
            props: {
                fsLightboxIndex: Number
            },
            data: function () {
                return {
                    hasMoreThanSource: S[this.fsLightboxIndex].data.sources.length > 1
                }
            }
        }, oe, [], !1, null, null, null);
        we.options.__file = "src/components/nav/Naver.vue";
        var ye = we.exports,
            Le = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    ref: "ref",
                    staticClass: "fslightbox-absoluted fslightbox-full-dimension",
                    on: {
                        mousedown: e.listener,
                        touchstart: e.listener
                    }
                }, e._l(e.sources.length, (function (t, o) {
                    return n("SourceOuter", {
                        key: o,
                        attrs: {
                            i: o,
                            "fs-lightbox-index": e.fsLightboxIndex
                        }
                    })
                })), 1)
            };
        Le._withStripped = !0;
        var _e = function () {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                ref: "ref",
                staticClass: "fslightbox-source-outer fslightbox-absoluted fslightbox-full-dimension fslightbox-flex-centered"
            }, [t("SourceInner", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex,
                    i: this.i
                }
            }), this._v(" "), this.isSourceLoaded ? this._e() : t("Loader")], 1)
        };
        _e._withStripped = !0;
        var Ie = function () {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                ref: "ref"
            }, [e.current === e.i || !e.loadOnlyCurrentSource && e.isSourceInStage ? n(e.sourceComponent, {
                tag: "component",
                attrs: {
                    "fs-lightbox-index": e.fsLightboxIndex,
                    i: e.i
                }
            }) : e._e()], 1)
        };
        Ie._withStripped = !0;
        var Ce = function () {
            var e = this.$createElement;
            return (this._self._c || e)("img", {
                ref: "ref",
                staticClass: "fslightbox-source",
                attrs: {
                    src: this.src,
                    alt: this.src
                },
                on: {
                    load: this.onLoad
                }
            })
        };
        Ce._withStripped = !0;
        var Fe = ae({
            props: {
                fsLightboxIndex: Number,
                i: Number
            },
            data: function () {
                var e = S[this.fsLightboxIndex],
                    t = e.collections.sourcesLoadsHandlers,
                    n = e.data.sources;
                return {
                    onLoad: t[this.i].handleImageLoad,
                    src: n[this.i]
                }
            },
            mounted: function () {
                S[this.fsLightboxIndex].elements.sources[this.i] = this.$refs.ref
            }
        }, Ce, [], !1, null, null, null);
        Fe.options.__file = "src/components/sources/proper-sources/Imager.vue";
        var Oe = Fe.exports,
            Te = function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("video", {
                    ref: "ref",
                    staticClass: "fslightbox-source fslightbox-video",
                    attrs: {
                        poster: this.poster,
                        controls: ""
                    },
                    on: {
                        loadedmetadata: this.onLoad
                    }
                }, [t("source", {
                    attrs: {
                        src: this.src
                    }
                })])
            };
        Te._withStripped = !0;
        var Ee = ae({
            props: {
                fsLightboxIndex: Number,
                i: Number
            },
            data: function () {
                var e = S[this.fsLightboxIndex],
                    t = e.collections.sourcesLoadsHandlers,
                    n = e.data.sources,
                    o = e.props.videosPosters;
                return {
                    onLoad: t[this.i].handleVideoLoad,
                    src: n[this.i],
                    poster: o && o[this.i]
                }
            },
            mounted: function () {
                S[this.fsLightboxIndex].elements.sources[this.i] = this.$refs.ref
            }
        }, Te, [], !1, null, null, null);
        Ee.options.__file = "src/components/sources/proper-sources/Videor.vue";
        var ze = Ee.exports,
            Ne = function () {
                var e = this.$createElement;
                return (this._self._c || e)("iframe", {
                    ref: "ref",
                    staticClass: "fslightbox-source fslightbox-youtube-iframe",
                    attrs: {
                        src: this.src,
                        allowfullscreen: ""
                    }
                })
            };
        Ne._withStripped = !0;
        var Ae = ae({
            props: {
                fsLightboxIndex: Number,
                i: Number
            },
            data: function () {
                return {
                    src: "https://www.youtube.com/embed/".concat((e = S[this.fsLightboxIndex].data.sources[this.i], e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2]))
                };
                var e
            },
            mounted: function () {
                var e = S[this.fsLightboxIndex],
                    t = e.collections.sourcesLoadsHandlers;
                e.elements.sources[this.i] = this.$refs.ref, t[this.i].handleYoutubeLoad()
            }
        }, Ne, [], !1, null, null, null);
        Ae.options.__file = "src/components/sources/proper-sources/Youtuber.vue";
        var ke = Ae.exports,
            He = function () {
                var e = this.$createElement;
                return (this._self._c || e)(this.component, this._b({
                    ref: "ref",
                    tag: "component"
                }, "component", this.componentProps, !1))
            };
        He._withStripped = !0;
        var Be = ae({
            props: {
                fsLightboxIndex: Number,
                i: Number
            },
            data: function () {
                var e = S[this.fsLightboxIndex].data.sources[this.i],
                    t = {
                        component: e,
                        componentProps: {}
                    };
                return e.component && (t.component = e.component, t.componentProps = e.props), t
            },
            mounted: function () {
                var e = S[this.fsLightboxIndex],
                    t = e.collections.sourcesLoadsHandlers,
                    n = e.elements.sources;
                n[this.i] = this.$refs.ref.$el, n[this.i].classList.add(x), t[this.i].handleCustomLoad()
            }
        }, He, [], !1, null, null, null);
        Be.options.__file = "src/components/sources/proper-sources/Customer.vue";
        var $e = Be.exports,
            Me = function () {
                var e = this.$createElement;
                return (this._self._c || e)("div", {
                    staticClass: "fslightbox-invalid-file-wrapper fslightbox-flex-centered"
                }, [this._v("\n    Invalid source\n")])
            };
        Me._withStripped = !0;
        var Re = ae({
            props: {
                fsLightboxIndex: Number,
                i: Number
            },
            mounted: function () {
                var e = S[this.fsLightboxIndex],
                    t = e.componentsServices.hideLoaderCollection,
                    n = e.elements.sourcesOuters;
                t[this.i](), n[this.i].classList.add(h)
            }
        }, Me, [], !1, null, null, null);
        Re.options.__file = "src/components/sources/proper-sources/Invalider.vue";
        var De = Re.exports,
            Pe = ae({
                props: {
                    fsLightboxIndex: Number,
                    i: Number
                },
                components: {
                    Imager: Oe,
                    Videor: ze,
                    Youtuber: ke,
                    Customer: $e,
                    Invalider: De
                },
                data: function () {
                    var e = {};
                    return this.attachComponentDataToObject(e), e
                },
                created: function () {
                    var e = this;
                    S[this.fsLightboxIndex].componentsServices.updateSourceInnerCollection[this.i] = function () {
                        e.attachComponentDataToObject(e)
                    }
                },
                mounted: function () {
                    S[this.fsLightboxIndex].elements.sourcesInners[this.i] = this.$refs.ref
                },
                methods: {
                    attachComponentDataToObject: function (e) {
                        var t = S[this.fsLightboxIndex],
                            n = t.core.stageManager.isSourceInStage,
                            o = t.elements.sourcesComponents,
                            i = t.props.loadOnlyCurrentSource,
                            s = t.stageIndexes.current;
                        e.sourceComponent = o[this.i], e.isSourceInStage = n(this.i), e.current = s, e.loadOnlyCurrentSource = i
                    }
                }
            }, Ie, [], !1, null, null, null);
        Pe.options.__file = "src/components/sources/SourceInner.vue";
        var je = Pe.exports,
            Ue = function () {
                var e = this.$createElement;
                this._self._c;
                return this._m(0)
            };
        Ue._withStripped = !0;
        var We = ae({}, Ue, [function () {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                staticClass: "fslightbox-loader"
            }, [t("div"), this._v(" "), t("div"), this._v(" "), t("div"), this._v(" "), t("div")])
        }], !1, null, null, null);
        We.options.__file = "src/components/helpers/Loader.vue";
        var Xe = We.exports,
            Ve = ae({
                props: {
                    fsLightboxIndex: Number,
                    i: Number
                },
                components: {
                    SourceInner: je,
                    Loader: Xe
                },
                data: function () {
                    return {
                        isSourceLoaded: !1
                    }
                },
                created: function () {
                    var e = this;
                    S[this.fsLightboxIndex].componentsServices.hideLoaderCollection[this.i] = function () {
                        return e.isSourceLoaded = !0
                    }
                },
                mounted: function () {
                    S[this.fsLightboxIndex].elements.sourcesOuters[this.i] = this.$refs.ref
                }
            }, _e, [], !1, null, null, null);
        Ve.options.__file = "src/components/sources/SourceOuter.vue";
        var Ye = Ve.exports,
            qe = ae({
                props: {
                    fsLightboxIndex: Number
                },
                components: {
                    SourceOuter: Ye
                },
                data: function () {
                    var e = S[this.fsLightboxIndex],
                        t = e.core.slideSwipingDown.listener;
                    return {
                        sources: e.data.sources,
                        listener: t
                    }
                },
                mounted: function () {
                    S[this.fsLightboxIndex].elements.sourcesOutersWrapper = this.$refs.ref
                }
            }, Le, [], !1, null, null, null);
        qe.options.__file = "src/components/sources/SourcesOutersWrapper.vue";
        var Je = qe.exports,
            Ge = function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return this.sourcesCount > 1 ? t("div", [t("SlideButton", {
                    attrs: {
                        "on-click": this.changeToPrevious,
                        name: "previous",
                        d: "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"
                    }
                }), this._v(" "), t("SlideButton", {
                    attrs: {
                        "on-click": this.changeToNext,
                        name: "next",
                        d: "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"
                    }
                })], 1) : this._e()
            };
        Ge._withStripped = !0;
        var Ze = function () {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                class: "fslightbox-slide-btn-container fslightbox-slide-btn-" + this.name + "-container",
                attrs: {
                    title: this.title
                },
                on: {
                    click: this.onClick
                }
            }, [t("div", {
                staticClass: "fslightbox-slide-btn fslightbox-flex-centered"
            }, [t("Svger", {
                attrs: {
                    "view-box": "0 0 20 20",
                    size: "20px",
                    d: this.d
                }
            })], 1)])
        };
        Ze._withStripped = !0;
        var Ke = ae({
            components: {
                Svger: ue
            },
            props: {
                onClick: Function,
                name: String,
                d: String
            },
            data: function () {
                var e = this.name.charAt(0).toUpperCase() + this.name.slice(1);
                return {
                    title: "".concat(e, " slide")
                }
            }
        }, Ze, [], !1, null, null, null);
        Ke.options.__file = "src/components/SlideButton.vue";
        var Qe = Ke.exports,
            et = ae({
                props: {
                    fsLightboxIndex: Number
                },
                components: {
                    SlideButton: Qe
                },
                data: function () {
                    var e = S[this.fsLightboxIndex],
                        t = e.core.slideChangeFacade,
                        n = t.changeToPrevious,
                        o = t.changeToNext;
                    return {
                        sourcesCount: e.data.sources.length,
                        changeToPrevious: n,
                        changeToNext: o
                    }
                }
            }, Ge, [], !1, null, null, null);
        et.options.__file = "src/components/SlideButtons.vue";
        var tt = et.exports,
            nt = function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return this.isSlideSwipingHovererShown ? t("div", {
                    staticClass: "fslightbox-slide-swiping-hoverer fslightbox-full-dimension fslightbox-absoluted"
                }) : this._e()
            };
        nt._withStripped = !0;
        var ot = ae({
            props: {
                fsLightboxIndex: Number
            },
            data: function () {
                return {
                    isSlideSwipingHovererShown: !1
                }
            },
            created: function () {
                var e = this,
                    t = S[this.fsLightboxIndex].componentsServices;
                t.showSlideSwipingHoverer = function () {
                    e.isSlideSwipingHovererShown || (e.isSlideSwipingHovererShown = !0)
                }, t.hideSlideSwipingHoverer = function () {
                    e.isSlideSwipingHovererShown && (e.isSlideSwipingHovererShown = !1)
                }
            }
        }, nt, [], !1, null, null, null);
        ot.options.__file = "src/components/SlideSwipingHoverer.vue";
        var it, st = ot.exports;

        function rt() {
            var e = localStorage.getItem(H);
            if (e) return e;
            var t = function () {
                    var e = document.createElement("div"),
                        t = e.style;
                    return t.visibility = "hidden", t.width = "100px", t.msOverflowStyle = "scrollbar", t.overflow = "scroll", e
                }(),
                n = function () {
                    var e = document.createElement("div");
                    return e.style.width = "100%", e
                }();
            document.body.appendChild(t);
            var o = t.offsetWidth;
            t.appendChild(n);
            var i = n.offsetWidth;
            document.body.removeChild(t);
            var s = o - i;
            return localStorage.setItem(H, s.toString()), s
        }

        function ct(e) {
            var t = e.core.lightboxOpenActioner.runActions,
                n = e.data,
                o = e.props.openOnMount;
            document.getElementsByClassName(r).length || m(), n.scrollbarWidth = rt(), o && t()
        }
        var at = ae({
            props: {
                toggler: Boolean,
                sources: Array,
                customSources: Array,
                slide: Number,
                source: String,
                sourceIndex: Number,
                onOpen: Function,
                onClose: Function,
                onInit: Function,
                onShow: Function,
                disableLocalStorage: Boolean,
                types: Array,
                type: String,
                videosPosters: Array,
                maxYoutubeVideoDimensions: Object,
                loadOnlyCurrentSource: Boolean,
                slideDistance: {
                    type: Number,
                    default: .3
                },
                openOnMount: Boolean
            },
            components: {
                SlideButtons: tt,
                SourcesOutersWrapper: Je,
                Naver: ye,
                SlideSwipingHoverer: st
            },
            data: function () {
                return {
                    isOpen: this.openOnMount
                }
            },
            watch: {
                slide: function (e) {
                    S[this.fsLightboxIndex].core.lightboxUpdater.runCurrentStageIndexUpdateActionsFor(e - 1)
                },
                sourceIndex: function (e) {
                    S[this.fsLightboxIndex].core.lightboxUpdater.runCurrentStageIndexUpdateActionsFor(e)
                },
                source: function (e) {
                    S[this.fsLightboxIndex].core.lightboxUpdater.runCurrentStageIndexUpdateActionsFor(this.sources.indexOf(e))
                },
                toggler: function () {
                    S[this.fsLightboxIndex].core.lightboxUpdater.handleTogglerUpdate()
                }
            },
            created: function () {
                var e = this;
                this.fsLightboxIndex = S.push(new ne(this)) - 1;
                var t = S[this.fsLightboxIndex].componentsServices.isLightboxOpenManager;
                t.get = function () {
                    return e.isOpen
                }, t.set = function (t, n) {
                    e.isOpen = t, n && (it = n)
                }
            },
            mounted: function () {
                S[this.fsLightboxIndex].elements.container = this.$refs.container, ct(S[this.fsLightboxIndex])
            },
            updated: function () {
                S[this.fsLightboxIndex].elements.container = this.$refs.container, it && it(), it = null
            }
        }, o, [], !1, null, null, null);
        at.options.__file = "src/FsLightbox.vue";
        var lt = at.exports;
        window.FsLightbox = lt, Vue.component("fs-lightbox", lt)
    }])
}));