! function (t, e) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var n = e();
        for (var o in n)("object" == typeof exports ? exports : t)[o] = n[o]
    }
}(window, (function () {
    return function (t) {
        var e = {};

        function n(o) {
            if (e[o]) return e[o].exports;
            var s = e[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(s.exports, s, s.exports, n), s.l = !0, s.exports
        }
        return n.m = t, n.c = e, n.d = function (t, e, o) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: o
            })
        }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var s in t) n.d(o, s, function (e) {
                    return t[e]
                }.bind(null, s));
            return o
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 0)
    }([function (t, e, n) {
        "use strict";
        n.r(e);
        var o = function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return t.isOpen ? n("div", {
                ref: "container",
                staticClass: "fslightbox-container fslightbox-full-dimension fslightbox-fade-in-strong"
            }, [n("Captions", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex
                }
            }), t._v(" "), n("Naver", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex
                }
            }), t._v(" "), n("SourcesOutersWrapper", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex
                }
            }), t._v(" "), n("SlideButtons", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex
                }
            }), t._v(" "), n("SlideshowBar", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex
                }
            }), t._v(" "), n("SlideSwipingHoverer", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex
                }
            }), t._v(" "), n("Thumbs", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex
                }
            })], 1) : t._e()
        };
        o._withStripped = !0;
        var s = "fslightbox-",
            i = "".concat(s, "styles"),
            r = ("".concat(s, "full-dimension"), "".concat(s, "cursor-grabbing")),
            a = "".concat(s, "flex-centered"),
            c = "".concat(s, "open"),
            u = "".concat(s, "transform-transition"),
            l = ("".concat(s, "absoluted"), "".concat(s, "slide-btn")),
            h = ("".concat(l, "-container"), "".concat(s, "fade-in")),
            d = "".concat(s, "fade-out"),
            f = h + "-strong",
            p = d + "-strong",
            m = "".concat(s, "caption"),
            g = m + "-active",
            b = "".concat(s, "opacity-"),
            x = "".concat(b, "0"),
            v = "".concat(b, "1"),
            S = "".concat(s, "source"),
            w = ("".concat(S, "-inner"), "".concat(s, "sources-outers-wrapper"), "".concat(s, "thumb")),
            L = w + "s",
            T = ("".concat(L, "-loader"), "".concat(L, "-cursorer"), "".concat(L, "-inner"), w + "s-active"),
            I = w + "-active";

        function C() {
            var t = document.createElement("style");
            t.className = i, t.appendChild(document.createTextNode(".fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-scale-in{animation:fslightbox-scale-in .5s ease}@keyframes fslightbox-scale-in{from{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}.fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-cursor-grabbing{cursor:grabbing!important}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Helvetica,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);z-index:9999999;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#d1d2d2}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-thumbs-loader{width:54px!important;height:54px!important}.fslightbox-thumbs-loader div{border-width:4px!important;width:44px!important;height:44px!important}.fslightbox-nav{height:45px;width:100%;transition:opacity .3s}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:45px;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%);transition:opacity .3s}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-slideshow-bar{width:0;height:2px;z-index:4;opacity:0;background:#fff;transition:opacity .4s}.fslightbox-invalid-file-wrapper{font-size:24px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-source{position:relative;display:block;margin:auto;z-index:2;opacity:0;cursor:zoom-in;transform:translateZ(0);transition:transform .3s;backface-visibility:hidden}.fslightbox-source-inner{transition:transform .3s}.fslightbox-source-inner-pinching{transition:transform .1s linear}.fslightbox-source-outer{will-change:transform}.fslightbox-sources-outers-wrapper{z-index:2;top:0;transition:transform .3s}.fslightbox-thumbs{position:absolute;bottom:0;left:0;width:100%;z-index:-1;background:linear-gradient(180deg,rgba(0,0,0,0),#1e1e1e 100%);opacity:0;transition:opacity .2s;padding:0 5px 12px 5px;height:114px}@media (min-width:992px){.fslightbox-thumbs{padding-bottom:13px;height:120px}}@media (min-width:1600px){.fslightbox-thumbs{padding-bottom:14px;height:126px}}.fslightbox-thumbs-active{opacity:1;z-index:3}.fslightbox-thumbs-inner{height:100%;display:inline-flex;justify-content:flex-start;align-items:center}.fslightbox-thumb-wrapper{position:relative;height:100%;margin:0 4px;opacity:0;transition:opacity .3s}.fslightbox-thumb-wrapper svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);cursor:pointer;z-index:1}.fslightbox-thumb-wrapper path{fill:#fff}.fslightbox-thumb-wrapper-darkener{position:absolute;top:2px;left:2px;width:calc(100% - 4px);height:calc(100% - 4px);background:rgba(0,0,0,.4);cursor:pointer}.fslightbox-thumb{cursor:pointer;border-radius:1px;height:100%;width:auto!important;border:2px solid transparent}.fslightbox-thumb-active{border:2px solid #fff!important}.fslightbox-thumb-invalid{background:linear-gradient(to bottom,#0f0f0f,rgba(15,15,15,.5));display:inline-block;min-width:155px}.fslightbox-thumbs-cursorer{z-index:4;cursor:grabbing}.fslightbox-caption{position:absolute;bottom:0;left:50%;width:100%;background:linear-gradient(180deg,rgba(0,0,0,0),#1e1e1e 100%);transform:translateX(-50%);opacity:0;transition:opacity .2s;z-index:-1}.fslightbox-caption-inner{padding:25px;max-width:1200px;color:#eee;text-align:center;font-size:14px}@media (min-width:768px){.fslightbox-caption-inner{padding:30px 25px}}.fslightbox-caption-active{opacity:1;z-index:3}")), document.head.appendChild(t)
        }

        function y(t) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        "object" === ("undefined" == typeof document ? "undefined" : y(document)) && C();
        var _ = [];

        function A(t) {
            var e, n = t.collections.sourcesOutersTransformers,
                o = t.componentsServices,
                s = t.data,
                i = s.captionedSourcesOutersScales,
                r = s.sourcesOutersNoThumbsTranslatesY;
            this.handleFullscreenChange = function () {
                screen.height !== innerHeight && o.exitFullscreen()
            }, this.scaleSourceOuterAtIndex = function (t) {
                e = t, a("scale")
            }, this.negativeAndScaleSourceOuterAtIndex = function (t) {
                e = t, a("negativeAndScale", "negative")
            };
            var a = function (t, o) {
                s.isThumbing ? n[e].translate(0, s.sourcesOutersThumbsTranslateY)[t](s.thumbedSourcesScale) : i[e] ? n[e].translate(0, r[e])[t](i[e]) : o && n[e].negative()
            }
        }

        function O(t, e) {
            var n = t.classList;
            n.contains(e) && n.remove(e)
        }

        function z(t) {
            var e = this,
                n = t.componentsServices,
                o = n.isFullscreenOpenManager,
                s = n.isLightboxOpenManager,
                i = t.core,
                r = i.eventsDispatcher,
                a = i.fullscreenToggler,
                u = i.globalEventsController,
                l = i.scrollbarRecompensor,
                h = t.elements,
                d = t.sourcesPointerProps;
            this.isLightboxFadingOut = !1, this.runActions = function () {
                e.isLightboxFadingOut = !0, h.container.classList.add(p), u.removeListeners(), o.get() && a.exitFullscreen(), setTimeout((function () {
                    e.isLightboxFadingOut = !1, d.isPointering = !1, h.container.classList.remove(p), document.documentElement.classList.remove(c), l.removeRecompense(), s.set(!1), r.dispatch("onClose")
                }), 220)
            }
        }

        function B(t, e) {
            var n = [];
            return function () {
                n.push(!0), setTimeout((function () {
                    n.pop(), n.length || t()
                }), e)
            }
        }

        function F(t) {
            var e = t.collections.sourcesOutersTransformers,
                n = t.componentsServices,
                o = t.core,
                s = o.captionsActioner,
                i = o.classFacade,
                r = o.eventsDispatcher,
                a = o.slideIndexChanger,
                c = o.sourceDisplayFacade,
                l = o.stageManager,
                h = o.thumbsTransformer,
                f = o.zoomer,
                p = t.elements,
                m = t.props,
                g = m.disableThumbs,
                b = m.initialAnimation,
                x = m.slideChangeAnimation,
                v = t.stageIndexes,
                S = B((function () {
                    i.removeFromEachElementClassIfContains("sourcesInners", d)
                }), 250);
            a.changeTo = function (e) {
                ! function (t, e) {
                    var n = t.elements.thumbs,
                        o = t.stageIndexes;
                    n && n[o.current] && (n[o.current].classList.remove(I), n[e].classList.add(I))
                }(t, e), s.changeActiveCaptionFromTo(v.current, e), f.ifZoomingResetZoom(), v.current = e, l.updateStageIndexes(), g || h.transformToCurrentWithTransition(), n.setSlideNumber(e + 1), c.displayStageSourcesIfNotYet(), r.dispatch("onSlideChange")
            }, a.jumpTo = function (t) {
                var n = v.current;
                a.changeTo(t), i.removeFromEachElementClassIfContains("sourcesOuters", u), O(p.sourcesInners[n], b), O(p.sourcesInners[n], x), p.sourcesInners[n].classList.add(d), O(p.sourcesInners[t], b), O(p.sourcesInners[t], d), p.sourcesInners[t].classList.add(x), S(), e[t].zero(), setTimeout((function () {
                    n !== v.current && e[n].negative()
                }), 220)
            }
        }

        function N(t) {
            var e = t.core,
                n = e.clickZoomer,
                o = e.lightboxCloser,
                s = e.fullscreenToggler,
                i = e.slideChangeFacade,
                r = e.slideshowManager,
                a = e.thumbsToggler,
                c = t.props;
            this.listener = function (t) {
                if ("Space" !== t.code) switch (t.key) {
                    case "Escape":
                        o.close();
                        break;
                    case "ArrowLeft":
                        i.changeToPrevious();
                        break;
                    case "ArrowRight":
                        i.changeToNext();
                        break;
                    case "t":
                        c.disableThumbs || a.toggleThumbs();
                        break;
                    case "+":
                        n.zoomIn();
                        break;
                    case "-":
                        n.zoomOut();
                        break;
                    case "F11":
                        t.preventDefault(), s.enterFullscreen()
                } else r.toggleSlideshow()
            }
        }

        function E(t) {
            return t.touches ? t.touches[0].clientY : t.clientY
        }

        function P(t) {
            var e = t.collections.sourcesOutersTransformers,
                n = t.core.zoomer,
                o = t.data,
                s = t.sourcesPointerProps;
            this.runZoomingPinchActionsForHypot = function (t) {
                var e = t - s.pinchedHypot,
                    i = o.zoom + e / Math.hypot(innerWidth, innerHeight) * 10;
                i < .25 && (i = .25), n.zoomTo(i), s.pinchedHypot = t
            }, this.translateSourceOuterAtIndexUsingMethod = function (t, n) {
                e[t].translate(s.swipedX)[n]()
            }
        }

        function k(t) {
            return Math.hypot(t.touches[0].pageX - t.touches[1].pageX, t.touches[0].pageY - t.touches[1].pageY)
        }

        function M(t) {
            return t.touches ? t.touches[0].clientX : t.clientX
        }

        function D(t) {
            var e = t.collections.sourcesOutersTransformers,
                n = t.componentsServices,
                o = t.core.pointeringBucket,
                s = t.resolve,
                i = t.sourcesPointerProps,
                r = t.stageIndexes,
                a = s(P);
            this.runActions = function (t) {
                o.runSwipingMoveActionsForPropsAndEvent(i, t), n.showSlideSwipingHovererIfNotYet()
            }, this.runPinchActions = function (t) {
                var e = k(t);
                i.pinchedHypot ? a.runZoomingPinchActionsForHypot(e) : i.pinchedHypot = e
            }, this.runNormalSwipeActions = function () {
                a.translateSourceOuterAtIndexUsingMethod(r.current, "zero"), void 0 !== r.previous && i.swipedX > 0 ? a.translateSourceOuterAtIndexUsingMethod(r.previous, "negative") : void 0 !== r.next && i.swipedX < 0 && a.translateSourceOuterAtIndexUsingMethod(r.next, "positive")
            }, this.runZoomSwipeActions = function (t) {
                i.swipedX = M(t) - i.downClientX, i.swipedY = E(t) - i.downClientY, e[r.current].translate(i.upSwipedX + i.swipedX, i.upSwipedY + i.swipedY).zero()
            }
        }

        function H(t) {
            var e, n = (e = !1, function () {
                return !e && (e = !0, requestAnimationFrame((function () {
                    e = !1
                })), !0)
            });
            return function () {
                return t.isPointering && n()
            }
        }

        function Y(t) {
            return t.touches ? t.touches.length : 0
        }

        function W(t) {
            var e = t.data,
                n = t.props,
                o = t.resolve,
                s = t.sourcesPointerProps,
                i = H(s),
                r = o(D);
            this.listener = function (t) {
                i() && (r.runActions(t), Y(t) && s.isPinching ? r.runPinchActions(t) : 1 === e.zoom ? 1 === n.sources.length ? s.swipedX = 1 : r.runNormalSwipeActions(t) : r.runZoomSwipeActions(t))
            }
        }

        function $(t) {
            var e = t.collections.sourcesOutersTransformers,
                n = t.core,
                o = n.slideIndexChanger,
                s = n.clickZoomer,
                i = t.data,
                r = t.elements.sourcesOuters,
                a = t.sourcesPointerProps,
                c = t.stageIndexes;
            this.runPositiveSwipedXActions = function () {
                void 0 === c.previous || (l("positive"), o.changeTo(c.previous)), l("zero")
            }, this.runNegativeSwipedXActions = function () {
                void 0 === c.next || (l("negative"), o.changeTo(c.next)), l("zero")
            }, this.saveCurrentSourceOuterPosition = function () {
                a.upSwipedX = e[c.current].getTranslateX(), a.upSwipedY = e[c.current].getTranslateY()
            }, this.runSourceDownEventTargetActions = function () {
                i.zoom <= 1 ? s.zoomIn() : s.zoomOut()
            };
            var l = function (t) {
                r[c.current].classList.add(u), e[c.current][t]()
            }
        }

        function R(t) {
            var e = t.componentsServices,
                n = t.core,
                o = n.lightboxCloser,
                s = n.pointeringBucket,
                i = t.data,
                r = t.elements.sourcesInners,
                a = t.resolve,
                c = t.sourcesPointerProps,
                u = t.stageIndexes,
                l = a($);
            this.runActions = function () {
                e.hideSlideSwipingHoverer(), c.isPinching = !1, c.pinchedHypot = 0, s.runSwipingTopActionsForPropsAndEvent(c), O(r[u.current], "fslightbox-source-inner-pinching")
            }, this.runSwipeActions = function () {
                1 === i.zoom ? c.swipedX > 0 ? l.runPositiveSwipedXActions() : l.runNegativeSwipedXActions() : l.saveCurrentSourceOuterPosition()
            }, this.runNoSwipeActions = function () {
                c.isSourceDownEventTarget ? l.runSourceDownEventTargetActions() : o.close()
            }
        }

        function X(t) {
            var e = t.data,
                n = t.resolve,
                o = t.sourcesPointerProps,
                s = t.core.zoomer,
                i = n(R);
            this.listener = function (t) {
                o.isPointering && (o.isPinching || (o.swipedX ? i.runSwipeActions() : i.runNoSwipeActions()), i.runActions(t), e.zoom < 1 && (s.zoomTo(1), s.stopZooming()))
            }
        }

        function U(t) {
            var e = t.componentsServices,
                n = t.core.pointeringBucket,
                o = t.data,
                s = t.elements,
                i = t.thumbsSwipingProps;
            this.runActions = function (t) {
                n.runSwipingMoveActionsForPropsAndEvent(i, t), s.thumbsInner.style.transform = "translateX(".concat(o.thumbsTransform + i.swipedX, "px)"), e.showThumbsCursorerIfNotYet()
            }
        }

        function j(t) {
            var e = t.data,
                n = t.resolve,
                o = H(t.thumbsSwipingProps),
                s = n(U);
            this.listener = function (t) {
                e.thumbsInnerWidth > innerWidth && o() && s.runActions(t)
            }
        }

        function Z(t) {
            var e = t.componentsServices,
                n = t.data,
                o = t.core,
                s = o.slideIndexChanger,
                i = o.thumbsTransformTransitioner,
                r = o.pointeringBucket,
                a = t.elements,
                c = t.thumbsSwipingProps,
                u = a.thumbsWrappers;
            this.runNoSwipeActionsForEvent = function (t) {
                c.isPointering = !1;
                for (var e = 0; e < a.thumbsWrappers.length; e++)
                    if (u[e] && u[e].contains(t.target)) return void s.jumpTo(e)
            }, this.runActions = function () {
                if (e.hideThumbsCursorer(), n.thumbsTransform += c.swipedX, r.runSwipingTopActionsForPropsAndEvent(c), n.thumbsTransform > 0) return l(0);
                n.thumbsTransform < innerWidth - n.thumbsInnerWidth - 9 && l(innerWidth - n.thumbsInnerWidth - 9)
            };
            var l = function (t) {
                n.thumbsTransform = t, i.callActionWithTransition((function () {
                    a.thumbsInner.style.transform = "translateX(".concat(t, "px)")
                }))
            }
        }

        function V(t) {
            var e = t.resolve,
                n = t.thumbsSwipingProps,
                o = e(Z);
            this.listener = function (t) {
                n.isPointering && (n.swipedX ? o.runActions() : o.runNoSwipeActionsForEvent(t))
            }
        }

        function q(t) {
            var e = t.core.inactiver,
                n = t.props,
                o = t.resolve,
                s = o(W),
                i = o(X),
                r = o(j),
                a = o(V);
            this.moveListener = function (t) {
                e.listener(t), s.listener(t), n.disableThumbs || r.listener(t)
            }, this.upListener = function (t) {
                i.listener(t), n.disableThumbs || a.listener(t)
            }
        }

        function J() {
            try {
                return document.createEvent("TouchEvent"), !0
            } catch (t) {
                return !1
            }
        }

        function G(t, e) {
            return function () {
                e.apply(void 0, arguments) && t.apply(void 0, arguments)
            }
        }

        function K(t) {
            return !t.touches || t.touches.length <= 2
        }

        function Q(t) {
            var e, n = t.props.disableLocalStorage,
                o = 0,
                s = {};
            this.getSourceTypeFromLocalStorageByUrl = function (t) {
                return e[t] ? e[t] : i(t)
            }, this.handleReceivedSourceTypeForUrl = function (t, e) {
                void 0 !== s[e] && (o--, s[e] = t, r())
            };
            var i = function (t) {
                    o++, s[t] = !1
                },
                r = function () {
                    0 === o && (! function (t, e) {
                        for (var n in e) t[n] = e[n]
                    }(e, s), localStorage.setItem("fslightbox-types", JSON.stringify(e)))
                };
            n ? (this.getSourceTypeFromLocalStorageByUrl = function () {}, this.handleReceivedSourceTypeForUrl = function () {}) : (e = JSON.parse(localStorage.getItem("fslightbox-types"))) || (e = {}, this.getSourceTypeFromLocalStorageByUrl = i)
        }

        function tt(t, e, n, o) {
            var s = this,
                i = t.collections.sourcesTransformers,
                r = t.data.sourcesTranslatesY,
                a = t.elements.sources,
                c = 1;
            this.styleSourceUsingScaleAndHeight = function (t, u) {
                innerWidth < innerHeight && n > o + u ? (c = 1 / t, r[e] = a[e].getBoundingClientRect().height * (c - 1) / 2, i[e].translateYAndScale(r[e], c)) : (s.ifSourcesScaledResetScale(), delete r[e])
            }, this.ifSourcesScaledResetScale = function () {
                1 !== c && (c = 1, i[e].translateYAndScale(0, 1), delete r[e])
            }
        }

        function et(t, e, n, o) {
            var s = this,
                i = t.data,
                r = t.elements,
                a = t.resolve,
                c = i.captionedSourcesOutersScales,
                u = a(tt, [e, n, o]),
                l = n / o,
                h = 0;
            this.styleAll = function () {
                s.styleSize(), s.styleScale()
            }, this.styleSize = function () {
                if ((h = i.maxSourceWidth / l) < i.maxSourceHeight) return n < i.maxSourceWidth && (h = o), d();
                h = o > i.maxSourceHeight ? i.maxSourceHeight : o, d()
            }, this.styleScale = function () {
                i.isThumbing ? u.styleSourceUsingScaleAndHeight(i.thumbedSourcesScale, r.thumbsContainer.offsetHeight) : 1 !== c[e] ? u.styleSourceUsingScaleAndHeight(c[e], r.captions[e].offsetHeight) : u.ifSourcesScaledResetScale()
            };
            var d = function () {
                var t = r.sources[e].style;
                t.width = h * l + "px", t.height = h + "px"
            }
        }

        function nt(t, e) {
            var n, o, s = t.elements.sources;
            this.translateY = function (t) {
                o = t, i()
            }, this.translateYAndScale = function (t, e) {
                o = t, n = e, i()
            };
            var i = function () {
                s[e].style.transform = "translateY(".concat(o, "px) scale(").concat(n, ")")
            }
        }

        function ot(t, e, n, o) {
            var s = this,
                i = t.componentsServices.hideLoaderCollection,
                r = t.collections,
                a = r.sourcesStylers,
                c = r.sourcesTransformers,
                u = t.elements,
                l = u.sourcesInners,
                h = u.sources,
                d = t.props.initialAnimation,
                f = t.resolve;
            this.runNormalLoadActions = function () {
                h[e].classList.add(v), l[e].classList.add(d), i[e](), a[e].styleAll()
            }, this.runInitialLoadActions = function () {
                c[e] = f(nt, [e]), a[e] = f(et, [e, n, o]), s.runNormalLoadActions()
            }
        }

        function st(t, e) {
            var n = this,
                o = t.elements.sources,
                s = t.props.maxYoutubeVideoDimensions,
                i = t.resolve;
            this.handleImageLoad = function (t) {
                var e = t.target,
                    o = e.width,
                    s = e.height;
                n.handleImageLoad = r(o, s)
            }, this.handleVideoLoad = function (t) {
                var e = t.target,
                    o = e.videoWidth,
                    s = e.videoHeight;
                n.handleVideoLoad = r(o, s)
            }, this.handleYoutubeLoad = function () {
                var t = 1920,
                    e = 1080;
                s && (t = s.width, e = s.height), n.handleYoutubeLoad = r(t, e)
            }, this.handleCustomLoad = function () {
                var t = o[e];
                n.handleCustomLoad = r(t.offsetWidth, t.offsetHeight)
            };
            var r = function (t, n) {
                var o = i(ot, [e, t, n]);
                return o.runInitialLoadActions(), o.runNormalLoadActions
            }
        }

        function it(t) {
            var e = t.componentsServices,
                n = t.data,
                o = t.elements.thumbsPropedComponents,
                s = t.props,
                i = s.showThumbsOnMount,
                r = s.sources,
                a = s.thumbs;
            this.buildThumbForTypeAndIndex = function (t, s) {
                a && a[s] ? o[s] = {
                    component: "Thumb",
                    props: {
                        i: s,
                        src: a[s]
                    }
                } : o[s] = "image" === t ? {
                    component: "Thumb",
                    props: {
                        i: s,
                        src: r[s]
                    }
                } : {
                    component: "InvalidThumb",
                    props: {
                        i: s
                    }
                }, e.isLightboxOpenManager.get() && (i || n.isThumbing) && e.updateThumbsInner()
            }
        }

        function rt(t) {
            var e, n = t.collections.sourcesLoadsHandlers,
                o = t.componentsServices,
                s = o.isLightboxOpenManager,
                i = o.updateSourceInnerCollection,
                r = t.elements.sourcesComponents,
                a = t.props.disableThumbs,
                c = t.resolve;
            a || (e = c(it)), this.runActionsForSourceTypeAndIndex = function (t, o) {
                var u;
                switch ("invalid" !== t && (n[o] = c(st, [o])), t) {
                    case "image":
                        u = "Imager";
                        break;
                    case "video":
                        u = "Videor";
                        break;
                    case "youtube":
                        u = "Youtuber";
                        break;
                    case "custom":
                        u = "Customer";
                        break;
                    default:
                        u = "Invalider"
                }
                r[o] = u, s.get() && i[o](), a || e.buildThumbForTypeAndIndex(t, o)
            }
        }

        function at(t) {
            var e, n, o, s, i, r = t.collections.xhrs,
                a = {
                    isUrlYoutubeOne: function (t) {
                        var e = document.createElement("a");
                        return e.href = t, "www.youtube.com" === e.hostname
                    },
                    getTypeFromResponseContentType: function (t) {
                        return t.slice(0, t.indexOf("/"))
                    }
                };
            this.setUrlToCheck = function (t) {
                e = t
            }, this.getSourceType = function (t) {
                if (a.isUrlYoutubeOne(e)) return t("youtube");
                o = t, s = new XMLHttpRequest, r.push(s), s.open("GET", e, !0), s.onreadystatechange = c, s.send()
            };
            var c = function () {
                    if (4 === s.readyState && 0 === s.status && !i) return u();
                    if (2 === s.readyState) {
                        if (200 !== s.status && 206 !== s.status) return i = !0, u();
                        i = !0, h(a.getTypeFromResponseContentType(s.getResponseHeader("content-type"))), l()
                    }
                },
                u = function () {
                    n = "invalid", l()
                },
                l = function () {
                    s.abort(), o(n)
                },
                h = function (t) {
                    switch (t) {
                        case "image":
                            n = "image";
                            break;
                        case "video":
                            n = "video";
                            break;
                        default:
                            n = "invalid"
                    }
                }
        }

        function ct(t, e, n) {
            var o = t.props,
                s = o.types,
                i = o.type,
                r = o.sources,
                a = t.resolve;
            this.getTypeSetByClientForIndex = function (t) {
                var e;
                return s && s[t] ? e = s[t] : i && (e = i), e
            }, this.retrieveTypeWithXhrForIndex = function (t) {
                var o = a(at);
                o.setUrlToCheck(r[t]), o.getSourceType((function (o) {
                    e.handleReceivedSourceTypeForUrl(o, r[t]), n.runActionsForSourceTypeAndIndex(o, t)
                }))
            }
        }

        function ut(t) {
            var e = t.data,
                n = t.core.eventsDispatcher;
            e.isInitialized = !0,
                function (t) {
                    for (var e = t.data.sources, n = t.resolve, o = n(Q), s = n(rt), i = n(ct, [o, s]), r = 0; r < e.length; r++)
                        if ("string" == typeof e[r]) {
                            var a = i.getTypeSetByClientForIndex(r);
                            if (a) s.runActionsForSourceTypeAndIndex(a, r);
                            else {
                                var c = o.getSourceTypeFromLocalStorageByUrl(e[r]);
                                c ? s.runActionsForSourceTypeAndIndex(c, r) : i.retrieveTypeWithXhrForIndex(r)
                            }
                        } else s.runActionsForSourceTypeAndIndex("custom", r)
                }(t), n.dispatch("onInit")
        }

        function lt(t) {
            var e = t.core,
                n = e.slideshowManager,
                o = e.slideChangeFacade,
                s = t.componentsServices,
                i = t.elements,
                r = t.props,
                a = 0,
                c = !1;

            function u() {
                i.slideshowBar.classList.remove(v), s.stopSlideshow(), c = !1
            }

            function l() {
                var t = (a += 16.67) / r.slideshowTime;
                i.slideshowBar.style.width = t * innerWidth + "px", t >= 1 && (a = 0, o.changeToNext()), c && requestAnimationFrame(l)
            }
            n.toggleSlideshow = function () {
                c ? u() : (c = !0, i.slideshowBar.classList.add(v), s.startSlideshow(), l())
            }, n.resetSlideshow = function () {
                a = 0, c && u()
            }
        }

        function ht(t) {
            var e = t.collections,
                n = e.sourcesTransformers,
                o = e.sourcesOutersTransformers,
                s = t.data,
                i = t.elements,
                r = t.stageIndexes,
                a = i.captions,
                c = i.sourcesOuters;
            this.translateYSourceIfSupposed = function (t) {
                n[r.current] && s.sourcesTranslatesY[r.current] && n[r.current].translateY(t)
            }, this.runOpacity0ActionUsingMethod = function (t) {
                i.slideButtonPrevious && (i.slideButtonPrevious.classList[t](x), i.slideButtonNext.classList[t](x))
            }, this.translateYSourceOuterTo = function (t) {
                c[r.current].classList.add(u), o[r.current].translate(0, t).zero()
            }, this.runActiveEnhancementActionUsingMethod = function (t) {
                s.isThumbing ? i.thumbsContainer.classList[t](T) : a[r.current] && a[r.current].classList[t](g)
            }
        }

        function dt(t, e) {
            var n = t.classList;
            n.contains(e) || n.add(e)
        }

        function ft(t) {
            var e = t.core.zoomer,
                n = t.data,
                o = t.elements.sourcesInners,
                s = t.sourcesPointerProps,
                i = t.stageIndexes;
            this.runPinchActions = function (t) {
                s.isPinching = !0, s.pinchedHypot = k(t), dt(o[i.current], "fslightbox-source-inner-pinching"), 1 === n.zoom && e.startZooming()
            }
        }

        function pt(t) {
            var e, n, o;
            ! function (t) {
                var e = t.core.captionsActioner,
                    n = t.data,
                    o = t.elements.captions;
                e.changeActiveCaptionFromTo = function (t, e) {
                    n.isThumbing || (s(t, O), s(e, dt))
                };
                var s = function (t, e) {
                    o[t] && e(o[t], g)
                }
            }(t), n = (e = t).core.classFacade, o = e.elements, n.removeFromEachElementClassIfContains = function (t, e) {
                    for (var n = 0; n < o[t].length; n++) O(o[t][n], e)
                },
                function (t) {
                    var e = t.core,
                        n = e.clickZoomer,
                        o = e.zoomer,
                        s = t.data;
                    n.zoomIn = function () {
                        i(), a(s.zoom + .25), r()
                    }, n.zoomOut = function () {
                        .25 !== s.zoom && (i(), a(s.zoom - .25), r())
                    };
                    var i = function () {
                            1 === s.zoom && o.startZooming()
                        },
                        r = function () {
                            1 === s.zoom && o.stopZooming()
                        },
                        a = function (t) {
                            s.zoom = t, o.zoomTo(s.zoom)
                        }
                }(t),
                function (t) {
                    var e = t.core.eventsDispatcher,
                        n = t.props;
                    e.dispatch = function (e) {
                        n[e] && n[e](t)
                    }
                }(t),
                function (t) {
                    var e = t.componentsServices.isFullscreenOpenManager,
                        n = t.core.fullscreenToggler;
                    n.enterFullscreen = function () {
                        e.set(!0);
                        var t = document.documentElement;
                        t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen()
                    }, n.exitFullscreen = function () {
                        e.set(!1), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
                    }
                }(t),
                function (t) {
                    var e = t.core,
                        n = e.inactiver,
                        o = e.globalEventsController,
                        s = e.windowResizeActioner,
                        i = t.resolve,
                        r = i(q),
                        a = i(N);
                    o.addListeners = function () {
                        J() ? (document.addEventListener("touchstart", n.listener, {
                            passive: !0
                        }), document.addEventListener("touchmove", G(r.moveListener, K), {
                            passive: !0
                        }), document.addEventListener("touchend", G(r.upListener, K))) : (document.addEventListener("mousedown", n.listener), document.addEventListener("mousemove", (function (t) {
                            r.moveListener(t)
                        })), document.addEventListener("mouseup", r.upListener)), addEventListener("resize", s.runActions), document.addEventListener("keydown", a.listener)
                    }, o.removeListeners = function () {
                        J() ? (document.removeEventListener("touchstart", n.listener), document.removeEventListener("touchmove", r.moveListener), document.removeEventListener("touchend", r.upListener)) : (document.removeEventListener("mousedown", n.listener), document.removeEventListener("mousemove", r.moveListener), document.removeEventListener("mouseup", r.upListener)), removeEventListener("resize", s.runActions), document.removeEventListener("keydown", a.listener)
                    }
                }(t),
                function (t) {
                    var e = t.core.inactiver,
                        n = t.data,
                        o = t.elements,
                        s = t.props.UIFadeOutTime,
                        i = !1,
                        r = B((function () {
                            i = !0, a(c)
                        }), s);
                    e.listener = function () {
                        r(), i && (a(u), i = !1)
                    };
                    var a = function (t) {
                            t(o.nav), 1 === n.zoom && o.slideButtonPrevious && (t(o.slideButtonPrevious), t(o.slideButtonNext)), n.isThumbing && t(o.thumbsContainer)
                        },
                        c = function (t) {
                            t.classList.add(x)
                        },
                        u = function (t) {
                            t.classList.remove(x)
                        }
                }(t),
                function (t) {
                    var e = t.core.lightboxCloser,
                        n = (0, t.resolve)(z);
                    e.close = function () {
                        n.isLightboxFadingOut || n.runActions()
                    }
                }(t),
                function (t) {
                    var e = t.componentsServices.isLightboxOpenManager,
                        n = t.core,
                        o = n.lightboxOpener,
                        s = n.lightboxOpenActioner;
                    o.open = function () {
                        s.runBeforeRenderActions(), e.set(!0, s.runAfterRenderActions)
                    }
                }(t),
                function (t) {
                    var e = t.collections.sourcesOutersTransformers,
                        n = t.core,
                        o = n.eventsDispatcher,
                        s = n.lightboxOpenActioner,
                        i = n.globalEventsController,
                        r = n.scrollbarRecompensor,
                        a = n.sourceDisplayFacade,
                        u = n.stageManager,
                        l = n.windowResizeActioner,
                        h = t.data,
                        d = t.stageIndexes;
                    s.runBeforeRenderActions = function () {
                        h.unloadedThumbsCount = h.sources.length
                    }, s.runAfterRenderActions = function () {
                        u.updateStageIndexes(), document.documentElement.classList.add(c), l.runActions(), r.addRecompense(), i.addListeners(), e[d.current].zero(), o.dispatch("onOpen"), h.isInitialized ? (o.dispatch("onShow"), a.displayStageSourcesIfNotYet()) : ut(t)
                    }
                }(t),
                function (t) {
                    var e = t.componentsServices.isLightboxOpenManager,
                        n = t.core,
                        o = n.lightboxUpdater,
                        s = n.lightboxCloser,
                        i = n.lightboxOpener,
                        r = n.slideIndexChanger,
                        a = t.stageIndexes;
                    o.handleTogglerUpdate = function () {
                        e.get() ? s.close() : i.open()
                    }, o.runCurrentStageIndexUpdateActionsFor = function (t) {
                        t !== a.current && (e.get() ? r.jumpTo(t) : a.current = t)
                    }
                }(t),
                function (t) {
                    var e = t.data,
                        n = t.core.scrollbarRecompensor;
                    n.addRecompense = function () {
                        "complete" === document.readyState ? o() : window.addEventListener("load", (function () {
                            o(), n.addRecompense = o
                        }))
                    };
                    var o = function () {
                        document.body.offsetHeight > window.innerHeight && (document.body.style.marginRight = e.scrollbarWidth + "px")
                    };
                    n.removeRecompense = function () {
                        document.body.style.removeProperty("margin-right")
                    }
                }(t), lt(t),
                function (t) {
                    var e = t.core,
                        n = e.slideChangeFacade,
                        o = e.slideIndexChanger,
                        s = e.stageManager;
                    t.data.sources.length > 1 ? (n.changeToPrevious = function () {
                        o.jumpTo(s.getPreviousSlideIndex())
                    }, n.changeToNext = function () {
                        o.jumpTo(s.getNextSlideIndex())
                    }) : (n.changeToPrevious = function () {}, n.changeToNext = function () {})
                }(t), F(t),
                function (t) {
                    var e = t.core.sourceDisplayFacade,
                        n = t.componentsServices.updateSourceInnerCollection,
                        o = t.stageIndexes;
                    e.displayStageSourcesIfNotYet = function () {
                        for (var t in o) void 0 !== o[t] && n[o[t]]()
                    }
                }(t),
                function (t) {
                    var e = t.core,
                        n = e.classFacade,
                        o = e.sourcesPointerDown,
                        s = e.pointeringBucket,
                        i = t.elements.sources,
                        r = t.resolve,
                        a = t.sourcesPointerProps,
                        c = t.stageIndexes,
                        l = r(ft);
                    o.listener = function (t) {
                        "VIDEO" === t.target.tagName || t.touches || t.preventDefault(), s.runSwipingDownActionsForPropsAndEvent(a, t), a.isMoveCallFirst = !0, a.downClientY = E(t), 2 === Y(t) ? l.runPinchActions(t) : n.removeFromEachElementClassIfContains("sourcesOuters", u);
                        var e = i[c.current];
                        e && e.contains(t.target) ? a.isSourceDownEventTarget = !0 : a.isSourceDownEventTarget = !1
                    }
                }(t),
                function (t) {
                    var e = t.stageIndexes,
                        n = t.core.stageManager,
                        o = t.data.sources.length - 1;
                    n.getPreviousSlideIndex = function () {
                        return 0 === e.current ? o : e.current - 1
                    }, n.getNextSlideIndex = function () {
                        return e.current === o ? 0 : e.current + 1
                    }, n.updateStageIndexes = 0 === o ? function () {} : 1 === o ? function () {
                        0 === e.current ? (e.next = 1, delete e.previous) : (e.previous = 0, delete e.next)
                    } : function () {
                        e.previous = n.getPreviousSlideIndex(), e.next = n.getNextSlideIndex()
                    }, n.isSourceInStage = o <= 2 ? function () {
                        return !0
                    } : function (t) {
                        var n = e.current;
                        if (0 === n && t === o || n === o && 0 === t) return !0;
                        var s = n - t;
                        return -1 === s || 0 === s || 1 === s
                    }
                }(t),
                function (t) {
                    var e = t.core.pointeringBucket,
                        n = t.elements;
                    e.runSwipingDownActionsForPropsAndEvent = function (t, e) {
                        t.isPointering = !0, t.downClientX = M(e), t.swipedX = 0
                    }, e.runSwipingMoveActionsForPropsAndEvent = function (t, e) {
                        dt(n.container, r), t.swipedX = M(e) - t.downClientX
                    }, e.runSwipingTopActionsForPropsAndEvent = function (t) {
                        O(n.container, r), t.isPointering = !1
                    }
                }(t),
                function (t) {
                    var e = t.collections.sourcesStylers,
                        n = t.core,
                        o = n.windowResizeActioner,
                        s = n.thumbsTransformer,
                        i = t.data,
                        r = t.elements,
                        a = t.props.disableThumbs,
                        c = t.resolve,
                        l = t.stageIndexes,
                        h = c(A),
                        d = i.captionedSourcesOutersScales,
                        f = i.sources,
                        p = i.sourcesOutersNoThumbsTranslatesY,
                        m = r.captions,
                        g = r.sourcesOuters,
                        b = r.thumbs;
                    o.runActions = function () {
                        innerWidth < 992 ? i.maxSourceWidth = innerWidth : i.maxSourceWidth = .9 * innerWidth, i.maxSourceHeight = .9 * innerHeight, a || (i.thumbedSourcesScale = 1 - r.thumbsContainer.offsetHeight / innerHeight, i.sourcesOutersThumbsTranslateY = -r.thumbsContainer.offsetHeight / 2), i.isFullscreenOpen && h.handleFullscreenChange(), 0 === i.unloadedThumbsCount && o.runThumbsActions();
                        for (var t = 0; t < f.length; t++) {
                            if (m[t]) {
                                var n = m[t].offsetHeight - 25;
                                d[t] = 1 - n / innerHeight, p[t] = -n / 2
                            } else d[t] = 1, p[t] = 0;
                            O(g[t], u), t === l.current ? h.scaleSourceOuterAtIndex(t) : h.negativeAndScaleSourceOuterAtIndex(t), e[t] && e[t].styleAll()
                        }
                    }, o.runThumbsActions = function () {
                        i.thumbsInnerWidth = 0;
                        for (var t = 0; t < f.length; t++) i.thumbsInnerWidth += b[t].offsetWidth + 8;
                        s.transformToCurrent()
                    }
                }(t),
                function (t) {
                    var e = t.core.zoomer,
                        n = t.data,
                        o = t.elements,
                        s = o.sources,
                        i = o.sourcesInners,
                        r = t.resolve,
                        a = t.sourcesPointerProps,
                        c = t.stageIndexes,
                        u = r(ht);
                    e.zoomTo = function (t) {
                        n.zoom = t, i[c.current].style.transform = "scale(".concat(t, ")")
                    }, e.ifZoomingResetZoom = function () {
                        1 !== n.zoom && (e.zoomTo(1), e.stopZooming())
                    }, e.startZooming = function () {
                        l("grab"), u.runOpacity0ActionUsingMethod("add"), u.runActiveEnhancementActionUsingMethod("remove"), u.translateYSourceOuterTo(0), u.translateYSourceIfSupposed(0)
                    }, e.stopZooming = function () {
                        l("zoom-in"), u.runOpacity0ActionUsingMethod("remove"), u.runActiveEnhancementActionUsingMethod("add");
                        var t = n.sourcesOutersThumbsTranslateY;
                        n.isThumbing || (t = n.sourcesOutersNoThumbsTranslatesY[c.current]), u.translateYSourceOuterTo(t), u.translateYSourceIfSupposed(n.sourcesTranslatesY[c.current]), a.upSwipedX = 0, a.upSwipedY = 0
                    };
                    var l = function (t) {
                        s[c.current] && (s[c.current].style.cursor = t)
                    }
                }(t)
        }

        function mt(t, e) {
            var n = this,
                o = t.elements.sourcesOuters,
                s = t.props,
                i = 0,
                r = 0,
                a = 0,
                c = 0;
            this.translate = function (t, e) {
                return r = t, void 0 !== e && (a = e), n
            }, this.getTranslateX = function () {
                return i
            }, this.getTranslateY = function () {
                return a
            }, this.negative = function () {
                u(-(1 + s.slideDistance) * innerWidth)
            }, this.zero = function () {
                u(0)
            }, this.positive = function () {
                u((1 + s.slideDistance) * innerWidth)
            }, this.scale = function (t) {
                c = t, l()
            }, this.negativeAndScale = function (t) {
                c = t, n.negative()
            };
            var u = function (t) {
                    i = t + r, l(), r = 0
                },
                l = function () {
                    h(c ? "translate(".concat(i, "px, ").concat(0, "px) scale(").concat(c, ")") : "translate(".concat(i, "px, ").concat(a, "px)"))
                    // 0 should be here
                },
                h = function (t) {
                    o[e].style.transform = t
                }
        }

        function gt(t) {
            for (var e = t.data.sources, n = t.resolve, o = [], s = 0; s < e.length; s++) {
                var i = n(mt, [s]);
                o.push(i)
            }
            return o
        }

        function bt(t) {
            var e = t.collections,
                n = e.sourcesOutersTransformers,
                o = e.sourcesStylers,
                s = t.componentsServices,
                i = t.core.zoomer,
                r = t.data,
                a = t.elements,
                c = t.stageIndexes,
                l = r.captionedSourcesOutersScales,
                h = r.sources.length;
            this.openThumbs = function () {
                i.ifZoomingResetZoom(), a.thumbsContainer.classList.add(T), d("remove"), r.isThumbing = !0;
                for (var t = 0; t < h; t++) f(t), n[t].translate(0, r.sourcesOutersThumbsTranslateY).scale(r.thumbedSourcesScale);
                r.unloadedThumbsCount && s.updateThumbsInner()
            }, this.closeThumbs = function () {
                i.ifZoomingResetZoom(), a.thumbsContainer.classList.remove(T), d("add"), r.isThumbing = !1;
                for (var t = 0; t < h; t++) f(t), l[t] && n[t].translate(0, r.sourcesOutersNoThumbsTranslatesY[t]).scale(l[t])
            };
            var d = function (t) {
                    a.captions[c.current] && a.captions[c.current].classList[t](g)
                },
                f = function (t) {
                    o[t] && o[t].styleScale(), dt(a.sourcesOuters[t], u)
                }
        }

        function xt(t) {
            var e = t.data,
                n = t.elements,
                o = t.stageIndexes;
            this.runActions = function () {
                O(n.thumbsContainer, a);
                var t = innerWidth / 2,
                    i = n.thumbsWrappers[o.current],
                    r = i.offsetLeft + i.offsetWidth / 2,
                    c = e.thumbsInnerWidth - r;
                r > t && c > t ? s(t - r) : r > t ? s(innerWidth - e.thumbsInnerWidth - 9) : c > t && s(0)
            }, this.runToThinThumbsActions = function () {
                dt(n.thumbsContainer, a), s(0)
            };
            var s = function (t) {
                e.thumbsTransform = t, n.thumbsInner.style.transform = "translateX(".concat(t, "px)")
            }
        }

        function vt(t) {
            var e, n, o, s, i, r = t.core,
                a = t.collections,
                c = t.componentsServices,
                l = t.data,
                h = t.elements,
                d = t.props;
            c.showThumbsCursorerIfNotYet = null, c.hideThumbsLoader = null, c.hideThumbsCursorer = null, l.thumbsInnerWidth = null, l.unloadedThumbsCount = l.sources.length, l.thumbsTransform = 0, l.isThumbing = d.showThumbsOnMount, l.thumbedSourcesScale = null, t.thumbsSwipingProps = {
                    isPointering: !1,
                    downClientX: null,
                    swipedX: null
                }, a.thumbsRenderFunctions = [], r.thumbLoadHandler = {}, r.thumbsOpeningActions = {}, r.thumbsTransformer = {}, r.thumbsTransformTransitioner = {}, r.thumbsToggler = {}, r.thumbsSwipingDown = {}, h.thumbsContainer = null, h.thumbs = [], h.thumbsWrappers = [], h.thumbsPropedComponents = [], h.thumbsInner = null,
                function (t) {
                    var e = t.core,
                        n = e.thumbLoadHandler,
                        o = e.windowResizeActioner,
                        s = t.componentsServices,
                        i = t.data,
                        r = t.elements.thumbsWrappers;
                    n.handleLoad = function () {
                        if (i.unloadedThumbsCount--, 0 === i.unloadedThumbsCount) {
                            for (var t = 0; t < r.length; t++) r[t].classList.add(v);
                            o.runThumbsActions(), s.hideThumbsLoader()
                        }
                    }
                }(t),
                function (t) {
                    var e = t.core.thumbsToggler,
                        n = t.data,
                        o = (0, t.resolve)(bt);
                    e.toggleThumbs = function () {
                        n.isThumbing ? o.closeThumbs() : o.openThumbs()
                    }
                }(t),
                function (t) {
                    var e = t.core,
                        n = e.thumbsTransformer,
                        o = e.thumbsTransformTransitioner,
                        s = t.data,
                        i = (0, t.resolve)(xt);
                    n.transformToCurrent = function () {
                        s.thumbsInnerWidth > innerWidth ? i.runActions() : i.runToThinThumbsActions()
                    }, n.transformToCurrentWithTransition = function () {
                        s.thumbsInnerWidth > innerWidth && o.callActionWithTransition(i.runActions)
                    }
                }(t),
                function (t) {
                    var e = t.core.thumbsTransformTransitioner,
                        n = t.elements,
                        o = B((function () {
                            n.thumbsInner.classList.remove(u)
                        }), 250);
                    e.callActionWithTransition = function (t) {
                        n.thumbsInner.classList.add(u), t(), o()
                    }
                }(t), n = (e = t).core, o = n.thumbsSwipingDown, s = n.pointeringBucket, i = e.thumbsSwipingProps, o.listener = function (t) {
                    s.runSwipingDownActionsForPropsAndEvent(i, t), t.touches || t.preventDefault()
                }
        }
        var St = {
                thumbs: {
                    width: "17px",
                    height: "17px",
                    viewBox: "0 0 22 22",
                    d: "M 3 2 C 2.448 2 2 2.448 2 3 L 2 6 C 2 6.552 2.448 7 3 7 L 6 7 C 6.552 7 7 6.552 7 6 L 7 3 C 7 2.448 6.552 2 6 2 L 3 2 z M 10 2 C 9.448 2 9 2.448 9 3 L 9 6 C 9 6.552 9.448 7 10 7 L 13 7 C 13.552 7 14 6.552 14 6 L 14 3 C 14 2.448 13.552 2 13 2 L 10 2 z M 17 2 C 16.448 2 16 2.448 16 3 L 16 6 C 16 6.552 16.448 7 17 7 L 20 7 C 20.552 7 21 6.552 21 6 L 21 3 C 21 2.448 20.552 2 20 2 L 17 2 z M 3 9 C 2.448 9 2 9.448 2 10 L 2 13 C 2 13.552 2.448 14 3 14 L 6 14 C 6.552 14 7 13.552 7 13 L 7 10 C 7 9.448 6.552 9 6 9 L 3 9 z M 10 9 C 9.448 9 9 9.448 9 10 L 9 13 C 9 13.552 9.448 14 10 14 L 13 14 C 13.552 14 14 13.552 14 13 L 14 10 C 14 9.448 13.552 9 13 9 L 10 9 z M 17 9 C 16.448 9 16 9.448 16 10 L 16 13 C 16 13.552 16.448 14 17 14 L 20 14 C 20.552 14 21 13.552 21 13 L 21 10 C 21 9.448 20.552 9 20 9 L 17 9 z M 3 16 C 2.448 16 2 16.448 2 17 L 2 20 C 2 20.552 2.448 21 3 21 L 6 21 C 6.552 21 7 20.552 7 20 L 7 17 C 7 16.448 6.552 16 6 16 L 3 16 z M 10 16 C 9.448 16 9 16.448 9 17 L 9 20 C 9 20.552 9.448 21 10 21 L 13 21 C 13.552 21 14 20.552 14 20 L 14 17 C 14 16.448 13.552 16 13 16 L 10 16 z M 17 16 C 16.448 16 16 16.448 16 17 L 16 20 C 16 20.552 16.448 21 17 21 L 20 21 C 20.552 21 21 20.552 21 20 L 21 17 C 21 16.448 20.552 16 20 16 L 17 16 z",
                    title: "Thumbnails"
                },
                zoomIn: {
                    width: "20px",
                    height: "20px",
                    viewBox: "0 0 30 30",
                    d: "M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z M 12.984375 7.9863281 A 1.0001 1.0001 0 0 0 12 9 L 12 12 L 9 12 A 1.0001 1.0001 0 1 0 9 14 L 12 14 L 12 17 A 1.0001 1.0001 0 1 0 14 17 L 14 14 L 17 14 A 1.0001 1.0001 0 1 0 17 12 L 14 12 L 14 9 A 1.0001 1.0001 0 0 0 12.984375 7.9863281 z",
                    title: "Zoom In"
                },
                zoomOut: {
                    width: "20px",
                    height: "20px",
                    viewBox: "0 0 30 30",
                    d: "M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z M 9 12 A 1.0001 1.0001 0 1 0 9 14 L 17 14 A 1.0001 1.0001 0 1 0 17 12 L 9 12 z",
                    title: "Zoom Out"
                },
                slideshow: {
                    start: {
                        width: "16px",
                        height: "16px",
                        viewBox: "0 0 30 30",
                        d: "M 6 3 A 1 1 0 0 0 5 4 A 1 1 0 0 0 5 4.0039062 L 5 15 L 5 25.996094 A 1 1 0 0 0 5 26 A 1 1 0 0 0 6 27 A 1 1 0 0 0 6.5800781 26.8125 L 6.5820312 26.814453 L 26.416016 15.908203 A 1 1 0 0 0 27 15 A 1 1 0 0 0 26.388672 14.078125 L 6.5820312 3.1855469 L 6.5800781 3.1855469 A 1 1 0 0 0 6 3 z",
                        title: "Turn on slideshow"
                    },
                    pause: {
                        width: "14px",
                        height: "14px",
                        viewBox: "0 0 356.19 356.19",
                        d: "M121,0c18,0,33,15,33,33v372c0,18-15,33-33,33s-32-15-32-33V33C89,15,103,0,121,0zM317,0c18,0,32,15,32,33v372c0,18-14,33-32,33s-33-15-33-33V33C284,15,299,0,317,0z",
                        title: "Turn off slideshow"
                    }
                },
                fullscreen: {
                    enter: {
                        width: "20px",
                        height: "20px",
                        viewBox: "0 0 18 18",
                        d: "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
                        title: "Enter fullscreen"
                    },
                    exit: {
                        width: "24px",
                        height: "24px",
                        viewBox: "0 0 950 1024",
                        d: "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z",
                        title: "Exit fullscreen"
                    }
                },
                close: {
                    width: "20px",
                    height: "20px",
                    viewBox: "0 0 24 24",
                    d: "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z",
                    title: "Close"
                }
            },
            wt = {
                previous: {
                    width: "20px",
                    height: "20px",
                    viewBox: "0 0 20 20",
                    d: "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z",
                    title: "Previous"
                },
                next: {
                    width: "20px",
                    height: "20px",
                    viewBox: "0 0 20 20",
                    d: "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z",
                    title: "Next"
                }
            };

        function Lt(t) {
            return (Lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Tt(t, e) {
            if ("object" === Lt(e))
                for (var n in t) "object" === Lt(e[n]) ? Tt(t[n], e[n]) : e[n] && (t[n] = e[n])
        }

        function It(t) {
            var e = t.props,
                n = e.sources,
                o = e.customSources,
                s = n ? n.slice() : o.slice();
            if (o && n !== o)
                for (var i = 0; i < o.length; i++) o[i] && (s[i] = o[i]);
            return s
        }

        function Ct(t, e, n) {
            return (Ct = yt() ? Reflect.construct : function (t, e, n) {
                var o = [null];
                o.push.apply(o, e);
                var s = new(Function.bind.apply(t, o));
                return n && _t(s, n.prototype), s
            }).apply(null, arguments)
        }

        function yt() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
            } catch (t) {
                return !1
            }
        }

        function _t(t, e) {
            return (_t = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function At(t) {
            return function (t) {
                if (Array.isArray(t)) return Ot(t)
            }(t) || function (t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            }(t) || function (t, e) {
                if (!t) return;
                if ("string" == typeof t) return Ot(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ot(t, e)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function Ot(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
            return o
        }

        function zt(t) {
            var e, n, o, s, i, r, a, c = this;
            this.props = t, this.data = {
                sources: It(this),
                isInitialized: !1,
                maxSourceWidth: 0,
                maxSourceHeight: 0,
                scrollbarWidth: 0,
                toolbarButtons: St,
                slideButtons: wt,
                captionedSourcesOutersScales: [],
                sourcesTranslatesY: [],
                sourcesOutersThumbsTranslateY: null,
                sourcesOutersNoThumbsTranslatesY: [],
                zoom: 1
            }, this.sourcesPointerProps = {
                isPointering: !1,
                downClientX: null,
                downClientY: null,
                isSourceDownEventTarget: !1,
                isMoveCallFirst: !1,
                swipedX: 0,
                swipedY: 0,
                upSwipedX: 0,
                upSwipedY: 0,
                pinchedHypot: 0
            }, this.stageIndexes = {
                previous: void 0,
                current: (e = this, n = e.data.sources, o = e.props, s = o.slide, i = o.sourceIndex, r = o.source, a = 0, r ? a = n.indexOf(r) : i ? a = i : s && (a = s - 1), a),
                next: void 0
            }, this.componentsServices = {
                isLightboxOpenManager: {},
                setSlideNumber: null,
                isFullscreenOpenManager: {},
                hideLoaderCollection: [],
                updateSourceInnerCollection: [],
                showSlideSwipingHovererIfNotYet: null,
                hideSlideSwipingHoverer: null,
                startSlideshow: null,
                stopSlideshow: null
            }, this.elements = {
                captions: [],
                container: null,
                nav: null,
                sourcesOutersWrapper: null,
                slideshowBar: null,
                sources: [],
                sourcesOuters: [],
                sourcesInners: [],
                sourcesComponents: []
            }, this.resolve = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return e.unshift(c), Ct(t, At(e))
            }, this.collections = {
                sourcesOutersTransformers: gt(this),
                sourcesTransformers: [],
                sourcesLoadsHandlers: [],
                sourcesStylers: [],
                xhrs: []
            }, this.core = {
                captionsActioner: {},
                classFacade: {},
                clickZoomer: {},
                eventsDispatcher: {},
                fullscreenToggler: {},
                globalEventsController: {},
                inactiver: {},
                lightboxCloser: {},
                lightboxOpener: {},
                lightboxOpenActioner: {},
                lightboxUpdater: {},
                scrollbarRecompensor: {},
                slideshowManager: {},
                slideChangeFacade: {},
                slideIndexChanger: {},
                sourceDisplayFacade: {},
                sourcesPointerDown: {},
                stageManager: {},
                pointeringBucket: {},
                windowResizeActioner: {},
                zoomer: {}
            }, Tt(this.data.slideButtons, t.slideButtons), Tt(this.data.toolbarButtons, t.toolbarButtons), vt(this), pt(this)
        }
        var Bt = function () {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                ref: "nav",
                staticClass: "fslightbox-nav"
            }, [e("Toolbar", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex
                }
            }), this._v(" "), this.hasMoreThanSource ? e("SlideNumber", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex
                }
            }) : this._e()], 1)
        };
        Bt._withStripped = !0;
        var Ft = function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "fslightbox-toolbar"
            }, [t._l(t.customToolbarButtons, (function (e, o) {
                return t.customToolbarButtons ? n("OneStateButton", {
                    key: o,
                    attrs: {
                        "button-data": e,
                        "on-click": e.onClick
                    }
                }) : t._e()
            })), t._v(" "), t.disableThumbs ? t._e() : n("OneStateButton", {
                attrs: {
                    "button-data": t.toolbarButtonsData.thumbs,
                    "on-click": t.toggleThumbs
                }
            }), t._v(" "), n("OneStateButton", {
                attrs: {
                    "button-data": t.toolbarButtonsData.zoomIn,
                    "on-click": t.zoomIn
                }
            }), t._v(" "), n("OneStateButton", {
                attrs: {
                    "button-data": t.toolbarButtonsData.zoomOut,
                    "on-click": t.zoomOut
                }
            }), t._v(" "), n("SlideshowButton", {
                attrs: {
                    "fs-lightbox-index": t.fsLightboxIndex
                }
            }), t._v(" "), n("FullscreenButton", {
                attrs: {
                    "fs-lightbox-index": t.fsLightboxIndex
                }
            }), t._v(" "), n("OneStateButton", {
                attrs: {
                    "button-data": t.toolbarButtonsData.close,
                    "on-click": t.close
                }
            })], 2)
        };
        Ft._withStripped = !0;
        var Nt = function () {
            var t = this.$createElement;
            return (this._self._c || t)("ToolbarButton", {
                attrs: {
                    "on-click": this.onClick,
                    "view-box": "0 0 24 24",
                    size: "20px",
                    d: "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z",
                    title: "Close"
                }
            })
        };
        Nt._withStripped = !0;
        var Et = function () {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                staticClass: "fslightbox-toolbar-button fslightbox-flex-centered",
                attrs: {
                    title: this.title
                },
                on: {
                    click: this.onClick
                }
            }, [e("Svger", {
                attrs: {
                    "view-box": this.viewBox,
                    width: this.width,
                    height: this.height,
                    d: this.d
                }
            })], 1)
        };
        Et._withStripped = !0;
        var Pt = function () {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("svg", {
                attrs: {
                    width: this.width,
                    height: this.height,
                    viewBox: this.viewBox,
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [e("path", {
                staticClass: "fslightbox-svg-path",
                attrs: {
                    d: this.d
                }
            })])
        };

        function kt(t, e, n, o, s, i, r, a) {
            var c, u = "function" == typeof t ? t.options : t;
            if (e && (u.render = e, u.staticRenderFns = n, u._compiled = !0), o && (u.functional = !0), i && (u._scopeId = "data-v-" + i), r ? (c = function (t) {
                    (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), s && s.call(this, t), t && t._registeredComponents && t._registeredComponents.add(r)
                }, u._ssrRegister = c) : s && (c = a ? function () {
                    s.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot)
                } : s), c)
                if (u.functional) {
                    u._injectStyles = c;
                    var l = u.render;
                    u.render = function (t, e) {
                        return c.call(e), l(t, e)
                    }
                } else {
                    var h = u.beforeCreate;
                    u.beforeCreate = h ? [].concat(h, c) : [c]
                } return {
                exports: t,
                options: u
            }
        }
        Pt._withStripped = !0;
        var Mt = kt({
            props: {
                width: String,
                height: String,
                viewBox: String,
                d: String
            }
        }, Pt, [], !1, null, null, null);
        Mt.options.__file = "src/components/helpers/Svger.vue";
        var Dt = Mt.exports,
            Ht = kt({
                components: {
                    Svger: Dt
                },
                props: {
                    onClick: Function,
                    width: String,
                    height: String,
                    viewBox: String,
                    d: String,
                    title: String
                }
            }, Et, [], !1, null, null, null);
        Ht.options.__file = "src/components/nav/toolbar/ToolbarButton.vue";
        var Yt = Ht.exports,
            Wt = kt({
                components: {
                    ToolbarButton: Yt
                },
                props: {
                    fsLightboxIndex: Number
                },
                data: function () {
                    return {
                        onClick: _[this.fsLightboxIndex].core.lightboxCloser.close
                    }
                }
            }, Nt, [], !1, null, null, null);
        Wt.options.__file = "src/components/nav/toolbar/toolbar-buttons/CloseButton.vue";
        var $t = Wt.exports,
            Rt = function () {
                var t = this.$createElement;
                return (this._self._c || t)("ToolbarButton", {
                    attrs: {
                        "on-click": this.getButtonData("onClick"),
                        "view-box": this.getButtonData("viewBox"),
                        width: this.getButtonData("width"),
                        height: this.getButtonData("height"),
                        d: this.getButtonData("d"),
                        title: this.getButtonData("title")
                    }
                })
            };

        function Xt(t, e) {
            return {
                onClick: e,
                viewBox: t.viewBox,
                width: t.width,
                height: t.height,
                d: t.d,
                title: t.title
            }
        }
        Rt._withStripped = !0;
        var Ut = kt({
            components: {
                ToolbarButton: Yt
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
                getButtonData: function (t) {
                    var e = _[this.fsLightboxIndex],
                        n = e.core.fullscreenToggler,
                        o = n.exitFullscreen,
                        s = n.enterFullscreen,
                        i = e.data.toolbarButtons.fullscreen,
                        r = i.enter,
                        a = i.exit;
                    return (this.isFullscreenOpen ? Xt(a, o) : Xt(r, s))[t]
                }
            },
            created: function () {
                var t = this,
                    e = _[this.fsLightboxIndex].componentsServices.isFullscreenOpenManager;
                e.get = function () {
                    return t.isFullscreenOpen
                }, e.set = function (e) {
                    return t.isFullscreenOpen = e
                }
            }
        }, Rt, [], !1, null, null, null);
        Ut.options.__file = "src/components/nav/toolbar/toolbar-buttons/FullscreenButton.vue";
        var jt = Ut.exports,
            Zt = function () {
                var t = this.$createElement;
                return (this._self._c || t)("ToolbarButton", {
                    attrs: {
                        "on-click": this.onClick,
                        "view-box": this.buttonData.viewBox,
                        width: this.buttonData.width,
                        height: this.buttonData.height,
                        d: this.buttonData.d,
                        title: this.buttonData.title
                    }
                })
            };
        Zt._withStripped = !0;
        var Vt = kt({
            props: {
                buttonData: Object,
                onClick: Function
            },
            components: {
                ToolbarButton: Yt
            }
        }, Zt, [], !1, null, null, null);
        Vt.options.__file = "src/components/nav/toolbar/toolbar-buttons/OneStateButton.vue";
        var qt = Vt.exports,
            Jt = function () {
                var t = this.$createElement;
                return (this._self._c || t)("ToolbarButton", {
                    attrs: {
                        "on-click": this.getButtonData("onClick"),
                        "view-box": this.getButtonData("viewBox"),
                        width: this.getButtonData("width"),
                        height: this.getButtonData("height"),
                        d: this.getButtonData("d"),
                        title: this.getButtonData("title")
                    }
                })
            };
        Jt._withStripped = !0;
        var Gt = kt({
            components: {
                ToolbarButton: Yt
            },
            props: {
                fsLightboxIndex: Number
            },
            data: function () {
                return {
                    isSlideshowOn: !1
                }
            },
            methods: {
                getButtonData: function (t) {
                    var e = _[this.fsLightboxIndex],
                        n = e.core.slideshowManager.toggleSlideshow,
                        o = e.data.toolbarButtons.slideshow,
                        s = o.start,
                        i = o.pause;
                    return (this.isSlideshowOn ? Xt(i, n) : Xt(s, n))[t]
                }
            },
            created: function () {
                var t = this,
                    e = _[this.fsLightboxIndex].componentsServices;
                e.startSlideshow = function () {
                    return t.isSlideshowOn = !0
                }, e.stopSlideshow = function () {
                    return t.isSlideshowOn = !1
                }
            }
        }, Jt, [], !1, null, null, null);
        Gt.options.__file = "src/components/nav/toolbar/toolbar-buttons/SlideshowButton.vue";
        var Kt = kt({
            components: {
                SlideshowButton: Gt.exports,
                OneStateButton: qt,
                FullscreenButton: jt,
                CloseButton: $t
            },
            props: {
                fsLightboxIndex: Number
            },
            data: function () {
                var t = _[this.fsLightboxIndex],
                    e = t.core,
                    n = e.clickZoomer,
                    o = n.zoomIn,
                    s = n.zoomOut,
                    i = e.lightboxCloser.close,
                    r = t.data.toolbarButtons,
                    a = t.props,
                    c = a.disableThumbs,
                    u = {
                        toolbarButtonsData: r,
                        customToolbarButtons: a.customToolbarButtons,
                        close: i,
                        zoomIn: o,
                        zoomOut: s,
                        disableThumbs: c
                    };
                return c || (u.toggleThumbs = _[this.fsLightboxIndex].core.thumbsToggler.toggleThumbs), u
            }
        }, Ft, [], !1, null, null, null);
        Kt.options.__file = "src/components/nav/toolbar/Toolbar.vue";
        var Qt = Kt.exports,
            te = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "fslightbox-slide-number-container fslightbox-flex-centered"
                }, [n("div", {
                    staticClass: "fslightbox-flex-centered"
                }, [n("span", {
                    attrs: {
                        "data-test-id": "slide-number"
                    }
                }, [t._v(t._s(t.slide))]), t._v(" "), n("span", {
                    staticClass: "fslightbox-slash"
                }), t._v(" "), n("span", [t._v(t._s(t.sourcesLength))])])])
            };
        te._withStripped = !0;
        var ee = kt({
            props: {
                fsLightboxIndex: Number
            },
            data: function () {
                return {
                    slide: _[this.fsLightboxIndex].stageIndexes.current + 1,
                    sourcesLength: _[this.fsLightboxIndex].data.sources.length
                }
            },
            created: function () {
                var t = this;
                _[this.fsLightboxIndex].componentsServices.setSlideNumber = function (e) {
                    return t.slide = e
                }
            }
        }, te, [], !1, null, null, null);
        ee.options.__file = "src/components/nav/SlideNumber.vue";
        var ne = kt({
            components: {
                SlideNumber: ee.exports,
                Toolbar: Qt
            },
            props: {
                fsLightboxIndex: Number
            },
            data: function () {
                return {
                    hasMoreThanSource: _[this.fsLightboxIndex].data.sources.length > 1
                }
            },
            mounted: function () {
                _[this.fsLightboxIndex].elements.nav = this.$refs.nav
            }
        }, Bt, [], !1, null, null, null);
        ne.options.__file = "src/components/nav/Naver.vue";
        var oe = ne.exports,
            se = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", t._g({
                    ref: "ref",
                    staticClass: "fslightbox-sources-outers-wrapper fslightbox-absoluted fslightbox-full-dimension",
                    attrs: {
                        "data-test-id": "sources-outers-wrapper"
                    }
                }, t.vOnEvents), t._l(t.sourcesLength, (function (e, o) {
                    return n("SourceOuter", {
                        key: o,
                        attrs: {
                            i: o,
                            "fs-lightbox-index": t.fsLightboxIndex
                        }
                    })
                })), 1)
            };
        se._withStripped = !0;
        var ie = function () {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                ref: "ref",
                staticClass: "fslightbox-source-outer fslightbox-absoluted fslightbox-full-dimension fslightbox-flex-centered"
            }, [e("SourceInner", {
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex,
                    i: this.i
                }
            }), this._v(" "), this.isSourceLoaded ? this._e() : e("Loader")], 1)
        };
        ie._withStripped = !0;
        var re = function () {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                ref: "ref",
                staticClass: "fslightbox-source-inner"
            }, [this.sourceComponent && this.isSourceInStage ? e(this.sourceComponent, {
                tag: "component",
                attrs: {
                    "fs-lightbox-index": this.fsLightboxIndex,
                    i: this.i
                }
            }) : this._e()], 1)
        };
        re._withStripped = !0;
        var ae = function () {
            var t = this.$createElement;
            return (this._self._c || t)("img", {
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
        ae._withStripped = !0;
        var ce = kt({
            props: {
                fsLightboxIndex: Number,
                i: Number
            },
            data: function () {
                var t = _[this.fsLightboxIndex],
                    e = t.collections.sourcesLoadsHandlers,
                    n = t.data.sources;
                return {
                    onLoad: e[this.i].handleImageLoad,
                    src: n[this.i]
                }
            },
            mounted: function () {
                _[this.fsLightboxIndex].elements.sources[this.i] = this.$refs.ref
            }
        }, ae, [], !1, null, null, null);
        ce.options.__file = "src/components/sources/proper-sources/Imager.vue";
        var ue = ce.exports,
            le = function () {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("video", {
                    ref: "ref",
                    staticClass: "fslightbox-source fslightbox-video",
                    attrs: {
                        poster: this.poster,
                        controls: ""
                    },
                    on: {
                        loadedmetadata: this.onLoad
                    }
                }, [e("source", {
                    attrs: {
                        src: this.src
                    }
                })])
            };
        le._withStripped = !0;
        var he = kt({
            props: {
                fsLightboxIndex: Number,
                i: Number
            },
            data: function () {
                var t = _[this.fsLightboxIndex],
                    e = t.collections.sourcesLoadsHandlers,
                    n = t.data.sources,
                    o = t.props.videosPosters;
                return {
                    onLoad: e[this.i].handleVideoLoad,
                    src: n[this.i],
                    poster: o && o[this.i]
                }
            },
            mounted: function () {
                _[this.fsLightboxIndex].elements.sources[this.i] = this.$refs.ref
            }
        }, le, [], !1, null, null, null);
        he.options.__file = "src/components/sources/proper-sources/Videor.vue";
        var de = he.exports,
            fe = function () {
                var t = this.$createElement;
                return (this._self._c || t)("iframe", {
                    ref: "ref",
                    staticClass: "fslightbox-source fslightbox-youtube-iframe",
                    attrs: {
                        src: this.src,
                        allowfullscreen: ""
                    }
                })
            };
        fe._withStripped = !0;
        var pe = kt({
            props: {
                fsLightboxIndex: Number,
                i: Number
            },
            data: function () {
                return {
                    src: "https://www.youtube.com/embed/".concat((t = _[this.fsLightboxIndex].data.sources[this.i], t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2]))
                };
                var t
            },
            mounted: function () {
                var t = _[this.fsLightboxIndex],
                    e = t.collections.sourcesLoadsHandlers;
                t.elements.sources[this.i] = this.$refs.ref, e[this.i].handleYoutubeLoad()
            }
        }, fe, [], !1, null, null, null);
        pe.options.__file = "src/components/sources/proper-sources/Youtuber.vue";
        var me = pe.exports,
            ge = function () {
                var t = this.$createElement;
                return (this._self._c || t)(this.component, this._b({
                    ref: "ref",
                    tag: "component"
                }, "component", this.componentProps, !1))
            };

        function be(t) {
            var e = {
                component: t,
                componentProps: {}
            };
            return t.component && (e.component = t.component, e.componentProps = t.props), e
        }
        ge._withStripped = !0;
        var xe = kt({
            props: {
                fsLightboxIndex: Number,
                i: Number
            },
            data: function () {
                return be(_[this.fsLightboxIndex].data.sources[this.i])
            },
            mounted: function () {
                var t = _[this.fsLightboxIndex],
                    e = t.collections.sourcesLoadsHandlers,
                    n = t.elements.sources;
                n[this.i] = this.$refs.ref.$el, n[this.i].classList.add(S), e[this.i].handleCustomLoad()
            }
        }, ge, [], !1, null, null, null);
        xe.options.__file = "src/components/sources/proper-sources/Customer.vue";
        var ve = xe.exports,
            Se = function () {
                var t = this.$createElement;
                return (this._self._c || t)("div", {
                    staticClass: "fslightbox-invalid-file-wrapper fslightbox-flex-centered"
                }, [this._v("\n    Invalid source\n")])
            };
        Se._withStripped = !0;
        var we = kt({
            props: {
                fsLightboxIndex: Number,
                i: Number
            },
            mounted: function () {
                var t = _[this.fsLightboxIndex],
                    e = t.componentsServices.hideLoaderCollection,
                    n = t.elements.sourcesOuters;
                e[this.i](), n[this.i].classList.add(f)
            }
        }, Se, [], !1, null, null, null);
        we.options.__file = "src/components/sources/proper-sources/Invalider.vue";
        var Le = we.exports,
            Te = kt({
                props: {
                    fsLightboxIndex: Number,
                    i: Number
                },
                components: {
                    Imager: ue,
                    Videor: de,
                    Youtuber: me,
                    Customer: ve,
                    Invalider: Le
                },
                data: function () {
                    var t = {};
                    return this.attachComponentDataToObject(t), t
                },
                created: function () {
                    var t = this;
                    _[this.fsLightboxIndex].componentsServices.updateSourceInnerCollection[this.i] = function () {
                        t.attachComponentDataToObject(t)
                    }
                },
                mounted: function () {
                    _[this.fsLightboxIndex].elements.sourcesInners[this.i] = this.$refs.ref
                },
                methods: {
                    attachComponentDataToObject: function (t) {
                        t.sourceComponent = _[this.fsLightboxIndex].elements.sourcesComponents[this.i], t.isSourceInStage = _[this.fsLightboxIndex].core.stageManager.isSourceInStage(this.i)
                    }
                }
            }, re, [], !1, null, null, null);
        Te.options.__file = "src/components/sources/SourceInner.vue";
        var Ie = Te.exports,
            Ce = function () {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    class: this.className,
                    attrs: {
                        "data-test-id": this.testId
                    }
                }, [e("div"), this._v(" "), e("div"), this._v(" "), e("div"), this._v(" "), e("div")])
            };
        Ce._withStripped = !0;
        var ye = kt({
            props: {
                additionalClassName: String,
                testId: String
            },
            data: function () {
                var t = "fslightbox-loader";
                return this.additionalClassName && (t += " ".concat(this.additionalClassName)), {
                    className: t
                }
            }
        }, Ce, [], !1, null, null, null);
        ye.options.__file = "src/components/helpers/Loader.vue";
        var _e = ye.exports,
            Ae = kt({
                props: {
                    fsLightboxIndex: Number,
                    i: Number
                },
                components: {
                    SourceInner: Ie,
                    Loader: _e
                },
                data: function () {
                    return {
                        isSourceLoaded: !1
                    }
                },
                created: function () {
                    var t = this;
                    _[this.fsLightboxIndex].componentsServices.hideLoaderCollection[this.i] = function () {
                        return t.isSourceLoaded = !0
                    }
                },
                mounted: function () {
                    _[this.fsLightboxIndex].elements.sourcesOuters[this.i] = this.$refs.ref
                }
            }, ie, [], !1, null, null, null);
        Ae.options.__file = "src/components/sources/SourceOuter.vue";
        var Oe = Ae.exports;

        function ze() {
            this.getMouseDownListenerFunc = function (t) {
                return J() ? void 0 : G(t, K)
            }, this.getTouchStartListenerForFunc = function (t) {
                return J() ? G(t, K) : void 0
            }
        }

        function Be(t) {
            var e = new ze,
                n = {},
                o = e.getMouseDownListenerFunc(t),
                s = e.getTouchStartListenerForFunc(t);
            return o && (n.mousedown = o), s && (n.touchstart = s), n
        }
        var Fe = kt({
            props: {
                fsLightboxIndex: Number
            },
            components: {
                SourceOuter: Oe
            },
            data: function () {
                var t = _[this.fsLightboxIndex],
                    e = t.core.sourcesPointerDown.listener;
                return {
                    sourcesLength: t.data.sources.length,
                    vOnEvents: Be(e)
                }
            },
            mounted: function () {
                _[this.fsLightboxIndex].elements.sourcesOutersWrapper = this.$refs.ref
            }
        }, se, [], !1, null, null, null);
        Fe.options.__file = "src/components/sources/SourcesOutersWrapper.vue";
        var Ne = Fe.exports,
            Ee = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.sourcesLength > 1 ? n("div", [n("SlideButton", {
                    attrs: {
                        "fs-lightbox-index": t.fsLightboxIndex,
                        "on-click": t.changeToPrevious,
                        "button-data": t.previousButtonData,
                        name: "previous"
                    }
                }), t._v(" "), n("SlideButton", {
                    attrs: {
                        "fs-lightbox-index": t.fsLightboxIndex,
                        "on-click": t.changeToNext,
                        "button-data": t.nextButtonData,
                        name: "next"
                    }
                })], 1) : t._e()
            };
        Ee._withStripped = !0;
        var Pe = function () {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                ref: "ref",
                class: "fslightbox-slide-btn-container fslightbox-slide-btn-container-" + this.name,
                attrs: {
                    title: this.buttonData.title
                },
                on: {
                    click: this.onClick
                }
            }, [e("div", {
                staticClass: "fslightbox-slide-btn fslightbox-flex-centered"
            }, [e("Svger", {
                attrs: {
                    "view-box": this.buttonData.viewBox,
                    width: this.buttonData.width,
                    height: this.buttonData.height,
                    d: this.buttonData.d
                }
            })], 1)])
        };
        Pe._withStripped = !0;
        var ke = kt({
            components: {
                Svger: Dt
            },
            props: {
                fsLightboxIndex: Number,
                onClick: Function,
                buttonData: Object,
                name: String
            },
            mounted: function () {
                _[this.fsLightboxIndex].elements["slideButton".concat(this.name.toUpperCase().substr(0, 1) + this.name.substr(1))] = this.$refs.ref
            }
        }, Pe, [], !1, null, null, null);
        ke.options.__file = "src/components/SlideButton.vue";
        var Me = ke.exports,
            De = kt({
                props: {
                    fsLightboxIndex: Number
                },
                components: {
                    SlideButton: Me
                },
                data: function () {
                    var t = _[this.fsLightboxIndex],
                        e = t.core.slideChangeFacade,
                        n = e.changeToPrevious,
                        o = e.changeToNext,
                        s = t.data,
                        i = s.slideButtons,
                        r = i.previous,
                        a = i.next;
                    return {
                        sourcesLength: s.sources.length,
                        changeToPrevious: n,
                        changeToNext: o,
                        previousButtonData: r,
                        nextButtonData: a
                    }
                }
            }, Ee, [], !1, null, null, null);
        De.options.__file = "src/components/SlideButtons.vue";
        var He = De.exports,
            Ye = function () {
                var t = this.$createElement,
                    e = this._self._c || t;
                return this.isSlideSwipingHovererShown ? e("div", {
                    staticClass: "fslightbox-slide-swiping-hoverer fslightbox-full-dimension fslightbox-absoluted"
                }) : this._e()
            };
        Ye._withStripped = !0;
        var We = kt({
            props: {
                fsLightboxIndex: Number
            },
            data: function () {
                return {
                    isSlideSwipingHovererShown: !1
                }
            },
            created: function () {
                var t = this,
                    e = _[this.fsLightboxIndex].componentsServices;
                e.showSlideSwipingHovererIfNotYet = function () {
                    t.isSlideSwipingHovererShown || (t.isSlideSwipingHovererShown = !0)
                }, e.hideSlideSwipingHoverer = function () {
                    t.isSlideSwipingHovererShown = !1
                }
            }
        }, Ye, [], !1, null, null, null);
        We.options.__file = "src/components/SlideSwipingHoverer.vue";
        var $e = We.exports,
            Re = function () {
                var t = this.$createElement;
                return (this._self._c || t)("div", {
                    ref: "ref",
                    staticClass: "fslightbox-slideshow-bar fslightbox-absoluted"
                })
            };
        Re._withStripped = !0;
        var Xe = kt({
            props: {
                fsLightboxIndex: Number
            },
            mounted: function () {
                _[this.fsLightboxIndex].elements.slideshowBar = this.$refs.ref
            }
        }, Re, [], !1, null, null, null);
        Xe.options.__file = "src/components/SlideshowBar.vue";
        var Ue = Xe.exports;

        function je() {
            var t = localStorage.getItem("fslightbox-scrollbar-width");
            if (t) return t;
            var e = function () {
                    var t = document.createElement("div"),
                        e = t.style;
                    return e.visibility = "hidden", e.width = "100px", e.msOverflowStyle = "scrollbar", e.overflow = "scroll", t
                }(),
                n = function () {
                    var t = document.createElement("div");
                    return t.style.width = "100%", t
                }();
            document.body.appendChild(e);
            var o = e.offsetWidth;
            e.appendChild(n);
            var s = n.offsetWidth;
            document.body.removeChild(e);
            var i = o - s;
            return localStorage.setItem("fslightbox-scrollbar-width", i.toString()), i
        }

        function Ze(t) {
            var e = t.core.lightboxOpenActioner,
                n = e.runBeforeRenderActions,
                o = e.runAfterRenderActions,
                s = t.data,
                r = t.props.openOnMount;
            document.getElementsByClassName(i).length || C(), s.scrollbarWidth = je(), r && (n(), o())
        }
        var Ve = function () {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", t._l(t.captions, (function (e, o) {
                return e ? n("Caption", {
                    key: o,
                    attrs: {
                        "fs-lightbox-index": t.fsLightboxIndex,
                        i: o
                    }
                }) : t._e()
            })), 1)
        };
        Ve._withStripped = !0;
        var qe = function () {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                ref: "ref",
                class: this.className
            }, [e("div", {
                staticClass: "fslightbox-caption-inner"
            }, [e(this.component, this._b({
                tag: "component"
            }, "component", this.componentProps, !1))], 1)])
        };
        qe._withStripped = !0;
        var Je = kt({
            props: {
                fsLightboxIndex: Number,
                i: Number
            },
            data: function () {
                var t = _[this.fsLightboxIndex],
                    e = t.data.isThumbing,
                    n = t.props.captions,
                    o = t.stageIndexes,
                    s = be(n[this.i]);
                return s.className = "fslightbox-caption fslightbox-flex-centered", o.current !== this.i || e || (s.className += " fslightbox-caption-active"), s
            },
            mounted: function () {
                _[this.fsLightboxIndex].elements.captions[this.i] = this.$refs.ref
            }
        }, qe, [], !1, null, null, null);
        Je.options.__file = "src/components/captions/Caption.vue";
        var Ge = kt({
            components: {
                Caption: Je.exports
            },
            props: {
                fsLightboxIndex: Number
            },
            data: function () {
                return {
                    captions: _[this.fsLightboxIndex].props.captions
                }
            }
        }, Ve, [], !1, null, null, null);
        Ge.options.__file = "src/components/captions/Captions.vue";
        var Ke = Ge.exports,
            Qe = function () {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    ref: "ref",
                    class: this.className
                }, [e("ThumbsCursorer", {
                    attrs: {
                        "fs-lightbox-index": this.fsLightboxIndex
                    }
                }), this._v(" "), e("ThumbsInner", {
                    attrs: {
                        "fs-lightbox-index": this.fsLightboxIndex
                    }
                }), this._v(" "), this.areThumbsLoading ? e("Loader", {
                    attrs: {
                        testId: "thumbs-loader",
                        "additional-class-name": "fslightbox-thumbs-loader"
                    }
                }) : this._e()], 1)
            };
        Qe._withStripped = !0;
        var tn = function () {
            var t = this.$createElement,
                e = this._self._c || t;
            return this.isThumbsCursorerShown ? e("div", {
                staticClass: "fslightbox-thumbs-cursorer fslightbox-full-dimension fslightbox-absoluted"
            }) : this._e()
        };
        tn._withStripped = !0;
        var en = kt({
            props: {
                fsLightboxIndex: Number
            },
            data: function () {
                return {
                    isThumbsCursorerShown: !1
                }
            },
            created: function () {
                var t = this,
                    e = _[this.fsLightboxIndex].componentsServices;
                e.showThumbsCursorerIfNotYet = function () {
                    t.isThumbsCursorerShown || (t.isThumbsCursorerShown = !0)
                }, e.hideThumbsCursorer = function () {
                    t.isThumbsCursorerShown = !1
                }
            }
        }, tn, [], !1, null, null, null);
        en.options.__file = "src/components/thumbs/ThumbsCursorer.vue";
        var nn = en.exports,
            on = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", t._g({
                    ref: "ref",
                    staticClass: "fslightbox-thumbs-inner",
                    attrs: {
                        "data-test-id": "thumbs-inner"
                    }
                }, t.vOnEvents), t._l(t.children, (function (e, o) {
                    return e ? n(e.component, t._b({
                        key: o,
                        tag: "component",
                        attrs: {
                            "fs-lightbox-index": t.fsLightboxIndex
                        }
                    }, "component", e.props, !1)) : t._e()
                })), 1)
            };
        on._withStripped = !0;
        var sn = function () {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                ref: "thumb-wrapper",
                staticClass: "fslightbox-thumb-invalid fslightbox-thumb-wrapper"
            }, [e("div", {
                ref: "thumb",
                class: this.thumbClassName
            }, [e("Svger", {
                attrs: {
                    width: "22px",
                    height: "22px",
                    "view-box": "0 0 30 30",
                    d: "M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16.212,8l-0.2,9h-2.024l-0.2-9 H16.212z M15.003,22.189c-0.828,0-1.323-0.441-1.323-1.182c0-0.755,0.494-1.196,1.323-1.196c0.822,0,1.316,0.441,1.316,1.196 C16.319,21.748,15.825,22.189,15.003,22.189z"
                }
            })], 1)])
        };
        sn._withStripped = !0;
        var rn = kt({
            components: {
                Svger: Dt
            },
            props: {
                fsLightboxIndex: Number,
                i: Number
            },
            data: function () {
                var t = {
                    thumbClassName: "fslightbox-thumb fslightbox-flex-centered"
                };
                return this.i === _[this.fsLightboxIndex].stageIndexes.current && (t.thumbClassName += " fslightbox-thumb-active"), t
            },
            mounted: function () {
                var t = _[this.fsLightboxIndex],
                    e = t.core.thumbLoadHandler.handleLoad,
                    n = t.elements,
                    o = n.thumbsWrappers,
                    s = n.thumbs;
                o[this.i] = this.$refs["thumb-wrapper"], s[this.i] = this.$refs.thumb, e()
            }
        }, sn, [], !1, null, null, null);
        rn.options.__file = "src/components/thumbs/InvalidThumb.vue";
        var an = rn.exports,
            cn = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    ref: "thumb-wrapper",
                    staticClass: "fslightbox-thumb-wrapper"
                }, [t.thumbIcon ? n("div", {
                    staticClass: "fslightbox-thumb-wrapper-darkener"
                }) : t._e(), t._v(" "), t.thumbIcon ? n(t.thumbIcon.component, t._b({
                    tag: "component"
                }, "component", t.thumbIcon.componentProps, !1)) : t._e(), t._v(" "), n("img", {
                    ref: "thumb",
                    class: t.thumbClassName,
                    attrs: {
                        src: t.src,
                        alt: t.src
                    },
                    on: {
                        load: t.onLoad
                    }
                })], 1)
            };
        cn._withStripped = !0;
        var un = kt({
            props: {
                fsLightboxIndex: Number,
                i: Number,
                src: String
            },
            data: function () {
                var t = _[this.fsLightboxIndex],
                    e = t.core.thumbLoadHandler.handleLoad,
                    n = t.props.thumbsIcons,
                    o = t.stageIndexes,
                    s = {
                        thumbIcon: null
                    },
                    i = n && n[this.i];
                return i && (s.thumbIcon = be(i)), s.onLoad = e, s.thumbClassName = "fslightbox-thumb", this.i === o.current && (s.thumbClassName += " fslightbox-thumb-active"), s
            },
            mounted: function () {
                var t = _[this.fsLightboxIndex].elements,
                    e = t.thumbsWrappers,
                    n = t.thumbs;
                e[this.i] = this.$refs["thumb-wrapper"], n[this.i] = this.$refs.thumb
            }
        }, cn, [], !1, null, null, null);
        un.options.__file = "src/components/thumbs/Thumb.vue";
        var ln = un.exports,
            hn = kt({
                props: {
                    fsLightboxIndex: Number
                },
                components: {
                    Loader: _e,
                    Thumb: ln,
                    InvalidThumb: an
                },
                data: function () {
                    var t = _[this.fsLightboxIndex].core.thumbsSwipingDown.listener;
                    return {
                        children: this.getChildren().slice(),
                        vOnEvents: Be(t)
                    }
                },
                created: function () {
                    var t = this;
                    _[this.fsLightboxIndex].componentsServices.updateThumbsInner = function () {
                        t.children = t.getChildren().slice()
                    }
                },
                mounted: function () {
                    _[this.fsLightboxIndex].elements.thumbsInner = this.$refs.ref
                },
                methods: {
                    getChildren: function () {
                        return _[this.fsLightboxIndex].elements.thumbsPropedComponents
                    }
                }
            }, on, [], !1, null, null, null);
        hn.options.__file = "src/components/thumbs/ThumbsInner.vue";
        var dn = kt({
            components: {
                Loader: _e,
                ThumbsInner: hn.exports,
                ThumbsCursorer: nn
            },
            props: {
                fsLightboxIndex: Number
            },
            data: function () {
                var t = {
                    areThumbsLoading: !0,
                    className: "fslightbox-thumbs"
                };
                return _[this.fsLightboxIndex].data.isThumbing && (t.className += " fslightbox-thumbs-active"), t
            },
            mounted: function () {
                var t = this;
                _[this.fsLightboxIndex].elements.thumbsContainer = this.$refs.ref, _[this.fsLightboxIndex].componentsServices.hideThumbsLoader = function () {
                    t.areThumbsLoading = !1
                }
            }
        }, Qe, [], !1, null, null, null);
        dn.options.__file = "src/components/thumbs/Thumbs.vue";
        var fn, pn = dn.exports,
            mn = kt({
                props: {
                    toggler: Boolean,
                    sources: Array,
                    customSources: Array,
                    initialAnimation: {
                        type: String,
                        default: f
                    },
                    slideChangeAnimation: {
                        type: String,
                        default: h
                    },
                    captions: Array,
                    onOpen: Function,
                    onClose: Function,
                    onInit: Function,
                    onShow: Function,
                    onSlideChange: Function,
                    slide: Number,
                    source: String,
                    sourceIndex: Number,
                    maxYoutubeVideoDimensions: Object,
                    videosPosters: Array,
                    slideButtons: Object,
                    toolbarButtons: Object,
                    disableLocalStorage: Boolean,
                    types: Array,
                    type: String,
                    thumbs: Array,
                    disableThumbs: Boolean,
                    showThumbsOnMount: Boolean,
                    thumbsIcons: Array,
                    customToolbarButtons: Array,
                    slideDistance: {
                        type: Number,
                        default: .3
                    },
                    slideshowTime: {
                        type: Number,
                        default: 8e3
                    },
                    UIFadeOutTime: {
                        type: Number,
                        default: 8e3
                    },
                    openOnMount: Boolean
                },
                components: {
                    Thumbs: pn,
                    Captions: Ke,
                    Naver: oe,
                    SlideButtons: He,
                    SlideshowBar: Ue,
                    SlideSwipingHoverer: $e,
                    SourcesOutersWrapper: Ne
                },
                data: function () {
                    return {
                        isOpen: this.openOnMount
                    }
                },
                watch: {
                    slide: function (t) {
                        _[this.fsLightboxIndex].core.lightboxUpdater.runCurrentStageIndexUpdateActionsFor(t - 1)
                    },
                    sourceIndex: function (t) {
                        _[this.fsLightboxIndex].core.lightboxUpdater.runCurrentStageIndexUpdateActionsFor(t)
                    },
                    source: function (t) {
                        _[this.fsLightboxIndex].core.lightboxUpdater.runCurrentStageIndexUpdateActionsFor(this.sources.indexOf(t))
                    },
                    toggler: function () {
                        _[this.fsLightboxIndex].core.lightboxUpdater.handleTogglerUpdate()
                    }
                },
                created: function () {
                    var t = this;
                    this.fsLightboxIndex = _.push(new zt(this)) - 1;
                    var e = _[this.fsLightboxIndex].componentsServices.isLightboxOpenManager;
                    e.get = function () {
                        return t.isOpen
                    }, e.set = function (e, n) {
                        t.isOpen = e, n && (fn = n)
                    }
                },
                mounted: function () {
                    _[this.fsLightboxIndex].elements.container = this.$refs.container, Ze(_[this.fsLightboxIndex])
                },
                updated: function () {
                    _[this.fsLightboxIndex].elements.container = this.$refs.container, fn && fn(), fn = null
                }
            }, o, [], !1, null, null, null);
        mn.options.__file = "src/FsLightbox.vue";
        var gn = mn.exports;
        window.FsLightbox = gn, Vue.component("fs-lightbox", gn)
    }])
}));