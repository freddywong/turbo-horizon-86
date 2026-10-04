(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oc="170",mu=0,_l=1,gu=2,c0=1,xu=2,Xn=3,gi=0,Qe=1,fe=2,pi=0,ms=1,wa=2,Ml=3,vl=4,_u=5,Ni=100,Mu=101,vu=102,yu=103,bu=104,Su=200,wu=201,Eu=202,Tu=203,Go=204,Ho=205,Au=206,Ru=207,Cu=208,Iu=209,Pu=210,Lu=211,Du=212,Nu=213,Uu=214,Vo=0,Wo=1,Xo=2,Ms=3,qo=4,Yo=5,$o=6,Ko=7,La=0,Ou=1,Fu=2,mi=0,ku=1,zu=2,Bu=3,Gu=4,Hu=5,Vu=6,Wu=7,l0=300,vs=301,ys=302,Zo=303,jo=304,Da=306,Ea=1e3,ki=1001,Jo=1002,qe=1003,h0=1004,Mr=1005,hn=1006,Ha=1007,fi=1008,jn=1009,u0=1010,d0=1011,cr=1012,Fc=1013,zi=1014,Dn=1015,hr=1016,kc=1017,zc=1018,bs=1020,f0=35902,p0=1021,m0=1022,Cn=1023,g0=1024,x0=1025,gs=1026,Ss=1027,Bc=1028,Gc=1029,_0=1030,Hc=1031,Vc=1033,ga=33776,xa=33777,_a=33778,Ma=33779,Qo=35840,tc=35841,ec=35842,nc=35843,ic=36196,sc=37492,rc=37496,ac=37808,oc=37809,cc=37810,lc=37811,hc=37812,uc=37813,dc=37814,fc=37815,pc=37816,mc=37817,gc=37818,xc=37819,_c=37820,Mc=37821,va=36492,vc=36494,yc=36495,M0=36283,bc=36284,Sc=36285,wc=36286,Xu=3200,qu=3201,Wc=0,Yu=1,qn="",ke="srgb",Es="srgb-linear",Na="linear",de="srgb",Yi=7680,yl=519,$u=512,Ku=513,Zu=514,v0=515,ju=516,Ju=517,Qu=518,td=519,bl=35044,nr=35048,Sl="300 es",$n=2e3,Ta=2001;class Ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Va=Math.PI/180,Ec=180/Math.PI;function ur(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function sn(i,t,e){return Math.max(t,Math.min(e,i))}function ed(i,t){return(i%t+t)%t}function Wa(i,t,e){return(1-e)*i+e*t}function zs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ne{constructor(t=0,e=0){ne.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,s,r,a,o,c,l){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],M=s[0],m=s[3],p=s[6],x=s[1],_=s[4],v=s[7],E=s[2],w=s[5],T=s[8];return r[0]=a*M+o*x+c*E,r[3]=a*m+o*_+c*w,r[6]=a*p+o*v+c*T,r[1]=l*M+h*x+u*E,r[4]=l*m+h*_+u*w,r[7]=l*p+h*v+u*T,r[2]=d*M+f*x+g*E,r[5]=d*m+f*_+g*w,r[8]=d*p+f*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=u*M,t[1]=(s*l-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=d*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xa.makeScale(t,e)),this}rotate(t){return this.premultiply(Xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new te;function y0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nd(){const i=Aa("canvas");return i.style.display="block",i}const wl={};function ir(i){i in wl||(wl[i]=!0,console.warn(i))}function id(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function sd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const se={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=xs(i.r),i.g=xs(i.g),i.b=xs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qn?Na:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const El=[.64,.33,.3,.6,.15,.06],Tl=[.2126,.7152,.0722],Al=[.3127,.329],Rl=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cl=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[Es]:{primaries:El,whitePoint:Al,transfer:Na,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:Tl,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:El,whitePoint:Al,transfer:de,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:Tl,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});let $i;class ad{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=Aa("canvas")),$i.width=t.width,$i.height=t.height;const n=$i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Aa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let od=0;class b0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=ur(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qa(s[a].image)):r.push(qa(s[a]))}else r=qa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ad.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cd=0;class Ye extends Ts{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=ki,s=ki,r=hn,a=fi,o=Cn,c=jn,l=Ye.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=ur(),this.name="",this.source=new b0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==l0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ea:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ea:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=l0;Ye.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,n=0,s=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,v=(f+1)/2,E=(p+1)/2,w=(h+d)/4,T=(u+M)/4,C=(g+m)/4;return _>v&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=w/n,r=T/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=C/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=T/r,s=C/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-M)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ld extends Ts{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new b0(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends ld{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xc extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hd extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=M;return}if(u!==M||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*M,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const E=Math.sqrt(_),w=Math.atan2(E,p*x);m=Math.sin(m*w)/E,o=Math.sin(o*w)/E}const v=o*x;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+M*v,m===1-o){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(sn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,n=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ya.copy(this).projectOnVector(t),this.sub(Ya)}reflect(t){return this.sub(Ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new $,Il=new As;class Wi{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(t.matrixWorld),this.union(vr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),yr.subVectors(this.max,Bs),Ki.subVectors(t.a,Bs),Zi.subVectors(t.b,Bs),ji.subVectors(t.c,Bs),ei.subVectors(Zi,Ki),ni.subVectors(ji,Zi),bi.subVectors(Ki,ji);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-bi.z,bi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,bi.z,0,-bi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-bi.y,bi.x,0];return!$a(e,Ki,Zi,ji,yr)||(e=[1,0,0,0,1,0,0,0,1],!$a(e,Ki,Zi,ji,yr))?!1:(br.crossVectors(ei,ni),e=[br.x,br.y,br.z],$a(e,Ki,Zi,ji,yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const kn=[new $,new $,new $,new $,new $,new $,new $,new $],bn=new $,vr=new Wi,Ki=new $,Zi=new $,ji=new $,ei=new $,ni=new $,bi=new $,Bs=new $,yr=new $,br=new $,Si=new $;function $a(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Si.fromArray(i,r);const o=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),c=t.dot(Si),l=e.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const ud=new Wi,Gs=new $,Ka=new $;class Xi{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ud.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);const e=Gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(Ka)),this.expandByPoint(Gs.copy(t.center).sub(Ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new $,Za=new $,Sr=new $,ii=new $,ja=new $,wr=new $,Ja=new $;class qc{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Za.copy(t).add(e).multiplyScalar(.5),Sr.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(Za);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Sr),o=ii.dot(this.direction),c=-ii.dot(Sr),l=ii.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const M=1/h;u*=M,d*=M,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Za).addScaledVector(Sr,d),f}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,r){ja.subVectors(e,t),wr.subVectors(n,t),Ja.crossVectors(ja,wr);let a=this.direction.dot(Ja),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ii.subVectors(this.origin,t);const c=o*this.direction.dot(wr.crossVectors(ii,wr));if(c<0)return null;const l=o*this.direction.dot(ja.cross(ii));if(l<0||c+l>a)return null;const h=-o*ii.dot(Ja);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,g,M,m){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,M,m)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,M,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,M=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-M*l,e[9]=-o*c,e[2]=M-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,M=l*u;e[0]=d+M*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=M+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,M=l*u;e[0]=d-M*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=M-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,M=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+M,e[1]=c*u,e[5]=M*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,g=o*c,M=o*l;e[0]=c*h,e[4]=M-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-M*u}else if(t.order==="XZY"){const d=a*c,f=a*l,g=o*c,M=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+M,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=M*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dd,t,fd)}lookAt(t,e,n){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),si.crossVectors(n,an),si.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),si.crossVectors(n,an)),si.normalize(),Er.crossVectors(an,si),s[0]=si.x,s[4]=Er.x,s[8]=an.x,s[1]=si.y,s[5]=Er.y,s[9]=an.y,s[2]=si.z,s[6]=Er.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],M=n[6],m=n[10],p=n[14],x=n[3],_=n[7],v=n[11],E=n[15],w=s[0],T=s[4],C=s[8],b=s[12],S=s[1],D=s[5],W=s[9],B=s[13],V=s[2],et=s[6],U=s[10],rt=s[14],k=s[3],tt=s[7],J=s[11],at=s[15];return r[0]=a*w+o*S+c*V+l*k,r[4]=a*T+o*D+c*et+l*tt,r[8]=a*C+o*W+c*U+l*J,r[12]=a*b+o*B+c*rt+l*at,r[1]=h*w+u*S+d*V+f*k,r[5]=h*T+u*D+d*et+f*tt,r[9]=h*C+u*W+d*U+f*J,r[13]=h*b+u*B+d*rt+f*at,r[2]=g*w+M*S+m*V+p*k,r[6]=g*T+M*D+m*et+p*tt,r[10]=g*C+M*W+m*U+p*J,r[14]=g*b+M*B+m*rt+p*at,r[3]=x*w+_*S+v*V+E*k,r[7]=x*T+_*D+v*et+E*tt,r[11]=x*C+_*W+v*U+E*J,r[15]=x*b+_*B+v*rt+E*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],M=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+M*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],M=t[13],m=t[14],p=t[15],x=u*m*l-M*d*l+M*c*f-o*m*f-u*c*p+o*d*p,_=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,v=h*M*l-g*u*l+g*o*f-a*M*f-h*o*p+a*u*p,E=g*u*c-h*M*c-g*o*d+a*M*d+h*o*m-a*u*m,w=e*x+n*_+s*v+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=x*T,t[1]=(M*d*r-u*m*r-M*s*f+n*m*f+u*s*p-n*d*p)*T,t[2]=(o*m*r-M*c*r+M*s*l-n*m*l-o*s*p+n*c*p)*T,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*T,t[4]=_*T,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*T,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*T,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*T,t[8]=v*T,t[9]=(g*u*r-h*M*r-g*n*f+e*M*f+h*n*p-e*u*p)*T,t[10]=(a*M*r-g*o*r+g*n*l-e*M*l-a*n*p+e*o*p)*T,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*T,t[12]=E*T,t[13]=(h*M*s-g*u*s+g*n*d-e*M*d-h*n*m+e*u*m)*T,t[14]=(g*o*s-a*M*s-g*n*c+e*M*c+a*n*m-e*o*m)*T,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,M=a*h,m=a*u,p=o*u,x=c*l,_=c*h,v=c*u,E=n.x,w=n.y,T=n.z;return s[0]=(1-(M+p))*E,s[1]=(f+v)*E,s[2]=(g-_)*E,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(d+p))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(g+_)*T,s[9]=(m-x)*T,s[10]=(1-(d+M))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ji.set(s[0],s[1],s[2]).length();const a=Ji.set(s[4],s[5],s[6]).length(),o=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Sn.copy(this);const l=1/r,h=1/a,u=1/o;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=$n){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===$n)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ta)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=$n){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,f=(n+s)*h;let g,M;if(o===$n)g=(a+r)*u,M=-2*u;else if(o===Ta)g=r*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=M,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ji=new $,Sn=new Nt,dd=new $(0,0,0),fd=new $(1,1,1),si=new $,Er=new $,an=new $,Pl=new Nt,Ll=new As;class _n{constructor(t=0,e=0,n=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class S0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pd=0;const Dl=new $,Qi=new As,Bn=new Nt,Tr=new $,Hs=new $,md=new $,gd=new As,Nl=new $(1,0,0),Ul=new $(0,1,0),Ol=new $(0,0,1),Fl={type:"added"},xd={type:"removed"},ts={type:"childadded",child:null},Qa={type:"childremoved",child:null};class Le extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new $,e=new _n,n=new As,s=new $(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new te}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new S0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(Nl,t)}rotateY(t){return this.rotateOnAxis(Ul,t)}rotateZ(t){return this.rotateOnAxis(Ol,t)}translateOnAxis(t,e){return Dl.copy(t).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nl,t)}translateY(t){return this.translateOnAxis(Ul,t)}translateZ(t){return this.translateOnAxis(Ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Tr.copy(t):Tr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Hs,Tr,this.up):Bn.lookAt(Tr,Hs,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fl),ts.child=t,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xd),Qa.child=t,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fl),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,md),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,gd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Le.DEFAULT_UP=new $(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new $,Gn=new $,to=new $,Hn=new $,es=new $,ns=new $,kl=new $,eo=new $,no=new $,io=new $,so=new Re,ro=new Re,ao=new Re;class Rn{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),Gn.subVectors(n,e),to.subVectors(t,e);const a=wn.dot(wn),o=wn.dot(Gn),c=wn.dot(to),l=Gn.dot(Gn),h=Gn.dot(to),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(a,Hn.y),c.addScaledVector(o,Hn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return so.setScalar(0),ro.setScalar(0),ao.setScalar(0),so.fromBufferAttribute(t,e),ro.fromBufferAttribute(t,n),ao.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(so,r.x),a.addScaledVector(ro,r.y),a.addScaledVector(ao,r.z),a}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),Gn.subVectors(t,e),wn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),wn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Rn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;es.subVectors(s,n),ns.subVectors(r,n),eo.subVectors(t,n);const c=es.dot(eo),l=ns.dot(eo);if(c<=0&&l<=0)return e.copy(n);no.subVectors(t,s);const h=es.dot(no),u=ns.dot(no);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(es,a);io.subVectors(t,r);const f=es.dot(io),g=ns.dot(io);if(g>=0&&f<=g)return e.copy(r);const M=f*l-c*g;if(M<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ns,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return kl.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(kl,o);const p=1/(m+M+d);return a=M*p,o=d*p,e.copy(n).addScaledVector(es,a).addScaledVector(ns,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const w0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function oo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=ed(t,1),e=sn(e,0,1),n=sn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=oo(a,r,t+1/3),this.g=oo(a,r,t),this.b=oo(a,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=w0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return se.fromWorkingColorSpace(Ve.copy(this),t),Math.round(sn(Ve.r*255,0,255))*65536+Math.round(sn(Ve.g*255,0,255))*256+Math.round(sn(Ve.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,r=Ve.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=ke){se.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Ar);const n=Wa(ri.h,Ar.h,e),s=Wa(ri.s,Ar.s,e),r=Wa(ri.l,Ar.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Lt;Lt.NAMES=w0;let _d=0;class vi extends Ts{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=ur(),this.name="",this.blending=ms,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Ho,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Go&&(n.blendSrc=this.blendSrc),this.blendDst!==Ho&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Je extends vi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new $,Rr=new ne;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bl,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rr.fromBufferAttribute(this,e),Rr.applyMatrix3(t),this.setXY(e,Rr.x,Rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bl&&(t.usage=this.usage),t}}class E0 extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class T0 extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Md=0;const fn=new Nt,co=new Le,is=new $,on=new Wi,Vs=new Wi,Ue=new $;class Be extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(y0(t)?T0:E0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return co.lookAt(t),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(on.min,Vs.min),on.expandByPoint(Ue),Ue.addVectors(on.max,Vs.max),on.expandByPoint(Ue)):(on.expandByPoint(Vs.min),on.expandByPoint(Vs.max))}on.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ue.fromBufferAttribute(o,l),c&&(is.fromBufferAttribute(t,l),Ue.add(is)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new $,c[C]=new $;const l=new $,h=new $,u=new $,d=new ne,f=new ne,g=new ne,M=new $,m=new $;function p(C,b,S){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[C].add(M),o[b].add(M),o[S].add(M),c[C].add(m),c[b].add(m),c[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,b=x.length;C<b;++C){const S=x[C],D=S.start,W=S.count;for(let B=D,V=D+W;B<V;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const _=new $,v=new $,E=new $,w=new $;function T(C){E.fromBufferAttribute(s,C),w.copy(E);const b=o[C];_.copy(b),_.sub(E.multiplyScalar(E.dot(b))).normalize(),v.crossVectors(w,b);const D=v.dot(c[C])<0?-1:1;a.setXYZW(C,_.x,_.y,_.z,D)}for(let C=0,b=x.length;C<b;++C){const S=x[C],D=S.start,W=S.count;for(let B=D,V=D+W;B<V;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new $,r=new $,a=new $,o=new $,c=new $,l=new $,h=new $,u=new $;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),M=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?f=c[M]*o.data.stride+o.offset:f=c[M]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Xe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zl=new Nt,wi=new qc,Cr=new Xi,Bl=new $,Ir=new $,Pr=new $,Lr=new $,lo=new $,Dr=new $,Gl=new $,Nr=new $;class ue extends Le{constructor(t=new Be,e=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Dr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(lo.fromBufferAttribute(u,t),a?Dr.addScaledVector(lo,h):Dr.addScaledVector(lo.sub(e),h))}e.add(Dr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(Cr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Cr,Bl)===null||wi.origin.distanceToSquared(Bl)>(t.far-t.near)**2))&&(zl.copy(r).invert(),wi.copy(t.ray).applyMatrix4(zl),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,E=_;v<E;v+=3){const w=o.getX(v),T=o.getX(v+1),C=o.getX(v+2);s=Ur(this,p,t,n,l,h,u,w,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){const x=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);s=Ur(this,a,t,n,l,h,u,x,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,E=_;v<E;v+=3){const w=v,T=v+1,C=v+2;s=Ur(this,p,t,n,l,h,u,w,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),M=Math.min(c.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){const x=m,_=m+1,v=m+2;s=Ur(this,a,t,n,l,h,u,x,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function vd(i,t,e,n,s,r,a,o){let c;if(t.side===Qe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===gi,o),c===null)return null;Nr.copy(o),Nr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Nr);return l<e.near||l>e.far?null:{distance:l,point:Nr.clone(),object:i}}function Ur(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Ir),i.getVertexPosition(c,Pr),i.getVertexPosition(l,Lr);const h=vd(i,t,e,n,Ir,Pr,Lr,Gl);if(h){const u=new $;Rn.getBarycoord(Gl,Ir,Pr,Lr,u),s&&(h.uv=Rn.getInterpolatedAttribute(s,o,c,l,u,new ne)),r&&(h.uv1=Rn.getInterpolatedAttribute(r,o,c,l,u,new ne)),a&&(h.normal=Rn.getInterpolatedAttribute(a,o,c,l,u,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new $,materialIndex:0};Rn.getNormal(Ir,Pr,Lr,d.normal),h.face=d,h.barycoord=u}return h}class dr extends Be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2));function g(M,m,p,x,_,v,E,w,T,C,b){const S=v/T,D=E/C,W=v/2,B=E/2,V=w/2,et=T+1,U=C+1;let rt=0,k=0;const tt=new $;for(let J=0;J<U;J++){const at=J*D-B;for(let j=0;j<et;j++){const Tt=j*S-W;tt[M]=Tt*x,tt[m]=at*_,tt[p]=V,l.push(tt.x,tt.y,tt.z),tt[M]=0,tt[m]=0,tt[p]=w>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(j/T),u.push(1-J/C),rt+=1}}for(let J=0;J<C;J++)for(let at=0;at<T;at++){const j=d+at+et*J,Tt=d+at+et*(J+1),K=d+(at+1)+et*(J+1),ft=d+(at+1)+et*J;c.push(j,Tt,ft),c.push(Tt,K,ft),k+=6}o.addGroup(f,k,b),f+=k,d+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=ws(i[e]);for(const s in n)t[s]=n[s]}return t}function yd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function A0(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const bd={clone:ws,merge:Ze};var Sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends vi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sd,this.fragmentShader=wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=yd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class R0 extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=$n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new $,Hl=new ne,Vl=new ne;class gn extends R0{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ec*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ec*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,Hl,Vl),e.subVectors(Vl,Hl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Va*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ss=-90,rs=1;class Ed extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(ss,rs,t,e);s.layers=this.layers,this.add(s);const r=new gn(ss,rs,t,e);r.layers=this.layers,this.add(r);const a=new gn(ss,rs,t,e);a.layers=this.layers,this.add(a);const o=new gn(ss,rs,t,e);o.layers=this.layers,this.add(o);const c=new gn(ss,rs,t,e);c.layers=this.layers,this.add(c);const l=new gn(ss,rs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class C0 extends Ye{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:vs,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Td extends Bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new C0(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new dr(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:pi});r.uniforms.tEquirect.value=e;const a=new ue(s,r),o=e.minFilter;return e.minFilter===fi&&(e.minFilter=hn),new Ed(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ho=new $,Ad=new $,Rd=new te;class Li{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ho.subVectors(n,e).cross(Ad.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ho),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rd.getNormalMatrix(t),s=this.coplanarPoint(ho).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Xi,Or=new $;class Yc{constructor(t=new Li,e=new Li,n=new Li,s=new Li,r=new Li,a=new Li){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],M=s[10],m=s[11],p=s[12],x=s[13],_=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,m-f,v-p).normalize(),n[1].setComponents(c+r,d+l,m+f,v+p).normalize(),n[2].setComponents(c+a,d+h,m+g,v+x).normalize(),n[3].setComponents(c-a,d-h,m-g,v-x).normalize(),n[4].setComponents(c-o,d-u,m-M,v-_).normalize(),e===$n)n[5].setComponents(c+o,d+u,m+M,v+_).normalize();else if(e===Ta)n[5].setComponents(o,u,M,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Or.x=s.normal.x>0?t.max.x:t.min.x,Or.y=s.normal.y>0?t.max.y:t.min.y,Or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function I0(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Cd(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],M=u[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,u[d]=M)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const M=u[f];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Ua extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],M=[],m=[];for(let p=0;p<h;p++){const x=p*d-a;for(let _=0;_<l;_++){const v=_*u-r;g.push(v,-x,0),M.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const _=x+l*p,v=x+l*(p+1),E=x+1+l*(p+1),w=x+1+l*p;f.push(_,v,w),f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(M,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.width,t.height,t.widthSegments,t.heightSegments)}}var Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Od=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ef=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,of="gl_FragColor = linearToOutputTexel( gl_FragColor );",cf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_f=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ef=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Af=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,If=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Df=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ep=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,em=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:Id,alphahash_pars_fragment:Pd,alphamap_fragment:Ld,alphamap_pars_fragment:Dd,alphatest_fragment:Nd,alphatest_pars_fragment:Ud,aomap_fragment:Od,aomap_pars_fragment:Fd,batching_pars_vertex:kd,batching_vertex:zd,begin_vertex:Bd,beginnormal_vertex:Gd,bsdfs:Hd,iridescence_fragment:Vd,bumpmap_pars_fragment:Wd,clipping_planes_fragment:Xd,clipping_planes_pars_fragment:qd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:$d,color_fragment:Kd,color_pars_fragment:Zd,color_pars_vertex:jd,color_vertex:Jd,common:Qd,cube_uv_reflection_fragment:tf,defaultnormal_vertex:ef,displacementmap_pars_vertex:nf,displacementmap_vertex:sf,emissivemap_fragment:rf,emissivemap_pars_fragment:af,colorspace_fragment:of,colorspace_pars_fragment:cf,envmap_fragment:lf,envmap_common_pars_fragment:hf,envmap_pars_fragment:uf,envmap_pars_vertex:df,envmap_physical_pars_fragment:Sf,envmap_vertex:ff,fog_vertex:pf,fog_pars_vertex:mf,fog_fragment:gf,fog_pars_fragment:xf,gradientmap_pars_fragment:_f,lightmap_pars_fragment:Mf,lights_lambert_fragment:vf,lights_lambert_pars_fragment:yf,lights_pars_begin:bf,lights_toon_fragment:wf,lights_toon_pars_fragment:Ef,lights_phong_fragment:Tf,lights_phong_pars_fragment:Af,lights_physical_fragment:Rf,lights_physical_pars_fragment:Cf,lights_fragment_begin:If,lights_fragment_maps:Pf,lights_fragment_end:Lf,logdepthbuf_fragment:Df,logdepthbuf_pars_fragment:Nf,logdepthbuf_pars_vertex:Uf,logdepthbuf_vertex:Of,map_fragment:Ff,map_pars_fragment:kf,map_particle_fragment:zf,map_particle_pars_fragment:Bf,metalnessmap_fragment:Gf,metalnessmap_pars_fragment:Hf,morphinstance_vertex:Vf,morphcolor_vertex:Wf,morphnormal_vertex:Xf,morphtarget_pars_vertex:qf,morphtarget_vertex:Yf,normal_fragment_begin:$f,normal_fragment_maps:Kf,normal_pars_fragment:Zf,normal_pars_vertex:jf,normal_vertex:Jf,normalmap_pars_fragment:Qf,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:ep,clearcoat_pars_fragment:np,iridescence_pars_fragment:ip,opaque_fragment:sp,packing:rp,premultiplied_alpha_fragment:ap,project_vertex:op,dithering_fragment:cp,dithering_pars_fragment:lp,roughnessmap_fragment:hp,roughnessmap_pars_fragment:up,shadowmap_pars_fragment:dp,shadowmap_pars_vertex:fp,shadowmap_vertex:pp,shadowmask_pars_fragment:mp,skinbase_vertex:gp,skinning_pars_vertex:xp,skinning_vertex:_p,skinnormal_vertex:Mp,specularmap_fragment:vp,specularmap_pars_fragment:yp,tonemapping_fragment:bp,tonemapping_pars_fragment:Sp,transmission_fragment:wp,transmission_pars_fragment:Ep,uv_pars_fragment:Tp,uv_pars_vertex:Ap,uv_vertex:Rp,worldpos_vertex:Cp,background_vert:Ip,background_frag:Pp,backgroundCube_vert:Lp,backgroundCube_frag:Dp,cube_vert:Np,cube_frag:Up,depth_vert:Op,depth_frag:Fp,distanceRGBA_vert:kp,distanceRGBA_frag:zp,equirect_vert:Bp,equirect_frag:Gp,linedashed_vert:Hp,linedashed_frag:Vp,meshbasic_vert:Wp,meshbasic_frag:Xp,meshlambert_vert:qp,meshlambert_frag:Yp,meshmatcap_vert:$p,meshmatcap_frag:Kp,meshnormal_vert:Zp,meshnormal_frag:jp,meshphong_vert:Jp,meshphong_frag:Qp,meshphysical_vert:tm,meshphysical_frag:em,meshtoon_vert:nm,meshtoon_frag:im,points_vert:sm,points_frag:rm,shadow_vert:am,shadow_frag:om,sprite_vert:cm,sprite_frag:lm},Ct={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Ln={basic:{uniforms:Ze([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Ze([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Ze([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Ze([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Ze([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Ze([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Ze([Ct.points,Ct.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Ze([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Ze([Ct.common,Ct.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Ze([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Ze([Ct.sprite,Ct.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Ze([Ct.common,Ct.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Ze([Ct.lights,Ct.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Ln.physical={uniforms:Ze([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Fr={r:0,b:0,g:0},Ti=new _n,hm=new Nt;function um(i,t,e,n,s,r,a){const o=new Lt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function M(x){let _=!1;const v=g(x);v===null?p(o,c):v&&v.isColor&&(p(v,1),_=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,_){const v=g(_);v&&(v.isCubeTexture||v.mapping===Da)?(h===void 0&&(h=new ue(new dr(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:ws(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ti.copy(_.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hm.makeRotationFromEuler(Ti)),h.material.toneMapped=se.getTransfer(v.colorSpace)!==de,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ue(new Ua(2,2),new xi({name:"BackgroundMaterial",uniforms:ws(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=se.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,_){x.getRGB(Fr,A0(i)),n.buffers.color.setClear(Fr.r,Fr.g,Fr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:M,addToRenderList:m}}function dm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,D,W,B,V){let et=!1;const U=u(B,W,D);r!==U&&(r=U,l(r.object)),et=f(S,B,W,V),et&&g(S,B,W,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(et||a)&&(a=!1,v(S,D,W,B),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,D,W){const B=W.wireframe===!0;let V=n[S.id];V===void 0&&(V={},n[S.id]=V);let et=V[D.id];et===void 0&&(et={},V[D.id]=et);let U=et[B];return U===void 0&&(U=d(c()),et[B]=U),U}function d(S){const D=[],W=[],B=[];for(let V=0;V<e;V++)D[V]=0,W[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,D,W,B){const V=r.attributes,et=D.attributes;let U=0;const rt=W.getAttributes();for(const k in rt)if(rt[k].location>=0){const J=V[k];let at=et[k];if(at===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(at=S.instanceColor)),J===void 0||J.attribute!==at||at&&J.data!==at.data)return!0;U++}return r.attributesNum!==U||r.index!==B}function g(S,D,W,B){const V={},et=D.attributes;let U=0;const rt=W.getAttributes();for(const k in rt)if(rt[k].location>=0){let J=et[k];J===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const at={};at.attribute=J,J&&J.data&&(at.data=J.data),V[k]=at,U++}r.attributes=V,r.attributesNum=U,r.index=B}function M(){const S=r.newAttributes;for(let D=0,W=S.length;D<W;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const W=r.newAttributes,B=r.enabledAttributes,V=r.attributeDivisors;W[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),V[S]!==D&&(i.vertexAttribDivisor(S,D),V[S]=D)}function x(){const S=r.newAttributes,D=r.enabledAttributes;for(let W=0,B=D.length;W<B;W++)D[W]!==S[W]&&(i.disableVertexAttribArray(W),D[W]=0)}function _(S,D,W,B,V,et,U){U===!0?i.vertexAttribIPointer(S,D,W,V,et):i.vertexAttribPointer(S,D,W,B,V,et)}function v(S,D,W,B){M();const V=B.attributes,et=W.getAttributes(),U=D.defaultAttributeValues;for(const rt in et){const k=et[rt];if(k.location>=0){let tt=V[rt];if(tt===void 0&&(rt==="instanceMatrix"&&S.instanceMatrix&&(tt=S.instanceMatrix),rt==="instanceColor"&&S.instanceColor&&(tt=S.instanceColor)),tt!==void 0){const J=tt.normalized,at=tt.itemSize,j=t.get(tt);if(j===void 0)continue;const Tt=j.buffer,K=j.type,ft=j.bytesPerElement,yt=K===i.INT||K===i.UNSIGNED_INT||tt.gpuType===Fc;if(tt.isInterleavedBufferAttribute){const lt=tt.data,Dt=lt.stride,zt=tt.offset;if(lt.isInstancedInterleavedBuffer){for(let ht=0;ht<k.locationSize;ht++)p(k.location+ht,lt.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ht=0;ht<k.locationSize;ht++)m(k.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Tt);for(let ht=0;ht<k.locationSize;ht++)_(k.location+ht,at/k.locationSize,K,J,Dt*ft,(zt+at/k.locationSize*ht)*ft,yt)}else{if(tt.isInstancedBufferAttribute){for(let lt=0;lt<k.locationSize;lt++)p(k.location+lt,tt.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let lt=0;lt<k.locationSize;lt++)m(k.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Tt);for(let lt=0;lt<k.locationSize;lt++)_(k.location+lt,at/k.locationSize,K,J,at*ft,at/k.locationSize*lt*ft,yt)}}else if(U!==void 0){const J=U[rt];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(k.location,J);break;case 3:i.vertexAttrib3fv(k.location,J);break;case 4:i.vertexAttrib4fv(k.location,J);break;default:i.vertexAttrib1fv(k.location,J)}}}}x()}function E(){C();for(const S in n){const D=n[S];for(const W in D){const B=D[W];for(const V in B)h(B[V].object),delete B[V];delete D[W]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const W in D){const B=D[W];for(const V in B)h(B[V].object),delete B[V];delete D[W]}delete n[S.id]}function T(S){for(const D in n){const W=n[D];if(W[S.id]===void 0)continue;const B=W[S.id];for(const V in B)h(B[V].object),delete B[V];delete W[S.id]}}function C(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:m,disableUnusedAttributes:x}}function fm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let M=0;M<u;M++)g+=h[M]*d[M];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function pm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Cn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===hr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==jn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Dn&&!C)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:E,maxSamples:w}}function mm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Li,o=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,_=x*4;let v=p.clippingState||null;c.value=v,v=h(g,d,_,f);for(let E=0;E!==_;++E)v[E]=e[E];p.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const M=u!==null?u.length:0;let m=null;if(M!==0){if(m=c.value,g!==!0||m===null){const p=f+M*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=f;_!==M;++_,v+=4)a.copy(u[_]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function gm(i){let t=new WeakMap;function e(a,o){return o===Zo?a.mapping=vs:o===jo&&(a.mapping=ys),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Zo||o===jo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Td(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class P0 extends R0{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const fs=4,Wl=[.125,.215,.35,.446,.526,.582],Ui=20,uo=new P0,Xl=new Lt;let fo=null,po=0,mo=0,go=!1;const Di=(1+Math.sqrt(5))/2,as=1/Di,ql=[new $(-Di,as,0),new $(Di,as,0),new $(-as,0,Di),new $(as,0,Di),new $(0,Di,-as),new $(0,Di,as),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Yl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fo,po,mo),this._renderer.xr.enabled=go,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:hr,format:Cn,colorSpace:Es,depthBuffer:!1},s=$l(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$l(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xm(r)),this._blurMaterial=_m(r,t,e)}return s}_compileMaterial(t){const e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,uo)}_sceneToCubeUV(t,e,n,s){const o=new gn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Xl),h.toneMapping=mi,h.autoClear=!1;const f=new Je({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new ue(new dr,f);let M=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,M=!0):(f.color.copy(Xl),M=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const _=this._cubeSize;kr(s,x*_,p>2?_:0,_,_),h.setRenderTarget(s),M&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===vs||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ue(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;kr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,uo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ql[(s-r-1)%ql.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ue(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ui-1),M=r/g,m=isFinite(r)?1+Math.floor(h*M):Ui;m>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);const p=[];let x=0;for(let T=0;T<Ui;++T){const C=T/M,b=Math.exp(-C*C/2);p.push(b),T===0?x+=b:T<m&&(x+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const v=this._sizeLods[s],E=3*v*(s>_-fs?s-_+fs:0),w=4*(this._cubeSize-v);kr(e,E,w,3*v,2*v),c.setRenderTarget(e),c.render(u,uo)}}function xm(i){const t=[],e=[],n=[];let s=i;const r=i-fs+1+Wl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-fs?c=Wl[a-i+fs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,M=3,m=2,p=1,x=new Float32Array(M*g*f),_=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,C=w>2?0:-1,b=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];x.set(b,M*g*w),_.set(d,m*g*w);const S=[w,w,w,w,w,w];v.set(S,p*g*w)}const E=new Be;E.setAttribute("position",new Xe(x,M)),E.setAttribute("uv",new Xe(_,m)),E.setAttribute("faceIndex",new Xe(v,p)),t.push(E),s>fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $l(i,t,e){const n=new Bi(i,t,e);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _m(i,t,e){const n=new Float32Array(Ui),s=new $(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Kl(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Zl(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function $c(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Zo||c===jo,h=c===vs||c===ys;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Yl(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Yl(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function vm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ir("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ym(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const M=d.morphAttributes[g];for(let m=0,p=M.length;m<p;m++)t.remove(M[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const M=f[g];for(let m=0,p=M.length;m<p;m++)t.update(M[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let M=0;if(f!==null){const x=f.array;M=f.version;for(let _=0,v=x.length;_<v;_+=3){const E=x[_+0],w=x[_+1],T=x[_+2];d.push(E,w,w,T,T,E)}}else if(g!==void 0){const x=g.array;M=g.version;for(let _=0,v=x.length/3-1;_<v;_+=3){const E=_+0,w=_+1,T=_+2;d.push(E,w,w,T,T,E)}}else return;const m=new(y0(d)?T0:E0)(d,1);m.version=M;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function bm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,M){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],M[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,M,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*M[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Sm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wm(i,t,e){const n=new WeakMap,s=new Re;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let _=0;f===!0&&(_=1),g===!0&&(_=2),M===!0&&(_=3);let v=o.attributes.position.count*_,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const w=new Float32Array(v*E*4*u),T=new Xc(w,v,E,u);T.type=Dn,T.needsUpdate=!0;const C=_*4;for(let S=0;S<u;S++){const D=m[S],W=p[S],B=x[S],V=v*E*4*S;for(let et=0;et<D.count;et++){const U=et*C;f===!0&&(s.fromBufferAttribute(D,et),w[V+U+0]=s.x,w[V+U+1]=s.y,w[V+U+2]=s.z,w[V+U+3]=0),g===!0&&(s.fromBufferAttribute(W,et),w[V+U+4]=s.x,w[V+U+5]=s.y,w[V+U+6]=s.z,w[V+U+7]=0),M===!0&&(s.fromBufferAttribute(B,et),w[V+U+8]=s.x,w[V+U+9]=s.y,w[V+U+10]=s.z,w[V+U+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new ne(v,E)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let M=0;M<l.length;M++)f+=l[M];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Em(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class L0 extends Ye{constructor(t,e,n,s,r,a,o,c,l,h=gs){if(h!==gs&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gs&&(n=zi),n===void 0&&h===Ss&&(n=bs),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const D0=new Ye,jl=new L0(1,1),N0=new Xc,U0=new hd,O0=new C0,Jl=[],Ql=[],th=new Float32Array(16),eh=new Float32Array(9),nh=new Float32Array(4);function Rs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Jl[s];if(r===void 0&&(r=new Float32Array(s),Jl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Oa(i,t){let e=Ql[t];e===void 0&&(e=new Int32Array(t),Ql[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function Im(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;nh.set(n),i.uniformMatrix2fv(this.addr,!1,nh),Ne(e,n)}}function Pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;eh.set(n),i.uniformMatrix3fv(this.addr,!1,eh),Ne(e,n)}}function Lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;th.set(n),i.uniformMatrix4fv(this.addr,!1,th),Ne(e,n)}}function Dm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function Fm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function Gm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(jl.compareFunction=v0,r=jl):r=D0,e.setTexture2D(t||r,s)}function Hm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||U0,s)}function Vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||O0,s)}function Wm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||N0,s)}function Xm(i){switch(i){case 5126:return Tm;case 35664:return Am;case 35665:return Rm;case 35666:return Cm;case 35674:return Im;case 35675:return Pm;case 35676:return Lm;case 5124:case 35670:return Dm;case 35667:case 35671:return Nm;case 35668:case 35672:return Um;case 35669:case 35673:return Om;case 5125:return Fm;case 36294:return km;case 36295:return zm;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Wm}}function qm(i,t){i.uniform1fv(this.addr,t)}function Ym(i,t){const e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function $m(i,t){const e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function Km(i,t){const e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function Zm(i,t){const e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jm(i,t){const e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jm(i,t){const e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qm(i,t){i.uniform1iv(this.addr,t)}function t1(i,t){i.uniform2iv(this.addr,t)}function e1(i,t){i.uniform3iv(this.addr,t)}function n1(i,t){i.uniform4iv(this.addr,t)}function i1(i,t){i.uniform1uiv(this.addr,t)}function s1(i,t){i.uniform2uiv(this.addr,t)}function r1(i,t){i.uniform3uiv(this.addr,t)}function a1(i,t){i.uniform4uiv(this.addr,t)}function o1(i,t,e){const n=this.cache,s=t.length,r=Oa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||D0,r[a])}function c1(i,t,e){const n=this.cache,s=t.length,r=Oa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||U0,r[a])}function l1(i,t,e){const n=this.cache,s=t.length,r=Oa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||O0,r[a])}function h1(i,t,e){const n=this.cache,s=t.length,r=Oa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||N0,r[a])}function u1(i){switch(i){case 5126:return qm;case 35664:return Ym;case 35665:return $m;case 35666:return Km;case 35674:return Zm;case 35675:return jm;case 35676:return Jm;case 5124:case 35670:return Qm;case 35667:case 35671:return t1;case 35668:case 35672:return e1;case 35669:case 35673:return n1;case 5125:return i1;case 36294:return s1;case 36295:return r1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return h1}}class d1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xm(e.type)}}class f1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=u1(e.type)}}class p1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function ih(i,t){i.seq.push(t),i.map[t.id]=t}function m1(i,t,e){const n=i.name,s=n.length;for(xo.lastIndex=0;;){const r=xo.exec(n),a=xo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ih(e,l===void 0?new d1(o,i,t):new f1(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new p1(o),ih(e,u)),e=u}}}class ya{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);m1(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function sh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const g1=37297;let x1=0;function _1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const rh=new te;function M1(i){se._getMatrix(rh,se.workingColorSpace,i);const t=`mat3( ${rh.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case Na:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ah(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+_1(i.getShaderSource(t),a)}else return s}function v1(i,t){const e=M1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function y1(i,t){let e;switch(t){case ku:e="Linear";break;case zu:e="Reinhard";break;case Bu:e="Cineon";break;case Gu:e="ACESFilmic";break;case Vu:e="AgX";break;case Wu:e="Neutral";break;case Hu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zr=new $;function b1(){se.getLuminanceCoefficients(zr);const i=zr.x.toFixed(4),t=zr.y.toFixed(4),e=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function w1(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function E1(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function sr(i){return i!==""}function oh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ch(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const T1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(i){return i.replace(T1,R1)}const A1=new Map;function R1(i,t){let e=ee[t];if(e===void 0){const n=A1.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Tc(e)}const C1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(i){return i.replace(C1,I1)}function I1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function P1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===c0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function L1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vs:case ys:t="ENVMAP_TYPE_CUBE";break;case Da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function D1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function N1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case La:t="ENVMAP_BLENDING_MULTIPLY";break;case Ou:t="ENVMAP_BLENDING_MIX";break;case Fu:t="ENVMAP_BLENDING_ADD";break}return t}function U1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function O1(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=P1(e),l=L1(e),h=D1(e),u=N1(e),d=U1(e),f=S1(e),g=w1(r),M=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(m=[hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?ee.tonemapping_pars_fragment:"",e.toneMapping!==mi?y1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,v1("linearToOutputTexel",e.outputColorSpace),b1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),a=Tc(a),a=oh(a,e),a=ch(a,e),o=Tc(o),o=oh(o,e),o=ch(o,e),a=lh(a),o=lh(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+m+a,v=x+p+o,E=sh(s,s.VERTEX_SHADER,_),w=sh(s,s.FRAGMENT_SHADER,v);s.attachShader(M,E),s.attachShader(M,w),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function T(D){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(M).trim(),B=s.getShaderInfoLog(E).trim(),V=s.getShaderInfoLog(w).trim();let et=!0,U=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,E,w);else{const rt=ah(s,E,"vertex"),k=ah(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+rt+`
`+k)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(B===""||V==="")&&(U=!1);U&&(D.diagnostics={runnable:et,programLog:W,vertexShader:{log:B,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(E),s.deleteShader(w),C=new ya(s,M),b=E1(s,M)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(M,g1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x1++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=w,this}let F1=0;class k1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new z1(t),e.set(t,n)),n}}class z1{constructor(t){this.id=F1++,this.code=t,this.usedTimes=0}}function B1(i,t,e,n,s,r,a){const o=new S0,c=new k1,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,W,B){const V=W.fog,et=B.geometry,U=b.isMeshStandardMaterial?W.environment:null,rt=(b.isMeshStandardMaterial?e:t).get(b.envMap||U),k=rt&&rt.mapping===Da?rt.image.height:null,tt=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const J=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,at=J!==void 0?J.length:0;let j=0;et.morphAttributes.position!==void 0&&(j=1),et.morphAttributes.normal!==void 0&&(j=2),et.morphAttributes.color!==void 0&&(j=3);let Tt,K,ft,yt;if(tt){const he=Ln[tt];Tt=he.vertexShader,K=he.fragmentShader}else Tt=b.vertexShader,K=b.fragmentShader,c.update(b),ft=c.getVertexShaderID(b),yt=c.getFragmentShaderID(b);const lt=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),zt=B.isInstancedMesh===!0,ht=B.isBatchedMesh===!0,Pt=!!b.map,dt=!!b.matcap,Zt=!!rt,N=!!b.aoMap,Ge=!!b.lightMap,Yt=!!b.bumpMap,Jt=!!b.normalMap,Wt=!!b.displacementMap,re=!!b.emissiveMap,Ut=!!b.metalnessMap,P=!!b.roughnessMap,A=b.anisotropy>0,Q=b.clearcoat>0,y=b.dispersion>0,L=b.iridescence>0,I=b.sheen>0,F=b.transmission>0,G=A&&!!b.anisotropyMap,z=Q&&!!b.clearcoatMap,xt=Q&&!!b.clearcoatNormalMap,H=Q&&!!b.clearcoatRoughnessMap,ct=L&&!!b.iridescenceMap,_t=L&&!!b.iridescenceThicknessMap,Mt=I&&!!b.sheenColorMap,mt=I&&!!b.sheenRoughnessMap,bt=!!b.specularMap,Et=!!b.specularColorMap,Bt=!!b.specularIntensityMap,O=F&&!!b.transmissionMap,vt=F&&!!b.thicknessMap,st=!!b.gradientMap,pt=!!b.alphaMap,At=b.alphaTest>0,St=!!b.alphaHash,Xt=!!b.extensions;let Se=mi;b.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Se=i.toneMapping);const Ae={shaderID:tt,shaderType:b.type,shaderName:b.name,vertexShader:Tt,fragmentShader:K,defines:b.defines,customVertexShaderID:ft,customFragmentShaderID:yt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ht,batchingColor:ht&&B._colorsTexture!==null,instancing:zt,instancingColor:zt&&B.instanceColor!==null,instancingMorph:zt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Es,alphaToCoverage:!!b.alphaToCoverage,map:Pt,matcap:dt,envMap:Zt,envMapMode:Zt&&rt.mapping,envMapCubeUVHeight:k,aoMap:N,lightMap:Ge,bumpMap:Yt,normalMap:Jt,displacementMap:d&&Wt,emissiveMap:re,normalMapObjectSpace:Jt&&b.normalMapType===Yu,normalMapTangentSpace:Jt&&b.normalMapType===Wc,metalnessMap:Ut,roughnessMap:P,anisotropy:A,anisotropyMap:G,clearcoat:Q,clearcoatMap:z,clearcoatNormalMap:xt,clearcoatRoughnessMap:H,dispersion:y,iridescence:L,iridescenceMap:ct,iridescenceThicknessMap:_t,sheen:I,sheenColorMap:Mt,sheenRoughnessMap:mt,specularMap:bt,specularColorMap:Et,specularIntensityMap:Bt,transmission:F,transmissionMap:O,thicknessMap:vt,gradientMap:st,opaque:b.transparent===!1&&b.blending===ms&&b.alphaToCoverage===!1,alphaMap:pt,alphaTest:At,alphaHash:St,combine:b.combine,mapUv:Pt&&M(b.map.channel),aoMapUv:N&&M(b.aoMap.channel),lightMapUv:Ge&&M(b.lightMap.channel),bumpMapUv:Yt&&M(b.bumpMap.channel),normalMapUv:Jt&&M(b.normalMap.channel),displacementMapUv:Wt&&M(b.displacementMap.channel),emissiveMapUv:re&&M(b.emissiveMap.channel),metalnessMapUv:Ut&&M(b.metalnessMap.channel),roughnessMapUv:P&&M(b.roughnessMap.channel),anisotropyMapUv:G&&M(b.anisotropyMap.channel),clearcoatMapUv:z&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:xt&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:mt&&M(b.sheenRoughnessMap.channel),specularMapUv:bt&&M(b.specularMap.channel),specularColorMapUv:Et&&M(b.specularColorMap.channel),specularIntensityMapUv:Bt&&M(b.specularIntensityMap.channel),transmissionMapUv:O&&M(b.transmissionMap.channel),thicknessMapUv:vt&&M(b.thicknessMap.channel),alphaMapUv:pt&&M(b.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(Jt||A),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!et.attributes.uv&&(Pt||pt),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Dt,skinning:B.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:j,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:Pt&&b.map.isVideoTexture===!0&&se.getTransfer(b.map.colorSpace)===de,decodeVideoTextureEmissive:re&&b.emissiveMap.isVideoTexture===!0&&se.getTransfer(b.emissiveMap.colorSpace)===de,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fe,flipSided:b.side===Qe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Xt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&b.extensions.multiDraw===!0||ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(x(S,b),_(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function x(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function _(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const S=g[b.type];let D;if(S){const W=Ln[S];D=bd.clone(W.uniforms)}else D=b.uniforms;return D}function E(b,S){let D;for(let W=0,B=h.length;W<B;W++){const V=h[W];if(V.cacheKey===S){D=V,++D.usedTimes;break}}return D===void 0&&(D=new O1(i,S,b,r),h.push(D)),D}function w(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function T(b){c.remove(b)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:C}}function G1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function H1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function uh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function dh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,M,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:M,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=M,p.group=m),t++,p}function o(u,d,f,g,M,m){const p=a(u,d,f,g,M,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,M,m){const p=a(u,d,f,g,M,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||H1),n.length>1&&n.sort(d||uh),s.length>1&&s.sort(d||uh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function V1(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new dh,i.set(n,[a])):s>=r.length?(a=new dh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function W1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new Lt};break;case"SpotLight":e={position:new $,direction:new $,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function X1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let q1=0;function Y1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $1(i){const t=new W1,e=X1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new $);const s=new $,r=new Nt,a=new Nt;function o(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,x=0,_=0,v=0,E=0,w=0,T=0;l.sort(Y1);for(let b=0,S=l.length;b<S;b++){const D=l[b],W=D.color,B=D.intensity,V=D.distance,et=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=W.r*B,u+=W.g*B,d+=W.b*B;else if(D.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(D.sh.coefficients[U],B);T++}else if(D.isDirectionalLight){const U=t.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const rt=D.shadow,k=e.get(D);k.shadowIntensity=rt.intensity,k.shadowBias=rt.bias,k.shadowNormalBias=rt.normalBias,k.shadowRadius=rt.radius,k.shadowMapSize=rt.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=et,n.directionalShadowMatrix[f]=D.shadow.matrix,x++}n.directional[f]=U,f++}else if(D.isSpotLight){const U=t.get(D);U.position.setFromMatrixPosition(D.matrixWorld),U.color.copy(W).multiplyScalar(B),U.distance=V,U.coneCos=Math.cos(D.angle),U.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),U.decay=D.decay,n.spot[M]=U;const rt=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,rt.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[M]=rt.matrix,D.castShadow){const k=e.get(D);k.shadowIntensity=rt.intensity,k.shadowBias=rt.bias,k.shadowNormalBias=rt.normalBias,k.shadowRadius=rt.radius,k.shadowMapSize=rt.mapSize,n.spotShadow[M]=k,n.spotShadowMap[M]=et,v++}M++}else if(D.isRectAreaLight){const U=t.get(D);U.color.copy(W).multiplyScalar(B),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=U,m++}else if(D.isPointLight){const U=t.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),U.distance=D.distance,U.decay=D.decay,D.castShadow){const rt=D.shadow,k=e.get(D);k.shadowIntensity=rt.intensity,k.shadowBias=rt.bias,k.shadowNormalBias=rt.normalBias,k.shadowRadius=rt.radius,k.shadowMapSize=rt.mapSize,k.shadowCameraNear=rt.camera.near,k.shadowCameraFar=rt.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=D.shadow.matrix,_++}n.point[g]=U,g++}else if(D.isHemisphereLight){const U=t.get(D);U.skyColor.copy(D.color).multiplyScalar(B),U.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[p]=U,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==M||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==_||C.numSpotShadows!==v||C.numSpotMaps!==E||C.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=M,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,C.directionalLength=f,C.pointLength=g,C.spotLength=M,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=_,C.numSpotShadows=v,C.numSpotMaps=E,C.numLightProbes=T,n.version=q1++)}function c(l,h){let u=0,d=0,f=0,g=0,M=0;const m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const _=l[p];if(_.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(_.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const v=n.hemi[M];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),M++}}}return{setup:o,setupView:c,state:n}}function fh(i){const t=new $1(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function K1(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new fh(i),t.set(s,[o])):r>=a.length?(o=new fh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Z1 extends vi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class j1 extends vi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const J1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tg(i,t,e){let n=new Yc;const s=new ne,r=new ne,a=new Re,o=new Z1({depthPacking:qu}),c=new j1,l={},h=e.maxTextureSize,u={[gi]:Qe,[Qe]:gi,[fe]:fe},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:J1,fragmentShader:Q1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Be;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ue(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=c0;let p=this.type;this.render=function(w,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),W=i.state;W.setBlending(pi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const B=p!==Xn&&this.type===Xn,V=p===Xn&&this.type!==Xn;for(let et=0,U=w.length;et<U;et++){const rt=w[et],k=rt.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const tt=k.getFrameExtents();if(s.multiply(tt),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,k.mapSize.y=r.y)),k.map===null||B===!0||V===!0){const at=this.type!==Xn?{minFilter:qe,magFilter:qe}:{};k.map!==null&&k.map.dispose(),k.map=new Bi(s.x,s.y,at),k.map.texture.name=rt.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const J=k.getViewportCount();for(let at=0;at<J;at++){const j=k.getViewport(at);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),W.viewport(a),k.updateMatrices(rt,at),n=k.getFrustum(),v(T,C,k.camera,rt,this.type)}k.isPointLightShadow!==!0&&this.type===Xn&&x(k,C),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,D)};function x(w,T){const C=t.update(M);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Bi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,C,d,M,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,C,f,M,null)}function _(w,T,C,b){let S=null;const D=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)S=D;else if(S=C.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const W=S.uuid,B=T.uuid;let V=l[W];V===void 0&&(V={},l[W]=V);let et=V[B];et===void 0&&(et=S.clone(),V[B]=et,T.addEventListener("dispose",E)),S=et}if(S.visible=T.visible,S.wireframe=T.wireframe,b===Xn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=i.properties.get(S);W.light=C}return S}function v(w,T,C,b,S){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Xn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const B=t.update(w),V=w.material;if(Array.isArray(V)){const et=B.groups;for(let U=0,rt=et.length;U<rt;U++){const k=et[U],tt=V[k.materialIndex];if(tt&&tt.visible){const J=_(w,tt,b,S);w.onBeforeShadow(i,w,T,C,B,J,k),i.renderBufferDirect(C,null,B,J,w,k),w.onAfterShadow(i,w,T,C,B,J,k)}}}else if(V.visible){const et=_(w,V,b,S);w.onBeforeShadow(i,w,T,C,B,et,null),i.renderBufferDirect(C,null,B,et,w,null),w.onAfterShadow(i,w,T,C,B,et,null)}}const W=w.children;for(let B=0,V=W.length;B<V;B++)v(W[B],T,C,b,S)}function E(w){w.target.removeEventListener("dispose",E);for(const C in l){const b=l[C],S=w.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const eg={[Vo]:Wo,[Xo]:$o,[qo]:Ko,[Ms]:Yo,[Wo]:Vo,[$o]:Xo,[Ko]:qo,[Yo]:Ms};function ng(i,t){function e(){let O=!1;const vt=new Re;let st=null;const pt=new Re(0,0,0,0);return{setMask:function(At){st!==At&&!O&&(i.colorMask(At,At,At,At),st=At)},setLocked:function(At){O=At},setClear:function(At,St,Xt,Se,Ae){Ae===!0&&(At*=Se,St*=Se,Xt*=Se),vt.set(At,St,Xt,Se),pt.equals(vt)===!1&&(i.clearColor(At,St,Xt,Se),pt.copy(vt))},reset:function(){O=!1,st=null,pt.set(-1,0,0,0)}}}function n(){let O=!1,vt=!1,st=null,pt=null,At=null;return{setReversed:function(St){if(vt!==St){const Xt=t.get("EXT_clip_control");vt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const Se=At;At=null,this.setClear(Se)}vt=St},getReversed:function(){return vt},setTest:function(St){St?lt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(St){st!==St&&!O&&(i.depthMask(St),st=St)},setFunc:function(St){if(vt&&(St=eg[St]),pt!==St){switch(St){case Vo:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case Xo:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case qo:i.depthFunc(i.EQUAL);break;case Yo:i.depthFunc(i.GEQUAL);break;case $o:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=St}},setLocked:function(St){O=St},setClear:function(St){At!==St&&(vt&&(St=1-St),i.clearDepth(St),At=St)},reset:function(){O=!1,st=null,pt=null,At=null,vt=!1}}}function s(){let O=!1,vt=null,st=null,pt=null,At=null,St=null,Xt=null,Se=null,Ae=null;return{setTest:function(he){O||(he?lt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(he){vt!==he&&!O&&(i.stencilMask(he),vt=he)},setFunc:function(he,vn,On){(st!==he||pt!==vn||At!==On)&&(i.stencilFunc(he,vn,On),st=he,pt=vn,At=On)},setOp:function(he,vn,On){(St!==he||Xt!==vn||Se!==On)&&(i.stencilOp(he,vn,On),St=he,Xt=vn,Se=On)},setLocked:function(he){O=he},setClear:function(he){Ae!==he&&(i.clearStencil(he),Ae=he)},reset:function(){O=!1,vt=null,st=null,pt=null,At=null,St=null,Xt=null,Se=null,Ae=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,M=!1,m=null,p=null,x=null,_=null,v=null,E=null,w=null,T=new Lt(0,0,0),C=0,b=!1,S=null,D=null,W=null,B=null,V=null;const et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,rt=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(k)[1]),U=rt>=1):k.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),U=rt>=2);let tt=null,J={};const at=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),Tt=new Re().fromArray(at),K=new Re().fromArray(j);function ft(O,vt,st,pt){const At=new Uint8Array(4),St=i.createTexture();i.bindTexture(O,St),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<st;Xt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(vt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return St}const yt={};yt[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(Ms),Yt(!1),Jt(_l),lt(i.CULL_FACE),N(pi);function lt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Dt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function zt(O,vt){return u[O]!==vt?(i.bindFramebuffer(O,vt),u[O]=vt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function ht(O,vt){let st=f,pt=!1;if(O){st=d.get(vt),st===void 0&&(st=[],d.set(vt,st));const At=O.textures;if(st.length!==At.length||st[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Xt=At.length;St<Xt;St++)st[St]=i.COLOR_ATTACHMENT0+St;st.length=At.length,pt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,pt=!0);pt&&i.drawBuffers(st)}function Pt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const dt={[Ni]:i.FUNC_ADD,[Mu]:i.FUNC_SUBTRACT,[vu]:i.FUNC_REVERSE_SUBTRACT};dt[yu]=i.MIN,dt[bu]=i.MAX;const Zt={[Su]:i.ZERO,[wu]:i.ONE,[Eu]:i.SRC_COLOR,[Go]:i.SRC_ALPHA,[Pu]:i.SRC_ALPHA_SATURATE,[Cu]:i.DST_COLOR,[Au]:i.DST_ALPHA,[Tu]:i.ONE_MINUS_SRC_COLOR,[Ho]:i.ONE_MINUS_SRC_ALPHA,[Iu]:i.ONE_MINUS_DST_COLOR,[Ru]:i.ONE_MINUS_DST_ALPHA,[Lu]:i.CONSTANT_COLOR,[Du]:i.ONE_MINUS_CONSTANT_COLOR,[Nu]:i.CONSTANT_ALPHA,[Uu]:i.ONE_MINUS_CONSTANT_ALPHA};function N(O,vt,st,pt,At,St,Xt,Se,Ae,he){if(O===pi){M===!0&&(Dt(i.BLEND),M=!1);return}if(M===!1&&(lt(i.BLEND),M=!0),O!==_u){if(O!==m||he!==b){if((p!==Ni||v!==Ni)&&(i.blendEquation(i.FUNC_ADD),p=Ni,v=Ni),he)switch(O){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.ONE,i.ONE);break;case Ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,_=null,E=null,w=null,T.set(0,0,0),C=0,m=O,b=he}return}At=At||vt,St=St||st,Xt=Xt||pt,(vt!==p||At!==v)&&(i.blendEquationSeparate(dt[vt],dt[At]),p=vt,v=At),(st!==x||pt!==_||St!==E||Xt!==w)&&(i.blendFuncSeparate(Zt[st],Zt[pt],Zt[St],Zt[Xt]),x=st,_=pt,E=St,w=Xt),(Se.equals(T)===!1||Ae!==C)&&(i.blendColor(Se.r,Se.g,Se.b,Ae),T.copy(Se),C=Ae),m=O,b=!1}function Ge(O,vt){O.side===fe?Dt(i.CULL_FACE):lt(i.CULL_FACE);let st=O.side===Qe;vt&&(st=!st),Yt(st),O.blending===ms&&O.transparent===!1?N(pi):N(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const pt=O.stencilWrite;o.setTest(pt),pt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),re(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(O){S!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),S=O)}function Jt(O){O!==mu?(lt(i.CULL_FACE),O!==D&&(O===_l?i.cullFace(i.BACK):O===gu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),D=O}function Wt(O){O!==W&&(U&&i.lineWidth(O),W=O)}function re(O,vt,st){O?(lt(i.POLYGON_OFFSET_FILL),(B!==vt||V!==st)&&(i.polygonOffset(vt,st),B=vt,V=st)):Dt(i.POLYGON_OFFSET_FILL)}function Ut(O){O?lt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function P(O){O===void 0&&(O=i.TEXTURE0+et-1),tt!==O&&(i.activeTexture(O),tt=O)}function A(O,vt,st){st===void 0&&(tt===null?st=i.TEXTURE0+et-1:st=tt);let pt=J[st];pt===void 0&&(pt={type:void 0,texture:void 0},J[st]=pt),(pt.type!==O||pt.texture!==vt)&&(tt!==st&&(i.activeTexture(st),tt=st),i.bindTexture(O,vt||yt[O]),pt.type=O,pt.texture=vt)}function Q(){const O=J[tt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function I(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function F(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function z(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function H(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(O){Tt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Tt.copy(O))}function mt(O){K.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),K.copy(O))}function bt(O,vt){let st=l.get(vt);st===void 0&&(st=new WeakMap,l.set(vt,st));let pt=st.get(O);pt===void 0&&(pt=i.getUniformBlockIndex(vt,O.name),st.set(O,pt))}function Et(O,vt){const pt=l.get(vt).get(O);c.get(vt)!==pt&&(i.uniformBlockBinding(vt,pt,O.__bindingPointIndex),c.set(vt,pt))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},tt=null,J={},u={},d=new WeakMap,f=[],g=null,M=!1,m=null,p=null,x=null,_=null,v=null,E=null,w=null,T=new Lt(0,0,0),C=0,b=!1,S=null,D=null,W=null,B=null,V=null,Tt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Dt,bindFramebuffer:zt,drawBuffers:ht,useProgram:Pt,setBlending:N,setMaterial:Ge,setFlipSided:Yt,setCullFace:Jt,setLineWidth:Wt,setPolygonOffset:re,setScissorTest:Ut,activeTexture:P,bindTexture:A,unbindTexture:Q,compressedTexImage2D:y,compressedTexImage3D:L,texImage2D:ct,texImage3D:_t,updateUBOMapping:bt,uniformBlockBinding:Et,texStorage2D:xt,texStorage3D:H,texSubImage2D:I,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:z,scissor:Mt,viewport:mt,reset:Bt}}function ph(i,t,e,n){const s=ig(n);switch(e){case p0:return i*t;case g0:return i*t;case x0:return i*t*2;case Bc:return i*t/s.components*s.byteLength;case Gc:return i*t/s.components*s.byteLength;case _0:return i*t*2/s.components*s.byteLength;case Hc:return i*t*2/s.components*s.byteLength;case m0:return i*t*3/s.components*s.byteLength;case Cn:return i*t*4/s.components*s.byteLength;case Vc:return i*t*4/s.components*s.byteLength;case ga:case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _a:case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tc:case nc:return Math.max(i,16)*Math.max(t,8)/4;case Qo:case ec:return Math.max(i,8)*Math.max(t,8)/2;case ic:case sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case cc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case hc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case gc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case va:case vc:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case M0:case bc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Sc:case wc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ig(i){switch(i){case jn:case u0:return{byteLength:1,components:1};case cr:case d0:case hr:return{byteLength:2,components:1};case kc:case zc:return{byteLength:2,components:4};case zi:case Fc:case Dn:return{byteLength:4,components:1};case f0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function sg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ne,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,A){return f?new OffscreenCanvas(P,A):Aa("canvas")}function M(P,A,Q){let y=1;const L=Ut(P);if((L.width>Q||L.height>Q)&&(y=Q/Math.max(L.width,L.height)),y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const I=Math.floor(y*L.width),F=Math.floor(y*L.height);u===void 0&&(u=g(I,F));const G=A?g(I,F):u;return G.width=I,G.height=F,G.getContext("2d").drawImage(P,0,0,I,F),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+I+"x"+F+")."),G}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(P,A,Q,y,L=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let I=A;if(A===i.RED&&(Q===i.FLOAT&&(I=i.R32F),Q===i.HALF_FLOAT&&(I=i.R16F),Q===i.UNSIGNED_BYTE&&(I=i.R8)),A===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(I=i.R8UI),Q===i.UNSIGNED_SHORT&&(I=i.R16UI),Q===i.UNSIGNED_INT&&(I=i.R32UI),Q===i.BYTE&&(I=i.R8I),Q===i.SHORT&&(I=i.R16I),Q===i.INT&&(I=i.R32I)),A===i.RG&&(Q===i.FLOAT&&(I=i.RG32F),Q===i.HALF_FLOAT&&(I=i.RG16F),Q===i.UNSIGNED_BYTE&&(I=i.RG8)),A===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(I=i.RG8UI),Q===i.UNSIGNED_SHORT&&(I=i.RG16UI),Q===i.UNSIGNED_INT&&(I=i.RG32UI),Q===i.BYTE&&(I=i.RG8I),Q===i.SHORT&&(I=i.RG16I),Q===i.INT&&(I=i.RG32I)),A===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(I=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(I=i.RGB16UI),Q===i.UNSIGNED_INT&&(I=i.RGB32UI),Q===i.BYTE&&(I=i.RGB8I),Q===i.SHORT&&(I=i.RGB16I),Q===i.INT&&(I=i.RGB32I)),A===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(I=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(I=i.RGBA16UI),Q===i.UNSIGNED_INT&&(I=i.RGBA32UI),Q===i.BYTE&&(I=i.RGBA8I),Q===i.SHORT&&(I=i.RGBA16I),Q===i.INT&&(I=i.RGBA32I)),A===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(I=i.RGB9_E5),A===i.RGBA){const F=L?Na:se.getTransfer(y);Q===i.FLOAT&&(I=i.RGBA32F),Q===i.HALF_FLOAT&&(I=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(I=F===de?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(I=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(I=i.RGB5_A1)}return(I===i.R16F||I===i.R32F||I===i.RG16F||I===i.RG32F||I===i.RGBA16F||I===i.RGBA32F)&&t.get("EXT_color_buffer_float"),I}function v(P,A){let Q;return P?A===null||A===zi||A===bs?Q=i.DEPTH24_STENCIL8:A===Dn?Q=i.DEPTH32F_STENCIL8:A===cr&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===zi||A===bs?Q=i.DEPTH_COMPONENT24:A===Dn?Q=i.DEPTH_COMPONENT32F:A===cr&&(Q=i.DEPTH_COMPONENT16),Q}function E(P,A){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==qe&&P.minFilter!==hn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function w(P){const A=P.target;A.removeEventListener("dispose",w),C(A),A.isVideoTexture&&h.delete(A)}function T(P){const A=P.target;A.removeEventListener("dispose",T),S(A)}function C(P){const A=n.get(P);if(A.__webglInit===void 0)return;const Q=P.source,y=d.get(Q);if(y){const L=y[A.__cacheKey];L.usedTimes--,L.usedTimes===0&&b(P),Object.keys(y).length===0&&d.delete(Q)}n.remove(P)}function b(P){const A=n.get(P);i.deleteTexture(A.__webglTexture);const Q=P.source,y=d.get(Q);delete y[A.__cacheKey],a.memory.textures--}function S(P){const A=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let y=0;y<6;y++){if(Array.isArray(A.__webglFramebuffer[y]))for(let L=0;L<A.__webglFramebuffer[y].length;L++)i.deleteFramebuffer(A.__webglFramebuffer[y][L]);else i.deleteFramebuffer(A.__webglFramebuffer[y]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[y])}else{if(Array.isArray(A.__webglFramebuffer))for(let y=0;y<A.__webglFramebuffer.length;y++)i.deleteFramebuffer(A.__webglFramebuffer[y]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let y=0;y<A.__webglColorRenderbuffer.length;y++)A.__webglColorRenderbuffer[y]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[y]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Q=P.textures;for(let y=0,L=Q.length;y<L;y++){const I=n.get(Q[y]);I.__webglTexture&&(i.deleteTexture(I.__webglTexture),a.memory.textures--),n.remove(Q[y])}n.remove(P)}let D=0;function W(){D=0}function B(){const P=D;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function V(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function et(P,A){const Q=n.get(P);if(P.isVideoTexture&&Wt(P),P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){const y=P.image;if(y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Q,P,A);return}}e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+A)}function U(P,A){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){K(Q,P,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+A)}function rt(P,A){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){K(Q,P,A);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+A)}function k(P,A){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){ft(Q,P,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+A)}const tt={[Ea]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[Jo]:i.MIRRORED_REPEAT},J={[qe]:i.NEAREST,[h0]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[Ha]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},at={[$u]:i.NEVER,[td]:i.ALWAYS,[Ku]:i.LESS,[v0]:i.LEQUAL,[Zu]:i.EQUAL,[Qu]:i.GEQUAL,[ju]:i.GREATER,[Ju]:i.NOTEQUAL};function j(P,A){if(A.type===Dn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===hn||A.magFilter===Ha||A.magFilter===Mr||A.magFilter===fi||A.minFilter===hn||A.minFilter===Ha||A.minFilter===Mr||A.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,tt[A.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,tt[A.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,tt[A.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,J[A.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,J[A.minFilter]),A.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,at[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===qe||A.minFilter!==Mr&&A.minFilter!==fi||A.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Tt(P,A){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",w));const y=A.source;let L=d.get(y);L===void 0&&(L={},d.set(y,L));const I=V(A);if(I!==P.__cacheKey){L[I]===void 0&&(L[I]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),L[I].usedTimes++;const F=L[P.__cacheKey];F!==void 0&&(L[P.__cacheKey].usedTimes--,F.usedTimes===0&&b(A)),P.__cacheKey=I,P.__webglTexture=L[I].texture}return Q}function K(P,A,Q){let y=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(y=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(y=i.TEXTURE_3D);const L=Tt(P,A),I=A.source;e.bindTexture(y,P.__webglTexture,i.TEXTURE0+Q);const F=n.get(I);if(I.version!==F.__version||L===!0){e.activeTexture(i.TEXTURE0+Q);const G=se.getPrimaries(se.workingColorSpace),z=A.colorSpace===qn?null:se.getPrimaries(A.colorSpace),xt=A.colorSpace===qn||G===z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let H=M(A.image,!1,s.maxTextureSize);H=re(A,H);const ct=r.convert(A.format,A.colorSpace),_t=r.convert(A.type);let Mt=_(A.internalFormat,ct,_t,A.colorSpace,A.isVideoTexture);j(y,A);let mt;const bt=A.mipmaps,Et=A.isVideoTexture!==!0,Bt=F.__version===void 0||L===!0,O=I.dataReady,vt=E(A,H);if(A.isDepthTexture)Mt=v(A.format===Ss,A.type),Bt&&(Et?e.texStorage2D(i.TEXTURE_2D,1,Mt,H.width,H.height):e.texImage2D(i.TEXTURE_2D,0,Mt,H.width,H.height,0,ct,_t,null));else if(A.isDataTexture)if(bt.length>0){Et&&Bt&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,bt[0].width,bt[0].height);for(let st=0,pt=bt.length;st<pt;st++)mt=bt[st],Et?O&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,mt.width,mt.height,ct,_t,mt.data):e.texImage2D(i.TEXTURE_2D,st,Mt,mt.width,mt.height,0,ct,_t,mt.data);A.generateMipmaps=!1}else Et?(Bt&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,H.width,H.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,H.width,H.height,ct,_t,H.data)):e.texImage2D(i.TEXTURE_2D,0,Mt,H.width,H.height,0,ct,_t,H.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Et&&Bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Mt,bt[0].width,bt[0].height,H.depth);for(let st=0,pt=bt.length;st<pt;st++)if(mt=bt[st],A.format!==Cn)if(ct!==null)if(Et){if(O)if(A.layerUpdates.size>0){const At=ph(mt.width,mt.height,A.format,A.type);for(const St of A.layerUpdates){const Xt=mt.data.subarray(St*At/mt.data.BYTES_PER_ELEMENT,(St+1)*At/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,St,mt.width,mt.height,1,ct,Xt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,mt.width,mt.height,H.depth,ct,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Mt,mt.width,mt.height,H.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Et?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,mt.width,mt.height,H.depth,ct,_t,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Mt,mt.width,mt.height,H.depth,0,ct,_t,mt.data)}else{Et&&Bt&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,bt[0].width,bt[0].height);for(let st=0,pt=bt.length;st<pt;st++)mt=bt[st],A.format!==Cn?ct!==null?Et?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,mt.width,mt.height,ct,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Mt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?O&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,mt.width,mt.height,ct,_t,mt.data):e.texImage2D(i.TEXTURE_2D,st,Mt,mt.width,mt.height,0,ct,_t,mt.data)}else if(A.isDataArrayTexture)if(Et){if(Bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Mt,H.width,H.height,H.depth),O)if(A.layerUpdates.size>0){const st=ph(H.width,H.height,A.format,A.type);for(const pt of A.layerUpdates){const At=H.data.subarray(pt*st/H.data.BYTES_PER_ELEMENT,(pt+1)*st/H.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,H.width,H.height,1,ct,_t,At)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,ct,_t,H.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,H.width,H.height,H.depth,0,ct,_t,H.data);else if(A.isData3DTexture)Et?(Bt&&e.texStorage3D(i.TEXTURE_3D,vt,Mt,H.width,H.height,H.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,ct,_t,H.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,H.width,H.height,H.depth,0,ct,_t,H.data);else if(A.isFramebufferTexture){if(Bt)if(Et)e.texStorage2D(i.TEXTURE_2D,vt,Mt,H.width,H.height);else{let st=H.width,pt=H.height;for(let At=0;At<vt;At++)e.texImage2D(i.TEXTURE_2D,At,Mt,st,pt,0,ct,_t,null),st>>=1,pt>>=1}}else if(bt.length>0){if(Et&&Bt){const st=Ut(bt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Mt,st.width,st.height)}for(let st=0,pt=bt.length;st<pt;st++)mt=bt[st],Et?O&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ct,_t,mt):e.texImage2D(i.TEXTURE_2D,st,Mt,ct,_t,mt);A.generateMipmaps=!1}else if(Et){if(Bt){const st=Ut(H);e.texStorage2D(i.TEXTURE_2D,vt,Mt,st.width,st.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,_t,H)}else e.texImage2D(i.TEXTURE_2D,0,Mt,ct,_t,H);m(A)&&p(y),F.__version=I.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ft(P,A,Q){if(A.image.length!==6)return;const y=Tt(P,A),L=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Q);const I=n.get(L);if(L.version!==I.__version||y===!0){e.activeTexture(i.TEXTURE0+Q);const F=se.getPrimaries(se.workingColorSpace),G=A.colorSpace===qn?null:se.getPrimaries(A.colorSpace),z=A.colorSpace===qn||F===G?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);const xt=A.isCompressedTexture||A.image[0].isCompressedTexture,H=A.image[0]&&A.image[0].isDataTexture,ct=[];for(let pt=0;pt<6;pt++)!xt&&!H?ct[pt]=M(A.image[pt],!0,s.maxCubemapSize):ct[pt]=H?A.image[pt].image:A.image[pt],ct[pt]=re(A,ct[pt]);const _t=ct[0],Mt=r.convert(A.format,A.colorSpace),mt=r.convert(A.type),bt=_(A.internalFormat,Mt,mt,A.colorSpace),Et=A.isVideoTexture!==!0,Bt=I.__version===void 0||y===!0,O=L.dataReady;let vt=E(A,_t);j(i.TEXTURE_CUBE_MAP,A);let st;if(xt){Et&&Bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,bt,_t.width,_t.height);for(let pt=0;pt<6;pt++){st=ct[pt].mipmaps;for(let At=0;At<st.length;At++){const St=st[At];A.format!==Cn?Mt!==null?Et?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At,bt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At,0,0,St.width,St.height,Mt,mt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At,bt,St.width,St.height,0,Mt,mt,St.data)}}}else{if(st=A.mipmaps,Et&&Bt){st.length>0&&vt++;const pt=Ut(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,bt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(H){Et?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,ct[pt].width,ct[pt].height,Mt,mt,ct[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,bt,ct[pt].width,ct[pt].height,0,Mt,mt,ct[pt].data);for(let At=0;At<st.length;At++){const Xt=st[At].image[pt].image;Et?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At+1,0,0,Xt.width,Xt.height,Mt,mt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At+1,bt,Xt.width,Xt.height,0,Mt,mt,Xt.data)}}else{Et?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Mt,mt,ct[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,bt,Mt,mt,ct[pt]);for(let At=0;At<st.length;At++){const St=st[At];Et?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At+1,0,0,Mt,mt,St.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At+1,bt,Mt,mt,St.image[pt])}}}m(A)&&p(i.TEXTURE_CUBE_MAP),I.__version=L.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function yt(P,A,Q,y,L,I){const F=r.convert(Q.format,Q.colorSpace),G=r.convert(Q.type),z=_(Q.internalFormat,F,G,Q.colorSpace),xt=n.get(A),H=n.get(Q);if(H.__renderTarget=A,!xt.__hasExternalTextures){const ct=Math.max(1,A.width>>I),_t=Math.max(1,A.height>>I);L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?e.texImage3D(L,I,z,ct,_t,A.depth,0,F,G,null):e.texImage2D(L,I,z,ct,_t,0,F,G,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Jt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,y,L,H.__webglTexture,0,Yt(A)):(L===i.TEXTURE_2D||L>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,y,L,H.__webglTexture,I),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(P,A,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),A.depthBuffer){const y=A.depthTexture,L=y&&y.isDepthTexture?y.type:null,I=v(A.stencilBuffer,L),F=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=Yt(A);Jt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G,I,A.width,A.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,G,I,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,I,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,P)}else{const y=A.textures;for(let L=0;L<y.length;L++){const I=y[L],F=r.convert(I.format,I.colorSpace),G=r.convert(I.type),z=_(I.internalFormat,F,G,I.colorSpace),xt=Yt(A);Q&&Jt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,z,A.width,A.height):Jt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,z,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,z,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const y=n.get(A.depthTexture);y.__renderTarget=A,(!y.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),et(A.depthTexture,0);const L=y.__webglTexture,I=Yt(A);if(A.depthTexture.format===gs)Jt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,L,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,L,0);else if(A.depthTexture.format===Ss)Jt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,L,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,L,0);else throw new Error("Unknown depthTexture format")}function zt(P){const A=n.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const y=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),y){const L=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,y.removeEventListener("dispose",L)};y.addEventListener("dispose",L),A.__depthDisposeCallback=L}A.__boundDepthTexture=y}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Dt(A.__webglFramebuffer,P)}else if(Q){A.__webglDepthbuffer=[];for(let y=0;y<6;y++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[y]),A.__webglDepthbuffer[y]===void 0)A.__webglDepthbuffer[y]=i.createRenderbuffer(),lt(A.__webglDepthbuffer[y],P,!1);else{const L=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=A.__webglDepthbuffer[y];i.bindRenderbuffer(i.RENDERBUFFER,I),i.framebufferRenderbuffer(i.FRAMEBUFFER,L,i.RENDERBUFFER,I)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),lt(A.__webglDepthbuffer,P,!1);else{const y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,L),i.framebufferRenderbuffer(i.FRAMEBUFFER,y,i.RENDERBUFFER,L)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(P,A,Q){const y=n.get(P);A!==void 0&&yt(y.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&zt(P)}function Pt(P){const A=P.texture,Q=n.get(P),y=n.get(A);P.addEventListener("dispose",T);const L=P.textures,I=P.isWebGLCubeRenderTarget===!0,F=L.length>1;if(F||(y.__webglTexture===void 0&&(y.__webglTexture=i.createTexture()),y.__version=A.version,a.memory.textures++),I){Q.__webglFramebuffer=[];for(let G=0;G<6;G++)if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[G]=[];for(let z=0;z<A.mipmaps.length;z++)Q.__webglFramebuffer[G][z]=i.createFramebuffer()}else Q.__webglFramebuffer[G]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let G=0;G<A.mipmaps.length;G++)Q.__webglFramebuffer[G]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(F)for(let G=0,z=L.length;G<z;G++){const xt=n.get(L[G]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Jt(P)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let G=0;G<L.length;G++){const z=L[G];Q.__webglColorRenderbuffer[G]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[G]);const xt=r.convert(z.format,z.colorSpace),H=r.convert(z.type),ct=_(z.internalFormat,xt,H,z.colorSpace,P.isXRRenderTarget===!0),_t=Yt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,ct,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,Q.__webglColorRenderbuffer[G])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(Q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(I){e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture),j(i.TEXTURE_CUBE_MAP,A);for(let G=0;G<6;G++)if(A.mipmaps&&A.mipmaps.length>0)for(let z=0;z<A.mipmaps.length;z++)yt(Q.__webglFramebuffer[G][z],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+G,z);else yt(Q.__webglFramebuffer[G],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);m(A)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(F){for(let G=0,z=L.length;G<z;G++){const xt=L[G],H=n.get(xt);e.bindTexture(i.TEXTURE_2D,H.__webglTexture),j(i.TEXTURE_2D,xt),yt(Q.__webglFramebuffer,P,xt,i.COLOR_ATTACHMENT0+G,i.TEXTURE_2D,0),m(xt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let G=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(G=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(G,y.__webglTexture),j(G,A),A.mipmaps&&A.mipmaps.length>0)for(let z=0;z<A.mipmaps.length;z++)yt(Q.__webglFramebuffer[z],P,A,i.COLOR_ATTACHMENT0,G,z);else yt(Q.__webglFramebuffer,P,A,i.COLOR_ATTACHMENT0,G,0);m(A)&&p(G),e.unbindTexture()}P.depthBuffer&&zt(P)}function dt(P){const A=P.textures;for(let Q=0,y=A.length;Q<y;Q++){const L=A[Q];if(m(L)){const I=x(P),F=n.get(L).__webglTexture;e.bindTexture(I,F),p(I),e.unbindTexture()}}}const Zt=[],N=[];function Ge(P){if(P.samples>0){if(Jt(P)===!1){const A=P.textures,Q=P.width,y=P.height;let L=i.COLOR_BUFFER_BIT;const I=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=n.get(P),G=A.length>1;if(G)for(let z=0;z<A.length;z++)e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,F.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,F.__webglFramebuffer);for(let z=0;z<A.length;z++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(L|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(L|=i.STENCIL_BUFFER_BIT)),G){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,F.__webglColorRenderbuffer[z]);const xt=n.get(A[z]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xt,0)}i.blitFramebuffer(0,0,Q,y,0,0,Q,y,L,i.NEAREST),c===!0&&(Zt.length=0,N.length=0,Zt.push(i.COLOR_ATTACHMENT0+z),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Zt.push(I),N.push(I),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),G)for(let z=0;z<A.length;z++){e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,F.__webglColorRenderbuffer[z]);const xt=n.get(A[z]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.TEXTURE_2D,xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,F.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const A=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Yt(P){return Math.min(s.maxSamples,P.samples)}function Jt(P){const A=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Wt(P){const A=a.render.frame;h.get(P)!==A&&(h.set(P,A),P.update())}function re(P,A){const Q=P.colorSpace,y=P.format,L=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==Es&&Q!==qn&&(se.getTransfer(Q)===de?(y!==Cn||L!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),A}function Ut(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.setTexture2D=et,this.setTexture2DArray=U,this.setTexture3D=rt,this.setTextureCube=k,this.rebindTextures=ht,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Jt}function rg(i,t){function e(n,s=qn){let r;const a=se.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===kc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===f0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===u0)return i.BYTE;if(n===d0)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===Fc)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===hr)return i.HALF_FLOAT;if(n===p0)return i.ALPHA;if(n===m0)return i.RGB;if(n===Cn)return i.RGBA;if(n===g0)return i.LUMINANCE;if(n===x0)return i.LUMINANCE_ALPHA;if(n===gs)return i.DEPTH_COMPONENT;if(n===Ss)return i.DEPTH_STENCIL;if(n===Bc)return i.RED;if(n===Gc)return i.RED_INTEGER;if(n===_0)return i.RG;if(n===Hc)return i.RG_INTEGER;if(n===Vc)return i.RGBA_INTEGER;if(n===ga||n===xa||n===_a||n===Ma)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qo||n===tc||n===ec||n===nc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ic||n===sc||n===rc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ic||n===sc)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ac||n===oc||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===_c||n===Mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ac)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_c)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===va||n===vc||n===yc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===va)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===M0||n===bc||n===Sc||n===wc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class ag extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xn extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const og={type:"move"};class _o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),p=this._getHandJoint(l,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(og)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xi({vertexShader:cg,fragmentShader:lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new Ua(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ug extends Ts{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const M=new hg,m=e.getContextAttributes();let p=null,x=null;const _=[],v=[],E=new ne;let w=null;const T=new gn;T.viewport=new Re;const C=new gn;C.viewport=new Re;const b=[T,C],S=new ag;let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ft=_[K];return ft===void 0&&(ft=new _o,_[K]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(K){let ft=_[K];return ft===void 0&&(ft=new _o,_[K]=ft),ft.getGripSpace()},this.getHand=function(K){let ft=_[K];return ft===void 0&&(ft=new _o,_[K]=ft),ft.getHandSpace()};function B(K){const ft=v.indexOf(K.inputSource);if(ft===-1)return;const yt=_[ft];yt!==void 0&&(yt.update(K.inputSource,K.frame,l||a),yt.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",et);for(let K=0;K<_.length;K++){const ft=v[K];ft!==null&&(v[K]=null,_[K].disconnect(ft))}D=null,W=null,M.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,x=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",V),s.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0){const ft={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Bi(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ft=null,yt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=m.stencil?Ss:gs,yt=m.stencil?bs:zi);const Dt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Bi(d.textureWidth,d.textureHeight,{format:Cn,type:jn,depthTexture:new L0(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Tt.setContext(s),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function et(K){for(let ft=0;ft<K.removed.length;ft++){const yt=K.removed[ft],lt=v.indexOf(yt);lt>=0&&(v[lt]=null,_[lt].disconnect(yt))}for(let ft=0;ft<K.added.length;ft++){const yt=K.added[ft];let lt=v.indexOf(yt);if(lt===-1){for(let zt=0;zt<_.length;zt++)if(zt>=v.length){v.push(yt),lt=zt;break}else if(v[zt]===null){v[zt]=yt,lt=zt;break}if(lt===-1)break}const Dt=_[lt];Dt&&Dt.connect(yt)}}const U=new $,rt=new $;function k(K,ft,yt){U.setFromMatrixPosition(ft.matrixWorld),rt.setFromMatrixPosition(yt.matrixWorld);const lt=U.distanceTo(rt),Dt=ft.projectionMatrix.elements,zt=yt.projectionMatrix.elements,ht=Dt[14]/(Dt[10]-1),Pt=Dt[14]/(Dt[10]+1),dt=(Dt[9]+1)/Dt[5],Zt=(Dt[9]-1)/Dt[5],N=(Dt[8]-1)/Dt[0],Ge=(zt[8]+1)/zt[0],Yt=ht*N,Jt=ht*Ge,Wt=lt/(-N+Ge),re=Wt*-N;if(ft.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(re),K.translateZ(Wt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Dt[10]===-1)K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Ut=ht+Wt,P=Pt+Wt,A=Yt-re,Q=Jt+(lt-re),y=dt*Pt/P*Ut,L=Zt*Pt/P*Ut;K.projectionMatrix.makePerspective(A,Q,y,L,Ut,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function tt(K,ft){ft===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ft.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ft=K.near,yt=K.far;M.texture!==null&&(M.depthNear>0&&(ft=M.depthNear),M.depthFar>0&&(yt=M.depthFar)),S.near=C.near=T.near=ft,S.far=C.far=T.far=yt,(D!==S.near||W!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,W=S.far),T.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,S.layers.mask=T.layers.mask|C.layers.mask;const lt=K.parent,Dt=S.cameras;tt(S,lt);for(let zt=0;zt<Dt.length;zt++)tt(Dt[zt],lt);Dt.length===2?k(S,T,C):S.projectionMatrix.copy(T.projectionMatrix),J(K,S,lt)};function J(K,ft,yt){yt===null?K.matrix.copy(ft.matrixWorld):(K.matrix.copy(yt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ft.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ec*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(S)};let at=null;function j(K,ft){if(h=ft.getViewerPose(l||a),g=ft,h!==null){const yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let lt=!1;yt.length!==S.cameras.length&&(S.cameras.length=0,lt=!0);for(let zt=0;zt<yt.length;zt++){const ht=yt[zt];let Pt=null;if(f!==null)Pt=f.getViewport(ht);else{const Zt=u.getViewSubImage(d,ht);Pt=Zt.viewport,zt===0&&(t.setRenderTargetTextures(x,Zt.colorTexture,d.ignoreDepthValues?void 0:Zt.depthStencilTexture),t.setRenderTarget(x))}let dt=b[zt];dt===void 0&&(dt=new gn,dt.layers.enable(zt),dt.viewport=new Re,b[zt]=dt),dt.matrix.fromArray(ht.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ht.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),zt===0&&(S.matrix.copy(dt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),lt===!0&&S.cameras.push(dt)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const zt=u.getDepthInformation(yt[0]);zt&&zt.isValid&&zt.texture&&M.init(t,zt,s.renderState)}}for(let yt=0;yt<_.length;yt++){const lt=v[yt],Dt=_[yt];lt!==null&&Dt!==void 0&&Dt.update(lt,ft,l||a)}at&&at(K,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),g=null}const Tt=new I0;Tt.setAnimationLoop(j),this.setAnimationLoop=function(K){at=K},this.dispose=function(){}}}const Ai=new _n,dg=new Nt;function fg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,A0(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),_=x.envMap,v=x.envMapRotation;_&&(m.envMap.value=_,Ai.copy(v),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(dg.makeRotationFromEuler(Ai)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function pg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,_){const v=_.program;n.uniformBlockBinding(x,v)}function l(x,_){let v=s[x.id];v===void 0&&(g(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",m));const E=_.program;n.updateUBOMapping(x,E);const w=t.render.frame;r[x.id]!==w&&(d(x),r[x.id]=w)}function h(x){const _=u();x.__bindingPointIndex=_;const v=i.createBuffer(),E=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=s[x.id],v=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,T=v.length;w<T;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,S=C.length;b<S;b++){const D=C[b];if(f(D,w,b,E)===!0){const W=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let et=0;et<B.length;et++){const U=B[et],rt=M(U);typeof U=="number"||typeof U=="boolean"?(D.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,W+V,D.__data)):U.isMatrix3?(D.__data[0]=U.elements[0],D.__data[1]=U.elements[1],D.__data[2]=U.elements[2],D.__data[3]=0,D.__data[4]=U.elements[3],D.__data[5]=U.elements[4],D.__data[6]=U.elements[5],D.__data[7]=0,D.__data[8]=U.elements[6],D.__data[9]=U.elements[7],D.__data[10]=U.elements[8],D.__data[11]=0):(U.toArray(D.__data,V),V+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,_,v,E){const w=x.value,T=_+"_"+v;if(E[T]===void 0)return typeof w=="number"||typeof w=="boolean"?E[T]=w:E[T]=w.clone(),!0;{const C=E[T];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return E[T]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(x){const _=x.uniforms;let v=0;const E=16;for(let T=0,C=_.length;T<C;T++){const b=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,D=b.length;S<D;S++){const W=b[S],B=Array.isArray(W.value)?W.value:[W.value];for(let V=0,et=B.length;V<et;V++){const U=B[V],rt=M(U),k=v%E,tt=k%rt.boundary,J=k+tt;v+=tt,J!==0&&E-J<rt.storage&&(v+=E-J),W.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=rt.storage}}}const w=v%E;return w>0&&(v+=E-w),x.__size=v,x.__cache={},this}function M(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class mg{constructor(t={}){const{canvas:e=nd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),M=new Int32Array(4);let m=null,p=null;const x=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=mi,this.toneMappingExposure=1;const v=this;let E=!1,w=0,T=0,C=null,b=-1,S=null;const D=new Re,W=new Re;let B=null;const V=new Lt(0);let et=0,U=e.width,rt=e.height,k=1,tt=null,J=null;const at=new Re(0,0,U,rt),j=new Re(0,0,U,rt);let Tt=!1;const K=new Yc;let ft=!1,yt=!1;const lt=new Nt,Dt=new Nt,zt=new $,ht=new Re,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Zt(){return C===null?k:1}let N=n;function Ge(R,X){return e.getContext(R,X)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oc}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",St,!1),N===null){const X="webgl2";if(N=Ge(X,R),N===null)throw Ge(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Yt,Jt,Wt,re,Ut,P,A,Q,y,L,I,F,G,z,xt,H,ct,_t,Mt,mt,bt,Et,Bt,O;function vt(){Yt=new vm(N),Yt.init(),Et=new rg(N,Yt),Jt=new pm(N,Yt,t,Et),Wt=new ng(N,Yt),Jt.reverseDepthBuffer&&d&&Wt.buffers.depth.setReversed(!0),re=new Sm(N),Ut=new G1,P=new sg(N,Yt,Wt,Ut,Jt,Et,re),A=new gm(v),Q=new Mm(v),y=new Cd(N),Bt=new dm(N,y),L=new ym(N,y,re,Bt),I=new Em(N,L,y,re),Mt=new wm(N,Jt,P),H=new mm(Ut),F=new B1(v,A,Q,Yt,Jt,Bt,H),G=new fg(v,Ut),z=new V1,xt=new K1(Yt),_t=new um(v,A,Q,Wt,I,f,c),ct=new tg(v,I,Jt),O=new pg(N,re,Jt,Wt),mt=new fm(N,Yt,re),bt=new bm(N,Yt,re),re.programs=F.programs,v.capabilities=Jt,v.extensions=Yt,v.properties=Ut,v.renderLists=z,v.shadowMap=ct,v.state=Wt,v.info=re}vt();const st=new ug(v,N);this.xr=st,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=Yt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Yt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(R){R!==void 0&&(k=R,this.setSize(U,rt,!1))},this.getSize=function(R){return R.set(U,rt)},this.setSize=function(R,X,nt=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,rt=X,e.width=Math.floor(R*k),e.height=Math.floor(X*k),nt===!0&&(e.style.width=R+"px",e.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(U*k,rt*k).floor()},this.setDrawingBufferSize=function(R,X,nt){U=R,rt=X,k=nt,e.width=Math.floor(R*nt),e.height=Math.floor(X*nt),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(at)},this.setViewport=function(R,X,nt,it){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,X,nt,it),Wt.viewport(D.copy(at).multiplyScalar(k).round())},this.getScissor=function(R){return R.copy(j)},this.setScissor=function(R,X,nt,it){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,X,nt,it),Wt.scissor(W.copy(j).multiplyScalar(k).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(R){Wt.setScissorTest(Tt=R)},this.setOpaqueSort=function(R){tt=R},this.setTransparentSort=function(R){J=R},this.getClearColor=function(R){return R.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor.apply(_t,arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha.apply(_t,arguments)},this.clear=function(R=!0,X=!0,nt=!0){let it=0;if(R){let Y=!1;if(C!==null){const wt=C.texture.format;Y=wt===Vc||wt===Hc||wt===Gc}if(Y){const wt=C.texture.type,It=wt===jn||wt===zi||wt===cr||wt===bs||wt===kc||wt===zc,Ot=_t.getClearColor(),Ft=_t.getClearAlpha(),Kt=Ot.r,Qt=Ot.g,kt=Ot.b;It?(g[0]=Kt,g[1]=Qt,g[2]=kt,g[3]=Ft,N.clearBufferuiv(N.COLOR,0,g)):(M[0]=Kt,M[1]=Qt,M[2]=kt,M[3]=Ft,N.clearBufferiv(N.COLOR,0,M))}else it|=N.COLOR_BUFFER_BIT}X&&(it|=N.DEPTH_BUFFER_BIT),nt&&(it|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",St,!1),z.dispose(),xt.dispose(),Ut.dispose(),A.dispose(),Q.dispose(),I.dispose(),Bt.dispose(),O.dispose(),F.dispose(),st.dispose(),st.removeEventListener("sessionstart",hl),st.removeEventListener("sessionend",ul),yi.stop()};function pt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=re.autoReset,X=ct.enabled,nt=ct.autoUpdate,it=ct.needsUpdate,Y=ct.type;vt(),re.autoReset=R,ct.enabled=X,ct.autoUpdate=nt,ct.needsUpdate=it,ct.type=Y}function St(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Xt(R){const X=R.target;X.removeEventListener("dispose",Xt),Se(X)}function Se(R){Ae(R),Ut.remove(R)}function Ae(R){const X=Ut.get(R).programs;X!==void 0&&(X.forEach(function(nt){F.releaseProgram(nt)}),R.isShaderMaterial&&F.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,nt,it,Y,wt){X===null&&(X=Pt);const It=Y.isMesh&&Y.matrixWorld.determinant()<0,Ot=du(R,X,nt,it,Y);Wt.setMaterial(it,It);let Ft=nt.index,Kt=1;if(it.wireframe===!0){if(Ft=L.getWireframeAttribute(nt),Ft===void 0)return;Kt=2}const Qt=nt.drawRange,kt=nt.attributes.position;let ae=Qt.start*Kt,xe=(Qt.start+Qt.count)*Kt;wt!==null&&(ae=Math.max(ae,wt.start*Kt),xe=Math.min(xe,(wt.start+wt.count)*Kt)),Ft!==null?(ae=Math.max(ae,0),xe=Math.min(xe,Ft.count)):kt!=null&&(ae=Math.max(ae,0),xe=Math.min(xe,kt.count));const ve=xe-ae;if(ve<0||ve===1/0)return;Bt.setup(Y,it,Ot,nt,Ft);let en,ce=mt;if(Ft!==null&&(en=y.get(Ft),ce=bt,ce.setIndex(en)),Y.isMesh)it.wireframe===!0?(Wt.setLineWidth(it.wireframeLinewidth*Zt()),ce.setMode(N.LINES)):ce.setMode(N.TRIANGLES);else if(Y.isLine){let Gt=it.linewidth;Gt===void 0&&(Gt=1),Wt.setLineWidth(Gt*Zt()),Y.isLineSegments?ce.setMode(N.LINES):Y.isLineLoop?ce.setMode(N.LINE_LOOP):ce.setMode(N.LINE_STRIP)}else Y.isPoints?ce.setMode(N.POINTS):Y.isSprite&&ce.setMode(N.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ce.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))ce.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Gt=Y._multiDrawStarts,Fn=Y._multiDrawCounts,le=Y._multiDrawCount,yn=Ft?y.get(Ft).bytesPerElement:1,qi=Ut.get(it).currentProgram.getUniforms();for(let rn=0;rn<le;rn++)qi.setValue(N,"_gl_DrawID",rn),ce.render(Gt[rn]/yn,Fn[rn])}else if(Y.isInstancedMesh)ce.renderInstances(ae,ve,Y.count);else if(nt.isInstancedBufferGeometry){const Gt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Fn=Math.min(nt.instanceCount,Gt);ce.renderInstances(ae,ve,Fn)}else ce.render(ae,ve)};function he(R,X,nt){R.transparent===!0&&R.side===fe&&R.forceSinglePass===!1?(R.side=Qe,R.needsUpdate=!0,_r(R,X,nt),R.side=gi,R.needsUpdate=!0,_r(R,X,nt),R.side=fe):_r(R,X,nt)}this.compile=function(R,X,nt=null){nt===null&&(nt=R),p=xt.get(nt),p.init(X),_.push(p),nt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),R!==nt&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();const it=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const wt=Y.material;if(wt)if(Array.isArray(wt))for(let It=0;It<wt.length;It++){const Ot=wt[It];he(Ot,nt,Y),it.add(Ot)}else he(wt,nt,Y),it.add(wt)}),_.pop(),p=null,it},this.compileAsync=function(R,X,nt=null){const it=this.compile(R,X,nt);return new Promise(Y=>{function wt(){if(it.forEach(function(It){Ut.get(It).currentProgram.isReady()&&it.delete(It)}),it.size===0){Y(R);return}setTimeout(wt,10)}Yt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let vn=null;function On(R){vn&&vn(R)}function hl(){yi.stop()}function ul(){yi.start()}const yi=new I0;yi.setAnimationLoop(On),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(R){vn=R,st.setAnimationLoop(R),R===null?yi.stop():yi.start()},st.addEventListener("sessionstart",hl),st.addEventListener("sessionend",ul),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(X),X=st.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,X,C),p=xt.get(R,_.length),p.init(X),_.push(p),Dt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),K.setFromProjectionMatrix(Dt),yt=this.localClippingEnabled,ft=H.init(this.clippingPlanes,yt),m=z.get(R,x.length),m.init(),x.push(m),st.enabled===!0&&st.isPresenting===!0){const wt=v.xr.getDepthSensingMesh();wt!==null&&Ga(wt,X,-1/0,v.sortObjects)}Ga(R,X,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(tt,J),dt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,dt&&_t.addToRenderList(m,R),this.info.render.frame++,ft===!0&&H.beginShadows();const nt=p.state.shadowsArray;ct.render(nt,R,X),ft===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=m.opaque,Y=m.transmissive;if(p.setupLights(),X.isArrayCamera){const wt=X.cameras;if(Y.length>0)for(let It=0,Ot=wt.length;It<Ot;It++){const Ft=wt[It];fl(it,Y,R,Ft)}dt&&_t.render(R);for(let It=0,Ot=wt.length;It<Ot;It++){const Ft=wt[It];dl(m,R,Ft,Ft.viewport)}}else Y.length>0&&fl(it,Y,R,X),dt&&_t.render(R),dl(m,R,X);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,X),Bt.resetDefaultState(),b=-1,S=null,_.pop(),_.length>0?(p=_[_.length-1],ft===!0&&H.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Ga(R,X,nt,it){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)nt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){it&&ht.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Dt);const It=I.update(R),Ot=R.material;Ot.visible&&m.push(R,It,Ot,nt,ht.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const It=I.update(R),Ot=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ht.copy(R.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),ht.copy(It.boundingSphere.center)),ht.applyMatrix4(R.matrixWorld).applyMatrix4(Dt)),Array.isArray(Ot)){const Ft=It.groups;for(let Kt=0,Qt=Ft.length;Kt<Qt;Kt++){const kt=Ft[Kt],ae=Ot[kt.materialIndex];ae&&ae.visible&&m.push(R,It,ae,nt,ht.z,kt)}}else Ot.visible&&m.push(R,It,Ot,nt,ht.z,null)}}const wt=R.children;for(let It=0,Ot=wt.length;It<Ot;It++)Ga(wt[It],X,nt,it)}function dl(R,X,nt,it){const Y=R.opaque,wt=R.transmissive,It=R.transparent;p.setupLightsView(nt),ft===!0&&H.setGlobalState(v.clippingPlanes,nt),it&&Wt.viewport(D.copy(it)),Y.length>0&&xr(Y,X,nt),wt.length>0&&xr(wt,X,nt),It.length>0&&xr(It,X,nt),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function fl(R,X,nt,it){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[it.id]===void 0&&(p.state.transmissionRenderTarget[it.id]=new Bi(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?hr:jn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const wt=p.state.transmissionRenderTarget[it.id],It=it.viewport||D;wt.setSize(It.z,It.w);const Ot=v.getRenderTarget();v.setRenderTarget(wt),v.getClearColor(V),et=v.getClearAlpha(),et<1&&v.setClearColor(16777215,.5),v.clear(),dt&&_t.render(nt);const Ft=v.toneMapping;v.toneMapping=mi;const Kt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),p.setupLightsView(it),ft===!0&&H.setGlobalState(v.clippingPlanes,it),xr(R,nt,it),P.updateMultisampleRenderTarget(wt),P.updateRenderTargetMipmap(wt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let kt=0,ae=X.length;kt<ae;kt++){const xe=X[kt],ve=xe.object,en=xe.geometry,ce=xe.material,Gt=xe.group;if(ce.side===fe&&ve.layers.test(it.layers)){const Fn=ce.side;ce.side=Qe,ce.needsUpdate=!0,pl(ve,nt,it,en,ce,Gt),ce.side=Fn,ce.needsUpdate=!0,Qt=!0}}Qt===!0&&(P.updateMultisampleRenderTarget(wt),P.updateRenderTargetMipmap(wt))}v.setRenderTarget(Ot),v.setClearColor(V,et),Kt!==void 0&&(it.viewport=Kt),v.toneMapping=Ft}function xr(R,X,nt){const it=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,wt=R.length;Y<wt;Y++){const It=R[Y],Ot=It.object,Ft=It.geometry,Kt=it===null?It.material:it,Qt=It.group;Ot.layers.test(nt.layers)&&pl(Ot,X,nt,Ft,Kt,Qt)}}function pl(R,X,nt,it,Y,wt){R.onBeforeRender(v,X,nt,it,Y,wt),R.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(v,X,nt,it,R,wt),Y.transparent===!0&&Y.side===fe&&Y.forceSinglePass===!1?(Y.side=Qe,Y.needsUpdate=!0,v.renderBufferDirect(nt,X,it,Y,R,wt),Y.side=gi,Y.needsUpdate=!0,v.renderBufferDirect(nt,X,it,Y,R,wt),Y.side=fe):v.renderBufferDirect(nt,X,it,Y,R,wt),R.onAfterRender(v,X,nt,it,Y,wt)}function _r(R,X,nt){X.isScene!==!0&&(X=Pt);const it=Ut.get(R),Y=p.state.lights,wt=p.state.shadowsArray,It=Y.state.version,Ot=F.getParameters(R,Y.state,wt,X,nt),Ft=F.getProgramCacheKey(Ot);let Kt=it.programs;it.environment=R.isMeshStandardMaterial?X.environment:null,it.fog=X.fog,it.envMap=(R.isMeshStandardMaterial?Q:A).get(R.envMap||it.environment),it.envMapRotation=it.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,Kt===void 0&&(R.addEventListener("dispose",Xt),Kt=new Map,it.programs=Kt);let Qt=Kt.get(Ft);if(Qt!==void 0){if(it.currentProgram===Qt&&it.lightsStateVersion===It)return gl(R,Ot),Qt}else Ot.uniforms=F.getUniforms(R),R.onBeforeCompile(Ot,v),Qt=F.acquireProgram(Ot,Ft),Kt.set(Ft,Qt),it.uniforms=Ot.uniforms;const kt=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(kt.clippingPlanes=H.uniform),gl(R,Ot),it.needsLights=pu(R),it.lightsStateVersion=It,it.needsLights&&(kt.ambientLightColor.value=Y.state.ambient,kt.lightProbe.value=Y.state.probe,kt.directionalLights.value=Y.state.directional,kt.directionalLightShadows.value=Y.state.directionalShadow,kt.spotLights.value=Y.state.spot,kt.spotLightShadows.value=Y.state.spotShadow,kt.rectAreaLights.value=Y.state.rectArea,kt.ltc_1.value=Y.state.rectAreaLTC1,kt.ltc_2.value=Y.state.rectAreaLTC2,kt.pointLights.value=Y.state.point,kt.pointLightShadows.value=Y.state.pointShadow,kt.hemisphereLights.value=Y.state.hemi,kt.directionalShadowMap.value=Y.state.directionalShadowMap,kt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,kt.spotShadowMap.value=Y.state.spotShadowMap,kt.spotLightMatrix.value=Y.state.spotLightMatrix,kt.spotLightMap.value=Y.state.spotLightMap,kt.pointShadowMap.value=Y.state.pointShadowMap,kt.pointShadowMatrix.value=Y.state.pointShadowMatrix),it.currentProgram=Qt,it.uniformsList=null,Qt}function ml(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=ya.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function gl(R,X){const nt=Ut.get(R);nt.outputColorSpace=X.outputColorSpace,nt.batching=X.batching,nt.batchingColor=X.batchingColor,nt.instancing=X.instancing,nt.instancingColor=X.instancingColor,nt.instancingMorph=X.instancingMorph,nt.skinning=X.skinning,nt.morphTargets=X.morphTargets,nt.morphNormals=X.morphNormals,nt.morphColors=X.morphColors,nt.morphTargetsCount=X.morphTargetsCount,nt.numClippingPlanes=X.numClippingPlanes,nt.numIntersection=X.numClipIntersection,nt.vertexAlphas=X.vertexAlphas,nt.vertexTangents=X.vertexTangents,nt.toneMapping=X.toneMapping}function du(R,X,nt,it,Y){X.isScene!==!0&&(X=Pt),P.resetTextureUnits();const wt=X.fog,It=it.isMeshStandardMaterial?X.environment:null,Ot=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Es,Ft=(it.isMeshStandardMaterial?Q:A).get(it.envMap||It),Kt=it.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,Qt=!!nt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),kt=!!nt.morphAttributes.position,ae=!!nt.morphAttributes.normal,xe=!!nt.morphAttributes.color;let ve=mi;it.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ve=v.toneMapping);const en=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,ce=en!==void 0?en.length:0,Gt=Ut.get(it),Fn=p.state.lights;if(ft===!0&&(yt===!0||R!==S)){const dn=R===S&&it.id===b;H.setState(it,R,dn)}let le=!1;it.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Fn.state.version||Gt.outputColorSpace!==Ot||Y.isBatchedMesh&&Gt.batching===!1||!Y.isBatchedMesh&&Gt.batching===!0||Y.isBatchedMesh&&Gt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Gt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Gt.instancing===!1||!Y.isInstancedMesh&&Gt.instancing===!0||Y.isSkinnedMesh&&Gt.skinning===!1||!Y.isSkinnedMesh&&Gt.skinning===!0||Y.isInstancedMesh&&Gt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Gt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Gt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Gt.instancingMorph===!1&&Y.morphTexture!==null||Gt.envMap!==Ft||it.fog===!0&&Gt.fog!==wt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==H.numPlanes||Gt.numIntersection!==H.numIntersection)||Gt.vertexAlphas!==Kt||Gt.vertexTangents!==Qt||Gt.morphTargets!==kt||Gt.morphNormals!==ae||Gt.morphColors!==xe||Gt.toneMapping!==ve||Gt.morphTargetsCount!==ce)&&(le=!0):(le=!0,Gt.__version=it.version);let yn=Gt.currentProgram;le===!0&&(yn=_r(it,X,Y));let qi=!1,rn=!1,Fs=!1;const ye=yn.getUniforms(),Pn=Gt.uniforms;if(Wt.useProgram(yn.program)&&(qi=!0,rn=!0,Fs=!0),it.id!==b&&(b=it.id,rn=!0),qi||S!==R){Wt.buffers.depth.getReversed()?(lt.copy(R.projectionMatrix),sd(lt),rd(lt),ye.setValue(N,"projectionMatrix",lt)):ye.setValue(N,"projectionMatrix",R.projectionMatrix),ye.setValue(N,"viewMatrix",R.matrixWorldInverse);const Qn=ye.map.cameraPosition;Qn!==void 0&&Qn.setValue(N,zt.setFromMatrixPosition(R.matrixWorld)),Jt.logarithmicDepthBuffer&&ye.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&ye.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,rn=!0,Fs=!0)}if(Y.isSkinnedMesh){ye.setOptional(N,Y,"bindMatrix"),ye.setOptional(N,Y,"bindMatrixInverse");const dn=Y.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),ye.setValue(N,"boneTexture",dn.boneTexture,P))}Y.isBatchedMesh&&(ye.setOptional(N,Y,"batchingTexture"),ye.setValue(N,"batchingTexture",Y._matricesTexture,P),ye.setOptional(N,Y,"batchingIdTexture"),ye.setValue(N,"batchingIdTexture",Y._indirectTexture,P),ye.setOptional(N,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ye.setValue(N,"batchingColorTexture",Y._colorsTexture,P));const ks=nt.morphAttributes;if((ks.position!==void 0||ks.normal!==void 0||ks.color!==void 0)&&Mt.update(Y,nt,yn),(rn||Gt.receiveShadow!==Y.receiveShadow)&&(Gt.receiveShadow=Y.receiveShadow,ye.setValue(N,"receiveShadow",Y.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Pn.envMap.value=Ft,Pn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&X.environment!==null&&(Pn.envMapIntensity.value=X.environmentIntensity),rn&&(ye.setValue(N,"toneMappingExposure",v.toneMappingExposure),Gt.needsLights&&fu(Pn,Fs),wt&&it.fog===!0&&G.refreshFogUniforms(Pn,wt),G.refreshMaterialUniforms(Pn,it,k,rt,p.state.transmissionRenderTarget[R.id]),ya.upload(N,ml(Gt),Pn,P)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(ya.upload(N,ml(Gt),Pn,P),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&ye.setValue(N,"center",Y.center),ye.setValue(N,"modelViewMatrix",Y.modelViewMatrix),ye.setValue(N,"normalMatrix",Y.normalMatrix),ye.setValue(N,"modelMatrix",Y.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const dn=it.uniformsGroups;for(let Qn=0,ti=dn.length;Qn<ti;Qn++){const xl=dn[Qn];O.update(xl,yn),O.bind(xl,yn)}}return yn}function fu(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function pu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,X,nt){Ut.get(R.texture).__webglTexture=X,Ut.get(R.depthTexture).__webglTexture=nt;const it=Ut.get(R);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=nt===void 0,it.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const nt=Ut.get(R);nt.__webglFramebuffer=X,nt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,nt=0){C=R,w=X,T=nt;let it=!0,Y=null,wt=!1,It=!1;if(R){const Ft=Ut.get(R);if(Ft.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(N.FRAMEBUFFER,null),it=!1;else if(Ft.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(Ft.__hasExternalTextures)P.rebindTextures(R,Ut.get(R.texture).__webglTexture,Ut.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const kt=R.depthTexture;if(Ft.__boundDepthTexture!==kt){if(kt!==null&&Ut.has(kt)&&(R.width!==kt.image.width||R.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}const Kt=R.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(It=!0);const Qt=Ut.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qt[X])?Y=Qt[X][nt]:Y=Qt[X],wt=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?Y=Ut.get(R).__webglMultisampledFramebuffer:Array.isArray(Qt)?Y=Qt[nt]:Y=Qt,D.copy(R.viewport),W.copy(R.scissor),B=R.scissorTest}else D.copy(at).multiplyScalar(k).floor(),W.copy(j).multiplyScalar(k).floor(),B=Tt;if(Wt.bindFramebuffer(N.FRAMEBUFFER,Y)&&it&&Wt.drawBuffers(R,Y),Wt.viewport(D),Wt.scissor(W),Wt.setScissorTest(B),wt){const Ft=Ut.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ft.__webglTexture,nt)}else if(It){const Ft=Ut.get(R.texture),Kt=X||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ft.__webglTexture,nt||0,Kt)}b=-1},this.readRenderTargetPixels=function(R,X,nt,it,Y,wt,It){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Ut.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Ot=Ot[It]),Ot){Wt.bindFramebuffer(N.FRAMEBUFFER,Ot);try{const Ft=R.texture,Kt=Ft.format,Qt=Ft.type;if(!Jt.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-it&&nt>=0&&nt<=R.height-Y&&N.readPixels(X,nt,it,Y,Et.convert(Kt),Et.convert(Qt),wt)}finally{const Ft=C!==null?Ut.get(C).__webglFramebuffer:null;Wt.bindFramebuffer(N.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(R,X,nt,it,Y,wt,It){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Ut.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Ot=Ot[It]),Ot){const Ft=R.texture,Kt=Ft.format,Qt=Ft.type;if(!Jt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-it&&nt>=0&&nt<=R.height-Y){Wt.bindFramebuffer(N.FRAMEBUFFER,Ot);const kt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,kt),N.bufferData(N.PIXEL_PACK_BUFFER,wt.byteLength,N.STREAM_READ),N.readPixels(X,nt,it,Y,Et.convert(Kt),Et.convert(Qt),0);const ae=C!==null?Ut.get(C).__webglFramebuffer:null;Wt.bindFramebuffer(N.FRAMEBUFFER,ae);const xe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await id(N,xe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,kt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,wt),N.deleteBuffer(kt),N.deleteSync(xe),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,nt=0){R.isTexture!==!0&&(ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);const it=Math.pow(2,-nt),Y=Math.floor(R.image.width*it),wt=Math.floor(R.image.height*it),It=X!==null?X.x:0,Ot=X!==null?X.y:0;P.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,nt,0,0,It,Ot,Y,wt),Wt.unbindTexture()},this.copyTextureToTexture=function(R,X,nt=null,it=null,Y=0){R.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,R=arguments[1],X=arguments[2],Y=arguments[3]||0,nt=null);let wt,It,Ot,Ft,Kt,Qt,kt,ae,xe;const ve=R.isCompressedTexture?R.mipmaps[Y]:R.image;nt!==null?(wt=nt.max.x-nt.min.x,It=nt.max.y-nt.min.y,Ot=nt.isBox3?nt.max.z-nt.min.z:1,Ft=nt.min.x,Kt=nt.min.y,Qt=nt.isBox3?nt.min.z:0):(wt=ve.width,It=ve.height,Ot=ve.depth||1,Ft=0,Kt=0,Qt=0),it!==null?(kt=it.x,ae=it.y,xe=it.z):(kt=0,ae=0,xe=0);const en=Et.convert(X.format),ce=Et.convert(X.type);let Gt;X.isData3DTexture?(P.setTexture3D(X,0),Gt=N.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(P.setTexture2DArray(X,0),Gt=N.TEXTURE_2D_ARRAY):(P.setTexture2D(X,0),Gt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);const Fn=N.getParameter(N.UNPACK_ROW_LENGTH),le=N.getParameter(N.UNPACK_IMAGE_HEIGHT),yn=N.getParameter(N.UNPACK_SKIP_PIXELS),qi=N.getParameter(N.UNPACK_SKIP_ROWS),rn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ve.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ve.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ft),N.pixelStorei(N.UNPACK_SKIP_ROWS,Kt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qt);const Fs=R.isDataArrayTexture||R.isData3DTexture,ye=X.isDataArrayTexture||X.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Pn=Ut.get(R),ks=Ut.get(X),dn=Ut.get(Pn.__renderTarget),Qn=Ut.get(ks.__renderTarget);Wt.bindFramebuffer(N.READ_FRAMEBUFFER,dn.__webglFramebuffer),Wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let ti=0;ti<Ot;ti++)Fs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ut.get(R).__webglTexture,Y,Qt+ti),R.isDepthTexture?(ye&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ut.get(X).__webglTexture,Y,xe+ti),N.blitFramebuffer(Ft,Kt,wt,It,kt,ae,wt,It,N.DEPTH_BUFFER_BIT,N.NEAREST)):ye?N.copyTexSubImage3D(Gt,Y,kt,ae,xe+ti,Ft,Kt,wt,It):N.copyTexSubImage2D(Gt,Y,kt,ae,xe+ti,Ft,Kt,wt,It);Wt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ye?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(Gt,Y,kt,ae,xe,wt,It,Ot,en,ce,ve.data):X.isCompressedArrayTexture?N.compressedTexSubImage3D(Gt,Y,kt,ae,xe,wt,It,Ot,en,ve.data):N.texSubImage3D(Gt,Y,kt,ae,xe,wt,It,Ot,en,ce,ve):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Y,kt,ae,wt,It,en,ce,ve.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Y,kt,ae,ve.width,ve.height,en,ve.data):N.texSubImage2D(N.TEXTURE_2D,Y,kt,ae,wt,It,en,ce,ve);N.pixelStorei(N.UNPACK_ROW_LENGTH,Fn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le),N.pixelStorei(N.UNPACK_SKIP_PIXELS,yn),N.pixelStorei(N.UNPACK_SKIP_ROWS,qi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,rn),Y===0&&X.generateMipmaps&&N.generateMipmap(Gt),Wt.unbindTexture()},this.copyTextureToTexture3D=function(R,X,nt=null,it=null,Y=0){return R.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,it=arguments[1]||null,R=arguments[2],X=arguments[3],Y=arguments[4]||0),ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,nt,it,Y)},this.initRenderTarget=function(R){Ut.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Wt.unbindTexture()},this.resetState=function(){w=0,T=0,C=null,Wt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}class Kc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new Kc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gg extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class F0 extends Ye{constructor(t=null,e=1,n=1,s,r,a,o,c,l=qe,h=qe,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mh extends Xe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const os=new Nt,gh=new Nt,Br=[],xh=new Wi,xg=new Nt,Ws=new ue,Xs=new Xi;class k0 extends ue{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new mh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),xh.copy(t.boundingBox).applyMatrix4(os),this.boundingBox.union(xh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),Xs.copy(t.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(n),t.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),gh.multiplyMatrices(n,os),Ws.matrixWorld=gh,Ws.raycast(t,Br);for(let a=0,o=Br.length;a<o;a++){const c=Br[a];c.instanceId=r,c.object=this,e.push(c)}Br.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new mh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new F0(new Float32Array(s*this.count),s,this.count,Bc,Dn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Zc extends vi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ra=new $,Ca=new $,_h=new Nt,qs=new qc,Gr=new Xi,Mo=new $,Mh=new $;class _g extends Le{constructor(t=new Be,e=new Zc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ra.fromBufferAttribute(e,s-1),Ca.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ra.distanceTo(Ca);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,t.ray.intersectsSphere(Gr)===!1)return;_h.copy(s).invert(),qs.copy(t.ray).applyMatrix4(_h);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=f,m=g-1;M<m;M+=l){const p=h.getX(M),x=h.getX(M+1),_=Hr(this,t,qs,c,p,x);_&&e.push(_)}if(this.isLineLoop){const M=h.getX(g-1),m=h.getX(f),p=Hr(this,t,qs,c,M,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let M=f,m=g-1;M<m;M+=l){const p=Hr(this,t,qs,c,M,M+1);p&&e.push(p)}if(this.isLineLoop){const M=Hr(this,t,qs,c,g-1,f);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Hr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Ra.fromBufferAttribute(a,s),Ca.fromBufferAttribute(a,r),e.distanceSqToSegment(Ra,Ca,Mo,Mh)>n)return;Mo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Mo);if(!(c<t.near||c>t.far))return{distance:c,point:Mh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const vh=new $,yh=new $;class z0 extends _g{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)vh.fromBufferAttribute(e,s),yh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vh.distanceTo(yh);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class B0 extends vi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const bh=new Nt,Ac=new qc,Vr=new Xi,Wr=new $;class Mg extends Le{constructor(t=new Be,e=new B0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,t.ray.intersectsSphere(Vr)===!1)return;bh.copy(s).invert(),Ac.copy(t.ray).applyMatrix4(bh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,M=f;g<M;g++){const m=l.getX(g);Wr.fromBufferAttribute(u,m),Sh(Wr,m,c,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,M=f;g<M;g++)Wr.fromBufferAttribute(u,g),Sh(Wr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sh(i,t,e,n,s,r,a){const o=Ac.distanceSqToPoint(i);if(o<e){const c=new $;Ac.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class fr extends Ye{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jc extends Be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const M=[],m=n/2;let p=0;x(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function x(){const v=new $,E=new $;let w=0;const T=(e-t)/n;for(let C=0;C<=r;C++){const b=[],S=C/r,D=S*(e-t)+t;for(let W=0;W<=s;W++){const B=W/s,V=B*c+o,et=Math.sin(V),U=Math.cos(V);E.x=D*et,E.y=-S*n+m,E.z=D*U,u.push(E.x,E.y,E.z),v.set(et,T,U).normalize(),d.push(v.x,v.y,v.z),f.push(B,1-S),b.push(g++)}M.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){const S=M[b][C],D=M[b+1][C],W=M[b+1][C+1],B=M[b][C+1];(t>0||b!==0)&&(h.push(S,D,B),w+=3),(e>0||b!==r-1)&&(h.push(D,W,B),w+=3)}l.addGroup(p,w,0),p+=w}function _(v){const E=g,w=new ne,T=new $;let C=0;const b=v===!0?t:e,S=v===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const D=g;for(let W=0;W<=s;W++){const V=W/s*c+o,et=Math.cos(V),U=Math.sin(V);T.x=b*U,T.y=m*S,T.z=b*et,u.push(T.x,T.y,T.z),d.push(0,S,0),w.x=et*.5+.5,w.y=U*.5*S+.5,f.push(w.x,w.y),g++}for(let W=0;W<s;W++){const B=E+W,V=D+W;v===!0?h.push(V,V+1,B):h.push(V+1,V,B),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jc extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const _=new $,v=new $,E=new $;for(let w=0;w<e.length;w+=3)f(e[w+0],_),f(e[w+1],v),f(e[w+2],E),c(_,v,E,x)}function c(x,_,v,E){const w=E+1,T=[];for(let C=0;C<=w;C++){T[C]=[];const b=x.clone().lerp(v,C/w),S=_.clone().lerp(v,C/w),D=w-C;for(let W=0;W<=D;W++)W===0&&C===w?T[C][W]=b:T[C][W]=b.clone().lerp(S,W/D)}for(let C=0;C<w;C++)for(let b=0;b<2*(w-C)-1;b++){const S=Math.floor(b/2);b%2===0?(d(T[C][S+1]),d(T[C+1][S]),d(T[C][S])):(d(T[C][S+1]),d(T[C+1][S+1]),d(T[C+1][S]))}}function l(x){const _=new $;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(x),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){const x=new $;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];const v=m(x)/2/Math.PI+.5,E=p(x)/Math.PI+.5;a.push(v,1-E)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const _=a[x+0],v=a[x+2],E=a[x+4],w=Math.max(_,v,E),T=Math.min(_,v,E);w>.9&&T<.1&&(_<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),E<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,_){const v=x*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function g(){const x=new $,_=new $,v=new $,E=new $,w=new ne,T=new ne,C=new ne;for(let b=0,S=0;b<r.length;b+=9,S+=6){x.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),w.set(a[S+0],a[S+1]),T.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),E.copy(x).add(_).add(v).divideScalar(3);const D=m(E);M(w,S+0,x,D),M(T,S+2,_,D),M(C,S+4,v,D)}}function M(x,_,v,E){E<0&&x.x===1&&(a[_]=x.x-1),v.x===0&&v.z===0&&(a[_]=E/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.vertices,t.indices,t.radius,t.details)}}class Qc extends Jc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qc(t.radius,t.detail)}}class tl extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new $,d=new $,f=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){const x=[],_=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){const w=E/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),M.push(d.x,d.y,d.z),m.push(w+v,1-_),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const _=h[p][x+1],v=h[p][x],E=h[p+1][x],w=h[p+1][x+1];(p!==0||a>0)&&f.push(_,v,w),(p!==n-1||c<Math.PI)&&f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(M,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Rc extends vi{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Lt(16777215),this.specular=new Lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wc,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ba extends vi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wc,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class el extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class vg extends el{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const vo=new Nt,wh=new $,Eh=new $;class yg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yc,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(wh),Eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eh),e.updateMatrixWorld(),vo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class bg extends yg{constructor(){super(new P0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sg extends el{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new bg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Th extends el{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);const me=[0,4,7,11],oe=[0,3,7,10],we=[0,4,7],Ri=[0,3,7],En=[0,4,7,10],G0={miami:{name:"COASTLINE RUSH",bpm:138,chords:[["D",me],["G",me],["E",oe],["A",we],["D",me],["B",oe],["G",me],["A",we],["B",oe],["F#",oe],["G",me],["D",we],["E",oe],["A",we],["G",me],["A",En]],lead:["F#5 . . A5 . . C#6 . B5 . A5 . F#5 . E5 .","D5 . . . . . B4 . D5 . E5 . F#5 . . .","G5 . . F#5 . . E5 . D5 . E5 . G5 . B5 .","A5 . . . . . . . - - E5 F#5 G5 . A5 .","F#5 . . A5 . . D6 . C#6 . A5 . F#5 . A5 .","B5 . . A5 . . F#5 . D5 . . . B4 . D5 .","E5 . . F#5 . . G5 . A5 . B5 . A5 . G5 .","E5 . . . . . . . - - - - C#5 . E5 .","D6 . . C#6 . . B5 . . . F#5 . . . A5 .","C#6 . . B5 . . A5 . . . E5 . . . F#5 .","B5 . . A5 . . G5 . F#5 . G5 . A5 . B5 .","A5 . . . . . F#5 . . . D5 . . . - -","G5 . . A5 . . B5 . . . D6 . . . E6 .","C#6 . . . . . A5 . . . E5 . . . - -","D6 . . C#6 . . B5 . A5 . G5 . F#5 . G5 .","A5 . . . . . . . . . . . G5 . E5 ."],bass:[0,null,12,null,0,null,12,0,null,0,12,null,0,null,12,7],kick:[0,6,8],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"square"},tokyo:{name:"NEON EXPRESSWAY",bpm:144,chords:[["F",me],["G",we],["E",oe],["A",Ri],["F",me],["G",we],["E",En],["A",Ri],["D",oe],["G",we],["C",me],["A",oe],["D",oe],["E",oe],["F",me],["E",En]],lead:["A5 . . C6 . . E6 . . . D6 . C6 . A5 .","B5 . . . . . G5 . . . D5 . G5 . B5 .","C6 . . B5 . . G5 . E5 . . . G5 . B5 .","A5 . . . . . . . E5 . A5 . C6 . E6 .","F6 . . E6 . . C6 . . . A5 . C6 . E6 .","D6 . . . . . B5 . . . G5 . B5 . D6 .","E6 . . D6 . . B5 . G#5 . . . E5 . G#5 .","A5 . . . . . . . . . . . - - - -","D6 . F6 . A6 . F6 . D6 . . . C6 . A5 .","B5 . D6 . G6 . D6 . B5 . . . A5 . G5 .","E6 . G6 . . . E6 . C6 . . . B5 . C6 .","A5 . . . . . E5 . . . A5 . . . - -","F5 . A5 . D6 . . . C6 . A5 . F5 . A5 .","G5 . B5 . E6 . . . D6 . B5 . G5 . B5 .","C6 . . . A5 . . . C6 . . . F6 . . .","E6 . . . . . D6 . . . B5 . . . G#5 ."],bass:[0,0,12,0,0,12,0,7,0,0,12,0,10,12,7,12],kick:[0,3,8,11],snare:[4,12],hat:[2,6,10,14],leadWave:"sawtooth"},title:{name:"TITLE",bpm:128,chords:[["C",me],["A",oe],["F",me],["G",we]],lead:["E5 . G5 . B5 . . . C6 . B5 . G5 . . .","C6 . . . A5 . . . E5 . . . G5 . A5 .","A5 . . . F5 . . . C6 . . . A5 . . .","B5 . . . D6 . . . G5 . . . - - - -"],bass:[0,null,12,null,0,null,12,null,0,null,12,null,0,7,12,7],kick:[0,8],snare:[4,12],hat:[2,6,10,14],leadWave:"square"},palm:{name:"PALM DRIVE",bpm:116,chords:[["A",me],["F#",oe],["D",me],["E",we],["A",me],["C#",oe],["D",me],["E",we]],lead:["E5 . . . C#5 . . . E5 . F#5 . G#5 . . .","A5 . . . . . . . F#5 . E5 . C#5 . . .","D5 . . . F#5 . . . A5 . . . C#6 . B5 .","B5 . . . . . . . G#5 . . . E5 . . .","E5 . . . C#5 . . . E5 . F#5 . A5 . . .","G#5 . . . E5 . . . C#5 . E5 . G#5 . . .","F#5 . . . A5 . . . D6 . . . C#6 . A5 .","B5 . . . . . . . - - G#5 . A5 . B5 ."],bass:[0,null,0,null,0,null,12,null,0,null,0,null,0,null,12,7],kick:[0,8,10],snare:[4,12],hat:[2,6,10,14],leadWave:"saw2",pad:!0,arp:{pattern:[0,1,2,3,4,3,2,1],wave:"square",oct:5},gated:!0,stabs:!1},signal:{name:"NIGHT SIGNAL",bpm:128,chords:[["D",Ri],["A#",we],["C",we],["A",Ri],["D",oe],["A#",me],["G",oe],["A",we]],lead:["A5 . . D6 . . F6 . E6 . D6 . C6 . A5 .","A#5 . . . . . F5 . . . A#5 . D6 . . .","C6 . . E6 . . G6 . F6 . E6 . C6 . . .","E6 . . . . . . . - - A5 . C6 . E6 .","F6 . . E6 . . D6 . A5 . . . D6 . F6 .","G6 . . F6 . . D6 . A#5 . . . F5 . . .","G5 . . A#5 . . D6 . G6 . . . F6 . D6 .","C#6 . . . . . E6 . . . A5 . . . - -"],bass:[0,0,12,0,0,0,12,0,0,0,12,0,0,12,0,12],kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14],leadWave:"fm",pad:!0,gated:!0,stabs:!1},rival:{name:"TURBO RIVAL",bpm:152,chords:[["E",Ri],["C",we],["D",we],["B",we],["E",Ri],["C",we],["A",Ri],["B",En]],lead:["B5 . . . G5 . E5 . B5 . . . C6 . B5 .","G5 . . . E5 . C5 . E5 . G5 . C6 . . .","A5 . . . F#5 . D5 . F#5 . A5 . D6 . C6 .","B5 . . . . . . . D#6 . . . F#6 . . .","E6 . . . D6 . B5 . G5 . . . B5 . E6 .","G6 . . . E6 . C6 . E6 . . . G6 . E6 .","C6 . . . A5 . E5 . A5 . C6 . E6 . . .","D#6 . . . . . F#6 . . . B5 . . . - -"],bass:[0,null,0,12,0,null,0,12,0,null,0,12,0,7,12,7],kick:[0,4,8,12],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"saw2",arp:{pattern:[0,2,4,2],wave:"square",oct:5}},sunset:{name:"AFTER SUNSET",bpm:98,chords:[["F",me],["E",oe],["D",oe],["C",me],["A#",me],["A",oe],["G",oe],["C",we]],lead:["A5 . . . C6 . . . E6 . . . D6 . C6 .","B5 . . . G5 . . . E5 . . . . . . .","F5 . . . A5 . . . C6 . . . E6 . D6 .","E6 . . . . . . . G5 . . . . . . .","D6 . . . F6 . . . A6 . . . G6 . F6 .","E6 . . . C6 . . . A5 . . . G5 . A5 .","A#5 . . . A5 . . . G5 . . . F5 . G5 .","E5 . . . . . . . . . . . - - - -"],bass:[0,null,null,0,null,null,12,null,0,null,null,7,null,null,12,null],kick:[0,10],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"fm",pad:!0,arp:{pattern:[0,2,1,3,2,4,3,1],wave:"triangle",oct:5},gated:!0,stabs:!1},desert:{name:"MESA HIGHWAY",bpm:128,chords:[["A",oe],["D",we],["G",we],["E",oe],["A",oe],["F",me],["G",we],["E",En]],lead:["A4 . . C5 . . E5 . G5 . . . E5 . D5 .","F#5 . . . . . A5 . F#5 . E5 . D5 . . .","G5 . . B5 . . D6 . B5 . . . A5 . G5 .","E5 . . . . . . . - - G5 . A5 . B5 .","C6 . . B5 . . A5 . E5 . . . G5 . A5 .","A5 . . . C6 . . . E6 . . . C6 . A5 .","B5 . . . D6 . . . G5 . . . B5 . D6 .","G#5 . . . . . B5 . . . E5 . . . - -"],bass:[0,null,null,0,null,7,null,0,null,0,null,7,12,null,7,null],kick:[0,8,11],snare:[4,12],hat:[2,6,10,14],leadWave:"fm"},alps:{name:"GLACIER RUN",bpm:150,chords:[["E",we],["B",we],["C#",oe],["A",me],["E",we],["G#",oe],["A",me],["B",En]],lead:["B5 . G#5 . E5 . G#5 . B5 . E6 . . . D#6 .","F#6 . . . D#6 . . . B5 . . . F#5 . . .","E6 . . D#6 . . C#6 . . . B5 . G#5 . . .","C#6 . . . . . B5 . A5 . . . G#5 . A5 .","B5 . . E6 . . G#6 . . . F#6 . E6 . . .","D#6 . . . B5 . . . F#6 . . . D#6 . . .","E6 . . C#6 . . A5 . . . G#6 . . . E6 .","F#6 . . . . . . . D#6 . . . A5 . . ."],bass:[0,null,12,null,0,null,12,null,0,null,12,null,7,null,12,null],kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14],leadWave:"square",pad:!0,arp:{pattern:[0,1,2,3,2,1,0,1],wave:"triangle",oct:5}},vegas:{name:"JACKPOT BOULEVARD",bpm:116,chords:[["D",oe],["G",En],["D",oe],["G",En],["A#",me],["A",En],["D",oe],["A",En]],lead:["D5 . F5 . A5 . C6 . - A5 . . F5 . D5 .","B5 . . . . . G5 . F5 . . . D5 . F5 .","A5 . . C6 . . D6 . . . C6 . A5 . . .","G5 . . . . . . . - - F5 . G5 . B5 .","D6 . . . A5 . . . F5 . . . A5 . D6 .","C#6 . . . . . E6 . . . C#6 . A5 . . .","F6 . . E6 . . D6 . . . C6 . A5 . . .","A5 . . . . . . . E5 . G5 . A5 . C#6 ."],bass:[0,null,0,12,null,0,null,10,0,null,7,null,12,10,7,null],kick:[0,7,10],snare:[4,12],hat:[0,2,3,4,6,8,10,11,12,14],leadWave:"saw2",gated:!0},riviera:{name:"COTE D'AZUR",bpm:112,chords:[["F",me],["E",oe],["D",oe],["C",me],["A#",me],["A",oe],["G",oe],["C",En]],lead:["E6 . . . C6 . A5 . . . G5 . A5 . C6 .","B5 . . . . . G5 . E5 . . . D5 . E5 .","F5 . A5 . C6 . . . E6 . . . D6 . C6 .","B5 . . . . . . . G5 . . . - - - -","D6 . . F6 . . A6 . . . F6 . D6 . . .","C6 . . . E6 . . . G6 . . . E6 . C6 .","A#5 . . . D6 . . . F6 . . . D6 . A#5 .","E6 . . . . . . . . . . . - - - -"],bass:[0,null,null,7,null,null,12,null,0,null,null,7,null,10,null,null],kick:[0,10],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"fm",pad:!0,arp:{pattern:[0,2,1,3,2,1,0,2],wave:"sine",oct:5},stabs:!1}},Sa=["miami","tokyo","desert","alps","vegas","riviera","palm","signal","rival","sunset"].map(i=>({id:i,name:G0[i].name})),H0={C:0,"C#":1,D:2,"D#":3,E:4,F:5,"F#":6,G:7,"G#":8,A:9,"A#":10,B:11},wg=i=>{const t=/^([A-G]#?)(\d)$/.exec(i);return t?H0[t[1]]+(parseInt(t[2],10)+1)*12:69},Ys=i=>440*Math.pow(2,(i-69)/12);class Eg{constructor(){this.ctx=null,this.muted=!1,this.song=null,this.step=0,this.nextTime=0,this.timer=null}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext,e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=.55;const n=e.createDynamicsCompressor();this.master.connect(n).connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=.32,this.musicBus.connect(this.master),this.delay=e.createDelay(1);const s=e.createGain();s.gain.value=.28,this.delay.connect(s).connect(this.delay);const r=e.createGain();r.gain.value=.35,this.delay.connect(r).connect(this.musicBus),this.noise=e.createBuffer(1,e.sampleRate,e.sampleRate);const a=this.noise.getChannelData(0);for(let h=0;h<a.length;h++)a[h]=Math.random()*2-1;this.engA=e.createOscillator(),this.engA.type="sawtooth",this.engB=e.createOscillator(),this.engB.type="square",this.engF=e.createBiquadFilter(),this.engF.type="lowpass",this.engF.Q.value=4,this.engG=e.createGain(),this.engG.gain.value=0;const o=e.createGain();o.gain.value=.6,this.engA.connect(this.engF),this.engB.connect(o).connect(this.engF),this.engF.connect(this.engG).connect(this.sfx),this.engA.start(),this.engB.start();const c=e.createBufferSource();c.buffer=this.noise,c.loop=!0;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=2400,l.Q.value=6,this.skidG=e.createGain(),this.skidG.gain.value=0,c.connect(l).connect(this.skidG).connect(this.sfx),c.start()}toggleMute(){this.muted=!this.muted,this.ctx&&this.master.gain.setTargetAtTime(this.muted?0:.55,this.ctx.currentTime,.02)}engine(t,e,n){if(!this.ctx)return;const s=this.ctx.currentTime,r=38+e*120;this.engA.frequency.setTargetAtTime(r,s,.03),this.engB.frequency.setTargetAtTime(r*.5+1.5,s,.03),this.engF.frequency.setTargetAtTime(300+e*1400+n*600,s,.05),this.engG.gain.setTargetAtTime(t?.1+n*.08:0,s,.08)}skid(t){this.ctx&&this.skidG.gain.setTargetAtTime(t*.22,this.ctx.currentTime,.04)}tone(t,e,n,s,r=0,a,o){const c=this.ctx,l=c.currentTime+r,h=c.createOscillator();h.type=n,h.frequency.setValueAtTime(t,l),a&&h.frequency.exponentialRampToValueAtTime(a,l+e);const u=c.createGain();u.gain.setValueAtTime(s,l),u.gain.exponentialRampToValueAtTime(.001,l+e),h.connect(u).connect(o??this.sfx),h.start(l),h.stop(l+e+.02)}burst(t,e,n,s=0,r="lowpass",a,o){const c=this.ctx,l=o??c.currentTime+s,h=c.createBufferSource();h.buffer=this.noise;const u=c.createBiquadFilter();u.type=r,u.frequency.setValueAtTime(n,l),r==="lowpass"&&u.frequency.exponentialRampToValueAtTime(80,l+t);const d=c.createGain();d.gain.setValueAtTime(e,l),d.gain.exponentialRampToValueAtTime(.001,l+t),h.connect(u).connect(d).connect(a??this.sfx),h.start(l,Math.random()*.5),h.stop(l+t+.02)}crash(t){this.ctx&&(this.burst(t?.9:.35,t?.9:.5,t?4e3:2500),this.tone(t?90:140,t?.5:.2,"square",.35,0,30))}scrape(){this.ctx&&this.burst(.18,.25,3e3,0,"highpass")}pop(){this.ctx&&(this.burst(.09,.5,900),this.tone(70,.08,"square",.25,0,40))}gun(t=1){if(this.ctx)for(const[e,n]of[[0,1],[.048,.8]]){const s=.9+Math.random()*.2,r=t*n;this.burst(.045,.5*r,1900*s,e,"bandpass"),this.burst(.11,.42*r,650*s,e),this.tone(125*s,.07,"sine",.38*r,e,42),this.burst(.014,.22*r,5200,e+.004,"highpass")}}ping(){this.ctx&&(this.tone(1800+Math.random()*900,.12,"triangle",.22,0,900),this.burst(.04,.25,6e3,0,"highpass"))}turbo(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noise;const s=t.createBiquadFilter();s.type="bandpass",s.Q.value=3,s.frequency.setValueAtTime(400,e),s.frequency.exponentialRampToValueAtTime(5e3,e+.7);const r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.5,e+.08),r.gain.exponentialRampToValueAtTime(.001,e+1.1),n.connect(s).connect(r).connect(this.sfx),n.start(e),n.stop(e+1.2),this.tone(90,.6,"sawtooth",.25,0,240),this.tone(660,.25,"square",.1,.05,1320)}countBeep(t){this.ctx&&(t?this.tone(880,.7,"square",.22):this.tone(440,.25,"square",.22))}blip(){this.ctx&&this.tone(660,.07,"square",.12,0,990)}coin(){this.ctx&&(this.tone(988,.08,"square",.15),this.tone(1319,.3,"square",.15,.08))}jingle(){this.ctx&&[523,659,784,1047,784,1047].forEach((t,e)=>this.tone(t,.16,"square",.15,e*.09))}fanfare(){this.ctx&&[392,523,659,784,659,784,1047].forEach((t,e)=>this.tone(t,e===6?.8:.18,"square",.16,e*.13))}sad(){this.ctx&&[392,370,349,330].forEach((t,e)=>this.tone(t,e===3?.9:.3,"triangle",.25,e*.3))}music(t){if(!this.ctx)return;const e=t?G0[t]:null;e!==this.song&&(this.song=e,this.step=0,this.nextTime=this.ctx.currentTime+.1,this.timer!==null&&window.clearInterval(this.timer),this.timer=null,e&&(this.delay.delayTime.value=60/e.bpm*.75,this.timer=window.setInterval(()=>this.schedule(),25)))}schedule(){const t=this.ctx,e=this.song;if(!e)return;const n=60/e.bpm/4;for(this.nextTime<t.currentTime-.2&&(this.nextTime=t.currentTime+.05);this.nextTime<t.currentTime+.12;)this.playStep(e,this.step,this.nextTime,n),this.step=(this.step+1)%(e.chords.length*16),this.nextTime+=n}playStep(t,e,n,s){const r=Math.floor(e/16),a=e%16,[o,c]=t.chords[r],l=H0[o],h=t.bass[a];if(h!=null&&this.voice(Ys(36+l+h),s*.9,"sawtooth",.32,n,700),t.stabs!==!1&&a%4===2)for(const f of c)this.voice(Ys(60+l+f),s*1.2,"square",.045,n,2600);if(t.pad&&a===0)for(const f of c)this.padNote(Ys(48+l+f),s*16,n);if(t.arp){const f=t.arp.pattern[a%t.arp.pattern.length],g=c[f%c.length]+12*Math.floor(f/c.length);this.voice(Ys((t.arp.oct+1)*12+l+g),s*.7,t.arp.wave,.045,n,3200,!1,!0)}const u=t.lead[r].split(/\s+/),d=u[a];if(d&&d!=="."&&d!=="-"){let f=1;for(;a+f<16&&u[a+f]===".";)f++;this.voice(Ys(wg(d)),s*f*.95,t.leadWave,.11,n,3800,!0)}if(t.kick.includes(a)){const f=this.ctx,g=f.createOscillator(),M=f.createGain();g.frequency.setValueAtTime(150,n),g.frequency.exponentialRampToValueAtTime(40,n+.12),M.gain.setValueAtTime(.7,n),M.gain.exponentialRampToValueAtTime(.001,n+.18),g.connect(M).connect(this.musicBus),g.start(n),g.stop(n+.2)}t.snare.includes(a)&&(t.gated?(this.burst(.26,.55,1500,0,"bandpass",this.musicBus,n),this.burst(.2,.3,5e3,0,"highpass",this.musicBus,n)):this.burst(.14,.45,1800,0,"bandpass",this.musicBus,n)),t.hat.includes(a)&&this.burst(.04,.18,7e3,0,"highpass",this.musicBus,n)}padNote(t,e,n){const s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.value=1400;const a=s.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.028,n+Math.min(.35,e*.3)),a.gain.setValueAtTime(.028,n+e*.85),a.gain.linearRampToValueAtTime(0,n+e),r.connect(a).connect(this.musicBus);for(const o of[-9,9]){const c=s.createOscillator();c.type="sawtooth",c.frequency.setValueAtTime(t,n),c.detune.value=o,c.connect(r),c.start(n),c.stop(n+e+.02)}}voice(t,e,n,s,r,a,o=!1,c=!1){const l=this.ctx;if(n==="fm"){const g=l.createOscillator(),M=l.createOscillator(),m=l.createGain();g.frequency.setValueAtTime(t,r),M.frequency.setValueAtTime(t*2,r),m.gain.setValueAtTime(t*3,r),m.gain.exponentialRampToValueAtTime(t*.3,r+Math.max(.05,e)),M.connect(m).connect(g.frequency);const p=l.createGain();p.gain.setValueAtTime(0,r),p.gain.linearRampToValueAtTime(s*1.3,r+.004),p.gain.exponentialRampToValueAtTime(s*.4,r+Math.max(.05,e*.8)),p.gain.linearRampToValueAtTime(0,r+e+.05),g.connect(p).connect(this.musicBus),o&&p.connect(this.delay);for(const x of[g,M])x.start(r),x.stop(r+e+.08);return}const h=l.createOscillator(),u=[];if(n==="saw2"&&(s*=.6),n==="saw2"){h.type="sawtooth",h.detune.value=-8;const g=l.createOscillator();g.type="sawtooth",g.detune.value=8,g.frequency.setValueAtTime(t,r),u.push(g)}else h.type=n;if(h.frequency.setValueAtTime(t,r),o){const g=l.createOscillator(),M=l.createGain();g.frequency.value=6,M.gain.setValueAtTime(0,r),M.gain.linearRampToValueAtTime(t*.012,r+Math.min(e,.4)),g.connect(M).connect(h.frequency);for(const m of u)M.connect(m.frequency);g.start(r),g.stop(r+e+.05)}const d=l.createBiquadFilter();d.type="lowpass",d.frequency.value=a;const f=l.createGain();f.gain.setValueAtTime(0,r),f.gain.linearRampToValueAtTime(s,r+.005),f.gain.setValueAtTime(s,r+Math.max(.01,e-.03)),f.gain.linearRampToValueAtTime(0,r+e),h.connect(d).connect(f).connect(this.musicBus),(o||c)&&f.connect(this.delay);for(const g of[h,...u])g!==h&&g.connect(d),g.start(r),g.stop(r+e+.02)}}const Tg=()=>"92",ie={mode:Tg(),get modern(){return this.mode==="92"},get width(){return this.modern?640:426},get height(){return this.modern?360:240}};function Ag(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);const s=new fr(t);return s.colorSpace=ke,s}const or='"Press Start 2P", monospace',Rg='"Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", "Noto Sans CJK JP", "Noto Sans JP", sans-serif',Xr=i=>"#"+i.toString(16).padStart(6,"0");class Cg{constructor(){this.cw=64,this.ch=32,this.cols=8,this.rows=32,this.used=[],this.canvas=document.createElement("canvas"),this.canvas.width=this.cw*this.cols,this.canvas.height=this.ch*this.rows,this.ctx=this.canvas.getContext("2d"),this.ctx.imageSmoothingEnabled=!1,this.texture=new fr(this.canvas),this.texture.magFilter=qe,this.texture.minFilter=h0,this.texture.colorSpace=ke}alloc(t,e){for(let n=0;n+e<=this.rows;n++)for(let s=0;s+t<=this.cols;s++){let r=!0;for(let a=n;a<n+e&&r;a++)for(let o=s;o<s+t;o++)if(this.used[a*this.cols+o]){r=!1;break}if(r){for(let a=n;a<n+e;a++)for(let o=s;o<s+t;o++)this.used[a*this.cols+o]=!0;return[s,n]}}throw new Error("sign atlas full")}add(t,e=1,n=1){const[s,r]=this.alloc(e,n),a=s*this.cw,o=r*this.ch,c=this.cw*e,l=this.ch*n,h=this.ctx;if(h.save(),h.beginPath(),h.rect(a,o,c,l),h.clip(),h.fillStyle=Xr(t.bg),h.fillRect(a,o,c,l),t.stripes===-1)for(let M=0;M<l;M+=8)for(let m=0;m<c;m+=8)(m+M)/8%2===0&&(h.fillStyle="#000",h.fillRect(a+m,o+M,8,8));else t.stripes!==void 0&&(h.fillStyle=Xr(t.stripes),h.fillRect(a,o+l-6,c,3),h.fillRect(a,o+3,c,3));if(t.border!==void 0&&(h.strokeStyle=Xr(t.border),h.lineWidth=3,h.strokeRect(a+1.5,o+1.5,c-3,l-3)),h.fillStyle=Xr(t.fg),t.arrows){const M=c/3,m=M*.38;for(let _=0;_<3;_++){const v=a+_*M+M*.12,E=v+M*.62,[w,T]=t.arrows==="R"?[v,E]:[E,v],C=t.arrows==="R"?1:-1;h.beginPath(),h.moveTo(w,o+3),h.lineTo(w+C*m,o+3),h.lineTo(T,o+l/2),h.lineTo(w+C*m,o+l-3),h.lineTo(w,o+l-3),h.lineTo(T-C*m,o+l/2),h.closePath(),h.fill()}h.restore(),this.texture.needsUpdate=!0;const p=this.canvas.width,x=this.canvas.height;return[a/p,1-(o+l)/x,(a+c)/p,1-o/x]}h.textAlign="center",h.textBaseline="middle";const u=t.jp?Rg:or;if(t.vertical){const g=[...t.text],M=Math.min(c-6,Math.floor((l-6)/g.length));h.font=`bold ${M}px ${u}`,g.forEach((m,p)=>h.fillText(m,a+c/2,o+4+M*(p+.5)))}else{const g=t.sub?2:1,M=t.jp?(l-6)/g:8*Math.max(1,Math.floor((l-8)/g/10));let m=Math.floor(M);for(h.font=`bold ${m}px ${u}`;m>6&&h.measureText(t.text).width>c-6;){if(m-=t.jp?1:8,m<8&&!t.jp){m=8;break}h.font=`bold ${m}px ${u}`}const p=t.sub?o+l*.34:o+l/2+1;h.fillText(t.text,a+c/2,p),t.sub&&(h.font=`8px ${or}`,h.fillText(t.sub,a+c/2,o+l*.74))}h.restore(),this.texture.needsUpdate=!0;const d=this.canvas.width,f=this.canvas.height;return[a/d,1-(o+l)/f,(a+c)/d,1-o/f]}}const gt=852,ze=480,oi=i=>"#"+i.toString(16).padStart(6,"0"),Vt=16769088,Ht=16777215,Oe=16751136,ge=16724016,Pe=4255999,Ci=16734880,di=4251712,ps=class ps{constructor(t){this.canvas=t,t.width=gt,t.height=ze,this.g=t.getContext("2d"),this.g.imageSmoothingEnabled=!1}clear(){this.g.clearRect(0,0,gt,ze)}text(t,e,n,s,r,a="left",o=0){const c=this.g;c.font=`${s}px ${or}`,c.textAlign=a,c.textBaseline="top";const l=s<8?1:Math.max(2,s/8);c.fillStyle=oi(o),c.fillText(t,e+l,n+l),c.fillStyle=oi(r),c.fillText(t,e,n)}shade(t,e,n,s,r=.6){this.g.fillStyle=`rgba(10,10,32,${r})`,this.g.fillRect(t,e,n,s)}arrow(t,e,n,s,r){const a=Math.max(2,Math.round(s/2));for(let o=0;o<a;o++){const c=(o+1)*2-1;n==="up"?this.rect(t-o,e-a/2+o,c,1,r):n==="down"?this.rect(t-o,e+a/2-o,c,1,r):n==="left"?this.rect(t-a/2+o,e-o,1,c,r):this.rect(t+a/2-o,e-o,1,c,r)}}keyW(t,e=16){return ps.ARROWS[t]?e:(this.g.font=`${e>=20?16:8}px ${or}`,Math.max(e,Math.ceil(this.g.measureText(t).width)+10))}keycap(t,e,n,s=16,r=Ht){const a=s>=20?16:8,o=this.keyW(n,s),c=ps.ARROWS[n];return this.rect(t+1,e+2,o,s,328975),this.box(t,e,o,s,2763338,r,1),this.rect(t+1,e+1,o-2,1,5263482),c?this.arrow(t+o/2-.5,e+s/2,c,s-6,r):this.text(n,t+o/2,e+(s-a)/2+1,a,r,"center"),o}chip(t,e,n,s,r,a,o=8,c=1710650){this.box(t,e,n,s,c,a,2);const l=ps.ARROWS[r];l?this.arrow(t+n/2-.5,e+s/2,l,Math.min(n,s)-8,a):this.text(r,t+n/2,e+(s-o)/2+1,o,a,"center")}box(t,e,n,s,r,a,o=4){const c=this.g;c.fillStyle=oi(a),c.fillRect(t,e,n,s),c.fillStyle=oi(r),c.fillRect(t+o,e+o,n-o*2,s-o*2)}rect(t,e,n,s,r){this.g.fillStyle=oi(r),this.g.fillRect(t,e,n,s)}logo(t,e,n,s,r,a,o){const c=this.g;c.font=`${s}px ${or}`,c.textAlign="center",c.textBaseline="top";for(let l=s/6;l>0;l-=2)c.fillStyle=oi(o),c.fillText(t,e+l*.5,n+l);c.fillStyle="#000";for(const[l,h]of[[-3,0],[3,0],[0,-3],[0,3]])c.fillText(t,e+l,n+h);c.save(),c.beginPath(),c.rect(0,n-4,gt,s*.5+4),c.clip(),c.fillStyle=oi(r),c.fillText(t,e,n),c.restore(),c.save(),c.beginPath(),c.rect(0,n+s*.5,gt,s),c.clip(),c.fillStyle=oi(a),c.fillText(t,e,n),c.restore()}flare(t,e,n){const s=this.g,r=gt/2,a=ze/2;s.save(),s.globalCompositeOperation="lighter";const o=s.createRadialGradient(t,e,0,t,e,150);o.addColorStop(0,`rgba(255,240,200,${.55*n})`),o.addColorStop(.3,`rgba(255,190,120,${.22*n})`),o.addColorStop(1,"rgba(255,160,100,0)"),s.fillStyle=o,s.fillRect(t-150,e-150,300,300);const c=s.createLinearGradient(t-260,e,t+260,e);c.addColorStop(0,"rgba(255,220,180,0)"),c.addColorStop(.5,`rgba(255,230,190,${.35*n})`),c.addColorStop(1,"rgba(255,220,180,0)"),s.fillStyle=c,s.fillRect(t-260,e-2,520,4);const l=[[.35,18,"255,200,90",.22],[.62,10,"140,255,170",.2],[.9,34,"120,160,255",.12],[1.25,14,"255,120,200",.18],[1.6,52,"255,190,110",.09],[1.95,22,"120,230,255",.14]];for(const[h,u,d,f]of l){const g=t+(r-t)*h,M=e+(a-e)*h;s.fillStyle=`rgba(${d},${f*n})`,s.beginPath();for(let m=0;m<6;m++){const p=m/6*Math.PI*2+Math.PI/6,x=g+Math.cos(p)*u,_=M+Math.sin(p)*u;m===0?s.moveTo(x,_):s.lineTo(x,_)}s.closePath(),s.fill()}s.restore()}tach(t,e,n){const r=Math.round(n*24);for(let a=0;a<24;a++){const o=a<13?di:a<20?Vt:ge,c=8+Math.floor(a*.9);this.rect(t+a*12,e-c,10,c,a<r?o:2109472)}}};ps.ARROWS={"↑":"up","↓":"down","←":"left","→":"right"};let Cc=ps;const jt=6,Ig=3,Z=11,Oi=4,lr=Z*2/Oi;class Pg{constructor(){this.segs=[],this.stageStarts=[],this.goalSeg=0}seg(t){const e=this.segs.length;return this.segs[t<0?0:t>=e?e-1:t]}H(t){const e=this.segs.length;return t<=0?this.segs[0].heading:t>=e?this.segs[e-1].heading+this.segs[e-1].curve*jt:this.segs[t].heading}Y(t){return this.seg(t).y}get goalDist(){return this.goalSeg*jt}}const Lg=(i,t,e)=>i+(t-i)*e*e,Dg=(i,t,e)=>i+(t-i)*(1-(1-e)*(1-e)),yo=(i,t,e)=>i+(t-i)*(-Math.cos(e*Math.PI)/2+.5);class Cs{constructor(t,e=0){this.profileOf=t,this.track=new Pg,this.heading=0,this.stage=0,this.zone="",this.tunnel=!1,this.y=e}push(t,e){this.track.segs.push({curve:t,y:e,heading:this.heading,stage:this.stage,zone:this.zone,profile:this.profileOf(this.zone,this.tunnel),tunnel:this.tunnel,props:[]}),this.heading+=t*jt}section(t,e,n,s,r){const a=t+e+n,o=this.y;let c=0;for(let l=0;l<t;l++,c++)this.push(Lg(0,s,l/t),yo(o,o+r,c/a));for(let l=0;l<e;l++,c++)this.push(s,yo(o,o+r,c/a));for(let l=0;l<n;l++,c++)this.push(Dg(s,0,l/n),yo(o,o+r,c/a));this.y=o+r}straight(t,e=0){this.section(0,t,0,0,e)}stageFrom(t,e){this.zone=t.zone,this.track.stageStarts.push(this.track.segs.length);const n=this.track.segs.length+t.length,s=Math.min(t.yMax,Math.max(t.yMin,this.y));Math.abs(s-this.y)>.5?this.straight(40,s-this.y):this.straight(20);let r=0;for(;this.track.segs.length<n;){const a=n-this.track.segs.length,o=!!t.tunnels&&r===0&&a<t.length*.55;this.tunnel=!!t.tunnels&&(o||e.chance(t.tunnels))&&a>120,this.tunnel&&r++;const c=this.zone;this.tunnel&&t.tunnelZone&&(this.zone=t.tunnelZone);let l=e.sign();this.heading>.7&&(l=-1),this.heading<-.7&&(l=1);const h=e.range(9e-4,.0032)*t.curvy;let u=0;e.chance(.25+t.hilly*.6)&&(u=e.range(10,45)*t.hilly*e.sign(),this.y+u>t.yMax&&(u=t.yMax-this.y),this.y+u<t.yMin&&(u=t.yMin-this.y));const d=e.next();if(this.tunnel)this.section(20,e.int(40,80),20,h*.5*l,Math.min(u,0));else if(d<.18)this.straight(e.int(25,60),u);else if(d<.42){const f=e.int(15,35);this.section(15,f,15,h*l,u*.5),this.section(15,f,15,-h*l,u*.5)}else this.section(e.int(15,30),e.int(25,80),e.int(15,30),h*l,u);this.tunnel=!1,this.zone=c}this.stage++}finish(t){return this.stage--,this.track.goalSeg=this.track.segs.length,this.straight(t),this.track}}const rr=6,V0=200,cs=rr+V0+1;class Ng{constructor(t){this.track=t,this.start=0,this.bx=new Float32Array(cs),this.by=new Float32Array(cs),this.bz=new Float32Array(cs),this.bh=new Float32Array(cs),this.yRef=0,this.heading=0,this.count=rr+V0}update(t){const e=this.track,n=Math.floor(t/jt),s=t/jt-n,r=e.H(n)+e.seg(n).curve*s*jt;this.heading=r,this.yRef=e.Y(n)+(e.Y(n+1)-e.Y(n))*s,this.start=n-rr;const{bx:a,bz:o,bh:c,by:l}=this,h=rr,u=rr+1;let d=e.H(n+1)-r,f=(1-s)*jt;c[u]=d,a[u]=Math.sin(d/2)*f,o[u]=-Math.cos(d/2)*f;for(let g=u+1;g<cs;g++){d=e.H(this.start+g)-r;const M=(c[g-1]+d)/2;c[g]=d,a[g]=a[g-1]+Math.sin(M)*jt,o[g]=o[g-1]-Math.cos(M)*jt}d=e.H(n)-r,f=s*jt,c[h]=d,a[h]=-Math.sin(d/2)*f,o[h]=Math.cos(d/2)*f;for(let g=h-1;g>=0;g--){d=e.H(this.start+g)-r;const M=(c[g+1]+d)/2;c[g]=d,a[g]=a[g+1]-Math.sin(M)*jt,o[g]=o[g+1]+Math.cos(M)*jt}for(let g=0;g<cs;g++)l[g]=e.Y(this.start+g)-this.yRef}sample(t,e,n){const s=t/jt,r=Math.floor(s),a=s-r,o=r-this.start;if(o<0||o>=this.count)return!1;const c=this.bh[o]+(this.bh[o+1]-this.bh[o])*a;return n.h=c,n.x=this.bx[o]+(this.bx[o+1]-this.bx[o])*a+Math.cos(c)*e,n.z=this.bz[o]+(this.bz[o+1]-this.bz[o])*a+Math.sin(c)*e,n.y=this.by[o]+(this.by[o+1]-this.by[o])*a,!0}}const Rt=(i,t,e,n,s,r,a)=>({z:i,w:t,yb:e,belt:n,top:s,wt:r,seg:a}),Ii=657932,Fe=12063760,bo=16747040,pn=(i,t,e)=>[{x:i,y:t,r:e},{x:-i,y:t,r:e}],We=[{id:"testarossa",rimStyle:"star",trim:12095592,arch:.04,front:"popup",make:"FERRARI",name:"TESTAROSSA",year:1984,group:"80s EXOTIC",paints:[14160924,15921902,16765976],stations:[Rt(-2.24,.88,.3,.5,.56,.8,"p"),Rt(-1.7,.93,.24,.62,.68,.86,"p"),Rt(-.85,.96,.22,.74,.8,.8,"ws"),Rt(-.05,.97,.22,.8,1.12,.62,"rf"),Rt(.55,.98,.22,.84,1.12,.62,"rw"),Rt(1,.99,.22,.87,.98,.8,"p"),Rt(2.24,.99,.28,.9,.96,.86,"p")],wheels:{r:.32,fz:-1.27,rz:1.28,fx:.78,rx:.82,rim:14212320,spokes:5},rear:[{x:0,y:.64,w:1.92,h:.34,c:Ii}],lights:[{x:.62,y:.64,w:.6,h:.22,c:Fe,brake:!0},{x:.22,y:.64,w:.18,h:.22,c:bo}],slats:{y0:.5,y1:.78,n:6,w:.95},side:[{kind:"strakes",z0:-.3,z1:1.05,y0:.38,y1:.8,n:5}],exhaust:[...pn(.55,.33,.05),...pn(.7,.33,.05)],plateY:.38,stats:{vmax:290,accel:.95,grip:.97}},{id:"countach",rimStyle:"dial",trim:10516560,arch:.07,front:"popup",make:"LAMBORGHINI",name:"COUNTACH QV",year:1985,group:"80s EXOTIC",paints:[16053486,14161944,16765976],stations:[Rt(-2.07,.86,.28,.4,.44,.76,"p"),Rt(-1.3,.92,.24,.56,.62,.84,"p"),Rt(-.75,.95,.22,.66,.72,.84,"ws"),Rt(.15,.97,.22,.74,1.06,.6,"rf"),Rt(.65,.99,.22,.78,1.06,.62,"rw"),Rt(1.05,1,.22,.84,.94,.88,"p"),Rt(2.07,1,.28,.86,.92,.9,"p")],wheels:{r:.32,fz:-1.22,rz:1.23,fx:.8,rx:.84,rim:13158604,spokes:5},rear:[{x:0,y:.6,w:.84,h:.32,c:Ii}],lights:[{x:.7,y:.67,w:.42,h:.15,c:Fe,brake:!0},{x:.7,y:.52,w:.42,h:.1,c:bo}],side:[{kind:"naca",z0:-.5,z1:.35,y0:.5,y1:.72},{kind:"intake",z0:.6,z1:1.2,y0:.5,y1:.8}],wing:{kind:"big",z:1.95,y:1.28,w:.95,d:.38},exhaust:[...pn(.32,.32,.055),...pn(.5,.32,.055)],plateY:.42,stats:{vmax:298,accel:1,grip:.92}},{id:"f40",rimStyle:"star",trim:9050132,arch:.05,front:"popup",make:"FERRARI",name:"F40",year:1987,group:"80s EXOTIC",paints:[14686232,16765976,15921902],stations:[Rt(-2.18,.9,.27,.46,.5,.8,"p"),Rt(-1.5,.95,.22,.6,.66,.88,"p"),Rt(-.8,.97,.22,.7,.76,.82,"ws"),Rt(-.05,.98,.22,.76,1.1,.62,"rf"),Rt(.5,.99,.22,.8,1.1,.62,"lv"),Rt(1.6,.99,.22,.86,.92,.86,"p"),Rt(2.18,.99,.28,.88,.92,.9,"p")],wheels:{r:.33,fz:-1.22,rz:1.23,fx:.8,rx:.82,rim:9079440,spokes:5},rear:[{x:0,y:.58,w:1.9,h:.34,c:Ii}],lights:[{x:.74,y:.7,w:.2,h:.2,c:Fe,round:!0,brake:!0},{x:.5,y:.7,w:.2,h:.2,c:Fe,round:!0,brake:!0}],side:[{kind:"naca",z0:-.6,z1:.1,y0:.55,y1:.7},{kind:"intake",z0:.2,z1:.9,y0:.45,y1:.78}],wing:{kind:"bridge",z:1.98,y:1.18,w:.98,d:.4},exhaust:[{x:0,y:.5,r:.06},...pn(.16,.5,.06)],plateY:.32,stats:{vmax:324,accel:1.05,grip:.9}},{id:"959",rimStyle:"six",trim:3816e3,front:"round",make:"PORSCHE",name:"959",year:1986,group:"80s EXOTIC",paints:[13159636,15921902,14161944],stations:[Rt(-2.13,.84,.3,.5,.56,.74,"p"),Rt(-1.6,.9,.26,.62,.7,.8,"p"),Rt(-.75,.92,.25,.76,.84,.72,"ws"),Rt(-.1,.92,.25,.8,1.26,.6,"rf"),Rt(.35,.92,.25,.82,1.26,.6,"rw"),Rt(1.45,.94,.25,.86,.96,.8,"p"),Rt(2.13,.94,.3,.88,.98,.84,"p")],wheels:{r:.34,fz:-1.13,rz:1.14,fx:.74,rx:.78,rim:14212324,spokes:5},rear:[{x:0,y:.74,w:1.86,h:.18,c:3803658}],lights:[{x:0,y:.74,w:1.5,h:.08,c:Fe,brake:!0,mirror:!1},{x:.8,y:.74,w:.22,h:.16,c:Fe,brake:!0}],wing:{kind:"hoop",z:1.85,y:1.12,w:.9,d:.45},exhaust:pn(.45,.34,.05),plateY:.5,stats:{vmax:315,accel:1,grip:1.05}},{id:"r32",rimStyle:"six",trim:2763312,arch:.045,front:"rect",make:"NISSAN",name:"SKYLINE GT-R R32",year:1989,group:"90s JAPAN",paints:[5923952,15921902,12064792],stations:[Rt(-2.27,.82,.32,.6,.66,.76,"p"),Rt(-1.9,.86,.3,.72,.78,.8,"p"),Rt(-.55,.87,.3,.8,.84,.8,"ws"),Rt(.25,.87,.3,.82,1.32,.66,"rf"),Rt(1,.87,.3,.84,1.3,.66,"rw"),Rt(1.55,.87,.3,.88,.98,.8,"p"),Rt(2.27,.86,.32,.9,1,.8,"p")],wheels:{r:.32,fz:-1.33,rz:1.29,fx:.74,rx:.74,rim:12106948,spokes:6},rear:[{x:0,y:.8,w:.5,h:.18,c:2763310}],lights:[{x:.64,y:.8,w:.22,h:.22,c:Fe,round:!0,brake:!0},{x:.38,y:.8,w:.22,h:.22,c:Fe,round:!0,brake:!0}],wing:{kind:"hoop",z:2.05,y:1.1,w:.74,d:.26},exhaust:[{x:.55,y:.32,r:.065}],plateY:.54,stats:{vmax:285,accel:1.06,grip:1.12}},{id:"supra",rimStyle:"star",trim:3815996,front:"rect",make:"TOYOTA",name:"SUPRA RZ",year:1993,group:"90s JAPAN",paints:[16738832,15921902,14161944],stations:[Rt(-2.26,.84,.3,.54,.6,.78,"p"),Rt(-1.8,.89,.27,.66,.72,.84,"p"),Rt(-.5,.9,.27,.76,.8,.8,"ws"),Rt(.25,.9,.27,.8,1.24,.64,"rf"),Rt(.8,.9,.27,.82,1.22,.64,"rw"),Rt(1.6,.9,.27,.86,.96,.84,"p"),Rt(2.26,.88,.3,.86,.94,.82,"p")],wheels:{r:.33,fz:-1.28,rz:1.27,fx:.76,rx:.76,rim:13685980,spokes:5},rear:[{x:0,y:.76,w:1.7,h:.28,c:2763312}],lights:[{x:.7,y:.77,w:.26,h:.22,c:Fe,round:!0,brake:!0},{x:.44,y:.77,w:.22,h:.2,c:Fe,round:!0,brake:!0}],wing:{kind:"hoop",z:2,y:1.22,w:.86,d:.32},exhaust:[{x:.6,y:.32,r:.075}],plateY:.5,stats:{vmax:290,accel:1.02,grip:1}},{id:"rx7",rimStyle:"multi",trim:2763310,front:"popup",make:"MAZDA",name:"RX-7",year:1992,group:"90s JAPAN",paints:[16765976,14161944,2787930],stations:[Rt(-2.15,.84,.3,.5,.56,.76,"p"),Rt(-1.6,.88,.26,.62,.68,.84,"p"),Rt(-.45,.88,.26,.74,.78,.78,"ws"),Rt(.25,.88,.26,.78,1.2,.6,"rf"),Rt(.7,.88,.26,.8,1.16,.62,"rw"),Rt(1.55,.88,.26,.84,.92,.8,"p"),Rt(2.15,.86,.3,.84,.9,.78,"p")],wheels:{r:.32,fz:-1.2,rz:1.23,fx:.74,rx:.74,rim:13159636,spokes:5},rear:[{x:0,y:.74,w:1.66,h:.18,c:Ii}],lights:[{x:.66,y:.74,w:.2,h:.15,c:Fe,round:!0,brake:!0},{x:.44,y:.74,w:.2,h:.15,c:Fe,round:!0,brake:!0}],wing:{kind:"hoop",z:1.98,y:1.06,w:.78,d:.24},exhaust:pn(.55,.33,.055),plateY:.52,stats:{vmax:280,accel:1.06,grip:1.12}},{id:"nsx",rimStyle:"multi",trim:1973794,front:"popup",make:"HONDA",name:"NSX",year:1990,group:"90s JAPAN",paints:[13113376,15921902,16765976],stations:[Rt(-2.21,.84,.3,.5,.56,.76,"p"),Rt(-1.6,.89,.26,.62,.68,.84,"p"),Rt(-.95,.9,.26,.72,.78,.8,"ws"),Rt(-.15,.9,.26,.78,1.15,.62,"rf"),Rt(.5,.9,.26,.82,1.13,.62,"rw"),Rt(1,.9,.26,.86,.96,.8,"p"),Rt(2.21,.9,.3,.9,.96,.84,"p")],wheels:{r:.32,fz:-1.26,rz:1.27,fx:.76,rx:.78,rim:14212324,spokes:7},rear:[{x:0,y:.74,w:1.78,h:.17,c:3803658}],lights:[{x:.68,y:.74,w:.4,h:.12,c:Fe,brake:!0},{x:0,y:.74,w:.9,h:.06,c:9048080,mirror:!1}],side:[{kind:"intake",z0:.3,z1:.95,y0:.45,y1:.78}],wing:{kind:"bridge",z:2,y:1.04,w:.9,d:.3},exhaust:pn(.4,.33,.05),plateY:.46,stats:{vmax:280,accel:1,grip:1.16}},{id:"diablo",rimStyle:"dial",trim:12095592,arch:.06,front:"popup",make:"LAMBORGHINI",name:"DIABLO",year:1990,group:"90s SUPERCAR",paints:[6957768,16765976,15921902],stations:[Rt(-2.23,.88,.28,.42,.46,.78,"p"),Rt(-1.4,.95,.24,.58,.64,.88,"p"),Rt(-.8,.98,.22,.66,.72,.86,"ws"),Rt(.2,1,.22,.74,1.1,.6,"rf"),Rt(.65,1.02,.22,.78,1.08,.64,"rw"),Rt(1.2,1.03,.22,.86,.96,.9,"p"),Rt(2.23,1.02,.28,.88,.96,.92,"p")],wheels:{r:.33,fz:-1.32,rz:1.33,fx:.82,rx:.86,rim:13685980,spokes:5},rear:[{x:0,y:.66,w:1.96,h:.3,c:Ii}],lights:[{x:.8,y:.7,w:.2,h:.17,c:Fe,round:!0,brake:!0},{x:.56,y:.7,w:.2,h:.17,c:bo,round:!0}],side:[{kind:"intake",z0:.5,z1:1.25,y0:.45,y1:.82}],wing:{kind:"big",z:2,y:1.2,w:.96,d:.34},exhaust:[...pn(.12,.42,.055),...pn(.3,.42,.055)],plateY:.36,stats:{vmax:325,accel:1,grip:.9}},{id:"mclarenf1",rimStyle:"mesh",trim:2763312,drive:"C",front:"slim",make:"McLAREN",name:"F1",year:1992,group:"90s SUPERCAR",paints:[16747034,13159636,14161944],stations:[Rt(-2.15,.82,.3,.48,.52,.72,"p"),Rt(-1.5,.88,.26,.6,.66,.82,"p"),Rt(-1,.9,.25,.68,.74,.78,"ws"),Rt(-.15,.91,.25,.74,1.13,.56,"rf"),Rt(.35,.91,.25,.78,1.1,.58,"rw"),Rt(1,.91,.25,.84,.94,.82,"p"),Rt(2.15,.9,.3,.86,.92,.84,"p")],wheels:{r:.32,fz:-1.36,rz:1.36,fx:.74,rx:.76,rim:13159636,spokes:5},rear:[{x:0,y:.64,w:1.7,h:.34,c:Ii}],lights:[{x:.68,y:.74,w:.14,h:.14,c:Fe,round:!0,brake:!0},{x:.5,y:.74,w:.14,h:.14,c:Fe,round:!0,brake:!0}],side:[{kind:"intake",z0:.2,z1:.9,y0:.5,y1:.82}],wing:{kind:"duck",z:2.1,y:.97,w:.86,d:.14},scoop:!0,exhaust:[{x:0,y:.54,r:.09}],plateY:.34,stats:{vmax:340,accel:1.1,grip:.95}},{id:"f355",rimStyle:"star",trim:11567200,front:"popup",make:"FERRARI",name:"F355",year:1994,group:"90s SUPERCAR",paints:[14686232,16765976,1723034],stations:[Rt(-2.12,.86,.3,.5,.56,.78,"p"),Rt(-1.5,.92,.26,.62,.68,.86,"p"),Rt(-.8,.94,.24,.72,.78,.82,"ws"),Rt(-.05,.95,.24,.78,1.15,.6,"rf"),Rt(.5,.95,.24,.82,1.12,.62,"rw"),Rt(1.1,.95,.24,.86,.96,.84,"p"),Rt(2.12,.94,.3,.88,.98,.86,"p")],wheels:{r:.32,fz:-1.22,rz:1.23,fx:.78,rx:.8,rim:14212324,spokes:5},rear:[{x:0,y:.5,w:1.2,h:.22,c:Ii}],lights:[{x:.72,y:.74,w:.22,h:.2,c:Fe,round:!0,brake:!0},{x:.48,y:.74,w:.22,h:.2,c:Fe,round:!0,brake:!0}],side:[{kind:"intake",z0:.35,z1:1,y0:.45,y1:.76}],louvres:{z0:1.2,z1:1.9,n:6,w:.7},wing:{kind:"duck",z:2.05,y:1,w:.9,d:.16},exhaust:[...pn(.55,.38,.05),...pn(.7,.38,.05)],plateY:.6,stats:{vmax:295,accel:1,grip:1.05}}];class Jn{constructor(t){this.s=t>>>0}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}chance(t){return this.next()<t}sign(){return this.next()<.5?-1:1}}const Ic=5,Ah=1.18,qr=5,Yr=[100,150,200,300,400,500],$r=300,So=5,Ug=75,Og=3,Fg=20,Rh=50/30,kg=90,zg=6;function wo(i){return Math.max(.12,Math.min(.95,1.05-i/70))}function Ch(i,t){return i<=kg&&i>=-35&&Math.abs(t)<=zg}const Ih=[{name:"ACE",skill:1.03,corner:.92,aggro:.8},{name:"AOKI",skill:1.01,corner:.95,aggro:.5},{name:"REYES",skill:1,corner:.82,aggro:.9},{name:"VOLK",skill:.99,corner:.88,aggro:.7},{name:"LOLA",skill:.97,corner:.9,aggro:.4},{name:"BLADE",skill:.96,corner:.78,aggro:1},{name:"KENJI",skill:.94,corner:.95,aggro:.3}],Bg=3.6;function Gg(i,t,e,n=3,s=0){const r=new Jn(e),a=We.filter(o=>o!==i);for(let o=a.length-1;o>0;o--){const c=r.int(0,o);[a[o],a[c]]=[a[c],a[o]]}return Ih.map((o,c)=>{const l=a[c%a.length],h=Math.floor((Ih.length-c)/2),u=c%2===0?-1:1;return{name:o.name,spec:l,paint:r.pick(l.paints),d:t+9+h*9,x:u*lr*.55,v:0,vmax:l.stats.vmax/Bg*o.skill,corner:o.corner,aggro:o.aggro,lane:u*r.range(1,4),steer:0,spin:0,braking:!1,finished:-1,bumpT:0,turbos:n,turboT:0,hp:100,wrecked:!1,wreckT:0,smokeT:0,ammo:s,gunTaken:0,burst:0,fireCool:0,gunT:0,gunTo:-1}})}const Fi=()=>performance.now()/1e3;function Hg(i,t,e,n,s,r,a,o){const c=e.goalDist;for(const l of i){if(l.remote){const _=l.remote;Fi()-_.at>3&&(_.v=0);const v=Math.min(1,Fi()-_.at),E=_.d+_.v*v;l.v=_.v,l.d+=l.v*t,l.d+=(E-l.d)*Math.min(1,t*6),Math.abs(E-l.d)>30&&(l.d=E),l.x+=(_.x-l.x)*Math.min(1,t*8),l.spin-=l.v*t/.37;continue}if(!o){l.v=0;continue}if(l.wrecked){l.wreckT+=t,l.v=Math.max(0,l.v-22*t),l.d+=l.v*t,l.spin-=l.v*t/.37,l.braking=!0,l.steer*=1-t*3;continue}const h=e.seg(Math.floor(l.d/jt)),u=e.seg(Math.floor((l.d+70)/jt)),d=Math.max(Math.abs(h.curve),Math.abs(u.curve));let f=l.vmax*(1-Math.min(.3,d*70*(1.15-l.corner)));const g=l.d-r.pos;g>450?f*=.9:g>250?f*=.96:g<-300?f*=1.15:g<-120&&(f*=1.08),l.turboT>0?(l.turboT-=t,f*=1.18):l.turbos>0&&d<9e-4&&l.d<c-300&&g>-200&&g<120&&Math.random()<t*(.05+l.aggro*.1)&&(l.turbos--,l.turboT=Ic),l.d>c+250&&(f=0),l.bumpT>0&&(l.bumpT-=t,f*=.6),l.hp<35&&(f*=.8+.2*(l.hp/35));const M=n.map(_=>({d:_.d,x:_.x,v:_.v,len:s(_)}));for(const _ of i)_!==l&&M.push({d:_.d,x:_.x,v:_.v,len:4.4});M.push({d:r.pos,x:r.px,v:r.speed,len:4.4});let m=null;for(const _ of M){const v=_.d-l.d;v>0&&v<22+l.v*.5&&Math.abs(_.x-l.x)<2.6&&_.v<l.v+2&&(!m||v<m.d-l.d)&&(m=_)}let p=Math.max(-6,Math.min(6,u.curve*2200))+l.lane*.5;if(m){const _=m.x-3.4,v=m.x+3.4,E=_>-Z+1.2,w=v<Z-1.2;p=E&&(!w||Math.abs(_-l.x)<Math.abs(v-l.x))?_:w?v:l.x,!E&&!w&&(f=Math.min(f,m.v*(.98-(1-l.aggro)*.05)))}p=Math.max(-Z+1.4,Math.min(Z-1.4,p));const x=Math.sign(p-l.x)*Math.min(Math.abs(p-l.x),(6+l.aggro*4)*t);l.x+=x,l.steer+=(x/Math.max(t,.001)/10-l.steer)*Math.min(1,t*8),l.braking=f<l.v-3,l.v+=Math.sign(f-l.v)*Math.min(Math.abs(f-l.v),(l.braking||l.turboT>0?40:22)*t);for(const _ of n)Math.abs(_.d-l.d)<s(_)&&Math.abs(_.x-l.x)<2&&(l.v=Math.min(l.v,_.v*.9),l.x+=Math.sign(l.x-_.x||1)*.6);for(const _ of i)if(_!==l&&Math.abs(_.d-l.d)<4.2&&Math.abs(_.x-l.x)<1.9){const v=Math.sign(l.x-_.x||1)*.4;l.x+=v,l.d<_.d&&(l.v=Math.min(l.v,_.v))}l.d+=l.v*t,l.spin-=l.v*t/.37,l.finished<0&&l.d>=c&&(l.finished=a)}}function Ph(i,t,e){let n=1;for(const s of i)e>=0?s.finished>=0&&s.finished<e&&n++:(s.finished>=0||s.d>t)&&n++;return n}const Kr=i=>`${i}${i===1?"ST":i===2?"ND":i===3?"RD":"TH"}`;function Zr(i,t,e,n,s,r){const a=t.goalDist,o=i.map(c=>({name:c.name,car:c.spec.name,time:c.finished>=0?c.finished:c.wrecked?1/0:r+Math.max(0,a-c.d)/Math.max(20,c.v||c.vmax),player:!1,estimated:c.finished<0&&!c.wrecked}));return o.push({name:e,car:n,time:s,player:!0,estimated:!1}),o.sort((c,l)=>c.time-l.time),o.map((c,l)=>({...c,pos:l+1}))}const Lh=i=>{const t=Math.floor(i/60),e=i-t*60;return`${t}'${e.toFixed(2).padStart(5,"0")}`},Vg="modulepreload",Wg=function(i,t){return new URL(i,t).href},Dh={},Xg=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=Wg(l,n),l in Dh)return;Dh[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const M=a[g];if(M.href===l&&(!h||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Vg,h||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((g,M)=>{f.addEventListener("load",g),f.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})},ci=1,qg="turbo-horizon-86";function Yg(i){const t=Math.random().toString(36).slice(2,10),e=new BroadcastChannel(`th86-${i}`),n=new Map;return e.onmessage=s=>{var a;const r=s.data;!r||r.f===t||r.t&&r.t!==t||(a=n.get(r.a))==null||a(r.d,r.f)},{selfId:t,send:(s,r,a)=>e.postMessage({a:s,d:r,f:t,t:a}),on:(s,r)=>n.set(s,r),onLeave:()=>{},onJoin:()=>{},leave:()=>e.close()}}async function $g(i){const t=await Xg(()=>import("./index-BRIyx3g7.js"),[],import.meta.url),e=t.joinRoom({appId:qg},i),n=new Map,s=r=>{let a=n.get(r);return a||(a=e.makeAction(r),n.set(r,a)),a};return{selfId:t.selfId,send:(r,a,o)=>{s(r).send(a,o?{target:o}:void 0).catch(()=>{})},on:(r,a)=>{s(r).onMessage=(o,c)=>a(o,c.peerId)},onLeave:r=>{e.onPeerLeave=r},onJoin:r=>{e.onPeerJoin=r},leave:()=>{e.leave().catch(()=>{})}}}const $e=(i,t,e,n=0)=>typeof i=="number"&&Number.isFinite(i)?Math.max(t,Math.min(e,i)):n,Vn=(i,t)=>typeof i=="string"?i.slice(0,t):"";function Pc(i){return i.toUpperCase().replace(/[^A-Z0-9 -]/g,"").replace(/\s+/g," ").trim().slice(0,10)}class Kg{constructor(t,e){this.room=t,this.peers=new Map,this.status="connecting",this.error="",this.selfId="",this.tr=null,this.timer=0,this.me={name:"PLAYER",car:0,paint:0,status:"lobby",raceId:""},this.onGo=null,this.onSt=null,this.onHit=null,(e?Promise.resolve(Yg(t)):$g(t)).then(n=>{this.tr=n,this.selfId=n.selfId,this.status="online",n.on("hi",(s,r)=>this.gotHi(s,r)),n.on("go",(s,r)=>this.gotGo(s,r)),n.on("st",(s,r)=>this.gotSt(s,r)),n.on("hit",(s,r)=>this.gotHit(s,r)),n.onJoin(s=>this.sendHi(s)),n.onLeave(s=>this.peers.delete(s)),this.sendHi(),this.timer=window.setInterval(()=>{this.sendHi();const s=performance.now()/1e3;for(const[r,a]of this.peers)s-a.seen>6&&this.peers.delete(r)},1e3)}).catch(n=>{this.status="error",this.error=String((n==null?void 0:n.message)??n)})}update(t){}setMe(t){const e=JSON.stringify(this.me);Object.assign(this.me,t),JSON.stringify(this.me)!==e&&this.sendHi()}sendGo(t){var e;(e=this.tr)==null||e.send("go",{p:ci,...t})}sendSt(t){var e;(e=this.tr)==null||e.send("st",{p:ci,...t})}sendHit(t){var e;(e=this.tr)==null||e.send("hit",{p:ci,...t})}gotHit(t,e){var s;const n=t;!n||n.p!==ci||(s=this.onHit)==null||s.call(this,{r:Vn(n.r,24),to:Vn(n.to,64),n:Math.round($e(n.n,0,10))},e)}leave(){var t;window.clearInterval(this.timer),(t=this.tr)==null||t.leave(),this.tr=null,this.peers.clear()}list(){return[...this.peers.values()].sort((t,e)=>t.joined-e.joined)}sendHi(t){var e;(e=this.tr)==null||e.send("hi",{p:ci,...this.me},t)}gotHi(t,e){const n=t;if(!n||n.p!==ci)return;const s=this.peers.get(e),r=performance.now()/1e3;s||this.sendHi(e),this.peers.set(e,{id:e,name:Pc(Vn(n.name,40))||"PLAYER",car:Math.round($e(n.car,0,63)),paint:Math.round($e(n.paint,0,15)),status:n.status==="race"?"race":"lobby",raceId:Vn(n.raceId,24),joined:(s==null?void 0:s.joined)??r,seen:r})}gotGo(t,e){var a;const n=t;if(!n||n.p!==ci||!Array.isArray(n.players))return;const s=n.players.slice(0,8).map(o=>({id:Vn(o==null?void 0:o.id,64),name:Pc(Vn(o==null?void 0:o.name,40))||"PLAYER",car:Math.round($e(o==null?void 0:o.car,0,63)),paint:Math.round($e(o==null?void 0:o.paint,0,15))})).filter(o=>o.id),r={raceId:Vn(n.raceId,24),route:Math.round($e(n.route,0,5)),seed:Math.round($e(n.seed,0,1e9)),turbos:Math.round($e(n.turbos,1,9,5)),weapons:n.weapons===!0,ammo:Math.round($e(n.ammo,10,999,300)),players:s};r.raceId&&((a=this.onGo)==null||a.call(this,r,e))}gotSt(t,e){var s;const n=t;!n||n.p!==ci||(s=this.onSt)==null||s.call(this,{r:Vn(n.r,24),d:$e(n.d,-1e3,1e6),x:$e(n.x,-50,50),v:$e(n.v,0,200),steer:$e(n.steer,-2,2),br:n.br===!0,tb:n.tb===!0,hp:$e(n.hp,0,100,100),fin:$e(n.fin,-1,1e5,-1),gun:Vn(n.gun,64)},e)}}function Nh(){const i=location.hash.replace(/^#/,"");return i.startsWith("join")?i.slice(5).toLowerCase().replace(/[^a-z0-9-]/g,"").slice(0,24)||"lobby":null}function Zg(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let x=0,_=o.length;x<_;x++){const v=o[x],E=i.attributes[v];c[v]=new E.constructor(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);const w=i.morphAttributes[v];w&&(l[v]||(l[v]=[]),w.forEach((T,C)=>{const b=new T.array.constructor(T.count*T.itemSize);l[v][C]=new T.constructor(b,T.itemSize,T.normalized)}))}const f=t*.5,g=Math.log10(1/t),M=Math.pow(10,g),m=f*M;for(let x=0;x<r;x++){const _=n?n.getX(x):x;let v="";for(let E=0,w=o.length;E<w;E++){const T=o[E],C=i.getAttribute(T),b=C.itemSize;for(let S=0;S<b;S++)v+=`${~~(C[u[S]](_)*M+m)},`}if(v in e)h.push(e[v]);else{for(let E=0,w=o.length;E<w;E++){const T=o[E],C=i.getAttribute(T),b=i.morphAttributes[T],S=C.itemSize,D=c[T],W=l[T];for(let B=0;B<S;B++){const V=u[B],et=d[B];if(D[et](a,C[V](_)),b)for(let U=0,rt=b.length;U<rt;U++)W[U][et](a,b[U][V](_))}}e[v]=a,h.push(a),a++}}const p=i.clone();for(const x in i.attributes){const _=c[x];if(p.setAttribute(x,new _.constructor(_.array.slice(0,a*_.itemSize),_.itemSize,_.normalized)),x in l)for(let v=0;v<l[x].length;v++){const E=l[x][v];p.morphAttributes[x][v]=new E.constructor(E.array.slice(0,a*E.itemSize),E.itemSize,E.normalized)}}return p.setIndex(h),p}class ut{constructor(t=!1){this.pos=[],this.col=[],this.uvs=[],this.tiles=[],this.hasUv=!1,this.hasTile=!1,this.curTile=[12,0,0],this.m=null,this.tmp=new $,this.c=new Lt,this.hasTile=t}layer(t,e){const n=this.curTile;return this.hasTile=!0,this.curTile=[t,0,0],e(),this.curTile=n,this}with(t,e){const n=this.m;return this.m=n?n.clone().multiply(t):t,e(),this.m=n,this}push(t,e,n){this.tmp.set(t[0],t[1],t[2]),this.m&&this.tmp.applyMatrix4(this.m),this.pos.push(this.tmp.x,this.tmp.y,this.tmp.z),this.c.setHex(e),this.col.push(this.c.r,this.c.g,this.c.b),n&&(this.hasUv=!0),this.uvs.push(n?n[0]:0,n?n[1]:0),this.tiles.push(this.curTile[0],this.curTile[1],this.curTile[2])}tri(t,e,n,s,r){return this.push(t,s,r==null?void 0:r[0]),this.push(e,s,r==null?void 0:r[1]),this.push(n,s,r==null?void 0:r[2]),this}quad(t,e,n,s,r,a){if(a){const[o,c,l,h]=a;this.tri(t,e,n,r,[[o,c],[l,c],[l,h]]),this.tri(t,n,s,r,[[o,c],[l,h],[o,h]])}else this.tri(t,e,n,r),this.tri(t,n,s,r);return this}quadC(t,e,n,s,r){return this.push(t,r[0]),this.push(e,r[1]),this.push(n,r[2]),this.push(t,r[0]),this.push(n,r[2]),this.push(s,r[3]),this}quadT(t,e,n,s,r,a,o){return this.hasTile=!0,this.curTile=[o[0],o[1],0],this.quad(t,e,n,s,r,a),this.curTile=[12,0,0],this}facadeBox(t,e,n,s,r,a,o,c,l,h,u,d=0){const[f,g]=Array.isArray(h)?h:[h,h],M=t-s/2,m=t+s/2,p=e-r/2,x=e+r/2,_=n-a/2,v=n+a/2,E=r/l,w=s/c,T=a/c;return this.quadT([m,p,v],[M,p,v],[M,x,v],[m,x,v],f,[d,0,d+w,E],o),this.quadT([M,p,_],[m,p,_],[m,x,_],[M,x,_],f,[d+.5,0,d+.5+w,E],o),this.quadT([M,p,v],[M,p,_],[M,x,_],[M,x,v],g,[d+.25,0,d+.25+T,E],o),this.quadT([m,p,_],[m,p,v],[m,x,v],[m,x,_],g,[d+.75,0,d+.75+T,E],o),this.quad([M,x,_],[m,x,_],[m,x,v],[M,x,v],u),this}poly(t,e){for(let n=1;n<t.length-1;n++)this.tri(t[0],t[n],t[n+1],e);return this}box(t,e,n,s,r,a,o){const c=Array.isArray(o)?o:[o],l=c[0],h=c[1]??l,u=c[2]??l,d=c[3]??l,f=t-s/2,g=t+s/2,M=e-r/2,m=e+r/2,p=n-a/2,x=n+a/2;return this.quad([f,m,p],[g,m,p],[g,m,x],[f,m,x],h),this.quad([f,M,p],[f,M,x],[g,M,x],[g,M,p],l),this.quad([f,M,p],[g,M,p],[g,m,p],[f,m,p],u),this.quad([g,M,x],[f,M,x],[f,m,x],[g,m,x],d),this.quad([f,M,x],[f,M,p],[f,m,p],[f,m,x],l),this.quad([g,M,p],[g,M,x],[g,m,x],[g,m,p],l),this}prism(t,e,n,s,r,a,o,c,l=null,h=0){const u=Array.isArray(c)?c:[c];for(let d=0;d<o;d++){const f=h+d/o*Math.PI*2,g=h+(d+1)/o*Math.PI*2,M=[t+Math.cos(f)*r,n,e+Math.sin(f)*r],m=[t+Math.cos(g)*r,n,e+Math.sin(g)*r],p=[t+Math.cos(g)*a,s,e+Math.sin(g)*a],x=[t+Math.cos(f)*a,s,e+Math.sin(f)*a];a<=1e-4?this.tri(M,m,x,u[d%u.length]):this.quad(M,m,p,x,u[d%u.length])}if(l!==null&&a>1e-4){const d=[];for(let f=0;f<o;f++){const g=h+f/o*Math.PI*2;d.push([t+Math.cos(g)*a,s,e+Math.sin(g)*a])}this.poly(d,l)}return this}blob(t,e,n,s,r,a,o){const c=new Qc(1,0),l=c.attributes.position,h=Array.isArray(o)?o:[o];for(let u=0;u<l.count;u+=3){const d=M=>[t+l.getX(M)*s,e+l.getY(M)*r,n+l.getZ(M)*a],f=l.getY(u)+l.getY(u+1)+l.getY(u+2),g=h.length>1?f>.3?h[0]:h[1]:h[0];this.tri(d(u),d(u+1),d(u+2),g)}return c.dispose(),this}build(t=!1){const e=new Be;if(e.setAttribute("position",new Me(this.pos,3)),e.setAttribute("color",new Me(this.col,3)),this.hasUv&&e.setAttribute("uv",new Me(this.uvs,2)),this.hasTile&&e.setAttribute("tile",new Me(this.tiles,3)),t){const n=Zg(e,1e-4);return e.dispose(),n.computeVertexNormals(),n.computeBoundingSphere(),n}return e.computeVertexNormals(),e.computeBoundingSphere(),e}get empty(){return this.pos.length===0}}function jg(i){return new Nt().makeRotationY(i)}function Uh(i,t,e){return new Nt().makeTranslation(i,t,e)}const ot={ASPHALT:0,PAINT:1,KERB:2,GRASS:3,SAND:4,SEA:5,CONCRETE:6,TUNNEL:7,PAVING:8,CITY:9,BAY:10,SHALLOW:11,FOAM:12,CEILING:13,DIRT:14,PLAIN:15},Jg={[ot.SEA]:.04,[ot.BAY]:.03,[ot.SHALLOW]:.06,[ot.FOAM]:.09},q=128,In=4;class nl{constructor(t){this.cv=t,this.s=1,this.g=t.getContext("2d",{willReadFrequently:!0})}seed(t){this.s=t}rnd(){return this.s=this.s*1103515245+12345&2147483647,this.s/2147483647}noise(t,e,n,s,r=[1,1,1]){const a=this.g.createImageData(q,q);for(let o=0;o<q*q;o++){const c=Math.max(0,Math.min(1,n+(this.rnd()-.5)*2*s));a.data[o*4]=255*c*r[0],a.data[o*4+1]=255*c*r[1],a.data[o*4+2]=255*c*r[2],a.data[o*4+3]=255}this.g.putImageData(a,t,e)}wrapRect(t,e,n,s,r,a,o){const c=this.g;c.fillStyle=o;for(const l of[0,-q])for(const h of[0,-q]){const u=n+l,d=s+h;u+r<=0||d+a<=0||u>=q||d>=q||c.fillRect(t+Math.max(0,u),e+Math.max(0,d),Math.min(q,u+r)-Math.max(0,u),Math.min(q,d+a)-Math.max(0,d))}}dot(t,e,n,s=1){this.wrapRect(t,e,Math.floor(this.rnd()*q),Math.floor(this.rnd()*q),s,s,n)}grey(t,e=1){const n=Math.round(255*t);return`rgba(${n},${n},${n},${e})`}}function Qg(i,t){const e=t%In*q,n=Math.floor(t/In)*q,s=i.g;switch(i.seed(t*7919+13),s.save(),s.beginPath(),s.rect(e,n,q,q),s.clip(),t){case ot.ASPHALT:{i.noise(e,n,.88,.05);for(let r=0;r<700;r++)i.dot(e,n,i.grey(i.rnd()<.5?.97:.72));i.wrapRect(e,n,70,20,34,22,i.grey(.8)),i.wrapRect(e,n,70,20,34,1,i.grey(.68)),i.wrapRect(e,n,70,41,34,1,i.grey(.68)),s.strokeStyle=i.grey(.6),s.lineWidth=1;for(let r=0;r<3;r++){s.beginPath();let a=e+i.rnd()*q,o=n+i.rnd()*q;s.moveTo(a,o);for(let c=0;c<7;c++)a+=(i.rnd()-.5)*14,o+=3+i.rnd()*7,s.lineTo(a,o);s.stroke()}i.wrapRect(e,n,26,0,14,q,"rgba(0,0,0,0.05)"),i.wrapRect(e,n,88,0,14,q,"rgba(0,0,0,0.05)");break}case ot.PAINT:{i.noise(e,n,.97,.03);for(let r=0;r<160;r++)i.dot(e,n,i.grey(.78+i.rnd()*.1),i.rnd()<.3?2:1);break}case ot.KERB:{for(let r=0;r<q;r++){const a=.78+.22*Math.sin(r/q*Math.PI);s.fillStyle=i.grey(a),s.fillRect(e+r,n,1,q)}for(let r=0;r<q;r+=32)i.wrapRect(e,n,0,r,q,2,i.grey(.55));for(let r=0;r<200;r++)i.dot(e,n,"rgba(0,0,0,0.12)");break}case ot.GRASS:{i.noise(e,n,.84,.06);for(let r=0;r<40;r++){const a=i.rnd()*q,o=i.rnd()*q,c=4+i.rnd()*8;i.wrapRect(e,n,a,o,c,c*.6,"rgba(0,0,0,0.08)")}for(let r=0;r<420;r++){const a=Math.floor(i.rnd()*q),o=Math.floor(i.rnd()*q),c=i.rnd()<.6;i.wrapRect(e,n,a,o,1,2+Math.floor(i.rnd()*3),c?i.grey(1,.85):"rgba(0,0,0,0.25)")}for(let r=0;r<14;r++)i.dot(e,n,"rgba(255,255,255,1)",2);break}case ot.DIRT:{i.noise(e,n,.85,.08);for(let r=0;r<120;r++)i.dot(e,n,i.rnd()<.5?i.grey(1):i.grey(.62),i.rnd()<.3?2:1);break}case ot.SAND:{for(let r=0;r<q;r++)for(let a=0;a<q;a++){const c=.9+Math.sin(a/q*Math.PI*8+Math.sin(r/q*Math.PI*2)*2.2)*.04+(i.rnd()-.5)*.06;s.fillStyle=i.grey(c),s.fillRect(e+a,n+r,1,1)}for(let r=0;r<70;r++)i.dot(e,n,i.grey(1),i.rnd()<.3?2:1);for(let r=0;r<8;r++)i.wrapRect(e,n,40+r%2*7+r*2,r*16,4,7,"rgba(0,0,0,0.13)");break}case ot.SEA:case ot.BAY:case ot.SHALLOW:{const r=t===ot.SHALLOW?.86:.8;if(i.noise(e,n,r,.03),t===ot.SHALLOW){s.strokeStyle=i.grey(1,.55);for(let a=0;a<26;a++){s.beginPath();const o=e+i.rnd()*q,c=n+i.rnd()*q;s.moveTo(o,c),s.quadraticCurveTo(o+(i.rnd()-.5)*30,c+(i.rnd()-.5)*30,o+(i.rnd()-.5)*40,c+(i.rnd()-.5)*40),s.stroke()}}for(let a=0;a<60;a++){const o=i.rnd()*q,c=i.rnd()*q,l=6+i.rnd()*16;i.wrapRect(e,n,o,c+1,l,1,"rgba(0,0,0,0.12)"),i.wrapRect(e,n,o+2,c,l-3,1,i.grey(1,t===ot.BAY?.55:.9))}for(let a=0;a<40;a++)i.dot(e,n,i.grey(1));break}case ot.FOAM:{i.noise(e,n,.93,.07);for(let r=0;r<80;r++)i.wrapRect(e,n,i.rnd()*q,i.rnd()*q,3+i.rnd()*8,2,"rgba(0,0,0,0.08)");break}case ot.CONCRETE:{i.noise(e,n,.88,.04);for(let r=0;r<10;r++)i.wrapRect(e,n,i.rnd()*q,i.rnd()*q,6+i.rnd()*20,4+i.rnd()*14,"rgba(0,0,0,0.05)");i.wrapRect(e,n,0,0,2,q,i.grey(.6)),i.wrapRect(e,n,64,0,1,q,i.grey(.72)),i.wrapRect(e,n,0,0,q,1,i.grey(.72));for(let r=0;r<4;r++)i.wrapRect(e,n,10+r*31,0,2,20+i.rnd()*40,"rgba(0,0,0,0.07)");break}case ot.TUNNEL:{i.noise(e,n,.93,.03);for(let r=0;r<q;r+=16)i.wrapRect(e,n,0,r,q,1,i.grey(.72));for(let r=0;r<q;r+=16)for(let a=r/16%2?8:0;a<q;a+=16)i.wrapRect(e,n,a,r,1,16,i.grey(.76));for(let r=0;r<6;r++)i.wrapRect(e,n,i.rnd()*q,i.rnd()*q,10,6,"rgba(0,0,0,0.08)");break}case ot.CEILING:{i.noise(e,n,.86,.04);for(let r=0;r<q;r+=32)i.wrapRect(e,n,r,0,2,q,i.grey(.6));i.wrapRect(e,n,0,60,q,6,i.grey(.7));break}case ot.PAVING:{i.noise(e,n,.9,.04);for(let r=0;r<q;r+=16){i.wrapRect(e,n,0,r,q,1,i.grey(.68));for(let a=r/16%2?16:0;a<q;a+=32)i.wrapRect(e,n,a,r,1,16,i.grey(.68))}for(let r=0;r<12;r++)i.wrapRect(e,n,Math.floor(i.rnd()*4)*32+1,Math.floor(i.rnd()*8)*16+1,31,15,"rgba(0,0,0,0.05)");break}case ot.CITY:{s.fillStyle="#16182c",s.fillRect(e,n,q,q);for(let r=0;r<4;r++){const a=r*32+14;i.wrapRect(e,n,0,a,q,3,"#3a3a50"),i.wrapRect(e,n,r*32+14,0,3,q,"#3a3a50");for(let o=2;o<q;o+=8)i.wrapRect(e,n,o,a-1,1,1,"#ffd890")}for(let r=0;r<90;r++){const a=["#ffe8a0","#fff6d8","#a0f0ff","#ffb060"][Math.floor(i.rnd()*4)];i.dot(e,n,a)}for(let r=0;r<18;r++){const a=Math.floor(i.rnd()*4)*32+15;i.wrapRect(e,n,i.rnd()*q,a,2,1,i.rnd()<.5?"#ff3020":"#ffffff")}break}default:s.fillStyle="#ffffff",s.fillRect(e,n,q,q)}s.restore()}function t2(){const i=document.createElement("canvas");i.width=i.height=q*In;const t=new nl(i);for(let e=0;e<16;e++)Qg(t,e);return il(i)}function il(i){const t=i.getContext("2d"),e=new Uint8Array(q*q*4*16);for(let s=0;s<16;s++){const r=t.getImageData(s%In*q,Math.floor(s/In)*q,q,q).data;for(let a=0;a<q;a++)e.set(r.subarray((q-1-a)*q*4,(q-a)*q*4),(s*q*q+a*q)*4)}const n=new Xc(e,q,q,16);return n.wrapS=n.wrapT=Ea,n.magFilter=hn,n.minFilter=fi,n.generateMipmaps=!0,n.colorSpace=ke,n.needsUpdate=!0,n}function pr(i){return[i,0]}const W0=new F0(new Uint8Array([255,255,255,255]),1,1);W0.needsUpdate=!0;function Ia(i,t,e){const n=e??{value:0};return i.map=W0,i.onBeforeCompile=s=>{s.uniforms.uTime=n,s.uniforms.uArr={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 tile;
varying vec3 vTile;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vTile = tile;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTile;
uniform float uTime;
uniform highp sampler2DArray uArr;`).replace("#include <map_fragment>",`
#ifdef USE_MAP
  vec2 tuv = vMapUv + vec2(0.0, vTile.z * uTime);
  diffuseColor *= texture(uArr, vec3(tuv, vTile.x + 0.25));
#endif`)},i.customProgramCacheKey=()=>"tilearray",n}const be={HOTEL:0,DECO:1,SHOP:2,MOTEL:3,OFFICE_WARM:4,OFFICE_COOL:5,OFFICE_DARK:6,APARTMENT:7,STONE:8};function e2(i,t){const e=t%In*q,n=Math.floor(t/In)*q,s=i.g;i.seed(t*104729+7);const r=(a,o,c,l,h)=>{s.fillStyle=h,s.fillRect(e+a,n+o,c,l)};switch(s.save(),s.beginPath(),s.rect(e,n,q,q),s.clip(),t){case be.HOTEL:{r(0,0,q,q,"#f4f2ec");for(let a=0;a<4;a++){const o=a*32;r(0,o+30,q,2,"#d8d4cc");for(let c=0;c<4;c++){const l=c*32+5;r(l-1,o+5,24,20,"#c8c8c8");const h=s.createLinearGradient(0,n+o+6,0,n+o+24);h.addColorStop(0,"#2a6aa8"),h.addColorStop(1,"#6ab4e4"),s.fillStyle=h,s.fillRect(e+l,n+o+6,22,18),r(l+10,o+6,2,18,"#e8e8e8"),s.fillStyle="rgba(255,255,255,0.35)",s.beginPath(),s.moveTo(e+l+2,n+o+22),s.lineTo(e+l+9,n+o+7),s.lineTo(e+l+12,n+o+7),s.lineTo(e+l+5,n+o+22),s.fill(),r(l-3,o+21,28,2,"#ffffff");for(let u=0;u<7;u++)r(l-2+u*4,o+23,1,5,"#ffffff");r(l-3,o+28,28,2,"#bdbab2")}}break}case be.DECO:{r(0,0,q,q,"#f6f0e4");for(let a=0;a<q;a+=32)r(a,0,4,q,"#e2dacb"),r(a+4,0,1,q,"#cfc6b4");for(let a=0;a<4;a++){const o=a*32;r(0,o,q,3,"#e8e0d0");for(let c=0;c<4;c++){const l=c*32+9;s.fillStyle="#3a78a8",s.beginPath(),s.arc(e+l+7,n+o+13,6,0,Math.PI*2),s.fill(),s.strokeStyle="#ffffff",s.lineWidth=1.5,s.stroke(),r(l+2,o+22,10,6,"#3a78a8"),r(l+1,o+21,12,1,"#ffffff")}}break}case be.SHOP:{r(0,0,q,q,"#f2eee6"),r(0,0,q,10,"#e4ddd0");for(let a=0;a<4;a++)r(a*32+8,18,16,14,"#4a86b8");r(0,40,q,4,"#d0c8b8"),r(4,52,120,70,"#2a3a4c");for(let a=0;a<30;a++)r(6+i.rnd()*110,70+i.rnd()*44,4+i.rnd()*6,3+i.rnd()*6,["#ff6a8a","#ffe060","#60d0ff","#ffffff","#90e060"][Math.floor(i.rnd()*5)]);r(4,52,120,3,"#8ab8d8"),r(54,64,20,58,"#1a2430"),r(70,92,2,4,"#e0c060");for(let a=4;a<124;a+=30)r(a,52,2,70,"#d8d8d8");break}case be.MOTEL:{r(0,0,q,q,"#f4efe6");for(let a=0;a<2;a++){const o=a*64;r(0,o+58,q,6,"#d6d0c4"),r(0,o+54,q,2,"#ffffff");for(let c=0;c<16;c++)r(c*8,o+54,1,6,"#ffffff");for(let c=0;c<2;c++){const l=c*64;r(l+6,o+14,16,38,["#2a8a8a","#c85a4a"][c]),r(l+18,o+32,2,3,"#e0c060"),r(l+30,o+18,26,18,"#4a7aa8"),r(l+30,o+18,26,2,"#ffffff"),r(l+34,o+38,14,8,"#c8c8c8"),r(l+35,o+39,12,1,"#9a9a9a")}}break}case be.OFFICE_WARM:case be.OFFICE_COOL:case be.OFFICE_DARK:{r(0,0,q,q,"#1a1e36");const a=t===be.OFFICE_WARM?.42:t===be.OFFICE_COOL?.55:.12,o=["#ffe6a0","#ffd27a","#fff2c8"],c=["#e8f6ff","#c8ecff","#ffffff"];for(let l=0;l<8;l++){const h=l*16,u=t===be.OFFICE_COOL&&i.rnd()<.5;for(let d=0;d<8;d++){const f=d*16,g=u||i.rnd()<a,M=g?i.rnd()<.15?"#8adfff":(t===be.OFFICE_COOL?c:o)[Math.floor(i.rnd()*3)]:"#262c4c";if(r(f+2,h+3,12,10,M),g&&i.rnd()<.4)for(let m=0;m<4;m++)r(f+2,h+4+m*3,12,1,"rgba(0,0,0,0.25)");g&&i.rnd()<.2&&r(f+5,h+8,3,5,"rgba(20,20,40,0.6)"),g||r(f+3,h+4,4,1,"rgba(120,140,200,0.4)")}r(0,h,q,2,"#2a3054")}for(let l=0;l<q;l+=16)r(l,0,2,q,"#2c3258");break}case be.APARTMENT:{r(0,0,q,q,"#2a2440");for(let a=0;a<6;a++){const o=a*21;for(let c=0;c<4;c++){const l=c*32,h=i.rnd()<.5;r(l+4,o+3,24,13,h?["#ffb860","#ffd890","#fff0c8"][Math.floor(i.rnd()*3)]:"#3a3456"),h&&r(l+4+i.rnd()*18,o+3,6,13,"rgba(255,240,220,0.6)"),r(l+2,o+15,28,2,"#8a86a0");for(let u=0;u<7;u++)r(l+3+u*4,o+17,1,3,"#6a6680");i.rnd()<.3&&r(l+24,o+9,4,6,"#b0b0c0")}}break}case be.STONE:{i.noise(e,n,.9,.05);for(let a=0;a<q;a+=16)r(0,a,q,1,"rgba(0,0,0,0.18)");break}default:r(0,0,q,q,"#ffffff")}s.restore()}function n2(){const i=document.createElement("canvas");i.width=i.height=q*In;const t=new nl(i);for(let e=0;e<16;e++)e2(t,e);return il(i)}const $t={LENS:0,LENS_ROUND:1,LENS_BAR:2,MESH:3,LOUVRE:4,TREAD:5,RIM_STAR:6,RIM_MULTI:7,RIM_MESH:8,RIM_DIAL:9,SIDEWALL:10,RIM_STEEL:11,PLAIN:12,HEADLAMP:13,SEAT:14,RIM_SIX:15},i2={star:$t.RIM_STAR,six:$t.RIM_SIX,multi:$t.RIM_MULTI,mesh:$t.RIM_MESH,dial:$t.RIM_DIAL,steel:$t.RIM_STEEL};function s2(i,t){const e=t%In*q,n=Math.floor(t/In)*q,s=i.g;i.seed(t*15485863+3);const r=(u,d,f,g,M)=>{s.fillStyle=M,s.fillRect(e+u,n+d,f,g)},a=q/2,o=(u,d,f=a,g=a)=>{s.fillStyle=d,s.beginPath(),s.arc(e+f,n+g,u,0,Math.PI*2),s.fill()},c=(u,d,f)=>{s.strokeStyle=f,s.lineWidth=d,s.beginPath(),s.arc(e+a,n+a,u,0,Math.PI*2),s.stroke()},l=(u,d=14)=>{o(d+3,i.grey(.55)),o(d,i.grey(.92));for(let f=0;f<u;f++){const g=f/u*Math.PI*2;o(2.6,i.grey(.35),a+Math.cos(g)*d*.62,a+Math.sin(g)*d*.62)}o(4,i.grey(.7))},h=()=>{c(61,6,i.grey(1)),c(57,2,i.grey(.6))};switch(s.save(),s.beginPath(),s.rect(e,n,q,q),s.clip(),s.clearRect(e,n,q,q),t){case $t.LENS:{r(0,0,q,q,i.grey(.55)),r(6,8,q-12,q-16,i.grey(.88));for(let d=10;d<q-10;d+=9)r(6,d,q-12,2,i.grey(.62));for(let d=10;d<q-8;d+=14)r(d,8,1,q-16,i.grey(.7));const u=s.createRadialGradient(e+a,n+a,4,e+a,n+a,60);u.addColorStop(0,"rgba(255,255,255,0.75)"),u.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=u,s.fillRect(e,n,q,q);break}case $t.LENS_ROUND:{r(0,0,q,q,i.grey(.5)),o(62,i.grey(.6));for(let u=58;u>8;u-=7)o(u,i.grey(.72+(58-u)/200)),c(u,1.5,i.grey(.55+(58-u)/250));o(12,i.grey(1));break}case $t.LENS_BAR:{r(0,0,q,q,i.grey(.7));for(let u=0;u<q;u+=4)r(u,0,2,q,i.grey(.9));r(0,0,q,10,i.grey(.5)),r(0,q-10,q,10,i.grey(.5)),r(0,a-3,q,6,i.grey(1));break}case $t.MESH:{r(0,0,q,q,i.grey(.12)),s.strokeStyle=i.grey(.85),s.lineWidth=1.6;for(let u=-q;u<q*2;u+=10)s.beginPath(),s.moveTo(e+u,n),s.lineTo(e+u+q,n+q),s.stroke(),s.beginPath(),s.moveTo(e+u,n+q),s.lineTo(e+u+q,n),s.stroke();break}case $t.LOUVRE:{for(let u=0;u<q;u+=16){const d=s.createLinearGradient(0,n+u,0,n+u+16);d.addColorStop(0,i.grey(1)),d.addColorStop(.55,i.grey(.7)),d.addColorStop(.6,i.grey(.08)),d.addColorStop(1,i.grey(.15)),s.fillStyle=d,s.fillRect(e,n+u,q,16)}break}case $t.TREAD:{i.noise(e,n,.85,.05);for(const u of[30,62,94])r(u,0,5,q,i.grey(.25));for(let u=0;u<q;u+=16)for(const[d,f]of[[0,30],[35,62],[67,94],[99,q]])s.strokeStyle=i.grey(.32),s.lineWidth=2.5,s.beginPath(),s.moveTo(e+d,n+u+(d<64?0:6)),s.lineTo(e+f,n+u+(d<64?6:0)),s.stroke();break}case $t.SIDEWALL:{r(0,0,q,q,i.grey(.16)),r(0,q-10,q,10,i.grey(.1)),r(0,0,q,6,i.grey(.24)),s.fillStyle=i.grey(.62),s.font="bold 28px monospace",s.textBaseline="middle",s.save(),s.translate(e+2,n+a),s.scale(.58,1.3),s.fillText("TURBO-R",0,0),s.restore();break}case $t.HEADLAMP:{r(0,0,q,q,i.grey(.55));const u=s.createRadialGradient(e+a,n+a,2,e+a,n+a,58);u.addColorStop(0,i.grey(1)),u.addColorStop(.3,i.grey(.95)),u.addColorStop(.75,i.grey(.72)),u.addColorStop(1,i.grey(.5)),s.fillStyle=u,s.fillRect(e+4,n+4,q-8,q-8),s.strokeStyle="rgba(0,0,0,0.12)",s.lineWidth=1;for(let d=8;d<q;d+=10)s.beginPath(),s.moveTo(e+d,n),s.lineTo(e+d,n+q),s.stroke(),s.beginPath(),s.moveTo(e,n+d),s.lineTo(e+q,n+d),s.stroke();break}case $t.SEAT:{r(0,0,q,q,i.grey(.8));for(let u=24;u<q-24;u+=10)r(u,0,2,q,i.grey(.55));r(0,0,20,q,i.grey(.65)),r(q-20,0,20,q,i.grey(.65));break}case $t.RIM_STAR:{h(),s.fillStyle=i.grey(.92);for(let u=0;u<5;u++){const d=u/5*Math.PI*2;s.save(),s.translate(e+a,n+a),s.rotate(d),s.beginPath(),s.moveTo(-9,0),s.lineTo(-6,59),s.lineTo(6,59),s.lineTo(9,0),s.fill(),s.fillStyle=i.grey(.6),s.fillRect(-1,10,2,46),s.fillStyle=i.grey(.92),s.restore()}l(5);break}case $t.RIM_SIX:{h();for(let u=0;u<6;u++){const d=u/6*Math.PI*2;s.save(),s.translate(e+a,n+a),s.rotate(d),s.fillStyle=i.grey(.9),s.fillRect(-7,0,5,59),s.fillRect(2,0,5,59),s.restore()}l(5,16);break}case $t.RIM_MULTI:{h();for(let u=0;u<7;u++){const d=u/7*Math.PI*2;s.save(),s.translate(e+a,n+a),s.rotate(d),s.fillStyle=i.grey(.92),s.beginPath(),s.moveTo(-4,8),s.quadraticCurveTo(-14,34,-6,59),s.lineTo(5,59),s.quadraticCurveTo(-2,34,6,8),s.fill(),s.restore()}l(5);break}case $t.RIM_MESH:{s.save(),s.beginPath(),s.arc(e+a,n+a,58,0,Math.PI*2),s.clip(),s.strokeStyle=i.grey(.88),s.lineWidth=3;for(let u=0;u<20;u++){const d=u/20*Math.PI*2;for(const f of[-.5,.5])s.beginPath(),s.moveTo(e+a+Math.cos(d)*14,n+a+Math.sin(d)*14),s.lineTo(e+a+Math.cos(d+f)*60,n+a+Math.sin(d+f)*60),s.stroke()}s.restore(),h(),l(5,16);break}case $t.RIM_DIAL:{o(60,i.grey(.86)),s.globalCompositeOperation="destination-out";for(let u=0;u<5;u++){const d=u/5*Math.PI*2;o(15,"#000",a+Math.cos(d)*36,a+Math.sin(d)*36)}s.globalCompositeOperation="source-over";for(let u=0;u<5;u++){const d=u/5*Math.PI*2;s.strokeStyle=i.grey(.55),s.lineWidth=2,s.beginPath(),s.arc(e+a+Math.cos(d)*36,n+a+Math.sin(d)*36,16,0,Math.PI*2),s.stroke()}h(),l(5);break}case $t.RIM_STEEL:{o(62,i.grey(.45)),o(52,i.grey(.9)),c(40,2,i.grey(.6));for(let u=0;u<8;u++){const d=u/8*Math.PI*2;o(4,i.grey(.4),a+Math.cos(d)*46,a+Math.sin(d)*46)}o(14,i.grey(.7));break}default:r(0,0,q,q,"#ffffff")}s.restore()}let jr=null;function r2(){if(jr)return jr;const i=document.createElement("canvas");i.width=i.height=q*In;const t=new nl(i);for(let e=0;e<16;e++)s2(t,e);return jr=il(i),jr}function Zn(i,t,e,n,s=10,r=7){const a=typeof n=="number"?()=>n:n,o=(c,l)=>{const h=l/r*Math.PI,u=c/s*Math.PI*2;return[t[0]+Math.sin(h)*Math.cos(u)*e[0],t[1]+Math.cos(h)*e[1],t[2]+Math.sin(h)*Math.sin(u)*e[2]]};for(let c=0;c<r;c++)for(let l=0;l<s;l++){const h=(c+.5)/r*Math.PI,u=(l+.5)/s*Math.PI*2,d=[Math.sin(h)*Math.cos(u),Math.cos(h),Math.sin(h)*Math.sin(u)];i.quad(o(l,c),o(l+1,c),o(l+1,c+1),o(l,c+1),a(d[0],d[1],d[2]))}}function X0(i,t,e,n,s=12,r=8){Zn(i,t,[e*.92,e,e*1.04],(a,o,c)=>c<-.42&&o>-.3&&o<.38?o>.2?2768472:1055270:c<-.5&&o<=-.3?14211284:Math.abs(a)<.2&&o>-.1?n:o<-.55?1710620:o>.3?16777215:15132386,s,r)}function q0(i,t,e,n,s){const r=new Lt(n).multiplyScalar(.7).getHex();Zn(i,t,e,(a,o)=>o>.15&&o<.45?s:o<-.3?r:n,10,6)}function a2(i,t,e){const n=new Lt(t).multiplyScalar(.8).getHex();Zn(i,[0,0,-.12],[.062,.062,.15],(a,o)=>o>.5?e:t,8,5),Zn(i,[0,-.012,-.33],[.052,.052,.13],n,8,5),Zn(i,[0,-.018,-.465],[.05,.055,.05],1315862,8,5);const s=2763824,r=4869718;return i.box(0,.035,-.56,.06,.075,.26,[s,r,s,s]),i.box(0,.077,-.56,.04,.01,.22,r),i.box(0,.02,-.4,.05,.03,.12,1973792),i.with(new Nt().makeTranslation(0,-.03,-.47).multiply(new Nt().makeRotationX(.25)),()=>i.box(0,0,0,.04,.1,.045,1710620)),i.with(new Nt().makeTranslation(0,-.07,-.6).multiply(new Nt().makeRotationX(-.18)),()=>i.box(0,0,0,.032,.16,.05,[2105380,3158068])),i.with(new Nt().makeRotationX(-Math.PI/2),()=>{i.prism(0,.04,.69,.8,.024,.024,8,[s,1052690],s),i.prism(0,.04,.8,.9,.013,.013,6,r,328965)}),i.box(0,.08,-.66,.012,.025,.012,r),[0,.04,-.92]}const o2=3428460,c2=3954804,mn=1447448,Ce=657932,ls=13949152,Oh=723725,Jr=5921376,je=(i,t)=>new Lt(i).multiplyScalar(t).getHex(),l2=(i,t,e)=>new Lt(i).lerp(new Lt(t),e).getHex();function $s(i,t){const e=i.length,n=i.map(o=>o.z),s=i.map(o=>o[t]),r=[];for(let o=0;o<e-1;o++)r.push((s[o+1]-s[o])/Math.max(1e-4,n[o+1]-n[o]));const a=[];for(let o=0;o<e;o++)if(o===0)a.push(r[0]*.5);else if(o===e-1)a.push(r[e-2]*.5);else if(r[o-1]*r[o]<=0)a.push(0);else{const c=(r[o-1]+r[o])/2;a.push(Math.sign(c)*Math.min(Math.abs(c),3*Math.abs(r[o-1]),3*Math.abs(r[o])))}return o=>{if(o<=n[0])return s[0];if(o>=n[e-1])return s[e-1];let c=0;for(;c<e-2&&o>n[c+1];)c++;const l=n[c+1]-n[c];if(l<1e-4)return s[c+1];const h=(o-n[c])/l,u=h*h,d=u*h;return(2*d-3*u+1)*s[c]+(d-2*u+h)*l*a[c]+(-2*d+3*u)*s[c+1]+(d-u)*l*a[c+1]}}const Qr=i=>i==="ws"||i==="rf"||i==="rw";function Pa(i,t,e,n,s,r,a,o,c,l){i.tri(t,e,n,r,[a,o,c]),i.tri(t,n,s,r,[a,c,l])}function Fh(i,t,e,n,s,r,a,o,c,l=o){i.layer(c,()=>{const h=t-s/2,u=t+s/2,d=e-r/2,f=e+r/2,g=n-a/2,M=n+a/2;i.quad([h,f,g],[u,f,g],[u,f,M],[h,f,M],o,[0,0,1,.3]),i.quad([h,d,g],[u,d,g],[u,f,g],[h,f,g],o,[0,0,1,1]),i.quad([u,d,M],[h,d,M],[h,f,M],[u,f,M],l,[0,0,1,1]),i.quad([h,d,M],[h,d,g],[h,f,g],[h,f,M],je(o,.8),[0,0,.2,1]),i.quad([u,d,g],[u,d,M],[u,f,M],[u,f,g],je(o,.8),[0,0,.2,1]),i.quad([h,d,g],[h,d,M],[u,d,M],[u,d,g],je(o,.6),[0,0,1,.3])})}function kh(i,t,e,n,s){const r=new $(...t),a=new $(...e),o=r.distanceTo(a),c=new Nt().lookAt(r,a,new $(0,1,0));c.setPosition(r.clone().add(a).multiplyScalar(.5)),i.with(c,()=>i.box(0,0,0,n,n,o,s))}function zh(i,t,e,n,s=8,r=5,a=n){const o=(c,l)=>{const h=l/r*Math.PI,u=c/s*Math.PI*2;return[t[0]+Math.sin(h)*Math.cos(u)*e,t[1]+Math.cos(h)*e,t[2]+Math.sin(h)*Math.sin(u)*e]};for(let c=0;c<r;c++)for(let l=0;l<s;l++){const h=c===1?a:n;i.quad(o(l,c),o(l+1,c),o(l+1,c+1),o(l,c+1),h)}}function _s(i,t,e,n,s){for(let r=0;r<n;r++){const a=r/n*Math.PI*2,o=(r+1)/n*Math.PI*2;i.quad([Math.cos(a)*t,Math.sin(a)*t,0],[Math.cos(o)*t,Math.sin(o)*t,0],[Math.cos(o)*e,Math.sin(o)*e,0],[Math.cos(a)*e,Math.sin(a)*e,0],s)}}function Lc(i,t,e,n,s,r,a,o,c){i.layer(c,()=>{for(let l=0;l<a;l++){const h=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.tri([t,e,n],[t+Math.cos(h)*s,e+Math.sin(h)*r,n],[t+Math.cos(u)*s,e+Math.sin(u)*r,n],o,[[.5,.5],[.5+Math.cos(h)*.5,.5+Math.sin(h)*.5],[.5+Math.cos(u)*.5,.5+Math.sin(u)*.5]])}})}function Y0(i,t,e=!1){var Q;const n=new ut(!0),s=new ut(!0),r=new ut(!0),a=new ut,o=new ut(!0),c=new ut(!0),l=i.stations,h=l[0],u=l[l.length-1],d=h.z,f=u.z,g=$s(l,"w"),M=$s(l,"yb"),m=$s(l,"belt"),p=$s(l,"top"),x=$s(l,"wt"),_=y=>{let L=l[0].seg;for(const I of l)y>=I.z-1e-6&&(L=I.seg);return L},v=je(t,.42),E=je(t,.82),w=i.group==="80s EXOTIC",T=i.wheels,C=e?.11:T.hw??.18,b=[{z:T.fz,x:e?g(T.fz)-.12:T.fx,r:T.r,hw:C,R:0,flare:0},{z:T.rz,x:e?g(T.rz)-.12:T.rx,r:e?T.r:T.r*1.03,hw:e?C:C*1.15,R:0,flare:0}];for(const y of b){y.R=y.r+(e?.06:.07);const L=y.x+y.hw+.02-g(y.z);y.flare=Math.max(i.arch??(e?.012:.035),L)}const S=y=>{let L=0;for(const I of b){const F=(y-I.z)/(I.R+.5);Math.abs(F)<1&&(L+=I.flare*Math.cos(F*Math.PI/2)**2)}return L},D=y=>{let L=-1;for(const I of b){const F=y-I.z;Math.abs(F)<=I.R&&(L=Math.max(L,I.r+Math.sqrt(I.R*I.R-F*F)))}return L},W=y=>{const L=g(y),I=M(y),F=m(y),G=p(y),z=Math.min(x(y),L-.02),xt=_(y),H=S(y),ct=D(y),_t=F-I,Mt=Qr(xt)?.03:.022,mt=[[L-.05,I],[L+H,I+.12*_t],[L+H+.014,I+.5*_t],[L+H*.85,I+.82*_t],[L-.02+H*.5,F],Qr(xt)?[L-.03-(L-.03-z)*.42,F+(G-F)*.52]:[z+(L-z)*.55,F+(G-F)*.8],[z,G],[z*.5,G+Mt*.75],[0,G+Mt]];if(ct>0){for(let bt=0;bt<4;bt++)mt[bt][1]=Math.max(mt[bt][1],ct+(bt===3?.03:0));mt[4][1]=Math.max(mt[4][1],ct+.07),mt[5][1]=Math.max(mt[5][1],mt[4][1]-.015),mt[6][1]=Math.max(mt[6][1],ct+.03)}return{z:y,seg:xt,pts:mt}},B=e?.6:.17,V=[];for(let y=0;y<l.length-1;y++){const L=Math.max(1,Math.ceil((l[y+1].z-l[y].z)/B));for(let I=0;I<L;I++)V.push(l[y].z+(l[y+1].z-l[y].z)*I/L)}V.push(f);const et=e?[-1.02,-1,-.5,.5,1,1.02]:[-1.03,-1,-.92,-.7,-.38,0,.38,.7,.92,1,1.03];for(const y of b)for(const L of et)V.push(y.z+y.R*L);V.sort((y,L)=>y-L);const U=[];for(const y of V)y<d||y>f||U.length&&y-U[U.length-1]<.006||U.push(y);const rt=U.map(W),k=(y,L,I,F=0,G=0)=>[I*(y.pts[L][0]+F),y.pts[L][1]+G,y.z],tt=((Q=l.find(y=>y.seg==="lv"))==null?void 0:Q.z)??0;for(let y=0;y<rt.length-1;y++){const L=rt[y],I=rt[y+1],F=L.seg;for(const G of[-1,1])for(let z=0;z<8;z++){let xt=k(L,z,G),H=k(I,z,G),ct=k(I,z+1,G),_t=k(L,z+1,G);G>0&&([H,_t]=[_t,H]);const Mt=(z===4||z===5)&&Qr(F),mt=(z===6||z===7)&&(F==="ws"||F==="rw");if(Mt)a.quad(xt,H,ct,_t,c2);else if(mt)a.quad(xt,H,ct,_t,o2);else if(z>=6&&F==="bed")s.quad(xt,H,ct,_t,mn);else{if(z>=6&&F==="lv")continue;n.quad(xt,H,ct,_t,z===0?v:t)}}}l.some(y=>y.seg==="lv")&&s.layer($t.LOUVRE,()=>{for(let y=0;y<rt.length-1;y++){const L=rt[y],I=rt[y+1];if(L.seg==="lv")for(const F of[-1,1])for(let G=6;G<8;G++){const z=k(L,G,F),xt=k(I,G,F),H=k(I,G+1,F),ct=k(L,G+1,F),_t=mt=>(mt-tt)/.13,Mt=mt=>Math.abs(mt[0])*2;Pa(s,z,xt,H,ct,t,[Mt(z),_t(z[2])],[Mt(xt),_t(xt[2])],[Mt(H),_t(H[2])],[Mt(ct),_t(ct[2])])}}});const J=(y,L,I)=>{const F=[];for(let z=0;z<=8;z++)F.push(k(y,z,1));for(let z=7;z>=0;z--)F.push(k(y,z,-1));const G=(y.pts[0][1]+y.pts[8][1])/2;for(let z=0;z<F.length;z++)I.tri([0,G,y.z],F[z],F[(z+1)%F.length],L)},at=rt[0],j=rt[rt.length-1];J(at,E,s),J(j,je(t,.9),s);const Tt=(y,L,I,F,G,z,xt,H)=>{const ct=Et=>{const Bt=Et.pts[I],O=Et.pts[G],vt=O[0]-Bt[0],st=O[1]-Bt[1],pt=Math.hypot(vt,st)||1,At=[F*(Bt[0]+.006),Bt[1]+.004,Et.z],St=[F*(Bt[0]+.006+vt/pt*z),Bt[1]+.004+st/pt*z,Et.z];return[At,St]},[_t,Mt]=ct(y),[mt,bt]=ct(L);H.quad(_t,mt,bt,Mt,xt)};for(let y=0;y<rt.length-1;y++){const L=rt[y],I=rt[y+1];if(Qr(L.seg))for(const F of[-1,1])Tt(L,I,4,F,5,.03,Ce,s),L.seg==="rf"?Tt(L,I,6,F,5,.025,Ce,s):Tt(L,I,6,F,5,.06,t,s)}const K=(y,L,I,F)=>{const G=[];for(let z=L;z<=8;z++)G.push(k(y,z,1,.004,.006));for(let z=7;z>=L;z--)G.push(k(y,z,-1,.004,.006));for(let z=0;z<G.length-1;z++){const xt=G[z],H=G[z+1];s.quad(xt,H,[H[0],H[1],H[2]+F],[xt[0],xt[1],xt[2]+F],I)}},ft=rt.find(y=>y.seg==="ws"),yt=rt.find(y=>y.seg==="rf");ft&&K(ft,4,Ce,.06),yt&&K(yt,6,t,-.05);const lt=(y,L)=>{const I=W(y);for(let F=0;F<4;F++){const G=I.pts[F],z=I.pts[F+1];if(L>=G[1]&&L<=z[1])return G[0]+(z[0]-G[0])*(L-G[1])/Math.max(1e-4,z[1]-G[1])}return L<I.pts[0][1]?I.pts[0][0]:I.pts[4][0]},Dt=(y,L)=>{const I=W(y);for(let F=4;F<8;F++){const G=I.pts[F],z=I.pts[F+1];if(L<=G[0]&&L>=z[0])return G[1]+(z[1]-G[1])*(G[0]-L)/Math.max(1e-4,G[0]-z[0])}return I.pts[8][1]};for(const y of b){const L=e?6:14;for(const I of[-1,1])for(let F=0;F<L;F++){const G=F/L*Math.PI,z=(F+1)/L*Math.PI,xt=(Bt,O)=>y.z+Math.cos(Bt)*O,H=(Bt,O)=>y.r+Math.sin(Bt)*O,ct=lt(xt(G,y.R),H(G,y.R))+.002,_t=lt(xt(z,y.R),H(z,y.R))+.002,Mt=y.x-y.hw-.06,mt=Math.min(H(G,y.R),Dt(xt(G,y.R),Mt)-.02),bt=Math.min(H(z,y.R),Dt(xt(z,y.R),Mt)-.02);s.quad([I*ct,H(G,y.R),xt(G,y.R)],[I*_t,H(z,y.R),xt(z,y.R)],[I*Mt,bt,xt(z,y.R)],[I*Mt,mt,xt(G,y.R)],Oh);const Et=y.R+(e?.03:.045);s.quad([I*(ct+.02),H(G,y.R),xt(G,y.R)],[I*(_t+.02),H(z,y.R),xt(z,y.R)],[I*(_t+.004),H(z,Et),xt(z,Et)],[I*(ct+.004),H(G,Et),xt(G,Et)],w||e?t:E),s.quad([I*(ct+.02),H(G,y.R),xt(G,y.R)],[I*(_t+.02),H(z,y.R),xt(z,y.R)],[I*(_t-.01),H(z,y.R-.01),xt(z,y.R-.01)],[I*(ct-.01),H(G,y.R-.01),xt(G,y.R-.01)],v)}}const zt=at.pts,ht=zt[0][1],Pt=zt[2][0],dt=d-.006,Zt=i.front??"popup";if(s.quad([-Pt*.74,ht+.02,dt+.002],[Pt*.74,ht+.02,dt+.002],[Pt*.74,ht+.19,dt+.002],[-Pt*.74,ht+.19,dt+.002],Ce),s.layer($t.MESH,()=>s.quad([-Pt*.7,ht+.04,dt],[Pt*.7,ht+.04,dt],[Pt*.7,ht+.17,dt],[-Pt*.7,ht+.17,dt],Jr,[0,0,Pt*6,1.2])),e){const y=ht+.24;for(const L of[-1,1])o.layer($t.HEADLAMP,()=>o.quad([L*Pt*.82,y-.06,dt-.002],[L*Pt*.5,y-.06,dt-.002],[L*Pt*.5,y+.06,dt-.002],[L*Pt*.82,y+.06,dt-.002],15262924,[0,0,1,1]))}else{s.box(0,ht-.02,d+.2,Pt*1.84,.03,.5,[Ce,mn]);const y=(zt[4][1]+zt[6][1])/2;for(const L of[-1,1]){const I=L*Pt*.62;if(Zt==="popup"){const F=d+.26,G=d+.62,z=ct=>p(ct)+.012,xt=(ct,_t,Mt,mt)=>s.quad([ct,z(_t),_t],[Mt,z(mt),mt],[Mt,z(mt)+.001,mt+.018],[ct,z(_t)+.001,_t+.018],Ce);xt(I-.2,F,I+.2,F),xt(I-.2,G,I+.2,G);for(const ct of[I-.2,I+.2])s.quad([ct-.008,z(F),F],[ct+.008,z(F),F],[ct+.008,z(G),G],[ct-.008,z(G),G],Ce);const H=ht+.25;s.quad([I-.17,H-.05,dt+.001],[I+.17,H-.05,dt+.001],[I+.17,H+.05,dt+.001],[I-.17,H+.05,dt+.001],mn),o.layer($t.HEADLAMP,()=>o.quad([I-.15+L*.06,H-.035,dt-.002],[I+.15+L*.06,H-.035,dt-.002],[I+.15+L*.06,H+.035,dt-.002],[I-.15+L*.06,H+.035,dt-.002],16052440,[0,0,1,1])),o.layer($t.LENS,()=>o.quad([I-.16,H-.035,dt-.002],[I-.04,H-.035,dt-.002],[I-.04,H+.035,dt-.002],[I-.16,H+.035,dt-.002],16752688,[0,0,1,1]))}else if(Zt==="round")h2(s,I,y,dt+.001,.125,.15,ls),Lc(o,I,y,dt-.002,.125,.11,16,16052440,$t.HEADLAMP);else{const F=Zt==="slim"?.06:.12;s.quad([I-.23,y-F/2-.02,dt+.001],[I+.23,y-F/2-.02,dt+.001],[I+.23,y+F/2+.02,dt+.001],[I-.23,y+F/2+.02,dt+.001],mn),o.layer($t.HEADLAMP,()=>o.quad([I-.2,y-F/2,dt-.002],[I+.12,y-F/2,dt-.002],[I+.12,y+F/2,dt-.002],[I-.2,y+F/2,dt-.002],16052440,[0,0,1,1])),o.layer($t.LENS,()=>o.quad([I+.13,y-F/2,dt-.002],[I+.21,y-F/2,dt-.002],[I+.21,y+F/2,dt-.002],[I+.13,y+F/2,dt-.002],16752688,[0,0,1,1]))}}}const N=f;for(const y of i.rear??[])for(const L of y.mirror===!1||y.x===0?[y.x]:[y.x,-y.x]){const I=[L-y.w/2,y.y-y.h/2,N+.006],F=[L+y.w/2,y.y-y.h/2,N+.006],G=[L+y.w/2,y.y+y.h/2,N+.006],z=[L-y.w/2,y.y+y.h/2,N+.006];y.c===Ce?s.layer($t.MESH,()=>s.quad(I,F,G,z,Jr,[0,0,y.w*7,y.h*7])):s.quad(I,F,G,z,y.c)}const Ge=(y,L,I,F,G,z=0,xt)=>{const H=L.w+z,ct=L.h+z,_t=xt??(L.round?$t.LENS_ROUND:L.w>.7?$t.LENS_BAR:$t.LENS);L.round?Lc(y,I,L.y,F,H/2,ct/2,16,G,_t):y.layer(_t,()=>y.quad([I-H/2,L.y-ct/2,F],[I+H/2,L.y-ct/2,F],[I+H/2,L.y+ct/2,F],[I-H/2,L.y+ct/2,F],G,[0,0,L.w>.7?H*6:1,1]))};for(const y of i.lights)for(const L of y.mirror===!1||y.x===0?[y.x]:[y.x,-y.x])Ge(o,y,L,N+.012,y.c),y.brake&&!e&&Ge(c,y,L,N+.016,16730678),e||(Ge(s,y,L,N+.008,1710622,.05,$t.PLAIN),y.round&&s.with(new Nt().makeTranslation(L,y.y,N+.01).multiply(new Nt().makeScale(1,y.h/y.w,1)),()=>_s(s,y.w/2,y.w/2+.022,16,ls)));if(i.slats){const y=i.slats;for(let L=0;L<=y.n;L++){const I=y.y0+(y.y1-y.y0)*L/y.n;s.box(0,I,N+.03,y.w*2,.03,.035,[Ce,mn])}}const Yt=j.pts[0][1],Jt=j.pts[2][0],Wt=Math.min(Yt+.15,i.plateY-.12);if(Wt-(Yt-.04)>.06&&s.box(0,(Wt+Yt-.04)/2,N+.03,Jt*1.96,Wt-Yt+.04,.09,w||e?[2763310,3684412]:[E,t]),e)s.quad([-.26,i.plateY-.08,N+.008],[.26,i.plateY-.08,N+.008],[.26,i.plateY+.08,N+.008],[-.26,i.plateY+.08,N+.008],15263960),s.quad([-.29,i.plateY-.1,N+.007],[.29,i.plateY-.1,N+.007],[.29,i.plateY+.1,N+.007],[-.29,i.plateY+.1,N+.007],3158068);else{for(const I of i.exhaust)s.with(new Nt().makeTranslation(I.x,I.y,N-.1).multiply(new Nt().makeRotationX(Math.PI/2)),()=>{s.prism(0,0,-.1,.22,I.r,I.r,12,[ls,11054260],null),s.prism(0,0,.2,.222,I.r*1.04,I.r*1.04,12,9075368,null),s.prism(0,0,.221,.08,I.r*.8,I.r*.8,12,Ce,Ce)});const y=i.plateY,L=N+.006;s.quad([-.3,y-.1,N+.004],[.3,y-.1,N+.004],[.3,y+.1,N+.004],[-.3,y+.1,N+.004],mn),s.quad([-.31,y-.105,L],[.31,y-.105,L],[.31,y-.085,L],[-.31,y-.085,L],ls),s.quad([-.31,y+.085,L],[.31,y+.085,L],[.31,y+.105,L],[-.31,y+.105,L],ls);for(const I of[-1,1]){o.layer($t.LENS,()=>o.quad([I*.36,y-.04,N+.012],[I*.49,y-.04,N+.012],[I*.49,y+.04,N+.012],[I*.36,y+.04,N+.012],15790312,[0,0,1,1]));const F=Math.max(Yt+.02,(Wt+Yt)/2-.025);I<0&&o.layer($t.LENS,()=>o.quad([-.62,F,N+.08],[-.48,F,N+.08],[-.48,F+.05,N+.08],[-.62,F+.05,N+.08],13639704,[0,0,1,1]))}s.quad([-Jt*.8,Yt-.05,N+.06],[Jt*.8,Yt-.05,N+.06],[Jt*.8,Yt+.03,N-.5],[-Jt*.8,Yt+.03,N-.5],1842208);for(let I=-3;I<=3;I++)s.box(I*Jt*.24,Yt+0,N-.15,.025,.06,.4,mn)}const re=(y,L,I,F,G,z,xt,H,ct,_t,Mt)=>{const mt=[L*(lt(I,G)+_t),G,I],bt=[L*(lt(F,xt)+_t),xt,F],Et=[L*(lt(F,H)+_t),H,F],Bt=[L*(lt(I,z)+_t),z,I];y.quad(mt,bt,Et,Bt,ct,Mt)};for(const y of i.side??[])for(const L of[-1,1])if(y.kind==="intake")re(s,L,y.z0-.03,y.z1+.03,y.y0+(y.y1-y.y0)*.5-.03,y.y1+.03,y.y0-.03,y.y1+.03,Ce,.005),s.layer($t.MESH,()=>re(s,L,y.z0,y.z1,y.y0+(y.y1-y.y0)*.5,y.y1,y.y0,y.y1,Jr,.008,[0,0,(y.z1-y.z0)*7,(y.y1-y.y0)*7]));else if(y.kind==="naca")re(s,L,y.z0,y.z1,y.y1-.02,y.y1,y.y0,y.y1,Ce,.007),re(s,L,y.z0+(y.z1-y.z0)*.6,y.z1,y.y1-(y.y1-y.y0)*.6,y.y1,y.y0+.02,y.y1-.02,2236966,.009);else if(y.kind==="stripe")re(s,L,y.z0,y.z1,y.y0,y.y1,y.y0,y.y1,y.c??16777215,.008);else if(y.kind==="strakes")for(let F=0;F<6;F++){const G=y.z0+(y.z1-y.z0)*F/6,z=y.z0+(y.z1-y.z0)*(F+1)/6;re(s,L,G,z,y.y0,y.y1,y.y0,y.y1,Ce,.006);const xt=y.n??5;for(let H=0;H<xt;H++){const ct=y.y0+(y.y1-y.y0)*(H+.6)/(xt+.2);for(const[_t,Mt,mt,bt]of[[ct,ct+.035,.035,.035],[ct,ct,.006,.035],[ct+.035,ct+.035,.006,.035]]){const Et=[L*(lt(G,_t)+mt),_t,G],Bt=[L*(lt(z,_t)+mt),_t,z],O=[L*(lt(z,Mt)+bt),Mt,z],vt=[L*(lt(G,Mt)+bt),Mt,G];s.quad(Et,Bt,O,vt,_t===Mt?_t===ct?v:E:t)}}}const Ut=l.find(y=>y.seg==="ws"),P=l.find(y=>y.seg==="rw")??l.find(y=>y.seg==="lv"),A=l.findIndex(y=>y.seg==="rf");for(const y of[-1,1]){const L=b[0].z+b[0].R+.04,I=b[1].z-b[1].R-.04;if(I>L){const bt=e?1:4;for(let Et=0;Et<bt;Et++){const Bt=L+(I-L)*Et/bt,O=L+(I-L)*(Et+1)/bt,vt=M(Bt),st=M(O);s.quad([y*(lt(Bt,vt+.02)+.02),vt-.02,Bt],[y*(lt(O,st+.02)+.02),st-.02,O],[y*(lt(O,st+.1)+.006),st+.1,O],[y*(lt(Bt,vt+.1)+.006),vt+.1,Bt],e?2763310:w?v:E)}}const F=d+.3,G=M(F)+(m(F)-M(F))*.55;if(o.layer($t.LENS,()=>{o.quad([y*(lt(F,G)+.01),G-.025,F],[y*(lt(F+.14,G)+.01),G-.025,F+.14],[y*(lt(F+.14,G)+.01),G+.025,F+.14],[y*(lt(F,G)+.01),G+.025,F],16751136,[0,0,1,1]);const bt=f-.4,Et=M(bt)+(m(bt)-M(bt))*.6;o.quad([y*(lt(bt,Et)+.01),Et-.025,bt],[y*(lt(bt+.14,Et)+.01),Et-.025,bt+.14],[y*(lt(bt+.14,Et)+.01),Et+.025,bt+.14],[y*(lt(bt,Et)+.01),Et+.025,bt],13113360,[0,0,1,1])}),!Ut)continue;const z=Ut.z+.22,xt=m(z)+.1,H=lt(z,m(z)-.01);e?s.box(y*(H+.08),xt,z,.14,.12,.1,[1710618,2236962,1710618,3355443]):(s.box(y*(H+.04),xt-.05,z,.1,.035,.05,Ce),s.box(y*(H+.13),xt,z,.18,.11,.1,[t,t,E,Ce]),s.quad([y*(H+.05),xt-.045,z+.052],[y*(H+.21),xt-.045,z+.052],[y*(H+.21),xt+.045,z+.052],[y*(H+.05),xt+.045,z+.052],10135736));const ct=Ut.z+.06,_t=P?P.z+.05:Ut.z+1.15;for(const bt of[ct,_t]){const Et=W(bt);for(let Bt=0;Bt<4;Bt++){const O=Et.pts[Bt],vt=Et.pts[Bt+1];vt[1]<M(bt)+.08||s.quad([y*(O[0]+.006),O[1],bt],[y*(O[0]+.006),O[1],bt+.016],[y*(vt[0]+.006),vt[1],bt+.016],[y*(vt[0]+.006),vt[1],bt],mn)}}if(i.id==="countach"||i.id==="diablo"){const bt=b[0].z+b[0].R+.02,Et=m(bt)-.04;s.quad([y*(lt(bt,Et)+.007),Et,bt],[y*(lt(ct+.3,m(ct+.3)-.02)+.007),m(ct+.3)-.02,ct+.3],[y*(lt(ct+.3,m(ct+.3)-.04)+.007),m(ct+.3)-.04,ct+.3],[y*(lt(bt,Et-.02)+.007),Et-.02,bt],mn)}const Mt=_t-.3,mt=m(Mt)-.1;if(!e&&(s.quad([y*(lt(Mt-.1,mt)+.009),mt-.018,Mt-.1],[y*(lt(Mt+.1,mt)+.009),mt-.018,Mt+.1],[y*(lt(Mt+.1,mt)+.009),mt+.018,Mt+.1],[y*(lt(Mt-.1,mt)+.009),mt+.018,Mt-.1],ls),y>0&&A>=0)){const bt=b[1].z-b[1].R-.22,Et=m(bt)-.12,Bt=lt(bt,Et)+.007;s.with(new Nt().makeTranslation(Bt,Et,bt).multiply(new Nt().makeRotationY(Math.PI/2)),()=>_s(s,.06,.072,10,mn))}}if(Ut&&ft){const y=ft.z+.07,L=p(y)+.035;for(const I of[-.62,0]){const F=x(y)*.62;s.quad([I*x(y),L,y],[I*x(y)+F,L+.004,y+.035],[I*x(y)+F,L+.016,y+.035],[I*x(y),L+.012,y],Ce)}}if(i.louvres){const y=i.louvres,L=I=>p(I)+.024;s.layer($t.LOUVRE,()=>{for(let F=0;F<4;F++){const G=y.z0+(y.z1-y.z0)*F/4,z=y.z0+(y.z1-y.z0)*(F+1)/4,xt=y.n*F/4,H=y.n*(F+1)/4;Pa(s,[-y.w,L(G),G],[y.w,L(G),G],[y.w,L(z),z],[-y.w,L(z),z],je(t,.9),[0,xt],[4,xt],[4,H],[0,H])}})}if(i.scoop&&A>=0){const y=l[A];s.box(0,y.top+.08,y.z+.3,.34,.14,.55,[t,t,Ce,E]),s.layer($t.MESH,()=>s.quad([-.15,y.top+.03,y.z+.024],[.15,y.top+.03,y.z+.024],[.15,y.top+.135,y.z+.024],[-.15,y.top+.135,y.z+.024],Jr,[0,0,2,1]))}if(i.wing){const y=i.wing,L=p(y.z)+.02,I=F=>{const G=F;s.quad([-G,y.y+.03,y.z-y.d/2],[G,y.y+.03,y.z-y.d/2],[G,y.y+.02,y.z+y.d/2],[-G,y.y+.02,y.z+y.d/2],t),s.quad([-G,y.y-.03,y.z-y.d/2],[G,y.y-.03,y.z-y.d/2],[G,y.y-.005,y.z+y.d/2],[-G,y.y-.005,y.z+y.d/2],v),s.quad([-G,y.y-.03,y.z-y.d/2],[G,y.y-.03,y.z-y.d/2],[G,y.y+.03,y.z-y.d/2],[-G,y.y+.03,y.z-y.d/2],E),s.quad([-G,y.y-.005,y.z+y.d/2],[G,y.y-.005,y.z+y.d/2],[G,y.y+.045,y.z+y.d/2+.01],[-G,y.y+.045,y.z+y.d/2+.01],Ce)};if(y.kind==="duck")s.box(0,y.y,y.z,y.w*2,.06,y.d,[t,t,E,E]),s.quad([-y.w,y.y+.03,y.z+y.d/2],[y.w,y.y+.03,y.z+y.d/2],[y.w,y.y+.05,y.z+y.d/2+.02],[-y.w,y.y+.05,y.z+y.d/2+.02],Ce);else if(I(y.w),y.kind==="big")for(const F of[-1,1])s.box(F*.32,(L+y.y)/2,y.z,.06,y.y-L,.2,[mn,mn,2500136]),s.box(F*y.w,y.y+.02,y.z,.02,.2,y.d+.1,[t,t,E,E]);else if(y.kind==="hoop"){for(const F of[-1,1])s.box(F*(y.w-.08),(L+y.y)/2,y.z,.1,y.y-L,y.d*.7,[t,t,E,E]);c.layer($t.LENS_BAR,()=>c.quad([-.2,y.y+.012,y.z+y.d/2+.012],[.2,y.y+.012,y.z+y.d/2+.012],[.2,y.y+.04,y.z+y.d/2+.016],[-.2,y.y+.04,y.z+y.d/2+.016],16728112,[0,0,3,1])),o.layer($t.LENS_BAR,()=>o.quad([-.2,y.y+.012,y.z+y.d/2+.008],[.2,y.y+.012,y.z+y.d/2+.008],[.2,y.y+.04,y.z+y.d/2+.012],[-.2,y.y+.04,y.z+y.d/2+.012],7344144,[0,0,3,1]))}else for(const F of[-1,1])s.poly([[F*y.w,L,y.z-y.d/2-.2],[F*y.w,L,y.z+y.d/2],[F*y.w,y.y+.07,y.z+y.d/2],[F*y.w,y.y+.07,y.z-y.d/2]],t)}if(!e&&A>=0){l[A];const y=l[A+1];i.group==="90s JAPAN"&&kh(s,[.35,p(y.z)-.02,y.z+.05],[.4,p(y.z)+.45,y.z+.35],.012,Ce)}if(A>=0&&Ut){const y=l[A],L=l[A+1],I=i.trim??2894898,F=y.z+Math.min(.45,(L.z-y.z)*.55),G=p(F),z=m(F),xt=G-(e?.24:.22),H=g(F)-.09,ct=z-.26,_t=Ut.z+.25,Mt=L.z+.15;r.quad([-H,ct,_t],[H,ct,_t],[H,ct,Mt],[-H,ct,Mt],Oh);for(const At of[-1,1])r.quad([At*H,ct,_t],[At*H,ct,Mt],[At*H,z-.02,Mt],[At*H,z-.02,_t],je(I,.7));r.quad([-H,ct,Mt],[H,ct,Mt],[H,z+.02,Mt],[-H,z+.02,Mt],1315864);const mt=l[A+2]??L;r.quad([-H,z+.02,Mt],[H,z+.02,Mt],[H,Math.min(m(mt.z),p(mt.z))-.02,mt.z],[-H,Math.min(m(mt.z),p(mt.z))-.02,mt.z],1842208);const bt=i.drive??(i.group==="90s JAPAN"?"R":"L"),Et=bt==="C"?0:(bt==="R"?1:-1)*Math.min(.38,H*.48),Bt=bt==="C"?[{x:0,z:F-.12,driver:!0},{x:-.44,z:F+.12,driver:!1},{x:.44,z:F+.12,driver:!1}]:[{x:Et,z:F,driver:!0},{x:-Et,z:F,driver:!1}],O=e?4868690:l2(t,2105392,.55),vt=F-(e?.5:.48),st=xt-.24,pt=Math.max(Ut.z+.3,vt-.22);r.box(0,z-.03,pt,H*2,.12,.32,[1710622,2236968]);for(const At of Bt){const St=At.x,Xt=At.z;if(e){r.box(St,z-.02,Xt+.2,.42,.5,.1,je(I,.9)),At.driver&&(zh(r,[St,xt,Xt],.11,2760728,6,4,2760728),r.box(St,xt-.25,Xt+.03,.36,.26,.2,O));continue}const Se=Math.min(z-.04,G-.52);if(r.with(new Nt().makeTranslation(St,Se,Xt+.22).multiply(new Nt().makeRotationX(.22)),()=>{Fh(r,0,0,0,.44,.56,.1,I,$t.SEAT,je(I,.75)),Fh(r,0,.36,.02,.26,.17,.09,I,$t.SEAT,je(I,.75));for(const Ae of[-1,1])r.box(Ae*.2,.02,-.06,.06,.48,.1,je(I,.85))}),At.driver){X0(r,[St,xt,Xt],.125,t),Zn(r,[St,xt-.16,Xt+.02],[.05,.06,.05],1710620,6,4),q0(r,[St,xt-.33,Xt+.04],[.21,.17,.12],O,t);for(const Ae of[-1,1])kh(r,[St+Ae*.18,xt-.26,Xt+.02],[St+Ae*.16,st-.02,vt+.05],.075,O),zh(r,[St+Ae*.16,st-.02,vt+.04],.04,1710618,5,3);r.with(new Nt().makeTranslation(St,st,vt).multiply(new Nt().makeRotationX(-.45)),()=>{_s(r,.15,.185,14,1447446),r.box(0,0,0,.3,.035,.02,2236966),r.box(0,-.07,0,.035,.14,.02,2236966),r.prism(0,0,-.01,.01,.05,.05,8,3158068,3158068)}),r.box(St,z+.05,pt+.02,.42,.07,.2,[1315862,1842208])}}r.box(0,p(y.z+.05)-.07,y.z+.06,.22,.06,.03,[1710618,1710618,1710618,9082532])}return{skin:n,body:s,cabin:r,glass:a,glow:o,brake:c,plate:{y:i.plateY,z:N+.012},tailZ:N,wheels:[{x:b[0].x,z:b[0].z,r:b[0].r,hw:b[0].hw},{x:b[1].x,z:b[1].z,r:b[1].r,hw:b[1].hw}]}}function h2(i,t,e,n,s,r,a){i.with(new Nt().makeTranslation(t,e,n),()=>_s(i,s,r,16,a))}function $0(i,t,e,n,s,r,a=16,o=!0){const c=(g,M,m)=>[M,Math.cos(g)*m,Math.sin(g)*m],l=t*.66,h=t*.93,u=e*.8,d=n*e,f=n*(e-.035);for(let g=0;g<a;g++){const M=g/a*Math.PI*2,m=(g+1)/a*Math.PI*2,p=g/a*8,x=(g+1)/a*8;i.layer($t.TREAD,()=>Pa(i,c(M,-u,t),c(M,u,t),c(m,u,t),c(m,-u,t),3815996,[0,p],[1,p],[1,x],[0,x]));for(const E of[-1,1])i.quad(c(M,E*u,t),c(m,E*u,t),c(m,E*e,h),c(M,E*e,h),2500138);const _=g/a*2,v=(g+1)/a*2;i.layer($t.SIDEWALL,()=>Pa(i,c(M,d,l),c(m,d,l),c(m,d,h),c(M,d,h),16777215,[_,0],[v,0],[v,1],[_,1])),i.quad(c(M,-d,l),c(m,-d,l),c(m,-d,h),c(M,-d,h),1447448),i.tri([-d,0,0],c(M,-d,l),c(m,-d,l),1052690),i.quad(c(M,d,l),c(m,d,l),c(m,f,l),c(M,f,l),je(r,.85)),o&&i.quad(c(M,f,l*.98),c(m,f,l*.98),c(m,-f*.6,l*.98),c(M,-f*.6,l*.98),je(r,.4))}i.with(new Nt().makeTranslation(f,0,0).multiply(new Nt().makeRotationY(Math.PI/2)),()=>{Lc(i,0,0,0,l,l,a,r,i2[s])})}function u2(i,t,e,n,s){const r=new ut(!0);return $0(r,i,t,e,n,s),r.build()}function d2(i,t,e,n=13113360){const s=new ut(!0),r=i*.66,a=e*(t-.09);s.with(new Nt().makeTranslation(a,0,0).multiply(new Nt().makeRotationY(Math.PI/2)),()=>{_s(s,r*.42,r*.86,14,10132128),_s(s,r*.86,r*.88,14,6974064),s.prism(0,0,-.02,.02,r*.42,r*.42,8,3815998,3815998)});const o=.8;return s.with(new Nt().makeTranslation(a+e*.02,Math.cos(o)*r*.68,Math.sin(o)*r*.68).multiply(new Nt().makeRotationX(o)),()=>{s.box(0,0,0,.06,.08,.2,[n,je(n,1.15)])}),s.build()}let ta=null;function K0(){if(ta)return ta;const i=r2(),t=new Rc({vertexColors:!0,side:fe,shininess:60,specular:11053224}),e=new ba({vertexColors:!0,side:fe,alphaTest:.5}),n=new Je({vertexColors:!0,side:fe});for(const r of[t,e,n])Ia(r,i);const s=new Rc({vertexColors:!0,side:fe,transparent:!0,opacity:.62,depthWrite:!1,shininess:110,specular:16777215});return ta={paint:t,lit:e,glow:n,glass:s},ta}let Ks=null;function f2(){if(Ks)return Ks;const i=64,t=128,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d"),s=n.createImageData(i,t),r=(l,h,u)=>{const d=Math.max(0,Math.min(1,(u-l)/(h-l)));return d*d*(3-2*d)},a=.36,o=.4,c=.12;for(let l=0;l<t;l++)for(let h=0;h<i;h++){const u=(h+.5)/i-.5,d=(l+.5)/t-.5,f=Math.abs(u)-(a-c),g=Math.abs(d)-(o-c),M=Math.hypot(Math.max(f,0),Math.max(g,0))+Math.min(Math.max(f,g),0)-c;let m=.55*(1-r(-.08,.13,M));for(const x of[-.28,.28])for(const _ of[-.3,.3]){const v=Math.hypot((u-_)/.09,(d-x)/.12);m=Math.max(m,.9*(1-r(.4,1.2,v)))}const p=(l*i+h)*4;s.data[p]=s.data[p+1]=s.data[p+2]=0,s.data[p+3]=Math.round(255*Math.min(1,m))}return n.putImageData(s,0,0),Ks=new fr(e),Ks.colorSpace=qn,Ks}const Bh=new Map;function Z0(i){const t=Bh.get(i);if(t)return t;const e=new Je({color:0,map:f2(),transparent:!0,side:fe,opacity:i,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return Bh.set(i,e),e}function j0(i){const t=i.stations,e=t[0].z,n=t[t.length-1].z,s=n-e,a=Math.max(...t.map(h=>h.w))*2*1/.72/2,o=s*.98/.8/2,c=(e+n)/2,l=new ut;return l.quad([-a,.025,c-o],[a,.025,c-o],[a,.025,c+o],[-a,.025,c+o],16777215,[0,0,1,1]),l.build()}const p2=1583164,m2=2242124,hs=1315862,Ke=657932,ea=13159636,Dc=(i,t)=>new Lt(i).multiplyScalar(t).getHex();function ln(i,t,e){if(t<=i[0].z)return i[0][e];for(let n=1;n<i.length;n++)if(t<=i[n].z){const s=(t-i[n-1].z)/(i[n].z-i[n-1].z);return i[n-1][e]+(i[n][e]-i[n-1][e])*s}return i[i.length-1][e]}function J0(i,t,e=!1){const n=new ut,s=new ut,r=new ut,a=i.stations,o=Dc(t,.72),c=Dc(t,.5),l=a[a.length-1],h=l.z;for(let x=0;x<a.length-1;x++){const _=a[x],v=a[x+1],E=_.seg==="ws"||_.seg==="rf"||_.seg==="rw"||_.seg==="lv";for(const T of[-1,1])n.quad([T*_.w,_.yb,_.z],[T*v.w,v.yb,v.z],[T*v.w,v.belt,v.z],[T*_.w,_.belt,_.z],t),n.quad([T*_.w,_.belt,_.z],[T*v.w,v.belt,v.z],[T*v.wt,v.top,v.z],[T*_.wt,_.top,_.z],E&&_.seg!=="lv"?m2:t),n.quad([T*(_.w+.004),_.yb,_.z],[T*(v.w+.004),v.yb,v.z],[T*(v.w+.004),v.yb+.09,v.z],[T*(_.w+.004),_.yb+.09,_.z],c);const w=_.seg==="ws"||_.seg==="rw"?p2:_.seg==="lv"||_.seg==="bed"?hs:_.seg==="rf"?o:t;if(n.quad([-_.wt,_.top,_.z],[_.wt,_.top,_.z],[v.wt,v.top,v.z],[-v.wt,v.top,v.z],w),_.seg==="lv")for(let T=1;T<6;T++){const C=T/6,b=_.z+(v.z-_.z)*C,S=_.top+(v.top-_.top)*C+.01,D=_.wt+(v.wt-_.wt)*C;n.quad([-D,S,b-.03],[D,S,b-.03],[D,S+.01,b+.03],[-D,S+.01,b+.03],t)}}const u=(x,_,v)=>n.poly([[-x.w,x.yb,x.z+v],[-x.w,x.belt,x.z+v],[-x.wt,x.top,x.z+v],[x.wt,x.top,x.z+v],[x.w,x.belt,x.z+v],[x.w,x.yb,x.z+v]],_);u(a[0],o,0),u(l,o,0);const d=a[0],f=d.z-.006;if(n.quad([-d.w*.7,d.yb+.04,f],[d.w*.7,d.yb+.04,f],[d.w*.7,d.yb+.14,f],[-d.w*.7,d.yb+.14,f],Ke),!e){const x=i.front??"popup",_=(d.belt+d.top)/2;for(const v of[-1,1]){const E=v*d.w*.62;if(x==="popup"){const w=ln(a,d.z+.45,"top");n.quad([E-.2,w+.004,d.z+.3],[E+.2,w+.004,d.z+.3],[E+.2,w+.004,d.z+.33],[E-.2,w+.004,d.z+.33],Ke),s.quad([E-.14,d.yb+.17,f],[E+.14,d.yb+.17,f],[E+.14,d.yb+.24,f],[E-.14,d.yb+.24,f],16756800)}else if(x==="round"){const w=[];for(let T=0;T<8;T++){const C=T/8*Math.PI*2;w.push([E+Math.cos(C)*.11,_+Math.sin(C)*.09,f-.002])}s.poly(w,16052440)}else{const w=x==="slim"?.05:.1;s.quad([E-.2,_-w/2,f],[E+.2,_-w/2,f],[E+.2,_+w/2,f],[E-.2,_+w/2,f],16052440)}}}n.quad([-l.w,l.yb-.06,h+.02],[l.w,l.yb-.06,h+.02],[l.w,l.yb+.08,h+.02],[-l.w,l.yb+.08,h+.02],e?3815994:Ke);for(const x of i.rear??[])for(const _ of x.mirror===!1||x.x===0?[x.x]:[x.x,-x.x])n.quad([_-x.w/2,x.y-x.h/2,h+.006],[_+x.w/2,x.y-x.h/2,h+.006],[_+x.w/2,x.y+x.h/2,h+.006],[_-x.w/2,x.y+x.h/2,h+.006],x.c);const g=(x,_,v,E,w)=>{if(_.round){const T=[];for(let C=0;C<8;C++){const b=C/8*Math.PI*2+Math.PI/8;T.push([v+Math.cos(b)*_.w/2,_.y+Math.sin(b)*_.h/2,E])}x.poly(T,w)}else x.quad([v-_.w/2,_.y-_.h/2,E],[v+_.w/2,_.y-_.h/2,E],[v+_.w/2,_.y+_.h/2,E],[v-_.w/2,_.y+_.h/2,E],w)},M=ie.modern&&!e;for(const x of i.lights)for(const _ of x.mirror===!1||x.x===0?[x.x]:[x.x,-x.x])g(s,x,_,h+.012,x.c),x.brake&&!e&&g(r,x,_,h+.016,16726570),M&&(g(n,{...x,w:x.w+.05,h:x.h+.05},_,h+.008,1710622),g(s,{...x,w:x.w*.5,h:x.h*.45},_,h+.014,new Lt(x.c).lerp(new Lt(16777215),.45).getHex()));if(i.slats){const x=i.slats;for(let _=0;_<=x.n;_++){const v=x.y0+(x.y1-x.y0)*_/x.n;n.box(0,v,h+.03,x.w*2,.035,.03,Ke)}}if(e)n.quad([-.26,i.plateY-.08,h+.008],[.26,i.plateY-.08,h+.008],[.26,i.plateY+.08,h+.008],[-.26,i.plateY+.08,h+.008],15263960);else{for(const x of i.exhaust)n.with(new Nt().makeTranslation(x.x,x.y,h-.1).multiply(new Nt().makeRotationX(Math.PI/2)),()=>{n.prism(0,0,-.1,.17,x.r,x.r,8,ea,null),n.prism(0,0,.169,.17,x.r*.78,x.r*.78,8,Ke,Ke)});if(n.quad([-.3,i.plateY-.1,h+.004],[.3,i.plateY-.1,h+.004],[.3,i.plateY+.1,h+.004],[-.3,i.plateY+.1,h+.004],hs),M){const x=i.plateY,_=h+.006;n.quad([-.31,x-.105,_],[.31,x-.105,_],[.31,x-.085,_],[-.31,x-.085,_],ea),n.quad([-.31,x+.085,_],[.31,x+.085,_],[.31,x+.105,_],[-.31,x+.105,_],ea);for(const v of[-1,1])s.quad([v*.36,x-.04,h+.012],[v*.48,x-.04,h+.012],[v*.48,x+.04,h+.012],[v*.36,x+.04,h+.012],15790312);for(let v=-2;v<=2;v++)n.box(v*.2,l.yb-.03,h-.12,.03,.1,.26,hs)}}const m=(x,_,v,E,w,T,C,b,S)=>{const D=ln(a,_,"w")+S,W=ln(a,v,"w")+S;n.quad([x*D,E,_],[x*W,T,v],[x*W,C,v],[x*D,w,_],b)};for(const x of i.side??[])for(const _ of[-1,1])if(x.kind==="intake")m(_,x.z0,x.z1,x.y0+(x.y1-x.y0)*.5,x.y1,x.y0,x.y1,Ke,.006);else if(x.kind==="naca")m(_,x.z0,x.z1,x.y1-.02,x.y1,x.y0,x.y1,Ke,.006);else if(x.kind==="stripe")m(_,x.z0,x.z1,x.y0,x.y1,x.y0,x.y1,x.c??16777215,.008);else if(x.kind==="strakes"){m(_,x.z0,x.z1,x.y0,x.y1,x.y0,x.y1,Ke,.006);const v=x.n??5;for(let E=0;E<v;E++){const w=x.y0+(x.y1-x.y0)*(E+.6)/(v+.2);m(_,x.z0,x.z1,w,w+.035,w,w+.035,t,.03)}}if(!e){const x=a.find(_=>_.seg==="ws");if(x)for(const _ of[-1,1])n.box(_*(x.w+.06),x.belt+.12,x.z+.25,.18,.12,.12,[t,t,o,Ke]);if(M&&x){const _=a.find(v=>v.seg==="rw")??a.find(v=>v.seg==="lv");for(const v of[-1,1]){n.box(v*(x.w+.02),x.belt+.08,x.z+.25,.08,.04,.05,Ke);const E=x.z+.05,w=_?_.z+.05:x.z+1.1;for(const b of[E,w]){const S=ln(a,b,"w")+.007,D=ln(a,b,"yb")+.1,W=ln(a,b,"belt")-.02;n.quad([v*S,D,b],[v*S,D,b+.02],[v*S,W,b+.02],[v*S,W,b],hs)}const T=ln(a,w-.25,"w")+.012,C=ln(a,w-.25,"belt")-.1;n.quad([v*T,C,w-.38],[v*T,C,w-.18],[v*T,C+.04,w-.18],[v*T,C+.04,w-.38],ea)}for(const v of["ws","rw"]){const E=a.findIndex(C=>C.seg===v);if(E<0||E+1>=a.length)continue;const w=a[E],T=a[E+1];for(const C of[-1,1])n.quad([C*w.wt,w.top+.004,w.z],[C*T.wt,T.top+.004,T.z],[C*(T.wt-.04),T.top+.006,T.z],[C*(w.wt-.04),w.top+.006,w.z],Ke)}}}if(e&&ie.modern){const x=a[0],_=a.find(E=>E.seg==="ws"),v=a.find(E=>E.seg==="rw");if(n.box(0,l.yb+.05,h+.08,l.w*2+.06,.16,.16,[3815998,4868686]),n.box(0,x.yb+.05,x.z-.08,x.w*2+.06,.16,.16,[3815998,4868686]),_)for(const E of[-1,1])n.box(E*(_.w+.08),_.belt+.1,_.z+.2,.14,.12,.1,1710618);if(v&&n.quad([-.05,v.top+.15,v.z+.3],[.45,v.top+.35,v.z+.3],[.45,v.top+.37,v.z+.3],[-.05,v.top+.17,v.z+.3],1118481),i.id==="volvo240"||i.id==="cherokee"){const E=a.find(T=>T.seg==="rf"),w=a[a.indexOf(E)+1];for(const T of[-1,1])n.box(T*(E.wt-.08),E.top+.06,(E.z+w.z)/2,.06,.08,w.z-E.z,2763306)}}if(i.louvres){const x=i.louvres;for(let _=0;_<x.n;_++){const v=x.z0+(x.z1-x.z0)*_/x.n,E=ln(a,v,"top")+.006;n.quad([-x.w,E,v],[x.w,E,v],[x.w,E+.004,v+.06],[-x.w,E+.004,v+.06],Ke)}}if(i.scoop){const x=a.find(_=>_.seg==="rf");n.box(0,x.top+.07,x.z+.25,.32,.14,.5,[t,t,Ke,o])}if(i.wing){const x=i.wing,_=ln(a,x.z,"top");if(x.kind==="duck")n.box(0,x.y,x.z,x.w*2,.06,x.d,[t,t,o,o]);else if(n.box(0,x.y,x.z,x.w*2,.055,x.d,[t,t,o,o]),n.box(0,x.y-.03,x.z+x.d/2,x.w*2,.04,.03,c),x.kind==="big")for(const v of[-1,1])n.box(v*.32,(_+x.y)/2,x.z,.07,x.y-_,.16,hs);else if(x.kind==="hoop")for(const v of[-1,1])n.box(v*(x.w-.08),(_+x.y)/2,x.z,.12,x.y-_,x.d*.7,t);else for(const v of[-1,1])n.poly([[v*x.w,_,x.z-x.d/2-.15],[v*x.w,_,x.z+x.d/2],[v*x.w,x.y+.06,x.z+x.d/2],[v*x.w,x.y+.06,x.z-x.d/2]],t)}const p=i.wheels;for(const[x,_]of[[p.fz,p.fx],[p.rz,p.rx]])for(const v of[-1,1]){const E=[];for(let w=0;w<=6;w++){const T=w/6*Math.PI;E.push([v*(ln(a,x,"w")+.003),p.r+Math.sin(T)*(p.r+.07),x+Math.cos(T)*(p.r+.07)])}n.poly(E,Ke)}return{lit:n,glow:s,brake:r,plate:{y:i.plateY,z:h+.012},tailZ:h}}function g2(i,t,e,n,s){const r=new ut,a=Math.max(10,s*2),o=(l,h,u=i)=>[h,Math.cos(l)*u,Math.sin(l)*u],c=Dc(n,.3);for(let l=0;l<a;l++){const h=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;r.quad(o(h,-t),o(u,-t),o(u,t),o(h,t),l%2?1710618:2368548),r.quad(o(h,e*t),o(u,e*t),o(u,e*t,i*.7),o(h,e*t,i*.7),2105376),r.tri([-e*t,0,0],o(h,-e*t),o(u,-e*t),1447446),r.tri([e*(t+.005),0,0],o(h,e*(t+.005),i*.7),o(u,e*(t+.005),i*.7),l%2===0?n:c)}return r.with(new Nt().makeRotationZ(Math.PI/2),()=>r.prism(0,0,-e*(t+.01),-e*(t+.011),.07,.07,6,n,n)),r.build()}function sl(i,t=1,e=.8){const n=new ut,s=i.stations[i.stations.length-1].z+.08;for(const r of i.lights)for(const a of r.mirror===!1||r.x===0?[r.x]:[r.x,-r.x]){const o=Math.max(r.w,r.h)*1.6*t+.25;n.quad([a-o,r.y-o,s],[a+o,r.y-o,s],[a+o,r.y+o,s],[a-o,r.y+o,s],new Lt(r.c).multiplyScalar(e).getHex(),[0,0,1,1])}return n}function x2(i,t){const e=t.wheels;for(const[n,s]of[[-e.fx,e.fz],[e.fx,e.fz],[-e.rx,e.rz],[e.rx,e.rz]])i.with(new Nt().makeTranslation(n,e.r,s).multiply(new Nt().makeRotationZ(Math.PI/2)),()=>{i.prism(0,0,-.12,.12,e.r,e.r,8,1579032,(n>0,9079434))})}class Eo{constructor(t,e,n,s,r=3947590,a=!1){this.spec=t,this.root=new xn,this.body=new xn,this.wheels=[],this.geos=[],this.hubs=[],this.gunners=[],this.gunSide=1,this.detail=[],this.paintwork=[],this.dentable=[],this.cracks=null,this.crackCount=0,this.glowMesh=null,this.tailZ=0,this.damaged=!1,this.near=!0;const o=(v,E,w)=>{this.geos.push(v);const T=new ue(v,E);return w.add(T),T},c=ie.modern,l=c?K0():null;let h,u,d;if(l){const v=Y0(t,e);this.paintwork.push(o(v.skin.build(!0),l.paint,this.body),o(v.body.build(),l.paint,this.body)),this.detail.push(o(v.cabin.build(),l.lit,this.body));const E=o(v.glass.build(),l.glass,this.body);E.renderOrder=1,this.glowMesh=o(v.glow.build(),l.glow,this.body),this.dentable.push(E,this.glowMesh),this.brake=o(v.brake.empty?new ut().tri([0,0,0],[0,0,0],[0,0,0],0).build():v.brake.build(),l.glow,this.body),h=v.plate,u=v.tailZ,d=v.wheels}else{const v=J0(t,e);this.paintwork.push(o(v.lit.build(),n.paint??n.lit,this.body)),v.glow.empty||this.dentable.push(this.glowMesh=o(v.glow.build(),n.glow,this.body)),this.brake=o(v.brake.empty?new ut().tri([0,0,0],[0,0,0],[0,0,0],0).build():v.brake.build(),n.glow,this.body),h=v.plate,u=v.tailZ;const E=t.wheels,w=E.hw??.18;d=[{x:E.fx,z:E.fz,r:E.r,hw:w},{x:E.rx,z:E.rz,r:E.r*1.03,hw:w*1.15}]}const f=new ut,{y:g,z:M}=h;f.quad([-.27,g-.08,M],[.27,g-.08,M],[.27,g+.08,M],[-.27,g+.08,M],16777215,s),this.dentable.push(o(f.build(),n.sign,this.body)),this.dentable.push(this.brake),a&&n.halo&&o(sl(t,.45,.45).build(),n.halo,this.body);const m=new ut;for(const v of t.exhaust)m.prism(v.x,-v.y,0,.7,v.r*2,0,6,[16764992,16740384],null),m.prism(v.x,-v.y,0,.42,v.r*1.2,0,6,16775360,null);const p=m.build();if(p.rotateX(Math.PI/2),this.flames=o(p,n.glow,this.body),this.flames.position.set(0,0,u+(c?.12:.05)),this.tailZ=u,this.flames.visible=!1,c){const v=o(j0(t),Z0(a?.85:.7),this.root);v.renderOrder=-1}else{const v=t.stations,E=v[v.length-1].z-v[0].z,w=Math.max(...v.map(b=>b.w)),T=new ut,C=[];for(let b=0;b<8;b++){const S=b/8*Math.PI*2+Math.PI/8;C.push([Math.cos(S)*w*.92,.02,v[0].z+E/2+Math.sin(S)*(E/2-.05)])}T.poly(C,16777215),o(T.build(),new Je({color:r,side:fe}),this.root)}const x=t.wheels,_=t.rimStyle??"star";for(const[v,E]of[[0,-1],[0,1],[1,-1],[1,1]]){const w=d[v],T=l?u2(w.r,w.hw,E,_,x.rim):g2(w.r,w.hw,E,x.rim,x.spokes),C=o(T,l?l.lit:n.lit,this.root);if(C.position.set(E*w.x,w.r,w.z),this.wheels.push(C),l){const b=o(d2(w.r,w.hw,E,t.id==="959"||t.id==="nsx"?2763310:13113360),l.lit,this.root);b.position.copy(C.position),this.hubs.push(b),this.detail.push(b)}}this.buildGunners(e,l?l.lit:n.lit,l?l.glow:n.glow,!!l),this.root.add(this.body)}setNear(t){if(t!==this.near){this.near=t;for(const e of this.detail)e.visible=t}}dispose(){var t;for(const e of this.geos)e.dispose();(t=this.cracks)==null||t.geometry.dispose()}hit(t,e){this.damaged=!0;const n=this.spec.stations,s=n[0].z,r=n[n.length-1].z,a=Math.max(...n.map(p=>p.w)),o=Math.random,c=new $,l=new $;if(e==="front"||e==="rear"){const p=e==="front";c.set((o()-.5)*a*1.4,.45+o()*.25,p?s+.1:r-.1),l.set(0,-.15,p?1:-1)}else{const p=e==="right"?1:-1;c.set(p*a,.45+o()*.3,s+.6+o()*(r-s-1.2)),l.set(-p,-.1,(o()-.5)*.3)}l.normalize();const h=.55+t*.5,u=.04+t*.16,d=new Lt(6974064),f=new Lt(1841688),g=new Lt,M=(p,x,_)=>Math.sin(p*41.3+x*17.1)*Math.cos(_*29.7+p*7.3),m=(p,x)=>{const _=p.geometry,v=_.getAttribute("position"),E=x?_.getAttribute("color"):void 0;let w=!1;for(let T=0;T<v.count;T++){const C=v.getX(T),b=v.getY(T),S=v.getZ(T),D=Math.hypot(C-c.x,(b-c.y)*1.3,S-c.z);if(D>=h)continue;const W=(1-D/h)**2,B=u*W*(.8+.4*M(C,b,S));if(v.setXYZ(T,C+l.x*B,b+l.y*B,S+l.z*B),w=!0,E){g.setRGB(E.getX(T),E.getY(T),E.getZ(T));const V=Math.min(1,W*(.4+t));g.lerp(M(S,C,b)>.2?d:f,V*.75),E.setXYZ(T,g.r,g.g,g.b)}}w&&(v.needsUpdate=!0,E&&(E.needsUpdate=!0),_.computeVertexNormals())};for(const p of this.paintwork)m(p,!0);for(const p of this.dentable)m(p,!1);t>.35&&this.crackCount<3&&this.crack()}breakLamp(t){this.damaged=!0;for(const e of[this.glowMesh,this.brake]){if(!e)continue;const n=e.geometry.getAttribute("position"),s=e.geometry.getAttribute("color");for(let r=0;r<n.count;r++)n.getZ(r)<this.tailZ-.05||n.getX(r)*t<.2||s.setXYZ(r,s.getX(r)*.15+.02,s.getY(r)*.15+.02,s.getZ(r)*.15+.02);s.needsUpdate=!0}}crack(){const t=this.spec.stations;let e=t.findIndex(d=>d.seg==="rw");if(e<0&&(e=t.findIndex(d=>d.seg==="ws")),e<0||e+1>=t.length)return;this.crackCount++;const n=t[e],s=t[e+1],r=(d,f)=>{const g=n.wt+(s.wt-n.wt)*f;return[d*g*.95,n.top+(s.top-n.top)*f+.03*(1-d*d)+.025,n.z+(s.z-n.z)*f]},a=this.cracks?Array.from(this.cracks.geometry.getAttribute("position").array):[],o=(Math.random()-.5)*1.1,c=.25+Math.random()*.5,l=7+Math.floor(Math.random()*4),h=[];for(let d=0;d<l;d++){const f=d/l*Math.PI*2+Math.random()*.5,g=.35+Math.random()*.45;let M=o,m=c;for(let p=1;p<=4;p++){const x=g*p/4,_=Math.max(-1,Math.min(1,o+Math.cos(f)*x+(Math.random()-.5)*.08)),v=Math.max(0,Math.min(1,c+Math.sin(f)*x*.8+(Math.random()-.5)*.06));a.push(...r(M,m),...r(_,v)),p===1&&h.push([_,v]),M=_,m=v}}for(let d=0;d<h.length;d++)a.push(...r(...h[d]),...r(...h[(d+1)%h.length]));const u=new Be;u.setAttribute("position",new Me(a,3)),this.cracks?(this.cracks.geometry.dispose(),this.cracks.geometry=u):(this.cracks=new z0(u,new Zc({color:15266047,transparent:!0,opacity:.85})),this.cracks.renderOrder=2,this.body.add(this.cracks))}buildGunners(t,e,n,s){const r=this.spec.stations,a=r.findIndex(f=>f.seg==="rf"),o=r.find(f=>f.seg==="ws")??r[1],l=(a>=0?r[a]:o).z+.15,h=ln(r,l,"belt"),u=ln(r,l,"w"),d=new Lt(t).lerp(new Lt(2105392),.55).getHex();for(const f of[-1,1]){const g=new ut(s),M=new ut(s),m=new ut(s);q0(g,[f*.1,.16,.02],[.2,.2,.14],d,t),Zn(g,[f*.16,.36,0],[.05,.06,.05],1710620,6,4),X0(g,[f*.2,.5,-.01],.135,t),Zn(g,[f*.02,.12,-.2],[.05,.05,.13],d,8,5),Zn(g,[f*0,.08,-.33],[.045,.045,.045],1315862,6,4);const p=a2(M,d,t);for(let T=0;T<4;T++){const C=T/4*Math.PI,b=Math.cos(C)*.12,S=Math.sin(C)*.12;m.quad([-b,-S,0],[b,S,0],[b*.3,S*.3,-.36],[-b*.3,-S*.3,-.36],T%2?16760896:16771216)}m.quad([-.08,-.08,.001],[.08,-.08,.001],[.08,.08,.001],[-.08,.08,.001],16776160);const x=new xn,_=new xn;_.rotation.z=-f*.32,x.add(_);const v=(T,C,b)=>{const S=T.build();this.geos.push(S);const D=new ue(S,C);return b.add(D),D};v(g,e,_);const E=new xn;E.position.set(f*.26,.28,0),v(M,e,E);const w=v(m,n,E);w.position.set(...p),w.visible=!1,_.add(E),x.position.set(f*(u-.14),h-.06,l),x.visible=!1,this.body.add(x),this.gunners.push({group:x,arm:E,flash:w})}}aim(t,e=0,n=!1){t&&(this.gunSide=t),this.gunners.forEach((s,r)=>{const a=t!==0&&(r===0?-1:1)===this.gunSide;s.group.visible=a,a&&(s.arm.rotation.set(0,e,0),s.flash.visible=n,n&&(s.flash.rotation.z=Math.random()*Math.PI))})}pose(t,e,n,s,r,a=!1,o=0){this.root.rotation.set(0,e,0),this.body.rotation.set(r,0,-t*.05),this.body.position.y=s,this.brake.visible=a,this.flames.visible=o>0,o>0&&this.flames.scale.set(1,1,.6+Math.random()*.8),this.wheels.forEach((c,l)=>c.rotation.set(n,l<2?-t*.35:0,0,"YXZ")),this.hubs.forEach((c,l)=>c.rotation.set(0,l<2?-t*.35:0,0))}}const Gh=96,na={x:0,y:0,z:0,h:0};class _2{constructor(t){this.pool=[],this.m=new Nt,this.s=new $,this.p=new $;const e=new ut,n=(r,a,o,c,l)=>{const h=[];for(let u=0;u<8;u++){const d=u/8*Math.PI*2+Math.PI/8;h.push([a+Math.cos(d)*r,o+Math.sin(d)*r,c])}e.poly(h,l)};let s;if(ie.modern){const a=document.createElement("canvas");a.width=a.height=64;const o=a.getContext("2d"),c=o.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);c.addColorStop(0,"rgba(255,255,255,0.85)"),c.addColorStop(.55,"rgba(235,235,235,0.45)"),c.addColorStop(1,"rgba(220,220,220,0)"),o.fillStyle=c,o.fillRect(0,0,64,64);const l=new fr(a);l.colorSpace=ke,e.quad([-.6,-.6,0],[.6,-.6,0],[.6,.6,0],[-.6,.6,0],16777215,[0,0,1,1]),s=new Je({map:l,vertexColors:!0,transparent:!0,depthWrite:!1,side:fe})}else n(.5,0,0,0,12105912),n(.34,-.1,.1,.01,16777215),s=new Je({vertexColors:!0,side:fe});this.mesh=new k0(e.build(),s,Gh),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.setColorAt(0,new Lt(1,1,1)),t.add(this.mesh)}spawn(t,e,n,s,r,a,o,c,l,h){this.pool.length>=Gh&&this.pool.shift(),this.pool.push({d:t,x:e,y:n,vd:s,vx:r,vy:a,life:o,max:o,size:c,grow:l,color:new Lt(h)})}clear(){this.pool.length=0}update(t){for(const e of this.pool)e.life-=t,e.d+=e.vd*t,e.x+=e.vx*t,e.y+=e.vy*t,e.vy-=(e.grow<0?18:0)*t,e.vd*=1-t*2,e.vx*=1-t*2;this.pool=this.pool.filter(e=>e.life>0)}render(t,e){let n=0;for(const s of this.pool){if(!t.sample(s.d,s.x,na))continue;const r=1-s.life/s.max,a=Math.max(.02,s.size*(1+Math.max(0,s.grow)*r)*(r>.75?(1-r)*4:1));this.p.set(na.x,na.y+s.y,na.z),this.s.set(a,a,a),this.m.compose(this.p,e.quaternion,this.s),this.mesh.setMatrixAt(n,this.m),this.mesh.setColorAt(n,s.color),n++}this.mesh.count=n,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}}let Zs=null;function M2(i){ie.modern&&!Zs&&(Zs=n2());const t=new ba({vertexColors:!0,flatShading:!0,side:fe}),e=new Je({vertexColors:!0,side:fe});ie.modern&&Zs&&(Ia(t,Zs),Ia(e,Zs));const n=ie.modern?K0():null;return{facade:t,facadeLit:e,car:(n==null?void 0:n.lit)??t,carGlow:(n==null?void 0:n.glow)??e,glass:(n==null?void 0:n.glass)??e,shadow:Z0(.75),lit:new ba({vertexColors:!0,flatShading:!0,side:fe}),glow:new Je({vertexColors:!0,side:fe}),sign:new Je({map:i,side:fe}),halo:new Je({map:Ag(),vertexColors:!0,transparent:!0,blending:wa,depthWrite:!1,fog:!1,side:fe,visible:ie.modern}),paint:ie.modern?new Rc({vertexColors:!0,flatShading:!0,side:fe,shininess:45,specular:10132122}):new ba({vertexColors:!0,flatShading:!0,side:fe})}}class v2{constructor(t,e,n){this.defs=t,this.meshes=[],this.counts=[],this.m=new Nt,this.q=new As,this.e=new _n,this.p=new $,this.sc=new $,this.c=new Lt,this.white=new Lt(1,1,1);for(const s of t){const r=s.parts.map(a=>{const o=new k0(a.geo,e[a.mat],s.max);return o.frustumCulled=!1,o.instanceMatrix.setUsage(nr),o.setColorAt(0,this.white),o.count=0,a.order&&(o.renderOrder=a.order),n.add(o),{mesh:o,tint:a.tint??a.mat==="lit"}});this.meshes.push(r),this.counts.push(0)}}begin(){this.counts.fill(0)}add(t,e,n,s,r,a=1,o=1,c,l=0){const h=this.counts[t];if(!(h>=this.defs[t].max)){this.counts[t]=h+1,this.e.set(0,r,l,"YXZ"),this.q.setFromEuler(this.e),this.p.set(e,n,s),this.sc.set(a,a*o,a),this.m.compose(this.p,this.q,this.sc),c!==void 0&&this.c.setHex(c);for(const{mesh:u,tint:d}of this.meshes[t])u.setMatrixAt(h,this.m),u.setColorAt(h,d&&c!==void 0?this.c:this.white)}}end(){this.meshes.forEach((t,e)=>{for(const{mesh:n}of t)n.count=this.counts[e],n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0)})}}const y2=(i,t)=>new Lt(i).multiplyScalar(t).getHex(),Te=(i,t,e)=>{const n=[{geo:i.build(),mat:"lit"}];return t&&!t.empty&&n.push({geo:t.build(),mat:"glow"}),n};function rl(){const i=new ut;return Nc(i),{parts:Te(i),radius:.8,max:260}}function b2(){const i=new ut;return i.blob(0,0,0,16,2.4,11,[15916186,14205056]),i.with(Uh(-4,1.5,1),()=>Nc(i)),i.with(Uh(5,1.2,-2).multiply(jg(1.3)).multiply(new Nt().makeScale(.8,.8,.8)),()=>Nc(i)),{parts:Te(i),radius:0,max:20}}function Nc(i){let e=0;for(let r=0;r<5;r++){const a=.18*Math.pow(r+1,1.5),o=r*2,c=(r+1)*2,l=.48-r*.04,h=.44-r*.04,u=r%2?9067051:11038778;for(let d=0;d<6;d++){const f=d/6*Math.PI*2,g=(d+1)/6*Math.PI*2;i.quad([e+Math.cos(f)*l,o,Math.sin(f)*l],[e+Math.cos(g)*l,o,Math.sin(g)*l],[a+Math.cos(g)*h,c,Math.sin(g)*h],[a+Math.cos(f)*h,c,Math.sin(f)*h],d%2?u:7621154)}e=a}const n=[e,5*2,0],s=7;for(let r=0;r<s;r++){const a=r/s*Math.PI*2+.3,o=Math.cos(a),c=Math.sin(a),l=-c,h=o,u=(x,_,v)=>[[n[0]+o*x+l*v,n[1]+_,n[2]+c*x+h*v],[n[0]+o*x-l*v,n[1]+_,n[2]+c*x-h*v]],[d,f]=u(1.5,.7,.75),[g,M]=u(3,.3,.6),m=[n[0]+o*4.4,n[1]-1.6,n[2]+c*4.4],p=r%2?3124810:2067002;i.tri(n,d,f,p),i.quad(f,d,g,M,r%2?2529343:1733682),i.tri(M,g,m,p)}i.blob(n[0],n[1]-.3,0,.5,.45,.5,6965786)}function S2(){const i=new ut;return i.prism(0,0,0,3,.45,.32,5,[7227942,5913630]),i.blob(0,4.6,0,2.8,2.4,2.8,[4173375,2783790]),i.blob(.4,6.8,.2,1.9,1.6,1.9,[5685834,3442746]),{parts:Te(i),radius:1.2,max:220}}function Q0(){const i=new ut;return i.blob(0,.9,0,1.8,1.1,1.6,[4763712,2914860]),{parts:Te(i),radius:0,max:160}}function al(){const i=new ut;return i.blob(0,1,0,2.2,1.6,2,[13153420,9206362]),i.blob(1.6,.6,.6,1.2,.9,1.1,[12100732,8153676]),{parts:Te(i),radius:2.2,max:120}}function To(i){const t=new ut;return t.box(0,1.3,0,.12,2.6,.12,15790320),t.prism(0,0,2.3,3,2.1,0,8,[i[0],i[1]]),t.prism(0,0,2.3,2.3001,2.1,.01,8,[i[0],i[1]]),t.quad([-.6,.03,.6],[.6,.03,.6],[.6,.03,2.4],[-.6,.03,2.4],i[0]),{parts:Te(t),radius:0,max:120}}function w2(){const i=new ut;for(const[t,e]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.box(t,1.3,e,.2,2.6,.2,16777215);return i.box(0,3.5,0,2.6,1.8,2.4,[16777215,16777215]),i.box(0,3.6,1.21,1.8,.7,.02,2775690),i.prism(0,0,4.4,5.4,2.1,0,4,[16730730,16743050],null,Math.PI/4),{parts:Te(i),radius:1.4,max:30}}function Hh(i,t,e,n,s,r,a=!0){for(let o=0;o<3;o++)i.box(r.range(-n/3,n/3),e+.6,r.range(-s/3,s/3),2.2,1.2,1.6,[13158600,14474460]);if(r.chance(.7)){const o=r.range(-n/4,n/4),c=r.range(-s/4,s/4);for(const[l,h]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.box(o+l,e+1,c+h,.2,2,.2,6974064);i.prism(o,c,e+2,e+4.2,1.4,1.4,8,[10127984,9075298],8022610)}a&&(i.box(n/4,e+4,0,.25,8,.25,10132136),t.box(n/4,e+8.2,0,.6,.6,.6,16719904))}function ol(i,t){const e=new ut,n=3836600;if(ie.modern){const s=new ut,r=new ut,a=o=>pr(o);if(i===0){s.facadeBox(0,38/2+1.5,0,16,35,12,a(be.HOTEL),8,8,[16777215,15658734],15263976),e.box(0,1.5,0,16-.4,3,12-.4,[2771562,2771562]),e.box(0,3.1,12/2+1.2,7,.3,2.6,[16777215,16777215]);for(const h of[-3.2,3.2])e.box(h,1.5,12/2+2.3,.2,3,.2,14211288);for(const h of[-16/2-.2,16/2+.2])e.box(h,38/2,0,.7,38,12+.7,[16777215,16777215]);e.box(0,38+1.2,0,16*.5,2.4,12*.6,[16777215,15790320]),Hh(e,r,38,16,12,t)}else if(i===1){const o=[[18,16,14],[14,12,11],[9,9,8]];let c=0;for(const[l,h,u]of o)s.facadeBox(0,c+h/2,0,l,h,u,a(be.DECO),8,8,[16777215,15790320],15788248),e.box(0,c+h-.4,0,l+.6,.8,u+.6,[16769162,16771232]),e.box(0,c+h-1.4,0,l+.3,.25,u+.3,4243632),c+=h;e.prism(0,0,c,c+7,1.2,.05,4,[16777215,14737632]),r.box(0,c+7.2,0,.5,.5,.5,16719904)}else{s.facadeBox(0,12/2,0,26,12,9,a(be.MOTEL),12,12,[16777215,15790320],14736596),e.box(0,12+.3,0,27,.6,10,[16738954,16743062]),e.box(0,6.1,9/2+.9,26,.25,1.8,[15790320,16777215]);for(let h=-26/2+3;h<26/2;h+=6)e.box(h,12/2,9/2+1.7,.4,12,.4,16777215);Hh(e,r,12,26,9,t,!1)}return{parts:[...Te(e,r),{geo:s.build(),mat:"facade"}],radius:0,max:40}}if(i===0){e.box(0,38/2,0,16,38,12,[16777215,15790320]);for(let o=4;o<36;o+=3.2)e.box(0,o,0,16+.3,1.2,12+.3,n);e.box(0,38+1.2,0,16*.5,2.4,12*.6,16777215),e.box(-16/2-.2,38/2,0,.6,38,12+.6,16777215),e.box(16/2+.2,38/2,0,.6,38,12+.6,16777215)}else if(i===1){const s=[[18,16,14],[14,12,11],[9,9,8]];let r=0;for(const[a,o,c]of s){e.box(0,r+o/2,0,a,o,c,[16777215,16053492]);for(let l=r+2.5;l<r+o-1;l+=3)e.box(0,l,0,a*.7,1.3,c+.3,n);e.box(0,r+o-.4,0,a+.6,.8,c+.6,16769162),r+=o}e.prism(0,0,r,r+7,1.2,.05,4,[16777215,14737632])}else{e.box(0,12/2,0,26,12,9,[16777215,15921906]);for(let o=2.5;o<12;o+=3.3)e.box(0,o,0,26+.3,1.1,9+.3,n);e.box(0,12+.3,0,27,.6,10,16738954);for(let o=-26/2+3;o<26/2;o+=6)e.box(o,12/2,9/2+.25,.6,12,.5,16777215)}return{parts:Te(e),radius:0,max:40}}function tu(i){const t=new ut,e=new ut,n=new ut;ie.modern?n.facadeBox(0,3.5,0,12,7,9,pr(be.SHOP),12,7,[16777215,15790320],14736596):(t.box(0,3.5,0,12,7,9,[16777215,15790320]),t.box(0,3,4.6,8,2.6,.2,3832488));for(let r=0;r<6;r++){const a=-6+r*2,o=a+2;t.quad([a,5.2,4.5],[o,5.2,4.5],[o,4.4,6],[a,4.4,6],r%2?16777215:16730714)}e.quad([-5,7.2,4.52],[5,7.2,4.52],[5,9.7,4.52],[-5,9.7,4.52],16777215,i),t.box(0,8.45,4.4,10.4,2.9,.2,16777215);const s=[{geo:t.build(),mat:"lit"},{geo:e.build(),mat:"sign"}];return n.empty||s.push({geo:n.build(),mat:"facade"}),{parts:s,radius:0,max:40}}function mr(i,t=9,e=4.5,n=9079434,s=15790320){const r=new ut,a=new ut;return r.box(-t*.3,2.5,0,.35,5,.35,n),r.box(t*.3,2.5,0,.35,5,.35,n),r.box(0,5+e/2,0,t+.6,e+.6,.4,s),a.quad([-t/2,5,.22],[t/2,5,.22],[t/2,5+e,.22],[-t/2,5+e,.22],16777215,i),{parts:[{geo:r.build(),mat:"lit"},{geo:a.build(),mat:"sign"}],radius:1.2,max:40}}function Fa(i,t=4,e=2){const n=new ut,s=new ut;return n.box(0,1.6,0,.2,3.2,.2,13619151),n.box(0,3.2+e/2,-.06,t+.2,e+.2,.1,14540253),s.quad([-t/2,3.2,.01],[t/2,3.2,.01],[t/2,3.2+e,.01],[-t/2,3.2+e,.01],16777215,i),{parts:[{geo:n.build(),mat:"lit"},{geo:s.build(),mat:"sign"}],radius:.5,max:30}}function Is(i,t,e=10133672,n=3,s=!1){const r=new ut,a=new ut;r.prism(0,0,0,i,.2,.14,6,e),r.box(-n/2,i,0,n,.22,.22,e),a.box(-n,i-.2,0,1.4,.3,.6,t);const o=Te(r,a);if(s){const c=new ut,l=4.2,h=i-.5;c.quad([-n-l,h-l,0],[-n+l,h-l,0],[-n+l,h+l,0],[-n-l,h+l,0],t,[0,0,1,1]),c.quad([-n,h-l,-l],[-n,h-l,l],[-n,h+l,l],[-n,h+l,-l],t,[0,0,1,1]),c.quad([-n-3.5,.05,-3.5],[-n+3.5,.05,-3.5],[-n+3.5,.05,3.5],[-n-3.5,.05,3.5],y2(t,.35),[0,0,1,1]),o.push({geo:c.build(),mat:"halo",tint:!1})}return{parts:o,radius:.5,max:120}}function ka(i=15921906,t=10132122){const e=new ut;return e.box(0,.85,-jt/2,.15,.45,jt+.05,[i,i]),e.box(0,.4,0,.18,.8,.18,t),e.box(0,.4,-jt/2,.18,.8,.18,t),{parts:Te(e),radius:0,max:420}}function Ee(i,t=15790320,e=14690858,n=16769088){const s=new ut,r=new ut,a=new ut,o=Z+2.5;s.box(-o,5.5,0,1.2,11,1.2,[t,t]),s.box(o,5.5,0,1.2,11,1.2,[t,t]),s.box(0,11.5,0,o*2+1.6,3.4,.8,e),r.quad([-o+1,10.1,.42],[o-1,10.1,.42],[o-1,12.9,.42],[-o+1,12.9,.42],16777215,i);for(let c=0;c<6;c++)a.box(-o+2+c*((o*2-4)/5),13.6,.2,.9,.6,.6,n);return{parts:[{geo:s.build(),mat:"lit"},{geo:r.build(),mat:"sign"},{geo:a.build(),mat:"glow"}],radius:0,max:4}}function gr(i=9079446,t=14204992,e=9){const n=new ut,s=Z+2.2,r=34,a=60;return n.box(-s-a/2,r/2-4,0,a,r+8,3,[i,i]),n.box(s+a/2,r/2-4,0,a,r+8,3,[i,i]),n.box(0,e+(r-e)/2,0,s*2,r-e,3,[i,i]),n.box(0,e+.6,1.6,s*2,1.2,.3,t),n.box(-s-.4,e/2,1.6,.8,e,.3,t),n.box(s+.4,e/2,1.6,.8,e,.3,t),{parts:Te(n),radius:0,max:6}}function E2(i=9){const t=new ut,e=Z+2.2,n=i+2.5,s=4894266,r=3836976,a=11047024,o=9073752,c=(u,d,f)=>t.poly(u.map(([g,M])=>[g,M,f]),d),l=u=>u.map(([d,f])=>[-d,f]).reverse(),h=[[-130,-8],[-e,-8],[-e,n],[-34,30],[-62,38],[-98,22]];c(h,s,-.4),c(l([[-120,-8],[-e,-8],[-e,n],[-30,34],[-55,30],[-90,16]]),r,-.4),c([[-e,n],[e,n],[e+8,34],[12,44],[-10,40],[-e-6,30]],s,-.4),c([[-e-10,-8],[-e,-8],[-e,n],[-e-6,n+6],[-e-14,8]],a,0),c([[e,-8],[e+10,-8],[e+14,8],[e+6,n+6],[e,n]],o,0),c([[-e,n],[e,n],[e+6,n+6],[0,n+9],[-e-6,n+6]],a,0),t.box(-e-.6,i/2,.4,1.2,i+.4,.8,14735560),t.box(e+.6,i/2,.4,1.2,i+.4,.8,14735560),t.box(0,i+1.1,.4,e*2+2.4,2.2,.8,14735560);for(let u=0;u<10;u++){const d=-e+u*e*2/10;t.quad([d,i+.2,.82],[d+e*2/10,i+.2,.82],[d+e*2/10,i+.9,.82],[d,i+.9,.82],u%2?1710618:16764992)}return{parts:Te(t),radius:0,max:6}}function Mn(i,t=0){const e=new ut,n=new ut,s=1+t;if(!t)for(const r of[-1.5,1.5])e.box(r,.6,-.1,.16,1.2,.16,15263976);return e.box(0,s+.75,-.08,4.3,1.7,.12,1710618),n.quad([-2,s+.1,0],[2,s+.1,0],[2,s+1.4,0],[-2,s+1.4,0],16777215,i),{parts:[{geo:e.build(),mat:"lit"},{geo:n.build(),mat:"sign"}],radius:1.8,max:60}}function eu(){const i=new ut;i.box(0,.65,-jt/2,1.5,1.3,jt,[3840570,5421130]);const t=[16734858,16769088,16777215,16747056];for(let e=0;e<6;e++)i.box(e%2?.35:-.35,1.34,-.5-e*.95,.3,.12,.3,t[e%t.length]);return{parts:Te(i),radius:0,max:360}}function cl(){const i=new ut,t=new ut;return i.prism(0,0,0,8,.1,.08,6,15790320,16769088),t.tri([0,7.8,0],[0,6.2,0],[-2.6,7,.3],16777215),t.tri([0,7,.01],[0,6.6,.01],[-1.6,6.85,.31],13684944),{parts:[{geo:i.build(),mat:"lit",tint:!1},{geo:t.build(),mat:"lit",tint:!0}],radius:.4,max:80}}function nu(){const i=new ut;return i.prism(0,0,0,1.6,.3,.25,5,6964774),i.prism(0,0,1.2,5.2,2.4,0,7,[2783802,1991728]),i.prism(0,0,3.6,7.6,1.9,0,7,[3444799,2519092]),i.prism(0,0,5.8,9.6,1.3,0,7,[4105288,2914872]),{parts:Te(i),radius:1,max:200}}function T2(){const i=new ut;return[[16730730,16777215],[2793727,16769088],[16769088,16738848]].forEach(([e,n],s)=>{const r=(s-1)*.8,a=[];for(let o=0;o<10;o++){const c=o/10*Math.PI*2;a.push([r+Math.cos(c)*.32,1.25+Math.sin(c)*1.25,s*.12])}i.poly(a,e),i.quad([r-.06,.1,s*.12+.01],[r+.06,.1,s*.12+.01],[r+.06,2.4,s*.12+.01],[r-.06,2.4,s*.12+.01],n)}),{parts:Te(i),radius:0,max:40}}function iu(){const i=new ut;return i.poly([[-1.4,0,-4],[1.4,0,-4],[1.1,.9,-4.4],[-1.1,.9,-4.4]],16777215),i.box(0,.6,0,2.8,1.2,8,[16777215,15263976,15790320,2775720]),i.box(0,.35,0,2.84,.25,8.04,2775720),i.box(0,6,.6,.15,10,.15,13684944),i.tri([0,10.5,.6],[0,1.6,.6],[0,1.6,4],16777215),i.tri([0,9,.5],[0,1.6,.5],[0,1.6,-3],16738954),{parts:Te(i),radius:0,max:40}}function A2(i){const t=new ut,e=new ut,n=Z+60,s=12.5;t.box(0,s,0,n*2,2.4,11,[9079448,11053236,7237244,7237244]),t.box(0,s-.3,5.55,n*2,1.2,.2,i),t.box(0,s+1.7,5.3,n*2,1,.3,13158608),t.box(0,s+1.7,-5.3,n*2,1,.3,13158608);for(const r of[-16,Z+5,-47,Z+36])t.box(r,s/2-20,0,2.6,s+40,4,[8026760,9079446]);for(let r=-Z;r<=Z;r+=5.5)e.box(r,s-1.25,0,1.6,.1,.8,16773312);for(let r=-n+4;r<n;r+=9)e.box(r,s+2.35,5.3,.5,.3,.4,16760928);return{parts:Te(t,e),radius:0,max:6}}function R2(i){const t=new ut,e=[16765040,16777215,16756800,8446207,16734858];for(let n=0;n<26;n++){const s=i.range(-45,45),r=i.range(-30,30),a=i.pick(e);if(i.chance(.4))for(let o=0;o<5;o++)t.box(s+o*3,.4,r,.7,.7,.7,a);else t.box(s,.4,r,.9,.9,.9,a)}return{parts:[{geo:t.build(),mat:"glow"}],radius:0,max:200}}function _i(i){const t=new ut,e=new ut;t.box(0,2.3,1,2.5,3.2,7.4,[16053492,16777215,15263976,14737632]),t.box(0,2.2,1,2.54,.5,7.44,i),t.box(0,1.5,-3.6,2.4,2.2,1.8,[16777215]),t.box(0,2.1,-4.45,2,.8,.1,2241348);for(const[n,s]of[[-1,-3.6],[1,-3.6],[-1,2.6],[1,2.6],[-1,3.8],[1,3.8]])t.box(n,.45,s,.4,.9,.9,1381653);return e.box(-1,.95,4.72,.35,.3,.04,16722464),e.box(1,.95,4.72,.35,.3,.04,16722464),{parts:Te(t,e),radius:0,max:10,len:6.5}}function Gi(i){const t=new ut,e=new ut;t.box(0,1.9,0,2.5,3,10,[16777215,16053492,15263976,15263976]),t.box(0,2.4,0,2.54,1,9,2241348),t.box(0,1.2,0,2.54,.4,10.04,i),t.box(0,2.6,5.02,1.8,.8,.05,2241348);for(const[n,s]of[[-1.05,-3.4],[1.05,-3.4],[-1.05,3.4],[1.05,3.4]])t.box(n,.45,s,.4,.9,1,1381653);return e.box(-1,1,5.02,.3,.35,.04,16722464),e.box(1,1,5.02,.3,.35,.04,16722464),e.box(0,3.25,5.02,1.6,.25,.04,16756800),{parts:Te(t,e),radius:0,max:8,len:7.5}}function Mi(i){const t=new ut,e=new ut;return t.box(0,.55,0,.16,1.1,.16,[16053492,16777215]),t.box(0,.86,0,.17,.12,.17,1710618),e.box(0,.72,.085,.1,.16,.01,i?16724e3:16777215),{parts:Te(t,e),radius:0,max:400}}function ll(i){const t=new ut,e=new ut;return t.box(0,.6,0,.12,1.2,.12,14474460),t.box(0,1.35,-.04,.9,.6,.06,16777215),e.quad([-.42,1.08,0],[.42,1.08,0],[.42,1.62,0],[-.42,1.62,0],16777215,i),{parts:[{geo:t.build(),mat:"lit"},{geo:e.build(),mat:"sign"}],radius:0,max:20}}function Hi(i){const t=new ut,e=new ut,n=14196858,s=i===1?14196858:3820138;return t.box(-.12,.42,0,.18,.84,.2,s),t.box(.12,.42,0,.18,.84,.2,s),i===1&&t.box(0,.8,0,.44,.18,.24,2763370),e.box(0,1.15,0,.46,.62,.26,[16777215,16777215]),t.box(-.3,1.1,0,.12,.6,.14,n),t.box(.3,1.1,0,.12,.6,.14,n),t.box(0,1.6,0,.24,.28,.24,n),t.box(0,1.76,-.02,.26,.08,.26,i===1?15253600:2759184),{parts:[{geo:t.build(),mat:"lit",tint:!1},{geo:e.build(),mat:"lit",tint:!0}],radius:0,max:160}}function su(i){const t=new ut;for(let e=0;e<5;e++){const n=i.range(-10,10),s=i.range(0,6),r=i.range(-10,10),a=i.range(.8,1.3);t.tri([n,s,r],[n-.9*a,s+.35*a,r-.2],[n-.1,s+.05,r+.25*a],16777215),t.tri([n,s,r],[n+.9*a,s+.35*a,r-.2],[n+.1,s+.05,r+.25*a],15263984)}return{parts:Te(t),radius:0,max:30}}function C2(){const i=new ut,t=new ut;i.box(0,1.3,0,2.4,2.6,2.2,[16777215,16053492]);for(let e=0;e<3;e++)t.box(-.8+e*.8,1.3,0,.4,2.62,2.22,[16777215,16777215]);return i.prism(0,0,2.6,3.6,1.9,0,4,[16777215,15263976],null,Math.PI/4),i.box(0,1,1.12,.9,1.8,.04,6965802),{parts:[{geo:i.build(),mat:"lit",tint:!1},{geo:t.build(),mat:"lit",tint:!0}],radius:1.4,max:40}}function ru(i){const t=new ut;return t.box(0,.05,0,.16,.1,.4,i),{parts:[{geo:t.build(),mat:"glow"}],radius:0,max:500}}function I2(i){const t=new ut,e=new ut,n=new ut;return t.box(0,1.1,0,1,2.2,.8,[16747040,16752704]),t.box(0,2.3,0,1.1,.2,.9,3815994),e.quad([-.4,1.4,.41],[.4,1.4,.41],[.4,1.9,.41],[-.4,1.9,.41],16777215,i),n.box(0,2.5,0,.3,.2,.3,16764992),{parts:[{geo:t.build(),mat:"lit"},{geo:e.build(),mat:"sign"},{geo:n.build(),mat:"glow"}],radius:0,max:20}}function P2(i){const t=new ut,e=new ut;for(const n of[-4.5,4.5])t.with(new Nt().makeTranslation(n,i-1.1,0).multiply(new Nt().makeRotationX(Math.PI/2)),()=>{t.prism(0,0,-1.6,1.6,.7,.7,10,[9079442,8026754],2763310),t.prism(0,0,-1.61,-1.6,.7,.7,10,2763310,2763310)}),t.box(n,i-.3,0,.2,.6,.2,5921378);for(const n of[-9,9])e.box(n,i-.2,0,.4,.2,1.4,16773312);return{parts:Te(t,e),radius:0,max:12}}const Vh=i=>new Lt().setHex(i);function pe(i,t,e,n){const s=[],r=(h,u,d,f,g,M,m,p)=>s.push({xa:h,ya:u,absA:d,xb:f,yb:g,absB:M,c0:Vh(m[0]),c1:Vh(m[1]),tex:p});let o=-Z;const c=i.edge!==void 0?.45:0;c&&(r(o,0,!1,o+c,0,!1,[i.edge,i.edge],ot.PAINT),o+=c);for(let h=1;h<Oi;h++){const u=-Z+h*lr;r(o,0,!1,u-.35/2,0,!1,i.road,ot.ASPHALT),r(u-.35/2,0,!1,u+.35/2,0,!1,[i.line,i.road[1]],ot.PAINT),o=u+.35/2}r(o,0,!1,Z-c,0,!1,i.road,ot.ASPHALT),c&&r(Z-c,0,!1,Z,0,!1,[i.edge,i.edge],ot.PAINT);const l=[];for(const h of[-1,1]){let u=Z,d=0,f=!1;if(i.rumble){const g=i.rumbleW??1.6;r(h*u,0,!1,h*(u+g),0,!1,i.rumble,ot.KERB),u+=g}for(const g of h<0?t:e){const M=u+g.w;let m=d,p=f;g.abs!==void 0?(m=g.abs,p=!0):g.dy!==void 0&&(m=d+g.dy),r(h*u,d,f,h*M,m,p,g.c,g.tex),u=M,d=m,f=p}l.push({x:h*u,y:d,abs:f})}return n&&r(l[0].x,l[0].y,l[0].abs,l[1].x,l[1].y,l[1].abs,n,ot.CEILING),{spans:s}}function L2(i){if(Math.abs(i.xb-i.xa)<.01)return Math.abs(i.yb-i.ya)>3?ot.TUNNEL:ot.CONCRETE;const e={h:0,s:0,l:0};i.c0.getHSL(e,ke);const n=e.h*360,{s,l:r}=e;return i.absB&&i.yb<.5&&i.yb>.05&&r>.9?ot.FOAM:n>165&&n<260&&s>.5?r<.25?ot.BAY:r>.52?ot.SHALLOW:ot.SEA:r<.22?ot.CITY:n>60&&n<170&&s>.25?ot.GRASS:n>25&&n<60&&s>.55?ot.SAND:n>25&&n<60&&s>.3&&r<.8?ot.DIRT:s<.2&&r>.6?ot.CONCRETE:ot.PAVING}const D2={[ot.ASPHALT]:[5.5,9],[ot.PAINT]:[2,6],[ot.KERB]:[1.6,6],[ot.GRASS]:[7,7],[ot.SAND]:[9,9],[ot.SEA]:[16,16],[ot.BAY]:[20,20],[ot.SHALLOW]:[10,10],[ot.FOAM]:[3,8],[ot.CONCRETE]:[4,6],[ot.TUNNEL]:[3,3],[ot.CEILING]:[6,12],[ot.PAVING]:[3,3],[ot.CITY]:[40,40],[ot.DIRT]:[5,5]},Wh=220,N2=32;class U2{constructor(t){this.profiles=t,this.time={value:0};const e=Wh*N2;if(this.pos=new Float32Array(e*4*3),this.colr=new Float32Array(e*4*3),this.uv=new Float32Array(e*4*2),this.tile=new Float32Array(e*4*3),ie.modern)for(const r of t)for(const a of r.spans)Math.abs(a.c0.r-a.c1.r)+Math.abs(a.c0.g-a.c1.g)+Math.abs(a.c0.b-a.c1.b)<.25&&(a.c1=a.c0.clone().lerp(a.c1,.45)),a.tex===void 0&&(a.tex=L2(a)),a.tex===ot.CITY&&(a.c0=new Lt(13158624),a.c1=new Lt(12105940));const n=new Uint32Array(e*6);for(let r=0;r<e;r++)n.set([r*4,r*4+1,r*4+2,r*4,r*4+2,r*4+3],r*6);this.geo=new Be,this.geo.setAttribute("position",new Xe(this.pos,3).setUsage(nr)),this.geo.setAttribute("color",new Xe(this.colr,3).setUsage(nr)),this.geo.setAttribute("uv",new Xe(this.uv,2).setUsage(nr)),this.geo.setAttribute("tile",new Xe(this.tile,3).setUsage(nr)),this.geo.setIndex(new Xe(n,1));const s=new Je({vertexColors:!0,side:fe});ie.modern&&(s.color.setScalar(1.1),Ia(s,t2(),this.time)),this.mesh=new ue(this.geo,s),this.mesh.frustumCulled=!1,this.mesh.renderOrder=0}update(t){const{bx:e,by:n,bz:s,bh:r,yRef:a}=t,o=this.pos,c=this.colr,l=this.uv,h=this.tile;let u=0;const d=Math.min(t.count,Wh);for(let f=0;f<d;f++){const g=t.start+f,M=t.track.seg(g),m=this.profiles[M.profile],p=Math.floor(g/Ig)%2===0,x=Math.cos(r[f]),_=Math.sin(r[f]),v=Math.cos(r[f+1]),E=Math.sin(r[f+1]);for(const w of m.spans){const T=p?w.c0:w.c1,C=u*12;o[C]=e[f]+x*w.xa,o[C+1]=w.absA?w.ya-a:n[f]+w.ya,o[C+2]=s[f]+_*w.xa,o[C+3]=e[f]+x*w.xb,o[C+4]=w.absB?w.yb-a:n[f]+w.yb,o[C+5]=s[f]+_*w.xb,o[C+6]=e[f+1]+v*w.xb,o[C+7]=w.absB?w.yb-a:n[f+1]+w.yb,o[C+8]=s[f+1]+E*w.xb,o[C+9]=e[f+1]+v*w.xa,o[C+10]=w.absA?w.ya-a:n[f+1]+w.ya,o[C+11]=s[f+1]+E*w.xa;for(let k=0;k<4;k++)c[C+k*3]=T.r,c[C+k*3+1]=T.g,c[C+k*3+2]=T.b;const b=D2[w.tex??0]??[6,8],S=(w.xa+w.ya)/b[0],D=(w.xb+w.yb)/b[0],W=g*jt/b[1],B=(g+1)*jt/b[1],V=u*8,[et,U]=pr(w.tex??0),rt=Jg[w.tex??0]??0;for(let k=0;k<4;k++)h[u*12+k*3]=et,h[u*12+k*3+1]=U,h[u*12+k*3+2]=rt;l[V]=S,l[V+1]=W,l[V+2]=D,l[V+3]=W,l[V+4]=D,l[V+5]=B,l[V+6]=S,l[V+7]=B,u++}}this.geo.setDrawRange(0,u*6),this.geo.attributes.position.addUpdateRange(0,u*12),this.geo.attributes.color.addUpdateRange(0,u*12),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,ie.modern&&(this.geo.attributes.uv.addUpdateRange(0,u*8),this.geo.attributes.uv.needsUpdate=!0,this.geo.attributes.tile.addUpdateRange(0,u*12),this.geo.attributes.tile.needsUpdate=!0,this.time.value=performance.now()/1e3)}}const _e={x:0,y:0,z:0,h:0},ia={x:0,y:0,z:0,h:0},Xh=48;class O2{constructor(t){this.route=t,this.scene=new gg,this.traffic=[],this.rivals=[],this.rivalCars=[],this.rng=new Jn(7),this.carPaint=-1,this.net=null,this.tracers=[],this.playerGun={target:null,flash:!1},this.netTime=0;const e=new Cg;if(this.data=t.build(e),this.track=this.data.track,this.view=new Ng(this.track),this.scene.fog=new Kc(t.fog.color,t.fog.near,t.fog.far),this.scene.background=new Lt(t.fog.color),ie.modern){this.scene.add(new Th(t.ambient.color,t.ambient.intensity*.55));const[a,o]=t.hemi;this.scene.add(new vg(a,o,t.ambient.intensity*.75))}else this.scene.add(new Th(t.ambient.color,t.ambient.intensity));const n=new Sg(t.sun.color,t.sun.intensity);n.position.set(...t.sun.dir),this.scene.add(n),this.scene.add(this.data.backdrop.group);const s=M2(e.texture);this.road=new U2(this.data.profiles),this.scene.add(this.road.mesh),this.props=new v2(this.data.props,s,this.scene),this.mats=s,this.plate=e.add({bg:t.plate,fg:1056864,text:"TH-86",border:1056864},1,1),this.car=new Eo(We[0],We[0].paints[0],s,this.plate,this.route.shadow,this.route.night),this.scene.add(this.car.root),this.particles=new _2(this.scene);const r=new Be;r.setAttribute("position",new Me(new Float32Array(Xh*6),3)),this.tracerMesh=new z0(r,new Zc({color:16771216,transparent:!0,opacity:.9,blending:wa,depthWrite:!1,fog:!1})),this.tracerMesh.frustumCulled=!1,this.scene.add(this.tracerMesh)}setPlayerCar(t,e){this.car.spec===t&&this.carPaint===e&&!this.car.damaged||(this.scene.remove(this.car.root),this.car.dispose(),this.car=new Eo(t,e,this.mats,this.plate,this.route.shadow,this.route.night),this.carPaint=e,this.scene.add(this.car.root))}setRivals(t){for(const e of this.rivalCars)this.scene.remove(e.root),e.dispose();this.rivals=t,this.rivalCars=t.map(e=>{const n=new Eo(e.spec,e.paint,this.mats,this.plate,this.route.shadow,this.route.night);return this.scene.add(n.root),n})}sunOnHud(t,e,n){const s=this.data.backdrop.sunNdc(t);return!s||Math.abs(s.x)>1.3||Math.abs(s.y)>1.3?null:{x:(s.x+1)/2*e,y:(1-s.y)/2*n}}laneX(t){return-Oi*lr/2+lr*(t+.5)}spawnCar(t){const e=this.rng.int(0,Oi-1);return{d:t,x:this.laneX(e),laneTarget:e,v:this.rng.range(28,50),t:this.rng.pick(this.data.trafficTypes),tint:this.rng.pick(this.route.trafficColors),passed:!1}}resetTraffic(t,e=this.route.trafficCount,n=160){this.net=null,this.traffic=[];for(let s=0;s<e;s++)this.traffic.push(this.spawnCar(t+n+s*75+this.rng.range(0,40)))}shoot(t,e,n,s,r){const a=Math.sign(s-e)||1,o=e+a*1,c=1.25;let l=s,h=n,u=.8;r||(l+=(Math.random()-.5)*6,h+=(n-t)*.3+(Math.random()-.5)*6,u=Math.random()<.5?.05:1.6+Math.random()),this.tracers.length>=Xh&&this.tracers.shift(),this.tracers.push({d0:t+Math.sign(n-t)*.5,x0:o,y0:c,d1:h,x1:l,y1:u,life:.07});const d=this.particles;if(r)for(let f=0;f<4;f++)d.spawn(n+(Math.random()-.5)*2,s+(Math.random()-.5)*1.6,.6+Math.random()*.6,0,(Math.random()-.5)*5,2+Math.random()*3,.3,.12,-1,Math.random()<.5?16769088:16777215);else u<.1&&d.spawn(h,l,.1,0,0,.6,.5,.35,1.5,13156520)}aimCar(t,e,n,s,r,a){const o=r-n,c=s-e,l=Math.abs(o)>.4?Math.sign(o):1,h=o-l*1.1;t.aim(l,Math.atan2(-h,Math.max(-60,Math.min(60,c))),a)}setNetTraffic(t,e){const n=new Jn(t),s=e+160,r=this.track.goalDist+100-s,a=Math.max(6,Math.round(this.route.trafficCount*r/1100*.7)),o={start:s,len:r,cars:[]};this.traffic=[];for(let c=0;c<a;c++){const l=[n.int(0,Oi-1)];for(let h=1;h<32;h++)l.push(Math.max(0,Math.min(Oi-1,l[h-1]+(n.chance(.5)?n.sign():0))));o.cars.push({d0:(c+n.next()*.6)/a*r,v:n.range(28,50),lanes:l,period:n.range(8,20)}),this.traffic.push({d:s+o.cars[c].d0,x:this.laneX(l[0]),laneTarget:l[0],v:o.cars[c].v,t:n.pick(this.data.trafficTypes),tint:n.pick(this.route.trafficColors),passed:!1,wrap:0})}this.net=o,this.netTime=0}updateNetTraffic(t,e){const n=this.net,s=this.netTime;this.traffic.forEach((r,a)=>{const o=n.cars[a],c=o.d0+o.v*s,l=Math.floor(c/n.len);l!==r.wrap&&(r.wrap=l,r.passed=!1),r.d=n.start+c-l*n.len;const h=Math.floor(s/o.period),u=o.lanes[h%o.lanes.length],d=o.lanes[Math.max(0,h-1)%o.lanes.length],f=Math.min(1,(s-h*o.period)/1.5),g=f*f*(3-2*f);r.x=this.laneX(d)+(this.laneX(u)-this.laneX(d))*g,r.laneTarget=u,!r.passed&&r.d<t-3&&r.d>t-40&&(r.passed=!0,e())})}rivalHit(t,e){var s;const n=["front","rear","left","right"];(s=this.rivalCars[t])==null||s.hit(e,n[Math.floor(Math.random()*4)])}rivalBreakLamp(t){var e;(e=this.rivalCars[t])==null||e.breakLamp(Math.random()<.5?-1:1)}rivalScreenPos(t,e,n,s){const r=this.rivalCars[t];if(!r||!r.root.visible)return null;const a=r.root.position.clone();a.y+=1.9;const o=a.distanceTo(e.position);return a.project(e),a.z>1||Math.abs(a.x)>1.1||Math.abs(a.y)>1.1?null:{x:(a.x+1)/2*n,y:(1-a.y)/2*s,dist:o}}updateTraffic(t,e,n){if(this.net)return this.updateNetTraffic(e,n);const s=this.track.goalDist;for(const r of this.traffic){r.d+=r.v*t,this.rng.chance(t*.08)&&(r.laneTarget=Math.max(0,Math.min(Oi-1,r.laneTarget+this.rng.sign())));const a=this.laneX(r.laneTarget);if(r.x+=Math.sign(a-r.x)*Math.min(Math.abs(a-r.x),3*t),!r.passed&&r.d<e-3&&(r.passed=!0,n()),r.d<e-60||r.d>e+1500){const o=this.spawnCar(e+this.rng.range(900,1150));o.d>s+100&&(o.d=e-200),Object.assign(r,o)}}}hitTraffic(t,e){for(const n of this.traffic){const s=this.data.props[n.t].len??4.4;if(Math.abs(n.d-t)<s&&Math.abs(n.x-e)<2)return n}return null}hitProp(t,e){const n=Math.floor(t/jt);for(let s=n-1;s<=n+1;s++){const r=this.track.seg(s),a=s*jt-t;if(!(Math.abs(a)>2.4))for(const o of r.props){const c=this.data.props[o.t].radius;if(c>0&&Math.abs(o.x-e)<c*(o.s??1)+.9)return!0}}return!1}update(t,e,n,s,r){const a=this.view;a.update(t),this.road.update(a);const o=this.props;o.begin();const{bx:c,by:l,bz:h,bh:u,yRef:d}=a;for(let _=0;_<a.count;_++){const v=this.track.seg(a.start+_);if(!v.props.length)continue;const E=Math.cos(u[_]),w=Math.sin(u[_]);for(const T of v.props){const C=T.abs?(T.y??0)-d:l[_]+(T.y??0);o.add(T.t,c[_]+E*T.x,C,h[_]+w*T.x,-u[_]+(T.r??0),T.s??1,T.sy??1,T.tint)}}for(const _ of this.traffic)a.sample(_.d,_.x,_e)&&o.add(_.t,_e.x,_e.y,_e.z,-_e.h,1,1,_.tint);o.end(),a.sample(t+2,e,_e);const f=_e.y;a.sample(t-2,e,_e);const g=_e.y;this.car.root.position.set(e,0,0),this.car.pose(r.steer,r.yaw,r.spin,r.bounce,Math.atan2(f-g,4),r.brake,r.flame);const M=this.playerGun,m=M.target!==null?this.rivals[M.target]:null;m?this.aimCar(this.car,t,e,m.d,m.x,M.flash):this.car.aim(0),this.rivals.forEach((_,v)=>{const E=this.rivalCars[v];if(!a.sample(_.d+2,_.x,_e)){E.root.visible=!1;return}const w=_e.y;a.sample(_.d-2,_.x,_e);const T=_e.y;if(a.sample(_.d,_.x,_e),E.root.visible=!0,E.setNear(Math.abs(_.d-t)<28),E.root.position.set(_e.x,_e.y,_e.z),E.pose(_.steer,-_e.h-_.steer*.08,_.spin,0,Math.atan2(w-T,4),_.braking,_.turboT>0?1:0),_.gunT>0){const C=_.gunTo===-1?{d:t,x:e}:this.rivals[_.gunTo];C?this.aimCar(E,_.d,_.x,C.d,C.x,Math.random()<.5):E.aim(0)}else E.aim(0)}),a.sample(t-8.8,e*.9,_e);const p=Math.max(_e.y,-.5)+3.3;a.sample(t+40,0,_e);const x=_e.y*.45+.9;n.position.set(e*.9+(Math.random()-.5)*s,p+(Math.random()-.5)*s,8.8),n.lookAt(e*.82,x,-30),this.data.backdrop.update(n.position,a.heading),this.particles.render(a,n),this.renderTracers(a)}renderTracers(t){const e=this.tracerMesh.geometry.getAttribute("position");let n=0;for(const s of this.tracers)!t.sample(s.d0,s.x0,_e)||!t.sample(s.d1,s.x1,ia)||(e.setXYZ(n*2,_e.x,_e.y+s.y0,_e.z),e.setXYZ(n*2+1,ia.x,ia.y+s.y1,ia.z),n++);e.needsUpdate=!0,this.tracerMesh.geometry.setDrawRange(0,n*2)}tickTracers(t){for(const e of this.tracers)e.life-=t;this.tracers=this.tracers.filter(e=>e.life>0)}}const Ao=["arcade","rivals","online"],sa=39,ra=80,aa=262,oa=100,qh={x0:28,x1:378,mid:203,carY:72,carH:46,paintY:122,turbY:142,weapY:166,ammoY:190,chipH:20,minusX:190,plusX:284},cn=9079464,Yh=82,Ro=3.6,js=[0,18,34,50,66,84],$h=25,Kh=.82,F2=()=>{try{return parseInt(localStorage.getItem("th86-hi")??"0",10)||0}catch{return 0}},Zh=()=>{try{const i=JSON.parse(localStorage.getItem("th86-car")??"[0,0]");return[Math.min(We.length-1,i[0]|0),i[1]|0]}catch{return[0,0]}},jh=(i,t)=>{try{localStorage.setItem("th86-car",JSON.stringify([i,t]))}catch{}},k2=()=>{try{const i=parseInt(localStorage.getItem("th86-music")??"-1",10);return i>=-1&&i<Sa.length?i:-1}catch{return-1}},z2=i=>{try{localStorage.setItem("th86-music",String(i))}catch{}},Co=i=>i<.4?4251712:i<.7?Vt:ge,ca=(i,t)=>{try{const e=localStorage.getItem(i);return e===null?t:parseInt(e,10)}catch{return t}},Io=(i,t)=>{try{localStorage.setItem(i,String(t))}catch{}},B2=()=>{try{return localStorage.getItem("th86-name")??""}catch{return""}},G2=i=>{try{localStorage.setItem("th86-name",i)}catch{}},H2=i=>{try{localStorage.setItem("th86-hi",String(i))}catch{}};class V2{constructor(t,e,n,s,r){this.routes=t,this.camera=e,this.input=n,this.audio=s,this.hud=r,this.state="attract",this.t=0,this.paused=!1,this.routeIdx=0,this.pos=0,this.px=0,this.speed=0,this.steer=0,this.driftYaw=0,this.crashT=0,this.crashYaw=0,this.hp=100,this.wrecked=!1,this.dmgCool=0,this.scrapeDmg=0,this.smokeT=0,this.wheelSpin=0,this.bounce=0,this.shakeKick=0,this.drifting=!1,this.gear=1,this.flameT=0,this.wasAccel=!1,this.timeLeft=0,this.score=0,this.stage=0,this.hi=F2(),this.msg="",this.msg2="",this.msgUntil=0,this.bonusLeft=0,this.demoClock=0,this.attractRoute=0,this.clock=0,this.lastBeep=-1,this.musicIdx=k2(),this.mode="arcade",this.net=null,this.nameBox=null,this.playerName=B2(),this.pending=null,this.raceId="",this.netSendT=0,this.tableT=0,this.raceTime=0,this.turbos=qr,this.turboT=0,this.turboCount=Math.max(1,Math.min(9,ca("th86-turbos",qr)||qr)),this.weaponsSetting=ca("th86-weapons",1)===1,this.ammoCount=Yr.includes(ca("th86-ammo",$r))?ca("th86-ammo",$r):$r,this.raceAmmo=$r,this.raceTurbos=qr,this.weapons=!1,this.ammo=0,this.fireCool=0,this.firingT=0,this.gunTarget=null,this.lastGunTarget=null,this.gunP=0,this.noTargetT=0,this.hitFlash=0,this.gunFrom=new Map,this.pendingHits=new Map,this.hitSendT=0,this.onlineGo=null,this.finishTime=-1,this.place=8,this.table=[],this.musicToast=0,this.carIdx=Zh()[0],this.paintIdx=Zh()[1],this.touch=!1,this.worlds=t.map(()=>null),this.world=this.getWorld(0),this.resetPlayer(!0)}get spec(){return We[this.carIdx]}get vmax(){return this.spec.stats.vmax/Ro}applyCar(t=this.spec,e=t.paints[this.paintIdx%t.paints.length]){this.world.setPlayerCar(t,e)}getWorld(t){var e;return(e=this.worlds)[t]??(e[t]=new O2(this.routes[t]))}setWorld(t){this.world===this.worlds[t]&&this.routeIdx===t||(this.routeIdx=t,this.world=this.getWorld(t),this.state!=="attract"&&this.applyCar())}resetPlayer(t){this.pos=3*jt,this.px=t?this.world.laneX(1):0,this.speed=t?50:0,this.turboT=0,this.steer=0,this.driftYaw=0,this.crashT=0,this.stage=0,this.wrecked=!1,this.world.resetTraffic(this.pos),this.world.particles.clear()}go(t){this.state=t,this.t=0}trackId(){return this.musicIdx<0?this.world.route.music:Sa[this.musicIdx].id}musicLabel(){return this.musicIdx<0?"ROUTE THEME":Sa[this.musicIdx].name}nextTrack(){this.musicIdx=this.musicIdx+1>=Sa.length?-1:this.musicIdx+1,z2(this.musicIdx),this.audio.music(this.trackId()),this.musicToast=this.clock+2.5}flash(t,e="",n=2){this.msg=t,this.msg2=e,this.msgUntil=this.clock+n}startRace(){this.paused=!1,this.resetPlayer(!1),this.hp=100,this.wrecked=!1,this.applyCar();const t=this.mode==="online"?this.onlineGo:null;this.raceTurbos=t?t.turbos:this.turboCount,this.turbos=this.raceTurbos,this.turboT=0,this.weapons=t?t.weapons:this.mode==="rivals"&&this.weaponsSetting,this.raceAmmo=t?t.ammo:this.ammoCount,this.ammo=this.weapons?this.raceAmmo:0,this.fireCool=0,this.firingT=0,this.gunTarget=this.lastGunTarget=null,this.hitFlash=0,this.gunFrom.clear(),this.pendingHits.clear(),this.raceTime=0,this.finishTime=-1,this.table=[],this.mode==="rivals"?(this.world.setRivals(Gg(this.spec,this.pos,Date.now()&65535,this.raceTurbos,this.weapons?this.raceAmmo:0)),this.world.resetTraffic(this.pos,10,520),this.place=8):this.world.setRivals([]),this.timeLeft=this.world.route.startTime,this.score=0,this.lastBeep=-1,this.msg="",this.go("countdown"),this.audio.music(this.trackId())}update(t){const e=this.input;if(this.clock+=t,e.hit("KeyM")&&this.audio.toggleMute(),!this.paused&&e.hit("KeyN")&&["carselect","countdown","race"].includes(this.state)&&this.nextTrack(),this.paused){let s=e.hit("Escape")?"resume":e.hit("KeyR")?"restart":e.hit("KeyQ")?"quit":"";for(const r of e.taps)r.y>222&&r.y<254?s="resume":r.y>=254&&r.y<280?s="restart":r.y>=280&&r.y<310&&(s="quit");s==="resume"?this.paused=!1:s==="restart"&&this.mode!=="online"?this.startRace():s==="quit"&&(this.paused=!1,this.mode==="online"?this.toLobby():this.toSelect()),this.audio.engine(!1,0,0),this.audio.skid(0),this.netTick(t);return}switch(this.t+=t,this.state){case"attract":{if(this.demoClock+=t,this.demoClock>24){this.demoClock=0,this.attractRoute=(this.attractRoute+1)%this.routes.length,this.setWorld(this.attractRoute);const s=We[Math.floor(Math.random()*We.length)];this.world.setPlayerCar(s,s.paints[0]),this.resetPlayer(!0)}this.drive(t,this.autopilot(),!0),(e.confirm||e.taps.length)&&(this.audio.coin(),this.toSelect());break}case"select":{this.drive(t,this.autopilot(),!0);let s=-1,r=e.confirm||this.t>20;const a=this.routes.length;e.hit("ArrowLeft","KeyA")&&(s=(this.routeIdx+a-1)%a),e.hit("ArrowRight","KeyD")&&(s=(this.routeIdx+1)%a);let o=e.hit("ArrowUp","KeyW","ArrowDown","KeyS");for(const c of e.taps)if(c.y>ra&&c.y<ra+2*oa-12&&c.x>sa&&c.x<sa+3*aa-12){const l=Math.floor((c.y-ra)/oa)*3+Math.floor((c.x-sa)/aa);l===this.routeIdx?r=!0:l<a&&(s=l)}else if(c.y>=320&&c.y<380){const l=Ao[Math.max(0,Math.min(2,Math.floor((c.x-(gt/2-375))/250)))];l!==this.mode&&(this.mode=l,this.audio.blip())}else c.y>=380&&(r=!0);if(o){const c=e.hit("ArrowDown","KeyS")?1:2;this.mode=Ao[(Ao.indexOf(this.mode)+c)%3],this.audio.blip()}s>=0&&(this.audio.blip(),this.setWorld(s),this.resetPlayer(!0)),e.hit("Escape")?(this.go("attract"),this.audio.music("title")):r&&(this.audio.coin(),this.mode==="online"?this.toName():this.toCarSelect());break}case"carselect":{this.speed=0;let s=0,r=0,a=e.confirm||this.t>25;e.hit("ArrowLeft","KeyA")&&(s=-1),e.hit("ArrowRight","KeyD")&&(s=1),e.hit("ArrowUp","KeyW","ArrowDown","KeyS")&&(r=1),e.hit("KeyT")&&this.cycleTurbos(),e.hit("KeyV")&&this.mode==="rivals"&&this.toggleWeapons(),e.hit("KeyB")&&this.mode==="rivals"&&this.cycleAmmo();for(const o of e.taps)o.y>150&&o.y<186?this.mode!=="rivals"||o.x<gt*.33?this.cycleTurbos():o.x<gt*.66?this.toggleWeapons():this.cycleAmmo():o.y>370&&o.y<405&&o.x>gt/2?this.nextTrack():o.y>405&&o.x>gt/2-150&&o.x<gt/2+150?a=!0:o.x<160?s=-1:o.x>gt-160?s=1:r=1;s&&(this.carIdx=(this.carIdx+s+We.length)%We.length,this.paintIdx=0,this.audio.blip()),r&&(this.paintIdx=(this.paintIdx+1)%this.spec.paints.length,this.audio.blip()),(s||r)&&this.applyCar(),e.hit("Escape")?this.toSelect():a&&(jh(this.carIdx,this.paintIdx),this.audio.coin(),this.startRace()),this.showroom(t);break}case"name":{this.speed=0,e.hit("Escape")&&this.nameBox&&(this.nameBox.hide(),this.toSelect()),this.showroom(t);break}case"lobby":{this.lobby(t);break}case"countdown":{const s=Math.floor(this.t);s!==this.lastBeep&&s<=3&&(this.lastBeep=s,this.audio.countBeep(s===3));const r=e.accel?.9:.15;this.audio.engine(!0,r,e.accel?1:0),this.updateWorld(0,{steer:0,yaw:0,spin:0,bounce:e.accel?Math.random()*.02:0}),this.t>=3&&(this.go("race"),this.flash("GO!","",1)),e.hit("Escape")&&(this.paused=!0),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}case"race":{e.hit("KeyT","ShiftLeft","ShiftRight")&&this.turbos>0&&this.turboT<=0&&this.crashT<=0&&(this.turbos--,this.turboT=Ic,this.audio.turbo(),this.flash("TURBO!","",1)),this.drive(t,{accel:e.accel||this.turboT>0,brake:e.brake,steer:e.steer,drift:e.drift},!1),this.timeLeft-=t,this.score+=Math.floor(this.speed*Ro*t*9),this.drifting&&this.speed>45&&(this.score+=Math.floor(t*3e3));const s=this.world.track.seg(Math.floor(this.pos/jt));s.stage>this.stage&&(this.stage=s.stage,this.timeLeft+=this.world.route.extendTime,this.flash("CHECKPOINT!","EXTENDED PLAY",2.5),this.audio.jingle()),this.pos>=this.world.track.goalDist?(this.bonusLeft=Math.max(0,this.timeLeft),this.mode!=="arcade"&&(this.finishTime=this.raceTime,this.place=Ph(this.world.rivals,this.pos,this.finishTime),this.score+=[1e6,6e5,4e5,25e4,15e4,1e5,5e4,2e4][this.place-1],this.table=Zr(this.world.rivals,this.world.track,"YOU",this.spec.name,this.finishTime,this.raceTime)),this.go("goal"),this.audio.fanfare(),this.audio.music(null)):this.timeLeft<=0&&(this.timeLeft=0,this.mode!=="arcade"&&(this.table=Zr(this.world.rivals,this.world.track,"YOU",this.spec.name,1/0,this.raceTime)),this.go("over"),this.audio.sad(),this.audio.music(null),this.saveScore()),e.hit("Escape")&&(this.paused=!0),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}case"goal":{const s=this.autopilot();if(this.drive(t,{...s,accel:!1,brake:this.speed>20},!0),this.t>1.5&&this.bonusLeft>0){const r=Math.min(this.bonusLeft,t*12);this.bonusLeft-=r,this.score+=Math.floor(r*1e4),this.timeLeft=this.bonusLeft,Math.floor(this.t*12)%2===0&&this.audio.blip(),this.bonusLeft<=0&&this.saveScore()}this.t>3&&this.bonusLeft<=0&&(e.confirm||e.taps.length||this.t>14)&&this.afterRace(),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}case"over":{this.drive(t,{accel:!1,brake:this.t>1,steer:0,drift:!1},!1),this.t>2.5&&(e.confirm||e.taps.length||this.t>12)&&this.afterRace(),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}}["race","goal","over"].includes(this.state)&&this.guns(t);const n=this.world;if(n.rivals.length&&["countdown","race","goal","over"].includes(this.state)){const s=this.state!=="countdown";this.state==="race"&&(this.raceTime+=t),Hg(n.rivals,t,n.track,n.traffic,r=>n.data.props[r.t].len??4.4,{pos:this.pos,px:this.px,speed:this.speed},this.raceTime,s),(this.state==="race"||this.state==="countdown")&&(this.place=Ph(n.rivals,this.pos,-1))}n.netTime=this.raceTime,this.netTick(t)}saveScore(){this.score>this.hi&&(this.hi=this.score,H2(this.hi))}cycleTurbos(t=1){this.turboCount=(this.turboCount-1+t+9)%9+1,Io("th86-turbos",this.turboCount),this.audio.blip()}toggleWeapons(){this.weaponsSetting=!this.weaponsSetting,Io("th86-weapons",this.weaponsSetting?1:0),this.audio.blip()}cycleAmmo(t=1){const e=Yr.length;this.ammoCount=Yr[(Math.max(0,Yr.indexOf(this.ammoCount))+t+e)%e],Io("th86-ammo",this.ammoCount),this.audio.blip()}settingsLine(t){const e=n=>this.touch?"":`${n} `;return`${e("T")}TURBOS ${this.turboCount}${t?`  ${e("V")}WEAPONS ${this.weaponsSetting?"ON":"OFF"}  ${e("B")}AMMO ${this.ammoCount}`:""}`}showroom(t){this.updateWorld(t,{steer:0,yaw:0,spin:0,bounce:0});const e=this.t*.45+.6,n=this.camera;n.fov=40,n.updateProjectionMatrix(),n.position.set(this.px+Math.sin(e)*7,2,Math.cos(e)*7),n.lookAt(this.px,.35,0)}boot(){Nh()!==null&&(this.mode="online",this.toName())}toName(){if(this.mode="online",this.go("name"),this.applyCar(),this.resetPlayer(!1),this.px=0,!this.nameBox)return this.joinLobby(this.playerName||"PLAYER");this.nameBox.show(this.playerName,t=>{this.input.fireFirst(),this.playerName=t,G2(t),this.joinLobby(t)})}joinLobby(t){var e;if(!this.net||this.net.status==="error"){(e=this.net)==null||e.leave();const n=new URLSearchParams(location.search).get("net")==="local";this.net=new Kg(Nh()??"lobby",n),this.net.onGo=s=>this.acceptGo(s),this.net.onSt=(s,r)=>this.gotSt(s,r),this.net.onHit=(s,r)=>this.gotHit(s,r)}this.net.setMe({name:t,car:this.carIdx,paint:this.paintIdx,status:"lobby",raceId:""}),this.toLobby()}toLobby(){var t;this.paused=!1,this.pending=null,this.raceId="",this.world.setRivals([]),(t=this.net)==null||t.setMe({status:"lobby",raceId:""}),this.go("lobby"),this.applyCar(),this.resetPlayer(!1),this.px=0,this.audio.music(this.trackId())}leaveOnline(){var t;(t=this.net)==null||t.leave(),this.net=null,this.pending=null,this.mode="arcade",this.toSelect()}afterRace(){this.mode==="online"&&this.net?this.toLobby():this.toSelect()}lobby(t){const e=this.input,n=this.net;this.speed=0;let s=0,r=0,a=!1,o=e.confirm;e.hit("ArrowLeft","KeyA")&&(s=-1),e.hit("ArrowRight","KeyD")&&(s=1),e.hit("ArrowUp","KeyW","ArrowDown","KeyS")&&(r=1),e.hit("KeyR")&&(a=!0);let c=e.hit("KeyT")?1:0,l=e.hit("KeyV"),h=e.hit("KeyB")?1:0,u=-1,d=e.hit("Escape","KeyQ");const f=qh;for(const M of e.taps){const m=(x,_)=>M.x>=x-4&&M.x<x+_+4,p=x=>M.y>=x-3&&M.y<x+f.chipH+3;if(M.y>405&&Math.abs(M.x-gt/2)<150)o=!0;else if(M.y>405&&M.x<gt/2-160)a=!0;else if(M.y<50&&M.x<150)d=!0;else if(M.y>=f.carY&&M.y<f.carY+f.carH&&M.x<f.x1)s=M.x<f.x0+40?-1:1;else if(M.y>=f.paintY-4&&M.y<f.paintY+16&&M.x<f.x1){const x=this.spec.paints.length,_=f.mid-(x*22-6)/2,v=Math.floor((M.x-_+3)/22);u=v>=0&&v<x?v:-1,u<0&&(r=1)}else p(f.turbY)&&m(f.minusX,28)?c=-1:p(f.turbY)&&m(f.plusX,28)?c=1:p(f.weapY)&&m(f.minusX,f.plusX+28-f.minusX)?l=!0:p(f.ammoY)&&m(f.minusX,28)?h=-1:p(f.ammoY)&&m(f.plusX,28)?h=1:M.y>=135&&M.y<400&&M.x>f.x1&&M.x<gt-330&&(r=1)}if(d)return this.leaveOnline();if((n==null?void 0:n.status)==="error"){o&&this.joinLobby(this.playerName||"PLAYER"),this.showroom(t);return}!!this.pending||(s&&(this.carIdx=(this.carIdx+s+We.length)%We.length,this.paintIdx=0),r&&(this.paintIdx=(this.paintIdx+1)%this.spec.paints.length),u>=0&&u!==this.paintIdx&&(this.paintIdx=u,r=1),(s||r)&&(this.audio.blip(),this.applyCar(),jh(this.carIdx,this.paintIdx),n==null||n.setMe({car:this.carIdx,paint:this.paintIdx})),a&&(this.audio.blip(),this.setWorld((this.routeIdx+1)%this.routes.length),this.applyCar(),this.resetPlayer(!1),this.px=0,this.audio.music(this.trackId())),c&&this.cycleTurbos(c),l&&this.toggleWeapons(),h&&this.cycleAmmo(h),o&&(n==null?void 0:n.status)==="online"&&this.startOnline()),this.pending&&Fi()>=this.pending.at&&this.beginOnlineRace(this.pending.go),this.showroom(t)}startOnline(){const t=this.net,e=t.list().filter(s=>s.status==="lobby").slice(0,7),n={raceId:`${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,route:this.routeIdx,seed:Math.floor(Math.random()*1e9),turbos:this.turboCount,weapons:this.weaponsSetting,ammo:this.ammoCount,players:[{id:t.selfId,name:this.playerName||"PLAYER",car:this.carIdx,paint:this.paintIdx},...e.map(s=>({id:s.id,name:s.name,car:s.car,paint:s.paint}))]};t.sendGo(n),this.acceptGo(n)}acceptGo(t){this.state!=="lobby"||!this.net||t.players.some(e=>e.id===this.net.selfId)&&(this.pending&&this.pending.go.raceId<=t.raceId||(this.onlineGo=t,this.pending={go:t,at:Fi()+2},this.audio.coin()))}beginOnlineRace(t){const e=this.net;this.pending=null,this.onlineGo=t,this.setWorld(t.route),this.raceId=t.raceId,this.startRace();const n=t.players.length,s=Math.ceil(n/2),r=o=>({d:3*jt+(s-1-Math.floor(o/2))*9,x:(o%2?1:-1)*lr*.55}),a=[];t.players.forEach((o,c)=>{const l=r(c);if(o.id===e.selfId){this.pos=l.d,this.px=l.x;return}const h=We[o.car%We.length];a.push({name:o.name,spec:h,paint:h.paints[o.paint%h.paints.length],d:l.d,x:l.x,v:0,vmax:0,corner:0,aggro:0,lane:0,steer:0,spin:0,braking:!1,finished:-1,bumpT:0,turbos:0,turboT:0,hp:100,wrecked:!1,wreckT:0,smokeT:0,ammo:0,gunTaken:0,burst:0,fireCool:0,gunT:0,gunTo:-1,remote:{id:o.id,d:l.d,x:l.x,v:0,at:Fi(),hp:100}})}),this.world.setRivals(a),this.world.setNetTraffic(t.seed,3*jt),this.place=n,e.setMe({status:"race",raceId:t.raceId})}gotSt(t,e){var a;if(!this.raceId||t.r!==this.raceId)return;const n=this.world.rivals.findIndex(o=>{var c;return((c=o.remote)==null?void 0:c.id)===e});if(n<0)return;const s=this.world.rivals[n],r=s.remote;if(r.d=t.d,r.x=t.x,r.v=t.v,r.at=Fi(),s.steer=t.steer,s.braking=t.br,s.turboT=t.tb?1:0,t.hp<r.hp-.5&&(this.world.rivalHit(n,Math.min(1,(r.hp-t.hp)/25)),r.hp>=55&&t.hp<55&&this.world.rivalBreakLamp(n),r.hp=t.hp),s.hp=t.hp,t.hp<=0&&!s.wrecked&&(s.wrecked=!0,s.wreckT=0),t.fin>=0&&s.finished<0&&(s.finished=t.fin),t.gun){const o=t.gun===((a=this.net)==null?void 0:a.selfId)?-1:this.world.rivals.findIndex(c=>{var l;return((l=c.remote)==null?void 0:l.id)===t.gun});o!==n&&(s.gunTo=o,s.gunT=.3)}}gotHit(t,e){var n;!this.raceId||t.r!==this.raceId||t.to!==((n=this.net)==null?void 0:n.selfId)||t.n>0&&this.takeGunHit(e,t.n)}netTick(t){var n,s,r;const e=this.net;if(e&&(e.update(t),!(this.mode!=="online"||!this.raceId||!["countdown","race","goal","over"].includes(this.state)))){if(this.netSendT-=t,this.netSendT<=0&&(this.netSendT=1/15,e.sendSt({r:this.raceId,d:this.pos,x:this.px,v:this.speed,steer:this.steer,br:this.input.brake&&this.speed>1,tb:this.turboT>0,hp:this.hp,fin:this.finishTime,gun:this.firingT>0&&this.lastGunTarget!==null?((s=(n=this.world.rivals[this.lastGunTarget])==null?void 0:n.remote)==null?void 0:s.id)??"":""})),this.hitSendT-=t,this.hitSendT<=0&&this.pendingHits.size){this.hitSendT=.2;for(const[a,o]of this.pendingHits)e.sendHit({r:this.raceId,to:a,n:o});this.pendingHits.clear()}this.table.length&&(this.state==="goal"||this.state==="over")&&(this.tableT-=t,this.tableT<=0&&(this.tableT=1,this.table=Zr(this.world.rivals,this.world.track,"YOU",this.spec.name,this.finishTime>=0?this.finishTime:1/0,this.raceTime),this.place=((r=this.table.find(a=>a.player))==null?void 0:r.pos)??this.place))}}toSelect(){this.go("select");for(const t of this.worlds)t==null||t.setRivals([]);this.applyCar(),this.resetPlayer(!0),this.audio.music("title")}toCarSelect(){this.go("carselect"),this.audio.music(this.trackId()),this.applyCar(),this.resetPlayer(!1),this.px=0}autopilot(){const t=this.world;let e=Math.round((this.px+Z)/(Z*2/4)-.5);e=Math.max(0,Math.min(3,e));let n=!1;for(const o of t.traffic){const c=o.d-this.pos;c>0&&c<70&&Math.abs(o.x-t.laneX(e))<2.5&&(n=!0)}if(n){for(const o of[e-1,e+1,e-2,e+2])if(!(o<0||o>3)&&!t.traffic.some(c=>c.d-this.pos>-8&&c.d-this.pos<90&&Math.abs(c.x-t.laneX(o))<2.5)){e=o;break}}const s=t.track.seg(Math.floor(this.pos/jt)).curve,r=(t.laneX(e)-this.px)*2.2+s*this.speed*this.speed*Kh,a=Math.max(-1,Math.min(1,r/$h));return{accel:this.speed<68,brake:!1,steer:a,drift:!1}}drive(t,e,n){const s=this.world,r=s.track,a=s.route,o=r.seg(Math.floor(this.pos/jt));let c=0,l=!1,h=0;if(this.crashT>0){this.crashT-=t,this.speed=Math.max(0,this.speed-60*t),this.crashYaw+=t*9*Math.max(0,this.crashT);const x=Math.max(-Z+3,Math.min(Z-3,this.px));this.px+=(x-this.px)*Math.min(1,t*1.5),this.bounce=Math.abs(Math.sin(this.crashT*9))*.4*this.crashT,c=this.crashT>.6?1:0,this.crashT<=0&&(this.crashYaw=0)}else{const x=this.speed,_=this.spec.stats,v=this.turboT>0,E=this.vmax*(v?Ah:1)*this.limp();e.accel?this.speed+=30*_.accel*(v?1.9:1)*(1-Math.pow(Math.min(1,x/E),1.8))*t+2*t:e.brake?this.speed-=58*t:this.speed-=(3+x*.035)*t;const w=e.steer,T=w===0?9:7;this.steer+=Math.sign(w-this.steer)*Math.min(Math.abs(w-this.steer),T*t);let C=this.steer*$h*_.grip*Math.min(1,x/22),b=o.curve*x*x*Kh/_.grip;this.drifting=e.drift&&x>30&&Math.abs(e.steer)>0,this.drifting?(C*=1.45,b*=.45,this.speed-=5*t,c=1):Math.abs(this.steer)>.8&&x>62&&Math.abs(o.curve)>.0014&&(c=.6);const S=this.drifting?this.steer*-.5:this.steer*-.12;this.driftYaw+=(S-this.driftYaw)*Math.min(1,t*6),this.px+=(C-b)*t;const D=a.walls||o.tunnel,W=D?Z+(o.tunnel,1):a.offroadLimit;Math.abs(this.px)>W&&(this.px=Math.sign(this.px)*W,D&&x>15&&(h=Math.sign(this.px),this.speed-=x*.9*t,this.shakeKick=.25,Math.random()<t*12&&this.audio.scrape(),!n&&this.state==="race"&&(this.hp-=3*t,this.scrapeDmg+=t,this.scrapeDmg>.6&&(this.scrapeDmg=0,this.world.car.hit(.12,h>0?"right":"left")),this.hp<=0&&this.wreck()))),l=Math.abs(this.px)>Z+1,l?(this.speed>32&&(this.speed-=40*t),this.bounce=Math.random()*.08*Math.min(1,x/30),this.shakeKick=Math.max(this.shakeKick,.12)):this.bounce=0,!n&&l&&x>12&&s.hitProp(this.pos,this.px)&&(this.damage(12+x*.12,.6+Math.min(.4,x/200),this.px>0?"right":"left"),this.crash(!0));const B=s.hitTraffic(this.pos,this.px);B&&(n?this.speed=Math.min(this.speed,B.v*.9):x-B.v>36?(this.damage(10+(x-B.v)*.14,.5+Math.min(.5,(x-B.v)/150),"front"),this.crash(!0)):(this.dmgCool<=0&&this.damage(5,.25,B.x>this.px?"right":"left"),this.speed=B.v*.75,this.px+=Math.sign(this.px-B.x||1)*1.2,this.shakeKick=.3,this.audio.crash(!1)));for(const V of s.rivals){if(Math.abs(V.d-this.pos)>4.3||Math.abs(V.x-this.px)>1.95)continue;const et=Math.sign(this.px-V.x||1);this.px+=et*.9,V.x-=et*.9,V.d>this.pos?x-V.v>45&&!n?(this.damage(9+(x-V.v)*.1,.5,"front"),this.crash(!0)):(this.speed=Math.min(this.speed,V.v*.92),!n&&this.dmgCool<=0&&this.damage(2.5,.15,"front")):(V.bumpT=.6,!n&&this.dmgCool<=0&&this.damage(2,.15,Math.abs(V.d-this.pos)<2?et>0?"left":"right":"rear")),this.shakeKick=Math.max(this.shakeKick,.25),n||this.audio.crash(!1)}}const u=this.vmax*(this.turboT>0?Ah:1);this.speed>u&&(this.speed=Math.max(u,this.speed-14*t)),this.speed=Math.max(0,this.speed),this.turboT>0&&(this.turboT=Math.max(0,this.turboT-t),this.flameT=Math.max(this.flameT,.08),this.shakeKick=Math.max(this.shakeKick,.1)),this.pos+=this.speed*t,this.wheelSpin-=this.speed*t/.37,(this.state==="attract"||this.state==="select")&&this.pos>r.goalDist-200&&this.resetPlayer(!0),s.updateTraffic(t,this.pos,()=>{this.state==="race"&&(this.score+=2e3)});let d=1;const f=this.vmax/Yh;for(;d<js.length-1&&this.speed>js[d]*f;)d++;const g=.25+.75*Math.min(1,(this.speed-js[d-1]*f)/((js[d]-js[d-1])*f)),M=this.state!=="attract"&&this.state!=="select";this.audio.engine(M&&!this.wrecked,g,e.accel?1:0),this.audio.skid(M?c*Math.min(1,this.speed/20):0),d>this.gear&&e.accel&&this.speed>20&&(this.flameT=.12,M&&this.audio.pop()),this.wasAccel&&!e.accel&&this.speed>55&&this.crashT<=0&&(this.flameT=.2,M&&this.audio.pop()),this.gear=d,this.wasAccel=e.accel,this.flameT=Math.max(0,this.flameT-t);const m=s.particles,p=Math.random()<t*45?1:0;if(p&&c>0&&this.speed>12){const x=a.smoke;for(const _ of[-.9,.9])m.spawn(this.pos-1.4,this.px+_,.35,this.speed*.6,_,.8,.8,.45,2.6,x)}if(p&&l&&this.speed>15){const _=o.zone.startsWith("beach")&&this.px>0?15916192:o.zone==="hills"?13152378:14207128;for(const v of[-.9,.9])m.spawn(this.pos-1.5,this.px+v,.3,this.speed*.5,v*2,1.8,.6,.4,2.2,_)}if(this.dmgCool=Math.max(0,this.dmgCool-t),this.engineSmoke(t),h&&Math.random()<t*60)for(let x=0;x<2;x++)m.spawn(this.pos+Math.random()*2-1,this.px+h*.9,.5,this.speed*.8,-h*(2+Math.random()*3),3+Math.random()*3,.35,.13,-1,Math.random()<.5?16769088:16747040);m.update(t),this.updateWorld(t,{steer:this.steer,yaw:this.driftYaw+this.crashYaw,spin:this.wheelSpin,bounce:this.bounce,brake:e.brake&&this.speed>1||this.crashT>0,flame:this.flameT})}limp(){return this.hp>=35?1:.86+.14*(this.hp/35)}damage(t,e,n){this.state!=="race"||this.wrecked||(this.hp=Math.max(0,this.hp-t),this.dmgCool=.5,this.world.car.hit(e,n),this.afterDamage(t))}afterDamage(t){const e=this.hp+t;e>=55&&this.hp<55&&this.world.car.breakLamp(Math.random()<.5?-1:1),this.hp<=0?this.wreck():this.hp<25&&e>=25&&this.flash("WARNING!","HEAVY DAMAGE",2)}takeGunHit(t,e){if(this.state!=="race"||this.wrecked)return;const n=this.gunFrom.get(t)??0;let s=Math.min(e*Rh,Ug-n);if(t.startsWith("ai:")){let a=0;for(const[o,c]of this.gunFrom)o.startsWith("ai:")&&(a+=c);s=Math.min(s,Fg-a)}if(s<=0)return;this.gunFrom.set(t,n+s),this.hp=Math.max(0,this.hp-s);const r=["left","right","rear"];this.world.car.hit(.1,r[Math.floor(Math.random()*3)]),this.hitFlash=.25,this.shakeKick=Math.max(this.shakeKick,.15),this.audio.ping(),this.afterDamage(s)}hitRival(t){const e=this.world.rivals[t];if(e.remote){this.pendingHits.set(e.remote.id,(this.pendingHits.get(e.remote.id)??0)+1);return}if(e.wrecked)return;const n=Rh*Og,s=e.hp;e.hp=Math.max(0,e.hp-n),e.gunTaken+=n,e.bumpT=Math.max(e.bumpT,.25+(1-e.hp/100)*.35),this.world.rivalHit(t,.16),s>=55&&e.hp<55&&this.world.rivalBreakLamp(t),e.hp<=0&&(e.wrecked=!0,e.gunT=0,e.burst=0,this.score+=5e4,this.flash(`${e.name} WRECKED!`,"+50000",2),this.audio.crash(!0),this.audio.pop())}guns(t){const e=this.world,n=e.rivals,s=this.input;this.hitFlash=Math.max(0,this.hitFlash-t),this.firingT=Math.max(0,this.firingT-t),this.noTargetT=Math.max(0,this.noTargetT-t),this.fireCool=Math.max(0,this.fireCool-t),e.playerGun.flash=!1;let r=null,a=1/0;this.weapons&&!this.wrecked&&n.forEach((c,l)=>{const h=c.d-this.pos,u=c.x-this.px;if(c.wrecked||!Ch(h,u))return;const d=Math.hypot(h,u);d<a&&(a=d,r=l)}),this.gunTarget=r,this.gunP=r!==null?wo(a):0;const o=this.weapons&&this.state==="race"&&!this.wrecked&&this.crashT<=0&&s.held("KeyF");if(o&&(r===null||this.ammo<=0)&&(this.noTargetT=.3),o&&r!==null&&this.ammo>0&&(this.firingT=.35,this.lastGunTarget=r,this.fireCool<=0)){this.fireCool=1/So,this.ammo--;const c=n[r],l=Math.random()<this.gunP;e.shoot(this.pos,this.px,c.d,c.x,l),e.playerGun.flash=!0,this.audio.gun(),l&&this.hitRival(r)}e.playerGun.target=this.firingT>0?this.lastGunTarget:null,n.forEach(c=>{if(c.gunT=Math.max(0,c.gunT-t),c.remote){if(c.gunT<=0||(c.fireCool-=t,c.fireCool>0))return;c.fireCool=1/So;const d=c.gunTo===-1?{d:this.pos,x:this.px}:n[c.gunTo];if(!d)return;e.shoot(c.d,c.x,d.d,d.x,Math.random()<wo(Math.hypot(d.d-c.d,d.x-c.x))),this.audio.gun(.4);return}if(!this.weapons||this.state!=="race"||this.wrecked||c.wrecked||c.ammo<=0||c.finished>=0)return;const l=this.pos-c.d,h=this.px-c.x;if(!Ch(l,h)){c.burst=0;return}if(c.burst<=0){Math.random()<t*(.06+c.aggro*.14)&&(c.burst=3+Math.floor(Math.random()*4));return}if(c.gunT=.35,c.gunTo=-1,c.fireCool-=t,c.fireCool>0)return;c.fireCool=1/So,c.burst--,c.ammo--;const u=Math.random()<wo(Math.hypot(l,h));e.shoot(c.d,c.x,this.pos,this.px,u),this.audio.gun(.5),u&&this.takeGunHit(`ai:${c.name}`,1)}),e.tickTracers(t)}wreck(){this.wrecked||(this.hp=0,this.wrecked=!0,this.turboT=0,this.audio.crash(!0),this.audio.pop(),this.mode!=="arcade"&&(this.table=Zr(this.world.rivals,this.world.track,"YOU",this.spec.name,1/0,this.raceTime)),this.go("over"),this.audio.sad(),this.audio.music(null),this.saveScore())}engineSmoke(t){if(["race","over","goal"].includes(this.state)){const e={t:this.smokeT};this.smokeFrom(e,t,this.spec,this.pos,this.px,this.speed,this.hp,this.wrecked,this.t),this.smokeT=e.t}for(const e of this.world.rivals){e.remote&&e.wrecked&&(e.wreckT+=t);const n={t:e.smokeT};this.smokeFrom(n,t,e.spec,e.d,e.x,e.v,e.hp,e.wrecked,e.wreckT),e.smokeT=n.t}}smokeFrom(t,e,n,s,r,a,o,c,l){if(o>=50||(t.t+=e*(c?30:o<25?14:5),t.t<1))return;t.t-=1;const h=n.stations,u=["r32","supra","rx7"].includes(n.id),d=u?h[0].z+.9:h[h.length-1].z-.9,f=u?h[1].top:h[h.length-2].top,g=s-d,M=r+(Math.random()-.5)*.6,m=c?Math.random()<.5?2236962:3815994:o<25?6974058:12105912,p=this.world.particles;p.spawn(g,M,f+.1,a*.85,(Math.random()-.5)*.8,1.2+Math.random(),1.6+Math.random(),.45,3,m),c&&l<6&&Math.random()<.5&&p.spawn(g,M,f+.05,a*.9,(Math.random()-.5)*.4,1.5,.35,.3,.5,Math.random()<.5?16747040:16764992)}crash(t){if(!(this.crashT>0)){this.crashT=t?1.6:.8,this.speed*=.35,this.shakeKick=.6,this.audio.crash(t);for(let e=0;e<14;e++)this.world.particles.spawn(this.pos+Math.random()*3-1.5,this.px+Math.random()*3-1.5,.4+Math.random(),this.speed*.5,Math.random()*4-2,1+Math.random()*2,1.1,.7,2.5,e%3?14211288:9079434)}}updateWorld(t,e){const n=this.speed/Yh,s=this.camera,r=54+14*Math.min(1.3,n)*Math.min(1.3,n)+(this.turboT>0?6:0);Math.abs(s.fov-r)>.01&&(s.fov=Math.abs(r-s.fov)>8?r:s.fov+(r-s.fov)*Math.min(1,t*5),s.updateProjectionMatrix()),this.shakeKick=Math.max(0,this.shakeKick-t*1.5);const a=Math.max(0,n-.7)*.12+this.shakeKick*.5;this.world.update(this.pos,this.px,s,a,e)}draw(){const t=this.hud;if(t.clear(),ie.modern&&this.state!=="carselect"){const s=this.world.sunOnHud(this.camera,gt,ze);if(s){const r=Math.max(Math.abs(s.x/gt-.5),Math.abs(s.y/ze-.5))*2;t.flare(s.x,s.y,Math.max(0,Math.min(1,1.25-r)))}}const e=Math.floor(this.clock*2.5)%2===0,n=this.world.route;switch(this.state){case"attract":{t.logo("TURBO",gt/2,70,64,Vt,Oe,11540504),t.logo("HORIZON",gt/2,150,56,8452351,2789631,1714832),t.text("'86",gt/2+230,210,24,Ci,"left"),t.text("ARCADE  ROAD  RACING",gt/2,236,16,Ht,"center"),e&&t.text(this.touch?"TAP TO START":"PRESS ENTER",gt/2,320,24,Vt,"center"),t.text(`HI-SCORE ${String(this.hi).padStart(8,"0")}`,gt/2,20,16,Pe,"center"),t.text("FREE PLAY",gt-20,ze-30,16,Ht,"right"),t.text("©1986 HORIZON SOFT",20,ze-30,16,Ht,"left");break}case"select":{t.text("SELECT  YOUR  ROUTE",gt/2,44,24,Vt,"center"),this.routes.forEach((r,a)=>{const o=sa+a%3*aa,c=ra+Math.floor(a/3)*oa,l=aa-12,h=oa-12,u=a===this.routeIdx;t.box(o,c,l,h,r.card[0],u?e?Vt:Ht:3816026,u?6:3),t.text(r.lines[0],o+l/2,c+18,16,r.card[1],"center"),t.text(r.lines[1],o+l/2,c+44,16,r.card[1],"center")}),t.text(this.touch?"TAP A ROUTE, TAP AGAIN TO GO":"< >  ROUTE   ^ v  MODE   ENTER  NEXT",gt/2,290,16,Ht,"center"),[["arcade","ARCADE","BEAT THE CLOCK"],["rivals","VS RIVALS","8-CAR RACE"],["online","ONLINE","RACE REAL PLAYERS"]].forEach(([r,a,o],c)=>{const h=gt/2-375+c*250+7,u=r===this.mode;t.box(h,324,236,54,u?2759248:1315880,u?e?Ci:Ht:3816026,u?5:3),t.text(a,h+236/2,334,16,u?Vt:9079464,"center"),t.text(o,h+236/2,356,8,u?Ht:9079464,"center")}),t.text(`${Math.max(0,Math.ceil(20-this.t))}`,gt-30,20,24,Oe,"right");break}case"carselect":{const s=this.spec;t.text("SELECT  YOUR  CAR",gt/2,20,24,Vt,"center"),t.text(`${Math.max(0,Math.ceil(25-this.t))}`,gt-30,20,24,Oe,"right"),t.text(s.make,gt/2,64,16,Pe,"center"),t.text(s.name,gt/2,88,32,Ht,"center"),t.text(`${s.year}  ${s.group}`,gt/2,130,16,Ci,"center"),t.text(this.settingsLine(this.mode==="rivals"),gt/2,160,16,Vt,"center"),t.text("<",40,210,48,e?Vt:Ht,"center"),t.text(">",gt-40,210,48,e?Vt:Ht,"center"),[["SPEED",(s.stats.vmax-260)/90],["ACCEL",(s.stats.accel-.85)/.3],["GRIP",(s.stats.grip-.82)/.38]].forEach(([a,o],c)=>{const l=330+c*22;t.text(a,40,l,16,Vt);for(let h=0;h<12;h++)t.rect(150+h*14,l,11,16,h<Math.round(Math.max(.1,Math.min(1,o))*12)?c===0?ge:c===1?Oe:4251712:2105408)}),t.text(`${s.stats.vmax} KM/H`,340,330,16,Ht),t.text(`CAR ${this.carIdx+1}/${We.length}`,gt-30,330,16,Ht,"right"),t.text(this.touch?"TAP CAR: COLOUR":"^ v  COLOUR",gt-30,356,16,Pe,"right"),t.text(`${this.touch?"TAP":"N"}  MUSIC: ${this.musicLabel()}`,gt-30,382,16,Ci,"right"),t.box(gt/2-150,410,300,50,1727160,e?Vt:Ht),t.text(this.touch?"TAP TO RACE":"ENTER  RACE",gt/2,427,16,Ht,"center");break}case"name":{t.text("ONLINE  RACE",gt/2,20,24,Vt,"center");break}case"lobby":{this.lobbyHud(e);break}default:{if(this.raceHud(e),this.mode==="online"&&this.nameTags(),this.state==="countdown"){const s=3-Math.floor(this.t);s>0&&t.text(String(s),gt/2,180,64,s===1?ge:Vt,"center"),t.text(n.stageNames[0],gt/2,280,16,Ht,"center"),this.countdownHelp()}this.table.length&&(this.state==="goal"?this.t>2.5:this.t>2.5)?this.resultsTable(e):this.state==="goal"&&this.mode!=="arcade"?(t.text(this.place===1?"YOU WIN!":`${Kr(this.place)} PLACE`,gt/2,150,64,this.place===1?Vt:Pe,"center"),t.text(Lh(this.finishTime),gt/2,240,24,Ht,"center")):this.state==="goal"&&(t.text("GOAL!",gt/2,140,64,Vt,"center"),t.text("CONGRATULATIONS",gt/2,230,24,Pe,"center"),t.text(`TIME BONUS  ${Math.ceil(this.bonusLeft*1e4)}`,gt/2,280,16,Ht,"center"),this.t>3&&this.bonusLeft<=0&&e&&t.text(this.touch?"TAP TO CONTINUE":"PRESS ENTER",gt/2,330,24,Vt,"center")),this.state==="over"&&!(this.table.length&&this.t>2.5)&&(this.t<2.5?(t.text(this.wrecked?"WRECKED":"TIME UP",gt/2,180,48,ge,"center"),this.wrecked&&t.text("ENGINE BLOWN",gt/2,240,24,Oe,"center")):(t.text("GAME OVER",gt/2,170,48,ge,"center"),t.text(`SCORE ${this.score}`,gt/2,250,24,Ht,"center"),e&&t.text(this.touch?"TAP TO CONTINUE":"PRESS ENTER",gt/2,310,24,Vt,"center"))),this.clock<this.musicToast&&this.state!=="goal"&&this.state!=="over"&&(t.box(gt/2-200,146,400,34,1052720,Ci,3),t.text(`MUSIC  ${this.musicLabel()}`,gt/2,156,16,Ht,"center")),this.clock<this.msgUntil&&(this.msg==="GO!"||e)&&(t.text(this.msg,gt/2,150,this.msg==="GO!"?64:32,this.msg==="GO!"?Vt:Pe,"center"),this.msg2&&t.text(this.msg2,gt/2,200,24,Vt,"center")),this.paused&&(t.box(gt/2-220,150,440,170,1052720,Ht),t.text("PAUSE",gt/2,180,32,Vt,"center"),t.text(this.touch?"RESUME":"ESC  RESUME",gt/2,230,16,Ht,"center"),t.text(this.touch?"RESTART":"R  RESTART",gt/2,260,16,Ht,"center"),t.text(this.touch?"QUIT":"Q  QUIT",gt/2,290,16,Ht,"center"))}}}lobbyHud(t){const e=this.hud,n=this.net,s=this.spec;e.text("ONLINE  LOBBY",gt/2,14,24,Vt,"center"),e.text(this.touch?"< EXIT":"ESC EXIT",20,18,16,9079464);const r=(n==null?void 0:n.list())??[],a=!n||n.status==="connecting"?"CONNECTING...":n.status==="error"?"COULDN'T CONNECT":r.length?`${r.length+1} PLAYERS HERE`:"WAITING FOR PLAYERS...";e.text(a,gt/2,46,16,(n==null?void 0:n.status)==="error"?ge:Pe,"center");const o=qh,c=!this.touch;e.shade(o.x0,68,o.x1-o.x0,316),e.chip(o.x0+6,o.carY+4,30,o.carH-8,"←",Vt),e.chip(o.x1-36,o.carY+4,30,o.carH-8,"→",Vt),e.text(s.make,o.mid,o.carY+2,16,Pe,"center");const l=s.name.length<=11;e.text(s.name,o.mid,o.carY+(l?20:24),l?24:16,Ht,"center");const h=s.paints.length,u=o.mid-(h*22-6)/2;s.paints.forEach((_,v)=>{const E=v===this.paintIdx%h;e.rect(u+v*22-2,o.paintY-2,20,16,E?Vt:3816026),e.rect(u+v*22,o.paintY,16,12,_)}),c&&(e.keycap(o.x0+12,o.paintY-2,"←"),e.keycap(o.x0+30,o.paintY-2,"→"),e.text("CAR",o.x0+52,o.paintY+2,8,cn),e.text("PAINT",o.x1-48,o.paintY+2,8,cn,"right"),e.keycap(o.x1-44,o.paintY-2,"↑"),e.keycap(o.x1-26,o.paintY-2,"↓"));const d=(_,v,E,w,T,C)=>{e.text(v,o.x0+12,_+3,16,w?Vt:cn),C?e.chip(o.minusX,_,o.plusX+28-o.minusX,o.chipH,E,w?Oe:cn,16,w?5909008:1710650):(e.chip(o.minusX,_,28,o.chipH,"←",w?Pe:cn),e.text(E,(o.minusX+o.plusX+28)/2,_+3,16,w?Ht:cn,"center"),e.chip(o.plusX,_,28,o.chipH,"→",w?Pe:cn)),c&&e.keycap(o.x1-34,_+1,T,18)};d(o.turbY,"TURBOS",String(this.turboCount),!0,"T",!1),d(o.weapY,"WEAPONS",this.weaponsSetting?"ON":"OFF",this.weaponsSetting,"V",!0),d(o.ammoY,"AMMO",String(this.ammoCount),this.weaponsSetting,"B",!1),e.text("YOUR SETTINGS APPLY IF YOU START THE RACE",o.mid,216,8,cn,"center"),[["SPEED",(s.stats.vmax-260)/90,ge],["ACCEL",(s.stats.accel-.85)/.3,Oe],["GRIP",(s.stats.grip-.82)/.38,di]].forEach(([_,v,E],w)=>{const T=232+w*12;e.text(_,40,T+1,8,Vt);const C=Math.round(Math.max(.1,Math.min(1,v))*12);for(let b=0;b<12;b++)e.rect(96+b*11,T,9,8,b<C?E:2105408)}),e.text(`${s.stats.vmax} KM/H`,236,233,8,Ht),e.rect(o.x0+8,272,o.x1-o.x0-16,1,3816026),e.text(c?"DRIVING KEYS":"DRIVING BUTTONS",o.mid,278,8,Vt,"center"),c?this.keyGuide(40,294):this.buttonGuide(o.x0+10,292);const g=gt-320,M=70;e.box(g,M,300,40+Math.min(8,r.length+1)*34+(r.length>7?16:0),1052720,3816026,3),e.text("PLAYERS",g+14,M+12,16,Vt);const m=[{name:this.playerName||"PLAYER",car:s.name,st:"YOU",me:!0},...r.map(_=>({name:_.name,car:We[_.car%We.length].name,st:_.status==="race"?"RACING":"READY",me:!1}))];m.slice(0,8).forEach((_,v)=>{const E=M+40+v*34;e.text(_.name,g+14,E,16,_.me?Vt:Ht),e.text(_.st,g+286,E+4,8,_.st==="RACING"?Oe:_.me?Vt:4251712,"right"),e.text(_.car,g+14,E+19,8,9079464)}),m.length>8&&e.text(`+${m.length-8} MORE`,g+14,M+40+8*34,8,Ht);const p=this.world.route;if(e.box(20,410,250,50,1315880,Ht,3),e.text(`${this.touch?"TAP":"R"}  ROUTE`,145,418,8,9079464,"center"),e.text(`${p.lines[0]} ${p.lines[1]}`.slice(0,15),145,434,16,Vt,"center"),(n==null?void 0:n.status)==="error"){e.text("CHECK YOUR CONNECTION, OR PLAY ONLINE AT",gt/2,320,8,Ht,"center"),e.text("FREDDYWONG.GITHUB.IO/TURBO-HORIZON-86",gt/2,340,16,Pe,"center"),e.box(gt/2-150,410,300,50,1727160,t?Vt:Ht),e.text(this.touch?"TAP TO RETRY":"ENTER  RETRY",gt/2,427,16,Ht,"center");return}if(this.pending){const _=Math.max(1,Math.ceil(this.pending.at-Fi()));e.text("STARTING IN",gt/2,170,24,Pe,"center"),e.text(String(_),gt/2,206,64,Vt,"center");const v=this.routes[this.pending.go.route]??this.world.route;e.text(`${v.lines[0]} ${v.lines[1]}`,gt/2,284,16,Ht,"center");const E=this.pending.go;e.text(`TURBOS ${E.turbos}   WEAPONS ${E.weapons?`ON  AMMO ${E.ammo}`:"OFF"}`,gt/2,308,16,E.weapons?Oe:Vt,"center");return}r.some(_=>_.status==="race")?e.text("RACE IN PROGRESS - JOIN THE NEXT ONE",gt/2,386,8,Oe,"center"):r.length||e.text("SHARE THIS PAGE LINK TO INVITE PLAYERS",gt/2,386,8,Ht,"center");const x=(n==null?void 0:n.status)==="online";e.box(gt/2-150,410,300,50,x?1739322:2105392,x&&t?Vt:Ht),e.text(this.touch?"TAP TO START":"ENTER  START",gt/2,427,16,x?Ht:9079464,"center")}keyGuide(t,e){const n=this.hud,s=this.weaponsSetting;[[[["↑"],"GAS",di],[["SPACE"],"DRIFT",Pe]],[[["↓"],"BRAKE",ge],[["T"],"TURBO",Oe]],[[["←","→"],"STEER",Ht],[["F"],s?"FIRE":"FIRE (OFF)",s?ge:cn]],[[["ESC"],"PAUSE",cn],[["N"],"MUSIC",Ci]]].forEach((a,o)=>a.forEach(([c,l,h],u)=>{let d=t+u*168;for(const f of c)d+=n.keycap(d,e+o*22,f,18)+3;n.text(l,d+5,e+o*22+5,8,h)}))}buttonGuide(t,e){const n=this.hud,s=330,r=88,a=this.weaponsSetting;n.box(t,e,s,r,657946,3816026,1),n.text("STEER",t+45,e+r-50,8,Ht,"center"),n.chip(t+8,e+r-38,34,30,"←",Ht),n.chip(t+48,e+r-38,34,30,"→",Ht);const o=t+s-66,c=t+s-128;a&&n.chip(c,e+6,56,18,"FIRE",ge),n.chip(c,e+28,56,18,"DRIFT",Pe),n.chip(c,e+50,56,30,"BRAKE",ge),n.chip(o,e+24,58,20,"TURBO",Oe),n.chip(o,e+48,58,32,"GAS",di),n.text("MUSIC AUTO II",t+s-8,e+8,8,cn,"right"),n.text("AUTO GAS",t+140,e+30,8,di,"center"),n.text("IS ON",t+140,e+42,8,di,"center"),n.text("TAP AUTO",t+140,e+58,8,cn,"center"),n.text("TO TURN OFF",t+140,e+70,8,cn,"center")}countdownHelp(){const t=this.hud,e=this.weapons,n=318;if(this.touch){const c=[["STEER LEFT THUMB",Ht],["GAS",di],["BRAKE",ge],["DRIFT",Pe],["TURBO",Oe]];e&&c.push(["FIRE",ge]);const l=c.map(([d])=>d.length*8+16),h=l.reduce((d,f)=>d+f,0)+(c.length-1)*8;let u=gt/2-h/2;t.shade(u-8,n-6,h+16,34,.5),c.forEach(([d,f],g)=>{t.chip(u,n,l[g],22,d,f),u+=l[g]+8});return}const s=[[["↑"],"GAS",di],[["↓"],"BRAKE",ge],[["←","→"],"STEER",Ht],[["SPACE"],"DRIFT",Pe],[["T"],"TURBO",Oe]];e&&s.push([["F"],"FIRE",ge]);const r=c=>c[0].reduce((l,h)=>l+t.keyW(h,18)+3,0)+5+c[1].length*8,a=s.reduce((c,l)=>c+r(l),0)+(s.length-1)*18;let o=gt/2-a/2;t.shade(o-10,n-6,a+20,32,.5);for(const c of s){let l=o;for(const h of c[0])l+=t.keycap(l,n,h,18)+3;t.text(c[1],l+5,n+5,8,c[2]),o+=r(c)+18}}nameTags(){const t=this.hud;this.world.rivals.forEach((e,n)=>{const s=this.world.rivalScreenPos(n,this.camera,gt,ze);if(!s||s.dist>140)return;const r=Math.max(0,Math.min(1,(75-s.dist)/60)),a=Math.round(5+11*r);t.text(e.wrecked?`${e.name} WRECKED`:e.name,s.x,s.y-a,a,e.wrecked?ge:e.finished>=0?Vt:Ht,"center");const o=Math.round(14+50*r),c=Math.round(2+4*r),l=Math.min(1,1-e.hp/100),h=s.x-o/2,u=s.y+1+Math.round(3*r);t.rect(h-1,u-1,o+2,c+2,0),t.rect(h,u,o*l,c,Co(l))})}resultsTable(t){const e=this.hud,n=gt/2-330,s=660,r=96;e.box(n,r,s,330,1052720,this.place===1&&this.finishTime>=0?Vt:Ht,4);const a=this.finishTime<0?`${this.wrecked?"WRECKED":"TIME UP"}  -  DID NOT FINISH`:this.place===1?"YOU WIN!":`YOU FINISHED ${Kr(this.place)}`;e.text(a,gt/2,r+16,16,this.finishTime<0?ge:Vt,"center"),this.table.forEach((o,c)=>{const l=r+52+c*30;o.player&&e.rect(n+10,l-6,s-20,28,3811952);const h=o.player?Vt:Ht;e.text(Kr(o.pos),n+24,l,16,o.pos===1?Oe:h),e.text(o.name,n+110,l,16,h),e.text(o.car,n+230,l,16,o.player?Vt:Pe);const u=Number.isFinite(o.time)?(o.estimated?"~":" ")+Lh(o.time):"DNF";e.text(u,n+s-24,l,16,h,"right")}),t&&this.t>3.5&&e.text(this.touch?"TAP TO CONTINUE":"PRESS ENTER",gt/2,r+340,16,Vt,"center")}raceHud(t){const e=this.hud,n=this.world.route;e.text("SCORE",20,16,16,Vt),e.text(String(this.score).padStart(8,"0"),20,38,16,Ht),e.text("TIME",gt/2,12,16,Vt,"center");const s=Math.ceil(this.timeLeft),r=this.timeLeft<10&&this.state==="race";(!r||t)&&e.text(String(s).padStart(2,"0"),gt/2,34,48,r?ge:Oe,"center"),e.text(`STAGE ${Math.min(this.stage+1,n.stageNames.length)}`,gt-20,16,16,Vt,"right");const a=Math.max(0,(this.pos-3*jt)/1e3);if(e.text(`${a.toFixed(1)}KM`,gt-20,38,16,Ht,"right"),this.mode!=="arcade"&&this.world.rivals.length&&this.state==="race"){const E=Kr(this.place),w=this.touch?84:gt/2-52,T=this.touch?222:90;e.text("POS",w-12,T+8,16,Vt,"right"),e.text(E,w,T,32,this.place===1?Vt:Ht),e.text(`/${this.world.rivals.length+1}`,w+E.length*32+4,T+16,16,Ht)}{const T=this.touch?20:gt-20-170,C=this.touch?this.mode!=="arcade"?270:236:64,b=Math.min(1,1-this.hp/100),S=Co(b),D=this.hp<25&&this.state==="race";e.text("DAMAGE",T,C,16,D&&t?ge:Vt);const W=this.hp>=100?0:Math.max(1,Math.ceil(b*10));for(let B=0;B<10;B++)e.rect(T+B*17,C+22,15,12,B<W&&(!D||t)?S:2105408)}const o=Math.round(this.speed*Ro),c=this.touch,l=c?70:ze-92;e.text("SPEED",20,l,16,Vt),e.text(String(o).padStart(3," "),20,l+26,32,Ht),e.text("KM/H",130,l+42,16,Pe),c?e.tach(20,l+100,this.speed/this.vmax):e.tach(220,ze-24,this.speed/this.vmax);const h=c?20:220,u=c?l+112:ze-80;e.text("TURBO",h,u,16,this.turboT>0&&t?Ht:Oe);const d=this.raceTurbos,f=d>5?13:20,g=f+(d>5?4:6);for(let E=0;E<d;E++)e.box(h+92+E*g,u-2+(20-f)/2,f,f,E<this.turbos?Oe:2105392,E<this.turbos?Vt:4210776,d>5?2:3);if(this.turboT>0&&e.rect(h+92,u+22,this.turboT/Ic*(d*g-6),5,Vt),this.weapons){const E=c?20:gt-190,w=c?314:106;e.text("AMMO",E,w,16,this.ammo?Pe:ge),e.text(String(this.ammo).padStart(3,"0"),E+120,w,16,Ht);const T=Math.ceil(this.ammo/Math.max(1,this.raceAmmo)*30);for(let C=0;C<30;C++)e.rect(E+C*5.6,w+22,3,10,C<T?Vt:3158080);if(this.gunTarget!==null&&this.state==="race"){const C=this.world.rivalScreenPos(this.gunTarget,this.camera,gt,ze);if(C){const b=this.gunP>.6?ge:Vt,S=Math.max(10,Math.min(34,700/C.dist)),D=C.y+S*1.1;for(const[B,V]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.rect(C.x+B*S-(B>0?10:0),D+V*S-(V>0?3:0),10,3,b),e.rect(C.x+B*S-(B>0?3:0),D+V*S-(V>0?10:0),3,10,b);const W=this.world.rivals[this.gunTarget];if(!W.remote){const V=C.x-22,et=D+S+6,U=Math.min(1,1-W.hp/100);e.rect(V-1,et-1,46,7,0),e.rect(V,et,44*U,5,Co(U))}}}this.noTargetT>0&&e.text(this.ammo?"NO TARGET":"OUT OF AMMO",gt/2,124,16,this.ammo?Ht:ge,"center"),this.hitFlash>0&&(e.rect(0,0,gt,6,ge),e.rect(0,ze-6,gt,6,ge),e.rect(0,0,6,ze,ge),e.rect(gt-6,0,6,ze,ge))}const M=c?gt/2-120:gt-250,m=c?gt/2+120:gt-24,p=c?118:ze-34;e.text("COURSE",M,p-26,16,Vt),e.rect(M,p,m-M,8,2105408);const x=this.world.track.goalDist,_=this.world.track.stageStarts;for(const E of _)e.rect(M+E*jt/x*(m-M)-1,p-4,4,16,Ht);const v=Math.min(1,this.pos/x);e.rect(M,p,v*(m-M),8,Ci),e.rect(M+v*(m-M)-4,p-6,8,20,Vt),e.text(n.stageNames[Math.min(this.stage,n.stageNames.length-1)],m,p+14,8,Ht,"right")}}class W2{constructor(){this.down=new Set,this.pressed=new Set,this.taps=[],this.firstInput=[],this.autoGas=!1,window.addEventListener("keydown",t=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault(),this.down.has(t.code)||this.pressed.add(t.code),this.down.add(t.code),this.fireFirst()}),window.addEventListener("keyup",t=>this.down.delete(t.code)),window.addEventListener("blur",()=>this.down.clear())}onFirstInput(t){this.firstInput.push(t)}fireFirst(){const t=this.firstInput;this.firstInput=[],t.forEach(e=>e())}setVirtual(t,e){e?(this.down.has(t)||this.pressed.add(t),this.down.add(t)):this.down.delete(t)}tap(t,e){this.taps.push({x:t,y:e}),this.fireFirst()}held(...t){return t.some(e=>this.down.has(e))}hit(...t){return t.some(e=>this.pressed.has(e))}endFrame(){this.pressed.clear(),this.taps.length=0}get accel(){return this.held("KeyW","ArrowUp")||this.autoGas&&!this.brake}get brake(){return this.held("KeyS","ArrowDown")}get steer(){return(this.held("KeyD","ArrowRight")?1:0)-(this.held("KeyA","ArrowLeft")?1:0)}get drift(){return this.held("Space")}get confirm(){return this.hit("Enter","Space","NumpadEnter")}}class X2{constructor(t){this.done=null;const e=document.createElement("div");e.style.cssText='position:absolute;inset:0;display:none;align-items:center;justify-content:center;z-index:5;font-family:"Press Start 2P",monospace;';const n=document.createElement("form");n.style.cssText="display:flex;flex-direction:column;align-items:center;gap:2.4vmin;padding:4vmin 5vmin;background:rgba(16,16,48,0.92);border:0.7vmin solid #ffe040;box-shadow:0.8vmin 0.8vmin 0 #000;max-width:90%;";const s=document.createElement("div");s.textContent="ENTER YOUR NAME",s.style.cssText="color:#ffe040;font-size:3.6vmin;text-shadow:0.4vmin 0.4vmin 0 #000;";const r=document.createElement("input");r.maxLength=10,r.autocomplete="off",r.spellcheck=!1,r.setAttribute("autocapitalize","characters"),r.setAttribute("enterkeyhint","go"),r.style.cssText="font-family:inherit;font-size:4.4vmin;width:12ch;text-align:center;text-transform:uppercase;color:#fff;background:#0a0a20;border:0.5vmin solid #40f0ff;padding:1.4vmin;outline:none;";const a=document.createElement("button");a.type="submit",a.textContent="JOIN",a.style.cssText="font-family:inherit;font-size:3.6vmin;color:#fff;background:#1a5ab8;border:0.6vmin solid #fff;padding:1.6vmin 4vmin;box-shadow:0.6vmin 0.6vmin 0 #000;cursor:pointer;";const o=document.createElement("div");o.textContent="LETTERS, NUMBERS, SPACE OR -",o.style.cssText="color:#8a8aa8;font-size:1.8vmin;",n.append(s,r,a,o),e.append(n),t.append(e);for(const c of["keydown","keyup","mousedown","pointerdown","touchstart"])e.addEventListener(c,l=>l.stopPropagation());r.addEventListener("input",()=>{const c=r.value.toUpperCase().replace(/[^A-Z0-9 -]/g,"");c!==r.value&&(r.value=c)}),n.addEventListener("submit",c=>{var h;c.preventDefault();const l=Pc(r.value);if(!l){r.focus();return}this.hide(),(h=this.done)==null||h.call(this,l)}),this.root=e,this.input=r}get open(){return this.root.style.display!=="none"}show(t,e){this.done=e,this.input.value=t,this.root.style.display="flex",setTimeout(()=>{this.input.focus(),this.input.select()},50)}hide(){this.root.style.display="none",this.input.blur()}}class Ps{constructor(){this.group=new xn,this.layers=[],this.sun=null,this.tmp=new $}sunNdc(t){if(!this.sun)return null;this.sun.obj.updateMatrixWorld();const e=this.tmp.copy(this.sun.local);return this.sun.obj.localToWorld(e),e.project(t),e.z<1?e:null}addLayer(t,e){this.group.add(t),this.layers.push({obj:t,factor:e})}update(t,e){this.group.position.copy(t);for(const n of this.layers)n.obj.rotation.y=e*n.factor}}const un=(i={})=>new Je({vertexColors:!0,fog:!1,side:fe,...i}),Jh=(i,t)=>{const e=n=>Math.min(255,Math.round((i>>n&255)*t));return e(16)<<16|e(8)<<8|e(0)},q2=i=>{const t=e=>Math.round(Math.round(e/255*31)*8.225806451612904);return t(i>>16&255)<<16|t(i>>8&255)<<8|t(i&255)},Y2=(i,t,e)=>{const n=s=>Math.round((i>>s&255)+((t>>s&255)-(i>>s&255))*e);return n(16)<<16|n(8)<<8|n(0)};function Ls(i,t,e=.45){const s=document.createElement("canvas");s.width=2,s.height=2048;const r=s.getContext("2d"),a=f=>"#"+f.toString(16).padStart(6,"0");r.fillStyle=a(t),r.fillRect(0,0,2,2048);const o=f=>{if(f<=i[0][0])return i[0][1];for(let g=1;g<i.length;g++)if(f<=i[g][0])return Y2(i[g-1][1],i[g][1],(f-i[g-1][0])/(i[g][0]-i[g-1][0]));return i[i.length-1][1]},c=ie.modern,l=c?.09:e;for(let f=0;f<90;f+=l*(f<20||c?1:3)){const M=2048*(90-Math.min(90,f+l*(f<20||c?1:3)))/180,m=2048*(90-f)/180;r.fillStyle=a(c?o(f):q2(o(f))),r.fillRect(0,Math.floor(M),2,Math.ceil(m-M)+1)}const h=new fr(s);h.magFilter=c?hn:qe,h.minFilter=c?hn:qe,h.generateMipmaps=!1,h.colorSpace=ke;const u=new tl(2800,24,90),d=new ue(u,new Je({map:h,fog:!1,side:Qe,depthWrite:!1}));return d.renderOrder=-10,d}const qt=(i,t,e,n)=>[Math.sin(t)*i+Math.cos(t)*e,n,-Math.cos(t)*i+Math.sin(t)*e];function Nn(i,t,e,n,s,r,a=40,o=[6,18]){const c=new ut,l=240,h=new Float32Array(l+1);for(let u=0;u<a;u++){const d=i.next()*l,f=i.range(.3,1)*n,g=i.range(o[0],o[1]);for(let M=0;M<=l;M++){let m=Math.abs(M-d);m=Math.min(m,l-m),h[M]=Math.max(h[M],f*Math.max(0,1-m/g))}}for(let u=0;u<l;u++){const d=u/l*Math.PI*2,f=(u+1)/l*Math.PI*2,g=h[u]*s(d),M=h[u+1]*s(f);if(!(g<1&&M<1)){if(ie.modern){const m=x=>Jh(e,.86+.26*Math.min(1,x/n)),p=Jh(e,.78);c.quadC(qt(t,d,0,-60),qt(t,f,0,-60),qt(t,f,0,M),qt(t,d,0,g),[p,p,m(M),m(g)])}else c.quad(qt(t,d,0,-60),qt(t,f,0,-60),qt(t,f,0,M),qt(t,d,0,g),e);if(r!==void 0){const m=n*.72;g>m&&M>m&&c.quad(qt(t-1,d,0,g-(g-m)*.6),qt(t-1,f,0,M-(M-m)*.6),qt(t-1,f,0,M),qt(t-1,d,0,g),r)}}}return new ue(c.build(),un())}function $2(i,t,e,n,s,r=22){const a=new ut,o=360,c=new Float32Array(o+1);for(let l=0;l<r;l++){const h=i.next()*o,u=i.range(.35,1)*n,d=i.range(2,9),f=i.range(1.2,2.6);for(let g=0;g<=o;g++){let M=Math.abs(g-h);M=Math.min(M,o-M);const m=M<d?u:u*Math.max(0,1-(M-d)/f);c[g]=Math.max(c[g],m)}}for(let l=0;l<o;l++){const h=l/o*Math.PI*2,u=(l+1)/o*Math.PI*2,d=c[l]*s(h),f=c[l+1]*s(u);if(d<1&&f<1)continue;const g=e.length;let M=-60,m=-60;for(let p=0;p<g;p++){const x=(p+1)/g,_=p===g-1?d:d*x,v=p===g-1?f:f*x;a.quad(qt(t,h,0,M),qt(t,u,0,m),qt(t,u,0,v),qt(t,h,0,_),e[p]),M=_,m=v}}return new ue(a.build(),un())}function Ds(i,t,e=500){const n=new jc(i,i,e,32,1,!0);return n.translate(0,-e/2+.5,0),new ue(n,new Je({color:t,fog:!1,side:fe}))}function za(i,t,e){const n=Math.tan(e*Math.PI/180)*i,[s,r,a]=qt(i,t,0,n);return new $(s,r,a)}function Ns(i,t,e,n,s,r=20){const a=new ut,o=Math.tan(e*Math.PI/180)*i;if(ie.modern){const c=Math.max(r,40),l=[...s].sort((u,d)=>d[0]-u[0]),h=(u,d)=>qt(i,t,Math.cos(d)*n*u,o+Math.sin(d)*n*u);for(let u=0;u<l.length;u++){const[d,f]=l[u],[g,M]=u+1<l.length?l[u+1]:[0,l[u][1]];for(let m=0;m<c;m++){const p=m/c*Math.PI*2,x=(m+1)/c*Math.PI*2;a.quadC(h(d,p),h(d,x),h(g,x),h(g,p),[f,f,M,M])}}return new ue(a.build(),un())}for(const[c,l]of s){const h=[];for(let u=0;u<r;u++){const d=u/r*Math.PI*2;h.push(qt(i,t,Math.cos(d)*n*c,o+Math.sin(d)*n*c))}a.poly(h,l),i-=2}return new ue(a.build(),un())}function Vi(i,t,e,n,s=-Math.PI,r=Math.PI,a=[4,13]){const o=new ut,[c,l,h]=n,u=(d,f,g,M,m,p,x,_=0,v=Math.PI*2)=>{const E=[],w=ie.modern?24:12;for(let T=0;T<=w;T++){const C=_+(v-_)*T/w;E.push(qt(d,f,g+Math.cos(C)*m,M+Math.sin(C)*p))}o.poly(E,x)};for(let d=0;d<e;d++){const f=i.range(s,r),g=i.range(a[0],a[1]),M=Math.tan(g*Math.PI/180)*t,m=i.range(140,340),p=i.int(4,8),x=t-d*6;u(x,f,0,M,m*.9,16,h,Math.PI,Math.PI*2);for(let _=0;_<p;_++){const v=i.range(-m,m)*.65,E=i.range(0,34)*(1-Math.abs(v)/m),w=i.range(45,100),T=w*i.range(.5,.7),C=x-1-_*.3;u(C,f,v,M+E,w,T,l,0,Math.PI),u(C-.1,f,v-w*.15,M+E+T*.2,w*.7,T*.65,c,.2,Math.PI)}}return new ue(o.build(),un())}function Ba(i,t,e,n,s,r,a=.6,o=.25){const c=new ut,l=new ut,h=420;for(let d=0;d<h;d++){const f=d/h*Math.PI*2+i.range(-.004,.004),g=r(f);if(g<=0||!i.chance(a))continue;const M=i.range(14,40),m=i.range(.15,1)*s*g*(i.chance(.1)?1.4:1),p=t-i.range(0,60),x=i.pick(e);if(c.quad(qt(p,f,-M/2,-40),qt(p,f,M/2,-40),qt(p,f,M/2,m),qt(p,f,-M/2,m),x),i.chance(.25)){const _=M*.5;c.quad(qt(p,f,-_/2,m),qt(p,f,_/2,m),qt(p,f,_/2,m+m*.2),qt(p,f,-_/2,m+m*.2),x)}if(n.length){for(let _=6;_<m-4;_+=7)for(let v=-M/2+3;v<M/2-3;v+=5){if(!i.chance(o))continue;const E=i.pick(n);l.quad(qt(p-1,f,v,_),qt(p-1,f,v+2.6,_),qt(p-1,f,v+2.6,_+3.4),qt(p-1,f,v,_+3.4),E)}m>s*.6&&i.chance(.6)&&l.quad(qt(p-1,f,-1.5,m+1),qt(p-1,f,1.5,m+1),qt(p-1,f,1.5,m+4),qt(p-1,f,-1.5,m+4),16719904)}}const u=new xn;return u.add(new ue(c.build(),un())),l.empty||u.add(new ue(l.build(),un())),u}function au(i,t){const e=[],n=[],s=new Lt;for(let a=0;a<t;a++){const o=i.next()*Math.PI*2,c=i.range(12,75)*(Math.PI/180),l=2600;e.push(Math.sin(o)*Math.cos(c)*l,Math.sin(c)*l,-Math.cos(o)*Math.cos(c)*l),s.setHex(i.pick([16777215,13162751,16771264,10137855])),n.push(s.r,s.g,s.b)}const r=new Be;return r.setAttribute("position",new Me(e,3)),r.setAttribute("color",new Me(n,3)),new Mg(r,new B0({size:1,sizeAttenuation:!1,vertexColors:!0,fog:!1}))}function K2(i,t,e,n,s,r){const a=new ut,o=(c,l)=>qt(i,t,c,l);return a.poly([o(-n,-40),o(n,-40),o(n*.12,e),o(-n*.12,e)],s),a.poly([o(-n*.12,e),o(n*.12,e),o(n*.32,e*.62),o(n*.14,e*.7),o(0,e*.6),o(-n*.16,e*.68),o(-n*.32,e*.6)].map(c=>[c[0],c[1],c[2]]).reverse(),r),new ue(a.build(),un())}function ou(i,t,e,n,s){const r=new ut;for(let a=0;a<s;a++){const o=i.range(e,n),c=i.range(.8,1.4),l=t-a*4,h=(u,d)=>qt(l,o,u*c,d*c-1.5);i.chance(.6)?(r.poly([h(-34,0),h(30,0),h(36,7),h(-38,7)],3820138),r.poly([h(-26,7),h(14,7),h(14,11),h(-26,11)],i.pick([13130314,4885192,14196800])),r.poly([h(18,7),h(30,7),h(30,17),h(18,17)],15790320),r.poly([h(22,17),h(26,17),h(26,22),h(22,22)],2763306)):(r.poly([h(-16,0),h(16,0),h(20,4),h(-18,4)],16053492),r.poly([h(-8,4),h(10,4),h(8,8),h(-6,8)],14739696))}return new ue(r.build(),un())}function Z2(i,t){const e=new ut,n=new ut,s=(a,o)=>qt(i,t,a,o);e.poly([s(-90,-40),s(90,-40),s(60,6),s(20,14),s(-30,12),s(-70,2)],6978138);for(let a=0;a<6;a++){const o=12+a*9,c=o+9,l=7-a*.6,h=7-(a+1)*.6;e.poly([s(-l,o),s(l,o),s(h,c),s(-h,c)],a%2?14170682:16777215)}e.poly([s(-4.5,66),s(4.5,66),s(4.5,72),s(-4.5,72)],2763306),e.poly([s(-5,72),s(5,72),s(0,78)],14170682),n.poly([s(-3.5,67),s(3.5,67),s(3.5,71),s(-3.5,71)],16774320);const r=new xn;return r.add(new ue(e.build(),un()),new ue(n.build(),un())),r}function cu(i,t,e,n){const s=new ut;for(let r=0;r<70;r++){const a=-i.range(.5,26),o=n*(.25+-a/26*.75),c=i.range(-o,o),l=i.range(4,22)*(1- -a/40),h=i.pick([16774336,16769168,16777215,16763024]);s.quad(qt(t,e,c-l,a),qt(t,e,c+l,a),qt(t,e,c+l,a+.9),qt(t,e,c-l,a+.9),h)}return new ue(s.build(),un())}function j2(i,t,e){const n=new ut;for(let s=0;s<e;s++){const r=i.range(-Math.PI,Math.PI),a=Math.tan(i.range(8,22)*Math.PI/180)*t;for(const[o,c]of[[-3,16724016],[3,3211104],[0,16777215]])n.quad(qt(t,r,o-1.2,a-1.2),qt(t,r,o+1.2,a-1.2),qt(t,r,o+1.2,a+1.2),qt(t,r,o-1.2,a+1.2),c)}return new ue(n.build(),un())}function Wn(i){const t=i.len/2,e=i.yb??.3,n=i.belt??i.hood,s=i.tumble??.8;return[{z:-t,w:i.w*.96,yb:e,belt:i.nose-.05,top:i.nose,wt:i.w*.9,seg:"p"},{z:-t+.35,w:i.w,yb:e,belt:n-.04,top:i.hood-.02,wt:i.w*.94,seg:"p"},{z:i.ws,w:i.w,yb:e,belt:n,top:i.hood,wt:i.w*.92,seg:"ws"},{z:i.rf0,w:i.w,yb:e,belt:n,top:i.roof,wt:i.w*s,seg:"rf"},{z:i.rf1,w:i.w,yb:e,belt:n,top:i.roof,wt:i.w*s,seg:"rw"},{z:i.rw,w:i.w,yb:e,belt:n,top:i.deck,wt:i.w*.92,seg:"p"},{z:t,w:i.w,yb:e,belt:Math.min(n,i.tail-.04),top:i.tail,wt:i.w*.92,seg:"p"}]}const Tn=12589072,An=(i,t,e,n,s=.5,r=.3)=>{const a=e[e.length-1].z-e[0].z,o=Math.max(...e.map(c=>c.w));return{id:i,name:t,make:"",year:0,group:"TRAFFIC",paints:[16777215],stations:e,lights:n,wheels:{r,fz:e[0].z+a*.2,rz:e[0].z+a*.8,fx:o-.06,rx:o-.06,rim:10132122,spokes:4},exhaust:[],plateY:s,stats:{vmax:0,accel:0,grip:0}}},Us={golf:An("golf","VW GOLF MK2",Wn({len:4,w:.83,nose:.62,hood:.84,roof:1.4,deck:.98,tail:.98,ws:-.95,rf0:-.2,rf1:1.15,rw:1.85}),[{x:.6,y:.84,w:.34,h:.18,c:Tn}],.55),volvo240:An("volvo240","VOLVO 240 ESTATE",Wn({len:4.8,w:.86,nose:.7,hood:.86,roof:1.42,deck:1,tail:1,ws:-.8,rf0:0,rf1:2.22,rw:2.34}),[{x:.76,y:.86,w:.16,h:.42,c:Tn}],.6),ae86:An("ae86","TOYOTA AE86",Wn({len:4.2,w:.82,nose:.6,hood:.8,roof:1.32,deck:.94,tail:.94,ws:-.6,rf0:.1,rf1:.7,rw:1.95}),[{x:.52,y:.8,w:.56,h:.14,c:Tn}],.52),cherokee:An("cherokee","JEEP CHEROKEE XJ",Wn({len:4.24,w:.9,nose:.92,hood:1.06,roof:1.62,deck:1.22,tail:1.22,ws:-.9,rf0:-.35,rf1:1.96,rw:2.06,yb:.45}),[{x:.8,y:.98,w:.14,h:.36,c:Tn}],.7,.36),caprice:An("caprice","CHEVROLET CAPRICE",Wn({len:5.4,w:.95,nose:.78,hood:.92,roof:1.42,deck:1,tail:1,ws:-.7,rf0:0,rf1:1,rw:1.6}),[{x:.62,y:.86,w:.6,h:.16,c:Tn}],.6),w124:An("w124","MERCEDES W124",Wn({len:4.74,w:.87,nose:.7,hood:.86,roof:1.42,deck:1,tail:1.02,ws:-.65,rf0:.05,rf1:.95,rw:1.55}),[{x:.6,y:.88,w:.5,h:.2,c:Tn}],.62),f150:An("f150","FORD F-150",[{z:-2.5,w:.98,yb:.45,belt:.95,top:1.05,wt:.9,seg:"p"},{z:-2.1,w:1,yb:.45,belt:1.1,top:1.15,wt:.94,seg:"p"},{z:-.9,w:1,yb:.45,belt:1.15,top:1.2,wt:.94,seg:"ws"},{z:-.35,w:1,yb:.45,belt:1.15,top:1.8,wt:.86,seg:"rf"},{z:.6,w:1,yb:.45,belt:1.15,top:1.8,wt:.86,seg:"p"},{z:.62,w:1,yb:.45,belt:1.15,top:1.18,wt:.96,seg:"bed"},{z:2.5,w:1,yb:.45,belt:1.15,top:1.18,wt:.96,seg:"p"}],[{x:.9,y:.95,w:.12,h:.3,c:Tn}],.65,.38),crown:An("crown","TOYOTA CROWN",Wn({len:4.7,w:.85,nose:.74,hood:.88,roof:1.48,deck:1,tail:1.02,ws:-.6,rf0:.1,rf1:1.05,rw:1.5}),[{x:.64,y:.88,w:.4,h:.16,c:Tn}],.62),cedric:An("cedric","NISSAN CEDRIC",Wn({len:4.8,w:.86,nose:.72,hood:.86,roof:1.42,deck:.98,tail:1,ws:-.65,rf0:.05,rf1:1,rw:1.55}),[{x:.5,y:.86,w:.7,h:.12,c:Tn}],.6),every:An("every","SUZUKI EVERY",[{z:-1.7,w:.7,yb:.4,belt:.8,top:.9,wt:.66,seg:"p"},{z:-1.55,w:.7,yb:.4,belt:.9,top:1,wt:.66,seg:"ws"},{z:-1.05,w:.7,yb:.4,belt:1,top:1.82,wt:.62,seg:"rf"},{z:1.65,w:.7,yb:.4,belt:1,top:1.82,wt:.62,seg:"p"},{z:1.7,w:.7,yb:.4,belt:1,top:1.8,wt:.64,seg:"p"}],[{x:.6,y:.8,w:.14,h:.3,c:Tn}],.6,.27),civic:An("civic","HONDA CIVIC EF",Wn({len:4,w:.84,nose:.6,hood:.8,roof:1.32,deck:.96,tail:.96,ws:-.55,rf0:.2,rf1:1.2,rw:1.92}),[{x:.5,y:.8,w:.66,h:.12,c:Tn}],.5)};function Un(i,t={}){if(ie.modern)return J2(i,t);const e=J0(i,16777215,!0);x2(e.lit,i);const n=e.glow;if(t.taxi){const o=i.stations.find(c=>c.seg==="rf");n.box(0,o.top+.12,o.z+.4,.5,.22,.3,16769152)}const s=i.stations,a={parts:[{geo:e.lit.build(),mat:"lit"}],radius:0,max:40,len:(s[s.length-1].z-s[0].z)/2+2.2};return n.empty||a.parts.push({geo:n.build(),mat:"glow"}),t.night&&a.parts.push({geo:sl(i,.8).build(),mat:"halo",tint:!1}),a}function J2(i,t){const e=Y0(i,16777215,!0),n=e.cabin;for(const o of e.wheels)for(const c of[-1,1])n.with(new Nt().makeTranslation(c*o.x,o.r,o.z),()=>$0(n,o.r,o.hw,c,"steel",12106948,8,!1));const s=e.glow;if(t.taxi){const o=i.stations.find(c=>c.seg==="rf");s.box(0,o.top+.12,o.z+.4,.5,.22,.3,16769152)}const r=i.stations,a={parts:[{geo:j0(i),mat:"shadow",tint:!1,order:-1},{geo:e.skin.build(!0),mat:"car",tint:!0},{geo:e.body.build(),mat:"car",tint:!0},{geo:n.build(),mat:"car",tint:!1},{geo:s.build(),mat:"carGlow",tint:!1},{geo:e.glass.build(),mat:"glass",tint:!1}],radius:0,max:40,len:(r[r.length-1].z-r[0].z)/2+2.2};return t.night&&a.parts.push({geo:sl(i,.8).build(),mat:"halo",tint:!1}),a}class Os{constructor(){this.defs=[]}add(t){return this.defs.push(t),this.defs.length-1}}const Yn=[16756936,11069695,16773280,12124120,16765096,14731519,16777215],Qh=[16047256,15519880],Po=[1616092,1351892],Q2=[6605900,5815364],t0=[5026876,4367414],Js=[14734532,13945016],Lo=12576482,Qs={road:[10921646,9868958],line:16777215,edge:16777215,rumble:[16722474,16777215]},tx=[16777215,14743807],ex=[5430488,4641490],nx={id:"miami",name:"MIAMI BEACH",lines:["MIAMI","BEACH"],night:!1,hemi:[10542335,14205072],plate:16769088,smoke:16777215,card:[1727160,16771232],music:"miami",stageNames:["OCEAN DRIVE","PASTEL BOULEVARD","BAYSIDE CAUSEWAY","COCONUT HILLS","SUNSET POINT"],fog:{color:Lo,near:160,far:1150},ambient:{color:16777215,intensity:1.9},sun:{color:16773852,intensity:2.4,dir:[-.5,1,.8]},startTime:60,extendTime:40,shadow:6052966,trafficColors:[16734810,5943551,16769114,16777215,6348960,16751312,16752704],trafficCount:16,walls:!1,offroadLimit:Z+26,build(i){const t=new Jn(1986),e=[pe(Qs,[{w:4,c:Js},{w:600,c:Q2}],[{w:6,c:Qh},{w:28,abs:.4,c:Qh},{w:3,abs:.12,c:tx},{w:16,abs:0,c:ex},{w:600,abs:0,c:Po}]),pe(Qs,[{w:6,c:Js},{w:600,c:[7393880,6735440]}],[{w:6,c:Js},{w:600,c:[7393880,6735440]}]),pe(Qs,[{w:1,c:Js},{w:0,dy:.9,c:[16777215,15790320]},{w:.6,c:[16777215,16777215]},{w:0,abs:0,c:[13684944,12632256]},{w:600,abs:0,c:Po}],[{w:1,c:Js},{w:0,dy:.9,c:[16777215,15790320]},{w:.6,c:[16777215,16777215]},{w:0,abs:0,c:[13684944,12632256]},{w:600,abs:0,c:Po}]),pe(Qs,[{w:3,c:[14207120,13417604]},{w:600,c:t0}],[{w:3,c:[14207120,13417604]},{w:600,c:t0}]),pe(Qs,[{w:1.2,dy:.3,c:[11579576,11053232]},{w:0,dy:5,c:[15261896,14209208]},{w:0,dy:.8,c:[16765024,7368832]},{w:1.5,dy:2.8,c:[13156520,12367004]}],[{w:1.2,dy:.3,c:[11579576,11053232]},{w:0,dy:5,c:[15261896,14209208]},{w:0,dy:.8,c:[16765024,7368832]},{w:1.5,dy:2.8,c:[13156520,12367004]}],[5789800,5263454])],n=(ht,Pt)=>Pt?4:ht==="city"?1:ht==="causeway"?2:ht==="hills"?3:0,s=new Cs(n,3);s.zone="beach",s.straight(30),s.stageFrom({zone:"beach",length:400,curvy:.75,hilly:.1,yMin:2.5,yMax:6},t),s.stageFrom({zone:"city",length:400,curvy:.8,hilly:.25,yMin:3,yMax:14},t),s.stageFrom({zone:"causeway",length:380,curvy:.6,hilly:.1,yMin:3,yMax:5},t),s.stageFrom({zone:"hills",length:420,curvy:1,hilly:1,yMin:4,yMax:70,tunnels:.15,tunnelZone:"hills"},t),s.stageFrom({zone:"beach2",length:420,curvy:.7,hilly:.15,yMin:2.5,yMax:6},t);const r=s.finish(260),a=new Os,o=a.add(rl()),c=a.add(S2()),l=a.add(Q0()),h=a.add(al()),u=[a.add(To([16724032,16777215])),a.add(To([2781439,16769088])),a.add(To([2146464,16744624]))],d=a.add(w2()),f=[0,1,2].map(ht=>a.add(ol(ht,t))),g=a.add(Is(8,16774336)),M=a.add(ka()),m=a.add(b2()),p=a.add(E2()),x=[{bg:16734858,fg:16777215,text:"SUNSET",sub:"COLA",border:16777215},{bg:2788095,fg:16777215,text:"SURF",sub:"SHOP",border:16769088},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:16777215,fg:1735384,text:"BEACH",sub:"CLUB 86",border:16734858},{bg:2142352,fg:16777215,text:"PALM",sub:"RESORT",border:16777215},{bg:16747040,fg:16777215,text:"MANGO",sub:"JUICE",border:16777215}].map(ht=>a.add(mr(i.add(ht,2,2),9,4.5))),_=[{bg:16777215,fg:16726634,text:"DINER"},{bg:1710650,fg:4251903,text:"DISCO"},{bg:16777215,fg:2783960,text:"MOTEL"},{bg:16734858,fg:16777215,text:"ICE CREAM"}].map(ht=>a.add(tu(i.add(ht,2,1)))),v=[{bg:1735226,fg:16777215,text:"MIAMI",sub:"BEACH 12",border:16777215},{bg:1735226,fg:16777215,text:"KEYS",sub:"NEXT EXIT",border:16777215},{bg:1727152,fg:16777215,text:"ROUTE",sub:"A1A",border:16777215}].map(ht=>a.add(Fa(i.add(ht,1,1)))),E=a.add(Ee(i.add({bg:16777215,fg:14690858,text:"START",stripes:1710618},4,1))),w=a.add(Ee(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),15790320,1727200)),T=a.add(Ee(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),15790320,1710618)),C=Us,b=[C.golf,C.volvo240,C.ae86,C.cherokee,C.caprice,C.w124,C.f150].map(ht=>a.add(Un(ht))).concat([a.add(_i(2788095)),a.add(Gi(16734858))]),S=a.add(Mn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),D=a.add(Mn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),W=a.add(eu()),B=a.add(cl()),V=a.add(nu()),et=a.add(T2()),U=a.add(iu()),rt=[{bg:16734858,fg:16777215,text:"WELCOME TO MIAMI",border:16777215},{bg:1731296,fg:16769088,text:"SUNSET POINT",border:16777215}].map((ht,Pt)=>a.add(Ee(i.add(ht,4,1),16777215,Pt?16747040:2146480,16777215))),k=a.add(Mi(!0)),tt=a.add(Mi(!1)),J=Array.from({length:16},(ht,Pt)=>a.add(ll(i.add({bg:1735226,fg:16777215,text:String(Pt+1),border:16777215},1,1)))),at=[a.add(Hi(0)),a.add(Hi(1))],j=a.add(su(t)),Tt=a.add(C2()),K=[16730730,2789631,16769088,16777215,4247712,16751152,12607743],ft=[16726618,16769088,2789631,4251808,16777215,16747040],yt=r.segs;for(let ht=10;ht<yt.length;ht++){const Pt=yt[ht],dt=Pt.props;if(Pt.tunnel){yt[ht-1].tunnel||dt.push({t:p,x:0});continue}const Zt=Pt.zone;if(ie.modern){const N=Zt==="beach"||Zt==="beach2";ht%3===0&&(Zt==="hills"||N)&&dt.push({t:k,x:Z+2.1},{t:tt,x:-13.1}),ht%167===100&&dt.push({t:J[Math.min(J.length-1,Math.floor(ht*6/1e3))],x:Z+3.4,r:-.3}),N&&(ht%5===0&&t.chance(.55)&&dt.push({t:at[1],x:Z+t.range(9,26),r:t.range(0,6),tint:t.pick(K)}),ht%4===1&&t.chance(.35)&&dt.push({t:at[0],x:-(Z+t.range(1.5,3.5)),r:t.range(0,6),tint:t.pick(K)}),ht%40===10&&dt.push({t:j,x:Z+t.range(15,60),y:t.range(16,28),r:t.range(0,6)}),Zt==="beach2"&&ht%26===13&&t.chance(.7)&&dt.push({t:Tt,x:Z+t.range(18,22),r:-.3+t.range(-.2,.2),tint:t.pick(K)})),Zt==="city"&&ht%5===2&&t.chance(.45)&&dt.push({t:at[0],x:t.sign()*(Z+t.range(2.5,5.5)),r:t.range(0,6),tint:t.pick(K)})}Math.abs(Pt.curve)>.0016&&ht%5===0&&Zt!=="causeway"&&dt.push(Pt.curve>0?{t:S,x:-16.5,r:.15}:{t:D,x:Z+5.5,r:-.15}),(Zt==="beach"||Zt==="beach2"||Zt==="causeway")&&ht%23===0&&t.chance(.6)&&dt.push({t:U,x:(Zt==="causeway"?t.sign():1)*t.range(70,280),y:0,abs:!0,s:t.range(.9,1.4),r:t.range(-.6,.6)}),Zt==="beach"||Zt==="beach2"?(ht%19===4&&t.chance(.5)&&dt.push({t:et,x:Z+t.range(10,18),r:t.range(-.5,.5)}),ht%7===0&&t.chance(.85)&&dt.push({t:o,x:Z+t.range(4.5,7),s:t.range(.9,1.3),r:t.range(0,6)}),ht%7===3&&t.chance(.5)&&dt.push({t:o,x:-(Z+t.range(5,9)),s:t.range(.9,1.3),r:t.range(0,6)}),ht%9===0&&t.chance(Zt==="beach2"?.75:.45)&&(dt.push({t:t.pick(u),x:Z+t.range(14,26),r:t.range(0,6)}),t.chance(.5)&&dt.push({t:t.pick(u),x:Z+t.range(14,26),r:t.range(0,6)})),Zt==="beach2"&&ht%70===35&&dt.push({t:d,x:Z+22,r:-.6}),ht%55===20&&dt.push({t:t.pick(f),x:-(Z+t.range(40,70)),tint:t.pick(Yn),r:t.range(-.3,.3)}),ht%80===50&&dt.push({t:t.pick(x),x:-23,r:.35}),ht%37===0&&t.chance(.5)&&dt.push({t:h,x:Z+t.range(24,32),s:t.range(.6,1.2),r:t.range(0,6)}),ht%120===60&&dt.push({t:t.pick(v),x:Z+3,r:-.2})):Zt==="city"?(ht%30>3&&dt.push({t:W,x:Z+9.5},{t:W,x:-20.5}),ht%16===12&&dt.push({t:B,x:Z+4.5,tint:t.pick(ft)},{t:B,x:-15.5,r:Math.PI,tint:t.pick(ft)}),ht%14===0&&t.chance(.75)&&dt.push({t:t.pick(_),x:-(Z+t.range(15,18)),tint:t.pick(Yn),r:.5}),ht%14===7&&t.chance(.75)&&dt.push({t:t.pick(_),x:Z+t.range(15,18),tint:t.pick(Yn),r:-.5}),ht%8===0&&dt.push({t:g,x:Z+3,r:0},{t:g,x:-14,r:Math.PI}),ht%8===4&&(dt.push({t:o,x:Z+6.5,s:t.range(.9,1.2),r:t.range(0,6)}),dt.push({t:o,x:-17.5,s:t.range(.9,1.2),r:t.range(0,6)})),ht%40===20&&dt.push({t:t.pick(x),x:(ht%80===20?-1:1)*(Z+11),r:ht%80===20?.35:-.35}),ht%30===15&&dt.push({t:t.pick(f),x:t.sign()*(Z+t.range(50,80)),tint:t.pick(Yn),r:t.range(-.3,.3)})):Zt==="causeway"?(ht%10===0&&dt.push({t:g,x:Z+2.4,r:0}),ht%10===5&&dt.push({t:g,x:-13.4,r:Math.PI}),ht%45===0&&t.chance(.8)&&dt.push({t:m,x:t.sign()*t.range(70,160),y:0,abs:!0,s:t.range(.8,1.4),r:t.range(0,6)}),ht%150===75&&dt.push({t:t.pick(v),x:Z+4,r:-.2})):Zt==="hills"&&(Math.abs(Pt.curve)>.0012&&(dt.push({t:M,x:Z+2.4}),dt.push({t:M,x:-13.4})),ht%4===2&&t.chance(.5)&&dt.push({t:V,x:t.sign()*(Z+t.range(8,50)),s:t.range(.8,1.5),r:t.range(0,6)}),ht%5===0&&t.chance(.6)&&dt.push({t:c,x:t.sign()*(Z+t.range(8,40)),s:t.range(.8,1.4),r:t.range(0,6)}),ht%11===0&&t.chance(.5)&&dt.push({t:l,x:t.sign()*(Z+t.range(5,12)),s:t.range(.7,1.2),r:t.range(0,6)}),ht%23===0&&t.chance(.6)&&dt.push({t:h,x:t.sign()*(Z+t.range(9,30)),s:t.range(.8,1.8),r:t.range(0,6)}),ht%90===45&&dt.push({t:t.pick(x),x:Z+12,r:-.35}))}for(let ht=1;ht<r.stageStarts.length;ht++)yt[r.stageStarts[ht]+4].props.push({t:w,x:0});yt[8].props.push({t:E,x:0}),yt[r.stageStarts[1]+160].props.push({t:rt[0],x:0}),yt[r.stageStarts[4]+200].props.push({t:rt[1],x:0}),yt[r.goalSeg].props.push({t:T,x:0});const lt=new Ps;lt.addLayer(Ls([[0,16773304],[1.4,16765072],[3,16754820],[4.6,16750240],[6.5,16165068],[8.5,13813486],[11,10672886],[15,7260918],[20,4633330],[28,2791146],[40,1736416],[90,941768]],Lo),0);const Dt=ht=>Math.atan2(Math.sin(ht),Math.cos(ht)),zt=Ns(2500,.25,2.6,300,[[1.45,16762020],[1.22,16754820],[1,16747066],[.84,16755268],[.68,16763992],[.5,16771200],[.3,16775368]],24);return lt.addLayer(zt,1),lt.sun={obj:zt,local:za(2500,.25,2.6)},lt.addLayer(Vi(t,2320,7,[16769216,16758944,15239336],-.5,1.2,[1.2,3.2]),.9),lt.addLayer(Vi(t,2350,14,[16777215,16771312,16033992]),.8),lt.addLayer(Nn(t,2200,8030928,230,ht=>{const Pt=Dt(ht);return Pt<-.25?1:Pt>1.6?.8:0},15265535,46),1),lt.addLayer(Nn(t,2050,5939360,110,ht=>{const Pt=Dt(ht);return Pt<-.15||Pt>1.9?1:0},void 0,50),1),lt.addLayer(Nn(t,1980,3050072,55,ht=>{const Pt=Dt(ht);return Pt<-.35||Pt>2.1?1:0},void 0,260,[1.2,3.5]),1),lt.addLayer(Ba(t,2e3,[11057368,10004684,12109024,14207192],[8034504,15266047,9087192],150,ht=>{const Pt=Dt(ht);return Pt>.7&&Pt<1.3?1:0},.9,.35),1),ie.modern&&(lt.addLayer(ou(t,1880,.35,1.5,5),1),lt.addLayer(Z2(1860,1.55),1),lt.addLayer(cu(t,1880,.25,140),1)),lt.addLayer(Ds(1900,Lo),0),{track:r,profiles:e,props:a.defs,backdrop:lt,trafficTypes:b,gateType:T}}},Do=2890832,Uc=[16771232,16774872,16765040,10547455,16777215],No={road:[4868698,3947594],line:15790320,edge:15790320,rumble:[5921384,5263452],rumbleW:1.4},la=i=>[{w:0,dy:1.3,c:[12369096,11053238]},{w:.5,c:[14474468,13684952]},{w:0,abs:0,c:[3816018,3816018]},{w:600,abs:0,c:i}];function ix(i,t,e,n){const s=new ut,r=new ut,a=i.pick([1843780,2235456,1583680,2500160]);if(ie.modern){const h=new ut,u=pr(n<30?be.APARTMENT:i.pick([be.OFFICE_WARM,be.OFFICE_COOL,be.OFFICE_DARK,be.OFFICE_WARM])),d=n<30?[12,12]:[16,16];if(h.facadeBox(0,n/2,0,t,n,e,u,d[0],d[1],[16777215,12106968],2764360,i.range(0,1)),n>45&&i.chance(.6)){const f=t*.65,g=e*.65,M=i.range(6,14);h.facadeBox(0,n+M/2,0,f,M,g,u,d[0],d[1],[14474480,10527940],2764360,i.range(0,1)),i.chance(.5)&&r.box(0,n+M+.3,0,f+.2,.5,g+.2,i.pick([4255999,16726666,16777215])),n+=M}for(let f=0;f<3;f++)s.box(i.range(-t/4,t/4),n+.8,i.range(-e/4,e/4),2.6,1.6,2,[3817048,4869736]);return n>40&&(s.box(t/5,n+6,0,.35,12,.35,6975112),r.box(t/5,n+12.3,0,1,1,1,16719904)),{parts:[{geo:h.build(),mat:"facadeLit"},{geo:s.build(),mat:"lit"},{geo:r.build(),mat:"glow"}],radius:0,max:60}}s.box(0,n/2,0,t,n,e,[a,2764370]),i.chance(.5)&&s.box(0,n+2,0,t*.6,4,e*.6,a);const o=i.int(0,2),c=i.range(.12,.35),l=[[0,1,t,e/2],[0,-1,t,e/2],[1,1,e,t/2],[1,-1,e,t/2]];for(const[h,u,d,f]of l)for(let g=4;g<n-3;g+=3.6){if(o===1&&i.chance(.15)){const M=i.pick(Uc),m=f+.06;h===0?r.quad([-d/2+1,g,u*m],[d/2-1,g,u*m],[d/2-1,g+1.8,u*m],[-d/2+1,g+1.8,u*m],M):r.quad([u*m,g,-d/2+1],[u*m,g,d/2-1],[u*m,g+1.8,d/2-1],[u*m,g+1.8,-d/2+1],M);continue}for(let M=-d/2+1.5;M<d/2-1.5;M+=3){if(!i.chance(c))continue;const m=i.pick(Uc),p=f+.06;h===0?r.quad([M,g,u*p],[M+1.5,g,u*p],[M+1.5,g+1.8,u*p],[M,g+1.8,u*p],m):r.quad([u*p,g,M],[u*p,g,M+1.5],[u*p,g+1.8,M+1.5],[u*p,g+1.8,M],m)}}return n>70&&r.box(0,n+4.6,0,1.2,1.2,1.2,16719904),{parts:[{geo:s.build(),mat:"lit"},{geo:r.build(),mat:"glow"}],radius:0,max:60}}function sx(i,t,e){const n=new ut,s=new ut,r=new ut;return n.box(0,e/2,-.4,1.2,e,1.2,2105392),s.quad([-1.6,e,.25],[1.6,e,.25],[1.6,e+12,.25],[-1.6,e+12,.25],16777215,i),r.box(0,e+6,0,3.8,12.6,.4,t),{parts:[{geo:n.build(),mat:"lit"},{geo:r.build(),mat:"glow"},{geo:s.build(),mat:"sign"}],radius:0,max:50}}function rx(i,t){const e=new ut,n=new ut,s=new ut;return e.box(-6,2,0,.6,4,.6,3158080),e.box(6,2,0,.6,4,.6,3158080),s.box(0,8,-.1,19,8,.3,t),n.quad([-9,4.4,.1],[9,4.4,.1],[9,11.6,.1],[-9,11.6,.1],16777215,i),{parts:[{geo:e.build(),mat:"lit"},{geo:s.build(),mat:"glow"},{geo:n.build(),mat:"sign"}],radius:0,max:40}}function ax(i,t){const e=new ut,n=new ut,s=Z+1.2;return e.box(-s,4.5,0,.6,9,.6,9079448),e.box(s,4.5,0,.6,9,.6,9079448),e.box(0,8.6,-.3,s*2,.5,.5,9079448),e.box(-5.5,10,-.15,9.4,4.2,.2,940586),e.box(5.5,10,-.15,9.4,4.2,.2,940586),n.quad([-10,8,0],[-1,8,0],[-1,12,0],[-10,12,0],16777215,i),n.quad([1,8,0],[10,8,0],[10,12,0],[1,12,0],16777215,t),{parts:[{geo:e.build(),mat:"lit"},{geo:n.build(),mat:"sign"}],radius:0,max:6}}function ox(){const i=new ut,t=new ut,e=56,n=-70;for(const s of[-Z-3,Z+3])i.box(s,(e+n)/2,0,2.4,e-n,2.4,[14212328,16777215]),t.box(s,e+.8,0,1.2,1.2,1.2,16719904);for(const s of[14,36,e-2])i.box(0,s,0,(Z+3)*2,2.2,2,14212328);for(const s of[-Z-3,Z+3])for(const r of[-1,1])for(let a=1;a<=16;a++){const o=a/16,c=r*o*64,l=e-(e-4)*(1-(1-o)*(1-o));t.box(s,l,c,.6,.6,.6,a%2?16777215:8446207)}return{parts:[{geo:i.build(),mat:"lit"},{geo:t.build(),mat:"glow"}],radius:0,max:8}}const cx={id:"tokyo",name:"TOKYO NIGHT HIGHWAY",lines:["TOKYO NIGHT","HIGHWAY"],night:!0,hemi:[9072864,2760768],plate:15790312,smoke:12105936,card:[2363466,16738992],music:"tokyo",stageNames:["SHUTOKO LOOP","NEON DISTRICT","UNDERGROUND","BAY BRIDGE","WANGAN LINE"],fog:{color:Do,near:140,far:1150},ambient:{color:12895487,intensity:1.8},sun:{color:16761048,intensity:1.6,dir:[-.4,1,.9]},startTime:60,extendTime:40,shadow:2236972,trafficColors:[16777215,14692400,4235519,3199136,16752688,13656319,10132136],trafficCount:18,walls:!0,offroadLimit:Z+1,build(i){var tt,J;const t=new Jn(1985),e=[pe(No,la([1711160,1447983]),la([1711160,1447983])),pe(No,la([924744,792638]),la([924744,792638])),pe(No,[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[3420716,3025960])],n=(at,j)=>j?2:at==="bay"?1:0,s=new Cs(n,26);s.zone="city",s.straight(30),s.stageFrom({zone:"city",length:400,curvy:.85,hilly:.4,yMin:22,yMax:40},t),s.stageFrom({zone:"neon",length:400,curvy:.8,hilly:.3,yMin:22,yMax:34,tunnels:.12},t),s.stageFrom({zone:"under",length:420,curvy:.7,hilly:.4,yMin:18,yMax:34,tunnels:.4},t),s.stageFrom({zone:"bay",length:420,curvy:.45,hilly:1,yMin:26,yMax:64},t),s.stageFrom({zone:"wangan",length:420,curvy:.45,hilly:.2,yMin:22,yMax:30},t);const r=s.finish(260),a=new Os,o=[],l=(ie.modern?[[5,12,26],[5,32,64],[5,70,140]]:[[8,40,130]]).map(([at,j,Tt])=>{const K=[];for(let ft=0;ft<at;ft++){const yt=t.range(18,34),lt=t.range(18,30),Dt=t.range(j,Tt),zt={t:a.add(ix(t,yt,lt,Dt)),h:Dt,w:Math.max(yt,lt)};K.push(zt),o.push(zt)}return K}),h=a.add(Is(10,16760928,9079448,4,!0)),u=[16726666,4255999,16769088,16732208,8453984,12607743],f=["ホテル","カラオケ","ラーメン","喫茶店","電気街","寿司","ゲーム","居酒屋"].map((at,j)=>{const Tt=u[j%u.length],K={bg:1052700,fg:Tt,text:at,vertical:!0,jp:!0,border:Tt};return a.add(sx(i.add(K,1,4),Tt,t.range(26,36)))}),M=[{bg:1052700,fg:16726666,text:"TURBO",sub:"GAME CENTER",border:16726666},{bg:1052700,fg:4255999,text:"東京",jp:!0,border:4255999},{bg:14690858,fg:16777215,text:"NEO",sub:"ELECTRONICS",border:16777215},{bg:1052700,fg:16769088,text:"ネオン",jp:!0,border:16769088},{bg:1720512,fg:16777215,text:"SKY",sub:"HOTEL",border:4255999},{bg:1052700,fg:8453984,text:"カメラ",jp:!0,border:8453984}].map((at,j)=>a.add(rx(i.add(at,2,1),u[j%u.length]))),p=[[{bg:940586,fg:16777215,text:"新宿",sub:"SHINJUKU",jp:!0},{bg:940586,fg:16777215,text:"銀座",sub:"GINZA",jp:!0}],[{bg:940586,fg:16777215,text:"渋谷",sub:"SHIBUYA",jp:!0},{bg:940586,fg:16777215,text:"羽田",sub:"HANEDA",jp:!0}],[{bg:940586,fg:16777215,text:"湾岸線",sub:"WANGAN",jp:!0},{bg:940586,fg:16777215,text:"横浜",sub:"YOKOHAMA",jp:!0}]].map(([at,j])=>a.add(ax(i.add(at,2,1),i.add(j,2,1)))),x=a.add(ox()),_=a.add(gr(6974072,16752688,7.9)),v=a.add(Ee(i.add({bg:1052700,fg:4255999,text:"START",border:4255999},4,1),10132136,16726666,4255999)),E=a.add(Ee(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),10132136,1727200,16769088)),w=a.add(Ee(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),10132136,1710618,16726666)),T=Us,C=[T.cedric,T.every,T.civic,T.ae86,T.crown].map(at=>a.add(Un(at,{night:!0}))).concat([a.add(Un(T.crown,{taxi:!0,night:!0})),a.add(Un(T.crown,{taxi:!0,night:!0})),a.add(_i(14690858)),a.add(_i(1739322)),a.add(Gi(2787930))]),b=a.add(ru(16756784)),S=a.add(I2(i.add({bg:16747040,fg:1710618,text:"非常電話",jp:!0},1,1))),D=a.add(P2(8.2)),W=a.add(Mn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1),.3)),B=a.add(Mn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1),.3)),V=a.add(A2(2788e3)),et=[0,1,2].map(()=>a.add(R2(t))),U=r.segs,rt=(at,j,Tt)=>{const K=U[at].props;for(const ft of[-1,1]){if(!t.chance(j))continue;const yt=t.range(0,240),lt=ie.modern?t.pick(l[yt<70?0:yt<140?1:2]):t.pick(o),Dt=ie.modern?t.range(.9,1.15):t.range(.85,1.25),zt=ft*(Z+Tt+lt.w*Dt*.5+yt),ht=ie.modern?t.range(.92,1.1):yt<70?t.range(.25,.45):yt<140?t.range(.5,.9):t.range(.8,1.5);K.push({t:lt.t,x:zt,y:0,abs:!0,s:Dt,sy:ht,r:t.range(-.2,.2),tint:t.pick([16777215,14209279,13164799])}),yt<140&&t.chance(.4)&&K.push({t:t.pick(M),x:zt-ft*lt.w*Dt*.2,y:lt.h*Dt*ht,abs:!0,r:ft*-.4})}};for(let at=10;at<U.length;at++){const j=U[at],Tt=j.props;if(j.tunnel){U[at-1].tunnel||Tt.push({t:_,x:0}),ie.modern&&at%22===0&&Tt.push({t:D,x:0});continue}const K=j.zone;if(ie.modern&&(at%2===0&&Tt.push({t:b,x:Z+1.65,y:1.3},{t:b,x:-12.65,y:1.3}),at%140===70&&Tt.push({t:S,x:Z+.9,r:-Math.PI/2})),Math.abs(j.curve)>.0016&&at%4===0&&Tt.push(j.curve>0?{t:W,x:-12.95,r:.1}:{t:B,x:Z+1.95,r:-.1}),K!=="bay"&&at%3===0&&Tt.push({t:t.pick(et),x:t.sign()*(Z+t.range(40,330)),y:0,abs:!0,r:t.range(0,6)}),K!=="bay"&&at%130===90&&!((tt=U[at+2])!=null&&tt.tunnel)&&!((J=U[at-2])!=null&&J.tunnel)&&Tt.push({t:V,x:0,y:-0}),at%7===0&&Tt.push({t:h,x:Z+2.6,y:1.3,r:0}),at%7===3&&Tt.push({t:h,x:-13.6,y:1.3,r:Math.PI}),K==="bay"){at%75===30&&Tt.push({t:x,x:0}),at%9===0&&rt(at,.08,260);continue}rt(at,K==="wangan"?.12:K==="under"?.22:.3,18),(K==="neon"||K==="city")&&at%4===0&&t.chance(K==="neon"?.55:.2)&&Tt.push({t:t.pick(f),x:t.sign()*(Z+t.range(10,22)),y:0,abs:!0,r:t.range(-.5,.5)}),at%110===55&&Tt.push({t:t.pick(p),x:0})}for(let at=1;at<r.stageStarts.length;at++)U[r.stageStarts[at]+4].props.push({t:E,x:0});U[8].props.push({t:v,x:0}),U[r.goalSeg].props.push({t:w,x:0});const k=new Ps;return k.addLayer(Ls([[0,16754784],[1.2,15891058],[2.6,13785734],[4.2,10503308],[6.2,7221378],[9,4858994],[13,3284066],[19,2234450],[30,1314880],[90,394782]],Do),0),k.addLayer(Vi(t,2380,9,[5913216,3942498,12606088],-Math.PI,Math.PI,[5,14]),.7),k.addLayer(au(t,260),.3),k.addLayer(Ns(2500,-.45,16,70,[[1.6,5917322],[1.3,9075370],[1,16774352],[.8,16777192]],16),1),k.addLayer(K2(2300,.55,190,520,3811946,14209264),1),k.addLayer(Ba(t,2100,[1710136,2103872,1316410],Uc,170,()=>1,.75,.22),1),ie.modern&&k.addLayer(j2(t,2300,6),.4),k.addLayer(Ds(1950,Do),0),{track:r,profiles:e,props:a.defs,backdrop:k,trafficTypes:C,gateType:w}}},tn=(i,t,e)=>{const n=[{geo:i.build(),mat:"lit"}];return t&&!t.empty&&n.push({geo:t.build(),mat:"glow"}),e&&!e.empty&&n.push({geo:e.build(),mat:"sign"}),n},ar=(i,t)=>new Lt(i).multiplyScalar(t).getHex();function lu(){const i=new ut,t=[4099130,3042860];i.prism(0,0,0,6.2,.5,.42,8,t,5939274);for(const[e,n,s]of[[1,2.6,2.4],[-1,3.4,1.8]])i.box(e*.75,n,0,1.1,.6,.6,t[0]),i.prism(e*1.15,0,n-.2,n+s,.34,.3,7,t,5939274);return{parts:tn(i),radius:.7,max:220}}function hu(){const i=new ut,t=[8022610,6180928];i.prism(0,0,0,2.6,.38,.3,6,t);const e=[[-1.6,4.4,.3],[1.4,4.8,-.4],[.2,5.4,.9],[-.4,4,-1.3]];for(const n of e){for(let r=0;r<5;r++){const a=r/5,o=(r+1)/5,c=u=>[n[0]*u,2.6+(n[1]-2.6)*u,n[2]*u],l=c(a),h=c(o);i.quad([l[0]-.18,l[1],l[2]],[l[0]+.18,l[1],l[2]],[h[0]+.15,h[1],h[2]],[h[0]-.15,h[1],h[2]],t[r%2])}for(let r=0;r<8;r++){const a=r/8*Math.PI*2;i.tri([n[0],n[1]-.2,n[2]],[n[0]+Math.cos(a)*.25,n[1],n[2]+Math.sin(a)*.25],[n[0]+Math.cos(a)*.9,n[1]+.5,n[2]+Math.sin(a)*.9],r%2?4880954:6986314)}}return{parts:tn(i),radius:.6,max:160}}function lx(i){const t=new ut,e=[12607546,14186570,11555892,14717020,11029552],n=9,s=i.range(26,46),r=i.range(26,40),a=r*i.range(.55,.75),o=5;for(let c=0;c<o;c++){const l=s*c/o,h=s*(c+1)/o,u=r+(a-r)*(c/o),d=r+(a-r)*((c+1)/o);t.prism(0,0,l,h,u,d,n,[e[c],ar(e[c],.82)],c===o-1?14191192:null,.3)}return t.prism(0,0,-2,4,r*1.35,r,n,[13139024,11561540],null,.3),{parts:tn(t),radius:0,max:30}}function hx(){const i=new ut,t=Z+5,e=18,n=4,s=[13134400,11557430,14188622];for(const a of[-1,1])i.box(a*(t+3),e/2-2,0,7,e+4,9,[s[0],s[2]]);const r=10;for(let a=0;a<r;a++){const o=a/r*Math.PI,c=(a+1)/r*Math.PI,l=(h,u,d)=>[-Math.cos(h)*u,e-4+Math.sin(h)*(u*.45),d];for(const h of[-4,4])i.quad(l(o,t,h),l(c,t,h),l(c,t+n,h),l(o,t+n,h),s[a%2]);i.quad(l(o,t,-4),l(c,t,-4),l(c,t,4),l(o,t,4),9061416),i.quad(l(o,t+n,-4),l(c,t+n,-4),l(c,t+n,4),l(o,t+n,4),s[2])}return{parts:tn(i),radius:0,max:4}}function uu(){const i=new ut,t=new ut;i.prism(0,0,-30,26,6,5,12,[15261904,13682872]),i.prism(0,0,26,32,6.6,6.6,12,[14209216,12630184],12103840),i.prism(0,0,32,36,3,.4,12,[12630184,11051152]);for(let e=0;e<6;e++){const n=e/6*Math.PI*2;t.box(Math.cos(n)*5.4,28,Math.sin(n)*5.4,.8,1.6,.8,16771232)}return{parts:tn(i,t),radius:0,max:6}}function ux(){const i=new ut;i.prism(0,0,0,1.4,.3,.25,5,5914150);const t=[[1,4.6,2.6],[3.2,7,2],[5.4,9.4,1.4]];for(const[e,n,s]of t){i.prism(0,0,e,n,s,0,8,[1989174,1526316]);const r=e+(n-e)*.45;i.prism(0,0,r,n+.05,s*.58,0,8,[16777215,14739700])}return{parts:tn(i),radius:1,max:300}}function dx(i){const t=new ut,e=i.range(10,13),n=9,s=3.4,r=3.2,a=i.pick([9065522,8014380,10117176]);t.box(0,s/2,0,e,s,n,[16052456,16777215]),t.box(0,s+r/2,0,e,r,n,[a,ar(a,1.15)]);for(let h=-e/2+1.6;h<e/2-1;h+=2.6)for(const[u,d]of[[1.8,3820122],[s+1.6,3820122]])t.box(h,u,n/2+.02,1,1.1,.06,d),t.box(h-.75,u,n/2+.04,.4,1.1,.06,12593706),t.box(h+.75,u,n/2+.04,.4,1.1,.06,12593706);t.box(0,s+.2,n/2+.8,e*.8,.2,1.6,a);for(let h=-e*.4;h<=e*.4;h+=.6)t.box(h,s+.75,n/2+1.55,.12,1,.12,ar(a,.8));t.box(0,s+1.25,n/2+1.55,e*.8,.12,.12,ar(a,.8));const o=s+r,c=o+3.6,l=1.2;for(const h of[-1,1])t.quad([h*(e/2+l),o-.4,-n/2-l],[h*(e/2+l),o-.4,n/2+l],[0,c,n/2+l],[0,c,-n/2-l],ar(a,.7)),t.quad([h*(e/2+l-.1),o-.15,-n/2-l],[h*(e/2+l-.1),o-.15,n/2+l],[0,c+.25,n/2+l],[0,c+.25,-n/2-l],16317439);for(const h of[-n/2,n/2])t.tri([-e/2,o,h],[e/2,o,h],[0,c,h],[a,a][0]);return t.box(e*.25,c,0,.9,2.4,.9,14209224),{parts:tn(t),radius:0,max:30}}function fx(){const i=new ut;return i.quad([-1.2,0,0],[1.4,0,0],[.6,1.1,0],[-.8,.9,0],16777215),i.quad([-.8,.9,0],[.6,1.1,0],[.6,1.1,-jt],[-.8,.9,-jt],16054527),i.quad([1.4,0,0],[.6,1.1,0],[.6,1.1,-jt],[1.4,0,-jt],14477044),i.quad([-1.2,0,0],[-.8,.9,0],[-.8,.9,-jt],[-1.2,0,-jt],15265528),{parts:tn(i),radius:0,max:400}}function px(){const i=new ut;return i.box(0,0,0,3.2,2.6,2.4,[13642282,14694970]),i.box(0,.3,1.21,2.8,1.2,.02,9091288),i.box(0,.3,-1.21,2.8,1.2,.02,9091288),i.box(0,2.6,0,.2,2.6,.2,3815994),i.box(0,3.9,0,300,.12,.12,2763306),{parts:tn(i),radius:0,max:6}}function mx(i,t,e){const n=new ut,s=new ut,r=new ut,a=new ut,o=i.range(26,40),c=i.range(16,22),l=i.range(60,110);if(ie.modern)a.facadeBox(0,l/2,0,o,l,c,pr(i.pick([be.OFFICE_WARM,be.APARTMENT,be.OFFICE_COOL])),14,14,[16777215,14207144],3813440,i.range(0,1));else{n.box(0,l/2,0,o,l,c,[3812928,4865616]);for(let u=6;u<l-4;u+=6)for(let d=-o/2+2;d<o/2-2;d+=3)i.chance(.55)&&s.box(d,u,c/2+.05,1.6,2,.05,i.pick([16771232,16774872,16765040]))}for(const u of[l*.33,l*.66,l])s.box(0,u,0,o+.4,.9,c+.4,16762954);n.box(0,5,0,o+14,10,c+10,[2760752,3812928]),s.box(0,10.4,0,o+14.4,.8,c+10.4,e),s.box(0,l+2,0,o*.7,.6,c*.7,e),n.box(0,l+7,c*.25,o*.8,9,.6,1052700),r.quad([-o*.38,l+3,c*.25+.32],[o*.38,l+3,c*.25+.32],[o*.38,l+11,c*.25+.32],[-o*.38,l+11,c*.25+.32],16777215,t),s.box(0,l+11.4,c*.25,o*.8,.5,.7,e);const h=tn(n,s,r);return a.empty||h.push({geo:a.build(),mat:"facadeLit"}),{parts:h,radius:0,max:40}}function gx(i,t,e,n){const s=new ut,r=new ut,a=new ut;s.box(0,n/2,-.4,1.4,n,1.4,2105392),s.box(0,n+5,-.3,12.6,10.6,.6,1052700),a.quad([-6,n,.05],[6,n,.05],[6,n+10,.05],[-6,n+10,.05],16777215,i);for(let o=0;o<=12;o++){const c=-6.3+o*1.05;r.box(c,n-.3,.1,.35,.35,.35,o%2?16777215:16769120),r.box(c,n+10.3,.1,.35,.35,.35,o%2?16769120:16777215)}for(let o=0;o<=10;o++)for(const c of[-6.3,6.3])r.box(c,n+o,.1,.35,.35,.35,o%2?16777215:16769120);return r.box(0,n-3,.1,9,1.2,.3,e),r.poly([[4.4,n-1.4,.1],[7.4,n-3,.1],[4.4,n-4.6,.1]],e),r.box(0,n+10.9,0,12.8,.4,.8,t),{parts:tn(s,r,a),radius:.9,max:40}}function xx(i,t){const e=new ut,n=new ut,s=i.range(30,46),r=i.range(10,16),a=18;e.box(0,r/2,0,s,r,a,[2761270,3813446]),n.box(0,r*.55,a/2+.05,s-2,r*.3,.1,i.pick([16726666,4255999,16764992,16740400])),n.box(0,r+.3,0,s+.4,.6,a+.4,t),e.box(0,4,a/2+4,16,.6,8,16777215);for(let o=0;o<16;o++)n.box(-7.5+o,3.6,a/2+8,.3,.3,.3,o%2?16769120:16777215);return{parts:tn(e,n),radius:0,max:40}}function _x(i){const t=new ut,e=i.range(10,16),n=i.range(8,11),s=i.int(2,4),r=3.2,a=s*r;t.box(0,a/2,0,e,a,n,[16777215,16052458]);for(let h=0;h<s;h++){for(let u=-e/2+1.6;u<e/2-1;u+=2.8){const d=h*r+1.7;t.box(u,d,n/2+.03,1.1,1.6,.06,2767434),t.box(u-.8,d,n/2+.06,.45,1.6,.06,2783818),t.box(u+.8,d,n/2+.06,.45,1.6,.06,2783818)}h>0&&t.box(0,h*r+.2,n/2+.6,e*.5,.18,1.2,15788252)}const o=a+2.4,c=.6,l=[13130294,11554352];return t.quad([-e/2-c,a,n/2+c],[e/2+c,a,n/2+c],[e*.25,o,0],[-e*.25,o,0],l[0]),t.quad([e/2+c,a,-n/2-c],[-e/2-c,a,-n/2-c],[-e*.25,o,0],[e*.25,o,0],l[1]),t.tri([e/2+c,a,n/2+c],[e/2+c,a,-n/2-c],[e*.25,o,0],l[1]),t.tri([-e/2-c,a,-n/2-c],[-e/2-c,a,n/2+c],[-e*.25,o,0],l[0]),{parts:[{geo:t.build(),mat:"lit",tint:!0}],radius:0,max:60}}function Mx(){const i=new ut;return i.prism(0,0,0,1,.25,.2,5,5914150),i.prism(0,0,.6,5,.6,1.1,8,[2379820,1851428]),i.prism(0,0,5,10.5,1.1,0,8,[2775602,1984040]),{parts:tn(i),radius:.8,max:260}}function vx(i){const t=new ut,e=i.range(18,34),n=e*.24,s=[[-n/2,0,e/2],[n/2,0,e/2],[n/2,0,-e*.25],[0,0,-e/2],[-n/2,0,-e*.25]],r=s.map(([a,,o])=>[a*1.08,2.4,o]);for(let a=0;a<s.length;a++){const o=(a+1)%s.length;t.quad(s[a],s[o],r[o],r[a],a===3||a===2?16053492:16777215)}return t.poly(r,14200968),t.box(0,3.6,e*.08,n*.75,2.4,e*.45,[16777215,15790320]),t.box(0,3.6,e*.08,n*.77,.8,e*.42,1714746),t.box(0,5.4,e*.12,n*.55,1.4,e*.25,[16777215,15790320]),t.box(0,.6,0,n*1.1,.4,e*.9,1718906),t.box(0,7.4,e*.1,.25,3,.25,13684944),{parts:tn(t),radius:0,max:40}}function yx(){const i=new ut;i.box(0,.75,-jt/2,.8,1.5,jt,[14207144,14997176]),i.box(0,1.6,-jt/2,1,.2,jt,[13154456,15787208]);for(let t=0;t<4;t++)i.box(.41,.4+t%2*.6,-.8-t*1.4,.02,.06,1.2,12101768);return{parts:tn(i),radius:0,max:360}}const Uo=15912868,li=[13137994,12348994],ha=[14457438,13668438],e0=[15251584,14462068],n0=[11557430,10505774],bx=[1731240,1598112],ua=[14998732,14209216],us={road:[9077384,8287868],line:16764992,edge:16777215,rumble:[16777215,13652016]},Sx={id:"canyon",name:"GRAND CANYON",lines:["GRAND","CANYON"],night:!1,hemi:[11063551,14191184],plate:16777215,smoke:15255712,card:[12605482,16771232],music:"desert",stageNames:["ROUTE 66 DINER","PAINTED DESERT","CANYON RIM","HOOVER DAM","MONUMENT VALLEY"],fog:{color:Uo,near:180,far:1200},ambient:{color:16773344,intensity:1.85},sun:{color:16769720,intensity:2.5,dir:[.6,.9,-.6]},startTime:60,extendTime:40,shadow:6965818,trafficColors:[14209216,9054752,2771594,16777215,4876858,13146688,6974066],trafficCount:14,walls:!1,offroadLimit:Z+26,build(i){const t=new Jn(1966),e=J=>J,n=[pe(us,[{w:4,c:li,tex:ot.DIRT},{w:600,c:ha,tex:ot.SAND}],[{w:4,c:li,tex:ot.DIRT},{w:600,c:ha,tex:ot.SAND}]),pe(us,[{w:2,c:li,tex:ot.DIRT},{w:24,c:[12101776,11312260],tex:ot.PAVING},{w:600,c:ha,tex:ot.SAND}],[{w:2,c:li,tex:ot.DIRT},{w:24,c:[12101776,11312260],tex:ot.PAVING},{w:600,c:ha,tex:ot.SAND}]),pe(us,[{w:2.5,c:li,tex:ot.DIRT},{w:1.5,dy:16,c:n0,tex:ot.DIRT},{w:600,dy:4,c:[13135934,12347448],tex:ot.DIRT}],[{w:3,c:li,tex:ot.DIRT},{w:6,abs:0,c:n0,tex:ot.DIRT},{w:600,abs:0,c:[11031604,10243118],tex:ot.DIRT}]),pe(us,[{w:1,c:ua,tex:ot.CONCRETE},{w:0,dy:1.1,c:[15788248,15261904]},{w:.8,c:ua},{w:40,abs:-30,c:[13682872,12893356],tex:ot.CONCRETE},{w:600,abs:-30,c:[2783850,2519134],tex:e(ot.BAY)}],[{w:1,c:ua,tex:ot.CONCRETE},{w:0,dy:1.1,c:[15788248,15261904]},{w:.8,c:ua},{w:0,abs:34,c:[13156528,12367012]},{w:600,abs:34,c:bx,tex:ot.BAY}]),pe(us,[{w:4,c:li,tex:ot.DIRT},{w:600,c:e0,tex:ot.SAND}],[{w:4,c:li,tex:ot.DIRT},{w:600,c:e0,tex:ot.SAND}]),pe(us,[{w:1.2,dy:.3,c:[10128002,9338486]},{w:0,dy:5,c:[10508346,9719348]},{w:0,dy:.8,c:[16765024,6967360]},{w:1.5,dy:2.8,c:[9062960,8406060]}],[{w:1.2,dy:.3,c:[10128002,9338486]},{w:0,dy:5,c:[10508346,9719348]},{w:0,dy:.8,c:[16765024,6967360]},{w:1.5,dy:2.8,c:[9062960,8406060]}],[5911590,5385762])],s=(J,at)=>at?5:J==="diner"?1:J==="rim"?2:J==="dam"?3:J==="valley"?4:0,r=new Cs(s,6);r.zone="diner",r.straight(30),r.stageFrom({zone:"diner",length:380,curvy:.55,hilly:.2,yMin:5,yMax:12},t),r.stageFrom({zone:"painted",length:400,curvy:.7,hilly:.6,yMin:5,yMax:34},t),r.stageFrom({zone:"rim",length:420,curvy:1,hilly:.5,yMin:60,yMax:90,tunnels:.14},t),r.stageFrom({zone:"dam",length:300,curvy:.3,hilly:.02,yMin:40,yMax:40},t),r.stageFrom({zone:"valley",length:440,curvy:.6,hilly:.35,yMin:5,yMax:22},t);const a=r.finish(260),o=new Os,c=o.add(lu()),l=o.add(hu()),h=[0,1,2].map(()=>o.add(lx(t))),u=o.add(hx()),d=o.add(uu()),f=o.add(al()),g=o.add(Q0()),M=o.add(ka()),m=o.add(Is(9,16773312)),p=o.add(ol(2,t)),x=o.add(gr(10508346,16764992,7.9)),_=[{bg:16777215,fg:14690858,text:"DINER"},{bg:1718922,fg:16769088,text:"GAS"},{bg:16777215,fg:1735226,text:"MOTEL"},{bg:14690858,fg:16777215,text:"CAFE"},{bg:16769088,fg:1710618,text:"TRADING POST"}].map(J=>o.add(tu(i.add(J,2,1)))),v=[{bg:16777215,fg:1710618,text:"ROUTE 66",sub:"HISTORIC HIGHWAY",border:1710618},{bg:14690858,fg:16777215,text:"LAST GAS",sub:"80 MILES",border:16777215},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:1731256,fg:16777215,text:"CANYON",sub:"VIEWPOINT 5 MI",border:16769088},{bg:16747040,fg:16777215,text:"COLD",sub:"ROOT BEER",border:16777215}].map(J=>o.add(mr(i.add(J,2,2),9,4.5,9071178,15788248))),E=[{bg:1735226,fg:16777215,text:"FLAGSTAFF",sub:"62",border:16777215},{bg:1735226,fg:16777215,text:"LAS VEGAS",sub:"104",border:16777215},{bg:16777215,fg:1710618,text:"US",sub:"66",border:1710618}].map(J=>o.add(Fa(i.add(J,1,1)))),w=o.add(Ee(i.add({bg:16777215,fg:12597274,text:"START",stripes:1710618},4,1),14207152,12597274)),T=o.add(Ee(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),14207152,1727200)),C=o.add(Ee(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),14207152,1710618)),b=o.add(Ee(i.add({bg:9058842,fg:16771232,text:"GRAND CANYON",border:16771232},4,1),6965802,9058842,16771232)),S=o.add(Mn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),D=o.add(Mn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),W=o.add(Mi(!0)),B=o.add(Mi(!1)),V=Array.from({length:16},(J,at)=>o.add(ll(i.add({bg:1735226,fg:16777215,text:String(at+1),border:16777215},1,1)))),et=Us,U=[et.f150,et.cherokee,et.caprice,et.volvo240,et.golf,et.w124].map(J=>o.add(Un(J))).concat([o.add(_i(12597274)),o.add(_i(1727160)),o.add(Gi(3836506))]),rt=a.segs;for(let J=10;J<rt.length;J++){const at=rt[J],j=at.props;if(at.tunnel){rt[J-1].tunnel||j.push({t:x,x:0});continue}const Tt=at.zone;J%3===0&&Tt!=="dam"&&j.push({t:W,x:Z+2.6},{t:B,x:-13.6}),J%167===100&&j.push({t:V[Math.min(V.length-1,Math.floor(J*6/1e3))],x:Z+3.6,r:-.3}),Math.abs(at.curve)>.0016&&J%5===0&&Tt!=="dam"&&j.push(at.curve>0?{t:S,x:-16.5,r:.15}:{t:D,x:Z+5.5,r:-.15});const K=(ft,yt)=>{J%4===0&&t.chance(ft)&&j.push({t:c,x:t.sign()*(Z+t.range(yt,yt+30)),s:t.range(.8,1.3),r:t.range(0,6)}),J%6===1&&t.chance(ft*.7)&&j.push({t:l,x:t.sign()*(Z+t.range(yt,yt+40)),s:t.range(.8,1.4),r:t.range(0,6)}),J%7===3&&t.chance(ft)&&j.push({t:g,x:t.sign()*(Z+t.range(5,30)),s:t.range(.3,.6),sy:.6,r:t.range(0,6),tint:12099680}),J%19===0&&t.chance(.5)&&j.push({t:f,x:t.sign()*(Z+t.range(10,40)),s:t.range(.8,2),r:t.range(0,6),tint:16756880})};if(Tt==="diner")J%18===6&&t.chance(.8)&&j.push({t:t.pick(_),x:-(Z+t.range(14,18)),tint:t.pick([16777215,16771272,14217471]),r:.4}),J%18===15&&t.chance(.8)&&j.push({t:t.pick(_),x:Z+t.range(14,18),tint:t.pick([16777215,16771272,14217471]),r:-.4}),J%60===30&&j.push({t:p,x:t.sign()*(Z+t.range(40,60)),tint:t.pick([16777215,16773336]),r:t.range(-.3,.3)}),J%9===0&&j.push({t:m,x:Z+3,r:0}),J%45===20&&j.push({t:t.pick(v),x:(J%90===20?-1:1)*(Z+12),r:J%90===20?.35:-.35}),K(.25,30);else if(Tt==="painted"||Tt==="valley"){if(K(Tt==="valley"?.45:.6,6),J%30===10&&t.chance(.85)){const ft=Tt==="valley"?t.range(60,180):t.range(140,320);j.push({t:t.pick(h),x:t.sign()*(Z+ft),s:t.range(.8,1.4),sy:t.range(.8,1.3),r:t.range(0,6)})}J%70===35&&j.push({t:t.pick(v),x:(J%140===35?-1:1)*(Z+12),r:J%140===35?.35:-.35}),J%120===60&&j.push({t:t.pick(E),x:Z+3.4,r:-.2})}else Tt==="rim"?(J%2===0&&j.push({t:M,x:Z+2.4}),J%5===0&&t.chance(.5)&&j.push({t:f,x:-(Z+t.range(6,18)),y:t.range(14,18),s:t.range(.6,1.4),r:t.range(0,6),tint:16752768}),J%8===2&&t.chance(.4)&&j.push({t:c,x:-(Z+t.range(8,30)),y:16,s:t.range(.8,1.2),r:t.range(0,6)}),J%26===13&&t.chance(.7)&&j.push({t:t.pick(h),x:Z+t.range(80,260),y:0,abs:!0,s:t.range(.9,1.6),sy:t.range(1.2,2),r:t.range(0,6)})):Tt==="dam"&&(J%8===0&&j.push({t:m,x:Z+2.6,r:0}),J%8===4&&j.push({t:m,x:-13.6,r:Math.PI}),J%70===25&&j.push({t:d,x:Z+t.range(40,70),y:34,abs:!0}))}for(let J=1;J<a.stageStarts.length;J++)rt[a.stageStarts[J]+4].props.push({t:T,x:0});rt[8].props.push({t:w,x:0}),rt[a.stageStarts[2]+30].props.push({t:b,x:0}),rt[a.stageStarts[4]+180].props.push({t:u,x:0}),rt[a.goalSeg].props.push({t:C,x:0});const k=new Ps;k.addLayer(Ls([[0,16769712],[1.5,16764044],[3.5,16298106],[6,14203056],[9,11061476],[14,7910632],[22,5019872],[35,2916052],[90,1727672]],Uo),0);const tt=Ns(2500,-.7,9,150,[[1.5,16771264],[1.2,16767136],[1,16773312],[.7,16776168]],20);return k.addLayer(tt,1),k.sun={obj:tt,local:za(2500,-.7,9)},k.addLayer(Vi(t,2350,8,[16777215,16771280,14723216]),.8),k.addLayer(Nn(t,2250,10127032,220,()=>1,void 0,30),1),k.addLayer($2(t,2100,[10109992,12081210,13661258,11557434,14715992],170,J=>Math.sin(J*3)>-.6?1:.4,26),1),k.addLayer(Ds(1900,Uo),0),{track:a,profiles:n,props:o.defs,backdrop:k,trafficTypes:U,gateType:C}}},Oo=14673652,ds=[16185855,15265528],hi=[14212840,13423326],wx=[13624562,12770542],Ex=[9079960,8158858],tr={road:[7764095,6974580],line:16777215,edge:16777215,rumble:[13642282,16777215]},Tx={id:"alps",name:"SWISS ALPS",lines:["SWISS","ALPS"],night:!1,hemi:[13162751,15265528],plate:16777215,smoke:16777215,card:[3828408,16777215],music:"alps",stageNames:["LAKESIDE VILLAGE","PINE FOREST","MOUNTAIN PASS","AVALANCHE GALLERY","GLACIER SUMMIT"],fog:{color:Oo,near:160,far:1150},ambient:{color:15791359,intensity:1.8},sun:{color:16769256,intensity:2.2,dir:[.5,.8,-.7]},startTime:62,extendTime:42,shadow:8029856,trafficColors:[12593706,2771594,16777215,2779722,14196784,5921378,1710622],trafficCount:14,walls:!1,offroadLimit:Z+22,build(i){var k;const t=new Jn(1991),e=[pe(tr,[{w:3,c:hi,tex:ot.SAND},{w:600,c:ds,tex:ot.SAND}],[{w:3,c:hi,tex:ot.SAND},{w:10,dy:-1.2,c:ds,tex:ot.SAND},{w:600,dy:0,c:wx,tex:ot.PLAIN}]),pe(tr,[{w:3,c:hi,tex:ot.SAND},{w:600,c:ds,tex:ot.SAND}],[{w:3,c:hi,tex:ot.SAND},{w:600,c:ds,tex:ot.SAND}]),pe(tr,[{w:2,c:hi,tex:ot.SAND},{w:3,dy:14,c:Ex,tex:ot.CONCRETE},{w:600,dy:10,c:ds,tex:ot.SAND}],[{w:3,c:hi,tex:ot.SAND},{w:30,abs:0,c:[15002356,14213356],tex:ot.SAND},{w:600,abs:0,c:ds,tex:ot.SAND}]),pe(tr,[{w:1,dy:.3,c:[10527402,10001058]},{w:0,dy:6.5,c:[13159120,12369604]},{w:1.2,dy:1.2,c:[11580088,11053744]}],[{w:1,dy:.3,c:[10527402,10001058]},{w:0,dy:6.5,c:[15266047,9079956]},{w:1.2,dy:1.2,c:[11580088,11053744]}],[8027268,7500924]),pe(tr,[{w:3,c:hi,tex:ot.SAND},{w:600,dy:3,c:[14872828,13953272],tex:ot.SAND}],[{w:3,c:hi,tex:ot.SAND},{w:600,dy:-6,c:[14872828,13953272],tex:ot.SAND}])],n=(tt,J)=>J?3:tt==="lake"?0:tt==="pass"?2:tt==="summit"?4:1,s=new Cs(n,10);s.zone="lake",s.straight(30),s.stageFrom({zone:"lake",length:380,curvy:.6,hilly:.1,yMin:8,yMax:12},t),s.stageFrom({zone:"forest",length:400,curvy:.8,hilly:.6,yMin:10,yMax:45},t),s.stageFrom({zone:"pass",length:420,curvy:1,hilly:1,yMin:45,yMax:110},t),s.stageFrom({zone:"gallery",length:380,curvy:.8,hilly:.4,yMin:85,yMax:115,tunnels:.45},t),s.stageFrom({zone:"summit",length:420,curvy:.7,hilly:.5,yMin:100,yMax:140},t);const r=s.finish(260),a=new Os,o=a.add(ux()),c=[0,1,2].map(()=>a.add(dx(t))),l=a.add(fx()),h=a.add(px()),u=a.add(al()),d=a.add(ka(15263976,6974066)),f=a.add(Is(8,16774352)),g=a.add(gr(10132644,16764992,8)),M=a.add(cl()),m=[{bg:13642282,fg:16777215,text:"ALPEN",sub:"CHOCOLAT",border:16777215},{bg:16777215,fg:13642282,text:"SKI",sub:"SCHOOL",border:13642282},{bg:1727160,fg:16777215,text:"FONDUE",sub:"STUBE",border:16769088},{bg:16769088,fg:13642282,text:"TURBO",sub:"MOTOR OIL",border:13642282},{bg:2783818,fg:16777215,text:"HOTEL",sub:"EDELWEISS",border:16777215}].map(tt=>a.add(mr(i.add(tt,2,2),9,4.5,6965802,15788248))),p=[{bg:1727160,fg:16777215,text:"ZERMATT",sub:"24",border:16777215},{bg:1727160,fg:16777215,text:"ST. MORITZ",sub:"58",border:16777215},{bg:1735226,fg:16777215,text:"PASS",sub:"2106 M",border:16777215}].map(tt=>a.add(Fa(i.add(tt,1,1)))),x=a.add(Ee(i.add({bg:13642282,fg:16777215,text:"START",border:16777215},4,1),9067058,13642282)),_=a.add(Ee(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),9067058,1727200)),v=a.add(Ee(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),9067058,1710618)),E=a.add(Ee(i.add({bg:13642282,fg:16777215,text:"WILLKOMMEN",border:16777215},4,1),9067058,13642282,16777215)),w=a.add(Mn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),T=a.add(Mn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),C=a.add(Mi(!0)),b=a.add(Mi(!1)),S=Array.from({length:16},(tt,J)=>a.add(ll(i.add({bg:1727160,fg:16777215,text:String(J+1),border:16777215},1,1)))),D=a.add(Hi(0)),W=Us,B=[W.golf,W.volvo240,W.w124,W.civic,W.cherokee].map(tt=>a.add(Un(tt))).concat([a.add(_i(13642282)),a.add(Gi(16764992)),a.add(Gi(16764992))]),V=[13642282,1727160,16769088,2787930,16743088,16777215],et=r.segs;for(let tt=10;tt<et.length;tt++){const J=et[tt],at=J.props;if(J.tunnel){(!et[tt-1].tunnel||!((k=et[tt+1])!=null&&k.tunnel))&&at.push({t:g,x:0,r:et[tt-1].tunnel?Math.PI:0});continue}const j=J.zone;tt%3===0&&at.push({t:C,x:Z+2.6},{t:b,x:-13.6}),tt%2===0&&j!=="lake"&&at.push({t:l,x:Z+3.8},{t:l,x:-14.8,r:Math.PI}),tt%167===100&&at.push({t:S[Math.min(S.length-1,Math.floor(tt*6/1e3))],x:Z+3.6,r:-.3}),Math.abs(J.curve)>.0016&&tt%5===0&&at.push(J.curve>0?{t:w,x:-16.5,r:.15}:{t:T,x:Z+5.5,r:-.15});const Tt=(K,ft)=>{for(const yt of ft)tt%2===0&&t.chance(K)&&at.push({t:o,x:yt*(Z+t.range(7,60)),s:t.range(.8,1.6),r:t.range(0,6)})};j==="lake"?(Tt(.35,[-1]),tt%14===3&&t.chance(.8)&&at.push({t:t.pick(c),x:-(Z+t.range(16,40)),r:t.range(.2,.6)}),tt%9===0&&at.push({t:f,x:-14,r:Math.PI}),tt%16===8&&at.push({t:M,x:Z+4.5,tint:t.pick([13642282,16777215])}),tt%5===2&&t.chance(.4)&&at.push({t:D,x:-(Z+t.range(2,4)),r:t.range(0,6),tint:t.pick(V)}),tt%50===25&&at.push({t:t.pick(m),x:-23,r:.35})):j==="forest"?(Tt(.75,[-1,1]),tt%30===12&&t.chance(.6)&&at.push({t:t.pick(c),x:t.sign()*(Z+t.range(20,50)),r:t.range(-.6,.6)}),tt%60===30&&at.push({t:t.pick(m),x:(tt%120===30?-1:1)*(Z+12),r:tt%120===30?.35:-.35}),tt%120===60&&at.push({t:t.pick(p),x:Z+3.4,r:-.2})):j==="pass"||j==="gallery"?(tt%2===0&&at.push({t:d,x:Z+2.4}),tt%6===0&&t.chance(.5)&&at.push({t:o,x:-(Z+t.range(8,40)),y:j==="pass"?14:0,s:t.range(.7,1.2),r:t.range(0,6)}),tt%7===3&&t.chance(.5)&&at.push({t:u,x:-(Z+t.range(5,9)),s:t.range(.6,1.4),r:t.range(0,6),tint:11580616}),tt%9===0&&t.chance(.6)&&at.push({t:o,x:Z+t.range(30,160),y:0,abs:!0,s:t.range(1,1.8),r:t.range(0,6)}),tt%90===45&&at.push({t:h,x:t.range(-40,40),y:t.range(40,60)}),tt%120===60&&at.push({t:t.pick(p),x:Z+3.4,r:-.2})):j==="summit"&&(tt%2===0&&Math.abs(J.curve)>.001&&at.push({t:d,x:Z+2.4},{t:d,x:-13.4}),tt%11===0&&t.chance(.5)&&at.push({t:u,x:t.sign()*(Z+t.range(8,40)),s:t.range(.8,2.2),r:t.range(0,6),tint:13160676}),tt%80===40&&at.push({t:h,x:t.range(-40,40),y:t.range(30,50)}),tt%16===8&&at.push({t:M,x:t.sign()*(Z+5),tint:t.pick([13642282,16777215])}))}for(let tt=1;tt<r.stageStarts.length;tt++)et[r.stageStarts[tt]+4].props.push({t:_,x:0});et[8].props.push({t:x,x:0}),et[60].props.push({t:E,x:0}),et[r.goalSeg].props.push({t:v,x:0});const U=new Ps;U.addLayer(Ls([[0,16769248],[1.5,16763088],[3.5,15778008],[6,13682924],[10,11060464],[16,8696044],[26,6067424],[40,3832016],[90,2119864]],Oo),0);const rt=Ns(2500,.9,4,150,[[1.5,16767192],[1.2,16763064],[1,16773336],[.7,16776432]],20);return U.addLayer(rt,1),U.sun={obj:rt,local:za(2500,.9,4)},U.addLayer(Vi(t,2350,10,[16777215,16773364,14207200]),.8),U.addLayer(Nn(t,2250,9083588,480,()=>1,16777215,34,[8,20]),1),U.addLayer(Nn(t,2100,6978216,300,tt=>Math.cos(tt*2)>-.3?1:.5,16054527,30),1),U.addLayer(Nn(t,1990,2775624,70,()=>1,void 0,240,[1.2,3.5]),1),U.addLayer(Ds(1900,Oo),0),{track:r,profiles:e,props:a.defs,backdrop:U,trafficTypes:B,gateType:v}}},Fo=2366522,i0=[6972536,6183532],s0=[3814472,3419714],r0=[4864584,4338751],da=[9078422,8288906],fa={road:[4079178,3552834],line:15790320,edge:15790320,rumble:[5921384,5263452]},ui=[16726666,4255999,16769088,16740400,8453984,12607743],Ax={id:"vegas",name:"LAS VEGAS STRIP",lines:["LAS VEGAS","STRIP"],night:!0,hemi:[10121440,3809344],plate:16777215,smoke:13154520,card:[1706538,16769088],music:"vegas",stageNames:["FREMONT STREET","THE STRIP","CASINO ROW","DESERT HIGHWAY","HOOVER LIGHTS"],fog:{color:Fo,near:150,far:1150},ambient:{color:13681919,intensity:1.75},sun:{color:16763104,intensity:1.5,dir:[.4,1,.8]},startTime:60,extendTime:40,shadow:2236460,trafficColors:[16777215,14692400,2763312,16769088,4235519,13656319,10132136],trafficCount:18,walls:!1,offroadLimit:Z+18,build(i){const t=new Jn(1955),e=[pe(fa,[{w:.3,dy:.2,c:[11579580,11053236]},{w:6,c:i0,tex:ot.PAVING},{w:600,c:s0,tex:ot.PAVING}],[{w:.3,dy:.2,c:[11579580,11053236]},{w:6,c:i0,tex:ot.PAVING},{w:600,c:s0,tex:ot.PAVING}]),pe(fa,[{w:3,c:[5917264,5391432],tex:ot.DIRT},{w:600,c:r0,tex:ot.SAND}],[{w:3,c:[5917264,5391432],tex:ot.DIRT},{w:600,c:r0,tex:ot.SAND}]),pe(fa,[{w:1,c:da,tex:ot.CONCRETE},{w:0,dy:1.1,c:[11052212,10262696]},{w:.8,c:da},{w:40,abs:-20,c:[6973046,6446702],tex:ot.CONCRETE},{w:600,abs:-20,c:[1055280,923692],tex:ot.BAY}],[{w:1,c:da,tex:ot.CONCRETE},{w:0,dy:1.1,c:[11052212,10262696]},{w:.8,c:da},{w:0,abs:18,c:[5920358,5394014]},{w:600,abs:18,c:[924736,792634],tex:ot.BAY}]),pe(fa,[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[3420716,3025960])],n=(U,rt)=>rt?3:U==="desert"?1:U==="hoover"?2:0,s=new Cs(n,6);s.zone="fremont",s.straight(30),s.stageFrom({zone:"fremont",length:360,curvy:.5,hilly:.05,yMin:5,yMax:7},t),s.stageFrom({zone:"strip",length:440,curvy:.45,hilly:.05,yMin:5,yMax:8},t),s.stageFrom({zone:"casino",length:400,curvy:.7,hilly:.1,yMin:5,yMax:10},t),s.stageFrom({zone:"desert",length:420,curvy:.8,hilly:.6,yMin:5,yMax:40},t),s.stageFrom({zone:"hoover",length:380,curvy:.6,hilly:.2,yMin:26,yMax:40,tunnels:.12},t);const r=s.finish(260),a=new Os,c=[{bg:1052700,fg:16769088,text:"LUCKY 7",border:16726666},{bg:1052700,fg:4255999,text:"NEON",sub:"PALACE",border:4255999},{bg:1052700,fg:16726666,text:"DESERT",sub:"ROSE",border:16769088},{bg:1052700,fg:16769088,text:"GOLDEN",sub:"STAR",border:16769088},{bg:1052700,fg:8453984,text:"JACKPOT",border:8453984},{bg:1052700,fg:16777215,text:"SILVER",sub:"SPUR",border:12607743}].map((U,rt)=>a.add(mx(t,i.add(U,2,1),ui[rt%ui.length]))),h=[{bg:1052700,fg:16726666,text:"CASINO",border:16726666},{bg:1052700,fg:16769088,text:"SLOTS",sub:"24 HOURS",border:16769088},{bg:1052700,fg:4255999,text:"BUFFET",sub:"$4.99",border:4255999},{bg:1052700,fg:16777215,text:"SHOWS",sub:"TONIGHT",border:16740400},{bg:1052700,fg:16743088,text:"WEDDING",sub:"CHAPEL",border:16743088},{bg:1052700,fg:8453984,text:"MOTEL",sub:"VACANCY",border:8453984}].map((U,rt)=>a.add(gx(i.add(U,2,2),ui[rt%ui.length],ui[(rt+2)%ui.length],t.range(10,18)))),u=[0,1,2].map(U=>a.add(xx(t,ui[U*2%ui.length]))),d=a.add(rl()),f=a.add(Is(10,16765056,9079448,4,!0)),g=a.add(lu()),M=a.add(hu()),m=a.add(uu()),p=[a.add(Hi(0)),a.add(Hi(1))],x=a.add(gr(6974072,16752688,7.9)),_=a.add(ru(16756784)),v=[{bg:1052700,fg:16769088,text:"WIN BIG",sub:"LOOSE SLOTS",border:16769088},{bg:14690858,fg:16777215,text:"LIVE",sub:"ELVIS SHOW",border:16777215},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:1727160,fg:16777215,text:"HOOVER DAM",sub:"TOURS",border:16769088}].map(U=>a.add(mr(i.add(U,2,2),9,4.5))),E=a.add(Ee(i.add({bg:16777215,fg:14690858,text:"WELCOME TO LAS VEGAS",border:16769088},4,1),14211296,16726666,16769088)),w=a.add(Ee(i.add({bg:1052700,fg:16769088,text:"START",border:16769088},4,1),10132136,16726666,16769088)),T=a.add(Ee(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),10132136,1727200,16769088)),C=a.add(Ee(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),10132136,1710618,16726666)),b=a.add(Mn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),S=a.add(Mn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),D=Us,W=[D.caprice,D.crown,D.cherokee,D.w124,D.f150].map(U=>a.add(Un(U,{night:!0}))).concat([a.add(Un(D.caprice,{taxi:!0,night:!0})),a.add(Un(D.caprice,{taxi:!0,night:!0})),a.add(Gi(16726666)),a.add(_i(2763312))]),B=[16730730,2789631,16769088,16777215,4247712,12607743],V=r.segs;for(let U=10;U<V.length;U++){const rt=V[U],k=rt.props;if(rt.tunnel){V[U-1].tunnel||k.push({t:x,x:0});continue}const tt=rt.zone;if(Math.abs(rt.curve)>.0016&&U%5===0&&tt!=="strip"&&k.push(rt.curve>0?{t:b,x:-16.5,r:.15}:{t:S,x:Z+5.5,r:-.15}),tt==="fremont"||tt==="strip"||tt==="casino"){U%7===0&&k.push({t:f,x:Z+2.4,r:0}),U%7===3&&k.push({t:f,x:-13.4,r:Math.PI}),U%6===1&&k.push({t:d,x:t.sign()*(Z+t.range(4,6)),s:t.range(1,1.3),r:t.range(0,6)}),U%4===2&&t.chance(tt==="fremont"?.6:.35)&&k.push({t:t.pick(p),x:t.sign()*(Z+t.range(2,5)),r:t.range(0,6),tint:t.pick(B)});const J=tt==="strip"?.7:tt==="casino"?.55:.3;U%24===0&&t.chance(J)&&k.push({t:t.pick(c),x:-(Z+t.range(45,90)),r:t.range(.1,.4)}),U%24===12&&t.chance(J)&&k.push({t:t.pick(c),x:Z+t.range(45,90),r:-t.range(.1,.4)}),U%10===4&&t.chance(.75)&&k.push({t:t.pick(h),x:-(Z+t.range(9,14)),r:.45}),U%10===9&&t.chance(.75)&&k.push({t:t.pick(h),x:Z+t.range(9,14),r:-.45}),U%16===6&&t.chance(.7)&&k.push({t:t.pick(u),x:t.sign()*(Z+t.range(26,34)),r:t.range(-.3,.3)})}else tt==="desert"?(U%2===0&&k.push({t:_,x:Z+2.6,y:.4},{t:_,x:-13.6,y:.4}),U%4===0&&t.chance(.5)&&k.push({t:g,x:t.sign()*(Z+t.range(6,40)),s:t.range(.8,1.3),r:t.range(0,6),tint:10132152}),U%6===3&&t.chance(.4)&&k.push({t:M,x:t.sign()*(Z+t.range(8,50)),s:t.range(.8,1.3),r:t.range(0,6),tint:10132152}),U%60===30&&k.push({t:t.pick(v),x:(U%120===30?-1:1)*(Z+12),r:U%120===30?.35:-.35}),U%90===45&&k.push({t:t.pick(h),x:Z+14,r:-.4})):tt==="hoover"&&(U%6===0&&k.push({t:f,x:Z+2.4,r:0}),U%6===3&&k.push({t:f,x:-13.4,r:Math.PI}),U%70===25&&k.push({t:m,x:Z+t.range(40,70),y:18,abs:!0}))}for(let U=1;U<r.stageStarts.length;U++)V[r.stageStarts[U]+4].props.push({t:T,x:0});V[8].props.push({t:w,x:0}),V[r.stageStarts[1]+20].props.push({t:E,x:0}),V[r.goalSeg].props.push({t:C,x:0});const et=new Ps;return et.addLayer(Ls([[0,12606106],[1.5,10111638],[3.5,6961802],[6,4599930],[10,3023466],[18,1841240],[30,1052224],[90,328990]],Fo),0),et.addLayer(au(t,340),.3),et.addLayer(Ns(2500,.8,22,60,[[1.6,4864634],[1.3,9075370],[1,16774872],[.8,16777198]],16),1),et.addLayer(Vi(t,2380,6,[6961792,4860518,13654680],-Math.PI,Math.PI,[5,14]),.7),et.addLayer(Nn(t,2250,2761284,200,()=>1,void 0,34),1),et.addLayer(Ba(t,2050,[1709616,2235450,2761284],[16769120,16726666,4255999,16777215],170,U=>{const rt=Math.atan2(Math.sin(U),Math.cos(U));return Math.abs(rt)<1.2?1:0},.9,.5),1),et.addLayer(Ds(1900,Fo),0),{track:r,profiles:e,props:a.defs,backdrop:et,trafficTypes:W,gateType:C}}},ko=13493490,zo=[1341640,1208512],Pi=[15260868,14471352],a0=[5941322,5282882],Bo=[14207136,13417620],o0=[9083482,8293970],er={road:[9342616,8553100],line:16777215,edge:16777215,rumble:[14690858,16777215]},Rx={id:"monaco",name:"MONACO RIVIERA",lines:["MONACO","RIVIERA"],night:!1,hemi:[11065599,14207136],plate:16777215,smoke:16777215,card:[1735368,16777215],music:"riviera",stageNames:["HARBOUR FRONT","CASINO SQUARE","HARBOUR TUNNEL","CORNICHE CLIFFS","CAP MARTIN"],fog:{color:ko,near:170,far:1180},ambient:{color:16777215,intensity:1.9},sun:{color:16774368,intensity:2.4,dir:[-.6,1,.5]},startTime:60,extendTime:40,shadow:6052966,trafficColors:[16777215,14161944,1718922,16769088,2763310,12632264,2783818],trafficCount:16,walls:!1,offroadLimit:Z+14,build(i){const t=new Jn(1929),e=[pe(er,[{w:.3,dy:.2,c:[15790320,15263976]},{w:7,c:Pi,tex:ot.PAVING},{w:600,c:[14207152,13417636],tex:ot.PAVING}],[{w:.3,dy:.2,c:[15790320,15263976]},{w:10,c:Pi,tex:ot.PAVING},{w:0,abs:0,c:[13155492,12365976]},{w:600,abs:0,c:zo,tex:ot.SEA}]),pe(er,[{w:.3,dy:.2,c:[15790320,15263976]},{w:6,c:Pi,tex:ot.PAVING},{w:600,c:a0,tex:ot.GRASS}],[{w:.3,dy:.2,c:[15790320,15263976]},{w:6,c:Pi,tex:ot.PAVING},{w:600,c:a0,tex:ot.GRASS}]),pe(er,[{w:1.2,dy:.3,c:[12105920,11579576]},{w:0,dy:5,c:[15790320,15000804]},{w:0,dy:.8,c:[16773312,9079440]},{w:1.5,dy:2.8,c:[14211292,13684948]}],[{w:1.2,dy:.3,c:[12105920,11579576]},{w:0,dy:5,c:[15790320,15000804]},{w:0,dy:.8,c:[16773312,9079440]},{w:1.5,dy:2.8,c:[14211292,13684948]}],[6974066,6447722]),pe(er,[{w:2,c:Bo,tex:ot.DIRT},{w:2,dy:13,c:Bo,tex:ot.DIRT},{w:600,dy:8,c:o0,tex:ot.GRASS}],[{w:2,c:Pi,tex:ot.PAVING},{w:8,abs:0,c:Bo,tex:ot.DIRT},{w:4,abs:0,c:[16777215,14742783],tex:ot.FOAM},{w:600,abs:0,c:zo,tex:ot.SEA}]),pe(er,[{w:2,c:Pi,tex:ot.PAVING},{w:600,dy:6,c:o0,tex:ot.GRASS}],[{w:2,c:Pi,tex:ot.PAVING},{w:14,abs:0,c:[13285514,12496e3],tex:ot.SAND},{w:600,abs:0,c:zo,tex:ot.SEA}])],n=(j,Tt)=>Tt?2:j==="harbour"?0:j==="square"?1:j==="corniche"?3:4,s=new Cs(n,3);s.zone="harbour",s.straight(30),s.stageFrom({zone:"harbour",length:380,curvy:.75,hilly:.05,yMin:3,yMax:4},t),s.stageFrom({zone:"square",length:380,curvy:.9,hilly:.5,yMin:4,yMax:22},t),s.stageFrom({zone:"tunnel",length:300,curvy:.6,hilly:.1,yMin:4,yMax:8,tunnels:.9,tunnelZone:"tunnel"},t),s.stageFrom({zone:"corniche",length:440,curvy:1,hilly:.6,yMin:40,yMax:80},t),s.stageFrom({zone:"cap",length:420,curvy:.75,hilly:.3,yMin:18,yMax:34},t);const r=s.finish(260),a=new Os,o=[0,1,2,3].map(()=>a.add(_x(t))),c=a.add(Mx()),l=[0,1,2].map(()=>a.add(vx(t))),h=a.add(yx()),u=a.add(rl()),d=a.add(nu()),f=a.add(iu()),g=[0,1].map(j=>a.add(ol(j,t))),M=a.add(Is(7,16774336,2767402,2)),m=a.add(ka()),p=a.add(cl()),x=a.add(eu()),_=a.add(su(t)),v=[a.add(Hi(0)),a.add(Hi(1))],E=a.add(gr(14735556,14690858,7.9)),w=[{bg:16777215,fg:14690858,text:"GELATO",sub:"ARTIGIANALE",border:14690858},{bg:1735368,fg:16777215,text:"RIVIERA",sub:"YACHT CLUB",border:16777215},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:14690858,fg:16777215,text:"GRAND",sub:"PRIX 86",border:16777215},{bg:2783818,fg:16777215,text:"HOTEL",sub:"DE PARIS",border:16769088}].map(j=>a.add(mr(i.add(j,2,2),9,4.5))),T=[{bg:1727160,fg:16777215,text:"NICE",sub:"18",border:16777215},{bg:1727160,fg:16777215,text:"MENTON",sub:"9",border:16777215},{bg:16777215,fg:1710618,text:"ITALIA",sub:"12",border:14690858}].map(j=>a.add(Fa(i.add(j,1,1)))),C=a.add(Ee(i.add({bg:16777215,fg:14690858,text:"START",stripes:14690858},4,1),15790320,14690858)),b=a.add(Ee(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),15790320,1727200)),S=a.add(Ee(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),15790320,1710618)),D=a.add(Ee(i.add({bg:14690858,fg:16777215,text:"BIENVENUE A MONACO",border:16777215},4,1),16777215,14690858,16777215)),W=a.add(Mn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),B=a.add(Mn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),V=a.add(Mi(!0)),et=a.add(Mi(!1)),U=Us,rt=[U.golf,U.civic,U.w124,U.ae86,U.volvo240].map(j=>a.add(Un(j))).concat([a.add(Gi(1735368)),a.add(_i(14690858))]),k=[16777215,1718922,14690858,16771272,4235472,16747184],tt=r.segs;for(let j=10;j<tt.length;j++){const Tt=tt[j],K=Tt.props;if(Tt.tunnel){tt[j-1].tunnel||K.push({t:E,x:0});continue}const ft=Tt.zone;Math.abs(Tt.curve)>.0016&&j%5===0&&ft!=="harbour"&&K.push(Tt.curve>0?{t:W,x:-16.2,r:.15}:{t:B,x:Z+5.2,r:-.15}),ft==="harbour"?(j%8===0&&K.push({t:M,x:Z+2.6,r:0},{t:M,x:-13.6,r:Math.PI}),j%6===3&&K.push({t:u,x:-(Z+t.range(4,6)),s:t.range(.9,1.2),r:t.range(0,6)}),j%7===0&&t.chance(.8)&&K.push({t:t.pick(l),x:Z+t.range(18,60),y:0,abs:!0,r:t.range(-.3,.3)+Math.PI/2}),j%13===5&&t.chance(.6)&&K.push({t:f,x:Z+t.range(70,200),y:0,abs:!0,s:t.range(.9,1.3),r:t.range(-.6,.6)}),j%9===4&&t.chance(.85)&&K.push({t:t.pick(o),x:-(Z+t.range(14,24)),tint:t.pick(Yn),r:t.range(.1,.4)}),j%16===8&&K.push({t:p,x:Z+4.5,tint:t.pick([14690858,16777215])}),j%4===1&&t.chance(.4)&&K.push({t:t.pick(v),x:t.sign()*(Z+t.range(2,5)),r:t.range(0,6),tint:t.pick(k)}),j%40===10&&K.push({t:_,x:Z+t.range(15,50),y:t.range(14,24),r:t.range(0,6)}),j%50===25&&K.push({t:t.pick(w),x:-22,r:.35})):ft==="square"||ft==="tunnel"?(j%30>3&&K.push({t:x,x:Z+9},{t:x,x:-20}),j%8===0&&K.push({t:M,x:Z+2.6,r:0},{t:M,x:-13.6,r:Math.PI}),j%8===4&&K.push({t:u,x:t.sign()*(Z+6),s:t.range(.9,1.2),r:t.range(0,6)}),j%22===11&&t.chance(.8)&&K.push({t:t.pick(g),x:t.sign()*(Z+t.range(30,60)),tint:t.pick(Yn),r:t.range(-.3,.3)}),j%7===2&&t.chance(.8)&&K.push({t:t.pick(o),x:t.sign()*(Z+t.range(14,22)),tint:t.pick(Yn),r:t.range(-.4,.4)}),j%5===1&&t.chance(.4)&&K.push({t:t.pick(v),x:t.sign()*(Z+t.range(2,5)),r:t.range(0,6),tint:t.pick(k)}),j%40===20&&K.push({t:t.pick(w),x:(j%80===20?-1:1)*(Z+11),r:j%80===20?.35:-.35})):ft==="corniche"?(j%1===0&&K.push({t:h,x:Z+2.6}),j%5===0&&t.chance(.6)&&K.push({t:c,x:-(Z+t.range(6,20)),y:13,s:t.range(.8,1.2),r:t.range(0,6)}),j%9===0&&t.chance(.5)&&K.push({t:t.pick(o),x:-(Z+t.range(14,30)),y:14,tint:t.pick(Yn),r:t.range(-.4,.4)}),j%17===0&&t.chance(.6)&&K.push({t:f,x:Z+t.range(90,260),y:0,abs:!0,s:t.range(1,1.5),r:t.range(-.6,.6)}),j%120===60&&K.push({t:t.pick(T),x:-14.2,r:.2})):(j%3===0&&K.push({t:V,x:Z+2.6},{t:et,x:-13.6}),j%2===0&&Math.abs(Tt.curve)>.0012&&K.push({t:m,x:Z+2.4}),j%4===1&&t.chance(.55)&&K.push({t:t.chance(.5)?d:c,x:-(Z+t.range(6,40)),s:t.range(.8,1.3),r:t.range(0,6)}),j%12===6&&t.chance(.6)&&K.push({t:t.pick(o),x:-(Z+t.range(18,40)),tint:t.pick(Yn),r:t.range(-.4,.4)}),j%10===5&&t.chance(.5)&&K.push({t:u,x:Z+t.range(5,9),s:t.range(.9,1.2),r:t.range(0,6)}),j%19===0&&t.chance(.6)&&K.push({t:f,x:Z+t.range(60,220),y:0,abs:!0,s:t.range(.9,1.4),r:t.range(-.6,.6)}),j%120===60&&K.push({t:t.pick(T),x:Z+3.4,r:-.2}))}for(let j=1;j<r.stageStarts.length;j++)tt[r.stageStarts[j]+4].props.push({t:b,x:0});tt[8].props.push({t:C,x:0}),tt[r.stageStarts[1]+40].props.push({t:D,x:0}),tt[r.goalSeg].props.push({t:S,x:0});const J=new Ps;J.addLayer(Ls([[0,16774360],[1.4,15790304],[3,14216436],[6,11590902],[10,8440052],[16,5943534],[26,3839204],[40,2259160],[90,1333440]],ko),0);const at=Ns(2500,1.1,16,120,[[1.6,16775392],[1.2,16773320],[1,16776168],[.6,16777215]],20);return J.addLayer(at,1),J.sun={obj:at,local:za(2500,1.1,16)},J.addLayer(Vi(t,2350,12,[16777215,16054527,13162728]),.8),J.addLayer(Nn(t,2250,9083568,260,j=>Math.atan2(Math.sin(j),Math.cos(j))<.2?1:.15,void 0,30),1),J.addLayer(Nn(t,2050,4880976,120,j=>Math.atan2(Math.sin(j),Math.cos(j))<0?1:0,void 0,200,[1.2,3.5]),1),J.addLayer(Ba(t,2e3,[15786184,15257776,16313560,14731432],[9085112,13148288],60,j=>{const Tt=Math.atan2(Math.sin(j),Math.cos(j));return Tt<-.3&&Tt>-1.4?1:0},.6,.2),1),J.addLayer(ou(t,1880,.4,2.2,7),1),J.addLayer(cu(t,1880,1.1,160),1),J.addLayer(Ds(1900,ko),0),{track:r,profiles:e,props:a.defs,backdrop:J,trafficTypes:rt,gateType:S}}};class Cx{constructor(t,e,n){this.input=t,this.stage=e,this.onEnable=n,this.btns=[],this.pointers=new Map,this.held=new Set,this.enabled=!1,this.root=document.createElement("div"),this.root.id="touch",document.body.appendChild(this.root);const s=(a,o,c)=>{const l=document.createElement("div");return l.className=`tbtn ${a}`,l.textContent=o,this.root.appendChild(l),c&&this.btns.push({el:l,code:c}),l};s("left","◀","ArrowLeft"),s("right","▶","ArrowRight"),s("gas","GAS","ArrowUp"),s("brake","BRAKE","ArrowDown"),s("drift","DRIFT","Space"),s("pause","II","Escape"),s("radio","MUSIC","KeyN"),this.turboBtn=s("turbo",`TURBO
5`,"KeyT"),this.fireBtn=s("fire hidden","FIRE","KeyF"),this.autoBtn=s("auto",`AUTO
GAS`,""),this.rotate=document.createElement("div"),this.rotate.id="rotate",this.rotate.textContent=`PLEASE ROTATE
YOUR PHONE`,document.body.appendChild(this.rotate);const r={passive:!1};window.addEventListener("pointerdown",a=>this.down(a),r),window.addEventListener("pointermove",a=>this.move(a),r),window.addEventListener("pointerup",a=>this.up(a),r),window.addEventListener("pointercancel",a=>this.up(a),r),document.addEventListener("touchmove",a=>a.preventDefault(),r),document.addEventListener("gesturestart",a=>a.preventDefault(),r)}enable(){var e,n;if(this.enabled)return;this.enabled=!0,this.input.autoGas=!0,document.body.classList.add("touchmode"),this.onEnable();const t=document.documentElement;try{const s=((e=t.requestFullscreen)==null?void 0:e.call(t))??((n=t.webkitRequestFullscreen)==null?void 0:n.call(t));Promise.resolve(s).then(()=>{var r,a;return(a=(r=screen.orientation).lock)==null?void 0:a.call(r,"landscape")}).catch(()=>{})}catch{}}codeAt(t,e){if(!this.root.classList.contains("show"))return null;for(const n of this.btns){if(n.el.classList.contains("hidden"))continue;const s=n.el.getBoundingClientRect(),r=10;if(t>=s.left-r&&t<=s.right+r&&e>=s.top-r&&e<=s.bottom+r)return n.code}return null}sync(){const t=new Set;for(const e of this.pointers.values())e&&t.add(e);for(const e of this.held)t.has(e)||this.input.setVirtual(e,!1);for(const e of t)this.held.has(e)||this.input.setVirtual(e,!0);this.held=t;for(const e of this.btns)e.el.classList.toggle("on",t.has(e.code))}down(t){if((t.pointerType==="touch"||t.pointerType==="pen")&&this.enable(),!this.enabled)return;t.preventDefault();const e=this.autoBtn.getBoundingClientRect();if(this.root.classList.contains("show")&&t.clientX>=e.left&&t.clientX<=e.right&&t.clientY>=e.top&&t.clientY<=e.bottom){this.input.autoGas=!this.input.autoGas,this.autoBtn.classList.toggle("on",this.input.autoGas);return}const n=this.codeAt(t.clientX,t.clientY);if(this.pointers.set(t.pointerId,n),n)this.input.fireFirst();else{const s=this.stage.getBoundingClientRect();this.input.tap((t.clientX-s.left)/s.width*gt,(t.clientY-s.top)/s.height*ze)}this.sync()}move(t){if(!this.enabled||!this.pointers.has(t.pointerId))return;t.preventDefault();const e=this.codeAt(t.clientX,t.clientY);e!=="Escape"&&e!=="KeyN"&&e!=="KeyT"&&this.pointers.set(t.pointerId,e),this.sync()}up(t){this.pointers.has(t.pointerId)&&(this.pointers.delete(t.pointerId),this.sync())}setFire(t){this.fireBtn.classList.contains("hidden")===t&&this.fireBtn.classList.toggle("hidden",!t)}setTurbo(t,e){const n=`TURBO
${t}`;this.turboBtn.textContent!==n&&(this.turboBtn.textContent=n),this.turboBtn.classList.toggle("empty",t===0&&!e)}update(t){const e=this.enabled&&window.innerHeight>window.innerWidth;this.rotate.classList.toggle("show",e);const n=this.enabled&&t&&!e;return this.root.classList.contains("show")!==n&&(this.root.classList.toggle("show",n),n||(this.pointers.clear(),this.sync())),this.autoBtn.classList.toggle("on",this.input.autoGas),e}}const pa=ie.width,ma=ie.height;async function Ix(){var f;try{await document.fonts.load('16px "Press Start 2P"')}catch{}const i=document.getElementById("stage"),t=document.getElementById("gl"),e=new mg({canvas:t,antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(pa,ma,!1);const n=new gn(54,pa/ma,.5,4e3),s=[nx,cx,Sx,Tx,Ax,Rx],r=new W2,a=new Eg,o=new Cc(document.getElementById("hud")),c=new V2(s,n,r,a,o);r.onFirstInput(()=>{a.init(),a.music("title")});const l=new Cx(r,i,()=>c.touch=!0);window.addEventListener("mousedown",g=>{if(l.enabled)return;const M=i.getBoundingClientRect();r.tap((g.clientX-M.left)/M.width*852,(g.clientY-M.top)/M.height*480)}),window.game=c,(f=window.matchMedia)!=null&&f.call(window,"(pointer: coarse)").matches&&(c.touch=!0),c.nameBox=new X2(i),c.boot();const h=()=>{const g=Math.min(window.innerWidth/pa,window.innerHeight/ma)||1,M=g>=3?Math.floor(g):g;i.style.width=`${Math.floor(pa*M)}px`,i.style.height=`${Math.floor(ma*M)}px`};window.addEventListener("resize",h),h();let u=performance.now();const d=g=>{const M=Math.max(0,Math.min(.03333333333333333,(g-u)/1e3));u=g;const m=(c.state==="race"||c.state==="countdown")&&!c.paused;l.update(m)&&m&&(c.paused=!0),l.enabled&&(l.setTurbo(c.turbos,c.turboT>0),l.setFire(c.weapons)),c.update(M),c.draw(),r.endFrame(),e.render(c.world.scene,n),requestAnimationFrame(d)};requestAnimationFrame(d)}Ix();
