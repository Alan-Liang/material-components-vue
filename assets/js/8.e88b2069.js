(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{176:function(r,e,o){},295:function(r,e,o){"use strict";var a=o(176);o.n(a).a},356:function(r,e,o){"use strict";o.r(e);var a={props:{radioProps:{type:Array},checkboxProps:{type:Array}},data:function(){return{radioPicked:""}},watch:{radioPicked:function(){var r=this;this.radioProps.map((function(e){return e.prop===r.radioPicked?e.value=!0:e.value=!1}))}}},t=(o(295),o(0)),i=Object(t.a)(a,(function(){var r=this,e=r.$createElement,o=r._self._c||e;return r.radioProps.length||r.checkboxProps.length?o("section",{staticClass:"configSection"},[o("m-layout-grid",[o("m-layout-grid-inner",[o("m-layout-grid-cell",{attrs:{span:12}},[o("m-typo-headline",{attrs:{level:5}},[r._v("Props")])],1),r._v(" "),o("m-layout-grid-cell",{attrs:{span:6}},[o("m-layout-grid-inner",r._l(r.radioProps,(function(e){return r.radioProps?o("m-layout-grid-cell",{key:e.prop,attrs:{span:12}},[o("m-form-field",[o("m-radio",{attrs:{value:e.prop,id:e.prop+"-"+r._uid,checked:e.value,name:r._uid.toString()},model:{value:r.radioPicked,callback:function(e){r.radioPicked=e},expression:"radioPicked"}}),r._v(" "),o("label",{attrs:{for:e.prop+"-"+r._uid}},[r._v(r._s(e.prop))])],1)],1):r._e()})),1)],1),r._v(" "),o("m-layout-grid-cell",{attrs:{span:6}},[o("m-layout-grid-inner",r._l(r.checkboxProps,(function(e){return r.checkboxProps?o("m-layout-grid-cell",{key:e.prop,attrs:{span:12}},[o("m-form-field",[o("m-checkbox",{attrs:{id:e.prop+"-"+r._uid,disabled:e.disabled},model:{value:e.value,callback:function(o){r.$set(e,"value",o)},expression:"item.value"}}),r._v(" "),o("label",{attrs:{for:e.prop+"-"+r._uid}},[r._v(r._s(e.prop))])],1)],1):r._e()})),1)],1)],1)],1)],1):r._e()}),[],!1,null,null,null);e.default=i.exports}}]);