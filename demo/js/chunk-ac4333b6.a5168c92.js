(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac4333b6"],{"280f":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("div",{staticClass:"mw-field"},[i("mw-button",{attrs:{type:"info",inline:!1},on:{click:function(n){return t.notify("default",1e3)}}},[t._v("默认通知栏")])],1),i("div",{staticClass:"mw-field"},[i("mw-button",{attrs:{type:"primary",inline:!1},on:{click:function(n){return t.notify("success",2e3)}}},[t._v("成功通知栏")])],1),i("div",{staticClass:"mw-field"},[i("mw-button",{attrs:{type:"danger",inline:!1},on:{click:function(n){return t.notify("failed",3e3)}}},[t._v("失败通知栏")])],1),i("div",{staticClass:"mw-field"},[i("mw-button",{attrs:{type:"warning",inline:!1},on:{click:function(n){return t.notify("warning",4e3)}}},[t._v("警告通知栏")])],1)])},c=[],a={data(){return{bShow:{}}},methods:{notify(t,n){this.$notify("通知栏",{type:t,duration:n,callback(){console.log(t+"回掉函数")}})}}},o=a,s=(i("b820"),i("2877")),r=Object(s["a"])(o,e,c,!1,null,"6c242cf4",null);n["default"]=r.exports},"3aec":function(t,n,i){},b820:function(t,n,i){"use strict";var e=i("3aec"),c=i.n(e);c.a}}]);