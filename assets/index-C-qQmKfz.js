(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lc="170",hu=0,pl=1,uu=2,i0=1,du=2,Wn=3,pi=0,je=1,fe=2,di=0,ds=1,va=2,ml=3,gl=4,fu=5,Ii=100,pu=101,mu=102,gu=103,xu=104,_u=200,Mu=201,vu=202,yu=203,ko=204,zo=205,bu=206,Su=207,Eu=208,wu=209,Tu=210,Au=211,Ru=212,Cu=213,Pu=214,Bo=0,Go=1,Ho=2,gs=3,Vo=4,Wo=5,qo=6,Xo=7,Ca=0,Iu=1,Lu=2,fi=0,Du=1,Nu=2,Uu=3,Ou=4,Fu=5,ku=6,zu=7,s0=300,xs=301,_s=302,Yo=303,$o=304,Pa=306,ya=1e3,Ui=1001,Ko=1002,We=1003,r0=1004,mr=1005,ln=1006,za=1007,ui=1008,Zn=1009,a0=1010,o0=1011,sr=1012,Dc=1013,Oi=1014,Ln=1015,ar=1016,Nc=1017,Uc=1018,Ms=1020,c0=35902,l0=1021,h0=1022,Rn=1023,u0=1024,d0=1025,fs=1026,vs=1027,Oc=1028,Fc=1029,f0=1030,kc=1031,zc=1033,da=33776,fa=33777,pa=33778,ma=33779,Zo=35840,jo=35841,Jo=35842,Qo=35843,tc=36196,ec=37492,nc=37496,ic=37808,sc=37809,rc=37810,ac=37811,oc=37812,cc=37813,lc=37814,hc=37815,uc=37816,dc=37817,fc=37818,pc=37819,mc=37820,gc=37821,ga=36492,xc=36494,_c=36495,p0=36283,Mc=36284,vc=36285,yc=36286,Bu=3200,Gu=3201,Bc=0,Hu=1,qn="",Oe="srgb",bs="srgb-linear",Ia="linear",de="srgb",Wi=7680,xl=519,Vu=512,Wu=513,qu=514,m0=515,Xu=516,Yu=517,$u=518,Ku=519,_l=35044,Qs=35048,Ml="300 es",Yn=2e3,ba=2001;class Ss{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ba=Math.PI/180,bc=180/Math.PI;function or(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function nn(i,t,e){return Math.max(t,Math.min(e,i))}function Zu(i,t){return(i%t+t)%t}function Ga(i,t,e){return(1-e)*i+e*t}function Os(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ne{constructor(t=0,e=0){ne.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,s,r,a,o,c,l){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],x=s[1],y=s[4],v=s[7],T=s[2],E=s[5],w=s[8];return r[0]=a*_+o*x+c*T,r[3]=a*m+o*y+c*E,r[6]=a*p+o*v+c*w,r[1]=l*_+h*x+u*T,r[4]=l*m+h*y+u*E,r[7]=l*p+h*v+u*w,r[2]=d*_+f*x+g*T,r[5]=d*m+f*y+g*E,r[8]=d*p+f*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ha.makeScale(t,e)),this}rotate(t){return this.premultiply(Ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new te;function g0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ju(){const i=Sa("canvas");return i.style.display="block",i}const vl={};function tr(i){i in vl||(vl[i]=!0,console.warn(i))}function Ju(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Qu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function td(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const se={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=ps(i.r),i.g=ps(i.g),i.b=ps(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qn?Ia:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const yl=[.64,.33,.3,.6,.15,.06],bl=[.2126,.7152,.0722],Sl=[.3127,.329],El=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wl=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[bs]:{primaries:yl,whitePoint:Sl,transfer:Ia,toXYZ:El,fromXYZ:wl,luminanceCoefficients:bl,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:yl,whitePoint:Sl,transfer:de,toXYZ:El,fromXYZ:wl,luminanceCoefficients:bl,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}});let qi;class ed{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qi===void 0&&(qi=Sa("canvas")),qi.width=t.width,qi.height=t.height;const n=qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nd=0;class x0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=or(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Va(s[a].image)):r.push(Va(s[a]))}else r=Va(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ed.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let id=0;class qe extends Ss{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=Ui,s=Ui,r=ln,a=ui,o=Rn,c=Zn,l=qe.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=or(),this.name="",this.source=new x0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==s0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ya:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case Ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ya:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case Ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=s0;qe.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,n=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,v=(f+1)/2,T=(p+1)/2,E=(h+d)/4,w=(u+_)/4,C=(g+m)/4;return y>v&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=w/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=C/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=w/r,s=C/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sd extends Ss{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new x0(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends sd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Gc extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rd extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Es{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const T=Math.sqrt(y),E=Math.atan2(T,p*x);m=Math.sin(m*E)/T,o=Math.sin(o*E)/T}const v=o*x;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-o*f,t[e+2]=l*g+h*f+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,n=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wa.copy(this).projectOnVector(t),this.sub(Wa)}reflect(t){return this.sub(Wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new $,Tl=new Es;class Gi{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fs),xr.subVectors(this.max,Fs),Xi.subVectors(t.a,Fs),Yi.subVectors(t.b,Fs),$i.subVectors(t.c,Fs),ti.subVectors(Yi,Xi),ei.subVectors($i,Yi),vi.subVectors(Xi,$i);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-vi.z,vi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,vi.z,0,-vi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-vi.y,vi.x,0];return!qa(e,Xi,Yi,$i,xr)||(e=[1,0,0,0,1,0,0,0,1],!qa(e,Xi,Yi,$i,xr))?!1:(_r.crossVectors(ti,ei),e=[_r.x,_r.y,_r.z],qa(e,Xi,Yi,$i,xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fn=[new $,new $,new $,new $,new $,new $,new $,new $],yn=new $,gr=new Gi,Xi=new $,Yi=new $,$i=new $,ti=new $,ei=new $,vi=new $,Fs=new $,xr=new $,_r=new $,yi=new $;function qa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){yi.fromArray(i,r);const o=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),c=t.dot(yi),l=e.dot(yi),h=n.dot(yi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const ad=new Gi,ks=new $,Xa=new $;class Hi{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ad.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ks.subVectors(t,this.center);const e=ks.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ks.copy(t.center).add(Xa)),this.expandByPoint(ks.copy(t.center).sub(Xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new $,Ya=new $,Mr=new $,ni=new $,$a=new $,vr=new $,Ka=new $;class Hc{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ya.copy(t).add(e).multiplyScalar(.5),Mr.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(Ya);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Mr),o=ni.dot(this.direction),c=-ni.dot(Mr),l=ni.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ya).addScaledVector(Mr,d),f}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,r){$a.subVectors(e,t),vr.subVectors(n,t),Ka.crossVectors($a,vr);let a=this.direction.dot(Ka),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,t);const c=o*this.direction.dot(vr.crossVectors(ni,vr));if(c<0)return null;const l=o*this.direction.dot($a.cross(ni));if(l<0||c+l>a)return null;const h=-o*ni.dot(Ka);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),a=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(od,t,cd)}lookAt(t,e,n){const s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ii.crossVectors(n,rn),ii.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ii.crossVectors(n,rn)),ii.normalize(),yr.crossVectors(rn,ii),s[0]=ii.x,s[4]=yr.x,s[8]=rn.x,s[1]=ii.y,s[5]=yr.y,s[9]=rn.y,s[2]=ii.z,s[6]=yr.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],y=n[7],v=n[11],T=n[15],E=s[0],w=s[4],C=s[8],b=s[12],S=s[1],D=s[5],W=s[9],B=s[13],V=s[2],et=s[6],U=s[10],rt=s[14],k=s[3],tt=s[7],J=s[11],at=s[15];return r[0]=a*E+o*S+c*V+l*k,r[4]=a*w+o*D+c*et+l*tt,r[8]=a*C+o*W+c*U+l*J,r[12]=a*b+o*B+c*rt+l*at,r[1]=h*E+u*S+d*V+f*k,r[5]=h*w+u*D+d*et+f*tt,r[9]=h*C+u*W+d*U+f*J,r[13]=h*b+u*B+d*rt+f*at,r[2]=g*E+_*S+m*V+p*k,r[6]=g*w+_*D+m*et+p*tt,r[10]=g*C+_*W+m*U+p*J,r[14]=g*b+_*B+m*rt+p*at,r[3]=x*E+y*S+v*V+T*k,r[7]=x*w+y*D+v*et+T*tt,r[11]=x*C+y*W+v*U+T*J,r[15]=x*b+y*B+v*rt+T*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+_*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,y=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,v=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,T=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,E=e*x+n*y+s*v+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=x*w,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*w,t[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*w,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*w,t[4]=y*w,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*w,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*w,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*w,t[8]=v*w,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*w,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*p+e*o*p)*w,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*w,t[12]=T*w,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*w,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*m-e*o*m)*w,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,x=c*l,y=c*h,v=c*u,T=n.x,E=n.y,w=n.z;return s[0]=(1-(_+p))*T,s[1]=(f+v)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(d+p))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+y)*w,s[9]=(m-x)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ki.set(s[0],s[1],s[2]).length();const a=Ki.set(s[4],s[5],s[6]).length(),o=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);const l=1/r,h=1/a,u=1/o;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,e.setFromRotationMatrix(bn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Yn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===Yn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ba)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Yn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,f=(n+s)*h;let g,_;if(o===Yn)g=(a+r)*u,_=-2*u;else if(o===ba)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ki=new $,bn=new Nt,od=new $(0,0,0),cd=new $(1,1,1),ii=new $,yr=new $,rn=new $,Al=new Nt,Rl=new Es;class xn{constructor(t=0,e=0,n=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class _0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ld=0;const Cl=new $,Zi=new Es,zn=new Nt,br=new $,zs=new $,hd=new $,ud=new Es,Pl=new $(1,0,0),Il=new $(0,1,0),Ll=new $(0,0,1),Dl={type:"added"},dd={type:"removed"},ji={type:"childadded",child:null},Za={type:"childremoved",child:null};class Ie extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new $,e=new xn,n=new Es,s=new $(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new te}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Il,t)}rotateZ(t){return this.rotateOnAxis(Ll,t)}translateOnAxis(t,e){return Cl.copy(t).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Il,t)}translateZ(t){return this.translateOnAxis(Ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?br.copy(t):br.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(zs,br,this.up):zn.lookAt(br,zs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(zn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dl),ji.child=t,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dd),Za.child=t,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dl),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,hd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new $(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new $,Bn=new $,ja=new $,Gn=new $,Ji=new $,Qi=new $,Nl=new $,Ja=new $,Qa=new $,to=new $,eo=new Ae,no=new Ae,io=new Ae;class An{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Sn.subVectors(s,e),Bn.subVectors(n,e),ja.subVectors(t,e);const a=Sn.dot(Sn),o=Sn.dot(Bn),c=Sn.dot(ja),l=Bn.dot(Bn),h=Bn.dot(ja),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(a,Gn.y),c.addScaledVector(o,Gn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return eo.setScalar(0),no.setScalar(0),io.setScalar(0),eo.fromBufferAttribute(t,e),no.fromBufferAttribute(t,n),io.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(eo,r.x),a.addScaledVector(no,r.y),a.addScaledVector(io,r.z),a}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),Bn.subVectors(t,e),Sn.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),Sn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return An.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ji.subVectors(s,n),Qi.subVectors(r,n),Ja.subVectors(t,n);const c=Ji.dot(Ja),l=Qi.dot(Ja);if(c<=0&&l<=0)return e.copy(n);Qa.subVectors(t,s);const h=Ji.dot(Qa),u=Qi.dot(Qa);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ji,a);to.subVectors(t,r);const f=Ji.dot(to),g=Qi.dot(to);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Qi,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Nl.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Nl,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(Ji,a).addScaledVector(Qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const M0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function so(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=Zu(t,1),e=nn(e,0,1),n=nn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=so(a,r,t+1/3),this.g=so(a,r,t),this.b=so(a,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=M0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return se.fromWorkingColorSpace(Ge.copy(this),t),Math.round(nn(Ge.r*255,0,255))*65536+Math.round(nn(Ge.g*255,0,255))*256+Math.round(nn(Ge.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Ge.copy(this),e);const n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Oe){se.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,s=Ge.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Sr);const n=Ga(si.h,Sr.h,e),s=Ga(si.s,Sr.s,e),r=Ga(si.l,Sr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new Lt;Lt.NAMES=M0;let fd=0;class _i extends Ss{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=or(),this.name="",this.blending=ds,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=zo,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ko&&(n.blendSrc=this.blendSrc),this.blendDst!==zo&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ze extends _i{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new $,Er=new ne;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_l,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Er.fromBufferAttribute(this,e),Er.applyMatrix3(t),this.setXY(e,Er.x,Er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Os(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Os(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Os(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Os(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_l&&(t.usage=this.usage),t}}class v0 extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class y0 extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pd=0;const dn=new Nt,ro=new Ie,ts=new $,an=new Gi,Bs=new Gi,Ne=new $;class ke extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(g0(t)?y0:v0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return ro.lookAt(t),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(an.min,Bs.min),an.expandByPoint(Ne),Ne.addVectors(an.max,Bs.max),an.expandByPoint(Ne)):(an.expandByPoint(Bs.min),an.expandByPoint(Bs.max))}an.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ne.fromBufferAttribute(o,l),c&&(ts.fromBufferAttribute(t,l),Ne.add(ts)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new $,c[C]=new $;const l=new $,h=new $,u=new $,d=new ne,f=new ne,g=new ne,_=new $,m=new $;function p(C,b,S){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[C].add(_),o[b].add(_),o[S].add(_),c[C].add(m),c[b].add(m),c[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,b=x.length;C<b;++C){const S=x[C],D=S.start,W=S.count;for(let B=D,V=D+W;B<V;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new $,v=new $,T=new $,E=new $;function w(C){T.fromBufferAttribute(s,C),E.copy(T);const b=o[C];y.copy(b),y.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(E,b);const D=v.dot(c[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,b=x.length;C<b;++C){const S=x[C],D=S.start,W=S.count;for(let B=D,V=D+W;B<V;B+=3)w(t.getX(B+0)),w(t.getX(B+1)),w(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new $,r=new $,a=new $,o=new $,c=new $,l=new $,h=new $,u=new $;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ul=new Nt,bi=new Hc,wr=new Hi,Ol=new $,Tr=new $,Ar=new $,Rr=new $,ao=new $,Cr=new $,Fl=new $,Pr=new $;class ue extends Ie{constructor(t=new ke,e=new Ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Cr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(ao.fromBufferAttribute(u,t),a?Cr.addScaledVector(ao,h):Cr.addScaledVector(ao.sub(e),h))}e.add(Cr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(wr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(wr,Ol)===null||bi.origin.distanceToSquared(Ol)>(t.far-t.near)**2))&&(Ul.copy(r).invert(),bi.copy(t.ray).applyMatrix4(Ul),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,T=y;v<T;v+=3){const E=o.getX(v),w=o.getX(v+1),C=o.getX(v+2);s=Ir(this,p,t,n,l,h,u,E,w,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);s=Ir(this,a,t,n,l,h,u,x,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,T=y;v<T;v+=3){const E=v,w=v+1,C=v+2;s=Ir(this,p,t,n,l,h,u,E,w,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,y=m+1,v=m+2;s=Ir(this,a,t,n,l,h,u,x,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function md(i,t,e,n,s,r,a,o){let c;if(t.side===je?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===pi,o),c===null)return null;Pr.copy(o),Pr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Pr);return l<e.near||l>e.far?null:{distance:l,point:Pr.clone(),object:i}}function Ir(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Tr),i.getVertexPosition(c,Ar),i.getVertexPosition(l,Rr);const h=md(i,t,e,n,Tr,Ar,Rr,Fl);if(h){const u=new $;An.getBarycoord(Fl,Tr,Ar,Rr,u),s&&(h.uv=An.getInterpolatedAttribute(s,o,c,l,u,new ne)),r&&(h.uv1=An.getInterpolatedAttribute(r,o,c,l,u,new ne)),a&&(h.normal=An.getInterpolatedAttribute(a,o,c,l,u,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new $,materialIndex:0};An.getNormal(Tr,Ar,Rr,d.normal),h.face=d,h.barycoord=u}return h}class cr extends ke{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2));function g(_,m,p,x,y,v,T,E,w,C,b){const S=v/w,D=T/C,W=v/2,B=T/2,V=E/2,et=w+1,U=C+1;let rt=0,k=0;const tt=new $;for(let J=0;J<U;J++){const at=J*D-B;for(let j=0;j<et;j++){const Tt=j*S-W;tt[_]=Tt*x,tt[m]=at*y,tt[p]=V,l.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[p]=E>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(j/w),u.push(1-J/C),rt+=1}}for(let J=0;J<C;J++)for(let at=0;at<w;at++){const j=d+at+et*J,Tt=d+at+et*(J+1),K=d+(at+1)+et*(J+1),ft=d+(at+1)+et*J;c.push(j,Tt,ft),c.push(Tt,K,ft),k+=6}o.addGroup(f,k,b),f+=k,d+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ys(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){const t={};for(let e=0;e<i.length;e++){const n=ys(i[e]);for(const s in n)t[s]=n[s]}return t}function gd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function b0(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const xd={clone:ys,merge:$e};var _d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends _i{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_d,this.fragmentShader=Md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=gd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class S0 extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new $,kl=new ne,zl=new ne;class mn extends S0{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bc*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,kl,zl),e.subVectors(zl,kl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ba*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const es=-90,ns=1;class vd extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(es,ns,t,e);s.layers=this.layers,this.add(s);const r=new mn(es,ns,t,e);r.layers=this.layers,this.add(r);const a=new mn(es,ns,t,e);a.layers=this.layers,this.add(a);const o=new mn(es,ns,t,e);o.layers=this.layers,this.add(o);const c=new mn(es,ns,t,e);c.layers=this.layers,this.add(c);const l=new mn(es,ns,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class E0 extends qe{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:xs,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yd extends Fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new E0(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cr(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:di});r.uniforms.tEquirect.value=e;const a=new ue(s,r),o=e.minFilter;return e.minFilter===ui&&(e.minFilter=ln),new vd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const oo=new $,bd=new $,Sd=new te;class Ci{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=oo.subVectors(n,e).cross(bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(oo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Sd.getNormalMatrix(t),s=this.coplanarPoint(oo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Hi,Lr=new $;class Vc{constructor(t=new Ci,e=new Ci,n=new Ci,s=new Ci,r=new Ci,a=new Ci){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],x=s[13],y=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,m-f,v-p).normalize(),n[1].setComponents(c+r,d+l,m+f,v+p).normalize(),n[2].setComponents(c+a,d+h,m+g,v+x).normalize(),n[3].setComponents(c-a,d-h,m-g,v-x).normalize(),n[4].setComponents(c-o,d-u,m-_,v-y).normalize(),e===Yn)n[5].setComponents(c+o,d+u,m+_,v+y).normalize();else if(e===ba)n[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Lr.x=s.normal.x>0?t.max.x:t.min.x,Lr.y=s.normal.y>0?t.max.y:t.min.y,Lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function w0(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ed(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class La extends ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*d-a;for(let y=0;y<l;y++){const v=y*u-r;g.push(v,-x,0),_.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const y=x+l*p,v=x+l*(p+1),T=x+1+l*(p+1),E=x+1+l*p;f.push(y,v,E),f.push(v,T,E)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.width,t.height,t.widthSegments,t.heightSegments)}}var wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Td=`#ifdef USE_ALPHAHASH
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
#endif`,Ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Id=`#ifdef USE_AOMAP
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
#endif`,Ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dd=`#ifdef USE_BATCHING
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
#endif`,Nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kd=`#ifdef USE_IRIDESCENCE
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
#endif`,zd=`#ifdef USE_BUMPMAP
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
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$d=`#define PI 3.141592653589793
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
} // validated`,Kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zd=`vec3 transformedNormal = objectNormal;
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
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",nf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ff=`#ifdef USE_GRADIENTMAP
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
}`,pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xf=`uniform bool receiveShadow;
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
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,Mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sf=`PhysicalMaterial material;
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
#endif`,Ef=`struct PhysicalMaterial {
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
}`,wf=`
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
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uf=`#if defined( USE_POINTS_UV )
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
#endif`,Of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`#ifdef USE_MORPHTARGETS
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
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$f=`#ifdef USE_NORMALMAP
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
#endif`,Kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hp=`float getShadowMask() {
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
}`,up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mp=`#ifdef USE_TRANSMISSION
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
#endif`,vp=`#ifdef USE_TRANSMISSION
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`#include <common>
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
}`,Lp=`#if DEPTH_PACKING == 3200
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
}`,Dp=`#define DISTANCE
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
}`,Np=`#define DISTANCE
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`uniform float scale;
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
}`,kp=`uniform vec3 diffuse;
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
}`,zp=`#include <common>
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
}`,Bp=`uniform vec3 diffuse;
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
}`,Gp=`#define LAMBERT
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
}`,Hp=`#define LAMBERT
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
}`,Vp=`#define MATCAP
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
}`,Wp=`#define MATCAP
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
}`,qp=`#define NORMAL
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
}`,Xp=`#define NORMAL
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
}`,Yp=`#define PHONG
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
}`,$p=`#define PHONG
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
}`,Kp=`#define STANDARD
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
}`,Zp=`#define STANDARD
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
}`,jp=`#define TOON
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
}`,Jp=`#define TOON
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
}`,Qp=`uniform float size;
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
}`,tm=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,nm=`uniform vec3 color;
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
}`,im=`uniform float rotation;
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
}`,sm=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:wd,alphahash_pars_fragment:Td,alphamap_fragment:Ad,alphamap_pars_fragment:Rd,alphatest_fragment:Cd,alphatest_pars_fragment:Pd,aomap_fragment:Id,aomap_pars_fragment:Ld,batching_pars_vertex:Dd,batching_vertex:Nd,begin_vertex:Ud,beginnormal_vertex:Od,bsdfs:Fd,iridescence_fragment:kd,bumpmap_pars_fragment:zd,clipping_planes_fragment:Bd,clipping_planes_pars_fragment:Gd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:Vd,color_fragment:Wd,color_pars_fragment:qd,color_pars_vertex:Xd,color_vertex:Yd,common:$d,cube_uv_reflection_fragment:Kd,defaultnormal_vertex:Zd,displacementmap_pars_vertex:jd,displacementmap_vertex:Jd,emissivemap_fragment:Qd,emissivemap_pars_fragment:tf,colorspace_fragment:ef,colorspace_pars_fragment:nf,envmap_fragment:sf,envmap_common_pars_fragment:rf,envmap_pars_fragment:af,envmap_pars_vertex:of,envmap_physical_pars_fragment:_f,envmap_vertex:cf,fog_vertex:lf,fog_pars_vertex:hf,fog_fragment:uf,fog_pars_fragment:df,gradientmap_pars_fragment:ff,lightmap_pars_fragment:pf,lights_lambert_fragment:mf,lights_lambert_pars_fragment:gf,lights_pars_begin:xf,lights_toon_fragment:Mf,lights_toon_pars_fragment:vf,lights_phong_fragment:yf,lights_phong_pars_fragment:bf,lights_physical_fragment:Sf,lights_physical_pars_fragment:Ef,lights_fragment_begin:wf,lights_fragment_maps:Tf,lights_fragment_end:Af,logdepthbuf_fragment:Rf,logdepthbuf_pars_fragment:Cf,logdepthbuf_pars_vertex:Pf,logdepthbuf_vertex:If,map_fragment:Lf,map_pars_fragment:Df,map_particle_fragment:Nf,map_particle_pars_fragment:Uf,metalnessmap_fragment:Of,metalnessmap_pars_fragment:Ff,morphinstance_vertex:kf,morphcolor_vertex:zf,morphnormal_vertex:Bf,morphtarget_pars_vertex:Gf,morphtarget_vertex:Hf,normal_fragment_begin:Vf,normal_fragment_maps:Wf,normal_pars_fragment:qf,normal_pars_vertex:Xf,normal_vertex:Yf,normalmap_pars_fragment:$f,clearcoat_normal_fragment_begin:Kf,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:jf,iridescence_pars_fragment:Jf,opaque_fragment:Qf,packing:tp,premultiplied_alpha_fragment:ep,project_vertex:np,dithering_fragment:ip,dithering_pars_fragment:sp,roughnessmap_fragment:rp,roughnessmap_pars_fragment:ap,shadowmap_pars_fragment:op,shadowmap_pars_vertex:cp,shadowmap_vertex:lp,shadowmask_pars_fragment:hp,skinbase_vertex:up,skinning_pars_vertex:dp,skinning_vertex:fp,skinnormal_vertex:pp,specularmap_fragment:mp,specularmap_pars_fragment:gp,tonemapping_fragment:xp,tonemapping_pars_fragment:_p,transmission_fragment:Mp,transmission_pars_fragment:vp,uv_pars_fragment:yp,uv_pars_vertex:bp,uv_vertex:Sp,worldpos_vertex:Ep,background_vert:wp,background_frag:Tp,backgroundCube_vert:Ap,backgroundCube_frag:Rp,cube_vert:Cp,cube_frag:Pp,depth_vert:Ip,depth_frag:Lp,distanceRGBA_vert:Dp,distanceRGBA_frag:Np,equirect_vert:Up,equirect_frag:Op,linedashed_vert:Fp,linedashed_frag:kp,meshbasic_vert:zp,meshbasic_frag:Bp,meshlambert_vert:Gp,meshlambert_frag:Hp,meshmatcap_vert:Vp,meshmatcap_frag:Wp,meshnormal_vert:qp,meshnormal_frag:Xp,meshphong_vert:Yp,meshphong_frag:$p,meshphysical_vert:Kp,meshphysical_frag:Zp,meshtoon_vert:jp,meshtoon_frag:Jp,points_vert:Qp,points_frag:tm,shadow_vert:em,shadow_frag:nm,sprite_vert:im,sprite_frag:sm},Ct={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},In={basic:{uniforms:$e([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:$e([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:$e([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:$e([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:$e([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:$e([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:$e([Ct.points,Ct.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:$e([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:$e([Ct.common,Ct.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:$e([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:$e([Ct.sprite,Ct.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:$e([Ct.common,Ct.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:$e([Ct.lights,Ct.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};In.physical={uniforms:$e([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Dr={r:0,b:0,g:0},Ei=new xn,rm=new Nt;function am(i,t,e,n,s,r,a){const o=new Lt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1;const v=g(x);v===null?p(o,c):v&&v.isColor&&(p(v,1),y=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===Pa)?(h===void 0&&(h=new ue(new cr(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:ys(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ei.copy(y.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(Ei)),h.material.toneMapped=se.getTransfer(v.colorSpace)!==de,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ue(new La(2,2),new mi({name:"BackgroundMaterial",uniforms:ys(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=se.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(Dr,b0(i)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:_,addToRenderList:m}}function om(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,D,W,B,V){let et=!1;const U=u(B,W,D);r!==U&&(r=U,l(r.object)),et=f(S,B,W,V),et&&g(S,B,W,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(et||a)&&(a=!1,v(S,D,W,B),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,D,W){const B=W.wireframe===!0;let V=n[S.id];V===void 0&&(V={},n[S.id]=V);let et=V[D.id];et===void 0&&(et={},V[D.id]=et);let U=et[B];return U===void 0&&(U=d(c()),et[B]=U),U}function d(S){const D=[],W=[],B=[];for(let V=0;V<e;V++)D[V]=0,W[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,D,W,B){const V=r.attributes,et=D.attributes;let U=0;const rt=W.getAttributes();for(const k in rt)if(rt[k].location>=0){const J=V[k];let at=et[k];if(at===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(at=S.instanceColor)),J===void 0||J.attribute!==at||at&&J.data!==at.data)return!0;U++}return r.attributesNum!==U||r.index!==B}function g(S,D,W,B){const V={},et=D.attributes;let U=0;const rt=W.getAttributes();for(const k in rt)if(rt[k].location>=0){let J=et[k];J===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const at={};at.attribute=J,J&&J.data&&(at.data=J.data),V[k]=at,U++}r.attributes=V,r.attributesNum=U,r.index=B}function _(){const S=r.newAttributes;for(let D=0,W=S.length;D<W;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const W=r.newAttributes,B=r.enabledAttributes,V=r.attributeDivisors;W[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),V[S]!==D&&(i.vertexAttribDivisor(S,D),V[S]=D)}function x(){const S=r.newAttributes,D=r.enabledAttributes;for(let W=0,B=D.length;W<B;W++)D[W]!==S[W]&&(i.disableVertexAttribArray(W),D[W]=0)}function y(S,D,W,B,V,et,U){U===!0?i.vertexAttribIPointer(S,D,W,V,et):i.vertexAttribPointer(S,D,W,B,V,et)}function v(S,D,W,B){_();const V=B.attributes,et=W.getAttributes(),U=D.defaultAttributeValues;for(const rt in et){const k=et[rt];if(k.location>=0){let tt=V[rt];if(tt===void 0&&(rt==="instanceMatrix"&&S.instanceMatrix&&(tt=S.instanceMatrix),rt==="instanceColor"&&S.instanceColor&&(tt=S.instanceColor)),tt!==void 0){const J=tt.normalized,at=tt.itemSize,j=t.get(tt);if(j===void 0)continue;const Tt=j.buffer,K=j.type,ft=j.bytesPerElement,yt=K===i.INT||K===i.UNSIGNED_INT||tt.gpuType===Dc;if(tt.isInterleavedBufferAttribute){const lt=tt.data,Dt=lt.stride,zt=tt.offset;if(lt.isInstancedInterleavedBuffer){for(let ht=0;ht<k.locationSize;ht++)p(k.location+ht,lt.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ht=0;ht<k.locationSize;ht++)m(k.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Tt);for(let ht=0;ht<k.locationSize;ht++)y(k.location+ht,at/k.locationSize,K,J,Dt*ft,(zt+at/k.locationSize*ht)*ft,yt)}else{if(tt.isInstancedBufferAttribute){for(let lt=0;lt<k.locationSize;lt++)p(k.location+lt,tt.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let lt=0;lt<k.locationSize;lt++)m(k.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Tt);for(let lt=0;lt<k.locationSize;lt++)y(k.location+lt,at/k.locationSize,K,J,at*ft,at/k.locationSize*lt*ft,yt)}}else if(U!==void 0){const J=U[rt];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(k.location,J);break;case 3:i.vertexAttrib3fv(k.location,J);break;case 4:i.vertexAttrib4fv(k.location,J);break;default:i.vertexAttrib1fv(k.location,J)}}}}x()}function T(){C();for(const S in n){const D=n[S];for(const W in D){const B=D[W];for(const V in B)h(B[V].object),delete B[V];delete D[W]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const W in D){const B=D[W];for(const V in B)h(B[V].object),delete B[V];delete D[W]}delete n[S.id]}function w(S){for(const D in n){const W=n[D];if(W[S.id]===void 0)continue;const B=W[S.id];for(const V in B)h(B[V].object),delete B[V];delete W[S.id]}}function C(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function cm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function lm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Rn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Zn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ln&&!C)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:T,maxSamples:E}}function hm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Ci,o=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,y=x*4;let v=p.clippingState||null;c.value=v,v=h(g,d,y,f);for(let T=0;T!==y;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function um(i){let t=new WeakMap;function e(a,o){return o===Yo?a.mapping=xs:o===$o&&(a.mapping=_s),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Yo||o===$o)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new yd(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class T0 extends S0{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const us=4,Bl=[.125,.215,.35,.446,.526,.582],Li=20,co=new T0,Gl=new Lt;let lo=null,ho=0,uo=0,fo=!1;const Pi=(1+Math.sqrt(5))/2,is=1/Pi,Hl=[new $(-Pi,is,0),new $(Pi,is,0),new $(-is,0,Pi),new $(is,0,Pi),new $(0,Pi,-is),new $(0,Pi,is),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Vl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){lo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lo,ho,uo),this._renderer.xr.enabled=fo,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:ar,format:Rn,colorSpace:bs,depthBuffer:!1},s=Wl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dm(r)),this._blurMaterial=fm(r,t,e)}return s}_compileMaterial(t){const e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,co)}_sceneToCubeUV(t,e,n,s){const o=new mn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Gl),h.toneMapping=fi,h.autoClear=!1;const f=new Ze({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new ue(new cr,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Gl),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const y=this._cubeSize;Nr(s,x*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===xs||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ql());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ue(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Nr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,co)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Hl[(s-r-1)%Hl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ue(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Li-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Li;m>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const p=[];let x=0;for(let w=0;w<Li;++w){const C=w/_,b=Math.exp(-C*C/2);p.push(b),w===0?x+=b:w<m&&(x+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[s],T=3*v*(s>y-us?s-y+us:0),E=4*(this._cubeSize-v);Nr(e,T,E,3*v,2*v),c.setRenderTarget(e),c.render(u,co)}}function dm(i){const t=[],e=[],n=[];let s=i;const r=i-us+1+Bl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-us?c=Bl[a-i+us-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let E=0;E<f;E++){const w=E%3*2/3-1,C=E>2?0:-1,b=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];x.set(b,_*g*E),y.set(d,m*g*E);const S=[E,E,E,E,E,E];v.set(S,p*g*E)}const T=new ke;T.setAttribute("position",new Ve(x,_)),T.setAttribute("uv",new Ve(y,m)),T.setAttribute("faceIndex",new Ve(v,p)),t.push(T),s>us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wl(i,t,e){const n=new Fi(i,t,e);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fm(i,t,e){const n=new Float32Array(Li),s=new $(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function ql(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Xl(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Wc(){return`

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
	`}function pm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Yo||c===$o,h=c===xs||c===_s;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Vl(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Vl(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function mm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&tr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gm(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,v=x.length;y<v;y+=3){const T=x[y+0],E=x[y+1],w=x[y+2];d.push(T,E,E,w,w,T)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const T=y+0,E=y+1,w=y+2;d.push(T,E,E,w,w,T)}}else return;const m=new(g0(d)?y0:v0)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function xm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function _m(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mm(i,t,e){const n=new WeakMap,s=new Ae;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let v=o.attributes.position.count*y,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const E=new Float32Array(v*T*4*u),w=new Gc(E,v,T,u);w.type=Ln,w.needsUpdate=!0;const C=y*4;for(let S=0;S<u;S++){const D=m[S],W=p[S],B=x[S],V=v*T*4*S;for(let et=0;et<D.count;et++){const U=et*C;f===!0&&(s.fromBufferAttribute(D,et),E[V+U+0]=s.x,E[V+U+1]=s.y,E[V+U+2]=s.z,E[V+U+3]=0),g===!0&&(s.fromBufferAttribute(W,et),E[V+U+4]=s.x,E[V+U+5]=s.y,E[V+U+6]=s.z,E[V+U+7]=0),_===!0&&(s.fromBufferAttribute(B,et),E[V+U+8]=s.x,E[V+U+9]=s.y,E[V+U+10]=s.z,E[V+U+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new ne(v,T)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function vm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class A0 extends qe{constructor(t,e,n,s,r,a,o,c,l,h=fs){if(h!==fs&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fs&&(n=Oi),n===void 0&&h===vs&&(n=Ms),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:We,this.minFilter=c!==void 0?c:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const R0=new qe,Yl=new A0(1,1),C0=new Gc,P0=new rd,I0=new E0,$l=[],Kl=[],Zl=new Float32Array(16),jl=new Float32Array(9),Jl=new Float32Array(4);function ws(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=$l[s];if(r===void 0&&(r=new Float32Array(s),$l[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Da(i,t){let e=Kl[t];e===void 0&&(e=new Int32Array(t),Kl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ym(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function wm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Jl.set(n),i.uniformMatrix2fv(this.addr,!1,Jl),De(e,n)}}function Tm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;jl.set(n),i.uniformMatrix3fv(this.addr,!1,jl),De(e,n)}}function Am(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Zl.set(n),i.uniformMatrix4fv(this.addr,!1,Zl),De(e,n)}}function Rm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function Lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function Om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yl.compareFunction=m0,r=Yl):r=R0,e.setTexture2D(t||r,s)}function Fm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||P0,s)}function km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||I0,s)}function zm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||C0,s)}function Bm(i){switch(i){case 5126:return ym;case 35664:return bm;case 35665:return Sm;case 35666:return Em;case 35674:return wm;case 35675:return Tm;case 35676:return Am;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Pm;case 35669:case 35673:return Im;case 5125:return Lm;case 36294:return Dm;case 36295:return Nm;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return zm}}function Gm(i,t){i.uniform1fv(this.addr,t)}function Hm(i,t){const e=ws(t,this.size,2);i.uniform2fv(this.addr,e)}function Vm(i,t){const e=ws(t,this.size,3);i.uniform3fv(this.addr,e)}function Wm(i,t){const e=ws(t,this.size,4);i.uniform4fv(this.addr,e)}function qm(i,t){const e=ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xm(i,t){const e=ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ym(i,t){const e=ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $m(i,t){i.uniform1iv(this.addr,t)}function Km(i,t){i.uniform2iv(this.addr,t)}function Zm(i,t){i.uniform3iv(this.addr,t)}function jm(i,t){i.uniform4iv(this.addr,t)}function Jm(i,t){i.uniform1uiv(this.addr,t)}function Qm(i,t){i.uniform2uiv(this.addr,t)}function t1(i,t){i.uniform3uiv(this.addr,t)}function e1(i,t){i.uniform4uiv(this.addr,t)}function n1(i,t,e){const n=this.cache,s=t.length,r=Da(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||R0,r[a])}function i1(i,t,e){const n=this.cache,s=t.length,r=Da(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||P0,r[a])}function s1(i,t,e){const n=this.cache,s=t.length,r=Da(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||I0,r[a])}function r1(i,t,e){const n=this.cache,s=t.length,r=Da(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||C0,r[a])}function a1(i){switch(i){case 5126:return Gm;case 35664:return Hm;case 35665:return Vm;case 35666:return Wm;case 35674:return qm;case 35675:return Xm;case 35676:return Ym;case 5124:case 35670:return $m;case 35667:case 35671:return Km;case 35668:case 35672:return Zm;case 35669:case 35673:return jm;case 5125:return Jm;case 36294:return Qm;case 36295:return t1;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return r1}}class o1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bm(e.type)}}class c1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a1(e.type)}}class l1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const po=/(\w+)(\])?(\[|\.)?/g;function Ql(i,t){i.seq.push(t),i.map[t.id]=t}function h1(i,t,e){const n=i.name,s=n.length;for(po.lastIndex=0;;){const r=po.exec(n),a=po.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ql(e,l===void 0?new o1(o,i,t):new c1(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new l1(o),Ql(e,u)),e=u}}}class xa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);h1(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function th(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const u1=37297;let d1=0;function f1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const eh=new te;function p1(i){se._getMatrix(eh,se.workingColorSpace,i);const t=`mat3( ${eh.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case Ia:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+f1(i.getShaderSource(t),a)}else return s}function m1(i,t){const e=p1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function g1(i,t){let e;switch(t){case Du:e="Linear";break;case Nu:e="Reinhard";break;case Uu:e="Cineon";break;case Ou:e="ACESFilmic";break;case ku:e="AgX";break;case zu:e="Neutral";break;case Fu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ur=new $;function x1(){se.getLuminanceCoefficients(Ur);const i=Ur.x.toFixed(4),t=Ur.y.toFixed(4),e=Ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function M1(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function v1(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function er(i){return i!==""}function ih(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(i){return i.replace(y1,S1)}const b1=new Map;function S1(i,t){let e=ee[t];if(e===void 0){const n=b1.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sc(e)}const E1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(i){return i.replace(E1,w1)}function w1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ah(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function T1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===i0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===du?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function A1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xs:case _s:t="ENVMAP_TYPE_CUBE";break;case Pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function R1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function C1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ca:t="ENVMAP_BLENDING_MULTIPLY";break;case Iu:t="ENVMAP_BLENDING_MIX";break;case Lu:t="ENVMAP_BLENDING_ADD";break}return t}function P1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function I1(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=T1(e),l=A1(e),h=R1(e),u=C1(e),d=P1(e),f=_1(e),g=M1(r),_=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),p.length>0&&(p+=`
`)):(m=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),p=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?ee.tonemapping_pars_fragment:"",e.toneMapping!==fi?g1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,m1("linearToOutputTexel",e.outputColorSpace),x1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),a=Sc(a),a=ih(a,e),a=sh(a,e),o=Sc(o),o=ih(o,e),o=sh(o,e),a=rh(a),o=rh(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+a,v=x+p+o,T=th(s,s.VERTEX_SHADER,y),E=th(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(D){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(T).trim(),V=s.getShaderInfoLog(E).trim();let et=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,E);else{const rt=nh(s,T,"vertex"),k=nh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+rt+`
`+k)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(B===""||V==="")&&(U=!1);U&&(D.diagnostics={runnable:et,programLog:W,vertexShader:{log:B,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(T),s.deleteShader(E),C=new xa(s,_),b=v1(s,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,u1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}let L1=0;class D1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new N1(t),e.set(t,n)),n}}class N1{constructor(t){this.id=L1++,this.code=t,this.usedTimes=0}}function U1(i,t,e,n,s,r,a){const o=new _0,c=new D1,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,W,B){const V=W.fog,et=B.geometry,U=b.isMeshStandardMaterial?W.environment:null,rt=(b.isMeshStandardMaterial?e:t).get(b.envMap||U),k=rt&&rt.mapping===Pa?rt.image.height:null,tt=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const J=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,at=J!==void 0?J.length:0;let j=0;et.morphAttributes.position!==void 0&&(j=1),et.morphAttributes.normal!==void 0&&(j=2),et.morphAttributes.color!==void 0&&(j=3);let Tt,K,ft,yt;if(tt){const he=In[tt];Tt=he.vertexShader,K=he.fragmentShader}else Tt=b.vertexShader,K=b.fragmentShader,c.update(b),ft=c.getVertexShaderID(b),yt=c.getFragmentShaderID(b);const lt=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),zt=B.isInstancedMesh===!0,ht=B.isBatchedMesh===!0,It=!!b.map,dt=!!b.matcap,Zt=!!rt,N=!!b.aoMap,ze=!!b.lightMap,Yt=!!b.bumpMap,Jt=!!b.normalMap,Ht=!!b.displacementMap,re=!!b.emissiveMap,Ut=!!b.metalnessMap,I=!!b.roughnessMap,A=b.anisotropy>0,Q=b.clearcoat>0,M=b.dispersion>0,L=b.iridescence>0,P=b.sheen>0,F=b.transmission>0,G=A&&!!b.anisotropyMap,z=Q&&!!b.clearcoatMap,gt=Q&&!!b.clearcoatNormalMap,H=Q&&!!b.clearcoatRoughnessMap,ct=L&&!!b.iridescenceMap,xt=L&&!!b.iridescenceThicknessMap,Mt=P&&!!b.sheenColorMap,mt=P&&!!b.sheenRoughnessMap,bt=!!b.specularMap,wt=!!b.specularColorMap,Bt=!!b.specularIntensityMap,O=F&&!!b.transmissionMap,vt=F&&!!b.thicknessMap,st=!!b.gradientMap,pt=!!b.alphaMap,At=b.alphaTest>0,St=!!b.alphaHash,Wt=!!b.extensions;let be=fi;b.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(be=i.toneMapping);const Te={shaderID:tt,shaderType:b.type,shaderName:b.name,vertexShader:Tt,fragmentShader:K,defines:b.defines,customVertexShaderID:ft,customFragmentShaderID:yt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ht,batchingColor:ht&&B._colorsTexture!==null,instancing:zt,instancingColor:zt&&B.instanceColor!==null,instancingMorph:zt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:bs,alphaToCoverage:!!b.alphaToCoverage,map:It,matcap:dt,envMap:Zt,envMapMode:Zt&&rt.mapping,envMapCubeUVHeight:k,aoMap:N,lightMap:ze,bumpMap:Yt,normalMap:Jt,displacementMap:d&&Ht,emissiveMap:re,normalMapObjectSpace:Jt&&b.normalMapType===Hu,normalMapTangentSpace:Jt&&b.normalMapType===Bc,metalnessMap:Ut,roughnessMap:I,anisotropy:A,anisotropyMap:G,clearcoat:Q,clearcoatMap:z,clearcoatNormalMap:gt,clearcoatRoughnessMap:H,dispersion:M,iridescence:L,iridescenceMap:ct,iridescenceThicknessMap:xt,sheen:P,sheenColorMap:Mt,sheenRoughnessMap:mt,specularMap:bt,specularColorMap:wt,specularIntensityMap:Bt,transmission:F,transmissionMap:O,thicknessMap:vt,gradientMap:st,opaque:b.transparent===!1&&b.blending===ds&&b.alphaToCoverage===!1,alphaMap:pt,alphaTest:At,alphaHash:St,combine:b.combine,mapUv:It&&_(b.map.channel),aoMapUv:N&&_(b.aoMap.channel),lightMapUv:ze&&_(b.lightMap.channel),bumpMapUv:Yt&&_(b.bumpMap.channel),normalMapUv:Jt&&_(b.normalMap.channel),displacementMapUv:Ht&&_(b.displacementMap.channel),emissiveMapUv:re&&_(b.emissiveMap.channel),metalnessMapUv:Ut&&_(b.metalnessMap.channel),roughnessMapUv:I&&_(b.roughnessMap.channel),anisotropyMapUv:G&&_(b.anisotropyMap.channel),clearcoatMapUv:z&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:gt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(b.sheenRoughnessMap.channel),specularMapUv:bt&&_(b.specularMap.channel),specularColorMapUv:wt&&_(b.specularColorMap.channel),specularIntensityMapUv:Bt&&_(b.specularIntensityMap.channel),transmissionMapUv:O&&_(b.transmissionMap.channel),thicknessMapUv:vt&&_(b.thicknessMap.channel),alphaMapUv:pt&&_(b.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(Jt||A),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!et.attributes.uv&&(It||pt),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Dt,skinning:B.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:j,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:It&&b.map.isVideoTexture===!0&&se.getTransfer(b.map.colorSpace)===de,decodeVideoTextureEmissive:re&&b.emissiveMap.isVideoTexture===!0&&se.getTransfer(b.emissiveMap.colorSpace)===de,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fe,flipSided:b.side===je,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Wt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&b.extensions.multiDraw===!0||ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(x(S,b),y(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function x(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function y(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const S=g[b.type];let D;if(S){const W=In[S];D=xd.clone(W.uniforms)}else D=b.uniforms;return D}function T(b,S){let D;for(let W=0,B=h.length;W<B;W++){const V=h[W];if(V.cacheKey===S){D=V,++D.usedTimes;break}}return D===void 0&&(D=new I1(i,S,b,r),h.push(D)),D}function E(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function w(b){c.remove(b)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:C}}function O1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function F1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function oh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ch(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||F1),n.length>1&&n.sort(d||oh),s.length>1&&s.sort(d||oh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function k1(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new ch,i.set(n,[a])):s>=r.length?(a=new ch,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function z1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new Lt};break;case"SpotLight":e={position:new $,direction:new $,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function B1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let G1=0;function H1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function V1(i){const t=new z1,e=B1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new $);const s=new $,r=new Nt,a=new Nt;function o(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,y=0,v=0,T=0,E=0,w=0;l.sort(H1);for(let b=0,S=l.length;b<S;b++){const D=l[b],W=D.color,B=D.intensity,V=D.distance,et=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=W.r*B,u+=W.g*B,d+=W.b*B;else if(D.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(D.sh.coefficients[U],B);w++}else if(D.isDirectionalLight){const U=t.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const rt=D.shadow,k=e.get(D);k.shadowIntensity=rt.intensity,k.shadowBias=rt.bias,k.shadowNormalBias=rt.normalBias,k.shadowRadius=rt.radius,k.shadowMapSize=rt.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=et,n.directionalShadowMatrix[f]=D.shadow.matrix,x++}n.directional[f]=U,f++}else if(D.isSpotLight){const U=t.get(D);U.position.setFromMatrixPosition(D.matrixWorld),U.color.copy(W).multiplyScalar(B),U.distance=V,U.coneCos=Math.cos(D.angle),U.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),U.decay=D.decay,n.spot[_]=U;const rt=D.shadow;if(D.map&&(n.spotLightMap[T]=D.map,T++,rt.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[_]=rt.matrix,D.castShadow){const k=e.get(D);k.shadowIntensity=rt.intensity,k.shadowBias=rt.bias,k.shadowNormalBias=rt.normalBias,k.shadowRadius=rt.radius,k.shadowMapSize=rt.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=et,v++}_++}else if(D.isRectAreaLight){const U=t.get(D);U.color.copy(W).multiplyScalar(B),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=U,m++}else if(D.isPointLight){const U=t.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),U.distance=D.distance,U.decay=D.decay,D.castShadow){const rt=D.shadow,k=e.get(D);k.shadowIntensity=rt.intensity,k.shadowBias=rt.bias,k.shadowNormalBias=rt.normalBias,k.shadowRadius=rt.radius,k.shadowMapSize=rt.mapSize,k.shadowCameraNear=rt.camera.near,k.shadowCameraFar=rt.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=D.shadow.matrix,y++}n.point[g]=U,g++}else if(D.isHemisphereLight){const U=t.get(D);U.skyColor.copy(D.color).multiplyScalar(B),U.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[p]=U,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==T||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=T,C.numLightProbes=w,n.version=G1++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const y=l[p];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function lh(i){const t=new V1(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function W1(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new lh(i),t.set(s,[o])):r>=a.length?(o=new lh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class q1 extends _i{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class X1 extends _i{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
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
}`;function K1(i,t,e){let n=new Vc;const s=new ne,r=new ne,a=new Ae,o=new q1({depthPacking:Gu}),c=new X1,l={},h=e.maxTextureSize,u={[pi]:je,[je]:pi,[fe]:fe},d=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:Y1,fragmentShader:$1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ke;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ue(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i0;let p=this.type;this.render=function(E,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),W=i.state;W.setBlending(di),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const B=p!==Wn&&this.type===Wn,V=p===Wn&&this.type!==Wn;for(let et=0,U=E.length;et<U;et++){const rt=E[et],k=rt.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const tt=k.getFrameExtents();if(s.multiply(tt),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,k.mapSize.y=r.y)),k.map===null||B===!0||V===!0){const at=this.type!==Wn?{minFilter:We,magFilter:We}:{};k.map!==null&&k.map.dispose(),k.map=new Fi(s.x,s.y,at),k.map.texture.name=rt.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const J=k.getViewportCount();for(let at=0;at<J;at++){const j=k.getViewport(at);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),W.viewport(a),k.updateMatrices(rt,at),n=k.getFrustum(),v(w,C,k.camera,rt,this.type)}k.isPointLightShadow!==!0&&this.type===Wn&&x(k,C),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,D)};function x(E,w){const C=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Fi(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,C,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,C,f,_,null)}function y(E,w,C,b){let S=null;const D=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)S=D;else if(S=C.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=S.uuid,B=w.uuid;let V=l[W];V===void 0&&(V={},l[W]=V);let et=V[B];et===void 0&&(et=S.clone(),V[B]=et,w.addEventListener("dispose",T)),S=et}if(S.visible=w.visible,S.wireframe=w.wireframe,b===Wn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=i.properties.get(S);W.light=C}return S}function v(E,w,C,b,S){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Wn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const B=t.update(E),V=E.material;if(Array.isArray(V)){const et=B.groups;for(let U=0,rt=et.length;U<rt;U++){const k=et[U],tt=V[k.materialIndex];if(tt&&tt.visible){const J=y(E,tt,b,S);E.onBeforeShadow(i,E,w,C,B,J,k),i.renderBufferDirect(C,null,B,J,E,k),E.onAfterShadow(i,E,w,C,B,J,k)}}}else if(V.visible){const et=y(E,V,b,S);E.onBeforeShadow(i,E,w,C,B,et,null),i.renderBufferDirect(C,null,B,et,E,null),E.onAfterShadow(i,E,w,C,B,et,null)}}const W=E.children;for(let B=0,V=W.length;B<V;B++)v(W[B],w,C,b,S)}function T(E){E.target.removeEventListener("dispose",T);for(const C in l){const b=l[C],S=E.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const Z1={[Bo]:Go,[Ho]:qo,[Vo]:Xo,[gs]:Wo,[Go]:Bo,[qo]:Ho,[Xo]:Vo,[Wo]:gs};function j1(i,t){function e(){let O=!1;const vt=new Ae;let st=null;const pt=new Ae(0,0,0,0);return{setMask:function(At){st!==At&&!O&&(i.colorMask(At,At,At,At),st=At)},setLocked:function(At){O=At},setClear:function(At,St,Wt,be,Te){Te===!0&&(At*=be,St*=be,Wt*=be),vt.set(At,St,Wt,be),pt.equals(vt)===!1&&(i.clearColor(At,St,Wt,be),pt.copy(vt))},reset:function(){O=!1,st=null,pt.set(-1,0,0,0)}}}function n(){let O=!1,vt=!1,st=null,pt=null,At=null;return{setReversed:function(St){if(vt!==St){const Wt=t.get("EXT_clip_control");vt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const be=At;At=null,this.setClear(be)}vt=St},getReversed:function(){return vt},setTest:function(St){St?lt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(St){st!==St&&!O&&(i.depthMask(St),st=St)},setFunc:function(St){if(vt&&(St=Z1[St]),pt!==St){switch(St){case Bo:i.depthFunc(i.NEVER);break;case Go:i.depthFunc(i.ALWAYS);break;case Ho:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case Wo:i.depthFunc(i.GEQUAL);break;case qo:i.depthFunc(i.GREATER);break;case Xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=St}},setLocked:function(St){O=St},setClear:function(St){At!==St&&(vt&&(St=1-St),i.clearDepth(St),At=St)},reset:function(){O=!1,st=null,pt=null,At=null,vt=!1}}}function s(){let O=!1,vt=null,st=null,pt=null,At=null,St=null,Wt=null,be=null,Te=null;return{setTest:function(he){O||(he?lt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(he){vt!==he&&!O&&(i.stencilMask(he),vt=he)},setFunc:function(he,Mn,Un){(st!==he||pt!==Mn||At!==Un)&&(i.stencilFunc(he,Mn,Un),st=he,pt=Mn,At=Un)},setOp:function(he,Mn,Un){(St!==he||Wt!==Mn||be!==Un)&&(i.stencilOp(he,Mn,Un),St=he,Wt=Mn,be=Un)},setLocked:function(he){O=he},setClear:function(he){Te!==he&&(i.clearStencil(he),Te=he)},reset:function(){O=!1,vt=null,st=null,pt=null,At=null,St=null,Wt=null,be=null,Te=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,T=null,E=null,w=new Lt(0,0,0),C=0,b=!1,S=null,D=null,W=null,B=null,V=null;const et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,rt=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(k)[1]),U=rt>=1):k.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),U=rt>=2);let tt=null,J={};const at=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),Tt=new Ae().fromArray(at),K=new Ae().fromArray(j);function ft(O,vt,st,pt){const At=new Uint8Array(4),St=i.createTexture();i.bindTexture(O,St),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<st;Wt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(vt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return St}const yt={};yt[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(gs),Yt(!1),Jt(pl),lt(i.CULL_FACE),N(di);function lt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Dt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function zt(O,vt){return u[O]!==vt?(i.bindFramebuffer(O,vt),u[O]=vt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function ht(O,vt){let st=f,pt=!1;if(O){st=d.get(vt),st===void 0&&(st=[],d.set(vt,st));const At=O.textures;if(st.length!==At.length||st[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Wt=At.length;St<Wt;St++)st[St]=i.COLOR_ATTACHMENT0+St;st.length=At.length,pt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,pt=!0);pt&&i.drawBuffers(st)}function It(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const dt={[Ii]:i.FUNC_ADD,[pu]:i.FUNC_SUBTRACT,[mu]:i.FUNC_REVERSE_SUBTRACT};dt[gu]=i.MIN,dt[xu]=i.MAX;const Zt={[_u]:i.ZERO,[Mu]:i.ONE,[vu]:i.SRC_COLOR,[ko]:i.SRC_ALPHA,[Tu]:i.SRC_ALPHA_SATURATE,[Eu]:i.DST_COLOR,[bu]:i.DST_ALPHA,[yu]:i.ONE_MINUS_SRC_COLOR,[zo]:i.ONE_MINUS_SRC_ALPHA,[wu]:i.ONE_MINUS_DST_COLOR,[Su]:i.ONE_MINUS_DST_ALPHA,[Au]:i.CONSTANT_COLOR,[Ru]:i.ONE_MINUS_CONSTANT_COLOR,[Cu]:i.CONSTANT_ALPHA,[Pu]:i.ONE_MINUS_CONSTANT_ALPHA};function N(O,vt,st,pt,At,St,Wt,be,Te,he){if(O===di){_===!0&&(Dt(i.BLEND),_=!1);return}if(_===!1&&(lt(i.BLEND),_=!0),O!==fu){if(O!==m||he!==b){if((p!==Ii||v!==Ii)&&(i.blendEquation(i.FUNC_ADD),p=Ii,v=Ii),he)switch(O){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case va:i.blendFunc(i.ONE,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case va:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,y=null,T=null,E=null,w.set(0,0,0),C=0,m=O,b=he}return}At=At||vt,St=St||st,Wt=Wt||pt,(vt!==p||At!==v)&&(i.blendEquationSeparate(dt[vt],dt[At]),p=vt,v=At),(st!==x||pt!==y||St!==T||Wt!==E)&&(i.blendFuncSeparate(Zt[st],Zt[pt],Zt[St],Zt[Wt]),x=st,y=pt,T=St,E=Wt),(be.equals(w)===!1||Te!==C)&&(i.blendColor(be.r,be.g,be.b,Te),w.copy(be),C=Te),m=O,b=!1}function ze(O,vt){O.side===fe?Dt(i.CULL_FACE):lt(i.CULL_FACE);let st=O.side===je;vt&&(st=!st),Yt(st),O.blending===ds&&O.transparent===!1?N(di):N(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const pt=O.stencilWrite;o.setTest(pt),pt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),re(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(O){S!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),S=O)}function Jt(O){O!==hu?(lt(i.CULL_FACE),O!==D&&(O===pl?i.cullFace(i.BACK):O===uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),D=O}function Ht(O){O!==W&&(U&&i.lineWidth(O),W=O)}function re(O,vt,st){O?(lt(i.POLYGON_OFFSET_FILL),(B!==vt||V!==st)&&(i.polygonOffset(vt,st),B=vt,V=st)):Dt(i.POLYGON_OFFSET_FILL)}function Ut(O){O?lt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function I(O){O===void 0&&(O=i.TEXTURE0+et-1),tt!==O&&(i.activeTexture(O),tt=O)}function A(O,vt,st){st===void 0&&(tt===null?st=i.TEXTURE0+et-1:st=tt);let pt=J[st];pt===void 0&&(pt={type:void 0,texture:void 0},J[st]=pt),(pt.type!==O||pt.texture!==vt)&&(tt!==st&&(i.activeTexture(st),tt=st),i.bindTexture(O,vt||yt[O]),pt.type=O,pt.texture=vt)}function Q(){const O=J[tt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function M(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function P(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function F(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function z(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function H(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(O){Tt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Tt.copy(O))}function mt(O){K.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),K.copy(O))}function bt(O,vt){let st=l.get(vt);st===void 0&&(st=new WeakMap,l.set(vt,st));let pt=st.get(O);pt===void 0&&(pt=i.getUniformBlockIndex(vt,O.name),st.set(O,pt))}function wt(O,vt){const pt=l.get(vt).get(O);c.get(vt)!==pt&&(i.uniformBlockBinding(vt,pt,O.__bindingPointIndex),c.set(vt,pt))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},tt=null,J={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,T=null,E=null,w=new Lt(0,0,0),C=0,b=!1,S=null,D=null,W=null,B=null,V=null,Tt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Dt,bindFramebuffer:zt,drawBuffers:ht,useProgram:It,setBlending:N,setMaterial:ze,setFlipSided:Yt,setCullFace:Jt,setLineWidth:Ht,setPolygonOffset:re,setScissorTest:Ut,activeTexture:I,bindTexture:A,unbindTexture:Q,compressedTexImage2D:M,compressedTexImage3D:L,texImage2D:ct,texImage3D:xt,updateUBOMapping:bt,uniformBlockBinding:wt,texStorage2D:gt,texStorage3D:H,texSubImage2D:P,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:z,scissor:Mt,viewport:mt,reset:Bt}}function hh(i,t,e,n){const s=J1(n);switch(e){case l0:return i*t;case u0:return i*t;case d0:return i*t*2;case Oc:return i*t/s.components*s.byteLength;case Fc:return i*t/s.components*s.byteLength;case f0:return i*t*2/s.components*s.byteLength;case kc:return i*t*2/s.components*s.byteLength;case h0:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case zc:return i*t*4/s.components*s.byteLength;case da:case fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jo:case Qo:return Math.max(i,16)*Math.max(t,8)/4;case Zo:case Jo:return Math.max(i,8)*Math.max(t,8)/2;case tc:case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ga:case xc:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*16;case p0:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case vc:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function J1(i){switch(i){case Zn:case a0:return{byteLength:1,components:1};case sr:case o0:case ar:return{byteLength:2,components:1};case Nc:case Uc:return{byteLength:2,components:4};case Oi:case Dc:case Ln:return{byteLength:4,components:1};case c0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Q1(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ne,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,A){return f?new OffscreenCanvas(I,A):Sa("canvas")}function _(I,A,Q){let M=1;const L=Ut(I);if((L.width>Q||L.height>Q)&&(M=Q/Math.max(L.width,L.height)),M<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const P=Math.floor(M*L.width),F=Math.floor(M*L.height);u===void 0&&(u=g(P,F));const G=A?g(P,F):u;return G.width=P,G.height=F,G.getContext("2d").drawImage(I,0,0,P,F),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+P+"x"+F+")."),G}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,A,Q,M,L=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let P=A;if(A===i.RED&&(Q===i.FLOAT&&(P=i.R32F),Q===i.HALF_FLOAT&&(P=i.R16F),Q===i.UNSIGNED_BYTE&&(P=i.R8)),A===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(P=i.R8UI),Q===i.UNSIGNED_SHORT&&(P=i.R16UI),Q===i.UNSIGNED_INT&&(P=i.R32UI),Q===i.BYTE&&(P=i.R8I),Q===i.SHORT&&(P=i.R16I),Q===i.INT&&(P=i.R32I)),A===i.RG&&(Q===i.FLOAT&&(P=i.RG32F),Q===i.HALF_FLOAT&&(P=i.RG16F),Q===i.UNSIGNED_BYTE&&(P=i.RG8)),A===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(P=i.RG8UI),Q===i.UNSIGNED_SHORT&&(P=i.RG16UI),Q===i.UNSIGNED_INT&&(P=i.RG32UI),Q===i.BYTE&&(P=i.RG8I),Q===i.SHORT&&(P=i.RG16I),Q===i.INT&&(P=i.RG32I)),A===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(P=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(P=i.RGB16UI),Q===i.UNSIGNED_INT&&(P=i.RGB32UI),Q===i.BYTE&&(P=i.RGB8I),Q===i.SHORT&&(P=i.RGB16I),Q===i.INT&&(P=i.RGB32I)),A===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(P=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(P=i.RGBA16UI),Q===i.UNSIGNED_INT&&(P=i.RGBA32UI),Q===i.BYTE&&(P=i.RGBA8I),Q===i.SHORT&&(P=i.RGBA16I),Q===i.INT&&(P=i.RGBA32I)),A===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(P=i.RGB9_E5),A===i.RGBA){const F=L?Ia:se.getTransfer(M);Q===i.FLOAT&&(P=i.RGBA32F),Q===i.HALF_FLOAT&&(P=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(P=F===de?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(P=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(P=i.RGB5_A1)}return(P===i.R16F||P===i.R32F||P===i.RG16F||P===i.RG32F||P===i.RGBA16F||P===i.RGBA32F)&&t.get("EXT_color_buffer_float"),P}function v(I,A){let Q;return I?A===null||A===Oi||A===Ms?Q=i.DEPTH24_STENCIL8:A===Ln?Q=i.DEPTH32F_STENCIL8:A===sr&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Oi||A===Ms?Q=i.DEPTH_COMPONENT24:A===Ln?Q=i.DEPTH_COMPONENT32F:A===sr&&(Q=i.DEPTH_COMPONENT16),Q}function T(I,A){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==We&&I.minFilter!==ln?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function E(I){const A=I.target;A.removeEventListener("dispose",E),C(A),A.isVideoTexture&&h.delete(A)}function w(I){const A=I.target;A.removeEventListener("dispose",w),S(A)}function C(I){const A=n.get(I);if(A.__webglInit===void 0)return;const Q=I.source,M=d.get(Q);if(M){const L=M[A.__cacheKey];L.usedTimes--,L.usedTimes===0&&b(I),Object.keys(M).length===0&&d.delete(Q)}n.remove(I)}function b(I){const A=n.get(I);i.deleteTexture(A.__webglTexture);const Q=I.source,M=d.get(Q);delete M[A.__cacheKey],a.memory.textures--}function S(I){const A=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let M=0;M<6;M++){if(Array.isArray(A.__webglFramebuffer[M]))for(let L=0;L<A.__webglFramebuffer[M].length;L++)i.deleteFramebuffer(A.__webglFramebuffer[M][L]);else i.deleteFramebuffer(A.__webglFramebuffer[M]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[M])}else{if(Array.isArray(A.__webglFramebuffer))for(let M=0;M<A.__webglFramebuffer.length;M++)i.deleteFramebuffer(A.__webglFramebuffer[M]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let M=0;M<A.__webglColorRenderbuffer.length;M++)A.__webglColorRenderbuffer[M]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[M]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Q=I.textures;for(let M=0,L=Q.length;M<L;M++){const P=n.get(Q[M]);P.__webglTexture&&(i.deleteTexture(P.__webglTexture),a.memory.textures--),n.remove(Q[M])}n.remove(I)}let D=0;function W(){D=0}function B(){const I=D;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),D+=1,I}function V(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function et(I,A){const Q=n.get(I);if(I.isVideoTexture&&Ht(I),I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){const M=I.image;if(M===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(M.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Q,I,A);return}}e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+A)}function U(I,A){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){K(Q,I,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+A)}function rt(I,A){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){K(Q,I,A);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+A)}function k(I,A){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){ft(Q,I,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+A)}const tt={[ya]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[Ko]:i.MIRRORED_REPEAT},J={[We]:i.NEAREST,[r0]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[za]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},at={[Vu]:i.NEVER,[Ku]:i.ALWAYS,[Wu]:i.LESS,[m0]:i.LEQUAL,[qu]:i.EQUAL,[$u]:i.GEQUAL,[Xu]:i.GREATER,[Yu]:i.NOTEQUAL};function j(I,A){if(A.type===Ln&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===ln||A.magFilter===za||A.magFilter===mr||A.magFilter===ui||A.minFilter===ln||A.minFilter===za||A.minFilter===mr||A.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,tt[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,tt[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,tt[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,J[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,J[A.minFilter]),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,at[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===We||A.minFilter!==mr&&A.minFilter!==ui||A.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Tt(I,A){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",E));const M=A.source;let L=d.get(M);L===void 0&&(L={},d.set(M,L));const P=V(A);if(P!==I.__cacheKey){L[P]===void 0&&(L[P]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),L[P].usedTimes++;const F=L[I.__cacheKey];F!==void 0&&(L[I.__cacheKey].usedTimes--,F.usedTimes===0&&b(A)),I.__cacheKey=P,I.__webglTexture=L[P].texture}return Q}function K(I,A,Q){let M=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(M=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(M=i.TEXTURE_3D);const L=Tt(I,A),P=A.source;e.bindTexture(M,I.__webglTexture,i.TEXTURE0+Q);const F=n.get(P);if(P.version!==F.__version||L===!0){e.activeTexture(i.TEXTURE0+Q);const G=se.getPrimaries(se.workingColorSpace),z=A.colorSpace===qn?null:se.getPrimaries(A.colorSpace),gt=A.colorSpace===qn||G===z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let H=_(A.image,!1,s.maxTextureSize);H=re(A,H);const ct=r.convert(A.format,A.colorSpace),xt=r.convert(A.type);let Mt=y(A.internalFormat,ct,xt,A.colorSpace,A.isVideoTexture);j(M,A);let mt;const bt=A.mipmaps,wt=A.isVideoTexture!==!0,Bt=F.__version===void 0||L===!0,O=P.dataReady,vt=T(A,H);if(A.isDepthTexture)Mt=v(A.format===vs,A.type),Bt&&(wt?e.texStorage2D(i.TEXTURE_2D,1,Mt,H.width,H.height):e.texImage2D(i.TEXTURE_2D,0,Mt,H.width,H.height,0,ct,xt,null));else if(A.isDataTexture)if(bt.length>0){wt&&Bt&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,bt[0].width,bt[0].height);for(let st=0,pt=bt.length;st<pt;st++)mt=bt[st],wt?O&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,mt.width,mt.height,ct,xt,mt.data):e.texImage2D(i.TEXTURE_2D,st,Mt,mt.width,mt.height,0,ct,xt,mt.data);A.generateMipmaps=!1}else wt?(Bt&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,H.width,H.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,H.width,H.height,ct,xt,H.data)):e.texImage2D(i.TEXTURE_2D,0,Mt,H.width,H.height,0,ct,xt,H.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){wt&&Bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Mt,bt[0].width,bt[0].height,H.depth);for(let st=0,pt=bt.length;st<pt;st++)if(mt=bt[st],A.format!==Rn)if(ct!==null)if(wt){if(O)if(A.layerUpdates.size>0){const At=hh(mt.width,mt.height,A.format,A.type);for(const St of A.layerUpdates){const Wt=mt.data.subarray(St*At/mt.data.BYTES_PER_ELEMENT,(St+1)*At/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,St,mt.width,mt.height,1,ct,Wt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,mt.width,mt.height,H.depth,ct,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Mt,mt.width,mt.height,H.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,mt.width,mt.height,H.depth,ct,xt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Mt,mt.width,mt.height,H.depth,0,ct,xt,mt.data)}else{wt&&Bt&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,bt[0].width,bt[0].height);for(let st=0,pt=bt.length;st<pt;st++)mt=bt[st],A.format!==Rn?ct!==null?wt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,mt.width,mt.height,ct,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Mt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?O&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,mt.width,mt.height,ct,xt,mt.data):e.texImage2D(i.TEXTURE_2D,st,Mt,mt.width,mt.height,0,ct,xt,mt.data)}else if(A.isDataArrayTexture)if(wt){if(Bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Mt,H.width,H.height,H.depth),O)if(A.layerUpdates.size>0){const st=hh(H.width,H.height,A.format,A.type);for(const pt of A.layerUpdates){const At=H.data.subarray(pt*st/H.data.BYTES_PER_ELEMENT,(pt+1)*st/H.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,H.width,H.height,1,ct,xt,At)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,ct,xt,H.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,H.width,H.height,H.depth,0,ct,xt,H.data);else if(A.isData3DTexture)wt?(Bt&&e.texStorage3D(i.TEXTURE_3D,vt,Mt,H.width,H.height,H.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,ct,xt,H.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,H.width,H.height,H.depth,0,ct,xt,H.data);else if(A.isFramebufferTexture){if(Bt)if(wt)e.texStorage2D(i.TEXTURE_2D,vt,Mt,H.width,H.height);else{let st=H.width,pt=H.height;for(let At=0;At<vt;At++)e.texImage2D(i.TEXTURE_2D,At,Mt,st,pt,0,ct,xt,null),st>>=1,pt>>=1}}else if(bt.length>0){if(wt&&Bt){const st=Ut(bt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Mt,st.width,st.height)}for(let st=0,pt=bt.length;st<pt;st++)mt=bt[st],wt?O&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ct,xt,mt):e.texImage2D(i.TEXTURE_2D,st,Mt,ct,xt,mt);A.generateMipmaps=!1}else if(wt){if(Bt){const st=Ut(H);e.texStorage2D(i.TEXTURE_2D,vt,Mt,st.width,st.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,xt,H)}else e.texImage2D(i.TEXTURE_2D,0,Mt,ct,xt,H);m(A)&&p(M),F.__version=P.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ft(I,A,Q){if(A.image.length!==6)return;const M=Tt(I,A),L=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Q);const P=n.get(L);if(L.version!==P.__version||M===!0){e.activeTexture(i.TEXTURE0+Q);const F=se.getPrimaries(se.workingColorSpace),G=A.colorSpace===qn?null:se.getPrimaries(A.colorSpace),z=A.colorSpace===qn||F===G?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);const gt=A.isCompressedTexture||A.image[0].isCompressedTexture,H=A.image[0]&&A.image[0].isDataTexture,ct=[];for(let pt=0;pt<6;pt++)!gt&&!H?ct[pt]=_(A.image[pt],!0,s.maxCubemapSize):ct[pt]=H?A.image[pt].image:A.image[pt],ct[pt]=re(A,ct[pt]);const xt=ct[0],Mt=r.convert(A.format,A.colorSpace),mt=r.convert(A.type),bt=y(A.internalFormat,Mt,mt,A.colorSpace),wt=A.isVideoTexture!==!0,Bt=P.__version===void 0||M===!0,O=L.dataReady;let vt=T(A,xt);j(i.TEXTURE_CUBE_MAP,A);let st;if(gt){wt&&Bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,bt,xt.width,xt.height);for(let pt=0;pt<6;pt++){st=ct[pt].mipmaps;for(let At=0;At<st.length;At++){const St=st[At];A.format!==Rn?Mt!==null?wt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At,bt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At,0,0,St.width,St.height,Mt,mt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At,bt,St.width,St.height,0,Mt,mt,St.data)}}}else{if(st=A.mipmaps,wt&&Bt){st.length>0&&vt++;const pt=Ut(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,bt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(H){wt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,ct[pt].width,ct[pt].height,Mt,mt,ct[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,bt,ct[pt].width,ct[pt].height,0,Mt,mt,ct[pt].data);for(let At=0;At<st.length;At++){const Wt=st[At].image[pt].image;wt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At+1,0,0,Wt.width,Wt.height,Mt,mt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At+1,bt,Wt.width,Wt.height,0,Mt,mt,Wt.data)}}else{wt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Mt,mt,ct[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,bt,Mt,mt,ct[pt]);for(let At=0;At<st.length;At++){const St=st[At];wt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At+1,0,0,Mt,mt,St.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At+1,bt,Mt,mt,St.image[pt])}}}m(A)&&p(i.TEXTURE_CUBE_MAP),P.__version=L.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function yt(I,A,Q,M,L,P){const F=r.convert(Q.format,Q.colorSpace),G=r.convert(Q.type),z=y(Q.internalFormat,F,G,Q.colorSpace),gt=n.get(A),H=n.get(Q);if(H.__renderTarget=A,!gt.__hasExternalTextures){const ct=Math.max(1,A.width>>P),xt=Math.max(1,A.height>>P);L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?e.texImage3D(L,P,z,ct,xt,A.depth,0,F,G,null):e.texImage2D(L,P,z,ct,xt,0,F,G,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Jt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,M,L,H.__webglTexture,0,Yt(A)):(L===i.TEXTURE_2D||L>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,M,L,H.__webglTexture,P),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(I,A,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer){const M=A.depthTexture,L=M&&M.isDepthTexture?M.type:null,P=v(A.stencilBuffer,L),F=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=Yt(A);Jt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G,P,A.width,A.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,G,P,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,P,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,I)}else{const M=A.textures;for(let L=0;L<M.length;L++){const P=M[L],F=r.convert(P.format,P.colorSpace),G=r.convert(P.type),z=y(P.internalFormat,F,G,P.colorSpace),gt=Yt(A);Q&&Jt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,z,A.width,A.height):Jt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,z,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,z,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const M=n.get(A.depthTexture);M.__renderTarget=A,(!M.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),et(A.depthTexture,0);const L=M.__webglTexture,P=Yt(A);if(A.depthTexture.format===fs)Jt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,L,0,P):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,L,0);else if(A.depthTexture.format===vs)Jt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,L,0,P):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,L,0);else throw new Error("Unknown depthTexture format")}function zt(I){const A=n.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const M=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),M){const L=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,M.removeEventListener("dispose",L)};M.addEventListener("dispose",L),A.__depthDisposeCallback=L}A.__boundDepthTexture=M}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Dt(A.__webglFramebuffer,I)}else if(Q){A.__webglDepthbuffer=[];for(let M=0;M<6;M++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[M]),A.__webglDepthbuffer[M]===void 0)A.__webglDepthbuffer[M]=i.createRenderbuffer(),lt(A.__webglDepthbuffer[M],I,!1);else{const L=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=A.__webglDepthbuffer[M];i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,L,i.RENDERBUFFER,P)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),lt(A.__webglDepthbuffer,I,!1);else{const M=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,L),i.framebufferRenderbuffer(i.FRAMEBUFFER,M,i.RENDERBUFFER,L)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(I,A,Q){const M=n.get(I);A!==void 0&&yt(M.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&zt(I)}function It(I){const A=I.texture,Q=n.get(I),M=n.get(A);I.addEventListener("dispose",w);const L=I.textures,P=I.isWebGLCubeRenderTarget===!0,F=L.length>1;if(F||(M.__webglTexture===void 0&&(M.__webglTexture=i.createTexture()),M.__version=A.version,a.memory.textures++),P){Q.__webglFramebuffer=[];for(let G=0;G<6;G++)if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[G]=[];for(let z=0;z<A.mipmaps.length;z++)Q.__webglFramebuffer[G][z]=i.createFramebuffer()}else Q.__webglFramebuffer[G]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let G=0;G<A.mipmaps.length;G++)Q.__webglFramebuffer[G]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(F)for(let G=0,z=L.length;G<z;G++){const gt=n.get(L[G]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Jt(I)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let G=0;G<L.length;G++){const z=L[G];Q.__webglColorRenderbuffer[G]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[G]);const gt=r.convert(z.format,z.colorSpace),H=r.convert(z.type),ct=y(z.internalFormat,gt,H,z.colorSpace,I.isXRRenderTarget===!0),xt=Yt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,ct,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,Q.__webglColorRenderbuffer[G])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(Q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(P){e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture),j(i.TEXTURE_CUBE_MAP,A);for(let G=0;G<6;G++)if(A.mipmaps&&A.mipmaps.length>0)for(let z=0;z<A.mipmaps.length;z++)yt(Q.__webglFramebuffer[G][z],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+G,z);else yt(Q.__webglFramebuffer[G],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);m(A)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(F){for(let G=0,z=L.length;G<z;G++){const gt=L[G],H=n.get(gt);e.bindTexture(i.TEXTURE_2D,H.__webglTexture),j(i.TEXTURE_2D,gt),yt(Q.__webglFramebuffer,I,gt,i.COLOR_ATTACHMENT0+G,i.TEXTURE_2D,0),m(gt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let G=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(G=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(G,M.__webglTexture),j(G,A),A.mipmaps&&A.mipmaps.length>0)for(let z=0;z<A.mipmaps.length;z++)yt(Q.__webglFramebuffer[z],I,A,i.COLOR_ATTACHMENT0,G,z);else yt(Q.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,G,0);m(A)&&p(G),e.unbindTexture()}I.depthBuffer&&zt(I)}function dt(I){const A=I.textures;for(let Q=0,M=A.length;Q<M;Q++){const L=A[Q];if(m(L)){const P=x(I),F=n.get(L).__webglTexture;e.bindTexture(P,F),p(P),e.unbindTexture()}}}const Zt=[],N=[];function ze(I){if(I.samples>0){if(Jt(I)===!1){const A=I.textures,Q=I.width,M=I.height;let L=i.COLOR_BUFFER_BIT;const P=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=n.get(I),G=A.length>1;if(G)for(let z=0;z<A.length;z++)e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,F.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,F.__webglFramebuffer);for(let z=0;z<A.length;z++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(L|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(L|=i.STENCIL_BUFFER_BIT)),G){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,F.__webglColorRenderbuffer[z]);const gt=n.get(A[z]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,gt,0)}i.blitFramebuffer(0,0,Q,M,0,0,Q,M,L,i.NEAREST),c===!0&&(Zt.length=0,N.length=0,Zt.push(i.COLOR_ATTACHMENT0+z),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Zt.push(P),N.push(P),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),G)for(let z=0;z<A.length;z++){e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,F.__webglColorRenderbuffer[z]);const gt=n.get(A[z]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.TEXTURE_2D,gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,F.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const A=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Yt(I){return Math.min(s.maxSamples,I.samples)}function Jt(I){const A=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ht(I){const A=a.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function re(I,A){const Q=I.colorSpace,M=I.format,L=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==bs&&Q!==qn&&(se.getTransfer(Q)===de?(M!==Rn||L!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),A}function Ut(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.setTexture2D=et,this.setTexture2DArray=U,this.setTexture3D=rt,this.setTextureCube=k,this.rebindTextures=ht,this.setupRenderTarget=It,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Jt}function tg(i,t){function e(n,s=qn){let r;const a=se.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===Nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===c0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===a0)return i.BYTE;if(n===o0)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===Dc)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===ar)return i.HALF_FLOAT;if(n===l0)return i.ALPHA;if(n===h0)return i.RGB;if(n===Rn)return i.RGBA;if(n===u0)return i.LUMINANCE;if(n===d0)return i.LUMINANCE_ALPHA;if(n===fs)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===Oc)return i.RED;if(n===Fc)return i.RED_INTEGER;if(n===f0)return i.RG;if(n===kc)return i.RG_INTEGER;if(n===zc)return i.RGBA_INTEGER;if(n===da||n===fa||n===pa||n===ma)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===jo||n===Jo||n===Qo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tc||n===ec||n===nc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tc||n===ec)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ic||n===sc||n===rc||n===ac||n===oc||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ic)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ac)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ga||n===xc||n===_c)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ga)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===p0||n===Mc||n===vc||n===yc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class eg extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class gn extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ng={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ng)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sg=`
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

}`;class rg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new mi({vertexShader:ig,fragmentShader:sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new La(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ag extends Ss{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new rg,m=e.getContextAttributes();let p=null,x=null;const y=[],v=[],T=new ne;let E=null;const w=new mn;w.viewport=new Ae;const C=new mn;C.viewport=new Ae;const b=[w,C],S=new eg;let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ft=y[K];return ft===void 0&&(ft=new mo,y[K]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(K){let ft=y[K];return ft===void 0&&(ft=new mo,y[K]=ft),ft.getGripSpace()},this.getHand=function(K){let ft=y[K];return ft===void 0&&(ft=new mo,y[K]=ft),ft.getHandSpace()};function B(K){const ft=v.indexOf(K.inputSource);if(ft===-1)return;const yt=y[ft];yt!==void 0&&(yt.update(K.inputSource,K.frame,l||a),yt.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",et);for(let K=0;K<y.length;K++){const ft=v[K];ft!==null&&(v[K]=null,y[K].disconnect(ft))}D=null,W=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,x=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",V),s.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const ft={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Fi(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ft=null,yt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=m.stencil?vs:fs,yt=m.stencil?Ms:Oi);const Dt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Fi(d.textureWidth,d.textureHeight,{format:Rn,type:Zn,depthTexture:new A0(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Tt.setContext(s),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function et(K){for(let ft=0;ft<K.removed.length;ft++){const yt=K.removed[ft],lt=v.indexOf(yt);lt>=0&&(v[lt]=null,y[lt].disconnect(yt))}for(let ft=0;ft<K.added.length;ft++){const yt=K.added[ft];let lt=v.indexOf(yt);if(lt===-1){for(let zt=0;zt<y.length;zt++)if(zt>=v.length){v.push(yt),lt=zt;break}else if(v[zt]===null){v[zt]=yt,lt=zt;break}if(lt===-1)break}const Dt=y[lt];Dt&&Dt.connect(yt)}}const U=new $,rt=new $;function k(K,ft,yt){U.setFromMatrixPosition(ft.matrixWorld),rt.setFromMatrixPosition(yt.matrixWorld);const lt=U.distanceTo(rt),Dt=ft.projectionMatrix.elements,zt=yt.projectionMatrix.elements,ht=Dt[14]/(Dt[10]-1),It=Dt[14]/(Dt[10]+1),dt=(Dt[9]+1)/Dt[5],Zt=(Dt[9]-1)/Dt[5],N=(Dt[8]-1)/Dt[0],ze=(zt[8]+1)/zt[0],Yt=ht*N,Jt=ht*ze,Ht=lt/(-N+ze),re=Ht*-N;if(ft.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(re),K.translateZ(Ht),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Dt[10]===-1)K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Ut=ht+Ht,I=It+Ht,A=Yt-re,Q=Jt+(lt-re),M=dt*It/I*Ut,L=Zt*It/I*Ut;K.projectionMatrix.makePerspective(A,Q,M,L,Ut,I),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function tt(K,ft){ft===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ft.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ft=K.near,yt=K.far;_.texture!==null&&(_.depthNear>0&&(ft=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),S.near=C.near=w.near=ft,S.far=C.far=w.far=yt,(D!==S.near||W!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,W=S.far),w.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,S.layers.mask=w.layers.mask|C.layers.mask;const lt=K.parent,Dt=S.cameras;tt(S,lt);for(let zt=0;zt<Dt.length;zt++)tt(Dt[zt],lt);Dt.length===2?k(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),J(K,S,lt)};function J(K,ft,yt){yt===null?K.matrix.copy(ft.matrixWorld):(K.matrix.copy(yt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ft.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=bc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let at=null;function j(K,ft){if(h=ft.getViewerPose(l||a),g=ft,h!==null){const yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let lt=!1;yt.length!==S.cameras.length&&(S.cameras.length=0,lt=!0);for(let zt=0;zt<yt.length;zt++){const ht=yt[zt];let It=null;if(f!==null)It=f.getViewport(ht);else{const Zt=u.getViewSubImage(d,ht);It=Zt.viewport,zt===0&&(t.setRenderTargetTextures(x,Zt.colorTexture,d.ignoreDepthValues?void 0:Zt.depthStencilTexture),t.setRenderTarget(x))}let dt=b[zt];dt===void 0&&(dt=new mn,dt.layers.enable(zt),dt.viewport=new Ae,b[zt]=dt),dt.matrix.fromArray(ht.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ht.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(It.x,It.y,It.width,It.height),zt===0&&(S.matrix.copy(dt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),lt===!0&&S.cameras.push(dt)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const zt=u.getDepthInformation(yt[0]);zt&&zt.isValid&&zt.texture&&_.init(t,zt,s.renderState)}}for(let yt=0;yt<y.length;yt++){const lt=v[yt],Dt=y[yt];lt!==null&&Dt!==void 0&&Dt.update(lt,ft,l||a)}at&&at(K,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),g=null}const Tt=new w0;Tt.setAnimationLoop(j),this.setAnimationLoop=function(K){at=K},this.dispose=function(){}}}const wi=new xn,og=new Nt;function cg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,b0(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,wi.copy(v),wi.x*=-1,wi.y*=-1,wi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(og.makeRotationFromEuler(wi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function l(x,y){let v=s[x.id];v===void 0&&(g(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",m));const T=y.program;n.updateUBOMapping(x,T);const E=t.render.frame;r[x.id]!==E&&(d(x),r[x.id]=E)}function h(x){const y=u();x.__bindingPointIndex=y;const v=i.createBuffer(),T=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=s[x.id],v=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,w=v.length;E<w;E++){const C=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,S=C.length;b<S;b++){const D=C[b];if(f(D,E,b,T)===!0){const W=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let et=0;et<B.length;et++){const U=B[et],rt=_(U);typeof U=="number"||typeof U=="boolean"?(D.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,W+V,D.__data)):U.isMatrix3?(D.__data[0]=U.elements[0],D.__data[1]=U.elements[1],D.__data[2]=U.elements[2],D.__data[3]=0,D.__data[4]=U.elements[3],D.__data[5]=U.elements[4],D.__data[6]=U.elements[5],D.__data[7]=0,D.__data[8]=U.elements[6],D.__data[9]=U.elements[7],D.__data[10]=U.elements[8],D.__data[11]=0):(U.toArray(D.__data,V),V+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,y,v,T){const E=x.value,w=y+"_"+v;if(T[w]===void 0)return typeof E=="number"||typeof E=="boolean"?T[w]=E:T[w]=E.clone(),!0;{const C=T[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return T[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(x){const y=x.uniforms;let v=0;const T=16;for(let w=0,C=y.length;w<C;w++){const b=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,D=b.length;S<D;S++){const W=b[S],B=Array.isArray(W.value)?W.value:[W.value];for(let V=0,et=B.length;V<et;V++){const U=B[V],rt=_(U),k=v%T,tt=k%rt.boundary,J=k+tt;v+=tt,J!==0&&T-J<rt.storage&&(v+=T-J),W.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=rt.storage}}}const E=v%T;return E>0&&(v+=T-E),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class hg{constructor(t={}){const{canvas:e=ju(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=fi,this.toneMappingExposure=1;const v=this;let T=!1,E=0,w=0,C=null,b=-1,S=null;const D=new Ae,W=new Ae;let B=null;const V=new Lt(0);let et=0,U=e.width,rt=e.height,k=1,tt=null,J=null;const at=new Ae(0,0,U,rt),j=new Ae(0,0,U,rt);let Tt=!1;const K=new Vc;let ft=!1,yt=!1;const lt=new Nt,Dt=new Nt,zt=new $,ht=new Ae,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Zt(){return C===null?k:1}let N=n;function ze(R,q){return e.getContext(R,q)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lc}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",St,!1),N===null){const q="webgl2";if(N=ze(q,R),N===null)throw ze(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Yt,Jt,Ht,re,Ut,I,A,Q,M,L,P,F,G,z,gt,H,ct,xt,Mt,mt,bt,wt,Bt,O;function vt(){Yt=new mm(N),Yt.init(),wt=new tg(N,Yt),Jt=new lm(N,Yt,t,wt),Ht=new j1(N,Yt),Jt.reverseDepthBuffer&&d&&Ht.buffers.depth.setReversed(!0),re=new _m(N),Ut=new O1,I=new Q1(N,Yt,Ht,Ut,Jt,wt,re),A=new um(v),Q=new pm(v),M=new Ed(N),Bt=new om(N,M),L=new gm(N,M,re,Bt),P=new vm(N,L,M,re),Mt=new Mm(N,Jt,I),H=new hm(Ut),F=new U1(v,A,Q,Yt,Jt,Bt,H),G=new cg(v,Ut),z=new k1,gt=new W1(Yt),xt=new am(v,A,Q,Ht,P,f,c),ct=new K1(v,P,Jt),O=new lg(N,re,Jt,Ht),mt=new cm(N,Yt,re),bt=new xm(N,Yt,re),re.programs=F.programs,v.capabilities=Jt,v.extensions=Yt,v.properties=Ut,v.renderLists=z,v.shadowMap=ct,v.state=Ht,v.info=re}vt();const st=new ag(v,N);this.xr=st,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=Yt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Yt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(R){R!==void 0&&(k=R,this.setSize(U,rt,!1))},this.getSize=function(R){return R.set(U,rt)},this.setSize=function(R,q,nt=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,rt=q,e.width=Math.floor(R*k),e.height=Math.floor(q*k),nt===!0&&(e.style.width=R+"px",e.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(U*k,rt*k).floor()},this.setDrawingBufferSize=function(R,q,nt){U=R,rt=q,k=nt,e.width=Math.floor(R*nt),e.height=Math.floor(q*nt),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(at)},this.setViewport=function(R,q,nt,it){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,q,nt,it),Ht.viewport(D.copy(at).multiplyScalar(k).round())},this.getScissor=function(R){return R.copy(j)},this.setScissor=function(R,q,nt,it){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,q,nt,it),Ht.scissor(W.copy(j).multiplyScalar(k).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(R){Ht.setScissorTest(Tt=R)},this.setOpaqueSort=function(R){tt=R},this.setTransparentSort=function(R){J=R},this.getClearColor=function(R){return R.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(R=!0,q=!0,nt=!0){let it=0;if(R){let Y=!1;if(C!==null){const Et=C.texture.format;Y=Et===zc||Et===kc||Et===Fc}if(Y){const Et=C.texture.type,Pt=Et===Zn||Et===Oi||Et===sr||Et===Ms||Et===Nc||Et===Uc,Ot=xt.getClearColor(),Ft=xt.getClearAlpha(),Kt=Ot.r,Qt=Ot.g,kt=Ot.b;Pt?(g[0]=Kt,g[1]=Qt,g[2]=kt,g[3]=Ft,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Kt,_[1]=Qt,_[2]=kt,_[3]=Ft,N.clearBufferiv(N.COLOR,0,_))}else it|=N.COLOR_BUFFER_BIT}q&&(it|=N.DEPTH_BUFFER_BIT),nt&&(it|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",St,!1),z.dispose(),gt.dispose(),Ut.dispose(),A.dispose(),Q.dispose(),P.dispose(),Bt.dispose(),O.dispose(),F.dispose(),st.dispose(),st.removeEventListener("sessionstart",al),st.removeEventListener("sessionend",ol),Mi.stop()};function pt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=re.autoReset,q=ct.enabled,nt=ct.autoUpdate,it=ct.needsUpdate,Y=ct.type;vt(),re.autoReset=R,ct.enabled=q,ct.autoUpdate=nt,ct.needsUpdate=it,ct.type=Y}function St(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Wt(R){const q=R.target;q.removeEventListener("dispose",Wt),be(q)}function be(R){Te(R),Ut.remove(R)}function Te(R){const q=Ut.get(R).programs;q!==void 0&&(q.forEach(function(nt){F.releaseProgram(nt)}),R.isShaderMaterial&&F.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,nt,it,Y,Et){q===null&&(q=It);const Pt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ot=ou(R,q,nt,it,Y);Ht.setMaterial(it,Pt);let Ft=nt.index,Kt=1;if(it.wireframe===!0){if(Ft=L.getWireframeAttribute(nt),Ft===void 0)return;Kt=2}const Qt=nt.drawRange,kt=nt.attributes.position;let ae=Qt.start*Kt,ge=(Qt.start+Qt.count)*Kt;Et!==null&&(ae=Math.max(ae,Et.start*Kt),ge=Math.min(ge,(Et.start+Et.count)*Kt)),Ft!==null?(ae=Math.max(ae,0),ge=Math.min(ge,Ft.count)):kt!=null&&(ae=Math.max(ae,0),ge=Math.min(ge,kt.count));const Me=ge-ae;if(Me<0||Me===1/0)return;Bt.setup(Y,it,Ot,nt,Ft);let Qe,ce=mt;if(Ft!==null&&(Qe=M.get(Ft),ce=bt,ce.setIndex(Qe)),Y.isMesh)it.wireframe===!0?(Ht.setLineWidth(it.wireframeLinewidth*Zt()),ce.setMode(N.LINES)):ce.setMode(N.TRIANGLES);else if(Y.isLine){let Gt=it.linewidth;Gt===void 0&&(Gt=1),Ht.setLineWidth(Gt*Zt()),Y.isLineSegments?ce.setMode(N.LINES):Y.isLineLoop?ce.setMode(N.LINE_LOOP):ce.setMode(N.LINE_STRIP)}else Y.isPoints?ce.setMode(N.POINTS):Y.isSprite&&ce.setMode(N.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ce.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))ce.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Gt=Y._multiDrawStarts,On=Y._multiDrawCounts,le=Y._multiDrawCount,vn=Ft?M.get(Ft).bytesPerElement:1,Vi=Ut.get(it).currentProgram.getUniforms();for(let sn=0;sn<le;sn++)Vi.setValue(N,"_gl_DrawID",sn),ce.render(Gt[sn]/vn,On[sn])}else if(Y.isInstancedMesh)ce.renderInstances(ae,Me,Y.count);else if(nt.isInstancedBufferGeometry){const Gt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,On=Math.min(nt.instanceCount,Gt);ce.renderInstances(ae,Me,On)}else ce.render(ae,Me)};function he(R,q,nt){R.transparent===!0&&R.side===fe&&R.forceSinglePass===!1?(R.side=je,R.needsUpdate=!0,pr(R,q,nt),R.side=pi,R.needsUpdate=!0,pr(R,q,nt),R.side=fe):pr(R,q,nt)}this.compile=function(R,q,nt=null){nt===null&&(nt=R),p=gt.get(nt),p.init(q),y.push(p),nt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),R!==nt&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();const it=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Et=Y.material;if(Et)if(Array.isArray(Et))for(let Pt=0;Pt<Et.length;Pt++){const Ot=Et[Pt];he(Ot,nt,Y),it.add(Ot)}else he(Et,nt,Y),it.add(Et)}),y.pop(),p=null,it},this.compileAsync=function(R,q,nt=null){const it=this.compile(R,q,nt);return new Promise(Y=>{function Et(){if(it.forEach(function(Pt){Ut.get(Pt).currentProgram.isReady()&&it.delete(Pt)}),it.size===0){Y(R);return}setTimeout(Et,10)}Yt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Mn=null;function Un(R){Mn&&Mn(R)}function al(){Mi.stop()}function ol(){Mi.start()}const Mi=new w0;Mi.setAnimationLoop(Un),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(R){Mn=R,st.setAnimationLoop(R),R===null?Mi.stop():Mi.start()},st.addEventListener("sessionstart",al),st.addEventListener("sessionend",ol),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(q),q=st.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,q,C),p=gt.get(R,y.length),p.init(q),y.push(p),Dt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),K.setFromProjectionMatrix(Dt),yt=this.localClippingEnabled,ft=H.init(this.clippingPlanes,yt),m=z.get(R,x.length),m.init(),x.push(m),st.enabled===!0&&st.isPresenting===!0){const Et=v.xr.getDepthSensingMesh();Et!==null&&ka(Et,q,-1/0,v.sortObjects)}ka(R,q,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(tt,J),dt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,dt&&xt.addToRenderList(m,R),this.info.render.frame++,ft===!0&&H.beginShadows();const nt=p.state.shadowsArray;ct.render(nt,R,q),ft===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=m.opaque,Y=m.transmissive;if(p.setupLights(),q.isArrayCamera){const Et=q.cameras;if(Y.length>0)for(let Pt=0,Ot=Et.length;Pt<Ot;Pt++){const Ft=Et[Pt];ll(it,Y,R,Ft)}dt&&xt.render(R);for(let Pt=0,Ot=Et.length;Pt<Ot;Pt++){const Ft=Et[Pt];cl(m,R,Ft,Ft.viewport)}}else Y.length>0&&ll(it,Y,R,q),dt&&xt.render(R),cl(m,R,q);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,q),Bt.resetDefaultState(),b=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],ft===!0&&H.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function ka(R,q,nt,it){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)nt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){it&&ht.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Dt);const Pt=P.update(R),Ot=R.material;Ot.visible&&m.push(R,Pt,Ot,nt,ht.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const Pt=P.update(R),Ot=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ht.copy(R.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),ht.copy(Pt.boundingSphere.center)),ht.applyMatrix4(R.matrixWorld).applyMatrix4(Dt)),Array.isArray(Ot)){const Ft=Pt.groups;for(let Kt=0,Qt=Ft.length;Kt<Qt;Kt++){const kt=Ft[Kt],ae=Ot[kt.materialIndex];ae&&ae.visible&&m.push(R,Pt,ae,nt,ht.z,kt)}}else Ot.visible&&m.push(R,Pt,Ot,nt,ht.z,null)}}const Et=R.children;for(let Pt=0,Ot=Et.length;Pt<Ot;Pt++)ka(Et[Pt],q,nt,it)}function cl(R,q,nt,it){const Y=R.opaque,Et=R.transmissive,Pt=R.transparent;p.setupLightsView(nt),ft===!0&&H.setGlobalState(v.clippingPlanes,nt),it&&Ht.viewport(D.copy(it)),Y.length>0&&fr(Y,q,nt),Et.length>0&&fr(Et,q,nt),Pt.length>0&&fr(Pt,q,nt),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function ll(R,q,nt,it){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[it.id]===void 0&&(p.state.transmissionRenderTarget[it.id]=new Fi(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?ar:Zn,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const Et=p.state.transmissionRenderTarget[it.id],Pt=it.viewport||D;Et.setSize(Pt.z,Pt.w);const Ot=v.getRenderTarget();v.setRenderTarget(Et),v.getClearColor(V),et=v.getClearAlpha(),et<1&&v.setClearColor(16777215,.5),v.clear(),dt&&xt.render(nt);const Ft=v.toneMapping;v.toneMapping=fi;const Kt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),p.setupLightsView(it),ft===!0&&H.setGlobalState(v.clippingPlanes,it),fr(R,nt,it),I.updateMultisampleRenderTarget(Et),I.updateRenderTargetMipmap(Et),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let kt=0,ae=q.length;kt<ae;kt++){const ge=q[kt],Me=ge.object,Qe=ge.geometry,ce=ge.material,Gt=ge.group;if(ce.side===fe&&Me.layers.test(it.layers)){const On=ce.side;ce.side=je,ce.needsUpdate=!0,hl(Me,nt,it,Qe,ce,Gt),ce.side=On,ce.needsUpdate=!0,Qt=!0}}Qt===!0&&(I.updateMultisampleRenderTarget(Et),I.updateRenderTargetMipmap(Et))}v.setRenderTarget(Ot),v.setClearColor(V,et),Kt!==void 0&&(it.viewport=Kt),v.toneMapping=Ft}function fr(R,q,nt){const it=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Et=R.length;Y<Et;Y++){const Pt=R[Y],Ot=Pt.object,Ft=Pt.geometry,Kt=it===null?Pt.material:it,Qt=Pt.group;Ot.layers.test(nt.layers)&&hl(Ot,q,nt,Ft,Kt,Qt)}}function hl(R,q,nt,it,Y,Et){R.onBeforeRender(v,q,nt,it,Y,Et),R.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(v,q,nt,it,R,Et),Y.transparent===!0&&Y.side===fe&&Y.forceSinglePass===!1?(Y.side=je,Y.needsUpdate=!0,v.renderBufferDirect(nt,q,it,Y,R,Et),Y.side=pi,Y.needsUpdate=!0,v.renderBufferDirect(nt,q,it,Y,R,Et),Y.side=fe):v.renderBufferDirect(nt,q,it,Y,R,Et),R.onAfterRender(v,q,nt,it,Y,Et)}function pr(R,q,nt){q.isScene!==!0&&(q=It);const it=Ut.get(R),Y=p.state.lights,Et=p.state.shadowsArray,Pt=Y.state.version,Ot=F.getParameters(R,Y.state,Et,q,nt),Ft=F.getProgramCacheKey(Ot);let Kt=it.programs;it.environment=R.isMeshStandardMaterial?q.environment:null,it.fog=q.fog,it.envMap=(R.isMeshStandardMaterial?Q:A).get(R.envMap||it.environment),it.envMapRotation=it.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Kt===void 0&&(R.addEventListener("dispose",Wt),Kt=new Map,it.programs=Kt);let Qt=Kt.get(Ft);if(Qt!==void 0){if(it.currentProgram===Qt&&it.lightsStateVersion===Pt)return dl(R,Ot),Qt}else Ot.uniforms=F.getUniforms(R),R.onBeforeCompile(Ot,v),Qt=F.acquireProgram(Ot,Ft),Kt.set(Ft,Qt),it.uniforms=Ot.uniforms;const kt=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(kt.clippingPlanes=H.uniform),dl(R,Ot),it.needsLights=lu(R),it.lightsStateVersion=Pt,it.needsLights&&(kt.ambientLightColor.value=Y.state.ambient,kt.lightProbe.value=Y.state.probe,kt.directionalLights.value=Y.state.directional,kt.directionalLightShadows.value=Y.state.directionalShadow,kt.spotLights.value=Y.state.spot,kt.spotLightShadows.value=Y.state.spotShadow,kt.rectAreaLights.value=Y.state.rectArea,kt.ltc_1.value=Y.state.rectAreaLTC1,kt.ltc_2.value=Y.state.rectAreaLTC2,kt.pointLights.value=Y.state.point,kt.pointLightShadows.value=Y.state.pointShadow,kt.hemisphereLights.value=Y.state.hemi,kt.directionalShadowMap.value=Y.state.directionalShadowMap,kt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,kt.spotShadowMap.value=Y.state.spotShadowMap,kt.spotLightMatrix.value=Y.state.spotLightMatrix,kt.spotLightMap.value=Y.state.spotLightMap,kt.pointShadowMap.value=Y.state.pointShadowMap,kt.pointShadowMatrix.value=Y.state.pointShadowMatrix),it.currentProgram=Qt,it.uniformsList=null,Qt}function ul(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=xa.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function dl(R,q){const nt=Ut.get(R);nt.outputColorSpace=q.outputColorSpace,nt.batching=q.batching,nt.batchingColor=q.batchingColor,nt.instancing=q.instancing,nt.instancingColor=q.instancingColor,nt.instancingMorph=q.instancingMorph,nt.skinning=q.skinning,nt.morphTargets=q.morphTargets,nt.morphNormals=q.morphNormals,nt.morphColors=q.morphColors,nt.morphTargetsCount=q.morphTargetsCount,nt.numClippingPlanes=q.numClippingPlanes,nt.numIntersection=q.numClipIntersection,nt.vertexAlphas=q.vertexAlphas,nt.vertexTangents=q.vertexTangents,nt.toneMapping=q.toneMapping}function ou(R,q,nt,it,Y){q.isScene!==!0&&(q=It),I.resetTextureUnits();const Et=q.fog,Pt=it.isMeshStandardMaterial?q.environment:null,Ot=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:bs,Ft=(it.isMeshStandardMaterial?Q:A).get(it.envMap||Pt),Kt=it.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,Qt=!!nt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),kt=!!nt.morphAttributes.position,ae=!!nt.morphAttributes.normal,ge=!!nt.morphAttributes.color;let Me=fi;it.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Me=v.toneMapping);const Qe=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,ce=Qe!==void 0?Qe.length:0,Gt=Ut.get(it),On=p.state.lights;if(ft===!0&&(yt===!0||R!==S)){const un=R===S&&it.id===b;H.setState(it,R,un)}let le=!1;it.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==On.state.version||Gt.outputColorSpace!==Ot||Y.isBatchedMesh&&Gt.batching===!1||!Y.isBatchedMesh&&Gt.batching===!0||Y.isBatchedMesh&&Gt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Gt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Gt.instancing===!1||!Y.isInstancedMesh&&Gt.instancing===!0||Y.isSkinnedMesh&&Gt.skinning===!1||!Y.isSkinnedMesh&&Gt.skinning===!0||Y.isInstancedMesh&&Gt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Gt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Gt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Gt.instancingMorph===!1&&Y.morphTexture!==null||Gt.envMap!==Ft||it.fog===!0&&Gt.fog!==Et||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==H.numPlanes||Gt.numIntersection!==H.numIntersection)||Gt.vertexAlphas!==Kt||Gt.vertexTangents!==Qt||Gt.morphTargets!==kt||Gt.morphNormals!==ae||Gt.morphColors!==ge||Gt.toneMapping!==Me||Gt.morphTargetsCount!==ce)&&(le=!0):(le=!0,Gt.__version=it.version);let vn=Gt.currentProgram;le===!0&&(vn=pr(it,q,Y));let Vi=!1,sn=!1,Ns=!1;const ve=vn.getUniforms(),Pn=Gt.uniforms;if(Ht.useProgram(vn.program)&&(Vi=!0,sn=!0,Ns=!0),it.id!==b&&(b=it.id,sn=!0),Vi||S!==R){Ht.buffers.depth.getReversed()?(lt.copy(R.projectionMatrix),Qu(lt),td(lt),ve.setValue(N,"projectionMatrix",lt)):ve.setValue(N,"projectionMatrix",R.projectionMatrix),ve.setValue(N,"viewMatrix",R.matrixWorldInverse);const Jn=ve.map.cameraPosition;Jn!==void 0&&Jn.setValue(N,zt.setFromMatrixPosition(R.matrixWorld)),Jt.logarithmicDepthBuffer&&ve.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&ve.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,sn=!0,Ns=!0)}if(Y.isSkinnedMesh){ve.setOptional(N,Y,"bindMatrix"),ve.setOptional(N,Y,"bindMatrixInverse");const un=Y.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),ve.setValue(N,"boneTexture",un.boneTexture,I))}Y.isBatchedMesh&&(ve.setOptional(N,Y,"batchingTexture"),ve.setValue(N,"batchingTexture",Y._matricesTexture,I),ve.setOptional(N,Y,"batchingIdTexture"),ve.setValue(N,"batchingIdTexture",Y._indirectTexture,I),ve.setOptional(N,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ve.setValue(N,"batchingColorTexture",Y._colorsTexture,I));const Us=nt.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0)&&Mt.update(Y,nt,vn),(sn||Gt.receiveShadow!==Y.receiveShadow)&&(Gt.receiveShadow=Y.receiveShadow,ve.setValue(N,"receiveShadow",Y.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Pn.envMap.value=Ft,Pn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&q.environment!==null&&(Pn.envMapIntensity.value=q.environmentIntensity),sn&&(ve.setValue(N,"toneMappingExposure",v.toneMappingExposure),Gt.needsLights&&cu(Pn,Ns),Et&&it.fog===!0&&G.refreshFogUniforms(Pn,Et),G.refreshMaterialUniforms(Pn,it,k,rt,p.state.transmissionRenderTarget[R.id]),xa.upload(N,ul(Gt),Pn,I)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(xa.upload(N,ul(Gt),Pn,I),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&ve.setValue(N,"center",Y.center),ve.setValue(N,"modelViewMatrix",Y.modelViewMatrix),ve.setValue(N,"normalMatrix",Y.normalMatrix),ve.setValue(N,"modelMatrix",Y.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const un=it.uniformsGroups;for(let Jn=0,Qn=un.length;Jn<Qn;Jn++){const fl=un[Jn];O.update(fl,vn),O.bind(fl,vn)}}return vn}function cu(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function lu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,q,nt){Ut.get(R.texture).__webglTexture=q,Ut.get(R.depthTexture).__webglTexture=nt;const it=Ut.get(R);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=nt===void 0,it.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,q){const nt=Ut.get(R);nt.__webglFramebuffer=q,nt.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,nt=0){C=R,E=q,w=nt;let it=!0,Y=null,Et=!1,Pt=!1;if(R){const Ft=Ut.get(R);if(Ft.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(N.FRAMEBUFFER,null),it=!1;else if(Ft.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(Ft.__hasExternalTextures)I.rebindTextures(R,Ut.get(R.texture).__webglTexture,Ut.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const kt=R.depthTexture;if(Ft.__boundDepthTexture!==kt){if(kt!==null&&Ut.has(kt)&&(R.width!==kt.image.width||R.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const Kt=R.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Pt=!0);const Qt=Ut.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qt[q])?Y=Qt[q][nt]:Y=Qt[q],Et=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?Y=Ut.get(R).__webglMultisampledFramebuffer:Array.isArray(Qt)?Y=Qt[nt]:Y=Qt,D.copy(R.viewport),W.copy(R.scissor),B=R.scissorTest}else D.copy(at).multiplyScalar(k).floor(),W.copy(j).multiplyScalar(k).floor(),B=Tt;if(Ht.bindFramebuffer(N.FRAMEBUFFER,Y)&&it&&Ht.drawBuffers(R,Y),Ht.viewport(D),Ht.scissor(W),Ht.setScissorTest(B),Et){const Ft=Ut.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ft.__webglTexture,nt)}else if(Pt){const Ft=Ut.get(R.texture),Kt=q||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ft.__webglTexture,nt||0,Kt)}b=-1},this.readRenderTargetPixels=function(R,q,nt,it,Y,Et,Pt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Ut.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ot=Ot[Pt]),Ot){Ht.bindFramebuffer(N.FRAMEBUFFER,Ot);try{const Ft=R.texture,Kt=Ft.format,Qt=Ft.type;if(!Jt.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-it&&nt>=0&&nt<=R.height-Y&&N.readPixels(q,nt,it,Y,wt.convert(Kt),wt.convert(Qt),Et)}finally{const Ft=C!==null?Ut.get(C).__webglFramebuffer:null;Ht.bindFramebuffer(N.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(R,q,nt,it,Y,Et,Pt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Ut.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ot=Ot[Pt]),Ot){const Ft=R.texture,Kt=Ft.format,Qt=Ft.type;if(!Jt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=R.width-it&&nt>=0&&nt<=R.height-Y){Ht.bindFramebuffer(N.FRAMEBUFFER,Ot);const kt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,kt),N.bufferData(N.PIXEL_PACK_BUFFER,Et.byteLength,N.STREAM_READ),N.readPixels(q,nt,it,Y,wt.convert(Kt),wt.convert(Qt),0);const ae=C!==null?Ut.get(C).__webglFramebuffer:null;Ht.bindFramebuffer(N.FRAMEBUFFER,ae);const ge=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ju(N,ge,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,kt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Et),N.deleteBuffer(kt),N.deleteSync(ge),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,q=null,nt=0){R.isTexture!==!0&&(tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1]);const it=Math.pow(2,-nt),Y=Math.floor(R.image.width*it),Et=Math.floor(R.image.height*it),Pt=q!==null?q.x:0,Ot=q!==null?q.y:0;I.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,nt,0,0,Pt,Ot,Y,Et),Ht.unbindTexture()},this.copyTextureToTexture=function(R,q,nt=null,it=null,Y=0){R.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,R=arguments[1],q=arguments[2],Y=arguments[3]||0,nt=null);let Et,Pt,Ot,Ft,Kt,Qt,kt,ae,ge;const Me=R.isCompressedTexture?R.mipmaps[Y]:R.image;nt!==null?(Et=nt.max.x-nt.min.x,Pt=nt.max.y-nt.min.y,Ot=nt.isBox3?nt.max.z-nt.min.z:1,Ft=nt.min.x,Kt=nt.min.y,Qt=nt.isBox3?nt.min.z:0):(Et=Me.width,Pt=Me.height,Ot=Me.depth||1,Ft=0,Kt=0,Qt=0),it!==null?(kt=it.x,ae=it.y,ge=it.z):(kt=0,ae=0,ge=0);const Qe=wt.convert(q.format),ce=wt.convert(q.type);let Gt;q.isData3DTexture?(I.setTexture3D(q,0),Gt=N.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(I.setTexture2DArray(q,0),Gt=N.TEXTURE_2D_ARRAY):(I.setTexture2D(q,0),Gt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment);const On=N.getParameter(N.UNPACK_ROW_LENGTH),le=N.getParameter(N.UNPACK_IMAGE_HEIGHT),vn=N.getParameter(N.UNPACK_SKIP_PIXELS),Vi=N.getParameter(N.UNPACK_SKIP_ROWS),sn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Me.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Me.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ft),N.pixelStorei(N.UNPACK_SKIP_ROWS,Kt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qt);const Ns=R.isDataArrayTexture||R.isData3DTexture,ve=q.isDataArrayTexture||q.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Pn=Ut.get(R),Us=Ut.get(q),un=Ut.get(Pn.__renderTarget),Jn=Ut.get(Us.__renderTarget);Ht.bindFramebuffer(N.READ_FRAMEBUFFER,un.__webglFramebuffer),Ht.bindFramebuffer(N.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Qn=0;Qn<Ot;Qn++)Ns&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ut.get(R).__webglTexture,Y,Qt+Qn),R.isDepthTexture?(ve&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ut.get(q).__webglTexture,Y,ge+Qn),N.blitFramebuffer(Ft,Kt,Et,Pt,kt,ae,Et,Pt,N.DEPTH_BUFFER_BIT,N.NEAREST)):ve?N.copyTexSubImage3D(Gt,Y,kt,ae,ge+Qn,Ft,Kt,Et,Pt):N.copyTexSubImage2D(Gt,Y,kt,ae,ge+Qn,Ft,Kt,Et,Pt);Ht.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ve?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(Gt,Y,kt,ae,ge,Et,Pt,Ot,Qe,ce,Me.data):q.isCompressedArrayTexture?N.compressedTexSubImage3D(Gt,Y,kt,ae,ge,Et,Pt,Ot,Qe,Me.data):N.texSubImage3D(Gt,Y,kt,ae,ge,Et,Pt,Ot,Qe,ce,Me):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Y,kt,ae,Et,Pt,Qe,ce,Me.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Y,kt,ae,Me.width,Me.height,Qe,Me.data):N.texSubImage2D(N.TEXTURE_2D,Y,kt,ae,Et,Pt,Qe,ce,Me);N.pixelStorei(N.UNPACK_ROW_LENGTH,On),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le),N.pixelStorei(N.UNPACK_SKIP_PIXELS,vn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Vi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,sn),Y===0&&q.generateMipmaps&&N.generateMipmap(Gt),Ht.unbindTexture()},this.copyTextureToTexture3D=function(R,q,nt=null,it=null,Y=0){return R.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,it=arguments[1]||null,R=arguments[2],q=arguments[3],Y=arguments[4]||0),tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,nt,it,Y)},this.initRenderTarget=function(R){Ut.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),Ht.unbindTexture()},this.resetState=function(){E=0,w=0,C=null,Ht.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}class qc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new qc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ug extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class L0 extends qe{constructor(t=null,e=1,n=1,s,r,a,o,c,l=We,h=We,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uh extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ss=new Nt,dh=new Nt,Or=[],fh=new Gi,dg=new Nt,Gs=new ue,Hs=new Hi;class D0 extends ue{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new uh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),fh.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(fh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Hs.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),t.ray.intersectsSphere(Hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),dh.multiplyMatrices(n,ss),Gs.matrixWorld=dh,Gs.raycast(t,Or);for(let a=0,o=Or.length;a<o;a++){const c=Or[a];c.instanceId=r,c.object=this,e.push(c)}Or.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new uh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new L0(new Float32Array(s*this.count),s,this.count,Oc,Ln));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Xc extends _i{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ea=new $,wa=new $,ph=new Nt,Vs=new Hc,Fr=new Hi,go=new $,mh=new $;class fg extends Ie{constructor(t=new ke,e=new Xc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ea.fromBufferAttribute(e,s-1),wa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ea.distanceTo(wa);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(s),Fr.radius+=r,t.ray.intersectsSphere(Fr)===!1)return;ph.copy(s).invert(),Vs.copy(t.ray).applyMatrix4(ph);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),x=h.getX(_+1),y=kr(this,t,Vs,c,p,x);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=kr(this,t,Vs,c,_,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=kr(this,t,Vs,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=kr(this,t,Vs,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function kr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Ea.fromBufferAttribute(a,s),wa.fromBufferAttribute(a,r),e.distanceSqToSegment(Ea,wa,go,mh)>n)return;go.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(go);if(!(c<t.near||c>t.far))return{distance:c,point:mh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const gh=new $,xh=new $;class N0 extends fg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)gh.fromBufferAttribute(e,s),xh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gh.distanceTo(xh);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class U0 extends _i{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _h=new Nt,Ec=new Hc,zr=new Hi,Br=new $;class pg extends Ie{constructor(t=new ke,e=new U0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),zr.radius+=r,t.ray.intersectsSphere(zr)===!1)return;_h.copy(s).invert(),Ec.copy(t.ray).applyMatrix4(_h);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Br.fromBufferAttribute(u,m),Mh(Br,m,c,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Br.fromBufferAttribute(u,g),Mh(Br,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Mh(i,t,e,n,s,r,a){const o=Ec.distanceSqToPoint(i);if(o<e){const c=new $;Ec.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class lr extends qe{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yc extends ke{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(f,2));function x(){const v=new $,T=new $;let E=0;const w=(e-t)/n;for(let C=0;C<=r;C++){const b=[],S=C/r,D=S*(e-t)+t;for(let W=0;W<=s;W++){const B=W/s,V=B*c+o,et=Math.sin(V),U=Math.cos(V);T.x=D*et,T.y=-S*n+m,T.z=D*U,u.push(T.x,T.y,T.z),v.set(et,w,U).normalize(),d.push(v.x,v.y,v.z),f.push(B,1-S),b.push(g++)}_.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){const S=_[b][C],D=_[b+1][C],W=_[b+1][C+1],B=_[b][C+1];(t>0||b!==0)&&(h.push(S,D,B),E+=3),(e>0||b!==r-1)&&(h.push(D,W,B),E+=3)}l.addGroup(p,E,0),p+=E}function y(v){const T=g,E=new ne,w=new $;let C=0;const b=v===!0?t:e,S=v===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const D=g;for(let W=0;W<=s;W++){const V=W/s*c+o,et=Math.cos(V),U=Math.sin(V);w.x=b*U,w.y=m*S,w.z=b*et,u.push(w.x,w.y,w.z),d.push(0,S,0),E.x=et*.5+.5,E.y=U*.5*S+.5,f.push(E.x,E.y),g++}for(let W=0;W<s;W++){const B=T+W,V=D+W;v===!0?h.push(V,V+1,B):h.push(V+1,V,B),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $c extends ke{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new $,v=new $,T=new $;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],v),f(e[E+2],T),c(y,v,T,x)}function c(x,y,v,T){const E=T+1,w=[];for(let C=0;C<=E;C++){w[C]=[];const b=x.clone().lerp(v,C/E),S=y.clone().lerp(v,C/E),D=E-C;for(let W=0;W<=D;W++)W===0&&C===E?w[C][W]=b:w[C][W]=b.clone().lerp(S,W/D)}for(let C=0;C<E;C++)for(let b=0;b<2*(E-C)-1;b++){const S=Math.floor(b/2);b%2===0?(d(w[C][S+1]),d(w[C+1][S]),d(w[C][S])):(d(w[C][S+1]),d(w[C+1][S+1]),d(w[C+1][S]))}}function l(x){const y=new $;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const x=new $;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const v=m(x)/2/Math.PI+.5,T=p(x)/Math.PI+.5;a.push(v,1-T)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const y=a[x+0],v=a[x+2],T=a[x+4],E=Math.max(y,v,T),w=Math.min(y,v,T);E>.9&&w<.1&&(y<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),T<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,y){const v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const x=new $,y=new $,v=new $,T=new $,E=new ne,w=new ne,C=new ne;for(let b=0,S=0;b<r.length;b+=9,S+=6){x.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),E.set(a[S+0],a[S+1]),w.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),T.copy(x).add(y).add(v).divideScalar(3);const D=m(T);_(E,S+0,x,D),_(w,S+2,y,D),_(C,S+4,v,D)}}function _(x,y,v,T){T<0&&x.x===1&&(a[y]=x.x-1),v.x===0&&v.z===0&&(a[y]=T/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.vertices,t.indices,t.radius,t.details)}}class Kc extends $c{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Kc(t.radius,t.detail)}}class Zc extends ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new $,d=new $,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){const E=T/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(E+v,1-y),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=h[p][x+1],v=h[p][x],T=h[p+1][x],E=h[p+1][x+1];(p!==0||a>0)&&f.push(y,v,E),(p!==n-1||c<Math.PI)&&f.push(v,T,E)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wc extends _i{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Lt(16777215),this.specular=new Lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bc,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _a extends _i{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bc,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jc extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class mg extends jc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const xo=new Nt,vh=new $,yh=new $;class gg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vc,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;vh.setFromMatrixPosition(t.matrixWorld),e.position.copy(vh),yh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yh),e.updateMatrixWorld(),xo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class xg extends gg{constructor(){super(new T0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _g extends jc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new xg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class bh extends jc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);const me=[0,4,7,11],oe=[0,3,7,10],Se=[0,4,7],Ti=[0,3,7],En=[0,4,7,10],O0={miami:{name:"COASTLINE RUSH",bpm:138,chords:[["D",me],["G",me],["E",oe],["A",Se],["D",me],["B",oe],["G",me],["A",Se],["B",oe],["F#",oe],["G",me],["D",Se],["E",oe],["A",Se],["G",me],["A",En]],lead:["F#5 . . A5 . . C#6 . B5 . A5 . F#5 . E5 .","D5 . . . . . B4 . D5 . E5 . F#5 . . .","G5 . . F#5 . . E5 . D5 . E5 . G5 . B5 .","A5 . . . . . . . - - E5 F#5 G5 . A5 .","F#5 . . A5 . . D6 . C#6 . A5 . F#5 . A5 .","B5 . . A5 . . F#5 . D5 . . . B4 . D5 .","E5 . . F#5 . . G5 . A5 . B5 . A5 . G5 .","E5 . . . . . . . - - - - C#5 . E5 .","D6 . . C#6 . . B5 . . . F#5 . . . A5 .","C#6 . . B5 . . A5 . . . E5 . . . F#5 .","B5 . . A5 . . G5 . F#5 . G5 . A5 . B5 .","A5 . . . . . F#5 . . . D5 . . . - -","G5 . . A5 . . B5 . . . D6 . . . E6 .","C#6 . . . . . A5 . . . E5 . . . - -","D6 . . C#6 . . B5 . A5 . G5 . F#5 . G5 .","A5 . . . . . . . . . . . G5 . E5 ."],bass:[0,null,12,null,0,null,12,0,null,0,12,null,0,null,12,7],kick:[0,6,8],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"square"},tokyo:{name:"NEON EXPRESSWAY",bpm:144,chords:[["F",me],["G",Se],["E",oe],["A",Ti],["F",me],["G",Se],["E",En],["A",Ti],["D",oe],["G",Se],["C",me],["A",oe],["D",oe],["E",oe],["F",me],["E",En]],lead:["A5 . . C6 . . E6 . . . D6 . C6 . A5 .","B5 . . . . . G5 . . . D5 . G5 . B5 .","C6 . . B5 . . G5 . E5 . . . G5 . B5 .","A5 . . . . . . . E5 . A5 . C6 . E6 .","F6 . . E6 . . C6 . . . A5 . C6 . E6 .","D6 . . . . . B5 . . . G5 . B5 . D6 .","E6 . . D6 . . B5 . G#5 . . . E5 . G#5 .","A5 . . . . . . . . . . . - - - -","D6 . F6 . A6 . F6 . D6 . . . C6 . A5 .","B5 . D6 . G6 . D6 . B5 . . . A5 . G5 .","E6 . G6 . . . E6 . C6 . . . B5 . C6 .","A5 . . . . . E5 . . . A5 . . . - -","F5 . A5 . D6 . . . C6 . A5 . F5 . A5 .","G5 . B5 . E6 . . . D6 . B5 . G5 . B5 .","C6 . . . A5 . . . C6 . . . F6 . . .","E6 . . . . . D6 . . . B5 . . . G#5 ."],bass:[0,0,12,0,0,12,0,7,0,0,12,0,10,12,7,12],kick:[0,3,8,11],snare:[4,12],hat:[2,6,10,14],leadWave:"sawtooth"},title:{name:"TITLE",bpm:128,chords:[["C",me],["A",oe],["F",me],["G",Se]],lead:["E5 . G5 . B5 . . . C6 . B5 . G5 . . .","C6 . . . A5 . . . E5 . . . G5 . A5 .","A5 . . . F5 . . . C6 . . . A5 . . .","B5 . . . D6 . . . G5 . . . - - - -"],bass:[0,null,12,null,0,null,12,null,0,null,12,null,0,7,12,7],kick:[0,8],snare:[4,12],hat:[2,6,10,14],leadWave:"square"},palm:{name:"PALM DRIVE",bpm:116,chords:[["A",me],["F#",oe],["D",me],["E",Se],["A",me],["C#",oe],["D",me],["E",Se]],lead:["E5 . . . C#5 . . . E5 . F#5 . G#5 . . .","A5 . . . . . . . F#5 . E5 . C#5 . . .","D5 . . . F#5 . . . A5 . . . C#6 . B5 .","B5 . . . . . . . G#5 . . . E5 . . .","E5 . . . C#5 . . . E5 . F#5 . A5 . . .","G#5 . . . E5 . . . C#5 . E5 . G#5 . . .","F#5 . . . A5 . . . D6 . . . C#6 . A5 .","B5 . . . . . . . - - G#5 . A5 . B5 ."],bass:[0,null,0,null,0,null,12,null,0,null,0,null,0,null,12,7],kick:[0,8,10],snare:[4,12],hat:[2,6,10,14],leadWave:"saw2",pad:!0,arp:{pattern:[0,1,2,3,4,3,2,1],wave:"square",oct:5},gated:!0,stabs:!1},signal:{name:"NIGHT SIGNAL",bpm:128,chords:[["D",Ti],["A#",Se],["C",Se],["A",Ti],["D",oe],["A#",me],["G",oe],["A",Se]],lead:["A5 . . D6 . . F6 . E6 . D6 . C6 . A5 .","A#5 . . . . . F5 . . . A#5 . D6 . . .","C6 . . E6 . . G6 . F6 . E6 . C6 . . .","E6 . . . . . . . - - A5 . C6 . E6 .","F6 . . E6 . . D6 . A5 . . . D6 . F6 .","G6 . . F6 . . D6 . A#5 . . . F5 . . .","G5 . . A#5 . . D6 . G6 . . . F6 . D6 .","C#6 . . . . . E6 . . . A5 . . . - -"],bass:[0,0,12,0,0,0,12,0,0,0,12,0,0,12,0,12],kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14],leadWave:"fm",pad:!0,gated:!0,stabs:!1},rival:{name:"TURBO RIVAL",bpm:152,chords:[["E",Ti],["C",Se],["D",Se],["B",Se],["E",Ti],["C",Se],["A",Ti],["B",En]],lead:["B5 . . . G5 . E5 . B5 . . . C6 . B5 .","G5 . . . E5 . C5 . E5 . G5 . C6 . . .","A5 . . . F#5 . D5 . F#5 . A5 . D6 . C6 .","B5 . . . . . . . D#6 . . . F#6 . . .","E6 . . . D6 . B5 . G5 . . . B5 . E6 .","G6 . . . E6 . C6 . E6 . . . G6 . E6 .","C6 . . . A5 . E5 . A5 . C6 . E6 . . .","D#6 . . . . . F#6 . . . B5 . . . - -"],bass:[0,null,0,12,0,null,0,12,0,null,0,12,0,7,12,7],kick:[0,4,8,12],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"saw2",arp:{pattern:[0,2,4,2],wave:"square",oct:5}},sunset:{name:"AFTER SUNSET",bpm:98,chords:[["F",me],["E",oe],["D",oe],["C",me],["A#",me],["A",oe],["G",oe],["C",Se]],lead:["A5 . . . C6 . . . E6 . . . D6 . C6 .","B5 . . . G5 . . . E5 . . . . . . .","F5 . . . A5 . . . C6 . . . E6 . D6 .","E6 . . . . . . . G5 . . . . . . .","D6 . . . F6 . . . A6 . . . G6 . F6 .","E6 . . . C6 . . . A5 . . . G5 . A5 .","A#5 . . . A5 . . . G5 . . . F5 . G5 .","E5 . . . . . . . . . . . - - - -"],bass:[0,null,null,0,null,null,12,null,0,null,null,7,null,null,12,null],kick:[0,10],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"fm",pad:!0,arp:{pattern:[0,2,1,3,2,4,3,1],wave:"triangle",oct:5},gated:!0,stabs:!1},desert:{name:"MESA HIGHWAY",bpm:128,chords:[["A",oe],["D",Se],["G",Se],["E",oe],["A",oe],["F",me],["G",Se],["E",En]],lead:["A4 . . C5 . . E5 . G5 . . . E5 . D5 .","F#5 . . . . . A5 . F#5 . E5 . D5 . . .","G5 . . B5 . . D6 . B5 . . . A5 . G5 .","E5 . . . . . . . - - G5 . A5 . B5 .","C6 . . B5 . . A5 . E5 . . . G5 . A5 .","A5 . . . C6 . . . E6 . . . C6 . A5 .","B5 . . . D6 . . . G5 . . . B5 . D6 .","G#5 . . . . . B5 . . . E5 . . . - -"],bass:[0,null,null,0,null,7,null,0,null,0,null,7,12,null,7,null],kick:[0,8,11],snare:[4,12],hat:[2,6,10,14],leadWave:"fm"},alps:{name:"GLACIER RUN",bpm:150,chords:[["E",Se],["B",Se],["C#",oe],["A",me],["E",Se],["G#",oe],["A",me],["B",En]],lead:["B5 . G#5 . E5 . G#5 . B5 . E6 . . . D#6 .","F#6 . . . D#6 . . . B5 . . . F#5 . . .","E6 . . D#6 . . C#6 . . . B5 . G#5 . . .","C#6 . . . . . B5 . A5 . . . G#5 . A5 .","B5 . . E6 . . G#6 . . . F#6 . E6 . . .","D#6 . . . B5 . . . F#6 . . . D#6 . . .","E6 . . C#6 . . A5 . . . G#6 . . . E6 .","F#6 . . . . . . . D#6 . . . A5 . . ."],bass:[0,null,12,null,0,null,12,null,0,null,12,null,7,null,12,null],kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14],leadWave:"square",pad:!0,arp:{pattern:[0,1,2,3,2,1,0,1],wave:"triangle",oct:5}},vegas:{name:"JACKPOT BOULEVARD",bpm:116,chords:[["D",oe],["G",En],["D",oe],["G",En],["A#",me],["A",En],["D",oe],["A",En]],lead:["D5 . F5 . A5 . C6 . - A5 . . F5 . D5 .","B5 . . . . . G5 . F5 . . . D5 . F5 .","A5 . . C6 . . D6 . . . C6 . A5 . . .","G5 . . . . . . . - - F5 . G5 . B5 .","D6 . . . A5 . . . F5 . . . A5 . D6 .","C#6 . . . . . E6 . . . C#6 . A5 . . .","F6 . . E6 . . D6 . . . C6 . A5 . . .","A5 . . . . . . . E5 . G5 . A5 . C#6 ."],bass:[0,null,0,12,null,0,null,10,0,null,7,null,12,10,7,null],kick:[0,7,10],snare:[4,12],hat:[0,2,3,4,6,8,10,11,12,14],leadWave:"saw2",gated:!0},riviera:{name:"COTE D'AZUR",bpm:112,chords:[["F",me],["E",oe],["D",oe],["C",me],["A#",me],["A",oe],["G",oe],["C",En]],lead:["E6 . . . C6 . A5 . . . G5 . A5 . C6 .","B5 . . . . . G5 . E5 . . . D5 . E5 .","F5 . A5 . C6 . . . E6 . . . D6 . C6 .","B5 . . . . . . . G5 . . . - - - -","D6 . . F6 . . A6 . . . F6 . D6 . . .","C6 . . . E6 . . . G6 . . . E6 . C6 .","A#5 . . . D6 . . . F6 . . . D6 . A#5 .","E6 . . . . . . . . . . . - - - -"],bass:[0,null,null,7,null,null,12,null,0,null,null,7,null,10,null,null],kick:[0,10],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"fm",pad:!0,arp:{pattern:[0,2,1,3,2,1,0,2],wave:"sine",oct:5},stabs:!1}},Ma=["miami","tokyo","desert","alps","vegas","riviera","palm","signal","rival","sunset"].map(i=>({id:i,name:O0[i].name})),F0={C:0,"C#":1,D:2,"D#":3,E:4,F:5,"F#":6,G:7,"G#":8,A:9,"A#":10,B:11},Mg=i=>{const t=/^([A-G]#?)(\d)$/.exec(i);return t?F0[t[1]]+(parseInt(t[2],10)+1)*12:69},Ws=i=>440*Math.pow(2,(i-69)/12);class vg{constructor(){this.ctx=null,this.muted=!1,this.song=null,this.step=0,this.nextTime=0,this.timer=null}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext,e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=.55;const n=e.createDynamicsCompressor();this.master.connect(n).connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=.32,this.musicBus.connect(this.master),this.delay=e.createDelay(1);const s=e.createGain();s.gain.value=.28,this.delay.connect(s).connect(this.delay);const r=e.createGain();r.gain.value=.35,this.delay.connect(r).connect(this.musicBus),this.noise=e.createBuffer(1,e.sampleRate,e.sampleRate);const a=this.noise.getChannelData(0);for(let h=0;h<a.length;h++)a[h]=Math.random()*2-1;this.engA=e.createOscillator(),this.engA.type="sawtooth",this.engB=e.createOscillator(),this.engB.type="square",this.engF=e.createBiquadFilter(),this.engF.type="lowpass",this.engF.Q.value=4,this.engG=e.createGain(),this.engG.gain.value=0;const o=e.createGain();o.gain.value=.6,this.engA.connect(this.engF),this.engB.connect(o).connect(this.engF),this.engF.connect(this.engG).connect(this.sfx),this.engA.start(),this.engB.start();const c=e.createBufferSource();c.buffer=this.noise,c.loop=!0;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=2400,l.Q.value=6,this.skidG=e.createGain(),this.skidG.gain.value=0,c.connect(l).connect(this.skidG).connect(this.sfx),c.start()}toggleMute(){this.muted=!this.muted,this.ctx&&this.master.gain.setTargetAtTime(this.muted?0:.55,this.ctx.currentTime,.02)}engine(t,e,n){if(!this.ctx)return;const s=this.ctx.currentTime,r=38+e*120;this.engA.frequency.setTargetAtTime(r,s,.03),this.engB.frequency.setTargetAtTime(r*.5+1.5,s,.03),this.engF.frequency.setTargetAtTime(300+e*1400+n*600,s,.05),this.engG.gain.setTargetAtTime(t?.1+n*.08:0,s,.08)}skid(t){this.ctx&&this.skidG.gain.setTargetAtTime(t*.22,this.ctx.currentTime,.04)}tone(t,e,n,s,r=0,a,o){const c=this.ctx,l=c.currentTime+r,h=c.createOscillator();h.type=n,h.frequency.setValueAtTime(t,l),a&&h.frequency.exponentialRampToValueAtTime(a,l+e);const u=c.createGain();u.gain.setValueAtTime(s,l),u.gain.exponentialRampToValueAtTime(.001,l+e),h.connect(u).connect(o??this.sfx),h.start(l),h.stop(l+e+.02)}burst(t,e,n,s=0,r="lowpass",a,o){const c=this.ctx,l=o??c.currentTime+s,h=c.createBufferSource();h.buffer=this.noise;const u=c.createBiquadFilter();u.type=r,u.frequency.setValueAtTime(n,l),r==="lowpass"&&u.frequency.exponentialRampToValueAtTime(80,l+t);const d=c.createGain();d.gain.setValueAtTime(e,l),d.gain.exponentialRampToValueAtTime(.001,l+t),h.connect(u).connect(d).connect(a??this.sfx),h.start(l,Math.random()*.5),h.stop(l+t+.02)}crash(t){this.ctx&&(this.burst(t?.9:.35,t?.9:.5,t?4e3:2500),this.tone(t?90:140,t?.5:.2,"square",.35,0,30))}scrape(){this.ctx&&this.burst(.18,.25,3e3,0,"highpass")}pop(){this.ctx&&(this.burst(.09,.5,900),this.tone(70,.08,"square",.25,0,40))}gun(t=1){if(this.ctx)for(const[e,n]of[[0,1],[.048,.8]]){const s=.9+Math.random()*.2,r=t*n;this.burst(.045,.5*r,1900*s,e,"bandpass"),this.burst(.11,.42*r,650*s,e),this.tone(125*s,.07,"sine",.38*r,e,42),this.burst(.014,.22*r,5200,e+.004,"highpass")}}ping(){this.ctx&&(this.tone(1800+Math.random()*900,.12,"triangle",.22,0,900),this.burst(.04,.25,6e3,0,"highpass"))}turbo(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noise;const s=t.createBiquadFilter();s.type="bandpass",s.Q.value=3,s.frequency.setValueAtTime(400,e),s.frequency.exponentialRampToValueAtTime(5e3,e+.7);const r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.5,e+.08),r.gain.exponentialRampToValueAtTime(.001,e+1.1),n.connect(s).connect(r).connect(this.sfx),n.start(e),n.stop(e+1.2),this.tone(90,.6,"sawtooth",.25,0,240),this.tone(660,.25,"square",.1,.05,1320)}countBeep(t){this.ctx&&(t?this.tone(880,.7,"square",.22):this.tone(440,.25,"square",.22))}blip(){this.ctx&&this.tone(660,.07,"square",.12,0,990)}coin(){this.ctx&&(this.tone(988,.08,"square",.15),this.tone(1319,.3,"square",.15,.08))}jingle(){this.ctx&&[523,659,784,1047,784,1047].forEach((t,e)=>this.tone(t,.16,"square",.15,e*.09))}fanfare(){this.ctx&&[392,523,659,784,659,784,1047].forEach((t,e)=>this.tone(t,e===6?.8:.18,"square",.16,e*.13))}sad(){this.ctx&&[392,370,349,330].forEach((t,e)=>this.tone(t,e===3?.9:.3,"triangle",.25,e*.3))}music(t){if(!this.ctx)return;const e=t?O0[t]:null;e!==this.song&&(this.song=e,this.step=0,this.nextTime=this.ctx.currentTime+.1,this.timer!==null&&window.clearInterval(this.timer),this.timer=null,e&&(this.delay.delayTime.value=60/e.bpm*.75,this.timer=window.setInterval(()=>this.schedule(),25)))}schedule(){const t=this.ctx,e=this.song;if(!e)return;const n=60/e.bpm/4;for(this.nextTime<t.currentTime-.2&&(this.nextTime=t.currentTime+.05);this.nextTime<t.currentTime+.12;)this.playStep(e,this.step,this.nextTime,n),this.step=(this.step+1)%(e.chords.length*16),this.nextTime+=n}playStep(t,e,n,s){const r=Math.floor(e/16),a=e%16,[o,c]=t.chords[r],l=F0[o],h=t.bass[a];if(h!=null&&this.voice(Ws(36+l+h),s*.9,"sawtooth",.32,n,700),t.stabs!==!1&&a%4===2)for(const f of c)this.voice(Ws(60+l+f),s*1.2,"square",.045,n,2600);if(t.pad&&a===0)for(const f of c)this.padNote(Ws(48+l+f),s*16,n);if(t.arp){const f=t.arp.pattern[a%t.arp.pattern.length],g=c[f%c.length]+12*Math.floor(f/c.length);this.voice(Ws((t.arp.oct+1)*12+l+g),s*.7,t.arp.wave,.045,n,3200,!1,!0)}const u=t.lead[r].split(/\s+/),d=u[a];if(d&&d!=="."&&d!=="-"){let f=1;for(;a+f<16&&u[a+f]===".";)f++;this.voice(Ws(Mg(d)),s*f*.95,t.leadWave,.11,n,3800,!0)}if(t.kick.includes(a)){const f=this.ctx,g=f.createOscillator(),_=f.createGain();g.frequency.setValueAtTime(150,n),g.frequency.exponentialRampToValueAtTime(40,n+.12),_.gain.setValueAtTime(.7,n),_.gain.exponentialRampToValueAtTime(.001,n+.18),g.connect(_).connect(this.musicBus),g.start(n),g.stop(n+.2)}t.snare.includes(a)&&(t.gated?(this.burst(.26,.55,1500,0,"bandpass",this.musicBus,n),this.burst(.2,.3,5e3,0,"highpass",this.musicBus,n)):this.burst(.14,.45,1800,0,"bandpass",this.musicBus,n)),t.hat.includes(a)&&this.burst(.04,.18,7e3,0,"highpass",this.musicBus,n)}padNote(t,e,n){const s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.value=1400;const a=s.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.028,n+Math.min(.35,e*.3)),a.gain.setValueAtTime(.028,n+e*.85),a.gain.linearRampToValueAtTime(0,n+e),r.connect(a).connect(this.musicBus);for(const o of[-9,9]){const c=s.createOscillator();c.type="sawtooth",c.frequency.setValueAtTime(t,n),c.detune.value=o,c.connect(r),c.start(n),c.stop(n+e+.02)}}voice(t,e,n,s,r,a,o=!1,c=!1){const l=this.ctx;if(n==="fm"){const g=l.createOscillator(),_=l.createOscillator(),m=l.createGain();g.frequency.setValueAtTime(t,r),_.frequency.setValueAtTime(t*2,r),m.gain.setValueAtTime(t*3,r),m.gain.exponentialRampToValueAtTime(t*.3,r+Math.max(.05,e)),_.connect(m).connect(g.frequency);const p=l.createGain();p.gain.setValueAtTime(0,r),p.gain.linearRampToValueAtTime(s*1.3,r+.004),p.gain.exponentialRampToValueAtTime(s*.4,r+Math.max(.05,e*.8)),p.gain.linearRampToValueAtTime(0,r+e+.05),g.connect(p).connect(this.musicBus),o&&p.connect(this.delay);for(const x of[g,_])x.start(r),x.stop(r+e+.08);return}const h=l.createOscillator(),u=[];if(n==="saw2"&&(s*=.6),n==="saw2"){h.type="sawtooth",h.detune.value=-8;const g=l.createOscillator();g.type="sawtooth",g.detune.value=8,g.frequency.setValueAtTime(t,r),u.push(g)}else h.type=n;if(h.frequency.setValueAtTime(t,r),o){const g=l.createOscillator(),_=l.createGain();g.frequency.value=6,_.gain.setValueAtTime(0,r),_.gain.linearRampToValueAtTime(t*.012,r+Math.min(e,.4)),g.connect(_).connect(h.frequency);for(const m of u)_.connect(m.frequency);g.start(r),g.stop(r+e+.05)}const d=l.createBiquadFilter();d.type="lowpass",d.frequency.value=a;const f=l.createGain();f.gain.setValueAtTime(0,r),f.gain.linearRampToValueAtTime(s,r+.005),f.gain.setValueAtTime(s,r+Math.max(.01,e-.03)),f.gain.linearRampToValueAtTime(0,r+e),h.connect(d).connect(f).connect(this.musicBus),(o||c)&&f.connect(this.delay);for(const g of[h,...u])g!==h&&g.connect(d),g.start(r),g.stop(r+e+.02)}}const yg=()=>"92",ie={mode:yg(),get modern(){return this.mode==="92"},get width(){return this.modern?640:426},get height(){return this.modern?360:240}};function bg(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);const s=new lr(t);return s.colorSpace=Oe,s}const Ta='"Press Start 2P", monospace',Sg='"Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", "Noto Sans CJK JP", "Noto Sans JP", sans-serif',Gr=i=>"#"+i.toString(16).padStart(6,"0");class Eg{constructor(){this.cw=64,this.ch=32,this.cols=8,this.rows=32,this.used=[],this.canvas=document.createElement("canvas"),this.canvas.width=this.cw*this.cols,this.canvas.height=this.ch*this.rows,this.ctx=this.canvas.getContext("2d"),this.ctx.imageSmoothingEnabled=!1,this.texture=new lr(this.canvas),this.texture.magFilter=We,this.texture.minFilter=r0,this.texture.colorSpace=Oe}alloc(t,e){for(let n=0;n+e<=this.rows;n++)for(let s=0;s+t<=this.cols;s++){let r=!0;for(let a=n;a<n+e&&r;a++)for(let o=s;o<s+t;o++)if(this.used[a*this.cols+o]){r=!1;break}if(r){for(let a=n;a<n+e;a++)for(let o=s;o<s+t;o++)this.used[a*this.cols+o]=!0;return[s,n]}}throw new Error("sign atlas full")}add(t,e=1,n=1){const[s,r]=this.alloc(e,n),a=s*this.cw,o=r*this.ch,c=this.cw*e,l=this.ch*n,h=this.ctx;if(h.save(),h.beginPath(),h.rect(a,o,c,l),h.clip(),h.fillStyle=Gr(t.bg),h.fillRect(a,o,c,l),t.stripes===-1)for(let _=0;_<l;_+=8)for(let m=0;m<c;m+=8)(m+_)/8%2===0&&(h.fillStyle="#000",h.fillRect(a+m,o+_,8,8));else t.stripes!==void 0&&(h.fillStyle=Gr(t.stripes),h.fillRect(a,o+l-6,c,3),h.fillRect(a,o+3,c,3));if(t.border!==void 0&&(h.strokeStyle=Gr(t.border),h.lineWidth=3,h.strokeRect(a+1.5,o+1.5,c-3,l-3)),h.fillStyle=Gr(t.fg),t.arrows){const _=c/3,m=_*.38;for(let y=0;y<3;y++){const v=a+y*_+_*.12,T=v+_*.62,[E,w]=t.arrows==="R"?[v,T]:[T,v],C=t.arrows==="R"?1:-1;h.beginPath(),h.moveTo(E,o+3),h.lineTo(E+C*m,o+3),h.lineTo(w,o+l/2),h.lineTo(E+C*m,o+l-3),h.lineTo(E,o+l-3),h.lineTo(w-C*m,o+l/2),h.closePath(),h.fill()}h.restore(),this.texture.needsUpdate=!0;const p=this.canvas.width,x=this.canvas.height;return[a/p,1-(o+l)/x,(a+c)/p,1-o/x]}h.textAlign="center",h.textBaseline="middle";const u=t.jp?Sg:Ta;if(t.vertical){const g=[...t.text],_=Math.min(c-6,Math.floor((l-6)/g.length));h.font=`bold ${_}px ${u}`,g.forEach((m,p)=>h.fillText(m,a+c/2,o+4+_*(p+.5)))}else{const g=t.sub?2:1,_=t.jp?(l-6)/g:8*Math.max(1,Math.floor((l-8)/g/10));let m=Math.floor(_);for(h.font=`bold ${m}px ${u}`;m>6&&h.measureText(t.text).width>c-6;){if(m-=t.jp?1:8,m<8&&!t.jp){m=8;break}h.font=`bold ${m}px ${u}`}const p=t.sub?o+l*.34:o+l/2+1;h.fillText(t.text,a+c/2,p),t.sub&&(h.font=`8px ${Ta}`,h.fillText(t.sub,a+c/2,o+l*.74))}h.restore(),this.texture.needsUpdate=!0;const d=this.canvas.width,f=this.canvas.height;return[a/d,1-(o+l)/f,(a+c)/d,1-o/f]}}const _t=852,Fe=480,ai=i=>"#"+i.toString(16).padStart(6,"0"),Vt=16769088,qt=16777215,en=16751136,Pe=16724016,on=4255999,rs=16734880,wg=4251712;class Tg{constructor(t){this.canvas=t,t.width=_t,t.height=Fe,this.g=t.getContext("2d"),this.g.imageSmoothingEnabled=!1}clear(){this.g.clearRect(0,0,_t,Fe)}text(t,e,n,s,r,a="left",o=0){const c=this.g;c.font=`${s}px ${Ta}`,c.textAlign=a,c.textBaseline="top";const l=s<8?1:Math.max(2,s/8);c.fillStyle=ai(o),c.fillText(t,e+l,n+l),c.fillStyle=ai(r),c.fillText(t,e,n)}shade(t,e,n,s,r=.6){this.g.fillStyle=`rgba(10,10,32,${r})`,this.g.fillRect(t,e,n,s)}box(t,e,n,s,r,a,o=4){const c=this.g;c.fillStyle=ai(a),c.fillRect(t,e,n,s),c.fillStyle=ai(r),c.fillRect(t+o,e+o,n-o*2,s-o*2)}rect(t,e,n,s,r){this.g.fillStyle=ai(r),this.g.fillRect(t,e,n,s)}logo(t,e,n,s,r,a,o){const c=this.g;c.font=`${s}px ${Ta}`,c.textAlign="center",c.textBaseline="top";for(let l=s/6;l>0;l-=2)c.fillStyle=ai(o),c.fillText(t,e+l*.5,n+l);c.fillStyle="#000";for(const[l,h]of[[-3,0],[3,0],[0,-3],[0,3]])c.fillText(t,e+l,n+h);c.save(),c.beginPath(),c.rect(0,n-4,_t,s*.5+4),c.clip(),c.fillStyle=ai(r),c.fillText(t,e,n),c.restore(),c.save(),c.beginPath(),c.rect(0,n+s*.5,_t,s),c.clip(),c.fillStyle=ai(a),c.fillText(t,e,n),c.restore()}flare(t,e,n){const s=this.g,r=_t/2,a=Fe/2;s.save(),s.globalCompositeOperation="lighter";const o=s.createRadialGradient(t,e,0,t,e,150);o.addColorStop(0,`rgba(255,240,200,${.55*n})`),o.addColorStop(.3,`rgba(255,190,120,${.22*n})`),o.addColorStop(1,"rgba(255,160,100,0)"),s.fillStyle=o,s.fillRect(t-150,e-150,300,300);const c=s.createLinearGradient(t-260,e,t+260,e);c.addColorStop(0,"rgba(255,220,180,0)"),c.addColorStop(.5,`rgba(255,230,190,${.35*n})`),c.addColorStop(1,"rgba(255,220,180,0)"),s.fillStyle=c,s.fillRect(t-260,e-2,520,4);const l=[[.35,18,"255,200,90",.22],[.62,10,"140,255,170",.2],[.9,34,"120,160,255",.12],[1.25,14,"255,120,200",.18],[1.6,52,"255,190,110",.09],[1.95,22,"120,230,255",.14]];for(const[h,u,d,f]of l){const g=t+(r-t)*h,_=e+(a-e)*h;s.fillStyle=`rgba(${d},${f*n})`,s.beginPath();for(let m=0;m<6;m++){const p=m/6*Math.PI*2+Math.PI/6,x=g+Math.cos(p)*u,y=_+Math.sin(p)*u;m===0?s.moveTo(x,y):s.lineTo(x,y)}s.closePath(),s.fill()}s.restore()}tach(t,e,n){const r=Math.round(n*24);for(let a=0;a<24;a++){const o=a<13?wg:a<20?Vt:Pe,c=8+Math.floor(a*.9);this.rect(t+a*12,e-c,10,c,a<r?o:2109472)}}}const jt=6,Ag=3,Z=11,Di=4,rr=Z*2/Di;class Rg{constructor(){this.segs=[],this.stageStarts=[],this.goalSeg=0}seg(t){const e=this.segs.length;return this.segs[t<0?0:t>=e?e-1:t]}H(t){const e=this.segs.length;return t<=0?this.segs[0].heading:t>=e?this.segs[e-1].heading+this.segs[e-1].curve*jt:this.segs[t].heading}Y(t){return this.seg(t).y}get goalDist(){return this.goalSeg*jt}}const Cg=(i,t,e)=>i+(t-i)*e*e,Pg=(i,t,e)=>i+(t-i)*(1-(1-e)*(1-e)),_o=(i,t,e)=>i+(t-i)*(-Math.cos(e*Math.PI)/2+.5);class Ts{constructor(t,e=0){this.profileOf=t,this.track=new Rg,this.heading=0,this.stage=0,this.zone="",this.tunnel=!1,this.y=e}push(t,e){this.track.segs.push({curve:t,y:e,heading:this.heading,stage:this.stage,zone:this.zone,profile:this.profileOf(this.zone,this.tunnel),tunnel:this.tunnel,props:[]}),this.heading+=t*jt}section(t,e,n,s,r){const a=t+e+n,o=this.y;let c=0;for(let l=0;l<t;l++,c++)this.push(Cg(0,s,l/t),_o(o,o+r,c/a));for(let l=0;l<e;l++,c++)this.push(s,_o(o,o+r,c/a));for(let l=0;l<n;l++,c++)this.push(Pg(s,0,l/n),_o(o,o+r,c/a));this.y=o+r}straight(t,e=0){this.section(0,t,0,0,e)}stageFrom(t,e){this.zone=t.zone,this.track.stageStarts.push(this.track.segs.length);const n=this.track.segs.length+t.length,s=Math.min(t.yMax,Math.max(t.yMin,this.y));Math.abs(s-this.y)>.5?this.straight(40,s-this.y):this.straight(20);let r=0;for(;this.track.segs.length<n;){const a=n-this.track.segs.length,o=!!t.tunnels&&r===0&&a<t.length*.55;this.tunnel=!!t.tunnels&&(o||e.chance(t.tunnels))&&a>120,this.tunnel&&r++;const c=this.zone;this.tunnel&&t.tunnelZone&&(this.zone=t.tunnelZone);let l=e.sign();this.heading>.7&&(l=-1),this.heading<-.7&&(l=1);const h=e.range(9e-4,.0032)*t.curvy;let u=0;e.chance(.25+t.hilly*.6)&&(u=e.range(10,45)*t.hilly*e.sign(),this.y+u>t.yMax&&(u=t.yMax-this.y),this.y+u<t.yMin&&(u=t.yMin-this.y));const d=e.next();if(this.tunnel)this.section(20,e.int(40,80),20,h*.5*l,Math.min(u,0));else if(d<.18)this.straight(e.int(25,60),u);else if(d<.42){const f=e.int(15,35);this.section(15,f,15,h*l,u*.5),this.section(15,f,15,-h*l,u*.5)}else this.section(e.int(15,30),e.int(25,80),e.int(15,30),h*l,u);this.tunnel=!1,this.zone=c}this.stage++}finish(t){return this.stage--,this.track.goalSeg=this.track.segs.length,this.straight(t),this.track}}const nr=6,k0=200,as=nr+k0+1;class Ig{constructor(t){this.track=t,this.start=0,this.bx=new Float32Array(as),this.by=new Float32Array(as),this.bz=new Float32Array(as),this.bh=new Float32Array(as),this.yRef=0,this.heading=0,this.count=nr+k0}update(t){const e=this.track,n=Math.floor(t/jt),s=t/jt-n,r=e.H(n)+e.seg(n).curve*s*jt;this.heading=r,this.yRef=e.Y(n)+(e.Y(n+1)-e.Y(n))*s,this.start=n-nr;const{bx:a,bz:o,bh:c,by:l}=this,h=nr,u=nr+1;let d=e.H(n+1)-r,f=(1-s)*jt;c[u]=d,a[u]=Math.sin(d/2)*f,o[u]=-Math.cos(d/2)*f;for(let g=u+1;g<as;g++){d=e.H(this.start+g)-r;const _=(c[g-1]+d)/2;c[g]=d,a[g]=a[g-1]+Math.sin(_)*jt,o[g]=o[g-1]-Math.cos(_)*jt}d=e.H(n)-r,f=s*jt,c[h]=d,a[h]=-Math.sin(d/2)*f,o[h]=Math.cos(d/2)*f;for(let g=h-1;g>=0;g--){d=e.H(this.start+g)-r;const _=(c[g+1]+d)/2;c[g]=d,a[g]=a[g+1]-Math.sin(_)*jt,o[g]=o[g+1]+Math.cos(_)*jt}for(let g=0;g<as;g++)l[g]=e.Y(this.start+g)-this.yRef}sample(t,e,n){const s=t/jt,r=Math.floor(s),a=s-r,o=r-this.start;if(o<0||o>=this.count)return!1;const c=this.bh[o]+(this.bh[o+1]-this.bh[o])*a;return n.h=c,n.x=this.bx[o]+(this.bx[o+1]-this.bx[o])*a+Math.cos(c)*e,n.z=this.bz[o]+(this.bz[o+1]-this.bz[o])*a+Math.sin(c)*e,n.y=this.by[o]+(this.by[o+1]-this.by[o])*a,!0}}const Rt=(i,t,e,n,s,r,a)=>({z:i,w:t,yb:e,belt:n,top:s,wt:r,seg:a}),Ai=657932,Ue=12063760,Mo=16747040,fn=(i,t,e)=>[{x:i,y:t,r:e},{x:-i,y:t,r:e}],He=[{id:"testarossa",rimStyle:"star",trim:12095592,arch:.04,front:"popup",make:"FERRARI",name:"TESTAROSSA",year:1984,group:"80s EXOTIC",paints:[14160924,15921902,16765976],stations:[Rt(-2.24,.88,.3,.5,.56,.8,"p"),Rt(-1.7,.93,.24,.62,.68,.86,"p"),Rt(-.85,.96,.22,.74,.8,.8,"ws"),Rt(-.05,.97,.22,.8,1.12,.62,"rf"),Rt(.55,.98,.22,.84,1.12,.62,"rw"),Rt(1,.99,.22,.87,.98,.8,"p"),Rt(2.24,.99,.28,.9,.96,.86,"p")],wheels:{r:.32,fz:-1.27,rz:1.28,fx:.78,rx:.82,rim:14212320,spokes:5},rear:[{x:0,y:.64,w:1.92,h:.34,c:Ai}],lights:[{x:.62,y:.64,w:.6,h:.22,c:Ue,brake:!0},{x:.22,y:.64,w:.18,h:.22,c:Mo}],slats:{y0:.5,y1:.78,n:6,w:.95},side:[{kind:"strakes",z0:-.3,z1:1.05,y0:.38,y1:.8,n:5}],exhaust:[...fn(.55,.33,.05),...fn(.7,.33,.05)],plateY:.38,stats:{vmax:290,accel:.95,grip:.97}},{id:"countach",rimStyle:"dial",trim:10516560,arch:.07,front:"popup",make:"LAMBORGHINI",name:"COUNTACH QV",year:1985,group:"80s EXOTIC",paints:[16053486,14161944,16765976],stations:[Rt(-2.07,.86,.28,.4,.44,.76,"p"),Rt(-1.3,.92,.24,.56,.62,.84,"p"),Rt(-.75,.95,.22,.66,.72,.84,"ws"),Rt(.15,.97,.22,.74,1.06,.6,"rf"),Rt(.65,.99,.22,.78,1.06,.62,"rw"),Rt(1.05,1,.22,.84,.94,.88,"p"),Rt(2.07,1,.28,.86,.92,.9,"p")],wheels:{r:.32,fz:-1.22,rz:1.23,fx:.8,rx:.84,rim:13158604,spokes:5},rear:[{x:0,y:.6,w:.84,h:.32,c:Ai}],lights:[{x:.7,y:.67,w:.42,h:.15,c:Ue,brake:!0},{x:.7,y:.52,w:.42,h:.1,c:Mo}],side:[{kind:"naca",z0:-.5,z1:.35,y0:.5,y1:.72},{kind:"intake",z0:.6,z1:1.2,y0:.5,y1:.8}],wing:{kind:"big",z:1.95,y:1.28,w:.95,d:.38},exhaust:[...fn(.32,.32,.055),...fn(.5,.32,.055)],plateY:.42,stats:{vmax:298,accel:1,grip:.92}},{id:"f40",rimStyle:"star",trim:9050132,arch:.05,front:"popup",make:"FERRARI",name:"F40",year:1987,group:"80s EXOTIC",paints:[14686232,16765976,15921902],stations:[Rt(-2.18,.9,.27,.46,.5,.8,"p"),Rt(-1.5,.95,.22,.6,.66,.88,"p"),Rt(-.8,.97,.22,.7,.76,.82,"ws"),Rt(-.05,.98,.22,.76,1.1,.62,"rf"),Rt(.5,.99,.22,.8,1.1,.62,"lv"),Rt(1.6,.99,.22,.86,.92,.86,"p"),Rt(2.18,.99,.28,.88,.92,.9,"p")],wheels:{r:.33,fz:-1.22,rz:1.23,fx:.8,rx:.82,rim:9079440,spokes:5},rear:[{x:0,y:.58,w:1.9,h:.34,c:Ai}],lights:[{x:.74,y:.7,w:.2,h:.2,c:Ue,round:!0,brake:!0},{x:.5,y:.7,w:.2,h:.2,c:Ue,round:!0,brake:!0}],side:[{kind:"naca",z0:-.6,z1:.1,y0:.55,y1:.7},{kind:"intake",z0:.2,z1:.9,y0:.45,y1:.78}],wing:{kind:"bridge",z:1.98,y:1.18,w:.98,d:.4},exhaust:[{x:0,y:.5,r:.06},...fn(.16,.5,.06)],plateY:.32,stats:{vmax:324,accel:1.05,grip:.9}},{id:"959",rimStyle:"six",trim:3816e3,front:"round",make:"PORSCHE",name:"959",year:1986,group:"80s EXOTIC",paints:[13159636,15921902,14161944],stations:[Rt(-2.13,.84,.3,.5,.56,.74,"p"),Rt(-1.6,.9,.26,.62,.7,.8,"p"),Rt(-.75,.92,.25,.76,.84,.72,"ws"),Rt(-.1,.92,.25,.8,1.26,.6,"rf"),Rt(.35,.92,.25,.82,1.26,.6,"rw"),Rt(1.45,.94,.25,.86,.96,.8,"p"),Rt(2.13,.94,.3,.88,.98,.84,"p")],wheels:{r:.34,fz:-1.13,rz:1.14,fx:.74,rx:.78,rim:14212324,spokes:5},rear:[{x:0,y:.74,w:1.86,h:.18,c:3803658}],lights:[{x:0,y:.74,w:1.5,h:.08,c:Ue,brake:!0,mirror:!1},{x:.8,y:.74,w:.22,h:.16,c:Ue,brake:!0}],wing:{kind:"hoop",z:1.85,y:1.12,w:.9,d:.45},exhaust:fn(.45,.34,.05),plateY:.5,stats:{vmax:315,accel:1,grip:1.05}},{id:"r32",rimStyle:"six",trim:2763312,arch:.045,front:"rect",make:"NISSAN",name:"SKYLINE GT-R R32",year:1989,group:"90s JAPAN",paints:[5923952,15921902,12064792],stations:[Rt(-2.27,.82,.32,.6,.66,.76,"p"),Rt(-1.9,.86,.3,.72,.78,.8,"p"),Rt(-.55,.87,.3,.8,.84,.8,"ws"),Rt(.25,.87,.3,.82,1.32,.66,"rf"),Rt(1,.87,.3,.84,1.3,.66,"rw"),Rt(1.55,.87,.3,.88,.98,.8,"p"),Rt(2.27,.86,.32,.9,1,.8,"p")],wheels:{r:.32,fz:-1.33,rz:1.29,fx:.74,rx:.74,rim:12106948,spokes:6},rear:[{x:0,y:.8,w:.5,h:.18,c:2763310}],lights:[{x:.64,y:.8,w:.22,h:.22,c:Ue,round:!0,brake:!0},{x:.38,y:.8,w:.22,h:.22,c:Ue,round:!0,brake:!0}],wing:{kind:"hoop",z:2.05,y:1.1,w:.74,d:.26},exhaust:[{x:.55,y:.32,r:.065}],plateY:.54,stats:{vmax:285,accel:1.06,grip:1.12}},{id:"supra",rimStyle:"star",trim:3815996,front:"rect",make:"TOYOTA",name:"SUPRA RZ",year:1993,group:"90s JAPAN",paints:[16738832,15921902,14161944],stations:[Rt(-2.26,.84,.3,.54,.6,.78,"p"),Rt(-1.8,.89,.27,.66,.72,.84,"p"),Rt(-.5,.9,.27,.76,.8,.8,"ws"),Rt(.25,.9,.27,.8,1.24,.64,"rf"),Rt(.8,.9,.27,.82,1.22,.64,"rw"),Rt(1.6,.9,.27,.86,.96,.84,"p"),Rt(2.26,.88,.3,.86,.94,.82,"p")],wheels:{r:.33,fz:-1.28,rz:1.27,fx:.76,rx:.76,rim:13685980,spokes:5},rear:[{x:0,y:.76,w:1.7,h:.28,c:2763312}],lights:[{x:.7,y:.77,w:.26,h:.22,c:Ue,round:!0,brake:!0},{x:.44,y:.77,w:.22,h:.2,c:Ue,round:!0,brake:!0}],wing:{kind:"hoop",z:2,y:1.22,w:.86,d:.32},exhaust:[{x:.6,y:.32,r:.075}],plateY:.5,stats:{vmax:290,accel:1.02,grip:1}},{id:"rx7",rimStyle:"multi",trim:2763310,front:"popup",make:"MAZDA",name:"RX-7",year:1992,group:"90s JAPAN",paints:[16765976,14161944,2787930],stations:[Rt(-2.15,.84,.3,.5,.56,.76,"p"),Rt(-1.6,.88,.26,.62,.68,.84,"p"),Rt(-.45,.88,.26,.74,.78,.78,"ws"),Rt(.25,.88,.26,.78,1.2,.6,"rf"),Rt(.7,.88,.26,.8,1.16,.62,"rw"),Rt(1.55,.88,.26,.84,.92,.8,"p"),Rt(2.15,.86,.3,.84,.9,.78,"p")],wheels:{r:.32,fz:-1.2,rz:1.23,fx:.74,rx:.74,rim:13159636,spokes:5},rear:[{x:0,y:.74,w:1.66,h:.18,c:Ai}],lights:[{x:.66,y:.74,w:.2,h:.15,c:Ue,round:!0,brake:!0},{x:.44,y:.74,w:.2,h:.15,c:Ue,round:!0,brake:!0}],wing:{kind:"hoop",z:1.98,y:1.06,w:.78,d:.24},exhaust:fn(.55,.33,.055),plateY:.52,stats:{vmax:280,accel:1.06,grip:1.12}},{id:"nsx",rimStyle:"multi",trim:1973794,front:"popup",make:"HONDA",name:"NSX",year:1990,group:"90s JAPAN",paints:[13113376,15921902,16765976],stations:[Rt(-2.21,.84,.3,.5,.56,.76,"p"),Rt(-1.6,.89,.26,.62,.68,.84,"p"),Rt(-.95,.9,.26,.72,.78,.8,"ws"),Rt(-.15,.9,.26,.78,1.15,.62,"rf"),Rt(.5,.9,.26,.82,1.13,.62,"rw"),Rt(1,.9,.26,.86,.96,.8,"p"),Rt(2.21,.9,.3,.9,.96,.84,"p")],wheels:{r:.32,fz:-1.26,rz:1.27,fx:.76,rx:.78,rim:14212324,spokes:7},rear:[{x:0,y:.74,w:1.78,h:.17,c:3803658}],lights:[{x:.68,y:.74,w:.4,h:.12,c:Ue,brake:!0},{x:0,y:.74,w:.9,h:.06,c:9048080,mirror:!1}],side:[{kind:"intake",z0:.3,z1:.95,y0:.45,y1:.78}],wing:{kind:"bridge",z:2,y:1.04,w:.9,d:.3},exhaust:fn(.4,.33,.05),plateY:.46,stats:{vmax:280,accel:1,grip:1.16}},{id:"diablo",rimStyle:"dial",trim:12095592,arch:.06,front:"popup",make:"LAMBORGHINI",name:"DIABLO",year:1990,group:"90s SUPERCAR",paints:[6957768,16765976,15921902],stations:[Rt(-2.23,.88,.28,.42,.46,.78,"p"),Rt(-1.4,.95,.24,.58,.64,.88,"p"),Rt(-.8,.98,.22,.66,.72,.86,"ws"),Rt(.2,1,.22,.74,1.1,.6,"rf"),Rt(.65,1.02,.22,.78,1.08,.64,"rw"),Rt(1.2,1.03,.22,.86,.96,.9,"p"),Rt(2.23,1.02,.28,.88,.96,.92,"p")],wheels:{r:.33,fz:-1.32,rz:1.33,fx:.82,rx:.86,rim:13685980,spokes:5},rear:[{x:0,y:.66,w:1.96,h:.3,c:Ai}],lights:[{x:.8,y:.7,w:.2,h:.17,c:Ue,round:!0,brake:!0},{x:.56,y:.7,w:.2,h:.17,c:Mo,round:!0}],side:[{kind:"intake",z0:.5,z1:1.25,y0:.45,y1:.82}],wing:{kind:"big",z:2,y:1.2,w:.96,d:.34},exhaust:[...fn(.12,.42,.055),...fn(.3,.42,.055)],plateY:.36,stats:{vmax:325,accel:1,grip:.9}},{id:"mclarenf1",rimStyle:"mesh",trim:2763312,drive:"C",front:"slim",make:"McLAREN",name:"F1",year:1992,group:"90s SUPERCAR",paints:[16747034,13159636,14161944],stations:[Rt(-2.15,.82,.3,.48,.52,.72,"p"),Rt(-1.5,.88,.26,.6,.66,.82,"p"),Rt(-1,.9,.25,.68,.74,.78,"ws"),Rt(-.15,.91,.25,.74,1.13,.56,"rf"),Rt(.35,.91,.25,.78,1.1,.58,"rw"),Rt(1,.91,.25,.84,.94,.82,"p"),Rt(2.15,.9,.3,.86,.92,.84,"p")],wheels:{r:.32,fz:-1.36,rz:1.36,fx:.74,rx:.76,rim:13159636,spokes:5},rear:[{x:0,y:.64,w:1.7,h:.34,c:Ai}],lights:[{x:.68,y:.74,w:.14,h:.14,c:Ue,round:!0,brake:!0},{x:.5,y:.74,w:.14,h:.14,c:Ue,round:!0,brake:!0}],side:[{kind:"intake",z0:.2,z1:.9,y0:.5,y1:.82}],wing:{kind:"duck",z:2.1,y:.97,w:.86,d:.14},scoop:!0,exhaust:[{x:0,y:.54,r:.09}],plateY:.34,stats:{vmax:340,accel:1.1,grip:.95}},{id:"f355",rimStyle:"star",trim:11567200,front:"popup",make:"FERRARI",name:"F355",year:1994,group:"90s SUPERCAR",paints:[14686232,16765976,1723034],stations:[Rt(-2.12,.86,.3,.5,.56,.78,"p"),Rt(-1.5,.92,.26,.62,.68,.86,"p"),Rt(-.8,.94,.24,.72,.78,.82,"ws"),Rt(-.05,.95,.24,.78,1.15,.6,"rf"),Rt(.5,.95,.24,.82,1.12,.62,"rw"),Rt(1.1,.95,.24,.86,.96,.84,"p"),Rt(2.12,.94,.3,.88,.98,.86,"p")],wheels:{r:.32,fz:-1.22,rz:1.23,fx:.78,rx:.8,rim:14212324,spokes:5},rear:[{x:0,y:.5,w:1.2,h:.22,c:Ai}],lights:[{x:.72,y:.74,w:.22,h:.2,c:Ue,round:!0,brake:!0},{x:.48,y:.74,w:.22,h:.2,c:Ue,round:!0,brake:!0}],side:[{kind:"intake",z0:.35,z1:1,y0:.45,y1:.76}],louvres:{z0:1.2,z1:1.9,n:6,w:.7},wing:{kind:"duck",z:2.05,y:1,w:.9,d:.16},exhaust:[...fn(.55,.38,.05),...fn(.7,.38,.05)],plateY:.6,stats:{vmax:295,accel:1,grip:1.05}}];class jn{constructor(t){this.s=t>>>0}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}chance(t){return this.next()<t}sign(){return this.next()<.5?-1:1}}const Tc=5,Sh=1.18,Hr=5,Vr=[100,150,200,300,400,500],Wr=300,vo=5,Lg=75,Dg=3,Ng=20,Eh=50/30,Ug=90,Og=6;function yo(i){return Math.max(.12,Math.min(.95,1.05-i/70))}function wh(i,t){return i<=Ug&&i>=-35&&Math.abs(t)<=Og}const Th=[{name:"ACE",skill:1.03,corner:.92,aggro:.8},{name:"AOKI",skill:1.01,corner:.95,aggro:.5},{name:"REYES",skill:1,corner:.82,aggro:.9},{name:"VOLK",skill:.99,corner:.88,aggro:.7},{name:"LOLA",skill:.97,corner:.9,aggro:.4},{name:"BLADE",skill:.96,corner:.78,aggro:1},{name:"KENJI",skill:.94,corner:.95,aggro:.3}],Fg=3.6;function kg(i,t,e,n=3,s=0){const r=new jn(e),a=He.filter(o=>o!==i);for(let o=a.length-1;o>0;o--){const c=r.int(0,o);[a[o],a[c]]=[a[c],a[o]]}return Th.map((o,c)=>{const l=a[c%a.length],h=Math.floor((Th.length-c)/2),u=c%2===0?-1:1;return{name:o.name,spec:l,paint:r.pick(l.paints),d:t+9+h*9,x:u*rr*.55,v:0,vmax:l.stats.vmax/Fg*o.skill,corner:o.corner,aggro:o.aggro,lane:u*r.range(1,4),steer:0,spin:0,braking:!1,finished:-1,bumpT:0,turbos:n,turboT:0,hp:100,wrecked:!1,wreckT:0,smokeT:0,ammo:s,gunTaken:0,burst:0,fireCool:0,gunT:0,gunTo:-1}})}const Ni=()=>performance.now()/1e3;function zg(i,t,e,n,s,r,a,o){const c=e.goalDist;for(const l of i){if(l.remote){const y=l.remote;Ni()-y.at>3&&(y.v=0);const v=Math.min(1,Ni()-y.at),T=y.d+y.v*v;l.v=y.v,l.d+=l.v*t,l.d+=(T-l.d)*Math.min(1,t*6),Math.abs(T-l.d)>30&&(l.d=T),l.x+=(y.x-l.x)*Math.min(1,t*8),l.spin-=l.v*t/.37;continue}if(!o){l.v=0;continue}if(l.wrecked){l.wreckT+=t,l.v=Math.max(0,l.v-22*t),l.d+=l.v*t,l.spin-=l.v*t/.37,l.braking=!0,l.steer*=1-t*3;continue}const h=e.seg(Math.floor(l.d/jt)),u=e.seg(Math.floor((l.d+70)/jt)),d=Math.max(Math.abs(h.curve),Math.abs(u.curve));let f=l.vmax*(1-Math.min(.3,d*70*(1.15-l.corner)));const g=l.d-r.pos;g>450?f*=.9:g>250?f*=.96:g<-300?f*=1.15:g<-120&&(f*=1.08),l.turboT>0?(l.turboT-=t,f*=1.18):l.turbos>0&&d<9e-4&&l.d<c-300&&g>-200&&g<120&&Math.random()<t*(.05+l.aggro*.1)&&(l.turbos--,l.turboT=Tc),l.d>c+250&&(f=0),l.bumpT>0&&(l.bumpT-=t,f*=.6),l.hp<35&&(f*=.8+.2*(l.hp/35));const _=n.map(y=>({d:y.d,x:y.x,v:y.v,len:s(y)}));for(const y of i)y!==l&&_.push({d:y.d,x:y.x,v:y.v,len:4.4});_.push({d:r.pos,x:r.px,v:r.speed,len:4.4});let m=null;for(const y of _){const v=y.d-l.d;v>0&&v<22+l.v*.5&&Math.abs(y.x-l.x)<2.6&&y.v<l.v+2&&(!m||v<m.d-l.d)&&(m=y)}let p=Math.max(-6,Math.min(6,u.curve*2200))+l.lane*.5;if(m){const y=m.x-3.4,v=m.x+3.4,T=y>-Z+1.2,E=v<Z-1.2;p=T&&(!E||Math.abs(y-l.x)<Math.abs(v-l.x))?y:E?v:l.x,!T&&!E&&(f=Math.min(f,m.v*(.98-(1-l.aggro)*.05)))}p=Math.max(-Z+1.4,Math.min(Z-1.4,p));const x=Math.sign(p-l.x)*Math.min(Math.abs(p-l.x),(6+l.aggro*4)*t);l.x+=x,l.steer+=(x/Math.max(t,.001)/10-l.steer)*Math.min(1,t*8),l.braking=f<l.v-3,l.v+=Math.sign(f-l.v)*Math.min(Math.abs(f-l.v),(l.braking||l.turboT>0?40:22)*t);for(const y of n)Math.abs(y.d-l.d)<s(y)&&Math.abs(y.x-l.x)<2&&(l.v=Math.min(l.v,y.v*.9),l.x+=Math.sign(l.x-y.x||1)*.6);for(const y of i)if(y!==l&&Math.abs(y.d-l.d)<4.2&&Math.abs(y.x-l.x)<1.9){const v=Math.sign(l.x-y.x||1)*.4;l.x+=v,l.d<y.d&&(l.v=Math.min(l.v,y.v))}l.d+=l.v*t,l.spin-=l.v*t/.37,l.finished<0&&l.d>=c&&(l.finished=a)}}function Ah(i,t,e){let n=1;for(const s of i)e>=0?s.finished>=0&&s.finished<e&&n++:(s.finished>=0||s.d>t)&&n++;return n}const qr=i=>`${i}${i===1?"ST":i===2?"ND":i===3?"RD":"TH"}`;function Xr(i,t,e,n,s,r){const a=t.goalDist,o=i.map(c=>({name:c.name,car:c.spec.name,time:c.finished>=0?c.finished:c.wrecked?1/0:r+Math.max(0,a-c.d)/Math.max(20,c.v||c.vmax),player:!1,estimated:c.finished<0&&!c.wrecked}));return o.push({name:e,car:n,time:s,player:!0,estimated:!1}),o.sort((c,l)=>c.time-l.time),o.map((c,l)=>({...c,pos:l+1}))}const Rh=i=>{const t=Math.floor(i/60),e=i-t*60;return`${t}'${e.toFixed(2).padStart(5,"0")}`},Bg="modulepreload",Gg=function(i,t){return new URL(i,t).href},Ch={},Hg=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=Gg(l,n),l in Ch)return;Ch[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const _=a[g];if(_.href===l&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Bg,h||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((g,_)=>{f.addEventListener("load",g),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})},oi=1,Vg="turbo-horizon-86";function Wg(i){const t=Math.random().toString(36).slice(2,10),e=new BroadcastChannel(`th86-${i}`),n=new Map;return e.onmessage=s=>{var a;const r=s.data;!r||r.f===t||r.t&&r.t!==t||(a=n.get(r.a))==null||a(r.d,r.f)},{selfId:t,send:(s,r,a)=>e.postMessage({a:s,d:r,f:t,t:a}),on:(s,r)=>n.set(s,r),onLeave:()=>{},onJoin:()=>{},leave:()=>e.close()}}async function qg(i){const t=await Hg(()=>import("./index-BRIyx3g7.js"),[],import.meta.url),e=t.joinRoom({appId:Vg},i),n=new Map,s=r=>{let a=n.get(r);return a||(a=e.makeAction(r),n.set(r,a)),a};return{selfId:t.selfId,send:(r,a,o)=>{s(r).send(a,o?{target:o}:void 0).catch(()=>{})},on:(r,a)=>{s(r).onMessage=(o,c)=>a(o,c.peerId)},onLeave:r=>{e.onPeerLeave=r},onJoin:r=>{e.onPeerJoin=r},leave:()=>{e.leave().catch(()=>{})}}}const Xe=(i,t,e,n=0)=>typeof i=="number"&&Number.isFinite(i)?Math.max(t,Math.min(e,i)):n,Hn=(i,t)=>typeof i=="string"?i.slice(0,t):"";function Ac(i){return i.toUpperCase().replace(/[^A-Z0-9 -]/g,"").replace(/\s+/g," ").trim().slice(0,10)}class Xg{constructor(t,e){this.room=t,this.peers=new Map,this.status="connecting",this.error="",this.selfId="",this.tr=null,this.timer=0,this.me={name:"PLAYER",car:0,paint:0,status:"lobby",raceId:""},this.onGo=null,this.onSt=null,this.onHit=null,(e?Promise.resolve(Wg(t)):qg(t)).then(n=>{this.tr=n,this.selfId=n.selfId,this.status="online",n.on("hi",(s,r)=>this.gotHi(s,r)),n.on("go",(s,r)=>this.gotGo(s,r)),n.on("st",(s,r)=>this.gotSt(s,r)),n.on("hit",(s,r)=>this.gotHit(s,r)),n.onJoin(s=>this.sendHi(s)),n.onLeave(s=>this.peers.delete(s)),this.sendHi(),this.timer=window.setInterval(()=>{this.sendHi();const s=performance.now()/1e3;for(const[r,a]of this.peers)s-a.seen>6&&this.peers.delete(r)},1e3)}).catch(n=>{this.status="error",this.error=String((n==null?void 0:n.message)??n)})}update(t){}setMe(t){const e=JSON.stringify(this.me);Object.assign(this.me,t),JSON.stringify(this.me)!==e&&this.sendHi()}sendGo(t){var e;(e=this.tr)==null||e.send("go",{p:oi,...t})}sendSt(t){var e;(e=this.tr)==null||e.send("st",{p:oi,...t})}sendHit(t){var e;(e=this.tr)==null||e.send("hit",{p:oi,...t})}gotHit(t,e){var s;const n=t;!n||n.p!==oi||(s=this.onHit)==null||s.call(this,{r:Hn(n.r,24),to:Hn(n.to,64),n:Math.round(Xe(n.n,0,10))},e)}leave(){var t;window.clearInterval(this.timer),(t=this.tr)==null||t.leave(),this.tr=null,this.peers.clear()}list(){return[...this.peers.values()].sort((t,e)=>t.joined-e.joined)}sendHi(t){var e;(e=this.tr)==null||e.send("hi",{p:oi,...this.me},t)}gotHi(t,e){const n=t;if(!n||n.p!==oi)return;const s=this.peers.get(e),r=performance.now()/1e3;s||this.sendHi(e),this.peers.set(e,{id:e,name:Ac(Hn(n.name,40))||"PLAYER",car:Math.round(Xe(n.car,0,63)),paint:Math.round(Xe(n.paint,0,15)),status:n.status==="race"?"race":"lobby",raceId:Hn(n.raceId,24),joined:(s==null?void 0:s.joined)??r,seen:r})}gotGo(t,e){var a;const n=t;if(!n||n.p!==oi||!Array.isArray(n.players))return;const s=n.players.slice(0,8).map(o=>({id:Hn(o==null?void 0:o.id,64),name:Ac(Hn(o==null?void 0:o.name,40))||"PLAYER",car:Math.round(Xe(o==null?void 0:o.car,0,63)),paint:Math.round(Xe(o==null?void 0:o.paint,0,15))})).filter(o=>o.id),r={raceId:Hn(n.raceId,24),route:Math.round(Xe(n.route,0,5)),seed:Math.round(Xe(n.seed,0,1e9)),turbos:Math.round(Xe(n.turbos,1,9,5)),weapons:n.weapons===!0,ammo:Math.round(Xe(n.ammo,10,999,300)),players:s};r.raceId&&((a=this.onGo)==null||a.call(this,r,e))}gotSt(t,e){var s;const n=t;!n||n.p!==oi||(s=this.onSt)==null||s.call(this,{r:Hn(n.r,24),d:Xe(n.d,-1e3,1e6),x:Xe(n.x,-50,50),v:Xe(n.v,0,200),steer:Xe(n.steer,-2,2),br:n.br===!0,tb:n.tb===!0,hp:Xe(n.hp,0,100,100),fin:Xe(n.fin,-1,1e5,-1),gun:Hn(n.gun,64)},e)}}function Ph(){const i=location.hash.replace(/^#/,"");return i.startsWith("join")?i.slice(5).toLowerCase().replace(/[^a-z0-9-]/g,"").slice(0,24)||"lobby":null}function Yg(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let x=0,y=o.length;x<y;x++){const v=o[x],T=i.attributes[v];c[v]=new T.constructor(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized);const E=i.morphAttributes[v];E&&(l[v]||(l[v]=[]),E.forEach((w,C)=>{const b=new w.array.constructor(w.count*w.itemSize);l[v][C]=new w.constructor(b,w.itemSize,w.normalized)}))}const f=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=f*_;for(let x=0;x<r;x++){const y=n?n.getX(x):x;let v="";for(let T=0,E=o.length;T<E;T++){const w=o[T],C=i.getAttribute(w),b=C.itemSize;for(let S=0;S<b;S++)v+=`${~~(C[u[S]](y)*_+m)},`}if(v in e)h.push(e[v]);else{for(let T=0,E=o.length;T<E;T++){const w=o[T],C=i.getAttribute(w),b=i.morphAttributes[w],S=C.itemSize,D=c[w],W=l[w];for(let B=0;B<S;B++){const V=u[B],et=d[B];if(D[et](a,C[V](y)),b)for(let U=0,rt=b.length;U<rt;U++)W[U][et](a,b[U][V](y))}}e[v]=a,h.push(a),a++}}const p=i.clone();for(const x in i.attributes){const y=c[x];if(p.setAttribute(x,new y.constructor(y.array.slice(0,a*y.itemSize),y.itemSize,y.normalized)),x in l)for(let v=0;v<l[x].length;v++){const T=l[x][v];p.morphAttributes[x][v]=new T.constructor(T.array.slice(0,a*T.itemSize),T.itemSize,T.normalized)}}return p.setIndex(h),p}class ut{constructor(t=!1){this.pos=[],this.col=[],this.uvs=[],this.tiles=[],this.hasUv=!1,this.hasTile=!1,this.curTile=[12,0,0],this.m=null,this.tmp=new $,this.c=new Lt,this.hasTile=t}layer(t,e){const n=this.curTile;return this.hasTile=!0,this.curTile=[t,0,0],e(),this.curTile=n,this}with(t,e){const n=this.m;return this.m=n?n.clone().multiply(t):t,e(),this.m=n,this}push(t,e,n){this.tmp.set(t[0],t[1],t[2]),this.m&&this.tmp.applyMatrix4(this.m),this.pos.push(this.tmp.x,this.tmp.y,this.tmp.z),this.c.setHex(e),this.col.push(this.c.r,this.c.g,this.c.b),n&&(this.hasUv=!0),this.uvs.push(n?n[0]:0,n?n[1]:0),this.tiles.push(this.curTile[0],this.curTile[1],this.curTile[2])}tri(t,e,n,s,r){return this.push(t,s,r==null?void 0:r[0]),this.push(e,s,r==null?void 0:r[1]),this.push(n,s,r==null?void 0:r[2]),this}quad(t,e,n,s,r,a){if(a){const[o,c,l,h]=a;this.tri(t,e,n,r,[[o,c],[l,c],[l,h]]),this.tri(t,n,s,r,[[o,c],[l,h],[o,h]])}else this.tri(t,e,n,r),this.tri(t,n,s,r);return this}quadC(t,e,n,s,r){return this.push(t,r[0]),this.push(e,r[1]),this.push(n,r[2]),this.push(t,r[0]),this.push(n,r[2]),this.push(s,r[3]),this}quadT(t,e,n,s,r,a,o){return this.hasTile=!0,this.curTile=[o[0],o[1],0],this.quad(t,e,n,s,r,a),this.curTile=[12,0,0],this}facadeBox(t,e,n,s,r,a,o,c,l,h,u,d=0){const[f,g]=Array.isArray(h)?h:[h,h],_=t-s/2,m=t+s/2,p=e-r/2,x=e+r/2,y=n-a/2,v=n+a/2,T=r/l,E=s/c,w=a/c;return this.quadT([m,p,v],[_,p,v],[_,x,v],[m,x,v],f,[d,0,d+E,T],o),this.quadT([_,p,y],[m,p,y],[m,x,y],[_,x,y],f,[d+.5,0,d+.5+E,T],o),this.quadT([_,p,v],[_,p,y],[_,x,y],[_,x,v],g,[d+.25,0,d+.25+w,T],o),this.quadT([m,p,y],[m,p,v],[m,x,v],[m,x,y],g,[d+.75,0,d+.75+w,T],o),this.quad([_,x,y],[m,x,y],[m,x,v],[_,x,v],u),this}poly(t,e){for(let n=1;n<t.length-1;n++)this.tri(t[0],t[n],t[n+1],e);return this}box(t,e,n,s,r,a,o){const c=Array.isArray(o)?o:[o],l=c[0],h=c[1]??l,u=c[2]??l,d=c[3]??l,f=t-s/2,g=t+s/2,_=e-r/2,m=e+r/2,p=n-a/2,x=n+a/2;return this.quad([f,m,p],[g,m,p],[g,m,x],[f,m,x],h),this.quad([f,_,p],[f,_,x],[g,_,x],[g,_,p],l),this.quad([f,_,p],[g,_,p],[g,m,p],[f,m,p],u),this.quad([g,_,x],[f,_,x],[f,m,x],[g,m,x],d),this.quad([f,_,x],[f,_,p],[f,m,p],[f,m,x],l),this.quad([g,_,p],[g,_,x],[g,m,x],[g,m,p],l),this}prism(t,e,n,s,r,a,o,c,l=null,h=0){const u=Array.isArray(c)?c:[c];for(let d=0;d<o;d++){const f=h+d/o*Math.PI*2,g=h+(d+1)/o*Math.PI*2,_=[t+Math.cos(f)*r,n,e+Math.sin(f)*r],m=[t+Math.cos(g)*r,n,e+Math.sin(g)*r],p=[t+Math.cos(g)*a,s,e+Math.sin(g)*a],x=[t+Math.cos(f)*a,s,e+Math.sin(f)*a];a<=1e-4?this.tri(_,m,x,u[d%u.length]):this.quad(_,m,p,x,u[d%u.length])}if(l!==null&&a>1e-4){const d=[];for(let f=0;f<o;f++){const g=h+f/o*Math.PI*2;d.push([t+Math.cos(g)*a,s,e+Math.sin(g)*a])}this.poly(d,l)}return this}blob(t,e,n,s,r,a,o){const c=new Kc(1,0),l=c.attributes.position,h=Array.isArray(o)?o:[o];for(let u=0;u<l.count;u+=3){const d=_=>[t+l.getX(_)*s,e+l.getY(_)*r,n+l.getZ(_)*a],f=l.getY(u)+l.getY(u+1)+l.getY(u+2),g=h.length>1?f>.3?h[0]:h[1]:h[0];this.tri(d(u),d(u+1),d(u+2),g)}return c.dispose(),this}build(t=!1){const e=new ke;if(e.setAttribute("position",new _e(this.pos,3)),e.setAttribute("color",new _e(this.col,3)),this.hasUv&&e.setAttribute("uv",new _e(this.uvs,2)),this.hasTile&&e.setAttribute("tile",new _e(this.tiles,3)),t){const n=Yg(e,1e-4);return e.dispose(),n.computeVertexNormals(),n.computeBoundingSphere(),n}return e.computeVertexNormals(),e.computeBoundingSphere(),e}get empty(){return this.pos.length===0}}function $g(i){return new Nt().makeRotationY(i)}function Ih(i,t,e){return new Nt().makeTranslation(i,t,e)}const ot={ASPHALT:0,PAINT:1,KERB:2,GRASS:3,SAND:4,SEA:5,CONCRETE:6,TUNNEL:7,PAVING:8,CITY:9,BAY:10,SHALLOW:11,FOAM:12,CEILING:13,DIRT:14,PLAIN:15},Kg={[ot.SEA]:.04,[ot.BAY]:.03,[ot.SHALLOW]:.06,[ot.FOAM]:.09},X=128,Cn=4;class Jc{constructor(t){this.cv=t,this.s=1,this.g=t.getContext("2d",{willReadFrequently:!0})}seed(t){this.s=t}rnd(){return this.s=this.s*1103515245+12345&2147483647,this.s/2147483647}noise(t,e,n,s,r=[1,1,1]){const a=this.g.createImageData(X,X);for(let o=0;o<X*X;o++){const c=Math.max(0,Math.min(1,n+(this.rnd()-.5)*2*s));a.data[o*4]=255*c*r[0],a.data[o*4+1]=255*c*r[1],a.data[o*4+2]=255*c*r[2],a.data[o*4+3]=255}this.g.putImageData(a,t,e)}wrapRect(t,e,n,s,r,a,o){const c=this.g;c.fillStyle=o;for(const l of[0,-X])for(const h of[0,-X]){const u=n+l,d=s+h;u+r<=0||d+a<=0||u>=X||d>=X||c.fillRect(t+Math.max(0,u),e+Math.max(0,d),Math.min(X,u+r)-Math.max(0,u),Math.min(X,d+a)-Math.max(0,d))}}dot(t,e,n,s=1){this.wrapRect(t,e,Math.floor(this.rnd()*X),Math.floor(this.rnd()*X),s,s,n)}grey(t,e=1){const n=Math.round(255*t);return`rgba(${n},${n},${n},${e})`}}function Zg(i,t){const e=t%Cn*X,n=Math.floor(t/Cn)*X,s=i.g;switch(i.seed(t*7919+13),s.save(),s.beginPath(),s.rect(e,n,X,X),s.clip(),t){case ot.ASPHALT:{i.noise(e,n,.88,.05);for(let r=0;r<700;r++)i.dot(e,n,i.grey(i.rnd()<.5?.97:.72));i.wrapRect(e,n,70,20,34,22,i.grey(.8)),i.wrapRect(e,n,70,20,34,1,i.grey(.68)),i.wrapRect(e,n,70,41,34,1,i.grey(.68)),s.strokeStyle=i.grey(.6),s.lineWidth=1;for(let r=0;r<3;r++){s.beginPath();let a=e+i.rnd()*X,o=n+i.rnd()*X;s.moveTo(a,o);for(let c=0;c<7;c++)a+=(i.rnd()-.5)*14,o+=3+i.rnd()*7,s.lineTo(a,o);s.stroke()}i.wrapRect(e,n,26,0,14,X,"rgba(0,0,0,0.05)"),i.wrapRect(e,n,88,0,14,X,"rgba(0,0,0,0.05)");break}case ot.PAINT:{i.noise(e,n,.97,.03);for(let r=0;r<160;r++)i.dot(e,n,i.grey(.78+i.rnd()*.1),i.rnd()<.3?2:1);break}case ot.KERB:{for(let r=0;r<X;r++){const a=.78+.22*Math.sin(r/X*Math.PI);s.fillStyle=i.grey(a),s.fillRect(e+r,n,1,X)}for(let r=0;r<X;r+=32)i.wrapRect(e,n,0,r,X,2,i.grey(.55));for(let r=0;r<200;r++)i.dot(e,n,"rgba(0,0,0,0.12)");break}case ot.GRASS:{i.noise(e,n,.84,.06);for(let r=0;r<40;r++){const a=i.rnd()*X,o=i.rnd()*X,c=4+i.rnd()*8;i.wrapRect(e,n,a,o,c,c*.6,"rgba(0,0,0,0.08)")}for(let r=0;r<420;r++){const a=Math.floor(i.rnd()*X),o=Math.floor(i.rnd()*X),c=i.rnd()<.6;i.wrapRect(e,n,a,o,1,2+Math.floor(i.rnd()*3),c?i.grey(1,.85):"rgba(0,0,0,0.25)")}for(let r=0;r<14;r++)i.dot(e,n,"rgba(255,255,255,1)",2);break}case ot.DIRT:{i.noise(e,n,.85,.08);for(let r=0;r<120;r++)i.dot(e,n,i.rnd()<.5?i.grey(1):i.grey(.62),i.rnd()<.3?2:1);break}case ot.SAND:{for(let r=0;r<X;r++)for(let a=0;a<X;a++){const c=.9+Math.sin(a/X*Math.PI*8+Math.sin(r/X*Math.PI*2)*2.2)*.04+(i.rnd()-.5)*.06;s.fillStyle=i.grey(c),s.fillRect(e+a,n+r,1,1)}for(let r=0;r<70;r++)i.dot(e,n,i.grey(1),i.rnd()<.3?2:1);for(let r=0;r<8;r++)i.wrapRect(e,n,40+r%2*7+r*2,r*16,4,7,"rgba(0,0,0,0.13)");break}case ot.SEA:case ot.BAY:case ot.SHALLOW:{const r=t===ot.SHALLOW?.86:.8;if(i.noise(e,n,r,.03),t===ot.SHALLOW){s.strokeStyle=i.grey(1,.55);for(let a=0;a<26;a++){s.beginPath();const o=e+i.rnd()*X,c=n+i.rnd()*X;s.moveTo(o,c),s.quadraticCurveTo(o+(i.rnd()-.5)*30,c+(i.rnd()-.5)*30,o+(i.rnd()-.5)*40,c+(i.rnd()-.5)*40),s.stroke()}}for(let a=0;a<60;a++){const o=i.rnd()*X,c=i.rnd()*X,l=6+i.rnd()*16;i.wrapRect(e,n,o,c+1,l,1,"rgba(0,0,0,0.12)"),i.wrapRect(e,n,o+2,c,l-3,1,i.grey(1,t===ot.BAY?.55:.9))}for(let a=0;a<40;a++)i.dot(e,n,i.grey(1));break}case ot.FOAM:{i.noise(e,n,.93,.07);for(let r=0;r<80;r++)i.wrapRect(e,n,i.rnd()*X,i.rnd()*X,3+i.rnd()*8,2,"rgba(0,0,0,0.08)");break}case ot.CONCRETE:{i.noise(e,n,.88,.04);for(let r=0;r<10;r++)i.wrapRect(e,n,i.rnd()*X,i.rnd()*X,6+i.rnd()*20,4+i.rnd()*14,"rgba(0,0,0,0.05)");i.wrapRect(e,n,0,0,2,X,i.grey(.6)),i.wrapRect(e,n,64,0,1,X,i.grey(.72)),i.wrapRect(e,n,0,0,X,1,i.grey(.72));for(let r=0;r<4;r++)i.wrapRect(e,n,10+r*31,0,2,20+i.rnd()*40,"rgba(0,0,0,0.07)");break}case ot.TUNNEL:{i.noise(e,n,.93,.03);for(let r=0;r<X;r+=16)i.wrapRect(e,n,0,r,X,1,i.grey(.72));for(let r=0;r<X;r+=16)for(let a=r/16%2?8:0;a<X;a+=16)i.wrapRect(e,n,a,r,1,16,i.grey(.76));for(let r=0;r<6;r++)i.wrapRect(e,n,i.rnd()*X,i.rnd()*X,10,6,"rgba(0,0,0,0.08)");break}case ot.CEILING:{i.noise(e,n,.86,.04);for(let r=0;r<X;r+=32)i.wrapRect(e,n,r,0,2,X,i.grey(.6));i.wrapRect(e,n,0,60,X,6,i.grey(.7));break}case ot.PAVING:{i.noise(e,n,.9,.04);for(let r=0;r<X;r+=16){i.wrapRect(e,n,0,r,X,1,i.grey(.68));for(let a=r/16%2?16:0;a<X;a+=32)i.wrapRect(e,n,a,r,1,16,i.grey(.68))}for(let r=0;r<12;r++)i.wrapRect(e,n,Math.floor(i.rnd()*4)*32+1,Math.floor(i.rnd()*8)*16+1,31,15,"rgba(0,0,0,0.05)");break}case ot.CITY:{s.fillStyle="#16182c",s.fillRect(e,n,X,X);for(let r=0;r<4;r++){const a=r*32+14;i.wrapRect(e,n,0,a,X,3,"#3a3a50"),i.wrapRect(e,n,r*32+14,0,3,X,"#3a3a50");for(let o=2;o<X;o+=8)i.wrapRect(e,n,o,a-1,1,1,"#ffd890")}for(let r=0;r<90;r++){const a=["#ffe8a0","#fff6d8","#a0f0ff","#ffb060"][Math.floor(i.rnd()*4)];i.dot(e,n,a)}for(let r=0;r<18;r++){const a=Math.floor(i.rnd()*4)*32+15;i.wrapRect(e,n,i.rnd()*X,a,2,1,i.rnd()<.5?"#ff3020":"#ffffff")}break}default:s.fillStyle="#ffffff",s.fillRect(e,n,X,X)}s.restore()}function jg(){const i=document.createElement("canvas");i.width=i.height=X*Cn;const t=new Jc(i);for(let e=0;e<16;e++)Zg(t,e);return Qc(i)}function Qc(i){const t=i.getContext("2d"),e=new Uint8Array(X*X*4*16);for(let s=0;s<16;s++){const r=t.getImageData(s%Cn*X,Math.floor(s/Cn)*X,X,X).data;for(let a=0;a<X;a++)e.set(r.subarray((X-1-a)*X*4,(X-a)*X*4),(s*X*X+a*X)*4)}const n=new Gc(e,X,X,16);return n.wrapS=n.wrapT=ya,n.magFilter=ln,n.minFilter=ui,n.generateMipmaps=!0,n.colorSpace=Oe,n.needsUpdate=!0,n}function hr(i){return[i,0]}const z0=new L0(new Uint8Array([255,255,255,255]),1,1);z0.needsUpdate=!0;function Aa(i,t,e){const n=e??{value:0};return i.map=z0,i.onBeforeCompile=s=>{s.uniforms.uTime=n,s.uniforms.uArr={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 tile;
varying vec3 vTile;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vTile = tile;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTile;
uniform float uTime;
uniform highp sampler2DArray uArr;`).replace("#include <map_fragment>",`
#ifdef USE_MAP
  vec2 tuv = vMapUv + vec2(0.0, vTile.z * uTime);
  diffuseColor *= texture(uArr, vec3(tuv, vTile.x + 0.25));
#endif`)},i.customProgramCacheKey=()=>"tilearray",n}const ye={HOTEL:0,DECO:1,SHOP:2,MOTEL:3,OFFICE_WARM:4,OFFICE_COOL:5,OFFICE_DARK:6,APARTMENT:7,STONE:8};function Jg(i,t){const e=t%Cn*X,n=Math.floor(t/Cn)*X,s=i.g;i.seed(t*104729+7);const r=(a,o,c,l,h)=>{s.fillStyle=h,s.fillRect(e+a,n+o,c,l)};switch(s.save(),s.beginPath(),s.rect(e,n,X,X),s.clip(),t){case ye.HOTEL:{r(0,0,X,X,"#f4f2ec");for(let a=0;a<4;a++){const o=a*32;r(0,o+30,X,2,"#d8d4cc");for(let c=0;c<4;c++){const l=c*32+5;r(l-1,o+5,24,20,"#c8c8c8");const h=s.createLinearGradient(0,n+o+6,0,n+o+24);h.addColorStop(0,"#2a6aa8"),h.addColorStop(1,"#6ab4e4"),s.fillStyle=h,s.fillRect(e+l,n+o+6,22,18),r(l+10,o+6,2,18,"#e8e8e8"),s.fillStyle="rgba(255,255,255,0.35)",s.beginPath(),s.moveTo(e+l+2,n+o+22),s.lineTo(e+l+9,n+o+7),s.lineTo(e+l+12,n+o+7),s.lineTo(e+l+5,n+o+22),s.fill(),r(l-3,o+21,28,2,"#ffffff");for(let u=0;u<7;u++)r(l-2+u*4,o+23,1,5,"#ffffff");r(l-3,o+28,28,2,"#bdbab2")}}break}case ye.DECO:{r(0,0,X,X,"#f6f0e4");for(let a=0;a<X;a+=32)r(a,0,4,X,"#e2dacb"),r(a+4,0,1,X,"#cfc6b4");for(let a=0;a<4;a++){const o=a*32;r(0,o,X,3,"#e8e0d0");for(let c=0;c<4;c++){const l=c*32+9;s.fillStyle="#3a78a8",s.beginPath(),s.arc(e+l+7,n+o+13,6,0,Math.PI*2),s.fill(),s.strokeStyle="#ffffff",s.lineWidth=1.5,s.stroke(),r(l+2,o+22,10,6,"#3a78a8"),r(l+1,o+21,12,1,"#ffffff")}}break}case ye.SHOP:{r(0,0,X,X,"#f2eee6"),r(0,0,X,10,"#e4ddd0");for(let a=0;a<4;a++)r(a*32+8,18,16,14,"#4a86b8");r(0,40,X,4,"#d0c8b8"),r(4,52,120,70,"#2a3a4c");for(let a=0;a<30;a++)r(6+i.rnd()*110,70+i.rnd()*44,4+i.rnd()*6,3+i.rnd()*6,["#ff6a8a","#ffe060","#60d0ff","#ffffff","#90e060"][Math.floor(i.rnd()*5)]);r(4,52,120,3,"#8ab8d8"),r(54,64,20,58,"#1a2430"),r(70,92,2,4,"#e0c060");for(let a=4;a<124;a+=30)r(a,52,2,70,"#d8d8d8");break}case ye.MOTEL:{r(0,0,X,X,"#f4efe6");for(let a=0;a<2;a++){const o=a*64;r(0,o+58,X,6,"#d6d0c4"),r(0,o+54,X,2,"#ffffff");for(let c=0;c<16;c++)r(c*8,o+54,1,6,"#ffffff");for(let c=0;c<2;c++){const l=c*64;r(l+6,o+14,16,38,["#2a8a8a","#c85a4a"][c]),r(l+18,o+32,2,3,"#e0c060"),r(l+30,o+18,26,18,"#4a7aa8"),r(l+30,o+18,26,2,"#ffffff"),r(l+34,o+38,14,8,"#c8c8c8"),r(l+35,o+39,12,1,"#9a9a9a")}}break}case ye.OFFICE_WARM:case ye.OFFICE_COOL:case ye.OFFICE_DARK:{r(0,0,X,X,"#1a1e36");const a=t===ye.OFFICE_WARM?.42:t===ye.OFFICE_COOL?.55:.12,o=["#ffe6a0","#ffd27a","#fff2c8"],c=["#e8f6ff","#c8ecff","#ffffff"];for(let l=0;l<8;l++){const h=l*16,u=t===ye.OFFICE_COOL&&i.rnd()<.5;for(let d=0;d<8;d++){const f=d*16,g=u||i.rnd()<a,_=g?i.rnd()<.15?"#8adfff":(t===ye.OFFICE_COOL?c:o)[Math.floor(i.rnd()*3)]:"#262c4c";if(r(f+2,h+3,12,10,_),g&&i.rnd()<.4)for(let m=0;m<4;m++)r(f+2,h+4+m*3,12,1,"rgba(0,0,0,0.25)");g&&i.rnd()<.2&&r(f+5,h+8,3,5,"rgba(20,20,40,0.6)"),g||r(f+3,h+4,4,1,"rgba(120,140,200,0.4)")}r(0,h,X,2,"#2a3054")}for(let l=0;l<X;l+=16)r(l,0,2,X,"#2c3258");break}case ye.APARTMENT:{r(0,0,X,X,"#2a2440");for(let a=0;a<6;a++){const o=a*21;for(let c=0;c<4;c++){const l=c*32,h=i.rnd()<.5;r(l+4,o+3,24,13,h?["#ffb860","#ffd890","#fff0c8"][Math.floor(i.rnd()*3)]:"#3a3456"),h&&r(l+4+i.rnd()*18,o+3,6,13,"rgba(255,240,220,0.6)"),r(l+2,o+15,28,2,"#8a86a0");for(let u=0;u<7;u++)r(l+3+u*4,o+17,1,3,"#6a6680");i.rnd()<.3&&r(l+24,o+9,4,6,"#b0b0c0")}}break}case ye.STONE:{i.noise(e,n,.9,.05);for(let a=0;a<X;a+=16)r(0,a,X,1,"rgba(0,0,0,0.18)");break}default:r(0,0,X,X,"#ffffff")}s.restore()}function Qg(){const i=document.createElement("canvas");i.width=i.height=X*Cn;const t=new Jc(i);for(let e=0;e<16;e++)Jg(t,e);return Qc(i)}const $t={LENS:0,LENS_ROUND:1,LENS_BAR:2,MESH:3,LOUVRE:4,TREAD:5,RIM_STAR:6,RIM_MULTI:7,RIM_MESH:8,RIM_DIAL:9,SIDEWALL:10,RIM_STEEL:11,PLAIN:12,HEADLAMP:13,SEAT:14,RIM_SIX:15},t2={star:$t.RIM_STAR,six:$t.RIM_SIX,multi:$t.RIM_MULTI,mesh:$t.RIM_MESH,dial:$t.RIM_DIAL,steel:$t.RIM_STEEL};function e2(i,t){const e=t%Cn*X,n=Math.floor(t/Cn)*X,s=i.g;i.seed(t*15485863+3);const r=(u,d,f,g,_)=>{s.fillStyle=_,s.fillRect(e+u,n+d,f,g)},a=X/2,o=(u,d,f=a,g=a)=>{s.fillStyle=d,s.beginPath(),s.arc(e+f,n+g,u,0,Math.PI*2),s.fill()},c=(u,d,f)=>{s.strokeStyle=f,s.lineWidth=d,s.beginPath(),s.arc(e+a,n+a,u,0,Math.PI*2),s.stroke()},l=(u,d=14)=>{o(d+3,i.grey(.55)),o(d,i.grey(.92));for(let f=0;f<u;f++){const g=f/u*Math.PI*2;o(2.6,i.grey(.35),a+Math.cos(g)*d*.62,a+Math.sin(g)*d*.62)}o(4,i.grey(.7))},h=()=>{c(61,6,i.grey(1)),c(57,2,i.grey(.6))};switch(s.save(),s.beginPath(),s.rect(e,n,X,X),s.clip(),s.clearRect(e,n,X,X),t){case $t.LENS:{r(0,0,X,X,i.grey(.55)),r(6,8,X-12,X-16,i.grey(.88));for(let d=10;d<X-10;d+=9)r(6,d,X-12,2,i.grey(.62));for(let d=10;d<X-8;d+=14)r(d,8,1,X-16,i.grey(.7));const u=s.createRadialGradient(e+a,n+a,4,e+a,n+a,60);u.addColorStop(0,"rgba(255,255,255,0.75)"),u.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=u,s.fillRect(e,n,X,X);break}case $t.LENS_ROUND:{r(0,0,X,X,i.grey(.5)),o(62,i.grey(.6));for(let u=58;u>8;u-=7)o(u,i.grey(.72+(58-u)/200)),c(u,1.5,i.grey(.55+(58-u)/250));o(12,i.grey(1));break}case $t.LENS_BAR:{r(0,0,X,X,i.grey(.7));for(let u=0;u<X;u+=4)r(u,0,2,X,i.grey(.9));r(0,0,X,10,i.grey(.5)),r(0,X-10,X,10,i.grey(.5)),r(0,a-3,X,6,i.grey(1));break}case $t.MESH:{r(0,0,X,X,i.grey(.12)),s.strokeStyle=i.grey(.85),s.lineWidth=1.6;for(let u=-X;u<X*2;u+=10)s.beginPath(),s.moveTo(e+u,n),s.lineTo(e+u+X,n+X),s.stroke(),s.beginPath(),s.moveTo(e+u,n+X),s.lineTo(e+u+X,n),s.stroke();break}case $t.LOUVRE:{for(let u=0;u<X;u+=16){const d=s.createLinearGradient(0,n+u,0,n+u+16);d.addColorStop(0,i.grey(1)),d.addColorStop(.55,i.grey(.7)),d.addColorStop(.6,i.grey(.08)),d.addColorStop(1,i.grey(.15)),s.fillStyle=d,s.fillRect(e,n+u,X,16)}break}case $t.TREAD:{i.noise(e,n,.85,.05);for(const u of[30,62,94])r(u,0,5,X,i.grey(.25));for(let u=0;u<X;u+=16)for(const[d,f]of[[0,30],[35,62],[67,94],[99,X]])s.strokeStyle=i.grey(.32),s.lineWidth=2.5,s.beginPath(),s.moveTo(e+d,n+u+(d<64?0:6)),s.lineTo(e+f,n+u+(d<64?6:0)),s.stroke();break}case $t.SIDEWALL:{r(0,0,X,X,i.grey(.16)),r(0,X-10,X,10,i.grey(.1)),r(0,0,X,6,i.grey(.24)),s.fillStyle=i.grey(.62),s.font="bold 28px monospace",s.textBaseline="middle",s.save(),s.translate(e+2,n+a),s.scale(.58,1.3),s.fillText("TURBO-R",0,0),s.restore();break}case $t.HEADLAMP:{r(0,0,X,X,i.grey(.55));const u=s.createRadialGradient(e+a,n+a,2,e+a,n+a,58);u.addColorStop(0,i.grey(1)),u.addColorStop(.3,i.grey(.95)),u.addColorStop(.75,i.grey(.72)),u.addColorStop(1,i.grey(.5)),s.fillStyle=u,s.fillRect(e+4,n+4,X-8,X-8),s.strokeStyle="rgba(0,0,0,0.12)",s.lineWidth=1;for(let d=8;d<X;d+=10)s.beginPath(),s.moveTo(e+d,n),s.lineTo(e+d,n+X),s.stroke(),s.beginPath(),s.moveTo(e,n+d),s.lineTo(e+X,n+d),s.stroke();break}case $t.SEAT:{r(0,0,X,X,i.grey(.8));for(let u=24;u<X-24;u+=10)r(u,0,2,X,i.grey(.55));r(0,0,20,X,i.grey(.65)),r(X-20,0,20,X,i.grey(.65));break}case $t.RIM_STAR:{h(),s.fillStyle=i.grey(.92);for(let u=0;u<5;u++){const d=u/5*Math.PI*2;s.save(),s.translate(e+a,n+a),s.rotate(d),s.beginPath(),s.moveTo(-9,0),s.lineTo(-6,59),s.lineTo(6,59),s.lineTo(9,0),s.fill(),s.fillStyle=i.grey(.6),s.fillRect(-1,10,2,46),s.fillStyle=i.grey(.92),s.restore()}l(5);break}case $t.RIM_SIX:{h();for(let u=0;u<6;u++){const d=u/6*Math.PI*2;s.save(),s.translate(e+a,n+a),s.rotate(d),s.fillStyle=i.grey(.9),s.fillRect(-7,0,5,59),s.fillRect(2,0,5,59),s.restore()}l(5,16);break}case $t.RIM_MULTI:{h();for(let u=0;u<7;u++){const d=u/7*Math.PI*2;s.save(),s.translate(e+a,n+a),s.rotate(d),s.fillStyle=i.grey(.92),s.beginPath(),s.moveTo(-4,8),s.quadraticCurveTo(-14,34,-6,59),s.lineTo(5,59),s.quadraticCurveTo(-2,34,6,8),s.fill(),s.restore()}l(5);break}case $t.RIM_MESH:{s.save(),s.beginPath(),s.arc(e+a,n+a,58,0,Math.PI*2),s.clip(),s.strokeStyle=i.grey(.88),s.lineWidth=3;for(let u=0;u<20;u++){const d=u/20*Math.PI*2;for(const f of[-.5,.5])s.beginPath(),s.moveTo(e+a+Math.cos(d)*14,n+a+Math.sin(d)*14),s.lineTo(e+a+Math.cos(d+f)*60,n+a+Math.sin(d+f)*60),s.stroke()}s.restore(),h(),l(5,16);break}case $t.RIM_DIAL:{o(60,i.grey(.86)),s.globalCompositeOperation="destination-out";for(let u=0;u<5;u++){const d=u/5*Math.PI*2;o(15,"#000",a+Math.cos(d)*36,a+Math.sin(d)*36)}s.globalCompositeOperation="source-over";for(let u=0;u<5;u++){const d=u/5*Math.PI*2;s.strokeStyle=i.grey(.55),s.lineWidth=2,s.beginPath(),s.arc(e+a+Math.cos(d)*36,n+a+Math.sin(d)*36,16,0,Math.PI*2),s.stroke()}h(),l(5);break}case $t.RIM_STEEL:{o(62,i.grey(.45)),o(52,i.grey(.9)),c(40,2,i.grey(.6));for(let u=0;u<8;u++){const d=u/8*Math.PI*2;o(4,i.grey(.4),a+Math.cos(d)*46,a+Math.sin(d)*46)}o(14,i.grey(.7));break}default:r(0,0,X,X,"#ffffff")}s.restore()}let Yr=null;function n2(){if(Yr)return Yr;const i=document.createElement("canvas");i.width=i.height=X*Cn;const t=new Jc(i);for(let e=0;e<16;e++)e2(t,e);return Yr=Qc(i),Yr}function Kn(i,t,e,n,s=10,r=7){const a=typeof n=="number"?()=>n:n,o=(c,l)=>{const h=l/r*Math.PI,u=c/s*Math.PI*2;return[t[0]+Math.sin(h)*Math.cos(u)*e[0],t[1]+Math.cos(h)*e[1],t[2]+Math.sin(h)*Math.sin(u)*e[2]]};for(let c=0;c<r;c++)for(let l=0;l<s;l++){const h=(c+.5)/r*Math.PI,u=(l+.5)/s*Math.PI*2,d=[Math.sin(h)*Math.cos(u),Math.cos(h),Math.sin(h)*Math.sin(u)];i.quad(o(l,c),o(l+1,c),o(l+1,c+1),o(l,c+1),a(d[0],d[1],d[2]))}}function B0(i,t,e,n,s=12,r=8){Kn(i,t,[e*.92,e,e*1.04],(a,o,c)=>c<-.42&&o>-.3&&o<.38?o>.2?2768472:1055270:c<-.5&&o<=-.3?14211284:Math.abs(a)<.2&&o>-.1?n:o<-.55?1710620:o>.3?16777215:15132386,s,r)}function G0(i,t,e,n,s){const r=new Lt(n).multiplyScalar(.7).getHex();Kn(i,t,e,(a,o)=>o>.15&&o<.45?s:o<-.3?r:n,10,6)}function i2(i,t,e){const n=new Lt(t).multiplyScalar(.8).getHex();Kn(i,[0,0,-.12],[.062,.062,.15],(a,o)=>o>.5?e:t,8,5),Kn(i,[0,-.012,-.33],[.052,.052,.13],n,8,5),Kn(i,[0,-.018,-.465],[.05,.055,.05],1315862,8,5);const s=2763824,r=4869718;return i.box(0,.035,-.56,.06,.075,.26,[s,r,s,s]),i.box(0,.077,-.56,.04,.01,.22,r),i.box(0,.02,-.4,.05,.03,.12,1973792),i.with(new Nt().makeTranslation(0,-.03,-.47).multiply(new Nt().makeRotationX(.25)),()=>i.box(0,0,0,.04,.1,.045,1710620)),i.with(new Nt().makeTranslation(0,-.07,-.6).multiply(new Nt().makeRotationX(-.18)),()=>i.box(0,0,0,.032,.16,.05,[2105380,3158068])),i.with(new Nt().makeRotationX(-Math.PI/2),()=>{i.prism(0,.04,.69,.8,.024,.024,8,[s,1052690],s),i.prism(0,.04,.8,.9,.013,.013,6,r,328965)}),i.box(0,.08,-.66,.012,.025,.012,r),[0,.04,-.92]}const s2=3428460,r2=3954804,pn=1447448,Re=657932,os=13949152,Lh=723725,$r=5921376,Ke=(i,t)=>new Lt(i).multiplyScalar(t).getHex(),a2=(i,t,e)=>new Lt(i).lerp(new Lt(t),e).getHex();function qs(i,t){const e=i.length,n=i.map(o=>o.z),s=i.map(o=>o[t]),r=[];for(let o=0;o<e-1;o++)r.push((s[o+1]-s[o])/Math.max(1e-4,n[o+1]-n[o]));const a=[];for(let o=0;o<e;o++)if(o===0)a.push(r[0]*.5);else if(o===e-1)a.push(r[e-2]*.5);else if(r[o-1]*r[o]<=0)a.push(0);else{const c=(r[o-1]+r[o])/2;a.push(Math.sign(c)*Math.min(Math.abs(c),3*Math.abs(r[o-1]),3*Math.abs(r[o])))}return o=>{if(o<=n[0])return s[0];if(o>=n[e-1])return s[e-1];let c=0;for(;c<e-2&&o>n[c+1];)c++;const l=n[c+1]-n[c];if(l<1e-4)return s[c+1];const h=(o-n[c])/l,u=h*h,d=u*h;return(2*d-3*u+1)*s[c]+(d-2*u+h)*l*a[c]+(-2*d+3*u)*s[c+1]+(d-u)*l*a[c+1]}}const Kr=i=>i==="ws"||i==="rf"||i==="rw";function Ra(i,t,e,n,s,r,a,o,c,l){i.tri(t,e,n,r,[a,o,c]),i.tri(t,n,s,r,[a,c,l])}function Dh(i,t,e,n,s,r,a,o,c,l=o){i.layer(c,()=>{const h=t-s/2,u=t+s/2,d=e-r/2,f=e+r/2,g=n-a/2,_=n+a/2;i.quad([h,f,g],[u,f,g],[u,f,_],[h,f,_],o,[0,0,1,.3]),i.quad([h,d,g],[u,d,g],[u,f,g],[h,f,g],o,[0,0,1,1]),i.quad([u,d,_],[h,d,_],[h,f,_],[u,f,_],l,[0,0,1,1]),i.quad([h,d,_],[h,d,g],[h,f,g],[h,f,_],Ke(o,.8),[0,0,.2,1]),i.quad([u,d,g],[u,d,_],[u,f,_],[u,f,g],Ke(o,.8),[0,0,.2,1]),i.quad([h,d,g],[h,d,_],[u,d,_],[u,d,g],Ke(o,.6),[0,0,1,.3])})}function Nh(i,t,e,n,s){const r=new $(...t),a=new $(...e),o=r.distanceTo(a),c=new Nt().lookAt(r,a,new $(0,1,0));c.setPosition(r.clone().add(a).multiplyScalar(.5)),i.with(c,()=>i.box(0,0,0,n,n,o,s))}function Uh(i,t,e,n,s=8,r=5,a=n){const o=(c,l)=>{const h=l/r*Math.PI,u=c/s*Math.PI*2;return[t[0]+Math.sin(h)*Math.cos(u)*e,t[1]+Math.cos(h)*e,t[2]+Math.sin(h)*Math.sin(u)*e]};for(let c=0;c<r;c++)for(let l=0;l<s;l++){const h=c===1?a:n;i.quad(o(l,c),o(l+1,c),o(l+1,c+1),o(l,c+1),h)}}function ms(i,t,e,n,s){for(let r=0;r<n;r++){const a=r/n*Math.PI*2,o=(r+1)/n*Math.PI*2;i.quad([Math.cos(a)*t,Math.sin(a)*t,0],[Math.cos(o)*t,Math.sin(o)*t,0],[Math.cos(o)*e,Math.sin(o)*e,0],[Math.cos(a)*e,Math.sin(a)*e,0],s)}}function Rc(i,t,e,n,s,r,a,o,c){i.layer(c,()=>{for(let l=0;l<a;l++){const h=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.tri([t,e,n],[t+Math.cos(h)*s,e+Math.sin(h)*r,n],[t+Math.cos(u)*s,e+Math.sin(u)*r,n],o,[[.5,.5],[.5+Math.cos(h)*.5,.5+Math.sin(h)*.5],[.5+Math.cos(u)*.5,.5+Math.sin(u)*.5]])}})}function H0(i,t,e=!1){var Q;const n=new ut(!0),s=new ut(!0),r=new ut(!0),a=new ut,o=new ut(!0),c=new ut(!0),l=i.stations,h=l[0],u=l[l.length-1],d=h.z,f=u.z,g=qs(l,"w"),_=qs(l,"yb"),m=qs(l,"belt"),p=qs(l,"top"),x=qs(l,"wt"),y=M=>{let L=l[0].seg;for(const P of l)M>=P.z-1e-6&&(L=P.seg);return L},v=Ke(t,.42),T=Ke(t,.82),E=i.group==="80s EXOTIC",w=i.wheels,C=e?.11:w.hw??.18,b=[{z:w.fz,x:e?g(w.fz)-.12:w.fx,r:w.r,hw:C,R:0,flare:0},{z:w.rz,x:e?g(w.rz)-.12:w.rx,r:e?w.r:w.r*1.03,hw:e?C:C*1.15,R:0,flare:0}];for(const M of b){M.R=M.r+(e?.06:.07);const L=M.x+M.hw+.02-g(M.z);M.flare=Math.max(i.arch??(e?.012:.035),L)}const S=M=>{let L=0;for(const P of b){const F=(M-P.z)/(P.R+.5);Math.abs(F)<1&&(L+=P.flare*Math.cos(F*Math.PI/2)**2)}return L},D=M=>{let L=-1;for(const P of b){const F=M-P.z;Math.abs(F)<=P.R&&(L=Math.max(L,P.r+Math.sqrt(P.R*P.R-F*F)))}return L},W=M=>{const L=g(M),P=_(M),F=m(M),G=p(M),z=Math.min(x(M),L-.02),gt=y(M),H=S(M),ct=D(M),xt=F-P,Mt=Kr(gt)?.03:.022,mt=[[L-.05,P],[L+H,P+.12*xt],[L+H+.014,P+.5*xt],[L+H*.85,P+.82*xt],[L-.02+H*.5,F],Kr(gt)?[L-.03-(L-.03-z)*.42,F+(G-F)*.52]:[z+(L-z)*.55,F+(G-F)*.8],[z,G],[z*.5,G+Mt*.75],[0,G+Mt]];if(ct>0){for(let bt=0;bt<4;bt++)mt[bt][1]=Math.max(mt[bt][1],ct+(bt===3?.03:0));mt[4][1]=Math.max(mt[4][1],ct+.07),mt[5][1]=Math.max(mt[5][1],mt[4][1]-.015),mt[6][1]=Math.max(mt[6][1],ct+.03)}return{z:M,seg:gt,pts:mt}},B=e?.6:.17,V=[];for(let M=0;M<l.length-1;M++){const L=Math.max(1,Math.ceil((l[M+1].z-l[M].z)/B));for(let P=0;P<L;P++)V.push(l[M].z+(l[M+1].z-l[M].z)*P/L)}V.push(f);const et=e?[-1.02,-1,-.5,.5,1,1.02]:[-1.03,-1,-.92,-.7,-.38,0,.38,.7,.92,1,1.03];for(const M of b)for(const L of et)V.push(M.z+M.R*L);V.sort((M,L)=>M-L);const U=[];for(const M of V)M<d||M>f||U.length&&M-U[U.length-1]<.006||U.push(M);const rt=U.map(W),k=(M,L,P,F=0,G=0)=>[P*(M.pts[L][0]+F),M.pts[L][1]+G,M.z],tt=((Q=l.find(M=>M.seg==="lv"))==null?void 0:Q.z)??0;for(let M=0;M<rt.length-1;M++){const L=rt[M],P=rt[M+1],F=L.seg;for(const G of[-1,1])for(let z=0;z<8;z++){let gt=k(L,z,G),H=k(P,z,G),ct=k(P,z+1,G),xt=k(L,z+1,G);G>0&&([H,xt]=[xt,H]);const Mt=(z===4||z===5)&&Kr(F),mt=(z===6||z===7)&&(F==="ws"||F==="rw");if(Mt)a.quad(gt,H,ct,xt,r2);else if(mt)a.quad(gt,H,ct,xt,s2);else if(z>=6&&F==="bed")s.quad(gt,H,ct,xt,pn);else{if(z>=6&&F==="lv")continue;n.quad(gt,H,ct,xt,z===0?v:t)}}}l.some(M=>M.seg==="lv")&&s.layer($t.LOUVRE,()=>{for(let M=0;M<rt.length-1;M++){const L=rt[M],P=rt[M+1];if(L.seg==="lv")for(const F of[-1,1])for(let G=6;G<8;G++){const z=k(L,G,F),gt=k(P,G,F),H=k(P,G+1,F),ct=k(L,G+1,F),xt=mt=>(mt-tt)/.13,Mt=mt=>Math.abs(mt[0])*2;Ra(s,z,gt,H,ct,t,[Mt(z),xt(z[2])],[Mt(gt),xt(gt[2])],[Mt(H),xt(H[2])],[Mt(ct),xt(ct[2])])}}});const J=(M,L,P)=>{const F=[];for(let z=0;z<=8;z++)F.push(k(M,z,1));for(let z=7;z>=0;z--)F.push(k(M,z,-1));const G=(M.pts[0][1]+M.pts[8][1])/2;for(let z=0;z<F.length;z++)P.tri([0,G,M.z],F[z],F[(z+1)%F.length],L)},at=rt[0],j=rt[rt.length-1];J(at,T,s),J(j,Ke(t,.9),s);const Tt=(M,L,P,F,G,z,gt,H)=>{const ct=wt=>{const Bt=wt.pts[P],O=wt.pts[G],vt=O[0]-Bt[0],st=O[1]-Bt[1],pt=Math.hypot(vt,st)||1,At=[F*(Bt[0]+.006),Bt[1]+.004,wt.z],St=[F*(Bt[0]+.006+vt/pt*z),Bt[1]+.004+st/pt*z,wt.z];return[At,St]},[xt,Mt]=ct(M),[mt,bt]=ct(L);H.quad(xt,mt,bt,Mt,gt)};for(let M=0;M<rt.length-1;M++){const L=rt[M],P=rt[M+1];if(Kr(L.seg))for(const F of[-1,1])Tt(L,P,4,F,5,.03,Re,s),L.seg==="rf"?Tt(L,P,6,F,5,.025,Re,s):Tt(L,P,6,F,5,.06,t,s)}const K=(M,L,P,F)=>{const G=[];for(let z=L;z<=8;z++)G.push(k(M,z,1,.004,.006));for(let z=7;z>=L;z--)G.push(k(M,z,-1,.004,.006));for(let z=0;z<G.length-1;z++){const gt=G[z],H=G[z+1];s.quad(gt,H,[H[0],H[1],H[2]+F],[gt[0],gt[1],gt[2]+F],P)}},ft=rt.find(M=>M.seg==="ws"),yt=rt.find(M=>M.seg==="rf");ft&&K(ft,4,Re,.06),yt&&K(yt,6,t,-.05);const lt=(M,L)=>{const P=W(M);for(let F=0;F<4;F++){const G=P.pts[F],z=P.pts[F+1];if(L>=G[1]&&L<=z[1])return G[0]+(z[0]-G[0])*(L-G[1])/Math.max(1e-4,z[1]-G[1])}return L<P.pts[0][1]?P.pts[0][0]:P.pts[4][0]},Dt=(M,L)=>{const P=W(M);for(let F=4;F<8;F++){const G=P.pts[F],z=P.pts[F+1];if(L<=G[0]&&L>=z[0])return G[1]+(z[1]-G[1])*(G[0]-L)/Math.max(1e-4,G[0]-z[0])}return P.pts[8][1]};for(const M of b){const L=e?6:14;for(const P of[-1,1])for(let F=0;F<L;F++){const G=F/L*Math.PI,z=(F+1)/L*Math.PI,gt=(Bt,O)=>M.z+Math.cos(Bt)*O,H=(Bt,O)=>M.r+Math.sin(Bt)*O,ct=lt(gt(G,M.R),H(G,M.R))+.002,xt=lt(gt(z,M.R),H(z,M.R))+.002,Mt=M.x-M.hw-.06,mt=Math.min(H(G,M.R),Dt(gt(G,M.R),Mt)-.02),bt=Math.min(H(z,M.R),Dt(gt(z,M.R),Mt)-.02);s.quad([P*ct,H(G,M.R),gt(G,M.R)],[P*xt,H(z,M.R),gt(z,M.R)],[P*Mt,bt,gt(z,M.R)],[P*Mt,mt,gt(G,M.R)],Lh);const wt=M.R+(e?.03:.045);s.quad([P*(ct+.02),H(G,M.R),gt(G,M.R)],[P*(xt+.02),H(z,M.R),gt(z,M.R)],[P*(xt+.004),H(z,wt),gt(z,wt)],[P*(ct+.004),H(G,wt),gt(G,wt)],E||e?t:T),s.quad([P*(ct+.02),H(G,M.R),gt(G,M.R)],[P*(xt+.02),H(z,M.R),gt(z,M.R)],[P*(xt-.01),H(z,M.R-.01),gt(z,M.R-.01)],[P*(ct-.01),H(G,M.R-.01),gt(G,M.R-.01)],v)}}const zt=at.pts,ht=zt[0][1],It=zt[2][0],dt=d-.006,Zt=i.front??"popup";if(s.quad([-It*.74,ht+.02,dt+.002],[It*.74,ht+.02,dt+.002],[It*.74,ht+.19,dt+.002],[-It*.74,ht+.19,dt+.002],Re),s.layer($t.MESH,()=>s.quad([-It*.7,ht+.04,dt],[It*.7,ht+.04,dt],[It*.7,ht+.17,dt],[-It*.7,ht+.17,dt],$r,[0,0,It*6,1.2])),e){const M=ht+.24;for(const L of[-1,1])o.layer($t.HEADLAMP,()=>o.quad([L*It*.82,M-.06,dt-.002],[L*It*.5,M-.06,dt-.002],[L*It*.5,M+.06,dt-.002],[L*It*.82,M+.06,dt-.002],15262924,[0,0,1,1]))}else{s.box(0,ht-.02,d+.2,It*1.84,.03,.5,[Re,pn]);const M=(zt[4][1]+zt[6][1])/2;for(const L of[-1,1]){const P=L*It*.62;if(Zt==="popup"){const F=d+.26,G=d+.62,z=ct=>p(ct)+.012,gt=(ct,xt,Mt,mt)=>s.quad([ct,z(xt),xt],[Mt,z(mt),mt],[Mt,z(mt)+.001,mt+.018],[ct,z(xt)+.001,xt+.018],Re);gt(P-.2,F,P+.2,F),gt(P-.2,G,P+.2,G);for(const ct of[P-.2,P+.2])s.quad([ct-.008,z(F),F],[ct+.008,z(F),F],[ct+.008,z(G),G],[ct-.008,z(G),G],Re);const H=ht+.25;s.quad([P-.17,H-.05,dt+.001],[P+.17,H-.05,dt+.001],[P+.17,H+.05,dt+.001],[P-.17,H+.05,dt+.001],pn),o.layer($t.HEADLAMP,()=>o.quad([P-.15+L*.06,H-.035,dt-.002],[P+.15+L*.06,H-.035,dt-.002],[P+.15+L*.06,H+.035,dt-.002],[P-.15+L*.06,H+.035,dt-.002],16052440,[0,0,1,1])),o.layer($t.LENS,()=>o.quad([P-.16,H-.035,dt-.002],[P-.04,H-.035,dt-.002],[P-.04,H+.035,dt-.002],[P-.16,H+.035,dt-.002],16752688,[0,0,1,1]))}else if(Zt==="round")o2(s,P,M,dt+.001,.125,.15,os),Rc(o,P,M,dt-.002,.125,.11,16,16052440,$t.HEADLAMP);else{const F=Zt==="slim"?.06:.12;s.quad([P-.23,M-F/2-.02,dt+.001],[P+.23,M-F/2-.02,dt+.001],[P+.23,M+F/2+.02,dt+.001],[P-.23,M+F/2+.02,dt+.001],pn),o.layer($t.HEADLAMP,()=>o.quad([P-.2,M-F/2,dt-.002],[P+.12,M-F/2,dt-.002],[P+.12,M+F/2,dt-.002],[P-.2,M+F/2,dt-.002],16052440,[0,0,1,1])),o.layer($t.LENS,()=>o.quad([P+.13,M-F/2,dt-.002],[P+.21,M-F/2,dt-.002],[P+.21,M+F/2,dt-.002],[P+.13,M+F/2,dt-.002],16752688,[0,0,1,1]))}}}const N=f;for(const M of i.rear??[])for(const L of M.mirror===!1||M.x===0?[M.x]:[M.x,-M.x]){const P=[L-M.w/2,M.y-M.h/2,N+.006],F=[L+M.w/2,M.y-M.h/2,N+.006],G=[L+M.w/2,M.y+M.h/2,N+.006],z=[L-M.w/2,M.y+M.h/2,N+.006];M.c===Re?s.layer($t.MESH,()=>s.quad(P,F,G,z,$r,[0,0,M.w*7,M.h*7])):s.quad(P,F,G,z,M.c)}const ze=(M,L,P,F,G,z=0,gt)=>{const H=L.w+z,ct=L.h+z,xt=gt??(L.round?$t.LENS_ROUND:L.w>.7?$t.LENS_BAR:$t.LENS);L.round?Rc(M,P,L.y,F,H/2,ct/2,16,G,xt):M.layer(xt,()=>M.quad([P-H/2,L.y-ct/2,F],[P+H/2,L.y-ct/2,F],[P+H/2,L.y+ct/2,F],[P-H/2,L.y+ct/2,F],G,[0,0,L.w>.7?H*6:1,1]))};for(const M of i.lights)for(const L of M.mirror===!1||M.x===0?[M.x]:[M.x,-M.x])ze(o,M,L,N+.012,M.c),M.brake&&!e&&ze(c,M,L,N+.016,16730678),e||(ze(s,M,L,N+.008,1710622,.05,$t.PLAIN),M.round&&s.with(new Nt().makeTranslation(L,M.y,N+.01).multiply(new Nt().makeScale(1,M.h/M.w,1)),()=>ms(s,M.w/2,M.w/2+.022,16,os)));if(i.slats){const M=i.slats;for(let L=0;L<=M.n;L++){const P=M.y0+(M.y1-M.y0)*L/M.n;s.box(0,P,N+.03,M.w*2,.03,.035,[Re,pn])}}const Yt=j.pts[0][1],Jt=j.pts[2][0],Ht=Math.min(Yt+.15,i.plateY-.12);if(Ht-(Yt-.04)>.06&&s.box(0,(Ht+Yt-.04)/2,N+.03,Jt*1.96,Ht-Yt+.04,.09,E||e?[2763310,3684412]:[T,t]),e)s.quad([-.26,i.plateY-.08,N+.008],[.26,i.plateY-.08,N+.008],[.26,i.plateY+.08,N+.008],[-.26,i.plateY+.08,N+.008],15263960),s.quad([-.29,i.plateY-.1,N+.007],[.29,i.plateY-.1,N+.007],[.29,i.plateY+.1,N+.007],[-.29,i.plateY+.1,N+.007],3158068);else{for(const P of i.exhaust)s.with(new Nt().makeTranslation(P.x,P.y,N-.1).multiply(new Nt().makeRotationX(Math.PI/2)),()=>{s.prism(0,0,-.1,.22,P.r,P.r,12,[os,11054260],null),s.prism(0,0,.2,.222,P.r*1.04,P.r*1.04,12,9075368,null),s.prism(0,0,.221,.08,P.r*.8,P.r*.8,12,Re,Re)});const M=i.plateY,L=N+.006;s.quad([-.3,M-.1,N+.004],[.3,M-.1,N+.004],[.3,M+.1,N+.004],[-.3,M+.1,N+.004],pn),s.quad([-.31,M-.105,L],[.31,M-.105,L],[.31,M-.085,L],[-.31,M-.085,L],os),s.quad([-.31,M+.085,L],[.31,M+.085,L],[.31,M+.105,L],[-.31,M+.105,L],os);for(const P of[-1,1]){o.layer($t.LENS,()=>o.quad([P*.36,M-.04,N+.012],[P*.49,M-.04,N+.012],[P*.49,M+.04,N+.012],[P*.36,M+.04,N+.012],15790312,[0,0,1,1]));const F=Math.max(Yt+.02,(Ht+Yt)/2-.025);P<0&&o.layer($t.LENS,()=>o.quad([-.62,F,N+.08],[-.48,F,N+.08],[-.48,F+.05,N+.08],[-.62,F+.05,N+.08],13639704,[0,0,1,1]))}s.quad([-Jt*.8,Yt-.05,N+.06],[Jt*.8,Yt-.05,N+.06],[Jt*.8,Yt+.03,N-.5],[-Jt*.8,Yt+.03,N-.5],1842208);for(let P=-3;P<=3;P++)s.box(P*Jt*.24,Yt+0,N-.15,.025,.06,.4,pn)}const re=(M,L,P,F,G,z,gt,H,ct,xt,Mt)=>{const mt=[L*(lt(P,G)+xt),G,P],bt=[L*(lt(F,gt)+xt),gt,F],wt=[L*(lt(F,H)+xt),H,F],Bt=[L*(lt(P,z)+xt),z,P];M.quad(mt,bt,wt,Bt,ct,Mt)};for(const M of i.side??[])for(const L of[-1,1])if(M.kind==="intake")re(s,L,M.z0-.03,M.z1+.03,M.y0+(M.y1-M.y0)*.5-.03,M.y1+.03,M.y0-.03,M.y1+.03,Re,.005),s.layer($t.MESH,()=>re(s,L,M.z0,M.z1,M.y0+(M.y1-M.y0)*.5,M.y1,M.y0,M.y1,$r,.008,[0,0,(M.z1-M.z0)*7,(M.y1-M.y0)*7]));else if(M.kind==="naca")re(s,L,M.z0,M.z1,M.y1-.02,M.y1,M.y0,M.y1,Re,.007),re(s,L,M.z0+(M.z1-M.z0)*.6,M.z1,M.y1-(M.y1-M.y0)*.6,M.y1,M.y0+.02,M.y1-.02,2236966,.009);else if(M.kind==="stripe")re(s,L,M.z0,M.z1,M.y0,M.y1,M.y0,M.y1,M.c??16777215,.008);else if(M.kind==="strakes")for(let F=0;F<6;F++){const G=M.z0+(M.z1-M.z0)*F/6,z=M.z0+(M.z1-M.z0)*(F+1)/6;re(s,L,G,z,M.y0,M.y1,M.y0,M.y1,Re,.006);const gt=M.n??5;for(let H=0;H<gt;H++){const ct=M.y0+(M.y1-M.y0)*(H+.6)/(gt+.2);for(const[xt,Mt,mt,bt]of[[ct,ct+.035,.035,.035],[ct,ct,.006,.035],[ct+.035,ct+.035,.006,.035]]){const wt=[L*(lt(G,xt)+mt),xt,G],Bt=[L*(lt(z,xt)+mt),xt,z],O=[L*(lt(z,Mt)+bt),Mt,z],vt=[L*(lt(G,Mt)+bt),Mt,G];s.quad(wt,Bt,O,vt,xt===Mt?xt===ct?v:T:t)}}}const Ut=l.find(M=>M.seg==="ws"),I=l.find(M=>M.seg==="rw")??l.find(M=>M.seg==="lv"),A=l.findIndex(M=>M.seg==="rf");for(const M of[-1,1]){const L=b[0].z+b[0].R+.04,P=b[1].z-b[1].R-.04;if(P>L){const bt=e?1:4;for(let wt=0;wt<bt;wt++){const Bt=L+(P-L)*wt/bt,O=L+(P-L)*(wt+1)/bt,vt=_(Bt),st=_(O);s.quad([M*(lt(Bt,vt+.02)+.02),vt-.02,Bt],[M*(lt(O,st+.02)+.02),st-.02,O],[M*(lt(O,st+.1)+.006),st+.1,O],[M*(lt(Bt,vt+.1)+.006),vt+.1,Bt],e?2763310:E?v:T)}}const F=d+.3,G=_(F)+(m(F)-_(F))*.55;if(o.layer($t.LENS,()=>{o.quad([M*(lt(F,G)+.01),G-.025,F],[M*(lt(F+.14,G)+.01),G-.025,F+.14],[M*(lt(F+.14,G)+.01),G+.025,F+.14],[M*(lt(F,G)+.01),G+.025,F],16751136,[0,0,1,1]);const bt=f-.4,wt=_(bt)+(m(bt)-_(bt))*.6;o.quad([M*(lt(bt,wt)+.01),wt-.025,bt],[M*(lt(bt+.14,wt)+.01),wt-.025,bt+.14],[M*(lt(bt+.14,wt)+.01),wt+.025,bt+.14],[M*(lt(bt,wt)+.01),wt+.025,bt],13113360,[0,0,1,1])}),!Ut)continue;const z=Ut.z+.22,gt=m(z)+.1,H=lt(z,m(z)-.01);e?s.box(M*(H+.08),gt,z,.14,.12,.1,[1710618,2236962,1710618,3355443]):(s.box(M*(H+.04),gt-.05,z,.1,.035,.05,Re),s.box(M*(H+.13),gt,z,.18,.11,.1,[t,t,T,Re]),s.quad([M*(H+.05),gt-.045,z+.052],[M*(H+.21),gt-.045,z+.052],[M*(H+.21),gt+.045,z+.052],[M*(H+.05),gt+.045,z+.052],10135736));const ct=Ut.z+.06,xt=I?I.z+.05:Ut.z+1.15;for(const bt of[ct,xt]){const wt=W(bt);for(let Bt=0;Bt<4;Bt++){const O=wt.pts[Bt],vt=wt.pts[Bt+1];vt[1]<_(bt)+.08||s.quad([M*(O[0]+.006),O[1],bt],[M*(O[0]+.006),O[1],bt+.016],[M*(vt[0]+.006),vt[1],bt+.016],[M*(vt[0]+.006),vt[1],bt],pn)}}if(i.id==="countach"||i.id==="diablo"){const bt=b[0].z+b[0].R+.02,wt=m(bt)-.04;s.quad([M*(lt(bt,wt)+.007),wt,bt],[M*(lt(ct+.3,m(ct+.3)-.02)+.007),m(ct+.3)-.02,ct+.3],[M*(lt(ct+.3,m(ct+.3)-.04)+.007),m(ct+.3)-.04,ct+.3],[M*(lt(bt,wt-.02)+.007),wt-.02,bt],pn)}const Mt=xt-.3,mt=m(Mt)-.1;if(!e&&(s.quad([M*(lt(Mt-.1,mt)+.009),mt-.018,Mt-.1],[M*(lt(Mt+.1,mt)+.009),mt-.018,Mt+.1],[M*(lt(Mt+.1,mt)+.009),mt+.018,Mt+.1],[M*(lt(Mt-.1,mt)+.009),mt+.018,Mt-.1],os),M>0&&A>=0)){const bt=b[1].z-b[1].R-.22,wt=m(bt)-.12,Bt=lt(bt,wt)+.007;s.with(new Nt().makeTranslation(Bt,wt,bt).multiply(new Nt().makeRotationY(Math.PI/2)),()=>ms(s,.06,.072,10,pn))}}if(Ut&&ft){const M=ft.z+.07,L=p(M)+.035;for(const P of[-.62,0]){const F=x(M)*.62;s.quad([P*x(M),L,M],[P*x(M)+F,L+.004,M+.035],[P*x(M)+F,L+.016,M+.035],[P*x(M),L+.012,M],Re)}}if(i.louvres){const M=i.louvres,L=P=>p(P)+.024;s.layer($t.LOUVRE,()=>{for(let F=0;F<4;F++){const G=M.z0+(M.z1-M.z0)*F/4,z=M.z0+(M.z1-M.z0)*(F+1)/4,gt=M.n*F/4,H=M.n*(F+1)/4;Ra(s,[-M.w,L(G),G],[M.w,L(G),G],[M.w,L(z),z],[-M.w,L(z),z],Ke(t,.9),[0,gt],[4,gt],[4,H],[0,H])}})}if(i.scoop&&A>=0){const M=l[A];s.box(0,M.top+.08,M.z+.3,.34,.14,.55,[t,t,Re,T]),s.layer($t.MESH,()=>s.quad([-.15,M.top+.03,M.z+.024],[.15,M.top+.03,M.z+.024],[.15,M.top+.135,M.z+.024],[-.15,M.top+.135,M.z+.024],$r,[0,0,2,1]))}if(i.wing){const M=i.wing,L=p(M.z)+.02,P=F=>{const G=F;s.quad([-G,M.y+.03,M.z-M.d/2],[G,M.y+.03,M.z-M.d/2],[G,M.y+.02,M.z+M.d/2],[-G,M.y+.02,M.z+M.d/2],t),s.quad([-G,M.y-.03,M.z-M.d/2],[G,M.y-.03,M.z-M.d/2],[G,M.y-.005,M.z+M.d/2],[-G,M.y-.005,M.z+M.d/2],v),s.quad([-G,M.y-.03,M.z-M.d/2],[G,M.y-.03,M.z-M.d/2],[G,M.y+.03,M.z-M.d/2],[-G,M.y+.03,M.z-M.d/2],T),s.quad([-G,M.y-.005,M.z+M.d/2],[G,M.y-.005,M.z+M.d/2],[G,M.y+.045,M.z+M.d/2+.01],[-G,M.y+.045,M.z+M.d/2+.01],Re)};if(M.kind==="duck")s.box(0,M.y,M.z,M.w*2,.06,M.d,[t,t,T,T]),s.quad([-M.w,M.y+.03,M.z+M.d/2],[M.w,M.y+.03,M.z+M.d/2],[M.w,M.y+.05,M.z+M.d/2+.02],[-M.w,M.y+.05,M.z+M.d/2+.02],Re);else if(P(M.w),M.kind==="big")for(const F of[-1,1])s.box(F*.32,(L+M.y)/2,M.z,.06,M.y-L,.2,[pn,pn,2500136]),s.box(F*M.w,M.y+.02,M.z,.02,.2,M.d+.1,[t,t,T,T]);else if(M.kind==="hoop"){for(const F of[-1,1])s.box(F*(M.w-.08),(L+M.y)/2,M.z,.1,M.y-L,M.d*.7,[t,t,T,T]);c.layer($t.LENS_BAR,()=>c.quad([-.2,M.y+.012,M.z+M.d/2+.012],[.2,M.y+.012,M.z+M.d/2+.012],[.2,M.y+.04,M.z+M.d/2+.016],[-.2,M.y+.04,M.z+M.d/2+.016],16728112,[0,0,3,1])),o.layer($t.LENS_BAR,()=>o.quad([-.2,M.y+.012,M.z+M.d/2+.008],[.2,M.y+.012,M.z+M.d/2+.008],[.2,M.y+.04,M.z+M.d/2+.012],[-.2,M.y+.04,M.z+M.d/2+.012],7344144,[0,0,3,1]))}else for(const F of[-1,1])s.poly([[F*M.w,L,M.z-M.d/2-.2],[F*M.w,L,M.z+M.d/2],[F*M.w,M.y+.07,M.z+M.d/2],[F*M.w,M.y+.07,M.z-M.d/2]],t)}if(!e&&A>=0){l[A];const M=l[A+1];i.group==="90s JAPAN"&&Nh(s,[.35,p(M.z)-.02,M.z+.05],[.4,p(M.z)+.45,M.z+.35],.012,Re)}if(A>=0&&Ut){const M=l[A],L=l[A+1],P=i.trim??2894898,F=M.z+Math.min(.45,(L.z-M.z)*.55),G=p(F),z=m(F),gt=G-(e?.24:.22),H=g(F)-.09,ct=z-.26,xt=Ut.z+.25,Mt=L.z+.15;r.quad([-H,ct,xt],[H,ct,xt],[H,ct,Mt],[-H,ct,Mt],Lh);for(const At of[-1,1])r.quad([At*H,ct,xt],[At*H,ct,Mt],[At*H,z-.02,Mt],[At*H,z-.02,xt],Ke(P,.7));r.quad([-H,ct,Mt],[H,ct,Mt],[H,z+.02,Mt],[-H,z+.02,Mt],1315864);const mt=l[A+2]??L;r.quad([-H,z+.02,Mt],[H,z+.02,Mt],[H,Math.min(m(mt.z),p(mt.z))-.02,mt.z],[-H,Math.min(m(mt.z),p(mt.z))-.02,mt.z],1842208);const bt=i.drive??(i.group==="90s JAPAN"?"R":"L"),wt=bt==="C"?0:(bt==="R"?1:-1)*Math.min(.38,H*.48),Bt=bt==="C"?[{x:0,z:F-.12,driver:!0},{x:-.44,z:F+.12,driver:!1},{x:.44,z:F+.12,driver:!1}]:[{x:wt,z:F,driver:!0},{x:-wt,z:F,driver:!1}],O=e?4868690:a2(t,2105392,.55),vt=F-(e?.5:.48),st=gt-.24,pt=Math.max(Ut.z+.3,vt-.22);r.box(0,z-.03,pt,H*2,.12,.32,[1710622,2236968]);for(const At of Bt){const St=At.x,Wt=At.z;if(e){r.box(St,z-.02,Wt+.2,.42,.5,.1,Ke(P,.9)),At.driver&&(Uh(r,[St,gt,Wt],.11,2760728,6,4,2760728),r.box(St,gt-.25,Wt+.03,.36,.26,.2,O));continue}const be=Math.min(z-.04,G-.52);if(r.with(new Nt().makeTranslation(St,be,Wt+.22).multiply(new Nt().makeRotationX(.22)),()=>{Dh(r,0,0,0,.44,.56,.1,P,$t.SEAT,Ke(P,.75)),Dh(r,0,.36,.02,.26,.17,.09,P,$t.SEAT,Ke(P,.75));for(const Te of[-1,1])r.box(Te*.2,.02,-.06,.06,.48,.1,Ke(P,.85))}),At.driver){B0(r,[St,gt,Wt],.125,t),Kn(r,[St,gt-.16,Wt+.02],[.05,.06,.05],1710620,6,4),G0(r,[St,gt-.33,Wt+.04],[.21,.17,.12],O,t);for(const Te of[-1,1])Nh(r,[St+Te*.18,gt-.26,Wt+.02],[St+Te*.16,st-.02,vt+.05],.075,O),Uh(r,[St+Te*.16,st-.02,vt+.04],.04,1710618,5,3);r.with(new Nt().makeTranslation(St,st,vt).multiply(new Nt().makeRotationX(-.45)),()=>{ms(r,.15,.185,14,1447446),r.box(0,0,0,.3,.035,.02,2236966),r.box(0,-.07,0,.035,.14,.02,2236966),r.prism(0,0,-.01,.01,.05,.05,8,3158068,3158068)}),r.box(St,z+.05,pt+.02,.42,.07,.2,[1315862,1842208])}}r.box(0,p(M.z+.05)-.07,M.z+.06,.22,.06,.03,[1710618,1710618,1710618,9082532])}return{skin:n,body:s,cabin:r,glass:a,glow:o,brake:c,plate:{y:i.plateY,z:N+.012},tailZ:N,wheels:[{x:b[0].x,z:b[0].z,r:b[0].r,hw:b[0].hw},{x:b[1].x,z:b[1].z,r:b[1].r,hw:b[1].hw}]}}function o2(i,t,e,n,s,r,a){i.with(new Nt().makeTranslation(t,e,n),()=>ms(i,s,r,16,a))}function V0(i,t,e,n,s,r,a=16,o=!0){const c=(g,_,m)=>[_,Math.cos(g)*m,Math.sin(g)*m],l=t*.66,h=t*.93,u=e*.8,d=n*e,f=n*(e-.035);for(let g=0;g<a;g++){const _=g/a*Math.PI*2,m=(g+1)/a*Math.PI*2,p=g/a*8,x=(g+1)/a*8;i.layer($t.TREAD,()=>Ra(i,c(_,-u,t),c(_,u,t),c(m,u,t),c(m,-u,t),3815996,[0,p],[1,p],[1,x],[0,x]));for(const T of[-1,1])i.quad(c(_,T*u,t),c(m,T*u,t),c(m,T*e,h),c(_,T*e,h),2500138);const y=g/a*2,v=(g+1)/a*2;i.layer($t.SIDEWALL,()=>Ra(i,c(_,d,l),c(m,d,l),c(m,d,h),c(_,d,h),16777215,[y,0],[v,0],[v,1],[y,1])),i.quad(c(_,-d,l),c(m,-d,l),c(m,-d,h),c(_,-d,h),1447448),i.tri([-d,0,0],c(_,-d,l),c(m,-d,l),1052690),i.quad(c(_,d,l),c(m,d,l),c(m,f,l),c(_,f,l),Ke(r,.85)),o&&i.quad(c(_,f,l*.98),c(m,f,l*.98),c(m,-f*.6,l*.98),c(_,-f*.6,l*.98),Ke(r,.4))}i.with(new Nt().makeTranslation(f,0,0).multiply(new Nt().makeRotationY(Math.PI/2)),()=>{Rc(i,0,0,0,l,l,a,r,t2[s])})}function c2(i,t,e,n,s){const r=new ut(!0);return V0(r,i,t,e,n,s),r.build()}function l2(i,t,e,n=13113360){const s=new ut(!0),r=i*.66,a=e*(t-.09);s.with(new Nt().makeTranslation(a,0,0).multiply(new Nt().makeRotationY(Math.PI/2)),()=>{ms(s,r*.42,r*.86,14,10132128),ms(s,r*.86,r*.88,14,6974064),s.prism(0,0,-.02,.02,r*.42,r*.42,8,3815998,3815998)});const o=.8;return s.with(new Nt().makeTranslation(a+e*.02,Math.cos(o)*r*.68,Math.sin(o)*r*.68).multiply(new Nt().makeRotationX(o)),()=>{s.box(0,0,0,.06,.08,.2,[n,Ke(n,1.15)])}),s.build()}let Zr=null;function W0(){if(Zr)return Zr;const i=n2(),t=new wc({vertexColors:!0,side:fe,shininess:60,specular:11053224}),e=new _a({vertexColors:!0,side:fe,alphaTest:.5}),n=new Ze({vertexColors:!0,side:fe});for(const r of[t,e,n])Aa(r,i);const s=new wc({vertexColors:!0,side:fe,transparent:!0,opacity:.62,depthWrite:!1,shininess:110,specular:16777215});return Zr={paint:t,lit:e,glow:n,glass:s},Zr}let Xs=null;function h2(){if(Xs)return Xs;const i=64,t=128,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d"),s=n.createImageData(i,t),r=(l,h,u)=>{const d=Math.max(0,Math.min(1,(u-l)/(h-l)));return d*d*(3-2*d)},a=.36,o=.4,c=.12;for(let l=0;l<t;l++)for(let h=0;h<i;h++){const u=(h+.5)/i-.5,d=(l+.5)/t-.5,f=Math.abs(u)-(a-c),g=Math.abs(d)-(o-c),_=Math.hypot(Math.max(f,0),Math.max(g,0))+Math.min(Math.max(f,g),0)-c;let m=.55*(1-r(-.08,.13,_));for(const x of[-.28,.28])for(const y of[-.3,.3]){const v=Math.hypot((u-y)/.09,(d-x)/.12);m=Math.max(m,.9*(1-r(.4,1.2,v)))}const p=(l*i+h)*4;s.data[p]=s.data[p+1]=s.data[p+2]=0,s.data[p+3]=Math.round(255*Math.min(1,m))}return n.putImageData(s,0,0),Xs=new lr(e),Xs.colorSpace=qn,Xs}const Oh=new Map;function q0(i){const t=Oh.get(i);if(t)return t;const e=new Ze({color:0,map:h2(),transparent:!0,side:fe,opacity:i,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return Oh.set(i,e),e}function X0(i){const t=i.stations,e=t[0].z,n=t[t.length-1].z,s=n-e,a=Math.max(...t.map(h=>h.w))*2*1/.72/2,o=s*.98/.8/2,c=(e+n)/2,l=new ut;return l.quad([-a,.025,c-o],[a,.025,c-o],[a,.025,c+o],[-a,.025,c+o],16777215,[0,0,1,1]),l.build()}const u2=1583164,d2=2242124,cs=1315862,Ye=657932,jr=13159636,Cc=(i,t)=>new Lt(i).multiplyScalar(t).getHex();function cn(i,t,e){if(t<=i[0].z)return i[0][e];for(let n=1;n<i.length;n++)if(t<=i[n].z){const s=(t-i[n-1].z)/(i[n].z-i[n-1].z);return i[n-1][e]+(i[n][e]-i[n-1][e])*s}return i[i.length-1][e]}function Y0(i,t,e=!1){const n=new ut,s=new ut,r=new ut,a=i.stations,o=Cc(t,.72),c=Cc(t,.5),l=a[a.length-1],h=l.z;for(let x=0;x<a.length-1;x++){const y=a[x],v=a[x+1],T=y.seg==="ws"||y.seg==="rf"||y.seg==="rw"||y.seg==="lv";for(const w of[-1,1])n.quad([w*y.w,y.yb,y.z],[w*v.w,v.yb,v.z],[w*v.w,v.belt,v.z],[w*y.w,y.belt,y.z],t),n.quad([w*y.w,y.belt,y.z],[w*v.w,v.belt,v.z],[w*v.wt,v.top,v.z],[w*y.wt,y.top,y.z],T&&y.seg!=="lv"?d2:t),n.quad([w*(y.w+.004),y.yb,y.z],[w*(v.w+.004),v.yb,v.z],[w*(v.w+.004),v.yb+.09,v.z],[w*(y.w+.004),y.yb+.09,y.z],c);const E=y.seg==="ws"||y.seg==="rw"?u2:y.seg==="lv"||y.seg==="bed"?cs:y.seg==="rf"?o:t;if(n.quad([-y.wt,y.top,y.z],[y.wt,y.top,y.z],[v.wt,v.top,v.z],[-v.wt,v.top,v.z],E),y.seg==="lv")for(let w=1;w<6;w++){const C=w/6,b=y.z+(v.z-y.z)*C,S=y.top+(v.top-y.top)*C+.01,D=y.wt+(v.wt-y.wt)*C;n.quad([-D,S,b-.03],[D,S,b-.03],[D,S+.01,b+.03],[-D,S+.01,b+.03],t)}}const u=(x,y,v)=>n.poly([[-x.w,x.yb,x.z+v],[-x.w,x.belt,x.z+v],[-x.wt,x.top,x.z+v],[x.wt,x.top,x.z+v],[x.w,x.belt,x.z+v],[x.w,x.yb,x.z+v]],y);u(a[0],o,0),u(l,o,0);const d=a[0],f=d.z-.006;if(n.quad([-d.w*.7,d.yb+.04,f],[d.w*.7,d.yb+.04,f],[d.w*.7,d.yb+.14,f],[-d.w*.7,d.yb+.14,f],Ye),!e){const x=i.front??"popup",y=(d.belt+d.top)/2;for(const v of[-1,1]){const T=v*d.w*.62;if(x==="popup"){const E=cn(a,d.z+.45,"top");n.quad([T-.2,E+.004,d.z+.3],[T+.2,E+.004,d.z+.3],[T+.2,E+.004,d.z+.33],[T-.2,E+.004,d.z+.33],Ye),s.quad([T-.14,d.yb+.17,f],[T+.14,d.yb+.17,f],[T+.14,d.yb+.24,f],[T-.14,d.yb+.24,f],16756800)}else if(x==="round"){const E=[];for(let w=0;w<8;w++){const C=w/8*Math.PI*2;E.push([T+Math.cos(C)*.11,y+Math.sin(C)*.09,f-.002])}s.poly(E,16052440)}else{const E=x==="slim"?.05:.1;s.quad([T-.2,y-E/2,f],[T+.2,y-E/2,f],[T+.2,y+E/2,f],[T-.2,y+E/2,f],16052440)}}}n.quad([-l.w,l.yb-.06,h+.02],[l.w,l.yb-.06,h+.02],[l.w,l.yb+.08,h+.02],[-l.w,l.yb+.08,h+.02],e?3815994:Ye);for(const x of i.rear??[])for(const y of x.mirror===!1||x.x===0?[x.x]:[x.x,-x.x])n.quad([y-x.w/2,x.y-x.h/2,h+.006],[y+x.w/2,x.y-x.h/2,h+.006],[y+x.w/2,x.y+x.h/2,h+.006],[y-x.w/2,x.y+x.h/2,h+.006],x.c);const g=(x,y,v,T,E)=>{if(y.round){const w=[];for(let C=0;C<8;C++){const b=C/8*Math.PI*2+Math.PI/8;w.push([v+Math.cos(b)*y.w/2,y.y+Math.sin(b)*y.h/2,T])}x.poly(w,E)}else x.quad([v-y.w/2,y.y-y.h/2,T],[v+y.w/2,y.y-y.h/2,T],[v+y.w/2,y.y+y.h/2,T],[v-y.w/2,y.y+y.h/2,T],E)},_=ie.modern&&!e;for(const x of i.lights)for(const y of x.mirror===!1||x.x===0?[x.x]:[x.x,-x.x])g(s,x,y,h+.012,x.c),x.brake&&!e&&g(r,x,y,h+.016,16726570),_&&(g(n,{...x,w:x.w+.05,h:x.h+.05},y,h+.008,1710622),g(s,{...x,w:x.w*.5,h:x.h*.45},y,h+.014,new Lt(x.c).lerp(new Lt(16777215),.45).getHex()));if(i.slats){const x=i.slats;for(let y=0;y<=x.n;y++){const v=x.y0+(x.y1-x.y0)*y/x.n;n.box(0,v,h+.03,x.w*2,.035,.03,Ye)}}if(e)n.quad([-.26,i.plateY-.08,h+.008],[.26,i.plateY-.08,h+.008],[.26,i.plateY+.08,h+.008],[-.26,i.plateY+.08,h+.008],15263960);else{for(const x of i.exhaust)n.with(new Nt().makeTranslation(x.x,x.y,h-.1).multiply(new Nt().makeRotationX(Math.PI/2)),()=>{n.prism(0,0,-.1,.17,x.r,x.r,8,jr,null),n.prism(0,0,.169,.17,x.r*.78,x.r*.78,8,Ye,Ye)});if(n.quad([-.3,i.plateY-.1,h+.004],[.3,i.plateY-.1,h+.004],[.3,i.plateY+.1,h+.004],[-.3,i.plateY+.1,h+.004],cs),_){const x=i.plateY,y=h+.006;n.quad([-.31,x-.105,y],[.31,x-.105,y],[.31,x-.085,y],[-.31,x-.085,y],jr),n.quad([-.31,x+.085,y],[.31,x+.085,y],[.31,x+.105,y],[-.31,x+.105,y],jr);for(const v of[-1,1])s.quad([v*.36,x-.04,h+.012],[v*.48,x-.04,h+.012],[v*.48,x+.04,h+.012],[v*.36,x+.04,h+.012],15790312);for(let v=-2;v<=2;v++)n.box(v*.2,l.yb-.03,h-.12,.03,.1,.26,cs)}}const m=(x,y,v,T,E,w,C,b,S)=>{const D=cn(a,y,"w")+S,W=cn(a,v,"w")+S;n.quad([x*D,T,y],[x*W,w,v],[x*W,C,v],[x*D,E,y],b)};for(const x of i.side??[])for(const y of[-1,1])if(x.kind==="intake")m(y,x.z0,x.z1,x.y0+(x.y1-x.y0)*.5,x.y1,x.y0,x.y1,Ye,.006);else if(x.kind==="naca")m(y,x.z0,x.z1,x.y1-.02,x.y1,x.y0,x.y1,Ye,.006);else if(x.kind==="stripe")m(y,x.z0,x.z1,x.y0,x.y1,x.y0,x.y1,x.c??16777215,.008);else if(x.kind==="strakes"){m(y,x.z0,x.z1,x.y0,x.y1,x.y0,x.y1,Ye,.006);const v=x.n??5;for(let T=0;T<v;T++){const E=x.y0+(x.y1-x.y0)*(T+.6)/(v+.2);m(y,x.z0,x.z1,E,E+.035,E,E+.035,t,.03)}}if(!e){const x=a.find(y=>y.seg==="ws");if(x)for(const y of[-1,1])n.box(y*(x.w+.06),x.belt+.12,x.z+.25,.18,.12,.12,[t,t,o,Ye]);if(_&&x){const y=a.find(v=>v.seg==="rw")??a.find(v=>v.seg==="lv");for(const v of[-1,1]){n.box(v*(x.w+.02),x.belt+.08,x.z+.25,.08,.04,.05,Ye);const T=x.z+.05,E=y?y.z+.05:x.z+1.1;for(const b of[T,E]){const S=cn(a,b,"w")+.007,D=cn(a,b,"yb")+.1,W=cn(a,b,"belt")-.02;n.quad([v*S,D,b],[v*S,D,b+.02],[v*S,W,b+.02],[v*S,W,b],cs)}const w=cn(a,E-.25,"w")+.012,C=cn(a,E-.25,"belt")-.1;n.quad([v*w,C,E-.38],[v*w,C,E-.18],[v*w,C+.04,E-.18],[v*w,C+.04,E-.38],jr)}for(const v of["ws","rw"]){const T=a.findIndex(C=>C.seg===v);if(T<0||T+1>=a.length)continue;const E=a[T],w=a[T+1];for(const C of[-1,1])n.quad([C*E.wt,E.top+.004,E.z],[C*w.wt,w.top+.004,w.z],[C*(w.wt-.04),w.top+.006,w.z],[C*(E.wt-.04),E.top+.006,E.z],Ye)}}}if(e&&ie.modern){const x=a[0],y=a.find(T=>T.seg==="ws"),v=a.find(T=>T.seg==="rw");if(n.box(0,l.yb+.05,h+.08,l.w*2+.06,.16,.16,[3815998,4868686]),n.box(0,x.yb+.05,x.z-.08,x.w*2+.06,.16,.16,[3815998,4868686]),y)for(const T of[-1,1])n.box(T*(y.w+.08),y.belt+.1,y.z+.2,.14,.12,.1,1710618);if(v&&n.quad([-.05,v.top+.15,v.z+.3],[.45,v.top+.35,v.z+.3],[.45,v.top+.37,v.z+.3],[-.05,v.top+.17,v.z+.3],1118481),i.id==="volvo240"||i.id==="cherokee"){const T=a.find(w=>w.seg==="rf"),E=a[a.indexOf(T)+1];for(const w of[-1,1])n.box(w*(T.wt-.08),T.top+.06,(T.z+E.z)/2,.06,.08,E.z-T.z,2763306)}}if(i.louvres){const x=i.louvres;for(let y=0;y<x.n;y++){const v=x.z0+(x.z1-x.z0)*y/x.n,T=cn(a,v,"top")+.006;n.quad([-x.w,T,v],[x.w,T,v],[x.w,T+.004,v+.06],[-x.w,T+.004,v+.06],Ye)}}if(i.scoop){const x=a.find(y=>y.seg==="rf");n.box(0,x.top+.07,x.z+.25,.32,.14,.5,[t,t,Ye,o])}if(i.wing){const x=i.wing,y=cn(a,x.z,"top");if(x.kind==="duck")n.box(0,x.y,x.z,x.w*2,.06,x.d,[t,t,o,o]);else if(n.box(0,x.y,x.z,x.w*2,.055,x.d,[t,t,o,o]),n.box(0,x.y-.03,x.z+x.d/2,x.w*2,.04,.03,c),x.kind==="big")for(const v of[-1,1])n.box(v*.32,(y+x.y)/2,x.z,.07,x.y-y,.16,cs);else if(x.kind==="hoop")for(const v of[-1,1])n.box(v*(x.w-.08),(y+x.y)/2,x.z,.12,x.y-y,x.d*.7,t);else for(const v of[-1,1])n.poly([[v*x.w,y,x.z-x.d/2-.15],[v*x.w,y,x.z+x.d/2],[v*x.w,x.y+.06,x.z+x.d/2],[v*x.w,x.y+.06,x.z-x.d/2]],t)}const p=i.wheels;for(const[x,y]of[[p.fz,p.fx],[p.rz,p.rx]])for(const v of[-1,1]){const T=[];for(let E=0;E<=6;E++){const w=E/6*Math.PI;T.push([v*(cn(a,x,"w")+.003),p.r+Math.sin(w)*(p.r+.07),x+Math.cos(w)*(p.r+.07)])}n.poly(T,Ye)}return{lit:n,glow:s,brake:r,plate:{y:i.plateY,z:h+.012},tailZ:h}}function f2(i,t,e,n,s){const r=new ut,a=Math.max(10,s*2),o=(l,h,u=i)=>[h,Math.cos(l)*u,Math.sin(l)*u],c=Cc(n,.3);for(let l=0;l<a;l++){const h=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;r.quad(o(h,-t),o(u,-t),o(u,t),o(h,t),l%2?1710618:2368548),r.quad(o(h,e*t),o(u,e*t),o(u,e*t,i*.7),o(h,e*t,i*.7),2105376),r.tri([-e*t,0,0],o(h,-e*t),o(u,-e*t),1447446),r.tri([e*(t+.005),0,0],o(h,e*(t+.005),i*.7),o(u,e*(t+.005),i*.7),l%2===0?n:c)}return r.with(new Nt().makeRotationZ(Math.PI/2),()=>r.prism(0,0,-e*(t+.01),-e*(t+.011),.07,.07,6,n,n)),r.build()}function tl(i,t=1,e=.8){const n=new ut,s=i.stations[i.stations.length-1].z+.08;for(const r of i.lights)for(const a of r.mirror===!1||r.x===0?[r.x]:[r.x,-r.x]){const o=Math.max(r.w,r.h)*1.6*t+.25;n.quad([a-o,r.y-o,s],[a+o,r.y-o,s],[a+o,r.y+o,s],[a-o,r.y+o,s],new Lt(r.c).multiplyScalar(e).getHex(),[0,0,1,1])}return n}function p2(i,t){const e=t.wheels;for(const[n,s]of[[-e.fx,e.fz],[e.fx,e.fz],[-e.rx,e.rz],[e.rx,e.rz]])i.with(new Nt().makeTranslation(n,e.r,s).multiply(new Nt().makeRotationZ(Math.PI/2)),()=>{i.prism(0,0,-.12,.12,e.r,e.r,8,1579032,(n>0,9079434))})}class bo{constructor(t,e,n,s,r=3947590,a=!1){this.spec=t,this.root=new gn,this.body=new gn,this.wheels=[],this.geos=[],this.hubs=[],this.gunners=[],this.gunSide=1,this.detail=[],this.paintwork=[],this.dentable=[],this.cracks=null,this.crackCount=0,this.glowMesh=null,this.tailZ=0,this.damaged=!1,this.near=!0;const o=(v,T,E)=>{this.geos.push(v);const w=new ue(v,T);return E.add(w),w},c=ie.modern,l=c?W0():null;let h,u,d;if(l){const v=H0(t,e);this.paintwork.push(o(v.skin.build(!0),l.paint,this.body),o(v.body.build(),l.paint,this.body)),this.detail.push(o(v.cabin.build(),l.lit,this.body));const T=o(v.glass.build(),l.glass,this.body);T.renderOrder=1,this.glowMesh=o(v.glow.build(),l.glow,this.body),this.dentable.push(T,this.glowMesh),this.brake=o(v.brake.empty?new ut().tri([0,0,0],[0,0,0],[0,0,0],0).build():v.brake.build(),l.glow,this.body),h=v.plate,u=v.tailZ,d=v.wheels}else{const v=Y0(t,e);this.paintwork.push(o(v.lit.build(),n.paint??n.lit,this.body)),v.glow.empty||this.dentable.push(this.glowMesh=o(v.glow.build(),n.glow,this.body)),this.brake=o(v.brake.empty?new ut().tri([0,0,0],[0,0,0],[0,0,0],0).build():v.brake.build(),n.glow,this.body),h=v.plate,u=v.tailZ;const T=t.wheels,E=T.hw??.18;d=[{x:T.fx,z:T.fz,r:T.r,hw:E},{x:T.rx,z:T.rz,r:T.r*1.03,hw:E*1.15}]}const f=new ut,{y:g,z:_}=h;f.quad([-.27,g-.08,_],[.27,g-.08,_],[.27,g+.08,_],[-.27,g+.08,_],16777215,s),this.dentable.push(o(f.build(),n.sign,this.body)),this.dentable.push(this.brake),a&&n.halo&&o(tl(t,.45,.45).build(),n.halo,this.body);const m=new ut;for(const v of t.exhaust)m.prism(v.x,-v.y,0,.7,v.r*2,0,6,[16764992,16740384],null),m.prism(v.x,-v.y,0,.42,v.r*1.2,0,6,16775360,null);const p=m.build();if(p.rotateX(Math.PI/2),this.flames=o(p,n.glow,this.body),this.flames.position.set(0,0,u+(c?.12:.05)),this.tailZ=u,this.flames.visible=!1,c){const v=o(X0(t),q0(a?.85:.7),this.root);v.renderOrder=-1}else{const v=t.stations,T=v[v.length-1].z-v[0].z,E=Math.max(...v.map(b=>b.w)),w=new ut,C=[];for(let b=0;b<8;b++){const S=b/8*Math.PI*2+Math.PI/8;C.push([Math.cos(S)*E*.92,.02,v[0].z+T/2+Math.sin(S)*(T/2-.05)])}w.poly(C,16777215),o(w.build(),new Ze({color:r,side:fe}),this.root)}const x=t.wheels,y=t.rimStyle??"star";for(const[v,T]of[[0,-1],[0,1],[1,-1],[1,1]]){const E=d[v],w=l?c2(E.r,E.hw,T,y,x.rim):f2(E.r,E.hw,T,x.rim,x.spokes),C=o(w,l?l.lit:n.lit,this.root);if(C.position.set(T*E.x,E.r,E.z),this.wheels.push(C),l){const b=o(l2(E.r,E.hw,T,t.id==="959"||t.id==="nsx"?2763310:13113360),l.lit,this.root);b.position.copy(C.position),this.hubs.push(b),this.detail.push(b)}}this.buildGunners(e,l?l.lit:n.lit,l?l.glow:n.glow,!!l),this.root.add(this.body)}setNear(t){if(t!==this.near){this.near=t;for(const e of this.detail)e.visible=t}}dispose(){var t;for(const e of this.geos)e.dispose();(t=this.cracks)==null||t.geometry.dispose()}hit(t,e){this.damaged=!0;const n=this.spec.stations,s=n[0].z,r=n[n.length-1].z,a=Math.max(...n.map(p=>p.w)),o=Math.random,c=new $,l=new $;if(e==="front"||e==="rear"){const p=e==="front";c.set((o()-.5)*a*1.4,.45+o()*.25,p?s+.1:r-.1),l.set(0,-.15,p?1:-1)}else{const p=e==="right"?1:-1;c.set(p*a,.45+o()*.3,s+.6+o()*(r-s-1.2)),l.set(-p,-.1,(o()-.5)*.3)}l.normalize();const h=.55+t*.5,u=.04+t*.16,d=new Lt(6974064),f=new Lt(1841688),g=new Lt,_=(p,x,y)=>Math.sin(p*41.3+x*17.1)*Math.cos(y*29.7+p*7.3),m=(p,x)=>{const y=p.geometry,v=y.getAttribute("position"),T=x?y.getAttribute("color"):void 0;let E=!1;for(let w=0;w<v.count;w++){const C=v.getX(w),b=v.getY(w),S=v.getZ(w),D=Math.hypot(C-c.x,(b-c.y)*1.3,S-c.z);if(D>=h)continue;const W=(1-D/h)**2,B=u*W*(.8+.4*_(C,b,S));if(v.setXYZ(w,C+l.x*B,b+l.y*B,S+l.z*B),E=!0,T){g.setRGB(T.getX(w),T.getY(w),T.getZ(w));const V=Math.min(1,W*(.4+t));g.lerp(_(S,C,b)>.2?d:f,V*.75),T.setXYZ(w,g.r,g.g,g.b)}}E&&(v.needsUpdate=!0,T&&(T.needsUpdate=!0),y.computeVertexNormals())};for(const p of this.paintwork)m(p,!0);for(const p of this.dentable)m(p,!1);t>.35&&this.crackCount<3&&this.crack()}breakLamp(t){this.damaged=!0;for(const e of[this.glowMesh,this.brake]){if(!e)continue;const n=e.geometry.getAttribute("position"),s=e.geometry.getAttribute("color");for(let r=0;r<n.count;r++)n.getZ(r)<this.tailZ-.05||n.getX(r)*t<.2||s.setXYZ(r,s.getX(r)*.15+.02,s.getY(r)*.15+.02,s.getZ(r)*.15+.02);s.needsUpdate=!0}}crack(){const t=this.spec.stations;let e=t.findIndex(d=>d.seg==="rw");if(e<0&&(e=t.findIndex(d=>d.seg==="ws")),e<0||e+1>=t.length)return;this.crackCount++;const n=t[e],s=t[e+1],r=(d,f)=>{const g=n.wt+(s.wt-n.wt)*f;return[d*g*.95,n.top+(s.top-n.top)*f+.03*(1-d*d)+.025,n.z+(s.z-n.z)*f]},a=this.cracks?Array.from(this.cracks.geometry.getAttribute("position").array):[],o=(Math.random()-.5)*1.1,c=.25+Math.random()*.5,l=7+Math.floor(Math.random()*4),h=[];for(let d=0;d<l;d++){const f=d/l*Math.PI*2+Math.random()*.5,g=.35+Math.random()*.45;let _=o,m=c;for(let p=1;p<=4;p++){const x=g*p/4,y=Math.max(-1,Math.min(1,o+Math.cos(f)*x+(Math.random()-.5)*.08)),v=Math.max(0,Math.min(1,c+Math.sin(f)*x*.8+(Math.random()-.5)*.06));a.push(...r(_,m),...r(y,v)),p===1&&h.push([y,v]),_=y,m=v}}for(let d=0;d<h.length;d++)a.push(...r(...h[d]),...r(...h[(d+1)%h.length]));const u=new ke;u.setAttribute("position",new _e(a,3)),this.cracks?(this.cracks.geometry.dispose(),this.cracks.geometry=u):(this.cracks=new N0(u,new Xc({color:15266047,transparent:!0,opacity:.85})),this.cracks.renderOrder=2,this.body.add(this.cracks))}buildGunners(t,e,n,s){const r=this.spec.stations,a=r.findIndex(f=>f.seg==="rf"),o=r.find(f=>f.seg==="ws")??r[1],l=(a>=0?r[a]:o).z+.15,h=cn(r,l,"belt"),u=cn(r,l,"w"),d=new Lt(t).lerp(new Lt(2105392),.55).getHex();for(const f of[-1,1]){const g=new ut(s),_=new ut(s),m=new ut(s);G0(g,[f*.1,.16,.02],[.2,.2,.14],d,t),Kn(g,[f*.16,.36,0],[.05,.06,.05],1710620,6,4),B0(g,[f*.2,.5,-.01],.135,t),Kn(g,[f*.02,.12,-.2],[.05,.05,.13],d,8,5),Kn(g,[f*0,.08,-.33],[.045,.045,.045],1315862,6,4);const p=i2(_,d,t);for(let w=0;w<4;w++){const C=w/4*Math.PI,b=Math.cos(C)*.12,S=Math.sin(C)*.12;m.quad([-b,-S,0],[b,S,0],[b*.3,S*.3,-.36],[-b*.3,-S*.3,-.36],w%2?16760896:16771216)}m.quad([-.08,-.08,.001],[.08,-.08,.001],[.08,.08,.001],[-.08,.08,.001],16776160);const x=new gn,y=new gn;y.rotation.z=-f*.32,x.add(y);const v=(w,C,b)=>{const S=w.build();this.geos.push(S);const D=new ue(S,C);return b.add(D),D};v(g,e,y);const T=new gn;T.position.set(f*.26,.28,0),v(_,e,T);const E=v(m,n,T);E.position.set(...p),E.visible=!1,y.add(T),x.position.set(f*(u-.14),h-.06,l),x.visible=!1,this.body.add(x),this.gunners.push({group:x,arm:T,flash:E})}}aim(t,e=0,n=!1){t&&(this.gunSide=t),this.gunners.forEach((s,r)=>{const a=t!==0&&(r===0?-1:1)===this.gunSide;s.group.visible=a,a&&(s.arm.rotation.set(0,e,0),s.flash.visible=n,n&&(s.flash.rotation.z=Math.random()*Math.PI))})}pose(t,e,n,s,r,a=!1,o=0){this.root.rotation.set(0,e,0),this.body.rotation.set(r,0,-t*.05),this.body.position.y=s,this.brake.visible=a,this.flames.visible=o>0,o>0&&this.flames.scale.set(1,1,.6+Math.random()*.8),this.wheels.forEach((c,l)=>c.rotation.set(n,l<2?-t*.35:0,0,"YXZ")),this.hubs.forEach((c,l)=>c.rotation.set(0,l<2?-t*.35:0,0))}}const Fh=96,Jr={x:0,y:0,z:0,h:0};class m2{constructor(t){this.pool=[],this.m=new Nt,this.s=new $,this.p=new $;const e=new ut,n=(r,a,o,c,l)=>{const h=[];for(let u=0;u<8;u++){const d=u/8*Math.PI*2+Math.PI/8;h.push([a+Math.cos(d)*r,o+Math.sin(d)*r,c])}e.poly(h,l)};let s;if(ie.modern){const a=document.createElement("canvas");a.width=a.height=64;const o=a.getContext("2d"),c=o.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);c.addColorStop(0,"rgba(255,255,255,0.85)"),c.addColorStop(.55,"rgba(235,235,235,0.45)"),c.addColorStop(1,"rgba(220,220,220,0)"),o.fillStyle=c,o.fillRect(0,0,64,64);const l=new lr(a);l.colorSpace=Oe,e.quad([-.6,-.6,0],[.6,-.6,0],[.6,.6,0],[-.6,.6,0],16777215,[0,0,1,1]),s=new Ze({map:l,vertexColors:!0,transparent:!0,depthWrite:!1,side:fe})}else n(.5,0,0,0,12105912),n(.34,-.1,.1,.01,16777215),s=new Ze({vertexColors:!0,side:fe});this.mesh=new D0(e.build(),s,Fh),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.setColorAt(0,new Lt(1,1,1)),t.add(this.mesh)}spawn(t,e,n,s,r,a,o,c,l,h){this.pool.length>=Fh&&this.pool.shift(),this.pool.push({d:t,x:e,y:n,vd:s,vx:r,vy:a,life:o,max:o,size:c,grow:l,color:new Lt(h)})}clear(){this.pool.length=0}update(t){for(const e of this.pool)e.life-=t,e.d+=e.vd*t,e.x+=e.vx*t,e.y+=e.vy*t,e.vy-=(e.grow<0?18:0)*t,e.vd*=1-t*2,e.vx*=1-t*2;this.pool=this.pool.filter(e=>e.life>0)}render(t,e){let n=0;for(const s of this.pool){if(!t.sample(s.d,s.x,Jr))continue;const r=1-s.life/s.max,a=Math.max(.02,s.size*(1+Math.max(0,s.grow)*r)*(r>.75?(1-r)*4:1));this.p.set(Jr.x,Jr.y+s.y,Jr.z),this.s.set(a,a,a),this.m.compose(this.p,e.quaternion,this.s),this.mesh.setMatrixAt(n,this.m),this.mesh.setColorAt(n,s.color),n++}this.mesh.count=n,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}}let Ys=null;function g2(i){ie.modern&&!Ys&&(Ys=Qg());const t=new _a({vertexColors:!0,flatShading:!0,side:fe}),e=new Ze({vertexColors:!0,side:fe});ie.modern&&Ys&&(Aa(t,Ys),Aa(e,Ys));const n=ie.modern?W0():null;return{facade:t,facadeLit:e,car:(n==null?void 0:n.lit)??t,carGlow:(n==null?void 0:n.glow)??e,glass:(n==null?void 0:n.glass)??e,shadow:q0(.75),lit:new _a({vertexColors:!0,flatShading:!0,side:fe}),glow:new Ze({vertexColors:!0,side:fe}),sign:new Ze({map:i,side:fe}),halo:new Ze({map:bg(),vertexColors:!0,transparent:!0,blending:va,depthWrite:!1,fog:!1,side:fe,visible:ie.modern}),paint:ie.modern?new wc({vertexColors:!0,flatShading:!0,side:fe,shininess:45,specular:10132122}):new _a({vertexColors:!0,flatShading:!0,side:fe})}}class x2{constructor(t,e,n){this.defs=t,this.meshes=[],this.counts=[],this.m=new Nt,this.q=new Es,this.e=new xn,this.p=new $,this.sc=new $,this.c=new Lt,this.white=new Lt(1,1,1);for(const s of t){const r=s.parts.map(a=>{const o=new D0(a.geo,e[a.mat],s.max);return o.frustumCulled=!1,o.instanceMatrix.setUsage(Qs),o.setColorAt(0,this.white),o.count=0,a.order&&(o.renderOrder=a.order),n.add(o),{mesh:o,tint:a.tint??a.mat==="lit"}});this.meshes.push(r),this.counts.push(0)}}begin(){this.counts.fill(0)}add(t,e,n,s,r,a=1,o=1,c,l=0){const h=this.counts[t];if(!(h>=this.defs[t].max)){this.counts[t]=h+1,this.e.set(0,r,l,"YXZ"),this.q.setFromEuler(this.e),this.p.set(e,n,s),this.sc.set(a,a*o,a),this.m.compose(this.p,this.q,this.sc),c!==void 0&&this.c.setHex(c);for(const{mesh:u,tint:d}of this.meshes[t])u.setMatrixAt(h,this.m),u.setColorAt(h,d&&c!==void 0?this.c:this.white)}}end(){this.meshes.forEach((t,e)=>{for(const{mesh:n}of t)n.count=this.counts[e],n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0)})}}const _2=(i,t)=>new Lt(i).multiplyScalar(t).getHex(),we=(i,t,e)=>{const n=[{geo:i.build(),mat:"lit"}];return t&&!t.empty&&n.push({geo:t.build(),mat:"glow"}),n};function el(){const i=new ut;return Pc(i),{parts:we(i),radius:.8,max:260}}function M2(){const i=new ut;return i.blob(0,0,0,16,2.4,11,[15916186,14205056]),i.with(Ih(-4,1.5,1),()=>Pc(i)),i.with(Ih(5,1.2,-2).multiply($g(1.3)).multiply(new Nt().makeScale(.8,.8,.8)),()=>Pc(i)),{parts:we(i),radius:0,max:20}}function Pc(i){let e=0;for(let r=0;r<5;r++){const a=.18*Math.pow(r+1,1.5),o=r*2,c=(r+1)*2,l=.48-r*.04,h=.44-r*.04,u=r%2?9067051:11038778;for(let d=0;d<6;d++){const f=d/6*Math.PI*2,g=(d+1)/6*Math.PI*2;i.quad([e+Math.cos(f)*l,o,Math.sin(f)*l],[e+Math.cos(g)*l,o,Math.sin(g)*l],[a+Math.cos(g)*h,c,Math.sin(g)*h],[a+Math.cos(f)*h,c,Math.sin(f)*h],d%2?u:7621154)}e=a}const n=[e,5*2,0],s=7;for(let r=0;r<s;r++){const a=r/s*Math.PI*2+.3,o=Math.cos(a),c=Math.sin(a),l=-c,h=o,u=(x,y,v)=>[[n[0]+o*x+l*v,n[1]+y,n[2]+c*x+h*v],[n[0]+o*x-l*v,n[1]+y,n[2]+c*x-h*v]],[d,f]=u(1.5,.7,.75),[g,_]=u(3,.3,.6),m=[n[0]+o*4.4,n[1]-1.6,n[2]+c*4.4],p=r%2?3124810:2067002;i.tri(n,d,f,p),i.quad(f,d,g,_,r%2?2529343:1733682),i.tri(_,g,m,p)}i.blob(n[0],n[1]-.3,0,.5,.45,.5,6965786)}function v2(){const i=new ut;return i.prism(0,0,0,3,.45,.32,5,[7227942,5913630]),i.blob(0,4.6,0,2.8,2.4,2.8,[4173375,2783790]),i.blob(.4,6.8,.2,1.9,1.6,1.9,[5685834,3442746]),{parts:we(i),radius:1.2,max:220}}function $0(){const i=new ut;return i.blob(0,.9,0,1.8,1.1,1.6,[4763712,2914860]),{parts:we(i),radius:0,max:160}}function nl(){const i=new ut;return i.blob(0,1,0,2.2,1.6,2,[13153420,9206362]),i.blob(1.6,.6,.6,1.2,.9,1.1,[12100732,8153676]),{parts:we(i),radius:2.2,max:120}}function So(i){const t=new ut;return t.box(0,1.3,0,.12,2.6,.12,15790320),t.prism(0,0,2.3,3,2.1,0,8,[i[0],i[1]]),t.prism(0,0,2.3,2.3001,2.1,.01,8,[i[0],i[1]]),t.quad([-.6,.03,.6],[.6,.03,.6],[.6,.03,2.4],[-.6,.03,2.4],i[0]),{parts:we(t),radius:0,max:120}}function y2(){const i=new ut;for(const[t,e]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.box(t,1.3,e,.2,2.6,.2,16777215);return i.box(0,3.5,0,2.6,1.8,2.4,[16777215,16777215]),i.box(0,3.6,1.21,1.8,.7,.02,2775690),i.prism(0,0,4.4,5.4,2.1,0,4,[16730730,16743050],null,Math.PI/4),{parts:we(i),radius:1.4,max:30}}function kh(i,t,e,n,s,r,a=!0){for(let o=0;o<3;o++)i.box(r.range(-n/3,n/3),e+.6,r.range(-s/3,s/3),2.2,1.2,1.6,[13158600,14474460]);if(r.chance(.7)){const o=r.range(-n/4,n/4),c=r.range(-s/4,s/4);for(const[l,h]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.box(o+l,e+1,c+h,.2,2,.2,6974064);i.prism(o,c,e+2,e+4.2,1.4,1.4,8,[10127984,9075298],8022610)}a&&(i.box(n/4,e+4,0,.25,8,.25,10132136),t.box(n/4,e+8.2,0,.6,.6,.6,16719904))}function il(i,t){const e=new ut,n=3836600;if(ie.modern){const s=new ut,r=new ut,a=o=>hr(o);if(i===0){s.facadeBox(0,38/2+1.5,0,16,35,12,a(ye.HOTEL),8,8,[16777215,15658734],15263976),e.box(0,1.5,0,16-.4,3,12-.4,[2771562,2771562]),e.box(0,3.1,12/2+1.2,7,.3,2.6,[16777215,16777215]);for(const h of[-3.2,3.2])e.box(h,1.5,12/2+2.3,.2,3,.2,14211288);for(const h of[-16/2-.2,16/2+.2])e.box(h,38/2,0,.7,38,12+.7,[16777215,16777215]);e.box(0,38+1.2,0,16*.5,2.4,12*.6,[16777215,15790320]),kh(e,r,38,16,12,t)}else if(i===1){const o=[[18,16,14],[14,12,11],[9,9,8]];let c=0;for(const[l,h,u]of o)s.facadeBox(0,c+h/2,0,l,h,u,a(ye.DECO),8,8,[16777215,15790320],15788248),e.box(0,c+h-.4,0,l+.6,.8,u+.6,[16769162,16771232]),e.box(0,c+h-1.4,0,l+.3,.25,u+.3,4243632),c+=h;e.prism(0,0,c,c+7,1.2,.05,4,[16777215,14737632]),r.box(0,c+7.2,0,.5,.5,.5,16719904)}else{s.facadeBox(0,12/2,0,26,12,9,a(ye.MOTEL),12,12,[16777215,15790320],14736596),e.box(0,12+.3,0,27,.6,10,[16738954,16743062]),e.box(0,6.1,9/2+.9,26,.25,1.8,[15790320,16777215]);for(let h=-26/2+3;h<26/2;h+=6)e.box(h,12/2,9/2+1.7,.4,12,.4,16777215);kh(e,r,12,26,9,t,!1)}return{parts:[...we(e,r),{geo:s.build(),mat:"facade"}],radius:0,max:40}}if(i===0){e.box(0,38/2,0,16,38,12,[16777215,15790320]);for(let o=4;o<36;o+=3.2)e.box(0,o,0,16+.3,1.2,12+.3,n);e.box(0,38+1.2,0,16*.5,2.4,12*.6,16777215),e.box(-16/2-.2,38/2,0,.6,38,12+.6,16777215),e.box(16/2+.2,38/2,0,.6,38,12+.6,16777215)}else if(i===1){const s=[[18,16,14],[14,12,11],[9,9,8]];let r=0;for(const[a,o,c]of s){e.box(0,r+o/2,0,a,o,c,[16777215,16053492]);for(let l=r+2.5;l<r+o-1;l+=3)e.box(0,l,0,a*.7,1.3,c+.3,n);e.box(0,r+o-.4,0,a+.6,.8,c+.6,16769162),r+=o}e.prism(0,0,r,r+7,1.2,.05,4,[16777215,14737632])}else{e.box(0,12/2,0,26,12,9,[16777215,15921906]);for(let o=2.5;o<12;o+=3.3)e.box(0,o,0,26+.3,1.1,9+.3,n);e.box(0,12+.3,0,27,.6,10,16738954);for(let o=-26/2+3;o<26/2;o+=6)e.box(o,12/2,9/2+.25,.6,12,.5,16777215)}return{parts:we(e),radius:0,max:40}}function K0(i){const t=new ut,e=new ut,n=new ut;ie.modern?n.facadeBox(0,3.5,0,12,7,9,hr(ye.SHOP),12,7,[16777215,15790320],14736596):(t.box(0,3.5,0,12,7,9,[16777215,15790320]),t.box(0,3,4.6,8,2.6,.2,3832488));for(let r=0;r<6;r++){const a=-6+r*2,o=a+2;t.quad([a,5.2,4.5],[o,5.2,4.5],[o,4.4,6],[a,4.4,6],r%2?16777215:16730714)}e.quad([-5,7.2,4.52],[5,7.2,4.52],[5,9.7,4.52],[-5,9.7,4.52],16777215,i),t.box(0,8.45,4.4,10.4,2.9,.2,16777215);const s=[{geo:t.build(),mat:"lit"},{geo:e.build(),mat:"sign"}];return n.empty||s.push({geo:n.build(),mat:"facade"}),{parts:s,radius:0,max:40}}function ur(i,t=9,e=4.5,n=9079434,s=15790320){const r=new ut,a=new ut;return r.box(-t*.3,2.5,0,.35,5,.35,n),r.box(t*.3,2.5,0,.35,5,.35,n),r.box(0,5+e/2,0,t+.6,e+.6,.4,s),a.quad([-t/2,5,.22],[t/2,5,.22],[t/2,5+e,.22],[-t/2,5+e,.22],16777215,i),{parts:[{geo:r.build(),mat:"lit"},{geo:a.build(),mat:"sign"}],radius:1.2,max:40}}function Na(i,t=4,e=2){const n=new ut,s=new ut;return n.box(0,1.6,0,.2,3.2,.2,13619151),n.box(0,3.2+e/2,-.06,t+.2,e+.2,.1,14540253),s.quad([-t/2,3.2,.01],[t/2,3.2,.01],[t/2,3.2+e,.01],[-t/2,3.2+e,.01],16777215,i),{parts:[{geo:n.build(),mat:"lit"},{geo:s.build(),mat:"sign"}],radius:.5,max:30}}function As(i,t,e=10133672,n=3,s=!1){const r=new ut,a=new ut;r.prism(0,0,0,i,.2,.14,6,e),r.box(-n/2,i,0,n,.22,.22,e),a.box(-n,i-.2,0,1.4,.3,.6,t);const o=we(r,a);if(s){const c=new ut,l=4.2,h=i-.5;c.quad([-n-l,h-l,0],[-n+l,h-l,0],[-n+l,h+l,0],[-n-l,h+l,0],t,[0,0,1,1]),c.quad([-n,h-l,-l],[-n,h-l,l],[-n,h+l,l],[-n,h+l,-l],t,[0,0,1,1]),c.quad([-n-3.5,.05,-3.5],[-n+3.5,.05,-3.5],[-n+3.5,.05,3.5],[-n-3.5,.05,3.5],_2(t,.35),[0,0,1,1]),o.push({geo:c.build(),mat:"halo",tint:!1})}return{parts:o,radius:.5,max:120}}function Ua(i=15921906,t=10132122){const e=new ut;return e.box(0,.85,-jt/2,.15,.45,jt+.05,[i,i]),e.box(0,.4,0,.18,.8,.18,t),e.box(0,.4,-jt/2,.18,.8,.18,t),{parts:we(e),radius:0,max:420}}function Ee(i,t=15790320,e=14690858,n=16769088){const s=new ut,r=new ut,a=new ut,o=Z+2.5;s.box(-o,5.5,0,1.2,11,1.2,[t,t]),s.box(o,5.5,0,1.2,11,1.2,[t,t]),s.box(0,11.5,0,o*2+1.6,3.4,.8,e),r.quad([-o+1,10.1,.42],[o-1,10.1,.42],[o-1,12.9,.42],[-o+1,12.9,.42],16777215,i);for(let c=0;c<6;c++)a.box(-o+2+c*((o*2-4)/5),13.6,.2,.9,.6,.6,n);return{parts:[{geo:s.build(),mat:"lit"},{geo:r.build(),mat:"sign"},{geo:a.build(),mat:"glow"}],radius:0,max:4}}function dr(i=9079446,t=14204992,e=9){const n=new ut,s=Z+2.2,r=34,a=60;return n.box(-s-a/2,r/2-4,0,a,r+8,3,[i,i]),n.box(s+a/2,r/2-4,0,a,r+8,3,[i,i]),n.box(0,e+(r-e)/2,0,s*2,r-e,3,[i,i]),n.box(0,e+.6,1.6,s*2,1.2,.3,t),n.box(-s-.4,e/2,1.6,.8,e,.3,t),n.box(s+.4,e/2,1.6,.8,e,.3,t),{parts:we(n),radius:0,max:6}}function b2(i=9){const t=new ut,e=Z+2.2,n=i+2.5,s=4894266,r=3836976,a=11047024,o=9073752,c=(u,d,f)=>t.poly(u.map(([g,_])=>[g,_,f]),d),l=u=>u.map(([d,f])=>[-d,f]).reverse(),h=[[-130,-8],[-e,-8],[-e,n],[-34,30],[-62,38],[-98,22]];c(h,s,-.4),c(l([[-120,-8],[-e,-8],[-e,n],[-30,34],[-55,30],[-90,16]]),r,-.4),c([[-e,n],[e,n],[e+8,34],[12,44],[-10,40],[-e-6,30]],s,-.4),c([[-e-10,-8],[-e,-8],[-e,n],[-e-6,n+6],[-e-14,8]],a,0),c([[e,-8],[e+10,-8],[e+14,8],[e+6,n+6],[e,n]],o,0),c([[-e,n],[e,n],[e+6,n+6],[0,n+9],[-e-6,n+6]],a,0),t.box(-e-.6,i/2,.4,1.2,i+.4,.8,14735560),t.box(e+.6,i/2,.4,1.2,i+.4,.8,14735560),t.box(0,i+1.1,.4,e*2+2.4,2.2,.8,14735560);for(let u=0;u<10;u++){const d=-e+u*e*2/10;t.quad([d,i+.2,.82],[d+e*2/10,i+.2,.82],[d+e*2/10,i+.9,.82],[d,i+.9,.82],u%2?1710618:16764992)}return{parts:we(t),radius:0,max:6}}function _n(i,t=0){const e=new ut,n=new ut,s=1+t;if(!t)for(const r of[-1.5,1.5])e.box(r,.6,-.1,.16,1.2,.16,15263976);return e.box(0,s+.75,-.08,4.3,1.7,.12,1710618),n.quad([-2,s+.1,0],[2,s+.1,0],[2,s+1.4,0],[-2,s+1.4,0],16777215,i),{parts:[{geo:e.build(),mat:"lit"},{geo:n.build(),mat:"sign"}],radius:1.8,max:60}}function Z0(){const i=new ut;i.box(0,.65,-jt/2,1.5,1.3,jt,[3840570,5421130]);const t=[16734858,16769088,16777215,16747056];for(let e=0;e<6;e++)i.box(e%2?.35:-.35,1.34,-.5-e*.95,.3,.12,.3,t[e%t.length]);return{parts:we(i),radius:0,max:360}}function sl(){const i=new ut,t=new ut;return i.prism(0,0,0,8,.1,.08,6,15790320,16769088),t.tri([0,7.8,0],[0,6.2,0],[-2.6,7,.3],16777215),t.tri([0,7,.01],[0,6.6,.01],[-1.6,6.85,.31],13684944),{parts:[{geo:i.build(),mat:"lit",tint:!1},{geo:t.build(),mat:"lit",tint:!0}],radius:.4,max:80}}function j0(){const i=new ut;return i.prism(0,0,0,1.6,.3,.25,5,6964774),i.prism(0,0,1.2,5.2,2.4,0,7,[2783802,1991728]),i.prism(0,0,3.6,7.6,1.9,0,7,[3444799,2519092]),i.prism(0,0,5.8,9.6,1.3,0,7,[4105288,2914872]),{parts:we(i),radius:1,max:200}}function S2(){const i=new ut;return[[16730730,16777215],[2793727,16769088],[16769088,16738848]].forEach(([e,n],s)=>{const r=(s-1)*.8,a=[];for(let o=0;o<10;o++){const c=o/10*Math.PI*2;a.push([r+Math.cos(c)*.32,1.25+Math.sin(c)*1.25,s*.12])}i.poly(a,e),i.quad([r-.06,.1,s*.12+.01],[r+.06,.1,s*.12+.01],[r+.06,2.4,s*.12+.01],[r-.06,2.4,s*.12+.01],n)}),{parts:we(i),radius:0,max:40}}function J0(){const i=new ut;return i.poly([[-1.4,0,-4],[1.4,0,-4],[1.1,.9,-4.4],[-1.1,.9,-4.4]],16777215),i.box(0,.6,0,2.8,1.2,8,[16777215,15263976,15790320,2775720]),i.box(0,.35,0,2.84,.25,8.04,2775720),i.box(0,6,.6,.15,10,.15,13684944),i.tri([0,10.5,.6],[0,1.6,.6],[0,1.6,4],16777215),i.tri([0,9,.5],[0,1.6,.5],[0,1.6,-3],16738954),{parts:we(i),radius:0,max:40}}function E2(i){const t=new ut,e=new ut,n=Z+60,s=12.5;t.box(0,s,0,n*2,2.4,11,[9079448,11053236,7237244,7237244]),t.box(0,s-.3,5.55,n*2,1.2,.2,i),t.box(0,s+1.7,5.3,n*2,1,.3,13158608),t.box(0,s+1.7,-5.3,n*2,1,.3,13158608);for(const r of[-16,Z+5,-47,Z+36])t.box(r,s/2-20,0,2.6,s+40,4,[8026760,9079446]);for(let r=-Z;r<=Z;r+=5.5)e.box(r,s-1.25,0,1.6,.1,.8,16773312);for(let r=-n+4;r<n;r+=9)e.box(r,s+2.35,5.3,.5,.3,.4,16760928);return{parts:we(t,e),radius:0,max:6}}function w2(i){const t=new ut,e=[16765040,16777215,16756800,8446207,16734858];for(let n=0;n<26;n++){const s=i.range(-45,45),r=i.range(-30,30),a=i.pick(e);if(i.chance(.4))for(let o=0;o<5;o++)t.box(s+o*3,.4,r,.7,.7,.7,a);else t.box(s,.4,r,.9,.9,.9,a)}return{parts:[{geo:t.build(),mat:"glow"}],radius:0,max:200}}function gi(i){const t=new ut,e=new ut;t.box(0,2.3,1,2.5,3.2,7.4,[16053492,16777215,15263976,14737632]),t.box(0,2.2,1,2.54,.5,7.44,i),t.box(0,1.5,-3.6,2.4,2.2,1.8,[16777215]),t.box(0,2.1,-4.45,2,.8,.1,2241348);for(const[n,s]of[[-1,-3.6],[1,-3.6],[-1,2.6],[1,2.6],[-1,3.8],[1,3.8]])t.box(n,.45,s,.4,.9,.9,1381653);return e.box(-1,.95,4.72,.35,.3,.04,16722464),e.box(1,.95,4.72,.35,.3,.04,16722464),{parts:we(t,e),radius:0,max:10,len:6.5}}function ki(i){const t=new ut,e=new ut;t.box(0,1.9,0,2.5,3,10,[16777215,16053492,15263976,15263976]),t.box(0,2.4,0,2.54,1,9,2241348),t.box(0,1.2,0,2.54,.4,10.04,i),t.box(0,2.6,5.02,1.8,.8,.05,2241348);for(const[n,s]of[[-1.05,-3.4],[1.05,-3.4],[-1.05,3.4],[1.05,3.4]])t.box(n,.45,s,.4,.9,1,1381653);return e.box(-1,1,5.02,.3,.35,.04,16722464),e.box(1,1,5.02,.3,.35,.04,16722464),e.box(0,3.25,5.02,1.6,.25,.04,16756800),{parts:we(t,e),radius:0,max:8,len:7.5}}function xi(i){const t=new ut,e=new ut;return t.box(0,.55,0,.16,1.1,.16,[16053492,16777215]),t.box(0,.86,0,.17,.12,.17,1710618),e.box(0,.72,.085,.1,.16,.01,i?16724e3:16777215),{parts:we(t,e),radius:0,max:400}}function rl(i){const t=new ut,e=new ut;return t.box(0,.6,0,.12,1.2,.12,14474460),t.box(0,1.35,-.04,.9,.6,.06,16777215),e.quad([-.42,1.08,0],[.42,1.08,0],[.42,1.62,0],[-.42,1.62,0],16777215,i),{parts:[{geo:t.build(),mat:"lit"},{geo:e.build(),mat:"sign"}],radius:0,max:20}}function zi(i){const t=new ut,e=new ut,n=14196858,s=i===1?14196858:3820138;return t.box(-.12,.42,0,.18,.84,.2,s),t.box(.12,.42,0,.18,.84,.2,s),i===1&&t.box(0,.8,0,.44,.18,.24,2763370),e.box(0,1.15,0,.46,.62,.26,[16777215,16777215]),t.box(-.3,1.1,0,.12,.6,.14,n),t.box(.3,1.1,0,.12,.6,.14,n),t.box(0,1.6,0,.24,.28,.24,n),t.box(0,1.76,-.02,.26,.08,.26,i===1?15253600:2759184),{parts:[{geo:t.build(),mat:"lit",tint:!1},{geo:e.build(),mat:"lit",tint:!0}],radius:0,max:160}}function Q0(i){const t=new ut;for(let e=0;e<5;e++){const n=i.range(-10,10),s=i.range(0,6),r=i.range(-10,10),a=i.range(.8,1.3);t.tri([n,s,r],[n-.9*a,s+.35*a,r-.2],[n-.1,s+.05,r+.25*a],16777215),t.tri([n,s,r],[n+.9*a,s+.35*a,r-.2],[n+.1,s+.05,r+.25*a],15263984)}return{parts:we(t),radius:0,max:30}}function T2(){const i=new ut,t=new ut;i.box(0,1.3,0,2.4,2.6,2.2,[16777215,16053492]);for(let e=0;e<3;e++)t.box(-.8+e*.8,1.3,0,.4,2.62,2.22,[16777215,16777215]);return i.prism(0,0,2.6,3.6,1.9,0,4,[16777215,15263976],null,Math.PI/4),i.box(0,1,1.12,.9,1.8,.04,6965802),{parts:[{geo:i.build(),mat:"lit",tint:!1},{geo:t.build(),mat:"lit",tint:!0}],radius:1.4,max:40}}function tu(i){const t=new ut;return t.box(0,.05,0,.16,.1,.4,i),{parts:[{geo:t.build(),mat:"glow"}],radius:0,max:500}}function A2(i){const t=new ut,e=new ut,n=new ut;return t.box(0,1.1,0,1,2.2,.8,[16747040,16752704]),t.box(0,2.3,0,1.1,.2,.9,3815994),e.quad([-.4,1.4,.41],[.4,1.4,.41],[.4,1.9,.41],[-.4,1.9,.41],16777215,i),n.box(0,2.5,0,.3,.2,.3,16764992),{parts:[{geo:t.build(),mat:"lit"},{geo:e.build(),mat:"sign"},{geo:n.build(),mat:"glow"}],radius:0,max:20}}function R2(i){const t=new ut,e=new ut;for(const n of[-4.5,4.5])t.with(new Nt().makeTranslation(n,i-1.1,0).multiply(new Nt().makeRotationX(Math.PI/2)),()=>{t.prism(0,0,-1.6,1.6,.7,.7,10,[9079442,8026754],2763310),t.prism(0,0,-1.61,-1.6,.7,.7,10,2763310,2763310)}),t.box(n,i-.3,0,.2,.6,.2,5921378);for(const n of[-9,9])e.box(n,i-.2,0,.4,.2,1.4,16773312);return{parts:we(t,e),radius:0,max:12}}const zh=i=>new Lt().setHex(i);function pe(i,t,e,n){const s=[],r=(h,u,d,f,g,_,m,p)=>s.push({xa:h,ya:u,absA:d,xb:f,yb:g,absB:_,c0:zh(m[0]),c1:zh(m[1]),tex:p});let o=-Z;const c=i.edge!==void 0?.45:0;c&&(r(o,0,!1,o+c,0,!1,[i.edge,i.edge],ot.PAINT),o+=c);for(let h=1;h<Di;h++){const u=-Z+h*rr;r(o,0,!1,u-.35/2,0,!1,i.road,ot.ASPHALT),r(u-.35/2,0,!1,u+.35/2,0,!1,[i.line,i.road[1]],ot.PAINT),o=u+.35/2}r(o,0,!1,Z-c,0,!1,i.road,ot.ASPHALT),c&&r(Z-c,0,!1,Z,0,!1,[i.edge,i.edge],ot.PAINT);const l=[];for(const h of[-1,1]){let u=Z,d=0,f=!1;if(i.rumble){const g=i.rumbleW??1.6;r(h*u,0,!1,h*(u+g),0,!1,i.rumble,ot.KERB),u+=g}for(const g of h<0?t:e){const _=u+g.w;let m=d,p=f;g.abs!==void 0?(m=g.abs,p=!0):g.dy!==void 0&&(m=d+g.dy),r(h*u,d,f,h*_,m,p,g.c,g.tex),u=_,d=m,f=p}l.push({x:h*u,y:d,abs:f})}return n&&r(l[0].x,l[0].y,l[0].abs,l[1].x,l[1].y,l[1].abs,n,ot.CEILING),{spans:s}}function C2(i){if(Math.abs(i.xb-i.xa)<.01)return Math.abs(i.yb-i.ya)>3?ot.TUNNEL:ot.CONCRETE;const e={h:0,s:0,l:0};i.c0.getHSL(e,Oe);const n=e.h*360,{s,l:r}=e;return i.absB&&i.yb<.5&&i.yb>.05&&r>.9?ot.FOAM:n>165&&n<260&&s>.5?r<.25?ot.BAY:r>.52?ot.SHALLOW:ot.SEA:r<.22?ot.CITY:n>60&&n<170&&s>.25?ot.GRASS:n>25&&n<60&&s>.55?ot.SAND:n>25&&n<60&&s>.3&&r<.8?ot.DIRT:s<.2&&r>.6?ot.CONCRETE:ot.PAVING}const P2={[ot.ASPHALT]:[5.5,9],[ot.PAINT]:[2,6],[ot.KERB]:[1.6,6],[ot.GRASS]:[7,7],[ot.SAND]:[9,9],[ot.SEA]:[16,16],[ot.BAY]:[20,20],[ot.SHALLOW]:[10,10],[ot.FOAM]:[3,8],[ot.CONCRETE]:[4,6],[ot.TUNNEL]:[3,3],[ot.CEILING]:[6,12],[ot.PAVING]:[3,3],[ot.CITY]:[40,40],[ot.DIRT]:[5,5]},Bh=220,I2=32;class L2{constructor(t){this.profiles=t,this.time={value:0};const e=Bh*I2;if(this.pos=new Float32Array(e*4*3),this.colr=new Float32Array(e*4*3),this.uv=new Float32Array(e*4*2),this.tile=new Float32Array(e*4*3),ie.modern)for(const r of t)for(const a of r.spans)Math.abs(a.c0.r-a.c1.r)+Math.abs(a.c0.g-a.c1.g)+Math.abs(a.c0.b-a.c1.b)<.25&&(a.c1=a.c0.clone().lerp(a.c1,.45)),a.tex===void 0&&(a.tex=C2(a)),a.tex===ot.CITY&&(a.c0=new Lt(13158624),a.c1=new Lt(12105940));const n=new Uint32Array(e*6);for(let r=0;r<e;r++)n.set([r*4,r*4+1,r*4+2,r*4,r*4+2,r*4+3],r*6);this.geo=new ke,this.geo.setAttribute("position",new Ve(this.pos,3).setUsage(Qs)),this.geo.setAttribute("color",new Ve(this.colr,3).setUsage(Qs)),this.geo.setAttribute("uv",new Ve(this.uv,2).setUsage(Qs)),this.geo.setAttribute("tile",new Ve(this.tile,3).setUsage(Qs)),this.geo.setIndex(new Ve(n,1));const s=new Ze({vertexColors:!0,side:fe});ie.modern&&(s.color.setScalar(1.1),Aa(s,jg(),this.time)),this.mesh=new ue(this.geo,s),this.mesh.frustumCulled=!1,this.mesh.renderOrder=0}update(t){const{bx:e,by:n,bz:s,bh:r,yRef:a}=t,o=this.pos,c=this.colr,l=this.uv,h=this.tile;let u=0;const d=Math.min(t.count,Bh);for(let f=0;f<d;f++){const g=t.start+f,_=t.track.seg(g),m=this.profiles[_.profile],p=Math.floor(g/Ag)%2===0,x=Math.cos(r[f]),y=Math.sin(r[f]),v=Math.cos(r[f+1]),T=Math.sin(r[f+1]);for(const E of m.spans){const w=p?E.c0:E.c1,C=u*12;o[C]=e[f]+x*E.xa,o[C+1]=E.absA?E.ya-a:n[f]+E.ya,o[C+2]=s[f]+y*E.xa,o[C+3]=e[f]+x*E.xb,o[C+4]=E.absB?E.yb-a:n[f]+E.yb,o[C+5]=s[f]+y*E.xb,o[C+6]=e[f+1]+v*E.xb,o[C+7]=E.absB?E.yb-a:n[f+1]+E.yb,o[C+8]=s[f+1]+T*E.xb,o[C+9]=e[f+1]+v*E.xa,o[C+10]=E.absA?E.ya-a:n[f+1]+E.ya,o[C+11]=s[f+1]+T*E.xa;for(let k=0;k<4;k++)c[C+k*3]=w.r,c[C+k*3+1]=w.g,c[C+k*3+2]=w.b;const b=P2[E.tex??0]??[6,8],S=(E.xa+E.ya)/b[0],D=(E.xb+E.yb)/b[0],W=g*jt/b[1],B=(g+1)*jt/b[1],V=u*8,[et,U]=hr(E.tex??0),rt=Kg[E.tex??0]??0;for(let k=0;k<4;k++)h[u*12+k*3]=et,h[u*12+k*3+1]=U,h[u*12+k*3+2]=rt;l[V]=S,l[V+1]=W,l[V+2]=D,l[V+3]=W,l[V+4]=D,l[V+5]=B,l[V+6]=S,l[V+7]=B,u++}}this.geo.setDrawRange(0,u*6),this.geo.attributes.position.addUpdateRange(0,u*12),this.geo.attributes.color.addUpdateRange(0,u*12),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,ie.modern&&(this.geo.attributes.uv.addUpdateRange(0,u*8),this.geo.attributes.uv.needsUpdate=!0,this.geo.attributes.tile.addUpdateRange(0,u*12),this.geo.attributes.tile.needsUpdate=!0,this.time.value=performance.now()/1e3)}}const xe={x:0,y:0,z:0,h:0},Qr={x:0,y:0,z:0,h:0},Gh=48;class D2{constructor(t){this.route=t,this.scene=new ug,this.traffic=[],this.rivals=[],this.rivalCars=[],this.rng=new jn(7),this.carPaint=-1,this.net=null,this.tracers=[],this.playerGun={target:null,flash:!1},this.netTime=0;const e=new Eg;if(this.data=t.build(e),this.track=this.data.track,this.view=new Ig(this.track),this.scene.fog=new qc(t.fog.color,t.fog.near,t.fog.far),this.scene.background=new Lt(t.fog.color),ie.modern){this.scene.add(new bh(t.ambient.color,t.ambient.intensity*.55));const[a,o]=t.hemi;this.scene.add(new mg(a,o,t.ambient.intensity*.75))}else this.scene.add(new bh(t.ambient.color,t.ambient.intensity));const n=new _g(t.sun.color,t.sun.intensity);n.position.set(...t.sun.dir),this.scene.add(n),this.scene.add(this.data.backdrop.group);const s=g2(e.texture);this.road=new L2(this.data.profiles),this.scene.add(this.road.mesh),this.props=new x2(this.data.props,s,this.scene),this.mats=s,this.plate=e.add({bg:t.plate,fg:1056864,text:"TH-86",border:1056864},1,1),this.car=new bo(He[0],He[0].paints[0],s,this.plate,this.route.shadow,this.route.night),this.scene.add(this.car.root),this.particles=new m2(this.scene);const r=new ke;r.setAttribute("position",new _e(new Float32Array(Gh*6),3)),this.tracerMesh=new N0(r,new Xc({color:16771216,transparent:!0,opacity:.9,blending:va,depthWrite:!1,fog:!1})),this.tracerMesh.frustumCulled=!1,this.scene.add(this.tracerMesh)}setPlayerCar(t,e){this.car.spec===t&&this.carPaint===e&&!this.car.damaged||(this.scene.remove(this.car.root),this.car.dispose(),this.car=new bo(t,e,this.mats,this.plate,this.route.shadow,this.route.night),this.carPaint=e,this.scene.add(this.car.root))}setRivals(t){for(const e of this.rivalCars)this.scene.remove(e.root),e.dispose();this.rivals=t,this.rivalCars=t.map(e=>{const n=new bo(e.spec,e.paint,this.mats,this.plate,this.route.shadow,this.route.night);return this.scene.add(n.root),n})}sunOnHud(t,e,n){const s=this.data.backdrop.sunNdc(t);return!s||Math.abs(s.x)>1.3||Math.abs(s.y)>1.3?null:{x:(s.x+1)/2*e,y:(1-s.y)/2*n}}laneX(t){return-Di*rr/2+rr*(t+.5)}spawnCar(t){const e=this.rng.int(0,Di-1);return{d:t,x:this.laneX(e),laneTarget:e,v:this.rng.range(28,50),t:this.rng.pick(this.data.trafficTypes),tint:this.rng.pick(this.route.trafficColors),passed:!1}}resetTraffic(t,e=this.route.trafficCount,n=160){this.net=null,this.traffic=[];for(let s=0;s<e;s++)this.traffic.push(this.spawnCar(t+n+s*75+this.rng.range(0,40)))}shoot(t,e,n,s,r){const a=Math.sign(s-e)||1,o=e+a*1,c=1.25;let l=s,h=n,u=.8;r||(l+=(Math.random()-.5)*6,h+=(n-t)*.3+(Math.random()-.5)*6,u=Math.random()<.5?.05:1.6+Math.random()),this.tracers.length>=Gh&&this.tracers.shift(),this.tracers.push({d0:t+Math.sign(n-t)*.5,x0:o,y0:c,d1:h,x1:l,y1:u,life:.07});const d=this.particles;if(r)for(let f=0;f<4;f++)d.spawn(n+(Math.random()-.5)*2,s+(Math.random()-.5)*1.6,.6+Math.random()*.6,0,(Math.random()-.5)*5,2+Math.random()*3,.3,.12,-1,Math.random()<.5?16769088:16777215);else u<.1&&d.spawn(h,l,.1,0,0,.6,.5,.35,1.5,13156520)}aimCar(t,e,n,s,r,a){const o=r-n,c=s-e,l=Math.abs(o)>.4?Math.sign(o):1,h=o-l*1.1;t.aim(l,Math.atan2(-h,Math.max(-60,Math.min(60,c))),a)}setNetTraffic(t,e){const n=new jn(t),s=e+160,r=this.track.goalDist+100-s,a=Math.max(6,Math.round(this.route.trafficCount*r/1100*.7)),o={start:s,len:r,cars:[]};this.traffic=[];for(let c=0;c<a;c++){const l=[n.int(0,Di-1)];for(let h=1;h<32;h++)l.push(Math.max(0,Math.min(Di-1,l[h-1]+(n.chance(.5)?n.sign():0))));o.cars.push({d0:(c+n.next()*.6)/a*r,v:n.range(28,50),lanes:l,period:n.range(8,20)}),this.traffic.push({d:s+o.cars[c].d0,x:this.laneX(l[0]),laneTarget:l[0],v:o.cars[c].v,t:n.pick(this.data.trafficTypes),tint:n.pick(this.route.trafficColors),passed:!1,wrap:0})}this.net=o,this.netTime=0}updateNetTraffic(t,e){const n=this.net,s=this.netTime;this.traffic.forEach((r,a)=>{const o=n.cars[a],c=o.d0+o.v*s,l=Math.floor(c/n.len);l!==r.wrap&&(r.wrap=l,r.passed=!1),r.d=n.start+c-l*n.len;const h=Math.floor(s/o.period),u=o.lanes[h%o.lanes.length],d=o.lanes[Math.max(0,h-1)%o.lanes.length],f=Math.min(1,(s-h*o.period)/1.5),g=f*f*(3-2*f);r.x=this.laneX(d)+(this.laneX(u)-this.laneX(d))*g,r.laneTarget=u,!r.passed&&r.d<t-3&&r.d>t-40&&(r.passed=!0,e())})}rivalHit(t,e){var s;const n=["front","rear","left","right"];(s=this.rivalCars[t])==null||s.hit(e,n[Math.floor(Math.random()*4)])}rivalBreakLamp(t){var e;(e=this.rivalCars[t])==null||e.breakLamp(Math.random()<.5?-1:1)}rivalScreenPos(t,e,n,s){const r=this.rivalCars[t];if(!r||!r.root.visible)return null;const a=r.root.position.clone();a.y+=1.9;const o=a.distanceTo(e.position);return a.project(e),a.z>1||Math.abs(a.x)>1.1||Math.abs(a.y)>1.1?null:{x:(a.x+1)/2*n,y:(1-a.y)/2*s,dist:o}}updateTraffic(t,e,n){if(this.net)return this.updateNetTraffic(e,n);const s=this.track.goalDist;for(const r of this.traffic){r.d+=r.v*t,this.rng.chance(t*.08)&&(r.laneTarget=Math.max(0,Math.min(Di-1,r.laneTarget+this.rng.sign())));const a=this.laneX(r.laneTarget);if(r.x+=Math.sign(a-r.x)*Math.min(Math.abs(a-r.x),3*t),!r.passed&&r.d<e-3&&(r.passed=!0,n()),r.d<e-60||r.d>e+1500){const o=this.spawnCar(e+this.rng.range(900,1150));o.d>s+100&&(o.d=e-200),Object.assign(r,o)}}}hitTraffic(t,e){for(const n of this.traffic){const s=this.data.props[n.t].len??4.4;if(Math.abs(n.d-t)<s&&Math.abs(n.x-e)<2)return n}return null}hitProp(t,e){const n=Math.floor(t/jt);for(let s=n-1;s<=n+1;s++){const r=this.track.seg(s),a=s*jt-t;if(!(Math.abs(a)>2.4))for(const o of r.props){const c=this.data.props[o.t].radius;if(c>0&&Math.abs(o.x-e)<c*(o.s??1)+.9)return!0}}return!1}update(t,e,n,s,r){const a=this.view;a.update(t),this.road.update(a);const o=this.props;o.begin();const{bx:c,by:l,bz:h,bh:u,yRef:d}=a;for(let y=0;y<a.count;y++){const v=this.track.seg(a.start+y);if(!v.props.length)continue;const T=Math.cos(u[y]),E=Math.sin(u[y]);for(const w of v.props){const C=w.abs?(w.y??0)-d:l[y]+(w.y??0);o.add(w.t,c[y]+T*w.x,C,h[y]+E*w.x,-u[y]+(w.r??0),w.s??1,w.sy??1,w.tint)}}for(const y of this.traffic)a.sample(y.d,y.x,xe)&&o.add(y.t,xe.x,xe.y,xe.z,-xe.h,1,1,y.tint);o.end(),a.sample(t+2,e,xe);const f=xe.y;a.sample(t-2,e,xe);const g=xe.y;this.car.root.position.set(e,0,0),this.car.pose(r.steer,r.yaw,r.spin,r.bounce,Math.atan2(f-g,4),r.brake,r.flame);const _=this.playerGun,m=_.target!==null?this.rivals[_.target]:null;m?this.aimCar(this.car,t,e,m.d,m.x,_.flash):this.car.aim(0),this.rivals.forEach((y,v)=>{const T=this.rivalCars[v];if(!a.sample(y.d+2,y.x,xe)){T.root.visible=!1;return}const E=xe.y;a.sample(y.d-2,y.x,xe);const w=xe.y;if(a.sample(y.d,y.x,xe),T.root.visible=!0,T.setNear(Math.abs(y.d-t)<28),T.root.position.set(xe.x,xe.y,xe.z),T.pose(y.steer,-xe.h-y.steer*.08,y.spin,0,Math.atan2(E-w,4),y.braking,y.turboT>0?1:0),y.gunT>0){const C=y.gunTo===-1?{d:t,x:e}:this.rivals[y.gunTo];C?this.aimCar(T,y.d,y.x,C.d,C.x,Math.random()<.5):T.aim(0)}else T.aim(0)}),a.sample(t-8.8,e*.9,xe);const p=Math.max(xe.y,-.5)+3.3;a.sample(t+40,0,xe);const x=xe.y*.45+.9;n.position.set(e*.9+(Math.random()-.5)*s,p+(Math.random()-.5)*s,8.8),n.lookAt(e*.82,x,-30),this.data.backdrop.update(n.position,a.heading),this.particles.render(a,n),this.renderTracers(a)}renderTracers(t){const e=this.tracerMesh.geometry.getAttribute("position");let n=0;for(const s of this.tracers)!t.sample(s.d0,s.x0,xe)||!t.sample(s.d1,s.x1,Qr)||(e.setXYZ(n*2,xe.x,xe.y+s.y0,xe.z),e.setXYZ(n*2+1,Qr.x,Qr.y+s.y1,Qr.z),n++);e.needsUpdate=!0,this.tracerMesh.geometry.setDrawRange(0,n*2)}tickTracers(t){for(const e of this.tracers)e.life-=t;this.tracers=this.tracers.filter(e=>e.life>0)}}const Eo=["arcade","rivals","online"],ta=39,ea=80,na=262,ia=100,Hh=82,wo=3.6,$s=[0,18,34,50,66,84],Vh=25,Wh=.82,N2=()=>{try{return parseInt(localStorage.getItem("th86-hi")??"0",10)||0}catch{return 0}},qh=()=>{try{const i=JSON.parse(localStorage.getItem("th86-car")??"[0,0]");return[Math.min(He.length-1,i[0]|0),i[1]|0]}catch{return[0,0]}},Xh=(i,t)=>{try{localStorage.setItem("th86-car",JSON.stringify([i,t]))}catch{}},U2=()=>{try{const i=parseInt(localStorage.getItem("th86-music")??"-1",10);return i>=-1&&i<Ma.length?i:-1}catch{return-1}},O2=i=>{try{localStorage.setItem("th86-music",String(i))}catch{}},To=i=>i<.4?4251712:i<.7?Vt:Pe,sa=(i,t)=>{try{const e=localStorage.getItem(i);return e===null?t:parseInt(e,10)}catch{return t}},Ao=(i,t)=>{try{localStorage.setItem(i,String(t))}catch{}},F2=()=>{try{return localStorage.getItem("th86-name")??""}catch{return""}},k2=i=>{try{localStorage.setItem("th86-name",i)}catch{}},z2=i=>{try{localStorage.setItem("th86-hi",String(i))}catch{}};class B2{constructor(t,e,n,s,r){this.routes=t,this.camera=e,this.input=n,this.audio=s,this.hud=r,this.state="attract",this.t=0,this.paused=!1,this.routeIdx=0,this.pos=0,this.px=0,this.speed=0,this.steer=0,this.driftYaw=0,this.crashT=0,this.crashYaw=0,this.hp=100,this.wrecked=!1,this.dmgCool=0,this.scrapeDmg=0,this.smokeT=0,this.wheelSpin=0,this.bounce=0,this.shakeKick=0,this.drifting=!1,this.gear=1,this.flameT=0,this.wasAccel=!1,this.timeLeft=0,this.score=0,this.stage=0,this.hi=N2(),this.msg="",this.msg2="",this.msgUntil=0,this.bonusLeft=0,this.demoClock=0,this.attractRoute=0,this.clock=0,this.lastBeep=-1,this.musicIdx=U2(),this.mode="arcade",this.net=null,this.nameBox=null,this.playerName=F2(),this.pending=null,this.raceId="",this.netSendT=0,this.tableT=0,this.raceTime=0,this.turbos=Hr,this.turboT=0,this.turboCount=Math.max(1,Math.min(9,sa("th86-turbos",Hr)||Hr)),this.weaponsSetting=sa("th86-weapons",1)===1,this.ammoCount=Vr.includes(sa("th86-ammo",Wr))?sa("th86-ammo",Wr):Wr,this.raceAmmo=Wr,this.raceTurbos=Hr,this.weapons=!1,this.ammo=0,this.fireCool=0,this.firingT=0,this.gunTarget=null,this.lastGunTarget=null,this.gunP=0,this.noTargetT=0,this.hitFlash=0,this.gunFrom=new Map,this.pendingHits=new Map,this.hitSendT=0,this.onlineGo=null,this.finishTime=-1,this.place=8,this.table=[],this.musicToast=0,this.carIdx=qh()[0],this.paintIdx=qh()[1],this.touch=!1,this.worlds=t.map(()=>null),this.world=this.getWorld(0),this.resetPlayer(!0)}get spec(){return He[this.carIdx]}get vmax(){return this.spec.stats.vmax/wo}applyCar(t=this.spec,e=t.paints[this.paintIdx%t.paints.length]){this.world.setPlayerCar(t,e)}getWorld(t){var e;return(e=this.worlds)[t]??(e[t]=new D2(this.routes[t]))}setWorld(t){this.world===this.worlds[t]&&this.routeIdx===t||(this.routeIdx=t,this.world=this.getWorld(t),this.state!=="attract"&&this.applyCar())}resetPlayer(t){this.pos=3*jt,this.px=t?this.world.laneX(1):0,this.speed=t?50:0,this.turboT=0,this.steer=0,this.driftYaw=0,this.crashT=0,this.stage=0,this.wrecked=!1,this.world.resetTraffic(this.pos),this.world.particles.clear()}go(t){this.state=t,this.t=0}trackId(){return this.musicIdx<0?this.world.route.music:Ma[this.musicIdx].id}musicLabel(){return this.musicIdx<0?"ROUTE THEME":Ma[this.musicIdx].name}nextTrack(){this.musicIdx=this.musicIdx+1>=Ma.length?-1:this.musicIdx+1,O2(this.musicIdx),this.audio.music(this.trackId()),this.musicToast=this.clock+2.5}flash(t,e="",n=2){this.msg=t,this.msg2=e,this.msgUntil=this.clock+n}startRace(){this.paused=!1,this.resetPlayer(!1),this.hp=100,this.wrecked=!1,this.applyCar();const t=this.mode==="online"?this.onlineGo:null;this.raceTurbos=t?t.turbos:this.turboCount,this.turbos=this.raceTurbos,this.turboT=0,this.weapons=t?t.weapons:this.mode==="rivals"&&this.weaponsSetting,this.raceAmmo=t?t.ammo:this.ammoCount,this.ammo=this.weapons?this.raceAmmo:0,this.fireCool=0,this.firingT=0,this.gunTarget=this.lastGunTarget=null,this.hitFlash=0,this.gunFrom.clear(),this.pendingHits.clear(),this.raceTime=0,this.finishTime=-1,this.table=[],this.mode==="rivals"?(this.world.setRivals(kg(this.spec,this.pos,Date.now()&65535,this.raceTurbos,this.weapons?this.raceAmmo:0)),this.world.resetTraffic(this.pos,10,520),this.place=8):this.world.setRivals([]),this.timeLeft=this.world.route.startTime,this.score=0,this.lastBeep=-1,this.msg="",this.go("countdown"),this.audio.music(this.trackId())}update(t){const e=this.input;if(this.clock+=t,e.hit("KeyM")&&this.audio.toggleMute(),!this.paused&&e.hit("KeyN")&&["carselect","countdown","race"].includes(this.state)&&this.nextTrack(),this.paused){let s=e.hit("Escape")?"resume":e.hit("KeyR")?"restart":e.hit("KeyQ")?"quit":"";for(const r of e.taps)r.y>222&&r.y<254?s="resume":r.y>=254&&r.y<280?s="restart":r.y>=280&&r.y<310&&(s="quit");s==="resume"?this.paused=!1:s==="restart"&&this.mode!=="online"?this.startRace():s==="quit"&&(this.paused=!1,this.mode==="online"?this.toLobby():this.toSelect()),this.audio.engine(!1,0,0),this.audio.skid(0),this.netTick(t);return}switch(this.t+=t,this.state){case"attract":{if(this.demoClock+=t,this.demoClock>24){this.demoClock=0,this.attractRoute=(this.attractRoute+1)%this.routes.length,this.setWorld(this.attractRoute);const s=He[Math.floor(Math.random()*He.length)];this.world.setPlayerCar(s,s.paints[0]),this.resetPlayer(!0)}this.drive(t,this.autopilot(),!0),(e.confirm||e.taps.length)&&(this.audio.coin(),this.toSelect());break}case"select":{this.drive(t,this.autopilot(),!0);let s=-1,r=e.confirm||this.t>20;const a=this.routes.length;e.hit("ArrowLeft","KeyA")&&(s=(this.routeIdx+a-1)%a),e.hit("ArrowRight","KeyD")&&(s=(this.routeIdx+1)%a);let o=e.hit("ArrowUp","KeyW","ArrowDown","KeyS");for(const c of e.taps)if(c.y>ea&&c.y<ea+2*ia-12&&c.x>ta&&c.x<ta+3*na-12){const l=Math.floor((c.y-ea)/ia)*3+Math.floor((c.x-ta)/na);l===this.routeIdx?r=!0:l<a&&(s=l)}else if(c.y>=320&&c.y<380){const l=Eo[Math.max(0,Math.min(2,Math.floor((c.x-(_t/2-375))/250)))];l!==this.mode&&(this.mode=l,this.audio.blip())}else c.y>=380&&(r=!0);if(o){const c=e.hit("ArrowDown","KeyS")?1:2;this.mode=Eo[(Eo.indexOf(this.mode)+c)%3],this.audio.blip()}s>=0&&(this.audio.blip(),this.setWorld(s),this.resetPlayer(!0)),e.hit("Escape")?(this.go("attract"),this.audio.music("title")):r&&(this.audio.coin(),this.mode==="online"?this.toName():this.toCarSelect());break}case"carselect":{this.speed=0;let s=0,r=0,a=e.confirm||this.t>25;e.hit("ArrowLeft","KeyA")&&(s=-1),e.hit("ArrowRight","KeyD")&&(s=1),e.hit("ArrowUp","KeyW","ArrowDown","KeyS")&&(r=1),e.hit("KeyT")&&this.cycleTurbos(),e.hit("KeyV")&&this.mode==="rivals"&&this.toggleWeapons(),e.hit("KeyB")&&this.mode==="rivals"&&this.cycleAmmo();for(const o of e.taps)o.y>150&&o.y<186?this.mode!=="rivals"||o.x<_t*.33?this.cycleTurbos():o.x<_t*.66?this.toggleWeapons():this.cycleAmmo():o.y>370&&o.y<405&&o.x>_t/2?this.nextTrack():o.y>405&&o.x>_t/2-150&&o.x<_t/2+150?a=!0:o.x<160?s=-1:o.x>_t-160?s=1:r=1;s&&(this.carIdx=(this.carIdx+s+He.length)%He.length,this.paintIdx=0,this.audio.blip()),r&&(this.paintIdx=(this.paintIdx+1)%this.spec.paints.length,this.audio.blip()),(s||r)&&this.applyCar(),e.hit("Escape")?this.toSelect():a&&(Xh(this.carIdx,this.paintIdx),this.audio.coin(),this.startRace()),this.showroom(t);break}case"name":{this.speed=0,e.hit("Escape")&&this.nameBox&&(this.nameBox.hide(),this.toSelect()),this.showroom(t);break}case"lobby":{this.lobby(t);break}case"countdown":{const s=Math.floor(this.t);s!==this.lastBeep&&s<=3&&(this.lastBeep=s,this.audio.countBeep(s===3));const r=e.accel?.9:.15;this.audio.engine(!0,r,e.accel?1:0),this.updateWorld(0,{steer:0,yaw:0,spin:0,bounce:e.accel?Math.random()*.02:0}),this.t>=3&&(this.go("race"),this.flash("GO!","",1)),e.hit("Escape")&&(this.paused=!0),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}case"race":{e.hit("KeyT","ShiftLeft","ShiftRight")&&this.turbos>0&&this.turboT<=0&&this.crashT<=0&&(this.turbos--,this.turboT=Tc,this.audio.turbo(),this.flash("TURBO!","",1)),this.drive(t,{accel:e.accel||this.turboT>0,brake:e.brake,steer:e.steer,drift:e.drift},!1),this.timeLeft-=t,this.score+=Math.floor(this.speed*wo*t*9),this.drifting&&this.speed>45&&(this.score+=Math.floor(t*3e3));const s=this.world.track.seg(Math.floor(this.pos/jt));s.stage>this.stage&&(this.stage=s.stage,this.timeLeft+=this.world.route.extendTime,this.flash("CHECKPOINT!","EXTENDED PLAY",2.5),this.audio.jingle()),this.pos>=this.world.track.goalDist?(this.bonusLeft=Math.max(0,this.timeLeft),this.mode!=="arcade"&&(this.finishTime=this.raceTime,this.place=Ah(this.world.rivals,this.pos,this.finishTime),this.score+=[1e6,6e5,4e5,25e4,15e4,1e5,5e4,2e4][this.place-1],this.table=Xr(this.world.rivals,this.world.track,"YOU",this.spec.name,this.finishTime,this.raceTime)),this.go("goal"),this.audio.fanfare(),this.audio.music(null)):this.timeLeft<=0&&(this.timeLeft=0,this.mode!=="arcade"&&(this.table=Xr(this.world.rivals,this.world.track,"YOU",this.spec.name,1/0,this.raceTime)),this.go("over"),this.audio.sad(),this.audio.music(null),this.saveScore()),e.hit("Escape")&&(this.paused=!0),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}case"goal":{const s=this.autopilot();if(this.drive(t,{...s,accel:!1,brake:this.speed>20},!0),this.t>1.5&&this.bonusLeft>0){const r=Math.min(this.bonusLeft,t*12);this.bonusLeft-=r,this.score+=Math.floor(r*1e4),this.timeLeft=this.bonusLeft,Math.floor(this.t*12)%2===0&&this.audio.blip(),this.bonusLeft<=0&&this.saveScore()}this.t>3&&this.bonusLeft<=0&&(e.confirm||e.taps.length||this.t>14)&&this.afterRace(),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}case"over":{this.drive(t,{accel:!1,brake:this.t>1,steer:0,drift:!1},!1),this.t>2.5&&(e.confirm||e.taps.length||this.t>12)&&this.afterRace(),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}}["race","goal","over"].includes(this.state)&&this.guns(t);const n=this.world;if(n.rivals.length&&["countdown","race","goal","over"].includes(this.state)){const s=this.state!=="countdown";this.state==="race"&&(this.raceTime+=t),zg(n.rivals,t,n.track,n.traffic,r=>n.data.props[r.t].len??4.4,{pos:this.pos,px:this.px,speed:this.speed},this.raceTime,s),(this.state==="race"||this.state==="countdown")&&(this.place=Ah(n.rivals,this.pos,-1))}n.netTime=this.raceTime,this.netTick(t)}saveScore(){this.score>this.hi&&(this.hi=this.score,z2(this.hi))}cycleTurbos(){this.turboCount=this.turboCount%9+1,Ao("th86-turbos",this.turboCount),this.audio.blip()}toggleWeapons(){this.weaponsSetting=!this.weaponsSetting,Ao("th86-weapons",this.weaponsSetting?1:0),this.audio.blip()}cycleAmmo(){this.ammoCount=Vr[(Vr.indexOf(this.ammoCount)+1)%Vr.length],Ao("th86-ammo",this.ammoCount),this.audio.blip()}settingsLine(t){const e=n=>this.touch?"":`${n} `;return`${e("T")}TURBOS ${this.turboCount}${t?`  ${e("V")}WEAPONS ${this.weaponsSetting?"ON":"OFF"}  ${e("B")}AMMO ${this.ammoCount}`:""}`}showroom(t){this.updateWorld(t,{steer:0,yaw:0,spin:0,bounce:0});const e=this.t*.45+.6,n=this.camera;n.fov=40,n.updateProjectionMatrix(),n.position.set(this.px+Math.sin(e)*7,2,Math.cos(e)*7),n.lookAt(this.px,.35,0)}boot(){Ph()!==null&&(this.mode="online",this.toName())}toName(){if(this.mode="online",this.go("name"),this.applyCar(),this.resetPlayer(!1),this.px=0,!this.nameBox)return this.joinLobby(this.playerName||"PLAYER");this.nameBox.show(this.playerName,t=>{this.input.fireFirst(),this.playerName=t,k2(t),this.joinLobby(t)})}joinLobby(t){var e;if(!this.net||this.net.status==="error"){(e=this.net)==null||e.leave();const n=new URLSearchParams(location.search).get("net")==="local";this.net=new Xg(Ph()??"lobby",n),this.net.onGo=s=>this.acceptGo(s),this.net.onSt=(s,r)=>this.gotSt(s,r),this.net.onHit=(s,r)=>this.gotHit(s,r)}this.net.setMe({name:t,car:this.carIdx,paint:this.paintIdx,status:"lobby",raceId:""}),this.toLobby()}toLobby(){var t;this.paused=!1,this.pending=null,this.raceId="",this.world.setRivals([]),(t=this.net)==null||t.setMe({status:"lobby",raceId:""}),this.go("lobby"),this.applyCar(),this.resetPlayer(!1),this.px=0,this.audio.music(this.trackId())}leaveOnline(){var t;(t=this.net)==null||t.leave(),this.net=null,this.pending=null,this.mode="arcade",this.toSelect()}afterRace(){this.mode==="online"&&this.net?this.toLobby():this.toSelect()}lobby(t){const e=this.input,n=this.net;this.speed=0;let s=0,r=0,a=!1,o=e.confirm;e.hit("ArrowLeft","KeyA")&&(s=-1),e.hit("ArrowRight","KeyD")&&(s=1),e.hit("ArrowUp","KeyW","ArrowDown","KeyS")&&(r=1),e.hit("KeyR")&&(a=!0);let c=e.hit("KeyT"),l=e.hit("KeyV"),h=e.hit("KeyB"),u=e.hit("Escape","KeyQ");for(const f of e.taps)f.y>405&&Math.abs(f.x-_t/2)<150?o=!0:f.y>405&&f.x<_t/2-160?a=!0:f.y<50&&f.x<150?u=!0:f.y>=140&&f.y<218&&f.x<330?f.y<166?c=!0:f.y<192?l=!0:h=!0:f.y>60&&f.y<135&&f.x<_t-330?s=1:f.y>=135&&f.y<400&&f.x<_t-330&&(r=1);if(u)return this.leaveOnline();if((n==null?void 0:n.status)==="error"){o&&this.joinLobby(this.playerName||"PLAYER"),this.showroom(t);return}!!this.pending||(s&&(this.carIdx=(this.carIdx+s+He.length)%He.length,this.paintIdx=0),r&&(this.paintIdx=(this.paintIdx+1)%this.spec.paints.length),(s||r)&&(this.audio.blip(),this.applyCar(),Xh(this.carIdx,this.paintIdx),n==null||n.setMe({car:this.carIdx,paint:this.paintIdx})),a&&(this.audio.blip(),this.setWorld((this.routeIdx+1)%this.routes.length),this.applyCar(),this.resetPlayer(!1),this.px=0,this.audio.music(this.trackId())),c&&this.cycleTurbos(),l&&this.toggleWeapons(),h&&this.cycleAmmo(),o&&(n==null?void 0:n.status)==="online"&&this.startOnline()),this.pending&&Ni()>=this.pending.at&&this.beginOnlineRace(this.pending.go),this.showroom(t)}startOnline(){const t=this.net,e=t.list().filter(s=>s.status==="lobby").slice(0,7),n={raceId:`${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,route:this.routeIdx,seed:Math.floor(Math.random()*1e9),turbos:this.turboCount,weapons:this.weaponsSetting,ammo:this.ammoCount,players:[{id:t.selfId,name:this.playerName||"PLAYER",car:this.carIdx,paint:this.paintIdx},...e.map(s=>({id:s.id,name:s.name,car:s.car,paint:s.paint}))]};t.sendGo(n),this.acceptGo(n)}acceptGo(t){this.state!=="lobby"||!this.net||t.players.some(e=>e.id===this.net.selfId)&&(this.pending&&this.pending.go.raceId<=t.raceId||(this.onlineGo=t,this.pending={go:t,at:Ni()+2},this.audio.coin()))}beginOnlineRace(t){const e=this.net;this.pending=null,this.onlineGo=t,this.setWorld(t.route),this.raceId=t.raceId,this.startRace();const n=t.players.length,s=Math.ceil(n/2),r=o=>({d:3*jt+(s-1-Math.floor(o/2))*9,x:(o%2?1:-1)*rr*.55}),a=[];t.players.forEach((o,c)=>{const l=r(c);if(o.id===e.selfId){this.pos=l.d,this.px=l.x;return}const h=He[o.car%He.length];a.push({name:o.name,spec:h,paint:h.paints[o.paint%h.paints.length],d:l.d,x:l.x,v:0,vmax:0,corner:0,aggro:0,lane:0,steer:0,spin:0,braking:!1,finished:-1,bumpT:0,turbos:0,turboT:0,hp:100,wrecked:!1,wreckT:0,smokeT:0,ammo:0,gunTaken:0,burst:0,fireCool:0,gunT:0,gunTo:-1,remote:{id:o.id,d:l.d,x:l.x,v:0,at:Ni(),hp:100}})}),this.world.setRivals(a),this.world.setNetTraffic(t.seed,3*jt),this.place=n,e.setMe({status:"race",raceId:t.raceId})}gotSt(t,e){var a;if(!this.raceId||t.r!==this.raceId)return;const n=this.world.rivals.findIndex(o=>{var c;return((c=o.remote)==null?void 0:c.id)===e});if(n<0)return;const s=this.world.rivals[n],r=s.remote;if(r.d=t.d,r.x=t.x,r.v=t.v,r.at=Ni(),s.steer=t.steer,s.braking=t.br,s.turboT=t.tb?1:0,t.hp<r.hp-.5&&(this.world.rivalHit(n,Math.min(1,(r.hp-t.hp)/25)),r.hp>=55&&t.hp<55&&this.world.rivalBreakLamp(n),r.hp=t.hp),s.hp=t.hp,t.hp<=0&&!s.wrecked&&(s.wrecked=!0,s.wreckT=0),t.fin>=0&&s.finished<0&&(s.finished=t.fin),t.gun){const o=t.gun===((a=this.net)==null?void 0:a.selfId)?-1:this.world.rivals.findIndex(c=>{var l;return((l=c.remote)==null?void 0:l.id)===t.gun});o!==n&&(s.gunTo=o,s.gunT=.3)}}gotHit(t,e){var n;!this.raceId||t.r!==this.raceId||t.to!==((n=this.net)==null?void 0:n.selfId)||t.n>0&&this.takeGunHit(e,t.n)}netTick(t){var n,s,r;const e=this.net;if(e&&(e.update(t),!(this.mode!=="online"||!this.raceId||!["countdown","race","goal","over"].includes(this.state)))){if(this.netSendT-=t,this.netSendT<=0&&(this.netSendT=1/15,e.sendSt({r:this.raceId,d:this.pos,x:this.px,v:this.speed,steer:this.steer,br:this.input.brake&&this.speed>1,tb:this.turboT>0,hp:this.hp,fin:this.finishTime,gun:this.firingT>0&&this.lastGunTarget!==null?((s=(n=this.world.rivals[this.lastGunTarget])==null?void 0:n.remote)==null?void 0:s.id)??"":""})),this.hitSendT-=t,this.hitSendT<=0&&this.pendingHits.size){this.hitSendT=.2;for(const[a,o]of this.pendingHits)e.sendHit({r:this.raceId,to:a,n:o});this.pendingHits.clear()}this.table.length&&(this.state==="goal"||this.state==="over")&&(this.tableT-=t,this.tableT<=0&&(this.tableT=1,this.table=Xr(this.world.rivals,this.world.track,"YOU",this.spec.name,this.finishTime>=0?this.finishTime:1/0,this.raceTime),this.place=((r=this.table.find(a=>a.player))==null?void 0:r.pos)??this.place))}}toSelect(){this.go("select");for(const t of this.worlds)t==null||t.setRivals([]);this.applyCar(),this.resetPlayer(!0),this.audio.music("title")}toCarSelect(){this.go("carselect"),this.audio.music(this.trackId()),this.applyCar(),this.resetPlayer(!1),this.px=0}autopilot(){const t=this.world;let e=Math.round((this.px+Z)/(Z*2/4)-.5);e=Math.max(0,Math.min(3,e));let n=!1;for(const o of t.traffic){const c=o.d-this.pos;c>0&&c<70&&Math.abs(o.x-t.laneX(e))<2.5&&(n=!0)}if(n){for(const o of[e-1,e+1,e-2,e+2])if(!(o<0||o>3)&&!t.traffic.some(c=>c.d-this.pos>-8&&c.d-this.pos<90&&Math.abs(c.x-t.laneX(o))<2.5)){e=o;break}}const s=t.track.seg(Math.floor(this.pos/jt)).curve,r=(t.laneX(e)-this.px)*2.2+s*this.speed*this.speed*Wh,a=Math.max(-1,Math.min(1,r/Vh));return{accel:this.speed<68,brake:!1,steer:a,drift:!1}}drive(t,e,n){const s=this.world,r=s.track,a=s.route,o=r.seg(Math.floor(this.pos/jt));let c=0,l=!1,h=0;if(this.crashT>0){this.crashT-=t,this.speed=Math.max(0,this.speed-60*t),this.crashYaw+=t*9*Math.max(0,this.crashT);const x=Math.max(-Z+3,Math.min(Z-3,this.px));this.px+=(x-this.px)*Math.min(1,t*1.5),this.bounce=Math.abs(Math.sin(this.crashT*9))*.4*this.crashT,c=this.crashT>.6?1:0,this.crashT<=0&&(this.crashYaw=0)}else{const x=this.speed,y=this.spec.stats,v=this.turboT>0,T=this.vmax*(v?Sh:1)*this.limp();e.accel?this.speed+=30*y.accel*(v?1.9:1)*(1-Math.pow(Math.min(1,x/T),1.8))*t+2*t:e.brake?this.speed-=58*t:this.speed-=(3+x*.035)*t;const E=e.steer,w=E===0?9:7;this.steer+=Math.sign(E-this.steer)*Math.min(Math.abs(E-this.steer),w*t);let C=this.steer*Vh*y.grip*Math.min(1,x/22),b=o.curve*x*x*Wh/y.grip;this.drifting=e.drift&&x>30&&Math.abs(e.steer)>0,this.drifting?(C*=1.45,b*=.45,this.speed-=5*t,c=1):Math.abs(this.steer)>.8&&x>62&&Math.abs(o.curve)>.0014&&(c=.6);const S=this.drifting?this.steer*-.5:this.steer*-.12;this.driftYaw+=(S-this.driftYaw)*Math.min(1,t*6),this.px+=(C-b)*t;const D=a.walls||o.tunnel,W=D?Z+(o.tunnel,1):a.offroadLimit;Math.abs(this.px)>W&&(this.px=Math.sign(this.px)*W,D&&x>15&&(h=Math.sign(this.px),this.speed-=x*.9*t,this.shakeKick=.25,Math.random()<t*12&&this.audio.scrape(),!n&&this.state==="race"&&(this.hp-=3*t,this.scrapeDmg+=t,this.scrapeDmg>.6&&(this.scrapeDmg=0,this.world.car.hit(.12,h>0?"right":"left")),this.hp<=0&&this.wreck()))),l=Math.abs(this.px)>Z+1,l?(this.speed>32&&(this.speed-=40*t),this.bounce=Math.random()*.08*Math.min(1,x/30),this.shakeKick=Math.max(this.shakeKick,.12)):this.bounce=0,!n&&l&&x>12&&s.hitProp(this.pos,this.px)&&(this.damage(12+x*.12,.6+Math.min(.4,x/200),this.px>0?"right":"left"),this.crash(!0));const B=s.hitTraffic(this.pos,this.px);B&&(n?this.speed=Math.min(this.speed,B.v*.9):x-B.v>36?(this.damage(10+(x-B.v)*.14,.5+Math.min(.5,(x-B.v)/150),"front"),this.crash(!0)):(this.dmgCool<=0&&this.damage(5,.25,B.x>this.px?"right":"left"),this.speed=B.v*.75,this.px+=Math.sign(this.px-B.x||1)*1.2,this.shakeKick=.3,this.audio.crash(!1)));for(const V of s.rivals){if(Math.abs(V.d-this.pos)>4.3||Math.abs(V.x-this.px)>1.95)continue;const et=Math.sign(this.px-V.x||1);this.px+=et*.9,V.x-=et*.9,V.d>this.pos?x-V.v>45&&!n?(this.damage(9+(x-V.v)*.1,.5,"front"),this.crash(!0)):(this.speed=Math.min(this.speed,V.v*.92),!n&&this.dmgCool<=0&&this.damage(2.5,.15,"front")):(V.bumpT=.6,!n&&this.dmgCool<=0&&this.damage(2,.15,Math.abs(V.d-this.pos)<2?et>0?"left":"right":"rear")),this.shakeKick=Math.max(this.shakeKick,.25),n||this.audio.crash(!1)}}const u=this.vmax*(this.turboT>0?Sh:1);this.speed>u&&(this.speed=Math.max(u,this.speed-14*t)),this.speed=Math.max(0,this.speed),this.turboT>0&&(this.turboT=Math.max(0,this.turboT-t),this.flameT=Math.max(this.flameT,.08),this.shakeKick=Math.max(this.shakeKick,.1)),this.pos+=this.speed*t,this.wheelSpin-=this.speed*t/.37,(this.state==="attract"||this.state==="select")&&this.pos>r.goalDist-200&&this.resetPlayer(!0),s.updateTraffic(t,this.pos,()=>{this.state==="race"&&(this.score+=2e3)});let d=1;const f=this.vmax/Hh;for(;d<$s.length-1&&this.speed>$s[d]*f;)d++;const g=.25+.75*Math.min(1,(this.speed-$s[d-1]*f)/(($s[d]-$s[d-1])*f)),_=this.state!=="attract"&&this.state!=="select";this.audio.engine(_&&!this.wrecked,g,e.accel?1:0),this.audio.skid(_?c*Math.min(1,this.speed/20):0),d>this.gear&&e.accel&&this.speed>20&&(this.flameT=.12,_&&this.audio.pop()),this.wasAccel&&!e.accel&&this.speed>55&&this.crashT<=0&&(this.flameT=.2,_&&this.audio.pop()),this.gear=d,this.wasAccel=e.accel,this.flameT=Math.max(0,this.flameT-t);const m=s.particles,p=Math.random()<t*45?1:0;if(p&&c>0&&this.speed>12){const x=a.smoke;for(const y of[-.9,.9])m.spawn(this.pos-1.4,this.px+y,.35,this.speed*.6,y,.8,.8,.45,2.6,x)}if(p&&l&&this.speed>15){const y=o.zone.startsWith("beach")&&this.px>0?15916192:o.zone==="hills"?13152378:14207128;for(const v of[-.9,.9])m.spawn(this.pos-1.5,this.px+v,.3,this.speed*.5,v*2,1.8,.6,.4,2.2,y)}if(this.dmgCool=Math.max(0,this.dmgCool-t),this.engineSmoke(t),h&&Math.random()<t*60)for(let x=0;x<2;x++)m.spawn(this.pos+Math.random()*2-1,this.px+h*.9,.5,this.speed*.8,-h*(2+Math.random()*3),3+Math.random()*3,.35,.13,-1,Math.random()<.5?16769088:16747040);m.update(t),this.updateWorld(t,{steer:this.steer,yaw:this.driftYaw+this.crashYaw,spin:this.wheelSpin,bounce:this.bounce,brake:e.brake&&this.speed>1||this.crashT>0,flame:this.flameT})}limp(){return this.hp>=35?1:.86+.14*(this.hp/35)}damage(t,e,n){this.state!=="race"||this.wrecked||(this.hp=Math.max(0,this.hp-t),this.dmgCool=.5,this.world.car.hit(e,n),this.afterDamage(t))}afterDamage(t){const e=this.hp+t;e>=55&&this.hp<55&&this.world.car.breakLamp(Math.random()<.5?-1:1),this.hp<=0?this.wreck():this.hp<25&&e>=25&&this.flash("WARNING!","HEAVY DAMAGE",2)}takeGunHit(t,e){if(this.state!=="race"||this.wrecked)return;const n=this.gunFrom.get(t)??0;let s=Math.min(e*Eh,Lg-n);if(t.startsWith("ai:")){let a=0;for(const[o,c]of this.gunFrom)o.startsWith("ai:")&&(a+=c);s=Math.min(s,Ng-a)}if(s<=0)return;this.gunFrom.set(t,n+s),this.hp=Math.max(0,this.hp-s);const r=["left","right","rear"];this.world.car.hit(.1,r[Math.floor(Math.random()*3)]),this.hitFlash=.25,this.shakeKick=Math.max(this.shakeKick,.15),this.audio.ping(),this.afterDamage(s)}hitRival(t){const e=this.world.rivals[t];if(e.remote){this.pendingHits.set(e.remote.id,(this.pendingHits.get(e.remote.id)??0)+1);return}if(e.wrecked)return;const n=Eh*Dg,s=e.hp;e.hp=Math.max(0,e.hp-n),e.gunTaken+=n,e.bumpT=Math.max(e.bumpT,.25+(1-e.hp/100)*.35),this.world.rivalHit(t,.16),s>=55&&e.hp<55&&this.world.rivalBreakLamp(t),e.hp<=0&&(e.wrecked=!0,e.gunT=0,e.burst=0,this.score+=5e4,this.flash(`${e.name} WRECKED!`,"+50000",2),this.audio.crash(!0),this.audio.pop())}guns(t){const e=this.world,n=e.rivals,s=this.input;this.hitFlash=Math.max(0,this.hitFlash-t),this.firingT=Math.max(0,this.firingT-t),this.noTargetT=Math.max(0,this.noTargetT-t),this.fireCool=Math.max(0,this.fireCool-t),e.playerGun.flash=!1;let r=null,a=1/0;this.weapons&&!this.wrecked&&n.forEach((c,l)=>{const h=c.d-this.pos,u=c.x-this.px;if(c.wrecked||!wh(h,u))return;const d=Math.hypot(h,u);d<a&&(a=d,r=l)}),this.gunTarget=r,this.gunP=r!==null?yo(a):0;const o=this.weapons&&this.state==="race"&&!this.wrecked&&this.crashT<=0&&s.held("KeyF");if(o&&(r===null||this.ammo<=0)&&(this.noTargetT=.3),o&&r!==null&&this.ammo>0&&(this.firingT=.35,this.lastGunTarget=r,this.fireCool<=0)){this.fireCool=1/vo,this.ammo--;const c=n[r],l=Math.random()<this.gunP;e.shoot(this.pos,this.px,c.d,c.x,l),e.playerGun.flash=!0,this.audio.gun(),l&&this.hitRival(r)}e.playerGun.target=this.firingT>0?this.lastGunTarget:null,n.forEach(c=>{if(c.gunT=Math.max(0,c.gunT-t),c.remote){if(c.gunT<=0||(c.fireCool-=t,c.fireCool>0))return;c.fireCool=1/vo;const d=c.gunTo===-1?{d:this.pos,x:this.px}:n[c.gunTo];if(!d)return;e.shoot(c.d,c.x,d.d,d.x,Math.random()<yo(Math.hypot(d.d-c.d,d.x-c.x))),this.audio.gun(.4);return}if(!this.weapons||this.state!=="race"||this.wrecked||c.wrecked||c.ammo<=0||c.finished>=0)return;const l=this.pos-c.d,h=this.px-c.x;if(!wh(l,h)){c.burst=0;return}if(c.burst<=0){Math.random()<t*(.06+c.aggro*.14)&&(c.burst=3+Math.floor(Math.random()*4));return}if(c.gunT=.35,c.gunTo=-1,c.fireCool-=t,c.fireCool>0)return;c.fireCool=1/vo,c.burst--,c.ammo--;const u=Math.random()<yo(Math.hypot(l,h));e.shoot(c.d,c.x,this.pos,this.px,u),this.audio.gun(.5),u&&this.takeGunHit(`ai:${c.name}`,1)}),e.tickTracers(t)}wreck(){this.wrecked||(this.hp=0,this.wrecked=!0,this.turboT=0,this.audio.crash(!0),this.audio.pop(),this.mode!=="arcade"&&(this.table=Xr(this.world.rivals,this.world.track,"YOU",this.spec.name,1/0,this.raceTime)),this.go("over"),this.audio.sad(),this.audio.music(null),this.saveScore())}engineSmoke(t){if(["race","over","goal"].includes(this.state)){const e={t:this.smokeT};this.smokeFrom(e,t,this.spec,this.pos,this.px,this.speed,this.hp,this.wrecked,this.t),this.smokeT=e.t}for(const e of this.world.rivals){e.remote&&e.wrecked&&(e.wreckT+=t);const n={t:e.smokeT};this.smokeFrom(n,t,e.spec,e.d,e.x,e.v,e.hp,e.wrecked,e.wreckT),e.smokeT=n.t}}smokeFrom(t,e,n,s,r,a,o,c,l){if(o>=50||(t.t+=e*(c?30:o<25?14:5),t.t<1))return;t.t-=1;const h=n.stations,u=["r32","supra","rx7"].includes(n.id),d=u?h[0].z+.9:h[h.length-1].z-.9,f=u?h[1].top:h[h.length-2].top,g=s-d,_=r+(Math.random()-.5)*.6,m=c?Math.random()<.5?2236962:3815994:o<25?6974058:12105912,p=this.world.particles;p.spawn(g,_,f+.1,a*.85,(Math.random()-.5)*.8,1.2+Math.random(),1.6+Math.random(),.45,3,m),c&&l<6&&Math.random()<.5&&p.spawn(g,_,f+.05,a*.9,(Math.random()-.5)*.4,1.5,.35,.3,.5,Math.random()<.5?16747040:16764992)}crash(t){if(!(this.crashT>0)){this.crashT=t?1.6:.8,this.speed*=.35,this.shakeKick=.6,this.audio.crash(t);for(let e=0;e<14;e++)this.world.particles.spawn(this.pos+Math.random()*3-1.5,this.px+Math.random()*3-1.5,.4+Math.random(),this.speed*.5,Math.random()*4-2,1+Math.random()*2,1.1,.7,2.5,e%3?14211288:9079434)}}updateWorld(t,e){const n=this.speed/Hh,s=this.camera,r=54+14*Math.min(1.3,n)*Math.min(1.3,n)+(this.turboT>0?6:0);Math.abs(s.fov-r)>.01&&(s.fov=Math.abs(r-s.fov)>8?r:s.fov+(r-s.fov)*Math.min(1,t*5),s.updateProjectionMatrix()),this.shakeKick=Math.max(0,this.shakeKick-t*1.5);const a=Math.max(0,n-.7)*.12+this.shakeKick*.5;this.world.update(this.pos,this.px,s,a,e)}draw(){const t=this.hud;if(t.clear(),ie.modern&&this.state!=="carselect"){const s=this.world.sunOnHud(this.camera,_t,Fe);if(s){const r=Math.max(Math.abs(s.x/_t-.5),Math.abs(s.y/Fe-.5))*2;t.flare(s.x,s.y,Math.max(0,Math.min(1,1.25-r)))}}const e=Math.floor(this.clock*2.5)%2===0,n=this.world.route;switch(this.state){case"attract":{t.logo("TURBO",_t/2,70,64,Vt,en,11540504),t.logo("HORIZON",_t/2,150,56,8452351,2789631,1714832),t.text("'86",_t/2+230,210,24,rs,"left"),t.text("ARCADE  ROAD  RACING",_t/2,236,16,qt,"center"),e&&t.text(this.touch?"TAP TO START":"PRESS ENTER",_t/2,320,24,Vt,"center"),t.text(`HI-SCORE ${String(this.hi).padStart(8,"0")}`,_t/2,20,16,on,"center"),t.text("FREE PLAY",_t-20,Fe-30,16,qt,"right"),t.text("©1986 HORIZON SOFT",20,Fe-30,16,qt,"left");break}case"select":{t.text("SELECT  YOUR  ROUTE",_t/2,44,24,Vt,"center"),this.routes.forEach((r,a)=>{const o=ta+a%3*na,c=ea+Math.floor(a/3)*ia,l=na-12,h=ia-12,u=a===this.routeIdx;t.box(o,c,l,h,r.card[0],u?e?Vt:qt:3816026,u?6:3),t.text(r.lines[0],o+l/2,c+18,16,r.card[1],"center"),t.text(r.lines[1],o+l/2,c+44,16,r.card[1],"center")}),t.text(this.touch?"TAP A ROUTE, TAP AGAIN TO GO":"< >  ROUTE   ^ v  MODE   ENTER  NEXT",_t/2,290,16,qt,"center"),[["arcade","ARCADE","BEAT THE CLOCK"],["rivals","VS RIVALS","8-CAR RACE"],["online","ONLINE","RACE REAL PLAYERS"]].forEach(([r,a,o],c)=>{const h=_t/2-375+c*250+7,u=r===this.mode;t.box(h,324,236,54,u?2759248:1315880,u?e?rs:qt:3816026,u?5:3),t.text(a,h+236/2,334,16,u?Vt:9079464,"center"),t.text(o,h+236/2,356,8,u?qt:9079464,"center")}),t.text(`${Math.max(0,Math.ceil(20-this.t))}`,_t-30,20,24,en,"right");break}case"carselect":{const s=this.spec;t.text("SELECT  YOUR  CAR",_t/2,20,24,Vt,"center"),t.text(`${Math.max(0,Math.ceil(25-this.t))}`,_t-30,20,24,en,"right"),t.text(s.make,_t/2,64,16,on,"center"),t.text(s.name,_t/2,88,32,qt,"center"),t.text(`${s.year}  ${s.group}`,_t/2,130,16,rs,"center"),t.text(this.settingsLine(this.mode==="rivals"),_t/2,160,16,Vt,"center"),t.text("<",40,210,48,e?Vt:qt,"center"),t.text(">",_t-40,210,48,e?Vt:qt,"center"),[["SPEED",(s.stats.vmax-260)/90],["ACCEL",(s.stats.accel-.85)/.3],["GRIP",(s.stats.grip-.82)/.38]].forEach(([a,o],c)=>{const l=330+c*22;t.text(a,40,l,16,Vt);for(let h=0;h<12;h++)t.rect(150+h*14,l,11,16,h<Math.round(Math.max(.1,Math.min(1,o))*12)?c===0?Pe:c===1?en:4251712:2105408)}),t.text(`${s.stats.vmax} KM/H`,340,330,16,qt),t.text(`CAR ${this.carIdx+1}/${He.length}`,_t-30,330,16,qt,"right"),t.text(this.touch?"TAP CAR: COLOUR":"^ v  COLOUR",_t-30,356,16,on,"right"),t.text(`${this.touch?"TAP":"N"}  MUSIC: ${this.musicLabel()}`,_t-30,382,16,rs,"right"),t.box(_t/2-150,410,300,50,1727160,e?Vt:qt),t.text(this.touch?"TAP TO RACE":"ENTER  RACE",_t/2,427,16,qt,"center");break}case"name":{t.text("ONLINE  RACE",_t/2,20,24,Vt,"center");break}case"lobby":{this.lobbyHud(e);break}default:{if(this.raceHud(e),this.mode==="online"&&this.nameTags(),this.state==="countdown"){const s=3-Math.floor(this.t);s>0&&t.text(String(s),_t/2,180,64,s===1?Pe:Vt,"center"),t.text(n.stageNames[0],_t/2,280,16,qt,"center")}this.table.length&&(this.state==="goal"?this.t>2.5:this.t>2.5)?this.resultsTable(e):this.state==="goal"&&this.mode!=="arcade"?(t.text(this.place===1?"YOU WIN!":`${qr(this.place)} PLACE`,_t/2,150,64,this.place===1?Vt:on,"center"),t.text(Rh(this.finishTime),_t/2,240,24,qt,"center")):this.state==="goal"&&(t.text("GOAL!",_t/2,140,64,Vt,"center"),t.text("CONGRATULATIONS",_t/2,230,24,on,"center"),t.text(`TIME BONUS  ${Math.ceil(this.bonusLeft*1e4)}`,_t/2,280,16,qt,"center"),this.t>3&&this.bonusLeft<=0&&e&&t.text(this.touch?"TAP TO CONTINUE":"PRESS ENTER",_t/2,330,24,Vt,"center")),this.state==="over"&&!(this.table.length&&this.t>2.5)&&(this.t<2.5?(t.text(this.wrecked?"WRECKED":"TIME UP",_t/2,180,48,Pe,"center"),this.wrecked&&t.text("ENGINE BLOWN",_t/2,240,24,en,"center")):(t.text("GAME OVER",_t/2,170,48,Pe,"center"),t.text(`SCORE ${this.score}`,_t/2,250,24,qt,"center"),e&&t.text(this.touch?"TAP TO CONTINUE":"PRESS ENTER",_t/2,310,24,Vt,"center"))),this.clock<this.musicToast&&this.state!=="goal"&&this.state!=="over"&&(t.box(_t/2-200,146,400,34,1052720,rs,3),t.text(`MUSIC  ${this.musicLabel()}`,_t/2,156,16,qt,"center")),this.clock<this.msgUntil&&(this.msg==="GO!"||e)&&(t.text(this.msg,_t/2,150,this.msg==="GO!"?64:32,this.msg==="GO!"?Vt:on,"center"),this.msg2&&t.text(this.msg2,_t/2,200,24,Vt,"center")),this.paused&&(t.box(_t/2-220,150,440,170,1052720,qt),t.text("PAUSE",_t/2,180,32,Vt,"center"),t.text(this.touch?"RESUME":"ESC  RESUME",_t/2,230,16,qt,"center"),t.text(this.touch?"RESTART":"R  RESTART",_t/2,260,16,qt,"center"),t.text(this.touch?"QUIT":"Q  QUIT",_t/2,290,16,qt,"center"))}}}lobbyHud(t){const e=this.hud,n=this.net,s=this.spec;e.text("ONLINE  LOBBY",_t/2,14,24,Vt,"center"),e.text(this.touch?"< EXIT":"ESC EXIT",20,18,16,9079464);const r=(n==null?void 0:n.list())??[],a=!n||n.status==="connecting"?"CONNECTING...":n.status==="error"?"COULDN'T CONNECT":r.length?`${r.length+1} PLAYERS HERE`:"WAITING FOR PLAYERS...";e.text(a,_t/2,46,16,(n==null?void 0:n.status)==="error"?Pe:on,"center"),e.shade(28,68,350,316),e.text(s.make,40,76,16,on),e.text(s.name,40,98,24,qt),e.text(this.touch?"TAP NAME: CAR   TAP CAR: COLOUR":"< > CAR   ^ v COLOUR",40,130,8,9079464),e.text(`${this.touch?"TAP ":"T  "}TURBOS ${this.turboCount}`,40,148,16,Vt),e.text(`${this.touch?"TAP ":"V  "}WEAPONS ${this.weaponsSetting?"ON":"OFF"}`,40,174,16,this.weaponsSetting?en:9079464),e.text(`${this.touch?"TAP ":"B  "}AMMO ${this.ammoCount}`,40,200,16,this.weaponsSetting?Vt:9079464),e.text("YOUR SETTINGS APPLY IF YOU PRESS START",40,224,8,9079464),[["SPEED",(s.stats.vmax-260)/90,Pe],["ACCEL",(s.stats.accel-.85)/.3,en],["GRIP",(s.stats.grip-.82)/.38,4251712]].forEach(([g,_,m],p)=>{const x=244+p*16;e.text(g,40,x+1,8,Vt);const y=Math.round(Math.max(.1,Math.min(1,_))*12);for(let v=0;v<12;v++)e.rect(96+v*11,x,9,10,v<y?m:2105408)}),e.text(`${s.stats.vmax} KM/H`,236,245,8,qt),e.text("CONTROLS",40,300,8,Vt),(this.touch?["< > STEER   GAS  BRAKE  DRIFT","TURBO BUTTON   FIRE BUTTON (WEAPONS)","AUTO GAS HOLDS THE THROTTLE","II PAUSE   MUSIC CHANGES THE SONG"]:["UP GAS   DOWN BRAKE   < > STEER","SPACE DRIFT   T OR SHIFT TURBO","F FIRE (WEAPONS ON)   N MUSIC","ESC PAUSE   M MUTE"]).forEach((g,_)=>e.text(g,40,316+_*14,8,qt));const l=_t-320,h=70;e.box(l,h,300,40+Math.min(8,r.length+1)*34+(r.length>7?16:0),1052720,3816026,3),e.text("PLAYERS",l+14,h+12,16,Vt);const u=[{name:this.playerName||"PLAYER",car:s.name,st:"YOU",me:!0},...r.map(g=>({name:g.name,car:He[g.car%He.length].name,st:g.status==="race"?"RACING":"READY",me:!1}))];u.slice(0,8).forEach((g,_)=>{const m=h+40+_*34;e.text(g.name,l+14,m,16,g.me?Vt:qt),e.text(g.st,l+286,m+4,8,g.st==="RACING"?en:g.me?Vt:4251712,"right"),e.text(g.car,l+14,m+19,8,9079464)}),u.length>8&&e.text(`+${u.length-8} MORE`,l+14,h+40+8*34,8,qt);const d=this.world.route;if(e.box(20,410,250,50,1315880,qt,3),e.text(`${this.touch?"TAP":"R"}  ROUTE`,145,418,8,9079464,"center"),e.text(`${d.lines[0]} ${d.lines[1]}`.slice(0,15),145,434,16,Vt,"center"),(n==null?void 0:n.status)==="error"){e.text("CHECK YOUR CONNECTION, OR PLAY ONLINE AT",_t/2,320,8,qt,"center"),e.text("FREDDYWONG.GITHUB.IO/TURBO-HORIZON-86",_t/2,340,16,on,"center"),e.box(_t/2-150,410,300,50,1727160,t?Vt:qt),e.text(this.touch?"TAP TO RETRY":"ENTER  RETRY",_t/2,427,16,qt,"center");return}if(this.pending){const g=Math.max(1,Math.ceil(this.pending.at-Ni()));e.text("STARTING IN",_t/2,170,24,on,"center"),e.text(String(g),_t/2,206,64,Vt,"center");const _=this.routes[this.pending.go.route]??this.world.route;e.text(`${_.lines[0]} ${_.lines[1]}`,_t/2,284,16,qt,"center");const m=this.pending.go;e.text(`TURBOS ${m.turbos}   WEAPONS ${m.weapons?`ON  AMMO ${m.ammo}`:"OFF"}`,_t/2,308,16,m.weapons?en:Vt,"center");return}r.some(g=>g.status==="race")?e.text("RACE IN PROGRESS - JOIN THE NEXT ONE",_t/2,386,8,en,"center"):r.length||e.text("SHARE THIS PAGE LINK TO INVITE PLAYERS",_t/2,386,8,qt,"center");const f=(n==null?void 0:n.status)==="online";e.box(_t/2-150,410,300,50,f?1739322:2105392,f&&t?Vt:qt),e.text(this.touch?"TAP TO START":"ENTER  START",_t/2,427,16,f?qt:9079464,"center")}nameTags(){const t=this.hud;this.world.rivals.forEach((e,n)=>{const s=this.world.rivalScreenPos(n,this.camera,_t,Fe);if(!s||s.dist>140)return;const r=Math.max(0,Math.min(1,(75-s.dist)/60)),a=Math.round(5+11*r);t.text(e.wrecked?`${e.name} WRECKED`:e.name,s.x,s.y-a,a,e.wrecked?Pe:e.finished>=0?Vt:qt,"center");const o=Math.round(14+50*r),c=Math.round(2+4*r),l=Math.min(1,1-e.hp/100),h=s.x-o/2,u=s.y+1+Math.round(3*r);t.rect(h-1,u-1,o+2,c+2,0),t.rect(h,u,o*l,c,To(l))})}resultsTable(t){const e=this.hud,n=_t/2-330,s=660,r=96;e.box(n,r,s,330,1052720,this.place===1&&this.finishTime>=0?Vt:qt,4);const a=this.finishTime<0?`${this.wrecked?"WRECKED":"TIME UP"}  -  DID NOT FINISH`:this.place===1?"YOU WIN!":`YOU FINISHED ${qr(this.place)}`;e.text(a,_t/2,r+16,16,this.finishTime<0?Pe:Vt,"center"),this.table.forEach((o,c)=>{const l=r+52+c*30;o.player&&e.rect(n+10,l-6,s-20,28,3811952);const h=o.player?Vt:qt;e.text(qr(o.pos),n+24,l,16,o.pos===1?en:h),e.text(o.name,n+110,l,16,h),e.text(o.car,n+230,l,16,o.player?Vt:on);const u=Number.isFinite(o.time)?(o.estimated?"~":" ")+Rh(o.time):"DNF";e.text(u,n+s-24,l,16,h,"right")}),t&&this.t>3.5&&e.text(this.touch?"TAP TO CONTINUE":"PRESS ENTER",_t/2,r+340,16,Vt,"center")}raceHud(t){const e=this.hud,n=this.world.route;e.text("SCORE",20,16,16,Vt),e.text(String(this.score).padStart(8,"0"),20,38,16,qt),e.text("TIME",_t/2,12,16,Vt,"center");const s=Math.ceil(this.timeLeft),r=this.timeLeft<10&&this.state==="race";(!r||t)&&e.text(String(s).padStart(2,"0"),_t/2,34,48,r?Pe:en,"center"),e.text(`STAGE ${Math.min(this.stage+1,n.stageNames.length)}`,_t-20,16,16,Vt,"right");const a=Math.max(0,(this.pos-3*jt)/1e3);if(e.text(`${a.toFixed(1)}KM`,_t-20,38,16,qt,"right"),this.mode!=="arcade"&&this.world.rivals.length&&this.state==="race"){const T=qr(this.place),E=this.touch?84:_t/2-52,w=this.touch?222:90;e.text("POS",E-12,w+8,16,Vt,"right"),e.text(T,E,w,32,this.place===1?Vt:qt),e.text(`/${this.world.rivals.length+1}`,E+T.length*32+4,w+16,16,qt)}{const w=this.touch?20:_t-20-170,C=this.touch?this.mode!=="arcade"?270:236:64,b=Math.min(1,1-this.hp/100),S=To(b),D=this.hp<25&&this.state==="race";e.text("DAMAGE",w,C,16,D&&t?Pe:Vt);const W=this.hp>=100?0:Math.max(1,Math.ceil(b*10));for(let B=0;B<10;B++)e.rect(w+B*17,C+22,15,12,B<W&&(!D||t)?S:2105408)}const o=Math.round(this.speed*wo),c=this.touch,l=c?70:Fe-92;e.text("SPEED",20,l,16,Vt),e.text(String(o).padStart(3," "),20,l+26,32,qt),e.text("KM/H",130,l+42,16,on),c?e.tach(20,l+100,this.speed/this.vmax):e.tach(220,Fe-24,this.speed/this.vmax);const h=c?20:220,u=c?l+112:Fe-80;e.text("TURBO",h,u,16,this.turboT>0&&t?qt:en);const d=this.raceTurbos,f=d>5?13:20,g=f+(d>5?4:6);for(let T=0;T<d;T++)e.box(h+92+T*g,u-2+(20-f)/2,f,f,T<this.turbos?en:2105392,T<this.turbos?Vt:4210776,d>5?2:3);if(this.turboT>0&&e.rect(h+92,u+22,this.turboT/Tc*(d*g-6),5,Vt),this.weapons){const T=c?20:_t-190,E=c?314:106;e.text("AMMO",T,E,16,this.ammo?on:Pe),e.text(String(this.ammo).padStart(3,"0"),T+120,E,16,qt);const w=Math.ceil(this.ammo/Math.max(1,this.raceAmmo)*30);for(let C=0;C<30;C++)e.rect(T+C*5.6,E+22,3,10,C<w?Vt:3158080);if(this.gunTarget!==null&&this.state==="race"){const C=this.world.rivalScreenPos(this.gunTarget,this.camera,_t,Fe);if(C){const b=this.gunP>.6?Pe:Vt,S=Math.max(10,Math.min(34,700/C.dist)),D=C.y+S*1.1;for(const[B,V]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.rect(C.x+B*S-(B>0?10:0),D+V*S-(V>0?3:0),10,3,b),e.rect(C.x+B*S-(B>0?3:0),D+V*S-(V>0?10:0),3,10,b);const W=this.world.rivals[this.gunTarget];if(!W.remote){const V=C.x-22,et=D+S+6,U=Math.min(1,1-W.hp/100);e.rect(V-1,et-1,46,7,0),e.rect(V,et,44*U,5,To(U))}}}this.noTargetT>0&&e.text(this.ammo?"NO TARGET":"OUT OF AMMO",_t/2,124,16,this.ammo?qt:Pe,"center"),this.hitFlash>0&&(e.rect(0,0,_t,6,Pe),e.rect(0,Fe-6,_t,6,Pe),e.rect(0,0,6,Fe,Pe),e.rect(_t-6,0,6,Fe,Pe))}const _=c?_t/2-120:_t-250,m=c?_t/2+120:_t-24,p=c?118:Fe-34;e.text("COURSE",_,p-26,16,Vt),e.rect(_,p,m-_,8,2105408);const x=this.world.track.goalDist,y=this.world.track.stageStarts;for(const T of y)e.rect(_+T*jt/x*(m-_)-1,p-4,4,16,qt);const v=Math.min(1,this.pos/x);e.rect(_,p,v*(m-_),8,rs),e.rect(_+v*(m-_)-4,p-6,8,20,Vt),e.text(n.stageNames[Math.min(this.stage,n.stageNames.length-1)],m,p+14,8,qt,"right")}}class G2{constructor(){this.down=new Set,this.pressed=new Set,this.taps=[],this.firstInput=[],this.autoGas=!1,window.addEventListener("keydown",t=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault(),this.down.has(t.code)||this.pressed.add(t.code),this.down.add(t.code),this.fireFirst()}),window.addEventListener("keyup",t=>this.down.delete(t.code)),window.addEventListener("blur",()=>this.down.clear())}onFirstInput(t){this.firstInput.push(t)}fireFirst(){const t=this.firstInput;this.firstInput=[],t.forEach(e=>e())}setVirtual(t,e){e?(this.down.has(t)||this.pressed.add(t),this.down.add(t)):this.down.delete(t)}tap(t,e){this.taps.push({x:t,y:e}),this.fireFirst()}held(...t){return t.some(e=>this.down.has(e))}hit(...t){return t.some(e=>this.pressed.has(e))}endFrame(){this.pressed.clear(),this.taps.length=0}get accel(){return this.held("KeyW","ArrowUp")||this.autoGas&&!this.brake}get brake(){return this.held("KeyS","ArrowDown")}get steer(){return(this.held("KeyD","ArrowRight")?1:0)-(this.held("KeyA","ArrowLeft")?1:0)}get drift(){return this.held("Space")}get confirm(){return this.hit("Enter","Space","NumpadEnter")}}class H2{constructor(t){this.done=null;const e=document.createElement("div");e.style.cssText='position:absolute;inset:0;display:none;align-items:center;justify-content:center;z-index:5;font-family:"Press Start 2P",monospace;';const n=document.createElement("form");n.style.cssText="display:flex;flex-direction:column;align-items:center;gap:2.4vmin;padding:4vmin 5vmin;background:rgba(16,16,48,0.92);border:0.7vmin solid #ffe040;box-shadow:0.8vmin 0.8vmin 0 #000;max-width:90%;";const s=document.createElement("div");s.textContent="ENTER YOUR NAME",s.style.cssText="color:#ffe040;font-size:3.6vmin;text-shadow:0.4vmin 0.4vmin 0 #000;";const r=document.createElement("input");r.maxLength=10,r.autocomplete="off",r.spellcheck=!1,r.setAttribute("autocapitalize","characters"),r.setAttribute("enterkeyhint","go"),r.style.cssText="font-family:inherit;font-size:4.4vmin;width:12ch;text-align:center;text-transform:uppercase;color:#fff;background:#0a0a20;border:0.5vmin solid #40f0ff;padding:1.4vmin;outline:none;";const a=document.createElement("button");a.type="submit",a.textContent="JOIN",a.style.cssText="font-family:inherit;font-size:3.6vmin;color:#fff;background:#1a5ab8;border:0.6vmin solid #fff;padding:1.6vmin 4vmin;box-shadow:0.6vmin 0.6vmin 0 #000;cursor:pointer;";const o=document.createElement("div");o.textContent="LETTERS, NUMBERS, SPACE OR -",o.style.cssText="color:#8a8aa8;font-size:1.8vmin;",n.append(s,r,a,o),e.append(n),t.append(e);for(const c of["keydown","keyup","mousedown","pointerdown","touchstart"])e.addEventListener(c,l=>l.stopPropagation());r.addEventListener("input",()=>{const c=r.value.toUpperCase().replace(/[^A-Z0-9 -]/g,"");c!==r.value&&(r.value=c)}),n.addEventListener("submit",c=>{var h;c.preventDefault();const l=Ac(r.value);if(!l){r.focus();return}this.hide(),(h=this.done)==null||h.call(this,l)}),this.root=e,this.input=r}get open(){return this.root.style.display!=="none"}show(t,e){this.done=e,this.input.value=t,this.root.style.display="flex",setTimeout(()=>{this.input.focus(),this.input.select()},50)}hide(){this.root.style.display="none",this.input.blur()}}class Rs{constructor(){this.group=new gn,this.layers=[],this.sun=null,this.tmp=new $}sunNdc(t){if(!this.sun)return null;this.sun.obj.updateMatrixWorld();const e=this.tmp.copy(this.sun.local);return this.sun.obj.localToWorld(e),e.project(t),e.z<1?e:null}addLayer(t,e){this.group.add(t),this.layers.push({obj:t,factor:e})}update(t,e){this.group.position.copy(t);for(const n of this.layers)n.obj.rotation.y=e*n.factor}}const hn=(i={})=>new Ze({vertexColors:!0,fog:!1,side:fe,...i}),Yh=(i,t)=>{const e=n=>Math.min(255,Math.round((i>>n&255)*t));return e(16)<<16|e(8)<<8|e(0)},V2=i=>{const t=e=>Math.round(Math.round(e/255*31)*8.225806451612904);return t(i>>16&255)<<16|t(i>>8&255)<<8|t(i&255)},W2=(i,t,e)=>{const n=s=>Math.round((i>>s&255)+((t>>s&255)-(i>>s&255))*e);return n(16)<<16|n(8)<<8|n(0)};function Cs(i,t,e=.45){const s=document.createElement("canvas");s.width=2,s.height=2048;const r=s.getContext("2d"),a=f=>"#"+f.toString(16).padStart(6,"0");r.fillStyle=a(t),r.fillRect(0,0,2,2048);const o=f=>{if(f<=i[0][0])return i[0][1];for(let g=1;g<i.length;g++)if(f<=i[g][0])return W2(i[g-1][1],i[g][1],(f-i[g-1][0])/(i[g][0]-i[g-1][0]));return i[i.length-1][1]},c=ie.modern,l=c?.09:e;for(let f=0;f<90;f+=l*(f<20||c?1:3)){const _=2048*(90-Math.min(90,f+l*(f<20||c?1:3)))/180,m=2048*(90-f)/180;r.fillStyle=a(c?o(f):V2(o(f))),r.fillRect(0,Math.floor(_),2,Math.ceil(m-_)+1)}const h=new lr(s);h.magFilter=c?ln:We,h.minFilter=c?ln:We,h.generateMipmaps=!1,h.colorSpace=Oe;const u=new Zc(2800,24,90),d=new ue(u,new Ze({map:h,fog:!1,side:je,depthWrite:!1}));return d.renderOrder=-10,d}const Xt=(i,t,e,n)=>[Math.sin(t)*i+Math.cos(t)*e,n,-Math.cos(t)*i+Math.sin(t)*e];function Dn(i,t,e,n,s,r,a=40,o=[6,18]){const c=new ut,l=240,h=new Float32Array(l+1);for(let u=0;u<a;u++){const d=i.next()*l,f=i.range(.3,1)*n,g=i.range(o[0],o[1]);for(let _=0;_<=l;_++){let m=Math.abs(_-d);m=Math.min(m,l-m),h[_]=Math.max(h[_],f*Math.max(0,1-m/g))}}for(let u=0;u<l;u++){const d=u/l*Math.PI*2,f=(u+1)/l*Math.PI*2,g=h[u]*s(d),_=h[u+1]*s(f);if(!(g<1&&_<1)){if(ie.modern){const m=x=>Yh(e,.86+.26*Math.min(1,x/n)),p=Yh(e,.78);c.quadC(Xt(t,d,0,-60),Xt(t,f,0,-60),Xt(t,f,0,_),Xt(t,d,0,g),[p,p,m(_),m(g)])}else c.quad(Xt(t,d,0,-60),Xt(t,f,0,-60),Xt(t,f,0,_),Xt(t,d,0,g),e);if(r!==void 0){const m=n*.72;g>m&&_>m&&c.quad(Xt(t-1,d,0,g-(g-m)*.6),Xt(t-1,f,0,_-(_-m)*.6),Xt(t-1,f,0,_),Xt(t-1,d,0,g),r)}}}return new ue(c.build(),hn())}function q2(i,t,e,n,s,r=22){const a=new ut,o=360,c=new Float32Array(o+1);for(let l=0;l<r;l++){const h=i.next()*o,u=i.range(.35,1)*n,d=i.range(2,9),f=i.range(1.2,2.6);for(let g=0;g<=o;g++){let _=Math.abs(g-h);_=Math.min(_,o-_);const m=_<d?u:u*Math.max(0,1-(_-d)/f);c[g]=Math.max(c[g],m)}}for(let l=0;l<o;l++){const h=l/o*Math.PI*2,u=(l+1)/o*Math.PI*2,d=c[l]*s(h),f=c[l+1]*s(u);if(d<1&&f<1)continue;const g=e.length;let _=-60,m=-60;for(let p=0;p<g;p++){const x=(p+1)/g,y=p===g-1?d:d*x,v=p===g-1?f:f*x;a.quad(Xt(t,h,0,_),Xt(t,u,0,m),Xt(t,u,0,v),Xt(t,h,0,y),e[p]),_=y,m=v}}return new ue(a.build(),hn())}function Ps(i,t,e=500){const n=new Yc(i,i,e,32,1,!0);return n.translate(0,-e/2+.5,0),new ue(n,new Ze({color:t,fog:!1,side:fe}))}function Oa(i,t,e){const n=Math.tan(e*Math.PI/180)*i,[s,r,a]=Xt(i,t,0,n);return new $(s,r,a)}function Is(i,t,e,n,s,r=20){const a=new ut,o=Math.tan(e*Math.PI/180)*i;if(ie.modern){const c=Math.max(r,40),l=[...s].sort((u,d)=>d[0]-u[0]),h=(u,d)=>Xt(i,t,Math.cos(d)*n*u,o+Math.sin(d)*n*u);for(let u=0;u<l.length;u++){const[d,f]=l[u],[g,_]=u+1<l.length?l[u+1]:[0,l[u][1]];for(let m=0;m<c;m++){const p=m/c*Math.PI*2,x=(m+1)/c*Math.PI*2;a.quadC(h(d,p),h(d,x),h(g,x),h(g,p),[f,f,_,_])}}return new ue(a.build(),hn())}for(const[c,l]of s){const h=[];for(let u=0;u<r;u++){const d=u/r*Math.PI*2;h.push(Xt(i,t,Math.cos(d)*n*c,o+Math.sin(d)*n*c))}a.poly(h,l),i-=2}return new ue(a.build(),hn())}function Bi(i,t,e,n,s=-Math.PI,r=Math.PI,a=[4,13]){const o=new ut,[c,l,h]=n,u=(d,f,g,_,m,p,x,y=0,v=Math.PI*2)=>{const T=[],E=ie.modern?24:12;for(let w=0;w<=E;w++){const C=y+(v-y)*w/E;T.push(Xt(d,f,g+Math.cos(C)*m,_+Math.sin(C)*p))}o.poly(T,x)};for(let d=0;d<e;d++){const f=i.range(s,r),g=i.range(a[0],a[1]),_=Math.tan(g*Math.PI/180)*t,m=i.range(140,340),p=i.int(4,8),x=t-d*6;u(x,f,0,_,m*.9,16,h,Math.PI,Math.PI*2);for(let y=0;y<p;y++){const v=i.range(-m,m)*.65,T=i.range(0,34)*(1-Math.abs(v)/m),E=i.range(45,100),w=E*i.range(.5,.7),C=x-1-y*.3;u(C,f,v,_+T,E,w,l,0,Math.PI),u(C-.1,f,v-E*.15,_+T+w*.2,E*.7,w*.65,c,.2,Math.PI)}}return new ue(o.build(),hn())}function Fa(i,t,e,n,s,r,a=.6,o=.25){const c=new ut,l=new ut,h=420;for(let d=0;d<h;d++){const f=d/h*Math.PI*2+i.range(-.004,.004),g=r(f);if(g<=0||!i.chance(a))continue;const _=i.range(14,40),m=i.range(.15,1)*s*g*(i.chance(.1)?1.4:1),p=t-i.range(0,60),x=i.pick(e);if(c.quad(Xt(p,f,-_/2,-40),Xt(p,f,_/2,-40),Xt(p,f,_/2,m),Xt(p,f,-_/2,m),x),i.chance(.25)){const y=_*.5;c.quad(Xt(p,f,-y/2,m),Xt(p,f,y/2,m),Xt(p,f,y/2,m+m*.2),Xt(p,f,-y/2,m+m*.2),x)}if(n.length){for(let y=6;y<m-4;y+=7)for(let v=-_/2+3;v<_/2-3;v+=5){if(!i.chance(o))continue;const T=i.pick(n);l.quad(Xt(p-1,f,v,y),Xt(p-1,f,v+2.6,y),Xt(p-1,f,v+2.6,y+3.4),Xt(p-1,f,v,y+3.4),T)}m>s*.6&&i.chance(.6)&&l.quad(Xt(p-1,f,-1.5,m+1),Xt(p-1,f,1.5,m+1),Xt(p-1,f,1.5,m+4),Xt(p-1,f,-1.5,m+4),16719904)}}const u=new gn;return u.add(new ue(c.build(),hn())),l.empty||u.add(new ue(l.build(),hn())),u}function eu(i,t){const e=[],n=[],s=new Lt;for(let a=0;a<t;a++){const o=i.next()*Math.PI*2,c=i.range(12,75)*(Math.PI/180),l=2600;e.push(Math.sin(o)*Math.cos(c)*l,Math.sin(c)*l,-Math.cos(o)*Math.cos(c)*l),s.setHex(i.pick([16777215,13162751,16771264,10137855])),n.push(s.r,s.g,s.b)}const r=new ke;return r.setAttribute("position",new _e(e,3)),r.setAttribute("color",new _e(n,3)),new pg(r,new U0({size:1,sizeAttenuation:!1,vertexColors:!0,fog:!1}))}function X2(i,t,e,n,s,r){const a=new ut,o=(c,l)=>Xt(i,t,c,l);return a.poly([o(-n,-40),o(n,-40),o(n*.12,e),o(-n*.12,e)],s),a.poly([o(-n*.12,e),o(n*.12,e),o(n*.32,e*.62),o(n*.14,e*.7),o(0,e*.6),o(-n*.16,e*.68),o(-n*.32,e*.6)].map(c=>[c[0],c[1],c[2]]).reverse(),r),new ue(a.build(),hn())}function nu(i,t,e,n,s){const r=new ut;for(let a=0;a<s;a++){const o=i.range(e,n),c=i.range(.8,1.4),l=t-a*4,h=(u,d)=>Xt(l,o,u*c,d*c-1.5);i.chance(.6)?(r.poly([h(-34,0),h(30,0),h(36,7),h(-38,7)],3820138),r.poly([h(-26,7),h(14,7),h(14,11),h(-26,11)],i.pick([13130314,4885192,14196800])),r.poly([h(18,7),h(30,7),h(30,17),h(18,17)],15790320),r.poly([h(22,17),h(26,17),h(26,22),h(22,22)],2763306)):(r.poly([h(-16,0),h(16,0),h(20,4),h(-18,4)],16053492),r.poly([h(-8,4),h(10,4),h(8,8),h(-6,8)],14739696))}return new ue(r.build(),hn())}function Y2(i,t){const e=new ut,n=new ut,s=(a,o)=>Xt(i,t,a,o);e.poly([s(-90,-40),s(90,-40),s(60,6),s(20,14),s(-30,12),s(-70,2)],6978138);for(let a=0;a<6;a++){const o=12+a*9,c=o+9,l=7-a*.6,h=7-(a+1)*.6;e.poly([s(-l,o),s(l,o),s(h,c),s(-h,c)],a%2?14170682:16777215)}e.poly([s(-4.5,66),s(4.5,66),s(4.5,72),s(-4.5,72)],2763306),e.poly([s(-5,72),s(5,72),s(0,78)],14170682),n.poly([s(-3.5,67),s(3.5,67),s(3.5,71),s(-3.5,71)],16774320);const r=new gn;return r.add(new ue(e.build(),hn()),new ue(n.build(),hn())),r}function iu(i,t,e,n){const s=new ut;for(let r=0;r<70;r++){const a=-i.range(.5,26),o=n*(.25+-a/26*.75),c=i.range(-o,o),l=i.range(4,22)*(1- -a/40),h=i.pick([16774336,16769168,16777215,16763024]);s.quad(Xt(t,e,c-l,a),Xt(t,e,c+l,a),Xt(t,e,c+l,a+.9),Xt(t,e,c-l,a+.9),h)}return new ue(s.build(),hn())}function $2(i,t,e){const n=new ut;for(let s=0;s<e;s++){const r=i.range(-Math.PI,Math.PI),a=Math.tan(i.range(8,22)*Math.PI/180)*t;for(const[o,c]of[[-3,16724016],[3,3211104],[0,16777215]])n.quad(Xt(t,r,o-1.2,a-1.2),Xt(t,r,o+1.2,a-1.2),Xt(t,r,o+1.2,a+1.2),Xt(t,r,o-1.2,a+1.2),c)}return new ue(n.build(),hn())}function Vn(i){const t=i.len/2,e=i.yb??.3,n=i.belt??i.hood,s=i.tumble??.8;return[{z:-t,w:i.w*.96,yb:e,belt:i.nose-.05,top:i.nose,wt:i.w*.9,seg:"p"},{z:-t+.35,w:i.w,yb:e,belt:n-.04,top:i.hood-.02,wt:i.w*.94,seg:"p"},{z:i.ws,w:i.w,yb:e,belt:n,top:i.hood,wt:i.w*.92,seg:"ws"},{z:i.rf0,w:i.w,yb:e,belt:n,top:i.roof,wt:i.w*s,seg:"rf"},{z:i.rf1,w:i.w,yb:e,belt:n,top:i.roof,wt:i.w*s,seg:"rw"},{z:i.rw,w:i.w,yb:e,belt:n,top:i.deck,wt:i.w*.92,seg:"p"},{z:t,w:i.w,yb:e,belt:Math.min(n,i.tail-.04),top:i.tail,wt:i.w*.92,seg:"p"}]}const wn=12589072,Tn=(i,t,e,n,s=.5,r=.3)=>{const a=e[e.length-1].z-e[0].z,o=Math.max(...e.map(c=>c.w));return{id:i,name:t,make:"",year:0,group:"TRAFFIC",paints:[16777215],stations:e,lights:n,wheels:{r,fz:e[0].z+a*.2,rz:e[0].z+a*.8,fx:o-.06,rx:o-.06,rim:10132122,spokes:4},exhaust:[],plateY:s,stats:{vmax:0,accel:0,grip:0}}},Ls={golf:Tn("golf","VW GOLF MK2",Vn({len:4,w:.83,nose:.62,hood:.84,roof:1.4,deck:.98,tail:.98,ws:-.95,rf0:-.2,rf1:1.15,rw:1.85}),[{x:.6,y:.84,w:.34,h:.18,c:wn}],.55),volvo240:Tn("volvo240","VOLVO 240 ESTATE",Vn({len:4.8,w:.86,nose:.7,hood:.86,roof:1.42,deck:1,tail:1,ws:-.8,rf0:0,rf1:2.22,rw:2.34}),[{x:.76,y:.86,w:.16,h:.42,c:wn}],.6),ae86:Tn("ae86","TOYOTA AE86",Vn({len:4.2,w:.82,nose:.6,hood:.8,roof:1.32,deck:.94,tail:.94,ws:-.6,rf0:.1,rf1:.7,rw:1.95}),[{x:.52,y:.8,w:.56,h:.14,c:wn}],.52),cherokee:Tn("cherokee","JEEP CHEROKEE XJ",Vn({len:4.24,w:.9,nose:.92,hood:1.06,roof:1.62,deck:1.22,tail:1.22,ws:-.9,rf0:-.35,rf1:1.96,rw:2.06,yb:.45}),[{x:.8,y:.98,w:.14,h:.36,c:wn}],.7,.36),caprice:Tn("caprice","CHEVROLET CAPRICE",Vn({len:5.4,w:.95,nose:.78,hood:.92,roof:1.42,deck:1,tail:1,ws:-.7,rf0:0,rf1:1,rw:1.6}),[{x:.62,y:.86,w:.6,h:.16,c:wn}],.6),w124:Tn("w124","MERCEDES W124",Vn({len:4.74,w:.87,nose:.7,hood:.86,roof:1.42,deck:1,tail:1.02,ws:-.65,rf0:.05,rf1:.95,rw:1.55}),[{x:.6,y:.88,w:.5,h:.2,c:wn}],.62),f150:Tn("f150","FORD F-150",[{z:-2.5,w:.98,yb:.45,belt:.95,top:1.05,wt:.9,seg:"p"},{z:-2.1,w:1,yb:.45,belt:1.1,top:1.15,wt:.94,seg:"p"},{z:-.9,w:1,yb:.45,belt:1.15,top:1.2,wt:.94,seg:"ws"},{z:-.35,w:1,yb:.45,belt:1.15,top:1.8,wt:.86,seg:"rf"},{z:.6,w:1,yb:.45,belt:1.15,top:1.8,wt:.86,seg:"p"},{z:.62,w:1,yb:.45,belt:1.15,top:1.18,wt:.96,seg:"bed"},{z:2.5,w:1,yb:.45,belt:1.15,top:1.18,wt:.96,seg:"p"}],[{x:.9,y:.95,w:.12,h:.3,c:wn}],.65,.38),crown:Tn("crown","TOYOTA CROWN",Vn({len:4.7,w:.85,nose:.74,hood:.88,roof:1.48,deck:1,tail:1.02,ws:-.6,rf0:.1,rf1:1.05,rw:1.5}),[{x:.64,y:.88,w:.4,h:.16,c:wn}],.62),cedric:Tn("cedric","NISSAN CEDRIC",Vn({len:4.8,w:.86,nose:.72,hood:.86,roof:1.42,deck:.98,tail:1,ws:-.65,rf0:.05,rf1:1,rw:1.55}),[{x:.5,y:.86,w:.7,h:.12,c:wn}],.6),every:Tn("every","SUZUKI EVERY",[{z:-1.7,w:.7,yb:.4,belt:.8,top:.9,wt:.66,seg:"p"},{z:-1.55,w:.7,yb:.4,belt:.9,top:1,wt:.66,seg:"ws"},{z:-1.05,w:.7,yb:.4,belt:1,top:1.82,wt:.62,seg:"rf"},{z:1.65,w:.7,yb:.4,belt:1,top:1.82,wt:.62,seg:"p"},{z:1.7,w:.7,yb:.4,belt:1,top:1.8,wt:.64,seg:"p"}],[{x:.6,y:.8,w:.14,h:.3,c:wn}],.6,.27),civic:Tn("civic","HONDA CIVIC EF",Vn({len:4,w:.84,nose:.6,hood:.8,roof:1.32,deck:.96,tail:.96,ws:-.55,rf0:.2,rf1:1.2,rw:1.92}),[{x:.5,y:.8,w:.66,h:.12,c:wn}],.5)};function Nn(i,t={}){if(ie.modern)return K2(i,t);const e=Y0(i,16777215,!0);p2(e.lit,i);const n=e.glow;if(t.taxi){const o=i.stations.find(c=>c.seg==="rf");n.box(0,o.top+.12,o.z+.4,.5,.22,.3,16769152)}const s=i.stations,a={parts:[{geo:e.lit.build(),mat:"lit"}],radius:0,max:40,len:(s[s.length-1].z-s[0].z)/2+2.2};return n.empty||a.parts.push({geo:n.build(),mat:"glow"}),t.night&&a.parts.push({geo:tl(i,.8).build(),mat:"halo",tint:!1}),a}function K2(i,t){const e=H0(i,16777215,!0),n=e.cabin;for(const o of e.wheels)for(const c of[-1,1])n.with(new Nt().makeTranslation(c*o.x,o.r,o.z),()=>V0(n,o.r,o.hw,c,"steel",12106948,8,!1));const s=e.glow;if(t.taxi){const o=i.stations.find(c=>c.seg==="rf");s.box(0,o.top+.12,o.z+.4,.5,.22,.3,16769152)}const r=i.stations,a={parts:[{geo:X0(i),mat:"shadow",tint:!1,order:-1},{geo:e.skin.build(!0),mat:"car",tint:!0},{geo:e.body.build(),mat:"car",tint:!0},{geo:n.build(),mat:"car",tint:!1},{geo:s.build(),mat:"carGlow",tint:!1},{geo:e.glass.build(),mat:"glass",tint:!1}],radius:0,max:40,len:(r[r.length-1].z-r[0].z)/2+2.2};return t.night&&a.parts.push({geo:tl(i,.8).build(),mat:"halo",tint:!1}),a}class Ds{constructor(){this.defs=[]}add(t){return this.defs.push(t),this.defs.length-1}}const Xn=[16756936,11069695,16773280,12124120,16765096,14731519,16777215],$h=[16047256,15519880],Ro=[1616092,1351892],Z2=[6605900,5815364],Kh=[5026876,4367414],Ks=[14734532,13945016],Co=12576482,Zs={road:[10921646,9868958],line:16777215,edge:16777215,rumble:[16722474,16777215]},j2=[16777215,14743807],J2=[5430488,4641490],Q2={id:"miami",name:"MIAMI BEACH",lines:["MIAMI","BEACH"],night:!1,hemi:[10542335,14205072],plate:16769088,smoke:16777215,card:[1727160,16771232],music:"miami",stageNames:["OCEAN DRIVE","PASTEL BOULEVARD","BAYSIDE CAUSEWAY","COCONUT HILLS","SUNSET POINT"],fog:{color:Co,near:160,far:1150},ambient:{color:16777215,intensity:1.9},sun:{color:16773852,intensity:2.4,dir:[-.5,1,.8]},startTime:60,extendTime:40,shadow:6052966,trafficColors:[16734810,5943551,16769114,16777215,6348960,16751312,16752704],trafficCount:16,walls:!1,offroadLimit:Z+26,build(i){const t=new jn(1986),e=[pe(Zs,[{w:4,c:Ks},{w:600,c:Z2}],[{w:6,c:$h},{w:28,abs:.4,c:$h},{w:3,abs:.12,c:j2},{w:16,abs:0,c:J2},{w:600,abs:0,c:Ro}]),pe(Zs,[{w:6,c:Ks},{w:600,c:[7393880,6735440]}],[{w:6,c:Ks},{w:600,c:[7393880,6735440]}]),pe(Zs,[{w:1,c:Ks},{w:0,dy:.9,c:[16777215,15790320]},{w:.6,c:[16777215,16777215]},{w:0,abs:0,c:[13684944,12632256]},{w:600,abs:0,c:Ro}],[{w:1,c:Ks},{w:0,dy:.9,c:[16777215,15790320]},{w:.6,c:[16777215,16777215]},{w:0,abs:0,c:[13684944,12632256]},{w:600,abs:0,c:Ro}]),pe(Zs,[{w:3,c:[14207120,13417604]},{w:600,c:Kh}],[{w:3,c:[14207120,13417604]},{w:600,c:Kh}]),pe(Zs,[{w:1.2,dy:.3,c:[11579576,11053232]},{w:0,dy:5,c:[15261896,14209208]},{w:0,dy:.8,c:[16765024,7368832]},{w:1.5,dy:2.8,c:[13156520,12367004]}],[{w:1.2,dy:.3,c:[11579576,11053232]},{w:0,dy:5,c:[15261896,14209208]},{w:0,dy:.8,c:[16765024,7368832]},{w:1.5,dy:2.8,c:[13156520,12367004]}],[5789800,5263454])],n=(ht,It)=>It?4:ht==="city"?1:ht==="causeway"?2:ht==="hills"?3:0,s=new Ts(n,3);s.zone="beach",s.straight(30),s.stageFrom({zone:"beach",length:400,curvy:.75,hilly:.1,yMin:2.5,yMax:6},t),s.stageFrom({zone:"city",length:400,curvy:.8,hilly:.25,yMin:3,yMax:14},t),s.stageFrom({zone:"causeway",length:380,curvy:.6,hilly:.1,yMin:3,yMax:5},t),s.stageFrom({zone:"hills",length:420,curvy:1,hilly:1,yMin:4,yMax:70,tunnels:.15,tunnelZone:"hills"},t),s.stageFrom({zone:"beach2",length:420,curvy:.7,hilly:.15,yMin:2.5,yMax:6},t);const r=s.finish(260),a=new Ds,o=a.add(el()),c=a.add(v2()),l=a.add($0()),h=a.add(nl()),u=[a.add(So([16724032,16777215])),a.add(So([2781439,16769088])),a.add(So([2146464,16744624]))],d=a.add(y2()),f=[0,1,2].map(ht=>a.add(il(ht,t))),g=a.add(As(8,16774336)),_=a.add(Ua()),m=a.add(M2()),p=a.add(b2()),x=[{bg:16734858,fg:16777215,text:"SUNSET",sub:"COLA",border:16777215},{bg:2788095,fg:16777215,text:"SURF",sub:"SHOP",border:16769088},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:16777215,fg:1735384,text:"BEACH",sub:"CLUB 86",border:16734858},{bg:2142352,fg:16777215,text:"PALM",sub:"RESORT",border:16777215},{bg:16747040,fg:16777215,text:"MANGO",sub:"JUICE",border:16777215}].map(ht=>a.add(ur(i.add(ht,2,2),9,4.5))),y=[{bg:16777215,fg:16726634,text:"DINER"},{bg:1710650,fg:4251903,text:"DISCO"},{bg:16777215,fg:2783960,text:"MOTEL"},{bg:16734858,fg:16777215,text:"ICE CREAM"}].map(ht=>a.add(K0(i.add(ht,2,1)))),v=[{bg:1735226,fg:16777215,text:"MIAMI",sub:"BEACH 12",border:16777215},{bg:1735226,fg:16777215,text:"KEYS",sub:"NEXT EXIT",border:16777215},{bg:1727152,fg:16777215,text:"ROUTE",sub:"A1A",border:16777215}].map(ht=>a.add(Na(i.add(ht,1,1)))),T=a.add(Ee(i.add({bg:16777215,fg:14690858,text:"START",stripes:1710618},4,1))),E=a.add(Ee(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),15790320,1727200)),w=a.add(Ee(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),15790320,1710618)),C=Ls,b=[C.golf,C.volvo240,C.ae86,C.cherokee,C.caprice,C.w124,C.f150].map(ht=>a.add(Nn(ht))).concat([a.add(gi(2788095)),a.add(ki(16734858))]),S=a.add(_n(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),D=a.add(_n(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),W=a.add(Z0()),B=a.add(sl()),V=a.add(j0()),et=a.add(S2()),U=a.add(J0()),rt=[{bg:16734858,fg:16777215,text:"WELCOME TO MIAMI",border:16777215},{bg:1731296,fg:16769088,text:"SUNSET POINT",border:16777215}].map((ht,It)=>a.add(Ee(i.add(ht,4,1),16777215,It?16747040:2146480,16777215))),k=a.add(xi(!0)),tt=a.add(xi(!1)),J=Array.from({length:16},(ht,It)=>a.add(rl(i.add({bg:1735226,fg:16777215,text:String(It+1),border:16777215},1,1)))),at=[a.add(zi(0)),a.add(zi(1))],j=a.add(Q0(t)),Tt=a.add(T2()),K=[16730730,2789631,16769088,16777215,4247712,16751152,12607743],ft=[16726618,16769088,2789631,4251808,16777215,16747040],yt=r.segs;for(let ht=10;ht<yt.length;ht++){const It=yt[ht],dt=It.props;if(It.tunnel){yt[ht-1].tunnel||dt.push({t:p,x:0});continue}const Zt=It.zone;if(ie.modern){const N=Zt==="beach"||Zt==="beach2";ht%3===0&&(Zt==="hills"||N)&&dt.push({t:k,x:Z+2.1},{t:tt,x:-13.1}),ht%167===100&&dt.push({t:J[Math.min(J.length-1,Math.floor(ht*6/1e3))],x:Z+3.4,r:-.3}),N&&(ht%5===0&&t.chance(.55)&&dt.push({t:at[1],x:Z+t.range(9,26),r:t.range(0,6),tint:t.pick(K)}),ht%4===1&&t.chance(.35)&&dt.push({t:at[0],x:-(Z+t.range(1.5,3.5)),r:t.range(0,6),tint:t.pick(K)}),ht%40===10&&dt.push({t:j,x:Z+t.range(15,60),y:t.range(16,28),r:t.range(0,6)}),Zt==="beach2"&&ht%26===13&&t.chance(.7)&&dt.push({t:Tt,x:Z+t.range(18,22),r:-.3+t.range(-.2,.2),tint:t.pick(K)})),Zt==="city"&&ht%5===2&&t.chance(.45)&&dt.push({t:at[0],x:t.sign()*(Z+t.range(2.5,5.5)),r:t.range(0,6),tint:t.pick(K)})}Math.abs(It.curve)>.0016&&ht%5===0&&Zt!=="causeway"&&dt.push(It.curve>0?{t:S,x:-16.5,r:.15}:{t:D,x:Z+5.5,r:-.15}),(Zt==="beach"||Zt==="beach2"||Zt==="causeway")&&ht%23===0&&t.chance(.6)&&dt.push({t:U,x:(Zt==="causeway"?t.sign():1)*t.range(70,280),y:0,abs:!0,s:t.range(.9,1.4),r:t.range(-.6,.6)}),Zt==="beach"||Zt==="beach2"?(ht%19===4&&t.chance(.5)&&dt.push({t:et,x:Z+t.range(10,18),r:t.range(-.5,.5)}),ht%7===0&&t.chance(.85)&&dt.push({t:o,x:Z+t.range(4.5,7),s:t.range(.9,1.3),r:t.range(0,6)}),ht%7===3&&t.chance(.5)&&dt.push({t:o,x:-(Z+t.range(5,9)),s:t.range(.9,1.3),r:t.range(0,6)}),ht%9===0&&t.chance(Zt==="beach2"?.75:.45)&&(dt.push({t:t.pick(u),x:Z+t.range(14,26),r:t.range(0,6)}),t.chance(.5)&&dt.push({t:t.pick(u),x:Z+t.range(14,26),r:t.range(0,6)})),Zt==="beach2"&&ht%70===35&&dt.push({t:d,x:Z+22,r:-.6}),ht%55===20&&dt.push({t:t.pick(f),x:-(Z+t.range(40,70)),tint:t.pick(Xn),r:t.range(-.3,.3)}),ht%80===50&&dt.push({t:t.pick(x),x:-23,r:.35}),ht%37===0&&t.chance(.5)&&dt.push({t:h,x:Z+t.range(24,32),s:t.range(.6,1.2),r:t.range(0,6)}),ht%120===60&&dt.push({t:t.pick(v),x:Z+3,r:-.2})):Zt==="city"?(ht%30>3&&dt.push({t:W,x:Z+9.5},{t:W,x:-20.5}),ht%16===12&&dt.push({t:B,x:Z+4.5,tint:t.pick(ft)},{t:B,x:-15.5,r:Math.PI,tint:t.pick(ft)}),ht%14===0&&t.chance(.75)&&dt.push({t:t.pick(y),x:-(Z+t.range(15,18)),tint:t.pick(Xn),r:.5}),ht%14===7&&t.chance(.75)&&dt.push({t:t.pick(y),x:Z+t.range(15,18),tint:t.pick(Xn),r:-.5}),ht%8===0&&dt.push({t:g,x:Z+3,r:0},{t:g,x:-14,r:Math.PI}),ht%8===4&&(dt.push({t:o,x:Z+6.5,s:t.range(.9,1.2),r:t.range(0,6)}),dt.push({t:o,x:-17.5,s:t.range(.9,1.2),r:t.range(0,6)})),ht%40===20&&dt.push({t:t.pick(x),x:(ht%80===20?-1:1)*(Z+11),r:ht%80===20?.35:-.35}),ht%30===15&&dt.push({t:t.pick(f),x:t.sign()*(Z+t.range(50,80)),tint:t.pick(Xn),r:t.range(-.3,.3)})):Zt==="causeway"?(ht%10===0&&dt.push({t:g,x:Z+2.4,r:0}),ht%10===5&&dt.push({t:g,x:-13.4,r:Math.PI}),ht%45===0&&t.chance(.8)&&dt.push({t:m,x:t.sign()*t.range(70,160),y:0,abs:!0,s:t.range(.8,1.4),r:t.range(0,6)}),ht%150===75&&dt.push({t:t.pick(v),x:Z+4,r:-.2})):Zt==="hills"&&(Math.abs(It.curve)>.0012&&(dt.push({t:_,x:Z+2.4}),dt.push({t:_,x:-13.4})),ht%4===2&&t.chance(.5)&&dt.push({t:V,x:t.sign()*(Z+t.range(8,50)),s:t.range(.8,1.5),r:t.range(0,6)}),ht%5===0&&t.chance(.6)&&dt.push({t:c,x:t.sign()*(Z+t.range(8,40)),s:t.range(.8,1.4),r:t.range(0,6)}),ht%11===0&&t.chance(.5)&&dt.push({t:l,x:t.sign()*(Z+t.range(5,12)),s:t.range(.7,1.2),r:t.range(0,6)}),ht%23===0&&t.chance(.6)&&dt.push({t:h,x:t.sign()*(Z+t.range(9,30)),s:t.range(.8,1.8),r:t.range(0,6)}),ht%90===45&&dt.push({t:t.pick(x),x:Z+12,r:-.35}))}for(let ht=1;ht<r.stageStarts.length;ht++)yt[r.stageStarts[ht]+4].props.push({t:E,x:0});yt[8].props.push({t:T,x:0}),yt[r.stageStarts[1]+160].props.push({t:rt[0],x:0}),yt[r.stageStarts[4]+200].props.push({t:rt[1],x:0}),yt[r.goalSeg].props.push({t:w,x:0});const lt=new Rs;lt.addLayer(Cs([[0,16773304],[1.4,16765072],[3,16754820],[4.6,16750240],[6.5,16165068],[8.5,13813486],[11,10672886],[15,7260918],[20,4633330],[28,2791146],[40,1736416],[90,941768]],Co),0);const Dt=ht=>Math.atan2(Math.sin(ht),Math.cos(ht)),zt=Is(2500,.25,2.6,300,[[1.45,16762020],[1.22,16754820],[1,16747066],[.84,16755268],[.68,16763992],[.5,16771200],[.3,16775368]],24);return lt.addLayer(zt,1),lt.sun={obj:zt,local:Oa(2500,.25,2.6)},lt.addLayer(Bi(t,2320,7,[16769216,16758944,15239336],-.5,1.2,[1.2,3.2]),.9),lt.addLayer(Bi(t,2350,14,[16777215,16771312,16033992]),.8),lt.addLayer(Dn(t,2200,8030928,230,ht=>{const It=Dt(ht);return It<-.25?1:It>1.6?.8:0},15265535,46),1),lt.addLayer(Dn(t,2050,5939360,110,ht=>{const It=Dt(ht);return It<-.15||It>1.9?1:0},void 0,50),1),lt.addLayer(Dn(t,1980,3050072,55,ht=>{const It=Dt(ht);return It<-.35||It>2.1?1:0},void 0,260,[1.2,3.5]),1),lt.addLayer(Fa(t,2e3,[11057368,10004684,12109024,14207192],[8034504,15266047,9087192],150,ht=>{const It=Dt(ht);return It>.7&&It<1.3?1:0},.9,.35),1),ie.modern&&(lt.addLayer(nu(t,1880,.35,1.5,5),1),lt.addLayer(Y2(1860,1.55),1),lt.addLayer(iu(t,1880,.25,140),1)),lt.addLayer(Ps(1900,Co),0),{track:r,profiles:e,props:a.defs,backdrop:lt,trafficTypes:b,gateType:w}}},Po=2890832,Ic=[16771232,16774872,16765040,10547455,16777215],Io={road:[4868698,3947594],line:15790320,edge:15790320,rumble:[5921384,5263452],rumbleW:1.4},ra=i=>[{w:0,dy:1.3,c:[12369096,11053238]},{w:.5,c:[14474468,13684952]},{w:0,abs:0,c:[3816018,3816018]},{w:600,abs:0,c:i}];function tx(i,t,e,n){const s=new ut,r=new ut,a=i.pick([1843780,2235456,1583680,2500160]);if(ie.modern){const h=new ut,u=hr(n<30?ye.APARTMENT:i.pick([ye.OFFICE_WARM,ye.OFFICE_COOL,ye.OFFICE_DARK,ye.OFFICE_WARM])),d=n<30?[12,12]:[16,16];if(h.facadeBox(0,n/2,0,t,n,e,u,d[0],d[1],[16777215,12106968],2764360,i.range(0,1)),n>45&&i.chance(.6)){const f=t*.65,g=e*.65,_=i.range(6,14);h.facadeBox(0,n+_/2,0,f,_,g,u,d[0],d[1],[14474480,10527940],2764360,i.range(0,1)),i.chance(.5)&&r.box(0,n+_+.3,0,f+.2,.5,g+.2,i.pick([4255999,16726666,16777215])),n+=_}for(let f=0;f<3;f++)s.box(i.range(-t/4,t/4),n+.8,i.range(-e/4,e/4),2.6,1.6,2,[3817048,4869736]);return n>40&&(s.box(t/5,n+6,0,.35,12,.35,6975112),r.box(t/5,n+12.3,0,1,1,1,16719904)),{parts:[{geo:h.build(),mat:"facadeLit"},{geo:s.build(),mat:"lit"},{geo:r.build(),mat:"glow"}],radius:0,max:60}}s.box(0,n/2,0,t,n,e,[a,2764370]),i.chance(.5)&&s.box(0,n+2,0,t*.6,4,e*.6,a);const o=i.int(0,2),c=i.range(.12,.35),l=[[0,1,t,e/2],[0,-1,t,e/2],[1,1,e,t/2],[1,-1,e,t/2]];for(const[h,u,d,f]of l)for(let g=4;g<n-3;g+=3.6){if(o===1&&i.chance(.15)){const _=i.pick(Ic),m=f+.06;h===0?r.quad([-d/2+1,g,u*m],[d/2-1,g,u*m],[d/2-1,g+1.8,u*m],[-d/2+1,g+1.8,u*m],_):r.quad([u*m,g,-d/2+1],[u*m,g,d/2-1],[u*m,g+1.8,d/2-1],[u*m,g+1.8,-d/2+1],_);continue}for(let _=-d/2+1.5;_<d/2-1.5;_+=3){if(!i.chance(c))continue;const m=i.pick(Ic),p=f+.06;h===0?r.quad([_,g,u*p],[_+1.5,g,u*p],[_+1.5,g+1.8,u*p],[_,g+1.8,u*p],m):r.quad([u*p,g,_],[u*p,g,_+1.5],[u*p,g+1.8,_+1.5],[u*p,g+1.8,_],m)}}return n>70&&r.box(0,n+4.6,0,1.2,1.2,1.2,16719904),{parts:[{geo:s.build(),mat:"lit"},{geo:r.build(),mat:"glow"}],radius:0,max:60}}function ex(i,t,e){const n=new ut,s=new ut,r=new ut;return n.box(0,e/2,-.4,1.2,e,1.2,2105392),s.quad([-1.6,e,.25],[1.6,e,.25],[1.6,e+12,.25],[-1.6,e+12,.25],16777215,i),r.box(0,e+6,0,3.8,12.6,.4,t),{parts:[{geo:n.build(),mat:"lit"},{geo:r.build(),mat:"glow"},{geo:s.build(),mat:"sign"}],radius:0,max:50}}function nx(i,t){const e=new ut,n=new ut,s=new ut;return e.box(-6,2,0,.6,4,.6,3158080),e.box(6,2,0,.6,4,.6,3158080),s.box(0,8,-.1,19,8,.3,t),n.quad([-9,4.4,.1],[9,4.4,.1],[9,11.6,.1],[-9,11.6,.1],16777215,i),{parts:[{geo:e.build(),mat:"lit"},{geo:s.build(),mat:"glow"},{geo:n.build(),mat:"sign"}],radius:0,max:40}}function ix(i,t){const e=new ut,n=new ut,s=Z+1.2;return e.box(-s,4.5,0,.6,9,.6,9079448),e.box(s,4.5,0,.6,9,.6,9079448),e.box(0,8.6,-.3,s*2,.5,.5,9079448),e.box(-5.5,10,-.15,9.4,4.2,.2,940586),e.box(5.5,10,-.15,9.4,4.2,.2,940586),n.quad([-10,8,0],[-1,8,0],[-1,12,0],[-10,12,0],16777215,i),n.quad([1,8,0],[10,8,0],[10,12,0],[1,12,0],16777215,t),{parts:[{geo:e.build(),mat:"lit"},{geo:n.build(),mat:"sign"}],radius:0,max:6}}function sx(){const i=new ut,t=new ut,e=56,n=-70;for(const s of[-Z-3,Z+3])i.box(s,(e+n)/2,0,2.4,e-n,2.4,[14212328,16777215]),t.box(s,e+.8,0,1.2,1.2,1.2,16719904);for(const s of[14,36,e-2])i.box(0,s,0,(Z+3)*2,2.2,2,14212328);for(const s of[-Z-3,Z+3])for(const r of[-1,1])for(let a=1;a<=16;a++){const o=a/16,c=r*o*64,l=e-(e-4)*(1-(1-o)*(1-o));t.box(s,l,c,.6,.6,.6,a%2?16777215:8446207)}return{parts:[{geo:i.build(),mat:"lit"},{geo:t.build(),mat:"glow"}],radius:0,max:8}}const rx={id:"tokyo",name:"TOKYO NIGHT HIGHWAY",lines:["TOKYO NIGHT","HIGHWAY"],night:!0,hemi:[9072864,2760768],plate:15790312,smoke:12105936,card:[2363466,16738992],music:"tokyo",stageNames:["SHUTOKO LOOP","NEON DISTRICT","UNDERGROUND","BAY BRIDGE","WANGAN LINE"],fog:{color:Po,near:140,far:1150},ambient:{color:12895487,intensity:1.8},sun:{color:16761048,intensity:1.6,dir:[-.4,1,.9]},startTime:60,extendTime:40,shadow:2236972,trafficColors:[16777215,14692400,4235519,3199136,16752688,13656319,10132136],trafficCount:18,walls:!0,offroadLimit:Z+1,build(i){var tt,J;const t=new jn(1985),e=[pe(Io,ra([1711160,1447983]),ra([1711160,1447983])),pe(Io,ra([924744,792638]),ra([924744,792638])),pe(Io,[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[3420716,3025960])],n=(at,j)=>j?2:at==="bay"?1:0,s=new Ts(n,26);s.zone="city",s.straight(30),s.stageFrom({zone:"city",length:400,curvy:.85,hilly:.4,yMin:22,yMax:40},t),s.stageFrom({zone:"neon",length:400,curvy:.8,hilly:.3,yMin:22,yMax:34,tunnels:.12},t),s.stageFrom({zone:"under",length:420,curvy:.7,hilly:.4,yMin:18,yMax:34,tunnels:.4},t),s.stageFrom({zone:"bay",length:420,curvy:.45,hilly:1,yMin:26,yMax:64},t),s.stageFrom({zone:"wangan",length:420,curvy:.45,hilly:.2,yMin:22,yMax:30},t);const r=s.finish(260),a=new Ds,o=[],l=(ie.modern?[[5,12,26],[5,32,64],[5,70,140]]:[[8,40,130]]).map(([at,j,Tt])=>{const K=[];for(let ft=0;ft<at;ft++){const yt=t.range(18,34),lt=t.range(18,30),Dt=t.range(j,Tt),zt={t:a.add(tx(t,yt,lt,Dt)),h:Dt,w:Math.max(yt,lt)};K.push(zt),o.push(zt)}return K}),h=a.add(As(10,16760928,9079448,4,!0)),u=[16726666,4255999,16769088,16732208,8453984,12607743],f=["ホテル","カラオケ","ラーメン","喫茶店","電気街","寿司","ゲーム","居酒屋"].map((at,j)=>{const Tt=u[j%u.length],K={bg:1052700,fg:Tt,text:at,vertical:!0,jp:!0,border:Tt};return a.add(ex(i.add(K,1,4),Tt,t.range(26,36)))}),_=[{bg:1052700,fg:16726666,text:"TURBO",sub:"GAME CENTER",border:16726666},{bg:1052700,fg:4255999,text:"東京",jp:!0,border:4255999},{bg:14690858,fg:16777215,text:"NEO",sub:"ELECTRONICS",border:16777215},{bg:1052700,fg:16769088,text:"ネオン",jp:!0,border:16769088},{bg:1720512,fg:16777215,text:"SKY",sub:"HOTEL",border:4255999},{bg:1052700,fg:8453984,text:"カメラ",jp:!0,border:8453984}].map((at,j)=>a.add(nx(i.add(at,2,1),u[j%u.length]))),p=[[{bg:940586,fg:16777215,text:"新宿",sub:"SHINJUKU",jp:!0},{bg:940586,fg:16777215,text:"銀座",sub:"GINZA",jp:!0}],[{bg:940586,fg:16777215,text:"渋谷",sub:"SHIBUYA",jp:!0},{bg:940586,fg:16777215,text:"羽田",sub:"HANEDA",jp:!0}],[{bg:940586,fg:16777215,text:"湾岸線",sub:"WANGAN",jp:!0},{bg:940586,fg:16777215,text:"横浜",sub:"YOKOHAMA",jp:!0}]].map(([at,j])=>a.add(ix(i.add(at,2,1),i.add(j,2,1)))),x=a.add(sx()),y=a.add(dr(6974072,16752688,7.9)),v=a.add(Ee(i.add({bg:1052700,fg:4255999,text:"START",border:4255999},4,1),10132136,16726666,4255999)),T=a.add(Ee(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),10132136,1727200,16769088)),E=a.add(Ee(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),10132136,1710618,16726666)),w=Ls,C=[w.cedric,w.every,w.civic,w.ae86,w.crown].map(at=>a.add(Nn(at,{night:!0}))).concat([a.add(Nn(w.crown,{taxi:!0,night:!0})),a.add(Nn(w.crown,{taxi:!0,night:!0})),a.add(gi(14690858)),a.add(gi(1739322)),a.add(ki(2787930))]),b=a.add(tu(16756784)),S=a.add(A2(i.add({bg:16747040,fg:1710618,text:"非常電話",jp:!0},1,1))),D=a.add(R2(8.2)),W=a.add(_n(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1),.3)),B=a.add(_n(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1),.3)),V=a.add(E2(2788e3)),et=[0,1,2].map(()=>a.add(w2(t))),U=r.segs,rt=(at,j,Tt)=>{const K=U[at].props;for(const ft of[-1,1]){if(!t.chance(j))continue;const yt=t.range(0,240),lt=ie.modern?t.pick(l[yt<70?0:yt<140?1:2]):t.pick(o),Dt=ie.modern?t.range(.9,1.15):t.range(.85,1.25),zt=ft*(Z+Tt+lt.w*Dt*.5+yt),ht=ie.modern?t.range(.92,1.1):yt<70?t.range(.25,.45):yt<140?t.range(.5,.9):t.range(.8,1.5);K.push({t:lt.t,x:zt,y:0,abs:!0,s:Dt,sy:ht,r:t.range(-.2,.2),tint:t.pick([16777215,14209279,13164799])}),yt<140&&t.chance(.4)&&K.push({t:t.pick(_),x:zt-ft*lt.w*Dt*.2,y:lt.h*Dt*ht,abs:!0,r:ft*-.4})}};for(let at=10;at<U.length;at++){const j=U[at],Tt=j.props;if(j.tunnel){U[at-1].tunnel||Tt.push({t:y,x:0}),ie.modern&&at%22===0&&Tt.push({t:D,x:0});continue}const K=j.zone;if(ie.modern&&(at%2===0&&Tt.push({t:b,x:Z+1.65,y:1.3},{t:b,x:-12.65,y:1.3}),at%140===70&&Tt.push({t:S,x:Z+.9,r:-Math.PI/2})),Math.abs(j.curve)>.0016&&at%4===0&&Tt.push(j.curve>0?{t:W,x:-12.95,r:.1}:{t:B,x:Z+1.95,r:-.1}),K!=="bay"&&at%3===0&&Tt.push({t:t.pick(et),x:t.sign()*(Z+t.range(40,330)),y:0,abs:!0,r:t.range(0,6)}),K!=="bay"&&at%130===90&&!((tt=U[at+2])!=null&&tt.tunnel)&&!((J=U[at-2])!=null&&J.tunnel)&&Tt.push({t:V,x:0,y:-0}),at%7===0&&Tt.push({t:h,x:Z+2.6,y:1.3,r:0}),at%7===3&&Tt.push({t:h,x:-13.6,y:1.3,r:Math.PI}),K==="bay"){at%75===30&&Tt.push({t:x,x:0}),at%9===0&&rt(at,.08,260);continue}rt(at,K==="wangan"?.12:K==="under"?.22:.3,18),(K==="neon"||K==="city")&&at%4===0&&t.chance(K==="neon"?.55:.2)&&Tt.push({t:t.pick(f),x:t.sign()*(Z+t.range(10,22)),y:0,abs:!0,r:t.range(-.5,.5)}),at%110===55&&Tt.push({t:t.pick(p),x:0})}for(let at=1;at<r.stageStarts.length;at++)U[r.stageStarts[at]+4].props.push({t:T,x:0});U[8].props.push({t:v,x:0}),U[r.goalSeg].props.push({t:E,x:0});const k=new Rs;return k.addLayer(Cs([[0,16754784],[1.2,15891058],[2.6,13785734],[4.2,10503308],[6.2,7221378],[9,4858994],[13,3284066],[19,2234450],[30,1314880],[90,394782]],Po),0),k.addLayer(Bi(t,2380,9,[5913216,3942498,12606088],-Math.PI,Math.PI,[5,14]),.7),k.addLayer(eu(t,260),.3),k.addLayer(Is(2500,-.45,16,70,[[1.6,5917322],[1.3,9075370],[1,16774352],[.8,16777192]],16),1),k.addLayer(X2(2300,.55,190,520,3811946,14209264),1),k.addLayer(Fa(t,2100,[1710136,2103872,1316410],Ic,170,()=>1,.75,.22),1),ie.modern&&k.addLayer($2(t,2300,6),.4),k.addLayer(Ps(1950,Po),0),{track:r,profiles:e,props:a.defs,backdrop:k,trafficTypes:C,gateType:E}}},Je=(i,t,e)=>{const n=[{geo:i.build(),mat:"lit"}];return t&&!t.empty&&n.push({geo:t.build(),mat:"glow"}),e&&!e.empty&&n.push({geo:e.build(),mat:"sign"}),n},ir=(i,t)=>new Lt(i).multiplyScalar(t).getHex();function su(){const i=new ut,t=[4099130,3042860];i.prism(0,0,0,6.2,.5,.42,8,t,5939274);for(const[e,n,s]of[[1,2.6,2.4],[-1,3.4,1.8]])i.box(e*.75,n,0,1.1,.6,.6,t[0]),i.prism(e*1.15,0,n-.2,n+s,.34,.3,7,t,5939274);return{parts:Je(i),radius:.7,max:220}}function ru(){const i=new ut,t=[8022610,6180928];i.prism(0,0,0,2.6,.38,.3,6,t);const e=[[-1.6,4.4,.3],[1.4,4.8,-.4],[.2,5.4,.9],[-.4,4,-1.3]];for(const n of e){for(let r=0;r<5;r++){const a=r/5,o=(r+1)/5,c=u=>[n[0]*u,2.6+(n[1]-2.6)*u,n[2]*u],l=c(a),h=c(o);i.quad([l[0]-.18,l[1],l[2]],[l[0]+.18,l[1],l[2]],[h[0]+.15,h[1],h[2]],[h[0]-.15,h[1],h[2]],t[r%2])}for(let r=0;r<8;r++){const a=r/8*Math.PI*2;i.tri([n[0],n[1]-.2,n[2]],[n[0]+Math.cos(a)*.25,n[1],n[2]+Math.sin(a)*.25],[n[0]+Math.cos(a)*.9,n[1]+.5,n[2]+Math.sin(a)*.9],r%2?4880954:6986314)}}return{parts:Je(i),radius:.6,max:160}}function ax(i){const t=new ut,e=[12607546,14186570,11555892,14717020,11029552],n=9,s=i.range(26,46),r=i.range(26,40),a=r*i.range(.55,.75),o=5;for(let c=0;c<o;c++){const l=s*c/o,h=s*(c+1)/o,u=r+(a-r)*(c/o),d=r+(a-r)*((c+1)/o);t.prism(0,0,l,h,u,d,n,[e[c],ir(e[c],.82)],c===o-1?14191192:null,.3)}return t.prism(0,0,-2,4,r*1.35,r,n,[13139024,11561540],null,.3),{parts:Je(t),radius:0,max:30}}function ox(){const i=new ut,t=Z+5,e=18,n=4,s=[13134400,11557430,14188622];for(const a of[-1,1])i.box(a*(t+3),e/2-2,0,7,e+4,9,[s[0],s[2]]);const r=10;for(let a=0;a<r;a++){const o=a/r*Math.PI,c=(a+1)/r*Math.PI,l=(h,u,d)=>[-Math.cos(h)*u,e-4+Math.sin(h)*(u*.45),d];for(const h of[-4,4])i.quad(l(o,t,h),l(c,t,h),l(c,t+n,h),l(o,t+n,h),s[a%2]);i.quad(l(o,t,-4),l(c,t,-4),l(c,t,4),l(o,t,4),9061416),i.quad(l(o,t+n,-4),l(c,t+n,-4),l(c,t+n,4),l(o,t+n,4),s[2])}return{parts:Je(i),radius:0,max:4}}function au(){const i=new ut,t=new ut;i.prism(0,0,-30,26,6,5,12,[15261904,13682872]),i.prism(0,0,26,32,6.6,6.6,12,[14209216,12630184],12103840),i.prism(0,0,32,36,3,.4,12,[12630184,11051152]);for(let e=0;e<6;e++){const n=e/6*Math.PI*2;t.box(Math.cos(n)*5.4,28,Math.sin(n)*5.4,.8,1.6,.8,16771232)}return{parts:Je(i,t),radius:0,max:6}}function cx(){const i=new ut;i.prism(0,0,0,1.4,.3,.25,5,5914150);const t=[[1,4.6,2.6],[3.2,7,2],[5.4,9.4,1.4]];for(const[e,n,s]of t){i.prism(0,0,e,n,s,0,8,[1989174,1526316]);const r=e+(n-e)*.45;i.prism(0,0,r,n+.05,s*.58,0,8,[16777215,14739700])}return{parts:Je(i),radius:1,max:300}}function lx(i){const t=new ut,e=i.range(10,13),n=9,s=3.4,r=3.2,a=i.pick([9065522,8014380,10117176]);t.box(0,s/2,0,e,s,n,[16052456,16777215]),t.box(0,s+r/2,0,e,r,n,[a,ir(a,1.15)]);for(let h=-e/2+1.6;h<e/2-1;h+=2.6)for(const[u,d]of[[1.8,3820122],[s+1.6,3820122]])t.box(h,u,n/2+.02,1,1.1,.06,d),t.box(h-.75,u,n/2+.04,.4,1.1,.06,12593706),t.box(h+.75,u,n/2+.04,.4,1.1,.06,12593706);t.box(0,s+.2,n/2+.8,e*.8,.2,1.6,a);for(let h=-e*.4;h<=e*.4;h+=.6)t.box(h,s+.75,n/2+1.55,.12,1,.12,ir(a,.8));t.box(0,s+1.25,n/2+1.55,e*.8,.12,.12,ir(a,.8));const o=s+r,c=o+3.6,l=1.2;for(const h of[-1,1])t.quad([h*(e/2+l),o-.4,-n/2-l],[h*(e/2+l),o-.4,n/2+l],[0,c,n/2+l],[0,c,-n/2-l],ir(a,.7)),t.quad([h*(e/2+l-.1),o-.15,-n/2-l],[h*(e/2+l-.1),o-.15,n/2+l],[0,c+.25,n/2+l],[0,c+.25,-n/2-l],16317439);for(const h of[-n/2,n/2])t.tri([-e/2,o,h],[e/2,o,h],[0,c,h],[a,a][0]);return t.box(e*.25,c,0,.9,2.4,.9,14209224),{parts:Je(t),radius:0,max:30}}function hx(){const i=new ut;return i.quad([-1.2,0,0],[1.4,0,0],[.6,1.1,0],[-.8,.9,0],16777215),i.quad([-.8,.9,0],[.6,1.1,0],[.6,1.1,-jt],[-.8,.9,-jt],16054527),i.quad([1.4,0,0],[.6,1.1,0],[.6,1.1,-jt],[1.4,0,-jt],14477044),i.quad([-1.2,0,0],[-.8,.9,0],[-.8,.9,-jt],[-1.2,0,-jt],15265528),{parts:Je(i),radius:0,max:400}}function ux(){const i=new ut;return i.box(0,0,0,3.2,2.6,2.4,[13642282,14694970]),i.box(0,.3,1.21,2.8,1.2,.02,9091288),i.box(0,.3,-1.21,2.8,1.2,.02,9091288),i.box(0,2.6,0,.2,2.6,.2,3815994),i.box(0,3.9,0,300,.12,.12,2763306),{parts:Je(i),radius:0,max:6}}function dx(i,t,e){const n=new ut,s=new ut,r=new ut,a=new ut,o=i.range(26,40),c=i.range(16,22),l=i.range(60,110);if(ie.modern)a.facadeBox(0,l/2,0,o,l,c,hr(i.pick([ye.OFFICE_WARM,ye.APARTMENT,ye.OFFICE_COOL])),14,14,[16777215,14207144],3813440,i.range(0,1));else{n.box(0,l/2,0,o,l,c,[3812928,4865616]);for(let u=6;u<l-4;u+=6)for(let d=-o/2+2;d<o/2-2;d+=3)i.chance(.55)&&s.box(d,u,c/2+.05,1.6,2,.05,i.pick([16771232,16774872,16765040]))}for(const u of[l*.33,l*.66,l])s.box(0,u,0,o+.4,.9,c+.4,16762954);n.box(0,5,0,o+14,10,c+10,[2760752,3812928]),s.box(0,10.4,0,o+14.4,.8,c+10.4,e),s.box(0,l+2,0,o*.7,.6,c*.7,e),n.box(0,l+7,c*.25,o*.8,9,.6,1052700),r.quad([-o*.38,l+3,c*.25+.32],[o*.38,l+3,c*.25+.32],[o*.38,l+11,c*.25+.32],[-o*.38,l+11,c*.25+.32],16777215,t),s.box(0,l+11.4,c*.25,o*.8,.5,.7,e);const h=Je(n,s,r);return a.empty||h.push({geo:a.build(),mat:"facadeLit"}),{parts:h,radius:0,max:40}}function fx(i,t,e,n){const s=new ut,r=new ut,a=new ut;s.box(0,n/2,-.4,1.4,n,1.4,2105392),s.box(0,n+5,-.3,12.6,10.6,.6,1052700),a.quad([-6,n,.05],[6,n,.05],[6,n+10,.05],[-6,n+10,.05],16777215,i);for(let o=0;o<=12;o++){const c=-6.3+o*1.05;r.box(c,n-.3,.1,.35,.35,.35,o%2?16777215:16769120),r.box(c,n+10.3,.1,.35,.35,.35,o%2?16769120:16777215)}for(let o=0;o<=10;o++)for(const c of[-6.3,6.3])r.box(c,n+o,.1,.35,.35,.35,o%2?16777215:16769120);return r.box(0,n-3,.1,9,1.2,.3,e),r.poly([[4.4,n-1.4,.1],[7.4,n-3,.1],[4.4,n-4.6,.1]],e),r.box(0,n+10.9,0,12.8,.4,.8,t),{parts:Je(s,r,a),radius:.9,max:40}}function px(i,t){const e=new ut,n=new ut,s=i.range(30,46),r=i.range(10,16),a=18;e.box(0,r/2,0,s,r,a,[2761270,3813446]),n.box(0,r*.55,a/2+.05,s-2,r*.3,.1,i.pick([16726666,4255999,16764992,16740400])),n.box(0,r+.3,0,s+.4,.6,a+.4,t),e.box(0,4,a/2+4,16,.6,8,16777215);for(let o=0;o<16;o++)n.box(-7.5+o,3.6,a/2+8,.3,.3,.3,o%2?16769120:16777215);return{parts:Je(e,n),radius:0,max:40}}function mx(i){const t=new ut,e=i.range(10,16),n=i.range(8,11),s=i.int(2,4),r=3.2,a=s*r;t.box(0,a/2,0,e,a,n,[16777215,16052458]);for(let h=0;h<s;h++){for(let u=-e/2+1.6;u<e/2-1;u+=2.8){const d=h*r+1.7;t.box(u,d,n/2+.03,1.1,1.6,.06,2767434),t.box(u-.8,d,n/2+.06,.45,1.6,.06,2783818),t.box(u+.8,d,n/2+.06,.45,1.6,.06,2783818)}h>0&&t.box(0,h*r+.2,n/2+.6,e*.5,.18,1.2,15788252)}const o=a+2.4,c=.6,l=[13130294,11554352];return t.quad([-e/2-c,a,n/2+c],[e/2+c,a,n/2+c],[e*.25,o,0],[-e*.25,o,0],l[0]),t.quad([e/2+c,a,-n/2-c],[-e/2-c,a,-n/2-c],[-e*.25,o,0],[e*.25,o,0],l[1]),t.tri([e/2+c,a,n/2+c],[e/2+c,a,-n/2-c],[e*.25,o,0],l[1]),t.tri([-e/2-c,a,-n/2-c],[-e/2-c,a,n/2+c],[-e*.25,o,0],l[0]),{parts:[{geo:t.build(),mat:"lit",tint:!0}],radius:0,max:60}}function gx(){const i=new ut;return i.prism(0,0,0,1,.25,.2,5,5914150),i.prism(0,0,.6,5,.6,1.1,8,[2379820,1851428]),i.prism(0,0,5,10.5,1.1,0,8,[2775602,1984040]),{parts:Je(i),radius:.8,max:260}}function xx(i){const t=new ut,e=i.range(18,34),n=e*.24,s=[[-n/2,0,e/2],[n/2,0,e/2],[n/2,0,-e*.25],[0,0,-e/2],[-n/2,0,-e*.25]],r=s.map(([a,,o])=>[a*1.08,2.4,o]);for(let a=0;a<s.length;a++){const o=(a+1)%s.length;t.quad(s[a],s[o],r[o],r[a],a===3||a===2?16053492:16777215)}return t.poly(r,14200968),t.box(0,3.6,e*.08,n*.75,2.4,e*.45,[16777215,15790320]),t.box(0,3.6,e*.08,n*.77,.8,e*.42,1714746),t.box(0,5.4,e*.12,n*.55,1.4,e*.25,[16777215,15790320]),t.box(0,.6,0,n*1.1,.4,e*.9,1718906),t.box(0,7.4,e*.1,.25,3,.25,13684944),{parts:Je(t),radius:0,max:40}}function _x(){const i=new ut;i.box(0,.75,-jt/2,.8,1.5,jt,[14207144,14997176]),i.box(0,1.6,-jt/2,1,.2,jt,[13154456,15787208]);for(let t=0;t<4;t++)i.box(.41,.4+t%2*.6,-.8-t*1.4,.02,.06,1.2,12101768);return{parts:Je(i),radius:0,max:360}}const Lo=15912868,ci=[13137994,12348994],aa=[14457438,13668438],Zh=[15251584,14462068],jh=[11557430,10505774],Mx=[1731240,1598112],oa=[14998732,14209216],ls={road:[9077384,8287868],line:16764992,edge:16777215,rumble:[16777215,13652016]},vx={id:"canyon",name:"GRAND CANYON",lines:["GRAND","CANYON"],night:!1,hemi:[11063551,14191184],plate:16777215,smoke:15255712,card:[12605482,16771232],music:"desert",stageNames:["ROUTE 66 DINER","PAINTED DESERT","CANYON RIM","HOOVER DAM","MONUMENT VALLEY"],fog:{color:Lo,near:180,far:1200},ambient:{color:16773344,intensity:1.85},sun:{color:16769720,intensity:2.5,dir:[.6,.9,-.6]},startTime:60,extendTime:40,shadow:6965818,trafficColors:[14209216,9054752,2771594,16777215,4876858,13146688,6974066],trafficCount:14,walls:!1,offroadLimit:Z+26,build(i){const t=new jn(1966),e=J=>J,n=[pe(ls,[{w:4,c:ci,tex:ot.DIRT},{w:600,c:aa,tex:ot.SAND}],[{w:4,c:ci,tex:ot.DIRT},{w:600,c:aa,tex:ot.SAND}]),pe(ls,[{w:2,c:ci,tex:ot.DIRT},{w:24,c:[12101776,11312260],tex:ot.PAVING},{w:600,c:aa,tex:ot.SAND}],[{w:2,c:ci,tex:ot.DIRT},{w:24,c:[12101776,11312260],tex:ot.PAVING},{w:600,c:aa,tex:ot.SAND}]),pe(ls,[{w:2.5,c:ci,tex:ot.DIRT},{w:1.5,dy:16,c:jh,tex:ot.DIRT},{w:600,dy:4,c:[13135934,12347448],tex:ot.DIRT}],[{w:3,c:ci,tex:ot.DIRT},{w:6,abs:0,c:jh,tex:ot.DIRT},{w:600,abs:0,c:[11031604,10243118],tex:ot.DIRT}]),pe(ls,[{w:1,c:oa,tex:ot.CONCRETE},{w:0,dy:1.1,c:[15788248,15261904]},{w:.8,c:oa},{w:40,abs:-30,c:[13682872,12893356],tex:ot.CONCRETE},{w:600,abs:-30,c:[2783850,2519134],tex:e(ot.BAY)}],[{w:1,c:oa,tex:ot.CONCRETE},{w:0,dy:1.1,c:[15788248,15261904]},{w:.8,c:oa},{w:0,abs:34,c:[13156528,12367012]},{w:600,abs:34,c:Mx,tex:ot.BAY}]),pe(ls,[{w:4,c:ci,tex:ot.DIRT},{w:600,c:Zh,tex:ot.SAND}],[{w:4,c:ci,tex:ot.DIRT},{w:600,c:Zh,tex:ot.SAND}]),pe(ls,[{w:1.2,dy:.3,c:[10128002,9338486]},{w:0,dy:5,c:[10508346,9719348]},{w:0,dy:.8,c:[16765024,6967360]},{w:1.5,dy:2.8,c:[9062960,8406060]}],[{w:1.2,dy:.3,c:[10128002,9338486]},{w:0,dy:5,c:[10508346,9719348]},{w:0,dy:.8,c:[16765024,6967360]},{w:1.5,dy:2.8,c:[9062960,8406060]}],[5911590,5385762])],s=(J,at)=>at?5:J==="diner"?1:J==="rim"?2:J==="dam"?3:J==="valley"?4:0,r=new Ts(s,6);r.zone="diner",r.straight(30),r.stageFrom({zone:"diner",length:380,curvy:.55,hilly:.2,yMin:5,yMax:12},t),r.stageFrom({zone:"painted",length:400,curvy:.7,hilly:.6,yMin:5,yMax:34},t),r.stageFrom({zone:"rim",length:420,curvy:1,hilly:.5,yMin:60,yMax:90,tunnels:.14},t),r.stageFrom({zone:"dam",length:300,curvy:.3,hilly:.02,yMin:40,yMax:40},t),r.stageFrom({zone:"valley",length:440,curvy:.6,hilly:.35,yMin:5,yMax:22},t);const a=r.finish(260),o=new Ds,c=o.add(su()),l=o.add(ru()),h=[0,1,2].map(()=>o.add(ax(t))),u=o.add(ox()),d=o.add(au()),f=o.add(nl()),g=o.add($0()),_=o.add(Ua()),m=o.add(As(9,16773312)),p=o.add(il(2,t)),x=o.add(dr(10508346,16764992,7.9)),y=[{bg:16777215,fg:14690858,text:"DINER"},{bg:1718922,fg:16769088,text:"GAS"},{bg:16777215,fg:1735226,text:"MOTEL"},{bg:14690858,fg:16777215,text:"CAFE"},{bg:16769088,fg:1710618,text:"TRADING POST"}].map(J=>o.add(K0(i.add(J,2,1)))),v=[{bg:16777215,fg:1710618,text:"ROUTE 66",sub:"HISTORIC HIGHWAY",border:1710618},{bg:14690858,fg:16777215,text:"LAST GAS",sub:"80 MILES",border:16777215},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:1731256,fg:16777215,text:"CANYON",sub:"VIEWPOINT 5 MI",border:16769088},{bg:16747040,fg:16777215,text:"COLD",sub:"ROOT BEER",border:16777215}].map(J=>o.add(ur(i.add(J,2,2),9,4.5,9071178,15788248))),T=[{bg:1735226,fg:16777215,text:"FLAGSTAFF",sub:"62",border:16777215},{bg:1735226,fg:16777215,text:"LAS VEGAS",sub:"104",border:16777215},{bg:16777215,fg:1710618,text:"US",sub:"66",border:1710618}].map(J=>o.add(Na(i.add(J,1,1)))),E=o.add(Ee(i.add({bg:16777215,fg:12597274,text:"START",stripes:1710618},4,1),14207152,12597274)),w=o.add(Ee(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),14207152,1727200)),C=o.add(Ee(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),14207152,1710618)),b=o.add(Ee(i.add({bg:9058842,fg:16771232,text:"GRAND CANYON",border:16771232},4,1),6965802,9058842,16771232)),S=o.add(_n(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),D=o.add(_n(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),W=o.add(xi(!0)),B=o.add(xi(!1)),V=Array.from({length:16},(J,at)=>o.add(rl(i.add({bg:1735226,fg:16777215,text:String(at+1),border:16777215},1,1)))),et=Ls,U=[et.f150,et.cherokee,et.caprice,et.volvo240,et.golf,et.w124].map(J=>o.add(Nn(J))).concat([o.add(gi(12597274)),o.add(gi(1727160)),o.add(ki(3836506))]),rt=a.segs;for(let J=10;J<rt.length;J++){const at=rt[J],j=at.props;if(at.tunnel){rt[J-1].tunnel||j.push({t:x,x:0});continue}const Tt=at.zone;J%3===0&&Tt!=="dam"&&j.push({t:W,x:Z+2.6},{t:B,x:-13.6}),J%167===100&&j.push({t:V[Math.min(V.length-1,Math.floor(J*6/1e3))],x:Z+3.6,r:-.3}),Math.abs(at.curve)>.0016&&J%5===0&&Tt!=="dam"&&j.push(at.curve>0?{t:S,x:-16.5,r:.15}:{t:D,x:Z+5.5,r:-.15});const K=(ft,yt)=>{J%4===0&&t.chance(ft)&&j.push({t:c,x:t.sign()*(Z+t.range(yt,yt+30)),s:t.range(.8,1.3),r:t.range(0,6)}),J%6===1&&t.chance(ft*.7)&&j.push({t:l,x:t.sign()*(Z+t.range(yt,yt+40)),s:t.range(.8,1.4),r:t.range(0,6)}),J%7===3&&t.chance(ft)&&j.push({t:g,x:t.sign()*(Z+t.range(5,30)),s:t.range(.3,.6),sy:.6,r:t.range(0,6),tint:12099680}),J%19===0&&t.chance(.5)&&j.push({t:f,x:t.sign()*(Z+t.range(10,40)),s:t.range(.8,2),r:t.range(0,6),tint:16756880})};if(Tt==="diner")J%18===6&&t.chance(.8)&&j.push({t:t.pick(y),x:-(Z+t.range(14,18)),tint:t.pick([16777215,16771272,14217471]),r:.4}),J%18===15&&t.chance(.8)&&j.push({t:t.pick(y),x:Z+t.range(14,18),tint:t.pick([16777215,16771272,14217471]),r:-.4}),J%60===30&&j.push({t:p,x:t.sign()*(Z+t.range(40,60)),tint:t.pick([16777215,16773336]),r:t.range(-.3,.3)}),J%9===0&&j.push({t:m,x:Z+3,r:0}),J%45===20&&j.push({t:t.pick(v),x:(J%90===20?-1:1)*(Z+12),r:J%90===20?.35:-.35}),K(.25,30);else if(Tt==="painted"||Tt==="valley"){if(K(Tt==="valley"?.45:.6,6),J%30===10&&t.chance(.85)){const ft=Tt==="valley"?t.range(60,180):t.range(140,320);j.push({t:t.pick(h),x:t.sign()*(Z+ft),s:t.range(.8,1.4),sy:t.range(.8,1.3),r:t.range(0,6)})}J%70===35&&j.push({t:t.pick(v),x:(J%140===35?-1:1)*(Z+12),r:J%140===35?.35:-.35}),J%120===60&&j.push({t:t.pick(T),x:Z+3.4,r:-.2})}else Tt==="rim"?(J%2===0&&j.push({t:_,x:Z+2.4}),J%5===0&&t.chance(.5)&&j.push({t:f,x:-(Z+t.range(6,18)),y:t.range(14,18),s:t.range(.6,1.4),r:t.range(0,6),tint:16752768}),J%8===2&&t.chance(.4)&&j.push({t:c,x:-(Z+t.range(8,30)),y:16,s:t.range(.8,1.2),r:t.range(0,6)}),J%26===13&&t.chance(.7)&&j.push({t:t.pick(h),x:Z+t.range(80,260),y:0,abs:!0,s:t.range(.9,1.6),sy:t.range(1.2,2),r:t.range(0,6)})):Tt==="dam"&&(J%8===0&&j.push({t:m,x:Z+2.6,r:0}),J%8===4&&j.push({t:m,x:-13.6,r:Math.PI}),J%70===25&&j.push({t:d,x:Z+t.range(40,70),y:34,abs:!0}))}for(let J=1;J<a.stageStarts.length;J++)rt[a.stageStarts[J]+4].props.push({t:w,x:0});rt[8].props.push({t:E,x:0}),rt[a.stageStarts[2]+30].props.push({t:b,x:0}),rt[a.stageStarts[4]+180].props.push({t:u,x:0}),rt[a.goalSeg].props.push({t:C,x:0});const k=new Rs;k.addLayer(Cs([[0,16769712],[1.5,16764044],[3.5,16298106],[6,14203056],[9,11061476],[14,7910632],[22,5019872],[35,2916052],[90,1727672]],Lo),0);const tt=Is(2500,-.7,9,150,[[1.5,16771264],[1.2,16767136],[1,16773312],[.7,16776168]],20);return k.addLayer(tt,1),k.sun={obj:tt,local:Oa(2500,-.7,9)},k.addLayer(Bi(t,2350,8,[16777215,16771280,14723216]),.8),k.addLayer(Dn(t,2250,10127032,220,()=>1,void 0,30),1),k.addLayer(q2(t,2100,[10109992,12081210,13661258,11557434,14715992],170,J=>Math.sin(J*3)>-.6?1:.4,26),1),k.addLayer(Ps(1900,Lo),0),{track:a,profiles:n,props:o.defs,backdrop:k,trafficTypes:U,gateType:C}}},Do=14673652,hs=[16185855,15265528],li=[14212840,13423326],yx=[13624562,12770542],bx=[9079960,8158858],js={road:[7764095,6974580],line:16777215,edge:16777215,rumble:[13642282,16777215]},Sx={id:"alps",name:"SWISS ALPS",lines:["SWISS","ALPS"],night:!1,hemi:[13162751,15265528],plate:16777215,smoke:16777215,card:[3828408,16777215],music:"alps",stageNames:["LAKESIDE VILLAGE","PINE FOREST","MOUNTAIN PASS","AVALANCHE GALLERY","GLACIER SUMMIT"],fog:{color:Do,near:160,far:1150},ambient:{color:15791359,intensity:1.8},sun:{color:16769256,intensity:2.2,dir:[.5,.8,-.7]},startTime:62,extendTime:42,shadow:8029856,trafficColors:[12593706,2771594,16777215,2779722,14196784,5921378,1710622],trafficCount:14,walls:!1,offroadLimit:Z+22,build(i){var k;const t=new jn(1991),e=[pe(js,[{w:3,c:li,tex:ot.SAND},{w:600,c:hs,tex:ot.SAND}],[{w:3,c:li,tex:ot.SAND},{w:10,dy:-1.2,c:hs,tex:ot.SAND},{w:600,dy:0,c:yx,tex:ot.PLAIN}]),pe(js,[{w:3,c:li,tex:ot.SAND},{w:600,c:hs,tex:ot.SAND}],[{w:3,c:li,tex:ot.SAND},{w:600,c:hs,tex:ot.SAND}]),pe(js,[{w:2,c:li,tex:ot.SAND},{w:3,dy:14,c:bx,tex:ot.CONCRETE},{w:600,dy:10,c:hs,tex:ot.SAND}],[{w:3,c:li,tex:ot.SAND},{w:30,abs:0,c:[15002356,14213356],tex:ot.SAND},{w:600,abs:0,c:hs,tex:ot.SAND}]),pe(js,[{w:1,dy:.3,c:[10527402,10001058]},{w:0,dy:6.5,c:[13159120,12369604]},{w:1.2,dy:1.2,c:[11580088,11053744]}],[{w:1,dy:.3,c:[10527402,10001058]},{w:0,dy:6.5,c:[15266047,9079956]},{w:1.2,dy:1.2,c:[11580088,11053744]}],[8027268,7500924]),pe(js,[{w:3,c:li,tex:ot.SAND},{w:600,dy:3,c:[14872828,13953272],tex:ot.SAND}],[{w:3,c:li,tex:ot.SAND},{w:600,dy:-6,c:[14872828,13953272],tex:ot.SAND}])],n=(tt,J)=>J?3:tt==="lake"?0:tt==="pass"?2:tt==="summit"?4:1,s=new Ts(n,10);s.zone="lake",s.straight(30),s.stageFrom({zone:"lake",length:380,curvy:.6,hilly:.1,yMin:8,yMax:12},t),s.stageFrom({zone:"forest",length:400,curvy:.8,hilly:.6,yMin:10,yMax:45},t),s.stageFrom({zone:"pass",length:420,curvy:1,hilly:1,yMin:45,yMax:110},t),s.stageFrom({zone:"gallery",length:380,curvy:.8,hilly:.4,yMin:85,yMax:115,tunnels:.45},t),s.stageFrom({zone:"summit",length:420,curvy:.7,hilly:.5,yMin:100,yMax:140},t);const r=s.finish(260),a=new Ds,o=a.add(cx()),c=[0,1,2].map(()=>a.add(lx(t))),l=a.add(hx()),h=a.add(ux()),u=a.add(nl()),d=a.add(Ua(15263976,6974066)),f=a.add(As(8,16774352)),g=a.add(dr(10132644,16764992,8)),_=a.add(sl()),m=[{bg:13642282,fg:16777215,text:"ALPEN",sub:"CHOCOLAT",border:16777215},{bg:16777215,fg:13642282,text:"SKI",sub:"SCHOOL",border:13642282},{bg:1727160,fg:16777215,text:"FONDUE",sub:"STUBE",border:16769088},{bg:16769088,fg:13642282,text:"TURBO",sub:"MOTOR OIL",border:13642282},{bg:2783818,fg:16777215,text:"HOTEL",sub:"EDELWEISS",border:16777215}].map(tt=>a.add(ur(i.add(tt,2,2),9,4.5,6965802,15788248))),p=[{bg:1727160,fg:16777215,text:"ZERMATT",sub:"24",border:16777215},{bg:1727160,fg:16777215,text:"ST. MORITZ",sub:"58",border:16777215},{bg:1735226,fg:16777215,text:"PASS",sub:"2106 M",border:16777215}].map(tt=>a.add(Na(i.add(tt,1,1)))),x=a.add(Ee(i.add({bg:13642282,fg:16777215,text:"START",border:16777215},4,1),9067058,13642282)),y=a.add(Ee(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),9067058,1727200)),v=a.add(Ee(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),9067058,1710618)),T=a.add(Ee(i.add({bg:13642282,fg:16777215,text:"WILLKOMMEN",border:16777215},4,1),9067058,13642282,16777215)),E=a.add(_n(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),w=a.add(_n(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),C=a.add(xi(!0)),b=a.add(xi(!1)),S=Array.from({length:16},(tt,J)=>a.add(rl(i.add({bg:1727160,fg:16777215,text:String(J+1),border:16777215},1,1)))),D=a.add(zi(0)),W=Ls,B=[W.golf,W.volvo240,W.w124,W.civic,W.cherokee].map(tt=>a.add(Nn(tt))).concat([a.add(gi(13642282)),a.add(ki(16764992)),a.add(ki(16764992))]),V=[13642282,1727160,16769088,2787930,16743088,16777215],et=r.segs;for(let tt=10;tt<et.length;tt++){const J=et[tt],at=J.props;if(J.tunnel){(!et[tt-1].tunnel||!((k=et[tt+1])!=null&&k.tunnel))&&at.push({t:g,x:0,r:et[tt-1].tunnel?Math.PI:0});continue}const j=J.zone;tt%3===0&&at.push({t:C,x:Z+2.6},{t:b,x:-13.6}),tt%2===0&&j!=="lake"&&at.push({t:l,x:Z+3.8},{t:l,x:-14.8,r:Math.PI}),tt%167===100&&at.push({t:S[Math.min(S.length-1,Math.floor(tt*6/1e3))],x:Z+3.6,r:-.3}),Math.abs(J.curve)>.0016&&tt%5===0&&at.push(J.curve>0?{t:E,x:-16.5,r:.15}:{t:w,x:Z+5.5,r:-.15});const Tt=(K,ft)=>{for(const yt of ft)tt%2===0&&t.chance(K)&&at.push({t:o,x:yt*(Z+t.range(7,60)),s:t.range(.8,1.6),r:t.range(0,6)})};j==="lake"?(Tt(.35,[-1]),tt%14===3&&t.chance(.8)&&at.push({t:t.pick(c),x:-(Z+t.range(16,40)),r:t.range(.2,.6)}),tt%9===0&&at.push({t:f,x:-14,r:Math.PI}),tt%16===8&&at.push({t:_,x:Z+4.5,tint:t.pick([13642282,16777215])}),tt%5===2&&t.chance(.4)&&at.push({t:D,x:-(Z+t.range(2,4)),r:t.range(0,6),tint:t.pick(V)}),tt%50===25&&at.push({t:t.pick(m),x:-23,r:.35})):j==="forest"?(Tt(.75,[-1,1]),tt%30===12&&t.chance(.6)&&at.push({t:t.pick(c),x:t.sign()*(Z+t.range(20,50)),r:t.range(-.6,.6)}),tt%60===30&&at.push({t:t.pick(m),x:(tt%120===30?-1:1)*(Z+12),r:tt%120===30?.35:-.35}),tt%120===60&&at.push({t:t.pick(p),x:Z+3.4,r:-.2})):j==="pass"||j==="gallery"?(tt%2===0&&at.push({t:d,x:Z+2.4}),tt%6===0&&t.chance(.5)&&at.push({t:o,x:-(Z+t.range(8,40)),y:j==="pass"?14:0,s:t.range(.7,1.2),r:t.range(0,6)}),tt%7===3&&t.chance(.5)&&at.push({t:u,x:-(Z+t.range(5,9)),s:t.range(.6,1.4),r:t.range(0,6),tint:11580616}),tt%9===0&&t.chance(.6)&&at.push({t:o,x:Z+t.range(30,160),y:0,abs:!0,s:t.range(1,1.8),r:t.range(0,6)}),tt%90===45&&at.push({t:h,x:t.range(-40,40),y:t.range(40,60)}),tt%120===60&&at.push({t:t.pick(p),x:Z+3.4,r:-.2})):j==="summit"&&(tt%2===0&&Math.abs(J.curve)>.001&&at.push({t:d,x:Z+2.4},{t:d,x:-13.4}),tt%11===0&&t.chance(.5)&&at.push({t:u,x:t.sign()*(Z+t.range(8,40)),s:t.range(.8,2.2),r:t.range(0,6),tint:13160676}),tt%80===40&&at.push({t:h,x:t.range(-40,40),y:t.range(30,50)}),tt%16===8&&at.push({t:_,x:t.sign()*(Z+5),tint:t.pick([13642282,16777215])}))}for(let tt=1;tt<r.stageStarts.length;tt++)et[r.stageStarts[tt]+4].props.push({t:y,x:0});et[8].props.push({t:x,x:0}),et[60].props.push({t:T,x:0}),et[r.goalSeg].props.push({t:v,x:0});const U=new Rs;U.addLayer(Cs([[0,16769248],[1.5,16763088],[3.5,15778008],[6,13682924],[10,11060464],[16,8696044],[26,6067424],[40,3832016],[90,2119864]],Do),0);const rt=Is(2500,.9,4,150,[[1.5,16767192],[1.2,16763064],[1,16773336],[.7,16776432]],20);return U.addLayer(rt,1),U.sun={obj:rt,local:Oa(2500,.9,4)},U.addLayer(Bi(t,2350,10,[16777215,16773364,14207200]),.8),U.addLayer(Dn(t,2250,9083588,480,()=>1,16777215,34,[8,20]),1),U.addLayer(Dn(t,2100,6978216,300,tt=>Math.cos(tt*2)>-.3?1:.5,16054527,30),1),U.addLayer(Dn(t,1990,2775624,70,()=>1,void 0,240,[1.2,3.5]),1),U.addLayer(Ps(1900,Do),0),{track:r,profiles:e,props:a.defs,backdrop:U,trafficTypes:B,gateType:v}}},No=2366522,Jh=[6972536,6183532],Qh=[3814472,3419714],t0=[4864584,4338751],ca=[9078422,8288906],la={road:[4079178,3552834],line:15790320,edge:15790320,rumble:[5921384,5263452]},hi=[16726666,4255999,16769088,16740400,8453984,12607743],Ex={id:"vegas",name:"LAS VEGAS STRIP",lines:["LAS VEGAS","STRIP"],night:!0,hemi:[10121440,3809344],plate:16777215,smoke:13154520,card:[1706538,16769088],music:"vegas",stageNames:["FREMONT STREET","THE STRIP","CASINO ROW","DESERT HIGHWAY","HOOVER LIGHTS"],fog:{color:No,near:150,far:1150},ambient:{color:13681919,intensity:1.75},sun:{color:16763104,intensity:1.5,dir:[.4,1,.8]},startTime:60,extendTime:40,shadow:2236460,trafficColors:[16777215,14692400,2763312,16769088,4235519,13656319,10132136],trafficCount:18,walls:!1,offroadLimit:Z+18,build(i){const t=new jn(1955),e=[pe(la,[{w:.3,dy:.2,c:[11579580,11053236]},{w:6,c:Jh,tex:ot.PAVING},{w:600,c:Qh,tex:ot.PAVING}],[{w:.3,dy:.2,c:[11579580,11053236]},{w:6,c:Jh,tex:ot.PAVING},{w:600,c:Qh,tex:ot.PAVING}]),pe(la,[{w:3,c:[5917264,5391432],tex:ot.DIRT},{w:600,c:t0,tex:ot.SAND}],[{w:3,c:[5917264,5391432],tex:ot.DIRT},{w:600,c:t0,tex:ot.SAND}]),pe(la,[{w:1,c:ca,tex:ot.CONCRETE},{w:0,dy:1.1,c:[11052212,10262696]},{w:.8,c:ca},{w:40,abs:-20,c:[6973046,6446702],tex:ot.CONCRETE},{w:600,abs:-20,c:[1055280,923692],tex:ot.BAY}],[{w:1,c:ca,tex:ot.CONCRETE},{w:0,dy:1.1,c:[11052212,10262696]},{w:.8,c:ca},{w:0,abs:18,c:[5920358,5394014]},{w:600,abs:18,c:[924736,792634],tex:ot.BAY}]),pe(la,[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[3420716,3025960])],n=(U,rt)=>rt?3:U==="desert"?1:U==="hoover"?2:0,s=new Ts(n,6);s.zone="fremont",s.straight(30),s.stageFrom({zone:"fremont",length:360,curvy:.5,hilly:.05,yMin:5,yMax:7},t),s.stageFrom({zone:"strip",length:440,curvy:.45,hilly:.05,yMin:5,yMax:8},t),s.stageFrom({zone:"casino",length:400,curvy:.7,hilly:.1,yMin:5,yMax:10},t),s.stageFrom({zone:"desert",length:420,curvy:.8,hilly:.6,yMin:5,yMax:40},t),s.stageFrom({zone:"hoover",length:380,curvy:.6,hilly:.2,yMin:26,yMax:40,tunnels:.12},t);const r=s.finish(260),a=new Ds,c=[{bg:1052700,fg:16769088,text:"LUCKY 7",border:16726666},{bg:1052700,fg:4255999,text:"NEON",sub:"PALACE",border:4255999},{bg:1052700,fg:16726666,text:"DESERT",sub:"ROSE",border:16769088},{bg:1052700,fg:16769088,text:"GOLDEN",sub:"STAR",border:16769088},{bg:1052700,fg:8453984,text:"JACKPOT",border:8453984},{bg:1052700,fg:16777215,text:"SILVER",sub:"SPUR",border:12607743}].map((U,rt)=>a.add(dx(t,i.add(U,2,1),hi[rt%hi.length]))),h=[{bg:1052700,fg:16726666,text:"CASINO",border:16726666},{bg:1052700,fg:16769088,text:"SLOTS",sub:"24 HOURS",border:16769088},{bg:1052700,fg:4255999,text:"BUFFET",sub:"$4.99",border:4255999},{bg:1052700,fg:16777215,text:"SHOWS",sub:"TONIGHT",border:16740400},{bg:1052700,fg:16743088,text:"WEDDING",sub:"CHAPEL",border:16743088},{bg:1052700,fg:8453984,text:"MOTEL",sub:"VACANCY",border:8453984}].map((U,rt)=>a.add(fx(i.add(U,2,2),hi[rt%hi.length],hi[(rt+2)%hi.length],t.range(10,18)))),u=[0,1,2].map(U=>a.add(px(t,hi[U*2%hi.length]))),d=a.add(el()),f=a.add(As(10,16765056,9079448,4,!0)),g=a.add(su()),_=a.add(ru()),m=a.add(au()),p=[a.add(zi(0)),a.add(zi(1))],x=a.add(dr(6974072,16752688,7.9)),y=a.add(tu(16756784)),v=[{bg:1052700,fg:16769088,text:"WIN BIG",sub:"LOOSE SLOTS",border:16769088},{bg:14690858,fg:16777215,text:"LIVE",sub:"ELVIS SHOW",border:16777215},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:1727160,fg:16777215,text:"HOOVER DAM",sub:"TOURS",border:16769088}].map(U=>a.add(ur(i.add(U,2,2),9,4.5))),T=a.add(Ee(i.add({bg:16777215,fg:14690858,text:"WELCOME TO LAS VEGAS",border:16769088},4,1),14211296,16726666,16769088)),E=a.add(Ee(i.add({bg:1052700,fg:16769088,text:"START",border:16769088},4,1),10132136,16726666,16769088)),w=a.add(Ee(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),10132136,1727200,16769088)),C=a.add(Ee(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),10132136,1710618,16726666)),b=a.add(_n(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),S=a.add(_n(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),D=Ls,W=[D.caprice,D.crown,D.cherokee,D.w124,D.f150].map(U=>a.add(Nn(U,{night:!0}))).concat([a.add(Nn(D.caprice,{taxi:!0,night:!0})),a.add(Nn(D.caprice,{taxi:!0,night:!0})),a.add(ki(16726666)),a.add(gi(2763312))]),B=[16730730,2789631,16769088,16777215,4247712,12607743],V=r.segs;for(let U=10;U<V.length;U++){const rt=V[U],k=rt.props;if(rt.tunnel){V[U-1].tunnel||k.push({t:x,x:0});continue}const tt=rt.zone;if(Math.abs(rt.curve)>.0016&&U%5===0&&tt!=="strip"&&k.push(rt.curve>0?{t:b,x:-16.5,r:.15}:{t:S,x:Z+5.5,r:-.15}),tt==="fremont"||tt==="strip"||tt==="casino"){U%7===0&&k.push({t:f,x:Z+2.4,r:0}),U%7===3&&k.push({t:f,x:-13.4,r:Math.PI}),U%6===1&&k.push({t:d,x:t.sign()*(Z+t.range(4,6)),s:t.range(1,1.3),r:t.range(0,6)}),U%4===2&&t.chance(tt==="fremont"?.6:.35)&&k.push({t:t.pick(p),x:t.sign()*(Z+t.range(2,5)),r:t.range(0,6),tint:t.pick(B)});const J=tt==="strip"?.7:tt==="casino"?.55:.3;U%24===0&&t.chance(J)&&k.push({t:t.pick(c),x:-(Z+t.range(45,90)),r:t.range(.1,.4)}),U%24===12&&t.chance(J)&&k.push({t:t.pick(c),x:Z+t.range(45,90),r:-t.range(.1,.4)}),U%10===4&&t.chance(.75)&&k.push({t:t.pick(h),x:-(Z+t.range(9,14)),r:.45}),U%10===9&&t.chance(.75)&&k.push({t:t.pick(h),x:Z+t.range(9,14),r:-.45}),U%16===6&&t.chance(.7)&&k.push({t:t.pick(u),x:t.sign()*(Z+t.range(26,34)),r:t.range(-.3,.3)})}else tt==="desert"?(U%2===0&&k.push({t:y,x:Z+2.6,y:.4},{t:y,x:-13.6,y:.4}),U%4===0&&t.chance(.5)&&k.push({t:g,x:t.sign()*(Z+t.range(6,40)),s:t.range(.8,1.3),r:t.range(0,6),tint:10132152}),U%6===3&&t.chance(.4)&&k.push({t:_,x:t.sign()*(Z+t.range(8,50)),s:t.range(.8,1.3),r:t.range(0,6),tint:10132152}),U%60===30&&k.push({t:t.pick(v),x:(U%120===30?-1:1)*(Z+12),r:U%120===30?.35:-.35}),U%90===45&&k.push({t:t.pick(h),x:Z+14,r:-.4})):tt==="hoover"&&(U%6===0&&k.push({t:f,x:Z+2.4,r:0}),U%6===3&&k.push({t:f,x:-13.4,r:Math.PI}),U%70===25&&k.push({t:m,x:Z+t.range(40,70),y:18,abs:!0}))}for(let U=1;U<r.stageStarts.length;U++)V[r.stageStarts[U]+4].props.push({t:w,x:0});V[8].props.push({t:E,x:0}),V[r.stageStarts[1]+20].props.push({t:T,x:0}),V[r.goalSeg].props.push({t:C,x:0});const et=new Rs;return et.addLayer(Cs([[0,12606106],[1.5,10111638],[3.5,6961802],[6,4599930],[10,3023466],[18,1841240],[30,1052224],[90,328990]],No),0),et.addLayer(eu(t,340),.3),et.addLayer(Is(2500,.8,22,60,[[1.6,4864634],[1.3,9075370],[1,16774872],[.8,16777198]],16),1),et.addLayer(Bi(t,2380,6,[6961792,4860518,13654680],-Math.PI,Math.PI,[5,14]),.7),et.addLayer(Dn(t,2250,2761284,200,()=>1,void 0,34),1),et.addLayer(Fa(t,2050,[1709616,2235450,2761284],[16769120,16726666,4255999,16777215],170,U=>{const rt=Math.atan2(Math.sin(U),Math.cos(U));return Math.abs(rt)<1.2?1:0},.9,.5),1),et.addLayer(Ps(1900,No),0),{track:r,profiles:e,props:a.defs,backdrop:et,trafficTypes:W,gateType:C}}},Uo=13493490,Oo=[1341640,1208512],Ri=[15260868,14471352],e0=[5941322,5282882],Fo=[14207136,13417620],n0=[9083482,8293970],Js={road:[9342616,8553100],line:16777215,edge:16777215,rumble:[14690858,16777215]},wx={id:"monaco",name:"MONACO RIVIERA",lines:["MONACO","RIVIERA"],night:!1,hemi:[11065599,14207136],plate:16777215,smoke:16777215,card:[1735368,16777215],music:"riviera",stageNames:["HARBOUR FRONT","CASINO SQUARE","HARBOUR TUNNEL","CORNICHE CLIFFS","CAP MARTIN"],fog:{color:Uo,near:170,far:1180},ambient:{color:16777215,intensity:1.9},sun:{color:16774368,intensity:2.4,dir:[-.6,1,.5]},startTime:60,extendTime:40,shadow:6052966,trafficColors:[16777215,14161944,1718922,16769088,2763310,12632264,2783818],trafficCount:16,walls:!1,offroadLimit:Z+14,build(i){const t=new jn(1929),e=[pe(Js,[{w:.3,dy:.2,c:[15790320,15263976]},{w:7,c:Ri,tex:ot.PAVING},{w:600,c:[14207152,13417636],tex:ot.PAVING}],[{w:.3,dy:.2,c:[15790320,15263976]},{w:10,c:Ri,tex:ot.PAVING},{w:0,abs:0,c:[13155492,12365976]},{w:600,abs:0,c:Oo,tex:ot.SEA}]),pe(Js,[{w:.3,dy:.2,c:[15790320,15263976]},{w:6,c:Ri,tex:ot.PAVING},{w:600,c:e0,tex:ot.GRASS}],[{w:.3,dy:.2,c:[15790320,15263976]},{w:6,c:Ri,tex:ot.PAVING},{w:600,c:e0,tex:ot.GRASS}]),pe(Js,[{w:1.2,dy:.3,c:[12105920,11579576]},{w:0,dy:5,c:[15790320,15000804]},{w:0,dy:.8,c:[16773312,9079440]},{w:1.5,dy:2.8,c:[14211292,13684948]}],[{w:1.2,dy:.3,c:[12105920,11579576]},{w:0,dy:5,c:[15790320,15000804]},{w:0,dy:.8,c:[16773312,9079440]},{w:1.5,dy:2.8,c:[14211292,13684948]}],[6974066,6447722]),pe(Js,[{w:2,c:Fo,tex:ot.DIRT},{w:2,dy:13,c:Fo,tex:ot.DIRT},{w:600,dy:8,c:n0,tex:ot.GRASS}],[{w:2,c:Ri,tex:ot.PAVING},{w:8,abs:0,c:Fo,tex:ot.DIRT},{w:4,abs:0,c:[16777215,14742783],tex:ot.FOAM},{w:600,abs:0,c:Oo,tex:ot.SEA}]),pe(Js,[{w:2,c:Ri,tex:ot.PAVING},{w:600,dy:6,c:n0,tex:ot.GRASS}],[{w:2,c:Ri,tex:ot.PAVING},{w:14,abs:0,c:[13285514,12496e3],tex:ot.SAND},{w:600,abs:0,c:Oo,tex:ot.SEA}])],n=(j,Tt)=>Tt?2:j==="harbour"?0:j==="square"?1:j==="corniche"?3:4,s=new Ts(n,3);s.zone="harbour",s.straight(30),s.stageFrom({zone:"harbour",length:380,curvy:.75,hilly:.05,yMin:3,yMax:4},t),s.stageFrom({zone:"square",length:380,curvy:.9,hilly:.5,yMin:4,yMax:22},t),s.stageFrom({zone:"tunnel",length:300,curvy:.6,hilly:.1,yMin:4,yMax:8,tunnels:.9,tunnelZone:"tunnel"},t),s.stageFrom({zone:"corniche",length:440,curvy:1,hilly:.6,yMin:40,yMax:80},t),s.stageFrom({zone:"cap",length:420,curvy:.75,hilly:.3,yMin:18,yMax:34},t);const r=s.finish(260),a=new Ds,o=[0,1,2,3].map(()=>a.add(mx(t))),c=a.add(gx()),l=[0,1,2].map(()=>a.add(xx(t))),h=a.add(_x()),u=a.add(el()),d=a.add(j0()),f=a.add(J0()),g=[0,1].map(j=>a.add(il(j,t))),_=a.add(As(7,16774336,2767402,2)),m=a.add(Ua()),p=a.add(sl()),x=a.add(Z0()),y=a.add(Q0(t)),v=[a.add(zi(0)),a.add(zi(1))],T=a.add(dr(14735556,14690858,7.9)),E=[{bg:16777215,fg:14690858,text:"GELATO",sub:"ARTIGIANALE",border:14690858},{bg:1735368,fg:16777215,text:"RIVIERA",sub:"YACHT CLUB",border:16777215},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:14690858,fg:16777215,text:"GRAND",sub:"PRIX 86",border:16777215},{bg:2783818,fg:16777215,text:"HOTEL",sub:"DE PARIS",border:16769088}].map(j=>a.add(ur(i.add(j,2,2),9,4.5))),w=[{bg:1727160,fg:16777215,text:"NICE",sub:"18",border:16777215},{bg:1727160,fg:16777215,text:"MENTON",sub:"9",border:16777215},{bg:16777215,fg:1710618,text:"ITALIA",sub:"12",border:14690858}].map(j=>a.add(Na(i.add(j,1,1)))),C=a.add(Ee(i.add({bg:16777215,fg:14690858,text:"START",stripes:14690858},4,1),15790320,14690858)),b=a.add(Ee(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),15790320,1727200)),S=a.add(Ee(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),15790320,1710618)),D=a.add(Ee(i.add({bg:14690858,fg:16777215,text:"BIENVENUE A MONACO",border:16777215},4,1),16777215,14690858,16777215)),W=a.add(_n(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),B=a.add(_n(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),V=a.add(xi(!0)),et=a.add(xi(!1)),U=Ls,rt=[U.golf,U.civic,U.w124,U.ae86,U.volvo240].map(j=>a.add(Nn(j))).concat([a.add(ki(1735368)),a.add(gi(14690858))]),k=[16777215,1718922,14690858,16771272,4235472,16747184],tt=r.segs;for(let j=10;j<tt.length;j++){const Tt=tt[j],K=Tt.props;if(Tt.tunnel){tt[j-1].tunnel||K.push({t:T,x:0});continue}const ft=Tt.zone;Math.abs(Tt.curve)>.0016&&j%5===0&&ft!=="harbour"&&K.push(Tt.curve>0?{t:W,x:-16.2,r:.15}:{t:B,x:Z+5.2,r:-.15}),ft==="harbour"?(j%8===0&&K.push({t:_,x:Z+2.6,r:0},{t:_,x:-13.6,r:Math.PI}),j%6===3&&K.push({t:u,x:-(Z+t.range(4,6)),s:t.range(.9,1.2),r:t.range(0,6)}),j%7===0&&t.chance(.8)&&K.push({t:t.pick(l),x:Z+t.range(18,60),y:0,abs:!0,r:t.range(-.3,.3)+Math.PI/2}),j%13===5&&t.chance(.6)&&K.push({t:f,x:Z+t.range(70,200),y:0,abs:!0,s:t.range(.9,1.3),r:t.range(-.6,.6)}),j%9===4&&t.chance(.85)&&K.push({t:t.pick(o),x:-(Z+t.range(14,24)),tint:t.pick(Xn),r:t.range(.1,.4)}),j%16===8&&K.push({t:p,x:Z+4.5,tint:t.pick([14690858,16777215])}),j%4===1&&t.chance(.4)&&K.push({t:t.pick(v),x:t.sign()*(Z+t.range(2,5)),r:t.range(0,6),tint:t.pick(k)}),j%40===10&&K.push({t:y,x:Z+t.range(15,50),y:t.range(14,24),r:t.range(0,6)}),j%50===25&&K.push({t:t.pick(E),x:-22,r:.35})):ft==="square"||ft==="tunnel"?(j%30>3&&K.push({t:x,x:Z+9},{t:x,x:-20}),j%8===0&&K.push({t:_,x:Z+2.6,r:0},{t:_,x:-13.6,r:Math.PI}),j%8===4&&K.push({t:u,x:t.sign()*(Z+6),s:t.range(.9,1.2),r:t.range(0,6)}),j%22===11&&t.chance(.8)&&K.push({t:t.pick(g),x:t.sign()*(Z+t.range(30,60)),tint:t.pick(Xn),r:t.range(-.3,.3)}),j%7===2&&t.chance(.8)&&K.push({t:t.pick(o),x:t.sign()*(Z+t.range(14,22)),tint:t.pick(Xn),r:t.range(-.4,.4)}),j%5===1&&t.chance(.4)&&K.push({t:t.pick(v),x:t.sign()*(Z+t.range(2,5)),r:t.range(0,6),tint:t.pick(k)}),j%40===20&&K.push({t:t.pick(E),x:(j%80===20?-1:1)*(Z+11),r:j%80===20?.35:-.35})):ft==="corniche"?(j%1===0&&K.push({t:h,x:Z+2.6}),j%5===0&&t.chance(.6)&&K.push({t:c,x:-(Z+t.range(6,20)),y:13,s:t.range(.8,1.2),r:t.range(0,6)}),j%9===0&&t.chance(.5)&&K.push({t:t.pick(o),x:-(Z+t.range(14,30)),y:14,tint:t.pick(Xn),r:t.range(-.4,.4)}),j%17===0&&t.chance(.6)&&K.push({t:f,x:Z+t.range(90,260),y:0,abs:!0,s:t.range(1,1.5),r:t.range(-.6,.6)}),j%120===60&&K.push({t:t.pick(w),x:-14.2,r:.2})):(j%3===0&&K.push({t:V,x:Z+2.6},{t:et,x:-13.6}),j%2===0&&Math.abs(Tt.curve)>.0012&&K.push({t:m,x:Z+2.4}),j%4===1&&t.chance(.55)&&K.push({t:t.chance(.5)?d:c,x:-(Z+t.range(6,40)),s:t.range(.8,1.3),r:t.range(0,6)}),j%12===6&&t.chance(.6)&&K.push({t:t.pick(o),x:-(Z+t.range(18,40)),tint:t.pick(Xn),r:t.range(-.4,.4)}),j%10===5&&t.chance(.5)&&K.push({t:u,x:Z+t.range(5,9),s:t.range(.9,1.2),r:t.range(0,6)}),j%19===0&&t.chance(.6)&&K.push({t:f,x:Z+t.range(60,220),y:0,abs:!0,s:t.range(.9,1.4),r:t.range(-.6,.6)}),j%120===60&&K.push({t:t.pick(w),x:Z+3.4,r:-.2}))}for(let j=1;j<r.stageStarts.length;j++)tt[r.stageStarts[j]+4].props.push({t:b,x:0});tt[8].props.push({t:C,x:0}),tt[r.stageStarts[1]+40].props.push({t:D,x:0}),tt[r.goalSeg].props.push({t:S,x:0});const J=new Rs;J.addLayer(Cs([[0,16774360],[1.4,15790304],[3,14216436],[6,11590902],[10,8440052],[16,5943534],[26,3839204],[40,2259160],[90,1333440]],Uo),0);const at=Is(2500,1.1,16,120,[[1.6,16775392],[1.2,16773320],[1,16776168],[.6,16777215]],20);return J.addLayer(at,1),J.sun={obj:at,local:Oa(2500,1.1,16)},J.addLayer(Bi(t,2350,12,[16777215,16054527,13162728]),.8),J.addLayer(Dn(t,2250,9083568,260,j=>Math.atan2(Math.sin(j),Math.cos(j))<.2?1:.15,void 0,30),1),J.addLayer(Dn(t,2050,4880976,120,j=>Math.atan2(Math.sin(j),Math.cos(j))<0?1:0,void 0,200,[1.2,3.5]),1),J.addLayer(Fa(t,2e3,[15786184,15257776,16313560,14731432],[9085112,13148288],60,j=>{const Tt=Math.atan2(Math.sin(j),Math.cos(j));return Tt<-.3&&Tt>-1.4?1:0},.6,.2),1),J.addLayer(nu(t,1880,.4,2.2,7),1),J.addLayer(iu(t,1880,1.1,160),1),J.addLayer(Ps(1900,Uo),0),{track:r,profiles:e,props:a.defs,backdrop:J,trafficTypes:rt,gateType:S}}};class Tx{constructor(t,e,n){this.input=t,this.stage=e,this.onEnable=n,this.btns=[],this.pointers=new Map,this.held=new Set,this.enabled=!1,this.root=document.createElement("div"),this.root.id="touch",document.body.appendChild(this.root);const s=(a,o,c)=>{const l=document.createElement("div");return l.className=`tbtn ${a}`,l.textContent=o,this.root.appendChild(l),c&&this.btns.push({el:l,code:c}),l};s("left","◀","ArrowLeft"),s("right","▶","ArrowRight"),s("gas","GAS","ArrowUp"),s("brake","BRAKE","ArrowDown"),s("drift","DRIFT","Space"),s("pause","II","Escape"),s("radio","MUSIC","KeyN"),this.turboBtn=s("turbo",`TURBO
5`,"KeyT"),this.fireBtn=s("fire hidden","FIRE","KeyF"),this.autoBtn=s("auto",`AUTO
GAS`,""),this.rotate=document.createElement("div"),this.rotate.id="rotate",this.rotate.textContent=`PLEASE ROTATE
YOUR PHONE`,document.body.appendChild(this.rotate);const r={passive:!1};window.addEventListener("pointerdown",a=>this.down(a),r),window.addEventListener("pointermove",a=>this.move(a),r),window.addEventListener("pointerup",a=>this.up(a),r),window.addEventListener("pointercancel",a=>this.up(a),r),document.addEventListener("touchmove",a=>a.preventDefault(),r),document.addEventListener("gesturestart",a=>a.preventDefault(),r)}enable(){var e,n;if(this.enabled)return;this.enabled=!0,this.input.autoGas=!0,document.body.classList.add("touchmode"),this.onEnable();const t=document.documentElement;try{const s=((e=t.requestFullscreen)==null?void 0:e.call(t))??((n=t.webkitRequestFullscreen)==null?void 0:n.call(t));Promise.resolve(s).then(()=>{var r,a;return(a=(r=screen.orientation).lock)==null?void 0:a.call(r,"landscape")}).catch(()=>{})}catch{}}codeAt(t,e){if(!this.root.classList.contains("show"))return null;for(const n of this.btns){if(n.el.classList.contains("hidden"))continue;const s=n.el.getBoundingClientRect(),r=10;if(t>=s.left-r&&t<=s.right+r&&e>=s.top-r&&e<=s.bottom+r)return n.code}return null}sync(){const t=new Set;for(const e of this.pointers.values())e&&t.add(e);for(const e of this.held)t.has(e)||this.input.setVirtual(e,!1);for(const e of t)this.held.has(e)||this.input.setVirtual(e,!0);this.held=t;for(const e of this.btns)e.el.classList.toggle("on",t.has(e.code))}down(t){if((t.pointerType==="touch"||t.pointerType==="pen")&&this.enable(),!this.enabled)return;t.preventDefault();const e=this.autoBtn.getBoundingClientRect();if(this.root.classList.contains("show")&&t.clientX>=e.left&&t.clientX<=e.right&&t.clientY>=e.top&&t.clientY<=e.bottom){this.input.autoGas=!this.input.autoGas,this.autoBtn.classList.toggle("on",this.input.autoGas);return}const n=this.codeAt(t.clientX,t.clientY);if(this.pointers.set(t.pointerId,n),n)this.input.fireFirst();else{const s=this.stage.getBoundingClientRect();this.input.tap((t.clientX-s.left)/s.width*_t,(t.clientY-s.top)/s.height*Fe)}this.sync()}move(t){if(!this.enabled||!this.pointers.has(t.pointerId))return;t.preventDefault();const e=this.codeAt(t.clientX,t.clientY);e!=="Escape"&&e!=="KeyN"&&e!=="KeyT"&&this.pointers.set(t.pointerId,e),this.sync()}up(t){this.pointers.has(t.pointerId)&&(this.pointers.delete(t.pointerId),this.sync())}setFire(t){this.fireBtn.classList.contains("hidden")===t&&this.fireBtn.classList.toggle("hidden",!t)}setTurbo(t,e){const n=`TURBO
${t}`;this.turboBtn.textContent!==n&&(this.turboBtn.textContent=n),this.turboBtn.classList.toggle("empty",t===0&&!e)}update(t){const e=this.enabled&&window.innerHeight>window.innerWidth;this.rotate.classList.toggle("show",e);const n=this.enabled&&t&&!e;return this.root.classList.contains("show")!==n&&(this.root.classList.toggle("show",n),n||(this.pointers.clear(),this.sync())),this.autoBtn.classList.toggle("on",this.input.autoGas),e}}const ha=ie.width,ua=ie.height;async function Ax(){var f;try{await document.fonts.load('16px "Press Start 2P"')}catch{}const i=document.getElementById("stage"),t=document.getElementById("gl"),e=new hg({canvas:t,antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(ha,ua,!1);const n=new mn(54,ha/ua,.5,4e3),s=[Q2,rx,vx,Sx,Ex,wx],r=new G2,a=new vg,o=new Tg(document.getElementById("hud")),c=new B2(s,n,r,a,o);r.onFirstInput(()=>{a.init(),a.music("title")});const l=new Tx(r,i,()=>c.touch=!0);window.addEventListener("mousedown",g=>{if(l.enabled)return;const _=i.getBoundingClientRect();r.tap((g.clientX-_.left)/_.width*852,(g.clientY-_.top)/_.height*480)}),window.game=c,(f=window.matchMedia)!=null&&f.call(window,"(pointer: coarse)").matches&&(c.touch=!0),c.nameBox=new H2(i),c.boot();const h=()=>{const g=Math.min(window.innerWidth/ha,window.innerHeight/ua)||1,_=g>=3?Math.floor(g):g;i.style.width=`${Math.floor(ha*_)}px`,i.style.height=`${Math.floor(ua*_)}px`};window.addEventListener("resize",h),h();let u=performance.now();const d=g=>{const _=Math.max(0,Math.min(.03333333333333333,(g-u)/1e3));u=g;const m=(c.state==="race"||c.state==="countdown")&&!c.paused;l.update(m)&&m&&(c.paused=!0),l.enabled&&(l.setTurbo(c.turbos,c.turboT>0),l.setFire(c.weapons)),c.update(_),c.draw(),r.endFrame(),e.render(c.world.scene,n),requestAnimationFrame(d)};requestAnimationFrame(d)}Ax();
