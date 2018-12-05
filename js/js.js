  function openDept(evt, elmnt, deptName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
   }
   // Show the specific tab content
    document.getElementById(deptName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
function Open()
	{document.getElementByClassName("tablinks").click();}

function N(id, places) 
  { return +(Math.round(id + "e+" + places)  + "e-" + places);
  }

function calclp()
{
  var cholesterol = document.getElementById("cholesterol").value;
  var hdl = document.getElementById("hdl").value;
  var ldl = document.getElementById("ldl").value;
  var triglycerides = document.getElementById("trig").value;
  var vldl = (triglycerides/5);
  document.getElementById("vldl").innerHTML = vldl;
  var ldlc = cholesterol-hdl-vldl;
  ldlc = N(ldlc, 2);
  document.getElementById("ldlc").innerHTML = ldlc;
  var cholhdl = cholesterol/hdl; 
  cholhdl = N(cholhdl, 2);
  document.getElementById("cholhdl").innerHTML = cholhdl;
  //var hdlldl = "";
  
  //var ldlhdl = "";
  
  if (ldl == "")
  {hdlldl = hdl/ldlc;}
  else 
  {hdlldl = hdl/ldl;}
     
  if (ldl == "")
  {ldlhdl = ldlc/hdl;}
  else 
  {ldlhdl = ldl/hdl;}
  
  hdlldl = N(hdlldl, 2);
  document.getElementById("hdlldl").innerHTML = hdlldl;
  ldlhdl = N(ldlhdl, 2);
  document.getElementById("ldlhdl").innerHTML = ldlhdl;

  //if (ldl !== "")
  //  {ldlc = 0;}
}
  
function resetcalclp()
{
  var cholesterol = document.getElementById("cholesterol").value;
  var hdl = document.getElementById("hdl").value;
  var ldl = document.getElementById("ldl").value;
  var triglycerides = document.getElementById("trig").value;
  var vldl = document.getElementById("vldl").innerHTML;
  var ldlc = document.getElementById("ldlc").innerHTML;
  var cholhdl = document.getElementById("cholhdl").innerHTML;
  var hdlldl = document.getElementById("hdlldl").innerHTML;
  var ldlhdl = document.getElementById("ldlhdl").innerHTML;
  var i = 0;
  
  if (cholesterol.length>i)
    {cholesterol = "";}
  if (hdl.length>i)
    {hdl = "";}
  if (ldl.length>i)
    {ldl = "";}
  if (triglycerides.length>i)
    {triglycerides = "";}
  if (vldl.length>i)
    {vldl = "";}
  if (ldlc.length>i)
    {ldlc = "";}
  if (cholhdl.length>i)
    {cholhdl = "";}
  if (hdlldl.length>i)
    {hdlldl = "";}
  if (ldlhdl.length>i)
    {ldlhdl = "";}
  document.getElementById("cholesterol").value = cholesterol;
  document.getElementById("hdl").value = hdl;
  document.getElementById("ldl").value = ldl;
  document.getElementById("trig").value = triglycerides;
  document.getElementById("vldl").innerHTML = vldl;
  document.getElementById("ldlc").innerHTML = ldlc;
  document.getElementById("cholhdl").innerHTML = cholhdl;
  document.getElementById("hdlldl").innerHTML = hdlldl;
  document.getElementById("ldlhdl").innerHTML = ldlhdl;
  
}


function calcuac()
{
  var uvol = document.getElementById("uvol").value;
  var ucrea = document.getElementById("ucrea").value;
  var ualb = document.getElementById("ualb").value;
  var acr = (ualb / (ucrea*10))*1000;
  acr = N(acr, 2);
  document.getElementById("acr").innerHTML = acr;
  var u24alb = (ualb/1000) * uvol;
  u24alb = N(u24alb, 2);
  document.getElementById("24ualb").innerHTML = u24alb;
  var u24crea = (ucrea / 100) * uvol;
  u24crea = N(u24crea, 2);
  document.getElementById("24ucrea").innerHTML = u24crea;
    
}

function calcuca()
{
  var uvolca = document.getElementById("uvol").value;
  var ucal = document.getElementById("ucal").value;
  var u24cal = (ucal / 100) * uvolca;
  u24cal = N(u24cal, 2);
  document.getElementById("24ucal").innerHTML = u24cal;
}

function calcuphos()
{
  var uvol = document.getElementById("uvol").value;
  var uphos = document.getElementById("uphos").value;
  var u24phos = (uphos / 100) * uvol;
  u24phos = N(u24phos, 2);
  document.getElementById("24uphos").innerHTML = u24phos;
}

function calcuurea()
{
  var uvol = document.getElementById("uvol").value;
  var uurea = document.getElementById("uurea").value;
  var u24urea = (uurea / 100) * uvol;
  u24urea = N(u24urea, 2);
  document.getElementById("24uurea").innerHTML = u24urea;
}

function calcumag()
{
  var uvol = document.getElementById("uvol").value;
  var umag = document.getElementById("umag").value;
  var u24mag = (umag / 100) * uvol;
  u24mag = N(u24mag, 2);
  document.getElementById("24umag").innerHTML = u24mag;
}

function calcuuric()
{
  var uvol = document.getElementById("uvol").value;
  var uuric = document.getElementById("uuric").value;
  var u24uric = (uuric / 100) * uvol;
  u24uric = N(u24uric, 2);
  document.getElementById("24uuric").innerHTML = u24uric;
}

function calcusod()
{
  var uvol = document.getElementById("uvol").value;
  var usod = document.getElementById("usod").value;
  var u24sod = (usod / 100) * uvol;
  u24sod = N(u24sod, 2);
  document.getElementById("24usod").innerHTML = u24sod;
}

function calcupot()
{
  var uvol = document.getElementById("uvol").value;
  var upot = document.getElementById("upot").value;
  var u24pot = (upot / 100) * uvol;
  u24pot = N(u24pot, 2);
  document.getElementById("24upot").innerHTML = u24pot;
}

function calcuchlo()
{
  var uvol = document.getElementById("uvol").value;
  var uchlo = document.getElementById("uchlo").value;
  var u24chlo = (uchlo / 100) * uvol;
  u24chlo = N(u24chlo, 2);
  document.getElementById("24uchlo").innerHTML = u24chlo;
}

function calcutp()
{
  var uvol = document.getElementById("uvol").value;
  var utp = document.getElementById("utp").value;
  var u24tp = (utp / 100) * uvol;
  u24tp = N(u24tp, 2);
  document.getElementById("24utp").innerHTML = u24tp;
}

function resetuchem()
{
  var uvol = document.getElementById("uvol").value;
  var ucrea = document.getElementById("ucrea").value;
  var ualb = document.getElementById("ualb").value;
  var ucal = document.getElementById("ucal").value;
  var uphos = document.getElementById("uphos").value;
  var umag = document.getElementById("umag").value;
  var uuric = document.getElementById("uuric").value;
  var usod = document.getElementById("usod").value;
  var upot = document.getElementById("upot").value;
  var uchlo = document.getElementById("uchlo").value;
  var utp = document.getElementById("utp").value;
  var uurea = document.getElementById("uurea").value;
  var acr = document.getElementById("acr").innerHTML;
  var u24alb = document.getElementById("24ualb").innerHTML;
  var u24crea = document.getElementById("24ucrea").innerHTML;
  var u24cal = document.getElementById("24ucal").innerHTML;
  var u24phos = document.getElementById("24uphos").innerHTML;
  var u24mag = document.getElementById("24umag").innerHTML;
  var u24uric = document.getElementById("24uuric").innerHTML;
  var u24sod = document.getElementById("24usod").innerHTML;
  var u24pot = document.getElementById("24upot").innerHTML;
  var u24chlo = document.getElementById("24uchlo").innerHTML;
  var u24tp = document.getElementById("24utp").innerHTML;
  var u24urea = document.getElementById("24uurea").innerHTML;
  var i = 0;
  
  if (uvol.length>i)
    {uvol= "";}
  if (ucrea.length>i)
    {ucrea = "";}
  if (ualb.length>i)
    {ualb = "";}
  if (ucal.length>i)
    {ucal = "";}
  if (uphos.length>i)
    {uphos = "";}
  if (umag.length>i)
    {umag = "";}
  if (uuric.length>i)
    {uuric = "";}
  if (usod.length>i)
    {usod = "";}
  if (upot.length>i)
    {upot = "";}
  if (uchlo.length>i)
    {uchlo = "";}
  if (utp.length>i)
    {utp = "";}
  if (uurea.length>i)
    {uurea = "";}
  if (acr.length>i)
    {acr = "";}
  if (u24alb.length>i)
    {u24alb = "";}
  if (u24crea.length>i)
    {u24crea = "";}
  if (u24cal.length>i)
    {u24cal = "";}
  if (u24phos.length>i)
    {u24phos = "";}
  if (u24mag.length>i)
    {u24mag = "";}
  if (u24uric.length>i)
    {u24uric = "";}
  if (u24sod.length>i)
    {u24sod = "";}
  if (u24pot.length>i)
    {u24pot = "";}
  if (u24chlo.length>i)
    {u24chlo = "";}
  if (u24tp.length>i)
    {u24tp = "";}
  if (u24urea.length>i)
    {u24urea = "";}
  document.getElementById("uvol").value = uvol;
  document.getElementById("ucrea").value = ucrea;
  document.getElementById("ualb").value = ualb;
  document.getElementById("ucal").value = ucal;
  document.getElementById("uphos").value = uphos;
  document.getElementById("umag").value = umag;
  document.getElementById("uuric").value = uuric;
  document.getElementById("usod").value = usod;
  document.getElementById("upot").value = upot;
  document.getElementById("uchlo").value = uchlo;
  document.getElementById("utp").value = utp;
  document.getElementById("uurea").value = uurea;
  document.getElementById("acr").innerHTML = acr;
  document.getElementById("24ualb").innerHTML = u24alb;
  document.getElementById("24ucrea").innerHTML = u24crea;
  document.getElementById("24ucal").innerHTML = u24cal;
  document.getElementById("24uphos").innerHTML = u24phos;
  document.getElementById("24umag").innerHTML = u24mag;
  document.getElementById("24uuric").innerHTML = u24uric;
  document.getElementById("24usod").innerHTML = u24sod;
  document.getElementById("24upot").innerHTML = u24pot;
  document.getElementById("24uchlo").innerHTML = u24chlo;
  document.getElementById("24utp").innerHTML = u24tp;
  document.getElementById("24uurea").innerHTML = u24urea;
}


function calcbsa()
{
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var x = ((height * 30.48) * weight) / 3600;
  var bsa = Math.sqrt(x);
  bsa = N(bsa, 2);
    
  if (height == "")
    {bsa = "";}
  
  if (weight == "")
    {bsa = "";}
  document.getElementById("bsa").innerHTML = bsa;
}

function calccreaclear()
{
  var uvol2 = document.getElementById("uvol2").value;
  var ucrea2 = document.getElementById("ucrea2").value;
  var screa2 = document.getElementById("screa2").value;
  var coltime = document.getElementById("coltime").value;
  var bsa = document.getElementById("bsa").innerHTML;
  var creaclear = ((ucrea2 * uvol2) / (screa2  * (coltime * 60)));
  var corcreaclear = (((ucrea2 * uvol2) / (screa2  * (coltime * 60))) * (1.73/bsa));
 
  
  creaclear = N(creaclear, 1);
  corcreaclear = N(corcreaclear, 1);
  document.getElementById("creaclear").innerHTML = creaclear;
  if (bsa == "")
    {corcreaclear = "";}
  document.getElementById("corcreaclear").innerHTML = corcreaclear;
  
}

function resetcreaclear()
{
  var uvol2 = document.getElementById("uvol2").value;
  var ucrea2 = document.getElementById("ucrea2").value;
  var screa2 = document.getElementById("screa2").value;
  var coltime = document.getElementById("coltime").value;
  var bsa = document.getElementById("bsa").innerHTML;
  var creaclear = document.getElementById("creaclear").innerHTML;
  var corcreaclear = document.getElementById("corcreaclear").innerHTML;
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var i = 0;
  
  if (uvol2.length>i)
    {uvol2 = "";}
  if (ucrea2.length>i)
    {ucrea2 = "";}
  if (screa2.length>i)
    {screa2 = "";}
  if (coltime.length>i)
    {coltime = "";}
  if (bsa.length>i)
    {bsa = "";}
  if (creaclear.length>i)
    {creaclear = "";}
  if (corcreaclear.length>i)
    {corcreaclear = "";}
  if (height.length>i)
    {height = "";}
  if (weight.length>i)
    {weight = "";}
  document.getElementById("uvol2").value = uvol2;
  document.getElementById("ucrea2").value = ucrea2;
  document.getElementById("screa2").value = screa2;
  document.getElementById("coltime").value = coltime;
  document.getElementById("bsa").innerHTML = bsa;
  document.getElementById("creaclear").innerHTML = creaclear;
  document.getElementById("corcreaclear").innerHTML = corcreaclear;
  document.getElementById("height").value = height;
  document.getElementById("weight").value = weight;
  
}

function calcegfr()
{
  var screa3 = document.getElementById("screa3").value;
  var age = document.getElementById("age").value;
  var genm = document.getElementById("genm").checked;
  var genf = document.getElementById("genf").checked;
  var raceb = document.getElementById("raceb").checked;
  var raceo = document.getElementById("raceo").checked;
  var agex = Math.pow(0.993, age);
  
  
  if (document.getElementById("genm").checked)
    {k = 0.9;}
  if (document.getElementById("genm").checked)
    {a = -0.411;}
  if (document.getElementById("genf").checked)
    {k = 0.7;}
  if (document.getElementById("genf").checked)
    {a = -0.329;}
  
  if (document.getElementById("raceb").checked)
    {r = 1.159;}
  if (document.getElementById("raceo").checked)
    {r = 1;}
  
  if (document.getElementById("genm").checked)
    {g = 1;}
  if (document.getElementById("genf").checked)
    {g = 1.018;}
  
  if (document.getElementById("genm").checked)
    {x = 0.91;}
  if (document.getElementById("genf").checked)
    {x = 0.71;}
  
  var e = screa3 / k;
  var f = Math.pow(e, a);
  var h = Math.pow(e, -1.209);
  
  min = 141 * f * agex * g * r;
  max = 141 * h * agex * g * r;
  
  //for (i=0; i < genm.length; i++) {
       // if (genm[i].checked) {
            //{screax = screa3 / genm;}
       // }
     // }
  
 // for (i=0; i < genf.length; i++) {
     //   if (genf[i].checked) {
           // {screax = screa3 / genf;}
       // }
     // }
  if (screa3 < x )
   min = N(min, 0);
  {document.getElementById("egfr").innerHTML = min;}
  if (screa3 > x )
    max = N(max, 0);
  {document.getElementById("egfr").innerHTML = max;}
}
  
function resetegfr()  
{
  var screa3 = document.getElementById("screa3").value;
  var age = document.getElementById("age").value;
  var egfr = document.getElementById("egfr").innerHTML;
  var i = 0;
  
  if (screa3.length>i)
    {screa3 = "";}
  if (age.length>i)
    {age = "";}
  if (egfr.length>i)
    {egfr = "";}
  
  document.getElementById("screa3").value = screa3;
  document.getElementById("age").value = age;
  document.getElementById("egfr").innerHTML = egfr;
  
}

  
function calcindices()
{
  var hgb = document.getElementById("hgb").value;
  var hct = document.getElementById("hct").value;
  var rbc = document.getElementById("rbc").value;
  
  mcv = (hct * 10) / rbc;
  mch = (hgb * 10) / rbc;
  mchc = (hgb * 100) / hct;
  
  mcv = N(mcv, 1);
  mch = N(mch, 1);
  mchc = N(mchc, 1);
  document.getElementById("mcv").innerHTML = mcv;
  document.getElementById("mch").innerHTML = mch;
  document.getElementById("mchc").innerHTML = mchc;
  
}
  
function resetindices()
{
  var hgb = document.getElementById("hgb").value;
  var hct = document.getElementById("hct").value;
  var rbc = document.getElementById("rbc").value;
  var mcv = document.getElementById("mcv").innerHTML;
  var mch = document.getElementById("mch").innerHTML;
  var mchc = document.getElementById("mchc").innerHTML;
  var i = 0;
  
  if (hgb.length>i)
    {hgb = "";}
  if (hct.length>i)
    {hct = "";}
  if (rbc.length>i)
    {rbc = "";}
  if (mcv.length>i)
    {mcv = "";}
  if (mch.length>i)
    {mch = "";}
  if (mchc.length>i)
    {mchc = "";}
  
  document.getElementById("hgb").value = hgb;
  document.getElementById("hct").value = hct;
  document.getElementById("rbc").value = rbc;
  document.getElementById("mcv").innerHTML = mcv;
  document.getElementById("mch").innerHTML = mch;
  document.getElementById("mchc").innerHTML = mchc;
  
}
  
function calcwbce()
{
  var wbca = document.getElementById("wbca").value;
  
  wbce = wbca * 0.2;
  wbce = N(wbce, 1);
  document.getElementById("wbce").innerHTML = wbce;
}  

function resetwbce()
{
  var wbca = document.getElementById("wbca").value;
  var wbce = document.getElementById("wbce").innerHTML;
  var i = 0;
  
  if (wbca.length>i)
    {wbca = "";}
  if (wbce.length>i)
    {wbce = "";}
  document.getElementById("wbca").value = wbca;
  document.getElementById("wbce").innerHTML = wbce;
  
  
}

function calcplte()
{
  var plta = document.getElementById("plta").value;
  
  plte = plta * 15;
  plte = N(plte, 0);
  document.getElementById("plte").innerHTML = plte;
} 
  
function resetplte()
{
  var plta = document.getElementById("plta").value;
  var plte = document.getElementById("plte").innerHTML;
  var i = 0;
  
  if (plta.length>i)
    {plta = "";}
  if (plte.length>i)
    {plte = "";}
  document.getElementById("plta").value = plta;
  document.getElementById("plte").innerHTML = plte;
  
}
  
function calcrtc()
{
  var retica = document.getElementById("retica").value;
  var rtcrbc = document.getElementById("rtcrbc").value;
  
  
  rrc = retica / 10;
  arc = (retica * rtcrbc) / 1;
  
  
  
  rrc = N(rrc, 1);
  arc = N(arc, 0);
  document.getElementById("rrc").innerHTML = rrc;
  if (rtcrbc == "")
    {arc = "";}
  document.getElementById("arc").innerHTML = arc;
  
  if (rbc == "")
    {arc = "";}
}

function resetrtc()
{
  var retica = document.getElementById("retica").value;
  var rtcrbc = document.getElementById("rtcrbc").value;
  var rrc = document.getElementById("rrc").innerHTML;
  var arc = document.getElementById("arc").innerHTML;
  var i = 0;
  
  if (retica.length>i)
    {retica = "";}
  if (rtcrbc.length>i)
    {rtcrbc = "";}
  if (rrc.length>i)
    {rrc = "";}
  if (arc.length>i)
    {arc = "";}
  
  document.getElementById("retica").value = retica;
  document.getElementById("rtcrbc").value = rtcrbc;
  document.getElementById("rrc").innerHTML = rrc;
  document.getElementById("arc").innerHTML = arc;
  
}
  
function calccorwbc()
{
  var nrbc = document.getElementById("nrbca").value;
  var wbcn = document.getElementById("wbcn").value;
  
  corwbc = ((100 * wbcn) / (+nrbc + +100));
  corwbc = N(corwbc, 2);
  
  if (nrbc == "")
    {corwbc = "";}
  if (wbcn == "")
    {corwbc = "";}
  
  document.getElementById("corwbc").innerHTML = corwbc;
}
  
function resetcorwbc()
{
  var nrbca = document.getElementById("nrbca").value;
  var wbcn = document.getElementById("wbcn").value;
  var corwbc = document.getElementById("corwbc").innerHTML;
  var i = 0;
  
  if (nrbca.length>i)
    {nrbca = "";}
  if (wbcn.length>i)
    {wbcn = "";}
  if (corwbc.length>i)
    {corwbc = "";}
  document.getElementById("nrbca").value = nrbca;
  document.getElementById("wbcn").value = wbcn;
  document.getElementById("corwbc").innerHTML = corwbc;
  
}

function calcbun()
{
  var surea = document.getElementById("surea").value;
  
  bun = surea * 0.467;
  document.getElementById("bun").innerHTML = bun
}
  
function resetbun()
{
  var surea = document.getElementById("surea").value;
  var bun = document.getElementById("bun").innerHTML;
  var i = 0;
  
  if (surea.length>i)
    {surea = "";}
  if (bun.length>i)
    {bun = "";}
  document.getElementById("surea").value = surea;
  document.getElementById("bun").innerHTML = bun;
}

function calctibc()
{
  var siron = document.getElementById("siron").value;
  var suibc = document.getElementById("suibc").value;
  
  tibc = (+siron + +suibc);
  if (siron == "")
    {tibc = "";}
  if (suibc == "")
    {tibc = "";}
  document.getElementById("tibc").innerHTML = tibc;
}

function resettibc()
{
  var siron = document.getElementById("siron").value;
  var suibc = document.getElementById("suibc").value;
  var tibc = document.getElementById("tibc").innerHTML;
  var i =0;
  
  if (siron.length>i)
    {siron = "";}
  if (suibc.length>i)
    {suibc = "";}
  if (tibc.length>i)
    {tibc = "";}
  document.getElementById("siron").value = siron;
  document.getElementById("suibc").value = suibc;
  document.getElementById("tibc").innerHTML = tibc;
}


