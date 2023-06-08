(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();var w=document.getElementById("frequency"),H=document.getElementById("frequencyDisplay"),P=document.getElementById("amplitude"),G=document.getElementById("amplitudeDisplay");const d=document.getElementById("graph"),v=d.getContext("2d");H.innerHTML=w.value;var B=w.value,E=P.value,p=null,c=null;w.oninput=function(){$(),H.innerHTML=this.value,B=this.value,I()};P.oninput=function(){$(),G.innerHTML=this.value,E=this.value,I()};function I(){var o=.02,r=44100;const a=S(E,B,o,r);d.width=window.innerWidth,d.height=200,v.clearRect(0,0,d.width,d.height),v.beginPath(),v.moveTo(0,d.height/2);for(let n=0;n<a.length;n++){const e=d.width*n/a.length,t=d.height/2-a[n]*(d.height/2);v.lineTo(e,t)}v.strokeStyle="#0014C5",v.lineWidth=2,v.stroke()}function S(o,r,a,n){const e=a*n,t=[];for(let i=0;i<e;i++){const m=o*Math.sin(2*Math.PI*r*i/n);t.push(m)}return t}function J(){p||(p=new(window.AudioContext||window.webkitAudioContext)),c&&(c.stop(),c.disconnect());var o=100,r=44100,a=o*r,n=S(E,B,o,r),e=p.createBuffer(1,a,r),t=e.getChannelData(0);for(let i=0;i<a;i++)t[i]=n[i];c=p.createBufferSource(),c.buffer=e,c.connect(p.destination),c.start()}function $(){c&&(c.stop(),c.disconnect(),c=null)}document.getElementById("playButton").addEventListener("click",J);document.getElementById("stopButton").addEventListener("click",$);I();var q=document.getElementById("frequency2"),k=document.getElementById("frequencyDisplay2"),F=document.getElementById("amplitude2"),Q=document.getElementById("amplitudeDisplay2");const h=document.getElementById("graph2"),f=h.getContext("2d");k.innerHTML=q.value;var L=q.value,T=F.value,y,s;q.oninput=function(){C(),k.innerHTML=this.value,L=this.value,M()};F.oninput=function(){C(),Q.innerHTML=this.value,T=this.value,M()};function M(){var o=.02,r=44100;const a=W(T,L,o,r);h.width=window.innerWidth,h.height=200,f.clearRect(0,0,h.width,h.height),f.beginPath(),f.moveTo(0,h.height/2);for(let n=0;n<a.length;n++){const e=h.width*n/a.length,t=h.height/2-a[n]*(h.height/2);f.lineTo(e,t)}f.strokeStyle="#0014C5",f.lineWidth=2,f.stroke()}function W(o,r,a,n){const e=a*n,t=[];for(let i=0;i<e;i++){const m=o*Math.sin(2*Math.PI*r*i/n);t.push(m)}return t}function U(){y||(y=new(window.AudioContext||window.webkitAudioContext)),s&&(s.stop(),s.disconnect());var o=100,r=44100,a=o*r,n=W(T,L,o,r),e=y.createBuffer(1,a,r),t=e.getChannelData(0);for(let i=0;i<a;i++)t[i]=n[i];s=y.createBufferSource(),s.buffer=e,s.connect(y.destination),s.start()}function C(){s&&(s.stop(),s.disconnect(),s=null)}document.getElementById("playButton2").addEventListener("click",U);document.getElementById("stopButton2").addEventListener("click",C);M();var D=document.getElementById("frequency"),O=document.getElementById("frequencyDisplay"),A=document.getElementById("amplitude"),V=document.getElementById("amplitudeDisplay"),x=document.getElementById("frequency2"),N=document.getElementById("frequencyDisplay2"),R=document.getElementById("amplitude2"),X=document.getElementById("amplitudeDisplay2");const l=document.getElementById("graph3"),u=l.getContext("2d");O.innerHTML=D.value;var _=D.value,K=A.value;D.oninput=function(){O.innerHTML=this.value,_=this.value,g()};A.oninput=function(){V.innerHTML=this.value,K=this.value,g()};N.innerHTML=x.value;var j=x.value,z=R.value;x.oninput=function(){N.innerHTML=this.value,j=this.value,g()};R.oninput=function(){X.innerHTML=this.value,z=this.value,g()};function g(){var o=.02,r=44100;const a=b(K,_,o,r),n=b(z,j,o,r);l.width=window.innerWidth,l.height=200,u.clearRect(0,0,l.width,l.height),u.beginPath(),u.moveTo(0,l.height/2);for(let e=0;e<a.length;e++){const t=l.width*e/a.length,i=l.height/2-a[e]*(l.height/2);u.lineTo(t,i)}u.strokeStyle="#0014C5",u.lineWidth=2,u.stroke(),u.beginPath(),u.moveTo(0,l.height/2);for(let e=0;e<n.length;e++){const t=l.width*e/n.length,i=l.height/2-n[e]*(l.height/2);u.lineTo(t,i)}u.strokeStyle="#C50014",u.lineWidth=2,u.stroke()}function b(o,r,a,n){const e=a*n,t=[];for(let i=0;i<e;i++){const m=o*Math.sin(2*Math.PI*r*i/n);t.push(m)}return t}g();
