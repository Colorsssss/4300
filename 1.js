var aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa;
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
                var i = GameTool.GetTipCards(GameData.ins.preDiscards, GameData.ins.myCards);
                if (0 == i.length)
                    GameData.ins.tipCards = [],
                    GameData.ins.tipCards.length = 0,
                    console.log("出牌提示0"),
                    4 != GameData.ins.type ? this.ybqButton.visible = !0 : this.ybqButton.visible = !0,
                    this.gameYbqButtonV = !0,
                    this.takeCardGroup.visible = !1,
                    this.gameButtonV = !1;
                else {
                    for (var s = 0; s < i.length; s++)
                        for (var a = i[s], n = 0; n < a.length; n++)
                            a[n] = GameTool.tranToClByCard(a[n]);
                    GameData.ins.tipCards = i,
                    GameData.ins.tipCardTyp = 0,
                    this.ybqButton.visible = !0,
                    this.gameYbqButtonV = !0,
                    4 != GameData.ins.type ? this.takeCardGroup.visible = !0 : this.takeCardGroup.visible = !1,
                    this.gameButtonV = !0,
                    console.log("出牌提示3 " + i.length)
                }
            } else {
                this.tishi.visible = !1,
                this.tishi.includeInLayout = !1;
                var i = GameTool.GetTipCards2(GameData.ins.myCards);
                if (0 == i.length)
                    GameData.ins.tipCards = [];
                else {
                    for (var s = 0; s < i.length; s++)
                        for (var a = i[s], n = 0; n < a.length; n++)
                            a[n] = GameTool.tranToClByCard(a[n]);
                    GameData.ins.tipCards = i,
                    GameData.ins.tipCardTyp = 0,
                    console.log("出牌提示3 " + i.length)
                }
                console.log("出牌提示2"),
                this.ybqButton.visible = !0,
                this.gameYbqButtonV = !0,
                4 != GameData.ins.type ? this.takeCardGroup.visible = !0 : this.takeCardGroup.visible = !1,
                this.gameButtonV = !0
            }
        else
            this.takeCardGroup.visible = !1,
            this.gameButtonV = !1,
            GameData.ins.nextSeat == (GameData.ins.seatNo + 1) % 3 ? (this.rightUser.setTip(0),
            this.rightTakeCardUI.setTip(0),
            this.rightTakeCardUI.clearCard(),
            this.rightUser.setClock(e.countdown),
            this.myUser.closeClock(),
            this.leftUser.closeClock()) : GameData.ins.nextSeat == (GameData.ins.seatNo + 2) % 3 && (this.leftUser.setTip(0),
            this.leftTakeCardUI.setTip(0),
            this.leftTakeCardUI.clearCard(),
            this.leftUser.setClock(e.countdown),
            this.myUser.closeClock(),
            this.rightUser.closeClock());
        (1 == e.cardType || 2 == e.cardType) && GameTool.GamePlayCardSound(e.cardType, e.discards),
        e.seatNo == GameData.ins.seatNo ? (GameMotion.instance().playAnim(0, e.cardType),
        this.myTakeCardUI.showTakeCard(e.discards, e.cardType),
        this.myCardPanel.takeCard(e.discards, e.cardType),
        GameData.ins.myCards = e.handCards,
        this.myUser.closeClock(),
        1 == GameData.ins.myCards.length ? this.myUser.showJd() : this.myUser.closeJd(),
        4 != GameData.ins.type && (0 == e.cardType ? Math.random() > .5 ? this.myTakeCardUI.setTip(2, !0) : this.myTakeCardUI.setTip(3, !0) : (this.myUser.setTip(0),
        this.myTakeCardUI.setTip(0)))) : e.seatNo == (GameData.ins.seatNo + 1) % 3 ? (GameMotion.instance().playAnim(1, e.cardType),
        this.rightTakeCardUI.showTakeCard(e.discards, e.cardType),
        GameData.ins.rightCards = e.handCards,
        1 == GameData.ins.rightCards.length ? this.rightUser.showJd() : this.rightUser.closeJd(),
        this.rightUser.closeClock(),
        this.rightCardLable.text = GameData.ins.rightCards.length + "",
        0 == GameData.ins.rightCards.length ? this.rightCardNum.visible = !1 : this.rightCardNum.visible = !0,
        0 == e.cardType ? Math.random() > .5 ? this.rightTakeCardUI.setTip(2) : this.rightTakeCardUI.setTip(3) : (this.rightUser.setTip(0),
        this.rightTakeCardUI.setTip(0))) : e.seatNo == (GameData.ins.seatNo + 2) % 3 && (GameMotion.instance().playAnim(2, e.cardType),
        this.leftTakeCardUI.showTakeCard(e.discards, e.cardType),
        GameData.ins.leftCards = e.handCards,
        1 == GameData.ins.leftCards.length ? this.leftUser.showJd() : this.leftUser.closeJd(),
        this.leftUser.closeClock(),
        this.leftCardLable.text = GameData.ins.leftCards.length + "",
        0 == GameData.ins.leftCards.length ? this.leftCardNum.visible = !1 : this.rightCardNum.visible = !0,
        0 == e.cardType ? Math.random() > .5 ? this.leftTakeCardUI.setTip(2) : this.leftTakeCardUI.setTip(3) : (this.leftUser.setTip(0),
        this.leftTakeCardUI.setTip(0)))
    }
    ,
    e.prototype.NOT_SHOWCARD = function(t) {
        var e = t.data;
        this.leftCardNum.visible = !1,
        this.rightCardNum.visible = !1,
        this.leftTakeCardUI.left = 254,
        this.rightTakeCardUI.right = 254;
        for (var i = 0; i < e.cards.length; i++) {
            var s = e.cards[i];
            s.seatNo == GameData.ins.seatNo || (s.seatNo == (GameData.ins.seatNo + 1) % 3 && s.handCards.length > 0 ? (this.rightTakeCardUI.clearCard(),
            this.rightTakeCardUI.showTakeCard(s.handCards, -1),
            this.rightTakeCardUI.scaleX = .6,
            this.rightTakeCardUI.scaleY = .6) : s.seatNo == (GameData.ins.seatNo + 2) % 3 && s.handCards.length > 0 && (this.leftTakeCardUI.clearCard(),
            this.leftTakeCardUI.showTakeCard(s.handCards, -1),
            this.leftTakeCardUI.scaleX = .6,
            this.leftTakeCardUI.scaleY = .6))
        }
    }
    ,
    e.prototype.NOT_SETTLE = function(t) {
        var e = t.data;
        if (1 == e.gameOver) {
            this.myUser.closeClock(),
            this.leftUser.closeClock(),
            this.rightUser.closeClock(),
            this.leftUser.setTip(0),
            this.leftTakeCardUI.setTip(0),
            this.rightUser.setTip(0),
            this.rightTakeCardUI.setTip(0),
            this.myUser.setTip(0),
            this.myTakeCardUI.setTip(0),
            GameData.ins.preDiscards = [],
            GameData.ins.preDiscardSit = -1,
            RoomSocketSender.instance().ReqLeaveTable(),
            GameData.ins.ResultData = e;
            for (var i = 0; i < GameData.ins.ResultData.userBills.length; i++) {
                var s = GameData.ins.ResultData.userBills[i];
                s.seatNo == GameData.ins.seatNo ? (1 == s.allOff ? GameMotion.instance().playAnim(0, 13) : -1 == s.allOff && GameMotion.instance().playAnim(0, 14),
                PDKParems.ins.goldCoin = Number(s.chips),
                this.myUser.setGoldCoin(s.chips),
                RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.NOT_CURRENCY,null))) : s.seatNo == (GameData.ins.seatNo + 1) % 3 ? (1 == s.allOff ? GameMotion.instance().playAnim(1, 13) : -1 == s.allOff && GameMotion.instance().playAnim(1, 14),
                this.rightUser.setGoldCoin(Number(s.chips))) : s.seatNo == (GameData.ins.seatNo + 2) % 3 && (1 == s.allOff ? GameMotion.instance().playAnim(2, 13) : -1 == s.allOff && GameMotion.instance().playAnim(2, 14),
                this.leftUser.setGoldCoin(Number(s.chips)))
            }
            egret.setTimeout(function() {
                this.showResult()
            }, this, 1500)
        }
    }
    ,
    e.prototype.showResult = function() {
        this.tuoguanGroup.visible = !1,
        this.quxiaoTuoguan.visible = !1,
        this.tuoguan.visible = !1,
        null == this.resultUI ? this.resultUI = new GameResultUI(GameData.ins.ResultData) : this.resultUI.initData(GameData.ins.ResultData),
        this.addChild(this.resultUI),
        GameData.ins.allowedToQuit = !0
    }
    ,
    e.prototype.NOT_BALANCE = function(t) {}
    ,
    e.prototype.NOT_CHAT = function(t) {
        var e = t.data[0]
          , i = t.data[1];
        this.chatUI && (this.chatUI.visible = !1),
        i == GameData.ins.seatNo && (e.indexOf("vip_") > -1 ? this.myUser.showBq(e) : this.myUser.showChat(e))
    }
    ,
    e.prototype.TRUST = function(t) {
        var e = t.data;
        1 == e.status ? (GameData.ins.type = 5,
        this.myUser.setTip(0),
        this.myTakeCardUI.setTip(0),
        this.quxiaoTuoguan.visible = !1,
        this.tuoguan.visible = !0,
        this.tuoguanGroup.visible = !1,
        this.ybqButton.visible = this.gameYbqButtonV,
        this.takeCardGroup.visible = this.gameButtonV,
        GameData.ins.nextSeat == GameData.ins.seatNo) : (GameData.ins.type = 4,
        this.takeCardGroup.visible = !1,
        this.ybqButton.visible = !1,
        this.myUser.setTip(4),
        this.quxiaoTuoguan.visible = !0,
        this.tuoguan.visible = !1,
        this.tuoguanGroup.visible = !0)
    }
    ,
    e.prototype.onResize = function() {
        this.width = Utils.curWidth,
        this.height = Utils.curHeight,
        this.chatUI && (this.chatUI.x = Utils.curWidth - this.chatUI.width - 20,
        this.chatUI.y = Utils.curHeight - this.chatUI.height - 30)
    }
    ,
    e.prototype.onStartGame = function() {
        if (PDKParems.ins.goldCoin < GameData.ins.roomData.limit[0])
            return void TipsUtils.showTipsDownToUp("您当前余额低于此房间限制。");
        if (PDKParems.ins.goldCoin > GameData.ins.roomData.limit[1])
            return void TipsUtils.showTipsDownToUp("您当前余额高于此房间限制。");
        this.startButton.visible = !1,
        this.showLoadingTip();
        var t = Math.floor((PDKParems.ins.aniTimeMax - PDKParems.ins.aniTimeMin) * Math.random()) + PDKParems.ins.aniTimeMin;
        egret.setTimeout(function() {
            RoomSocketSender.instance().ReqEnterRoom(PDKParems.ins.roomId, PDKParems.ins.mapId, "")
        }, this, t)
    }
    ,
    e.prototype.NOT_CURRENCY = function() {
        this.myUser && this.myUser.updataCoin()
    }
    ,
    e
}(eui.Component);
__reflect(GameView.prototype, "GameView", ["eui.UIComponent", "egret.DisplayObject"]);
var AnimationType = function() {
    function t() {}
    return t.Three = 5,
    t.ThreeAndOne = 7,
    t.ThreeAndTwo = 8,
    t.FourWithThree = 10,
    t.Shunza = 3,
    t.Coupling = 4,
    t.ThreeList = 6,
    t.Feiji = 9,
    t.Bomb = 11,
    t.FirstSit = 12,
    t.AllOff = 13,
    t.ReOff = 14,
    t
}();
__reflect(AnimationType.prototype, "AnimationType");
var DealCardUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.choseType = 0,
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
        this.stage.addEventListener(egret.Event.RESIZE, this.onResize, this),
        this.guanbi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onguanbi, this),
        this.chongzhi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onInit, this),
        this.kaiguan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onKG, this),
        this.text0Lable.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChose0, this),
        this.text1Lable.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChose1, this),
        this.text2Lable.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChose2, this),
        this.allCard.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAllcard, this),
        this.card0Group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCard0Group, this),
        this.card1Group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCard1Group, this),
        this.card2Group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCard2Group, this),
        0 == PDKParems.ins.dealCard ? this.kaiguan.text = "当前状态：关闭" : this.kaiguan.text = "当前状态:打开",
        this.onInit()
    }
    ,
    e.prototype.onResize = function() {
        this.width = Utils.curWidth,
        this.height = Utils.curHeight
    }
    ,
    e.prototype.onCard0Group = function(t) {
        if (t.target instanceof Cards) {
            var e = t.target;
            this.allCard.addChild(e),
            this.paixuGroup(this.allCard),
            this.paixuGroup(this.card0Group),
            this.paixuGroup(this.card1Group),
            this.paixuGroup(this.card2Group),
            this.onCreatData()
        }
    }
    ,
    e.prototype.onCard1Group = function(t) {
        if (t.target instanceof Cards) {
            var e = t.target;
            this.allCard.addChild(e),
            this.paixuGroup(this.allCard),
            this.paixuGroup(this.card0Group),
            this.paixuGroup(this.card1Group),
            this.paixuGroup(this.card2Group),
            this.onCreatData()
        }
    }
    ,
    e.prototype.onCard2Group = function(t) {
        if (t.target instanceof Cards) {
            var e = t.target;
            this.allCard.addChild(e),
            this.paixuGroup(this.allCard),
            this.paixuGroup(this.card0Group),
            this.paixuGroup(this.card1Group),
            this.paixuGroup(this.card2Group),
            this.onCreatData()
        }
    }
    ,
    e.prototype.onAllcard = function(t) {
        if (t.target instanceof Cards) {
            var e = t.target;
            0 == this.choseType ? this.card0Group.numChildren < 16 && (e.x = 60 * this.card0Group.numChildren,
            this.card0Group.addChild(e)) : 1 == this.choseType ? this.card1Group.numChildren < 16 && (e.x = 60 * this.card1Group.numChildren,
            this.card1Group.addChild(e)) : 2 == this.choseType && this.card2Group.numChildren < 16 && (e.x = 60 * this.card2Group.numChildren,
            this.card2Group.addChild(e)),
            this.paixuGroup(this.allCard),
            this.paixuGroup(this.card0Group),
            this.paixuGroup(this.card1Group),
            this.paixuGroup(this.card2Group),
            this.onCreatData()
        }
    }
    ,
    e.prototype.paixuGroup = function(t) {
        for (var e = [], i = 0; i < t.numChildren; i++) {
            var s = t.getChildAt(i);
            e.push(s)
        }
        if (0 != e.length) {
            GameTool.paixuByui(e);
            for (var i = 0; i < e.length; i++)
                e[i].x = 60 * i,
                t.addChild(e[i])
        }
    }
    ,
    e.prototype.onCreatData = function() {
        var t = []
          , e = new AppointCard;
        e.seatNo = 0,
        e.cards = [];
        for (var i = 0; i < this.card0Group.numChildren; i++) {
            var s = this.card0Group.getChildAt(i);
            e.cards.push(s.value)
        }
        var a = new AppointCard;
        a.seatNo = 1,
        a.cards = [];
        for (var i = 0; i < this.card1Group.numChildren; i++) {
            var s = this.card1Group.getChildAt(i);
            a.cards.push(s.value)
        }
        var n = new AppointCard;
        n.seatNo = 2,
        n.cards = [];
        for (var i = 0; i < this.card2Group.numChildren; i++) {
            var s = this.card2Group.getChildAt(i);
            n.cards.push(s.value)
        }
        t.push(e),
        t.push(a),
        t.push(n),
        PDKParems.ins.dealData = t
    }
    ,
    e.prototype.onChose1 = function() {
        this.choseType = 1
    }
    ,
    e.prototype.onChose2 = function() {
        this.choseType = 2
    }
    ,
    e.prototype.onChose0 = function() {
        this.choseType = 0
    }
    ,
    e.prototype.onKG = function() {
        0 == PDKParems.ins.dealCard ? (PDKParems.ins.dealCard = !0,
        this.kaiguan.text = "当前状态：打开") : (PDKParems.ins.dealCard = !1,
        this.kaiguan.text = "当前状态:关闭")
    }
    ,
    e.prototype.onInit = function() {
        this.card0Group.removeChildren(),
        this.card1Group.removeChildren(),
        this.card2Group.removeChildren(),
        this.allCard.removeChildren();
        for (var t = this.careatAllCard(), e = 0; e < t.length; e++) {
            var i = new Cards(t[e],0);
            i.x = 60 * e,
            i.y = 0,
            this.allCard.addChild(i)
        }
        this.paixuGroup(this.allCard)
    }
    ,
    e.prototype.onguanbi = function() {
        this.parent && this.parent.removeChild(this)
    }
    ,
    e.prototype.careatAllCard = function() {
        for (var t = [], e = 1; 4 >= e; e++)
            for (var i = 1; 13 >= i; i++) {
                var s = Utils.Card(e, i);
                17 != s && 34 != s && 50 != s && 66 != s && t.push(s)
            }
        return t
    }
    ,
    e
}(eui.Component);
__reflect(DealCardUI.prototype, "DealCardUI", ["eui.UIComponent", "egret.DisplayObject"]);
var GameChatUI = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.partAdded = function(e, i) {
        t.prototype.partAdded.call(this, e, i)
    }
    ,
    e.prototype.childrenCreated = function() {
        var e = this;
        t.prototype.childrenCreated.call(this),
        this.name = "gameChatUiTemp",
        this.gTab.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTabClick, this),
        this.bgRect.addEventListener(egret.TouchEvent.TOUCH_END, this.onbgRectClick, this),
        this.addChild(GameChatBrow.inc()),
        GameChatBrow.inc().visible = !0,
        GameChatBrow.inc().x = 97,
        GameChatBrow.inc().y = 51,
        GameChatBrow.inc().scaleX = GameChatBrow.inc().scaleY = .6;
        var i = RES.getRes("chat_kj_json");
        if (null != i)
            for (var s = 0; s < i.length; s++) {
                var a = new eui.Group
                  , n = new eui.Label;
                n.width = 333,
                n.size = 24,
                n.text = i[s].t1,
                n.textColor = 13199920,
                n.x = 10,
                a.addChild(n);
                var o = Utils.createBitmapByName("chatline_png");
                a.addChild(o),
                o.y = n.y + n.height,
                this.kjGroup.addChild(a)
            }
        this.kjScroll.visible = !1,
        this.kjGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickKj, this),
        RoomEventDispatcher.getInstance().addEventListener("GAME_SHOW", function() {
            e.kjScroll.visible = !1,
            e.icon_face.source = "icon_faceSelect_png",
            e.icon_kj.source = "icon_kj_png"
        }, this)
    }
    ,
    e.prototype.onbgRectClick = function(t) {
        this.onHideChat()
    }
    ,
    e.prototype.onHideChat = function() {
        this.visible = !1
    }
    ,
    e.prototype.onSendMsg = function() {}
    ,
    e.prototype.onFocusOut = function() {
        window.setDivTop()
    }
    ,
    e.prototype.onClickKj = function(t) {
        var e = t.target.text;
        e && RoomSocketSender.instance().ReqChat(e)
    }
    ,
    e.prototype.onTabClick = function(t) {
        this.icon_face.source = "icon_face_png",
        this.icon_kj.source = "icon_kj_png",
        t.target.source = t.target.name + "Select_png",
        GameChatBrow.inc().visible = !1,
        this.tipsScroll.visible = !1,
        this.kjScroll.visible = !1,
        "icon_chat" == t.target.name && (this.tipsScroll.visible = !0),
        "icon_face" == t.target.name && (GameChatBrow.inc().visible = !0),
        "icon_kj" == t.target.name && (this.kjScroll.visible = !0)
    }
    ,
    e.prototype.addMsg = function(t, e) {
        var i = new eui.Label;
        i.width = 280,
        i.textFlow = [{
            text: "[" + e + "]:",
            style: {
                textColor: 13199920,
                size: 20
            }
        }, {
            text: t,
            style: {
                textColor: 13199920,
                size: 20
            }
        }],
        this.tipsGroup.addChild(i),
        this.tipsScroll.viewport.validateNow(),
        this.tipsScroll.viewport.contentHeight > this.tipsScroll.viewport.height && (this.tipsScroll.viewport.scrollV = this.tipsScroll.viewport.contentHeight - this.tipsScroll.viewport.height)
    }
    ,
    e
}(eui.Component);
__reflect(GameChatUI.prototype, "GameChatUI", ["eui.UIComponent", "egret.DisplayObject"]);
var GameClock = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.r = 0,
        e.angle = 360,
        e.nCount = 0,
        e
    }
    return __extends(e, t),
    e.prototype.partAdded = function(e, i) {
        t.prototype.partAdded.call(this, e, i)
    }
    ,
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this.timer = new egret.Timer(1e3),
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onStartTimer, this),
        this.shape = new egret.Shape,
        this.shape.rotation = -90,
        this.addChild(this.shape),
        this.maskQ.mask = this.shape,
        this.shape.x = 57,
        this.shape.y = 57,
        this.r = 81,
        this.setTime()
    }
    ,
    e.prototype.startClock = function(t) {
        void 0 != t && (this.timer.stop(),
        this.timer.reset(),
        this.visible = !0,
        this.nCount = t,
        this.timer.repeatCount = t,
        this.timer.start(),
        this.clockText.text = 10 > t ? "0" + t.toString() : t.toString())
    }
    ,
    e.prototype.onStartTimer = function(t) {
        this.nCount > 0 ? (this.nCount -= 1,
        this.clockText.text = this.nCount < 10 ? "0" + this.nCount.toString() : this.nCount.toString()) : (this.timer.stop(),
        this.timer.reset())
    }
    ,
    e.prototype.stopClock = function() {
        this.timer.stop(),
        this.timer.reset()
    }
    ,
    e.prototype.setTime = function() {
        this.shape.graphics.clear(),
        this.shape.graphics.beginFill(65535, 1),
        this.shape.graphics.lineTo(this.r, 0),
        this.shape.graphics.drawArc(0, 0, this.r, 0, this.angle * Math.PI / 180, !0),
        this.shape.graphics.lineTo(0, 0),
        this.shape.graphics.endFill()
    }
    ,
    e
}(eui.Component);
__reflect(GameClock.prototype, "GameClock", ["eui.UIComponent", "egret.DisplayObject"]);
var GameResultUI = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        return i.cardLength0 = 0,
        i.cardLength1 = 1,
        i.cardLength2 = 2,
        i.nResultCoin = 0,
        i.data = e,
        i
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
        this.stage.addEventListener(egret.Event.RESIZE, this.onResize, this),
        this.returnButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReturn, this),
        this.juxuButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onJixu, this),
        this.huanzButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onJixu, this),
        this.btnByb.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOpenByb, this),
        this.winDisplay = DragonBonesFactoryUtils.instance().getFactoryByName("pdkshengli"),
        this.loseDisplay = DragonBonesFactoryUtils.instance().getFactoryByName("pdkshibai"),
        this.aniGruup.addChild(this.winDisplay),
        this.aniGruup.addChild(this.loseDisplay),
        this.winDisplay.visible = !1,
        this.loseDisplay.visible = !1,
        this.initData(this.data)
    }
    ,
    e.prototype.initData = function(t) {
        this.data = t,
        this.zd.text = "0",
        this.zd1.text = "0",
        this.zd2.text = "0";
        var e = 0
          , i = 0
          , s = 0;
        this.btnByb.visible = !1,
        PDKParems.ins.isShowCoin ? this.jbimage.source = "jbz_png" : this.jbimage.source = "shuying_png";
        for (var a = 0; a < this.data.panBills.length; a++) {
            var n = this.data.panBills[a];
            n.seatNo == GameData.ins.seatNo ? 1 == n.billType && Number(n.changeChips) > 0 && e++ : n.seatNo == (GameData.ins.seatNo + 1) % 3 ? 1 == n.billType && Number(n.changeChips) > 0 && i++ : n.seatNo == (GameData.ins.seatNo + 2) % 3 && 1 == n.billType && Number(n.changeChips) > 0 && s++
        }
        this.zd.text = "" + e,
        this.zd1.text = i + "",
        this.zd2.text = s + "",
        1 == PDKParems.ins.isSoundLoad && (SoundManager.getInstance().setBgVolume(0),
        egret.setTimeout(function() {
            SoundManager.getInstance().setBgVolume(.3)
        }, this, 6500));
        for (var o = 0; o < this.data.userBills.length; o++) {
            var r = this.data.userBills[o];
            r.seatNo == GameData.ins.seatNo ? (this.id0.text = PDKParems.ins.nickName,
            this.yp.text = r.handCards.length + "",
            1 == r.allOff || -1 == r.allOff || 2 == r.allOff ? (1 == r.allOff ? (this.qg.source = "qg_png",
            this.ypx.visible = !0) : -1 == r.allOff ? (this.qg.source = "fg_png",
            this.ypx.visible = !0) : 2 == r.allOff && (this.qg.source = "bptip_png",
            this.ypx.visible = !1),
            this.qg.visible = !0) : (this.qg.visible = !1,
            this.ypx.visible = !1),
            r.changeChips > 0 ? (this.jb.text = "+" + ChipUtils.formatCoin(r.changeChips),
            this.jb.textColor = 16773120,
            this.nResultCoin = r.changeChips,
            this.checkBYB(),
            this.winDisplay.visible = !0,
            this.loseDisplay.visible = !1,
            this.winDisplay.animation.gotoAndPlayByFrame("pdkshengli", 0, 0),
            SoundManager.getInstance().playEffect("b_win_mp3")) : (this.jb.text = ChipUtils.formatCoin(r.changeChips) + "",
            this.jb.textColor = 16777215,
            this.winDisplay.visible = !1,
            this.loseDisplay.visible = !0,
            this.loseDisplay.animation.gotoAndPlayByFrame("pdkshibai", 0, 0),
            SoundManager.getInstance().playEffect("b_lose_mp3")),
            this.cardLength0 = r.handCards.length) : r.seatNo == (GameData.ins.seatNo + 1) % 3 ? (this.id1.text = r.nickName,
            this.yp1.text = r.handCards.length + "",
            1 == r.allOff || -1 == r.allOff || 2 == r.allOff ? (1 == r.allOff ? (this.qg1.source = "qg_png",
            this.ypx1.visible = !0) : -1 == r.allOff ? (this.qg1.source = "fg_png",
            this.ypx1.visible = !0) : 2 == r.allOff && (this.qg1.source = "bptip_png",
            this.ypx1.visible = !1),
            this.qg1.visible = !0,
            this.cardLength1 = 2 * r.handCards.length) : (this.qg1.visible = !1,
            this.ypx1.visible = !1,
            this.cardLength1 = r.handCards.length),
            r.changeChips > 0 ? this.jb1.text = "+" + ChipUtils.formatCoin(r.changeChips) : this.jb1.text = ChipUtils.formatCoin(r.changeChips) + "") : r.seatNo == (GameData.ins.seatNo + 2) % 3 && (this.id2.text = r.nickName,
            this.yp2.text = r.handCards.length + "",
            1 == r.allOff || -1 == r.allOff || 2 == r.allOff ? (1 == r.allOff ? (this.qg2.source = "qg_png",
            this.ypx2.visible = !0) : -1 == r.allOff ? (this.qg2.source = "fg_png",
            this.ypx2.visible = !0) : 2 == r.allOff && (this.qg2.source = "bptip_png",
            this.ypx2.visible = !1),
            this.qg2.visible = !0,
            this.cardLength2 = 2 * r.handCards.length) : (this.qg2.visible = !1,
            this.ypx2.visible = !1,
            this.cardLength2 = r.handCards.length),
            r.changeChips > 0 ? this.jb2.text = "+" + ChipUtils.formatCoin(r.changeChips) : this.jb2.text = ChipUtils.formatCoin(r.changeChips) + "")
        }
        this.showHzButton()
    }
    ,
    e.prototype.showHzButton = function() {
        this.juxuButton.visible = !0,
        this.juxuButton.includeInLayout = !0,
        this.huanzButton.visible = !1,
        this.huanzButton.includeInLayout = !1
    }
    ,
    e.prototype.onJixu = function() {
        RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.SHOW_WAIT,null));
        var t = Math.floor((PDKParems.ins.aniTimeMax - PDKParems.ins.aniTimeMin) * Math.random()) + PDKParems.ins.aniTimeMin;
        egret.setTimeout(function() {
            RoomSocketSender.instance().ReqEnterRoom(PDKParems.ins.roomId, PDKParems.ins.mapId, "", !0)
        }, this, t)
    }
    ,
    e.prototype.close = function() {
        this.winDisplay && this.winDisplay.animation.stop(),
        this.loseDisplay && this.loseDisplay.animation.stop(),
        this.parent && this.parent.removeChild(this)
    }
    ,
    e.prototype.onReturn = function() {
        RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.LEAVE_ROOM,null))
    }
    ,
    e.prototype.onResize = function() {
        this.width = Utils.curWidth,
        this.height = Utils.curHeight
    }
    ,
    e.prototype.checkBYB = function() {
        if (PDKParems.ins.arrActive.length > 0 && PDKParems.ins.isActiveLoad)
            for (var t = 0; t < PDKParems.ins.arrActive.length; t++)
                if (994 == PDKParems.ins.arrActive[t].actgameid) {
                    this.btnByb.visible = !0;
                    break
                }
    }
    ,
    e.prototype.onOpenByb = function() {
        this.btnByb.visible = !1,
        PDKParems.ins.isOpenActive = !0;
        try {
            window.openActiveGame(2, GameData.ins.roundId, this.nResultCoin)
        } catch (t) {}
    }
    ,
    e
}(eui.Component);
__reflect(GameResultUI.prototype, "GameResultUI", ["eui.UIComponent", "egret.DisplayObject"]);
var LoadingTip = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.aniTime = 200,
        e.aniPoi = 60,
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
        this.stage.addEventListener(egret.Event.RESIZE, this.onResize, this),
        this.card1.setData(1),
        this.card2.setData(2),
        this.card3.setData(3),
        this.card4.setData(4),
        this.onShow()
    }
    ,
    e.prototype.onResize = function() {
        this.width = Utils.curWidth,
        this.height = Utils.curHeight
    }
    ,
    e.prototype.onShow = function() {
        this.card1.y = 114,
        this.card2.y = 114,
        this.card3.y = 114,
        this.card4.y = 114,
        this.startAni()
    }
    ,
    e.prototype.startAni = function() {
        egret.Tween.get(this.card1).to({
            y: this.aniPoi
        }, this.aniTime, egret.Ease.sineOut).call(function() {
            egret.Tween.get(this.card1).to({
                y: 114
            }, this.aniTime, egret.Ease.sineIn),
            egret.Tween.get(this.card2).to({
                y: this.aniPoi
            }, this.aniTime, egret.Ease.sineOut).call(function() {
                egret.Tween.get(this.card2).to({
                    y: 114
                }, this.aniTime, egret.Ease.sineIn),
                egret.Tween.get(this.card3).to({
                    y: this.aniPoi
                }, this.aniTime, egret.Ease.sineOut).call(function() {
                    egret.Tween.get(this.card3).to({
                        y: 114
                    }, this.aniTime, egret.Ease.sineIn),
                    egret.Tween.get(this.card4).to({
                        y: this.aniPoi
                    }, this.aniTime, egret.Ease.sineOut).call(function() {
                        egret.Tween.get(this.card4).to({
                            y: 114
                        }, this.aniTime, egret.Ease.sineIn),
                        this.startAni()
                    }, this)
                }, this)
            }, this)
        }, this)
    }
    ,
    e.prototype.onClose = function() {
        this.card1 && egret.Tween.removeTweens(this.card1),
        this.card2 && egret.Tween.removeTweens(this.card2),
        this.card3 && egret.Tween.removeTweens(this.card3),
        this.card4 && egret.Tween.removeTweens(this.card4),
        this.parent && this.parent.removeChild(this)
    }
    ,
    e
}(eui.Component);
__reflect(LoadingTip.prototype, "LoadingTip", ["eui.UIComponent", "egret.DisplayObject"]);
var TakeCardAnimationUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.cardRecycling = [],
        e
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
    e.prototype.onStarAnimation = function(t) {
        for (var e = 0; 48 > e; e++) {
            var i = this.createCard();
            i.x = Utils.curWidth / 2,
            i.y = Utils.curHeight / 2,
            this.addChild(i),
            egret.Tween.get(i).to({
                x: 2 * (e - 24) + Utils.curWidth / 2
            }, 200)
        }
        egret.setTimeout(this.onFapai, this, 300)
    }
    ,
    e.prototype.onFapai = function() {
        GameEventDispatcher.getInstance().dispatchEvent(new DateEvent(GameEventDispatcher.ON_MY_HAND_CARD_SHOW,null));
        for (var t = 0; 48 > t; t++) {
            var e = this.getChildAt(47 - t)
              , i = t % 3;
            if (0 == i) {
                var s = 2.5 * (t / 3 - 8) + 1.25
                  , a = 1500 * Math.sin(2 * s * Math.PI / 360) + Utils.curWidth / 2
                  , n = 1500 * -Math.cos(2 * s * Math.PI / 360) + 1600 + Utils.curHeight - 241
                  , o = s;
                egret.Tween.get(e).wait(15 * t).set({
                    source: "cardBgB_png",
                    scaleX: .4,
                    scaleY: .4
                }).to({
                    scaleX: 1,
                    scaleY: 1,
                    x: a,
                    y: n,
                    rotation: o,
                    anchorOffsetX: 105.5,
                    anchorOffsetY: 135
                }, 400).wait(150).call(this.onCurrentCom, this, [e])
            } else
                1 == i ? egret.Tween.get(e).to({
                    x: Utils.curWidth - 236 + e.anchorOffsetX,
                    y: 372 + e.anchorOffsetY
                }, 1120).wait(150).call(this.onRightCom, this, [e]) : 2 == i && egret.Tween.get(e).to({
                    x: 236 + e.anchorOffsetX,
                    y: 372 + e.anchorOffsetY
                }, 1120).wait(150).call(this.onLeftCom, this, [e])
        }
    }
    ,
    e.prototype.onCurrentCom = function(t) {
        this.removeCard(t)
    }
    ,
    e.prototype.onRightCom = function(t) {
        this.removeCard(t),
        GameEventDispatcher.getInstance().dispatchEvent(new DateEvent(GameEventDispatcher.ON_RIGHT_HAND_CARD_SHOW,null))
    }
    ,
    e.prototype.onLeftCom = function(t) {
        this.removeCard(t),
        GameEventDispatcher.getInstance().dispatchEvent(new DateEvent(GameEventDispatcher.ON_LEFT_HAND_CARD_SHOW,null))
    }
    ,
    e.prototype.createCard = function() {
        var t;
        return this.cardRecycling.length > 0 ? t = this.cardRecycling.pop() : (t = new eui.Image,
        t.source = "cardBgS_png"),
        t.rotation = 0,
        t.anchorOffsetX = 43,
        t.anchorOffsetY = 53.5,
        t
    }
    ,
    e.prototype.removeCard = function(t) {
        egret.Tween.removeTweens(t),
        t.y = 0,
        t.x = 0,
        t.scaleX = 1,
        t.scaleY = 1,
        t.alpha = 1,
        t.source = "cardBgS_png",
        t.parent && t.parent.removeChild(t),
        this.cardRecycling.push(t)
    }
    ,
    e
}(eui.Component);
__reflect(TakeCardAnimationUI.prototype, "TakeCardAnimationUI", ["eui.UIComponent", "egret.DisplayObject"]);
var TakeCardUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.takeCardUI = [],
        e.type = 1,
        e.padding = 50,
        e.cardCache = new Array,
        e
    }
    return __extends(e, t),
    e.prototype.partAdded = function(e, i) {
        t.prototype.partAdded.call(this, e, i)
    }
    ,
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this.topTip = new eui.Image,
        this.touchEnabled = !1,
        this.touchChildren = !1,
        this.addChild(this.topTip)
    }
    ,
    e.prototype.showTakeCard = function(t, e) {
        if (this.clearCard(),
        0 != e) {
            SoundManager.getInstance().playEffect("b_takeCard_mp3"),
            t = GameTool.TakeCardPaixu(t, e);
            for (var i = 0; i < t.length; i++) {
                var s = this.getCard(t[i], this.type);
                s.touchEnabled = !1,
                this.takeCardUI.push(s)
            }
            this.setPosition()
        } else
            SoundManager.getInstance().playEffect("b_noCard1_mp3")
    }
    ,
    e.prototype.setTip = function(t, e) {
        void 0 === e && (e = !1),
        1 == e && (this.topTip.x = -12.5),
        0 == t ? this.topTip.source = "" : 1 == t ? this.topTip.source = "" : 2 == t ? this.topTip.source = "ybq_png" : 3 == t ? this.topTip.source = "ybq_png" : 4 == t && (this.topTip.source = "")
    }
    ,
    e.prototype.setPosition = function() {
        for (var t = 0; t < this.takeCardUI.length; t++) {
            var e = this.takeCardUI[t];
            e.x = t * this.padding + e.anchorOffsetX,
            e.y = e.anchorOffsetY,
            this.addChild(e)
        }
    }
    ,
    e.prototype.clearCard = function() {
        for (; this.takeCardUI.length > 0; ) {
            var t = this.takeCardUI.pop();
            t.parent && t.parent.removeChild(t),
            this.setCard(t)
        }
    }
    ,
    e.prototype.getCard = function(t, e) {
        if (void 0 === e && (e = 0),
        this.cardCache.length > 0) {
            var i = this.cardCache.pop();
            return i.setValue(t, e),
            i
        }
        return new Cards(t,e)
    }
    ,
    e.prototype.setCard = function(t) {
        t.parent && t.parent.removeChild(t),
        t.touchEnabled = !1,
        this.cardCache.push(t)
    }
    ,
    e
}(eui.Component);
__reflect(TakeCardUI.prototype, "TakeCardUI", ["eui.UIComponent", "egret.DisplayObject"]);
var UserItem = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.time = 0,
        e.chatTime = 0,
        e
    }
    return __extends(e, t),
    e.prototype.partAdded = function(e, i) {
        t.prototype.partAdded.call(this, e, i)
    }
    ,
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this.topTip.source = "",
        this.clock.visible = !1,
        0 == PDKParems.ins.isTest && (this.headImg.source = ""),
        this.lsprint = new egret.Sprite,
        this.lsprint.x = 72,
        this.lsprint.y = 99,
        this.addChild(this.lsprint),
        this.lsprint.visible = !1;
        var e = new egret.Bitmap;
        this.chatSprit = new egret.Sprite,
        this.chatText = new egret.TextField,
        this.chatText.textColor = 0,
        this.chatText.size = 20,
        this.chatText.x = 5,
        this.chatText.y = 10,
        this.chatText.textAlign = egret.HorizontalAlign.CENTER,
        this.chatText.verticalAlign = egret.VerticalAlign.MIDDLE,
        this.chatSprit.addChild(e),
        this.chatSprit.addChild(this.chatText),
        e.texture = RES.getRes("lts_png"),
        this.chatSprit.y = .7 * -this.chatSprit.height + 10,
        this.chatSprit.x = 30,
        this.chatText.y = 5,
        this.chatText.width = e.width - 20,
        this.chatText.height = e.height - 10,
        this.addChild(this.chatSprit),
        this.chatSprit.visible = !1,
        this.jdDisplay = DragonBonesFactoryUtils.instance().getFactoryByName("baodan"),
        this.jdDisplay.visible = !1,
        this.aniGroup.addChild(this.jdDisplay)
    }
    ,
    e.prototype.initData = function(t) {
        this.jdDisplay.animation.stop(),
        this.jdDisplay.visible = !1,
        t && (this.topTip.source = "",
        t.nickName && (this.nameLable.text = t.nickName),
        t.goldCoin && (this.goldCoinLable.text = ChipUtils.formatCoin(Number(t.goldCoin)) + "",
        this.rmbLable.text = Number(t.goldCoin) / PDKParems.ins.nChange + ""),
        0 == PDKParems.ins.isTest && RES.getResByUrl(PDKParems.ins.headURL + "iconHead" + Utils.getHeadByName(t.nickName) + ".png", function(t) {
            this.headImg.source = t
        }, this))
    }
    ,
    e.prototype.setTip = function(t) {
        0 == t ? this.topTip.source = "" : 1 == t ? this.topTip.source = "yzb_png" : 2 == t ? this.topTip.source = "ybq_png" : 3 == t ? this.topTip.source = "ybq_png" : 4 == t && (this.topTip.source = "")
    }
    ,
    e.prototype.showBq = function(t) {
        var e = this;
        egret.clearTimeout(this.time),
        this.l && this.l.parent && this.lsprint.removeChild(this.l),
        this.lsprint.visible = !0;
        var i = new egret.MovieClipDataFactory(RES.getRes("chat_json"),RES.getRes("chat_png"));
        this.l = new egret.MovieClip(i.generateMovieClipData("dd")),
        this.lsprint.addChild(this.l),
        this.l.gotoAndPlay(t, 15),
        this.l.y = -35,
        this.l.scaleX = this.l.scaleY = .5,
        this.time = egret.setTimeout(function() {
            e.lsprint.visible = !1
        }, this, 3e3),
        "vip_1" == t && (this.l.x = this.l.x - 2,
        this.l.y = this.l.y + 8),
        "vip_2" == t && (this.l.y = this.l.y + 3,
        this.l.x = this.l.x - 30),
        "vip_3" == t && (this.l.x = this.l.x - 2,
        this.l.y = this.l.y + 30),
        "vip_4" == t && (this.l.x = this.l.x - 19,
        this.l.y = this.l.y + 30),
        "vip_5" == t && (this.l.x = this.l.x - 4,
        this.l.y = this.l.y - 8),
        "vip_6" == t && (this.l.x = this.l.x - 4,
        this.l.y = this.l.y + 30),
        "vip_7" == t && (this.l.x = this.l.x - 3,
        this.l.y = this.l.y + 25),
        "vip_8" == t && (this.l.scaleX = this.l.scaleY = .6,
        this.l.x = this.l.x - 22,
        this.l.y = this.l.y - 5),
        "vip_9" == t && (this.l.x = this.l.x - 16,
        this.l.y = this.l.y + 25),
        "vip_10" == t && (this.l.x = this.l.x - 3,
        this.l.y = this.l.y + 30),
        "vip_11" == t && (this.l.x = this.l.x - 3,
        this.l.y = this.l.y + 20),
        "vip_12" == t && (this.l.x = this.l.x - 2,
        this.l.y = this.l.y + 32),
        "vip_13" == t && (this.l.scaleX = this.l.scaleY = 1.1,
        this.l.x = this.l.x - 23,
        this.l.y = this.l.y + 20),
        "vip_14" == t && (this.l.x = this.l.x - 32,
        this.l.y = this.l.y + 5),
        "vip_15" == t && (this.l.x = this.l.x - 30,
        this.l.y = this.l.y + 13),
        this.l.x += 13,
        this.l.y += 13
    }
    ,
    e.prototype.showChat = function(t, e) {
        var i = this;
        return void 0 === e && (e = null),
        "" != t ? (null == e && (e = Utils.substring(t, 40)),
        egret.clearTimeout(this.chatTime),
        e.length >= 1 ? "" != e[0] ? (this.showChatString(e[0]),
        e.shift(),
        void (this.chatTime = egret.setTimeout(function() {
            i.showChat(t, e)
        }, this, 3e3))) : (e.shift(),
        void this.showChat(t, e)) : void (this.chatTime = egret.setTimeout(function() {
            i.chatSprit.visible = !1
        }, this, 3e3))) : void 0
    }
    ,
    e.prototype.showChatString = function(t) {
        this.chatText.text = t,
        this.chatSprit.visible = !0
    }
    ,
    e.prototype.initMyData = function(t) {
        void 0 === t && (t = null),
        this.topTip.source = "",
        this.nameLable.text = PDKParems.ins.nickName,
        null != t ? this.goldCoinLable.text = ChipUtils.formatCoin(Number(t.goldCoin)) + "" : this.goldCoinLable.text = ChipUtils.formatCoin(PDKParems.ins.goldCoin) + "",
        this.rmbLable.text = PDKParems.ins.goldCoin / PDKParems.ins.nChange + "",
        this.jdDisplay.animation.stop(),
        this.jdDisplay.visible = !1,
        0 == PDKParems.ins.isTest && RES.getResByUrl(PDKParems.ins.headURL + "iconHead" + PDKParems.ins.userHead + ".png", function(t) {
            this.headImg.source = t
        }, this)
    }
    ,
    e.prototype.updataCoin = function() {
        this.goldCoinLable.text = ChipUtils.formatCoin(PDKParems.ins.goldCoin) + ""
    }
    ,
    e.prototype.closeJd = function() {
        this.jdDisplay.animation.stop(),
        this.jdDisplay.visible = !1
    }
    ,
    e.prototype.showJd = function() {
        egret.setTimeout(function() {
            SoundManager.getInstance().playEffect("baodan_mp3")
        }, this, 600),
        this.jdDisplay.animation.gotoAndPlayByFrame("baodan", 0, 0),
        this.jdDisplay.visible = !0
    }
    ,
    e.prototype.setGoldCoin = function(t) {
        this.goldCoinLable.text = ChipUtils.formatCoin(t) + ""
    }
    ,
    e.prototype.loadMyHead = function() {
        0 == PDKParems.ins.isTest && RES.getResByUrl(PDKParems.ins.headURL + "iconHead" + PDKParems.ins.userHead + ".png", function(t) {
            this.headImg.source = t
        }, this)
    }
    ,
    e.prototype.setClock = function(t) {
        this.clock.visible = !0,
        this.clock.startClock(t)
    }
    ,
    e.prototype.closeClock = function() {
        this.clock.visible = !1,
        this.clock.stopClock()
    }
    ,
    e
}(eui.Component);
__reflect(UserItem.prototype, "UserItem", ["eui.UIComponent", "egret.DisplayObject"]);
var Cards = function(t) {
    function e(e, i) {
        void 0 === i && (i = 0);
        var s = t.call(this) || this;
        return s.cardBg = new eui.Image,
        s.cardValue = new eui.Image,
        s.cardF1 = new eui.Image,
        s.cardF2 = new eui.Image,
        s.value = -1,
        s.type = 0,
        s.addChild(s.cardBg),
        s.addChild(s.cardValue),
        s.addChild(s.cardF1),
        s.addChild(s.cardF2),
        s.setValue(e, i),
        s.touchChildren = !1,
        s.touchEnabled = !0,
        s
    }
    return __extends(e, t),
    e.prototype.setValue = function(t, e) {
        void 0 === e && (e = 0),
        this.type = e,
        this.value = t,
        0 == this.type ? (this.cardBg.source = "cardB_png",
        this.cardValue.source = this.valueToString(t),
        this.cardF1.source = this.flowerToString(t),
        this.cardF2.source = this.flowerBToString(t),
        this.cardF2.visible = !0,
        this.cardValue.x = 21,
        this.cardValue.y = 19,
        this.cardF1.x = 30.5,
        this.cardF1.y = 90,
        this.cardF2.x = 105.5,
        this.cardF2.y = 146,
        this.cardF2.scaleX = 1,
        this.cardF2.scaleY = 1,
        this.anchorOffsetX = 105.5,
        this.anchorOffsetY = 135) : (this.cardBg.source = "cardC_png",
        this.cardValue.source = this.valueToString(t),
        this.cardF1.source = this.flowerToString(t),
        this.cardF2.source = this.flowerBToString(t),
        this.cardF2.visible = !0,
        this.cardF2.x = 67.5,
        this.cardF2.scaleX = .5,
        this.cardF2.scaleY = .5,
        this.cardF2.y = 88,
        this.cardValue.x = 15,
        this.cardValue.y = 12,
        this.cardF1.x = 15,
        this.cardF1.y = 57,
        this.anchorOffsetX = 62,
        this.anchorOffsetY = 78.5)
    }
    ,
    Object.defineProperty(e.prototype, "angular", {
        get: function() {
            return this._angular
        },
        set: function(t) {
            this._angular = t,
            this.mathRotation()
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "radius", {
        get: function() {
            return this._radius
        },
        set: function(t) {
            this._radius = t,
            this.mathRotation()
        },
        enumerable: !0,
        configurable: !0
    }),
    e.prototype.mathRotation = function() {
        if (null != this._radius && null != this._angular) {
            this.angular;
            this.x = Math.sin(2 * this._angular * Math.PI / 360) * this._radius,
            this.y = -Math.cos(2 * this._angular * Math.PI / 360) * this._radius + 1600,
            this.rotation = this._angular
        }
    }
    ,
    e.prototype.valueToString = function(t) {
        var e = ""
          , i = Utils.Suit(t);
        return e = 1 == i || 3 == i ? 0 == this.type ? "a" + Utils.Point(t) + "_png" : "e" + Utils.Point(t) + "_png" : 0 == this.type ? "d" + Utils.Point(t) + "_png" : "f" + Utils.Point(t) + "_png"
    }
    ,
    e.prototype.flowerToString = function(t) {
        var e = ""
          , i = Utils.Suit(t);
        return e = 0 == this.type ? "c" + i + "_png" : "s" + i + "_png"
    }
    ,
    e.prototype.flowerBToString = function(t) {
        var e = ""
          , i = Utils.Suit(t);
        return e = "b" + i + "_png"
    }
    ,
    e
}(eui.Component);
__reflect(Cards.prototype, "Cards", ["eui.UIComponent", "egret.DisplayObject"]);
var HandCards = function(t) {
    function e(e) {
        void 0 === e && (e = 0);
        var i = t.call(this) || this;
        return i.padding = 80,
        i.cardViewList = new Array,
        i.type = 0,
        i.timeOutArr = [],
        i.cardCache = new Array,
        i.type = e,
        0 != i.type && (i.padding = 22),
        i.width = 0,
        i.height = 0,
        i.touchEnabled = !0,
        i.touchChildren = !0,
        GameEventDispatcher.getInstance().addEventListener(GameEventDispatcher.ON_MY_HAND_CARD_SHOW, i.ON_MY_HAND_CARD_SHOW, i),
        i
    }
    return __extends(e, t),
    e.prototype.onDActivate = function() {
        0 == GameData.ins.dealEnd && console.log("重置发牌动画")
    }
    ,
    e.prototype.initHandCards = function(t) {
        for (GameTool.paixu(t, !0); this.cardViewList.length > 0; ) {
            var e = this.cardViewList.pop();
            e.parent && e.parent.removeChild(e),
            this.setCard(e)
        }
        for (var i = 0; i < t.length; i++) {
            var s = this.getCard(t[i], this.type);
            s.touchEnabled = !0,
            this.cardViewList.push(s)
        }
        this.setPosition()
    }
    ,
    e.prototype.clearAllCard = function() {
        for (; this.cardViewList.length > 0; ) {
            var t = this.cardViewList.pop();
            t.parent && t.parent.removeChild(t),
            this.setCard(t)
        }
    }
    ,
    e.prototype.ON_MY_HAND_CARD_SHOW = function() {
        GameData.ins.dealEnd = !1;
        for (var t = 0; t < this.timeOutArr.length; t++)
            egret.clearTimeout(this.timeOutArr[t]);
        if (this.timeOutArr = [],
        0 == this.type) {
            for (; this.cardViewList.length > 0; ) {
                var e = this.cardViewList.pop();
                e.parent && e.parent.removeChild(e),
                this.setCard(e)
            }
            for (var t = 0; t < GameData.ins.myCards.length; t++) {
                var i = this.getCard(GameData.ins.myCards[t], this.type);
                i.touchEnabled = !0,
                this.cardViewList.push(i)
            }
            this.cardViewList.sort(this.randomsort);
            for (var t = 0; t < this.cardViewList.length; t++) {
                var i = this.cardViewList[t];
                if (0 == this.type && (i.angular = 2.5 * (t - this.cardViewList.length / 2) + 1.25,
                i.radius = 1500),
                1 == PDKParems.ins.activateType) {
                    var s = egret.setTimeout(this.onAddCard, this, 3 * t * 15 + 400, [i]);
                    this.timeOutArr.push(s)
                } else
                    this.onAddCard([i])
            }
            if (1 == PDKParems.ins.activateType) {
                var s = egret.setTimeout(this.sortCardAni, this, 1220);
                this.timeOutArr.push(s)
            } else
                this.sortCardAni()
        }
    }
    ,
    e.prototype.onAddCard = function(t) {
        t && t.length > 0 && this.addChild(t[0])
    }
    ,
    e.prototype.sortCardAni = function() {
        console.log("开始发牌动画2");
        for (var t = 0; t < this.cardViewList.length; t++) {
            var e = this.cardViewList[t];
            1 == PDKParems.ins.activateType ? egret.Tween.get(e).to({
                angular: 0
            }, 200) : e.angular = 0
        }
        if (1 == PDKParems.ins.activateType) {
            var i = egret.setTimeout(this.onAniCom, this, 250);
            this.timeOutArr.push(i)
        } else
            this.onAniCom()
    }
    ,
    e.prototype.onAniCom = function() {
        for (console.log("开始发牌动画3"); this.cardViewList.length > 0; ) {
            var t = this.cardViewList.pop();
            t.parent && t.parent.removeChild(t),
            this.setCard(t)
        }
        for (var e = 0; e < GameData.ins.myCards.length; e++) {
            var i = this.getCard(GameData.ins.myCards[e], this.type);
            i.touchEnabled = !0,
            this.cardViewList.push(i)
        }
        for (var e = 0; e < this.cardViewList.length; e++) {
            var i = this.cardViewList[e];
            i.angular = 0,
            i.radius = 1500,
            1 == PDKParems.ins.activateType ? egret.Tween.get(i).to({
                angular: 2.5 * (e - this.cardViewList.length / 2) + 1.25
            }, 200) : i.angular = 2.5 * (e - this.cardViewList.length / 2) + 1.25,
            this.addChild(i)
        }
        if (1 == PDKParems.ins.activateType) {
            var s = egret.setTimeout(this.onAllAniCom, this, 200);
            this.timeOutArr.push(s)
        } else
            this.onAllAniCom()
    }
    ,
    e.prototype.onAllAniCom = function() {
        console.log("所有动画结束"),
        this.timeOutArr = [],
        GameData.ins.dealEnd = !0,
        GameEventDispatcher.getInstance().dispatchEvent(new DateEvent(GameEventDispatcher.ALL_HAND_CARD_ANI_COM,null))
    }
    ,
    e.prototype.randomsort = function(t, e) {
        return Math.random() > .5 ? -1 : 1
    }
    ,
    e.prototype.getHandCardsData = function() {
        for (var t = [], e = 0; e < this.cardViewList.length; e++)
            t.push(this.cardViewList[e].value);
        return t
    }
    ,
    e.prototype.getHandCardsViewList = function() {
        return this.cardViewList
    }
    ,
    e.prototype.getTipCard = function(t) {
        for (var e = [], i = 0; i < t.length; i++)
            for (var s = 0; s < this.cardViewList.length; s++)
                this.cardViewList[s].value == t[i] && e.push(this.cardViewList[s]);
        return e
    }
    ,
    e.prototype.takeOutHandCards = function(t) {
        for (var e = 0; e < t.length; e++)
            for (var i = 0; i < this.cardViewList.length; i++)
                t[e] == this.cardViewList[i].value && (this.cardViewList[i].parent && this.cardViewList[i].parent.removeChild(this.cardViewList[i]),
                this.setCard(this.cardViewList[i]),
                this.cardViewList.splice(i, 1));
        this.setPosition()
    }
    ,
    e.prototype.setPosition = function() {
        for (var t = 0; t < this.cardViewList.length; t++) {
            var e = this.cardViewList[t];
            e.angular = 2.5 * (t - this.cardViewList.length / 2) + 1.25,
            e.radius = 1500,
            this.addChild(e)
        }
    }
    ,
    e.prototype.getCard = function(t, e) {
        if (void 0 === e && (e = 0),
        this.cardCache.length > 0) {
            var i = this.cardCache.pop();
            return i.setValue(t, e),
            i
        }
        return new Cards(t,e)
    }
    ,
    e.prototype.setCard = function(t) {
        t.parent && t.parent.removeChild(t),
        egret.Tween.removeTweens(t),
        t.touchEnabled = !1,
        this.cardCache.push(t)
    }
    ,
    e
}(eui.Component);
__reflect(HandCards.prototype, "HandCards", ["eui.UIComponent", "egret.DisplayObject"]);
var LoadingTipCard = function(t) {
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
    e.prototype.setData = function(t) {
        1 == t ? (this.cardNum.source = "d1_png",
        this.cardS.source = "c2_png",
        this.cardB.source = "b2_png") : 2 == t ? (this.cardNum.source = "d1_png",
        this.cardS.source = "c4_png",
        this.cardB.source = "b4_png") : 3 == t ? (this.cardNum.source = "a1_png",
        this.cardS.source = "c3_png",
        this.cardB.source = "b3_png") : 4 == t && (this.cardNum.source = "a2_png",
        this.cardS.source = "c1_png",
        this.cardB.source = "b1_png")
    }
    ,
    e
}(eui.Component);
__reflect(LoadingTipCard.prototype, "LoadingTipCard", ["eui.UIComponent", "egret.DisplayObject"]);
var MyCardPanel = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.touchItem = new Array,
        e.tempItem = new Array,
        e.touchBeginType = 0,
        e
    }
    return __extends(e, t),
    e.prototype.partAdded = function(e, i) {
        t.prototype.partAdded.call(this, e, i)
    }
    ,
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this.handui = new HandCards(0),
        this.handui.horizontalCenter = 0,
        this.addChild(this.handui),
        this.handui.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.cardTouchBeginHandler, this)
    }
    ,
    e.prototype.setHandCardInfor = function(t) {
        this.handui.initHandCards(t)
    }
    ,
    e.prototype.cardTouchBeginHandler = function(t) {
        if (0 != GameData.ins.dealEnd) {
            if (t.target instanceof Cards) {
                var e = t.target;
                this.touchBeginType = e.value
            }
            this.tempItem = [],
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.cardTouchMoveHandler, this),
            this.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.cardTouchEndHandler, this),
            this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.cardTouchEndHandler, this)
        }
    }
    ,
    e.prototype.cardTouchMoveHandler = function(t) {
        this.setUpCards(t)
    }
    ,
    e.prototype.cardTouchEndHandler = function(t) {
        if (this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.cardTouchMoveHandler, this),
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.cardTouchEndHandler, this),
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.cardTouchEndHandler, this),
        console.log("touchEnd"),
        this.setUpCards(t),
        t.target instanceof Cards) {
            var e = t.target;
            this.touchBeginType != e.value ? this.checkCurrentSelectedItemCanTakeOut() : this.checkCurrentSelectedItemByOneCard()
        }
    }
    ,
    e.prototype.clearAllCard = function() {
        this.tempItem = [],
        this.touchBeginType = 0,
        this.downAllCard(),
        this.handui.clearAllCard()
    }
    ,
    e.prototype.setUpCards = function(t) {
        if (t.target instanceof Cards) {
            var e = t.target;
            if (this.tempItem.indexOf(e) >= 0)
                return;
            this.tempItem.push(e),
            this.touchItem.indexOf(e) >= 0 ? (1 == PDKParems.ins.activateType ? egret.Tween.get(e).to({
                radius: 1500
            }, 200) : e.radius = 1500,
            this.touchItem.splice(this.touchItem.indexOf(e), 1)) : (this.touchItem.push(e),
            1 == PDKParems.ins.activateType ? egret.Tween.get(e).to({
                radius: 1540
            }, 200) : e.radius = 1540)
        }
    }
    ,
    e.prototype.takeCard = function(t, e) {
        this.downAllCard(),
        0 != e && this.handui.takeOutHandCards(t)
    }
    ,
    e.prototype.getUpCard = function() {
        for (var t = [], e = [], i = 0; i < this.touchItem.length; i++)
            e.push(this.touchItem[i].value);
        var s = !1;
        e.length == GameData.ins.myCards.length && (s = !0),
        t.push(e);
        var a = GameTool.userGetCardType(e, s);
        return t.push(a),
        t
    }
    ,
    e.prototype.downAllCard = function() {
        for (; this.touchItem.length > 0; ) {
            var t = this.touchItem.pop();
            egret.Tween.removeTweens(t),
            1 == PDKParems.ins.activateType ? egret.Tween.get(t).to({
                radius: 1500
            }, 200) : t.radius = 1500
        }
        this.touchItem = []
    }
    ,
    e.prototype.stageTapHandler = function(t) {
        t.target instanceof Cards || this.downAllCard()
    }
    ,
    e.prototype.setHandTipCards = function(t) {
        this.downAllCard();
        for (var e = this.handui.getTipCard(t), i = 0; i < e.length; i++)
            this.touchItem.indexOf(e[i]) < 0 && (this.touchItem.push(e[i]),
            egret.Tween.removeTweens(e[i]),
            1 == PDKParems.ins.activateType ? egret.Tween.get(e[i]).to({
                radius: 1540
            }, 200) : e[i].radius = 1500)
    }
    ,
    e.prototype.checkCurrentSelectedItemByOneCard = function() {
        for (var t = [], e = 0; e < this.touchItem.length; e++)
            t.push(this.touchItem[e].value);
        if (1 == GameData.ins.tipType && 3 == t.length) {
            for (var i = GameTool.GetTipCards(GameData.ins.preDiscards, GameData.ins.myCards), e = 0; e < i.length; e++)
                for (var s = i[e], a = 0; a < s.length; a++)
                    s[a] = GameTool.tranToClByCard(s[a]);
            if (i.length > 0)
                for (var a = 0; a < i.length; a++)
                    if (GameTool.isIncludes(i[a], t))
                        return void this.setHandTipCards(i[a])
        }
    }
    ,
    e.prototype.checkCurrentSelectedItemCanTakeOut = function() {
        for (var t = [], e = 0; e < this.touchItem.length; e++)
            t.push(this.touchItem[e].value);
        if (1 == GameData.ins.tipType) {
            for (var i = GameTool.GetTipCards(GameData.ins.preDiscards, t), e = 0; e < i.length; e++)
                for (var s = i[e], a = 0; a < s.length; a++)
                    s[a] = GameTool.tranToClByCard(s[a]);
            if (i.length > 0) {
                if (i[0].length > this.touchItem.length)
                    return;
                this.setHandTipCards(i[0])
            }
        } else {
            var n = GameTool.GetTipCards2(t);
            if (n && n.length > 0) {
                for (var o = n[0], e = 0; e < n.length; e++)
                    n[e].length > o.length && (o = n[e]);
                for (var a = 0; a < o.length; a++)
                    o[a] = GameTool.tranToClByCard(o[a]);
                if (o.length > 1) {
                    if (o.length > this.touchItem.length)
                        return;
                    this.setHandTipCards(o)
                }
            }
        }
    }
    ,
    e
}(eui.Component);
__reflect(MyCardPanel.prototype, "MyCardPanel", ["eui.UIComponent", "egret.DisplayObject"]);
var MessageProtocol = function() {
    function t() {}
    return t.REQ = 0,
    t.ACK = 134217728,
    t.CLIENT_LIST_BASE = 12288,
    t.HeartBeat = t.CLIENT_LIST_BASE + 0,
    t.LOGIN = t.CLIENT_LIST_BASE + 1,
    t.ByUserKickNtc = t.CLIENT_LIST_BASE + 2,
    t.GameState = t.CLIENT_LIST_BASE + 3,
    t
}();
__reflect(MessageProtocol.prototype, "MessageProtocol");
var LoadingUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.createView(),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.ROOM_LIST, e.ROOM_LIST, e),
        e
    }
    return __extends(e, t),
    e.prototype.ROOM_LIST = function() {
        this.parent && this.parent.removeChild(this)
    }
    ,
    e.prototype.createView = function() {
        this.bg = Utils.createBitmapByName("BG_jpg"),
        this.addChild(this.bg),
        this.bg.width = Utils.curWidth,
        this.bg.height = Utils.curHeight,
        this.logo = Utils.createBitmapByName("logo_png"),
        this.addChild(this.logo),
        this.logo.x = 657,
        this.logo.y = 362,
        this.sprProgress = new egret.Sprite,
        this.addChild(this.sprProgress);
        var t = Utils.createBitmapByName("jd2_png");
        this.sprProgress.addChild(t),
        this.bmpProgress = Utils.createBitmapByName("jd1_png"),
        this.sprProgress.addChild(this.bmpProgress),
        this.bmpProgress.x = 0,
        this.bmpProgress.y = 0,
        this.bmpMask = new eui.Rect(694,t.height,0),
        this.sprProgress.addChild(this.bmpMask),
        this.bmpMask.width = 0,
        this.bmpProgress.mask = this.bmpMask,
        this.sprProgress.y = 702,
        this.sprProgress.x = 620,
        this.textField = new egret.TextField,
        this.addChild(this.textField),
        this.textField.size = 40,
        this.textField.text = "0%",
        this.textField.textColor = 16570722,
        this.textField.bold = !1,
        this.textField.italic = !0,
        this.textField.y = this.sprProgress.y + 60,
        this.textField.textAlign = "left",
        this.textField.x = (Utils.curWidth - this.textField.width) / 2 - 20
    }
    ,
    e.prototype.onProgress = function(t, e) {
        var i = 1
          , s = i * (t / e);
        this.bmpMask.width = this.bmpProgress.width * s,
        s = Math.ceil(100 * s),
        s > 100 && (s = 100),
        this.textField.text = s + "%";
        try {
            window.gameLoading(s)
        } catch (a) {}
    }
    ,
    e.prototype.onSize = function() {
        this.bg && (this.bg.width = Utils.curWidth,
        this.bg.height = Utils.curHeight),
        this.textField && this.sprProgress && (this.textField.y = this.sprProgress.y + 60,
        this.textField.x = (Utils.curWidth - this.textField.width) / 2 - 20)
    }
    ,
    e
}(egret.Sprite);
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var MessageSocketSender = function() {
    function t() {}
    return t.prototype.HeartBeatReq = function() {
        var t = new message.HeartBeatReq;
        t.time = 1;
        var e = message.HeartBeatReq.encode(t).finish();
        console.log("发送心跳"),
        MessageWebSocket.instance().SendMeseage(MessageProtocol.REQ | MessageProtocol.HeartBeat, e)
    }
    ,
    t.prototype.loginMessage = function() {
        var t = new message.reqLogin;
        t.userName = PDKParems.ins.userName,
        t.avatarUrl = "",
        t.channelId = "",
        t.gameId = PDKParems.ins.nGameid,
        t.ticket = PDKParems.ins.token;
        var e = message.reqLogin.encode(t).finish();
        MessageWebSocket.instance().SendMeseage(MessageProtocol.REQ | MessageProtocol.LOGIN, e)
    }
    ,
    t
}();
__reflect(MessageSocketSender.prototype, "MessageSocketSender");
var MessageUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        e.arrMsg = [],
        e.isRunning = !1,
        e.visible = !1,
        e.y = 160,
        e.x = 505,
        e.sprBg = new egret.Sprite,
        e.addChild(e.sprBg);
        var i = Utils.createBitmapByName("pmd_png");
        return i.width = 900,
        e.sprBg.addChild(i),
        e.group = new eui.Group,
        e.addChild(e.group),
        e.txt = new egret.TextField,
        e.txt.size = 30,
        e.txt.text = "测试测试测试测试测试",
        e.txt.textColor = 16774883,
        e.txt.fontFamily = "微软雅黑",
        e.txt.x = i.width,
        e.txt.y = (i.height - e.txt.height) / 2,
        e.group.addChild(e.txt),
        e.scroll = new eui.Scroller,
        e.scroll.touchEnabled = !1,
        e.scroll.x = 40,
        e.scroll.width = i.width - 45,
        e.scroll.height = i.height,
        e.scroll.viewport = e.group,
        e.addChild(e.scroll),
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
    e.prototype.showMessage = function(t) {
        if (this.parent) {
            this.visible = !0;
            for (var e = 0; e < t.length; e++)
                this.arrMsg.push(t[e]);
            0 == this.isRunning && (this.isRunning = !0,
            this.restMsg())
        }
    }
    ,
    e.prototype.restMsg = function() {
        if (this.arrMsg.length > 0) {
            this.txt.textFlow = (new egret.HtmlTextParser).parser(this.arrMsg.shift()),
            this.txt.x = this.sprBg.width,
            this.scroll.viewport.scrollH = 0;
            var t = 5e3 + 100 * this.txt.text.length
              , e = this.sprBg.width + this.txt.width;
            egret.Tween.get(this.scroll.viewport).to({
                scrollH: e
            }, t).call(this.restMsg, this)
        } else
            this.isRunning = !1,
            this.visible = !1
    }
    ,
    e
}(egret.Sprite);
__reflect(MessageUI.prototype, "MessageUI");
var MessageWebSocket = function() {
    function t() {
        this.isConnected = !1,
        this.nCount = 0,
        this.webSocket = new egret.WebSocket,
        this.webSocket.type = egret.WebSocket.TYPE_BINARY,
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this),
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this),
        this.webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this),
        this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this),
        this.msgSender = new MessageSocketSender,
        this.msgReceive = new MessageScoketReceive
    }
    return t.instance = function() {
        return null != t.ins || (t.ins = new t),
        t.ins
    }
    ,
    t.prototype.connectServer = function() {
        this.isConnected || (null == this.webSocket && (this.webSocket = new egret.WebSocket,
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this),
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this),
        this.webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this),
        this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this)),
        this.connectSocket())
    }
    ,
    t.prototype.connectSocket = function() {
        this.isConnected || (PDKParems.ins.isHttp ? this.webSocket.connectByUrl(PDKParems.ins.messageIP) : this.webSocket.connect(PDKParems.ins.messageIP, PDKParems.ins.messagePort))
    }
    ,
    t.prototype.onSocketOpen = function() {
        this.isConnected = !0,
        this.startHeart(),
        this.msgSender.loginMessage()
    }
    ,
    t.prototype.SendMeseage = function(t, e) {
        if (0 != this.webSocket.connected) {
            var i = e
              , s = new egret.ByteArray(i)
              , a = s.length
              , n = new egret.ByteArray;
            n.endian = egret.Endian.LITTLE_ENDIAN,
            n.writeInt(t),
            n.writeInt(a),
            n.writeInt(0),
            n.writeBytes(s),
            n.position = 0,
            this.webSocket.writeBytes(n, 0, n.bytesAvailable)
        }
    }
    ,
    t.prototype.onReceiveMessage = function(t) {
        var e = new egret.ByteArray;
        e.endian = egret.Endian.LITTLE_ENDIAN,
        this.webSocket.readBytes(e);
        var i = e.readInt()
          , s = e.readInt();
        e.readInt();
        if (e.bytesAvailable >= s) {
            var a = new egret.ByteArray;
            e.readBytes(a, 0, s),
            this.msgReceive.initHandlers(i, a)
        }
    }
    ,
    t.prototype.onSocketClose = function() {
        this.isConnected && (console.log("message server disconnect"),
        this.isConnected = !1,
        egret.clearTimeout(this.interval))
    }
    ,
    t.prototype.reconnectionSever = function() {
        this.ClearSocket(),
        this.connectServer()
    }
    ,
    t.prototype.CloseSocket = function() {
        egret.clearTimeout(this.interval),
        this.webSocket && (this.webSocket.close(),
        console.log("message socket主动关闭"))
    }
    ,
    t.prototype.ClearSocket = function() {
        egret.clearTimeout(this.interval),
        this.webSocket && (this.webSocket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this),
        this.webSocket.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this),
        this.webSocket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this),
        this.webSocket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this),
        this.webSocket.close(),
        this.isConnected = !1,
        console.log("message socket主动销毁"),
        this.webSocket = null)
    }
    ,
    t.prototype.onSocketError = function() {
        this.isConnected = !1,
        egret.clearTimeout(this.interval),
        this.nCount += 1,
        this.nCount >= 3,
        this.nCount >= 6 || this.connectServer()
    }
    ,
    t.prototype.startHeart = function() {
        egret.clearTimeout(this.interval),
        this.msgSender.HeartBeatReq(),
        this.interval = egret.setTimeout(this.startHeart, this, 1e4)
    }
    ,
    t
}();
__reflect(MessageWebSocket.prototype, "MessageWebSocket");
var AppointCard = function() {
    function t() {}
    return t
}();
__reflect(AppointCard.prototype, "AppointCard");
var User = function() {
    function t() {
        this.userId = 0,
        this.nickName = "",
        this.avatar = "",
        this.goldCoin = 0,
        this.status = 0
    }
    return t
}();
__reflect(User.prototype, "User");
var room;
!function(room) {
    var ChangeHeadUI = function(_super) {
        function ChangeHeadUI() {
            var t = _super.call(this) || this;
            return t.nHeadNum = 15,
            t.nIndex = 1,
            t.init(),
            t
        }
        return __extends(ChangeHeadUI, _super),
        ChangeHeadUI.prototype.init = function() {
            this.maskBg = new eui.Rect,
            this.addChild(this.maskBg),
            this.maskBg.width = Utils.curWidth,
            this.maskBg.height = Utils.curHeight,
            this.maskBg.fillColor = 0,
            this.maskBg.fillAlpha = .3,
            this.maskBg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHideUI, this),
            this.gContent = new eui.Group,
            this.addChild(this.gContent),
            this.gContent.horizontalCenter = this.gContent.verticalCenter = 0;
            var t = new eui.Image;
            this.gContent.addChild(t),
            t.source = "changeHeadbg_png";
            var e = new eui.Image;
            this.gContent.addChild(e),
            e.source = "headBtn_save_png";
            var i = new eui.Image;
            this.gContent.addChild(i),
            i.source = "headBtn_cancel_png",
            e.bottom = i.bottom = 50,
            e.horizontalCenter = 150,
            i.horizontalCenter = -150,
            e.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this),
            e.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this),
            e.addEventListener(egret.TouchEvent.TOUCH_END, this.onSaveHead, this),
            e.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchCancel, this),
            i.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this),
            i.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this),
            i.addEventListener(egret.TouchEvent.TOUCH_END, this.onCancelHead, this),
            i.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchCancel, this),
            this.headScroll = new eui.Scroller,
            this.gContent.addChild(this.headScroll),
            this.headScroll.width = 980,
            this.headScroll.height = 500,
            this.headScroll.horizontalCenter = 0,
            this.headScroll.y = 60,
            this.gItems = new eui.Group,
            this.gContent.addChild(this.gItems),
            this.headScroll.viewport = this.gItems,
            this.gItems.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onItemTap, this)
        }
        ,
        ChangeHeadUI.prototype.touchCancel = function(t) {
            t.target.scaleX = t.target.scaleY = 1
        }
        ,
        ChangeHeadUI.prototype.touchBegin = function(t) {
            SoundManager.getInstance().playEffect("button_mp3"),
            t.target.scaleX = t.target.scaleY = .9
        }
        ,
        ChangeHeadUI.prototype.showUI = function() {
            this.visible = !0,
            this.gContent.scaleX = this.gContent.scaleY = .8,
            egret.Tween.get(this.gContent).to({
                scaleX: 1,
                scaleY: 1
            }, 500, egret.Ease.backOut),
            0 == this.gItems.numChildren ? this.addHead() : (this.clearChoose(),
            this.showHead())
        }
        ,
        ChangeHeadUI.prototype.addHead = function() {
            for (var t = 0; t < this.nHeadNum; t++) {
                var e = new eui.Group;
                this.gItems.addChild(e),
                e.name = "" + (t + 1),
                e.touchChildren = !1;
                var i = new eui.Image;
                e.addChild(i),
                i.source = PDKParems.ins.headURL + "iconHead" + (t + 1) + ".png",
                i.width = i.height = 130;
                var s = new eui.Image;
                e.addChild(s),
                s.source = "icon_chooseHead_png",
                s.right = -20,
                s.visible = !1,
                e.x = 200 * (t % 5) + 20,
                e.y = 170 * Math.floor(t / 5) + 20
            }
            this.showHead()
        }
        ,
        ChangeHeadUI.prototype.clearChoose = function() {
            for (var t = 0; t < this.gItems.numChildren; t++)
                this.gItems.getChildAt(t).getChildAt(1).visible = !1
        }
        ,
        ChangeHeadUI.prototype.showHead = function() {
            var t = PDKParems.ins.userHead;
            t <= this.gItems.numChildren && t > 0 && (this.nIndex = t,
            this.gItems.getChildAt(t - 1).getChildAt(1).visible = !0)
        }
        ,
        ChangeHeadUI.prototype.onItemTap = function(t) {
            var e = t.target;
            null != e.name && "" != e.name && (this.gItems.getChildByName("" + this.nIndex).getChildAt(1).visible = !1,
            this.nIndex = Number(e.name),
            e.getChildAt(1).visible = !0)
        }
        ,
        ChangeHeadUI.prototype.onSaveHead = function(t) {
            t.target.scaleX = t.target.scaleY = 1,
            PDKParems.ins.userHead = this.nIndex,
            ffw.BaseHttpRequest.sendRequestGetOnce(PDKParems.ins.baseURL, this.onChangeMyHead, this.onHttpError, this, "action=setuserinfo&token=" + PDKParems.ins.token + "&icon=" + this.nIndex)
        }
        ,
        ChangeHeadUI.prototype.onCancelHead = function(t) {
            t.target.scaleX = t.target.scaleY = 1,
            this.onHideUI()
        }
        ,
        ChangeHeadUI.prototype.onHttpError = function() {}
        ,
        ChangeHeadUI.prototype.onChangeMyHead = function(evt) {
            var json = evt.target.data;
            if ("" != json) {
                var jsondata = eval("(" + json + ")");
                0 == jsondata.state && (this.dispatchEvent(new egret.Event("ChangeHeadSuccess")),
                this.onHideUI())
            }
        }
        ,
        ChangeHeadUI.prototype.onHideUI = function() {
            this.gContent.scaleX = this.gContent.scaleY = 1,
            egret.Tween.get(this.gContent).to({
                scaleX: .8,
                scaleY: .8
            }, 500, egret.Ease.backIn).call(function() {
                this.visible = !1
            }, this)
        }
        ,
        ChangeHeadUI
    }(eui.Component);
    room.ChangeHeadUI = ChangeHeadUI,
    __reflect(ChangeHeadUI.prototype, "room.ChangeHeadUI")
}(room || (room = {}));
var RoomListItem = function(t) {
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
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.enterRoom, this),
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this),
        this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this),
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchCancel, this),
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchCancel, this),
        this.touchChildren = !1,
        this.touchEnabled = !0
    }
    ,
    e.prototype.dataChanged = function() {
        this.data ? (this.visible = !0,
        this.data.id <= 3 ? (this.itemBg.source = "lv1_png",
        this.zreLable.font = "roomitemLV_fnt",
        this.dfLable.font = "roomitemLV_fnt") : (this.itemBg.source = "cheng1_png",
        this.zreLable.font = "roomitemH_fnt",
        this.dfLable.font = "roomitemH_fnt"),
        this.dfLable.text = "d" + ChipUtils.formatCoin(Number(this.data.baseScore)),
        this.zreLable.text = "z" + ChipUtils.formatCoin(this.data.limit[0]),
        this.roomAni = DragonBonesFactoryUtils.instance().getFactoryByName(Utils.getRoomItemAni(this.data.id)),
        this.aniGroup.addChild(this.roomAni),
        this.roomAni.animation.play(Utils.getRoomItemAni(this.data.id), 0)) : this.visible = !1
    }
    ,
    e.prototype.touchCancel = function(t) {
        this.gContent.scaleX = 1,
        this.gContent.scaleY = 1,
        console.log("点击cancel")
    }
    ,
    e.prototype.touchBegin = function(t) {
        SoundManager.getInstance().playEffect("button_mp3"),
        this.gContent.scaleX = .9,
        this.gContent.scaleY = .9
    }
    ,
    e.prototype.enterRoom = function() {
        console.log("点击tap"),
        PDKParems.ins.enterRoomData = this.data,
        RoomSocketSender.instance().ReqAccountAvailable()
    }
    ,
    e
}(eui.ItemRenderer);
__reflect(RoomListItem.prototype, "RoomListItem", ["eui.UIComponent", "egret.DisplayObject"]);
var RoomView = function(_super) {
    function RoomView() {
        return _super.call(this) || this
    }
    return __extends(RoomView, _super),
    RoomView.prototype.partAdded = function(t, e) {
        _super.prototype.partAdded.call(this, t, e)
    }
    ,
    RoomView.prototype.childrenCreated = function() {
        _super.prototype.childrenCreated.call(this),
        this.width = Utils.curWidth,
        this.height = Utils.curHeight,
        this.stage.addEventListener(egret.Event.RESIZE, this.onResize, this),
        this.btnRule.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showRule, this),
        this.imgHead.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangeHead, this),
        this.btnRecord.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showHis, this),
        this.btnHall.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackHall, this),
        this.roomAni = DragonBonesFactoryUtils.instance().getFactoryByName("pdkrw"),
        this.addChild(this.roomAni),
        this.roomAni.animation.play("pdkrw", 0),
        this.roomAni.x = 300,
        this.roomAni.y = 650,
        this.addChild(this.listGroup),
        egret.Tween.get(this.roomAni).set({
            x: -300
        }).to({
            x: 300
        }, 400, egret.Ease.elasticInOut),
        egret.Tween.get(this.gTop).set({
            top: -150
        }).to({
            top: 0
        }, 400, egret.Ease.elasticInOut),
        egret.Tween.get(this.listGroup).set({
            horizontalCenter: 500
        }).to({
            horizontalCenter: 270
        }, 400, egret.Ease.elasticInOut),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.NOT_CURRENCY, this.NOT_CURRENCY, this),
        RoomEventDispatcher.getInstance().addEventListener("isShowActive", this.onShowActiveIcon, this),
        this.initData(),
        this.initTopinfo(),
        this.getActiveInfo()
    }
    ,
    RoomView.prototype.initData = function() {
        this.lbName.text = PDKParems.ins.nickName,
        this.lbCoin.text = ChipUtils.formatCoin(PDKParems.ins.goldCoin) + "";
        var t = PDKParems.ins.goldCoin / PDKParems.ins.nChange;
        t = Math.round(100 * t) / 100,
        this.btnHall.visible = PDKParems.ins.isShowHall,
        this.btnHall.includeInLayout = PDKParems.ins.isShowHall,
        this.roomList.dataProvider = new eui.ArrayCollection(PDKParems.ins.roomList),
        this.imgHead.source = PDKParems.ins.headURL + "iconHead" + PDKParems.ins.userHead + ".png",
        this.addChild(MessageUI.ins)
    }
    ,
    RoomView.prototype.initTopinfo = function() {
        this.imgTopbg.source = PDKParems.ins.commURL + "/shareSheet/commHallTopbg.png",
        this.imgInfobg.source = PDKParems.ins.commURL + "/shareSheet/commHallInfobg.png",
        this.btnHall.setImg(PDKParems.ins.commURL + "/shareSheet/commHallButton_hall.png"),
        this.btnRecord.setImg(PDKParems.ins.commURL + "/shareSheet/commHallButton_recode.png"),
        this.btnRule.setImg(PDKParems.ins.commURL + "/shareSheet/commHallButton_help.png")
    }
    ,
    RoomView.prototype.onBackHall = function() {
        if ("2" == egret.getOption("showHall"))
            try {
                window.closeGame()
            } catch (t) {}
        else
            window.location.href = PDKParems.ins.gameHallURL + "?token=" + PDKParems.ins.token
    }
    ,
    RoomView.prototype.NOT_CURRENCY = function() {
        this.lbCoin.text = ChipUtils.formatCoin(PDKParems.ins.goldCoin) + ""
    }
    ,
    RoomView.prototype.onResize = function() {
        this.width = Utils.curWidth,
        this.height = Utils.curHeight
    }
    ,
    RoomView.prototype.showHis = function() {
        ViewManager.ins.showHistoryUI()
    }
    ,
    RoomView.prototype.showSet = function() {
        ViewManager.ins.showSet()
    }
    ,
    RoomView.prototype.showRule = function() {
        ViewManager.ins.showRuleView()
    }
    ,
    RoomView.prototype.onChangeHead = function() {
        null == this.changeHeadUI && (this.changeHeadUI = new room.ChangeHeadUI,
        this.addChild(this.changeHeadUI),
        this.changeHeadUI.addEventListener("ChangeHeadSuccess", this.onChangeHeadComplete, this)),
        this.changeHeadUI.showUI()
    }
    ,
    RoomView.prototype.onChangeHeadComplete = function() {
        this.imgHead.source = PDKParems.ins.headURL + "iconHead" + PDKParems.ins.userHead + ".png"
    }
    ,
    RoomView.prototype.getActiveInfo = function() {
        ffw.BaseHttpRequest.sendRequestGetOnce(PDKParems.ins.activeURL + "actlist", function(e) {
            var json = e.target.data;
            if ("" != json) {
                var jsondata = eval("(" + json + ")");
                "0" == jsondata.result && (PDKParems.ins.arrActive = jsondata.value,
                RoomEventDispatcher.getInstance().dispatchEvent(new egret.Event("isShowActive")))
            }
        }, function() {}, this, "gametype=" + PDKParems.ins.gametype + "&channel=" + PDKParems.ins.channel)
    }
    ,
    RoomView.prototype.onShowActiveIcon = function() {
        if (PDKParems.ins.arrActive.length > 0 && PDKParems.ins.isActiveLoad)
            for (var t = 0; t < PDKParems.ins.arrActive.length; t++)
                if (995 == PDKParems.ins.arrActive[t].actgameid) {
                    this.addZP();
                    break
                }
    }
    ,
    RoomView.prototype.addZP = function() {
        var t = new dragonBones.EgretFactory;
        t.parseDragonBonesData(RES.getRes("xyzp_ske_json")),
        t.parseTextureAtlasData(RES.getRes("xyzp_tex_json"), RES.getRes("xyzp_tex_png")),
        this.arZP = t.buildArmatureDisplay("xyzp"),
        this.arZP.animation.play("xyzp", 0),
        this.arZP.x = 600,
        this.arZP.y = 120,
        this.addChild(this.arZP),
        this.arZP.touchEnabled = !0,
        this.arZP.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOpenZP, this)
    }
    ,
    RoomView.prototype.onOpenZP = function() {
        PDKParems.ins.isOpenActive = !0;
        try {
            window.openActiveGame(1)
        } catch (t) {}
    }
    ,
    RoomView
}(eui.Component);
__reflect(RoomView.prototype, "RoomView", ["eui.UIComponent", "egret.DisplayObject"]);
var RuleView = function(t) {
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
        this.stage.addEventListener(egret.Event.RESIZE, this.onResize, this),
        this.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this),
        this.tabBar.addEventListener(egret.Event.CHANGE, this.tabBarChange, this),
        this.onShowUI()
    }
    ,
    e.prototype.onShowUI = function() {
        this.gContent.scaleX = this.gContent.scaleY = .8,
        egret.Tween.get(this.gContent).to({
            scaleX: 1,
            scaleY: 1
        }, 500, egret.Ease.backOut)
    }
    ,
    e.prototype.tabBarChange = function() {
        this.scroller.viewport.scrollV = 0
    }
    ,
    e.prototype.onResize = function() {
        this.width = Utils.curWidth,
        this.height = Utils.curHeight
    }
    ,
    e.prototype.onClose = function() {
        this.parent && this.parent.removeChild(this)
    }
    ,
    e
}(eui.Component);
__reflect(RuleView.prototype, "RuleView", ["eui.UIComponent", "egret.DisplayObject"]);
var SetDlg = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.type = 1,
        e.bYinyue = !0,
        e.bYinxiao = !0,
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
        this.btn_sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSure, this),
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this),
        this.stage.addEventListener(egret.Event.RESIZE, this.onResize, this),
        this.imgYinyue.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onYinyue, this),
        this.imgYinxiao.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onYinxiao, this),
        this.showUI()
    }
    ,
    e.prototype.showUI = function() {
        this.visible = !0,
        this.gContent.scaleX = this.gContent.scaleY = .8,
        egret.Tween.get(this.gContent).to({
            scaleX: 1,
            scaleY: 1
        }, 500, egret.Ease.backOut)
    }
    ,
    e.prototype.onResize = function() {
        this.width = Utils.curWidth,
        this.height = Utils.curHeight
    }
    ,
    e.prototype.onSure = function() {
        this.onClose()
    }
    ,
    e.prototype.onClose = function() {
        this.parent && this.parent.removeChild(this)
    }
    ,
    e.prototype.onYinyue = function() {
        SoundManager.getInstance().playButtonClick(),
        this.bYinyue = !this.bYinyue,
        this.bYinyue ? (this.imgYinyue.source = "musicopen_png",
        this.lbYinyueT.text = "开") : (this.imgYinyue.source = "musicclose_png",
        this.lbYinyueT.text = "关"),
        SoundManager.getInstance().setBgOn(this.bYinyue)
    }
    ,
    e.prototype.onYinxiao = function() {
        this.bYinxiao = !this.bYinxiao,
        this.bYinxiao ? (this.imgYinxiao.source = "musicopen_png",
        this.lbYinxiaoT.text = "开") : (this.imgYinxiao.source = "musicclose_png",
        this.lbYinxiaoT.text = "关"),
        SoundManager.getInstance().setEffectOn(this.bYinxiao),
        SoundManager.getInstance().playButtonClick()
    }
    ,
    e
}(eui.Component);
__reflect(SetDlg.prototype, "SetDlg", ["eui.UIComponent", "egret.DisplayObject"]);
var DateUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.oDate = new Date,
        e.skinName = "resource/eui_skins/DateUISkin.exml",
        e
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this.oDate = new Date,
        this.year = this.oDate.getFullYear(),
        this.month = this.oDate.getMonth() + 1,
        this.nowday = (new Date).getDate(),
        this.nowyear = (new Date).getFullYear(),
        this.nowmonth = (new Date).getMonth() + 1,
        this.twoWeekDate = new Date((new Date).getTime() - 12096e5),
        this.Nowadays = new Date(this.twoWeekDate.getTime() + 1296e6),
        this.showDate(this.year, this.month, this.nowday),
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this)
    }
    ,
    e.prototype.onClick = function(t) {
        switch (t.target) {
        case this.nextM:
            "1" == this.nextM.name && (this.year += 1),
            this.showDate(this.year, Number(this.nextM.name), this.day);
            break;
        case this.prevM:
            "12" == this.prevM.name && (this.year -= 1),
            this.showDate(this.year, Number(this.prevM.name), this.day);
            break;
        case this.bg:
            this.visible = !1;
            break;
        default:
            var e = t.target;
            if (null == e || void 0 == e || Number(e.name) <= 0)
                return;
            var i = new Date;
            i.setUTCMonth(this.month - 1),
            i.setUTCFullYear(this.year),
            i.setUTCDate(Number(e.name)),
            i.setUTCHours(-8, 0, 0),
            RoomEventDispatcher.getInstance().dispatchEventWith(RoomEventDispatcher.SELECT_DATE, !1, {
                date: i,
                time: this.selectTime
            }),
            this.visible = !1
        }
    }
    ,
    e.prototype.onGetDate = function(t, e) {
        this.visible = !0,
        this.selectTime = e,
        this.nowday = t.getDate(),
        this.nowmonth = t.getMonth() + 1,
        this.nowyear = t.getFullYear(),
        this.showDate(this.nowyear, this.nowmonth, this.nowday)
    }
    ,
    e.prototype.showDate = function(t, e, i) {
        if (!(void 0 == t || void 0 == e || 0 >= t || 0 >= e)) {
            this.removGroup(),
            this.year = t,
            this.month = e,
            this.day = i;
            var s = e - 1
              , a = e + 1;
            1 == e ? s = 12 : 12 == e && (a = 1),
            this.oTitle.text = t + "年   " + e + "月   ",
            this.prevM.text = "←" + s + "月份",
            this.prevM.name = s + "",
            this.nextM.text = a + "月份→",
            this.nextM.name = a + "";
            var n = 0;
            n = 1 == e || 3 == e || 5 == e || 7 == e || 8 == e || 10 == e || 12 == e ? 31 : 4 == e || 6 == e || 9 == e || 11 == e ? 30 : 2 == e && this.isLeapYear(t) ? 29 : 28,
            this.oDate.setFullYear(t),
            this.oDate.setMonth(e - 1),
            this.oDate.setDate(1);
            for (var o = this.oDate.getDay(), r = 0; o > r; r++) {
                var h = new eui.Group;
                h.width = 50,
                h.height = 30,
                this.group0.addChild(h)
            }
            var l = new Date;
            l.setMonth(e - 1),
            l.setFullYear(t);
            for (var r = 0; n > r; r++) {
                var c = new eui.Group;
                c.width = 50,
                c.height = 30;
                var d = new eui.Label;
                d.width = 50,
                d.text = r + 1 + "",
                d.textAlign = egret.HorizontalAlign.CENTER,
                d.name = r + 1 + "",
                c.addChild(d),
                this["group" + Math.floor(o / 7)].addChild(c),
                l.setDate(r + 1),
                l.getTime() >= this.twoWeekDate.getTime() && l.getTime() <= this.Nowadays.getTime() ? d.touchEnabled = !0 : (d.background = !0,
                d.backgroundColor = 11119017,
                d.touchEnabled = !1),
                t == this.nowyear && e == this.nowmonth && r == this.nowday - 1 && (d.background = !0,
                d.backgroundColor = 14423100),
                o++
            }
        }
    }
    ,
    e.prototype.isLeapYear = function(t) {
        return t % 100 == 0 && t % 400 == 0 ? !0 : t % 100 != 0 && t % 4 == 0 ? !0 : !1
    }
    ,
    e.prototype.removGroup = function() {
        for (var t = 0; 6 > t; t++)
            for (; this["group" + t].numChildren > 0; ) {
                var e = this["group" + t].removeChildAt(0);
                e = null
            }
    }
    ,
    e.prototype.onClosed = function() {
        for (this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this),
        this.removGroup(); this.numChildren > 0; ) {
            var t = this.removeChildAt(0);
            t = null
        }
    }
    ,
    e
}(eui.Component);
__reflect(DateUI.prototype, "DateUI");
var HistoricalDetails = function(t) {
    function e(e) {
        var i = t.call(this) || this;
        return i.dataArray = [],
        i.data = e,
        i
    }
    return __extends(e, t),
    e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this),
        this.width = Utils.curWidth,
        this.height = Utils.curHeight,
        this.stage.addEventListener(egret.Event.RESIZE, this.onResize, this),
        this.close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this),
        this.initData(this.data)
    }
    ,
    e.prototype.onResize = function() {
        this.width = Utils.curWidth,
        this.height = Utils.curHeight
    }
    ,
    e.prototype.initData = function(t) {
        this.data = t,
        this.dataArray = [];
        for (var e = 0, i = 0; i < this.data.records.length; i++) {
            var s = this.data.records[i];
            this.dataArray.push(s)
        }
        this.difen.text = "底分:" + ChipUtils.formatCoin(Number(this.data.baseScore));
        for (var a = new eui.ArrayCollection, n = 0; n < this.dataArray.length; n++) {
            var o = this.dataArray[n];
            o.shouCardTemp = e,
            a.addItem(o)
        }
        this.dataList.dataProvider = a
    }
    ,
    e.prototype.close = function() {
        this.parent && this.parent.removeChild(this)
    }
    ,
    e
}(eui.Component);
__reflect(HistoricalDetails.prototype, "HistoricalDetails");
var HistoricalDetailsItem = function(t) {
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
    e.prototype.dataChanged = function() {
        this.qg.source = "",
        this.data && (this.wanjia.text = this.data.nickName + "",
        1 == this.data.allOff || -1 == this.data.allOff ? this.yupai.textFlow = (new egret.HtmlTextParser).parser('<font color="#6C3A02">' + this.data.surplusCards + '张</font><font color="#FF0000">*2</font>') : this.yupai.textFlow = (new egret.HtmlTextParser).parser('<font color="#6C3A02">' + this.data.surplusCards + "张</font>"),
        1 == this.data.allOff ? this.qg.source = "qg_png" : -1 == this.data.allOff ? this.qg.source = "fg_png" : 2 == this.data.allOff && (this.qg.source = "bptip_png"),
        this.zhadan.text = this.data.bombCount + "",
        this.piacai.text = ChipUtils.formatCoin(this.data.winChips))
    }
    ,
    e.prototype.getName = function(t) {
        return "***" + t.substr(t.length - 3, 3)
    }
    ,
    e
}(eui.ItemRenderer);
__reflect(HistoricalDetailsItem.prototype, "HistoricalDetailsItem", ["eui.UIComponent", "egret.DisplayObject"]);
var HistoricalItemUI = function(t) {
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
        this.xiangqingBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.senVcr, this)
    }
    ,
    e.prototype.dataChanged = function() {
        this.data && (this.zhudanhao.text = this.data.id,
        this.chuangjianshijian.text = this.data.createtime_string,
        this.juhao.text = this.data.roundid,
        this.shijishuying.text = ChipUtils.formatCoin(this.data.money + this.data.servicemoney))
    }
    ,
    e.prototype.senVcr = function() {
        this.data && RoomSocketSender.instance().ReqPlayingVCR(this.data.roundid, this.data.id, this.getTrueCreateTime())
    }
    ,
    e.prototype.getTrueCreateTime = function() {
        var t = this.data.createtime_string;
        t = t.replace(new RegExp(/-/gm), "/");
        var e = t.slice(0, 4)
          , i = t.slice(6, 10)
          , s = t.slice(11);
        t = i + "/" + e + " " + s;
        var a = new Date(t);
        return a.getTime() / 1e3
    }
    ,
    e
}(eui.ItemRenderer);
__reflect(HistoricalItemUI.prototype, "HistoricalItemUI", ["eui.UIComponent", "egret.DisplayObject"]);
var HistoricalView = function(_super) {
    function HistoricalView() {
        var t = _super.call(this) || this;
        return t.page = 1,
        t.maxPage = 1,
        t.count = 8,
        t.hitpArray = [],
        t.nTime = 0,
        t
    }
    return __extends(HistoricalView, _super),
    HistoricalView.prototype.childrenCreated = function() {
        _super.prototype.childrenCreated.call(this),
        this.histList.itemRenderer = HistoricalItemUI,
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this),
        this.width = Utils.curWidth,
        this.height = Utils.curHeight,
        this.stage.addEventListener(egret.Event.RESIZE, this.onResize, this),
        RoomEventDispatcher.getInstance().addEventListener(RoomEventDispatcher.SELECT_DATE, this.onSelectDate, this),
        this.page = 1,
        this.onShowUI()
    }
    ,
    HistoricalView.prototype.onResize = function() {
        this.width = Utils.curWidth,
        this.height = Utils.curHeight
    }
    ,
    HistoricalView.prototype.onClick = function(t) {
        switch (t.target) {
        case this.startingTime_btn:
            this.dateUI.onGetDate(this.startTime, "start");
            break;
        case this.endTime_btn:
            this.dateUI.onGetDate(this.endTime, "end");
            break;
        case this.inquire_btn:
            this.onQuery();
            break;
        case this.nextM_btn:
            if (this.maxPage == this.page)
                return;
            this.page++,
            this.onReqHitprocal(Utils.format(this.startTime, "yyyy-MM-dd hh:mm:ss"), Utils.format(this.endTime, "yyyy-MM-dd hh:mm:ss"));
            break;
        case this.prevM_btn:
            if (1 == this.page)
                return;
            this.page--,
            this.onReqHitprocal(Utils.format(this.startTime, "yyyy-MM-dd hh:mm:ss"), Utils.format(this.endTime, "yyyy-MM-dd hh:mm:ss"));
            break;
        case this.close_btn:
            this.visible = !1
        }
    }
    ,
    HistoricalView.prototype.onQuery = function() {
        return this.startTime > this.endTime ? void TipsUtils.showTipsDownToUp("您选择的开始时间大于或者等于结束时间，无法查询!") : (this.page = 1,
        void this.onReqHitprocal(Utils.format(this.startTime, "yyyy-MM-dd hh:mm:ss"), Utils.format(this.endTime, "yyyy-MM-dd hh:mm:ss")))
    }
    ,
    HistoricalView.prototype.onShowUI = function() {
        this.visible = !0,
        this.gContent.scaleX = this.gContent.scaleY = .8,
        egret.Tween.get(this.gContent).to({
            scaleX: 1,
            scaleY: 1
        }, 500, egret.Ease.backOut),
        this.page = 1;
        var t = new Date;
        t = new Date(new Date((new Date).toLocaleDateString()).getTime() + 864e5 - 1);
        var e = Utils.format(t, "yyyy-MM-dd hh:mm:ss");
        this.endTime_lab.text = e,
        this.endTime = t;
        var i;
        i = new Date(new Date((new Date).toLocaleDateString()).getTime());
        var s = Utils.format(i, "yyyy-MM-dd hh:mm:ss");
        this.startingTime_lab.text = s,
        this.startTime = i,
        this.onReqHitprocal(s, e)
    }
    ,
    HistoricalView.prototype.onReqHitprocal = function(t, e) {
        ffw.BaseHttpRequest.sendRequestGetOnce(PDKParems.ins.ZJAPI, this.succUpdateHitprocal, this.onHttpError, this, "type=game_record&username=" + PDKParems.ins.userName + "&gametype=" + PDKParems.ins.gametype + "&page=" + this.page + "&count=" + this.count + "&start=" + t + "&end=" + e),
        this.nTime = egret.setTimeout(function() {
            this.nTime > 0 && (egret.clearTimeout(this.nTime),
            this.nTime = 0)
        }, this, 5e3)
    }
    ,
    HistoricalView.prototype.onHttpError = function() {}
    ,
    HistoricalView.prototype.succUpdateHitprocal = function(e) {
        this.nTime > 0 && (egret.clearTimeout(this.nTime),
        this.nTime = 0);
        var json = e.target.data;
        if ("" != json) {
            var jsondata = eval("(" + json + ")");
            if (null != jsondata.data && 0 != jsondata.data.length) {
                this.hitpArray.length = 0;
                for (var i = 0; i < jsondata.data.length; i++) {
                    var mode = new HitprocalMode;
                    mode.setData(jsondata.data[i]),
                    this.hitpArray.push(mode)
                }
                this.onShowList(jsondata),
                this.zanwu_lab.visible = !1
            } else
                this.hitpArray = [],
                this.zanwu_lab.visible = !0,
                this.totalGold_lab.text = "0",
                this.subtotal_lab.text = "0条",
                this.subtotalGold_lab.text = "0",
                this.total_lab.text = "0条",
                this.onShowList(jsondata)
        }
    }
    ,
    HistoricalView.prototype.onSelectDate = function(t) {
        var e = t.data.date;
        null != e && ("start" == t.data.time ? (this.startingTime_lab.text = Utils.format(e, "yyyy-MM-dd hh:mm:ss"),
        this.startTime = e) : (this.endTime_lab.text = Utils.format(e, "yyyy-MM-dd hh:mm:ss"),
        this.endTime = e))
    }
    ,
    HistoricalView.prototype.onShowList = function(t) {
        for (var e = 0, i = new eui.ArrayCollection, s = 0; s < this.hitpArray.length; s++) {
            var a = this.hitpArray[s];
            i.addItem(a)
        }
        this.histList.dataProvider = i,
        this.totalGold_lab.text = Number(t.totalMoney) + Number(t.totalService) + "",
        this.subtotal_lab.text = this.hitpArray.length + "条",
        this.subtotalGold_lab.text = e + "",
        this.total_lab.text = t.totalCount + "条",
        this.page_lab.text = "第" + this.page + "页",
        this.maxPage = Math.ceil(Number(t.totalCount) / this.count)
    }
    ,
    HistoricalView.prototype.onClosed = function() {
        for (this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this); this.numChildren > 0; ) {
            var t = this.removeChildAt(0);
            t = null
        }
    }
    ,
    HistoricalView
}(eui.Component);
__reflect(HistoricalView.prototype, "HistoricalView");
var HitpDtlMode = function() {
    function t() {
        this.seatNo = 0,
        this.userName = "",
        this.initChips = 0,
        this.cardValue = [],
        this.cardType = 0,
        this.shouCardTemp = 0,
        this.betChips = 0,
        this.money = 0,
        this.userId = 0
    }
    return t
}();
__reflect(HitpDtlMode.prototype, "HitpDtlMode");
var HitprocalMode = function() {
    function t() {
        this.id = "",
        this.createtime_string = "",
        this.roundid = "",
        this.isbanker = "--",
        this.money = 0,
        this.servicemoney = 0
    }
    return t.prototype.setData = function(t) {
        for (var e in t)
            void 0 != this[e] && "function" != typeof t[e] && (this[e] = t[e])
    }
    ,
    t
}();
__reflect(HitprocalMode.prototype, "HitprocalMode");
var RoomEventDispatcher = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.getInstance = function() {
        return null == this._instance && (this._instance = new e),
        this._instance
    }
    ,
    e.KICK = "KICK",
    e.NOT_CURRENCY = "NOT_CURRENCY",
    e.QUERY_COIN = "QUERY_COIN",
    e.ROOM_LIST = "ROOM_LIST",
    e.NOT_START = "NOT_START",
    e.NOT_DEAL = "NOT_DEAL",
    e.NOT_DISCARD = "NOT_DISCARD",
    e.NOT_BALANCE = "NOT_BALANCE",
    e.NOT_SETTLE = "NOT_SETTLE",
    e.NOT_CHAT = "NOT_CHAT",
    e.TRUST = "TRUST",
    e.ENTER_TABLE = "ENTER_TABLE",
    e.READY = "READY",
    e.NOT_CHAIR = "NOT_CHAIR",
    e.ENTER_ROOM = "ENTER_ROOM",
    e.ENTER_ROOMFAIL = "ENTER_ROOMFAIL",
    e.NOT_SHOWCARD = "NOT_SHOWCARD",
    e.ACCOUNT_AVAILABLE = "ACCOUNT_AVAILABLE",
    e.LEAVE_ROOM = "LEAVE_ROOM",
    e.HIDE_WAIT = "HIDE_WAIT",
    e.SHOW_WAIT = "SHOW_WAIT",
    e.SELECT_DATE = "SELECT_DATE",
    e
}(egret.EventDispatcher);
__reflect(RoomEventDispatcher.prototype, "RoomEventDispatcher");
var RoomProtocol = function() {
    function t() {}
    return t.GF_REQ = 0,
    t.GF_ACK = 0,
    t.COMMON_BASE = 65536,
    t.ACCESS_BASE = 131072,
    t.ROOM_BASE = 262144,
    t.GAME_BASE = 524288,
    t.HEARTBEAT = t.COMMON_BASE + 0,
    t.SVR_REGISTER = t.COMMON_BASE + 1,
    t.KICK = t.COMMON_BASE + 2,
    t.NOT_CURRENCY = t.COMMON_BASE + 16,
    t.TRANSFER = t.COMMON_BASE + 255,
    t.LOGIN = t.ACCESS_BASE + 1,
    t.ROOM_LIST = t.ACCESS_BASE + 2,
    t.ROOM_STATUS = t.ACCESS_BASE + 3,
    t.QUERY_COIN = t.ACCESS_BASE + 16,
    t.PLAYING_VCR = t.ACCESS_BASE + 17,
    t.ENTER_ROOM = t.ROOM_BASE + 1,
    t.LEAVE_ROOM = t.ROOM_BASE + 2,
    t.NOT_ENTERTABLE = t.ROOM_BASE + 16,
    t.ACCOUNT_AVAILABLE = t.ACCESS_BASE + 15,
    t.ENTER_TABLE = t.GAME_BASE + 1,
    t.LEAVE_TABLE = t.GAME_BASE + 2,
    t.READY = t.GAME_BASE + 3,
    t.DISCARD = t.GAME_BASE + 4,
    t.TRUST = t.GAME_BASE + 5,
    t.NOT_CHAIR = t.GAME_BASE + 16,
    t.NOT_START = t.GAME_BASE + 17,
    t.NOT_DEAL = t.GAME_BASE + 18,
    t.NOT_DISCARD = t.GAME_BASE + 19,
    t.NOT_BALANCE = t.GAME_BASE + 20,
    t.NOT_SETTLE = t.GAME_BASE + 21,
    t.NOT_CHAT = t.GAME_BASE + 31,
    t.SVR_CREATE_TABLE = t.GAME_BASE + 64,
    t.SVR_DISMISS_TABLE = t.GAME_BASE + 65,
    t.SVR_NOT_STATUS = t.GAME_BASE + 69,
    t.SVR_NOT_BILL = t.GAME_BASE + 70,
    t.SVR_NOT_GAMEOVER = t.GAME_BASE + 71,
    t.APPOINT_CARD = t.GAME_BASE + 255,
    t.NOT_SHOWCARD = t.GAME_BASE + 22,
    t
}();
__reflect(RoomProtocol.prototype, "RoomProtocol");
var RoomSocketReceive = function() {
    function t() {}
    return t.prototype.initHandlers = function(t, e) {
        switch (t) {
        case RoomProtocol.GF_ACK | RoomProtocol.LOGIN:
            this.LOGIN(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.KICK:
            this.KICK(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.NOT_CURRENCY:
            this.NOT_CURRENCY(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.QUERY_COIN:
            this.QUERY_COIN(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.ROOM_LIST:
            this.ROOM_LIST(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.ROOM_STATUS:
            this.ROOM_STATUS(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.ENTER_ROOM:
            this.ENTER_ROOM(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.LEAVE_ROOM:
            this.LEAVE_ROOM(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.NOT_ENTERTABLE:
            this.NOT_ENTERTABLE(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.PLAYING_VCR:
            this.PLAYING_VCR(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.ENTER_TABLE:
            this.ENTER_TABLE(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.LEAVE_TABLE:
            this.LEAVE_TABLE(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.NOT_CHAIR:
            this.NOT_CHAIR(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.NOT_START:
            this.NOT_START(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.NOT_DEAL:
            this.NOT_DEAL(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.NOT_DISCARD:
            this.NOT_DISCARD(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.NOT_BALANCE:
            this.NOT_BALANCE(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.NOT_SETTLE:
            this.NOT_SETTLE(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.NOT_CHAT:
            this.NOT_CHAT(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.DISCARD:
            this.DISCARD(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.TRUST:
            this.TRUST(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.APPOINT_CARD:
            this.APPOINT_CARD(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.READY:
            this.READY(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.NOT_SHOWCARD:
            this.NOT_SHOWCARD(e);
            break;
        case RoomProtocol.GF_ACK | RoomProtocol.ACCOUNT_AVAILABLE:
            this.ACCOUNT_AVAILABLE(e)
        }
    }
    ,
    t.prototype.LOGIN = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.AckLogin);
        if (console.log("牌桌登录结果" + e.result),
        0 == e.result) {
            PDKParems.ins.userId = e.userId,
            PDKParems.ins.userName = e.userName,
            PDKParems.ins.avatar = e.avatar,
            PDKParems.ins.goldCoin = Number(e.goldCoin),
            PDKParems.ins.diamond = e.diamond,
            e.roomId && null != e.roomId && void 0 != e.roomId && 0 != e.roomId && (PDKParems.ins.roomId = e.roomId,
            GameData.ins.tableId = e.tableId),
            RoomSocketSender.instance().ReqRoomList();
            try {
                window.sendUserInfo(PDKParems.ins.userName, 39)
            } catch (i) {}
        } else
            console.log("登录失败:" + e.result),
            -911 == e.result ? ViewManager.ins.showAlert("对不起，您正在其他游戏中，请稍后再试", 1, function() {
                window.location.href = location.href
            }) : -777 == e.result ? ViewManager.ins.showAlert("您短时间内登录次数过多，请10秒后再试", 1, function() {
                window.location.href = location.href
            }) : -102 == e.result ? ViewManager.ins.showAlert("对不起，账号不存在或链接失效，请重新登录", 1, function() {
                window.location.href = location.href
            }) : -1 == e.result ? ViewManager.ins.showAlert("跑得快游戏维护中", 1, function() {
                window.location.href = location.href
            }) : ViewManager.ins.showAlert("登录失败" + e.result, 1, function() {
                window.location.href = location.href
            })
    }
    ,
    t.prototype.KICK = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.NotKick);
        console.log("踢人消息" + e.userId + " " + e.code),
        RoomWebSocket.instance().CloseSocket(),
        ViewManager.ins.showAlert(e.reason, 1, function() {
            window.location.href = location.href
        }),
        RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.KICK,e))
    }
    ,
    t.prototype.NOT_CURRENCY = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.NotCurrencyChange);
        e.userId == PDKParems.ins.userId && 0 == e.currencyType && (PDKParems.ins.goldCoin = Number(e.currentValue),
        RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.NOT_CURRENCY,null))),
        console.log("货币变更通知" + e.userId + " " + e.changeValue)
    }
    ,
    t.prototype.QUERY_COIN = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.AckQueryCoin);
        console.log("查询玩家金币" + e.result + " " + e.goldCoin),
        0 == e.result && RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.QUERY_COIN,e))
    }
    ,
    t.prototype.ROOM_LIST = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.AckRoomList);
        if (PDKParems.ins.roomList = e.roomList,
        ViewManager.ins.showRoomView(),
        RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.ROOM_LIST,e)),
        PDKParems.ins.roomId && null != PDKParems.ins.roomId && void 0 != PDKParems.ins.roomId && 0 != PDKParems.ins.roomId) {
            ViewManager.ins.showGameView();
            for (var i = 0; i < e.roomList.length; i++)
                if (e.roomList[i].id == PDKParems.ins.roomId)
                    return void RoomSocketSender.instance().ReqEnterRoom(e.roomList[i].id, e.roomList[i].mapId, GameData.ins.tableId)
        }
    }
    ,
    t.prototype.ROOM_STATUS = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.AckRoomStatus);
        console.log("获取房间状态" + e.result + " " + e.status),
        0 == e.result
    }
    ,
    t.prototype.ENTER_ROOM = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.AckEnterRoom);
        if (console.log("进入房间消息" + e.result + " " + e.roomId),
        e.tableMapId && void 0 != e.tableMapId && null != e.tableMapId && 0 != e.tableMapId && (GameData.ins.tableMapId = e.tableMapId,
        RoomSocketSender.instance().ReqEnterTable()),
        ViewManager.ins.hideWait(),
        RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.HIDE_WAIT,e)),
        0 == e.result) {
            GameData.ins.allowedToQuit = !1,
            RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.ENTER_ROOM,e));
            try {
                window.sendUserClick(PDKParems.ins.userName, 39, e.roomId)
            } catch (i) {}
        } else
            100 == e.result ? ViewManager.ins.showAlert("您的账号暂时不能游戏，请与客服联系。", 1, function() {
                ViewManager.ins.hideGameVie()
            }) : -2 == e.result ? (PDKParems.ins.goldCoin = Number(e.goldCoin),
            RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.ENTER_ROOMFAIL,e)),
            TipsUtils.showTipsDownToUp("您当前余额不符合此房间限制。"),
            ViewManager.ins.hideGameVie()) : TipsUtils.showTipsDownToUp("进入房间失败" + e.result)
    }
    ,
    t.prototype.LEAVE_ROOM = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.AckLeaveRoom);
        console.log("退出房间消息" + e.result + " " + e.roomId),
        0 == e.result
    }
    ,
    t.prototype.NOT_ENTERTABLE = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.NotEnterTable);
        console.log("通知进桌消息" + e.roomId + " " + e.tableId),
        PDKParems.ins.roomId = e.roomId,
        GameData.ins.tableId = e.tableId,
        GameData.ins.tableMapId = e.tableMapId,
        RoomSocketSender.instance().ReqEnterTable()
    }
    ,
    t.prototype.PLAYING_VCR = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.AckPlayingRecord);
        console.log("获取行牌记录" + e.roomId + " " + e.roundId),
        0 == e.result ? ViewManager.ins.showHisDetail(e) : TipsUtils.showTipsDownToUp("获取行牌记录失败！" + e.result)
    }
    ,
    t.prototype.ENTER_TABLE = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.AckEnterTable);
        console.log("进入牌桌/坐下消息" + e.result + " " + e.seatNo),
        0 == e.result && (GameData.ins.seatNo = e.seatNo,
        GameData.ins.table = e.table,
        RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.ENTER_TABLE,e)))
    }
    ,
    t.prototype.LEAVE_TABLE = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.AckLeaveTable);
        console.log("离开牌桌消息" + e.result + " " + e.tableId),
        RoomSocketSender.instance().ReqLeaveRoom(),
        0 == e.result
    }
    ,
    t.prototype.NOT_CHAIR = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.NotChairStatus);
        console.log("椅子状态变化" + e.tableId + " " + e.type),
        RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.NOT_CHAIR,e))
    }
    ,
    t.prototype.NOT_START = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.NotStartGame);
        console.log("开始消息" + e.tableId),
        GameData.ins.roundId = e.roundId,
        RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.NOT_START,e))
    }
    ,
    t.prototype.NOT_DEAL = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.NotDealCard);
        GameData.ins.roundId = e.roundId,
		console.log("发牌通知消息" + e.nextSeat + " " + e.seat0),
        RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.NOT_DEAL,e))
    }
    ,
    t.prototype.NOT_DISCARD = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.NotDiscard);
		console.log("出牌消息" + e.tableId + " " + e.seat0),
        RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.NOT_DISCARD,e))
    }
    ,
    t.prototype.NOT_BALANCE = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.NotBalance);
        console.log("炸弹现结通知消息" + e.tableId + " " + e.roundId),
        RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.NOT_BALANCE,e))
    }
    ,
    t.prototype.ACCOUNT_AVAILABLE = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.AckAccountAvailable);
        return console.log("请求玩家状态" + e.result + " " + e.available),
        RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.ACCOUNT_AVAILABLE,e)),
        0 == e.result && (PDKParems.ins.goldCoin = Number(e.goldCoin),
        1 == e.available) ? void ViewManager.ins.showAlert("您的账号暂时不能游戏，请与客服联系。", 1, function() {
            ViewManager.ins.hideGameVie()
        }) : PDKParems.ins.goldCoin < PDKParems.ins.enterRoomData.limit[0] ? void TipsUtils.showTipsDownToUp("您当前余额低于此房间限制。") : PDKParems.ins.goldCoin > PDKParems.ins.enterRoomData.limit[1] ? void TipsUtils.showTipsDownToUp("您当前余额高于此房间限制。") : (PDKParems.ins.roomId = PDKParems.ins.enterRoomData.id,
        PDKParems.ins.mapId = PDKParems.ins.enterRoomData.mapId,
        void ViewManager.ins.showGameView())
    }
    ,
    t.prototype.NOT_SHOWCARD = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.NotShowCards);
        console.log("牌局结算亮牌通知消息"),
        RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.NOT_SHOWCARD,e))
    }
    ,
    t.prototype.NOT_SETTLE = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.NotSettlement);
        console.log("牌局结算通知消息" + e.tableId + " " + e.score),
        RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.NOT_SETTLE,e))
    }
    ,
    t.prototype.NOT_CHAT = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.NotChat);
        console.log("聊天" + e.tableId + " " + e.content);
        var i = e.content
          , s = e.seatNo
          , a = [];
        a.push(i),
        a.push(s),
        RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.NOT_CHAT,a))
    }
    ,
    t.prototype.DISCARD = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.AckDiscard);
        console.log("失败的时候回复该消息" + e.result + " " + e.seatNo),
        TipsUtils.showTipsDownToUp("牌型错误" + e.result),
        0 == e.result
    }
    ,
    t.prototype.READY = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.AckReady);
        console.log("READY" + e.result),
        0 == e.result ? RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.READY,e)) : TipsUtils.showTipsDownToUp("准备失败" + e.result)
    }
    ,
    t.prototype.APPOINT_CARD = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.AckDealCards);
        console.log("APPOINT_CARD" + e.result),
        0 == e.result ? TipsUtils.showTipsDownToUp("指定发牌成功") : TipsUtils.showTipsDownToUp("指定发牌失败")
    }
    ,
    t.prototype.TRUST = function(t) {
        var e = ArrayUtils.decodeByteArray(t, proto.AckTrust);
        console.log("托管／解除托管" + e.result + " " + e.status),
        0 == e.result && RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.TRUST,e))
    }
    ,
    t
}();
__reflect(RoomSocketReceive.prototype, "RoomSocketReceive");
var RoomSocketSender = function() {
    function t() {}
    return t.instance = function() {
        return null != t.ins || (t.ins = new t),
        t.ins
    }
    ,
    t.prototype.HeartBeatReq = function() {
        var t = new proto.Heartbeat;
        t.times = 1;
        var e = proto.Heartbeat.encode(t).finish();
        console.log("发送心跳"),
        RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.HEARTBEAT, e)
    }
    ,
    t.prototype.ReqLogin = function() {
        var t = new proto.ReqLogin;
        t.certType = 1,
        t.cert = PDKParems.ins.token,
        t.nickName = PDKParems.ins.nickName,
        t.avatar = PDKParems.ins.avatar,
        t.channelId = 0;
        var e = proto.ReqLogin.encode(t).finish();
        RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.LOGIN, e),
        console.log("发送登录消息")
    }
    ,
    t.prototype.ReqQueryCoin = function() {
        var t = new proto.ReqQueryCoin;
        t.userId = PDKParems.ins.userId;
        var e = proto.ReqQueryCoin.encode(t).finish();
        RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.QUERY_COIN, e),
        console.log("查询玩家金币")
    }
    ,
    t.prototype.ReqRoomList = function() {
        var t = new proto.ReqRoomList;
        t.userId = PDKParems.ins.userId;
        var e = proto.ReqRoomList.encode(t).finish();
        RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.ROOM_LIST, e),
        console.log("获取房间列表")
    }
    ,
    t.prototype.ReqRoomStatus = function() {
        var t = new proto.ReqRoomStatus;
        t.userId = PDKParems.ins.userId;
        var e = proto.ReqRoomStatus.encode(t).finish();
        RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.ROOM_STATUS, e),
        console.log("获取房间状态")
    }
    ,
    t.prototype.ReqEnterRoom = function(t, e, i, s) {
        void 0 === s && (s = !1);
        var a = new proto.ReqEnterRoom;
        a.userId = PDKParems.ins.userId,
        a.roomId = t,
        a.mapId = e,
        a.tableId = i,
        a.goldCoin = PDKParems.ins.goldCoin,
        1 == s && (a.type = t);
        var n = proto.ReqEnterRoom.encode(a).finish();
        RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.ENTER_ROOM, n),
        console.log("进入房间消息")
    }
    ,
    t.prototype.ReqLeaveRoom = function() {
        var t = new proto.ReqLeaveRoom;
        t.userId = PDKParems.ins.userId,
        t.roomId = PDKParems.ins.roomId,
        t.mapId = PDKParems.ins.mapId,
        t.tableId = GameData.ins.tableId;
        var e = proto.ReqLeaveRoom.encode(t).finish();
        RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.LEAVE_ROOM, e),
        console.log("退出房间消息")
    }
    ,
    t.prototype.ReqPlayingVCR = function(t, e, i) {
        var s = new proto.ReqPlayingRecord;
        s.userId = PDKParems.ins.userId,
        s.roundId = t,
        s.orderId = e,
        s.createTime = i;
        var a = proto.ReqPlayingRecord.encode(s).finish();
        RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.PLAYING_VCR, a),
        console.log("VCR消息")
    }
    ,
    t.prototype.ReqDealCards = function(t) {
        var e = new proto.ReqDealCards;
        e.roomId = PDKParems.ins.roomId,
        e.tableId = GameData.ins.tableId,
        e.tableMapId = GameData.ins.tableMapId,
        e.cards = t;
        var i = proto.ReqDealCards.encode(e).finish();
        RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.APPOINT_CARD, i),
        console.log("指定发牌消息")
    }
    ,
    t.prototype.ReqEnterTable = function() {
        var t = new proto.ReqEnterTable;
        t.userId = PDKParems.ins.userId,
        t.tableId = GameData.ins.tableId,
        t.tableMapId = GameData.ins.tableMapId,
        t.goldCoin = PDKParems.ins.goldCoin;
        var e = proto.ReqEnterTable.encode(t).finish();
        RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.ENTER_TABLE, e),
        console.log("进入牌桌/坐下消息")
    }
    ,
    t.prototype.ReqLeaveTable = function() {
        var t = new proto.ReqLeaveTable;
        t.userId = PDKParems.ins.roomId,
        t.tableId = GameData.ins.tableId,
        t.tableMapId = GameData.ins.tableMapId;
        var e = proto.ReqLeaveTable.encode(t).finish();
        RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.LEAVE_TABLE, e),
        console.log("离开牌桌消息")
    }
    ,
    t.prototype.ReqReady = function(t) {
        var e = new proto.ReqReady;
        e.tableId = GameData.ins.tableId,
        e.tableMapId = GameData.ins.tableMapId,
        e.seatNo = GameData.ins.seatNo,
        e.userId = PDKParems.ins.userId,
        e.status = t;
        var i = proto.ReqReady.encode(e).finish();
        RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.READY, i),
        console.log("准备消息")
    }
    ,
    t.prototype.ReqDiscard = function(t, e) {
        var i = new proto.ReqDiscard;
        i.tableId = GameData.ins.tableId,
        i.tableMapId = GameData.ins.tableMapId,
        i.roundId = GameData.ins.roundId,
        i.seatNo = GameData.ins.seatNo,
        i.userId = PDKParems.ins.userId,
        i.cardType = t,
        i.discards = e;
        var s = proto.ReqDiscard.encode(i).finish();
        RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.DISCARD, s),
        console.log("出牌消息" + i.cardType)
    }
    ,
    t.prototype.ReqAccountAvailable = function() {
        var t = new proto.ReqAccountAvailable;
        t.userId = PDKParems.ins.userId;
        var e = proto.ReqAccountAvailable.encode(t).finish();
        RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.ACCOUNT_AVAILABLE, e)
    }
    ,
    t.prototype.ReqTrust = function(t) {
        var e = new proto.ReqTrust;
        e.tableId = GameData.ins.tableId,
        e.tableMapId = GameData.ins.tableMapId,
        e.roundId = GameData.ins.roundId,
        e.seatNo = GameData.ins.seatNo,
        e.userId = PDKParems.ins.userId,
        e.status = t;
        var i = proto.ReqTrust.encode(e).finish();
        RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.TRUST, i),
        console.log("托管／解除托管")
    }
    ,
    t.prototype.ReqChat = function(t) {
        var e = new proto.ReqChat;
        e.tableId = GameData.ins.tableId,
        e.tableMapId = GameData.ins.tableMapId,
        e.roundId = GameData.ins.roundId,
        e.seatNo = GameData.ins.seatNo,
        e.userId = PDKParems.ins.userId,
        e.type = 0,
        e.content = t;
        var i = proto.ReqChat.encode(e).finish();
        RoomWebSocket.instance().SendMeseage(RoomProtocol.GF_REQ | RoomProtocol.NOT_CHAT, i),
        console.log("请求聊天")
    }
    ,
    t
}();
__reflect(RoomSocketSender.prototype, "RoomSocketSender");
var RoomWebSocket = function() {
    function t() {
        this.gameReceive = new RoomSocketReceive,
        this.isConnected = !1,
        this.nCount = 0,
        this.strRoomIP = "",
        this.webSocket = new egret.WebSocket,
        this.webSocket.type = egret.WebSocket.TYPE_BINARY,
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this),
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this),
        this.webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this),
        this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this)
    }
    return t.instance = function() {
        return null != t.ins || (t.ins = new t),
        t.ins
    }
    ,
    t.prototype.connectServer = function() {
        this.isConnected || (null == this.webSocket && (this.webSocket = new egret.WebSocket,
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this),
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this),
        this.webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this),
        this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this)),
        this.connectSocket())
    }
    ,
    t.prototype.connectSocket = function() {
        console.log("连接服务：" + PDKParems.ins.RoomIP),
        this.isConnected || (PDKParems.ins.isHttp ? ("" == this.strRoomIP && (this.strRoomIP = PDKParems.ins.RoomIP),
        this.webSocket.connectByUrl(this.strRoomIP)) : this.webSocket.connect(PDKParems.ins.RoomIP, PDKParems.ins.RoomPort))
    }
    ,
    t.prototype.onSocketOpen = function() {
        this.isConnected = !0,
        console.log("Room connect socket success"),
        this.startHeart(),
        RoomSocketSender.instance().ReqLogin()
    }
    ,
    t.prototype.SendMeseage = function(t, e) {
        if (0 != this.webSocket.connected) {
            var i = e
              , s = new egret.ByteArray(i)
              , a = s.length
              , n = new egret.ByteArray;
            n.endian = egret.Endian.BIG_ENDIAN,
            n.writeInt(0),
            n.writeInt(t),
            n.writeInt(a),
            n.writeInt(0),
            n.writeBytes(s),
            n.position = 0,
            this.webSocket.writeBytes(n, 0, n.bytesAvailable)
        }
    }
    ,
    t.prototype.onReceiveMessage = function(t) {
        var e = new egret.ByteArray;
        e.endian = egret.Endian.BIG_ENDIAN,
        this.webSocket.readBytes(e);
        var i = (e.readInt(),
        e.readInt())
          , s = e.readInt();
        e.readInt();
        if (e.bytesAvailable >= s) {
            var a = new egret.ByteArray;
            e.readBytes(a, 0, s),
            this.gameReceive.initHandlers(i, a)
        }
    }
    ,
    t.prototype.onSocketClose = function() {
        this.isConnected && (console.log("Room server disconnect"),
        this.isConnected = !1,
        egret.clearTimeout(this.interval),
        ViewManager.ins.showAlert("对不起，您与房间服务器失去链接，请重新登录", 1, function() {
            window.location.href = location.href
        }))
    }
    ,
    t.prototype.reconnectionSever = function() {
        this.ClearSocket(),
        this.connectServer()
    }
    ,
    t.prototype.CloseSocket = function() {
        egret.clearTimeout(this.interval),
        this.webSocket && (this.isConnected = !1,
        this.webSocket.close(),
        console.log("Room socket主动关闭"))
    }
    ,
    t.prototype.ClearSocket = function() {
        egret.clearTimeout(this.interval),
        this.webSocket && (this.webSocket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this),
        this.webSocket.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this),
        this.webSocket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this),
        this.webSocket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this),
        this.webSocket.close(),
        this.isConnected = !1,
        console.log("Room socket主动销毁"),
        this.webSocket = null)
    }
    ,
    t.prototype.onSocketError = function() {
        return this.isConnected = !1,
        egret.clearTimeout(this.interval),
        console.log("socket io错误！"),
        this.nCount += 1,
        this.nCount >= 3,
        this.nCount >= 6 ? void ViewManager.ins.showAlert("对不起，您与服务器失去链接，请重新登录", 1, function() {
            window.location.href = location.href
        }) : void this.connectServer()
    }
    ,
    t.prototype.startHeart = function() {
        egret.clearTimeout(this.interval),
        RoomSocketSender.instance().HeartBeatReq(),
        this.interval = egret.setTimeout(this.startHeart, this, 3e4)
    }
    ,
    t
}();
__reflect(RoomWebSocket.prototype, "RoomWebSocket");
var Main = function(_super) {
    function Main() {
        var t = _super.call(this) || this;
        return t.isCheckGame = !1,
        t.addEventListener(egret.Event.ADDED_TO_STAGE, t.onAddToStage, t),
        t
    }
    return __extends(Main, _super),
    Main.prototype.onAddToStage = function(t) {
        RES.getVirtualUrl = function(t) {
            return t + "?ver=" + PDKParems.ins.version
        }
        ;
        var e = new AssetAdapter;
        egret.registerImplementation("eui.IAssetAdapter", e),
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter),
        "true" == egret.getOption("isLog") || (console.log = function() {
            return !1
        }
        ),
        this.runGame()["catch"](function(t) {
            console.log(t)
        }),
        egret.MainContext.instance.stage.addEventListener(egret.Event.DEACTIVATE, this.onDActivate, this),
        egret.MainContext.instance.stage.addEventListener(egret.Event.ACTIVATE, this.onActivate, this),
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this)
    }
    ,
    Main.prototype.onDActivate = function() {
        PDKParems.ins.activateType = !1,
        localStorage.setItem("effectOn", SoundManager.getInstance().getEffectOn()),
        SoundManager.getInstance().setEffectOn(!1),
        SoundManager.getInstance().stopBg()
    }
    ,
    Main.prototype.onActivate = function() {
        PDKParems.ins.activateType = !0,
        "true" == localStorage.getItem("effectOn") ? (SoundManager.getInstance().setEffectOn(!0),
        SoundManager.getInstance().playBg("bg_mp3")) : (SoundManager.getInstance().setEffectOn(!1),
        SoundManager.getInstance().stopBg())
    }
    ,
    Main.prototype.runGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                case 0:
                    return [4, this.loadResource()];
                case 1:
                    return t.sent(),
                    [2]
                }
            })
        })
    }
    ,
    Main.prototype.loadResource = function() {
        return __awaiter(this, void 0, void 0, function() {
            var t, e;
            return __generator(this, function(i) {
                switch (i.label) {
                case 0:
                    return i.trys.push([0, 5, , 6]),
                    [4, RES.loadConfig("resource/default.res.json", "resource/")];
                case 1:
                    return i.sent(),
                    [4, this.loadTheme()];
                case 2:
                    return i.sent(),
                    [4, RES.loadGroup("preload")];
                case 3:
                    i.sent(),
                    t = new LoadingUI,
                    this.stage.addChild(t);
                    try {
                        window.onLoadComplete()
                    } catch (s) {}
                    return [4, RES.loadGroup("room", 0, t)];
                case 4:
                    return i.sent(),
                    this.createGameScene(),
                    [3, 6];
                case 5:
                    return e = i.sent(),
                    console.error(e),
                    [3, 6];
                case 6:
                    return [2]
                }
            })
        })
    }
    ,
    Main.prototype.loadTheme = function() {
        var t = this;
        return new Promise(function(e, i) {
            var s = new eui.Theme("resource/default.thm.json",t.stage);
            s.addEventListener(eui.UIEvent.COMPLETE, function() {
                e()
            }, t)
        }
        )
    }
    ,
    Main.prototype.createGameScene = function() {
        if (this.addChild(ViewManager.ins),
        1 == PDKParems.ins.isTest)
            egret.getOption("token") && null != egret.getOption("token") && (PDKParems.ins.userName = egret.getOption("token"),
            PDKParems.ins.nickName = egret.getOption("token"),
            PDKParems.ins.token = egret.getOption("token")),
            RoomWebSocket.instance().connectServer(),
            MessageWebSocket.instance().connectServer();
        else {
            egret.ImageLoader.crossOrigin = "anonymous",
            PDKParems.ins.token = egret.getOption("token");
            var t = RES.getRes("config_json")
              , e = window.location.host;
            1 == PDKParems.ins.urlTest && (e = "ew68.cn"),
            "1" == egret.getOption("showHall") && egret.Capabilities.isMobile ? (PDKParems.ins.isShowHall = !0,
            PDKParems.ins.isHttp ? PDKParems.ins.gameHallURL = "https://" + e + t.gameHallURL : PDKParems.ins.gameHallURL = "http://" + e + t.gameHallURL) : "2" == egret.getOption("showHall") ? PDKParems.ins.isShowHall = !0 : PDKParems.ins.isShowHall = !1,
            PDKParems.ins.isHttp = t.isHttps,
            PDKParems.ins.channel = t.channel,
            PDKParems.ins.nChange = t.exchange,
            PDKParems.ins.bNewGame = t.bNewGame,
            PDKParems.ins.token = egret.getOption("token"),
            PDKParems.ins.isHttp ? (PDKParems.ins.baseURL = "https://" + e + t.API,
            PDKParems.ins.ZJAPI = "https://" + e + t.ZJAPI,
            PDKParems.ins.checkGameURL = "https://" + e + t.gamestate,
            PDKParems.ins.headURL = "https://" + e + "/public/head/",
            PDKParems.ins.commURL = "https://" + e + "/public/",
            PDKParems.ins.activeURL = "https://" + e + "/jpgameapi/") : (PDKParems.ins.baseURL = "http://" + e + t.API,
            PDKParems.ins.ZJAPI = "http://" + e + t.ZJAPI,
            PDKParems.ins.checkGameURL = "http://" + e + t.gamestate,
            PDKParems.ins.headURL = "http://" + e + "/public/head/",
            PDKParems.ins.commURL = "http://" + e + "/public/",
            PDKParems.ins.activeURL = "http://" + e + "/jpgameapi/"),
            ffw.BaseHttpRequest.sendRequestGetOnce(PDKParems.ins.baseURL, this.onHttpComplet, this.onIoError, this, "action=getchannelsocket&token=" + PDKParems.ins.token)
        }
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStageClick, this)
    }
    ,
    Main.prototype.onIoError = function() {
        ViewManager.ins.showAlert("请求配置失败，请点确定刷新..", 1, function() {
            window.location.href = location.href
        })
    }
    ,
    Main.prototype.onHttpError = function() {}
    ,
    Main.prototype.onHttpComplet = function(evt) {
        var json = evt.target.data;
        if ("" == json)
            return void ViewManager.ins.showAlert("请求配置失败，请点确定刷新..", 1, function() {
                window.location.href = location.href
            });
        json = json.replace(/^\s+|\s+$/gm, "");
        var jsondata = eval("(" + json + ")");
        0 == jsondata.state ? (PDKParems.ins.RoomIP = jsondata.value.mainsocket + "/gametype39/room",
        PDKParems.ins.backupIP = jsondata.value.backupsocket + "/gametype39/room",
        PDKParems.ins.messageIP = jsondata.value.mainsocket + "/message",
        this.onIpJsonCom()) : ViewManager.ins.showAlert("请求配置失败" + jsondata.state + "，请点确定刷新..", 1, function() {
            window.location.href = location.href
        })
    }
    ,
    Main.prototype.onIpJsonCom = function() {
        ffw.BaseHttpRequest.sendRequestGetOnce(PDKParems.ins.baseURL, this.onGetUserInfo, this.onHttpError, this, "action=getuserinfo&token=" + PDKParems.ins.token),
        "" != egret.getOption("language") && (PDKParems.ins.loginType = 1),
        this.onCheckGameStatus();
        try {
            window.loadingActivityGame(PDKParems.ins.token, PDKParems.ins.gametype, 1)
        } catch (t) {}
    }
    ,
    Main.prototype.onGetUserInfo = function(evt) {
        var json = evt.target.data;
        if ("" != json) {
            var jsondata = eval("(" + json + ")");
            0 == jsondata.state && ("" == jsondata.value.nickname ? PDKParems.ins.nickName = PDKParems.ins.userName : PDKParems.ins.nickName = jsondata.value.nickname,
            PDKParems.ins.isShowCoin = 1 == jsondata.value.coinshowtype ? !0 : !1,
            PDKParems.ins.exchange = jsondata.value.exchangerate,
            PDKParems.ins.channel = jsondata.value.channel,
            0 == isNaN(Number(jsondata.value.icon)) && (PDKParems.ins.userHead = Number(jsondata.value.icon),
            PDKParems.ins.userHead <= 0 && (PDKParems.ins.userHead = 1)))
        }
    }
    ,
    Main.prototype.onCheckGameStatus = function() {
        ffw.BaseHttpRequest.sendRequestGetOnce(PDKParems.ins.checkGameURL, function(e) {
            var json = e.target.data;
            if ("" != json && !this.isCheckGame) {
                var jsondata = eval("(" + json + ")");
                if ("1" == jsondata.result)
                    if (this.isCheckGame = !0,
                    "otherGame" != jsondata.msg)
                        RoomWebSocket.instance().connectServer(),
                        MessageWebSocket.instance().connectServer();
                    else {
                        var str = "";
                        jsondata.otherGame && (str = jsondata.otherGame),
                        ViewManager.ins.showAlert("您正在" + str + "游戏中,请稍后在试", 1, function() {
                            window.location.href = location.href
                        })
                    }
                else
                    0 == this.isCheckGame && (RoomWebSocket.instance().connectServer(),
                    MessageWebSocket.instance().connectServer()),
                    this.isCheckGame = !0
            }
        }, this.onHttpError, this, "token=" + PDKParems.ins.token + "&gametype=" + PDKParems.ins.gametype),
        egret.setTimeout(function() {
            0 == this.isCheckGame && (RoomWebSocket.instance().connectServer(),
            MessageWebSocket.instance().connectServer()),
            this.isCheckGame = !0
        }, this, 5e3)
    }
    ,
    Main.prototype.onResourceLoadComplete = function(t) {
        console.log(t.groupName),
        "sound" == t.groupName && (console.log("sound load finish"),
        PDKParems.ins.isSoundLoad = !0,
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStageClick, this))
    }
    ,
    Main.prototype.onStageClick = function() {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onStageClick, this),
        SoundManager.getInstance().playBg("bg_mp3")
    }
    ,
    Main.activeToGame = function(t) {
        1 == t && (PDKParems.ins.isActiveLoad = !0,
        RoomEventDispatcher.getInstance().dispatchEvent(new egret.Event("isShowActive"))),
        2 == t && (PDKParems.ins.isOpenActive = !1,
        SoundManager.getInstance().setBgOn(!0),
        SoundManager.getInstance().setEffectOn(!0),
        this.updataUserCoin())
    }
    ,
    Main.updataUserCoin = function() {
        ffw.BaseHttpRequest.sendRequestGetOnce(PDKParems.ins.baseURL, function(evt) {
            var json = evt.target.data;
            if ("" != json) {
                var jsondata = eval("(" + json + ")");
                0 == jsondata.state && (PDKParems.ins.goldCoin = jsondata.value.balance,
                RoomEventDispatcher.getInstance().dispatchEvent(new DateEvent(RoomEventDispatcher.NOT_CURRENCY,null)))
            }
        }, function() {}, this, "action=getuserinfo&token=" + PDKParems.ins.token)
    }
    ,
    Main
}(egret.DisplayObjectContainer);
__reflect(Main.prototype, "Main");
var PDKParems = function() {
    function t() {
        this.isTest = !1,
        this.urlTest = !1,
        this.dealCardShow = !1,
        this.version = "1.1.1.7",
        this.isShowCoin = !0,
        this.exchange = 2,
        this.token = "",
        this.checkGameURL = "",
        this.RoomIP = "47.97.180.157",
        this.RoomPort = 6010,
        this.aniTimeMin = 1e3,
        this.aniTimeMax = 3e3,
        this.messageIP = "103.43.19.116",
        this.messagePort = 15090,
        this.backupIP = "",
        this.activateType = !0,
        this.nGameid = -1,
        this.isShowHall = !1,
        this.gameHallURL = "",
        this.gametype = 39,
        this.loginType = 0,
        this.bNewGame = !1,
        this.ZJAPI = "",
        this.isHttp = !1,
        this.headURL = "",
        this.commURL = "",
        this.baseURL = "http://47.99.237.101/lobbyapi/LobbyInterface.aspx",
        this.userName = "10_BAOXUE005",
        this.nickName = "10_BAOXUE005",
        this.userHead = 1,
        this.avatar = "",
        this.channel = 0,
        this.userId = 0,
        this.isSoundLoad = !0,
        this.goldCoin = 0,
        this.diamond = 0,
        this.roomId = 0,
        this.mapId = 0,
        this.nChange = 100,
        this.dealCard = !1,
        this.dealData = [],
        this.roomList = [],
        this.activeURL = "",
        this.arrActive = [],
        this.isActiveLoad = !1,
        this.isOpenActive = !1
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
__reflect(PDKParems.prototype, "PDKParems");
var SoundBg = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._currBg = "",
        e
    }
    return __extends(e, t),
    e.prototype.stop = function() {
        this._currSoundChannel && this._currSoundChannel.stop(),
        this._currSoundChannel = null,
        this._currSound = null,
        this._currBg = ""
    }
    ,
    e.prototype.play = function(t) {
        if (1 == PDKParems.ins.isSoundLoad && this._currBg != t) {
            this.stop(),
            this._currBg = t;
            var e = this.getSound(t);
            e && this.playSound(e)
        }
    }
    ,
    e.prototype.playSound = function(t) {
        this._currSound = t,
        this._currSoundChannel = this._currSound.play(0),
        this._currSoundChannel.volume = this._volume
    }
    ,
    e.prototype.setVolume = function(t) {
        this._volume = t,
        this._currSoundChannel && (this._currSoundChannel.volume = this._volume)
    }
    ,
    e.prototype.loadedPlay = function(t) {
        this._currBg == t && this.playSound(RES.getRes(t))
    }
    ,
    e.prototype.checkCanClear = function(t) {
        return this._currBg != t
    }
    ,
    e
}(BaseSound);
__reflect(SoundBg.prototype, "SoundBg");
var SoundEffects = function(t) {
    function e() {
        return t.call(this) || this
    }
    return __extends(e, t),
    e.prototype.play = function(t) {
        var e = this.getSound(t);
        e && this.playSound(e)
    }
    ,
    e.prototype.playSound = function(t) {
        var e = t.play(0, 1);
        e.volume = this._volume
    }
    ,
    e.prototype.setVolume = function(t) {
        this._volume = t
    }
    ,
    e.prototype.loadedPlay = function(t) {
        this.playSound(RES.getRes(t))
    }
    ,
    e
}(BaseSound);
__reflect(SoundEffects.prototype, "SoundEffects");
var SoundManager = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.isBgPlaying = !1,
        e.bgOn = !0,
        e.effectOn = !0,
        e.bgVolume = .3,
        e.effectVolume = .8,
        e.bg = new SoundBg,
        e.bg.setVolume(e.bgVolume),
        e.effect = new SoundEffects,
        e.effect.setVolume(e.effectVolume),
        e
    }
    return __extends(e, t),
    e.prototype.playButtonClick = function() {
        this.playEffect("button_mp3")
    }
    ,
    e.prototype.playEffect = function(t) {
        PDKParems.ins.isSoundLoad && this.effectOn && this.effect.play(t)
    }
    ,
    e.prototype.playBg = function(t) {
        this.currBg = t,
        this.bgOn && (this.isBgPlaying = !0,
        this.bg.play(t))
    }
    ,
    e.prototype.stopBg = function() {
        this.isBgPlaying = !1,
        this.bg.stop()
    }
    ,
    e.prototype.setEffectOn = function(t) {
        this.effectOn = t
    }
    ,
    e.prototype.getEffectOn = function() {
        return this.effectOn
    }
    ,
    e.prototype.setBgOn = function(t) {
        this.bgOn = t,
        this.bgOn ? this.currBg && this.playBg(this.currBg) : this.stopBg()
    }
    ,
    e.prototype.setBgVolume = function(t) {
        t = Math.min(t, 1),
        t = Math.max(t, 0),
        this.bgVolume = t,
        this.bg.setVolume(this.bgVolume)
    }
    ,
    e.prototype.getBgVolume = function() {
        return this.bgVolume
    }
    ,
    e.prototype.setEffectVolume = function(t) {
        t = Math.min(t, 1),
        t = Math.max(t, 0),
        this.effectVolume = t,
        this.effect.setVolume(this.effectVolume)
    }
    ,
    e.prototype.getEffectVolume = function() {
        return this.effectVolume
    }
    ,
    e.CLEAR_TIME = 18e4,
    e
}(BaseClass);
__reflect(SoundManager.prototype, "SoundManager");
var ArrayUtils = function() {
    function t() {}
    return t.remove = function(t) {
        for (var e = [], i = 1; i < arguments.length; i++)
            e[i - 1] = arguments[i];
        for (var s = t.length - 1; s >= 0; s--)
            e.indexOf(t[s]) >= 0 && t.splice(s, 1)
    }
    ,
    t.decodeByteArray = function(t, e) {
        var i, s = t.bytes;
        if (!e || !e.decode)
            throw "PbClass Error";
        return i = e.decode(s)
    }
    ,
    t
}();
__reflect(ArrayUtils.prototype, "ArrayUtils");
var ChipUtils = function() {
    function t() {}
    return t.tonumber64Upper = function(t) {
        return String(t)
    }
    ,
    t.formatCoin = function(e, i, s) {
        void 0 === i && (i = !1),
        void 0 === s && (s = 11);
        var a = "";
        return a = PDKParems.ins.isShowCoin ? Number(e) + "" : e % PDKParems.ins.exchange == 0 ? e / PDKParems.ins.exchange + "" : Number((e / PDKParems.ins.exchange).toFixed(2)) + "",
        i && a.length > s && (a = a.slice(0, 8) + "..."),
        a = t.fmoney(Number(a), 3, 2, !0)
    }
    ,
    t.fmoney = function(t, e, i, s) {
        i = i > 0 && 20 >= i ? i : 2,
        t = parseFloat((t + "").replace(/[^\d\.-]/g, "")).toFixed(i) + "";
        for (var a = t.split(".")[0].split("").reverse(), n = t.split(".")[1], o = "", r = 0; r < a.length; r++)
            o += a[r] + ((r + 1) % e == 0 && r + 1 != a.length ? "," : "");
        if (s) {
            if ("0" == n || "00" == n)
                return o.split("").reverse().join("");
            var h = "";
            return 2 == n.length ? (h = "0" == n.charAt(1) ? n.substr(0, 1) : n.substr(0, 2),
            o.split("").reverse().join("") + "." + h) : o.split("").reverse().join("") + "." + n
        }
        return o.split("").reverse().join("")
    }
    ,
    t.toNumUpper = function(t) {
        if (void 0 == t)
            return "";
        if (1e4 > t)
            return t.toString();
        var e = t
          , i = Math.floor(e / 1e12) > 0 ? Math.floor(Number(e / 1e12)) + "兆" : "";
        e = t % 1e12;
        var s = Math.floor(e / 1e8) > 0 ? Math.floor(Number(e / 1e8)) + "亿" : "";
        e %= 1e8;
        var a = Math.floor(e / 1e4) > 0 ? Math.floor(Number(e / 1e4)) + "万" : "";
        e %= 1e4;
        var n = Math.floor(e / 1e3) > 0 ? Math.floor(Number(e / 1e3)) + "" : "0";
        e %= 1e3;
        var o = Math.floor(e / 100) > 0 ? Math.floor(Number(e / 100)) + "" : "0";
        e %= 100;
        var r = Math.floor(e / 10) > 0 ? Math.floor(Number(e / 10)) + "" : "0";
        e %= 10;
        var h = Math.floor(e) > 0 ? String(e) : "0"
          , l = "";
        return l = "0" != n || "0" != o || "0" != r || "0" != h ? n + o + r + h : "",
        i + s + a + l == "" ? "0" : i + s + a + l
    }
    ,
    t.toCNUpper = function(e) {
        if (0 == e)
            return t.NUM_CN[0];
        var i = (t.getUnitCount(e),
        e.toFixed(2))
          , s = i.indexOf(".")
          , a = -1 == s ? i : i.substring(0, s)
          , n = -1 == s ? "" : i.substring(s + 1, i.length);
        if (a.length > 16)
            throw new Error("数字太大，无法处理！");
        var o = t.convertnumberegerStr(a) + t.convertDecimalStr(n);
        return o
    }
    ,
    t.divide = function(t, e) {
        var i, s, a = Number(t.toString().replace(".", "")), n = Number(e.toString().replace(".", ""));
        try {
            i = t.toString().split(".")[1].length
        } catch (o) {
            i = 0
        }
        try {
            s = e.toString().split(".")[1].length
        } catch (o) {
            s = 0
        }
        return a / n * Math.pow(10, s - i) + ""
    }
    ,
    t.convertnumberegerStr = function(e) {
        var i = Math.floor(e.length / 4)
          , s = e.length % 4
          , a = [];
        s > 0 && a.push(t.convertThousand(e.substr(0, s), i));
        for (var n = 0; i > n; n++) {
            var o = s + 4 * n
              , r = e.substring(o, o + 4);
            a.push(t.convertThousand(r, i - n - 1))
        }
        return t.convertNodes(a)
    }
    ,
    t.convertNodes = function(e) {
        for (var i, s = "", a = 0; a < e.length; a++) {
            var n = e[a];
            (i && n.desc.length > 0 || n.beforeZero && n.desc.length > 0 && s.length > 0) && (s += t.NUM_CN[0]),
            s += n.desc,
            n.afterZero && a < e.length - 1 ? i = !0 : n.desc.length > 0 && (i = !1)
        }
        return s
    }
    ,
    t.convertThousand = function(e, i) {
        for (var s = new ThousandNode, a = e.length, n = 0; 4 - a > n; n++)
            e = "0" + e;
        var o = Number(e.charAt(0))
          , r = Number(e.charAt(1))
          , h = Number(e.charAt(2))
          , l = Number(e.charAt(3));
        return o + r + h + l == 0 ? s : (0 == o ? s.beforeZero = !0 : s.desc += t.NUM_CN[o] + t.UNITS[0],
        0 == r && "" != s.desc && h + l > 0 ? s.desc += t.NUM_CN[0] : r > 0 && (s.desc += t.NUM_CN[r] + t.UNITS[1]),
        0 == h && "" != s.desc && l > 0 ? s.desc += t.NUM_CN[0] : h > 0 && (s.desc += t.NUM_CN[h] + t.UNITS[2]),
        0 == l ? s.afterZero = !0 : l > 0 && (s.desc += t.NUM_CN[l]),
        s.desc.length > 0 && (s.desc += t.LEVELS[i]),
        s)
    }
    ,
    t.convertDecimalStr = function(e) {
        for (var i = "", s = 0; s < e.length; s++) {
            var a = Number(e.charAt(s));
            a > 0 && (i += t.NUM_CN[a] + t.DECIMAL_UNITS[s])
        }
        return i
    }
    ,
    t.getUnitCount = function(t) {
        return Math.ceil(Math.log(t) / Math.LN10)
    }
    ,
    t.NUM_CN = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
    t.DECIMAL_UNITS = ["角", "分"],
    t.LEVELS = ["", "万", "亿", "兆"],
    t.UNITS = ["千", "百", "拾"],
    t
}();
__reflect(ChipUtils.prototype, "ChipUtils");
var ThousandNode = function() {
    function t() {
        this.desc = ""
    }
    return t
}();
__reflect(ThousandNode.prototype, "ThousandNode");
var DateEvent = function(t) {
    function e(e, i, s, a) {
        void 0 === s && (s = !1),
        void 0 === a && (a = !1);
        var n = t.call(this, e, s, a) || this;
        return n.data = i,
        n
    }
    return __extends(e, t),
    e
}(egret.Event);
__reflect(DateEvent.prototype, "DateEvent");
var DragonBonesFactoryUtils = function() {
    function t() {
        this.dataArray = ["baodan", "fapai", "paixingdongxiao", "quanguanfanguan", "zhadan", "feiji", "pdkshibai", "pdkshengli", "pdkrw", "rmg", "cjg", "zjg", "gjg", "djg", "zzg"];
        for (var t = 0; t < this.dataArray.length; t++) {
            var e = RES.getRes(this.dataArray[t] + "_ske_json")
              , i = RES.getRes(this.dataArray[t] + "_tex_json")
              , s = RES.getRes(this.dataArray[t] + "_tex_png");
            dragonBones.EgretFactory.factory.parseDragonBonesData(e),
            dragonBones.EgretFactory.factory.parseTextureAtlasData(i, s)
        }
    }
    return t.instance = function() {
        return null != t._ins || (t._ins = new t),
        t._ins
    }
    ,
    t.prototype.getFactoryByName = function(t) {
        return dragonBones.EgretFactory.factory.buildArmatureDisplay(t)
    }
    ,
    t
}();
__reflect(DragonBonesFactoryUtils.prototype, "DragonBonesFactoryUtils");
var GameTool = function() {
    function t() {}
    return t.transformToService = function(e) {
        for (var i = [], s = 0; s < e.length; s++)
            i.push(t.tranToSeByCard(e[s]));
        return i
    }
    ,
    t.tranformToClient = function(e) {
        for (var i = [], s = 0; s < e.length; s++)
            i.push(t.tranToClByCard(e[s]));
        return i
    }
    ,
    t.tranToSeByCard = function(t) {
        var e = 0
          , i = Utils.Suit(t)
          , s = Utils.Point(t);
        return s -= 3,
        0 > s && (s += 13),
        e = 13 * (4 - i) + s
    }
    ,
    t.tranToClByCard = function(t) {
        var e = 0
          , i = 4 - Math.floor(t / 13)
          , s = t % 13;
        return s += 3,
        s > 13 && (s -= 13),
        e = Utils.Card(i, s)
    }
    ,
    t.TakeCardPaixu = function(e, i) {
        var s = [];
        if (5 > i || i > 10)
            return e = t.paixu(e, !0);
        e = t.transformToService(e);
        for (var a = e.length, n = [], o = [], r = [], h = [], l = 0; a > l; l++) {
            for (var c = 0, d = l + 1; a > d; d++) {
                var p = e[l] % 54
                  , u = e[d] % 54;
                if (p > 51 && u > 51 || 52 > p && 52 > u) {
                    if (p % 13 != u % 13)
                        break;
                    c++
                }
            }
            switch (c) {
            case 3:
                h.push(e[l], e[l + 1], e[l + 2], e[l + 3]);
            case 2:
                r.push(e[l], e[l + 1], e[l + 2]);
            case 1:
                o.push(e[l], e[l + 1]);
            case 0:
                n.push(e[l])
            }
            l += c
        }
        if (5 == i || 6 == i || 7 == i || 8 == i || 9 == i) {
            var g = this.clearfrom(r, e);
            g = g.reverse(),
            s = this.paddingArr2(r, g)
        }
        if (10 == i) {
            var g = this.clearfrom(h, e);
            g = g.reverse(),
            s = this.paddingArr2(h, g)
        }
        return s = t.tranformToClient(s)
    }
    ,
    t.isIncludes = function(t, e) {
        for (var i = 0; i < e.length; i++)
            if (-1 == t.indexOf(e[i]))
                return !1;
        return !0
    }
    ,
    t.paixu = function(e, i) {
        void 0 === i && (i = !1);
        var s = 0;
        1 == i && (e = t.transformToService(e));
        for (var a = 0; a < e.length; a++)
            for (var n = a + 1; n < e.length; n++)
                e[a] % 13 < e[n] % 13 ? (s = e[a],
                e[a] = e[n],
                e[n] = s) : e[a] % 13 == e[n] % 13 && e[a] < e[n] && (s = e[a],
                e[a] = e[n],
                e[n] = s);
        return 1 == i && (e = t.tranformToClient(e)),
        e
    }
    ,
    t.paixu2 = function(t) {
        for (var e = 0, i = 0; i < t.length; i++)
            for (var s = i + 1; s < t.length; s++)
                t[i] % 13 > t[s] % 13 ? (e = t[i],
                t[i] = t[s],
                t[s] = e) : t[i] % 13 == t[s] % 13 && t[i] > t[s] && (e = t[i],
                t[i] = t[s],
                t[s] = e);
        return t
    }
    ,
    t.clearfrom = function(t, e) {
        for (var i = [], s = 0; s < e.length; s++)
            t.indexOf(e[s]) < 0 && i.push(e[s]);
        return i
    }
    ,
    t.paddingArr = function(t, e) {
        for (var i = 0; i < e.length; i++)
            t.push(e[i]);
        return t
    }
    ,
    t.paddingArr2 = function(t, e) {
        for (var i = [], s = 0; s < t.length; s++)
            i.push(t[s]);
        for (var s = 0; s < e.length; s++)
            i.push(e[s]);
        return i
    }
    ,
    t.paixuByui = function(t) {
        for (var e, i = 0; i < t.length; i++)
            for (var s = i + 1; s < t.length; s++)
                Utils.Point(t[i].value) < Utils.Point(t[s].value) ? (e = t[i],
                t[i] = t[s],
                t[s] = e) : Utils.Point(t[i].value) == Utils.Point(t[s].value) && t[i].value < t[s].value && (e = t[i],
                t[i] = t[s],
                t[s] = e)
    }
    ,
    t.cloneArrayEX = function(t) {
        for (var e = new Array, i = 0; i < t.length; i++)
            e.push(t[i]);
        return e
    }
    ,
    t.cloneArray = function(t) {
        for (var e = new Array, i = 0; i < t.length; i++)
            e.push(t[i] % 13);
        return this.paixu(e),
        e
    }
    ,
    t.checkIsTipStep = function(t, e) {
        for (var i = -1, s = 0; s < e.length; s++) {
            for (var a = this.cloneArray(e[s]), n = this.cloneArray(t), o = !1, r = 0; r < a.length; r++) {
                var h = n.indexOf(a[r]);
                if (!(h >= 0))
                    break;
                n.splice(h, 1),
                r == a.length - 1 && (o = !0)
            }
            o && (a.length < 5 && 0 == n.length ? i = s : a.length >= 5 && n.length < 3 && (i = s))
        }
        return i
    }
    ,
    t.checkHasHeart3 = function(t) {
        for (var e = !1, i = 0; i < t.length; i++)
            if (26 == t[i]) {
                e = !0;
                break
            }
        return e
    }
    ,
    t.GetRuozhiSelectCards2 = function(t) {
        for (var e = new Array, i = this.paixu2(t), s = i.length, a = [], n = [], o = [], r = [], h = 0; s > h; h++) {
            for (var l = 0, c = h + 1; s > c; c++) {
                var d = i[h] % 54
                  , p = i[c] % 54;
                if (d > 51 && p > 51 || 52 > d && 52 > p) {
                    if (d % 13 != p % 13)
                        break;
                    l++
                }
            }
            switch (l) {
            case 3:
                r.push(i[h], i[h + 1], i[h + 2], i[h + 3]);
            case 2:
                o.push(i[h], i[h + 1], i[h + 2]);
            case 1:
                n.push(i[h], i[h + 1]);
            case 0:
                a.push(i[h])
            }
            h += l
        }
        for (var u = new Array, g = new Array, h = 0; h < a.length - 1; h++) {
            g = new Array,
            g.push(a[h]);
            for (var c = h + 1; c < a.length; c++) {
                if (a[h] % 54 % 13 + (c - h) != a[c] % 54 % 13) {
                    h = c - 1;
                    break
                }
                if (a[h] % 54 % 13 == 12 || 4 == Math.floor(a[h] % 54 / 13) || a[c] % 54 % 13 == 12 || 4 == Math.floor(a[c] % 54 / 13))
                    return [];
                g.push(a[c])
            }
            g.length > u.length && (u = g)
        }
        u.length < 5 && (u = []);
        for (var m = new Array, y = new Array, h = 0; h < n.length - 2; h += 2) {
            y = new Array,
            y.push(n[h], n[h + 1]);
            for (var c = h + 2; c < n.length; c += 2) {
                if (n[h] % 54 % 13 + (c - h) / 2 != n[c] % 54 % 13) {
                    h = c - 1;
                    break
                }
                if (n[h] % 54 % 13 == 12 || 4 == Math.floor(n[h] % 54 / 13) || n[c] % 54 % 13 == 12 || 4 == Math.floor(n[c] % 54 / 13))
                    return [];
                y.push(n[c], n[c + 1])
            }
            y.length > m.length && (m = y)
        }
        return m.length / 2 < this.liandui_type && (m = []),
        e = m.length / 2 >= u.length ? m : u
    }
    ,
    t.GetRuozhiSelectCards2ByType = function(t, e) {
        var i = new Array;
        if (0 == e.length || 0 == t.length)
            return i;
        var s = this.CheckCardType(e);
        if ((50 == s[0] && s[1]) >= 5 || 20 == s[0] && s[1] > 1) {
            for (var a = this.paixu2(t), n = a.length, o = [], r = [], h = [], l = [], c = 0; n > c; c++) {
                for (var d = 0, p = c + 1; n > p; p++) {
                    var u = a[c] % 54
                      , g = a[p] % 54;
                    if (u > 51 && g > 51 || 52 > u && 52 > g) {
                        if (u % 13 != g % 13)
                            break;
                        d++
                    }
                }
                switch (d) {
                case 3:
                    l.push(a[c], a[c + 1], a[c + 2], a[c + 3]);
                case 2:
                    h.push(a[c], a[c + 1], a[c + 2]);
                case 1:
                    r.push(a[c], a[c + 1]);
                case 0:
                    o.push(a[c])
                }
                c += d
            }
            if (50 == s[0]) {
                o = this.paixu2(o);
                for (var c = 0; c < o.length - s[1] + 1; c++)
                    if (o[c] % 54 % 13 + s[1] - 1 > s[2]) {
                        for (var m = 1, y = c; y < o.length && (o[y] % 54 % 13 + 1 == o[y + 1] % 54 % 13 && o[y + 1] % 54 % 13 != 12) && (m++,
                        m != s[1]); y++)
                            ;
                        if (m == s[1]) {
                            for (var f = new Array, v = c; c + m > v; v++)
                                f.push(o[v]);
                            return f
                        }
                    }
            }
            if (20 == s[0])
                if (1 == s[1])
                    ;
                else if (s[1] > 1) {
                    r = this.paixu2(r);
                    for (var C = 0; C + 2 * (s[1] - 1) < r.length; C += 2)
                        if (r[C] % 54 % 13 > s[2] - s[1] + 1) {
                            for (var m = 1, y = C; y < C + 2 * (s[1] - 1) && (r[y] % 54 % 13 + 1 == r[y + 2] % 54 % 13 && r[y + 2] % 54 % 13 != 12); y += 2)
                                m++;
                            if (m == s[1]) {
                                for (var T = new Array, v = C; C + 2 * m > v; v++)
                                    T.push(r[v]);
                                return T
                            }
                        }
                }
        }
        return i
    }
    ,
    t.GetTipCards2 = function(t) {
        t = this.transformToService(t);
        var e = new Array;
        if (0 == t.length)
            return e;
        t = this.paixu(t);
        for (var i = t.length, s = [], a = [], n = [], o = [], r = 0; i > r; r++) {
            for (var h = 0, l = r + 1; i > l && t[r] % 13 == t[l] % 13; l++)
                h++;
            switch (h) {
            case 3:
                o.push(t[r], t[r + 1], t[r + 2], t[r + 3]);
                break;
            case 2:
                n.push(t[r], t[r + 1], t[r + 2]);
                break;
            case 1:
                a.push(t[r], t[r + 1]);
                break;
            case 0:
                s.push(t[r])
            }
            r += h
        }
        for (var c = [], d = [], p = [], u = [], r = s.length - 1; r >= 0; r--)
            c.push(s[r]);
        for (var l = a.length - 1; l >= 0; l -= 2)
            c.push(a[l]),
            d.push(a[l], a[l - 1]);
        for (var g = n.length - 1; g >= 0; g -= 3)
            c.push(n[g]),
            d.push(n[g], n[g - 1]),
            p.push(n[g], n[g - 1], n[g - 2]);
        for (var m = o.length - 1; m >= 0; m -= 4)
            c.push(o[m]),
            d.push(o[m], o[m - 1]),
            p.push(o[m], o[m - 1], o[m - 2]),
            u.push(o[m], o[m - 1], o[m - 2], o[m - 3]);
        var y = []
          , f = this.cloneArrayEX(t)
          , v = [];
        y.push(f[0]);
        for (var r = 0; r < f.length - 1; r++)
            f[r + 1] % 13 + 1 == y[y.length - 1] % 13 && y.push(f[r + 1]),
            f[r + 1] % 13 + 1 < y[y.length - 1] % 13 && (y.length >= 5 && v.push(y),
            y = [f[r + 1]]),
            f[r] % 13 == 12 && (y.length >= 5 && v.push(y),
            y = [f[r + 1]]);
        y.length >= 5 && v.push(y),
        v = v.reverse(),
        this.paddingArr(e, v);
        var C = [];
        if (p.length >= 6)
            for (var l = 3; l < p.length; l += 3)
                if (p[l - 3] % 13 + 1 == p[l] % 13) {
                    var T = [p[l - 3], p[l - 2], p[l - 1], p[l], p[l + 1], p[l + 2]]
                      , E = this.clearfrom(T, t);
                    if (E = E.reverse(),
                    E.length >= 4)
                        for (var D = 0; D < E.length - 4; D++) {
                            var _ = this.paddingArr2(T, [E[D], E[D + 1], E[D + 2], E[D + 3]]);
                            C.push(_)
                        }
                }
        C = C.reverse(),
        e = this.paddingArr(e, C);
        for (var b = [], l = 0; l < p.length; l += 3) {
            var T = [p[l], p[l + 1], p[l + 2]]
              , E = this.clearfrom(T, c).reverse();
            if (E.length >= 2)
                for (var w = 0; w < E.length - 1; w++) {
                    var R = this.cloneArrayEX(T);
                    R.push(E[w], E[w + 1]),
                    b.push(R)
                }
            3 == T.length && 3 == GameData.ins.myCards.length && b.push(T),
            1 == E.length && 4 == GameData.ins.myCards.length && (T.push(E[0]),
            b.push(T))
        }
        if (b = b.reverse(),
        e = this.paddingArr(e, b),
        0 == e.length) {
            for (var r = 0; r < t.length; r++)
                e.push([t[r]]);
            e = e.reverse()
        }
        return e
    }
    ,
    t.GetTipCards = function(t, e) {
        t = this.transformToService(t),
        e = this.transformToService(e);
        var i = new Array;
        if (0 == t.length || 0 == e.length)
            return i;
        var s = this.CheckCardType(t);
        if (-1 == s[0])
            return i;
        e = this.paixu(e);
        for (var a = e.length, n = [], o = [], r = [], h = [], l = 0; a > l; l++) {
            for (var c = 0, d = l + 1; a > d && e[l] % 13 == e[d] % 13; d++)
                c++;
            switch (c) {
            case 3:
                h.push(e[l], e[l + 1], e[l + 2], e[l + 3]);
                break;
            case 2:
                r.push(e[l], e[l + 1], e[l + 2]);
                break;
            case 1:
                o.push(e[l], e[l + 1]);
                break;
            case 0:
                n.push(e[l])
            }
            l += c
        }
        for (var p = [], u = [], g = [], m = [], l = n.length - 1; l >= 0; l--)
            p.push(n[l]);
        for (var d = o.length - 1; d >= 0; d -= 2)
            p.push(o[d]),
            u.push(o[d], o[d - 1]);
        for (var y = r.length - 1; y >= 0; y -= 3)
            p.push(r[y]),
            u.push(r[y], r[y - 1]),
            g.push(r[y], r[y - 1], r[y - 2]);
        for (var f = h.length - 1; f >= 0; f -= 4)
            p.push(h[f]),
            u.push(h[f], h[f - 1]),
            g.push(h[f], h[f - 1], h[f - 2]),
            m.push(h[f], h[f - 1], h[f - 2], h[f - 3]);
        if (90 == s[0]) {
            if (0 == this.bomb_type) {
                for (var l = 0; l < m.length; l += 4)
                    m[l] % 13 > s[2] && i.push([m[l], m[l + 1], m[l + 2], m[l + 3]]);
                for (var d = 0; d < g.length; d += 3)
                    g[d] % 13 == 11 && g[d] % 13 > s[2] && i.push([g[d], g[d + 1], g[d + 2]]);
                return i
            }
            if (1 == this.bomb_type) {
                for (var l = 0; l < m.length; l += 4)
                    if (s[2] < m[l] % 13) {
                        var v = [m[l], m[l + 1], m[l + 2], m[l + 3]]
                          , C = this.clearfrom(v, p);
                        C.length > 0 && (v.push(C[0]),
                        i.push(v))
                    }
                for (var d = 0; d < g.length; d += 3)
                    if (g[d] % 13 == 11 && s[2] < g[d] % 13) {
                        var v = [g[d], g[d + 1], g[d + 2]]
                          , C = this.clearfrom(v, p);
                        C.length > 0 && (v.push(C[0]),
                        i.push(v))
                    }
                return i
            }
            if (2 == this.bomb_type) {
                for (var l = 0; l < m.length; l += 4)
                    m[l] % 13 > s[2] && i.push([m[l], m[l + 1], m[l + 2], m[l + 3]]);
                return i
            }
        }
        var T = [];
        if (0 == this.bomb_type) {
            for (var l = 0; l < m.length; l += 4)
                T.push([m[l], m[l + 1], m[l + 2], m[l + 3]]);
            for (var d = 0; d < g.length; d += 3)
                g[d] % 13 == 11 && T.push([g[d], g[d + 1], g[d + 2]])
        } else if (1 == this.bomb_type) {
            for (var l = 0; l < m.length; l += 4) {
                var v = [m[l], m[l + 1], m[l + 2], m[l + 3]]
                  , C = this.clearfrom(v, p);
                C.length > 0 && (v.push(C[0]),
                T.push(v))
            }
            for (var d = 0; d < g.length; d += 3)
                if (g[d] % 13 == 11) {
                    var v = [g[d], g[d + 1], g[d + 2]]
                      , C = this.clearfrom(v, p);
                    C.length > 0 && (v.push(C[0]),
                    T.push(v))
                }
        } else if (2 == this.bomb_type)
            for (var l = 0; l < m.length; l += 4)
                T.push([m[l], m[l + 1], m[l + 2], m[l + 3]]);
        if (10 == s[0]) {
            for (var l = 0; l < p.length; l++)
                s[2] < p[l] % 13 && i.push([p[l]]);
            return i = this.paddingArr(i, T),
            this.showTipClearBoom(i, T)
        }
        if (20 == s[0]) {
            if (1 == s[1]) {
                for (var d = 0; d < u.length; d += 2)
                    s[2] < u[d] % 13 && i.push([u[d], u[d + 1]]);
                return i = this.paddingArr(i, T),
                this.showTipClearBoom(i, T)
            }
            if (s[1] > 1) {
                u = this.paixu2(u);
                for (var E = 0; E + 2 * (s[1] - 1) < u.length; E += 2)
                    if (u[E] % 13 > s[2] - s[1] + 1) {
                        for (var D = 1, _ = E; _ < E + 2 * (s[1] - 1) && u[_] % 13 + 1 == u[_ + 2] % 13; _ += 2)
                            D++;
                        if (D == s[1]) {
                            for (var v = new Array, b = E; E + 2 * D > b; b++)
                                v.push(u[b]);
                            i.push(v)
                        }
                    }
                return i = this.paddingArr(i, T),
                this.showTipClearBoom(i, T)
            }
        }
        if (s[0] >= 30 && s[0] < 40 && 1 == s[1]) {
            for (var d = 0; d < g.length; d += 3)
                if (s[2] < g[d] % 13) {
                    var v = [g[d], g[d + 1], g[d + 2]]
                      , C = this.clearfrom(v, e);
                    if (C = C.reverse(),
                    C.length >= 2)
                        for (var w = 0; w < C.length - 1; w++) {
                            var R = this.cloneArrayEX(v);
                            R.push(C[w], C[w + 1]),
                            C[w] % 13 != R[0] % 13 && C[w + 1] % 13 != R[0] % 13 && i.push(R)
                        }
                    3 == v.length && 3 == GameData.ins.myCards.length && i.push(v),
                    1 == C.length && 4 == GameData.ins.myCards.length && (v.push(C[0]),
                    i.push(v))
                }
            return i = this.paddingArr(i, T),
            this.showTipClearBoom(i, T)
        }
        if (s[0] >= 30 && s[0] < 40 && s[1] > 1 && 10 == t.length) {
            g = this.paixu2(g);
            for (var E = 0; E + 3 * (s[1] - 1) < g.length; E += 3)
                if (g[E] % 13 > s[2])
                    for (var _ = E; _ < E + 3 * (s[1] - 1); _ += 3)
                        if (g[_] % 13 + 1 == g[_ + 3] % 13) {
                            var v = [g[_], g[_ + 1], g[_ + 2], g[_ + 3], g[_ + 4], g[_ + 5]]
                              , C = this.clearfrom(v, e);
                            if (C.length >= 4)
                                for (var A = 0; A < C.length - 4; A++) {
                                    var I = this.paddingArr2(v, [C[A], C[A + 1], C[A + 2], C[A + 3]]);
                                    i.push(I)
                                }
                        }
            return i = this.paddingArr(i, T),
            this.showTipClearBoom(i, T)
        }
        if (30 == s[0] && s[1] > 1) {
            g = this.paixu2(g);
            for (var E = 0; E + 3 * (s[1] - 1) < g.length; E += 3)
                if (g[E] % 54 % 13 > s[2] - s[1] + 1) {
                    for (var D = 1, _ = E; _ < E + 3 * (s[1] - 1) && (g[_] % 54 % 13 + 1 == g[_ + 3] % 54 % 13 && g[_ + 3] % 54 % 13 != 12); _ += 3)
                        D++;
                    if (D == s[1]) {
                        for (var S = new Array, b = E; E + 3 * D > b; b++)
                            S.push(g[b]);
                        i.push(S)
                    }
                }
            return i = this.paddingArr(i, T),
            this.showTipClearBoom(i, T)
        }
        if ((41 == s[0] || 43 == s[0] || 44 == s[0]) && 1 == s[1]) {
            for (var d = 0; d < m.length; d += 4)
                if (s[2] < m[d] % 13) {
                    var v = [m[d], m[d + 1], m[d + 2], m[d + 3]];
                    if (41 == s[0]) {
                        var C = this.clearfrom(v, p);
                        C.length > 0 && (v.push(C[0]),
                        i.push(v))
                    } else if (43 == s[0]) {
                        var U = this.clearfrom(v, p);
                        U.length > 1 && v.push(U[0], U[1]),
                        i.push(v)
                    } else if (43 == s[0]) {
                        var U = this.clearfrom(v, p);
                        U.length > 2 && v.push(U[0], U[1], U[2]),
                        i.push(v)
                    }
                }
            return i = this.paddingArr(i, T),
            this.showTipClearBoom(i, T)
        }
        if (50 == s[0]) {
            p = this.paixu2(p);
            for (var l = 0; l < p.length - s[1] + 1; l++)
                if (p[l] % 13 + s[1] - 1 > s[2]) {
                    for (var D = 1, _ = l; _ < p.length && (p[_] % 13 + 1 == p[_ + 1] % 13 && p[_ + 1] % 13 != 12) && (D++,
                    D != s[1]); _++)
                        ;
                    if (D == s[1]) {
                        for (var v = new Array, b = l; l + D > b; b++)
                            v.push(p[b]);
                        i.push(v)
                    }
                }
            return i = this.paddingArr(i, T),
            this.showTipClearBoom(i, T)
        }
        return this.showTipClearBoom(i, T)
    }
    ,
    t.showTipClearBoom = function(t, e) {
        if (null == e || 0 == e.length)
            return t;
        for (var i = [], s = 0; s < e.length; s++)
            for (var a = e[s], n = 0; n < a.length; n++)
                for (var o = a[n], r = 0; r < t.length; r++) {
                    var h = t[r];
                    0 == this.isBoom(h) && -1 != h.indexOf(o) && (i.push(h),
                    t[r] = [])
                }
        for (var s = 0; s < i.length; s++)
            t.push(i[s]);
        for (var l = [], s = 0; s < t.length; s++)
            0 != t[s].length && l.push(t[s]);
        return l
    }
    ,
    t.isBoom = function(t) {
        return 4 != t.length ? !1 : t[0] % 13 == t[1] % 13 && t[0] % 13 == t[2] % 13 && t[0] % 13 == t[3] % 13 ? !0 : !1
    }
    ,
    t.userGetCardType = function(e, i) {
        void 0 === i && (i = !1);
        var s = -1;
        e = t.transformToService(e);
        var a = this.CheckCardType(e, i);
        return 10 == a[0] ? s = 1 : 20 == a[0] && 1 == a[1] ? s = 2 : 50 == a[0] && a[1] >= 5 ? s = 3 : 20 == a[0] && a[1] >= 2 ? s = 4 : 30 == a[0] && a[1] >= 2 ? s = 6 : 30 == a[0] && 1 == a[1] && 1 == i ? s = 5 : 31 == a[0] && 1 == a[1] && 1 == i ? s = 7 : 32 == a[0] && 1 == a[1] ? s = 8 : 33 == a[0] && 1 == a[1] ? s = 8 : 44 == a[0] && 1 == a[1] ? s = 10 : 32 == a[0] && 2 == a[1] ? s = 9 : 33 == a[0] && 2 == a[1] ? s = 9 : 34 == a[0] && 1 == a[1] ? s = 9 : 90 == a[0] && 1 == a[1] && (s = 11),
        s
    }
    ,
    t.CheckCardType = function(t, e) {
        void 0 === e && (e = !1);
        var i = [-1, -1, -1];
        if (0 == t.length)
            return i;
        i = this.CheckBaseCardType(t);
        var s = i[0]
          , a = i[1]
          , n = i[2];
        return 20 == s && a > 1 && (a >= this.liandui_type || (i = [-1, -1, -1])),
        50 == s && n % 13 == 12 && (i = [-1, -1, -1]),
        this.sandaidui || 32 != s || (i = [-1, -1, -1]),
        this.sidaiyidan || 41 != s || (i = [-1, -1, -1]),
        42 == s && (i = [-1, -1, -1]),
        this.sidailiangdan || 43 != s || (i = [-1, -1, -1]),
        e || 31 != s && 30 != s || 1 != a || (i = [-1, -1, -1]),
        0 == this.bomb_type ? (40 == s && 1 == a && (i = [90, 1, n]),
        30 == s && 1 == a && 11 == n && (i = [90, 1, n])) : 1 == this.bomb_type ? (41 == s && 1 == a && (i = [90, 1, n]),
        31 == s && 1 == a && 11 == n && (i = [90, 1, n])) : 2 == this.bomb_type && 40 == s && 1 == a && (i = [90, 1, n]),
        i
    }
    ,
    t.CheckBaseCardType = function(t) {
        var e = [-1, -1, -1];
        t = this.paixu(t);
        for (var i = t.length, s = [], a = [], n = [], o = [], r = 0; i > r; r++) {
            for (var h = 0, l = r + 1; i > l && t[r] % 13 == t[l] % 13; l++)
                h++;
            switch (h) {
            case 3:
                o.push(t[r]),
                o.push(t[r + 1]),
                o.push(t[r + 2]),
                o.push(t[r + 3]),
                r++;
            case 2:
                n.push(t[r]),
                n.push(t[r + 1]),
                n.push(t[r + 2]),
                r++;
            case 1:
                a.push(t[r]),
                a.push(t[r + 1]),
                r++;
            case 0:
                s.push(t[r])
            }
        }
        if (1 == i)
            return e = [10, 1, s[0] % 13];
        if (a.length == i) {
            if (2 != a.length) {
                for (var r = 0; r < a.length - 2; r += 2)
                    if (a[r] % 13 - 1 != a[r + 2] % 13)
                        return e;
                return e = [20, a.length / 2, a[0] % 13]
            }
            e = [20, 1, a[0] % 13]
        }
        if (o.length == i && 4 == o.length)
            return e = [40, 1, o[0] % 13];
        if (i - o.length == o.length / 4 && 4 == o.length)
            return e = [41, 1, o[0] % 13];
        var c = this.clearfrom(o, a);
        if ((i - o.length) / 2 == o.length / 4 && o.length / 4 == c.length / 2 && 4 == o.length)
            return e = [42, 1, o[0] % 13];
        var d = this.clearfrom(o, s);
        if ((i - o.length) / 2 == o.length / 4 && o.length / 4 == d.length / 2 && 4 == o.length)
            return e = [43, 1, o[0] % 13];
        if ((i - o.length) / 3 == o.length / 4 && 4 == o.length)
            return e = [44, 1, o[0] % 13];
        if (n.length == i) {
            if (3 == n.length)
                return e = [30, 1, n[0] % 13];
            for (var r = 0; r < n.length - 3; r += 3)
                if (n[r] % 13 - 1 != n[r + 3] % 13)
                    return e;
            return e = [30, n.length / 3, n[0] % 13]
        }
        if (i - n.length == n.length / 3) {
            if (3 == n.length)
                return e = [31, 1, n[0] % 13];
            for (var p = this.clearfrom(n, s), r = 0; r < n.length - 3; r += 3)
                if (n[r] % 13 - 1 != n[r + 3] % 13)
                    return e;
            return p.length != n.length / 3 ? e : e = [31, n.length / 3, n[0] % 13]
        }
        if (c = this.clearfrom(n, a),
        (i - n.length) / 2 == n.length / 3 && n.length / 3 == c.length / 2) {
            if (3 == n.length)
                return e = [32, 1, n[0] % 13];
            for (var r = 0; r < n.length - 3; r += 3)
                if (n[r] % 13 - 1 != n[r + 3] % 13)
                    return e;
            return e = [32, n.length / 3, n[0] % 13]
        }
        if ((i - n.length) / 2 == n.length / 3) {
            if (3 == n.length)
                return e = [33, 1, n[0] % 13];
            for (var r = 0; r < n.length - 3; r += 3)
                if (n[r] % 13 - 1 != n[r + 3] % 13)
                    return e;
            return e = [33, n.length / 3, n[0] % 13]
        }
        if (10 == i && n.length >= 6)
            return e = [34, 2, n[0] % 13];
        if (i > 4 && i == s.length) {
            for (var r = 0; r < s.length - 1; r++)
                if (s[r] % 13 - 1 != s[r + 1] % 13)
                    return e;
            return e = [50, s.length, s[0] % 13]
        }
        return e
    }
    ,
    t.GamePlayCardSound = function(t, e) {
        var i = Utils.Point(e[0]);
        if (1 == t) {
            var s = i + "";
            switch (i) {
            case 11:
                s = "J";
                break;
            case 12:
                s = "Q";
                break;
            case 13:
                s = "K";
                break;
            case 1:
                s = "A"
            }
            SoundManager.getInstance().playEffect("b_" + s + "_mp3")
        }
        if (2 == t) {
            var s = i + "";
            switch (i) {
            case 11:
                s = "J";
                break;
            case 12:
                s = "Q";
                break;
            case 13:
                s = "K";
                break;
            case 1:
                s = "A"
            }
            SoundManager.getInstance().playEffect("b_pairOf" + s + "_mp3")
        }
    }
    ,
    t.zhuang_type = 0,
    t.bomb_type = 2,
    t.liandui_type = 2,
    t.sandaidui = !0,
    t.sidaiyidan = !0,
    t.sidailiangdan = !0,
    t
}();
__reflect(GameTool.prototype, "GameTool");
var ScreenManager = function() {
    function t(e) {
        if ("ios" == egret.Capabilities.os.toLowerCase() && egret.Capabilities.isMobile) {
            var i = (navigator.userAgent,
            this.getBrowerType());
            "Sarfari" == i && (t._baseUI = e,
            window.addEventListener("resize", this.windowResizeHandler),
            this.windowResizeHandler(null))
        }
    }
    return t.prototype.getBrowerType = function() {
        var t = navigator.userAgent
          , e = "";
        return t.indexOf("AppleWebKit") > -1 && (e = "Sarfari"),
        t.indexOf("MQQBrowser") > -1 && (e = "IOSQQBrowser"),
        t.indexOf("CriOS") > -1 && (e = "IOSChrome"),
        t.indexOf("QihooBrowser") > -1 && (e = "IOS360Browser"),
        t.indexOf("SogouMobileBrowser") > -1 && (e = "IOSSogou"),
        t.indexOf("FxiOS") > -1 && (e = "IOSFirefox"),
        t.indexOf("baidubrowser") > -1 && (e = "IOSBaidu"),
        t.indexOf("UCBrowser") > -1 && (e = "IOSUC"),
        t.indexOf("MXiOS") > -1 && (e = "IOSAOYOU"),
        e
    }
    ,
    t.prototype.windowResizeHandler = function(e) {
        if (window.parent.innerHeight > window.parent.innerWidth)
            return t._baseUI.scaleX = t._baseUI.scaleY = 1,
            t._baseUI.x = 0,
            void window.scrollTo(0, 0);
        if (window.parent.innerHeight >= window.parent.document.documentElement.clientHeight)
            return t._baseUI.scaleX = t._baseUI.scaleY = 1,
            t._baseUI.x = 0,
            void window.scrollTo(0, 0);
        var i = Number((window.parent.innerHeight / window.parent.document.documentElement.clientHeight).toFixed(2));
        return t._baseUI.scaleX = t._baseUI.scaleY = i,
        t._baseUI.x = (Utils.curWidth - Utils.curWidth * i) / 2,
        void window.scrollTo(0, 0)
    }
    ,
    t
}();
__reflect(ScreenManager.prototype, "ScreenManager");
var TipsUtils;
!function(t) {
    function e(e, i) {
        void 0 === e && (e = ""),
        void 0 === i && (i = !1);
        var s = new egret.TextField;
        s.size = 30,
        s.y = Utils.curHeight / 1,
        i ? s.textColor = t.TextColors.red : s.textColor = t.TextColors.green,
        s.alpha = 0,
        s.text = e,
        s.strokeColor = 0,
        s.x = Utils.curWidth / 2 - s.width / 2,
        s.stroke = 2,
        s.bold = !0,
        s.textAlign = egret.HorizontalAlign.CENTER,
        t.topLayer.contains(s) || t.topLayer.addChild(s);
        var a = function() {
            t.topLayer.contains(s) && (t.topLayer.removeChild(s),
            s = null)
        }
          , n = function() {
            egret.Tween.get(s).to({
                alpha: 0
            }, 500).call(a, this)
        };
        s.visible = !0,
        egret.Tween.get(s).to({
            y: s.y - 120,
            alpha: 1
        }, 800, egret.Ease.backOut).wait(1e3).call(n, this)
    }
    function i(e, i, s) {
        void 0 === e && (e = ""),
        void 0 === i && (i = !1),
        void 0 === s && (s = !0);
        var a = new egret.TextField;
        a.size = 24,
        a.y = Utils.curHeight / 2,
        i ? a.textColor = t.TextColors.red : a.textColor = t.TextColors.green,
        a.alpha = 0,
        a.text = e,
        a.strokeColor = 0,
        s ? a.x = -a.width : a.x = Utils.curWidth,
        a.stroke = 2,
        a.bold = !0,
        a.textAlign = egret.HorizontalAlign.CENTER,
        t.topLayer.contains(a) || t.topLayer.addChild(a),
        s ? egret.Tween.get(a).to({
            x: Utils.curWidth / 2 - a.width / 2 - 50,
            alpha: 1
        }, 300, egret.Ease.sineInOut) : egret.Tween.get(a).to({
            x: Utils.curWidth / 2 - a.width / 2 + 50,
            alpha: 1
        }, 300, egret.Ease.sineInOut),
        egret.setTimeout(function() {
            s ? egret.Tween.get(a).to({
                x: a.x + 100
            }, 500) : egret.Tween.get(a).to({
                x: a.x - 100
            }, 500)
        }, this, 300),
        egret.setTimeout(function() {
            s ? egret.Tween.get(a).to({
                x: Utils.curWidth
            }, 300, egret.Ease.sineIn) : egret.Tween.get(a).to({
                x: -a.width
            }, 300, egret.Ease.sineIn)
        }, this, 800),
        egret.setTimeout(function() {
            t.topLayer.contains(a) && (t.topLayer.removeChild(a),
            a = null)
        }, this, 1100)
    }
    function s(e, i) {
        void 0 === e && (e = ""),
        void 0 === i && (i = !1);
        var s = new egret.TextField;
        s.size = 24,
        s.y = Utils.curHeight / 2,
        i ? s.textColor = t.TextColors.red : s.textColor = t.TextColors.green,
        s.alpha = 0,
        s.text = e,
        s.strokeColor = 0,
        s.x = Utils.curWidth / 2,
        s.stroke = 2,
        s.bold = !0,
        s.textAlign = egret.HorizontalAlign.CENTER,
        s.anchorOffsetX = s.width / 2,
        s.anchorOffsetY = s.height / 2,
        s.scaleX = 0,
        s.scaleY = 0,
        t.topLayer.contains(s) || t.topLayer.addChild(s);
        var a = function() {
            t.topLayer.contains(s) && (t.topLayer.removeChild(s),
            s = null)
        };
        egret.Tween.get(s).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 200),
        egret.setTimeout(function() {
            egret.Tween.get(s).to({
                alpha: 0
            }, 500).call(a, this)
        }, this, 1e3)
    }
    function a(e, i) {
        void 0 === e && (e = ""),
        void 0 === i && (i = !1);
        var s = new egret.TextField;
        s.size = 24,
        s.y = Utils.curHeight / 2,
        i ? s.textColor = t.TextColors.red : s.textColor = t.TextColors.green,
        s.alpha = 0,
        s.text = e,
        s.strokeColor = 0,
        s.x = Utils.curWidth / 2,
        s.stroke = 2,
        s.bold = !0,
        s.textAlign = egret.HorizontalAlign.CENTER,
        s.anchorOffsetX = s.width / 2,
        s.anchorOffsetY = s.height / 2,
        s.scaleX = 4,
        s.scaleY = 4,
        t.topLayer.contains(s) || t.topLayer.addChild(s);
        var a = function() {
            t.topLayer.contains(s) && (t.topLayer.removeChild(s),
            s = null)
        };
        egret.Tween.get(s).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 200),
        egret.setTimeout(function() {
            egret.Tween.get(s).to({
                alpha: 0
            }, 500).call(a, this)
        }, this, 1e3)
    }
    function n() {
        t.topLayer && t.topLayer.removeChildren()
    }
    t.TextColors = {
        white: 16777215,
        milkWhite: 16511407,
        grayWhite: 13547170,
        yellow: 16776960,
        lightYellow: 16765813,
        orangeYellow: 16750848,
        red: 15799040,
        green: 58624,
        blue: 1742039,
        grayBlue: 3101047,
        purple: 15284466,
        pink: 16724016,
        black: 3026221,
        golden: 16766720
    },
    t.showTipsDownToUp = e,
    t.showTipsLeftOrRight = i,
    t.showTipsFromCenter = s,
    t.showTipsBigToSmall = a,
    t.hideTip = n
}(TipsUtils || (TipsUtils = {}));
var Utils = function() {
    function t() {}
    return t.createBitmapByName = function(t) {
        var e = new egret.Bitmap
          , i = RES.getRes(t);
        return e.texture = i,
        e
    }
    ,
    t.createBitmapFromSheet = function(t, e) {
        void 0 === e && (e = "gameRes");
        var i = RES.getRes(e)
          , s = i.getTexture(t)
          , a = new egret.Bitmap;
        return a.texture = s,
        a
    }
    ,
    Object.defineProperty(t, "curWidth", {
        get: function() {
            var t = 0 == egret.MainContext.instance.stage.stageWidth ? 1920 : egret.MainContext.instance.stage.stageWidth;
            return t
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t, "curHeight", {
        get: function() {
            var t = 0 == egret.MainContext.instance.stage.stageHeight ? 1080 : egret.MainContext.instance.stage.stageHeight;
            return t
        },
        enumerable: !0,
        configurable: !0
    }),
    t.getRoomItemAni = function(t) {
        var e = "";
        return 1 == t ? e = "rmg" : 2 == t ? e = "cjg" : 3 == t ? e = "zjg" : 4 == t ? e = "gjg" : 5 == t ? e = "djg" : 6 == t && (e = "zzg"),
        e
    }
    ,
    t.Card = function(t, e) {
        return t << 4 | e
    }
    ,
    t.Suit = function(t) {
        return t >> 4 & 15
    }
    ,
    t.Point = function(t) {
        return 15 & t
    }
    ,
    t.setContinueDisable = function(t, e) {
        if (0 == e) {
            var i = [.3, .6, 0, 0, 0, .3, .6, 0, 0, 0, .3, .6, 0, 0, 0, 0, 0, 0, 1, 0]
              , s = new egret.ColorMatrixFilter(i);
            t.touchEnabled = !1,
            null != t.touchChildren && (t.touchChildren = !1),
            t.filters = [s]
        } else
            t.touchEnabled = !0,
            null != t.touchChildren && (t.touchChildren = !0),
            t.filters && (t.filters = [])
    }
    ,
    t.arrayIsEqu = function(t, e) {
        for (var i = 0; i < e.length; i++)
            if (JSON.stringify(t.sort()) === JSON.stringify(e[i].sort()))
                return !0;
        return !1
    }
    ,
    t.substring = function(t, e) {
        for (var i = [], s = "", a = this.getCharLength(t), n = 0; a > n; n++)
            s += t.substring(n, n + 1),
            this.getCharLength(s) >= e && (i.push(s),
            s = "");
        return -1 == i.indexOf(s) && i.push(s),
        i
    }
    ,
    t.getCharLength = function(t) {
        for (var e = 0, i = function(t) {
            var e = t.match(/[\u4E00-\u9FA5\uf900-\ufa2d]/gi);
            return null != e && 0 != e.length ? !0 : !1
        }, s = 0; s < t.length; s++) {
            var a = t.charAt(s);
            e += i(a) ? 2 : 1
        }
        return e
    }
    ,
    t.format = function(t, e) {
        var i = {
            "M+": t.getMonth() + 1,
            "d+": t.getDate(),
            "h+": t.getHours(),
            "m+": t.getMinutes(),
            "s+": t.getSeconds(),
            "q+": Math.floor((t.getMonth() + 3) / 3),
            S: t.getMilliseconds()
        };
        /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var s in i)
            new RegExp("(" + s + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? i[s] : ("00" + i[s]).substr(("" + i[s]).length)));
        return e
    }
    ,
    t.getHeadByName = function(t) {
        for (var e = 0, i = 0; i < t.length; i++)
            e += t.charCodeAt(i);
        return e % 15 + 1
    }
    ,
    t
}();
__reflect(Utils.prototype, "Utils");
