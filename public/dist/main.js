!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=class{constructor(){this.url="http://192.168.1.25:3000"}createClient(){}deleteClient(e){return new Promise((t,n)=>{$.ajax({type:"POST",url:this.url+"/deleteClient",crossDomian:!0,dataType:"json",data:JSON.stringify(e)}).done(e=>{t(e)}).fail(e=>{n(e)})})}getAll(){return new Promise((e,t)=>{$.ajax({type:"POST",url:this.url+"/database",crossDomian:!0}).done(t=>{e(t)}).fail(e=>{t(e)})})}}},function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c);function l(){$(".button-delete").click(()=>{const e=new o.a;let t={};t.deleteName=$("#delete-name").val(),e.deleteClient(t).then(()=>{$(".form-select").load("../database",()=>{fullData.filter(({name:e}=arr,t)=>{$(".main-select").append($(`<option value = ${t}>${e}</option>`))})})}),$(".modal").removeClass("active"),$("#notificationDelete").fadeIn("slow"),setTimeout(()=>{location.reload()},3e3)})}function a(){$(".btn-check").click(()=>{let e={name:"",legalAdress:"",actualAdress:"",contractStatus:"",contact:[],connect:[],fiscal:[],barcodeScanner:[],moneyBox:[],switchboard:[],monoBlock:[],printer:[],libra:[]},t=[],n=[];e.name=$("#name")[0].textContent,e.legalAdress=$("#legal-adress")[0].textContent,e.actualAdress=$("#actual-adress")[0].textContent,e.contractStatus=$("#contract")[0].textContent,$("#table-body-contacts tr").each((e,n)=>{let c=e;t[e]=[],$(n).children("td").each((e,n)=>{t[c].push($(n).html())})}),e.contact=t,$("#table-body-connect tr").each((e,t)=>{let c=e;n[e]=[],$(t).children("td").each((e,t)=>{n[c].push($(t).html())})}),e.connect=n,$("#table-fiscal tr").each((t,n)=>{e.fiscal[t]={fiscalRegistr:{},fiscalDrive:{}},e.fiscal[t].fiscalRegistr.fiscalModel=$(n).children("td")[0].textContent,e.fiscal[t].fiscalRegistr.fiscalSN=$(n).children("td")[1].textContent,e.fiscal[t].fiscalDrive.fiscalTime=$(n).children("td")[2].textContent,e.fiscal[t].fiscalDrive.fiscalSN=$(n).children("td")[3].textContent,e.fiscal[t].fiscalDrive.fiscalDate=$(n).children("td")[4].textContent}),$("#table-switchboard tr").each((t,n)=>{e.switchboard[t]={},e.switchboard[t].login=$(n).children("td")[0].textContent,e.switchboard[t].password=$(n).children("td")[1].textContent,e.switchboard[t].model=$(n).children("td")[2].textContent,e.switchboard[t].location=$(n).children("td")[4].textContent,e.switchboard[t].notes=$(n).children("td")[4].textContent}),$("#table-monoBlock tr").each((t,n)=>{e.monoBlock[t]={},e.monoBlock[t].model=$(n).children("td")[0].textContent,e.monoBlock[t].monoBlockSN=$(n).children("td")[1].textContent,e.monoBlock[t].hardDrive=$(n).children("td")[2].textContent,e.monoBlock[t].state=$(n).children("td")[3].textContent,e.monoBlock[t].notes=$(n).children("td")[4].textContent}),$("#table-moneyBox tr").each((t,n)=>{e.moneyBox[t]={},e.moneyBox[t].moneyBoxModel=$(n).children("td")[0].textContent,e.moneyBox[t].moneyBoxNumber=$(n).children("td")[1].textContent}),$("#table-barcodeScanner tr").each((t,n)=>{e.barcodeScanner[t]={},e.barcodeScanner[t].scannerModel=$(n).children("td")[0].textContent,e.barcodeScanner[t].scannerNumber=$(n).children("td")[1].textContent}),$("#table-printer tr").each((t,n)=>{e.printer[t]={},e.printer[t].printerModel=$(n).children("td")[0].textContent,e.printer[t].printerNumber=$(n).children("td")[1].textContent,e.printer[t].printerConnectionType=$(n).children("td")[2].textContent}),$("#table-libra tr").each((t,n)=>{e.libra[t]={},e.libra[t].libraModel=$(n).children("td")[0].textContent,e.libra[t].libraNumber=$(n).children("td")[1].textContent,e.libra[t].libraConnectionType=$(n).children("td")[2].textContent}),$("#modalConfirmEdit").addClass("active"),$(".btn-save").on("click",()=>{$("#modalConfirmEdit").removeClass("active"),$.ajax({type:"POST",url:url+"/editClient",crossDomian:!0,dataType:"json",data:JSON.stringify(e)}).done(e=>{$("#notificationCreate").fadeIn("slow"),setTimeout(()=>{location.reload()},3e3)})})})}function i(){$(".main-table").on("click",e=>{let t=e.target;"TR"==t.parentNode.tagName&&($("tr:not(:first)").removeClass("selected"),$(t.parentNode).addClass("selected"))}),$(".main-table").on("dblclick",e=>{let t=e.target;const n=$(t).attr("readonly");if(void 0!==n&&"readonly"==n)return!1;!function(e){e.classList.add("edit-td");const t=document.createElement("input");t.style.width=e.clientWidth-8+"px",t.style.height=e.clientHeight-16+"px",t.style.border="none",t.style.padding="0",t.className="text-center form-input edit-input selected",t.value=e.textContent,e.innerHTML="",e.appendChild(t),t.focus(),$(t).blur(()=>{e.textContent=e.firstChild.value,e.classList.remove("edit-td")})}(t)}),$(".btn-main-delete").on("click",()=>{1==$(".main-table").find(".selected").closest("tbody").children("tr").length?$(".main-table").find(".selected").children("td").each((e,t)=>{t.textContent="..."}):(console.log("Нексколько"),$(".main-table").find(".selected").remove())}),$(".btn-main-add").on("click",()=>{const e=$(".main-table").find(".selected").clone();$(".main-table").find(".selected").after(e),$("tr:not(:first)").removeClass("selected")})}$("#table-body-modal-contacts").on("click",function(e){let t=$(e.target).parent()[0];e.target.className.match("icon-cross-modal-contact")&&$(t).parent()[0].remove()}),$("#table-body-modal-connects").on("click",function(e){let t=$(e.target).parent()[0];e.target.className.match("icon-cross-modal-connect")&&$(t).parent()[0].remove()}),$(".cool-input__input").on("input",function(){""==$(this).val()?$(this).removeClass("cool-input__input_filled"):$(this).addClass("cool-input__input_filled")}),$(document).on("click",".phone",()=>{jQuery(function(e){e(".phone").mask("+7 (999) 999-9999")})}),$(document).on("click",".fn-date",()=>{jQuery(function(e){e(".fn-date").mask("99.99.9999")})}),$(".fn-date").blur(()=>{const e=$(".fn-date").val();moment(e,"DD-MM-YYYY").isValid()?$(".fn-date").removeClass("error"):$(".fn-date").addClass("error")}),window.addEventListener("DOMContentLoaded",function(){const e="http://192.168.1.25:3000";(new o.a).getAll().then(t=>{let n,c;(function(e,t,n){let c=document.querySelector(".main-select"),o=document.querySelector(".panel-title"),l=document.querySelector("#legal-adress"),a=document.querySelector("#actual-adress"),i=document.querySelector("#contract"),r=document.querySelector("#table-contacts"),d=document.querySelector("#table-connect"),s=document.querySelector("#table-fiscal"),m=document.querySelector("#table-switchboard"),u=document.querySelector("#table-monoBlock"),p=document.querySelector("#table-moneyBox"),h=document.querySelector("#table-printer"),f=document.querySelector("#table-barcodeScanner"),b=document.querySelector("#table-libra");function v(t,n){$(`#${$(n).attr("id")} tr`).remove();for(let c=0;c<e[t].length;c++){let o=document.createElement("tr");e[t][c].forEach(e=>{let t=document.createElement("td");t.innerText=e,o.append(t)}),n.appendChild(o)}}function y(t,n){let c;$(`#${$(n).attr("id")} tr`).remove(),moment.locale("ru"),e[t].forEach(e=>{let t=document.createElement("tr");!function e(n){for(let o in n){let l=n[o];if("object"==typeof l)e(l);else if("fiscalTime"==o){let e=document.createElement("td");c=parseInt(l),e.className="fTime",e.innerText=l,t.append(e)}else if("fiscalDate"==o){let e=l,n=moment(e,"DD.MM.YYYY").add(c,"month").format("DD-MM-YYYY"),o=moment(n,"DD-MM-YYYY"),a=document.createElement("td"),i=document.createElement("td"),r=document.createElement("td");i.setAttribute("readonly",""),r.setAttribute("readonly",""),a.innerText=l,i.innerText=n,r.innerText=o.fromNow(),t.append(a,i,r)}else{let e=document.createElement("td");e.innerText=l,t.append(e)}}}(e),n.append(t)})}console.log(o.textContent),t.filter((e,t)=>{o.textContent===e.name?$(".main-select").append($(`<option value = ${t} selected >${e.name}</option>`)):$(".main-select").append($(`<option value = ${t}>${e.name}</option>`))}),$(".main-select").on("change",function(){n=c.value,e=t[n];let{name:$,legalAdress:x,actualAdress:C,contractStatus:k}=t[n];o.textContent=$,l.textContent=x,a.textContent=C,i.textContent=k,v("contact",r),v("connect",d),y("fiscal",s),y("switchboard",m),y("monoBlock",u),y("moneyBox",p),y("printer",h),y("barcodeScanner",f),y("libra",b)})})(n=(c=JSON.parse(JSON.stringify(t)))[1],c,1),function(){$(".btn-plus").click(()=>{$("#modal-create").addClass("active")}),$(".btn-delete").click(()=>{$("#modal-delete").addClass("active")}),$(".btn-close").click(e=>{$("#modal-create").removeClass("active"),$("#modal-delete").removeClass("active"),$("#modalConfirmEdit").removeClass("active")}),$(".btn-clear").click(()=>{$(".modal").removeClass("active"),t=0});let e=$(".modal-create").length,t=0;$(".btn-next").click(()=>{t<e-1&&t++;let n=$(".modal-create")[t],c=$(".modal-create")[t-1];$(c).removeClass("active"),$(n).addClass("active")}),$(".btn-back").click(()=>{let e=$(".modal-create")[t];t--;let n=$(".modal-create")[t];$(e).removeClass("active"),$(n).addClass("active")})}(),function(e){$(".btn-create").click(()=>{let t={name:"",legalAdress:"",actualAdress:"",contractStatus:"",contact:[],connect:[],fiscal:[],barcodeScanner:[],moneyBox:[],switchboard:[],monoBlock:[],printer:[],libra:[]},n=[],c=[];t.name=$("#createModal-name").val(),t.legalAdress=$("#createModal-legalAdress").val(),t.actualAdress=$("#createModal-actualAdress").val(),t.contractStatus=$("#createModal-contract-modal").val(),$(".table-body-modal-contacts-row").each((e,t)=>{let c=e;n[e]=[],$(t).children("td").children("input").each((e,t)=>{n[c].push(t.value)})}),t.contact=n,$(".table-body-modal-connects-row").each((e,t)=>{let n=e;c[e]=[],$(t).children("td").children(".readble").each((e,t)=>{c[n].push(t.value)})}),$(".column-fn").each((e,n)=>{t.fiscal[e]={fiscalRegistr:{},fiscalDrive:{}},t.fiscal[e].fiscalRegistr.fiscalModel=$(n).children(".column")[0].children[1].value,t.fiscal[e].fiscalRegistr.fiscalSN=$(n).children(".column")[0].children[2].children[0].value,t.fiscal[e].fiscalDrive.fiscalTime=$(n).children(".column")[1].children[1].children[0].children[0].children[1].value,t.fiscal[e].fiscalDrive.fiscalSN=$(n).children(".column")[1].children[1].children[1].children[0].children[1].value,t.fiscal[e].fiscalDrive.fiscalDate=$(n).children(".column")[1].children[2].children[0].value}),$(".column-barcodeScanner").each((e,n)=>{t.barcodeScanner[e]={},t.barcodeScanner[e].scannerModel=$(n).children(".column")[0].children[1].value,t.barcodeScanner[e].scannerNumber=$(n).children(".column")[1].children[1].value}),$(".column-moneyBox").each((e,n)=>{t.moneyBox[e]={},t.moneyBox[e].moneyBoxModel=$(n).children(".column")[0].children[1].value,t.moneyBox[e].moneyBoxNumber=$(n).children(".column")[1].children[1].value}),$(".column-switchboard").each((e,n)=>{t.switchboard[e]={},t.switchboard[e].login=$(n).children(".column")[0].children[1].children[1].value,t.switchboard[e].password=$(n).children(".column")[0].children[2].children[1].value,t.switchboard[e].model=$(n).children(".column")[1].children[1].children[1].value,t.switchboard[e].location=$(n).children(".column")[1].children[2].children[1].value,t.switchboard[e].notes=$(n).children(".column")[2].children[0].value}),$(".column-mnbk").each((e,n)=>{t.monoBlock[e]={},t.monoBlock[e].model=$(n).children(".column")[0].children[1].children[0].value,t.monoBlock[e].monoBlockSN=$(n).children(".column")[0].children[2].children[1].value,t.monoBlock[e].hardDrive=$(n).children(".column")[0].children[3].children[0].value,t.monoBlock[e].state=$(n).children(".column")[1].children[1].value,t.monoBlock[e].notes=$(n).children(".column")[1].children[2].value}),$(".column-prnt").each((e,n)=>{t.printer[e]={},t.printer[e].printerModel=$(n).children(".column")[0].children[1].value,t.printer[e].printerNumber=$(n).children(".column")[1].children[1].children[0].children[0].value,t.printer[e].printerConnectionType=$(n).children(".column")[1].children[1].children[1].children[0].value}),$(".column-libra").each((e,n)=>{t.libra[e]={},t.libra[e].libraModel=$(n).children(".column")[0].children[1].value,t.libra[e].libraNumber=$(n).children(".column")[1].children[1].children[0].children[0].value,t.libra[e].libraConnectionType=$(n).children(".column")[1].children[1].children[1].children[0].value}),t.connect=c,$(".fn-date").hasClass("error")||""==$("#createModal-name").val()?(console.log("object"),$("#modal-attempt").fadeIn("slow"),setTimeout(()=>{$("#modal-attempt").fadeOut("slow")},6e3)):$.ajax({type:"POST",url:e+"/createClient",crossDomian:!0,dataType:"json",data:JSON.stringify(t)}).done(e=>{$(".modal").removeClass("active"),$("#notificationCreate").fadeIn("slow"),setTimeout(()=>{location.reload()},3e3)})})}(e),l(),a(),$(".panel-body-info").not(":first").hide(),$(".tab-item").click(function(){$(".tab-item").removeClass("active").eq($(this).index()).addClass("active"),$(".panel-body-info").hide().eq($(this).index()).fadeIn()}).eq(0).addClass("active"),$(".panel-info-createModal-equiequpmentList").not(":first").hide(),$(".tab-item-createModal-equiequpmentList").click(function(){$(".tab-item-createModal-equiequpmentList").removeClass("active").eq($(this).index()).addClass("active"),$(".panel-info-createModal-equiequpmentList").hide().eq($(this).index()).fadeIn()}).eq(0).addClass("active"),$(".panel-info-editModal-equiequpmentList").not(":first").hide(),$(".tab-item-editModal-equiequpmentList").click(function(){$(".tab-item-editModal-equiequpmentList").removeClass("active").eq($(this).index()).addClass("active"),$(".panel-info-editModal-equiequpmentList").hide().eq($(this).index()).fadeIn()}).eq(0).addClass("active"),$(".icon-add-span-contact").click(()=>{let e=document.querySelector("#table-body-modal-contacts"),t=document.createElement("tr");t.className="table-body-modal-contacts-row",t.innerHTML='<td><input class="no-border text-center form-input" type="text" placeholder="Ф.И.О"></td>\n                          <td><input class="no-border text-center form-input" type="text" placeholder="Должность"></td>\n                          <td><input class="no-border text-center form-input phone" type="text" placeholder="+7 (___) ___-____"></td>\n                          <td><i class="icon icon-cross icon-cross-modal-contact"></i></td>',e.append(t)}),$(".icon-add-span-connect").click(()=>{let e=document.querySelector("#table-body-modal-connects"),t=document.createElement("tr");t.className="table-body-modal-connects-row",t.innerHTML='<td>\n                            <select class="form-select third-select readble" id="connect-modal">\n                            <option  value="AmmyAdmin">AmmyAdmin</option>\n                            <option value="AnyDesk">AnyDesk</option>\n                            <option value="TeamViewer">TeamViewer</option>\n                            </select>\n                          </td>\n                          <td><input class="no-border text-center form-input readble" type="text" id="input-example-1" placeholder="ID"></td>\n                          <td><input class="no-border text-center form-input readble" type="text" id="input-example-1" placeholder="Наименование"></td>\n                          <td><i class="icon icon-cross icon-cross-modal-connect"></i></td>',e.append(t)}),$(".icon-edit-span-contact").click(()=>{let e=document.querySelector("#table-body-edit-modal-contacts"),t=document.createElement("tr");t.className="table-body-modal-contacts-row",t.innerHTML='<td><input class="no-border text-center form-input" type="text" placeholder="Ф.И.О"></td>\n                          <td><input class="no-border text-center form-input" type="text" placeholder="Должность"></td>\n                          <td><input class="no-border text-center form-input phone" type="text" placeholder="+7 (___) ___-____"></td>\n                          <td><i class="icon icon-cross icon-cross-edit-modal"></i></td>',e.append(t)}),$(".icon-edit-span-connect").click(()=>{let e=document.querySelector("#table-body-edit-modal-connects"),t=document.createElement("tr");t.className="table-body-modal-connects-row",t.innerHTML='<td>\n                            <select class="form-select third-select readble" id="connect-modal">\n                            <option  value="AmmyAdmin">AmmyAdmin</option>\n                            <option value="AnyDesk">AnyDesk</option>\n                            <option value="TeamViewer">TeamViewer</option>\n                            </select>\n                          </td>\n                          <td><input class="no-border text-center form-input readble" type="text" id="input-example-1" placeholder="ID"></td>\n                          <td><input class="no-border text-center form-input readble" type="text" id="input-example-1" placeholder="Наименование"></td>\n                          <td><i class="icon icon-cross icon-cross-edit-modal"></i></td>',e.append(t)}),$(".icon-edit-span-fn").click(()=>{const e=$(".column-fn:first").clone();$(".fieldset-createModal-fn").append(e)}),$(".icon-edit-span-sh").click(()=>{const e=$(".column-barcodeScanner:first").clone();$(".fieldset-createModal-sh").append(e)}),$(".icon-edit-span-moneyBox").click(()=>{const e=$(".column-moneyBox:first").clone();$(".fieldset-createModal-moneyBox").append(e)}),$(".icon-edit-span-com").click(()=>{const e=$(".column-switchboard:first").clone();$(".fieldset-createModal-com").append(e)}),$(".icon-edit-span-mnbk").click(()=>{const e=$(".column-mnbk:first").clone();$(".fieldset-createModal-mnbk").append(e)}),$(".icon-edit-span-prnt").click(()=>{const e=$(".column-prnt:first").clone();$(".fieldset-createModal-prnt").append(e)}),$(".icon-edit-span-vs").click(()=>{const e=$(".column-libra:first").clone();$(".fieldset-createModal-vs").append(e)}),$("#wrapper-createModal-equiequpmentList").on("click",function(e){let t=$(e.target).parent()[0];e.target.className.match("icon-createModal-equipmentList")&&$(t).remove()}),$(".form-legend-fiscal").click(()=>{$(".content-fiscal").slideToggle()}),$(".form-legend-moneybox").click(()=>{$(".content-moneybox").slideToggle()}),$(".form-legend-monoblock").click(()=>{$(".content-monoblock").slideToggle()}),$(".form-legend-com").click(()=>{$(".content-com").slideToggle()}),$(".form-legend-barcodeScanner").click(()=>{$(".content-barcodeScanner").slideToggle()}),$(".form-legend-print").click(()=>{$(".content-print").slideToggle()}),$(".form-legend-libra").click(()=>{$(".content-libra").slideToggle()}),i()})})}]);