(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe5aa482"],{"261a":function(i,t,s){"use strict";var a=s("c26d"),e=s.n(a);e.a},"76b6":function(i,t,s){"use strict";s.r(t);var a=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"infinite-scroll"},[s("mw-infinite-scroll",{attrs:{"has-more":i.isHasMore,"is-loading":i.isLoading},on:{onInfinite:i.onInfinite,scrollChange:i.scrollChange}},[s("ul",{staticClass:"list"},i._l(i.data,(function(t,a){return s("li",{key:t,staticClass:"list-item"},[i._v(i._s(a+1))])})),0)])],1)},e=[],n={data(){return{data:new Array(30),page:2,num:30,isHasMore:!0,isNoData:!1,isLoading:!1,isErr:!1,timer:null}},methods:{onInfinite(){this.isLoading=!0,this.timer=setTimeout(()=>{this.page<=6?(this.data=new Array(this.num*this.page),this.page=this.page+1):this.isHasMore=!1,this.isLoading=!1},1e3)},scrollChange(i){console.log(i)}},destroyed(){clearTimeout(this.timer)}},o=n,r=(s("261a"),s("2877")),l=Object(r["a"])(o,a,e,!1,null,"1655ec36",null);t["default"]=l.exports},c26d:function(i,t,s){}}]);