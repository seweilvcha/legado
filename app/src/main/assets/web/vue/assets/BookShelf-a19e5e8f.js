import{a2 as U,n as Q,o as l,d,g as e,F as V,P,t as u,c as $,w as b,f as z,M as I,u as a,a3 as N,p as J,i as D,s as q,z as g,O as G,a4 as X,T as j,k,e as B,A as ee,L as te,v as L,I as se,B as ae}from"./vendor-b9134af1.js";import{d as oe,u as ne}from"./loading-c709a05a.js";import{_ as W,u as ce,A as E}from"./index-09b6d8d8.js";const O=n=>(J("data-v-6da0ccca"),n=n(),D(),n),re={class:"books-wrapper"},ie={class:"wrapper"},le=["onClick"],de={class:"cover-img"},ue=["src"],he={class:"info"},pe={class:"name"},_e={class:"sub"},ve={class:"author"},ge={key:0,class:"tags"},me={key:1,class:"update-info"},fe=O(()=>e("div",{class:"dot"},"•",-1)),we={class:"size"},Ae=O(()=>e("div",{class:"dot"},"•",-1)),Ie={class:"date"},ke={key:0,class:"intro"},Be={key:1,class:"dur-chapter"},ye={class:"last-chapter"},Se={__name:"BookItems",props:["books","isSearch"],emits:["bookClick"],setup(n,{emit:c}){const y=n;U(t=>({"247f0a81":a(m)}));const S=t=>c("bookClick",t),x=t=>/^data:/.test(t)?t:location.origin+"/cover?path="+encodeURIComponent(t),m=Q(()=>y.isSearch?"space-between":"flex-start");return(t,C)=>{const R=N;return l(),d("div",re,[e("div",ie,[(l(!0),d(V,null,P(n.books,r=>{var f;return l(),d("div",{class:"book",key:r.bookUrl,onClick:i=>S(r)},[e("div",de,[(l(),d("img",{class:"cover",src:x(r.coverUrl),key:r.coverUrl,alt:"",loading:"lazy"},null,8,ue))]),e("div",he,[e("div",pe,u(r.name),1),e("div",_e,[e("div",ve,u(r.author),1),n.isSearch?(l(),d("div",ge,[(l(!0),d(V,null,P((f=r.kind)==null?void 0:f.split(",").slice(0,2),i=>(l(),$(R,{key:i},{default:b(()=>[z(u(i),1)]),_:2},1024))),128))])):I("",!0),n.isSearch?I("",!0):(l(),d("div",me,[fe,e("div",we,"共"+u(r.totalChapterNum)+"章",1),Ae,e("div",Ie,u(a(oe)(r.lastCheckTime)),1)]))]),n.isSearch?(l(),d("div",ke,u(r.intro),1)):I("",!0),n.isSearch?I("",!0):(l(),d("div",Be," 已读："+u(r.durChapterTitle),1)),e("div",ye,"最新："+u(r.latestChapterTitle),1)])],8,le)}),128))])])}}},xe=W(Se,[["__scopeId","data-v-6da0ccca"]]);const Ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAECUlEQVRYR7WXTYhcRRDHq3pY9yKrYBQ8KBsjgvHgwRhiQBTjYZm4Xe8NusawhwS/o9GLoKhgBGPAgJd1NdGIXwtZTbRf9Rqzl6gHTVyDeIkIgnEOghAM6oKHzTJd0sO8Zaa338zb7NjwmJn++Ndv+lVVVyOsoM3Ozl69sLBAiHiDc26NUuoKv9w5d14p9aeI/DI4OMgjIyN/lJXFMhOttQ8BgBaR0TLzEXEGAKzW+lCv+V0BmLmGiLtF5M5eQrFxRPxaRCaI6LOi9YUAzPwGADxxMYYjayaJ6MkoZKyTmU8AwF19Mp7LfElEW0LNZTvAzIcBYFufjedy00T0QLt2B4AxZo9S6qX/yXhT1jn3cpqme3IbSwDM/DgAvNlu3Dm3Uyl1HAA2IOJ2EdleEu5Io9H4EBHPVCqVLSISRsMuInrLazUBpqamhoaGhr4TkRsDgLVpmtbzPmPMLQBwOwD4vvzxw8P5IyJztVrtVL4my7L1iPhTx7Yj/jw/P79pfHx8vgmQZdkLiPhK+O8GBgauqVarv5f819FpxpjLlVJ/hYMi8mKSJHubAMz8KwBcF1EYI6IjqwRIlFImonGWiNZhlmVVRDxWYGTVAMx8HwB8EtMXka1orT0gIo9GJrxNRLH+FW8IMx8EgEeW5QDEgx5gTkQ2Bk7yr9b60hVb6rKAmc8BwJWBne+x4P3XiWhtPwGstV9FzpSzHuBvALgsMHaaiDp2ZbUwWZZNIuKuQOcfD7AAAJeEcaq1Xr9ao+3rmdknnscCzQse4LdWEukYazQaa2q12vl+QTDztwCwOdCr+zA8iYi3RQwREdl+ADDz9QDwIwB0OLaInPJRcEhEHoyEyAmt9d39ALDW2lg1hYjv+lfgC4WJgkTxcJIkPcuqbpC+qgKATwvm7PYAGwDgdBeRZ4notYvZCWPMDqXUe13W3to8C6y10yJyv//u6zj/2R6ziPiRiBwt6xPMrBExFZEdRcYR8WOt9bb8MNoKAJ+3Jvtwed05d4dSKtz+c4h4VGsdrRWttZMici8AXFVix+4homNLBUmWZQcQMc/9x4mommXZ84i4t11MKbV5dHR06bxvH5uZmbnZOfdN6O0RmMNE1CxulgCstdeKyBcAcFPrVTyltZ4wxiSVSuXplkhda72zh9P1rClFZFOSJHMdAP5Hq3rxR6eH+IGIvIOuqFlr94nIc10WdRzxy6riAMJnr2nn3JlcME3TppMWNWvtfhF5pmB8WX0RvZgEEEtaYUUbM2KtfUdE/FUubNHipvBmZIxZp5TaDwBprlQGIHLqzSHiPq01x4B7Xk6Z2d8TfDwPlwFozfd1f90598Hi4uKrY2NjFwrzQVkP81nNi/byAWOMv8gOp2n6fhnt/wDqJrRWLmhIrwAAAABJRU5ErkJggg==";const M=n=>(J("data-v-b636eaeb"),n=n(),D(),n),Re={class:"index-wrapper"},Ee={class:"navigation-wrapper"},be=M(()=>e("div",{class:"navigation-title-wrapper"},[e("div",{class:"navigation-title"},"阅读"),e("div",{class:"navigation-sub-title"},"清风不识字，何故乱翻书")],-1)),ze={class:"search-wrapper"},Me={class:"bottom-wrapper"},Te={class:"recent-wrapper"},Ve=M(()=>e("div",{class:"recent-title"},"最近阅读",-1)),Pe={class:"reading-recent"},Le={class:"setting-wrapper"},Ne=M(()=>e("div",{class:"setting-title"},"基本设定",-1)),Je={class:"setting-item"},De={class:"bottom-icons"},We={href:"https://github.com/gedoor/legado_web_bookshelf",target:"_blank"},Oe={class:"bottom-icon"},Ze=["src"],He={__name:"BookShelf",setup(n){const c=ce(),{connectStatus:y,connectType:S,newConnect:x,shelf:m}=q(c),t=g({name:"尚无阅读记录",author:"",url:"",chapterIndex:0,chapterPos:0}),C=g(null),{showLoading:R,closeLoading:r,loadingWrapper:f}=ne(C,"正在获取书籍信息"),i=g([]),h=g(""),w=g(!1);G(()=>{if(!(w.value&&h.value!="")){if(w.value=!1,i.value=[],h.value==""){i.value=m.value;return}i.value=m.value.filter(s=>s.name.includes(h.value)||s.author.includes(h.value))}});const Z=()=>{h.value!=""&&(i.value=[],c.clearSearchBooks(),R(),w.value=!0,E.search(h.value,s=>{try{c.setSearchBooks(JSON.parse(s)),c.searchBooks.forEach(o=>i.value.push(o))}catch(o){throw k.error("后端数据错误"),o}},()=>{r(),i.value.length==0&&k.info("搜索结果为空")}))},H=()=>{},F=X(),K=async s=>{const{bookUrl:o,name:_,author:p,durChapterIndex:v=0,durChapterPos:A=0}=s;await E.saveBook(s),T(o,_,p,v,A)},T=(s,o,_,p,v)=>{o!=="尚无阅读记录"&&(sessionStorage.setItem("bookUrl",s),sessionStorage.setItem("bookName",o),sessionStorage.setItem("bookAuthor",_),sessionStorage.setItem("chapterIndex",p),sessionStorage.setItem("chapterPos",v),t.value={name:o,author:_,url:s,chapterIndex:p,chapterPos:v},localStorage.setItem("readingRecent",JSON.stringify(t.value)),F.push({path:"/chapter"}))};j(()=>{let s=localStorage.getItem("readingRecent");s!=null&&(t.value=JSON.parse(s),typeof t.value.chapterIndex>"u"&&(t.value.chapterIndex=0)),f(c.saveBookProgress().finally(Y))});const Y=()=>E.getBookShelf().then(s=>{c.setConnectType("success"),s.data.isSuccess?c.addBooks(s.data.data.sort(function(o,_){var p=o.durChapterTime||0,v=_.durChapterTime||0;return v-p})):k.error(s.data.errorMsg),c.setConnectStatus("已连接 "),c.setNewConnect(!1)}).catch(function(s){throw c.setConnectType("danger"),c.setConnectStatus("连接失败"),k.error("后端连接失败"),c.setNewConnect(!1),s});return(s,o)=>{const _=se,p=N,v=xe;return l(),d("div",Re,[e("div",Ee,[be,e("div",ze,[B(_,{placeholder:"搜索书籍，在线书籍自动加入书架",modelValue:a(h),"onUpdate:modelValue":o[0]||(o[0]=A=>ee(h)?h.value=A:null),class:"search-input","prefix-icon":a(ae),onKeyup:te(Z,["enter"])},null,8,["modelValue","prefix-icon","onKeyup"])]),e("div",Me,[e("div",Te,[Ve,e("div",Pe,[B(p,{type:a(t).name=="尚无阅读记录"?"warning":"",class:L(["recent-book",{"no-point":a(t).url==""}]),size:"large",onClick:o[1]||(o[1]=A=>T(a(t).url,a(t).name,a(t).author,a(t).chapterIndex,a(t).chapterPos))},{default:b(()=>[z(u(a(t).name),1)]),_:1},8,["type","class"])])]),e("div",Le,[Ne,e("div",Je,[B(p,{type:a(S),size:"large",class:L(["setting-connect",{"no-point":a(x)}]),onClick:H},{default:b(()=>[z(u(a(y)),1)]),_:1},8,["type","class"])])])]),e("div",De,[e("a",We,[e("div",Oe,[e("img",{src:a(Ce),alt:""},null,8,Ze)])])])]),e("div",{class:"shelf-wrapper",ref_key:"shelfWrapper",ref:C},[B(v,{books:a(i),onBookClick:K,isSearch:a(w)},null,8,["books","isSearch"])],512)])}}},Ue=W(He,[["__scopeId","data-v-b636eaeb"]]);export{Ue as default};
