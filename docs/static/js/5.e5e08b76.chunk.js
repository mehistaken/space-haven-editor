/*! For license information please see 5.e5e08b76.chunk.js.LICENSE.txt */
(this["webpackJsonpspace-haven-editor"]=this["webpackJsonpspace-haven-editor"]||[]).push([[5],{598:function(e,s,t){"use strict";t.r(s);const i=async e=>{const s=await e.getFile();return s.handle=e,s};s.default=async(e={})=>{const s=await window.chooseFileSystemEntries({accepts:[{description:e.description||"",mimeTypes:e.mimeTypes||["*/*"],extensions:e.extensions||[""]}],multiple:e.multiple||!1});return e.multiple?Promise.all(s.map(i)):i(s)}}}]);
//# sourceMappingURL=5.e5e08b76.chunk.js.map