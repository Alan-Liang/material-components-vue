(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{342:function(e,t,o){"use strict";o.r(t);var s={data:function(){return{isMenuOpen:!1,radioProps:[{prop:"defaultFocusState: NONE",value:!1},{prop:"defaultFocusState: LIST_ROOT",value:!0},{prop:"defaultFocusState: FIRST_ITEM",value:!1},{prop:"defaultFocusState: LAST_ITEM",value:!1}],checkboxProps:[{prop:"fixed",value:!1},{prop:"quickOpen",value:!1},{prop:"isHoisted",value:!1}]}},computed:{defaultFocusState:function(){for(var e in this.radioProps)if(this.radioProps[e].value)return this.radioProps[e].prop.substr(19)}}},i=o(0),r=Object(i.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("ComponentSection",[o("m-menu-anchor",[o("m-button",{attrs:{raised:""},on:{click:function(t){e.isMenuOpen=!e.isMenuOpen}}},[e._v("open")]),e._v(" "),o("m-menu",{attrs:{fixed:this.checkboxProps[0].value,"default-focus-state":e.defaultFocusState,quickOpen:this.checkboxProps[1].value,"is-hoisted":this.checkboxProps[2].value},model:{value:e.isMenuOpen,callback:function(t){e.isMenuOpen=t},expression:"isMenuOpen"}},[o("m-list",[o("li",[o("m-menu-selection-group",[o("m-list-item",[o("m-icon",{attrs:{slot:"graphic",icon:"refresh"},slot:"graphic"}),e._v(" "),o("template",{slot:"text"},[e._v("Refresh")])],2),e._v(" "),o("m-list-item",[o("m-icon",{attrs:{slot:"graphic",icon:"favorite"},slot:"graphic"}),e._v(" "),o("template",{slot:"text"},[e._v("Favorite")])],2)],1)],1),e._v(" "),o("m-list-divider"),e._v(" "),o("m-list-item",[e._v("Add space before paragraph")])],1)],1)],1)],1),e._v(" "),o("ComponentProps",{attrs:{radioProps:e.radioProps,checkboxProps:e.checkboxProps}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);