(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="170",vu=0,yl=1,yu=2,f0=1,bu=2,Zn=3,Mi=0,en=1,fe=2,xi=0,Ms=1,Ta=2,bl=3,Sl=4,Su=5,Oi=100,Eu=101,wu=102,Tu=103,Au=104,Ru=200,Cu=201,Iu=202,Pu=203,Wo=204,Xo=205,Lu=206,Du=207,Nu=208,Uu=209,Ou=210,Fu=211,ku=212,zu=213,Bu=214,qo=0,Yo=1,$o=2,bs=3,Ko=4,Zo=5,jo=6,Jo=7,Na=0,Gu=1,Hu=2,_i=0,Vu=1,Wu=2,Xu=3,qu=4,Yu=5,$u=6,Ku=7,p0=300,Ss=301,Es=302,Qo=303,tc=304,Ua=306,Aa=1e3,Bi=1001,ec=1002,$e=1003,m0=1004,Er=1005,un=1006,Wa=1007,gi=1008,ni=1009,g0=1010,x0=1011,fr=1012,Bc=1013,Hi=1014,Fn=1015,mr=1016,Gc=1017,Hc=1018,ws=1020,_0=35902,M0=1021,v0=1022,Ln=1023,y0=1024,b0=1025,vs=1026,Ts=1027,Vc=1028,Wc=1029,S0=1030,Xc=1031,qc=1033,Ma=33776,va=33777,ya=33778,ba=33779,nc=35840,ic=35841,sc=35842,rc=35843,ac=36196,oc=37492,cc=37496,lc=37808,hc=37809,uc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,xc=37816,_c=37817,Mc=37818,vc=37819,yc=37820,bc=37821,Sa=36492,Sc=36494,Ec=36495,E0=36283,wc=36284,Tc=36285,Ac=36286,Zu=3200,ju=3201,Yc=0,Ju=1,jn="",ze="srgb",Rs="srgb-linear",Oa="linear",de="srgb",Zi=7680,El=519,Qu=512,td=513,ed=514,w0=515,nd=516,id=517,sd=518,rd=519,wl=35044,ar=35048,Tl="300 es",Qn=2e3,Ra=2001;class Cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xa=Math.PI/180,Rc=180/Math.PI;function gr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function an(i,t,e){return Math.max(t,Math.min(e,i))}function ad(i,t){return(i%t+t)%t}function qa(i,t,e){return(1-e)*i+e*t}function Hs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ne{constructor(t=0,e=0){ne.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(an(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,s,r,a,o,c,l){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],x=s[1],M=s[4],v=s[7],w=s[2],E=s[5],T=s[8];return r[0]=a*_+o*x+c*w,r[3]=a*m+o*M+c*E,r[6]=a*p+o*v+c*T,r[1]=l*_+h*x+u*w,r[4]=l*m+h*M+u*E,r[7]=l*p+h*v+u*T,r[2]=d*_+f*x+g*w,r[5]=d*m+f*M+g*E,r[8]=d*p+f*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ya.makeScale(t,e)),this}rotate(t){return this.premultiply(Ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ya=new te;function T0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ca(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function od(){const i=Ca("canvas");return i.style.display="block",i}const Al={};function or(i){i in Al||(Al[i]=!0,console.warn(i))}function cd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ld(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const se={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===jn?Oa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Rl=[.64,.33,.3,.6,.15,.06],Cl=[.2126,.7152,.0722],Il=[.3127,.329],Pl=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[Rs]:{primaries:Rl,whitePoint:Il,transfer:Oa,toXYZ:Pl,fromXYZ:Ll,luminanceCoefficients:Cl,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:Rl,whitePoint:Il,transfer:de,toXYZ:Pl,fromXYZ:Ll,luminanceCoefficients:Cl,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}});let ji;class ud{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ji===void 0&&(ji=Ca("canvas")),ji.width=t.width,ji.height=t.height;const n=ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ca("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dd=0;class A0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=gr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($a(s[a].image)):r.push($a(s[a]))}else r=$a(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function $a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ud.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fd=0;class Ke extends Cs{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=Bi,s=Bi,r=un,a=gi,o=Ln,c=ni,l=Ke.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=gr(),this.name="",this.source=new A0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==p0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Aa:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Aa:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=p0;Ke.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,n=0,s=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,v=(f+1)/2,w=(p+1)/2,E=(h+d)/4,T=(u+_)/4,C=(g+m)/4;return M>v&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=T/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=C/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=T/r,s=C/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pd extends Cs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new A0(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends pd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class $c extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class md extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Is{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*_,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const w=Math.sqrt(M),E=Math.atan2(w,p*x);m=Math.sin(m*E)/w,o=Math.sin(o*E)/w}const v=o*x;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(an(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,n=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ka.copy(this).projectOnVector(t),this.sub(Ka)}reflect(t){return this.sub(Ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(an(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new $,Dl=new Is;class Yi{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(t.matrixWorld),this.union(wr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),Tr.subVectors(this.max,Vs),Ji.subVectors(t.a,Vs),Qi.subVectors(t.b,Vs),ts.subVectors(t.c,Vs),ai.subVectors(Qi,Ji),oi.subVectors(ts,Qi),wi.subVectors(Ji,ts);let e=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-wi.z,wi.y,ai.z,0,-ai.x,oi.z,0,-oi.x,wi.z,0,-wi.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-wi.y,wi.x,0];return!Za(e,Ji,Qi,ts,Tr)||(e=[1,0,0,0,1,0,0,0,1],!Za(e,Ji,Qi,ts,Tr))?!1:(Ar.crossVectors(ai,oi),e=[Ar.x,Ar.y,Ar.z],Za(e,Ji,Qi,ts,Tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hn=[new $,new $,new $,new $,new $,new $,new $,new $],Sn=new $,wr=new Yi,Ji=new $,Qi=new $,ts=new $,ai=new $,oi=new $,wi=new $,Vs=new $,Tr=new $,Ar=new $,Ti=new $;function Za(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ti.fromArray(i,r);const o=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),c=t.dot(Ti),l=e.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const gd=new Yi,Ws=new $,ja=new $;class $i{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);const e=Ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(ja)),this.expandByPoint(Ws.copy(t.center).sub(ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new $,Ja=new $,Rr=new $,ci=new $,Qa=new $,Cr=new $,to=new $;class Kc{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ja.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Ja);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Rr),o=ci.dot(this.direction),c=-ci.dot(Rr),l=ci.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ja).addScaledVector(Rr,d),f}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){Qa.subVectors(e,t),Cr.subVectors(n,t),to.crossVectors(Qa,Cr);let a=this.direction.dot(to),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,t);const c=o*this.direction.dot(Cr.crossVectors(ci,Cr));if(c<0)return null;const l=o*this.direction.dot(Qa.cross(ci));if(l<0||c+l>a)return null;const h=-o*ci.dot(to);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),a=1/es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xd,t,_d)}lookAt(t,e,n){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),li.crossVectors(n,cn),li.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),li.crossVectors(n,cn)),li.normalize(),Ir.crossVectors(cn,li),s[0]=li.x,s[4]=Ir.x,s[8]=cn.x,s[1]=li.y,s[5]=Ir.y,s[9]=cn.y,s[2]=li.z,s[6]=Ir.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],M=n[7],v=n[11],w=n[15],E=s[0],T=s[4],C=s[8],b=s[12],S=s[1],D=s[5],W=s[9],H=s[13],V=s[2],nt=s[6],O=s[10],rt=s[14],z=s[3],tt=s[7],J=s[11],at=s[15];return r[0]=a*E+o*S+c*V+l*z,r[4]=a*T+o*D+c*nt+l*tt,r[8]=a*C+o*W+c*O+l*J,r[12]=a*b+o*H+c*rt+l*at,r[1]=h*E+u*S+d*V+f*z,r[5]=h*T+u*D+d*nt+f*tt,r[9]=h*C+u*W+d*O+f*J,r[13]=h*b+u*H+d*rt+f*at,r[2]=g*E+_*S+m*V+p*z,r[6]=g*T+_*D+m*nt+p*tt,r[10]=g*C+_*W+m*O+p*J,r[14]=g*b+_*H+m*rt+p*at,r[3]=x*E+M*S+v*V+w*z,r[7]=x*T+M*D+v*nt+w*tt,r[11]=x*C+M*W+v*O+w*J,r[15]=x*b+M*H+v*rt+w*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+_*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,M=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,v=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,w=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,E=e*x+n*M+s*v+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=x*T,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*T,t[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*T,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*T,t[4]=M*T,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*T,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*T,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*T,t[8]=v*T,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*T,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*p+e*o*p)*T,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*T,t[12]=w*T,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*T,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*m-e*o*m)*T,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,x=c*l,M=c*h,v=c*u,w=n.x,E=n.y,T=n.z;return s[0]=(1-(_+p))*w,s[1]=(f+v)*w,s[2]=(g-M)*w,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(d+p))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+M)*T,s[9]=(m-x)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=es.set(s[0],s[1],s[2]).length();const a=es.set(s[4],s[5],s[6]).length(),o=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);const l=1/r,h=1/a,u=1/o;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Qn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===Qn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ra)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Qn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,f=(n+s)*h;let g,_;if(o===Qn)g=(a+r)*u,_=-2*u;else if(o===Ra)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const es=new $,En=new Nt,xd=new $(0,0,0),_d=new $(1,1,1),li=new $,Ir=new $,cn=new $,Nl=new Nt,Ul=new Is;class Mn{constructor(t=0,e=0,n=0,s=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class R0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Md=0;const Ol=new $,ns=new Is,Wn=new Nt,Pr=new $,Xs=new $,vd=new $,yd=new Is,Fl=new $(1,0,0),kl=new $(0,1,0),zl=new $(0,0,1),Bl={type:"added"},bd={type:"removed"},is={type:"childadded",child:null},eo={type:"childremoved",child:null};class Le extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new $,e=new Mn,n=new Is,s=new $(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new te}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(Fl,t)}rotateY(t){return this.rotateOnAxis(kl,t)}rotateZ(t){return this.rotateOnAxis(zl,t)}translateOnAxis(t,e){return Ol.copy(t).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fl,t)}translateY(t){return this.translateOnAxis(kl,t)}translateZ(t){return this.translateOnAxis(zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pr.copy(t):Pr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Xs,Pr,this.up):Wn.lookAt(Pr,Xs,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Wn),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bl),is.child=t,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bd),eo.child=t,this.dispatchEvent(eo),eo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bl),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Le.DEFAULT_UP=new $(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new $,Xn=new $,no=new $,qn=new $,ss=new $,rs=new $,Gl=new $,io=new $,so=new $,ro=new $,ao=new Re,oo=new Re,co=new Re;class Pn{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),Xn.subVectors(n,e),no.subVectors(t,e);const a=wn.dot(wn),o=wn.dot(Xn),c=wn.dot(no),l=Xn.dot(Xn),h=Xn.dot(no),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qn.x),c.addScaledVector(a,qn.y),c.addScaledVector(o,qn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ao.setScalar(0),oo.setScalar(0),co.setScalar(0),ao.fromBufferAttribute(t,e),oo.fromBufferAttribute(t,n),co.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ao,r.x),a.addScaledVector(oo,r.y),a.addScaledVector(co,r.z),a}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),Xn.subVectors(t,e),wn.cross(Xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),wn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ss.subVectors(s,n),rs.subVectors(r,n),io.subVectors(t,n);const c=ss.dot(io),l=rs.dot(io);if(c<=0&&l<=0)return e.copy(n);so.subVectors(t,s);const h=ss.dot(so),u=rs.dot(so);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ss,a);ro.subVectors(t,r);const f=ss.dot(ro),g=rs.dot(ro);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(rs,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Gl.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Gl,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(ss,a).addScaledVector(rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const C0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function lo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=ad(t,1),e=an(e,0,1),n=an(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=lo(a,r,t+1/3),this.g=lo(a,r,t),this.b=lo(a,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=C0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return se.fromWorkingColorSpace(We.copy(this),t),Math.round(an(We.r*255,0,255))*65536+Math.round(an(We.g*255,0,255))*256+Math.round(an(We.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=ze){se.fromWorkingColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Lr);const n=qa(hi.h,Lr.h,e),s=qa(hi.s,Lr.s,e),r=qa(hi.l,Lr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Lt;Lt.NAMES=C0;let Sd=0;class Si extends Cs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=gr(),this.name="",this.blending=Ms,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Xo&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==El&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tn extends Si{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new $,Dr=new ne;class Ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wl&&(t.usage=this.usage),t}}class I0 extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class P0 extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ed=0;const pn=new Nt,ho=new Le,as=new $,ln=new Yi,qs=new Yi,Ue=new $;class Ge extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(T0(t)?P0:I0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return ho.lookAt(t),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(ln.min,qs.min),ln.expandByPoint(Ue),Ue.addVectors(ln.max,qs.max),ln.expandByPoint(Ue)):(ln.expandByPoint(qs.min),ln.expandByPoint(qs.max))}ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ue.fromBufferAttribute(o,l),c&&(as.fromBufferAttribute(t,l),Ue.add(as)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new $,c[C]=new $;const l=new $,h=new $,u=new $,d=new ne,f=new ne,g=new ne,_=new $,m=new $;function p(C,b,S){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[C].add(_),o[b].add(_),o[S].add(_),c[C].add(m),c[b].add(m),c[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,b=x.length;C<b;++C){const S=x[C],D=S.start,W=S.count;for(let H=D,V=D+W;H<V;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const M=new $,v=new $,w=new $,E=new $;function T(C){w.fromBufferAttribute(s,C),E.copy(w);const b=o[C];M.copy(b),M.sub(w.multiplyScalar(w.dot(b))).normalize(),v.crossVectors(E,b);const D=v.dot(c[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,D)}for(let C=0,b=x.length;C<b;++C){const S=x[C],D=S.start,W=S.count;for(let H=D,V=D+W;H<V;H+=3)T(t.getX(H+0)),T(t.getX(H+1)),T(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new $,r=new $,a=new $,o=new $,c=new $,l=new $,h=new $,u=new $;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Ye(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hl=new Nt,Ai=new Kc,Nr=new $i,Vl=new $,Ur=new $,Or=new $,Fr=new $,uo=new $,kr=new $,Wl=new $,zr=new $;class ue extends Le{constructor(t=new Ge,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(uo.fromBufferAttribute(u,t),a?kr.addScaledVector(uo,h):kr.addScaledVector(uo.sub(e),h))}e.add(kr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(Nr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Nr,Vl)===null||Ai.origin.distanceToSquared(Vl)>(t.far-t.near)**2))&&(Hl.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,w=M;v<w;v+=3){const E=o.getX(v),T=o.getX(v+1),C=o.getX(v+2);s=Br(this,p,t,n,l,h,u,E,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=Br(this,a,t,n,l,h,u,x,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,w=M;v<w;v+=3){const E=v,T=v+1,C=v+2;s=Br(this,p,t,n,l,h,u,E,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,M=m+1,v=m+2;s=Br(this,a,t,n,l,h,u,x,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function wd(i,t,e,n,s,r,a,o){let c;if(t.side===en?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Mi,o),c===null)return null;zr.copy(o),zr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(zr);return l<e.near||l>e.far?null:{distance:l,point:zr.clone(),object:i}}function Br(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Ur),i.getVertexPosition(c,Or),i.getVertexPosition(l,Fr);const h=wd(i,t,e,n,Ur,Or,Fr,Wl);if(h){const u=new $;Pn.getBarycoord(Wl,Ur,Or,Fr,u),s&&(h.uv=Pn.getInterpolatedAttribute(s,o,c,l,u,new ne)),r&&(h.uv1=Pn.getInterpolatedAttribute(r,o,c,l,u,new ne)),a&&(h.normal=Pn.getInterpolatedAttribute(a,o,c,l,u,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new $,materialIndex:0};Pn.getNormal(Ur,Or,Fr,d.normal),h.face=d,h.barycoord=u}return h}class xr extends Ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2));function g(_,m,p,x,M,v,w,E,T,C,b){const S=v/T,D=w/C,W=v/2,H=w/2,V=E/2,nt=T+1,O=C+1;let rt=0,z=0;const tt=new $;for(let J=0;J<O;J++){const at=J*D-H;for(let j=0;j<nt;j++){const wt=j*S-W;tt[_]=wt*x,tt[m]=at*M,tt[p]=V,l.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[p]=E>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(j/T),u.push(1-J/C),rt+=1}}for(let J=0;J<C;J++)for(let at=0;at<T;at++){const j=d+at+nt*J,wt=d+at+nt*(J+1),K=d+(at+1)+nt*(J+1),mt=d+(at+1)+nt*J;c.push(j,wt,mt),c.push(wt,K,mt),z+=6}o.addGroup(f,z,b),f+=z,d+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function As(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Je(i){const t={};for(let e=0;e<i.length;e++){const n=As(i[e]);for(const s in n)t[s]=n[s]}return t}function Td(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function L0(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const Ad={clone:As,merge:Je};var Rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Si{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rd,this.fragmentShader=Cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=Td(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class D0 extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new $,Xl=new ne,ql=new ne;class xn extends D0{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Rc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rc*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,Xl,ql),e.subVectors(ql,Xl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const os=-90,cs=1;class Id extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(os,cs,t,e);s.layers=this.layers,this.add(s);const r=new xn(os,cs,t,e);r.layers=this.layers,this.add(r);const a=new xn(os,cs,t,e);a.layers=this.layers,this.add(a);const o=new xn(os,cs,t,e);o.layers=this.layers,this.add(o);const c=new xn(os,cs,t,e);c.layers=this.layers,this.add(c);const l=new xn(os,cs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class N0 extends Ke{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ss,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pd extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new N0(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xr(5,5,5),r=new vi({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:xi});r.uniforms.tEquirect.value=e;const a=new ue(s,r),o=e.minFilter;return e.minFilter===gi&&(e.minFilter=un),new Id(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const fo=new $,Ld=new $,Dd=new te;class Ni{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=fo.subVectors(n,e).cross(Ld.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dd.getNormalMatrix(t),s=this.coplanarPoint(fo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new $i,Gr=new $;class Zc{constructor(t=new Ni,e=new Ni,n=new Ni,s=new Ni,r=new Ni,a=new Ni){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],x=s[13],M=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,m-f,v-p).normalize(),n[1].setComponents(c+r,d+l,m+f,v+p).normalize(),n[2].setComponents(c+a,d+h,m+g,v+x).normalize(),n[3].setComponents(c-a,d-h,m-g,v-x).normalize(),n[4].setComponents(c-o,d-u,m-_,v-M).normalize(),e===Qn)n[5].setComponents(c+o,d+u,m+_,v+M).normalize();else if(e===Ra)n[5].setComponents(o,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Gr.x=s.normal.x>0?t.max.x:t.min.x,Gr.y=s.normal.y>0?t.max.y:t.min.y,Gr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function U0(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Nd(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Fa extends Ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*d-a;for(let M=0;M<l;M++){const v=M*u-r;g.push(v,-x,0),_.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const M=x+l*p,v=x+l*(p+1),w=x+1+l*(p+1),E=x+1+l*p;f.push(M,v,E),f.push(v,w,E)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fa(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Od=`#ifdef USE_ALPHAHASH
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
#endif`,Fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
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
#endif`,Hd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vd=`#ifdef USE_BATCHING
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
#endif`,Wd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$d=`#ifdef USE_IRIDESCENCE
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
#endif`,Kd=`#ifdef USE_BUMPMAP
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
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rf=`#define PI 3.141592653589793
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
} // validated`,af=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,of=`vec3 transformedNormal = objectNormal;
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
#endif`,cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,df="gl_FragColor = linearToOutputTexel( gl_FragColor );",ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sf=`#ifdef USE_GRADIENTMAP
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
}`,Ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Af=`uniform bool receiveShadow;
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
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Df=`PhysicalMaterial material;
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
#endif`,Nf=`struct PhysicalMaterial {
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
}`,Uf=`
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
#endif`,Of=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xf=`#if defined( USE_POINTS_UV )
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
#endif`,qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`#ifdef USE_MORPHTARGETS
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
#endif`,Jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sp=`#ifdef USE_NORMALMAP
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
#endif`,rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vp=`float getShadowMask() {
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
}`,yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bp=`#ifdef USE_SKINNING
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
#endif`,Sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
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
#endif`,wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cp=`#ifdef USE_TRANSMISSION
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
#endif`,Ip=`#ifdef USE_TRANSMISSION
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Op=`uniform sampler2D t2D;
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`#include <common>
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
}`,Hp=`#if DEPTH_PACKING == 3200
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
}`,Vp=`#define DISTANCE
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
}`,Wp=`#define DISTANCE
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`uniform float scale;
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
}`,$p=`uniform vec3 diffuse;
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
}`,Kp=`#include <common>
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
}`,Zp=`uniform vec3 diffuse;
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
}`,jp=`#define LAMBERT
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
}`,Jp=`#define LAMBERT
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
}`,Qp=`#define MATCAP
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
}`,t1=`#define MATCAP
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
}`,e1=`#define NORMAL
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
}`,n1=`#define NORMAL
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
}`,i1=`#define PHONG
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
}`,s1=`#define PHONG
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
}`,r1=`#define STANDARD
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
}`,a1=`#define STANDARD
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
}`,o1=`#define TOON
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
}`,c1=`#define TOON
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
}`,l1=`uniform float size;
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
}`,h1=`uniform vec3 diffuse;
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
}`,u1=`#include <common>
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
}`,d1=`uniform vec3 color;
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
}`,f1=`uniform float rotation;
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
}`,p1=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:Ud,alphahash_pars_fragment:Od,alphamap_fragment:Fd,alphamap_pars_fragment:kd,alphatest_fragment:zd,alphatest_pars_fragment:Bd,aomap_fragment:Gd,aomap_pars_fragment:Hd,batching_pars_vertex:Vd,batching_vertex:Wd,begin_vertex:Xd,beginnormal_vertex:qd,bsdfs:Yd,iridescence_fragment:$d,bumpmap_pars_fragment:Kd,clipping_planes_fragment:Zd,clipping_planes_pars_fragment:jd,clipping_planes_pars_vertex:Jd,clipping_planes_vertex:Qd,color_fragment:tf,color_pars_fragment:ef,color_pars_vertex:nf,color_vertex:sf,common:rf,cube_uv_reflection_fragment:af,defaultnormal_vertex:of,displacementmap_pars_vertex:cf,displacementmap_vertex:lf,emissivemap_fragment:hf,emissivemap_pars_fragment:uf,colorspace_fragment:df,colorspace_pars_fragment:ff,envmap_fragment:pf,envmap_common_pars_fragment:mf,envmap_pars_fragment:gf,envmap_pars_vertex:xf,envmap_physical_pars_fragment:Rf,envmap_vertex:_f,fog_vertex:Mf,fog_pars_vertex:vf,fog_fragment:yf,fog_pars_fragment:bf,gradientmap_pars_fragment:Sf,lightmap_pars_fragment:Ef,lights_lambert_fragment:wf,lights_lambert_pars_fragment:Tf,lights_pars_begin:Af,lights_toon_fragment:Cf,lights_toon_pars_fragment:If,lights_phong_fragment:Pf,lights_phong_pars_fragment:Lf,lights_physical_fragment:Df,lights_physical_pars_fragment:Nf,lights_fragment_begin:Uf,lights_fragment_maps:Of,lights_fragment_end:Ff,logdepthbuf_fragment:kf,logdepthbuf_pars_fragment:zf,logdepthbuf_pars_vertex:Bf,logdepthbuf_vertex:Gf,map_fragment:Hf,map_pars_fragment:Vf,map_particle_fragment:Wf,map_particle_pars_fragment:Xf,metalnessmap_fragment:qf,metalnessmap_pars_fragment:Yf,morphinstance_vertex:$f,morphcolor_vertex:Kf,morphnormal_vertex:Zf,morphtarget_pars_vertex:jf,morphtarget_vertex:Jf,normal_fragment_begin:Qf,normal_fragment_maps:tp,normal_pars_fragment:ep,normal_pars_vertex:np,normal_vertex:ip,normalmap_pars_fragment:sp,clearcoat_normal_fragment_begin:rp,clearcoat_normal_fragment_maps:ap,clearcoat_pars_fragment:op,iridescence_pars_fragment:cp,opaque_fragment:lp,packing:hp,premultiplied_alpha_fragment:up,project_vertex:dp,dithering_fragment:fp,dithering_pars_fragment:pp,roughnessmap_fragment:mp,roughnessmap_pars_fragment:gp,shadowmap_pars_fragment:xp,shadowmap_pars_vertex:_p,shadowmap_vertex:Mp,shadowmask_pars_fragment:vp,skinbase_vertex:yp,skinning_pars_vertex:bp,skinning_vertex:Sp,skinnormal_vertex:Ep,specularmap_fragment:wp,specularmap_pars_fragment:Tp,tonemapping_fragment:Ap,tonemapping_pars_fragment:Rp,transmission_fragment:Cp,transmission_pars_fragment:Ip,uv_pars_fragment:Pp,uv_pars_vertex:Lp,uv_vertex:Dp,worldpos_vertex:Np,background_vert:Up,background_frag:Op,backgroundCube_vert:Fp,backgroundCube_frag:kp,cube_vert:zp,cube_frag:Bp,depth_vert:Gp,depth_frag:Hp,distanceRGBA_vert:Vp,distanceRGBA_frag:Wp,equirect_vert:Xp,equirect_frag:qp,linedashed_vert:Yp,linedashed_frag:$p,meshbasic_vert:Kp,meshbasic_frag:Zp,meshlambert_vert:jp,meshlambert_frag:Jp,meshmatcap_vert:Qp,meshmatcap_frag:t1,meshnormal_vert:e1,meshnormal_frag:n1,meshphong_vert:i1,meshphong_frag:s1,meshphysical_vert:r1,meshphysical_frag:a1,meshtoon_vert:o1,meshtoon_frag:c1,points_vert:l1,points_frag:h1,shadow_vert:u1,shadow_frag:d1,sprite_vert:f1,sprite_frag:p1},Rt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},On={basic:{uniforms:Je([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Je([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Je([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Je([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Je([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Je([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Je([Rt.points,Rt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Je([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Je([Rt.common,Rt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Je([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Je([Rt.sprite,Rt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Je([Rt.common,Rt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Je([Rt.lights,Rt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};On.physical={uniforms:Je([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Hr={r:0,b:0,g:0},Ci=new Mn,m1=new Nt;function g1(i,t,e,n,s,r,a){const o=new Lt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function _(x){let M=!1;const v=g(x);v===null?p(o,c):v&&v.isColor&&(p(v,1),M=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,M){const v=g(M);v&&(v.isCubeTexture||v.mapping===Ua)?(h===void 0&&(h=new ue(new xr(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:As(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(M.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(m1.makeRotationFromEuler(Ci)),h.material.toneMapped=se.getTransfer(v.colorSpace)!==de,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ue(new Fa(2,2),new vi({name:"BackgroundMaterial",uniforms:As(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=se.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,M){x.getRGB(Hr,L0(i)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),c=M,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:_,addToRenderList:m}}function x1(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,D,W,H,V){let nt=!1;const O=u(H,W,D);r!==O&&(r=O,l(r.object)),nt=f(S,H,W,V),nt&&g(S,H,W,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(nt||a)&&(a=!1,v(S,D,W,H),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,D,W){const H=W.wireframe===!0;let V=n[S.id];V===void 0&&(V={},n[S.id]=V);let nt=V[D.id];nt===void 0&&(nt={},V[D.id]=nt);let O=nt[H];return O===void 0&&(O=d(c()),nt[H]=O),O}function d(S){const D=[],W=[],H=[];for(let V=0;V<e;V++)D[V]=0,W[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:H,object:S,attributes:{},index:null}}function f(S,D,W,H){const V=r.attributes,nt=D.attributes;let O=0;const rt=W.getAttributes();for(const z in rt)if(rt[z].location>=0){const J=V[z];let at=nt[z];if(at===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(at=S.instanceColor)),J===void 0||J.attribute!==at||at&&J.data!==at.data)return!0;O++}return r.attributesNum!==O||r.index!==H}function g(S,D,W,H){const V={},nt=D.attributes;let O=0;const rt=W.getAttributes();for(const z in rt)if(rt[z].location>=0){let J=nt[z];J===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const at={};at.attribute=J,J&&J.data&&(at.data=J.data),V[z]=at,O++}r.attributes=V,r.attributesNum=O,r.index=H}function _(){const S=r.newAttributes;for(let D=0,W=S.length;D<W;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const W=r.newAttributes,H=r.enabledAttributes,V=r.attributeDivisors;W[S]=1,H[S]===0&&(i.enableVertexAttribArray(S),H[S]=1),V[S]!==D&&(i.vertexAttribDivisor(S,D),V[S]=D)}function x(){const S=r.newAttributes,D=r.enabledAttributes;for(let W=0,H=D.length;W<H;W++)D[W]!==S[W]&&(i.disableVertexAttribArray(W),D[W]=0)}function M(S,D,W,H,V,nt,O){O===!0?i.vertexAttribIPointer(S,D,W,V,nt):i.vertexAttribPointer(S,D,W,H,V,nt)}function v(S,D,W,H){_();const V=H.attributes,nt=W.getAttributes(),O=D.defaultAttributeValues;for(const rt in nt){const z=nt[rt];if(z.location>=0){let tt=V[rt];if(tt===void 0&&(rt==="instanceMatrix"&&S.instanceMatrix&&(tt=S.instanceMatrix),rt==="instanceColor"&&S.instanceColor&&(tt=S.instanceColor)),tt!==void 0){const J=tt.normalized,at=tt.itemSize,j=t.get(tt);if(j===void 0)continue;const wt=j.buffer,K=j.type,mt=j.bytesPerElement,St=K===i.INT||K===i.UNSIGNED_INT||tt.gpuType===Bc;if(tt.isInterleavedBufferAttribute){const dt=tt.data,Dt=dt.stride,Ht=tt.offset;if(dt.isInstancedInterleavedBuffer){for(let lt=0;lt<z.locationSize;lt++)p(z.location+lt,dt.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let lt=0;lt<z.locationSize;lt++)m(z.location+lt);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let lt=0;lt<z.locationSize;lt++)M(z.location+lt,at/z.locationSize,K,J,Dt*mt,(Ht+at/z.locationSize*lt)*mt,St)}else{if(tt.isInstancedBufferAttribute){for(let dt=0;dt<z.locationSize;dt++)p(z.location+dt,tt.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let dt=0;dt<z.locationSize;dt++)m(z.location+dt);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let dt=0;dt<z.locationSize;dt++)M(z.location+dt,at/z.locationSize,K,J,at*mt,at/z.locationSize*dt*mt,St)}}else if(O!==void 0){const J=O[rt];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(z.location,J);break;case 3:i.vertexAttrib3fv(z.location,J);break;case 4:i.vertexAttrib4fv(z.location,J);break;default:i.vertexAttrib1fv(z.location,J)}}}}x()}function w(){C();for(const S in n){const D=n[S];for(const W in D){const H=D[W];for(const V in H)h(H[V].object),delete H[V];delete D[W]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const W in D){const H=D[W];for(const V in H)h(H[V].object),delete H[V];delete D[W]}delete n[S.id]}function T(S){for(const D in n){const W=n[D];if(W[S.id]===void 0)continue;const H=W[S.id];for(const V in H)h(H[V].object),delete H[V];delete W[S.id]}}function C(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function _1(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function M1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Ln&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===mr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ni&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Fn&&!C)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:w,maxSamples:E}}function v1(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Ni,o=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,M=x*4;let v=p.clippingState||null;c.value=v,v=h(g,d,M,f);for(let w=0;w!==M;++w)v[w]=e[w];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==_;++M,v+=4)a.copy(u[M]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function y1(i){let t=new WeakMap;function e(a,o){return o===Qo?a.mapping=Ss:o===tc&&(a.mapping=Es),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qo||o===tc)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Pd(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class O0 extends D0{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const xs=4,Yl=[.125,.215,.35,.446,.526,.582],Fi=20,po=new O0,$l=new Lt;let mo=null,go=0,xo=0,_o=!1;const Ui=(1+Math.sqrt(5))/2,ls=1/Ui,Kl=[new $(-Ui,ls,0),new $(Ui,ls,0),new $(-ls,0,Ui),new $(ls,0,Ui),new $(0,Ui,-ls),new $(0,Ui,ls),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Zl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),_o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mo,go,xo),this._renderer.xr.enabled=_o,t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),_o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:mr,format:Ln,colorSpace:Rs,depthBuffer:!1},s=jl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b1(r)),this._blurMaterial=S1(r,t,e)}return s}_compileMaterial(t){const e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,po)}_sceneToCubeUV(t,e,n,s){const o=new xn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor($l),h.toneMapping=_i,h.autoClear=!1;const f=new tn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new ue(new xr,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy($l),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const M=this._cubeSize;Vr(s,x*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ss||t.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ue(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Vr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,po)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Kl[(s-r-1)%Kl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ue(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);const p=[];let x=0;for(let T=0;T<Fi;++T){const C=T/_,b=Math.exp(-C*C/2);p.push(b),T===0?x+=b:T<m&&(x+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const v=this._sizeLods[s],w=3*v*(s>M-xs?s-M+xs:0),E=4*(this._cubeSize-v);Vr(e,w,E,3*v,2*v),c.setRenderTarget(e),c.render(u,po)}}function b1(i){const t=[],e=[],n=[];let s=i;const r=i-xs+1+Yl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-xs?c=Yl[a-i+xs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),M=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,C=E>2?0:-1,b=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];x.set(b,_*g*E),M.set(d,m*g*E);const S=[E,E,E,E,E,E];v.set(S,p*g*E)}const w=new Ge;w.setAttribute("position",new Ye(x,_)),w.setAttribute("uv",new Ye(M,m)),w.setAttribute("faceIndex",new Ye(v,p)),t.push(w),s>xs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jl(i,t,e){const n=new Vi(i,t,e);return n.texture.mapping=Ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function S1(i,t,e){const n=new Float32Array(Fi),s=new $(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Jl(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Ql(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}function E1(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Qo||c===tc,h=c===Ss||c===Es;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Zl(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Zl(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function w1(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&or("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function T1(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let M=0,v=x.length;M<v;M+=3){const w=x[M+0],E=x[M+1],T=x[M+2];d.push(w,E,E,T,T,w)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const w=M+0,E=M+1,T=M+2;d.push(w,E,E,T,T,w)}}else return;const m=new(T0(d)?P0:I0)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function A1(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function R1(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function C1(i,t,e){const n=new WeakMap,s=new Re;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let v=o.attributes.position.count*M,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const E=new Float32Array(v*w*4*u),T=new $c(E,v,w,u);T.type=Fn,T.needsUpdate=!0;const C=M*4;for(let S=0;S<u;S++){const D=m[S],W=p[S],H=x[S],V=v*w*4*S;for(let nt=0;nt<D.count;nt++){const O=nt*C;f===!0&&(s.fromBufferAttribute(D,nt),E[V+O+0]=s.x,E[V+O+1]=s.y,E[V+O+2]=s.z,E[V+O+3]=0),g===!0&&(s.fromBufferAttribute(W,nt),E[V+O+4]=s.x,E[V+O+5]=s.y,E[V+O+6]=s.z,E[V+O+7]=0),_===!0&&(s.fromBufferAttribute(H,nt),E[V+O+8]=s.x,E[V+O+9]=s.y,E[V+O+10]=s.z,E[V+O+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new ne(v,w)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function I1(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class F0 extends Ke{constructor(t,e,n,s,r,a,o,c,l,h=vs){if(h!==vs&&h!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vs&&(n=Hi),n===void 0&&h===Ts&&(n=ws),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:$e,this.minFilter=c!==void 0?c:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const k0=new Ke,th=new F0(1,1),z0=new $c,B0=new md,G0=new N0,eh=[],nh=[],ih=new Float32Array(16),sh=new Float32Array(9),rh=new Float32Array(4);function Ps(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=eh[s];if(r===void 0&&(r=new Float32Array(s),eh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ka(i,t){let e=nh[t];e===void 0&&(e=new Int32Array(t),nh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function P1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function L1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function D1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function N1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function U1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;rh.set(n),i.uniformMatrix2fv(this.addr,!1,rh),Ne(e,n)}}function O1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;sh.set(n),i.uniformMatrix3fv(this.addr,!1,sh),Ne(e,n)}}function F1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;ih.set(n),i.uniformMatrix4fv(this.addr,!1,ih),Ne(e,n)}}function k1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function z1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function B1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function G1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function H1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function V1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function W1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function X1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function q1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(th.compareFunction=w0,r=th):r=k0,e.setTexture2D(t||r,s)}function Y1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||B0,s)}function $1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||G0,s)}function K1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||z0,s)}function Z1(i){switch(i){case 5126:return P1;case 35664:return L1;case 35665:return D1;case 35666:return N1;case 35674:return U1;case 35675:return O1;case 35676:return F1;case 5124:case 35670:return k1;case 35667:case 35671:return z1;case 35668:case 35672:return B1;case 35669:case 35673:return G1;case 5125:return H1;case 36294:return V1;case 36295:return W1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return K1}}function j1(i,t){i.uniform1fv(this.addr,t)}function J1(i,t){const e=Ps(t,this.size,2);i.uniform2fv(this.addr,e)}function Q1(i,t){const e=Ps(t,this.size,3);i.uniform3fv(this.addr,e)}function tm(i,t){const e=Ps(t,this.size,4);i.uniform4fv(this.addr,e)}function em(i,t){const e=Ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function nm(i,t){const e=Ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function im(i,t){const e=Ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sm(i,t){i.uniform1iv(this.addr,t)}function rm(i,t){i.uniform2iv(this.addr,t)}function am(i,t){i.uniform3iv(this.addr,t)}function om(i,t){i.uniform4iv(this.addr,t)}function cm(i,t){i.uniform1uiv(this.addr,t)}function lm(i,t){i.uniform2uiv(this.addr,t)}function hm(i,t){i.uniform3uiv(this.addr,t)}function um(i,t){i.uniform4uiv(this.addr,t)}function dm(i,t,e){const n=this.cache,s=t.length,r=ka(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||k0,r[a])}function fm(i,t,e){const n=this.cache,s=t.length,r=ka(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||B0,r[a])}function pm(i,t,e){const n=this.cache,s=t.length,r=ka(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||G0,r[a])}function mm(i,t,e){const n=this.cache,s=t.length,r=ka(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||z0,r[a])}function gm(i){switch(i){case 5126:return j1;case 35664:return J1;case 35665:return Q1;case 35666:return tm;case 35674:return em;case 35675:return nm;case 35676:return im;case 5124:case 35670:return sm;case 35667:case 35671:return rm;case 35668:case 35672:return am;case 35669:case 35673:return om;case 5125:return cm;case 36294:return lm;case 36295:return hm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}class xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Z1(e.type)}}class _m{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gm(e.type)}}class Mm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function ah(i,t){i.seq.push(t),i.map[t.id]=t}function vm(i,t,e){const n=i.name,s=n.length;for(Mo.lastIndex=0;;){const r=Mo.exec(n),a=Mo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ah(e,l===void 0?new xm(o,i,t):new _m(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Mm(o),ah(e,u)),e=u}}}class Ea{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);vm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function oh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ym=37297;let bm=0;function Sm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ch=new te;function Em(i){se._getMatrix(ch,se.workingColorSpace,i);const t=`mat3( ${ch.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case Oa:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function lh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Sm(i.getShaderSource(t),a)}else return s}function wm(i,t){const e=Em(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Tm(i,t){let e;switch(t){case Vu:e="Linear";break;case Wu:e="Reinhard";break;case Xu:e="Cineon";break;case qu:e="ACESFilmic";break;case $u:e="AgX";break;case Ku:e="Neutral";break;case Yu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Wr=new $;function Am(){se.getLuminanceCoefficients(Wr);const i=Wr.x.toFixed(4),t=Wr.y.toFixed(4),e=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function Cm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Im(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function cr(i){return i!==""}function hh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(i){return i.replace(Pm,Dm)}const Lm=new Map;function Dm(i,t){let e=ee[t];if(e===void 0){const n=Lm.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cc(e)}const Nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(i){return i.replace(Nm,Um)}function Um(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Om(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===f0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Fm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ss:case Es:t="ENVMAP_TYPE_CUBE";break;case Ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function km(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Es:t="ENVMAP_MODE_REFRACTION";break}return t}function zm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Na:t="ENVMAP_BLENDING_MULTIPLY";break;case Gu:t="ENVMAP_BLENDING_MIX";break;case Hu:t="ENVMAP_BLENDING_ADD";break}return t}function Bm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Gm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Om(e),l=Fm(e),h=km(e),u=zm(e),d=Bm(e),f=Rm(e),g=Cm(r),_=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),p.length>0&&(p+=`
`)):(m=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),p=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?ee.tonemapping_pars_fragment:"",e.toneMapping!==_i?Tm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,wm("linearToOutputTexel",e.outputColorSpace),Am(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),a=Cc(a),a=hh(a,e),a=uh(a,e),o=Cc(o),o=hh(o,e),o=uh(o,e),a=dh(a),o=dh(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+a,v=x+p+o,w=oh(s,s.VERTEX_SHADER,M),E=oh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,w),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(D){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(w).trim(),V=s.getShaderInfoLog(E).trim();let nt=!0,O=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,E);else{const rt=lh(s,w,"vertex"),z=lh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+rt+`
`+z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||V==="")&&(O=!1);O&&(D.diagnostics={runnable:nt,programLog:W,vertexShader:{log:H,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(w),s.deleteShader(E),C=new Ea(s,_),b=Im(s,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,ym)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=E,this}let Hm=0;class Vm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Wm(t),e.set(t,n)),n}}class Wm{constructor(t){this.id=Hm++,this.code=t,this.usedTimes=0}}function Xm(i,t,e,n,s,r,a){const o=new R0,c=new Vm,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,W,H){const V=W.fog,nt=H.geometry,O=b.isMeshStandardMaterial?W.environment:null,rt=(b.isMeshStandardMaterial?e:t).get(b.envMap||O),z=rt&&rt.mapping===Ua?rt.image.height:null,tt=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const J=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,at=J!==void 0?J.length:0;let j=0;nt.morphAttributes.position!==void 0&&(j=1),nt.morphAttributes.normal!==void 0&&(j=2),nt.morphAttributes.color!==void 0&&(j=3);let wt,K,mt,St;if(tt){const he=On[tt];wt=he.vertexShader,K=he.fragmentShader}else wt=b.vertexShader,K=b.fragmentShader,c.update(b),mt=c.getVertexShaderID(b),St=c.getFragmentShaderID(b);const dt=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),Ht=H.isInstancedMesh===!0,lt=H.isBatchedMesh===!0,Pt=!!b.map,pt=!!b.matcap,Zt=!!rt,N=!!b.aoMap,He=!!b.lightMap,Yt=!!b.bumpMap,Jt=!!b.normalMap,Wt=!!b.displacementMap,re=!!b.emissiveMap,Ft=!!b.metalnessMap,P=!!b.roughnessMap,A=b.anisotropy>0,Q=b.clearcoat>0,y=b.dispersion>0,L=b.iridescence>0,I=b.sheen>0,F=b.transmission>0,B=A&&!!b.anisotropyMap,k=Q&&!!b.clearcoatMap,gt=Q&&!!b.clearcoatNormalMap,G=Q&&!!b.clearcoatRoughnessMap,ct=L&&!!b.iridescenceMap,Mt=L&&!!b.iridescenceThicknessMap,vt=I&&!!b.sheenColorMap,ft=I&&!!b.sheenRoughnessMap,It=!!b.specularMap,kt=!!b.specularColorMap,Tt=!!b.specularIntensityMap,U=F&&!!b.transmissionMap,_t=F&&!!b.thicknessMap,et=!!b.gradientMap,ht=!!b.alphaMap,yt=b.alphaTest>0,bt=!!b.alphaHash,Xt=!!b.extensions;let Se=_i;b.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Se=i.toneMapping);const Ae={shaderID:tt,shaderType:b.type,shaderName:b.name,vertexShader:wt,fragmentShader:K,defines:b.defines,customVertexShaderID:mt,customFragmentShaderID:St,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:lt,batchingColor:lt&&H._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&H.instanceColor!==null,instancingMorph:Ht&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Rs,alphaToCoverage:!!b.alphaToCoverage,map:Pt,matcap:pt,envMap:Zt,envMapMode:Zt&&rt.mapping,envMapCubeUVHeight:z,aoMap:N,lightMap:He,bumpMap:Yt,normalMap:Jt,displacementMap:d&&Wt,emissiveMap:re,normalMapObjectSpace:Jt&&b.normalMapType===Ju,normalMapTangentSpace:Jt&&b.normalMapType===Yc,metalnessMap:Ft,roughnessMap:P,anisotropy:A,anisotropyMap:B,clearcoat:Q,clearcoatMap:k,clearcoatNormalMap:gt,clearcoatRoughnessMap:G,dispersion:y,iridescence:L,iridescenceMap:ct,iridescenceThicknessMap:Mt,sheen:I,sheenColorMap:vt,sheenRoughnessMap:ft,specularMap:It,specularColorMap:kt,specularIntensityMap:Tt,transmission:F,transmissionMap:U,thicknessMap:_t,gradientMap:et,opaque:b.transparent===!1&&b.blending===Ms&&b.alphaToCoverage===!1,alphaMap:ht,alphaTest:yt,alphaHash:bt,combine:b.combine,mapUv:Pt&&_(b.map.channel),aoMapUv:N&&_(b.aoMap.channel),lightMapUv:He&&_(b.lightMap.channel),bumpMapUv:Yt&&_(b.bumpMap.channel),normalMapUv:Jt&&_(b.normalMap.channel),displacementMapUv:Wt&&_(b.displacementMap.channel),emissiveMapUv:re&&_(b.emissiveMap.channel),metalnessMapUv:Ft&&_(b.metalnessMap.channel),roughnessMapUv:P&&_(b.roughnessMap.channel),anisotropyMapUv:B&&_(b.anisotropyMap.channel),clearcoatMapUv:k&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:gt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:ft&&_(b.sheenRoughnessMap.channel),specularMapUv:It&&_(b.specularMap.channel),specularColorMapUv:kt&&_(b.specularColorMap.channel),specularIntensityMapUv:Tt&&_(b.specularIntensityMap.channel),transmissionMapUv:U&&_(b.transmissionMap.channel),thicknessMapUv:_t&&_(b.thicknessMap.channel),alphaMapUv:ht&&_(b.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(Jt||A),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!nt.attributes.uv&&(Pt||ht),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Dt,skinning:H.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:j,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:Pt&&b.map.isVideoTexture===!0&&se.getTransfer(b.map.colorSpace)===de,decodeVideoTextureEmissive:re&&b.emissiveMap.isVideoTexture===!0&&se.getTransfer(b.emissiveMap.colorSpace)===de,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fe,flipSided:b.side===en,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Xt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&b.extensions.multiDraw===!0||lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(x(S,b),M(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function x(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const S=g[b.type];let D;if(S){const W=On[S];D=Ad.clone(W.uniforms)}else D=b.uniforms;return D}function w(b,S){let D;for(let W=0,H=h.length;W<H;W++){const V=h[W];if(V.cacheKey===S){D=V,++D.usedTimes;break}}return D===void 0&&(D=new Gm(i,S,b,r),h.push(D)),D}function E(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function T(b){c.remove(b)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:C}}function qm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ym(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ph(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Ym),n.length>1&&n.sort(d||ph),s.length>1&&s.sort(d||ph)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function $m(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new mh,i.set(n,[a])):s>=r.length?(a=new mh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Km(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new Lt};break;case"SpotLight":e={position:new $,direction:new $,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function Zm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let jm=0;function Jm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Qm(i){const t=new Km,e=Zm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new $);const s=new $,r=new Nt,a=new Nt;function o(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,M=0,v=0,w=0,E=0,T=0;l.sort(Jm);for(let b=0,S=l.length;b<S;b++){const D=l[b],W=D.color,H=D.intensity,V=D.distance,nt=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=W.r*H,u+=W.g*H,d+=W.b*H;else if(D.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(D.sh.coefficients[O],H);T++}else if(D.isDirectionalLight){const O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const rt=D.shadow,z=e.get(D);z.shadowIntensity=rt.intensity,z.shadowBias=rt.bias,z.shadowNormalBias=rt.normalBias,z.shadowRadius=rt.radius,z.shadowMapSize=rt.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=nt,n.directionalShadowMatrix[f]=D.shadow.matrix,x++}n.directional[f]=O,f++}else if(D.isSpotLight){const O=t.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(W).multiplyScalar(H),O.distance=V,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,n.spot[_]=O;const rt=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,rt.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[_]=rt.matrix,D.castShadow){const z=e.get(D);z.shadowIntensity=rt.intensity,z.shadowBias=rt.bias,z.shadowNormalBias=rt.normalBias,z.shadowRadius=rt.radius,z.shadowMapSize=rt.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=nt,v++}_++}else if(D.isRectAreaLight){const O=t.get(D);O.color.copy(W).multiplyScalar(H),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=O,m++}else if(D.isPointLight){const O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){const rt=D.shadow,z=e.get(D);z.shadowIntensity=rt.intensity,z.shadowBias=rt.bias,z.shadowNormalBias=rt.normalBias,z.shadowRadius=rt.radius,z.shadowMapSize=rt.mapSize,z.shadowCameraNear=rt.camera.near,z.shadowCameraFar=rt.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=nt,n.pointShadowMatrix[g]=D.shadow.matrix,M++}n.point[g]=O,g++}else if(D.isHemisphereLight){const O=t.get(D);O.skyColor.copy(D.color).multiplyScalar(H),O.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[p]=O,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==w||C.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=w,C.numLightProbes=T,n.version=jm++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const M=l[p];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function gh(i){const t=new Qm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function tg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new gh(i),t.set(s,[o])):r>=a.length?(o=new gh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class eg extends Si{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ng extends Si{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ig=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sg=`uniform sampler2D shadow_pass;
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
}`;function rg(i,t,e){let n=new Zc;const s=new ne,r=new ne,a=new Re,o=new eg({depthPacking:ju}),c=new ng,l={},h=e.maxTextureSize,u={[Mi]:en,[en]:Mi,[fe]:fe},d=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:ig,fragmentShader:sg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ge;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ue(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f0;let p=this.type;this.render=function(E,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),W=i.state;W.setBlending(xi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=p!==Zn&&this.type===Zn,V=p===Zn&&this.type!==Zn;for(let nt=0,O=E.length;nt<O;nt++){const rt=E[nt],z=rt.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const tt=z.getFrameExtents();if(s.multiply(tt),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,z.mapSize.y=r.y)),z.map===null||H===!0||V===!0){const at=this.type!==Zn?{minFilter:$e,magFilter:$e}:{};z.map!==null&&z.map.dispose(),z.map=new Vi(s.x,s.y,at),z.map.texture.name=rt.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const J=z.getViewportCount();for(let at=0;at<J;at++){const j=z.getViewport(at);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),W.viewport(a),z.updateMatrices(rt,at),n=z.getFrustum(),v(T,C,z.camera,rt,this.type)}z.isPointLightShadow!==!0&&this.type===Zn&&x(z,C),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,D)};function x(E,T){const C=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Vi(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,C,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,C,f,_,null)}function M(E,T,C,b){let S=null;const D=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)S=D;else if(S=C.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const W=S.uuid,H=T.uuid;let V=l[W];V===void 0&&(V={},l[W]=V);let nt=V[H];nt===void 0&&(nt=S.clone(),V[H]=nt,T.addEventListener("dispose",w)),S=nt}if(S.visible=T.visible,S.wireframe=T.wireframe,b===Zn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=i.properties.get(S);W.light=C}return S}function v(E,T,C,b,S){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Zn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const H=t.update(E),V=E.material;if(Array.isArray(V)){const nt=H.groups;for(let O=0,rt=nt.length;O<rt;O++){const z=nt[O],tt=V[z.materialIndex];if(tt&&tt.visible){const J=M(E,tt,b,S);E.onBeforeShadow(i,E,T,C,H,J,z),i.renderBufferDirect(C,null,H,J,E,z),E.onAfterShadow(i,E,T,C,H,J,z)}}}else if(V.visible){const nt=M(E,V,b,S);E.onBeforeShadow(i,E,T,C,H,nt,null),i.renderBufferDirect(C,null,H,nt,E,null),E.onAfterShadow(i,E,T,C,H,nt,null)}}const W=E.children;for(let H=0,V=W.length;H<V;H++)v(W[H],T,C,b,S)}function w(E){E.target.removeEventListener("dispose",w);for(const C in l){const b=l[C],S=E.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const ag={[qo]:Yo,[$o]:jo,[Ko]:Jo,[bs]:Zo,[Yo]:qo,[jo]:$o,[Jo]:Ko,[Zo]:bs};function og(i,t){function e(){let U=!1;const _t=new Re;let et=null;const ht=new Re(0,0,0,0);return{setMask:function(yt){et!==yt&&!U&&(i.colorMask(yt,yt,yt,yt),et=yt)},setLocked:function(yt){U=yt},setClear:function(yt,bt,Xt,Se,Ae){Ae===!0&&(yt*=Se,bt*=Se,Xt*=Se),_t.set(yt,bt,Xt,Se),ht.equals(_t)===!1&&(i.clearColor(yt,bt,Xt,Se),ht.copy(_t))},reset:function(){U=!1,et=null,ht.set(-1,0,0,0)}}}function n(){let U=!1,_t=!1,et=null,ht=null,yt=null;return{setReversed:function(bt){if(_t!==bt){const Xt=t.get("EXT_clip_control");_t?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const Se=yt;yt=null,this.setClear(Se)}_t=bt},getReversed:function(){return _t},setTest:function(bt){bt?dt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(bt){et!==bt&&!U&&(i.depthMask(bt),et=bt)},setFunc:function(bt){if(_t&&(bt=ag[bt]),ht!==bt){switch(bt){case qo:i.depthFunc(i.NEVER);break;case Yo:i.depthFunc(i.ALWAYS);break;case $o:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case Ko:i.depthFunc(i.EQUAL);break;case Zo:i.depthFunc(i.GEQUAL);break;case jo:i.depthFunc(i.GREATER);break;case Jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=bt}},setLocked:function(bt){U=bt},setClear:function(bt){yt!==bt&&(_t&&(bt=1-bt),i.clearDepth(bt),yt=bt)},reset:function(){U=!1,et=null,ht=null,yt=null,_t=!1}}}function s(){let U=!1,_t=null,et=null,ht=null,yt=null,bt=null,Xt=null,Se=null,Ae=null;return{setTest:function(he){U||(he?dt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(he){_t!==he&&!U&&(i.stencilMask(he),_t=he)},setFunc:function(he,yn,Bn){(et!==he||ht!==yn||yt!==Bn)&&(i.stencilFunc(he,yn,Bn),et=he,ht=yn,yt=Bn)},setOp:function(he,yn,Bn){(bt!==he||Xt!==yn||Se!==Bn)&&(i.stencilOp(he,yn,Bn),bt=he,Xt=yn,Se=Bn)},setLocked:function(he){U=he},setClear:function(he){Ae!==he&&(i.clearStencil(he),Ae=he)},reset:function(){U=!1,_t=null,et=null,ht=null,yt=null,bt=null,Xt=null,Se=null,Ae=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,M=null,v=null,w=null,E=null,T=new Lt(0,0,0),C=0,b=!1,S=null,D=null,W=null,H=null,V=null;const nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,rt=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=rt>=1):z.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=rt>=2);let tt=null,J={};const at=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),wt=new Re().fromArray(at),K=new Re().fromArray(j);function mt(U,_t,et,ht){const yt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(U,bt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<et;Xt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(_t+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return bt}const St={};St[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(i.DEPTH_TEST),a.setFunc(bs),Yt(!1),Jt(yl),dt(i.CULL_FACE),N(xi);function dt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Dt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ht(U,_t){return u[U]!==_t?(i.bindFramebuffer(U,_t),u[U]=_t,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_t),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function lt(U,_t){let et=f,ht=!1;if(U){et=d.get(_t),et===void 0&&(et=[],d.set(_t,et));const yt=U.textures;if(et.length!==yt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Xt=yt.length;bt<Xt;bt++)et[bt]=i.COLOR_ATTACHMENT0+bt;et.length=yt.length,ht=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,ht=!0);ht&&i.drawBuffers(et)}function Pt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const pt={[Oi]:i.FUNC_ADD,[Eu]:i.FUNC_SUBTRACT,[wu]:i.FUNC_REVERSE_SUBTRACT};pt[Tu]=i.MIN,pt[Au]=i.MAX;const Zt={[Ru]:i.ZERO,[Cu]:i.ONE,[Iu]:i.SRC_COLOR,[Wo]:i.SRC_ALPHA,[Ou]:i.SRC_ALPHA_SATURATE,[Nu]:i.DST_COLOR,[Lu]:i.DST_ALPHA,[Pu]:i.ONE_MINUS_SRC_COLOR,[Xo]:i.ONE_MINUS_SRC_ALPHA,[Uu]:i.ONE_MINUS_DST_COLOR,[Du]:i.ONE_MINUS_DST_ALPHA,[Fu]:i.CONSTANT_COLOR,[ku]:i.ONE_MINUS_CONSTANT_COLOR,[zu]:i.CONSTANT_ALPHA,[Bu]:i.ONE_MINUS_CONSTANT_ALPHA};function N(U,_t,et,ht,yt,bt,Xt,Se,Ae,he){if(U===xi){_===!0&&(Dt(i.BLEND),_=!1);return}if(_===!1&&(dt(i.BLEND),_=!0),U!==Su){if(U!==m||he!==b){if((p!==Oi||v!==Oi)&&(i.blendEquation(i.FUNC_ADD),p=Oi,v=Oi),he)switch(U){case Ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ta:i.blendFunc(i.ONE,i.ONE);break;case bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ta:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,M=null,w=null,E=null,T.set(0,0,0),C=0,m=U,b=he}return}yt=yt||_t,bt=bt||et,Xt=Xt||ht,(_t!==p||yt!==v)&&(i.blendEquationSeparate(pt[_t],pt[yt]),p=_t,v=yt),(et!==x||ht!==M||bt!==w||Xt!==E)&&(i.blendFuncSeparate(Zt[et],Zt[ht],Zt[bt],Zt[Xt]),x=et,M=ht,w=bt,E=Xt),(Se.equals(T)===!1||Ae!==C)&&(i.blendColor(Se.r,Se.g,Se.b,Ae),T.copy(Se),C=Ae),m=U,b=!1}function He(U,_t){U.side===fe?Dt(i.CULL_FACE):dt(i.CULL_FACE);let et=U.side===en;_t&&(et=!et),Yt(et),U.blending===Ms&&U.transparent===!1?N(xi):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const ht=U.stencilWrite;o.setTest(ht),ht&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),re(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function Jt(U){U!==vu?(dt(i.CULL_FACE),U!==D&&(U===yl?i.cullFace(i.BACK):U===yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),D=U}function Wt(U){U!==W&&(O&&i.lineWidth(U),W=U)}function re(U,_t,et){U?(dt(i.POLYGON_OFFSET_FILL),(H!==_t||V!==et)&&(i.polygonOffset(_t,et),H=_t,V=et)):Dt(i.POLYGON_OFFSET_FILL)}function Ft(U){U?dt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function P(U){U===void 0&&(U=i.TEXTURE0+nt-1),tt!==U&&(i.activeTexture(U),tt=U)}function A(U,_t,et){et===void 0&&(tt===null?et=i.TEXTURE0+nt-1:et=tt);let ht=J[et];ht===void 0&&(ht={type:void 0,texture:void 0},J[et]=ht),(ht.type!==U||ht.texture!==_t)&&(tt!==et&&(i.activeTexture(et),tt=et),i.bindTexture(U,_t||St[U]),ht.type=U,ht.texture=_t)}function Q(){const U=J[tt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function F(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(U){wt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),wt.copy(U))}function ft(U){K.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),K.copy(U))}function It(U,_t){let et=l.get(_t);et===void 0&&(et=new WeakMap,l.set(_t,et));let ht=et.get(U);ht===void 0&&(ht=i.getUniformBlockIndex(_t,U.name),et.set(U,ht))}function kt(U,_t){const ht=l.get(_t).get(U);c.get(_t)!==ht&&(i.uniformBlockBinding(_t,ht,U.__bindingPointIndex),c.set(_t,ht))}function Tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},tt=null,J={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,M=null,v=null,w=null,E=null,T=new Lt(0,0,0),C=0,b=!1,S=null,D=null,W=null,H=null,V=null,wt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:Dt,bindFramebuffer:Ht,drawBuffers:lt,useProgram:Pt,setBlending:N,setMaterial:He,setFlipSided:Yt,setCullFace:Jt,setLineWidth:Wt,setPolygonOffset:re,setScissorTest:Ft,activeTexture:P,bindTexture:A,unbindTexture:Q,compressedTexImage2D:y,compressedTexImage3D:L,texImage2D:ct,texImage3D:Mt,updateUBOMapping:It,uniformBlockBinding:kt,texStorage2D:gt,texStorage3D:G,texSubImage2D:I,texSubImage3D:F,compressedTexSubImage2D:B,compressedTexSubImage3D:k,scissor:vt,viewport:ft,reset:Tt}}function xh(i,t,e,n){const s=cg(n);switch(e){case M0:return i*t;case y0:return i*t;case b0:return i*t*2;case Vc:return i*t/s.components*s.byteLength;case Wc:return i*t/s.components*s.byteLength;case S0:return i*t*2/s.components*s.byteLength;case Xc:return i*t*2/s.components*s.byteLength;case v0:return i*t*3/s.components*s.byteLength;case Ln:return i*t*4/s.components*s.byteLength;case qc:return i*t*4/s.components*s.byteLength;case Ma:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ya:case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:case rc:return Math.max(i,16)*Math.max(t,8)/4;case nc:case sc:return Math.max(i,8)*Math.max(t,8)/2;case ac:case oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case mc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case vc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Sa:case Sc:case Ec:return Math.ceil(i/4)*Math.ceil(t/4)*16;case E0:case wc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Tc:case Ac:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cg(i){switch(i){case ni:case g0:return{byteLength:1,components:1};case fr:case x0:case mr:return{byteLength:2,components:1};case Gc:case Hc:return{byteLength:2,components:4};case Hi:case Bc:case Fn:return{byteLength:4,components:1};case _0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function lg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ne,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,A){return f?new OffscreenCanvas(P,A):Ca("canvas")}function _(P,A,Q){let y=1;const L=Ft(P);if((L.width>Q||L.height>Q)&&(y=Q/Math.max(L.width,L.height)),y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const I=Math.floor(y*L.width),F=Math.floor(y*L.height);u===void 0&&(u=g(I,F));const B=A?g(I,F):u;return B.width=I,B.height=F,B.getContext("2d").drawImage(P,0,0,I,F),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+I+"x"+F+")."),B}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(P,A,Q,y,L=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let I=A;if(A===i.RED&&(Q===i.FLOAT&&(I=i.R32F),Q===i.HALF_FLOAT&&(I=i.R16F),Q===i.UNSIGNED_BYTE&&(I=i.R8)),A===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(I=i.R8UI),Q===i.UNSIGNED_SHORT&&(I=i.R16UI),Q===i.UNSIGNED_INT&&(I=i.R32UI),Q===i.BYTE&&(I=i.R8I),Q===i.SHORT&&(I=i.R16I),Q===i.INT&&(I=i.R32I)),A===i.RG&&(Q===i.FLOAT&&(I=i.RG32F),Q===i.HALF_FLOAT&&(I=i.RG16F),Q===i.UNSIGNED_BYTE&&(I=i.RG8)),A===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(I=i.RG8UI),Q===i.UNSIGNED_SHORT&&(I=i.RG16UI),Q===i.UNSIGNED_INT&&(I=i.RG32UI),Q===i.BYTE&&(I=i.RG8I),Q===i.SHORT&&(I=i.RG16I),Q===i.INT&&(I=i.RG32I)),A===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(I=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(I=i.RGB16UI),Q===i.UNSIGNED_INT&&(I=i.RGB32UI),Q===i.BYTE&&(I=i.RGB8I),Q===i.SHORT&&(I=i.RGB16I),Q===i.INT&&(I=i.RGB32I)),A===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(I=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(I=i.RGBA16UI),Q===i.UNSIGNED_INT&&(I=i.RGBA32UI),Q===i.BYTE&&(I=i.RGBA8I),Q===i.SHORT&&(I=i.RGBA16I),Q===i.INT&&(I=i.RGBA32I)),A===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(I=i.RGB9_E5),A===i.RGBA){const F=L?Oa:se.getTransfer(y);Q===i.FLOAT&&(I=i.RGBA32F),Q===i.HALF_FLOAT&&(I=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(I=F===de?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(I=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(I=i.RGB5_A1)}return(I===i.R16F||I===i.R32F||I===i.RG16F||I===i.RG32F||I===i.RGBA16F||I===i.RGBA32F)&&t.get("EXT_color_buffer_float"),I}function v(P,A){let Q;return P?A===null||A===Hi||A===ws?Q=i.DEPTH24_STENCIL8:A===Fn?Q=i.DEPTH32F_STENCIL8:A===fr&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Hi||A===ws?Q=i.DEPTH_COMPONENT24:A===Fn?Q=i.DEPTH_COMPONENT32F:A===fr&&(Q=i.DEPTH_COMPONENT16),Q}function w(P,A){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==$e&&P.minFilter!==un?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function E(P){const A=P.target;A.removeEventListener("dispose",E),C(A),A.isVideoTexture&&h.delete(A)}function T(P){const A=P.target;A.removeEventListener("dispose",T),S(A)}function C(P){const A=n.get(P);if(A.__webglInit===void 0)return;const Q=P.source,y=d.get(Q);if(y){const L=y[A.__cacheKey];L.usedTimes--,L.usedTimes===0&&b(P),Object.keys(y).length===0&&d.delete(Q)}n.remove(P)}function b(P){const A=n.get(P);i.deleteTexture(A.__webglTexture);const Q=P.source,y=d.get(Q);delete y[A.__cacheKey],a.memory.textures--}function S(P){const A=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let y=0;y<6;y++){if(Array.isArray(A.__webglFramebuffer[y]))for(let L=0;L<A.__webglFramebuffer[y].length;L++)i.deleteFramebuffer(A.__webglFramebuffer[y][L]);else i.deleteFramebuffer(A.__webglFramebuffer[y]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[y])}else{if(Array.isArray(A.__webglFramebuffer))for(let y=0;y<A.__webglFramebuffer.length;y++)i.deleteFramebuffer(A.__webglFramebuffer[y]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let y=0;y<A.__webglColorRenderbuffer.length;y++)A.__webglColorRenderbuffer[y]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[y]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Q=P.textures;for(let y=0,L=Q.length;y<L;y++){const I=n.get(Q[y]);I.__webglTexture&&(i.deleteTexture(I.__webglTexture),a.memory.textures--),n.remove(Q[y])}n.remove(P)}let D=0;function W(){D=0}function H(){const P=D;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function V(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function nt(P,A){const Q=n.get(P);if(P.isVideoTexture&&Wt(P),P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){const y=P.image;if(y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Q,P,A);return}}e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+A)}function O(P,A){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){K(Q,P,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+A)}function rt(P,A){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){K(Q,P,A);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+A)}function z(P,A){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){mt(Q,P,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+A)}const tt={[Aa]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[ec]:i.MIRRORED_REPEAT},J={[$e]:i.NEAREST,[m0]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Wa]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},at={[Qu]:i.NEVER,[rd]:i.ALWAYS,[td]:i.LESS,[w0]:i.LEQUAL,[ed]:i.EQUAL,[sd]:i.GEQUAL,[nd]:i.GREATER,[id]:i.NOTEQUAL};function j(P,A){if(A.type===Fn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===un||A.magFilter===Wa||A.magFilter===Er||A.magFilter===gi||A.minFilter===un||A.minFilter===Wa||A.minFilter===Er||A.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,tt[A.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,tt[A.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,tt[A.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,J[A.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,J[A.minFilter]),A.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,at[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===$e||A.minFilter!==Er&&A.minFilter!==gi||A.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function wt(P,A){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",E));const y=A.source;let L=d.get(y);L===void 0&&(L={},d.set(y,L));const I=V(A);if(I!==P.__cacheKey){L[I]===void 0&&(L[I]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),L[I].usedTimes++;const F=L[P.__cacheKey];F!==void 0&&(L[P.__cacheKey].usedTimes--,F.usedTimes===0&&b(A)),P.__cacheKey=I,P.__webglTexture=L[I].texture}return Q}function K(P,A,Q){let y=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(y=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(y=i.TEXTURE_3D);const L=wt(P,A),I=A.source;e.bindTexture(y,P.__webglTexture,i.TEXTURE0+Q);const F=n.get(I);if(I.version!==F.__version||L===!0){e.activeTexture(i.TEXTURE0+Q);const B=se.getPrimaries(se.workingColorSpace),k=A.colorSpace===jn?null:se.getPrimaries(A.colorSpace),gt=A.colorSpace===jn||B===k?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let G=_(A.image,!1,s.maxTextureSize);G=re(A,G);const ct=r.convert(A.format,A.colorSpace),Mt=r.convert(A.type);let vt=M(A.internalFormat,ct,Mt,A.colorSpace,A.isVideoTexture);j(y,A);let ft;const It=A.mipmaps,kt=A.isVideoTexture!==!0,Tt=F.__version===void 0||L===!0,U=I.dataReady,_t=w(A,G);if(A.isDepthTexture)vt=v(A.format===Ts,A.type),Tt&&(kt?e.texStorage2D(i.TEXTURE_2D,1,vt,G.width,G.height):e.texImage2D(i.TEXTURE_2D,0,vt,G.width,G.height,0,ct,Mt,null));else if(A.isDataTexture)if(It.length>0){kt&&Tt&&e.texStorage2D(i.TEXTURE_2D,_t,vt,It[0].width,It[0].height);for(let et=0,ht=It.length;et<ht;et++)ft=It[et],kt?U&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ft.width,ft.height,ct,Mt,ft.data):e.texImage2D(i.TEXTURE_2D,et,vt,ft.width,ft.height,0,ct,Mt,ft.data);A.generateMipmaps=!1}else kt?(Tt&&e.texStorage2D(i.TEXTURE_2D,_t,vt,G.width,G.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,G.width,G.height,ct,Mt,G.data)):e.texImage2D(i.TEXTURE_2D,0,vt,G.width,G.height,0,ct,Mt,G.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){kt&&Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,vt,It[0].width,It[0].height,G.depth);for(let et=0,ht=It.length;et<ht;et++)if(ft=It[et],A.format!==Ln)if(ct!==null)if(kt){if(U)if(A.layerUpdates.size>0){const yt=xh(ft.width,ft.height,A.format,A.type);for(const bt of A.layerUpdates){const Xt=ft.data.subarray(bt*yt/ft.data.BYTES_PER_ELEMENT,(bt+1)*yt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,bt,ft.width,ft.height,1,ct,Xt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,ft.width,ft.height,G.depth,ct,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,vt,ft.width,ft.height,G.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,ft.width,ft.height,G.depth,ct,Mt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,vt,ft.width,ft.height,G.depth,0,ct,Mt,ft.data)}else{kt&&Tt&&e.texStorage2D(i.TEXTURE_2D,_t,vt,It[0].width,It[0].height);for(let et=0,ht=It.length;et<ht;et++)ft=It[et],A.format!==Ln?ct!==null?kt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,ft.width,ft.height,ct,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,et,vt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?U&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ft.width,ft.height,ct,Mt,ft.data):e.texImage2D(i.TEXTURE_2D,et,vt,ft.width,ft.height,0,ct,Mt,ft.data)}else if(A.isDataArrayTexture)if(kt){if(Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,vt,G.width,G.height,G.depth),U)if(A.layerUpdates.size>0){const et=xh(G.width,G.height,A.format,A.type);for(const ht of A.layerUpdates){const yt=G.data.subarray(ht*et/G.data.BYTES_PER_ELEMENT,(ht+1)*et/G.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,G.width,G.height,1,ct,Mt,yt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,ct,Mt,G.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,G.width,G.height,G.depth,0,ct,Mt,G.data);else if(A.isData3DTexture)kt?(Tt&&e.texStorage3D(i.TEXTURE_3D,_t,vt,G.width,G.height,G.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,ct,Mt,G.data)):e.texImage3D(i.TEXTURE_3D,0,vt,G.width,G.height,G.depth,0,ct,Mt,G.data);else if(A.isFramebufferTexture){if(Tt)if(kt)e.texStorage2D(i.TEXTURE_2D,_t,vt,G.width,G.height);else{let et=G.width,ht=G.height;for(let yt=0;yt<_t;yt++)e.texImage2D(i.TEXTURE_2D,yt,vt,et,ht,0,ct,Mt,null),et>>=1,ht>>=1}}else if(It.length>0){if(kt&&Tt){const et=Ft(It[0]);e.texStorage2D(i.TEXTURE_2D,_t,vt,et.width,et.height)}for(let et=0,ht=It.length;et<ht;et++)ft=It[et],kt?U&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ct,Mt,ft):e.texImage2D(i.TEXTURE_2D,et,vt,ct,Mt,ft);A.generateMipmaps=!1}else if(kt){if(Tt){const et=Ft(G);e.texStorage2D(i.TEXTURE_2D,_t,vt,et.width,et.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,Mt,G)}else e.texImage2D(i.TEXTURE_2D,0,vt,ct,Mt,G);m(A)&&p(y),F.__version=I.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function mt(P,A,Q){if(A.image.length!==6)return;const y=wt(P,A),L=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Q);const I=n.get(L);if(L.version!==I.__version||y===!0){e.activeTexture(i.TEXTURE0+Q);const F=se.getPrimaries(se.workingColorSpace),B=A.colorSpace===jn?null:se.getPrimaries(A.colorSpace),k=A.colorSpace===jn||F===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);const gt=A.isCompressedTexture||A.image[0].isCompressedTexture,G=A.image[0]&&A.image[0].isDataTexture,ct=[];for(let ht=0;ht<6;ht++)!gt&&!G?ct[ht]=_(A.image[ht],!0,s.maxCubemapSize):ct[ht]=G?A.image[ht].image:A.image[ht],ct[ht]=re(A,ct[ht]);const Mt=ct[0],vt=r.convert(A.format,A.colorSpace),ft=r.convert(A.type),It=M(A.internalFormat,vt,ft,A.colorSpace),kt=A.isVideoTexture!==!0,Tt=I.__version===void 0||y===!0,U=L.dataReady;let _t=w(A,Mt);j(i.TEXTURE_CUBE_MAP,A);let et;if(gt){kt&&Tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,It,Mt.width,Mt.height);for(let ht=0;ht<6;ht++){et=ct[ht].mipmaps;for(let yt=0;yt<et.length;yt++){const bt=et[yt];A.format!==Ln?vt!==null?kt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,yt,0,0,bt.width,bt.height,vt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,yt,It,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,yt,0,0,bt.width,bt.height,vt,ft,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,yt,It,bt.width,bt.height,0,vt,ft,bt.data)}}}else{if(et=A.mipmaps,kt&&Tt){et.length>0&&_t++;const ht=Ft(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,It,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(G){kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,ct[ht].width,ct[ht].height,vt,ft,ct[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,It,ct[ht].width,ct[ht].height,0,vt,ft,ct[ht].data);for(let yt=0;yt<et.length;yt++){const Xt=et[yt].image[ht].image;kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,yt+1,0,0,Xt.width,Xt.height,vt,ft,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,yt+1,It,Xt.width,Xt.height,0,vt,ft,Xt.data)}}else{kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,vt,ft,ct[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,It,vt,ft,ct[ht]);for(let yt=0;yt<et.length;yt++){const bt=et[yt];kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,yt+1,0,0,vt,ft,bt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,yt+1,It,vt,ft,bt.image[ht])}}}m(A)&&p(i.TEXTURE_CUBE_MAP),I.__version=L.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function St(P,A,Q,y,L,I){const F=r.convert(Q.format,Q.colorSpace),B=r.convert(Q.type),k=M(Q.internalFormat,F,B,Q.colorSpace),gt=n.get(A),G=n.get(Q);if(G.__renderTarget=A,!gt.__hasExternalTextures){const ct=Math.max(1,A.width>>I),Mt=Math.max(1,A.height>>I);L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?e.texImage3D(L,I,k,ct,Mt,A.depth,0,F,B,null):e.texImage2D(L,I,k,ct,Mt,0,F,B,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Jt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,y,L,G.__webglTexture,0,Yt(A)):(L===i.TEXTURE_2D||L>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,y,L,G.__webglTexture,I),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(P,A,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),A.depthBuffer){const y=A.depthTexture,L=y&&y.isDepthTexture?y.type:null,I=v(A.stencilBuffer,L),F=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=Yt(A);Jt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B,I,A.width,A.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,B,I,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,I,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,P)}else{const y=A.textures;for(let L=0;L<y.length;L++){const I=y[L],F=r.convert(I.format,I.colorSpace),B=r.convert(I.type),k=M(I.internalFormat,F,B,I.colorSpace),gt=Yt(A);Q&&Jt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,k,A.width,A.height):Jt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,k,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,k,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const y=n.get(A.depthTexture);y.__renderTarget=A,(!y.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),nt(A.depthTexture,0);const L=y.__webglTexture,I=Yt(A);if(A.depthTexture.format===vs)Jt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,L,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,L,0);else if(A.depthTexture.format===Ts)Jt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,L,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,L,0);else throw new Error("Unknown depthTexture format")}function Ht(P){const A=n.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const y=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),y){const L=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,y.removeEventListener("dispose",L)};y.addEventListener("dispose",L),A.__depthDisposeCallback=L}A.__boundDepthTexture=y}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Dt(A.__webglFramebuffer,P)}else if(Q){A.__webglDepthbuffer=[];for(let y=0;y<6;y++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[y]),A.__webglDepthbuffer[y]===void 0)A.__webglDepthbuffer[y]=i.createRenderbuffer(),dt(A.__webglDepthbuffer[y],P,!1);else{const L=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=A.__webglDepthbuffer[y];i.bindRenderbuffer(i.RENDERBUFFER,I),i.framebufferRenderbuffer(i.FRAMEBUFFER,L,i.RENDERBUFFER,I)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),dt(A.__webglDepthbuffer,P,!1);else{const y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,L),i.framebufferRenderbuffer(i.FRAMEBUFFER,y,i.RENDERBUFFER,L)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(P,A,Q){const y=n.get(P);A!==void 0&&St(y.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&Ht(P)}function Pt(P){const A=P.texture,Q=n.get(P),y=n.get(A);P.addEventListener("dispose",T);const L=P.textures,I=P.isWebGLCubeRenderTarget===!0,F=L.length>1;if(F||(y.__webglTexture===void 0&&(y.__webglTexture=i.createTexture()),y.__version=A.version,a.memory.textures++),I){Q.__webglFramebuffer=[];for(let B=0;B<6;B++)if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[B]=[];for(let k=0;k<A.mipmaps.length;k++)Q.__webglFramebuffer[B][k]=i.createFramebuffer()}else Q.__webglFramebuffer[B]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let B=0;B<A.mipmaps.length;B++)Q.__webglFramebuffer[B]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(F)for(let B=0,k=L.length;B<k;B++){const gt=n.get(L[B]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Jt(P)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let B=0;B<L.length;B++){const k=L[B];Q.__webglColorRenderbuffer[B]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[B]);const gt=r.convert(k.format,k.colorSpace),G=r.convert(k.type),ct=M(k.internalFormat,gt,G,k.colorSpace,P.isXRRenderTarget===!0),Mt=Yt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,ct,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,Q.__webglColorRenderbuffer[B])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(Q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(I){e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture),j(i.TEXTURE_CUBE_MAP,A);for(let B=0;B<6;B++)if(A.mipmaps&&A.mipmaps.length>0)for(let k=0;k<A.mipmaps.length;k++)St(Q.__webglFramebuffer[B][k],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,k);else St(Q.__webglFramebuffer[B],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);m(A)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(F){for(let B=0,k=L.length;B<k;B++){const gt=L[B],G=n.get(gt);e.bindTexture(i.TEXTURE_2D,G.__webglTexture),j(i.TEXTURE_2D,gt),St(Q.__webglFramebuffer,P,gt,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,0),m(gt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let B=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(B=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(B,y.__webglTexture),j(B,A),A.mipmaps&&A.mipmaps.length>0)for(let k=0;k<A.mipmaps.length;k++)St(Q.__webglFramebuffer[k],P,A,i.COLOR_ATTACHMENT0,B,k);else St(Q.__webglFramebuffer,P,A,i.COLOR_ATTACHMENT0,B,0);m(A)&&p(B),e.unbindTexture()}P.depthBuffer&&Ht(P)}function pt(P){const A=P.textures;for(let Q=0,y=A.length;Q<y;Q++){const L=A[Q];if(m(L)){const I=x(P),F=n.get(L).__webglTexture;e.bindTexture(I,F),p(I),e.unbindTexture()}}}const Zt=[],N=[];function He(P){if(P.samples>0){if(Jt(P)===!1){const A=P.textures,Q=P.width,y=P.height;let L=i.COLOR_BUFFER_BIT;const I=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=n.get(P),B=A.length>1;if(B)for(let k=0;k<A.length;k++)e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,F.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,F.__webglFramebuffer);for(let k=0;k<A.length;k++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(L|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(L|=i.STENCIL_BUFFER_BIT)),B){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,F.__webglColorRenderbuffer[k]);const gt=n.get(A[k]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,gt,0)}i.blitFramebuffer(0,0,Q,y,0,0,Q,y,L,i.NEAREST),c===!0&&(Zt.length=0,N.length=0,Zt.push(i.COLOR_ATTACHMENT0+k),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Zt.push(I),N.push(I),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),B)for(let k=0;k<A.length;k++){e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,F.__webglColorRenderbuffer[k]);const gt=n.get(A[k]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.TEXTURE_2D,gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,F.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const A=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Yt(P){return Math.min(s.maxSamples,P.samples)}function Jt(P){const A=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Wt(P){const A=a.render.frame;h.get(P)!==A&&(h.set(P,A),P.update())}function re(P,A){const Q=P.colorSpace,y=P.format,L=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==Rs&&Q!==jn&&(se.getTransfer(Q)===de?(y!==Ln||L!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),A}function Ft(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=nt,this.setTexture2DArray=O,this.setTexture3D=rt,this.setTextureCube=z,this.rebindTextures=lt,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Jt}function hg(i,t){function e(n,s=jn){let r;const a=se.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===Gc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===g0)return i.BYTE;if(n===x0)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===Bc)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===mr)return i.HALF_FLOAT;if(n===M0)return i.ALPHA;if(n===v0)return i.RGB;if(n===Ln)return i.RGBA;if(n===y0)return i.LUMINANCE;if(n===b0)return i.LUMINANCE_ALPHA;if(n===vs)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===Vc)return i.RED;if(n===Wc)return i.RED_INTEGER;if(n===S0)return i.RG;if(n===Xc)return i.RG_INTEGER;if(n===qc)return i.RGBA_INTEGER;if(n===Ma||n===va||n===ya||n===ba)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ac||n===oc||n===cc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ac||n===oc)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===_c||n===Mc||n===vc||n===yc||n===bc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_c)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sa||n===Sc||n===Ec)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Sa)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===E0||n===wc||n===Tc||n===Ac)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class ug extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _n extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dg={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const fg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pg=`
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

}`;class mg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vi({vertexShader:fg,fragmentShader:pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new Fa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gg extends Cs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new mg,m=e.getContextAttributes();let p=null,x=null;const M=[],v=[],w=new ne;let E=null;const T=new xn;T.viewport=new Re;const C=new xn;C.viewport=new Re;const b=[T,C],S=new ug;let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let mt=M[K];return mt===void 0&&(mt=new vo,M[K]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(K){let mt=M[K];return mt===void 0&&(mt=new vo,M[K]=mt),mt.getGripSpace()},this.getHand=function(K){let mt=M[K];return mt===void 0&&(mt=new vo,M[K]=mt),mt.getHandSpace()};function H(K){const mt=v.indexOf(K.inputSource);if(mt===-1)return;const St=M[mt];St!==void 0&&(St.update(K.inputSource,K.frame,l||a),St.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",nt);for(let K=0;K<M.length;K++){const mt=v[K];mt!==null&&(v[K]=null,M[K].disconnect(mt))}D=null,W=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,x=null,wt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",V),s.addEventListener("inputsourceschange",nt),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0){const mt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Vi(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let mt=null,St=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=m.stencil?Ts:vs,St=m.stencil?ws:Hi);const Dt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Vi(d.textureWidth,d.textureHeight,{format:Ln,type:ni,depthTexture:new F0(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),wt.setContext(s),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function nt(K){for(let mt=0;mt<K.removed.length;mt++){const St=K.removed[mt],dt=v.indexOf(St);dt>=0&&(v[dt]=null,M[dt].disconnect(St))}for(let mt=0;mt<K.added.length;mt++){const St=K.added[mt];let dt=v.indexOf(St);if(dt===-1){for(let Ht=0;Ht<M.length;Ht++)if(Ht>=v.length){v.push(St),dt=Ht;break}else if(v[Ht]===null){v[Ht]=St,dt=Ht;break}if(dt===-1)break}const Dt=M[dt];Dt&&Dt.connect(St)}}const O=new $,rt=new $;function z(K,mt,St){O.setFromMatrixPosition(mt.matrixWorld),rt.setFromMatrixPosition(St.matrixWorld);const dt=O.distanceTo(rt),Dt=mt.projectionMatrix.elements,Ht=St.projectionMatrix.elements,lt=Dt[14]/(Dt[10]-1),Pt=Dt[14]/(Dt[10]+1),pt=(Dt[9]+1)/Dt[5],Zt=(Dt[9]-1)/Dt[5],N=(Dt[8]-1)/Dt[0],He=(Ht[8]+1)/Ht[0],Yt=lt*N,Jt=lt*He,Wt=dt/(-N+He),re=Wt*-N;if(mt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(re),K.translateZ(Wt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Dt[10]===-1)K.projectionMatrix.copy(mt.projectionMatrix),K.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Ft=lt+Wt,P=Pt+Wt,A=Yt-re,Q=Jt+(dt-re),y=pt*Pt/P*Ft,L=Zt*Pt/P*Ft;K.projectionMatrix.makePerspective(A,Q,y,L,Ft,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function tt(K,mt){mt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(mt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let mt=K.near,St=K.far;_.texture!==null&&(_.depthNear>0&&(mt=_.depthNear),_.depthFar>0&&(St=_.depthFar)),S.near=C.near=T.near=mt,S.far=C.far=T.far=St,(D!==S.near||W!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,W=S.far),T.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,S.layers.mask=T.layers.mask|C.layers.mask;const dt=K.parent,Dt=S.cameras;tt(S,dt);for(let Ht=0;Ht<Dt.length;Ht++)tt(Dt[Ht],dt);Dt.length===2?z(S,T,C):S.projectionMatrix.copy(T.projectionMatrix),J(K,S,dt)};function J(K,mt,St){St===null?K.matrix.copy(mt.matrixWorld):(K.matrix.copy(St.matrixWorld),K.matrix.invert(),K.matrix.multiply(mt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(mt.projectionMatrix),K.projectionMatrixInverse.copy(mt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Rc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let at=null;function j(K,mt){if(h=mt.getViewerPose(l||a),g=mt,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let dt=!1;St.length!==S.cameras.length&&(S.cameras.length=0,dt=!0);for(let Ht=0;Ht<St.length;Ht++){const lt=St[Ht];let Pt=null;if(f!==null)Pt=f.getViewport(lt);else{const Zt=u.getViewSubImage(d,lt);Pt=Zt.viewport,Ht===0&&(t.setRenderTargetTextures(x,Zt.colorTexture,d.ignoreDepthValues?void 0:Zt.depthStencilTexture),t.setRenderTarget(x))}let pt=b[Ht];pt===void 0&&(pt=new xn,pt.layers.enable(Ht),pt.viewport=new Re,b[Ht]=pt),pt.matrix.fromArray(lt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(lt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),Ht===0&&(S.matrix.copy(pt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),dt===!0&&S.cameras.push(pt)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Ht=u.getDepthInformation(St[0]);Ht&&Ht.isValid&&Ht.texture&&_.init(t,Ht,s.renderState)}}for(let St=0;St<M.length;St++){const dt=v[St],Dt=M[St];dt!==null&&Dt!==void 0&&Dt.update(dt,mt,l||a)}at&&at(K,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),g=null}const wt=new U0;wt.setAnimationLoop(j),this.setAnimationLoop=function(K){at=K},this.dispose=function(){}}}const Ii=new Mn,xg=new Nt;function _g(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,L0(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,Ii.copy(v),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(xg.makeRotationFromEuler(Ii)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function l(x,M){let v=s[x.id];v===void 0&&(g(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",m));const w=M.program;n.updateUBOMapping(x,w);const E=t.render.frame;r[x.id]!==E&&(d(x),r[x.id]=E)}function h(x){const M=u();x.__bindingPointIndex=M;const v=i.createBuffer(),w=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=s[x.id],v=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,T=v.length;E<T;E++){const C=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,S=C.length;b<S;b++){const D=C[b];if(f(D,E,b,w)===!0){const W=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let nt=0;nt<H.length;nt++){const O=H[nt],rt=_(O);typeof O=="number"||typeof O=="boolean"?(D.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,W+V,D.__data)):O.isMatrix3?(D.__data[0]=O.elements[0],D.__data[1]=O.elements[1],D.__data[2]=O.elements[2],D.__data[3]=0,D.__data[4]=O.elements[3],D.__data[5]=O.elements[4],D.__data[6]=O.elements[5],D.__data[7]=0,D.__data[8]=O.elements[6],D.__data[9]=O.elements[7],D.__data[10]=O.elements[8],D.__data[11]=0):(O.toArray(D.__data,V),V+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,v,w){const E=x.value,T=M+"_"+v;if(w[T]===void 0)return typeof E=="number"||typeof E=="boolean"?w[T]=E:w[T]=E.clone(),!0;{const C=w[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return w[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(x){const M=x.uniforms;let v=0;const w=16;for(let T=0,C=M.length;T<C;T++){const b=Array.isArray(M[T])?M[T]:[M[T]];for(let S=0,D=b.length;S<D;S++){const W=b[S],H=Array.isArray(W.value)?W.value:[W.value];for(let V=0,nt=H.length;V<nt;V++){const O=H[V],rt=_(O),z=v%w,tt=z%rt.boundary,J=z+tt;v+=tt,J!==0&&w-J<rt.storage&&(v+=w-J),W.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=rt.storage}}}const E=v%w;return E>0&&(v+=w-E),x.__size=v,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class vg{constructor(t={}){const{canvas:e=od(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=_i,this.toneMappingExposure=1;const v=this;let w=!1,E=0,T=0,C=null,b=-1,S=null;const D=new Re,W=new Re;let H=null;const V=new Lt(0);let nt=0,O=e.width,rt=e.height,z=1,tt=null,J=null;const at=new Re(0,0,O,rt),j=new Re(0,0,O,rt);let wt=!1;const K=new Zc;let mt=!1,St=!1;const dt=new Nt,Dt=new Nt,Ht=new $,lt=new Re,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Zt(){return C===null?z:1}let N=n;function He(R,X){return e.getContext(R,X)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zc}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),N===null){const X="webgl2";if(N=He(X,R),N===null)throw He(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Yt,Jt,Wt,re,Ft,P,A,Q,y,L,I,F,B,k,gt,G,ct,Mt,vt,ft,It,kt,Tt,U;function _t(){Yt=new w1(N),Yt.init(),kt=new hg(N,Yt),Jt=new M1(N,Yt,t,kt),Wt=new og(N,Yt),Jt.reverseDepthBuffer&&d&&Wt.buffers.depth.setReversed(!0),re=new R1(N),Ft=new qm,P=new lg(N,Yt,Wt,Ft,Jt,kt,re),A=new y1(v),Q=new E1(v),y=new Nd(N),Tt=new x1(N,y),L=new T1(N,y,re,Tt),I=new I1(N,L,y,re),vt=new C1(N,Jt,P),G=new v1(Ft),F=new Xm(v,A,Q,Yt,Jt,Tt,G),B=new _g(v,Ft),k=new $m,gt=new tg(Yt),Mt=new g1(v,A,Q,Wt,I,f,c),ct=new rg(v,I,Jt),U=new Mg(N,re,Jt,Wt),ft=new _1(N,Yt,re),It=new A1(N,Yt,re),re.programs=F.programs,v.capabilities=Jt,v.extensions=Yt,v.properties=Ft,v.renderLists=k,v.shadowMap=ct,v.state=Wt,v.info=re}_t();const et=new gg(v,N);this.xr=et,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=Yt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Yt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(O,rt,!1))},this.getSize=function(R){return R.set(O,rt)},this.setSize=function(R,X,it=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,rt=X,e.width=Math.floor(R*z),e.height=Math.floor(X*z),it===!0&&(e.style.width=R+"px",e.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(O*z,rt*z).floor()},this.setDrawingBufferSize=function(R,X,it){O=R,rt=X,z=it,e.width=Math.floor(R*it),e.height=Math.floor(X*it),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(at)},this.setViewport=function(R,X,it,st){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,X,it,st),Wt.viewport(D.copy(at).multiplyScalar(z).round())},this.getScissor=function(R){return R.copy(j)},this.setScissor=function(R,X,it,st){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,X,it,st),Wt.scissor(W.copy(j).multiplyScalar(z).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(R){Wt.setScissorTest(wt=R)},this.setOpaqueSort=function(R){tt=R},this.setTransparentSort=function(R){J=R},this.getClearColor=function(R){return R.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(R=!0,X=!0,it=!0){let st=0;if(R){let Y=!1;if(C!==null){const Et=C.texture.format;Y=Et===qc||Et===Xc||Et===Wc}if(Y){const Et=C.texture.type,Ct=Et===ni||Et===Hi||Et===fr||Et===ws||Et===Gc||Et===Hc,zt=Mt.getClearColor(),Bt=Mt.getClearAlpha(),Kt=zt.r,Qt=zt.g,Gt=zt.b;Ct?(g[0]=Kt,g[1]=Qt,g[2]=Gt,g[3]=Bt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Kt,_[1]=Qt,_[2]=Gt,_[3]=Bt,N.clearBufferiv(N.COLOR,0,_))}else st|=N.COLOR_BUFFER_BIT}X&&(st|=N.DEPTH_BUFFER_BIT),it&&(st|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),k.dispose(),gt.dispose(),Ft.dispose(),A.dispose(),Q.dispose(),I.dispose(),Tt.dispose(),U.dispose(),F.dispose(),et.dispose(),et.removeEventListener("sessionstart",fl),et.removeEventListener("sessionend",pl),Ei.stop()};function ht(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const R=re.autoReset,X=ct.enabled,it=ct.autoUpdate,st=ct.needsUpdate,Y=ct.type;_t(),re.autoReset=R,ct.enabled=X,ct.autoUpdate=it,ct.needsUpdate=st,ct.type=Y}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Xt(R){const X=R.target;X.removeEventListener("dispose",Xt),Se(X)}function Se(R){Ae(R),Ft.remove(R)}function Ae(R){const X=Ft.get(R).programs;X!==void 0&&(X.forEach(function(it){F.releaseProgram(it)}),R.isShaderMaterial&&F.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,it,st,Y,Et){X===null&&(X=Pt);const Ct=Y.isMesh&&Y.matrixWorld.determinant()<0,zt=xu(R,X,it,st,Y);Wt.setMaterial(st,Ct);let Bt=it.index,Kt=1;if(st.wireframe===!0){if(Bt=L.getWireframeAttribute(it),Bt===void 0)return;Kt=2}const Qt=it.drawRange,Gt=it.attributes.position;let ae=Qt.start*Kt,xe=(Qt.start+Qt.count)*Kt;Et!==null&&(ae=Math.max(ae,Et.start*Kt),xe=Math.min(xe,(Et.start+Et.count)*Kt)),Bt!==null?(ae=Math.max(ae,0),xe=Math.min(xe,Bt.count)):Gt!=null&&(ae=Math.max(ae,0),xe=Math.min(xe,Gt.count));const ve=xe-ae;if(ve<0||ve===1/0)return;Tt.setup(Y,st,zt,it,Bt);let sn,ce=ft;if(Bt!==null&&(sn=y.get(Bt),ce=It,ce.setIndex(sn)),Y.isMesh)st.wireframe===!0?(Wt.setLineWidth(st.wireframeLinewidth*Zt()),ce.setMode(N.LINES)):ce.setMode(N.TRIANGLES);else if(Y.isLine){let Vt=st.linewidth;Vt===void 0&&(Vt=1),Wt.setLineWidth(Vt*Zt()),Y.isLineSegments?ce.setMode(N.LINES):Y.isLineLoop?ce.setMode(N.LINE_LOOP):ce.setMode(N.LINE_STRIP)}else Y.isPoints?ce.setMode(N.POINTS):Y.isSprite&&ce.setMode(N.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ce.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))ce.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Vt=Y._multiDrawStarts,Gn=Y._multiDrawCounts,le=Y._multiDrawCount,bn=Bt?y.get(Bt).bytesPerElement:1,Ki=Ft.get(st).currentProgram.getUniforms();for(let on=0;on<le;on++)Ki.setValue(N,"_gl_DrawID",on),ce.render(Vt[on]/bn,Gn[on])}else if(Y.isInstancedMesh)ce.renderInstances(ae,ve,Y.count);else if(it.isInstancedBufferGeometry){const Vt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Gn=Math.min(it.instanceCount,Vt);ce.renderInstances(ae,ve,Gn)}else ce.render(ae,ve)};function he(R,X,it){R.transparent===!0&&R.side===fe&&R.forceSinglePass===!1?(R.side=en,R.needsUpdate=!0,Sr(R,X,it),R.side=Mi,R.needsUpdate=!0,Sr(R,X,it),R.side=fe):Sr(R,X,it)}this.compile=function(R,X,it=null){it===null&&(it=R),p=gt.get(it),p.init(X),M.push(p),it.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),R!==it&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();const st=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Et=Y.material;if(Et)if(Array.isArray(Et))for(let Ct=0;Ct<Et.length;Ct++){const zt=Et[Ct];he(zt,it,Y),st.add(zt)}else he(Et,it,Y),st.add(Et)}),M.pop(),p=null,st},this.compileAsync=function(R,X,it=null){const st=this.compile(R,X,it);return new Promise(Y=>{function Et(){if(st.forEach(function(Ct){Ft.get(Ct).currentProgram.isReady()&&st.delete(Ct)}),st.size===0){Y(R);return}setTimeout(Et,10)}Yt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let yn=null;function Bn(R){yn&&yn(R)}function fl(){Ei.stop()}function pl(){Ei.start()}const Ei=new U0;Ei.setAnimationLoop(Bn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(R){yn=R,et.setAnimationLoop(R),R===null?Ei.stop():Ei.start()},et.addEventListener("sessionstart",fl),et.addEventListener("sessionend",pl),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(X),X=et.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,X,C),p=gt.get(R,M.length),p.init(X),M.push(p),Dt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),K.setFromProjectionMatrix(Dt),St=this.localClippingEnabled,mt=G.init(this.clippingPlanes,St),m=k.get(R,x.length),m.init(),x.push(m),et.enabled===!0&&et.isPresenting===!0){const Et=v.xr.getDepthSensingMesh();Et!==null&&Va(Et,X,-1/0,v.sortObjects)}Va(R,X,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(tt,J),pt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,pt&&Mt.addToRenderList(m,R),this.info.render.frame++,mt===!0&&G.beginShadows();const it=p.state.shadowsArray;ct.render(it,R,X),mt===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=m.opaque,Y=m.transmissive;if(p.setupLights(),X.isArrayCamera){const Et=X.cameras;if(Y.length>0)for(let Ct=0,zt=Et.length;Ct<zt;Ct++){const Bt=Et[Ct];gl(st,Y,R,Bt)}pt&&Mt.render(R);for(let Ct=0,zt=Et.length;Ct<zt;Ct++){const Bt=Et[Ct];ml(m,R,Bt,Bt.viewport)}}else Y.length>0&&gl(st,Y,R,X),pt&&Mt.render(R),ml(m,R,X);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,X),Tt.resetDefaultState(),b=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],mt===!0&&G.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Va(R,X,it,st){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)it=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){st&&lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Dt);const Ct=I.update(R),zt=R.material;zt.visible&&m.push(R,Ct,zt,it,lt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const Ct=I.update(R),zt=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),lt.copy(R.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),lt.copy(Ct.boundingSphere.center)),lt.applyMatrix4(R.matrixWorld).applyMatrix4(Dt)),Array.isArray(zt)){const Bt=Ct.groups;for(let Kt=0,Qt=Bt.length;Kt<Qt;Kt++){const Gt=Bt[Kt],ae=zt[Gt.materialIndex];ae&&ae.visible&&m.push(R,Ct,ae,it,lt.z,Gt)}}else zt.visible&&m.push(R,Ct,zt,it,lt.z,null)}}const Et=R.children;for(let Ct=0,zt=Et.length;Ct<zt;Ct++)Va(Et[Ct],X,it,st)}function ml(R,X,it,st){const Y=R.opaque,Et=R.transmissive,Ct=R.transparent;p.setupLightsView(it),mt===!0&&G.setGlobalState(v.clippingPlanes,it),st&&Wt.viewport(D.copy(st)),Y.length>0&&br(Y,X,it),Et.length>0&&br(Et,X,it),Ct.length>0&&br(Ct,X,it),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function gl(R,X,it,st){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[st.id]===void 0&&(p.state.transmissionRenderTarget[st.id]=new Vi(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?mr:ni,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const Et=p.state.transmissionRenderTarget[st.id],Ct=st.viewport||D;Et.setSize(Ct.z,Ct.w);const zt=v.getRenderTarget();v.setRenderTarget(Et),v.getClearColor(V),nt=v.getClearAlpha(),nt<1&&v.setClearColor(16777215,.5),v.clear(),pt&&Mt.render(it);const Bt=v.toneMapping;v.toneMapping=_i;const Kt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),p.setupLightsView(st),mt===!0&&G.setGlobalState(v.clippingPlanes,st),br(R,it,st),P.updateMultisampleRenderTarget(Et),P.updateRenderTargetMipmap(Et),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Gt=0,ae=X.length;Gt<ae;Gt++){const xe=X[Gt],ve=xe.object,sn=xe.geometry,ce=xe.material,Vt=xe.group;if(ce.side===fe&&ve.layers.test(st.layers)){const Gn=ce.side;ce.side=en,ce.needsUpdate=!0,xl(ve,it,st,sn,ce,Vt),ce.side=Gn,ce.needsUpdate=!0,Qt=!0}}Qt===!0&&(P.updateMultisampleRenderTarget(Et),P.updateRenderTargetMipmap(Et))}v.setRenderTarget(zt),v.setClearColor(V,nt),Kt!==void 0&&(st.viewport=Kt),v.toneMapping=Bt}function br(R,X,it){const st=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Et=R.length;Y<Et;Y++){const Ct=R[Y],zt=Ct.object,Bt=Ct.geometry,Kt=st===null?Ct.material:st,Qt=Ct.group;zt.layers.test(it.layers)&&xl(zt,X,it,Bt,Kt,Qt)}}function xl(R,X,it,st,Y,Et){R.onBeforeRender(v,X,it,st,Y,Et),R.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(v,X,it,st,R,Et),Y.transparent===!0&&Y.side===fe&&Y.forceSinglePass===!1?(Y.side=en,Y.needsUpdate=!0,v.renderBufferDirect(it,X,st,Y,R,Et),Y.side=Mi,Y.needsUpdate=!0,v.renderBufferDirect(it,X,st,Y,R,Et),Y.side=fe):v.renderBufferDirect(it,X,st,Y,R,Et),R.onAfterRender(v,X,it,st,Y,Et)}function Sr(R,X,it){X.isScene!==!0&&(X=Pt);const st=Ft.get(R),Y=p.state.lights,Et=p.state.shadowsArray,Ct=Y.state.version,zt=F.getParameters(R,Y.state,Et,X,it),Bt=F.getProgramCacheKey(zt);let Kt=st.programs;st.environment=R.isMeshStandardMaterial?X.environment:null,st.fog=X.fog,st.envMap=(R.isMeshStandardMaterial?Q:A).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,Kt===void 0&&(R.addEventListener("dispose",Xt),Kt=new Map,st.programs=Kt);let Qt=Kt.get(Bt);if(Qt!==void 0){if(st.currentProgram===Qt&&st.lightsStateVersion===Ct)return Ml(R,zt),Qt}else zt.uniforms=F.getUniforms(R),R.onBeforeCompile(zt,v),Qt=F.acquireProgram(zt,Bt),Kt.set(Bt,Qt),st.uniforms=zt.uniforms;const Gt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Gt.clippingPlanes=G.uniform),Ml(R,zt),st.needsLights=Mu(R),st.lightsStateVersion=Ct,st.needsLights&&(Gt.ambientLightColor.value=Y.state.ambient,Gt.lightProbe.value=Y.state.probe,Gt.directionalLights.value=Y.state.directional,Gt.directionalLightShadows.value=Y.state.directionalShadow,Gt.spotLights.value=Y.state.spot,Gt.spotLightShadows.value=Y.state.spotShadow,Gt.rectAreaLights.value=Y.state.rectArea,Gt.ltc_1.value=Y.state.rectAreaLTC1,Gt.ltc_2.value=Y.state.rectAreaLTC2,Gt.pointLights.value=Y.state.point,Gt.pointLightShadows.value=Y.state.pointShadow,Gt.hemisphereLights.value=Y.state.hemi,Gt.directionalShadowMap.value=Y.state.directionalShadowMap,Gt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Gt.spotShadowMap.value=Y.state.spotShadowMap,Gt.spotLightMatrix.value=Y.state.spotLightMatrix,Gt.spotLightMap.value=Y.state.spotLightMap,Gt.pointShadowMap.value=Y.state.pointShadowMap,Gt.pointShadowMatrix.value=Y.state.pointShadowMatrix),st.currentProgram=Qt,st.uniformsList=null,Qt}function _l(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Ea.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Ml(R,X){const it=Ft.get(R);it.outputColorSpace=X.outputColorSpace,it.batching=X.batching,it.batchingColor=X.batchingColor,it.instancing=X.instancing,it.instancingColor=X.instancingColor,it.instancingMorph=X.instancingMorph,it.skinning=X.skinning,it.morphTargets=X.morphTargets,it.morphNormals=X.morphNormals,it.morphColors=X.morphColors,it.morphTargetsCount=X.morphTargetsCount,it.numClippingPlanes=X.numClippingPlanes,it.numIntersection=X.numClipIntersection,it.vertexAlphas=X.vertexAlphas,it.vertexTangents=X.vertexTangents,it.toneMapping=X.toneMapping}function xu(R,X,it,st,Y){X.isScene!==!0&&(X=Pt),P.resetTextureUnits();const Et=X.fog,Ct=st.isMeshStandardMaterial?X.environment:null,zt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Rs,Bt=(st.isMeshStandardMaterial?Q:A).get(st.envMap||Ct),Kt=st.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Qt=!!it.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Gt=!!it.morphAttributes.position,ae=!!it.morphAttributes.normal,xe=!!it.morphAttributes.color;let ve=_i;st.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ve=v.toneMapping);const sn=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ce=sn!==void 0?sn.length:0,Vt=Ft.get(st),Gn=p.state.lights;if(mt===!0&&(St===!0||R!==S)){const fn=R===S&&st.id===b;G.setState(st,R,fn)}let le=!1;st.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Gn.state.version||Vt.outputColorSpace!==zt||Y.isBatchedMesh&&Vt.batching===!1||!Y.isBatchedMesh&&Vt.batching===!0||Y.isBatchedMesh&&Vt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Vt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Vt.instancing===!1||!Y.isInstancedMesh&&Vt.instancing===!0||Y.isSkinnedMesh&&Vt.skinning===!1||!Y.isSkinnedMesh&&Vt.skinning===!0||Y.isInstancedMesh&&Vt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Vt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Vt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Vt.instancingMorph===!1&&Y.morphTexture!==null||Vt.envMap!==Bt||st.fog===!0&&Vt.fog!==Et||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==G.numPlanes||Vt.numIntersection!==G.numIntersection)||Vt.vertexAlphas!==Kt||Vt.vertexTangents!==Qt||Vt.morphTargets!==Gt||Vt.morphNormals!==ae||Vt.morphColors!==xe||Vt.toneMapping!==ve||Vt.morphTargetsCount!==ce)&&(le=!0):(le=!0,Vt.__version=st.version);let bn=Vt.currentProgram;le===!0&&(bn=Sr(st,X,Y));let Ki=!1,on=!1,Bs=!1;const ye=bn.getUniforms(),Nn=Vt.uniforms;if(Wt.useProgram(bn.program)&&(Ki=!0,on=!0,Bs=!0),st.id!==b&&(b=st.id,on=!0),Ki||S!==R){Wt.buffers.depth.getReversed()?(dt.copy(R.projectionMatrix),ld(dt),hd(dt),ye.setValue(N,"projectionMatrix",dt)):ye.setValue(N,"projectionMatrix",R.projectionMatrix),ye.setValue(N,"viewMatrix",R.matrixWorldInverse);const si=ye.map.cameraPosition;si!==void 0&&si.setValue(N,Ht.setFromMatrixPosition(R.matrixWorld)),Jt.logarithmicDepthBuffer&&ye.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ye.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,on=!0,Bs=!0)}if(Y.isSkinnedMesh){ye.setOptional(N,Y,"bindMatrix"),ye.setOptional(N,Y,"bindMatrixInverse");const fn=Y.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),ye.setValue(N,"boneTexture",fn.boneTexture,P))}Y.isBatchedMesh&&(ye.setOptional(N,Y,"batchingTexture"),ye.setValue(N,"batchingTexture",Y._matricesTexture,P),ye.setOptional(N,Y,"batchingIdTexture"),ye.setValue(N,"batchingIdTexture",Y._indirectTexture,P),ye.setOptional(N,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ye.setValue(N,"batchingColorTexture",Y._colorsTexture,P));const Gs=it.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&vt.update(Y,it,bn),(on||Vt.receiveShadow!==Y.receiveShadow)&&(Vt.receiveShadow=Y.receiveShadow,ye.setValue(N,"receiveShadow",Y.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Nn.envMap.value=Bt,Nn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&X.environment!==null&&(Nn.envMapIntensity.value=X.environmentIntensity),on&&(ye.setValue(N,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&_u(Nn,Bs),Et&&st.fog===!0&&B.refreshFogUniforms(Nn,Et),B.refreshMaterialUniforms(Nn,st,z,rt,p.state.transmissionRenderTarget[R.id]),Ea.upload(N,_l(Vt),Nn,P)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Ea.upload(N,_l(Vt),Nn,P),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ye.setValue(N,"center",Y.center),ye.setValue(N,"modelViewMatrix",Y.modelViewMatrix),ye.setValue(N,"normalMatrix",Y.normalMatrix),ye.setValue(N,"modelMatrix",Y.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const fn=st.uniformsGroups;for(let si=0,ri=fn.length;si<ri;si++){const vl=fn[si];U.update(vl,bn),U.bind(vl,bn)}}return bn}function _u(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Mu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,X,it){Ft.get(R.texture).__webglTexture=X,Ft.get(R.depthTexture).__webglTexture=it;const st=Ft.get(R);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=it===void 0,st.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const it=Ft.get(R);it.__webglFramebuffer=X,it.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,it=0){C=R,E=X,T=it;let st=!0,Y=null,Et=!1,Ct=!1;if(R){const Bt=Ft.get(R);if(Bt.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(N.FRAMEBUFFER,null),st=!1;else if(Bt.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(Bt.__hasExternalTextures)P.rebindTextures(R,Ft.get(R.texture).__webglTexture,Ft.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Gt=R.depthTexture;if(Bt.__boundDepthTexture!==Gt){if(Gt!==null&&Ft.has(Gt)&&(R.width!==Gt.image.width||R.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}const Kt=R.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ct=!0);const Qt=Ft.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qt[X])?Y=Qt[X][it]:Y=Qt[X],Et=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?Y=Ft.get(R).__webglMultisampledFramebuffer:Array.isArray(Qt)?Y=Qt[it]:Y=Qt,D.copy(R.viewport),W.copy(R.scissor),H=R.scissorTest}else D.copy(at).multiplyScalar(z).floor(),W.copy(j).multiplyScalar(z).floor(),H=wt;if(Wt.bindFramebuffer(N.FRAMEBUFFER,Y)&&st&&Wt.drawBuffers(R,Y),Wt.viewport(D),Wt.scissor(W),Wt.setScissorTest(H),Et){const Bt=Ft.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+X,Bt.__webglTexture,it)}else if(Ct){const Bt=Ft.get(R.texture),Kt=X||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Bt.__webglTexture,it||0,Kt)}b=-1},this.readRenderTargetPixels=function(R,X,it,st,Y,Et,Ct){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(zt=zt[Ct]),zt){Wt.bindFramebuffer(N.FRAMEBUFFER,zt);try{const Bt=R.texture,Kt=Bt.format,Qt=Bt.type;if(!Jt.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-st&&it>=0&&it<=R.height-Y&&N.readPixels(X,it,st,Y,kt.convert(Kt),kt.convert(Qt),Et)}finally{const Bt=C!==null?Ft.get(C).__webglFramebuffer:null;Wt.bindFramebuffer(N.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(R,X,it,st,Y,Et,Ct){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(zt=zt[Ct]),zt){const Bt=R.texture,Kt=Bt.format,Qt=Bt.type;if(!Jt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-st&&it>=0&&it<=R.height-Y){Wt.bindFramebuffer(N.FRAMEBUFFER,zt);const Gt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Gt),N.bufferData(N.PIXEL_PACK_BUFFER,Et.byteLength,N.STREAM_READ),N.readPixels(X,it,st,Y,kt.convert(Kt),kt.convert(Qt),0);const ae=C!==null?Ft.get(C).__webglFramebuffer:null;Wt.bindFramebuffer(N.FRAMEBUFFER,ae);const xe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await cd(N,xe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Gt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Et),N.deleteBuffer(Gt),N.deleteSync(xe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,it=0){R.isTexture!==!0&&(or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);const st=Math.pow(2,-it),Y=Math.floor(R.image.width*st),Et=Math.floor(R.image.height*st),Ct=X!==null?X.x:0,zt=X!==null?X.y:0;P.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,it,0,0,Ct,zt,Y,Et),Wt.unbindTexture()},this.copyTextureToTexture=function(R,X,it=null,st=null,Y=0){R.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,R=arguments[1],X=arguments[2],Y=arguments[3]||0,it=null);let Et,Ct,zt,Bt,Kt,Qt,Gt,ae,xe;const ve=R.isCompressedTexture?R.mipmaps[Y]:R.image;it!==null?(Et=it.max.x-it.min.x,Ct=it.max.y-it.min.y,zt=it.isBox3?it.max.z-it.min.z:1,Bt=it.min.x,Kt=it.min.y,Qt=it.isBox3?it.min.z:0):(Et=ve.width,Ct=ve.height,zt=ve.depth||1,Bt=0,Kt=0,Qt=0),st!==null?(Gt=st.x,ae=st.y,xe=st.z):(Gt=0,ae=0,xe=0);const sn=kt.convert(X.format),ce=kt.convert(X.type);let Vt;X.isData3DTexture?(P.setTexture3D(X,0),Vt=N.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(P.setTexture2DArray(X,0),Vt=N.TEXTURE_2D_ARRAY):(P.setTexture2D(X,0),Vt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);const Gn=N.getParameter(N.UNPACK_ROW_LENGTH),le=N.getParameter(N.UNPACK_IMAGE_HEIGHT),bn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ki=N.getParameter(N.UNPACK_SKIP_ROWS),on=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ve.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ve.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Bt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Kt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qt);const Bs=R.isDataArrayTexture||R.isData3DTexture,ye=X.isDataArrayTexture||X.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Nn=Ft.get(R),Gs=Ft.get(X),fn=Ft.get(Nn.__renderTarget),si=Ft.get(Gs.__renderTarget);Wt.bindFramebuffer(N.READ_FRAMEBUFFER,fn.__webglFramebuffer),Wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let ri=0;ri<zt;ri++)Bs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ft.get(R).__webglTexture,Y,Qt+ri),R.isDepthTexture?(ye&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ft.get(X).__webglTexture,Y,xe+ri),N.blitFramebuffer(Bt,Kt,Et,Ct,Gt,ae,Et,Ct,N.DEPTH_BUFFER_BIT,N.NEAREST)):ye?N.copyTexSubImage3D(Vt,Y,Gt,ae,xe+ri,Bt,Kt,Et,Ct):N.copyTexSubImage2D(Vt,Y,Gt,ae,xe+ri,Bt,Kt,Et,Ct);Wt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ye?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(Vt,Y,Gt,ae,xe,Et,Ct,zt,sn,ce,ve.data):X.isCompressedArrayTexture?N.compressedTexSubImage3D(Vt,Y,Gt,ae,xe,Et,Ct,zt,sn,ve.data):N.texSubImage3D(Vt,Y,Gt,ae,xe,Et,Ct,zt,sn,ce,ve):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Y,Gt,ae,Et,Ct,sn,ce,ve.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Y,Gt,ae,ve.width,ve.height,sn,ve.data):N.texSubImage2D(N.TEXTURE_2D,Y,Gt,ae,Et,Ct,sn,ce,ve);N.pixelStorei(N.UNPACK_ROW_LENGTH,Gn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le),N.pixelStorei(N.UNPACK_SKIP_PIXELS,bn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ki),N.pixelStorei(N.UNPACK_SKIP_IMAGES,on),Y===0&&X.generateMipmaps&&N.generateMipmap(Vt),Wt.unbindTexture()},this.copyTextureToTexture3D=function(R,X,it=null,st=null,Y=0){return R.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,st=arguments[1]||null,R=arguments[2],X=arguments[3],Y=arguments[4]||0),or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,it,st,Y)},this.initRenderTarget=function(R){Ft.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Wt.unbindTexture()},this.resetState=function(){E=0,T=0,C=null,Wt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}class Jc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new Jc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yg extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class H0 extends Ke{constructor(t=null,e=1,n=1,s,r,a,o,c,l=$e,h=$e,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _h extends Ye{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const hs=new Nt,Mh=new Nt,Xr=[],vh=new Yi,bg=new Nt,Ys=new ue,$s=new $i;class V0 extends ue{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _h(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,bg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),vh.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(vh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),$s.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),t.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),Mh.multiplyMatrices(n,hs),Ys.matrixWorld=Mh,Ys.raycast(t,Xr);for(let a=0,o=Xr.length;a<o;a++){const c=Xr[a];c.instanceId=r,c.object=this,e.push(c)}Xr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _h(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new H0(new Float32Array(s*this.count),s,this.count,Vc,Fn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Qc extends Si{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ia=new $,Pa=new $,yh=new Nt,Ks=new Kc,qr=new $i,yo=new $,bh=new $;class Sg extends Le{constructor(t=new Ge,e=new Qc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ia.fromBufferAttribute(e,s-1),Pa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ia.distanceTo(Pa);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,t.ray.intersectsSphere(qr)===!1)return;yh.copy(s).invert(),Ks.copy(t.ray).applyMatrix4(yh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),x=h.getX(_+1),M=Yr(this,t,Ks,c,p,x);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Yr(this,t,Ks,c,_,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=Yr(this,t,Ks,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Yr(this,t,Ks,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Yr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Ia.fromBufferAttribute(a,s),Pa.fromBufferAttribute(a,r),e.distanceSqToSegment(Ia,Pa,yo,bh)>n)return;yo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(yo);if(!(c<t.near||c>t.far))return{distance:c,point:bh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Sh=new $,Eh=new $;class W0 extends Sg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Sh.fromBufferAttribute(e,s),Eh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Sh.distanceTo(Eh);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class X0 extends Si{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wh=new Nt,Ic=new Kc,$r=new $i,Kr=new $;class Eg extends Le{constructor(t=new Ge,e=new X0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,t.ray.intersectsSphere($r)===!1)return;wh.copy(s).invert(),Ic.copy(t.ray).applyMatrix4(wh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Kr.fromBufferAttribute(u,m),Th(Kr,m,c,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Kr.fromBufferAttribute(u,g),Th(Kr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Th(i,t,e,n,s,r,a){const o=Ic.distanceSqToPoint(i);if(o<e){const c=new $;Ic.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class _r extends Ke{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tl extends Ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function x(){const v=new $,w=new $;let E=0;const T=(e-t)/n;for(let C=0;C<=r;C++){const b=[],S=C/r,D=S*(e-t)+t;for(let W=0;W<=s;W++){const H=W/s,V=H*c+o,nt=Math.sin(V),O=Math.cos(V);w.x=D*nt,w.y=-S*n+m,w.z=D*O,u.push(w.x,w.y,w.z),v.set(nt,T,O).normalize(),d.push(v.x,v.y,v.z),f.push(H,1-S),b.push(g++)}_.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){const S=_[b][C],D=_[b+1][C],W=_[b+1][C+1],H=_[b][C+1];(t>0||b!==0)&&(h.push(S,D,H),E+=3),(e>0||b!==r-1)&&(h.push(D,W,H),E+=3)}l.addGroup(p,E,0),p+=E}function M(v){const w=g,E=new ne,T=new $;let C=0;const b=v===!0?t:e,S=v===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const D=g;for(let W=0;W<=s;W++){const V=W/s*c+o,nt=Math.cos(V),O=Math.sin(V);T.x=b*O,T.y=m*S,T.z=b*nt,u.push(T.x,T.y,T.z),d.push(0,S,0),E.x=nt*.5+.5,E.y=O*.5*S+.5,f.push(E.x,E.y),g++}for(let W=0;W<s;W++){const H=w+W,V=D+W;v===!0?h.push(V,V+1,H):h.push(V+1,V,H),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class el extends Ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const M=new $,v=new $,w=new $;for(let E=0;E<e.length;E+=3)f(e[E+0],M),f(e[E+1],v),f(e[E+2],w),c(M,v,w,x)}function c(x,M,v,w){const E=w+1,T=[];for(let C=0;C<=E;C++){T[C]=[];const b=x.clone().lerp(v,C/E),S=M.clone().lerp(v,C/E),D=E-C;for(let W=0;W<=D;W++)W===0&&C===E?T[C][W]=b:T[C][W]=b.clone().lerp(S,W/D)}for(let C=0;C<E;C++)for(let b=0;b<2*(E-C)-1;b++){const S=Math.floor(b/2);b%2===0?(d(T[C][S+1]),d(T[C+1][S]),d(T[C][S])):(d(T[C][S+1]),d(T[C+1][S+1]),d(T[C+1][S]))}}function l(x){const M=new $;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(x),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const x=new $;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const v=m(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;a.push(v,1-w)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const M=a[x+0],v=a[x+2],w=a[x+4],E=Math.max(M,v,w),T=Math.min(M,v,w);E>.9&&T<.1&&(M<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,M){const v=x*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){const x=new $,M=new $,v=new $,w=new $,E=new ne,T=new ne,C=new ne;for(let b=0,S=0;b<r.length;b+=9,S+=6){x.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),E.set(a[S+0],a[S+1]),T.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),w.copy(x).add(M).add(v).divideScalar(3);const D=m(w);_(E,S+0,x,D),_(T,S+2,M,D),_(C,S+4,v,D)}}function _(x,M,v,w){w<0&&x.x===1&&(a[M]=x.x-1),v.x===0&&v.z===0&&(a[M]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.vertices,t.indices,t.radius,t.details)}}class nl extends el{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new nl(t.radius,t.detail)}}class il extends Ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new $,d=new $,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let w=0;w<=e;w++){const E=w/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(E+v,1-M),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const M=h[p][x+1],v=h[p][x],w=h[p+1][x],E=h[p+1][x+1];(p!==0||a>0)&&f.push(M,v,E),(p!==n-1||c<Math.PI)&&f.push(v,w,E)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pc extends Si{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Lt(16777215),this.specular=new Lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wa extends Si{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sl extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class wg extends sl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const bo=new Nt,Ah=new $,Rh=new $;class Tg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zc,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ah),Rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rh),e.updateMatrixWorld(),bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ag extends Tg{constructor(){super(new O0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rg extends sl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Ag}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ch extends sl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);const me=[0,4,7,11],oe=[0,3,7,10],Ee=[0,4,7],Pi=[0,3,7],Tn=[0,4,7,10],q0={miami:{name:"COASTLINE RUSH",bpm:138,chords:[["D",me],["G",me],["E",oe],["A",Ee],["D",me],["B",oe],["G",me],["A",Ee],["B",oe],["F#",oe],["G",me],["D",Ee],["E",oe],["A",Ee],["G",me],["A",Tn]],lead:["F#5 . . A5 . . C#6 . B5 . A5 . F#5 . E5 .","D5 . . . . . B4 . D5 . E5 . F#5 . . .","G5 . . F#5 . . E5 . D5 . E5 . G5 . B5 .","A5 . . . . . . . - - E5 F#5 G5 . A5 .","F#5 . . A5 . . D6 . C#6 . A5 . F#5 . A5 .","B5 . . A5 . . F#5 . D5 . . . B4 . D5 .","E5 . . F#5 . . G5 . A5 . B5 . A5 . G5 .","E5 . . . . . . . - - - - C#5 . E5 .","D6 . . C#6 . . B5 . . . F#5 . . . A5 .","C#6 . . B5 . . A5 . . . E5 . . . F#5 .","B5 . . A5 . . G5 . F#5 . G5 . A5 . B5 .","A5 . . . . . F#5 . . . D5 . . . - -","G5 . . A5 . . B5 . . . D6 . . . E6 .","C#6 . . . . . A5 . . . E5 . . . - -","D6 . . C#6 . . B5 . A5 . G5 . F#5 . G5 .","A5 . . . . . . . . . . . G5 . E5 ."],bass:[0,null,12,null,0,null,12,0,null,0,12,null,0,null,12,7],kick:[0,6,8],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"square"},tokyo:{name:"NEON EXPRESSWAY",bpm:144,chords:[["F",me],["G",Ee],["E",oe],["A",Pi],["F",me],["G",Ee],["E",Tn],["A",Pi],["D",oe],["G",Ee],["C",me],["A",oe],["D",oe],["E",oe],["F",me],["E",Tn]],lead:["A5 . . C6 . . E6 . . . D6 . C6 . A5 .","B5 . . . . . G5 . . . D5 . G5 . B5 .","C6 . . B5 . . G5 . E5 . . . G5 . B5 .","A5 . . . . . . . E5 . A5 . C6 . E6 .","F6 . . E6 . . C6 . . . A5 . C6 . E6 .","D6 . . . . . B5 . . . G5 . B5 . D6 .","E6 . . D6 . . B5 . G#5 . . . E5 . G#5 .","A5 . . . . . . . . . . . - - - -","D6 . F6 . A6 . F6 . D6 . . . C6 . A5 .","B5 . D6 . G6 . D6 . B5 . . . A5 . G5 .","E6 . G6 . . . E6 . C6 . . . B5 . C6 .","A5 . . . . . E5 . . . A5 . . . - -","F5 . A5 . D6 . . . C6 . A5 . F5 . A5 .","G5 . B5 . E6 . . . D6 . B5 . G5 . B5 .","C6 . . . A5 . . . C6 . . . F6 . . .","E6 . . . . . D6 . . . B5 . . . G#5 ."],bass:[0,0,12,0,0,12,0,7,0,0,12,0,10,12,7,12],kick:[0,3,8,11],snare:[4,12],hat:[2,6,10,14],leadWave:"sawtooth"},title:{name:"TITLE",bpm:128,chords:[["C",me],["A",oe],["F",me],["G",Ee]],lead:["E5 . G5 . B5 . . . C6 . B5 . G5 . . .","C6 . . . A5 . . . E5 . . . G5 . A5 .","A5 . . . F5 . . . C6 . . . A5 . . .","B5 . . . D6 . . . G5 . . . - - - -"],bass:[0,null,12,null,0,null,12,null,0,null,12,null,0,7,12,7],kick:[0,8],snare:[4,12],hat:[2,6,10,14],leadWave:"square"},palm:{name:"PALM DRIVE",bpm:116,chords:[["A",me],["F#",oe],["D",me],["E",Ee],["A",me],["C#",oe],["D",me],["E",Ee]],lead:["E5 . . . C#5 . . . E5 . F#5 . G#5 . . .","A5 . . . . . . . F#5 . E5 . C#5 . . .","D5 . . . F#5 . . . A5 . . . C#6 . B5 .","B5 . . . . . . . G#5 . . . E5 . . .","E5 . . . C#5 . . . E5 . F#5 . A5 . . .","G#5 . . . E5 . . . C#5 . E5 . G#5 . . .","F#5 . . . A5 . . . D6 . . . C#6 . A5 .","B5 . . . . . . . - - G#5 . A5 . B5 ."],bass:[0,null,0,null,0,null,12,null,0,null,0,null,0,null,12,7],kick:[0,8,10],snare:[4,12],hat:[2,6,10,14],leadWave:"saw2",pad:!0,arp:{pattern:[0,1,2,3,4,3,2,1],wave:"square",oct:5},gated:!0,stabs:!1},signal:{name:"NIGHT SIGNAL",bpm:128,chords:[["D",Pi],["A#",Ee],["C",Ee],["A",Pi],["D",oe],["A#",me],["G",oe],["A",Ee]],lead:["A5 . . D6 . . F6 . E6 . D6 . C6 . A5 .","A#5 . . . . . F5 . . . A#5 . D6 . . .","C6 . . E6 . . G6 . F6 . E6 . C6 . . .","E6 . . . . . . . - - A5 . C6 . E6 .","F6 . . E6 . . D6 . A5 . . . D6 . F6 .","G6 . . F6 . . D6 . A#5 . . . F5 . . .","G5 . . A#5 . . D6 . G6 . . . F6 . D6 .","C#6 . . . . . E6 . . . A5 . . . - -"],bass:[0,0,12,0,0,0,12,0,0,0,12,0,0,12,0,12],kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14],leadWave:"fm",pad:!0,gated:!0,stabs:!1},rival:{name:"TURBO RIVAL",bpm:152,chords:[["E",Pi],["C",Ee],["D",Ee],["B",Ee],["E",Pi],["C",Ee],["A",Pi],["B",Tn]],lead:["B5 . . . G5 . E5 . B5 . . . C6 . B5 .","G5 . . . E5 . C5 . E5 . G5 . C6 . . .","A5 . . . F#5 . D5 . F#5 . A5 . D6 . C6 .","B5 . . . . . . . D#6 . . . F#6 . . .","E6 . . . D6 . B5 . G5 . . . B5 . E6 .","G6 . . . E6 . C6 . E6 . . . G6 . E6 .","C6 . . . A5 . E5 . A5 . C6 . E6 . . .","D#6 . . . . . F#6 . . . B5 . . . - -"],bass:[0,null,0,12,0,null,0,12,0,null,0,12,0,7,12,7],kick:[0,4,8,12],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"saw2",arp:{pattern:[0,2,4,2],wave:"square",oct:5}},sunset:{name:"AFTER SUNSET",bpm:98,chords:[["F",me],["E",oe],["D",oe],["C",me],["A#",me],["A",oe],["G",oe],["C",Ee]],lead:["A5 . . . C6 . . . E6 . . . D6 . C6 .","B5 . . . G5 . . . E5 . . . . . . .","F5 . . . A5 . . . C6 . . . E6 . D6 .","E6 . . . . . . . G5 . . . . . . .","D6 . . . F6 . . . A6 . . . G6 . F6 .","E6 . . . C6 . . . A5 . . . G5 . A5 .","A#5 . . . A5 . . . G5 . . . F5 . G5 .","E5 . . . . . . . . . . . - - - -"],bass:[0,null,null,0,null,null,12,null,0,null,null,7,null,null,12,null],kick:[0,10],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"fm",pad:!0,arp:{pattern:[0,2,1,3,2,4,3,1],wave:"triangle",oct:5},gated:!0,stabs:!1},desert:{name:"MESA HIGHWAY",bpm:128,chords:[["A",oe],["D",Ee],["G",Ee],["E",oe],["A",oe],["F",me],["G",Ee],["E",Tn]],lead:["A4 . . C5 . . E5 . G5 . . . E5 . D5 .","F#5 . . . . . A5 . F#5 . E5 . D5 . . .","G5 . . B5 . . D6 . B5 . . . A5 . G5 .","E5 . . . . . . . - - G5 . A5 . B5 .","C6 . . B5 . . A5 . E5 . . . G5 . A5 .","A5 . . . C6 . . . E6 . . . C6 . A5 .","B5 . . . D6 . . . G5 . . . B5 . D6 .","G#5 . . . . . B5 . . . E5 . . . - -"],bass:[0,null,null,0,null,7,null,0,null,0,null,7,12,null,7,null],kick:[0,8,11],snare:[4,12],hat:[2,6,10,14],leadWave:"fm"},alps:{name:"GLACIER RUN",bpm:150,chords:[["E",Ee],["B",Ee],["C#",oe],["A",me],["E",Ee],["G#",oe],["A",me],["B",Tn]],lead:["B5 . G#5 . E5 . G#5 . B5 . E6 . . . D#6 .","F#6 . . . D#6 . . . B5 . . . F#5 . . .","E6 . . D#6 . . C#6 . . . B5 . G#5 . . .","C#6 . . . . . B5 . A5 . . . G#5 . A5 .","B5 . . E6 . . G#6 . . . F#6 . E6 . . .","D#6 . . . B5 . . . F#6 . . . D#6 . . .","E6 . . C#6 . . A5 . . . G#6 . . . E6 .","F#6 . . . . . . . D#6 . . . A5 . . ."],bass:[0,null,12,null,0,null,12,null,0,null,12,null,7,null,12,null],kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14],leadWave:"square",pad:!0,arp:{pattern:[0,1,2,3,2,1,0,1],wave:"triangle",oct:5}},vegas:{name:"JACKPOT BOULEVARD",bpm:116,chords:[["D",oe],["G",Tn],["D",oe],["G",Tn],["A#",me],["A",Tn],["D",oe],["A",Tn]],lead:["D5 . F5 . A5 . C6 . - A5 . . F5 . D5 .","B5 . . . . . G5 . F5 . . . D5 . F5 .","A5 . . C6 . . D6 . . . C6 . A5 . . .","G5 . . . . . . . - - F5 . G5 . B5 .","D6 . . . A5 . . . F5 . . . A5 . D6 .","C#6 . . . . . E6 . . . C#6 . A5 . . .","F6 . . E6 . . D6 . . . C6 . A5 . . .","A5 . . . . . . . E5 . G5 . A5 . C#6 ."],bass:[0,null,0,12,null,0,null,10,0,null,7,null,12,10,7,null],kick:[0,7,10],snare:[4,12],hat:[0,2,3,4,6,8,10,11,12,14],leadWave:"saw2",gated:!0},riviera:{name:"COTE D'AZUR",bpm:112,chords:[["F",me],["E",oe],["D",oe],["C",me],["A#",me],["A",oe],["G",oe],["C",Tn]],lead:["E6 . . . C6 . A5 . . . G5 . A5 . C6 .","B5 . . . . . G5 . E5 . . . D5 . E5 .","F5 . A5 . C6 . . . E6 . . . D6 . C6 .","B5 . . . . . . . G5 . . . - - - -","D6 . . F6 . . A6 . . . F6 . D6 . . .","C6 . . . E6 . . . G6 . . . E6 . C6 .","A#5 . . . D6 . . . F6 . . . D6 . A#5 .","E6 . . . . . . . . . . . - - - -"],bass:[0,null,null,7,null,null,12,null,0,null,null,7,null,10,null,null],kick:[0,10],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"fm",pad:!0,arp:{pattern:[0,2,1,3,2,1,0,2],wave:"sine",oct:5},stabs:!1}},lr=["miami","tokyo","desert","alps","vegas","riviera","palm","signal","rival","sunset"].map(i=>({id:i,name:q0[i].name})),Y0={C:0,"C#":1,D:2,"D#":3,E:4,F:5,"F#":6,G:7,"G#":8,A:9,"A#":10,B:11},Cg=i=>{const t=/^([A-G]#?)(\d)$/.exec(i);return t?Y0[t[1]]+(parseInt(t[2],10)+1)*12:69},Zs=i=>440*Math.pow(2,(i-69)/12);class Ig{constructor(){this.ctx=null,this.muted=!1,this.song=null,this.step=0,this.nextTime=0,this.timer=null}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext,e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=.55;const n=e.createDynamicsCompressor();this.master.connect(n).connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=.32,this.musicBus.connect(this.master),this.delay=e.createDelay(1);const s=e.createGain();s.gain.value=.28,this.delay.connect(s).connect(this.delay);const r=e.createGain();r.gain.value=.35,this.delay.connect(r).connect(this.musicBus),this.noise=e.createBuffer(1,e.sampleRate,e.sampleRate);const a=this.noise.getChannelData(0);for(let h=0;h<a.length;h++)a[h]=Math.random()*2-1;this.engA=e.createOscillator(),this.engA.type="sawtooth",this.engB=e.createOscillator(),this.engB.type="square",this.engF=e.createBiquadFilter(),this.engF.type="lowpass",this.engF.Q.value=4,this.engG=e.createGain(),this.engG.gain.value=0;const o=e.createGain();o.gain.value=.6,this.engA.connect(this.engF),this.engB.connect(o).connect(this.engF),this.engF.connect(this.engG).connect(this.sfx),this.engA.start(),this.engB.start();const c=e.createBufferSource();c.buffer=this.noise,c.loop=!0;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=2400,l.Q.value=6,this.skidG=e.createGain(),this.skidG.gain.value=0,c.connect(l).connect(this.skidG).connect(this.sfx),c.start()}toggleMute(){this.muted=!this.muted,this.ctx&&this.master.gain.setTargetAtTime(this.muted?0:.55,this.ctx.currentTime,.02)}engine(t,e,n){if(!this.ctx)return;const s=this.ctx.currentTime,r=38+e*120;this.engA.frequency.setTargetAtTime(r,s,.03),this.engB.frequency.setTargetAtTime(r*.5+1.5,s,.03),this.engF.frequency.setTargetAtTime(300+e*1400+n*600,s,.05),this.engG.gain.setTargetAtTime(t?.1+n*.08:0,s,.08)}skid(t){this.ctx&&this.skidG.gain.setTargetAtTime(t*.22,this.ctx.currentTime,.04)}tone(t,e,n,s,r=0,a,o){const c=this.ctx,l=c.currentTime+r,h=c.createOscillator();h.type=n,h.frequency.setValueAtTime(t,l),a&&h.frequency.exponentialRampToValueAtTime(a,l+e);const u=c.createGain();u.gain.setValueAtTime(s,l),u.gain.exponentialRampToValueAtTime(.001,l+e),h.connect(u).connect(o??this.sfx),h.start(l),h.stop(l+e+.02)}burst(t,e,n,s=0,r="lowpass",a,o){const c=this.ctx,l=o??c.currentTime+s,h=c.createBufferSource();h.buffer=this.noise;const u=c.createBiquadFilter();u.type=r,u.frequency.setValueAtTime(n,l),r==="lowpass"&&u.frequency.exponentialRampToValueAtTime(80,l+t);const d=c.createGain();d.gain.setValueAtTime(e,l),d.gain.exponentialRampToValueAtTime(.001,l+t),h.connect(u).connect(d).connect(a??this.sfx),h.start(l,Math.random()*.5),h.stop(l+t+.02)}crash(t){this.ctx&&(this.burst(t?.9:.35,t?.9:.5,t?4e3:2500),this.tone(t?90:140,t?.5:.2,"square",.35,0,30))}scrape(){this.ctx&&this.burst(.18,.25,3e3,0,"highpass")}pop(){this.ctx&&(this.burst(.09,.5,900),this.tone(70,.08,"square",.25,0,40))}gun(t=1){if(this.ctx)for(const[e,n]of[[0,1],[.048,.8]]){const s=.9+Math.random()*.2,r=t*n;this.burst(.045,.5*r,1900*s,e,"bandpass"),this.burst(.11,.42*r,650*s,e),this.tone(125*s,.07,"sine",.38*r,e,42),this.burst(.014,.22*r,5200,e+.004,"highpass")}}ping(){this.ctx&&(this.tone(1800+Math.random()*900,.12,"triangle",.22,0,900),this.burst(.04,.25,6e3,0,"highpass"))}turbo(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noise;const s=t.createBiquadFilter();s.type="bandpass",s.Q.value=3,s.frequency.setValueAtTime(400,e),s.frequency.exponentialRampToValueAtTime(5e3,e+.7);const r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.5,e+.08),r.gain.exponentialRampToValueAtTime(.001,e+1.1),n.connect(s).connect(r).connect(this.sfx),n.start(e),n.stop(e+1.2),this.tone(90,.6,"sawtooth",.25,0,240),this.tone(660,.25,"square",.1,.05,1320)}countBeep(t){this.ctx&&(t?this.tone(880,.7,"square",.22):this.tone(440,.25,"square",.22))}blip(){this.ctx&&this.tone(660,.07,"square",.12,0,990)}coin(){this.ctx&&(this.tone(988,.08,"square",.15),this.tone(1319,.3,"square",.15,.08))}jingle(){this.ctx&&[523,659,784,1047,784,1047].forEach((t,e)=>this.tone(t,.16,"square",.15,e*.09))}fanfare(){this.ctx&&[392,523,659,784,659,784,1047].forEach((t,e)=>this.tone(t,e===6?.8:.18,"square",.16,e*.13))}sad(){this.ctx&&[392,370,349,330].forEach((t,e)=>this.tone(t,e===3?.9:.3,"triangle",.25,e*.3))}music(t){if(!this.ctx)return;const e=t?q0[t]:null;e!==this.song&&(this.song=e,this.step=0,this.nextTime=this.ctx.currentTime+.1,this.timer!==null&&window.clearInterval(this.timer),this.timer=null,e&&(this.delay.delayTime.value=60/e.bpm*.75,this.timer=window.setInterval(()=>this.schedule(),25)))}schedule(){const t=this.ctx,e=this.song;if(!e)return;const n=60/e.bpm/4;for(this.nextTime<t.currentTime-.2&&(this.nextTime=t.currentTime+.05);this.nextTime<t.currentTime+.12;)this.playStep(e,this.step,this.nextTime,n),this.step=(this.step+1)%(e.chords.length*16),this.nextTime+=n}playStep(t,e,n,s){const r=Math.floor(e/16),a=e%16,[o,c]=t.chords[r],l=Y0[o],h=t.bass[a];if(h!=null&&this.voice(Zs(36+l+h),s*.9,"sawtooth",.32,n,700),t.stabs!==!1&&a%4===2)for(const f of c)this.voice(Zs(60+l+f),s*1.2,"square",.045,n,2600);if(t.pad&&a===0)for(const f of c)this.padNote(Zs(48+l+f),s*16,n);if(t.arp){const f=t.arp.pattern[a%t.arp.pattern.length],g=c[f%c.length]+12*Math.floor(f/c.length);this.voice(Zs((t.arp.oct+1)*12+l+g),s*.7,t.arp.wave,.045,n,3200,!1,!0)}const u=t.lead[r].split(/\s+/),d=u[a];if(d&&d!=="."&&d!=="-"){let f=1;for(;a+f<16&&u[a+f]===".";)f++;this.voice(Zs(Cg(d)),s*f*.95,t.leadWave,.11,n,3800,!0)}if(t.kick.includes(a)){const f=this.ctx,g=f.createOscillator(),_=f.createGain();g.frequency.setValueAtTime(150,n),g.frequency.exponentialRampToValueAtTime(40,n+.12),_.gain.setValueAtTime(.7,n),_.gain.exponentialRampToValueAtTime(.001,n+.18),g.connect(_).connect(this.musicBus),g.start(n),g.stop(n+.2)}t.snare.includes(a)&&(t.gated?(this.burst(.26,.55,1500,0,"bandpass",this.musicBus,n),this.burst(.2,.3,5e3,0,"highpass",this.musicBus,n)):this.burst(.14,.45,1800,0,"bandpass",this.musicBus,n)),t.hat.includes(a)&&this.burst(.04,.18,7e3,0,"highpass",this.musicBus,n)}padNote(t,e,n){const s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.value=1400;const a=s.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.028,n+Math.min(.35,e*.3)),a.gain.setValueAtTime(.028,n+e*.85),a.gain.linearRampToValueAtTime(0,n+e),r.connect(a).connect(this.musicBus);for(const o of[-9,9]){const c=s.createOscillator();c.type="sawtooth",c.frequency.setValueAtTime(t,n),c.detune.value=o,c.connect(r),c.start(n),c.stop(n+e+.02)}}voice(t,e,n,s,r,a,o=!1,c=!1){const l=this.ctx;if(n==="fm"){const g=l.createOscillator(),_=l.createOscillator(),m=l.createGain();g.frequency.setValueAtTime(t,r),_.frequency.setValueAtTime(t*2,r),m.gain.setValueAtTime(t*3,r),m.gain.exponentialRampToValueAtTime(t*.3,r+Math.max(.05,e)),_.connect(m).connect(g.frequency);const p=l.createGain();p.gain.setValueAtTime(0,r),p.gain.linearRampToValueAtTime(s*1.3,r+.004),p.gain.exponentialRampToValueAtTime(s*.4,r+Math.max(.05,e*.8)),p.gain.linearRampToValueAtTime(0,r+e+.05),g.connect(p).connect(this.musicBus),o&&p.connect(this.delay);for(const x of[g,_])x.start(r),x.stop(r+e+.08);return}const h=l.createOscillator(),u=[];if(n==="saw2"&&(s*=.6),n==="saw2"){h.type="sawtooth",h.detune.value=-8;const g=l.createOscillator();g.type="sawtooth",g.detune.value=8,g.frequency.setValueAtTime(t,r),u.push(g)}else h.type=n;if(h.frequency.setValueAtTime(t,r),o){const g=l.createOscillator(),_=l.createGain();g.frequency.value=6,_.gain.setValueAtTime(0,r),_.gain.linearRampToValueAtTime(t*.012,r+Math.min(e,.4)),g.connect(_).connect(h.frequency);for(const m of u)_.connect(m.frequency);g.start(r),g.stop(r+e+.05)}const d=l.createBiquadFilter();d.type="lowpass",d.frequency.value=a;const f=l.createGain();f.gain.setValueAtTime(0,r),f.gain.linearRampToValueAtTime(s,r+.005),f.gain.setValueAtTime(s,r+Math.max(.01,e-.03)),f.gain.linearRampToValueAtTime(0,r+e),h.connect(d).connect(f).connect(this.musicBus),(o||c)&&f.connect(this.delay);for(const g of[h,...u])g!==h&&g.connect(d),g.start(r),g.stop(r+e+.02)}}const Pg=()=>"92",ie={mode:Pg(),get modern(){return this.mode==="92"},get width(){return this.modern?640:426},get height(){return this.modern?360:240}};function Lg(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);const s=new _r(t);return s.colorSpace=ze,s}const dr='"Press Start 2P", monospace',Dg='"Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", "Noto Sans CJK JP", "Noto Sans JP", sans-serif',Zr=i=>"#"+i.toString(16).padStart(6,"0");class Ng{constructor(){this.cw=64,this.ch=32,this.cols=8,this.rows=32,this.used=[],this.canvas=document.createElement("canvas"),this.canvas.width=this.cw*this.cols,this.canvas.height=this.ch*this.rows,this.ctx=this.canvas.getContext("2d"),this.ctx.imageSmoothingEnabled=!1,this.texture=new _r(this.canvas),this.texture.magFilter=$e,this.texture.minFilter=m0,this.texture.colorSpace=ze}alloc(t,e){for(let n=0;n+e<=this.rows;n++)for(let s=0;s+t<=this.cols;s++){let r=!0;for(let a=n;a<n+e&&r;a++)for(let o=s;o<s+t;o++)if(this.used[a*this.cols+o]){r=!1;break}if(r){for(let a=n;a<n+e;a++)for(let o=s;o<s+t;o++)this.used[a*this.cols+o]=!0;return[s,n]}}throw new Error("sign atlas full")}add(t,e=1,n=1){const[s,r]=this.alloc(e,n),a=s*this.cw,o=r*this.ch,c=this.cw*e,l=this.ch*n,h=this.ctx;if(h.save(),h.beginPath(),h.rect(a,o,c,l),h.clip(),h.fillStyle=Zr(t.bg),h.fillRect(a,o,c,l),t.stripes===-1)for(let _=0;_<l;_+=8)for(let m=0;m<c;m+=8)(m+_)/8%2===0&&(h.fillStyle="#000",h.fillRect(a+m,o+_,8,8));else t.stripes!==void 0&&(h.fillStyle=Zr(t.stripes),h.fillRect(a,o+l-6,c,3),h.fillRect(a,o+3,c,3));if(t.border!==void 0&&(h.strokeStyle=Zr(t.border),h.lineWidth=3,h.strokeRect(a+1.5,o+1.5,c-3,l-3)),h.fillStyle=Zr(t.fg),t.arrows){const _=c/3,m=_*.38;for(let M=0;M<3;M++){const v=a+M*_+_*.12,w=v+_*.62,[E,T]=t.arrows==="R"?[v,w]:[w,v],C=t.arrows==="R"?1:-1;h.beginPath(),h.moveTo(E,o+3),h.lineTo(E+C*m,o+3),h.lineTo(T,o+l/2),h.lineTo(E+C*m,o+l-3),h.lineTo(E,o+l-3),h.lineTo(T-C*m,o+l/2),h.closePath(),h.fill()}h.restore(),this.texture.needsUpdate=!0;const p=this.canvas.width,x=this.canvas.height;return[a/p,1-(o+l)/x,(a+c)/p,1-o/x]}h.textAlign="center",h.textBaseline="middle";const u=t.jp?Dg:dr;if(t.vertical){const g=[...t.text],_=Math.min(c-6,Math.floor((l-6)/g.length));h.font=`bold ${_}px ${u}`,g.forEach((m,p)=>h.fillText(m,a+c/2,o+4+_*(p+.5)))}else{const g=t.sub?2:1,_=t.jp?(l-6)/g:8*Math.max(1,Math.floor((l-8)/g/10));let m=Math.floor(_);for(h.font=`bold ${m}px ${u}`;m>6&&h.measureText(t.text).width>c-6;){if(m-=t.jp?1:8,m<8&&!t.jp){m=8;break}h.font=`bold ${m}px ${u}`}const p=t.sub?o+l*.34:o+l/2+1;h.fillText(t.text,a+c/2,p),t.sub&&(h.font=`8px ${dr}`,h.fillText(t.sub,a+c/2,o+l*.74))}h.restore(),this.texture.needsUpdate=!0;const d=this.canvas.width,f=this.canvas.height;return[a/d,1-(o+l)/f,(a+c)/d,1-o/f]}}const xt=852,Be=480,mn=i=>"#"+i.toString(16).padStart(6,"0"),Ug=(i,t)=>Math.round((i>>16&255)*t)<<16|Math.round((i>>8&255)*t)<<8|Math.round((i&255)*t),Ot=16769088,Ut=16777215,Oe=16751136,ge=16724016,Pe=4255999,Yn=16734880,Un=4251712,_s=class _s{constructor(t){this.canvas=t,t.width=xt,t.height=Be,this.g=t.getContext("2d"),this.g.imageSmoothingEnabled=!1}clear(){this.g.clearRect(0,0,xt,Be)}text(t,e,n,s,r,a="left",o=0){const c=this.g;c.font=`${s}px ${dr}`,c.textAlign=a,c.textBaseline="top";const l=s<8?1:Math.max(2,s/8);c.fillStyle=mn(o),c.fillText(t,e+l,n+l),c.fillStyle=mn(r),c.fillText(t,e,n)}shade(t,e,n,s,r=.6){this.g.fillStyle=`rgba(10,10,32,${r})`,this.g.fillRect(t,e,n,s)}arrow(t,e,n,s,r){const a=Math.max(2,Math.round(s/2));for(let o=0;o<a;o++){const c=(o+1)*2-1;n==="up"?this.rect(t-o,e-a/2+o,c,1,r):n==="down"?this.rect(t-o,e+a/2-o,c,1,r):n==="left"?this.rect(t-a/2+o,e-o,1,c,r):this.rect(t+a/2-o,e-o,1,c,r)}}keyW(t,e=16){return _s.ARROWS[t]?e:(this.g.font=`${e>=20?16:8}px ${dr}`,Math.max(e,Math.ceil(this.g.measureText(t).width)+10))}keycap(t,e,n,s=16,r=Ut){const a=s>=20?16:8,o=this.keyW(n,s),c=_s.ARROWS[n];return this.rect(t+1,e+2,o,s,328975),this.box(t,e,o,s,2763338,r,1),this.rect(t+1,e+1,o-2,1,5263482),c?this.arrow(t+o/2-.5,e+s/2,c,s-6,r):this.text(n,t+o/2,e+(s-a)/2+1,a,r,"center"),o}chip(t,e,n,s,r,a,o=8,c=1710650){this.box(t,e,n,s,c,a,2);const l=_s.ARROWS[r];l?this.arrow(t+n/2-.5,e+s/2,l,Math.min(n,s)-8,a):this.text(r,t+n/2,e+(s-o)/2+1,o,a,"center")}grad(t,e,n,s,r){const a=this.g,o=a.createLinearGradient(0,e,0,e+s);r.forEach((c,l)=>o.addColorStop(l/Math.max(1,r.length-1),mn(c))),a.fillStyle=o,a.fillRect(t,e,n,s)}poly(t,e){const n=this.g;n.fillStyle=mn(e),n.beginPath(),t.forEach(([s,r],a)=>a?n.lineTo(s,r):n.moveTo(s,r)),n.closePath(),n.fill()}circle(t,e,n,s){const r=this.g;r.fillStyle=mn(s),r.beginPath(),r.arc(t,e,n,0,Math.PI*2),r.fill()}palm(t,e,n,s){for(let o=0;o<n;o+=2)this.rect(t+Math.round(Math.sin(o/n*1.4)*4),e-o,3,2,s);const r=t+Math.round(Math.sin(1.4)*4)+1,a=e-n;for(const[o,c]of[[-12,4],[-9,-3],[0,-6],[9,-3],[12,4],[6,6],[-6,6]])this.poly([[r,a-1],[r+o,a+c],[r+o*.9,a+c+2],[r,a+2]],s)}postcard(t,e,n,s,r,a=0){const o=this.g;o.save(),o.beginPath(),o.rect(e,n,s,r),o.clip();let c=7;const l=()=>(c=c*16807%2147483647)/2147483647,h=n+Math.round(r*.62);switch(t){case"miami":{this.grad(e,n,s,h-n,[5909130,16734874,16756848,16769168]);const u=e+s*.5,d=h;this.circle(u,d,r*.34,16764992);for(let f=0;f<5;f++)this.rect(u-r*.4,d-3-f*5,r*.8,1+f*.4,16747120);this.grad(e,h,s,n+r-h,[2783952,1327242]);for(let f=0;f<8;f++)this.rect(u-30+l()*60,h+3+f*3,10+l()*30,1,16760960);this.palm(e+26,n+r,r*.75,2756672),this.palm(e+48,n+r,r*.55,2756672),this.palm(e+s-34,n+r,r*.8,2756672);break}case"tokyo":{this.grad(e,n,s,r,[328986,2756186,8006282]),this.circle(e+s-40,n+16,9,15790335),this.circle(e+s-36,n+13,8,1706560);for(let u=e;u<e+s;){const d=12+Math.floor(l()*22),f=r*(.3+l()*.55);this.rect(u,n+r-f,d-2,f,1181732);for(let g=n+r-f+4;g<n+r-6;g+=5)for(let _=u+2;_<u+d-4;_+=4)l()<.45&&this.rect(_,g,2,2,l()<.7?16769152:16738992);l()<.4&&this.rect(u+2,n+r-f-6,2,6,16724032),u+=d}this.rect(e,n+r-5,s,2,16734880),this.rect(e,n+r-2,s,2,4255999);break}case"canyon":{this.grad(e,n,s,h-n+6,[16756832,16769184]),this.circle(e+s*.4,h-22,10,16773312);const u=(d,f,g,_)=>this.poly([[d,h+6],[d+8,g],[f-8,g],[f,h+6]],_);u(e-10,e+80,h-18,12077098),u(e+150,e+205,h-24,10500642),u(e+200,e+s+10,h-12,13129774),this.grad(e,h+6,s,n+r-h-6,[14186554,10504740]),this.poly([[e+s*.42,n+r],[e+s*.49,h+6],[e+s*.51,h+6],[e+s*.58,n+r]],5263448);for(const d of[e+30,e+s-50])this.rect(d,n+r-22,4,18,2779690),this.rect(d-5,n+r-16,4,8,2779690),this.rect(d+5,n+r-19,4,8,2779690);break}case"alps":{this.grad(e,n,s,h-n,[8038655,13154544,16761040]);const u=(d,f,g,_)=>{this.poly([[d-g,h+4],[d,h-f],[d+g,h+4]],_),this.poly([[d-g*.32,h-f*.68],[d,h-f],[d+g*.32,h-f*.68],[d+g*.1,h-f*.6],[d-g*.08,h-f*.66]],16777215)};u(e+50,44,60,6977712),u(e+160,52,70,5925032),u(e+230,36,50,8030400),this.rect(e,h+4,s,n+r-h-4,16054527);for(let d=0;d<9;d++){const f=e+8+d*28+l()*10,g=14+l()*10,_=n+r-2-l()*6;this.poly([[f-6,_],[f,_-g],[f+6,_]],1985074),this.rect(f-1,_-g+2,2,3,16777215)}break}case"vegas":{this.grad(e,n,s,r,[131594,1705520,4853840]);for(let d=0;d<30;d++)this.rect(e+l()*s,n+l()*r*.5,1,1,16777215);const u=[16730784,4255999,16769088,6356832];for(let d=0,f=e+6;f<e+s;d++){const g=18+Math.floor(l()*20),_=r*(.35+l()*.5),m=u[d%4],p=Math.floor(a*3+d)%5!==0;this.rect(f,n+r-_,g,_,1312798),this.rect(f,n+r-_,g,2,p?m:3811914),this.rect(f,n+r-_,2,_,p?m:3811914);for(let x=n+r-_+6;x<n+r-4;x+=6)this.rect(f+4,x,g-8,2,Ug(m,.45));f+=g+6}this.text("VEGAS",e+s/2,n+10,16,Math.floor(a*2)%2?16730784:16769088,"center");break}case"monaco":{this.grad(e,n,s,h-n,[4892927,13167359]),this.grad(e,h,s,n+r-h,[1739480,674448]);for(let g=0;g<10;g++)this.rect(e+l()*s*.6,h+3+l()*(n+r-h-6),8+l()*14,1,10541311);this.poly([[e+s*.55,n+r],[e+s*.62,h-6],[e+s*.74,h-26],[e+s+2,h-34],[e+s+2,n+r]],12099696);const u=[16769216,16763040,16774360,16306384];for(let g=0;g<6;g++){const _=e+s*.64+g*14,m=h-22-g%3*8+g*2;this.rect(_,m,12,9,u[g%4]),this.rect(_-1,m-3,14,3,12603434)}for(const g of[e+s*.6,e+s*.9])this.poly([[g-3,h+4],[g,h-22],[g+3,h+4]],1985066);const d=e+50,f=h+14;this.poly([[d-26,f],[d+26,f],[d+18,f+7],[d-22,f+7]],16777215),this.rect(d-10,f-6,22,6,15790320),this.rect(d-6,f-5,14,2,2109512),this.rect(d,f-22,2,16,14737632),this.poly([[d+3,f-20],[d+3,f-7],[d+16,f-7]],16777215);break}default:this.grad(e,n,s,r,[3816042,1052720])}o.restore()}icon(t,e,n,s){const r=this.g;if(r.strokeStyle=mn(s),r.lineWidth=2,(t==="clock"||t==="globe")&&(r.beginPath(),r.arc(e,n,8,0,Math.PI*2),r.stroke()),t==="clock")this.rect(e-1,n-6,2,7,s),this.rect(e,n-1,5,2,s);else if(t==="globe")r.beginPath(),r.ellipse(e,n,3.5,8,0,0,Math.PI*2),r.moveTo(e-8,n),r.lineTo(e+8,n),r.stroke();else{this.rect(e-7,n-9,2,18,s);for(let a=0;a<4;a++)for(let o=0;o<3;o++)this.rect(e-5+a*3,n-9+o*3,3,3,(a+o)%2?1052688:s)}}sky(t,e,n){if(t)this.circle(e,n,7,15790335),this.circle(e+3,n-2,6,1052720);else{for(let s=0;s<8;s++){const r=s/8*Math.PI*2;this.rect(e+Math.cos(r)*9-1,n+Math.sin(r)*9-1,2,2,16764992)}this.circle(e,n,5,16764992)}}note(t,e,n){this.circle(t-2,e+4,3,n),this.rect(t,e-6,2,10,n),this.rect(t,e-6,5,2,n)}box(t,e,n,s,r,a,o=4){const c=this.g;c.fillStyle=mn(a),c.fillRect(t,e,n,s),c.fillStyle=mn(r),c.fillRect(t+o,e+o,n-o*2,s-o*2)}rect(t,e,n,s,r){this.g.fillStyle=mn(r),this.g.fillRect(t,e,n,s)}logo(t,e,n,s,r,a,o){const c=this.g;c.font=`${s}px ${dr}`,c.textAlign="center",c.textBaseline="top";for(let l=s/6;l>0;l-=2)c.fillStyle=mn(o),c.fillText(t,e+l*.5,n+l);c.fillStyle="#000";for(const[l,h]of[[-3,0],[3,0],[0,-3],[0,3]])c.fillText(t,e+l,n+h);c.save(),c.beginPath(),c.rect(0,n-4,xt,s*.5+4),c.clip(),c.fillStyle=mn(r),c.fillText(t,e,n),c.restore(),c.save(),c.beginPath(),c.rect(0,n+s*.5,xt,s),c.clip(),c.fillStyle=mn(a),c.fillText(t,e,n),c.restore()}flare(t,e,n){const s=this.g,r=xt/2,a=Be/2;s.save(),s.globalCompositeOperation="lighter";const o=s.createRadialGradient(t,e,0,t,e,150);o.addColorStop(0,`rgba(255,240,200,${.55*n})`),o.addColorStop(.3,`rgba(255,190,120,${.22*n})`),o.addColorStop(1,"rgba(255,160,100,0)"),s.fillStyle=o,s.fillRect(t-150,e-150,300,300);const c=s.createLinearGradient(t-260,e,t+260,e);c.addColorStop(0,"rgba(255,220,180,0)"),c.addColorStop(.5,`rgba(255,230,190,${.35*n})`),c.addColorStop(1,"rgba(255,220,180,0)"),s.fillStyle=c,s.fillRect(t-260,e-2,520,4);const l=[[.35,18,"255,200,90",.22],[.62,10,"140,255,170",.2],[.9,34,"120,160,255",.12],[1.25,14,"255,120,200",.18],[1.6,52,"255,190,110",.09],[1.95,22,"120,230,255",.14]];for(const[h,u,d,f]of l){const g=t+(r-t)*h,_=e+(a-e)*h;s.fillStyle=`rgba(${d},${f*n})`,s.beginPath();for(let m=0;m<6;m++){const p=m/6*Math.PI*2+Math.PI/6,x=g+Math.cos(p)*u,M=_+Math.sin(p)*u;m===0?s.moveTo(x,M):s.lineTo(x,M)}s.closePath(),s.fill()}s.restore()}tach(t,e,n){const r=Math.round(n*24);for(let a=0;a<24;a++){const o=a<13?Un:a<20?Ot:ge,c=8+Math.floor(a*.9);this.rect(t+a*12,e-c,10,c,a<r?o:2109472)}}};_s.ARROWS={"↑":"up","↓":"down","←":"left","→":"right"};let Lc=_s;const jt=6,Og=3,Z=11,ki=4,pr=Z*2/ki;class Fg{constructor(){this.segs=[],this.stageStarts=[],this.goalSeg=0}seg(t){const e=this.segs.length;return this.segs[t<0?0:t>=e?e-1:t]}H(t){const e=this.segs.length;return t<=0?this.segs[0].heading:t>=e?this.segs[e-1].heading+this.segs[e-1].curve*jt:this.segs[t].heading}Y(t){return this.seg(t).y}get goalDist(){return this.goalSeg*jt}}const kg=(i,t,e)=>i+(t-i)*e*e,zg=(i,t,e)=>i+(t-i)*(1-(1-e)*(1-e)),So=(i,t,e)=>i+(t-i)*(-Math.cos(e*Math.PI)/2+.5);class Ls{constructor(t,e=0){this.profileOf=t,this.track=new Fg,this.heading=0,this.stage=0,this.zone="",this.tunnel=!1,this.y=e}push(t,e){this.track.segs.push({curve:t,y:e,heading:this.heading,stage:this.stage,zone:this.zone,profile:this.profileOf(this.zone,this.tunnel),tunnel:this.tunnel,props:[]}),this.heading+=t*jt}section(t,e,n,s,r){const a=t+e+n,o=this.y;let c=0;for(let l=0;l<t;l++,c++)this.push(kg(0,s,l/t),So(o,o+r,c/a));for(let l=0;l<e;l++,c++)this.push(s,So(o,o+r,c/a));for(let l=0;l<n;l++,c++)this.push(zg(s,0,l/n),So(o,o+r,c/a));this.y=o+r}straight(t,e=0){this.section(0,t,0,0,e)}stageFrom(t,e){this.zone=t.zone,this.track.stageStarts.push(this.track.segs.length);const n=this.track.segs.length+t.length,s=Math.min(t.yMax,Math.max(t.yMin,this.y));Math.abs(s-this.y)>.5?this.straight(40,s-this.y):this.straight(20);let r=0;for(;this.track.segs.length<n;){const a=n-this.track.segs.length,o=!!t.tunnels&&r===0&&a<t.length*.55;this.tunnel=!!t.tunnels&&(o||e.chance(t.tunnels))&&a>120,this.tunnel&&r++;const c=this.zone;this.tunnel&&t.tunnelZone&&(this.zone=t.tunnelZone);let l=e.sign();this.heading>.7&&(l=-1),this.heading<-.7&&(l=1);const h=e.range(9e-4,.0032)*t.curvy;let u=0;e.chance(.25+t.hilly*.6)&&(u=e.range(10,45)*t.hilly*e.sign(),this.y+u>t.yMax&&(u=t.yMax-this.y),this.y+u<t.yMin&&(u=t.yMin-this.y));const d=e.next();if(this.tunnel)this.section(20,e.int(40,80),20,h*.5*l,Math.min(u,0));else if(d<.18)this.straight(e.int(25,60),u);else if(d<.42){const f=e.int(15,35);this.section(15,f,15,h*l,u*.5),this.section(15,f,15,-h*l,u*.5)}else this.section(e.int(15,30),e.int(25,80),e.int(15,30),h*l,u);this.tunnel=!1,this.zone=c}this.stage++}finish(t){return this.stage--,this.track.goalSeg=this.track.segs.length,this.straight(t),this.track}}const hr=6,$0=200,us=hr+$0+1;class Bg{constructor(t){this.track=t,this.start=0,this.bx=new Float32Array(us),this.by=new Float32Array(us),this.bz=new Float32Array(us),this.bh=new Float32Array(us),this.yRef=0,this.heading=0,this.count=hr+$0}update(t){const e=this.track,n=Math.floor(t/jt),s=t/jt-n,r=e.H(n)+e.seg(n).curve*s*jt;this.heading=r,this.yRef=e.Y(n)+(e.Y(n+1)-e.Y(n))*s,this.start=n-hr;const{bx:a,bz:o,bh:c,by:l}=this,h=hr,u=hr+1;let d=e.H(n+1)-r,f=(1-s)*jt;c[u]=d,a[u]=Math.sin(d/2)*f,o[u]=-Math.cos(d/2)*f;for(let g=u+1;g<us;g++){d=e.H(this.start+g)-r;const _=(c[g-1]+d)/2;c[g]=d,a[g]=a[g-1]+Math.sin(_)*jt,o[g]=o[g-1]-Math.cos(_)*jt}d=e.H(n)-r,f=s*jt,c[h]=d,a[h]=-Math.sin(d/2)*f,o[h]=Math.cos(d/2)*f;for(let g=h-1;g>=0;g--){d=e.H(this.start+g)-r;const _=(c[g+1]+d)/2;c[g]=d,a[g]=a[g+1]-Math.sin(_)*jt,o[g]=o[g+1]+Math.cos(_)*jt}for(let g=0;g<us;g++)l[g]=e.Y(this.start+g)-this.yRef}sample(t,e,n){const s=t/jt,r=Math.floor(s),a=s-r,o=r-this.start;if(o<0||o>=this.count)return!1;const c=this.bh[o]+(this.bh[o+1]-this.bh[o])*a;return n.h=c,n.x=this.bx[o]+(this.bx[o+1]-this.bx[o])*a+Math.cos(c)*e,n.z=this.bz[o]+(this.bz[o+1]-this.bz[o])*a+Math.sin(c)*e,n.y=this.by[o]+(this.by[o+1]-this.by[o])*a,!0}}const At=(i,t,e,n,s,r,a)=>({z:i,w:t,yb:e,belt:n,top:s,wt:r,seg:a}),Li=657932,Fe=12063760,Eo=16747040,gn=(i,t,e)=>[{x:i,y:t,r:e},{x:-i,y:t,r:e}],qe=[{id:"testarossa",rimStyle:"star",trim:12095592,arch:.04,front:"popup",make:"FERRARI",name:"TESTAROSSA",year:1984,group:"80s EXOTIC",paints:[14160924,15921902,16765976],stations:[At(-2.24,.88,.3,.5,.56,.8,"p"),At(-1.7,.93,.24,.62,.68,.86,"p"),At(-.85,.96,.22,.74,.8,.8,"ws"),At(-.05,.97,.22,.8,1.12,.62,"rf"),At(.55,.98,.22,.84,1.12,.62,"rw"),At(1,.99,.22,.87,.98,.8,"p"),At(2.24,.99,.28,.9,.96,.86,"p")],wheels:{r:.32,fz:-1.27,rz:1.28,fx:.78,rx:.82,rim:14212320,spokes:5},rear:[{x:0,y:.64,w:1.92,h:.34,c:Li}],lights:[{x:.62,y:.64,w:.6,h:.22,c:Fe,brake:!0},{x:.22,y:.64,w:.18,h:.22,c:Eo}],slats:{y0:.5,y1:.78,n:6,w:.95},side:[{kind:"strakes",z0:-.3,z1:1.05,y0:.38,y1:.8,n:5}],exhaust:[...gn(.55,.33,.05),...gn(.7,.33,.05)],plateY:.38,stats:{vmax:290,accel:.95,grip:.97}},{id:"countach",rimStyle:"dial",trim:10516560,arch:.07,front:"popup",make:"LAMBORGHINI",name:"COUNTACH QV",year:1985,group:"80s EXOTIC",paints:[16053486,14161944,16765976],stations:[At(-2.07,.86,.28,.4,.44,.76,"p"),At(-1.3,.92,.24,.56,.62,.84,"p"),At(-.75,.95,.22,.66,.72,.84,"ws"),At(.15,.97,.22,.74,1.06,.6,"rf"),At(.65,.99,.22,.78,1.06,.62,"rw"),At(1.05,1,.22,.84,.94,.88,"p"),At(2.07,1,.28,.86,.92,.9,"p")],wheels:{r:.32,fz:-1.22,rz:1.23,fx:.8,rx:.84,rim:13158604,spokes:5},rear:[{x:0,y:.6,w:.84,h:.32,c:Li}],lights:[{x:.7,y:.67,w:.42,h:.15,c:Fe,brake:!0},{x:.7,y:.52,w:.42,h:.1,c:Eo}],side:[{kind:"naca",z0:-.5,z1:.35,y0:.5,y1:.72},{kind:"intake",z0:.6,z1:1.2,y0:.5,y1:.8}],wing:{kind:"big",z:1.95,y:1.28,w:.95,d:.38},exhaust:[...gn(.32,.32,.055),...gn(.5,.32,.055)],plateY:.42,stats:{vmax:298,accel:1,grip:.92}},{id:"f40",rimStyle:"star",trim:9050132,arch:.05,front:"popup",make:"FERRARI",name:"F40",year:1987,group:"80s EXOTIC",paints:[14686232,16765976,15921902],stations:[At(-2.18,.9,.27,.46,.5,.8,"p"),At(-1.5,.95,.22,.6,.66,.88,"p"),At(-.8,.97,.22,.7,.76,.82,"ws"),At(-.05,.98,.22,.76,1.1,.62,"rf"),At(.5,.99,.22,.8,1.1,.62,"lv"),At(1.6,.99,.22,.86,.92,.86,"p"),At(2.18,.99,.28,.88,.92,.9,"p")],wheels:{r:.33,fz:-1.22,rz:1.23,fx:.8,rx:.82,rim:9079440,spokes:5},rear:[{x:0,y:.58,w:1.9,h:.34,c:Li}],lights:[{x:.74,y:.7,w:.2,h:.2,c:Fe,round:!0,brake:!0},{x:.5,y:.7,w:.2,h:.2,c:Fe,round:!0,brake:!0}],side:[{kind:"naca",z0:-.6,z1:.1,y0:.55,y1:.7},{kind:"intake",z0:.2,z1:.9,y0:.45,y1:.78}],wing:{kind:"bridge",z:1.98,y:1.18,w:.98,d:.4},exhaust:[{x:0,y:.5,r:.06},...gn(.16,.5,.06)],plateY:.32,stats:{vmax:324,accel:1.05,grip:.9}},{id:"959",rimStyle:"six",trim:3816e3,front:"round",make:"PORSCHE",name:"959",year:1986,group:"80s EXOTIC",paints:[13159636,15921902,14161944],stations:[At(-2.13,.84,.3,.5,.56,.74,"p"),At(-1.6,.9,.26,.62,.7,.8,"p"),At(-.75,.92,.25,.76,.84,.72,"ws"),At(-.1,.92,.25,.8,1.26,.6,"rf"),At(.35,.92,.25,.82,1.26,.6,"rw"),At(1.45,.94,.25,.86,.96,.8,"p"),At(2.13,.94,.3,.88,.98,.84,"p")],wheels:{r:.34,fz:-1.13,rz:1.14,fx:.74,rx:.78,rim:14212324,spokes:5},rear:[{x:0,y:.74,w:1.86,h:.18,c:3803658}],lights:[{x:0,y:.74,w:1.5,h:.08,c:Fe,brake:!0,mirror:!1},{x:.8,y:.74,w:.22,h:.16,c:Fe,brake:!0}],wing:{kind:"hoop",z:1.85,y:1.12,w:.9,d:.45},exhaust:gn(.45,.34,.05),plateY:.5,stats:{vmax:315,accel:1,grip:1.05}},{id:"r32",rimStyle:"six",trim:2763312,arch:.045,front:"rect",make:"NISSAN",name:"SKYLINE GT-R R32",year:1989,group:"90s JAPAN",paints:[5923952,15921902,12064792],stations:[At(-2.27,.82,.32,.6,.66,.76,"p"),At(-1.9,.86,.3,.72,.78,.8,"p"),At(-.55,.87,.3,.8,.84,.8,"ws"),At(.25,.87,.3,.82,1.32,.66,"rf"),At(1,.87,.3,.84,1.3,.66,"rw"),At(1.55,.87,.3,.88,.98,.8,"p"),At(2.27,.86,.32,.9,1,.8,"p")],wheels:{r:.32,fz:-1.33,rz:1.29,fx:.74,rx:.74,rim:12106948,spokes:6},rear:[{x:0,y:.8,w:.5,h:.18,c:2763310}],lights:[{x:.64,y:.8,w:.22,h:.22,c:Fe,round:!0,brake:!0},{x:.38,y:.8,w:.22,h:.22,c:Fe,round:!0,brake:!0}],wing:{kind:"hoop",z:2.05,y:1.1,w:.74,d:.26},exhaust:[{x:.55,y:.32,r:.065}],plateY:.54,stats:{vmax:285,accel:1.06,grip:1.12}},{id:"supra",rimStyle:"star",trim:3815996,front:"rect",make:"TOYOTA",name:"SUPRA RZ",year:1993,group:"90s JAPAN",paints:[16738832,15921902,14161944],stations:[At(-2.26,.84,.3,.54,.6,.78,"p"),At(-1.8,.89,.27,.66,.72,.84,"p"),At(-.5,.9,.27,.76,.8,.8,"ws"),At(.25,.9,.27,.8,1.24,.64,"rf"),At(.8,.9,.27,.82,1.22,.64,"rw"),At(1.6,.9,.27,.86,.96,.84,"p"),At(2.26,.88,.3,.86,.94,.82,"p")],wheels:{r:.33,fz:-1.28,rz:1.27,fx:.76,rx:.76,rim:13685980,spokes:5},rear:[{x:0,y:.76,w:1.7,h:.28,c:2763312}],lights:[{x:.7,y:.77,w:.26,h:.22,c:Fe,round:!0,brake:!0},{x:.44,y:.77,w:.22,h:.2,c:Fe,round:!0,brake:!0}],wing:{kind:"hoop",z:2,y:1.22,w:.86,d:.32},exhaust:[{x:.6,y:.32,r:.075}],plateY:.5,stats:{vmax:290,accel:1.02,grip:1}},{id:"rx7",rimStyle:"multi",trim:2763310,front:"popup",make:"MAZDA",name:"RX-7",year:1992,group:"90s JAPAN",paints:[16765976,14161944,2787930],stations:[At(-2.15,.84,.3,.5,.56,.76,"p"),At(-1.6,.88,.26,.62,.68,.84,"p"),At(-.45,.88,.26,.74,.78,.78,"ws"),At(.25,.88,.26,.78,1.2,.6,"rf"),At(.7,.88,.26,.8,1.16,.62,"rw"),At(1.55,.88,.26,.84,.92,.8,"p"),At(2.15,.86,.3,.84,.9,.78,"p")],wheels:{r:.32,fz:-1.2,rz:1.23,fx:.74,rx:.74,rim:13159636,spokes:5},rear:[{x:0,y:.74,w:1.66,h:.18,c:Li}],lights:[{x:.66,y:.74,w:.2,h:.15,c:Fe,round:!0,brake:!0},{x:.44,y:.74,w:.2,h:.15,c:Fe,round:!0,brake:!0}],wing:{kind:"hoop",z:1.98,y:1.06,w:.78,d:.24},exhaust:gn(.55,.33,.055),plateY:.52,stats:{vmax:280,accel:1.06,grip:1.12}},{id:"nsx",rimStyle:"multi",trim:1973794,front:"popup",make:"HONDA",name:"NSX",year:1990,group:"90s JAPAN",paints:[13113376,15921902,16765976],stations:[At(-2.21,.84,.3,.5,.56,.76,"p"),At(-1.6,.89,.26,.62,.68,.84,"p"),At(-.95,.9,.26,.72,.78,.8,"ws"),At(-.15,.9,.26,.78,1.15,.62,"rf"),At(.5,.9,.26,.82,1.13,.62,"rw"),At(1,.9,.26,.86,.96,.8,"p"),At(2.21,.9,.3,.9,.96,.84,"p")],wheels:{r:.32,fz:-1.26,rz:1.27,fx:.76,rx:.78,rim:14212324,spokes:7},rear:[{x:0,y:.74,w:1.78,h:.17,c:3803658}],lights:[{x:.68,y:.74,w:.4,h:.12,c:Fe,brake:!0},{x:0,y:.74,w:.9,h:.06,c:9048080,mirror:!1}],side:[{kind:"intake",z0:.3,z1:.95,y0:.45,y1:.78}],wing:{kind:"bridge",z:2,y:1.04,w:.9,d:.3},exhaust:gn(.4,.33,.05),plateY:.46,stats:{vmax:280,accel:1,grip:1.16}},{id:"diablo",rimStyle:"dial",trim:12095592,arch:.06,front:"popup",make:"LAMBORGHINI",name:"DIABLO",year:1990,group:"90s SUPERCAR",paints:[6957768,16765976,15921902],stations:[At(-2.23,.88,.28,.42,.46,.78,"p"),At(-1.4,.95,.24,.58,.64,.88,"p"),At(-.8,.98,.22,.66,.72,.86,"ws"),At(.2,1,.22,.74,1.1,.6,"rf"),At(.65,1.02,.22,.78,1.08,.64,"rw"),At(1.2,1.03,.22,.86,.96,.9,"p"),At(2.23,1.02,.28,.88,.96,.92,"p")],wheels:{r:.33,fz:-1.32,rz:1.33,fx:.82,rx:.86,rim:13685980,spokes:5},rear:[{x:0,y:.66,w:1.96,h:.3,c:Li}],lights:[{x:.8,y:.7,w:.2,h:.17,c:Fe,round:!0,brake:!0},{x:.56,y:.7,w:.2,h:.17,c:Eo,round:!0}],side:[{kind:"intake",z0:.5,z1:1.25,y0:.45,y1:.82}],wing:{kind:"big",z:2,y:1.2,w:.96,d:.34},exhaust:[...gn(.12,.42,.055),...gn(.3,.42,.055)],plateY:.36,stats:{vmax:325,accel:1,grip:.9}},{id:"mclarenf1",rimStyle:"mesh",trim:2763312,drive:"C",front:"slim",make:"McLAREN",name:"F1",year:1992,group:"90s SUPERCAR",paints:[16747034,13159636,14161944],stations:[At(-2.15,.82,.3,.48,.52,.72,"p"),At(-1.5,.88,.26,.6,.66,.82,"p"),At(-1,.9,.25,.68,.74,.78,"ws"),At(-.15,.91,.25,.74,1.13,.56,"rf"),At(.35,.91,.25,.78,1.1,.58,"rw"),At(1,.91,.25,.84,.94,.82,"p"),At(2.15,.9,.3,.86,.92,.84,"p")],wheels:{r:.32,fz:-1.36,rz:1.36,fx:.74,rx:.76,rim:13159636,spokes:5},rear:[{x:0,y:.64,w:1.7,h:.34,c:Li}],lights:[{x:.68,y:.74,w:.14,h:.14,c:Fe,round:!0,brake:!0},{x:.5,y:.74,w:.14,h:.14,c:Fe,round:!0,brake:!0}],side:[{kind:"intake",z0:.2,z1:.9,y0:.5,y1:.82}],wing:{kind:"duck",z:2.1,y:.97,w:.86,d:.14},scoop:!0,exhaust:[{x:0,y:.54,r:.09}],plateY:.34,stats:{vmax:340,accel:1.1,grip:.95}},{id:"f355",rimStyle:"star",trim:11567200,front:"popup",make:"FERRARI",name:"F355",year:1994,group:"90s SUPERCAR",paints:[14686232,16765976,1723034],stations:[At(-2.12,.86,.3,.5,.56,.78,"p"),At(-1.5,.92,.26,.62,.68,.86,"p"),At(-.8,.94,.24,.72,.78,.82,"ws"),At(-.05,.95,.24,.78,1.15,.6,"rf"),At(.5,.95,.24,.82,1.12,.62,"rw"),At(1.1,.95,.24,.86,.96,.84,"p"),At(2.12,.94,.3,.88,.98,.86,"p")],wheels:{r:.32,fz:-1.22,rz:1.23,fx:.78,rx:.8,rim:14212324,spokes:5},rear:[{x:0,y:.5,w:1.2,h:.22,c:Li}],lights:[{x:.72,y:.74,w:.22,h:.2,c:Fe,round:!0,brake:!0},{x:.48,y:.74,w:.22,h:.2,c:Fe,round:!0,brake:!0}],side:[{kind:"intake",z0:.35,z1:1,y0:.45,y1:.76}],louvres:{z0:1.2,z1:1.9,n:6,w:.7},wing:{kind:"duck",z:2.05,y:1,w:.9,d:.16},exhaust:[...gn(.55,.38,.05),...gn(.7,.38,.05)],plateY:.6,stats:{vmax:295,accel:1,grip:1.05}}];class ii{constructor(t){this.s=t>>>0}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}chance(t){return this.next()<t}sign(){return this.next()<.5?-1:1}}const Dc=5,Ih=1.18,jr=5,Jr=[100,150,200,300,400,500],Qr=300,wo=5,Gg=75,Hg=3,Vg=20,Ph=50/30,Wg=90,Xg=6;function To(i){return Math.max(.12,Math.min(.95,1.05-i/70))}function Lh(i,t){return i<=Wg&&i>=-35&&Math.abs(t)<=Xg}const Dh=[{name:"ACE",skill:1.03,corner:.92,aggro:.8},{name:"AOKI",skill:1.01,corner:.95,aggro:.5},{name:"REYES",skill:1,corner:.82,aggro:.9},{name:"VOLK",skill:.99,corner:.88,aggro:.7},{name:"LOLA",skill:.97,corner:.9,aggro:.4},{name:"BLADE",skill:.96,corner:.78,aggro:1},{name:"KENJI",skill:.94,corner:.95,aggro:.3}],qg=3.6;function Yg(i,t,e,n=3,s=0){const r=new ii(e),a=qe.filter(o=>o!==i);for(let o=a.length-1;o>0;o--){const c=r.int(0,o);[a[o],a[c]]=[a[c],a[o]]}return Dh.map((o,c)=>{const l=a[c%a.length],h=Math.floor((Dh.length-c)/2),u=c%2===0?-1:1;return{name:o.name,spec:l,paint:r.pick(l.paints),d:t+9+h*9,x:u*pr*.55,v:0,vmax:l.stats.vmax/qg*o.skill,corner:o.corner,aggro:o.aggro,lane:u*r.range(1,4),steer:0,spin:0,braking:!1,finished:-1,bumpT:0,turbos:n,turboT:0,hp:100,wrecked:!1,wreckT:0,smokeT:0,ammo:s,gunTaken:0,burst:0,fireCool:0,gunT:0,gunTo:-1}})}const zi=()=>performance.now()/1e3;function $g(i,t,e,n,s,r,a,o){const c=e.goalDist;for(const l of i){if(l.remote){const M=l.remote;zi()-M.at>3&&(M.v=0);const v=Math.min(1,zi()-M.at),w=M.d+M.v*v;l.v=M.v,l.d+=l.v*t,l.d+=(w-l.d)*Math.min(1,t*6),Math.abs(w-l.d)>30&&(l.d=w),l.x+=(M.x-l.x)*Math.min(1,t*8),l.spin-=l.v*t/.37;continue}if(!o){l.v=0;continue}if(l.wrecked){l.wreckT+=t,l.v=Math.max(0,l.v-22*t),l.d+=l.v*t,l.spin-=l.v*t/.37,l.braking=!0,l.steer*=1-t*3;continue}const h=e.seg(Math.floor(l.d/jt)),u=e.seg(Math.floor((l.d+70)/jt)),d=Math.max(Math.abs(h.curve),Math.abs(u.curve));let f=l.vmax*(1-Math.min(.3,d*70*(1.15-l.corner)));const g=l.d-r.pos;g>450?f*=.9:g>250?f*=.96:g<-300?f*=1.15:g<-120&&(f*=1.08),l.turboT>0?(l.turboT-=t,f*=1.18):l.turbos>0&&d<9e-4&&l.d<c-300&&g>-200&&g<120&&Math.random()<t*(.05+l.aggro*.1)&&(l.turbos--,l.turboT=Dc),l.d>c+250&&(f=0),l.bumpT>0&&(l.bumpT-=t,f*=.6),l.hp<35&&(f*=.8+.2*(l.hp/35));const _=n.map(M=>({d:M.d,x:M.x,v:M.v,len:s(M)}));for(const M of i)M!==l&&_.push({d:M.d,x:M.x,v:M.v,len:4.4});_.push({d:r.pos,x:r.px,v:r.speed,len:4.4});let m=null;for(const M of _){const v=M.d-l.d;v>0&&v<22+l.v*.5&&Math.abs(M.x-l.x)<2.6&&M.v<l.v+2&&(!m||v<m.d-l.d)&&(m=M)}let p=Math.max(-6,Math.min(6,u.curve*2200))+l.lane*.5;if(m){const M=m.x-3.4,v=m.x+3.4,w=M>-Z+1.2,E=v<Z-1.2;p=w&&(!E||Math.abs(M-l.x)<Math.abs(v-l.x))?M:E?v:l.x,!w&&!E&&(f=Math.min(f,m.v*(.98-(1-l.aggro)*.05)))}p=Math.max(-Z+1.4,Math.min(Z-1.4,p));const x=Math.sign(p-l.x)*Math.min(Math.abs(p-l.x),(6+l.aggro*4)*t);l.x+=x,l.steer+=(x/Math.max(t,.001)/10-l.steer)*Math.min(1,t*8),l.braking=f<l.v-3,l.v+=Math.sign(f-l.v)*Math.min(Math.abs(f-l.v),(l.braking||l.turboT>0?40:22)*t);for(const M of n)Math.abs(M.d-l.d)<s(M)&&Math.abs(M.x-l.x)<2&&(l.v=Math.min(l.v,M.v*.9),l.x+=Math.sign(l.x-M.x||1)*.6);for(const M of i)if(M!==l&&Math.abs(M.d-l.d)<4.2&&Math.abs(M.x-l.x)<1.9){const v=Math.sign(l.x-M.x||1)*.4;l.x+=v,l.d<M.d&&(l.v=Math.min(l.v,M.v))}l.d+=l.v*t,l.spin-=l.v*t/.37,l.finished<0&&l.d>=c&&(l.finished=a)}}function Nh(i,t,e){let n=1;for(const s of i)e>=0?s.finished>=0&&s.finished<e&&n++:(s.finished>=0||s.d>t)&&n++;return n}const ta=i=>`${i}${i===1?"ST":i===2?"ND":i===3?"RD":"TH"}`;function ea(i,t,e,n,s,r){const a=t.goalDist,o=i.map(c=>({name:c.name,car:c.spec.name,time:c.finished>=0?c.finished:c.wrecked?1/0:r+Math.max(0,a-c.d)/Math.max(20,c.v||c.vmax),player:!1,estimated:c.finished<0&&!c.wrecked}));return o.push({name:e,car:n,time:s,player:!0,estimated:!1}),o.sort((c,l)=>c.time-l.time),o.map((c,l)=>({...c,pos:l+1}))}const Uh=i=>{const t=Math.floor(i/60),e=i-t*60;return`${t}'${e.toFixed(2).padStart(5,"0")}`},Kg="modulepreload",Zg=function(i,t){return new URL(i,t).href},Oh={},jg=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=Zg(l,n),l in Oh)return;Oh[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const _=a[g];if(_.href===l&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Kg,h||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((g,_)=>{f.addEventListener("load",g),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})},di=1,Jg="turbo-horizon-86";function Qg(i){const t=Math.random().toString(36).slice(2,10),e=new BroadcastChannel(`th86-${i}`),n=new Map;return e.onmessage=s=>{var a;const r=s.data;!r||r.f===t||r.t&&r.t!==t||(a=n.get(r.a))==null||a(r.d,r.f)},{selfId:t,send:(s,r,a)=>e.postMessage({a:s,d:r,f:t,t:a}),on:(s,r)=>n.set(s,r),onLeave:()=>{},onJoin:()=>{},leave:()=>e.close()}}async function t2(i){const t=await jg(()=>import("./index-BRIyx3g7.js"),[],import.meta.url),e=t.joinRoom({appId:Jg},i),n=new Map,s=r=>{let a=n.get(r);return a||(a=e.makeAction(r),n.set(r,a)),a};return{selfId:t.selfId,send:(r,a,o)=>{s(r).send(a,o?{target:o}:void 0).catch(()=>{})},on:(r,a)=>{s(r).onMessage=(o,c)=>a(o,c.peerId)},onLeave:r=>{e.onPeerLeave=r},onJoin:r=>{e.onPeerJoin=r},leave:()=>{e.leave().catch(()=>{})}}}const Ze=(i,t,e,n=0)=>typeof i=="number"&&Number.isFinite(i)?Math.max(t,Math.min(e,i)):n,$n=(i,t)=>typeof i=="string"?i.slice(0,t):"";function Nc(i){return i.toUpperCase().replace(/[^A-Z0-9 -]/g,"").replace(/\s+/g," ").trim().slice(0,10)}class e2{constructor(t,e){this.room=t,this.peers=new Map,this.status="connecting",this.error="",this.selfId="",this.tr=null,this.timer=0,this.me={name:"PLAYER",car:0,paint:0,status:"lobby",raceId:""},this.onGo=null,this.onSt=null,this.onHit=null,(e?Promise.resolve(Qg(t)):t2(t)).then(n=>{this.tr=n,this.selfId=n.selfId,this.status="online",n.on("hi",(s,r)=>this.gotHi(s,r)),n.on("go",(s,r)=>this.gotGo(s,r)),n.on("st",(s,r)=>this.gotSt(s,r)),n.on("hit",(s,r)=>this.gotHit(s,r)),n.onJoin(s=>this.sendHi(s)),n.onLeave(s=>this.peers.delete(s)),this.sendHi(),this.timer=window.setInterval(()=>{this.sendHi();const s=performance.now()/1e3;for(const[r,a]of this.peers)s-a.seen>6&&this.peers.delete(r)},1e3)}).catch(n=>{this.status="error",this.error=String((n==null?void 0:n.message)??n)})}update(t){}setMe(t){const e=JSON.stringify(this.me);Object.assign(this.me,t),JSON.stringify(this.me)!==e&&this.sendHi()}sendGo(t){var e;(e=this.tr)==null||e.send("go",{p:di,...t})}sendSt(t){var e;(e=this.tr)==null||e.send("st",{p:di,...t})}sendHit(t){var e;(e=this.tr)==null||e.send("hit",{p:di,...t})}gotHit(t,e){var s;const n=t;!n||n.p!==di||(s=this.onHit)==null||s.call(this,{r:$n(n.r,24),to:$n(n.to,64),n:Math.round(Ze(n.n,0,10))},e)}leave(){var t;window.clearInterval(this.timer),(t=this.tr)==null||t.leave(),this.tr=null,this.peers.clear()}list(){return[...this.peers.values()].sort((t,e)=>t.joined-e.joined)}sendHi(t){var e;(e=this.tr)==null||e.send("hi",{p:di,...this.me},t)}gotHi(t,e){const n=t;if(!n||n.p!==di)return;const s=this.peers.get(e),r=performance.now()/1e3;s||this.sendHi(e),this.peers.set(e,{id:e,name:Nc($n(n.name,40))||"PLAYER",car:Math.round(Ze(n.car,0,63)),paint:Math.round(Ze(n.paint,0,15)),status:n.status==="race"?"race":"lobby",raceId:$n(n.raceId,24),joined:(s==null?void 0:s.joined)??r,seen:r})}gotGo(t,e){var a;const n=t;if(!n||n.p!==di||!Array.isArray(n.players))return;const s=n.players.slice(0,8).map(o=>({id:$n(o==null?void 0:o.id,64),name:Nc($n(o==null?void 0:o.name,40))||"PLAYER",car:Math.round(Ze(o==null?void 0:o.car,0,63)),paint:Math.round(Ze(o==null?void 0:o.paint,0,15))})).filter(o=>o.id),r={raceId:$n(n.raceId,24),route:Math.round(Ze(n.route,0,5)),seed:Math.round(Ze(n.seed,0,1e9)),turbos:Math.round(Ze(n.turbos,1,9,5)),weapons:n.weapons===!0,ammo:Math.round(Ze(n.ammo,10,999,300)),players:s};r.raceId&&((a=this.onGo)==null||a.call(this,r,e))}gotSt(t,e){var s;const n=t;!n||n.p!==di||(s=this.onSt)==null||s.call(this,{r:$n(n.r,24),d:Ze(n.d,-1e3,1e6),x:Ze(n.x,-50,50),v:Ze(n.v,0,200),steer:Ze(n.steer,-2,2),br:n.br===!0,tb:n.tb===!0,hp:Ze(n.hp,0,100,100),fin:Ze(n.fin,-1,1e5,-1),gun:$n(n.gun,64)},e)}}function Fh(){const i=location.hash.replace(/^#/,"");return i.startsWith("join")?i.slice(5).toLowerCase().replace(/[^a-z0-9-]/g,"").slice(0,24)||"lobby":null}function n2(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let x=0,M=o.length;x<M;x++){const v=o[x],w=i.attributes[v];c[v]=new w.constructor(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized);const E=i.morphAttributes[v];E&&(l[v]||(l[v]=[]),E.forEach((T,C)=>{const b=new T.array.constructor(T.count*T.itemSize);l[v][C]=new T.constructor(b,T.itemSize,T.normalized)}))}const f=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=f*_;for(let x=0;x<r;x++){const M=n?n.getX(x):x;let v="";for(let w=0,E=o.length;w<E;w++){const T=o[w],C=i.getAttribute(T),b=C.itemSize;for(let S=0;S<b;S++)v+=`${~~(C[u[S]](M)*_+m)},`}if(v in e)h.push(e[v]);else{for(let w=0,E=o.length;w<E;w++){const T=o[w],C=i.getAttribute(T),b=i.morphAttributes[T],S=C.itemSize,D=c[T],W=l[T];for(let H=0;H<S;H++){const V=u[H],nt=d[H];if(D[nt](a,C[V](M)),b)for(let O=0,rt=b.length;O<rt;O++)W[O][nt](a,b[O][V](M))}}e[v]=a,h.push(a),a++}}const p=i.clone();for(const x in i.attributes){const M=c[x];if(p.setAttribute(x,new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)),x in l)for(let v=0;v<l[x].length;v++){const w=l[x][v];p.morphAttributes[x][v]=new w.constructor(w.array.slice(0,a*w.itemSize),w.itemSize,w.normalized)}}return p.setIndex(h),p}class ut{constructor(t=!1){this.pos=[],this.col=[],this.uvs=[],this.tiles=[],this.hasUv=!1,this.hasTile=!1,this.curTile=[12,0,0],this.m=null,this.tmp=new $,this.c=new Lt,this.hasTile=t}layer(t,e){const n=this.curTile;return this.hasTile=!0,this.curTile=[t,0,0],e(),this.curTile=n,this}with(t,e){const n=this.m;return this.m=n?n.clone().multiply(t):t,e(),this.m=n,this}push(t,e,n){this.tmp.set(t[0],t[1],t[2]),this.m&&this.tmp.applyMatrix4(this.m),this.pos.push(this.tmp.x,this.tmp.y,this.tmp.z),this.c.setHex(e),this.col.push(this.c.r,this.c.g,this.c.b),n&&(this.hasUv=!0),this.uvs.push(n?n[0]:0,n?n[1]:0),this.tiles.push(this.curTile[0],this.curTile[1],this.curTile[2])}tri(t,e,n,s,r){return this.push(t,s,r==null?void 0:r[0]),this.push(e,s,r==null?void 0:r[1]),this.push(n,s,r==null?void 0:r[2]),this}quad(t,e,n,s,r,a){if(a){const[o,c,l,h]=a;this.tri(t,e,n,r,[[o,c],[l,c],[l,h]]),this.tri(t,n,s,r,[[o,c],[l,h],[o,h]])}else this.tri(t,e,n,r),this.tri(t,n,s,r);return this}quadC(t,e,n,s,r){return this.push(t,r[0]),this.push(e,r[1]),this.push(n,r[2]),this.push(t,r[0]),this.push(n,r[2]),this.push(s,r[3]),this}quadT(t,e,n,s,r,a,o){return this.hasTile=!0,this.curTile=[o[0],o[1],0],this.quad(t,e,n,s,r,a),this.curTile=[12,0,0],this}facadeBox(t,e,n,s,r,a,o,c,l,h,u,d=0){const[f,g]=Array.isArray(h)?h:[h,h],_=t-s/2,m=t+s/2,p=e-r/2,x=e+r/2,M=n-a/2,v=n+a/2,w=r/l,E=s/c,T=a/c;return this.quadT([m,p,v],[_,p,v],[_,x,v],[m,x,v],f,[d,0,d+E,w],o),this.quadT([_,p,M],[m,p,M],[m,x,M],[_,x,M],f,[d+.5,0,d+.5+E,w],o),this.quadT([_,p,v],[_,p,M],[_,x,M],[_,x,v],g,[d+.25,0,d+.25+T,w],o),this.quadT([m,p,M],[m,p,v],[m,x,v],[m,x,M],g,[d+.75,0,d+.75+T,w],o),this.quad([_,x,M],[m,x,M],[m,x,v],[_,x,v],u),this}poly(t,e){for(let n=1;n<t.length-1;n++)this.tri(t[0],t[n],t[n+1],e);return this}box(t,e,n,s,r,a,o){const c=Array.isArray(o)?o:[o],l=c[0],h=c[1]??l,u=c[2]??l,d=c[3]??l,f=t-s/2,g=t+s/2,_=e-r/2,m=e+r/2,p=n-a/2,x=n+a/2;return this.quad([f,m,p],[g,m,p],[g,m,x],[f,m,x],h),this.quad([f,_,p],[f,_,x],[g,_,x],[g,_,p],l),this.quad([f,_,p],[g,_,p],[g,m,p],[f,m,p],u),this.quad([g,_,x],[f,_,x],[f,m,x],[g,m,x],d),this.quad([f,_,x],[f,_,p],[f,m,p],[f,m,x],l),this.quad([g,_,p],[g,_,x],[g,m,x],[g,m,p],l),this}prism(t,e,n,s,r,a,o,c,l=null,h=0){const u=Array.isArray(c)?c:[c];for(let d=0;d<o;d++){const f=h+d/o*Math.PI*2,g=h+(d+1)/o*Math.PI*2,_=[t+Math.cos(f)*r,n,e+Math.sin(f)*r],m=[t+Math.cos(g)*r,n,e+Math.sin(g)*r],p=[t+Math.cos(g)*a,s,e+Math.sin(g)*a],x=[t+Math.cos(f)*a,s,e+Math.sin(f)*a];a<=1e-4?this.tri(_,m,x,u[d%u.length]):this.quad(_,m,p,x,u[d%u.length])}if(l!==null&&a>1e-4){const d=[];for(let f=0;f<o;f++){const g=h+f/o*Math.PI*2;d.push([t+Math.cos(g)*a,s,e+Math.sin(g)*a])}this.poly(d,l)}return this}blob(t,e,n,s,r,a,o){const c=new nl(1,0),l=c.attributes.position,h=Array.isArray(o)?o:[o];for(let u=0;u<l.count;u+=3){const d=_=>[t+l.getX(_)*s,e+l.getY(_)*r,n+l.getZ(_)*a],f=l.getY(u)+l.getY(u+1)+l.getY(u+2),g=h.length>1?f>.3?h[0]:h[1]:h[0];this.tri(d(u),d(u+1),d(u+2),g)}return c.dispose(),this}build(t=!1){const e=new Ge;if(e.setAttribute("position",new Me(this.pos,3)),e.setAttribute("color",new Me(this.col,3)),this.hasUv&&e.setAttribute("uv",new Me(this.uvs,2)),this.hasTile&&e.setAttribute("tile",new Me(this.tiles,3)),t){const n=n2(e,1e-4);return e.dispose(),n.computeVertexNormals(),n.computeBoundingSphere(),n}return e.computeVertexNormals(),e.computeBoundingSphere(),e}get empty(){return this.pos.length===0}}function i2(i){return new Nt().makeRotationY(i)}function kh(i,t,e){return new Nt().makeTranslation(i,t,e)}const ot={ASPHALT:0,PAINT:1,KERB:2,GRASS:3,SAND:4,SEA:5,CONCRETE:6,TUNNEL:7,PAVING:8,CITY:9,BAY:10,SHALLOW:11,FOAM:12,CEILING:13,DIRT:14,PLAIN:15},s2={[ot.SEA]:.04,[ot.BAY]:.03,[ot.SHALLOW]:.06,[ot.FOAM]:.09},q=128,Dn=4;class rl{constructor(t){this.cv=t,this.s=1,this.g=t.getContext("2d",{willReadFrequently:!0})}seed(t){this.s=t}rnd(){return this.s=this.s*1103515245+12345&2147483647,this.s/2147483647}noise(t,e,n,s,r=[1,1,1]){const a=this.g.createImageData(q,q);for(let o=0;o<q*q;o++){const c=Math.max(0,Math.min(1,n+(this.rnd()-.5)*2*s));a.data[o*4]=255*c*r[0],a.data[o*4+1]=255*c*r[1],a.data[o*4+2]=255*c*r[2],a.data[o*4+3]=255}this.g.putImageData(a,t,e)}wrapRect(t,e,n,s,r,a,o){const c=this.g;c.fillStyle=o;for(const l of[0,-q])for(const h of[0,-q]){const u=n+l,d=s+h;u+r<=0||d+a<=0||u>=q||d>=q||c.fillRect(t+Math.max(0,u),e+Math.max(0,d),Math.min(q,u+r)-Math.max(0,u),Math.min(q,d+a)-Math.max(0,d))}}dot(t,e,n,s=1){this.wrapRect(t,e,Math.floor(this.rnd()*q),Math.floor(this.rnd()*q),s,s,n)}grey(t,e=1){const n=Math.round(255*t);return`rgba(${n},${n},${n},${e})`}}function r2(i,t){const e=t%Dn*q,n=Math.floor(t/Dn)*q,s=i.g;switch(i.seed(t*7919+13),s.save(),s.beginPath(),s.rect(e,n,q,q),s.clip(),t){case ot.ASPHALT:{i.noise(e,n,.88,.05);for(let r=0;r<700;r++)i.dot(e,n,i.grey(i.rnd()<.5?.97:.72));i.wrapRect(e,n,70,20,34,22,i.grey(.8)),i.wrapRect(e,n,70,20,34,1,i.grey(.68)),i.wrapRect(e,n,70,41,34,1,i.grey(.68)),s.strokeStyle=i.grey(.6),s.lineWidth=1;for(let r=0;r<3;r++){s.beginPath();let a=e+i.rnd()*q,o=n+i.rnd()*q;s.moveTo(a,o);for(let c=0;c<7;c++)a+=(i.rnd()-.5)*14,o+=3+i.rnd()*7,s.lineTo(a,o);s.stroke()}i.wrapRect(e,n,26,0,14,q,"rgba(0,0,0,0.05)"),i.wrapRect(e,n,88,0,14,q,"rgba(0,0,0,0.05)");break}case ot.PAINT:{i.noise(e,n,.97,.03);for(let r=0;r<160;r++)i.dot(e,n,i.grey(.78+i.rnd()*.1),i.rnd()<.3?2:1);break}case ot.KERB:{for(let r=0;r<q;r++){const a=.78+.22*Math.sin(r/q*Math.PI);s.fillStyle=i.grey(a),s.fillRect(e+r,n,1,q)}for(let r=0;r<q;r+=32)i.wrapRect(e,n,0,r,q,2,i.grey(.55));for(let r=0;r<200;r++)i.dot(e,n,"rgba(0,0,0,0.12)");break}case ot.GRASS:{i.noise(e,n,.84,.06);for(let r=0;r<40;r++){const a=i.rnd()*q,o=i.rnd()*q,c=4+i.rnd()*8;i.wrapRect(e,n,a,o,c,c*.6,"rgba(0,0,0,0.08)")}for(let r=0;r<420;r++){const a=Math.floor(i.rnd()*q),o=Math.floor(i.rnd()*q),c=i.rnd()<.6;i.wrapRect(e,n,a,o,1,2+Math.floor(i.rnd()*3),c?i.grey(1,.85):"rgba(0,0,0,0.25)")}for(let r=0;r<14;r++)i.dot(e,n,"rgba(255,255,255,1)",2);break}case ot.DIRT:{i.noise(e,n,.85,.08);for(let r=0;r<120;r++)i.dot(e,n,i.rnd()<.5?i.grey(1):i.grey(.62),i.rnd()<.3?2:1);break}case ot.SAND:{for(let r=0;r<q;r++)for(let a=0;a<q;a++){const c=.9+Math.sin(a/q*Math.PI*8+Math.sin(r/q*Math.PI*2)*2.2)*.04+(i.rnd()-.5)*.06;s.fillStyle=i.grey(c),s.fillRect(e+a,n+r,1,1)}for(let r=0;r<70;r++)i.dot(e,n,i.grey(1),i.rnd()<.3?2:1);for(let r=0;r<8;r++)i.wrapRect(e,n,40+r%2*7+r*2,r*16,4,7,"rgba(0,0,0,0.13)");break}case ot.SEA:case ot.BAY:case ot.SHALLOW:{const r=t===ot.SHALLOW?.86:.8;if(i.noise(e,n,r,.03),t===ot.SHALLOW){s.strokeStyle=i.grey(1,.55);for(let a=0;a<26;a++){s.beginPath();const o=e+i.rnd()*q,c=n+i.rnd()*q;s.moveTo(o,c),s.quadraticCurveTo(o+(i.rnd()-.5)*30,c+(i.rnd()-.5)*30,o+(i.rnd()-.5)*40,c+(i.rnd()-.5)*40),s.stroke()}}for(let a=0;a<60;a++){const o=i.rnd()*q,c=i.rnd()*q,l=6+i.rnd()*16;i.wrapRect(e,n,o,c+1,l,1,"rgba(0,0,0,0.12)"),i.wrapRect(e,n,o+2,c,l-3,1,i.grey(1,t===ot.BAY?.55:.9))}for(let a=0;a<40;a++)i.dot(e,n,i.grey(1));break}case ot.FOAM:{i.noise(e,n,.93,.07);for(let r=0;r<80;r++)i.wrapRect(e,n,i.rnd()*q,i.rnd()*q,3+i.rnd()*8,2,"rgba(0,0,0,0.08)");break}case ot.CONCRETE:{i.noise(e,n,.88,.04);for(let r=0;r<10;r++)i.wrapRect(e,n,i.rnd()*q,i.rnd()*q,6+i.rnd()*20,4+i.rnd()*14,"rgba(0,0,0,0.05)");i.wrapRect(e,n,0,0,2,q,i.grey(.6)),i.wrapRect(e,n,64,0,1,q,i.grey(.72)),i.wrapRect(e,n,0,0,q,1,i.grey(.72));for(let r=0;r<4;r++)i.wrapRect(e,n,10+r*31,0,2,20+i.rnd()*40,"rgba(0,0,0,0.07)");break}case ot.TUNNEL:{i.noise(e,n,.93,.03);for(let r=0;r<q;r+=16)i.wrapRect(e,n,0,r,q,1,i.grey(.72));for(let r=0;r<q;r+=16)for(let a=r/16%2?8:0;a<q;a+=16)i.wrapRect(e,n,a,r,1,16,i.grey(.76));for(let r=0;r<6;r++)i.wrapRect(e,n,i.rnd()*q,i.rnd()*q,10,6,"rgba(0,0,0,0.08)");break}case ot.CEILING:{i.noise(e,n,.86,.04);for(let r=0;r<q;r+=32)i.wrapRect(e,n,r,0,2,q,i.grey(.6));i.wrapRect(e,n,0,60,q,6,i.grey(.7));break}case ot.PAVING:{i.noise(e,n,.9,.04);for(let r=0;r<q;r+=16){i.wrapRect(e,n,0,r,q,1,i.grey(.68));for(let a=r/16%2?16:0;a<q;a+=32)i.wrapRect(e,n,a,r,1,16,i.grey(.68))}for(let r=0;r<12;r++)i.wrapRect(e,n,Math.floor(i.rnd()*4)*32+1,Math.floor(i.rnd()*8)*16+1,31,15,"rgba(0,0,0,0.05)");break}case ot.CITY:{s.fillStyle="#16182c",s.fillRect(e,n,q,q);for(let r=0;r<4;r++){const a=r*32+14;i.wrapRect(e,n,0,a,q,3,"#3a3a50"),i.wrapRect(e,n,r*32+14,0,3,q,"#3a3a50");for(let o=2;o<q;o+=8)i.wrapRect(e,n,o,a-1,1,1,"#ffd890")}for(let r=0;r<90;r++){const a=["#ffe8a0","#fff6d8","#a0f0ff","#ffb060"][Math.floor(i.rnd()*4)];i.dot(e,n,a)}for(let r=0;r<18;r++){const a=Math.floor(i.rnd()*4)*32+15;i.wrapRect(e,n,i.rnd()*q,a,2,1,i.rnd()<.5?"#ff3020":"#ffffff")}break}default:s.fillStyle="#ffffff",s.fillRect(e,n,q,q)}s.restore()}function a2(){const i=document.createElement("canvas");i.width=i.height=q*Dn;const t=new rl(i);for(let e=0;e<16;e++)r2(t,e);return al(i)}function al(i){const t=i.getContext("2d"),e=new Uint8Array(q*q*4*16);for(let s=0;s<16;s++){const r=t.getImageData(s%Dn*q,Math.floor(s/Dn)*q,q,q).data;for(let a=0;a<q;a++)e.set(r.subarray((q-1-a)*q*4,(q-a)*q*4),(s*q*q+a*q)*4)}const n=new $c(e,q,q,16);return n.wrapS=n.wrapT=Aa,n.magFilter=un,n.minFilter=gi,n.generateMipmaps=!0,n.colorSpace=ze,n.needsUpdate=!0,n}function Mr(i){return[i,0]}const K0=new H0(new Uint8Array([255,255,255,255]),1,1);K0.needsUpdate=!0;function La(i,t,e){const n=e??{value:0};return i.map=K0,i.onBeforeCompile=s=>{s.uniforms.uTime=n,s.uniforms.uArr={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 tile;
varying vec3 vTile;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vTile = tile;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTile;
uniform float uTime;
uniform highp sampler2DArray uArr;`).replace("#include <map_fragment>",`
#ifdef USE_MAP
  vec2 tuv = vMapUv + vec2(0.0, vTile.z * uTime);
  diffuseColor *= texture(uArr, vec3(tuv, vTile.x + 0.25));
#endif`)},i.customProgramCacheKey=()=>"tilearray",n}const be={HOTEL:0,DECO:1,SHOP:2,MOTEL:3,OFFICE_WARM:4,OFFICE_COOL:5,OFFICE_DARK:6,APARTMENT:7,STONE:8};function o2(i,t){const e=t%Dn*q,n=Math.floor(t/Dn)*q,s=i.g;i.seed(t*104729+7);const r=(a,o,c,l,h)=>{s.fillStyle=h,s.fillRect(e+a,n+o,c,l)};switch(s.save(),s.beginPath(),s.rect(e,n,q,q),s.clip(),t){case be.HOTEL:{r(0,0,q,q,"#f4f2ec");for(let a=0;a<4;a++){const o=a*32;r(0,o+30,q,2,"#d8d4cc");for(let c=0;c<4;c++){const l=c*32+5;r(l-1,o+5,24,20,"#c8c8c8");const h=s.createLinearGradient(0,n+o+6,0,n+o+24);h.addColorStop(0,"#2a6aa8"),h.addColorStop(1,"#6ab4e4"),s.fillStyle=h,s.fillRect(e+l,n+o+6,22,18),r(l+10,o+6,2,18,"#e8e8e8"),s.fillStyle="rgba(255,255,255,0.35)",s.beginPath(),s.moveTo(e+l+2,n+o+22),s.lineTo(e+l+9,n+o+7),s.lineTo(e+l+12,n+o+7),s.lineTo(e+l+5,n+o+22),s.fill(),r(l-3,o+21,28,2,"#ffffff");for(let u=0;u<7;u++)r(l-2+u*4,o+23,1,5,"#ffffff");r(l-3,o+28,28,2,"#bdbab2")}}break}case be.DECO:{r(0,0,q,q,"#f6f0e4");for(let a=0;a<q;a+=32)r(a,0,4,q,"#e2dacb"),r(a+4,0,1,q,"#cfc6b4");for(let a=0;a<4;a++){const o=a*32;r(0,o,q,3,"#e8e0d0");for(let c=0;c<4;c++){const l=c*32+9;s.fillStyle="#3a78a8",s.beginPath(),s.arc(e+l+7,n+o+13,6,0,Math.PI*2),s.fill(),s.strokeStyle="#ffffff",s.lineWidth=1.5,s.stroke(),r(l+2,o+22,10,6,"#3a78a8"),r(l+1,o+21,12,1,"#ffffff")}}break}case be.SHOP:{r(0,0,q,q,"#f2eee6"),r(0,0,q,10,"#e4ddd0");for(let a=0;a<4;a++)r(a*32+8,18,16,14,"#4a86b8");r(0,40,q,4,"#d0c8b8"),r(4,52,120,70,"#2a3a4c");for(let a=0;a<30;a++)r(6+i.rnd()*110,70+i.rnd()*44,4+i.rnd()*6,3+i.rnd()*6,["#ff6a8a","#ffe060","#60d0ff","#ffffff","#90e060"][Math.floor(i.rnd()*5)]);r(4,52,120,3,"#8ab8d8"),r(54,64,20,58,"#1a2430"),r(70,92,2,4,"#e0c060");for(let a=4;a<124;a+=30)r(a,52,2,70,"#d8d8d8");break}case be.MOTEL:{r(0,0,q,q,"#f4efe6");for(let a=0;a<2;a++){const o=a*64;r(0,o+58,q,6,"#d6d0c4"),r(0,o+54,q,2,"#ffffff");for(let c=0;c<16;c++)r(c*8,o+54,1,6,"#ffffff");for(let c=0;c<2;c++){const l=c*64;r(l+6,o+14,16,38,["#2a8a8a","#c85a4a"][c]),r(l+18,o+32,2,3,"#e0c060"),r(l+30,o+18,26,18,"#4a7aa8"),r(l+30,o+18,26,2,"#ffffff"),r(l+34,o+38,14,8,"#c8c8c8"),r(l+35,o+39,12,1,"#9a9a9a")}}break}case be.OFFICE_WARM:case be.OFFICE_COOL:case be.OFFICE_DARK:{r(0,0,q,q,"#1a1e36");const a=t===be.OFFICE_WARM?.42:t===be.OFFICE_COOL?.55:.12,o=["#ffe6a0","#ffd27a","#fff2c8"],c=["#e8f6ff","#c8ecff","#ffffff"];for(let l=0;l<8;l++){const h=l*16,u=t===be.OFFICE_COOL&&i.rnd()<.5;for(let d=0;d<8;d++){const f=d*16,g=u||i.rnd()<a,_=g?i.rnd()<.15?"#8adfff":(t===be.OFFICE_COOL?c:o)[Math.floor(i.rnd()*3)]:"#262c4c";if(r(f+2,h+3,12,10,_),g&&i.rnd()<.4)for(let m=0;m<4;m++)r(f+2,h+4+m*3,12,1,"rgba(0,0,0,0.25)");g&&i.rnd()<.2&&r(f+5,h+8,3,5,"rgba(20,20,40,0.6)"),g||r(f+3,h+4,4,1,"rgba(120,140,200,0.4)")}r(0,h,q,2,"#2a3054")}for(let l=0;l<q;l+=16)r(l,0,2,q,"#2c3258");break}case be.APARTMENT:{r(0,0,q,q,"#2a2440");for(let a=0;a<6;a++){const o=a*21;for(let c=0;c<4;c++){const l=c*32,h=i.rnd()<.5;r(l+4,o+3,24,13,h?["#ffb860","#ffd890","#fff0c8"][Math.floor(i.rnd()*3)]:"#3a3456"),h&&r(l+4+i.rnd()*18,o+3,6,13,"rgba(255,240,220,0.6)"),r(l+2,o+15,28,2,"#8a86a0");for(let u=0;u<7;u++)r(l+3+u*4,o+17,1,3,"#6a6680");i.rnd()<.3&&r(l+24,o+9,4,6,"#b0b0c0")}}break}case be.STONE:{i.noise(e,n,.9,.05);for(let a=0;a<q;a+=16)r(0,a,q,1,"rgba(0,0,0,0.18)");break}default:r(0,0,q,q,"#ffffff")}s.restore()}function c2(){const i=document.createElement("canvas");i.width=i.height=q*Dn;const t=new rl(i);for(let e=0;e<16;e++)o2(t,e);return al(i)}const $t={LENS:0,LENS_ROUND:1,LENS_BAR:2,MESH:3,LOUVRE:4,TREAD:5,RIM_STAR:6,RIM_MULTI:7,RIM_MESH:8,RIM_DIAL:9,SIDEWALL:10,RIM_STEEL:11,PLAIN:12,HEADLAMP:13,SEAT:14,RIM_SIX:15},l2={star:$t.RIM_STAR,six:$t.RIM_SIX,multi:$t.RIM_MULTI,mesh:$t.RIM_MESH,dial:$t.RIM_DIAL,steel:$t.RIM_STEEL};function h2(i,t){const e=t%Dn*q,n=Math.floor(t/Dn)*q,s=i.g;i.seed(t*15485863+3);const r=(u,d,f,g,_)=>{s.fillStyle=_,s.fillRect(e+u,n+d,f,g)},a=q/2,o=(u,d,f=a,g=a)=>{s.fillStyle=d,s.beginPath(),s.arc(e+f,n+g,u,0,Math.PI*2),s.fill()},c=(u,d,f)=>{s.strokeStyle=f,s.lineWidth=d,s.beginPath(),s.arc(e+a,n+a,u,0,Math.PI*2),s.stroke()},l=(u,d=14)=>{o(d+3,i.grey(.55)),o(d,i.grey(.92));for(let f=0;f<u;f++){const g=f/u*Math.PI*2;o(2.6,i.grey(.35),a+Math.cos(g)*d*.62,a+Math.sin(g)*d*.62)}o(4,i.grey(.7))},h=()=>{c(61,6,i.grey(1)),c(57,2,i.grey(.6))};switch(s.save(),s.beginPath(),s.rect(e,n,q,q),s.clip(),s.clearRect(e,n,q,q),t){case $t.LENS:{r(0,0,q,q,i.grey(.55)),r(6,8,q-12,q-16,i.grey(.88));for(let d=10;d<q-10;d+=9)r(6,d,q-12,2,i.grey(.62));for(let d=10;d<q-8;d+=14)r(d,8,1,q-16,i.grey(.7));const u=s.createRadialGradient(e+a,n+a,4,e+a,n+a,60);u.addColorStop(0,"rgba(255,255,255,0.75)"),u.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=u,s.fillRect(e,n,q,q);break}case $t.LENS_ROUND:{r(0,0,q,q,i.grey(.5)),o(62,i.grey(.6));for(let u=58;u>8;u-=7)o(u,i.grey(.72+(58-u)/200)),c(u,1.5,i.grey(.55+(58-u)/250));o(12,i.grey(1));break}case $t.LENS_BAR:{r(0,0,q,q,i.grey(.7));for(let u=0;u<q;u+=4)r(u,0,2,q,i.grey(.9));r(0,0,q,10,i.grey(.5)),r(0,q-10,q,10,i.grey(.5)),r(0,a-3,q,6,i.grey(1));break}case $t.MESH:{r(0,0,q,q,i.grey(.12)),s.strokeStyle=i.grey(.85),s.lineWidth=1.6;for(let u=-q;u<q*2;u+=10)s.beginPath(),s.moveTo(e+u,n),s.lineTo(e+u+q,n+q),s.stroke(),s.beginPath(),s.moveTo(e+u,n+q),s.lineTo(e+u+q,n),s.stroke();break}case $t.LOUVRE:{for(let u=0;u<q;u+=16){const d=s.createLinearGradient(0,n+u,0,n+u+16);d.addColorStop(0,i.grey(1)),d.addColorStop(.55,i.grey(.7)),d.addColorStop(.6,i.grey(.08)),d.addColorStop(1,i.grey(.15)),s.fillStyle=d,s.fillRect(e,n+u,q,16)}break}case $t.TREAD:{i.noise(e,n,.85,.05);for(const u of[30,62,94])r(u,0,5,q,i.grey(.25));for(let u=0;u<q;u+=16)for(const[d,f]of[[0,30],[35,62],[67,94],[99,q]])s.strokeStyle=i.grey(.32),s.lineWidth=2.5,s.beginPath(),s.moveTo(e+d,n+u+(d<64?0:6)),s.lineTo(e+f,n+u+(d<64?6:0)),s.stroke();break}case $t.SIDEWALL:{r(0,0,q,q,i.grey(.16)),r(0,q-10,q,10,i.grey(.1)),r(0,0,q,6,i.grey(.24)),s.fillStyle=i.grey(.62),s.font="bold 28px monospace",s.textBaseline="middle",s.save(),s.translate(e+2,n+a),s.scale(.58,1.3),s.fillText("TURBO-R",0,0),s.restore();break}case $t.HEADLAMP:{r(0,0,q,q,i.grey(.55));const u=s.createRadialGradient(e+a,n+a,2,e+a,n+a,58);u.addColorStop(0,i.grey(1)),u.addColorStop(.3,i.grey(.95)),u.addColorStop(.75,i.grey(.72)),u.addColorStop(1,i.grey(.5)),s.fillStyle=u,s.fillRect(e+4,n+4,q-8,q-8),s.strokeStyle="rgba(0,0,0,0.12)",s.lineWidth=1;for(let d=8;d<q;d+=10)s.beginPath(),s.moveTo(e+d,n),s.lineTo(e+d,n+q),s.stroke(),s.beginPath(),s.moveTo(e,n+d),s.lineTo(e+q,n+d),s.stroke();break}case $t.SEAT:{r(0,0,q,q,i.grey(.8));for(let u=24;u<q-24;u+=10)r(u,0,2,q,i.grey(.55));r(0,0,20,q,i.grey(.65)),r(q-20,0,20,q,i.grey(.65));break}case $t.RIM_STAR:{h(),s.fillStyle=i.grey(.92);for(let u=0;u<5;u++){const d=u/5*Math.PI*2;s.save(),s.translate(e+a,n+a),s.rotate(d),s.beginPath(),s.moveTo(-9,0),s.lineTo(-6,59),s.lineTo(6,59),s.lineTo(9,0),s.fill(),s.fillStyle=i.grey(.6),s.fillRect(-1,10,2,46),s.fillStyle=i.grey(.92),s.restore()}l(5);break}case $t.RIM_SIX:{h();for(let u=0;u<6;u++){const d=u/6*Math.PI*2;s.save(),s.translate(e+a,n+a),s.rotate(d),s.fillStyle=i.grey(.9),s.fillRect(-7,0,5,59),s.fillRect(2,0,5,59),s.restore()}l(5,16);break}case $t.RIM_MULTI:{h();for(let u=0;u<7;u++){const d=u/7*Math.PI*2;s.save(),s.translate(e+a,n+a),s.rotate(d),s.fillStyle=i.grey(.92),s.beginPath(),s.moveTo(-4,8),s.quadraticCurveTo(-14,34,-6,59),s.lineTo(5,59),s.quadraticCurveTo(-2,34,6,8),s.fill(),s.restore()}l(5);break}case $t.RIM_MESH:{s.save(),s.beginPath(),s.arc(e+a,n+a,58,0,Math.PI*2),s.clip(),s.strokeStyle=i.grey(.88),s.lineWidth=3;for(let u=0;u<20;u++){const d=u/20*Math.PI*2;for(const f of[-.5,.5])s.beginPath(),s.moveTo(e+a+Math.cos(d)*14,n+a+Math.sin(d)*14),s.lineTo(e+a+Math.cos(d+f)*60,n+a+Math.sin(d+f)*60),s.stroke()}s.restore(),h(),l(5,16);break}case $t.RIM_DIAL:{o(60,i.grey(.86)),s.globalCompositeOperation="destination-out";for(let u=0;u<5;u++){const d=u/5*Math.PI*2;o(15,"#000",a+Math.cos(d)*36,a+Math.sin(d)*36)}s.globalCompositeOperation="source-over";for(let u=0;u<5;u++){const d=u/5*Math.PI*2;s.strokeStyle=i.grey(.55),s.lineWidth=2,s.beginPath(),s.arc(e+a+Math.cos(d)*36,n+a+Math.sin(d)*36,16,0,Math.PI*2),s.stroke()}h(),l(5);break}case $t.RIM_STEEL:{o(62,i.grey(.45)),o(52,i.grey(.9)),c(40,2,i.grey(.6));for(let u=0;u<8;u++){const d=u/8*Math.PI*2;o(4,i.grey(.4),a+Math.cos(d)*46,a+Math.sin(d)*46)}o(14,i.grey(.7));break}default:r(0,0,q,q,"#ffffff")}s.restore()}let na=null;function u2(){if(na)return na;const i=document.createElement("canvas");i.width=i.height=q*Dn;const t=new rl(i);for(let e=0;e<16;e++)h2(t,e);return na=al(i),na}function ei(i,t,e,n,s=10,r=7){const a=typeof n=="number"?()=>n:n,o=(c,l)=>{const h=l/r*Math.PI,u=c/s*Math.PI*2;return[t[0]+Math.sin(h)*Math.cos(u)*e[0],t[1]+Math.cos(h)*e[1],t[2]+Math.sin(h)*Math.sin(u)*e[2]]};for(let c=0;c<r;c++)for(let l=0;l<s;l++){const h=(c+.5)/r*Math.PI,u=(l+.5)/s*Math.PI*2,d=[Math.sin(h)*Math.cos(u),Math.cos(h),Math.sin(h)*Math.sin(u)];i.quad(o(l,c),o(l+1,c),o(l+1,c+1),o(l,c+1),a(d[0],d[1],d[2]))}}function Z0(i,t,e,n,s=12,r=8){ei(i,t,[e*.92,e,e*1.04],(a,o,c)=>c<-.42&&o>-.3&&o<.38?o>.2?2768472:1055270:c<-.5&&o<=-.3?14211284:Math.abs(a)<.2&&o>-.1?n:o<-.55?1710620:o>.3?16777215:15132386,s,r)}function j0(i,t,e,n,s){const r=new Lt(n).multiplyScalar(.7).getHex();ei(i,t,e,(a,o)=>o>.15&&o<.45?s:o<-.3?r:n,10,6)}function d2(i,t,e){const n=new Lt(t).multiplyScalar(.8).getHex();ei(i,[0,0,-.12],[.062,.062,.15],(a,o)=>o>.5?e:t,8,5),ei(i,[0,-.012,-.33],[.052,.052,.13],n,8,5),ei(i,[0,-.018,-.465],[.05,.055,.05],1315862,8,5);const s=2763824,r=4869718;return i.box(0,.035,-.56,.06,.075,.26,[s,r,s,s]),i.box(0,.077,-.56,.04,.01,.22,r),i.box(0,.02,-.4,.05,.03,.12,1973792),i.with(new Nt().makeTranslation(0,-.03,-.47).multiply(new Nt().makeRotationX(.25)),()=>i.box(0,0,0,.04,.1,.045,1710620)),i.with(new Nt().makeTranslation(0,-.07,-.6).multiply(new Nt().makeRotationX(-.18)),()=>i.box(0,0,0,.032,.16,.05,[2105380,3158068])),i.with(new Nt().makeRotationX(-Math.PI/2),()=>{i.prism(0,.04,.69,.8,.024,.024,8,[s,1052690],s),i.prism(0,.04,.8,.9,.013,.013,6,r,328965)}),i.box(0,.08,-.66,.012,.025,.012,r),[0,.04,-.92]}const f2=3428460,p2=3954804,An=1447448,Ce=657932,ds=13949152,zh=723725,ia=5921376,Qe=(i,t)=>new Lt(i).multiplyScalar(t).getHex(),m2=(i,t,e)=>new Lt(i).lerp(new Lt(t),e).getHex();function js(i,t){const e=i.length,n=i.map(o=>o.z),s=i.map(o=>o[t]),r=[];for(let o=0;o<e-1;o++)r.push((s[o+1]-s[o])/Math.max(1e-4,n[o+1]-n[o]));const a=[];for(let o=0;o<e;o++)if(o===0)a.push(r[0]*.5);else if(o===e-1)a.push(r[e-2]*.5);else if(r[o-1]*r[o]<=0)a.push(0);else{const c=(r[o-1]+r[o])/2;a.push(Math.sign(c)*Math.min(Math.abs(c),3*Math.abs(r[o-1]),3*Math.abs(r[o])))}return o=>{if(o<=n[0])return s[0];if(o>=n[e-1])return s[e-1];let c=0;for(;c<e-2&&o>n[c+1];)c++;const l=n[c+1]-n[c];if(l<1e-4)return s[c+1];const h=(o-n[c])/l,u=h*h,d=u*h;return(2*d-3*u+1)*s[c]+(d-2*u+h)*l*a[c]+(-2*d+3*u)*s[c+1]+(d-u)*l*a[c+1]}}const sa=i=>i==="ws"||i==="rf"||i==="rw";function Da(i,t,e,n,s,r,a,o,c,l){i.tri(t,e,n,r,[a,o,c]),i.tri(t,n,s,r,[a,c,l])}function Bh(i,t,e,n,s,r,a,o,c,l=o){i.layer(c,()=>{const h=t-s/2,u=t+s/2,d=e-r/2,f=e+r/2,g=n-a/2,_=n+a/2;i.quad([h,f,g],[u,f,g],[u,f,_],[h,f,_],o,[0,0,1,.3]),i.quad([h,d,g],[u,d,g],[u,f,g],[h,f,g],o,[0,0,1,1]),i.quad([u,d,_],[h,d,_],[h,f,_],[u,f,_],l,[0,0,1,1]),i.quad([h,d,_],[h,d,g],[h,f,g],[h,f,_],Qe(o,.8),[0,0,.2,1]),i.quad([u,d,g],[u,d,_],[u,f,_],[u,f,g],Qe(o,.8),[0,0,.2,1]),i.quad([h,d,g],[h,d,_],[u,d,_],[u,d,g],Qe(o,.6),[0,0,1,.3])})}function Gh(i,t,e,n,s){const r=new $(...t),a=new $(...e),o=r.distanceTo(a),c=new Nt().lookAt(r,a,new $(0,1,0));c.setPosition(r.clone().add(a).multiplyScalar(.5)),i.with(c,()=>i.box(0,0,0,n,n,o,s))}function Hh(i,t,e,n,s=8,r=5,a=n){const o=(c,l)=>{const h=l/r*Math.PI,u=c/s*Math.PI*2;return[t[0]+Math.sin(h)*Math.cos(u)*e,t[1]+Math.cos(h)*e,t[2]+Math.sin(h)*Math.sin(u)*e]};for(let c=0;c<r;c++)for(let l=0;l<s;l++){const h=c===1?a:n;i.quad(o(l,c),o(l+1,c),o(l+1,c+1),o(l,c+1),h)}}function Gi(i,t,e,n,s){for(let r=0;r<n;r++){const a=r/n*Math.PI*2,o=(r+1)/n*Math.PI*2;i.quad([Math.cos(a)*t,Math.sin(a)*t,0],[Math.cos(o)*t,Math.sin(o)*t,0],[Math.cos(o)*e,Math.sin(o)*e,0],[Math.cos(a)*e,Math.sin(a)*e,0],s)}}function Uc(i,t,e,n,s,r,a,o,c){i.layer(c,()=>{for(let l=0;l<a;l++){const h=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.tri([t,e,n],[t+Math.cos(h)*s,e+Math.sin(h)*r,n],[t+Math.cos(u)*s,e+Math.sin(u)*r,n],o,[[.5,.5],[.5+Math.cos(h)*.5,.5+Math.sin(h)*.5],[.5+Math.cos(u)*.5,.5+Math.sin(u)*.5]])}})}function J0(i,t,e=!1){var Q;const n=new ut(!0),s=new ut(!0),r=new ut(!0),a=new ut,o=new ut(!0),c=new ut(!0),l=i.stations,h=l[0],u=l[l.length-1],d=h.z,f=u.z,g=js(l,"w"),_=js(l,"yb"),m=js(l,"belt"),p=js(l,"top"),x=js(l,"wt"),M=y=>{let L=l[0].seg;for(const I of l)y>=I.z-1e-6&&(L=I.seg);return L},v=Qe(t,.42),w=Qe(t,.82),E=i.group==="80s EXOTIC",T=i.wheels,C=e?.11:T.hw??.18,b=[{z:T.fz,x:e?g(T.fz)-.12:T.fx,r:T.r,hw:C,R:0,flare:0},{z:T.rz,x:e?g(T.rz)-.12:T.rx,r:e?T.r:T.r*1.03,hw:e?C:C*1.15,R:0,flare:0}];for(const y of b){y.R=y.r+(e?.06:.07);const L=y.x+y.hw+.02-g(y.z);y.flare=Math.max(i.arch??(e?.012:.035),L)}const S=y=>{let L=0;for(const I of b){const F=(y-I.z)/(I.R+.5);Math.abs(F)<1&&(L+=I.flare*Math.cos(F*Math.PI/2)**2)}return L},D=y=>{let L=-1;for(const I of b){const F=y-I.z;Math.abs(F)<=I.R&&(L=Math.max(L,I.r+Math.sqrt(I.R*I.R-F*F)))}return L},W=y=>{const L=g(y),I=_(y),F=m(y),B=p(y),k=Math.min(x(y),L-.02),gt=M(y),G=S(y),ct=D(y),Mt=F-I,vt=sa(gt)?.03:.022,ft=[[L-.05,I],[L+G,I+.12*Mt],[L+G+.014,I+.5*Mt],[L+G*.85,I+.82*Mt],[L-.02+G*.5,F],sa(gt)?[L-.03-(L-.03-k)*.42,F+(B-F)*.52]:[k+(L-k)*.55,F+(B-F)*.8],[k,B],[k*.5,B+vt*.75],[0,B+vt]];if(ct>0){for(let It=0;It<4;It++)ft[It][1]=Math.max(ft[It][1],ct+(It===3?.03:0));ft[4][1]=Math.max(ft[4][1],ct+.07),ft[5][1]=Math.max(ft[5][1],ft[4][1]-.015),ft[6][1]=Math.max(ft[6][1],ct+.03)}return{z:y,seg:gt,pts:ft}},H=e?.6:.17,V=[];for(let y=0;y<l.length-1;y++){const L=Math.max(1,Math.ceil((l[y+1].z-l[y].z)/H));for(let I=0;I<L;I++)V.push(l[y].z+(l[y+1].z-l[y].z)*I/L)}V.push(f);const nt=e?[-1.02,-1,-.5,.5,1,1.02]:[-1.03,-1,-.92,-.7,-.38,0,.38,.7,.92,1,1.03];for(const y of b)for(const L of nt)V.push(y.z+y.R*L);V.sort((y,L)=>y-L);const O=[];for(const y of V)y<d||y>f||O.length&&y-O[O.length-1]<.006||O.push(y);const rt=O.map(W),z=(y,L,I,F=0,B=0)=>[I*(y.pts[L][0]+F),y.pts[L][1]+B,y.z],tt=((Q=l.find(y=>y.seg==="lv"))==null?void 0:Q.z)??0;for(let y=0;y<rt.length-1;y++){const L=rt[y],I=rt[y+1],F=L.seg;for(const B of[-1,1])for(let k=0;k<8;k++){let gt=z(L,k,B),G=z(I,k,B),ct=z(I,k+1,B),Mt=z(L,k+1,B);B>0&&([G,Mt]=[Mt,G]);const vt=(k===4||k===5)&&sa(F),ft=(k===6||k===7)&&(F==="ws"||F==="rw");if(vt)a.quad(gt,G,ct,Mt,p2);else if(ft)a.quad(gt,G,ct,Mt,f2);else if(k>=6&&F==="bed")s.quad(gt,G,ct,Mt,An);else{if(k>=6&&F==="lv")continue;n.quad(gt,G,ct,Mt,k===0?v:t)}}}l.some(y=>y.seg==="lv")&&s.layer($t.LOUVRE,()=>{for(let y=0;y<rt.length-1;y++){const L=rt[y],I=rt[y+1];if(L.seg==="lv")for(const F of[-1,1])for(let B=6;B<8;B++){const k=z(L,B,F),gt=z(I,B,F),G=z(I,B+1,F),ct=z(L,B+1,F),Mt=ft=>(ft-tt)/.13,vt=ft=>Math.abs(ft[0])*2;Da(s,k,gt,G,ct,t,[vt(k),Mt(k[2])],[vt(gt),Mt(gt[2])],[vt(G),Mt(G[2])],[vt(ct),Mt(ct[2])])}}});const J=(y,L,I)=>{const F=[];for(let k=0;k<=8;k++)F.push(z(y,k,1));for(let k=7;k>=0;k--)F.push(z(y,k,-1));const B=(y.pts[0][1]+y.pts[8][1])/2;for(let k=0;k<F.length;k++)I.tri([0,B,y.z],F[k],F[(k+1)%F.length],L)},at=rt[0],j=rt[rt.length-1];J(at,w,s),J(j,Qe(t,.9),s);const wt=(y,L,I,F,B,k,gt,G)=>{const ct=kt=>{const Tt=kt.pts[I],U=kt.pts[B],_t=U[0]-Tt[0],et=U[1]-Tt[1],ht=Math.hypot(_t,et)||1,yt=[F*(Tt[0]+.006),Tt[1]+.004,kt.z],bt=[F*(Tt[0]+.006+_t/ht*k),Tt[1]+.004+et/ht*k,kt.z];return[yt,bt]},[Mt,vt]=ct(y),[ft,It]=ct(L);G.quad(Mt,ft,It,vt,gt)};for(let y=0;y<rt.length-1;y++){const L=rt[y],I=rt[y+1];if(sa(L.seg))for(const F of[-1,1])wt(L,I,4,F,5,.03,Ce,s),L.seg==="rf"?wt(L,I,6,F,5,.025,Ce,s):wt(L,I,6,F,5,.06,t,s)}const K=(y,L,I,F)=>{const B=[];for(let k=L;k<=8;k++)B.push(z(y,k,1,.004,.006));for(let k=7;k>=L;k--)B.push(z(y,k,-1,.004,.006));for(let k=0;k<B.length-1;k++){const gt=B[k],G=B[k+1];s.quad(gt,G,[G[0],G[1],G[2]+F],[gt[0],gt[1],gt[2]+F],I)}},mt=rt.find(y=>y.seg==="ws"),St=rt.find(y=>y.seg==="rf");mt&&K(mt,4,Ce,.06),St&&K(St,6,t,-.05);const dt=(y,L)=>{const I=W(y);for(let F=0;F<4;F++){const B=I.pts[F],k=I.pts[F+1];if(L>=B[1]&&L<=k[1])return B[0]+(k[0]-B[0])*(L-B[1])/Math.max(1e-4,k[1]-B[1])}return L<I.pts[0][1]?I.pts[0][0]:I.pts[4][0]},Dt=(y,L)=>{const I=W(y);for(let F=4;F<8;F++){const B=I.pts[F],k=I.pts[F+1];if(L<=B[0]&&L>=k[0])return B[1]+(k[1]-B[1])*(B[0]-L)/Math.max(1e-4,B[0]-k[0])}return I.pts[8][1]};for(const y of b){const L=e?6:14;for(const I of[-1,1])for(let F=0;F<L;F++){const B=F/L*Math.PI,k=(F+1)/L*Math.PI,gt=(Tt,U)=>y.z+Math.cos(Tt)*U,G=(Tt,U)=>y.r+Math.sin(Tt)*U,ct=dt(gt(B,y.R),G(B,y.R))+.002,Mt=dt(gt(k,y.R),G(k,y.R))+.002,vt=y.x-y.hw-.06,ft=Math.min(G(B,y.R),Dt(gt(B,y.R),vt)-.02),It=Math.min(G(k,y.R),Dt(gt(k,y.R),vt)-.02);s.quad([I*ct,G(B,y.R),gt(B,y.R)],[I*Mt,G(k,y.R),gt(k,y.R)],[I*vt,It,gt(k,y.R)],[I*vt,ft,gt(B,y.R)],zh);const kt=y.R+(e?.03:.045);s.quad([I*(ct+.02),G(B,y.R),gt(B,y.R)],[I*(Mt+.02),G(k,y.R),gt(k,y.R)],[I*(Mt+.004),G(k,kt),gt(k,kt)],[I*(ct+.004),G(B,kt),gt(B,kt)],E||e?t:w),s.quad([I*(ct+.02),G(B,y.R),gt(B,y.R)],[I*(Mt+.02),G(k,y.R),gt(k,y.R)],[I*(Mt-.01),G(k,y.R-.01),gt(k,y.R-.01)],[I*(ct-.01),G(B,y.R-.01),gt(B,y.R-.01)],v)}}const Ht=at.pts,lt=Ht[0][1],Pt=Ht[2][0],pt=d-.006,Zt=i.front??"popup";if(s.quad([-Pt*.74,lt+.02,pt+.002],[Pt*.74,lt+.02,pt+.002],[Pt*.74,lt+.19,pt+.002],[-Pt*.74,lt+.19,pt+.002],Ce),s.layer($t.MESH,()=>s.quad([-Pt*.7,lt+.04,pt],[Pt*.7,lt+.04,pt],[Pt*.7,lt+.17,pt],[-Pt*.7,lt+.17,pt],ia,[0,0,Pt*6,1.2])),e){const y=lt+.24;for(const L of[-1,1])o.layer($t.HEADLAMP,()=>o.quad([L*Pt*.82,y-.06,pt-.002],[L*Pt*.5,y-.06,pt-.002],[L*Pt*.5,y+.06,pt-.002],[L*Pt*.82,y+.06,pt-.002],15262924,[0,0,1,1]))}else{s.box(0,lt-.02,d+.2,Pt*1.84,.03,.5,[Ce,An]);const y=(Ht[4][1]+Ht[6][1])/2;for(const L of[-1,1]){const I=L*Pt*.62;if(Zt==="popup"){const F=d+.26,B=d+.62,k=ct=>p(ct)+.012,gt=(ct,Mt,vt,ft)=>s.quad([ct,k(Mt),Mt],[vt,k(ft),ft],[vt,k(ft)+.001,ft+.018],[ct,k(Mt)+.001,Mt+.018],Ce);gt(I-.2,F,I+.2,F),gt(I-.2,B,I+.2,B);for(const ct of[I-.2,I+.2])s.quad([ct-.008,k(F),F],[ct+.008,k(F),F],[ct+.008,k(B),B],[ct-.008,k(B),B],Ce);const G=lt+.25;s.quad([I-.17,G-.05,pt+.001],[I+.17,G-.05,pt+.001],[I+.17,G+.05,pt+.001],[I-.17,G+.05,pt+.001],An),o.layer($t.HEADLAMP,()=>o.quad([I-.15+L*.06,G-.035,pt-.002],[I+.15+L*.06,G-.035,pt-.002],[I+.15+L*.06,G+.035,pt-.002],[I-.15+L*.06,G+.035,pt-.002],16052440,[0,0,1,1])),o.layer($t.LENS,()=>o.quad([I-.16,G-.035,pt-.002],[I-.04,G-.035,pt-.002],[I-.04,G+.035,pt-.002],[I-.16,G+.035,pt-.002],16752688,[0,0,1,1]))}else if(Zt==="round")g2(s,I,y,pt+.001,.125,.15,ds),Uc(o,I,y,pt-.002,.125,.11,16,16052440,$t.HEADLAMP);else{const F=Zt==="slim"?.06:.12;s.quad([I-.23,y-F/2-.02,pt+.001],[I+.23,y-F/2-.02,pt+.001],[I+.23,y+F/2+.02,pt+.001],[I-.23,y+F/2+.02,pt+.001],An),o.layer($t.HEADLAMP,()=>o.quad([I-.2,y-F/2,pt-.002],[I+.12,y-F/2,pt-.002],[I+.12,y+F/2,pt-.002],[I-.2,y+F/2,pt-.002],16052440,[0,0,1,1])),o.layer($t.LENS,()=>o.quad([I+.13,y-F/2,pt-.002],[I+.21,y-F/2,pt-.002],[I+.21,y+F/2,pt-.002],[I+.13,y+F/2,pt-.002],16752688,[0,0,1,1]))}}}const N=f;for(const y of i.rear??[])for(const L of y.mirror===!1||y.x===0?[y.x]:[y.x,-y.x]){const I=[L-y.w/2,y.y-y.h/2,N+.006],F=[L+y.w/2,y.y-y.h/2,N+.006],B=[L+y.w/2,y.y+y.h/2,N+.006],k=[L-y.w/2,y.y+y.h/2,N+.006];y.c===Ce?s.layer($t.MESH,()=>s.quad(I,F,B,k,ia,[0,0,y.w*7,y.h*7])):s.quad(I,F,B,k,y.c)}const He=(y,L,I,F,B,k=0,gt)=>{const G=L.w+k,ct=L.h+k,Mt=gt??(L.round?$t.LENS_ROUND:L.w>.7?$t.LENS_BAR:$t.LENS);L.round?Uc(y,I,L.y,F,G/2,ct/2,16,B,Mt):y.layer(Mt,()=>y.quad([I-G/2,L.y-ct/2,F],[I+G/2,L.y-ct/2,F],[I+G/2,L.y+ct/2,F],[I-G/2,L.y+ct/2,F],B,[0,0,L.w>.7?G*6:1,1]))};for(const y of i.lights)for(const L of y.mirror===!1||y.x===0?[y.x]:[y.x,-y.x])He(o,y,L,N+.012,y.c),y.brake&&!e&&He(c,y,L,N+.016,16730678),e||(He(s,y,L,N+.008,1710622,.05,$t.PLAIN),y.round&&s.with(new Nt().makeTranslation(L,y.y,N+.01).multiply(new Nt().makeScale(1,y.h/y.w,1)),()=>Gi(s,y.w/2,y.w/2+.022,16,ds)));if(i.slats){const y=i.slats;for(let L=0;L<=y.n;L++){const I=y.y0+(y.y1-y.y0)*L/y.n;s.box(0,I,N+.03,y.w*2,.03,.035,[Ce,An])}}const Yt=j.pts[0][1],Jt=j.pts[2][0],Wt=Math.min(Yt+.15,i.plateY-.12);if(Wt-(Yt-.04)>.06&&s.box(0,(Wt+Yt-.04)/2,N+.03,Jt*1.96,Wt-Yt+.04,.09,E||e?[2763310,3684412]:[w,t]),e)s.quad([-.26,i.plateY-.08,N+.008],[.26,i.plateY-.08,N+.008],[.26,i.plateY+.08,N+.008],[-.26,i.plateY+.08,N+.008],15263960),s.quad([-.29,i.plateY-.1,N+.007],[.29,i.plateY-.1,N+.007],[.29,i.plateY+.1,N+.007],[-.29,i.plateY+.1,N+.007],3158068);else{for(const I of i.exhaust)s.with(new Nt().makeTranslation(I.x,I.y,N-.1).multiply(new Nt().makeRotationX(Math.PI/2)),()=>{s.prism(0,0,-.1,.22,I.r,I.r,12,[ds,11054260],null),s.prism(0,0,.2,.222,I.r*1.04,I.r*1.04,12,9075368,null),s.prism(0,0,.221,.08,I.r*.8,I.r*.8,12,Ce,Ce)});const y=i.plateY,L=N+.006;s.quad([-.3,y-.1,N+.004],[.3,y-.1,N+.004],[.3,y+.1,N+.004],[-.3,y+.1,N+.004],An),s.quad([-.31,y-.105,L],[.31,y-.105,L],[.31,y-.085,L],[-.31,y-.085,L],ds),s.quad([-.31,y+.085,L],[.31,y+.085,L],[.31,y+.105,L],[-.31,y+.105,L],ds);for(const I of[-1,1]){o.layer($t.LENS,()=>o.quad([I*.36,y-.04,N+.012],[I*.49,y-.04,N+.012],[I*.49,y+.04,N+.012],[I*.36,y+.04,N+.012],15790312,[0,0,1,1]));const F=Math.max(Yt+.02,(Wt+Yt)/2-.025);I<0&&o.layer($t.LENS,()=>o.quad([-.62,F,N+.08],[-.48,F,N+.08],[-.48,F+.05,N+.08],[-.62,F+.05,N+.08],13639704,[0,0,1,1]))}s.quad([-Jt*.8,Yt-.05,N+.06],[Jt*.8,Yt-.05,N+.06],[Jt*.8,Yt+.03,N-.5],[-Jt*.8,Yt+.03,N-.5],1842208);for(let I=-3;I<=3;I++)s.box(I*Jt*.24,Yt+0,N-.15,.025,.06,.4,An)}const re=(y,L,I,F,B,k,gt,G,ct,Mt,vt)=>{const ft=[L*(dt(I,B)+Mt),B,I],It=[L*(dt(F,gt)+Mt),gt,F],kt=[L*(dt(F,G)+Mt),G,F],Tt=[L*(dt(I,k)+Mt),k,I];y.quad(ft,It,kt,Tt,ct,vt)};for(const y of i.side??[])for(const L of[-1,1])if(y.kind==="intake"){const F=k=>Math.max(y.y0+(y.y1-y.y0)*.5*(1-(k-y.z0)/(y.z1-y.z0)),D(k)+.1),B=(k,gt)=>Math.max(F(Math.min(y.z1,Math.max(y.z0,k)))+.04,Math.min(y.y1+gt,m(k)-.03));for(let k=0;k<10;k++){const gt=y.z0+(y.z1-y.z0)*k/10,G=y.z0+(y.z1-y.z0)*(k+1)/10,ct=k===0?gt-.03:gt,Mt=k===9?G+.03:G,vt=.006+Math.min(.02,(S(gt)+S(G))*.25);re(s,L,ct,Mt,F(gt)-.03,B(ct,.03),F(G)-.03,B(Mt,.03),Ce,vt);const ft=(gt-y.z0)*7,It=(G-y.z0)*7;s.layer($t.MESH,()=>re(s,L,gt,G,F(gt),B(gt,0),F(G),B(G,0),ia,vt+.003,[ft,0,It-ft,(y.y1-y.y0)*7]))}}else if(y.kind==="naca")re(s,L,y.z0,y.z1,y.y1-.02,y.y1,y.y0,y.y1,Ce,.007),re(s,L,y.z0+(y.z1-y.z0)*.6,y.z1,y.y1-(y.y1-y.y0)*.6,y.y1,y.y0+.02,y.y1-.02,2236966,.009);else if(y.kind==="stripe")re(s,L,y.z0,y.z1,y.y0,y.y1,y.y0,y.y1,y.c??16777215,.008);else if(y.kind==="strakes")for(let F=0;F<6;F++){const B=y.z0+(y.z1-y.z0)*F/6,k=y.z0+(y.z1-y.z0)*(F+1)/6;re(s,L,B,k,y.y0,y.y1,y.y0,y.y1,Ce,.006);const gt=y.n??5;for(let G=0;G<gt;G++){const ct=y.y0+(y.y1-y.y0)*(G+.6)/(gt+.2);for(const[Mt,vt,ft,It]of[[ct,ct+.035,.035,.035],[ct,ct,.006,.035],[ct+.035,ct+.035,.006,.035]]){const kt=[L*(dt(B,Mt)+ft),Mt,B],Tt=[L*(dt(k,Mt)+ft),Mt,k],U=[L*(dt(k,vt)+It),vt,k],_t=[L*(dt(B,vt)+It),vt,B];s.quad(kt,Tt,U,_t,Mt===vt?Mt===ct?v:w:t)}}}const Ft=l.find(y=>y.seg==="ws"),P=l.find(y=>y.seg==="rw")??l.find(y=>y.seg==="lv"),A=l.findIndex(y=>y.seg==="rf");for(const y of[-1,1]){const L=b[0].z+b[0].R+.04,I=b[1].z-b[1].R-.04;if(I>L){const Tt=e?1:4;for(let U=0;U<Tt;U++){const _t=L+(I-L)*U/Tt,et=L+(I-L)*(U+1)/Tt,ht=_(_t),yt=_(et);s.quad([y*(dt(_t,ht+.02)+.02),ht-.02,_t],[y*(dt(et,yt+.02)+.02),yt-.02,et],[y*(dt(et,yt+.1)+.006),yt+.1,et],[y*(dt(_t,ht+.1)+.006),ht+.1,_t],e?2763310:E?v:w)}}const F=d+.3,B=_(F)+(m(F)-_(F))*.55;if(o.layer($t.LENS,()=>{o.quad([y*(dt(F,B)+.01),B-.025,F],[y*(dt(F+.14,B)+.01),B-.025,F+.14],[y*(dt(F+.14,B)+.01),B+.025,F+.14],[y*(dt(F,B)+.01),B+.025,F],16751136,[0,0,1,1]);const Tt=f-.4,U=_(Tt)+(m(Tt)-_(Tt))*.6;o.quad([y*(dt(Tt,U)+.01),U-.025,Tt],[y*(dt(Tt+.14,U)+.01),U-.025,Tt+.14],[y*(dt(Tt+.14,U)+.01),U+.025,Tt+.14],[y*(dt(Tt,U)+.01),U+.025,Tt],13113360,[0,0,1,1])}),!Ft)continue;const k=Ft.z+.22,gt=m(k)+.1,G=dt(k,m(k)-.01);e?s.box(y*(G+.08),gt,k,.14,.12,.1,[1710618,2236962,1710618,3355443]):(s.box(y*(G+.04),gt-.05,k,.1,.035,.05,Ce),s.box(y*(G+.13),gt,k,.18,.11,.1,[t,t,w,Ce]),s.quad([y*(G+.05),gt-.045,k+.052],[y*(G+.21),gt-.045,k+.052],[y*(G+.21),gt+.045,k+.052],[y*(G+.05),gt+.045,k+.052],10135736));const ct=(i.side??[]).find(Tt=>Tt.kind==="intake"),Mt=Ft.z+.06;let vt=P?P.z+.05:Ft.z+1.15;ct&&(vt=Math.min(vt,ct.z0-.06));for(const Tt of[Mt,vt]){const U=W(Tt);for(let _t=0;_t<4;_t++){const et=U.pts[_t],ht=U.pts[_t+1];ht[1]<_(Tt)+.08||s.quad([y*(et[0]+.006),et[1],Tt],[y*(et[0]+.006),et[1],Tt+.016],[y*(ht[0]+.006),ht[1],Tt+.016],[y*(ht[0]+.006),ht[1],Tt],An)}}if(e)continue;const ft=vt-.22,It=m(ft)-.1;if((i.side??[]).some(Tt=>(Tt.kind==="naca"||Tt.kind==="intake")&&ft+.14>Tt.z0&&ft-.14<Tt.z1&&It+.05>Tt.y0&&It-.05<Tt.y1)||s.quad([y*(dt(ft-.1,It)+.009),It-.018,ft-.1],[y*(dt(ft+.1,It)+.009),It-.018,ft+.1],[y*(dt(ft+.1,It)+.009),It+.018,ft+.1],[y*(dt(ft-.1,It)+.009),It+.018,ft-.1],ds),y>0&&A>=0){const Tt=Math.max(vt,ct?ct.z1:vt)+.04,U=b[1].z-b[1].R-.04;let _t=0,et=0,ht=!1;if(U-Tt>=.2)_t=(Tt+U)/2,et=_(_t)+(m(_t)-_(_t))*.62,ht=!0;else{const yt=b[1],bt=yt.r+yt.R+.06;_t=yt.z,et=(bt+m(_t)-.05)/2,ht=m(_t)-.05-bt>=.14}if(ht){const yt=dt(_t,et)+.008;s.with(new Nt().makeTranslation(yt,et,_t).multiply(new Nt().makeRotationY(Math.PI/2)),()=>{Gi(s,0,.058,12,w),Gi(s,.058,.07,12,An)})}}}if(Ft&&mt){const y=mt.z+.07,L=p(y)+.035;for(const I of[-.62,0]){const F=x(y)*.62;s.quad([I*x(y),L,y],[I*x(y)+F,L+.004,y+.035],[I*x(y)+F,L+.016,y+.035],[I*x(y),L+.012,y],Ce)}}if(i.louvres){const y=i.louvres,L=I=>p(I)+.024;s.layer($t.LOUVRE,()=>{for(let F=0;F<4;F++){const B=y.z0+(y.z1-y.z0)*F/4,k=y.z0+(y.z1-y.z0)*(F+1)/4,gt=y.n*F/4,G=y.n*(F+1)/4;Da(s,[-y.w,L(B),B],[y.w,L(B),B],[y.w,L(k),k],[-y.w,L(k),k],Qe(t,.9),[0,gt],[4,gt],[4,G],[0,G])}})}if(i.scoop&&A>=0){const y=l[A];s.box(0,y.top+.08,y.z+.3,.34,.14,.55,[t,t,Ce,w]),s.layer($t.MESH,()=>s.quad([-.15,y.top+.03,y.z+.024],[.15,y.top+.03,y.z+.024],[.15,y.top+.135,y.z+.024],[-.15,y.top+.135,y.z+.024],ia,[0,0,2,1]))}if(i.wing){const y=i.wing,L=p(y.z)+.02,I=F=>{const B=F;s.quad([-B,y.y+.03,y.z-y.d/2],[B,y.y+.03,y.z-y.d/2],[B,y.y+.02,y.z+y.d/2],[-B,y.y+.02,y.z+y.d/2],t),s.quad([-B,y.y-.03,y.z-y.d/2],[B,y.y-.03,y.z-y.d/2],[B,y.y-.005,y.z+y.d/2],[-B,y.y-.005,y.z+y.d/2],v),s.quad([-B,y.y-.03,y.z-y.d/2],[B,y.y-.03,y.z-y.d/2],[B,y.y+.03,y.z-y.d/2],[-B,y.y+.03,y.z-y.d/2],w),s.quad([-B,y.y-.005,y.z+y.d/2],[B,y.y-.005,y.z+y.d/2],[B,y.y+.045,y.z+y.d/2+.01],[-B,y.y+.045,y.z+y.d/2+.01],Ce)};if(y.kind==="duck")s.box(0,y.y,y.z,y.w*2,.06,y.d,[t,t,w,w]),s.quad([-y.w,y.y+.03,y.z+y.d/2],[y.w,y.y+.03,y.z+y.d/2],[y.w,y.y+.05,y.z+y.d/2+.02],[-y.w,y.y+.05,y.z+y.d/2+.02],Ce);else if(I(y.w),y.kind==="big")for(const F of[-1,1])s.box(F*.32,(L+y.y)/2,y.z,.06,y.y-L,.2,[An,An,2500136]),s.box(F*y.w,y.y+.02,y.z,.02,.2,y.d+.1,[t,t,w,w]);else if(y.kind==="hoop"){for(const F of[-1,1])s.box(F*(y.w-.08),(L+y.y)/2,y.z,.1,y.y-L,y.d*.7,[t,t,w,w]);c.layer($t.LENS_BAR,()=>c.quad([-.2,y.y+.012,y.z+y.d/2+.012],[.2,y.y+.012,y.z+y.d/2+.012],[.2,y.y+.04,y.z+y.d/2+.016],[-.2,y.y+.04,y.z+y.d/2+.016],16728112,[0,0,3,1])),o.layer($t.LENS_BAR,()=>o.quad([-.2,y.y+.012,y.z+y.d/2+.008],[.2,y.y+.012,y.z+y.d/2+.008],[.2,y.y+.04,y.z+y.d/2+.012],[-.2,y.y+.04,y.z+y.d/2+.012],7344144,[0,0,3,1]))}else for(const F of[-1,1])s.poly([[F*y.w,L,y.z-y.d/2-.2],[F*y.w,L,y.z+y.d/2],[F*y.w,y.y+.07,y.z+y.d/2],[F*y.w,y.y+.07,y.z-y.d/2]],t)}if(!e&&A>=0){l[A];const y=l[A+1];i.group==="90s JAPAN"&&Gh(s,[.35,p(y.z)-.02,y.z+.05],[.4,p(y.z)+.45,y.z+.35],.012,Ce)}if(A>=0&&Ft){const y=l[A],L=l[A+1],I=i.trim??2894898,F=y.z+Math.min(.45,(L.z-y.z)*.55),B=p(F),k=m(F),gt=B-(e?.24:.22),G=g(F)-.09,ct=k-.26,Mt=Ft.z+.25,vt=L.z+.15;r.quad([-G,ct,Mt],[G,ct,Mt],[G,ct,vt],[-G,ct,vt],zh);for(const yt of[-1,1])r.quad([yt*G,ct,Mt],[yt*G,ct,vt],[yt*G,k-.02,vt],[yt*G,k-.02,Mt],Qe(I,.7));r.quad([-G,ct,vt],[G,ct,vt],[G,k+.02,vt],[-G,k+.02,vt],1315864);const ft=l[A+2]??L;r.quad([-G,k+.02,vt],[G,k+.02,vt],[G,Math.min(m(ft.z),p(ft.z))-.02,ft.z],[-G,Math.min(m(ft.z),p(ft.z))-.02,ft.z],1842208);const It=i.drive??(i.group==="90s JAPAN"?"R":"L"),kt=It==="C"?0:(It==="R"?1:-1)*Math.min(.38,G*.48),Tt=It==="C"?[{x:0,z:F-.12,driver:!0},{x:-.44,z:F+.12,driver:!1},{x:.44,z:F+.12,driver:!1}]:[{x:kt,z:F,driver:!0},{x:-kt,z:F,driver:!1}],U=e?4868690:m2(t,2105392,.55),_t=F-(e?.5:.48),et=gt-.24,ht=Math.max(Ft.z+.3,_t-.22);r.box(0,k-.03,ht,G*2,.12,.32,[1710622,2236968]);for(const yt of Tt){const bt=yt.x,Xt=yt.z;if(e){r.box(bt,k-.02,Xt+.2,.42,.5,.1,Qe(I,.9)),yt.driver&&(Hh(r,[bt,gt,Xt],.11,2760728,6,4,2760728),r.box(bt,gt-.25,Xt+.03,.36,.26,.2,U));continue}const Se=Math.min(k-.04,B-.52);if(r.with(new Nt().makeTranslation(bt,Se,Xt+.22).multiply(new Nt().makeRotationX(.22)),()=>{Bh(r,0,0,0,.44,.56,.1,I,$t.SEAT,Qe(I,.75)),Bh(r,0,.36,.02,.26,.17,.09,I,$t.SEAT,Qe(I,.75));for(const Ae of[-1,1])r.box(Ae*.2,.02,-.06,.06,.48,.1,Qe(I,.85))}),yt.driver){Z0(r,[bt,gt,Xt],.125,t),ei(r,[bt,gt-.16,Xt+.02],[.05,.06,.05],1710620,6,4),j0(r,[bt,gt-.33,Xt+.04],[.21,.17,.12],U,t);for(const Ae of[-1,1])Gh(r,[bt+Ae*.18,gt-.26,Xt+.02],[bt+Ae*.16,et-.02,_t+.05],.075,U),Hh(r,[bt+Ae*.16,et-.02,_t+.04],.04,1710618,5,3);r.with(new Nt().makeTranslation(bt,et,_t).multiply(new Nt().makeRotationX(-.45)),()=>{Gi(r,.15,.185,14,1447446),r.box(0,0,0,.3,.035,.02,2236966),r.box(0,-.07,0,.035,.14,.02,2236966),r.prism(0,0,-.01,.01,.05,.05,8,3158068,3158068)}),r.box(bt,k+.05,ht+.02,.42,.07,.2,[1315862,1842208])}}r.box(0,p(y.z+.05)-.07,y.z+.06,.22,.06,.03,[1710618,1710618,1710618,9082532])}return{skin:n,body:s,cabin:r,glass:a,glow:o,brake:c,plate:{y:i.plateY,z:N+.012},tailZ:N,wheels:[{x:b[0].x,z:b[0].z,r:b[0].r,hw:b[0].hw},{x:b[1].x,z:b[1].z,r:b[1].r,hw:b[1].hw}]}}function g2(i,t,e,n,s,r,a){i.with(new Nt().makeTranslation(t,e,n),()=>Gi(i,s,r,16,a))}function Q0(i,t,e,n,s,r,a=16,o=!0){const c=(g,_,m)=>[_,Math.cos(g)*m,Math.sin(g)*m],l=t*.66,h=t*.93,u=e*.8,d=n*e,f=n*(e-.035);for(let g=0;g<a;g++){const _=g/a*Math.PI*2,m=(g+1)/a*Math.PI*2,p=g/a*8,x=(g+1)/a*8;i.layer($t.TREAD,()=>Da(i,c(_,-u,t),c(_,u,t),c(m,u,t),c(m,-u,t),3815996,[0,p],[1,p],[1,x],[0,x]));for(const w of[-1,1])i.quad(c(_,w*u,t),c(m,w*u,t),c(m,w*e,h),c(_,w*e,h),2500138);const M=g/a*2,v=(g+1)/a*2;i.layer($t.SIDEWALL,()=>Da(i,c(_,d,l),c(m,d,l),c(m,d,h),c(_,d,h),16777215,[M,0],[v,0],[v,1],[M,1])),i.quad(c(_,-d,l),c(m,-d,l),c(m,-d,h),c(_,-d,h),1447448),i.tri([-d,0,0],c(_,-d,l),c(m,-d,l),1052690),i.quad(c(_,d,l),c(m,d,l),c(m,f,l),c(_,f,l),Qe(r,.85)),o&&i.quad(c(_,f,l*.98),c(m,f,l*.98),c(m,-f*.6,l*.98),c(_,-f*.6,l*.98),Qe(r,.4))}i.with(new Nt().makeTranslation(f,0,0).multiply(new Nt().makeRotationY(Math.PI/2)),()=>{Uc(i,0,0,0,l,l,a,r,l2[s])})}function x2(i,t,e,n,s){const r=new ut(!0);return Q0(r,i,t,e,n,s),r.build()}function _2(i,t,e,n=13113360){const s=new ut(!0),r=i*.66,a=e*(t-.09);s.with(new Nt().makeTranslation(a,0,0).multiply(new Nt().makeRotationY(Math.PI/2)),()=>{Gi(s,r*.42,r*.86,14,10132128),Gi(s,r*.86,r*.88,14,6974064),s.prism(0,0,-.02,.02,r*.42,r*.42,8,3815998,3815998)});const o=.8;return s.with(new Nt().makeTranslation(a+e*.02,Math.cos(o)*r*.68,Math.sin(o)*r*.68).multiply(new Nt().makeRotationX(o)),()=>{s.box(0,0,0,.06,.08,.2,[n,Qe(n,1.15)])}),s.build()}let ra=null;function tu(){if(ra)return ra;const i=u2(),t=new Pc({vertexColors:!0,side:fe,shininess:60,specular:11053224}),e=new wa({vertexColors:!0,side:fe,alphaTest:.5}),n=new tn({vertexColors:!0,side:fe});for(const r of[t,e,n])La(r,i);const s=new Pc({vertexColors:!0,side:fe,transparent:!0,opacity:.62,depthWrite:!1,shininess:110,specular:16777215});return ra={paint:t,lit:e,glow:n,glass:s},ra}let Js=null;function M2(){if(Js)return Js;const i=64,t=128,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d"),s=n.createImageData(i,t),r=(l,h,u)=>{const d=Math.max(0,Math.min(1,(u-l)/(h-l)));return d*d*(3-2*d)},a=.36,o=.4,c=.12;for(let l=0;l<t;l++)for(let h=0;h<i;h++){const u=(h+.5)/i-.5,d=(l+.5)/t-.5,f=Math.abs(u)-(a-c),g=Math.abs(d)-(o-c),_=Math.hypot(Math.max(f,0),Math.max(g,0))+Math.min(Math.max(f,g),0)-c;let m=.55*(1-r(-.08,.13,_));for(const x of[-.28,.28])for(const M of[-.3,.3]){const v=Math.hypot((u-M)/.09,(d-x)/.12);m=Math.max(m,.9*(1-r(.4,1.2,v)))}const p=(l*i+h)*4;s.data[p]=s.data[p+1]=s.data[p+2]=0,s.data[p+3]=Math.round(255*Math.min(1,m))}return n.putImageData(s,0,0),Js=new _r(e),Js.colorSpace=jn,Js}const Vh=new Map;function eu(i){const t=Vh.get(i);if(t)return t;const e=new tn({color:0,map:M2(),transparent:!0,side:fe,opacity:i,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return Vh.set(i,e),e}function nu(i){const t=i.stations,e=t[0].z,n=t[t.length-1].z,s=n-e,a=Math.max(...t.map(h=>h.w))*2*1/.72/2,o=s*.98/.8/2,c=(e+n)/2,l=new ut;return l.quad([-a,.025,c-o],[a,.025,c-o],[a,.025,c+o],[-a,.025,c+o],16777215,[0,0,1,1]),l.build()}const v2=1583164,y2=2242124,fs=1315862,je=657932,aa=13159636,Oc=(i,t)=>new Lt(i).multiplyScalar(t).getHex();function hn(i,t,e){if(t<=i[0].z)return i[0][e];for(let n=1;n<i.length;n++)if(t<=i[n].z){const s=(t-i[n-1].z)/(i[n].z-i[n-1].z);return i[n-1][e]+(i[n][e]-i[n-1][e])*s}return i[i.length-1][e]}function iu(i,t,e=!1){const n=new ut,s=new ut,r=new ut,a=i.stations,o=Oc(t,.72),c=Oc(t,.5),l=a[a.length-1],h=l.z;for(let x=0;x<a.length-1;x++){const M=a[x],v=a[x+1],w=M.seg==="ws"||M.seg==="rf"||M.seg==="rw"||M.seg==="lv";for(const T of[-1,1])n.quad([T*M.w,M.yb,M.z],[T*v.w,v.yb,v.z],[T*v.w,v.belt,v.z],[T*M.w,M.belt,M.z],t),n.quad([T*M.w,M.belt,M.z],[T*v.w,v.belt,v.z],[T*v.wt,v.top,v.z],[T*M.wt,M.top,M.z],w&&M.seg!=="lv"?y2:t),n.quad([T*(M.w+.004),M.yb,M.z],[T*(v.w+.004),v.yb,v.z],[T*(v.w+.004),v.yb+.09,v.z],[T*(M.w+.004),M.yb+.09,M.z],c);const E=M.seg==="ws"||M.seg==="rw"?v2:M.seg==="lv"||M.seg==="bed"?fs:M.seg==="rf"?o:t;if(n.quad([-M.wt,M.top,M.z],[M.wt,M.top,M.z],[v.wt,v.top,v.z],[-v.wt,v.top,v.z],E),M.seg==="lv")for(let T=1;T<6;T++){const C=T/6,b=M.z+(v.z-M.z)*C,S=M.top+(v.top-M.top)*C+.01,D=M.wt+(v.wt-M.wt)*C;n.quad([-D,S,b-.03],[D,S,b-.03],[D,S+.01,b+.03],[-D,S+.01,b+.03],t)}}const u=(x,M,v)=>n.poly([[-x.w,x.yb,x.z+v],[-x.w,x.belt,x.z+v],[-x.wt,x.top,x.z+v],[x.wt,x.top,x.z+v],[x.w,x.belt,x.z+v],[x.w,x.yb,x.z+v]],M);u(a[0],o,0),u(l,o,0);const d=a[0],f=d.z-.006;if(n.quad([-d.w*.7,d.yb+.04,f],[d.w*.7,d.yb+.04,f],[d.w*.7,d.yb+.14,f],[-d.w*.7,d.yb+.14,f],je),!e){const x=i.front??"popup",M=(d.belt+d.top)/2;for(const v of[-1,1]){const w=v*d.w*.62;if(x==="popup"){const E=hn(a,d.z+.45,"top");n.quad([w-.2,E+.004,d.z+.3],[w+.2,E+.004,d.z+.3],[w+.2,E+.004,d.z+.33],[w-.2,E+.004,d.z+.33],je),s.quad([w-.14,d.yb+.17,f],[w+.14,d.yb+.17,f],[w+.14,d.yb+.24,f],[w-.14,d.yb+.24,f],16756800)}else if(x==="round"){const E=[];for(let T=0;T<8;T++){const C=T/8*Math.PI*2;E.push([w+Math.cos(C)*.11,M+Math.sin(C)*.09,f-.002])}s.poly(E,16052440)}else{const E=x==="slim"?.05:.1;s.quad([w-.2,M-E/2,f],[w+.2,M-E/2,f],[w+.2,M+E/2,f],[w-.2,M+E/2,f],16052440)}}}n.quad([-l.w,l.yb-.06,h+.02],[l.w,l.yb-.06,h+.02],[l.w,l.yb+.08,h+.02],[-l.w,l.yb+.08,h+.02],e?3815994:je);for(const x of i.rear??[])for(const M of x.mirror===!1||x.x===0?[x.x]:[x.x,-x.x])n.quad([M-x.w/2,x.y-x.h/2,h+.006],[M+x.w/2,x.y-x.h/2,h+.006],[M+x.w/2,x.y+x.h/2,h+.006],[M-x.w/2,x.y+x.h/2,h+.006],x.c);const g=(x,M,v,w,E)=>{if(M.round){const T=[];for(let C=0;C<8;C++){const b=C/8*Math.PI*2+Math.PI/8;T.push([v+Math.cos(b)*M.w/2,M.y+Math.sin(b)*M.h/2,w])}x.poly(T,E)}else x.quad([v-M.w/2,M.y-M.h/2,w],[v+M.w/2,M.y-M.h/2,w],[v+M.w/2,M.y+M.h/2,w],[v-M.w/2,M.y+M.h/2,w],E)},_=ie.modern&&!e;for(const x of i.lights)for(const M of x.mirror===!1||x.x===0?[x.x]:[x.x,-x.x])g(s,x,M,h+.012,x.c),x.brake&&!e&&g(r,x,M,h+.016,16726570),_&&(g(n,{...x,w:x.w+.05,h:x.h+.05},M,h+.008,1710622),g(s,{...x,w:x.w*.5,h:x.h*.45},M,h+.014,new Lt(x.c).lerp(new Lt(16777215),.45).getHex()));if(i.slats){const x=i.slats;for(let M=0;M<=x.n;M++){const v=x.y0+(x.y1-x.y0)*M/x.n;n.box(0,v,h+.03,x.w*2,.035,.03,je)}}if(e)n.quad([-.26,i.plateY-.08,h+.008],[.26,i.plateY-.08,h+.008],[.26,i.plateY+.08,h+.008],[-.26,i.plateY+.08,h+.008],15263960);else{for(const x of i.exhaust)n.with(new Nt().makeTranslation(x.x,x.y,h-.1).multiply(new Nt().makeRotationX(Math.PI/2)),()=>{n.prism(0,0,-.1,.17,x.r,x.r,8,aa,null),n.prism(0,0,.169,.17,x.r*.78,x.r*.78,8,je,je)});if(n.quad([-.3,i.plateY-.1,h+.004],[.3,i.plateY-.1,h+.004],[.3,i.plateY+.1,h+.004],[-.3,i.plateY+.1,h+.004],fs),_){const x=i.plateY,M=h+.006;n.quad([-.31,x-.105,M],[.31,x-.105,M],[.31,x-.085,M],[-.31,x-.085,M],aa),n.quad([-.31,x+.085,M],[.31,x+.085,M],[.31,x+.105,M],[-.31,x+.105,M],aa);for(const v of[-1,1])s.quad([v*.36,x-.04,h+.012],[v*.48,x-.04,h+.012],[v*.48,x+.04,h+.012],[v*.36,x+.04,h+.012],15790312);for(let v=-2;v<=2;v++)n.box(v*.2,l.yb-.03,h-.12,.03,.1,.26,fs)}}const m=(x,M,v,w,E,T,C,b,S)=>{const D=hn(a,M,"w")+S,W=hn(a,v,"w")+S;n.quad([x*D,w,M],[x*W,T,v],[x*W,C,v],[x*D,E,M],b)};for(const x of i.side??[])for(const M of[-1,1])if(x.kind==="intake")m(M,x.z0,x.z1,x.y0+(x.y1-x.y0)*.5,x.y1,x.y0,x.y1,je,.006);else if(x.kind==="naca")m(M,x.z0,x.z1,x.y1-.02,x.y1,x.y0,x.y1,je,.006);else if(x.kind==="stripe")m(M,x.z0,x.z1,x.y0,x.y1,x.y0,x.y1,x.c??16777215,.008);else if(x.kind==="strakes"){m(M,x.z0,x.z1,x.y0,x.y1,x.y0,x.y1,je,.006);const v=x.n??5;for(let w=0;w<v;w++){const E=x.y0+(x.y1-x.y0)*(w+.6)/(v+.2);m(M,x.z0,x.z1,E,E+.035,E,E+.035,t,.03)}}if(!e){const x=a.find(M=>M.seg==="ws");if(x)for(const M of[-1,1])n.box(M*(x.w+.06),x.belt+.12,x.z+.25,.18,.12,.12,[t,t,o,je]);if(_&&x){const M=a.find(v=>v.seg==="rw")??a.find(v=>v.seg==="lv");for(const v of[-1,1]){n.box(v*(x.w+.02),x.belt+.08,x.z+.25,.08,.04,.05,je);const w=x.z+.05,E=M?M.z+.05:x.z+1.1;for(const b of[w,E]){const S=hn(a,b,"w")+.007,D=hn(a,b,"yb")+.1,W=hn(a,b,"belt")-.02;n.quad([v*S,D,b],[v*S,D,b+.02],[v*S,W,b+.02],[v*S,W,b],fs)}const T=hn(a,E-.25,"w")+.012,C=hn(a,E-.25,"belt")-.1;n.quad([v*T,C,E-.38],[v*T,C,E-.18],[v*T,C+.04,E-.18],[v*T,C+.04,E-.38],aa)}for(const v of["ws","rw"]){const w=a.findIndex(C=>C.seg===v);if(w<0||w+1>=a.length)continue;const E=a[w],T=a[w+1];for(const C of[-1,1])n.quad([C*E.wt,E.top+.004,E.z],[C*T.wt,T.top+.004,T.z],[C*(T.wt-.04),T.top+.006,T.z],[C*(E.wt-.04),E.top+.006,E.z],je)}}}if(e&&ie.modern){const x=a[0],M=a.find(w=>w.seg==="ws"),v=a.find(w=>w.seg==="rw");if(n.box(0,l.yb+.05,h+.08,l.w*2+.06,.16,.16,[3815998,4868686]),n.box(0,x.yb+.05,x.z-.08,x.w*2+.06,.16,.16,[3815998,4868686]),M)for(const w of[-1,1])n.box(w*(M.w+.08),M.belt+.1,M.z+.2,.14,.12,.1,1710618);if(v&&n.quad([-.05,v.top+.15,v.z+.3],[.45,v.top+.35,v.z+.3],[.45,v.top+.37,v.z+.3],[-.05,v.top+.17,v.z+.3],1118481),i.id==="volvo240"||i.id==="cherokee"){const w=a.find(T=>T.seg==="rf"),E=a[a.indexOf(w)+1];for(const T of[-1,1])n.box(T*(w.wt-.08),w.top+.06,(w.z+E.z)/2,.06,.08,E.z-w.z,2763306)}}if(i.louvres){const x=i.louvres;for(let M=0;M<x.n;M++){const v=x.z0+(x.z1-x.z0)*M/x.n,w=hn(a,v,"top")+.006;n.quad([-x.w,w,v],[x.w,w,v],[x.w,w+.004,v+.06],[-x.w,w+.004,v+.06],je)}}if(i.scoop){const x=a.find(M=>M.seg==="rf");n.box(0,x.top+.07,x.z+.25,.32,.14,.5,[t,t,je,o])}if(i.wing){const x=i.wing,M=hn(a,x.z,"top");if(x.kind==="duck")n.box(0,x.y,x.z,x.w*2,.06,x.d,[t,t,o,o]);else if(n.box(0,x.y,x.z,x.w*2,.055,x.d,[t,t,o,o]),n.box(0,x.y-.03,x.z+x.d/2,x.w*2,.04,.03,c),x.kind==="big")for(const v of[-1,1])n.box(v*.32,(M+x.y)/2,x.z,.07,x.y-M,.16,fs);else if(x.kind==="hoop")for(const v of[-1,1])n.box(v*(x.w-.08),(M+x.y)/2,x.z,.12,x.y-M,x.d*.7,t);else for(const v of[-1,1])n.poly([[v*x.w,M,x.z-x.d/2-.15],[v*x.w,M,x.z+x.d/2],[v*x.w,x.y+.06,x.z+x.d/2],[v*x.w,x.y+.06,x.z-x.d/2]],t)}const p=i.wheels;for(const[x,M]of[[p.fz,p.fx],[p.rz,p.rx]])for(const v of[-1,1]){const w=[];for(let E=0;E<=6;E++){const T=E/6*Math.PI;w.push([v*(hn(a,x,"w")+.003),p.r+Math.sin(T)*(p.r+.07),x+Math.cos(T)*(p.r+.07)])}n.poly(w,je)}return{lit:n,glow:s,brake:r,plate:{y:i.plateY,z:h+.012},tailZ:h}}function b2(i,t,e,n,s){const r=new ut,a=Math.max(10,s*2),o=(l,h,u=i)=>[h,Math.cos(l)*u,Math.sin(l)*u],c=Oc(n,.3);for(let l=0;l<a;l++){const h=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;r.quad(o(h,-t),o(u,-t),o(u,t),o(h,t),l%2?1710618:2368548),r.quad(o(h,e*t),o(u,e*t),o(u,e*t,i*.7),o(h,e*t,i*.7),2105376),r.tri([-e*t,0,0],o(h,-e*t),o(u,-e*t),1447446),r.tri([e*(t+.005),0,0],o(h,e*(t+.005),i*.7),o(u,e*(t+.005),i*.7),l%2===0?n:c)}return r.with(new Nt().makeRotationZ(Math.PI/2),()=>r.prism(0,0,-e*(t+.01),-e*(t+.011),.07,.07,6,n,n)),r.build()}function ol(i,t=1,e=.8){const n=new ut,s=i.stations[i.stations.length-1].z+.08;for(const r of i.lights)for(const a of r.mirror===!1||r.x===0?[r.x]:[r.x,-r.x]){const o=Math.max(r.w,r.h)*1.6*t+.25;n.quad([a-o,r.y-o,s],[a+o,r.y-o,s],[a+o,r.y+o,s],[a-o,r.y+o,s],new Lt(r.c).multiplyScalar(e).getHex(),[0,0,1,1])}return n}function S2(i,t){const e=t.wheels;for(const[n,s]of[[-e.fx,e.fz],[e.fx,e.fz],[-e.rx,e.rz],[e.rx,e.rz]])i.with(new Nt().makeTranslation(n,e.r,s).multiply(new Nt().makeRotationZ(Math.PI/2)),()=>{i.prism(0,0,-.12,.12,e.r,e.r,8,1579032,(n>0,9079434))})}class Ao{constructor(t,e,n,s,r=3947590,a=!1){this.spec=t,this.root=new _n,this.body=new _n,this.wheels=[],this.geos=[],this.hubs=[],this.gunners=[],this.gunSide=1,this.detail=[],this.paintwork=[],this.dentable=[],this.cracks=null,this.crackCount=0,this.glowMesh=null,this.tailZ=0,this.damaged=!1,this.near=!0;const o=(v,w,E)=>{this.geos.push(v);const T=new ue(v,w);return E.add(T),T},c=ie.modern,l=c?tu():null;let h,u,d;if(l){const v=J0(t,e);this.paintwork.push(o(v.skin.build(!0),l.paint,this.body),o(v.body.build(),l.paint,this.body)),this.detail.push(o(v.cabin.build(),l.lit,this.body));const w=o(v.glass.build(),l.glass,this.body);w.renderOrder=1,this.glowMesh=o(v.glow.build(),l.glow,this.body),this.dentable.push(w,this.glowMesh),this.brake=o(v.brake.empty?new ut().tri([0,0,0],[0,0,0],[0,0,0],0).build():v.brake.build(),l.glow,this.body),h=v.plate,u=v.tailZ,d=v.wheels}else{const v=iu(t,e);this.paintwork.push(o(v.lit.build(),n.paint??n.lit,this.body)),v.glow.empty||this.dentable.push(this.glowMesh=o(v.glow.build(),n.glow,this.body)),this.brake=o(v.brake.empty?new ut().tri([0,0,0],[0,0,0],[0,0,0],0).build():v.brake.build(),n.glow,this.body),h=v.plate,u=v.tailZ;const w=t.wheels,E=w.hw??.18;d=[{x:w.fx,z:w.fz,r:w.r,hw:E},{x:w.rx,z:w.rz,r:w.r*1.03,hw:E*1.15}]}const f=new ut,{y:g,z:_}=h;f.quad([-.27,g-.08,_],[.27,g-.08,_],[.27,g+.08,_],[-.27,g+.08,_],16777215,s),this.dentable.push(o(f.build(),n.sign,this.body)),this.dentable.push(this.brake),a&&n.halo&&o(ol(t,.45,.45).build(),n.halo,this.body);const m=new ut;for(const v of t.exhaust)m.prism(v.x,-v.y,0,.7,v.r*2,0,6,[16764992,16740384],null),m.prism(v.x,-v.y,0,.42,v.r*1.2,0,6,16775360,null);const p=m.build();if(p.rotateX(Math.PI/2),this.flames=o(p,n.glow,this.body),this.flames.position.set(0,0,u+(c?.12:.05)),this.tailZ=u,this.flames.visible=!1,c){const v=o(nu(t),eu(a?.85:.7),this.root);v.renderOrder=-1}else{const v=t.stations,w=v[v.length-1].z-v[0].z,E=Math.max(...v.map(b=>b.w)),T=new ut,C=[];for(let b=0;b<8;b++){const S=b/8*Math.PI*2+Math.PI/8;C.push([Math.cos(S)*E*.92,.02,v[0].z+w/2+Math.sin(S)*(w/2-.05)])}T.poly(C,16777215),o(T.build(),new tn({color:r,side:fe}),this.root)}const x=t.wheels,M=t.rimStyle??"star";for(const[v,w]of[[0,-1],[0,1],[1,-1],[1,1]]){const E=d[v],T=l?x2(E.r,E.hw,w,M,x.rim):b2(E.r,E.hw,w,x.rim,x.spokes),C=o(T,l?l.lit:n.lit,this.root);if(C.position.set(w*E.x,E.r,E.z),this.wheels.push(C),l){const b=o(_2(E.r,E.hw,w,t.id==="959"||t.id==="nsx"?2763310:13113360),l.lit,this.root);b.position.copy(C.position),this.hubs.push(b),this.detail.push(b)}}this.buildGunners(e,l?l.lit:n.lit,l?l.glow:n.glow,!!l),this.root.add(this.body)}setNear(t){if(t!==this.near){this.near=t;for(const e of this.detail)e.visible=t}}dispose(){var t;for(const e of this.geos)e.dispose();(t=this.cracks)==null||t.geometry.dispose()}hit(t,e){this.damaged=!0;const n=this.spec.stations,s=n[0].z,r=n[n.length-1].z,a=Math.max(...n.map(p=>p.w)),o=Math.random,c=new $,l=new $;if(e==="front"||e==="rear"){const p=e==="front";c.set((o()-.5)*a*1.4,.45+o()*.25,p?s+.1:r-.1),l.set(0,-.15,p?1:-1)}else{const p=e==="right"?1:-1;c.set(p*a,.45+o()*.3,s+.6+o()*(r-s-1.2)),l.set(-p,-.1,(o()-.5)*.3)}l.normalize();const h=.55+t*.5,u=.04+t*.16,d=new Lt(6974064),f=new Lt(1841688),g=new Lt,_=(p,x,M)=>Math.sin(p*41.3+x*17.1)*Math.cos(M*29.7+p*7.3),m=(p,x)=>{const M=p.geometry,v=M.getAttribute("position"),w=x?M.getAttribute("color"):void 0;let E=!1;for(let T=0;T<v.count;T++){const C=v.getX(T),b=v.getY(T),S=v.getZ(T),D=Math.hypot(C-c.x,(b-c.y)*1.3,S-c.z);if(D>=h)continue;const W=(1-D/h)**2,H=u*W*(.8+.4*_(C,b,S));if(v.setXYZ(T,C+l.x*H,b+l.y*H,S+l.z*H),E=!0,w){g.setRGB(w.getX(T),w.getY(T),w.getZ(T));const V=Math.min(1,W*(.4+t));g.lerp(_(S,C,b)>.2?d:f,V*.75),w.setXYZ(T,g.r,g.g,g.b)}}E&&(v.needsUpdate=!0,w&&(w.needsUpdate=!0),M.computeVertexNormals())};for(const p of this.paintwork)m(p,!0);for(const p of this.dentable)m(p,!1);t>.35&&this.crackCount<3&&this.crack()}breakLamp(t){this.damaged=!0;for(const e of[this.glowMesh,this.brake]){if(!e)continue;const n=e.geometry.getAttribute("position"),s=e.geometry.getAttribute("color");for(let r=0;r<n.count;r++)n.getZ(r)<this.tailZ-.05||n.getX(r)*t<.2||s.setXYZ(r,s.getX(r)*.15+.02,s.getY(r)*.15+.02,s.getZ(r)*.15+.02);s.needsUpdate=!0}}crack(){const t=this.spec.stations;let e=t.findIndex(d=>d.seg==="rw");if(e<0&&(e=t.findIndex(d=>d.seg==="ws")),e<0||e+1>=t.length)return;this.crackCount++;const n=t[e],s=t[e+1],r=(d,f)=>{const g=n.wt+(s.wt-n.wt)*f;return[d*g*.95,n.top+(s.top-n.top)*f+.03*(1-d*d)+.025,n.z+(s.z-n.z)*f]},a=this.cracks?Array.from(this.cracks.geometry.getAttribute("position").array):[],o=(Math.random()-.5)*1.1,c=.25+Math.random()*.5,l=7+Math.floor(Math.random()*4),h=[];for(let d=0;d<l;d++){const f=d/l*Math.PI*2+Math.random()*.5,g=.35+Math.random()*.45;let _=o,m=c;for(let p=1;p<=4;p++){const x=g*p/4,M=Math.max(-1,Math.min(1,o+Math.cos(f)*x+(Math.random()-.5)*.08)),v=Math.max(0,Math.min(1,c+Math.sin(f)*x*.8+(Math.random()-.5)*.06));a.push(...r(_,m),...r(M,v)),p===1&&h.push([M,v]),_=M,m=v}}for(let d=0;d<h.length;d++)a.push(...r(...h[d]),...r(...h[(d+1)%h.length]));const u=new Ge;u.setAttribute("position",new Me(a,3)),this.cracks?(this.cracks.geometry.dispose(),this.cracks.geometry=u):(this.cracks=new W0(u,new Qc({color:15266047,transparent:!0,opacity:.85})),this.cracks.renderOrder=2,this.body.add(this.cracks))}buildGunners(t,e,n,s){const r=this.spec.stations,a=r.findIndex(f=>f.seg==="rf"),o=r.find(f=>f.seg==="ws")??r[1],l=(a>=0?r[a]:o).z+.15,h=hn(r,l,"belt"),u=hn(r,l,"w"),d=new Lt(t).lerp(new Lt(2105392),.55).getHex();for(const f of[-1,1]){const g=new ut(s),_=new ut(s),m=new ut(s);j0(g,[f*.1,.16,.02],[.2,.2,.14],d,t),ei(g,[f*.16,.36,0],[.05,.06,.05],1710620,6,4),Z0(g,[f*.2,.5,-.01],.135,t),ei(g,[f*.02,.12,-.2],[.05,.05,.13],d,8,5),ei(g,[f*0,.08,-.33],[.045,.045,.045],1315862,6,4);const p=d2(_,d,t);for(let T=0;T<4;T++){const C=T/4*Math.PI,b=Math.cos(C)*.12,S=Math.sin(C)*.12;m.quad([-b,-S,0],[b,S,0],[b*.3,S*.3,-.36],[-b*.3,-S*.3,-.36],T%2?16760896:16771216)}m.quad([-.08,-.08,.001],[.08,-.08,.001],[.08,.08,.001],[-.08,.08,.001],16776160);const x=new _n,M=new _n;M.rotation.z=-f*.32,x.add(M);const v=(T,C,b)=>{const S=T.build();this.geos.push(S);const D=new ue(S,C);return b.add(D),D};v(g,e,M);const w=new _n;w.position.set(f*.26,.28,0),v(_,e,w);const E=v(m,n,w);E.position.set(...p),E.visible=!1,M.add(w),x.position.set(f*(u-.14),h-.06,l),x.visible=!1,this.body.add(x),this.gunners.push({group:x,arm:w,flash:E})}}aim(t,e=0,n=!1){t&&(this.gunSide=t),this.gunners.forEach((s,r)=>{const a=t!==0&&(r===0?-1:1)===this.gunSide;s.group.visible=a,a&&(s.arm.rotation.set(0,e,0),s.flash.visible=n,n&&(s.flash.rotation.z=Math.random()*Math.PI))})}pose(t,e,n,s,r,a=!1,o=0){this.root.rotation.set(0,e,0),this.body.rotation.set(r,0,-t*.05),this.body.position.y=s,this.brake.visible=a,this.flames.visible=o>0,o>0&&this.flames.scale.set(1,1,.6+Math.random()*.8),this.wheels.forEach((c,l)=>c.rotation.set(n,l<2?-t*.35:0,0,"YXZ")),this.hubs.forEach((c,l)=>c.rotation.set(0,l<2?-t*.35:0,0))}}const Wh=96,oa={x:0,y:0,z:0,h:0};class E2{constructor(t){this.pool=[],this.m=new Nt,this.s=new $,this.p=new $;const e=new ut,n=(r,a,o,c,l)=>{const h=[];for(let u=0;u<8;u++){const d=u/8*Math.PI*2+Math.PI/8;h.push([a+Math.cos(d)*r,o+Math.sin(d)*r,c])}e.poly(h,l)};let s;if(ie.modern){const a=document.createElement("canvas");a.width=a.height=64;const o=a.getContext("2d"),c=o.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);c.addColorStop(0,"rgba(255,255,255,0.85)"),c.addColorStop(.55,"rgba(235,235,235,0.45)"),c.addColorStop(1,"rgba(220,220,220,0)"),o.fillStyle=c,o.fillRect(0,0,64,64);const l=new _r(a);l.colorSpace=ze,e.quad([-.6,-.6,0],[.6,-.6,0],[.6,.6,0],[-.6,.6,0],16777215,[0,0,1,1]),s=new tn({map:l,vertexColors:!0,transparent:!0,depthWrite:!1,side:fe})}else n(.5,0,0,0,12105912),n(.34,-.1,.1,.01,16777215),s=new tn({vertexColors:!0,side:fe});this.mesh=new V0(e.build(),s,Wh),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.setColorAt(0,new Lt(1,1,1)),t.add(this.mesh)}spawn(t,e,n,s,r,a,o,c,l,h){this.pool.length>=Wh&&this.pool.shift(),this.pool.push({d:t,x:e,y:n,vd:s,vx:r,vy:a,life:o,max:o,size:c,grow:l,color:new Lt(h)})}clear(){this.pool.length=0}update(t){for(const e of this.pool)e.life-=t,e.d+=e.vd*t,e.x+=e.vx*t,e.y+=e.vy*t,e.vy-=(e.grow<0?18:0)*t,e.vd*=1-t*2,e.vx*=1-t*2;this.pool=this.pool.filter(e=>e.life>0)}render(t,e){let n=0;for(const s of this.pool){if(!t.sample(s.d,s.x,oa))continue;const r=1-s.life/s.max,a=Math.max(.02,s.size*(1+Math.max(0,s.grow)*r)*(r>.75?(1-r)*4:1));this.p.set(oa.x,oa.y+s.y,oa.z),this.s.set(a,a,a),this.m.compose(this.p,e.quaternion,this.s),this.mesh.setMatrixAt(n,this.m),this.mesh.setColorAt(n,s.color),n++}this.mesh.count=n,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}}let Qs=null;function w2(i){ie.modern&&!Qs&&(Qs=c2());const t=new wa({vertexColors:!0,flatShading:!0,side:fe}),e=new tn({vertexColors:!0,side:fe});ie.modern&&Qs&&(La(t,Qs),La(e,Qs));const n=ie.modern?tu():null;return{facade:t,facadeLit:e,car:(n==null?void 0:n.lit)??t,carGlow:(n==null?void 0:n.glow)??e,glass:(n==null?void 0:n.glass)??e,shadow:eu(.75),lit:new wa({vertexColors:!0,flatShading:!0,side:fe}),glow:new tn({vertexColors:!0,side:fe}),sign:new tn({map:i,side:fe}),halo:new tn({map:Lg(),vertexColors:!0,transparent:!0,blending:Ta,depthWrite:!1,fog:!1,side:fe,visible:ie.modern}),paint:ie.modern?new Pc({vertexColors:!0,flatShading:!0,side:fe,shininess:45,specular:10132122}):new wa({vertexColors:!0,flatShading:!0,side:fe})}}class T2{constructor(t,e,n){this.defs=t,this.meshes=[],this.counts=[],this.m=new Nt,this.q=new Is,this.e=new Mn,this.p=new $,this.sc=new $,this.c=new Lt,this.white=new Lt(1,1,1);for(const s of t){const r=s.parts.map(a=>{const o=new V0(a.geo,e[a.mat],s.max);return o.frustumCulled=!1,o.instanceMatrix.setUsage(ar),o.setColorAt(0,this.white),o.count=0,a.order&&(o.renderOrder=a.order),n.add(o),{mesh:o,tint:a.tint??a.mat==="lit"}});this.meshes.push(r),this.counts.push(0)}}begin(){this.counts.fill(0)}add(t,e,n,s,r,a=1,o=1,c,l=0){const h=this.counts[t];if(!(h>=this.defs[t].max)){this.counts[t]=h+1,this.e.set(0,r,l,"YXZ"),this.q.setFromEuler(this.e),this.p.set(e,n,s),this.sc.set(a,a*o,a),this.m.compose(this.p,this.q,this.sc),c!==void 0&&this.c.setHex(c);for(const{mesh:u,tint:d}of this.meshes[t])u.setMatrixAt(h,this.m),u.setColorAt(h,d&&c!==void 0?this.c:this.white)}}end(){this.meshes.forEach((t,e)=>{for(const{mesh:n}of t)n.count=this.counts[e],n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0)})}}const A2=(i,t)=>new Lt(i).multiplyScalar(t).getHex(),Te=(i,t,e)=>{const n=[{geo:i.build(),mat:"lit"}];return t&&!t.empty&&n.push({geo:t.build(),mat:"glow"}),n};function cl(){const i=new ut;return Fc(i),{parts:Te(i),radius:.8,max:260}}function R2(){const i=new ut;return i.blob(0,0,0,16,2.4,11,[15916186,14205056]),i.with(kh(-4,1.5,1),()=>Fc(i)),i.with(kh(5,1.2,-2).multiply(i2(1.3)).multiply(new Nt().makeScale(.8,.8,.8)),()=>Fc(i)),{parts:Te(i),radius:0,max:20}}function Fc(i){let e=0;for(let r=0;r<5;r++){const a=.18*Math.pow(r+1,1.5),o=r*2,c=(r+1)*2,l=.48-r*.04,h=.44-r*.04,u=r%2?9067051:11038778;for(let d=0;d<6;d++){const f=d/6*Math.PI*2,g=(d+1)/6*Math.PI*2;i.quad([e+Math.cos(f)*l,o,Math.sin(f)*l],[e+Math.cos(g)*l,o,Math.sin(g)*l],[a+Math.cos(g)*h,c,Math.sin(g)*h],[a+Math.cos(f)*h,c,Math.sin(f)*h],d%2?u:7621154)}e=a}const n=[e,5*2,0],s=7;for(let r=0;r<s;r++){const a=r/s*Math.PI*2+.3,o=Math.cos(a),c=Math.sin(a),l=-c,h=o,u=(x,M,v)=>[[n[0]+o*x+l*v,n[1]+M,n[2]+c*x+h*v],[n[0]+o*x-l*v,n[1]+M,n[2]+c*x-h*v]],[d,f]=u(1.5,.7,.75),[g,_]=u(3,.3,.6),m=[n[0]+o*4.4,n[1]-1.6,n[2]+c*4.4],p=r%2?3124810:2067002;i.tri(n,d,f,p),i.quad(f,d,g,_,r%2?2529343:1733682),i.tri(_,g,m,p)}i.blob(n[0],n[1]-.3,0,.5,.45,.5,6965786)}function C2(){const i=new ut;return i.prism(0,0,0,3,.45,.32,5,[7227942,5913630]),i.blob(0,4.6,0,2.8,2.4,2.8,[4173375,2783790]),i.blob(.4,6.8,.2,1.9,1.6,1.9,[5685834,3442746]),{parts:Te(i),radius:1.2,max:220}}function su(){const i=new ut;return i.blob(0,.9,0,1.8,1.1,1.6,[4763712,2914860]),{parts:Te(i),radius:0,max:160}}function ll(){const i=new ut;return i.blob(0,1,0,2.2,1.6,2,[13153420,9206362]),i.blob(1.6,.6,.6,1.2,.9,1.1,[12100732,8153676]),{parts:Te(i),radius:2.2,max:120}}function Ro(i){const t=new ut;return t.box(0,1.3,0,.12,2.6,.12,15790320),t.prism(0,0,2.3,3,2.1,0,8,[i[0],i[1]]),t.prism(0,0,2.3,2.3001,2.1,.01,8,[i[0],i[1]]),t.quad([-.6,.03,.6],[.6,.03,.6],[.6,.03,2.4],[-.6,.03,2.4],i[0]),{parts:Te(t),radius:0,max:120}}function I2(){const i=new ut;for(const[t,e]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.box(t,1.3,e,.2,2.6,.2,16777215);return i.box(0,3.5,0,2.6,1.8,2.4,[16777215,16777215]),i.box(0,3.6,1.21,1.8,.7,.02,2775690),i.prism(0,0,4.4,5.4,2.1,0,4,[16730730,16743050],null,Math.PI/4),{parts:Te(i),radius:1.4,max:30}}function Xh(i,t,e,n,s,r,a=!0){for(let o=0;o<3;o++)i.box(r.range(-n/3,n/3),e+.6,r.range(-s/3,s/3),2.2,1.2,1.6,[13158600,14474460]);if(r.chance(.7)){const o=r.range(-n/4,n/4),c=r.range(-s/4,s/4);for(const[l,h]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.box(o+l,e+1,c+h,.2,2,.2,6974064);i.prism(o,c,e+2,e+4.2,1.4,1.4,8,[10127984,9075298],8022610)}a&&(i.box(n/4,e+4,0,.25,8,.25,10132136),t.box(n/4,e+8.2,0,.6,.6,.6,16719904))}function hl(i,t){const e=new ut,n=3836600;if(ie.modern){const s=new ut,r=new ut,a=o=>Mr(o);if(i===0){s.facadeBox(0,38/2+1.5,0,16,35,12,a(be.HOTEL),8,8,[16777215,15658734],15263976),e.box(0,1.5,0,16-.4,3,12-.4,[2771562,2771562]),e.box(0,3.1,12/2+1.2,7,.3,2.6,[16777215,16777215]);for(const h of[-3.2,3.2])e.box(h,1.5,12/2+2.3,.2,3,.2,14211288);for(const h of[-16/2-.2,16/2+.2])e.box(h,38/2,0,.7,38,12+.7,[16777215,16777215]);e.box(0,38+1.2,0,16*.5,2.4,12*.6,[16777215,15790320]),Xh(e,r,38,16,12,t)}else if(i===1){const o=[[18,16,14],[14,12,11],[9,9,8]];let c=0;for(const[l,h,u]of o)s.facadeBox(0,c+h/2,0,l,h,u,a(be.DECO),8,8,[16777215,15790320],15788248),e.box(0,c+h-.4,0,l+.6,.8,u+.6,[16769162,16771232]),e.box(0,c+h-1.4,0,l+.3,.25,u+.3,4243632),c+=h;e.prism(0,0,c,c+7,1.2,.05,4,[16777215,14737632]),r.box(0,c+7.2,0,.5,.5,.5,16719904)}else{s.facadeBox(0,12/2,0,26,12,9,a(be.MOTEL),12,12,[16777215,15790320],14736596),e.box(0,12+.3,0,27,.6,10,[16738954,16743062]),e.box(0,6.1,9/2+.9,26,.25,1.8,[15790320,16777215]);for(let h=-26/2+3;h<26/2;h+=6)e.box(h,12/2,9/2+1.7,.4,12,.4,16777215);Xh(e,r,12,26,9,t,!1)}return{parts:[...Te(e,r),{geo:s.build(),mat:"facade"}],radius:0,max:40}}if(i===0){e.box(0,38/2,0,16,38,12,[16777215,15790320]);for(let o=4;o<36;o+=3.2)e.box(0,o,0,16+.3,1.2,12+.3,n);e.box(0,38+1.2,0,16*.5,2.4,12*.6,16777215),e.box(-16/2-.2,38/2,0,.6,38,12+.6,16777215),e.box(16/2+.2,38/2,0,.6,38,12+.6,16777215)}else if(i===1){const s=[[18,16,14],[14,12,11],[9,9,8]];let r=0;for(const[a,o,c]of s){e.box(0,r+o/2,0,a,o,c,[16777215,16053492]);for(let l=r+2.5;l<r+o-1;l+=3)e.box(0,l,0,a*.7,1.3,c+.3,n);e.box(0,r+o-.4,0,a+.6,.8,c+.6,16769162),r+=o}e.prism(0,0,r,r+7,1.2,.05,4,[16777215,14737632])}else{e.box(0,12/2,0,26,12,9,[16777215,15921906]);for(let o=2.5;o<12;o+=3.3)e.box(0,o,0,26+.3,1.1,9+.3,n);e.box(0,12+.3,0,27,.6,10,16738954);for(let o=-26/2+3;o<26/2;o+=6)e.box(o,12/2,9/2+.25,.6,12,.5,16777215)}return{parts:Te(e),radius:0,max:40}}function ru(i){const t=new ut,e=new ut,n=new ut;ie.modern?n.facadeBox(0,3.5,0,12,7,9,Mr(be.SHOP),12,7,[16777215,15790320],14736596):(t.box(0,3.5,0,12,7,9,[16777215,15790320]),t.box(0,3,4.6,8,2.6,.2,3832488));for(let r=0;r<6;r++){const a=-6+r*2,o=a+2;t.quad([a,5.2,4.5],[o,5.2,4.5],[o,4.4,6],[a,4.4,6],r%2?16777215:16730714)}e.quad([-5,7.2,4.52],[5,7.2,4.52],[5,9.7,4.52],[-5,9.7,4.52],16777215,i),t.box(0,8.45,4.4,10.4,2.9,.2,16777215);const s=[{geo:t.build(),mat:"lit"},{geo:e.build(),mat:"sign"}];return n.empty||s.push({geo:n.build(),mat:"facade"}),{parts:s,radius:0,max:40}}function vr(i,t=9,e=4.5,n=9079434,s=15790320){const r=new ut,a=new ut;return r.box(-t*.3,2.5,0,.35,5,.35,n),r.box(t*.3,2.5,0,.35,5,.35,n),r.box(0,5+e/2,0,t+.6,e+.6,.4,s),a.quad([-t/2,5,.22],[t/2,5,.22],[t/2,5+e,.22],[-t/2,5+e,.22],16777215,i),{parts:[{geo:r.build(),mat:"lit"},{geo:a.build(),mat:"sign"}],radius:1.2,max:40}}function za(i,t=4,e=2){const n=new ut,s=new ut;return n.box(0,1.6,0,.2,3.2,.2,13619151),n.box(0,3.2+e/2,-.06,t+.2,e+.2,.1,14540253),s.quad([-t/2,3.2,.01],[t/2,3.2,.01],[t/2,3.2+e,.01],[-t/2,3.2+e,.01],16777215,i),{parts:[{geo:n.build(),mat:"lit"},{geo:s.build(),mat:"sign"}],radius:.5,max:30}}function Ds(i,t,e=10133672,n=3,s=!1){const r=new ut,a=new ut;r.prism(0,0,0,i,.2,.14,6,e),r.box(-n/2,i,0,n,.22,.22,e),a.box(-n,i-.2,0,1.4,.3,.6,t);const o=Te(r,a);if(s){const c=new ut,l=4.2,h=i-.5;c.quad([-n-l,h-l,0],[-n+l,h-l,0],[-n+l,h+l,0],[-n-l,h+l,0],t,[0,0,1,1]),c.quad([-n,h-l,-l],[-n,h-l,l],[-n,h+l,l],[-n,h+l,-l],t,[0,0,1,1]),c.quad([-n-3.5,.05,-3.5],[-n+3.5,.05,-3.5],[-n+3.5,.05,3.5],[-n-3.5,.05,3.5],A2(t,.35),[0,0,1,1]),o.push({geo:c.build(),mat:"halo",tint:!1})}return{parts:o,radius:.5,max:120}}function Ba(i=15921906,t=10132122){const e=new ut;return e.box(0,.85,-jt/2,.15,.45,jt+.05,[i,i]),e.box(0,.4,0,.18,.8,.18,t),e.box(0,.4,-jt/2,.18,.8,.18,t),{parts:Te(e),radius:0,max:420}}function we(i,t=15790320,e=14690858,n=16769088){const s=new ut,r=new ut,a=new ut,o=Z+2.5;s.box(-o,5.5,0,1.2,11,1.2,[t,t]),s.box(o,5.5,0,1.2,11,1.2,[t,t]),s.box(0,11.5,0,o*2+1.6,3.4,.8,e),r.quad([-o+1,10.1,.42],[o-1,10.1,.42],[o-1,12.9,.42],[-o+1,12.9,.42],16777215,i);for(let c=0;c<6;c++)a.box(-o+2+c*((o*2-4)/5),13.6,.2,.9,.6,.6,n);return{parts:[{geo:s.build(),mat:"lit"},{geo:r.build(),mat:"sign"},{geo:a.build(),mat:"glow"}],radius:0,max:4}}function yr(i=9079446,t=14204992,e=9){const n=new ut,s=Z+2.2,r=34,a=60;return n.box(-s-a/2,r/2-4,0,a,r+8,3,[i,i]),n.box(s+a/2,r/2-4,0,a,r+8,3,[i,i]),n.box(0,e+(r-e)/2,0,s*2,r-e,3,[i,i]),n.box(0,e+.6,1.6,s*2,1.2,.3,t),n.box(-s-.4,e/2,1.6,.8,e,.3,t),n.box(s+.4,e/2,1.6,.8,e,.3,t),{parts:Te(n),radius:0,max:6}}function P2(i=9){const t=new ut,e=Z+2.2,n=i+2.5,s=4894266,r=3836976,a=11047024,o=9073752,c=(u,d,f)=>t.poly(u.map(([g,_])=>[g,_,f]),d),l=u=>u.map(([d,f])=>[-d,f]).reverse(),h=[[-130,-8],[-e,-8],[-e,n],[-34,30],[-62,38],[-98,22]];c(h,s,-.4),c(l([[-120,-8],[-e,-8],[-e,n],[-30,34],[-55,30],[-90,16]]),r,-.4),c([[-e,n],[e,n],[e+8,34],[12,44],[-10,40],[-e-6,30]],s,-.4),c([[-e-10,-8],[-e,-8],[-e,n],[-e-6,n+6],[-e-14,8]],a,0),c([[e,-8],[e+10,-8],[e+14,8],[e+6,n+6],[e,n]],o,0),c([[-e,n],[e,n],[e+6,n+6],[0,n+9],[-e-6,n+6]],a,0),t.box(-e-.6,i/2,.4,1.2,i+.4,.8,14735560),t.box(e+.6,i/2,.4,1.2,i+.4,.8,14735560),t.box(0,i+1.1,.4,e*2+2.4,2.2,.8,14735560);for(let u=0;u<10;u++){const d=-e+u*e*2/10;t.quad([d,i+.2,.82],[d+e*2/10,i+.2,.82],[d+e*2/10,i+.9,.82],[d,i+.9,.82],u%2?1710618:16764992)}return{parts:Te(t),radius:0,max:6}}function vn(i,t=0){const e=new ut,n=new ut,s=1+t;if(!t)for(const r of[-1.5,1.5])e.box(r,.6,-.1,.16,1.2,.16,15263976);return e.box(0,s+.75,-.08,4.3,1.7,.12,1710618),n.quad([-2,s+.1,0],[2,s+.1,0],[2,s+1.4,0],[-2,s+1.4,0],16777215,i),{parts:[{geo:e.build(),mat:"lit"},{geo:n.build(),mat:"sign"}],radius:1.8,max:60}}function au(){const i=new ut;i.box(0,.65,-jt/2,1.5,1.3,jt,[3840570,5421130]);const t=[16734858,16769088,16777215,16747056];for(let e=0;e<6;e++)i.box(e%2?.35:-.35,1.34,-.5-e*.95,.3,.12,.3,t[e%t.length]);return{parts:Te(i),radius:0,max:360}}function ul(){const i=new ut,t=new ut;return i.prism(0,0,0,8,.1,.08,6,15790320,16769088),t.tri([0,7.8,0],[0,6.2,0],[-2.6,7,.3],16777215),t.tri([0,7,.01],[0,6.6,.01],[-1.6,6.85,.31],13684944),{parts:[{geo:i.build(),mat:"lit",tint:!1},{geo:t.build(),mat:"lit",tint:!0}],radius:.4,max:80}}function ou(){const i=new ut;return i.prism(0,0,0,1.6,.3,.25,5,6964774),i.prism(0,0,1.2,5.2,2.4,0,7,[2783802,1991728]),i.prism(0,0,3.6,7.6,1.9,0,7,[3444799,2519092]),i.prism(0,0,5.8,9.6,1.3,0,7,[4105288,2914872]),{parts:Te(i),radius:1,max:200}}function L2(){const i=new ut;return[[16730730,16777215],[2793727,16769088],[16769088,16738848]].forEach(([e,n],s)=>{const r=(s-1)*.8,a=[];for(let o=0;o<10;o++){const c=o/10*Math.PI*2;a.push([r+Math.cos(c)*.32,1.25+Math.sin(c)*1.25,s*.12])}i.poly(a,e),i.quad([r-.06,.1,s*.12+.01],[r+.06,.1,s*.12+.01],[r+.06,2.4,s*.12+.01],[r-.06,2.4,s*.12+.01],n)}),{parts:Te(i),radius:0,max:40}}function cu(){const i=new ut;return i.poly([[-1.4,0,-4],[1.4,0,-4],[1.1,.9,-4.4],[-1.1,.9,-4.4]],16777215),i.box(0,.6,0,2.8,1.2,8,[16777215,15263976,15790320,2775720]),i.box(0,.35,0,2.84,.25,8.04,2775720),i.box(0,6,.6,.15,10,.15,13684944),i.tri([0,10.5,.6],[0,1.6,.6],[0,1.6,4],16777215),i.tri([0,9,.5],[0,1.6,.5],[0,1.6,-3],16738954),{parts:Te(i),radius:0,max:40}}function D2(i){const t=new ut,e=new ut,n=Z+60,s=12.5;t.box(0,s,0,n*2,2.4,11,[9079448,11053236,7237244,7237244]),t.box(0,s-.3,5.55,n*2,1.2,.2,i),t.box(0,s+1.7,5.3,n*2,1,.3,13158608),t.box(0,s+1.7,-5.3,n*2,1,.3,13158608);for(const r of[-16,Z+5,-47,Z+36])t.box(r,s/2-20,0,2.6,s+40,4,[8026760,9079446]);for(let r=-Z;r<=Z;r+=5.5)e.box(r,s-1.25,0,1.6,.1,.8,16773312);for(let r=-n+4;r<n;r+=9)e.box(r,s+2.35,5.3,.5,.3,.4,16760928);return{parts:Te(t,e),radius:0,max:6}}function N2(i){const t=new ut,e=[16765040,16777215,16756800,8446207,16734858];for(let n=0;n<26;n++){const s=i.range(-45,45),r=i.range(-30,30),a=i.pick(e);if(i.chance(.4))for(let o=0;o<5;o++)t.box(s+o*3,.4,r,.7,.7,.7,a);else t.box(s,.4,r,.9,.9,.9,a)}return{parts:[{geo:t.build(),mat:"glow"}],radius:0,max:200}}function yi(i){const t=new ut,e=new ut;t.box(0,2.3,1,2.5,3.2,7.4,[16053492,16777215,15263976,14737632]),t.box(0,2.2,1,2.54,.5,7.44,i),t.box(0,1.5,-3.6,2.4,2.2,1.8,[16777215]),t.box(0,2.1,-4.45,2,.8,.1,2241348);for(const[n,s]of[[-1,-3.6],[1,-3.6],[-1,2.6],[1,2.6],[-1,3.8],[1,3.8]])t.box(n,.45,s,.4,.9,.9,1381653);return e.box(-1,.95,4.72,.35,.3,.04,16722464),e.box(1,.95,4.72,.35,.3,.04,16722464),{parts:Te(t,e),radius:0,max:10,len:6.5}}function Wi(i){const t=new ut,e=new ut;t.box(0,1.9,0,2.5,3,10,[16777215,16053492,15263976,15263976]),t.box(0,2.4,0,2.54,1,9,2241348),t.box(0,1.2,0,2.54,.4,10.04,i),t.box(0,2.6,5.02,1.8,.8,.05,2241348);for(const[n,s]of[[-1.05,-3.4],[1.05,-3.4],[-1.05,3.4],[1.05,3.4]])t.box(n,.45,s,.4,.9,1,1381653);return e.box(-1,1,5.02,.3,.35,.04,16722464),e.box(1,1,5.02,.3,.35,.04,16722464),e.box(0,3.25,5.02,1.6,.25,.04,16756800),{parts:Te(t,e),radius:0,max:8,len:7.5}}function bi(i){const t=new ut,e=new ut;return t.box(0,.55,0,.16,1.1,.16,[16053492,16777215]),t.box(0,.86,0,.17,.12,.17,1710618),e.box(0,.72,.085,.1,.16,.01,i?16724e3:16777215),{parts:Te(t,e),radius:0,max:400}}function dl(i){const t=new ut,e=new ut;return t.box(0,.6,0,.12,1.2,.12,14474460),t.box(0,1.35,-.04,.9,.6,.06,16777215),e.quad([-.42,1.08,0],[.42,1.08,0],[.42,1.62,0],[-.42,1.62,0],16777215,i),{parts:[{geo:t.build(),mat:"lit"},{geo:e.build(),mat:"sign"}],radius:0,max:20}}function Xi(i){const t=new ut,e=new ut,n=14196858,s=i===1?14196858:3820138;return t.box(-.12,.42,0,.18,.84,.2,s),t.box(.12,.42,0,.18,.84,.2,s),i===1&&t.box(0,.8,0,.44,.18,.24,2763370),e.box(0,1.15,0,.46,.62,.26,[16777215,16777215]),t.box(-.3,1.1,0,.12,.6,.14,n),t.box(.3,1.1,0,.12,.6,.14,n),t.box(0,1.6,0,.24,.28,.24,n),t.box(0,1.76,-.02,.26,.08,.26,i===1?15253600:2759184),{parts:[{geo:t.build(),mat:"lit",tint:!1},{geo:e.build(),mat:"lit",tint:!0}],radius:0,max:160}}function lu(i){const t=new ut;for(let e=0;e<5;e++){const n=i.range(-10,10),s=i.range(0,6),r=i.range(-10,10),a=i.range(.8,1.3);t.tri([n,s,r],[n-.9*a,s+.35*a,r-.2],[n-.1,s+.05,r+.25*a],16777215),t.tri([n,s,r],[n+.9*a,s+.35*a,r-.2],[n+.1,s+.05,r+.25*a],15263984)}return{parts:Te(t),radius:0,max:30}}function U2(){const i=new ut,t=new ut;i.box(0,1.3,0,2.4,2.6,2.2,[16777215,16053492]);for(let e=0;e<3;e++)t.box(-.8+e*.8,1.3,0,.4,2.62,2.22,[16777215,16777215]);return i.prism(0,0,2.6,3.6,1.9,0,4,[16777215,15263976],null,Math.PI/4),i.box(0,1,1.12,.9,1.8,.04,6965802),{parts:[{geo:i.build(),mat:"lit",tint:!1},{geo:t.build(),mat:"lit",tint:!0}],radius:1.4,max:40}}function hu(i){const t=new ut;return t.box(0,.05,0,.16,.1,.4,i),{parts:[{geo:t.build(),mat:"glow"}],radius:0,max:500}}function O2(i){const t=new ut,e=new ut,n=new ut;return t.box(0,1.1,0,1,2.2,.8,[16747040,16752704]),t.box(0,2.3,0,1.1,.2,.9,3815994),e.quad([-.4,1.4,.41],[.4,1.4,.41],[.4,1.9,.41],[-.4,1.9,.41],16777215,i),n.box(0,2.5,0,.3,.2,.3,16764992),{parts:[{geo:t.build(),mat:"lit"},{geo:e.build(),mat:"sign"},{geo:n.build(),mat:"glow"}],radius:0,max:20}}function F2(i){const t=new ut,e=new ut;for(const n of[-4.5,4.5])t.with(new Nt().makeTranslation(n,i-1.1,0).multiply(new Nt().makeRotationX(Math.PI/2)),()=>{t.prism(0,0,-1.6,1.6,.7,.7,10,[9079442,8026754],2763310),t.prism(0,0,-1.61,-1.6,.7,.7,10,2763310,2763310)}),t.box(n,i-.3,0,.2,.6,.2,5921378);for(const n of[-9,9])e.box(n,i-.2,0,.4,.2,1.4,16773312);return{parts:Te(t,e),radius:0,max:12}}const qh=i=>new Lt().setHex(i);function pe(i,t,e,n){const s=[],r=(h,u,d,f,g,_,m,p)=>s.push({xa:h,ya:u,absA:d,xb:f,yb:g,absB:_,c0:qh(m[0]),c1:qh(m[1]),tex:p});let o=-Z;const c=i.edge!==void 0?.45:0;c&&(r(o,0,!1,o+c,0,!1,[i.edge,i.edge],ot.PAINT),o+=c);for(let h=1;h<ki;h++){const u=-Z+h*pr;r(o,0,!1,u-.35/2,0,!1,i.road,ot.ASPHALT),r(u-.35/2,0,!1,u+.35/2,0,!1,[i.line,i.road[1]],ot.PAINT),o=u+.35/2}r(o,0,!1,Z-c,0,!1,i.road,ot.ASPHALT),c&&r(Z-c,0,!1,Z,0,!1,[i.edge,i.edge],ot.PAINT);const l=[];for(const h of[-1,1]){let u=Z,d=0,f=!1;if(i.rumble){const g=i.rumbleW??1.6;r(h*u,0,!1,h*(u+g),0,!1,i.rumble,ot.KERB),u+=g}for(const g of h<0?t:e){const _=u+g.w;let m=d,p=f;g.abs!==void 0?(m=g.abs,p=!0):g.dy!==void 0&&(m=d+g.dy),r(h*u,d,f,h*_,m,p,g.c,g.tex),u=_,d=m,f=p}l.push({x:h*u,y:d,abs:f})}return n&&r(l[0].x,l[0].y,l[0].abs,l[1].x,l[1].y,l[1].abs,n,ot.CEILING),{spans:s}}function k2(i){if(Math.abs(i.xb-i.xa)<.01)return Math.abs(i.yb-i.ya)>3?ot.TUNNEL:ot.CONCRETE;const e={h:0,s:0,l:0};i.c0.getHSL(e,ze);const n=e.h*360,{s,l:r}=e;return i.absB&&i.yb<.5&&i.yb>.05&&r>.9?ot.FOAM:n>165&&n<260&&s>.5?r<.25?ot.BAY:r>.52?ot.SHALLOW:ot.SEA:r<.22?ot.CITY:n>60&&n<170&&s>.25?ot.GRASS:n>25&&n<60&&s>.55?ot.SAND:n>25&&n<60&&s>.3&&r<.8?ot.DIRT:s<.2&&r>.6?ot.CONCRETE:ot.PAVING}const z2={[ot.ASPHALT]:[5.5,9],[ot.PAINT]:[2,6],[ot.KERB]:[1.6,6],[ot.GRASS]:[7,7],[ot.SAND]:[9,9],[ot.SEA]:[16,16],[ot.BAY]:[20,20],[ot.SHALLOW]:[10,10],[ot.FOAM]:[3,8],[ot.CONCRETE]:[4,6],[ot.TUNNEL]:[3,3],[ot.CEILING]:[6,12],[ot.PAVING]:[3,3],[ot.CITY]:[40,40],[ot.DIRT]:[5,5]},Yh=220,B2=32;class G2{constructor(t){this.profiles=t,this.time={value:0};const e=Yh*B2;if(this.pos=new Float32Array(e*4*3),this.colr=new Float32Array(e*4*3),this.uv=new Float32Array(e*4*2),this.tile=new Float32Array(e*4*3),ie.modern)for(const r of t)for(const a of r.spans)Math.abs(a.c0.r-a.c1.r)+Math.abs(a.c0.g-a.c1.g)+Math.abs(a.c0.b-a.c1.b)<.25&&(a.c1=a.c0.clone().lerp(a.c1,.45)),a.tex===void 0&&(a.tex=k2(a)),a.tex===ot.CITY&&(a.c0=new Lt(13158624),a.c1=new Lt(12105940));const n=new Uint32Array(e*6);for(let r=0;r<e;r++)n.set([r*4,r*4+1,r*4+2,r*4,r*4+2,r*4+3],r*6);this.geo=new Ge,this.geo.setAttribute("position",new Ye(this.pos,3).setUsage(ar)),this.geo.setAttribute("color",new Ye(this.colr,3).setUsage(ar)),this.geo.setAttribute("uv",new Ye(this.uv,2).setUsage(ar)),this.geo.setAttribute("tile",new Ye(this.tile,3).setUsage(ar)),this.geo.setIndex(new Ye(n,1));const s=new tn({vertexColors:!0,side:fe});ie.modern&&(s.color.setScalar(1.1),La(s,a2(),this.time)),this.mesh=new ue(this.geo,s),this.mesh.frustumCulled=!1,this.mesh.renderOrder=0}update(t){const{bx:e,by:n,bz:s,bh:r,yRef:a}=t,o=this.pos,c=this.colr,l=this.uv,h=this.tile;let u=0;const d=Math.min(t.count,Yh);for(let f=0;f<d;f++){const g=t.start+f,_=t.track.seg(g),m=this.profiles[_.profile],p=Math.floor(g/Og)%2===0,x=Math.cos(r[f]),M=Math.sin(r[f]),v=Math.cos(r[f+1]),w=Math.sin(r[f+1]);for(const E of m.spans){const T=p?E.c0:E.c1,C=u*12;o[C]=e[f]+x*E.xa,o[C+1]=E.absA?E.ya-a:n[f]+E.ya,o[C+2]=s[f]+M*E.xa,o[C+3]=e[f]+x*E.xb,o[C+4]=E.absB?E.yb-a:n[f]+E.yb,o[C+5]=s[f]+M*E.xb,o[C+6]=e[f+1]+v*E.xb,o[C+7]=E.absB?E.yb-a:n[f+1]+E.yb,o[C+8]=s[f+1]+w*E.xb,o[C+9]=e[f+1]+v*E.xa,o[C+10]=E.absA?E.ya-a:n[f+1]+E.ya,o[C+11]=s[f+1]+w*E.xa;for(let z=0;z<4;z++)c[C+z*3]=T.r,c[C+z*3+1]=T.g,c[C+z*3+2]=T.b;const b=z2[E.tex??0]??[6,8],S=(E.xa+E.ya)/b[0],D=(E.xb+E.yb)/b[0],W=g*jt/b[1],H=(g+1)*jt/b[1],V=u*8,[nt,O]=Mr(E.tex??0),rt=s2[E.tex??0]??0;for(let z=0;z<4;z++)h[u*12+z*3]=nt,h[u*12+z*3+1]=O,h[u*12+z*3+2]=rt;l[V]=S,l[V+1]=W,l[V+2]=D,l[V+3]=W,l[V+4]=D,l[V+5]=H,l[V+6]=S,l[V+7]=H,u++}}this.geo.setDrawRange(0,u*6),this.geo.attributes.position.addUpdateRange(0,u*12),this.geo.attributes.color.addUpdateRange(0,u*12),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,ie.modern&&(this.geo.attributes.uv.addUpdateRange(0,u*8),this.geo.attributes.uv.needsUpdate=!0,this.geo.attributes.tile.addUpdateRange(0,u*12),this.geo.attributes.tile.needsUpdate=!0,this.time.value=performance.now()/1e3)}}const _e={x:0,y:0,z:0,h:0},ca={x:0,y:0,z:0,h:0},$h=48;class H2{constructor(t){this.route=t,this.scene=new yg,this.traffic=[],this.rivals=[],this.rivalCars=[],this.rng=new ii(7),this.carPaint=-1,this.net=null,this.tracers=[],this.playerGun={target:null,flash:!1},this.netTime=0;const e=new Ng;if(this.data=t.build(e),this.track=this.data.track,this.view=new Bg(this.track),this.scene.fog=new Jc(t.fog.color,t.fog.near,t.fog.far),this.scene.background=new Lt(t.fog.color),ie.modern){this.scene.add(new Ch(t.ambient.color,t.ambient.intensity*.55));const[a,o]=t.hemi;this.scene.add(new wg(a,o,t.ambient.intensity*.75))}else this.scene.add(new Ch(t.ambient.color,t.ambient.intensity));const n=new Rg(t.sun.color,t.sun.intensity);n.position.set(...t.sun.dir),this.scene.add(n),this.scene.add(this.data.backdrop.group);const s=w2(e.texture);this.road=new G2(this.data.profiles),this.scene.add(this.road.mesh),this.props=new T2(this.data.props,s,this.scene),this.mats=s,this.plate=e.add({bg:t.plate,fg:1056864,text:"TH-86",border:1056864},1,1),this.car=new Ao(qe[0],qe[0].paints[0],s,this.plate,this.route.shadow,this.route.night),this.scene.add(this.car.root),this.particles=new E2(this.scene);const r=new Ge;r.setAttribute("position",new Me(new Float32Array($h*6),3)),this.tracerMesh=new W0(r,new Qc({color:16771216,transparent:!0,opacity:.9,blending:Ta,depthWrite:!1,fog:!1})),this.tracerMesh.frustumCulled=!1,this.scene.add(this.tracerMesh)}setPlayerCar(t,e){this.car.spec===t&&this.carPaint===e&&!this.car.damaged||(this.scene.remove(this.car.root),this.car.dispose(),this.car=new Ao(t,e,this.mats,this.plate,this.route.shadow,this.route.night),this.carPaint=e,this.scene.add(this.car.root))}setRivals(t){for(const e of this.rivalCars)this.scene.remove(e.root),e.dispose();this.rivals=t,this.rivalCars=t.map(e=>{const n=new Ao(e.spec,e.paint,this.mats,this.plate,this.route.shadow,this.route.night);return this.scene.add(n.root),n})}sunOnHud(t,e,n){const s=this.data.backdrop.sunNdc(t);return!s||Math.abs(s.x)>1.3||Math.abs(s.y)>1.3?null:{x:(s.x+1)/2*e,y:(1-s.y)/2*n}}laneX(t){return-ki*pr/2+pr*(t+.5)}spawnCar(t){const e=this.rng.int(0,ki-1);return{d:t,x:this.laneX(e),laneTarget:e,v:this.rng.range(28,50),t:this.rng.pick(this.data.trafficTypes),tint:this.rng.pick(this.route.trafficColors),passed:!1}}resetTraffic(t,e=this.route.trafficCount,n=160){this.net=null,this.traffic=[];for(let s=0;s<e;s++)this.traffic.push(this.spawnCar(t+n+s*75+this.rng.range(0,40)))}shoot(t,e,n,s,r){const a=Math.sign(s-e)||1,o=e+a*1,c=1.25;let l=s,h=n,u=.8;r||(l+=(Math.random()-.5)*6,h+=(n-t)*.3+(Math.random()-.5)*6,u=Math.random()<.5?.05:1.6+Math.random()),this.tracers.length>=$h&&this.tracers.shift(),this.tracers.push({d0:t+Math.sign(n-t)*.5,x0:o,y0:c,d1:h,x1:l,y1:u,life:.07});const d=this.particles;if(r)for(let f=0;f<4;f++)d.spawn(n+(Math.random()-.5)*2,s+(Math.random()-.5)*1.6,.6+Math.random()*.6,0,(Math.random()-.5)*5,2+Math.random()*3,.3,.12,-1,Math.random()<.5?16769088:16777215);else u<.1&&d.spawn(h,l,.1,0,0,.6,.5,.35,1.5,13156520)}aimCar(t,e,n,s,r,a){const o=r-n,c=s-e,l=Math.abs(o)>.4?Math.sign(o):1,h=o-l*1.1;t.aim(l,Math.atan2(-h,Math.max(-60,Math.min(60,c))),a)}setNetTraffic(t,e){const n=new ii(t),s=e+160,r=this.track.goalDist+100-s,a=Math.max(6,Math.round(this.route.trafficCount*r/1100*.7)),o={start:s,len:r,cars:[]};this.traffic=[];for(let c=0;c<a;c++){const l=[n.int(0,ki-1)];for(let h=1;h<32;h++)l.push(Math.max(0,Math.min(ki-1,l[h-1]+(n.chance(.5)?n.sign():0))));o.cars.push({d0:(c+n.next()*.6)/a*r,v:n.range(28,50),lanes:l,period:n.range(8,20)}),this.traffic.push({d:s+o.cars[c].d0,x:this.laneX(l[0]),laneTarget:l[0],v:o.cars[c].v,t:n.pick(this.data.trafficTypes),tint:n.pick(this.route.trafficColors),passed:!1,wrap:0})}this.net=o,this.netTime=0}updateNetTraffic(t,e){const n=this.net,s=this.netTime;this.traffic.forEach((r,a)=>{const o=n.cars[a],c=o.d0+o.v*s,l=Math.floor(c/n.len);l!==r.wrap&&(r.wrap=l,r.passed=!1),r.d=n.start+c-l*n.len;const h=Math.floor(s/o.period),u=o.lanes[h%o.lanes.length],d=o.lanes[Math.max(0,h-1)%o.lanes.length],f=Math.min(1,(s-h*o.period)/1.5),g=f*f*(3-2*f);r.x=this.laneX(d)+(this.laneX(u)-this.laneX(d))*g,r.laneTarget=u,!r.passed&&r.d<t-3&&r.d>t-40&&(r.passed=!0,e())})}rivalHit(t,e){var s;const n=["front","rear","left","right"];(s=this.rivalCars[t])==null||s.hit(e,n[Math.floor(Math.random()*4)])}rivalBreakLamp(t){var e;(e=this.rivalCars[t])==null||e.breakLamp(Math.random()<.5?-1:1)}rivalScreenPos(t,e,n,s){const r=this.rivalCars[t];if(!r||!r.root.visible)return null;const a=r.root.position.clone();a.y+=1.9;const o=a.distanceTo(e.position);return a.project(e),a.z>1||Math.abs(a.x)>1.1||Math.abs(a.y)>1.1?null:{x:(a.x+1)/2*n,y:(1-a.y)/2*s,dist:o}}updateTraffic(t,e,n){if(this.net)return this.updateNetTraffic(e,n);const s=this.track.goalDist;for(const r of this.traffic){r.d+=r.v*t,this.rng.chance(t*.08)&&(r.laneTarget=Math.max(0,Math.min(ki-1,r.laneTarget+this.rng.sign())));const a=this.laneX(r.laneTarget);if(r.x+=Math.sign(a-r.x)*Math.min(Math.abs(a-r.x),3*t),!r.passed&&r.d<e-3&&(r.passed=!0,n()),r.d<e-60||r.d>e+1500){const o=this.spawnCar(e+this.rng.range(900,1150));o.d>s+100&&(o.d=e-200),Object.assign(r,o)}}}hitTraffic(t,e){for(const n of this.traffic){const s=this.data.props[n.t].len??4.4;if(Math.abs(n.d-t)<s&&Math.abs(n.x-e)<2)return n}return null}hitProp(t,e){const n=Math.floor(t/jt);for(let s=n-1;s<=n+1;s++){const r=this.track.seg(s),a=s*jt-t;if(!(Math.abs(a)>2.4))for(const o of r.props){const c=this.data.props[o.t].radius;if(c>0&&Math.abs(o.x-e)<c*(o.s??1)+.9)return!0}}return!1}update(t,e,n,s,r){const a=this.view;a.update(t),this.road.update(a);const o=this.props;o.begin();const{bx:c,by:l,bz:h,bh:u,yRef:d}=a;for(let M=0;M<a.count;M++){const v=this.track.seg(a.start+M);if(!v.props.length)continue;const w=Math.cos(u[M]),E=Math.sin(u[M]);for(const T of v.props){const C=T.abs?(T.y??0)-d:l[M]+(T.y??0);o.add(T.t,c[M]+w*T.x,C,h[M]+E*T.x,-u[M]+(T.r??0),T.s??1,T.sy??1,T.tint)}}for(const M of this.traffic)a.sample(M.d,M.x,_e)&&o.add(M.t,_e.x,_e.y,_e.z,-_e.h,1,1,M.tint);o.end(),a.sample(t+2,e,_e);const f=_e.y;a.sample(t-2,e,_e);const g=_e.y;this.car.root.position.set(e,0,0),this.car.pose(r.steer,r.yaw,r.spin,r.bounce,Math.atan2(f-g,4),r.brake,r.flame);const _=this.playerGun,m=_.target!==null?this.rivals[_.target]:null;m?this.aimCar(this.car,t,e,m.d,m.x,_.flash):this.car.aim(0),this.rivals.forEach((M,v)=>{const w=this.rivalCars[v];if(!a.sample(M.d+2,M.x,_e)){w.root.visible=!1;return}const E=_e.y;a.sample(M.d-2,M.x,_e);const T=_e.y;if(a.sample(M.d,M.x,_e),w.root.visible=!0,w.setNear(Math.abs(M.d-t)<28),w.root.position.set(_e.x,_e.y,_e.z),w.pose(M.steer,-_e.h-M.steer*.08,M.spin,0,Math.atan2(E-T,4),M.braking,M.turboT>0?1:0),M.gunT>0){const C=M.gunTo===-1?{d:t,x:e}:this.rivals[M.gunTo];C?this.aimCar(w,M.d,M.x,C.d,C.x,Math.random()<.5):w.aim(0)}else w.aim(0)}),a.sample(t-8.8,e*.9,_e);const p=Math.max(_e.y,-.5)+3.3;a.sample(t+40,0,_e);const x=_e.y*.45+.9;n.position.set(e*.9+(Math.random()-.5)*s,p+(Math.random()-.5)*s,8.8),n.lookAt(e*.82,x,-30),this.data.backdrop.update(n.position,a.heading),this.particles.render(a,n),this.renderTracers(a)}renderTracers(t){const e=this.tracerMesh.geometry.getAttribute("position");let n=0;for(const s of this.tracers)!t.sample(s.d0,s.x0,_e)||!t.sample(s.d1,s.x1,ca)||(e.setXYZ(n*2,_e.x,_e.y+s.y0,_e.z),e.setXYZ(n*2+1,ca.x,ca.y+s.y1,ca.z),n++);e.needsUpdate=!0,this.tracerMesh.geometry.setDrawRange(0,n*2)}tickTracers(t){for(const e of this.tracers)e.life-=t;this.tracers=this.tracers.filter(e=>e.life>0)}}const Co=["arcade","rivals","online"],Xe=39,la=52,tr=262,ha=106,Kh=39,Zh=262,V2=250,ps=330,Io=46,Rn=396,jh={x0:28,x1:378,mid:203,carY:72,carH:46,paintY:122,turbY:142,weapY:166,ammoY:190,chipH:20,minusX:190,plusX:284},ke=9079464,Jh=82,Po=3.6,er=[0,18,34,50,66,84],Qh=25,t0=.82,W2=()=>{try{return parseInt(localStorage.getItem("th86-hi")??"0",10)||0}catch{return 0}},e0=()=>{try{const i=JSON.parse(localStorage.getItem("th86-car")??"[0,0]");return[Math.min(qe.length-1,i[0]|0),i[1]|0]}catch{return[0,0]}},n0=(i,t)=>{try{localStorage.setItem("th86-car",JSON.stringify([i,t]))}catch{}},X2=()=>{try{const i=parseInt(localStorage.getItem("th86-music")??"-1",10);return i>=-1&&i<lr.length?i:-1}catch{return-1}},q2=i=>{try{localStorage.setItem("th86-music",String(i))}catch{}},Lo=i=>i<.4?4251712:i<.7?Ot:ge,ua=(i,t)=>{try{const e=localStorage.getItem(i);return e===null?t:parseInt(e,10)}catch{return t}},Do=(i,t)=>{try{localStorage.setItem(i,String(t))}catch{}},Y2=()=>{try{return localStorage.getItem("th86-name")??""}catch{return""}},$2=i=>{try{localStorage.setItem("th86-name",i)}catch{}},K2=i=>{try{localStorage.setItem("th86-hi",String(i))}catch{}};class Z2{constructor(t,e,n,s,r){this.routes=t,this.camera=e,this.input=n,this.audio=s,this.hud=r,this.state="attract",this.t=0,this.paused=!1,this.routeIdx=0,this.pos=0,this.px=0,this.speed=0,this.steer=0,this.driftYaw=0,this.crashT=0,this.crashYaw=0,this.hp=100,this.wrecked=!1,this.dmgCool=0,this.scrapeDmg=0,this.smokeT=0,this.wheelSpin=0,this.bounce=0,this.shakeKick=0,this.drifting=!1,this.gear=1,this.flameT=0,this.wasAccel=!1,this.timeLeft=0,this.score=0,this.stage=0,this.hi=W2(),this.msg="",this.msg2="",this.msgUntil=0,this.bonusLeft=0,this.demoClock=0,this.attractRoute=0,this.clock=0,this.lastBeep=-1,this.musicIdx=X2(),this.mode="arcade",this.net=null,this.nameBox=null,this.playerName=Y2(),this.pending=null,this.raceId="",this.netSendT=0,this.tableT=0,this.raceTime=0,this.turbos=jr,this.turboT=0,this.turboCount=Math.max(1,Math.min(9,ua("th86-turbos",jr)||jr)),this.weaponsSetting=ua("th86-weapons",1)===1,this.ammoCount=Jr.includes(ua("th86-ammo",Qr))?ua("th86-ammo",Qr):Qr,this.raceAmmo=Qr,this.raceTurbos=jr,this.weapons=!1,this.ammo=0,this.fireCool=0,this.firingT=0,this.gunTarget=null,this.lastGunTarget=null,this.gunP=0,this.noTargetT=0,this.hitFlash=0,this.gunFrom=new Map,this.pendingHits=new Map,this.hitSendT=0,this.onlineGo=null,this.finishTime=-1,this.place=8,this.table=[],this.musicToast=0,this.carIdx=e0()[0],this.paintIdx=e0()[1],this.touch=!1,this.worlds=t.map(()=>null),this.world=this.getWorld(0),this.resetPlayer(!0)}get spec(){return qe[this.carIdx]}get vmax(){return this.spec.stats.vmax/Po}applyCar(t=this.spec,e=t.paints[this.paintIdx%t.paints.length]){this.world.setPlayerCar(t,e)}getWorld(t){var e;return(e=this.worlds)[t]??(e[t]=new H2(this.routes[t]))}setWorld(t){this.world===this.worlds[t]&&this.routeIdx===t||(this.routeIdx=t,this.world=this.getWorld(t),this.state!=="attract"&&this.applyCar())}resetPlayer(t){this.pos=3*jt,this.px=t?this.world.laneX(1):0,this.speed=t?50:0,this.turboT=0,this.steer=0,this.driftYaw=0,this.crashT=0,this.stage=0,this.wrecked=!1,this.world.resetTraffic(this.pos),this.world.particles.clear()}go(t){this.state=t,this.t=0}trackId(){return this.musicIdx<0?this.world.route.music:lr[this.musicIdx].id}musicLabel(){return this.musicIdx<0?"ROUTE THEME":lr[this.musicIdx].name}nextTrack(){this.musicIdx=this.musicIdx+1>=lr.length?-1:this.musicIdx+1,q2(this.musicIdx),this.audio.music(this.trackId()),this.musicToast=this.clock+2.5}flash(t,e="",n=2){this.msg=t,this.msg2=e,this.msgUntil=this.clock+n}startRace(){this.paused=!1,this.resetPlayer(!1),this.hp=100,this.wrecked=!1,this.applyCar();const t=this.mode==="online"?this.onlineGo:null;this.raceTurbos=t?t.turbos:this.turboCount,this.turbos=this.raceTurbos,this.turboT=0,this.weapons=t?t.weapons:this.mode==="rivals"&&this.weaponsSetting,this.raceAmmo=t?t.ammo:this.ammoCount,this.ammo=this.weapons?this.raceAmmo:0,this.fireCool=0,this.firingT=0,this.gunTarget=this.lastGunTarget=null,this.hitFlash=0,this.gunFrom.clear(),this.pendingHits.clear(),this.raceTime=0,this.finishTime=-1,this.table=[],this.mode==="rivals"?(this.world.setRivals(Yg(this.spec,this.pos,Date.now()&65535,this.raceTurbos,this.weapons?this.raceAmmo:0)),this.world.resetTraffic(this.pos,10,520),this.place=8):this.world.setRivals([]),this.timeLeft=this.world.route.startTime,this.score=0,this.lastBeep=-1,this.msg="",this.go("countdown"),this.audio.music(this.trackId())}update(t){const e=this.input;if(this.clock+=t,e.hit("KeyM")&&this.audio.toggleMute(),!this.paused&&e.hit("KeyN")&&["carselect","countdown","race"].includes(this.state)&&this.nextTrack(),this.paused){let s=e.hit("Escape")?"resume":e.hit("KeyR")?"restart":e.hit("KeyQ")?"quit":"";for(const r of e.taps)r.y>222&&r.y<254?s="resume":r.y>=254&&r.y<280?s="restart":r.y>=280&&r.y<310&&(s="quit");s==="resume"?this.paused=!1:s==="restart"&&this.mode!=="online"?this.startRace():s==="quit"&&(this.paused=!1,this.mode==="online"?this.toLobby():this.toSelect()),this.audio.engine(!1,0,0),this.audio.skid(0),this.netTick(t);return}switch(this.t+=t,this.state){case"attract":{if(this.demoClock+=t,this.demoClock>24){this.demoClock=0,this.attractRoute=(this.attractRoute+1)%this.routes.length,this.setWorld(this.attractRoute);const s=qe[Math.floor(Math.random()*qe.length)];this.world.setPlayerCar(s,s.paints[0]),this.resetPlayer(!0)}this.drive(t,this.autopilot(),!0),(e.confirm||e.taps.length)&&(this.audio.coin(),this.toSelect());break}case"select":{this.drive(t,this.autopilot(),!0);let s=-1,r=e.confirm||this.t>20;const a=this.routes.length;e.hit("ArrowLeft","KeyA")&&(s=(this.routeIdx+a-1)%a),e.hit("ArrowRight","KeyD")&&(s=(this.routeIdx+1)%a);let o=e.hit("ArrowUp","KeyW","ArrowDown","KeyS");for(const c of e.taps)if(c.y>la-4&&c.y<la+2*ha-8&&c.x>Xe&&c.x<Xe+3*tr-12){const l=Math.floor((c.y-la+4)/ha)*3+Math.floor((c.x-Xe)/tr);l===this.routeIdx?r=!0:l<a&&(s=l)}else if(c.y>=ps-4&&c.y<ps+Io+6){const l=Co[Math.max(0,Math.min(2,Math.floor((c.x-Kh)/Zh)))];l!==this.mode&&(this.mode=l,this.audio.blip())}else c.y>=Rn-6&&(r=!0);if(o){const c=e.hit("ArrowDown","KeyS")?1:2;this.mode=Co[(Co.indexOf(this.mode)+c)%3],this.audio.blip()}s>=0&&(this.audio.blip(),this.setWorld(s),this.resetPlayer(!0)),e.hit("Escape")?(this.go("attract"),this.audio.music("title")):r&&(this.audio.coin(),this.mode==="online"?this.toName():this.toCarSelect());break}case"carselect":{this.speed=0;let s=0,r=0,a=e.confirm||this.t>25;e.hit("ArrowLeft","KeyA")&&(s=-1),e.hit("ArrowRight","KeyD")&&(s=1),e.hit("ArrowUp","KeyW","ArrowDown","KeyS")&&(r=1),e.hit("KeyT")&&this.cycleTurbos(),e.hit("KeyV")&&this.mode==="rivals"&&this.toggleWeapons(),e.hit("KeyB")&&this.mode==="rivals"&&this.cycleAmmo();for(const o of e.taps)o.y>150&&o.y<186?this.mode!=="rivals"||o.x<xt*.33?this.cycleTurbos():o.x<xt*.66?this.toggleWeapons():this.cycleAmmo():o.y>370&&o.y<405&&o.x>xt/2?this.nextTrack():o.y>405&&o.x>xt/2-150&&o.x<xt/2+150?a=!0:o.x<160?s=-1:o.x>xt-160?s=1:r=1;s&&(this.carIdx=(this.carIdx+s+qe.length)%qe.length,this.paintIdx=0,this.audio.blip()),r&&(this.paintIdx=(this.paintIdx+1)%this.spec.paints.length,this.audio.blip()),(s||r)&&this.applyCar(),e.hit("Escape")?this.toSelect():a&&(n0(this.carIdx,this.paintIdx),this.audio.coin(),this.startRace()),this.showroom(t);break}case"name":{this.speed=0,e.hit("Escape")&&this.nameBox&&(this.nameBox.hide(),this.toSelect()),this.showroom(t);break}case"lobby":{this.lobby(t);break}case"countdown":{const s=Math.floor(this.t);s!==this.lastBeep&&s<=3&&(this.lastBeep=s,this.audio.countBeep(s===3));const r=e.accel?.9:.15;this.audio.engine(!0,r,e.accel?1:0),this.updateWorld(0,{steer:0,yaw:0,spin:0,bounce:e.accel?Math.random()*.02:0}),this.t>=3&&(this.go("race"),this.flash("GO!","",1)),e.hit("Escape")&&(this.paused=!0),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}case"race":{e.hit("KeyT","ShiftLeft","ShiftRight")&&this.turbos>0&&this.turboT<=0&&this.crashT<=0&&(this.turbos--,this.turboT=Dc,this.audio.turbo(),this.flash("TURBO!","",1)),this.drive(t,{accel:e.accel||this.turboT>0,brake:e.brake,steer:e.steer,drift:e.drift},!1),this.timeLeft-=t,this.score+=Math.floor(this.speed*Po*t*9),this.drifting&&this.speed>45&&(this.score+=Math.floor(t*3e3));const s=this.world.track.seg(Math.floor(this.pos/jt));s.stage>this.stage&&(this.stage=s.stage,this.timeLeft+=this.world.route.extendTime,this.flash("CHECKPOINT!","EXTENDED PLAY",2.5),this.audio.jingle()),this.pos>=this.world.track.goalDist?(this.bonusLeft=Math.max(0,this.timeLeft),this.mode!=="arcade"&&(this.finishTime=this.raceTime,this.place=Nh(this.world.rivals,this.pos,this.finishTime),this.score+=[1e6,6e5,4e5,25e4,15e4,1e5,5e4,2e4][this.place-1],this.table=ea(this.world.rivals,this.world.track,"YOU",this.spec.name,this.finishTime,this.raceTime)),this.go("goal"),this.audio.fanfare(),this.audio.music(null)):this.timeLeft<=0&&(this.timeLeft=0,this.mode!=="arcade"&&(this.table=ea(this.world.rivals,this.world.track,"YOU",this.spec.name,1/0,this.raceTime)),this.go("over"),this.audio.sad(),this.audio.music(null),this.saveScore()),e.hit("Escape")&&(this.paused=!0),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}case"goal":{const s=this.autopilot();if(this.drive(t,{...s,accel:!1,brake:this.speed>20},!0),this.t>1.5&&this.bonusLeft>0){const r=Math.min(this.bonusLeft,t*12);this.bonusLeft-=r,this.score+=Math.floor(r*1e4),this.timeLeft=this.bonusLeft,Math.floor(this.t*12)%2===0&&this.audio.blip(),this.bonusLeft<=0&&this.saveScore()}this.t>3&&this.bonusLeft<=0&&(e.confirm||e.taps.length||this.t>14)&&this.afterRace(),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}case"over":{this.drive(t,{accel:!1,brake:this.t>1,steer:0,drift:!1},!1),this.t>2.5&&(e.confirm||e.taps.length||this.t>12)&&this.afterRace(),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}}["race","goal","over"].includes(this.state)&&this.guns(t);const n=this.world;if(n.rivals.length&&["countdown","race","goal","over"].includes(this.state)){const s=this.state!=="countdown";this.state==="race"&&(this.raceTime+=t),$g(n.rivals,t,n.track,n.traffic,r=>n.data.props[r.t].len??4.4,{pos:this.pos,px:this.px,speed:this.speed},this.raceTime,s),(this.state==="race"||this.state==="countdown")&&(this.place=Nh(n.rivals,this.pos,-1))}n.netTime=this.raceTime,this.netTick(t)}saveScore(){this.score>this.hi&&(this.hi=this.score,K2(this.hi))}cycleTurbos(t=1){this.turboCount=(this.turboCount-1+t+9)%9+1,Do("th86-turbos",this.turboCount),this.audio.blip()}toggleWeapons(){this.weaponsSetting=!this.weaponsSetting,Do("th86-weapons",this.weaponsSetting?1:0),this.audio.blip()}cycleAmmo(t=1){const e=Jr.length;this.ammoCount=Jr[(Math.max(0,Jr.indexOf(this.ammoCount))+t+e)%e],Do("th86-ammo",this.ammoCount),this.audio.blip()}settingsLine(t){const e=n=>this.touch?"":`${n} `;return`${e("T")}TURBOS ${this.turboCount}${t?`  ${e("V")}WEAPONS ${this.weaponsSetting?"ON":"OFF"}  ${e("B")}AMMO ${this.ammoCount}`:""}`}showroom(t){this.updateWorld(t,{steer:0,yaw:0,spin:0,bounce:0});const e=this.t*.45+.6,n=this.camera;n.fov=40,n.updateProjectionMatrix(),n.position.set(this.px+Math.sin(e)*7,2,Math.cos(e)*7),n.lookAt(this.px,.35,0)}boot(){Fh()!==null&&(this.mode="online",this.toName())}toName(){if(this.mode="online",this.go("name"),this.applyCar(),this.resetPlayer(!1),this.px=0,!this.nameBox)return this.joinLobby(this.playerName||"PLAYER");this.nameBox.show(this.playerName,t=>{this.input.fireFirst(),this.playerName=t,$2(t),this.joinLobby(t)})}joinLobby(t){var e;if(!this.net||this.net.status==="error"){(e=this.net)==null||e.leave();const n=new URLSearchParams(location.search).get("net")==="local";this.net=new e2(Fh()??"lobby",n),this.net.onGo=s=>this.acceptGo(s),this.net.onSt=(s,r)=>this.gotSt(s,r),this.net.onHit=(s,r)=>this.gotHit(s,r)}this.net.setMe({name:t,car:this.carIdx,paint:this.paintIdx,status:"lobby",raceId:""}),this.toLobby()}toLobby(){var t;this.paused=!1,this.pending=null,this.raceId="",this.world.setRivals([]),(t=this.net)==null||t.setMe({status:"lobby",raceId:""}),this.go("lobby"),this.applyCar(),this.resetPlayer(!1),this.px=0,this.audio.music(this.trackId())}leaveOnline(){var t;(t=this.net)==null||t.leave(),this.net=null,this.pending=null,this.mode="arcade",this.toSelect()}afterRace(){this.mode==="online"&&this.net?this.toLobby():this.toSelect()}lobby(t){const e=this.input,n=this.net;this.speed=0;let s=0,r=0,a=!1,o=e.confirm;e.hit("ArrowLeft","KeyA")&&(s=-1),e.hit("ArrowRight","KeyD")&&(s=1),e.hit("ArrowUp","KeyW","ArrowDown","KeyS")&&(r=1),e.hit("KeyR")&&(a=!0);let c=e.hit("KeyT")?1:0,l=e.hit("KeyV"),h=e.hit("KeyB")?1:0,u=-1,d=e.hit("Escape","KeyQ");const f=jh;for(const _ of e.taps){const m=(x,M)=>_.x>=x-4&&_.x<x+M+4,p=x=>_.y>=x-3&&_.y<x+f.chipH+3;if(_.y>405&&Math.abs(_.x-xt/2)<150)o=!0;else if(_.y>405&&_.x<xt/2-160)a=!0;else if(_.y<50&&_.x<150)d=!0;else if(_.y>=f.carY&&_.y<f.carY+f.carH&&_.x<f.x1)s=_.x<f.x0+40?-1:1;else if(_.y>=f.paintY-4&&_.y<f.paintY+16&&_.x<f.x1){const x=this.spec.paints.length,M=f.mid-(x*22-6)/2,v=Math.floor((_.x-M+3)/22);u=v>=0&&v<x?v:-1,u<0&&(r=1)}else p(f.turbY)&&m(f.minusX,28)?c=-1:p(f.turbY)&&m(f.plusX,28)?c=1:p(f.weapY)&&m(f.minusX,f.plusX+28-f.minusX)?l=!0:p(f.ammoY)&&m(f.minusX,28)?h=-1:p(f.ammoY)&&m(f.plusX,28)?h=1:_.y>=135&&_.y<400&&_.x>f.x1&&_.x<xt-330&&(r=1)}if(d)return this.leaveOnline();if((n==null?void 0:n.status)==="error"){o&&this.joinLobby(this.playerName||"PLAYER"),this.showroom(t);return}!!this.pending||(s&&(this.carIdx=(this.carIdx+s+qe.length)%qe.length,this.paintIdx=0),r&&(this.paintIdx=(this.paintIdx+1)%this.spec.paints.length),u>=0&&u!==this.paintIdx&&(this.paintIdx=u,r=1),(s||r)&&(this.audio.blip(),this.applyCar(),n0(this.carIdx,this.paintIdx),n==null||n.setMe({car:this.carIdx,paint:this.paintIdx})),a&&(this.audio.blip(),this.setWorld((this.routeIdx+1)%this.routes.length),this.applyCar(),this.resetPlayer(!1),this.px=0,this.audio.music(this.trackId())),c&&this.cycleTurbos(c),l&&this.toggleWeapons(),h&&this.cycleAmmo(h),o&&(n==null?void 0:n.status)==="online"&&this.startOnline()),this.pending&&zi()>=this.pending.at&&this.beginOnlineRace(this.pending.go),this.showroom(t)}startOnline(){const t=this.net,e=t.list().filter(s=>s.status==="lobby").slice(0,7),n={raceId:`${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,route:this.routeIdx,seed:Math.floor(Math.random()*1e9),turbos:this.turboCount,weapons:this.weaponsSetting,ammo:this.ammoCount,players:[{id:t.selfId,name:this.playerName||"PLAYER",car:this.carIdx,paint:this.paintIdx},...e.map(s=>({id:s.id,name:s.name,car:s.car,paint:s.paint}))]};t.sendGo(n),this.acceptGo(n)}acceptGo(t){this.state!=="lobby"||!this.net||t.players.some(e=>e.id===this.net.selfId)&&(this.pending&&this.pending.go.raceId<=t.raceId||(this.onlineGo=t,this.pending={go:t,at:zi()+2},this.audio.coin()))}beginOnlineRace(t){const e=this.net;this.pending=null,this.onlineGo=t,this.setWorld(t.route),this.raceId=t.raceId,this.startRace();const n=t.players.length,s=Math.ceil(n/2),r=o=>({d:3*jt+(s-1-Math.floor(o/2))*9,x:(o%2?1:-1)*pr*.55}),a=[];t.players.forEach((o,c)=>{const l=r(c);if(o.id===e.selfId){this.pos=l.d,this.px=l.x;return}const h=qe[o.car%qe.length];a.push({name:o.name,spec:h,paint:h.paints[o.paint%h.paints.length],d:l.d,x:l.x,v:0,vmax:0,corner:0,aggro:0,lane:0,steer:0,spin:0,braking:!1,finished:-1,bumpT:0,turbos:0,turboT:0,hp:100,wrecked:!1,wreckT:0,smokeT:0,ammo:0,gunTaken:0,burst:0,fireCool:0,gunT:0,gunTo:-1,remote:{id:o.id,d:l.d,x:l.x,v:0,at:zi(),hp:100}})}),this.world.setRivals(a),this.world.setNetTraffic(t.seed,3*jt),this.place=n,e.setMe({status:"race",raceId:t.raceId})}gotSt(t,e){var a;if(!this.raceId||t.r!==this.raceId)return;const n=this.world.rivals.findIndex(o=>{var c;return((c=o.remote)==null?void 0:c.id)===e});if(n<0)return;const s=this.world.rivals[n],r=s.remote;if(r.d=t.d,r.x=t.x,r.v=t.v,r.at=zi(),s.steer=t.steer,s.braking=t.br,s.turboT=t.tb?1:0,t.hp<r.hp-.5&&(this.world.rivalHit(n,Math.min(1,(r.hp-t.hp)/25)),r.hp>=55&&t.hp<55&&this.world.rivalBreakLamp(n),r.hp=t.hp),s.hp=t.hp,t.hp<=0&&!s.wrecked&&(s.wrecked=!0,s.wreckT=0),t.fin>=0&&s.finished<0&&(s.finished=t.fin),t.gun){const o=t.gun===((a=this.net)==null?void 0:a.selfId)?-1:this.world.rivals.findIndex(c=>{var l;return((l=c.remote)==null?void 0:l.id)===t.gun});o!==n&&(s.gunTo=o,s.gunT=.3)}}gotHit(t,e){var n;!this.raceId||t.r!==this.raceId||t.to!==((n=this.net)==null?void 0:n.selfId)||t.n>0&&this.takeGunHit(e,t.n)}netTick(t){var n,s,r;const e=this.net;if(e&&(e.update(t),!(this.mode!=="online"||!this.raceId||!["countdown","race","goal","over"].includes(this.state)))){if(this.netSendT-=t,this.netSendT<=0&&(this.netSendT=1/15,e.sendSt({r:this.raceId,d:this.pos,x:this.px,v:this.speed,steer:this.steer,br:this.input.brake&&this.speed>1,tb:this.turboT>0,hp:this.hp,fin:this.finishTime,gun:this.firingT>0&&this.lastGunTarget!==null?((s=(n=this.world.rivals[this.lastGunTarget])==null?void 0:n.remote)==null?void 0:s.id)??"":""})),this.hitSendT-=t,this.hitSendT<=0&&this.pendingHits.size){this.hitSendT=.2;for(const[a,o]of this.pendingHits)e.sendHit({r:this.raceId,to:a,n:o});this.pendingHits.clear()}this.table.length&&(this.state==="goal"||this.state==="over")&&(this.tableT-=t,this.tableT<=0&&(this.tableT=1,this.table=ea(this.world.rivals,this.world.track,"YOU",this.spec.name,this.finishTime>=0?this.finishTime:1/0,this.raceTime),this.place=((r=this.table.find(a=>a.player))==null?void 0:r.pos)??this.place))}}toSelect(){this.go("select");for(const t of this.worlds)t==null||t.setRivals([]);this.applyCar(),this.resetPlayer(!0),this.audio.music("title")}toCarSelect(){this.go("carselect"),this.audio.music(this.trackId()),this.applyCar(),this.resetPlayer(!1),this.px=0}autopilot(){const t=this.world;let e=Math.round((this.px+Z)/(Z*2/4)-.5);e=Math.max(0,Math.min(3,e));let n=!1;for(const o of t.traffic){const c=o.d-this.pos;c>0&&c<70&&Math.abs(o.x-t.laneX(e))<2.5&&(n=!0)}if(n){for(const o of[e-1,e+1,e-2,e+2])if(!(o<0||o>3)&&!t.traffic.some(c=>c.d-this.pos>-8&&c.d-this.pos<90&&Math.abs(c.x-t.laneX(o))<2.5)){e=o;break}}const s=t.track.seg(Math.floor(this.pos/jt)).curve,r=(t.laneX(e)-this.px)*2.2+s*this.speed*this.speed*t0,a=Math.max(-1,Math.min(1,r/Qh));return{accel:this.speed<68,brake:!1,steer:a,drift:!1}}drive(t,e,n){const s=this.world,r=s.track,a=s.route,o=r.seg(Math.floor(this.pos/jt));let c=0,l=!1,h=0;if(this.crashT>0){this.crashT-=t,this.speed=Math.max(0,this.speed-60*t),this.crashYaw+=t*9*Math.max(0,this.crashT);const x=Math.max(-Z+3,Math.min(Z-3,this.px));this.px+=(x-this.px)*Math.min(1,t*1.5),this.bounce=Math.abs(Math.sin(this.crashT*9))*.4*this.crashT,c=this.crashT>.6?1:0,this.crashT<=0&&(this.crashYaw=0)}else{const x=this.speed,M=this.spec.stats,v=this.turboT>0,w=this.vmax*(v?Ih:1)*this.limp();e.accel?this.speed+=30*M.accel*(v?1.9:1)*(1-Math.pow(Math.min(1,x/w),1.8))*t+2*t:e.brake?this.speed-=58*t:this.speed-=(3+x*.035)*t;const E=e.steer,T=E===0?9:7;this.steer+=Math.sign(E-this.steer)*Math.min(Math.abs(E-this.steer),T*t);let C=this.steer*Qh*M.grip*Math.min(1,x/22),b=o.curve*x*x*t0/M.grip;this.drifting=e.drift&&x>30&&Math.abs(e.steer)>0,this.drifting?(C*=1.45,b*=.45,this.speed-=5*t,c=1):Math.abs(this.steer)>.8&&x>62&&Math.abs(o.curve)>.0014&&(c=.6);const S=this.drifting?this.steer*-.5:this.steer*-.12;this.driftYaw+=(S-this.driftYaw)*Math.min(1,t*6),this.px+=(C-b)*t;const D=a.walls||o.tunnel,W=D?Z+(o.tunnel,1):a.offroadLimit;Math.abs(this.px)>W&&(this.px=Math.sign(this.px)*W,D&&x>15&&(h=Math.sign(this.px),this.speed-=x*.9*t,this.shakeKick=.25,Math.random()<t*12&&this.audio.scrape(),!n&&this.state==="race"&&(this.hp-=3*t,this.scrapeDmg+=t,this.scrapeDmg>.6&&(this.scrapeDmg=0,this.world.car.hit(.12,h>0?"right":"left")),this.hp<=0&&this.wreck()))),l=Math.abs(this.px)>Z+1,l?(this.speed>32&&(this.speed-=40*t),this.bounce=Math.random()*.08*Math.min(1,x/30),this.shakeKick=Math.max(this.shakeKick,.12)):this.bounce=0,!n&&l&&x>12&&s.hitProp(this.pos,this.px)&&(this.damage(12+x*.12,.6+Math.min(.4,x/200),this.px>0?"right":"left"),this.crash(!0));const H=s.hitTraffic(this.pos,this.px);H&&(n?this.speed=Math.min(this.speed,H.v*.9):x-H.v>36?(this.damage(10+(x-H.v)*.14,.5+Math.min(.5,(x-H.v)/150),"front"),this.crash(!0)):(this.dmgCool<=0&&this.damage(5,.25,H.x>this.px?"right":"left"),this.speed=H.v*.75,this.px+=Math.sign(this.px-H.x||1)*1.2,this.shakeKick=.3,this.audio.crash(!1)));for(const V of s.rivals){if(Math.abs(V.d-this.pos)>4.3||Math.abs(V.x-this.px)>1.95)continue;const nt=Math.sign(this.px-V.x||1);this.px+=nt*.9,V.x-=nt*.9,V.d>this.pos?x-V.v>45&&!n?(this.damage(9+(x-V.v)*.1,.5,"front"),this.crash(!0)):(this.speed=Math.min(this.speed,V.v*.92),!n&&this.dmgCool<=0&&this.damage(2.5,.15,"front")):(V.bumpT=.6,!n&&this.dmgCool<=0&&this.damage(2,.15,Math.abs(V.d-this.pos)<2?nt>0?"left":"right":"rear")),this.shakeKick=Math.max(this.shakeKick,.25),n||this.audio.crash(!1)}}const u=this.vmax*(this.turboT>0?Ih:1);this.speed>u&&(this.speed=Math.max(u,this.speed-14*t)),this.speed=Math.max(0,this.speed),this.turboT>0&&(this.turboT=Math.max(0,this.turboT-t),this.flameT=Math.max(this.flameT,.08),this.shakeKick=Math.max(this.shakeKick,.1)),this.pos+=this.speed*t,this.wheelSpin-=this.speed*t/.37,(this.state==="attract"||this.state==="select")&&this.pos>r.goalDist-200&&this.resetPlayer(!0),s.updateTraffic(t,this.pos,()=>{this.state==="race"&&(this.score+=2e3)});let d=1;const f=this.vmax/Jh;for(;d<er.length-1&&this.speed>er[d]*f;)d++;const g=.25+.75*Math.min(1,(this.speed-er[d-1]*f)/((er[d]-er[d-1])*f)),_=this.state!=="attract"&&this.state!=="select";this.audio.engine(_&&!this.wrecked,g,e.accel?1:0),this.audio.skid(_?c*Math.min(1,this.speed/20):0),d>this.gear&&e.accel&&this.speed>20&&(this.flameT=.12,_&&this.audio.pop()),this.wasAccel&&!e.accel&&this.speed>55&&this.crashT<=0&&(this.flameT=.2,_&&this.audio.pop()),this.gear=d,this.wasAccel=e.accel,this.flameT=Math.max(0,this.flameT-t);const m=s.particles,p=Math.random()<t*45?1:0;if(p&&c>0&&this.speed>12){const x=a.smoke;for(const M of[-.9,.9])m.spawn(this.pos-1.4,this.px+M,.35,this.speed*.6,M,.8,.8,.45,2.6,x)}if(p&&l&&this.speed>15){const M=o.zone.startsWith("beach")&&this.px>0?15916192:o.zone==="hills"?13152378:14207128;for(const v of[-.9,.9])m.spawn(this.pos-1.5,this.px+v,.3,this.speed*.5,v*2,1.8,.6,.4,2.2,M)}if(this.dmgCool=Math.max(0,this.dmgCool-t),this.engineSmoke(t),h&&Math.random()<t*60)for(let x=0;x<2;x++)m.spawn(this.pos+Math.random()*2-1,this.px+h*.9,.5,this.speed*.8,-h*(2+Math.random()*3),3+Math.random()*3,.35,.13,-1,Math.random()<.5?16769088:16747040);m.update(t),this.updateWorld(t,{steer:this.steer,yaw:this.driftYaw+this.crashYaw,spin:this.wheelSpin,bounce:this.bounce,brake:e.brake&&this.speed>1||this.crashT>0,flame:this.flameT})}limp(){return this.hp>=35?1:.86+.14*(this.hp/35)}damage(t,e,n){this.state!=="race"||this.wrecked||(this.hp=Math.max(0,this.hp-t),this.dmgCool=.5,this.world.car.hit(e,n),this.afterDamage(t))}afterDamage(t){const e=this.hp+t;e>=55&&this.hp<55&&this.world.car.breakLamp(Math.random()<.5?-1:1),this.hp<=0?this.wreck():this.hp<25&&e>=25&&this.flash("WARNING!","HEAVY DAMAGE",2)}takeGunHit(t,e){if(this.state!=="race"||this.wrecked)return;const n=this.gunFrom.get(t)??0;let s=Math.min(e*Ph,Gg-n);if(t.startsWith("ai:")){let a=0;for(const[o,c]of this.gunFrom)o.startsWith("ai:")&&(a+=c);s=Math.min(s,Vg-a)}if(s<=0)return;this.gunFrom.set(t,n+s),this.hp=Math.max(0,this.hp-s);const r=["left","right","rear"];this.world.car.hit(.1,r[Math.floor(Math.random()*3)]),this.hitFlash=.25,this.shakeKick=Math.max(this.shakeKick,.15),this.audio.ping(),this.afterDamage(s)}hitRival(t){const e=this.world.rivals[t];if(e.remote){this.pendingHits.set(e.remote.id,(this.pendingHits.get(e.remote.id)??0)+1);return}if(e.wrecked)return;const n=Ph*Hg,s=e.hp;e.hp=Math.max(0,e.hp-n),e.gunTaken+=n,e.bumpT=Math.max(e.bumpT,.25+(1-e.hp/100)*.35),this.world.rivalHit(t,.16),s>=55&&e.hp<55&&this.world.rivalBreakLamp(t),e.hp<=0&&(e.wrecked=!0,e.gunT=0,e.burst=0,this.score+=5e4,this.flash(`${e.name} WRECKED!`,"+50000",2),this.audio.crash(!0),this.audio.pop())}guns(t){const e=this.world,n=e.rivals,s=this.input;this.hitFlash=Math.max(0,this.hitFlash-t),this.firingT=Math.max(0,this.firingT-t),this.noTargetT=Math.max(0,this.noTargetT-t),this.fireCool=Math.max(0,this.fireCool-t),e.playerGun.flash=!1;let r=null,a=1/0;this.weapons&&!this.wrecked&&n.forEach((c,l)=>{const h=c.d-this.pos,u=c.x-this.px;if(c.wrecked||!Lh(h,u))return;const d=Math.hypot(h,u);d<a&&(a=d,r=l)}),this.gunTarget=r,this.gunP=r!==null?To(a):0;const o=this.weapons&&this.state==="race"&&!this.wrecked&&this.crashT<=0&&s.held("KeyF");if(o&&(r===null||this.ammo<=0)&&(this.noTargetT=.3),o&&r!==null&&this.ammo>0&&(this.firingT=.35,this.lastGunTarget=r,this.fireCool<=0)){this.fireCool=1/wo,this.ammo--;const c=n[r],l=Math.random()<this.gunP;e.shoot(this.pos,this.px,c.d,c.x,l),e.playerGun.flash=!0,this.audio.gun(),l&&this.hitRival(r)}e.playerGun.target=this.firingT>0?this.lastGunTarget:null,n.forEach(c=>{if(c.gunT=Math.max(0,c.gunT-t),c.remote){if(c.gunT<=0||(c.fireCool-=t,c.fireCool>0))return;c.fireCool=1/wo;const d=c.gunTo===-1?{d:this.pos,x:this.px}:n[c.gunTo];if(!d)return;e.shoot(c.d,c.x,d.d,d.x,Math.random()<To(Math.hypot(d.d-c.d,d.x-c.x))),this.audio.gun(.4);return}if(!this.weapons||this.state!=="race"||this.wrecked||c.wrecked||c.ammo<=0||c.finished>=0)return;const l=this.pos-c.d,h=this.px-c.x;if(!Lh(l,h)){c.burst=0;return}if(c.burst<=0){Math.random()<t*(.06+c.aggro*.14)&&(c.burst=3+Math.floor(Math.random()*4));return}if(c.gunT=.35,c.gunTo=-1,c.fireCool-=t,c.fireCool>0)return;c.fireCool=1/wo,c.burst--,c.ammo--;const u=Math.random()<To(Math.hypot(l,h));e.shoot(c.d,c.x,this.pos,this.px,u),this.audio.gun(.5),u&&this.takeGunHit(`ai:${c.name}`,1)}),e.tickTracers(t)}wreck(){this.wrecked||(this.hp=0,this.wrecked=!0,this.turboT=0,this.audio.crash(!0),this.audio.pop(),this.mode!=="arcade"&&(this.table=ea(this.world.rivals,this.world.track,"YOU",this.spec.name,1/0,this.raceTime)),this.go("over"),this.audio.sad(),this.audio.music(null),this.saveScore())}engineSmoke(t){if(["race","over","goal"].includes(this.state)){const e={t:this.smokeT};this.smokeFrom(e,t,this.spec,this.pos,this.px,this.speed,this.hp,this.wrecked,this.t),this.smokeT=e.t}for(const e of this.world.rivals){e.remote&&e.wrecked&&(e.wreckT+=t);const n={t:e.smokeT};this.smokeFrom(n,t,e.spec,e.d,e.x,e.v,e.hp,e.wrecked,e.wreckT),e.smokeT=n.t}}smokeFrom(t,e,n,s,r,a,o,c,l){if(o>=50||(t.t+=e*(c?30:o<25?14:5),t.t<1))return;t.t-=1;const h=n.stations,u=["r32","supra","rx7"].includes(n.id),d=u?h[0].z+.9:h[h.length-1].z-.9,f=u?h[1].top:h[h.length-2].top,g=s-d,_=r+(Math.random()-.5)*.6,m=c?Math.random()<.5?2236962:3815994:o<25?6974058:12105912,p=this.world.particles;p.spawn(g,_,f+.1,a*.85,(Math.random()-.5)*.8,1.2+Math.random(),1.6+Math.random(),.45,3,m),c&&l<6&&Math.random()<.5&&p.spawn(g,_,f+.05,a*.9,(Math.random()-.5)*.4,1.5,.35,.3,.5,Math.random()<.5?16747040:16764992)}crash(t){if(!(this.crashT>0)){this.crashT=t?1.6:.8,this.speed*=.35,this.shakeKick=.6,this.audio.crash(t);for(let e=0;e<14;e++)this.world.particles.spawn(this.pos+Math.random()*3-1.5,this.px+Math.random()*3-1.5,.4+Math.random(),this.speed*.5,Math.random()*4-2,1+Math.random()*2,1.1,.7,2.5,e%3?14211288:9079434)}}updateWorld(t,e){const n=this.speed/Jh,s=this.camera,r=54+14*Math.min(1.3,n)*Math.min(1.3,n)+(this.turboT>0?6:0);Math.abs(s.fov-r)>.01&&(s.fov=Math.abs(r-s.fov)>8?r:s.fov+(r-s.fov)*Math.min(1,t*5),s.updateProjectionMatrix()),this.shakeKick=Math.max(0,this.shakeKick-t*1.5);const a=Math.max(0,n-.7)*.12+this.shakeKick*.5;this.world.update(this.pos,this.px,s,a,e)}draw(){var s;const t=this.hud;if(t.clear(),ie.modern&&this.state!=="carselect"){const r=this.world.sunOnHud(this.camera,xt,Be);if(r){const a=Math.max(Math.abs(r.x/xt-.5),Math.abs(r.y/Be-.5))*2;t.flare(r.x,r.y,Math.max(0,Math.min(1,1.25-a)))}}const e=Math.floor(this.clock*2.5)%2===0,n=this.world.route;switch(this.state){case"attract":{t.logo("TURBO",xt/2,70,64,Ot,Oe,11540504),t.logo("HORIZON",xt/2,150,56,8452351,2789631,1714832),t.text("'86",xt/2+230,210,24,Yn,"left"),t.text("ARCADE  ROAD  RACING",xt/2,236,16,Ut,"center"),e&&t.text(this.touch?"TAP TO START":"PRESS ENTER",xt/2,320,24,Ot,"center"),t.text(`HI-SCORE ${String(this.hi).padStart(8,"0")}`,xt/2,20,16,Pe,"center"),t.text("FREE PLAY",xt-20,Be-30,16,Ut,"right"),t.text("©1986 HORIZON SOFT",20,Be-30,16,Ut,"left");break}case"select":{t.text("SELECT  YOUR  ROUTE",xt/2,12,24,Ot,"center"),t.text(`${Math.max(0,Math.ceil(20-this.t))}`,xt-30,12,24,Oe,"right");const r=tr-12,a=ha-8,o=68;this.routes.forEach((_,m)=>{const p=m===this.routeIdx,x=Xe+m%3*tr,M=la+Math.floor(m/3)*ha-(p?3:0);p&&t.rect(x+5,M+6,r,a,0),t.postcard(_.id,x,M,r,o,this.clock),t.rect(x,M+o,r,a-o,p?2759248:1052712);const v=`${_.lines[0]} ${_.lines[1]}`,w=v.length<=15?16:12;t.text(v,x+r/2,M+o+(a-o-w)/2+1,w,p?Ot:_.card[1],"center"),p||t.shade(x,M,r,a,.35);const E=p?e?Ot:Ut:3816026,T=p?4:2;t.rect(x-T,M-T,r+T*2,T,E),t.rect(x-T,M+a,r+T*2,T,E),t.rect(x-T,M,T,a,E),t.rect(x+r,M,T,a,E)});const c=this.world.route,l=262;t.shade(Xe-4,l,3*tr-4,58,.72),t.sky(c.night,Xe+12,l+13),t.text(`${c.lines[0]} ${c.lines[1]}`,Xe+30,l+6,16,Ut);const h=((s=lr.find(_=>_.id===c.music))==null?void 0:s.name)??"";t.note(xt-Xe-8-h.length*8-14,l+12,Yn),t.text(h,xt-Xe-8,l+9,8,Yn,"right");const u=Xe+70,d=xt-Xe-70,f=l+34;if(t.rect(u,f-1,d-u,2,5921418),c.stageNames.forEach((_,m)=>{const p=u+(d-u)*m/(c.stageNames.length-1);t.rect(p-4,f-4,8,8,m===0?Un:m===c.stageNames.length-1?Ot:Pe),t.text(_,p,f+9,8,m===0?Un:Ut,"center")}),[["arcade","ARCADE","BEAT THE CLOCK","clock"],["rivals","VS RIVALS","8-CAR RACE","flag"],["online","ONLINE","RACE REAL PLAYERS","globe"]].forEach(([_,m,p,x],M)=>{const v=Kh+M*Zh,w=_===this.mode;t.box(v,ps,V2,Io,w?2759248:1315880,w?e?Yn:Ut:3816026,w?4:2),t.icon(x,v+26,ps+Io/2,w?Ot:ke),t.text(m,v+48,ps+9,16,w?Ot:ke),t.text(p,v+48,ps+29,8,w?Ut:ke)}),t.box(xt/2-120,Rn,240,46,1739322,e?Ot:Ut),t.text(this.touch?"TAP TO GO":"ENTER  GO",xt/2,Rn+15,16,Ut,"center"),this.touch)t.text("TAP A ROUTE",Xe,Rn+12,8,ke),t.text("TAP IT AGAIN TO GO",Xe,Rn+26,8,ke);else{let _=Xe;_+=t.keycap(_,Rn+13,"←",18)+3,_+=t.keycap(_,Rn+13,"→",18)+3,t.text("ROUTE",_+5,Rn+18,8,Ut),t.text("MODE",xt-Xe,Rn+18,8,Ut,"right"),_=xt-Xe-38-5*8-6,_+=t.keycap(_,Rn+13,"↑",18)+3,t.keycap(_,Rn+13,"↓",18)}break}case"carselect":{const r=this.spec;t.text("SELECT  YOUR  CAR",xt/2,20,24,Ot,"center"),t.text(`${Math.max(0,Math.ceil(25-this.t))}`,xt-30,20,24,Oe,"right"),t.text(r.make,xt/2,64,16,Pe,"center"),t.text(r.name,xt/2,88,32,Ut,"center"),t.text(`${r.year}  ${r.group}`,xt/2,130,16,Yn,"center"),t.text(this.settingsLine(this.mode==="rivals"),xt/2,160,16,Ot,"center"),t.text("<",40,210,48,e?Ot:Ut,"center"),t.text(">",xt-40,210,48,e?Ot:Ut,"center"),[["SPEED",(r.stats.vmax-260)/90],["ACCEL",(r.stats.accel-.85)/.3],["GRIP",(r.stats.grip-.82)/.38]].forEach(([o,c],l)=>{const h=330+l*22;t.text(o,40,h,16,Ot);for(let u=0;u<12;u++)t.rect(150+u*14,h,11,16,u<Math.round(Math.max(.1,Math.min(1,c))*12)?l===0?ge:l===1?Oe:4251712:2105408)}),t.text(`${r.stats.vmax} KM/H`,340,330,16,Ut),t.text(`CAR ${this.carIdx+1}/${qe.length}`,xt-30,330,16,Ut,"right"),t.text(this.touch?"TAP CAR: COLOUR":"^ v  COLOUR",xt-30,356,16,Pe,"right"),t.text(`${this.touch?"TAP":"N"}  MUSIC: ${this.musicLabel()}`,xt-30,382,16,Yn,"right"),t.box(xt/2-150,410,300,50,1727160,e?Ot:Ut),t.text(this.touch?"TAP TO RACE":"ENTER  RACE",xt/2,427,16,Ut,"center");break}case"name":{t.text("ONLINE  RACE",xt/2,20,24,Ot,"center");break}case"lobby":{this.lobbyHud(e);break}default:{if(this.raceHud(e),this.mode==="online"&&this.nameTags(),this.state==="countdown"){const r=3-Math.floor(this.t);r>0&&t.text(String(r),xt/2,180,64,r===1?ge:Ot,"center"),t.text(n.stageNames[0],xt/2,280,16,Ut,"center"),this.countdownHelp()}this.table.length&&(this.state==="goal"?this.t>2.5:this.t>2.5)?this.resultsTable(e):this.state==="goal"&&this.mode!=="arcade"?(t.text(this.place===1?"YOU WIN!":`${ta(this.place)} PLACE`,xt/2,150,64,this.place===1?Ot:Pe,"center"),t.text(Uh(this.finishTime),xt/2,240,24,Ut,"center")):this.state==="goal"&&(t.text("GOAL!",xt/2,140,64,Ot,"center"),t.text("CONGRATULATIONS",xt/2,230,24,Pe,"center"),t.text(`TIME BONUS  ${Math.ceil(this.bonusLeft*1e4)}`,xt/2,280,16,Ut,"center"),this.t>3&&this.bonusLeft<=0&&e&&t.text(this.touch?"TAP TO CONTINUE":"PRESS ENTER",xt/2,330,24,Ot,"center")),this.state==="over"&&!(this.table.length&&this.t>2.5)&&(this.t<2.5?(t.text(this.wrecked?"WRECKED":"TIME UP",xt/2,180,48,ge,"center"),this.wrecked&&t.text("ENGINE BLOWN",xt/2,240,24,Oe,"center")):(t.text("GAME OVER",xt/2,170,48,ge,"center"),t.text(`SCORE ${this.score}`,xt/2,250,24,Ut,"center"),e&&t.text(this.touch?"TAP TO CONTINUE":"PRESS ENTER",xt/2,310,24,Ot,"center"))),this.clock<this.musicToast&&this.state!=="goal"&&this.state!=="over"&&(t.box(xt/2-200,146,400,34,1052720,Yn,3),t.text(`MUSIC  ${this.musicLabel()}`,xt/2,156,16,Ut,"center")),this.clock<this.msgUntil&&(this.msg==="GO!"||e)&&(t.text(this.msg,xt/2,150,this.msg==="GO!"?64:32,this.msg==="GO!"?Ot:Pe,"center"),this.msg2&&t.text(this.msg2,xt/2,200,24,Ot,"center")),this.paused&&(t.box(xt/2-220,150,440,170,1052720,Ut),t.text("PAUSE",xt/2,180,32,Ot,"center"),t.text(this.touch?"RESUME":"ESC  RESUME",xt/2,230,16,Ut,"center"),t.text(this.touch?"RESTART":"R  RESTART",xt/2,260,16,Ut,"center"),t.text(this.touch?"QUIT":"Q  QUIT",xt/2,290,16,Ut,"center"))}}}lobbyHud(t){const e=this.hud,n=this.net,s=this.spec;e.text("ONLINE  LOBBY",xt/2,14,24,Ot,"center"),e.text(this.touch?"< EXIT":"ESC EXIT",20,18,16,9079464);const r=(n==null?void 0:n.list())??[],a=!n||n.status==="connecting"?"CONNECTING...":n.status==="error"?"COULDN'T CONNECT":r.length?`${r.length+1} PLAYERS HERE`:"WAITING FOR PLAYERS...";e.text(a,xt/2,46,16,(n==null?void 0:n.status)==="error"?ge:Pe,"center");const o=jh,c=!this.touch;e.shade(o.x0,68,o.x1-o.x0,316),e.chip(o.x0+6,o.carY+4,30,o.carH-8,"←",Ot),e.chip(o.x1-36,o.carY+4,30,o.carH-8,"→",Ot),e.text(s.make,o.mid,o.carY+2,16,Pe,"center");const l=s.name.length<=11;e.text(s.name,o.mid,o.carY+(l?20:24),l?24:16,Ut,"center");const h=s.paints.length,u=o.mid-(h*22-6)/2;s.paints.forEach((M,v)=>{const w=v===this.paintIdx%h;e.rect(u+v*22-2,o.paintY-2,20,16,w?Ot:3816026),e.rect(u+v*22,o.paintY,16,12,M)}),c&&(e.keycap(o.x0+12,o.paintY-2,"←"),e.keycap(o.x0+30,o.paintY-2,"→"),e.text("CAR",o.x0+52,o.paintY+2,8,ke),e.text("PAINT",o.x1-48,o.paintY+2,8,ke,"right"),e.keycap(o.x1-44,o.paintY-2,"↑"),e.keycap(o.x1-26,o.paintY-2,"↓"));const d=(M,v,w,E,T,C)=>{e.text(v,o.x0+12,M+3,16,E?Ot:ke),C?e.chip(o.minusX,M,o.plusX+28-o.minusX,o.chipH,w,E?Oe:ke,16,E?5909008:1710650):(e.chip(o.minusX,M,28,o.chipH,"←",E?Pe:ke),e.text(w,(o.minusX+o.plusX+28)/2,M+3,16,E?Ut:ke,"center"),e.chip(o.plusX,M,28,o.chipH,"→",E?Pe:ke)),c&&e.keycap(o.x1-34,M+1,T,18)};d(o.turbY,"TURBOS",String(this.turboCount),!0,"T",!1),d(o.weapY,"WEAPONS",this.weaponsSetting?"ON":"OFF",this.weaponsSetting,"V",!0),d(o.ammoY,"AMMO",String(this.ammoCount),this.weaponsSetting,"B",!1),e.text("YOUR SETTINGS APPLY IF YOU START THE RACE",o.mid,216,8,ke,"center"),[["SPEED",(s.stats.vmax-260)/90,ge],["ACCEL",(s.stats.accel-.85)/.3,Oe],["GRIP",(s.stats.grip-.82)/.38,Un]].forEach(([M,v,w],E)=>{const T=232+E*12;e.text(M,40,T+1,8,Ot);const C=Math.round(Math.max(.1,Math.min(1,v))*12);for(let b=0;b<12;b++)e.rect(96+b*11,T,9,8,b<C?w:2105408)}),e.text(`${s.stats.vmax} KM/H`,236,233,8,Ut),e.rect(o.x0+8,272,o.x1-o.x0-16,1,3816026),e.text(c?"DRIVING KEYS":"DRIVING BUTTONS",o.mid,278,8,Ot,"center"),c?this.keyGuide(40,294):this.buttonGuide(o.x0+10,292);const g=xt-320,_=70;e.box(g,_,300,40+Math.min(8,r.length+1)*34+(r.length>7?16:0),1052720,3816026,3),e.text("PLAYERS",g+14,_+12,16,Ot);const m=[{name:this.playerName||"PLAYER",car:s.name,st:"YOU",me:!0},...r.map(M=>({name:M.name,car:qe[M.car%qe.length].name,st:M.status==="race"?"RACING":"READY",me:!1}))];m.slice(0,8).forEach((M,v)=>{const w=_+40+v*34;e.text(M.name,g+14,w,16,M.me?Ot:Ut),e.text(M.st,g+286,w+4,8,M.st==="RACING"?Oe:M.me?Ot:4251712,"right"),e.text(M.car,g+14,w+19,8,9079464)}),m.length>8&&e.text(`+${m.length-8} MORE`,g+14,_+40+8*34,8,Ut);const p=this.world.route;if(e.box(20,410,250,50,1315880,Ut,3),e.text(`${this.touch?"TAP":"R"}  ROUTE`,145,418,8,9079464,"center"),e.text(`${p.lines[0]} ${p.lines[1]}`.slice(0,15),145,434,16,Ot,"center"),(n==null?void 0:n.status)==="error"){e.text("CHECK YOUR CONNECTION, OR PLAY ONLINE AT",xt/2,320,8,Ut,"center"),e.text("FREDDYWONG.GITHUB.IO/TURBO-HORIZON-86",xt/2,340,16,Pe,"center"),e.box(xt/2-150,410,300,50,1727160,t?Ot:Ut),e.text(this.touch?"TAP TO RETRY":"ENTER  RETRY",xt/2,427,16,Ut,"center");return}if(this.pending){const M=Math.max(1,Math.ceil(this.pending.at-zi()));e.text("STARTING IN",xt/2,170,24,Pe,"center"),e.text(String(M),xt/2,206,64,Ot,"center");const v=this.routes[this.pending.go.route]??this.world.route;e.text(`${v.lines[0]} ${v.lines[1]}`,xt/2,284,16,Ut,"center");const w=this.pending.go;e.text(`TURBOS ${w.turbos}   WEAPONS ${w.weapons?`ON  AMMO ${w.ammo}`:"OFF"}`,xt/2,308,16,w.weapons?Oe:Ot,"center");return}r.some(M=>M.status==="race")?e.text("RACE IN PROGRESS - JOIN THE NEXT ONE",xt/2,386,8,Oe,"center"):r.length||e.text("SHARE THIS PAGE LINK TO INVITE PLAYERS",xt/2,386,8,Ut,"center");const x=(n==null?void 0:n.status)==="online";e.box(xt/2-150,410,300,50,x?1739322:2105392,x&&t?Ot:Ut),e.text(this.touch?"TAP TO START":"ENTER  START",xt/2,427,16,x?Ut:9079464,"center")}keyGuide(t,e){const n=this.hud,s=this.weaponsSetting;[[[["↑"],"GAS",Un],[["SPACE"],"DRIFT",Pe]],[[["↓"],"BRAKE",ge],[["T"],"TURBO",Oe]],[[["←","→"],"STEER",Ut],[["F"],s?"FIRE":"FIRE (OFF)",s?ge:ke]],[[["ESC"],"PAUSE",ke],[["N"],"MUSIC",Yn]]].forEach((a,o)=>a.forEach(([c,l,h],u)=>{let d=t+u*168;for(const f of c)d+=n.keycap(d,e+o*22,f,18)+3;n.text(l,d+5,e+o*22+5,8,h)}))}buttonGuide(t,e){const n=this.hud,s=330,r=88,a=this.weaponsSetting;n.box(t,e,s,r,657946,3816026,1),n.text("STEER",t+45,e+r-50,8,Ut,"center"),n.chip(t+8,e+r-38,34,30,"←",Ut),n.chip(t+48,e+r-38,34,30,"→",Ut);const o=t+s-66,c=t+s-128;a&&n.chip(c,e+6,56,18,"FIRE",ge),n.chip(c,e+28,56,18,"DRIFT",Pe),n.chip(c,e+50,56,30,"BRAKE",ge),n.chip(o,e+24,58,20,"TURBO",Oe),n.chip(o,e+48,58,32,"GAS",Un),n.text("MUSIC AUTO II",t+s-8,e+8,8,ke,"right"),n.text("AUTO GAS",t+140,e+30,8,Un,"center"),n.text("IS ON",t+140,e+42,8,Un,"center"),n.text("TAP AUTO",t+140,e+58,8,ke,"center"),n.text("TO TURN OFF",t+140,e+70,8,ke,"center")}countdownHelp(){const t=this.hud,e=this.weapons,n=318;if(this.touch){const c=[["STEER LEFT THUMB",Ut],["GAS",Un],["BRAKE",ge],["DRIFT",Pe],["TURBO",Oe]];e&&c.push(["FIRE",ge]);const l=c.map(([d])=>d.length*8+16),h=l.reduce((d,f)=>d+f,0)+(c.length-1)*8;let u=xt/2-h/2;t.shade(u-8,n-6,h+16,34,.5),c.forEach(([d,f],g)=>{t.chip(u,n,l[g],22,d,f),u+=l[g]+8});return}const s=[[["↑"],"GAS",Un],[["↓"],"BRAKE",ge],[["←","→"],"STEER",Ut],[["SPACE"],"DRIFT",Pe],[["T"],"TURBO",Oe]];e&&s.push([["F"],"FIRE",ge]);const r=c=>c[0].reduce((l,h)=>l+t.keyW(h,18)+3,0)+5+c[1].length*8,a=s.reduce((c,l)=>c+r(l),0)+(s.length-1)*18;let o=xt/2-a/2;t.shade(o-10,n-6,a+20,32,.5);for(const c of s){let l=o;for(const h of c[0])l+=t.keycap(l,n,h,18)+3;t.text(c[1],l+5,n+5,8,c[2]),o+=r(c)+18}}nameTags(){const t=this.hud;this.world.rivals.forEach((e,n)=>{const s=this.world.rivalScreenPos(n,this.camera,xt,Be);if(!s||s.dist>140)return;const r=Math.max(0,Math.min(1,(75-s.dist)/60)),a=Math.round(5+11*r);t.text(e.wrecked?`${e.name} WRECKED`:e.name,s.x,s.y-a,a,e.wrecked?ge:e.finished>=0?Ot:Ut,"center");const o=Math.round(14+50*r),c=Math.round(2+4*r),l=Math.min(1,1-e.hp/100),h=s.x-o/2,u=s.y+1+Math.round(3*r);t.rect(h-1,u-1,o+2,c+2,0),t.rect(h,u,o*l,c,Lo(l))})}resultsTable(t){const e=this.hud,n=xt/2-330,s=660,r=96;e.box(n,r,s,330,1052720,this.place===1&&this.finishTime>=0?Ot:Ut,4);const a=this.finishTime<0?`${this.wrecked?"WRECKED":"TIME UP"}  -  DID NOT FINISH`:this.place===1?"YOU WIN!":`YOU FINISHED ${ta(this.place)}`;e.text(a,xt/2,r+16,16,this.finishTime<0?ge:Ot,"center"),this.table.forEach((o,c)=>{const l=r+52+c*30;o.player&&e.rect(n+10,l-6,s-20,28,3811952);const h=o.player?Ot:Ut;e.text(ta(o.pos),n+24,l,16,o.pos===1?Oe:h),e.text(o.name,n+110,l,16,h),e.text(o.car,n+230,l,16,o.player?Ot:Pe);const u=Number.isFinite(o.time)?(o.estimated?"~":" ")+Uh(o.time):"DNF";e.text(u,n+s-24,l,16,h,"right")}),t&&this.t>3.5&&e.text(this.touch?"TAP TO CONTINUE":"PRESS ENTER",xt/2,r+340,16,Ot,"center")}raceHud(t){const e=this.hud,n=this.world.route;e.text("SCORE",20,16,16,Ot),e.text(String(this.score).padStart(8,"0"),20,38,16,Ut),e.text("TIME",xt/2,12,16,Ot,"center");const s=Math.ceil(this.timeLeft),r=this.timeLeft<10&&this.state==="race";(!r||t)&&e.text(String(s).padStart(2,"0"),xt/2,34,48,r?ge:Oe,"center"),e.text(`STAGE ${Math.min(this.stage+1,n.stageNames.length)}`,xt-20,16,16,Ot,"right");const a=Math.max(0,(this.pos-3*jt)/1e3);if(e.text(`${a.toFixed(1)}KM`,xt-20,38,16,Ut,"right"),this.mode!=="arcade"&&this.world.rivals.length&&this.state==="race"){const w=ta(this.place),E=this.touch?84:xt/2-52,T=this.touch?222:90;e.text("POS",E-12,T+8,16,Ot,"right"),e.text(w,E,T,32,this.place===1?Ot:Ut),e.text(`/${this.world.rivals.length+1}`,E+w.length*32+4,T+16,16,Ut)}{const T=this.touch?20:xt-20-170,C=this.touch?this.mode!=="arcade"?270:236:64,b=Math.min(1,1-this.hp/100),S=Lo(b),D=this.hp<25&&this.state==="race";e.text("DAMAGE",T,C,16,D&&t?ge:Ot);const W=this.hp>=100?0:Math.max(1,Math.ceil(b*10));for(let H=0;H<10;H++)e.rect(T+H*17,C+22,15,12,H<W&&(!D||t)?S:2105408)}const o=Math.round(this.speed*Po),c=this.touch,l=c?70:Be-92;e.text("SPEED",20,l,16,Ot),e.text(String(o).padStart(3," "),20,l+26,32,Ut),e.text("KM/H",130,l+42,16,Pe),c?e.tach(20,l+100,this.speed/this.vmax):e.tach(220,Be-24,this.speed/this.vmax);const h=c?20:220,u=c?l+112:Be-80;e.text("TURBO",h,u,16,this.turboT>0&&t?Ut:Oe);const d=this.raceTurbos,f=d>5?13:20,g=f+(d>5?4:6);for(let w=0;w<d;w++)e.box(h+92+w*g,u-2+(20-f)/2,f,f,w<this.turbos?Oe:2105392,w<this.turbos?Ot:4210776,d>5?2:3);if(this.turboT>0&&e.rect(h+92,u+22,this.turboT/Dc*(d*g-6),5,Ot),this.weapons){const w=c?20:xt-190,E=c?314:106;e.text("AMMO",w,E,16,this.ammo?Pe:ge),e.text(String(this.ammo).padStart(3,"0"),w+120,E,16,Ut);const T=Math.ceil(this.ammo/Math.max(1,this.raceAmmo)*30);for(let C=0;C<30;C++)e.rect(w+C*5.6,E+22,3,10,C<T?Ot:3158080);if(this.gunTarget!==null&&this.state==="race"){const C=this.world.rivalScreenPos(this.gunTarget,this.camera,xt,Be);if(C){const b=this.gunP>.6?ge:Ot,S=Math.max(10,Math.min(34,700/C.dist)),D=C.y+S*1.1;for(const[H,V]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.rect(C.x+H*S-(H>0?10:0),D+V*S-(V>0?3:0),10,3,b),e.rect(C.x+H*S-(H>0?3:0),D+V*S-(V>0?10:0),3,10,b);const W=this.world.rivals[this.gunTarget];if(!W.remote){const V=C.x-22,nt=D+S+6,O=Math.min(1,1-W.hp/100);e.rect(V-1,nt-1,46,7,0),e.rect(V,nt,44*O,5,Lo(O))}}}this.noTargetT>0&&e.text(this.ammo?"NO TARGET":"OUT OF AMMO",xt/2,124,16,this.ammo?Ut:ge,"center"),this.hitFlash>0&&(e.rect(0,0,xt,6,ge),e.rect(0,Be-6,xt,6,ge),e.rect(0,0,6,Be,ge),e.rect(xt-6,0,6,Be,ge))}const _=c?xt/2-120:xt-250,m=c?xt/2+120:xt-24,p=c?118:Be-34;e.text("COURSE",_,p-26,16,Ot),e.rect(_,p,m-_,8,2105408);const x=this.world.track.goalDist,M=this.world.track.stageStarts;for(const w of M)e.rect(_+w*jt/x*(m-_)-1,p-4,4,16,Ut);const v=Math.min(1,this.pos/x);e.rect(_,p,v*(m-_),8,Yn),e.rect(_+v*(m-_)-4,p-6,8,20,Ot),e.text(n.stageNames[Math.min(this.stage,n.stageNames.length-1)],m,p+14,8,Ut,"right")}}class j2{constructor(){this.down=new Set,this.pressed=new Set,this.taps=[],this.firstInput=[],this.autoGas=!1,window.addEventListener("keydown",t=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault(),this.down.has(t.code)||this.pressed.add(t.code),this.down.add(t.code),this.fireFirst()}),window.addEventListener("keyup",t=>this.down.delete(t.code)),window.addEventListener("blur",()=>this.down.clear())}onFirstInput(t){this.firstInput.push(t)}fireFirst(){const t=this.firstInput;this.firstInput=[],t.forEach(e=>e())}setVirtual(t,e){e?(this.down.has(t)||this.pressed.add(t),this.down.add(t)):this.down.delete(t)}tap(t,e){this.taps.push({x:t,y:e}),this.fireFirst()}held(...t){return t.some(e=>this.down.has(e))}hit(...t){return t.some(e=>this.pressed.has(e))}endFrame(){this.pressed.clear(),this.taps.length=0}get accel(){return this.held("KeyW","ArrowUp")||this.autoGas&&!this.brake}get brake(){return this.held("KeyS","ArrowDown")}get steer(){return(this.held("KeyD","ArrowRight")?1:0)-(this.held("KeyA","ArrowLeft")?1:0)}get drift(){return this.held("Space")}get confirm(){return this.hit("Enter","Space","NumpadEnter")}}class J2{constructor(t){this.done=null;const e=document.createElement("div");e.style.cssText='position:absolute;inset:0;display:none;align-items:center;justify-content:center;z-index:5;font-family:"Press Start 2P",monospace;';const n=document.createElement("form");n.style.cssText="display:flex;flex-direction:column;align-items:center;gap:2.4vmin;padding:4vmin 5vmin;background:rgba(16,16,48,0.92);border:0.7vmin solid #ffe040;box-shadow:0.8vmin 0.8vmin 0 #000;max-width:90%;";const s=document.createElement("div");s.textContent="ENTER YOUR NAME",s.style.cssText="color:#ffe040;font-size:3.6vmin;text-shadow:0.4vmin 0.4vmin 0 #000;";const r=document.createElement("input");r.maxLength=10,r.autocomplete="off",r.spellcheck=!1,r.setAttribute("autocapitalize","characters"),r.setAttribute("enterkeyhint","go"),r.style.cssText="font-family:inherit;font-size:4.4vmin;width:12ch;text-align:center;text-transform:uppercase;color:#fff;background:#0a0a20;border:0.5vmin solid #40f0ff;padding:1.4vmin;outline:none;";const a=document.createElement("button");a.type="submit",a.textContent="JOIN",a.style.cssText="font-family:inherit;font-size:3.6vmin;color:#fff;background:#1a5ab8;border:0.6vmin solid #fff;padding:1.6vmin 4vmin;box-shadow:0.6vmin 0.6vmin 0 #000;cursor:pointer;";const o=document.createElement("div");o.textContent="LETTERS, NUMBERS, SPACE OR -",o.style.cssText="color:#8a8aa8;font-size:1.8vmin;",n.append(s,r,a,o),e.append(n),t.append(e);for(const c of["keydown","keyup","mousedown","pointerdown","touchstart"])e.addEventListener(c,l=>l.stopPropagation());r.addEventListener("input",()=>{const c=r.value.toUpperCase().replace(/[^A-Z0-9 -]/g,"");c!==r.value&&(r.value=c)}),n.addEventListener("submit",c=>{var h;c.preventDefault();const l=Nc(r.value);if(!l){r.focus();return}this.hide(),(h=this.done)==null||h.call(this,l)}),this.root=e,this.input=r}get open(){return this.root.style.display!=="none"}show(t,e){this.done=e,this.input.value=t,this.root.style.display="flex",setTimeout(()=>{this.input.focus(),this.input.select()},50)}hide(){this.root.style.display="none",this.input.blur()}}class Ns{constructor(){this.group=new _n,this.layers=[],this.sun=null,this.tmp=new $}sunNdc(t){if(!this.sun)return null;this.sun.obj.updateMatrixWorld();const e=this.tmp.copy(this.sun.local);return this.sun.obj.localToWorld(e),e.project(t),e.z<1?e:null}addLayer(t,e){this.group.add(t),this.layers.push({obj:t,factor:e})}update(t,e){this.group.position.copy(t);for(const n of this.layers)n.obj.rotation.y=e*n.factor}}const dn=(i={})=>new tn({vertexColors:!0,fog:!1,side:fe,...i}),i0=(i,t)=>{const e=n=>Math.min(255,Math.round((i>>n&255)*t));return e(16)<<16|e(8)<<8|e(0)},Q2=i=>{const t=e=>Math.round(Math.round(e/255*31)*8.225806451612904);return t(i>>16&255)<<16|t(i>>8&255)<<8|t(i&255)},tx=(i,t,e)=>{const n=s=>Math.round((i>>s&255)+((t>>s&255)-(i>>s&255))*e);return n(16)<<16|n(8)<<8|n(0)};function Us(i,t,e=.45){const s=document.createElement("canvas");s.width=2,s.height=2048;const r=s.getContext("2d"),a=f=>"#"+f.toString(16).padStart(6,"0");r.fillStyle=a(t),r.fillRect(0,0,2,2048);const o=f=>{if(f<=i[0][0])return i[0][1];for(let g=1;g<i.length;g++)if(f<=i[g][0])return tx(i[g-1][1],i[g][1],(f-i[g-1][0])/(i[g][0]-i[g-1][0]));return i[i.length-1][1]},c=ie.modern,l=c?.09:e;for(let f=0;f<90;f+=l*(f<20||c?1:3)){const _=2048*(90-Math.min(90,f+l*(f<20||c?1:3)))/180,m=2048*(90-f)/180;r.fillStyle=a(c?o(f):Q2(o(f))),r.fillRect(0,Math.floor(_),2,Math.ceil(m-_)+1)}const h=new _r(s);h.magFilter=c?un:$e,h.minFilter=c?un:$e,h.generateMipmaps=!1,h.colorSpace=ze;const u=new il(2800,24,90),d=new ue(u,new tn({map:h,fog:!1,side:en,depthWrite:!1}));return d.renderOrder=-10,d}const qt=(i,t,e,n)=>[Math.sin(t)*i+Math.cos(t)*e,n,-Math.cos(t)*i+Math.sin(t)*e];function kn(i,t,e,n,s,r,a=40,o=[6,18]){const c=new ut,l=240,h=new Float32Array(l+1);for(let u=0;u<a;u++){const d=i.next()*l,f=i.range(.3,1)*n,g=i.range(o[0],o[1]);for(let _=0;_<=l;_++){let m=Math.abs(_-d);m=Math.min(m,l-m),h[_]=Math.max(h[_],f*Math.max(0,1-m/g))}}for(let u=0;u<l;u++){const d=u/l*Math.PI*2,f=(u+1)/l*Math.PI*2,g=h[u]*s(d),_=h[u+1]*s(f);if(!(g<1&&_<1)){if(ie.modern){const m=x=>i0(e,.86+.26*Math.min(1,x/n)),p=i0(e,.78);c.quadC(qt(t,d,0,-60),qt(t,f,0,-60),qt(t,f,0,_),qt(t,d,0,g),[p,p,m(_),m(g)])}else c.quad(qt(t,d,0,-60),qt(t,f,0,-60),qt(t,f,0,_),qt(t,d,0,g),e);if(r!==void 0){const m=n*.72;g>m&&_>m&&c.quad(qt(t-1,d,0,g-(g-m)*.6),qt(t-1,f,0,_-(_-m)*.6),qt(t-1,f,0,_),qt(t-1,d,0,g),r)}}}return new ue(c.build(),dn())}function ex(i,t,e,n,s,r=22){const a=new ut,o=360,c=new Float32Array(o+1);for(let l=0;l<r;l++){const h=i.next()*o,u=i.range(.35,1)*n,d=i.range(2,9),f=i.range(1.2,2.6);for(let g=0;g<=o;g++){let _=Math.abs(g-h);_=Math.min(_,o-_);const m=_<d?u:u*Math.max(0,1-(_-d)/f);c[g]=Math.max(c[g],m)}}for(let l=0;l<o;l++){const h=l/o*Math.PI*2,u=(l+1)/o*Math.PI*2,d=c[l]*s(h),f=c[l+1]*s(u);if(d<1&&f<1)continue;const g=e.length;let _=-60,m=-60;for(let p=0;p<g;p++){const x=(p+1)/g,M=p===g-1?d:d*x,v=p===g-1?f:f*x;a.quad(qt(t,h,0,_),qt(t,u,0,m),qt(t,u,0,v),qt(t,h,0,M),e[p]),_=M,m=v}}return new ue(a.build(),dn())}function Os(i,t,e=500){const n=new tl(i,i,e,32,1,!0);return n.translate(0,-e/2+.5,0),new ue(n,new tn({color:t,fog:!1,side:fe}))}function Ga(i,t,e){const n=Math.tan(e*Math.PI/180)*i,[s,r,a]=qt(i,t,0,n);return new $(s,r,a)}function Fs(i,t,e,n,s,r=20){const a=new ut,o=Math.tan(e*Math.PI/180)*i;if(ie.modern){const c=Math.max(r,40),l=[...s].sort((u,d)=>d[0]-u[0]),h=(u,d)=>qt(i,t,Math.cos(d)*n*u,o+Math.sin(d)*n*u);for(let u=0;u<l.length;u++){const[d,f]=l[u],[g,_]=u+1<l.length?l[u+1]:[0,l[u][1]];for(let m=0;m<c;m++){const p=m/c*Math.PI*2,x=(m+1)/c*Math.PI*2;a.quadC(h(d,p),h(d,x),h(g,x),h(g,p),[f,f,_,_])}}return new ue(a.build(),dn())}for(const[c,l]of s){const h=[];for(let u=0;u<r;u++){const d=u/r*Math.PI*2;h.push(qt(i,t,Math.cos(d)*n*c,o+Math.sin(d)*n*c))}a.poly(h,l),i-=2}return new ue(a.build(),dn())}function qi(i,t,e,n,s=-Math.PI,r=Math.PI,a=[4,13]){const o=new ut,[c,l,h]=n,u=(d,f,g,_,m,p,x,M=0,v=Math.PI*2)=>{const w=[],E=ie.modern?24:12;for(let T=0;T<=E;T++){const C=M+(v-M)*T/E;w.push(qt(d,f,g+Math.cos(C)*m,_+Math.sin(C)*p))}o.poly(w,x)};for(let d=0;d<e;d++){const f=i.range(s,r),g=i.range(a[0],a[1]),_=Math.tan(g*Math.PI/180)*t,m=i.range(140,340),p=i.int(4,8),x=t-d*6;u(x,f,0,_,m*.9,16,h,Math.PI,Math.PI*2);for(let M=0;M<p;M++){const v=i.range(-m,m)*.65,w=i.range(0,34)*(1-Math.abs(v)/m),E=i.range(45,100),T=E*i.range(.5,.7),C=x-1-M*.3;u(C,f,v,_+w,E,T,l,0,Math.PI),u(C-.1,f,v-E*.15,_+w+T*.2,E*.7,T*.65,c,.2,Math.PI)}}return new ue(o.build(),dn())}function Ha(i,t,e,n,s,r,a=.6,o=.25){const c=new ut,l=new ut,h=420;for(let d=0;d<h;d++){const f=d/h*Math.PI*2+i.range(-.004,.004),g=r(f);if(g<=0||!i.chance(a))continue;const _=i.range(14,40),m=i.range(.15,1)*s*g*(i.chance(.1)?1.4:1),p=t-i.range(0,60),x=i.pick(e);if(c.quad(qt(p,f,-_/2,-40),qt(p,f,_/2,-40),qt(p,f,_/2,m),qt(p,f,-_/2,m),x),i.chance(.25)){const M=_*.5;c.quad(qt(p,f,-M/2,m),qt(p,f,M/2,m),qt(p,f,M/2,m+m*.2),qt(p,f,-M/2,m+m*.2),x)}if(n.length){for(let M=6;M<m-4;M+=7)for(let v=-_/2+3;v<_/2-3;v+=5){if(!i.chance(o))continue;const w=i.pick(n);l.quad(qt(p-1,f,v,M),qt(p-1,f,v+2.6,M),qt(p-1,f,v+2.6,M+3.4),qt(p-1,f,v,M+3.4),w)}m>s*.6&&i.chance(.6)&&l.quad(qt(p-1,f,-1.5,m+1),qt(p-1,f,1.5,m+1),qt(p-1,f,1.5,m+4),qt(p-1,f,-1.5,m+4),16719904)}}const u=new _n;return u.add(new ue(c.build(),dn())),l.empty||u.add(new ue(l.build(),dn())),u}function uu(i,t){const e=[],n=[],s=new Lt;for(let a=0;a<t;a++){const o=i.next()*Math.PI*2,c=i.range(12,75)*(Math.PI/180),l=2600;e.push(Math.sin(o)*Math.cos(c)*l,Math.sin(c)*l,-Math.cos(o)*Math.cos(c)*l),s.setHex(i.pick([16777215,13162751,16771264,10137855])),n.push(s.r,s.g,s.b)}const r=new Ge;return r.setAttribute("position",new Me(e,3)),r.setAttribute("color",new Me(n,3)),new Eg(r,new X0({size:1,sizeAttenuation:!1,vertexColors:!0,fog:!1}))}function nx(i,t,e,n,s,r){const a=new ut,o=(c,l)=>qt(i,t,c,l);return a.poly([o(-n,-40),o(n,-40),o(n*.12,e),o(-n*.12,e)],s),a.poly([o(-n*.12,e),o(n*.12,e),o(n*.32,e*.62),o(n*.14,e*.7),o(0,e*.6),o(-n*.16,e*.68),o(-n*.32,e*.6)].map(c=>[c[0],c[1],c[2]]).reverse(),r),new ue(a.build(),dn())}function du(i,t,e,n,s){const r=new ut;for(let a=0;a<s;a++){const o=i.range(e,n),c=i.range(.8,1.4),l=t-a*4,h=(u,d)=>qt(l,o,u*c,d*c-1.5);i.chance(.6)?(r.poly([h(-34,0),h(30,0),h(36,7),h(-38,7)],3820138),r.poly([h(-26,7),h(14,7),h(14,11),h(-26,11)],i.pick([13130314,4885192,14196800])),r.poly([h(18,7),h(30,7),h(30,17),h(18,17)],15790320),r.poly([h(22,17),h(26,17),h(26,22),h(22,22)],2763306)):(r.poly([h(-16,0),h(16,0),h(20,4),h(-18,4)],16053492),r.poly([h(-8,4),h(10,4),h(8,8),h(-6,8)],14739696))}return new ue(r.build(),dn())}function ix(i,t){const e=new ut,n=new ut,s=(a,o)=>qt(i,t,a,o);e.poly([s(-90,-40),s(90,-40),s(60,6),s(20,14),s(-30,12),s(-70,2)],6978138);for(let a=0;a<6;a++){const o=12+a*9,c=o+9,l=7-a*.6,h=7-(a+1)*.6;e.poly([s(-l,o),s(l,o),s(h,c),s(-h,c)],a%2?14170682:16777215)}e.poly([s(-4.5,66),s(4.5,66),s(4.5,72),s(-4.5,72)],2763306),e.poly([s(-5,72),s(5,72),s(0,78)],14170682),n.poly([s(-3.5,67),s(3.5,67),s(3.5,71),s(-3.5,71)],16774320);const r=new _n;return r.add(new ue(e.build(),dn()),new ue(n.build(),dn())),r}function fu(i,t,e,n){const s=new ut;for(let r=0;r<70;r++){const a=-i.range(.5,26),o=n*(.25+-a/26*.75),c=i.range(-o,o),l=i.range(4,22)*(1- -a/40),h=i.pick([16774336,16769168,16777215,16763024]);s.quad(qt(t,e,c-l,a),qt(t,e,c+l,a),qt(t,e,c+l,a+.9),qt(t,e,c-l,a+.9),h)}return new ue(s.build(),dn())}function sx(i,t,e){const n=new ut;for(let s=0;s<e;s++){const r=i.range(-Math.PI,Math.PI),a=Math.tan(i.range(8,22)*Math.PI/180)*t;for(const[o,c]of[[-3,16724016],[3,3211104],[0,16777215]])n.quad(qt(t,r,o-1.2,a-1.2),qt(t,r,o+1.2,a-1.2),qt(t,r,o+1.2,a+1.2),qt(t,r,o-1.2,a+1.2),c)}return new ue(n.build(),dn())}function Kn(i){const t=i.len/2,e=i.yb??.3,n=i.belt??i.hood,s=i.tumble??.8;return[{z:-t,w:i.w*.96,yb:e,belt:i.nose-.05,top:i.nose,wt:i.w*.9,seg:"p"},{z:-t+.35,w:i.w,yb:e,belt:n-.04,top:i.hood-.02,wt:i.w*.94,seg:"p"},{z:i.ws,w:i.w,yb:e,belt:n,top:i.hood,wt:i.w*.92,seg:"ws"},{z:i.rf0,w:i.w,yb:e,belt:n,top:i.roof,wt:i.w*s,seg:"rf"},{z:i.rf1,w:i.w,yb:e,belt:n,top:i.roof,wt:i.w*s,seg:"rw"},{z:i.rw,w:i.w,yb:e,belt:n,top:i.deck,wt:i.w*.92,seg:"p"},{z:t,w:i.w,yb:e,belt:Math.min(n,i.tail-.04),top:i.tail,wt:i.w*.92,seg:"p"}]}const Cn=12589072,In=(i,t,e,n,s=.5,r=.3)=>{const a=e[e.length-1].z-e[0].z,o=Math.max(...e.map(c=>c.w));return{id:i,name:t,make:"",year:0,group:"TRAFFIC",paints:[16777215],stations:e,lights:n,wheels:{r,fz:e[0].z+a*.2,rz:e[0].z+a*.8,fx:o-.06,rx:o-.06,rim:10132122,spokes:4},exhaust:[],plateY:s,stats:{vmax:0,accel:0,grip:0}}},ks={golf:In("golf","VW GOLF MK2",Kn({len:4,w:.83,nose:.62,hood:.84,roof:1.4,deck:.98,tail:.98,ws:-.95,rf0:-.2,rf1:1.15,rw:1.85}),[{x:.6,y:.84,w:.34,h:.18,c:Cn}],.55),volvo240:In("volvo240","VOLVO 240 ESTATE",Kn({len:4.8,w:.86,nose:.7,hood:.86,roof:1.42,deck:1,tail:1,ws:-.8,rf0:0,rf1:2.22,rw:2.34}),[{x:.76,y:.86,w:.16,h:.42,c:Cn}],.6),ae86:In("ae86","TOYOTA AE86",Kn({len:4.2,w:.82,nose:.6,hood:.8,roof:1.32,deck:.94,tail:.94,ws:-.6,rf0:.1,rf1:.7,rw:1.95}),[{x:.52,y:.8,w:.56,h:.14,c:Cn}],.52),cherokee:In("cherokee","JEEP CHEROKEE XJ",Kn({len:4.24,w:.9,nose:.92,hood:1.06,roof:1.62,deck:1.22,tail:1.22,ws:-.9,rf0:-.35,rf1:1.96,rw:2.06,yb:.45}),[{x:.8,y:.98,w:.14,h:.36,c:Cn}],.7,.36),caprice:In("caprice","CHEVROLET CAPRICE",Kn({len:5.4,w:.95,nose:.78,hood:.92,roof:1.42,deck:1,tail:1,ws:-.7,rf0:0,rf1:1,rw:1.6}),[{x:.62,y:.86,w:.6,h:.16,c:Cn}],.6),w124:In("w124","MERCEDES W124",Kn({len:4.74,w:.87,nose:.7,hood:.86,roof:1.42,deck:1,tail:1.02,ws:-.65,rf0:.05,rf1:.95,rw:1.55}),[{x:.6,y:.88,w:.5,h:.2,c:Cn}],.62),f150:In("f150","FORD F-150",[{z:-2.5,w:.98,yb:.45,belt:.95,top:1.05,wt:.9,seg:"p"},{z:-2.1,w:1,yb:.45,belt:1.1,top:1.15,wt:.94,seg:"p"},{z:-.9,w:1,yb:.45,belt:1.15,top:1.2,wt:.94,seg:"ws"},{z:-.35,w:1,yb:.45,belt:1.15,top:1.8,wt:.86,seg:"rf"},{z:.6,w:1,yb:.45,belt:1.15,top:1.8,wt:.86,seg:"p"},{z:.62,w:1,yb:.45,belt:1.15,top:1.18,wt:.96,seg:"bed"},{z:2.5,w:1,yb:.45,belt:1.15,top:1.18,wt:.96,seg:"p"}],[{x:.9,y:.95,w:.12,h:.3,c:Cn}],.65,.38),crown:In("crown","TOYOTA CROWN",Kn({len:4.7,w:.85,nose:.74,hood:.88,roof:1.48,deck:1,tail:1.02,ws:-.6,rf0:.1,rf1:1.05,rw:1.5}),[{x:.64,y:.88,w:.4,h:.16,c:Cn}],.62),cedric:In("cedric","NISSAN CEDRIC",Kn({len:4.8,w:.86,nose:.72,hood:.86,roof:1.42,deck:.98,tail:1,ws:-.65,rf0:.05,rf1:1,rw:1.55}),[{x:.5,y:.86,w:.7,h:.12,c:Cn}],.6),every:In("every","SUZUKI EVERY",[{z:-1.7,w:.7,yb:.4,belt:.8,top:.9,wt:.66,seg:"p"},{z:-1.55,w:.7,yb:.4,belt:.9,top:1,wt:.66,seg:"ws"},{z:-1.05,w:.7,yb:.4,belt:1,top:1.82,wt:.62,seg:"rf"},{z:1.65,w:.7,yb:.4,belt:1,top:1.82,wt:.62,seg:"p"},{z:1.7,w:.7,yb:.4,belt:1,top:1.8,wt:.64,seg:"p"}],[{x:.6,y:.8,w:.14,h:.3,c:Cn}],.6,.27),civic:In("civic","HONDA CIVIC EF",Kn({len:4,w:.84,nose:.6,hood:.8,roof:1.32,deck:.96,tail:.96,ws:-.55,rf0:.2,rf1:1.2,rw:1.92}),[{x:.5,y:.8,w:.66,h:.12,c:Cn}],.5)};function zn(i,t={}){if(ie.modern)return rx(i,t);const e=iu(i,16777215,!0);S2(e.lit,i);const n=e.glow;if(t.taxi){const o=i.stations.find(c=>c.seg==="rf");n.box(0,o.top+.12,o.z+.4,.5,.22,.3,16769152)}const s=i.stations,a={parts:[{geo:e.lit.build(),mat:"lit"}],radius:0,max:40,len:(s[s.length-1].z-s[0].z)/2+2.2};return n.empty||a.parts.push({geo:n.build(),mat:"glow"}),t.night&&a.parts.push({geo:ol(i,.8).build(),mat:"halo",tint:!1}),a}function rx(i,t){const e=J0(i,16777215,!0),n=e.cabin;for(const o of e.wheels)for(const c of[-1,1])n.with(new Nt().makeTranslation(c*o.x,o.r,o.z),()=>Q0(n,o.r,o.hw,c,"steel",12106948,8,!1));const s=e.glow;if(t.taxi){const o=i.stations.find(c=>c.seg==="rf");s.box(0,o.top+.12,o.z+.4,.5,.22,.3,16769152)}const r=i.stations,a={parts:[{geo:nu(i),mat:"shadow",tint:!1,order:-1},{geo:e.skin.build(!0),mat:"car",tint:!0},{geo:e.body.build(),mat:"car",tint:!0},{geo:n.build(),mat:"car",tint:!1},{geo:s.build(),mat:"carGlow",tint:!1},{geo:e.glass.build(),mat:"glass",tint:!1}],radius:0,max:40,len:(r[r.length-1].z-r[0].z)/2+2.2};return t.night&&a.parts.push({geo:ol(i,.8).build(),mat:"halo",tint:!1}),a}class zs{constructor(){this.defs=[]}add(t){return this.defs.push(t),this.defs.length-1}}const Jn=[16756936,11069695,16773280,12124120,16765096,14731519,16777215],s0=[16047256,15519880],No=[1616092,1351892],ax=[6605900,5815364],r0=[5026876,4367414],nr=[14734532,13945016],Uo=12576482,ir={road:[10921646,9868958],line:16777215,edge:16777215,rumble:[16722474,16777215]},ox=[16777215,14743807],cx=[5430488,4641490],lx={id:"miami",name:"MIAMI BEACH",lines:["MIAMI","BEACH"],night:!1,hemi:[10542335,14205072],plate:16769088,smoke:16777215,card:[1727160,16771232],music:"miami",stageNames:["OCEAN DRIVE","PASTEL BOULEVARD","BAYSIDE CAUSEWAY","COCONUT HILLS","SUNSET POINT"],fog:{color:Uo,near:160,far:1150},ambient:{color:16777215,intensity:1.9},sun:{color:16773852,intensity:2.4,dir:[-.5,1,.8]},startTime:60,extendTime:40,shadow:6052966,trafficColors:[16734810,5943551,16769114,16777215,6348960,16751312,16752704],trafficCount:16,walls:!1,offroadLimit:Z+26,build(i){const t=new ii(1986),e=[pe(ir,[{w:4,c:nr},{w:600,c:ax}],[{w:6,c:s0},{w:28,abs:.4,c:s0},{w:3,abs:.12,c:ox},{w:16,abs:0,c:cx},{w:600,abs:0,c:No}]),pe(ir,[{w:6,c:nr},{w:600,c:[7393880,6735440]}],[{w:6,c:nr},{w:600,c:[7393880,6735440]}]),pe(ir,[{w:1,c:nr},{w:0,dy:.9,c:[16777215,15790320]},{w:.6,c:[16777215,16777215]},{w:0,abs:0,c:[13684944,12632256]},{w:600,abs:0,c:No}],[{w:1,c:nr},{w:0,dy:.9,c:[16777215,15790320]},{w:.6,c:[16777215,16777215]},{w:0,abs:0,c:[13684944,12632256]},{w:600,abs:0,c:No}]),pe(ir,[{w:3,c:[14207120,13417604]},{w:600,c:r0}],[{w:3,c:[14207120,13417604]},{w:600,c:r0}]),pe(ir,[{w:1.2,dy:.3,c:[11579576,11053232]},{w:0,dy:5,c:[15261896,14209208]},{w:0,dy:.8,c:[16765024,7368832]},{w:1.5,dy:2.8,c:[13156520,12367004]}],[{w:1.2,dy:.3,c:[11579576,11053232]},{w:0,dy:5,c:[15261896,14209208]},{w:0,dy:.8,c:[16765024,7368832]},{w:1.5,dy:2.8,c:[13156520,12367004]}],[5789800,5263454])],n=(lt,Pt)=>Pt?4:lt==="city"?1:lt==="causeway"?2:lt==="hills"?3:0,s=new Ls(n,3);s.zone="beach",s.straight(30),s.stageFrom({zone:"beach",length:400,curvy:.75,hilly:.1,yMin:2.5,yMax:6},t),s.stageFrom({zone:"city",length:400,curvy:.8,hilly:.25,yMin:3,yMax:14},t),s.stageFrom({zone:"causeway",length:380,curvy:.6,hilly:.1,yMin:3,yMax:5},t),s.stageFrom({zone:"hills",length:420,curvy:1,hilly:1,yMin:4,yMax:70,tunnels:.15,tunnelZone:"hills"},t),s.stageFrom({zone:"beach2",length:420,curvy:.7,hilly:.15,yMin:2.5,yMax:6},t);const r=s.finish(260),a=new zs,o=a.add(cl()),c=a.add(C2()),l=a.add(su()),h=a.add(ll()),u=[a.add(Ro([16724032,16777215])),a.add(Ro([2781439,16769088])),a.add(Ro([2146464,16744624]))],d=a.add(I2()),f=[0,1,2].map(lt=>a.add(hl(lt,t))),g=a.add(Ds(8,16774336)),_=a.add(Ba()),m=a.add(R2()),p=a.add(P2()),x=[{bg:16734858,fg:16777215,text:"SUNSET",sub:"COLA",border:16777215},{bg:2788095,fg:16777215,text:"SURF",sub:"SHOP",border:16769088},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:16777215,fg:1735384,text:"BEACH",sub:"CLUB 86",border:16734858},{bg:2142352,fg:16777215,text:"PALM",sub:"RESORT",border:16777215},{bg:16747040,fg:16777215,text:"MANGO",sub:"JUICE",border:16777215}].map(lt=>a.add(vr(i.add(lt,2,2),9,4.5))),M=[{bg:16777215,fg:16726634,text:"DINER"},{bg:1710650,fg:4251903,text:"DISCO"},{bg:16777215,fg:2783960,text:"MOTEL"},{bg:16734858,fg:16777215,text:"ICE CREAM"}].map(lt=>a.add(ru(i.add(lt,2,1)))),v=[{bg:1735226,fg:16777215,text:"MIAMI",sub:"BEACH 12",border:16777215},{bg:1735226,fg:16777215,text:"KEYS",sub:"NEXT EXIT",border:16777215},{bg:1727152,fg:16777215,text:"ROUTE",sub:"A1A",border:16777215}].map(lt=>a.add(za(i.add(lt,1,1)))),w=a.add(we(i.add({bg:16777215,fg:14690858,text:"START",stripes:1710618},4,1))),E=a.add(we(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),15790320,1727200)),T=a.add(we(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),15790320,1710618)),C=ks,b=[C.golf,C.volvo240,C.ae86,C.cherokee,C.caprice,C.w124,C.f150].map(lt=>a.add(zn(lt))).concat([a.add(yi(2788095)),a.add(Wi(16734858))]),S=a.add(vn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),D=a.add(vn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),W=a.add(au()),H=a.add(ul()),V=a.add(ou()),nt=a.add(L2()),O=a.add(cu()),rt=[{bg:16734858,fg:16777215,text:"WELCOME TO MIAMI",border:16777215},{bg:1731296,fg:16769088,text:"SUNSET POINT",border:16777215}].map((lt,Pt)=>a.add(we(i.add(lt,4,1),16777215,Pt?16747040:2146480,16777215))),z=a.add(bi(!0)),tt=a.add(bi(!1)),J=Array.from({length:16},(lt,Pt)=>a.add(dl(i.add({bg:1735226,fg:16777215,text:String(Pt+1),border:16777215},1,1)))),at=[a.add(Xi(0)),a.add(Xi(1))],j=a.add(lu(t)),wt=a.add(U2()),K=[16730730,2789631,16769088,16777215,4247712,16751152,12607743],mt=[16726618,16769088,2789631,4251808,16777215,16747040],St=r.segs;for(let lt=10;lt<St.length;lt++){const Pt=St[lt],pt=Pt.props;if(Pt.tunnel){St[lt-1].tunnel||pt.push({t:p,x:0});continue}const Zt=Pt.zone;if(ie.modern){const N=Zt==="beach"||Zt==="beach2";lt%3===0&&(Zt==="hills"||N)&&pt.push({t:z,x:Z+2.1},{t:tt,x:-13.1}),lt%167===100&&pt.push({t:J[Math.min(J.length-1,Math.floor(lt*6/1e3))],x:Z+3.4,r:-.3}),N&&(lt%5===0&&t.chance(.55)&&pt.push({t:at[1],x:Z+t.range(9,26),r:t.range(0,6),tint:t.pick(K)}),lt%4===1&&t.chance(.35)&&pt.push({t:at[0],x:-(Z+t.range(1.5,3.5)),r:t.range(0,6),tint:t.pick(K)}),lt%40===10&&pt.push({t:j,x:Z+t.range(15,60),y:t.range(16,28),r:t.range(0,6)}),Zt==="beach2"&&lt%26===13&&t.chance(.7)&&pt.push({t:wt,x:Z+t.range(18,22),r:-.3+t.range(-.2,.2),tint:t.pick(K)})),Zt==="city"&&lt%5===2&&t.chance(.45)&&pt.push({t:at[0],x:t.sign()*(Z+t.range(2.5,5.5)),r:t.range(0,6),tint:t.pick(K)})}Math.abs(Pt.curve)>.0016&&lt%5===0&&Zt!=="causeway"&&pt.push(Pt.curve>0?{t:S,x:-16.5,r:.15}:{t:D,x:Z+5.5,r:-.15}),(Zt==="beach"||Zt==="beach2"||Zt==="causeway")&&lt%23===0&&t.chance(.6)&&pt.push({t:O,x:(Zt==="causeway"?t.sign():1)*t.range(70,280),y:0,abs:!0,s:t.range(.9,1.4),r:t.range(-.6,.6)}),Zt==="beach"||Zt==="beach2"?(lt%19===4&&t.chance(.5)&&pt.push({t:nt,x:Z+t.range(10,18),r:t.range(-.5,.5)}),lt%7===0&&t.chance(.85)&&pt.push({t:o,x:Z+t.range(4.5,7),s:t.range(.9,1.3),r:t.range(0,6)}),lt%7===3&&t.chance(.5)&&pt.push({t:o,x:-(Z+t.range(5,9)),s:t.range(.9,1.3),r:t.range(0,6)}),lt%9===0&&t.chance(Zt==="beach2"?.75:.45)&&(pt.push({t:t.pick(u),x:Z+t.range(14,26),r:t.range(0,6)}),t.chance(.5)&&pt.push({t:t.pick(u),x:Z+t.range(14,26),r:t.range(0,6)})),Zt==="beach2"&&lt%70===35&&pt.push({t:d,x:Z+22,r:-.6}),lt%55===20&&pt.push({t:t.pick(f),x:-(Z+t.range(40,70)),tint:t.pick(Jn),r:t.range(-.3,.3)}),lt%80===50&&pt.push({t:t.pick(x),x:-23,r:.35}),lt%37===0&&t.chance(.5)&&pt.push({t:h,x:Z+t.range(24,32),s:t.range(.6,1.2),r:t.range(0,6)}),lt%120===60&&pt.push({t:t.pick(v),x:Z+3,r:-.2})):Zt==="city"?(lt%30>3&&pt.push({t:W,x:Z+9.5},{t:W,x:-20.5}),lt%16===12&&pt.push({t:H,x:Z+4.5,tint:t.pick(mt)},{t:H,x:-15.5,r:Math.PI,tint:t.pick(mt)}),lt%14===0&&t.chance(.75)&&pt.push({t:t.pick(M),x:-(Z+t.range(15,18)),tint:t.pick(Jn),r:.5}),lt%14===7&&t.chance(.75)&&pt.push({t:t.pick(M),x:Z+t.range(15,18),tint:t.pick(Jn),r:-.5}),lt%8===0&&pt.push({t:g,x:Z+3,r:0},{t:g,x:-14,r:Math.PI}),lt%8===4&&(pt.push({t:o,x:Z+6.5,s:t.range(.9,1.2),r:t.range(0,6)}),pt.push({t:o,x:-17.5,s:t.range(.9,1.2),r:t.range(0,6)})),lt%40===20&&pt.push({t:t.pick(x),x:(lt%80===20?-1:1)*(Z+11),r:lt%80===20?.35:-.35}),lt%30===15&&pt.push({t:t.pick(f),x:t.sign()*(Z+t.range(50,80)),tint:t.pick(Jn),r:t.range(-.3,.3)})):Zt==="causeway"?(lt%10===0&&pt.push({t:g,x:Z+2.4,r:0}),lt%10===5&&pt.push({t:g,x:-13.4,r:Math.PI}),lt%45===0&&t.chance(.8)&&pt.push({t:m,x:t.sign()*t.range(70,160),y:0,abs:!0,s:t.range(.8,1.4),r:t.range(0,6)}),lt%150===75&&pt.push({t:t.pick(v),x:Z+4,r:-.2})):Zt==="hills"&&(Math.abs(Pt.curve)>.0012&&(pt.push({t:_,x:Z+2.4}),pt.push({t:_,x:-13.4})),lt%4===2&&t.chance(.5)&&pt.push({t:V,x:t.sign()*(Z+t.range(8,50)),s:t.range(.8,1.5),r:t.range(0,6)}),lt%5===0&&t.chance(.6)&&pt.push({t:c,x:t.sign()*(Z+t.range(8,40)),s:t.range(.8,1.4),r:t.range(0,6)}),lt%11===0&&t.chance(.5)&&pt.push({t:l,x:t.sign()*(Z+t.range(5,12)),s:t.range(.7,1.2),r:t.range(0,6)}),lt%23===0&&t.chance(.6)&&pt.push({t:h,x:t.sign()*(Z+t.range(9,30)),s:t.range(.8,1.8),r:t.range(0,6)}),lt%90===45&&pt.push({t:t.pick(x),x:Z+12,r:-.35}))}for(let lt=1;lt<r.stageStarts.length;lt++)St[r.stageStarts[lt]+4].props.push({t:E,x:0});St[8].props.push({t:w,x:0}),St[r.stageStarts[1]+160].props.push({t:rt[0],x:0}),St[r.stageStarts[4]+200].props.push({t:rt[1],x:0}),St[r.goalSeg].props.push({t:T,x:0});const dt=new Ns;dt.addLayer(Us([[0,16773304],[1.4,16765072],[3,16754820],[4.6,16750240],[6.5,16165068],[8.5,13813486],[11,10672886],[15,7260918],[20,4633330],[28,2791146],[40,1736416],[90,941768]],Uo),0);const Dt=lt=>Math.atan2(Math.sin(lt),Math.cos(lt)),Ht=Fs(2500,.25,2.6,300,[[1.45,16762020],[1.22,16754820],[1,16747066],[.84,16755268],[.68,16763992],[.5,16771200],[.3,16775368]],24);return dt.addLayer(Ht,1),dt.sun={obj:Ht,local:Ga(2500,.25,2.6)},dt.addLayer(qi(t,2320,7,[16769216,16758944,15239336],-.5,1.2,[1.2,3.2]),.9),dt.addLayer(qi(t,2350,14,[16777215,16771312,16033992]),.8),dt.addLayer(kn(t,2200,8030928,230,lt=>{const Pt=Dt(lt);return Pt<-.25?1:Pt>1.6?.8:0},15265535,46),1),dt.addLayer(kn(t,2050,5939360,110,lt=>{const Pt=Dt(lt);return Pt<-.15||Pt>1.9?1:0},void 0,50),1),dt.addLayer(kn(t,1980,3050072,55,lt=>{const Pt=Dt(lt);return Pt<-.35||Pt>2.1?1:0},void 0,260,[1.2,3.5]),1),dt.addLayer(Ha(t,2e3,[11057368,10004684,12109024,14207192],[8034504,15266047,9087192],150,lt=>{const Pt=Dt(lt);return Pt>.7&&Pt<1.3?1:0},.9,.35),1),ie.modern&&(dt.addLayer(du(t,1880,.35,1.5,5),1),dt.addLayer(ix(1860,1.55),1),dt.addLayer(fu(t,1880,.25,140),1)),dt.addLayer(Os(1900,Uo),0),{track:r,profiles:e,props:a.defs,backdrop:dt,trafficTypes:b,gateType:T}}},Oo=2890832,kc=[16771232,16774872,16765040,10547455,16777215],Fo={road:[4868698,3947594],line:15790320,edge:15790320,rumble:[5921384,5263452],rumbleW:1.4},da=i=>[{w:0,dy:1.3,c:[12369096,11053238]},{w:.5,c:[14474468,13684952]},{w:0,abs:0,c:[3816018,3816018]},{w:600,abs:0,c:i}];function hx(i,t,e,n){const s=new ut,r=new ut,a=i.pick([1843780,2235456,1583680,2500160]);if(ie.modern){const h=new ut,u=Mr(n<30?be.APARTMENT:i.pick([be.OFFICE_WARM,be.OFFICE_COOL,be.OFFICE_DARK,be.OFFICE_WARM])),d=n<30?[12,12]:[16,16];if(h.facadeBox(0,n/2,0,t,n,e,u,d[0],d[1],[16777215,12106968],2764360,i.range(0,1)),n>45&&i.chance(.6)){const f=t*.65,g=e*.65,_=i.range(6,14);h.facadeBox(0,n+_/2,0,f,_,g,u,d[0],d[1],[14474480,10527940],2764360,i.range(0,1)),i.chance(.5)&&r.box(0,n+_+.3,0,f+.2,.5,g+.2,i.pick([4255999,16726666,16777215])),n+=_}for(let f=0;f<3;f++)s.box(i.range(-t/4,t/4),n+.8,i.range(-e/4,e/4),2.6,1.6,2,[3817048,4869736]);return n>40&&(s.box(t/5,n+6,0,.35,12,.35,6975112),r.box(t/5,n+12.3,0,1,1,1,16719904)),{parts:[{geo:h.build(),mat:"facadeLit"},{geo:s.build(),mat:"lit"},{geo:r.build(),mat:"glow"}],radius:0,max:60}}s.box(0,n/2,0,t,n,e,[a,2764370]),i.chance(.5)&&s.box(0,n+2,0,t*.6,4,e*.6,a);const o=i.int(0,2),c=i.range(.12,.35),l=[[0,1,t,e/2],[0,-1,t,e/2],[1,1,e,t/2],[1,-1,e,t/2]];for(const[h,u,d,f]of l)for(let g=4;g<n-3;g+=3.6){if(o===1&&i.chance(.15)){const _=i.pick(kc),m=f+.06;h===0?r.quad([-d/2+1,g,u*m],[d/2-1,g,u*m],[d/2-1,g+1.8,u*m],[-d/2+1,g+1.8,u*m],_):r.quad([u*m,g,-d/2+1],[u*m,g,d/2-1],[u*m,g+1.8,d/2-1],[u*m,g+1.8,-d/2+1],_);continue}for(let _=-d/2+1.5;_<d/2-1.5;_+=3){if(!i.chance(c))continue;const m=i.pick(kc),p=f+.06;h===0?r.quad([_,g,u*p],[_+1.5,g,u*p],[_+1.5,g+1.8,u*p],[_,g+1.8,u*p],m):r.quad([u*p,g,_],[u*p,g,_+1.5],[u*p,g+1.8,_+1.5],[u*p,g+1.8,_],m)}}return n>70&&r.box(0,n+4.6,0,1.2,1.2,1.2,16719904),{parts:[{geo:s.build(),mat:"lit"},{geo:r.build(),mat:"glow"}],radius:0,max:60}}function ux(i,t,e){const n=new ut,s=new ut,r=new ut;return n.box(0,e/2,-.4,1.2,e,1.2,2105392),s.quad([-1.6,e,.25],[1.6,e,.25],[1.6,e+12,.25],[-1.6,e+12,.25],16777215,i),r.box(0,e+6,0,3.8,12.6,.4,t),{parts:[{geo:n.build(),mat:"lit"},{geo:r.build(),mat:"glow"},{geo:s.build(),mat:"sign"}],radius:0,max:50}}function dx(i,t){const e=new ut,n=new ut,s=new ut;return e.box(-6,2,0,.6,4,.6,3158080),e.box(6,2,0,.6,4,.6,3158080),s.box(0,8,-.1,19,8,.3,t),n.quad([-9,4.4,.1],[9,4.4,.1],[9,11.6,.1],[-9,11.6,.1],16777215,i),{parts:[{geo:e.build(),mat:"lit"},{geo:s.build(),mat:"glow"},{geo:n.build(),mat:"sign"}],radius:0,max:40}}function fx(i,t){const e=new ut,n=new ut,s=Z+1.2;return e.box(-s,4.5,0,.6,9,.6,9079448),e.box(s,4.5,0,.6,9,.6,9079448),e.box(0,8.6,-.3,s*2,.5,.5,9079448),e.box(-5.5,10,-.15,9.4,4.2,.2,940586),e.box(5.5,10,-.15,9.4,4.2,.2,940586),n.quad([-10,8,0],[-1,8,0],[-1,12,0],[-10,12,0],16777215,i),n.quad([1,8,0],[10,8,0],[10,12,0],[1,12,0],16777215,t),{parts:[{geo:e.build(),mat:"lit"},{geo:n.build(),mat:"sign"}],radius:0,max:6}}function px(){const i=new ut,t=new ut,e=56,n=-70;for(const s of[-Z-3,Z+3])i.box(s,(e+n)/2,0,2.4,e-n,2.4,[14212328,16777215]),t.box(s,e+.8,0,1.2,1.2,1.2,16719904);for(const s of[14,36,e-2])i.box(0,s,0,(Z+3)*2,2.2,2,14212328);for(const s of[-Z-3,Z+3])for(const r of[-1,1])for(let a=1;a<=16;a++){const o=a/16,c=r*o*64,l=e-(e-4)*(1-(1-o)*(1-o));t.box(s,l,c,.6,.6,.6,a%2?16777215:8446207)}return{parts:[{geo:i.build(),mat:"lit"},{geo:t.build(),mat:"glow"}],radius:0,max:8}}const mx={id:"tokyo",name:"TOKYO NIGHT HIGHWAY",lines:["TOKYO NIGHT","HIGHWAY"],night:!0,hemi:[9072864,2760768],plate:15790312,smoke:12105936,card:[2363466,16738992],music:"tokyo",stageNames:["SHUTOKO LOOP","NEON DISTRICT","UNDERGROUND","BAY BRIDGE","WANGAN LINE"],fog:{color:Oo,near:140,far:1150},ambient:{color:12895487,intensity:1.8},sun:{color:16761048,intensity:1.6,dir:[-.4,1,.9]},startTime:60,extendTime:40,shadow:2236972,trafficColors:[16777215,14692400,4235519,3199136,16752688,13656319,10132136],trafficCount:18,walls:!0,offroadLimit:Z+1,build(i){var tt,J;const t=new ii(1985),e=[pe(Fo,da([1711160,1447983]),da([1711160,1447983])),pe(Fo,da([924744,792638]),da([924744,792638])),pe(Fo,[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[3420716,3025960])],n=(at,j)=>j?2:at==="bay"?1:0,s=new Ls(n,26);s.zone="city",s.straight(30),s.stageFrom({zone:"city",length:400,curvy:.85,hilly:.4,yMin:22,yMax:40},t),s.stageFrom({zone:"neon",length:400,curvy:.8,hilly:.3,yMin:22,yMax:34,tunnels:.12},t),s.stageFrom({zone:"under",length:420,curvy:.7,hilly:.4,yMin:18,yMax:34,tunnels:.4},t),s.stageFrom({zone:"bay",length:420,curvy:.45,hilly:1,yMin:26,yMax:64},t),s.stageFrom({zone:"wangan",length:420,curvy:.45,hilly:.2,yMin:22,yMax:30},t);const r=s.finish(260),a=new zs,o=[],l=(ie.modern?[[5,12,26],[5,32,64],[5,70,140]]:[[8,40,130]]).map(([at,j,wt])=>{const K=[];for(let mt=0;mt<at;mt++){const St=t.range(18,34),dt=t.range(18,30),Dt=t.range(j,wt),Ht={t:a.add(hx(t,St,dt,Dt)),h:Dt,w:Math.max(St,dt)};K.push(Ht),o.push(Ht)}return K}),h=a.add(Ds(10,16760928,9079448,4,!0)),u=[16726666,4255999,16769088,16732208,8453984,12607743],f=["ホテル","カラオケ","ラーメン","喫茶店","電気街","寿司","ゲーム","居酒屋"].map((at,j)=>{const wt=u[j%u.length],K={bg:1052700,fg:wt,text:at,vertical:!0,jp:!0,border:wt};return a.add(ux(i.add(K,1,4),wt,t.range(26,36)))}),_=[{bg:1052700,fg:16726666,text:"TURBO",sub:"GAME CENTER",border:16726666},{bg:1052700,fg:4255999,text:"東京",jp:!0,border:4255999},{bg:14690858,fg:16777215,text:"NEO",sub:"ELECTRONICS",border:16777215},{bg:1052700,fg:16769088,text:"ネオン",jp:!0,border:16769088},{bg:1720512,fg:16777215,text:"SKY",sub:"HOTEL",border:4255999},{bg:1052700,fg:8453984,text:"カメラ",jp:!0,border:8453984}].map((at,j)=>a.add(dx(i.add(at,2,1),u[j%u.length]))),p=[[{bg:940586,fg:16777215,text:"新宿",sub:"SHINJUKU",jp:!0},{bg:940586,fg:16777215,text:"銀座",sub:"GINZA",jp:!0}],[{bg:940586,fg:16777215,text:"渋谷",sub:"SHIBUYA",jp:!0},{bg:940586,fg:16777215,text:"羽田",sub:"HANEDA",jp:!0}],[{bg:940586,fg:16777215,text:"湾岸線",sub:"WANGAN",jp:!0},{bg:940586,fg:16777215,text:"横浜",sub:"YOKOHAMA",jp:!0}]].map(([at,j])=>a.add(fx(i.add(at,2,1),i.add(j,2,1)))),x=a.add(px()),M=a.add(yr(6974072,16752688,7.9)),v=a.add(we(i.add({bg:1052700,fg:4255999,text:"START",border:4255999},4,1),10132136,16726666,4255999)),w=a.add(we(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),10132136,1727200,16769088)),E=a.add(we(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),10132136,1710618,16726666)),T=ks,C=[T.cedric,T.every,T.civic,T.ae86,T.crown].map(at=>a.add(zn(at,{night:!0}))).concat([a.add(zn(T.crown,{taxi:!0,night:!0})),a.add(zn(T.crown,{taxi:!0,night:!0})),a.add(yi(14690858)),a.add(yi(1739322)),a.add(Wi(2787930))]),b=a.add(hu(16756784)),S=a.add(O2(i.add({bg:16747040,fg:1710618,text:"非常電話",jp:!0},1,1))),D=a.add(F2(8.2)),W=a.add(vn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1),.3)),H=a.add(vn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1),.3)),V=a.add(D2(2788e3)),nt=[0,1,2].map(()=>a.add(N2(t))),O=r.segs,rt=(at,j,wt)=>{const K=O[at].props;for(const mt of[-1,1]){if(!t.chance(j))continue;const St=t.range(0,240),dt=ie.modern?t.pick(l[St<70?0:St<140?1:2]):t.pick(o),Dt=ie.modern?t.range(.9,1.15):t.range(.85,1.25),Ht=mt*(Z+wt+dt.w*Dt*.5+St),lt=ie.modern?t.range(.92,1.1):St<70?t.range(.25,.45):St<140?t.range(.5,.9):t.range(.8,1.5);K.push({t:dt.t,x:Ht,y:0,abs:!0,s:Dt,sy:lt,r:t.range(-.2,.2),tint:t.pick([16777215,14209279,13164799])}),St<140&&t.chance(.4)&&K.push({t:t.pick(_),x:Ht-mt*dt.w*Dt*.2,y:dt.h*Dt*lt,abs:!0,r:mt*-.4})}};for(let at=10;at<O.length;at++){const j=O[at],wt=j.props;if(j.tunnel){O[at-1].tunnel||wt.push({t:M,x:0}),ie.modern&&at%22===0&&wt.push({t:D,x:0});continue}const K=j.zone;if(ie.modern&&(at%2===0&&wt.push({t:b,x:Z+1.65,y:1.3},{t:b,x:-12.65,y:1.3}),at%140===70&&wt.push({t:S,x:Z+.9,r:-Math.PI/2})),Math.abs(j.curve)>.0016&&at%4===0&&wt.push(j.curve>0?{t:W,x:-12.95,r:.1}:{t:H,x:Z+1.95,r:-.1}),K!=="bay"&&at%3===0&&wt.push({t:t.pick(nt),x:t.sign()*(Z+t.range(40,330)),y:0,abs:!0,r:t.range(0,6)}),K!=="bay"&&at%130===90&&!((tt=O[at+2])!=null&&tt.tunnel)&&!((J=O[at-2])!=null&&J.tunnel)&&wt.push({t:V,x:0,y:-0}),at%7===0&&wt.push({t:h,x:Z+2.6,y:1.3,r:0}),at%7===3&&wt.push({t:h,x:-13.6,y:1.3,r:Math.PI}),K==="bay"){at%75===30&&wt.push({t:x,x:0}),at%9===0&&rt(at,.08,260);continue}rt(at,K==="wangan"?.12:K==="under"?.22:.3,18),(K==="neon"||K==="city")&&at%4===0&&t.chance(K==="neon"?.55:.2)&&wt.push({t:t.pick(f),x:t.sign()*(Z+t.range(10,22)),y:0,abs:!0,r:t.range(-.5,.5)}),at%110===55&&wt.push({t:t.pick(p),x:0})}for(let at=1;at<r.stageStarts.length;at++)O[r.stageStarts[at]+4].props.push({t:w,x:0});O[8].props.push({t:v,x:0}),O[r.goalSeg].props.push({t:E,x:0});const z=new Ns;return z.addLayer(Us([[0,16754784],[1.2,15891058],[2.6,13785734],[4.2,10503308],[6.2,7221378],[9,4858994],[13,3284066],[19,2234450],[30,1314880],[90,394782]],Oo),0),z.addLayer(qi(t,2380,9,[5913216,3942498,12606088],-Math.PI,Math.PI,[5,14]),.7),z.addLayer(uu(t,260),.3),z.addLayer(Fs(2500,-.45,16,70,[[1.6,5917322],[1.3,9075370],[1,16774352],[.8,16777192]],16),1),z.addLayer(nx(2300,.55,190,520,3811946,14209264),1),z.addLayer(Ha(t,2100,[1710136,2103872,1316410],kc,170,()=>1,.75,.22),1),ie.modern&&z.addLayer(sx(t,2300,6),.4),z.addLayer(Os(1950,Oo),0),{track:r,profiles:e,props:a.defs,backdrop:z,trafficTypes:C,gateType:E}}},nn=(i,t,e)=>{const n=[{geo:i.build(),mat:"lit"}];return t&&!t.empty&&n.push({geo:t.build(),mat:"glow"}),e&&!e.empty&&n.push({geo:e.build(),mat:"sign"}),n},ur=(i,t)=>new Lt(i).multiplyScalar(t).getHex();function pu(){const i=new ut,t=[4099130,3042860];i.prism(0,0,0,6.2,.5,.42,8,t,5939274);for(const[e,n,s]of[[1,2.6,2.4],[-1,3.4,1.8]])i.box(e*.75,n,0,1.1,.6,.6,t[0]),i.prism(e*1.15,0,n-.2,n+s,.34,.3,7,t,5939274);return{parts:nn(i),radius:.7,max:220}}function mu(){const i=new ut,t=[8022610,6180928];i.prism(0,0,0,2.6,.38,.3,6,t);const e=[[-1.6,4.4,.3],[1.4,4.8,-.4],[.2,5.4,.9],[-.4,4,-1.3]];for(const n of e){for(let r=0;r<5;r++){const a=r/5,o=(r+1)/5,c=u=>[n[0]*u,2.6+(n[1]-2.6)*u,n[2]*u],l=c(a),h=c(o);i.quad([l[0]-.18,l[1],l[2]],[l[0]+.18,l[1],l[2]],[h[0]+.15,h[1],h[2]],[h[0]-.15,h[1],h[2]],t[r%2])}for(let r=0;r<8;r++){const a=r/8*Math.PI*2;i.tri([n[0],n[1]-.2,n[2]],[n[0]+Math.cos(a)*.25,n[1],n[2]+Math.sin(a)*.25],[n[0]+Math.cos(a)*.9,n[1]+.5,n[2]+Math.sin(a)*.9],r%2?4880954:6986314)}}return{parts:nn(i),radius:.6,max:160}}function gx(i){const t=new ut,e=[12607546,14186570,11555892,14717020,11029552],n=9,s=i.range(26,46),r=i.range(26,40),a=r*i.range(.55,.75),o=5;for(let c=0;c<o;c++){const l=s*c/o,h=s*(c+1)/o,u=r+(a-r)*(c/o),d=r+(a-r)*((c+1)/o);t.prism(0,0,l,h,u,d,n,[e[c],ur(e[c],.82)],c===o-1?14191192:null,.3)}return t.prism(0,0,-2,4,r*1.35,r,n,[13139024,11561540],null,.3),{parts:nn(t),radius:0,max:30}}function xx(){const i=new ut,t=Z+5,e=18,n=4,s=[13134400,11557430,14188622];for(const a of[-1,1])i.box(a*(t+3),e/2-2,0,7,e+4,9,[s[0],s[2]]);const r=10;for(let a=0;a<r;a++){const o=a/r*Math.PI,c=(a+1)/r*Math.PI,l=(h,u,d)=>[-Math.cos(h)*u,e-4+Math.sin(h)*(u*.45),d];for(const h of[-4,4])i.quad(l(o,t,h),l(c,t,h),l(c,t+n,h),l(o,t+n,h),s[a%2]);i.quad(l(o,t,-4),l(c,t,-4),l(c,t,4),l(o,t,4),9061416),i.quad(l(o,t+n,-4),l(c,t+n,-4),l(c,t+n,4),l(o,t+n,4),s[2])}return{parts:nn(i),radius:0,max:4}}function gu(){const i=new ut,t=new ut;i.prism(0,0,-30,26,6,5,12,[15261904,13682872]),i.prism(0,0,26,32,6.6,6.6,12,[14209216,12630184],12103840),i.prism(0,0,32,36,3,.4,12,[12630184,11051152]);for(let e=0;e<6;e++){const n=e/6*Math.PI*2;t.box(Math.cos(n)*5.4,28,Math.sin(n)*5.4,.8,1.6,.8,16771232)}return{parts:nn(i,t),radius:0,max:6}}function _x(){const i=new ut;i.prism(0,0,0,1.4,.3,.25,5,5914150);const t=[[1,4.6,2.6],[3.2,7,2],[5.4,9.4,1.4]];for(const[e,n,s]of t){i.prism(0,0,e,n,s,0,8,[1989174,1526316]);const r=e+(n-e)*.45;i.prism(0,0,r,n+.05,s*.58,0,8,[16777215,14739700])}return{parts:nn(i),radius:1,max:300}}function Mx(i){const t=new ut,e=i.range(10,13),n=9,s=3.4,r=3.2,a=i.pick([9065522,8014380,10117176]);t.box(0,s/2,0,e,s,n,[16052456,16777215]),t.box(0,s+r/2,0,e,r,n,[a,ur(a,1.15)]);for(let h=-e/2+1.6;h<e/2-1;h+=2.6)for(const[u,d]of[[1.8,3820122],[s+1.6,3820122]])t.box(h,u,n/2+.02,1,1.1,.06,d),t.box(h-.75,u,n/2+.04,.4,1.1,.06,12593706),t.box(h+.75,u,n/2+.04,.4,1.1,.06,12593706);t.box(0,s+.2,n/2+.8,e*.8,.2,1.6,a);for(let h=-e*.4;h<=e*.4;h+=.6)t.box(h,s+.75,n/2+1.55,.12,1,.12,ur(a,.8));t.box(0,s+1.25,n/2+1.55,e*.8,.12,.12,ur(a,.8));const o=s+r,c=o+3.6,l=1.2;for(const h of[-1,1])t.quad([h*(e/2+l),o-.4,-n/2-l],[h*(e/2+l),o-.4,n/2+l],[0,c,n/2+l],[0,c,-n/2-l],ur(a,.7)),t.quad([h*(e/2+l-.1),o-.15,-n/2-l],[h*(e/2+l-.1),o-.15,n/2+l],[0,c+.25,n/2+l],[0,c+.25,-n/2-l],16317439);for(const h of[-n/2,n/2])t.tri([-e/2,o,h],[e/2,o,h],[0,c,h],[a,a][0]);return t.box(e*.25,c,0,.9,2.4,.9,14209224),{parts:nn(t),radius:0,max:30}}function vx(){const i=new ut;return i.quad([-1.2,0,0],[1.4,0,0],[.6,1.1,0],[-.8,.9,0],16777215),i.quad([-.8,.9,0],[.6,1.1,0],[.6,1.1,-jt],[-.8,.9,-jt],16054527),i.quad([1.4,0,0],[.6,1.1,0],[.6,1.1,-jt],[1.4,0,-jt],14477044),i.quad([-1.2,0,0],[-.8,.9,0],[-.8,.9,-jt],[-1.2,0,-jt],15265528),{parts:nn(i),radius:0,max:400}}function yx(){const i=new ut;return i.box(0,0,0,3.2,2.6,2.4,[13642282,14694970]),i.box(0,.3,1.21,2.8,1.2,.02,9091288),i.box(0,.3,-1.21,2.8,1.2,.02,9091288),i.box(0,2.6,0,.2,2.6,.2,3815994),i.box(0,3.9,0,300,.12,.12,2763306),{parts:nn(i),radius:0,max:6}}function bx(i,t,e){const n=new ut,s=new ut,r=new ut,a=new ut,o=i.range(26,40),c=i.range(16,22),l=i.range(60,110);if(ie.modern)a.facadeBox(0,l/2,0,o,l,c,Mr(i.pick([be.OFFICE_WARM,be.APARTMENT,be.OFFICE_COOL])),14,14,[16777215,14207144],3813440,i.range(0,1));else{n.box(0,l/2,0,o,l,c,[3812928,4865616]);for(let u=6;u<l-4;u+=6)for(let d=-o/2+2;d<o/2-2;d+=3)i.chance(.55)&&s.box(d,u,c/2+.05,1.6,2,.05,i.pick([16771232,16774872,16765040]))}for(const u of[l*.33,l*.66,l])s.box(0,u,0,o+.4,.9,c+.4,16762954);n.box(0,5,0,o+14,10,c+10,[2760752,3812928]),s.box(0,10.4,0,o+14.4,.8,c+10.4,e),s.box(0,l+2,0,o*.7,.6,c*.7,e),n.box(0,l+7,c*.25,o*.8,9,.6,1052700),r.quad([-o*.38,l+3,c*.25+.32],[o*.38,l+3,c*.25+.32],[o*.38,l+11,c*.25+.32],[-o*.38,l+11,c*.25+.32],16777215,t),s.box(0,l+11.4,c*.25,o*.8,.5,.7,e);const h=nn(n,s,r);return a.empty||h.push({geo:a.build(),mat:"facadeLit"}),{parts:h,radius:0,max:40}}function Sx(i,t,e,n){const s=new ut,r=new ut,a=new ut;s.box(0,n/2,-.4,1.4,n,1.4,2105392),s.box(0,n+5,-.3,12.6,10.6,.6,1052700),a.quad([-6,n,.05],[6,n,.05],[6,n+10,.05],[-6,n+10,.05],16777215,i);for(let o=0;o<=12;o++){const c=-6.3+o*1.05;r.box(c,n-.3,.1,.35,.35,.35,o%2?16777215:16769120),r.box(c,n+10.3,.1,.35,.35,.35,o%2?16769120:16777215)}for(let o=0;o<=10;o++)for(const c of[-6.3,6.3])r.box(c,n+o,.1,.35,.35,.35,o%2?16777215:16769120);return r.box(0,n-3,.1,9,1.2,.3,e),r.poly([[4.4,n-1.4,.1],[7.4,n-3,.1],[4.4,n-4.6,.1]],e),r.box(0,n+10.9,0,12.8,.4,.8,t),{parts:nn(s,r,a),radius:.9,max:40}}function Ex(i,t){const e=new ut,n=new ut,s=i.range(30,46),r=i.range(10,16),a=18;e.box(0,r/2,0,s,r,a,[2761270,3813446]),n.box(0,r*.55,a/2+.05,s-2,r*.3,.1,i.pick([16726666,4255999,16764992,16740400])),n.box(0,r+.3,0,s+.4,.6,a+.4,t),e.box(0,4,a/2+4,16,.6,8,16777215);for(let o=0;o<16;o++)n.box(-7.5+o,3.6,a/2+8,.3,.3,.3,o%2?16769120:16777215);return{parts:nn(e,n),radius:0,max:40}}function wx(i){const t=new ut,e=i.range(10,16),n=i.range(8,11),s=i.int(2,4),r=3.2,a=s*r;t.box(0,a/2,0,e,a,n,[16777215,16052458]);for(let h=0;h<s;h++){for(let u=-e/2+1.6;u<e/2-1;u+=2.8){const d=h*r+1.7;t.box(u,d,n/2+.03,1.1,1.6,.06,2767434),t.box(u-.8,d,n/2+.06,.45,1.6,.06,2783818),t.box(u+.8,d,n/2+.06,.45,1.6,.06,2783818)}h>0&&t.box(0,h*r+.2,n/2+.6,e*.5,.18,1.2,15788252)}const o=a+2.4,c=.6,l=[13130294,11554352];return t.quad([-e/2-c,a,n/2+c],[e/2+c,a,n/2+c],[e*.25,o,0],[-e*.25,o,0],l[0]),t.quad([e/2+c,a,-n/2-c],[-e/2-c,a,-n/2-c],[-e*.25,o,0],[e*.25,o,0],l[1]),t.tri([e/2+c,a,n/2+c],[e/2+c,a,-n/2-c],[e*.25,o,0],l[1]),t.tri([-e/2-c,a,-n/2-c],[-e/2-c,a,n/2+c],[-e*.25,o,0],l[0]),{parts:[{geo:t.build(),mat:"lit",tint:!0}],radius:0,max:60}}function Tx(){const i=new ut;return i.prism(0,0,0,1,.25,.2,5,5914150),i.prism(0,0,.6,5,.6,1.1,8,[2379820,1851428]),i.prism(0,0,5,10.5,1.1,0,8,[2775602,1984040]),{parts:nn(i),radius:.8,max:260}}function Ax(i){const t=new ut,e=i.range(18,34),n=e*.24,s=[[-n/2,0,e/2],[n/2,0,e/2],[n/2,0,-e*.25],[0,0,-e/2],[-n/2,0,-e*.25]],r=s.map(([a,,o])=>[a*1.08,2.4,o]);for(let a=0;a<s.length;a++){const o=(a+1)%s.length;t.quad(s[a],s[o],r[o],r[a],a===3||a===2?16053492:16777215)}return t.poly(r,14200968),t.box(0,3.6,e*.08,n*.75,2.4,e*.45,[16777215,15790320]),t.box(0,3.6,e*.08,n*.77,.8,e*.42,1714746),t.box(0,5.4,e*.12,n*.55,1.4,e*.25,[16777215,15790320]),t.box(0,.6,0,n*1.1,.4,e*.9,1718906),t.box(0,7.4,e*.1,.25,3,.25,13684944),{parts:nn(t),radius:0,max:40}}function Rx(){const i=new ut;i.box(0,.75,-jt/2,.8,1.5,jt,[14207144,14997176]),i.box(0,1.6,-jt/2,1,.2,jt,[13154456,15787208]);for(let t=0;t<4;t++)i.box(.41,.4+t%2*.6,-.8-t*1.4,.02,.06,1.2,12101768);return{parts:nn(i),radius:0,max:360}}const ko=15912868,fi=[13137994,12348994],fa=[14457438,13668438],a0=[15251584,14462068],o0=[11557430,10505774],Cx=[1731240,1598112],pa=[14998732,14209216],ms={road:[9077384,8287868],line:16764992,edge:16777215,rumble:[16777215,13652016]},Ix={id:"canyon",name:"GRAND CANYON",lines:["GRAND","CANYON"],night:!1,hemi:[11063551,14191184],plate:16777215,smoke:15255712,card:[12605482,16771232],music:"desert",stageNames:["ROUTE 66 DINER","PAINTED DESERT","CANYON RIM","HOOVER DAM","MONUMENT VALLEY"],fog:{color:ko,near:180,far:1200},ambient:{color:16773344,intensity:1.85},sun:{color:16769720,intensity:2.5,dir:[.6,.9,-.6]},startTime:60,extendTime:40,shadow:6965818,trafficColors:[14209216,9054752,2771594,16777215,4876858,13146688,6974066],trafficCount:14,walls:!1,offroadLimit:Z+26,build(i){const t=new ii(1966),e=J=>J,n=[pe(ms,[{w:4,c:fi,tex:ot.DIRT},{w:600,c:fa,tex:ot.SAND}],[{w:4,c:fi,tex:ot.DIRT},{w:600,c:fa,tex:ot.SAND}]),pe(ms,[{w:2,c:fi,tex:ot.DIRT},{w:24,c:[12101776,11312260],tex:ot.PAVING},{w:600,c:fa,tex:ot.SAND}],[{w:2,c:fi,tex:ot.DIRT},{w:24,c:[12101776,11312260],tex:ot.PAVING},{w:600,c:fa,tex:ot.SAND}]),pe(ms,[{w:2.5,c:fi,tex:ot.DIRT},{w:1.5,dy:16,c:o0,tex:ot.DIRT},{w:600,dy:4,c:[13135934,12347448],tex:ot.DIRT}],[{w:3,c:fi,tex:ot.DIRT},{w:6,abs:0,c:o0,tex:ot.DIRT},{w:600,abs:0,c:[11031604,10243118],tex:ot.DIRT}]),pe(ms,[{w:1,c:pa,tex:ot.CONCRETE},{w:0,dy:1.1,c:[15788248,15261904]},{w:.8,c:pa},{w:40,abs:-30,c:[13682872,12893356],tex:ot.CONCRETE},{w:600,abs:-30,c:[2783850,2519134],tex:e(ot.BAY)}],[{w:1,c:pa,tex:ot.CONCRETE},{w:0,dy:1.1,c:[15788248,15261904]},{w:.8,c:pa},{w:0,abs:34,c:[13156528,12367012]},{w:600,abs:34,c:Cx,tex:ot.BAY}]),pe(ms,[{w:4,c:fi,tex:ot.DIRT},{w:600,c:a0,tex:ot.SAND}],[{w:4,c:fi,tex:ot.DIRT},{w:600,c:a0,tex:ot.SAND}]),pe(ms,[{w:1.2,dy:.3,c:[10128002,9338486]},{w:0,dy:5,c:[10508346,9719348]},{w:0,dy:.8,c:[16765024,6967360]},{w:1.5,dy:2.8,c:[9062960,8406060]}],[{w:1.2,dy:.3,c:[10128002,9338486]},{w:0,dy:5,c:[10508346,9719348]},{w:0,dy:.8,c:[16765024,6967360]},{w:1.5,dy:2.8,c:[9062960,8406060]}],[5911590,5385762])],s=(J,at)=>at?5:J==="diner"?1:J==="rim"?2:J==="dam"?3:J==="valley"?4:0,r=new Ls(s,6);r.zone="diner",r.straight(30),r.stageFrom({zone:"diner",length:380,curvy:.55,hilly:.2,yMin:5,yMax:12},t),r.stageFrom({zone:"painted",length:400,curvy:.7,hilly:.6,yMin:5,yMax:34},t),r.stageFrom({zone:"rim",length:420,curvy:1,hilly:.5,yMin:60,yMax:90,tunnels:.14},t),r.stageFrom({zone:"dam",length:300,curvy:.3,hilly:.02,yMin:40,yMax:40},t),r.stageFrom({zone:"valley",length:440,curvy:.6,hilly:.35,yMin:5,yMax:22},t);const a=r.finish(260),o=new zs,c=o.add(pu()),l=o.add(mu()),h=[0,1,2].map(()=>o.add(gx(t))),u=o.add(xx()),d=o.add(gu()),f=o.add(ll()),g=o.add(su()),_=o.add(Ba()),m=o.add(Ds(9,16773312)),p=o.add(hl(2,t)),x=o.add(yr(10508346,16764992,7.9)),M=[{bg:16777215,fg:14690858,text:"DINER"},{bg:1718922,fg:16769088,text:"GAS"},{bg:16777215,fg:1735226,text:"MOTEL"},{bg:14690858,fg:16777215,text:"CAFE"},{bg:16769088,fg:1710618,text:"TRADING POST"}].map(J=>o.add(ru(i.add(J,2,1)))),v=[{bg:16777215,fg:1710618,text:"ROUTE 66",sub:"HISTORIC HIGHWAY",border:1710618},{bg:14690858,fg:16777215,text:"LAST GAS",sub:"80 MILES",border:16777215},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:1731256,fg:16777215,text:"CANYON",sub:"VIEWPOINT 5 MI",border:16769088},{bg:16747040,fg:16777215,text:"COLD",sub:"ROOT BEER",border:16777215}].map(J=>o.add(vr(i.add(J,2,2),9,4.5,9071178,15788248))),w=[{bg:1735226,fg:16777215,text:"FLAGSTAFF",sub:"62",border:16777215},{bg:1735226,fg:16777215,text:"LAS VEGAS",sub:"104",border:16777215},{bg:16777215,fg:1710618,text:"US",sub:"66",border:1710618}].map(J=>o.add(za(i.add(J,1,1)))),E=o.add(we(i.add({bg:16777215,fg:12597274,text:"START",stripes:1710618},4,1),14207152,12597274)),T=o.add(we(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),14207152,1727200)),C=o.add(we(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),14207152,1710618)),b=o.add(we(i.add({bg:9058842,fg:16771232,text:"GRAND CANYON",border:16771232},4,1),6965802,9058842,16771232)),S=o.add(vn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),D=o.add(vn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),W=o.add(bi(!0)),H=o.add(bi(!1)),V=Array.from({length:16},(J,at)=>o.add(dl(i.add({bg:1735226,fg:16777215,text:String(at+1),border:16777215},1,1)))),nt=ks,O=[nt.f150,nt.cherokee,nt.caprice,nt.volvo240,nt.golf,nt.w124].map(J=>o.add(zn(J))).concat([o.add(yi(12597274)),o.add(yi(1727160)),o.add(Wi(3836506))]),rt=a.segs;for(let J=10;J<rt.length;J++){const at=rt[J],j=at.props;if(at.tunnel){rt[J-1].tunnel||j.push({t:x,x:0});continue}const wt=at.zone;J%3===0&&wt!=="dam"&&j.push({t:W,x:Z+2.6},{t:H,x:-13.6}),J%167===100&&j.push({t:V[Math.min(V.length-1,Math.floor(J*6/1e3))],x:Z+3.6,r:-.3}),Math.abs(at.curve)>.0016&&J%5===0&&wt!=="dam"&&j.push(at.curve>0?{t:S,x:-16.5,r:.15}:{t:D,x:Z+5.5,r:-.15});const K=(mt,St)=>{J%4===0&&t.chance(mt)&&j.push({t:c,x:t.sign()*(Z+t.range(St,St+30)),s:t.range(.8,1.3),r:t.range(0,6)}),J%6===1&&t.chance(mt*.7)&&j.push({t:l,x:t.sign()*(Z+t.range(St,St+40)),s:t.range(.8,1.4),r:t.range(0,6)}),J%7===3&&t.chance(mt)&&j.push({t:g,x:t.sign()*(Z+t.range(5,30)),s:t.range(.3,.6),sy:.6,r:t.range(0,6),tint:12099680}),J%19===0&&t.chance(.5)&&j.push({t:f,x:t.sign()*(Z+t.range(10,40)),s:t.range(.8,2),r:t.range(0,6),tint:16756880})};if(wt==="diner")J%18===6&&t.chance(.8)&&j.push({t:t.pick(M),x:-(Z+t.range(14,18)),tint:t.pick([16777215,16771272,14217471]),r:.4}),J%18===15&&t.chance(.8)&&j.push({t:t.pick(M),x:Z+t.range(14,18),tint:t.pick([16777215,16771272,14217471]),r:-.4}),J%60===30&&j.push({t:p,x:t.sign()*(Z+t.range(40,60)),tint:t.pick([16777215,16773336]),r:t.range(-.3,.3)}),J%9===0&&j.push({t:m,x:Z+3,r:0}),J%45===20&&j.push({t:t.pick(v),x:(J%90===20?-1:1)*(Z+12),r:J%90===20?.35:-.35}),K(.25,30);else if(wt==="painted"||wt==="valley"){if(K(wt==="valley"?.45:.6,6),J%30===10&&t.chance(.85)){const mt=wt==="valley"?t.range(60,180):t.range(140,320);j.push({t:t.pick(h),x:t.sign()*(Z+mt),s:t.range(.8,1.4),sy:t.range(.8,1.3),r:t.range(0,6)})}J%70===35&&j.push({t:t.pick(v),x:(J%140===35?-1:1)*(Z+12),r:J%140===35?.35:-.35}),J%120===60&&j.push({t:t.pick(w),x:Z+3.4,r:-.2})}else wt==="rim"?(J%2===0&&j.push({t:_,x:Z+2.4}),J%5===0&&t.chance(.5)&&j.push({t:f,x:-(Z+t.range(6,18)),y:t.range(14,18),s:t.range(.6,1.4),r:t.range(0,6),tint:16752768}),J%8===2&&t.chance(.4)&&j.push({t:c,x:-(Z+t.range(8,30)),y:16,s:t.range(.8,1.2),r:t.range(0,6)}),J%26===13&&t.chance(.7)&&j.push({t:t.pick(h),x:Z+t.range(80,260),y:0,abs:!0,s:t.range(.9,1.6),sy:t.range(1.2,2),r:t.range(0,6)})):wt==="dam"&&(J%8===0&&j.push({t:m,x:Z+2.6,r:0}),J%8===4&&j.push({t:m,x:-13.6,r:Math.PI}),J%70===25&&j.push({t:d,x:Z+t.range(40,70),y:34,abs:!0}))}for(let J=1;J<a.stageStarts.length;J++)rt[a.stageStarts[J]+4].props.push({t:T,x:0});rt[8].props.push({t:E,x:0}),rt[a.stageStarts[2]+30].props.push({t:b,x:0}),rt[a.stageStarts[4]+180].props.push({t:u,x:0}),rt[a.goalSeg].props.push({t:C,x:0});const z=new Ns;z.addLayer(Us([[0,16769712],[1.5,16764044],[3.5,16298106],[6,14203056],[9,11061476],[14,7910632],[22,5019872],[35,2916052],[90,1727672]],ko),0);const tt=Fs(2500,-.7,9,150,[[1.5,16771264],[1.2,16767136],[1,16773312],[.7,16776168]],20);return z.addLayer(tt,1),z.sun={obj:tt,local:Ga(2500,-.7,9)},z.addLayer(qi(t,2350,8,[16777215,16771280,14723216]),.8),z.addLayer(kn(t,2250,10127032,220,()=>1,void 0,30),1),z.addLayer(ex(t,2100,[10109992,12081210,13661258,11557434,14715992],170,J=>Math.sin(J*3)>-.6?1:.4,26),1),z.addLayer(Os(1900,ko),0),{track:a,profiles:n,props:o.defs,backdrop:z,trafficTypes:O,gateType:C}}},zo=14673652,gs=[16185855,15265528],pi=[14212840,13423326],Px=[13624562,12770542],Lx=[9079960,8158858],sr={road:[7764095,6974580],line:16777215,edge:16777215,rumble:[13642282,16777215]},Dx={id:"alps",name:"SWISS ALPS",lines:["SWISS","ALPS"],night:!1,hemi:[13162751,15265528],plate:16777215,smoke:16777215,card:[3828408,16777215],music:"alps",stageNames:["LAKESIDE VILLAGE","PINE FOREST","MOUNTAIN PASS","AVALANCHE GALLERY","GLACIER SUMMIT"],fog:{color:zo,near:160,far:1150},ambient:{color:15791359,intensity:1.8},sun:{color:16769256,intensity:2.2,dir:[.5,.8,-.7]},startTime:62,extendTime:42,shadow:8029856,trafficColors:[12593706,2771594,16777215,2779722,14196784,5921378,1710622],trafficCount:14,walls:!1,offroadLimit:Z+22,build(i){var z;const t=new ii(1991),e=[pe(sr,[{w:3,c:pi,tex:ot.SAND},{w:600,c:gs,tex:ot.SAND}],[{w:3,c:pi,tex:ot.SAND},{w:10,dy:-1.2,c:gs,tex:ot.SAND},{w:600,dy:0,c:Px,tex:ot.PLAIN}]),pe(sr,[{w:3,c:pi,tex:ot.SAND},{w:600,c:gs,tex:ot.SAND}],[{w:3,c:pi,tex:ot.SAND},{w:600,c:gs,tex:ot.SAND}]),pe(sr,[{w:2,c:pi,tex:ot.SAND},{w:3,dy:14,c:Lx,tex:ot.CONCRETE},{w:600,dy:10,c:gs,tex:ot.SAND}],[{w:3,c:pi,tex:ot.SAND},{w:30,abs:0,c:[15002356,14213356],tex:ot.SAND},{w:600,abs:0,c:gs,tex:ot.SAND}]),pe(sr,[{w:1,dy:.3,c:[10527402,10001058]},{w:0,dy:6.5,c:[13159120,12369604]},{w:1.2,dy:1.2,c:[11580088,11053744]}],[{w:1,dy:.3,c:[10527402,10001058]},{w:0,dy:6.5,c:[15266047,9079956]},{w:1.2,dy:1.2,c:[11580088,11053744]}],[8027268,7500924]),pe(sr,[{w:3,c:pi,tex:ot.SAND},{w:600,dy:3,c:[14872828,13953272],tex:ot.SAND}],[{w:3,c:pi,tex:ot.SAND},{w:600,dy:-6,c:[14872828,13953272],tex:ot.SAND}])],n=(tt,J)=>J?3:tt==="lake"?0:tt==="pass"?2:tt==="summit"?4:1,s=new Ls(n,10);s.zone="lake",s.straight(30),s.stageFrom({zone:"lake",length:380,curvy:.6,hilly:.1,yMin:8,yMax:12},t),s.stageFrom({zone:"forest",length:400,curvy:.8,hilly:.6,yMin:10,yMax:45},t),s.stageFrom({zone:"pass",length:420,curvy:1,hilly:1,yMin:45,yMax:110},t),s.stageFrom({zone:"gallery",length:380,curvy:.8,hilly:.4,yMin:85,yMax:115,tunnels:.45},t),s.stageFrom({zone:"summit",length:420,curvy:.7,hilly:.5,yMin:100,yMax:140},t);const r=s.finish(260),a=new zs,o=a.add(_x()),c=[0,1,2].map(()=>a.add(Mx(t))),l=a.add(vx()),h=a.add(yx()),u=a.add(ll()),d=a.add(Ba(15263976,6974066)),f=a.add(Ds(8,16774352)),g=a.add(yr(10132644,16764992,8)),_=a.add(ul()),m=[{bg:13642282,fg:16777215,text:"ALPEN",sub:"CHOCOLAT",border:16777215},{bg:16777215,fg:13642282,text:"SKI",sub:"SCHOOL",border:13642282},{bg:1727160,fg:16777215,text:"FONDUE",sub:"STUBE",border:16769088},{bg:16769088,fg:13642282,text:"TURBO",sub:"MOTOR OIL",border:13642282},{bg:2783818,fg:16777215,text:"HOTEL",sub:"EDELWEISS",border:16777215}].map(tt=>a.add(vr(i.add(tt,2,2),9,4.5,6965802,15788248))),p=[{bg:1727160,fg:16777215,text:"ZERMATT",sub:"24",border:16777215},{bg:1727160,fg:16777215,text:"ST. MORITZ",sub:"58",border:16777215},{bg:1735226,fg:16777215,text:"PASS",sub:"2106 M",border:16777215}].map(tt=>a.add(za(i.add(tt,1,1)))),x=a.add(we(i.add({bg:13642282,fg:16777215,text:"START",border:16777215},4,1),9067058,13642282)),M=a.add(we(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),9067058,1727200)),v=a.add(we(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),9067058,1710618)),w=a.add(we(i.add({bg:13642282,fg:16777215,text:"WILLKOMMEN",border:16777215},4,1),9067058,13642282,16777215)),E=a.add(vn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),T=a.add(vn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),C=a.add(bi(!0)),b=a.add(bi(!1)),S=Array.from({length:16},(tt,J)=>a.add(dl(i.add({bg:1727160,fg:16777215,text:String(J+1),border:16777215},1,1)))),D=a.add(Xi(0)),W=ks,H=[W.golf,W.volvo240,W.w124,W.civic,W.cherokee].map(tt=>a.add(zn(tt))).concat([a.add(yi(13642282)),a.add(Wi(16764992)),a.add(Wi(16764992))]),V=[13642282,1727160,16769088,2787930,16743088,16777215],nt=r.segs;for(let tt=10;tt<nt.length;tt++){const J=nt[tt],at=J.props;if(J.tunnel){(!nt[tt-1].tunnel||!((z=nt[tt+1])!=null&&z.tunnel))&&at.push({t:g,x:0,r:nt[tt-1].tunnel?Math.PI:0});continue}const j=J.zone;tt%3===0&&at.push({t:C,x:Z+2.6},{t:b,x:-13.6}),tt%2===0&&j!=="lake"&&at.push({t:l,x:Z+3.8},{t:l,x:-14.8,r:Math.PI}),tt%167===100&&at.push({t:S[Math.min(S.length-1,Math.floor(tt*6/1e3))],x:Z+3.6,r:-.3}),Math.abs(J.curve)>.0016&&tt%5===0&&at.push(J.curve>0?{t:E,x:-16.5,r:.15}:{t:T,x:Z+5.5,r:-.15});const wt=(K,mt)=>{for(const St of mt)tt%2===0&&t.chance(K)&&at.push({t:o,x:St*(Z+t.range(7,60)),s:t.range(.8,1.6),r:t.range(0,6)})};j==="lake"?(wt(.35,[-1]),tt%14===3&&t.chance(.8)&&at.push({t:t.pick(c),x:-(Z+t.range(16,40)),r:t.range(.2,.6)}),tt%9===0&&at.push({t:f,x:-14,r:Math.PI}),tt%16===8&&at.push({t:_,x:Z+4.5,tint:t.pick([13642282,16777215])}),tt%5===2&&t.chance(.4)&&at.push({t:D,x:-(Z+t.range(2,4)),r:t.range(0,6),tint:t.pick(V)}),tt%50===25&&at.push({t:t.pick(m),x:-23,r:.35})):j==="forest"?(wt(.75,[-1,1]),tt%30===12&&t.chance(.6)&&at.push({t:t.pick(c),x:t.sign()*(Z+t.range(20,50)),r:t.range(-.6,.6)}),tt%60===30&&at.push({t:t.pick(m),x:(tt%120===30?-1:1)*(Z+12),r:tt%120===30?.35:-.35}),tt%120===60&&at.push({t:t.pick(p),x:Z+3.4,r:-.2})):j==="pass"||j==="gallery"?(tt%2===0&&at.push({t:d,x:Z+2.4}),tt%6===0&&t.chance(.5)&&at.push({t:o,x:-(Z+t.range(8,40)),y:j==="pass"?14:0,s:t.range(.7,1.2),r:t.range(0,6)}),tt%7===3&&t.chance(.5)&&at.push({t:u,x:-(Z+t.range(5,9)),s:t.range(.6,1.4),r:t.range(0,6),tint:11580616}),tt%9===0&&t.chance(.6)&&at.push({t:o,x:Z+t.range(30,160),y:0,abs:!0,s:t.range(1,1.8),r:t.range(0,6)}),tt%90===45&&at.push({t:h,x:t.range(-40,40),y:t.range(40,60)}),tt%120===60&&at.push({t:t.pick(p),x:Z+3.4,r:-.2})):j==="summit"&&(tt%2===0&&Math.abs(J.curve)>.001&&at.push({t:d,x:Z+2.4},{t:d,x:-13.4}),tt%11===0&&t.chance(.5)&&at.push({t:u,x:t.sign()*(Z+t.range(8,40)),s:t.range(.8,2.2),r:t.range(0,6),tint:13160676}),tt%80===40&&at.push({t:h,x:t.range(-40,40),y:t.range(30,50)}),tt%16===8&&at.push({t:_,x:t.sign()*(Z+5),tint:t.pick([13642282,16777215])}))}for(let tt=1;tt<r.stageStarts.length;tt++)nt[r.stageStarts[tt]+4].props.push({t:M,x:0});nt[8].props.push({t:x,x:0}),nt[60].props.push({t:w,x:0}),nt[r.goalSeg].props.push({t:v,x:0});const O=new Ns;O.addLayer(Us([[0,16769248],[1.5,16763088],[3.5,15778008],[6,13682924],[10,11060464],[16,8696044],[26,6067424],[40,3832016],[90,2119864]],zo),0);const rt=Fs(2500,.9,4,150,[[1.5,16767192],[1.2,16763064],[1,16773336],[.7,16776432]],20);return O.addLayer(rt,1),O.sun={obj:rt,local:Ga(2500,.9,4)},O.addLayer(qi(t,2350,10,[16777215,16773364,14207200]),.8),O.addLayer(kn(t,2250,9083588,480,()=>1,16777215,34,[8,20]),1),O.addLayer(kn(t,2100,6978216,300,tt=>Math.cos(tt*2)>-.3?1:.5,16054527,30),1),O.addLayer(kn(t,1990,2775624,70,()=>1,void 0,240,[1.2,3.5]),1),O.addLayer(Os(1900,zo),0),{track:r,profiles:e,props:a.defs,backdrop:O,trafficTypes:H,gateType:v}}},Bo=2366522,c0=[6972536,6183532],l0=[3814472,3419714],h0=[4864584,4338751],ma=[9078422,8288906],ga={road:[4079178,3552834],line:15790320,edge:15790320,rumble:[5921384,5263452]},mi=[16726666,4255999,16769088,16740400,8453984,12607743],Nx={id:"vegas",name:"LAS VEGAS STRIP",lines:["LAS VEGAS","STRIP"],night:!0,hemi:[10121440,3809344],plate:16777215,smoke:13154520,card:[1706538,16769088],music:"vegas",stageNames:["FREMONT STREET","THE STRIP","CASINO ROW","DESERT HIGHWAY","HOOVER LIGHTS"],fog:{color:Bo,near:150,far:1150},ambient:{color:13681919,intensity:1.75},sun:{color:16763104,intensity:1.5,dir:[.4,1,.8]},startTime:60,extendTime:40,shadow:2236460,trafficColors:[16777215,14692400,2763312,16769088,4235519,13656319,10132136],trafficCount:18,walls:!1,offroadLimit:Z+18,build(i){const t=new ii(1955),e=[pe(ga,[{w:.3,dy:.2,c:[11579580,11053236]},{w:6,c:c0,tex:ot.PAVING},{w:600,c:l0,tex:ot.PAVING}],[{w:.3,dy:.2,c:[11579580,11053236]},{w:6,c:c0,tex:ot.PAVING},{w:600,c:l0,tex:ot.PAVING}]),pe(ga,[{w:3,c:[5917264,5391432],tex:ot.DIRT},{w:600,c:h0,tex:ot.SAND}],[{w:3,c:[5917264,5391432],tex:ot.DIRT},{w:600,c:h0,tex:ot.SAND}]),pe(ga,[{w:1,c:ma,tex:ot.CONCRETE},{w:0,dy:1.1,c:[11052212,10262696]},{w:.8,c:ma},{w:40,abs:-20,c:[6973046,6446702],tex:ot.CONCRETE},{w:600,abs:-20,c:[1055280,923692],tex:ot.BAY}],[{w:1,c:ma,tex:ot.CONCRETE},{w:0,dy:1.1,c:[11052212,10262696]},{w:.8,c:ma},{w:0,abs:18,c:[5920358,5394014]},{w:600,abs:18,c:[924736,792634],tex:ot.BAY}]),pe(ga,[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[3420716,3025960])],n=(O,rt)=>rt?3:O==="desert"?1:O==="hoover"?2:0,s=new Ls(n,6);s.zone="fremont",s.straight(30),s.stageFrom({zone:"fremont",length:360,curvy:.5,hilly:.05,yMin:5,yMax:7},t),s.stageFrom({zone:"strip",length:440,curvy:.45,hilly:.05,yMin:5,yMax:8},t),s.stageFrom({zone:"casino",length:400,curvy:.7,hilly:.1,yMin:5,yMax:10},t),s.stageFrom({zone:"desert",length:420,curvy:.8,hilly:.6,yMin:5,yMax:40},t),s.stageFrom({zone:"hoover",length:380,curvy:.6,hilly:.2,yMin:26,yMax:40,tunnels:.12},t);const r=s.finish(260),a=new zs,c=[{bg:1052700,fg:16769088,text:"LUCKY 7",border:16726666},{bg:1052700,fg:4255999,text:"NEON",sub:"PALACE",border:4255999},{bg:1052700,fg:16726666,text:"DESERT",sub:"ROSE",border:16769088},{bg:1052700,fg:16769088,text:"GOLDEN",sub:"STAR",border:16769088},{bg:1052700,fg:8453984,text:"JACKPOT",border:8453984},{bg:1052700,fg:16777215,text:"SILVER",sub:"SPUR",border:12607743}].map((O,rt)=>a.add(bx(t,i.add(O,2,1),mi[rt%mi.length]))),h=[{bg:1052700,fg:16726666,text:"CASINO",border:16726666},{bg:1052700,fg:16769088,text:"SLOTS",sub:"24 HOURS",border:16769088},{bg:1052700,fg:4255999,text:"BUFFET",sub:"$4.99",border:4255999},{bg:1052700,fg:16777215,text:"SHOWS",sub:"TONIGHT",border:16740400},{bg:1052700,fg:16743088,text:"WEDDING",sub:"CHAPEL",border:16743088},{bg:1052700,fg:8453984,text:"MOTEL",sub:"VACANCY",border:8453984}].map((O,rt)=>a.add(Sx(i.add(O,2,2),mi[rt%mi.length],mi[(rt+2)%mi.length],t.range(10,18)))),u=[0,1,2].map(O=>a.add(Ex(t,mi[O*2%mi.length]))),d=a.add(cl()),f=a.add(Ds(10,16765056,9079448,4,!0)),g=a.add(pu()),_=a.add(mu()),m=a.add(gu()),p=[a.add(Xi(0)),a.add(Xi(1))],x=a.add(yr(6974072,16752688,7.9)),M=a.add(hu(16756784)),v=[{bg:1052700,fg:16769088,text:"WIN BIG",sub:"LOOSE SLOTS",border:16769088},{bg:14690858,fg:16777215,text:"LIVE",sub:"ELVIS SHOW",border:16777215},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:1727160,fg:16777215,text:"HOOVER DAM",sub:"TOURS",border:16769088}].map(O=>a.add(vr(i.add(O,2,2),9,4.5))),w=a.add(we(i.add({bg:16777215,fg:14690858,text:"WELCOME TO LAS VEGAS",border:16769088},4,1),14211296,16726666,16769088)),E=a.add(we(i.add({bg:1052700,fg:16769088,text:"START",border:16769088},4,1),10132136,16726666,16769088)),T=a.add(we(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),10132136,1727200,16769088)),C=a.add(we(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),10132136,1710618,16726666)),b=a.add(vn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),S=a.add(vn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),D=ks,W=[D.caprice,D.crown,D.cherokee,D.w124,D.f150].map(O=>a.add(zn(O,{night:!0}))).concat([a.add(zn(D.caprice,{taxi:!0,night:!0})),a.add(zn(D.caprice,{taxi:!0,night:!0})),a.add(Wi(16726666)),a.add(yi(2763312))]),H=[16730730,2789631,16769088,16777215,4247712,12607743],V=r.segs;for(let O=10;O<V.length;O++){const rt=V[O],z=rt.props;if(rt.tunnel){V[O-1].tunnel||z.push({t:x,x:0});continue}const tt=rt.zone;if(Math.abs(rt.curve)>.0016&&O%5===0&&tt!=="strip"&&z.push(rt.curve>0?{t:b,x:-16.5,r:.15}:{t:S,x:Z+5.5,r:-.15}),tt==="fremont"||tt==="strip"||tt==="casino"){O%7===0&&z.push({t:f,x:Z+2.4,r:0}),O%7===3&&z.push({t:f,x:-13.4,r:Math.PI}),O%6===1&&z.push({t:d,x:t.sign()*(Z+t.range(4,6)),s:t.range(1,1.3),r:t.range(0,6)}),O%4===2&&t.chance(tt==="fremont"?.6:.35)&&z.push({t:t.pick(p),x:t.sign()*(Z+t.range(2,5)),r:t.range(0,6),tint:t.pick(H)});const J=tt==="strip"?.7:tt==="casino"?.55:.3;O%24===0&&t.chance(J)&&z.push({t:t.pick(c),x:-(Z+t.range(45,90)),r:t.range(.1,.4)}),O%24===12&&t.chance(J)&&z.push({t:t.pick(c),x:Z+t.range(45,90),r:-t.range(.1,.4)}),O%10===4&&t.chance(.75)&&z.push({t:t.pick(h),x:-(Z+t.range(9,14)),r:.45}),O%10===9&&t.chance(.75)&&z.push({t:t.pick(h),x:Z+t.range(9,14),r:-.45}),O%16===6&&t.chance(.7)&&z.push({t:t.pick(u),x:t.sign()*(Z+t.range(26,34)),r:t.range(-.3,.3)})}else tt==="desert"?(O%2===0&&z.push({t:M,x:Z+2.6,y:.4},{t:M,x:-13.6,y:.4}),O%4===0&&t.chance(.5)&&z.push({t:g,x:t.sign()*(Z+t.range(6,40)),s:t.range(.8,1.3),r:t.range(0,6),tint:10132152}),O%6===3&&t.chance(.4)&&z.push({t:_,x:t.sign()*(Z+t.range(8,50)),s:t.range(.8,1.3),r:t.range(0,6),tint:10132152}),O%60===30&&z.push({t:t.pick(v),x:(O%120===30?-1:1)*(Z+12),r:O%120===30?.35:-.35}),O%90===45&&z.push({t:t.pick(h),x:Z+14,r:-.4})):tt==="hoover"&&(O%6===0&&z.push({t:f,x:Z+2.4,r:0}),O%6===3&&z.push({t:f,x:-13.4,r:Math.PI}),O%70===25&&z.push({t:m,x:Z+t.range(40,70),y:18,abs:!0}))}for(let O=1;O<r.stageStarts.length;O++)V[r.stageStarts[O]+4].props.push({t:T,x:0});V[8].props.push({t:E,x:0}),V[r.stageStarts[1]+20].props.push({t:w,x:0}),V[r.goalSeg].props.push({t:C,x:0});const nt=new Ns;return nt.addLayer(Us([[0,12606106],[1.5,10111638],[3.5,6961802],[6,4599930],[10,3023466],[18,1841240],[30,1052224],[90,328990]],Bo),0),nt.addLayer(uu(t,340),.3),nt.addLayer(Fs(2500,.8,22,60,[[1.6,4864634],[1.3,9075370],[1,16774872],[.8,16777198]],16),1),nt.addLayer(qi(t,2380,6,[6961792,4860518,13654680],-Math.PI,Math.PI,[5,14]),.7),nt.addLayer(kn(t,2250,2761284,200,()=>1,void 0,34),1),nt.addLayer(Ha(t,2050,[1709616,2235450,2761284],[16769120,16726666,4255999,16777215],170,O=>{const rt=Math.atan2(Math.sin(O),Math.cos(O));return Math.abs(rt)<1.2?1:0},.9,.5),1),nt.addLayer(Os(1900,Bo),0),{track:r,profiles:e,props:a.defs,backdrop:nt,trafficTypes:W,gateType:C}}},Go=13493490,Ho=[1341640,1208512],Di=[15260868,14471352],u0=[5941322,5282882],Vo=[14207136,13417620],d0=[9083482,8293970],rr={road:[9342616,8553100],line:16777215,edge:16777215,rumble:[14690858,16777215]},Ux={id:"monaco",name:"MONACO RIVIERA",lines:["MONACO","RIVIERA"],night:!1,hemi:[11065599,14207136],plate:16777215,smoke:16777215,card:[1735368,16777215],music:"riviera",stageNames:["HARBOUR FRONT","CASINO SQUARE","HARBOUR TUNNEL","CORNICHE CLIFFS","CAP MARTIN"],fog:{color:Go,near:170,far:1180},ambient:{color:16777215,intensity:1.9},sun:{color:16774368,intensity:2.4,dir:[-.6,1,.5]},startTime:60,extendTime:40,shadow:6052966,trafficColors:[16777215,14161944,1718922,16769088,2763310,12632264,2783818],trafficCount:16,walls:!1,offroadLimit:Z+14,build(i){const t=new ii(1929),e=[pe(rr,[{w:.3,dy:.2,c:[15790320,15263976]},{w:7,c:Di,tex:ot.PAVING},{w:600,c:[14207152,13417636],tex:ot.PAVING}],[{w:.3,dy:.2,c:[15790320,15263976]},{w:10,c:Di,tex:ot.PAVING},{w:0,abs:0,c:[13155492,12365976]},{w:600,abs:0,c:Ho,tex:ot.SEA}]),pe(rr,[{w:.3,dy:.2,c:[15790320,15263976]},{w:6,c:Di,tex:ot.PAVING},{w:600,c:u0,tex:ot.GRASS}],[{w:.3,dy:.2,c:[15790320,15263976]},{w:6,c:Di,tex:ot.PAVING},{w:600,c:u0,tex:ot.GRASS}]),pe(rr,[{w:1.2,dy:.3,c:[12105920,11579576]},{w:0,dy:5,c:[15790320,15000804]},{w:0,dy:.8,c:[16773312,9079440]},{w:1.5,dy:2.8,c:[14211292,13684948]}],[{w:1.2,dy:.3,c:[12105920,11579576]},{w:0,dy:5,c:[15790320,15000804]},{w:0,dy:.8,c:[16773312,9079440]},{w:1.5,dy:2.8,c:[14211292,13684948]}],[6974066,6447722]),pe(rr,[{w:2,c:Vo,tex:ot.DIRT},{w:2,dy:13,c:Vo,tex:ot.DIRT},{w:600,dy:8,c:d0,tex:ot.GRASS}],[{w:2,c:Di,tex:ot.PAVING},{w:8,abs:0,c:Vo,tex:ot.DIRT},{w:4,abs:0,c:[16777215,14742783],tex:ot.FOAM},{w:600,abs:0,c:Ho,tex:ot.SEA}]),pe(rr,[{w:2,c:Di,tex:ot.PAVING},{w:600,dy:6,c:d0,tex:ot.GRASS}],[{w:2,c:Di,tex:ot.PAVING},{w:14,abs:0,c:[13285514,12496e3],tex:ot.SAND},{w:600,abs:0,c:Ho,tex:ot.SEA}])],n=(j,wt)=>wt?2:j==="harbour"?0:j==="square"?1:j==="corniche"?3:4,s=new Ls(n,3);s.zone="harbour",s.straight(30),s.stageFrom({zone:"harbour",length:380,curvy:.75,hilly:.05,yMin:3,yMax:4},t),s.stageFrom({zone:"square",length:380,curvy:.9,hilly:.5,yMin:4,yMax:22},t),s.stageFrom({zone:"tunnel",length:300,curvy:.6,hilly:.1,yMin:4,yMax:8,tunnels:.9,tunnelZone:"tunnel"},t),s.stageFrom({zone:"corniche",length:440,curvy:1,hilly:.6,yMin:40,yMax:80},t),s.stageFrom({zone:"cap",length:420,curvy:.75,hilly:.3,yMin:18,yMax:34},t);const r=s.finish(260),a=new zs,o=[0,1,2,3].map(()=>a.add(wx(t))),c=a.add(Tx()),l=[0,1,2].map(()=>a.add(Ax(t))),h=a.add(Rx()),u=a.add(cl()),d=a.add(ou()),f=a.add(cu()),g=[0,1].map(j=>a.add(hl(j,t))),_=a.add(Ds(7,16774336,2767402,2)),m=a.add(Ba()),p=a.add(ul()),x=a.add(au()),M=a.add(lu(t)),v=[a.add(Xi(0)),a.add(Xi(1))],w=a.add(yr(14735556,14690858,7.9)),E=[{bg:16777215,fg:14690858,text:"GELATO",sub:"ARTIGIANALE",border:14690858},{bg:1735368,fg:16777215,text:"RIVIERA",sub:"YACHT CLUB",border:16777215},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:14690858,fg:16777215,text:"GRAND",sub:"PRIX 86",border:16777215},{bg:2783818,fg:16777215,text:"HOTEL",sub:"DE PARIS",border:16769088}].map(j=>a.add(vr(i.add(j,2,2),9,4.5))),T=[{bg:1727160,fg:16777215,text:"NICE",sub:"18",border:16777215},{bg:1727160,fg:16777215,text:"MENTON",sub:"9",border:16777215},{bg:16777215,fg:1710618,text:"ITALIA",sub:"12",border:14690858}].map(j=>a.add(za(i.add(j,1,1)))),C=a.add(we(i.add({bg:16777215,fg:14690858,text:"START",stripes:14690858},4,1),15790320,14690858)),b=a.add(we(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),15790320,1727200)),S=a.add(we(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),15790320,1710618)),D=a.add(we(i.add({bg:14690858,fg:16777215,text:"BIENVENUE A MONACO",border:16777215},4,1),16777215,14690858,16777215)),W=a.add(vn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),H=a.add(vn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),V=a.add(bi(!0)),nt=a.add(bi(!1)),O=ks,rt=[O.golf,O.civic,O.w124,O.ae86,O.volvo240].map(j=>a.add(zn(j))).concat([a.add(Wi(1735368)),a.add(yi(14690858))]),z=[16777215,1718922,14690858,16771272,4235472,16747184],tt=r.segs;for(let j=10;j<tt.length;j++){const wt=tt[j],K=wt.props;if(wt.tunnel){tt[j-1].tunnel||K.push({t:w,x:0});continue}const mt=wt.zone;Math.abs(wt.curve)>.0016&&j%5===0&&mt!=="harbour"&&K.push(wt.curve>0?{t:W,x:-16.2,r:.15}:{t:H,x:Z+5.2,r:-.15}),mt==="harbour"?(j%8===0&&K.push({t:_,x:Z+2.6,r:0},{t:_,x:-13.6,r:Math.PI}),j%6===3&&K.push({t:u,x:-(Z+t.range(4,6)),s:t.range(.9,1.2),r:t.range(0,6)}),j%7===0&&t.chance(.8)&&K.push({t:t.pick(l),x:Z+t.range(18,60),y:0,abs:!0,r:t.range(-.3,.3)+Math.PI/2}),j%13===5&&t.chance(.6)&&K.push({t:f,x:Z+t.range(70,200),y:0,abs:!0,s:t.range(.9,1.3),r:t.range(-.6,.6)}),j%9===4&&t.chance(.85)&&K.push({t:t.pick(o),x:-(Z+t.range(14,24)),tint:t.pick(Jn),r:t.range(.1,.4)}),j%16===8&&K.push({t:p,x:Z+4.5,tint:t.pick([14690858,16777215])}),j%4===1&&t.chance(.4)&&K.push({t:t.pick(v),x:t.sign()*(Z+t.range(2,5)),r:t.range(0,6),tint:t.pick(z)}),j%40===10&&K.push({t:M,x:Z+t.range(15,50),y:t.range(14,24),r:t.range(0,6)}),j%50===25&&K.push({t:t.pick(E),x:-22,r:.35})):mt==="square"||mt==="tunnel"?(j%30>3&&K.push({t:x,x:Z+9},{t:x,x:-20}),j%8===0&&K.push({t:_,x:Z+2.6,r:0},{t:_,x:-13.6,r:Math.PI}),j%8===4&&K.push({t:u,x:t.sign()*(Z+6),s:t.range(.9,1.2),r:t.range(0,6)}),j%22===11&&t.chance(.8)&&K.push({t:t.pick(g),x:t.sign()*(Z+t.range(30,60)),tint:t.pick(Jn),r:t.range(-.3,.3)}),j%7===2&&t.chance(.8)&&K.push({t:t.pick(o),x:t.sign()*(Z+t.range(14,22)),tint:t.pick(Jn),r:t.range(-.4,.4)}),j%5===1&&t.chance(.4)&&K.push({t:t.pick(v),x:t.sign()*(Z+t.range(2,5)),r:t.range(0,6),tint:t.pick(z)}),j%40===20&&K.push({t:t.pick(E),x:(j%80===20?-1:1)*(Z+11),r:j%80===20?.35:-.35})):mt==="corniche"?(j%1===0&&K.push({t:h,x:Z+2.6}),j%5===0&&t.chance(.6)&&K.push({t:c,x:-(Z+t.range(6,20)),y:13,s:t.range(.8,1.2),r:t.range(0,6)}),j%9===0&&t.chance(.5)&&K.push({t:t.pick(o),x:-(Z+t.range(14,30)),y:14,tint:t.pick(Jn),r:t.range(-.4,.4)}),j%17===0&&t.chance(.6)&&K.push({t:f,x:Z+t.range(90,260),y:0,abs:!0,s:t.range(1,1.5),r:t.range(-.6,.6)}),j%120===60&&K.push({t:t.pick(T),x:-14.2,r:.2})):(j%3===0&&K.push({t:V,x:Z+2.6},{t:nt,x:-13.6}),j%2===0&&Math.abs(wt.curve)>.0012&&K.push({t:m,x:Z+2.4}),j%4===1&&t.chance(.55)&&K.push({t:t.chance(.5)?d:c,x:-(Z+t.range(6,40)),s:t.range(.8,1.3),r:t.range(0,6)}),j%12===6&&t.chance(.6)&&K.push({t:t.pick(o),x:-(Z+t.range(18,40)),tint:t.pick(Jn),r:t.range(-.4,.4)}),j%10===5&&t.chance(.5)&&K.push({t:u,x:Z+t.range(5,9),s:t.range(.9,1.2),r:t.range(0,6)}),j%19===0&&t.chance(.6)&&K.push({t:f,x:Z+t.range(60,220),y:0,abs:!0,s:t.range(.9,1.4),r:t.range(-.6,.6)}),j%120===60&&K.push({t:t.pick(T),x:Z+3.4,r:-.2}))}for(let j=1;j<r.stageStarts.length;j++)tt[r.stageStarts[j]+4].props.push({t:b,x:0});tt[8].props.push({t:C,x:0}),tt[r.stageStarts[1]+40].props.push({t:D,x:0}),tt[r.goalSeg].props.push({t:S,x:0});const J=new Ns;J.addLayer(Us([[0,16774360],[1.4,15790304],[3,14216436],[6,11590902],[10,8440052],[16,5943534],[26,3839204],[40,2259160],[90,1333440]],Go),0);const at=Fs(2500,1.1,16,120,[[1.6,16775392],[1.2,16773320],[1,16776168],[.6,16777215]],20);return J.addLayer(at,1),J.sun={obj:at,local:Ga(2500,1.1,16)},J.addLayer(qi(t,2350,12,[16777215,16054527,13162728]),.8),J.addLayer(kn(t,2250,9083568,260,j=>Math.atan2(Math.sin(j),Math.cos(j))<.2?1:.15,void 0,30),1),J.addLayer(kn(t,2050,4880976,120,j=>Math.atan2(Math.sin(j),Math.cos(j))<0?1:0,void 0,200,[1.2,3.5]),1),J.addLayer(Ha(t,2e3,[15786184,15257776,16313560,14731432],[9085112,13148288],60,j=>{const wt=Math.atan2(Math.sin(j),Math.cos(j));return wt<-.3&&wt>-1.4?1:0},.6,.2),1),J.addLayer(du(t,1880,.4,2.2,7),1),J.addLayer(fu(t,1880,1.1,160),1),J.addLayer(Os(1900,Go),0),{track:r,profiles:e,props:a.defs,backdrop:J,trafficTypes:rt,gateType:S}}};class Ox{constructor(t,e,n){this.input=t,this.stage=e,this.onEnable=n,this.btns=[],this.pointers=new Map,this.held=new Set,this.enabled=!1,this.root=document.createElement("div"),this.root.id="touch",document.body.appendChild(this.root);const s=(a,o,c)=>{const l=document.createElement("div");return l.className=`tbtn ${a}`,l.textContent=o,this.root.appendChild(l),c&&this.btns.push({el:l,code:c}),l};s("left","◀","ArrowLeft"),s("right","▶","ArrowRight"),s("gas","GAS","ArrowUp"),s("brake","BRAKE","ArrowDown"),s("drift","DRIFT","Space"),s("pause","II","Escape"),s("radio","MUSIC","KeyN"),this.turboBtn=s("turbo",`TURBO
5`,"KeyT"),this.fireBtn=s("fire hidden","FIRE","KeyF"),this.autoBtn=s("auto",`AUTO
GAS`,""),this.rotate=document.createElement("div"),this.rotate.id="rotate",this.rotate.textContent=`PLEASE ROTATE
YOUR PHONE`,document.body.appendChild(this.rotate);const r={passive:!1};window.addEventListener("pointerdown",a=>this.down(a),r),window.addEventListener("pointermove",a=>this.move(a),r),window.addEventListener("pointerup",a=>this.up(a),r),window.addEventListener("pointercancel",a=>this.up(a),r),document.addEventListener("touchmove",a=>a.preventDefault(),r),document.addEventListener("gesturestart",a=>a.preventDefault(),r)}enable(){var e,n;if(this.enabled)return;this.enabled=!0,this.input.autoGas=!0,document.body.classList.add("touchmode"),this.onEnable();const t=document.documentElement;try{const s=((e=t.requestFullscreen)==null?void 0:e.call(t))??((n=t.webkitRequestFullscreen)==null?void 0:n.call(t));Promise.resolve(s).then(()=>{var r,a;return(a=(r=screen.orientation).lock)==null?void 0:a.call(r,"landscape")}).catch(()=>{})}catch{}}codeAt(t,e){if(!this.root.classList.contains("show"))return null;for(const n of this.btns){if(n.el.classList.contains("hidden"))continue;const s=n.el.getBoundingClientRect(),r=10;if(t>=s.left-r&&t<=s.right+r&&e>=s.top-r&&e<=s.bottom+r)return n.code}return null}sync(){const t=new Set;for(const e of this.pointers.values())e&&t.add(e);for(const e of this.held)t.has(e)||this.input.setVirtual(e,!1);for(const e of t)this.held.has(e)||this.input.setVirtual(e,!0);this.held=t;for(const e of this.btns)e.el.classList.toggle("on",t.has(e.code))}down(t){if((t.pointerType==="touch"||t.pointerType==="pen")&&this.enable(),!this.enabled)return;t.preventDefault();const e=this.autoBtn.getBoundingClientRect();if(this.root.classList.contains("show")&&t.clientX>=e.left&&t.clientX<=e.right&&t.clientY>=e.top&&t.clientY<=e.bottom){this.input.autoGas=!this.input.autoGas,this.autoBtn.classList.toggle("on",this.input.autoGas);return}const n=this.codeAt(t.clientX,t.clientY);if(this.pointers.set(t.pointerId,n),n)this.input.fireFirst();else{const s=this.stage.getBoundingClientRect();this.input.tap((t.clientX-s.left)/s.width*xt,(t.clientY-s.top)/s.height*Be)}this.sync()}move(t){if(!this.enabled||!this.pointers.has(t.pointerId))return;t.preventDefault();const e=this.codeAt(t.clientX,t.clientY);e!=="Escape"&&e!=="KeyN"&&e!=="KeyT"&&this.pointers.set(t.pointerId,e),this.sync()}up(t){this.pointers.has(t.pointerId)&&(this.pointers.delete(t.pointerId),this.sync())}setFire(t){this.fireBtn.classList.contains("hidden")===t&&this.fireBtn.classList.toggle("hidden",!t)}setTurbo(t,e){const n=`TURBO
${t}`;this.turboBtn.textContent!==n&&(this.turboBtn.textContent=n),this.turboBtn.classList.toggle("empty",t===0&&!e)}update(t){const e=this.enabled&&window.innerHeight>window.innerWidth;this.rotate.classList.toggle("show",e);const n=this.enabled&&t&&!e;return this.root.classList.contains("show")!==n&&(this.root.classList.toggle("show",n),n||(this.pointers.clear(),this.sync())),this.autoBtn.classList.toggle("on",this.input.autoGas),e}}const xa=ie.width,_a=ie.height;async function Fx(){var f;try{await document.fonts.load('16px "Press Start 2P"')}catch{}const i=document.getElementById("stage"),t=document.getElementById("gl"),e=new vg({canvas:t,antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(xa,_a,!1);const n=new xn(54,xa/_a,.5,4e3),s=[lx,mx,Ix,Dx,Nx,Ux],r=new j2,a=new Ig,o=new Lc(document.getElementById("hud")),c=new Z2(s,n,r,a,o);r.onFirstInput(()=>{a.init(),a.music("title")});const l=new Ox(r,i,()=>c.touch=!0);window.addEventListener("mousedown",g=>{if(l.enabled)return;const _=i.getBoundingClientRect();r.tap((g.clientX-_.left)/_.width*852,(g.clientY-_.top)/_.height*480)}),window.game=c,(f=window.matchMedia)!=null&&f.call(window,"(pointer: coarse)").matches&&(c.touch=!0),c.nameBox=new J2(i),c.boot();const h=()=>{const g=Math.min(window.innerWidth/xa,window.innerHeight/_a)||1,_=g>=3?Math.floor(g):g;i.style.width=`${Math.floor(xa*_)}px`,i.style.height=`${Math.floor(_a*_)}px`};window.addEventListener("resize",h),h();let u=performance.now();const d=g=>{const _=Math.max(0,Math.min(.03333333333333333,(g-u)/1e3));u=g;const m=(c.state==="race"||c.state==="countdown")&&!c.paused;l.update(m)&&m&&(c.paused=!0),l.enabled&&(l.setTurbo(c.turbos,c.turboT>0),l.setFire(c.weapons)),c.update(_),c.draw(),r.endFrame(),e.render(c.world.scene,n),requestAnimationFrame(d)};requestAnimationFrame(d)}Fx();
