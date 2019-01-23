// Global Vars
var qualities_num = 1;

function showInput() {
 var corruption = 0;
 var crime = 0;
 var economy = 0;
 var law = 0;
 var lore = 0;
 var society = 0;
 var danger = 0;
 var modifier = 0;
 
 var pop_sugg = "Less than " + addComma(20);
 var qualities = "";
 var disadvantages = "";
 
 var base_val_increase = 1;
 var limit_increase = 1; 
 var base_val = 50;
 var limit = 500;
 var spellcasting = 1;
 var minor_items = "1d4";
 var medium_items = "&mdash;";
 var major_items = "&mdash;";

 //Help Text
 var minor_items_all = "<sup>&#9733;</sup> In a metropolis, nearly all minor magic items are available.";
 
 var settlename = document.getElementById("settl_name").value;
 var settlealign = document.getElementById("settl_align").value;
 var settletype = document.getElementById("settl_type").value;
 var settleruler = document.getElementById("settl_gov").value;
 var settlepopulation = document.getElementById("settl_pop").value;
 var settlebreak = document.getElementById("settl_break").value;
 var settledesc = document.getElementById("description").value;
 
 var sq_Academic = document.getElementById("sq_Academic").checked;
 var sq_HolySite = document.getElementById("sq_HolySite").checked;
 var sq_Insular = document.getElementById("sq_Insular").checked;
 var sq_Magically = document.getElementById("sq_Magically").checked;
 var sq_Notorious = document.getElementById("sq_Notorious").checked;
 var sq_Pious = document.getElementById("sq_Pious").checked;
 var sq_Prosperous = document.getElementById("sq_Prosperous").checked;
 var sq_Intolerant = document.getElementById("sq_Intolerant").checked;
 var sq_Rumormongering = document.getElementById("sq_Rumormongering").checked;
 var sq_Strategic = document.getElementById("sq_Strategic").checked;
 var sq_Superstitious = document.getElementById("sq_Superstitious").checked;
 var sq_Tourist = document.getElementById("sq_Tourist").checked;
 
 var sd_Anarchy = document.getElementById("sd_Anarchy").checked;
 var sd_Cursed = document.getElementById("sd_Cursed").checked;
 var sd_Curse = document.getElementById("curse_sel").value;
 var sd_Hunted = document.getElementById("sd_Hunted").checked;
 var sd_Impoverished = document.getElementById("sd_Impoverished").checked;
 var sd_Plagued = document.getElementById("sd_Plagued").checked;
 var plague_name = document.getElementById("plague_name").value;
 
 switch(settlealign) {
  case "LG": law = ++law; society = ++society; break;
	case "NG": lore = ++lore; society = ++society; break;
	case "CG": crime = ++crime; society = ++society; break;
  case "LN": law = ++law; lore = ++lore; break;
	case "TN": lore = lore + 2; settlealign = "N"; break;
	case "CN": crime = ++crime; lore = ++lore; break;
	case "LE": law = ++law; corruption = ++corruption; break;
	case "NE": lore = ++lore; corruption = ++corruption; break;
	case "CE": crime = ++crime; corruption = ++corruption; break;
 }
 
 switch(settletype) {
  case "T": 
	 settletype = "Thorp"; 
	 modifier = -4; danger = -10;
	 break;
	case "H": 
	 settletype = "Hamlet";
	 modifier = -2; danger = -5;
	 base_val = 200; limit = 1000; spellcasting = 2;
	 pop_sugg = addComma(21) + " - " + addComma(60);
	 minor_items = "1d6";
	 break;
	case "V": 
	 settletype = "Village";
	 modifier = -1;
	 base_val = 500; limit = 2500; spellcasting = 3;
	 pop_sugg = addComma(61) + " - " + addComma(200);
	 minor_items = "2d4"; medium_items = "1d4";
	 qualities_num = 2;
	 break;
  case "ST": 
	 settletype = "Small Town";
	 base_val = 1000; limit = 5000; spellcasting = 4;
	 pop_sugg = addComma(201) + " -  " + addComma(2000);
	 minor_items = "3d4"; medium_items = "1d6";
	 qualities_num = 2;
	 break;
	case "LT": 
	 settletype = "Large Town";
	 danger = 5; 
	 base_val = 2000; limit = 10000; spellcasting = 5;
	 pop_sugg = addComma(2001) + " - " + addComma(5000);
	 minor_items = "3d4"; medium_items = "2d4"; major_items = "1d4";
	 qualities_num = 3;
	 break;
	case "SC": 
	 settletype = "Small City";
	 modifier = 1; danger = 5;
	 base_val = 4000; limit = 25000; spellcasting = 6;
	 pop_sugg = addComma(5001) + " - " + addComma(10000);
	 minor_items = "4d4"; medium_items = "3d4"; major_items = "1d6";
	 qualities_num = 4;
	 break;
	case "LC": 
	 settletype = "Large City";
	 modifier = 2; danger = 10;
	 base_val = 8000; limit = 50000; spellcasting = 7;
	 pop_sugg = addComma(10001) + " - " + addComma(25000);
	 minor_items = "4d4"; medium_items = "3d4"; major_items = "2d4";
	 qualities_num = 5
	 break;
	case "M": 
	 settletype = "Metropolis";
	 modifier = 4; danger = 10;
	 base_val = 16000; limit = 100000; spellcasting = 8;
	 pop_sugg = "More than " + addComma(25000);
	 minor_items = "&#9733;"; medium_items = "4d4"; major_items = "3d4";
	 qualities_num = 6;
	 break;
 }
 
 switch(settleruler) {
  case "Auto": settleruler = "Autocracy"; break;
	case "Coun": settleruler = "Council"; society = society +4; law = law -2; lore = lore -2; break;
	case "Magi": settleruler = "Magical"; lore = lore +2; corruption = corruption -2; society = society -2; spellcasting = ++spellcasting; break;
  case "Over": settleruler = "Overlord"; corruption = corruption +2; law = law +2; society = society -2; crime = crime -2; break;
	case "Secret": settleruler = "Secret Syndicate"; corruption = corruption +2; economy = economy +2; crime = crime +2; law = law -6; break;
 }
 
 if (sq_Academic) { lore = ++lore; spellcasting = ++spellcasting;	qualities = qualities + "Academic, "; }
 if (sq_HolySite) { corruption = corruption -2;	spellcasting = spellcasting +2;	qualities = qualities + "Holy Site, "; }
 if (sq_Insular) { law = ++law;	crime = --crime; qualities = qualities + "Insular, "; }
 if (sq_Magically) { spellcasting = spellcasting +2; base_val_increase = base_val_increase + 0.2; limit_increase = limit_increase + 0.2; qualities = qualities + "Magically Attuned, "; }
 if (sq_Notorious) { crime = ++crime; law = --law; danger = danger +10; base_val_increase = base_val_increase + 0.3; limit_increase = limit_increase + 0.5; qualities = qualities + "Notorious, "; }
 if (sq_Pious) { spellcasting = ++spellcasting; qualities = qualities + "Pious, "; }
 if (sq_Prosperous) { economy = ++economy; base_val_increase = base_val_increase + 0.3; limit_increase = limit_increase + 1.3; qualities = qualities + "Prosperous, "; }
 if (sq_Intolerant) { qualities = qualities + "Racially Intolerant, "; }
 if (sq_Rumormongering) { lore = ++lore; society = --society; qualities = qualities + "Rumormongering Citizens, "; }
 if (sq_Strategic) { economy = ++economy; base_val_increase = base_val_increase + 0.1; qualities = qualities + "Strategic Location , "; }
 if (sq_Superstitious) { crime = crime -4; law = law +2; society = society +2; spellcasting = spellcasting -2; qualities = qualities + "Superstitious, "; }
 if (sq_Tourist) { economy = ++economy; base_val_increase = base_val_increase + 0.2; qualities = qualities + "Tourist Attraction, "; }
 
 if (sd_Anarchy) { corruption = corruption +4; crime = crime +4; economy = economy -4; society = society -4; law = law -6; danger = danger +20; disadvantages = disadvantages + "Anarchy, "; }
 if (sd_Cursed) { 
  disadvantages = disadvantages + "Cursed (" + sd_Curse + "), ";
	switch (sd_Curse) {
   case "Corruption": corruption = corruption +4; break;
	 case "Crime": crime = crime +4; break;
	 case "Economy": economy = economy -4; break;
	 case "Law": law = law -4; break;
	 case "Lore": lore = lore -4; break;
	 case "Society": society = society -4; break;
  };
 }
 if (sd_Hunted) { economy = economy -4; law = law -4; society = society -4; danger = danger +20; base_val_increase = base_val_increase - 0.2; disadvantages = disadvantages + "Hunted, "; }
 if (sd_Impoverished) { corruption = ++corruption; crime = ++crime; base_val_increase = base_val_increase - 0.5; disadvantages = disadvantages + "Impoverished, "; minor_items = reduceItems(minor_items); medium_items = reduceItems(medium_items); major_items = reduceItems(major_items); }
 if (sd_Plagued) { corruption = corruption -2; crime = crime -2; economy = economy -2; law = law -2; lore = lore -2; society = society -2; base_val_increase = base_val_increase - 0.2; disadvantages = disadvantages + "Plagued (" + plague_name + "), "; }
 
 base_val = base_val * base_val_increase;
 limit = limit * limit_increase;
 qualities = qualities.substring(0, qualities.length -2);
 disadvantages = disadvantages.substring(0, disadvantages.length -2);
    
 //Header Block
 document.getElementById('disp_name').innerHTML = settlename;
 document.getElementById('disp_align').innerHTML = settlealign;
 document.getElementById('disp_type').innerHTML = settletype; 
 //City Block
 document.getElementById('corruption').innerHTML = corruption + modifier;
 document.getElementById('crime').innerHTML = crime + modifier;
 document.getElementById('economy').innerHTML = economy + modifier;
 document.getElementById('law').innerHTML = law + modifier;
 document.getElementById('lore').innerHTML = lore + modifier;
 document.getElementById('society').innerHTML = society + modifier;
 document.getElementById('danger').innerHTML = danger;
 document.getElementById('qualities').innerHTML = qualities_num;
 if (qualities) { document.getElementById('qualities_text').innerHTML = "<b>Qualities</b> " + qualities + "<br/>"; }
 else { document.getElementById('qualities_text').innerHTML = ""; };
 if (disadvantages) { document.getElementById('disadvantages_text').innerHTML = "; <b>Disadvantages</b> " + disadvantages; }
 else { document.getElementById('disadvantages_text').innerHTML = ""; };
 //Demographics Block
 document.getElementById("popsugg").innerHTML = "Suggested: " + pop_sugg;
 document.getElementById('rule').innerHTML = settleruler;
 document.getElementById('population').innerHTML = addComma(settlepopulation);
 if(settlebreak) { document.getElementById('breakdown').innerHTML = "(" + settlebreak + ")"; }
 else { document.getElementById('breakdown').innerHTML = ""; };
 //NPCs
 var npc_records = document.getElementById("npcrecords").value;
 var npc_text = "";
 var npc_desc = "";
 for (var i = 1; i < npc_records; i++) {
	title = document.getElementById("npc_title" + i).value;
	desc = document.getElementById("npc_desc" +i).value;
	if (desc == "") { 
	 var npc_text = npc_text + '<li><b>' + title + '</b><br /></li>';
	} else {
	 var npc_text = npc_text + '<li><b>' + title + '</b> (' + desc + ')<br /></li>';
	};
 };
 if (npc_text != "") {
  document.getElementById("NPCsdesc").innerHTML = npc_text;
 } else {
  document.getElementById("NPCsdesc").innerHTML = "<li>None</li>";
 };
 //Marketplace Block
 document.getElementById('base_val').innerHTML = addComma(base_val);
 document.getElementById('limit').innerHTML = addComma(limit);
 document.getElementById('spellcasting').innerHTML = spellcasting + getDaySuffix(spellcasting);
 document.getElementById('minor_items').innerHTML = minor_items;
 document.getElementById('medium_items').innerHTML = medium_items;
 document.getElementById('major_items').innerHTML = major_items;
 if (minor_items == "&#9733;") { document.getElementById('minor_items_all').innerHTML = minor_items_all }
 else { document.getElementById('minor_items_all').innerHTML = ""; };
 document.getElementById('settledesc').innerHTML = settledesc;
};

function updateStatBlok() { showInput(); };
function getDaySuffix(a) { return["th","st","nd","rd"][(a=~~(a<0?-a:a)%100)>10&&a<14||(a%=10)>3?0:a] };
function addComma(a) { return parseInt(a).toLocaleString(); };
function reduceItems(d) {
 switch (d) {
  case "&mdash;": return "&mdash;"; break;
	case "1d4": return "&mdash;"; break;
  case "1d6": return "1d4"; break;
  case "2d4": return "1d6"; break;
  case "3d4": return "2d4"; break;
  case "4d4": return "3d4"; break;
  case "&#9733;": return "4d4"; break;
 }
};

function checkboxlimit(limit){
	var checkgroup = document.forms.settlements.SQ_box;
	for (var i=0; i<checkgroup.length; i++){
		checkgroup[i].onclick=function(){
		var checkedcount=0
		for (var i=0; i<checkgroup.length; i++)
			checkedcount+=(checkgroup[i].checked)? 1 : 0
		if (checkedcount>limit){
			alert("You can only select a maximum of "+limit+" settlement qualities.")
			this.checked=false
			}
		}
	}
};

$(document).ready(function() {
 var max_fields      = 10; //maximum input boxes allowed
 var wrapper         = $(".input_fields_wrap"); //Fields wrapper
 var add_button      = $(".add_field_button"); //Add button ID
   
 var x = 1; //initlal text box count
 $(add_button).click(function(e) { //on add input button click
  e.preventDefault();
	if(x < max_fields) { //max input box allowed
	 if (x == 1) { $(wrapper).append('<label>Title / Name</label> <label class="labelcenter">Description</label> <br/>'); };
	 $(wrapper).append('<div><input type="text" name="npc_title'+ x +'" id="npc_title'+ x +'" onchange="updateStatBlok();"/><input type="text" name="npc_desc'+ x +'" id="npc_desc'+ x +'" onchange="updateStatBlok();"/></div>'); //add input box
	 x++; //text box increment
	 document.getElementById("npcrecords").value = x;
  }
 });
 //$(wrapper).on("click",".remove_field", function(e){ //user click on remove text
 // e.preventDefault(); $(this).parent('div').remove();
 //	x--;
 //	document.getElementById("npcrecords").value = x;
 // })
});

window.onload = function() { showInput(); };