(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function d(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=d(e);fetch(e.href,n)}})();var h=document.getElementById("frequency"),O=document.getElementById("frequencyDisplay"),m=document.getElementById("amplitude"),F=document.getElementById("amplitudeDisplay"),P=document.getElementById("hideGraph"),C=document.getElementById("showGraph");C.classList.add("hidden");P.addEventListener("click",function(){P.classList.add("hidden"),m.classList.add("hidden"),h.classList.add("hidden"),r.classList.add("hidden"),C.classList.remove("hidden"),window.setTimeout(function(){window.dispatchEvent(new Event("resize"))},10)});C.addEventListener("click",function(){C.classList.add("hidden"),m.classList.remove("hidden"),h.classList.remove("hidden"),r.classList.remove("hidden"),P.classList.remove("hidden"),window.setTimeout(function(){window.dispatchEvent(new Event("resize"))},10)});const r=document.getElementById("graph"),v=r.getContext("2d");O.innerHTML=h.value;var k=h.value,q=m.value/100,E=null,c=null,p=!1;h.oninput=function(){O.value=this.value,k=this.value,I(),p===!0&&$()};O.oninput=function(){h.value=this.value,k=this.value,I(),p===!0&&$()};F.innerHTML=m.value;F.oninput=function(){m.value=this.value,q=this.value/100,I(),p===!0&&$()};m.oninput=function(){F.value=this.value,q=this.value/100,I(),p===!0&&$()};function I(){var a=.02,t=44100;const d=H(q,k,a,t);r.width=window.innerWidth,r.height=200,v.clearRect(0,0,r.width,r.height),v.beginPath(),v.moveTo(0,r.height/2);for(let i=0;i<d.length;i++){const e=r.width*i/d.length,n=r.height/2-d[i]*(r.height/2);v.lineTo(e,n)}v.strokeStyle="#EEEEEE",v.lineWidth=5,v.stroke()}function H(a,t,d,i){const e=d*i,n=[];for(let o=0;o<e;o++){const G=a*Math.sin(2*Math.PI*t*o/i);n.push(G)}return n}function $(){E||(E=new(window.AudioContext||window.webkitAudioContext)),c&&(c.stop(),c.disconnect());var a=100,t=44100,d=a*t,i=H(q,k,a,t),e=E.createBuffer(1,d,t),n=e.getChannelData(0);for(let o=0;o<d;o++)n[o]=i[o];c=E.createBufferSource(),c.buffer=e,c.connect(E.destination),c.start(),p=!0}function K(){c&&(c.stop(),c.disconnect(),c=null,p=!1)}document.getElementById("playButton").addEventListener("click",$);document.getElementById("stopButton").addEventListener("click",K);I();var y=document.getElementById("frequency2"),W=document.getElementById("frequencyDisplay2"),w=document.getElementById("amplitude2"),z=document.getElementById("amplitudeDisplay2"),A=document.getElementById("hideGraph2"),T=document.getElementById("showGraph2");T.classList.add("hidden");A.addEventListener("click",function(){A.classList.add("hidden"),w.classList.add("hidden"),y.classList.add("hidden"),u.classList.add("hidden"),T.classList.remove("hidden"),window.setTimeout(function(){window.dispatchEvent(new Event("resize"))},10)});T.addEventListener("click",function(){T.classList.add("hidden"),w.classList.remove("hidden"),y.classList.remove("hidden"),u.classList.remove("hidden"),A.classList.remove("hidden"),window.setTimeout(function(){window.dispatchEvent(new Event("resize"))},10)});const u=document.getElementById("graph2"),f=u.getContext("2d");W.innerHTML=y.value;var D=y.value,M=w.value/100,L,l=null,g=!1;y.oninput=function(){W.value=this.value,D=this.value,S(),g===!0&&b()};W.oninput=function(){y.value=this.value,D=this.value,S(),g===!0&&b()};z.innerHTML=w.value;z.oninput=function(){w.value=this.value,M=this.value/100,S(),g===!0&&b()};w.oninput=function(){z.value=this.value,M=this.value/100,S(),g===!0&&b()};function S(){var a=.02,t=44100;const d=N(M,D,a,t);u.width=window.innerWidth,u.height=200,f.clearRect(0,0,u.width,u.height),f.beginPath(),f.moveTo(0,u.height/2);for(let i=0;i<d.length;i++){const e=u.width*i/d.length,n=u.height/2-d[i]*(u.height/2);f.lineTo(e,n)}f.strokeStyle="#EEEEEE",f.lineWidth=5,f.stroke()}function N(a,t,d,i){const e=d*i,n=[];for(let o=0;o<e;o++){const G=a*Math.sin(2*Math.PI*t*o/i);n.push(G)}return n}function b(){L||(L=new(window.AudioContext||window.webkitAudioContext)),l&&(l.stop(),l.disconnect());var a=100,t=44100,d=a*t,i=N(M,D,a,t),e=L.createBuffer(1,d,t),n=e.getChannelData(0);for(let o=0;o<d;o++)n[o]=i[o];l=L.createBufferSource(),l.buffer=e,l.connect(L.destination),l.start(),g=!0}function j(){l&&(l.stop(),l.disconnect(),l=null,g=!1)}document.getElementById("playButton2").addEventListener("click",b);document.getElementById("stopButton2").addEventListener("click",j);S();var B=new AudioContext,J=document.getElementById("playButton3"),Q=document.getElementById("stopButton3"),x,s,R;function U(a){return fetch(a).then(t=>t.arrayBuffer()).then(t=>B.decodeAudioData(t)).then(t=>{x=t})}function V(){if(x){var a=document.getElementById("bpsInput").value,t=1/a*1e3;_(),s=B.createBufferSource(),s.buffer=x,s.connect(B.destination),s.start(),R=setInterval(function(){s.stop(),s.disconnect(),s=B.createBufferSource(),s.buffer=x,s.connect(B.destination),s.start()},t)}}function _(){s&&(clearInterval(R),s.stop(),s.disconnect())}U("./metronomeWood.wav").then(function(){console.log("Sound file loaded successfully.")}).catch(function(a){console.log("Error loading sound file:",a)});J.addEventListener("click",V);Q.addEventListener("click",_);
