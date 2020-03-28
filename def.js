function __extends(d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
}
;window.generateEUI = {};
generateEUI.paths = {};
generateEUI.styles = undefined;
generateEUI.skins = {
    "RoomView": "resource/eui_skins/room/RoomView.exml",
    "BaseButton": "resource/eui_skins/base/BaseButton.exml",
    "RoomListItem": "resource/eui_skins/room/RoomListItem.exml",
    "RuleView": "resource/eui_skins/room/RuleView.exml",
    "GameView": "resource/eui_skins/game/GameView.exml",
    "UserItem": "resource/eui_skins/game/UserItem.exml",
    "HistoricalItemUI": "resource/eui_skins/room/HistoricalItem.exml",
    "HistoricalView": "resource/eui_skins/room/HistoricalViewSkin.exml",
    "HistoricalDetails": "resource/eui_skins/room/HistorcialDetailsEui.exml",
    "HistoricalDetailsItem": "resource/eui_skins/room/HistorcialDetailsItemEui.exml",
    "DealCardUI": "resource/eui_skins/game/DealCardUI.exml",
    "GameChatUI": "resource/eui_skins/game/GameChatUI.exml",
    "AlertUI": "resource/eui_skins/AlertUI.exml",
    "GameResultUI": "resource/eui_skins/game/GameResultUI.exml",
    "GameClock": "resource/eui_skins/game/GameClock.exml",
    "WaitEUI": "resource/eui_skins/WaitEUI.exml",
    "SetDlg": "resource/eui_skins/SetDlg.exml",
    "ContinueButton": "resource/eui_skins/base/ContinueButton.exml",
    "LoadingTip": "resource/eui_skins/game/LoadingTip.exml",
    "LoadingTipCard": "resource/eui_skins/game/LoadingTipCard.exml"
};
generateEUI.paths['resource/eui_skins/AlertUI.exml'] = window.AlertUISkin = (function(_super) {
    __extends(AlertUISkin, _super);
    function AlertUISkin() {
        _super.call(this);
        this.skinParts = ["btn_close", "lbContent", "btn_sure"];

        this.height = 1080;
        this.width = 1920;
        this.elementsContent = [this._Rect1_i(), this._Group1_i()];
    }
    var _proto = AlertUISkin.prototype;

    _proto._Rect1_i = function() {
        var t = new eui.Rect();
        t.fillAlpha = 0.7;
        t.fillColor = 0x000000;
        t.percentHeight = 100;
        t.percentWidth = 100;
        return t;
    }
    ;
    _proto._Group1_i = function() {
        var t = new eui.Group();
        t.horizontalCenter = 0;
        t.verticalCenter = 0;
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.btn_close_i(), this.lbContent_i(), this.btn_sure_i(), this._Image3_i()];
        return t;
    }
    ;
    _proto._Image1_i = function() {
        var t = new eui.Image();
        t.source = "wk_png";
        return t;
    }
    ;
    _proto._Image2_i = function() {
        var t = new eui.Image();
        t.horizontalCenter = 0.5;
        t.source = "nk_png";
        t.verticalCenter = -20;
        return t;
    }
    ;
    _proto.btn_close_i = function() {
        var t = new eui.Image();
        this.btn_close = t;
        t.right = -36;
        t.scaleX = 1;
        t.scaleY = 1;
        t.source = "gb_png";
        t.y = -30.64;
        return t;
    }
    ;
    _proto.lbContent_i = function() {
        var t = new eui.Label();
        this.lbContent = t;
        t.anchorOffsetX = 0;
        t.anchorOffsetY = 0;
        t.fontFamily = "Microsoft YaHei";
        t.height = 297.61;
        t.horizontalCenter = 0;
        t.lineSpacing = 10;
        t.size = 60;
        t.text = "111sdjfljsdfklsjdfksdjfklsdfjklsdjflsdjflsdjflksd;f";
        t.textAlign = "center";
        t.textColor = 0x6c3a02;
        t.verticalAlign = "middle";
        t.verticalCenter = -29.5;
        t.width = 903.79;
        return t;
    }
    ;
    _proto.btn_sure_i = function() {
        var t = new BaseButton();
        this.btn_sure = t;
        t.horizontalCenter = 0;
        t.icon = "qdb_png";
        t.y = 644;
        return t;
    }
    ;
    _proto._Image3_i = function() {
        var t = new eui.Image();
        t.horizontalCenter = 0.5;
        t.source = "tst_png";
        t.y = 9.36;
        return t;
    }
    ;
    return AlertUISkin;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/base/BaseButton.exml'] = window.BaseButtonSkin = (function(_super) {
    __extends(BaseButtonSkin, _super);
    function BaseButtonSkin() {
        _super.call(this);
        this.skinParts = ["iconDisplay"];

        this.elementsContent = [this.iconDisplay_i()];
        this.states = [new eui.State("up",[]), new eui.State("down",[]), new eui.State("disabled",[new eui.SetProperty("iconDisplay","alpha",0.5)])];
    }
    var _proto = BaseButtonSkin.prototype;

    _proto.iconDisplay_i = function() {
        var t = new eui.Image();
        this.iconDisplay = t;
        t.horizontalCenter = 0;
        t.source = "dt_png";
        t.verticalCenter = 0;
        return t;
    }
    ;
    return BaseButtonSkin;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/base/ContinueButton.exml'] = window.ContinueButtonSkin = (function(_super) {
    __extends(ContinueButtonSkin, _super);
    function ContinueButtonSkin() {
        _super.call(this);
        this.skinParts = ["iconDisplay", "labelDisplay"];

        this.elementsContent = [this.iconDisplay_i(), this.labelDisplay_i()];
        this.states = [new eui.State("up",[]), new eui.State("down",[]), new eui.State("disabled",[new eui.SetProperty("iconDisplay","alpha",0.5)])];
    }
    var _proto = ContinueButtonSkin.prototype;

    _proto.iconDisplay_i = function() {
        var t = new eui.Image();
        this.iconDisplay = t;
        t.horizontalCenter = 0;
        t.source = "jxbtnbg_png";
        t.verticalCenter = 0;
        return t;
    }
    ;
    _proto.labelDisplay_i = function() {
        var t = new eui.BitmapLabel();
        this.labelDisplay = t;
        t.font = "resultContinue_fnt";
        t.horizontalCenter = 0;
        t.letterSpacing = -3;
        t.text = "j10";
        t.verticalCenter = -1;
        return t;
    }
    ;
    return ContinueButtonSkin;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/DateUISkin.exml'] = window.DateUISkin = (function(_super) {
    __extends(DateUISkin, _super);
    function DateUISkin() {
        _super.call(this);
        this.skinParts = ["bg", "oTitle", "group0", "group1", "group2", "group3", "group4", "group5", "prevM", "nextM"];

        this.height = 1080;
        this.width = 1920;
        this.elementsContent = [this.bg_i(), this._Group2_i()];
    }
    var _proto = DateUISkin.prototype;

    _proto.bg_i = function() {
        var t = new eui.Rect();
        this.bg = t;
        t.alpha = 0.3;
        t.percentHeight = 100;
        t.touchEnabled = true;
        t.percentWidth = 100;
        t.x = 0;
        t.y = 0;
        return t;
    }
    ;
    _proto._Group2_i = function() {
        var t = new eui.Group();
        t.anchorOffsetX = 0;
        t.horizontalCenter = 0;
        t.width = 736.63;
        t.y = 181;
        t.elementsContent = [this._Rect1_i(), this.oTitle_i(), this._Label1_i(), this._Group1_i(), this.prevM_i(), this.nextM_i()];
        return t;
    }
    ;
    _proto._Rect1_i = function() {
        var t = new eui.Rect();
        t.percentHeight = 100;
        t.percentWidth = 100;
        t.x = 0;
        t.y = 0;
        return t;
    }
    ;
    _proto.oTitle_i = function() {
        var t = new eui.Label();
        this.oTitle = t;
        t.scaleX = 1;
        t.scaleY = 1;
        t.text = "";
        t.textAlign = "center";
        t.percentWidth = 100;
        t.x = 0;
        t.y = 10;
        return t;
    }
    ;
    _proto._Label1_i = function() {
        var t = new eui.Label();
        t.anchorOffsetX = 0;
        t.scaleX = 1;
        t.scaleY = 1;
        t.text = "日        一        二        三        四        五        六";
        t.textAlign = "center";
        t.width = 618;
        t.x = 59;
        t.y = 57;
        return t;
    }
    ;
    _proto._Group1_i = function() {
        var t = new eui.Group();
        t.anchorOffsetX = 0;
        t.anchorOffsetY = 0;
        t.height = 311;
        t.scaleX = 1;
        t.scaleY = 1;
        t.width = 618;
        t.x = 59;
        t.y = 93;
        t.layout = this._VerticalLayout1_i();
        t.elementsContent = [this.group0_i(), this.group1_i(), this.group2_i(), this.group3_i(), this.group4_i(), this.group5_i()];
        return t;
    }
    ;
    _proto._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout();
        t.gap = 20;
        return t;
    }
    ;
    _proto.group0_i = function() {
        var t = new eui.Group();
        this.group0 = t;
        t.anchorOffsetX = 0;
        t.anchorOffsetY = 0;
        t.height = 33;
        t.scaleX = 1;
        t.scaleY = 1;
        t.percentWidth = 100;
        t.x = 0;
        t.y = 6;
        t.layout = this._HorizontalLayout1_i();
        return t;
    }
    ;
    _proto._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout();
        t.gap = 46;
        t.horizontalAlign = "left";
        return t;
    }
    ;
    _proto.group1_i = function() {
        var t = new eui.Group();
        this.group1 = t;
        t.anchorOffsetX = 0;
        t.height = 33;
        t.percentWidth = 100;
        t.x = 10;
        t.y = 16;
        t.layout = this._HorizontalLayout2_i();
        return t;
    }
    ;
    _proto._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout();
        t.gap = 46;
        t.horizontalAlign = "left";
        return t;
    }
    ;
    _proto.group2_i = function() {
        var t = new eui.Group();
        this.group2 = t;
        t.anchorOffsetX = 0;
        t.height = 33;
        t.percentWidth = 100;
        t.x = 20;
        t.y = 26;
        t.layout = this._HorizontalLayout3_i();
        return t;
    }
    ;
    _proto._HorizontalLayout3_i = function() {
        var t = new eui.HorizontalLayout();
        t.gap = 46;
        t.horizontalAlign = "left";
        return t;
    }
    ;
    _proto.group3_i = function() {
        var t = new eui.Group();
        this.group3 = t;
        t.anchorOffsetX = 0;
        t.height = 33;
        t.percentWidth = 100;
        t.x = 30;
        t.y = 36;
        t.layout = this._HorizontalLayout4_i();
        return t;
    }
    ;
    _proto._HorizontalLayout4_i = function() {
        var t = new eui.HorizontalLayout();
        t.gap = 46;
        t.horizontalAlign = "left";
        return t;
    }
    ;
    _proto.group4_i = function() {
        var t = new eui.Group();
        this.group4 = t;
        t.anchorOffsetX = 0;
        t.height = 33;
        t.percentWidth = 100;
        t.x = 40;
        t.y = 46;
        t.layout = this._HorizontalLayout5_i();
        return t;
    }
    ;
    _proto._HorizontalLayout5_i = function() {
        var t = new eui.HorizontalLayout();
        t.gap = 46;
        t.horizontalAlign = "left";
        return t;
    }
    ;
    _proto.group5_i = function() {
        var t = new eui.Group();
        this.group5 = t;
        t.anchorOffsetX = 0;
        t.height = 33;
        t.percentWidth = 100;
        t.x = 50;
        t.y = 267;
        t.layout = this._HorizontalLayout6_i();
        return t;
    }
    ;
    _proto._HorizontalLayout6_i = function() {
        var t = new eui.HorizontalLayout();
        t.gap = 46;
        t.horizontalAlign = "left";
        return t;
    }
    ;
    _proto.prevM_i = function() {
        var t = new eui.Label();
        this.prevM = t;
        t.anchorOffsetX = 0;
        t.scaleX = 1;
        t.scaleY = 1;
        t.text = "8月份";
        t.textAlign = "left";
        t.touchEnabled = true;
        t.width = 201;
        t.x = 59;
        t.y = 10;
        return t;
    }
    ;
    _proto.nextM_i = function() {
        var t = new eui.Label();
        this.nextM = t;
        t.anchorOffsetX = 0;
        t.scaleX = 1;
        t.scaleY = 1;
        t.text = "8月份";
        t.textAlign = "right";
        t.touchEnabled = true;
        t.width = 192;
        t.x = 485;
        t.y = 10;
        return t;
    }
    ;
    return DateUISkin;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/game/Card.exml'] = window.Card = (function(_super) {
    __extends(Card, _super);
    function Card() {
        _super.call(this);
        this.skinParts = [];

        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i()];
    }
    var _proto = Card.prototype;

    _proto._Image1_i = function() {
        var t = new eui.Image();
        t.source = "cardB_png";
        return t;
    }
    ;
    _proto._Image2_i = function() {
        var t = new eui.Image();
        t.source = "a1_png";
        t.x = 21;
        t.y = 19;
        return t;
    }
    ;
    _proto._Image3_i = function() {
        var t = new eui.Image();
        t.source = "c1_png";
        t.x = 30.5;
        t.y = 90;
        return t;
    }
    ;
    _proto._Image4_i = function() {
        var t = new eui.Image();
        t.source = "b1_png";
        t.x = 105.5;
        t.y = 146;
        return t;
    }
    ;
    return Card;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/game/DealCardUI.exml'] = window.DealCardUISkin = (function(_super) {
    __extends(DealCardUISkin, _super);
    function DealCardUISkin() {
        _super.call(this);
        this.skinParts = ["text0Lable", "card0Group", "text1Lable", "card1Group", "text2Lable", "card2Group", "guanbi", "chongzhi", "kaiguan", "allCard"];

        this.height = 1080;
        this.width = 1920;
        this.elementsContent = [this._Rect1_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this.guanbi_i(), this.chongzhi_i(), this.kaiguan_i(), this.allCard_i()];
    }
    var _proto = DealCardUISkin.prototype;

    _proto._Rect1_i = function() {
        var t = new eui.Rect();
        t.fillAlpha = 0.5;
        t.fillColor = 0x01ff00;
        t.percentHeight = 100;
        t.strokeColor = 0x000200;
        t.percentWidth = 100;
        return t;
    }
    ;
    _proto._Group1_i = function() {
        var t = new eui.Group();
        t.x = 0;
        t.elementsContent = [this.text0Lable_i(), this.card0Group_i()];
        return t;
    }
    ;
    _proto.text0Lable_i = function() {
        var t = new eui.Label();
        this.text0Lable = t;
        t.scaleX = 1;
        t.scaleY = 1;
        t.size = 35;
        t.text = "0号座位";
        t.x = 26;
        t.y = 40;
        return t;
    }
    ;
    _proto.card0Group_i = function() {
        var t = new eui.Group();
        this.card0Group = t;
        t.x = 246;
        t.y = 141;
        return t;
    }
    ;
    _proto._Group2_i = function() {
        var t = new eui.Group();
        t.x = 0;
        t.y = 248;
        t.elementsContent = [this.text1Lable_i(), this.card1Group_i()];
        return t;
    }
    ;
    _proto.text1Lable_i = function() {
        var t = new eui.Label();
        this.text1Lable = t;
        t.scaleX = 1;
        t.scaleY = 1;
        t.size = 35;
        t.text = "1号座位";
        t.x = 26;
        t.y = 40;
        return t;
    }
    ;
    _proto.card1Group_i = function() {
        var t = new eui.Group();
        this.card1Group = t;
        t.x = 246;
        t.y = 141;
        return t;
    }
    ;
    _proto._Group3_i = function() {
        var t = new eui.Group();
        t.x = 0;
        t.y = 456;
        t.elementsContent = [this.text2Lable_i(), this.card2Group_i()];
        return t;
    }
    ;
    _proto.text2Lable_i = function() {
        var t = new eui.Label();
        this.text2Lable = t;
        t.scaleX = 1;
        t.scaleY = 1;
        t.size = 35;
        t.text = "2号座位";
        t.x = 26;
        t.y = 40;
        return t;
    }
    ;
    _proto.card2Group_i = function() {
        var t = new eui.Group();
        this.card2Group = t;
        t.x = 246;
        t.y = 141;
        return t;
    }
    ;
    _proto.guanbi_i = function() {
        var t = new eui.Label();
        this.guanbi = t;
        t.size = 41;
        t.text = "关闭";
        t.x = 15;
        t.y = 794;
        return t;
    }
    ;
    _proto.chongzhi_i = function() {
        var t = new eui.Label();
        this.chongzhi = t;
        t.size = 41;
        t.text = "重置";
        t.x = 166;
        t.y = 794;
        return t;
    }
    ;
    _proto.kaiguan_i = function() {
        var t = new eui.Label();
        this.kaiguan = t;
        t.size = 41;
        t.text = "当前状态：关闭";
        t.x = 353;
        t.y = 794;
        return t;
    }
    ;
    _proto.allCard_i = function() {
        var t = new eui.Group();
        this.allCard = t;
        t.x = 111;
        t.y = 984;
        return t;
    }
    ;
    return DealCardUISkin;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/game/GameChatUI.exml'] = window.GameChatUISkin = (function(_super) {
    __extends(GameChatUISkin, _super);
    function GameChatUISkin() {
        _super.call(this);
        this.skinParts = ["bgRect", "icon_face", "icon_kj", "gTab", "kjGroup", "kjScroll", "tipsGroup", "tipsScroll"];

        this.height = 509;
        this.width = 463;
        this.elementsContent = [this.bgRect_i(), this._Image1_i(), this.gTab_i(), this.kjScroll_i(), this.tipsScroll_i()];
    }
    var _proto = GameChatUISkin.prototype;

    _proto.bgRect_i = function() {
        var t = new eui.Rect();
        this.bgRect = t;
        t.bottom = 0;
        t.fillAlpha = 0;
        t.height = 2000;
        t.right = 0;
        t.strokeAlpha = 0;
        t.width = 1500;
        return t;
    }
    ;
    _proto._Image1_i = function() {
        var t = new eui.Image();
        t.bottom = 0;
        t.source = "chatBg_png";
        t.x = 2;
        return t;
    }
    ;
    _proto.gTab_i = function() {
        var t = new eui.Group();
        this.gTab = t;
        t.x = 13;
        t.y = 56;
        t.layout = this._VerticalLayout1_i();
        t.elementsContent = [this.icon_face_i(), this.icon_kj_i()];
        return t;
    }
    ;
    _proto._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout();
        t.gap = 0;
        return t;
    }
    ;
    _proto.icon_face_i = function() {
        var t = new eui.Image();
        this.icon_face = t;
        t.name = "icon_face";
        t.source = "icon_faceSelect_png";
        t.y = 2;
        return t;
    }
    ;
    _proto.icon_kj_i = function() {
        var t = new eui.Image();
        this.icon_kj = t;
        t.name = "icon_kj";
        t.source = "icon_kj_png";
        t.y = 130;
        return t;
    }
    ;
    _proto.kjScroll_i = function() {
        var t = new eui.Scroller();
        this.kjScroll = t;
        t.anchorOffsetX = 0;
        t.anchorOffsetY = 0;
        t.height = 437;
        t.left = 92;
        t.scrollPolicyH = "off";
        t.top = 57;
        t.width = 333;
        t.viewport = this.kjGroup_i();
        return t;
    }
    ;
    _proto.kjGroup_i = function() {
        var t = new eui.Group();
        this.kjGroup = t;
        t.anchorOffsetY = 0;
        t.y = 1;
        t.layout = this._VerticalLayout2_i();
        return t;
    }
    ;
    _proto._VerticalLayout2_i = function() {
        var t = new eui.VerticalLayout();
        t.gap = 20;
        return t;
    }
    ;
    _proto.tipsScroll_i = function() {
        var t = new eui.Scroller();
        this.tipsScroll = t;
        t.anchorOffsetX = 0;
        t.anchorOffsetY = 0;
        t.height = 437;
        t.left = 92;
        t.scrollPolicyH = "off";
        t.top = 57;
        t.width = 344;
        t.viewport = this.tipsGroup_i();
        return t;
    }
    ;
    _proto.tipsGroup_i = function() {
        var t = new eui.Group();
        this.tipsGroup = t;
        t.y = 1;
        t.layout = this._VerticalLayout3_i();
        return t;
    }
    ;
    _proto._VerticalLayout3_i = function() {
        var t = new eui.VerticalLayout();
        return t;
    }
    ;
    return GameChatUISkin;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/game/GameClock.exml'] = window.GameClockSkin = (function(_super) {
    __extends(GameClockSkin, _super);
    function GameClockSkin() {
        _super.call(this);
        this.skinParts = ["maskQ", "clockText"];

        this.height = 114;
        this.width = 114;
        this.elementsContent = [this._Image1_i(), this.maskQ_i(), this.clockText_i()];
    }
    var _proto = GameClockSkin.prototype;

    _proto._Image1_i = function() {
        var t = new eui.Image();
        t.source = "djs1_png";
        return t;
    }
    ;
    _proto.maskQ_i = function() {
        var t = new eui.Image();
        this.maskQ = t;
        t.horizontalCenter = 0;
        t.source = "djs2_png";
        t.verticalCenter = 0;
        return t;
    }
    ;
    _proto.clockText_i = function() {
        var t = new eui.Label();
        this.clockText = t;
        t.horizontalCenter = -1;
        t.size = 55;
        t.text = "99";
        t.verticalCenter = 4.5;
        return t;
    }
    ;
    return GameClockSkin;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/game/GameResultUI.exml'] = window.GameResultUISkin = (function(_super) {
    __extends(GameResultUISkin, _super);
    function GameResultUISkin() {
        _super.call(this);
        this.skinParts = ["bgRect", "aniGruup", "jbimage", "id0", "qg", "yp", "ypx", "zd", "jb", "id1", "qg1", "yp1", "ypx1", "zd1", "jb1", "id2", "qg2", "yp2", "ypx2", "zd2", "jb2", "returnButton", "juxuButton", "huanzButton", "btnByb"];

        this.height = 1080;
        this.width = 1920;
        this.elementsContent = [this.bgRect_i(), this._Group5_i(), this.btnByb_i()];
    }
    var _proto = GameResultUISkin.prototype;

    _proto.bgRect_i = function() {
        var t = new eui.Rect();
        this.bgRect = t;
        t.alpha = 0.5;
        t.fillColor = 0x000000;
        t.percentHeight = 100;
        t.percentWidth = 100;
        return t;
    }
    ;
    _proto._Group5_i = function() {
        var t = new eui.Group();
        t.horizontalCenter = 0;
        t.verticalCenter = 115;
        t.elementsContent = [this._Image1_i(), this.aniGruup_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.jbimage_i(), this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i()];
        return t;
    }
    ;
    _proto._Image1_i = function() {
        var t = new eui.Image();
        t.source = "jsdb_png";
        return t;
    }
    ;
    _proto.aniGruup_i = function() {
        var t = new eui.Group();
        this.aniGruup = t;
        t.horizontalCenter = 0;
        t.top = -77;
        return t;
    }
    ;
    _proto._Image2_i = function() {
        var t = new eui.Image();
        t.source = "id_png";
        t.x = 250;
        t.y = 40;
        return t;
    }
    ;
    _proto._Image3_i = function() {
        var t = new eui.Image();
        t.source = "yp_png";
        t.x = 606;
        t.y = 40;
        return t;
    }
    ;
    _proto._Image4_i = function() {
        var t = new eui.Image();
        t.source = "zd_png";
        t.x = 851;
        t.y = 40;
        return t;
    }
    ;
    _proto.jbimage_i = function() {
        var t = new eui.Image();
        this.jbimage = t;
        t.source = "jbz_png";
        t.x = 1136;
        t.y = 40;
        return t;
    }
    ;
    _proto._Group1_i = function() {
        var t = new eui.Group();
        t.left = 108;
        t.verticalCenter = -84;
        t.elementsContent = [this.id0_i(), this.qg_i(), this.yp_i(), this.ypx_i(), this.zd_i(), this.jb_i()];
        return t;
    }
    ;
    _proto.id0_i = function() {
        var t = new eui.Label();
        this.id0 = t;
        t.anchorOffsetX = 0;
        t.size = 60;
        t.text = "123";
        t.textAlign = "center";
        t.width = 433;
        t.x = -84;
        t.y = 0;
        return t;
    }
    ;
    _proto.qg_i = function() {
        var t = new eui.Image();
        this.qg = t;
        t.source = "qg_png";
        t.x = 342;
        return t;
    }
    ;
    _proto.yp_i = function() {
        var t = new eui.Label();
        this.yp = t;
        t.size = 60;
        t.text = "16";
        t.width = 70;
        t.x = 500;
        return t;
    }
    ;
    _proto.ypx_i = function() {
        var t = new eui.Label();
        this.ypx = t;
        t.size = 60;
        t.text = "*2";
        t.textColor = 0xFFF000;
        t.x = 577;
        return t;
    }
    ;
    _proto.zd_i = function() {
        var t = new eui.Label();
        this.zd = t;
        t.size = 60;
        t.text = "0";
        t.width = 60;
        t.x = 769;
        return t;
    }
    ;
    _proto.jb_i = function() {
        var t = new eui.Label();
        this.jb = t;
        t.size = 60;
        t.text = "-99";
        t.textColor = 0xfff000;
        t.x = 1020;
        return t;
    }
    ;
    _proto._Group2_i = function() {
        var t = new eui.Group();
        t.anchorOffsetX = 0;
        t.left = 108;
        t.verticalCenter = 6;
        t.width = 1110;
        t.elementsContent = [this.id1_i(), this.qg1_i(), this.yp1_i(), this.ypx1_i(), this.zd1_i(), this.jb1_i()];
        return t;
    }
    ;
    _proto.id1_i = function() {
        var t = new eui.Label();
        this.id1 = t;
        t.anchorOffsetX = 0;
        t.horizontalCenter = -386;
        t.size = 48;
        t.text = "***123";
        t.textAlign = "center";
        t.width = 332;
        t.y = 0;
        return t;
    }
    ;
    _proto.qg1_i = function() {
        var t = new eui.Image();
        this.qg1 = t;
        t.source = "qg_png";
        t.x = 342;
        return t;
    }
    ;
    _proto.yp1_i = function() {
        var t = new eui.Label();
        this.yp1 = t;
        t.size = 48;
        t.text = "16";
        t.width = 60;
        t.x = 504;
        return t;
    }
    ;
    _proto.ypx1_i = function() {
        var t = new eui.Label();
        this.ypx1 = t;
        t.size = 48;
        t.text = "*2";
        t.textColor = 0xFFF000;
        t.x = 581;
        return t;
    }
    ;
    _proto.zd1_i = function() {
        var t = new eui.Label();
        this.zd1 = t;
        t.size = 48;
        t.text = "0";
        t.width = 60;
        t.x = 771;
        return t;
    }
    ;
    _proto.jb1_i = function() {
        var t = new eui.Label();
        this.jb1 = t;
        t.size = 48;
        t.text = "-99";
        t.x = 1020;
        return t;
    }
    ;
    _proto._Group3_i = function() {
        var t = new eui.Group();
        t.left = 108;
        t.verticalCenter = 92;
        t.elementsContent = [this.id2_i(), this.qg2_i(), this.yp2_i(), this.ypx2_i(), this.zd2_i(), this.jb2_i()];
        return t;
    }
    ;
    _proto.id2_i = function() {
        var t = new eui.Label();
        this.id2 = t;
        t.horizontalCenter = -384.5;
        t.size = 48;
        t.text = "***123";
        t.textAlign = "center";
        t.width = 332;
        return t;
    }
    ;
    _proto.qg2_i = function() {
        var t = new eui.Image();
        this.qg2 = t;
        t.source = "qg_png";
        t.x = 342;
        return t;
    }
    ;
    _proto.yp2_i = function() {
        var t = new eui.Label();
        this.yp2 = t;
        t.size = 48;
        t.text = "16";
        t.width = 60;
        t.x = 504;
        return t;
    }
    ;
    _proto.ypx2_i = function() {
        var t = new eui.Label();
        this.ypx2 = t;
        t.size = 48;
        t.text = "*2";
        t.textColor = 0xFFF000;
        t.x = 581;
        return t;
    }
    ;
    _proto.zd2_i = function() {
        var t = new eui.Label();
        this.zd2 = t;
        t.size = 48;
        t.text = "0";
        t.width = 60;
        t.x = 771;
        return t;
    }
    ;
    _proto.jb2_i = function() {
        var t = new eui.Label();
        this.jb2 = t;
        t.size = 48;
        t.text = "-99";
        t.x = 1020;
        return t;
    }
    ;
    _proto._Group4_i = function() {
        var t = new eui.Group();
        t.bottom = -47;
        t.horizontalCenter = 0;
        t.layout = this._HorizontalLayout1_i();
        t.elementsContent = [this.returnButton_i(), this.juxuButton_i(), this.huanzButton_i()];
        return t;
    }
    ;
    _proto._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout();
        t.gap = 220;
        return t;
    }
    ;
    _proto.returnButton_i = function() {
        var t = new BaseButton();
        this.returnButton = t;
        t.height = 84;
        t.icon = "fhan_png";
        t.width = 264;
        return t;
    }
    ;
    _proto.juxuButton_i = function() {
        var t = new ContinueButton();
        this.juxuButton = t;
        t.height = 84;
        t.icon = "jxbtnbg_png";
        t.label = "j";
        t.width = 264;
        return t;
    }
    ;
    _proto.huanzButton_i = function() {
        var t = new ContinueButton();
        this.huanzButton = t;
        t.height = 84;
        t.icon = "hzbtnbg_png";
        t.includeInLayout = false;
        t.label = "h";
        t.visible = false;
        t.width = 264;
        return t;
    }
    ;
    _proto.btnByb_i = function() {
        var t = new eui.Image();
        this.btnByb = t;
        t.bottom = 129;
        t.horizontalCenter = 622.5;
        t.scaleX = 0.9;
        t.scaleY = 0.9;
        t.source = "gameButton_bb_png";
        t.visible = false;
        return t;
    }
    ;
    return GameResultUISkin;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/game/GameView.exml'] = window.GameViewSkin = (function(_super) {
    __extends(GameViewSkin, _super);
    function GameViewSkin() {
        _super.call(this);
        this.skinParts = ["changguan", "juhao", "rightTakeCardUI", "leftTakeCardUI", "myTakeCardUI", "myUser", "leftUser", "rightUser", "leftCardLable", "leftCardNum", "rightCardLable", "rightCardNum", "startButton", "ybqButton", "buchu", "tishi", "chupai", "takeCardGroup", "btnChat", "myCardPanel", "backButton", "setButton", "ruleButton", "syButton", "setGroup", "animationUI", "tuoguanGroup", "tuoguan", "quxiaoTuoguan"];

        this.height = 1080;
        this.width = 1920;
        this.elementsContent = [this._Image1_i(), this.changguan_i(), this.juhao_i(), this.rightTakeCardUI_i(), this.leftTakeCardUI_i(), this.myTakeCardUI_i(), this.myUser_i(), this.leftUser_i(), this.rightUser_i(), this.leftCardNum_i(), this.rightCardNum_i(), this.startButton_i(), this.ybqButton_i(), this.takeCardGroup_i(), this.btnChat_i(), this.myCardPanel_i(), this._Group1_i(), this.animationUI_i(), this.tuoguanGroup_i(), this.tuoguan_i(), this.quxiaoTuoguan_i()];
    }
    var _proto = GameViewSkin.prototype;

    _proto._Image1_i = function() {
        var t = new eui.Image();
        t.percentHeight = 100;
        t.source = "bg02_jpg";
        t.percentWidth = 100;
        return t;
    }
    ;
    _proto.changguan_i = function() {
        var t = new eui.BitmapLabel();
        this.changguan = t;
        t.font = "gameShowText_fnt";
        t.horizontalCenter = 0;
        t.text = "入 底100";
        t.verticalCenter = -30.5;
        return t;
    }
    ;
    _proto.juhao_i = function() {
        var t = new eui.BitmapLabel();
        this.juhao = t;
        t.font = "gameShowText_fnt";
        t.horizontalCenter = 0;
        t.text = "局11234567896456";
        t.verticalCenter = 30.5;
        return t;
    }
    ;
    _proto.rightTakeCardUI_i = function() {
        var t = new TakeCardUI();
        this.rightTakeCardUI = t;
        t.right = 373;
        t.top = 387;
        return t;
    }
    ;
    _proto.leftTakeCardUI_i = function() {
        var t = new TakeCardUI();
        this.leftTakeCardUI = t;
        t.left = 373;
        t.top = 387;
        return t;
    }
    ;
    _proto.myTakeCardUI_i = function() {
        var t = new TakeCardUI();
        this.myTakeCardUI = t;
        t.height = 0;
        t.horizontalCenter = 12.5;
        t.top = 622;
        return t;
    }
    ;
    _proto.myUser_i = function() {
        var t = new UserItem();
        this.myUser = t;
        t.bottom = 33;
        t.currentState = "mine";
        t.left = 4;
        return t;
    }
    ;
    _proto.leftUser_i = function() {
        var t = new UserItem();
        this.leftUser = t;
        t.currentState = "left";
        t.left = 4;
        t.top = 281;
        return t;
    }
    ;
    _proto.rightUser_i = function() {
        var t = new UserItem();
        this.rightUser = t;
        t.currentState = "right";
        t.right = 4;
        t.top = 281;
        return t;
    }
    ;
    _proto.leftCardNum_i = function() {
        var t = new eui.Group();
        this.leftCardNum = t;
        t.left = 236;
        t.top = 372;
        t.elementsContent = [this._Image2_i(), this.leftCardLable_i()];
        return t;
    }
    ;
    _proto._Image2_i = function() {
        var t = new eui.Image();
        t.source = "cardBgS_png";
        return t;
    }
    ;
    _proto.leftCardLable_i = function() {
        var t = new eui.BitmapLabel();
        this.leftCardLable = t;
        t.font = "cardNumFnt_fnt";
        t.horizontalCenter = -2.5;
        t.letterSpacing = -4;
        t.scaleX = 0.8;
        t.scaleY = 0.8;
        t.text = "16";
        t.verticalCenter = -4.5;
        return t;
    }
    ;
    _proto.rightCardNum_i = function() {
        var t = new eui.Group();
        this.rightCardNum = t;
        t.right = 236;
        t.top = 372;
        t.elementsContent = [this._Image3_i(), this.rightCardLable_i()];
        return t;
    }
    ;
    _proto._Image3_i = function() {
        var t = new eui.Image();
        t.source = "cardBgS_png";
        return t;
    }
    ;
    _proto.rightCardLable_i = function() {
        var t = new eui.BitmapLabel();
        this.rightCardLable = t;
        t.font = "cardNumFnt_fnt";
        t.horizontalCenter = -2.5;
        t.letterSpacing = -4;
        t.scaleX = 0.8;
        t.scaleY = 0.8;
        t.text = "16";
        t.verticalCenter = -4.5;
        return t;
    }
    ;
    _proto.startButton_i = function() {
        var t = new BaseButton();
        this.startButton = t;
        t.bottom = 391;
        t.height = 84;
        t.horizontalCenter = 0;
        t.icon = "ks_png";
        t.width = 264;
        return t;
    }
    ;
    _proto.ybqButton_i = function() {
        var t = new BaseButton();
        this.ybqButton = t;
        t.bottom = 500;
        t.height = 84;
        t.horizontalCenter = 0;
        t.icon = "ybqBtn_png";
        t.width = 264;
        return t;
    }
    ;
    _proto.takeCardGroup_i = function() {
        var t = new eui.Group();
        this.takeCardGroup = t;
        t.bottom = 392;
        t.horizontalCenter = 0;
        t.layout = this._HorizontalLayout1_i();
        t.elementsContent = [this.buchu_i(), this.tishi_i(), this.chupai_i()];
        return t;
    }
    ;
    _proto._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout();
        t.gap = 20;
        return t;
    }
    ;
    _proto.buchu_i = function() {
        var t = new BaseButton();
        this.buchu = t;
        t.height = 84;
        t.icon = "bc_png";
        t.includeInLayout = false;
        t.visible = false;
        t.width = 264;
        return t;
    }
    ;
    _proto.tishi_i = function() {
        var t = new BaseButton();
        this.tishi = t;
        t.height = 84;
        t.icon = "ts_png";
        t.width = 264;
        return t;
    }
    ;
    _proto.chupai_i = function() {
        var t = new BaseButton();
        this.chupai = t;
        t.height = 84;
        t.icon = "cp_png";
        t.width = 264;
        return t;
    }
    ;
    _proto.btnChat_i = function() {
        var t = new BaseButton();
        this.btnChat = t;
        t.bottom = 376;
        t.icon = "lt_png";
        t.right = 59;
        return t;
    }
    ;
    _proto.myCardPanel_i = function() {
        var t = new MyCardPanel();
        this.myCardPanel = t;
        t.bottom = 241;
        t.horizontalCenter = 3.5;
        return t;
    }
    ;
    _proto._Group1_i = function() {
        var t = new eui.Group();
        t.right = 27;
        t.top = 9;
        t.layout = this._HorizontalLayout2_i();
        t.elementsContent = [this.backButton_i(), this.setGroup_i()];
        return t;
    }
    ;
    _proto._HorizontalLayout2_i = function() {
        var t = new eui.HorizontalLayout();
        t.gap = 12;
        return t;
    }
    ;
    _proto.backButton_i = function() {
        var t = new BaseButton();
        this.backButton = t;
        t.height = 145;
        t.icon = "fh_png";
        t.width = 119;
        return t;
    }
    ;
    _proto.setGroup_i = function() {
        var t = new eui.Group();
        this.setGroup = t;
        t.layout = this._VerticalLayout1_i();
        t.elementsContent = [this.setButton_i(), this.ruleButton_i(), this.syButton_i()];
        return t;
    }
    ;
    _proto._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout();
        t.gap = 0;
        return t;
    }
    ;
    _proto.setButton_i = function() {
        var t = new BaseButton();
        this.setButton = t;
        t.height = 145;
        t.icon = "gd_png";
        t.width = 119;
        return t;
    }
    ;
    _proto.ruleButton_i = function() {
        var t = new BaseButton();
        this.ruleButton = t;
        t.height = 145;
        t.icon = "gz_png";
        t.width = 119;
        return t;
    }
    ;
    _proto.syButton_i = function() {
        var t = new BaseButton();
        this.syButton = t;
        t.height = 145;
        t.icon = "syk_png";
        t.width = 119;
        return t;
    }
    ;
    _proto.animationUI_i = function() {
        var t = new TakeCardAnimationUI();
        this.animationUI = t;
        t.percentHeight = 100;
        t.visible = false;
        t.percentWidth = 100;
        return t;
    }
    ;
    _proto.tuoguanGroup_i = function() {
        var t = new eui.Group();
        this.tuoguanGroup = t;
        t.bottom = 0;
        t.percentWidth = 100;
        t.elementsContent = [this._Image4_i(), this._Image5_i()];
        return t;
    }
    ;
    _proto._Image4_i = function() {
        var t = new eui.Image();
        t.height = 337;
        t.scale9Grid = new egret.Rectangle(240,47,1440,288);
        t.source = "db_png";
        t.percentWidth = 100;
        return t;
    }
    ;
    _proto._Image5_i = function() {
        var t = new eui.Image();
        t.horizontalCenter = 0;
        t.source = "tgz_png";
        t.verticalCenter = 0;
        return t;
    }
    ;
    _proto.tuoguan_i = function() {
        var t = new BaseButton();
        this.tuoguan = t;
        t.bottom = 60;
        t.height = 144;
        t.icon = "btntg_png";
        t.right = 59;
        t.width = 119;
        return t;
    }
    ;
    _proto.quxiaoTuoguan_i = function() {
        var t = new BaseButton();
        this.quxiaoTuoguan = t;
        t.bottom = 60;
        t.height = 145;
        t.icon = "btnqxtg_png";
        t.right = 59;
        t.width = 119;
        return t;
    }
    ;
    return GameViewSkin;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/game/LoadingTip.exml'] = window.LoadingTipSkin = (function(_super) {
    __extends(LoadingTipSkin, _super);
    function LoadingTipSkin() {
        _super.call(this);
        this.skinParts = ["card1", "card2", "card3", "card4"];

        this.height = 1080;
        this.width = 1920;
        this.elementsContent = [this._Rect1_i(), this._Group1_i()];
    }
    var _proto = LoadingTipSkin.prototype;

    _proto._Rect1_i = function() {
        var t = new eui.Rect();
        t.fillAlpha = 0;
        t.fillColor = 0x000000;
        t.percentHeight = 100;
        t.percentWidth = 100;
        return t;
    }
    ;
    _proto._Group1_i = function() {
        var t = new eui.Group();
        t.horizontalCenter = 0;
        t.verticalCenter = 0;
        t.elementsContent = [this._Image1_i(), this.card1_i(), this.card2_i(), this.card3_i(), this.card4_i(), this._Label1_i()];
        return t;
    }
    ;
    _proto._Image1_i = function() {
        var t = new eui.Image();
        t.source = "loadingTipBg_png";
        return t;
    }
    ;
    _proto.card1_i = function() {
        var t = new LoadingTipCard();
        this.card1 = t;
        t.scaleX = 0.5;
        t.scaleY = 0.5;
        t.x = 52;
        t.y = 114;
        return t;
    }
    ;
    _proto.card2_i = function() {
        var t = new LoadingTipCard();
        this.card2 = t;
        t.scaleX = 0.5;
        t.scaleY = 0.5;
        t.x = 181;
        t.y = 114;
        return t;
    }
    ;
    _proto.card3_i = function() {
        var t = new LoadingTipCard();
        this.card3 = t;
        t.scaleX = 0.5;
        t.scaleY = 0.5;
        t.x = 311;
        t.y = 114;
        return t;
    }
    ;
    _proto.card4_i = function() {
        var t = new LoadingTipCard();
        this.card4 = t;
        t.scaleX = 0.5;
        t.scaleY = 0.5;
        t.x = 440;
        t.y = 114;
        return t;
    }
    ;
    _proto._Label1_i = function() {
        var t = new eui.Label();
        t.horizontalCenter = 0;
        t.text = "等待其他玩家进入游戏…";
        t.verticalCenter = 128.5;
        return t;
    }
    ;
    return LoadingTipSkin;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/game/LoadingTipCard.exml'] = window.LoadingTipCardSkin = (function(_super) {
    __extends(LoadingTipCardSkin, _super);
    function LoadingTipCardSkin() {
        _super.call(this);
        this.skinParts = ["cardNum", "cardS", "cardB"];

        this.elementsContent = [this._Image1_i(), this.cardNum_i(), this.cardS_i(), this.cardB_i()];
    }
    var _proto = LoadingTipCardSkin.prototype;

    _proto._Image1_i = function() {
        var t = new eui.Image();
        t.source = "cardB_png";
        return t;
    }
    ;
    _proto.cardNum_i = function() {
        var t = new eui.Image();
        this.cardNum = t;
        t.source = "a1_png";
        t.x = 21;
        t.y = 19;
        return t;
    }
    ;
    _proto.cardS_i = function() {
        var t = new eui.Image();
        this.cardS = t;
        t.source = "c1_png";
        t.x = 30.5;
        t.y = 90;
        return t;
    }
    ;
    _proto.cardB_i = function() {
        var t = new eui.Image();
        this.cardB = t;
        t.source = "b1_png";
        t.x = 105.5;
        t.y = 146;
        return t;
    }
    ;
    return LoadingTipCardSkin;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/game/UserItem.exml'] = window.UserItemSkin = (function(_super) {
    __extends(UserItemSkin, _super);
    function UserItemSkin() {
        _super.call(this);
        this.skinParts = ["headImg", "topTip", "nameLable", "rmbLable", "goldCoinLable", "clock", "aniGroup"];

        this.height = 279;
        this.width = 230;
        this.elementsContent = [this.headImg_i(), this.topTip_i(), this.nameLable_i(), this._Group1_i(), this._Group2_i(), this.clock_i(), this.aniGroup_i()];
        this.states = [new eui.State("mine",[new eui.SetProperty("clock","x",244), new eui.SetProperty("clock","y",55)]), new eui.State("left",[new eui.SetProperty("_Group1","visible",false), new eui.SetProperty("clock","y",83), new eui.SetProperty("clock","right",-229)]), new eui.State("right",[new eui.SetProperty("_Group1","visible",false), new eui.SetProperty("clock","y",83), new eui.SetProperty("clock","left",-229)])];
    }
    var _proto = UserItemSkin.prototype;

    _proto.headImg_i = function() {
        var t = new eui.Image();
        this.headImg = t;
        t.height = 108;
        t.horizontalCenter = 0.5;
        t.source = "icon_head_png";
        t.verticalCenter = 3.5;
        t.width = 107;
        return t;
    }
    ;
    _proto.topTip_i = function() {
        var t = new eui.Image();
        this.topTip = t;
        t.horizontalCenter = 0;
        t.source = "ybq_png";
        t.visible = false;
        return t;
    }
    ;
    _proto.nameLable_i = function() {
        var t = new eui.Label();
        this.nameLable = t;
        t.horizontalCenter = 0;
        t.size = 26;
        t.text = "zhouguaner32112";
        t.top = 57;
        return t;
    }
    ;
    _proto._Group1_i = function() {
        var t = new eui.Group();
        this._Group1 = t;
        t.bottom = 0;
        t.horizontalCenter = 0;
        t.visible = false;
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.rmbLable_i()];
        return t;
    }
    ;
    _proto._Image1_i = function() {
        var t = new eui.Image();
        t.source = "hl_png";
        return t;
    }
    ;
    _proto._Image2_i = function() {
        var t = new eui.Image();
        t.left = 6;
        t.source = "qd_png";
        t.verticalCenter = 0;
        return t;
    }
    ;
    _proto.rmbLable_i = function() {
        var t = new eui.Label();
        this.rmbLable = t;
        t.size = 26;
        t.text = "999万9999";
        t.x = 36;
        t.y = 4;
        return t;
    }
    ;
    _proto._Group2_i = function() {
        var t = new eui.Group();
        t.bottom = 39;
        t.horizontalCenter = 0;
        t.elementsContent = [this._Image3_i(), this._Image4_i(), this.goldCoinLable_i()];
        return t;
    }
    ;
    _proto._Image3_i = function() {
        var t = new eui.Image();
        t.scale9Grid = new egret.Rectangle(21,4,132,27);
        t.source = "hl_png";
        t.width = 197;
        return t;
    }
    ;
    _proto._Image4_i = function() {
        var t = new eui.Image();
        t.left = 6;
        t.source = "jb_png";
        t.verticalCenter = 0;
        return t;
    }
    ;
    _proto.goldCoinLable_i = function() {
        var t = new eui.Label();
        this.goldCoinLable = t;
        t.horizontalCenter = 14.5;
        t.size = 26;
        t.text = "999万9999";
        t.y = 4;
        return t;
    }
    ;
    _proto.clock_i = function() {
        var t = new GameClock();
        this.clock = t;
        return t;
    }
    ;
    _proto.aniGroup_i = function() {
        var t = new eui.Group();
        this.aniGroup = t;
        t.horizontalCenter = 0;
        t.top = -34;
        return t;
    }
    ;
    return UserItemSkin;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/room/HistorcialDetailsEui.exml'] = window.HistorcialDetailsEui = (function(_super) {
    __extends(HistorcialDetailsEui, _super);
    function HistorcialDetailsEui() {
        _super.call(this);
        this.skinParts = ["close_btn", "dataList", "difen"];

        this.height = 1080;
        this.width = 1920;
        this.elementsContent = [this._Rect1_i(), this._Group3_i()];
    }
    var _proto = HistorcialDetailsEui.prototype;

    _proto._Rect1_i = function() {
        var t = new eui.Rect();
        t.fillAlpha = 0.5;
        t.fillColor = 0x000000;
        t.percentHeight = 100;
        t.percentWidth = 100;
        return t;
    }
    ;
    _proto._Group3_i = function() {
        var t = new eui.Group();
        t.horizontalCenter = 0;
        t.verticalCenter = 0;
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.close_btn_i(), this._Group1_i(), this._Group2_i(), this.difen_i()];
        return t;
    }
    ;
    _proto._Image1_i = function() {
        var t = new eui.Image();
        t.source = "tipBg_png";
        t.x = 0;
        t.y = 9.5;
        return t;
    }
    ;
    _proto._Image2_i = function() {
        var t = new eui.Image();
        t.horizontalCenter = 0;
        t.source = "xqtip_png";
        t.top = 17;
        return t;
    }
    ;
    _proto._Image3_i = function() {
        var t = new eui.Image();
        t.height = 638;
        t.horizontalCenter = 2.5;
        t.scale9Grid = new egret.Rectangle(203,99,1221,595);
        t.source = "hisb1_png";
        t.top = 138;
        return t;
    }
    ;
    _proto._Image4_i = function() {
        var t = new eui.Image();
        t.height = 349;
        t.horizontalCenter = 0;
        t.scale9Grid = new egret.Rectangle(195,74,1177,448);
        t.source = "detailBg_png";
        t.top = 299;
        return t;
    }
    ;
    _proto.close_btn_i = function() {
        var t = new BaseButton();
        this.close_btn = t;
        t.height = 105;
        t.icon = "gb_png";
        t.right = -45;
        t.top = -37;
        t.width = 105;
        return t;
    }
    ;
    _proto._Group1_i = function() {
        var t = new eui.Group();
        t.x = 86;
        t.y = 196;
        t.elementsContent = [this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i()];
        return t;
    }
    ;
    _proto._Label1_i = function() {
        var t = new eui.Label();
        t.fontFamily = "黑体";
        t.scaleX = 1;
        t.scaleY = 1;
        t.size = 48;
        t.text = "玩家";
        t.textColor = 0x6C3A02;
        t.x = 129;
        t.y = 26;
        return t;
    }
    ;
    _proto._Label2_i = function() {
        var t = new eui.Label();
        t.fontFamily = "黑体";
        t.scaleX = 1;
        t.scaleY = 1;
        t.size = 48;
        t.text = "余牌";
        t.textColor = 0x6C3A02;
        t.x = 496;
        t.y = 26;
        return t;
    }
    ;
    _proto._Label3_i = function() {
        var t = new eui.Label();
        t.fontFamily = "黑体";
        t.scaleX = 1;
        t.scaleY = 1;
        t.size = 48;
        t.text = "炸弹数";
        t.textColor = 0x6C3A02;
        t.x = 831;
        t.y = 26;
        return t;
    }
    ;
    _proto._Label4_i = function() {
        var t = new eui.Label();
        t.fontFamily = "黑体";
        t.scaleX = 1;
        t.scaleY = 1;
        t.size = 48;
        t.text = "派彩";
        t.textColor = 0x6C3A02;
        t.x = 1278;
        t.y = 26;
        return t;
    }
    ;
    _proto._Group2_i = function() {
        var t = new eui.Group();
        t.height = 373;
        t.width = 1567;
        t.x = 62;
        t.y = 300;
        t.elementsContent = [this.dataList_i()];
        return t;
    }
    ;
    _proto.dataList_i = function() {
        var t = new eui.List();
        this.dataList = t;
        t.height = 360;
        t.itemRenderer = HistoricalDetailsItem;
        t.width = 1567;
        t.dataProvider = this._ArrayCollection1_i();
        return t;
    }
    ;
    _proto._ArrayCollection1_i = function() {
        var t = new eui.ArrayCollection();
        t.source = [this._Object1_i(), this._Object2_i(), this._Object3_i()];
        return t;
    }
    ;
    _proto._Object1_i = function() {
        var t = {};
        t.ddd = "null";
        return t;
    }
    ;
    _proto._Object2_i = function() {
        var t = {};
        t.ddd = "null";
        return t;
    }
    ;
    _proto._Object3_i = function() {
        var t = {};
        t.ddd = "null";
        return t;
    }
    ;
    _proto.difen_i = function() {
        var t = new eui.Label();
        this.difen = t;
        t.bottom = 212;
        t.horizontalCenter = 0;
        t.size = 48;
        t.text = "底分:100";
        t.textColor = 0x6c3a02;
        return t;
    }
    ;
    return HistorcialDetailsEui;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/room/HistorcialDetailsItemEui.exml'] = window.HistorcialDetailsItemEui = (function(_super) {
    __extends(HistorcialDetailsItemEui, _super);
    function HistorcialDetailsItemEui() {
        _super.call(this);
        this.skinParts = ["qg", "wanjia", "yupai", "zhadan", "piacai"];

        this.height = 116;
        this.width = 1567;
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.qg_i(), this.wanjia_i(), this.yupai_i(), this.zhadan_i(), this.piacai_i()];
        this.states = [new eui.State("up",[]), new eui.State("down",[]), new eui.State("disabled",[])];
    }
    var _proto = HistorcialDetailsItemEui.prototype;

    _proto._Image1_i = function() {
        var t = new eui.Image();
        t.bottom = 0;
        t.height = 1567;
        t.horizontalCenter = 0;
        t.rotation = 90;
        t.source = "fgx_png";
        return t;
    }
    ;
    _proto._Image2_i = function() {
        var t = new eui.Image();
        t.bottom = 0;
        t.height = 116;
        t.source = "fgx_png";
        t.x = 415;
        return t;
    }
    ;
    _proto._Image3_i = function() {
        var t = new eui.Image();
        t.bottom = 0;
        t.height = 116;
        t.source = "fgx_png";
        t.x = 723;
        return t;
    }
    ;
    _proto._Image4_i = function() {
        var t = new eui.Image();
        t.bottom = 0;
        t.height = 116;
        t.source = "fgx_png";
        t.x = 1138;
        return t;
    }
    ;
    _proto.qg_i = function() {
        var t = new eui.Image();
        this.qg = t;
        t.source = "bptip_png";
        t.y = 31;
        return t;
    }
    ;
    _proto.wanjia_i = function() {
        var t = new eui.Label();
        this.wanjia = t;
        t.anchorOffsetX = 0;
        t.fontFamily = "黑体";
        t.size = 48;
        t.text = "123123123";
        t.textAlign = "center";
        t.textColor = 0x6c3a02;
        t.touchEnabled = false;
        t.verticalAlign = "middle";
        t.verticalCenter = 0;
        t.width = 416;
        return t;
    }
    ;
    _proto.yupai_i = function() {
        var t = new eui.Label();
        this.yupai = t;
        t.anchorOffsetX = 0;
        t.fontFamily = "黑体";
        t.size = 48;
        t.text = "16张";
        t.textAlign = "center";
        t.textColor = 0x6c3a02;
        t.touchEnabled = false;
        t.verticalAlign = "middle";
        t.verticalCenter = 0;
        t.width = 297;
        t.x = 422;
        return t;
    }
    ;
    _proto.zhadan_i = function() {
        var t = new eui.Label();
        this.zhadan = t;
        t.anchorOffsetX = 0;
        t.fontFamily = "黑体";
        t.size = 48;
        t.text = "100";
        t.textAlign = "center";
        t.textColor = 0x6c3a02;
        t.touchEnabled = false;
        t.verticalAlign = "middle";
        t.verticalCenter = 0;
        t.width = 413;
        t.x = 725;
        return t;
    }
    ;
    _proto.piacai_i = function() {
        var t = new eui.Label();
        this.piacai = t;
        t.anchorOffsetX = 0;
        t.fontFamily = "黑体";
        t.size = 48;
        t.text = "1000";
        t.textAlign = "center";
        t.textColor = 0x6c3a02;
        t.touchEnabled = false;
        t.verticalAlign = "middle";
        t.verticalCenter = 0;
        t.width = 415;
        t.x = 1144;
        return t;
    }
    ;
    return HistorcialDetailsItemEui;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/room/HistoricalItem.exml'] = window.HistoricalItem = (function(_super) {
    __extends(HistoricalItem, _super);
    function HistoricalItem() {
        _super.call(this);
        this.skinParts = ["zhudanhao", "chuangjianshijian", "juhao", "shijishuying", "xiangqingBtn"];

        this.height = 59;
        this.width = 1567;
        this.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this._Image5_i(), this.zhudanhao_i(), this.chuangjianshijian_i(), this.juhao_i(), this.shijishuying_i(), this.xiangqingBtn_i()];
        this.states = [new eui.State("up",[]), new eui.State("down",[]), new eui.State("disabled",[])];
    }
    var _proto = HistoricalItem.prototype;

    _proto._Image1_i = function() {
        var t = new eui.Image();
        t.bottom = 0;
        t.height = 1567;
        t.horizontalCenter = 0;
        t.rotation = 90;
        t.source = "fgx_png";
        return t;
    }
    ;
    _proto._Image2_i = function() {
        var t = new eui.Image();
        t.bottom = 0;
        t.height = 59;
        t.source = "fgx_png";
        t.x = 300;
        return t;
    }
    ;
    _proto._Image3_i = function() {
        var t = new eui.Image();
        t.bottom = 0;
        t.height = 59;
        t.source = "fgx_png";
        t.x = 677;
        return t;
    }
    ;
    _proto._Image4_i = function() {
        var t = new eui.Image();
        t.bottom = 0;
        t.height = 59;
        t.source = "fgx_png";
        t.x = 1026;
        return t;
    }
    ;
    _proto._Image5_i = function() {
        var t = new eui.Image();
        t.bottom = 0;
        t.height = 59;
        t.source = "fgx_png";
        t.x = 1316;
        return t;
    }
    ;
    _proto.zhudanhao_i = function() {
        var t = new eui.Label();
        this.zhudanhao = t;
        t.anchorOffsetX = 0;
        t.fontFamily = "黑体";
        t.size = 36;
        t.text = "12345654";
        t.textAlign = "center";
        t.textColor = 0x6c3a02;
        t.touchEnabled = false;
        t.verticalAlign = "middle";
        t.verticalCenter = 0;
        t.width = 300;
        return t;
    }
    ;
    _proto.chuangjianshijian_i = function() {
        var t = new eui.Label();
        this.chuangjianshijian = t;
        t.anchorOffsetX = 0;
        t.fontFamily = "黑体";
        t.size = 36;
        t.text = "2019-09-07 16:22:33";
        t.textAlign = "center";
        t.textColor = 0x6c3a02;
        t.touchEnabled = false;
        t.verticalAlign = "middle";
        t.verticalCenter = 0.5;
        t.width = 359;
        t.x = 302;
        return t;
    }
    ;
    _proto.juhao_i = function() {
        var t = new eui.Label();
        this.juhao = t;
        t.anchorOffsetX = 0;
        t.fontFamily = "黑体";
        t.size = 36;
        t.text = "1234567891234";
        t.textAlign = "center";
        t.textColor = 0x6c3a02;
        t.touchEnabled = false;
        t.verticalAlign = "middle";
        t.verticalCenter = 0;
        t.width = 353;
        t.x = 679;
        return t;
    }
    ;
    _proto.shijishuying_i = function() {
        var t = new eui.Label();
        this.shijishuying = t;
        t.anchorOffsetX = 0;
        t.fontFamily = "黑体";
        t.size = 36;
        t.text = "123456789";
        t.textAlign = "center";
        t.textColor = 0x6c3a02;
        t.touchEnabled = false;
        t.verticalAlign = "middle";
        t.verticalCenter = 0;
        t.width = 272;
        t.x = 1036;
        return t;
    }
    ;
    _proto.xiangqingBtn_i = function() {
        var t = new BaseButton();
        this.xiangqingBtn = t;
        t.height = 40;
        t.icon = "xq_png";
        t.right = 112;
        t.verticalCenter = 0;
        t.width = 115;
        return t;
    }
    ;
    return HistoricalItem;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/room/HistoricalViewSkin.exml'] = window.HistoricalViewSkin = (function(_super) {
    __extends(HistoricalViewSkin, _super);
    var HistoricalViewSkin$Skin1 = (function(_super) {
        __extends(HistoricalViewSkin$Skin1, _super);
        function HistoricalViewSkin$Skin1() {
            _super.call(this);
            this.skinParts = ["labelDisplay"];

            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()];
            this.states = [new eui.State("up",[]), new eui.State("down",[]), new eui.State("disabled",[])];
        }
        var _proto = HistoricalViewSkin$Skin1.prototype;

        _proto._Image1_i = function() {
            var t = new eui.Image();
            t.percentHeight = 100;
            t.source = "xyy_png";
            t.percentWidth = 100;
            return t;
        }
        ;
        _proto.labelDisplay_i = function() {
            var t = new eui.Label();
            this.labelDisplay = t;
            t.horizontalCenter = 0;
            t.verticalCenter = 0;
            return t;
        }
        ;
        return HistoricalViewSkin$Skin1;
    }
    )(eui.Skin);

    var HistoricalViewSkin$Skin2 = (function(_super) {
        __extends(HistoricalViewSkin$Skin2, _super);
        function HistoricalViewSkin$Skin2() {
            _super.call(this);
            this.skinParts = ["labelDisplay"];

            this.elementsContent = [this._Image1_i(), this.labelDisplay_i()];
            this.states = [new eui.State("up",[]), new eui.State("down",[]), new eui.State("disabled",[])];
        }
        var _proto = HistoricalViewSkin$Skin2.prototype;

        _proto._Image1_i = function() {
            var t = new eui.Image();
            t.percentHeight = 100;
            t.source = "syy_png";
            t.percentWidth = 100;
            return t;
        }
        ;
        _proto.labelDisplay_i = function() {
            var t = new eui.Label();
            this.labelDisplay = t;
            t.horizontalCenter = 0;
            t.verticalCenter = 0;
            return t;
        }
        ;
        return HistoricalViewSkin$Skin2;
    }
    )(eui.Skin);

    function HistoricalViewSkin() {
        _super.call(this);
        this.skinParts = ["close_btn", "histList", "zhudan_Group", "startingTime_btn", "endTime_btn", "startingTime_lab", "endTime_lab", "nextM_btn", "prevM_btn", "subtotal_lab", "total_lab", "subtotalGold_lab", "totalGold_lab", "page_lab", "zanwu_lab", "inquire_btn", "gContent", "dateUI"];

        this.height = 1080;
        this.width = 1920;
        this.elementsContent = [this._Rect1_i(), this.gContent_i(), this.dateUI_i()];
    }
    var _proto = HistoricalViewSkin.prototype;

    _proto._Rect1_i = function() {
        var t = new eui.Rect();
        t.fillAlpha = 0.5;
        t.fillColor = 0x000000;
        t.percentHeight = 100;
        t.percentWidth = 100;
        return t;
    }
    ;
    _proto.gContent_i = function() {
        var t = new eui.Group();
        this.gContent = t;
        t.anchorOffsetX = 765;
        t.anchorOffsetY = 479;
        t.horizontalCenter = 0;
        t.verticalCenter = 0;
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this._Image3_i(), this._Image4_i(), this.close_btn_i(), this._Group1_i(), this.zhudan_Group_i(), this._Group2_i(), this._Group3_i(), this.zanwu_lab_i(), this.inquire_btn_i()];
        return t;
    }
    ;
    _proto._Image1_i = function() {
        var t = new eui.Image();
        t.source = "tipBg_png";
        t.x = 0;
        t.y = 9.5;
        return t;
    }
    ;
    _proto._Image2_i = function() {
        var t = new eui.Image();
        t.horizontalCenter = 0;
        t.source = "lszj_png";
        t.top = 17;
        return t;
    }
    ;
    _proto._Image3_i = function() {
        var t = new eui.Image();
        t.horizontalCenter = 2.5;
        t.source = "hisb1_png";
        t.top = 138;
        return t;
    }
    ;
    _proto._Image4_i = function() {
        var t = new eui.Image();
        t.horizontalCenter = 0;
        t.source = "hieb2_png";
        t.top = 308;
        return t;
    }
    ;
    _proto.close_btn_i = function() {
        var t = new BaseButton();
        this.close_btn = t;
        t.height = 105;
        t.icon = "gb_png";
        t.right = -45;
        t.top = -37;
        t.width = 105;
        return t;
    }
    ;
    _proto._Group1_i = function() {
        var t = new eui.Group();
        t.anchorOffsetX = 0;
        t.anchorOffsetY = 0;
        t.height = 59;
        t.width = 1340;
        t.x = 70;
        t.y = 243;
        t.elementsContent = [this._Label1_i(), this._Label2_i(), this._Label3_i(), this._Label4_i()];
        return t;
    }
    ;
    _proto._Label1_i = function() {
        var t = new eui.Label();
        t.fontFamily = "黑体";
        t.size = 48;
        t.text = "注单号";
        t.textColor = 0x6C3A02;
        t.x = 40;
        t.y = 13;
        return t;
    }
    ;
    _proto._Label2_i = function() {
        var t = new eui.Label();
        t.fontFamily = "黑体";
        t.size = 48;
        t.text = "创建时间";
        t.textColor = 0x6C3A02;
        t.x = 349;
        t.y = 13;
        return t;
    }
    ;
    _proto._Label3_i = function() {
        var t = new eui.Label();
        t.fontFamily = "黑体";
        t.size = 48;
        t.text = "局号";
        t.textColor = 0x6C3A02;
        t.x = 763;
        t.y = 13;
        return t;
    }
    ;
    _proto._Label4_i = function() {
        var t = new eui.Label();
        t.fontFamily = "黑体";
        t.size = 48;
        t.text = "实际输赢额";
        t.textColor = 0x6C3A02;
        t.x = 1005;
        t.y = 13;
        return t;
    }
    ;
    _proto.zhudan_Group_i = function() {
        var t = new eui.Group();
        this.zhudan_Group = t;
        t.anchorOffsetX = 0;
        t.anchorOffsetY = 0;
        t.height = 548.33;
        t.horizontalCenter = 0;
        t.top = 309;
        t.width = 1627;
        t.elementsContent = [this.histList_i()];
        return t;
    }
    ;
    _proto.histList_i = function() {
        var t = new eui.List();
        this.histList = t;
        t.height = 489;
        t.itemRendererSkinName = HistoricalItem;
        t.width = 1627;
        t.x = 0;
        return t;
    }
    ;
    _proto._Group2_i = function() {
        var t = new eui.Group();
        t.anchorOffsetX = 0;
        t.anchorOffsetY = 0;
        t.x = 74;
        t.y = 166;
        t.elementsContent = [this.startingTime_btn_i(), this.endTime_btn_i(), this._Label5_i(), this.startingTime_lab_i(), this.endTime_lab_i(), this._Label6_i()];
        return t;
    }
    ;
    _proto.startingTime_btn_i = function() {
        var t = new eui.Image();
        this.startingTime_btn = t;
        t.scaleX = 1;
        t.scaleY = 1;
        t.source = "rql_png";
        t.x = 255;
        t.y = 3;
        return t;
    }
    ;
    _proto.endTime_btn_i = function() {
        var t = new eui.Image();
        this.endTime_btn = t;
        t.scaleX = 1;
        t.scaleY = 1;
        t.source = "rql_png";
        t.x = 922;
        t.y = 3;
        return t;
    }
    ;
    _proto._Label5_i = function() {
        var t = new eui.Label();
        t.fontFamily = "黑体";
        t.scaleX = 1;
        t.scaleY = 1;
        t.size = 53;
        t.text = "开始时间:";
        t.textColor = 0x6c3a02;
        t.x = 0;
        t.y = 10;
        return t;
    }
    ;
    _proto.startingTime_lab_i = function() {
        var t = new eui.Label();
        this.startingTime_lab = t;
        t.anchorOffsetX = 0;
        t.anchorOffsetY = 0;
        t.fontFamily = "黑体";
        t.rotation = 359.99;
        t.scaleX = 1;
        t.scaleY = 1;
        t.size = 36;
        t.text = "开始时间:";
        t.textAlign = "center";
        t.textColor = 0x6c3a02;
        t.touchEnabled = false;
        t.verticalAlign = "middle";
        t.width = 387;
        t.x = 262;
        t.y = 17;
        return t;
    }
    ;
    _proto.endTime_lab_i = function() {
        var t = new eui.Label();
        this.endTime_lab = t;
        t.anchorOffsetX = 0;
        t.anchorOffsetY = 0;
        t.fontFamily = "黑体";
        t.scaleX = 1;
        t.scaleY = 1;
        t.size = 36;
        t.text = "开始时间:";
        t.textAlign = "center";
        t.textColor = 0x6c3a02;
        t.touchEnabled = false;
        t.verticalAlign = "middle";
        t.width = 391;
        t.x = 934;
        t.y = 17;
        return t;
    }
    ;
    _proto._Label6_i = function() {
        var t = new eui.Label();
        t.fontFamily = "黑体";
        t.scaleX = 1;
        t.scaleY = 1;
        t.size = 53;
        t.text = "结束时间:";
        t.textColor = 0x6c3a02;
        t.x = 687;
        t.y = 10;
        return t;
    }
    ;
    _proto._Group3_i = function() {
        var t = new eui.Group();
        t.anchorOffsetX = 0;
        t.anchorOffsetY = 0;
        t.height = 56;
        t.horizontalCenter = 0;
        t.width = 1484.67;
        t.y = 860;
        t.elementsContent = [this.nextM_btn_i(), this.prevM_btn_i(), this._Label7_i(), this._Label8_i(), this.subtotal_lab_i(), this.total_lab_i(), this.subtotalGold_lab_i(), this.totalGold_lab_i(), this.page_lab_i()];
        return t;
    }
    ;
    _proto.nextM_btn_i = function() {
        var t = new BaseButton();
        this.nextM_btn = t;
        t.height = 38;
        t.right = 464;
        t.width = 108;
        t.y = 0;
        t.skinName = HistoricalViewSkin$Skin1;
        return t;
    }
    ;
    _proto.prevM_btn_i = function() {
        var t = new BaseButton();
        this.prevM_btn = t;
        t.height = 38;
        t.left = 464;
        t.width = 108;
        t.y = 0;
        t.skinName = HistoricalViewSkin$Skin2;
        return t;
    }
    ;
    _proto._Label7_i = function() {
        var t = new eui.Label();
        t.fontFamily = "黑体";
        t.scaleX = 1;
        t.scaleY = 1;
        t.size = 20;
        t.text = "总计";
        t.textColor = 0x000000;
        t.visible = false;
        t.x = 40.5;
        t.y = 33;
        return t;
    }
    ;
    _proto._Label8_i = function() {
        var t = new eui.Label();
        t.fontFamily = "黑体";
        t.scaleX = 1;
        t.scaleY = 1;
        t.size = 20;
        t.text = "小计";
        t.textColor = 0x000000;
        t.visible = false;
        t.x = 41;
        t.y = 3;
        return t;
    }
    ;
    _proto.subtotal_lab_i = function() {
        var t = new eui.Label();
        this.subtotal_lab = t;
        t.fontFamily = "黑体";
        t.scaleX = 1;
        t.scaleY = 1;
        t.size = 20;
        t.text = "共0条";
        t.textColor = 0x000000;
        t.visible = false;
        t.x = 103;
        t.y = 3;
        return t;
    }
    ;
    _proto.total_lab_i = function() {
        var t = new eui.Label();
        this.total_lab = t;
        t.anchorOffsetY = 0;
        t.fontFamily = "黑体";
        t.height = 22.67;
        t.scaleX = 1;
        t.scaleY = 1;
        t.size = 20;
        t.text = "共0条";
        t.textAlign = "center";
        t.textColor = 0x000000;
        t.verticalAlign = "middle";
        t.visible = false;
        t.x = 103;
        t.y = 32.17;
        return t;
    }
    ;
    _proto.subtotalGold_lab_i = function() {
        var t = new eui.Label();
        this.subtotalGold_lab = t;
        t.fontFamily = "黑体";
        t.scaleX = 1;
        t.scaleY = 1;
        t.size = 20;
        t.text = "";
        t.textColor = 0x000000;
        t.visible = false;
        t.x = 966;
        t.y = 3;
        return t;
    }
    ;
    _proto.totalGold_lab_i = function() {
        var t = new eui.Label();
        this.totalGold_lab = t;
        t.anchorOffsetY = 0;
        t.fontFamily = "黑体";
        t.height = 24;
        t.scaleX = 1;
        t.scaleY = 1;
        t.size = 20;
        t.text = "";
        t.textColor = 0x000000;
        t.verticalAlign = "middle";
        t.visible = false;
        t.x = 966;
        t.y = 32;
        return t;
    }
    ;
    _proto.page_lab_i = function() {
        var t = new eui.Label();
        this.page_lab = t;
        t.fontFamily = "黑体";
        t.horizontalCenter = 0;
        t.size = 20;
        t.text = "第一页";
        t.textColor = 0x000000;
        t.visible = false;
        t.y = 34;
        return t;
    }
    ;
    _proto.zanwu_lab_i = function() {
        var t = new eui.Label();
        this.zanwu_lab = t;
        t.fontFamily = "黑体";
        t.horizontalCenter = 0;
        t.text = "暂无数据";
        t.textColor = 0x6C3A02;
        t.verticalCenter = 62.5;
        return t;
    }
    ;
    _proto.inquire_btn_i = function() {
        var t = new BaseButton();
        this.inquire_btn = t;
        t.height = 58;
        t.icon = "cx_png";
        t.width = 181;
        t.x = 1441;
        t.y = 170.5;
        return t;
    }
    ;
    _proto.dateUI_i = function() {
        var t = new DateUI();
        this.dateUI = t;
        t.scaleX = 1;
        t.scaleY = 1;
        t.skinName = "DateUISkin";
        t.visible = false;
        t.x = 0;
        t.y = 0;
        return t;
    }
    ;
    return HistoricalViewSkin;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/room/RoomListItem.exml'] = window.RoomListItemSkin = (function(_super) {
    __extends(RoomListItemSkin, _super);
    function RoomListItemSkin() {
        _super.call(this);
        this.skinParts = ["aniGroup", "itemBg", "dfLable", "zreLable", "gContent"];

        this.height = 330;
        this.width = 461;
        this.elementsContent = [this.gContent_i()];
    }
    var _proto = RoomListItemSkin.prototype;

    _proto.gContent_i = function() {
        var t = new eui.Group();
        this.gContent = t;
        t.anchorOffsetX = 230;
        t.anchorOffsetY = 148;
        t.height = 330;
        t.width = 461;
        t.x = 230;
        t.y = 148;
        t.elementsContent = [this.aniGroup_i(), this.itemBg_i(), this.dfLable_i(), this.zreLable_i()];
        return t;
    }
    ;
    _proto.aniGroup_i = function() {
        var t = new eui.Group();
        this.aniGroup = t;
        t.horizontalCenter = 0;
        t.verticalCenter = 0;
        return t;
    }
    ;
    _proto.itemBg_i = function() {
        var t = new eui.Image();
        this.itemBg = t;
        t.source = "lv1_png";
        t.x = 28.5;
        t.y = 225.5;
        return t;
    }
    ;
    _proto.dfLable_i = function() {
        var t = new eui.BitmapLabel();
        this.dfLable = t;
        t.font = "roomitemLV_fnt";
        t.horizontalCenter = 0.5;
        t.text = "1000";
        t.y = 234.5;
        return t;
    }
    ;
    _proto.zreLable_i = function() {
        var t = new eui.BitmapLabel();
        this.zreLable = t;
        t.font = "roomitemLV_fnt";
        t.horizontalCenter = 0;
        t.text = "500";
        t.y = 280;
        return t;
    }
    ;
    return RoomListItemSkin;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/room/RoomView.exml'] = window.RoomViewSkin = (function(_super) {
    __extends(RoomViewSkin, _super);
    var RoomViewSkin$Skin3 = (function(_super) {
        __extends(RoomViewSkin$Skin3, _super);
        function RoomViewSkin$Skin3() {
            _super.call(this);
            this.skinParts = [];

            this.elementsContent = [this._Image1_i()];
        }
        var _proto = RoomViewSkin$Skin3.prototype;

        _proto._Image1_i = function() {
            var t = new eui.Image();
            t.height = 108;
            t.source = "";
            t.width = 106;
            return t;
        }
        ;
        return RoomViewSkin$Skin3;
    }
    )(eui.Skin);

    var RoomViewSkin$Skin4 = (function(_super) {
        __extends(RoomViewSkin$Skin4, _super);
        function RoomViewSkin$Skin4() {
            _super.call(this);
            this.skinParts = [];

            this.elementsContent = [this._Image1_i()];
        }
        var _proto = RoomViewSkin$Skin4.prototype;

        _proto._Image1_i = function() {
            var t = new eui.Image();
            t.height = 108;
            t.source = "";
            t.width = 106;
            return t;
        }
        ;
        return RoomViewSkin$Skin4;
    }
    )(eui.Skin);

    var RoomViewSkin$Skin5 = (function(_super) {
        __extends(RoomViewSkin$Skin5, _super);
        function RoomViewSkin$Skin5() {
            _super.call(this);
            this.skinParts = [];

            this.elementsContent = [this._Image1_i()];
        }
        var _proto = RoomViewSkin$Skin5.prototype;

        _proto._Image1_i = function() {
            var t = new eui.Image();
            t.height = 108;
            t.source = "";
            t.width = 106;
            return t;
        }
        ;
        return RoomViewSkin$Skin5;
    }
    )(eui.Skin);

    function RoomViewSkin() {
        _super.call(this);
        this.skinParts = ["roomList", "listGroup", "imgTopbg", "imgInfobg", "imgHead", "imgMask", "lbName", "lbCoin", "btnRule", "btnRecord", "btnHall", "gBtns", "gTop"];

        this.height = 1080;
        this.width = 1920;
        this.elementsContent = [this._Image1_i(), this.listGroup_i(), this.gTop_i()];

        eui.Binding.$bindProperties(this, ["imgMask"], [0], this.imgHead, "mask");
    }
    var _proto = RoomViewSkin.prototype;

    _proto._Image1_i = function() {
        var t = new eui.Image();
        t.percentHeight = 100;
        t.source = "bg01_jpg";
        t.percentWidth = 100;
        return t;
    }
    ;
    _proto.listGroup_i = function() {
        var t = new eui.Group();
        this.listGroup = t;
        t.horizontalCenter = 217.5;
        t.verticalCenter = 80;
        t.elementsContent = [this.roomList_i()];
        return t;
    }
    ;
    _proto.roomList_i = function() {
        var t = new eui.List();
        this.roomList = t;
        t.itemRenderer = RoomListItem;
        t.layout = this._TileLayout1_i();
        return t;
    }
    ;
    _proto._TileLayout1_i = function() {
        var t = new eui.TileLayout();
        t.horizontalGap = -30;
        t.requestedColumnCount = 3;
        t.requestedRowCount = 2;
        t.verticalGap = 95;
        return t;
    }
    ;
    _proto.gTop_i = function() {
        var t = new eui.Group();
        this.gTop = t;
        t.percentWidth = 100;
        t.elementsContent = [this.imgTopbg_i(), this._Group3_i(), this._Image3_i(), this.gBtns_i()];
        return t;
    }
    ;
    _proto.imgTopbg_i = function() {
        var t = new eui.Image();
        this.imgTopbg = t;
        t.height = 192;
        t.percentWidth = 100;
        return t;
    }
    ;
    _proto._Group3_i = function() {
        var t = new eui.Group();
        t.x = 3;
        t.y = 3;
        t.elementsContent = [this.imgInfobg_i(), this._Group1_i(), this.lbName_i(), this._Group2_i()];
        return t;
    }
    ;
    _proto.imgInfobg_i = function() {
        var t = new eui.Image();
        this.imgInfobg = t;
        t.height = 140;
        t.width = 437;
        return t;
    }
    ;
    _proto._Group1_i = function() {
        var t = new eui.Group();
        t.verticalCenter = -3;
        t.x = 12.6;
        t.elementsContent = [this.imgHead_i(), this.imgMask_i()];
        return t;
    }
    ;
    _proto.imgHead_i = function() {
        var t = new eui.Image();
        this.imgHead = t;
        t.height = 110;
        t.horizontalCenter = 0;
        t.smoothing = true;
        t.verticalCenter = 0;
        t.width = 110;
        return t;
    }
    ;
    _proto.imgMask_i = function() {
        var t = new eui.Rect();
        this.imgMask = t;
        t.ellipseHeight = 110;
        t.ellipseWidth = 110;
        t.fillColor = 0x000000;
        t.height = 110;
        t.horizontalCenter = 0;
        t.verticalCenter = 0;
        t.width = 110;
        return t;
    }
    ;
    _proto.lbName_i = function() {
        var t = new eui.Label();
        this.lbName = t;
        t.anchorOffsetX = 0;
        t.size = 36;
        t.text = "";
        t.x = 139;
        t.y = 18;
        return t;
    }
    ;
    _proto._Group2_i = function() {
        var t = new eui.Group();
        t.x = 136;
        t.y = 68;
        t.elementsContent = [this._Image2_i(), this.lbCoin_i()];
        return t;
    }
    ;
    _proto._Image2_i = function() {
        var t = new eui.Image();
        t.source = "commCoin_png";
        t.y = -6;
        return t;
    }
    ;
    _proto.lbCoin_i = function() {
        var t = new eui.Label();
        this.lbCoin = t;
        t.fontFamily = "Arial";
        t.size = 38;
        t.text = "0.00";
        t.textColor = 0xffdaa9;
        t.verticalCenter = -2;
        t.x = 53;
        return t;
    }
    ;
    _proto._Image3_i = function() {
        var t = new eui.Image();
        t.horizontalCenter = 0;
        t.source = "slogo_png";
        t.y = 6;
        return t;
    }
    ;
    _proto.gBtns_i = function() {
        var t = new eui.Group();
        this.gBtns = t;
        t.right = 30;
        t.top = 30;
        t.layout = this._HorizontalLayout1_i();
        t.elementsContent = [this.btnRule_i(), this.btnRecord_i(), this.btnHall_i()];
        return t;
    }
    ;
    _proto._HorizontalLayout1_i = function() {
        var t = new eui.HorizontalLayout();
        t.gap = 50;
        return t;
    }
    ;
    _proto.btnRule_i = function() {
        var t = new BaseButton();
        this.btnRule = t;
        t.height = 108;
        t.width = 106;
        t.skinName = RoomViewSkin$Skin3;
        return t;
    }
    ;
    _proto.btnRecord_i = function() {
        var t = new BaseButton();
        this.btnRecord = t;
        t.height = 108;
        t.width = 106;
        t.skinName = RoomViewSkin$Skin4;
        return t;
    }
    ;
    _proto.btnHall_i = function() {
        var t = new BaseButton();
        this.btnHall = t;
        t.height = 108;
        t.width = 106;
        t.skinName = RoomViewSkin$Skin5;
        return t;
    }
    ;
    return RoomViewSkin;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/room/RuleView.exml'] = window.RuleViewSkin = (function(_super) {
    __extends(RuleViewSkin, _super);
    var RuleViewSkin$Skin6 = (function(_super) {
        __extends(RuleViewSkin$Skin6, _super);
        function RuleViewSkin$Skin6() {
            _super.call(this);
            this.skinParts = [];

            this.height = 131;
            this.width = 387;
            this.elementsContent = [this._Image1_i()];
            this.states = [new eui.State("up",[new eui.SetStateProperty(this,["hostComponent.data.up"],[0],this._Image1,"source")]), new eui.State("down",[new eui.SetStateProperty(this,["hostComponent.data.down"],[0],this._Image1,"source")])];
        }
        var _proto = RuleViewSkin$Skin6.prototype;

        _proto._Image1_i = function() {
            var t = new eui.Image();
            this._Image1 = t;
            t.horizontalCenter = 0;
            t.verticalCenter = -3;
            return t;
        }
        ;
        return RuleViewSkin$Skin6;
    }
    )(eui.Skin);

    function RuleViewSkin() {
        _super.call(this);
        this.skinParts = ["bgRect", "closeButton", "tabBar", "viewStack", "scroller", "gContent"];

        this.height = 1080;
        this.width = 1920;
        this.elementsContent = [this.bgRect_i(), this.gContent_i()];

        eui.Binding.$bindProperties(this, ["tabBar.selectedIndex"], [0], this.viewStack, "selectedIndex");
    }
    var _proto = RuleViewSkin.prototype;

    _proto.bgRect_i = function() {
        var t = new eui.Rect();
        this.bgRect = t;
        t.alpha = 0.5;
        t.fillColor = 0x000000;
        t.percentHeight = 100;
        t.percentWidth = 100;
        return t;
    }
    ;
    _proto.gContent_i = function() {
        var t = new eui.Group();
        this.gContent = t;
        t.horizontalCenter = 0;
        t.verticalCenter = 0;
        t.elementsContent = [this._Image1_i(), this.closeButton_i(), this._Image2_i(), this._Image3_i(), this.tabBar_i(), this.scroller_i()];
        return t;
    }
    ;
    _proto._Image1_i = function() {
        var t = new eui.Image();
        t.source = "tipBg_png";
        return t;
    }
    ;
    _proto.closeButton_i = function() {
        var t = new BaseButton();
        this.closeButton = t;
        t.height = 105;
        t.icon = "gb_png";
        t.right = -45;
        t.width = 105;
        t.y = -29;
        return t;
    }
    ;
    _proto._Image2_i = function() {
        var t = new eui.Image();
        t.horizontalCenter = 0;
        t.source = "gzjs_png";
        t.top = 11;
        return t;
    }
    ;
    _proto._Image3_i = function() {
        var t = new eui.Image();
        t.horizontalCenter = 0;
        t.source = "tibKu_png";
        t.verticalCenter = 55;
        return t;
    }
    ;
    _proto.tabBar_i = function() {
        var t = new eui.TabBar();
        this.tabBar = t;
        t.x = 34;
        t.y = 153;
        t.layout = this._VerticalLayout1_i();
        t.itemRendererSkinName = RuleViewSkin$Skin6;
        t.dataProvider = this._ArrayCollection1_i();
        return t;
    }
    ;
    _proto._VerticalLayout1_i = function() {
        var t = new eui.VerticalLayout();
        t.gap = 68;
        return t;
    }
    ;
    _proto._ArrayCollection1_i = function() {
        var t = new eui.ArrayCollection();
        t.source = [this._Object1_i(), this._Object2_i(), this._Object3_i(), this._Object4_i()];
        return t;
    }
    ;
    _proto._Object1_i = function() {
        var t = {};
        t.down = "jbgz1_png";
        t.up = "jbgz_png";
        return t;
    }
    ;
    _proto._Object2_i = function() {
        var t = {};
        t.down = "jbpx1_png";
        t.up = "jbpx_png";
        return t;
    }
    ;
    _proto._Object3_i = function() {
        var t = {};
        t.down = "jsgz1_png";
        t.up = "jsgz_png";
        return t;
    }
    ;
    _proto._Object4_i = function() {
        var t = {};
        t.down = "tsgz1_png";
        t.up = "tsgz_png";
        return t;
    }
    ;
    _proto.scroller_i = function() {
        var t = new eui.Scroller();
        this.scroller = t;
        t.height = 731;
        t.width = 1177;
        t.x = 466;
        t.y = 171;
        t.viewport = this.viewStack_i();
        return t;
    }
    ;
    _proto.viewStack_i = function() {
        var t = new eui.ViewStack();
        this.viewStack = t;
        t.elementsContent = [this._Group1_i(), this._Group2_i(), this._Group3_i(), this._Group4_i()];
        return t;
    }
    ;
    _proto._Group1_i = function() {
        var t = new eui.Group();
        t.name = "g1";
        t.elementsContent = [this._Image4_i()];
        return t;
    }
    ;
    _proto._Image4_i = function() {
        var t = new eui.Image();
        t.source = "rule1_png";
        return t;
    }
    ;
    _proto._Group2_i = function() {
        var t = new eui.Group();
        t.name = "g2";
        t.elementsContent = [this._Image5_i()];
        return t;
    }
    ;
    _proto._Image5_i = function() {
        var t = new eui.Image();
        t.source = "rule2_png";
        return t;
    }
    ;
    _proto._Group3_i = function() {
        var t = new eui.Group();
        t.name = "g3";
        t.elementsContent = [this._Image6_i()];
        return t;
    }
    ;
    _proto._Image6_i = function() {
        var t = new eui.Image();
        t.source = "rule3_png";
        return t;
    }
    ;
    _proto._Group4_i = function() {
        var t = new eui.Group();
        t.name = "g43";
        t.elementsContent = [this._Image7_i()];
        return t;
    }
    ;
    _proto._Image7_i = function() {
        var t = new eui.Image();
        t.source = "rule4_png";
        return t;
    }
    ;
    return RuleViewSkin;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/SetDlg.exml'] = window.SetDlgSkin = (function(_super) {
    __extends(SetDlgSkin, _super);
    function SetDlgSkin() {
        _super.call(this);
        this.skinParts = ["btn_close", "imgYinyue", "imgYinxiao", "lbYinxiao", "lbYinyue", "lbYinxiaoT", "lbYinyueT", "btn_sure", "gContent"];

        this.height = 1080;
        this.width = 1920;
        this.elementsContent = [this._Rect1_i(), this.gContent_i()];
    }
    var _proto = SetDlgSkin.prototype;

    _proto._Rect1_i = function() {
        var t = new eui.Rect();
        t.fillAlpha = 0.7;
        t.fillColor = 0x000000;
        t.percentHeight = 100;
        t.percentWidth = 100;
        return t;
    }
    ;
    _proto.gContent_i = function() {
        var t = new eui.Group();
        this.gContent = t;
        t.horizontalCenter = 0;
        t.verticalCenter = 0;
        t.elementsContent = [this._Image1_i(), this._Image2_i(), this.btn_close_i(), this.imgYinyue_i(), this.imgYinxiao_i(), this.lbYinxiao_i(), this.lbYinyue_i(), this.lbYinxiaoT_i(), this.lbYinyueT_i(), this.btn_sure_i(), this._Image3_i()];
        return t;
    }
    ;
    _proto._Image1_i = function() {
        var t = new eui.Image();
        t.source = "wk_png";
        return t;
    }
    ;
    _proto._Image2_i = function() {
        var t = new eui.Image();
        t.horizontalCenter = 0.5;
        t.source = "nk_png";
        t.verticalCenter = -20;
        return t;
    }
    ;
    _proto.btn_close_i = function() {
        var t = new BaseButton();
        this.btn_close = t;
        t.icon = "gb_png";
        t.right = -36;
        t.y = -30.64;
        return t;
    }
    ;
    _proto.imgYinyue_i = function() {
        var t = new eui.Image();
        this.imgYinyue = t;
        t.horizontalCenter = 59.5;
        t.source = "musicopen_png";
        t.y = 409;
        return t;
    }
    ;
    _proto.imgYinxiao_i = function() {
        var t = new eui.Image();
        this.imgYinxiao = t;
        t.horizontalCenter = 59.5;
        t.source = "musicopen_png";
        t.y = 264;
        return t;
    }
    ;
    _proto.lbYinxiao_i = function() {
        var t = new eui.Label();
        this.lbYinxiao = t;
        t.size = 60;
        t.text = "音效";
        t.textColor = 0x6c3a02;
        t.x = 335;
        t.y = 264;
        return t;
    }
    ;
    _proto.lbYinyue_i = function() {
        var t = new eui.Label();
        this.lbYinyue = t;
        t.size = 60;
        t.text = "音乐";
        t.textColor = 0x6c3a02;
        t.x = 335;
        t.y = 409;
        return t;
    }
    ;
    _proto.lbYinxiaoT_i = function() {
        var t = new eui.Label();
        this.lbYinxiaoT = t;
        t.size = 60;
        t.text = "开";
        t.textColor = 0x6c3a02;
        t.x = 736;
        t.y = 264;
        return t;
    }
    ;
    _proto.lbYinyueT_i = function() {
        var t = new eui.Label();
        this.lbYinyueT = t;
        t.size = 60;
        t.text = "开";
        t.textColor = 0x6c3a02;
        t.x = 736;
        t.y = 409;
        return t;
    }
    ;
    _proto.btn_sure_i = function() {
        var t = new BaseButton();
        this.btn_sure = t;
        t.horizontalCenter = 0;
        t.icon = "qdb_png";
        t.y = 644;
        return t;
    }
    ;
    _proto._Image3_i = function() {
        var t = new eui.Image();
        t.horizontalCenter = 0.5;
        t.source = "szt_png";
        t.y = 9.36;
        return t;
    }
    ;
    return SetDlgSkin;
}
)(eui.Skin);
generateEUI.paths['resource/eui_skins/WaitEUI.exml'] = window.WaitEUISkin = (function(_super) {
    __extends(WaitEUISkin, _super);
    function WaitEUISkin() {
        _super.call(this);
        this.skinParts = ["imgLoading", "lbMsg"];

        this.height = 720;
        this.width = 1280;
        this.elementsContent = [this._Rect1_i(), this._Group1_i()];
    }
    var _proto = WaitEUISkin.prototype;

    _proto._Rect1_i = function() {
        var t = new eui.Rect();
        t.alpha = 0.5;
        t.fillColor = 0x000000;
        t.percentHeight = 100;
        t.percentWidth = 100;
        return t;
    }
    ;
    _proto._Group1_i = function() {
        var t = new eui.Group();
        t.horizontalCenter = 0;
        t.verticalCenter = 0;
        t.elementsContent = [this.imgLoading_i(), this.lbMsg_i()];
        return t;
    }
    ;
    _proto.imgLoading_i = function() {
        var t = new eui.Image();
        this.imgLoading = t;
        t.anchorOffsetX = 68;
        t.anchorOffsetY = 68;
        t.horizontalCenter = 0.5;
        t.source = "waiting_png";
        t.y = 72;
        return t;
    }
    ;
    _proto.lbMsg_i = function() {
        var t = new eui.Label();
        this.lbMsg = t;
        t.fontFamily = "Microsoft YaHei";
        t.text = "1123";
        t.textAlign = "center";
        t.width = 500;
        t.y = 160;
        return t;
    }
    ;
    return WaitEUISkin;
}
)(eui.Skin);
