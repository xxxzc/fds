(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b1009a7"],{2469:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",[t._t("header"),i("div",{staticClass:"container",attrs:{id:"course-info"}},[i("b-loading",{attrs:{"is-full-page":!1,active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),!1===t.isLoading?i("div",[t._m(0),i("div",{staticClass:"columns is-mobile is-centered"},[i("table",{staticClass:"table is-bordered is-striped",staticStyle:{width:"400px"}},[i("tbody",t._l(t.infos.course,function(s){return i("tr",{key:s.key},[i("td",{staticClass:"has-text-weight-bold"},[t._v(t._s(s.key))]),i("td",[t._v(t._s(s.value))])])}),0)])]),t._m(1),i("div",{staticClass:"columns is-mobile is-centered"},[i("table",{staticClass:"table is-bordered is-striped"},[i("tbody",t._l(t.infos.evaluation,function(s){return i("tr",{key:s.key},[i("td",{staticClass:"has-text-weight-bold"},[t._v(t._s(s.name))]),i("td",[t._v(t._s(s.prop))]),i("td",[t._v(t._s(s.time))]),i("td",[t._v(t._s(s.desc))])])}),0)])]),t._m(2),i("h4",{staticClass:"title is-5 is-title has-text-centered"},[t._v("教师")]),i("div",{staticClass:"columns is-mobile is-multiline is-centered"},t._l(t.infos.team.instructor.people,function(s){return i("div",{key:s.name,staticClass:"column is-half-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd",staticStyle:{"min-width":"300px"}},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-content"},[i("div",{staticClass:"media"},[i("div",{staticClass:"media-left"},[i("figure",{staticClass:"image is-48x48"},[i("img",{staticClass:"is-rounded",attrs:{src:s.head}})])]),i("div",{staticClass:"media-content"},[i("p",{staticClass:"title is-5"},[t._v(t._s(s.name))]),i("p",{staticClass:"subtitle is-6"},[t._v(t._s(s.email))])])])])])])}),0),i("h4",{staticClass:"title is-5 is-title has-text-centered"},[t._v("助教们")]),i("div",{staticClass:"columns is-mobile is-multiline is-centered"},t._l(t.infos.team.tas.people,function(s){return i("div",{key:s.name,staticClass:"column is-half-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen is-one-quarter-fullhd",staticStyle:{"min-width":"220px"}},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-content"},[i("p",{staticClass:"title is-6"},[t._v(t._s(s.name))]),i("p",{staticClass:"subtitle is-7"},[t._v(t._s(s.email))])])])])}),0)]):t._e()],1)],2)},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"is-title has-text-centered"},[i("h3",{staticClass:"title is-4"},[i("i",{staticClass:"mdi mdi-information-outline mdi-24px"}),i("span",{staticStyle:{"margin-left":"6px"}},[t._v("课程信息")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"is-title has-text-centered"},[i("h3",{staticClass:"title is-4"},[i("i",{staticClass:"mdi mdi-calendar-check mdi-24px"}),i("span",{staticStyle:{"margin-left":"6px"}},[t._v("考核方式")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"is-title has-text-centered"},[i("h3",{staticClass:"title is-4"},[i("i",{staticClass:"mdi mdi-account-group mdi-24px"}),i("span",{staticStyle:{"margin-left":"6px"}},[t._v("教学团队")])])])}],n={name:"info",data:function(){return{isLoading:!0,infos:{}}},mounted:function(){var t=this;this.isLoading=!0,this.$http.get(this.repo+"info/courseInfo.json").then(function(s){t.infos=s.data,t.isLoading=!1})}},l=n,c=(i("7531"),i("2877")),d=Object(c["a"])(l,e,a,!1,null,"8c40fedc",null);s["default"]=d.exports},7531:function(t,s,i){"use strict";var e=i("b34b"),a=i.n(e);a.a},b34b:function(t,s,i){}}]);