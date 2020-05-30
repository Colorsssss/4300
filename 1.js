var aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbaaa;
var __reflect = this && this.__reflect || function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
}
  , __extends = this && this.__extends || function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var s in e)
        e.hasOwnProperty(s) && (t[s] = e[s]);
    i.prototype = e.prototype,
    t.prototype = new i
}
  , __awaiter = this && this.__awaiter || function(t, e, i, s) {
    return new (i || (i = Promise))(function(a, n) {
        function o(t) {
            try {
                h(s.next(t))
            } catch (e) {
                n(e)
            }
        }
        function r(t) {
            try {
                h(s["throw"](t))
            } catch (e) {
                n(e)
            }
        }
        function h(t) {
            t.done ? a(t.value) : new i(function(e) {
                e(t.value)
            }
            ).then(o, r)
        }
        h((s = s.apply(t, e || [])).next())
    }
    )
}
  , __generator = this && this.__generator || function(t, e) {
    function i(t) {
        return function(e) {
            return s([t, e])
        }
    }
    function s(i) {
        if (a)
            throw new TypeError("Generator is already executing.");
        for (; h; )
            try {
                if (a = 1,
                n && (o = n[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(n, i[1])).done)
                    return o;
                switch (n = 0,
                o && (i = [0, o.value]),
                i[0]) {
                case 0:
                case 1:
                    o = i;
                    break;
                case 4:
                    return h.label++,
                    {
                        value: i[1],
                        done: !1
                    };
                case 5:
                    h.label++,
                    n = i[1],
                    i = [0];
                    continue;
                case 7:
                    i = h.ops.pop(),
                    h.trys.pop();
                    continue;
                default:
                    if (o = h.trys,
                    !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                        h = 0;
                        continue
                    }
                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                        h.label = i[1];
                        break
                    }
                    if (6 === i[0] && h.label < o[1]) {
                        h.label = o[1],
                        o = i;
                        break
                    }
                    if (o && h.label < o[2]) {
                        h.label = o[2],
                        h.ops.push(i);
                        break
                    }
                    o[2] && h.ops.pop(),
                    h.trys.pop();
                    continue
                }
                i = e.call(t, h)
            } catch (s) {
                i = [6, s],
                n = 0
            } finally {
                a = o = 0
            }
        if (5 & i[0])
            throw i[1];
        return {
            value: i[0] ? i[1] : void 0,
            done: !0
        }
    }
    var a, n, o, r, h = {
        label: 0,
        sent: function() {
            if (1 & o[0])
                throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return r = {
        next: i(0),
        "throw": i(1),
        "return": i(2)
    },
    "function" == typeof Symbol && (r[Symbol.iterator] = function() {
        return this
    }
    ),
    r
}
  , BaseButton = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.partAdded = function(e, i) {
        t.prototype.partAdded.call(this, e, i)
    }
    ,
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this.display = this.getChildAt(0),
        this.display.x = this.display.anchorOffsetX = this.width / 2,
        this.display.y = this.display.anchorOffsetY = this.height / 2,
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this),
        this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this),
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchCancel, this),
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchCancel, this)
    }
    ,
    e.prototype.setImg = function(t) {
        this.display.source = t
    }
    ,
    e.prototype.touchCancel = function(t) {
        this.display.scaleX = 1,
        this.display.scaleY = 1
    }
    ,
    e.prototype.touchBegin = function(t) {
        SoundManager.getInstance().playEffect("button_mp3"),
        this.display.scaleX = .9,
        this.display.scaleY = .9
    }
    ,
    e
}(eui.Button);
__reflect(BaseButton.prototype, "BaseButton", ["eui.UIComponent", "egret.DisplayObject"]);
var BaseClass = function() {
    function t() {}
    return t.getInstance = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        var i = this;
        if (!i._instance) {
            var s = t.length;
            0 == s ? i._instance = new i : 1 == s ? i._instance = new i(t[0]) : 2 == s ? i._instance = new i(t[0],t[1]) : 3 == s ? i._instance = new i(t[0],t[1],t[2]) : 4 == s ? i._instance = new i(t[0],t[1],t[2],t[3]) : 5 == s && (i._instance = new i(t[0],t[1],t[2],t[3],t[4]))
        }
        return i._instance
    }
    ,
    t
}();
__reflect(BaseClass.prototype, "BaseClass");
var BaseSound = function() {
    function t() {
        this._cache = {},
        this._loadingCache = new Array
    }
    return t.prototype.dealSoundTimer = function() {
        for (var t = egret.getTimer(), e = Object.keys(this._cache), i = 0, s = e.length; s > i; i++) {
            var a = e[i];
            this.checkCanClear(a) && t - this._cache[a] >= SoundManager.CLEAR_TIME && (delete this._cache[a],
            RES.destroyRes(a))
        }
    }
    ,
    t.prototype.getSound = function(t) {
        var e = RES.getRes(t);
        if (e)
            this._cache[t] && (this._cache[t] = egret.getTimer());
        else {
            if (-1 != this._loadingCache.indexOf(t))
                return null;
            this._loadingCache.push(t),
            RES.getResAsync(t, this.onResourceLoadComplete, this)
        }
        return e
    }
    ,
    t.prototype.onResourceLoadComplete = function(t, e) {
        var i = this._loadingCache.indexOf(e);
        -1 != i && (this._loadingCache.splice(i, 1),
        this._cache[e] = egret.getTimer(),
        this.loadedPlay(e))
    }
    ,
    t.prototype.loadedPlay = function(t) {}
    ,
    t.prototype.checkCanClear = function(t) {
        return !0
    }
    ,
    t
}();
__reflect(BaseSound.prototype, "BaseSound");
var MessageScoketReceive = function() {
    function t() {}
    return t.prototype.initHandlers = function(t, e) {
        switch (t) {
        case MessageProtocol.ACK | MessageProtocol.LOGIN:
            this.OGID_UserLogin(e);
            break;
        case MessageProtocol.ACK | MessageProtocol.GameState:
            this.OGID_GetMessage(e)
        }
    }
    ,
    t.prototype.OGID_UserLogin = function(t) {
        var e = ArrayUtils.decodeByteArray(t, message.ackLogin);
        0 == e.result ? console.log("message登录成功") : console.log("message登录失败")
    }
    ,
    t.prototype.OGID_GetMessage = function(t) {
        var e = ArrayUtils.decodeByteArray(t, message.NotifyMsgNtc)
          , i = [];
        i.push("[" + e.title + "]:" + e.content),
        MessageUI.ins.showMessage(i)
    }
    ,
    t
}();
__reflect(MessageScoketReceive.prototype, "MessageScoketReceive");
var DebugPlatform = function() {
    function t() {}
    return t.prototype.getUserInfo = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, {
                    nickName: "username"
                }]
            })
        })
    }
    ,
    t.prototype.login = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2]
            })
        })
    }
    ,
    t
}();
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]),
window.platform || (window.platform = new DebugPlatform);
var ThemeAdapter = function() {
    function t() {}
    return t.prototype.getTheme = function(t, e, i, s) {
        function a(t) {
            e.call(s, t)
        }
        function n(e) {
            e.resItem.url == t && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, n, null),
            i.call(s))
        }
        var o = this;
        "undefined" != typeof generateEUI ? egret.callLater(function() {
            e.call(s, generateEUI)
        }, this) : "undefined" != typeof generateEUI2 ? RES.getResByUrl("resource/gameEui.json", function(t, i) {
            window.JSONParseClass.setData(t),
            a(t),
            egret.callLater(function() {
                e.call(s, generateEUI2)
            }, o)
        }, this, RES.ResourceItem.TYPE_JSON) : (RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, n, null),
        RES.getResByUrl(t, a, this, RES.ResourceItem.TYPE_TEXT))
    }
    ,
    t
}();
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var ViewManager = function(t) {
    function e() {
        var e = t.call(this) || this;
        if (e.bottomLayer = new egret.Sprite,
        e.middleLayer = new egret.Sprite,
        e.popLayer = new egret.Sprite,
        e.topLayer = new egret.Sprite,
        e.addChild(e.bottomLayer),
        e.addChild(e.middleLayer),
        e.addChild(e.popLayer),
        e.addChild(e.topLayer),
        TipsUtils.topLayer = e.topLayer,
        e.width = Utils.curWidth,
        e.height = Utils.curWidth,
        1 == PDKParems.ins.dealCardShow) {
            var i = new eui.Label;
            i.text = "发牌",
            i.size = 50,
            i.touchEnabled = !0,
            i.addEventListener(egret.TouchEvent.TOUCH_TAP, e.showDealCardUI, e),
            e.topLayer.addChild(i)
        }
        return new ScreenManager(e),
        e
    }
    return __extends(e, t),
    Object.defineProperty(e, "ins", {
        get: function() {
            return null == e._ins && (e._ins = new e),
            e._ins
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.showHistoryUI = function() {
        null == this.historyUI ? this.historyUI = new HistoricalView : this.historyUI.onShowUI(),
        this.popLayer.addChild(this.historyUI)
    }
    ,
    e.prototype.showHisDetail = function(t) {
        this.historyDetailUI ? this.historyDetailUI.initData(t) : this.historyDetailUI = new HistoricalDetails(t),
        this.popLayer.addChild(this.historyDetailUI)
    }
    ,
    e.prototype.showDealCardUI = function() {
        null == this.dellcardUI && (this.dellcardUI = new DealCardUI),
        this.popLayer.addChild(this.dellcardUI)
    }
    ,
    e.prototype.showRoomView = function() {
        null == this.roomView ? this.roomView = new RoomView : this.roomView.initData(),
        this.middleLayer.addChild(this.roomView)
    }
    ,
    e.prototype.showWait = function(t) {
        null == this.waitUI && (this.waitUI = new WaitEUI),
        this.topLayer.addChild(this.waitUI),
        this.waitUI.showWait(t)
    }
    ,
    e.prototype.hideWait = function() {
        this.waitUI && this.waitUI.hideWait()
    }
    ,
    e.prototype.showRuleView = function() {
        null == this.ruleView ? this.ruleView = new RuleView : this.ruleView.onShowUI(),
        this.popLayer.addChild(this.ruleView)
    }
    ,
    e.prototype.showGameView = function() {
        GameData.ins.allowedToQuit = !0,
        null == this.gameView ? this.gameView = new GameView : this.gameView.initData(),
        this.middleLayer.addChild(this.gameView)
    }
    ,
    e.prototype.hideGameVie = function() {
        this.gameView && this.gameView.parent && (this.gameView.parent.removeChild(this.gameView),
        GameData.ins.allowedToQuit = !0),
        this.roomView && this.roomView.initData()
    }
    ,
    e.prototype.showSet = function() {
        null == this.setUI ? this.setUI = new SetDlg : this.setUI.showUI(),
        this.popLayer.addChild(this.setUI)
    }
    ,
    e.prototype.showAlert = function(t, e, i, s) {
        void 0 === e && (e = 1),
        void 0 === i && (i = null),
        void 0 === s && (s = null),
        null == this.alertUI && (this.alertUI = new AlertUI),
        egret.MainContext.instance.stage.addChild(this.alertUI),
        this.alertUI.showMessage(t, e, i, s)
    }
    ,
    e
}(egret.DisplayObjectContainer);
__reflect(ViewManager.prototype, "ViewManager");
var WaitEUI = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.partAdded = function(e, i) {
        t.prototype.partAdded.call(this, e, i)
    }
    ,
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this.width = Utils.curWidth,
        this.height = Utils.curHeight,
        this.stage.addEventListener(egret.Event.RESIZE, this.onResize, this)
    }
    ,
    e.prototype.onResize = function() {
        this.width = Utils.curWidth,
        this.height = Utils.curHeight
    }
    ,
    e.prototype.showWait = function(t) {
        this.visible = !0,
        this.lbMsg.text = t,
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this)
    }
    ,
    e.prototype.onEnterFrame = function() {
        this.imgLoading.rotation += 2
    }
    ,
    e.prototype.hideWait = function() {
        this.visible = !1,
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this)
    }
    ,
    e
}(eui.Component);
__reflect(WaitEUI.prototype, "WaitEUI", ["eui.UIComponent", "egret.DisplayObject"]);
var AssetAdapter = function() {
    function t() {}
    return t.prototype.getAsset = function(t, e, i) {
        function s(s) {
            e.call(i, s, t)
        }
        if (RES.hasRes(t)) {
            var a = RES.getRes(t);
            a ? s(a) : RES.getResAsync(t, s, this)
        } else
            RES.getResByUrl(t, s, this, RES.ResourceItem.TYPE_IMAGE)
    }
    ,
    t
}();
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var BaseSheetButton = function(t) {
    function e(e, i) {
        void 0 === i && (i = "");
        var s = t.call(this) || this;
        return s.onInit(e, i),
        s
    }
    return __extends(e, t),
    e.prototype.onInit = function(t, e) {
        void 0 === e && (e = ""),
        "" == e ? this.display = this.createBitmapByName(t) : this.display = this.createBitmapFromSheet(t, e),
        this.gContent = new eui.Group,
        this.addChild(this.gContent),
        this.gContent.addChild(this.display),
        this.display.x = this.display.anchorOffsetX = this.width / 2,
        this.display.y = this.display.anchorOffsetY = this.height / 2,
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this),
        this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this),
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchCancel, this),
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchCancel, this)
    }
    ,
    e.prototype.touchCancel = function(t) {
        this.display.scaleX = 1,
        this.display.scaleY = 1
    }
    ,
    e.prototype.touchBegin = function(t) {
        this.display.scaleX = .9,
        this.display.scaleY = .9
    }
    ,
    e.prototype.createBitmapByName = function(t) {
        var e = new egret.Bitmap
          , i = RES.getRes(t);
        return e.texture = i,
        e
    }
    ,
    e.prototype.createBitmapFromSheet = function(t, e) {
        void 0 === e && (e = "");
        var i = RES.getRes(e)
          , s = i.getTexture(t)
          , a = new egret.Bitmap;
        return a.texture = s,
        a
    }
    ,
    e
}(egret.Sprite);
__reflect(BaseSheetButton.prototype, "BaseSheetButton");
var ContinueButton = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.partAdded = function(e, i) {
        t.prototype.partAdded.call(this, e, i)
    }
    ,
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this)
    }
    ,
    e
}(BaseButton);
__reflect(ContinueButton.prototype, "ContinueButton");
var AlertUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.type = 1,
        e
    }
    return __extends(e, t),
    e.prototype.partAdded = function(e, i) {
        t.prototype.partAdded.call(this, e, i)
    }
    ,
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this.width = Utils.curWidth,
        this.height = Utils.curHeight,
        this.btn_close.visible = !1,
        this.btn_sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSure, this),
        this.stage.addEventListener(egret.Event.RESIZE, this.onResize, this)
    }
    ,
    e.prototype.onResize = function() {
        this.width = Utils.curWidth,
        this.height = Utils.curHeight
    }
    ,
    e.prototype.onSure = function() {
        this.closePanel(),
        null != this.acceptFun && this.acceptFun()
    }
    ,
    e.prototype.closePanel = function() {
        this.parent && this.parent.removeChild(this)
    }
    ,
    e.prototype.showMessage = function(t, e, i, s, a) {
        void 0 === e && (e = 1),
        void 0 === i && (i = null),
        void 0 === s && (s = null),
        void 0 === a && (a = null),
        this.lbContent.text = t,
        this.acceptFun = i,
        this.cancelFun = s,
        this.type = e,
        1 == e && (this.btn_sure.visible = !0,
        this.btn_sure.horizontalCenter = 0)
    }
    ,
    e
}(eui.Component);
__reflect(AlertUI.prototype, "AlertUI", ["eui.UIComponent", "egret.DisplayObject"]);
var ffw;
!function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.cacheArr = new Array,
            e.cacheState = 0,
            e.urlloader = new egret.URLLoader,
            e.urlloader.addEventListener(egret.Event.COMPLETE, e.onComplete, e),
            e
        }
        return __extends(e, t),
        Object.defineProperty(e, "ins", {
            get: function() {
                return null == e._ins && (e._ins = new e),
                e._ins
            },
            enumerable: !0,
            configurable: !0
        }),
        e.sendRequestGetOnce = function(t, e, i, s, a) {
            void 0 === a && (a = "");
            var n = new egret.URLLoader
              , o = new egret.URLRequest;
            o.method = egret.URLRequestMethod.GET,
            n.addEventListener(egret.Event.COMPLETE, e, s),
            n.addEventListener(egret.IOErrorEvent.IO_ERROR, i, this),
            "" != a && (o.data = new egret.URLVariables(a)),
            o.url = t,
            console.info("发送请求(get once):" + o.url),
            console.info("请求参数:" + a);
            try {
                n.load(o)
            } catch (r) {
                this.onLoadExcetion(r.description)
            }
        }
        ,
        e.onLoadExcetion = function(t) {}
        ,
        e.sendRequestPostOnce = function(t, e, i, s, a, n) {
            void 0 === a && (a = ""),
            void 0 === n && (n = "URLVar");
            var o = new egret.URLLoader
              , r = new egret.URLRequest;
            r.method = egret.URLRequestMethod.POST,
            o.addEventListener(egret.Event.COMPLETE, e, s),
            o.addEventListener(egret.IOErrorEvent.IO_ERROR, i, this),
            "" != a && ("URLVar" == n ? r.data = new egret.URLVariables(a) : "JSON" == n && (r.data = a,
            console.info("urlreq data:" + r.data))),
            r.url = t,
            console.info("发送请求(post once):" + r.url),
            console.info("请求参数:" + a);
            try {
                o.load(r)
            } catch (h) {
                this.onLoadExcetion(h.description)
            }
        }
        ,
        e.prototype.sendRequestPost = function(t, e) {
            void 0 === e && (e = "");
            var i = new egret.URLRequest;
            i.method = egret.URLRequestMethod.POST,
            i.data = new egret.URLVariables(e),
            i.url = t,
            console.info("发送请求(post):" + i.url + "?" + e),
            0 == this.cacheState ? (this.cacheState = 1,
            this.urlloader.load(i)) : this.cacheArr.push(i)
        }
        ,
        e.prototype.sendRequestGet = function(t, e) {
            void 0 === e && (e = "");
            var i = new egret.URLRequest;
            i.method = egret.URLRequestMethod.GET,
            "" != e && (i.data = new egret.URLVariables(e)),
            i.url = t,
            console.info("发送请求(get):" + i.url),
            console.info("请求参数:" + e),
            0 == this.cacheState ? (this.cacheState = 1,
            this.urlloader.load(i)) : this.cacheArr.push(i)
        }
        ,
        e.prototype.onComplete = function(t) {
            console.log("接收响应:" + this.urlloader.data),
            this.cacheArr.length > 0 ? egret.setTimeout(this.delayLoadHandler, this, 200) : this.cacheState = 0
        }
        ,
        e.prototype.delayLoadHandler = function() {
            this.urlloader.load(this.cacheArr.shift())
        }
        ,
        e
    }(egret.EventDispatcher);
    t.BaseHttpRequest = e,
    __reflect(e.prototype, "ffw.BaseHttpRequest")
}(ffw || (ffw = {}));
var BoomImage = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._boomV = 0,
        e.boomH = 0,
        e.boomY = 0,
        e
    }
    return __extends(e, t),
    Object.defineProperty(e.prototype, "boomV", {
        get: function() {
            return this._boomV
        },
        set: function(t) {
            this._boomV = t,
            this.y = -(1 - t * t) * this.boomH + this.boomY
        },
        enumerable: !0,
        configurable: !0
    }),
    e
}(eui.Image);
__reflect(BoomImage.prototype, "BoomImage");
var GameChat = function(t) {
    function e() {
        var e = t.call(this) || this;
        e.ltArray = [],
        e.elem = [],
        e.ideX = 0,
        e.maskSprit = new egret.Shape,
        e.maskSprivate = new egret.Sprite,
        e.addChild(e.maskSprivate),
        e.maskSprit.graphics.beginFill(0 + 0 * Math.floor(100 * Math.random()), 1),
        e.maskSprit.graphics.lineStyle(2, 0 + 0 * Math.floor(100 * Math.random())),
        e.maskSprit.graphics.drawRect(0, 0, egret.MainContext.instance.stage.stageWidth, egret.MainContext.instance.stage.stageHeight),
        e.maskSprit.graphics.endFill(),
        e.maskSprit.alpha = 0,
        e.maskSprivate.touchEnabled = !0,
        e.maskSprivate.addChild(e.maskSprit),
        e.maskSprivate.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            e.visible = !1
        }, e),
        e.bgsprit = new egret.Sprite,
        e.addChild(e.bgsprit);
        var i = new egret.Bitmap;
        i.texture = RES.getRes("lgbg_png"),
        e.bgsprit.addChild(i),
        i.x = 70,
        i.y = e.height - i.height - 70;
        var s = e.newTapElem("qhb_png", "dqb_png")
          , a = e.newTapElem("qha_png", "dqa_png");
        s.x = i.x + 6,
        s.y = i.y + 6,
        a.x = s.x,
        a.y = s.y,
        e.bgsprit.addChild(s),
        e.bgsprit.addChild(a),
        e.elem.push(a),
        s.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            e.showElem(a, e.ltscrolbar)
        }, e);
        var n = e.newTapElem("qhb_png", "kjb_png")
          , o = e.newTapElem("qha_png", "kja_png");
        n.x = s.x,
        n.y = s.y + s.height + 5,
        o.x = n.x,
        o.y = n.y,
        e.bgsprit.addChild(n),
        e.bgsprit.addChild(o),
        o.visible = !1,
        e.elem.push(o),
        n.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            e.showElem(o, e.scrolbar)
        }, e);
        var r = new egret.Bitmap;
        r.texture = RES.getRes("sr_png"),
        e.bgsprit.addChild(r),
        r.x = i.x + 20,
        r.y = i.y + i.height - r.height - 20,
        e.srtext = new egret.TextField,
        e.srtext.maxChars = 100,
        e.srtext.x = r.x + 5,
        e.srtext.y = r.y + 12,
        e.srtext.bold = !0,
        e.srtext.size = 40,
        e.srtext.text = "这里输入文本",
        e.srtext.type = egret.TextFieldType.INPUT,
        e.srtext.width = r.width - 20,
        e.srtext.height = r.height - 10,
        e.bgsprit.addChild(e.srtext),
        e.srtext.touchEnabled = !0,
        e.srtext.addEventListener(egret.Event.FOCUS_IN, function() {
            "这里输入文本" == e.srtext.text && (e.srtext.text = "")
        }, e),
        e.srtext.addEventListener(egret.FocusEvent.FOCUS_OUT, function() {
            "" == e.srtext.text && (e.srtext.text = "这里输入文本")
        }, e);
        var h = new egret.Bitmap
          , l = new egret.Bitmap;
        return h.texture = RES.getRes("fsa_png"),
        l.texture = RES.getRes("fsb_png"),
        h.x = r.x + r.width + 10,
        h.y = r.y,
        l.x = h.x,
        l.y = h.y,
        e.bgsprit.addChild(h),
        e.bgsprit.addChild(l),
        l.visible = !1,
        h.touchEnabled = !0,
        h.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            "这里输入文本" != e.srtext.text && (RoomSocketSender.instance().ReqChat(e.srtext.text),
            e.srtext.text = "",
            e.visible = !1)
        }, e),
        e.bgsprit.scaleX = e.bgsprit.scaleY = .7,
        e.touchEnabled = !0,
        e.bgsprit.y = e.height - e.bgsprit.height * e.bgsprit.scaleY - 180,
        e.bgsprit.x = e.bgsprit.x - 20,
        e.bgsprit.touchEnabled = !0,
        e.newkjsprint(),
        e.bgsprit.addChild(e.scrolbar),
        e.scrolbar.x = s.x + s.width + 30,
        e.scrolbar.y = s.y,
        e.scrolbar.visible = !1,
        e.newltsprint(),
        e.bgsprit.addChild(e.ltscrolbar),
        e.ltscrolbar.x = s.x + s.width + 30,
        e.ltscrolbar.y = s.y,
        e.showElem(a, e.ltscrolbar),
        RoomEventDispatcher.getInstance().addEventListener("ROOM_SHOW", function() {
            e.srtext.type = egret.TextFieldType.DYNAMIC,
            e.visible = !1
        }, e),
        RoomEventDispatcher.getInstance().addEventListener("GAME_SHOW", function() {
            e.srtext.type = egret.TextFieldType.INPUT
        }, e),
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, e.drawRect, e),
        e
    }
    return __extends(e, t),
    e.prototype.drawRect = function() {
        this.maskSprit.graphics.beginFill(0 + 0 * Math.floor(100 * Math.random()), 1),
        this.maskSprit.graphics.lineStyle(2, 0 + 0 * Math.floor(100 * Math.random())),
        this.maskSprit.graphics.drawRect(0, 0, egret.MainContext.instance.stage.stageWidth, egret.MainContext.instance.stage.stageHeight),
        this.maskSprit.graphics.endFill()
    }
    ,
    e.prototype.newTapElem = function(t, e) {
        var i = new egret.Sprite
          , s = new egret.Bitmap;
        s.texture = RES.getRes(t);
        var a = new egret.Bitmap;
        return a.texture = RES.getRes(e),
        i.addChild(s),
        i.addChild(a),
        a.x = (s.width - a.width) / 2,
        a.y - (s.height - a.height) / 2,
        i.touchEnabled = !0,
        i
    }
    ,
    e.prototype.showElem = function(t, e) {
        for (var i = 0; i < this.elem.length; i++)
            this.elem[i] == t ? this.elem[i].visible = !0 : this.elem[i].visible = !1;
        this.showl && (this.showl.visible = !1),
        e.visible = !0,
        this.showl = e
    }
    ,
    e.prototype.newkjsprint = function() {
        this.kjsprit = new egret.Sprite;
        var t = new egret.Sprite;
        this.kjsprit.addChild(t);
        var e = RES.getRes("chat_kj_json");
        if (null != e)
            for (var i = 0; i < e.length; i++) {
                var s = new egret.Bitmap;
                s.texture = RES.getRes("kjf_png"),
                this.kjsprit.addChild(s),
                s.y = 100 * i;
                var a = new egret.TextField;
                a.text = e[i].t1,
                a.size = 50,
                a.bold = !0,
                a.textColor = 13199920,
                this.kjsprit.addChild(a),
                a.y = s.y - 50 - a.height / 2,
                a.touchEnabled = !0,
                this.sendEven(e[i].t1, a)
            }
        var n = new egret.Shape;
        n.graphics.beginFill(0 + 0 * Math.floor(100 * Math.random()), 1),
        n.graphics.lineStyle(2, 0 + 0 * Math.floor(100 * Math.random())),
        n.graphics.drawRect(0, 0, this.kjsprit.width, this.kjsprit.height),
        n.graphics.endFill(),
        n.alpha = .1,
        n.touchEnabled = !0,
        t.addChild(n),
        this.scrolbar = new egret.ScrollView,
        this.scrolbar.bounces = !1,
        this.scrolbar.width = 540,
        this.scrolbar.height = 330,
        this.scrolbar.horizontalScrollPolicy = "on",
        this.scrolbar.setContent(this.kjsprit),
        this.kjsprit.width = 539
    }
    ,
    e.prototype.newbqsprit = function() {
        this.bqsprit = new egret.Sprite;
        for (var t = 0; 28 > t; t++) {
            var e = Utils.createBitmapFromSheet("icon" + (t + 1), "chatUI_json");
            this.bqsprit.addChild(e),
            t % 4 != 0 ? e.x = t % 4 * 140 - 160 + 10 * (t % 4) : e.x = 420,
            e.y = Math.floor(t / 4) * e.height + 25 * Math.floor(t / 4) + 20,
            e.touchEnabled = !0,
            this.sendEven("icon" + (t + 1), e)
        }
        this.bqscrolbar = new egret.ScrollView,
        this.bqscrolbar.bounces = !1,
        this.bqscrolbar.width = 540,
        this.bqscrolbar.height = 330,
        this.bqscrolbar.horizontalScrollPolicy = "on",
        this.bqscrolbar.setContent(this.bqsprit),
        this.bqsprit.width = 539
    }
    ,
    e.prototype.newltsprint = function() {
        this.ltsprit = new egret.Sprite,
        this.ltsprit.width = 539,
        this.ltscrolbar = new egret.ScrollView,
        this.ltscrolbar.bounces = !1,
        this.ltscrolbar.width = 540,
        this.ltscrolbar.height = 330,
        this.ltscrolbar.horizontalScrollPolicy = "on",
        this.ltscrolbar.setContent(this.ltsprit)
    }
    ,
    e.prototype.setLtString = function(t, e) {
        var i = e + " : " + t
          , s = new egret.TextField;
        s.text = i,
        s.size = 40,
        s.bold = !0,
        s.textColor = 13199920,
        s.width = 500,
        this.ltsprit.addChild(s),
        s.y = this.ideX,
        this.ideX = s.y + s.height + 30,
        this.ltsprit.height = this.ltsprit.height + s.height + 50,
        this.ltArray.push(s),
        this.ltsprit.height = s.y + 200,
        this.ltsprit.numChildren > 6 && (this.ltscrolbar.scrollTop = this.ltsprit.height)
    }
    ,
    e.prototype.sendEven = function(t, e) {
        var i = this;
        void 0 === e && (e = null),
        e.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            RoomSocketSender.instance().ReqChat(t),
            i.visible = !1
        }, this)
    }
    ,
    e.inc = function() {
        return e._gamechat || (e._gamechat = new e),
        e._gamechat
    }
    ,
    e
}(egret.Sprite);
__reflect(GameChat.prototype, "GameChat");
var GameChatBrow = function(t) {
    function e() {
        var e = t.call(this) || this;
        e.movic = new egret.Sprite;
        var i = new egret.Bitmap;
        return e.movic.addChild(i),
        i.scaleX = .75,
        i.scaleY = .65,
        e.chatBrow(),
        e
    }
    return __extends(e, t),
    e.prototype.chatBrow = function() {
        for (var t = this, e = new egret.MovieClipDataFactory(RES.getRes("chat_json"),RES.getRes("chat_png")), i = 0, s = 60, a = -20, n = .8, o = 0; 15 > o; o++) {
            var r = new egret.MovieClip(e.generateMovieClipData("dd"));
            r.scaleX = r.scaleY = n,
            this.movic.addChild(r),
            i > 2 && (a += 150,
            i = 0,
            s = 60),
            r.x = s,
            r.y = a,
            r.gotoAndPlay("vip_" + (o + 1), -1),
            i++,
            s += r.width * n,
            r.touchEnabled = !0,
            this.sendEven("vip_" + (o + 1), r),
            1 == o && (r.x = r.x + 20,
            r.y = r.y + 10),
            2 == o && (r.x = r.x + 130,
            r.y = r.y + 30),
            3 == o && (r.x = r.x - 30,
            r.y = r.y + 20),
            4 == o && (r.x = r.x + 40,
            r.y = r.y - 20),
            5 == o && (r.x = r.x + 80,
            r.y = r.y + 20),
            7 == o && (r.scaleX = r.scaleY = .85,
            r.x = r.x + 40,
            r.y = r.y - 40),
            8 == o && (r.x = r.x + 120),
            o >= 10 && (r.x = r.x + 60,
            r.y = r.y - 20),
            11 == o && (r.x = r.x + 70,
            r.y = r.y + 15),
            12 == o && (r.scaleX = r.scaleY = 1.6,
            r.x = r.x - 70,
            r.y = r.y),
            13 == o && (r.scaleX = r.scaleY = .65,
            r.x = r.x + 25,
            r.y = r.y - 10),
            14 == o && (r.scaleX = r.scaleY = .65,
            r.x = r.x + 70,
            r.y = r.y - 15)
        }
        var s = this.movic.getChildAt(2).x
          , h = this.movic.getChildAt(2).y;
        this.movic.getChildAt(2).x = this.movic.getChildAt(15).x,
        this.movic.getChildAt(2).y = this.movic.getChildAt(15).y,
        this.movic.getChildAt(15).x = s,
        this.movic.getChildAt(15).y = h,
        this.addChild(this.movic),
        RoomEventDispatcher.getInstance().addEventListener("ROOM_SHOW", function() {
            t.visible = !1
        }, this),
        RoomEventDispatcher.getInstance().addEventListener("GAME_SHOW", function() {
            t.visible = !0
        }, this)
    }
    ,
    e.prototype.sendEven = function(t, e) {
        void 0 === e && (e = null),
        e.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            RoomSocketSender.instance().ReqChat(t)
        }, this)
    }
    ,
    e.inc = function() {
        return e._gameChatBrow || (e._gameChatBrow = new e),
        e._gameChatBrow
    }
    ,
    e
}(egret.Sprite);
__reflect(GameChatBrow.prototype, "GameChatBrow");
var GameData = function() {
    function t() {
        this.tableId = "",
        this.tableMapId = 0,
        this.seatNo = 0,
        this.roundId = "",
        this.type = 0,
        this.allowedToQuit = !0,
        this.dealEnd = !1,
        this.myCards = [],
        this.rightCards = [],
        this.leftCards = [],
        this.takeOutCard = [],
        this.nextSeat = 0,
        this.countdown = 0,
        this.biGen = !0,
        this.tipType = 0,
        this.tipCards = [],
        this.tipCardTyp = 0,
        this.GAME_STATUS = 5,
        this.preDiscards = [],
        this.preDiscardSit = -1
    }
    return Object.defineProperty(t, "ins", {
        get: function() {
            return null == t._ins && (t._ins = new t),
            t._ins
        },
        enumerable: !0,
        configurable: !0
    }),
    t
}();
__reflect(GameData.prototype, "GameData");
var GameEventDispatcher = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.getInstance = function() {
        return null == this._instance && (this._instance = new e),
        this._instance
    }
    ,
    e.ON_MY_HAND_CARD_SHOW = "ON_MY_HAND_CARD_SHOW",
    e.ON_RIGHT_HAND_CARD_SHOW = "ON_RIGHT_HAND_CARD_SHOW",
    e.ON_LEFT_HAND_CARD_SHOW = "ON_LEFT_HAND_CARD_SHOW",
    e.ALL_HAND_CARD_ANI_COM = "ALL_HAND_CARD_ANI_COM",
    e
}(egret.EventDispatcher);
__reflect(GameEventDispatcher.prototype, "GameEventDispatcher");
var GameMotion = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.instance = function() {
        return null != e._ins || (e._ins = new e),
        e._ins
    }
    ,
    e.prototype.playAnim = function(t, e) {
        var i = 0
          , s = 0;
        switch (0 == t ? (i = Utils.curWidth / 2,
        s = Utils.curHeight / 2 + 100) : 2 == t ? (i = 250,
        s = 250) : (i = Utils.curWidth - 310,
        s = 250),
        e) {
        case AnimationType.Bomb:
            this.bombAnim(t);
            break;
        case AnimationType.Feiji:
            this.plantAnim(i, s);
            break;
        case AnimationType.FirstSit:
            this.FirstSit(t, i, s);
            break;
        case AnimationType.AllOff:
            this.AllOff(t, 0);
            break;
        case AnimationType.ReOff:
            this.AllOff(t, 1);
            break;
        case AnimationType.Shunza:
            this.leafAnim(t, i, s);
            break;
        case AnimationType.Coupling:
            this.Coupling(t, i, s);
            break;
        case AnimationType.Three:
            this.Three(t, i, s);
            break;
        case AnimationType.ThreeAndOne:
            this.ThreeAndOne(t, i, s);
            break;
        case AnimationType.ThreeAndTwo:
            this.ThreeAndTwo(t, i, s);
            break;
        case AnimationType.FourWithThree:
            this.FourWithThree(t, i, s);
            break;
        case AnimationType.ThreeList:
            this.ThreeList(t, i, s);
            break;
        default:
            return null
        }
    }
    ,
    e.prototype.plantAnim = function(t, i) {
        var s = this;
        egret.setTimeout(function() {
            SoundManager.getInstance().playEffect("b_planeWithWing_mp3")
        }, this, 200),
        egret.setTimeout(function() {
            SoundManager.getInstance().playEffect("b_planeWithWing1_mp3")
        }, this, 700),
        this.fjDisplay || (this.fjDisplay = DragonBonesFactoryUtils.instance().getFactoryByName("feiji"),
        this.fjDisplay.addEventListener(dragonBones.EventObject.COMPLETE, function(t) {
            s.fjDisplay && s.fjDisplay.parent && s.fjDisplay.parent.removeChild(s.fjDisplay)
        }, this)),
        this.dispatchEvent(new DateEvent(e.ONSTARANI,this.fjDisplay)),
        t = Utils.curWidth / 2,
        i = Utils.curHeight / 2 + 100,
        this.fjDisplay.x = t + 25,
        this.fjDisplay.y = i - 225,
        this.fjDisplay.animation.stop(),
        this.fjDisplay.animation.gotoAndPlayByFrame("feji", 0, 1)
    }
    ,
    e.prototype.clearQGFG = function() {
        this.qg0Display && this.qg0Display.parent && this.qg0Display.parent.removeChild(this.qg0Display),
        this.qg1Display && this.qg1Display.parent && this.qg1Display.parent.removeChild(this.qg1Display),
        this.qg2Display && this.qg2Display.parent && this.qg2Display.parent.removeChild(this.qg2Display)
    }
    ,
    e.prototype.AllOff = function(t, i) {
        var s = this;
        0 == t ? (this.qg0Display || (this.qg0Display = DragonBonesFactoryUtils.instance().getFactoryByName("quanguan"),
        this.qg0Display.addEventListener(dragonBones.EventObject.COMPLETE, function(t) {
            s.qg0Display && s.qg0Display.parent
        }, this)),
        this.qg0Display.x = 119,
        this.qg0Display.y = Utils.curHeight - 33 - 100,
        0 == i ? this.qg0Display.animation.gotoAndPlayByFrame("quanguan", 0, 1) : this.qg0Display.animation.gotoAndPlayByFrame("fanguan", 0, 1),
        this.dispatchEvent(new DateEvent(e.ONSTARANI,this.qg0Display))) : 1 == t ? (this.qg1Display || (this.qg1Display = DragonBonesFactoryUtils.instance().getFactoryByName("quanguan"),
        this.qg1Display.addEventListener(dragonBones.EventObject.COMPLETE, function(t) {
            s.qg1Display && s.qg1Display.parent
        }, this)),
        this.qg1Display.x = Utils.curWidth - 4 - 115,
        this.qg1Display.y = 431,
        0 == i ? this.qg1Display.animation.gotoAndPlayByFrame("quanguan", 0, 1) : this.qg1Display.animation.gotoAndPlayByFrame("fanguan", 0, 1),
        this.dispatchEvent(new DateEvent(e.ONSTARANI,this.qg1Display))) : (this.qg2Display || (this.qg2Display = DragonBonesFactoryUtils.instance().getFactoryByName("quanguan"),
        this.qg2Display.addEventListener(dragonBones.EventObject.COMPLETE, function(t) {
            s.qg2Display && s.qg2Display.parent
        }, this)),
        this.qg2Display.x = 119,
        this.qg2Display.y = 431,
        0 == i ? this.qg2Display.animation.gotoAndPlayByFrame("quanguan", 0, 1) : this.qg2Display.animation.gotoAndPlayByFrame("fanguan", 0, 1),
        this.dispatchEvent(new DateEvent(e.ONSTARANI,this.qg2Display)))
    }
    ,
    e.prototype.FirstSit = function(t, i, s) {
        this.firstDisplay || (this.firstDisplay = DragonBonesFactoryUtils.instance().getFactoryByName("fapai")),
        this.dispatchEvent(new DateEvent(e.ONSTARANI,this.firstDisplay)),
        this.firstDisplay.x = Utils.curWidth / 2 + 25,
        this.firstDisplay.y = Utils.curHeight / 2,
        this.firstDisplay.scaleX = 1,
        this.firstDisplay.scaleY = 1,
        this.firstDisplay.alpha = 1,
        0 == t ? egret.Tween.get(this.firstDisplay).wait(1400).to({
            y: s + 300,
            scaleX: .7,
            scaleY: .7
        }, 300).wait(150).to({
            alpha: 0
        }, 150).call(function() {
            this.firstDisplay && this.firstDisplay.parent && this.firstDisplay.parent.removeChild(this.firstDisplay)
        }, this) : 1 == t ? egret.Tween.get(this.firstDisplay).wait(1400).to({
            x: Utils.curWidth - 86 - 236 + 43,
            y: 425,
            scaleX: .3,
            scaleY: .3
        }, 300).wait(150).to({
            alpha: 0
        }, 150).call(function() {
            this.firstDisplay && this.firstDisplay.parent && this.firstDisplay.parent.removeChild(this.firstDisplay)
        }, this) : egret.Tween.get(this.firstDisplay).wait(1400).to({
            x: 279,
            y: 425,
            scaleX: .3,
            scaleY: .3
        }, 300).wait(150).to({
            alpha: 0
        }, 150).call(function() {
            this.firstDisplay && this.firstDisplay.parent && this.firstDisplay.parent.removeChild(this.firstDisplay)
        }, this),
        this.firstDisplay.animation.stop(),
        this.firstDisplay.animation.gotoAndPlayByFrame("fapai", 0, 100)
    }
    ,
    e.prototype.bombAnim = function(t) {
        egret.setTimeout(function() {
            SoundManager.getInstance().playEffect("b_boom_mp3")
        }, this, 200),
        null == this.boomImg && (this.boomImg = new BoomImage,
        this.boomImg.source = "boomImg_png",
        this.boomImg.anchorOffsetX = 94,
        this.boomImg.anchorOffsetY = 94);
        var i = 0
          , s = 0;
        0 == t ? (i = 50,
        s = Utils.curHeight - 86 + 40,
        this.boomImg.boomH = 400) : 2 == t ? (i = 50,
        s = 240,
        this.boomImg.boomH = 300) : (i = Utils.curWidth - 86 - 10 + 40,
        s = 240,
        this.boomImg.boomH = 300),
        this.boomImg.x = i,
        this.boomImg.y = s,
        this.boomImg.boomV = -1,
        this.boomImg.boomY = s,
        this.boomImg.rotation = 0,
        this.dispatchEvent(new DateEvent(e.ONSTARANI,this.boomImg)),
        egret.Tween.get(this.boomImg).to({
            x: Utils.curWidth / 2,
            boomV: 1,
            boomY: Utils.curHeight / 2,
            rotation: 250
        }, 300).call(function() {
            this.playboomByBusy(Utils.curWidth / 2, Utils.curHeight / 2),
            this.boomImg && this.boomImg.parent && this.boomImg.parent.removeChild(this.boomImg)
        }, this)
    }
    ,
    e.prototype.playboomByBusy = function(t, i) {
        var s = this;
        SoundManager.getInstance().playEffect("b_boom1_mp3"),
        this.zdDisplay || (this.zdDisplay = DragonBonesFactoryUtils.instance().getFactoryByName("zhadan"),
        this.zdDisplay.scaleX = 1,
        this.zdDisplay.scaleY = 1,
        this.zdDisplay.addEventListener(dragonBones.EventObject.COMPLETE, function(t) {
            s.zdDisplay && s.zdDisplay.parent && s.zdDisplay.parent.removeChild(s.zdDisplay)
        }, this)),
        this.dispatchEvent(new DateEvent(e.ONSTARANI,this.zdDisplay)),
        this.zdDisplay.x = t + 25,
        this.zdDisplay.y = i,
        this.zdDisplay.animation.stop(),
        this.zdDisplay.animation.gotoAndPlayByFrame("zhadan", 0, 1)
    }
    ,
    e.prototype.leafAnim = function(t, i, s) {
        var a = this;
        egret.setTimeout(function() {
            SoundManager.getInstance().playEffect("b_singleSeries_mp3")
        }, this, 200),
        this.lsDisplay || (this.lsDisplay = DragonBonesFactoryUtils.instance().getFactoryByName("paixingdongxiao"),
        this.lsDisplay.addEventListener(dragonBones.EventObject.COMPLETE, function(t) {
            a.lsDisplay && a.lsDisplay.parent && a.lsDisplay.parent.removeChild(a.lsDisplay)
        }, this)),
        this.dispatchEvent(new DateEvent(e.ONSTARANI,this.lsDisplay)),
        0 == t ? (this.lsDisplay.x = i,
        this.lsDisplay.y = s + 85) : 2 == t ? (this.lsDisplay.x = i + 250,
        this.lsDisplay.y = s + 225) : (this.lsDisplay.x = i - 200,
        this.lsDisplay.y = s + 225),
        this.lsDisplay.animation.stop(),
        this.lsDisplay.animation.gotoAndPlayByFrame("shunzi", 0, 1)
    }
    ,
    e.prototype.Three = function(t, i, s) {
        var a = this;
        egret.setTimeout(function() {
            SoundManager.getInstance().playEffect("b_threeCards_mp3")
        }, this, 200),
        this.lsDisplay || (this.lsDisplay = DragonBonesFactoryUtils.instance().getFactoryByName("paixingdongxiao"),
        this.lsDisplay.addEventListener(dragonBones.EventObject.COMPLETE, function(t) {
            a.lsDisplay && a.lsDisplay.parent && a.lsDisplay.parent.removeChild(a.lsDisplay)
        }, this)),
        this.dispatchEvent(new DateEvent(e.ONSTARANI,this.lsDisplay)),
        0 == t ? (this.lsDisplay.x = i,
        this.lsDisplay.y = s + 85) : 2 == t ? (this.lsDisplay.x = i + 250,
        this.lsDisplay.y = s + 225) : (this.lsDisplay.x = i - 200,
        this.lsDisplay.y = s + 225),
        this.lsDisplay.animation.stop(),
        this.lsDisplay.animation.gotoAndPlayByFrame("sanzhang", 0, 1)
    }
    ,
    e.prototype.Coupling = function(t, i, s) {
        var a = this;
        egret.setTimeout(function() {
            SoundManager.getInstance().playEffect("b_liandui_mp3")
        }, this, 200),
        this.lsDisplay || (this.lsDisplay = DragonBonesFactoryUtils.instance().getFactoryByName("paixingdongxiao"),
        this.lsDisplay.addEventListener(dragonBones.EventObject.COMPLETE, function(t) {
            a.lsDisplay && a.lsDisplay.parent && a.lsDisplay.parent.removeChild(a.lsDisplay)
        }, this)),
        this.dispatchEvent(new DateEvent(e.ONSTARANI,this.lsDisplay)),
        0 == t ? (this.lsDisplay.x = i,
        this.lsDisplay.y = s + 85) : 2 == t ? (this.lsDisplay.x = i + 250,
        this.lsDisplay.y = s + 225) : (this.lsDisplay.x = i - 200,
        this.lsDisplay.y = s + 225),
        this.lsDisplay.animation.stop(),
        this.lsDisplay.animation.gotoAndPlayByFrame("liandui", 0, 1)
    }
    ,
    e.prototype.ThreeAndOne = function(t, i, s) {
        var a = this;
        egret.setTimeout(function() {
            SoundManager.getInstance().playEffect("b_threeWithone_mp3")
        }, this, 200),
        this.lsDisplay || (this.lsDisplay = DragonBonesFactoryUtils.instance().getFactoryByName("paixingdongxiao"),
        this.lsDisplay.addEventListener(dragonBones.EventObject.COMPLETE, function(t) {
            a.lsDisplay && a.lsDisplay.parent && a.lsDisplay.parent.removeChild(a.lsDisplay)
        }, this)),
        this.dispatchEvent(new DateEvent(e.ONSTARANI,this.lsDisplay)),
        0 == t ? (this.lsDisplay.x = i,
        this.lsDisplay.y = s + 85) : 2 == t ? (this.lsDisplay.x = i + 250,
        this.lsDisplay.y = s + 225) : (this.lsDisplay.x = i - 200,
        this.lsDisplay.y = s + 225),
        this.lsDisplay.animation.stop(),
        this.lsDisplay.animation.gotoAndPlayByFrame("sandaiyi", 0, 1)
    }
    ,
    e.prototype.ThreeAndTwo = function(t, i, s) {
        var a = this;
        egret.setTimeout(function() {
            SoundManager.getInstance().playEffect("b_threeWithTwo_mp3")
        }, this, 200),
        this.lsDisplay || (this.lsDisplay = DragonBonesFactoryUtils.instance().getFactoryByName("paixingdongxiao"),
        this.lsDisplay.addEventListener(dragonBones.EventObject.COMPLETE, function(t) {
            a.lsDisplay && a.lsDisplay.parent && a.lsDisplay.parent.removeChild(a.lsDisplay)
        }, this)),
        this.dispatchEvent(new DateEvent(e.ONSTARANI,this.lsDisplay)),
        0 == t ? (this.lsDisplay.x = i,
        this.lsDisplay.y = s + 85) : 2 == t ? (this.lsDisplay.x = i + 250,
        this.lsDisplay.y = s + 225) : (this.lsDisplay.x = i - 200,
        this.lsDisplay.y = s + 225),
        this.lsDisplay.animation.stop(),
        this.lsDisplay.animation.gotoAndPlayByFrame("sandaier", 0, 1)
    }
    ,
    e.prototype.FourWithThree = function(t, i, s) {
        var a = this;
        egret.setTimeout(function() {
            SoundManager.getInstance().playEffect("b_fourWithTwo_mp3")
        }, this, 200),
        this.lsDisplay || (this.lsDisplay = DragonBonesFactoryUtils.instance().getFactoryByName("paixingdongxiao"),
        this.lsDisplay.addEventListener(dragonBones.EventObject.COMPLETE, function(t) {
            a.lsDisplay && a.lsDisplay.parent && a.lsDisplay.parent.removeChild(a.lsDisplay)
        }, this)),
        this.dispatchEvent(new DateEvent(e.ONSTARANI,this.lsDisplay)),
        0 == t ? (this.lsDisplay.x = i,
        this.lsDisplay.y = s + 85) : 2 == t ? (this.lsDisplay.x = i + 250,
        this.lsDisplay.y = s + 225) : (this.lsDisplay.x = i - 200,
        this.lsDisplay.y = s + 225),
        this.lsDisplay.animation.stop(),
        this.lsDisplay.animation.gotoAndPlayByFrame("sidaisan", 0, 1)
    }
    ,
    e.prototype.ThreeList = function(t, i, s) {
        var a = this;
        egret.setTimeout(function() {
            SoundManager.getInstance().playEffect("b_threeList_mp3")
        }, this, 200),
        this.lsDisplay || (this.lsDisplay = DragonBonesFactoryUtils.instance().getFactoryByName("paixingdongxiao"),
        this.lsDisplay.addEventListener(dragonBones.EventObject.COMPLETE, function(t) {
            a.lsDisplay && a.lsDisplay.parent && a.lsDisplay.parent.removeChild(a.lsDisplay)
        }, this)),
        this.dispatchEvent(new DateEvent(e.ONSTARANI,this.lsDisplay)),
        0 == t ? (this.lsDisplay.x = i,
        this.lsDisplay.y = s + 85) : 2 == t ? (this.lsDisplay.x = i + 250,
        this.lsDisplay.y = s + 225) : (this.lsDisplay.x = i - 200,
        this.lsDisplay.y = s + 225),
        this.lsDisplay.animation.stop(),
        this.lsDisplay.animation.gotoAndPlayByFrame("sanshun", 0, 1)
    }
    ,
    e.ONSTARANI = "ONSTARANI",
    e
}(egret.EventDispatcher);
__reflect(GameMotion.prototype, "GameMotion");
var GameView = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.bYinyue = !0,
        e.gameButtonV = !0,
        e.gameYbqButtonV = !0,
        e
    }
    return __extends(e, t),
    e.prototype.partAdded = function(e, i) {
        t.prototype.partAdded.call(this, e, i)
    }
    ,
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this.width = Utils.curWidth,
        this.height = Utils.curHeight,
        this.animationGroup = new eui.Group,
        this.animationGroup.x = 0,
        this.animationGroup.y = 0,
        this.animationGroup.touchEnabled = !1,
        this.animationGroup.touchChildren = !1,
        this.addChild(this.animationGroup),
        this.stage.addEventListener(egret.Event.RESIZE, this.onResize, this),
        this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartGame, this),
        this.ybqButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBuchu, this),
        this.tishi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTishi, this),
        this.chupai.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChupai, this),
        this.btnChat.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShowchat, this),
        this.quxiaoTuoguan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onQxiaoTuoguan, this),
        this.tuoguan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTuoguan, this),
        this.setButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showSet, this),
        this.backButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this),
        this.ruleButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showRule, this),
        this.syButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setSy, this),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.NOT_CURRENCY, this.NOT_CURRENCY, this),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.NOT_START, this.NOT_START, this),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.NOT_DEAL, this.NOT_DEAL, this),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.NOT_DISCARD, this.NOT_DISCARD, this),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.NOT_BALANCE, this.NOT_BALANCE, this),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.NOT_SETTLE, this.NOT_SETTLE, this),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.NOT_CHAT, this.NOT_CHAT, this),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.TRUST, this.TRUST, this),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.ENTER_TABLE, this.ENTER_TABLE, this),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.READY, this.READY, this),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.ENTER_ROOM, this.ENTER_ROOM, this),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.NOT_CHAIR, this.NOT_CHAIR, this),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.NOT_SHOWCARD, this.NOT_SHOWCARD, this),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.ENTER_ROOMFAIL, this.ENTER_ROOMFAIL, this),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.LEAVE_ROOM, this.LEAVE_ROOM, this),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.HIDE_WAIT, this.HIDE_WAIT, this),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.SHOW_WAIT, this.showLoadingTip, this),
        GameEventDispatcher.getInstance().addEventListener(GameEventDispatcher.ALL_HAND_CARD_ANI_COM, this.ALL_HAND_CARD_ANI_COM, this),
        GameEventDispatcher.getInstance().addEventListener(GameEventDispatcher.ON_RIGHT_HAND_CARD_SHOW, this.ON_RIGHT_HAND_CARD_SHOW, this),
        GameEventDispatcher.getInstance().addEventListener(GameEventDispatcher.ON_LEFT_HAND_CARD_SHOW, this.ON_LEFT_HAND_CARD_SHOW, this),
        GameMotion.instance().addEventListener(GameMotion.ONSTARANI, this.onStarAni, this),
        this.myUser.initMyData(),
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchGameStage, this),
        this.ruleButton.visible = !1,
        this.syButton.visible = !1,
        this.initData()
    }
    ,
    e.prototype.initData = function(t) {
        void 0 === t && (t = !1),
        this.takeCardGroup.visible = !1,
        this.gameButtonV = !1,
        this.leftCardNum.visible = !1,
        this.rightCardNum.visible = !1,
        this.leftUser.visible = !1,
        this.rightUser.visible = !1,
        this.tuoguanGroup.visible = !1,
        this.quxiaoTuoguan.visible = !1,
        this.tuoguan.visible = !1,
        this.changguan.text = "",
        this.juhao.text = "",
        this.tishi.visible = !1,
        this.tishi.includeInLayout = !1,
        this.myUser.loadMyHead(),
        this.myUser.closeJd(),
        this.leftUser.closeJd(),
        this.rightUser.closeJd(),
        this.myUser.setTip(0),
        this.myTakeCardUI.setTip(0),
        this.leftUser.setTip(0),
        this.leftTakeCardUI.setTip(0),
        this.rightUser.setTip(0),
        this.rightTakeCardUI.setTip(0),
        this.myCardPanel.clearAllCard(),
        this.myUser.closeClock(),
        this.leftUser.closeClock(),
        this.rightUser.closeClock(),
        this.myTakeCardUI.clearCard(),
        this.rightTakeCardUI.clearCard(),
        this.leftTakeCardUI.clearCard(),
        this.rightTakeCardUI.scaleX = 1,
        this.rightTakeCardUI.scaleY = 1,
        this.leftTakeCardUI.scaleX = 1,
        this.leftTakeCardUI.scaleY = 1,
        this.leftTakeCardUI.left = 373,
        this.rightTakeCardUI.right = 373,
        GameData.ins.dealEnd = !1,
        GameMotion.instance().clearQGFG(),
        this.HIDE_WAIT(),
        this.btnChat.visible = !1,
        this.ybqButton.visible = !1,
        this.gameYbqButtonV = !1,
        GameData.ins.preDiscards = [],
        GameData.ins.preDiscardSit = -1,
        0 == t ? this.startButton.visible = !0 : this.startButton.visible = !1,
        this.resultUI && this.resultUI.parent && this.resultUI.close();
        for (var e = 0; e < PDKParems.ins.roomList.length; e++) {
            var i = PDKParems.ins.roomList[e];
            PDKParems.ins.roomId == i.id && (GameData.ins.roomData = i)
        }
        this.changguan.text = this.roomIDtoSource(PDKParems.ins.roomId) + " 底" + ChipUtils.formatCoin(Number(GameData.ins.roomData.baseScore)),
        this.addChild(MessageUI.ins)
    }
    ,
    e.prototype.showLoadingTip = function() {
        this.initData(),
        this.startButton.visible = !1,
        null == this.loadingTip ? this.loadingTip = new LoadingTip : this.loadingTip.onShow(),
        this.addChild(this.loadingTip)
    }
    ,
    e.prototype.roomIDtoSource = function(t) {
        var e = "入";
        return 1 == t ? e = "入" : 2 == t ? e = "初" : 3 == t ? e = "中" : 4 == t ? e = "高" : 5 == t ? e = "顶" : 6 == t && (e = "至"),
        e
    }
    ,
    e.prototype.onBack = function() {
        1 == GameData.ins.allowedToQuit ? ViewManager.ins.hideGameVie() : TipsUtils.showTipsDownToUp("游戏中不能退出牌桌。")
    }
    ,
    e.prototype.setSy = function() {
        this.bYinyue = !this.bYinyue,
        this.bYinyue ? this.syButton.icon = "syk_png" : this.syButton.icon = "syg_png",
        SoundManager.getInstance().setBgOn(this.bYinyue),
        SoundManager.getInstance().setEffectOn(this.bYinyue)
    }
    ,
    e.prototype.showRule = function() {
        ViewManager.ins.showRuleView()
    }
    ,
    e.prototype.showSet = function() {
        0 == this.ruleButton.visible ? (this.ruleButton.visible = !0,
        this.syButton.visible = !0) : (this.ruleButton.visible = !1,
        this.syButton.visible = !1)
    }
    ,
    e.prototype.onStarAni = function(t) {
        null != t.data.touchEnabled && (t.data.touchEnabled = !1),
        null != t.data.touchChildren && (t.data.touchChildren = !1),
        this.animationGroup.addChild(t.data),
        this.animationGroup.touchEnabled = !1,
        this.animationGroup.touchChildren = !1
    }
    ,
    e.prototype.onBuchu = function() {
        this.ybqButton.visible = !1,
        RoomSocketSender.instance().ReqDiscard(0, [])
    }
    ,
    e.prototype.onTishi = function() {
        1 == GameData.ins.tipType ? GameData.ins.tipCards.length > 0 ? 1 == GameData.ins.tipCards.length ? 0 == GameData.ins.tipCardTyp ? (this.myCardPanel.setHandTipCards(GameData.ins.tipCards[0]),
        GameData.ins.tipCardTyp = -1) : (GameData.ins.tipCardTyp = 0,
        this.myCardPanel.downAllCard()) : (this.myCardPanel.setHandTipCards(GameData.ins.tipCards[GameData.ins.tipCardTyp]),
        GameData.ins.tipCardTyp < GameData.ins.tipCards.length - 1 ? GameData.ins.tipCardTyp++ : GameData.ins.tipCardTyp = 0) : TipsUtils.showTipsDownToUp("对不起，您没有能大过上家的牌。") : GameData.ins.tipCards.length > 0 && (1 == GameData.ins.tipCards.length ? 0 == GameData.ins.tipCardTyp ? (this.myCardPanel.setHandTipCards(GameData.ins.tipCards[0]),
        GameData.ins.tipCardTyp = -1) : (GameData.ins.tipCardTyp = 0,
        this.myCardPanel.downAllCard()) : (this.myCardPanel.setHandTipCards(GameData.ins.tipCards[GameData.ins.tipCardTyp]),
        GameData.ins.tipCardTyp < GameData.ins.tipCards.length - 1 ? GameData.ins.tipCardTyp++ : GameData.ins.tipCardTyp = 0))
    }
    ,
    e.prototype.onTuoguan = function() {
        RoomSocketSender.instance().ReqTrust(0)
    }
    ,
    e.prototype.onQxiaoTuoguan = function() {
        RoomSocketSender.instance().ReqTrust(1)
    }
    ,
    e.prototype.onChupai = function() {
        var t = this.myCardPanel.getUpCard();
        if (-1 == t[1])
            return void TipsUtils.showTipsDownToUp("对不起您的出牌不合法！");
        if (1 == GameData.ins.tipType)
            if (GameData.ins.tipCards.length > 0) {
                for (var e = GameTool.GetTipCards(GameData.ins.preDiscards, t[0]), i = 0; i < e.length; i++)
                    for (var s = e[i], a = 0; a < s.length; a++)
                        s[a] = GameTool.tranToClByCard(s[a]);
                e.length >= 1 && Utils.arrayIsEqu(t[0], e) ? (this.takeCardGroup.visible = !1,
                RoomSocketSender.instance().ReqDiscard(t[1], t[0])) : TipsUtils.showTipsDownToUp("对不起，您出的牌型不正确！")
            } else
                TipsUtils.showTipsDownToUp("对不起，您没有能大过上家的牌。");
        else
            this.takeCardGroup.visible = !1,
            RoomSocketSender.instance().ReqDiscard(t[1], t[0])
    }
    ,
    e.prototype.ENTER_ROOMFAIL = function() {
        this.myUser.initMyData()
    }
    ,
    e.prototype.ENTER_ROOM = function() {
        this.initData(!0),
        this.startButton.visible = !1
    }
    ,
    e.prototype.READY = function(t) {
        var e = t.data;
        1 == e.status && (GameData.ins.type = 3)
    }
    ,
    e.prototype.HIDE_WAIT = function() {
        this.loadingTip && this.loadingTip.onClose()
    }
    ,
    e.prototype.LEAVE_ROOM = function(t) {
        t.data;
        this.resultUI && this.resultUI.parent && this.resultUI.parent.removeChild(this.resultUI),
        this.onClose()
    }
    ,
    e.prototype.onClose = function() {
        this.parent && this.parent.removeChild(this)
    }
    ,
    e.prototype.NOT_CHAIR = function(t) {
        var e = t.data;
        this.ybqButton.visible = !1,
        this.gameYbqButtonV = !1,
        e.chair.seatNo == GameData.ins.seatNo && (GameData.ins.type = e.type,
        4 == e.type ? (this.myUser.setTip(4),
        this.quxiaoTuoguan.visible = !0,
        this.tuoguan.visible = !1,
        this.tuoguanGroup.visible = !0) : (this.myUser.setTip(0),
        this.quxiaoTuoguan.visible = !1,
        this.tuoguan.visible = !0,
        this.tuoguanGroup.visible = !1))
    }
    ,
    e.prototype.showChat = function() {
        this.chatUI || (this.chatUI = new GameChatUI),
        this.addChild(this.chatUI),
        this.chatUI.x = Utils.curWidth - this.chatUI.width - 20,
        this.chatUI.y = Utils.curHeight - this.chatUI.height - 30,
        this.chatUI.visible = !1,
        this.btnChat.visible = !0
    }
    ,
    e.prototype.onChat = function(t) {
        t.data[0],
        t.data[1];
        this.chatUI && (this.chatUI.visible = !1)
    }
    ,
    e.prototype.onShowchat = function() {
        this.chatUI && (this.chatUI.visible = !0)
    }
    ,
    e.prototype.onTouchGameStage = function(t) {
        t.target instanceof BaseButton || this.myCardPanel.stageTapHandler(t)
    }
    ,
    e.prototype.ENTER_TABLE = function(t) {
        for (var e = (t.data,
        []), i = [], s = 0; s < GameData.ins.table.chairs.length; s++) {
            var a = GameData.ins.table.chairs[s];
            a && a.seatNo == GameData.ins.seatNo ? (0 == a.status && RoomSocketSender.instance().ReqReady(1),
            this.myUser.initMyData(a.user),
            null != a.cards && void 0 != a.cards && 0 != a.cards.length && (GameData.ins.myCards = a.cards,
            1 == GameData.ins.myCards.length ? this.myUser.showJd() : this.myUser.closeJd(),
            this.myCardPanel.setHandCardInfor(a.cards),
            GameData.ins.dealEnd = !0),
            2 == a.status ? (this.myUser.setTip(4),
            this.quxiaoTuoguan.visible = !0,
            this.tuoguan.visible = !1,
            this.tuoguanGroup.visible = !0,
            GameData.ins.type = 4) : (this.myUser.setTip(0),
            0 != a.status && (this.quxiaoTuoguan.visible = !1,
            this.tuoguan.visible = !0),
            this.tuoguanGroup.visible = !1,
            GameData.ins.type = 1),
            a.discard && a.discard.length > 0 && this.myTakeCardUI.showTakeCard(a.discard, -1)) : a && a.seatNo == (GameData.ins.seatNo + 1) % 3 ? (this.rightUser.initData(a.user),
            null != a.cards && void 0 != a.cards && 0 != a.cards.length ? (GameData.ins.rightCards = a.cards,
            1 == GameData.ins.rightCards.length ? this.rightUser.showJd() : this.rightUser.closeJd(),
            this.rightCardLable.text = GameData.ins.rightCards.length + "",
            0 == GameData.ins.rightCards.length ? this.rightCardNum.visible = !1 : this.rightCardNum.visible = !0) : 1 == a.status && this.rightUser.setTip(1),
            a.discard && a.discard.length > 0 && (i = a.discard,
            this.rightTakeCardUI.showTakeCard(a.discard, -1))) : a && a.seatNo == (GameData.ins.seatNo + 2) % 3 && (this.leftUser.initData(a.user),
            null != a.cards && void 0 != a.cards && 0 != a.cards.length ? (GameData.ins.leftCards = a.cards,
            1 == GameData.ins.leftCards.length ? this.leftUser.showJd() : this.leftUser.closeJd(),
            this.leftCardLable.text = GameData.ins.leftCards.length + "",
            0 == GameData.ins.leftCards.length ? this.leftCardNum.visible = !1 : this.leftCardNum.visible = !0) : 1 == a.status && this.leftUser.setTip(1),
            a.discard && a.discard.length > 0 && (e = a.discard,
            this.leftTakeCardUI.showTakeCard(a.discard, -1)))
        }
        if (-1 != GameData.ins.table.activeSeat)
            if (GameData.ins.nextSeat = GameData.ins.table.activeSeat,
            console.log("断线时间" + GameData.ins.table.remainingTime),
            GameData.ins.countdown = GameData.ins.table.remainingTime,
            GameData.ins.nextSeat == GameData.ins.seatNo)
                if (this.ybqButton.visible = !1,
                this.gameYbqButtonV = !1,
                4 != GameData.ins.type ? this.takeCardGroup.visible = !0 : this.takeCardGroup.visible = !1,
                this.gameButtonV = !0,
                2 == GameData.ins.table.gamePhase ? (GameData.ins.countdown = GameData.ins.table.countdown.discard,
                egret.setTimeout(function() {
                    this.myUser.setClock(GameData.ins.countdown)
                }, this, GameData.ins.table.remainingTime)) : this.myUser.setClock(GameData.ins.countdown),
                this.myTakeCardUI.clearCard(),
                0 != e.length ? (GameData.ins.preDiscards = e,
                GameData.ins.preDiscardSit = (GameData.ins.seatNo + 1) % 3) : 0 != i.length && (GameData.ins.preDiscards = i,
                GameData.ins.preDiscardSit = (GameData.ins.seatNo + 2) % 3),
                0 != GameData.ins.preDiscards.length && (GameData.ins.tipType = 1),
                1 == GameData.ins.tipType) {
                    this.tishi.visible = !0,
                    this.tishi.includeInLayout = !0;
                    var n = GameTool.GetTipCards(GameData.ins.preDiscards, GameData.ins.myCards);
                    if (0 == n.length)
                        GameData.ins.tipCards = [],
                        GameData.ins.tipCards.length = 0,
                        console.log("出牌提示0"),
                        4 != GameData.ins.type ? this.ybqButton.visible = !0 : this.ybqButton.visible = !1,
                        this.gameYbqButtonV = !0,
                        this.takeCardGroup.visible = !1,
                        this.gameButtonV = !1;
                    else {
                        for (var s = 0; s < n.length; s++)
                            for (var o = n[s], r = 0; r < o.length; r++)
                                o[r] = GameTool.tranToClByCard(o[r]);
                        GameData.ins.tipCards = n,
                        GameData.ins.tipCardTyp = 0,
                        this.ybqButton.visible = !1,
                        this.gameYbqButtonV = !1,
                        4 != GameData.ins.type ? this.takeCardGroup.visible = !0 : this.takeCardGroup.visible = !1,
                        this.gameButtonV = !0,
                        console.log("出牌提示3 " + n.length)
                    }
                } else {
                    this.tishi.visible = !1,
                    this.tishi.includeInLayout = !1;
                    var n = GameTool.GetTipCards2(GameData.ins.myCards);
                    if (0 == n.length)
                        GameData.ins.tipCards = [];
                    else {
                        for (var s = 0; s < n.length; s++)
                            for (var o = n[s], r = 0; r < o.length; r++)
                                o[r] = GameTool.tranToClByCard(o[r]);
                        GameData.ins.tipCards = n,
                        GameData.ins.tipCardTyp = 0,
                        console.log("出牌提示3 " + n.length)
                    }
                    console.log("出牌提示2"),
                    this.ybqButton.visible = !1,
                    this.gameYbqButtonV = !1,
                    4 != GameData.ins.type ? this.takeCardGroup.visible = !0 : this.takeCardGroup.visible = !1,
                    this.gameButtonV = !0
                }
            else
                this.takeCardGroup.visible = !1,
                this.gameButtonV = !1,
                GameData.ins.nextSeat == (GameData.ins.seatNo + 1) % 3 ? (2 == GameData.ins.table.gamePhase ? (GameData.ins.countdown = GameData.ins.table.countdown.discard,
                egret.setTimeout(function() {
                    this.rightUser.setClock(GameData.ins.countdown)
                }, this, GameData.ins.table.remainingTime)) : this.rightUser.setClock(GameData.ins.countdown),
                this.rightTakeCardUI.clearCard()) : GameData.ins.nextSeat == (GameData.ins.seatNo + 2) % 3 && (this.leftTakeCardUI.clearCard(),
                2 == GameData.ins.table.gamePhase ? (GameData.ins.countdown = GameData.ins.table.countdown.discard,
                egret.setTimeout(function() {
                    this.leftUser.setClock(GameData.ins.countdown)
                }, this, GameData.ins.table.remainingTime)) : this.leftUser.setClock(GameData.ins.countdown));
        GameData.ins.roundId = GameData.ins.table.roundId,
        this.juhao.text = "局" + GameData.ins.roundId,
        this.leftUser.visible = !0,
        this.rightUser.visible = !0,
        1 == PDKParems.ins.dealCard && (3 != PDKParems.ins.dealData.length || 16 != PDKParems.ins.dealData[0].cards.length || 16 != PDKParems.ins.dealData[1].cards.length || 16 != PDKParems.ins.dealData[2].cards.length ? TipsUtils.showTipsDownToUp("发牌器不合法") : RoomSocketSender.instance().ReqDealCards(PDKParems.ins.dealData))
    }
    ,
    e.prototype.NOT_START = function(t) {
        this.startButton.visible = !1,
        this.leftUser.setTip(0),
        this.leftTakeCardUI.setTip(0),
        this.rightUser.setTip(0),
        this.rightTakeCardUI.setTip(0),
        this.myUser.setTip(0),
        this.myTakeCardUI.setTip(0),
        this.juhao.text = "局" + GameData.ins.roundId
    }
    ,
    e.prototype.NOT_DEAL = function(t) {
        var e = t.data;
        GameData.ins.nextSeat = e.nextSeat,
        e.countdown > GameData.ins.table.countdown.discard && (e.countdown = GameData.ins.table.countdown.discard),
        GameData.ins.countdown = e.countdown,
        GameData.ins.tipType = 0;
        var i = e["seat" + GameData.ins.seatNo]
          , s = e["seat" + (GameData.ins.seatNo + 1) % 3]
          , a = e["seat" + (GameData.ins.seatNo + 1) % 3];
        GameData.ins.myCards = i,
        GameData.ins.rightCards = s,
        GameData.ins.leftCards = a,
        this.animationUI.onStarAnimation(GameData.ins.nextSeat),
        this.animationUI.visible = !0,
        SoundManager.getInstance().playEffect("b_dellCard_mp3")
    }
    ,
    e.prototype.ALL_HAND_CARD_ANI_COM = function() {
        this.ybqButton.visible = !1,
        this.gameYbqButtonV = !1,
        GameData.ins.nextSeat == GameData.ins.seatNo ? (this.takeCardGroup.visible = !0,
        this.tishi.visible = !1,
        this.tishi.includeInLayout = !1,
        this.gameButtonV = !0,
        this.myUser.setClock(GameData.ins.countdown),
        GameMotion.instance().playAnim(0, 12)) : (this.takeCardGroup.visible = !1,
        this.gameButtonV = !1,
        GameData.ins.nextSeat == (GameData.ins.seatNo + 1) % 3 ? (this.rightUser.setClock(GameData.ins.countdown),
        GameMotion.instance().playAnim(1, 12)) : GameData.ins.nextSeat == (GameData.ins.seatNo + 2) % 3 && (this.leftUser.setClock(GameData.ins.countdown),
        GameMotion.instance().playAnim(2, 12)));
        var t = GameTool.GetTipCards2(GameData.ins.myCards);
        if (0 == t.length)
            GameData.ins.tipCards = [];
        else {
            for (var e = 0; e < t.length; e++)
                for (var i = t[e], s = 0; s < i.length; s++)
                    i[s] = GameTool.tranToClByCard(i[s]);
            GameData.ins.tipCards = t,
            GameData.ins.tipCardTyp = 0,
            console.log("出牌提示3 " + t.length)
        }
        this.tuoguan.visible = !0
    }
    ,
    e.prototype.ON_RIGHT_HAND_CARD_SHOW = function() {
        this.rightCardNum.visible = !0,
        this.rightCardLable.text = GameData.ins.rightCards.length + ""
    }
    ,
    e.prototype.ON_LEFT_HAND_CARD_SHOW = function() {
        this.leftCardNum.visible = !0,
        this.leftCardLable.text = GameData.ins.leftCards.length + ""
    }
    ,
    e.prototype.NOT_DISCARD = function(t) {
        var e = t.data;
		var o = new Array();
		        if (e.seatNo !=0){
		            for (i=0;e.discards.length>i;i++){
		            o.push(15&e.discards[i])
		            }
		        }
		        
		        
		        console.log("showwp"+o.join("|"))
        if (GameData.ins.nextSeat = e.nextSeat,
        GameData.ins.countdown = e.countdown,
        0 != e.cardType && e.discards.length > 0 && (e.discards = GameTool.paixu(e.discards, !0),
        GameData.ins.preDiscards = e.discards,
        GameData.ins.preDiscardSit = e.seatNo),
        GameData.ins.preDiscardSit == e.nextSeat ? (this.myUser.setTip(0),
        this.myTakeCardUI.setTip(0),
        this.myTakeCardUI.clearCard(),
        this.rightTakeCardUI.clearCard(),
        this.leftTakeCardUI.clearCard(),
        GameData.ins.tipType = 0) : GameData.ins.tipType = 1,
        this.ybqButton.visible = !0,
        this.gameYbqButtonV = !0,
        GameData.ins.nextSeat == GameData.ins.seatNo)
            if (4 != GameData.ins.type ? this.takeCardGroup.visible = !0 : this.takeCardGroup.visible = !1,
            this.gameButtonV = !0,
            this.myTakeCardUI.clearCard(),
            this.myUser.setClock(e.countdown),
            this.rightUser.closeClock(),
            this.leftUser.closeClock(),
            4 != GameData.ins.type && (this.myUser.setTip(0),
            this.myTakeCardUI.setTip(0)),
            1 == GameData.ins.tipType) {
                this.tishi.visible = !0,
                this.tishi.includeInLayout = !0;
                var i = GameTool.GetTipCards(GameData.ins.preDiscards, GameData.ins.
