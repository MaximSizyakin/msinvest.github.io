import{G as i}from"./index.06cbf57a.js";function u(t,n){const r=t.style;for(const e in n)r[e]=n[e]}function c(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const n=i(t);if(n)return n.$el||n}function s(t,n){if(t==null||t.contains(n)===!0)return!0;for(let r=t.nextElementSibling;r!==null;r=r.nextElementSibling)if(r.contains(n))return!0;return!1}export{s as a,u as c,c as g};
