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
            d.write("(使用轉移,販賣及換印花記得選擇道具數量)</td></tr>")) : d.write('<input type="hidden" name="item_num" value="1">'),
        d.write('<tr><td colspan="13" >欲轉移需輸入對方遊戲的帳號 <input type="text" name="pay_id" size="16"> 安全密碼 <input type="password" name="pw" size="16"></td></tr>'),
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
