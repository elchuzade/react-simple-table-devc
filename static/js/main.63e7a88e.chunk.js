(this["webpackJsonpreact-simple-table-devc-example"]=this["webpackJsonpreact-simple-table-devc-example"]||[]).push([[0],[,,,function(e,t,a){e.exports=a(12)},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(4);var n=a(0),s=a.n(n),r=a(1),i=a.n(r),o=a(2);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c="_FnYjQ",m="_2Gdc2",u="_2EcOu",d="_2Od62",h="_2Hi56",b="_1syUA",p="_2PVTg",y="_2IiZ5",g="_bQANU",f="_bUgVd",v="_jxxyz",S="_BdwKu",w=function(e){var t=e.id,a=e.className,n=e.style,r=e.title,i=e.onSortAsc,o=e.onSortDes;return s.a.createElement("th",{id:t,className:y+" "+a,style:n},s.a.createElement("span",{className:g},r),s.a.createElement("span",{className:f},i&&s.a.createElement("button",{className:v,onClick:i},"<"),o&&s.a.createElement("button",{className:v,onClick:o},">")))},N=function(e){var t=e.id,a=e.style,s=e.className,r=e.title,i=e.columns,o=e.rows,y=e.search,g=e.striped,f=e.bordered,v=Object(n.useState)(o),N=v[0],E=v[1],k=function(e,t,a){E([].concat(t.sort((function(t,n){return e.value(t)>e.value(n)?a:-a}))))};return Object(n.createElement)("div",{id:t,className:c+" "+(s||""),style:a},Object(n.createElement)("div",{className:m},Object(n.createElement)("div",{className:u},r&&Object(n.createElement)("p",{className:h+" "+(r.className||""),style:r.style},r.value)),Object(n.createElement)("div",{className:d},y&&Object(n.createElement)("input",{id:y.id,className:b+" "+(y.className||""),style:y.style,type:y.type||"text",placeholder:y.placeholder||"search",name:y.name,value:y.value,onChange:function(e){y.searchFields&&function(e,t,a){var n=[];e.forEach((function(e){var s=i.find((function(t){return t.columnKey===e})),r=t.filter((function(e){return s&&s.value(e).toLowerCase().includes(a.toLowerCase())}));n=n.concat(r.filter((function(e){return n.indexOf(e)<0}))),E(n)}))}(y.searchFields,o,e.target.value),y.onChangeSearch&&y.onChangeSearch(e)}}))),Object(n.createElement)("div",{className:p},Object(n.createElement)("table",null,Object(n.createElement)("thead",null,Object(n.createElement)("tr",null,i.map((function(e){return Object(n.createElement)(w,{id:e.id,key:e.columnKey,style:e.style,className:e.className,title:e.title,onSortAsc:e.onSortAsc?function(){return k(e,o,1),e.onSortAsc}:void 0,onSortDes:e.onSortDes?function(){return k(e,o,-1),e.onSortDes}:void 0})})))),Object(n.createElement)("tbody",null,N.map((function(e,t){return Object(n.createElement)("tr",{key:t},i.map((function(t,a){return Object(n.createElement)("td",{key:a,className:S,style:l({background:g?"none":"white",border:f?"1px solid lightgrey":"none"},t.style)},"string"===typeof t.value(e)?t.value(e):'Unsupported format, please check "value" field of '+t.columnKey+" column")})))}))))))},E=(a(11),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),k=function(){var e=s.a.useState(""),t=Object(o.a)(e,2),a=t[0],n=t[1];return s.a.createElement(N,{id:"123-table-id",style:{},striped:!0,bordered:!0,className:"some-table",title:{id:"123-table-title-id",style:{},className:"some-table-title",value:"Facebook Developer Circles"},search:{id:"123-search-id",style:{},className:"some-table-search",placeholder:"Searching...!",name:"search",value:a,type:"text",searchFields:["name","email"],onChangeSearch:function(e){return n(e.target.value)}},rows:E,columns:[{id:"123-some-table-name-id",style:{},className:"some-table-column",title:"Full Name",value:function(e){return e.name},columnKey:"name",onSortAsc:function(){},onSortDes:function(){}},{id:"123-some-table-email-id",style:{},className:"some-table-column",title:"Email Address",value:function(e){return e.email},columnKey:"email",sortButtons:!0,onSortAsc:null,onSortDes:null},{id:"123-some-table-address-id",style:{},className:"some-table-column",title:"Address",value:function(e){return e.address.street},columnKey:"address",sortButtons:!0,onSortAsc:function(){},onSortDes:function(){}}]})};i.a.render(s.a.createElement(k,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.63e7a88e.chunk.js.map